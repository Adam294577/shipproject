<template>
  <div class="container-fluid bg-blue header sticky-top">
    <div class="row align-items-end justify-content-between h-100 pb-3 px-5">
      <div class="col-3">
        <p class="text-white" @click.prevent="gotoPrev">
          <font-awesome-icon
            :icon="['fas', 'angle-left']"
            size="xl"
            style="color: #ffffff"
          />
          新增紀錄
        </p>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <p class="px-5 lh-lg fw-bold">生命徵象</p>
        <div class="row px-5 gx-0">
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >呼吸頻率</span
              >
            </div>
          </div>
          <div class="col-8 w-684">
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="次/分"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2">次/分</span>
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >脈搏</span
              >
            </div>
          </div>
          <div class="col-8 w-684">
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="次/分"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2">次/分</span>
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >體溫</span
              >
            </div>
          </div>
          <div class="col-8 w-684">
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="&deg;C"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2">&deg;C</span>
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >血氧濃度</span
              >
            </div>
          </div>
          <div class="col-8 w-684">
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="%"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2">%</span>
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >血壓</span
              >
            </div>
          </div>
          <div class="col-4 w-35">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue" id="basic-addon1">收縮壓</span>
              <input
                type="number"
                class="form-control"
                placeholder="mmHg"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value=""
              />
            </div>
          </div>
          <div class="col-4">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue" id="basic-addon1">舒張壓</span>
              <input
                type="number"
                class="form-control"
                placeholder="mmHg"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value=""
              />
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >意識狀況</span
              >
            </div>
          </div>
          <div class="col-8">
            <div class="pipeline">
              <input
                type="checkbox"
                class="btn-check"
                id="keep-warm"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary w-24 ms-1" for="keep-warm"
                >清醒</label
              >
              <input
                type="checkbox"
                class="btn-check"
                id="psychological-support"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary ms-1" for="psychological-support"
                >對聲音有反應</label
              >
              <input
                type="checkbox"
                class="btn-check"
                id="als-support"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary ms-1" for="als-support"
                >對痛有反應</label
              >
              <input
                type="checkbox"
                class="btn-check"
                id="life-monitor"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary w-24 ms-1" for="life-monitor"
                >沒反應</label
              >
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >格拉斯哥昏迷指數(葛氏)</span
              >
            </div>
          </div>
          <div class="col-8">
            <div class="row gx-0">
              <div class="col-4">
                <div class="input-group mb-3">
                  <span class="input-group-text bg-lightblue" id="basic-addon1">E</span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value=""
                  />
                </div>
              </div>
              <div class="col-4">
                <div class="input-group mb-3">
                  <span class="input-group-text bg-lightblue" id="basic-addon1">V</span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value=""
                  />
                </div>
              </div>
              <div class="col-4">
                <div class="input-group mb-3">
                  <span class="input-group-text bg-lightblue" id="basic-addon1">M</span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >紀錄時間</span
              >
            </div>
          </div>
          <div class="col-8 w-684">
            <div class="input-group mb-3">
              <input
                type="time"
                class="form-control"
                placeholder=""
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
          </div>
        </div>
        <div class="row px-5 btn-list g-1 mb-3">
          <a href="#" class="btn btn-primary">完成</a>
          <a href="#" class="btn btn-success">儲存變更</a>
        </div>
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
  router.push("/detail");
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
.w-24 {
  width: 24%;
}
</style>
