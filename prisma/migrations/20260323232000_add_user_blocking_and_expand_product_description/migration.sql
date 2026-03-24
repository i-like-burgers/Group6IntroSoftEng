ALTER TABLE `User`
    ADD COLUMN `blocked` BOOLEAN NOT NULL DEFAULT false;

ALTER TABLE `Product`
    MODIFY `description` TEXT NULL;
