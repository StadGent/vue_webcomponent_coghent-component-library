import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    zoomIn: {
        type: PropType<string | HTMLDivElement | null>;
        default: null;
    };
    zoomOut: {
        type: PropType<string | HTMLDivElement | null>;
        default: null;
    };
    fullPage: {
        type: PropType<string | HTMLDivElement | null>;
        default: null;
    };
    home: {
        type: PropType<string | HTMLDivElement | null>;
        default: null;
    };
    canGoFullScreen: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    zoomInRef: import("vue").Ref<HTMLDivElement | undefined>;
    zoomOutRef: import("vue").Ref<HTMLDivElement | undefined>;
    fullPageRef: import("vue").Ref<HTMLDivElement | undefined>;
    homeRef: import("vue").Ref<HTMLDivElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:zoomIn" | "update:zoomOut" | "update:fullPage" | "update:home")[], "update:zoomIn" | "update:zoomOut" | "update:fullPage" | "update:home", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    zoomIn: {
        type: PropType<string | HTMLDivElement | null>;
        default: null;
    };
    zoomOut: {
        type: PropType<string | HTMLDivElement | null>;
        default: null;
    };
    fullPage: {
        type: PropType<string | HTMLDivElement | null>;
        default: null;
    };
    home: {
        type: PropType<string | HTMLDivElement | null>;
        default: null;
    };
    canGoFullScreen: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:zoomIn"?: ((...args: any[]) => any) | undefined;
    "onUpdate:zoomOut"?: ((...args: any[]) => any) | undefined;
    "onUpdate:fullPage"?: ((...args: any[]) => any) | undefined;
    "onUpdate:home"?: ((...args: any[]) => any) | undefined;
}, {
    zoomIn: string | HTMLDivElement | null;
    zoomOut: string | HTMLDivElement | null;
    fullPage: string | HTMLDivElement | null;
    home: string | HTMLDivElement | null;
    canGoFullScreen: boolean;
}>;
export default _default;
