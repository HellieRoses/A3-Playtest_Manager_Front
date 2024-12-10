<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div id="mainHeader">
      <img src="@/assets/img/logo.png" alt="logo">
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
    <TheWelcome />
  </main>
</template>

<style scoped>
@import "@/assets/app.css";
</style>
