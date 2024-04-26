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
const router = useRouter()

function gotoPrev() {
  console.log('gotoPrev')
  router.push('/detail')
}
</script>

<template>
  <div class="container-fluid bg-blue header sticky-top">
    <div class="row align-items-end justify-content-between h-100 pb-3 px-5">
      <div class="col-3">
        <p class="text-white" @click.prevent="gotoPrev">
          <font-awesome-icon :icon="['fas', 'angle-left']" size="xl" style="color: #ffffff" />
          轉入醫院簽章
        </p>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <p class="px-5 lh-lg fw-bold">轉入醫院人員</p>
        <div class="row px-5 gx-0">
          <div class="col-4">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100 lh-678" id="basic-addon1"
                >轉入醫院人員</span
              >
            </div>
          </div>
          <div class="col-8 d-flex flex-column">
            <div class="mb-0">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="可由此處輸入或下方簽名"
              />
            </div>
            <div class="mb-0">
              <textarea
                class="form-control"
                placeholder="如有_請詳述"
                id="floatingTextarea1"
                style="height: 655px"
              ></textarea>
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1">聯絡電話</span>
            </div>
          </div>
          <div class="col-8 w-684">
            <div class="input-group mb-3">
              <input
                type="tel"
                class="form-control"
                placeholder=""
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >到達轉入醫院時間</span
              >
            </div>
          </div>
          <div class="col-8 w-684">
            <div class="input-group mb-3 cursor-pointer">
              <span
                class="border-b-2 border-[#DEE2E6] w-full h-[40px] leading-[40px] pl-2 font-bold flex items-center relative gap-x-8"
              >
                <span class="ml-2">19:35</span>
              </span>
              <dropdown-svg />
            </div>
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
  height: 150px;
}
.w-24 {
  width: 24%;
}
.lh-40 {
  line-height: 40;
}
.lh-678 {
  line-height: 678px;
}
textarea {
  resize: none;
}
</style>
