import { BoxVisiter, FrameInput, Relation, RelationType } from "@/queries";
import { Ref } from "vue";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client/core";
import { Entity } from "..";
export declare type UseBoxVisiter = {
    create: (_storyId: string) => Promise<BoxVisiter>;
    getByCode: (code: string) => Promise<BoxVisiter | null>;
    getRelationsByType: (code: string, _type: RelationType.Visited | RelationType.InBasket | RelationType.Stories) => Promise<Array<Relation>>;
    addStoryToVisiter: (_code: string, _storyId: string) => Promise<BoxVisiter | null>;
    addFrameToStory: (_code: string, _frameInput: FrameInput) => Promise<BoxVisiter | null>;
    addAssetToBoxVisiter: (_code: string, _assetId: string, _type: RelationType.Visited | RelationType.InBasket) => Promise<Array<Relation>>;
    selectedStory: Ref<StorySelected | undefined>;
    setSelectedStory: (input: StorySelected) => void;
    setStartAsset: (input: Entity) => void;
    addHistoryAsset: (input: Entity) => void;
    resetBoxVisiter: () => null;
    boxVisiter: Ref<BoxVisiter | null>;
    startAsset: Ref<Entity | undefined>;
    historyAssets: Ref<Entity[]>;
    clearHistoryAssets: () => void;
};
export declare type StorySelected = {
    id: string;
    color: string;
    title: string;
};
declare const selectedStory: Ref<StorySelected | undefined>;
declare const boxVisiter: Ref<{
    __typename?: "BoxVisiter" | undefined;
    _key?: string | null | undefined;
    id: string;
    type: string;
    relations?: ({
        __typename?: "Relation" | undefined;
        key: string;
        type: RelationType;
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
    relationByType?: ({
        __typename?: "Relation" | undefined;
        key: string;
        type: RelationType;
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
    frames_seen_last_visit?: number | null | undefined;
    code: string;
    start_time?: string | null | undefined;
    touch_table_time?: string | null | undefined;
} | null>;
declare const startAsset: Ref<Entity | undefined>;
declare const historyAssets: Ref<{
    __typename?: "Entity" | undefined;
    _key?: string | null | undefined;
    id: string;
    object_id: string;
    type: string;
    metadata: ({
        __typename?: "Metadata" | undefined;
        key: import("../queries").MetaKey;
        value?: string | null | undefined;
        nestedMetaData?: any | null | undefined;
        lang?: string | null | undefined;
        unMappedKey?: string | null | undefined;
        label?: string | null | undefined;
        type?: RelationType | null | undefined;
    } | null)[];
    metadataByLabel: ({
        __typename?: "Metadata" | undefined;
        key: import("../queries").MetaKey;
        value?: string | null | undefined;
        nestedMetaData?: any | null | undefined;
        lang?: string | null | undefined;
        unMappedKey?: string | null | undefined;
        label?: string | null | undefined;
        type?: RelationType | null | undefined;
    } | null)[];
    metadataCollection?: ({
        __typename?: "MetadataCollection" | undefined;
        label: string;
        data?: ({
            __typename?: "Metadata" | undefined;
            key: import("../queries").MetaKey;
            value?: string | null | undefined;
            nestedMetaData?: any | null | undefined;
            lang?: string | null | undefined;
            unMappedKey?: string | null | undefined;
            label?: string | null | undefined;
            type?: RelationType | null | undefined;
        } | null)[] | null | undefined;
        nested?: boolean | null | undefined;
    } | null)[] | null | undefined;
    title: ({
        __typename?: "Metadata" | undefined;
        key: import("../queries").MetaKey;
        value?: string | null | undefined;
        nestedMetaData?: any | null | undefined;
        lang?: string | null | undefined;
        unMappedKey?: string | null | undefined;
        label?: string | null | undefined;
        type?: RelationType | null | undefined;
    } | null)[];
    scopeNote: ({
        __typename?: "Metadata" | undefined;
        key: import("../queries").MetaKey;
        value?: string | null | undefined;
        nestedMetaData?: any | null | undefined;
        lang?: string | null | undefined;
        unMappedKey?: string | null | undefined;
        label?: string | null | undefined;
        type?: RelationType | null | undefined;
    } | null)[];
    collections: ({
        __typename?: "Metadata" | undefined;
        key: import("../queries").MetaKey;
        value?: string | null | undefined;
        nestedMetaData?: any | null | undefined;
        lang?: string | null | undefined;
        unMappedKey?: string | null | undefined;
        label?: string | null | undefined;
        type?: RelationType | null | undefined;
    } | null)[];
    relations?: ({
        __typename?: "Relation" | undefined;
        key: string;
        type: RelationType;
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
        type: RelationType;
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
            mime?: import("../queries").Mime | null | undefined;
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
}[]>;
declare const useBoxVisiter: (_client: ApolloClient<NormalizedCacheObject>) => UseBoxVisiter;
export { useBoxVisiter, boxVisiter, startAsset, selectedStory, historyAssets };
