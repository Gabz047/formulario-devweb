<script setup>
import { onMounted, reactive, ref } from 'vue'
import {useAuthStore} from '../stores/auth.js'
const form = reactive({
  username: null,
  password: null
})
const store = useAuthStore()
const callemail = ref(false)
const callpassword = ref(false)
const passwordtotext = ref(false)

function Login(){
  store.LogUser(form)
}

onMounted(() =>{
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')

  if(username && password){
    form.username = username
    form.password = password
    callemail.value = true
    callpassword.value = true
  }
})

</script>
<template>
  <div class="form-container">
    <div class="card">
      <div id="robilson">
        <H2>Robilson</H2>
        <h2 id="property">CONSÓRCIOS</h2>
      </div>
      <div id="title">
        <h1>LOGIN</h1>
      </div>
      <form>
        <div class="form-fields">
          <i class="mdi mdi-account"></i>
          <div class="input-container">
            <label>
              <span class="floating-label" @click="callemail = !callemail">Username</span>
              <input type="text" id="emailinput" :class="callemail ? 'inputon' : 'inputoff'" v-model="form.username"/>
            </label>
          </div>
        </div>
        <div class="form-fields" id="password-form-field">
          <div id="password-field">
            <i class="mdi mdi-key"></i>
            <div class="input-container">
              <label>
                <span class="floating-label" @click="callpassword = !callpassword">Password</span>
                <input :type="passwordtotext ? 'text' : 'password'" :class="callpassword ? 'inputon' : 'inputoff'" v-model="form.password"/>
              </label>
            </div>
          </div>
          <div>
            <i :class="passwordtotext ? 'mdi mdi-eye' : 'mdi mdi-eye-off'" @click="passwordtotext = !passwordtotext"></i>
          </div>
        </div>
      </form>
      <div class="actions">
          <div>
              <input type="checkbox" id="remember">
              <label for="">Remember me</label>
          </div>
          <div>
            <router-link to="/forgot"><p for="">Forgot password?</p></router-link>
        </div>
      </div>
      <div class="btn-actions">
          <button @click="Login">Login</button>
          <p>Don't have an account? <span @click="$emit('create')">Register</span></p>
      </div>
    </div>
  </div>
</template>
