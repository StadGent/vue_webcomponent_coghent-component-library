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
  Upload: any;
  Void: void;
};

export enum AdvancedInputType {
  MultiSelectInput = 'MultiSelectInput',
  TextInput = 'TextInput'
}

export type BoxVisiter = {
  __typename?: 'BoxVisiter';
  _key?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  frames_seen_last_visit?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  relationByType?: Maybe<Array<Maybe<Relation>>>;
  relations?: Maybe<Array<Maybe<Relation>>>;
  start_time?: Maybe<Scalars['String']>;
  storyboxes?: Maybe<Array<Maybe<Entity>>>;
  ticketUsed?: Maybe<Scalars['Int']>;
  touch_table_time?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};


export type BoxVisiterRelationByTypeArgs = {
  type: RelationType;
};

export type BoxVisitersResults = {
  __typename?: 'BoxVisitersResults';
  count?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  relations?: Maybe<Array<Maybe<Relation>>>;
  results?: Maybe<Array<Maybe<BoxVisiter>>>;
};

export enum ComponentType {
  Audio = 'audio',
  Frame = 'frame'
}

export type EntitiesResults = {
  __typename?: 'EntitiesResults';
  count?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  relations?: Maybe<Array<Maybe<Relation>>>;
  results?: Maybe<Array<Maybe<Entity>>>;
};

export type Entity = {
  __typename?: 'Entity';
  _key?: Maybe<Scalars['String']>;
  assets?: Maybe<Array<Maybe<Entity>>>;
  collections: Array<Maybe<Relation>>;
  components?: Maybe<Array<Maybe<Entity>>>;
  componentsOfType?: Maybe<Array<Maybe<Entity>>>;
  frames?: Maybe<Array<Maybe<Entity>>>;
  id: Scalars['String'];
  mediafiles?: Maybe<Array<Maybe<MediaFile>>>;
  metadata: Array<Maybe<Metadata>>;
  metadataByLabel: Array<Maybe<Metadata>>;
  metadataCollection?: Maybe<Array<Maybe<MetadataCollection>>>;
  nonPublicMediafiles?: Maybe<Array<Maybe<MediaFile>>>;
  object_id: Scalars['String'];
  primary_height?: Maybe<Scalars['String']>;
  primary_mediafile?: Maybe<Scalars['String']>;
  primary_mediafile_info?: Maybe<MediaInfo>;
  primary_mediafile_location?: Maybe<Scalars['String']>;
  primary_transcode?: Maybe<Scalars['String']>;
  primary_transcode_location?: Maybe<Scalars['String']>;
  primary_width?: Maybe<Scalars['String']>;
  publicationStatus?: Maybe<Array<Maybe<Metadata>>>;
  relationMetadata?: Maybe<Array<Maybe<Relation>>>;
  relations?: Maybe<Array<Maybe<Relation>>>;
  scopeNote: Array<Maybe<Metadata>>;
  title: Array<Maybe<Metadata>>;
  type: Scalars['String'];
};


