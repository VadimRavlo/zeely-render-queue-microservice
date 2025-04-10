/*
  Warnings:

  - The values [RENDER_PROCESS] on the enum `ProviderProcessingStage` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProviderProcessingStage_new" AS ENUM ('VIDEO_RENDER_START', 'VIDEO_RENDER_END');
ALTER TABLE "providerLogs" ALTER COLUMN "stage" TYPE "ProviderProcessingStage_new" USING ("stage"::text::"ProviderProcessingStage_new");
ALTER TYPE "ProviderProcessingStage" RENAME TO "ProviderProcessingStage_old";
ALTER TYPE "ProviderProcessingStage_new" RENAME TO "ProviderProcessingStage";
DROP TYPE "ProviderProcessingStage_old";
COMMIT;
