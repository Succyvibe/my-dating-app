<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import ButtonComponent from "./Button.vue";

import logo from "@/assets/icons/logo.png";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="bg-[#fafafa] h-[60px] lg:h-[90px] relative">
    <div
      class="h-full container px-4 mx-auto flex justify-between items-center"
    >
      <!-- ===================NAV MENU======== -->
      <div class="md:flex md:gap-x-20">
        <!-- ====logo==== -->
        <RouterLink to="/"
          ><img class="w-[100px] lg:w-[211.57px]" :src="logo" alt=""
        /></RouterLink>

        <!-- =======================NAV LINKS============ -->
        <ul
          class="hidden md:flex items-center gap-4 text-[10px] lg:text-[14px] xl:text-[22px] font-[500] leading-6"
        >
          <a href="">About</a>
          <!-- <li><RouterLink href="/about">About</RouterLink></li> -->
          <li><a href="">Find Love</a></li>
          <li><a href="">Love & Be Loved</a></li>
          <li><a href="">Our Couples</a></li>
          <li><a href="">Contacts</a></li>
        </ul>
      </div>

      <!-- =================Button======= -->
      <div>
        <ButtonComponent
          padding="p-5"
          link="/matches"
          type="link"
          display="none"
        />
      </div>
      <button
        @click="toggleMenu"
        value="hamburger"
        class="md:hidden flex flex-col justify-around h-8 w-8 p-1 rounded hover:bg-gray-400 absolute top-4 right-4 text-white"
      >
        <!-- Hamburger Icon (3 lines) -->
        <span class="h-0.5 rounded bg-gray-600 w-full"></span>
        <span class="h-0.5 rounded bg-gray-600 w-full"></span>
        <span class="h-0.5 rounded bg-gray-600 w-full"></span>
      </button>

      <ul
        v-if="isMenuOpen"
        class="md:hidden hamburger absolute top-0 left-0 w-full h-[100vh] bg-green-600 text-white flex flex-col items-center justify-center gap-y-10 text-[16px] font-normal leading-6"
      >
        <li><a href="#">About</a></li>
        <li><a href="">Find Love</a></li>
        <li><a href="">Love & Be Loved</a></li>
        <li><a href="">Our Couples</a></li>
        <li><a href="">Contacts</a></li>

        <button
          @click="toggleMenu"
          value="hamburger"
          class="flex flex-col justify-around h-8 w-8 p-1 rounded hover:bg-gray-400 absolute top-4 right-4 text-white"
        >
          <!-- Hamburger Icon (3 lines) -->
          <span class="h-0.5 rounded bg-gray-600 w-full"></span>
          <span class="h-0.5 rounded bg-gray-600 w-full"></span>
          <span class="h-0.5 rounded bg-gray-600 w-full"></span>
        </button>
      </ul>
    </div>
  </nav>
</template>
