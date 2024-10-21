<script setup>
import { RouterLink, useRoute } from "vue-router";
import logo from "../assets/img/logo.png.jpg";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-slate-200 border-b border-yellow-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="logo" />
            <!-- Nav links --->
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="#home"
                :class="[
                  isActiveLink('/')
                    ? 'bg-yellow-400'
                    : 'hover:bg-gray-300 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="#services"
                :class="[
                  isActiveLink('/')
                    ? 'bg-yellow-400'
                    : 'hover:bg-gray-300 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Services</RouterLink
              >
              <RouterLink
                to="#about"
                :class="[
                  isActiveLink('/')
                    ? 'bg-yellow-400'
                    : 'hover:bg-gray-300 hover:text-white',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >About</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
