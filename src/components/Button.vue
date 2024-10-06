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
    default: "block",
  },
  padding: {
    type: String,
    default: "p-[10px]",
  },
});
</script>

<template>
  <button
    :class="`${bg} ${wd} ${ht} ${display} rounded-[16px] md:${padding} text-white font-[700] text-[10px] lg:text-[16px] leading-[24px] tracking-[-1.2%]`"
  >
    {{ title }}
  </button>
</template>
