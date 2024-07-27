<script setup>
import { useFormStore } from '../stores/form'
import { computed } from 'vue';
const formStore = useFormStore()

const languagesComp = computed(() =>{
  return formStore.languages
})
</script>
<template>
    <div class="box-input-languages">

<div class="box-languages-send">
  <p>Languages</p>
</div>

<div class="box-languages-list">
  <ul>
    <li v-for="language in languagesComp" :key="language.id">
      <input type="checkbox" />
      <p>{{ language.description }}</p>
    </li>
  </ul>
</div>
</div>
</template>
