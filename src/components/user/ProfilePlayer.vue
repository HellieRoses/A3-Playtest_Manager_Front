<script setup lang="ts">

import PlaytestMinListBox from "@/components/minList/PlaytestMinListBox.vue";
import {apiStore} from "@/util/apiStore.ts";
import type {Player, Playtest} from "@/types.ts";
import {onBeforeMount, ref, type Ref} from "vue";
const title1 = "Playtest à Venir";
const title2 = "Playtest Passés";
const player:Ref<Player> = ref({
  id: "",
  login: "",
  email: "",
  password: "",
  name:"",
  firstName: "",
  birthdayDate: "",
  favoriteGames: [],
  participants: [],
  type : "",
});

const first4playtestRegiteredBefore:Ref<Playtest[]> = ref([]);
const first4playtestRegiteredAfter:Ref<Playtest[]> = ref([]);

async function getPlayer(){
  await apiStore.getById('players', (apiStore.getUtilisateurConnecte())!.id).then(reponseJSON => {
    player.value = reponseJSON;
  })
}

async function getPlaytestRegistered(){
   await apiStore.getParticipationPlaytest((apiStore.getUtilisateurConnecte())!.id).then(reponseJSON => {
      const playtests = reponseJSON["member"];
      getFirst4PlaytestAfter(playtests);
      getFirst4PlaytestBefore(playtests);
   })
}

function getFirst4PlaytestAfter(list){
  const max = Math.min(4, list.length);
  let current = 0;
  for (let i = 0; i < list.length; i++) {
    if(current < max){
      const playtest = list[i]["playtest"];
      if(new Date(playtest.begin) >= Date.now()){
        first4playtestRegiteredAfter.value.push(playtest);
        current++;
      }
    }else{
      break;
    }
  }
}
function getFirst4PlaytestBefore(list){
  const max = Math.min(3, list.length);
  let current = 0;
  for (let i = 0; i < list.length; i++) {
    if(current <= max){
      const playtest = list[i]["playtest"];
      if(new Date(playtest.begin) < Date.now()){
        first4playtestRegiteredBefore.value.push(playtest);
        current++;
      }
    }else{
      break;
    }
  }
}

onBeforeMount(async() => {
  await getPlayer();
  await getPlaytestRegistered();
})
</script>

<template>
<div class="content">
  <div class="main-content">
    <div>
      <div>
        <h1>{{ player.login }}</h1>
        <p>{{player.firstName}} {{player.name}}</p>
      </div>
      <div class="infos">
        <div class="icon">
          <img src="@/assets/img/calendar.png" alt="calendar" />
          <p>{{ (new Date(player.birthdayDate)).toLocaleString("fr", { dateStyle: 'short' }) }}</p>
        </div>
        <div class="icon">
          <img src="@/assets/img/mail.png" alt="mail" />
          <p>{{ player.email}}</p>
        </div>
        <div class="icon">
          <img src="@/assets/img/games.png" alt="games" />
          <p>{{player.favoriteGames.toString()}}</p>
        </div>
      </div>
    </div>
    <div class="bottom-button"><div class="button" @click="$router.push({name : 'playtests'})"><p>Modifier Son Compte</p></div></div> <!-- TODO mise a jour compte player -->

  </div>
  <div id="additional-content">
    <PlaytestMinListBox :title="title1" :list="first4playtestRegiteredAfter" :userId="Number((apiStore.getUtilisateurConnecte())!.id)" :userType="(apiStore.getUtilisateurConnecte())!.type"/>
    <PlaytestMinListBox :title="title2" :list="first4playtestRegiteredBefore" :userId="Number((apiStore.getUtilisateurConnecte())!.id)" :userType="(apiStore.getUtilisateurConnecte())!.type"/>
  </div>
</div>
</template>

<style scoped>
@import "@/assets/profileStyle.css";
</style>
