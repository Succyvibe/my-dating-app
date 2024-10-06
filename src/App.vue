<script setup>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";

import { RouterView } from "vue-router";
</script>

<template>
  <Header />
  <Navbar />
  <RouterView />
</template>
