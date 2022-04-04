/* eslint-disable */
// THIS FILE IS GENERATED, DO NOT EDIT!

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Void: void;
};

export type BoxVisiter = {
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


export type BoxVisiterRelationByTypeArgs = {
  type: RelationType;
};

export type BoxVisitersResults = {
  __typename?: 'BoxVisitersResults';
  results?: Maybe<Array<Maybe<BoxVisiter>>>;
  relations?: Maybe<Array<Maybe<Relation>>>;
  count?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export enum ComponentType {
  Frame = 'frame',
  Audio = 'audio'
}

export type EntitiesResults = {
  __typename?: 'EntitiesResults';
  results?: Maybe<Array<Maybe<Entity>>>;
  relations?: Maybe<Array<Maybe<Relation>>>;
  count?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Entity = {
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
  collections: Array<Maybe<Metadata>>;
  relations?: Maybe<Array<Maybe<Relation>>>;
  relationMetadata?: Maybe<Array<Maybe<Relation>>>;
  components?: Maybe<Array<Maybe<Entity>>>;
  componentsOfType?: Maybe<Array<Maybe<Entity>>>;
  assets?: Maybe<Array<Maybe<Entity>>>;
  frames?: Maybe<Array<Maybe<Entity>>>;
  mediafiles?: Maybe<Array<Maybe<MediaFile>>>;
  primary_mediafile?: Maybe<Scalars['String']>;
  primary_mediafile_info?: Maybe<MediaInfo>;
  primary_mediafile_location?: Maybe<Scalars['String']>;
};


export type EntityMetadataArgs = {
  key?: Maybe<Array<Maybe<MetaKey>>>;
};


export type EntityMetadataByLabelArgs = {
  key?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type EntityMetadataCollectionArgs = {
  key?: Maybe<Array<Maybe<MetaKey>>>;
  label?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type EntityComponentsOfTypeArgs = {
  key?: Maybe<Scalars['String']>;
};

export type FrameInput = {
  storyId: Scalars['String'];
  frameId: Scalars['String'];
};

export type FrameSeen = {
  __typename?: 'FrameSeen';
  id: Scalars['String'];
  date: Scalars['Int'];
};

export type JsPatch = {
  op: JsPatchOp;
  path: Array<Scalars['String']>;
  value: Scalars['String'];
};

export enum JsPatchOp {
  Add = 'add',
  Replace = 'replace',
  Remove = 'remove'
}

export enum Mime {
  Audiompeg = 'AUDIOMPEG',
  Imgjpg = 'IMGJPG',
  Imgtiff = 'IMGTIFF',
  Imgpng = 'IMGPNG',
  Videomp4 = 'VIDEOMP4',
  Videowav = 'VIDEOWAV',
  Textplain = 'TEXTPLAIN'
}

export type MediaFile = {
  __typename?: 'MediaFile';
  _id: Scalars['String'];
  original_file_location?: Maybe<Scalars['String']>;
  thumbnail_file_location?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  entities?: Maybe<Array<Maybe<Scalars['String']>>>;
  mediainfo?: Maybe<MediaInfo>;
  metadata?: Maybe<Array<Maybe<MediaFileMetadata>>>;
  mediatype?: Maybe<MimeType>;
  mimetype?: Maybe<Scalars['String']>;
};

export type MediaFileMetadata = {
  __typename?: 'MediaFileMetadata';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MediaInfo = {
  __typename?: 'MediaInfo';
  width: Scalars['String'];
  height: Scalars['String'];
};

export enum MetaKey {
  Title = 'title',
  Type = 'type',
  Collection = 'collection',
  Description = 'description',
  Material = 'material',
  Height = 'height',
  Width = 'width',
  Depth = 'depth',
  UnMapped = 'unMapped',
  ObjectNumber = 'object_number',
  ObjectName = 'object_name',
  QrCode = 'QRCode',
  Fullname = 'fullname',
  Firstname = 'firstname',
  Lastname = 'lastname',
  Nationality = 'nationality',
  ScopeNote = 'scopeNote'
}

export type Metadata = {
  __typename?: 'Metadata';
  key: MetaKey;
  value?: Maybe<Scalars['String']>;
  nestedMetaData?: Maybe<Entity>;
  lang?: Maybe<Scalars['String']>;
  unMappedKey?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<RelationType>;
};

export type MetadataCollection = {
  __typename?: 'MetadataCollection';
  label: Scalars['String'];
  data?: Maybe<Array<Maybe<Metadata>>>;
  nested?: Maybe<Scalars['Boolean']>;
};

export type MetadataInput = {
  key: MetaKey;
  value: Scalars['String'];
  lang?: Maybe<Scalars['String']>;
};

export type MimeType = {
  __typename?: 'MimeType';
  type?: Maybe<Scalars['String']>;
  mime?: Maybe<Mime>;
  audio?: Maybe<Scalars['Boolean']>;
  video?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  replaceMetadata: Array<Metadata>;
  AddStoryToBoxVisiter: BoxVisiter;
  AddFrameToStoryBoxVisiter: BoxVisiter;
  addTouchTableTimeToBoxVisiter: BoxVisiter;
  AddAssetToBoxVisiter: Array<Maybe<Relation>>;
};


export type MutationReplaceMetadataArgs = {
  id: Scalars['String'];
  metadata: Array<MetadataInput>;
};


export type MutationAddStoryToBoxVisiterArgs = {
  code: Scalars['String'];
  storyId: Scalars['String'];
};


export type MutationAddFrameToStoryBoxVisiterArgs = {
  code: Scalars['String'];
  frameInput: FrameInput;
};


export type MutationAddTouchTableTimeToBoxVisiterArgs = {
  code: Scalars['String'];
  time: Scalars['String'];
};


export type MutationAddAssetToBoxVisiterArgs = {
  code: Scalars['String'];
  assetId: Scalars['String'];
  type: RelationType;
};

export type Position = {
  __typename?: 'Position';
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
};

export type Query = {
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
};


export type QueryPrintBoxTicketArgs = {
  code: Scalars['String'];
};


export type QueryBoxVisiterByCodeArgs = {
  code: Scalars['String'];
};


export type QueryBoxVisiterRelationsByTypeArgs = {
  code: Scalars['String'];
  type: RelationType;
};


export type QueryCreateBoxVisiterArgs = {
  storyId: Scalars['String'];
};


export type QueryEntityArgs = {
  id: Scalars['String'];
};


export type QueryEntitiesArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchValue: SearchFilter;
  fetchPolicy?: Maybe<Scalars['String']>;
  randomization?: Maybe<Scalars['Boolean']>;
  seed?: Maybe<Scalars['String']>;
};


export type QueryRelationsArgs = {
  searchValue: SearchFilter;
  fetchPolicy?: Maybe<Scalars['String']>;
};

export type Relation = {
  __typename?: 'Relation';
  key: Scalars['String'];
  type: RelationType;
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
  order?: Maybe<Scalars['Int']>;
  total_frames?: Maybe<Scalars['Int']>;
};

export enum RelationType {
  AuthoredBy = 'authoredBy',
  IsIn = 'isIn',
  Contains = 'contains',
  IsTypeOf = 'isTypeOf',
  IsUsedIn = 'isUsedIn',
  Components = 'components',
  Parent = 'parent',
  CarriedOutBy = 'carriedOutBy',
  Visited = 'visited',
  InBasket = 'inBasket',
  Frames = 'frames',
  Stories = 'stories',
  Box = 'box'
}

export type RelationsResults = {
  __typename?: 'RelationsResults';
  results?: Maybe<Array<Maybe<Relation>>>;
  count?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SearchFilter = {
  value?: Maybe<Scalars['String']>;
  isAsc?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
  relation_filter?: Maybe<Array<Maybe<Scalars['String']>>>;
  randomize?: Maybe<Scalars['Boolean']>;
  seed?: Maybe<Scalars['String']>;
  has_mediafile?: Maybe<Scalars['Boolean']>;
  skip_relations?: Maybe<Scalars['Boolean']>;
};

export type Story = {
  __typename?: 'Story';
  key: Scalars['String'];
  active?: Maybe<Scalars['Boolean']>;
  last_frame?: Maybe<Scalars['String']>;
  total_frames?: Maybe<Scalars['Int']>;
};

export type StoryInput = {
  id?: Maybe<Scalars['String']>;
  last_frame?: Maybe<Scalars['String']>;
  total_frames?: Maybe<Scalars['Int']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  code: Scalars['String'];
  body: Scalars['String'];
};

export type User = {
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
export type __Type = {
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
export type __TypeFieldsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL'
}

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
  __typename?: '__Field';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};


/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
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
export type __EnumValue = {
  __typename?: '__EnumValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

export type MinimalEntityFragment = { __typename?: 'Entity', id: string, object_id: string, type: string, primary_mediafile?: Maybe<string>, title: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, description: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, primary_mediafile_info?: Maybe<{ __typename?: 'MediaInfo', width: string, height: string }> };

export type TouchTableEntityFragment = { __typename?: 'Entity', id: string, type: string, primary_mediafile?: Maybe<string>, title: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, description: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, mediafiles?: Maybe<Array<Maybe<{ __typename?: 'MediaFile', filename?: Maybe<string> }>>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string>, value?: Maybe<string> }>>> };

export type FullBoxVisiterFragment = { __typename?: 'BoxVisiter', id: string, type: string, code: string, frames_seen_last_visit?: Maybe<number>, start_time?: Maybe<string>, touch_table_time?: Maybe<string>, relations?: Maybe<Array<Maybe<(
    { __typename?: 'Relation' }
    & BoxRelationFragment
  )>>> };

export type FullStoryFragment = (
  { __typename?: 'Entity', relationMetadata?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, audioFile?: Maybe<string>, subtitleFile?: Maybe<string> }>>>, frames?: Maybe<Array<Maybe<(
    { __typename?: 'Entity', relationMetadata?: Maybe<Array<Maybe<(
      { __typename?: 'Relation' }
      & AssetMetadataFragment
    )>>>, assets?: Maybe<Array<Maybe<(
      { __typename?: 'Entity', collections: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>> }
      & StoryEntityFragment
    )>>> }
    & StoryEntityFragment
  )>>> }
  & StoryEntityFragment
);

export type MetadataCollectionFieldsFragment = { __typename?: 'MetadataCollection', label: string, nested?: Maybe<boolean>, data?: Maybe<Array<Maybe<{ __typename?: 'Metadata', value?: Maybe<string>, unMappedKey?: Maybe<string>, label?: Maybe<string>, nestedMetaData?: Maybe<(
      { __typename?: 'Entity', metadataCollection?: Maybe<Array<Maybe<{ __typename?: 'MetadataCollection', label: string, nested?: Maybe<boolean>, data?: Maybe<Array<Maybe<{ __typename?: 'Metadata', value?: Maybe<string>, unMappedKey?: Maybe<string>, label?: Maybe<string>, nestedMetaData?: Maybe<(
            { __typename?: 'Entity' }
            & NestedEndEntityFragment
          )> }>>> }>>> }
      & NestedEntityFragment
    )> }>>> };

export type NestedEntityFragment = { __typename?: 'Entity', id: string, type: string, title: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, description: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, objectNumber: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, mediafiles?: Maybe<Array<Maybe<{ __typename?: 'MediaFile', _id: string, original_file_location?: Maybe<string>, filename?: Maybe<string> }>>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string>, value?: Maybe<string> }>>> };

export type NestedEndEntityFragment = { __typename?: 'Entity', id: string, type: string, title: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, description: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, objectNumber: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, metadataCollection?: Maybe<Array<Maybe<{ __typename?: 'MetadataCollection', label: string, nested?: Maybe<boolean>, data?: Maybe<Array<Maybe<{ __typename?: 'Metadata', value?: Maybe<string>, unMappedKey?: Maybe<string>, label?: Maybe<string> }>>> }>>>, mediafiles?: Maybe<Array<Maybe<{ __typename?: 'MediaFile', _id: string, original_file_location?: Maybe<string>, filename?: Maybe<string> }>>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string>, value?: Maybe<string> }>>> };

export type FullEntityFragment = { __typename?: 'Entity', id: string, type: string, primary_mediafile?: Maybe<string>, title: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, scopeNote: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, description: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, objectNumber: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, metadataCollection?: Maybe<Array<Maybe<(
    { __typename?: 'MetadataCollection' }
    & MetadataCollectionFieldsFragment
  )>>>, mediafiles?: Maybe<Array<Maybe<{ __typename?: 'MediaFile', _id: string, original_file_location?: Maybe<string>, filename?: Maybe<string>, metadata?: Maybe<Array<Maybe<{ __typename?: 'MediaFileMetadata', key?: Maybe<string>, value?: Maybe<string> }>>> }>>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string>, value?: Maybe<string> }>>> };

export type CreatorFragment = { __typename?: 'Entity', type: string, metadata: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string> }>>> };

export type StoryEntityFragment = { __typename?: 'Entity', id: string, type: string, primary_mediafile_location?: Maybe<string>, title: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, metadata: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, mediafiles?: Maybe<Array<Maybe<{ __typename?: 'MediaFile', original_file_location?: Maybe<string>, filename?: Maybe<string>, mediainfo?: Maybe<{ __typename?: 'MediaInfo', width: string, height: string }>, mediatype?: Maybe<{ __typename?: 'MimeType', type?: Maybe<string>, mime?: Maybe<Mime>, audio?: Maybe<boolean>, video?: Maybe<boolean> }> }>>> };

export type FullUserFragment = { __typename?: 'User', id: string, email: string, family_name: string, given_name: string, name: string, preferred_username: string };

export type FullRelationFragment = { __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string>, value?: Maybe<string>, order?: Maybe<number> };

export type BoxRelationFragment = { __typename?: 'Relation', key: string, type: RelationType, active?: Maybe<boolean>, order?: Maybe<number>, last_frame?: Maybe<string>, total_frames?: Maybe<number>, seen_frames?: Maybe<Array<Maybe<{ __typename?: 'FrameSeen', id: string, date: number }>>> };

export type AssetMetadataFragment = { __typename?: 'Relation', key: string, label?: Maybe<string>, timestamp_start?: Maybe<number>, timestamp_end?: Maybe<number>, timestamp_zoom?: Maybe<number>, scale?: Maybe<number>, audioFile?: Maybe<string>, subtitleFile?: Maybe<string>, position?: Maybe<{ __typename?: 'Position', x?: Maybe<number>, y?: Maybe<number>, z?: Maybe<number> }> };

export type GetEntitiesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchValue: SearchFilter;
}>;


