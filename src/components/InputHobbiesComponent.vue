<script setup>
import { useFormStore } from '../stores/form'
import { ref } from 'vue'
import API from '@/api/global'
const api = new API()

const hobbie = ref('')
const formStore = useFormStore()

async function addHobbie(hobbie) {
    formStore.hobbies.push(hobbie)
    await api.Criar('/hobbies/', {description: hobbie})
}

async function removeHobbie(hobbie,index) {
    hobbie.splice(index, 1)
    const hobbiesapi = await api.Listar('/hobbies/')
    const findhobbie = hobbiesapi.find(hobbie => hobbie.description === hobbie)
    await api.Deletar(`/hobbies/${findhobbie.id}`)
}


</script>
<template>
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
</template>