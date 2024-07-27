
<script setup>
const emits = defineEmits([
  'next',
  'login'
])

const props = defineProps({
  state: {
    type: String,
  }
})
</script>
<template>
<span class="box-btn-next" @click="emits('next')" v-if="props.state < 2">
  <p>Next section</p>
  <i class="mdi mdi-arrow-right-thick"></i>
</span>
<span class="box-btn-next" @click="emits('next')" v-else>
  <i class="mdi mdi-arrow-left-thick"></i>
  <p>Back to start</p>
</span>

<div class="box-changeTo-login">
  <p>Already have an account?</p>
  <p @click="emits('login')" class="btn-login">Login</p>
</div>
</template>