import API from "@/api/global";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
const api = new API()
const router = useRouter()

export const useAuthStore = defineStore('login', () =>{
    const login = ref(false)
    const form = ref([])

    async function LogUser(forms){
       const formapi = await api.Listar('/forms/')
       const findform = formapi.find((formuser) => formuser.username === forms.username)

       if(findform){
            form.value = await api.Listar(`/forms/${findform.id}`)
            login.value = true
            localStorage.setItem('username', forms.username)
            localStorage.setItem('password', forms.password)
            router.push(`/${findform.id}`)
       }
       else{
            alert('ops, usuario não encontrado')
       }
    }

    return {LogUser, login, form}
})  