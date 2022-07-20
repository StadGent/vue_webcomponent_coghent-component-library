import { Metadata, Relation, UploadCreation, UploadStatus } from '@/queries'
import { reactive, ref } from 'vue'


export type UploadState = {
  step: number,
  file: string | null
  metadata: Array<Metadata>,
  relations: Array<Relation>,
  uploader: string | null,
  creator: UploadCreation
  status: UploadStatus | null
}

export let currentUploadStep = ref<number>(0)


const initUploadState = {
  step: currentUploadStep.value,
  file: null,
  metadata: [],
  relations: [],
  uploader: null,
  creator: UploadCreation.Cc0,
  status: null
}

export let uploadState = reactive<UploadState>(initUploadState)
const useUpload = () => {

  const newInit = (_uploader: string | null) => {
    uploadState = initUploadState
    currentUploadStep.value = 0
    nextStep()
    uploadState.uploader = _uploader
    uploadState.status = UploadStatus.Creating
  }

  const nextStep = () => {
    currentUploadStep.value++
    uploadState.step = currentUploadStep.value
  }

  const previousStep = () => {
    currentUploadStep.value--
    uploadState.step = currentUploadStep.value
  }

  const setCreator = (_creator: UploadCreation) => {
    uploadState.creator = _creator
  }

  const setStatus = (_status: UploadStatus) => {
    uploadState.status = _status
  }

  const upload = () => { }
  const getAllUploads = () => { }
  const GetUploadsByStatus = () => { }

  return {
    newInit,
    nextStep,
    previousStep,
    setCreator,
    setStatus,
  }
}
export default useUpload