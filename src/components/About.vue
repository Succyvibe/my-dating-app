<script setup>
// import { defineProps } from "vue";
import About from "@/assets/images/aboutImage.png";

// defineProps({
//   About: "About",
// });
</script>

<template>
  <section>
    <h1
      class="font-[700] text-[24px] leading-[33.6px] mb-4 text-center lg:hidden mt-6"
    >
      About Us
    </h1>
    <div
      class="container mx-auto px-4 lg:pt-[40px] lg:pr-[160px] lg:pb-[160px] lg:pl-[160px] flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-7 lg:gap-0 lg:my-20"
    >
      <div class="">
        <img :src="About" alt="" />
      </div>

      <div class="">
        <h1
          class="font-[700] text-[16px] md:text-[24px] leading-[33.6px] mb-4 hidden lg:block"
        >
          About Us
        </h1>
        <p
          class="font-[400] text-[10px] md:text-[18px] leading-[20px] md:leading-[27px] md:tracking-[-1.6%] lg:w-[481px]"
        >
          Welcome to Love Flow, where love meets innovation. Our mission is to
          create meaningful connections that lead to real-life relationships. We
          believe that everyone deserves to find their perfect match, and our
          app is designed to make that journey as seamless and enjoyable as
          possible. Welcome to Love Flow, where love meets innovation. Our
          mission is to create meaningful connections that lead to real-life
          relationships. We believe that everyone deserves to find their perfect
          match, and our app is designed to make that journey as seamless and
          enjoyable as possible.
        </p>
      </div>
    </div>
  </section>
</template>
