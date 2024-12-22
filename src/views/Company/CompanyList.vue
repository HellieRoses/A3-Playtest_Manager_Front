<script setup lang="ts">
import { apiStore } from '@/util/apiStore'
import {type Ref, ref} from 'vue';
import CompanyBox from "@/components/CompanyBox.vue";
import type {Company} from "@/types.ts";

const companies:Ref<Company[]>=ref([]);
apiStore.getAll('companies')
  .then(reponseJSON => {
    companies.value = reponseJSON["member"];
  });

</script>

<template>
  <div class="list" v-if="companies.length > 0">
    <CompanyBox
      v-for="company in companies" :key="company.id"
      :company="company"
    />
  </div>
  <p v-else class="textOnBlue">Il n'y a aucune Entreprise disponible </p>
</template>

<style scoped>
@import "@/assets/list.css";
</style>
