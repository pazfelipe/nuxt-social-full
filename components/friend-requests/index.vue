<template>
  <div
    class="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4"
    v-if="userId && requests.length"
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
    <FriendRequestsRequestList
      :requests="requests"
      @on-refresh-list="handleRequest($event)"
    />
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

const handleRequest = async ({
  accept,
  user,
}: {
  accept: boolean;
  user: string;
}) => {
  try {
    await fetchData("user", HttpMethod.POST, {
      action: accept
        ? SERVER_USER_ACTIONS.ACCEPT_FOLLOW_REQUEST
        : SERVER_USER_ACTIONS.DECLINE_FOLLOW_REQUEST,
      params: {
        userId: user,
        currentUserId: userId.value,
      },
    });
    await fetchRequests();
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await fetchRequests();
});
</script>
