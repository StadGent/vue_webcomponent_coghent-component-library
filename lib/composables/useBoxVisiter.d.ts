import { BoxVisiter, FrameInput, Relation, RelationType, StoryInput } from "@/queries";
import { Ref } from "vue";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client/core";
export declare type UseBoxVisiter = {
    create: (_storyId: string) => Promise<BoxVisiter>;
    getByCode: (code: string) => Promise<BoxVisiter | null>;
    getRelationsByType: (code: string, _type: RelationType.Visited | RelationType.InBasket | RelationType.Stories) => Promise<Array<Relation>>;
    addStoryToVisiter: (_code: string, _storyInput: StoryInput) => Promise<BoxVisiter | null>;
    addFrameToStory: (_code: string, _frameInput: FrameInput) => Promise<BoxVisiter | null>;
    addAssetToBoxVisiter: (_code: string, _assetId: string, _type: RelationType.Visited | RelationType.InBasket) => Promise<Array<Relation>>;
    selectedStory: Ref<StorySelected | undefined>;
    setSelectedStory: (input: StorySelected) => void;
    resetBoxVister: () => null;
    boxVisiter: Ref<BoxVisiter | null>;
};
export declare type StorySelected = {
    id: string;
    color: string;
    title: string;
};
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
declare const useBoxVisiter: (_client: ApolloClient<NormalizedCacheObject>) => UseBoxVisiter;
export { useBoxVisiter, boxVisiter };
