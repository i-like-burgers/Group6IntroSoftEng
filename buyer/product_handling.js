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

module.exports = {
    addCompareItem,
    getCompareItems,
    getSimilar
};
