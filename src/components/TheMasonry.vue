<template>
  <div class="w-full">
    <div class="mb-1.5">
      <span v-show="entities.count" class="font-light"
        >Aantal resultaten:<strong class="font-light ml-1">{{
          entities.count
        }}</strong></span
      >
    </div>
    <div
      v-if="entities.count !== 0"
      :class="['masonry mx-5 sm:mx-0', { big: !small }]"
    >
      <div v-for="(tile, key) in masonryTiles" :key="key" class="card">
        <div
          id="card-content"
          class="card-content"
          :class="{
            'grid grid-cols-2':
              (tile.type === 'TwoImages') | (tile.type === 'FourImages'),
          }"
        >
          <div
            v-for="(entity, key2) in tile.mediafiles"
            :key="key2"
            class="relative group block bg-background-medium"
          >
            <slot name="tile" v-bind="{ entity, tile, small }"> </slot>
            <LazyLoadImage
              :url="getImageUrl(entity, tile.type)"
              :width="
                entity.primary_mediafile_info
                  ? entity.primary_mediafile_info.width
                  : undefined
              "
              :height="
                entity.primary_mediafile_info
                  ? entity.primary_mediafile_info.height
                  : undefined
              "
              :fall-back-url="getFallBackImageUrl(entity, tile.type)"
              :noImageUrl="
                entity.mediafiles &&
                entity.mediafiles.length &&
                entity.mediafiles[0].mediatype.audio
                  ? audioUrl
                  : noImageUrl
              "
              extra-class="h-full object-contain"
              @loaded="rendered"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="entities.count === 0">
      <p v-show="!loading" class="text-center">
        Zoekopdracht gaf geen resultaten
      </p>
    </div>
    <div class="flex justify-center">
      <base-button
        v-show="!loading && entities.count !== 0 && !endOfData && showLoadMore"
        text="Meer laden"
        :on-click="loadMore"
        custom-style="ghost-black"
        :icon-shown="false"
        class="px-2 m-4 text-center"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";
import BaseButton from "./BaseButton.vue";
import LazyLoadImage from "./LazyLoadImage.vue";
import { randomizer } from "../helpers";
import { Entity } from "@/queries";
import { useIIIF } from "../composables/useIIIF";

type MasonryImage = "placeholder" | Entity;

type MasonryTileConfig = {
  SingleImage: {
    mediafiles: [MasonryImage];
    probability: number | "*";
  };
  TwoImages: {
    mediafiles: [MasonryImage, MasonryImage];
    probability: number | "*";
  };
  FourImages: {
    mediafiles: [MasonryImage, MasonryImage, MasonryImage, MasonryImage];
    probability: number | "*";
  };
};

type BaseTile = {
  type: keyof MasonryTileConfig;
  mediafiles: MasonryImage[];
};