export type GetEntitiesQuery = { __typename?: 'Query', Entities?: Maybe<{ __typename?: 'EntitiesResults', count?: Maybe<number>, limit?: Maybe<number>, results?: Maybe<Array<Maybe<(
      { __typename?: 'Entity' }
      & MinimalEntityFragment
    )>>>, relations?: Maybe<Array<Maybe<(
      { __typename?: 'Relation' }
      & FullRelationFragment
    )>>> }> };

export type GetFullEntitiesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchValue: SearchFilter;
  fetchPolicy?: Maybe<Scalars['String']>;
}>;


export type GetFullEntitiesQuery = { __typename?: 'Query', Entities?: Maybe<{ __typename?: 'EntitiesResults', count?: Maybe<number>, limit?: Maybe<number>, results?: Maybe<Array<Maybe<(
      { __typename?: 'Entity' }
      & FullEntityFragment
    )>>> }> };

export type GetEntityByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetEntityByIdQuery = { __typename?: 'Query', Entity?: Maybe<(
    { __typename?: 'Entity' }
    & FullEntityFragment
  )> };

export type GetTouchTableEntityByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTouchTableEntityByIdQuery = { __typename?: 'Query', Entity?: Maybe<(
    { __typename?: 'Entity' }
    & TouchTableEntityFragment
  )> };

