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
      <div class="col-8">sdfsaf</div>
    </div>
  </div>
  <div class="container-fluid bg-blue footer">
    <div class="row justify-content-center">
      <div class="col-8">
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
          <div class="home col">
            <a href="#" class="text-light text-decoration-none">
              <font-awesome-icon
                :icon="['fas', 'house']"
                style="color: #ffffff"
                size="2xl"
              />
              <p class="mb-0">首頁</p>
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
</script>

<style>
.container-fluid {
  --bs-gutter-x: 0;
}
.bg-blue {
  background-color: rgb(69, 115, 187);
}
.bg-lightblue {
  background-color: rgb(236, 241, 248);
}
.header {
  height: 300px;
}
/* .header_avatar {
  background-color: red;
  height: 100px;
} */
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
}
.footer {
  height: 100px;
  position: fixed;
  bottom: 0;
}
.bottom {
  height: 100px;
}
</style>
