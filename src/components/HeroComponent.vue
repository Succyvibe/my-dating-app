<script setup>
import ButtonComponent from "./Button.vue";

import heroImage from "../assets/images/heroImage.png";
</script>

<template>
  <section class="h-[550px] xl:h-[700px] bg-[#fafafa] pb-10 md:p-0">
    <div
      class="container mx-auto px-4 flex flex-col-reverse md:flex-row md:justify-between md:items-center h-full"
    >
      <!-- ====================Hero Section Text Box -->

      <div
        class="flex flex-col md:gap-[10px] lg:gap-[24px] xl:w-[464px] lg:items-start text-center md:text-start"
      >
        <h1
          class="font-[700] text-[24px] md:text-[32px] lg:text-[50px] xl:text-[64px] xl:leading-[89.6px] tracking-[-2.2%] text-[#7D0B2B]"
        >
          Love Like in the Movies
        </h1>
        <p
          class="text-[#000000] text-[16px] md:text-[18px] lg:text-[24px] leading-[33.6px] -tracking-[1.8%] mb-4 md:mb-0"
        >
          We help loving hearts find each other
        </p>
        <ButtonComponent title="I need love" bg="bg-[#FB1656]" wd="w-[261px]" />
      </div>

      <!-- ===================Hero Section============== -->

      <div>
        <img :src="heroImage" alt="" class="xl:w-[500px]" />
      </div>
    </div>
  </section>
</template>
