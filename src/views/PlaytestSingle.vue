<script setup lang="ts">
import {useRoute} from "vue-router";
import {apiStore} from "@/util/apiStore.ts";
import {ref} from 'vue';

const route = useRoute();
const id = route.params.id;
const playtest = ref();

apiStore.getById('playtests', id)
  .then(reponseJSON => {
    playtest.value = reponseJSON;
  })

function canSubscribe(){
  if (apiStore.utilisateurConnecte/*TODO utilisateurconnecté est un Player et pas une company */){
    if (playtest.value.participants.length < playtest.value.nbMaxPlayer && !playtest.value.participants.contains(utilisateurConnecte))
    return true;
  }
  return false;
}
function canUnSubscribe(){
  if (apiStore.utilisateurConnecte/*TODO utilisateurconnecté est un Player et pas une company */){
    if (playtest.value.participants.contains(utilisateurConnecte)){
      return true;
    }
  }
  return false;
}
function canDelete(){
  if (apiStore.utilisateurConnecte){
    if (playtest.value.company == apiStore.utilisateurConnecte){
      return true;
    }
  }
  return false;
}

</script>

<template>
  <div class="content">
    <div id="upper-infos">
      <h1 class="title">Playtest {{playtest.id}}</h1>
      <div>
        <router-link :to="{name : 'company',params:{id:playtest.company.id}}">
          <div class="main-infos">
            <div class="round yellowRound">
              <img src="@/assets/img/building.png" alt="building"/>
            </div>
            <div>
              <p class="textOnBlue">{{ playtest.company.name }}</p>
            </div>
          </div>
        </router-link>
        <div class="main-infos">
          <div class="round yellowRound">
            <img src="@/assets/img/calendar_light.png" alt="calendar"/>
          </div>
          <div>
            <p class="textOnBlue">Début : {{ (new Date(playtest.begin)).toLocaleString("fr") }}</p>
            <p class="textOnBlue">Fin : {{ (new Date(playtest.end)).toLocaleString("fr") }}</p>
          </div>
        </div>
        <router-link :to="{name : 'videogame',params:{id:playtest.videoGame.id}}">
          <div class="main-infos">
            <div class="round yellowRound">
              <img src="@/assets/img/videoGame.png" alt="videogame"/>
            </div>
            <div>
              <p class="textOnBlue">{{ playtest.videoGame.name }}</p>
            </div>
          </div>
        </router-link>
        <div class="main-infos">
          <div class="round yellowRound">
            <img src="@/assets/img/pin_light.png" alt="pin"/>
          </div>
          <p class="textOnBlue">{{ playtest.adress }}</p>
        </div>
      </div>
    </div>
    <div id="lower">
      <div><h2>Type de joueurs Recherchés</h2></div>
      <!-- TODO change to nbMaxPlayer -->
      <p>{{ playtest.typePlayerSearched }}</p>
      <div class="bottom-button">
        <div class="button" v-if="canSubscribe" @click=""><p>S'inscrire</p></div>
      </div> <!-- TODO inscrire user à un playtest à n'afficher que si player + pas inscrit -->
      <div class="bottom-button">
        <div class="button" v-if="canUnSubscribe" @click=""><p>Désinscrire</p></div>
      </div> <!-- TODO inscrire user à un playtest à n'afficher que si player + inscrit-->
      <div class="bottom-button">
        <div class="button delete-button" v-if="canDelete" @click=""><p>Supprimer</p></div>
      </div> <!-- TODO inscrire user à un playtest à n'afficher que si company qui a créé-->
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/singleVue.css";

.content {
  align-items: center;
  padding: 15px;
  & #upper-infos{
    & > div{
      display: grid;
      grid-template-columns: 1fr 1Fr;
      row-gap: 20%;
      column-gap: 15%;
      width: 100%;
      margin-top: 40px;
    }

    & .textOnBlue {
      font-size: 30px;
    }
  }

  .button {
    background-color: #BBFFE9;

    & p {
      font-weight: normal;
    }

    padding-left: 40px;
    padding-right: 40px;

  }

  #lower {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;

    h2 {
      font-size: 35px;
      color: #FFFFFF;
    }

    & > div {
      width: 100%;
    }

    & .bottom-button {
      display: flex;
      justify-content: center;
    }

    & > p {
      width: 100%;
      font-size: 30px;
      margin-bottom: 50px;
      margin-left: 100px;
    }

  }
}
</style>
