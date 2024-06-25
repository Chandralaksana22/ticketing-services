<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BaliFarmGA from '~/components/BaliFarmGA.vue';
import ActivityBaliFarm from '~/components/ActivityBaliFarm.vue';
import { getVendorDetail, getPopularProduct, getProduct, getProductBaliSafari } from '~/utils/api';
const route = useRoute();
const slug = route.params.slug;
const vendorDetail = ref([]);
const explorerData = ref([]);
const explorerSPData = ref([]);
const explorerCPData = ref([]);
const explorerSTPData = ref([]);
const generalAdmissionData = ref([]);
const GABaliFarm = ref([]);
const BaliFarmData = ref([]);
const balisafari = ref([]);

const { data: balisafariData, error: balisafariError } = useAsyncData('balisafari', async () => {
    return await getProductBaliSafari();
});
if (balisafariData.value) {
    const filteredData = balisafariData.value.filter(item => item.type === 'General Admission');
    balisafari.value = filteredData;
}
const fetchVendorData = async () => {
    try {
        const vendorData = await getVendorDetail(slug);
        vendorDetail.value = vendorData;
    } catch (error) {
        console.error('Error fetching vendor detail:', error);
    }
};

const fetchPopularProducts = async () => {
    try {
        const popularProducts = await getPopularProduct(slug);
        explorerData.value = popularProducts;
    } catch (error) {
        console.error('Error fetching popular products:', error);
    }
};
const fetchFilteredPopularProductsSP = async () => {
    try {
        const popularProductsSP = await getProduct(slug);
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
        const popularProductsCP = await getProduct(slug);
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
        const popularProductsSTP = await getProduct(slug);
        const filteredProducts = popularProductsSTP.filter(product =>
            product.type === "What's On" && product.category === 'Stay Package'
        );
        explorerSTPData.value = filteredProducts;
    } catch (error) {
        console.error('Error fetching filtered popular products:', error);
    }
};


const fetchGeneralAdmissionData = async () => {
    try {
        const products = await getProduct(slug);
        const generalAdmissionProducts = products.filter(product => product.type === 'General Admission');
        generalAdmissionData.value = generalAdmissionProducts.length > 0 ? generalAdmissionProducts[0] : {};
    } catch (error) {
        console.error('Error fetching General Admission data:', error);
    }
};
const { data: baliGAFarm, error: balisafarmError } = useAsyncData('balifarmhouse', async () => {
    return await getProductBaliFarm();
});
if (baliGAFarm.value) {
    const filteredData = baliGAFarm.value.filter(item => item.type === 'General Admission');
    GABaliFarm.value = filteredData;
}
const { data: balifarm, error: balifarmerror } = useAsyncData('balifarmhouse', async () => {
    return await getProductBaliFarm();
});
if (balifarm.value) {
    const filteredData = balifarm.value.filter(item => item.type === "What's On");
    BaliFarmData.value = filteredData;
}

