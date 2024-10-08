<script setup>
import { RouterLink } from "vue-router";
import checkIcon from "@/assets/icons/check-badge.png";
</script>

<template>
  <section>
    <div class="container px-4 lg:px-[160px] lg:py-[40px] mx-auto">
      <div
        class="xl:bg-[#FDFDFD] mx-auto text-center lg:pt-[16px] lg:px-[24px] lg:pb-[24px] pt-[16px]"
      >
        <h1 class="text-[#7D0B2B] font-bold text-[22px] xl:text-[44px]">
          Choose your pricing plan
        </h1>
        <p class="text-[16px] xl:text-[20px] font-[400] leading-[28px]">
          Select the best pricing plan at Love Flow to enhance your dating
          experience.
        </p>

        <div
          class="grid md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-3 mt-10 xl:mt-20 mb-10 relative pb-10"
        >
          <RouterLink
            to="/payment"
            type="link"
            class="border bg-white p-4 text-start"
          >
            <h4 class="text-[#220551] font-bold text-[9.03px]">Basic</h4>
            <h4 class="text-[14.43px] text-[#FB1656] font-bold">₦2300</h4>
            <div class="bg-[#F8F8F8] rounded-xl text-center p-4">
              <h4>Available Features</h4>
              <div class="flex flex-col gap-y-6">
                <div
                  class="border-[0.45px] border-[#E9EAF0] rounded-xl p-1 flex items-center gap-2"
                >
                  <div class="w-[10.83px] h-[10.83px]">
                    <img :src="checkIcon" alt="" class="w-full" />
                  </div>
                  <p
                    class="font-bold text-[5.24px] text-[#4E5566] leading-[8.12px]"
                  >
                    Live Streaming
                  </p>
                </div>
                <div
                  class="border-[0.45px] border-[#E9EAF0] rounded-xl p-1 flex items-center gap-2"
                >
                  <div class="w-[10.83px] h-[10.83px]">
                    <img :src="checkIcon" alt="" class="w-full" />
                  </div>
                  <p
                    class="font-bold text-[5.24px] text-[#4E5566] leading-[8.12px]"
                  >
                    Live Streaming
                  </p>
                </div>
                <div
                  class="border-[0.45px] border-[#E9EAF0] rounded-xl p-1 flex items-center gap-2"
                >
                  <div class="w-[10.83px] h-[10.83px]">
                    <img :src="checkIcon" alt="" class="w-full" />
                  </div>
                  <p
                    class="font-bold text-[5.24px] text-[#4E5566] leading-[8.12px]"
                  >
                    Live Streaming
                  </p>
                </div>
                <div
                  class="border border-[#E9EAF0] rounded-xl p-1 flex items-center gap-2"
                >
                  <div class="w-[10.83px] h-[10.83px]">
                    <img :src="checkIcon" alt="" class="w-full" />
                  </div>
                  <p
                    class="font-bold text-[5.24px] text-[#4E5566] leading-[8.12px]"
                  >
                    Live Streaming
                  </p>
                </div>
              </div>

              <button
                class="w-full border rounded-[3.61px] border-[#FB1656] p-[4.51px] mt-[20px] font-bold text-[10.83px] text-center text-[#FB1656]"
              >
                Get Started
              </button>
            </div>
          </RouterLink>
          <RouterLink
            to="/payment"
            type="link"
            class="border bg-[#FB1656] p-4 text-start relative xl:top-[-40px] shadow-xl"
          >
            <h4 class="text-white font-bold text-[9.97px] mb-3">Premium</h4>
            <h4 class="text-[9.978px] text-white font-[400] mb-3">
              ₦70,000 <span class="text-[6.98px]">/month</span>
            </h4>
            <div class="bg-[#F8F8F8] rounded-xl text-center p-4">
              <h4 class="font-bold text-[8.12px]">Available Features</h4>
              <h4 class="font-bold text-[8.12px] mt-5 mb-3">
                Available Features
              </h4>
              <div class="flex flex-col gap-y-6">
                <div
                  class="border-[0.45px] border-[#E9EAF0] rounded-xl p-1 flex items-center gap-2"
                >
                  <div class="w-[10.83px] h-[10.83px]">
                    <img :src="checkIcon" alt="" class="w-full" />
                  </div>
                  <p
                    class="font-bold text-[5.24px] text-[#4E5566] leading-[8.12px]"
                  >
                    Live Streaming
                  </p>
                </div>
                <div
                  class="border border-[#E9EAF0] rounded-xl p-1 flex items-center gap-2"
                >
                  <div class="w-[10.83px] h-[10.83px]">
                    <img :src="checkIcon" alt="" class="w-full" />
                  </div>
                  <p
                    class="font-bold text-[5.24px] text-[#4E5566] leading-[8.12px]"
                  >
                    Live Streaming
                  </p>
                </div>
                <div
                  class="border border-[#E9EAF0] rounded-xl p-1 flex items-center gap-2"
                >
                  <div class="w-[10.83px] h-[10.83px]">
                    <img :src="checkIcon" alt="" class="w-full" />
                  </div>
                  <p
                    class="font-bold text-[5.24px] text-[#4E5566] leading-[8.12px]"
                  >
                    Live Streaming
                  </p>
                </div>
                <div
                  class="border border-[#E9EAF0] rounded-xl p-1 flex items-center gap-2"
                >
                  <div class="w-[10.83px] h-[10.83px]">
                    <img :src="checkIcon" alt="" class="w-full" />
                  </div>
                  <p
                    class="font-bold text-[5.24px] text-[#4E5566] leading-[8.12px]"
                  >
                    Live Streaming
                  </p>
                </div>
              </div>

              <button
                class="w-full border rounded-[3.61px] border-[#FB1656] p-[4.51px] mt-[4.51px] font-bold text-[10.83px] text-center text-[#FB1656] mb-5"
              >
                Get Started
              </button>
              <button
                class="w-full border rounded-[3.61px] bg-[#FB1656] p-[4.51px] mt-[4.51px] font-bold text-[10.83px] text-center text-white"
              >
                Buy Plan
              </button>
            </div>
          </RouterLink>
          <div class="border bg-white p-4 text-start">
            <h4 class="text-[#220551] font-bold text-[9.03px]">Basic</h4>
            <h4 class="text-[14.43px] text-[#FB1656] font-bold">₦2300</h4>
            <div class="bg-[#F8F8F8] rounded-xl text-center p-4">
              <h4>Available Features</h4>
              <div class="flex flex-col gap-y-6">
                <div
                  class="border-[0.45px] border-[#E9EAF0] rounded-xl p-1 flex items-center gap-2"
                >
                  <div class="w-[10.83px] h-[10.83px]">
                    <img :src="checkIcon" alt="" class="w-full" />
                  </div>
                  <p
                    class="font-bold text-[5.24px] text-[#4E5566] leading-[8.12px]"
                  >
                    Live Streaming
                  </p>
                </div>
                <div
                  class="border-[0.45px] border-[#E9EAF0] rounded-xl p-1 flex items-center gap-2"
                >
                  <div class="w-[10.83px] h-[10.83px]">
                    <img :src="checkIcon" alt="" class="w-full" />
                  </div>
                  <p
                    class="font-bold text-[5.24px] text-[#4E5566] leading-[8.12px]"
                  >
                    Live Streaming
                  </p>
                </div>
                <div
                  class="border-[0.45px] border-[#E9EAF0] rounded-xl p-1 flex items-center gap-2"
                >
                  <div class="w-[10.83px] h-[10.83px]">
                    <img :src="checkIcon" alt="" class="w-full" />
                  </div>
                  <p
                    class="font-bold text-[5.24px] text-[#4E5566] leading-[8.12px]"
                  >
                    Live Streaming
                  </p>
                </div>
                <div
                  class="border border-[#E9EAF0] rounded-xl p-1 flex items-center gap-2"
                >
                  <div class="w-[10.83px] h-[10.83px]">
                    <img :src="checkIcon" alt="" class="w-full" />
                  </div>
                  <p
                    class="font-bold text-[5.24px] text-[#4E5566] leading-[8.12px]"
                  >
                    Live Streaming
                  </p>
                </div>
              </div>

              <button
                class="w-full border rounded-[3.61px] border-[#FB1656] p-[4.51px] mt-[20px] font-bold text-[10.83px] text-center text-[#FB1656]"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
