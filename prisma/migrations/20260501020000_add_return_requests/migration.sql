CREATE TABLE `ReturnRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reason` VARCHAR(191) NOT NULL,
    `details` TEXT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'submitted',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `buyerId` INTEGER NOT NULL,
    `orderItemId` INTEGER NOT NULL,

    UNIQUE INDEX `ReturnRequest_buyerId_orderItemId_key`(`buyerId`, `orderItemId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `ReturnRequest`
    ADD CONSTRAINT `ReturnRequest_buyerId_fkey`
    FOREIGN KEY (`buyerId`) REFERENCES `User`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;

ALTER TABLE `ReturnRequest`
    ADD CONSTRAINT `ReturnRequest_orderItemId_fkey`
    FOREIGN KEY (`orderItemId`) REFERENCES `OrderItem`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;
