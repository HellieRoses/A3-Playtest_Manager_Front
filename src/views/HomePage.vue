<script setup lang="ts">

</script>

<template>
  <div id="home_content">
    <p>Bienvenue sur</p>
    <img src="@/assets/img/logo-grand.png" alt="playtestManager-logo"/>
    <p class="textOnBlue">Venez participer aux différentes séssions de jeu organisés par des entreprises. En tant que
      joueur, vous pourrez améliorer votre visibilité pour vous démarquer des autres et profiter de ces séssions</p>
  </div>
</template>

<style scoped>
#home_content p:first-child {
  color: #FFFFFF;
  font-size: 45px;
  font-weight: 450;
}

#home_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#home_content img {
  margin: 15px;
}

#home_content p:nth-child(3) {
  width: 60%;
  text-align: center;
  font-size: 20px;
}

main {

  align-items: center;
}
</style>
