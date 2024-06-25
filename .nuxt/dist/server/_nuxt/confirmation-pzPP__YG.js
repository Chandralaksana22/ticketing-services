import { u as useRouter } from "../server.mjs";
import { ref, computed, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { u as useTicketStore } from "./ticket-6ijYPQ9O.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "axios";
import "flowbite";
const _sfc_main = {
  __name: "confirmation",
  __ssrInlineRender: true,
  setup(__props) {
    const countries = ref([]);
    const states = ref([]);
    const cities = ref([]);
    const guestname = ref("");
    const firstname = ref("");
    const lastname = ref("");
    ref("");
    ref("");
    ref("");
    ref("");
    const zipInput = ref("");
    const phoneInput = ref("");
    const email = ref("");
    const terms = ref("");
    const loading = ref(false);
    const showConfirmation = ref(false);
    const ticketStore = useTicketStore();
    const ticketData = ticketStore.$state;
    const calculateTotalPrice = (ticket) => {
      const totalPrice = ticket.adult_price * ticketData.adultsCount + ticket.children_price * ticketData.childrenCount + ticket.infant_price * ticketData.infantsCount;
      return totalPrice;
    };
    const calculateDiscountedPrice = (ticket) => {
      const total = calculateTotalPrice(ticket);
      const discountedPrice = total * ((100 - ticket.discount_percentage) / 100);
      return discountedPrice;
    };
    const isDataValid = computed(() => {
      return ticketData.selectedTicket && ticketData.selectedTicket.id;
    });
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (isDataValid.value) {
        _push(`<div><section class="bg-white py-8 px-5 antialiased dark:bg-gray-900 md:py-16"><div class="mx-auto max-w-screen-xl px-4 2xl:px-0"><div class="mt-32 lg:flex lg:items-start lg:gap-12 xl:gap-16"><div class="min-w-0 flex-1 space-y-8"><div class="space-y-4"><h2 class="text-xl font-semibold text-gray-900 dark:text-white">Confirmation Payment </h2><form class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div><label for="guestname" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Guest Name*</label><input type="text" id="guestname" name="guestname"${ssrRenderAttr("value", guestname.value)} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie" required></div><div><label for="firstname" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> First Name*</label><input type="text" id="firstname" name="firstname"${ssrRenderAttr("value", firstname.value)} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Green" required></div><div><label for="lastname" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Last Name*</label><input type="text" id="lastname" name="lastname"${ssrRenderAttr("value", lastname.value)} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Green" required></div><div><div class="mb-2 flex items-center gap-2"><label for="select-country-input-3" class="block text-sm font-medium text-gray-900 dark:text-white">Country</label></div><select id="select-country-input-3" name="country" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"><option disabled selected>Select a country</option><!--[-->`);
        ssrRenderList(countries.value, (country) => {
          _push(`<option${ssrRenderAttr("value", country.name)}>${ssrInterpolate(country.name)}</option>`);
        });
        _push(`<!--]--></select></div><div><div class="mb-2 flex items-center gap-2"><label for="select-state-input-3" class="block text-sm font-medium text-gray-900 dark:text-white">State</label></div><select id="select-state-input-3" name="state" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"><option disabled selected>Select a state</option><!--[-->`);
        ssrRenderList(states.value, (state) => {
          _push(`<option${ssrRenderAttr("value", state.name)}>${ssrInterpolate(state.name)}</option>`);
        });
        _push(`<!--]--></select></div><div><div class="mb-2 flex items-center gap-2"><label for="select-city-input-3" class="block text-sm font-medium text-gray-900 dark:text-white">City</label></div><select id="select-city-input-3" name="city" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"><option disabled selected>Select a city</option><!--[-->`);
        ssrRenderList(cities.value, (city) => {
          _push(`<option${ssrRenderAttr("value", city)}>${ssrInterpolate(city)}</option>`);
        });
        _push(`<!--]--></select></div><div><label for="phone-zip-3" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Zip Code</label><input type="text" id="zip-input" name="zipcode"${ssrRenderAttr("value", zipInput.value)} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="1234"></div><div><label for="phone-input-3" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white" name="phone">Phone Number*</label><input type="text" id="phone-input"${ssrRenderAttr("value", phoneInput.value)} name="phone" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="123-456-7890" required></div><div class="sm:col-span-2"><label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Email </label><input type="email" id="email" name="email"${ssrRenderAttr("value", email.value)} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@guirez.com" required></div><div class="flex items-start mb-5"><div class="flex items-center h-5"><input id="terms" type="checkbox"${ssrIncludeBooleanAttr(ssrLooseEqual(terms.value, "on")) ? " checked" : ""} class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required></div><label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label></div><div class="sm:col-span-2">`);
        if (showConfirmation.value) {
          _push(`<div class="confirmation-message mb-5"><button disabled type="button" class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-transparent rounded-lg border-none focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"><svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"></path></svg> You will be redirected to the payment page shortly... </button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (loading.value) {
          _push(`<div class="confirmation-message mb-5"><button disabled type="button" class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-transparent rounded-lg border-none focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"><svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"></path></svg> Loading... </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="submit" class="bg-blue flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"> Go to Payment </button></div></form></div></div><div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md"><div class="flow-root"><div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800"><dl class="flex items-center justify-between gap-4 py-3"><dt class="text-base font-normal text-gray-500 dark:text-gray-400">Ticket</dt><dd class="text-base font-medium text-gray-900 dark:text-white">${ssrInterpolate(unref(ticketData).selectedTicket.name)}</dd></dl><dl class="flex items-center justify-between gap-4 py-3"><dt class="text-base font-normal text-gray-500 dark:text-gray-400">Occupancy </dt><dd class="text-base font-medium text-gray-500">${ssrInterpolate(unref(ticketData).adultsCount)} Adult, ${ssrInterpolate(unref(ticketData).childrenCount)} Children, ${ssrInterpolate(unref(ticketData).infantsCount)}</dd></dl><dl class="flex items-center justify-between gap-4 py-3"><dt class="text-base font-normal text-gray-500 dark:text-gray-400">Date</dt><dd class="text-base font-medium text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$dayjs(unref(ticketData).selectedDate).format("dddd, MMMM DD, YYYY"))}</dd></dl><dl class="flex items-center justify-between gap-4 py-3"><dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt><dd class="text-base font-bold text-gray-900 dark:text-white">IDR ${ssrInterpolate(calculateDiscountedPrice(unref(ticketData).selectedTicket))}</dd></dl></div></div></div></div></div></section></div>`);
      } else {
        _push(`<div><section class="bg-white dark:bg-gray-900"><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"><div class="mx-auto max-w-screen-sm text-center"><h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"> 404</h1><p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white"> Something&#39;s missing.</p><p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Data not available. Please go back and select a ticket. </p><a class="inline-flex text-white bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back </a></div></div></section></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/confirmation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=confirmation-pzPP__YG.js.map
