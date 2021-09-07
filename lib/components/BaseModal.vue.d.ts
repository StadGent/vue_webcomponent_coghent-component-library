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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:isShow"[], "update:isShow", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    isShow?: unknown;
} & {
    isShow: boolean;
} & {}> & {
    "onUpdate:isShow"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
