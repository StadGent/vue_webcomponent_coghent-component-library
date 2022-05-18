import { PropType } from "vue";
declare type CustomIcon = "storybox" | "globe" | "home" | "delete" | "wasteBasket" | "edit" | "logout" | "user" | "close" | "info" | "bigInfo" | "link" | "check" | "fullscreen" | "monitor" | "zoomIn" | "zoomOut" | "chest" | "talk" | "door" | "archiveDrawer" | "arrowRight" | "arrowLeft" | "arrowRightLine" | "arrowLeftLine" | "downwardArrows" | "creativeCommonsCC" | "creativeCommonsSA" | "creativeCommonsBY" | "creativeCommonsNC" | "copyrightCategoryCC" | "copyrightCategoryPDM" | "copyrightCategoryRS" | "copyrightCategoryNC" | "copyrightCategoryND" | "copyrightCategoryZero" | "copyrightCategoryBY" | "dragAndDrop" | "copyrightCategoryIC" | "copyrightCategoryICUR" | "copyrightCategoryICNC" | "surprise";
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