onMounted(() => {
    fetchVendorData();
    fetchGeneralAdmissionData();
    if (slug === 'bali-zoo') {
        fetchPopularProducts();
        fetchFilteredPopularProductsSP();
        fetchFilteredPopularProductsCP();
        fetchFilteredPopularProductsSTP();
    }
});
</script>
<template>
    <section class="bg-cover bg-white md:bg-[url('../assets/image/bg-desktop.png')]">
        <img :src="vendorDetail.images && vendorDetail.images.length > 0 ? vendorDetail.images[0].path : ''"
            :alt="vendorDetail.name" class="h-[100vh] object-cover w-full">
        <!-- <div class="hidden md:block px-5 pb-0 md:pb-44 md:px-10 container mx-auto">
            <div class="panel-transparent p-5 md:p-10 rounded-3xl mt-10 mb-[-20%] relative">
                <PanelInfo />
            </div>
        </div> -->
        <div class="mt-10" v-if="slug === 'bali-zoo'">
            <PopularActivities :explorerData="explorerData" :vendorSlug="slug" />
        </div>
        <div class="mt-10" v-if="slug === 'bali-farm-house'">
            <div id="placetogo" class="hidden md:block container mx-auto">
                <h4 class="boldfont text-white text-3xl text-center">General Admission</h4>
                <h4 class="text-white text-lg mb-5 text-center">(For Indonesian ID and Kitas holder)</h4>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 p-10 gap-4 ">
                    <BaliFarmGA :GABaliFarm="GABaliFarm" :vendorSlug="slug" />
                </div>
            </div>
        </div>
        <div class="mt-10" v-if="slug === 'bali-safari'">
            <div id="placetogo" class="hidden md:block container mx-auto">
                <h4 class="boldfont text-white text-3xl text-center">General Admission</h4>
                <div class="p-10  gap-4">
                    <BaliSafariTicket :balisafari="balisafari" />
                </div>
            </div>
            <h4 class="boldfont text-white text-3xl py-10 text-center">WHAT’S NEW ON BALI SAFARI</h4>
            <div class="px-10 relative z-10">
                <div
                    class="rounded-xl p-10 bg-cover bg-[url('../assets/image/bg-card.png')] grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
                    <div>
                        <img src="~assets/image/varunalogo.png" class="object-contain h-40 mb-20" alt="">
                        <h1 class="boldfont text-white text-3xl">Varuna Show</h1>
                        <p class="text-white text-md mt-10">Varuna’s stage bursts to life with vibrant performers,
                            adorned in marine-inspired attire, guiding you through the captivating odyssey of Varuna,
                            the young hero. The voyage unfolds with every dish, act, and moment, creating an immersive
                            narrative. </p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="gap-4 rounded-xl border-2 border-white backdrop-blur-sm bg-white/30 h-fit p-5">
                            <div class="flex justify-between items-center">
                                <h1 class="text-white font-semibold text-xl">PREMIUM PACKAGE</h1><a href=""
                                    class="p-2 boldfont text-xs bg-white text-black rounded-lg w-fit float-end">Book
                                    Ticket</a>
                            </div>
                            <p class="mt-5 text-sm text-white">Wine (red/white), 3-course lunch, preferential seating,
                                and VIP waiting lounge with free canape &amp; mocktail/cocktail</p>
                        </div>
                        <div class="gap-4 rounded-xl border-2 border-white backdrop-blur-sm bg-white/30 h-fit p-5">
                            <div class="flex justify-between items-center">
                                <h1 class="text-white font-semibold text-xl">PREMIUM PACKAGE</h1><a href=""
                                    class="p-2 boldfont text-xs bg-white text-black rounded-lg w-fit float-end">Book
                                    Ticket</a>
                            </div>
                            <p class="mt-5 text-sm text-white">Wine (red/white), 3-course lunch, preferential seating,
                                and VIP waiting lounge with free canape &amp; mocktail/cocktail</p>
                        </div>
                        <div class="gap-4 rounded-xl border-2 border-white backdrop-blur-sm bg-white/30 h-fit p-5">
                            <div class="flex justify-between items-center">
                                <h1 class="text-white font-semibold text-xl">PREMIUM PACKAGE</h1><a href=""
                                    class="p-2 boldfont text-xs bg-white text-black rounded-lg w-fit float-end">Book
                                    Ticket</a>
                            </div>
                            <p class="mt-5 text-sm text-white">Wine (red/white), 3-course lunch, preferential seating,
                                and VIP waiting lounge with free canape &amp; mocktail/cocktail</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="~assets/image/background-biru-desktop.png"
                class="h-[50vh] mt-[-15%] w-full object-cover hidden md:block"
                alt="~assets/image/background-biru-desktop.png">
        </div>
    </section>
    <section class="hidden md:block bg-cover bg-[url('../assets/image/background-biru-desktop.png')]">
        <div class="mt-10" v-if="slug === 'bali-zoo'">
            <h4 class="boldfont text-white text-3xl pt-[15%] mb-5 text-center">ALL PACKAGES, GET MORE PAY LESS</h4>
            <div class="p-10">
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
        </div>
        <div v-if="slug === 'bali-farm-house'">
            <div class="container mx-auto">
                <h4 class="boldfont text-white text-3xl pt-[5%] mb-5 text-center">OTHER ACTIVITY</h4>
                <div class="p-10 grid grid-cols-2 gap-4">
                    <ActivityBaliFarm :BaliFarmData="BaliFarmData" :vendorSlug="slug" />
                </div>
            </div>
        </div>
    </section>
    <section class="hidden md:block" v-if="slug === 'bali-zoo'">
        <div>
            <div class="grid grid-cols-1 md:grid-cols-12">
                <div class="col-span-5">
                    <GeneralAdmission :generalAdmissionData="generalAdmissionData" />
                </div>
                <div class="col-span-7 bg-cover bg-center bg-[url('../assets/image/bg-hijau.png')]">
                    <button type="button" class="bg-yellow p-3 boldfont text-xl rounded-b-xl"
                        style="position: relative; top:50%; transform-origin: top left; transform: rotate(-90deg) translateX(-50%);">
                        <h3 class="boldfont">MEMBERSHIP</h3>
                    </button>
                    <div class="flex flex-col items-center justify-center pt-10 mx-auto px-10 space-y-4">
                        <img class="object-contain h-[35vh]" src="../../assets/image/member1.png" alt="Member 1">
                        <img class="object-contain h-[35vh]" src="../../assets/image/member2.png" alt="Member 2">
                    </div>
                </div>
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