<script setup lang="ts">

import MiniBlockPlaytest from "@/components/minList/MiniBlockPlaytest.vue";

defineProps<{title:string}>();
</script>

<template>
<div class="blockContent">
  <h2>{{ title }}</h2>
  <div class="list">
    <MiniBlockPlaytest />
    <MiniBlockPlaytest />
    <MiniBlockPlaytest />
    <MiniBlockPlaytest />
  </div>
  <div class="bottom-button"><div class="button" @click="$router.push({name : 'playtests'})"><p>Voir plus</p></div></div> <!-- TODO mettre la liste des playtests de l'utilisateur -->
</div>
</template>

<style scoped>
@import '@/assets/minList.css';
</style>
