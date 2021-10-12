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
    openModal: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    source?: unknown;
} & {
    source: unknown[];
} & {}> & {}, {}>;
export default _default;
