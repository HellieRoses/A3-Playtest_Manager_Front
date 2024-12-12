<script setup lang="ts">

import router from "@/router";
</script>

<template>
  <header>
    <div id="mainHeader">
      <img @click="$router.push({name : 'home'})" src="@/assets/img/logo.png" alt="logo">
      <div id="tabs">
      <router-link :to="{name : 'companies'}" active-class="active-header"><p>Entreprises</p></router-link>
        <router-link :to="{name : 'playtests'}" active-class="active-header"><p>Playtests</p></router-link>
        <router-link :to="{name : 'videogames'}" active-class="active-header"><p>Jeux Vidéo</p></router-link>
      </div>
    </div>

    <div id="connectButton">
      <div class="button" id="login"><p>Log In</p></div>
      <div class="button" id="getStarted"><p>Get Started</p></div>
      <router-link :to="{name : 'profile'}" active-class="active-profile">
        <div class="button blueRound" id="profileButton">
        <img src="@/assets/img/profile.png" alt="profile">
      </div>
      </router-link>
    </div>

  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
</style>