export type EntityComponentsOfTypeArgs = {
  key?: Maybe<Scalars['String']>;
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

export type EntityInfo = {
  description: Scalars['String'];
  title: Scalars['String'];
  type: EntityTypes;
};

export enum EntityTypes {
  Asset = 'asset',
  BoxVisit = 'box_visit',
  Contains = 'contains',
  Frame = 'frame',
  Person = 'person',
  Story = 'story',
  Thesaurus = 'thesaurus'
}

export type FilterInput = {
  key: Scalars['String'];
  multiSelectInput?: Maybe<MultiSelectInput>;
  textInput?: Maybe<TextInput>;
  type: AdvancedInputType;
};

export type FrameInput = {
  frameId: Scalars['String'];
  storyId: Scalars['String'];
};

export type FrameSeen = {
  __typename?: 'FrameSeen';
  date: Scalars['Int'];
  id: Scalars['String'];
};

export type JsPatch = {
  op: JsPatchOp;
  path: Array<Scalars['String']>;
  value: Scalars['String'];
};

export enum JsPatchOp {
  Add = 'add',
  Remove = 'remove',
  Replace = 'replace'
}

export type KeyValuePair = {
  __typename?: 'KeyValuePair';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type KeyValuePairInput = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum Mime {
  Applicationpdf = 'APPLICATIONPDF',
  Audioaac = 'AUDIOAAC',
  Audiomp3 = 'AUDIOMP3',
  Audiompeg = 'AUDIOMPEG',
  Audioogg = 'AUDIOOGG',
  Audioopus = 'AUDIOOPUS',
  Audiowav = 'AUDIOWAV',
  Audioxwav = 'AUDIOXWAV',
  Imgavif = 'IMGAVIF',
  Imgbmp = 'IMGBMP',
  Imgjpeg = 'IMGJPEG',
  Imgjpg = 'IMGJPG',
  Imgpng = 'IMGPNG',
  Imgtiff = 'IMGTIFF',
  Imgwebp = 'IMGWEBP',
  Textplain = 'TEXTPLAIN',
  Videomov = 'VIDEOMOV',
  Videomp4 = 'VIDEOMP4',
  Videowav = 'VIDEOWAV'
}

export type MediaFile = {
  __typename?: 'MediaFile';
  _id: Scalars['String'];
  entities?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename?: Maybe<Scalars['String']>;
  img_height?: Maybe<Scalars['String']>;
  img_width?: Maybe<Scalars['String']>;
  mediainfo?: Maybe<MediaInfo>;
  mediatype?: Maybe<MimeType>;
  metadata?: Maybe<Array<Maybe<MediaFileMetadata>>>;
  mimetype?: Maybe<Scalars['String']>;
  original_file_location?: Maybe<Scalars['String']>;
  primary_transcode_location?: Maybe<Scalars['String']>;
  thumbnail_file_location?: Maybe<Scalars['String']>;
  transcode_filename?: Maybe<Scalars['String']>;
};

export type MediaFileInput = {
  filename?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataInput>>;
};

export type MediaFileMetadata = {
  __typename?: 'MediaFileMetadata';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MediaInfo = {
  __typename?: 'MediaInfo';
  height: Scalars['String'];
  width: Scalars['String'];
};

export type MediafilesResults = {
  __typename?: 'MediafilesResults';
  count?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  relations?: Maybe<Array<Maybe<Relation>>>;
  results?: Maybe<Array<Maybe<MediaFile>>>;
};

export enum MetaKey {
  QrCode = 'QRCode',
  BoxCode = 'boxCode',
  Collection = 'collection',
  Depth = 'depth',
  Description = 'description',
  Firstname = 'firstname',
  Fullname = 'fullname',
  Height = 'height',
  Lastname = 'lastname',
  Likes = 'likes',
  Maker = 'maker',
  Material = 'material',
  Nationality = 'nationality',
  ObjectName = 'object_name',
  ObjectNumber = 'object_number',
  Periode = 'periode',
  PublicationStatus = 'publication_status',
  Rights = 'rights',
  ScopeNote = 'scopeNote',
  Status = 'status',
  Title = 'title',
  Type = 'type',
  UnMapped = 'unMapped',
  Width = 'width'
}

export type Metadata = {
  __typename?: 'Metadata';
  key: MetaKey;
  label?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  nestedMetaData?: Maybe<Entity>;
  type?: Maybe<RelationType>;
  unMappedKey?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MetadataCollection = {
  __typename?: 'MetadataCollection';
  data?: Maybe<Array<Maybe<Metadata>>>;
  label: Scalars['String'];
  nested?: Maybe<Scalars['Boolean']>;
};

export type MetadataInput = {
  key: MetaKey;
  label?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type MimeType = {
  __typename?: 'MimeType';
  audio?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['Boolean']>;
  mime?: Maybe<Mime>;
  pdf?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['Boolean']>;
};

export type MultiSelectInput = {
  AndOrValue?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddAssetToBoxVisiter: Array<Maybe<Relation>>;
  AddFrameToStoryBoxVisiter?: Maybe<BoxVisiter>;
  AddStoryToBoxVisiter?: Maybe<BoxVisiter>;
  AddTouchTableTime?: Maybe<BoxVisiter>;
  DeleteBoxVisiterBasketItem: Array<Maybe<Relation>>;
  DeleteEntity?: Maybe<Scalars['String']>;
  UpdateEntity?: Maybe<Entity>;
  UpdatedScannedOfBoxvisiter?: Maybe<BoxVisiter>;
  UploadMediafile?: Maybe<MediaFile>;
  replaceMetadata: Array<Metadata>;
};


export type MutationAddAssetToBoxVisiterArgs = {
  assetId: Scalars['String'];
  code: Scalars['String'];
  type: RelationType;
};


export type MutationAddFrameToStoryBoxVisiterArgs = {
  code: Scalars['String'];
  frameInput: FrameInput;
};


export type MutationAddStoryToBoxVisiterArgs = {
  code: Scalars['String'];
  storyId: Scalars['String'];
};


export type MutationAddTouchTableTimeArgs = {
  _code: Scalars['String'];
};


export type MutationDeleteBoxVisiterBasketItemArgs = {
  code: Scalars['String'];
  relationId: Scalars['String'];
};


export type MutationDeleteEntityArgs = {
  id: Scalars['String'];
};


export type MutationUpdateEntityArgs = {
  id: Scalars['String'];
  metadata: Array<Maybe<MetadataInput>>;
  relations: Array<Maybe<RelationInput>>;
};


export type MutationUpdatedScannedOfBoxvisiterArgs = {
  code: Scalars['String'];
};


export type MutationUploadMediafileArgs = {
  file?: Maybe<Scalars['Upload']>;
  media: MediaFileInput;
  metadata?: Maybe<Array<Maybe<MetadataInput>>>;
  relations?: Maybe<Array<Maybe<RelationInput>>>;
};


export type MutationReplaceMetadataArgs = {
  id: Scalars['String'];
  metadata: Array<MetadataInput>;
};

export type Position = {
  __typename?: 'Position';
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
};

export enum Publication {
  Private = 'private',
  Public = 'public',
  Validate = 'validate'
}

export type Query = {
  __typename?: 'Query';
  ActiveBox: EntitiesResults;
  AddEntityAsRelation?: Maybe<Array<Maybe<Relation>>>;
  BasketByCustomFrameId?: Maybe<Array<Maybe<Relation>>>;
  BoxVisiterByCode?: Maybe<BoxVisiter>;
  BoxVisiterRelationsByType?: Maybe<Array<Maybe<Relation>>>;
  BoxVisiters?: Maybe<BoxVisitersResults>;
  CreateBoxVisiter?: Maybe<BoxVisiter>;
  CreateEntity?: Maybe<Entity>;
  CreateStorybox?: Maybe<Entity>;
  CreateTestimoni?: Maybe<Entity>;
  Entities?: Maybe<EntitiesResults>;
  Entity?: Maybe<Entity>;
  GetMyUploadedAssets?: Maybe<EntitiesResults>;
  GetStoryById?: Maybe<Entity>;
  GetUploadRelations?: Maybe<EntitiesResults>;
  GetvisiterOfEntity?: Maybe<BoxVisiter>;
  LinkFrameToVisiter?: Maybe<BoxVisiter>;
  LinkStorybox?: Maybe<Entity>;
  LinkTestimoniToAsset?: Maybe<Array<Maybe<Relation>>>;
  PrintBoxTicket: Ticket;
  Relations?: Maybe<RelationsResults>;
  RelationsAsEntities?: Maybe<Array<Maybe<Entity>>>;
  Stories?: Maybe<EntitiesResults>;
  StoryBox?: Maybe<Entity>;
  Storybox?: Maybe<EntitiesResults>;
  UploadObjectFromEntity?: Maybe<UploadComposable>;
  User?: Maybe<User>;
};


export type QueryActiveBoxArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryAddEntityAsRelationArgs = {
  entityId: Scalars['String'];
  entityRelationId: Scalars['String'];
};


export type QueryBasketByCustomFrameIdArgs = {
  frameId: Scalars['String'];
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


export type QueryCreateEntityArgs = {
  entityInfo: EntityInfo;
};


export type QueryCreateStoryboxArgs = {
  storyboxInfo: StoryboxBuildInput;
};


export type QueryCreateTestimoniArgs = {
  entityInfo: EntityInfo;
};


export type QueryEntitiesArgs = {
  and_filter?: Maybe<Scalars['Boolean']>;
  fetchPolicy?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  randomization?: Maybe<Scalars['Boolean']>;
  searchValue: SearchFilter;
  seed?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryEntityArgs = {
  id: Scalars['String'];
};


export type QueryGetStoryByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetUploadRelationsArgs = {
  searchValue: Scalars['String'];
};


export type QueryGetvisiterOfEntityArgs = {
  id: Scalars['String'];
};


export type QueryLinkFrameToVisiterArgs = {
  frameId: Scalars['String'];
};


export type QueryLinkStoryboxArgs = {
  code: Scalars['String'];
};


export type QueryLinkTestimoniToAssetArgs = {
  assetId: Scalars['String'];
  testimoniId: Scalars['String'];
};


export type QueryPrintBoxTicketArgs = {
  code: Scalars['String'];
};


export type QueryRelationsArgs = {
  fetchPolicy?: Maybe<Scalars['String']>;
  searchValue: SearchFilter;
};


export type QueryRelationsAsEntitiesArgs = {
  id: Scalars['String'];
};


export type QueryUploadObjectFromEntityArgs = {
  entityId: Scalars['String'];
};

export type Relation = {
  __typename?: 'Relation';
  active?: Maybe<Scalars['Boolean']>;
  audioFile?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  last_frame?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  position?: Maybe<Position>;
  scale?: Maybe<Scalars['Float']>;
  seen_frames?: Maybe<Array<Maybe<FrameSeen>>>;
  setMediafile?: Maybe<Scalars['Int']>;
  subtitleFile?: Maybe<Scalars['String']>;
  timestamp_end?: Maybe<Scalars['Float']>;
  timestamp_start?: Maybe<Scalars['Float']>;
  timestamp_zoom?: Maybe<Scalars['Float']>;
  total_frames?: Maybe<Scalars['Int']>;
  type: RelationType;
  value?: Maybe<Scalars['String']>;
};

export type RelationInput = {
  key: Scalars['String'];
  type: RelationType;
};

export enum RelationType {
  AuthoredBy = 'authoredBy',
  Box = 'box',
  BoxStories = 'box_stories',
  CarriedOutBy = 'carriedOutBy',
  Components = 'components',
  Contains = 'contains',
  Frames = 'frames',
  InBasket = 'inBasket',
  IsIn = 'isIn',
  IsTypeOf = 'isTypeOf',
  IsUsedIn = 'isUsedIn',
  Parent = 'parent',
  Stories = 'stories',
  StoryBox = 'story_box',
  UserConnected = 'userConnected',
  Visited = 'visited'
}

export type RelationsResults = {
  __typename?: 'RelationsResults';
  count?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<Relation>>>;
};

export enum Rights {
  Cc0 = 'cc0',
  Undetermined = 'undetermined'
}

export type SearchFilter = {
  and_filter?: Maybe<Scalars['Boolean']>;
  has_mediafile?: Maybe<Scalars['Boolean']>;
  isAsc?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
  randomize?: Maybe<Scalars['Boolean']>;
  relation_filter?: Maybe<Array<Maybe<Scalars['String']>>>;
  seed?: Maybe<Scalars['String']>;
  skip_relations?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
};

export enum StatusKey {
  Hidden = 'hidden',
  Shown = 'shown'
}

export type Story = {
  __typename?: 'Story';
  active?: Maybe<Scalars['Boolean']>;
  key: Scalars['String'];
  last_frame?: Maybe<Scalars['String']>;
  total_frames?: Maybe<Scalars['Int']>;
};

export type StoryInput = {
  id?: Maybe<Scalars['String']>;
  last_frame?: Maybe<Scalars['String']>;
  total_frames?: Maybe<Scalars['Int']>;
};

export type StoryboxBuild = {
  __typename?: 'StoryboxBuild';
  assetTimings: Array<Maybe<KeyValuePair>>;
  assets: Array<Maybe<Entity>>;
  description?: Maybe<Scalars['String']>;
  frameId: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type StoryboxBuildInput = {
  assetTimings?: Maybe<Array<Maybe<KeyValuePairInput>>>;
  assets?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  frameId?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TextInput = {
  value?: Maybe<Scalars['String']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  body: Scalars['String'];
  code: Scalars['String'];
};


export type UploadComposable = {
  __typename?: 'UploadComposable';
  base64Image?: Maybe<Scalars['String']>;
  file_location?: Maybe<Scalars['String']>;
  liscense?: Maybe<Rights>;
  metadata?: Maybe<Array<Maybe<Metadata>>>;
  relations?: Maybe<Array<Maybe<Relation>>>;
};


export type UploadComposableMetadataArgs = {
  key?: Maybe<Array<Maybe<MetaKey>>>;
};

export enum UploadStatus {
  Creating = 'creating',
  Denied = 'denied',
  Uploaded = 'uploaded',
  Verified = 'verified',
  Waiting = 'waiting'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  family_name: Scalars['String'];
  given_name: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  preferred_username: Scalars['String'];
};


/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  __typename?: '__EnumValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

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

export type MinimalEntityFragment = { __typename?: 'Entity', id: string, object_id: string, type: string, primary_mediafile?: Maybe<string>, primary_transcode?: Maybe<string>, title: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, description: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, primary_mediafile_info?: Maybe<{ __typename?: 'MediaInfo', width: string, height: string }>, mediafiles?: Maybe<Array<Maybe<{ __typename?: 'MediaFile', mediatype?: Maybe<{ __typename?: 'MimeType', type?: Maybe<string>, mime?: Maybe<Mime>, image?: Maybe<boolean>, audio?: Maybe<boolean>, video?: Maybe<boolean>, pdf?: Maybe<boolean> }> }>>> };

export type TouchTableEntityFragment = (
  { __typename?: 'Entity', id: string, type: string, title: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, description: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, mediafiles?: Maybe<Array<Maybe<{ __typename?: 'MediaFile', filename?: Maybe<string>, original_file_location?: Maybe<string>, transcode_filename?: Maybe<string>, mimetype?: Maybe<string>, mediatype?: Maybe<{ __typename?: 'MimeType', type?: Maybe<string>, mime?: Maybe<Mime>, image?: Maybe<boolean>, audio?: Maybe<boolean>, video?: Maybe<boolean>, pdf?: Maybe<boolean> }> }>>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string>, value?: Maybe<string> }>>> }
  & PrimaryMediafileInfoFragment
);

export type FullBoxVisiterFragment = { __typename?: 'BoxVisiter', id: string, type: string, code: string, frames_seen_last_visit?: Maybe<number>, start_time?: Maybe<string>, touch_table_time?: Maybe<string>, relations?: Maybe<Array<Maybe<(
    { __typename?: 'Relation' }
    & BoxRelationFragment
  )>>>, storyboxes?: Maybe<Array<Maybe<(
    { __typename?: 'Entity' }
    & TouchTableEntityFragment
  )>>> };

export type MinimalBoxVisiterFragment = { __typename?: 'BoxVisiter', id: string, code: string, relations?: Maybe<Array<Maybe<(
    { __typename?: 'Relation' }
    & BoxRelationFragment
  )>>> };

export type FullStoryFragment = (
  { __typename?: 'Entity', relationMetadata?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, audioFile?: Maybe<string>, subtitleFile?: Maybe<string> }>>>, frames?: Maybe<Array<Maybe<(
    { __typename?: 'Entity', relationMetadata?: Maybe<Array<Maybe<(
      { __typename?: 'Relation' }
      & AssetMetadataFragment
    )>>>, assets?: Maybe<Array<Maybe<(
      { __typename?: 'Entity', collections: Array<Maybe<{ __typename?: 'Relation', key: string, value?: Maybe<string> }>> }
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

export type NestedEntityFragment = { __typename?: 'Entity', id: string, type: string, title: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, description: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, objectNumber: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, mediafiles?: Maybe<Array<Maybe<{ __typename?: 'MediaFile', _id: string, original_file_location?: Maybe<string>, transcode_filename?: Maybe<string>, filename?: Maybe<string>, mimetype?: Maybe<string>, mediatype?: Maybe<{ __typename?: 'MimeType', type?: Maybe<string>, mime?: Maybe<Mime>, image?: Maybe<boolean>, audio?: Maybe<boolean>, video?: Maybe<boolean>, pdf?: Maybe<boolean> }> }>>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string>, value?: Maybe<string> }>>> };

export type NestedEndEntityFragment = { __typename?: 'Entity', id: string, type: string, title: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, description: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, objectNumber: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, metadataCollection?: Maybe<Array<Maybe<{ __typename?: 'MetadataCollection', label: string, nested?: Maybe<boolean>, data?: Maybe<Array<Maybe<{ __typename?: 'Metadata', value?: Maybe<string>, unMappedKey?: Maybe<string>, label?: Maybe<string> }>>> }>>>, mediafiles?: Maybe<Array<Maybe<{ __typename?: 'MediaFile', _id: string, original_file_location?: Maybe<string>, transcode_filename?: Maybe<string>, filename?: Maybe<string>, mimetype?: Maybe<string>, mediatype?: Maybe<{ __typename?: 'MimeType', type?: Maybe<string>, mime?: Maybe<Mime>, image?: Maybe<boolean>, audio?: Maybe<boolean>, video?: Maybe<boolean>, pdf?: Maybe<boolean> }> }>>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string>, value?: Maybe<string> }>>> };

export type FullEntityFragment = { __typename?: 'Entity', id: string, type: string, primary_mediafile?: Maybe<string>, primary_transcode?: Maybe<string>, title: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, scopeNote: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, description: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, publicationStatus: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, objectNumber: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, metadataCollection?: Maybe<Array<Maybe<(
    { __typename?: 'MetadataCollection' }
    & MetadataCollectionFieldsFragment
  )>>>, mediafiles?: Maybe<Array<Maybe<(
    { __typename?: 'MediaFile' }
    & FullMediafileFragment
  )>>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string>, value?: Maybe<string> }>>> };

export type CreatorFragment = { __typename?: 'Entity', type: string, metadata: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string> }>>> };

export type PrimaryMediafileInfoFragment = { __typename?: 'Entity', primary_width?: Maybe<string>, primary_height?: Maybe<string>, primary_mediafile?: Maybe<string>, primary_transcode?: Maybe<string>, primary_mediafile_location?: Maybe<string> };

export type StoryEntityFragment = (
  { __typename?: 'Entity', id: string, type: string, title: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, metadata: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, mediafiles?: Maybe<Array<Maybe<{ __typename?: 'MediaFile', original_file_location?: Maybe<string>, filename?: Maybe<string>, mimetype?: Maybe<string>, transcode_filename?: Maybe<string>, mediainfo?: Maybe<{ __typename?: 'MediaInfo', width: string, height: string }>, mediatype?: Maybe<{ __typename?: 'MimeType', type?: Maybe<string>, mime?: Maybe<Mime>, image?: Maybe<boolean>, audio?: Maybe<boolean>, video?: Maybe<boolean>, pdf?: Maybe<boolean> }> }>>> }
  & PrimaryMediafileInfoFragment
);

export type FullUserFragment = { __typename?: 'User', id: string, email: string, family_name: string, given_name: string, name: string, preferred_username: string };

export type FullRelationFragment = { __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string>, value?: Maybe<string>, order?: Maybe<number> };

export type BoxRelationFragment = { __typename?: 'Relation', key: string, type: RelationType, active?: Maybe<boolean>, order?: Maybe<number>, last_frame?: Maybe<string>, total_frames?: Maybe<number>, seen_frames?: Maybe<Array<Maybe<{ __typename?: 'FrameSeen', id: string, date: number }>>> };

export type AssetMetadataFragment = { __typename?: 'Relation', key: string, label?: Maybe<string>, timestamp_start?: Maybe<number>, timestamp_end?: Maybe<number>, timestamp_zoom?: Maybe<number>, scale?: Maybe<number>, audioFile?: Maybe<string>, subtitleFile?: Maybe<string>, position?: Maybe<{ __typename?: 'Position', x?: Maybe<number>, y?: Maybe<number>, z?: Maybe<number> }> };

export type FullMediafileFragment = { __typename?: 'MediaFile', _id: string, original_file_location?: Maybe<string>, filename?: Maybe<string>, transcode_filename?: Maybe<string>, thumbnail_file_location?: Maybe<string>, primary_transcode_location?: Maybe<string>, mimetype?: Maybe<string>, mediatype?: Maybe<{ __typename?: 'MimeType', type?: Maybe<string>, mime?: Maybe<Mime>, image?: Maybe<boolean>, audio?: Maybe<boolean>, video?: Maybe<boolean>, pdf?: Maybe<boolean> }>, metadata?: Maybe<Array<Maybe<{ __typename?: 'MediaFileMetadata', key?: Maybe<string>, value?: Maybe<string> }>>> };

export type FullUploadComposableFragment = { __typename?: 'UploadComposable', file_location?: Maybe<string>, base64Image?: Maybe<string>, liscense?: Maybe<Rights>, metadata?: Maybe<Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, value?: Maybe<string> }>>> };

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


export type GetStoryByIdQuery = { __typename?: 'Query', GetStoryById?: Maybe<(
    { __typename?: 'Entity' }
    & FullStoryFragment
  )> };

export type GetEnumsByNameQueryVariables = Exact<{
  enumName: Scalars['String'];
}>;


export type GetEnumsByNameQuery = { __typename?: 'Query', __type?: Maybe<{ __typename?: '__Type', name?: Maybe<string>, enumValues?: Maybe<Array<{ __typename?: '__EnumValue', name: string }>> }> };

export type GetActiveBoxQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


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


export type AddStoryToBoxVisiterMutation = { __typename?: 'Mutation', AddStoryToBoxVisiter?: Maybe<(
    { __typename?: 'BoxVisiter' }
    & FullBoxVisiterFragment
  )> };

export type AddFrameToStoryBoxVisiterMutationVariables = Exact<{
  code: Scalars['String'];
  frameInput: FrameInput;
}>;


export type AddFrameToStoryBoxVisiterMutation = { __typename?: 'Mutation', AddFrameToStoryBoxVisiter?: Maybe<(
    { __typename?: 'BoxVisiter' }
    & FullBoxVisiterFragment
  )> };

export type AddAssetToBoxVisiterMutationVariables = Exact<{
  code: Scalars['String'];
  assetId: Scalars['String'];
  type: RelationType;
}>;


export type AddAssetToBoxVisiterMutation = { __typename?: 'Mutation', AddAssetToBoxVisiter: Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string>, order?: Maybe<number> }>> };

export type DeleteBoxVisiterBasketItemMutationVariables = Exact<{
  code: Scalars['String'];
  relationId: Scalars['String'];
}>;


export type DeleteBoxVisiterBasketItemMutation = { __typename?: 'Mutation', DeleteBoxVisiterBasketItem: Array<Maybe<(
    { __typename?: 'Relation' }
    & FullRelationFragment
  )>> };

export type AddTouchTableTimeMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type AddTouchTableTimeMutation = { __typename?: 'Mutation', AddTouchTableTime?: Maybe<(
    { __typename?: 'BoxVisiter' }
    & FullBoxVisiterFragment
  )> };

export type GetTouchTableEntityQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  searchValue: SearchFilter;
}>;


export type GetTouchTableEntityQuery = { __typename?: 'Query', Entities?: Maybe<{ __typename?: 'EntitiesResults', count?: Maybe<number>, limit?: Maybe<number>, results?: Maybe<Array<Maybe<(
      { __typename?: 'Entity' }
      & TouchTableEntityFragment
    )>>> }> };

export type RelationsAsEntitiesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type RelationsAsEntitiesQuery = { __typename?: 'Query', RelationsAsEntities?: Maybe<Array<Maybe<(
    { __typename?: 'Entity', mediafiles?: Maybe<Array<Maybe<{ __typename?: 'MediaFile', thumbnail_file_location?: Maybe<string> }>>> }
    & MinimalEntityFragment
  )>>> };

export type CreateEntityQueryVariables = Exact<{
  entityInfo: EntityInfo;
}>;


export type CreateEntityQuery = { __typename?: 'Query', CreateEntity?: Maybe<(
    { __typename?: 'Entity' }
    & MinimalEntityFragment
  )> };

export type CreateStoryboxQueryVariables = Exact<{
  storyboxInfo: StoryboxBuildInput;
}>;


export type CreateStoryboxQuery = { __typename?: 'Query', CreateStorybox?: Maybe<(
    { __typename?: 'Entity' }
    & MinimalEntityFragment
  )> };

export type LinkStoryboxQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type LinkStoryboxQuery = { __typename?: 'Query', LinkStorybox?: Maybe<(
    { __typename?: 'Entity' }
    & MinimalEntityFragment
  )> };

export type StoryboxQueryVariables = Exact<{ [key: string]: never; }>;


export type StoryboxQuery = { __typename?: 'Query', Storybox?: Maybe<{ __typename?: 'EntitiesResults', count?: Maybe<number>, results?: Maybe<Array<Maybe<{ __typename?: 'Entity', id: string, type: string, metadata: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, value?: Maybe<string>, timestamp_start?: Maybe<number>, timestamp_end?: Maybe<number>, timestamp_zoom?: Maybe<number> }>>> }>>> }> };

export type AddEntityAsRelationQueryVariables = Exact<{
  entityId: Scalars['String'];
  entityRelationId: Scalars['String'];
}>;


export type AddEntityAsRelationQuery = { __typename?: 'Query', AddEntityAsRelation?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType }>>> };

export type DeleteEntityMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteEntityMutation = { __typename?: 'Mutation', DeleteEntity?: Maybe<string> };

export type LinkFrameToVisiterQueryVariables = Exact<{
  frameId: Scalars['String'];
}>;


export type LinkFrameToVisiterQuery = { __typename?: 'Query', LinkFrameToVisiter?: Maybe<(
    { __typename?: 'BoxVisiter' }
    & MinimalBoxVisiterFragment
  )> };

export type GetvisiterOfEntityQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetvisiterOfEntityQuery = { __typename?: 'Query', GetvisiterOfEntity?: Maybe<(
    { __typename?: 'BoxVisiter' }
    & MinimalBoxVisiterFragment
  )> };

export type UpdatedScannedOfBoxvisiterMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type UpdatedScannedOfBoxvisiterMutation = { __typename?: 'Mutation', UpdatedScannedOfBoxvisiter?: Maybe<(
    { __typename?: 'BoxVisiter', ticketUsed?: Maybe<number> }
    & MinimalBoxVisiterFragment
  )> };

export type GetUploadRelationsQueryVariables = Exact<{
  searchValue: Scalars['String'];
}>;


export type GetUploadRelationsQuery = { __typename?: 'Query', GetUploadRelations?: Maybe<{ __typename?: 'EntitiesResults', count?: Maybe<number>, limit?: Maybe<number>, results?: Maybe<Array<Maybe<{ __typename?: 'Entity', id: string, type: string, metadata: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>> }>>> }> };

export type CreateTestimoniQueryVariables = Exact<{
  entityInfo: EntityInfo;
}>;


export type CreateTestimoniQuery = { __typename?: 'Query', CreateTestimoni?: Maybe<(
    { __typename?: 'Entity' }
    & FullEntityFragment
  )> };

export type LinkTestimoniToAssetQueryVariables = Exact<{
  assetId: Scalars['String'];
  testimoniId: Scalars['String'];
}>;


export type LinkTestimoniToAssetQuery = { __typename?: 'Query', LinkTestimoniToAsset?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, label?: Maybe<string>, value?: Maybe<string> }>>> };

export type BasketByCustomFrameIdQueryVariables = Exact<{
  frameId: Scalars['String'];
}>;


export type BasketByCustomFrameIdQuery = { __typename?: 'Query', BasketByCustomFrameId?: Maybe<Array<Maybe<(
    { __typename?: 'Relation' }
    & FullRelationFragment
  )>>> };

export type UploadMediafileMutationVariables = Exact<{
  media: MediaFileInput;
  file?: Maybe<Scalars['Upload']>;
  relations?: Maybe<Array<Maybe<RelationInput>> | Maybe<RelationInput>>;
  metadata?: Maybe<Array<Maybe<MetadataInput>> | Maybe<MetadataInput>>;
}>;


export type UploadMediafileMutation = { __typename?: 'Mutation', UploadMediafile?: Maybe<{ __typename?: 'MediaFile', _id: string, filename?: Maybe<string> }> };

export type GetMyUploadedAssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyUploadedAssetsQuery = { __typename?: 'Query', GetMyUploadedAssets?: Maybe<{ __typename?: 'EntitiesResults', count?: Maybe<number>, results?: Maybe<Array<Maybe<{ __typename?: 'Entity', id: string, type: string, metadata: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string> }>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', key: string, type: RelationType, value?: Maybe<string> }>>>, nonPublicMediafiles?: Maybe<Array<Maybe<(
        { __typename?: 'MediaFile' }
        & FullMediafileFragment
      )>>>, mediafiles?: Maybe<Array<Maybe<(
        { __typename?: 'MediaFile' }
        & FullMediafileFragment
      )>>> }>>> }> };

