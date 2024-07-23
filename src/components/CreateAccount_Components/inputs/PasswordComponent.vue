<script setup>
import { ref } from 'vue';
const isTyping = ref(false)
const hidepassword = ref(false)

</script>
<template>
  <span class="box-inputs">
    <div class="box-inputs-img">
      <i class="mdi mdi-lock"></i>
    </div>
    <div class="box-inputs-content">
      <label>
        <div class="box-inputs-tittle" @click="isTyping = !isTyping"><p>Password</p></div>
        <input
          :type="hidepassword ? 'password' : 'text'"
          :class="isTyping ? 'activeOn' : 'activeOff'"
        />
      </label>
      <i
        :class="!hidepassword ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
        @click="hidepassword = !hidepassword"
      ></i>
    </div>
  </span>
</template>
