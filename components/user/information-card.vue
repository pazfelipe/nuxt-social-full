<template>
  <div class="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
    <!-- TOP -->
    <div class="flex justify-between items-center font-medium">
      <span class="text-gray-500">User Information</span>
      <NuxtLink
        to="/"
        class="text-blue-500 text-sm"
        >See all</NuxtLink
      >
    </div>
    <!-- BOTTOM -->
    <div class="flex flex-col gap-4 text-gray-500">
      <div class="flex items-center gap-2">
        <span class="text-xl text-black">Lena McDonald</span>
        <span class="text-sm">@mae</span>
      </div>
      <p>
        species silent agree thumb whose settlers beginning right stop brought
        at empty sun spirit together.
      </p>
      <div class="flex items-center gap-2">
        <img
          src="/map.png"
          alt=""
          width="16"
          height="16"
        />
        <span>Living in <b>Denver</b> </span>
      </div>
      <div class="flex items-center gap-2">
        <img
          src="/school.png"
          alt=""
          width="16"
          height="16"
        />
        <span>Went to <b>Edgar High School</b> </span>
      </div>
      <div class="flex items-center gap-2">
        <img
          src="/work.png"
          alt=""
          width="16"
          height="16"
        />
        <span>Works at <b>Apple Inc.</b> </span>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex gap-1 items-center">
          <img
            src="/link.png"
            alt=""
            width="16"
            height="16"
          />
          <NuxtLink
            external
            to="https://exemple.com"
            target="_blank"
            class="text-blue-500 font-medium"
            >example.com</NuxtLink
          >
        </div>
        <div class="flex gap-1 items-center">
          <img
            src="/date.png"
            alt=""
            width="16"
            height="16"
          />
          <span>Joined Nomber 2024</span>
        </div>
      </div>
      <button class="bg-blue-500 text-white text-sm rounded-md p-2">
        Follow
      </button>
      <span class="text-red-400 self-end text-xs cursor-pointer"
        >Block user</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  userId: {
    type: String,
    required: false,
  },
});

const userId = computed(() => props.userId);
</script>
