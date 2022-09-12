import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios  from 'axios'

export const useSearchStore = defineStore('search', () => {
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  const dataList = ref([])
  const search = ref([])
  async function searchData(){
    try{
      const data = await axios.get('https://itunes.apple.com/search',{
        params: {
          term: search.value,
          country: 'ID',
        }
      })
      dataList.value = data.data.results;
      return true;
    }catch(e){
      console.log(data);
    }
  }

  return { dataList,search, searchData }
})
