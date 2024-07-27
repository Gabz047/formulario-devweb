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

    const info = ref([
        {value: '', tittle: `Email`, icon: `mdi mdi-email`, class: `box-inputs-content`, eye: false, type1: 'text', type2: 'text', section: 1, selectInput: 1, heigth: 16 },
        {value: '', tittle: `Username`, icon: `mdi mdi-account`, class: `box-inputs-content`, eye: false, type1: 'text', type2: 'text', section: 1, selectInput: 1, heigth: 16 },
        {value: '', tittle: `Password`, icon: `mdi mdi-lock`, class: `box-inputs-content`, eye: true, type1: 'text', type2: 'password', section: 1, selectInput: 1, heigth: 16 },
        {value: '', tittle: `Confirm password`, icon: `mdi mdi-lock-check`, class: `box-inputs-content`, eye: true, type1: 'text', type2: 'password', section: 1, selectInput: 1, heigth: 16 },
        {value: '', tittle: `Adress`, icon: `mdi mdi-home`, class: `box-inputs-content`, eye: false, type1: 'text', type2: 'text', section: 1, selectInput: 1, heigth: 16 },
        {value: '', tittle: `City`, icon: `mdi mdi-city`, class: `box-inputs-content`, eye: false, type1: 'text', type2: 'text', section: 2, selectInput: 1, heigth: 16 },
        {value: '', tittle: `State`, icon: `mdi mdi-map-marker-radius`, class: `box-inputs-content`, eye: false, section: 2, selectInput: 2, heigth: 16 },
        ])

    

    function SendForm(form){
        email.value = form.email
        console.log(email.value)
    }

    return {languages, GetAll, hobbies, states, SendForm, info}
})