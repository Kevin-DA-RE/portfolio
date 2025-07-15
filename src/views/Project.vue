<script setup>
import CardProject from '@/components/card_project.vue'
import data from '../store/data'
</script>

<template>
  <div class="max-md:hidden carousel w-full h-full animate-fade-in">
    <div
      class="carousel-item relative w-full"
      v-for="project in data.project"
      :key="project.id"
    >
      <CardProject :project="project" />
    </div>
  </div>
  <div class="min-md:hidden carousel carousel-vertical rounded-box h-96">
    <div
      class="carousel-item h-full"
      v-for="project in data.project"
      :key="project.id"
    >
      <CardProject :project="project" />
    </div>
  </div>
</template>

<style></style>
