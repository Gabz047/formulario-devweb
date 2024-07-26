<script setup>
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";
const store = useAuthStore()
    const formUser = computed(() =>{
        return store.form
    })
</script>
<template>
    <div>
        <div v-for="usuario in formUser" :key="usuario.id">
            {{ usuario.username }}
        </div>
    </div>
</template>