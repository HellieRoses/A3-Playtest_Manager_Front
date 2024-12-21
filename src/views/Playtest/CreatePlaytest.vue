<script setup lang="ts">

import PlaytestForm from "@/components/EntityForms/PlaytestForm.vue";
const videoGames = ["Assassin's  Creed", "Hollow Knight", "Celeste", "Hades 2", "Adibouchou"] //TODO change to video games owned by company
</script>

<template>
  <div class="form">
    <div>
      <h1>Créer un playtest</h1>
    </div>

    <form @submit.prevent=""> <!-- fonction créer playtest-->
      <Playte stForm :video-games="videoGames" />
      <div class="bottom-button">
        <button type="submit" class="button">
          <p>Créer</p>
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
