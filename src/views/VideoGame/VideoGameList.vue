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
  <div class="list">
    <VideoGameBox
      v-for="videogame in videogames" :key="videogame.id"
      :videogame="videogame"
    />

  </div>
</template>

<style scoped>
@import "@/assets/list.css";
</style>
