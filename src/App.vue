<script setup lang="ts">
import router from "@/router";
import {apiStore} from "@/util/apiStore.ts";
import {onMounted, ref} from "vue";
import {Notifications} from "@kyvg/vue3-notification";

const loaded = ref(false);

async function deconnect() {
  await apiStore.logout();
}

onMounted(async () => {
  try {
    await apiStore.refresh();
  } catch (error) {

  } finally {
    loaded.value = true;
  }
});
</script>

<template>
  <header>
    <div id="mainHeader">
      <img @click="$router.push({name : 'home'})" src="@/assets/img/logo.png" alt="logo">
      <div id="tabs" v-if="loaded">
      <router-link :to="{name : 'companies'}" active-class="active-header"><p>Entreprises</p></router-link>
        <router-link :to="{name : 'playtests'}" active-class="active-header"><p>Playtests</p></router-link>
        <router-link :to="{name : 'videogames'}" active-class="active-header"><p>Jeux Vidéo</p></router-link>
      </div>
    </div>

    <div id="connectButton">
      <div v-if="!apiStore.estConnecte" @click="$router.push({name:'login', params: {type: 'login'}})" class="button" id="login"><p>Log In</p></div>
      <div v-if="apiStore.estConnecte" @click="deconnect" class="button" id="login"><p>Log Out</p></div>
      <div v-if="!apiStore.estConnecte" @click="$router.push({name:'register', params: {type: 'register'}})" class="button" id="getStarted"><p>Get Started</p></div>
      <router-link :to="{name : 'profile'}" active-class="active-profile">
        <div class="button round blueRound" id="profileButton">
        <img src="@/assets/img/profile.png" alt="profile">
      </div>
      </router-link>
    </div>

  </header>

  <main class="main">
    <notifications />
    <router-view v-if="loaded"/>
    <img id="loader" v-if="!loaded" src="@/assets/img/loader.gif" alt="loader">
  </main>
</template>

<style scoped>
#loader{
  width: 200px;
  height: 172px;
}
</style>
