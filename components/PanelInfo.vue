<template>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <button data-modal-target="openinghour-modal" data-modal-toggle="openinghour-modal"
            class="flex flex-col lg:flex-row items-center text-center lg:text-left clock" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-[48px] lg:h-[65px]" viewBox="0 0 64 65" fill="none">
                <path
                    d="M32 6.5C26.8577 6.5 21.8309 8.02487 17.5552 10.8818C13.2795 13.7387 9.94702 17.7994 7.97914 22.5502C6.01127 27.3011 5.49638 32.5288 6.49959 37.5723C7.50281 42.6159 9.97907 47.2486 13.6152 50.8848C17.2514 54.5209 21.8842 56.9972 26.9277 58.0004C31.9712 59.0036 37.1989 58.4887 41.9498 56.5209C46.7007 54.553 50.7613 51.2205 53.6182 46.9448C56.4751 42.6691 58 37.6423 58 32.5C57.9927 25.6066 55.2511 18.9976 50.3767 14.1233C45.5024 9.24889 38.8934 6.50728 32 6.5ZM46 34.5H32C31.4696 34.5 30.9609 34.2893 30.5858 33.9142C30.2107 33.5391 30 33.0304 30 32.5V18.5C30 17.9696 30.2107 17.4609 30.5858 17.0858C30.9609 16.7107 31.4696 16.5 32 16.5C32.5304 16.5 33.0392 16.7107 33.4142 17.0858C33.7893 17.4609 34 17.9696 34 18.5V30.5H46C46.5304 30.5 47.0392 30.7107 47.4142 31.0858C47.7893 31.4609 48 31.9696 48 32.5C48 33.0304 47.7893 33.5391 47.4142 33.9142C47.0392 34.2893 46.5304 34.5 46 34.5Z"
                    fill="#BF9500" />
            </svg>
            <div>
                <p class="font-bold text-sm lg:text-lg">Opening Hour</p>
                <p class="text-sm hidden lg:block">Check all opening hour</p>
            </div>
        </button>
        <button data-modal-target="generaladmission-modal" data-modal-toggle="generaladmission-modal" class=" flex
              flex-col lg:flex-row items-center text-center lg:text-left ticket">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-[48px] lg:h-[65px]" viewBox="0 0 65 65" fill="none">
                <path
                    d="M57.1309 26.62C58.0344 26.4362 58.8467 25.9458 59.4302 25.232C60.0138 24.5181 60.3328 23.6245 60.3334 22.7025V16.5C60.3334 15.4391 59.9119 14.4217 59.1618 13.6716C58.4116 12.9214 57.3942 12.5 56.3334 12.5H8.33335C7.27249 12.5 6.25507 12.9214 5.50492 13.6716C4.75478 14.4217 4.33335 15.4391 4.33335 16.5V22.7025C4.33386 23.6245 4.65289 24.5181 5.23646 25.232C5.82004 25.9458 6.63232 26.4362 7.53585 26.62C8.88686 26.9002 10.1 27.6374 10.971 28.7075C11.842 29.7776 12.3175 31.1152 12.3175 32.495C12.3175 33.8748 11.842 35.2124 10.971 36.2825C10.1 37.3526 8.88686 38.0898 7.53585 38.37C6.63064 38.5542 5.81707 39.046 5.2333 39.7619C4.64953 40.4778 4.33155 41.3737 4.33335 42.2975V48.5C4.33335 49.5609 4.75478 50.5783 5.50492 51.3284C6.25507 52.0786 7.27249 52.5 8.33335 52.5H56.3334C57.3942 52.5 58.4116 52.0786 59.1618 51.3284C59.9119 50.5783 60.3334 49.5609 60.3334 48.5V42.2975C60.3328 41.3755 60.0138 40.4819 59.4302 39.768C58.8467 39.0542 58.0344 38.5638 57.1309 38.38C55.7798 38.0998 54.5667 37.3626 53.6957 36.2925C52.8247 35.2224 52.3492 33.8848 52.3492 32.505C52.3492 31.1252 52.8247 29.7876 53.6957 28.7175C54.5667 27.6474 55.7798 26.9102 57.1309 26.63V26.62ZM8.33335 42.3C10.5926 41.8398 12.6234 40.613 14.0819 38.8273C15.5405 37.0417 16.3372 34.8069 16.3372 32.5013C16.3372 30.1956 15.5405 27.9608 14.0819 26.1752C12.6234 24.3895 10.5926 23.1627 8.33335 22.7025V16.5H22.3334V48.5H8.33335V42.3Z"
                    fill="#BF9500" />
            </svg>
            <div>
                <p class="font-bold text-sm lg:text-lg">General Admission</p>
                <p class="text-sm hidden lg:block">Purchase a daily pass</p>
            </div>
        </button>
        <button data-modal-target="map-modal" data-modal-toggle="map-modal"
            class="flex flex-col lg:flex-row items-center text-center lg:text-left map">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-[48px] lg:h-[65px]" viewBox="0 0 64 65" fill="none">
                <path
                    d="M57.23 12.9225C56.9904 12.7359 56.7115 12.6062 56.4143 12.5434C56.1172 12.4806 55.8096 12.4863 55.515 12.56L40.2325 16.38L24.895 8.71003C24.4677 8.49688 23.9782 8.44368 23.515 8.56004L7.515 12.56C7.08232 12.6682 6.69821 12.9179 6.42371 13.2694C6.1492 13.6209 6.00007 14.054 6 14.5V50.5C6.00005 50.8039 6.06935 51.1038 6.20264 51.3769C6.33594 51.6501 6.52972 51.8892 6.76927 52.0762C7.00882 52.2632 7.28783 52.3932 7.58512 52.4562C7.88242 52.5193 8.19017 52.5137 8.485 52.44L23.7675 48.62L39.105 56.29C39.3834 56.4273 39.6896 56.4991 40 56.5C40.1635 56.4999 40.3264 56.4798 40.485 56.44L56.485 52.44C56.9177 52.3319 57.3018 52.0822 57.5763 51.7307C57.8508 51.3792 57.9999 50.946 58 50.5V14.5C58.0001 14.1958 57.9307 13.8957 57.7973 13.6223C57.6639 13.3489 57.4699 13.1096 57.23 12.9225ZM24 44.5C23.8365 44.5001 23.6736 44.5203 23.515 44.56L10 47.9375V16.0625L23.7675 12.62L24 12.735V44.5ZM54 48.9375L40.2325 52.38L40 52.265V20.5C40.1634 20.5008 40.3263 20.4814 40.485 20.4425L54 17.0625V48.9375Z"
                    fill="#BF9500" />
            </svg>
            <div>
                <p class="font-bold text-sm lg:text-lg">Zoo Map</p>
                <p class="text-sm hidden lg:block">Access all zoo maps</p>
            </div>
        </button>
        <div data-modal-target="wo-modal" data-modal-toggle="wo-modal"
            class="flex flex-col lg:flex-row items-center text-center lg:text-left wo">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                <path
                    d="M52 8.5H46V6.5C46 5.96957 45.7893 5.46086 45.4142 5.08579C45.0391 4.71071 44.5304 4.5 44 4.5C43.4696 4.5 42.9609 4.71071 42.5858 5.08579C42.2107 5.46086 42 5.96957 42 6.5V8.5H22V6.5C22 5.96957 21.7893 5.46086 21.4142 5.08579C21.0391 4.71071 20.5304 4.5 20 4.5C19.4696 4.5 18.9609 4.71071 18.5858 5.08579C18.2107 5.46086 18 5.96957 18 6.5V8.5H12C10.9391 8.5 9.92172 8.92143 9.17157 9.67157C8.42143 10.4217 8 11.4391 8 12.5V52.5C8 53.5609 8.42143 54.5783 9.17157 55.3284C9.92172 56.0786 10.9391 56.5 12 56.5H52C53.0609 56.5 54.0783 56.0786 54.8284 55.3284C55.5786 54.5783 56 53.5609 56 52.5V12.5C56 11.4391 55.5786 10.4217 54.8284 9.67157C54.0783 8.92143 53.0609 8.5 52 8.5ZM42.415 33.915L30.415 45.915C30.2293 46.101 30.0087 46.2485 29.7659 46.3491C29.5231 46.4498 29.2628 46.5016 29 46.5016C28.7372 46.5016 28.4769 46.4498 28.2341 46.3491C27.9913 46.2485 27.7707 46.101 27.585 45.915L21.585 39.915C21.2097 39.5397 20.9989 39.0307 20.9989 38.5C20.9989 37.9693 21.2097 37.4603 21.585 37.085C21.9603 36.7097 22.4693 36.4989 23 36.4989C23.5307 36.4989 24.0397 36.7097 24.415 37.085L29 41.6725L39.585 31.085C39.7708 30.8992 39.9914 30.7518 40.2342 30.6512C40.477 30.5506 40.7372 30.4989 41 30.4989C41.2628 30.4989 41.523 30.5506 41.7658 30.6512C42.0086 30.7518 42.2292 30.8992 42.415 31.085C42.6008 31.2708 42.7482 31.4914 42.8488 31.7342C42.9494 31.977 43.0011 32.2372 43.0011 32.5C43.0011 32.7628 42.9494 33.023 42.8488 33.2658C42.7482 33.5086 42.6008 33.7292 42.415 33.915ZM12 20.5V12.5H18V14.5C18 15.0304 18.2107 15.5391 18.5858 15.9142C18.9609 16.2893 19.4696 16.5 20 16.5C20.5304 16.5 21.0391 16.2893 21.4142 15.9142C21.7893 15.5391 22 15.0304 22 14.5V12.5H42V14.5C42 15.0304 42.2107 15.5391 42.5858 15.9142C42.9609 16.2893 43.4696 16.5 44 16.5C44.5304 16.5 45.0391 16.2893 45.4142 15.9142C45.7893 15.5391 46 15.0304 46 14.5V12.5H52V20.5H12Z"
                    fill="white" />
            </svg>
            <div>
                <p class="font-bold text-sm lg:text-lg">What's On</p>
                <p class="text-sm hidden lg:block">See all on-going events</p>
            </div>
        </div>
    </div>
    <ModalMaps />
    <ModalWhatsOn />
    <div id="openinghour-modal" data-modal-backdrop="openinghour" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue">
                        Opening Hour
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="openinghour-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div class="p-4 md:p-5 space-y-4">
                    <div class="mb-4">
                        <ul class="block lg:flex flex-wrap justify-center -mb-px text-sm font-medium text-center gap-4"
                            id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li v-for="vendor in vendors" :key="vendor.id">
                                <button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
                                    :data-tabs-target="'#' + vendor.slug" type="button" role="tab"
                                    :aria-controls="vendor.slug" :aria-selected="false"
                                    @click="activateTab(vendor.slug)">
                                    {{ vendor.name }}
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div v-for="vendor in vendors" :key="vendor.id" :id="vendor.slug"
                            class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel"
                            :aria-labelledby="vendor.slug">
                            <div>
                                <div class="grid grid-cols-2 gap-2 w-full lg:w-3/4" v-for="schedule in vendor.schedule"
                                    :key="schedule.day">
                                    <p class="font-bold">{{ schedule.day }}</p>
                                    <p>{{ schedule.start_time.slice(11, 16) }} - {{ schedule.end_time.slice(11, 16) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="generaladmission-modal" data-modal-backdrop="generaladmission" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto h-screen overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full  max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue">
                        General Admission
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="generaladmission-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div class="p-4 md:p-5 space-y-4">
                    <div class="mb-4 sticky top-0 bg-white">
                        <ul class="block lg:flex flex-wrap justify-center -mb-px text-sm font-medium text-center gap-4"
                            id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li v-for="vendor in vendors" :key="vendor.slug" :class="{ 'me-2': vendors.length > 1 }"
                                role="presentation">
                                <button @click="selectTab(vendor.slug)"
                                    :class="['inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg', { 'active': selectedTab === vendor.slug }]"
                                    :id="`${vendor.slug}-tab`" :data-tabs-target="`#${vendor.slug}`" type="button"
                                    role="tab" :aria-controls="vendor.slug"
                                    :aria-selected="selectedTab === vendor.slug">
                                    {{ vendor.name }}
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div v-for="vendor in vendors" :key="vendor.slug"
                            :class="['hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800', { 'block': selectedTab === vendor.slug }]"
                            :id="vendor.slug" role="tabpanel" :aria-labelledby="`${vendor.slug}-tab`">
                            <div
                                class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                                <div v-if="vendor.products && vendor.products.length > 0">
                                    <div v-for="product in vendor.products" :key="product.id">
                                        <div v-if="product.type === 'General Admission'">
                                            <a :href="product.link_url">
                                                <img class="rounded-t-lg" :src="product.images[0]?.disk_name"
                                                    :alt="product.name" />
                                            </a>
                                            <div class="p-2 text-center">
                                                <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">{{
                                product.name }}</h5>
                                                <a :href="product.link_url"
                                                    class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <p class="text-center text-gray-600">No products available.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import ModalGeneral from './Modal/GeneralAdmissionModal.vue'
