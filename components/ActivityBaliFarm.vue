<template>
    <div v-for="(item, index) in BaliFarmData" :key="index" class="relative">
        <img :src="item.images[0]?.path" :alt="item.name" class="h-[20rem] w-full object-cover filter brightness-50">
        <div class="absolute inset-0 flex flex-col justify-center px-10 text-white">
            <h1 class="boldfont text-yellow mb-3 text-xl">{{ item.name }}</h1>
            <p class="mb-5" v-html="item.highlight"></p>
            <NuxtLink :to="`/ticket-detail/${vendorSlug}/${item.slug}`"
                class="px-2 py-3 bg-white text-black rounded-md slide boldfont w-fit">Book Ticket</NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    BaliFarmData: {
        type: Array,
        required: true
    },
    vendorSlug: {
        type: String,
        required: true
    }
});
</script>