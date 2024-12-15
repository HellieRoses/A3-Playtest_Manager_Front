<script setup lang="ts">

</script>

<template>
  <div class="form">
    <div>
      <h1>Connexion</h1>
      <div class="round">
        <img src="@/assets/img/profile_bigger.png">
      </div>
    </div>
    <form @submit.prevent=""> <!-- fonction connect -->
      <div>
        <div class="group">
          <input type="text" required/>
          <label for="username">Nom d'Utilisateur</label>
        </div>
        <div class="group">
          <input type="password" required/>
          <label for="password">Mot de passe</label>
        </div>
      </div>
      <div class="bottom-button">
        <button class="button">
          <p>Se Connecter</p>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
