import { Publication, Rights } from '@/queries';

export const License: Record<Rights, string> = {
  [Rights.Cc0]: "CC0 1.0",
  [Rights.Undetermined]: "To be determined",
}

export const PublicationStatus: Record<Publication, string> = {
  [Publication.Public]: "publiek",
  [Publication.Private]: "niet-publiek",
  [Publication.Validate]: "te valideren",
}

export const getPublicationKeyFromValue = (publication_status: string) => {
  return new Promise((resolve, reject) => {
    for (const key of Object.values(Publication)) {
      if (publication_status === PublicationStatus[key]) {
        resolve(key)
      }
    }
    resolve(Publication.Private)
  })
}