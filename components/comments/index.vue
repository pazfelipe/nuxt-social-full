<template>
  <div>
    <!-- WRITE -->
    <div class="flex items-center gap-4">
      <NuxtImg
        src="https://images.pexels.com/photos/25748614/pexels-photo-25748614/free-photo-of-moda-tendencia-homem-oculos-escuros.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        class="w-8 h-8 rounded-full"
        width="32"
        height="32"
      />
      <div class="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
        <input
          type="text"
          class="bg-transparent outline-none flex-1"
          placeholder="Write your comment..."
        >
        <img
          src="/emoji.png"
          alt=""
          width="16"
          height="16"
          class="w-4 h-4 cursor-pointer"
        >
      </div>
    </div>
    <!-- COMMENTS -->
    <div>
      <!-- COMMENT -->
      <div class="flex gap-4 justify-between mt-6">
        <!-- AVATAR -->
        <NuxtImg
          src="https://images.pexels.com/photos/17836854/pexels-photo-17836854/free-photo-of-jovem-novo-mamifero-fotografia-animal.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          class="w-10 h-10 rounded-full"
          width="40"
          height="40"
        />

        <!-- DESC -->
        <div class="flex flex-col gap-2 flex-1">
          <span class="font-medium">Carolyn Hunt</span>
          <p>using per five control facing gave hand consist adult early combine team essential feathers money death below load them made whistle blank beauty skin</p>
          <div class="flex items-center gap-8 text-xs text-gray-500 mt-2">
            <div class="flex items-center gap-4">
              <img
                src="/like.png"
                alt=""
                width="12"
                height="12"
                class="w-4 h-4 cursor-pointer"
              >
              <span class="text-gray-300">|</span>
              <span class="text-gray-500">123 Likes</span>
            </div>
            <div>Reply</div>
          </div>
        </div>
        <!-- ICON -->
        <img
          src="/more.png"
          alt=""
          width="12"
          height="12"
          class="w-4 h-4 cursor-pointer"
        >
      </div>
    </div>
  </div>
</template>