/*
  Warnings:

  - You are about to drop the column `day_of_week` on the `working_days` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dayOfWeek]` on the table `working_days` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dayOfWeek` to the `working_days` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "working_days_day_of_week_key";

-- AlterTable
ALTER TABLE "working_days" DROP COLUMN "day_of_week",
ADD COLUMN     "dayOfWeek" SMALLINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "working_days_dayOfWeek_key" ON "working_days"("dayOfWeek");
