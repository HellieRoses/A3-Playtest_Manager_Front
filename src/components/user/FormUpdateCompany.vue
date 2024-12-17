<script setup lang="ts">

import PlayerFormContent from "@/components/user/PlayerFormContent.vue";
import CompanyFormContent from "@/components/user/CompanyFormContent.vue";
</script>

<template>
  <div class="form">
    <div>
      <h1>Modification du Compte</h1>
    </div>

    <form @submit.prevent=""> <!-- fonction inscrire player-->
      <div id="content">
        <div class="mainForm">
          <CompanyFormContent/>
        </div>
        <div class="optionalForm">
          <div class="group">
            <textarea id="description" placeholder="La description de votre entreprise..." rows="8"/>
            <label for="description">Description</label>
          </div>
          <div class="group">
            <input id="adress" type="text" placeholder="L'adresse de votre entreprise..."/>
            <label for="address">Adresse</label>
          </div>
          <div class="group">
            <input id="contact" type="text" placeholder="Votre contact..."/>
            <label for="contact">Contact</label>
          </div>
        </div>
      </div>
      <div class="bottom-button">
        <button class="button">
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
