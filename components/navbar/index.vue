<template>
  <div class="h-24 flex items-center justify-between">
    <!-- LEFT -->
    <div class="md:hidden lg:block w-[20%]">
      <NuxtLink
        to="/"
        class="font-bold text-xl text-blue-600"
      >LAMASOCIAL</NuxtLink>
    </div>
    <!-- MIDDLE -->
    <div class="hidden md:flex w-[50%] text-sm">
      <!-- LINKS -->
      <div class="flex gap-6 text-gray-600">
        <NuxtLink
          to="/"
          class="flex items-center gap-2"
        >
          <img
            class="w-4 h-4"
            src="/home.png"
            alt=""
            width="16"
            height="16"
          >
          Homepage
        </NuxtLink>
        <NuxtLink
          to="/"
          class="flex items-center gap-2"
        >
          <img
            class="w-4 h-4"
            src="/friends.png"
            alt=""
            width="16"
            height="16"
          >
          Friends
        </NuxtLink>
        <NuxtLink
          to="/"
          class="flex items-center gap-2"
        >
          <img
            class="w-4 h-4"
            src="/stories.png"
            alt=""
            width="16"
            height="16"
          >
          Stories
        </NuxtLink>
      </div>
    </div>
    <!-- RIGH -->
    <div class="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
      <MobileMenu />
    </div>
  </div>
</template>