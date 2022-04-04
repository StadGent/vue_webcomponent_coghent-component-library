export enum ImageMIME {
  IMGJPG = 'image/jpeg',
  IMGTIFF = 'image/tiff',
  IMGPNG = 'image/png'
}
export enum AudioMIME {
  AUDIOMPEG = 'audio/mpeg',
}
export enum VideoMIME {
  VIDEOMP4 = 'video/mp4',
  VIDEOWAV = 'video/wav',
}

export enum OtherMIME {
  UNTYPED = 'untyped'
}

export const MIMETYPES = {
  ...ImageMIME,
  ...AudioMIME,
  ...VideoMIME,
}
export type MIMETYPES = typeof MIMETYPES