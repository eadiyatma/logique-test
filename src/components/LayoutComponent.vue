<script setup>
const props = defineProps({
  isResult: {
    default: false,
    type: Boolean,
  },
  customBackground: {
    default: "",
    type: String,
  },
});
</script>

<template>
  <main class="flex justify-center">
    <div
      class="w-96 h-screen"
      :class="`${
        props.isResult ? '' : 'bg-gradient-to-b from-[#712bda] to-[#a45deb]'
      } ${props.customBackground}`"
    >
      <slot />
    </div>
  </main>
</template>
