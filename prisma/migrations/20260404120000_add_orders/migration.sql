CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL DEFAULT 'placed',
    `subtotal` DOUBLE NOT NULL,
    `taxRate` DOUBLE NOT NULL,
    `taxAmount` DOUBLE NOT NULL,
    `total` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `buyerId` INTEGER NOT NULL,

    INDEX `Order_buyerId_idx`(`buyerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `OrderItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `sellerId` INTEGER NOT NULL,
    `productName` VARCHAR(191) NOT NULL,
    `unitPrice` DOUBLE NOT NULL,
    `quantity` INTEGER NOT NULL,
    `lineTotal` DOUBLE NOT NULL,
    `orderId` INTEGER NOT NULL,

    INDEX `OrderItem_orderId_idx`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `Order`
    ADD CONSTRAINT `Order_buyerId_fkey`
    FOREIGN KEY (`buyerId`) REFERENCES `User`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;

ALTER TABLE `OrderItem`
    ADD CONSTRAINT `OrderItem_orderId_fkey`
    FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;
