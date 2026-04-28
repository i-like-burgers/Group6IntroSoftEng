ALTER TABLE `Order`
    ADD COLUMN `shipToName` VARCHAR(191) NOT NULL,
    ADD COLUMN `shipToLine1` VARCHAR(191) NOT NULL,
    ADD COLUMN `shipToLine2` VARCHAR(191) NULL,
    ADD COLUMN `shipToCity` VARCHAR(191) NOT NULL,
    ADD COLUMN `shipToState` VARCHAR(191) NOT NULL,
    ADD COLUMN `shipToPostalCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `shipToCountry` VARCHAR(191) NOT NULL;

CREATE TABLE `SellerWebhookSubscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `endpointUrl` VARCHAR(191) NULL,
    `signingSecret` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `sellerId` INTEGER NOT NULL,

    UNIQUE INDEX `SellerWebhookSubscription_sellerId_key`(`sellerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `SellerWebhookSubscription`
    ADD CONSTRAINT `SellerWebhookSubscription_sellerId_fkey`
    FOREIGN KEY (`sellerId`) REFERENCES `User`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;
