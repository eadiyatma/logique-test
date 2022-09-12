<script setup>
import LayoutComponent from "../components/LayoutComponent.vue";
</script>

<template>
  <LayoutComponent is-result custom-background="bg-[#f8fafc]">
    <div
      class="flex justify-between bg-gradient-to-r from-[#712bda] to-[#a45deb] px-4 py-3 text-white shadow-lg"
    >
      <div>menu</div>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/ngmusic.svg"
        width="72"
        height="15"
      />
      <div>menu</div>
    </div>
    <div class="mt-10 mb-7 flex flex-col justify-between">
      <div class="text-center text-sm flex gap-2 items-center justify-center">
        <div class="">Search Result For:</div>
        <div class="text-[#7b34dd] font-bold text-lg ml">hasil</div>
      </div>

      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  </LayoutComponent>
</template>
