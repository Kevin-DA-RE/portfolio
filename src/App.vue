<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)
</script>

<template>
  <div class="flex flex-col h-screen z-50">
     <video
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="./assets/wallpaper_blue.mp4" type="video/mp4" />
      </video>
    <!-- Barre de navigation fixe -->
    <div class="navbar shadow-sm h-20 fixed top-0 left-0 w-full">     
      <div class="flex-1 relative z-10">
        <RouterLink class="btn btn-ghost text-xl" to="/">Kevin DA RE</RouterLink>
      </div>

      <!-- Menu burger mobile -->
      <div class="lg:hidden relative z-10">
        <button class="btn btn-ghost" @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Menu desktop -->
      <div class="hidden lg:flex gap-2 relative z-10">
        <RouterLink class="btn btn-ghost text-xl" to="/project">Projets</RouterLink>
        <RouterLink class="btn btn-ghost text-xl" to="/experience">Experiences</RouterLink>
        <RouterLink class="btn btn-ghost text-xl" to="/skill">Compétences</RouterLink>
        <RouterLink class="btn btn-ghost text-xl" to="/about">À propos</RouterLink>
      </div>
    </div>

    <!-- Menu mobile -->
    <div
      v-if="menuOpen"
      class="mt-20 px-4 py-2 lg:hidden flex flex-col gap-2 z-50 shadow fixed top-20 left-0 w-full"
    >
      <RouterLink class="btn btn-block" to="/project" @click="closeMenu">Projets</RouterLink>
      <RouterLink class="btn btn-block" to="/experience" @click="closeMenu">Experiences</RouterLink>
      <RouterLink class="btn btn-block" to="/skill" @click="closeMenu">Compétences</RouterLink>
      <RouterLink class="btn btn-block" to="/about" @click="closeMenu">À propos</RouterLink>
    </div>

    <!-- Contenu principal -->
    <div class="flex flex-col flex-grow mt-20 overflow-hidden bg-transparent relative z-10">
      <RouterView />
    </div>
  </div>
</template>