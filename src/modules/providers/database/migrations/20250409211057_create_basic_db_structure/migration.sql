-- CreateEnum
CREATE TYPE "RenderQueueStatus" AS ENUM ('DONE', 'ERROR', 'PROCESSING', 'READY', 'WAITING');

-- CreateEnum
CREATE TYPE "RenderQueuePriority" AS ENUM ('HIGHEST', 'HIGH', 'MEDIUM', 'LOW');

-- CreateEnum
CREATE TYPE "ProviderProcessingStage" AS ENUM ('RENDER_PROCESS');

-- CreateEnum
CREATE TYPE "ProviderEntityType" AS ENUM ('POSTGRESQL', 'RENDER_SERVICE');

-- CreateEnum
CREATE TYPE "ProviderOperationStatus" AS ENUM ('SUCCESS', 'ERROR');

-- CreateTable
CREATE TABLE "videos" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT NOT NULL,
    "subtitles" JSONB,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagesVideos" (
    "imageId" UUID NOT NULL,
    "videoId" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "imagesVideos_pkey" PRIMARY KEY ("imageId","videoId")
);

-- CreateTable
CREATE TABLE "renderQueue" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "priority" "RenderQueuePriority" NOT NULL DEFAULT 'LOW',
    "setUpScriptId" UUID NOT NULL,
    "templateId" UUID NOT NULL,
    "status" "RenderQueueStatus" NOT NULL DEFAULT 'WAITING',
    "errorText" TEXT,
    "doneAt" TIMESTAMPTZ,
    "videoId" UUID NOT NULL,

    CONSTRAINT "renderQueue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "providerLogs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stage" "ProviderProcessingStage" NOT NULL,
    "entityType" "ProviderEntityType" NOT NULL,
    "status" "ProviderOperationStatus" NOT NULL,
    "message" TEXT NOT NULL,
    "data" JSONB,

    CONSTRAINT "providerLogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "videos_url_key" ON "videos"("url");

-- CreateIndex
CREATE UNIQUE INDEX "images_url_key" ON "images"("url");

-- AddForeignKey
ALTER TABLE "imagesVideos" ADD CONSTRAINT "imagesVideos_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagesVideos" ADD CONSTRAINT "imagesVideos_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "videos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "renderQueue" ADD CONSTRAINT "renderQueue_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "videos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
