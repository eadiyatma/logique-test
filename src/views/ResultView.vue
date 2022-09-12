<script setup>
import { useRouter } from "vue-router";
import LayoutComponent from "../components/LayoutComponent.vue";
import { useSearchStore } from "../stores/search";

const store = useSearchStore();
const router = useRouter();

function backToSearch() {
  store.search = "";
  router.push("/");
}
</script>

<template>
  <LayoutComponent is-result custom-background="bg-[#f8fafc]">
    <div
      class="flex justify-between bg-gradient-to-r from-[#712bda] to-[#a45deb] px-4 py-3 text-white shadow-lg"
    >
      <img src="@/assets/menu.svg" alt="" width="14" height="11" />
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/ngmusic.svg"
        width="72"
        height="15"
      />
      <button @click="backToSearch">
        <img src="@/assets/search.svg" alt="" width="14" height="11" />
      </button>
    </div>
    <div class="mt-10 mb-7 flex flex-col justify-between">
      <div class="text-center text-sm flex gap-2 items-center justify-center">
        <div class="">Search Result For:</div>
        <div class="text-[#7b34dd] font-bold text-lg ml">
          {{ store.search }}
        </div>
      </div>

      <div class="px-4 mt-10 flex flex-col gap-4">
        <div v-for="(data, index) in store.dataList" :key="index">
          <div class="bg-white rounded-lg px-2 py-2 shadow-md flex gap-2">
            <div class="">
              <img :src="data.artworkUrl100" alt="" width="100" height="100" />
            </div>
            <div class="flex flex-col w-full justify-between">
              <div class="text-xs">{{ data.artistName }}</div>
              <div>{{ data.trackName }}</div>
              <div class="flex justify-between items-center">
                <div
                  class="text-white py-1 px-2 rounded-full bg-green-400 text-xs"
                >
                  {{ data.primaryGenreName }}
                </div>
                <div class="text-yellow-600">
                  {{ data.currency }} {{ data.trackPrice }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </LayoutComponent>
</template>