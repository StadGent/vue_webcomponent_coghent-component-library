import { MediaFile } from "@/queries";

export const getFileNameByMimeType = (
  mediafile: MediaFile
): string | undefined => {
  if (mediafile.mimetype) {
    if (mediafile.mediatype?.video) {
      return (
        mediafile.thumbnail_file_location ||
        mediafile.transcode_filename ||
        mediafile.filename ||
        undefined
      );
    } else if (mediafile.mediatype?.image) {
      return mediafile.transcode_filename || mediafile.filename || undefined;
    }
  }
};
