<script setup lang="ts">
import {apiStore} from "@/util/apiStore.ts";
import {type Ref, ref} from 'vue';
import {useRoute} from "vue-router";
import PlaytestBox from "@/components/PlaytestBox.vue";
import type {Playtest} from "@/types.ts";

const route = useRoute();
const id = route.params.id;

const playtests:Ref<Playtest[]> = ref([]);
apiStore.getByVideoGame(id)
  .then(reponseJSON => {
    playtests.value = reponseJSON["member"];
  });
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
