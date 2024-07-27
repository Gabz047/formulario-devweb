<script setup>
import { useFormStore } from '@/stores/form';
const formStore = useFormStore()

</script>
<template>
      <div class="box-input-biography">
            <div class="box-inputs-biography-tittle">
              <p>Biography</p>
            </div>
            <textarea v-model="formStore.biography"></textarea>
          </div>
</template>