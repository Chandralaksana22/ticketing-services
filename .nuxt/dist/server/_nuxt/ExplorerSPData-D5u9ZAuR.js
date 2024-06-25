import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
/* empty css                    */
import { Navigation, Pagination } from "swiper/modules";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
        slidesPerView: 3.2,
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
        ssrRenderList($props.balisafari, (item, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              var _a, _b;
              if (_push3) {
                _push3(`<div class="hover-content relative"${_scopeId2}><div class="placetogo-port" data-cursor="pointer2" style="${ssrRenderStyle({ "height": "100%" })}"${_scopeId2}><img${ssrRenderAttr("src", (_a = item.images[0]) == null ? void 0 : _a.path)} class="filter brightness-50" alt="" style="${ssrRenderStyle({ "height": "15rem" })}"${_scopeId2}><div class="cover p-5"${_scopeId2}><div class="detail text-white"${_scopeId2}><h5 class="boldfont text-white text-xl mb-5"${_scopeId2}>${ssrInterpolate(item.name)}</h5><p class="content text-md line-clamp-3" style="${ssrRenderStyle({ "font-size": "12px" })}"${_scopeId2}>${item.highlight ?? ""}</p></div></div><div class="z-20 absolute bottom-[5%] left-[5%]"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_NuxtLink, {
                  to: `/ticket-detail/${item.vendor.slug}/${item.slug}`,
                  class: "bg-white rounded-lg p-2 slide boldfont text-center"
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
                _push3(`</div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "hover-content relative" }, [
                    createVNode("div", {
                      class: "placetogo-port",
                      "data-cursor": "pointer2",
                      style: { "height": "100%" }
                    }, [
                      createVNode("img", {
                        src: (_b = item.images[0]) == null ? void 0 : _b.path,
                        class: "filter brightness-50",
                        alt: "",
                        style: { "height": "15rem" }
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "cover p-5" }, [
                        createVNode("div", { class: "detail text-white" }, [
                          createVNode("h5", { class: "boldfont text-white text-xl mb-5" }, toDisplayString(item.name), 1),
                          createVNode("p", {
                            class: "content text-md line-clamp-3",
                            style: { "font-size": "12px" },
                            innerHTML: item.highlight
                          }, null, 8, ["innerHTML"])
                        ])
                      ]),
                      createVNode("div", { class: "z-20 absolute bottom-[5%] left-[5%]" }, [
                        createVNode(_component_NuxtLink, {
                          to: `/ticket-detail/${item.vendor.slug}/${item.slug}`,
                          class: "bg-white rounded-lg p-2 slide boldfont text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Book Ticket")
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
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
              default: withCtx(() => {
                var _a;
                return [
                  createVNode("div", { class: "hover-content relative" }, [
                    createVNode("div", {
                      class: "placetogo-port",
                      "data-cursor": "pointer2",
                      style: { "height": "100%" }
                    }, [
                      createVNode("img", {
                        src: (_a = item.images[0]) == null ? void 0 : _a.path,
                        class: "filter brightness-50",
                        alt: "",
                        style: { "height": "15rem" }
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "cover p-5" }, [
                        createVNode("div", { class: "detail text-white" }, [
                          createVNode("h5", { class: "boldfont text-white text-xl mb-5" }, toDisplayString(item.name), 1),
                          createVNode("p", {
                            class: "content text-md line-clamp-3",
                            style: { "font-size": "12px" },
                            innerHTML: item.highlight
                          }, null, 8, ["innerHTML"])
                        ])
                      ]),
                      createVNode("div", { class: "z-20 absolute bottom-[5%] left-[5%]" }, [
                        createVNode(_component_NuxtLink, {
                          to: `/ticket-detail/${item.vendor.slug}/${item.slug}`,
                          class: "bg-white rounded-lg p-2 slide boldfont text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Book Ticket")
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ])
                  ])
                ];
              }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaliSafariTicket.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
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
    products: {
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
    navigation: true,
    breakpoints: {
      "640": {
        slidesPerView: 2,
        spaceBetween: 20
      },
      "768": {
        slidesPerView: 3,
        spaceBetween: 0
      },
      "1024": {
        slidesPerView: 3,
        spaceBetween: 20
      }
    },
    modules: $setup.modules,
    class: "mySwiper container mx-auto"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.products, (product) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: product.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="position rounded-lg overflow-hidden"${_scopeId2}><img class="filter brightness-50 rounded-lg h-[400px] w-full object-cover"${ssrRenderAttr("src", product.images[0].path)} alt=""${_scopeId2}><div class="absolute top-[25%] left-1/2 -translate-x-1/2 text-center w-full px-4"${_scopeId2}><h5 class="boldfont text-2xl text-yellow text-center"${_scopeId2}>${ssrInterpolate(product.name)}</h5><p class="text-md text-yellow"${_scopeId2}> Session :Morning <br${_scopeId2}> Last check-in : 09.00 </p><p class="mt-5 font-bold text-white"${_scopeId2}> INCLUSION : </p><p class="text-white"${_scopeId2}>${ssrInterpolate(product.inclusion ? product.inclusion.map((item) => item.item).join(", ") : "")}</p></div><div class="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center w-full"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_NuxtLink, {
                  to: `/ticket-detail/${product.vendor.slug}/${product.slug}`,
                  class: "bg-white rounded-lg p-2 slide boldfont text-center"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`Book Tiket`);
                    } else {
                      return [
                        createTextVNode("Book Tiket")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "position rounded-lg overflow-hidden" }, [
                    createVNode("img", {
                      class: "filter brightness-50 rounded-lg h-[400px] w-full object-cover",
                      src: product.images[0].path,
                      alt: ""
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "absolute top-[25%] left-1/2 -translate-x-1/2 text-center w-full px-4" }, [
                      createVNode("h5", { class: "boldfont text-2xl text-yellow text-center" }, toDisplayString(product.name), 1),
                      createVNode("p", { class: "text-md text-yellow" }, [
                        createTextVNode(" Session :Morning "),
                        createVNode("br"),
                        createTextVNode(" Last check-in : 09.00 ")
                      ]),
                      createVNode("p", { class: "mt-5 font-bold text-white" }, " INCLUSION : "),
                      createVNode("p", { class: "text-white" }, toDisplayString(product.inclusion ? product.inclusion.map((item) => item.item).join(", ") : ""), 1)
                    ]),
                    createVNode("div", { class: "absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center w-full" }, [
                      createVNode(_component_NuxtLink, {
                        to: `/ticket-detail/${product.vendor.slug}/${product.slug}`,
                        class: "bg-white rounded-lg p-2 slide boldfont text-center"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Book Tiket")
                        ]),
                        _: 2
                      }, 1032, ["to"])
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
          (openBlock(true), createBlock(Fragment, null, renderList($props.products, (product) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: product.id
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "position rounded-lg overflow-hidden" }, [
                  createVNode("img", {
                    class: "filter brightness-50 rounded-lg h-[400px] w-full object-cover",
                    src: product.images[0].path,
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "absolute top-[25%] left-1/2 -translate-x-1/2 text-center w-full px-4" }, [
                    createVNode("h5", { class: "boldfont text-2xl text-yellow text-center" }, toDisplayString(product.name), 1),
                    createVNode("p", { class: "text-md text-yellow" }, [
                      createTextVNode(" Session :Morning "),
                      createVNode("br"),
                      createTextVNode(" Last check-in : 09.00 ")
                    ]),
                    createVNode("p", { class: "mt-5 font-bold text-white" }, " INCLUSION : "),
                    createVNode("p", { class: "text-white" }, toDisplayString(product.inclusion ? product.inclusion.map((item) => item.item).join(", ") : ""), 1)
                  ]),
                  createVNode("div", { class: "absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center w-full" }, [
                    createVNode(_component_NuxtLink, {
                      to: `/ticket-detail/${product.vendor.slug}/${product.slug}`,
                      class: "bg-white rounded-lg p-2 slide boldfont text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Book Tiket")
                      ]),
                      _: 2
                    }, 1032, ["to"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExplorerSPData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_2 as _,
  __nuxt_component_1 as a
};
//# sourceMappingURL=ExplorerSPData-D5u9ZAuR.js.map
