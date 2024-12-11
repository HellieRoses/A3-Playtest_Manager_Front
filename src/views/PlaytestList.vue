<script setup lang="ts">
import {ref} from 'vue';
import { apiStore } from '@/util/apiStore'
import PlaytestBox from "@/components/PlaytestBox.vue";
const playtests=ref([]);
apiStore.getAll('playtests')
  .then(reponseJSON => {
    playtests.value = reponseJSON["member"];
  });
console.log(playtests);
</script>

<template>
  <div class="list">
    <PlaytestBox
      v-for="playtest of playtests" :key="playtest.id"
      :playtest="playtest"
    />
  </div>
</template>

<style scoped>
@import "@/assets/list.css";
</style>
