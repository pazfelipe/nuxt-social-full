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
    <div class="hidden md:flex w-[50%] text-sm items-center justify-between">
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
      <div class="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
        <input
          type="search"
          class="bg-transparent outline-none"
          placeholder="search ..."
        >
        <img
          src="/search.png"
          alt=""
          width="14"
          height="14"
        >
      </div>
    </div>
    <!-- RIGH -->
    <div class="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">

      <ClerkLoading>
        <div class="inline-block h4 v-4 animate-spin rounded-full border-2 border-gray-500"></div>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <div class="cursor-pointer">
            <img
              src="/people.png"
              alt=""
              width="24"
              height="24"
            >
          </div>
          <div class="cursor-pointer">
            <img
              src="/messages.png"
              alt=""
              width="20"
              height="20"
            >
          </div>
          <div class="cursor-pointer">
            <img
              src="/notifications.png"
              alt=""
              width="20"
              height="20"
            >
          </div>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div class="flex items-center gap-2 text-sm">
            <img
              src="/login.png"
              alt=""
              width="20"
              height="20"
            >
            <NuxtLink to="/sign-in">Login/Register</NuxtLink>
          </div>
        </SignedOut>
      </ClerkLoaded>
      <MobileMenu />
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import {
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  UserButton,
  ClerkLoaded,
  ClerkLoading,
  // @ts-ignore
} from "vue-clerk";
</script>