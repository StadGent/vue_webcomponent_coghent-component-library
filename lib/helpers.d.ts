declare type WeightedArrayConfig = {
    probability: number | "*";
};
export declare const reloadMediaAfterModalClose: (playerId: string) => void;
export declare const randomizer: <T extends string>(input: Record<T, WeightedArrayConfig>) => T | undefined;
export {};
