<script setup lang="ts">

import MiniBlockVideoGame from "@/components/minList/MiniBlockVideoGame.vue";
</script>

<template>
  <div class="blockContent">
    <h2>{{ title }}</h2>
    <div class="list">
      <MiniBlockVideoGame />
      <MiniBlockVideoGame />
      <MiniBlockVideoGame />
      <MiniBlockVideoGame />
    </div>
    <div class="bottom-button"><div class="button" @click="$router.push({name : 'videogames'})"><p>Voir plus</p></div></div> <!-- TODO mettre la liste des jeux vidéos de l'entreprise -->
  </div>
</template>

<style scoped>
@import '@/assets/minList.css';
</style>
