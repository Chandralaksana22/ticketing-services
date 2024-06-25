import { _ as _export_sfc, a as __nuxt_component_0$1, b as useAsyncData, k as getProductBaliSafari, l as getProductBaliFarm } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext, ref, unref, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { a as __nuxt_component_1, _ as __nuxt_component_2 } from "./ExplorerSPData-D5u9ZAuR.js";
import { Swiper, SwiperSlide } from "swiper/vue";
/* empty css                    */
import { Navigation, Pagination } from "swiper/modules";
import { useRoute } from "vue-router";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
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
const _sfc_main$4 = {
  __name: "PopularActivities",
  __ssrInlineRender: true,
  props: {
    explorerData: {
      type: Array,
      required: true
    },
    vendorSlug: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "placetogo",
        class: "hidden lg:block"
      }, _attrs))} data-v-da85c48f><h4 class="boldfont text-white text-3xl mb-5 text-center" data-v-da85c48f>Popular Activity</h4><div class="grid grid-cols-3 px-10 mb-[-10%] gap-4 h-[35rem]" data-v-da85c48f><!--[-->`);
      ssrRenderList(__props.explorerData, (item, index) => {
        _push(`<div class="relative" data-v-da85c48f><div class="placetogo-port img-border hover-content" data-v-da85c48f><img${ssrRenderAttr("src", item.images[0].path)}${ssrRenderAttr("alt", item.name)} class="h-full" alt="" data-v-da85c48f><div class="cover p-5" data-v-da85c48f><div class="detail text-center text-white" data-v-da85c48f><h3 class="boldfont text-white text-2xl mb-1" data-v-da85c48f>${ssrInterpolate(item.name)}</h3><p class="text-sm line-clamp-3 content" data-v-da85c48f>${item.highlight ?? ""}</p></div></div><div class="absolute z-50 bottom-[7%] left-1/2 -translate-x-1/2 text-center w-100" data-v-da85c48f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/ticket-detail/${__props.vendorSlug}/${item.slug}`,
          class: "bg-white rounded-lg p-2 slide boldfont text-center"
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
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopularActivities.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-da85c48f"]]);
const _sfc_main$3 = {
  __name: "GeneralAdmission",
  __ssrInlineRender: true,
  props: {
    generalAdmissionData: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const modules = ref([Navigation, Pagination]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (__props.generalAdmissionData) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
        _push(ssrRenderComponent(unref(Swiper), {
          navigation: true,
          modules: unref(modules),
          class: "mySwiper"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.generalAdmissionData.images, (image) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: image.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="relative"${_scopeId2}><img${ssrRenderAttr("src", image.path)} alt="" class="h-[100vh] w-full object-cover filter brightness-50"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "relative" }, [
                          createVNode("img", {
                            src: image.path,
                            alt: "",
                            class: "h-[100vh] w-full object-cover filter brightness-50"
                          }, null, 8, ["src"])
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
                (openBlock(true), createBlock(Fragment, null, renderList(__props.generalAdmissionData.images, (image) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: image.id
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative" }, [
                        createVNode("img", {
                          src: image.path,
                          alt: "",
                          class: "h-[100vh] w-full object-cover filter brightness-50"
                        }, null, 8, ["src"])
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
        _push(`<div class="absolute z-10 top-[6rem] left-1/2 translate-x-[-50%] text-center w-full text-white"><h1 class="boldfont text-3xl">${ssrInterpolate(__props.generalAdmissionData.name)}</h1></div><div class="absolute z-10 bottom-[6rem] left-1/2 translate-x-[-50%] px-10 w-full text-white"><div class="mb-10">`);
        if (__props.generalAdmissionData.inclusion) {
          _push(`<h1 class="font-bold boldfont text-white">Inclusion :</h1>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="text-white">${ssrInterpolate(__props.generalAdmissionData.inclusion ? __props.generalAdmissionData.inclusion.map((item) => item.item).join(", ") : "")}</p>`);
        if (__props.generalAdmissionData.facilities) {
          _push(`<h1 class="font-bold boldfont text-white mt-5">Facilities :</h1>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="text-white">${ssrInterpolate(__props.generalAdmissionData.facilities ? __props.generalAdmissionData.facilities.map((facility) => facility.title).join(", ") : "")}</p></div><div class="text-center">`);
        if (__props.generalAdmissionData.vendor) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/ticket-detail/${__props.generalAdmissionData.vendor.slug}/${__props.generalAdmissionData.slug}`,
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
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GeneralAdmission.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + __buildAssetsURL("varunalogo.BqrHtd8Q.png");
const _imports_1 = "" + __buildAssetsURL("background-biru-desktop.lyAKzMYD.png");
const _imports_2 = "" + __buildAssetsURL("member1.DL8Fk1Ru.png");
const _imports_3 = "" + __buildAssetsURL("member2.D5l2A_cX.png");
const _sfc_main$2 = {
  __name: "BaliFarmGA",
  __ssrInlineRender: true,
  props: {
    GABaliFarm: {
      type: Array,
      required: true
    },
    vendorSlug: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      ssrRenderList(__props.GABaliFarm, (item, index) => {
        var _a;
        _push(`<div class="relative img-border card overflow-hidden zoom-on-hover"><img class="filter brightness-50 w-full h-[400px] object-cover"${ssrRenderAttr("src", (_a = item.images[0]) == null ? void 0 : _a.path)}${ssrRenderAttr("alt", item.name)}><div class="absolute top-1/2 left-1/2 -translate-x-1/2 text-center w-100 text-white"><h5 class="boldfont text-xl text-white text-center">${ssrInterpolate(item.name)}</h5></div><div class="absolute bottom-[5%] left-1/2 z-50 -translate-x-1/2 text-center w-100 text-white">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/ticket-detail/${__props.vendorSlug}/${item.slug}`,
          class: "p-2 text-lg bg-white rounded-lg text-black slide boldfont text-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` See Details `);
            } else {
              return [
                createTextVNode(" See Details ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaliFarmGA.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ActivityBaliFarm",
  __ssrInlineRender: true,
  props: {
    BaliFarmData: {
      type: Array,
      required: true
    },
    vendorSlug: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      ssrRenderList(__props.BaliFarmData, (item, index) => {
        var _a;
        _push(`<div class="relative"><img${ssrRenderAttr("src", (_a = item.images[0]) == null ? void 0 : _a.path)}${ssrRenderAttr("alt", item.name)} class="h-[20rem] w-full object-cover filter brightness-50"><div class="absolute inset-0 flex flex-col justify-center px-10 text-white"><h1 class="boldfont text-yellow mb-3 text-xl">${ssrInterpolate(item.name)}</h1><p class="mb-5">${item.highlight ?? ""}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/ticket-detail/${__props.vendorSlug}/${item.slug}`,
          class: "px-2 py-3 bg-white text-black rounded-md slide boldfont w-fit"
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
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActivityBaliFarm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
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
    const { data: balisafariData, error: balisafariError } = useAsyncData("balisafari", async () => {
      return await getProductBaliSafari();
    });
    if (balisafariData.value) {
      const filteredData = balisafariData.value.filter((item) => item.type === "General Admission");
      balisafari.value = filteredData;
    }
    const { data: baliGAFarm, error: balisafarmError } = useAsyncData("balifarmhouse", async () => {
      return await getProductBaliFarm();
    });
    if (baliGAFarm.value) {
      const filteredData = baliGAFarm.value.filter((item) => item.type === "General Admission");
      GABaliFarm.value = filteredData;
    }
    const { data: balifarm, error: balifarmerror } = useAsyncData("balifarmhouse", async () => {
      return await getProductBaliFarm();
    });
    if (balifarm.value) {
      const filteredData = balifarm.value.filter((item) => item.type === "What's On");
      BaliFarmData.value = filteredData;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PopularActivities = __nuxt_component_0;
      const _component_BaliSafariTicket = __nuxt_component_1;
      const _component_ExplorerSPData = __nuxt_component_2;
      const _component_GeneralAdmission = _sfc_main$3;
      _push(`<!--[--><section class="bg-cover bg-white md:bg-[url(&#39;../assets/image/bg-desktop.png&#39;)]"><img${ssrRenderAttr("src", vendorDetail.value.images && vendorDetail.value.images.length > 0 ? vendorDetail.value.images[0].path : "")}${ssrRenderAttr("alt", vendorDetail.value.name)} class="h-[100vh] object-cover w-full">`);
      if (unref(slug) === "bali-zoo") {
        _push(`<div class="mt-10">`);
        _push(ssrRenderComponent(_component_PopularActivities, {
          explorerData: explorerData.value,
          vendorSlug: unref(slug)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(slug) === "bali-farm-house") {
        _push(`<div class="mt-10"><div id="placetogo" class="hidden md:block container mx-auto"><h4 class="boldfont text-white text-3xl text-center">General Admission</h4><h4 class="text-white text-lg mb-5 text-center">(For Indonesian ID and Kitas holder)</h4><div class="grid md:grid-cols-2 lg:grid-cols-4 p-10 gap-4">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          GABaliFarm: GABaliFarm.value,
          vendorSlug: unref(slug)
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(slug) === "bali-safari") {
        _push(`<div class="mt-10"><div id="placetogo" class="hidden md:block container mx-auto"><h4 class="boldfont text-white text-3xl text-center">General Admission</h4><div class="p-10 gap-4">`);
        _push(ssrRenderComponent(_component_BaliSafariTicket, { balisafari: balisafari.value }, null, _parent));
        _push(`</div></div><h4 class="boldfont text-white text-3xl py-10 text-center">WHAT’S NEW ON BALI SAFARI</h4><div class="px-10 relative z-10"><div class="rounded-xl p-10 bg-cover bg-[url(&#39;../assets/image/bg-card.png&#39;)] grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center"><div><img${ssrRenderAttr("src", _imports_0)} class="object-contain h-40 mb-20" alt=""><h1 class="boldfont text-white text-3xl">Varuna Show</h1><p class="text-white text-md mt-10">Varuna’s stage bursts to life with vibrant performers, adorned in marine-inspired attire, guiding you through the captivating odyssey of Varuna, the young hero. The voyage unfolds with every dish, act, and moment, creating an immersive narrative. </p></div><div class="flex flex-col gap-4"><div class="gap-4 rounded-xl border-2 border-white backdrop-blur-sm bg-white/30 h-fit p-5"><div class="flex justify-between items-center"><h1 class="text-white font-semibold text-xl">PREMIUM PACKAGE</h1><a href="" class="p-2 boldfont text-xs bg-white text-black rounded-lg w-fit float-end">Book Ticket</a></div><p class="mt-5 text-sm text-white">Wine (red/white), 3-course lunch, preferential seating, and VIP waiting lounge with free canape &amp; mocktail/cocktail</p></div><div class="gap-4 rounded-xl border-2 border-white backdrop-blur-sm bg-white/30 h-fit p-5"><div class="flex justify-between items-center"><h1 class="text-white font-semibold text-xl">PREMIUM PACKAGE</h1><a href="" class="p-2 boldfont text-xs bg-white text-black rounded-lg w-fit float-end">Book Ticket</a></div><p class="mt-5 text-sm text-white">Wine (red/white), 3-course lunch, preferential seating, and VIP waiting lounge with free canape &amp; mocktail/cocktail</p></div><div class="gap-4 rounded-xl border-2 border-white backdrop-blur-sm bg-white/30 h-fit p-5"><div class="flex justify-between items-center"><h1 class="text-white font-semibold text-xl">PREMIUM PACKAGE</h1><a href="" class="p-2 boldfont text-xs bg-white text-black rounded-lg w-fit float-end">Book Ticket</a></div><p class="mt-5 text-sm text-white">Wine (red/white), 3-course lunch, preferential seating, and VIP waiting lounge with free canape &amp; mocktail/cocktail</p></div></div></div></div><img${ssrRenderAttr("src", _imports_1)} class="h-[50vh] mt-[-15%] w-full object-cover hidden md:block" alt="~assets/image/background-biru-desktop.png"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="hidden md:block bg-cover bg-[url(&#39;../assets/image/background-biru-desktop.png&#39;)]">`);
      if (unref(slug) === "bali-zoo") {
        _push(`<div class="mt-10"><h4 class="boldfont text-white text-3xl pt-[15%] mb-5 text-center">ALL PACKAGES, GET MORE PAY LESS</h4><div class="p-10"><div class="mb-4"><ul class="flex flex-wrap -mb-px text-sm font-medium mx-auto justify-center text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" role="tablist"><li class="me-2" role="presentation"><button class="inline-block package boldfont rounded-lg p-4" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">SINGLE PACKAGE</button></li><li class="me-2" role="presentation"><button class="inline-block package boldfont rounded-lg p-4" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">COMBO PACKAGE</button></li><li class="me-2" role="presentation"><button class="inline-block package boldfont rounded-lg p-4" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">STAY PACKAGE</button></li></ul></div><div id="default-styled-tab-content"><div class="hidden h-[400px]" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">`);
        _push(ssrRenderComponent(_component_ExplorerSPData, { products: explorerSPData.value }, null, _parent));
        _push(`</div><div class="hidden h-[400px]" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">`);
        _push(ssrRenderComponent(_component_ExplorerSPData, { products: explorerCPData.value }, null, _parent));
        _push(`</div><div class="hidden h-[400px]" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">`);
        _push(ssrRenderComponent(_component_ExplorerSPData, { products: explorerSTPData.value }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(slug) === "bali-farm-house") {
        _push(`<div><div class="container mx-auto"><h4 class="boldfont text-white text-3xl pt-[5%] mb-5 text-center">OTHER ACTIVITY</h4><div class="p-10 grid grid-cols-2 gap-4">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          BaliFarmData: BaliFarmData.value,
          vendorSlug: unref(slug)
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      if (unref(slug) === "bali-zoo") {
        _push(`<section class="hidden md:block"><div><div class="grid grid-cols-1 md:grid-cols-12"><div class="col-span-5">`);
        _push(ssrRenderComponent(_component_GeneralAdmission, { generalAdmissionData: generalAdmissionData.value }, null, _parent));
        _push(`</div><div class="col-span-7 bg-cover bg-center bg-[url(&#39;../assets/image/bg-hijau.png&#39;)]"><button type="button" class="bg-yellow p-3 boldfont text-xl rounded-b-xl" style="${ssrRenderStyle({ "position": "relative", "top": "50%", "transform-origin": "top left", "transform": "rotate(-90deg) translateX(-50%)" })}"><h3 class="boldfont">MEMBERSHIP</h3></button><div class="flex flex-col items-center justify-center pt-10 mx-auto px-10 space-y-4"><img class="object-contain h-[35vh]"${ssrRenderAttr("src", _imports_2)} alt="Member 1"><img class="object-contain h-[35vh]"${ssrRenderAttr("src", _imports_3)} alt="Member 2"></div></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vendor/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-BGC5PGJd.js.map
