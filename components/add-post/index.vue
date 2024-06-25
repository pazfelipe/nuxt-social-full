<template>
  <div class="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
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
      <div class="flex gap-4">
        <textarea
          class="bg-slate-100 rounded-lg flex-1 p-2 resize-none"
          placeholder="What's on your mind?"
        > </textarea>
        <img
          src="/emoji.png"
          class="w-5 h-5 cursor-pointer self-end"
          width="20"
          height="20"
        />
      </div>
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