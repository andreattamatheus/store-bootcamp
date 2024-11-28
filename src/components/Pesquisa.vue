<script setup>
import { defineProps, defineEmits } from 'vue'


defineProps({
    modelValue: {
        type: String
    },
    podeLimpar: {
        type: Boolean,
        default: false
    }
})


defineEmits(['update:modelValue'])

</script>

<template>
    <div>
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
        <button v-if="podeLimpar" v-on:click="$emit('update:modelValue', '')">Limpar</button>
    </div>
</template>