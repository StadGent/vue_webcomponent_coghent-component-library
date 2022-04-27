import { MediaFile } from "@/queries";

export const getFileNameByMimeType = (
  mediafile: MediaFile
): string | undefined => {
  if (mediafile.mimetype) {
    switch (mediafile.mimetype) {
      case "video/mp4":
      case "video/wav":
        return (
          mediafile.thumbnail_file_location ||
          mediafile.transcode_filename ||
          mediafile.filename ||
          undefined
        );
      case "image/jpeg":
      case "image/tiff":
      case "image/png":
        return mediafile.transcode_filename || mediafile.filename || undefined;
    }
  }
};
