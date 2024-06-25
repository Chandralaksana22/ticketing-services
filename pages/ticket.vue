<script setup>
import { ref, onMounted } from 'vue';
import TicketCard from '@/components/TicketCard.vue';
import BaliSafariTicket from '~/components/BaliSafariTicket.vue';
import ExplorerSPData from '~/components/ExplorerSPData.vue';
import BaliSafariEvent from '~/components/BaliSafariEvent.vue';
import { getProductBaliZoo, getProductBaliSafari } from '~/utils/api';

const vendors = ref([]);
const explorerSPData = ref([]);
const explorerCPData = ref([]);
const explorerSTPData = ref([]);
const balisafari = ref([]);
const balisafarievent = ref([]);

const { data, pending, error } = await useAsyncData('vendors', getVendors);
if (data.value) {
    vendors.value = data.value;
}

const { data: balisafariData, error: balisafariError } = useAsyncData('balisafari', async () => {
    return await getProductBaliSafari();
});
if (balisafariData.value) {
    const filteredData = balisafariData.value.filter(item => item.type === 'General Admission');
    balisafari.value = filteredData;
}

const { data: balisafarieventData, error: balisafarieventError } = useAsyncData('balisafari', async () => {
    return await getProductBaliSafari();
});
if (balisafarieventData.value) {
    const filteredData = balisafarieventData.value.filter(item => item.type === "What's On");
    balisafarievent.value = filteredData;
}

const fetchFilteredPopularProductsSP = async () => {
    try {
        const popularProductsSP = await getProductBaliZoo();
        const filteredProducts = popularProductsSP.filter(product =>
            product.type === "What's On" && product.category === 'Single Package'
        );
        explorerSPData.value = filteredProducts;
    } catch (error) {
        console.error('Error fetching filtered popular products:', error);
    }
};
const fetchFilteredPopularProductsCP = async () => {
    try {
        const popularProductsCP = await getProductBaliZoo();
        const filteredProducts = popularProductsCP.filter(product =>
            product.type === "What's On" && product.category === 'Combo Package'
        );
        explorerCPData.value = filteredProducts;
    } catch (error) {
        console.error('Error fetching filtered popular products:', error);
    }
};
const fetchFilteredPopularProductsSTP = async () => {
    try {
        const popularProductsSTP = await getProductBaliZoo();
        const filteredProducts = popularProductsSTP.filter(product =>
            product.type === "What's On" && product.category === 'Stay Package'
        );
        explorerSTPData.value = filteredProducts;
    } catch (error) {
        console.error('Error fetching filtered popular products:', error);
    }
};

