import { Entity } from "@/queries";
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
    showLoadMore: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    loadMore: () => void;
    rendered: () => void;
    getImageUrl: (entity: Entity | "placeholder", tiletype: keyof MasonryTileConfig) => string | undefined;
    masonryTiles: import("vue").Ref<{
        type: "SingleImage" | "TwoImages" | "FourImages";
        mediafiles: ("placeholder" | {
            __typename?: "Entity" | undefined;
            _key?: string | null | undefined;
            assets?: (any | null)[] | null | undefined;
            collections: ({
                __typename?: "Relation" | undefined;
                active?: boolean | null | undefined;
                audioFile?: string | null | undefined;
                date?: string | null | undefined;
                key: string;
                label?: string | null | undefined;
                last_frame?: string | null | undefined;
                order?: number | null | undefined;
                position?: {
                    __typename?: "Position" | undefined;
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    z?: number | null | undefined;
                } | null | undefined;
                scale?: number | null | undefined;
                seen_frames?: ({
                    __typename?: "FrameSeen" | undefined;
                    date: number;
                    id: string;
                } | null)[] | null | undefined;
                setMediafile?: number | null | undefined;
                subtitleFile?: string | null | undefined;
                timestamp_end?: number | null | undefined;
                timestamp_start?: number | null | undefined;
                timestamp_zoom?: number | null | undefined;
                total_frames?: number | null | undefined;
                type: import("../queries").RelationType;
                value?: string | null | undefined;
            } | null)[];
            components?: (any | null)[] | null | undefined;
            componentsOfType?: (any | null)[] | null | undefined;
            frames?: (any | null)[] | null | undefined;
            id: string;
            mediafiles?: ({
                __typename?: "MediaFile" | undefined;
                _id: string;
                entities?: (string | null)[] | null | undefined;
                filename?: string | null | undefined;
                img_height?: string | null | undefined;
                img_width?: string | null | undefined;
                mediainfo?: {
                    __typename?: "MediaInfo" | undefined;
                    height: string;
                    width: string;
                } | null | undefined;
                mediatype?: {
                    __typename?: "MimeType" | undefined;
                    audio?: boolean | null | undefined;
                    image?: boolean | null | undefined;
                    mime?: import("../queries").Mime | null | undefined;
                    pdf?: boolean | null | undefined;
                    type?: string | null | undefined;
                    video?: boolean | null | undefined;
                } | null | undefined;
                metadata?: ({
                    __typename?: "MediaFileMetadata" | undefined;
                    key?: string | null | undefined;
                    value?: string | null | undefined;
                } | null)[] | null | undefined;
                mimetype?: string | null | undefined;
                original_file_location?: string | null | undefined;
                primary_transcode_location?: string | null | undefined;
                thumbnail_file_location?: string | null | undefined;
                transcode_filename?: string | null | undefined;
            } | null)[] | null | undefined;
            metadata: ({
                __typename?: "Metadata" | undefined;
                key: import("../queries").MetaKey;
                label?: string | null | undefined;
                lang?: string | null | undefined;
                nestedMetaData?: any | null | undefined;
                type?: import("../queries").RelationType | null | undefined;
                unMappedKey?: string | null | undefined;
                value?: string | null | undefined;
            } | null)[];
            metadataByLabel: ({
                __typename?: "Metadata" | undefined;
                key: import("../queries").MetaKey;
                label?: string | null | undefined;
                lang?: string | null | undefined;
                nestedMetaData?: any | null | undefined;
                type?: import("../queries").RelationType | null | undefined;
                unMappedKey?: string | null | undefined;
                value?: string | null | undefined;
            } | null)[];
            metadataCollection?: ({
                __typename?: "MetadataCollection" | undefined;
                data?: ({
                    __typename?: "Metadata" | undefined;
                    key: import("../queries").MetaKey;
                    label?: string | null | undefined;
                    lang?: string | null | undefined;
                    nestedMetaData?: any | null | undefined;
                    type?: import("../queries").RelationType | null | undefined;
                    unMappedKey?: string | null | undefined;
                    value?: string | null | undefined;
                } | null)[] | null | undefined;
                label: string;
                nested?: boolean | null | undefined;
            } | null)[] | null | undefined;
            object_id: string;
            primary_height?: string | null | undefined;
            primary_mediafile?: string | null | undefined;
            primary_mediafile_info?: {
                __typename?: "MediaInfo" | undefined;
                height: string;
                width: string;
            } | null | undefined;
            primary_mediafile_location?: string | null | undefined;
            primary_transcode?: string | null | undefined;
            primary_transcode_location?: string | null | undefined;
            primary_width?: string | null | undefined;
            relationMetadata?: ({
                __typename?: "Relation" | undefined;
                active?: boolean | null | undefined;
                audioFile?: string | null | undefined;
                date?: string | null | undefined;
                key: string;
                label?: string | null | undefined;
                last_frame?: string | null | undefined;
                order?: number | null | undefined;
                position?: {
                    __typename?: "Position" | undefined;
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    z?: number | null | undefined;
                } | null | undefined;
                scale?: number | null | undefined;
                seen_frames?: ({
                    __typename?: "FrameSeen" | undefined;
                    date: number;
                    id: string;
                } | null)[] | null | undefined;
                setMediafile?: number | null | undefined;
                subtitleFile?: string | null | undefined;
                timestamp_end?: number | null | undefined;
                timestamp_start?: number | null | undefined;
                timestamp_zoom?: number | null | undefined;
                total_frames?: number | null | undefined;
                type: import("../queries").RelationType;
                value?: string | null | undefined;
            } | null)[] | null | undefined;
            relations?: ({
                __typename?: "Relation" | undefined;
                active?: boolean | null | undefined;
                audioFile?: string | null | undefined;
                date?: string | null | undefined;
                key: string;
                label?: string | null | undefined;
                last_frame?: string | null | undefined;
                order?: number | null | undefined;
                position?: {
                    __typename?: "Position" | undefined;
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    z?: number | null | undefined;
                } | null | undefined;
                scale?: number | null | undefined;
                seen_frames?: ({
                    __typename?: "FrameSeen" | undefined;
                    date: number;
                    id: string;
                } | null)[] | null | undefined;
                setMediafile?: number | null | undefined;
                subtitleFile?: string | null | undefined;
                timestamp_end?: number | null | undefined;
                timestamp_start?: number | null | undefined;
                timestamp_zoom?: number | null | undefined;
                total_frames?: number | null | undefined;
                type: import("../queries").RelationType;
                value?: string | null | undefined;
            } | null)[] | null | undefined;
            scopeNote: ({
                __typename?: "Metadata" | undefined;
                key: import("../queries").MetaKey;
                label?: string | null | undefined;
                lang?: string | null | undefined;
                nestedMetaData?: any | null | undefined;
                type?: import("../queries").RelationType | null | undefined;
                unMappedKey?: string | null | undefined;
                value?: string | null | undefined;
            } | null)[];
            title: ({
                __typename?: "Metadata" | undefined;
                key: import("../queries").MetaKey;
                label?: string | null | undefined;
                lang?: string | null | undefined;
                nestedMetaData?: any | null | undefined;
                type?: import("../queries").RelationType | null | undefined;
                unMappedKey?: string | null | undefined;
                value?: string | null | undefined;
            } | null)[];
            type: string;
        })[];
    }[]>;
    contructTiles: (numberOfTiles?: number, reset?: boolean) => void;
    getFallBackImageUrl: (entity: Entity | "placeholder", tiletype: keyof MasonryTileConfig) => string | undefined;
    noImageUrl: string;
    audioUrl: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "loadMore"[], "loadMore", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    showLoadMore: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    onLoadMore?: ((...args: any[]) => any) | undefined;
}, {
    small: boolean;
    itemsEachLoad: number;
    endOfData: boolean;
    showLoadMore: boolean;
}>;
export default _default;
