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
    <div class="bottom-button"><div class="button" @click="$router.push({name : 'playtests'})"><p>Modifier Son Compte</p></div></div> <!-- TODO mettre la liste des jeux vidéos de l'entreprise -->

  </div>
  <div id="additional-content">
    <PlaytestMinListBox :title="title1"/>
    <PlaytestMinListBox :title="title2"/>
  </div>
</div>
</template>

<style scoped>
@import "@/assets/list.css";
@import "@/assets/profileStyle.css";
.main-content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > div:first-child{
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > h1 {
        font-size: 40px;
        margin-bottom: 30px;
      }

      & > p {
        width: fit-content;
      }
    }
  }

  & .infos {
    margin-top: 15px;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & .icon {
      display: flex;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 10px;
      & img {
        width: 48px;
        height: 48px;
        margin-right: 15px;
      }
      & p{
        font-size: 20px;
      }
    }
  }
  & .bottom-button{
    justify-content: center;
    & .button{
      padding-left: 50px;
      padding-right: 50px;
    }
  }
}
</style>
