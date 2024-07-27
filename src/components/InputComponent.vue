<script setup>
import { ref, computed, onMounted } from 'vue';
import { useFormStore } from '@/stores/form';

const formStore = useFormStore()
const isTyping = ref(false)
const statesComp = computed(() =>{
  return formStore.states
})

onMounted(()=>{
    formStore.GetAll('/languages/', '/states/' )
})

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    tittle: {
        type: String,
        required: true
    },
    class: {
      type: String,
    },
    type: {
      type: String,
    },
    index: {
      type: Number,
    },
    eye: {
      type: String,
    },
    section: {
      type: String,
    },
    selectInput: {
      type: String,
    },
    heigth: {
      type: Number,
    },
    isHobbie: {
      type: Boolean,
    }
})

const emits = defineEmits([
  'changeType'
])
</script>
<template>
  <span class="box-inputs" v-if="props.section === formStore.info[props.index].section" :style="{ height: props.heigth + '%'}" >
    <div class="box-inputs-img">
      <i :class="props.icon"></i>
    </div>
    <div :class="props.class">
      <label>
        <div class="box-inputs-tittle" @click="isTyping = !isTyping"><p>{{  props.tittle }}</p></div>
        <input v-if="props.selectInput === 1" :type="props.type" :class="isTyping ? 'activeOn' : 'activeOff'" v-model="formStore.info[props.index].value"/>
        <select v-if="props.selectInput === 2">
              <option v-for="state in statesComp" :key="state.id" :value="state.id">
                <p class="option-name">{{ state.description }}</p>
              </option>
        </select>
      </label>
      <i
        :class="!hidepassword ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
        @click="emits('changeType')"
       v-if="props.eye"></i>
    </div>
  </span>
</template>
