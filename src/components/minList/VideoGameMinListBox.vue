<script setup lang="ts">

import MiniBlockVideoGame from "@/components/minList/MiniBlockVideoGame.vue";
import type {VideoGame} from "@/types.ts";
import {apiStore} from "@/util/apiStore.ts";
defineProps<{videogames: VideoGame[]}>();
</script>

<template>
  <div class="blockContent">
    <h2>Jeux Vidéo</h2>
    <div class="list">
      <MiniBlockVideoGame v-for="videogame in videogames" :key="videogame.id" :videoGame="videogame" />
    </div>
    <div class="bottom-button"><div class="button" @click="$router.push({name : 'videogamesCompany', params: { id : apiStore.utilisateurConnecte.id}})"><p>Voir plus</p></div></div> <!-- TODO mettre la liste des jeux vidéos de l'entreprise -->
  </div>
</template>

<style scoped>
@import '@/assets/minList.css';
</style>
