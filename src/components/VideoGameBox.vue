<script setup lang="ts">
import type {VideoGame} from '@/types';
defineProps<{videogame: VideoGame}>();
</script>

<template>
  <div class="content-box bigger-box">
    <div>
      <router-link :to="{name: 'videogame',params:{id:videogame.id} }" class="clickable" id="router-link">
        <img src="@/assets/img/videoGame.png" alt="videogame"/>
        <p>{{ videogame.name }}</p>
      </router-link>
      <p>Type : {{ videogame.type }}</p>
      <p>Support : {{videogame.support.toString()}}</p>
    </div>
    <div id="infos">
      <div>
        <div class="blueRound">
          <img src="@/assets/img/playtest.png"/>
        </div>
        <p>{{videogame.playtests.length}}</p>
      </div>
      <div>
        <div class="blueRound">
          <img src="@/assets/img/building.png"/>
        </div>
        <p>{{ videogame.company.name }}</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import "@/assets/boxList.css";
.bigger-box div:first-child > p{
  margin-bottom: 15px;
  margin-top: 15px;
}
</style>
