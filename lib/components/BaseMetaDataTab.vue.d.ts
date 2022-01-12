declare const _default: import("vue").DefineComponent<{
    tabNames: {
        type: ArrayConstructor;
        required: true;
    };
    hidden: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    setSelectedIndex: (index: number) => void;
    selectedIndex: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    tabNames?: unknown;
    hidden?: unknown;
} & {
    tabNames: unknown[];
    hidden: boolean;
} & {}> & {}, {
    hidden: boolean;
}>;
export default _default;
