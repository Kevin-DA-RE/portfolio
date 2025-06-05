<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbHeading 
} from 'flowbite-vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <fwb-navbar class="h-15">
    <template #logo>
      <fwb-navbar-link>
        <RouterLink to="/">
          <fwb-heading tag="h5">Kevin DA RE</fwb-heading></RouterLink>
      </fwb-navbar-link>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link>
          <RouterLink to="/about">Bio</RouterLink>          
        </fwb-navbar-link>
        <fwb-navbar-link >
          <RouterLink to="/experience">Experience</RouterLink>
        </fwb-navbar-link>
        <fwb-navbar-link>
          <RouterLink to="/skills">Compétences</RouterLink>
        </fwb-navbar-link>
        <fwb-navbar-link>
          <RouterLink to="/contact">Contact</RouterLink>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
  <div class="h-[calc(100vh-4.5rem)] bg-blue-500">
    <router-view />
  </div>

</template>