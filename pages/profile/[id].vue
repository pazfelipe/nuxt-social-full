<template>
  <div class="flex gap-6 pt-6">
    <div class="hidden xl:block w-[20%]">
      <LeftMenu :page-type="PageTypes.PROFILE" />
    </div>
    <div class="w-full lg:w-[70%] xl:w-[50%]">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col items-center justify-center">
          <div class="w-full h-64 relative">
            <NuxtImg
              fit="fill"
              src="https://images.pexels.com/photos/25533437/pexels-photo-25533437/free-photo-of-panorama-vista-paisagem-praia.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              class="object-cover rounded-md w-full h-full"
            />
            <NuxtImg
              fit="fill"
              src="https://images.pexels.com/photos/8723496/pexels-photo-8723496.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              width="128"
              height="128"
              class="w-32 h-32 rounded-full absolute object-cover left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
            />
          </div>
          <h1 class="mt-20 mb-4 text-2xl font-medium">Juan Stevens</h1>
          <div class="flex items-center justify-center gap-12 mb-4">
            <div class="flex flex-col items-center">
              <span class="font-medium">123</span>
              <span class="text-sm">Posts</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="font-medium">1.3k</span>
              <span class="text-sm">Followers</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="font-medium">1.2k</span>
              <span class="text-sm">Following</span>
            </div>
          </div>
        </div>
        <Feed />
      </div>
    </div>
    <div class="hidden lg:block w-[30%]">
      <RightMenu user-id="1234" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PageTypes } from "~/types/utils";
</script>
