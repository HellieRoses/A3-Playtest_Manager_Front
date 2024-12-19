<script setup lang="ts">

</script>

<template>
  <div id="content">
    <div class="mainForm">
      <div class="group">
        <input type="text" id="type" name="type" required placeholder="Le type du jeu..."/>
        <label for="type">Type/Catégorie du jeu :</label>
      </div>
      <div class="group">
        <input type="date" id="support" name="support" required placeholder="Le support du jeu..."/>
        <label for="support">Support du jeu :</label>
      </div>
    </div>
    <div class="optionalForm">
      <div class="group">
        <textarea id="description" name="description" placeholder="La description de votre jeu..." rows="8" />
        <label for="description">Description</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/formUpdateStyle.css";
@import "@/assets/innerFormStyle.css";
</style>
