<script setup>
import data  from '../store/data'
</script>

<template>
  <div class="min-h-full bg-accent-600 animate-fade-in">
    <h1 class="text-cyan-500 font-bold m-5">Compétences</h1>
    <div class="flex flex-row flex-wrap justify-around">
      <div
        v-for="(skill, index) in data.skill"
        class="relative w-24 h-max border border-cyan-500 rounded-lg overflow-hidden"
      >
        <img :src="skill.url_img" :alt="skill.name" class="w-full h-full object-cover rounded-lg p-2" />
        <svg class="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <rect
            x="1" y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="8"
            ry="8"
            fill="none"
            stroke="cyan"
            stroke-width="2"
            stroke-dasharray="180 180"
            stroke-dashoffset="360"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="360"
              to="0"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    </div>    
  </div>
</template>






<style>
.glowing-circuit {
  position: relative;
  border: 3px solid transparent;
  border-radius: 0.5rem;
  background-clip: padding-box;
  z-index: 1;
}

.glowing-circuit::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  padding: 3px;
  background: linear-gradient(0deg, 
    transparent 0%, 
    cyan 50%, 
    transparent 100%);
  border: 3px solid transparent;
  background-size: 200% 200%;
  animation: circuitFlow 2s linear infinite;
  z-index: 2;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  box-sizing: border-box;
}

@keyframes circuitFlow {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

</style>
