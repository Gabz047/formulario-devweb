import API from "@/api/global";
import { defineStore } from "pinia";
import { ref } from "vue";
const api = new API()

export const useStatesStore = defineStore('states', () =>{
    const states = ref([])
    
    async function GetStates(link){
        states.value = await api.Listar(link) 
        console.log(states.value)
    }

    return {states, GetStates}
})