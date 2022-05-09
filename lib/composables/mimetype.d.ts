export declare enum ImageMIME {
    IMGJPG = "image/jpeg",
    IMGTIFF = "image/tiff",
    IMGPNG = "image/png",
    IMGWEBM = "image/webp",
    IMGBMP = "image/bmp",
    IMGAVIF = "image/avif"
}
export declare enum AudioMIME {
    AUDIOMPEG = "audio/mpeg",
    AUDIOOCTET = "application/octet-stream",
    AUDIOAAC = "audio/aac",
    AUDIOOGG = "audio/ogg",
    AUDIOOPUS = "audio/opus",
    AUDIOWAV = "audio/wav"
}
export declare enum VideoMIME {
    VIDEOMP4 = "video/mp4",
    VIDEOWAV = "video/wav"
}
export declare enum PDFMIME {
    APPLICATIONPDF = "application/pdf"
}
export declare enum OtherMIME {
    UNTYPED = "untyped",
    TEXTPLAIN = "text/plain"
}
export declare const MIMETYPES: {
    UNTYPED: OtherMIME.UNTYPED;
    TEXTPLAIN: OtherMIME.TEXTPLAIN;
    APPLICATIONPDF: PDFMIME.APPLICATIONPDF;
    VIDEOMP4: VideoMIME.VIDEOMP4;
    VIDEOWAV: VideoMIME.VIDEOWAV;
    AUDIOMPEG: AudioMIME.AUDIOMPEG;
    AUDIOOCTET: AudioMIME.AUDIOOCTET;
    AUDIOAAC: AudioMIME.AUDIOAAC;
    AUDIOOGG: AudioMIME.AUDIOOGG;
    AUDIOOPUS: AudioMIME.AUDIOOPUS;
    AUDIOWAV: AudioMIME.AUDIOWAV;
    IMGJPG: ImageMIME.IMGJPG;
    IMGTIFF: ImageMIME.IMGTIFF;
    IMGPNG: ImageMIME.IMGPNG;
    IMGWEBM: ImageMIME.IMGWEBM;
    IMGBMP: ImageMIME.IMGBMP;
    IMGAVIF: ImageMIME.IMGAVIF;
};
export declare type MIMETYPES = typeof MIMETYPES;
