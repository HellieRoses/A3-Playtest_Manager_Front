<script setup lang="ts">

</script>

<template>
  <div id="home_content">
    <p>Bienvenue sur</p>
    <img src="@/assets/img/logo-grand.png" />
    <p class="textOnBlue">Ce site permet aux utilisateurs de rejoindre des sessions de test de jeux vidéos organisés par les entreprises.</p>
  </div>
</template>

<style scoped>
#home_content p:first-child{
  color: #FFFFFF;
  font-size: 45px;
  font-weight: 450;
}
#home_content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#home_content img{
  margin: 15px;
}
#home_content p:nth-child(3){
  width: 60%;
  text-align: center;
  font-size: 20px;
}
main{

  align-items: center;
}
</style>
