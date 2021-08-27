declare type TagStyle = "primary" | "selected";
declare const _default: import("vue").DefineComponent<{
    filter: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    selected: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}, {
    selectFilter: () => void;
    tagSelected: import("vue").Ref<boolean>;
    styles: Record<TagStyle, string>;
    style: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:selected"[], "update:selected", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    filter?: unknown;
    selected?: unknown;
} & {
    selected: boolean;
    filter: string;
} & {}> & {
    "onUpdate:selected"?: ((...args: any[]) => any) | undefined;
}, {
    selected: boolean;
    filter: string;
}>;
export default _default;
