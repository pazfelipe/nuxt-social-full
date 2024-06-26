<template>
  <div class="flex flex-col gap-4 bg-white shadow-md rounded-lg p-4">
    <!-- USER -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <NuxtImg
          src="https://images.pexels.com/photos/25542632/pexels-photo-25542632/free-photo-of-comida-alimento-refeicao-madeira.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          class="w-10 h-10 rounded-full"
          width="40"
          height="40"
        />
        <span class="font-medium">Cody Garza</span>
      </div>
      <img
        src="/more.png"
        width="16"
        height="16"
      />
    </div>
    <!-- DESC -->
    <div class="flex flex-col gap-4">
      <div class="w-full min-h-96 relative">
        <NuxtImg
          src="https://images.pexels.com/photos/11112751/pexels-photo-11112751.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          class="object-cover rounded-md"
          fill
        />
        <p>including pay saved exercise spent language mark telephone point someone at gray blow necessary studying stick harder jump feed yard bat club seen supper</p>
      </div>
    </div>
    <!-- INTERACTION -->
    <div class="flex items-center justify-between text-sm my-4">
      <div class="flex gap-8">
        <div class="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <img
            src="/like.png"
            width="16"
            height="16"
            class="cursor-pointer"
          />
          <span class="text-gray-300">|</span>
          <span class="text-gray-500">123 <span class="hidden md:inline">Likes</span> </span>
        </div>
        <div class="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <img
            src="/comment.png"
            width="16"
            height="16"
            class="cursor-pointer"
          />
          <span class="text-gray-300">|</span>
          <span class="text-gray-500">123 <span class="hidden md:inline">Comments</span> </span>
        </div>

      </div>
      <div>
        <div class="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <img
            src="/share.png"
            width="16"
            height="16"
            class="cursor-pointer"
          />
          <span class="text-gray-300">|</span>
          <span class="text-gray-500">123 <span class="hidden md:inline">Shares</span> </span>
        </div>
      </div>
    </div>
    <Comments />
  </div>
</template>