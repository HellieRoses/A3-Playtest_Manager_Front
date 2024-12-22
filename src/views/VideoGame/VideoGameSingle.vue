<script setup lang="ts">
import {useRoute} from "vue-router";
import {apiStore} from "@/util/apiStore.ts";
import {onBeforeMount, type Ref, ref} from 'vue';
import type {Playtest, VideoGame} from "@/types.ts";
import router from "@/router";
import {notify} from "@kyvg/vue3-notification";

const route = useRoute();
const id = route.params.id;
const videogame:Ref<VideoGame> = ref({
  id: 0,
  name: "",
  description: "",
  type: "",
  support: "",
  playtests:  "",
  company: ""
});
const listePlayTests:Ref<Playtest[]> = ref([]);
const canDeleteModify = ref(false);

onBeforeMount(async () => {
    await apiStore.getById('video_games', id)
      .then(reponseJSON => {
        if (reponseJSON.status != undefined) {
          if (reponseJSON.status != 200) {
            router.push({name: "videogames"})
          }
        } else {
          videogame.value = reponseJSON;
          for (let i = 0; i < Math.min(6, videogame.value.playtests.length); i++) {
            listePlayTests.value.push(videogame.value.playtests[i]);
          }
          canDelete();
        }

      })
})


function canDelete() {
  if ((apiStore.getUtilisateurConnecte())!.type == 'Company'){
    if (videogame.value.company.id == (apiStore.getUtilisateurConnecte()).id){
      canDeleteModify.value = true;
      return ;
    }
  }
  canDeleteModify.value = false;
  return ;
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
  <div class="content">
    <div id="buttons">
      <div class="button round" id="edit" v-if="canDeleteModify" @click="$router.push({name : 'updateVideoGame', params: {id: videogame.id}})" ><img src="@/assets/img/edit.png" alt="edit"/></div>
      <div class="button round delete-button"  v-if="canDeleteModify" @click="deleteVG"><img src="@/assets/img/delete.png" alt="delete"/></div>
    </div>
    <div id="upper-infos">
      <div id="title-div">
        <h1 class="title">{{ videogame.name }}</h1>
        <p id="description">{{videogame.description}}</p>
        <!-- TODO inscrire user à un playtest à n'afficher que si company qui a créé-->
      </div>
      <div class="list">
        <router-link :to="{name : 'company',params: {id:videogame.company.id}}">
          <div class="main-infos">
            <div class="round yellowRound">
              <img src="@/assets/img/building.png" alt="building"/>
            </div>
            <p class="textOnBlue">{{ videogame.company.name }}</p>
          </div>
        </router-link>
        <div class="main-infos">
          <div class="round yellowRound">
            <img src="@/assets/img/controller_2.png" alt="controller"/>
          </div>
          <div>
            <p class="textOnBlue">{{ videogame.type }}</p>
          </div>
        </div>
        <div class="main-infos">
          <div class="round yellowRound">
            <img src="@/assets/img/desktop.png" alt="desktop"/>
          </div>
          <div>
            <p class="textOnBlue">{{ videogame.support.toString() }}</p>
          </div>
        </div>
      </div>
    </div>

    <div id="lower-infos">
      <h2>Playtests</h2>
     <div class="list">
        <router-link :to="{name:'playtest',params:{id:playtest.id}}" class="block"
                     v-for="playtest in listePlayTests" :key="playtest.id"
        >
          <p>Playtest {{playtest.id}}</p>
        </router-link>
      </div>
      <div class="bottom-button">
        <div class="button" @click="$router.push({name : 'playtestsByVideoGames',params:{id:videogame.id}})"><p>Voir plus</p></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/singleVue.css';

.content {
  width: 100%;
  position: relative;
  & #upper-infos {
    & div#title-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;

      & h1 {
        margin-bottom: 0 !important;
      }

      & .button {
        margin-left: 15px;
      }
    }

    & > div:nth-child(2) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 80%;
      margin-top: 40px;
    }

    & .textOnBlue {
      font-size: 30px;
    }
  }

  & #lower-infos {
    & h2 {
      margin-bottom: 0;
    }
    & .list{
      row-gap: 3em!important;
      column-gap: 10%;
    }
  }
}
#edit{
background-color: #38dd38;
}
#buttons{
  display: flex;
  position: absolute;
  right: 10px;
  top: 10px;
  width: fit-content;
  height: fit-content;
  & .button:first-child{
    margin-right: 10px;
  }
  & img{
    width: 48px;
    height: 48px;
  }
}

#upper-infos {
  & #description{
    width: 80%;
    text-align: center;
    font-size: 18px;
    margin-top: 50px;
  }
  & > div{
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin-top: 40px;
  }
}
</style>
