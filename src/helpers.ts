import { NO_IMAGE_PATH, PublicationStatus } from './composables/constants';
import { Entity, MediaFile, Metadata, MetaKey, MimeType, Publication } from './queries';

type WeightedArrayConfig = {
  probability: number | "*";
};

type WeightedArrayConfigForArray<T> = {
  value: T;
  probability: number | "*";
};

export const reloadMediaAfterModalClose = (playerId: string) => {
  const player = document.getElementById(playerId) as HTMLMediaElement;
  if (player) {
    player.load();
  }
};

export const randomizer = <T extends string>(
  input: Record<T, WeightedArrayConfig>
): T | undefined => {
  let pickedValue: T | undefined = undefined;
  let i,
    threshold = 0;
  const randomNr = Math.random();

  const values: WeightedArrayConfigForArray<T>[] = [];
  Object.keys(input).forEach((key) => {
    values.push({
      value: key as T,
      probability: input[key as T].probability,
    });
  });

  for (i = 0;i < values.length;i++) {
    if (values[i].probability === "*") {
      continue;
    }

    threshold += values[i].probability as number;
    if (threshold > randomNr) {
      pickedValue = values[i].value;
      break;
    }

    if (!pickedValue) {
      //nothing found based on probability value, so pick element marked with wildcard
      pickedValue = values.filter(
        (value: WeightedArrayConfigForArray<T>) => value.probability === "*"
      )[0].value;
    }
  }

  return pickedValue;
};

export const getMetadataOfTypeFromEntity = (_entity: Entity, _key: MetaKey) => {
  let foundMetadata: undefined | Metadata = undefined
  if (_entity && _entity.metadata && _entity.metadata.length >= 0) {
    foundMetadata = _entity.metadata.find(data => data?.key === _key) as Metadata | undefined
  }
  return foundMetadata
}




export const getFirstValueOfPropertyFromEntity = (_entity: Entity, _property: `title` | `description`) => {
  let foundMetadata: undefined | Metadata = undefined
  if (_entity && _property in _entity) {
    const prop = _entity[_property as keyof Entity] as Array<Metadata>
    if (prop[0]) {
      foundMetadata = prop[0] as Metadata
    }
  }
  return foundMetadata
}

export const getFirstMediafileWithFilelocationOfEntity = (_entity: Entity): Promise<null | MediaFile> => {
  return new Promise((resolve, reject) => {
    if (_entity && _entity.mediafiles) {
      for (const media of _entity.mediafiles) {
        if (media?.original_file_location) resolve(media)
      }
    }
  })
}

export const getMediaTypeByfilename = (_entity: Entity, _filename: string | undefined): Promise<MimeType | null> => {
  return new Promise((resolve, reject) => {
    if (_entity.mediafiles && _filename != undefined) {
      const found = _entity.mediafiles.find(_media => _media?.filename && _media.filename === _filename)
      if (found != undefined) {
        found.mediatype ? resolve(found.mediatype) : null
        found.mimetype ? resolve({ type: found.mimetype } as MimeType) : null
      }
    }
    resolve(null)
  })
}

export const getUrlParamValue = (_searchParam: string) => {
  const urlParams = window.location.search;
  const params = new URLSearchParams(urlParams);
  return params.get(_searchParam)
};

export const getFilename = (_mediafile: MediaFile | null) => {
  let filename: null | string = null
  if (_mediafile !== null) {
    if (_mediafile.filename) filename = _mediafile.filename
    if (_mediafile.transcode_filename) filename = _mediafile.transcode_filename
  } else filename = NO_IMAGE_PATH

  return filename
}

export const entityIsPublic = (_entity: Entity) => {
  const statusses = []
  if (_entity && _entity.publicationStatus && _entity.publicationStatus.length >= 1) {
    for (const status of _entity.publicationStatus) {
      if (status) {
        if (status.value === PublicationStatus.public) statusses.push(true)
        else if ((status.value === PublicationStatus.private || (status.value === PublicationStatus.validate))) {
          statusses.push(false)
        } else {
          console.log(`STATUS FROM ENTITY WITH ID`, _entity.id, status);
          statusses.push(false)
        }
      }
    }
  } else statusses.push(true) // TMP: not every asset has a publication status
  return statusses.some(status => status === true)
}