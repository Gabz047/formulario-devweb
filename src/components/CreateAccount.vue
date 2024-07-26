<script setup>
import { states, languages } from '@/utils/state'
import { ref, computed, onMounted } from 'vue'
import {useStatesStore} from '../stores/states'
import EmailComponent from './CreateAccount_Components/inputs/EmailComponent.vue'
import UsernameComponent from './CreateAccount_Components/inputs/UsernameComponent.vue'
import PasswordComponent from './CreateAccount_Components/inputs/PasswordComponent.vue'
import PasswordConfirmComponent from './CreateAccount_Components/inputs/PasswordConfirmComponent.vue'
import AdressComponent from './CreateAccount_Components/inputs/AdressComponent.vue'
import CityComponent from './CreateAccount_Components/inputs/CityComponent.vue'
import { useFormStore } from '../stores/form'

const hobbie = ref('')
const formStore = useFormStore()
const store = useStatesStore()

const statesComp = computed(() =>{
  return store.states
})

function addHobbie(hobbie) {
    formStore.hobbies.push(hobbie)
}

function removeHobbie(hobbie,index) {
    hobbie.splice(index, 1)
}

const showcontainer = false

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
  store.GetStates('/states/')
  console.log(statesComp.value)
})
</script>
<template>
  <main class="create-main">
<<<<<<< HEAD
=======
    <section class="create-img">
       <!--<img src="../assets/images/1296847 2.svg" /> -->
    </section>

>>>>>>> d2f427f (Fixing responsivity createaccount)
    <section class="create-section">
      <div class="create-container">
        <div class="company-brand">
          <h2>Robilson</h2>
          <h2 class="h2-purple">CONSÓRCIOS</h2>
        </div>

        <h1 class="tittle-create">Create</h1>

        <section class="container-inputs s1" v-if="nextSection === 0">
          <EmailComponent />

          <UsernameComponent />

          <PasswordComponent />

          <PasswordConfirmComponent />

          <AdressComponent />
        </section>

        <section class="container-inputs s2" v-if="nextSection === 1">

          <CityComponent />

          <span class="box-inputs">
            <div class="box-inputs-img">
                <i class="mdi mdi-map-marker-radius"></i>
            </div>
            <div class="box-inputs-content">
            <div class="box-inputs-tittle"><p>State</p></div>
            <select id="">
<<<<<<< HEAD
              <option v-for="state in statesComp" :key="state.id" :value="state.id">
                {{ state.description }}
=======
              <option v-for="state in states" :key="state.id" :value="state.id">
                <p class="option-name">{{ state.name }}</p>
>>>>>>> d2f427f (Fixing responsivity createaccount)
              </option>
            </select>
            </div>
          </span>

          <div class="box-input-hobbies">
            <div class="box-hobbies-send">
                <p class="tittle-hobbie">Hobbies</p>
              <input type="text" v-model="hobbie">
              <button @click="addHobbie(hobbie)"><i class="mdi mdi-send"></i></button>
            </div>

            <div class="box-hobbies-list">
              <ul>
                <li v-for="(hobbie,index) in formStore.hobbies" :key="index">
                  <p>{{ hobbie }}</p>
                  <button @click="removeHobbie(formStore.hobbies, index)"><i class="mdi mdi-close"></i></button>
                </li>
              </ul>
            </div>
          </div>

          <div class="box-input-languages">

            <div class="box-languages-send">
              <p>Languages</p>
            </div>

            <div class="box-languages-list">
              <ul>
                <li v-for="(language, index) in languages" :key="index">
                  <input type="checkbox" />
                  <p>{{ language.name }}</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section class="container-inputs s3" v-if="nextSection === 2">
          <div class="box-input-biography">
            <div class="box-inputs-biography-tittle">
              <p>Biography</p>
            </div>
            <textarea></textarea>
          </div>

          <div class="box-file">
            <div class="box-tittle-file">
              <p>Profile Photo</p>
            </div>
            <input type="file" />
          </div>
        </section>

        <div class="box-btn-create" v-if="nextSection === 2">
          <button>Create</button>
        </div>

        <span class="box-btn-next" @click="counter++" v-if="nextSection < 2">
          <p>Next section</p>
          <i class="mdi mdi-arrow-right-thick"></i>
        </span>
        <span class="box-btn-next" @click="counter++" v-else>
          <i class="mdi mdi-arrow-left-thick"></i>
          <p>Back to start</p>
        </span>

        <div class="box-changeTo-login">
          <p>Already have an account?</p>
          <p @click="$emit('login')" class="btn-login">Login</p>
        </div>
      </div>
    </section>
  </main>
</template>
