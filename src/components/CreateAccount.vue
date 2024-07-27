<script setup>
import { ref, computed, onMounted } from 'vue'
import { useFormStore } from '../stores/form'
import InputComponent from './InputComponent.vue'
import InputHobbiesComponent from './InputHobbiesComponent.vue'
import InputLanguagesComponent from './InputLanguagesComponent.vue'
import InputBiographyComponent from './InputBiographyComponent.vue'
import LowerInfos from './CreateAccount_Components/LowerInfos.vue'

const formStore = useFormStore()
const hidepassword = ref(false)

const emits = defineEmits([
  'login'
])

const counter = ref(0)

const nextSection = computed(() => {
  if (counter.value === 3) {
    console.log(counter.value)
    return counter.value = 0
  } else {
    return counter.value
  }
})

onMounted(() =>{
  formStore.GetAll('/languages/', '/states/')
  
})
</script>
<template>
  <main class="create-main">
    <section class="create-img">
       <!--<img src="../assets/images/1296847 2.svg" /> -->
    </section>

    <section class="create-section">
      <div class="create-container">
        <div class="company-brand">
          <h2>Robilson</h2>
          <h2 class="h2-purple">CONSÓRCIOS</h2>
        </div>

        <h1 class="tittle-create">Create</h1>

        <section class="container-inputs s1" v-if="nextSection === 0">  
          <InputComponent v-for="item, index in formStore.info" :key="index" :tittle="item.tittle" :icon="item.icon" :class="item.class" v-model="item.value" :index="index" :eye="item.eye" :type="hidepassword ? item.type1 : item.type2" @change-type="hidepassword = !hidepassword" :section="1" :select-input="item.selectInput" :heigth="item.heigth" />
        </section>

        <section class="container-inputs s2" v-if="nextSection === 1">
          <InputComponent v-for="item, index in formStore.info" :key="index" :tittle="item.tittle" :icon="item.icon" :class="item.class" v-model="item.value" :index="index" :eye="item.eye" :section="2" :select-input="item.selectInput" :heigth="item.heigth" />
          <InputHobbiesComponent />
          <InputLanguagesComponent />
        </section>

        <section class="container-inputs s3" v-if="nextSection === 2">

          <InputBiographyComponent />

        </section>

        <div class="box-btn-create" v-if="nextSection === 2">
          <button @click="formStore.SendForm()">Create</button>
        </div>

        <LowerInfos @next="counter++" :state="nextSection" @login="emits('login')" />
      </div>
    </section>
  </main>
</template>
