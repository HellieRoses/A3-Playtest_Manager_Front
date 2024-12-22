<script setup lang="ts">
import {type Ref, ref} from "vue";
import {apiStore} from "@/util/apiStore.ts";
import router from "@/router";
import type {Company, Player} from "@/types.ts";
import {notify} from "@kyvg/vue3-notification";

if(apiStore.estConnecte){
  router.push({name :"home"})
}

const accountType = ref('player');
const player: Ref<Player> = ref({
  id: '',
  login: '',
  email: '',
  password: '',
  name: '',
  firstName: '',
  birthdayDate: '',
  favoriteGames: [],
  type: '',
  participants: []
});
const company: Ref<Company> = ref({
  id: '',
  login: '',
  email: '',
  password: '',
  name: '',
  description: '',
  adress: '',
  contact: '',
  type: '',
  videoGames: []
});

function clickOnRound(type:string){
  if(accountType.value != type){
    accountType.value = type;
    const currentYellow = document.getElementById('choice')!.querySelector('.yellowRound')!;
    const other = document.getElementById('choice')!.querySelector('.round:not(.yellowRound)')!;
    currentYellow.classList.remove('yellowRound');
    other.classList.add('yellowRound');
  }
}

async function signUp() {
  if (accountType.value === "player") {
    try {
      await apiStore.createRessource("players", {"login": player.value.login, "name": player.value.name, "firstName": player.value.firstName, "birthdayDate": new Date(player.value.birthdayDate), "email": player.value.email, "plainPassword": player.value.password});
    } catch(error) {
      notify({
        type: "error",
        title: "Connexion échouée",
        text: 'Erreur : ' + error,
      });
    }
    await apiStore.login(player.value.login, player.value.password);
    await router.push({name: "updatePlayer", params: {id: (apiStore.getUtilisateurConnecte())!.id}});
  }
  else if (accountType.value === "company") {
    try {
      await apiStore.createRessource("companies", {"login": company.value.login, "adress": company.value.adress, "contact": company.value.contact, "name": company.value.name, "email": company.value.email, "plainPassword": company.value.password})
    } catch(error) {
      notify({
        type: "error",
        title: "Connexion échouée",
        text: 'Erreur : ' + error,
      });
    }
    await apiStore.login(company.value.login, company.value.password);
    await router.push({name: "updateCompany", params: {id: (apiStore.getUtilisateurConnecte())!.id}});
  }
}
</script>

<template>
  <div class="before-form">
    <div>
      <img src="@/assets/img/connectRegisterImg.png" alt="">
    </div>
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
      <form v-if="accountType === 'player'" @submit.prevent="signUp()" id="playerForm"> <!-- fonction inscrire player-->
        <div>
          <div class="group">
            <input id="username" name="username" type="text" required placeholder="Votre nom d'utilisateur..." v-model="player.login"/>
            <label for="username">Nom d'Utilisateur</label>
          </div>
          <div id="names">
            <div class="group">
              <input id="name" name="name" type="text" required placeholder="Votre nom..." v-model="player.name"/>
              <label for="name">Nom</label>
            </div>
            <div class="group">
              <input id="firstname" name="firstname"  type="text" required placeholder="Votre prénom..." v-model="player.firstName"/>
              <label for="firstname">Prénom</label>
            </div>
          </div>
          <div class="group">
            <input id="birthdaydate" name="birthdaydate" type="date" required v-model="player.birthdayDate"/>
            <label for="email">Date de naissance</label>
          </div>
          <div class="group">
            <input id="email" name="email" type="email" required placeholder="Votre email..." v-model="player.email"/>
            <label for="email">Email</label>
          </div>
          <div class="group">
            <input id="password" name="password" type="password" required placeholder="Votre mot de passe..." v-model="player.password"/>
            <label for="password">Mot de passe</label>
          </div>
        </div>
        <div class="bottom-button">
          <button type="submit" class="button">
            <p>Se Connecter</p>
          </button>
        </div>
      </form>

      <form v-else @submit.prevent="signUp()" id="companyForm"> <!-- fonction inscrire company -->
        <div>
          <div class="group">
            <input id="username" name="username" type="text" required placeholder="Votre nom d'utilisateur..." v-model="company.login"/>
            <label for="username">Nom d'Utilisateur</label>
          </div>
          <div class="group">
            <input id="companyAdress" name="companyAdress" type="text" required placeholder="Adresse de l'entreprise..." v-model="company.adress"/>
            <label for="companyAdress">Adresse</label>
          </div>
          <div class="group">
            <input id="companyContact" name="companyContact" type="text" required placeholder="Contact de l'entreprise..." v-model="company.contact"/>
            <label for="companyName">Contact</label>
          </div>
          <div class="group">
            <input id="companyName" name="companyName" type="text" required placeholder="Nom d'entreprise..." v-model="company.name"/>
            <label for="companyName">Nom d'Entreprise</label>
          </div>
          <div class="group">
            <input id="email" name="email" type="email" required placeholder="Votre email..." v-model="company.email"/>
            <label for="email">Email</label>
          </div>
          <div class="group">
            <input id="password" name="password" type="password" required placeholder="Votre mot de passe..." v-model="company.password"/>
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
  </div>
</template>

<style scoped>
@import "@/assets/formsView.css";
form{
  padding-top: 2%!important;
}
h1{
}
.group{
  margin: 8px 0;
}
#choice{
  width: 100%;
  display: flex;
  justify-content: space-between;
  & img{
    width :48px;
    height : 48px;
  }
}
#names{
  width: 60%;
  display: flex;
  justify-content: space-between;

  & .group{
    width: 45%;
  }
}

.group input{
  padding: 6px 20px!important;
}
.form{
  height: 98%;
}
</style>
