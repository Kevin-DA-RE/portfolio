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
  git?: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "EpiCloud",
    description:
      "Application médicale conçue pour faciliter le suivi des crises d’épilepsie et l’évolution des traitements.",
    image: "/logo_epicloud.png",
    stacks: [
      "material-icon-theme:laravel",
      "devicon:vuejs",
      "simple-icons:shadcnui",
    ],
    git: "https://github.com/Kevin-DA-RE/epicloud",
  },
  {
    title: "DaVinciMedia",
    description: "Bibliothèque multimédia à portée de main",
    image: "/davincimedia.jpeg",
    stacks: [
      "material-icon-theme:laravel",
      "devicon:vuejs",
      "vscode-icons:file-type-quasar",
    ],
    url: "https://thedavincimedia.alwaysdata.net/",
    git: "https://github.com/Kevin-DA-RE/davincimedia",
  },
  {
    title: "Contact après travaux",
    description:
      "API de suivi qualité des passages clients auprès des concessions automobiles",
    image: "/web_developper_project.png",
    stacks: ["material-icon-theme:nodejs"],
  },
];
</script>

<template>
  <section id="project" class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-5 tracking-wider">
      Projets
    </h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto mb-20"
    >
      <div
        v-for="{ title, description, image, stacks, url, git } in serviceList"
        :key="title"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative">
          <CardHeader>
            <img
              :src="image"
              :alt="`Image describing ${title} `"
              class="w-[150px] md:w-[250px] lg:w-[200px] mx-auto mb-3"
            />
            <CardTitle>{{ title }}</CardTitle>
            <h2>
              Stacks:
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
            <CardDescription class="mt-2" v-if="git">
              <a
                :href="git"
                target="_blank"
                class="cursor-pointer text-blue-500 hover:underline transition"
              >
                <Icon
                  icon="qlementine-icons:github-16"
                  width="30"
                  height="30"
                />Dépôt Git
              </a>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  </section>
</template>
