<script setup lang="ts">
import type { PropType } from 'vue';
import type { Overview } from '@/models/character';
import { computed } from '@vue/reactivity';

const props = defineProps({
    modelValue: { type: Object as PropType<Overview>, required: true },
})

const emit = defineEmits(['update:modelValue'])

const overview = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value),
});
</script>

<template>
    <div>
      <input v-model="overview.description">
    </div>
</template>
