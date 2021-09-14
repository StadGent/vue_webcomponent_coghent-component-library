declare type TagStyle = "primary" | "selected";
declare const _default: import("vue").DefineComponent<{
    filter: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    isSelected: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    icon: {
        type: StringConstructor;
        default: string;
        required: true;
    };
}, {
    selectFilter: () => void;
    tagSelected: import("vue").Ref<boolean>;
    styles: Record<TagStyle, string>;
    style: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:isSelected"[], "update:isSelected", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    filter?: unknown;
    isSelected?: unknown;
    icon?: unknown;
} & {
    filter: string;
    isSelected: boolean;
    icon: string;
} & {}> & {
    "onUpdate:isSelected"?: ((...args: any[]) => any) | undefined;
}, {
    filter: string;
    isSelected: boolean;
    icon: string;
}>;
export default _default;
