<script setup lang="ts">

import PlayerFormContent from "@/components/user/PlayerFormContent.vue";
</script>

<template>

  <div class="form">
    <div>
      <h1>Modification du Compte</h1>
    </div>

    <form @submit.prevent=""> <!-- fonction inscrire player-->
      <div id="content">
        <div class="mainForm">
          <PlayerFormContent/>
        </div>
        <div class="optionalForm">
          <div class="group">
            <textarea placeholder="Votre jeux vidéo favoris..." rows="10"/>
            <label for="favoriteVideoGame">Jeux Vidéo Préférés</label>
          </div>
          <div class="group">
            <input type="text" placeholder="Votre Contact..."/>
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
