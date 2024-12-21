<script setup lang="ts">
import {useRoute} from "vue-router";
import {apiStore} from "@/util/apiStore.ts";
import {type Ref, ref} from 'vue';
import type {Company, VideoGame} from "@/types.ts";

const route = useRoute();
const id = route.params.id;
const company:Ref<Company>=ref({
  id:'',
  login:'',
  email: '',
  password: '',
  name: '',
  description: '',
  adress: '',
  contact: '',
  type: '',
  videoGames: ref([]),
});
const listVideoGames:Ref<VideoGame[]>= ref([]);

apiStore.getById('companies', id)
  .then(reponseJSON => {
    company.value = reponseJSON;
    for (let i=0; i<Math.min(3,company.value.videoGames.length); i++) {
      listVideoGames.value.push(company.value.videoGames[i]);
    }
  })

</script>

<template>
  <div class="content">
    <div id="upper-infos">
      <h1 class="title">{{ company.name }}</h1>
      <p id="description">{{ company.description }}</p>
      <div>
        <div class="main-infos">
          <div class="round yellowRound">
            <img src="../../assets/img/pin_light.png" alt="pin"/>
          </div>
          <p class="textOnBlue">{{ company.adress }}</p>
        </div>
        <div class="main-infos">
          <div class="round yellowRound">
            <img src="../../assets/img/phone_light.png" alt="phone"/>
          </div>
          <div>
            <p class="textOnBlue">{{ company.contact }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="lower-infos">
      <h2>Jeux Vidéo</h2>
      <div class="list">
        <router-link :to="{name:'videogame',params:{id:videogame.id}}" class="block"
                     v-for="videogame in listVideoGames" :key="videogame.id"
        >
          <p>{{videogame.name}}</p>
        </router-link>
      </div>
      <div class="bottom-button">
        <div class="button" @click="$router.push({name : 'videogamesByCompany',params: {id:company.id}})"><p>Voir plus</p></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/singleVue.css";
  .content{
    padding: 15px;
    & #upper-infos{
      & #description{
        width: 80%;
        text-align: center;
        font-size: 18px;
      }
      & > div{
        display: flex;
        justify-content: space-around;
        width: 80%;
        margin-top: 40px;
      }
    }
  }
</style>
