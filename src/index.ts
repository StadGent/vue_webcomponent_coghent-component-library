import "./index.css";

import {
  GetEntitiesDocument,
  EntitiesResults,
  GetFullEntitiesDocument,
  GetEntityByIdDocument,
  GetFullEntitiesQuery,
  GetEntitiesQuery,
  GetEntitiesQueryVariables,
  GetFullEntitiesQueryVariables,
  GetMeQuery,
  GetMeDocument,
  User,
  FullRelationFragment,
  GetRelationsDocument,
  RelationsResults,
  GetStoriesDocument,
  GetStoryByIdDocument,
  GetEnumsByNameDocument,
  GetActiveBoxDocument,
  GetBoxVisitersDocument,
  GetCreatorByIdDocument,
  GetTouchTableEntityDocument,
  GetTouchTableEntityByIdDocument,
  AddAssetToBoxVisiterDocument,
  GetBoxVisiterRelationsByTypeDocument,
  DeleteBoxVisiterBasketItemDocument,
  PrintBoxTicketDocument,
  FrameInput,
  StoryInput,
  BoxVisiter,
  Entity,
  RelationType,
  Relation,
  RelationsAsEntitiesDocument,
  StoryboxBuild,
  KeyValuePair,
  CreateStoryboxDocument,
  StoryboxDocument,
  StoryboxBuildInput,
  KeyValuePairInput,
  AddEntityAsRelationDocument,
  LinkStoryboxDocument,
  DeleteEntityDocument,
  LinkFrameToVisiterDocument,
  GetvisiterOfEntityDocument,
  UpdatedScannedOfBoxvisiterDocument,
  UploadStatus,
  Rights,
  GetUploadRelationsDocument,
  BasketByCustomFrameIdDocument,
  UploadMediafileDocument,
  Publication,
  AddTouchTableTimeDocument,
  GetMyUploadedAssetsDocument,
  UploadObjectFromEntityDocument,
  UpdateEntityDocument,
  CreateTestimonyDocument,
  EntityInfo,
  EntityTypes,
  GetTestimoniesOfUserDocument,
  UserAction,
} from "./queries";
import CircleLoader from "./components/CircleLoader.vue";
import Badge from "./components/Badge.vue";
import BaseButton from "./components/BaseButton.vue";
import BaseDropDown from "./components/BaseDropDown.vue";
import BaseSearch from "./components/BaseSearch.vue";
import BaseIcon from "./components/BaseIcon.vue";
import BaseInput from "./components/BaseInput.vue";
import FilterTag from "./components/FilterTag.vue";
import LanguageSelector from "./components/LanguageSelector.vue";
import CardComponent from "./components/CardComponent.vue";
import TheCarousel from "./components/TheCarousel.vue";
import BaseModal from "./components/BaseModal.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import ViewerToolbar from "./components/ViewerToolbar.vue";
import IIIFViewer from "./components/IIIFViewer.vue";
import CopyrightTab from "./components/CopyrightTab.vue";
import LazyLoadImage from "./components/LazyLoadImage.vue";
import BaseMetaData from "./components/BaseMetaData.vue";
import BaseMetaDataTab from "./components/BaseMetaDataTab.vue";
import BoxVisitCode from "./components/BoxVisitCode.vue";
import TheMasonry from "./components/TheMasonry.vue";
import BaseOverlay from "./components/BaseOverlay.vue";
import SpeechBubble from "./components/SpeechBubble.vue";
import StepProgress from "./components/StepProgress.vue";
import MediaModal from "./components/MediaModal.vue";
import { useMediaModal } from "./composables/useMediaModal";
import type testimonyCard from "@/components/SpeechBubble.vue";
import { ModalState, ImageSource } from "./types";
import {
  boxVisiter,
  useBoxVisiter,
  StorySelected,
  UseBoxVisiter,
  startAsset,
  selectedStory,
  historyAssets,
} from "./composables/useBoxVisiter";
import { useIIIF } from "./composables/useIIIF";
import {
  MIMETYPES,
  VideoMIME,
  AudioMIME,
  ImageMIME,
} from "./composables/mimetype";
import { getFileNameByMimeType } from "./composables/mimeTypeHelper";
import {
  useStorybox,
  StoryBoxType,
  StoryBoxState,
} from "@/composables/useStoryBox";
import {
  entityIsPublic,
  getFilename,
  getFirstMediafileWithFilelocationOfEntity,
  getFirstValueOfPropertyFromEntity,
  getMediaTypeByfilename,
  getMetadataOfTypeFromEntity,
  getUrlParamValue,
} from "./helpers";
import useUpload, {
  currentUploadStep,
  LoadingState,
  uploadLoadingState,
  uploadState,
} from "./composables/useUpload";
import {
  PublicationStatus,
  License,
  NO_IMAGE_PATH,
  getPublicationKeyFromValue,
} from "./composables/constants";

