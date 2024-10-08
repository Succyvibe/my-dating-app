<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "Find Match",
  },

  bg: {
    type: String,
    default: "bg-[#FB1656]",
  },

  wd: {
    type: String,
    default: "w-[152px]",
  },

  ht: {
    type: String,
    default: "h-[56px]",
  },
  display: {
    type: String,
    default: "flex",
  },
  padding: {
    type: String,
    default: "p-[10px]",
  },

  type: {
    type: String,
    default: "btn",
  },

  link: {
    type: String,
    default: "#",
  },
});
</script>

<template>
  <button
    v-if="type.includes('btn')"
    :class="`${bg} ${wd} ${ht} ${display} flex justify-center items-center rounded-[16px] md:${padding}   text-white font-[700] text-[10px] lg:text-[16px] leading-[24px] tracking-[-1.2%]`"
  >
    {{ title }}
  </button>

  <RouterLink
    v-else
    :to="link"
    :class="`${bg} ${wd} ${display} rounded-[16px] md:${padding} items-center justify-center text-white font-[700] text-[10px] lg:text-[16px] leading-[24px] tracking-[-1.2%] p-3`"
  >
    {{ title }}
  </RouterLink>
</template>
