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
}, {
    backgroundColor: string;
    roundsColor: string;
    ringColor: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    large?: unknown;
    reverseColors?: unknown;
    sideStrip?: unknown;
    backgroundColor?: unknown;
    ringColor?: unknown;
    roundsColor?: unknown;
} & {
    large: boolean;
    reverseColors: boolean;
    sideStrip: boolean;
} & {
    backgroundColor?: string | undefined;
    ringColor?: string | undefined;
    roundsColor?: string | undefined;
}> & {}, {
    reverseColors: boolean;
    sideStrip: boolean;
}>;
export default _default;
