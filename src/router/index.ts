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
      component : () => import('@/views/Company/CompanyList.vue')
    },
    {
      path: '/company/:id',
      name : 'company',
      component : () => import('@/views/Company/CompanySingle.vue')
    },
    {
      path: '/company/:id/videogames',
      name : 'videogamesByCompany',
      component : () => import('@/views/VideoGamesByCompany.vue')
    },
    {
      path: '/videogames/:id/playtests',
      name : 'playtestsByVideoGames',
      component : () => import('@/views/PlaytestsByVideoGames.vue')
    },
    {
      path: '/videogames',
      name : 'videogames',
      component : () => import('@/views/VideoGame/VideoGameList.vue')
    },
    {
      path: '/videogame/:id',
      name : 'videogame',
      component : () => import('@/views/VideoGame/VideoGameSingle.vue')
    },
    {
      path: '/playtests',
      name : 'playtests',
      component : () => import('@/views/Playtest/PlaytestList.vue')
    },
    {
      path: '/playtest/:id',
      name : 'playtest',
      component : () => import('@/views/Playtest/PlaytestSingle.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component : () => import('@/views/users/ProfileUser.vue')
    },
    {
      path: '/:type',
      name: 'login',
      component : () => import('@/views/users/UserForms.vue')
    },
    {
      path: '/:type',
      name: 'register',
      component : () => import('@/views/users/UserForms.vue')
    },
    {
      path: '/updateCompany', /*TODO CHANGE*/
      name: 'updateCompany',
      component : () => import('@/components/user/FormUpdateCompany.vue')
    },
    {
      path: '/updatePlayer', /*TODO CHANGE*/
      name: 'updatePlayer',
      component : () => import('@/components/user/FormUpdatePlayer.vue')
    },
    {
      path: '/createPlaytest', /*TODO CHANGE*/
      name: 'createPlaytest',
      component : () => import('@/views/Playtest/CreatePlaytest.vue')
    },
    {
      path: '/updatePlaytest', /*TODO CHANGE*/
      name: 'updatePlaytest',
      component : () => import('@/views/Playtest/UpdatePlaytest.vue')
    },
  ]
})

export default router
