<template>
  <div class="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
    <Post
      v-for="i in 10"
      :key="i"
    />
  </div>
</template>