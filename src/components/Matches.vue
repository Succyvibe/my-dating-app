<script setup>
import doctor from "@/assets/images/doctor.jpg";
import black from "@/assets/images/black.jpg";
import marcos from "@/assets/images/marcos.jpg";
import loveIcon from "@/assets/icons/Union.png";
import msgIcon from "@/assets/images/msgIcon.png";
import backArrow from "@/assets/icons/back-arrow.png";
import nextArrow from "@/assets/icons/next-arrow.png";
import { RouterLink } from "vue-router";
</script>

<template>
  <section>
    <div class="container mx-auto py-[60px]">
      <div class="w-full">
        <h1
          class="font-Poppins font-[700] text-[18px] lg:text-[24px] leading-[39.2%] tracking-[-2%] text-[#54071D] mt-10 md:mt-0 mb-10"
        >
          People that match your interest
        </h1>
        <ul
          class="text-[16px] font-Poppins font-[400] leading-[24px] tracking-[-1.2%] text-[#7D0B2B] flex-wrap md:flex-nowrap flex gap-[10px]"
        >
          <li class="p-[10px] rounded-[8px] bg-[#F8F8FB]">Drinking</li>
          <li class="p-[10px] rounded-[8px] bg-[#F8F8FB]">Dancing</li>
          <li class="p-[10px] rounded-[8px] bg-[#F8F8FB]">Local Culture</li>
          <li class="p-[10px] rounded-[8px] bg-[#F8F8FB]">Recreation</li>
          <li class="p-[10px] rounded-[8px] bg-[#F8F8FB]">Swimming</li>
          <li class="p-[10px] rounded-[8px] bg-[#F8F8FB]">Business</li>
        </ul>

        <div class="w-full pt-10">
          <div
            class="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]"
          >
            <!-- Main card -->
            <RouterLink
              to="/view-matches"
              type="link"
              class="border-[1.5px] border-[#FB1656] rounded-[24px] py-[8px] px-[4px] bg-[#FAFAFA] relative"
            >
              <!-- Roinded Image==== -->

              <div
                class="w-[67.5px] h-[69.49px] border-[2.25px] border-[#FB1656] rounded-full absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <img
                  class="w-full h-full rounded-full object-cover"
                  :src="doctor"
                  alt=""
                />
              </div>
              <!-- grid image -->
              <div
                class="grid grid-cols-3 h-[190.42px] rounded-[24px] mb-[7.3px]"
              >
                <img
                  class="object-cover h-full rounded-tl-[24px]"
                  :src="doctor"
                  alt=""
                />
                <img class="object-cover h-full" :src="black" alt="" />
                <img
                  class="object-cover h-full rounded-tr-[24px]"
                  :src="marcos"
                  alt=""
                />
              </div>
              <!-- User Name -->

              <div class="pt-5">
                <p
                  class="text-center font-Poppins text-[15px] font-[700] leading-[21px] tracking-[-1.6%] text-[#454747]"
                >
                  John Macaulay <span>22</span>
                </p>
                <!-- ==============City======== -->
                <p class="text-center text-[#454747] font-[300]">London</p>
              </div>

              <!-- Like and comment  -->
              <div
                class="w-[113.25px] mx-auto flex gap-[35.25px] p-[10.23px] rounded-[24.55px] bg-[#FED0DD] mt-[15px]"
              >
                <div><img :src="loveIcon" alt="" /></div>
                <div>
                  <img :src="msgIcon" alt="" />
                </div>
              </div>
            </RouterLink>
            <div
              class="border-[1.5px] border-[#FB1656] rounded-[24px] py-[8px] px-[4px] bg-[#FAFAFA] relative"
            >
              <!-- Roinded Image==== -->

              <div
                class="w-[67.5px] h-[69.49px] border-[2.25px] border-[#FB1656] rounded-full absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <img
                  class="w-full h-full rounded-full object-cover"
                  :src="doctor"
                  alt=""
                />
              </div>
              <!-- grid image -->
              <div
                class="grid grid-cols-3 h-[190.42px] rounded-[24px] mb-[7.3px]"
              >
                <img
                  class="object-cover h-full rounded-tl-[24px]"
                  :src="doctor"
                  alt=""
                />
                <img class="object-cover h-full" :src="black" alt="" />
                <img
                  class="object-cover h-full rounded-tr-[24px]"
                  :src="marcos"
                  alt=""
                />
              </div>
              <!-- User Name -->

              <div class="pt-10">
                <p
                  class="text-center font-Poppins text-[15px] font-[700] leading-[21px] tracking-[-1.6%] text-[#454747]"
                >
                  John Macaulay <span>22</span>
                </p>
                <!-- ==============City======== -->
                <p class="text-center text-[#454747] font-[300]">London</p>
              </div>

              <!-- Like and comment  -->
              <div
                class="w-[113.25px] mx-auto flex gap-[35.25px] p-[10.23px] rounded-[24.55px] bg-[#FED0DD] mt-[15px]"
              >
                <div><img :src="loveIcon" alt="" /></div>
                <div>
                  <img :src="msgIcon" alt="" />
                </div>
              </div>
            </div>
            <div
              class="border-[1.5px] border-[#FB1656] rounded-[24px] py-[8px] px-[4px] bg-[#FAFAFA] relative"
            >
              <!-- Roinded Image==== -->

              <div
                class="w-[67.5px] h-[69.49px] border-[2.25px] border-[#FB1656] rounded-full absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <img
                  class="w-full h-full rounded-full object-cover"
                  :src="doctor"
                  alt=""
                />
              </div>
              <!-- grid image -->
              <div
                class="grid grid-cols-3 h-[190.42px] rounded-[24px] mb-[7.3px]"
              >
                <img
                  class="object-cover h-full rounded-tl-[24px]"
                  :src="doctor"
                  alt=""
                />
                <img class="object-cover h-full" :src="black" alt="" />
                <img
                  class="object-cover h-full rounded-tr-[24px]"
                  :src="marcos"
                  alt=""
                />
              </div>
              <!-- User Name -->

              <div class="pt-10">
                <p
                  class="text-center font-Poppins text-[15px] font-[700] leading-[21px] tracking-[-1.6%] text-[#454747]"
                >
                  John Macaulay <span>22</span>
                </p>
                <!-- ==============City======== -->
                <p class="text-center text-[#454747] font-[300]">London</p>
              </div>

              <!-- Like and comment  -->
              <div
                class="w-[113.25px] mx-auto flex gap-[35.25px] p-[10.23px] rounded-[24.55px] bg-[#FED0DD] mt-[15px]"
              >
                <div><img :src="loveIcon" alt="" /></div>
                <div>
                  <img :src="msgIcon" alt="" />
                </div>
              </div>
            </div>
            <div
              class="border-[1.5px] border-[#FB1656] rounded-[24px] py-[8px] px-[4px] bg-[#FAFAFA] relative"
            >
              <!-- Roinded Image==== -->

              <div
                class="w-[67.5px] h-[69.49px] border-[2.25px] border-[#FB1656] rounded-full absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <img
                  class="w-full h-full rounded-full object-cover"
                  :src="doctor"
                  alt=""
                />
              </div>
              <!-- grid image -->
              <div
                class="grid grid-cols-3 h-[190.42px] rounded-[24px] mb-[7.3px]"
              >
                <img
                  class="object-cover h-full rounded-tl-[24px]"
                  :src="doctor"
                  alt=""
                />
                <img class="object-cover h-full" :src="black" alt="" />
                <img
                  class="object-cover h-full rounded-tr-[24px]"
                  :src="marcos"
                  alt=""
                />
              </div>
              <!-- User Name -->

              <div class="pt-10">
                <p
                  class="text-center font-Poppins text-[15px] font-[700] leading-[21px] tracking-[-1.6%] text-[#454747]"
                >
                  John Macaulay <span>22</span>
                </p>
                <!-- ==============City======== -->
                <p class="text-center text-[#454747] font-[300]">London</p>
              </div>

              <!-- Like and comment  -->
              <div
                class="w-[113.25px] mx-auto flex gap-[35.25px] p-[10.23px] rounded-[24.55px] bg-[#FED0DD] mt-[15px]"
              >
                <div><img :src="loveIcon" alt="" /></div>
                <div>
                  <img :src="msgIcon" alt="" />
                </div>
              </div>
            </div>
            <div
              class="border-[1.5px] border-[#FB1656] rounded-[24px] py-[8px] px-[4px] bg-[#FAFAFA] relative"
            >
              <!-- Roinded Image==== -->

              <div
                class="w-[67.5px] h-[69.49px] border-[2.25px] border-[#FB1656] rounded-full absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <img
                  class="w-full h-full rounded-full object-cover"
                  :src="doctor"
                  alt=""
                />
              </div>
              <!-- grid image -->
              <div
                class="grid grid-cols-3 h-[190.42px] rounded-[24px] mb-[7.3px]"
              >
                <img
                  class="object-cover h-full rounded-tl-[24px]"
                  :src="doctor"
                  alt=""
                />
                <img class="object-cover h-full" :src="black" alt="" />
                <img
                  class="object-cover h-full rounded-tr-[24px]"
                  :src="marcos"
                  alt=""
                />
              </div>
              <!-- User Name -->

              <div class="pt-10">
                <p
                  class="text-center font-Poppins text-[15px] font-[700] leading-[21px] tracking-[-1.6%] text-[#454747]"
                >
                  John Macaulay <span>22</span>
                </p>
                <!-- ==============City======== -->
                <p class="text-center text-[#454747] font-[300]">London</p>
              </div>

              <!-- Like and comment  -->
              <div
                class="w-[113.25px] mx-auto flex gap-[35.25px] p-[10.23px] rounded-[24.55px] bg-[#FED0DD] mt-[15px]"
              >
                <div><img :src="loveIcon" alt="" /></div>
                <div>
                  <img :src="msgIcon" alt="" />
                </div>
              </div>
            </div>
            <div
              class="border-[1.5px] border-[#FB1656] rounded-[24px] py-[8px] px-[4px] bg-[#FAFAFA] relative"
            >
              <!-- Roinded Image==== -->

              <div
                class="w-[67.5px] h-[69.49px] border-[2.25px] border-[#FB1656] rounded-full absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <img
                  class="w-full h-full rounded-full object-cover"
                  :src="doctor"
                  alt=""
                />
              </div>
              <!-- grid image -->
              <div
                class="grid grid-cols-3 h-[190.42px] rounded-[24px] mb-[7.3px]"
              >
                <img
                  class="object-cover h-full rounded-tl-[24px]"
                  :src="doctor"
                  alt=""
                />
                <img class="object-cover h-full" :src="black" alt="" />
                <img
                  class="object-cover h-full rounded-tr-[24px]"
                  :src="marcos"
                  alt=""
                />
              </div>
              <!-- User Name -->

              <div class="pt-10">
                <p
                  class="text-center font-Poppins text-[15px] font-[700] leading-[21px] tracking-[-1.6%] text-[#454747]"
                >
                  John Macaulay <span>22</span>
                </p>
                <!-- ==============City======== -->
                <p class="text-center text-[#454747] font-[300]">London</p>
              </div>

              <!-- Like and comment  -->
              <div
                class="w-[113.25px] mx-auto flex gap-[35.25px] p-[10.23px] rounded-[24.55px] bg-[#FED0DD] mt-[15px]"
              >
                <div><img :src="loveIcon" alt="" /></div>
                <div>
                  <img :src="msgIcon" alt="" />
                </div>
              </div>
            </div>
            <div
              class="border-[1.5px] border-[#FB1656] rounded-[24px] py-[8px] px-[4px] bg-[#FAFAFA] relative"
            >
              <!-- Roinded Image==== -->

              <div
                class="w-[67.5px] h-[69.49px] border-[2.25px] border-[#FB1656] rounded-full absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <img
                  class="w-full h-full rounded-full object-cover"
                  :src="doctor"
                  alt=""
                />
              </div>
              <!-- grid image -->
              <div
                class="grid grid-cols-3 h-[190.42px] rounded-[24px] mb-[7.3px]"
              >
                <img
                  class="object-cover h-full rounded-tl-[24px]"
                  :src="doctor"
                  alt=""
                />
                <img class="object-cover h-full" :src="black" alt="" />
                <img
                  class="object-cover h-full rounded-tr-[24px]"
                  :src="marcos"
                  alt=""
                />
              </div>
              <!-- User Name -->

              <div class="pt-10">
                <p
                  class="text-center font-Poppins text-[15px] font-[700] leading-[21px] tracking-[-1.6%] text-[#454747]"
                >
                  John Macaulay <span>22</span>
                </p>
                <!-- ==============City======== -->
                <p class="text-center text-[#454747] font-[300]">London</p>
              </div>

              <!-- Like and comment  -->
              <div
                class="w-[113.25px] mx-auto flex gap-[35.25px] p-[10.23px] rounded-[24.55px] bg-[#FED0DD] mt-[15px]"
              >
                <div><img :src="loveIcon" alt="" /></div>
                <div>
                  <img :src="msgIcon" alt="" />
                </div>
              </div>
            </div>
            <div
              class="border-[1.5px] border-[#FB1656] rounded-[24px] py-[8px] px-[4px] bg-[#FAFAFA] relative"
            >
              <!-- Roinded Image==== -->

              <div
                class="w-[67.5px] h-[69.49px] border-[2.25px] border-[#FB1656] rounded-full absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <img
                  class="w-full h-full rounded-full object-cover"
                  :src="doctor"
                  alt=""
                />
              </div>
              <!-- grid image -->
              <div
                class="grid grid-cols-3 h-[190.42px] rounded-[24px] mb-[7.3px]"
              >
                <img
                  class="object-cover h-full rounded-tl-[24px]"
                  :src="doctor"
                  alt=""
                />
                <img class="object-cover h-full" :src="black" alt="" />
                <img
                  class="object-cover h-full rounded-tr-[24px]"
                  :src="marcos"
                  alt=""
                />
              </div>
              <!-- User Name -->

              <div class="pt-10">
                <p
                  class="text-center font-Poppins text-[15px] font-[700] leading-[21px] tracking-[-1.6%] text-[#454747]"
                >
                  John Macaulay <span>22</span>
                </p>
                <!-- ==============City======== -->
                <p class="text-center text-[#454747] font-[300]">London</p>
              </div>

              <!-- Like and comment  -->
              <div
                class="w-[113.25px] mx-auto flex gap-[35.25px] p-[10.23px] rounded-[24.55px] bg-[#FED0DD] mt-[15px]"
              >
                <div><img :src="loveIcon" alt="" /></div>
                <div>
                  <img :src="msgIcon" alt="" />
                </div>
              </div>
            </div>
          </div>

          <!-- =======================sliding buttons -->

          <div class="w-full pt-10">
            <ul class="md:flex md:justify-end gap-[16px] w-full">
              <li
                class="border border-[#828191] rounded-[8px] p-[10px] text-[#828191] items-center flex gap-[10px]"
              >
                <img :src="backArrow" alt="" /> Previous
              </li>
              <li
                class="w-[40px] h-[48px] rounded-[8px] p-[10px] bg-[#FB1656] text-[20px] leading-[28px] font-Raleway tracking-[-1.6%] text-white flex justify-center items-center"
              >
                1
              </li>
              <li
                class="w-[40px] h-[48px] rounded-[8px] p-[10px] bg-[#EDEDED] text-[20px] leading-[28px] font-Raleway tracking-[-1.6%] text-[#3F3D56] flex justify-center items-center"
              >
                2
              </li>
              <li
                class="w-[40px] h-[48px] rounded-[8px] p-[10px] bg-[#EDEDED] text-[20px] leading-[28px] font-Raleway tracking-[-1.6%] text-[#3F3D56] flex justify-center items-center"
              >
                3
              </li>
              <li
                class="w-[40px] h-[48px] rounded-[8px] p-[10px] text-[20px] leading-[28px] font-Raleway tracking-[-1.6%] text-[#3F3D56] flex justify-center items-center"
              >
                ....
              </li>
              <li
                class="w-[40px] h-[48px] rounded-[8px] p-[10px] bg-[#EDEDED] text-[20px] leading-[28px] font-Raleway tracking-[-1.6%] text-[#3F3D56] flex justify-center items-center"
              >
                10
              </li>
              <li
                class="border border-[#828191] rounded-[8px] p-[10px] text-[#828191] flex items-center gap-[10px]"
              >
                Next <img :src="nextArrow" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
