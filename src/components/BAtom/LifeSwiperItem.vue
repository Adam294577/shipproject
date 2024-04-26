<template>
  <div class="grid grid-cols-6 w-full gap-1 p-1 pb-4">
    <div class="h-[65px] col-span-2 bg-[#FFF] rounded-[10px] p-2 text-center">
      <div class="flex justify-center pb-[8px]">
        <clock-svg />
      </div>
      <p class="w-full pl-1">
        <slot name="clock"></slot>
      </p>
    </div>
    <div class="h-[65px] col-span-2 bg-[#FFF] rounded-[10px] p-2 text-center">
      <div class="flex justify-center pb-[9px]">
        <lungs-svg />
      </div>
      <p class="w-full relative left-[-3px]">
        <slot name="lungs"></slot>
        <time-min-svg class="absolute right-2 top-[11px]" />
      </p>
    </div>
    <div class="h-[65px] col-span-2 bg-[#FFF] rounded-[10px] p-2 text-center">
      <div class="flex justify-center pb-[7px]">
        <heart-svg />
      </div>
      <p class="w-full relative left-[-3px]">
        <slot name="heart"></slot>
        <time-min-svg class="absolute right-2 top-[11px]" />
      </p>
    </div>
    <div class="h-[65px] col-span-2 bg-[#FFF] rounded-[10px] p-2 text-center">
      <div class="flex justify-center pb-1">
        <temper-svg />
      </div>
      <p class="w-full relative">
        <slot name="temper"></slot>
        <temp-unit-svg class="absolute right-4 top-[11px]" />
      </p>
    </div>
    <div class="h-[65px] col-span-2 bg-[#FFF] rounded-[10px] p-2 text-center">
      <div class="flex justify-center pb-[12px]">
        <spo-2-svg class="relative top-1" />
      </div>
      <p class="w-full relative">
        <slot name="spo2"></slot>
        <persent-svg class="absolute right-6 top-[11px]" />
      </p>
    </div>
    <div class="h-[65px] col-span-2 bg-[#FFF] rounded-[10px] p-2 text-center">
      <div class="flex justify-center pb-[12px]">
        <circut-svg class="relative" />
      </div>
      <p class="w-full relative top-[-7px]">
        <slot name="circut"></slot>
        <hg-unit-svg class="absolute right-[30px] top-[25px]" />
      </p>
    </div>
    <div class="h-[65px] col-span-3 bg-[#FFF] rounded-[10px] p-2">
      <div class="flex justify-center pb-[12px]">
        <onbed-svg class="relative top-1" />
      </div>
      <p class="w-full relative font-bold pl-3">
        <slot name="onbed"></slot>
      </p>
    </div>
    <div class="h-[65px] col-span-3 bg-[#FFF] rounded-[10px] p-2">
      <div class="flex justify-center pb-[12px] gap-x-3">
        <black-e-svg class="relative top-1 scale-110" />
        <black-v-svg class="relative top-1 scale-110" />
        <black-m-svg class="relative top-1 scale-110" />
      </div>
      <div class="flex justify-center gap-x-3 items-center mt-[-4px]">
        <span>
          <slot name="e"></slot>
        </span>
        <span class="w-[1px] h-[17px] bg-[#000] inline-block"></span>
        <slot name="v"></slot>
        <span class="w-[1px] h-[17px] bg-[#000] inline-block"></span>
        <slot name="m"></slot>
      </div>
    </div>
  </div>
  <span class="absolute top-[calc(100%-25px)] left-2 text-[#FFF]">
    <slot name="EditName"></slot>
  </span>
</template>

<script setup></script>

<style lang="scss" scoped></style>
