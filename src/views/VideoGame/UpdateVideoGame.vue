<script setup lang="ts">

import VideoGameForm from "@/components/EntityForms/VideoGameForm.vue";
import {ref, type Ref} from "vue";
import type {VideoGame} from "@/types.ts";
import {apiStore} from "@/util/apiStore.ts";
import {useRoute} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import router from "@/router";
const route = useRoute();
const idVG =route.params.id;
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

apiStore.getById("video_games", idVG).then(reponseJSON => {
  videogame.value = reponseJSON;
})

function update(){
  let support;
  const supportCurrent = videogame.value.support.toString();
  if(supportCurrent.includes(",")){
    support = supportCurrent.split(",");
  }else if(supportCurrent.includes("-")){
    support = supportCurrent.split("-");
  }else{
    support = supportCurrent.split("");
  }
  apiStore.updateRessource("video_games",idVG, {
    name: videogame.value.name,
    description: videogame.value.description,
    support: support,
    type: videogame.value.type
  }).then( reponseJSON => {
    if (reponseJSON.code != undefined) {
      if (reponseJSON.code != 200) {
        notify({
          type: "error",
          title: "Jeux video non-modifié",
          text: "Il y a eu un problème lors de la modification du jeux vidéo"
        });
      }
    } else {
      notify({
        type: "success",
        title: "Jeux vidéo modifié",
        text: "Le jeu " + videogame.value.name + " a été modifié."
      });
      router.push({name:"videogame", params :{id: reponseJSON.id}})
    }
  })
}

function deleteVG(){
  if((apiStore.getUtilisateurConnecte())!.type == 'Company'){
    if( confirm('Etes-vous sûre de supprimer le jeux vidéo '+videogame.value.name) ){
      apiStore.deleteRessource("video_games",videogame.value.id).then(reponseJSON => {
        if (reponseJSON.code != undefined) {
          if (reponseJSON.code != 200) {
            notify({
              type: "error",
              title: "Jeux video non-supprimé",
              text: "Il y a eu un problème lors de la suppression du jeux vidéo"
            });
          }
        } else {
          notify({
            type: "success",
            title: "Jeux vidéo supprimé",
            text: "Le jeu " + videogame.value.name + " a été supprimé."
          });
          router.push({name:"videogames"})
        }
      })
    }
  }
}
</script>

<template>
  <div class="form">
    <div>
      <h1>Modifier un jeux vidéo</h1>
    </div>

    <form @submit.prevent="update">
      <VideoGameForm :videogame="videogame"/>
      <div class="bottom-button">
        <button type="submit" class="button">
          Modifier
        </button>
        <div class="button delete-button" @click="deleteVG">
          <p>Supprimer</p>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import "@/assets/formUpdateStyle.css";

</style>
