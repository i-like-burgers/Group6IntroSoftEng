CREATE TABLE `SellerWallet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `balance` DOUBLE NOT NULL DEFAULT 0,
    `totalEarned` DOUBLE NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `sellerId` INTEGER NOT NULL,

    UNIQUE INDEX `SellerWallet_sellerId_key`(`sellerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `SellerPayout` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` DOUBLE NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'paid',
    `note` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `sellerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `SellerBankAccount` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `accountHolder` VARCHAR(191) NOT NULL,
    `bankName` VARCHAR(191) NOT NULL,
    `routingLast4` VARCHAR(191) NOT NULL,
    `accountLast4` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `sellerId` INTEGER NOT NULL,

    UNIQUE INDEX `SellerBankAccount_sellerId_key`(`sellerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `SellerWallet`
    ADD CONSTRAINT `SellerWallet_sellerId_fkey`
    FOREIGN KEY (`sellerId`) REFERENCES `User`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;

ALTER TABLE `SellerBankAccount`
    ADD CONSTRAINT `SellerBankAccount_sellerId_fkey`
    FOREIGN KEY (`sellerId`) REFERENCES `User`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;

ALTER TABLE `SellerPayout`
    ADD CONSTRAINT `SellerPayout_sellerId_fkey`
    FOREIGN KEY (`sellerId`) REFERENCES `User`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;
