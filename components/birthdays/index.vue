<template>
  <div class="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
    <!-- TOP -->
    <div class="flex justify-between items-center font-medium">
      <span class="text-gray-500">Birthdays</span>
    </div>
    <!-- USER -->
    <div class="flex items-center justify-between">
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
        <button class="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
          Celebrate
        </button>
      </div>
    </div>
    <!-- UPCOMING -->
    <div class="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
      <img
        src="/gift.png"
        width="24"
        height="24"
      />
      <NuxtLink
        to="/"
        class="flex flex-col gap-1 text-sm"
      >
        <span class="text-gray-700 font-semibold">Upcoming Birthdays</span>
        <span class="text-gray-500">See other 16 have upcoming birthdays</span>
      </NuxtLink>
    </div>
  </div>
</template>
