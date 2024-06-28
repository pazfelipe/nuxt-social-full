<template>
  <div class="flex flex-col gap-2">
    <Suspense>
      <button
        class="w-full bg-blue-500 text-white text-sm rounded-md p-2"
        @click="onToggleRequest"
        :disabled="props.loading"
      >
        <i
          class="pi pi-spin pi-spinner"
          v-if="props.loading"
        ></i>
        <span v-else>{{ followingText }}</span>
      </button>
      <template #fallback> ... </template>
    </Suspense>
    <span class="text-red-400 self-end text-xs cursor-pointer">
      {{ blockText }}
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
  currentUserId: {
    type: String,
    required: true,
  },
  isUserBlocked: {
    type: Boolean,
    required: false,
  },
  isFollowing: {
    type: Boolean,
    required: false,
  },
  isFollowingSent: {
    type: Boolean,
    required: false,
  },
  loading: {
    type: Boolean,
    required: false,
  },
});

const emits = defineEmits(["onToggleRequest", "onToggleBlock"]);

const blockText = computed(() =>
  props.isUserBlocked ? "Unblock User" : "Block User",
);
const followingText = computed(() =>
  props.isFollowing
    ? "Following"
    : props.isFollowingSent
      ? "Friend Request Sent"
      : "Follow User",
);

const onToggleRequest = () => {
  emits("onToggleRequest");
};
</script>
