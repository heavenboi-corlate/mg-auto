<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer/>
</template>