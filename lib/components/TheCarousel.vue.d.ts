declare const _default: import("vue").DefineComponent<{
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
    toggleCCTab: () => void;
    openCCModal: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "openingCcmodal", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, (Readonly<{
    source?: unknown;
} & {
    source: unknown[];
} & {}> & {}) | (Readonly<{
    source?: unknown;
} & {
    source: unknown[];
} & {}> & {}), {}>;
export default _default;
