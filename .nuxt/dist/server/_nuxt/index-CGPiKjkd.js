import { _ as _export_sfc, a as __nuxt_component_0, b as useAsyncData, g as getVendors, c as getBaliZooPopular, d as getBaliBirdPopular, e as getBaliFarmPopular, f as getBaliSafariPopular } from "../server.mjs";
import { ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { withCtx, createVNode, toDisplayString, useSSRContext, ref, unref, createTextVNode, resolveComponent, openBlock, createBlock, Fragment, renderList, mergeProps, createCommentVNode } from "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import { Swiper, SwiperSlide } from "swiper/vue";
/* empty css                    */
import { Navigation, Pagination } from "swiper/modules";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "@vue/devtools-api";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "axios";
import "flowbite";
const _sfc_main$9 = {
  props: {
    vendors: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<!--[-->`);
  ssrRenderList($props.vendors, (vendor, index) => {
    _push(`<div class="${ssrRenderClass([index % 4 === 0 || index % 4 === 3 ? "col-span-12 lg:col-span-7" : "col-span-12 lg:col-span-5", "feature-port"])}">`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/vendor/${vendor.slug}`,
      class: "vendor-port h-[13rem] lg:h-[25rem] img-border"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", vendor.images.length > 0 ? vendor.images[1].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg")}${ssrRenderAttr("alt", vendor.name)}${_scopeId}><div class="cover"${_scopeId}><div class="detail px-10 text-white"${_scopeId}><h3 class="text-2xl boldfont text-white mb-10"${_scopeId}>${ssrInterpolate(vendor.name)}</h3><div class="text-lg line-clamp-3"${_scopeId}>${vendor.short_desc ?? ""}</div></div></div>`);
        } else {
          return [
            createVNode("img", {
              src: vendor.images.length > 0 ? vendor.images[1].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg",
              alt: vendor.name
            }, null, 8, ["src", "alt"]),
            createVNode("div", { class: "cover" }, [
              createVNode("div", { class: "detail px-10 text-white" }, [
                createVNode("h3", { class: "text-2xl boldfont text-white mb-10" }, toDisplayString(vendor.name), 1),
                createVNode("div", {
                  class: "text-lg line-clamp-3",
                  innerHTML: vendor.short_desc
                }, null, 8, ["innerHTML"])
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeComponent/VendorHome.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const VendorHome = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0$1 = "" + __buildAssetsURL("maps.B9BR_n8w.jpeg");
const _imports_0 = "" + __buildAssetsURL("image-13.Dl4S915i.png");
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><button data-modal-target="map-modal" data-modal-toggle="map-modal" class="flex flex-col lg:flex-row items-center text-center lg:text-left map"><svg xmlns="http://www.w3.org/2000/svg" class="h-[48px] lg:h-[65px]" viewBox="0 0 64 65" fill="none"><path d="M57.23 12.9225C56.9904 12.7359 56.7115 12.6062 56.4143 12.5434C56.1172 12.4806 55.8096 12.4863 55.515 12.56L40.2325 16.38L24.895 8.71003C24.4677 8.49688 23.9782 8.44368 23.515 8.56004L7.515 12.56C7.08232 12.6682 6.69821 12.9179 6.42371 13.2694C6.1492 13.6209 6.00007 14.054 6 14.5V50.5C6.00005 50.8039 6.06935 51.1038 6.20264 51.3769C6.33594 51.6501 6.52972 51.8892 6.76927 52.0762C7.00882 52.2632 7.28783 52.3932 7.58512 52.4562C7.88242 52.5193 8.19017 52.5137 8.485 52.44L23.7675 48.62L39.105 56.29C39.3834 56.4273 39.6896 56.4991 40 56.5C40.1635 56.4999 40.3264 56.4798 40.485 56.44L56.485 52.44C56.9177 52.3319 57.3018 52.0822 57.5763 51.7307C57.8508 51.3792 57.9999 50.946 58 50.5V14.5C58.0001 14.1958 57.9307 13.8957 57.7973 13.6223C57.6639 13.3489 57.4699 13.1096 57.23 12.9225ZM24 44.5C23.8365 44.5001 23.6736 44.5203 23.515 44.56L10 47.9375V16.0625L23.7675 12.62L24 12.735V44.5ZM54 48.9375L40.2325 52.38L40 52.265V20.5C40.1634 20.5008 40.3263 20.4814 40.485 20.4425L54 17.0625V48.9375Z" fill="#BF9500"></path></svg><div><p class="font-bold text-sm lg:text-lg">Zoo Map</p><p class="text-sm hidden lg:block">Access all zoo maps</p></div></button><div id="map-modal" data-modal-backdrop="map" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[99] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"><div class="relative p-4 w-full max-h-full"><div class="relative bg-white rounded-lg shadow dark:bg-gray-700"><div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"><h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue"> Zoo Maps </h3><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="map-modal"><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">Close modal</span></button></div><div class="p-4 md:p-5 space-y-4"><div class="mb-4"><ul class="block lg:flex flex-wrap justify-center -mb-px text-sm font-medium text-center gap-4" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist"><li class="me-2" role="presentation"><button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg" id="balizooMap-tab" data-tabs-target="#balizooMap" type="button" role="tab" aria-controls="balizooMap" aria-selected="false">Bali Zoo</button></li><li class="me-2" role="presentation"><button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="BaliBirdParkGA-tab" data-tabs-target="#BaliBirdParkGA" type="button" role="tab" aria-controls="BaliBirdParkGA" aria-selected="false">Bali Bird Park</button></li><li class="me-2" role="presentation"><button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="BaliFarmHouseGA-tab" data-tabs-target="#BaliFarmHouseGA" type="button" role="tab" aria-controls="BaliFarmHouseGA" aria-selected="false">Bali Farm House</button></li><li class="me-2" role="presentation"><button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="BaliSafariGA-tab" data-tabs-target="#BaliSafariGA" type="button" role="tab" aria-controls="BaliSafariGA" aria-selected="false">Bali Safari</button></li></ul></div><div id="default-tab-content"><div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="balizooMap" role="tabpanel" aria-labelledby="balizooMap-tab"><div class="mx-auto text-center"><img class="rounded-t-lg mx-auto h-[25rem] object-contain"${ssrRenderAttr("src", _imports_0$1)} alt=""><a href="" class="bg-yellow p-2 mt-5 text-black rounded-lg text-sm">Download zoo map</a></div></div><div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliBirdParkGA" role="tabpanel" aria-labelledby="BaliBirdParkGA-tab"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5></div></div></div></div><div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliFarmHouseGA" role="tabpanel" aria-labelledby="BaliFarmHouseGA-tab"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div></div></div><div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliSafariGA" role="tabpanel" aria-labelledby="BaliSafariGA-tab"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div></div></div></div></div></div></div></div><!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/MapsModal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const MapsModal = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div data-modal-target="wo-modal" data-modal-toggle="wo-modal" class="flex flex-col lg:flex-row items-center text-center lg:text-left wo"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none"><path d="M52 8.5H46V6.5C46 5.96957 45.7893 5.46086 45.4142 5.08579C45.0391 4.71071 44.5304 4.5 44 4.5C43.4696 4.5 42.9609 4.71071 42.5858 5.08579C42.2107 5.46086 42 5.96957 42 6.5V8.5H22V6.5C22 5.96957 21.7893 5.46086 21.4142 5.08579C21.0391 4.71071 20.5304 4.5 20 4.5C19.4696 4.5 18.9609 4.71071 18.5858 5.08579C18.2107 5.46086 18 5.96957 18 6.5V8.5H12C10.9391 8.5 9.92172 8.92143 9.17157 9.67157C8.42143 10.4217 8 11.4391 8 12.5V52.5C8 53.5609 8.42143 54.5783 9.17157 55.3284C9.92172 56.0786 10.9391 56.5 12 56.5H52C53.0609 56.5 54.0783 56.0786 54.8284 55.3284C55.5786 54.5783 56 53.5609 56 52.5V12.5C56 11.4391 55.5786 10.4217 54.8284 9.67157C54.0783 8.92143 53.0609 8.5 52 8.5ZM42.415 33.915L30.415 45.915C30.2293 46.101 30.0087 46.2485 29.7659 46.3491C29.5231 46.4498 29.2628 46.5016 29 46.5016C28.7372 46.5016 28.4769 46.4498 28.2341 46.3491C27.9913 46.2485 27.7707 46.101 27.585 45.915L21.585 39.915C21.2097 39.5397 20.9989 39.0307 20.9989 38.5C20.9989 37.9693 21.2097 37.4603 21.585 37.085C21.9603 36.7097 22.4693 36.4989 23 36.4989C23.5307 36.4989 24.0397 36.7097 24.415 37.085L29 41.6725L39.585 31.085C39.7708 30.8992 39.9914 30.7518 40.2342 30.6512C40.477 30.5506 40.7372 30.4989 41 30.4989C41.2628 30.4989 41.523 30.5506 41.7658 30.6512C42.0086 30.7518 42.2292 30.8992 42.415 31.085C42.6008 31.2708 42.7482 31.4914 42.8488 31.7342C42.9494 31.977 43.0011 32.2372 43.0011 32.5C43.0011 32.7628 42.9494 33.023 42.8488 33.2658C42.7482 33.5086 42.6008 33.7292 42.415 33.915ZM12 20.5V12.5H18V14.5C18 15.0304 18.2107 15.5391 18.5858 15.9142C18.9609 16.2893 19.4696 16.5 20 16.5C20.5304 16.5 21.0391 16.2893 21.4142 15.9142C21.7893 15.5391 22 15.0304 22 14.5V12.5H42V14.5C42 15.0304 42.2107 15.5391 42.5858 15.9142C42.9609 16.2893 43.4696 16.5 44 16.5C44.5304 16.5 45.0391 16.2893 45.4142 15.9142C45.7893 15.5391 46 15.0304 46 14.5V12.5H52V20.5H12Z" fill="white"></path></svg><div><p class="font-bold text-sm lg:text-lg">What&#39;s On</p><p class="text-sm hidden lg:block">See all on-going events</p></div></div><div id="wo-modal" data-modal-backdrop="wo" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"><div class="relative p-4 w-full max-h-full"><div class="relative bg-white rounded-lg shadow dark:bg-gray-700"><div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"><h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue"> What&#39;s On </h3><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="wo-modal"><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">Close modal</span></button></div><div class="p-4 md:p-5 space-y-4"><div class="mb-4"><ul class="block lg:flex flex-wrap justify-center -mb-px text-sm font-medium text-center gap-4" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist"><li class="me-2" role="presentation"><button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg" id="balizooWo-tab" data-tabs-target="#balizooWo" type="button" role="tab" aria-controls="balizooWo" aria-selected="false">Bali Zoo</button></li><li class="me-2" role="presentation"><button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="BaliBirdParkWo-tab" data-tabs-target="#BaliBirdParkWo" type="button" role="tab" aria-controls="BaliBirdParkWo" aria-selected="false">Bali Bird Park</button></li><li class="me-2" role="presentation"><button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="BaliFarmHouseWo-tab" data-tabs-target="#BaliFarmHouseWo" type="button" role="tab" aria-controls="BaliFarmHouseWo" aria-selected="false">Bali Farm House</button></li><li class="me-2" role="presentation"><button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="BaliSafariWo-tab" data-tabs-target="#BaliSafariWo" type="button" role="tab" aria-controls="BaliSafariWo" aria-selected="false">Bali Safari</button></li></ul></div><div id="default-tab-content"><div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="balizooWo" role="tabpanel" aria-labelledby="balizooWo-tab"><div class="overflow-y-auto h-[50vh]"><h1 class="text-blue boldfont my-5">Single Package</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div></div><h1 class="text-blue boldfont my-5">Combo Package</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div></div></div></div><div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliBirdParkWo" role="tabpanel" aria-labelledby="BaliBirdParkWo-tab"><div class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div></div></div><div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliFarmHouseWo" role="tabpanel" aria-labelledby="BaliFarmHouseWo-tab"><div class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div></div></div><div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliSafariWo" role="tabpanel" aria-labelledby="BaliSafariWo-tab"><div class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div></div></div></div></div></div></div></div><!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/WhatsonModal.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const WhatsonModal = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {
  __name: "GeneralAdmissionModal",
  __ssrInlineRender: true,
  setup(__props) {
    const vendors = ref([]);
    const balibird = ref([]);
    const explorerGA = ref([]);
    const balifarm = ref([]);
    const balisafari = ref([]);
    const { data: vendorsData, error: vendorsError } = useAsyncData("vendors", async () => {
      return await getVendors();
    });
    if (vendors.value) {
      vendors.value = vendorsData.value || [];
    }
    const { data: explorerGAData, error: explorerGAError } = useAsyncData("explorerGA", async () => {
      const data = await getBaliZooPopular();
      return data.filter((product) => product.type === "general admission");
    });
    if (explorerGAData.value) {
      explorerGA.value = explorerGAData.value;
    }
    const { data: balibirdData, error: balibirdError } = useAsyncData("balibird", async () => {
      return await getBaliBirdPopular();
    });
    if (balibird.value) {
      balibird.value = balibirdData.value || [];
    }
    const { data: balifarmData, error: balifarmError } = useAsyncData("balifarm", async () => {
      return await getBaliFarmPopular();
    });
    if (balifarm.value) {
      balifarm.value = balifarmData.value || [];
    }
    const { data: balisafariData, error: balisafariError } = useAsyncData("balisafari", async () => {
      return await getBaliSafariPopular();
    });
    if (balisafari.value) {
      balisafari.value = balisafariData.value || [];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><button data-modal-target="generaladmission-modal" data-modal-toggle="generaladmission-modal" class="flex flex-col lg:flex-row items-center text-center lg:text-left ticket"><svg xmlns="http://www.w3.org/2000/svg" class="h-[48px] lg:h-[65px]" viewBox="0 0 65 65" fill="none"><path d="M57.1309 26.62C58.0344 26.4362 58.8467 25.9458 59.4302 25.232C60.0138 24.5181 60.3328 23.6245 60.3334 22.7025V16.5C60.3334 15.4391 59.9119 14.4217 59.1618 13.6716C58.4116 12.9214 57.3942 12.5 56.3334 12.5H8.33335C7.27249 12.5 6.25507 12.9214 5.50492 13.6716C4.75478 14.4217 4.33335 15.4391 4.33335 16.5V22.7025C4.33386 23.6245 4.65289 24.5181 5.23646 25.232C5.82004 25.9458 6.63232 26.4362 7.53585 26.62C8.88686 26.9002 10.1 27.6374 10.971 28.7075C11.842 29.7776 12.3175 31.1152 12.3175 32.495C12.3175 33.8748 11.842 35.2124 10.971 36.2825C10.1 37.3526 8.88686 38.0898 7.53585 38.37C6.63064 38.5542 5.81707 39.046 5.2333 39.7619C4.64953 40.4778 4.33155 41.3737 4.33335 42.2975V48.5C4.33335 49.5609 4.75478 50.5783 5.50492 51.3284C6.25507 52.0786 7.27249 52.5 8.33335 52.5H56.3334C57.3942 52.5 58.4116 52.0786 59.1618 51.3284C59.9119 50.5783 60.3334 49.5609 60.3334 48.5V42.2975C60.3328 41.3755 60.0138 40.4819 59.4302 39.768C58.8467 39.0542 58.0344 38.5638 57.1309 38.38C55.7798 38.0998 54.5667 37.3626 53.6957 36.2925C52.8247 35.2224 52.3492 33.8848 52.3492 32.505C52.3492 31.1252 52.8247 29.7876 53.6957 28.7175C54.5667 27.6474 55.7798 26.9102 57.1309 26.63V26.62ZM8.33335 42.3C10.5926 41.8398 12.6234 40.613 14.0819 38.8273C15.5405 37.0417 16.3372 34.8069 16.3372 32.5013C16.3372 30.1956 15.5405 27.9608 14.0819 26.1752C12.6234 24.3895 10.5926 23.1627 8.33335 22.7025V16.5H22.3334V48.5H8.33335V42.3Z" fill="#BF9500"></path></svg><div><p class="font-bold text-sm lg:text-lg">General Admission</p><p class="text-sm hidden lg:block">Purchase a daily pass</p></div></button><div id="generaladmission-modal" data-modal-backdrop="generaladmission" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto h-screen overflow-x-hidden fixed top-0 right-0 left-0 z-[99] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"><div class="relative p-4 w-full max-h-full"><div class="relative bg-white rounded-lg shadow dark:bg-gray-700"><div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"><h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue"> General Admission </h3><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="generaladmission-modal"><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">Close modal</span></button></div><div class="p-4 md:p-5 space-y-4"><div class="mb-4 sticky top-0 bg-white"><ul class="block lg:flex flex-wrap justify-center -mb-px text-sm font-medium text-center gap-4" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist"><li class="me-2" role="presentation"><button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg" id="balizooGA-tab" data-tabs-target="#balizooGA" type="button" role="tab" aria-controls="balizooGA" aria-selected="false">Bali Zoo</button></li><li class="me-2" role="presentation"><button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="BaliBirdParkGA-tab" data-tabs-target="#BaliBirdParkGA" type="button" role="tab" aria-controls="BaliBirdParkGA" aria-selected="false">Bali Bird Park</button></li><li class="me-2" role="presentation"><button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="BaliFarmHouseGA-tab" data-tabs-target="#BaliFarmHouseGA" type="button" role="tab" aria-controls="BaliFarmHouseGA" aria-selected="false">Bali Farm House</button></li><li class="me-2" role="presentation"><button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="BaliSafariGA-tab" data-tabs-target="#BaliSafariGA" type="button" role="tab" aria-controls="BaliSafariGA" aria-selected="false">Bali Safari</button></li></ul></div><div id="default-tab-content"><div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="balizooGA" role="tabpanel" aria-labelledby="balizooGA-tab"><div class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"><!--[-->`);
      ssrRenderList(unref(explorerGA), (product) => {
        _push(`<div><a${ssrRenderAttr("href", product.link_address)}><img class="rounded-none h-[25vh] object-cover w-full object-top"${ssrRenderAttr("src", product.images[0].path)}${ssrRenderAttr("alt", product.name)}></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">${ssrInterpolate(product.name)}</h5>`);
        if (product.vendor) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/ticket-detail/${product.vendor.slug}/${product.slug}`,
            class: "bg-yellow p-2 text-black rounded-lg text-sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`See Details`);
              } else {
                return [
                  createTextVNode("See Details")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div><div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliBirdParkGA" role="tabpanel" aria-labelledby="BaliBirdParkGA-tab"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div></div></div><div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliFarmHouseGA" role="tabpanel" aria-labelledby="BaliFarmHouseGA-tab"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div></div></div><div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliSafariGA" role="tabpanel" aria-labelledby="BaliSafariGA-tab"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"><div><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="p-2 text-center"><h5 class="mb-2 text-md font-bold tracking-tight text-gray-900"> Bali Zoo General Admission Ticket</h5><a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a></div></div></div></div></div></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/GeneralAdmissionModal.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "OpeningHourModal",
  __ssrInlineRender: true,
  props: {
    vendors: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f3e8e974><button data-modal-target="openinghour-modal" data-modal-toggle="openinghour-modal" class="flex flex-col lg:flex-row items-center text-center lg:text-left clock" type="button" data-v-f3e8e974><svg xmlns="http://www.w3.org/2000/svg" class="h-[48px] lg:h-[65px]" viewBox="0 0 64 65" fill="none" data-v-f3e8e974><path d="M32 6.5C26.8577 6.5 21.8309 8.02487 17.5552 10.8818C13.2795 13.7387 9.94702 17.7994 7.97914 22.5502C6.01127 27.3011 5.49638 32.5288 6.49959 37.5723C7.50281 42.6159 9.97907 47.2486 13.6152 50.8848C17.2514 54.5209 21.8842 56.9972 26.9277 58.0004C31.9712 59.0036 37.1989 58.4887 41.9498 56.5209C46.7007 54.553 50.7613 51.2205 53.6182 46.9448C56.4751 42.6691 58 37.6423 58 32.5C57.9927 25.6066 55.2511 18.9976 50.3767 14.1233C45.5024 9.24889 38.8934 6.50728 32 6.5ZM46 34.5H32C31.4696 34.5 30.9609 34.2893 30.5858 33.9142C30.2107 33.5391 30 33.0304 30 32.5V18.5C30 17.9696 30.2107 17.4609 30.5858 17.0858C30.9609 16.7107 31.4696 16.5 32 16.5C32.5304 16.5 33.0392 16.7107 33.4142 17.0858C33.7893 17.4609 34 17.9696 34 18.5V30.5H46C46.5304 30.5 47.0392 30.7107 47.4142 31.0858C47.7893 31.4609 48 31.9696 48 32.5C48 33.0304 47.7893 33.5391 47.4142 33.9142C47.0392 34.2893 46.5304 34.5 46 34.5Z" fill="#BF9500" data-v-f3e8e974></path></svg><div data-v-f3e8e974><p class="font-bold text-sm lg:text-lg" data-v-f3e8e974>Opening Hour</p><p class="text-sm hidden lg:block" data-v-f3e8e974>Check all opening hour</p></div></button><div id="openinghour-modal" data-modal-backdrop="openinghour" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" data-v-f3e8e974><div class="relative p-4 w-full max-w-2xl max-h-full" data-v-f3e8e974><div class="relative bg-white rounded-lg shadow dark:bg-gray-700" data-v-f3e8e974><div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600" data-v-f3e8e974><h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue" data-v-f3e8e974> Opening Hour </h3><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="openinghour-modal" data-v-f3e8e974><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-f3e8e974><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-f3e8e974></path></svg><span class="sr-only" data-v-f3e8e974>Close modal</span></button></div><div class="p-4 md:p-5 space-y-4" data-v-f3e8e974><div class="mb-4" data-v-f3e8e974><ul class="block lg:flex flex-wrap justify-center -mb-px text-sm font-medium text-center gap-4" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist" data-v-f3e8e974><!--[-->`);
      ssrRenderList(__props.vendors, (vendor) => {
        _push(`<li data-v-f3e8e974><button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"${ssrRenderAttr("data-tabs-target", "#" + vendor.slug)} type="button" role="tab"${ssrRenderAttr("aria-controls", vendor.slug)}${ssrRenderAttr("aria-selected", false)} data-v-f3e8e974>${ssrInterpolate(vendor.name)}</button></li>`);
      });
      _push(`<!--]--></ul></div><div id="default-tab-content" data-v-f3e8e974><!--[-->`);
      ssrRenderList(__props.vendors, (vendor) => {
        _push(`<div${ssrRenderAttr("id", vendor.slug)} class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel"${ssrRenderAttr("aria-labelledby", vendor.slug)} data-v-f3e8e974><div data-v-f3e8e974><!--[-->`);
        ssrRenderList(vendor.schedule, (schedule) => {
          _push(`<div class="grid grid-cols-2 gap-2 w-full lg:w-3/4" data-v-f3e8e974><p class="font-bold" data-v-f3e8e974>${ssrInterpolate(schedule.day)}</p><p data-v-f3e8e974>${ssrInterpolate(schedule.start_time.slice(11, 16))} - ${ssrInterpolate(schedule.end_time.slice(11, 16))}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/OpeningHourModal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const OpeningHourModal = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f3e8e974"]]);
const _sfc_main$4 = {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    balibird: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
      modules: [Navigation, Pagination]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-7f99445a>`);
  _push(ssrRenderComponent(_component_swiper, {
    navigation: true,
    modules: $setup.modules,
    class: "mySwiper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.balibird, (item, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="relative" data-v-7f99445a${_scopeId2}><img${ssrRenderAttr("src", item.images.length > 0 ? item.images[0].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg")}${ssrRenderAttr("alt", item.name)} class="h-[50vh] w-full object-cover filter brightness-50 rounded-[20px]" data-v-7f99445a${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative" }, [
                    createVNode("img", {
                      src: item.images.length > 0 ? item.images[0].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg",
                      alt: item.name,
                      class: "h-[50vh] w-full object-cover filter brightness-50 rounded-[20px]"
                    }, null, 8, ["src", "alt"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.balibird, (item, index) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
              default: withCtx(() => [
                createVNode("div", { class: "relative" }, [
                  createVNode("img", {
                    src: item.images.length > 0 ? item.images[0].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg",
                    alt: item.name,
                    class: "h-[50vh] w-full object-cover filter brightness-50 rounded-[20px]"
                  }, null, 8, ["src", "alt"])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="text-center mx-auto mt-5" data-v-7f99445a><p class="mb-5 text-white" data-v-7f99445a>Pesky Parakeet Feeding</p>`);
  if ($props.balibird.length > 0) {
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/ticket-detail/${$props.balibird[0].vendor.slug}/${$props.balibird[0].slug}`,
      class: "px-2 py-3 bg-white text-black rounded-md slide boldfont"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Book Ticket`);
        } else {
          return [
            createTextVNode("Book Ticket")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeComponent/BaliBirdExplore.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BaliBirdExplore = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-7f99445a"]]);
const _sfc_main$3 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation, Pagination]
    };
  },
  props: {
    explorer: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(ssrRenderComponent(_component_swiper, mergeProps({
    navigation: true,
    pagination: true,
    modules: $setup.modules,
    class: "mySwiper"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.explorer, (item, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="relative"${_scopeId2}><img${ssrRenderAttr("src", item.images.length > 0 ? item.images[0].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg")}${ssrRenderAttr("alt", item.name)} class="h-[60vh] w-full object-cover filter brightness-50 rounded-[20px]"${_scopeId2}><div class="px-5 absolute bottom-[5%] text-white"${_scopeId2}><h1 class="boldfont text-yellow mb-3 text-xl"${_scopeId2}>${ssrInterpolate(item.name)}</h1><div class="mb-5 line-clamp-3"${_scopeId2}>${item.description ?? ""}</div><a href="#" class="px-2 py-3 bg-white text-black rounded-md slide boldfont"${_scopeId2}>Book Ticket</a></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative" }, [
                    createVNode("img", {
                      src: item.images.length > 0 ? item.images[0].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg",
                      alt: item.name,
                      class: "h-[60vh] w-full object-cover filter brightness-50 rounded-[20px]"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "px-5 absolute bottom-[5%] text-white" }, [
                      createVNode("h1", { class: "boldfont text-yellow mb-3 text-xl" }, toDisplayString(item.name), 1),
                      createVNode("div", {
                        class: "mb-5 line-clamp-3",
                        innerHTML: item.description
                      }, null, 8, ["innerHTML"]),
                      createVNode("a", {
                        href: "#",
                        class: "px-2 py-3 bg-white text-black rounded-md slide boldfont"
                      }, "Book Ticket")
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.explorer, (item, index) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
              default: withCtx(() => [
                createVNode("div", { class: "relative" }, [
                  createVNode("img", {
                    src: item.images.length > 0 ? item.images[0].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg",
                    alt: item.name,
                    class: "h-[60vh] w-full object-cover filter brightness-50 rounded-[20px]"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "px-5 absolute bottom-[5%] text-white" }, [
                    createVNode("h1", { class: "boldfont text-yellow mb-3 text-xl" }, toDisplayString(item.name), 1),
                    createVNode("div", {
                      class: "mb-5 line-clamp-3",
                      innerHTML: item.description
                    }, null, 8, ["innerHTML"]),
                    createVNode("a", {
                      href: "#",
                      class: "px-2 py-3 bg-white text-black rounded-md slide boldfont"
                    }, "Book Ticket")
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeComponent/BaliZooExplore.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BaliZooExplore = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation, Pagination]
    };
  },
  props: {
    balifarm: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_swiper, {
    navigation: true,
    pagination: true,
    loop: true,
    modules: $setup.modules,
    class: "mySwiper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.balifarm, (item, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="relative"${_scopeId2}><img${ssrRenderAttr("src", item.images.length > 0 ? item.images[0].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg")}${ssrRenderAttr("alt", item.name)} class="h-[100vh] w-full object-cover filter brightness-50"${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative" }, [
                    createVNode("img", {
                      src: item.images.length > 0 ? item.images[0].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg",
                      alt: item.name,
                      class: "h-[100vh] w-full object-cover filter brightness-50"
                    }, null, 8, ["src", "alt"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.balifarm, (item, index) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
              default: withCtx(() => [
                createVNode("div", { class: "relative" }, [
                  createVNode("img", {
                    src: item.images.length > 0 ? item.images[0].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg",
                    alt: item.name,
                    class: "h-[100vh] w-full object-cover filter brightness-50"
                  }, null, 8, ["src", "alt"])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="absolute z-50 top-[6rem] left-1/2 -translate-x-1/2 text-center w-full text-white"><h1 class="boldfont text-3xl">PLAY WITH ALPACA AT BALI FARM HOUSE</h1></div><div class="absolute z-50 bottom-[6rem] left-1/2 -translate-x-1/2 text-center w-full text-white">`);
  if ($props.balifarm.length > 0) {
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/ticket-detail/${$props.balifarm[0].vendor.slug}`,
      class: "px-2 py-3 bg-white text-black rounded-md slide boldfont"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Book Ticket`);
        } else {
          return [
            createTextVNode("Book Ticket")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeComponent/BaliFarmExplore.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BaliFarmExplore = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation, Pagination]
    };
  },
  props: {
    balisafari: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_swiper, {
    navigation: true,
    pagination: true,
    modules: $setup.modules,
    class: "mySwiper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.balisafari, (item, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="relative"${_scopeId2}><img${ssrRenderAttr("src", item.images.length > 0 ? item.images[0].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg")}${ssrRenderAttr("alt", item.name)} class="h-[60vh] w-full object-cover filter brightness-50 rounded-[20px]"${_scopeId2}><div class="px-5 absolute bottom-[5%] text-white"${_scopeId2}><h1 class="boldfont text-yellow mb-3 text-xl"${_scopeId2}>${ssrInterpolate(item.name)}</h1><div class="mb-5 line-clamp-3"${_scopeId2}>${item.short_desc ?? ""}</div>`);
                if (item.vendor) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: `/ticket-detail/${item.vendor.slug}/${item.slug}`,
                    class: "px-2 py-3 bg-white text-black rounded-md slide boldfont"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Book Ticket`);
                      } else {
                        return [
                          createTextVNode("Book Ticket")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative" }, [
                    createVNode("img", {
                      src: item.images.length > 0 ? item.images[0].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg",
                      alt: item.name,
                      class: "h-[60vh] w-full object-cover filter brightness-50 rounded-[20px]"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "px-5 absolute bottom-[5%] text-white" }, [
                      createVNode("h1", { class: "boldfont text-yellow mb-3 text-xl" }, toDisplayString(item.name), 1),
                      createVNode("div", {
                        class: "mb-5 line-clamp-3",
                        innerHTML: item.short_desc
                      }, null, 8, ["innerHTML"]),
                      item.vendor ? (openBlock(), createBlock(_component_NuxtLink, {
                        key: 0,
                        to: `/ticket-detail/${item.vendor.slug}/${item.slug}`,
                        class: "px-2 py-3 bg-white text-black rounded-md slide boldfont"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Book Ticket")
                        ]),
                        _: 2
                      }, 1032, ["to"])) : createCommentVNode("", true)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.balisafari, (item, index) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
              default: withCtx(() => [
                createVNode("div", { class: "relative" }, [
                  createVNode("img", {
                    src: item.images.length > 0 ? item.images[0].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg",
                    alt: item.name,
                    class: "h-[60vh] w-full object-cover filter brightness-50 rounded-[20px]"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "px-5 absolute bottom-[5%] text-white" }, [
                    createVNode("h1", { class: "boldfont text-yellow mb-3 text-xl" }, toDisplayString(item.name), 1),
                    createVNode("div", {
                      class: "mb-5 line-clamp-3",
                      innerHTML: item.short_desc
                    }, null, 8, ["innerHTML"]),
                    item.vendor ? (openBlock(), createBlock(_component_NuxtLink, {
                      key: 0,
                      to: `/ticket-detail/${item.vendor.slug}/${item.slug}`,
                      class: "px-2 py-3 bg-white text-black rounded-md slide boldfont"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Book Ticket")
                      ]),
                      _: 2
                    }, 1032, ["to"])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeComponent/BaliSafariExplore.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BaliSafariExplore = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const vendors = ref([]);
    const balibird = ref([]);
    const explorer = ref([]);
    const balifarm = ref([]);
    const balisafari = ref([]);
    const { data: vendorsData, error: vendorsError } = useAsyncData("vendors", async () => {
      return await getVendors();
    });
    if (vendors.value) {
      vendors.value = vendorsData.value || [];
    }
    const { data: explorerData, error: explorerError } = useAsyncData("explorer", async () => {
      return await getBaliZooPopular();
    });
    if (explorer.value) {
      explorer.value = explorerData.value || [];
    }
    const { data: balibirdData, error: balibirdError } = useAsyncData("balibird", async () => {
      return await getBaliBirdPopular();
    });
    if (balibird.value) {
      balibird.value = balibirdData.value || [];
    }
    const { data: balifarmData, error: balifarmError } = useAsyncData("balifarm", async () => {
      return await getBaliFarmPopular();
    });
    if (balifarm.value) {
      balifarm.value = balifarmData.value || [];
    }
    const { data: balisafariData, error: balisafariError } = useAsyncData("balisafari", async () => {
      return await getBaliSafariPopular();
    });
    if (balisafari.value) {
      balisafari.value = balisafariData.value || [];
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-cover bg-[url(&#39;../assets/image/bg-desktop.png&#39;)]"><div class="bg-center bg-cover h-[100] bg-no-repeat bg-[url(&#39;../assets/image/Homepage-mobile.png&#39;)] lg:bg-[url(&#39;../assets/image/bg-home.png&#39;)]"><div class="h-[100vh] px-5 lg:px-10 container mx-auto flex items-center"><h1 class="hidden lg:block mb-4 boldfont text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"> EXPERIENCE <br> <span class="text-yellow">A CLOSER LOOK</span> TO <br> BALI’S EXOTIC ANIMALS</h1><h1 class="block lg:hidden mb-4 boldfont text-center mx-auto text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"> EXPERIENCE <br> <span class="text-yellow">A CLOSER LOOK</span> <br> TO BALI’S <br> EXOTIC ANIMALS</h1></div></div><div class="px-5 pb-0 lg:pb-44 lg:px-10 container mx-auto"><div id="feature"><h5 class="text-center font-bold text-white text-2xl boldfont">Places To Go</h5><div class="grid grid-cols-1 lg:grid-cols-12 py-5 gap-6">`);
      _push(ssrRenderComponent(VendorHome, { vendors: vendors.value }, null, _parent));
      _push(`</div></div><div><div class="panel-home bg-[#FFD600] p-5 lg:p-10 rounded-3xl mt-10 lg:mt-44 mb-[-20%] relative"><div class="grid grid-cols-2 lg:grid-cols-4 gap-4">`);
      _push(ssrRenderComponent(OpeningHourModal, { vendors: vendors.value }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(ssrRenderComponent(MapsModal, null, null, _parent));
      _push(ssrRenderComponent(WhatsonModal, null, null, _parent));
      _push(`</div></div></div></div></section><section class="bg-cover h-[25vh] lg:h-auto bg-[url(&#39;../assets/image/background-biru-desktop.png&#39;)]"><div class="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-4"><div class="col-span-7 pt-24"><h4 class="boldfont text-white text-3xl text-center">Explore Bali Zoo</h4><div class="py-20 mx-auto px-10">`);
      _push(ssrRenderComponent(BaliZooExplore, { explorer: explorer.value }, null, _parent));
      _push(`</div></div><div class="col-span-5 bg-[url(&#39;../assets/image/plan.png&#39;)]"><div class="pt-24"><h4 class="boldfont text-white text-3xl text-center"> A WELL SPENT DAY <br> at BALI BIRD PARK</h4><div class="py-20 px-10">`);
      _push(ssrRenderComponent(BaliBirdExplore, { balibird: balibird.value }, null, _parent));
      _push(`</div></div></div></div></section><section><div class="hidden lg:grid grid-cols-1 lg:grid-cols-12"><div class="col-span-5">`);
      _push(ssrRenderComponent(BaliFarmExplore, { balifarm: balifarm.value }, null, _parent));
      _push(`</div><div class="col-span-7 bg-contain bg-[url(&#39;../assets/image/bg-hijau.png&#39;)]"><h4 class="boldfont pt-24 text-white text-3xl text-center">WILDLIFE ADVENTURE AT BALI SAFARI</h4><div class="pt-10 mx-auto px-10">`);
      _push(ssrRenderComponent(BaliSafariExplore, { balisafari: balisafari.value }, null, _parent));
      _push(`</div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CGPiKjkd.js.map
