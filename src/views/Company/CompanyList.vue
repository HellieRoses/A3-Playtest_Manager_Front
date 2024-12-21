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
