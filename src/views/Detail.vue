<template>
  <div class="container-fluid bg-blue header sticky-top">
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
        <p class="text-white text-end" @click="gotoSign">
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
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >出勤通知時間</span
              >
            </div>
          </div>
          <div class="col-8 w-684">
            <div class="input-group mb-3">
              <input type="datetime-local" class="form-control" />
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >到達及離開【轉出醫院】時間</span
              >
            </div>
          </div>
          <div class="col-4 w-35">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue" id="basic-addon1">到達</span>
              <input
                type="datetime-local"
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
              <span class="input-group-text bg-lightblue" id="basic-addon1">轉出</span>
              <input
                type="datetime-local"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value="救護船"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="notice">
        <p class="bg-orange fw-bold px-5 lh-lg">交接注意事項</p>
        <div class="row px-5 gx-0">
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100 lh-78" id="basic-addon1"
                >病患身上留置管路</span
              >
            </div>
          </div>
          <div class="col-8 d-flex ms-1 flex-column">
            <div class="pipeline">
              <input
                type="checkbox"
                class="btn-check"
                id="nasogastric-tube"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="nasogastric-tube">鼻胃管</label>
              <input
                type="checkbox"
                class="btn-check"
                id="Urinary-catheter"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary ms-3" for="Urinary-catheter"
                >導尿管</label
              >
              <input
                type="checkbox"
                class="btn-check"
                id="Endotracheal-tube"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary ms-3" for="Endotracheal-tube"
                >氣管內管</label
              >
              <input
                type="checkbox"
                class="btn-check"
                id="intravenous-injection"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary ms-3" for="intravenous-injection"
                >靜脈注射</label
              >
            </div>
            <div class="pipeline-detail mt-3 w-1002">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="其他_請詳述"
              />
            </div>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100 lh-78" id="basic-addon1"
                >備註欄</span
              >
            </div>
          </div>
          <div class="col-8 ms-1 position-relative">
            <textarea
              class="form-control w-1002"
              placeholder="財務或其他_請詳述"
              id="floatingTextarea2"
              style="height: 93px"
            ></textarea>
            <span class="text-count position-absolute text-secondary">0/200</span>
          </div>
        </div>
      </div>
      <div class="action-item">
        <p class="bg-orange fw-bold px-5 lh-lg">處置項目</p>
        <div class="row px-5 gx-0">
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100 lh-78" id="basic-addon1"
                >急救處置</span
              >
            </div>
          </div>
          <div class="col-8 ms-1 position-relative">
            <textarea
              class="form-control w-1002"
              placeholder="如有_請詳述"
              id="floatingTextarea1"
              style="height: 93px"
            ></textarea>
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
              <div class="input-group mb-3 w-50">
                <span class="input-group-text bg-lightblue">CPR</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <span class="input-group-text bg-lightblue">分鐘</span>
              </div>
              <div class="input-group mb-3 w-50">
                <span class="input-group-text bg-lightblue">AED</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <span class="input-group-text bg-lightblue">次</span>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                class="btn-check"
                id="btn-check-outlined"
                autocomplete="off"
              />
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
              class="form-control w-1002"
              placeholder="如有_請詳述"
              id="floatingTextarea1"
              style="height: 93px"
            ></textarea>
          </div>
          <div class="col-4 w-315">
            <div class="input-group mb-3">
              <span class="input-group-text bg-lightblue w-100" id="basic-addon1"
                >其他處置</span
              >
            </div>
          </div>
          <div class="col-8 ms-1 position-relative">
            <div class="pipeline">
              <input
                type="checkbox"
                class="btn-check"
                id="keep-warm"
                autocomplete="off"
              />
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
              <input
                type="checkbox"
                class="btn-check"
                id="als-support"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary ms-3" for="als-support"
                >ALS 支持</label
              >
              <input
                type="checkbox"
                class="btn-check"
                id="life-monitor"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary ms-3" for="life-monitor"
                >僅做生命徵象監測</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="life position-relative">
        <p class="bg-orange fw-bold px-5 lh-lg">生命徵象</p>
        <div class="row px-5 life-card g-1">
          <div class="col-4 mb-3">
            <div class="card text-center bg-darkblue">
              <div class="card-body">
                <div class="row justify-content-between">
                  <div class="col-4 bg-white rounded-3 p-2 w-32">
                    <div class="time">
                      <img
                        src="/src/assets/images/icons/mdi_clock.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0">12:45</p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32">
                    <div class="breathe">
                      <img
                        src="/src/assets/images/icons/ri_lungs-fill.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1">23<br /><small>次/分</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32">
                    <div class="heart-beat">
                      <img
                        src="/src/assets/images/icons/Vector.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1">68<br /><small>次/分</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32 my-1">
                    <div class="temperature">
                      <img
                        src="/src/assets/images/icons/uil_temperature.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0">36 <small>&deg;C</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32 my-1">
                    <div class="spo2">
                      <img
                        src="/src/assets/images/icons/SpO2.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0">98 <small>%</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32 my-1">
                    <div class="pressure">
                      <img
                        src="/src/assets/images/icons/streamline_wave-signal.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1">130/77<br /><small>mmHG</small></p>
                    </div>
                  </div>
                  <div class="col-6 bg-white rounded-3 p-2 w-49">
                    <div class="awake">
                      <img
                        src="/src/assets/images/icons/mdi_bed.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1"><br />清醒</p>
                    </div>
                  </div>
                  <div class="col-6 bg-white rounded-3 p-2 w-49">
                    <div class="evm">
                      <img
                        src="/src/assets/images/icons/mdi_letter-e-circle.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <img
                        src="/src/assets/images/icons/mdi_letter-v-circle.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <img
                        src="/src/assets/images/icons/tabler_circle-letter-m-filled.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1"><br />3 | 3 | 3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer text-white bg-darkblue text-start border-top-0">
                張美麗(NO.35884)
              </div>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="card text-center bg-darkblue">
              <div class="card-body">
                <div class="row justify-content-between">
                  <div class="col-4 bg-white rounded-3 p-2 w-32">
                    <div class="time">
                      <img
                        src="/src/assets/images/icons/mdi_clock.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0">12:45</p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32">
                    <div class="breathe">
                      <img
                        src="/src/assets/images/icons/ri_lungs-fill.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1">23<br /><small>次/分</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32">
                    <div class="heart-beat">
                      <img
                        src="/src/assets/images/icons/Vector.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1">68<br /><small>次/分</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32 my-1">
                    <div class="temperature">
                      <img
                        src="/src/assets/images/icons/uil_temperature.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0">36 <small>&deg;C</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32 my-1">
                    <div class="spo2">
                      <img
                        src="/src/assets/images/icons/SpO2.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0">98 <small>%</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32 my-1">
                    <div class="pressure">
                      <img
                        src="/src/assets/images/icons/streamline_wave-signal.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1">130/77<br /><small>mmHG</small></p>
                    </div>
                  </div>
                  <div class="col-6 bg-white rounded-3 p-2 w-49">
                    <div class="awake">
                      <img
                        src="/src/assets/images/icons/mdi_bed.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1"><br />清醒</p>
                    </div>
                  </div>
                  <div class="col-6 bg-white rounded-3 p-2 w-49">
                    <div class="evm">
                      <img
                        src="/src/assets/images/icons/mdi_letter-e-circle.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <img
                        src="/src/assets/images/icons/mdi_letter-v-circle.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <img
                        src="/src/assets/images/icons/tabler_circle-letter-m-filled.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1"><br />3 | 3 | 3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer text-white bg-darkblue text-start border-top-0">
                張美麗(NO.35884)
              </div>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="card text-center bg-darkblue">
              <div class="card-body">
                <div class="row justify-content-between">
                  <div class="col-4 bg-white rounded-3 p-2 w-32">
                    <div class="time">
                      <img
                        src="/src/assets/images/icons/mdi_clock.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0">12:45</p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32">
                    <div class="breathe">
                      <img
                        src="/src/assets/images/icons/ri_lungs-fill.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1">23<br /><small>次/分</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32">
                    <div class="heart-beat">
                      <img
                        src="/src/assets/images/icons/Vector.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1">68<br /><small>次/分</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32 my-1">
                    <div class="temperature">
                      <img
                        src="/src/assets/images/icons/uil_temperature.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0">36 <small>&deg;C</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32 my-1">
                    <div class="spo2">
                      <img
                        src="/src/assets/images/icons/SpO2.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0">98 <small>%</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32 my-1">
                    <div class="pressure">
                      <img
                        src="/src/assets/images/icons/streamline_wave-signal.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1">130/77<br /><small>mmHG</small></p>
                    </div>
                  </div>
                  <div class="col-6 bg-white rounded-3 p-2 w-49">
                    <div class="awake">
                      <img
                        src="/src/assets/images/icons/mdi_bed.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1"><br />清醒</p>
                    </div>
                  </div>
                  <div class="col-6 bg-white rounded-3 p-2 w-49">
                    <div class="evm">
                      <img
                        src="/src/assets/images/icons/mdi_letter-e-circle.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <img
                        src="/src/assets/images/icons/mdi_letter-v-circle.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <img
                        src="/src/assets/images/icons/tabler_circle-letter-m-filled.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1"><br />3 | 3 | 3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer text-white bg-darkblue text-start border-top-0">
                張美麗(NO.35884)
              </div>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="card text-center bg-darkblue">
              <div class="card-body">
                <div class="row justify-content-between">
                  <div class="col-4 bg-white rounded-3 p-2 w-32">
                    <div class="time">
                      <img
                        src="/src/assets/images/icons/mdi_clock.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0">12:45</p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32">
                    <div class="breathe">
                      <img
                        src="/src/assets/images/icons/ri_lungs-fill.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1">23<br /><small>次/分</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32">
                    <div class="heart-beat">
                      <img
                        src="/src/assets/images/icons/Vector.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1">68<br /><small>次/分</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32 my-1">
                    <div class="temperature">
                      <img
                        src="/src/assets/images/icons/uil_temperature.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0">36 <small>&deg;C</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32 my-1">
                    <div class="spo2">
                      <img
                        src="/src/assets/images/icons/SpO2.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0">98 <small>%</small></p>
                    </div>
                  </div>
                  <div class="col-4 bg-white rounded-3 p-2 w-32 my-1">
                    <div class="pressure">
                      <img
                        src="/src/assets/images/icons/streamline_wave-signal.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1">130/77<br /><small>mmHG</small></p>
                    </div>
                  </div>
                  <div class="col-6 bg-white rounded-3 p-2 w-49">
                    <div class="awake">
                      <img
                        src="/src/assets/images/icons/mdi_bed.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1"><br />清醒</p>
                    </div>
                  </div>
                  <div class="col-6 bg-white rounded-3 p-2 w-49">
                    <div class="evm">
                      <img
                        src="/src/assets/images/icons/mdi_letter-e-circle.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <img
                        src="/src/assets/images/icons/mdi_letter-v-circle.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <img
                        src="/src/assets/images/icons/tabler_circle-letter-m-filled.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p class="mb-0 lh-1"><br />3 | 3 | 3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer text-white bg-darkblue text-start border-top-0">
                張美麗(NO.35884)
              </div>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="card text-center bg-white">
              <div class="card-body d-flex align-items-center justify-content-center">
                <a class="btn d-block w-100 lh-254" href="#" @click.prevent="insertLife">
                  <img src="/src/assets/images/icons/gg_add.svg" alt="" /> 新增紀錄
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row px-5 btn-list g-1 mb-3">
          <a href="#" class="btn btn-primary">送出</a>
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
  router.push("/list");
}

function insertLife() {
  router.push("/insertlife");
}
function gotoSign() {
  router.push("/sign");
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
.text-count {
  bottom: 20px;
  right: 0;
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
</style>
