<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  id: number;
  title: string;
  period: string;
  tasks: Array<string>;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    id: 1,
    period: "2022-2025",
    title: "Développeur web",
    tasks: [
      "Analyse et recueil des besoins clients",
      "Développement d’interfaces utilisateur",
      "Développement api pour optimisation des traitements de données commerciales",
      "Support technique et résolution d’incidents",
      "Documentation de projets",
    ]
  },
  {
    id: 2,
    period: "2021-2022",
    title: "Développeur front end Vue.js",
    tasks: [
      "Développement du dashboard de l'interface utilisateur en Vue.js.",
      "Navigation entre les serveurs via le terminal Unix pour sauvegarder les projets en complément de Git.",
    ]
  },
  {
    id: 3,
    period: "2013-2020",
    title: "Opérateur sur centres d'usinage",
    tasks: [
      "Analyse plan pour usinage.",
      "Paramétrage des machines et des outils.",
      "Maintenance de niveau 1.",
      "Contrôle qualité des pièces avant livraison client.",
    ],
  },
];
</script>

<template>
  <section id="experience" class="container py-24 sm:py-32">
    <div class="text-center mb-2">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Expériences
      </h2>
    </div>

    <div class="lg:w-[80%] mx-auto relative flex flex-col">
      <div
        v-for="(
          { id, title, period, tasks }, index
        ) in HowItWorksList"
        :key="id"
        :class="[
          'flex mb-8',
          { 'flex-row-reverse items-end': index % 2 !== 0 },
        ]"
      >
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div
              :class="[
                'pb-4 flex md:flex-row',
                { 'md:flex-row md:justify-end': index % 2 !== 0 },
              ]"
            >
              <Badge variant="info" class="mr-3">{{ period }}</Badge>
            </div>
            <CardTitle
              :class="['flex flex-row', { ' md:justify-end': index % 2 !== 0 }]"
            >
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent
            :class="[
              'text-muted-foreground text-start',
              { 'md:text-end': index % 2 !== 0 },
            ]"
          >
            <h3 class="text-amber-500">Tâches:</h3>
            <ul v-for="task in tasks">
              <li>{{ task }}</li>
            </ul>
          </CardContent>
        </Card>
        <div
          :class="[
            '-z-10 absolute right-0 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl',
            {
              'left-0': index % 2 !== 0,
            },
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>
