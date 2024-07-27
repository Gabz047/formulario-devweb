<script setup>
import API from "@/api/global";
import { useAuthStore } from "@/stores/auth";
import { computed, onMounted } from "vue";
    const store = useAuthStore()
    const formUser = computed(() =>{
        return store.form
    })

const api = new API()

async function deletarform(id, password){
    for(let i = 3; i >= 0; i--){
        const confirmpassword = prompt('you have sure that you want to delete your form?')
        if(confirmpassword === password){
            alert('success deleted form')
            await api.Deletar(`/forms/${id}`)
            location.reload()
            break
        }
        else if(i > 0){
            alert(`you have more ${i} tries`)
        }
        else{
            alert(`unsuccess deleted form`)
        }
    }
}

onMounted(() =>{
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')
  if (username && password){
    store.LogUser({username: username, password: password})
  }
})
</script>
<template>
    <div class="form-container">
        <div class="formuser">
            <h1>username: {{formUser.username}}</h1>
            <h1>email: {{formUser.email}}</h1>
            <h1>address: {{formUser.address}}</h1>
            <h1>city: {{formUser.city}}</h1>
            <h1>password: {{formUser.password}}</h1>
        <div class="infos">
            <h1>hobbie:</h1>
            <h1 v-for="hobbie in formUser.hobbies" :key="hobbie.id">{{hobbie.description}}</h1>
        </div>
        <div class="infos">
           <h1>programming Languages:</h1> 
           <h1 v-for="language in formUser.programming" :key="language.id">{{ language.description }}</h1>
        </div>
        <h1>State: {{formUser.states.description}}</h1>
        <h1>biography:</h1>
        <h1>{{formUser.biografia}}</h1>
        <div class="actions">
            <button @click="deletarform(user.id, user.password)">Delete</button>
        </div>
        </div>
    </div>
</template>