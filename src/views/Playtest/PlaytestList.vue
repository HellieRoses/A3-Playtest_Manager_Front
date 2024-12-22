<script setup lang="ts">
import {type Ref, ref} from 'vue';
import { apiStore } from '@/util/apiStore'
import PlaytestBox from "@/components/PlaytestBox.vue";
import {useRoute} from "vue-router";
import type {Playtest} from "@/types.ts";
const playtests:Ref<Playtest[]>=ref([]);
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
    apiStore.getParticipationPlaytest(id)
      .then(reponseJSON => {
        const participations = reponseJSON["member"];
        for(const i in participations){
          playtests.value.push(participations[i]["playtest"]);
        }
        playtests.value.sort((a,b) => {
          const dateA = new Date(a.begin);
          const dateB = new Date(b.begin);
          if(dateA >= dateB){
            return -1;
          }else{
            return 1;
          }
        })
      });
  }
}

</script>

<template>
  <div class="container">
    <div class="button" v-if="(apiStore.getUtilisateurConnecte())!.type == 'Company'" @click="$router.push({name : 'createPlaytest'})"><p>Create</p></div>
    <div class="list" v-if="playtests.length > 0">
      <PlaytestBox
        v-for="playtest of playtests" :key="playtest.id"
        :playtest="playtest"
      />
    </div>
    <p v-else class="textOnBlue">Il n'y a aucune Session de Jeu disponible</p>
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
