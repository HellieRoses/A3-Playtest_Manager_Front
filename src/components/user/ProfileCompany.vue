<script setup lang="ts">

import PlaytestMinListBox from "@/components/minList/PlaytestMinListBox.vue";
import VideoGameMinListBox from "@/components/minList/VideoGameMinListBox.vue";
import type {Company, Playtest, VideoGame} from "@/types.ts";
import {onBeforeMount, ref, type Ref} from "vue";
import {apiStore} from "@/util/apiStore.ts";
const title1 = "Playtests Organisés"
const company:Ref<Company> = ref({
  id: "",
  login: "",
  email: "",
  password: "",
  name: "",
  description: "",
  adress: "",
  contact: "",
  videoGames: ref([]),
  type: "",
})

const playtests:Ref<Playtest[]> = ref([]);
const videogamesFirst4:Ref<VideoGame[]> = ref([]);
async function getCompany(){
  await apiStore.getById('companies', (apiStore.getUtilisateurConnecte())!.id).then(reponseJSON => {
    company.value = reponseJSON;
    for(let i=0; i < Math.min(4, company.value.videoGames.length); i++){
      videogamesFirst4.value.push(company.value.videoGames[i]);
    }
  })
}
async function getPlaytests(){
  await apiStore.getByCompany('playtests', (apiStore.getUtilisateurConnecte())!.id).then(reponseJSON => {
    const playtestsCurrent = reponseJSON["member"];
    for (let i = 0; i < Math.min(4, playtestsCurrent.length); i++) {
      playtests.value.push(playtestsCurrent[i]);
    }
  })
}

onBeforeMount(async() => {
  await getCompany();
  await getPlaytests();
})

</script>

<template>
  <div class="content">
    <div class="main-content">
      <div>
        <div>
          <h1>{{ company.name }}</h1>
          <p id="description">{{company.description}}</p>
        </div>
        <div class="infos">
          <div class="icon">
            <img src="@/assets/img/pin.png" alt="pin" />
            <p>{{ company.adress }}</p>
          </div>
          <div class="icon">
            <img src="@/assets/img/phone.png" alt="phone" />
            <p> {{company.contact}}</p>
          </div>
          <div class="icon">
            <img src="@/assets/img/mail.png" alt="mail" />
            <p> {{company.email}}</p>
          </div>
        </div>
      </div>
      <div class="bottom-button"><div class="button" @click="$router.push({name : 'updateCompany', params: {id: (apiStore.getUtilisateurConnecte())!.id}})"><p>Modifier Son Compte</p></div></div> <!-- TODO formulaire mise à jour compte company -->

    </div>
    <div id="additional-content">
     <VideoGameMinListBox :videogames="videogamesFirst4"/>
      <PlaytestMinListBox :title="title1" :list="playtests" :userId="Number((apiStore.getUtilisateurConnecte())!.id)" :userType="(apiStore.getUtilisateurConnecte())!.type"/>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/profileStyle.css";
#description{
  text-align: justify;
  display: -webkit-box;
  max-width: 35em;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 300px;
}
.icon{
  margin-top: 20px!important;
  margin-bottom: 20px!important;
}
.main-content > div:first-child > div:first-child{
}
</style>
