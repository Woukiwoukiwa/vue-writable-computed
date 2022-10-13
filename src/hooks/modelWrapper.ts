import type {  WritableComputedRef } from 'vue';
import { computed } from 'vue';

export function useModelWrapper<T>(
    props: Readonly<any>,
    emit: (event: 'update:modelValue', ...args: any[]) => void,
): WritableComputedRef<T> {
    return computed<T>({
        get: () => props.modelValue,
        set: value => emit('update:modelValue', value),
    });
}