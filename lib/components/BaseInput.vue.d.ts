declare const _default: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    ref: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    styling: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}, {
    onClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "onClick")[], "update:modelValue" | "onClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    ref: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    styling: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onOnClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: string;
    styling: string;
}>;
export default _default;
