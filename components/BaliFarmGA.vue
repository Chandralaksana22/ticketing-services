<template>
  <div v-for="(item, index) in GABaliFarm" :key="index" class="relative img-border card overflow-hidden zoom-on-hover">
    <img class="filter brightness-50 w-full h-[400px] object-cover" :src="item.images[0]?.path" :alt="item.name">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 text-center w-100 text-white">
      <h5 class="boldfont text-xl text-white text-center">{{ item.name }}</h5>
    </div>
    <div class="absolute bottom-[5%] left-1/2 z-50 -translate-x-1/2 text-center w-100 text-white">
      <NuxtLink :to="`/ticket-detail/${vendorSlug}/${item.slug}`"
        class="p-2 text-lg bg-white rounded-lg text-black slide boldfont text-center">
        See Details
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  GABaliFarm: {
    type: Array,
    required: true
  },
  vendorSlug: {
    type: String,
    required: true
  }
});
</script>