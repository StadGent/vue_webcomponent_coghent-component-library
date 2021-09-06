declare const _default: import("vue").DefineComponent<{
    isShow: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
}, {
    show: import("vue").Ref<{
        valueOf: () => boolean;
    }>;
    closeModal: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    isShow?: unknown;
} & {
    isShow: boolean;
} & {}> & {}, {}>;
export default _default;
