/*
  Warnings:

  - Made the column `username` on table `studio` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `studio` DROP FOREIGN KEY `studio_username_fkey`;

-- AlterTable
ALTER TABLE `studio` MODIFY `username` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `avatar` TEXT NULL;

-- AddForeignKey
ALTER TABLE `studio` ADD CONSTRAINT `studio_username_fkey` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE NO ACTION ON UPDATE NO ACTION;
