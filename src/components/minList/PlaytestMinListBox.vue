<script setup lang="ts">

import MiniBlockPlaytest from "@/components/minList/MiniBlockPlaytest.vue";
import type {Playtest} from "@/types.ts";

defineProps<{title:string, list:Playtest[], playerId:number}>();

</script>

<template>
<div class="blockContent">
  <h2>{{ title }}</h2>
  <div class="list">
    <MiniBlockPlaytest v-for="playtest in list" :key="playtest.id" :idPlaytest="String(playtest.id)" />
  </div>
  <div class="bottom-button"><div class="button" @click="$router.push({name : 'playtestsPlayer', params : {type : 'Player', id: playerId}})"><p>Voir plus</p></div></div>
</div>
</template>

<style scoped>
@import '@/assets/minList.css';
</style>
