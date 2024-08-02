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
            <p>username: {{formUser.username}}</p>
            <p>email: {{formUser.email}}</p>
            <p>address: {{formUser.address}}</p>
            <p>city: {{formUser.city}}</p>
            <p>password: {{formUser.password}}</p>
        <div class="infos">
            <p>hobbie:</p>
            <p v-for="hobbie in formUser.hobbies" :key="hobbie.id">{{hobbie.description}}</p>
        </div>
        <div class="infos">
           <p>programming Languages:</p> 
           <p v-for="language in formUser.programming" :key="language.id">{{ language.description }}</p>
        </div>
        <p>State: {{formUser.states.description}}</p>
        <p>biography:</p>
        <p>{{formUser.biografia}}</p>
        <div class="actions">
            <button @click="deletarform(user.id, user.password)">Delete</button>
        </div>
        </div>
    </div>
</template>