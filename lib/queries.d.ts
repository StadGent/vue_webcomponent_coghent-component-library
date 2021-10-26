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
    relations?: Maybe<Array<Maybe<Relation>>>;
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
    replaceMetadata: Array<Metadata>;
};
export declare type MutationReplaceMetadataArgs = {
    id: Scalars['String'];
    metadata: Array<MetadataInput>;
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
export declare type User = {
    __typename?: 'User';
    id: Scalars['String'];
    email: Scalars['String'];
    family_name: Scalars['String'];
    given_name: Scalars['String'];
    name: Scalars['String'];
    preferred_username: Scalars['String'];
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
    }>>>;
    relations?: Maybe<Array<Maybe<{
        __typename?: 'Relation';
        key: string;
        type: RelationType;
        label?: Maybe<string>;
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
export declare const MinimalEntityFragmentDoc: DocumentNode<MinimalEntityFragment, unknown>;
export declare const FullEntityFragmentDoc: DocumentNode<FullEntityFragment, unknown>;
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
export declare const GetMeDocument: DocumentNode<GetMeQuery, Exact<{
    [key: string]: never;
}>>;
export declare const GetRelationsDocument: DocumentNode<GetRelationsQuery, Exact<{
    searchValue: SearchFilter;
}>>;
