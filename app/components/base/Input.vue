<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  type?: 'text' | 'email' | 'password' | 'number'
  placeholder?: string
  modelValue?: string | number
  label?: string
}

interface Emits {
  (e: 'update:modelValue', value: string | number): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  modelValue: '',
  label: '',
})

const emit = defineEmits<Emits>()

const showPassword = ref(false)
const inputValue = ref(props.modelValue)

const computedType = computed(() => {
  if (props.type === 'password' && showPassword.value) {
    return 'text'
  }
  return props.type
})

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value: string | number = target.value

  if (props.type === 'number') {
    value = value === '' ? '' : parseFloat(value)
  }

  inputValue.value = value
  emit('update:modelValue', value)
}

const handleNumberInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  // Permet seulement les chiffres et le point décimal
  target.value = target.value.replace(/[^0-9.]/g, '')
}
</script>

<template>
  <div class="flex flex-col gap-1 text-base-content relative pt-3">
    <label v-if="label" class="text-sm font-medium text-secondary-content absolute top-0 left-4 bg-white z-10 px-2">
      {{ label }}
    </label>
    <div class="relative">
    <input
      class="w-full px-4 py-2 border border-secondary-content rounded-lg focus:outline-none"
      :type="computedType"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleInput"
      @keypress="props.type === 'number' && handleNumberInput($event)"
    >
    <button
      v-if="props.type === 'password'"
      type="button"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
      @click="togglePasswordVisibility"
    >
      <IconEye v-if="showPassword" />
      <IconEyeOff v-else />
    </button>
    </div>
  </div>
</template>
