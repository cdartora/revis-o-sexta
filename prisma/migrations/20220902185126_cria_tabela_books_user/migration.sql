-- CreateTable
CREATE TABLE `BooksUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `book_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BooksUser` ADD CONSTRAINT `BooksUser_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `Books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BooksUser` ADD CONSTRAINT `BooksUser_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
