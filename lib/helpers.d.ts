import { Entity, Metadata, MetaKey } from './queries';
declare type WeightedArrayConfig = {
    probability: number | "*";
};
export declare const reloadMediaAfterModalClose: (playerId: string) => void;
export declare const randomizer: <T extends string>(input: Record<T, WeightedArrayConfig>) => T | undefined;
export declare const getMetadataOfTypeFromEntity: (_entity: Entity, _key: MetaKey) => Metadata | undefined;
export {};
