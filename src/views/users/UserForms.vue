<script setup lang="ts">
import {useRoute} from "vue-router";
import LoginForm from "@/components/user/LoginForm.vue";
import RegisterForm from "@/components/user/RegisterForm.vue";
import FormUpdatePlayer from "@/components/user/FormUpdatePlayer.vue";

const route = useRoute();
let type = route.params.type;
console.log(type);
</script>
<!-- TODO mon v-if marche pas (quand on change clique direct sur le bouton de login ou d'inscription) -->
<template>
  <div class="before-form">
    <div>
      <img src="@/assets/img/connectRegisterImg.png" alt="">
    </div>
    <LoginForm v-if="type=='login'"/>
    <RegisterForm v-else/>
  </div>
</template>

<style scoped>
@import "@/assets/formsView.css";

</style>
