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
      <div class="flex flex-row items-center justify-between w-4/5 max-w-[1200px] mx-auto px-8">
        <!-- Portrait -->
       <div class="relative z-20 w-150 rounded-full animate-fade-in">
          <img src="../assets/portrait.png" alt="" class="rounded-full">
        </div>

        <!-- Texte et bouton -->
        <div class="flex flex-col items-center justify-center text-white space-y-10 animate-fade-in">
          <!-- Présentation texte sans bordure -->
          <div class="text-center space-y-6 w-180">
            <h1 class="text-4xl font-bold tracking-wide leading-tight">
              Bonjour et bienvenue !<br> Je m'appelle Kevin, Développeur Web Fullstack
            </h1>
            <h2 class="text-xl font-medium tracking-wide leading-snug">
              Passionné par l'univers du développement web, laissez moi vous présenter mes projets et bien plus encore
            </h2>
          </div>

          <!-- Bouton CV -->
           <div class="flex flex-row justify-between items-center w-4/5">
            <fieldset class="p-5 border-4 border-sky-700 rounded-lg shadow-md w-max text-lg">
              <legend>Télécharger mon CV</legend>
              <button class="btn btn-outline btn-info w-40">Cliquez ici</button>
            </fieldset>
            <RouterLink class="btn btn-ghost text-xl" to="/project">=> Mes projets</RouterLink>
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