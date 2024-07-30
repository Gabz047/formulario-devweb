import API from '@/api/global'
import router from '@/router'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
const api = new API()

export const useFormStore = defineStore('user', () => {
  const languages = ref([])
  const states = ref([])
  const hobbies = ref([])
  const biography = ref('')

  async function GetAll(linklanguages, linkstates) {
    languages.value = await api.Listar(linklanguages)
    states.value = await api.Listar(linkstates)
  }

  const info = ref([
    {
      value: '',
      tittle: `Email`,
      icon: `mdi mdi-email`,
      class: `box-inputs-content`,
      eye: false,
      type1: 'text',
      type2: 'text',
      section: 1,
      selectInput: 1,
      heigth: 16
    },
    {
      value: '',
      tittle: `Username`,
      icon: `mdi mdi-account`,
      class: `box-inputs-content`,
      eye: false,
      type1: 'text',
      type2: 'text',
      section: 1,
      selectInput: 1,
      heigth: 16
    },
    {
      value: '',
      tittle: `Password`,
      icon: `mdi mdi-lock`,
      class: `box-inputs-content`,
      eye: true,
      type1: 'text',
      type2: 'password',
      section: 1,
      selectInput: 1,
      heigth: 16
    },
    {
      value: '',
      tittle: `Confirm password`,
      icon: `mdi mdi-lock-check`,
      class: `box-inputs-content`,
      eye: true,
      type1: 'text',
      type2: 'password',
      section: 1,
      selectInput: 1,
      heigth: 16
    },
    {
      value: '',
      tittle: `Adress`,
      icon: `mdi mdi-home`,
      class: `box-inputs-content`,
      eye: false,
      type1: 'text',
      type2: 'text',
      section: 1,
      selectInput: 1,
      heigth: 16
    },
    {
      value: '',
      tittle: `City`,
      icon: `mdi mdi-city`,
      class: `box-inputs-content`,
      eye: false,
      type1: 'text',
      type2: 'text',
      section: 2,
      selectInput: 1,
      heigth: 16
    },
    {
      value: '',
      tittle: `State`,
      icon: `mdi mdi-map-marker-radius`,
      class: `box-inputs-content`,
      eye: false,
      section: 2,
      selectInput: 2,
      heigth: 16
    }
  ])

  const userInfo = reactive({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    states: '',
    biografia: '',
    hobbies: [],
    programming: []
  })

  async function SendForm(emit) {
    const hobbyapi = await api.Listar('/hobbies/')
    userInfo.email = info.value[0].value
    userInfo.username = info.value[1].value
    userInfo.password = info.value[2].value
    userInfo.confirmPassword = info.value[3].value
    userInfo.address = info.value[4].value
    userInfo.city = info.value[5].value
    userInfo.states = info.value[6].value
    userInfo.biografia = biography.value
    userInfo.hobbies = hobbies.value

    console.log(userInfo)

    for (const language of userInfo.programming) {
      let arr = []
      const findlanguage = languages.value.find((lang) => lang.description === language || lang.id === language)
      arr.push(findlanguage.id)
      userInfo.programming = arr
    }

    for (const hobby of userInfo.hobbies) {
      let arr = []
      const findhobby = hobbyapi.find((hob) => hob.description === hobby)
      arr.push(findhobby.id)
      userInfo.hobbies = arr
    }

    if (
      !userInfo.email ||
      !userInfo.address ||
      !userInfo.city ||
      !userInfo.biografia ||
      !userInfo.confirmPassword ||
      userInfo.hobbies.length === 0 ||
      !userInfo.states ||
      userInfo.programming.length === 0 ||
      !userInfo.username ||
      !userInfo.password
    ) {
      alert('alguns campos não foram preenchidos')
    } else if (!userInfo.email.includes('@' && '.com')) {
      alert('email inválido')
    } else if (
      userInfo.confirmPassword !== userInfo.password ||
      userInfo.password !== userInfo.confirmPassword
    ) {
      alert('credenciais invalidas')
    } else {
      alert('usuario criado')
      await api.Criar('/forms/', userInfo)
      emit('login')
    }
  }

  return { languages, GetAll, states, SendForm, info, userInfo, hobbies, biography }
})
