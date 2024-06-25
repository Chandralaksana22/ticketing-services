<template>
    <div>
        <div v-if="isDataValid">
            <section class="bg-white py-8 px-5 antialiased dark:bg-gray-900 md:py-16">
                <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div class="mt-32 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                        <div class="min-w-0 flex-1 space-y-8">
                            <div class="space-y-4">
                                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Confirmation Payment
                                </h2>
                                <form @submit.prevent="submitForm" class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label for="guestname"
                                            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Guest
                                            Name*</label>
                                        <input type="text" id="guestname" name="guestname" v-model="guestname"
                                            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            placeholder="Bonnie" required />
                                    </div>
                                    <div>
                                        <label for="firstname"
                                            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                            First Name*</label>
                                        <input type="text" id="firstname" name="firstname" v-model="firstname"
                                            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            placeholder="Green" required />
                                    </div>
                                    <div>
                                        <label for="lastname"
                                            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                            Last Name*</label>
                                        <input type="text" id="lastname" name="lastname" v-model="lastname"
                                            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            placeholder="Green" required />
                                    </div>


                                    <div>
                                        <div class="mb-2 flex items-center gap-2">
                                            <label for="select-country-input-3"
                                                class="block text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                        </div>
                                        <select id="select-country-input-3" name="country" v-model="country"
                                            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            @change="loadStates">
                                            <option disabled selected>Select a country</option>
                                            <option v-for="country in countries" :key="country.name"
                                                :value="country.name">
                                                {{ country.name }}
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <div class="mb-2 flex items-center gap-2">
                                            <label for="select-state-input-3"
                                                class="block text-sm font-medium text-gray-900 dark:text-white">State</label>
                                        </div>
                                        <select id="select-state-input-3" name="state" v-model="selectState"
                                            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            @change="loadCities">
                                            <option disabled selected>Select a state</option>
                                            <option v-for="state in states" :key="state.name" :value="state.name">
                                                {{ state.name }}
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <div class="mb-2 flex items-center gap-2">
                                            <label for="select-city-input-3"
                                                class="block text-sm font-medium text-gray-900 dark:text-white">City</label>
                                        </div>
                                        <select id="select-city-input-3" name="city" v-model="selectCity"
                                            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                            <option disabled selected>Select a city</option>
                                            <option v-for="city in cities" :key="city" :value="city">
                                                {{ city }}
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="phone-zip-3"
                                            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                            Zip Code</label>
                                        <input type="text" id="zip-input" name="zipcode" v-model="zipInput"
                                            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            placeholder="1234" />
                                    </div>
                                    <div>
                                        <label for="phone-input-3"
                                            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                            name="phone">Phone
                                            Number*</label>
                                        <input type="text" id="phone-input" v-model="phoneInput" name="phone"
                                            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            placeholder="123-456-7890" required />
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="email"
                                            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                            Email </label>
                                        <input type="email" id="email" name="email" v-model="email"
                                            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            placeholder="name@guirez.com" required />
                                    </div>
                                    <div class="flex items-start mb-5">
                                        <div class="flex items-center h-5">
                                            <input id="terms" type="checkbox" v-model="terms" true-value="on"
                                                false-value="off"
                                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                                required />
                                        </div>
                                        <label for="terms"
                                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree
                                            with the <a href="#"
                                                class="text-blue-600 hover:underline dark:text-blue-500">terms and
                                                conditions</a></label>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <button type="submit"
                                            class="bg-blue flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                                            Go to Payment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                            <div class="flow-root">
                                <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                                    <dl class="flex items-center justify-between gap-4 py-3">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Ticket</dt>
                                        <dd class="text-base font-medium text-gray-900 dark:text-white">
                                            {{ ticketData.selectedTicket.name }}</dd>
                                    </dl>

                                    <dl class="flex items-center justify-between gap-4 py-3">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Occupancy
                                        </dt>
                                        <dd class="text-base font-medium text-gray-500">{{ ticketData.adultsCount }}
                                            Adult,
                                            {{ ticketData.childrenCount }} Children, {{ ticketData.infantsCount }}</dd>
                                    </dl>

                                    <dl class="flex items-center justify-between gap-4 py-3">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Date</dt>
                                        <dd class="text-base font-medium text-gray-900 dark:text-white">
                                            {{ $dayjs(ticketData.selectedDate).format('dddd, MMMM DD, YYYY') }}
                                        </dd>
                                    </dl>
                                    <dl class="flex items-center justify-between gap-4 py-3">
                                        <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd class="text-base font-bold text-gray-900 dark:text-white">IDR {{
            calculateDiscountedPrice(ticketData.selectedTicket) }}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div v-else>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <h1
                            class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                            404</h1>
                        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                            Something's missing.</p>
                        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Data not available. Please
                            go back and select a ticket. </p>
                        <a @click="goBack"
                            class="inline-flex text-white bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useTicketStore } from '~/stores/ticket';
