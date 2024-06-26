<template>
  <div class="flex flex-col gap-4">
    <Post
      v-for="i in 10"
      :key="i"
    />
  </div>
</template>