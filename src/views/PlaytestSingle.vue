<script setup lang="ts">

</script>

<template>
  <div class="content">
    <div id="upper-infos">
      <h1 class="title">Playtest 1</h1>
      <div>
        <router-link :to="{name : 'company'}">
          <div class="main-infos">
            <div class="yellowRound">
              <img src="@/assets/img/building.png" alt="building"/>
            </div>
            <div>
              <p class="textOnBlue">Ubisoft</p>
            </div>
          </div>
        </router-link>
        <div class="main-infos">
          <div class="yellowRound">
            <img src="@/assets/img/calendar.png" alt="calendar"/>
          </div>
          <div>
            <p class="textOnBlue">Début : 15/05/2025 8h</p>
            <p class="textOnBlue">Fin : 15/05/2025 17h</p>
          </div>
        </div>
        <router-link :to="{name : 'videogame'}">
          <div class="main-infos">
            <div class="yellowRound">
              <img src="@/assets/img/videoGame.png" alt="videogame"/>
            </div>
            <div>
              <p class="textOnBlue">Assasin's Creed</p>
            </div>
          </div>
        </router-link>
        <div class="main-infos">
          <div class="yellowRound">
            <img src="@/assets/img/pin.png" alt="pin"/>
          </div>
          <p class="textOnBlue">3 rue du studio Ubisoft, Montpellier 34000</p>
        </div>
      </div>
    </div>
    <div id="lower">
     <div> <h2>Type de joueurs Recherchés</h2></div>
      <p>Casual, connaisseur, ont dejà joués à des jeux de la license Assasin’s creed</p>
      <div class="bottom-button"><div class="button" @click=""><p>S'inscrire</p></div></div> <!-- TODO inscrire user à un playtest à n'afficher que si player + pas inscrit -->
      <div class="bottom-button"><div class="button" @click=""><p>Désinscrire</p></div></div> <!-- TODO inscrire user à un playtest à n'afficher que si player + inscrit-->
      <div class="bottom-button"><div class="button delete-button" @click=""><p>Supprimer</p></div></div> <!-- TODO inscrire user à un playtest à n'afficher que si company qui a créé-->
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/singleVue.css";
.content{
  align-items: center;
  padding: 15px;
  & #upper-infos{
    & > div{
      display: grid;
      grid-template-columns: 1fr 1Fr;
      row-gap: 20%;
      column-gap: 15%;
      width: 100%;
      margin-top: 40px;
    }
    & .textOnBlue {
      font-size: 30px;
    }
  }
  .button {
    background-color: #BBFFE9;
    & p{
      font-weight: normal;
    }
    padding-left: 40px;
    padding-right: 40px;

  }
  #lower{
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    h2{
      font-size:35px;
      color: #FFFFFF;
    }
    &  > div {
      width: 100%;
    }
    & .bottom-button{
      display: flex;
      justify-content: center;
    }
    & > p{
      width: 100%;
      font-size: 30px;
      margin-bottom: 50px;
      margin-left: 100px;
    }

  }
}
</style>
