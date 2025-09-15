<script setup lang="ts">
import { Card, CardHeader, CardTitle } from "./ui/card";

import { Icon } from "@iconify/vue";

const contacts = [
  {
    id: 1,
    name: 'portable',
    value: "0650060281",
    icon: "lucide:smartphone"
  },
  {
    id: 2,
    name: 'linkedin',
    value: "https://www.linkedin.com/in/kévin-da-re",
    icon: "lucide:linkedin"
  },
  {
    id: 3,
    name: 'mail',
    value: "dare.kevin21000@gmail.com",
    icon: "lucide:mail"
  },
];
</script>

<template>
  <footer id="footer" class="container">
    <Card class="bg-muted/60 dark:bg-card relative  w-[80vw] mx-auto">
      <CardHeader>
        <CardTitle class="mb-2">Coordonnées</CardTitle>
        <CardDescription class="flex flex-row justify-around">
          <div class="mx-2 flex" v-for="contact in contacts" :key="contact.id" >
            <Icon :icon="contact.icon" width="24" height="24" class="mr-2" />
            <h3>
              <template v-if="contact.name === 'mail'">
                <a :href="`mailto:${contact.value}`" class="text-blue-500 hover:underline">
                  {{ contact.value }}
                </a>
              </template>
               <template v-else-if="contact.name === 'linkedin'">
                <a :href="contact.value" class="text-blue-500 hover:underline" target="_blank">
                 Linkedin
                </a>
              </template>
              <template v-else>
                {{ contact.value }}
              </template>
            </h3>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  </footer>
</template>
