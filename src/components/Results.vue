<script setup>
import BgIconsLeft from "@/components/BgIconsLeft.vue";
import BgIconsRight from "@/components/BgIconsRight.vue";
</script>

<template>
  <section
    class="md:h-[264px] bg-gradient-to-r from-[#FB1656] via-[#D31348F7] to-[#950D33] relative"
  >
    <!-- ======================dots in Background============ -->

    <BgIconsLeft />
    <BgIconsRight />

    <div class="container mx-auto h-full px-4">
      <h1
        class="font-[700] text-[16px] md:text-[32px] leading-[50.4px] tracking-[-2.2%] text-center text-white"
      >
        Our Results In Numbers
      </h1>
      <div
        class="md:w-[370px] mx-auto flex justify-between md:gap-20 mt-[50px]"
      >
        <div class="flex flex-col items-center gap-2">
          <img src="../assets/icons/personIcon.png" alt="" />
          <h3
            class="text-white text-[16px] md:text-[32px] leading-[44.8px] text-center font-[700]"
          >
            100
            <span
              class="block font-[400] text-[10px] md:text-[18px] leading-[27px] text-center tracking-[-1.6%]"
              >Couples</span
            >
          </h3>
        </div>
        <div class="flex flex-col items-center gap-2">
          <img src="../assets/icons/ringIcon.png" alt="" />
          <h3
            class="text-white text-[16px] md:text-[32px] leading-[44.8px] text-center font-[700]"
          >
            25
            <span
              class="block font-[400] text-[10px] md:text-[18px] leading-[27px] text-center tracking-[-1.6%]"
              >Weddings</span
            >
          </h3>
        </div>
        <div class="flex flex-col items-center gap-2">
          <img src="../assets/icons/bookIcon.png" alt="" />
          <h3
            class="text-white text-[16px] md:text-[32px] leading-[44.8px] text-center font-[700]"
          >
            125
            <span
              class="block font-[400] text-[10px] md:text-[18px] leading-[27px] text-center tracking-[-1.6%]"
              >Profile</span
            >
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
