<script setup lang="ts">

import {useRoute} from "vue-router";
import {onMounted, type Ref, ref} from "vue";
import {apiStore} from "@/util/apiStore.ts";
import type {Company} from "@/types.ts";
import router from "@/router";


const route = useRoute();
const id = route.params.id;
const company:Ref<Company> = ref({
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

onMounted(async () => {
  const estConnecte = await apiStore.estConnecte;
  const utilisateurId = await apiStore.utilisateurConnecte.id;

  if (!estConnecte || Number(id) !== Number(utilisateurId)) {
    await router.push({name: 'home'})
  }

  await apiStore.getById('companies', id)
    .then(reponseJSON => {
      company.value = reponseJSON;
    });
});

const emit = defineEmits<{ updated: []}>();


const updateResource = () => {
  console.log(company.value);
  apiStore.updateRessource('companies', id, {
      name: company.value.name,
      description: company.value.description,
      adress: company.value.adress,
      contact: company.value.contact,
      email: company.value.email,
      currentPlainPassword: "Lapin123",
    }
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
          <div class="group">
            <input id="username" name="username" type="text" required placeholder="Votre nom d'utilisateur..." v-model="company.login"/>
            <label for="username">Nom d'Utilisateur</label>
          </div>
          <div class="group">
            <input id="companyName" name="companyName" type="text" required placeholder="Nom d'entreprise..." v-model="company.name"/>
            <label for="companyName">Nom d'Entreprise</label>
          </div>
          <div class="group">
            <input id="email" name="email" type="email" required placeholder="Votre email..." v-model="company.email"/>
            <label for="email">Email</label>
          </div>
          <div class="group">
            <input id="password" name="password" type="password" required placeholder="Votre mot de passe..." v-model="company.password"/>
            <label for="password">Mot de passe</label>
          </div>
        </div>
        <div class="optionalForm">
          <div class="group">
            <textarea id="description" name="description" placeholder="La description de votre entreprise..." rows="8" v-model="company.description"/>
            <label for="description">Description</label>
          </div>
          <div class="group">
            <input id="address" name="address" type="text" placeholder="L'adresse de votre entreprise..." v-model="company.adress"/>
            <label for="address">Adresse</label>
          </div>
          <div class="group">
            <input id="contact" name="contact" type="text" placeholder="Votre contact..." v-model="company.contact"/>
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