export type GetCreatorByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCreatorByIdQuery = { __typename?: 'Query', Entity?: Maybe<(
    { __typename?: 'Entity' }
    & CreatorFragment
  )> };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', User?: Maybe<(
    { __typename?: 'User' }
    & FullUserFragment
  )> };

export type GetRelationsQueryVariables = Exact<{
  searchValue: SearchFilter;
}>;


export type GetRelationsQuery = { __typename?: 'Query', Relations?: Maybe<{ __typename?: 'RelationsResults', count?: Maybe<number>, limit?: Maybe<number>, results?: Maybe<Array<Maybe<(
      { __typename?: 'Relation' }
      & FullRelationFragment
    )>>> }> };

export type GetStoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStoriesQuery = { __typename?: 'Query', Stories?: Maybe<{ __typename?: 'EntitiesResults', count?: Maybe<number>, limit?: Maybe<number>, results?: Maybe<Array<Maybe<(
      { __typename?: 'Entity' }
      & FullStoryFragment
    )>>> }> };

export type GetStoryByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetStoryByIdQuery = { __typename?: 'Query', Entity?: Maybe<(
    { __typename?: 'Entity' }
    & FullStoryFragment
  )> };

export type GetEnumsByNameQueryVariables = Exact<{
  enumName: Scalars['String'];
}>;


