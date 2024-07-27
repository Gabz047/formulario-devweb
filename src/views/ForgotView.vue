<script setup>
import API from '@/api/global'
import router from '@/router'
import { onMounted, reactive, ref } from 'vue'

const callnew = ref(false)
const callconfirm = ref(false)
const passwordtotextnew = ref(false)
const passwordtotextconfirm = ref(false)
const api = new API()
const formuser = ref([])
const recuperationpassword = reactive({
  password: '',
  confirmpassword: ''
})

async function updatepassword() {
  const username = localStorage.getItem('username')
  const findform = formuser.value.find(forms => forms.username === username)
  if (findform) {
    if (
      recuperationpassword.password === recuperationpassword.confirmpassword ||
      recuperationpassword.confirmpassword === recuperationpassword.password
    ) {
      alert('password recuperated')
      localStorage.setItem('password', recuperationpassword.password)
      await api.Atualizar(`/forms/${findform.id}/`, { password: recuperationpassword.password })
      router.push('/')
    } else {
      alert('credenciais não se combinam, tentenovamente')
    }
  }
  else{
    alert('voce não possui um usuario cadastrado no sistema')
  }
}
onMounted(async () =>{
    formuser.value = await api.Listar('/forms/') 
})
</script>
<template>
  <div class="forgot-container">
    <div class="forgotpassword">
      <h1 style="text-align: center">esqueceu a senha?</h1>
      <div class="form-fields-forgot">
        <label>
          <span @click="callnew = !callnew">New Password</span>
          <input :type="passwordtotextnew ? 'text' : 'password'" id="emailinput" :class="callnew ? 'inputon' : 'inputoff'" v-model="recuperationpassword.password"/>
        </label>
        <div>
          <i
            :class="passwordtotextnew ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
            @click="passwordtotextnew = !passwordtotextnew"
          ></i>
        </div>
      </div>
      <div class="form-fields-forgot">
        <div class="input-container">
          <label>
            <span @click="callconfirm = !callconfirm">Confirm Password</span>
            <input :type="passwordtotextconfirm ? 'text' : 'password'" id="emailinput" :class="callconfirm ? 'inputon' : 'inputoff'" v-model="recuperationpassword.confirmpassword"/>
          </label>
        </div>
        <div>
          <i
            :class="passwordtotextconfirm ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
            @click="passwordtotextconfirm = !passwordtotextconfirm"
          ></i>
        </div>
      </div>
      <div class="actions">
        <button @click="updatepassword">Recuperar</button>
      </div>
    </div>
  </div>
</template>
