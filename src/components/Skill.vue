<script setup lang="ts">
import "@selemondev/vue3-marquee/dist/style.css";

import { Icon } from "@iconify/vue";

interface sponsorsProps {
  icon: string;
  name: string;
}

const skills: sponsorsProps[] = [
  {
    icon: "material-icon-theme:laravel",
    name: "Laravel",
  },
  {
    icon: "vscode-icons:file-type-quasar",
    name: "Quasar",
  },
  {
    icon: "logos:mysql",
    name: "SQL",
  },
  {
    icon: "vscode-icons:file-type-html",
    name: "HTML",
  },
  {
    icon: "devicon:vuejs",
    name: "Vue.js",
  },
  {
    icon: "material-icon-theme:nodejs",
    name: "Node.js",
  },
  {
    icon: "skill-icons:javascript",
    name: "JavaScript",
  },
  {
    icon: "material-icon-theme:tailwindcss",
    name: "Tailwind",
  },
  {
    icon: "material-icon-theme:git",
    name: "Git",
  },
];
</script>
<template>
  <section id="skill" class="container py-24 sm:py-32 w-full min-h-screen">
    <h2 class="text-lg text-primary text-center mb-12 tracking-wider">
      Compétences
    </h2>

    <!-- Conteneur flex responsive -->
    <div class="flex flex-wrap justify-center gap-6">
      <div
        v-for="{ icon, name } in skills"
        :key="name"
        class="flex flex-col items-center w-28 sm:w-36 sm:px-5"
      >
        <Icon :icon="icon" class="w-16 h-16 sm:w-24 sm:h-24 mb-2" />
        <h3>{{ name }}</h3>
      </div>
    </div>
  </section>
</template>
