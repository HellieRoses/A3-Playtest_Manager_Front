<script setup lang="ts">

import PlaytestForm from "@/components/EntityForms/PlaytestForm.vue";
const videoGames = ["Assassin's  Creed", "Hollow Knight", "Celeste", "Hades 2", "Adibouchou"] //TODO change to video games owned by company

</script>

<template>
  <div class="form">
    <div>
      <h1>Modifier un playtest</h1>
    </div>

    <form @submit.prevent=""> <!-- fonction modifier playtest-->
      <PlaytestForm :videoGames="videoGames" />
      <div class="bottom-button">
        <button type="submit" class="button">
          <p>Créer</p>
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
