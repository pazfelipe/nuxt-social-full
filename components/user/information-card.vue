<template>
  <div class="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
    <!-- TOP -->
    <div class="flex justify-between items-center font-medium">
      <span class="text-gray-500">User Information</span>
      <NuxtLink
        to="/"
        class="text-blue-500 text-sm"
        >See all</NuxtLink
      >
    </div>
    <!-- BOTTOM -->
    <div class="flex flex-col gap-4 text-gray-500">
      <div class="flex items-center gap-2">
        <span class="text-xl text-black">{{
          props.user?.name + " " + props.user?.surname
        }}</span>
        <span class="text-sm">@{{ props.user?.username }}</span>
      </div>
      <p v-if="props.user?.description">
        {{ props.user?.description }}
      </p>
      <div class="flex items-center gap-2">
        <img
          src="/map.png"
          alt=""
          width="16"
          height="16"
        />
        <span
          >Living in <b>{{ props.user?.city }}</b>
        </span>
      </div>
      <div
        class="flex items-center gap-2"
        v-if="props.user?.school"
      >
        <img
          src="/school.png"
          alt=""
          width="16"
          height="16"
        />
        <span
          >Went to <b>{{ props.user?.school }}</b>
        </span>
      </div>
      <div
        class="flex items-center gap-2"
        v-if="props.user?.work"
      >
        <img
          src="/work.png"
          alt=""
          width="16"
          height="16"
        />
        <span
          >Works at <b>{{ props.user?.work }}</b>
        </span>
      </div>
      <div class="flex items-center justify-between">
        <div
          class="flex gap-1 items-center"
          v-if="props.user?.website"
        >
          <img
            src="/link.png"
            alt=""
            width="16"
            height="16"
          />
          <NuxtLink
            external
            :to="props.user?.website"
            target="_blank"
            class="text-blue-500 font-medium"
            >{{ props.user?.website }}</NuxtLink
          >
        </div>
        <div class="flex gap-1 items-center">
          <img
            src="/date.png"
            alt=""
            width="16"
            height="16"
          />
          <span>Joined {{ formattedDate }}</span>
        </div>
      </div>
      <UserCardInteraction
        :user-id="props.user?.id"
        :current-user-id="userId"
        :is-following="following"
        :is-following-sent="followingSent"
        :is-user-blocked="blocked"
        :loading="loading"
        @on-toggle-request="toggleRequest"
        @on-toggle-block="onToggleBlock"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { HttpMethod } from "svix/dist/openapi";
import { useAuth } from "vue-clerk";
import { SERVER_USER_ACTIONS } from "~/utils/enums";

const props = defineProps({
  user: {
    type: Object,
    required: false,
  },
});

const { userId } = useAuth();

const formattedDate = computed(() =>
  new Date(props.user?.createdAt).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
);

const following = ref(false);
const followingSent = ref(false);
const loading = ref(false);
const blocked = ref(false);

const toggleRequest = async () => {
  loading.value = true;
  try {
    const { data } = await fetchData("/user", HttpMethod.POST, {
      action: SERVER_USER_ACTIONS.SWITCH_FOLLOW,
      params: {
        userId: props.user!.id,
        currentUserId: userId.value,
      },
    });
    following.value = data.value.following;
    followingSent.value = data.value.request;
  } catch (error) {
    const e = error as Error;
    console.log(e);
  } finally {
    loading.value = false;
  }
};

const onToggleBlock = async () => {
  loading.value = true;

  try {
    const { data } = await fetchData("user", HttpMethod.POST, {
      action: SERVER_USER_ACTIONS.SWITCH_BLOCK,
      params: {
        userId: props.user!.id,
        currentUserId: userId.value,
      },
    });
    blocked.value = data.value.blocked;
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
  } finally {
    loading.value = false;
  }
};
</script>
