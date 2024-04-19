<template>
  <div class="container-fluid bg-blue header">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-8">
        <div class="header_avatar d-flex">
          <div class="avatar position-relative">
            <div>
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt=""
                class="img-fluid rounded-circle"
              />
            </div>
            <p
              class="text-light bg-orange fs-4 text-center position-absolute online-status"
            >
              在線中
            </p>
          </div>
          <div class="avatar_detail ms-4 text-light">
            <div class="name fw-bold mb-1">林美美</div>
            <div class="med-status">
              <p class="location mb-0 lh-sm">屏東縣琉球鄉衛生所</p>
              <p class="title lh-sm">護理人員</p>
              <div class="referral-status d-flex text-center fw-bold">
                <div class="referral-ing">
                  <p class="referraling-count fs-5 mb-0">36</p>
                  <p>轉診中</p>
                </div>
                <div class="referral-finished ms-3">
                  <p class="referral-finish-count fs-5 mb-0">124</p>
                  <p>轉診完成</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-lightblue list-content">
    <div class="row justify-content-center">
      <div class="col-8 my-3">
        <h2 class="color-darkblue fs-5">
          救護紀錄表清單 <span class="text-gray">(36)</span>
        </h2>
        <ul class="list-unstyled">
          <li class="my-3" @click="gotoDetail">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-3 d-flex justify-content-end align-items-center">
                  <div class="rounded-circle bg-danger me-3 hospital-short">
                    <p class="text-white text-center fw-bold fs-3">安</p>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <div class="card-text mb-2">
                      <span class="position-relative">
                        <span class="fw-bold pe-3">彭Ｏ慧</span>
                      </span>
                      <span class="position-relative">
                        <span class="px-3">98342OO</span>
                      </span>
                      <span class="position-relative">
                        <span class="px-3">24歲</span>
                      </span>
                      <span class="position-relative">
                        <span>女</span>
                      </span>
                    </div>
                    <div class="card-text mb-2">
                      <p class="text-gray mb-0 lh-1">屏東縣琉球鄉衛生所</p>
                      <p class="text-gray mb-0 lh-1">鄭敏翔 / 家醫科</p>
                    </div>
                    <div class="card-text mb-2">
                      <p class="mb-0 lh-1">急診治療</p>
                      <p class="mb-0 lh-1">轉入 / 東港安泰醫院</p>
                    </div>
                    <div class="card-text">
                      <p class="text-gray mb-0 lh-1">
                        轉診申請時間: <span>2023-12-17 08:00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="my-3" @click="gotoDetail">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-3 d-flex justify-content-end align-items-center">
                  <div class="rounded-circle bg-danger me-3 hospital-short">
                    <p class="text-white text-center fw-bold fs-3">安</p>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <div class="card-text mb-2">
                      <span class="position-relative">
                        <span class="fw-bold pe-3">彭Ｏ慧</span>
                      </span>
                      <span class="position-relative">
                        <span class="px-3">98342OO</span>
                      </span>
                      <span class="position-relative">
                        <span class="px-3">24歲</span>
                      </span>
                      <span class="position-relative">
                        <span>女</span>
                      </span>
                    </div>
                    <div class="card-text mb-2">
                      <p class="text-gray mb-0 lh-1">屏東縣琉球鄉衛生所</p>
                      <p class="text-gray mb-0 lh-1">鄭敏翔 / 家醫科</p>
                    </div>
                    <div class="card-text mb-2">
                      <p class="mb-0 lh-1">急診治療</p>
                      <p class="mb-0 lh-1">轉入 / 東港安泰醫院</p>
                    </div>
                    <div class="card-text">
                      <p class="text-gray mb-0 lh-1">
                        轉診申請時間: <span>2023-12-17 08:00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="my-3" @click="gotoDetail">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-3 d-flex justify-content-end align-items-center">
                  <div class="rounded-circle bg-danger me-3 hospital-short">
                    <p class="text-white text-center fw-bold fs-3">安</p>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <div class="card-text mb-2">
                      <span class="position-relative">
                        <span class="fw-bold pe-3">彭Ｏ慧</span>
                      </span>
                      <span class="position-relative">
                        <span class="px-3">98342OO</span>
                      </span>
                      <span class="position-relative">
                        <span class="px-3">24歲</span>
                      </span>
                      <span class="position-relative">
                        <span>女</span>
                      </span>
                    </div>
                    <div class="card-text mb-2">
                      <p class="text-gray mb-0 lh-1">屏東縣琉球鄉衛生所</p>
                      <p class="text-gray mb-0 lh-1">鄭敏翔 / 家醫科</p>
                    </div>
                    <div class="card-text mb-2">
                      <p class="mb-0 lh-1">急診治療</p>
                      <p class="mb-0 lh-1">轉入 / 東港安泰醫院</p>
                    </div>
                    <div class="card-text">
                      <p class="text-gray mb-0 lh-1">
                        轉診申請時間: <span>2023-12-17 08:00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="my-3" @click="gotoDetail">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-3 d-flex justify-content-end align-items-center">
                  <div class="rounded-circle bg-danger me-3 hospital-short">
                    <p class="text-white text-center fw-bold fs-3">安</p>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <div class="card-text mb-2">
                      <span class="position-relative">
                        <span class="fw-bold pe-3">彭Ｏ慧</span>
                      </span>
                      <span class="position-relative">
                        <span class="px-3">98342OO</span>
                      </span>
                      <span class="position-relative">
                        <span class="px-3">24歲</span>
                      </span>
                      <span class="position-relative">
                        <span>女</span>
                      </span>
                    </div>
                    <div class="card-text mb-2">
                      <p class="text-gray mb-0 lh-1">屏東縣琉球鄉衛生所</p>
                      <p class="text-gray mb-0 lh-1">鄭敏翔 / 家醫科</p>
                    </div>
                    <div class="card-text mb-2">
                      <p class="mb-0 lh-1">急診治療</p>
                      <p class="mb-0 lh-1">轉入 / 東港安泰醫院</p>
                    </div>
                    <div class="card-text">
                      <p class="text-gray mb-0 lh-1">
                        轉診申請時間: <span>2023-12-17 08:00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="my-3" @click="gotoDetail">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-3 d-flex justify-content-end align-items-center">
                  <div class="rounded-circle bg-danger me-3 hospital-short">
                    <p class="text-white text-center fw-bold fs-3">安</p>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <div class="card-text mb-2">
                      <span class="position-relative">
                        <span class="fw-bold pe-3">彭Ｏ慧</span>
                      </span>
                      <span class="position-relative">
                        <span class="px-3">98342OO</span>
                      </span>
                      <span class="position-relative">
                        <span class="px-3">24歲</span>
                      </span>
                      <span class="position-relative">
                        <span>女</span>
                      </span>
                    </div>
                    <div class="card-text mb-2">
                      <p class="text-gray mb-0 lh-1">屏東縣琉球鄉衛生所</p>
                      <p class="text-gray mb-0 lh-1">鄭敏翔 / 家醫科</p>
                    </div>
                    <div class="card-text mb-2">
                      <p class="mb-0 lh-1">急診治療</p>
                      <p class="mb-0 lh-1">轉入 / 東港安泰醫院</p>
                    </div>
                    <div class="card-text">
                      <p class="text-gray mb-0 lh-1">
                        轉診申請時間: <span>2023-12-17 08:00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="my-3" @click="gotoDetail">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-3 d-flex justify-content-end align-items-center">
                  <div class="rounded-circle bg-danger me-3 hospital-short">
                    <p class="text-white text-center fw-bold fs-3">安</p>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <div class="card-text mb-2">
                      <span class="position-relative">
                        <span class="fw-bold pe-3">彭Ｏ慧</span>
                      </span>
                      <span class="position-relative">
                        <span class="px-3">98342OO</span>
                      </span>
                      <span class="position-relative">
                        <span class="px-3">24歲</span>
                      </span>
                      <span class="position-relative">
                        <span>女</span>
                      </span>
                    </div>
                    <div class="card-text mb-2">
                      <p class="text-gray mb-0 lh-1">屏東縣琉球鄉衛生所</p>
                      <p class="text-gray mb-0 lh-1">鄭敏翔 / 家醫科</p>
                    </div>
                    <div class="card-text mb-2">
                      <p class="mb-0 lh-1">急診治療</p>
                      <p class="mb-0 lh-1">轉入 / 東港安泰醫院</p>
                    </div>
                    <div class="card-text">
                      <p class="text-gray mb-0 lh-1">
                        轉診申請時間: <span>2023-12-17 08:00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-blue footer">
    <div class="row justify-content-center">
      <div class="col">
        <div class="bottom d-flex text-center text-light align-items-center">
          <div class="search col">
            <a href="#" class="text-light text-decoration-none">
              <font-awesome-icon
                :icon="['fas', 'magnifying-glass']"
                style="color: #ffffff"
                size="2xl"
              />
              <p class="mb-0">搜尋</p>
            </a>
          </div>
          <!-- <div class="home col">
            <a href="#" class="text-light text-decoration-none">
              <font-awesome-icon
                :icon="['fas', 'house']"
                style="color: #ffffff"
                size="2xl"
              />
              <p class="mb-0">首頁</p>
            </a>
          </div> -->
          <div class="logout col">
            <a href="#" class="text-light text-decoration-none">
              <font-awesome-icon
                :icon="['fas', 'arrow-right-from-bracket']"
                size="2xl"
                style="color: #ffffff"
              />
              <p class="mb-0">登出</p>
            </a>
          </div>
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

function gotoDetail() {
  console.log("gotoDetail");
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
.color-darkblue {
  color: rgb(91, 108, 133);
}
.text-gray {
  color: #aaa;
}
.header {
  height: 300px;
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
  height: 966px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.footer {
  height: 100px;
  position: sticky;
  bottom: 0;
}
.bottom {
  height: 100px;
}
.card {
  border-width: 0;
}
span:nth-child(1) span:after {
  content: "";
  width: 1px;
  height: 12px;
  background-color: #000;
  position: absolute;
  left: 65px;
  top: 4px;
}
span:nth-child(2) span:after {
  content: "";
  width: 1px;
  height: 12px;
  background-color: #000;
  position: absolute;
  left: 105px;
  top: 4px;
}
span:nth-child(3) span:after {
  content: "";
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
