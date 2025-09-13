<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
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
  <section id="skill" class="container py-24 sm:py-32 w-full h-screen">
    <h2 class="text-lg text-primary text-center mb-8 tracking-wider">
      Compétences
    </h2>

    <div class="mt-8">
      <Marquee
        :pauseOnHover="true"
        :fade="true"
        innerClassName="flex gap-6 sm:gap-12"
      >
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="flex flex-col items-center"
        >
          <Icon :icon="skill.icon" class="w-16 h-16 sm:w-24 sm:h-24" />
          <span class="mt-2 text-center text-sm sm:text-base">{{
            skill.name
          }}</span>
        </div>
      </Marquee>
    </div>
  </section>
</template>
