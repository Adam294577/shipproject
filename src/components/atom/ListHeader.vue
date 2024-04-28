<script setup>
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fab, fas, far)

import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter.js'

import { ApiGetRescueSheetCount } from '@/Api'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { UserData } = storeToRefs(store)

const router = useRouter()
const InReferralCount = ref(0)
const ReferralFinishCount = ref(0)

function gotoDetail() {
  console.log('gotoDetail')
  router.push('/detail')
}

function logout() {
  router.push('/')
  setTimeout(() => {
    location.reload()
  }, 1000)
}
const GetRescueSheetCount = async () => {
  try {
    const res = await ApiGetRescueSheetCount()
    if (res.status === 200) {
      InReferralCount.value = res.data.InReferralCount
      ReferralFinishCount.value = res.data.ReferralFinishCount
    }
  } catch (err) {
    console.log(err)
  }
}
const init = async () => {
  if (UserData.value === null) logout()
  await GetRescueSheetCount()
}

setTimeout(() => {
  init()
}, 1000)
</script>
<template>
  <div class="container-fluid bg-blue header">
    <div class="justify-center items-center flex h-full pt-8">
      <div class="w-3/4 xl:w-1/3">
        <div class="flex gap-x-8">
          <div class="pt-4 relative xl:scale-[1.2] xl:mr-4">
            <img
              src="/src/assets/images/DocAccout.png"
              alt=""
              class="rounded-[50%] w-[64px] h-[64px]"
            />
            <p
              class="text-[#FFF] bg-orange text-center w-[68px] h-[16px] rounded-md text-[12px] mt-2 -pt-1 relative left-[-2px]"
            >
              在線中
            </p>
          </div>
          <div class="text-[#FFF]">
            <!-- <div class="font-bold text-[16px] pb-1 pt-3">{{ UserData.Name }}</div> -->
            <div>
              <p class="mb-0 lh-sm">屏東縣琉球鄉衛生所</p>
              <p class="lh-sm">護理人員</p>
            </div>
            <div
              class="flex text-center font-bold w-[160px] justify-between px-2 relative left-[-15px] top-[-10px]"
            >
              <div class="flex flex-wrap justify-center">
                <p class="mb-0 text-[20px]">{{ InReferralCount }}</p>
                <p class="text-[12px] w-full underline underline-offset-8">轉診中</p>
              </div>
              <div class="flex flex-wrap justify-center">
                <p class="referral-finish-count text-[20px] mb-0">{{ ReferralFinishCount }}</p>
                <p class="text-[12px] w-full">轉診完成</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  --bs-gutter-x: 0;
}
.bg-blue {
  background-color: rgb(69, 115, 187);
}
.bg-lightblue {
  background-color: rgb(236, 241, 248);
}
.color-darkblue {
  color: rgb(91, 108, 133);
}
.text-gray {
  color: #aaa;
}
.header {
  height: 200px;
  position: sticky;
  top: 0;
  z-index: 9999;
}
.bg-orange {
  background-color: rgb(240, 163, 87);
}

.list-content {
  height: 966px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.list-content::-webkit-scrollbar {
  width: 0;
}
.footer {
  height: 100px;
  position: fixed;
  bottom: 0;
}
.bottom {
  height: 100px;
}
.card {
  border-width: 0;
}
span:nth-child(1) span:after {
  content: '';
  width: 1px;
  height: 12px;
  background-color: #000;
  position: absolute;
  left: 65px;
  top: 4px;
}
span:nth-child(2) span:after {
  content: '';
  width: 1px;
  height: 12px;
  background-color: #000;
  position: absolute;
  left: 105px;
  top: 4px;
}
span:nth-child(3) span:after {
  content: '';
  width: 1px;
  height: 12px;
  background-color: #000;
  position: absolute;
  left: 59px;
  top: 4px;
}
.hospital-short {
  line-height: 3;
  width: 75px;
  height: 75px;
  text-align: center;
}
</style>
