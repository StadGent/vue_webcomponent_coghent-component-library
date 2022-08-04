declare const _default: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
    };
    icon: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    styling: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}, {
    submit: () => void;
    inputValue: import("vue").Ref<string>;
    checkIfEnter: (event: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submitField"[], "submitField", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
    };
    icon: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    styling: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}>> & {
    onSubmitField?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    styling: string;
}>;
export default _default;
