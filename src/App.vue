<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const isOpen = ref(false)
</script>

<template>
  <div>
    <!-- Barre de navigation -->
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <RouterLink class="btn btn-ghost text-xl" to="/">Kevin DA RE</RouterLink>
      </div>

      <!-- Bouton burger (visible uniquement sur petit écran) -->
      <div class="lg:hidden">
        <button class="btn btn-square btn-ghost" @click="isOpen = !isOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      <!-- Menu visible sur grand écran -->
      <div class="hidden lg:flex gap-2">
        <RouterLink class="btn btn-ghost text-xl" to="/experience">Experience</RouterLink>
        <RouterLink class="btn btn-ghost text-xl" to="/skills">Compétences</RouterLink>
        <RouterLink class="btn btn-ghost text-xl" to="/about">À propos</RouterLink>
        <RouterLink class="btn btn-ghost text-xl" to="/contact">Contact</RouterLink>
      </div>
    </div>

    <!-- Menu déroulant visible sur petit écran si ouvert -->
    <div v-if="isOpen" class="flex flex-col gap-2 p-4 lg:hidden">
      <RouterLink class="btn btn-outline" to="/experience" @click="isOpen=!isOpen">Experience</RouterLink>
      <RouterLink class="btn btn-outline" to="/skills" @click="isOpen=!isOpen">Compétences</RouterLink>
      <RouterLink class="btn btn-outline" to="/about" @click="isOpen=!isOpen">À propos</RouterLink>
      <RouterLink class="btn btn-outline" to="/contact" @click="isOpen=!isOpen">Contact</RouterLink>
    </div>

    <!-- Vue principale -->
    <router-view />
  </div>
</template>
