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
}, {
    onClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "onClick")[], "update:modelValue" | "onClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    placeholder?: unknown;
    disabled?: unknown;
    ref?: unknown;
    modelValue?: unknown;
} & {
    disabled: boolean;
    ref: string;
    modelValue: string;
} & {
    placeholder?: string | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onOnClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: string;
}>;
export default _default;
