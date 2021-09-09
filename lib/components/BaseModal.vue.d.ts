declare const _default: import("vue").DefineComponent<{
    isShow: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    showHeader: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    show: import("vue").Ref<{
        valueOf: () => boolean;
    }>;
    closeModal: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:isShow"[], "update:isShow", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    isShow?: unknown;
    showHeader?: unknown;
} & {
    isShow: boolean;
    showHeader: boolean;
} & {}> & {
    "onUpdate:isShow"?: ((...args: any[]) => any) | undefined;
}, {
    showHeader: boolean;
}>;
export default _default;
