<script setup lang="ts">
import {useRoute} from "vue-router";
import {apiStore} from "@/util/apiStore.ts";
import {type Ref, ref} from 'vue';
import type {Playtest} from "@/types.ts";

const route = useRoute();
const id = route.params.id;
const videogame = ref();
const listePlayTests:Ref<Playtest[]> = ref([]);

apiStore.getById('video_games', id)
  .then(reponseJSON => {
    videogame.value = reponseJSON;
    for (let i = 0; i < Math.min(6, videogame.value.playtests.length); i++) {
      listePlayTests.value.push(videogame.value.playtests[i]);
    }
  })

function canDelete() {
  if (apiStore.utilisateurConnecte){
    if (videogame.value.company == apiStore.utilisateurConnecte){
      return true;
    }
  }
  return false;
}
</script>

<template>
  <div class="content">
    <div id="upper-infos">
      <div id="title-div">
        <h1 class="title">{{ videogame.name }}</h1>
        <div class="button delete-button" v-if="canDelete()" ><p>Supprimer</p></div><!-- TODO supprimer VideGame-->
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

  & #upper-infos {
    & div#title-div {
      display: flex;
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
</style>
