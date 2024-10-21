<script setup>
import { ref } from 'vue';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-slate-800 p-4">
    <p class="text-center text-white">
      {{ currentYear }} My Company. All rights reserved.
    </p>
  </footer>
</template>