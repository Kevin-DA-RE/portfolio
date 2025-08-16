<script setup>
import data from '../store/data'
</script>

<template>
  <div class="grid grid-rows-3">
    <div
      v-for="(about, index) in data.about"
      :key="about.id"
      class="flex m-2"
      :class="{
        'items-start justify-start': index === 0,
        'items-center justify-center': index === 1,
        'items-end justify-end': index === data.about.length - 1,
      }"
    >
      <h1
        class="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
      >
        {{ about.name }}
      </h1>
    </div>
  </div>

  <div>
    <div
      class="collapse bg-base-100 border border-base-300 animate-fade-in"
      v-for="aboutDetails in data.aboutDetails"
    >
      <input type="checkbox" />
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
      <div class="collapse-content text-sm max-h-120 overflow-y-auto">
        <p v-html="aboutDetails.descriptif.replace(/\n/g, '<br>')"></p>
      </div>
    </div>
  </div>
</template>
