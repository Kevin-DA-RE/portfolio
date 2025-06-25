<script setup>
import data  from '../store/data'


</script>

<template>
  <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical overflow-y-auto">
    <li v-for="(exp, index) in data.experience" :key="exp.id">
      <div :class="index % 2 === 0 ? 'timeline-end' : 'timeline-start md:mb-10'">
        <img :src="exp.url_img" :alt="exp.function" class="w-64 h-max rounded-lg object-cover" />
      </div>

      <div :class="index % 2 === 0 ? 'timeline-start mb-10 md:text-end' : 'timeline-end md:mb-10'">
        <time class="font-mono italic">{{ exp.period }}</time>
        <div class="text-lg font-black text-warning">{{ exp.function }}</div>
        <p class="decoration-sky-500">{{ exp.description }}</p>

        <p v-if="exp.stacks" class="text-sm font-bold mt-1 text-sky-400">Stacks : {{ exp.stacks }}</p>

        <ul v-if="exp.tasks" class="list-disc list-inside text-sm mt-2 space-y-1">
          <li v-for="(task, idx) in exp.tasks" :key="idx">{{ task }}</li>
        </ul>
      </div>

      <hr />
    </li>
  </ul>
</template>