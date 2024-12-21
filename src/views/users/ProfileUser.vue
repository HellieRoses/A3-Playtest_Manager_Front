<script setup lang="ts">

import ProfileCompany from "@/components/user/ProfileCompany.vue";
import {apiStore} from "@/util/apiStore.ts";
import ProfilePlayer from "@/components/user/ProfilePlayer.vue";
import {ref} from "vue";
const isPlayer = ref(false);
const isCompany = ref(false);

if(apiStore.utilisateurConnecte.type == 'Player'){
  isPlayer.value = true;
}
else if(apiStore.utilisateurConnecte.type == 'Company'){
  isCompany.value = true;
}
</script>

<template>
  <ProfileCompany v-if="isCompany"/>
  <ProfilePlayer v-if="isPlayer"/>
</template>

<style scoped>

</style>
