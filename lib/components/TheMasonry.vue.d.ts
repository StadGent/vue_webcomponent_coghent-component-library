import { Entity } from "../../lib/queries";
declare type MasonryImage = "placeholder" | Entity;
declare type MasonryTileConfig = {
    SingleImage: {
        mediafiles: [MasonryImage];
        probability: number | "*";
    };
    TwoImages: {
        mediafiles: [MasonryImage, MasonryImage];
        probability: number | "*";
    };
    FourImages: {
        mediafiles: [MasonryImage, MasonryImage, MasonryImage, MasonryImage];
        probability: number | "*";
    };
};
declare const _default: import("vue").DefineComponent<{
    entities: {
        type: ObjectConstructor;
        required: true;
    };
    loading: {
        type: BooleanConstructor;
        required: true;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    itemsEachLoad: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    endOfData: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    generateUrl: {
        type: FunctionConstructor;
        required: true;
    };
    noImageUrl: {
        type: StringConstructor;
        required: true;
    };
    showLoadMore: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    useRouterNavigation: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    hasCustomImageOverlay: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}, {
    loadMore: () => void;
    rendered: () => void;
    copyUrl: (id: string) => Promise<void>;
    getImageUrl: (entity: Entity | "placeholder", tiletype: keyof MasonryTileConfig) => string | undefined;
    masonryTiles: import("vue").Ref<{
        type: "SingleImage" | "TwoImages" | "FourImages";
        mediafiles: ("placeholder" | {
            __typename?: "Entity" | undefined;
            _key?: string | null | undefined;
            id: string;
            object_id: string;
            type: string;
            metadata: ({
                __typename?: "Metadata" | undefined;
                key: import("../../lib/queries").MetaKey;
                value?: string | null | undefined;
                nestedMetaData?: any | null | undefined;
                lang?: string | null | undefined;
                unMappedKey?: string | null | undefined;
                label?: string | null | undefined;
                type?: import("../../lib/queries").RelationType | null | undefined;
            } | null)[];
            metadataByLabel: ({
                __typename?: "Metadata" | undefined;
                key: import("../../lib/queries").MetaKey;
                value?: string | null | undefined;
                nestedMetaData?: any | null | undefined;
                lang?: string | null | undefined;
                unMappedKey?: string | null | undefined;
                label?: string | null | undefined;
                type?: import("../../lib/queries").RelationType | null | undefined;
            } | null)[];
            metadataCollection?: ({
                __typename?: "MetadataCollection" | undefined;
                label: string;
                data?: ({
                    __typename?: "Metadata" | undefined;
                    key: import("../../lib/queries").MetaKey;
                    value?: string | null | undefined;
                    nestedMetaData?: any | null | undefined;
                    lang?: string | null | undefined;
                    unMappedKey?: string | null | undefined;
                    label?: string | null | undefined;
                    type?: import("../../lib/queries").RelationType | null | undefined;
                } | null)[] | null | undefined;
                nested?: boolean | null | undefined;
            } | null)[] | null | undefined;
            title: ({
                __typename?: "Metadata" | undefined;
                key: import("../../lib/queries").MetaKey;
                value?: string | null | undefined;
                nestedMetaData?: any | null | undefined;
                lang?: string | null | undefined;
                unMappedKey?: string | null | undefined;
                label?: string | null | undefined;
                type?: import("../../lib/queries").RelationType | null | undefined;
            } | null)[];
            scopeNote: ({
                __typename?: "Metadata" | undefined;
                key: import("../../lib/queries").MetaKey;
                value?: string | null | undefined;
                nestedMetaData?: any | null | undefined;
                lang?: string | null | undefined;
                unMappedKey?: string | null | undefined;
                label?: string | null | undefined;
                type?: import("../../lib/queries").RelationType | null | undefined;
            } | null)[];
            collections: ({
                __typename?: "Metadata" | undefined;
                key: import("../../lib/queries").MetaKey;
                value?: string | null | undefined;
                nestedMetaData?: any | null | undefined;
                lang?: string | null | undefined;
                unMappedKey?: string | null | undefined;
                label?: string | null | undefined;
                type?: import("../../lib/queries").RelationType | null | undefined;
            } | null)[];
            relations?: ({
                __typename?: "Relation" | undefined;
                key: string;
                type: import("../../lib/queries").RelationType;
                label?: string | null | undefined;
                value?: string | null | undefined;
                timestamp_start?: number | null | undefined;
                timestamp_end?: number | null | undefined;
                timestamp_zoom?: number | null | undefined;
                position?: {
                    __typename?: "Position" | undefined;
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    z?: number | null | undefined;
                } | null | undefined;
                scale?: number | null | undefined;
                audioFile?: string | null | undefined;
                subtitleFile?: string | null | undefined;
                date?: string | null | undefined;
                active?: boolean | null | undefined;
                last_frame?: string | null | undefined;
                seen_frames?: ({
                    __typename?: "FrameSeen" | undefined;
                    id: string;
                    date: number;
                } | null)[] | null | undefined;
                order?: number | null | undefined;
                total_frames?: number | null | undefined;
            } | null)[] | null | undefined;
            relationMetadata?: ({
                __typename?: "Relation" | undefined;
                key: string;
                type: import("../../lib/queries").RelationType;
                label?: string | null | undefined;
                value?: string | null | undefined;
                timestamp_start?: number | null | undefined;
                timestamp_end?: number | null | undefined;
                timestamp_zoom?: number | null | undefined;
                position?: {
                    __typename?: "Position" | undefined;
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    z?: number | null | undefined;
                } | null | undefined;
                scale?: number | null | undefined;
                audioFile?: string | null | undefined;
                subtitleFile?: string | null | undefined;
                date?: string | null | undefined;
                active?: boolean | null | undefined;
                last_frame?: string | null | undefined;
                seen_frames?: ({
                    __typename?: "FrameSeen" | undefined;
                    id: string;
                    date: number;
                } | null)[] | null | undefined;
                order?: number | null | undefined;
                total_frames?: number | null | undefined;
            } | null)[] | null | undefined;
            components?: (any | null)[] | null | undefined;
            componentsOfType?: (any | null)[] | null | undefined;
            assets?: (any | null)[] | null | undefined;
            frames?: (any | null)[] | null | undefined;
            mediafiles?: ({
                __typename?: "MediaFile" | undefined;
                _id: string;
                original_file_location?: string | null | undefined;
                thumbnail_file_location?: string | null | undefined;
                filename?: string | null | undefined;
                entities?: (string | null)[] | null | undefined;
                mediainfo?: {
                    __typename?: "MediaInfo" | undefined;
                    width: string;
                    height: string;
                } | null | undefined;
                metadata?: ({
                    __typename?: "MediaFileMetadata" | undefined;
                    key?: string | null | undefined;
                    value?: string | null | undefined;
                } | null)[] | null | undefined;
                mediatype?: {
                    __typename?: "MimeType" | undefined;
                    type?: string | null | undefined;
                    mime?: import("../../lib/queries").Mime | null | undefined;
                    audio?: boolean | null | undefined;
                    video?: boolean | null | undefined;
                    image?: boolean | null | undefined;
                } | null | undefined;
                mimetype?: string | null | undefined;
                img_width?: string | null | undefined;
                img_height?: string | null | undefined;
            } | null)[] | null | undefined;
            primary_mediafile?: string | null | undefined;
            primary_mediafile_info?: {
                __typename?: "MediaInfo" | undefined;
                width: string;
                height: string;
            } | null | undefined;
            primary_mediafile_location?: string | null | undefined;
            primary_width?: string | null | undefined;
            primary_height?: string | null | undefined;
        })[];
    }[]>;
    contructTiles: (numberOfTiles?: number, reset?: boolean) => void;
    getFallBackImageUrl: (entity: Entity | "placeholder", tiletype: keyof MasonryTileConfig) => string | undefined;
    emitForRouterNavigation: (entity: Entity) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("loadMore" | "navigateWithRouter")[], "loadMore" | "navigateWithRouter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    entities?: unknown;
    loading?: unknown;
    small?: unknown;
    itemsEachLoad?: unknown;
    endOfData?: unknown;
    generateUrl?: unknown;
    noImageUrl?: unknown;
    showLoadMore?: unknown;
    useRouterNavigation?: unknown;
    hasCustomImageOverlay?: unknown;
} & {
    entities: Record<string, any>;
    loading: boolean;
    small: boolean;
    itemsEachLoad: number;
    endOfData: boolean;
    generateUrl: Function;
    noImageUrl: string;
    showLoadMore: boolean;
    useRouterNavigation: boolean;
    hasCustomImageOverlay: boolean;
} & {}> & {
    onLoadMore?: ((...args: any[]) => any) | undefined;
    onNavigateWithRouter?: ((...args: any[]) => any) | undefined;
}, {
    small: boolean;
    itemsEachLoad: number;
    endOfData: boolean;
    showLoadMore: boolean;
    useRouterNavigation: boolean;
    hasCustomImageOverlay: boolean;
}>;
export default _default;
