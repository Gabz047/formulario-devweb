import API from "@/api/global";
import { defineStore } from "pinia";
import { ref } from "vue";
const api = new API()

export const useFormStore = defineStore("user", ()=>{

    const hobbies = ref([])
    const languages = ref([])
    const states = ref([])
    const email = ref(null)

    async function GetAll(linklanguages, linkstates){
        languages.value = await api.Listar(linklanguages) 
        states.value = await api.Listar(linkstates)
    }

    function SendForm(form){
        email.value = form.email
        console.log(email.value)
    }

    return {languages, GetAll, hobbies, states, SendForm}
})