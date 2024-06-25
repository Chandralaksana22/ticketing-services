import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { b as useAsyncData, g as getVendors, k as getProductBaliSafari, _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { ref, withAsyncContext, withCtx, createTextVNode, useSSRContext, resolveComponent, mergeProps, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_2, a as __nuxt_component_1 } from './ExplorerSPData-D5u9ZAuR.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'pinia-plugin-persistedstate';
import 'axios';

const _imports_0 = "" + buildAssetsURL("heroticket.CYqgVe8K.png");
const _imports_1 = "" + buildAssetsURL("logomob.CrD18KKz.png");
const _sfc_main$2 = {
  name: "TicketCard",
  props: {
    imageSrc: {
      type: String,
      default: ""
    },
    imageAlt: {
      type: String,
      default: "Image"
    },
    buttonText: {
      type: String,
      default: ""
    },
    sellingTicketText: {
      type: String,
      default: ""
    },
    bookedText: {
      type: String,
      default: ""
    },
    generalAdmissionText: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    oldPrice: {
      type: String,
      default: ""
    },
    newPrice: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(ssrRenderComponent(_component_RouterLink, mergeProps({
    to: "/ticket-detail",
    class: "grid grid-cols-3 gap-3 pt-5 items-start",
    style: { "border-bottom": "1px solid #9ca3af" }
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-1"${_scopeId}><img${ssrRenderAttr("src", $props.imageSrc)}${ssrRenderAttr("alt", $props.imageAlt)} class="rounded-2xl h-[130px] w-[130px] object-cover"${_scopeId}></div><div class="col-span-2"${_scopeId}><button class="bg-[#926000] rounded-lg p-2 font-bold text-white text-xs uppercase"${_scopeId}>${ssrInterpolate($props.buttonText)}</button><div class="grid grid-cols-2 mt-2 gap-1"${_scopeId}><button class="bg-[#FFD600] rounded-lg px-2 py-1 text-black text-[10px] font-bold"${_scopeId}>${ssrInterpolate($props.sellingTicketText)}</button><button class="bg-transparent text-blue text-[10px] font-bold"${_scopeId}>${ssrInterpolate($props.bookedText)}</button></div><div class="my-5"${_scopeId}><h2 class="text-xs text-gray-400 font-bold"${_scopeId}>${ssrInterpolate($props.generalAdmissionText)}</h2><h1 class="text-lg text-black font-bold"${_scopeId}>${ssrInterpolate($props.title)}</h1><p class="text-xs text-gray-600 line-through"${_scopeId}>${ssrInterpolate($props.oldPrice)}</p><p class="text-md text-[#EF681C] font-bold"${_scopeId}>${ssrInterpolate($props.newPrice)} <span class="text-sm text-black"${_scopeId}>/person</span></p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "col-span-1" }, [
            createVNode("img", {
              src: $props.imageSrc,
              alt: $props.imageAlt,
              class: "rounded-2xl h-[130px] w-[130px] object-cover"
            }, null, 8, ["src", "alt"])
          ]),
          createVNode("div", { class: "col-span-2" }, [
            createVNode("button", { class: "bg-[#926000] rounded-lg p-2 font-bold text-white text-xs uppercase" }, toDisplayString($props.buttonText), 1),
            createVNode("div", { class: "grid grid-cols-2 mt-2 gap-1" }, [
              createVNode("button", { class: "bg-[#FFD600] rounded-lg px-2 py-1 text-black text-[10px] font-bold" }, toDisplayString($props.sellingTicketText), 1),
              createVNode("button", { class: "bg-transparent text-blue text-[10px] font-bold" }, toDisplayString($props.bookedText), 1)
            ]),
            createVNode("div", { class: "my-5" }, [
              createVNode("h2", { class: "text-xs text-gray-400 font-bold" }, toDisplayString($props.generalAdmissionText), 1),
              createVNode("h1", { class: "text-lg text-black font-bold" }, toDisplayString($props.title), 1),
              createVNode("p", { class: "text-xs text-gray-600 line-through" }, toDisplayString($props.oldPrice), 1),
              createVNode("p", { class: "text-md text-[#EF681C] font-bold" }, [
                createTextVNode(toDisplayString($props.newPrice) + " ", 1),
                createVNode("span", { class: "text-sm text-black" }, "/person")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TicketCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TicketCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
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
    balisafarievent: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0;
  _push(ssrRenderComponent(_component_swiper, mergeProps({
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "640": {
        slidesPerView: 2,
        spaceBetween: 10
      },
      "768": {
        slidesPerView: 2,
        spaceBetween: 10
      },
      "1024": {
        slidesPerView: 3,
        spaceBetween: 10
      }
    },
    navigation: true,
    modules: $setup.modules,
    class: "mySwiper"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.balisafarievent, (item, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_NuxtLink, {
                  to: `/ticket-detail/${item.vendor.slug}/${item.slug}`
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    var _a2;
                    var _a, _b;
                    if (_push4) {
                      _push4(`<div class="bg-white h-full overflow-hidden rounded-lg card-zoom-hover"${_scopeId3}><div class="overflow-hidden"${_scopeId3}><img${ssrRenderAttr("src", (_a = item.images[0]) == null ? void 0 : _a.path)} class="rounded-t-lg h-[35vh] w-full object-cover" alt="image"${_scopeId3}></div><div class="p-5"${_scopeId3}><h4 class="boldfont text-center text-lg text-blue"${_scopeId3}>${ssrInterpolate(item.name)}</h4><p class="text-sm text-center" style="${ssrRenderStyle({ "font-size": "12px" })}"${_scopeId3}>${(_a2 = item.highlight) != null ? _a2 : ""}</p></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-white h-full overflow-hidden rounded-lg card-zoom-hover" }, [
                          createVNode("div", { class: "overflow-hidden" }, [
                            createVNode("img", {
                              src: (_b = item.images[0]) == null ? void 0 : _b.path,
                              class: "rounded-t-lg h-[35vh] w-full object-cover",
                              alt: "image"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "p-5" }, [
                            createVNode("h4", { class: "boldfont text-center text-lg text-blue" }, toDisplayString(item.name), 1),
                            createVNode("p", {
                              class: "text-sm text-center",
                              style: { "font-size": "12px" },
                              innerHTML: item.highlight
                            }, null, 8, ["innerHTML"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_NuxtLink, {
                    to: `/ticket-detail/${item.vendor.slug}/${item.slug}`
                  }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("div", { class: "bg-white h-full overflow-hidden rounded-lg card-zoom-hover" }, [
                          createVNode("div", { class: "overflow-hidden" }, [
                            createVNode("img", {
                              src: (_a = item.images[0]) == null ? void 0 : _a.path,
                              class: "rounded-t-lg h-[35vh] w-full object-cover",
                              alt: "image"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "p-5" }, [
                            createVNode("h4", { class: "boldfont text-center text-lg text-blue" }, toDisplayString(item.name), 1),
                            createVNode("p", {
                              class: "text-sm text-center",
                              style: { "font-size": "12px" },
                              innerHTML: item.highlight
                            }, null, 8, ["innerHTML"])
                          ])
                        ])
                      ];
                    }),
                    _: 2
                  }, 1032, ["to"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.balisafarievent, (item, index) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
              default: withCtx(() => [
                createVNode(_component_NuxtLink, {
                  to: `/ticket-detail/${item.vendor.slug}/${item.slug}`
                }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createVNode("div", { class: "bg-white h-full overflow-hidden rounded-lg card-zoom-hover" }, [
                        createVNode("div", { class: "overflow-hidden" }, [
                          createVNode("img", {
                            src: (_a = item.images[0]) == null ? void 0 : _a.path,
                            class: "rounded-t-lg h-[35vh] w-full object-cover",
                            alt: "image"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "p-5" }, [
                          createVNode("h4", { class: "boldfont text-center text-lg text-blue" }, toDisplayString(item.name), 1),
                          createVNode("p", {
                            class: "text-sm text-center",
                            style: { "font-size": "12px" },
                            innerHTML: item.highlight
                          }, null, 8, ["innerHTML"])
                        ])
                      ])
                    ];
                  }),
                  _: 2
                }, 1032, ["to"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaliSafariEvent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BaliSafariEvent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "ticket",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const vendors = ref([]);
    const explorerSPData = ref([]);
    const explorerCPData = ref([]);
    const explorerSTPData = ref([]);
    const balisafari = ref([]);
    const balisafarievent = ref([]);
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("vendors", getVendors)), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      vendors.value = data.value;
    }
    const { data: balisafariData, error: balisafariError } = useAsyncData("balisafari", async () => {
      return await getProductBaliSafari();
    });
    if (balisafariData.value) {
      const filteredData = balisafariData.value.filter((item) => item.type === "General Admission");
      balisafari.value = filteredData;
    }
    const { data: balisafarieventData, error: balisafarieventError } = useAsyncData("balisafari", async () => {
      return await getProductBaliSafari();
    });
    if (balisafarieventData.value) {
      const filteredData = balisafarieventData.value.filter((item) => item.type === "What's On");
      balisafarievent.value = filteredData;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="hidden lg:block bg-white lg:bg-[url(&#39;../assets/image/bg-desktop.png&#39;)]"><div class="relative w-full"><img${ssrRenderAttr("src", _imports_0)} alt="Hero Ticket" class="w-full h-full object-cover"><div class="absolute inset-0 flex items-center justify-center"><h1 class="boldfont text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl"> Tickets </h1></div></div><div id="placetogo" class="hidden lg:block container mx-auto"><h4 class="boldfont text-white text-3xl mb-5 mt-10 text-center">General Admission</h4><div class="grid grid-cols-4 p-10 gap-4"><!--[-->`);
      ssrRenderList(vendors.value, (vendor) => {
        _push(`<div class="relative img-border card overflow-hidden zoom-on-hover"><img class="filter brightness-50 h-[400px] object-cover"${ssrRenderAttr("src", vendor.images.length > 0 ? vendor.images[1].path : "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg")}${ssrRenderAttr("alt", vendor.name)}><div class="absolute top-1/2 left-1/2 -translate-x-1/2 text-center w-100 text-white"><h5 class="boldfont text-xl text-white text-center">${ssrInterpolate(vendor.name)}</h5></div><div class="absolute bottom-[5%] left-1/2 z-50 -translate-x-1/2 text-center w-100 text-white">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/vendor/${vendor.slug}`,
          class: "p-2 text-lg bg-white rounded-lg text-black slide boldfont text-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` See Details`);
            } else {
              return [
                createTextVNode(" See Details")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div><h4 class="hidden lg:block boldfont text-white text-3xl pt-5 mb-5 text-center">MORE PACKAGES FROM BALI ZOO</h4><div class="relative z-50 p-10 mb-[-10%] container mx-auto"><div class="mb-4"><ul class="flex flex-wrap -mb-px text-sm font-medium mx-auto justify-center text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" role="tablist"><li class="me-2" role="presentation"><button class="inline-block package boldfont rounded-lg p-4" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">SINGLE PACKAGE</button></li><li class="me-2" role="presentation"><button class="inline-block package boldfont rounded-lg p-4" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">COMBO PACKAGE</button></li><li class="me-2" role="presentation"><button class="inline-block package boldfont rounded-lg p-4" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">STAY PACKAGE</button></li></ul></div><div id="default-styled-tab-content"><div class="hidden h-[400px]" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">`);
      _push(ssrRenderComponent(__nuxt_component_2, { products: explorerSPData.value }, null, _parent));
      _push(`</div><div class="hidden h-[400px]" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">`);
      _push(ssrRenderComponent(__nuxt_component_2, { products: explorerCPData.value }, null, _parent));
      _push(`</div><div class="hidden h-[400px]" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">`);
      _push(ssrRenderComponent(__nuxt_component_2, { products: explorerSTPData.value }, null, _parent));
      _push(`</div></div></div></section><section class="hidden lg:block bg-cover bg-white lg:bg-[url(&#39;../assets/image/background-biru-desktop.png&#39;)]"><div id="placetogo" class="pt-[15%] container mx-auto"><h4 class="boldfont text-white text-3xl mb-5 text-center">MORE OFFER FROM BALI SAFARI</h4><div class="p-10 mb-[-10%] gap-4">`);
      _push(ssrRenderComponent(__nuxt_component_1, { balisafari: balisafari.value }, null, _parent));
      _push(`</div></div></section><section class="hidden lg:block bg-cover bg-white lg:bg-[url(&#39;../assets/image/bg-hijau.png&#39;)]"><div id="placetogo" class="pt-[15%] container mx-auto"><h4 class="boldfont text-white text-3xl mb-5 text-center">NEW EVENT FROM BALI SAFARI</h4><div class="p-10 gap-4">`);
      _push(ssrRenderComponent(BaliSafariEvent, { balisafarievent: balisafarievent.value }, null, _parent));
      _push(`</div></div></section><section class="block lg:hidden bg-white"><div class="flex justify-between p-5 items-center"><a><img class="h-[48px] object-contain"${ssrRenderAttr("src", _imports_1)} alt=""></a><div class="grid grid-cols-2 gap-4"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z" fill="#008AC6"></path></svg></a><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.8256 5.51906C20.7552 5.43481 20.6672 5.36705 20.5677 5.32056C20.4683 5.27407 20.3598 5.24998 20.25 5.25H5.12625L4.66781 2.73187C4.60502 2.38625 4.42292 2.07363 4.15325 1.84851C3.88359 1.62339 3.54347 1.50005 3.19219 1.5H1.5C1.30109 1.5 1.11032 1.57902 0.96967 1.71967C0.829018 1.86032 0.75 2.05109 0.75 2.25C0.75 2.44891 0.829018 2.63968 0.96967 2.78033C1.11032 2.92098 1.30109 3 1.5 3H3.1875L5.58375 16.1522C5.65434 16.5422 5.82671 16.9067 6.08344 17.2087C5.72911 17.5397 5.47336 17.9623 5.34455 18.4298C5.21575 18.8972 5.21892 19.3912 5.35371 19.8569C5.48851 20.3226 5.74966 20.7419 6.10821 21.0683C6.46676 21.3947 6.9087 21.6154 7.38502 21.7059C7.86134 21.7965 8.35344 21.7533 8.80673 21.5813C9.26003 21.4092 9.65682 21.115 9.9531 20.7312C10.2494 20.3474 10.4336 19.889 10.4853 19.407C10.537 18.9249 10.4541 18.4379 10.2459 18H14.5041C14.3363 18.3513 14.2495 18.7357 14.25 19.125C14.25 19.6442 14.404 20.1517 14.6924 20.5834C14.9808 21.0151 15.3908 21.3515 15.8705 21.5502C16.3501 21.7489 16.8779 21.8008 17.3871 21.6996C17.8963 21.5983 18.364 21.3483 18.7312 20.9812C19.0983 20.614 19.3483 20.1463 19.4496 19.6371C19.5508 19.1279 19.4989 18.6001 19.3002 18.1205C19.1015 17.6408 18.7651 17.2308 18.3334 16.9424C17.9017 16.654 17.3942 16.5 16.875 16.5H7.79719C7.62155 16.5 7.45149 16.4383 7.31665 16.3257C7.18182 16.2132 7.09077 16.0569 7.05938 15.8841L6.76219 14.25H17.6372C18.1641 14.2499 18.6743 14.0649 19.0788 13.7272C19.4833 13.3896 19.7564 12.9206 19.8506 12.4022L20.9906 6.13406C21.0099 6.02572 21.0051 5.91447 20.9766 5.80818C20.9481 5.7019 20.8966 5.60319 20.8256 5.51906ZM9 19.125C9 19.3475 8.93402 19.565 8.8104 19.75C8.68679 19.935 8.51109 20.0792 8.30552 20.1644C8.09995 20.2495 7.87375 20.2718 7.65552 20.2284C7.43729 20.185 7.23684 20.0778 7.0795 19.9205C6.92217 19.7632 6.81502 19.5627 6.77162 19.3445C6.72821 19.1262 6.75049 18.9 6.83564 18.6945C6.92078 18.4889 7.06498 18.3132 7.24998 18.1896C7.43499 18.066 7.6525 18 7.875 18C8.17337 18 8.45952 18.1185 8.6705 18.3295C8.88147 18.5405 9 18.8266 9 19.125ZM18 19.125C18 19.3475 17.934 19.565 17.8104 19.75C17.6868 19.935 17.5111 20.0792 17.3055 20.1644C17.1 20.2495 16.8738 20.2718 16.6555 20.2284C16.4373 20.185 16.2368 20.0778 16.0795 19.9205C15.9222 19.7632 15.815 19.5627 15.7716 19.3445C15.7282 19.1262 15.7505 18.9 15.8356 18.6945C15.9208 18.4889 16.065 18.3132 16.25 18.1896C16.435 18.066 16.6525 18 16.875 18C17.1734 18 17.4595 18.1185 17.6705 18.3295C17.8815 18.5405 18 18.8266 18 19.125ZM18.375 12.1341C18.3435 12.3074 18.2521 12.464 18.1166 12.5766C17.9812 12.6893 17.8105 12.7506 17.6344 12.75H6.48938L5.39906 6.75H19.3509L18.375 12.1341Z" fill="#008AC6"></path></svg></a></div></div><div class="sticky top-0 p-5 bg-white"><form><label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label><div class="relative"><div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div><input type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Try search \u201CBali Zoo\u201D" required></div></form></div><div><!--[-->`);
      ssrRenderList(_ctx.tickets, (ticket, index) => {
        _push(`<div>`);
        _push(ssrRenderComponent(TicketCard, {
          imageSrc: ticket.imageSrc,
          imageAlt: ticket.imageAlt,
          buttonText: ticket.buttonText,
          sellingTicketText: ticket.sellingTicketText,
          bookedText: ticket.bookedText,
          generalAdmissionText: ticket.generalAdmissionText,
          title: ticket.title,
          oldPrice: ticket.oldPrice,
          newPrice: ticket.newPrice
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ticket.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ticket-BzC09V_t.mjs.map
