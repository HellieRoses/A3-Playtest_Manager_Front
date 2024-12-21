<script setup lang="ts">
import {apiStore} from "@/util/apiStore.ts";
import {ref} from 'vue';
import VideoGameBox from "@/components/VideoGameBox.vue";
import {useRoute} from "vue-router";

const videogames=ref([]);
const route = useRoute();
const id = route.params.id;
if(id == undefined){
  apiStore.getAll('video_games')
    .then(reponseJSON => {
      videogames.value = reponseJSON["member"];
    });
}else{
  console.log("here")
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
