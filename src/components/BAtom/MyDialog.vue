<script setup>
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      NoticeMsg: `default`,
      ConfirmKey: '',
      NoticeBool: false
    })
  }
})
const emit = defineEmits(['update:modelValue'])
const router = useRouter()
const NoticeMsg = computed(() => props.modelValue.NoticeMsg)
const NoticeBool = computed(() => props.modelValue.NoticeBool)
const ConfirmKey = computed(() => props.modelValue.ConfirmKey)

const handNotice = () => {
  if (ConfirmKey.value === '登出') {
    router.push('/')
  }
}
const CloseNoticeBool = () => {
  emit('update:modelValue', { ...props.modelValue, NoticeBool: false })
}
</script>
<template>
  <div class="dark-bg" v-show="NoticeBool">
    <div
      class="w-[304px] h-[340px] rounded-[20px] bg-[#FFF] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col pt-20 items-center px-8 gap-y-4"
    >
      <notice-svg />
      <span class="font-bold text-[18px]">通知</span>
      <div class="max-h-[50px] w-full" v-html="NoticeMsg"></div>
      <div class="w-full h-[2px] bg-[#B5B5B5]"></div>
      <span
        @click="handNotice()"
        class="text-[#3474C1] font-bold text-[20px] absolute top-[calc(100%-50px)] cursor-pointer"
        >確定</span
      >
      <notice-cancel-svg @click="CloseNoticeBool" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dark-bg {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.4) !important;
}
</style>
