<template>
  <div class="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
    <div class="h-20 relative">
      <img
        :src="user?.cover || '/noCover.png'"
        fit="fill"
        class="rounded-md object-cover h-full w-full"
      />
      <img
        :src="user?.avatar || '/noAvatar.png'"
        class="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        width="48"
        height="48"
      />
    </div>
    <div class="h-22 flex flex-col gap-2 items-center">
      <span class="font-semibold">{{ user?.name + " " + user?.surname }}</span>
      <div class="flex items-center gap-4">
        <div
          class="flex"
          v-if="user?._count.followers > 0"
        >
          <NuxtImg
            src="https://images.pexels.com/photos/25745076/pexels-photo-25745076/free-photo-of-oculos-escuros-oculos-de-sol-mulher-campo.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            class="rounded-full object-cover w-3 h-3"
            width="12"
            height="12"
            v-for="i in 3"
            :key="i"
          />
        </div>
        <span class="text-sm text-gray-500"
          >{{ user?._count.followers }} Followers</span
        >
      </div>
      <button class="bg-blue-500 text-white text-sm p-2 rounded-md">
        My Profile
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from "vue-clerk";
import { HttpMethod } from "svix/dist/openapi";

const { userId } = useAuth();
const user = ref<any>(null);

const fetchUser = async () => {
  if (userId) {
    const { data } = await fetchData("user", HttpMethod.POST, {
      action: SERVER_USER_ACTIONS.FIND,
      params: {
        userId: userId.value,
      }
    });
    user.value = data.value;
  }
};

onMounted(async () => {
  setTimeout(async () => {
    await fetchUser();
  }, 300);
});
</script>
