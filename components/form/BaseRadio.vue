<template>
  <div class="flex flex-col gap-4 relative">
    <div class="flex justify-between w-full">
      <span class="font-bold text-xs " :class="error ? 'text-red-600' : ''">{{ label }}</span>
      <small v-if="error" class="text-red-600 font-bold text-xs select-none ml-auto md:absolute md:-top-6 md:right-0">
        {{ error }}
      </small>
    </div>
    <div class="flex flex-col gap-4 w-full">
      <label v-for="(option, index) in options" :key="option"
        class="cursor-pointer text-[14px] flex items-center gap-6 relative transition-colors focus-within:outline outline-dark-orange outline-1 rounded-lg border px-6 py-4 hover:outline"
        :class="error ? 'outline-red-600 outline outline-2' : ''">
        <input type="radio" :value="option.value" @input="$emit('update:modelValue', $event.target.value)"
          class="bg-transparent focus:outline-0 relative checked:bg-dark-orange" :name="name" />
        <span class="font-bold">{{ option.name }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    default: ''
  },
  onChange: {
    type: Function
  },
  label: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: []
  },
  name: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
input {
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

input::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
</style>