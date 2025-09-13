<script setup lang="ts">
import "@selemondev/vue3-marquee/dist/style.css";

import { Icon } from "@iconify/vue";

interface sponsorsProps {
  icon: string;
  name: string;
}

const skills: sponsorsProps[] = [
  {
    icon: "devicon:vuejs",
    name: "Vuejs",
  },
  {
    icon: "material-icon-theme:laravel",
    name: "Laravel",
  },
  {
    icon: "vscode-icons:file-type-quasar",
    name: "Quasar",
  },
  {
    icon: "material-icon-theme:nodejs",
    name: "Nodejs",
  },
  {
    icon: "logos:mysql",
    name: "SQL",
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
        class="flex flex-col items-center w-28 sm:w-36"
      >
        <Icon :icon="icon" class="w-16 h-16 sm:w-24 sm:h-24 mb-2" />
        <h3>{{ name }}</h3>
      </div>
    </div>
  </section>
</template>
