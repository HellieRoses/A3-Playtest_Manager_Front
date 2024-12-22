<script setup lang="ts">

import PlaytestForm from "@/components/EntityForms/PlaytestForm.vue";
import {ref, type Ref} from "vue";
import type {Company, Playtest, VideoGame} from "@/types.ts";
import {apiStore} from "@/util/apiStore.ts";
import {useRoute} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import router from "@/router";
const videogames:Ref<VideoGame[]> = ref([]);
const route = useRoute();
const id = route.params.id;
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
apiStore.getById('playtests',id).then(reponseJSON => {
  playtest.value= reponseJSON;
})
function updateP(){
  if(playtest.value.adress == ""){
    playtest.value.adress = playtest.value.company.adress;
  }
  apiStore.createRessource('playtests',
    {
      videoGame: playtest.value.videoGame["@id"],
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
          title: "Playtest non-modifié",
          text: "Il y a eu un problème lors de la modification du playtest"
        });
      }
    } else {
      router.push({name:"playtest", params :{id: reponseJSON.id}})
      notify({
        type: "success",
        title: "Playtest modifié",
        text: "Le playtest n° " + reponseJSON.id + " a été modifié."
      });


    }

  })
}
function deleteP(){
  if ((apiStore.getUtilisateurConnecte())!.type == "Company") {
    apiStore.deleteRessource('playtests', playtest.value.id).then(reponseJSON => {
      if (reponseJSON.code != undefined) {
        if (reponseJSON.code != 200) {
          notify({
            type: "error",
            title: "Suppression échouée",
            text: "Il y a eu un problème lors de la suppression",
          });
        }
      } else {
        router.push({"name": "playtests"})
        notify({
          type: "success",// on peut aussi utiliser warn et error, ou en définir d'autres
          title: "Suppression réussie",
          text: "Vous avez bien supprimé le playtest " + playtest.value.id,
        });
      }
    })
  }
}
</script>

<template>
  <div class="form">
    <div>
      <h1>Modifier un playtest</h1>
    </div>

    <form @submit.prevent="updateP"> <!-- fonction modifier playtest-->
      <PlaytestForm :videoGames="videogames"  :playtest="playtest"/>
      <div class="bottom-button">
        <button type="submit" class="button">
          Modifier
        </button>
        <div class="button delete-button" @click="deleteP" >
          <p>Supprimer</p>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import "@/assets/formUpdateStyle.css";

</style>
