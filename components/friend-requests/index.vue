<template>
  <div class="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
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
    <div
      class="flex items-center justify-between"
      v-for="i in 3"
      :key="i"
    >
      <div class="flex items-center gap-4">
        <NuxtImg
          src="https://images.pexels.com/photos/15045083/pexels-photo-15045083/free-photo-of-moda-tendencia-mulher-carro.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          width="40"
          height="40"
          class="w-10 h-10 rounded-full object-cover"
        />
        <span class="font-semibold">Marian Daniels</span>
      </div>
      <div class="flex gap-3 justify-end">
        <img
          src="/accept.png"
          alt=""
          width="20"
          height="20"
          class="cursor-pointer"
        />
        <img
          src="/reject.png"
          alt=""
          width="20"
          height="20"
          class="cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
