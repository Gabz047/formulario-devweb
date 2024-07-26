import API from "@/api/global";
import { defineStore } from "pinia";
import { ref } from "vue";
const api = new API()

export const useLanguagesStore = defineStore('languages', () =>{
    const languages = ref([])
    
    async function GetLanguages(link){
        languages.value = await api.Listar(link) 
        console.log(languages.value)
    }

    return {languages, GetLanguages}
})