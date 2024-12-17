<script setup lang="ts">
import type {Company} from '@/types';
defineProps<{company: Company}>();

</script>

<template>
<div class="content-box">
  <div>
  <router-link :to="{name: 'company', params: {id:company.id}}" class="clickable" id="router-link">
    <img src="@/assets/img/building.png" alt="building"/>
    <p>{{ company.name }}</p>
  </router-link>
    <p id="description">{{company.description}}</p>
  </div>
  <div id="infos">
    <div>
    <div class="round blueRound">
      <img src="@/assets/img/phone.png"/>
    </div>
    <p>{{ company.contact }}</p>
    </div>
  </div>

</div>
</template>

<style scoped>
@import "@/assets/boxList.css";
</style>
