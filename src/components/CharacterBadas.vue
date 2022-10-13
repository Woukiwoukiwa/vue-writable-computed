<script setup lang="ts">
import type { PropType } from 'vue';
import type { Overview } from '@/models/character';
import { computed } from '@vue/reactivity';

const props = defineProps({
    modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const badas = computed({
    get: () => props.modelValue ? "yes" : "no",
    set: value => emit('update:modelValue', value === "yes"),
});
</script>

<template>
    <div>
      <input v-model="badas">
    </div>
</template>