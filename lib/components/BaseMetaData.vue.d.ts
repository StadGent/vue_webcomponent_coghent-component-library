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
    clickable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    keyWord?: unknown;
    errorText?: unknown;
    strongLabel?: unknown;
    clickable?: unknown;
} & {
    type: string;
    keyWord: string;
    errorText: string;
    strongLabel: boolean;
    clickable: boolean;
} & {}> & {}, {
    strongLabel: boolean;
    clickable: boolean;
}>;
export default _default;
