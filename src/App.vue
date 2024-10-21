<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>