export type GetEnumsByNameQuery = { __typename?: 'Query', __type?: Maybe<{ __typename?: '__Type', name?: Maybe<string>, enumValues?: Maybe<Array<{ __typename?: '__EnumValue', name: string }>> }> };

export type GetActiveBoxQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveBoxQuery = { __typename?: 'Query', ActiveBox: { __typename?: 'EntitiesResults', count?: Maybe<number>, limit?: Maybe<number>, results?: Maybe<Array<Maybe<(
      { __typename?: 'Entity' }
      & FullStoryFragment
    )>>> } };

export type GetBoxVisitersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBoxVisitersQuery = { __typename?: 'Query', BoxVisiters?: Maybe<{ __typename?: 'BoxVisitersResults', count?: Maybe<number>, limit?: Maybe<number>, results?: Maybe<Array<Maybe<(
      { __typename?: 'BoxVisiter' }
      & FullBoxVisiterFragment
    )>>> }> };

export type PrintBoxTicketQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type PrintBoxTicketQuery = { __typename?: 'Query', PrintBoxTicket: { __typename?: 'Ticket', code: string, body: string } };

export type GetBoxVisiterByCodeQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type GetBoxVisiterByCodeQuery = { __typename?: 'Query', BoxVisiterByCode?: Maybe<(
    { __typename?: 'BoxVisiter' }
    & FullBoxVisiterFragment
  )> };

