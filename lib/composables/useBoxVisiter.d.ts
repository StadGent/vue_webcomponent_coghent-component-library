import { FrameInput, RelationType, StoryInput } from '@/queries';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client/core';
declare type UseBoxVisiter = {
    create: (_storyId: string) => Promise<void>;
    getByCode: (code: string) => Promise<void>;
    getRelationsByType: (code: string, _type: RelationType.Visited | RelationType.InBasket) => Promise<void>;
    addStoryToVisiter: (_code: string, _storyInput: StoryInput) => Promise<void>;
    addFrameToStory: (_code: string, _frameInput: FrameInput) => Promise<void>;
    addAssetToBoxVisiter: (_code: string, _assetId: string, _type: RelationType.Visited | RelationType.InBasket) => Promise<void>;
};
declare const boxVisiter: {
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
            date: string;
        } | null)[] | null | undefined;
        order?: number | null | undefined;
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
            date: string;
        } | null)[] | null | undefined;
        order?: number | null | undefined;
    } | null)[] | null | undefined;
    frames_seen_last_visit?: number | null | undefined;
    code: string;
    start_time?: string | null | undefined;
    touch_table_time?: string | null | undefined;
};
declare const useBoxVisiter: (_client: ApolloClient<NormalizedCacheObject>) => UseBoxVisiter;
export { useBoxVisiter, boxVisiter, UseBoxVisiter };
