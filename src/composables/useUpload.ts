import { Entity, GetMyUploadedAssetsDocument, MediaFile, Metadata, MetadataInput, MetaKey, Publication, Relation, RelationInput, RelationType, Rights, UploadMediafileDocument, UploadStatus, UploadObjectFromEntityDocument, UploadComposable, UpdateEntityDocument, UserAction } from '@/queries'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable'
import { reactive, ref } from 'vue'
import { getMetadataOfTypeFromEntity } from '@/helpers'
import { getPublicationKeyFromValue, License, NO_IMAGE_PATH, PublicationStatus } from './constants'

export type UploadState = {
  step: number,
  file: any | null,
  base64Image: string | null,
  metadata: Array<Metadata>,
  relations: Array<Relation>,
  uploader: string | null,
  liscense: string,
  status: UploadStatus | null
  action: UserAction | null
}

export type UploadLoadingState = {
  actionValues: LoadingState
  upload: LoadingState
  update: LoadingState
}

export type AssetState = 'created' | 'updated' | 'deleted'

export type AssetStateObject = {
  action: UserAction
  publication: Publication
}

const definedAssetStates = {
  created: {
    action: UserAction.Created,
    publication: Publication.Validate
  },
  updated: {
    action: UserAction.Updated,
    publication: Publication.Validate
  },
  deleted: {
    action: UserAction.Deleted,
    publication: Publication.Validate
  },
}

export type LoadingState = 'ready' | 'loading' | 'loaded' | 'error'

export const currentUploadStep = ref<number>(0)

const USER_MEDIAFILE_NAME_PREFIX = 'user-uploaded-'

const initUploadState = {
  step: currentUploadStep.value,
  file: null,
  base64Image: null,
  metadata: [],
  relations: [],
  uploader: null,
  liscense: License["cc0"],
  status: null,
  action: null
}
export const uploadLoadingState = reactive<UploadLoadingState>({
  actionValues: "ready",
  upload: "ready",
  update: "ready",
})

export let uploadState = reactive<UploadState>(initUploadState)

