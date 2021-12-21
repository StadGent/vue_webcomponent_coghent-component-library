declare const _default: import("vue").DefineComponent<{
    infotext: {
        type: StringConstructor;
        required: true;
    };
    mediafiles: {
        type: ArrayConstructor;
    };
    selectedIndex: {
        type: NumberConstructor;
    };
}, {
    toggleCCTab: () => void;
    openTab: import("vue").Ref<boolean>;
    openCCModal: () => void;
    customIcon: import("vue").Ref<string | undefined>;
    secondaryIcons: import("vue").Ref<string[] | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "openingCcmodal", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, (Readonly<{
    infotext?: unknown;
    mediafiles?: unknown;
    selectedIndex?: unknown;
} & {
    infotext: string;
} & {
    mediafiles?: unknown[] | undefined;
    selectedIndex?: number | undefined;
}> & {}) | (Readonly<{
    infotext?: unknown;
    mediafiles?: unknown;
    selectedIndex?: unknown;
} & {
    infotext: string;
} & {
    mediafiles?: unknown[] | undefined;
    selectedIndex?: number | undefined;
}> & {}), {}>;
export default _default;
