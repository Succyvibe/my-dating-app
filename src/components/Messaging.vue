<script setup>
import chevronLeft from "@/assets/icons/chevron-left.png";
import doctor from "@/assets/images/doctor.jpg";
import videoCall from "@/assets/icons/video-camera.png";
import voiceCall from "@/assets/icons/phone.png";
import messageIcon from "@/assets/icons/messageIcon.png";
import msgIcon from "@/assets/images/msgIcon.png";
import loveIcon from "@/assets/icons/heart.png";
import camera from "@/assets/icons/camera.png";
import share from "@/assets/icons/share.png";
</script>

<template>
  <section>
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
            <div><img class="w-[36.82px]" :src="loveIcon" alt="" /></div>
            <div class="flex gap-2">
              <img class="w-[33.76px] h-[33.61px]" :src="msgIcon" alt="" />
              <span
                class="text-[#320411] font-Poppins text-[16px] leading-[24px]"
                >message</span
              >
            </div>
          </div>
        </div>

        <!-- =======================Chat Col===================== -->
        <div class="bg-[#FED0DD2B] relative">
          <div class="flex gap-x-4 w-full absolute bottom-0 left-0">
            <div
              class="flex-1 flex bg-[#F2F2F2] items-center p-[10px] rounded-[8px] h-[44px]"
            >
              <div class="w-[24px] h-[24px]">
                <img :src="camera" alt="" class="w-full h-full object-cover" />
              </div>
              <textarea
                name=""
                id=""
                class="w-full bg-none flex-1 bg-transparent h-full"
              >
Type something</textarea
              >
            </div>

            <RouterLink
              to="/chat"
              type="link"
              class="w-[68px] h-[44px] bg-[#D11248] rounded-[16px] flex items-center justify-center"
            >
              <img :src="share" alt="" />
            </RouterLink>
          </div>
          <div
            class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            <div>
              <img :src="messageIcon" alt="" />
            </div>
            <div class="text-center">
              <p
                class="text-[24px] text-[#454747] leading-[33.6px] tracking-[-1.8%]"
              >
                Say Hello
              </p>
              <p class="text-[14px] leading-[21px] tracking-[0.6%]">
                Start the conversation first
              </p>
            </div>
          </div>
          <div class="px-[8px]">
            <div class="bg-white p-[8px] flex justify-between">
              <div class="flex items-center gap-3">
                <img class="w-[24px] h-[24px]" :src="chevronLeft" alt="" />
                <div class="w-[60px] h-[61.76px] rounded-full">
                  <img
                    class="w-full h-full object-cover rounded-full"
                    :src="doctor"
                    alt=""
                  />
                </div>
                <div>
                  <p
                    class="text-[12px] font-[700] leading-[18px] tracking-[-0.6%] text-[#767373]"
                  >
                    John Macualay 22
                  </p>
                  <p class="text-[12px] text-[#FB1656]">online now</p>
                </div>
              </div>
              <div class="flex items-center gap-6">
                <img :src="videoCall" alt="" />
                <img :src="voiceCall" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
