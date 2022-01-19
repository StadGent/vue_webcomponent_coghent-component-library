declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: true;
    };
    keyWord: {
        type: StringConstructor;
        required: true;
    };
    errorText: {
        type: StringConstructor;
        required: true;
    };
    strongLabel: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    keyWord?: unknown;
    errorText?: unknown;
    strongLabel?: unknown;
} & {
    type: string;
    keyWord: string;
    errorText: string;
    strongLabel: boolean;
} & {}> & {}, {
    strongLabel: boolean;
}>;
export default _default;
