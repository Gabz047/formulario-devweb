import { defineStore } from "pinia";
import { ref } from "vue";

export const useFormStore = defineStore("user", ()=>{

    const hobbies = ref([])


    return {hobbies}
})