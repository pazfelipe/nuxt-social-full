<template>
  <div
    class="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4"
    v-if="props.medias?.length"
  >
    <!-- TOP -->
    <div class="flex justify-between items-center font-medium">
      <span class="text-gray-500">User Media</span>
      <NuxtLink
        to="/"
        class="text-blue-500 text-sm"
        >See all</NuxtLink
      >
    </div>
    <!-- BOTTOM -->
    <div class="flex gap-4 justify-between flex-wrap">
      <div
        class="relative w-1/5 h-24"
        v-for="(media, i) in props.medias"
        :key="i"
      >
        <NuxtImg
          :src="media.img"
          fill
          class="object-cover rounded-md"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  user: {
    type: Object,
    required: false,
  },
  medias: {
    type: Object,
  },
});
</script>
