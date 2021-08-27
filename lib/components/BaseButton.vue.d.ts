import { PropType } from 'vue';
declare type ButtonTypes = 'primary' | 'secundary' | 'ghost-black' | 'ghost-purple';
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
    customIcon: {
        type: StringConstructor;
        default: string;
    };
    iconShown: {
        type: BooleanConstructor;
        required: true;
    };
}, {
    buttonstyles: Record<ButtonTypes, String>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    text?: unknown;
    onClick?: unknown;
    customStyle?: unknown;
    customIcon?: unknown;
    iconShown?: unknown;
} & {
    onClick: Function;
    customStyle: ButtonTypes;
    customIcon: string;
    iconShown: boolean;
} & {
    text?: string | undefined;
}> & {}, {
    customStyle: ButtonTypes;
    customIcon: string;
}>;
export default _default;