const useUpload = () => {
  const newInit = (_uploader: string | null) => {
    uploadState.relations = []
    uploadState.metadata = []
    uploadState.file = null
    uploadState.base64Image = null
    uploadState.liscense = License["cc0"]
    currentUploadStep.value = 0
    uploadState.step = currentUploadStep.value
    uploadState.action = null

    nextStep()
    uploadState.uploader = _uploader
    uploadState.status = UploadStatus.Creating
  }

  const setUploadState = (_upload: UploadComposable) => {
    console.log(`setUploadState`, _upload);
    uploadState.relations = _upload.relations as Array<Relation>
    uploadState.metadata = _upload.metadata as Array<Metadata>
    uploadState.file = _upload.file_location
    uploadState.base64Image = _upload.base64Image!
    uploadState.liscense = _upload.liscense!
    uploadState.action = _upload.action!
  }

  const setStep = (_step: number) => {
    currentUploadStep.value = _step
    uploadState.step = currentUploadStep.value
  }

  const nextStep = () => {
    currentUploadStep.value++
    uploadState.step = currentUploadStep.value
    console.log(`CL | uploadState`, uploadState);
  }

  const previousStep = () => {
    if (currentUploadStep.value === 2 && uploadState.file !== null) {
      uploadState.step = currentUploadStep.value
    } else {
      currentUploadStep.value--
      uploadState.step = currentUploadStep.value
    }
  }

  const setCreator = (_creator: Rights) => {
    uploadState.liscense = License[_creator]
  }

  const setStatus = (_status: UploadStatus) => {
    uploadState.status = _status
  }

  const rightIsSet = (_right: Rights) => {
    console.log(`_right`, _right, uploadState.liscense, License[_right] === uploadState.liscense);
    return License[_right] === uploadState.liscense
  }

  const setBase64Image = (_base64String: string | null) => {
    _base64String === null ? uploadState.base64Image = NO_IMAGE_PATH : uploadState.base64Image = _base64String
  }

  const setFile = (_file: any) => {
    uploadState.file = _file
  }

  const getMediafiles = async (_entity: Entity) => {
    const mediafiles = []
    const status = getMetadataOfTypeFromEntity(_entity, MetaKey.PublicationStatus)
    if (status !== undefined) {
      let activeKey = await getPublicationKeyFromValue(status.value!)
      switch (activeKey) {
        // case Publication.Public:
        //   _entity.mediafiles ? mediafiles.push(..._entity.mediafiles) : null
        //   break;
        // case Publication.Private || Publication.Validate:
        //   _entity.nonPublicMediafiles ? mediafiles.push(..._entity.nonPublicMediafiles) : null
        //   break;
        default:
          _entity.mediafiles ? mediafiles.push(..._entity.mediafiles) : null
          _entity.nonPublicMediafiles ? mediafiles.push(..._entity.nonPublicMediafiles) : null
          break;
      }
    }
    return mediafiles
  }

  const getMediafileLink = (_mediafiles: Array<MediaFile>) => {
    let mediafileLink = NO_IMAGE_PATH
    if (_mediafiles.length >= 1) {
      if (_mediafiles[0].primary_transcode_location) {
        mediafileLink = _mediafiles[0].primary_transcode_location
      } else if (_mediafiles[0].original_file_location)
        mediafileLink = _mediafiles[0].original_file_location
    }
    return mediafileLink
  }

  const getRelationsForUpload = (_relations: Array<Relation>) => {
    const relations = []
    for (const relation of _relations) {
      relations.push({
        key: relation.key,
        type: RelationType.Components,
        value: relation.value,
      } as RelationInput)
    }
    return relations
  }

  const getMetadataForUpload = (_metadata: Array<Metadata>, _publication: Publication, _action: UserAction) => {
    const metadata = []
    for (const _meta of uploadState.metadata) {
      metadata.push({
        key: _meta.key,
        value: _meta.key === MetaKey.Title ? `${USER_MEDIAFILE_NAME_PREFIX}${_meta.value}` : _meta.value,
        label: _meta.value,
      } as MetadataInput)
    }
    metadata.push({
      key: MetaKey.UserAction,
      value: _action
    } as MetadataInput)
    metadata.push({
      key: MetaKey.PublicationStatus,
      value: PublicationStatus[_publication]
    } as MetadataInput)
    return metadata
  }

  const upload = async (_client: ApolloClient<NormalizedCacheObject>) => {
    uploadLoadingState.upload = "loading"
    const { mutate } = provideApolloClient(_client)(() => useMutation(UploadMediafileDocument));

    const nonPublic = {
      key: MetaKey.PublicationStatus,
      value: PublicationStatus[Publication["Private"]]
    } as MetadataInput

    const right = {
      key: MetaKey.Rights,
      value: uploadState.liscense
    } as MetadataInput


    const res = await mutate({
      media: {
        filename: uploadState.file.upload.filename,
        metadata: [nonPublic, right]
      },
      file: uploadState.file,
      relations: getRelationsForUpload(uploadState.relations) as Array<RelationInput>,
      metadata: getMetadataForUpload(uploadState.metadata, Publication.Validate, UserAction.Created) as Array<MetadataInput>,
    });
    uploadLoadingState.upload = "loaded"

    return res ? res?.data?.UploadMediafile : null
  }

  const getAllUploads = async (_client: ApolloClient<NormalizedCacheObject>) => {
    const { fetchMore } = provideApolloClient(_client)(() =>
      useQuery(GetMyUploadedAssetsDocument, {}, { fetchPolicy: "network-only" })
    );
    const result = await fetchMore({});

    return result ? result?.data.GetMyUploadedAssets : null
  }

  const stripUserUploadPrefix = (_title: string) => {
    let stripped = _title
    if (_title.includes(USER_MEDIAFILE_NAME_PREFIX)) {
      stripped = _title.replace(USER_MEDIAFILE_NAME_PREFIX, "")
    }
    return stripped
  }

  const entityToUploadComposable = async (_entityId: string | null, _client: ApolloClient<NormalizedCacheObject>) => {
    uploadLoadingState.actionValues = "loading"
    let uploadComposable = null
    if (_entityId) {
      const { fetchMore } = provideApolloClient(_client)(() =>
        useQuery(UploadObjectFromEntityDocument, { entityId: _entityId }, { fetchPolicy: "network-only" })
      );
      const result = await fetchMore({ variables: { entityId: _entityId } });
      result ? uploadComposable = result.data.UploadObjectFromEntity : null
    }
    uploadLoadingState.actionValues = "loaded"
    setUploadState(uploadComposable as UploadComposable)
    return uploadComposable
  }

  const getAssetStateObject = (_state: AssetState): Promise<AssetStateObject> => {
    return new Promise((resolve, reject) => {
      for (const key in definedAssetStates) {
        if (_state == key) resolve(definedAssetStates[key])
      }
      resolve(definedAssetStates.updated)
    })
  }

  const updateAsset = async (_id: string, _assetState: AssetState, _client: ApolloClient<NormalizedCacheObject>) => {
    uploadLoadingState.update = "loading"
    const assetState = await getAssetStateObject(_assetState)
    console.log(`assetstate`, assetState);
    const { mutate } = provideApolloClient(_client)(() => useMutation(UpdateEntityDocument));
    const updated = await mutate({
      id: _id,
      metadata: getMetadataForUpload(uploadState.metadata, assetState.publication, assetState.action) as Array<MetadataInput>,
      relations: getRelationsForUpload(uploadState.relations) as Array<RelationInput>,
    })
    uploadLoadingState.update = "loaded"
    return updated ? updated?.data?.UpdateEntity : null
  }

  const getAction = () => {
    return uploadState.action
  }

  const GetUploadsByStatus = () => { }

  return {
    newInit,
    setUploadState,
    nextStep,
    setStep,
    previousStep,
    setCreator,
    setStatus,
    rightIsSet,
    setBase64Image,
    setFile,
    upload,
    getAllUploads,
    stripUserUploadPrefix,
    getMediafiles,
    getMediafileLink,
    entityToUploadComposable,
    updateAsset,
    getAction,
  }
}
export default useUpload