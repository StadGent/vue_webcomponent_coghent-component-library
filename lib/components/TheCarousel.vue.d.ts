import { PropType } from "vue";
declare type ImageSource = {
    imageUrl: string;
    infoJson: string;
};
declare const _default: import("vue").DefineComponent<{
    infotext: {
        type: StringConstructor;
        required: true;
    };
    source: {
        type: PropType<ImageSource[]>;
        required: true;
    };
    mediafiles: {
        type: ArrayConstructor;
    };
}, {
    selectedIndex: import("vue").Ref<number>;
    prevImage: () => void;
    nextImage: () => void;
    getNextImage: () => number;
    getPrevImage: () => number;
    openFullscreenModal: () => void;
    closeFullscreenModal: () => void;
    openIIIFModal: import("vue").Ref<boolean>;
    openTab: import("vue").Ref<boolean>;
    openCCModal: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "openingCcmodal" | "currentCarouselPicture", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, (Readonly<{
    infotext?: unknown;
    source?: unknown;
    mediafiles?: unknown;
} & {
    infotext: string;
    source: ImageSource[];
} & {
    mediafiles?: unknown[] | undefined;
}> & {}) | (Readonly<{
    infotext?: unknown;
    source?: unknown;
    mediafiles?: unknown;
} & {
    infotext: string;
    source: ImageSource[];
} & {
    mediafiles?: unknown[] | undefined;
}> & {}), {}>;
export default _default;
