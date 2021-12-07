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
}, {
    imageLoaded: import("vue").Ref<boolean>;
    finalImageLoaded: () => void;
    rendered: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "loaded"[], "loaded", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    url?: unknown;
    width?: unknown;
    height?: unknown;
    extraClass?: unknown;
} & {} & {
    url?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    extraClass?: string | undefined;
}> & {
    onLoaded?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
