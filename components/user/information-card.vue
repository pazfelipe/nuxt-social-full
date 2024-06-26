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
        <span class="text-xl text-black">{{
          props.user?.name + " " + props.user?.surname
        }}</span>
        <span class="text-sm">@{{ props.user?.username }}</span>
      </div>
      <p>
        {{ props.user?.description }}
      </p>
      <div class="flex items-center gap-2">
        <img
          src="/map.png"
          alt=""
          width="16"
          height="16"
        />
        <span
          >Living in <b>{{ props.user?.city }}</b>
        </span>
      </div>
      <div class="flex items-center gap-2">
        <img
          src="/school.png"
          alt=""
          width="16"
          height="16"
        />
        <span
          >Went to <b>{{ props.user?.school }}</b>
        </span>
      </div>
      <div class="flex items-center gap-2">
        <img
          src="/work.png"
          alt=""
          width="16"
          height="16"
        />
        <span
          >Works at <b>{{ props.user?.work }}</b>
        </span>
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
            :to="props.user?.website"
            target="_blank"
            class="text-blue-500 font-medium"
            >{{ props.user?.website }}</NuxtLink
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
  user: {
    type: Object,
    required: false,
  },
});
</script>
