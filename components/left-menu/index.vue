<template>
  <div class="flex flex-col gap-6">
    <ProfileCard v-if="showProfileCard" />
    <div
      class="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2"
    >
      <div
        v-for="(item, i) in menuItems"
        :key="item.label"
      >
        <NuxtLink
          :to="item.to"
          class="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <img
            :src="`/${item.icon}`"
            width="20"
            height="20"
          />
          <span>{{ item.label }}</span>
        </NuxtLink>
        <hr
          class="border-t-1 border-gray-50 w-36 self-center"
          v-if="i < menuItems.length - 1"
        />
      </div>
      <Ad :size="Sizes.SMALL" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PageTypes, Sizes } from "~/types/utils";

type TProps = {
  pageType: PageTypes;
};

const props = withDefaults(defineProps<TProps>(), {
  pageType: PageTypes.HOME,
});

const pageType = computed(() => props.pageType);
const showProfileCard = computed(() => props.pageType === PageTypes.HOME);

const menuItems = ref([
  { label: "My posts", to: "/", icon: "posts.png" },
  { label: "Activity", to: "/", icon: "activity.png" },
  { label: "Marketplace", to: "/", icon: "market.png" },
  { label: "Events", to: "/", icon: "events.png" },
  { label: "Albums", to: "/", icon: "albums.png" },
  { label: "Videos", to: "/", icon: "videos.png" },
  { label: "News", to: "/", icon: "news.png" },
  { label: "Courses", to: "/", icon: "courses.png" },
  { label: "Lists", to: "/", icon: "lists.png" },
  { label: "Settings", to: "/", icon: "settings.png" },
]);
</script>
