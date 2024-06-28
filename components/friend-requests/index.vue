<template>
  <div
    class="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4"
    v-if="userId"
  >
    <!-- TOP -->
    <div class="flex justify-between items-center font-medium">
      <span class="text-gray-500">Friend Requests</span>
      <NuxtLink
        to="/"
        class="text-blue-500 text-sm"
        >See all</NuxtLink
      >
    </div>
    <!-- USER -->
    <FriendRequestsRequestList :requests="requests" />
  </div>
</template>

<script lang="ts" setup>
import { HttpMethod } from "svix/dist/openapi";
import { useAuth } from "vue-clerk";

const { userId } = useAuth();

const requests = ref([]);

const fetchRequests = async () => {
  try {
    const { data } = await fetchData("user", HttpMethod.POST, {
      action: SERVER_USER_ACTIONS.FOLLOW_REQUESTS,
      params: {
        userId: userId.value,
      },
    });
    requests.value = data.value;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await fetchRequests();
});
</script>
