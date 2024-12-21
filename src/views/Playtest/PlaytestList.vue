<script setup lang="ts">
import {ref} from 'vue';
import { apiStore } from '@/util/apiStore'
import PlaytestBox from "@/components/PlaytestBox.vue";
import {useRoute} from "vue-router";
const playtests=ref([]);
const route = useRoute();
const type = route.params.type;
const id = route.params.id;
if(type == undefined){
  apiStore.getAll('playtests')
    .then(reponseJSON => {
      playtests.value = reponseJSON["member"];
    });
}else{
  if(type == 'Player'){
    apiStore.getParticipationPlaytest(Number(id))
      .then(reponseJSON => {
        const participations = reponseJSON["member"];
        for(var i in participations){
          playtests.value.push(participations[i]["playtest"]);
        }
        playtests.value.sort((a,b) => {
          let dateA = new Date(a.begin);
          let dateB = new Date(b.begin);
          if(dateA >= dateB){
            return -1;
          }else{
            return 1;
          }
        })
      });
  }
}

console.log(playtests);
</script>

<template>
  <div class="list">
    <PlaytestBox
      v-for="playtest of playtests" :key="playtest.id"
      :playtest="playtest"
    />
  </div>
</template>

<style scoped>
@import "@/assets/list.css";
</style>
