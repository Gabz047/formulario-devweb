<script setup>
import { ref } from 'vue';
const isTyping = ref(false)
const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    tittle: {
        type: String,
        required: true
    }
})
</script>
<template>
  <span class="box-inputs">
    <div class="box-inputs-img">
      <i :class="props.icon"></i>
    </div>
    <div class="box-inputs-content">
      <label>
        <div class="box-inputs-tittle" @click="isTyping = !isTyping"><p>{{  props.tittle }}</p></div>
        <input type="text" :class="isTyping ? 'activeOn' : 'activeOff'" />
      </label>
    </div>
  </span>
</template>
