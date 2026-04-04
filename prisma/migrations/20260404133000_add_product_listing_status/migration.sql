ALTER TABLE `Product`
    ADD COLUMN `listingStatus` VARCHAR(191) NOT NULL DEFAULT 'pending';

UPDATE `Product`
SET `listingStatus` = CASE
    WHEN `isListed` = true THEN 'approved'
    ELSE 'pending'
END;
