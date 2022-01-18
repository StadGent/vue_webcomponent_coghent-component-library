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
}, {
    backgroundColor: string;
    roundsColor: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    large?: unknown;
    reverseColors?: unknown;
    sideStrip?: unknown;
} & {
    large: boolean;
    reverseColors: boolean;
    sideStrip: boolean;
} & {}> & {}, {
    reverseColors: boolean;
    sideStrip: boolean;
}>;
export default _default;
