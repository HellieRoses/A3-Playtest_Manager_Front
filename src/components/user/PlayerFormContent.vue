<script setup lang="ts">
import type {Company} from "@/types.ts";

defineProps<{player: Player}>();
</script>

<template>
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
    <input id="email" name="email" type="email" required placeholder="Votre email..." v-model="player.email"/>
    <label for="email">Email</label>
  </div>
  <div class="group">
    <input id="password" name="password" type="password" required placeholder="Votre mot de passe..." v-model="player.password"/>
    <label for="password">Mot de passe</label>
  </div>
</template>

<style scoped>
@import "@/assets/innerFormStyle.css";
#names{
  width: 60%;
  display: flex;
  justify-content: space-between;

  & .group{
    width: 45%;
  }
}
</style>
