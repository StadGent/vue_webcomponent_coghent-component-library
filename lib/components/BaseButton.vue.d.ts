import { PropType } from 'vue';
declare type CustomIcon = 'storybox' | 'globe' | 'delete' | 'edit' | 'logout' | 'user';
declare type ButtonTypes = 'primary' | 'secondary' | 'ghost-black' | 'ghost-purple' | 'ghost-red' | 'secondary-round';
declare type iconTypes = 'sm' | 'default';
declare const _default: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        required: false;
    };
    onClick: {
        type: FunctionConstructor;
        required: true;
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
}, {
    buttonstyles: Record<ButtonTypes, String>;
    iconstyles: Record<iconTypes, String>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    text?: unknown;
    onClick?: unknown;
    customStyle?: unknown;
    customIconStyle?: unknown;
    customIcon?: unknown;
    iconShown?: unknown;
} & {
    onClick: Function;
    customStyle: ButtonTypes;
    customIconStyle: iconTypes;
    customIcon: CustomIcon;
    iconShown: boolean;
} & {
    text?: string | undefined;
}> & {}, {
    customStyle: ButtonTypes;
    customIconStyle: iconTypes;
    customIcon: CustomIcon;
}>;
export default _default;