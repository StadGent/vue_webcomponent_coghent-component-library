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
export declare type EntitiesResults = {
    __typename?: 'EntitiesResults';
    results?: Maybe<Array<Maybe<Entity>>>;
    relations?: Maybe<Array<Maybe<Relation>>>;
    count?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};
export declare type Entity = {
    __typename?: 'Entity';
    id: Scalars['String'];
    type: Scalars['String'];
    metadata: Array<Maybe<Metadata>>;
    title: Array<Maybe<Metadata>>;
    collections: Array<Maybe<Metadata>>;
    dimensions: Array<Maybe<Metadata>>;
    relations?: Maybe<Array<Maybe<Relation>>>;
    relationMetadata?: Maybe<Array<Maybe<Relation>>>;
    components?: Maybe<Array<Maybe<Entity>>>;
    assets?: Maybe<Array<Maybe<Entity>>>;
    frames?: Maybe<Array<Maybe<Entity>>>;
    mediafiles?: Maybe<Array<Maybe<MediaFile>>>;
};
export declare type EntityMetadataArgs = {
    key?: Maybe<Array<Maybe<MetaKey>>>;
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
export declare type MediaFile = {
    __typename?: 'MediaFile';
    _id: Scalars['String'];
    original_file_location?: Maybe<Scalars['String']>;
    thumbnail_file_location?: Maybe<Scalars['String']>;
    filename?: Maybe<Scalars['String']>;
    entities?: Maybe<Array<Maybe<Scalars['String']>>>;
    mediainfo?: Maybe<MediaInfo>;
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
    Diameter = "diameter",
    Hoogte = "hoogte"
}
export declare type Metadata = {
    __typename?: 'Metadata';
    key: MetaKey;
    value: Scalars['String'];
    lang?: Maybe<Scalars['String']>;
};
export declare type MetadataInput = {
    key: MetaKey;
    value: Scalars['String'];
    lang?: Maybe<Scalars['String']>;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    replaceMetadata: Array<Metadata>;
};
export declare type MutationReplaceMetadataArgs = {
    id: Scalars['String'];
    metadata: Array<MetadataInput>;
};
export declare type Position = {
    __typename?: 'Position';
    x?: Maybe<Scalars['Int']>;
    y?: Maybe<Scalars['Int']>;
    z?: Maybe<Scalars['Int']>;
};
export declare type Query = {
    __typename?: 'Query';
    Entity?: Maybe<Entity>;
    Entities?: Maybe<EntitiesResults>;
    Relations?: Maybe<RelationsResults>;
    User?: Maybe<User>;
};
export declare type QueryEntityArgs = {
    id: Scalars['String'];
};
export declare type QueryEntitiesArgs = {
    limit?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    searchValue: SearchFilter;
    fetchPolicy?: Maybe<Scalars['String']>;
};
export declare type QueryRelationsArgs = {
    searchValue: SearchFilter;
    fetchPolicy?: Maybe<Scalars['String']>;
};
export declare type Relation = {
    __typename?: 'Relation';
    key: Scalars['String'];
    type: RelationType;
    label?: Maybe<Scalars['String']>;
    timestamp_start?: Maybe<Scalars['Float']>;
    timestamp_end?: Maybe<Scalars['Float']>;
    position?: Maybe<Position>;
    scale?: Maybe<Scalars['Float']>;
};
export declare enum RelationType {
    AuthoredBy = "authoredBy",
    IsIn = "isIn",
    Contains = "contains",
    IsTypeOf = "isTypeOf",
    IsUsedIn = "isUsedIn",
    Components = "components",
    Parent = "parent"
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
};
export declare enum Story {
    Id = "id",
    Type = "type",
    Title = "title",
    Metadata = "metadata",
    Mediafiles = "mediafiles",
    Frames = "frames"
}
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
    type: string;
    mediafiles?: Maybe<Array<Maybe<{
        __typename?: 'MediaFile';
        location?: Maybe<string>;
    }>>>;
};
export declare type FullEntityFragment = {
    __typename?: 'Entity';
    id: string;
    type: string;
    title: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value: string;
    }>>;
    description: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value: string;
    }>>;
    metadata: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value: string;
    }>>;
    mediafiles?: Maybe<Array<Maybe<{
        __typename?: 'MediaFile';
        _id: string;
        original_file_location?: Maybe<string>;
        filename?: Maybe<string>;
        mediainfo?: Maybe<{
            __typename?: 'MediaInfo';
            width: string;
            height: string;
        }>;
    }>>>;
    relations?: Maybe<Array<Maybe<{
        __typename?: 'Relation';
        key: string;
        type: RelationType;
        label?: Maybe<string>;
    }>>>;
};
export declare type StoryEntityFragment = {
    __typename?: 'Entity';
    id: string;
    type: string;
    title: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value: string;
    }>>;
    metadata: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value: string;
    }>>;
    mediafiles?: Maybe<Array<Maybe<{
        __typename?: 'MediaFile';
        original_file_location?: Maybe<string>;
    }>>>;
};
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
};
export declare type AssetMetadataFragment = {
    __typename?: 'Relation';
    key: string;
    label?: Maybe<string>;
    timestamp_start?: Maybe<number>;
    timestamp_end?: Maybe<number>;
    scale?: Maybe<number>;
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
        } & FullEntityFragment)>>>;
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
    limit?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    searchValue: SearchFilter;
}>;
export declare type GetStoriesQuery = {
    __typename?: 'Query';
    Entities?: Maybe<{
        __typename?: 'EntitiesResults';
        count?: Maybe<number>;
        limit?: Maybe<number>;
        results?: Maybe<Array<Maybe<({
            __typename?: 'Entity';
            frames?: Maybe<Array<Maybe<({
                __typename?: 'Entity';
                relationMetadata?: Maybe<Array<Maybe<({
                    __typename?: 'Relation';
                } & AssetMetadataFragment)>>>;
                assets?: Maybe<Array<Maybe<({
                    __typename?: 'Entity';
                    collections: Array<Maybe<{
                        __typename?: 'Metadata';
                        key: MetaKey;
                        value: string;
                    }>>;
                    dimensions: Array<Maybe<{
                        __typename?: 'Metadata';
                        key: MetaKey;
                        value: string;
                    }>>;
                } & StoryEntityFragment)>>>;
            } & StoryEntityFragment)>>>;
        } & StoryEntityFragment)>>>;
    }>;
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
export declare const MinimalEntityFragmentDoc: DocumentNode<MinimalEntityFragment, unknown>;
export declare const FullEntityFragmentDoc: DocumentNode<FullEntityFragment, unknown>;
export declare const StoryEntityFragmentDoc: DocumentNode<StoryEntityFragment, unknown>;
export declare const FullUserFragmentDoc: DocumentNode<FullUserFragment, unknown>;
export declare const FullRelationFragmentDoc: DocumentNode<FullRelationFragment, unknown>;
export declare const AssetMetadataFragmentDoc: DocumentNode<AssetMetadataFragment, unknown>;
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
export declare const GetMeDocument: DocumentNode<GetMeQuery, Exact<{
    [key: string]: never;
}>>;
export declare const GetRelationsDocument: DocumentNode<GetRelationsQuery, Exact<{
    searchValue: SearchFilter;
}>>;
export declare const GetStoriesDocument: DocumentNode<GetStoriesQuery, Exact<{
    limit?: number | null | undefined;
    skip?: number | null | undefined;
    searchValue: SearchFilter;
}>>;
export declare const GetEnumsByNameDocument: DocumentNode<GetEnumsByNameQuery, Exact<{
    enumName: Scalars['String'];
}>>;
