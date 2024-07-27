<script setup>
import LoginComp from "@/components/LoginComp.vue";
import CreateAccount from "@/components/CreateAccount.vue";
import { ref } from "vue";
const mudar = ref(false)
</script>
<template>
    <login-comp v-if="!mudar" @create="mudar = !mudar"/>
    <CreateAccount @login="mudar = !mudar" v-else/>
</template>
