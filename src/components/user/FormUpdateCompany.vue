<script setup lang="ts">

import CompanyFormContent from "@/components/user/CompanyFormContent.vue";
import {useRoute} from "vue-router";
import {ref} from "vue";
import {apiStore} from "@/util/apiStore.ts";


const route = useRoute();
const id = route.params.id;
const company = ref();

apiStore.getById('companies', id)
  .then(reponseJSON => {
    company.value = reponseJSON;
  })
const emit = defineEmits<{ updated: []}>();


const updateResource = () => {
  apiStore.updateRessource('companies', id, {
      name: company.value.name,
      description: company.value.description,
      adress: company.value.adress,
      contact: company.value.contact,
      email: company.value.email,
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
          <CompanyFormContent :company="company" />
        </div>
        <div class="optionalForm">
          <div class="group">
            <textarea v-model="company.description" placeholder="La description de votre entreprise..." rows="8"></textarea>
            <label for="description">Description</label>
          </div>
          <div class="group">
            <input v-model="company.adress" type="text" placeholder="L'adresse de votre entreprise..."/>
            <label for="address">Adresse</label>
          </div>
          <div class="group">
            <input v-model="company.contact" type="text" placeholder="Votre contact..." />
            <label for="contact">Contact</label>
          </div>
        </div>
      </div>
      <div class="bottom-button">
        <button  type="submit" class="button">
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
