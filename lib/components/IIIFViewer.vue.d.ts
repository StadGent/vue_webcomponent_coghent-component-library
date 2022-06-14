declare const _default: import("vue").DefineComponent<{
    imageUrl: {
        type: StringConstructor;
        default: string;
    };
    canGoFullScreen: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}, {
    OpenSeadragonDiv: import("vue").Ref<HTMLDivElement | undefined>;
    zoomInDiv: import("vue").Ref<string | undefined>;
    zoomOutDiv: import("vue").Ref<string | undefined>;
    fullPageButtonDiv: import("vue").Ref<string | undefined>;
    homeDiv: import("vue").Ref<string | undefined>;
    loading: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    imageUrl: {
        type: StringConstructor;
        default: string;
    };
    canGoFullScreen: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}>>, {
    imageUrl: string;
    canGoFullScreen: boolean;
}>;
export default _default;
