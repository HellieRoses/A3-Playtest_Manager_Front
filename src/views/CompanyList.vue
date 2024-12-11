<script setup lang="ts">
import { apiStore } from '@/util/apiStore'
import {ref} from 'vue';

const companies=ref([]);
apiStore.getAll('companies')
  .then(reponseJSON => {
    companies.value = reponseJSON["member"];
  });

import CompanyBox from "@/components/CompanyBox.vue";
console.log(companies);
</script>

<template>
  <div class="list">
    <CompanyBox
      v-for="company in companies" :key="company.id"
      :company="company"
    />
  </div>
</template>

<style scoped>
@import "@/assets/list.css";
</style>