import { ref } from 'vue';
import axios from 'axios';

const countries = ref([]);
const states = ref([]);
const cities = ref([]);
const guestname = ref('');
const firstname = ref('');
const lastname = ref('');
const selectedCountry = ref('')
const selectCountry = ref('');
const selectState = ref('');
const selectCity = ref('');
const zipInput = ref('');
const phoneInput = ref('');
const email = ref('');
const terms = ref('');

const ticketStore = useTicketStore();
const ticketData = ticketStore.$state;

// Calculate total price
const calculateTotalPrice = (ticket) => {
    const totalPrice = (ticket.adult_price * ticketData.adultsCount) + (ticket.children_price * ticketData.childrenCount) + (ticket.infant_price * ticketData.infantsCount);
    return totalPrice;
};

// Calculate discounted price
const calculateDiscountedPrice = (ticket) => {
    const total = calculateTotalPrice(ticket);
    const discountedPrice = total * ((100 - ticket.discount_percentage) / 100);
    return discountedPrice;
};

// Check if the data is valid
const isDataValid = computed(() => {
    return ticketData.selectedTicket && ticketData.selectedTicket.id;
});

const router = useRouter();

// Function to go back to the previous page
const goBack = () => {
    router.go(-1); // Go back one step in history (equivalent to browser back button)
};

onMounted(async () => {
    try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/iso');
        countries.value = response.data.data;
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
});

const loadStates = async (event) => {
    const selectedIso2 = event.target.value;
    selectedCountry.value = selectedIso2; // Set selectedCountry

    try {
        const response = await axios.post('https://countriesnow.space/api/v0.1/countries/states', {
            country: selectedIso2
        });
        states.value = response.data.data.states;
        cities.value = []; // Reset cities when changing states
    } catch (error) {
        console.error('Error fetching states:', error);
    }
};

const loadCities = async (event) => {
    const selectedState = event.target.value;

    try {
        const response = await axios.post('https://countriesnow.space/api/v0.1/countries/state/cities', {
            country: selectedCountry.value, // Pass selectedCountry value
            state: selectedState
        });
        cities.value = response.data.data;
    } catch (error) {
        console.error('Error fetching cities:', error);
    }
};
const submitForm = async () => {
    const formData = {
        guestname: guestname.value,
        firstname: firstname.value,
        lastname: lastname.value,
        country: selectedCountry.value,
        state: selectState.value,
        city: selectCity.value,
        zipcode: zipInput.value,
        phone: phoneInput.value,
        email: email.value,
        terms: terms.value,
        adult: ticketData.adultsCount,
        children: ticketData.childrenCount,
        infant: ticketData.infantsCount,
        id: ticketData.selectedTicket.id,
        product_id: ticketData.selectedTicket.product_id,
        vendor_id: ticketData.selectedTicket.vendor_id,
        slug: ticketData.selectedTicket.slug,
        arrival: ticketData.selectedDate,
        adult_price: ticketData.selectedTicket.adult_price,
        children_price: ticketData.selectedTicket.children_price,
        infant_price: ticketData.selectedTicket.infant_price,
        total_adult_price: ticketData.selectedTicket.total_adult,
        total_children_price: ticketData.selectedTicket.total_children,
        total_infant_price: ticketData.selectedTicket.total_infant,
        total_price: calculateDiscountedPrice(ticketData.selectedTicket),
    };

    try {
        const response = await axios.post('https://balitiket.mindimedia.com/api/v1/send-form', formData, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTION",
                "Content-Type": "application/json"

            },
        });

        console.log('Form submission successful:', response.data);

    } catch (error) {
        console.error('Error submitting form:', error.message);
    }
};
</script>