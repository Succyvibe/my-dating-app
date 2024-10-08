<script setup>
import frame from "@/assets/images/Frame-0.png";
import star from "@/assets/icons/star.png";
import HeartBg from "@/assets/icons/Heartbg.png";
import HeartSm from "@/assets/icons/Heartsm.png";
import Quote from "@/assets/icons/quote.png";
</script>

<template>
  <section class="lg:px-[160px] lg:py-[40px]">
    <div class="container mx-auto relative">
      <img
        :src="Quote"
        alt=""
        class="absolute top-[10%] right-[37%] hidden xl:block"
      />
      <img
        :src="Quote"
        alt=""
        class="absolute bottom-[20%] right-[5%] hidden xl:block"
      />
      <h1
        class="text-[#454747] text-[14px] lg:text-[24px] font-[700] text-center lg:text-start"
      >
        What Our Users Say
      </h1>
      <div
        class="md:flex md:justify-between md:items-center lg:p-20 md:gap-x-10"
      >
        <img :src="frame" alt="" class="md:w-[250px] xl:w-[500px]" />
        <div class="relative">
          <img
            :src="HeartBg"
            alt=""
            class="absolute top-[5px] left-[-130px] hidden xl:block"
          />
          <img
            :src="HeartSm"
            alt=""
            class="absolute top-[-20px] right-0 hidden xl:block"
          />

          <div class="w-full lg:w-[481px] flex flex-col gap-y-4 px-4 lg:px-0">
            <h1
              class="text-[#454747] lg:text-[24px] font-[700] text-center md:text-start"
            >
              It was a great experience
            </h1>
            <ul class="flex gap-x-2 justify-center md:justify-start">
              <li><img :src="star" alt="" /></li>
              <li><img :src="star" alt="" /></li>
              <li><img :src="star" alt="" /></li>
              <li><img :src="star" alt="" /></li>
              <li><img :src="star" alt="" /></li>
              <li><img :src="star" alt="" /></li>
              <li><img :src="star" alt="" /></li>
            </ul>
            <p
              class="font-[400] text-[12px] lg:text-[18px] leading-[24px] lg:leading-[27px] tracking-[-1.6%] lg:w-[481px] text-center md:text-start"
            >
              I've had the pleasure of chatting with John Fredrick on Love Flow
              for the past few weeks, and I can confidently say he is a
              fantastic person to connect with.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
