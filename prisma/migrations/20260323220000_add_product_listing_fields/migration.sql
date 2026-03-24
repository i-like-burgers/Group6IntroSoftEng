ALTER TABLE `Product`
    ADD COLUMN `isListed` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `sellerId` INTEGER NOT NULL;

CREATE INDEX `Product_sellerId_idx` ON `Product`(`sellerId`);

ALTER TABLE `Product`
    ADD CONSTRAINT `Product_sellerId_fkey`
    FOREIGN KEY (`sellerId`) REFERENCES `User`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;
