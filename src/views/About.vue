<script setup>
import data from '../store/data'
</script>

<template>
  <div class="bg-cyan-600 flex flex-row justify-around">
    <div class="" v-for="about in data.about" :key="about.id">
      <h1 class="text-xl font-bold text-center text-white">{{ about.name }}</h1>
    </div>
  </div>
  <div>
    <div
      class="collapse bg-base-100 border border-base-300 animate-fade-in"
      v-for="aboutDetails in data.aboutDetails"
    >
      <input type="checkbox"/>
      <div class="collapse-title font-semibold">
        <h2>
          {{ aboutDetails.title }}
        </h2>
        <!-- Effet SVG lumineux -->
        <svg
          class="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <rect
            x="2"
            y="2"
            width="96"
            height="96"
            rx="8"
            ry="8"
            fill="none"
            stroke="cyan"
            stroke-width="2"
            class="animate-dash"
          />
        </svg>
      </div>
      <div class="collapse-content text-sm ">
        <p v-html="aboutDetails.descriptif.replace(/\n/g, '<br>')"></p>
      </div>
    </div>
  </div>
</template>

<style></style>
