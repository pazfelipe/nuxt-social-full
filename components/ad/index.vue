<template>
  <div class="p-4 bg-white rounded-lg shadow-md text-sm">
    <!-- TOP -->
    <div class="flex items-center justify-between text-gray-500 font-medium">
      <span>Sponsored Ads</span>
      <img
        src="/more.png"
        alt=""
        width="16"
        height="16"
      />
    </div>
    <!-- BOTTOM -->
    <div
      class="flex flex-col mt-4"
      :class="gap"
    >
      <div
        class="relative w-full"
        :class="height"
      >
        <NuxtImg
          src="https://images.pexels.com/photos/7495732/pexels-photo-7495732.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          class="rounded-lg object-cover w-full h-full"
          fill
        />
      </div>
      <div class="flex items-center gap-4">
        <NuxtImg
          src="https://images.pexels.com/photos/7495732/pexels-photo-7495732.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          class="rounded-full object-cover w-6 h-6"
          width="24"
          height="24"
        />
        <span class="text-blue-500 font-medium">BigChef Lounge</span>
      </div>
      <p :class="adTextSize">
        {{ adTextContent }}
      </p>
      <button class="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
        Learn more
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Sizes } from "~/types/utils";

type TProps = {
  size: Sizes;
};

const props = withDefaults(defineProps<TProps>(), {
  size: Sizes.SMALL,
});

const size = computed(() => props.size);
const gap = computed(() => (props.size === Sizes.SMALL ? "gap-2" : "gap-4"));
const height = computed(() =>
  props.size === Sizes.SMALL
    ? "h-24"
    : props.size === Sizes.MEDIUM
      ? "h-36"
      : "h-48",
);
const adTextSize = computed(() =>
  props.size === Sizes.SMALL ? "text-xs" : "text-sm",
);

const adTextContent = computed(() => {
  let content;
  switch (props.size) {
    case Sizes.SMALL:
      content = "Neighborhood came swept means vertical thing shop chart";
      break;
    case Sizes.MEDIUM:
      content =
        "Been attempt fruit cotton double division open substance value brought larger beginning operation measure.";
      break;
    default:
      content =
        "Worse particles alike throat supply cabin scientific heat well closer of begun example wagon captured bow hot chosen melted closely love several prevent become";
      break;
  }
  return content;
});
</script>
