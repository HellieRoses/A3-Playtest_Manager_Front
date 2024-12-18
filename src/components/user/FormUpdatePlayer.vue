<script setup lang="ts">

import PlayerFormContent from "@/components/user/PlayerFormContent.vue";
import {useRoute} from "vue-router";
import {ref} from "vue";
import {apiStore} from "@/util/apiStore.ts";


const route = useRoute();
const id = route.params.id;
const player = ref();

apiStore.getById('players', id)
  .then(reponseJSON => {
    player.value = reponseJSON;
  })
const emit = defineEmits<{ updated: []}>();

const updateResource = () => {
  apiStore.updateRessource('players', id, {
      name: player.value.name,
      firstName: player.value.firstName,
      birthdayDate: player.value.birthdayDate,
      favoriteGames: player.value.favoriteGames,
      email: player.value.email,
      currentPlainPassword: "Lapin123",
    }.value
  ).then(reponse => {
    emit('updated');
    console.log(reponse);
    //TODO notify
  })
}
</script>

<template>

  <div class="form">
    <div>
      <h1>Modification du Compte</h1>
    </div>

    <form @submit.prevent="updateResource"> <!-- fonction inscrire player-->
      <div id="content">
        <div class="mainForm">
          <PlayerFormContent :player="player"/>
        </div>
        <div class="optionalForm">
          <div class="group">
            <textarea id="favoriteVideoGame" name="favoriteVideoGame" placeholder="Votre jeux vidéo favoris..." rows="10" v-model="player.favoriteGames"/>
            <label for="favoriteVideoGame">Jeux Vidéo Préférés</label>
          </div>
          <div class="group">
            <input id="contact" name="contact" type="text" placeholder="Votre Contact..." v-model="player.birthdayDate"/>
            <label for="contact">Contact</label>
          </div>
        </div>
      </div>
      <div class="bottom-button">
        <button type="submit" class="button">
          <p>Modifier</p>
        </button>
        <div class="button delete-button" @click="">
          <p>Supprimer</p>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import "@/assets/formUpdateStyle.css";
</style>
