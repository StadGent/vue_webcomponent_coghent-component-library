export declare enum ImageMIME {
    IMGJPG = "image/jpeg",
    IMGTIFF = "image/tiff",
    IMGPNG = "image/png"
}
export declare enum AudioMIME {
    AUDIOMPEG = "audio/mpeg"
}
export declare enum VideoMIME {
    VIDEOMP4 = "video/mp4",
    VIDEOWAV = "video/wav"
}
export declare enum OtherMIME {
    UNTYPED = "untyped"
}
export declare const MIMETYPES: {
    VIDEOMP4: VideoMIME.VIDEOMP4;
    VIDEOWAV: VideoMIME.VIDEOWAV;
    AUDIOMPEG: AudioMIME.AUDIOMPEG;
    IMGJPG: ImageMIME.IMGJPG;
    IMGTIFF: ImageMIME.IMGTIFF;
    IMGPNG: ImageMIME.IMGPNG;
};
export declare type MIMETYPES = typeof MIMETYPES;
