<script setup lang="ts">
import {apiStore} from "@/util/apiStore.ts";
import {type Ref, ref} from 'vue';
import {useRoute} from "vue-router";
import PlaytestBox from "@/components/PlaytestBox.vue";
import type {Playtest} from "@/types.ts";
import router from "@/router";

const route = useRoute();
const id = route.params.id;

const playtests:Ref<Playtest[]> = ref([]);
if(apiStore.estConnecte) {
  apiStore.getByVideoGame(id)
    .then(reponseJSON => {
      playtests.value = reponseJSON["member"];
    });
}else{
  router.push({name:"home"});
}

</script>

<template>
  <div class="list">
    <PlaytestBox
      v-for="playtest in playtests" :key="playtest.id"
      :playtest="playtest"
    />

  </div>
</template>

<style scoped>
@import "@/assets/list.css";
</style>
