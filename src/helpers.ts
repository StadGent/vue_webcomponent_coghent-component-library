import { Entity, Metadata, MetaKey } from './queries';

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
