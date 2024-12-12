<script setup lang="ts">

import MiniBlockPlaytest from "@/components/minList/MiniBlockPlaytest.vue";
import PlaytestMinListBox from "@/components/minList/PlaytestMinListBox.vue";
const title1 = "Playtest à Venir";
const title2 = "Playtest Passés"
</script>

<template>
<div class="content">
  <div class="main-content">
    <div>
      <div>
        <h1>Hellie Roses</h1>
        <p>Maëlys Boissezon</p>
      </div>
      <div class="infos">
        <div class="icon">
          <img src="@/assets/img/calendar.png" alt="calendar" />
          <p> 30/06/2004</p>
        </div>
        <div class="icon">
          <img src="@/assets/img/pin.png" alt="pin" />
          <p> 3 rue du studio Ubisoft, Montpellier 34000</p>
        </div>
        <div class="icon">
          <img src="@/assets/img/phone.png" alt="phone" />
          <p> 0786543762</p>
        </div>
        <div class="icon">
          <img src="@/assets/img/mail.png" alt="mail" />
          <p> maelys.boissezon@gmail.com</p>
        </div>
        <div class="icon">
          <img src="@/assets/img/games.png" alt="games" />
          <p> Hollow Knight, Celeste, Hades, Mario Kart 8 Deluxe</p>
        </div>
      </div>
    </div>
    <div class="bottom-button"><div class="button" @click="$router.push({name : 'playtests'})"><p>Modifier Son Compte</p></div></div> <!-- TODO mise a jour compte player -->

  </div>
  <div id="additional-content">
    <PlaytestMinListBox :title="title1"/>
    <PlaytestMinListBox :title="title2"/>
  </div>
</div>
</template>

<style scoped>
@import "@/assets/profileStyle.css";
</style>
