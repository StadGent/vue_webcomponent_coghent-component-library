import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Void: void;
};
export declare type BoxVisiter = {
    __typename?: 'BoxVisiter';
    _key?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    type: Scalars['String'];
    relations?: Maybe<Array<Maybe<Relation>>>;
    relationByType?: Maybe<Array<Maybe<Relation>>>;
    frames_seen_last_visit?: Maybe<Scalars['Int']>;
    code: Scalars['String'];
    start_time?: Maybe<Scalars['String']>;
    touch_table_time?: Maybe<Scalars['String']>;
};
export declare type BoxVisiterRelationByTypeArgs = {
    type: RelationType;
};
export declare type BoxVisitersResults = {
    __typename?: 'BoxVisitersResults';
    results?: Maybe<Array<Maybe<BoxVisiter>>>;
    relations?: Maybe<Array<Maybe<Relation>>>;
    count?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};
export declare enum ComponentType {
    Frame = "frame",
    Audio = "audio"
}
export declare type EntitiesResults = {
    __typename?: 'EntitiesResults';
    results?: Maybe<Array<Maybe<Entity>>>;
    relations?: Maybe<Array<Maybe<Relation>>>;
    count?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};
export declare type Entity = {
    __typename?: 'Entity';
    _key?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    object_id: Scalars['String'];
    type: Scalars['String'];
    metadata: Array<Maybe<Metadata>>;
    metadataByLabel: Array<Maybe<Metadata>>;
    metadataCollection?: Maybe<Array<Maybe<MetadataCollection>>>;
    title: Array<Maybe<Metadata>>;
    scopeNote: Array<Maybe<Metadata>>;
    collections: Array<Maybe<Relation>>;
    relations?: Maybe<Array<Maybe<Relation>>>;
    relationMetadata?: Maybe<Array<Maybe<Relation>>>;
    components?: Maybe<Array<Maybe<Entity>>>;
    componentsOfType?: Maybe<Array<Maybe<Entity>>>;
    assets?: Maybe<Array<Maybe<Entity>>>;
    frames?: Maybe<Array<Maybe<Entity>>>;
    mediafiles?: Maybe<Array<Maybe<MediaFile>>>;
    primary_mediafile?: Maybe<Scalars['String']>;
    primary_transcode?: Maybe<Scalars['String']>;
    primary_transcode_location?: Maybe<Scalars['String']>;
    primary_mediafile_info?: Maybe<MediaInfo>;
    primary_mediafile_location?: Maybe<Scalars['String']>;
    primary_width?: Maybe<Scalars['String']>;
    primary_height?: Maybe<Scalars['String']>;
};
export declare type EntityMetadataArgs = {
    key?: Maybe<Array<Maybe<MetaKey>>>;
};
export declare type EntityMetadataByLabelArgs = {
    key?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export declare type EntityMetadataCollectionArgs = {
    key?: Maybe<Array<Maybe<MetaKey>>>;
    label?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export declare type EntityComponentsOfTypeArgs = {
    key?: Maybe<Scalars['String']>;
};
export declare type FrameInput = {
    storyId: Scalars['String'];
    frameId: Scalars['String'];
};
export declare type FrameSeen = {
    __typename?: 'FrameSeen';
    id: Scalars['String'];
    date: Scalars['Int'];
};
export declare type JsPatch = {
    op: JsPatchOp;
    path: Array<Scalars['String']>;
    value: Scalars['String'];
};
export declare enum JsPatchOp {
    Add = "add",
    Replace = "replace",
    Remove = "remove"
}
export declare type KeyValuePair = {
    key?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
export declare enum Mime {
    Audiompeg = "AUDIOMPEG",
    Audiomp3 = "AUDIOMP3",
    Audioaac = "AUDIOAAC",
    Audioogg = "AUDIOOGG",
    Audioopus = "AUDIOOPUS",
    Audiowav = "AUDIOWAV",
    Audioxwav = "AUDIOXWAV",
    Imgjpg = "IMGJPG",
    Imgjpeg = "IMGJPEG",
    Imgtiff = "IMGTIFF",
    Imgpng = "IMGPNG",
    Imgavif = "IMGAVIF",
    Imgbmp = "IMGBMP",
    Imgwebp = "IMGWEBP",
    Videomp4 = "VIDEOMP4",
    Videowav = "VIDEOWAV",
    Videomov = "VIDEOMOV",
    Textplain = "TEXTPLAIN",
    Applicationpdf = "APPLICATIONPDF"
}
export declare type MediaFile = {
    __typename?: 'MediaFile';
    _id: Scalars['String'];
    original_file_location?: Maybe<Scalars['String']>;
    thumbnail_file_location?: Maybe<Scalars['String']>;
    filename?: Maybe<Scalars['String']>;
    transcode_filename?: Maybe<Scalars['String']>;
    primary_transcode_location?: Maybe<Scalars['String']>;
    entities?: Maybe<Array<Maybe<Scalars['String']>>>;
    mediainfo?: Maybe<MediaInfo>;
    metadata?: Maybe<Array<Maybe<MediaFileMetadata>>>;
    mediatype?: Maybe<MimeType>;
    mimetype?: Maybe<Scalars['String']>;
    img_width?: Maybe<Scalars['String']>;
    img_height?: Maybe<Scalars['String']>;
};
export declare type MediaFileMetadata = {
    __typename?: 'MediaFileMetadata';
    key?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
export declare type MediaInfo = {
    __typename?: 'MediaInfo';
    width: Scalars['String'];
    height: Scalars['String'];
};
export declare enum MetaKey {
    Title = "title",
    Type = "type",
    Collection = "collection",
    Description = "description",
    Material = "material",
    Height = "height",
    Width = "width",
    Depth = "depth",
    UnMapped = "unMapped",
    ObjectNumber = "object_number",
    ObjectName = "object_name",
    QrCode = "QRCode",
    Fullname = "fullname",
    Firstname = "firstname",
    Lastname = "lastname",
    Nationality = "nationality",
    ScopeNote = "scopeNote"
}
export declare type Metadata = {
    __typename?: 'Metadata';
    key: MetaKey;
    value?: Maybe<Scalars['String']>;
    nestedMetaData?: Maybe<Entity>;
    lang?: Maybe<Scalars['String']>;
    unMappedKey?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    type?: Maybe<RelationType>;
};
export declare type MetadataCollection = {
    __typename?: 'MetadataCollection';
    label: Scalars['String'];
    data?: Maybe<Array<Maybe<Metadata>>>;
    nested?: Maybe<Scalars['Boolean']>;
};
export declare type MetadataInput = {
    key: MetaKey;
    value: Scalars['String'];
    lang?: Maybe<Scalars['String']>;
};
export declare type MimeType = {
    __typename?: 'MimeType';
    type?: Maybe<Scalars['String']>;
    mime?: Maybe<Mime>;
    audio?: Maybe<Scalars['Boolean']>;
    video?: Maybe<Scalars['Boolean']>;
    image?: Maybe<Scalars['Boolean']>;
    pdf?: Maybe<Scalars['Boolean']>;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    replaceMetadata: Array<Metadata>;
    AddStoryToBoxVisiter?: Maybe<BoxVisiter>;
    AddFrameToStoryBoxVisiter?: Maybe<BoxVisiter>;
    DeleteBoxVisiterRelation: Array<Maybe<Relation>>;
    UpdateBoxVisiterTouchtableTime?: Maybe<BoxVisiter>;
    AddAssetToBoxVisiter: Array<Maybe<Relation>>;
};
export declare type MutationReplaceMetadataArgs = {
    id: Scalars['String'];
    metadata: Array<MetadataInput>;
};
export declare type MutationAddStoryToBoxVisiterArgs = {
    code: Scalars['String'];
    storyId: Scalars['String'];
};
export declare type MutationAddFrameToStoryBoxVisiterArgs = {
    code: Scalars['String'];
    frameInput: FrameInput;
};
export declare type MutationDeleteBoxVisiterRelationArgs = {
    code: Scalars['String'];
    relationId: Scalars['String'];
};
export declare type MutationUpdateBoxVisiterTouchtableTimeArgs = {
    code: Scalars['String'];
    touchTableTime: Scalars['String'];
};
export declare type MutationAddAssetToBoxVisiterArgs = {
    code: Scalars['String'];
    assetId: Scalars['String'];
    type: RelationType;
};
export declare type Position = {
    __typename?: 'Position';
    x?: Maybe<Scalars['Float']>;
    y?: Maybe<Scalars['Float']>;
    z?: Maybe<Scalars['Float']>;
};
export declare type Query = {
    __typename?: 'Query';
    PrintBoxTicket: Ticket;
    ActiveBox: EntitiesResults;
    BoxVisiters?: Maybe<BoxVisitersResults>;
    BoxVisiterByCode?: Maybe<BoxVisiter>;
    BoxVisiterRelationsByType?: Maybe<Array<Maybe<Relation>>>;
    CreateBoxVisiter?: Maybe<BoxVisiter>;
    Stories?: Maybe<EntitiesResults>;
    Entity?: Maybe<Entity>;
    Entities?: Maybe<EntitiesResults>;
    Relations?: Maybe<RelationsResults>;
    User?: Maybe<User>;
    RelationsAsEntities?: Maybe<Array<Maybe<Entity>>>;
    CreateStorybox?: Maybe<Entity>;
};
export declare type QueryPrintBoxTicketArgs = {
    code: Scalars['String'];
};
export declare type QueryBoxVisiterByCodeArgs = {
    code: Scalars['String'];
};
export declare type QueryBoxVisiterRelationsByTypeArgs = {
    code: Scalars['String'];
    type: RelationType;
};
export declare type QueryCreateBoxVisiterArgs = {
    storyId: Scalars['String'];
};
export declare type QueryEntityArgs = {
    id: Scalars['String'];
};
export declare type QueryEntitiesArgs = {
    limit?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    searchValue: SearchFilter;
    fetchPolicy?: Maybe<Scalars['String']>;
    randomization?: Maybe<Scalars['Boolean']>;
    seed?: Maybe<Scalars['String']>;
    and_filter?: Maybe<Scalars['Boolean']>;
};
export declare type QueryRelationsArgs = {
    searchValue: SearchFilter;
    fetchPolicy?: Maybe<Scalars['String']>;
};
export declare type QueryRelationsAsEntitiesArgs = {
    id: Scalars['String'];
};
export declare type QueryCreateStoryboxArgs = {
    storyboxInfo: StoryboxBuild;
};
export declare type Relation = {
    __typename?: 'Relation';
    key: Scalars['String'];
    type: RelationType;
    order?: Maybe<Scalars['Int']>;
    label?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    timestamp_start?: Maybe<Scalars['Float']>;
    timestamp_end?: Maybe<Scalars['Float']>;
    timestamp_zoom?: Maybe<Scalars['Float']>;
    position?: Maybe<Position>;
    scale?: Maybe<Scalars['Float']>;
    audioFile?: Maybe<Scalars['String']>;
    subtitleFile?: Maybe<Scalars['String']>;
    date?: Maybe<Scalars['String']>;
    active?: Maybe<Scalars['Boolean']>;
    last_frame?: Maybe<Scalars['String']>;
    seen_frames?: Maybe<Array<Maybe<FrameSeen>>>;
    total_frames?: Maybe<Scalars['Int']>;
    setMediafile?: Maybe<Scalars['Int']>;
};
export declare type RelationInput = {
    key: Scalars['String'];
    type: RelationType;
};
export declare enum RelationType {
    AuthoredBy = "authoredBy",
    IsIn = "isIn",
    Contains = "contains",
    IsTypeOf = "isTypeOf",
    IsUsedIn = "isUsedIn",
    Components = "components",
    Parent = "parent",
    CarriedOutBy = "carriedOutBy",
    Stories = "stories",
    Visited = "visited",
    InBasket = "inBasket",
    Frames = "frames",
    BoxStories = "box_stories",
    Box = "box"
}
export declare type RelationsResults = {
    __typename?: 'RelationsResults';
    results?: Maybe<Array<Maybe<Relation>>>;
    count?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};
export declare type SearchFilter = {
    value?: Maybe<Scalars['String']>;
    isAsc?: Maybe<Scalars['Boolean']>;
    key?: Maybe<Scalars['String']>;
    relation_filter?: Maybe<Array<Maybe<Scalars['String']>>>;
    randomize?: Maybe<Scalars['Boolean']>;
    seed?: Maybe<Scalars['String']>;
    has_mediafile?: Maybe<Scalars['Boolean']>;
    skip_relations?: Maybe<Scalars['Boolean']>;
    and_filter?: Maybe<Scalars['Boolean']>;
};
export declare type Story = {
    __typename?: 'Story';
    key: Scalars['String'];
    active?: Maybe<Scalars['Boolean']>;
    last_frame?: Maybe<Scalars['String']>;
    total_frames?: Maybe<Scalars['Int']>;
};
export declare type StoryInput = {
    id?: Maybe<Scalars['String']>;
    last_frame?: Maybe<Scalars['String']>;
    total_frames?: Maybe<Scalars['Int']>;
};
export declare type StoryboxBuild = {
    frameId?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    language?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    assets?: Maybe<Array<Maybe<Scalars['String']>>>;
    assetTimings?: Maybe<Array<Maybe<KeyValuePair>>>;
};
export declare type Ticket = {
    __typename?: 'Ticket';
    code: Scalars['String'];
    body: Scalars['String'];
};
export declare type User = {
    __typename?: 'User';
    id: Scalars['String'];
    email: Scalars['String'];
    family_name: Scalars['String'];
    given_name: Scalars['String'];
    name: Scalars['String'];
    preferred_username: Scalars['String'];
};
/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export declare type __Type = {
    __typename?: '__Type';
    kind: __TypeKind;
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    specifiedByUrl?: Maybe<Scalars['String']>;
    fields?: Maybe<Array<__Field>>;
    interfaces?: Maybe<Array<__Type>>;
    possibleTypes?: Maybe<Array<__Type>>;
    enumValues?: Maybe<Array<__EnumValue>>;
    inputFields?: Maybe<Array<__InputValue>>;
    ofType?: Maybe<__Type>;
};
/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export declare type __TypeFieldsArgs = {
    includeDeprecated?: Maybe<Scalars['Boolean']>;
};
/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export declare type __TypeEnumValuesArgs = {
    includeDeprecated?: Maybe<Scalars['Boolean']>;
};
/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export declare type __TypeInputFieldsArgs = {
    includeDeprecated?: Maybe<Scalars['Boolean']>;
};
/** An enum describing what kind of type a given `__Type` is. */
export declare enum __TypeKind {
    /** Indicates this type is a scalar. */
    Scalar = "SCALAR",
    /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
    Object = "OBJECT",
    /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
    Interface = "INTERFACE",
    /** Indicates this type is a union. `possibleTypes` is a valid field. */
    Union = "UNION",
    /** Indicates this type is an enum. `enumValues` is a valid field. */
    Enum = "ENUM",
    /** Indicates this type is an input object. `inputFields` is a valid field. */
    InputObject = "INPUT_OBJECT",
    /** Indicates this type is a list. `ofType` is a valid field. */
    List = "LIST",
    /** Indicates this type is a non-null. `ofType` is a valid field. */
    NonNull = "NON_NULL"
}
/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export declare type __Field = {
    __typename?: '__Field';
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    args: Array<__InputValue>;
    type: __Type;
    isDeprecated: Scalars['Boolean'];
    deprecationReason?: Maybe<Scalars['String']>;
};
/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export declare type __FieldArgsArgs = {
    includeDeprecated?: Maybe<Scalars['Boolean']>;
};
/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export declare type __InputValue = {
    __typename?: '__InputValue';
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    type: __Type;
    /** A GraphQL-formatted string representing the default value for this input value. */
    defaultValue?: Maybe<Scalars['String']>;
    isDeprecated: Scalars['Boolean'];
    deprecationReason?: Maybe<Scalars['String']>;
};
/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export declare type __EnumValue = {
    __typename?: '__EnumValue';
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    isDeprecated: Scalars['Boolean'];
    deprecationReason?: Maybe<Scalars['String']>;
};
export declare type MinimalEntityFragment = {
    __typename?: 'Entity';
    id: string;
    object_id: string;
    type: string;
    primary_mediafile?: Maybe<string>;
    primary_transcode?: Maybe<string>;
    title: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    description: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    primary_mediafile_info?: Maybe<{
        __typename?: 'MediaInfo';
        width: string;
        height: string;
    }>;
    mediafiles?: Maybe<Array<Maybe<{
        __typename?: 'MediaFile';
        mediatype?: Maybe<{
            __typename?: 'MimeType';
            type?: Maybe<string>;
            mime?: Maybe<Mime>;
            image?: Maybe<boolean>;
            audio?: Maybe<boolean>;
            video?: Maybe<boolean>;
            pdf?: Maybe<boolean>;
        }>;
    }>>>;
};
export declare type TouchTableEntityFragment = ({
    __typename?: 'Entity';
    id: string;
    type: string;
    title: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    description: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    mediafiles?: Maybe<Array<Maybe<{
        __typename?: 'MediaFile';
        filename?: Maybe<string>;
        original_file_location?: Maybe<string>;
        transcode_filename?: Maybe<string>;
        mimetype?: Maybe<string>;
        mediatype?: Maybe<{
            __typename?: 'MimeType';
            type?: Maybe<string>;
            mime?: Maybe<Mime>;
            image?: Maybe<boolean>;
            audio?: Maybe<boolean>;
            video?: Maybe<boolean>;
            pdf?: Maybe<boolean>;
        }>;
    }>>>;
    relations?: Maybe<Array<Maybe<{
        __typename?: 'Relation';
        key: string;
        type: RelationType;
        label?: Maybe<string>;
        value?: Maybe<string>;
    }>>>;
} & PrimaryMediafileInfoFragment);
export declare type FullBoxVisiterFragment = {
    __typename?: 'BoxVisiter';
    id: string;
    type: string;
    code: string;
    frames_seen_last_visit?: Maybe<number>;
    start_time?: Maybe<string>;
    touch_table_time?: Maybe<string>;
    relations?: Maybe<Array<Maybe<({
        __typename?: 'Relation';
    } & BoxRelationFragment)>>>;
};
export declare type FullStoryFragment = ({
    __typename?: 'Entity';
    relationMetadata?: Maybe<Array<Maybe<{
        __typename?: 'Relation';
        key: string;
        audioFile?: Maybe<string>;
        subtitleFile?: Maybe<string>;
    }>>>;
    frames?: Maybe<Array<Maybe<({
        __typename?: 'Entity';
        relationMetadata?: Maybe<Array<Maybe<({
            __typename?: 'Relation';
        } & AssetMetadataFragment)>>>;
        assets?: Maybe<Array<Maybe<({
            __typename?: 'Entity';
            collections: Array<Maybe<{
                __typename?: 'Relation';
                key: string;
                value?: Maybe<string>;
            }>>;
        } & StoryEntityFragment)>>>;
    } & StoryEntityFragment)>>>;
} & StoryEntityFragment);
export declare type MetadataCollectionFieldsFragment = {
    __typename?: 'MetadataCollection';
    label: string;
    nested?: Maybe<boolean>;
    data?: Maybe<Array<Maybe<{
        __typename?: 'Metadata';
        value?: Maybe<string>;
        unMappedKey?: Maybe<string>;
        label?: Maybe<string>;
        nestedMetaData?: Maybe<({
            __typename?: 'Entity';
            metadataCollection?: Maybe<Array<Maybe<{
                __typename?: 'MetadataCollection';
                label: string;
                nested?: Maybe<boolean>;
                data?: Maybe<Array<Maybe<{
                    __typename?: 'Metadata';
                    value?: Maybe<string>;
                    unMappedKey?: Maybe<string>;
                    label?: Maybe<string>;
                    nestedMetaData?: Maybe<({
                        __typename?: 'Entity';
                    } & NestedEndEntityFragment)>;
                }>>>;
            }>>>;
        } & NestedEntityFragment)>;
    }>>>;
};
export declare type NestedEntityFragment = {
    __typename?: 'Entity';
    id: string;
    type: string;
    title: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    description: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    objectNumber: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    mediafiles?: Maybe<Array<Maybe<{
        __typename?: 'MediaFile';
        _id: string;
        original_file_location?: Maybe<string>;
        transcode_filename?: Maybe<string>;
        filename?: Maybe<string>;
        mimetype?: Maybe<string>;
        mediatype?: Maybe<{
            __typename?: 'MimeType';
            type?: Maybe<string>;
            mime?: Maybe<Mime>;
            image?: Maybe<boolean>;
            audio?: Maybe<boolean>;
            video?: Maybe<boolean>;
            pdf?: Maybe<boolean>;
        }>;
    }>>>;
    relations?: Maybe<Array<Maybe<{
        __typename?: 'Relation';
        key: string;
        type: RelationType;
        label?: Maybe<string>;
        value?: Maybe<string>;
    }>>>;
};
export declare type NestedEndEntityFragment = {
    __typename?: 'Entity';
    id: string;
    type: string;
    title: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    description: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    objectNumber: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    metadataCollection?: Maybe<Array<Maybe<{
        __typename?: 'MetadataCollection';
        label: string;
        nested?: Maybe<boolean>;
        data?: Maybe<Array<Maybe<{
            __typename?: 'Metadata';
            value?: Maybe<string>;
            unMappedKey?: Maybe<string>;
            label?: Maybe<string>;
        }>>>;
    }>>>;
    mediafiles?: Maybe<Array<Maybe<{
        __typename?: 'MediaFile';
        _id: string;
        original_file_location?: Maybe<string>;
        transcode_filename?: Maybe<string>;
        filename?: Maybe<string>;
        mimetype?: Maybe<string>;
        mediatype?: Maybe<{
            __typename?: 'MimeType';
            type?: Maybe<string>;
            mime?: Maybe<Mime>;
            image?: Maybe<boolean>;
            audio?: Maybe<boolean>;
            video?: Maybe<boolean>;
            pdf?: Maybe<boolean>;
        }>;
    }>>>;
    relations?: Maybe<Array<Maybe<{
        __typename?: 'Relation';
        key: string;
        type: RelationType;
        label?: Maybe<string>;
        value?: Maybe<string>;
    }>>>;
};
export declare type FullEntityFragment = {
    __typename?: 'Entity';
    id: string;
    type: string;
    primary_mediafile?: Maybe<string>;
    primary_transcode?: Maybe<string>;
    title: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    scopeNote: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    description: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    objectNumber: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    metadataCollection?: Maybe<Array<Maybe<({
        __typename?: 'MetadataCollection';
    } & MetadataCollectionFieldsFragment)>>>;
    mediafiles?: Maybe<Array<Maybe<{
        __typename?: 'MediaFile';
        _id: string;
        original_file_location?: Maybe<string>;
        transcode_filename?: Maybe<string>;
        thumbnail_file_location?: Maybe<string>;
        mimetype?: Maybe<string>;
        filename?: Maybe<string>;
        mediatype?: Maybe<{
            __typename?: 'MimeType';
            type?: Maybe<string>;
            mime?: Maybe<Mime>;
            image?: Maybe<boolean>;
            audio?: Maybe<boolean>;
            video?: Maybe<boolean>;
            pdf?: Maybe<boolean>;
        }>;
        metadata?: Maybe<Array<Maybe<{
            __typename?: 'MediaFileMetadata';
            key?: Maybe<string>;
            value?: Maybe<string>;
        }>>>;
    }>>>;
    relations?: Maybe<Array<Maybe<{
        __typename?: 'Relation';
        key: string;
        type: RelationType;
        label?: Maybe<string>;
        value?: Maybe<string>;
    }>>>;
};
export declare type CreatorFragment = {
    __typename?: 'Entity';
    type: string;
    metadata: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    relations?: Maybe<Array<Maybe<{
        __typename?: 'Relation';
        key: string;
        type: RelationType;
        label?: Maybe<string>;
    }>>>;
};
export declare type PrimaryMediafileInfoFragment = {
    __typename?: 'Entity';
    primary_width?: Maybe<string>;
    primary_height?: Maybe<string>;
    primary_mediafile?: Maybe<string>;
    primary_transcode?: Maybe<string>;
    primary_mediafile_location?: Maybe<string>;
};
export declare type StoryEntityFragment = ({
    __typename?: 'Entity';
    id: string;
    type: string;
    title: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    metadata: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value?: Maybe<string>;
    }>>;
    mediafiles?: Maybe<Array<Maybe<{
        __typename?: 'MediaFile';
        original_file_location?: Maybe<string>;
        filename?: Maybe<string>;
        mimetype?: Maybe<string>;
        transcode_filename?: Maybe<string>;
        mediainfo?: Maybe<{
            __typename?: 'MediaInfo';
            width: string;
            height: string;
        }>;
        mediatype?: Maybe<{
            __typename?: 'MimeType';
            type?: Maybe<string>;
            mime?: Maybe<Mime>;
            image?: Maybe<boolean>;
            audio?: Maybe<boolean>;
            video?: Maybe<boolean>;
            pdf?: Maybe<boolean>;
        }>;
    }>>>;
} & PrimaryMediafileInfoFragment);
export declare type FullUserFragment = {
    __typename?: 'User';
    id: string;
    email: string;
    family_name: string;
    given_name: string;
    name: string;
    preferred_username: string;
};
export declare type FullRelationFragment = {
    __typename?: 'Relation';
    key: string;
    type: RelationType;
    label?: Maybe<string>;
    value?: Maybe<string>;
    order?: Maybe<number>;
};
export declare type BoxRelationFragment = {
    __typename?: 'Relation';
    key: string;
    type: RelationType;
    active?: Maybe<boolean>;
    order?: Maybe<number>;
    last_frame?: Maybe<string>;
    total_frames?: Maybe<number>;
    seen_frames?: Maybe<Array<Maybe<{
        __typename?: 'FrameSeen';
        id: string;
        date: number;
    }>>>;
};
export declare type AssetMetadataFragment = {
    __typename?: 'Relation';
    key: string;
    label?: Maybe<string>;
    timestamp_start?: Maybe<number>;
    timestamp_end?: Maybe<number>;
    timestamp_zoom?: Maybe<number>;
    scale?: Maybe<number>;
    audioFile?: Maybe<string>;
    subtitleFile?: Maybe<string>;
    position?: Maybe<{
        __typename?: 'Position';
        x?: Maybe<number>;
        y?: Maybe<number>;
        z?: Maybe<number>;
    }>;
};
export declare type GetEntitiesQueryVariables = Exact<{
    limit?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    searchValue: SearchFilter;
}>;
export declare type GetEntitiesQuery = {
    __typename?: 'Query';
    Entities?: Maybe<{
        __typename?: 'EntitiesResults';
        count?: Maybe<number>;
        limit?: Maybe<number>;
        results?: Maybe<Array<Maybe<({
            __typename?: 'Entity';
        } & MinimalEntityFragment)>>>;
        relations?: Maybe<Array<Maybe<({
            __typename?: 'Relation';
        } & FullRelationFragment)>>>;
    }>;
};
export declare type GetFullEntitiesQueryVariables = Exact<{
    limit?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    searchValue: SearchFilter;
    fetchPolicy?: Maybe<Scalars['String']>;
}>;
export declare type GetFullEntitiesQuery = {
    __typename?: 'Query';
    Entities?: Maybe<{
        __typename?: 'EntitiesResults';
        count?: Maybe<number>;
        limit?: Maybe<number>;
        results?: Maybe<Array<Maybe<({
            __typename?: 'Entity';
        } & FullEntityFragment)>>>;
    }>;
};
export declare type GetEntityByIdQueryVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type GetEntityByIdQuery = {
    __typename?: 'Query';
    Entity?: Maybe<({
        __typename?: 'Entity';
    } & FullEntityFragment)>;
};
export declare type GetTouchTableEntityByIdQueryVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type GetTouchTableEntityByIdQuery = {
    __typename?: 'Query';
    Entity?: Maybe<({
        __typename?: 'Entity';
    } & TouchTableEntityFragment)>;
};
export declare type GetCreatorByIdQueryVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type GetCreatorByIdQuery = {
    __typename?: 'Query';
    Entity?: Maybe<({
        __typename?: 'Entity';
    } & CreatorFragment)>;
};
export declare type GetMeQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetMeQuery = {
    __typename?: 'Query';
    User?: Maybe<({
        __typename?: 'User';
    } & FullUserFragment)>;
};
export declare type GetRelationsQueryVariables = Exact<{
    searchValue: SearchFilter;
}>;
export declare type GetRelationsQuery = {
    __typename?: 'Query';
    Relations?: Maybe<{
        __typename?: 'RelationsResults';
        count?: Maybe<number>;
        limit?: Maybe<number>;
        results?: Maybe<Array<Maybe<({
            __typename?: 'Relation';
        } & FullRelationFragment)>>>;
    }>;
};
export declare type GetStoriesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetStoriesQuery = {
    __typename?: 'Query';
    Stories?: Maybe<{
        __typename?: 'EntitiesResults';
        count?: Maybe<number>;
        limit?: Maybe<number>;
        results?: Maybe<Array<Maybe<({
            __typename?: 'Entity';
        } & FullStoryFragment)>>>;
    }>;
};
export declare type GetStoryByIdQueryVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type GetStoryByIdQuery = {
    __typename?: 'Query';
    Entity?: Maybe<({
        __typename?: 'Entity';
    } & FullStoryFragment)>;
};
export declare type GetEnumsByNameQueryVariables = Exact<{
    enumName: Scalars['String'];
}>;
export declare type GetEnumsByNameQuery = {
    __typename?: 'Query';
    __type?: Maybe<{
        __typename?: '__Type';
        name?: Maybe<string>;
        enumValues?: Maybe<Array<{
            __typename?: '__EnumValue';
            name: string;
        }>>;
    }>;
};
export declare type GetActiveBoxQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetActiveBoxQuery = {
    __typename?: 'Query';
    ActiveBox: {
        __typename?: 'EntitiesResults';
        count?: Maybe<number>;
        limit?: Maybe<number>;
        results?: Maybe<Array<Maybe<({
            __typename?: 'Entity';
        } & FullStoryFragment)>>>;
    };
};
export declare type GetBoxVisitersQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetBoxVisitersQuery = {
    __typename?: 'Query';
    BoxVisiters?: Maybe<{
        __typename?: 'BoxVisitersResults';
        count?: Maybe<number>;
        limit?: Maybe<number>;
        results?: Maybe<Array<Maybe<({
            __typename?: 'BoxVisiter';
        } & FullBoxVisiterFragment)>>>;
    }>;
};
export declare type PrintBoxTicketQueryVariables = Exact<{
    code: Scalars['String'];
}>;
export declare type PrintBoxTicketQuery = {
    __typename?: 'Query';
    PrintBoxTicket: {
        __typename?: 'Ticket';
        code: string;
        body: string;
    };
};
export declare type GetBoxVisiterByCodeQueryVariables = Exact<{
    code: Scalars['String'];
}>;
export declare type GetBoxVisiterByCodeQuery = {
    __typename?: 'Query';
    BoxVisiterByCode?: Maybe<({
        __typename?: 'BoxVisiter';
    } & FullBoxVisiterFragment)>;
};
export declare type GetBoxVisiterRelationsByTypeQueryVariables = Exact<{
    code: Scalars['String'];
    type: RelationType;
}>;
export declare type GetBoxVisiterRelationsByTypeQuery = {
    __typename?: 'Query';
    BoxVisiterRelationsByType?: Maybe<Array<Maybe<({
        __typename?: 'Relation';
    } & BoxRelationFragment)>>>;
};
export declare type CreateBoxVisiterQueryVariables = Exact<{
    storyId: Scalars['String'];
}>;
export declare type CreateBoxVisiterQuery = {
    __typename?: 'Query';
    CreateBoxVisiter?: Maybe<({
        __typename?: 'BoxVisiter';
    } & FullBoxVisiterFragment)>;
};
export declare type AddStoryToBoxVisiterMutationVariables = Exact<{
    code: Scalars['String'];
    storyId: Scalars['String'];
}>;
export declare type AddStoryToBoxVisiterMutation = {
    __typename?: 'Mutation';
    AddStoryToBoxVisiter?: Maybe<({
        __typename?: 'BoxVisiter';
    } & FullBoxVisiterFragment)>;
};
export declare type AddFrameToStoryBoxVisiterMutationVariables = Exact<{
    code: Scalars['String'];
    frameInput: FrameInput;
}>;
export declare type AddFrameToStoryBoxVisiterMutation = {
    __typename?: 'Mutation';
    AddFrameToStoryBoxVisiter?: Maybe<({
        __typename?: 'BoxVisiter';
    } & FullBoxVisiterFragment)>;
};
export declare type AddAssetToBoxVisiterMutationVariables = Exact<{
    code: Scalars['String'];
    assetId: Scalars['String'];
    type: RelationType;
}>;
export declare type AddAssetToBoxVisiterMutation = {
    __typename?: 'Mutation';
    AddAssetToBoxVisiter: Array<Maybe<{
        __typename?: 'Relation';
        key: string;
        type: RelationType;
        label?: Maybe<string>;
        order?: Maybe<number>;
    }>>;
};
export declare type DeleteRelationFromBoxVisiterMutationVariables = Exact<{
    code: Scalars['String'];
    relationId: Scalars['String'];
}>;
export declare type DeleteRelationFromBoxVisiterMutation = {
    __typename?: 'Mutation';
    DeleteBoxVisiterRelation: Array<Maybe<({
        __typename?: 'Relation';
    } & FullRelationFragment)>>;
};
export declare type UpdateBoxVisiterTouchtableTimeMutationVariables = Exact<{
    code: Scalars['String'];
    touchTableTime: Scalars['String'];
}>;
export declare type UpdateBoxVisiterTouchtableTimeMutation = {
    __typename?: 'Mutation';
    UpdateBoxVisiterTouchtableTime?: Maybe<({
        __typename?: 'BoxVisiter';
    } & FullBoxVisiterFragment)>;
};
export declare type GetTouchTableEntityQueryVariables = Exact<{
    limit?: Maybe<Scalars['Int']>;
    searchValue: SearchFilter;
}>;
export declare type GetTouchTableEntityQuery = {
    __typename?: 'Query';
    Entities?: Maybe<{
        __typename?: 'EntitiesResults';
        count?: Maybe<number>;
        limit?: Maybe<number>;
        results?: Maybe<Array<Maybe<({
            __typename?: 'Entity';
        } & TouchTableEntityFragment)>>>;
    }>;
};
export declare type RelationsAsEntitiesQueryVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type RelationsAsEntitiesQuery = {
    __typename?: 'Query';
    RelationsAsEntities?: Maybe<Array<Maybe<({
        __typename?: 'Entity';
        mediafiles?: Maybe<Array<Maybe<{
            __typename?: 'MediaFile';
            thumbnail_file_location?: Maybe<string>;
        }>>>;
    } & MinimalEntityFragment)>>>;
};
export declare type CreateStoryboxQueryVariables = Exact<{
    storyboxInfo: StoryboxBuild;
}>;
export declare type CreateStoryboxQuery = {
    __typename?: 'Query';
    CreateStorybox?: Maybe<({
        __typename?: 'Entity';
    } & MinimalEntityFragment)>;
};
export declare const MinimalEntityFragmentDoc: DocumentNode<MinimalEntityFragment, unknown>;
export declare const PrimaryMediafileInfoFragmentDoc: DocumentNode<PrimaryMediafileInfoFragment, unknown>;
export declare const TouchTableEntityFragmentDoc: DocumentNode<TouchTableEntityFragment, unknown>;
export declare const BoxRelationFragmentDoc: DocumentNode<BoxRelationFragment, unknown>;
export declare const FullBoxVisiterFragmentDoc: DocumentNode<FullBoxVisiterFragment, unknown>;
export declare const StoryEntityFragmentDoc: DocumentNode<StoryEntityFragment, unknown>;
export declare const AssetMetadataFragmentDoc: DocumentNode<AssetMetadataFragment, unknown>;
export declare const FullStoryFragmentDoc: DocumentNode<FullStoryFragment, unknown>;
export declare const NestedEntityFragmentDoc: DocumentNode<NestedEntityFragment, unknown>;
export declare const NestedEndEntityFragmentDoc: DocumentNode<NestedEndEntityFragment, unknown>;
export declare const MetadataCollectionFieldsFragmentDoc: DocumentNode<MetadataCollectionFieldsFragment, unknown>;
export declare const FullEntityFragmentDoc: DocumentNode<FullEntityFragment, unknown>;
export declare const CreatorFragmentDoc: DocumentNode<CreatorFragment, unknown>;
export declare const FullUserFragmentDoc: DocumentNode<FullUserFragment, unknown>;
export declare const FullRelationFragmentDoc: DocumentNode<FullRelationFragment, unknown>;
export declare const GetEntitiesDocument: DocumentNode<GetEntitiesQuery, Exact<{
    limit?: number | null | undefined;
    skip?: number | null | undefined;
    searchValue: SearchFilter;
}>>;
export declare const GetFullEntitiesDocument: DocumentNode<GetFullEntitiesQuery, Exact<{
    limit?: number | null | undefined;
    skip?: number | null | undefined;
    searchValue: SearchFilter;
    fetchPolicy?: string | null | undefined;
}>>;
export declare const GetEntityByIdDocument: DocumentNode<GetEntityByIdQuery, Exact<{
    id: Scalars['String'];
}>>;
export declare const GetTouchTableEntityByIdDocument: DocumentNode<GetTouchTableEntityByIdQuery, Exact<{
    id: Scalars['String'];
}>>;
export declare const GetCreatorByIdDocument: DocumentNode<GetCreatorByIdQuery, Exact<{
    id: Scalars['String'];
}>>;
export declare const GetMeDocument: DocumentNode<GetMeQuery, Exact<{
    [key: string]: never;
}>>;
export declare const GetRelationsDocument: DocumentNode<GetRelationsQuery, Exact<{
    searchValue: SearchFilter;
}>>;
export declare const GetStoriesDocument: DocumentNode<GetStoriesQuery, Exact<{
    [key: string]: never;
}>>;
export declare const GetStoryByIdDocument: DocumentNode<GetStoryByIdQuery, Exact<{
    id: Scalars['String'];
}>>;
export declare const GetEnumsByNameDocument: DocumentNode<GetEnumsByNameQuery, Exact<{
    enumName: Scalars['String'];
}>>;
export declare const GetActiveBoxDocument: DocumentNode<GetActiveBoxQuery, Exact<{
    [key: string]: never;
}>>;
export declare const GetBoxVisitersDocument: DocumentNode<GetBoxVisitersQuery, Exact<{
    [key: string]: never;
}>>;
export declare const PrintBoxTicketDocument: DocumentNode<PrintBoxTicketQuery, Exact<{
    code: Scalars['String'];
}>>;
export declare const GetBoxVisiterByCodeDocument: DocumentNode<GetBoxVisiterByCodeQuery, Exact<{
    code: Scalars['String'];
}>>;
export declare const GetBoxVisiterRelationsByTypeDocument: DocumentNode<GetBoxVisiterRelationsByTypeQuery, Exact<{
    code: Scalars['String'];
    type: RelationType;
}>>;
export declare const CreateBoxVisiterDocument: DocumentNode<CreateBoxVisiterQuery, Exact<{
    storyId: Scalars['String'];
}>>;
export declare const AddStoryToBoxVisiterDocument: DocumentNode<AddStoryToBoxVisiterMutation, Exact<{
    code: Scalars['String'];
    storyId: Scalars['String'];
}>>;
export declare const AddFrameToStoryBoxVisiterDocument: DocumentNode<AddFrameToStoryBoxVisiterMutation, Exact<{
    code: Scalars['String'];
    frameInput: FrameInput;
}>>;
export declare const AddAssetToBoxVisiterDocument: DocumentNode<AddAssetToBoxVisiterMutation, Exact<{
    code: Scalars['String'];
    assetId: Scalars['String'];
    type: RelationType;
}>>;
export declare const DeleteRelationFromBoxVisiterDocument: DocumentNode<DeleteRelationFromBoxVisiterMutation, Exact<{
    code: Scalars['String'];
    relationId: Scalars['String'];
}>>;
export declare const UpdateBoxVisiterTouchtableTimeDocument: DocumentNode<UpdateBoxVisiterTouchtableTimeMutation, Exact<{
    code: Scalars['String'];
    touchTableTime: Scalars['String'];
}>>;
export declare const GetTouchTableEntityDocument: DocumentNode<GetTouchTableEntityQuery, Exact<{
    limit?: number | null | undefined;
    searchValue: SearchFilter;
}>>;
export declare const RelationsAsEntitiesDocument: DocumentNode<RelationsAsEntitiesQuery, Exact<{
    id: Scalars['String'];
}>>;
export declare const CreateStoryboxDocument: DocumentNode<CreateStoryboxQuery, Exact<{
    storyboxInfo: StoryboxBuild;
}>>;
