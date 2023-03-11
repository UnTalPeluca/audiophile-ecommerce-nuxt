<template>
  <label class="flex flex-col gap-2 relative">
    <div class="flex justify-between items-center">
      <span class="font-bold text-xs" :class="error ? 'text-red-600' : ''">{{ label }}</span>
      <small v-if="error" class="text-red-600 font-bold text-xs select-none ml-auto">
        {{ error }}
      </small>
    </div>
    <input v-bind="$attrs" :value="modelValue" @input="handleInput($event)"
      class="transition-colors bg-transparent rounded-lg border px-6 py-4 text-[14px] font-bold placeholder:text-pure-black/40 text-pure-black"
      :class="error ? ['outline-red-600 outline outline-2'] : 'focus:outline-dark-orange focus:outline-1 hover:outline-dark-orange focus:outline hover:outline hover:outline-1'">
  </label>
</template>

<script setup>
const props = defineProps({
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
  format: {
    type: String,
    default: ''
  }
});

const handleInput = ($event) => {
  emit('update:modelValue', format($event.target.value));
}
const format = (value) => {
  switch (props.format) {
    case 'phone':
      var cleaned = ("" + value).replace(/\D/g, "");
      var match = cleaned.match(/^(1|)?(\d{0,3})?(\d{0,3})?(\d{0,4})?$/);
      var intlCode = match[1] ? "+1 " : "";
      return [
        intlCode,
        match[2] ? "(" : "",
        match[2],
        match[3] ? ") " : "",
        match[3],
        match[4] ? "-" : "",
        match[4],
      ].join("");
    default:
      return value
  }
}
const emit = defineEmits(['update:modelValue']);
</script>