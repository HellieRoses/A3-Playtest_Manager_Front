<script setup lang="ts">

</script>

<template>
  <div class="content-box bigger-box">
    <div>
      <router-link :to="{name: 'playtest' }" class="clickable" id="router-link">
        <img src="@/assets/img/playtest.png" alt="playtest"/>
        <p>Playtest 1</p>
      </router-link>
      <p>Début : 15/05/2025 8h</p>
      <p>Fin :  15/05/2025 17h</p>
      <p>Lieu : 3 rue du studio Ubisoft, Montpellier 34000</p>
    </div>
    <div id="infos">
      <div>
        <div class="round blueRound">
          <img src="@/assets/img/building.png"/>
        </div>
        <p>Ubisoft</p>
      </div>
      <div>
        <div class="round blueRound">
          <img src="@/assets/img/videoGame.png"/>
        </div>
        <p>Assasin's Creed</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import "@/assets/boxList.css";
</style>
