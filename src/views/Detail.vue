<template>
  <div class="container-fluid bg-blue header">
    <div class="row align-items-end justify-content-between h-100 pb-3 px-5">
      <div class="col-3">
        <p class="text-white" @click="gotoPrev">
          <font-awesome-icon
            :icon="['fas', 'angle-left']"
            size="xl"
            style="color: #ffffff"
          />
          救護紀錄表
        </p>
      </div>
      <div class="col-1">
        <p class="text-white text-end">
          <font-awesome-icon
            :icon="['fas', 'pen-clip']"
            size="xl"
            style="color: #ffffff"
          />
        </p>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 information">
        <p class="bg-orange fw-bold px-5 lh-lg">病人資訊</p>
        <div class="row px-5">
          <div class="col-4">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue" id="basic-addon1">病例號</span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value="456789"
                disabled
              />
            </div>
          </div>
          <div class="col-4">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue" id="basic-addon1"
                >病患姓名</span
              >
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value="王大明"
                disabled
              />
            </div>
          </div>
          <div class="col-4">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue" id="basic-addon1"
                >身分證字號</span
              >
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value="A123456789"
                disabled
              />
            </div>
          </div>
          <div class="col-4">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue" id="basic-addon1">性別</span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value="男"
                disabled
              />
            </div>
          </div>
          <div class="col-4">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue" id="basic-addon1"
                >出生日期</span
              >
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value="1999-01-01"
                disabled
              />
            </div>
          </div>
          <div class="col-4">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue" id="basic-addon1">年齡</span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value="35 歲"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div class="record">
        <p class="bg-orange fw-bold px-5 lh-lg">出勤紀錄</p>
        <div class="row px-5 gx-0">
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                ><span class="text-danger">*</span>出勤單位及漁港</span
              >
            </div>
          </div>
          <div class="col-4 w-35">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue" id="basic-addon1">單位</span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value="救護船"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue" id="basic-addon1">漁港</span>
              <select class="form-select" aria-label="Default select example">
                <option selected>鹽埔</option>
                <option value="1">鹽埔1</option>
                <option value="2">鹽埔2</option>
                <option value="3">鹽埔3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="notice">
        <p class="bg-orange fw-bold px-5 lh-lg">交接注意事項</p>
      </div>
      <div class="action-item">
        <p class="bg-orange fw-bold px-5 lh-lg">處置項目</p>
      </div>
      <div class="life position-relative">
        <p class="bg-orange fw-bold px-5 lh-lg">生命徵象</p>
      </div>
    </div>
  </div>
</template>
<script setup>
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(fab, fas, far);

import { useRouter } from "vue-router";
const router = useRouter();

function gotoPrev() {
  console.log("gotoPrev");
  router.push("/list");
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
.bg-orange {
  background-color: rgb(240, 163, 87);
}
.header {
  height: 150px;
}
.life .bg-orange::before {
  content: "*";
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
.w-315 {
  width: 31.5%;
}
.w-35 {
  width: 35%;
}
</style>
