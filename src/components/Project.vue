<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@iconify/vue";

interface ServiceProps {
  title: string;
  description: string;
  image: string;
  stacks: Array<string>;
  url?: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "DaVinciMedia",
    description: "Bibliotèque multimedia a portée de main",
    image: "/davincimedia.jpeg",
    stacks: [
      "material-icon-theme:laravel",
      "devicon:vuejs",
      "vscode-icons:file-type-quasar",
    ],
    url: "https://thedavincimedia.alwaysdata.net/",
  },
  {
    title: "Contact apres travaux",
    description:
      "Créations de fiches clients pour enquêtes de satisfaction via plateforme web",
    image: "/web_developper_project.png",
    stacks: ["material-icon-theme:nodejs"],
  },
];
</script>

<template>
  <section id="project" class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Projets
    </h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
        v-for="{ title, description, image, stacks, url } in serviceList"
        :key="title"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative">
          <CardHeader>
            <img
              :src="image"
              :alt="`Image describing ${title} `"
              class="w-[150px] md:w-[250px] lg:w-[300px] mx-auto mb-3"
            />
            <CardTitle>{{ title }}</CardTitle>
            <h2>
              Technos:
              <div v-if="stacks" class="flex flex-row my-2 space-x-2">
                <Icon
                  v-for="stack in stacks"
                  :icon="stack"
                  width="30"
                  height="30"
                  class=""
                />
              </div>
            </h2>
            <CardDescription>{{ description }}</CardDescription>
            <CardDescription class="mt-2" v-if="url">
              <a
                :href="url"
                target="_blank"
                class="cursor-pointer text-blue-500 hover:underline transition"
              >
                <Icon
                  icon="streamline-plump-color:web"
                  width="30"
                  height="30"
                />Site web
              </a>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  </section>
</template>
