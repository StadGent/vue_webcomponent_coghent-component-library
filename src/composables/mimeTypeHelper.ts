import { MediaFile } from "@/queries";

export const getFileNameByMimeType = (
  mediafile: MediaFile
): string | undefined => {
  let filename = undefined;
  if (mediafile.mimetype) {
    if (mediafile.mediatype?.video) {
      filename =
        mediafile.thumbnail_file_location ||
        mediafile.transcode_filename ||
        mediafile.filename;
    } else {
      filename = mediafile.transcode_filename || mediafile.filename;
    }
  }
  return filename || mediafile.filename || undefined;
};
