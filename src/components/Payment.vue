<script setup>
import mastercard from "@/assets/icons/mastercard.png";
import checkbox from "@/assets/icons/squaredCheckBox.png";
import Logo from "@/assets/icons/logo.png";
</script>

<template>
  <section>
    <div class="w-[90%] xl:w-[1111px] mx-auto">
      <div class="w-full xl:p-[16px] border border-[#DEDEDE] gap-[80px]">
        <h1
          class="text-[24px] font-[700] leading-[33.6px] tracking-[-1.8px] text-[#363636] mb-4"
        >
          Payment Method
        </h1>
        <form class="w-full">
          <input
            type="email"
            placeholder="Email"
            class="border-b w-full pt-[10px] pr-[10px] pb-[10px] pl-[12px] text-[14px] leading-[27px] tracking-[-1.6%] text-[#00000066]"
          />
          <input
            type="text"
            placeholder="Card holder name"
            class="border-b w-full pt-[10px] pr-[10px] pb-[10px] pl-[12px] text-[14px] leading-[27px] tracking-[-1.6%] text-[#00000066]"
          />

          <div
            class="flex gap-4 border-b w-full pt-[10px] pr-[10px] pb-[10px] pl-[12px] text-[14px] leading-[27px] tracking-[-1.6%] text-[#00000066]"
          >
            <img :src="mastercard" alt="" class="object-cover" />
            <input type="number" src placeholder="Card number" />
          </div>
          <input
            type="date"
            placeholder=" "
            class="border-b w-full pt-[10px] pr-[10px] pb-[10px] pl-[12px] text-[14px] leading-[27px] tracking-[-1.6%] text-[#00000066]"
          />
          <div
            class="flex justify-between gap-4 border-b w-full pt-[10px] pr-[10px] pb-[10px] pl-[12px] text-[14px] leading-[27px] tracking-[-1.6%] text-[#00000066]"
          >
            <input type="number" src placeholder="CVC" />
            <img :src="mastercard" alt="" class="object-cover" />
          </div>
          <div class="flex mt-5 gap-3">
            <img :src="checkbox" alt="" />
            Save this card for future purposes
          </div>
        </form>
      </div>
      <div
        class="w-[447px] rounded-[6px] border-[0.75px] p-[12px] border-[#DEDEDE] mt-6"
      >
        <p class="font-bold leading-[25.2px]">Your plan</p>
        <div
          class="w-[381.93px] border-b-[0.75px] pb-[30px] flex gap-6 items-center pt-4"
        >
          <img class="h-[36.3px] w-[158.93]" :src="Logo" alt="" />

          <p
            class="text-[10.6px] leading-[15.75px] tracking-[-0.6%] text-[#FB1656]"
          >
            <span class="font-bold text-[18px] leading-[25.2px]">₦70,000/</span
            >month
          </p>
          <p class="font-bold text-[18px leading-[25.2px] text-[#454747]">
            Premium
          </p>
        </div>
        <div class="flex justify-between my-8">
          <p class="font-[700] text-[#102844] text-[18px] leading-[25.2px]">
            Total
          </p>
          <p class="font-[700] text-[#102844] text-[18px] leading-[25.2px]">
            ₦70,000/month
          </p>
        </div>
        <RouterLink
          to="/successful"
          type="link"
          class="bg-[#FB1656] w-[142.25px] rounded-[6px] p-[7.5px] text-white font-[700] text-[10px] lg:text-[16px] leading-[24px] tracking-[-1.2%]"
        >
          Buy Plan
        </RouterLink>
      </div>
    </div>
  </section>
</template>
