<script setup>
import API from "@/api/global";
import { useAuthStore } from "@/stores/auth";
import { computed, onMounted } from "vue";
    const store = useAuthStore()
    const formUser = computed(() =>{
        return [store.form]
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
        <div v-for="user in formUser" :key="user.id" class="formuser">
            <h1>username: {{user.username}}</h1>
            <h1>email: {{user.email}}</h1>
            <h1>address: {{user.address}}</h1>
            <h1>city: {{user.city}}</h1>
            <h1>password: {{user.password}}</h1>
        <div class="infos">
            <h1>hobbie:</h1>
            <h1 v-for="hobbie in user.hobbies" :key="hobbie.id">{{hobbie.description}}</h1>
        </div>
        <div class="infos">
           <h1>programming Languages:</h1> 
           <h1 v-for="language in user.programming" :key="language.id">{{ language.description }}</h1>
        </div>
        <div  class="infos">
            <h1>States: </h1>
            <h1 v-for="state in user.states" :key="state.id">{{ state.description }}</h1>
        </div>
        <div class="actions">
            <button @click="deletarform(user.id, user.password)">Delete</button>
        </div>
        </div>
    </div>
</template>