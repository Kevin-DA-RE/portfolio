<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  id: number;
  badgeTitle: string;
  title: string;
  period: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    id: 1,
    badgeTitle: "FimaInfo",
    period: "2022",
    title: "Developpeur integrateur web",
    description: "Developpement de solution web pour plateforme de telephonie",
    image: "/experience/web_developper.png",
  },
  {
    id: 2,
    badgeTitle: "Servius",
    period: "2021-2022",
    title: "Developpeur web",
    description:
      "Developpement d'interface web de gestion de livraison par facturation de colis",
    image: "/experience/logistic.png",
  },
  {
    id: 3,
    badgeTitle: "Operateur sur centre d'usinage",
    period: "2013-2020",
    title: "Monnot, Adhex, JTEKT, Tyco, etc...",
    description:
      "Fabrication de pièces mécaniques à usage industriel, automobile, ferroviaire.",
    image: "/experience/operator_milling_tools.png",
  },
];
</script>

<template>
  <section id="experience" class="container py-24 sm:py-32">
    <div class="text-center mb-2">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Experiences
      </h2>
    </div>

    <div class="lg:w-[80%] mx-auto relative">
      <div
        v-for="(
          { id, badgeTitle, title, description, image, period}, index
        ) in HowItWorksList"
        :key="id"
        :class="[
          'flex mb-8 items-center',
          { ' flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4 flex flex-row">
              <Badge>{{ badgeTitle }}</Badge>
              <Badge variant="info"  class="mr-3">{{ period }}</Badge>
  
            </div>
            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground w-[80%]">
            {{ description }}
          </CardContent>
        </Card>

        <img
          :src="image"
          :alt="`Image describing ${title} `"
          className="w-[150px]  md:w-[250px] lg:w-[300px] mx-auto -scale-x-100 "
        />
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
