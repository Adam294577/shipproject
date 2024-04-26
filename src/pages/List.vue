<template>
  <div v-show="SearchBool" class="container-fluid bg-blue h-[108px] border-2 border-transparent">
    <div class="flex items-center justify-content-between pb-1 px-4 h-full mt-4">
      <div class="w-[80px] cursor-pointer" @click="ShowSearchFn(false)">
        <p class="text-white">
          <font-awesome-icon :icon="['fas', 'angle-left']" size="xl" style="color: #ffffff" />
          搜尋
        </p>
      </div>
      <div class="w-full relative top-[-5px] ml-4 mr-20">
        <search-svg class="absolute left-2 top-2" />
        <input
          class="text-[#FFF] placeholder:text-[#FFF] placeholder:font-bold focus:outline-none bg-[#ffffff8f] h-[40px] w-full px-10"
          placeholder="請輸入病患姓名或病患身分證號"
        />
      </div>
    </div>
  </div>
  <!-- header -->
  <list-header v-if="!SearchBool" />
  <my-dialog v-model="LogOutModel" />
  <list-content :style="SearchBool ? 'min-height: 900px' : 'min-height: 800px'" />
  <!-- footer -->
  <div class="container-fluid bg-blue h-[100px] fixed bottom-0 w-full">
    <div class="flex justify-center">
      <div class="w-full mx-auto pt-1">
        <div class="w-1/2 flex text-center text-light items-center justify-between mx-auto xl:pt-4">
          <div
            @click="ShowSearchFn(true)"
            class="flex justify-center flex-wrap cursor-pointer w-[80px] gap-y-1"
          >
            <search-svg />
            <p class="w-full">搜尋</p>
          </div>
          <div
            @click.prevent="OpenNoticeBool"
            class="flex justify-center flex-wrap cursor-pointer w-[80px] gap-y-1"
          >
            <logout-svg />
            <p class="w-full">登出</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
/* import font awesome icon component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fab, fas, far)

import { useRouter } from 'vue-router'
const router = useRouter()

function gotoDetail() {
  console.log('gotoDetail')
  router.push('/detail')
}

const SearchBool = ref(false)
const ShowSearchFn = (key) => {
  SearchBool.value = key
}

const LogOutModel = ref({
  NoticeMsg: `<span>無網路狀態將無法登入系統。</span><br><span>是否確定登出?</span>`,
  ConfirmKey: '登出',
  NoticeBool: false
})
const OpenNoticeBool = () => {
  LogOutModel.value.NoticeBool = true
}
</script>

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
  height: 220px;
  position: sticky;
  top: 0;
  z-index: 9999;
}
.bg-orange {
  background-color: rgb(240, 163, 87);
}
.online-status {
  top: 100px;
  width: 100%;
  border-radius: 10px;
}
.list-content {
  /* max-height: 966px; */
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
