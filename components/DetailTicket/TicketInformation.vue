<template>
    <div v-if="productDetail" class="hidden lg:block">
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center"
          data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-blue border-[#008AC6]"
          data-tabs-inactive-classes="text-gray-500 border-gray-100" role="tablist">
          <!-- Highlight Tab -->
          <li role="presentation">
            <button class="inline-block py-4 px-7 border-b-2 rounded-t-lg" id="highlight-styled-tab"
              data-tabs-target="#styled-highlight" type="button" role="tab" aria-controls="highlight"
              aria-selected="false">Highlight</button>
          </li>
          <!-- Inclusion Tab -->
          <li role="presentation">
            <button class="inline-block py-4 px-7 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="inclusion-styled-tab" data-tabs-target="#styled-inclusion" type="button" role="tab"
              aria-controls="inclusion" aria-selected="false">Inclusion</button>
          </li>
          <!-- Facilities Tab -->
          <li role="presentation">
            <button class="inline-block py-4 px-7 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="facilities-styled-tab" data-tabs-target="#styled-facilities" type="button" role="tab"
              aria-controls="facilities" aria-selected="false">Facilities</button>
          </li>
          <!-- Location Tab -->
          <li role="presentation">
            <button class="inline-block py-4 px-7 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="location-styled-tab" data-tabs-target="#styled-location" type="button" role="tab"
              aria-controls="location" aria-selected="false">Location</button>
          </li>
          <!-- Zoo Map Tab -->
          <li role="presentation">
            <button class="inline-block py-4 px-7 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="zoomap-styled-tab" data-tabs-target="#styled-zoomap" type="button" role="tab"
              aria-controls="zoomap" aria-selected="false">Zoo Map</button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        <!-- Highlight Content -->
        <div class="hidden p-4" id="styled-highlight" role="tabpanel" aria-labelledby="highlight-tab">
          <div v-html="productDetail.highlight"></div>
        </div>
        <!-- Inclusion Content -->
        <div class="hidden p-4" id="styled-inclusion" role="tabpanel" aria-labelledby="inclusion-tab">
          <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li v-for="(item, index) in productDetail.inclusion" :key="index"
              class="flex items-center space-x-3 rtl:space-x-reverse">
              <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
              <span>{{ item.item }}</span>
            </li>
          </ul>
        </div>
        <!-- Facilities Content -->
        <div class="hidden p-4" id="styled-facilities" role="tabpanel" aria-labelledby="facilities-tab">
          <div class="grid grid-cols-5 gap-4">
            <div v-for="facility in productDetail.facilities" :key="facility.id"
              class="flex flex-col items-center justify-center p-4">
              <img :src="facility.path" :alt="facility.title" class="w-8 h-8 mb-2">
              <p class="text-sm">{{ facility.title }}</p>
            </div>
          </div>
        </div>
        <!-- Location Content -->
        <div class="hidden p-4" id="styled-location" role="tabpanel" aria-labelledby="location-tab">
          <div class="flex mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 2C13.0836 2.00331 10.2877 3.1633 8.22548 5.22548C6.1633 7.28766 5.00331 10.0836 5 13C5 22.4125 15 29.5213 15.4263 29.8188C15.5944 29.9365 15.7947 29.9997 16 29.9997C16.2053 29.9997 16.4056 29.9365 16.5737 29.8188C17 29.5213 27 22.4125 27 13C26.9967 10.0836 25.8367 7.28766 23.7745 5.22548C21.7123 3.1633 18.9164 2.00331 16 2ZM16 9C16.7911 9 17.5645 9.2346 18.2223 9.67412C18.8801 10.1136 19.3928 10.7384 19.6955 11.4693C19.9983 12.2002 20.0775 13.0044 19.9231 13.7804C19.7688 14.5563 19.3878 15.269 18.8284 15.8284C18.269 16.3878 17.5563 16.7688 16.7804 16.9231C16.0044 17.0775 15.2002 16.9983 14.4693 16.6955C13.7384 16.3928 13.1136 15.8801 12.6741 15.2223C12.2346 14.5645 12 13.7911 12 13C12 11.9391 12.4214 10.9217 13.1716 10.1716C13.9217 9.42143 14.9391 9 16 9Z"
                fill="#161616"></path>
            </svg>
            <p class="ms-2">{{ productDetail.address }}</p>
          </div>
          <a :href="productDetail.link_address"
            class="py-2 px-5 bg-blue-500 text-white font-semibold rounded-lg">Open In Maps</a>
        </div>
        <!-- Zoo Map Content -->
        <div class="hidden p-4" id="styled-zoomap" role="tabpanel" aria-labelledby="zoomap-tab">
          <img :src="productDetail.map[0].path" class="h-1/4 object-contain" alt="Map Image">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, watch, nextTick } from 'vue';
  import { defineProps } from 'vue';
  import { initTabs } from 'flowbite';
  
  const props = defineProps({
    productDetail: {
      type: Object,
      required: true,
    },
  });
  
  onMounted(() => {
    if (props.productDetail) {
      nextTick(() => {
        initTabs();
      });
    }
  });
  
  watch(() => props.productDetail, async (newVal) => {
    if (newVal) {
      await nextTick();
      initTabs(); 
    }
  });
  </script>

<style scoped>
/* Gaya tambahan jika diperlukan */
</style>