export type GetBoxVisiterRelationsByTypeQueryVariables = Exact<{
  code: Scalars['String'];
  type: RelationType;
}>;


export type GetBoxVisiterRelationsByTypeQuery = { __typename?: 'Query', BoxVisiterRelationsByType?: Maybe<Array<Maybe<(
    { __typename?: 'Relation' }
    & BoxRelationFragment
  )>>> };

export type CreateBoxVisiterQueryVariables = Exact<{
  storyId: Scalars['String'];
}>;


export type CreateBoxVisiterQuery = { __typename?: 'Query', CreateBoxVisiter?: Maybe<(
    { __typename?: 'BoxVisiter' }
    & FullBoxVisiterFragment
  )> };

export type AddStoryToBoxVisiterMutationVariables = Exact<{
  code: Scalars['String'];
  storyId: Scalars['String'];
}>;


export type AddStoryToBoxVisiterMutation = { __typename?: 'Mutation', AddStoryToBoxVisiter: (
    { __typename?: 'BoxVisiter' }
    & FullBoxVisiterFragment
  ) };

export type AddFrameToStoryBoxVisiterMutationVariables = Exact<{
  code: Scalars['String'];
  frameInput: FrameInput;
}>;


export type AddFrameToStoryBoxVisiterMutation = { __typename?: 'Mutation', AddFrameToStoryBoxVisiter: (
    { __typename?: 'BoxVisiter' }
    & FullBoxVisiterFragment
  ) };

