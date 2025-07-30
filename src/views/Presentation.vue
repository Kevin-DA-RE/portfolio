<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>
  <div class="relative h-screen w-screen overflow-hidden">
    <!-- Vidéo en arrière-plan -->
    <video class="absolute top-0 left-0 w-full h-full object-cover z-0" autoplay muted loop playsinline>
      <source src="../assets/wallpaper_blue.mp4" type="video/mp4" />
    </video>

    <!-- Overlay sombre -->
    <div class="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

    <!-- Contenu HTML centré -->
    <div class="absolute inset-0 flex items-center justify-center z-20">
      <div class="flex flex-col lg:flex-row items-center justify-between w-11/12 max-w-[1200px] px-6">

        <!-- Portrait -->
        <div class="max-md:w-50 max-md:h-50 w-150 rounded-full overflow-hidden animate-fade-in shrink-0">
          <img src="../assets/portrait.png" alt="Portrait" class="object-cover rounded-full" />
        </div>

        <!-- Texte et boutons -->
        <div class="flex flex-col items-center justify-center text-white text-center animate-fade-in max-w-xl">
          <div class="space-y-2">
            <h1 class="text-3xl sm:text-4xl font-bold tracking-wide leading-tight">
              Bonjour et bienvenue !<br> Je m'appelle Kevin, Développeur Web Fullstack
            </h1>
            <h2 class="text-lg sm:text-xl font-medium tracking-wide leading-snug">
              Passionné par l'univers du développement web, laissez moi vous présenter mes projets et bien plus encore
            </h2>
          </div>

          <div class="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
            <fieldset class="p-4 border-4 border-sky-700 rounded-lg shadow-md text-lg">
              <legend>Télécharger mon CV</legend>
              <button class="btn btn-outline btn-info w-40">Cliquez ici</button>
            </fieldset>
            <RouterLink class="btn btn-ghost text-xl" to="/project">➡ Mes projets</RouterLink>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>






<style>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>