import { Entity, MediaFile, Metadata, MetaKey } from './queries';
declare type WeightedArrayConfig = {
    probability: number | "*";
};
export declare const reloadMediaAfterModalClose: (playerId: string) => void;
export declare const randomizer: <T extends string>(input: Record<T, WeightedArrayConfig>) => T | undefined;
export declare const getMetadataOfTypeFromEntity: (_entity: Entity, _key: MetaKey) => Metadata | undefined;
export declare const getFirstValueOfPropertyFromEntity: (_entity: Entity, _property: `title` | `description`) => Metadata | undefined;
export declare const getFirstMediafileWithFilelocationOfEntity: (_entity: Entity) => Promise<null | MediaFile>;
export {};
