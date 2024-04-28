<script setup>
import { cloneDeep } from 'lodash-es'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import dayjs from 'dayjs'
import { useCallApi } from '@/composables/useCallApi.js'
import { ApiGetAppList, ApiGetIntoHospitalName, ApiGetOutHospitalName } from '@/Api'
const { callApi } = useCallApi()
/* add icons to the library */
library.add(fab, fas, far)
// dayjs().format()

const route = useRoute()
const router = useRouter()
function gotoDetail() {
  console.log('gotoDetail')
  router.push('/detail')
}
const TransferOut = reactive({ data: [] })
const TransferInto = reactive({ data: [] })
const CardInfo = reactive({ data: [] })
const CardInfoRender = computed(() => {
  let result = []
  const CardInfoData = cloneDeep(CardInfo.data) ?? []
  const TransferOutData = cloneDeep(TransferOut.data) ?? []
  const TransferIntoData = cloneDeep(TransferInto.data) ?? []
  if(CardInfoData.length === 0) return []
  CardInfoData.Items.forEach((item) => {
    let obj = {}
    obj.PatientName = item.Patient.Name
    obj.Identifier = item.Patient.Identifier
    obj.Old = item.PatientAge || "null"
    obj.Sex = item.Patient.GenderCode
    // 目前唯一申請的醫療機構
    obj.ApplyCare = TransferOutData[0].Name
    obj.ApplyDoctor = item.CreateAccountName
    obj.Department = item.PatientDepartName
    obj.GotoWhere = item.IntoHospitalNo
    // 2024-04-01T00:00:00  -> YYYY-MM-DD HH MM
    obj.ApplyTime = dayjs(item.ApplyTime).format('YYYY-MM-DD HH:mm')
    // obj.ApplyTime = dayjs(item.ApplyTime)
    obj.Aim = item.PurposeOfReferralName
    obj.IconBg = "#78A577"
    TransferIntoData.forEach((item) => {
      if (item.No === obj.GotoWhere) obj.GotoWhere = item.Name
      if(item.Name === "安泰醫療社團法人安泰醫院") obj.IconBg = "#EE7C7C"
      if(item.Name === "輔英") obj.IconBg = "#EED57C"
    })
    result.push(obj)
  })
  console.log('render', result)
  return result
})

const GetAppList = async () => {
  await callApi({
    actionFn: () => ApiGetAppList(),
    msg: { success: '', failed: 'AppList get 失敗' },
    callBack: (res) => {
	    console.log(res.data)
      CardInfo.data = cloneDeep(res.data)
    },
  })
}

const GetIntoHospitalName = async () => {
  try {
    const res = await ApiGetIntoHospitalName()
    if (res.status === 200) {
      console.log('IntoHos', res.data)
      TransferInto.data = cloneDeep(res.data)
    }
  } catch (err) {
    console.log(err)
  }
}
const GetOutHospitalName = async () => {
  try {
    const res = await ApiGetOutHospitalName()
    if (res.status === 200) {
      console.log('OutHos', res.data)
      TransferOut.data = cloneDeep(res.data)
    }
  } catch (err) {
    console.log(err)
  }
}
const init = async () => {
  await GetOutHospitalName()
  await GetIntoHospitalName()
  await GetAppList()
}

init();
</script>
<template>
  <div class="container-fluid bg-lightblue list-content">
    <div class="flex justify-center mx-auto w-full">
      <div class="flex justify-center w-[768px]">
        <div class="w-3/4 my-3">
          <div class="flex items-center pb-3">
            <span class="text-[#455D7A] font-bold text-[20px] mr-1">救護紀錄表清單</span>
            <span class="text-[#AFAFAF] font-bold text-[15px]">(36)</span>
          </div>
          <ul class="w-full p-0 flex flex-col gap-y-[12px]">
            <li class="bg-[#FFF] h-[188px] w-full p-4 flex rounded-[10px]" 
            v-for="list in CardInfoRender" :key="list.Identifier"
            @click="gotoDetail">
              <div class="w-1/4 d-flex justify-content-end align-items-center">
                <div class="rounded-circle  mr-8 hospital-short" :style="{background: list.IconBg}">
                  <p class="text-white text-center fw-bold fs-3">安泰</p>
                </div>
              </div>
              <div class="w-3/4">
                <card-info-item>
                  <template #name> {{list.PatientName}}</template>
                  <template #id>{{list.Identifier}} </template>
                  <template #old>{{list.Old}} </template>
                  <template #sex> {{list.Sex}}</template>
                  <template #whereDoctor> {{list.ApplyCare}}</template>
                  <template #doctor> {{list.ApplyDoctor}} / {{list.Department}}</template>
                  <template #transHos> 轉入 / {{list.GotoWhere}}</template>
                  <template #date> {{list.ApplyTime}}</template>
                  <template #care> {{list.Aim}}</template>
                </card-info-item>
              </div>
            </li>
          </ul>
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
  /* max-height: 800px; */
  overflow-x: hidden;
  overflow-y: scroll;
  /* border: 1px solid #f00; */
}
.list-content::-webkit-scrollbar {
  /* width: 0; */
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
