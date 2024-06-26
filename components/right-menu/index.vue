<template>
  <div class="flex flex-col gap-6">
    <FriendRequests />
    <Birthdays />
    <Ad :size="Sizes.MEDIUM" />
  </div>
</template>

<script lang="ts" setup>
import {Sizes} from '~/types/utils';

const props = defineProps({
  userId: {
    type: String,
    required: false
  }
});

const userId = computed(() => props.userId);
</script>