export enum ImageMIME {
  IMGJPG = "image/jpeg",
  IMGTIFF = "image/tiff",
  IMGPNG = "image/png",
  IMGWEBM = "image/webp",
  IMGBMP = "image/bmp",
  IMGAVIF = "image/avif",
}
export enum AudioMIME {
  AUDIOMPEG = "audio/mpeg",
  AUDIOAAC = "audio/aac",
  AUDIOOGG = "audio/ogg",
  AUDIOOPUS = "audio/opus",
  AUDIOWAV = "audio/wav",
}
export enum VideoMIME {
  VIDEOMP4 = "video/mp4",
  VIDEOWAV = "video/wav",
}
export enum PDFMIME {
  APPLICATIONPDF = "application/pdf",
}

export enum OtherMIME {
  UNTYPED = "untyped",
  TEXTPLAIN = "text/plain",
}

export const MIMETYPES = {
  ...ImageMIME,
  ...AudioMIME,
  ...VideoMIME,
  ...PDFMIME,
  ...OtherMIME,
};
export type MIMETYPES = typeof MIMETYPES;
