<script setup lang="ts">
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";

const about = [
  {
    id: 1,
    name: "Investi",
  },
  {
    id: 2,
    name: "Passioné",
  },
  {
    id: 3,
    name: "Téméraire",
  },
];

const aboutDetails = [
  {
    id: 1,
    title: "Moi en quelques mots",
    descriptif: [
      {
        name: `J'aime apprendre de nouvelles choses et je suis toujours prêt à
        relever de nouveaux défis`,
      },
      {
        name: `J'ai un esprit curieux et j'aime explorer de nouveaux domaines, que ce soit dans le domaine professionnel ou personnel.
        J'ai toujours été passionné par l'informatique`,
      },
      {
        name: `Ayant débuté ma carrière dans l'undustrie, j'ai développé des programmes pour fabriquer des pièces mécaniques puis j'ai effectué une reconversion professionnelle dans le développement web afin de concevoir des applications web modernes.`,
      },
      {
        name: `L'idée de développer une ou plusieurs solutions sur un projet afin de répondre à aux besoins clients me motive à me surpasser et à apprendre de nouvelles compétences.`,
      },
      {
        name: `Je suis très investi quand il s'agit de relever des défis pour atteindre un objectif.`,
      },
      {
        name: ` J'aime aussi partager mes connaissances et aider les autres à progresser quand l'occasion se présente.`,
      },
    ],
  },
  {
    id: 2,
    title: "Loisirs et passions",
    descriptif: [
      {
        name: `En dehors du travail, j'aime beaucoup les jeux videos notamment les jeux de simulations.
        Ces jeux m'aident à me projeter dans des rôles importants et m'apprennent à être stratégique et réfléchi.`,
      },
      {
        name: `J'aime également regarder des séries et des films et j'ai meme un faible pour les films d'horreur. `,
      },
      {
        name: `J'écoute beaucoup de musique instumentale, cela m'aide à mévader et à me concentrer.`,
      },
      {
        name: `Etant père de famille, j'apprécie également passer du temps avec mon fils et ma femme. `,
      },
      {
        name: `J'aime beaucoup montrer à mon fils de nouveaux jeux et l'aider à progresser.`,
      },
    ],
  },
  {
    id: 3,
    title: "Caractère",
    descriptif: [
      {
        name: `Je dirai que je suis une personne observatrice, calme et téméraire.
        Je suis très rigoureux dans mon travail et j'aime que les choses soient bien faites.`,
      },
      {
        name: `Je suis aussi quelqu'un qui a de l'humour et aime faire rire les gens. `,
      },
      {
        name: `J'écoute beaucoup de musique instumentale, cela m'aide à mévader et à me concentrer.`,
      },
      {
        name: `Quelque soit mes tâches à effectuer, je suis toujours investi et motivé dans ce que je fais.
        Enfin, meme si je suis timide, j'aime être entouré de personnes et partager des moments conviviaux.`,
      }
    ],
  },
];
</script>

<template>
  <section id="contact" class="container py-24 sm:py-32">
        <div class="mb-4 text-center">
          <h2 class="text-lg text-primary mb-2 tracking-wider">
            A propos de moi
          </h2>

          <h2 class="text-3xl md:text-4xl font-bold">Les grandes lignes</h2>
        </div>
        <div
          v-for="(about, index) in about"
          :key="about.id"
          class="flex m-2 px-8 lg:w-[80%] mx-auto "
          :class="{
            'items-start justify-start': index === 0,
            'items-center justify-center': index === 1,
            'items-end justify-end': index === 2,
          }"
        >
          <h1
            class="text-4xl font-extrabold bg-gradient-to-r from-primary via-indigo-500 to-primary bg-clip-text text-transparent"
          >
            {{ about.name }}
          </h1>
        </div>
        <div v-for="{ title, descriptif } in aboutDetails" :key="title" class="my-5">
          <Card class="bg-muted/60 dark:bg-card h-full relative lg:w-[80%] mx-auto ">
            <CardHeader>
              <CardTitle>{{ title }}</CardTitle>
              <CardDescription>
                <ul v-for="desc in descriptif" style="list-style-type: disc">
                  <li class="mt-2">{{ desc.name }}</li>
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
  </section>
</template>
