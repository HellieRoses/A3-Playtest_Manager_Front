<script setup lang="ts">

</script>

<template>
  <div class="content">
    <div id="upper-infos">
      <div id="title-div">
        <h1 class="title">Assasin's Creed</h1>
        <div class="button delete-button" @click=""><p>Supprimer</p></div> <!-- TODO inscrire user à un playtest à n'afficher que si company qui a créé-->
      </div>
      <div class="list">
        <router-link :to="{name : 'company'}">
          <div class="main-infos">
            <div class="yellowRound">
              <img src="@/assets/img/building.png" alt="building"/>
            </div>
            <p class="textOnBlue">Ubisoft</p>
          </div>
        </router-link>
        <div class="main-infos">
          <div class="yellowRound">
            <img src="@/assets/img/controller_2.png" alt="controller"/>
          </div>
          <div>
            <p class="textOnBlue">RPG, Aventure</p>
          </div>
        </div>
        <div class="main-infos">
          <div class="yellowRound">
            <img src="@/assets/img/desktop.png" alt="desktop"/>
          </div>
          <div>
            <p class="textOnBlue">PC, Console</p>
          </div>
        </div>
      </div>
    </div>

    <div id="lower-infos">
      <h2>Playtests</h2>
      <div class="list">
        <router-link :to="{name:'playtest'}" class="block"><p>Playtest 1</p></router-link>
        <router-link :to="{name:'playtest'}" class="block"><p>Playtest 1</p></router-link>
        <router-link :to="{name:'playtest'}" class="block"><p>Playtest 1</p></router-link>
        <router-link :to="{name:'playtest'}" class="block"><p>Playtest 1</p></router-link>
        <router-link :to="{name:'playtest'}" class="block"><p>Playtest 1</p></router-link>
        <router-link :to="{name:'playtest'}" class="block"><p>Playtest 1</p></router-link>
      </div>
      <div class="bottom-button"><div class="button" @click="$router.push({name : 'playtests'})"><p>Voir plus</p></div></div> <!-- TODO mettre la liste des playtests du jeux vidéo -->
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/singleVue.css';
.content{
  width: 100%;
  & #upper-infos{
    & div#title-div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
      & h1{
        margin-bottom: 0!important;
      }
      & .button{
        margin-left:15px;
      }
    }
    & > div:nth-child(2){
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 80%;
      margin-top: 40px;
    }
    & .textOnBlue {
      font-size: 30px;
    }
  }
  & #lower-infos {
    & h2 {
      margin-bottom: 0;
    }
    & .list{
      row-gap: 3em!important;
      column-gap: 10%;
    }
  }
}
</style>
