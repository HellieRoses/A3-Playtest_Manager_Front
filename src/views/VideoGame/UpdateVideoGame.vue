<script setup lang="ts">

import VideoGameForm from "@/components/EntityForms/VideoGameForm.vue";

</script>

<template>
  <div class="form">
    <div>
      <h1>Modifier un jeux vidéo</h1>
    </div>

    <form @submit.prevent=""> <!-- fonction modifier playtest-->
      <VideoGameForm/>
      <div class="bottom-button">
        <button type="submit" class="button">
          <p>Créer</p>
        </button>
        <div class="button delete-button" ><!-- TODO supprimer VideoGame-->
          <p>Supprimer</p>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import "@/assets/formUpdateStyle.css";

</style>
