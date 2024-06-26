<template>
  <div class="flex flex-col gap-6">
    <div v-if="userId" class="flex flex-col gap-6">
      <UserInformationCard :user="props.user" />
      <UserMediaCard :user="props.user" />
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
