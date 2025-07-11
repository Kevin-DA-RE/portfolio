<script setup>
import CardProject from '@/components/card_project.vue';
import data  from '../store/data'
</script>

<template>
<div class="carousel w-full h-full" >
    <CardProject :project="project" v-for="project in data.project" :key="project.id"/>
</div>
</template>

<style>
</style>
