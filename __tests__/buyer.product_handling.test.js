describe('buyer product handling', () => {
    afterEach(() => {
        jest.restoreAllMocks();
        jest.resetModules();
        jest.dontMock('../lib/prisma');
    });

    test('randomAccess selects only listed, approved products from active sellers', async () => {
        jest.resetModules();

        const prismaMock = {
            product: {
                count: jest.fn().mockResolvedValue(2),
                findFirst: jest.fn().mockResolvedValue({
                    id: 12,
                    name: 'Visible Product'
                })
            }
        };

        jest.doMock('../lib/prisma', () => prismaMock);
        jest.spyOn(Math, 'random').mockReturnValue(0.5);

        const { randomAccess } = require('../buyer/product_handling');
        const product = await randomAccess();

        const visibleProductFilter = {
            isListed: true,
            listingStatus: 'approved',
            seller: {
                banned: false
            }
        };

        expect(product).toEqual({
            id: 12,
            name: 'Visible Product'
        });
        expect(prismaMock.product.count).toHaveBeenCalledWith({
            where: visibleProductFilter
        });
        expect(prismaMock.product.findFirst).toHaveBeenCalledWith({
            where: visibleProductFilter,
            include: {
                seller: {
                    select: {
                        username: true
                    }
                }
            },
            skip: 1,
            take: 1,
            orderBy: { id: 'asc' }
        });
    });

    test('randomAccess returns null when no products are visible', async () => {
        jest.resetModules();

        const prismaMock = {
            product: {
                count: jest.fn().mockResolvedValue(0),
                findFirst: jest.fn()
            }
        };

        jest.doMock('../lib/prisma', () => prismaMock);

        const { randomAccess } = require('../buyer/product_handling');
        const product = await randomAccess();

        expect(product).toBeNull();
        expect(prismaMock.product.findFirst).not.toHaveBeenCalled();
    });
});
