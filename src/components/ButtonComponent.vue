<script setup>
const props = defineProps({
  transparent: {
    default: false,
    type: Boolean,
  },
});
</script>

<template>
  <button
    class="bg-white rounded-full text-text-color text-sm py-3 w-full"
    :class="props.transparent ? 'bg-opacity-30 text-white' : 'bg-opacity-100'"
  >
    <slot />
  </button>
</template>
