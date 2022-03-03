import { PropType } from "vue";
declare type CustomIcon = "storybox" | "globe" | "delete" | "edit" | "logout" | "user" | "surprise";
declare type ButtonTypes = "primary" | "secondary" | "ghost-black" | "ghost-purple" | "ghost-red" | "secondary-round" | "cc-round-black" | "round-white" | "details-black" | "touchtable-white-round" | "touchtable-green-round" | "touchtable-purple";
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
}, {
    buttonstyles: Record<ButtonTypes, string>;
    iconstyles: Record<iconTypes, string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    text?: unknown;
    onClick?: unknown;
    customStyle?: unknown;
    customIconStyle?: unknown;
    customIcon?: unknown;
    iconShown?: unknown;
    iconLeft?: unknown;
} & {
    customStyle: ButtonTypes;
    customIconStyle: iconTypes;
    customIcon: CustomIcon;
    iconShown: boolean;
    iconLeft: boolean;
} & {
    text?: string | undefined;
    onClick?: Function | undefined;
}> & {}, {
    customStyle: ButtonTypes;
    customIconStyle: iconTypes;
    customIcon: CustomIcon;
    iconLeft: boolean;
}>;
export default _default;
