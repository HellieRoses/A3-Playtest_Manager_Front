<script setup lang="ts">
import type {Playtest} from '@/types';
defineProps<{playtest: Playtest}>();
</script>

<template>
  <div class="content-box bigger-box">
    <div>
      <router-link :to="{name: 'playtest' }" class="clickable" id="router-link">
        <img src="@/assets/img/playtest.png" alt="playtest"/>
        <p>Playtest {{ playtest.id }}</p>
      </router-link>
      <p>Début : {{ (new Date(playtest.begin)).toLocaleString("fr") }}</p>
      <p>Fin :  {{ (new Date(playtest.end)).toLocaleString("fr") }}</p>
      <p>Lieu : {{ playtest.adress }}</p>
    </div>
    <div id="infos">
      <div>
        <div class="blueRound">
          <img src="@/assets/img/building.png"/>
        </div>
        <p>{{playtest.company.name}}</p>
      </div>
      <div>
        <div class="blueRound">
          <img src="@/assets/img/videoGame.png"/>
        </div>
        <p>{{playtest.videoGame.name}}</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import "@/assets/boxList.css";
</style>
