<script setup lang="ts">

import VideoGameForm from "@/components/EntityForms/VideoGameForm.vue";
import {ref, type Ref} from "vue";
import type {VideoGame} from "@/types.ts";
import {apiStore} from "@/util/apiStore.ts";
import {notify} from "@kyvg/vue3-notification";
import router from "@/router";
const videogame:Ref<VideoGame> = ref({
  id: 0,
  name: "",
  description: "",
  type: "",
  support: ref([]),
  playtests: ref([]),
  company: {
    id:'',
    login:'',
    email:'',
    password:'',
    name: "",
    description: "",
    adress: "",
    contact: "",
    type: "",
    videoGames: ref([]),
  }
});


function create(){
  if((apiStore.getUtilisateurConnecte())!.type == "Company"){
    let support;
    const supportCurrent = videogame.value.support.toString();
    if(supportCurrent.includes(",")){
      support = supportCurrent.split(",");
    }else if(supportCurrent.includes("-")){
      support = supportCurrent.split("-");
    }else{
      support = supportCurrent.split("");
    }
    apiStore.createRessource('video_games', {
      name: videogame.value.name,
      description: videogame.value.description,
      support: support,
      type: videogame.value.type
    }).then( reponseJSON => {
      if (reponseJSON.code != undefined) {
        if (reponseJSON.code != 200) {
          notify({
            type: "error",
            title: "Jeux video non-créé",
            text: "Il y a eu un problème lors de la création du jeux vidéo"
          });
        }
      } else {
        notify({
          type: "success",
          title: "Jeux vidéo créé",
          text: "Le jeu " + videogame.value.name + " a été créé."
        });
        router.push({name:"videogame", params :{id: reponseJSON.id}})
      }
    })
  }
}
</script>

<template>
  <div class="form">
    <div>
      <h1>Créer un jeux vidéo</h1>
    </div>

    <form @submit.prevent="create"> <!-- fonction créer playtest-->
      <VideoGameForm :videogame="videogame"/>
      <div class="bottom-button">
        <button type="submit" class="button">
          Créer
        </button>
      </div>
    </form>
  </div>

</template>

<style scoped>
@import "@/assets/formUpdateStyle.css";
.bottom-button{
  width: fit-content;
}
</style>
