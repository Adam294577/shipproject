import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ApiGetPing } from '@/Api'
export const useCounterStore = defineStore('counter', () => {
  const UserData = ref(null)
  const Ping = ref(null)
  const GetPing = async () => {
    try {
      const res = await ApiGetPing()
      if (res.status === 200) {
        console.log(res.data)
        // Captcha.value = res.data.Code
      }
    } catch (err) {
      console.log(err)
    }
  }

  return { GetPing, Ping, UserData }
})
