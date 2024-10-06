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
  ht: {
    type: String,
    default: "block",
  },
});
</script>

<template>
  <button
    :class="`${bg} ${wd} ${ht} ${display} rounded-[16px] md:p-[10px] text-white font-[700] text-[10px] lg:text-[16px] leading-[24px] tracking-[-1.2%]`"
  >
    {{ title }}
  </button>
</template>
