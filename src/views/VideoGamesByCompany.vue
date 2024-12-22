<script setup lang="ts">
import {apiStore} from "@/util/apiStore.ts";
import {ref,type Ref} from 'vue';
import VideoGameBox from "@/components/VideoGameBox.vue";
import {useRoute} from "vue-router";
import type {VideoGame} from "@/types.ts";
import router from "@/router";

const route = useRoute();
const id = route.params.id;

const videogames:Ref<VideoGame[]> = ref([]);
if(apiStore.estConnecte){
  apiStore.getByCompany('video_games',id)
    .then(reponseJSON => {
      videogames.value = reponseJSON["member"];
    });
} else {
  router.push({name:"home"})
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
