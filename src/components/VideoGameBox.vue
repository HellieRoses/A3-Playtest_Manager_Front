<script setup lang="ts">

</script>

<template>
  <div class="content-box bigger-box">
    <div>
      <router-link :to="{name: 'videogame' }" class="clickable" id="router-link">
        <img src="@/assets/img/videoGame.png" alt="videogame"/>
        <p>Assasin's Creed</p>
      </router-link>
      <p>Type : RPG</p>
      <p>Support : Console, PC</p>
    </div>
    <div id="infos">
      <div>
        <div class="round blueRound">
          <img src="@/assets/img/playtest.png"/>
        </div>
        <p>6</p>
      </div>
      <div>
        <div class="round blueRound">
          <img src="@/assets/img/building.png"/>
        </div>
        <p>Ubisoft</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import "@/assets/boxList.css";
.bigger-box div:first-child > p{
  margin-bottom: 15px;
  margin-top: 15px;
}
</style>
