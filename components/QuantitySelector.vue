<template>
  <div class="flex justify-between items-center bg-cream-white w-32">
    <button :class="buttonClasses" class="hover:text-dark-orange" @click="decrease">
      -
    </button>
    <input :value="modelValue" class="bg-transparent w-8 text-center font-bold " disabled />
    <button :class="buttonClasses" class="hover:text-dark-orange" @click="increase">
      +
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  onChange: {
    type: Function
  },
  allowZero: {
    type: Boolean,
    default: false
  }
});
const emits = defineEmits(['update:modelValue']);
const buttonClasses = 'w-8 h-8 flex items-center justify-center text-pure-black/25 font-bold';

const decrease = () => {
  if (props.allowZero) {
    if (props.modelValue - 1 === 0) {
      emits('update:modelValue', props.modelValue - 1)
      props.onChange
    } else {
      emits('update:modelValue', props.modelValue - 1)
      props.onChange
    }
  } else if (props.modelValue - 1 === 0) {
    return
  } else {
    emits('update:modelValue', props.modelValue - 1)
    props.onChange
  }
}
const increase = () => {
  emits('update:modelValue', props.modelValue + 1)
  props.onChange
}

</script>