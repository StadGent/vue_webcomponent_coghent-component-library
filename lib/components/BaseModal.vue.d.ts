import { ModalState } from "@/types";
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modalState: {
        type: PropType<ModalState>;
        required: true;
        default: string;
    };
    large: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    scroll: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    customStyles: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    hideModal: () => void;
    growModal: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modalState" | "hideModal" | "showModal")[], "update:modalState" | "hideModal" | "showModal", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modalState?: unknown;
    large?: unknown;
    scroll?: unknown;
    customStyles?: unknown;
} & {
    modalState: ModalState;
    large: boolean;
    scroll: boolean;
    customStyles: string;
} & {}> & {
    "onUpdate:modalState"?: ((...args: any[]) => any) | undefined;
    onHideModal?: ((...args: any[]) => any) | undefined;
    onShowModal?: ((...args: any[]) => any) | undefined;
}, {
    modalState: ModalState;
    large: boolean;
    scroll: boolean;
    customStyles: string;
}>;
export default _default;
