import { ModalState } from "@/types";
import { PropType } from "vue";
declare type Alignment = "top" | "left" | "right";
declare const _default: import("vue").DefineComponent<{
    alignment: {
        type: PropType<Alignment>;
        default: string;
        required: false;
    };
    overlayState: {
        type: PropType<ModalState>;
        required: true;
        default: string;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    alignment?: unknown;
    overlayState?: unknown;
} & {
    alignment: Alignment;
    overlayState: ModalState;
} & {}> & {}, {
    alignment: Alignment;
    overlayState: ModalState;
}>;
export default _default;
