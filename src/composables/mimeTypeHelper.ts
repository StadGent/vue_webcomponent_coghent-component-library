import { MediaFile } from "@/queries";

export const getFileNameByMimeType = (
  mediafile: MediaFile
): string | undefined => {
  if (mediafile.mimetype) {
    const simpleFileType = getSimpleFileTypeByMimeType(mediafile.mimetype);
    if (simpleFileType == "video") {
      return (
        mediafile.thumbnail_file_location ||
        mediafile.transcode_filename ||
        mediafile.filename ||
        undefined
      );
    } else if (simpleFileType == "image") {
      return mediafile.transcode_filename || mediafile.filename || undefined;
    }
  }
};

export const getSimpleFileTypeByMimeType = (
  mimeType: string
): string | undefined => {
  let simpleFileType = undefined;
  console.log(mimeType);
  switch (mimeType) {
    case "video/mp4":
    case "video/wav":
      simpleFileType = "video";
      break;
    case "image/jpeg":
    case "image/tiff":
    case "image/png":
      simpleFileType = "image";
      break;
  }
  return simpleFileType;
};
