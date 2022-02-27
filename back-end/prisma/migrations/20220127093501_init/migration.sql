-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_studio` INTEGER NULL,
    `label` VARCHAR(255) NULL,

    INDEX `id_studio`(`id_studio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `friend` (
    `id` INTEGER NOT NULL,
    `user_id` INTEGER NULL,

    INDEX `user_id`(`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `planning` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `duration` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `link` TEXT NOT NULL,
    `id_studio` INTEGER NOT NULL,

    INDEX `id_studio`(`id_studio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playlist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `studio_id` INTEGER NOT NULL,

    INDEX `studio_id`(`studio_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playlist_videos` (
    `vod_id` INTEGER NOT NULL,
    `playlist_id` INTEGER NOT NULL,

    INDEX `vod_id`(`vod_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `studio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logo` TEXT NULL,
    `name` VARCHAR(255) NOT NULL,
    `background` VARCHAR(255) NULL,
    `background2` VARCHAR(255) NULL,
    `background_secondary` VARCHAR(255) NULL,
    `banner` VARCHAR(255) NULL,
    `color_primary` VARCHAR(255) NULL,
    `color_secondary` VARCHAR(255) NULL,
    `typo` VARCHAR(255) NULL,
    `main_title` TEXT NULL,
    `main_description` TEXT NULL,
    `title1` TEXT NULL,
    `description1` TEXT NULL,
    `url1` TEXT NULL,
    `title2` TEXT NULL,
    `description2` TEXT NULL,
    `url2` TEXT NULL,
    `title3` TEXT NULL,
    `description3` TEXT NULL,
    `url3` TEXT NULL,
    `is_on_stream` BOOLEAN NULL,
    `stream_url` TEXT NULL,
    `username` VARCHAR(191) NULL,

    UNIQUE INDEX `studio_name_key`(`name`),
    UNIQUE INDEX `studio_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_planning` (
    `user_id` INTEGER NOT NULL,
    `planning_id` INTEGER NOT NULL,

    INDEX `user_id`(`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_studios` (
    `user_id` INTEGER NOT NULL,
    `studio_id` INTEGER NOT NULL,

    INDEX `studio_id`(`studio_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` INTEGER NOT NULL DEFAULT 2,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `avatar` TEXT NOT NULL,
    `firstname` VARCHAR(50) NULL,
    `lastname` VARCHAR(50) NULL,
    `adresse` VARCHAR(255) NULL,
    `postal_code` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,
    `country` VARCHAR(255) NULL,
    `phone` INTEGER NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `videos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_studio` INTEGER NOT NULL,
    `category_id` INTEGER NULL,
    `title` VARCHAR(255) NOT NULL,
    `url_miniature` TEXT NOT NULL,
    `url_video` TEXT NOT NULL,

    INDEX `id_studio`(`id_studio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `survey_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey_question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `type` INTEGER NOT NULL,
    `surveyId` INTEGER NOT NULL,

    INDEX `survey_question_surveyId_fkey`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey_question_choice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `questionId` INTEGER NOT NULL,

    INDEX `survey_question_choice_questionId_fkey`(`questionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `societe` VARCHAR(255) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `recontact` BOOLEAN NULL,

    UNIQUE INDEX `survey_user_societe_key`(`societe`),
    UNIQUE INDEX `survey_user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey_user_answer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `surveyQuestionChoiceId` INTEGER NOT NULL,
    `userSociete` VARCHAR(191) NOT NULL,
    `Other` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`id_studio`) REFERENCES `studio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `friend` ADD CONSTRAINT `friend_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `planning` ADD CONSTRAINT `planning_ibfk_1` FOREIGN KEY (`id_studio`) REFERENCES `studio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `playlist` ADD CONSTRAINT `playlist_ibfk_2` FOREIGN KEY (`studio_id`) REFERENCES `studio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `playlist` ADD CONSTRAINT `playlist_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `playlist_videos` ADD CONSTRAINT `playlist_videos_ibfk_1` FOREIGN KEY (`vod_id`) REFERENCES `videos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `studio` ADD CONSTRAINT `studio_username_fkey` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_planning` ADD CONSTRAINT `user_planning_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_studios` ADD CONSTRAINT `user_studios_ibfk_1` FOREIGN KEY (`studio_id`) REFERENCES `studio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `videos` ADD CONSTRAINT `videos_ibfk_1` FOREIGN KEY (`id_studio`) REFERENCES `studio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `survey_question` ADD CONSTRAINT `survey_question_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `survey`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `survey_question_choice` ADD CONSTRAINT `survey_question_choice_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `survey_question`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `survey_user_answer` ADD CONSTRAINT `survey_user_answer_surveyQuestionChoiceId_fkey` FOREIGN KEY (`surveyQuestionChoiceId`) REFERENCES `survey_question_choice`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `survey_user_answer` ADD CONSTRAINT `survey_user_answer_userSociete_fkey` FOREIGN KEY (`userSociete`) REFERENCES `survey_user`(`societe`) ON DELETE RESTRICT ON UPDATE CASCADE;
