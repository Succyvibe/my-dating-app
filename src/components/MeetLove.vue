<script setup>
import Hert from "@/assets/icons/Hert.png";
import bgTiless from "@/assets/icons/bgtiless.png";
import bgTiles from "@/assets/icons/bgtiles.png";
</script>

<template>
  <section class="bg-[#320411] h-[100px] xl:h-[339px] relative">
    <img
      :src="bgTiles"
      alt=""
      class="absolute top-0 left-[20%] w-[100px] lg:w-[518px]"
    />
    <img
      :src="bgTiless"
      alt=""
      class="absolute bottom-0 right-[20%] w-[100px] lg:w-[518px]"
    />

    <div
      class="bg-[#500000] h-full rounded-[100px] xl:rounded-[200px] flex justify-center items-center"
    >
      <div class="flex xl:gap-x-20 gap-x-8">
        <h1 class="font-[800] text-[20px] xl:text-[64px] italic text-white">
          Meet your love
        </h1>
        <img :src="Hert" alt="" class="w-[40px] xl:w-[100px]" />
      </div>
    </div>
  </section>
</template>
