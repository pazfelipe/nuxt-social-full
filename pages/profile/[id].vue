<template>
  <div class="flex gap-6 pt-6">
    <div class="hidden xl:block w-[20%]">
      <LeftMenu :page-type="PageTypes.PROFILE" />
    </div>
    <div class="w-full lg:w-[70%] xl:w-[50%]">
      <div class="flex flex-col gap-6">
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

definePageMeta({
  middleware: ["signed-out"],
});
</script>
