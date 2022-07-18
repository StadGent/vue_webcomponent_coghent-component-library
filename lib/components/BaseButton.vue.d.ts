import { PropType } from "vue";
declare type CustomIcon = "storybox" | "globe" | "info" | "delete" | "edit" | "logout" | "user" | "newItem" | "surprise" | "upload";
declare type ButtonTypes = "primary" | "primaryUnavailable" | "secondary" | "ghost-black" | "ghost-purple" | "ghost-red" | "secondary-round" | "cc-round-black" | "round-white" | "details-black" | "storybox-black" | "storybox-red" | "touchtable-white-round" | "touchtable-green-round" | "touchtable-purple" | "touchtable-black" | "square-icon";
declare type iconTypes = "sm" | "default";
declare const _default: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        required: false;
    };
    onClick: {
        type: FunctionConstructor;
        required: false;
    };
    customStyle: {
        type: PropType<ButtonTypes>;
        default: string;
    };
    customIconStyle: {
        type: PropType<iconTypes>;
        default: string;
    };
    customIcon: {
        type: PropType<CustomIcon>;
        default: string;
    };
    iconShown: {
        type: BooleanConstructor;
        required: true;
    };
    iconLeft: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noMargin: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    hasBadge: {
        type: BooleanConstructor;
        default: boolean;
    };
    badgeColor: {
        type: StringConstructor;
        default: string;
    };
    badgeValue: {
        type: StringConstructor;
        default: string;
    };
}, {
    buttonstyles: Record<ButtonTypes, string>;
    iconstyles: Record<iconTypes, string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        required: false;
    };
    onClick: {
        type: FunctionConstructor;
        required: false;
    };
    customStyle: {
        type: PropType<ButtonTypes>;
        default: string;
    };
    customIconStyle: {
        type: PropType<iconTypes>;
        default: string;
    };
    customIcon: {
        type: PropType<CustomIcon>;
        default: string;
    };
    iconShown: {
        type: BooleanConstructor;
        required: true;
    };
    iconLeft: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noMargin: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    hasBadge: {
        type: BooleanConstructor;
        default: boolean;
    };
    badgeColor: {
        type: StringConstructor;
        default: string;
    };
    badgeValue: {
        type: StringConstructor;
        default: string;
    };
}>> & {}, {
    customStyle: ButtonTypes;
    customIconStyle: iconTypes;
    customIcon: CustomIcon;
    iconLeft: boolean;
    noMargin: boolean;
    hasBadge: boolean;
    badgeColor: string;
    badgeValue: string;
}>;
export default _default;
