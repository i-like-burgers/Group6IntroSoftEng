CREATE TABLE `Compare` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `buyerID` INTEGER NOT NULL,
    `productID` INTEGER NOT NULL,

    UNIQUE INDEX `Compare_buyerID_productID_key`(`buyerID`, `productID`),
    INDEX `Compare_productID_idx`(`productID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `Compare`
    ADD CONSTRAINT `Compare_buyerID_fkey`
    FOREIGN KEY (`buyerID`) REFERENCES `User`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;

ALTER TABLE `Compare`
    ADD CONSTRAINT `Compare_productID_fkey`
    FOREIGN KEY (`productID`) REFERENCES `Product`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;
