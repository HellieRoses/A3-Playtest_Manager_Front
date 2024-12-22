<script setup lang="ts">

import PlaytestForm from "@/components/EntityForms/PlaytestForm.vue";
import {apiStore} from "@/util/apiStore.ts";
import {ref, type Ref} from "vue";
import type {Company, Playtest, VideoGame} from "@/types.ts";
import {notify} from "@kyvg/vue3-notification";
import router from "@/router";

const videogames:Ref<VideoGame[]> = ref([]);
apiStore.getByCompany('video_games',(apiStore.getUtilisateurConnecte())!.id)
  .then(reponseJSON => {
    videogames.value=reponseJSON["member"];
  })

const company:Ref<Company> = ref({
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
})
const playtest:Ref<Playtest>=ref({
  id : 0,
  videoGame : {
    id: 0,
    name: "",
    description: "",
    type: "",
    support: ref([]),
    playtests: ref([]),
    company: company
  },
  begin : "",
  end  :"",
  adress : "",
  company : company,
  visibility :  true,
  nbMaxPlayer : 0,
  typePlayerSearched : ""
})
apiStore.getById('companies',playtest.value.company.id).then(reponseJSON => {
  playtest.value.company = reponseJSON;
})

function createPlaytest(){
  if(playtest.value.adress == ""){
    playtest.value.adress = playtest.value.company.adress;
  }
  apiStore.createRessource('playtests',
  {
    videoGame: "/playtest_manager/public/api/video_games/"+playtest.value.videoGame.id,
    adress: playtest.value.adress,
    begin: playtest.value.begin,
    end: playtest.value.end,
    visibility: playtest.value.visibility,
    nbMaxPlayer: playtest.value.nbMaxPlayer,
    typePlayerSearched : playtest.value.typePlayerSearched
  }).then(reponseJSON => {
    if (reponseJSON.code != undefined) {
      if (reponseJSON.code != 200) {
        notify({
          type: "error",
          title: "Playtest non-créé",
          text: "Il y a eu un problème lors de la création du playtest"
        });
      }
    } else {
      notify({
        type: "success",
        title: "Playtest créé",
        text: "Le playtest n° " + reponseJSON.id + " a été créé."
      });

      router.push({name:"playtest", params :{id: reponseJSON.id}})
    }

  })
}

</script>

<template>
  <div class="form">
    <div>
      <h1>Créer un playtest</h1>
    </div>

    <form @submit.prevent="createPlaytest"> <!-- fonction créer playtest-->
      <PlaytestForm :videoGames="videogames" :playtest="playtest" />
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
