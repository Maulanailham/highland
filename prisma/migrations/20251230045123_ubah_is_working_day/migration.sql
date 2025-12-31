/*
  Warnings:

  - You are about to drop the column `is_working_day` on the `working_days` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "working_days" DROP COLUMN "is_working_day",
ADD COLUMN     "isWorkingDay" BOOLEAN NOT NULL DEFAULT true;
