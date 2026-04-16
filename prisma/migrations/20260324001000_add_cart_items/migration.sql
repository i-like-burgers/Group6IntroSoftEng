CREATE TABLE `CartItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `buyerId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,

    UNIQUE INDEX `CartItem_buyerId_productId_key`(`buyerId`, `productId`),
    INDEX `CartItem_productId_idx`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `CartItem`
    ADD CONSTRAINT `CartItem_buyerId_fkey`
    FOREIGN KEY (`buyerId`) REFERENCES `User`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;

ALTER TABLE `CartItem`
    ADD CONSTRAINT `CartItem_productId_fkey`
    FOREIGN KEY (`productId`) REFERENCES `Product`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;
