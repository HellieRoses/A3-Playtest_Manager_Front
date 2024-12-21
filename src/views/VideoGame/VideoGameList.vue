<script setup lang="ts">
import {apiStore} from "@/util/apiStore.ts";
import {type Ref, ref} from 'vue';
import VideoGameBox from "@/components/VideoGameBox.vue";
import type {VideoGame} from "@/types.ts";

const videogames:Ref<VideoGame[]>=ref([]);
apiStore.getAll('video_games')
.then(reponseJSON => {
  videogames.value = reponseJSON["member"];
});
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
