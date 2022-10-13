<script setup lang="ts">
import type { PropType } from 'vue';
import type { Profile } from '@/models/character';
import { useModelWrapper } from '@/hooks/modelWrapper';

const props = defineProps({
    modelValue: { type: Object as PropType<Profile>, required: true },
})

const emit = defineEmits(['update:modelValue'])

const profile = useModelWrapper<Profile>(props, emit);

</script>

<template>
    <div>
      <input v-model="profile.description">
    </div>
</template>
