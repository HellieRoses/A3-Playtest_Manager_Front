<script setup lang="ts">
import {ref} from "vue";
import {apiStore} from "@/util/apiStore.ts";
import router from "@/router";

const connectingUser = ref({
  login: "",
  password:""
});

async function connect(): Promise<void> {
  try {
    await apiStore.login(connectingUser.value.login, connectingUser.value.password);
  }
  catch (error) {}
  await router.push({name: "profile"});
}
</script>

<template>
  <div class="form">
    <div>
      <h1>Connexion</h1>
      <div class="round">
        <img src="@/assets/img/profile_bigger.png">
      </div>
    </div>
    <form @submit.prevent="connect"> <!-- fonction connect -->
      <div>
        <div class="group">
          <input v-model="connectingUser.login" id="username" name="username" type="text" required placeholder="Votre nom d'utilisateur..."/>
          <label for="username">Nom d'Utilisateur</label>
        </div>
        <div class="group">
          <input v-model="connectingUser.password" id="password" name="password" type="password" required placeholder="Votre mot de passe..."/>
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
</style>
