declare type TagStyle = "primary" | "selected" | "loading";
declare const _default: import("vue").DefineComponent<{
    filter: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    isSelected: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    icon: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    styles: Record<TagStyle, string>;
    style: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    filter?: unknown;
    isSelected?: unknown;
    icon?: unknown;
    loading?: unknown;
} & {
    loading: boolean;
    filter: string;
    isSelected: boolean;
    icon: string;
} & {}> & {}, {
    loading: boolean;
    filter: string;
    isSelected: boolean;
    icon: string;
}>;
export default _default;
