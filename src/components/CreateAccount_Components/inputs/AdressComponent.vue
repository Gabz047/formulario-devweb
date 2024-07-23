<script setup>
import { ref } from 'vue';
const isTyping = ref(false)
</script>
<template>
  <span class="box-inputs">
    <div class="box-inputs-img">
      <i class="mdi mdi-home"></i>
    </div>
    <div class="box-inputs-content">
      <label>
        <div class="box-inputs-tittle" @click="isTyping = !isTyping"><p>Adress</p></div>
        <input type="text" :class="isTyping ? 'activeOn' : 'activeOff'" />
      </label>
    </div>
  </span>
</template>
