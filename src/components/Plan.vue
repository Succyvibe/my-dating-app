<script setup>
import doctor from "@/assets/images/doctor.jpg";
import black from "@/assets/images/black.jpg";
import marcos from "@/assets/images/marcos.jpg";
import loveIcon from "@/assets/icons/Union.png";
import msgIcon from "@/assets/icons/msgIcon.png";
import checkIcon from "@/assets/icons/check-badge.png";
</script>

<template>
  <section class="relative">
    <div
      class="absolute top-0 left-0 h-full w-full bg-[#000000B2] z-10 flex justify-center items-center"
    >
      <div class="w-[100%] xl:w-[70%] mx-auto p-[20px] z-40">
        <div
          class="xl:bg-[#FDFDFD] w-full xl:w-[1120px] mx-auto text-center xl:px-10 pt-5"
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
            <RouterLink to="/choose-plan" type="link" class="border bg-white p-4 text-start">
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
            <RouterLink to="/choose-plan" type="link" class="border bg-white p-4 relative text-center">
              <h4 class="text-black font-bold text-[9.97px] mb-3">Premium</h4>
              <h4 class="text-[9.978px] text-[#FB1656] font-[400]">
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
    </div>

    <div class="w-[90%] xl:w-[1120px] mx-auto xl:p-20">
      <div class="w-full grid xl:grid-cols-2 gap-4">
        <!-- ==================col 1==================== -->
        <div>
          <div class="w-full h-[356px]">
            <img
              class="w-full h-full rounded-[24px] object-cover"
              :src="doctor"
              alt=""
            />
          </div>
          <div class="pt-5">
            <p
              class="font-Poppins text-[24px] font-[700] leading-[39.2px] tracking-[-2%] text-[#454747]"
            >
              John Macaulay <span>22</span>
            </p>
            <!-- ==============City======== -->
            <p
              class="text-[18px] text-[#454747] font-[300] leading-[27px] tracking-[-1.6%]"
            >
              London
            </p>
            <p
              class="text-[14px] leading-[21px] text-[#000000] tracking-[-0.6%] my-5"
            >
              Works as Marketing Manager
            </p>
          </div>

          <ul
            class="text-[16px] font-Poppins font-[400] leading-[24px] tracking-[-1.2%] text-[#7D0B2B] flex-wrap flex gap-[10px]"
          >
            <li class="p-[10px] rounded-[8px] bg-[#FEB1C766]">Drinking</li>
            <li class="p-[10px] rounded-[8px] bg-[#FEB1C766]">Dancing</li>
            <li class="p-[10px] rounded-[8px] bg-[#FEB1C766]">Local Culture</li>
            <li class="p-[10px] rounded-[8px] bg-[#FEB1C766]">Recreation</li>
            <li class="p-[10px] rounded-[8px] bg-[#FEB1C766]">Swimming</li>
            <li class="p-[10px] rounded-[8px] bg-[#FEB1C766]">Business</li>
          </ul>

          <div class="w-full py-5">
            <div class="grid grid-cols-3 gap-[20px]">
              <div>
                <img
                  class="w-full object-cover rounded-[24px]"
                  :src="doctor"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="w-full object-cover rounded-[24px]"
                  :src="doctor"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="w-full object-cover rounded-[24px]"
                  :src="doctor"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            class="w-[233.13px] justify-between flex gap-[35.25px] border-[#7D0B2B] p-[15.34px] rounded-[36.82px] bg-[#FED0DD] mt-[15px]"
          >
            <div><img :src="loveIcon" alt="" /></div>
            <div class="flex gap-2">
              <img :src="msgIcon" alt="" />
              <span
                class="text-[#320411] font-Poppins text-[16px] leading-[24px]"
                >message</span
              >
            </div>
          </div>
        </div>
        <div>
          <h1
            class="font-Poppins font-[700] text-[24px] leading-[33.3%] tracking-[-2%] text-[#54071D] mt-10 md:mt-0 mb-10"
          >
            Other People that match your interest
          </h1>

          <div class="grid xl:grid-cols-2 gap-[20px]">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