export type AddTouchTableTimeToBoxVisiterMutationVariables = Exact<{
  code: Scalars['String'];
  time: Scalars['String'];
}>;


export type AddTouchTableTimeToBoxVisiterMutation = { __typename?: 'Mutation', addTouchTableTimeToBoxVisiter: { __typename?: 'BoxVisiter', touch_table_time?: Maybe<string> } };

export type AddAssetToBoxVisiterMutationVariables = Exact<{
  code: Scalars['String'];
  assetId: Scalars['String'];
  type: RelationType;
}>;


export type AddAssetToBoxVisiterMutation = { __typename?: 'Mutation', AddAssetToBoxVisiter: Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string>, order?: Maybe<number> }>> };

export type GetTouchTableEntityQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  searchValue: SearchFilter;
}>;


export type GetTouchTableEntityQuery = { __typename?: 'Query', Entities?: Maybe<{ __typename?: 'EntitiesResults', count?: Maybe<number>, limit?: Maybe<number>, results?: Maybe<Array<Maybe<(
      { __typename?: 'Entity' }
      & TouchTableEntityFragment
    )>>> }> };

export const MinimalEntityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"minimalEntity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"object_id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"description"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primary_mediafile"}},{"kind":"Field","name":{"kind":"Name","value":"primary_mediafile_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<MinimalEntityFragment, unknown>;
export const TouchTableEntityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"touchTableEntity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"description"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primary_mediafile"}},{"kind":"Field","name":{"kind":"Name","value":"mediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<TouchTableEntityFragment, unknown>;
export const BoxRelationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"boxRelation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Relation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"last_frame"}},{"kind":"Field","name":{"kind":"Name","value":"total_frames"}},{"kind":"Field","name":{"kind":"Name","value":"seen_frames"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<BoxRelationFragment, unknown>;
export const FullBoxVisiterFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fullBoxVisiter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BoxVisiter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"frames_seen_last_visit"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"touch_table_time"}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"boxRelation"}}]}}]}},...BoxRelationFragmentDoc.definitions]} as unknown as DocumentNode<FullBoxVisiterFragment, unknown>;
export const StoryEntityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storyEntity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"collection"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original_file_location"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"mediainfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediatype"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"video"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primary_mediafile_location"}}]}}]} as unknown as DocumentNode<StoryEntityFragment, unknown>;
export const AssetMetadataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"assetMetadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Relation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp_start"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp_end"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp_zoom"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scale"}},{"kind":"Field","name":{"kind":"Name","value":"audioFile"}},{"kind":"Field","name":{"kind":"Name","value":"subtitleFile"}}]}}]} as unknown as DocumentNode<AssetMetadataFragment, unknown>;
export const FullStoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fullStory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storyEntity"}},{"kind":"Field","name":{"kind":"Name","value":"relationMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"audioFile"}},{"kind":"Field","name":{"kind":"Name","value":"subtitleFile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"frames"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storyEntity"}},{"kind":"Field","name":{"kind":"Name","value":"relationMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"assetMetadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storyEntity"}},{"kind":"Field","alias":{"kind":"Name","value":"collections"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"collection"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}},...StoryEntityFragmentDoc.definitions,...AssetMetadataFragmentDoc.definitions]} as unknown as DocumentNode<FullStoryFragment, unknown>;
export const NestedEntityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NestedEntity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"description"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"objectNumber"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"object_number"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"original_file_location"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<NestedEntityFragment, unknown>;
export const NestedEndEntityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"nestedEndEntity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"description"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"objectNumber"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"object_number"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadataCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"},{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"object_number"},{"kind":"EnumValue","value":"scopeNote"}]}},{"kind":"Argument","name":{"kind":"Name","value":"label"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"objectnummer","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"nested"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unMappedKey"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"original_file_location"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<NestedEndEntityFragment, unknown>;
export const MetadataCollectionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataCollectionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"nested"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unMappedKey"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"nestedMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NestedEntity"}},{"kind":"Field","name":{"kind":"Name","value":"metadataCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"},{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"object_number"},{"kind":"EnumValue","value":"scopeNote"}]}},{"kind":"Argument","name":{"kind":"Name","value":"label"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"objectnummer","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"nested"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unMappedKey"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"nestedMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"nestedEndEntity"}}]}}]}}]}}]}}]}}]}},...NestedEntityFragmentDoc.definitions,...NestedEndEntityFragmentDoc.definitions]} as unknown as DocumentNode<MetadataCollectionFieldsFragment, unknown>;
export const FullEntityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fullEntity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"scopeNote"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"scopeNote"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"description"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"objectNumber"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"object_number"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadataCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"},{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"object_number"},{"kind":"EnumValue","value":"scopeNote"}]}},{"kind":"Argument","name":{"kind":"Name","value":"label"},"value":{"kind":"ListValue","values":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataCollectionFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primary_mediafile"}},{"kind":"Field","name":{"kind":"Name","value":"mediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"original_file_location"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},...MetadataCollectionFieldsFragmentDoc.definitions]} as unknown as DocumentNode<FullEntityFragment, unknown>;
export const CreatorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"creator"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"fullname"},{"kind":"EnumValue","value":"firstname"},{"kind":"EnumValue","value":"lastname"},{"kind":"EnumValue","value":"nationality"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]} as unknown as DocumentNode<CreatorFragment, unknown>;
export const FullUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fullUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"family_name"}},{"kind":"Field","name":{"kind":"Name","value":"given_name"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"preferred_username"}}]}}]} as unknown as DocumentNode<FullUserFragment, unknown>;
export const FullRelationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fullRelation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Relation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]} as unknown as DocumentNode<FullRelationFragment, unknown>;
export const GetEntitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEntities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Entities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"minimalEntity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullRelation"}}]}}]}}]}},...MinimalEntityFragmentDoc.definitions,...FullRelationFragmentDoc.definitions]} as unknown as DocumentNode<GetEntitiesQuery, GetEntitiesQueryVariables>;
export const GetFullEntitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFullEntities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fetchPolicy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Entities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}}},{"kind":"Argument","name":{"kind":"Name","value":"fetchPolicy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fetchPolicy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullEntity"}}]}}]}}]}},...FullEntityFragmentDoc.definitions]} as unknown as DocumentNode<GetFullEntitiesQuery, GetFullEntitiesQueryVariables>;
export const GetEntityByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEntityById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Entity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullEntity"}}]}}]}},...FullEntityFragmentDoc.definitions]} as unknown as DocumentNode<GetEntityByIdQuery, GetEntityByIdQueryVariables>;
export const GetTouchTableEntityByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTouchTableEntityById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Entity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"touchTableEntity"}}]}}]}},...TouchTableEntityFragmentDoc.definitions]} as unknown as DocumentNode<GetTouchTableEntityByIdQuery, GetTouchTableEntityByIdQueryVariables>;
export const GetCreatorByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCreatorById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Entity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"creator"}}]}}]}},...CreatorFragmentDoc.definitions]} as unknown as DocumentNode<GetCreatorByIdQuery, GetCreatorByIdQueryVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullUser"}}]}}]}},...FullUserFragmentDoc.definitions]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const GetRelationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRelations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Relations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullRelation"}}]}}]}}]}},...FullRelationFragmentDoc.definitions]} as unknown as DocumentNode<GetRelationsQuery, GetRelationsQueryVariables>;
export const GetStoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullStory"}}]}}]}}]}},...FullStoryFragmentDoc.definitions]} as unknown as DocumentNode<GetStoriesQuery, GetStoriesQueryVariables>;
export const GetStoryByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStoryById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Entity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullStory"}}]}}]}},...FullStoryFragmentDoc.definitions]} as unknown as DocumentNode<GetStoryByIdQuery, GetStoryByIdQueryVariables>;
export const GetEnumsByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEnumsByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enumName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__type"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enumName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enumValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetEnumsByNameQuery, GetEnumsByNameQueryVariables>;
export const GetActiveBoxDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getActiveBox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ActiveBox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullStory"}}]}}]}}]}},...FullStoryFragmentDoc.definitions]} as unknown as DocumentNode<GetActiveBoxQuery, GetActiveBoxQueryVariables>;
export const GetBoxVisitersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBoxVisiters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BoxVisiters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullBoxVisiter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}}]}}]}},...FullBoxVisiterFragmentDoc.definitions]} as unknown as DocumentNode<GetBoxVisitersQuery, GetBoxVisitersQueryVariables>;
export const PrintBoxTicketDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"printBoxTicket"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PrintBoxTicket"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]} as unknown as DocumentNode<PrintBoxTicketQuery, PrintBoxTicketQueryVariables>;
export const GetBoxVisiterByCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBoxVisiterByCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BoxVisiterByCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullBoxVisiter"}}]}}]}},...FullBoxVisiterFragmentDoc.definitions]} as unknown as DocumentNode<GetBoxVisiterByCodeQuery, GetBoxVisiterByCodeQueryVariables>;
export const GetBoxVisiterRelationsByTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBoxVisiterRelationsByType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RelationType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BoxVisiterRelationsByType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"boxRelation"}}]}}]}},...BoxRelationFragmentDoc.definitions]} as unknown as DocumentNode<GetBoxVisiterRelationsByTypeQuery, GetBoxVisiterRelationsByTypeQueryVariables>;
export const CreateBoxVisiterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"createBoxVisiter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateBoxVisiter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"storyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullBoxVisiter"}}]}}]}},...FullBoxVisiterFragmentDoc.definitions]} as unknown as DocumentNode<CreateBoxVisiterQuery, CreateBoxVisiterQueryVariables>;
export const AddStoryToBoxVisiterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addStoryToBoxVisiter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddStoryToBoxVisiter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"storyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullBoxVisiter"}}]}}]}},...FullBoxVisiterFragmentDoc.definitions]} as unknown as DocumentNode<AddStoryToBoxVisiterMutation, AddStoryToBoxVisiterMutationVariables>;
export const AddFrameToStoryBoxVisiterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addFrameToStoryBoxVisiter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frameInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FrameInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddFrameToStoryBoxVisiter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"frameInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frameInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullBoxVisiter"}}]}}]}},...FullBoxVisiterFragmentDoc.definitions]} as unknown as DocumentNode<AddFrameToStoryBoxVisiterMutation, AddFrameToStoryBoxVisiterMutationVariables>;
export const AddTouchTableTimeToBoxVisiterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addTouchTableTimeToBoxVisiter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"time"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTouchTableTimeToBoxVisiter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"time"},"value":{"kind":"Variable","name":{"kind":"Name","value":"time"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"touch_table_time"}}]}}]}}]} as unknown as DocumentNode<AddTouchTableTimeToBoxVisiterMutation, AddTouchTableTimeToBoxVisiterMutationVariables>;
export const AddAssetToBoxVisiterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addAssetToBoxVisiter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RelationType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddAssetToBoxVisiter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"assetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]}}]} as unknown as DocumentNode<AddAssetToBoxVisiterMutation, AddAssetToBoxVisiterMutationVariables>;
export const GetTouchTableEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTouchTableEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Entities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"touchTableEntity"}}]}}]}}]}},...TouchTableEntityFragmentDoc.definitions]} as unknown as DocumentNode<GetTouchTableEntityQuery, GetTouchTableEntityQueryVariables>;