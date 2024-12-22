<script setup lang="ts">

import type {VideoGame} from "@/types.ts";

defineProps<{videogame:VideoGame}>()

</script>

<template>
  <div id="content">
    <div class="mainForm">
      <div class="group">
        <input type="text" id="name" name="name" required placeholder="Le nom du jeu..." v-model="videogame.name"/>
        <label for="name">Nom du jeu :</label>
      </div>
      <div class="group">
        <input type="text" id="type" name="type" required placeholder="Le type du jeu..." v-model="videogame.type" />
        <label for="type">Type/Catégorie du jeu :</label>
      </div>
      <div class="group">
        <p class="help">(Séparés les supports choisis par une virgule. Exemple: Console,PC)</p>
        <input type="text" id="support" name="support" required placeholder="Support 1,Support 2" v-model="videogame.support"/>
        <label for="support">Support du jeu :</label>
      </div>
    </div>
    <div class="optionalForm">
      <div class="group">
        <textarea required id="description" name="description" placeholder="La description de votre jeu..." rows="8"  v-model="videogame.description" > videogame.description </textarea>
        <label for="description">Description</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/formUpdateStyle.css";
@import "@/assets/innerFormStyle.css";
.help{
  font-size: 10px;
  font-style: italic;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
</style>
