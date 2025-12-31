/*
  Warnings:

  - You are about to drop the column `dayOfWeek` on the `working_days` table. All the data in the column will be lost.
  - You are about to drop the column `isWorkingDay` on the `working_days` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[day_of_week]` on the table `working_days` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `day_of_week` to the `working_days` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "working_days_dayOfWeek_key";

-- AlterTable
ALTER TABLE "working_days" DROP COLUMN "dayOfWeek",
DROP COLUMN "isWorkingDay",
ADD COLUMN     "day_of_week" SMALLINT NOT NULL,
ADD COLUMN     "is_working_day" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "working_days_day_of_week_key" ON "working_days"("day_of_week");
