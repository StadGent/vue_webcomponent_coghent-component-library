declare const _default: import("vue").DefineComponent<{
    url: {
        type: StringConstructor;
        required: false;
    };
    width: {
        type: StringConstructor;
        required: false;
    };
    height: {
        type: StringConstructor;
        required: false;
    };
    extraClass: {
        type: StringConstructor;
        required: false;
    };
    fallBackUrl: {
        type: StringConstructor;
        required: false;
    };
}, {
    setFallback: () => void;
    imageLoaded: import("vue").Ref<boolean>;
    imageUrl: import("vue").Ref<string | undefined>;
    finalImageLoaded: () => void;
    rendered: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "loaded"[], "loaded", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    url?: unknown;
    width?: unknown;
    height?: unknown;
    extraClass?: unknown;
    fallBackUrl?: unknown;
} & {} & {
    url?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    extraClass?: string | undefined;
    fallBackUrl?: string | undefined;
}> & {
    onLoaded?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
