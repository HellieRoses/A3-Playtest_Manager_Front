<script setup lang="ts">
import {apiStore} from "@/util/apiStore.ts";
import {type Ref, ref} from 'vue';
import VideoGameBox from "@/components/VideoGameBox.vue";
import {useRoute} from "vue-router";
import type {VideoGame} from "@/types.ts";

const videogames:Ref<VideoGame[]>=ref([]);
const route = useRoute();
const id = route.params.id;
if(id == undefined){
  apiStore.getAll('video_games')
    .then(reponseJSON => {
      videogames.value = reponseJSON["member"];
    });
}else{
  apiStore.getByCompany('video_games', id).then(reponseJSON => {
    videogames.value = reponseJSON["member"];
  })
}
</script>

<template>
  <div class="container">
  <div class="button" v-if="(apiStore.getUtilisateurConnecte())!.type == 'Company'" @click="$router.push({name : 'createVideoGame'})"><p>Create</p></div>
  <div class="list">
    <VideoGameBox
      v-for="videogame in videogames" :key="videogame.id"
      :videogame="videogame"
    />
  </div>
  </div>
</template>

<style scoped>
@import "@/assets/list.css";
.container{
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
}
.button{
  background-color: #38dd38;
}
</style>
