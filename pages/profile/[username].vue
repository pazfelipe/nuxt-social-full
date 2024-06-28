<template>
  <div class="flex gap-6 pt-6">
    <div class="hidden xl:block w-[20%]">
      <LeftMenu :page-type="PageTypes.PROFILE" />
    </div>
    <div class="w-full lg:w-[70%] xl:w-[50%]">
      <div
        class="flex flex-col gap-6"
        v-if="!isNotFound"
      >
        <div class="flex flex-col items-center justify-center">
          <div class="w-full h-64 relative">
            <img
              fit="fill"
              :src="userData?.cover"
              class="object-cover rounded-md w-full h-full"
            />
            <img
              fit="fill"
              :src="userData?.avatar"
              width="128"
              height="128"
              class="w-32 h-32 rounded-full absolute object-cover left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
            />
          </div>
          <h1 class="mt-20 mb-4 text-2xl font-medium">
            {{ userData?.name + " " + userData?.surname }}
          </h1>
          <div class="flex items-center justify-center gap-12 mb-4">
            <div class="flex flex-col items-center">
              <span class="font-medium">{{ userData?._count.posts || 0 }}</span>
              <span class="text-sm">Posts</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="font-medium">{{
                userData?._count.followers || 0
              }}</span>
              <span class="text-sm">Followers</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="font-medium">{{
                userData?._count.following || 0
              }}</span>
              <span class="text-sm">Following</span>
            </div>
          </div>
        </div>
        <Feed />
      </div>
      <div v-else>Not Found</div>
    </div>
    <div class="hidden lg:block w-[30%]">
      <RightMenu :user="userData" :user-medias="userMedias" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { HttpMethod } from "svix/dist/openapi";
import { useAuth } from "vue-clerk";
import { SERVER_USER_ACTIONS } from "~/utils/enums";
import { PageTypes } from "~/types/utils";
const route = useRoute();

const username = route.params.username;
const { userId: userLogged } = useAuth();
const userData = ref();
const isNotFound = ref(false);
const userMedias = ref([]);

const fetchUser = async () => {
  if (username) {
    try {
      const { data } = await fetchData("user", HttpMethod.POST, {
        action: SERVER_USER_ACTIONS.FIND,
        params: {
          username,
        },
      });
      userData.value = data.value;
    } catch (err) {
      const error = err as any;
      if (error.status && error.status === 404) {
        isNotFound.value = true;
        userData.value = null;
      }
    }
  }
};

const fetchIsBlocked = async () => {
  if (username) {
    try {
      const { data } = await fetchData("user", HttpMethod.POST, {
        action: SERVER_USER_ACTIONS.IS_BLOCKED,
        params: {
          blockerId: userLogged.value,
          blockedId: userData.value.id,
        },
      });
      if (data.value.isBlocked) {
        isNotFound.value = true;
        userData.value = null;
      }
    } catch (err) {
      const error = err as any;
      console.log(error);
    }
  }
};

const fetchUserMedias = async () => {
  if (username) {
    try {
      const { data } = await fetchData("user", HttpMethod.POST, {
        action: SERVER_USER_ACTIONS.FIND_POST_WITH_MEDIA,
        params: {
          userId: userLogged.value,
        },
      });
      userMedias.value = data.value;
    } catch (err) {
      const error = err as any;
      console.log(error);
    }
  }
};

onMounted(async () => {
  await fetchUser();
  await fetchIsBlocked();
  await fetchUserMedias();
});
</script>
