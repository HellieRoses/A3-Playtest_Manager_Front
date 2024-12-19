<script setup lang="ts">

import VideoGameForm from "@/components/EntityForms/VideoGameForm.vue";

</script>

<template>
  <div class="form">
    <div>
      <h1>Créer un jeux vidéo</h1>
    </div>

    <form @submit.prevent=""> <!-- fonction créer playtest-->
      <VideoGameForm/>
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
