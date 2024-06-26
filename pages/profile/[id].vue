<template>
  <div>
    Profile
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["signed-out"],
});
</script>