onMounted(() => {
    fetchFilteredPopularProductsSP();
    fetchFilteredPopularProductsCP();
    fetchFilteredPopularProductsSTP();
});
</script>
<template>
    <section class="hidden lg:block bg-white lg:bg-[url('../assets/image/bg-desktop.png')]">
        <div class="relative w-full">
            <img src="../assets/image/heroticket.png" alt="Hero Ticket" class="w-full h-full object-cover">
            <div class="absolute inset-0 flex items-center justify-center">
                <h1
                    class="boldfont text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">
                    Tickets
                </h1>
            </div>
        </div>
        <div id="placetogo" class="hidden lg:block container mx-auto">
            <h4 class="boldfont text-white text-3xl mb-5 mt-10 text-center">General Admission</h4>
            <div class="grid grid-cols-4 p-10 gap-4 ">
                <div v-for="vendor in vendors" :key="vendor.slug"
                    class="relative img-border card overflow-hidden zoom-on-hover">
                    <img class="filter brightness-50 h-[400px] object-cover"
                        :src="vendor.images.length > 0 ? vendor.images[1].path : 'https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg'"
                        :alt="vendor.name">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 text-center w-100 text-white">
                        <h5 class="boldfont text-xl text-white text-center"> {{ vendor.name }}</h5>
                    </div>
                    <div class="absolute bottom-[5%] left-1/2 z-50 -translate-x-1/2 text-center w-100 text-white">
                        <NuxtLink :to="`/vendor/${vendor.slug}`"
                            class="p-2 text-lg bg-white rounded-lg text-black slide boldfont text-center">
                            See Details</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <h4 class="hidden lg:block boldfont text-white text-3xl pt-5 mb-5 text-center">MORE PACKAGES FROM BALI ZOO</h4>
        <div class="relative z-50 p-10 mb-[-10%] container mx-auto">
            <div class="mb-4">
                <ul class="flex flex-wrap -mb-px text-sm font-medium mx-auto justify-center text-center"
                    id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" role="tablist">
                    <li class="me-2" role="presentation">
                        <button class="inline-block package boldfont rounded-lg p-4" id="profile-styled-tab"
                            data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile"
                            aria-selected="false">SINGLE PACKAGE</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button class="inline-block package boldfont rounded-lg p-4" id="dashboard-styled-tab"
                            data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard"
                            aria-selected="false">COMBO PACKAGE</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button class="inline-block package boldfont rounded-lg p-4" id="settings-styled-tab"
                            data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings"
                            aria-selected="false">STAY PACKAGE</button>
                    </li>
                </ul>
            </div>
            <div id="default-styled-tab-content">
                <div class="hidden h-[400px]" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                    <ExplorerSPData :products="explorerSPData" />
                </div>
                <div class="hidden h-[400px]" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <ExplorerSPData :products="explorerCPData" />
                </div>
                <div class="hidden h-[400px]" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
                    <ExplorerSPData :products="explorerSTPData" />
                </div>
            </div>
        </div>
    </section>
    <section class="hidden lg:block bg-cover bg-white lg:bg-[url('../assets/image/background-biru-desktop.png')]">
        <div id="placetogo" class="pt-[15%] container mx-auto">
            <h4 class="boldfont text-white text-3xl mb-5 text-center">MORE OFFER FROM BALI SAFARI</h4>
            <div class="p-10 mb-[-10%] gap-4">
                <BaliSafariTicket :balisafari="balisafari" />
            </div>
        </div>
    </section>
    <section class="hidden lg:block bg-cover bg-white lg:bg-[url('../assets/image/bg-hijau.png')]">
        <div id="placetogo" class="pt-[15%] container mx-auto">
            <h4 class="boldfont text-white text-3xl mb-5 text-center">NEW EVENT FROM BALI SAFARI</h4>
            <div class="p-10 gap-4">
               <BaliSafariEvent :balisafarievent="balisafarievent" />
            </div>
        </div>
    </section>
    <section class="block lg:hidden bg-white">
        <div class="flex justify-between p-5 items-center">
            <a>
                <img class="h-[48px] object-contain" src="../assets/image/logomob.png" alt="">
            </a>
            <div class="grid grid-cols-2 gap-4">
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z"
                            fill="#008AC6" />
                    </svg>
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M20.8256 5.51906C20.7552 5.43481 20.6672 5.36705 20.5677 5.32056C20.4683 5.27407 20.3598 5.24998 20.25 5.25H5.12625L4.66781 2.73187C4.60502 2.38625 4.42292 2.07363 4.15325 1.84851C3.88359 1.62339 3.54347 1.50005 3.19219 1.5H1.5C1.30109 1.5 1.11032 1.57902 0.96967 1.71967C0.829018 1.86032 0.75 2.05109 0.75 2.25C0.75 2.44891 0.829018 2.63968 0.96967 2.78033C1.11032 2.92098 1.30109 3 1.5 3H3.1875L5.58375 16.1522C5.65434 16.5422 5.82671 16.9067 6.08344 17.2087C5.72911 17.5397 5.47336 17.9623 5.34455 18.4298C5.21575 18.8972 5.21892 19.3912 5.35371 19.8569C5.48851 20.3226 5.74966 20.7419 6.10821 21.0683C6.46676 21.3947 6.9087 21.6154 7.38502 21.7059C7.86134 21.7965 8.35344 21.7533 8.80673 21.5813C9.26003 21.4092 9.65682 21.115 9.9531 20.7312C10.2494 20.3474 10.4336 19.889 10.4853 19.407C10.537 18.9249 10.4541 18.4379 10.2459 18H14.5041C14.3363 18.3513 14.2495 18.7357 14.25 19.125C14.25 19.6442 14.404 20.1517 14.6924 20.5834C14.9808 21.0151 15.3908 21.3515 15.8705 21.5502C16.3501 21.7489 16.8779 21.8008 17.3871 21.6996C17.8963 21.5983 18.364 21.3483 18.7312 20.9812C19.0983 20.614 19.3483 20.1463 19.4496 19.6371C19.5508 19.1279 19.4989 18.6001 19.3002 18.1205C19.1015 17.6408 18.7651 17.2308 18.3334 16.9424C17.9017 16.654 17.3942 16.5 16.875 16.5H7.79719C7.62155 16.5 7.45149 16.4383 7.31665 16.3257C7.18182 16.2132 7.09077 16.0569 7.05938 15.8841L6.76219 14.25H17.6372C18.1641 14.2499 18.6743 14.0649 19.0788 13.7272C19.4833 13.3896 19.7564 12.9206 19.8506 12.4022L20.9906 6.13406C21.0099 6.02572 21.0051 5.91447 20.9766 5.80818C20.9481 5.7019 20.8966 5.60319 20.8256 5.51906ZM9 19.125C9 19.3475 8.93402 19.565 8.8104 19.75C8.68679 19.935 8.51109 20.0792 8.30552 20.1644C8.09995 20.2495 7.87375 20.2718 7.65552 20.2284C7.43729 20.185 7.23684 20.0778 7.0795 19.9205C6.92217 19.7632 6.81502 19.5627 6.77162 19.3445C6.72821 19.1262 6.75049 18.9 6.83564 18.6945C6.92078 18.4889 7.06498 18.3132 7.24998 18.1896C7.43499 18.066 7.6525 18 7.875 18C8.17337 18 8.45952 18.1185 8.6705 18.3295C8.88147 18.5405 9 18.8266 9 19.125ZM18 19.125C18 19.3475 17.934 19.565 17.8104 19.75C17.6868 19.935 17.5111 20.0792 17.3055 20.1644C17.1 20.2495 16.8738 20.2718 16.6555 20.2284C16.4373 20.185 16.2368 20.0778 16.0795 19.9205C15.9222 19.7632 15.815 19.5627 15.7716 19.3445C15.7282 19.1262 15.7505 18.9 15.8356 18.6945C15.9208 18.4889 16.065 18.3132 16.25 18.1896C16.435 18.066 16.6525 18 16.875 18C17.1734 18 17.4595 18.1185 17.6705 18.3295C17.8815 18.5405 18 18.8266 18 19.125ZM18.375 12.1341C18.3435 12.3074 18.2521 12.464 18.1166 12.5766C17.9812 12.6893 17.8105 12.7506 17.6344 12.75H6.48938L5.39906 6.75H19.3509L18.375 12.1341Z"
                            fill="#008AC6" />
                    </svg>
                </a>
            </div>
        </div>
        <div class="sticky top-0 p-5 bg-white">
            <form>
                <label for="search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="search"
                        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Try search “Bali Zoo”" required />
                </div>
            </form>
        </div>
        <div>
            <div v-for="(ticket, index) in tickets" :key="index">
                <TicketCard :imageSrc="ticket.imageSrc" :imageAlt="ticket.imageAlt" :buttonText="ticket.buttonText"
                    :sellingTicketText="ticket.sellingTicketText" :bookedText="ticket.bookedText"
                    :generalAdmissionText="ticket.generalAdmissionText" :title="ticket.title"
                    :oldPrice="ticket.oldPrice" :newPrice="ticket.newPrice" />
            </div>
        </div>
    </section>
</template>

<style>
.swiper-pagination-bullet-active {
    background: white !important;
    width: 25px !important;
    border-radius: 5px !important;
}

.swiper-button-prev,
.swiper-button-next {
    color: #fff !important;
    height: 35px !important;
    width: 35px !important;
    background-color: rgba(0, 0, 0, 0.50) !important;
    border-radius: 100% !important;
    padding: 2% !important;
}

.swiper-button-prev:after,
.swiper-button-next:after {
    font-size: 14px !important;
}

button.package[aria-selected="false"] {
    background-color: #0887BE;
    color: #FFD600;
}

button.package[aria-selected="true"] {
    background-color: #FFD600;
    color: #0887BE;
}
</style>