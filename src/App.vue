<script setup lang="ts">

import router from "@/router";
</script>

<template>
  <header>
    <div id="mainHeader">
      <img @click="$router.push({name : 'home2'})" src="@/assets/img/logo.png" alt="logo">
      <div id="tabs">
      <div><p>Entreprises</p></div>
      <div><p>Playtests</p></div>
      <div><p>Jeux Vidéo</p></div>
      </div>
    </div>

    <div id="connectButton">
      <div class="button" id="login"><p>Log In</p></div>
      <div class="button" id="getStarted"><p>Get Started</p></div>
      <div class="button" id="profileButton">
        <img src="@/assets/img/profile.png" alt="profile">
      </div>
    </div>

  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
@import "@/assets/app.css";
</style>
