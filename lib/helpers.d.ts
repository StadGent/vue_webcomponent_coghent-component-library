import { Entity, MediaFile, Metadata, MetaKey, MimeType } from './queries';
declare type WeightedArrayConfig = {
    probability: number | "*";
};
export declare const reloadMediaAfterModalClose: (playerId: string) => void;
export declare const randomizer: <T extends string>(input: Record<T, WeightedArrayConfig>) => T | undefined;
export declare const getMetadataOfTypeFromEntity: (_entity: Entity, _key: MetaKey) => Metadata | undefined;
export declare const getFirstValueOfPropertyFromEntity: (_entity: Entity, _property: `title` | `description`) => Metadata | undefined;
export declare const getFirstMediafileWithFilelocationOfEntity: (_entity: Entity) => Promise<null | MediaFile>;
export declare const getMediaTypeByfilename: (_entity: Entity, _filename: string | undefined) => Promise<MimeType | null>;
export declare const getUrlParamValue: (_searchParam: string) => import("./queries").Maybe<string>;
export declare const getFilename: (_mediafile: MediaFile | null) => import("./queries").Maybe<string>;
export declare const entityIsPublic: (_entity: Entity) => boolean;
export {};
