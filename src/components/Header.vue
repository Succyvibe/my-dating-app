<script setup></script>

<template>
  <header class="h-[40px] md:h-[60px] lg:h-[80px] bg-[#fb1656]">
    <div
      class="container mx-auto flex justify-between items-center h-full px-4"
    >
      <p
        class="text-white font-bold text-[10px] md:text-xs xl:text-[20px] leading-[18px] tracking-[.6%]"
      >
        +(234)7016947260
      </p>

      <ul class="flex gap-4 items-center">
        <li>
          <a href="#">
            <img src="../assets/icons/youtubeIcon.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/icons/instagramIcon.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/icons/facebook-icon.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
@media screen and (max-width: 640px) {
  img {
    width: 15px;
  }
}
</style>
