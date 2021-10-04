declare type TagStyle = "primary" | "selected";
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
}, {
    styles: Record<TagStyle, string>;
    style: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    filter?: unknown;
    isSelected?: unknown;
    icon?: unknown;
} & {
    filter: string;
    isSelected: boolean;
    icon: string;
} & {}> & {}, {
    filter: string;
    isSelected: boolean;
    icon: string;
}>;
export default _default;
