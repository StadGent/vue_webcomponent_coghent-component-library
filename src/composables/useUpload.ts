import { Entity, GetMyUploadedAssetsDocument, MediaFile, Metadata, MetadataInput, MetaKey, Publication, Relation, RelationInput, RelationType, Rights, UploadMediafileDocument, UploadStatus, UploadObjectFromEntityDocument, UploadComposable } from '@/queries'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable'
import { reactive, ref } from 'vue'
import { getMetadataOfTypeFromEntity } from '..'
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
}

export type UploadLoadingState = {
  actionValues: LoadingState
  upload: LoadingState
  update: LoadingState
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
  status: null
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
        case Publication.Public:
          _entity.mediafiles ? mediafiles.push(..._entity.mediafiles) : null
          break;
        case Publication.Private || Publication.Validate:
          _entity.nonPublicMediafiles ? mediafiles.push(..._entity.nonPublicMediafiles) : null
          break;
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

  const getRelationsForUpload = () => {
    const relations = []
    for (const relation of uploadState.relations) {
      relations.push({
        key: relation.key,
        type: RelationType.Components,
        label: relation.value,
      } as RelationInput)
    }
    return relations
  }

  const getMetadataForUpload = () => {
    const metadata = []
    for (const _meta of uploadState.metadata) {
      metadata.push({
        key: _meta.key,
        value: _meta.key === MetaKey.Title ? `${USER_MEDIAFILE_NAME_PREFIX}${_meta.value}` : _meta.value,
        label: _meta.value,
      } as MetadataInput)
    }
    metadata.push({
      key: MetaKey.PublicationStatus,
      value: PublicationStatus[Publication["Validate"]]
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

    console.log(`uploadstate, `, uploadState)

    const res = await mutate({
      media: {
        filename: uploadState.file.upload.filename,
        metadata: [nonPublic, right]
      },
      file: uploadState.file,
      relations: getRelationsForUpload() as Array<RelationInput>,
      metadata: getMetadataForUpload() as Array<MetadataInput>,
    });

    console.log(`result of upload`, res?.data?.UploadMediafile)
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

  const updateAsset = async () => {
    uploadLoadingState.update = "loading"
    uploadLoadingState.update = "loaded"

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
  }
}
export default useUpload