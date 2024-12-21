<script setup lang="ts">

import type {VideoGame} from "@/types.ts";

defineProps<{videoGame:VideoGame}>()
</script>

<template>
  <router-link :to="{name : 'videogame', params : {id: videoGame.id}}">
    <p>{{videoGame.name}}</p>
  </router-link>
</template>

<style scoped>
a {
  background-color: #4B5CB4;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  & p{
    font-size: 24px;
    color: #FFFFFF
  }
}
</style>
