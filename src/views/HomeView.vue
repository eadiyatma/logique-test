<script setup>
import LayoutComponent from "../components/LayoutComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { useSearchStore } from "../stores/search";
import { useRouter } from "vue-router";
const store = useSearchStore();
const router = useRouter();

async function searchData() {
  const data = await store.searchData();
  if (data) router.push("/result");
}
</script>

<template>
  <LayoutComponent>
    <div class="px-[30px] py-[26px] flex flex-col justify-between h-screen">
      <div></div>
      <div class="flex justify-center">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="72"
          height="83"
        />
      </div>
      <div class="flex flex-col gap-3">
        <input
          v-model="store.search"
          class="placeholder:text-center py-3 px-3 bg-white rounded-full"
          placeholder="Artist / Album / Title"
        />
        <ButtonComponent transparent @click="searchData">
          Search
        </ButtonComponent>
      </div>
    </div>
  </LayoutComponent>
</template>
