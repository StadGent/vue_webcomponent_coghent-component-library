declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
    };
    searchLabel: {
        type: StringConstructor;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    debounce: {
        type: BooleanConstructor;
        default: boolean;
    };
    debounceWait: {
        type: NumberConstructor;
        default: number;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    inputValue: import("vue").Ref<string>;
    onClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "onClick")[], "update:modelValue" | "onClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
    };
    searchLabel: {
        type: StringConstructor;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    debounce: {
        type: BooleanConstructor;
        default: boolean;
    };
    debounceWait: {
        type: NumberConstructor;
        default: number;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onOnClick?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    debounce: boolean;
    debounceWait: number;
    loading: boolean;
}>;
export default _default;
