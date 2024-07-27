<script setup>
import { useFormStore } from '../stores/form'
import { computed, onMounted } from 'vue';
const formStore = useFormStore()

const languagesComp = computed(() =>{
  return formStore.languages
})

onMounted(()=>{
    formStore.GetAll('/languages/', '/states/' )
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
      <input type="checkbox" :value="language.description" v-model="formStore.userInfo.programming" />
      <p>{{ language.description }}</p>
    </li>
  </ul>
</div>
</div>
</template>
