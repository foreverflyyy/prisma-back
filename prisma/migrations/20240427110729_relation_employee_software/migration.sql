-- DropForeignKey
ALTER TABLE "softwares" DROP CONSTRAINT "softwares_developerId_fkey";

-- AlterTable
ALTER TABLE "softwares" ALTER COLUMN "developerId" DROP NOT NULL,
ALTER COLUMN "developerId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "softwares" ADD CONSTRAINT "softwares_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;
