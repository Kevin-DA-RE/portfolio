<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbP
} from 'flowbite-vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-link>
        <RouterLink to="/">Kevin DA RE</RouterLink>
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
  <router-view />
</template>

