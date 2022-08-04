import { BoxVisiter, FrameInput, Relation, RelationType } from "@/queries";
import { Ref } from "vue";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client/core";
import { Entity } from "..";
export declare type UseBoxVisiter = {
    create: (_storyId: string) => Promise<BoxVisiter>;
    getByCode: (code: string) => Promise<BoxVisiter | null>;
    getRelationsByType: (code: string, _type: RelationType.Visited | RelationType.InBasket | RelationType.Stories | RelationType.Components) => Promise<Array<Relation>>;
    addStoryToVisiter: (_code: string, _storyId: string) => Promise<BoxVisiter | null>;
    addFrameToStory: (_code: string, _frameInput: FrameInput) => Promise<BoxVisiter | null>;
    addAssetToBoxVisiter: (_code: string, _assetId: string, _type: RelationType.Visited | RelationType.Components) => Promise<Array<Relation>>;
    deleteBasketItemFromBoxVisiter: (_code: string, _relationId: string) => Promise<any>;
    addTouchTableTime: (_code: string) => Promise<BoxVisiter>;
    selectedStory: Ref<StorySelected | undefined>;
    setSelectedStory: (input: StorySelected) => void;
    setStartAsset: (input: Entity) => void;
    addHistoryAsset: (input: Entity) => void;
    resetBoxVisiter: () => null;
    boxVisiter: Ref<BoxVisiter | null>;
    startAsset: Ref<Entity | undefined>;
    historyAssets: Ref<Entity[]>;
    clearHistoryAssets: () => void;
    updateScannedTimesOfVisiter: (_code: string) => Promise<BoxVisiter | null>;
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
    code: string;
    frames_seen_last_visit?: number | null | undefined;
    id: string;
    relationByType?: ({
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
        type: RelationType;
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
        type: RelationType;
        value?: string | null | undefined;
    } | null)[] | null | undefined;
    start_time?: string | null | undefined;
    storyboxes?: ({
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
            type: RelationType;
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
            type?: RelationType | null | undefined;
            unMappedKey?: string | null | undefined;
            value?: string | null | undefined;
        } | null)[];
        metadataByLabel: ({
            __typename?: "Metadata" | undefined;
            key: import("../queries").MetaKey;
            label?: string | null | undefined;
            lang?: string | null | undefined;
            nestedMetaData?: any | null | undefined;
            type?: RelationType | null | undefined;
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
                type?: RelationType | null | undefined;
                unMappedKey?: string | null | undefined;
                value?: string | null | undefined;
            } | null)[] | null | undefined;
            label: string;
            nested?: boolean | null | undefined;
        } | null)[] | null | undefined;
        nonPublicMediafiles?: ({
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
        publicationStatus?: ({
            __typename?: "Metadata" | undefined;
            key: import("../queries").MetaKey;
            label?: string | null | undefined;
            lang?: string | null | undefined;
            nestedMetaData?: any | null | undefined;
            type?: RelationType | null | undefined;
            unMappedKey?: string | null | undefined;
            value?: string | null | undefined;
        } | null)[] | null | undefined;
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
            type: RelationType;
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
            type: RelationType;
            value?: string | null | undefined;
        } | null)[] | null | undefined;
        scopeNote: ({
            __typename?: "Metadata" | undefined;
            key: import("../queries").MetaKey;
            label?: string | null | undefined;
            lang?: string | null | undefined;
            nestedMetaData?: any | null | undefined;
            type?: RelationType | null | undefined;
            unMappedKey?: string | null | undefined;
            value?: string | null | undefined;
        } | null)[];
        testimonies?: (any | null)[] | null | undefined;
        title: ({
            __typename?: "Metadata" | undefined;
            key: import("../queries").MetaKey;
            label?: string | null | undefined;
            lang?: string | null | undefined;
            nestedMetaData?: any | null | undefined;
            type?: RelationType | null | undefined;
            unMappedKey?: string | null | undefined;
            value?: string | null | undefined;
        } | null)[];
        type: string;
        user?: string | null | undefined;
    } | null)[] | null | undefined;
    ticketUsed?: number | null | undefined;
    touch_table_time?: string | null | undefined;
    type: string;
} | null>;
declare const startAsset: Ref<Entity | undefined>;
declare const historyAssets: Ref<{
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
        type: RelationType;
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
        type?: RelationType | null | undefined;
        unMappedKey?: string | null | undefined;
        value?: string | null | undefined;
    } | null)[];
    metadataByLabel: ({
        __typename?: "Metadata" | undefined;
        key: import("../queries").MetaKey;
        label?: string | null | undefined;
        lang?: string | null | undefined;
        nestedMetaData?: any | null | undefined;
        type?: RelationType | null | undefined;
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
            type?: RelationType | null | undefined;
            unMappedKey?: string | null | undefined;
            value?: string | null | undefined;
        } | null)[] | null | undefined;
        label: string;
        nested?: boolean | null | undefined;
    } | null)[] | null | undefined;
    nonPublicMediafiles?: ({
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
    publicationStatus?: ({
        __typename?: "Metadata" | undefined;
        key: import("../queries").MetaKey;
        label?: string | null | undefined;
        lang?: string | null | undefined;
        nestedMetaData?: any | null | undefined;
        type?: RelationType | null | undefined;
        unMappedKey?: string | null | undefined;
        value?: string | null | undefined;
    } | null)[] | null | undefined;
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
        type: RelationType;
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
        type: RelationType;
        value?: string | null | undefined;
    } | null)[] | null | undefined;
    scopeNote: ({
        __typename?: "Metadata" | undefined;
        key: import("../queries").MetaKey;
        label?: string | null | undefined;
        lang?: string | null | undefined;
        nestedMetaData?: any | null | undefined;
        type?: RelationType | null | undefined;
        unMappedKey?: string | null | undefined;
        value?: string | null | undefined;
    } | null)[];
    testimonies?: (any | null)[] | null | undefined;
    title: ({
        __typename?: "Metadata" | undefined;
        key: import("../queries").MetaKey;
        label?: string | null | undefined;
        lang?: string | null | undefined;
        nestedMetaData?: any | null | undefined;
        type?: RelationType | null | undefined;
        unMappedKey?: string | null | undefined;
        value?: string | null | undefined;
    } | null)[];
    type: string;
    user?: string | null | undefined;
}[]>;
declare const useBoxVisiter: (_client: ApolloClient<NormalizedCacheObject>) => UseBoxVisiter;
export { useBoxVisiter, boxVisiter, startAsset, selectedStory, historyAssets };
