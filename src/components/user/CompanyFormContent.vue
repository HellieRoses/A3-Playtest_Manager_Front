<script setup lang="ts">
import type {Company} from "@/types.ts";

</script>

<template>
  <div class="group">
    <input id="username" name="username" type="text" required placeholder="Votre nom d'utilisateur..."/>
    <label for="username">Nom d'Utilisateur</label>
  </div>
  <div class="group">
    <input id="companyName" name="companyName" type="text" required placeholder="Nom d'entreprise..."/>
    <label for="companyName">Nom d'Entreprise</label>
  </div>
  <div class="group">
    <input id="email" name="email" type="email" required placeholder="Votre email..."/>
    <label for="email">Email</label>
  </div>
  <div class="group">
    <input id="password" name="password" type="password" required placeholder="Votre mot de passe..."/>
    <label for="password">Mot de passe</label>
  </div>
</template>

<style scoped>

@import "@/assets/innerFormStyle.css";
</style>
