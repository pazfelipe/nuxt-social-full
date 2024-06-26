<template>
  <div
    class="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm"
  >
    <!-- AVATAR -->
    <NuxtImg
      src="https://images.pexels.com/photos/19261803/pexels-photo-19261803/free-photo-of-cidade-meio-urbano-predios-edificios.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
      class="w-12 h-12 object-cover rounded-full"
      width="48"
      height="48"
    />
    <!-- POST -->
    <div class="flex-1">
      <!-- TEXT INPUT -->
      <form
        @submit.prevent="testAction"
        class="flex gap-4"
      >
        <textarea
          class="bg-slate-100 rounded-lg flex-1 p-2 resize-none outline-none text-gray-500"
          placeholder="What's on your mind?"
          name="desc"
          v-model="desc"
        >
        </textarea>
        <img
          src="/emoji.png"
          class="w-5 h-5 cursor-pointer self-end"
          width="20"
          height="20"
        />
        <button type="submit">Send</button>
      </form>
      <!-- POST OPTIONS -->
      <div class="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
        <div class="flex items-center gap-2 cursor-pointer">
          <img
            src="/addimage.png"
            class="w-5 h-5 cursor-pointer self-end"
            width="20"
            height="20"
          />
          Photo
        </div>
        <div class="flex items-center gap-2 cursor-pointer">
          <img
            src="/addVideo.png"
            class="w-5 h-5 cursor-pointer self-end"
            width="20"
            height="20"
          />
          Video
        </div>
        <div class="flex items-center gap-2 cursor-pointer">
          <img
            src="/poll.png"
            class="w-5 h-5 cursor-pointer self-end"
            width="20"
            height="20"
          />
          Poll
        </div>
        <div class="flex items-center gap-2 cursor-pointer">
          <img
            src="/addevent.png"
            class="w-5 h-5 cursor-pointer self-end"
            width="20"
            height="20"
          />
          Event
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from "vue-clerk";
import { useFetch } from "@vueuse/core";

const { userId } = useAuth();

const desc = ref("");

const testAction = async () => {
  if (!userId) return;

  try {
    const { data, error } = await useFetch("/api/posts/create", {
      method: "POST",
      body: JSON.stringify({
        desc: desc.value,
        userId: userId.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).json();

    if (!error.value) {
      desc.value = "";
    }

    if (error.value) {
      console.error("Error creating post:", error.value);
    } else {
      console.log("Post created:", data.value);
    }
  } catch (err) {
    console.error("Failed to create post:", err);
  }
};
</script>
