declare type TagStyle = "primary" | "selected" | "loading" | "bigPrimary" | "bigSelected" | "bigLoading";
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
    small: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    styles: Record<TagStyle, string>;
    style: import("vue").ComputedRef<string | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    small: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    loading: boolean;
    filter: string;
    isSelected: boolean;
    icon: string;
    small: boolean;
}>;
export default _default;
