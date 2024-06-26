<template>
  <div class="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
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
        v-for="i in 8"
        :key="i"
      >
        <NuxtImg
          src="https://images.pexels.com/photos/25539612/pexels-photo-25539612/free-photo-of-cidade-meio-urbano-arte-construcao.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
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
});

</script>
