<script setup lang="ts">
import PlayerFormContent from "@/components/user/PlayerFormContent.vue";
import CompanyFormContent from "@/components/user/CompanyFormContent.vue";

let accountType = 'player';
let playerForm;
let companyForm;
window.onload = () => {
  playerForm = document.getElementById('playerForm');
  companyForm = document.getElementById('companyForm');
  companyForm.style.display = 'none';
}

function clickOnRound(type){
  if(accountType != type){
    accountType=type;
    let currentYellow = document.getElementById('choice').querySelector('.yellowRound');
    let other = document.getElementById('choice').querySelector('.round:not(.yellowRound)');
    currentYellow.classList.remove('yellowRound');
    other.classList.add('yellowRound');
    if(type == 'player'){
      playerForm.style.display= 'flex';
      companyForm.style.display = 'none';
    }else if(type == 'company'){
      playerForm.style.display= 'none';
      companyForm.style.display = 'flex';
    }
  }
}
</script>

<template>
  <div class="form">
    <div>
      <h1>Inscription</h1>
      <div id="choice">
        <div class="round yellowRound" @click="clickOnRound('player')">
          <img src="@/assets/img/videoGame.png">
        </div>
        <div class="round">
          <img src="@/assets/img/building_bigger.png" @click="clickOnRound('company')">
        </div>
      </div>
    </div>

    <form @submit.prevent="" id="playerForm"> <!-- fonction inscrire player-->
      <div>
        <PlayerFormContent />
      </div>
      <div class="bottom-button">
        <button type="submit" class="button">
          <p>Se Connecter</p>
        </button>
      </div>
    </form>

    <form @submit.prevent="" id="companyForm"> <!-- fonction inscrire company -->
      <div>
        <CompanyFormContent />
      </div>
      <div class="bottom-button">
        <button type="submit" class="button">
          <p>Se Connecter</p>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import "@/assets/formsView.css";
form{
  padding-top: 5%!important;
}
.group{
  margin: 8px 0;
}
#choice{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
