import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue";


const router = createRouter({
  //Cette ligne indique qu'on utilise la gestion html5 des urls
  //l'argument donné à la fonction createWebHistory sert de base pour la réécriture des routes
  //on utilise donc import.meta.env.BASE_URL qui correspond à la valeur donné à base dans le fichier vite.config.ts
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/companies',
      name : 'companies',
      component : () => import('@/views/CompanyList.vue')
    },
    {
      path: '/company/:id',//todo change to /companies/:id
      name : 'company',
      component : () => import('@/views/CompanySingle.vue')
    },
    {
      path: '/company/:id/videogames',
      name : 'videogamesByCompany',
      component : () => import('@/views/VideoGamesByCompany.vue')
    },
    {
      path: '/videogames',
      name : 'videogames',
      component : () => import('@/views/VideoGameList.vue')
    },
    {
      path: '/videogame',//todo change to /videogames/:id
      name : 'videogame',
      component : () => import('@/views/VideoGameSingle.vue')
    },
    {
      path: '/playtests',
      name : 'playtests',
      component : () => import('@/views/PlaytestList.vue')
    },
    {
      path: '/playtest',//todo change to /playtests/:id
      name : 'playtest',
      component : () => import('@/views/PlaytestSingle.vue')
    }
  ]
})

export default router
