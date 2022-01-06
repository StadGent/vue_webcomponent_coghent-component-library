import { PropType } from "vue";
declare type CustomIcon = "storybox" | "globe" | "delete" | "edit" | "logout" | "user" | "close" | "info" | "link" | "check" | "fullscreen" | "monitor" | "zoomIn" | "zoomOut" | "chest" | "talk" | "arrowRight" | "arrowRightLine" | "arrowLeftLine" | "creativeCommonsCC" | "creativeCommonsSA" | "creativeCommonsBY" | "creativeCommonsNC" | "copyrightCategoryCC" | "copyrightCategoryPDM" | "copyrightCategoryRS" | "copyrightCategoryNC" | "copyrightCategoryND" | "copyrightCategoryZero" | "copyrightCategoryBY" | "copyrightCategoryIC" | "copyrightCategoryICUR" | "copyrightCategoryICNC" | "surprise";
declare const _default: import("vue").DefineComponent<{
    icon: {
        type: PropType<CustomIcon>;
        default: string;
        required: true;
    };
}, {
    icons: Record<CustomIcon, string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    icon?: unknown;
} & {
    icon: CustomIcon;
} & {}> & {}, {
    icon: CustomIcon;
}>;
export default _default;
