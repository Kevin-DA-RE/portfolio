<script setup>


import { RouterView } from 'vue-router'
</script>

<template>
<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a >daisyUI</a>
    <RouterLink class="btn btn-ghost text-xl" to="/">Kevin DA RE</RouterLink>
  </div>
      <RouterLink class="btn btn-ghost text-xl" to="/experience">Experience</RouterLink>
      <RouterLink class="btn btn-ghost text-xl" to="/skills">Competences</RouterLink>
      <RouterLink class="btn btn-ghost text-xl" to="/about">A propos</RouterLink>
      <RouterLink class="btn btn-ghost text-xl" to="/contact">Contact</RouterLink>

</div>
   <router-view />
</template>