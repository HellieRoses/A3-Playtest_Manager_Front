<script setup lang="ts">
import {ref} from "vue";
import {apiStore} from "@/util/apiStore.ts";

let accountType = 'player';
let playerForm;
let companyForm;
window.onload = () => {
  playerForm = document.getElementById('playerForm');
  companyForm = document.getElementById('companyForm');
  companyForm.style.display = 'none';
}
const login = ref("");
const surname = ref("");
const firstName = ref("");
const birthdayDate = ref();
const mail = ref("");
const password = ref("");
const adress = ref("");
const contact = ref("");
const companyName = ref("");

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

async function signUp() {
  if (accountType === "player") {
    await apiStore.createRessource("players", {"login": login.value, "name": surname.value, "firstName": firstName.value, "birthdayDate": new Date(birthdayDate.value), "email": mail.value, "plainPassword": password.value});
  }
  else if (accountType === "company") {
    await apiStore.createRessource("companies", {"login": login.value, "adress": adress.value, "contact": contact.value, "name": companyName.value, "email": mail.value, "plainPassword": password.value})
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
    <form @submit.prevent="signUp()" id="playerForm"> <!-- fonction inscrire player-->
      <div>
        <div class="group">
          <input id="username" name="username" type="text" required placeholder="Votre nom d'utilisateur..." v-model="login"/>
          <label for="username">Nom d'Utilisateur</label>
        </div>
        <div id="names">
          <div class="group">
            <input id="name" name="name" type="text" required placeholder="Votre nom..." v-model="surname"/>
            <label for="name">Nom</label>
          </div>
          <div class="group">
            <input id="firstname" name="firstname"  type="text" required placeholder="Votre prénom..." v-model="firstName"/>
            <label for="firstname">Prénom</label>
          </div>
        </div>
        <div class="group">
          <input id="birthdaydate" name="birthdaydate" type="date" required v-model="birthdayDate"/>
          <label for="email">Email</label>
        </div>
        <div class="group">
          <input id="email" name="email" type="email" required placeholder="Votre email..." v-model="mail"/>
          <label for="email">Email</label>
        </div>
        <div class="group">
          <input id="password" name="password" type="password" required placeholder="Votre mot de passe..." v-model="password"/>
          <label for="password">Mot de passe</label>
        </div>
      </div>
      <div class="bottom-button">
        <button type="submit" class="button">
          <p>Se Connecter</p>
        </button>
      </div>
    </form>

    <form @submit.prevent="signUp" id="companyForm"> <!-- fonction inscrire company -->
      <div>
        <div class="group">
          <input id="username" name="username" type="text" required placeholder="Votre nom d'utilisateur..." v-model="login"/>
          <label for="username">Nom d'Utilisateur</label>
        </div>
        <div class="group">
          <input id="companyAdress" name="companyAdress" type="text" required placeholder="Adresse de l'entreprise..." v-model="adress"/>
          <label for="companyAdress">Adresse</label>
        </div>
        <div class="group">
          <input id="companyContact" name="companyContact" type="tel" required placeholder="Numéro de téléphone de l'entreprise..." v-model="contact"/>
          <label for="companyName">Numéro de téléphone</label>
        </div>
        <div class="group">
          <input id="companyName" name="companyName" type="text" required placeholder="Nom d'entreprise..." v-model="companyName"/>
          <label for="companyName">Nom d'Entreprise</label>
        </div>
        <div class="group">
          <input id="email" name="email" type="email" required placeholder="Votre email..." v-model="mail"/>
          <label for="email">Email</label>
        </div>
        <div class="group">
          <input id="password" name="password" type="password" required placeholder="Votre mot de passe..." v-model="password"/>
          <label for="password">Mot de passe</label>
        </div>
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
#names{
  width: 60%;
  display: flex;
  justify-content: space-between;

  & .group{
    width: 45%;
  }
}
</style>
