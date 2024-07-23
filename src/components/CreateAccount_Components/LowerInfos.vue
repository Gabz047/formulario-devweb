<template>
  <span class="box-btn-next">
    <p>Next section</p>
    <i class="mdi mdi-arrow-right-thick"></i>
  </span>

  <div class="box-changeTo-login">
    <p>Already have an account?</p>
    <p @click="$emit('login')" class="btn-login">Login</p>
  </div>
</template>
