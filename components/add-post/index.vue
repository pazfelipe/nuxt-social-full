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
          class="bg-slate-100 rounded-lg flex-1 p-2"
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
      <div></div>
    </div>
  </div>
</template>