import { GetMyUploadedAssetsDocument, Metadata, MetadataInput, MetaKey, Publication, Relation, RelationInput, RelationType, Rights, UploadMediafileDocument, UploadStatus } from '@/queries'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable'
import { reactive, ref } from 'vue'
import { License, PublicationStatus } from './constants'
import { StoryBoxState } from './useStoryBox'

export type UploadState = {
  step: number,
  file: any | null
  metadata: Array<Metadata>,
  relations: Array<Relation>,
  uploader: string | null,
  liscense: string,
  status: UploadStatus | null
}

export let currentUploadStep = ref<number>(0)
const USER_MEDIAFILE_NAEM_PREFIX = 'user-uploaded-'


const initUploadState = {
  step: currentUploadStep.value,
  file: null,
  metadata: [],
  relations: [],
  uploader: null,
  liscense: License["cc0"],
  status: null
}

export let uploadState = reactive<UploadState>(initUploadState)
const useUpload = () => {

  const newInit = (_uploader: string | null) => {
    uploadState.relations = []
    uploadState.metadata = []
    uploadState.file = null
    uploadState.liscense = License["cc0"]
    currentUploadStep.value = 0
    uploadState.step = currentUploadStep.value

    nextStep()
    uploadState.uploader = _uploader
    uploadState.status = UploadStatus.Creating
  }

  const nextStep = () => {
    currentUploadStep.value++
    uploadState.step = currentUploadStep.value
    console.log(`uploadstate`, uploadState)
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
    return License[_right] === uploadState.liscense
  }

  const getRelationsForUpload = () => {
    const relations = []
    for (const relation of uploadState.relations) {
      relations.push({
        key: relation.key,
        type: RelationType.Components
      } as RelationInput)
    }
    return relations
  }

  const getMetadataForUpload = () => {
    const metadata = []
    for (const _meta of uploadState.metadata) {
      metadata.push({
        key: _meta.key,
        value: _meta.key === MetaKey.Title ? `${USER_MEDIAFILE_NAEM_PREFIX}${_meta.value}` : _meta.value,
      } as MetadataInput)
    }
    return metadata
  }

  const upload = async (_client: ApolloClient<NormalizedCacheObject>) => {
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

    return res ? res?.data?.UploadMediafile : null

  }
  const getAllUploads = async (_client: ApolloClient<NormalizedCacheObject>) => {
    const { fetchMore } = provideApolloClient(_client)(() =>
      useQuery(GetMyUploadedAssetsDocument, {}, { fetchPolicy: "network-only" })
    );
    const result = await fetchMore({});

    return result ? result?.data.GetMyUploadedAssets : null
  }
  const GetUploadsByStatus = () => { }

  return {
    newInit,
    nextStep,
    previousStep,
    setCreator,
    setStatus,
    rightIsSet,
    upload,
    getAllUploads,
  }
}
export default useUpload