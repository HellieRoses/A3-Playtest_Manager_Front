<script setup lang="ts">

import {useRoute} from "vue-router";
import {onMounted, type Ref, ref} from "vue";
import {apiStore} from "@/util/apiStore.ts";
import type {Player} from "@/types.ts";
import router from "@/router";
import {notify} from "@kyvg/vue3-notification";


const route = useRoute();
const id = route.params.id;
const player:Ref<Player> = ref({
  id:'',
  login:'',
  email:'',
  password:'',
  name: '',
  firstName: '',
  birthdayDate: '',
  favoriteGames: ref([]),
  type: '',
  participants: ref([])
});

onMounted(async () => {
  const estConnecte = await apiStore.estConnecte;

  if (!estConnecte || Number(id) !== Number((apiStore.getUtilisateurConnecte())!.id)) {
    await router.push({name: 'home'})
  }

  await apiStore.getById('players', id)
    .then(reponseJSON => {
      player.value = reponseJSON;
    });

  player.value.birthdayDate = new Date(player.value.birthdayDate).toISOString().split('T')[0];
});

const emit = defineEmits<{ updated: [] }>();

const updateResource = () => {
  apiStore.updateRessource('players', id, {
      name: player.value.name,
      firstName: player.value.firstName,
      birthdayDate: new Date(player.value.birthdayDate),
      favoriteGames: player.value.favoriteGames,
      email: player.value.email,
      currentPlainPassword: player.value.password,
    }
  ).then(() => {
    emit('updated');
    router.push({name:'profile'})
    notify({
      type: "success",
      title: "Modification sauvegardée",
      text: 'Vos modifications ont bien été sauvegardées!',
    });
  })
}

async function deleteAccount() {
  await apiStore.deleteRessource('players', Number(id));
  await apiStore.logout();
  await router.push({name: 'home'});
  apiStore.refresh();
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
          <div class="group">
            <input id="username" name="username" type="text" required placeholder="Votre nom d'utilisateur..."
                   v-model="player.login"/>
            <label for="username">Nom d'Utilisateur</label>
          </div>
          <div id="names">
            <div class="group">
              <input id="name" name="name" type="text" required placeholder="Votre nom..." v-model="player.name"/>
              <label for="name">Nom</label>
            </div>
            <div class="group">
              <input id="firstname" name="firstname" type="text" required placeholder="Votre prénom..."
                     v-model="player.firstName"/>
              <label for="firstname">Prénom</label>
            </div>
          </div>
          <div class="group">
            <input id="email" name="email" type="email" required placeholder="Votre email..." v-model="player.email"/>
            <label for="email">Email</label>
          </div>
          <div class="group">
            <input id="password" name="password" type="password" required placeholder="Votre mot de passe..."
                   v-model="player.password"/>
            <label for="password">Mot de passe</label>
          </div>
        </div>
        <div class="optionalForm">
          <div class="group">
            <textarea id="favoriteVideoGame" name="favoriteVideoGame" placeholder="Votre jeux vidéo favoris..."
                      rows="10" v-model="player.favoriteGames"/>
            <label for="favoriteVideoGame">Jeux Vidéo Préférés</label>
          </div>
          <div class="group">
            <input id="birthday" name="birthday" type="date" placeholder="Votre Date de Naissance..."
                   v-model="player.birthdayDate"/>
            <label for="birthday">Date de Naissance</label>
          </div>
        </div>
      </div>
      <div class="bottom-button">
        <button type="submit" class="button">
          Modifier
        </button>
        <div class="button delete-button" @click="deleteAccount()">
         <p>Supprimer</p>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import "@/assets/formUpdateStyle.css";
</style>
