<script setup>
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutFixed from "./components/LayoutFixed.vue";

// 获取导航
import { useCategoryStore } from '@/stores/category'
import { onMounted } from "vue";

const categoryStore = useCategoryStore()

onMounted (() => categoryStore.getCategory())
</script>

<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <RouterView />
  <LayoutFooter></LayoutFooter>
</template>

<style>

</style>