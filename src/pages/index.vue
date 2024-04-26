<script setup>
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { ApiGetCaptcha, ApiPostLogin } from '@/Api'
import { useCounterStore } from '@/stores/counter.js'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { Ping } = storeToRefs(store)
const { GetPing } = store
/* add icons to the library */
library.add(fab, fas, far)
const router = useRouter()
const GetCaptcha = async () => {
  try {
    const res = await ApiGetCaptcha()
    if (res.status === 200) {
      Captcha.value = res.data.Code
      CaptchaHashCode.value = res.data.HashCode
    }
  } catch (err) {
    console.log(err)
  }
}
const PostLogin = async () => {
  try {
    const body = {
      Name: UserAccount.value,
      Permit: UserPermit.value,
      CaptchaHashCode: null
    }
    if (UserCaptcha.value === CaptchaRender.value) {
      body.CaptchaHashCode = CaptchaHashCode.value
    }
    // console.log('輸入結果', body)
    const res = await ApiPostLogin(body)
    if (res.status === 200) {
      console.log(res.data)
      localStorage.setItem('FixAcountBool', FixAcount.value)
      localStorage.setItem('UserAccount', UserAccount.value)
      router.push('/list')
    }
  } catch (err) {
    console.log(err.response.data)
    ErrorMsg.value = err.response.data
    if (UserCaptcha.value !== CaptchaRender.value) {
      ErrorMsg.value = '驗證碼輸入錯誤!'
    }

    GetCaptcha()
  } finally {
  }
}
const ErrorMsg = ref('')
const UserAccount = ref('')
const UserPermit = ref('')
const UserCaptcha = ref('')
const FixAcount = ref(false)
const Captcha = ref(null)
const CaptchaRender = computed(() => {
  return Captcha.value
})
const CaptchaHashCode = ref(null)
const init = async () => {
  const FixAcountBool = localStorage.getItem('FixAcountBool')
  const Account = localStorage.getItem('UserAccount')
  if (FixAcountBool === 'true') {
    FixAcount.value = true
    UserAccount.value = Account
  }
  if (FixAcountBool === 'false') {
    FixAcount.value = false
    UserAccount.value = ''
    localStorage.removeItem('FixAcountBool')
    localStorage.removeItem('UserAccount')
  }
  await GetCaptcha()
}
init()
// 偵測是否有連上網路
setInterval(() => {
  // GetPing()
}, 1000)
</script>

<!-- login -->
<template>
  <div class="container">
    <div class="row justify-content-center mb-5">
      <div class="col">
        <img src="/src/assets/images/ambulanceLogo.svg" alt="" class="img-fluid d-block mx-auto" />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="input-group input-group-lg mb-3">
        <input
          v-model="UserAccount"
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="帳號"
        />
      </div>
      <div class="input-group input-group-lg">
        <input v-model="UserPermit" type="password" class="form-control" placeholder="密碼" />
      </div>
      <a href="#" class="d-block text-end text-dark text-decoration-none pe-3 my-2"
        ><small class="opacity-100">忘記密碼</small></a
      >
      <div class="col">
        <div class="input-group input-group-lg mb-3">
          <input
            v-model="UserCaptcha"
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            placeholder="驗證碼"
          />
        </div>
      </div>
      <div class="col valid-code d-flex align-items-center justify-content-between px-4">
        <p class="text-light fs-5 mb-0 font-bold italic">{{ CaptchaRender }}</p>
        <a @click="GetCaptcha" href="#"
          ><font-awesome-icon :icon="['fas', 'arrows-rotate']" style="color: #ffffff"
        /></a>
      </div>
      <div class="form-check form-switch">
        <input
          v-model="FixAcount"
          class="form-check-input fs-4"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label fs-4" for="flexSwitchCheckDefault">記住帳號</label>
      </div>
      <div class="d-grid gap-2 mt-3">
        <a
          @click="PostLogin"
          class="cursor-pointer text-center text-[#000] no-underline font-bold py-3 bg-[#FBB067] rounded-[8px]"
        >
          <span class="tracking-[10px]">登入</span>
        </a>
        <span class="absolute top-[calc(100%+20px)] text-[#F00] font-bold">{{ ErrorMsg }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);
  padding: 0 100px;
}
::placeholder {
  color: gray;
  opacity: 0.5; /* Firefox */
}

::-ms-input-placeholder {
  /* Edge 12-18 */
  color: gray;
}

.valid-code {
  background: rgb(38, 56, 88);
  height: 48px;
  margin-right: 13px;
  border-radius: 5px;
}

.form-switch {
  padding-left: 4.5em;
}
.btn {
  /* background-color: rgb(240, 179, 115); */
  text-decoration: none;
}
</style>
