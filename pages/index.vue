<script setup>
import { ref, onMounted } from 'vue';
import { useAsyncData } from '#app';
import { getVendors, getBaliBirdPopular, getBaliZooPopular, getBaliFarmPopular } from '~/utils/api';
import VendorHome from '~/components/HomeComponent/VendorHome.vue';
import MapsModal from '~/components/Modal/MapsModal.vue';
import WhatsonModal from '~/components/Modal/WhatsonModal.vue';
import GeneralAdmissionModal from '~/components/Modal/GeneralAdmissionModal.vue'
import OpeningHourModal from '@/components/Modal/OpeningHourModal.vue'
import BaliBirdExplore from '~/components/HomeComponent/BaliBirdExplore.vue';
import BaliZooExplore from '~/components/HomeComponent/BaliZooExplore.vue';
import BaliFarmExplore from '~/components/HomeComponent/BaliFarmExplore.vue';
import BaliSafariExplore from '~/components/HomeComponent/BaliSafariExplore.vue';

const vendors = ref([]);
const balibird = ref([]);
const explorer = ref([]);
const balifarm = ref([]);
const balisafari = ref([]);


const { data: vendorsData, error: vendorsError } = useAsyncData('vendors', async () => {
    return await getVendors();
});

if (vendors.value) {
    vendors.value = vendorsData.value || [];
}
const { data: explorerData, error: explorerError } = useAsyncData('explorer', async () => {
    return await getBaliZooPopular();
});

if (explorer.value) {
    explorer.value = explorerData.value || [];
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

<template>
    <section class="bg-cover bg-[url('../assets/image/bg-desktop.png')]">
        <div
            class="bg-center bg-cover h-[100] bg-no-repeat bg-[url('../assets/image/Homepage-mobile.png')] lg:bg-[url('../assets/image/bg-home.png')]">
            <div class="h-[100vh] px-5 lg:px-10 container mx-auto flex items-center">
                <h1
                    class="hidden lg:block mb-4 boldfont text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    EXPERIENCE <br> <span class="text-yellow">A CLOSER LOOK</span> TO <br>
                    BALI’S EXOTIC ANIMALS</h1>
                <h1
                    class="block lg:hidden mb-4 boldfont text-center mx-auto text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    EXPERIENCE <br> <span class="text-yellow">A CLOSER LOOK</span> <br> TO
                    BALI’S <br> EXOTIC ANIMALS</h1>
            </div>
        </div>
        <div class="px-5 pb-0 lg:pb-44 lg:px-10 container mx-auto">
            <div id="feature">
                <h5 class="text-center font-bold text-white text-2xl boldfont">Places To Go</h5>
                <div class="grid grid-cols-1 lg:grid-cols-12 py-5 gap-6">
                    <VendorHome :vendors="vendors" />
                </div>
            </div>
            <div>
                <div class="panel-home bg-[#FFD600] p-5 lg:p-10 rounded-3xl mt-10 lg:mt-44 mb-[-20%] relative">
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <OpeningHourModal :vendors="vendors" />
                        <GeneralAdmissionModal />
                        <MapsModal/>
                        <WhatsonModal/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-cover h-[25vh] lg:h-auto bg-[url('../assets/image/background-biru-desktop.png')]">
        <div class="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div class="col-span-7 pt-24">
                <h4 class="boldfont text-white text-3xl text-center">Explore Bali Zoo</h4>
                <div class="py-20 mx-auto px-10">
                    <BaliZooExplore :explorer="explorer" />
                </div>
            </div>
            <div class="col-span-5 bg-[url('../assets/image/plan.png')]">
                <div class="pt-24">
                    <h4 class="boldfont text-white text-3xl text-center"> A WELL SPENT DAY <br> at BALI BIRD PARK</h4>
                    <div class="py-20 px-10">
                        <BaliBirdExplore :balibird="balibird" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="hidden lg:grid grid-cols-1 lg:grid-cols-12">
            <div class="col-span-5">
                <BaliFarmExplore :balifarm="balifarm" />
            </div>
            <div class="col-span-7 bg-contain bg-[url('../assets/image/bg-hijau.png')]">
                <h4 class="boldfont pt-24  text-white text-3xl text-center">WILDLIFE ADVENTURE AT BALI SAFARI</h4>
                <div class="pt-10 mx-auto px-10">
                    <BaliSafariExplore :balisafari="balisafari" />
                </div>
            </div>
        </div>
    </section>
</template>