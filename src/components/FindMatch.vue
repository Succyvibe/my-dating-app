<script setup>
import photo_one from "@/assets/images/photo-0.png";
import photo_two from "@/assets/images/photo-1.png";
import photo_three from "@/assets/images/photo-3.png";
import ButtonComponent from "@/components/Button.vue";
</script>

<template>
  <section class="bg-[#F6EDED75] lg:pt-8">
    <div
      class="container mx-auto px-4 lg:px-[160px] lg:py-[40px] flex flex-col gap-y-24"
    >
      <div class="lg:flex lg:flex-row lg:justify-between">
        <div class="flex flex-col gap-4 lg:gap-8">
          <h1
            class="font-[700] text-[#474545] text-[14px] lg:text-[24px] leading-[33.6px]"
          >
            Advanced matching algorithm
          </h1>
          <p
            class="font-[400] text-[12px] lg:text-[18px] leading-[24px] lg:leading-[27px] tracking-[-1.6%] lg:w-[481px]"
          >
            At Love Flow, we believe that the foundation of any successful
            relationship lies in true compatibility. That's why we've developed
            a cutting-edge matching algorithm designed to help you find your
            perfect match with precision and ease. At Love Flow, we believe that
            the foundation of any successful relationship lies in true
            compatibility. That's why we've developed a cutting-edge matching
            algorithm designed to help you find your perfect match with
            precision and ease.
          </p>
          <ButtonComponent title="Find your match" wd="w-[261px]" />
        </div>

        <div
          class="lg:w-[500px] lg:h-[500px] bg-[#EBE5E5] rounded-[24px] mt-20 lg:mt-0"
        >
          <img :src="photo_one" alt="" class="w-[100%] object-cover" />
        </div>
      </div>
      <div class="lg:flex lg:flex-row-reverse lg:justify-between">
        <div class="flex flex-col gap-4 lg:gap-8">
          <h1
            class="font-[700] text-[#474545] text-[14px] lg:text-[24px] leading-[33.6px]"
          >
            Advanced matching algorithm
          </h1>
          <p
            class="font-[400] text-[12px] lg:text-[18px] leading-[24px] lg:leading-[27px] tracking-[-1.6%] lg:w-[481px]"
          >
            At Love Flow, we believe that the foundation of any successful
            relationship lies in true compatibility. That's why we've developed
            a cutting-edge matching algorithm designed to help you find your
            perfect match with precision and ease. At Love Flow, we believe that
            the foundation of any successful relationship lies in true
            compatibility. That's why we've developed a cutting-edge matching
            algorithm designed to help you find your perfect match with
            precision and ease.
          </p>
          <ButtonComponent title="Find your match" wd="w-[261px]" />
        </div>

        <div
          class="lg:w-[500px] lg:h-[500px] bg-[#EBE5E5] rounded-[24px] mt-20 lg:mt-0"
        >
          <img :src="photo_two" alt="" class="w-[100%] object-cover" />
        </div>
      </div>
      <div class="lg:flex lg:flex-row lg:justify-between">
        <div class="flex flex-col gap-4 lg:gap-8">
          <h1
            class="font-[700] text-[#474545] text-[14px] lg:text-[24px] leading-[33.6px]"
          >
            Advanced matching algorithm
          </h1>
          <p
            class="font-[400] text-[12px] lg:text-[18px] leading-[24px] lg:leading-[27px] tracking-[-1.6%] lg:w-[481px]"
          >
            At Love Flow, we believe that the foundation of any successful
            relationship lies in true compatibility. That's why we've developed
            a cutting-edge matching algorithm designed to help you find your
            perfect match with precision and ease. At Love Flow, we believe that
            the foundation of any successful relationship lies in true
            compatibility. That's why we've developed a cutting-edge matching
            algorithm designed to help you find your perfect match with
            precision and ease.
          </p>
          <ButtonComponent title="Find your match" wd="w-[261px]" />
        </div>

        <div
          class="lg:w-[500px] lg:h-[500px] bg-[#EBE5E5] rounded-[24px] mt-20 lg:mt-0"
        >
          <img :src="photo_three" alt="" class="w-[100%] object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>
