<script setup>
import MsgIcon from "@/assets/icons/msgIcon.png";
import twitter from "@/assets/icons/twitter.png";
</script>

<template>
  <footer class="bg-[#7D0B2B]">
    <div class="container mx-auto px-4 lg:px-[160px] lg:py-[40px]">
      <div
        class="grid xl:flex items-center justify-between text-white xl:gap-20 pt-10"
      >
        <div>
          <img :src="MsgIcon" alt="" class="w-[30px] xl:w-[65px]" />
          <p class="text-[10px] mt-4">
            Talk, Connect, Fall in Love – Your Journey Starts Here
          </p>
        </div>

        <div>
          <h5 class="mb-8 font-[700]">Product</h5>

          <ul class="text-[10px] xl:text-[16px] font-[400]">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 class="mb-8 font-[700]">Product</h5>

          <ul class="text-[10px] xl:text-[16px] font-[400]">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 class="mb-8 font-[700]">Product</h5>

          <ul class="text-[10px] xl:text-[16px] font-[400]">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
          </ul>
        </div>

        <ul class="flex flex-col gap-y-5">
          <li>
            <a href="">
              <img :src="twitter" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img :src="twitter" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img :src="twitter" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <p class="text-[12px] leading-[18px] text-white">
        © Copyright 2024, All Rights Reserved by Aditama
      </p>
    </div>
  </footer>
</template>