export default defineComponent({
  name: "TheMasonry",

  components: {
    BaseButton,
    LazyLoadImage,
  },
  props: {
    entities: {
      type: Object, // Might need to change for CTA
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
    itemsEachLoad: {
      type: Number,
      default: 50,
      required: false,
    },
    endOfData: {
      type: Boolean,
      default: false,
      required: false,
    },
    generateUrl: {
      type: Function,
      required: true,
    },
    showLoadMore: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: ["loadMore"],
  setup: (props, { emit }) => {
    const masonryTiles = ref<Array<BaseTile>>([]);
    const loadMore = () => emit("loadMore");
    const renderCount = ref<number>(0);
    const generateUrl = props.generateUrl;
    const { noImageUrl, audioUrl } = useIIIF("");

    const tiles: MasonryTileConfig = {
      SingleImage: {
        mediafiles: ["placeholder"],
        probability: "*",
      },
      TwoImages: {
        mediafiles: ["placeholder", "placeholder"],
        probability: 0.3,
      },
      FourImages: {
        mediafiles: [
          "placeholder",
          "placeholder",
          "placeholder",
          "placeholder",
        ],
        probability: 0.1,
      },
    };

    const resizeMasonryItem = (item: any) => {
      let grid = document.getElementsByClassName("masonry")[0],
        rowGap = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
        ),
        rowHeight = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
        );
      let rowSpan = Math.ceil(
        (item.querySelector(".card-content").getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );

      item.style.gridRowEnd = "span " + rowSpan;
    };

    const contructTiles = (numberOfTiles = 20, reset = false) => {
      if (reset) {
        masonryTiles.value = [];
      }

      let numberOfEntities = 0;
      while (numberOfEntities <= numberOfTiles) {
        let randomTile = randomizer<keyof MasonryTileConfig>(tiles);
        if (randomTile) {
          randomTile =
            numberOfTiles - numberOfEntities < 4 ? "SingleImage" : randomTile;

          switch (randomTile) {
            case "TwoImages":
              masonryTiles.value.push({
                type: "TwoImages",
                mediafiles: ["placeholder", "placeholder"],
              });
              numberOfEntities = numberOfEntities + 2;
              break;
            case "FourImages":
              masonryTiles.value.push({
                type: "FourImages",
                mediafiles: [
                  "placeholder",
                  "placeholder",
                  "placeholder",
                  "placeholder",
                ],
              });
              numberOfEntities = numberOfEntities + 4;
              break;
            default:
              masonryTiles.value.push({
                type: "SingleImage",
                mediafiles: ["placeholder"],
              });
              numberOfEntities = numberOfEntities + 1;
              break;
          }
        }
      }
    };

    onMounted(() => {
      let masonryEvents = ["load", "resize"];
      masonryEvents.forEach(function (event) {
        window.addEventListener(event, resizeAllMasonryItems);
      });

      contructTiles(props.itemsEachLoad);

      watch(
        () => props.entities.results,
        (value) => {
          if (value) {
            const filterdValue: Entity[] = value;
            const numberOfResult = filterdValue.length;
            let entityIndex = 0;
            let lastIndex = 0;

            masonryTiles.value.forEach((tile: BaseTile, index) => {
              if (entityIndex <= numberOfResult) {
                switch (tile.type) {
                  case "TwoImages":
                    masonryTiles.value[index].mediafiles = filterdValue.slice(
                      entityIndex,
                      entityIndex + 2
                    );
                    entityIndex = entityIndex + 2;
                    lastIndex = index;
                    break;
                  case "FourImages":
                    masonryTiles.value[index].mediafiles = filterdValue.slice(
                      entityIndex,
                      entityIndex + 4
                    );
                    entityIndex = entityIndex + 4;
                    lastIndex = index;
                    break;
                  default:
                    masonryTiles.value[index].mediafiles = filterdValue.slice(
                      entityIndex,
                      entityIndex + 1
                    );
                    entityIndex = entityIndex + 1;
                    lastIndex = index;
                    break;
                }
              }
            });
            masonryTiles.value.splice(lastIndex + 1, masonryTiles.value.length);
          }
        },
        { immediate: true }
      );
    });

    const resizeAllMasonryItems = () => {
      let allItems = document.getElementsByClassName("card");
      for (let i = 0; i < allItems.length; i++) {
        resizeMasonryItem(allItems[i]);
      }
    };

    const checkForOverflow = () => {
      const element = document.getElementsByClassName(
        "masonry"
      )[0] as HTMLElement;

      if (
        element.offsetHeight < element.scrollHeight ||
        element.offsetWidth < element.scrollWidth
      ) {
        console.log("overflowing masonry");
        resizeAllMasonryItems();
      }
    };

    const rendered = () => {
      resizeAllMasonryItems();
    };

    const getImageUrl = (
      entity: Entity | "placeholder",
      tiletype: keyof MasonryTileConfig
    ): string | undefined => {
      if (
        entity !== "placeholder" &&
        (entity.primary_transcode || entity.primary_mediafile)
      ) {
        return generateUrl(
          entity.primary_transcode || entity.primary_mediafile,
          tiletype === "SingleImage" ? "full" : "full"
        );
      } else if (entity && entity !== "placeholder") {
        if (
          entity.mediafiles &&
          entity.mediafiles[0] &&
          entity.mediafiles[0].filename
        ) {
          return generateUrl(
            entity.mediafiles[0].filename,
            tiletype === "SingleImage" ? "full" : "full"
          );
        }
      }
      if (entity === "placeholder") {
        return undefined;
      }
      return noImageUrl;
    };

    const getFallBackImageUrl = (
      entity: Entity | "placeholder",
      tiletype: keyof MasonryTileConfig
    ): string | undefined => {
      if (
        entity !== "placeholder" &&
        (entity.primary_transcode || entity.primary_mediafile)
      ) {
        return generateUrl(
          entity.primary_transcode || entity.primary_mediafile,
          tiletype === "SingleImage" ? "full" : "full"
        );
      } else if (entity !== "placeholder" && entity.primary_mediafile) {
        return generateUrl(
          entity.primary_mediafile,
          tiletype === "SingleImage" ? "full" : "full",
          "max"
        );
      }
      if (entity === "placeholder") {
        return undefined;
      }
      return noImageUrl;
    };

    return {
      loadMore,
      rendered,
      getImageUrl,
      masonryTiles,
      contructTiles,
      getFallBackImageUrl,
      noImageUrl,
      audioUrl,
    };
  },
});
</script>

<style scoped>
/* prettifying styles */
html {
  background: #555;
}

#description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.masonry {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 0;
}

@media screen and (min-width: 520px) {
  .masonry.big {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
}

@media screen and (min-width: 760px) {
  .masonry.big {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media screen and (min-width: 1024px) {
  .masonry.big {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  }
}

.card-content {
  gap: 15px;
}
</style>
