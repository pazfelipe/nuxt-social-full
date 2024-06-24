<template>
  <div>
    <div
      class="flex flex-col gap-[4.5px] cursor-pointer"
      @click="toggle()"
    >
      <div
        class="w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500"
        :class="isOpen ? 'rotate-45' : ''"
      />
      <div
        class="w-6 h-1 bg-blue-500 rounded-sm ease-in-out duration-500"
        :class="isOpen ? 'opacity-0' : ''"
      />
      <div
        class="w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500"
        :class="isOpen ? '-rotate-45' : ''"
      />
    </div>

    <div
      v-if="isOpen"
      class="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/">Friends</NuxtLink>
      <NuxtLink to="/">Groups</NuxtLink>
      <NuxtLink to="/">Stories</NuxtLink>
      <NuxtLink to="/">Login</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>