<script setup lang="ts">

</script>

<template>
  <div class="content">
    <div id="upper-infos">
      <h1 class="title">Ubisoft</h1>
      <p id="description">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsumorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsuorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsuorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsuorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsuorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsuorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsuorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsuorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsu</p>
      <div>
        <div class="main-infos">
          <div class="yellowRound">
            <img src="@/assets/img/pin.png" alt="pin"/>
          </div>
          <p class="textOnBlue">3 rue du studio Ubisoft, Montpellier 34000</p>
        </div>
        <div class="main-infos">
          <div class="yellowRound">
            <img src="@/assets/img/phone.png" alt="phone"/>
          </div>
          <div>
            <p class="textOnBlue">0541451372</p>
            <p class="textOnBlue">ubisoft.ubi@ubisoft.com</p>
          </div>
        </div>
      </div>
    </div>
    <div id="lower-infos">
      <h2>Jeux Vidéo</h2>
      <div class="list">
        <router-link :to="{name:'videogame'}" class="block"><p>Assassin's Creed</p></router-link>
        <router-link :to="{name:'videogame'}" class="block"><p>Assassin's Creed</p></router-link>
        <router-link :to="{name:'videogame'}" class="block"><p>Assassin's Creed</p></router-link>
      </div>
     <div><div class="button" @click="$router.push($router.push({name : 'videogames'}))"><p>Voir plus</p></div></div> <!-- TODO mettre la liste des jeux vidéos de l'entreprise -->
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/singleVue.css";
  .content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    & #upper-infos{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 50%;
      & #description{
        width: 80%;
        text-align: center;
        font-size: 18px;
      }
      & > div{
        display: flex;
        justify-content: space-around;
        width: 80%;
        margin-top: 40px;
      }
    }
  }
</style>
