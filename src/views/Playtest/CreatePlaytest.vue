<script setup lang="ts">

import PlaytestForm from "@/components/EntityForms/PlaytestForm.vue";
import {apiStore} from "@/util/apiStore.ts";
import {ref, type Ref} from "vue";
import type {Playtest, VideoGame} from "@/types.ts";

const videogames:Ref<VideoGame[]> = ref([]);
apiStore.getByCompany('video_games',apiStore.utilisateurConnecte.id)
  .then(reponseJSON => {
    videogames.value=reponseJSON["member"];
  })
const playtest:Ref<Playtest>=ref({
  id : 0,
  videoGame : {},
  begin : "",
  end  :"",
  adress : "",
  company : apiStore.utilisateurConnecte,
  visibility :  true,
  nbMaxPlayer : 0,
  typePlayerSearched : ""
})

function createPlaytest(){
  console.log(playtest.value.videogame);
  apiStore.createRessource('playtests',
  {
    videoGame: "/playtest_manager/public/api/video_games/6",
    adress: playtest.value.adress,
    begin: playtest.value.begin,
    end: playtest.value.end,
    visibility: playtest.value.visibility,
    nbMaxPlayer: playtest.value.nbMaxPlayer,
  }
  )
    .then(reponseJSON => {console.log(reponseJSON);})
}

</script>

<template>
  <div class="form">
    <div>
      <h1>Créer un playtest</h1>
    </div>

    <form @submit.prevent="createPlaytest()"> <!-- fonction créer playtest-->
      <PlaytestForm :videoGames="videogames" :playtest="playtest" />
      <div class="bottom-button">
        <button type="submit" class="button">
          <p>Créer</p>
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
