<template>
  <div class="p-4 bg-white rounded-lg shadow-md text-sm">
    Ad
  </div>
</template>

<script lang="ts" setup>
import {Sizes} from '~/types/utils';


type TProps = {
  size: Sizes;
};

const props = withDefaults(defineProps<TProps>(), {
  size: Sizes.SMALL
});

const size = computed(() => props.size)

</script>