export type UploadObjectFromEntityQueryVariables = Exact<{
  entityId: Scalars['String'];
}>;


export type UploadObjectFromEntityQuery = { __typename?: 'Query', UploadObjectFromEntity?: Maybe<(
    { __typename?: 'UploadComposable' }
    & FullUploadComposableFragment
  )> };

export type UpdateEntityMutationVariables = Exact<{
  id: Scalars['String'];
  metadata: Array<Maybe<MetadataInput>> | Maybe<MetadataInput>;
  relations: Array<Maybe<RelationInput>> | Maybe<RelationInput>;
}>;


export type UpdateEntityMutation = { __typename?: 'Mutation', UpdateEntity?: Maybe<{ __typename?: 'Entity', id: string, object_id: string, metadata: Array<Maybe<{ __typename?: 'Metadata', key: MetaKey, value?: Maybe<string>, label?: Maybe<string> }>>, relations?: Maybe<Array<Maybe<{ __typename?: 'Relation', type: RelationType, key: string, value?: Maybe<string> }>>> }> };

export const MinimalEntityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"minimalEntity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"object_id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"description"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primary_mediafile"}},{"kind":"Field","name":{"kind":"Name","value":"primary_transcode"}},{"kind":"Field","name":{"kind":"Name","value":"primary_mediafile_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mediatype"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"pdf"}}]}}]}}]}}]} as unknown as DocumentNode<MinimalEntityFragment, unknown>;
export const BoxRelationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"boxRelation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Relation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"last_frame"}},{"kind":"Field","name":{"kind":"Name","value":"total_frames"}},{"kind":"Field","name":{"kind":"Name","value":"seen_frames"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<BoxRelationFragment, unknown>;
export const PrimaryMediafileInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"primaryMediafileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary_width"}},{"kind":"Field","name":{"kind":"Name","value":"primary_height"}},{"kind":"Field","name":{"kind":"Name","value":"primary_mediafile"}},{"kind":"Field","name":{"kind":"Name","value":"primary_transcode"}},{"kind":"Field","name":{"kind":"Name","value":"primary_mediafile_location"}}]}}]} as unknown as DocumentNode<PrimaryMediafileInfoFragment, unknown>;
export const TouchTableEntityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"touchTableEntity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"description"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"primaryMediafileInfo"}},{"kind":"Field","name":{"kind":"Name","value":"mediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"original_file_location"}},{"kind":"Field","name":{"kind":"Name","value":"transcode_filename"}},{"kind":"Field","name":{"kind":"Name","value":"mimetype"}},{"kind":"Field","name":{"kind":"Name","value":"mediatype"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"pdf"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<TouchTableEntityFragment, unknown>;
export const FullBoxVisiterFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fullBoxVisiter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BoxVisiter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"frames_seen_last_visit"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"touch_table_time"}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"boxRelation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"storyboxes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"touchTableEntity"}}]}}]}}]} as unknown as DocumentNode<FullBoxVisiterFragment, unknown>;
export const MinimalBoxVisiterFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"minimalBoxVisiter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BoxVisiter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"boxRelation"}}]}}]}}]} as unknown as DocumentNode<MinimalBoxVisiterFragment, unknown>;
export const StoryEntityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storyEntity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"collection"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original_file_location"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"mimetype"}},{"kind":"Field","name":{"kind":"Name","value":"transcode_filename"}},{"kind":"Field","name":{"kind":"Name","value":"mediainfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediatype"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"pdf"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"primaryMediafileInfo"}}]}}]} as unknown as DocumentNode<StoryEntityFragment, unknown>;
export const AssetMetadataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"assetMetadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Relation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp_start"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp_end"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp_zoom"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scale"}},{"kind":"Field","name":{"kind":"Name","value":"audioFile"}},{"kind":"Field","name":{"kind":"Name","value":"subtitleFile"}}]}}]} as unknown as DocumentNode<AssetMetadataFragment, unknown>;
export const FullStoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fullStory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storyEntity"}},{"kind":"Field","name":{"kind":"Name","value":"relationMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"audioFile"}},{"kind":"Field","name":{"kind":"Name","value":"subtitleFile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"frames"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storyEntity"}},{"kind":"Field","name":{"kind":"Name","value":"relationMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"assetMetadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storyEntity"}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FullStoryFragment, unknown>;
export const NestedEntityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NestedEntity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"description"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"objectNumber"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"object_number"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"original_file_location"}},{"kind":"Field","name":{"kind":"Name","value":"transcode_filename"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"mimetype"}},{"kind":"Field","name":{"kind":"Name","value":"mediatype"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"pdf"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<NestedEntityFragment, unknown>;
export const NestedEndEntityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"nestedEndEntity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"description"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"objectNumber"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"object_number"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadataCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"},{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"object_number"},{"kind":"EnumValue","value":"scopeNote"}]}},{"kind":"Argument","name":{"kind":"Name","value":"label"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"objectnummer","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"nested"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unMappedKey"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"original_file_location"}},{"kind":"Field","name":{"kind":"Name","value":"transcode_filename"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"mimetype"}},{"kind":"Field","name":{"kind":"Name","value":"mediatype"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"pdf"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<NestedEndEntityFragment, unknown>;
export const MetadataCollectionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataCollectionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"nested"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unMappedKey"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"nestedMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NestedEntity"}},{"kind":"Field","name":{"kind":"Name","value":"metadataCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"},{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"object_number"},{"kind":"EnumValue","value":"scopeNote"}]}},{"kind":"Argument","name":{"kind":"Name","value":"label"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"objectnummer","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"nested"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unMappedKey"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"nestedMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"nestedEndEntity"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<MetadataCollectionFieldsFragment, unknown>;
export const FullMediafileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fullMediafile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"original_file_location"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"transcode_filename"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail_file_location"}},{"kind":"Field","name":{"kind":"Name","value":"primary_transcode_location"}},{"kind":"Field","name":{"kind":"Name","value":"mimetype"}},{"kind":"Field","name":{"kind":"Name","value":"mediatype"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"pdf"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<FullMediafileFragment, unknown>;
export const FullEntityFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fullEntity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"scopeNote"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"scopeNote"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"description"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"publicationStatus"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"publication_status"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"objectNumber"},"name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"object_number"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadataCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"},{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"object_number"},{"kind":"EnumValue","value":"scopeNote"}]}},{"kind":"Argument","name":{"kind":"Name","value":"label"},"value":{"kind":"ListValue","values":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataCollectionFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primary_mediafile"}},{"kind":"Field","name":{"kind":"Name","value":"primary_transcode"}},{"kind":"Field","name":{"kind":"Name","value":"mediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullMediafile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<FullEntityFragment, unknown>;
export const CreatorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"creator"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"fullname"},{"kind":"EnumValue","value":"firstname"},{"kind":"EnumValue","value":"lastname"},{"kind":"EnumValue","value":"nationality"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]} as unknown as DocumentNode<CreatorFragment, unknown>;
export const FullUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fullUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"family_name"}},{"kind":"Field","name":{"kind":"Name","value":"given_name"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"preferred_username"}}]}}]} as unknown as DocumentNode<FullUserFragment, unknown>;
export const FullRelationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fullRelation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Relation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]} as unknown as DocumentNode<FullRelationFragment, unknown>;
export const FullUploadComposableFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fullUploadComposable"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadComposable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file_location"}},{"kind":"Field","name":{"kind":"Name","value":"base64Image"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"},{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"maker"},{"kind":"EnumValue","value":"periode"},{"kind":"EnumValue","value":"publication_status"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"liscense"}}]}}]} as unknown as DocumentNode<FullUploadComposableFragment, unknown>;
export const GetEntitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEntities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Entities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"minimalEntity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullRelation"}}]}}]}}]}},...MinimalEntityFragmentDoc.definitions,...FullRelationFragmentDoc.definitions]} as unknown as DocumentNode<GetEntitiesQuery, GetEntitiesQueryVariables>;
export const GetFullEntitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFullEntities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fetchPolicy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Entities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}}},{"kind":"Argument","name":{"kind":"Name","value":"fetchPolicy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fetchPolicy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullEntity"}}]}}]}}]}},...FullEntityFragmentDoc.definitions,...MetadataCollectionFieldsFragmentDoc.definitions,...NestedEntityFragmentDoc.definitions,...NestedEndEntityFragmentDoc.definitions,...FullMediafileFragmentDoc.definitions]} as unknown as DocumentNode<GetFullEntitiesQuery, GetFullEntitiesQueryVariables>;
export const GetEntityByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEntityById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Entity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullEntity"}}]}}]}},...FullEntityFragmentDoc.definitions,...MetadataCollectionFieldsFragmentDoc.definitions,...NestedEntityFragmentDoc.definitions,...NestedEndEntityFragmentDoc.definitions,...FullMediafileFragmentDoc.definitions]} as unknown as DocumentNode<GetEntityByIdQuery, GetEntityByIdQueryVariables>;
export const GetTouchTableEntityByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTouchTableEntityById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Entity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"touchTableEntity"}}]}}]}},...TouchTableEntityFragmentDoc.definitions,...PrimaryMediafileInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetTouchTableEntityByIdQuery, GetTouchTableEntityByIdQueryVariables>;
export const GetCreatorByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCreatorById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Entity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"creator"}}]}}]}},...CreatorFragmentDoc.definitions]} as unknown as DocumentNode<GetCreatorByIdQuery, GetCreatorByIdQueryVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullUser"}}]}}]}},...FullUserFragmentDoc.definitions]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const GetRelationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRelations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Relations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullRelation"}}]}}]}}]}},...FullRelationFragmentDoc.definitions]} as unknown as DocumentNode<GetRelationsQuery, GetRelationsQueryVariables>;
export const GetStoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullStory"}}]}}]}}]}},...FullStoryFragmentDoc.definitions,...StoryEntityFragmentDoc.definitions,...PrimaryMediafileInfoFragmentDoc.definitions,...AssetMetadataFragmentDoc.definitions]} as unknown as DocumentNode<GetStoriesQuery, GetStoriesQueryVariables>;
export const GetStoryByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStoryById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetStoryById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullStory"}}]}}]}},...FullStoryFragmentDoc.definitions,...StoryEntityFragmentDoc.definitions,...PrimaryMediafileInfoFragmentDoc.definitions,...AssetMetadataFragmentDoc.definitions]} as unknown as DocumentNode<GetStoryByIdQuery, GetStoryByIdQueryVariables>;
export const GetEnumsByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEnumsByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enumName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__type"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enumName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enumValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetEnumsByNameQuery, GetEnumsByNameQueryVariables>;
export const GetActiveBoxDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getActiveBox"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ActiveBox"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullStory"}}]}}]}}]}},...FullStoryFragmentDoc.definitions,...StoryEntityFragmentDoc.definitions,...PrimaryMediafileInfoFragmentDoc.definitions,...AssetMetadataFragmentDoc.definitions]} as unknown as DocumentNode<GetActiveBoxQuery, GetActiveBoxQueryVariables>;
export const GetBoxVisitersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBoxVisiters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BoxVisiters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullBoxVisiter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}}]}}]}},...FullBoxVisiterFragmentDoc.definitions,...BoxRelationFragmentDoc.definitions,...TouchTableEntityFragmentDoc.definitions,...PrimaryMediafileInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetBoxVisitersQuery, GetBoxVisitersQueryVariables>;
export const PrintBoxTicketDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"printBoxTicket"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PrintBoxTicket"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]} as unknown as DocumentNode<PrintBoxTicketQuery, PrintBoxTicketQueryVariables>;
export const GetBoxVisiterByCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBoxVisiterByCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BoxVisiterByCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullBoxVisiter"}}]}}]}},...FullBoxVisiterFragmentDoc.definitions,...BoxRelationFragmentDoc.definitions,...TouchTableEntityFragmentDoc.definitions,...PrimaryMediafileInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetBoxVisiterByCodeQuery, GetBoxVisiterByCodeQueryVariables>;
export const GetBoxVisiterRelationsByTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBoxVisiterRelationsByType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RelationType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BoxVisiterRelationsByType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"boxRelation"}}]}}]}},...BoxRelationFragmentDoc.definitions]} as unknown as DocumentNode<GetBoxVisiterRelationsByTypeQuery, GetBoxVisiterRelationsByTypeQueryVariables>;
export const CreateBoxVisiterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"createBoxVisiter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateBoxVisiter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"storyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullBoxVisiter"}}]}}]}},...FullBoxVisiterFragmentDoc.definitions,...BoxRelationFragmentDoc.definitions,...TouchTableEntityFragmentDoc.definitions,...PrimaryMediafileInfoFragmentDoc.definitions]} as unknown as DocumentNode<CreateBoxVisiterQuery, CreateBoxVisiterQueryVariables>;
export const AddStoryToBoxVisiterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addStoryToBoxVisiter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddStoryToBoxVisiter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"storyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullBoxVisiter"}}]}}]}},...FullBoxVisiterFragmentDoc.definitions,...BoxRelationFragmentDoc.definitions,...TouchTableEntityFragmentDoc.definitions,...PrimaryMediafileInfoFragmentDoc.definitions]} as unknown as DocumentNode<AddStoryToBoxVisiterMutation, AddStoryToBoxVisiterMutationVariables>;
export const AddFrameToStoryBoxVisiterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addFrameToStoryBoxVisiter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frameInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FrameInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddFrameToStoryBoxVisiter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"frameInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frameInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullBoxVisiter"}}]}}]}},...FullBoxVisiterFragmentDoc.definitions,...BoxRelationFragmentDoc.definitions,...TouchTableEntityFragmentDoc.definitions,...PrimaryMediafileInfoFragmentDoc.definitions]} as unknown as DocumentNode<AddFrameToStoryBoxVisiterMutation, AddFrameToStoryBoxVisiterMutationVariables>;
export const AddAssetToBoxVisiterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addAssetToBoxVisiter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RelationType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddAssetToBoxVisiter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"assetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]}}]} as unknown as DocumentNode<AddAssetToBoxVisiterMutation, AddAssetToBoxVisiterMutationVariables>;
export const DeleteBoxVisiterBasketItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteBoxVisiterBasketItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"relationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteBoxVisiterBasketItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"relationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"relationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullRelation"}}]}}]}},...FullRelationFragmentDoc.definitions]} as unknown as DocumentNode<DeleteBoxVisiterBasketItemMutation, DeleteBoxVisiterBasketItemMutationVariables>;
export const AddTouchTableTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTouchTableTime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddTouchTableTime"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullBoxVisiter"}}]}}]}},...FullBoxVisiterFragmentDoc.definitions,...BoxRelationFragmentDoc.definitions,...TouchTableEntityFragmentDoc.definitions,...PrimaryMediafileInfoFragmentDoc.definitions]} as unknown as DocumentNode<AddTouchTableTimeMutation, AddTouchTableTimeMutationVariables>;
export const GetTouchTableEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTouchTableEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Entities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"touchTableEntity"}}]}}]}}]}},...TouchTableEntityFragmentDoc.definitions,...PrimaryMediafileInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetTouchTableEntityQuery, GetTouchTableEntityQueryVariables>;
export const RelationsAsEntitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RelationsAsEntities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RelationsAsEntities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"minimalEntity"}},{"kind":"Field","name":{"kind":"Name","value":"mediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnail_file_location"}}]}}]}}]}},...MinimalEntityFragmentDoc.definitions]} as unknown as DocumentNode<RelationsAsEntitiesQuery, RelationsAsEntitiesQueryVariables>;
export const CreateEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CreateEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entityInfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EntityInfo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateEntity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityInfo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entityInfo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"minimalEntity"}}]}}]}},...MinimalEntityFragmentDoc.definitions]} as unknown as DocumentNode<CreateEntityQuery, CreateEntityQueryVariables>;
export const CreateStoryboxDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"createStorybox"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storyboxInfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StoryboxBuildInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateStorybox"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"storyboxInfo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storyboxInfo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"minimalEntity"}}]}}]}},...MinimalEntityFragmentDoc.definitions]} as unknown as DocumentNode<CreateStoryboxQuery, CreateStoryboxQueryVariables>;
export const LinkStoryboxDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LinkStorybox"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LinkStorybox"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"minimalEntity"}}]}}]}},...MinimalEntityFragmentDoc.definitions]} as unknown as DocumentNode<LinkStoryboxQuery, LinkStoryboxQueryVariables>;
export const StoryboxDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"storybox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Storybox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"},{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"boxCode"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp_start"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp_end"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp_zoom"}}]}}]}}]}}]}}]} as unknown as DocumentNode<StoryboxQuery, StoryboxQueryVariables>;
export const AddEntityAsRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"addEntityAsRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entityRelationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddEntityAsRelation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entityId"}}},{"kind":"Argument","name":{"kind":"Name","value":"entityRelationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entityRelationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<AddEntityAsRelationQuery, AddEntityAsRelationQueryVariables>;
export const DeleteEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteEntity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteEntityMutation, DeleteEntityMutationVariables>;
export const LinkFrameToVisiterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"linkFrameToVisiter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LinkFrameToVisiter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"frameId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frameId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"minimalBoxVisiter"}}]}}]}},...MinimalBoxVisiterFragmentDoc.definitions,...BoxRelationFragmentDoc.definitions]} as unknown as DocumentNode<LinkFrameToVisiterQuery, LinkFrameToVisiterQueryVariables>;
export const GetvisiterOfEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getvisiterOfEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetvisiterOfEntity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"minimalBoxVisiter"}}]}}]}},...MinimalBoxVisiterFragmentDoc.definitions,...BoxRelationFragmentDoc.definitions]} as unknown as DocumentNode<GetvisiterOfEntityQuery, GetvisiterOfEntityQueryVariables>;
export const UpdatedScannedOfBoxvisiterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatedScannedOfBoxvisiter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdatedScannedOfBoxvisiter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"minimalBoxVisiter"}},{"kind":"Field","name":{"kind":"Name","value":"ticketUsed"}}]}}]}},...MinimalBoxVisiterFragmentDoc.definitions,...BoxRelationFragmentDoc.definitions]} as unknown as DocumentNode<UpdatedScannedOfBoxvisiterMutation, UpdatedScannedOfBoxvisiterMutationVariables>;
export const GetUploadRelationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUploadRelations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetUploadRelations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchValue"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"},{"kind":"EnumValue","value":"fullname"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUploadRelationsQuery, GetUploadRelationsQueryVariables>;
export const CreateTestimoniDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CreateTestimoni"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entityInfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EntityInfo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateTestimoni"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityInfo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entityInfo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullEntity"}}]}}]}},...FullEntityFragmentDoc.definitions,...MetadataCollectionFieldsFragmentDoc.definitions,...NestedEntityFragmentDoc.definitions,...NestedEndEntityFragmentDoc.definitions,...FullMediafileFragmentDoc.definitions]} as unknown as DocumentNode<CreateTestimoniQuery, CreateTestimoniQueryVariables>;
export const LinkTestimoniToAssetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LinkTestimoniToAsset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testimoniId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LinkTestimoniToAsset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"assetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"testimoniId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testimoniId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<LinkTestimoniToAssetQuery, LinkTestimoniToAssetQueryVariables>;
export const BasketByCustomFrameIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BasketByCustomFrameId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BasketByCustomFrameId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"frameId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frameId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullRelation"}}]}}]}},...FullRelationFragmentDoc.definitions]} as unknown as DocumentNode<BasketByCustomFrameIdQuery, BasketByCustomFrameIdQueryVariables>;
export const UploadMediafileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadMediafile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"media"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MediaFileInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"relations"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RelationInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UploadMediafile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"media"},"value":{"kind":"Variable","name":{"kind":"Name","value":"media"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}},{"kind":"Argument","name":{"kind":"Name","value":"relations"},"value":{"kind":"Variable","name":{"kind":"Name","value":"relations"}}},{"kind":"Argument","name":{"kind":"Name","value":"metadata"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]} as unknown as DocumentNode<UploadMediafileMutation, UploadMediafileMutationVariables>;
export const GetMyUploadedAssetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMyUploadedAssets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetMyUploadedAssets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"},{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"periode"},{"kind":"EnumValue","value":"maker"},{"kind":"EnumValue","value":"publication_status"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nonPublicMediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullMediafile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediafiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullMediafile"}}]}}]}}]}}]}},...FullMediafileFragmentDoc.definitions]} as unknown as DocumentNode<GetMyUploadedAssetsQuery, GetMyUploadedAssetsQueryVariables>;
export const UploadObjectFromEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"uploadObjectFromEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UploadObjectFromEntity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fullUploadComposable"}}]}}]}},...FullUploadComposableFragmentDoc.definitions]} as unknown as DocumentNode<UploadObjectFromEntityQuery, UploadObjectFromEntityQueryVariables>;
export const UpdateEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"relations"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateEntity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"metadata"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}}},{"kind":"Argument","name":{"kind":"Name","value":"relations"},"value":{"kind":"Variable","name":{"kind":"Name","value":"relations"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"object_id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"title"},{"kind":"EnumValue","value":"description"},{"kind":"EnumValue","value":"object_number"},{"kind":"EnumValue","value":"publication_status"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateEntityMutation, UpdateEntityMutationVariables>;