<script setup lang="ts">
import type {Company} from "@/types.ts";

defineProps<{company: Company}>();

</script>

<template>
  <div class="group">
    <input v-model="company.login" type="text" required placeholder="Votre nom d'utilisateur..."/>
    <label for="username">Nom d'Utilisateur</label>
  </div>
  <div class="group">
    <input v-model="company.name" type="text" required placeholder="Nom d'entreprise..."/>
    <label for="companyName">Nom d'Entreprise</label>
  </div>
  <div class="group">
    <input v-model="company.email" type="email" required placeholder="Votre email..."/>
    <label for="email">Email</label>
  </div>
  <div class="group">
    <input v-model="company.password" type="password" required placeholder="Votre mot de passe..."/>
    <label for="password">Mot de passe</label>
  </div>
</template>

<style scoped>

@import "@/assets/innerFormStyle.css";
</style>
