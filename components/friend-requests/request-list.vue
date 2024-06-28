<template>
  <div
    class="flex items-center justify-between"
    v-for="request in props.requests"
  >
    <div class="flex items-center gap-4">
      <NuxtImg
        :src="request.sender.avatar"
        width="40"
        height="40"
        class="w-10 h-10 rounded-full object-cover"
      />
      <span class="font-semibold">
        {{ request.sender.name }} {{ request.sender.surname }}</span
      >
    </div>
    <div class="flex gap-3 justify-end">
      <img
        src="/accept.png"
        alt=""
        width="20"
        height="20"
        class="cursor-pointer"
        @click="onClick(true, request.sender.id)"
      />
      <img
        src="/reject.png"
        alt=""
        width="20"
        height="20"
        class="cursor-pointer"
        @click="onClick(false, request.sender.id)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  requests: {
    type: Object,
  },
});

const emits = defineEmits(["onRefreshList"]);

const onClick = (accept: boolean, user: string) =>
  emits("onRefreshList", { accept, user });
</script>
