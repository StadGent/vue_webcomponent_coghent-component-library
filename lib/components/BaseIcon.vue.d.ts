import { PropType } from 'vue';
declare type CustomIcon = 'storybox' | 'globe';
declare const _default: import("vue").DefineComponent<{
    icon: {
        type: PropType<CustomIcon>;
        default: string;
        required: true;
    };
}, {
    icons: Record<CustomIcon, String>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    icon?: unknown;
} & {
    icon: CustomIcon;
} & {}> & {}, {
    icon: CustomIcon;
}>;
export default _default;
