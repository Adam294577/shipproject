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

// import { useRouter } from 'vue-router'
// const router = useRouter()

// function loginHandle(event) {
//   console.log('login')
//   router.push('/list')
// }
</script>

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
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="帳號"
        />
      </div>
      <div class="input-group input-group-lg">
        <input
          type="password"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="密碼"
        />
      </div>
      <a href="#" class="d-block text-end text-dark text-decoration-none pe-3 my-2"
        ><small>忘記密碼</small></a
      >
      <div class="col">
        <div class="input-group input-group-lg mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            placeholder="驗證碼"
          />
        </div>
      </div>
      <div class="col valid-code d-flex align-items-center justify-content-between px-4">
        <p class="text-light fs-5 mb-0">ba762q</p>
        <a href="#"
          ><font-awesome-icon :icon="['fas', 'arrows-rotate']" style="color: #ffffff"
        /></a>
      </div>
      <div class="form-check form-switch">
        <input
          class="form-check-input fs-4"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label fs-4" for="flexSwitchCheckDefault">記住帳號</label>
      </div>
      <div class="d-grid gap-2 mt-3">
        <button class="btn py-2" type="button" @click="loginHandle">登入</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 400px;
  padding: 0 200px;
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
  background-color: rgb(240, 179, 115);
}
</style>
