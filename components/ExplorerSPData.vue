<template>
    <swiper :slidesPerView="1" :spaceBetween="10" :navigation="true" :breakpoints="{
        '640': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '768': {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        '1024': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }" :modules="modules" class="mySwiper container mx-auto">
        <swiper-slide v-for="product in products" :key="product.id">
            <div class="position rounded-lg overflow-hidden">
                <img class="filter brightness-50 rounded-lg h-[400px] w-full object-cover" :src="product.images[0].path"
                    alt="" />
                <div class="absolute top-[25%] left-1/2 -translate-x-1/2 text-center w-full px-4">
                    <h5 class="boldfont text-2xl text-yellow text-center">{{ product.name }}</h5>
                    <p class="text-md text-yellow">
                        Session :Morning <br />
                        Last check-in : 09.00
                    </p>
                    <p class="mt-5 font-bold text-white">
                        INCLUSION :
                    </p>
                    <p class="text-white">{{ product.inclusion ? product.inclusion.map(item => item.item).join(', ') : ''
                        }}</p>
                </div>
                <div class="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center w-full">
                    <NuxtLink :to="`/ticket-detail/${product.vendor.slug}/${product.slug}`"
                        class="bg-white rounded-lg p-2 slide boldfont text-center">Book Tiket</NuxtLink>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Pagination],
        };
    },
    props: {
        products: {
            type: Array,
            required: true
        }
    }
};
</script>