const prisma = require('../lib/prisma');

async function getSimilar(productId) {
    const product = await prisma.product.findUnique({
        where: { id: productId }
    });

    if (!product) {
        throw new Error('Product not found');
    }

    return prisma.product.findMany({
        where: {
            sellerId: product.sellerId,
            isListed: true,
            NOT: { id: productId },
            seller: {
                banned: false
            }
        }
    });
}

async function getCompareItems(buyerID) {
    const itemList = await prisma.compare.findMany({
        where: {
            buyerID
        },
        include: {
            product: {
                select: {
                    id: true,
                    name: true,
                    description: true,
                    price: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return itemList.map((item) => item.product);
}

async function addCompareItem({ buyerID, productID }) {
    return prisma.compare.upsert({
        where: {
            buyerID_productID: {
                buyerID,
                productID
            }
        },
        update: {},
        create: {
            buyerID,
            productID
        }
    });
}

async function removeCompareItem({ buyerID, productID }) {
    return prisma.compare.deleteMany({
        where: {
            buyerID,
            productID
        }
    });
}

const VISIBLE_PRODUCT_FILTER = {
    isListed: true,
    listingStatus: 'approved',
    seller: {
        banned: false
    }
};

async function randomAccess() {
    const count = await prisma.product.count({
        where: VISIBLE_PRODUCT_FILTER
    });

    if (count === 0) return null;

    for (let i = 0; i < 3; i++) {
        const rand = Math.floor(Math.random() * count);

        const product = await prisma.product.findFirst({
            where: VISIBLE_PRODUCT_FILTER,
            include: {
                seller: {
                    select: {
                        username: true
                    }
                }
            },
            skip: rand,
            take: 1,
            orderBy: { id: 'asc' }
        });

        if (product) return product;
    }

    return null;
}

module.exports = {
    addCompareItem,
    getCompareItems,
    getSimilar,
    removeCompareItem,
    randomAccess
};
