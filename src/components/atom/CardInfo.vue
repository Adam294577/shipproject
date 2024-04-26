<template>
  <div class="mb-2 text-[17px] font-bold flex justify-around overflow-hidden max-w-[400px ]">
    <span class="w-1/6 text-left">
      <slot name="name"> </slot>
    </span>
    <span class="w-[1px] h-[20px] inline-block bg-black relative top-1"></span>
    <span class="w-1/3 text-center">
      <slot name="id"> </slot>
    </span>
    <span class="w-[1px] h-[20px] inline-block bg-black relative top-1"></span>
    <span class="w-1/6 text-center">
      <slot name="old"> </slot>
    </span>
    <span class="w-[1px] h-[20px] inline-block bg-black relative top-1"></span>
    <span class="w-1/6 text-center">
      <slot name="sex"> </slot>
    </span>
  </div>
  <div class="flex flex-col gap-y-4 pl-1">
    <div>
      <p class="text-gray mb-0 lh-1">
        <slot name="whereDoctor"> </slot>
        <!-- 屏東縣琉球鄉衛生所 -->
      </p>
      <p class="text-gray mb-0 lh-1">
        <slot name="doctor"> </slot>
        <!-- 鄭敏翔 / 家醫科 -->
      </p>
    </div>
    <div>
      <p class="mb-0 lh-1 font-bold">
        <slot name="transHos"> </slot>
        <!-- 轉入 / 東港安泰醫院 -->
      </p>
      <p class="text-gray mb-0 lh-1">
        轉診申請時間:
        <!-- 2023-12-17 08:00 -->
        <span>
          <slot name="date"> </slot>
        </span>
      </p>
    </div>
    <div>
      <p class="mb-0 lh-1 font-bold">
        <slot name="care"> </slot>
        <!-- 急診治療 -->
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
