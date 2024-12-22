<script setup lang="ts">
import type {Playtest} from '@/types';
import {apiStore} from "@/util/apiStore.ts";
defineProps<{playtest: Playtest}>();
</script>

<template>
  <div class="content-box bigger-box" v-if="playtest.visibility || apiStore.estConnecte && playtest.company.id == (apiStore.getUtilisateurConnecte())!.id">
    <div>
      <router-link :to="{name: 'playtest',params:{id:playtest.id} }" class="clickable" id="router-link">
        <img src="@/assets/img/playtest.png" alt="playtest"/>
        <p>Playtest {{ playtest.id }}</p>
      </router-link>
      <p>Début : {{ (new Date(playtest.begin)).toLocaleString("fr") }}</p>
      <p>Fin :  {{ (new Date(playtest.end)).toLocaleString("fr") }}</p>
      <p>Lieu : {{ playtest.adress }}</p>
    </div>
    <div id="infos">
      <div>
        <div class="round blueRound">
          <img src="@/assets/img/building.png" alt="building"/>
        </div>
        <p>{{playtest.company.name}}</p>
      </div>
      <div>
        <div class="round blueRound">
          <img src="@/assets/img/videoGame.png" alt="building"/>
        </div>
        <p>{{playtest.videoGame.name}}</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import "@/assets/boxList.css";
</style>
