import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Presentation from '../views/Presentation.vue'
import Experience from '../views/Experience.vue'
import Skills from '../views/Skills.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'presentation',
      component: Presentation,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience,
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
})

export default router
