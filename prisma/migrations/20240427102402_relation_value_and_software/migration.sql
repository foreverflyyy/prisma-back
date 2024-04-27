/*
  Warnings:

  - Made the column `firmId` on table `softwares` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "softwares" DROP CONSTRAINT "softwares_firmId_fkey";

-- DropIndex
DROP INDEX "firmId";

-- AlterTable
ALTER TABLE "softwares" ALTER COLUMN "firmId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "softwares" ADD CONSTRAINT "softwares_firmId_fkey" FOREIGN KEY ("firmId") REFERENCES "firms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "softwares" ADD CONSTRAINT "softwares_valueId_fkey" FOREIGN KEY ("valueId") REFERENCES "values"("id") ON DELETE SET NULL ON UPDATE CASCADE;
