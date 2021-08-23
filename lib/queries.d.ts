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
    count?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};
export declare type Entity = {
    __typename?: 'Entity';
    id: Scalars['String'];
    type: Scalars['String'];
    metadata: Array<Maybe<Metadata>>;
    mediafiles?: Maybe<Array<Maybe<MediaFile>>>;
    relations?: Maybe<Array<Maybe<Relation>>>;
};
export declare type EntityMetadataArgs = {
    key?: Maybe<Array<Maybe<MetaKey>>>;
};
export declare type MediaFile = {
    __typename?: 'MediaFile';
    _id: Scalars['String'];
    original_file_location?: Maybe<Scalars['String']>;
    entities?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export declare enum MetaKey {
    Title = "title",
    Type = "type",
    Collection = "collection",
    Description = "description",
    Material = "material"
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
    replaceMetadata?: Maybe<Entity>;
};
export declare type MutationReplaceMetadataArgs = {
    id: Scalars['String'];
    metadata: Array<MetadataInput>;
};
export declare type Query = {
    __typename?: 'Query';
    Entity?: Maybe<Entity>;
    Entities?: Maybe<EntitiesResults>;
    SearchEntities?: Maybe<EntitiesResults>;
};
export declare type QueryEntityArgs = {
    id: Scalars['String'];
};
export declare type QueryEntitiesArgs = {
    limit?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    searchQuery?: Maybe<Scalars['String']>;
    fetchPolicy?: Maybe<Scalars['String']>;
};
export declare type QuerySearchEntitiesArgs = {
    limit?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
};
export declare type Relation = {
    __typename?: 'Relation';
    key: Scalars['String'];
    type: RelationType;
};
export declare enum RelationType {
    AuthoredBy = "authoredBy",
    IsIn = "isIn"
}
export declare type MinimalEntityFragment = {
    __typename?: 'Entity';
    id: string;
    type: string;
    metadata: Array<Maybe<{
        __typename?: 'Metadata';
        key: MetaKey;
        value: string;
    }>>;
};
export declare type FullEntityFragment = {
    __typename?: 'Entity';
    id: string;
    type: string;
    title: Array<Maybe<{
        __typename?: 'Metadata';
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
    relations?: Maybe<Array<Maybe<{
        __typename?: 'Relation';
        key: string;
        type: RelationType;
    }>>>;
};
export declare type GetEntitiesQueryVariables = Exact<{
    limit?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    searchQuery?: Maybe<Scalars['String']>;
}>;
export declare type GetEntitiesQuery = {
    __typename?: 'Query';
    Entities?: Maybe<{
        __typename?: 'EntitiesResults';
        count?: Maybe<number>;
        limit?: Maybe<number>;
        results?: Maybe<Array<Maybe<{
            __typename?: 'Entity';
            id: string;
            type: string;
            metadata: Array<Maybe<{
                __typename?: 'Metadata';
                key: MetaKey;
                value: string;
            }>>;
        }>>>;
    }>;
};
export declare type GetFullEntitiesQueryVariables = Exact<{
    limit?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    searchQuery?: Maybe<Scalars['String']>;
    fetchPolicy?: Maybe<Scalars['String']>;
}>;
export declare type GetFullEntitiesQuery = {
    __typename?: 'Query';
    Entities?: Maybe<{
        __typename?: 'EntitiesResults';
        count?: Maybe<number>;
        limit?: Maybe<number>;
        results?: Maybe<Array<Maybe<{
            __typename?: 'Entity';
            id: string;
            type: string;
            title: Array<Maybe<{
                __typename?: 'Metadata';
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
            relations?: Maybe<Array<Maybe<{
                __typename?: 'Relation';
                key: string;
                type: RelationType;
            }>>>;
        }>>>;
    }>;
};
export declare type GetEntityByIdQueryVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type GetEntityByIdQuery = {
    __typename?: 'Query';
    Entity?: Maybe<{
        __typename?: 'Entity';
        id: string;
        type: string;
        title: Array<Maybe<{
            __typename?: 'Metadata';
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
        relations?: Maybe<Array<Maybe<{
            __typename?: 'Relation';
            key: string;
            type: RelationType;
        }>>>;
    }>;
};
export declare type EditMetadataMutationVariables = Exact<{
    id: Scalars['String'];
    metadata: Array<MetadataInput> | MetadataInput;
}>;
export declare type EditMetadataMutation = {
    __typename?: 'Mutation';
    replaceMetadata?: Maybe<{
        __typename?: 'Entity';
        id: string;
        type: string;
        title: Array<Maybe<{
            __typename?: 'Metadata';
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
        relations?: Maybe<Array<Maybe<{
            __typename?: 'Relation';
            key: string;
            type: RelationType;
        }>>>;
    }>;
};
export declare const MinimalEntityFragmentDoc: DocumentNode<MinimalEntityFragment, unknown>;
export declare const FullEntityFragmentDoc: DocumentNode<FullEntityFragment, unknown>;
export declare const GetEntitiesDocument: DocumentNode<GetEntitiesQuery, Exact<{
    limit?: number | null | undefined;
    skip?: number | null | undefined;
    searchQuery?: string | null | undefined;
}>>;
export declare const GetFullEntitiesDocument: DocumentNode<GetFullEntitiesQuery, Exact<{
    limit?: number | null | undefined;
    skip?: number | null | undefined;
    searchQuery?: string | null | undefined;
    fetchPolicy?: string | null | undefined;
}>>;
export declare const GetEntityByIdDocument: DocumentNode<GetEntityByIdQuery, Exact<{
    id: Scalars['String'];
}>>;
export declare const EditMetadataDocument: DocumentNode<EditMetadataMutation, Exact<{
    id: Scalars['String'];
    metadata: Array<MetadataInput> | MetadataInput;
}>>;