import ModalMaps from './Modal/MapsModal.vue'
import ModalWhatsOn from './Modal/WhatsonModal.vue'
import ModalOpening from './Modal/OpeningHourModal.vue'
import { getPopularProduct } from '~/utils/api';
export default {
    props: {
        vendors: {
            type: Array,
            required: true,
        },
    },
    components: {
        ModalGeneral,
        ModalMaps,
        ModalWhatsOn,
        ModalOpening
    },
    data() {
        return {
            selectedTab: null,
        };
    },
    methods: {
        activateTab(slug) {
            this.activeTab = slug;
        },
        isActiveTab(slug) {
            return this.activeTab === slug;
        },
        formatTime(time) {
            return time;
        },
        selectTab(slug) {
            this.selectedTab = slug;
            this.loadPopularProducts(slug);
        },
        async loadPopularProducts(slug) {
            try {
                console.log(`Loading popular products for ${slug}...`);
                const products = await getPopularProduct(slug);
                console.log(`Received products for ${slug}:`, products);

                const vendorIndex = this.vendors.findIndex(vendor => vendor.slug === slug);
                if (vendorIndex !== -1) {
                    // Ensure reactivity by creating a new array
                    this.vendors = [
                        ...this.vendors.slice(0, vendorIndex),
                        { ...this.vendors[vendorIndex], products },
                        ...this.vendors.slice(vendorIndex + 1)
                    ];
                    console.log(`Updated vendors[${vendorIndex}] with products:`, this.vendors[vendorIndex]);
                }
            } catch (error) {
                console.error(`Error loading popular products for ${slug}:`, error);
            }
        },
    },
    mounted() {
        // Set the first tab as selected by default
        if (this.vendors.length > 0) {
            this.selectedTab = this.vendors[0].slug;
            this.loadPopularProducts(this.selectedTab);
        }
    },
};
</script>