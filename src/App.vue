<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const isOpen = ref(false)
</script>

<template>
  <div class="flex flex-col h-screen">
    <!-- Barre de navigation fixe -->
    <div class="navbar bg-base-100 shadow-sm h-20 fixed top-0 left-0 w-full z-50">
      <div class="flex-1">
        <RouterLink class="btn btn-ghost text-xl" to="/">Kevin DA RE</RouterLink>
      </div>
      <div class="hidden lg:flex gap-2">
        <RouterLink class="btn btn-ghost text-xl" to="/project">Projets</RouterLink>
        <RouterLink class="btn btn-ghost text-xl" to="/experience">Experiences</RouterLink>
        <RouterLink class="btn btn-ghost text-xl" to="/skill">Compétences</RouterLink>
        <RouterLink class="btn btn-ghost text-xl" to="/about">À propos</RouterLink>
        <RouterLink class="btn btn-ghost text-xl" to="/contact">Contact</RouterLink>
      </div>
    </div>

    <!-- Contenu principal prenant le reste de la hauteur -->
    <div class="flex flex-col flex-grow mt-20 overflow-hidden">
      <router-view />
    </div>
  </div>
</template>
