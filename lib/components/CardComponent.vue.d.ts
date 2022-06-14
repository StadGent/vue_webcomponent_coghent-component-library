declare const _default: import("vue").DefineComponent<{
    large: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    reverseColors: {
        type: BooleanConstructor;
        required: false;
    };
    sideStrip: {
        type: BooleanConstructor;
        required: false;
    };
    backgroundColor: {
        type: StringConstructor;
        required: false;
    };
    ringColor: {
        type: StringConstructor;
        required: false;
    };
    roundsColor: {
        type: StringConstructor;
        required: false;
    };
    scroll: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}, {
    backgroundColor: string;
    roundsColor: string;
    ringColor: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    large: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    reverseColors: {
        type: BooleanConstructor;
        required: false;
    };
    sideStrip: {
        type: BooleanConstructor;
        required: false;
    };
    backgroundColor: {
        type: StringConstructor;
        required: false;
    };
    ringColor: {
        type: StringConstructor;
        required: false;
    };
    roundsColor: {
        type: StringConstructor;
        required: false;
    };
    scroll: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}>>, {
    reverseColors: boolean;
    sideStrip: boolean;
    scroll: boolean;
}>;
export default _default;
