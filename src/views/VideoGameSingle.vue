<script setup lang="ts">

</script>

<template>
  <div class="content">
    <div id="upper-infos">
      <h1 class="title">Assasin's Creed</h1>
      <div>
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
      <div><div class="button" @click="$router.push({name : 'playtests'})"><p>Voir plus</p></div></div> <!-- TODO mettre la liste des playtests du jeux vidéo -->
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/singleVue.css';
.content{
  width: 100%;
  & #upper-infos{
    & > div{
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
    height: 50%;
    & h2 {
      margin-bottom: 0;
    }
    & .list{
      row-gap: 70%!important;
      column-gap: 10%;
    }
  }
}
</style>
