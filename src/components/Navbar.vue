<script setup>
import logo from '@/assets/img/logo.png'
import { RouterLink, useRoute } from 'vue-router';
</script>
<template>
    <nav>
        <div class="bg-slate-200">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="flex h-20 sm:center justify-between">
                    <div class="flex flex-shrink-0 items-center justify-center md:items-stretch md:justify-start">
                        <RouterLink to="/" class="flex-shrink-0 text-black text-2xl font-bold ml-2"/>
                        <img class="h-10 w-auto" :src="logo" alt="logo">
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
