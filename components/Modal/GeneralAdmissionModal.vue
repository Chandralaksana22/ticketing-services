<template>
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
    <div id="generaladmission-modal" data-modal-backdrop="generaladmission" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto h-screen overflow-x-hidden fixed top-0 right-0 left-0 z-[99] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
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
                            <li class="me-2" role="presentation">
                                <button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
                                    id="balizooGA-tab" data-tabs-target="#balizooGA" type="button" role="tab"
                                    aria-controls="balizooGA" aria-selected="false">Bali Zoo</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliBirdParkGA-tab" data-tabs-target="#BaliBirdParkGA" type="button" role="tab"
                                    aria-controls="BaliBirdParkGA" aria-selected="false">Bali Bird Park</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliFarmHouseGA-tab" data-tabs-target="#BaliFarmHouseGA" type="button"
                                    role="tab" aria-controls="BaliFarmHouseGA" aria-selected="false">Bali Farm
                                    House</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliSafariGA-tab" data-tabs-target="#BaliSafariGA" type="button" role="tab"
                                    aria-controls="BaliSafariGA" aria-selected="false">Bali Safari</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="balizooGA" role="tabpanel"
                            aria-labelledby="balizooGA-tab">
                            <div
                                class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                                <div v-for="product in explorerGA" :key="product.id">
                                    <a :href="product.link_address">
                                        <img class="rounded-none h-[25vh] object-cover w-full object-top"
                                            :src="product.images[0].path" :alt="product.name" />
                                    </a>
                                    <div class="p-2 text-center">
                                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">{{
                                    product.name
                                }}</h5>
                                        <NuxtLink v-if="product.vendor"
                                            :to="`/ticket-detail/${product.vendor.slug}/${product.slug}`"
                                            class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliBirdParkGA"
                            role="tabpanel" aria-labelledby="BaliBirdParkGA-tab">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                                <div>
                                    <a href="#">
                                        <img class="rounded-t-lg" src="../../assets/image/image-13.png" alt="" />
                                    </a>
                                    <div class="p-2 text-center">
                                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">
                                            Bali Zoo General Admission Ticket</h5>
                                        <a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See
                                            Details</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliFarmHouseGA"
                            role="tabpanel" aria-labelledby="BaliFarmHouseGA-tab">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                                <div>
                                    <a href="#">
                                        <img class="rounded-t-lg" src="../../assets/image/image-13.png" alt="" />
                                    </a>
                                    <div class="p-2 text-center">
                                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">
                                            Bali Zoo General Admission Ticket</h5>
                                        <a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See
                                            Details</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliSafariGA" role="tabpanel"
                            aria-labelledby="BaliSafariGA-tab">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                                <div>
                                    <a href="#">
                                        <img class="rounded-t-lg" src="../../assets/image/image-13.png" alt="" />
                                    </a>
                                    <div class="p-2 text-center">
                                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">
                                            Bali Zoo General Admission Ticket</h5>
                                        <a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See
                                            Details</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getVendors, getBaliBirdPopular, getBaliZooPopularGA, getBaliFarmPopular } from '~/utils/api';
const vendors = ref([]);
const balibird = ref([]);
const explorerGA = ref([]);
const balifarm = ref([]);
const balisafari = ref([]);
const { data: vendorsData, error: vendorsError } = useAsyncData('vendors', async () => {
    return await getVendors();
});

if (vendors.value) {
    vendors.value = vendorsData.value || [];
}
const { data: explorerGAData, error: explorerGAError } = useAsyncData('explorerGA', async () => {
    const data = await getBaliZooPopular();
    return data.filter(product => product.type === 'general admission');
});

if (explorerGAData.value) {
    explorerGA.value = explorerGAData.value;
}
const { data: balibirdData, error: balibirdError } = useAsyncData('balibird', async () => {
    return await getBaliBirdPopular();
});

if (balibird.value) {
    balibird.value = balibirdData.value || [];
}
const { data: balifarmData, error: balifarmError } = useAsyncData('balifarm', async () => {
    return await getBaliFarmPopular();
});

if (balifarm.value) {
    balifarm.value = balifarmData.value || [];
}
const { data: balisafariData, error: balisafariError } = useAsyncData('balisafari', async () => {
    return await getBaliSafariPopular();
});

if (balisafari.value) {
    balisafari.value = balisafariData.value || [];
}

</script>