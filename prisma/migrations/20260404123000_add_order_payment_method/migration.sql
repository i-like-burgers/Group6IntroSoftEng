ALTER TABLE `Order`
    ADD COLUMN `paymentMethod` VARCHAR(191) NOT NULL DEFAULT 'demo_card';
