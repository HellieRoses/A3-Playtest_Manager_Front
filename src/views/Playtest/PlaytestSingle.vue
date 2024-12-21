<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {apiStore} from "@/util/apiStore.ts";
import {onBeforeMount, ref, type Ref} from 'vue';
import type {Playtest} from "@/types.ts";
import {notify} from "@kyvg/vue3-notification";

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const refid = ref("");
const playtest:Ref<Playtest> = ref({
  id: 0,
  videoGame: {},
  begin: "",
  end: "",
  adress: "",
  company: {},
  visibility: false,
  nbMaxPlayer: 0,
  typePlayerSearched: ""
});
const currentParticipation = ref(-1);
const participationsOfPlayer: Ref = ref([]);

const canSub = ref(false);
const canUnsub = ref(false);
const canDeleteModify = ref(false);

async function chargerPlaytest() {
  await apiStore.getById('playtests', id).then(reponseJSON => {
    playtest.value = reponseJSON;
    refid.value = reponseJSON["@id"];
  })

}

async function getParticipation() {
  await apiStore.getParticipationPlayer(playtest.value.id).then(reponseJSON => {
    participationsOfPlayer.value = reponseJSON["member"];

    canSubscribe();
    canUnSubscribe();
    canDelete();
  })
}


function canSubscribe() {
  if ((apiStore.getUtilisateurConnecte())!.type == "Player") {
    if (participationsOfPlayer.value.length < playtest.value.nbMaxPlayer) {
      for (const i in participationsOfPlayer.value) {
        const participation = participationsOfPlayer.value[i];
        if (participation["player"].id == (apiStore.getUtilisateurConnecte())!.id) {
          const idParticipation = participation["@id"];
          currentParticipation.value = parseInt(idParticipation.split("/").pop());
          canSub.value = false;
          return;
        }
      }
      canSub.value = true;
      return;
    }
  }
  canSub.value = false;
  return;

}

function canUnSubscribe() {
  if ((apiStore.getUtilisateurConnecte())!.type == "Player") {
    for (const i in participationsOfPlayer.value) {
      const participation = participationsOfPlayer.value[i];
      if (participation["player"].id == (apiStore.getUtilisateurConnecte())!.id) {
        canUnsub.value = true;
        return;
      }
    }
  }
  canUnsub.value = false;
}

function canDelete() {
  if ((apiStore.getUtilisateurConnecte())!.type == "Company") {
    if (playtest.value.company.id == (apiStore.getUtilisateurConnecte())!.id) {
      canDeleteModify.value = true;
      return;
    }
  }
  canDeleteModify.value = false;
  return;
}

function subscribe() {
  if ((apiStore.getUtilisateurConnecte())!.type == "Player") {
    apiStore.createParticipation({"playtest": refid.value}).then(reponseJSON => {
      if (reponseJSON.code != undefined) {
        if (reponseJSON.code != 200) {
          notify({
            type: "error",
            title: "Inscription échouée",
            text: "Il y a eu un problème lors de l'inscription",
          });
        }
      } else {
        currentParticipation.value = reponseJSON["id"];
        canSub.value = false;
        canUnsub.value = true;
        notify({
          type: "success",// on peut aussi utiliser warn et error, ou en définir d'autres
          title: "Inscription réussie",
          text: "Vous êtes désormais inscrit au playtest " + playtest.value.id,
        });
      }
    })
  }
}

function unsubscribe() {
  if ((apiStore.getUtilisateurConnecte())!.type == "Player") {
    apiStore.deleteParticipation(currentParticipation.value).then(reponseJSON => {
      if (reponseJSON.code != undefined) {
        if (reponseJSON.code != 200) {
          notify({
            type: "error",
            title: "Désinscription échouée",
            text: "Il y a eu un problème lors de la désincription",
          });
        }
      } else {
        currentParticipation.value = -1;
        canSub.value = true;
        canUnsub.value = false;
        notify({
          type: "success",
          title: "Désinscription réussie",
          text: "Vous êtes désormais désinscrit au playtest " + playtest.value.id,
        });
      }
    })
  }
}

function deletePlaytest() {
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

onBeforeMount(async () => {
  await chargerPlaytest();
  await getParticipation();
})


</script>

<template>
  <div class="content">
    <div id="upper-infos">
      <h1 class="title">Playtest {{ playtest.id }}</h1>
      <div>
        <router-link :to="{name : 'company',params:{id:playtest.company.id}}">
          <div class="main-infos">
            <div class="round yellowRound">
              <img src="../../assets/img/building.png" alt="building"/>
            </div>
            <div>
              <p class="textOnBlue">{{ playtest.company.name }}</p>
            </div>
          </div>
        </router-link>
        <div class="main-infos">
          <div class="round yellowRound">
            <img src="../../assets/img/calendar_light.png" alt="calendar"/>
          </div>
          <div>
            <p class="textOnBlue">Début : {{ (new Date(playtest.begin)).toLocaleString("fr") }}</p>
            <p class="textOnBlue">Fin : {{ (new Date(playtest.end)).toLocaleString("fr") }}</p>
          </div>
        </div>
        <router-link :to="{name : 'videogame',params:{id:playtest.videoGame.id}}">
          <div class="main-infos">
            <div class="round yellowRound">
              <img src="../../assets/img/videoGame.png" alt="videogame"/>
            </div>
            <div>
              <p class="textOnBlue">{{ playtest.videoGame.name }}</p>
            </div>
          </div>
        </router-link>
        <div class="main-infos">
          <div class="round yellowRound">
            <img src="../../assets/img/pin_light.png" alt="pin"/>
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
        <div class="button" v-if="canSub" @click="subscribe"><p>S'inscrire</p></div>
      </div> <!-- TODO inscrire user à un playtest à n'afficher que si player + pas inscrit -->
      <div class="bottom-button">
        <div class="button" v-if="canUnsub" @click="unsubscribe"><p>Désinscrire</p></div>
      </div> <!-- TODO inscrire user à un playtest à n'afficher que si player + inscrit-->
      <div class="bottom-button" v-if="canDeleteModify">
        <div class="button" @click="$router.push({name : 'updatePlaytest'})"><p>Modifier</p></div>
        <!-- TODO mettre bonne route playtest-->
        <div class="button delete-button" @click="deletePlaytest"><p>Supprimer</p></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/singleVue.css";

.content {
  align-items: center;
  padding: 15px;

  & #upper-infos {
    & > div {
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

.delete-button {
  margin-left: 2%;
}
</style>
