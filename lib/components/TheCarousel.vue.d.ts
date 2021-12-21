declare const _default: import("vue").DefineComponent<{
    infotext: {
        type: StringConstructor;
        required: true;
    };
    source: {
        type: ArrayConstructor;
        required: true;
    };
}, {
    selectedIndex: import("vue").Ref<number>;
    prevImage: () => void;
    nextImage: () => void;
    getNextImage: () => number;
    getPrevImage: () => number;
    openFullscreenModal: () => void;
    openIIIFModal: import("vue").Ref<boolean>;
    openTab: import("vue").Ref<boolean>;
    openCCModal: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "openingCcmodal" | "currentCarouselPicture", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, (Readonly<{
    infotext?: unknown;
    source?: unknown;
} & {
    infotext: string;
    source: unknown[];
} & {}> & {}) | (Readonly<{
    infotext?: unknown;
    source?: unknown;
} & {
    infotext: string;
    source: unknown[];
} & {}> & {}), {}>;
export default _default;
