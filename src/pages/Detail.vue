<script setup>
// swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Pagination } from 'swiper/modules'
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
const router = useRouter()

function gotoPrev() {
  console.log('gotoPrev')
  router.push('/list')
}

function insertLife() {
  router.push('/insertlife')
}
function gotoSign() {
  router.push('/sign')
}

const selectedAttendanceUnit = ref('救護船')
const selectedPort = ref('鹽埔')
const selectedCatheter = ref([])

const swiperData = ref(['test1', 'test2', 'test3', 'test4', 5, 6, 7, 8, 9, 10])
const logVal = (val) => {
  console.log(val)
}
</script>

<template>
  <div class="container-fluid bg-blue header sticky-top">
    <div class="flex items-end justify-content-between h-100 pb-1 px-4">
      <div class="w-[120px]">
        <p class="text-white" @click="gotoPrev">
          <font-awesome-icon :icon="['fas', 'angle-left']" size="xl" style="color: #ffffff" />
          救護紀錄表
        </p>
      </div>
      <div class="flex-1 text-center relative top-[-10px]">
        <div class="text-[17px] flex justify-center items-center text-[#FFF] max-w-[400px] mx-auto">
          <span class="w-1/6 text-left"> 彭O 慧 </span>
          <span class="w-[1px] h-[20px] inline-block bg-[#FFF]"></span>
          <span class="w-1/3 text-center"> A12345OOOO</span>
          <span class="w-[1px] h-[20px] inline-block bg-[#FFF]"></span>
          <span class="w-1/6 text-center"> 24歲 </span>
          <span class="w-[1px] h-[20px] inline-block bg-[#FFF]"></span>
          <span class="w-1/6 text-center"> 女 </span>
        </div>
      </div>
      <div class="w-[100px]">
        <p class="text-white text-end" @click="gotoSign">
          <font-awesome-icon :icon="['fas', 'pen-clip']" size="xl" style="color: #ffffff" />
        </p>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="record">
        <p class="bg-orange fw-bold px-12 lh-lg">出勤紀錄</p>
        <div class="row px-4 gx-0">
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                ><span class="text-danger">*</span>出勤單位</span
              >
            </div>
          </div>
          <div class="col-8 ml-1">
            <input
              v-model="selectedAttendanceUnit"
              value="救護船"
              type="radio"
              class="btn-check"
              id="AttendanceUnits1"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary w-[85px]" for="AttendanceUnits1">救護船</label>
            <input
              v-model="selectedAttendanceUnit"
              value="海巡"
              type="radio"
              class="btn-check"
              id="AttendanceUnits2"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary w-[85px] ms-3" for="AttendanceUnits2">海巡</label>
            <input
              value="其他"
              v-model="selectedAttendanceUnit"
              type="radio"
              class="btn-check"
              id="AttendanceUnits3"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary w-[85px] ms-3" for="AttendanceUnits3">其他</label>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                ><span class="text-danger">*</span>漁港</span
              >
            </div>
          </div>
          <div class="col-8 ml-1">
            <input
              v-model="selectedPort"
              value="鹽埔"
              type="radio"
              class="btn-check"
              id="Port1"
              name="Port"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary w-[85px]" for="Port1">鹽埔</label>
            <input
              v-model="selectedPort"
              value="東港"
              type="radio"
              class="btn-check"
              id="Port2"
              name="Port"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary w-[85px] ms-3" for="Port2">東港</label>
            <input
              v-model="selectedPort"
              value="其他"
              type="radio"
              class="btn-check"
              id="Port3"
              name="Port"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary w-[85px] ms-3" for="Port3">其他</label>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >出勤通知時間</span
              >
            </div>
          </div>
          <div class="col-8 w-684 relative">
            <div class="input-group mb-3 cursor-pointer">
              <span
                class="border-b-2 border-[#DEE2E6] w-full h-[40px] leading-[40px] pl-2 font-bold flex items-center"
                >2023年12月12日 10:00</span
              >
              <dropdown-svg />
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >到達及離開【轉出醫院】時間</span
              >
            </div>
          </div>
          <div class="col-8 w-684 relative">
            <div class="input-group mb-3 cursor-pointer">
              <span
                class="border-b-2 border-[#DEE2E6] w-full h-[40px] leading-[40px] pl-2 font-bold flex items-center"
              >
                <span class="text-[#9D9FA3] mr-4">到達</span>
                <span>2023年12月12日 10:15</span>
                <span class="text-[#9D9FA3] mx-4">轉出</span>
                <span>10:20</span>
              </span>
              <dropdown-svg />
            </div>
          </div>
        </div>
      </div>
      <div class="notice">
        <p class="bg-orange fw-bold px-12 lh-lg">交接注意事項</p>
        <div class="row px-4 gx-0">
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100 lh-78" id="basic-addon1"
                >病患身上留置管路</span
              >
            </div>
          </div>
          <div class="col-8 d-flex ms-1 flex-column">
            <div class="">
              <input
                v-model="selectedCatheter"
                value="鼻胃管"
                type="checkbox"
                class="btn-check"
                id="nasogastric-tube"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="nasogastric-tube">鼻胃管</label>
              <input
                v-model="selectedCatheter"
                value="導尿管"
                type="checkbox"
                class="btn-check"
                id="Urinary-catheter"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary ms-3" for="Urinary-catheter">導尿管</label>
              <input
                v-model="selectedCatheter"
                value="氣管內管"
                type="checkbox"
                class="btn-check"
                id="Endotracheal-tube"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary ms-3" for="Endotracheal-tube">氣管內管</label>
              <input
                v-model="selectedCatheter"
                value="靜脈注射"
                type="checkbox"
                class="btn-check"
                id="intravenous-injection"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary ms-3" for="intravenous-injection"
                >靜脈注射</label
              >
              <input
                v-model="selectedCatheter"
                value="其他"
                type="checkbox"
                class="btn-check"
                id="Endotracheal-other"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary ms-3" for="Endotracheal-other">其他 </label>
              <span class="relative w-[450px] inline-block">
                <input
                  :disabled="!selectedCatheter.includes('其他')"
                  type="text"
                  class="form-control w-full absolute top-[-5px] left-1 2xl:top-[24px] 2xl:left-[-450px]"
                  id="exampleFormControlInput1"
                  placeholder="請輸入其他說明"
                />
              </span>
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100 lh-78" id="basic-addon1"
                >備註欄</span
              >
            </div>
          </div>
          <div class="col-8 ms-1 position-relative pb-2">
            <textarea
              class="form-control w-full"
              placeholder="財務或其他_請詳述"
              id="floatingTextarea2"
              style="height: 93px"
            ></textarea>
            <span class="right-2 bottom-4 position-absolute text-secondary">0/200</span>
          </div>
        </div>
      </div>
      <div class="action-item">
        <p class="bg-orange fw-bold px-12 lh-lg">處置項目</p>
        <div class="row px-4 gx-0">
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100 lh-78" id="basic-addon1"
                >急救處置</span
              >
            </div>
          </div>
          <div class="col-8 ms-1 position-relative">
            <textarea
              class="form-control"
              placeholder="如有_請詳述"
              id="floatingTextarea1"
              style="height: 93px"
            ></textarea>
            <span class="right-2 bottom-4 position-absolute text-secondary">0/200</span>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100 lh-78" id="basic-addon1"
                >心肺復甦術</span
              >
            </div>
          </div>
          <div class="col-8 d-flex ms-1 flex-column w-678">
            <div class="d-flex">
              <div class="input-group mb-3 cursor-pointer">
                <span
                  class="border-b-2 border-[#DEE2E6] w-full h-[40px] leading-[40px] pl-2 font-bold flex items-center"
                >
                  <span class="text-[#9D9FA3] ml-4 mr-8">CPR</span>
                  <span class="inline-block w-[80px] text-right pr-2">62</span>
                  <span class="text-[#9D9FA3] ml-2 mr-8">分鐘</span>
                  <span class="text-[#9D9FA3] mx-2">AED</span>
                  <span class="inline-block w-[80px] text-right pr-2">62</span>
                  <span class="text-[#9D9FA3] mx-2">次</span>
                </span>
                <dropdown-svg />
              </div>
            </div>
            <div>
              <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" />
              <label class="btn btn-outline-primary w-100" for="btn-check-outlined"
                >不建議電擊</label
              >
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100 lh-78" id="basic-addon1"
                >藥物處置</span
              >
            </div>
          </div>
          <div class="col-8 ms-1 position-relative">
            <textarea
              class="form-control"
              placeholder="如有_請詳述"
              id="floatingTextarea1"
              style="height: 93px"
            ></textarea>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1">其他處置</span>
            </div>
          </div>
          <div class="col-8 ms-1 position-relative">
            <div class="pipeline">
              <input type="checkbox" class="btn-check" id="keep-warm" autocomplete="off" />
              <label class="btn btn-outline-primary" for="keep-warm">保暖</label>
              <input
                type="checkbox"
                class="btn-check"
                id="psychological-support"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary ms-3" for="psychological-support"
                >心理支持</label
              >
              <input type="checkbox" class="btn-check" id="als-support" autocomplete="off" />
              <label class="btn btn-outline-primary ms-3" for="als-support">ALS 支持</label>
              <input type="checkbox" class="btn-check" id="life-monitor" autocomplete="off" />
              <label class="btn btn-outline-primary ms-3" for="life-monitor"
                >僅做生命徵象監測</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="life position-relative">
        <p class="bg-orange fw-bold px-12 lh-lg">生命徵象</p>
        <div class="h-[300px] flex ml-5">
          <swiper
            :slidesPerView="2"
            :spaceBetween="20"
            :freeMode="true"
            :modules="modules"
            class="mySwiper w-4/5 max-w-[700px]"
          >
            <swiper-slide v-for="list in swiperData" :key="list" @click="logVal(list)">
              {{ list }}
            </swiper-slide>
          </swiper>
          <div
            class="w-1/5 flex items-center justify-center -mt-14 cursor-pointer"
            @click="insertLife"
          >
            <lift-record-add-svg />
            <span class="font-bold">新增紀錄</span>
          </div>
        </div>
        <div class="row px-4 btn-list g-1 mb-3 pb-4 max-w-[768px] mx-auto">
          <a href="#" class="btn btn-primary">送出</a>
          <a href="#" class="btn btn-success">儲存變更</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mySwiper {
  border: 1px solid #f00;
  height: 240px;
}
.swiper-slide {
  cursor: pointer;
  border: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-fluid {
  --bs-gutter-x: 0;
}
.bg-blue {
  background-color: rgb(69, 115, 187);
}
.bg-lightblue {
  background-color: rgb(236, 241, 248);
}
.bg-orange {
  background-color: rgb(240, 163, 87);
}
.header {
  height: 108px;
}
.life .bg-orange::before {
  content: '*';
  width: 1px;
  height: 12px;
  color: red;
  position: absolute;
  left: 45px;
  top: 3px;
}
.information .input-group-text {
  width: 120px;
}
.w-32 {
  width: 32%;
}
.w-315 {
  width: 31.5%;
}
.w-35 {
  width: 35%;
}
.w-49 {
  width: 49%;
}
.w-678 {
  width: 67.888888888%;
}
.w-684 {
  width: 68.4999999999%;
}
.w-1002 {
  width: 102%;
}
.lh-78 {
  line-height: 78px;
}
.lh-254 {
  line-height: 254px;
}

.bg-darkblue {
  background-color: rgb(100, 137, 177);
}
small {
  font-size: 0.5em;
}
textarea {
  resize: none;
}
.border-b {
  border-left: 0 !important;
  border-right: 0 !important;
  border-top: 0 !important;
}
</style>
