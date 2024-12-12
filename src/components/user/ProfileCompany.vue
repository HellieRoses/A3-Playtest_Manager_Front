<script setup lang="ts">

import PlaytestMinListBox from "@/components/minList/PlaytestMinListBox.vue";
import VideoGameMinListBox from "@/components/minList/VideoGameMinListBox.vue";
const title1 = "Playtests Organisés"
</script>

<template>
  <div class="content">
    <div class="main-content">
      <div>
        <div>
          <h1>Ubisoft</h1>
          <p id="description">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummyIpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum</p>
        </div>
        <div class="infos">
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
        </div>
      </div>
      <div class="bottom-button"><div class="button" @click="$router.push({name : 'videogames'})"><p>Modifier Son Compte</p></div></div> <!-- TODO formulaire mise à jour compte company -->

    </div>
    <div id="additional-content">
      <VideoGameMinListBox />
      <PlaytestMinListBox :title="title1"/>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/profileStyle.css";
#description{
  text-align: justify;
  display: -webkit-box;
  max-width: 35em;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 300px;
}
.icon{
  margin-top: 20px!important;
  margin-bottom: 20px!important;
}
.main-content > div:first-child > div:first-child{
}
</style>
