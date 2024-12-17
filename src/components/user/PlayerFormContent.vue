<script setup lang="ts">

</script>

<template>
  <div class="group">
    <input id="username" type="text" required placeholder="Votre nom d'utilisateur..."/>
    <label for="username">Nom d'Utilisateur</label>
  </div>
  <div id="names">
    <div class="group">
      <input id="name" type="text" required placeholder="Votre nom..."/>
      <label for="name">Nom</label>
    </div>
    <div class="group">
      <input id="firstname"  type="text" required placeholder="Votre prénom..."/>
      <label for="firstname">Prénom</label>
    </div>
  </div>
  <div class="group">
    <input id="email" type="email" required placeholder="Votre email..."/>
    <label for="email">Email</label>
  </div>
  <div class="group">
    <input id="password" type="password" required placeholder="Votre mot de passe..."/>
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
