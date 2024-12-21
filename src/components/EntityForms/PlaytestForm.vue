<script setup lang="ts">

import type {Playtest, VideoGame} from "@/types.ts";

defineProps<{videoGames:Array<VideoGame>,playtest:Playtest}>();

</script>

<template>
  <div id="content">
    <div class="mainForm">
      <div class="group">
        <input v-model="playtest.begin" type="date" id="dateDebut" name="dateDebut" required placeholder="La date de début..."/>
        <label for="dateDebut">Date de début :</label>
      </div>
      <div class="group">
        <input v-model="playtest.end" type="date" id="dateFin" name="dateFin" required placeholder="La date de fin..."/>
        <label for="dateFin">Date de fin :</label>
      </div>
      <div class="group">
        <input v-model="playtest.nbMaxPlayer" type="number" id="nbMax" name="nbMax" required placeholder="Nombre d'inscrits maximum ..."/>
        <label for="nbMax">Nombre d'inscrits max :</label>
      </div>
      <div class="group">
        <input v-model="playtest.visibility" type="checkbox" id="visibility" name="visibility" required />
        <label for="visible">Playtest Visible ?</label>
      </div>
    </div>
    <div class="optionalForm">
      <div class="group">
        <p class="help">(Ne pas remplir si l'adresse est la même que votre entreprise)</p>
        <input type="text" id="adresse" name="adresse" placeholder="Adresse du lieu..."/>
        <label for="adresse">Adresse du lieu :</label>
      </div>
      <div class="group">
        <select id="jeuxVidéo" name="jeuxVidéo" type="text" required v-model="playtest.videoGame">
          <option v-for="videogame in videoGames" :key="videogame.id" :value="videogame" >{{videogame.name}}</option>
        </select>
        <label for="jeuxVidéo">Jeux vidéo :</label>
      </div>
      <div class="group">
        <textarea id="typeJoueurs" name="typeJoueurs" placeholder="Les types de joueurs recherchés..." rows="2" />
        <label for="typeJoueurs">Type de joueurs recherchés</label>
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
select{

}
</style>
