<template>
  <div class="flex flex-col gap-6">
    <div
      v-if="userId"
      class="flex flex-col gap-6"
    >
      <Suspense>
        <UserInformationCard :user="props.user" />
        <template #fallback> Loading ... </template>
      </Suspense>
      <Suspense>
        <UserMediaCard :user="props.user" />
        <template #fallback> Loading ... </template>
      </Suspense>
    </div>
    <FriendRequests />
    <Birthdays />
    <Ad :size="Sizes.MEDIUM" />
  </div>
</template>

<script lang="ts" setup>
import { Sizes } from "~/types/utils";

const props = defineProps({
  user: {
    type: Object,
    required: false,
  },
});

const userId = computed(() => props?.user?.id);
</script>
