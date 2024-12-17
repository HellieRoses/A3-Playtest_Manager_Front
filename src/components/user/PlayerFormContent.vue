<script setup lang="ts">

</script>

<template>
  <div class="group">
    <input type="text" required placeholder="Votre nom d'utilisateur..."/>
    <label for="username">Nom d'Utilisateur</label>
  </div>
  <div id="names">
    <div class="group">
      <input type="text" required placeholder="Votre nom..."/>
      <label for="username">Nom</label>
    </div>
    <div class="group">
      <input type="text" required placeholder="Votre prénom..."/>
      <label for="firstname">Prénom</label>
    </div>
  </div>
  <div class="group">
    <input type="email" required placeholder="Votre email..."/>
    <label for="email">Email</label>
  </div>
  <div class="group">
    <input type="password" required placeholder="Votre mot de passe..."/>
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
