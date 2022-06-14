import { PropType } from "vue";
import { ImageSource, ModalState } from "@/types";
declare const _default: import("vue").DefineComponent<{
    infotext: {
        type: StringConstructor;
        required: true;
    };
    source: {
        type: PropType<ImageSource[]>;
        required: true;
    };
    mediafiles: {
        type: ArrayConstructor;
    };
    isTouch: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}, {
    selectedIndex: import("vue").Ref<number>;
    prevImage: () => void;
    nextImage: () => void;
    getNextImage: () => number;
    getPrevImage: () => number;
    openIIIFModal: import("vue").Ref<ModalState>;
    openTab: import("vue").Ref<boolean>;
    openMediaModal: () => void;
    openCCModal: () => void;
    noImageUrl: string;
    audioUrl: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "openingCcmodal" | "currentCarouselPicture", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    infotext: {
        type: StringConstructor;
        required: true;
    };
    source: {
        type: PropType<ImageSource[]>;
        required: true;
    };
    mediafiles: {
        type: ArrayConstructor;
    };
    isTouch: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}>>, {
    isTouch: boolean;
}>;
export default _default;
