<script setup lang="ts">
import {useRoute} from "vue-router";
import LoginForm from "@/components/user/LoginForm.vue";
import RegisterForm from "@/components/user/RegisterForm.vue";

const route = useRoute();
const type = route.params.type;
console.log(type);
</script>

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
