<template>
    <div v-if="generalAdmissionData" class="relative">
        <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="image in generalAdmissionData.images" :key="image.id">
                <div class="relative">
                    <img :src="image.path" alt="" class="h-[100vh] w-full object-cover filter brightness-50">
                </div>
            </swiper-slide>
        </swiper>
        <div class="absolute z-10 top-[6rem] left-1/2 translate-x-[-50%] text-center w-full text-white">
            <h1 class="boldfont text-3xl">{{ generalAdmissionData.name }}</h1>
        </div>
        <div class="absolute z-10 bottom-[6rem] left-1/2 translate-x-[-50%] px-10 w-full text-white">
            <div class="mb-10">
                <h1 v-if="generalAdmissionData.inclusion" class="font-bold boldfont text-white">Inclusion :</h1>
                <p class="text-white">
                    {{ generalAdmissionData.inclusion ? generalAdmissionData.inclusion.map(item => item.item).join(', ')
        : '' }}
                </p>
                <h1 v-if="generalAdmissionData.facilities" class="font-bold boldfont text-white mt-5">Facilities :</h1>
                <p class="text-white">
                    {{ generalAdmissionData.facilities ? generalAdmissionData.facilities.map(facility =>
        facility.title).join(', ') : '' }}
                </p>
            </div>
            <div class="text-center">
                <NuxtLink v-if="generalAdmissionData.vendor"
                    :to="`/ticket-detail/${generalAdmissionData.vendor.slug}/${generalAdmissionData.slug}`"
                    class="px-2 py-3 bg-white text-black rounded-md slide boldfont">Book Ticket</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
const modules = ref([Navigation, Pagination]);
const props = defineProps({
    generalAdmissionData: {
        type: Object,
        required: true
    }
});



</script>

<style scoped></style>