import { PropType } from "vue";
declare type CopyrightTabInfo = {
    rights: string;
    source: string;
    publicationStatus: string;
};
declare const _default: import("vue").DefineComponent<{
    infotext: {
        type: StringConstructor;
        required: true;
    };
    mediafiles: {
        type: PropType<any[]>;
    };
    selectedIndex: {
        type: NumberConstructor;
    };
    showMoreInfo: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}, {
    toggleCCTab: () => void;
    openTab: import("vue").Ref<boolean>;
    openCCModal: () => void;
    secondaryIcons: import("vue").Ref<string[] | undefined>;
    copyrightInfo: import("vue").Ref<CopyrightTabInfo | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "openingCcmodal", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, (Readonly<{
    infotext?: unknown;
    mediafiles?: unknown;
    selectedIndex?: unknown;
    showMoreInfo?: unknown;
} & {
    infotext: string;
    showMoreInfo: boolean;
} & {
    mediafiles?: any[] | undefined;
    selectedIndex?: number | undefined;
}> & {}) | (Readonly<{
    infotext?: unknown;
    mediafiles?: unknown;
    selectedIndex?: unknown;
    showMoreInfo?: unknown;
} & {
    infotext: string;
    showMoreInfo: boolean;
} & {
    mediafiles?: any[] | undefined;
    selectedIndex?: number | undefined;
}> & {}), {
    showMoreInfo: boolean;
}>;
export default _default;