export {
  getPublicationKeyFromValue,
  UserAction,
  GetTestimoniesOfUserDocument,
  entityIsPublic,
  getFilename,
  UpdateEntityDocument,
  LoadingState,
  uploadLoadingState,
  NO_IMAGE_PATH,
  getUrlParamValue,
  EntityInfo,
  EntityTypes,
  CreateTestimonyDocument,
  UploadObjectFromEntityDocument,
  PublicationStatus,
  License,
  GetMyUploadedAssetsDocument,
  AddTouchTableTimeDocument,
  Publication,
  UploadMediafileDocument,
  GetUploadRelationsDocument,
  StepProgress,
  currentUploadStep,
  uploadState,
  useUpload,
  UploadStatus,
  BasketByCustomFrameIdDocument,
  Rights,
  UpdatedScannedOfBoxvisiterDocument,
  getMediaTypeByfilename,
  GetvisiterOfEntityDocument,
  LinkFrameToVisiterDocument,
  BaseDropDown,
  DeleteEntityDocument,
  getFirstMediafileWithFilelocationOfEntity,
  getFirstValueOfPropertyFromEntity,
  getMetadataOfTypeFromEntity,
  LinkStoryboxDocument,
  AddEntityAsRelationDocument,
  useStorybox,
  StoryBoxType,
  StoryBoxState,
  StoryboxDocument,
  CreateStoryboxDocument,
  KeyValuePair,
  KeyValuePairInput,
  StoryboxBuild,
  StoryboxBuildInput,
  CircleLoader,
  Badge,
  BoxVisitCode,
  ImageMIME,
  AudioMIME,
  VideoMIME,
  MIMETYPES,
  useIIIF,
  PrintBoxTicketDocument,
  getFileNameByMimeType,
  Relation,
  RelationType,
  StorySelected,
  selectedStory,
  Entity,
  TheMasonry,
  BaseOverlay,
  SpeechBubble,
  testimonyCard,
  MediaModal,
  useMediaModal,
  DeleteBoxVisiterBasketItemDocument,
  GetBoxVisiterRelationsByTypeDocument,
  AddAssetToBoxVisiterDocument,
  VideoPlayer,
  FrameInput,
  StoryInput,
  BoxVisiter,
  useBoxVisiter,
  UseBoxVisiter,
  boxVisiter,
  startAsset,
  historyAssets,
  GetStoryByIdDocument,
  GetActiveBoxDocument,
  GetBoxVisitersDocument,
  GetEntitiesDocument,
  GetStoriesDocument,
  GetEnumsByNameDocument,
  EntitiesResults,
  GetFullEntitiesDocument,
  GetEntityByIdDocument,
  GetCreatorByIdDocument,
  GetTouchTableEntityByIdDocument,
  GetTouchTableEntityDocument,
  BaseButton,
  BaseSearch,
  BaseIcon,
  BaseInput,
  BaseModal,
  BaseMetaData,
  BaseMetaDataTab,
  CardComponent,
  CopyrightTab,
  FilterTag,
  LanguageSelector,
  GetFullEntitiesQuery,
  GetFullEntitiesQueryVariables,
  TheCarousel,
  ViewerToolbar,
  IIIFViewer,
  GetMeQuery,
  GetMeDocument,
  User,
  FullRelationFragment,
  GetRelationsDocument,
  RelationsResults,
  GetEntitiesQuery,
  GetEntitiesQueryVariables,
  LazyLoadImage,
  ModalState,
  ImageSource,
  RelationsAsEntitiesDocument,
};
