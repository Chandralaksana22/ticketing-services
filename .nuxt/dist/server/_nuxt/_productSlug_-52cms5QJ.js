import { mergeProps, useSSRContext, watch, nextTick, reactive, ref, defineComponent, useSlots, toRef, onMounted, onUnmounted, computed, openBlock, createElementBlock, normalizeClass, createVNode, unref, isRef, createSlots, renderList, withCtx, renderSlot, normalizeProps, guardReactiveProps, createBlock, resolveDynamicComponent, Teleport, Transition, createCommentVNode, normalizeStyle, createElementVNode, Fragment, withModifiers, toDisplayString, h, render, createTextVNode, onBeforeUpdate, withDirectives, vShow, withKeys, getCurrentScope, onScopeDispose, withAsyncContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, b as useAsyncData, h as getProductDetail } from "../server.mjs";
import { initTabs } from "flowbite";
import { useRouter, useRoute } from "vue-router";
import "./ticket-6ijYPQ9O.js";
import { getYear, getMonth, getDay, eachDayOfInterval, differenceInCalendarDays, format, set, startOfMonth, isBefore, isEqual, isAfter, isValid, addHours, getHours, getMinutes, getSeconds, setYear, startOfYear, add, addMonths, startOfWeek, endOfWeek, isSameQuarter, eachQuarterOfInterval, endOfYear, startOfQuarter, endOfQuarter, parse, subMonths, getQuarter, setHours, setMinutes, setSeconds, setMilliseconds, setMonth, getWeek, getISOWeek, addDays, isDate, addYears, subYears, sub, differenceInYears } from "date-fns";
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
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-2 gap-4" }, _attrs))}><div class="flex gap-4"><div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 14C15.1595 14.0003 14.3472 14.303 13.7115 14.8529C13.0758 15.4027 12.6592 16.163 12.5378 16.9947C12.4165 17.8264 12.5985 18.674 13.0506 19.3825C13.5027 20.0911 14.1946 20.6133 15 20.8538V23C15 23.2652 15.1054 23.5196 15.2929 23.7071C15.4804 23.8946 15.7348 24 16 24C16.2652 24 16.5196 23.8946 16.7071 23.7071C16.8946 23.5196 17 23.2652 17 23V20.8538C17.8054 20.6133 18.4973 20.0911 18.9494 19.3825C19.4015 18.674 19.5835 17.8264 19.4622 16.9947C19.3408 16.163 18.9242 15.4027 18.2885 14.8529C17.6528 14.303 16.8405 14.0003 16 14ZM16 19C15.7033 19 15.4133 18.912 15.1666 18.7472C14.92 18.5824 14.7277 18.3481 14.6142 18.074C14.5006 17.7999 14.4709 17.4983 14.5288 17.2074C14.5867 16.9164 14.7296 16.6491 14.9393 16.4393C15.1491 16.2296 15.4164 16.0867 15.7074 16.0288C15.9983 15.9709 16.2999 16.0007 16.574 16.1142C16.8481 16.2277 17.0824 16.42 17.2472 16.6666C17.412 16.9133 17.5 17.2033 17.5 17.5C17.5 17.8978 17.342 18.2794 17.0607 18.5607C16.7794 18.842 16.3978 19 16 19ZM26 10H22V7C22 5.4087 21.3679 3.88258 20.2426 2.75736C19.1174 1.63214 17.5913 1 16 1C14.4087 1 12.8826 1.63214 11.7574 2.75736C10.6321 3.88258 10 5.4087 10 7V10H6C5.46957 10 4.96086 10.2107 4.58579 10.5858C4.21071 10.9609 4 11.4696 4 12V26C4 26.5304 4.21071 27.0391 4.58579 27.4142C4.96086 27.7893 5.46957 28 6 28H26C26.5304 28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0391 28 26.5304 28 26V12C28 11.4696 27.7893 10.9609 27.4142 10.5858C27.0391 10.2107 26.5304 10 26 10ZM12 7C12 5.93913 12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3C17.0609 3 18.0783 3.42143 18.8284 4.17157C19.5786 4.92172 20 5.93913 20 7V10H12V7ZM26 26H6V12H26V26Z" fill="#008AC6"></path></svg></div><div><h1 class="font-semibold">Reserve now &amp; pay later</h1><p class="text-sm text-gray-600">Keep your travel plans flexible — book your spot and pay nothing today.</p></div></div><div class="flex gap-4"><div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M28.9997 17.0825C28.7872 19.5524 27.8738 21.9104 26.3668 23.8788C24.8597 25.8473 22.8219 27.3443 20.4929 28.1939C18.1639 29.0435 15.6408 29.2103 13.2203 28.6746C10.7997 28.1389 8.58257 26.9231 6.82959 25.1701C5.07661 23.4171 3.86075 21.1999 3.32506 18.7794C2.78937 16.3589 2.95614 13.8357 3.80574 11.5068C4.65534 9.17781 6.15243 7.13994 8.12087 5.63293C10.0893 4.12591 12.4472 3.21244 14.9172 2.99998C15.0485 2.98915 15.1807 3.00428 15.3062 3.04453C15.4316 3.08477 15.5479 3.14934 15.6485 3.23454C15.749 3.31973 15.8317 3.4239 15.892 3.54108C15.9523 3.65826 15.9889 3.78616 15.9997 3.91748C16.0105 4.0488 15.9954 4.18097 15.9551 4.30644C15.9149 4.43191 15.8503 4.54823 15.7651 4.64875C15.6799 4.74927 15.5758 4.83202 15.4586 4.89229C15.3414 4.95255 15.2135 4.98915 15.0822 4.99998C12.9917 5.1796 10.996 5.95256 9.32983 7.22793C7.66372 8.5033 6.39652 10.228 5.67735 12.1991C4.95819 14.1703 4.81696 16.3058 5.2703 18.3544C5.72364 20.4031 6.75269 22.2797 8.23635 23.7633C9.72002 25.247 11.5966 26.276 13.6452 26.7294C15.6939 27.1827 17.8294 27.0415 19.8005 26.3223C21.7717 25.6032 23.4964 24.336 24.7717 22.6698C26.0471 21.0037 26.8201 19.008 26.9997 16.9175C27.0216 16.6523 27.1479 16.4066 27.3509 16.2345C27.5539 16.0625 27.817 15.9781 28.0822 16C28.3474 16.0219 28.5931 16.1482 28.7651 16.3512C28.9372 16.5542 29.0216 16.8173 28.9997 17.0825ZM14.9997 8.99998V16C14.9997 16.2652 15.1051 16.5196 15.2926 16.7071C15.4801 16.8946 15.7345 17 15.9997 17H22.9997C23.2649 17 23.5193 16.8946 23.7068 16.7071C23.8943 16.5196 23.9997 16.2652 23.9997 16C23.9997 15.7348 23.8943 15.4804 23.7068 15.2929C23.5193 15.1053 23.2649 15 22.9997 15H16.9997V8.99998C16.9997 8.73476 16.8943 8.48041 16.7068 8.29287C16.5193 8.10534 16.2649 7.99998 15.9997 7.99998C15.7345 7.99998 15.4801 8.10534 15.2926 8.29287C15.1051 8.48041 14.9997 8.73476 14.9997 8.99998ZM19.9997 5.99998C20.2964 5.99998 20.5864 5.91201 20.8331 5.74718C21.0797 5.58236 21.272 5.34809 21.3855 5.074C21.499 4.79992 21.5288 4.49832 21.4709 4.20734C21.413 3.91637 21.2701 3.6491 21.0604 3.43932C20.8506 3.22954 20.5833 3.08668 20.2923 3.0288C20.0014 2.97092 19.6998 3.00063 19.4257 3.11416C19.1516 3.22769 18.9173 3.41995 18.7525 3.66662C18.5877 3.9133 18.4997 4.20331 18.4997 4.49998C18.4997 4.8978 18.6577 5.27934 18.939 5.56064C19.2203 5.84194 19.6019 5.99998 19.9997 5.99998ZM24.4997 8.99998C24.7964 8.99998 25.0864 8.91201 25.3331 8.74718C25.5797 8.58236 25.772 8.34809 25.8855 8.074C25.999 7.79992 26.0288 7.49832 25.9709 7.20734C25.913 6.91637 25.7701 6.6491 25.5604 6.43932C25.3506 6.22954 25.0833 6.08668 24.7923 6.0288C24.5014 5.97092 24.1998 6.00063 23.9257 6.11416C23.6516 6.22769 23.4173 6.41995 23.2525 6.66662C23.0877 6.9133 22.9997 7.20331 22.9997 7.49998C22.9997 7.8978 23.1577 8.27934 23.439 8.56064C23.7203 8.84194 24.1019 8.99998 24.4997 8.99998ZM27.4997 13.5C27.7964 13.5 28.0864 13.412 28.3331 13.2472C28.5797 13.0824 28.772 12.8481 28.8855 12.574C28.999 12.2999 29.0288 11.9983 28.9709 11.7073C28.913 11.4164 28.7701 11.1491 28.5604 10.9393C28.3506 10.7295 28.0833 10.5867 27.7923 10.5288C27.5014 10.4709 27.1998 10.5006 26.9257 10.6142C26.6516 10.7277 26.4173 10.92 26.2525 11.1666C26.0877 11.4133 25.9997 11.7033 25.9997 12C25.9997 12.3978 26.1577 12.7793 26.439 13.0606C26.7203 13.3419 27.1019 13.5 27.4997 13.5Z" fill="#008AC6"></path></svg></div><div><h1 class="font-semibold">Valid 1 day</h1><p class="text-sm text-gray-600">Check availability to see starting times.</p></div></div><div class="flex gap-4"><div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16.9998 10V15.4338L21.5148 18.1425C21.7422 18.2791 21.906 18.5005 21.9703 18.7579C22.0345 19.0153 21.9939 19.2876 21.8573 19.515C21.7207 19.7425 21.4993 19.9063 21.242 19.9705C20.9846 20.0348 20.7122 19.9941 20.4848 19.8575L15.4848 16.8575C15.3368 16.7686 15.2143 16.6429 15.1293 16.4927C15.0444 16.3424 14.9997 16.1727 14.9998 16V10C14.9998 9.73483 15.1051 9.48047 15.2927 9.29294C15.4802 9.1054 15.7346 9.00004 15.9998 9.00004C16.265 9.00004 16.5193 9.1054 16.7069 9.29294C16.8944 9.48047 16.9998 9.73483 16.9998 10ZM27.9998 7.00004C27.7346 7.00004 27.4802 7.1054 27.2927 7.29294C27.1051 7.48047 26.9998 7.73483 26.9998 8.00004V10.25C26.206 9.33004 25.396 8.44379 24.4848 7.52129C22.8171 5.85343 20.6949 4.71399 18.3833 4.24536C16.0717 3.77673 13.6733 3.99969 11.4878 4.88638C9.30218 5.77306 7.42636 7.28416 6.09469 9.23085C4.76302 11.1775 4.03454 13.4735 4.00029 15.8318C3.96604 18.1902 4.62752 20.5063 5.9021 22.4909C7.17667 24.4754 9.00781 26.0403 11.1667 26.9901C13.3256 27.9399 15.7165 28.2324 18.0407 27.8311C20.3649 27.4298 22.5194 26.3525 24.2348 24.7338C24.3303 24.6435 24.4071 24.5353 24.4608 24.4153C24.5146 24.2953 24.5441 24.166 24.5478 24.0346C24.5515 23.9032 24.5293 23.7723 24.4825 23.6495C24.4356 23.5267 24.3651 23.4143 24.2748 23.3188C24.1845 23.2233 24.0763 23.1464 23.9563 23.0927C23.8363 23.039 23.707 23.0094 23.5756 23.0057C23.4442 23.002 23.3133 23.0242 23.1905 23.0711C23.0677 23.1179 22.9553 23.1885 22.8598 23.2788C21.4298 24.6264 19.6346 25.5229 17.6982 25.8563C15.7618 26.1897 13.7701 25.9452 11.9718 25.1535C10.1735 24.3617 8.64829 23.0577 7.58666 21.4043C6.52503 19.7509 5.97401 17.8214 6.00241 15.8567C6.03081 13.892 6.63738 11.9793 7.74636 10.3573C8.85534 8.73525 10.4176 7.47589 12.238 6.73643C14.0585 5.99698 16.0564 5.81021 17.9823 6.19945C19.9083 6.58868 21.6769 7.53668 23.0673 8.92504C24.0848 9.95504 24.976 10.9475 25.8748 12H22.9998C22.7346 12 22.4802 12.1054 22.2927 12.2929C22.1051 12.4805 21.9998 12.7348 21.9998 13C21.9998 13.2653 22.1051 13.5196 22.2927 13.7071C22.4802 13.8947 22.7346 14 22.9998 14H27.9998C28.265 14 28.5193 13.8947 28.7069 13.7071C28.8944 13.5196 28.9998 13.2653 28.9998 13V8.00004C28.9998 7.73483 28.8944 7.48047 28.7069 7.29294C28.5193 7.1054 28.265 7.00004 27.9998 7.00004Z" fill="#008AC6"></path></svg></div><div><h1 class="font-semibold">Free cancellation</h1><p class="text-sm text-gray-600">Cancel up to 24 hours in advance for a full refund</p></div></div><div class="flex gap-4"><div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M26 5H6C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V14.3475C4 25.5487 13.4775 29.265 15.375 29.8962C15.7803 30.0341 16.2197 30.0341 16.625 29.8962C18.525 29.265 28 25.5487 28 14.3475V7C28 6.46957 27.7893 5.96086 27.4142 5.58579C27.0391 5.21071 26.5304 5 26 5ZM26 14.3488C26 24.1512 17.7063 27.4263 16 27.9963C14.3088 27.4325 6 24.16 6 14.3488V7H26V14.3488ZM10.2925 17.7075C10.1049 17.5199 9.99944 17.2654 9.99944 17C9.99944 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.585L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075Z" fill="#008AC6"></path></svg></div><div><h1 class="font-semibold">Insurance</h1><p class="text-sm text-gray-600">Ensure visitor’s safety in along the trip.</p></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DetailTicket/AboutTicket.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  __name: "TicketInformation",
  __ssrInlineRender: true,
  props: {
    productDetail: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    watch(() => props.productDetail, async (newVal) => {
      if (newVal) {
        await nextTick();
        initTabs();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.productDetail) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden lg:block" }, _attrs))} data-v-ba80c19c><div class="mb-4 border-b border-gray-200 dark:border-gray-700" data-v-ba80c19c><ul class="flex flex-wrap -mb-px text-sm font-medium text-center" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-blue border-[#008AC6]" data-tabs-inactive-classes="text-gray-500 border-gray-100" role="tablist" data-v-ba80c19c><li role="presentation" data-v-ba80c19c><button class="inline-block py-4 px-7 border-b-2 rounded-t-lg" id="highlight-styled-tab" data-tabs-target="#styled-highlight" type="button" role="tab" aria-controls="highlight" aria-selected="false" data-v-ba80c19c>Highlight</button></li><li role="presentation" data-v-ba80c19c><button class="inline-block py-4 px-7 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="inclusion-styled-tab" data-tabs-target="#styled-inclusion" type="button" role="tab" aria-controls="inclusion" aria-selected="false" data-v-ba80c19c>Inclusion</button></li><li role="presentation" data-v-ba80c19c><button class="inline-block py-4 px-7 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="facilities-styled-tab" data-tabs-target="#styled-facilities" type="button" role="tab" aria-controls="facilities" aria-selected="false" data-v-ba80c19c>Facilities</button></li><li role="presentation" data-v-ba80c19c><button class="inline-block py-4 px-7 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="location-styled-tab" data-tabs-target="#styled-location" type="button" role="tab" aria-controls="location" aria-selected="false" data-v-ba80c19c>Location</button></li><li role="presentation" data-v-ba80c19c><button class="inline-block py-4 px-7 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="zoomap-styled-tab" data-tabs-target="#styled-zoomap" type="button" role="tab" aria-controls="zoomap" aria-selected="false" data-v-ba80c19c>Zoo Map</button></li></ul></div><div id="default-styled-tab-content" data-v-ba80c19c><div class="hidden p-4" id="styled-highlight" role="tabpanel" aria-labelledby="highlight-tab" data-v-ba80c19c><div data-v-ba80c19c>${__props.productDetail.highlight ?? ""}</div></div><div class="hidden p-4" id="styled-inclusion" role="tabpanel" aria-labelledby="inclusion-tab" data-v-ba80c19c><ul class="space-y-4 text-left text-gray-500 dark:text-gray-400" data-v-ba80c19c><!--[-->`);
        ssrRenderList(__props.productDetail.inclusion, (item, index) => {
          _push(`<li class="flex items-center space-x-3 rtl:space-x-reverse" data-v-ba80c19c><svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12" data-v-ba80c19c><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" data-v-ba80c19c></path></svg><span data-v-ba80c19c>${ssrInterpolate(item.item)}</span></li>`);
        });
        _push(`<!--]--></ul></div><div class="hidden p-4" id="styled-facilities" role="tabpanel" aria-labelledby="facilities-tab" data-v-ba80c19c><div class="grid grid-cols-5 gap-4" data-v-ba80c19c><!--[-->`);
        ssrRenderList(__props.productDetail.facilities, (facility) => {
          _push(`<div class="flex flex-col items-center justify-center p-4" data-v-ba80c19c><img${ssrRenderAttr("src", facility.path)}${ssrRenderAttr("alt", facility.title)} class="w-8 h-8 mb-2" data-v-ba80c19c><p class="text-sm" data-v-ba80c19c>${ssrInterpolate(facility.title)}</p></div>`);
        });
        _push(`<!--]--></div></div><div class="hidden p-4" id="styled-location" role="tabpanel" aria-labelledby="location-tab" data-v-ba80c19c><div class="flex mb-5" data-v-ba80c19c><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" data-v-ba80c19c><path d="M16 2C13.0836 2.00331 10.2877 3.1633 8.22548 5.22548C6.1633 7.28766 5.00331 10.0836 5 13C5 22.4125 15 29.5213 15.4263 29.8188C15.5944 29.9365 15.7947 29.9997 16 29.9997C16.2053 29.9997 16.4056 29.9365 16.5737 29.8188C17 29.5213 27 22.4125 27 13C26.9967 10.0836 25.8367 7.28766 23.7745 5.22548C21.7123 3.1633 18.9164 2.00331 16 2ZM16 9C16.7911 9 17.5645 9.2346 18.2223 9.67412C18.8801 10.1136 19.3928 10.7384 19.6955 11.4693C19.9983 12.2002 20.0775 13.0044 19.9231 13.7804C19.7688 14.5563 19.3878 15.269 18.8284 15.8284C18.269 16.3878 17.5563 16.7688 16.7804 16.9231C16.0044 17.0775 15.2002 16.9983 14.4693 16.6955C13.7384 16.3928 13.1136 15.8801 12.6741 15.2223C12.2346 14.5645 12 13.7911 12 13C12 11.9391 12.4214 10.9217 13.1716 10.1716C13.9217 9.42143 14.9391 9 16 9Z" fill="#161616" data-v-ba80c19c></path></svg><p class="ms-2" data-v-ba80c19c>${ssrInterpolate(__props.productDetail.address)}</p></div><a${ssrRenderAttr("href", __props.productDetail.link_address)} class="py-2 px-5 bg-blue-500 text-white font-semibold rounded-lg" data-v-ba80c19c>Open In Maps</a></div><div class="hidden p-4" id="styled-zoomap" role="tabpanel" aria-labelledby="zoomap-tab" data-v-ba80c19c><img${ssrRenderAttr("src", __props.productDetail.map[0].path)} class="h-1/4 object-contain" alt="Map Image" data-v-ba80c19c></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DetailTicket/TicketInformation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ba80c19c"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center w-full h-56" }, _attrs))}><div role="status"><svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg><span class="sr-only">Loading...</span></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DetailTicket/Loader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "alert-1",
    class: "flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400",
    role: "alert"
  }, _attrs))}><svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path></svg><span class="sr-only">information</span><div class="ms-3 text-sm font-medium"> No ticket information available yet. </div><button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close"><span class="sr-only">Close</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg></button></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DetailTicket/Alert.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
function Et() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      createElementVNode("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      createElementVNode("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      createElementVNode("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Et.compatConfig = {
  MODE: 3
};
function wn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      createElementVNode("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
wn.compatConfig = {
  MODE: 3
};
function La() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
La.compatConfig = {
  MODE: 3
};
function za() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
za.compatConfig = {
  MODE: 3
};
function Ha() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      createElementVNode("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Ha.compatConfig = {
  MODE: 3
};
function Wa() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Wa.compatConfig = {
  MODE: 3
};
function Va() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Va.compatConfig = {
  MODE: 3
};
const Ze = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), Ua = (e, t, l) => {
  const a = Na(e, t, l);
  return a || U();
}, il = (e, t, l) => {
  const a = t.dateInTz ? Ze(new Date(e), t.dateInTz) : U(e);
  return l ? Ke(a, true) : a;
}, Na = (e, t, l) => {
  if (!e)
    return null;
  const a = l ? Ke(U(e), true) : U(e);
  return t ? t.exactMatch ? il(e, t, l) : Ze(a, t.timezone) : a;
}, dl = (e) => {
  if (!e)
    return 0;
  const t = /* @__PURE__ */ new Date(), l = new Date(t.toLocaleString("en-US", { timeZone: "UTC" })), a = new Date(t.toLocaleString("en-US", { timeZone: e })), n = a.getTimezoneOffset() / 60;
  return (+l - +a) / (1e3 * 60 * 60) - n;
};
var nt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(nt || {}), Mt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(Mt || {}), Tt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Tt || {}), He = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(He || {});
const cl = ["timestamp", "date", "iso"];
var je = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(je || {}), Re = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Re || {});
function nn(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function fl(e) {
  return (t) => format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const vl = (e, t, l) => {
  const a = [1, 2, 3, 4, 5, 6, 7];
  let n;
  if (e !== null)
    try {
      n = a.map(fl(e));
    } catch {
      n = a.map(nn(t));
    }
  else
    n = a.map(nn(t));
  const c = n.slice(0, l), v = n.slice(l + 1, n.length);
  return [n[l]].concat(...v).concat(...c);
}, ja = (e, t, l) => {
  const a = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    a.push({ value: +n, text: An(n, t) });
  return l ? a.reverse() : a;
}, Dn = (e, t, l) => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((c) => {
    const v = c < 10 ? `0${c}` : c;
    return /* @__PURE__ */ new Date(`2017-${v}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const c = l === "long" ? "LLLL" : "LLL";
      return a.map((v, h2) => {
        const i = format(Ze(v, "UTC"), c, { locale: e });
        return {
          text: i.charAt(0).toUpperCase() + i.substring(1),
          value: h2
        };
      });
    } catch {
    }
  const n = new Intl.DateTimeFormat(t, { month: l, timeZone: "UTC" });
  return a.map((c, v) => {
    const h2 = n.format(c);
    return {
      text: h2.charAt(0).toUpperCase() + h2.substring(1),
      value: v
    };
  });
}, ml = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Ie = (e) => {
  const t = unref(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, gl = (e) => ({ type: "dot", ...e ?? {} }), Mn = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : false, Ka = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ye = (e) => e, ln = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, rn = (e) => e === null, $n = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, yl = (e) => {
  const t = [], l = (a) => a.filter((n) => n);
  for (let a = 0; a < e.length; a += 3) {
    const n = [e[a], e[a + 1], e[a + 2]];
    t.push(l(n));
  }
  return t;
}, Gt = (e, t, l) => {
  const a = l != null, n = t != null;
  if (!a && !n)
    return false;
  const c = +l, v = +t;
  return a && n ? +e > c || +e < v : a ? +e > c : n ? +e < v : false;
}, Yt = (e, t) => yl(e).map((l) => l.map((a) => {
  const { active: n, disabled: c, isBetween: v, highlighted: h2 } = t(a);
  return {
    ...a,
    active: n,
    disabled: c,
    className: {
      dp__overlay_cell_active: n,
      dp__overlay_cell: !n,
      dp__overlay_cell_disabled: c,
      dp__overlay_cell_pad: true,
      dp__overlay_cell_active_disabled: c && n,
      dp__cell_in_between: v,
      "dp--highlighted": h2
    }
  };
})), yt = (e, t, l = false) => {
  e && t.allowStopPropagation && (l && e.stopImmediatePropagation(), e.stopPropagation());
}, pl = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function hl(e, t) {
  let l = [...(void 0).querySelectorAll(pl())];
  l = l.filter((n) => !e.contains(n) || n.hasAttribute("data-datepicker-instance"));
  const a = l.indexOf(e);
  if (a >= 0 && (t ? a - 1 >= 0 : a + 1 <= l.length))
    return l[a + (t ? -1 : 1)];
}
const bl = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), An = (e, t) => new Intl.NumberFormat(t, { useGrouping: false, style: "decimal" }).format(e), Ga = (e) => format(e, "dd-MM-yyyy"), $a = (e) => Array.isArray(e), sa = (e, t) => t.get(Ga(e)), kl = (e, t) => e ? t ? t instanceof Map ? !!sa(e, t) : t(U(e)) : false : true, qe = (e, t, l = false) => {
  if (e.key === Re.enter || e.key === Re.space)
    return l && e.preventDefault(), t();
}, on = (e, t, l, a, n, c) => {
  const v = parse(e, t.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: c });
  return isValid(v) && isDate(v) ? a || n ? v : set(v, {
    hours: +l.hours,
    minutes: +(l == null ? void 0 : l.minutes),
    seconds: +(l == null ? void 0 : l.seconds),
    milliseconds: 0
  }) : null;
}, wl = (e, t, l, a, n, c) => {
  const v = Array.isArray(l) ? l[0] : l;
  if (typeof t == "string")
    return on(e, t, v, a, n, c);
  if (Array.isArray(t)) {
    let h2 = null;
    for (const i of t)
      if (h2 = on(e, i, v, a, n, c), h2)
        break;
    return h2;
  }
  return typeof t == "function" ? t(e) : null;
}, U = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Dl = (e, t, l) => {
  if (t) {
    const n = (e.getMonth() + 1).toString().padStart(2, "0"), c = e.getDate().toString().padStart(2, "0"), v = e.getHours().toString().padStart(2, "0"), h2 = e.getMinutes().toString().padStart(2, "0"), i = l ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${n}-${c}T${v}:${h2}:${i}.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, Ke = (e, t) => {
  const l = U(JSON.parse(JSON.stringify(e))), a = set(l, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  return t ? startOfMonth(a) : a;
}, pt = (e, t, l, a) => {
  let n = e ? U(e) : U();
  return (t || t === 0) && (n = setHours(n, +t)), (l || l === 0) && (n = setMinutes(n, +l)), (a || a === 0) && (n = setSeconds(n, +a)), setMilliseconds(n, 0);
}, _e = (e, t) => !e || !t ? false : isBefore(Ke(e), Ke(t)), De = (e, t) => !e || !t ? false : isEqual(Ke(e), Ke(t)), Be = (e, t) => !e || !t ? false : isAfter(Ke(e), Ke(t)), da = (e, t, l) => e != null && e[0] && (e != null && e[1]) ? Be(l, e[0]) && _e(l, e[1]) : e != null && e[0] && t ? Be(l, e[0]) && _e(l, t) || _e(l, e[0]) && Be(l, t) : false, lt = (e) => {
  const t = set(new Date(e), { date: 1 });
  return Ke(t);
}, Aa = (e, t, l) => t && (l || l === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((a) => a === t ? [a, l] : [a, isNaN(+e[a]) ? void 0 : +e[a]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, St = (e) => ({
  hours: getHours(e),
  minutes: getMinutes(e),
  seconds: getSeconds(e)
}), Tn = (e, t) => {
  if (t) {
    const l = getYear(U(t));
    if (l > e)
      return 12;
    if (l === e)
      return getMonth(U(t));
  }
}, Sn = (e, t) => {
  if (t) {
    const l = getYear(U(t));
    return l < e ? -1 : l === e ? getMonth(U(t)) : void 0;
  }
}, It = (e) => {
  if (e)
    return getYear(U(e));
}, Pn = (e, t) => {
  const l = Be(e, t) ? t : e, a = Be(t, e) ? t : e;
  return eachDayOfInterval({ start: l, end: a });
}, Ml = (e) => {
  const t = addMonths(e, 1);
  return { month: getMonth(t), year: getYear(t) };
}, it = (e, t) => {
  const l = startOfWeek(e, { weekStartsOn: +t }), a = endOfWeek(e, { weekStartsOn: +t });
  return [l, a];
}, Rn = (e, t) => {
  const l = {
    hours: getHours(U()),
    minutes: getMinutes(U()),
    seconds: t ? getSeconds(U()) : 0
  };
  return Object.assign(l, e);
}, gt = (e, t, l) => [set(U(e), { date: 1 }), set(U(), { month: t, year: l, date: 1 })], dt = (e, t, l) => {
  let a = e ? U(e) : U();
  return (t || t === 0) && (a = setMonth(a, t)), l && (a = setYear(a, l)), a;
}, Cn = (e, t, l, a, n) => {
  if (!a || n && !t || !n && !l)
    return false;
  const c = n ? addMonths(e, 1) : subMonths(e, 1), v = [getMonth(c), getYear(c)];
  return n ? !Al(...v, t) : !$l(...v, l);
}, $l = (e, t, l) => _e(...gt(l, e, t)) || De(...gt(l, e, t)), Al = (e, t, l) => Be(...gt(l, e, t)) || De(...gt(l, e, t)), _n = (e, t, l, a, n, c, v) => {
  if (typeof t == "function" && !v)
    return t(e);
  const h2 = l ? { locale: l } : void 0;
  return Array.isArray(e) ? `${format(e[0], c, h2)}${n && !e[1] ? "" : a}${e[1] ? format(e[1], c, h2) : ""}` : format(e, c, h2);
}, Rt = (e) => {
  if (e)
    return null;
  throw new Error(Ka.prop("partial-range"));
}, ta = (e, t) => {
  if (t)
    return e();
  throw new Error(Ka.prop("range"));
}, Ea = (e) => Array.isArray(e) ? isValid(e[0]) && (e[1] ? isValid(e[1]) : true) : e ? isValid(e) : false, Tl = (e, t) => set(t ?? U(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), Ta = (e, t, l, a) => {
  if (!e)
    return true;
  if (a) {
    const n = l === "max" ? isBefore(e, t) : isAfter(e, t), c = { seconds: 0, milliseconds: 0 };
    return n || isEqual(set(e, c), set(t, c));
  }
  return l === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, Sa = (e, t, l) => e ? Tl(e, t) : U(l ?? t), sn = (e, t, l, a, n) => {
  if (Array.isArray(a)) {
    const v = Sa(e, a[0], t), h2 = Sa(e, a[1], t);
    return Ta(a[0], v, l, !!t) && Ta(a[1], h2, l, !!t) && n;
  }
  const c = Sa(e, a, t);
  return Ta(a, c, l, !!t) && n;
}, Pa = (e) => set(U(), St(e)), Sl = (e, t) => e instanceof Map ? Array.from(e.values()).filter((l) => getYear(U(l)) === t).map((l) => getMonth(l)) : [], On = (e, t, l) => typeof e == "function" ? e({ month: t, year: l }) : !!e.months.find((a) => a.month === t && a.year === l), Qa = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Bn = (e) => format(e, "yyyy-MM-dd"), Ht = reactive({
  menuFocused: false,
  shiftKeyInMenu: false
}), Yn = () => {
  const e = (a) => {
    Ht.menuFocused = a;
  }, t = (a) => {
    Ht.shiftKeyInMenu !== a && (Ht.shiftKeyInMenu = a);
  };
  return {
    control: computed(() => ({ shiftKeyInMenu: Ht.shiftKeyInMenu, menuFocused: Ht.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, Se = reactive({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), Ra = ref(null), aa = ref(false), Ca = ref(false), _a = ref(false), Oa = ref(false), ze = ref(0), Oe = ref(0), bt = () => {
  const e = computed(() => aa.value ? [...Se.selectionGrid, Se.actionRow].filter((y) => y.length) : Ca.value ? [
    ...Se.timePicker[0],
    ...Se.timePicker[1],
    Oa.value ? [] : [Ra.value],
    Se.actionRow
  ].filter((y) => y.length) : _a.value ? [...Se.monthPicker, Se.actionRow] : [Se.monthYear, ...Se.calendar, Se.time, Se.actionRow].filter((y) => y.length)), t = (y) => {
    ze.value = y ? ze.value + 1 : ze.value - 1;
    let F = null;
    e.value[Oe.value] && (F = e.value[Oe.value][ze.value]), !F && e.value[Oe.value + (y ? 1 : -1)] ? (Oe.value = Oe.value + (y ? 1 : -1), ze.value = y ? 0 : e.value[Oe.value].length - 1) : F || (ze.value = y ? ze.value - 1 : ze.value + 1);
  }, l = (y) => {
    if (Oe.value === 0 && !y || Oe.value === e.value.length && y)
      return;
    Oe.value = y ? Oe.value + 1 : Oe.value - 1, e.value[Oe.value] ? e.value[Oe.value] && !e.value[Oe.value][ze.value] && ze.value !== 0 && (ze.value = e.value[Oe.value].length - 1) : Oe.value = y ? Oe.value - 1 : Oe.value + 1;
  }, a = (y) => {
    let F = null;
    e.value[Oe.value] && (F = e.value[Oe.value][ze.value]), F ? F.focus({ preventScroll: !aa.value }) : ze.value = y ? ze.value - 1 : ze.value + 1;
  }, n = () => {
    t(true), a(true);
  }, c = () => {
    t(false), a(false);
  }, v = () => {
    l(false), a(true);
  }, h2 = () => {
    l(true), a(true);
  }, i = (y, F) => {
    Se[F] = y;
  }, L = (y, F) => {
    Se[F] = y;
  }, m = () => {
    ze.value = 0, Oe.value = 0;
  };
  return {
    buildMatrix: i,
    buildMultiLevelMatrix: L,
    setTimePickerBackRef: (y) => {
      Ra.value = y;
    },
    setSelectionGrid: (y) => {
      aa.value = y, m(), y || (Se.selectionGrid = []);
    },
    setTimePicker: (y, F = false) => {
      Ca.value = y, Oa.value = F, m(), y || (Se.timePicker[0] = [], Se.timePicker[1] = []);
    },
    setTimePickerElements: (y, F = 0) => {
      Se.timePicker[F] = y;
    },
    arrowRight: n,
    arrowLeft: c,
    arrowUp: v,
    arrowDown: h2,
    clearArrowNav: () => {
      Se.monthYear = [], Se.calendar = [], Se.time = [], Se.actionRow = [], Se.selectionGrid = [], Se.timePicker[0] = [], Se.timePicker[1] = [], aa.value = false, Ca.value = false, Oa.value = false, _a.value = false, m(), Ra.value = null;
    },
    setMonthPicker: (y) => {
      _a.value = y, m();
    },
    refSets: Se
    // exposed for testing
  };
}, un = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), Pl = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  ...e ?? {}
}), dn = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Rl = (e) => {
  const t = typeof e == "object" && e, l = {
    static: true,
    solo: false
  };
  if (!e)
    return { ...l, count: dn(false) };
  const a = t ? e : {}, n = t ? a.count ?? true : e, c = dn(n);
  return Object.assign(l, a, { count: c });
}, Cl = (e, t, l) => e || (typeof l == "string" ? l : t), _l = (e) => typeof e == "boolean" ? e ? un({}) : false : un(e), Ol = (e) => {
  const t = {
    enterSubmit: true,
    tabSubmit: true,
    openMenu: true,
    selectOnFocus: false,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: true } : { ...t, enabled: e };
}, Bl = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), Yl = (e) => ({
  showSelect: true,
  showCancel: true,
  showNow: false,
  showPreview: true,
  ...e ?? {}
}), Il = (e) => {
  const t = { input: false };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: true } : {
    enabled: e,
    ...t
  };
}, Nl = (e) => ({ ...{
  allowStopPropagation: true,
  closeOnScroll: false,
  modeHeight: 255,
  allowPreventDefault: false,
  closeOnClearValue: true,
  closeOnAutoApply: true,
  noSwipe: false,
  keepActionRow: false,
  onClickOutside: void 0,
  tabOutClosesMenu: true,
  arrowLeft: void 0,
  keepViewOnOffsetClick: false,
  timeArrowHoldThreshold: 0
}, ...e ?? {} }), El = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((l) => U(l)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: false }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, Fl = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? false
} : {
  type: e,
  hideOnOffsetDates: false
}, Ll = (e, t) => {
  const l = {
    noDisabledRange: false,
    showLastInRange: true,
    minMaxRawRange: false,
    partialRange: true,
    disableTimeRangeValidation: false,
    maxRange: void 0,
    minRange: void 0,
    autoRange: void 0,
    fixedStart: false,
    fixedEnd: false
  };
  return typeof e == "object" ? { enabled: true, ...l, ...e } : {
    enabled: e,
    noDisabledRange: t.noDisabledRange,
    showLastInRange: t.showLastInRange,
    minMaxRawRange: t.minMaxRawRange,
    partialRange: t.partialRange,
    disableTimeRangeValidation: t.disableTimeRangeValidation,
    maxRange: t.maxRange,
    minRange: t.minRange,
    autoRange: t.autoRange,
    fixedStart: t.fixedStart,
    fixedEnd: t.fixedEnd
  };
}, zl = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: false, dateInTz: void 0, emitTimezone: t, convertModel: true } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? false,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone,
  convertModel: e.convertModel ?? true
} : { timezone: void 0, exactMatch: false, emitTimezone: t }, Ba = (e, t, l) => new Map(
  e.map((a) => {
    const n = Ua(a, t, l);
    return [Ga(n), n];
  })
), Hl = (e, t) => e.length ? new Map(
  e.map((l) => {
    const a = Ua(l.date, t);
    return [Ga(a), l];
  })
) : null, Wl = (e) => {
  var t;
  return {
    minDate: Na(e.minDate, e.timezone, e.isSpecific),
    maxDate: Na(e.maxDate, e.timezone, e.isSpecific),
    disabledDates: $a(e.disabledDates) ? Ba(e.disabledDates, e.timezone, e.isSpecific) : e.disabledDates,
    allowedDates: $a(e.allowedDates) ? Ba(e.allowedDates, e.timezone, e.isSpecific) : null,
    highlight: typeof e.highlight == "object" && $a((t = e.highlight) == null ? void 0 : t.dates) ? Ba(e.highlight.dates, e.timezone) : e.highlight,
    markers: Hl(e.markers, e.timezone)
  };
}, Vl = (e, t) => typeof e == "boolean" ? { enabled: e, dragSelect: true, limit: +t } : {
  enabled: !!e,
  limit: e.limit ? +e.limit : null,
  dragSelect: e.dragSelect ?? true
}, Ul = (e) => ({
  ...Object.fromEntries(
    Object.keys(e).map((l) => {
      const a = l, n = e[a], c = typeof e[a] == "string" ? { [n]: true } : Object.fromEntries(n.map((v) => [v, true]));
      return [l, c];
    })
  )
}), Ce = (e) => {
  const t = () => {
    const le = e.enableSeconds ? ":ss" : "", Q = e.enableMinutes ? ":mm" : "";
    return e.is24 ? `HH${Q}${le}` : `hh${Q}${le} aa`;
  }, l = () => {
    var le;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((le = O.value) == null ? void 0 : le.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, a = (le) => Rn(le, e.enableSeconds), n = () => X.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [a(e.startTime[0]), a(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? a(e.startTime) : null, c = computed(() => Rl(e.multiCalendars)), v = computed(() => n()), h2 = computed(() => Pl(e.ariaLabels)), i = computed(() => Bl(e.filters)), L = computed(() => _l(e.transitions)), m = computed(() => Yl(e.actionRow)), E = computed(
    () => Cl(e.previewFormat, e.format, l())
  ), b = computed(() => Ol(e.textInput)), C = computed(() => Il(e.inline)), H = computed(() => Nl(e.config)), N = computed(() => El(e.highlight)), O = computed(() => Fl(e.weekNumbers)), y = computed(() => zl(e.timezone, e.emitTimezone)), F = computed(() => Vl(e.multiDates, e.multiDatesLimit)), S = computed(
    () => Wl({
      minDate: e.minDate,
      maxDate: e.maxDate,
      disabledDates: e.disabledDates,
      allowedDates: e.allowedDates,
      highlight: N.value,
      markers: e.markers,
      timezone: y.value,
      isSpecific: e.monthPicker || e.yearPicker || e.quarterPicker
    })
  ), X = computed(
    () => Ll(e.range, {
      minMaxRawRange: false,
      maxRange: e.maxRange,
      minRange: e.minRange,
      noDisabledRange: e.noDisabledRange,
      showLastInRange: e.showLastInRange,
      partialRange: e.partialRange,
      disableTimeRangeValidation: e.disableTimeRangeValidation,
      autoRange: e.autoRange,
      fixedStart: e.fixedStart,
      fixedEnd: e.fixedEnd
    })
  ), J = computed(() => Ul(e.ui));
  return {
    defaultedTransitions: L,
    defaultedMultiCalendars: c,
    defaultedStartTime: v,
    defaultedAriaLabels: h2,
    defaultedFilters: i,
    defaultedActionRow: m,
    defaultedPreviewFormat: E,
    defaultedTextInput: b,
    defaultedInline: C,
    defaultedConfig: H,
    defaultedHighlight: N,
    defaultedWeekNumbers: O,
    defaultedRange: X,
    propDates: S,
    defaultedTz: y,
    defaultedMultiDates: F,
    defaultedUI: J,
    getDefaultPattern: l,
    getDefaultStartTime: n
  };
}, jl = (e, t, l) => {
  const a = ref(), { defaultedTextInput: n, defaultedRange: c, defaultedTz: v, defaultedMultiDates: h2, getDefaultPattern: i } = Ce(t), L = ref(""), m = toRef(t, "format"), E = toRef(t, "formatLocale");
  watch(
    a,
    () => {
      typeof t.onInternalModelChange == "function" && e("internal-model-change", a.value, T(true));
    },
    { deep: true }
  ), watch(c, (s, oe) => {
    s.enabled !== oe.enabled && (a.value = null);
  }), watch(m, () => {
    z();
  });
  const b = (s) => v.value.timezone && v.value.convertModel ? Ze(s, v.value.timezone) : s, C = (s) => {
    if (v.value.timezone && v.value.convertModel) {
      const oe = dl(v.value.timezone);
      return addHours(s, oe);
    }
    return s;
  }, H = (s, oe, M = false) => _n(
    s,
    t.format,
    t.formatLocale,
    n.value.rangeSeparator,
    t.modelAuto,
    oe ?? i(),
    M
  ), N = (s) => s ? t.modelType ? ee(s) : {
    hours: getHours(s),
    minutes: getMinutes(s),
    seconds: t.enableSeconds ? getSeconds(s) : 0
  } : null, O = (s) => t.modelType ? ee(s) : { month: getMonth(s), year: getYear(s) }, y = (s) => Array.isArray(s) ? h2.value.enabled ? s.map((oe) => F(oe, setYear(U(), oe))) : ta(
    () => [
      setYear(U(), s[0]),
      s[1] ? setYear(U(), s[1]) : Rt(c.value.partialRange)
    ],
    c.value.enabled
  ) : setYear(U(), +s), F = (s, oe) => (typeof s == "string" || typeof s == "number") && t.modelType ? D(s) : oe, S = (s) => Array.isArray(s) ? [
    F(
      s[0],
      pt(null, +s[0].hours, +s[0].minutes, s[0].seconds)
    ),
    F(
      s[1],
      pt(null, +s[1].hours, +s[1].minutes, s[1].seconds)
    )
  ] : F(s, pt(null, s.hours, s.minutes, s.seconds)), X = (s) => {
    const oe = set(U(), { date: 1 });
    return Array.isArray(s) ? h2.value.enabled ? s.map((M) => F(M, dt(oe, +M.month, +M.year))) : ta(
      () => [
        F(s[0], dt(oe, +s[0].month, +s[0].year)),
        F(
          s[1],
          s[1] ? dt(oe, +s[1].month, +s[1].year) : Rt(c.value.partialRange)
        )
      ],
      c.value.enabled
    ) : F(s, dt(oe, +s.month, +s.year));
  }, J = (s) => {
    if (Array.isArray(s))
      return s.map((oe) => D(oe));
    throw new Error(Ka.dateArr("multi-dates"));
  }, le = (s) => {
    if (Array.isArray(s) && c.value.enabled) {
      const oe = s[0], M = s[1];
      return [
        U(Array.isArray(oe) ? oe[0] : null),
        U(Array.isArray(M) ? M[0] : null)
      ];
    }
    return U(s[0]);
  }, Q = (s) => t.modelAuto ? Array.isArray(s) ? [D(s[0]), D(s[1])] : t.autoApply ? [D(s)] : [D(s), null] : Array.isArray(s) ? ta(
    () => s[1] ? [
      D(s[0]),
      s[1] ? D(s[1]) : Rt(c.value.partialRange)
    ] : [D(s[0])],
    c.value.enabled
  ) : D(s), P = () => {
    Array.isArray(a.value) && c.value.enabled && a.value.length === 1 && a.value.push(Rt(c.value.partialRange));
  }, re = () => {
    const s = a.value;
    return [
      ee(s[0]),
      s[1] ? ee(s[1]) : Rt(c.value.partialRange)
    ];
  }, B = () => a.value[1] ? re() : ee(Ye(a.value[0])), j = () => (a.value || []).map((s) => ee(s)), fe = (s = false) => (s || P(), t.modelAuto ? B() : h2.value.enabled ? j() : Array.isArray(a.value) ? ta(() => re(), c.value.enabled) : ee(Ye(a.value))), ce = (s) => !s || Array.isArray(s) && !s.length ? null : t.timePicker ? S(Ye(s)) : t.monthPicker ? X(Ye(s)) : t.yearPicker ? y(Ye(s)) : h2.value.enabled ? J(Ye(s)) : t.weekPicker ? le(Ye(s)) : Q(Ye(s)), _ = (s) => {
    const oe = ce(s);
    Ea(Ye(oe)) ? (a.value = Ye(oe), z()) : (a.value = null, L.value = "");
  }, A = () => {
    const s = (oe) => format(oe, n.value.format);
    return `${s(a.value[0])} ${n.value.rangeSeparator} ${a.value[1] ? s(a.value[1]) : ""}`;
  }, k = () => l.value && a.value ? Array.isArray(a.value) ? A() : format(a.value, n.value.format) : H(a.value), o = () => a.value ? h2.value.enabled ? a.value.map((s) => H(s)).join("; ") : n.value.enabled && typeof n.value.format == "string" ? k() : H(a.value) : "", z = () => {
    !t.format || typeof t.format == "string" || n.value.enabled && typeof n.value.format == "string" ? L.value = o() : L.value = t.format(a.value);
  }, D = (s) => {
    if (t.utc) {
      const oe = new Date(s);
      return t.utc === "preserve" ? new Date(oe.getTime() + oe.getTimezoneOffset() * 6e4) : oe;
    }
    return t.modelType ? cl.includes(t.modelType) ? b(new Date(s)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? b(
      parse(s, i(), /* @__PURE__ */ new Date(), { locale: E.value })
    ) : b(
      parse(s, t.modelType, /* @__PURE__ */ new Date(), { locale: E.value })
    ) : b(new Date(s));
  }, ee = (s) => s ? t.utc ? Dl(s, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +C(s) : t.modelType === "iso" ? C(s).toISOString() : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? H(C(s)) : H(C(s), t.modelType, true) : C(s) : "", de = (s, oe = false, M = false) => {
    if (M)
      return s;
    if (e("update:model-value", s), v.value.emitTimezone && oe) {
      const me = Array.isArray(s) ? s.map((d) => Ze(Ye(d), v.value.emitTimezone)) : Ze(Ye(s), v.value.emitTimezone);
      e("update:model-timezone-value", me);
    }
  }, u = (s) => Array.isArray(a.value) ? h2.value.enabled ? a.value.map((oe) => s(oe)) : [
    s(a.value[0]),
    a.value[1] ? s(a.value[1]) : Rt(c.value.partialRange)
  ] : s(Ye(a.value)), I = () => {
    if (Array.isArray(a.value)) {
      const s = it(a.value[0], t.weekStart), oe = a.value[1] ? it(a.value[1], t.weekStart) : [];
      return [s.map((M) => U(M)), oe.map((M) => U(M))];
    }
    return it(a.value, t.weekStart).map((s) => U(s));
  }, se = (s, oe) => de(Ye(u(s)), false, oe), f = (s) => {
    const oe = I();
    return s ? oe : e("update:model-value", I());
  }, T = (s = false) => (s || z(), t.monthPicker ? se(O, s) : t.timePicker ? se(N, s) : t.yearPicker ? se(getYear, s) : t.weekPicker ? f(s) : de(fe(s), true, s));
  return {
    inputValue: L,
    internalModelValue: a,
    checkBeforeEmit: () => a.value ? c.value.enabled ? c.value.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : false,
    parseExternalModelValue: _,
    formatInputValue: z,
    emitModelValue: T
  };
}, Kl = (e, t) => {
  const { defaultedFilters: l, propDates: a } = Ce(e), { validateMonthYearInRange: n } = kt(e), c = (m, E) => {
    let b = m;
    return l.value.months.includes(getMonth(b)) ? (b = E ? addMonths(m, 1) : subMonths(m, 1), c(b, E)) : b;
  }, v = (m, E) => {
    let b = m;
    return l.value.years.includes(getYear(b)) ? (b = E ? addYears(m, 1) : subYears(m, 1), v(b, E)) : b;
  }, h2 = (m, E = false) => {
    const b = set(U(), { month: e.month, year: e.year });
    let C = m ? addMonths(b, 1) : subMonths(b, 1);
    e.disableYearSelect && (C = setYear(C, e.year));
    let H = getMonth(C), N = getYear(C);
    l.value.months.includes(H) && (C = c(C, m), H = getMonth(C), N = getYear(C)), l.value.years.includes(N) && (C = v(C, m), N = getYear(C)), n(H, N, m, e.preventMinMaxNavigation) && i(H, N, E);
  }, i = (m, E, b) => {
    t("update-month-year", { month: m, year: E, fromNav: b });
  }, L = computed(() => (m) => Cn(
    set(U(), { month: e.month, year: e.year }),
    a.value.maxDate,
    a.value.minDate,
    e.preventMinMaxNavigation,
    m
  ));
  return { handleMonthYearChange: h2, isDisabled: L, updateMonthYear: i };
}, ca = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: false },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: true },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: true },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: false },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: false },
  disableMonthYearSelect: { type: Boolean, default: false },
  disableYearSelect: { type: Boolean, default: false },
  menuClassName: { type: String, default: null },
  dayClass: {
    type: Function,
    default: null
  },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: true },
  autoApply: { type: Boolean, default: false },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: false },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: false },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: true },
  spaceConfirm: { type: Boolean, default: true },
  monthChangeOnArrows: { type: Boolean, default: true },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: false },
  preventMinMaxNavigation: { type: Boolean, default: false },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: false },
  weekPicker: { type: Boolean, default: false },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: false },
  disableTimeRangeValidation: { type: Boolean, default: false },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [Boolean, String, Object], default: null },
  teleportCenter: { type: Boolean, default: false },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: true },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: false },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: false },
  modelAuto: { type: Boolean, default: false },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: [Object, Boolean], default: false },
  partialRange: { type: Boolean, default: true },
  ignoreTimeValidation: { type: Boolean, default: false },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: false },
  clearable: { type: Boolean, default: true },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: false },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: false },
  fixedEnd: { type: Boolean, default: false },
  timePicker: { type: Boolean, default: false },
  enableSeconds: { type: Boolean, default: false },
  is24: { type: Boolean, default: true },
  noHoursOverlay: { type: Boolean, default: false },
  noMinutesOverlay: { type: Boolean, default: false },
  noSecondsOverlay: { type: Boolean, default: false },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: false },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  inline: { type: [Boolean, Object], default: false },
  textInput: { type: [Boolean, Object], default: false },
  noDisabledRange: { type: Boolean, default: false },
  sixWeeks: { type: [Boolean, String], default: false },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: false },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: true },
  timePickerInline: { type: Boolean, default: false },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: false },
  yearFirst: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  onInternalModelChange: { type: [Function, Object], default: null },
  enableMinutes: { type: Boolean, default: true },
  ui: { type: Object, default: () => ({}) }
}, rt = {
  ...ca,
  shadow: { type: Boolean, default: false },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: false },
  collapse: { type: Boolean, default: false },
  menuWrapRef: { type: Object, default: null },
  getInputRect: { type: Function, default: () => ({}) },
  isTextInputDate: { type: Boolean, default: false }
}, Gl = ["title"], Ql = ["disabled"], ql = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: false },
    calendarWidth: { type: Number, default: 0 },
    ...rt
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const l = t, a = e, {
      defaultedActionRow: n,
      defaultedPreviewFormat: c,
      defaultedMultiCalendars: v,
      defaultedTextInput: h2,
      defaultedInline: i,
      defaultedRange: L,
      defaultedMultiDates: m,
      getDefaultPattern: E
    } = Ce(a), { isTimeValid: b, isMonthValid: C } = kt(a), { buildMatrix: H } = bt(), N = ref(null), O = ref(null), y = ref(false), F = ref({}), S = ref(null), X = ref(null);
    onMounted(() => {
      a.arrowNavigation && H([Ie(N), Ie(O)], "actionRow"), J(), (void 0).addEventListener("resize", J);
    }), onUnmounted(() => {
      (void 0).removeEventListener("resize", J);
    });
    const J = () => {
      y.value = false, setTimeout(() => {
        var o, z;
        const A = (o = S.value) == null ? void 0 : o.getBoundingClientRect(), k = (z = X.value) == null ? void 0 : z.getBoundingClientRect();
        A && k && (F.value.maxWidth = `${k.width - A.width - 20}px`), y.value = true;
      }, 0);
    }, le = computed(() => L.value.enabled && !L.value.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : true), Q = computed(
      () => !b.value(a.internalModelValue) || !C.value(a.internalModelValue) || !le.value
    ), P = () => {
      const A = c.value;
      return a.timePicker || a.monthPicker, A(Ye(a.internalModelValue));
    }, re = () => {
      const A = a.internalModelValue;
      return v.value.count > 0 ? `${B(A[0])} - ${B(A[1])}` : [B(A[0]), B(A[1])];
    }, B = (A) => _n(
      A,
      c.value,
      a.formatLocale,
      h2.value.rangeSeparator,
      a.modelAuto,
      E()
    ), j = computed(() => !a.internalModelValue || !a.menuMount ? "" : typeof c.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? re() : m.value.enabled ? a.internalModelValue.map((A) => `${B(A)}`) : a.modelAuto ? `${B(a.internalModelValue[0])}` : `${B(a.internalModelValue[0])} -` : B(a.internalModelValue) : P()), fe = () => m.value.enabled ? "; " : " - ", ce = computed(
      () => Array.isArray(j.value) ? j.value.join(fe()) : j.value
    ), _ = () => {
      b.value(a.internalModelValue) && C.value(a.internalModelValue) && le.value ? l("select-date") : l("invalid-select");
    };
    return (A, k) => (openBlock(), createElementBlock("div", {
      ref_key: "actionRowRef",
      ref: X,
      class: "dp__action_row"
    }, [
      A.$slots["action-row"] ? renderSlot(A.$slots, "action-row", normalizeProps(mergeProps({ key: 0 }, {
        internalModelValue: A.internalModelValue,
        disabled: Q.value,
        selectDate: () => A.$emit("select-date"),
        closePicker: () => A.$emit("close-picker")
      }))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        unref(n).showPreview ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "dp__selection_preview",
          title: ce.value,
          style: normalizeStyle(F.value)
        }, [
          A.$slots["action-preview"] && y.value ? renderSlot(A.$slots, "action-preview", {
            key: 0,
            value: A.internalModelValue
          }) : createCommentVNode("", true),
          !A.$slots["action-preview"] && y.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(ce.value), 1)
          ], 64)) : createCommentVNode("", true)
        ], 12, Gl)) : createCommentVNode("", true),
        createElementVNode("div", {
          ref_key: "actionBtnContainer",
          ref: S,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          A.$slots["action-buttons"] ? renderSlot(A.$slots, "action-buttons", {
            key: 0,
            value: A.internalModelValue
          }) : createCommentVNode("", true),
          A.$slots["action-buttons"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            !unref(i).enabled && unref(n).showCancel ? (openBlock(), createElementBlock("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: N,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: k[0] || (k[0] = (o) => A.$emit("close-picker")),
              onKeydown: k[1] || (k[1] = (o) => unref(qe)(o, () => A.$emit("close-picker")))
            }, toDisplayString(A.cancelText), 545)) : createCommentVNode("", true),
            unref(n).showNow ? (openBlock(), createElementBlock("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: k[2] || (k[2] = (o) => A.$emit("select-now")),
              onKeydown: k[3] || (k[3] = (o) => unref(qe)(o, () => A.$emit("select-now")))
            }, toDisplayString(A.nowButtonLabel), 33)) : createCommentVNode("", true),
            unref(n).showSelect ? (openBlock(), createElementBlock("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: O,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: Q.value,
              "data-test": "select-button",
              onKeydown: k[4] || (k[4] = (o) => unref(qe)(o, () => _())),
              onClick: _
            }, toDisplayString(A.selectText), 41, Ql)) : createCommentVNode("", true)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), Xl = { class: "dp__selection_grid_header" }, Jl = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], Zl = ["aria-label"], qt = /* @__PURE__ */ defineComponent({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: l }) {
    const { setSelectionGrid: a, buildMultiLevelMatrix: n, setMonthPicker: c } = bt(), v = l, h2 = e, { defaultedAriaLabels: i, defaultedTextInput: L, defaultedConfig: m } = Ce(
      h2
    ), { hideNavigationButtons: E } = ma(), b = ref(false), C = ref(null), H = ref(null), N = ref([]), O = ref(), y = ref(null), F = ref(0), S = ref(null);
    onBeforeUpdate(() => {
      C.value = null;
    }), onMounted(() => {
      nextTick().then(() => j()), h2.noOverlayFocus || J(), X(true);
    }), onUnmounted(() => X(false));
    const X = (u) => {
      var I;
      h2.arrowNavigation && ((I = h2.headerRefs) != null && I.length ? c(u) : a(u));
    }, J = () => {
      var I;
      const u = Ie(H);
      u && (L.value.enabled || (C.value ? (I = C.value) == null || I.focus({ preventScroll: true }) : u.focus({ preventScroll: true })), b.value = u.clientHeight < u.scrollHeight);
    }, le = computed(
      () => ({
        dp__overlay: true,
        "dp--overlay-absolute": !h2.useRelative,
        "dp--overlay-relative": h2.useRelative
      })
    ), Q = computed(
      () => h2.useRelative ? { height: `${h2.height}px`, width: "260px" } : void 0
    ), P = computed(() => ({
      dp__overlay_col: true
    })), re = computed(
      () => ({
        dp__btn: true,
        dp__button: true,
        dp__overlay_action: true,
        dp__over_action_scroll: b.value,
        dp__button_bottom: h2.isLast
      })
    ), B = computed(() => {
      var u, I;
      return {
        dp__overlay_container: true,
        dp__container_flex: ((u = h2.items) == null ? void 0 : u.length) <= 6,
        dp__container_block: ((I = h2.items) == null ? void 0 : I.length) > 6
      };
    });
    watch(
      () => h2.items,
      () => j(false),
      { deep: true }
    );
    const j = (u = true) => {
      nextTick().then(() => {
        const I = Ie(C), se = Ie(H), f = Ie(y), T = Ie(S), G = f ? f.getBoundingClientRect().height : 0;
        se && (se.getBoundingClientRect().height ? F.value = se.getBoundingClientRect().height - G : F.value = m.value.modeHeight - G), I && T && u && (T.scrollTop = I.offsetTop - T.offsetTop - (F.value / 2 - I.getBoundingClientRect().height) - G);
      });
    }, fe = (u) => {
      u.disabled || v("selected", u.value);
    }, ce = () => {
      v("toggle"), v("reset-flow");
    }, _ = () => {
      h2.escClose && ce();
    }, A = (u, I, se, f) => {
      u && ((I.active || I.value === h2.focusValue) && (C.value = u), h2.arrowNavigation && (Array.isArray(N.value[se]) ? N.value[se][f] = u : N.value[se] = [u], k()));
    }, k = () => {
      var I, se;
      const u = (I = h2.headerRefs) != null && I.length ? [h2.headerRefs].concat(N.value) : N.value.concat([h2.skipButtonRef ? [] : [y.value]]);
      n(Ye(u), (se = h2.headerRefs) != null && se.length ? "monthPicker" : "selectionGrid");
    }, o = (u) => {
      h2.arrowNavigation || yt(u, m.value, true);
    }, z = (u) => {
      O.value = u, v("hover-value", u);
    }, D = () => {
      if (ce(), !h2.isLast) {
        const u = bl(h2.menuWrapRef ?? null, "action-row");
        if (u) {
          const I = $n(u);
          I == null || I.focus();
        }
      }
    }, ee = (u) => {
      switch (u.key) {
        case Re.esc:
          return _();
        case Re.arrowLeft:
          return o(u);
        case Re.arrowRight:
          return o(u);
        case Re.arrowUp:
          return o(u);
        case Re.arrowDown:
          return o(u);
        default:
          return;
      }
    }, de = (u) => {
      if (u.key === Re.enter)
        return ce();
      if (u.key === Re.tab)
        return D();
    };
    return t({ focusGrid: J }), (u, I) => {
      var se;
      return openBlock(), createElementBlock("div", {
        ref_key: "gridWrapRef",
        ref: H,
        class: normalizeClass(le.value),
        style: normalizeStyle(Q.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: ee,
        onClick: I[0] || (I[0] = withModifiers(() => {
        }, ["prevent"]))
      }, [
        createElementVNode("div", {
          ref_key: "containerRef",
          ref: S,
          class: normalizeClass(B.value),
          role: "grid",
          style: normalizeStyle({ "--dp-overlay-height": `${F.value}px` })
        }, [
          createElementVNode("div", Xl, [
            renderSlot(u.$slots, "header")
          ]),
          u.$slots.overlay ? renderSlot(u.$slots, "overlay", { key: 0 }) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(u.items, (f, T) => (openBlock(), createElementBlock("div", {
            key: T,
            class: normalizeClass(["dp__overlay_row", { dp__flex_row: u.items.length >= 3 }]),
            role: "row"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(f, (G, s) => (openBlock(), createElementBlock("div", {
              key: G.value,
              ref_for: true,
              ref: (oe) => A(oe, G, T, s),
              role: "gridcell",
              class: normalizeClass(P.value),
              "aria-selected": G.active || void 0,
              "aria-disabled": G.disabled || void 0,
              tabindex: "0",
              "data-test": G.text,
              onClick: withModifiers((oe) => fe(G), ["prevent"]),
              onKeydown: (oe) => unref(qe)(oe, () => fe(G), true),
              onMouseover: (oe) => z(G.value)
            }, [
              createElementVNode("div", {
                class: normalizeClass(G.className)
              }, [
                u.$slots.item ? renderSlot(u.$slots, "item", {
                  key: 0,
                  item: G
                }) : createCommentVNode("", true),
                u.$slots.item ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(G.text), 1)
                ], 64))
              ], 2)
            ], 42, Jl))), 128))
          ], 2))), 128))
        ], 6),
        u.$slots["button-icon"] ? withDirectives((openBlock(), createElementBlock("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: y,
          type: "button",
          "aria-label": (se = unref(i)) == null ? void 0 : se.toggleOverlay,
          class: normalizeClass(re.value),
          tabindex: "0",
          onClick: ce,
          onKeydown: de
        }, [
          renderSlot(u.$slots, "button-icon")
        ], 42, Zl)), [
          [vShow, !unref(E)(u.hideNavigation, u.type)]
        ]) : createCommentVNode("", true)
      ], 38);
    };
  }
}), fa = /* @__PURE__ */ defineComponent({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, l = computed(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), a = computed(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (n, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass({
        dp__menu_inner: !n.stretch,
        "dp--menu--inner-stretched": n.stretch,
        dp__flex_display: n.multiCalendars > 0,
        "dp--flex-display-collapsed": n.collapse
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(l.value, (v, h2) => (openBlock(), createElementBlock("div", {
        key: v,
        class: normalizeClass(a.value)
      }, [
        renderSlot(n.$slots, "default", {
          instance: v,
          index: h2
        })
      ], 2))), 128))
    ], 2));
  }
}), xl = ["aria-label", "aria-disabled"], Wt = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const l = t, a = ref(null);
    return onMounted(() => l("set-ref", a)), (n, c) => (openBlock(), createElementBlock("button", {
      ref_key: "elRef",
      ref: a,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": n.ariaLabel,
      "aria-disabled": n.disabled || void 0,
      onClick: c[0] || (c[0] = (v) => n.$emit("activate")),
      onKeydown: c[1] || (c[1] = (v) => unref(qe)(v, () => n.$emit("activate"), true))
    }, [
      createElementVNode("span", {
        class: normalizeClass(["dp__inner_nav", { dp__inner_nav_disabled: n.disabled }])
      }, [
        renderSlot(n.$slots, "default")
      ], 2)
    ], 40, xl));
  }
}), er = { class: "dp--year-mode-picker" }, tr = ["aria-label", "data-test"], In = /* @__PURE__ */ defineComponent({
  __name: "YearModePicker",
  props: {
    ...rt,
    showYearPicker: { type: Boolean, default: false },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => false }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const l = t, a = e, { showRightIcon: n, showLeftIcon: c } = ma(), { defaultedConfig: v, defaultedMultiCalendars: h2, defaultedAriaLabels: i, defaultedTransitions: L, defaultedUI: m } = Ce(a), { showTransition: E, transitionName: b } = Xt(L), C = (O = false, y) => {
      l("toggle-year-picker", { flow: O, show: y });
    }, H = (O) => {
      l("year-select", O);
    }, N = (O = false) => {
      l("handle-year", O);
    };
    return (O, y) => {
      var F, S, X, J, le;
      return openBlock(), createElementBlock("div", er, [
        unref(c)(unref(h2), e.instance) ? (openBlock(), createBlock(Wt, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (F = unref(i)) == null ? void 0 : F.prevYear,
          disabled: e.isDisabled(false),
          class: normalizeClass((S = unref(m)) == null ? void 0 : S.navBtnPrev),
          onActivate: y[0] || (y[0] = (Q) => N(false))
        }, {
          default: withCtx(() => [
            O.$slots["arrow-left"] ? renderSlot(O.$slots, "arrow-left", { key: 0 }) : createCommentVNode("", true),
            O.$slots["arrow-left"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(La), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : createCommentVNode("", true),
        createElementVNode("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (X = unref(i)) == null ? void 0 : X.openYearsOverlay,
          "data-test": `year-mode-btn-${e.instance}`,
          onClick: y[1] || (y[1] = () => C(false)),
          onKeydown: y[2] || (y[2] = withKeys(() => C(false), ["enter"]))
        }, [
          O.$slots.year ? renderSlot(O.$slots, "year", {
            key: 0,
            year: e.year
          }) : createCommentVNode("", true),
          O.$slots.year ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(e.year), 1)
          ], 64))
        ], 40, tr),
        unref(n)(unref(h2), e.instance) ? (openBlock(), createBlock(Wt, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (J = unref(i)) == null ? void 0 : J.nextYear,
          disabled: e.isDisabled(true),
          class: normalizeClass((le = unref(m)) == null ? void 0 : le.navBtnNext),
          onActivate: y[3] || (y[3] = (Q) => N(true))
        }, {
          default: withCtx(() => [
            O.$slots["arrow-right"] ? renderSlot(O.$slots, "arrow-right", { key: 0 }) : createCommentVNode("", true),
            O.$slots["arrow-right"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(za), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : createCommentVNode("", true),
        createVNode(Transition, {
          name: unref(b)(e.showYearPicker),
          css: unref(E)
        }, {
          default: withCtx(() => [
            e.showYearPicker ? (openBlock(), createBlock(qt, {
              key: 0,
              items: e.items,
              "text-input": O.textInput,
              "esc-close": O.escClose,
              config: O.config,
              "is-last": O.autoApply && !unref(v).keepActionRow,
              "hide-navigation": O.hideNavigation,
              "aria-labels": O.ariaLabels,
              type: "year",
              onToggle: C,
              onSelected: y[4] || (y[4] = (Q) => H(Q))
            }, createSlots({
              "button-icon": withCtx(() => [
                O.$slots["calendar-icon"] ? renderSlot(O.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                O.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Et), { key: 1 }))
              ]),
              _: 2
            }, [
              O.$slots["year-overlay-value"] ? {
                name: "item",
                fn: withCtx(({ item: Q }) => [
                  renderSlot(O.$slots, "year-overlay-value", {
                    text: Q.text,
                    value: Q.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels"])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), qa = (e, t, l) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((a) => De(e, a))) {
      const a = t.value.filter((n) => !De(n, e));
      t.value = a.length ? a : null;
    } else
      (l && +l > t.value.length || !l) && t.value.push(e);
  else
    t.value = [e];
}, Xa = (e, t, l) => {
  let a = e.value ? e.value.slice() : [];
  return a.length === 2 && a[1] !== null && (a = []), a.length ? _e(t, a[0]) ? (a.unshift(t), l("range-start", a[0]), l("range-start", a[1])) : (a[1] = t, l("range-end", t)) : (a = [t], l("range-start", t)), a;
}, va = (e, t, l, a) => {
  e && (e[0] && e[1] && l && t("auto-apply"), e[0] && !e[1] && a && l && t("auto-apply"));
}, Nn = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => Ze(U(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = Ze(U(e.value), e.timezone));
}, En = (e, t, l, a) => Array.isArray(t.value) && (t.value.length === 2 || t.value.length === 1 && a.value.partialRange) ? a.value.fixedStart && (Be(e, t.value[0]) || De(e, t.value[0])) ? [t.value[0], e] : a.value.fixedEnd && (_e(e, t.value[1]) || De(e, t.value[1])) ? [e, t.value[1]] : (l("invalid-fixed-range", e), t.value) : [], Fn = ({
  multiCalendars: e,
  range: t,
  highlight: l,
  propDates: a,
  calendars: n,
  modelValue: c,
  props: v,
  filters: h2,
  year: i,
  month: L,
  emit: m
}) => {
  const E = computed(() => ja(v.yearRange, v.locale, v.reverseYears)), b = ref([false]), C = computed(() => (B, j) => {
    const fe = set(lt(/* @__PURE__ */ new Date()), {
      month: L.value(B),
      year: i.value(B)
    }), ce = j ? endOfYear(fe) : startOfYear(fe);
    return Cn(
      ce,
      a.value.maxDate,
      a.value.minDate,
      v.preventMinMaxNavigation,
      j
    );
  }), H = () => Array.isArray(c.value) && e.value.solo && c.value[1], N = () => {
    for (let B = 0; B < e.value.count; B++)
      if (B === 0)
        n.value[B] = n.value[0];
      else if (B === e.value.count - 1 && H())
        n.value[B] = {
          month: getMonth(c.value[1]),
          year: getYear(c.value[1])
        };
      else {
        const j = set(U(), n.value[B - 1]);
        n.value[B] = { month: getMonth(j), year: getYear(addYears(j, 1)) };
      }
  }, O = (B) => {
    if (!B)
      return N();
    const j = set(U(), n.value[B]);
    return n.value[0].year = getYear(subYears(j, e.value.count - 1)), N();
  }, y = (B, j) => {
    const fe = differenceInYears(j, B);
    return t.value.showLastInRange && fe > 1 ? j : B;
  }, F = (B) => v.focusStartDate || e.value.solo ? B[0] : B[1] ? y(B[0], B[1]) : B[0], S = () => {
    if (c.value) {
      const B = Array.isArray(c.value) ? F(c.value) : c.value;
      n.value[0] = { month: getMonth(B), year: getYear(B) };
    }
  }, X = () => {
    S(), e.value.count && N();
  };
  watch(c, (B, j) => {
    v.isTextInputDate && JSON.stringify(B ?? {}) !== JSON.stringify(j ?? {}) && X();
  }), onMounted(() => {
    X();
  });
  const J = (B, j) => {
    n.value[j].year = B, m("update-month-year", { instance: j, year: B, month: n.value[j].month }), e.value.count && !e.value.solo && O(j);
  }, le = computed(() => (B) => Yt(E.value, (j) => {
    var A;
    const fe = i.value(B) === j.value, ce = Gt(
      j.value,
      It(a.value.minDate),
      It(a.value.maxDate)
    ) || ((A = h2.value.years) == null ? void 0 : A.includes(i.value(B))), _ = Qa(l.value, j.value);
    return { active: fe, disabled: ce, highlighted: _ };
  })), Q = (B, j) => {
    J(B, j), re(j);
  }, P = (B, j = false) => {
    if (!C.value(B, j)) {
      const fe = j ? i.value(B) + 1 : i.value(B) - 1;
      J(fe, B);
    }
  }, re = (B, j = false, fe) => {
    j || m("reset-flow"), fe !== void 0 ? b.value[B] = fe : b.value[B] = !b.value[B], b.value[B] ? m("overlay-toggle", { open: true, overlay: He.year }) : (m("overlay-closed"), m("overlay-toggle", { open: false, overlay: He.year }));
  };
  return {
    isDisabled: C,
    groupedYears: le,
    showYearPicker: b,
    selectYear: J,
    toggleYearPicker: re,
    handleYearSelect: Q,
    handleYear: P
  };
}, ar = (e, t) => {
  const {
    defaultedMultiCalendars: l,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: c,
    defaultedRange: v,
    defaultedHighlight: h2,
    propDates: i,
    defaultedTz: L,
    defaultedFilters: m,
    defaultedMultiDates: E
  } = Ce(e), b = () => {
    e.isTextInputDate && X(getYear(U(e.startDate)), 0);
  }, { modelValue: C, year: H, month: N, calendars: O } = Jt(e, t, b), y = computed(() => Dn(e.formatLocale, e.locale, e.monthNameFormat)), F = ref(null), { checkMinMaxRange: S } = kt(e), {
    selectYear: X,
    groupedYears: J,
    showYearPicker: le,
    toggleYearPicker: Q,
    handleYearSelect: P,
    handleYear: re,
    isDisabled: B
  } = Fn({
    modelValue: C,
    multiCalendars: l,
    range: v,
    highlight: h2,
    calendars: O,
    year: H,
    propDates: i,
    month: N,
    filters: m,
    props: e,
    emit: t
  });
  onMounted(() => {
    e.startDate && (C.value && e.focusStartDate || !C.value) && X(getYear(U(e.startDate)), 0);
  });
  const j = (T) => T ? { month: getMonth(T), year: getYear(T) } : { month: null, year: null }, fe = () => C.value ? Array.isArray(C.value) ? C.value.map((T) => j(T)) : j(C.value) : j(), ce = (T, G) => {
    const s = O.value[T], oe = fe();
    return Array.isArray(oe) ? oe.some((M) => M.year === (s == null ? void 0 : s.year) && M.month === G) : (s == null ? void 0 : s.year) === oe.year && G === oe.month;
  }, _ = (T, G, s) => {
    var M, me;
    const oe = fe();
    return Array.isArray(oe) ? H.value(G) === ((M = oe[s]) == null ? void 0 : M.year) && T === ((me = oe[s]) == null ? void 0 : me.month) : false;
  }, A = (T, G) => {
    if (v.value.enabled) {
      const s = fe();
      if (Array.isArray(C.value) && Array.isArray(s)) {
        const oe = _(T, G, 0) || _(T, G, 1), M = dt(lt(U()), T, H.value(G));
        return da(C.value, F.value, M) && !oe;
      }
      return false;
    }
    return false;
  }, k = computed(() => (T) => Yt(y.value, (G) => {
    var d;
    const s = ce(T, G.value), oe = Gt(
      G.value,
      Tn(H.value(T), i.value.minDate),
      Sn(H.value(T), i.value.maxDate)
    ) || Sl(i.value.disabledDates, H.value(T)).includes(G.value) || ((d = m.value.months) == null ? void 0 : d.includes(G.value)), M = A(G.value, T), me = On(h2.value, G.value, H.value(T));
    return { active: s, disabled: oe, isBetween: M, highlighted: me };
  })), o = (T, G) => dt(lt(U()), T, H.value(G)), z = (T, G) => {
    const s = C.value ? C.value : lt(/* @__PURE__ */ new Date());
    C.value = dt(s, T, H.value(G)), t("auto-apply"), t("update-flow-step");
  }, D = (T, G) => {
    const s = o(T, G);
    v.value.fixedEnd || v.value.fixedStart ? C.value = En(s, C, t, v) : C.value ? S(s, C.value) && (C.value = Xa(C, o(T, G), t)) : C.value = [o(T, G)], nextTick().then(() => {
      va(C.value, t, e.autoApply, e.modelAuto);
    });
  }, ee = (T, G) => {
    qa(o(T, G), C, E.value.limit), t("auto-apply", true);
  }, de = (T, G) => (O.value[G].month = T, I(G, O.value[G].year, T), E.value.enabled ? ee(T, G) : v.value.enabled ? D(T, G) : z(T, G)), u = (T, G) => {
    X(T, G), I(G, T, null);
  }, I = (T, G, s) => {
    let oe = s;
    if (!oe && oe !== 0) {
      const M = fe();
      oe = Array.isArray(M) ? M[T].month : M.month;
    }
    t("update-month-year", { instance: T, year: G, month: oe });
  };
  return {
    groupedMonths: k,
    groupedYears: J,
    year: H,
    isDisabled: B,
    defaultedMultiCalendars: l,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: c,
    showYearPicker: le,
    modelValue: C,
    presetDate: (T, G) => {
      Nn({
        value: T,
        modelValue: C,
        range: v.value.enabled,
        timezone: G ? void 0 : L.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (T, G) => {
      F.value = o(T, G);
    },
    selectMonth: de,
    selectYear: u,
    toggleYearPicker: Q,
    handleYearSelect: P,
    handleYear: re,
    getModelMonthYear: fe
  };
}, nr = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...rt
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = useSlots(), c = Je(n, "yearMode"), v = e;
    onMounted(() => {
      v.shadow || a("mount", null);
    });
    const {
      groupedMonths: h2,
      groupedYears: i,
      year: L,
      isDisabled: m,
      defaultedMultiCalendars: E,
      defaultedConfig: b,
      showYearPicker: C,
      modelValue: H,
      presetDate: N,
      setHoverDate: O,
      selectMonth: y,
      selectYear: F,
      toggleYearPicker: S,
      handleYearSelect: X,
      handleYear: J,
      getModelMonthYear: le
    } = ar(v, a);
    return t({ getSidebarProps: () => ({
      modelValue: H,
      year: L,
      getModelMonthYear: le,
      selectMonth: y,
      selectYear: F,
      handleYear: J
    }), presetDate: N, toggleYearPicker: (P) => S(0, P) }), (P, re) => (openBlock(), createBlock(fa, {
      "multi-calendars": unref(E).count,
      collapse: P.collapse,
      stretch: ""
    }, {
      default: withCtx(({ instance: B }) => [
        P.$slots["top-extra"] ? renderSlot(P.$slots, "top-extra", {
          key: 0,
          value: P.internalModelValue
        }) : createCommentVNode("", true),
        P.$slots["month-year"] ? renderSlot(P.$slots, "month-year", normalizeProps(mergeProps({ key: 1 }, {
          year: unref(L),
          months: unref(h2)(B),
          years: unref(i)(B),
          selectMonth: unref(y),
          selectYear: unref(F),
          instance: B
        }))) : (openBlock(), createBlock(qt, {
          key: 2,
          items: unref(h2)(B),
          "arrow-navigation": P.arrowNavigation,
          "is-last": P.autoApply && !unref(b).keepActionRow,
          "esc-close": P.escClose,
          height: unref(b).modeHeight,
          config: P.config,
          "no-overlay-focus": !!(P.noOverlayFocus || P.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (j) => unref(y)(j, B),
          onHoverValue: (j) => unref(O)(j, B)
        }, createSlots({
          header: withCtx(() => [
            createVNode(In, mergeProps(P.$props, {
              items: unref(i)(B),
              instance: B,
              "show-year-picker": unref(C)[B],
              year: unref(L)(B),
              "is-disabled": (j) => unref(m)(B, j),
              onHandleYear: (j) => unref(J)(B, j),
              onYearSelect: (j) => unref(X)(j, B),
              onToggleYearPicker: (j) => unref(S)(B, j == null ? void 0 : j.flow, j == null ? void 0 : j.show)
            }), createSlots({ _: 2 }, [
              renderList(unref(c), (j, fe) => ({
                name: j,
                fn: withCtx((ce) => [
                  renderSlot(P.$slots, j, normalizeProps(guardReactiveProps(ce)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, [
          P.$slots["month-overlay-value"] ? {
            name: "item",
            fn: withCtx(({ item: j }) => [
              renderSlot(P.$slots, "month-overlay-value", {
                text: j.text,
                value: j.value
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), lr = (e, t) => {
  const l = () => {
    e.isTextInputDate && (m.value = getYear(U(e.startDate)));
  }, { modelValue: a } = Jt(e, t, l), n = ref(null), { defaultedHighlight: c, defaultedMultiDates: v, defaultedFilters: h2, defaultedRange: i, propDates: L } = Ce(e), m = ref();
  onMounted(() => {
    e.startDate && (a.value && e.focusStartDate || !a.value) && (m.value = getYear(U(e.startDate)));
  });
  const E = (y) => Array.isArray(a.value) ? a.value.some((F) => getYear(F) === y) : a.value ? getYear(a.value) === y : false, b = (y) => i.value.enabled && Array.isArray(a.value) ? da(a.value, n.value, H(y)) : false, C = computed(() => Yt(ja(e.yearRange, e.locale, e.reverseYears), (y) => {
    const F = E(y.value), S = Gt(
      y.value,
      It(L.value.minDate),
      It(L.value.maxDate)
    ) || h2.value.years.includes(y.value), X = b(y.value) && !F, J = Qa(c.value, y.value);
    return { active: F, disabled: S, isBetween: X, highlighted: J };
  })), H = (y) => setYear(lt(startOfYear(/* @__PURE__ */ new Date())), y);
  return {
    groupedYears: C,
    modelValue: a,
    focusYear: m,
    setHoverValue: (y) => {
      n.value = setYear(lt(/* @__PURE__ */ new Date()), y);
    },
    selectYear: (y) => {
      var F;
      if (t("update-month-year", { instance: 0, year: y }), v.value.enabled)
        return a.value ? Array.isArray(a.value) && (((F = a.value) == null ? void 0 : F.map((X) => getYear(X))).includes(y) ? a.value = a.value.filter((X) => getYear(X) !== y) : a.value.push(setYear(Ke(U()), y))) : a.value = [setYear(Ke(startOfYear(U())), y)], t("auto-apply", true);
      i.value.enabled ? (a.value = Xa(a, H(y), t), nextTick().then(() => {
        va(a.value, t, e.autoApply, e.modelAuto);
      })) : (a.value = H(y), t("auto-apply"));
    }
  };
}, rr = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...rt
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { groupedYears: c, modelValue: v, focusYear: h2, selectYear: i, setHoverValue: L } = lr(n, a), { defaultedConfig: m } = Ce(n);
    return t({ getSidebarProps: () => ({
      modelValue: v,
      selectYear: i
    }) }), (b, C) => (openBlock(), createElementBlock("div", null, [
      b.$slots["top-extra"] ? renderSlot(b.$slots, "top-extra", {
        key: 0,
        value: b.internalModelValue
      }) : createCommentVNode("", true),
      b.$slots["month-year"] ? renderSlot(b.$slots, "month-year", normalizeProps(mergeProps({ key: 1 }, {
        years: unref(c),
        selectYear: unref(i)
      }))) : (openBlock(), createBlock(qt, {
        key: 2,
        items: unref(c),
        "is-last": b.autoApply && !unref(m).keepActionRow,
        height: unref(m).modeHeight,
        config: b.config,
        "no-overlay-focus": !!(b.noOverlayFocus || b.textInput),
        "focus-value": unref(h2),
        type: "year",
        "use-relative": "",
        onSelected: unref(i),
        onHoverValue: unref(L)
      }, createSlots({ _: 2 }, [
        b.$slots["year-overlay-value"] ? {
          name: "item",
          fn: withCtx(({ item: H }) => [
            renderSlot(b.$slots, "year-overlay-value", {
              text: H.text,
              value: H.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), or = {
  key: 0,
  class: "dp__time_input"
}, sr = ["data-test", "aria-label", "onKeydown", "onClick", "onMousedown"], ur = /* @__PURE__ */ createElementVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), ir = /* @__PURE__ */ createElementVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), dr = ["aria-label", "disabled", "data-test", "onKeydown", "onClick"], cr = ["data-test", "aria-label", "onKeydown", "onClick", "onMousedown"], fr = /* @__PURE__ */ createElementVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), vr = /* @__PURE__ */ createElementVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), mr = { key: 0 }, gr = ["aria-label"], yr = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => false },
    ...rt
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "overlay-opened",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { setTimePickerElements: c, setTimePickerBackRef: v } = bt(), { defaultedAriaLabels: h2, defaultedTransitions: i, defaultedFilters: L, defaultedConfig: m, defaultedRange: E } = Ce(n), { transitionName: b, showTransition: C } = Xt(i), H = reactive({
      hours: false,
      minutes: false,
      seconds: false
    }), N = ref("AM"), O = ref(null), y = ref([]), F = ref();
    onMounted(() => {
      a("mounted");
    });
    const S = (d) => set(/* @__PURE__ */ new Date(), {
      hours: d.hours,
      minutes: d.minutes,
      seconds: n.enableSeconds ? d.seconds : 0,
      milliseconds: 0
    }), X = computed(
      () => (d) => k(d, n[d]) || le(d, n[d])
    ), J = computed(() => ({ hours: n.hours, minutes: n.minutes, seconds: n.seconds })), le = (d, Y) => E.value.enabled && !E.value.disableTimeRangeValidation ? !n.validateTime(d, Y) : false, Q = (d, Y) => {
      if (E.value.enabled && !E.value.disableTimeRangeValidation) {
        const V = Y ? +n[`${d}Increment`] : -+n[`${d}Increment`], R = n[d] + V;
        return !n.validateTime(d, R);
      }
      return false;
    }, P = computed(() => (d) => !de(+n[d] + +n[`${d}Increment`], d) || Q(d, true)), re = computed(() => (d) => !de(+n[d] - +n[`${d}Increment`], d) || Q(d, false)), B = (d, Y) => add(set(U(), d), Y), j = (d, Y) => sub(set(U(), d), Y), fe = computed(
      () => ({
        dp__time_col: true,
        dp__time_col_block: !n.timePickerInline,
        dp__time_col_reg_block: !n.enableSeconds && n.is24 && !n.timePickerInline,
        dp__time_col_reg_inline: !n.enableSeconds && n.is24 && n.timePickerInline,
        dp__time_col_reg_with_button: !n.enableSeconds && !n.is24,
        dp__time_col_sec: n.enableSeconds && n.is24,
        dp__time_col_sec_with_button: n.enableSeconds && !n.is24
      })
    ), ce = computed(() => {
      const d = [{ type: "hours" }];
      return n.enableMinutes && d.push({ type: "", separator: true }, {
        type: "minutes"
      }), n.enableSeconds && d.push({ type: "", separator: true }, {
        type: "seconds"
      }), d;
    }), _ = computed(() => ce.value.filter((d) => !d.separator)), A = computed(() => (d) => {
      if (d === "hours") {
        const Y = G(+n.hours);
        return { text: Y < 10 ? `0${Y}` : `${Y}`, value: Y };
      }
      return { text: n[d] < 10 ? `0${n[d]}` : `${n[d]}`, value: n[d] };
    }), k = (d, Y) => {
      var R;
      if (!n.disabledTimesConfig)
        return false;
      const V = n.disabledTimesConfig(n.order, d === "hours" ? Y : void 0);
      return V[d] ? !!((R = V[d]) != null && R.includes(Y)) : true;
    }, o = (d, Y) => Y !== "hours" || N.value === "AM" ? d : d + 12, z = (d) => {
      const Y = n.is24 ? 24 : 12, V = d === "hours" ? Y : 60, R = +n[`${d}GridIncrement`], te = d === "hours" && !n.is24 ? R : 0, ue = [];
      for (let w = te; w < V; w += R)
        ue.push({ value: n.is24 ? w : o(w, d), text: w < 10 ? `0${w}` : `${w}` });
      return d === "hours" && !n.is24 && ue.unshift({ value: N.value === "PM" ? 12 : 0, text: "12" }), Yt(ue, (w) => ({ active: false, disabled: L.value.times[d].includes(w.value) || !de(w.value, d) || k(d, w.value) || le(d, w.value) }));
    }, D = (d) => d >= 0 ? d : 59, ee = (d) => d >= 0 ? d : 23, de = (d, Y) => {
      const V = n.minTime ? S(Aa(n.minTime)) : null, R = n.maxTime ? S(Aa(n.maxTime)) : null, te = S(
        Aa(
          J.value,
          Y,
          Y === "minutes" || Y === "seconds" ? D(d) : ee(d)
        )
      );
      return V && R ? (isBefore(te, R) || isEqual(te, R)) && (isAfter(te, V) || isEqual(te, V)) : V ? isAfter(te, V) || isEqual(te, V) : R ? isBefore(te, R) || isEqual(te, R) : true;
    }, u = (d) => n[`no${d[0].toUpperCase() + d.slice(1)}Overlay`], I = (d) => {
      u(d) || (H[d] = !H[d], H[d] ? a("overlay-opened", d) : a("overlay-closed", d));
    }, se = (d) => d === "hours" ? getHours : d === "minutes" ? getMinutes : getSeconds, f = () => {
      F.value && clearTimeout(F.value);
    }, T = (d, Y = true, V) => {
      const R = Y ? B : j, te = Y ? +n[`${d}Increment`] : -+n[`${d}Increment`];
      de(+n[d] + te, d) && a(
        `update:${d}`,
        se(d)(R({ [d]: +n[d] }, { [d]: +n[`${d}Increment`] }))
      ), !(V != null && V.keyboard) && m.value.timeArrowHoldThreshold && (F.value = setTimeout(() => {
        T(d, Y);
      }, m.value.timeArrowHoldThreshold));
    }, G = (d) => n.is24 ? d : (d >= 12 ? N.value = "PM" : N.value = "AM", ml(d)), s = () => {
      N.value === "PM" ? (N.value = "AM", a("update:hours", n.hours - 12)) : (N.value = "PM", a("update:hours", n.hours + 12)), a("am-pm-change", N.value);
    }, oe = (d) => {
      H[d] = true;
    }, M = (d, Y, V) => {
      if (d && n.arrowNavigation) {
        Array.isArray(y.value[Y]) ? y.value[Y][V] = d : y.value[Y] = [d];
        const R = y.value.reduce(
          (te, ue) => ue.map((w, x) => [...te[x] || [], ue[x]]),
          []
        );
        v(n.closeTimePickerBtn), O.value && (R[1] = R[1].concat(O.value)), c(R, n.order);
      }
    }, me = (d, Y) => (I(d), a(`update:${d}`, Y));
    return t({ openChildCmp: oe }), (d, Y) => {
      var V;
      return d.disabled ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", or, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(ce.value, (R, te) => {
          var ue, w, x;
          return openBlock(), createElementBlock("div", {
            key: te,
            class: normalizeClass(fe.value)
          }, [
            R.separator ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(" : ")
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createElementVNode("button", {
                ref_for: true,
                ref: (pe) => M(pe, te, 0),
                type: "button",
                class: normalizeClass({
                  dp__btn: true,
                  dp__inc_dec_button: !d.timePickerInline,
                  dp__inc_dec_button_inline: d.timePickerInline,
                  dp__tp_inline_btn_top: d.timePickerInline,
                  dp__inc_dec_button_disabled: P.value(R.type)
                }),
                "data-test": `${R.type}-time-inc-btn-${n.order}`,
                "aria-label": (ue = unref(h2)) == null ? void 0 : ue.incrementValue(R.type),
                tabindex: "0",
                onKeydown: (pe) => unref(qe)(pe, () => T(R.type, true, { keyboard: true }), true),
                onClick: (pe) => unref(m).timeArrowHoldThreshold ? void 0 : T(R.type, true),
                onMousedown: (pe) => unref(m).timeArrowHoldThreshold ? T(R.type, true) : void 0,
                onMouseup: f
              }, [
                n.timePickerInline ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  d.$slots["tp-inline-arrow-up"] ? renderSlot(d.$slots, "tp-inline-arrow-up", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    ur,
                    ir
                  ], 64))
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  d.$slots["arrow-up"] ? renderSlot(d.$slots, "arrow-up", { key: 0 }) : createCommentVNode("", true),
                  d.$slots["arrow-up"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Wa), { key: 1 }))
                ], 64))
              ], 42, sr),
              createElementVNode("button", {
                ref_for: true,
                ref: (pe) => M(pe, te, 1),
                type: "button",
                "aria-label": (w = unref(h2)) == null ? void 0 : w.openTpOverlay(R.type),
                class: normalizeClass({
                  dp__time_display: true,
                  dp__time_display_block: !d.timePickerInline,
                  dp__time_display_inline: d.timePickerInline,
                  "dp--time-invalid": X.value(R.type),
                  "dp--time-overlay-btn": !X.value(R.type)
                }),
                disabled: u(R.type),
                tabindex: "0",
                "data-test": `${R.type}-toggle-overlay-btn-${n.order}`,
                onKeydown: (pe) => unref(qe)(pe, () => I(R.type), true),
                onClick: (pe) => I(R.type)
              }, [
                d.$slots[R.type] ? renderSlot(d.$slots, R.type, {
                  key: 0,
                  text: A.value(R.type).text,
                  value: A.value(R.type).value
                }) : createCommentVNode("", true),
                d.$slots[R.type] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(A.value(R.type).text), 1)
                ], 64))
              ], 42, dr),
              createElementVNode("button", {
                ref_for: true,
                ref: (pe) => M(pe, te, 2),
                type: "button",
                class: normalizeClass({
                  dp__btn: true,
                  dp__inc_dec_button: !d.timePickerInline,
                  dp__inc_dec_button_inline: d.timePickerInline,
                  dp__tp_inline_btn_bottom: d.timePickerInline,
                  dp__inc_dec_button_disabled: re.value(R.type)
                }),
                "data-test": `${R.type}-time-dec-btn-${n.order}`,
                "aria-label": (x = unref(h2)) == null ? void 0 : x.decrementValue(R.type),
                tabindex: "0",
                onKeydown: (pe) => unref(qe)(pe, () => T(R.type, false, { keyboard: true }), true),
                onClick: (pe) => unref(m).timeArrowHoldThreshold ? void 0 : T(R.type, false),
                onMousedown: (pe) => unref(m).timeArrowHoldThreshold ? T(R.type, false) : void 0,
                onMouseup: f
              }, [
                n.timePickerInline ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  d.$slots["tp-inline-arrow-down"] ? renderSlot(d.$slots, "tp-inline-arrow-down", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    fr,
                    vr
                  ], 64))
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  d.$slots["arrow-down"] ? renderSlot(d.$slots, "arrow-down", { key: 0 }) : createCommentVNode("", true),
                  d.$slots["arrow-down"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Va), { key: 1 }))
                ], 64))
              ], 42, cr)
            ], 64))
          ], 2);
        }), 128)),
        d.is24 ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", mr, [
          d.$slots["am-pm-button"] ? renderSlot(d.$slots, "am-pm-button", {
            key: 0,
            toggle: s,
            value: N.value
          }) : createCommentVNode("", true),
          d.$slots["am-pm-button"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: O,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (V = unref(h2)) == null ? void 0 : V.amPmButton,
            tabindex: "0",
            onClick: s,
            onKeydown: Y[0] || (Y[0] = (R) => unref(qe)(R, () => s(), true))
          }, toDisplayString(N.value), 41, gr))
        ])),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_.value, (R, te) => (openBlock(), createBlock(Transition, {
          key: te,
          name: unref(b)(H[R.type]),
          css: unref(C)
        }, {
          default: withCtx(() => [
            H[R.type] ? (openBlock(), createBlock(qt, {
              key: 0,
              items: z(R.type),
              "is-last": d.autoApply && !unref(m).keepActionRow,
              "esc-close": d.escClose,
              type: R.type,
              "text-input": d.textInput,
              config: d.config,
              "arrow-navigation": d.arrowNavigation,
              "aria-labels": d.ariaLabels,
              onSelected: (ue) => me(R.type, ue),
              onToggle: (ue) => I(R.type),
              onResetFlow: Y[1] || (Y[1] = (ue) => d.$emit("reset-flow"))
            }, createSlots({
              "button-icon": withCtx(() => [
                d.$slots["clock-icon"] ? renderSlot(d.$slots, "clock-icon", { key: 0 }) : createCommentVNode("", true),
                d.$slots["clock-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(resolveDynamicComponent(d.timePickerInline ? unref(Et) : unref(Ha)), { key: 1 }))
              ]),
              _: 2
            }, [
              d.$slots[`${R.type}-overlay-value`] ? {
                name: "item",
                fn: withCtx(({ item: ue }) => [
                  renderSlot(d.$slots, `${R.type}-overlay-value`, {
                    text: ue.text,
                    value: ue.value
                  })
                ]),
                key: "0"
              } : void 0,
              d.$slots[`${R.type}-overlay-header`] ? {
                name: "header",
                fn: withCtx(() => [
                  renderSlot(d.$slots, `${R.type}-overlay-header`, {
                    toggle: () => I(R.type)
                  })
                ]),
                key: "1"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "onSelected", "onToggle"])) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), pr = { class: "dp--tp-wrap" }, hr = ["aria-label", "tabindex"], br = ["tabindex"], kr = ["aria-label"], Ln = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => false
    },
    ...rt
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { buildMatrix: c, setTimePicker: v } = bt(), h2 = useSlots(), { defaultedTransitions: i, defaultedAriaLabels: L, defaultedTextInput: m, defaultedConfig: E, defaultedRange: b } = Ce(n), { transitionName: C, showTransition: H } = Xt(i), { hideNavigationButtons: N } = ma(), O = ref(null), y = ref(null), F = ref([]), S = ref(null);
    onMounted(() => {
      a("mount"), !n.timePicker && n.arrowNavigation ? c([Ie(O.value)], "time") : v(true, n.timePicker);
    });
    const X = computed(() => b.value.enabled && n.modelAuto ? Mn(n.internalModelValue) : true), J = ref(false), le = (o) => ({
      hours: Array.isArray(n.hours) ? n.hours[o] : n.hours,
      minutes: Array.isArray(n.minutes) ? n.minutes[o] : n.minutes,
      seconds: Array.isArray(n.seconds) ? n.seconds[o] : n.seconds
    }), Q = computed(() => {
      const o = [];
      if (b.value.enabled)
        for (let z = 0; z < 2; z++)
          o.push(le(z));
      else
        o.push(le(0));
      return o;
    }), P = (o, z = false, D = "") => {
      z || a("reset-flow"), J.value = o, a(o ? "overlay-opened" : "overlay-closed", He.time), n.arrowNavigation && v(o), nextTick(() => {
        D !== "" && F.value[0] && F.value[0].openChildCmp(D);
      });
    }, re = computed(() => ({
      dp__btn: true,
      dp__button: true,
      dp__button_bottom: n.autoApply && !E.value.keepActionRow
    })), B = Je(h2, "timePicker"), j = (o, z, D) => b.value.enabled ? z === 0 ? [o, Q.value[1][D]] : [Q.value[0][D], o] : o, fe = (o) => {
      a("update:hours", o);
    }, ce = (o) => {
      a("update:minutes", o);
    }, _ = (o) => {
      a("update:seconds", o);
    }, A = () => {
      if (S.value && !m.value.enabled && !n.noOverlayFocus) {
        const o = $n(S.value);
        o && o.focus({ preventScroll: true });
      }
    }, k = (o) => {
      a("overlay-closed", o);
    };
    return t({ toggleTimePicker: P }), (o, z) => {
      var D;
      return openBlock(), createElementBlock("div", pr, [
        !o.timePicker && !o.timePickerInline ? withDirectives((openBlock(), createElementBlock("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: O,
          type: "button",
          class: normalizeClass(re.value),
          "aria-label": (D = unref(L)) == null ? void 0 : D.openTimePicker,
          tabindex: o.noOverlayFocus ? void 0 : 0,
          "data-test": "open-time-picker-btn",
          onKeydown: z[0] || (z[0] = (ee) => unref(qe)(ee, () => P(true))),
          onClick: z[1] || (z[1] = (ee) => P(true))
        }, [
          o.$slots["clock-icon"] ? renderSlot(o.$slots, "clock-icon", { key: 0 }) : createCommentVNode("", true),
          o.$slots["clock-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Ha), { key: 1 }))
        ], 42, hr)), [
          [vShow, !unref(N)(o.hideNavigation, "time")]
        ]) : createCommentVNode("", true),
        createVNode(Transition, {
          name: unref(C)(J.value),
          css: unref(H) && !o.timePickerInline
        }, {
          default: withCtx(() => {
            var ee;
            return [
              J.value || o.timePicker || o.timePickerInline ? (openBlock(), createElementBlock("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: S,
                class: normalizeClass({
                  dp__overlay: !o.timePickerInline,
                  "dp--overlay-absolute": !n.timePicker && !o.timePickerInline,
                  "dp--overlay-relative": n.timePicker
                }),
                style: normalizeStyle(o.timePicker ? { height: `${unref(E).modeHeight}px` } : void 0),
                tabindex: o.timePickerInline ? void 0 : 0
              }, [
                createElementVNode("div", {
                  class: normalizeClass(
                    o.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  o.$slots["time-picker-overlay"] ? renderSlot(o.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: fe,
                    setMinutes: ce,
                    setSeconds: _
                  }) : createCommentVNode("", true),
                  o.$slots["time-picker-overlay"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(o.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(Q.value, (de, u) => withDirectives((openBlock(), createBlock(yr, mergeProps({
                      key: u,
                      ref_for: true
                    }, {
                      ...o.$props,
                      order: u,
                      hours: de.hours,
                      minutes: de.minutes,
                      seconds: de.seconds,
                      closeTimePickerBtn: y.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: u === 0 ? o.fixedStart : o.fixedEnd
                    }, {
                      ref_for: true,
                      ref_key: "timeInputRefs",
                      ref: F,
                      "validate-time": (I, se) => e.validateTime(I, j(se, u, I)),
                      "onUpdate:hours": (I) => fe(j(I, u, "hours")),
                      "onUpdate:minutes": (I) => ce(j(I, u, "minutes")),
                      "onUpdate:seconds": (I) => _(j(I, u, "seconds")),
                      onMounted: A,
                      onOverlayClosed: k,
                      onOverlayOpened: z[2] || (z[2] = (I) => o.$emit("overlay-opened", I)),
                      onAmPmChange: z[3] || (z[3] = (I) => o.$emit("am-pm-change", I))
                    }), createSlots({ _: 2 }, [
                      renderList(unref(B), (I, se) => ({
                        name: I,
                        fn: withCtx((f) => [
                          renderSlot(o.$slots, I, mergeProps({ ref_for: true }, f))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [vShow, u === 0 ? true : X.value]
                    ])), 128))
                  ], 2)),
                  !o.timePicker && !o.timePickerInline ? withDirectives((openBlock(), createElementBlock("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: y,
                    type: "button",
                    class: normalizeClass(re.value),
                    "aria-label": (ee = unref(L)) == null ? void 0 : ee.closeTimePicker,
                    tabindex: "0",
                    onKeydown: z[4] || (z[4] = (de) => unref(qe)(de, () => P(false))),
                    onClick: z[5] || (z[5] = (de) => P(false))
                  }, [
                    o.$slots["calendar-icon"] ? renderSlot(o.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                    o.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Et), { key: 1 }))
                  ], 42, kr)), [
                    [vShow, !unref(N)(o.hideNavigation, "time")]
                  ]) : createCommentVNode("", true)
                ], 2)
              ], 14, br)) : createCommentVNode("", true)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), zn = (e, t, l, a) => {
  const { defaultedRange: n } = Ce(e), c = (S, X) => Array.isArray(t[S]) ? t[S][X] : t[S], v = (S) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[S] : t.seconds : 0, h2 = (S, X) => S ? X !== void 0 ? pt(S, c("hours", X), c("minutes", X), v(X)) : pt(S, t.hours, t.minutes, v()) : setSeconds(U(), v(X)), i = (S, X) => {
    t[S] = X;
  }, L = computed(() => e.modelAuto && n.value.enabled ? Array.isArray(l.value) ? l.value.length > 1 : false : n.value.enabled), m = (S, X) => {
    const J = Object.fromEntries(
      Object.keys(t).map((le) => le === S ? [le, X] : [le, t[le]].slice())
    );
    if (L.value && !n.value.disableTimeRangeValidation) {
      const le = (P) => l.value ? pt(
        l.value[P],
        J.hours[P],
        J.minutes[P],
        J.seconds[P]
      ) : null, Q = (P) => setMilliseconds(l.value[P], 0);
      return !(De(le(0), le(1)) && (isAfter(le(0), Q(1)) || isBefore(le(1), Q(0))));
    }
    return true;
  }, E = (S, X) => {
    m(S, X) && (i(S, X), a && a());
  }, b = (S) => {
    E("hours", S);
  }, C = (S) => {
    E("minutes", S);
  }, H = (S) => {
    E("seconds", S);
  }, N = (S, X, J, le) => {
    X && b(S), !X && !J && C(S), J && H(S), l.value && le(l.value);
  }, O = (S) => {
    if (S) {
      const X = Array.isArray(S), J = X ? [+S[0].hours, +S[1].hours] : +S.hours, le = X ? [+S[0].minutes, +S[1].minutes] : +S.minutes, Q = X ? [+S[0].seconds, +S[1].seconds] : +S.seconds;
      i("hours", J), i("minutes", le), e.enableSeconds && i("seconds", Q);
    }
  }, y = (S, X) => {
    const J = {
      hours: Array.isArray(t.hours) ? t.hours[S] : t.hours,
      disabledArr: []
    };
    return (X || X === 0) && (J.hours = X), Array.isArray(e.disabledTimes) && (J.disabledArr = n.value.enabled && Array.isArray(e.disabledTimes[S]) ? e.disabledTimes[S] : e.disabledTimes), J;
  }, F = computed(() => (S, X) => {
    var J;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: le, hours: Q } = y(S, X), P = le.filter((re) => +re.hours === Q);
      return ((J = P[0]) == null ? void 0 : J.minutes) === "*" ? { hours: [Q], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (P == null ? void 0 : P.map((re) => +re.minutes)) ?? [],
        seconds: (P == null ? void 0 : P.map((re) => re.seconds ? +re.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: i,
    updateHours: b,
    updateMinutes: C,
    updateSeconds: H,
    getSetDateTime: h2,
    updateTimeValues: N,
    getSecondsValue: v,
    assignStartTime: O,
    validateTime: m,
    disabledTimesConfig: F
  };
}, wr = (e, t) => {
  const l = () => {
    e.isTextInputDate && X();
  }, { modelValue: a, time: n } = Jt(e, t, l), { defaultedStartTime: c, defaultedRange: v, defaultedTz: h2 } = Ce(e), { updateTimeValues: i, getSetDateTime: L, setTime: m, assignStartTime: E, disabledTimesConfig: b, validateTime: C } = zn(e, n, a, H);
  function H() {
    t("update-flow-step");
  }
  const N = (Q) => {
    const { hours: P, minutes: re, seconds: B } = Q;
    return { hours: +P, minutes: +re, seconds: B ? +B : 0 };
  }, O = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const P = N(e.startTime[0]), re = N(e.startTime[1]);
        return [set(U(), P), set(U(), re)];
      }
      const Q = N(e.startTime);
      return set(U(), Q);
    }
    return v.value.enabled ? [null, null] : null;
  }, y = () => {
    if (v.value.enabled) {
      const [Q, P] = O();
      a.value = [
        Ze(L(Q, 0), h2.value.timezone),
        Ze(L(P, 1), h2.value.timezone)
      ];
    } else
      a.value = Ze(L(O()), h2.value.timezone);
  }, F = (Q) => Array.isArray(Q) ? [St(U(Q[0])), St(U(Q[1]))] : [St(Q ?? U())], S = (Q, P, re) => {
    m("hours", Q), m("minutes", P), m("seconds", e.enableSeconds ? re : 0);
  }, X = () => {
    const [Q, P] = F(a.value);
    return v.value.enabled ? S(
      [Q.hours, P.hours],
      [Q.minutes, P.minutes],
      [Q.seconds, P.seconds]
    ) : S(Q.hours, Q.minutes, Q.seconds);
  };
  onMounted(() => {
    if (!e.shadow)
      return E(c.value), a.value ? X() : y();
  });
  const J = () => {
    Array.isArray(a.value) ? a.value = a.value.map((Q, P) => Q && L(Q, P)) : a.value = L(a.value), t("time-update");
  };
  return {
    modelValue: a,
    time: n,
    disabledTimesConfig: b,
    updateTime: (Q, P = true, re = false) => {
      i(Q, P, re, J);
    },
    validateTime: C
  };
}, Dr = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...rt
  },
  emits: [
    "update:internal-model-value",
    "time-update",
    "am-pm-change",
    "mount",
    "reset-flow",
    "update-flow-step",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, c = useSlots(), v = Je(c, "timePicker"), h2 = ref(null), { time: i, modelValue: L, disabledTimesConfig: m, updateTime: E, validateTime: b } = wr(n, a);
    return onMounted(() => {
      n.shadow || a("mount", null);
    }), t({ getSidebarProps: () => ({
      modelValue: L,
      time: i,
      updateTime: E
    }), toggleTimePicker: (N, O = false, y = "") => {
      var F;
      (F = h2.value) == null || F.toggleTimePicker(N, O, y);
    } }), (N, O) => (openBlock(), createBlock(fa, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: withCtx(() => [
        createVNode(Ln, mergeProps({
          ref_key: "tpRef",
          ref: h2
        }, N.$props, {
          hours: unref(i).hours,
          minutes: unref(i).minutes,
          seconds: unref(i).seconds,
          "internal-model-value": N.internalModelValue,
          "disabled-times-config": unref(m),
          "validate-time": unref(b),
          "onUpdate:hours": O[0] || (O[0] = (y) => unref(E)(y)),
          "onUpdate:minutes": O[1] || (O[1] = (y) => unref(E)(y, false)),
          "onUpdate:seconds": O[2] || (O[2] = (y) => unref(E)(y, false, true)),
          onAmPmChange: O[3] || (O[3] = (y) => N.$emit("am-pm-change", y)),
          onResetFlow: O[4] || (O[4] = (y) => N.$emit("reset-flow")),
          onOverlayClosed: O[5] || (O[5] = (y) => N.$emit("overlay-toggle", { open: false, overlay: y })),
          onOverlayOpened: O[6] || (O[6] = (y) => N.$emit("overlay-toggle", { open: true, overlay: y }))
        }), createSlots({ _: 2 }, [
          renderList(unref(v), (y, F) => ({
            name: y,
            fn: withCtx((S) => [
              renderSlot(N.$slots, y, normalizeProps(guardReactiveProps(S)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), Mr = { class: "dp--header-wrap" }, $r = {
  key: 0,
  class: "dp__month_year_wrap"
}, Ar = { key: 0 }, Tr = { class: "dp__month_year_wrap" }, Sr = ["aria-label", "data-test", "onClick", "onKeydown"], Pr = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...rt
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed", "overlay-opened"],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      defaultedTransitions: c,
      defaultedAriaLabels: v,
      defaultedMultiCalendars: h2,
      defaultedFilters: i,
      defaultedConfig: L,
      defaultedHighlight: m,
      propDates: E,
      defaultedUI: b
    } = Ce(n), { transitionName: C, showTransition: H } = Xt(c), { buildMatrix: N } = bt(), { handleMonthYearChange: O, isDisabled: y, updateMonthYear: F } = Kl(n, a), { showLeftIcon: S, showRightIcon: X } = ma(), J = ref(false), le = ref(false), Q = ref([null, null, null, null]);
    onMounted(() => {
      a("mount");
    });
    const P = (u) => ({
      get: () => n[u],
      set: (I) => {
        const se = u === nt.month ? nt.year : nt.month;
        a("update-month-year", { [u]: I, [se]: n[se] }), u === nt.month ? k(true) : o(true);
      }
    }), re = computed(P(nt.month)), B = computed(P(nt.year)), j = computed(() => (u) => ({
      month: n.month,
      year: n.year,
      items: u === nt.month ? n.months : n.years,
      instance: n.instance,
      updateMonthYear: F,
      toggle: u === nt.month ? k : o
    })), fe = computed(() => {
      const u = n.months.find((I) => I.value === n.month);
      return u || { text: "", value: 0 };
    }), ce = computed(() => Yt(n.months, (u) => {
      const I = n.month === u.value, se = Gt(
        u.value,
        Tn(n.year, E.value.minDate),
        Sn(n.year, E.value.maxDate)
      ) || i.value.months.includes(u.value), f = On(m.value, u.value, n.year);
      return { active: I, disabled: se, highlighted: f };
    })), _ = computed(() => Yt(n.years, (u) => {
      const I = n.year === u.value, se = Gt(
        u.value,
        It(E.value.minDate),
        It(E.value.maxDate)
      ) || i.value.years.includes(u.value), f = Qa(m.value, u.value);
      return { active: I, disabled: se, highlighted: f };
    })), A = (u, I, se) => {
      se !== void 0 ? u.value = se : u.value = !u.value, u.value ? a("overlay-opened", I) : a("overlay-closed", I);
    }, k = (u = false, I) => {
      z(u), A(J, He.month, I);
    }, o = (u = false, I) => {
      z(u), A(le, He.year, I);
    }, z = (u) => {
      u || a("reset-flow");
    }, D = (u, I) => {
      n.arrowNavigation && (Q.value[I] = Ie(u), N(Q.value, "monthYear"));
    }, ee = computed(() => {
      var u, I;
      return [
        {
          type: nt.month,
          index: 1,
          toggle: k,
          modelValue: re.value,
          updateModelValue: (se) => re.value = se,
          text: fe.value.text,
          showSelectionGrid: J.value,
          items: ce.value,
          ariaLabel: (u = v.value) == null ? void 0 : u.openMonthsOverlay
        },
        {
          type: nt.year,
          index: 2,
          toggle: o,
          modelValue: B.value,
          updateModelValue: (se) => B.value = se,
          text: An(n.year, n.locale),
          showSelectionGrid: le.value,
          items: _.value,
          ariaLabel: (I = v.value) == null ? void 0 : I.openYearsOverlay
        }
      ];
    }), de = computed(() => n.disableYearSelect ? [ee.value[0]] : n.yearFirst ? [...ee.value].reverse() : ee.value);
    return t({
      toggleMonthPicker: k,
      toggleYearPicker: o,
      handleMonthYearChange: O
    }), (u, I) => {
      var se, f, T, G, s, oe;
      return openBlock(), createElementBlock("div", Mr, [
        u.$slots["month-year"] ? (openBlock(), createElementBlock("div", $r, [
          renderSlot(u.$slots, "month-year", normalizeProps(guardReactiveProps({ month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: unref(F), handleMonthYearChange: unref(O), instance: e.instance })))
        ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          u.$slots["top-extra"] ? (openBlock(), createElementBlock("div", Ar, [
            renderSlot(u.$slots, "top-extra", { value: u.internalModelValue })
          ])) : createCommentVNode("", true),
          createElementVNode("div", Tr, [
            unref(S)(unref(h2), e.instance) && !u.vertical ? (openBlock(), createBlock(Wt, {
              key: 0,
              "aria-label": (se = unref(v)) == null ? void 0 : se.prevMonth,
              disabled: unref(y)(false),
              class: normalizeClass((f = unref(b)) == null ? void 0 : f.navBtnPrev),
              onActivate: I[0] || (I[0] = (M) => unref(O)(false, true)),
              onSetRef: I[1] || (I[1] = (M) => D(M, 0))
            }, {
              default: withCtx(() => [
                u.$slots["arrow-left"] ? renderSlot(u.$slots, "arrow-left", { key: 0 }) : createCommentVNode("", true),
                u.$slots["arrow-left"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(La), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : createCommentVNode("", true),
            createElementVNode("div", {
              class: normalizeClass(["dp__month_year_wrap", {
                dp__year_disable_select: u.disableYearSelect
              }])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(de.value, (M, me) => (openBlock(), createElementBlock(Fragment, {
                key: M.type
              }, [
                createElementVNode("button", {
                  ref_for: true,
                  ref: (d) => D(d, me + 1),
                  type: "button",
                  class: "dp__btn dp__month_year_select",
                  tabindex: "0",
                  "aria-label": M.ariaLabel,
                  "data-test": `${M.type}-toggle-overlay-${e.instance}`,
                  onClick: M.toggle,
                  onKeydown: (d) => unref(qe)(d, () => M.toggle(), true)
                }, [
                  u.$slots[M.type] ? renderSlot(u.$slots, M.type, {
                    key: 0,
                    text: M.text,
                    value: n[M.type]
                  }) : createCommentVNode("", true),
                  u.$slots[M.type] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(M.text), 1)
                  ], 64))
                ], 40, Sr),
                createVNode(Transition, {
                  name: unref(C)(M.showSelectionGrid),
                  css: unref(H)
                }, {
                  default: withCtx(() => [
                    M.showSelectionGrid ? (openBlock(), createBlock(qt, {
                      key: 0,
                      items: M.items,
                      "arrow-navigation": u.arrowNavigation,
                      "hide-navigation": u.hideNavigation,
                      "is-last": u.autoApply && !unref(L).keepActionRow,
                      "skip-button-ref": false,
                      config: u.config,
                      type: M.type,
                      "header-refs": [],
                      "esc-close": u.escClose,
                      "menu-wrap-ref": u.menuWrapRef,
                      "text-input": u.textInput,
                      "aria-labels": u.ariaLabels,
                      onSelected: M.updateModelValue,
                      onToggle: M.toggle
                    }, createSlots({
                      "button-icon": withCtx(() => [
                        u.$slots["calendar-icon"] ? renderSlot(u.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                        u.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Et), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      u.$slots[`${M.type}-overlay-value`] ? {
                        name: "item",
                        fn: withCtx(({ item: d }) => [
                          renderSlot(u.$slots, `${M.type}-overlay-value`, {
                            text: d.text,
                            value: d.value
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      u.$slots[`${M.type}-overlay`] ? {
                        name: "overlay",
                        fn: withCtx(() => [
                          renderSlot(u.$slots, `${M.type}-overlay`, mergeProps({ ref_for: true }, j.value(M.type)))
                        ]),
                        key: "1"
                      } : void 0,
                      u.$slots[`${M.type}-overlay-header`] ? {
                        name: "header",
                        fn: withCtx(() => [
                          renderSlot(u.$slots, `${M.type}-overlay-header`, {
                            toggle: M.toggle
                          })
                        ]),
                        key: "2"
                      } : void 0
                    ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "onSelected", "onToggle"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ], 64))), 128))
            ], 2),
            unref(S)(unref(h2), e.instance) && u.vertical ? (openBlock(), createBlock(Wt, {
              key: 1,
              "aria-label": (T = unref(v)) == null ? void 0 : T.prevMonth,
              disabled: unref(y)(false),
              class: normalizeClass((G = unref(b)) == null ? void 0 : G.navBtnPrev),
              onActivate: I[2] || (I[2] = (M) => unref(O)(false, true))
            }, {
              default: withCtx(() => [
                u.$slots["arrow-up"] ? renderSlot(u.$slots, "arrow-up", { key: 0 }) : createCommentVNode("", true),
                u.$slots["arrow-up"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Wa), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : createCommentVNode("", true),
            unref(X)(unref(h2), e.instance) ? (openBlock(), createBlock(Wt, {
              key: 2,
              ref: "rightIcon",
              disabled: unref(y)(true),
              "aria-label": (s = unref(v)) == null ? void 0 : s.nextMonth,
              class: normalizeClass((oe = unref(b)) == null ? void 0 : oe.navBtnNext),
              onActivate: I[3] || (I[3] = (M) => unref(O)(true, true)),
              onSetRef: I[4] || (I[4] = (M) => D(M, u.disableYearSelect ? 2 : 3))
            }, {
              default: withCtx(() => [
                u.$slots[u.vertical ? "arrow-down" : "arrow-right"] ? renderSlot(u.$slots, u.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : createCommentVNode("", true),
                u.$slots[u.vertical ? "arrow-down" : "arrow-right"] ? createCommentVNode("", true) : (openBlock(), createBlock(resolveDynamicComponent(u.vertical ? unref(Va) : unref(za)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label", "class"])) : createCommentVNode("", true)
          ])
        ], 64))
      ]);
    };
  }
}), Rr = ["aria-label"], Cr = {
  class: "dp__calendar_header",
  role: "row"
}, _r = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Or = ["aria-label"], Br = /* @__PURE__ */ createElementVNode("div", { class: "dp__calendar_header_separator" }, null, -1), Yr = ["aria-label"], Ir = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, Nr = { class: "dp__cell_inner" }, Er = ["id", "aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Fr = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...rt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { buildMultiLevelMatrix: c } = bt(), {
      defaultedTransitions: v,
      defaultedConfig: h2,
      defaultedAriaLabels: i,
      defaultedMultiCalendars: L,
      defaultedWeekNumbers: m,
      defaultedMultiDates: E,
      defaultedUI: b
    } = Ce(n), C = ref(null), H = ref({
      bottom: "",
      left: "",
      transform: ""
    }), N = ref([]), O = ref(null), y = ref(true), F = ref(""), S = ref({ startX: 0, endX: 0, startY: 0, endY: 0 }), X = ref([]), J = ref({ left: "50%" }), le = ref(false), Q = computed(() => n.calendar ? n.calendar(n.mappedDates) : n.mappedDates), P = computed(() => n.dayNames ? Array.isArray(n.dayNames) ? n.dayNames : n.dayNames(n.locale, +n.weekStart) : vl(n.formatLocale, n.locale, +n.weekStart));
    onMounted(() => {
      a("mount", { cmp: "calendar", refs: N }), h2.value.noSwipe || O.value && (O.value.addEventListener("touchstart", D, { passive: false }), O.value.addEventListener("touchend", ee, { passive: false }), O.value.addEventListener("touchmove", de, { passive: false })), n.monthChangeOnScroll && O.value && O.value.addEventListener("wheel", se, { passive: false });
    });
    const re = (M) => M ? n.vertical ? "vNext" : "next" : n.vertical ? "vPrevious" : "previous", B = (M, me) => {
      if (n.transitions) {
        const d = Ke(dt(U(), n.month, n.year));
        F.value = Be(Ke(dt(U(), M, me)), d) ? v.value[re(true)] : v.value[re(false)], y.value = false, nextTick(() => {
          y.value = true;
        });
      }
    }, j = computed(
      () => ({
        [n.calendarClassName]: !!n.calendarClassName,
        ...b.value.calendar ?? {}
      })
    ), fe = computed(() => (M) => {
      const me = gl(M);
      return {
        dp__marker_dot: me.type === "dot",
        dp__marker_line: me.type === "line"
      };
    }), ce = computed(() => (M) => De(M, C.value)), _ = computed(() => ({
      dp__calendar: true,
      dp__calendar_next: L.value.count > 0 && n.instance !== 0
    })), A = computed(() => (M) => n.hideOffsetDates ? M.current : true), k = async (M, me, d) => {
      const Y = Ie(N.value[me][d]);
      if (Y) {
        const { width: V, height: R } = Y.getBoundingClientRect();
        C.value = M.value;
        let te = { left: `${V / 2}px` }, ue = -50;
        if (await nextTick(), X.value[0]) {
          const { left: w, width: x } = X.value[0].getBoundingClientRect();
          w < 0 && (te = { left: "0" }, ue = 0, J.value.left = `${V / 2}px`), (void 0).innerWidth < w + x && (te = { right: "0" }, ue = 0, J.value.left = `${x - V / 2}px`);
        }
        H.value = {
          bottom: `${R}px`,
          ...te,
          transform: `translateX(${ue}%)`
        }, a("tooltip-open", M.marker);
      }
    }, o = async (M, me, d) => {
      var Y, V;
      if (le.value && E.value.enabled && E.value.dragSelect)
        return a("select-date", M);
      a("set-hover-date", M), (V = (Y = M.marker) == null ? void 0 : Y.tooltip) != null && V.length && await k(M, me, d);
    }, z = (M) => {
      C.value && (C.value = null, H.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", M.marker));
    }, D = (M) => {
      S.value.startX = M.changedTouches[0].screenX, S.value.startY = M.changedTouches[0].screenY;
    }, ee = (M) => {
      S.value.endX = M.changedTouches[0].screenX, S.value.endY = M.changedTouches[0].screenY, u();
    }, de = (M) => {
      n.vertical && !n.inline && M.preventDefault();
    }, u = () => {
      const M = n.vertical ? "Y" : "X";
      Math.abs(S.value[`start${M}`] - S.value[`end${M}`]) > 10 && a("handle-swipe", S.value[`start${M}`] > S.value[`end${M}`] ? "right" : "left");
    }, I = (M, me, d) => {
      M && (Array.isArray(N.value[me]) ? N.value[me][d] = M : N.value[me] = [M]), n.arrowNavigation && c(N.value, "calendar");
    }, se = (M) => {
      n.monthChangeOnScroll && (M.preventDefault(), a("handle-scroll", M));
    }, f = (M) => m.value.type === "local" ? getWeek(M.value, { weekStartsOn: +n.weekStart }) : m.value.type === "iso" ? getISOWeek(M.value) : typeof m.value.type == "function" ? m.value.type(M.value) : "", T = (M) => {
      const me = M[0];
      return m.value.hideOnOffsetDates ? M.some((d) => d.current) ? f(me) : "" : f(me);
    }, G = (M, me) => {
      E.value.enabled || (yt(M, h2.value), a("select-date", me));
    }, s = (M) => {
      yt(M, h2.value);
    }, oe = (M) => {
      E.value.enabled && E.value.dragSelect ? (le.value = true, a("select-date", M)) : E.value.enabled && a("select-date", M);
    };
    return t({ triggerTransition: B }), (M, me) => {
      var d;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_.value)
      }, [
        createElementVNode("div", {
          ref_key: "calendarWrapRef",
          ref: O,
          role: "grid",
          class: normalizeClass(j.value),
          "aria-label": (d = unref(i)) == null ? void 0 : d.calendarWrap
        }, [
          createElementVNode("div", Cr, [
            M.weekNumbers ? (openBlock(), createElementBlock("div", _r, toDisplayString(M.weekNumName), 1)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(P.value, (Y, V) => {
              var R, te;
              return openBlock(), createElementBlock("div", {
                key: V,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "data-test": "calendar-header",
                "aria-label": (te = (R = unref(i)) == null ? void 0 : R.weekDay) == null ? void 0 : te.call(R, V)
              }, [
                M.$slots["calendar-header"] ? renderSlot(M.$slots, "calendar-header", {
                  key: 0,
                  day: Y,
                  index: V
                }) : createCommentVNode("", true),
                M.$slots["calendar-header"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(Y), 1)
                ], 64))
              ], 8, Or);
            }), 128))
          ]),
          Br,
          createVNode(Transition, {
            name: F.value,
            css: !!M.transitions
          }, {
            default: withCtx(() => {
              var Y;
              return [
                y.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((Y = unref(i)) == null ? void 0 : Y.calendarDays) || void 0,
                  onMouseleave: me[1] || (me[1] = (V) => le.value = false)
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Q.value, (V, R) => (openBlock(), createElementBlock("div", {
                    key: R,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    M.weekNumbers ? (openBlock(), createElementBlock("div", Ir, [
                      createElementVNode("div", Nr, toDisplayString(T(V.days)), 1)
                    ])) : createCommentVNode("", true),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(V.days, (te, ue) => {
                      var w, x, pe;
                      return openBlock(), createElementBlock("div", {
                        id: unref(Bn)(te.value),
                        ref_for: true,
                        ref: ($e) => I($e, R, ue),
                        key: ue + R,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (te.classData.dp__active_date || te.classData.dp__range_start || te.classData.dp__range_start) ?? void 0,
                        "aria-disabled": te.classData.dp__cell_disabled || void 0,
                        "aria-label": (x = (w = unref(i)) == null ? void 0 : w.day) == null ? void 0 : x.call(w, te),
                        tabindex: "0",
                        "data-test": te.value,
                        onClick: withModifiers(($e) => G($e, te), ["prevent"]),
                        onKeydown: ($e) => unref(qe)($e, () => M.$emit("select-date", te)),
                        onMouseenter: ($e) => o(te, R, ue),
                        onMouseleave: ($e) => z(te),
                        onMousedown: ($e) => oe(te),
                        onMouseup: me[0] || (me[0] = ($e) => le.value = false)
                      }, [
                        createElementVNode("div", {
                          class: normalizeClass(["dp__cell_inner", te.classData])
                        }, [
                          M.$slots.day && A.value(te) ? renderSlot(M.$slots, "day", {
                            key: 0,
                            day: +te.text,
                            date: te.value
                          }) : createCommentVNode("", true),
                          M.$slots.day ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(te.text), 1)
                          ], 64)),
                          te.marker && A.value(te) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                            M.$slots.marker ? renderSlot(M.$slots, "marker", {
                              key: 0,
                              marker: te.marker,
                              day: +te.text,
                              date: te.value
                            }) : (openBlock(), createElementBlock("div", {
                              key: 1,
                              class: normalizeClass(fe.value(te.marker)),
                              style: normalizeStyle(te.marker.color ? { backgroundColor: te.marker.color } : {})
                            }, null, 6))
                          ], 64)) : createCommentVNode("", true),
                          ce.value(te.value) ? (openBlock(), createElementBlock("div", {
                            key: 3,
                            ref_for: true,
                            ref_key: "activeTooltip",
                            ref: X,
                            class: "dp__marker_tooltip",
                            style: normalizeStyle(H.value)
                          }, [
                            (pe = te.marker) != null && pe.tooltip ? (openBlock(), createElementBlock("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: s
                            }, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(te.marker.tooltip, ($e, Ge) => (openBlock(), createElementBlock("div", {
                                key: Ge,
                                class: "dp__tooltip_text"
                              }, [
                                M.$slots["marker-tooltip"] ? renderSlot(M.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: $e,
                                  day: te.value
                                }) : createCommentVNode("", true),
                                M.$slots["marker-tooltip"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                  createElementVNode("div", {
                                    class: "dp__tooltip_mark",
                                    style: normalizeStyle($e.color ? { backgroundColor: $e.color } : {})
                                  }, null, 4),
                                  createElementVNode("div", null, toDisplayString($e.text), 1)
                                ], 64))
                              ]))), 128)),
                              createElementVNode("div", {
                                class: "dp__arrow_bottom_tp",
                                style: normalizeStyle(J.value)
                              }, null, 4)
                            ])) : createCommentVNode("", true)
                          ], 4)) : createCommentVNode("", true)
                        ], 2)
                      ], 40, Er);
                    }), 128))
                  ]))), 128))
                ], 40, Yr)) : createCommentVNode("", true)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, Rr)
      ], 2);
    };
  }
}), cn = (e) => Array.isArray(e), Lr = (e, t, l, a) => {
  const n = ref([]), c = ref(/* @__PURE__ */ new Date()), v = ref(), h2 = () => ee(e.isTextInputDate), { modelValue: i, calendars: L, time: m, today: E } = Jt(e, t, h2), {
    defaultedMultiCalendars: b,
    defaultedStartTime: C,
    defaultedRange: H,
    defaultedConfig: N,
    defaultedTz: O,
    propDates: y,
    defaultedMultiDates: F
  } = Ce(e), { validateMonthYearInRange: S, isDisabled: X, isDateRangeAllowed: J, checkMinMaxRange: le } = kt(e), { updateTimeValues: Q, getSetDateTime: P, setTime: re, assignStartTime: B, validateTime: j, disabledTimesConfig: fe } = zn(e, m, i, a), ce = computed(
    () => (p) => L.value[p] ? L.value[p].month : 0
  ), _ = computed(
    () => (p) => L.value[p] ? L.value[p].year : 0
  ), A = (p) => !N.value.keepViewOnOffsetClick || p ? true : !v.value, k = (p, g, W, ne = false) => {
    var Ae, Fe;
    A(ne) && (L.value[p] || (L.value[p] = { month: 0, year: 0 }), L.value[p].month = rn(g) ? (Ae = L.value[p]) == null ? void 0 : Ae.month : g, L.value[p].year = rn(W) ? (Fe = L.value[p]) == null ? void 0 : Fe.year : W);
  }, o = () => {
    e.autoApply && t("select-date");
  };
  onMounted(() => {
    e.shadow || (i.value || (me(), C.value && B(C.value)), ee(true), e.focusStartDate && e.startDate && me());
  });
  const z = computed(() => {
    var p;
    return (p = e.flow) != null && p.length && !e.partialFlow ? e.flowStep === e.flow.length : true;
  }), D = () => {
    e.autoApply && z.value && t("auto-apply");
  }, ee = (p = false) => {
    if (i.value)
      return Array.isArray(i.value) ? (n.value = i.value, G(p)) : I(i.value, p);
    if (b.value.count && p && !e.startDate)
      return u(U(), p);
  }, de = () => Array.isArray(i.value) && H.value.enabled ? getMonth(i.value[0]) === getMonth(i.value[1] ?? i.value[0]) : false, u = (p = /* @__PURE__ */ new Date(), g = false) => {
    if ((!b.value.count || !b.value.static || g) && k(0, getMonth(p), getYear(p)), b.value.count && (!b.value.solo || !i.value || de()))
      for (let W = 1; W < b.value.count; W++) {
        const ne = set(U(), { month: ce.value(W - 1), year: _.value(W - 1) }), Ae = add(ne, { months: 1 });
        L.value[W] = { month: getMonth(Ae), year: getYear(Ae) };
      }
  }, I = (p, g) => {
    u(p), re("hours", getHours(p)), re("minutes", getMinutes(p)), re("seconds", getSeconds(p)), b.value.count && g && M();
  }, se = (p) => {
    if (b.value.count) {
      if (b.value.solo)
        return 0;
      const g = getMonth(p[0]), W = getMonth(p[1]);
      return Math.abs(W - g) < b.value.count ? 0 : 1;
    }
    return 1;
  }, f = (p, g) => {
    p[1] && H.value.showLastInRange ? u(p[se(p)], g) : u(p[0], g);
    const W = (ne, Ae) => [
      ne(p[0]),
      p[1] ? ne(p[1]) : m[Ae][1]
    ];
    re("hours", W(getHours, "hours")), re("minutes", W(getMinutes, "minutes")), re("seconds", W(getSeconds, "seconds"));
  }, T = (p, g) => {
    if ((H.value.enabled || e.weekPicker) && !F.value.enabled)
      return f(p, g);
    if (F.value.enabled && g) {
      const W = p[p.length - 1];
      return I(W, g);
    }
  }, G = (p) => {
    const g = i.value;
    T(g, p), b.value.count && b.value.solo && M();
  }, s = (p, g) => {
    const W = set(U(), { month: ce.value(g), year: _.value(g) }), ne = p < 0 ? addMonths(W, 1) : subMonths(W, 1);
    S(getMonth(ne), getYear(ne), p < 0, e.preventMinMaxNavigation) && (k(g, getMonth(ne), getYear(ne)), t("update-month-year", { instance: g, month: getMonth(ne), year: getYear(ne) }), b.value.count && !b.value.solo && oe(g), l());
  }, oe = (p) => {
    for (let g = p - 1; g >= 0; g--) {
      const W = subMonths(set(U(), { month: ce.value(g + 1), year: _.value(g + 1) }), 1);
      k(g, getMonth(W), getYear(W));
    }
    for (let g = p + 1; g <= b.value.count - 1; g++) {
      const W = addMonths(set(U(), { month: ce.value(g - 1), year: _.value(g - 1) }), 1);
      k(g, getMonth(W), getYear(W));
    }
  }, M = () => {
    if (Array.isArray(i.value) && i.value.length === 2) {
      const p = U(
        U(i.value[1] ? i.value[1] : addMonths(i.value[0], 1))
      ), [g, W] = [getMonth(i.value[0]), getYear(i.value[0])], [ne, Ae] = [getMonth(i.value[1]), getYear(i.value[1])];
      (g !== ne || g === ne && W !== Ae) && b.value.solo && k(1, getMonth(p), getYear(p));
    } else
      i.value && !Array.isArray(i.value) && (k(0, getMonth(i.value), getYear(i.value)), u(U()));
  }, me = () => {
    e.startDate && (k(0, getMonth(U(e.startDate)), getYear(U(e.startDate))), b.value.count && oe(0));
  }, d = (p, g) => {
    if (e.monthChangeOnScroll) {
      const W = (/* @__PURE__ */ new Date()).getTime() - c.value.getTime(), ne = Math.abs(p.deltaY);
      let Ae = 500;
      ne > 1 && (Ae = 100), ne > 100 && (Ae = 0), W > Ae && (c.value = /* @__PURE__ */ new Date(), s(e.monthChangeOnScroll !== "inverse" ? -p.deltaY : p.deltaY, g));
    }
  }, Y = (p, g, W = false) => {
    e.monthChangeOnArrows && e.vertical === W && V(p, g);
  }, V = (p, g) => {
    s(p === "right" ? -1 : 1, g);
  }, R = (p) => {
    if (y.value.markers)
      return sa(p.value, y.value.markers);
  }, te = (p, g) => {
    switch (e.sixWeeks === true ? "append" : e.sixWeeks) {
      case "prepend":
        return [true, false];
      case "center":
        return [p == 0, true];
      case "fair":
        return [p == 0 || g > p, true];
      case "append":
        return [false, false];
      default:
        return [false, false];
    }
  }, ue = (p, g, W, ne) => {
    if (e.sixWeeks && p.length < 6) {
      const Ae = 6 - p.length, Fe = (g.getDay() + 7 - ne) % 7, xt = 6 - (W.getDay() + 7 - ne) % 7, [zt, Da] = te(Fe, xt);
      for (let Dt = 1; Dt <= Ae; Dt++)
        if (Da ? !!(Dt % 2) == zt : zt) {
          const ea = p[0].days[0], Ma = w(addDays(ea.value, -7), getMonth(g));
          p.unshift({ days: Ma });
        } else {
          const ea = p[p.length - 1], Ma = ea.days[ea.days.length - 1], Wn = w(addDays(Ma.value, 1), getMonth(g));
          p.push({ days: Wn });
        }
    }
    return p;
  }, w = (p, g) => {
    const W = U(p), ne = [];
    for (let Ae = 0; Ae < 7; Ae++) {
      const Fe = addDays(W, Ae), wt = getMonth(Fe) !== g;
      ne.push({
        text: e.hideOffsetDates && wt ? "" : Fe.getDate(),
        value: Fe,
        current: !wt,
        classData: {}
      });
    }
    return ne;
  }, x = (p, g) => {
    const W = [], ne = new Date(g, p), Ae = new Date(g, p + 1, 0), Fe = e.weekStart, wt = startOfWeek(ne, { weekStartsOn: Fe }), xt = (zt) => {
      const Da = w(zt, p);
      if (W.push({ days: Da }), !W[W.length - 1].days.some(
        (Dt) => De(Ke(Dt.value), Ke(Ae))
      )) {
        const Dt = addDays(zt, 7);
        xt(Dt);
      }
    };
    return xt(wt), ue(W, ne, Ae, Fe);
  }, pe = (p) => {
    const g = pt(U(p.value), m.hours, m.minutes, Xe());
    t("date-update", g), F.value.enabled ? qa(g, i, F.value.limit) : i.value = g, a(), nextTick().then(() => {
      D();
    });
  }, $e = (p) => H.value.noDisabledRange ? Pn(n.value[0], p).some((W) => X(W)) : false, Ge = () => {
    n.value = i.value ? i.value.slice() : [], n.value.length === 2 && !(H.value.fixedStart || H.value.fixedEnd) && (n.value = []);
  }, ve = (p, g) => {
    const W = [
      U(p.value),
      addDays(U(p.value), +H.value.autoRange)
    ];
    J(W) ? (g && vt(p.value), n.value = W) : t("invalid-date", p.value);
  }, vt = (p) => {
    const g = getMonth(U(p)), W = getYear(U(p));
    if (k(0, g, W), b.value.count > 0)
      for (let ne = 1; ne < b.value.count; ne++) {
        const Ae = Ml(
          set(U(p), { year: ce.value(ne - 1), month: _.value(ne - 1) })
        );
        k(ne, Ae.month, Ae.year);
      }
  }, ot = (p) => {
    if ($e(p.value) || !le(p.value, i.value, H.value.fixedStart ? 0 : 1))
      return t("invalid-date", p.value);
    n.value = En(U(p.value), i, t, H);
  }, Ft = (p, g) => {
    if (Ge(), H.value.autoRange)
      return ve(p, g);
    if (H.value.fixedStart || H.value.fixedEnd)
      return ot(p);
    n.value[0] ? le(U(p.value), i.value) && !$e(p.value) ? _e(U(p.value), U(n.value[0])) ? (n.value.unshift(U(p.value)), t("range-end", n.value[0])) : (n.value[1] = U(p.value), t("range-end", n.value[1])) : (e.autoApply && t("auto-apply-invalid", p.value), t("invalid-date", p.value)) : (n.value[0] = U(p.value), t("range-start", n.value[0]));
  }, Xe = (p = true) => e.enableSeconds ? Array.isArray(m.seconds) ? p ? m.seconds[0] : m.seconds[1] : m.seconds : 0, Lt = (p) => {
    n.value[p] = pt(
      n.value[p],
      m.hours[p],
      m.minutes[p],
      Xe(p !== 1)
    );
  }, ga = () => {
    var p, g;
    n.value[0] && n.value[1] && +((p = n.value) == null ? void 0 : p[0]) > +((g = n.value) == null ? void 0 : g[1]) && (n.value.reverse(), t("range-start", n.value[0]), t("range-end", n.value[1]));
  }, Zt = () => {
    n.value.length && (n.value[0] && !n.value[1] ? Lt(0) : (Lt(0), Lt(1), a()), ga(), i.value = n.value.slice(), va(n.value, t, e.autoApply, e.modelAuto));
  }, ya = (p, g = false) => {
    if (X(p.value) || !p.current && e.hideOffsetDates)
      return t("invalid-date", p.value);
    if (v.value = JSON.parse(JSON.stringify(p)), !H.value.enabled)
      return pe(p);
    cn(m.hours) && cn(m.minutes) && !F.value.enabled && (Ft(p, g), Zt());
  }, pa = (p, g) => {
    var ne;
    k(p, g.month, g.year, true), b.value.count && !b.value.solo && oe(p), t("update-month-year", { instance: p, month: g.month, year: g.year }), l(b.value.solo ? p : void 0);
    const W = (ne = e.flow) != null && ne.length ? e.flow[e.flowStep] : void 0;
    !g.fromNav && (W === He.month || W === He.year) && a();
  }, ha = (p, g) => {
    Nn({
      value: p,
      modelValue: i,
      range: H.value.enabled,
      timezone: g ? void 0 : O.value.timezone
    }), o(), e.multiCalendars && nextTick().then(() => ee(true));
  }, ba = () => {
    const p = Ua(U(), O.value);
    H.value.enabled ? i.value && Array.isArray(i.value) && i.value[0] ? i.value = _e(p, i.value[0]) ? [p, i.value[0]] : [i.value[0], p] : i.value = [p] : i.value = p, o();
  }, ka = () => {
    if (Array.isArray(i.value))
      if (F.value.enabled) {
        const p = wa();
        i.value[i.value.length - 1] = P(p);
      } else
        i.value = i.value.map((p, g) => p && P(p, g));
    else
      i.value = P(i.value);
    t("time-update");
  }, wa = () => Array.isArray(i.value) && i.value.length ? i.value[i.value.length - 1] : null;
  return {
    calendars: L,
    modelValue: i,
    month: ce,
    year: _,
    time: m,
    disabledTimesConfig: fe,
    today: E,
    validateTime: j,
    getCalendarDays: x,
    getMarker: R,
    handleScroll: d,
    handleSwipe: V,
    handleArrow: Y,
    selectDate: ya,
    updateMonthYear: pa,
    presetDate: ha,
    selectCurrentDate: ba,
    updateTime: (p, g = true, W = false) => {
      Q(p, g, W, ka);
    },
    assignMonthAndYear: u
  };
}, zr = { key: 0 }, Hr = /* @__PURE__ */ defineComponent({
  __name: "DatePicker",
  props: {
    ...rt
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      calendars: c,
      month: v,
      year: h2,
      modelValue: i,
      time: L,
      disabledTimesConfig: m,
      today: E,
      validateTime: b,
      getCalendarDays: C,
      getMarker: H,
      handleArrow: N,
      handleScroll: O,
      handleSwipe: y,
      selectDate: F,
      updateMonthYear: S,
      presetDate: X,
      selectCurrentDate: J,
      updateTime: le,
      assignMonthAndYear: Q
    } = Lr(n, a, de, u), P = useSlots(), { setHoverDate: re, getDayClassData: B, clearHoverDate: j } = no(i, n), { defaultedMultiCalendars: fe } = Ce(n), ce = ref([]), _ = ref([]), A = ref(null), k = Je(P, "calendar"), o = Je(P, "monthYear"), z = Je(P, "timePicker"), D = (Y) => {
      n.shadow || a("mount", Y);
    };
    watch(
      c,
      () => {
        n.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: true }
    ), watch(
      fe,
      (Y, V) => {
        Y.count - V.count > 0 && Q();
      },
      { deep: true }
    );
    const ee = computed(() => (Y) => C(v.value(Y), h2.value(Y)).map((V) => ({
      ...V,
      days: V.days.map((R) => (R.marker = H(R), R.classData = B(R), R))
    })));
    function de(Y) {
      var V;
      Y || Y === 0 ? (V = _.value[Y]) == null || V.triggerTransition(v.value(Y), h2.value(Y)) : _.value.forEach((R, te) => R.triggerTransition(v.value(te), h2.value(te)));
    }
    function u() {
      a("update-flow-step");
    }
    const I = (Y, V = false) => {
      F(Y, V), n.spaceConfirm && a("select-date");
    }, se = (Y, V, R = 0) => {
      var te;
      (te = ce.value[R]) == null || te.toggleMonthPicker(Y, V);
    }, f = (Y, V, R = 0) => {
      var te;
      (te = ce.value[R]) == null || te.toggleYearPicker(Y, V);
    }, T = (Y, V, R) => {
      var te;
      (te = A.value) == null || te.toggleTimePicker(Y, V, R);
    }, G = (Y, V) => {
      var R;
      if (!n.range) {
        const te = i.value ? i.value : E, ue = V ? new Date(V) : te, w = Y ? startOfWeek(ue, { weekStartsOn: 1 }) : endOfWeek(ue, { weekStartsOn: 1 });
        F({
          value: w,
          current: getMonth(ue) === v.value(0),
          text: "",
          classData: {}
        }), (R = (void 0).getElementById(Bn(w))) == null || R.focus();
      }
    }, s = (Y) => {
      var V;
      (V = ce.value[0]) == null || V.handleMonthYearChange(Y, true);
    }, oe = (Y) => {
      S(0, { month: v.value(0), year: h2.value(0) + (Y ? 1 : -1), fromNav: true });
    }, M = (Y, V) => {
      Y === He.time && a(`time-picker-${V ? "open" : "close"}`), a("overlay-toggle", { open: V, overlay: Y });
    }, me = (Y) => {
      a("overlay-toggle", { open: false, overlay: Y }), a("focus-menu");
    };
    return t({
      clearHoverDate: j,
      presetDate: X,
      selectCurrentDate: J,
      toggleMonthPicker: se,
      toggleYearPicker: f,
      toggleTimePicker: T,
      handleArrow: N,
      updateMonthYear: S,
      getSidebarProps: () => ({
        modelValue: i,
        month: v,
        year: h2,
        time: L,
        updateTime: le,
        updateMonthYear: S,
        selectDate: F,
        presetDate: X
      }),
      changeMonth: s,
      changeYear: oe,
      selectWeekDate: G
    }), (Y, V) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(fa, {
        "multi-calendars": unref(fe).count,
        collapse: Y.collapse
      }, {
        default: withCtx(({ instance: R, index: te }) => [
          Y.disableMonthYearSelect ? createCommentVNode("", true) : (openBlock(), createBlock(Pr, mergeProps({
            key: 0,
            ref: (ue) => {
              ue && (ce.value[te] = ue);
            },
            months: unref(Dn)(Y.formatLocale, Y.locale, Y.monthNameFormat),
            years: unref(ja)(Y.yearRange, Y.locale, Y.reverseYears),
            month: unref(v)(R),
            year: unref(h2)(R),
            instance: R
          }, Y.$props, {
            onMount: V[0] || (V[0] = (ue) => D(unref(Tt).header)),
            onResetFlow: V[1] || (V[1] = (ue) => Y.$emit("reset-flow")),
            onUpdateMonthYear: (ue) => unref(S)(R, ue),
            onOverlayClosed: me,
            onOverlayOpened: V[2] || (V[2] = (ue) => Y.$emit("overlay-toggle", { open: true, overlay: ue }))
          }), createSlots({ _: 2 }, [
            renderList(unref(o), (ue, w) => ({
              name: ue,
              fn: withCtx((x) => [
                renderSlot(Y.$slots, ue, normalizeProps(guardReactiveProps(x)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          createVNode(Fr, mergeProps({
            ref: (ue) => {
              ue && (_.value[te] = ue);
            },
            "mapped-dates": ee.value(R),
            month: unref(v)(R),
            year: unref(h2)(R),
            instance: R
          }, Y.$props, {
            onSelectDate: (ue) => unref(F)(ue, R !== 1),
            onHandleSpace: (ue) => I(ue, R !== 1),
            onSetHoverDate: V[3] || (V[3] = (ue) => unref(re)(ue)),
            onHandleScroll: (ue) => unref(O)(ue, R),
            onHandleSwipe: (ue) => unref(y)(ue, R),
            onMount: V[4] || (V[4] = (ue) => D(unref(Tt).calendar)),
            onResetFlow: V[5] || (V[5] = (ue) => Y.$emit("reset-flow")),
            onTooltipOpen: V[6] || (V[6] = (ue) => Y.$emit("tooltip-open", ue)),
            onTooltipClose: V[7] || (V[7] = (ue) => Y.$emit("tooltip-close", ue))
          }), createSlots({ _: 2 }, [
            renderList(unref(k), (ue, w) => ({
              name: ue,
              fn: withCtx((x) => [
                renderSlot(Y.$slots, ue, normalizeProps(guardReactiveProps({ ...x })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      Y.enableTimePicker ? (openBlock(), createElementBlock("div", zr, [
        Y.$slots["time-picker"] ? renderSlot(Y.$slots, "time-picker", normalizeProps(mergeProps({ key: 0 }, { time: unref(L), updateTime: unref(le) }))) : (openBlock(), createBlock(Ln, mergeProps({
          key: 1,
          ref_key: "timePickerRef",
          ref: A
        }, Y.$props, {
          hours: unref(L).hours,
          minutes: unref(L).minutes,
          seconds: unref(L).seconds,
          "internal-model-value": Y.internalModelValue,
          "disabled-times-config": unref(m),
          "validate-time": unref(b),
          onMount: V[8] || (V[8] = (R) => D(unref(Tt).timePicker)),
          "onUpdate:hours": V[9] || (V[9] = (R) => unref(le)(R)),
          "onUpdate:minutes": V[10] || (V[10] = (R) => unref(le)(R, false)),
          "onUpdate:seconds": V[11] || (V[11] = (R) => unref(le)(R, false, true)),
          onResetFlow: V[12] || (V[12] = (R) => Y.$emit("reset-flow")),
          onOverlayClosed: V[13] || (V[13] = (R) => M(R, false)),
          onOverlayOpened: V[14] || (V[14] = (R) => M(R, true)),
          onAmPmChange: V[15] || (V[15] = (R) => Y.$emit("am-pm-change", R))
        }), createSlots({ _: 2 }, [
          renderList(unref(z), (R, te) => ({
            name: R,
            fn: withCtx((ue) => [
              renderSlot(Y.$slots, R, normalizeProps(guardReactiveProps(ue)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : createCommentVNode("", true)
    ], 64));
  }
}), Wr = (e, t) => {
  const l = ref(), {
    defaultedMultiCalendars: a,
    defaultedConfig: n,
    defaultedHighlight: c,
    defaultedRange: v,
    propDates: h2,
    defaultedFilters: i,
    defaultedMultiDates: L
  } = Ce(e), { modelValue: m, year: E, month: b, calendars: C } = Jt(e, t), { isDisabled: H } = kt(e), { selectYear: N, groupedYears: O, showYearPicker: y, isDisabled: F, toggleYearPicker: S, handleYearSelect: X, handleYear: J } = Fn({
    modelValue: m,
    multiCalendars: a,
    range: v,
    highlight: c,
    calendars: C,
    propDates: h2,
    month: b,
    year: E,
    filters: i,
    props: e,
    emit: t
  }), le = (o, z) => [o, z].map((D) => format(D, "MMMM", { locale: e.formatLocale })).join("-"), Q = computed(() => (o) => m.value ? Array.isArray(m.value) ? m.value.some((z) => isSameQuarter(o, z)) : isSameQuarter(m.value, o) : false), P = (o) => {
    if (v.value.enabled) {
      if (Array.isArray(m.value)) {
        const z = De(o, m.value[0]) || De(o, m.value[1]);
        return da(m.value, l.value, o) && !z;
      }
      return false;
    }
    return false;
  }, re = (o, z) => o.quarter === getQuarter(z) && o.year === getYear(z), B = (o) => typeof c.value == "function" ? c.value({ quarter: getQuarter(o), year: getYear(o) }) : !!c.value.quarters.find((z) => re(z, o)), j = computed(() => (o) => {
    const z = set(/* @__PURE__ */ new Date(), { year: E.value(o) });
    return eachQuarterOfInterval({
      start: startOfYear(z),
      end: endOfYear(z)
    }).map((D) => {
      const ee = startOfQuarter(D), de = endOfQuarter(D), u = H(D), I = P(ee), se = B(ee);
      return {
        text: le(ee, de),
        value: ee,
        active: Q.value(ee),
        highlighted: se,
        disabled: u,
        isBetween: I
      };
    });
  }), fe = (o) => {
    qa(o, m, L.value.limit), t("auto-apply", true);
  }, ce = (o) => {
    m.value = Xa(m, o, t), va(m.value, t, e.autoApply, e.modelAuto);
  }, _ = (o) => {
    m.value = o, t("auto-apply");
  };
  return {
    defaultedConfig: n,
    defaultedMultiCalendars: a,
    groupedYears: O,
    year: E,
    isDisabled: F,
    quarters: j,
    showYearPicker: y,
    modelValue: m,
    setHoverDate: (o) => {
      l.value = o;
    },
    selectYear: N,
    selectQuarter: (o, z, D) => {
      if (!D)
        return C.value[z].month = getMonth(endOfQuarter(o)), L.value.enabled ? fe(o) : v.value.enabled ? ce(o) : _(o);
    },
    toggleYearPicker: S,
    handleYearSelect: X,
    handleYear: J
  };
}, Vr = { class: "dp--quarter-items" }, Ur = ["data-test", "disabled", "onClick", "onMouseover"], jr = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...rt
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end",
    "overlay-toggle",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, c = useSlots(), v = Je(c, "yearMode"), {
      defaultedMultiCalendars: h2,
      defaultedConfig: i,
      groupedYears: L,
      year: m,
      isDisabled: E,
      quarters: b,
      modelValue: C,
      showYearPicker: H,
      setHoverDate: N,
      selectQuarter: O,
      toggleYearPicker: y,
      handleYearSelect: F,
      handleYear: S
    } = Wr(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: C,
      year: m,
      selectQuarter: O,
      handleYearSelect: F,
      handleYear: S
    }) }), (J, le) => (openBlock(), createBlock(fa, {
      "multi-calendars": unref(h2).count,
      collapse: J.collapse,
      stretch: ""
    }, {
      default: withCtx(({ instance: Q }) => [
        createElementVNode("div", {
          class: "dp-quarter-picker-wrap",
          style: normalizeStyle({ minHeight: `${unref(i).modeHeight}px` })
        }, [
          J.$slots["top-extra"] ? renderSlot(J.$slots, "top-extra", {
            key: 0,
            value: J.internalModelValue
          }) : createCommentVNode("", true),
          createElementVNode("div", null, [
            createVNode(In, mergeProps(J.$props, {
              items: unref(L)(Q),
              instance: Q,
              "show-year-picker": unref(H)[Q],
              year: unref(m)(Q),
              "is-disabled": (P) => unref(E)(Q, P),
              onHandleYear: (P) => unref(S)(Q, P),
              onYearSelect: (P) => unref(F)(P, Q),
              onToggleYearPicker: (P) => unref(y)(Q, P == null ? void 0 : P.flow, P == null ? void 0 : P.show)
            }), createSlots({ _: 2 }, [
              renderList(unref(v), (P, re) => ({
                name: P,
                fn: withCtx((B) => [
                  renderSlot(J.$slots, P, normalizeProps(guardReactiveProps(B)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          createElementVNode("div", Vr, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(b)(Q), (P, re) => (openBlock(), createElementBlock("div", { key: re }, [
              createElementVNode("button", {
                type: "button",
                class: normalizeClass(["dp--qr-btn", {
                  "dp--qr-btn-active": P.active,
                  "dp--qr-btn-between": P.isBetween,
                  "dp--qr-btn-disabled": P.disabled,
                  "dp--highlighted": P.highlighted
                }]),
                "data-test": P.value,
                disabled: P.disabled,
                onClick: (B) => unref(O)(P.value, Q, P.disabled),
                onMouseover: (B) => unref(N)(P.value)
              }, [
                J.$slots.quarter ? renderSlot(J.$slots, "quarter", {
                  key: 0,
                  value: P.value,
                  text: P.text
                }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(P.text), 1)
                ], 64))
              ], 42, Ur)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), Kr = ["id", "aria-label"], Gr = {
  key: 0,
  class: "dp--menu-load-container"
}, Qr = /* @__PURE__ */ createElementVNode("span", { class: "dp--menu-loader" }, null, -1), qr = [
  Qr
], Xr = {
  key: 0,
  class: "dp__sidebar_left"
}, Jr = ["data-test", "onClick", "onKeydown"], Zr = {
  key: 2,
  class: "dp__sidebar_right"
}, xr = {
  key: 3,
  class: "dp__action_extra"
}, fn = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...ca,
    shadow: { type: Boolean, default: false },
    openOnTop: { type: Boolean, default: false },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: false },
    collapse: { type: Boolean, default: false },
    getInputRect: { type: Function, default: () => ({}) },
    isTextInputDate: { type: Boolean, default: false }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, c = ref(null), v = computed(() => {
      const { openOnTop: w, ...x } = n;
      return {
        ...x,
        flowStep: re.value,
        collapse: n.collapse,
        noOverlayFocus: n.noOverlayFocus,
        menuWrapRef: c.value
      };
    }), { setMenuFocused: h2, setShiftKey: i, control: L } = Yn(), m = useSlots(), { defaultedTextInput: E, defaultedInline: b, defaultedConfig: C, defaultedUI: H } = Ce(n), N = ref(null), O = ref(0), y = ref(null), F = ref(false), S = ref(null);
    onMounted(() => {
      if (!n.shadow) {
        F.value = true, X(), (void 0).addEventListener("resize", X);
        const w = Ie(c);
        if (w && !E.value.enabled && !b.value.enabled && (h2(true), k()), w) {
          const x = (pe) => {
            C.value.allowPreventDefault && pe.preventDefault(), yt(pe, C.value, true);
          };
          w.addEventListener("pointerdown", x), w.addEventListener("mousedown", x);
        }
      }
    }), onUnmounted(() => {
      (void 0).removeEventListener("resize", X);
    });
    const X = () => {
      const w = Ie(y);
      w && (O.value = w.getBoundingClientRect().width);
    }, { arrowRight: J, arrowLeft: le, arrowDown: Q, arrowUp: P } = bt(), { flowStep: re, updateFlowStep: B, childMount: j, resetFlow: fe, handleFlow: ce } = lo(n, a, S), _ = computed(() => n.monthPicker ? nr : n.yearPicker ? rr : n.timePicker ? Dr : n.quarterPicker ? jr : Hr), A = computed(() => {
      var pe;
      if (C.value.arrowLeft)
        return C.value.arrowLeft;
      const w = (pe = c.value) == null ? void 0 : pe.getBoundingClientRect(), x = n.getInputRect();
      return x.width < O.value && x.left <= ((w == null ? void 0 : w.left) ?? 0) ? `${x.width / 2}px` : "50%";
    }), k = () => {
      const w = Ie(c);
      w && w.focus({ preventScroll: true });
    }, o = computed(() => {
      var w;
      return ((w = S.value) == null ? void 0 : w.getSidebarProps()) || {};
    }), z = () => {
      n.openOnTop && a("recalculate-position");
    }, D = Je(m, "action"), ee = computed(() => n.monthPicker || n.yearPicker ? Je(m, "monthYear") : n.timePicker ? Je(m, "timePicker") : Je(m, "shared")), de = computed(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), u = computed(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly,
      "dp-menu-loading": n.loading
    })), I = computed(
      () => ({
        dp__menu: true,
        dp__menu_index: !b.value.enabled,
        dp__relative: b.value.enabled,
        [n.menuClassName]: !!n.menuClassName,
        ...H.value.menu ?? {}
      })
    ), se = (w) => {
      yt(w, C.value, true);
    }, f = () => {
      n.escClose && a("close-picker");
    }, T = (w) => {
      if (n.arrowNavigation) {
        if (w === je.up)
          return P();
        if (w === je.down)
          return Q();
        if (w === je.left)
          return le();
        if (w === je.right)
          return J();
      } else
        w === je.left || w === je.up ? me("handleArrow", je.left, 0, w === je.up) : me("handleArrow", je.right, 0, w === je.down);
    }, G = (w) => {
      i(w.shiftKey), !n.disableMonthYearSelect && w.code === Re.tab && w.target.classList.contains("dp__menu") && L.value.shiftKeyInMenu && (w.preventDefault(), yt(w, C.value, true), a("close-picker"));
    }, s = () => {
      k(), a("time-picker-close");
    }, oe = (w) => {
      var x, pe, $e;
      (x = S.value) == null || x.toggleTimePicker(false, false), (pe = S.value) == null || pe.toggleMonthPicker(false, false, w), ($e = S.value) == null || $e.toggleYearPicker(false, false, w);
    }, M = (w, x = 0) => {
      var pe, $e, Ge;
      return w === "month" ? (pe = S.value) == null ? void 0 : pe.toggleMonthPicker(false, true, x) : w === "year" ? ($e = S.value) == null ? void 0 : $e.toggleYearPicker(false, true, x) : w === "time" ? (Ge = S.value) == null ? void 0 : Ge.toggleTimePicker(true, false) : oe(x);
    }, me = (w, ...x) => {
      var pe, $e;
      (pe = S.value) != null && pe[w] && (($e = S.value) == null || $e[w](...x));
    }, d = () => {
      me("selectCurrentDate");
    }, Y = (w, x) => {
      me("presetDate", w, x);
    }, V = () => {
      me("clearHoverDate");
    }, R = (w, x) => {
      me("updateMonthYear", w, x);
    }, te = (w, x) => {
      w.preventDefault(), T(x);
    }, ue = (w) => {
      var x;
      if (G(w), w.key === Re.home || w.key === Re.end)
        return me(
          "selectWeekDate",
          w.key === Re.home,
          w.target.getAttribute("id")
        );
      switch ((w.key === Re.pageUp || w.key === Re.pageDown) && (w.shiftKey ? me("changeYear", w.key === Re.pageUp) : me("changeMonth", w.key === Re.pageUp), w.target.getAttribute("id") && ((x = c.value) == null || x.focus({ preventScroll: true }))), w.key) {
        case Re.esc:
          return f();
        case Re.arrowLeft:
          return te(w, je.left);
        case Re.arrowRight:
          return te(w, je.right);
        case Re.arrowUp:
          return te(w, je.up);
        case Re.arrowDown:
          return te(w, je.down);
        default:
          return;
      }
    };
    return t({
      updateMonthYear: R,
      switchView: M,
      handleFlow: ce
    }), (w, x) => {
      var pe, $e, Ge;
      return openBlock(), createElementBlock("div", {
        id: w.uid ? `dp-menu-${w.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: c,
        tabindex: "0",
        role: "dialog",
        "aria-label": (pe = w.ariaLabels) == null ? void 0 : pe.menu,
        class: normalizeClass(I.value),
        style: normalizeStyle({ "--dp-arrow-left": A.value }),
        onMouseleave: V,
        onClick: se,
        onKeydown: ue
      }, [
        (w.disabled || w.readonly) && unref(b).enabled || w.loading ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(u.value)
        }, [
          w.loading ? (openBlock(), createElementBlock("div", Gr, qr)) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        !unref(b).enabled && !w.teleportCenter ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(de.value)
        }, null, 2)) : createCommentVNode("", true),
        createElementVNode("div", {
          ref_key: "innerMenuRef",
          ref: y,
          class: normalizeClass({
            dp__menu_content_wrapper: (($e = w.presetDates) == null ? void 0 : $e.length) || !!w.$slots["left-sidebar"] || !!w.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((Ge = w.presetDates) == null ? void 0 : Ge.length) || !!w.$slots["left-sidebar"] || !!w.$slots["right-sidebar"])
          }),
          style: normalizeStyle({ "--dp-menu-width": `${O.value}px` })
        }, [
          w.$slots["left-sidebar"] ? (openBlock(), createElementBlock("div", Xr, [
            renderSlot(w.$slots, "left-sidebar", normalizeProps(guardReactiveProps(o.value)))
          ])) : createCommentVNode("", true),
          w.presetDates.length ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": true })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(w.presetDates, (ve, vt) => (openBlock(), createElementBlock(Fragment, { key: vt }, [
              ve.slot ? renderSlot(w.$slots, ve.slot, {
                key: 0,
                presetDate: Y,
                label: ve.label,
                value: ve.value
              }) : (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                style: normalizeStyle(ve.style || {}),
                class: normalizeClass(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                "data-test": ve.testId ?? void 0,
                onClick: withModifiers((ot) => Y(ve.value, ve.noTz), ["prevent"]),
                onKeydown: (ot) => unref(qe)(ot, () => Y(ve.value, ve.noTz), true)
              }, toDisplayString(ve.label), 47, Jr))
            ], 64))), 128))
          ], 2)) : createCommentVNode("", true),
          createElementVNode("div", {
            ref_key: "calendarWrapperRef",
            ref: N,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(_.value), mergeProps({
              ref_key: "dynCmpRef",
              ref: S
            }, v.value, {
              "flow-step": unref(re),
              onMount: unref(j),
              onUpdateFlowStep: unref(B),
              onResetFlow: unref(fe),
              onFocusMenu: k,
              onSelectDate: x[0] || (x[0] = (ve) => w.$emit("select-date")),
              onDateUpdate: x[1] || (x[1] = (ve) => w.$emit("date-update", ve)),
              onTooltipOpen: x[2] || (x[2] = (ve) => w.$emit("tooltip-open", ve)),
              onTooltipClose: x[3] || (x[3] = (ve) => w.$emit("tooltip-close", ve)),
              onAutoApply: x[4] || (x[4] = (ve) => w.$emit("auto-apply", ve)),
              onRangeStart: x[5] || (x[5] = (ve) => w.$emit("range-start", ve)),
              onRangeEnd: x[6] || (x[6] = (ve) => w.$emit("range-end", ve)),
              onInvalidFixedRange: x[7] || (x[7] = (ve) => w.$emit("invalid-fixed-range", ve)),
              onTimeUpdate: x[8] || (x[8] = (ve) => w.$emit("time-update")),
              onAmPmChange: x[9] || (x[9] = (ve) => w.$emit("am-pm-change", ve)),
              onTimePickerOpen: x[10] || (x[10] = (ve) => w.$emit("time-picker-open", ve)),
              onTimePickerClose: s,
              onRecalculatePosition: z,
              onUpdateMonthYear: x[11] || (x[11] = (ve) => w.$emit("update-month-year", ve)),
              onAutoApplyInvalid: x[12] || (x[12] = (ve) => w.$emit("auto-apply-invalid", ve)),
              onInvalidDate: x[13] || (x[13] = (ve) => w.$emit("invalid-date", ve)),
              onOverlayToggle: x[14] || (x[14] = (ve) => w.$emit("overlay-toggle", ve)),
              "onUpdate:internalModelValue": x[15] || (x[15] = (ve) => w.$emit("update:internal-model-value", ve))
            }), createSlots({ _: 2 }, [
              renderList(ee.value, (ve, vt) => ({
                name: ve,
                fn: withCtx((ot) => [
                  renderSlot(w.$slots, ve, normalizeProps(guardReactiveProps({ ...ot })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          w.$slots["right-sidebar"] ? (openBlock(), createElementBlock("div", Zr, [
            renderSlot(w.$slots, "right-sidebar", normalizeProps(guardReactiveProps(o.value)))
          ])) : createCommentVNode("", true),
          w.$slots["action-extra"] ? (openBlock(), createElementBlock("div", xr, [
            w.$slots["action-extra"] ? renderSlot(w.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: d
            }) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 6),
        !w.autoApply || unref(C).keepActionRow ? (openBlock(), createBlock(ql, mergeProps({
          key: 2,
          "menu-mount": F.value
        }, v.value, {
          "calendar-width": O.value,
          onClosePicker: x[16] || (x[16] = (ve) => w.$emit("close-picker")),
          onSelectDate: x[17] || (x[17] = (ve) => w.$emit("select-date")),
          onInvalidSelect: x[18] || (x[18] = (ve) => w.$emit("invalid-select")),
          onSelectNow: d
        }), createSlots({ _: 2 }, [
          renderList(unref(D), (ve, vt) => ({
            name: ve,
            fn: withCtx((ot) => [
              renderSlot(w.$slots, ve, normalizeProps(guardReactiveProps({ ...ot })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : createCommentVNode("", true)
      ], 46, Kr);
    };
  }
});
var Ct = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Ct || {});
const eo = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: l,
  pickerWrapperRef: a,
  inline: n,
  emit: c,
  props: v,
  slots: h$1
}) => {
  const i = ref({}), L = ref(false), m = ref({
    top: "0",
    left: "0"
  }), E = ref(false), b = toRef(v, "teleportCenter");
  watch(b, () => {
    m.value = JSON.parse(JSON.stringify({})), X();
  });
  const C = (k) => {
    if (v.teleport) {
      const o = k.getBoundingClientRect();
      return {
        left: o.left + (void 0).scrollX,
        top: o.top + (void 0).scrollY
      };
    }
    return { top: 0, left: 0 };
  }, H = (k, o) => {
    m.value.left = `${k + o - i.value.width}px`;
  }, N = (k) => {
    m.value.left = `${k}px`;
  }, O = (k, o) => {
    v.position === Ct.left && N(k), v.position === Ct.right && H(k, o), v.position === Ct.center && (m.value.left = `${k + o / 2 - i.value.width / 2}px`);
  }, y = (k) => {
    const { width: o, height: z } = k.getBoundingClientRect(), { top: D, left: ee } = v.altPosition ? v.altPosition(k) : C(k);
    return { top: +D, left: +ee, width: o, height: z };
  }, F = () => {
    m.value.left = "50%", m.value.top = "50%", m.value.transform = "translate(-50%, -50%)", m.value.position = "fixed", delete m.value.opacity;
  }, S = () => {
    const k = Ie(l), { top: o, left: z, transform: D } = v.altPosition(k);
    m.value = { top: `${o}px`, left: `${z}px`, transform: D ?? "" };
  }, X = (k = true) => {
    var o;
    if (!n.value.enabled) {
      if (b.value)
        return F();
      if (v.altPosition !== null)
        return S();
      if (k) {
        const z = v.teleport ? (o = t.value) == null ? void 0 : o.$el : e.value;
        z && (i.value = z.getBoundingClientRect()), c("recalculate-position");
      }
      return j();
    }
  }, J = ({ inputEl: k, left: o, width: z }) => {
    (void 0).screen.width > 768 && !L.value && O(o, z), P(k);
  }, le = (k) => {
    const { top: o, left: z, height: D, width: ee } = y(k);
    m.value.top = `${D + o + +v.offset}px`, E.value = false, L.value || (m.value.left = `${z + ee / 2 - i.value.width / 2}px`), J({ inputEl: k, left: z, width: ee });
  }, Q = (k) => {
    const { top: o, left: z, width: D } = y(k);
    m.value.top = `${o - +v.offset - i.value.height}px`, E.value = true, J({ inputEl: k, left: z, width: D });
  }, P = (k) => {
    if (v.autoPosition) {
      const { left: o, width: z } = y(k), { left: D, right: ee } = i.value;
      if (!L.value) {
        if (Math.abs(D) !== Math.abs(ee)) {
          if (D <= 0)
            return L.value = true, N(o);
          if (ee >= (void 0).documentElement.clientWidth)
            return L.value = true, H(o, z);
        }
        return O(o, z);
      }
    }
  }, re = () => {
    const k = Ie(l);
    if (k) {
      const { height: o } = i.value, { top: z, height: D } = k.getBoundingClientRect(), de = (void 0).innerHeight - z - D, u = z;
      return o <= de ? Mt.bottom : o > de && o <= u ? Mt.top : de >= u ? Mt.bottom : Mt.top;
    }
    return Mt.bottom;
  }, B = (k) => re() === Mt.bottom ? le(k) : Q(k), j = () => {
    const k = Ie(l);
    if (k)
      return v.autoPosition ? B(k) : le(k);
  }, fe = function(k) {
    if (k) {
      const o = k.scrollHeight > k.clientHeight, D = (void 0).getComputedStyle(k).overflowY.indexOf("hidden") !== -1;
      return o && !D;
    }
    return true;
  }, ce = function(k) {
    return !k || k === (void 0).body || k.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? void 0 : fe(k) ? k : ce(k.assignedSlot ? k.assignedSlot.parentNode : k.parentNode);
  }, _ = (k) => {
    if (k)
      switch (v.position) {
        case Ct.left:
          return { left: 0, transform: "translateX(0)" };
        case Ct.right:
          return { left: `${k.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${k.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: E,
    menuStyle: m,
    xCorrect: L,
    setMenuPosition: X,
    getScrollableParent: ce,
    shadowRender: (k, o) => {
      var I, se, f;
      const z = (void 0).createElement("div"), D = (I = Ie(l)) == null ? void 0 : I.getBoundingClientRect();
      z.setAttribute("id", "dp--temp-container");
      const ee = (se = a.value) != null && se.clientWidth ? a.value : (void 0).body;
      ee.append(z);
      const de = _(D), u = h(
        k,
        {
          ...o,
          shadow: true,
          style: { opacity: 0, position: "absolute", ...de }
        },
        Object.fromEntries(
          Object.keys(h$1).filter((T) => ["right-sidebar", "left-sidebar", "top-extra", "action-extra"].includes(T)).map((T) => [T, h$1[T]])
        )
      );
      render(u, z), i.value = (f = u.el) == null ? void 0 : f.getBoundingClientRect(), render(null, z), ee.removeChild(z);
    }
  };
}, mt = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] },
  { name: "top-extra", use: ["shared", "month-year"] },
  { name: "tp-inline-arrow-up", use: ["shared", "time"] },
  { name: "tp-inline-arrow-down", use: ["shared", "time"] }
], to = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], ao = {
  all: () => mt,
  monthYear: () => mt.filter((e) => e.use.includes("month-year")),
  input: () => to,
  timePicker: () => mt.filter((e) => e.use.includes("time")),
  action: () => mt.filter((e) => e.use.includes("action")),
  calendar: () => mt.filter((e) => e.use.includes("calendar")),
  menu: () => mt.filter((e) => e.use.includes("menu")),
  shared: () => mt.filter((e) => e.use.includes("shared")),
  yearMode: () => mt.filter((e) => e.use.includes("year-mode"))
}, Je = (e, t, l) => {
  const a = [];
  return ao[t]().forEach((n) => {
    e[n.name] && a.push(n.name);
  }), l != null && l.length && l.forEach((n) => {
    n.slot && a.push(n.slot);
  }), a;
}, Xt = (e) => {
  const t = computed(() => (a) => e.value ? a ? e.value.open : e.value.close : ""), l = computed(() => (a) => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: l };
}, Jt = (e, t, l) => {
  const { defaultedRange: a, defaultedTz: n } = Ce(e), c = U(Ze(U(), n.value.timezone)), v = ref([{ month: getMonth(c), year: getYear(c) }]), h2 = (b) => {
    const C = {
      hours: getHours(c),
      minutes: getMinutes(c),
      seconds: 0
    };
    return a.value.enabled ? [C[b], C[b]] : C[b];
  }, i = reactive({
    hours: h2("hours"),
    minutes: h2("minutes"),
    seconds: h2("seconds")
  });
  watch(
    a,
    (b, C) => {
      b.enabled !== C.enabled && (i.hours = h2("hours"), i.minutes = h2("minutes"), i.seconds = h2("seconds"));
    },
    { deep: true }
  );
  const L = computed({
    get: () => e.internalModelValue,
    set: (b) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", b);
    }
  }), m = computed(
    () => (b) => v.value[b] ? v.value[b].month : 0
  ), E = computed(
    () => (b) => v.value[b] ? v.value[b].year : 0
  );
  return watch(
    L,
    (b, C) => {
      l && JSON.stringify(b ?? {}) !== JSON.stringify(C ?? {}) && l();
    },
    { deep: true }
  ), {
    calendars: v,
    time: i,
    modelValue: L,
    month: m,
    year: E,
    today: c
  };
}, no = (e, t) => {
  const {
    defaultedMultiCalendars: l,
    defaultedMultiDates: a,
    defaultedUI: n,
    defaultedHighlight: c,
    defaultedTz: v,
    propDates: h2,
    defaultedRange: i
  } = Ce(t), { isDisabled: L } = kt(t), m = ref(null), E = ref(Ze(/* @__PURE__ */ new Date(), v.value.timezone)), b = (f) => {
    !f.current && t.hideOffsetDates || (m.value = f.value);
  }, C = () => {
    m.value = null;
  }, H = (f) => Array.isArray(e.value) && i.value.enabled && e.value[0] && m.value ? f ? Be(m.value, e.value[0]) : _e(m.value, e.value[0]) : true, N = (f, T) => {
    const G = () => e.value ? T ? e.value[0] || null : e.value[1] : null, s = e.value && Array.isArray(e.value) ? G() : null;
    return De(U(f.value), s);
  }, O = (f) => {
    const T = Array.isArray(e.value) ? e.value[0] : null;
    return f ? !_e(m.value ?? null, T) : true;
  }, y = (f, T = true) => (i.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !f.current ? false : De(U(f.value), e.value[T ? 0 : 1]) : i.value.enabled ? N(f, T) && O(T) || De(f.value, Array.isArray(e.value) ? e.value[0] : null) && H(T) : false, F = (f, T) => {
    if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
      const G = De(f.value, m.value);
      return T ? Be(e.value[0], f.value) && G : _e(e.value[0], f.value) && G;
    }
    return false;
  }, S = (f) => !e.value || t.hideOffsetDates && !f.current ? false : i.value.enabled ? t.modelAuto && Array.isArray(e.value) ? De(f.value, e.value[0] ? e.value[0] : E.value) : false : a.value.enabled && Array.isArray(e.value) ? e.value.some((T) => De(T, f.value)) : De(f.value, e.value ? e.value : E.value), X = (f) => {
    if (i.value.autoRange || t.weekPicker) {
      if (m.value) {
        if (t.hideOffsetDates && !f.current)
          return false;
        const T = addDays(m.value, +i.value.autoRange), G = it(U(m.value), t.weekStart);
        return t.weekPicker ? De(G[1], U(f.value)) : De(T, U(f.value));
      }
      return false;
    }
    return false;
  }, J = (f) => {
    if (i.value.autoRange || t.weekPicker) {
      if (m.value) {
        const T = addDays(m.value, +i.value.autoRange);
        if (t.hideOffsetDates && !f.current)
          return false;
        const G = it(U(m.value), t.weekStart);
        return t.weekPicker ? Be(f.value, G[0]) && _e(f.value, G[1]) : Be(f.value, m.value) && _e(f.value, T);
      }
      return false;
    }
    return false;
  }, le = (f) => {
    if (i.value.autoRange || t.weekPicker) {
      if (m.value) {
        if (t.hideOffsetDates && !f.current)
          return false;
        const T = it(U(m.value), t.weekStart);
        return t.weekPicker ? De(T[0], f.value) : De(m.value, f.value);
      }
      return false;
    }
    return false;
  }, Q = (f) => da(e.value, m.value, f.value), P = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : false, re = () => t.modelAuto ? Mn(t.internalModelValue) : true, B = (f) => {
    if (t.weekPicker)
      return false;
    const T = i.value.enabled ? !y(f) && !y(f, false) : true;
    return !L(f.value) && !S(f) && !(!f.current && t.hideOffsetDates) && T;
  }, j = (f) => i.value.enabled ? t.modelAuto ? P() && S(f) : false : S(f), fe = (f) => c.value ? kl(f.value, h2.value.highlight) : false, ce = (f) => {
    const T = L(f.value);
    return T && (typeof c.value == "function" ? !c.value(f.value, T) : !c.value.options.highlightDisabled);
  }, _ = (f) => {
    var T;
    return typeof c.value == "function" ? c.value(f.value) : (T = c.value.weekdays) == null ? void 0 : T.includes(f.value.getDay());
  }, A = (f) => (i.value.enabled || t.weekPicker) && (!(l.value.count > 0) || f.current) && re() && !(!f.current && t.hideOffsetDates) && !S(f) ? Q(f) : false, k = (f) => {
    const { isRangeStart: T, isRangeEnd: G } = ee(f), s = i.value.enabled ? T || G : false;
    return {
      dp__cell_offset: !f.current,
      dp__pointer: !t.disabled && !(!f.current && t.hideOffsetDates) && !L(f.value),
      dp__cell_disabled: L(f.value),
      dp__cell_highlight: !ce(f) && (fe(f) || _(f)) && !j(f) && !s && !le(f) && !(A(f) && t.weekPicker) && !G,
      dp__cell_highlight_active: !ce(f) && (fe(f) || _(f)) && j(f),
      dp__today: !t.noToday && De(f.value, E.value) && f.current,
      "dp--past": _e(f.value, E.value),
      "dp--future": Be(f.value, E.value)
    };
  }, o = (f) => ({
    dp__active_date: j(f),
    dp__date_hover: B(f)
  }), z = (f) => {
    if (e.value && !Array.isArray(e.value)) {
      const T = it(e.value, t.weekStart);
      return {
        ...u(f),
        dp__range_start: De(T[0], f.value),
        dp__range_end: De(T[1], f.value),
        dp__range_between_week: Be(f.value, T[0]) && _e(f.value, T[1])
      };
    }
    return {
      ...u(f)
    };
  }, D = (f) => {
    if (e.value && Array.isArray(e.value)) {
      const T = it(e.value[0], t.weekStart), G = e.value[1] ? it(e.value[1], t.weekStart) : [];
      return {
        ...u(f),
        dp__range_start: De(T[0], f.value) || De(G[0], f.value),
        dp__range_end: De(T[1], f.value) || De(G[1], f.value),
        dp__range_between_week: Be(f.value, T[0]) && _e(f.value, T[1]) || Be(f.value, G[0]) && _e(f.value, G[1]),
        dp__range_between: Be(f.value, T[1]) && _e(f.value, G[0])
      };
    }
    return {
      ...u(f)
    };
  }, ee = (f) => {
    const T = l.value.count > 0 ? f.current && y(f) && re() : y(f) && re(), G = l.value.count > 0 ? f.current && y(f, false) && re() : y(f, false) && re();
    return { isRangeStart: T, isRangeEnd: G };
  }, de = (f) => {
    const { isRangeStart: T, isRangeEnd: G } = ee(f);
    return {
      dp__range_start: T,
      dp__range_end: G,
      dp__range_between: A(f),
      dp__date_hover: De(f.value, m.value) && !T && !G && !t.weekPicker,
      dp__date_hover_start: F(f, true),
      dp__date_hover_end: F(f, false)
    };
  }, u = (f) => ({
    ...de(f),
    dp__cell_auto_range: J(f),
    dp__cell_auto_range_start: le(f),
    dp__cell_auto_range_end: X(f)
  }), I = (f) => i.value.enabled ? i.value.autoRange ? u(f) : t.modelAuto ? { ...o(f), ...de(f) } : t.weekPicker ? D(f) : de(f) : t.weekPicker ? z(f) : o(f);
  return {
    setHoverDate: b,
    clearHoverDate: C,
    getDayClassData: (f) => t.hideOffsetDates && !f.current ? {} : {
      ...k(f),
      ...I(f),
      [t.dayClass ? t.dayClass(f.value, t.internalModelValue) : ""]: true,
      [t.calendarCellClassName]: !!t.calendarCellClassName,
      ...n.value.calendarCell ?? {}
    }
  };
}, kt = (e) => {
  const { defaultedFilters: t, defaultedRange: l, propDates: a, defaultedMultiDates: n } = Ce(e), c = (_) => a.value.disabledDates ? typeof a.value.disabledDates == "function" ? a.value.disabledDates(U(_)) : !!sa(_, a.value.disabledDates) : false, v = (_) => a.value.maxDate ? e.yearPicker ? getYear(_) > getYear(a.value.maxDate) : Be(_, a.value.maxDate) : false, h2 = (_) => a.value.minDate ? e.yearPicker ? getYear(_) < getYear(a.value.minDate) : _e(_, a.value.minDate) : false, i = (_) => {
    const A = v(_), k = h2(_), o = c(_), D = t.value.months.map((se) => +se).includes(getMonth(_)), ee = e.disabledWeekDays.length ? e.disabledWeekDays.some((se) => +se === getDay(_)) : false, de = C(_), u = getYear(_), I = u < +e.yearRange[0] || u > +e.yearRange[1];
    return !(A || k || o || D || I || ee || de);
  }, L = (_, A) => _e(...gt(a.value.minDate, _, A)) || De(...gt(a.value.minDate, _, A)), m = (_, A) => Be(...gt(a.value.maxDate, _, A)) || De(...gt(a.value.maxDate, _, A)), E = (_, A, k) => {
    let o = false;
    return a.value.maxDate && k && m(_, A) && (o = true), a.value.minDate && !k && L(_, A) && (o = true), o;
  }, b = (_, A, k, o) => {
    let z = false;
    return o ? a.value.minDate && a.value.maxDate ? z = E(_, A, k) : (a.value.minDate && L(_, A) || a.value.maxDate && m(_, A)) && (z = true) : z = true, z;
  }, C = (_) => Array.isArray(a.value.allowedDates) && !a.value.allowedDates.length ? true : a.value.allowedDates ? !sa(_, a.value.allowedDates) : false, H = (_) => !i(_), N = (_) => l.value.noDisabledRange ? !eachDayOfInterval({ start: _[0], end: _[1] }).some((k) => H(k)) : true, O = (_) => {
    if (_) {
      const A = getYear(_);
      return A >= +e.yearRange[0] && A <= e.yearRange[1];
    }
    return true;
  }, y = (_, A) => !!(Array.isArray(_) && _[A] && (l.value.maxRange || l.value.minRange) && O(_[A])), F = (_, A, k = 0) => {
    if (y(A, k) && O(_)) {
      const o = differenceInCalendarDays(_, A[k]), z = Pn(A[k], _), D = z.length === 1 ? 0 : z.filter((de) => H(de)).length, ee = Math.abs(o) - (l.value.minMaxRawRange ? 0 : D);
      if (l.value.minRange && l.value.maxRange)
        return ee >= +l.value.minRange && ee <= +l.value.maxRange;
      if (l.value.minRange)
        return ee >= +l.value.minRange;
      if (l.value.maxRange)
        return ee <= +l.value.maxRange;
    }
    return true;
  }, S = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, X = (_) => Array.isArray(_) ? [_[0] ? Pa(_[0]) : null, _[1] ? Pa(_[1]) : null] : Pa(_), J = (_, A, k) => _.find(
    (o) => +o.hours === getHours(A) && o.minutes === "*" ? true : +o.minutes === getMinutes(A) && +o.hours === getHours(A)
  ) && k, le = (_, A, k) => {
    const [o, z] = _, [D, ee] = A;
    return !J(o, D, k) && !J(z, ee, k) && k;
  }, Q = (_, A) => {
    const k = Array.isArray(A) ? A : [A];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? le(e.disabledTimes, k, _) : !k.some((o) => J(e.disabledTimes, o, _)) : _;
  }, P = (_, A) => {
    const k = Array.isArray(A) ? [St(A[0]), A[1] ? St(A[1]) : void 0] : St(A), o = !e.disabledTimes(k);
    return _ && o;
  }, re = (_, A) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? Q(A, _) : P(A, _) : A, B = (_) => {
    let A = true;
    if (!_ || S())
      return true;
    const k = !a.value.minDate && !a.value.maxDate ? X(_) : _;
    return (e.maxTime || a.value.maxDate) && (A = sn(
      e.maxTime,
      a.value.maxDate,
      "max",
      Ye(k),
      A
    )), (e.minTime || a.value.minDate) && (A = sn(
      e.minTime,
      a.value.minDate,
      "min",
      Ye(k),
      A
    )), re(_, A);
  }, j = (_) => {
    if (!e.monthPicker)
      return true;
    let A = true;
    const k = U(lt(_));
    if (a.value.minDate && a.value.maxDate) {
      const o = U(lt(a.value.minDate)), z = U(lt(a.value.maxDate));
      return Be(k, o) && _e(k, z) || De(k, o) || De(k, z);
    }
    if (a.value.minDate) {
      const o = U(lt(a.value.minDate));
      A = Be(k, o) || De(k, o);
    }
    if (a.value.maxDate) {
      const o = U(lt(a.value.maxDate));
      A = _e(k, o) || De(k, o);
    }
    return A;
  }, fe = computed(() => (_) => !e.enableTimePicker || e.ignoreTimeValidation ? true : B(_)), ce = computed(() => (_) => e.monthPicker ? Array.isArray(_) && (l.value.enabled || n.value.enabled) ? !_.filter((k) => !j(k)).length : j(_) : true);
  return {
    isDisabled: H,
    validateDate: i,
    validateMonthYearInRange: b,
    isDateRangeAllowed: N,
    checkMinMaxRange: F,
    isValidTime: B,
    isTimeValid: fe,
    isMonthValid: ce
  };
}, ma = () => {
  const e = computed(() => (a, n) => a == null ? void 0 : a.includes(n)), t = computed(() => (a, n) => a.count ? a.solo ? true : n === 0 : true), l = computed(() => (a, n) => a.count ? a.solo ? true : n === a.count - 1 : true);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: l };
}, lo = (e, t, l) => {
  const a = ref(0), n = reactive({
    [Tt.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [Tt.calendar]: false,
    [Tt.header]: false
  }), c = computed(() => e.monthPicker || e.timePicker), v = (E) => {
    var b;
    if ((b = e.flow) != null && b.length) {
      if (!E && c.value)
        return m();
      n[E] = true, Object.keys(n).filter((C) => !n[C]).length || m();
    }
  }, h2 = () => {
    var E, b;
    (E = e.flow) != null && E.length && a.value !== -1 && (a.value += 1, t("flow-step", a.value), m()), ((b = e.flow) == null ? void 0 : b.length) === a.value && nextTick().then(() => i());
  }, i = () => {
    a.value = -1;
  }, L = (E, b, ...C) => {
    var H, N;
    e.flow[a.value] === E && l.value && ((N = (H = l.value)[b]) == null || N.call(H, ...C));
  }, m = (E = 0) => {
    E && (a.value += E), L(He.month, "toggleMonthPicker", true), L(He.year, "toggleYearPicker", true), L(He.calendar, "toggleTimePicker", false, true), L(He.time, "toggleTimePicker", true, true);
    const b = e.flow[a.value];
    (b === He.hours || b === He.minutes || b === He.seconds) && L(b, "toggleTimePicker", true, true, b);
  };
  return { childMount: v, updateFlowStep: h2, resetFlow: i, handleFlow: m, flowStep: a };
}, ro = {
  key: 1,
  class: "dp__input_wrap"
}, oo = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], so = {
  key: 2,
  class: "dp__clear_icon"
}, uo = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: false },
    inputValue: { type: String, default: "" },
    ...ca
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      defaultedTextInput: c,
      defaultedAriaLabels: v,
      defaultedInline: h2,
      defaultedConfig: i,
      defaultedRange: L,
      defaultedMultiDates: m,
      defaultedUI: E,
      getDefaultPattern: b,
      getDefaultStartTime: C
    } = Ce(n), { checkMinMaxRange: H } = kt(n), N = ref(), O = ref(null), y = ref(false), F = ref(false), S = computed(
      () => ({
        dp__pointer: !n.disabled && !n.readonly && !c.value.enabled,
        dp__disabled: n.disabled,
        dp__input_readonly: !c.value.enabled,
        dp__input: true,
        dp__input_icon_pad: !n.hideInputIcon,
        dp__input_valid: !!n.state,
        dp__input_invalid: n.state === false,
        dp__input_focus: y.value || n.isMenuOpen,
        dp__input_reg: !c.value.enabled,
        [n.inputClassName]: !!n.inputClassName,
        ...E.value.input ?? {}
      })
    ), X = () => {
      a("set-input-date", null), n.clearable && n.autoApply && (a("set-empty-date"), N.value = null);
    }, J = (D) => {
      const ee = C();
      return wl(
        D,
        c.value.format ?? b(),
        ee ?? Rn({}, n.enableSeconds),
        n.inputValue,
        F.value,
        n.formatLocale
      );
    }, le = (D) => {
      const { rangeSeparator: ee } = c.value, [de, u] = D.split(`${ee}`);
      if (de) {
        const I = J(de.trim()), se = u ? J(u.trim()) : null;
        if (isAfter(I, se))
          return;
        const f = I && se ? [I, se] : [I];
        H(se, f, 0) && (N.value = I ? f : null);
      }
    }, Q = () => {
      F.value = true;
    }, P = (D) => {
      if (L.value.enabled)
        le(D);
      else if (m.value.enabled) {
        const ee = D.split(";");
        N.value = ee.map((de) => J(de.trim())).filter((de) => de);
      } else
        N.value = J(D);
    }, re = (D) => {
      var de;
      const ee = typeof D == "string" ? D : (de = D.target) == null ? void 0 : de.value;
      ee !== "" ? (c.value.openMenu && !n.isMenuOpen && a("open"), P(ee), a("set-input-date", N.value)) : X(), F.value = false, a("update:input-value", ee);
    }, B = (D) => {
      c.value.enabled ? (P(D.target.value), c.value.enterSubmit && Ea(N.value) && n.inputValue !== "" ? (a("set-input-date", N.value, true), N.value = null) : c.value.enterSubmit && n.inputValue === "" && (N.value = null, a("clear"))) : ce(D);
    }, j = (D) => {
      c.value.enabled && c.value.tabSubmit && P(D.target.value), c.value.tabSubmit && Ea(N.value) && n.inputValue !== "" ? (a("set-input-date", N.value, true, true), N.value = null) : c.value.tabSubmit && n.inputValue === "" && (N.value = null, a("clear", true));
    }, fe = () => {
      y.value = true, a("focus"), nextTick().then(() => {
        var D;
        c.value.enabled && c.value.selectOnFocus && ((D = O.value) == null || D.select());
      });
    }, ce = (D) => {
      D.preventDefault(), yt(D, i.value, true), c.value.enabled && c.value.openMenu && !h2.value.input && !n.isMenuOpen ? a("open") : c.value.enabled || a("toggle");
    }, _ = () => {
      a("real-blur"), y.value = false, (!n.isMenuOpen || h2.value.enabled && h2.value.input) && a("blur"), n.autoApply && c.value.enabled && N.value && !n.isMenuOpen && (a("set-input-date", N.value), a("select-date"), N.value = null);
    }, A = (D) => {
      yt(D, i.value, true), a("clear");
    }, k = (D) => {
      if (D.key === "Tab" && j(D), D.key === "Enter" && B(D), !c.value.enabled) {
        if (D.code === "Tab")
          return;
        D.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var D;
        (D = O.value) == null || D.focus({ preventScroll: true });
      },
      setParsedDate: (D) => {
        N.value = D;
      }
    }), (D, ee) => {
      var de;
      return openBlock(), createElementBlock("div", { onClick: ce }, [
        D.$slots.trigger && !D.$slots["dp-input"] && !unref(h2).enabled ? renderSlot(D.$slots, "trigger", { key: 0 }) : createCommentVNode("", true),
        !D.$slots.trigger && (!unref(h2).enabled || unref(h2).input) ? (openBlock(), createElementBlock("div", ro, [
          D.$slots["dp-input"] && !D.$slots.trigger && (!unref(h2).enabled || unref(h2).enabled && unref(h2).input) ? renderSlot(D.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: re,
            onEnter: B,
            onTab: j,
            onClear: A,
            onBlur: _,
            onKeypress: k,
            onPaste: Q,
            onFocus: fe,
            openMenu: () => D.$emit("open"),
            closeMenu: () => D.$emit("close"),
            toggleMenu: () => D.$emit("toggle")
          }) : createCommentVNode("", true),
          D.$slots["dp-input"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("input", {
            key: 1,
            id: D.uid ? `dp-input-${D.uid}` : void 0,
            ref_key: "inputRef",
            ref: O,
            "data-test": "dp-input",
            name: D.name,
            class: normalizeClass(S.value),
            inputmode: unref(c).enabled ? "text" : "none",
            placeholder: D.placeholder,
            disabled: D.disabled,
            readonly: D.readonly,
            required: D.required,
            value: e.inputValue,
            autocomplete: D.autocomplete,
            "aria-label": (de = unref(v)) == null ? void 0 : de.input,
            "aria-disabled": D.disabled || void 0,
            "aria-invalid": D.state === false ? true : void 0,
            onInput: re,
            onBlur: _,
            onFocus: fe,
            onKeypress: k,
            onKeydown: k,
            onPaste: Q
          }, null, 42, oo)),
          createElementVNode("div", {
            onClick: ee[2] || (ee[2] = (u) => a("toggle"))
          }, [
            D.$slots["input-icon"] && !D.hideInputIcon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: ee[0] || (ee[0] = (u) => a("toggle"))
            }, [
              renderSlot(D.$slots, "input-icon")
            ])) : createCommentVNode("", true),
            !D.$slots["input-icon"] && !D.hideInputIcon && !D.$slots["dp-input"] ? (openBlock(), createBlock(unref(Et), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: ee[1] || (ee[1] = (u) => a("toggle"))
            })) : createCommentVNode("", true)
          ]),
          D.$slots["clear-icon"] && e.inputValue && D.clearable && !D.disabled && !D.readonly ? (openBlock(), createElementBlock("span", so, [
            renderSlot(D.$slots, "clear-icon", { clear: A })
          ])) : createCommentVNode("", true),
          D.clearable && !D.$slots["clear-icon"] && e.inputValue && !D.disabled && !D.readonly ? (openBlock(), createBlock(unref(wn), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: ee[3] || (ee[3] = withModifiers((u) => A(u), ["prevent"]))
          })) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
}), io = void 0, Ya = () => {
}, co = (e) => getCurrentScope() ? (onScopeDispose(e), true) : false, fo = (e, t, l, a) => {
  if (!e)
    return Ya;
  let n = Ya;
  const c = watch(
    () => unref(e),
    (h2) => {
      n(), h2 && (h2.addEventListener(t, l, a), n = () => {
        h2.removeEventListener(t, l, a), n = Ya;
      });
    },
    { immediate: true, flush: "post" }
  ), v = () => {
    c(), n();
  };
  return co(v), v;
}, vo = (e, t, l, a = {}) => {
  const { window: n = io, event: c = "pointerdown" } = a;
  return n ? fo(n, c, (h2) => {
    const i = Ie(e), L = Ie(t);
    !i || !L || i === h2.target || h2.composedPath().includes(i) || h2.composedPath().includes(L) || l(h2);
  }, { passive: true }) : void 0;
}, mo = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...ca
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, c = useSlots(), v = ref(false), h2 = toRef(n, "modelValue"), i = toRef(n, "timezone"), L = ref(null), m = ref(null), E = ref(null), b = ref(false), C = ref(null), H = ref(false), N = ref(false), O = ref(false), y = ref(false), { setMenuFocused: F, setShiftKey: S } = Yn(), { clearArrowNav: X } = bt(), { validateDate: J, isValidTime: le } = kt(n), {
      defaultedTransitions: Q,
      defaultedTextInput: P,
      defaultedInline: re,
      defaultedConfig: B,
      defaultedRange: j,
      defaultedMultiDates: fe
    } = Ce(n), { menuTransition: ce, showTransition: _ } = Xt(Q);
    onMounted(() => {
      f(n.modelValue), nextTick().then(() => {
        if (!re.value.enabled) {
          const g = de(C.value);
          g == null || g.addEventListener("scroll", R);
        }
      }), re.value.enabled && (v.value = true);
    }), onUnmounted(() => {
      if (!re.value.enabled) {
        const g = de(C.value);
        g == null || g.removeEventListener("scroll", R);
      }
    });
    const A = Je(c, "all", n.presetDates), k = Je(c, "input");
    watch(
      [h2, i],
      () => {
        f(h2.value);
      },
      { deep: true }
    );
    const { openOnTop: o, menuStyle: z, xCorrect: D, setMenuPosition: ee, getScrollableParent: de, shadowRender: u } = eo({
      menuRef: L,
      menuRefInner: m,
      inputRef: E,
      pickerWrapperRef: C,
      inline: re,
      emit: a,
      props: n,
      slots: c
    }), {
      inputValue: I,
      internalModelValue: se,
      parseExternalModelValue: f,
      emitModelValue: T,
      formatInputValue: G,
      checkBeforeEmit: s
    } = jl(a, n, b), oe = computed(
      () => ({
        dp__main: true,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: re.value.enabled,
        "dp--flex-display-collapsed": O.value,
        dp__flex_display_with_input: re.value.input
      })
    ), M = computed(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), me = computed(() => n.teleport ? {
      to: typeof n.teleport == "boolean" ? "body" : n.teleport,
      disabled: !n.teleport || re.value.enabled
    } : {}), d = computed(() => ({ class: "dp__outer_menu_wrap" })), Y = computed(() => re.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), V = () => {
      var g, W;
      return (W = (g = E.value) == null ? void 0 : g.$el) == null ? void 0 : W.getBoundingClientRect();
    }, R = () => {
      v.value && (B.value.closeOnScroll ? Xe() : ee());
    }, x = () => {
      !n.disabled && !n.readonly && (u(fn, n), ee(false), v.value = true, v.value && a("open"), v.value || Ft(), f(n.modelValue));
    }, pe = () => {
      var g;
      I.value = "", Ft(), (g = E.value) == null || g.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), B.value.closeOnClearValue && Xe();
    }, $e = () => {
      const g = se.value;
      return !g || !Array.isArray(g) && J(g) ? true : Array.isArray(g) ? fe.value.enabled || g.length === 2 && J(g[0]) && J(g[1]) ? true : j.value.partialRange && !n.timePicker ? J(g[0]) : false : false;
    }, Ge = () => {
      s() && $e() ? (T(), Xe()) : a("invalid-select", se.value);
    }, ve = (g) => {
      vt(), T(), B.value.closeOnAutoApply && !g && Xe();
    }, vt = () => {
      E.value && P.value.enabled && E.value.setParsedDate(se.value);
    }, ot = (g = false) => {
      n.autoApply && le(se.value) && $e() && (j.value.enabled && Array.isArray(se.value) ? (j.value.partialRange || se.value.length === 2) && ve(g) : ve(g));
    }, Ft = () => {
      P.value.enabled || (se.value = null);
    }, Xe = () => {
      re.value.enabled || (v.value && (v.value = false, D.value = false, F(false), S(false), X(), a("closed"), I.value && f(h2.value)), Ft(), a("blur"));
    }, Lt = (g, W, ne = false) => {
      if (!g) {
        se.value = null;
        return;
      }
      const Ae = Array.isArray(g) ? !g.some((wt) => !J(wt)) : J(g), Fe = le(g);
      Ae && Fe && (y.value = true, se.value = g, W && (H.value = ne, Ge(), a("text-submit")), nextTick().then(() => {
        y.value = false;
      }));
    }, ga = () => {
      n.autoApply && le(se.value) && T(), vt();
    }, Zt = () => v.value ? Xe() : x(), ya = (g) => {
      se.value = g;
    }, pa = () => {
      P.value.enabled && (b.value = true, G()), a("focus");
    }, ha = () => {
      if (P.value.enabled && (b.value = false, f(n.modelValue), H.value)) {
        const g = hl(C.value, N.value);
        g == null || g.focus();
      }
      a("blur");
    }, ba = (g) => {
      m.value && m.value.updateMonthYear(0, {
        month: ln(g.month),
        year: ln(g.year)
      });
    }, ka = (g) => {
      f(g ?? n.modelValue);
    }, wa = (g, W) => {
      var ne;
      (ne = m.value) == null || ne.switchView(g, W);
    }, Ja = (g) => B.value.onClickOutside ? B.value.onClickOutside(g) : Xe(), p = (g = 0) => {
      var W;
      (W = m.value) == null || W.handleFlow(g);
    };
    return vo(L, E, () => Ja($e)), t({
      closeMenu: Xe,
      selectDate: Ge,
      clearValue: pe,
      openMenu: x,
      onScroll: R,
      formatInputValue: G,
      // exposed for testing purposes
      updateInternalModelValue: ya,
      // modify internal modelValue
      setMonthYear: ba,
      parseModel: ka,
      switchView: wa,
      toggleMenu: Zt,
      handleFlow: p
    }), (g, W) => (openBlock(), createElementBlock("div", {
      ref_key: "pickerWrapperRef",
      ref: C,
      class: normalizeClass(oe.value),
      "data-datepicker-instance": ""
    }, [
      createVNode(uo, mergeProps({
        ref_key: "inputRef",
        ref: E,
        "input-value": unref(I),
        "onUpdate:inputValue": W[0] || (W[0] = (ne) => isRef(I) ? I.value = ne : null),
        "is-menu-open": v.value
      }, g.$props, {
        onClear: pe,
        onOpen: x,
        onSetInputDate: Lt,
        onSetEmptyDate: unref(T),
        onSelectDate: Ge,
        onToggle: Zt,
        onClose: Xe,
        onFocus: pa,
        onBlur: ha,
        onRealBlur: W[1] || (W[1] = (ne) => b.value = false)
      }), createSlots({ _: 2 }, [
        renderList(unref(k), (ne, Ae) => ({
          name: ne,
          fn: withCtx((Fe) => [
            renderSlot(g.$slots, ne, normalizeProps(guardReactiveProps(Fe)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (openBlock(), createBlock(resolveDynamicComponent(g.teleport ? Teleport : "div"), normalizeProps(guardReactiveProps(me.value)), {
        default: withCtx(() => [
          createVNode(Transition, {
            name: unref(ce)(unref(o)),
            css: unref(_) && !unref(re).enabled
          }, {
            default: withCtx(() => [
              v.value ? (openBlock(), createElementBlock("div", mergeProps({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: L
              }, d.value, {
                class: { "dp--menu-wrapper": !unref(re).enabled },
                style: unref(re).enabled ? void 0 : unref(z)
              }), [
                createVNode(fn, mergeProps({
                  ref_key: "dpMenuRef",
                  ref: m
                }, g.$props, {
                  "internal-model-value": unref(se),
                  "onUpdate:internalModelValue": W[2] || (W[2] = (ne) => isRef(se) ? se.value = ne : null),
                  class: { [M.value]: true, "dp--menu-wrapper": g.teleport },
                  "open-on-top": unref(o),
                  "no-overlay-focus": Y.value,
                  collapse: O.value,
                  "get-input-rect": V,
                  "is-text-input-date": y.value,
                  onClosePicker: Xe,
                  onSelectDate: Ge,
                  onAutoApply: ot,
                  onTimeUpdate: ga,
                  onFlowStep: W[3] || (W[3] = (ne) => g.$emit("flow-step", ne)),
                  onUpdateMonthYear: W[4] || (W[4] = (ne) => g.$emit("update-month-year", ne)),
                  onInvalidSelect: W[5] || (W[5] = (ne) => g.$emit("invalid-select", unref(se))),
                  onAutoApplyInvalid: W[6] || (W[6] = (ne) => g.$emit("invalid-select", ne)),
                  onInvalidFixedRange: W[7] || (W[7] = (ne) => g.$emit("invalid-fixed-range", ne)),
                  onRecalculatePosition: unref(ee),
                  onTooltipOpen: W[8] || (W[8] = (ne) => g.$emit("tooltip-open", ne)),
                  onTooltipClose: W[9] || (W[9] = (ne) => g.$emit("tooltip-close", ne)),
                  onTimePickerOpen: W[10] || (W[10] = (ne) => g.$emit("time-picker-open", ne)),
                  onTimePickerClose: W[11] || (W[11] = (ne) => g.$emit("time-picker-close", ne)),
                  onAmPmChange: W[12] || (W[12] = (ne) => g.$emit("am-pm-change", ne)),
                  onRangeStart: W[13] || (W[13] = (ne) => g.$emit("range-start", ne)),
                  onRangeEnd: W[14] || (W[14] = (ne) => g.$emit("range-end", ne)),
                  onDateUpdate: W[15] || (W[15] = (ne) => g.$emit("date-update", ne)),
                  onInvalidDate: W[16] || (W[16] = (ne) => g.$emit("invalid-date", ne)),
                  onOverlayToggle: W[17] || (W[17] = (ne) => g.$emit("overlay-toggle", ne))
                }), createSlots({ _: 2 }, [
                  renderList(unref(A), (ne, Ae) => ({
                    name: ne,
                    fn: withCtx((Fe) => [
                      renderSlot(g.$slots, ne, normalizeProps(guardReactiveProps({ ...Fe })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "is-text-input-date", "onRecalculatePosition"])
              ], 16)) : createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), Hn = /* @__PURE__ */ (() => {
  const e = mo;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(go).forEach(([e, t]) => {
  e !== "default" && (Hn[e] = t);
});
const _sfc_main = {
  __name: "[productSlug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const selectedTicket = ref(null);
    const date = ref(/* @__PURE__ */ new Date());
    useRouter();
    const route = useRoute();
    const persons = ref([
      { label: "Adult", age: "(Age 12+)", value: 0 },
      { label: "Children", age: "(Age 2-12)", value: 0 },
      { label: "Infant", age: "(Below 2)", value: 0 }
    ]);
    const calculateTotalPrice = (ticket) => {
      const totalPrice = ticket.adult_price * adultsCount.value + ticket.children_price * childrenCount.value + ticket.infant_price * infantsCount.value;
      return totalPrice;
    };
    const calculateDiscountedPrice = (ticket) => {
      const total = calculateTotalPrice(ticket);
      const discountedPrice = total * ((100 - ticket.discount_percentage) / 100);
      return discountedPrice;
    };
    const { vendorSlug, productSlug } = route.params;
    const productDetail = ref(null);
    const apiResult = ref(null);
    ref(1);
    ref(1);
    ref(1);
    const isLoading = ref(false);
    const adultsCount = computed(() => persons.value[0].value);
    const childrenCount = computed(() => persons.value[1].value);
    const infantsCount = computed(() => persons.value[2].value);
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getProductDetail(vendorSlug, productSlug), "$BnwFgUV9jQ")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      productDetail.value = data.value;
    }
    watch(apiResult, (newValue) => {
      if (newValue) {
        import("flowbite").then((module) => {
          const { initAccordions } = module;
          initAccordions();
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DetailTicketAboutTicket = __nuxt_component_0;
      const _component_DetailTicketInformation = __nuxt_component_1;
      const _component_DetailTicketLoader = __nuxt_component_2;
      const _component_DetailTicketAlert = __nuxt_component_3;
      _push(`<!--[--><div class="bg-center bg-cover h-[100] bg-no-repeat bg-[url(&#39;{{}}&#39;)] bg-gray-600 bg-blend-multiply lg:bg-[url(&#39;../assets/image/hero-ticket.png&#39;)]" data-v-bc9fe831><div class="h-[25vh] lg:h-[50vh] px-5 lg:px-10 flex items-center" data-v-bc9fe831><h1 class="mb-4 boldfont text-lg text-center mx-auto tracking-tight leading-none text-white lg:text-yellow-300 md:text-xl lg:text-4xl" data-v-bc9fe831><span class="boldfont hidden lg:contents text-white" data-v-bc9fe831>Ticket &gt; </span> Ticket Details </h1></div></div><div class="bg-white" data-v-bc9fe831><div class="container mx-auto px-5 lg:px-20" data-v-bc9fe831><div class="my-10" data-v-bc9fe831><h1 class="boldfont text-lg lg:text-2xl" data-v-bc9fe831>${ssrInterpolate(productDetail.value.name)}</h1><a href="" class="text-blue" data-v-bc9fe831>One price available</a></div><div class="grid lg:grid-cols-3 gap-4" data-v-bc9fe831><div class="col-span-2" data-v-bc9fe831>`);
      if (productDetail.value.images[0]) {
        _push(`<img${ssrRenderAttr("src", productDetail.value.images[0].path)} class="rounded-lg h-[25vh] lg:h-[52vh] w-full object-cover"${ssrRenderAttr("alt", `Image ${productDetail.value.images[0].id}`)} data-v-bc9fe831>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-span-1" data-v-bc9fe831>`);
      if (productDetail.value.images[0]) {
        _push(`<img${ssrRenderAttr("src", productDetail.value.images[0].path)} class="hidden lg:block rounded-lg h-[25vh] mb-[2vh] w-full object-cover"${ssrRenderAttr("alt", `Image ${productDetail.value.images[0].id}`)} data-v-bc9fe831>`);
      } else {
        _push(`<!---->`);
      }
      if (productDetail.value.images[0]) {
        _push(`<img${ssrRenderAttr("src", productDetail.value.images[0].path)} class="hidden lg:block rounded-lg h-[25vh] w-full object-cover"${ssrRenderAttr("alt", `Image ${productDetail.value.images[0].id}`)} data-v-bc9fe831>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid lg:grid-cols-3 py-10 gap-8" data-v-bc9fe831><div class="col-span-2" data-v-bc9fe831><div data-v-bc9fe831>${productDetail.value.description ?? ""}</div><h1 class="boldfont my-5" data-v-bc9fe831>About This Ticket</h1>`);
      _push(ssrRenderComponent(_component_DetailTicketAboutTicket, null, null, _parent));
      _push(`<div class="hidden lg:block" data-v-bc9fe831><h1 class="boldfont my-5" data-v-bc9fe831>Ticket Availability Check</h1><div class="p-5 border-2 border-sky-500 rounded-xl" data-v-bc9fe831><form data-v-bc9fe831><div class="grid grid-cols-3 gap-4" data-v-bc9fe831><button id="dropdownButton" data-dropdown-toggle="dropdown" class="text-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex items-center justify-between" type="button" data-v-bc9fe831><div class="flex items-center" data-v-bc9fe831><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" data-v-bc9fe831><path d="M10.9921 15.305C11.9973 14.6358 12.7605 13.6609 13.1687 12.5244C13.577 11.3879 13.6087 10.1502 13.2591 8.99437C12.9095 7.8385 12.1973 6.82581 11.2276 6.10605C10.258 5.38629 9.0825 4.99768 7.87492 4.99768C6.66735 4.99768 5.49184 5.38629 4.52221 6.10605C3.55258 6.82581 2.84032 7.8385 2.49076 8.99437C2.1412 10.1502 2.17288 11.3879 2.58114 12.5244C2.9894 13.6609 3.75255 14.6358 4.75774 15.305C2.93945 15.9751 1.38659 17.2152 0.330862 18.8403C0.275377 18.9227 0.236837 19.0154 0.217482 19.1129C0.198127 19.2104 0.198344 19.3108 0.218119 19.4082C0.237895 19.5056 0.276835 19.5981 0.332676 19.6803C0.388516 19.7625 0.460144 19.8328 0.543396 19.8871C0.626647 19.9414 0.719861 19.9787 0.81762 19.9966C0.915378 20.0146 1.01573 20.0129 1.11285 19.9917C1.20996 19.9706 1.3019 19.9303 1.38332 19.8733C1.46473 19.8163 1.53401 19.7437 1.58711 19.6597C2.2681 18.6123 3.19995 17.7516 4.29802 17.1558C5.3961 16.5599 6.62562 16.2479 7.87492 16.2479C9.12423 16.2479 10.3538 16.5599 11.4518 17.1558C12.5499 17.7516 13.4817 18.6123 14.1627 19.6597C14.2727 19.8231 14.4427 19.9368 14.6358 19.976C14.8289 20.0152 15.0297 19.9768 15.1947 19.8692C15.3598 19.7615 15.4758 19.5932 15.5178 19.4007C15.5598 19.2082 15.5243 19.0068 15.419 18.8403C14.3633 17.2152 12.8104 15.9751 10.9921 15.305ZM3.74992 10.625C3.74992 9.80911 3.99185 9.01159 4.44511 8.33324C4.89837 7.65488 5.54261 7.12617 6.29636 6.81396C7.0501 6.50175 7.8795 6.42006 8.67967 6.57922C9.47984 6.73839 10.2148 7.13126 10.7917 7.70815C11.3686 8.28504 11.7615 9.02004 11.9207 9.82022C12.0798 10.6204 11.9981 11.4498 11.6859 12.2035C11.3737 12.9573 10.845 13.6015 10.1667 14.0548C9.4883 14.508 8.69077 14.75 7.87492 14.75C6.78129 14.7487 5.7328 14.3137 4.95948 13.5404C4.18616 12.7671 3.75117 11.7186 3.74992 10.625ZM23.4506 19.8781C23.284 19.9867 23.081 20.0247 22.8864 19.9838C22.6918 19.9428 22.5214 19.8262 22.4127 19.6597C21.7326 18.6116 20.8008 17.7506 19.7025 17.155C18.6042 16.5594 17.3743 16.2483 16.1249 16.25C15.926 16.25 15.7352 16.1709 15.5946 16.0303C15.4539 15.8896 15.3749 15.6989 15.3749 15.5C15.3749 15.3011 15.4539 15.1103 15.5946 14.9696C15.7352 14.829 15.926 14.75 16.1249 14.75C16.7324 14.7494 17.3322 14.6147 17.8816 14.3554C18.431 14.0961 18.9163 13.7187 19.3029 13.2501C19.6895 12.7815 19.9678 12.2334 20.118 11.6448C20.2682 11.0561 20.2865 10.4416 20.1716 9.8451C20.0568 9.24859 19.8116 8.6848 19.4536 8.19402C19.0956 7.70325 18.6337 7.2976 18.1007 7.00606C17.5678 6.71452 16.977 6.54429 16.3707 6.50752C15.7643 6.47076 15.1573 6.56838 14.5931 6.7934C14.501 6.83317 14.402 6.8541 14.3018 6.85495C14.2016 6.85579 14.1022 6.83654 14.0095 6.79833C13.9169 6.76012 13.8328 6.70373 13.7623 6.63248C13.6918 6.56123 13.6363 6.47658 13.5991 6.38352C13.5619 6.29046 13.5437 6.19088 13.5456 6.09067C13.5475 5.99046 13.5695 5.89165 13.6102 5.80007C13.651 5.7085 13.7097 5.62602 13.7828 5.55752C13.856 5.48901 13.9421 5.43586 14.0362 5.40121C15.3275 4.8862 16.7639 4.86767 18.0681 5.34919C19.3723 5.83071 20.452 6.77817 21.0989 8.00879C21.7458 9.23941 21.914 10.666 21.5711 12.0133C21.2283 13.3607 20.3986 14.5333 19.2421 15.305C21.0604 15.9751 22.6133 17.2152 23.669 18.8403C23.7776 19.0069 23.8156 19.2098 23.7747 19.4044C23.7337 19.599 23.6171 19.7694 23.4506 19.8781Z" fill="#161616" data-v-bc9fe831></path></svg><span class="text-[#111827] ms-2" data-v-bc9fe831>Add Person</span></div><svg class="w-2.5 h-2.5 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" data-v-bc9fe831><path stroke="#111827" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" data-v-bc9fe831></path></svg></button><div id="dropdownMenu" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-fit dark:bg-gray-700" data-v-bc9fe831><ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton" data-v-bc9fe831><!--[-->`);
      ssrRenderList(persons.value, (item, index) => {
        _push(`<li class="grid grid-cols-3 lg:grid-cols-2" data-v-bc9fe831><div class="ps-3 py-4" data-v-bc9fe831><div class="font-semibold text-gray-900 dark:text-white" data-v-bc9fe831>${ssrInterpolate(item.label)}</div><div class="text-gray-500 dark:text-gray-400 text-xs" data-v-bc9fe831>${ssrInterpolate(item.age)}</div></div><div class="pe-3 py-4" data-v-bc9fe831><div class="flex items-center" data-v-bc9fe831><button class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" data-v-bc9fe831><span class="sr-only" data-v-bc9fe831>Quantity button -</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2" data-v-bc9fe831><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" data-v-bc9fe831></path></svg></button><div data-v-bc9fe831><input${ssrRenderAttr("value", item.value)} type="number" min="0" class="bg-gray-50 w-9 lg:w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required data-v-bc9fe831></div><button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" data-v-bc9fe831><span class="sr-only" data-v-bc9fe831>Quantity button +</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" data-v-bc9fe831><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" data-v-bc9fe831></path></svg></button></div></div></li>`);
      });
      _push(`<!--]--></ul></div>`);
      _push(ssrRenderComponent(unref(Hn), {
        class: "inset-y-0 bg-gray-50 border border-gray-300 text-sm rounded-lg",
        modelValue: date.value,
        "onUpdate:modelValue": ($event) => date.value = $event,
        "enable-time-picker": false
      }, null, _parent));
      _push(`<button type="submit" class="text-white w-full p-2.5 text-sm rounded-lg bg-blue font-bold text-center" data-v-bc9fe831>Check Availability</button></div></form></div></div><h1 class="boldfont my-5" data-v-bc9fe831>Ticket Details</h1>`);
      if (productDetail.value) {
        _push(ssrRenderComponent(_component_DetailTicketInformation, { productDetail: productDetail.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isLoading.value) {
        _push(`<div class="loader" data-v-bc9fe831>`);
        _push(ssrRenderComponent(_component_DetailTicketLoader, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (apiResult.value) {
        _push(`<div data-v-bc9fe831><div id="accordion-open" data-accordion="open" data-v-bc9fe831><h2 id="accordion-open-heading-1" data-v-bc9fe831><button type="button" class="flex items-center bg-blue justify-between w-full p-5 font-medium rtl:text-right button-text-white border-sky-400 rounded-xl gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1" data-v-bc9fe831>${ssrInterpolate(apiResult.value.length)} Ticket available <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" data-v-bc9fe831><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" data-v-bc9fe831></path></svg></button></h2><div id="accordion-open-body-1" class="hidden" aria-labelledby="accordion-open-heading-1" data-v-bc9fe831><!--[-->`);
        ssrRenderList(apiResult.value, (item) => {
          _push(`<div class="border border-sky-400 mt-5 rounded-xl" data-v-bc9fe831><div class="p-5" data-v-bc9fe831><div id="accordion-sub-open" data-accordion="open" data-v-bc9fe831><h2${ssrRenderAttr("id", `accordion-sub-open-heading-${item.id}`)} data-v-bc9fe831><button type="button" class="flex items-center bg-transparent justify-between w-full font-bold rtl:text-right button-text-blue"${ssrRenderAttr("data-accordion-target", `#accordion-sub-open-body-${item.id}`)} aria-expanded="true"${ssrRenderAttr("aria-controls", `accordion-sub-open-body-${item.id}`)} data-v-bc9fe831>${ssrInterpolate(item.name || "No Name Available")} <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" data-v-bc9fe831><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" data-v-bc9fe831></path></svg></button><div class="grid grid-cols-3 my-3" data-v-bc9fe831><div data-v-bc9fe831><p class="text-xs font-semibold text-gray-500" data-v-bc9fe831>Date</p><p class="text-sm text-black font-semibold" data-v-bc9fe831>${ssrInterpolate(_ctx.$dayjs(date.value).format("dddd DD MMMM YYYY"))}</p></div><div data-v-bc9fe831><p class="text-xs font-semibold text-gray-500" data-v-bc9fe831>Zoo Opening Hour</p><p class="text-sm text-black font-semibold" data-v-bc9fe831>${ssrInterpolate(item.start_time)} - ${ssrInterpolate(item.end_time)}</p></div><div data-v-bc9fe831><p class="text-xs font-semibold text-gray-500" data-v-bc9fe831>Cancellation Policy</p><p class="text-sm text-black font-semibold" data-v-bc9fe831>${ssrInterpolate(item.cancellation)}</p></div></div><hr data-v-bc9fe831></h2><div${ssrRenderAttr("id", `accordion-sub-open-body-${item.id}`)} class="block"${ssrRenderAttr("aria-labelledby", `accordion-sub-open-heading-${item.id}`)} data-v-bc9fe831><div class="mt-5 grid grid-cols-3" data-v-bc9fe831><div class="col-span-1" data-v-bc9fe831><h1 class="text-xs font-semibold text-gray-500" data-v-bc9fe831>Inclusion</h1><ul class="text-left text-black mt-3" data-v-bc9fe831><!--[-->`);
          ssrRenderList(item.inclusion, (inclusion, index) => {
            _push(`<li class="flex items-center space-x-3 mb-1 rtl:space-x-reverse text-sm font-semibold" data-v-bc9fe831><svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12" data-v-bc9fe831><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" data-v-bc9fe831></path></svg><span data-v-bc9fe831>${ssrInterpolate(inclusion.item)}</span></li>`);
          });
          _push(`<!--]--></ul></div><div class="col-span-2" data-v-bc9fe831><a${ssrRenderAttr("href", `/terms/${item.slug}`)} class="text-blue text-xs font-semibold underline underline-offset-4" data-v-bc9fe831>See Terms &amp; Condition</a><h1 class="text-xs font-semibold text-gray-500 my-2" data-v-bc9fe831>Price Breakdown</h1>`);
          if (unref(adultsCount) > 0) {
            _push(`<div class="flex justify-between" data-v-bc9fe831><p class="text-sm font-semibold" data-v-bc9fe831>Adult ${ssrInterpolate(unref(adultsCount))} x IDR ${ssrInterpolate(item.adult_price)}</p><p class="text-md text-blue font-semibold" data-v-bc9fe831>IDR ${ssrInterpolate(unref(adultsCount) * item.adult_price)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(childrenCount) > 0) {
            _push(`<div class="flex justify-between" data-v-bc9fe831><p class="text-sm font-semibold" data-v-bc9fe831>Children ${ssrInterpolate(unref(childrenCount))} x IDR ${ssrInterpolate(item.children_price)}</p><p class="text-md text-blue font-semibold" data-v-bc9fe831>IDR ${ssrInterpolate(unref(childrenCount) * item.children_price)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(infantsCount) > 0) {
            _push(`<div class="flex justify-between" data-v-bc9fe831><p class="text-sm font-semibold" data-v-bc9fe831>Infant ${ssrInterpolate(unref(infantsCount))} x IDR ${ssrInterpolate(item.infant_price)}</p><p class="text-md text-blue font-semibold" data-v-bc9fe831>IDR ${ssrInterpolate(unref(infantsCount) * item.infant_price)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div></div></div><div class="bg-sky-200 p-5 rounded-b-xl" data-v-bc9fe831><div class="flex justify-between items-center" data-v-bc9fe831><div data-v-bc9fe831><p class="text-xs font-bold text-black" data-v-bc9fe831>Total Price</p><p class="text-blue text-md font-bold" data-v-bc9fe831>IDR ${ssrInterpolate((unref(adultsCount) * item.adult_price + unref(childrenCount) * item.children_price + unref(infantsCount) * item.infant_price) * ((100 - item.discount_percentage) / 100))}</p><div class="flex gap-4" data-v-bc9fe831><p class="text-xs line-through" data-v-bc9fe831>IDR ${ssrInterpolate(unref(adultsCount) * item.adult_price + unref(childrenCount) * item.children_price + unref(infantsCount) * item.infant_price)}</p><p class="bg-yellow text-black text-xs font-bold me-2 px-2.5 py-0.5 rounded-full" data-v-bc9fe831>${ssrInterpolate(item.discount_percentage)}% Off </p></div></div><button class="${ssrRenderClass([{ "bg-red-500": item.selected, "bg-blue": !item.selected }, "text-xs p-2 rounded-lg font-semibold text-white"])}" data-v-bc9fe831>${ssrInterpolate(item.selected ? "Unselect" : "Select Ticket")}</button></div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else if (!isLoading.value) {
        _push(`<div data-v-bc9fe831>`);
        _push(ssrRenderComponent(_component_DetailTicketAlert, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-span-1" data-v-bc9fe831>`);
      if (selectedTicket.value) {
        _push(`<div class="hidden lg:block sticky top-28" data-v-bc9fe831><h1 class="font-bold text-xl text-blue mb-5" data-v-bc9fe831>Ticket Summary</h1><div class="block w-full p-6 bg-sky-100 border border-sky-500 rounded-2xl" data-v-bc9fe831><h1 class="mb-2 text-lg font-bold text-black" data-v-bc9fe831>${ssrInterpolate(selectedTicket.value.name)}</h1><div class="my-5" data-v-bc9fe831><div class="flex gap-4 mt-1" data-v-bc9fe831><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-bc9fe831><path d="M21.2991 9.795C21.6379 9.72606 21.9425 9.54219 22.1613 9.27449C22.3802 9.00679 22.4998 8.6717 22.5 8.32594V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5H3C2.60218 4.5 2.22065 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V8.32594C1.50019 8.6717 1.61983 9.00679 1.83867 9.27449C2.05751 9.54219 2.36212 9.72606 2.70094 9.795C3.20757 9.90006 3.66251 10.1765 3.98912 10.5778C4.31573 10.9791 4.49406 11.4807 4.49406 11.9981C4.49406 12.5155 4.31573 13.0171 3.98912 13.4184C3.66251 13.8197 3.20757 14.0962 2.70094 14.2013C2.36148 14.2703 2.0564 14.4547 1.83748 14.7232C1.61857 14.9917 1.49933 15.3277 1.5 15.6741V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22065 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V15.6741C22.4998 15.3283 22.3802 14.9932 22.1613 14.7255C21.9425 14.4578 21.6379 14.2739 21.2991 14.205C20.7924 14.0999 20.3375 13.8235 20.0109 13.4222C19.6843 13.0209 19.5059 12.5193 19.5059 12.0019C19.5059 11.4845 19.6843 10.9829 20.0109 10.5816C20.3375 10.1803 20.7924 9.90381 21.2991 9.79875V9.795ZM3 15.675C3.84722 15.5024 4.60876 15.0424 5.15573 14.3728C5.70269 13.7031 6.00146 12.8651 6.00146 12.0005C6.00146 11.1359 5.70269 10.2978 5.15573 9.62819C4.60876 8.95857 3.84722 8.49852 3 8.32594V6H8.25V18H3V15.675ZM21 15.675V18H9.75V6H21V8.325C20.1528 8.49759 19.3912 8.95763 18.8443 9.62725C18.2973 10.2969 17.9985 11.1349 17.9985 11.9995C17.9985 12.8641 18.2973 13.7022 18.8443 14.3718C19.3912 15.0414 20.1528 15.5015 21 15.6741V15.675Z" fill="#008AC6" data-v-bc9fe831></path></svg><p class="text-xs text-black" data-v-bc9fe831>${ssrInterpolate(selectedTicket.value.name)}</p></div><div class="flex gap-4 mt-1" data-v-bc9fe831><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-bc9fe831><path d="M19.5 3H17.25V2.25C17.25 2.05109 17.171 1.86032 17.0303 1.71967C16.8897 1.57902 16.6989 1.5 16.5 1.5C16.3011 1.5 16.1103 1.57902 15.9697 1.71967C15.829 1.86032 15.75 2.05109 15.75 2.25V3H8.25V2.25C8.25 2.05109 8.17098 1.86032 8.03033 1.71967C7.88968 1.57902 7.69891 1.5 7.5 1.5C7.30109 1.5 7.11032 1.57902 6.96967 1.71967C6.82902 1.86032 6.75 2.05109 6.75 2.25V3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM6.75 4.5V5.25C6.75 5.44891 6.82902 5.63968 6.96967 5.78033C7.11032 5.92098 7.30109 6 7.5 6C7.69891 6 7.88968 5.92098 8.03033 5.78033C8.17098 5.63968 8.25 5.44891 8.25 5.25V4.5H15.75V5.25C15.75 5.44891 15.829 5.63968 15.9697 5.78033C16.1103 5.92098 16.3011 6 16.5 6C16.6989 6 16.8897 5.92098 17.0303 5.78033C17.171 5.63968 17.25 5.44891 17.25 5.25V4.5H19.5V7.5H4.5V4.5H6.75ZM19.5 19.5H4.5V9H19.5V19.5ZM15.9056 11.4694C15.9754 11.539 16.0307 11.6217 16.0684 11.7128C16.1062 11.8038 16.1256 11.9014 16.1256 12C16.1256 12.0986 16.1062 12.1962 16.0684 12.2872C16.0307 12.3783 15.9754 12.461 15.9056 12.5306L11.4056 17.0306C11.336 17.1004 11.2533 17.1557 11.1622 17.1934C11.0712 17.2312 10.9736 17.2506 10.875 17.2506C10.7764 17.2506 10.6788 17.2312 10.5878 17.1934C10.4967 17.1557 10.414 17.1004 10.3444 17.0306L8.09437 14.7806C7.95364 14.6399 7.87458 14.449 7.87458 14.25C7.87458 14.051 7.95364 13.8601 8.09437 13.7194C8.23511 13.5786 8.42598 13.4996 8.625 13.4996C8.82402 13.4996 9.01489 13.5786 9.15563 13.7194L10.875 15.4397L14.8444 11.4694C14.914 11.3996 14.9967 11.3443 15.0878 11.3066C15.1788 11.2688 15.2764 11.2494 15.375 11.2494C15.4736 11.2494 15.5712 11.2688 15.6622 11.3066C15.7533 11.3443 15.836 11.3996 15.9056 11.4694Z" fill="#008AC6" data-v-bc9fe831></path></svg><p class="text-xs text-black" data-v-bc9fe831>${ssrInterpolate(_ctx.$dayjs(date.value).format("dddd, MMMM DD, YYYY"))}</p></div><div class="flex gap-4 mt-1" data-v-bc9fe831><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-bc9fe831><path d="M10.9921 14.805C11.9973 14.1358 12.7605 13.1609 13.1687 12.0244C13.577 10.888 13.6087 9.6503 13.2591 8.49443C12.9095 7.33856 12.1973 6.32587 11.2276 5.60611C10.258 4.88635 9.0825 4.49774 7.87492 4.49774C6.66735 4.49774 5.49184 4.88635 4.52221 5.60611C3.55258 6.32587 2.84032 7.33856 2.49076 8.49443C2.1412 9.6503 2.17288 10.888 2.58114 12.0244C2.9894 13.1609 3.75255 14.1358 4.75774 14.805C2.93945 15.4752 1.38659 16.7153 0.330862 18.3403C0.275377 18.4228 0.236837 18.5155 0.217482 18.613C0.198127 18.7105 0.198344 18.8108 0.218119 18.9082C0.237895 19.0056 0.276835 19.0981 0.332676 19.1804C0.388516 19.2626 0.460144 19.3329 0.543396 19.3872C0.626647 19.4415 0.719861 19.4787 0.81762 19.4967C0.915378 19.5146 1.01573 19.513 1.11285 19.4918C1.20996 19.4706 1.3019 19.4304 1.38332 19.3734C1.46473 19.3164 1.53401 19.2437 1.58711 19.1597C2.2681 18.1123 3.19995 17.2516 4.29802 16.6558C5.3961 16.06 6.62562 15.7479 7.87492 15.7479C9.12423 15.7479 10.3538 16.06 11.4518 16.6558C12.5499 17.2516 13.4817 18.1123 14.1627 19.1597C14.2727 19.3232 14.4427 19.4368 14.6358 19.476C14.8289 19.5152 15.0297 19.4769 15.1947 19.3692C15.3598 19.2616 15.4758 19.0933 15.5178 18.9008C15.5598 18.7082 15.5243 18.5069 15.419 18.3403C14.3633 16.7153 12.8104 15.4752 10.9921 14.805ZM3.74992 10.125C3.74992 9.30918 3.99185 8.51165 4.44511 7.8333C4.89837 7.15494 5.54261 6.62623 6.29636 6.31402C7.0501 6.00181 7.8795 5.92012 8.67967 6.07929C9.47984 6.23845 10.2148 6.63132 10.7917 7.20821C11.3686 7.7851 11.7615 8.5201 11.9207 9.32028C12.0798 10.1204 11.9981 10.9498 11.6859 11.7036C11.3737 12.4573 10.845 13.1016 10.1667 13.5548C9.4883 14.0081 8.69077 14.25 7.87492 14.25C6.78129 14.2488 5.7328 13.8138 4.95948 13.0405C4.18616 12.2672 3.75117 11.2187 3.74992 10.125ZM23.4506 19.3781C23.284 19.4868 23.081 19.5248 22.8864 19.4838C22.6918 19.4429 22.5214 19.3263 22.4127 19.1597C21.7326 18.1117 20.8008 17.2506 19.7025 16.6551C18.6042 16.0595 17.3743 15.7484 16.1249 15.75C15.926 15.75 15.7352 15.671 15.5946 15.5304C15.4539 15.3897 15.3749 15.1989 15.3749 15C15.3749 14.8011 15.4539 14.6103 15.5946 14.4697C15.7352 14.329 15.926 14.25 16.1249 14.25C16.7324 14.2495 17.3322 14.1147 17.8816 13.8554C18.431 13.5962 18.9163 13.2188 19.3029 12.7502C19.6895 12.2816 19.9678 11.7334 20.118 11.1448C20.2682 10.5562 20.2865 9.94168 20.1716 9.34516C20.0568 8.74865 19.8116 8.18486 19.4536 7.69408C19.0956 7.20331 18.6337 6.79766 18.1007 6.50612C17.5678 6.21458 16.977 6.04435 16.3707 6.00759C15.7643 5.97082 15.1573 6.06844 14.5931 6.29346C14.501 6.33323 14.402 6.35416 14.3018 6.35501C14.2016 6.35585 14.1022 6.3366 14.0095 6.29839C13.9169 6.26018 13.8328 6.20379 13.7623 6.13254C13.6918 6.06129 13.6363 5.97664 13.5991 5.88358C13.5619 5.79052 13.5437 5.69094 13.5456 5.59073C13.5475 5.49052 13.5695 5.39171 13.6102 5.30014C13.651 5.20856 13.7097 5.12609 13.7828 5.05758C13.856 4.98907 13.9421 4.93592 14.0362 4.90127C15.3275 4.38626 16.7639 4.36773 18.0681 4.84925C19.3723 5.33077 20.452 6.27823 21.0989 7.50885C21.7458 8.73947 21.914 10.1661 21.5711 11.5134C21.2283 12.8607 20.3986 14.0333 19.2421 14.805C21.0604 15.4752 22.6133 16.7153 23.669 18.3403C23.7776 18.5069 23.8156 18.7099 23.7747 18.9045C23.7337 19.0991 23.6171 19.2695 23.4506 19.3781Z" fill="#008AC6" data-v-bc9fe831></path></svg><p class="text-xs text-black" data-v-bc9fe831>${ssrInterpolate(unref(adultsCount))} Adults, ${ssrInterpolate(unref(childrenCount))} Children, ${ssrInterpolate(unref(infantsCount))} Infants</p></div><div class="flex gap-4 mt-1" data-v-bc9fe831><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-bc9fe831><path d="M12.7506 7.49997V11.5753L16.1368 13.6068C16.3074 13.7093 16.4303 13.8753 16.4784 14.0683C16.5266 14.2614 16.4961 14.4657 16.3937 14.6362C16.2912 14.8068 16.1252 14.9297 15.9322 14.9779C15.7392 15.026 15.5349 14.9955 15.3643 14.8931L11.6143 12.6431C11.5033 12.5764 11.4115 12.4821 11.3477 12.3694C11.284 12.2567 11.2505 12.1295 11.2506 12V7.49997C11.2506 7.30106 11.3296 7.11029 11.4702 6.96964C11.6109 6.82899 11.8016 6.74997 12.0006 6.74997C12.1995 6.74997 12.3902 6.82899 12.5309 6.96964C12.6715 7.11029 12.7506 7.30106 12.7506 7.49997ZM21.0006 5.24997C20.8016 5.24997 20.6109 5.32899 20.4702 5.46964C20.3296 5.61029 20.2506 5.80106 20.2506 5.99997V7.68747C19.6552 6.99747 19.0477 6.33278 18.3643 5.64091C17.1135 4.39001 15.5219 3.53543 13.7882 3.18396C12.0545 2.83249 10.2557 2.99971 8.61655 3.66472C6.97737 4.32974 5.5705 5.46306 4.57175 6.92307C3.573 8.38309 3.02664 10.1051 3.00095 11.8738C2.97526 13.6426 3.47137 15.3797 4.42731 16.8681C5.38324 18.3565 6.75659 19.5302 8.37577 20.2425C9.99494 20.9549 11.7881 21.1743 13.5313 20.8733C15.2744 20.5723 16.8902 19.7643 18.1768 18.5503C18.2485 18.4826 18.3061 18.4014 18.3464 18.3114C18.3866 18.2215 18.4088 18.1244 18.4116 18.0259C18.4144 17.9273 18.3977 17.8292 18.3626 17.7371C18.3275 17.645 18.2745 17.5607 18.2068 17.489C18.1391 17.4174 18.0579 17.3598 17.968 17.3195C17.878 17.2792 17.7809 17.257 17.6824 17.2542C17.5839 17.2515 17.4857 17.2681 17.3936 17.3032C17.3015 17.3384 17.2172 17.3913 17.1456 17.459C16.0731 18.4697 14.7267 19.1421 13.2744 19.3921C11.8221 19.6422 10.3283 19.4589 8.97957 18.865C7.63085 18.2712 6.48695 17.2932 5.69073 16.0532C4.89451 14.8131 4.48124 13.366 4.50254 11.8925C4.52384 10.419 4.97877 8.98439 5.8105 7.76789C6.64224 6.55138 7.81393 5.60685 9.17925 5.05226C10.5446 4.49767 12.043 4.3576 13.4875 4.64952C14.9319 4.94145 16.2584 5.65245 17.3012 6.69372C18.0643 7.46622 18.7327 8.2106 19.4068 8.99997H17.2506C17.0516 8.99997 16.8609 9.07899 16.7202 9.21964C16.5796 9.36029 16.5006 9.55106 16.5006 9.74997C16.5006 9.94888 16.5796 10.1396 16.7202 10.2803C16.8609 10.421 17.0516 10.5 17.2506 10.5H21.0006C21.1995 10.5 21.3902 10.421 21.5309 10.2803C21.6715 10.1396 21.7506 9.94888 21.7506 9.74997V5.99997C21.7506 5.80106 21.6715 5.61029 21.5309 5.46964C21.3902 5.32899 21.1995 5.24997 21.0006 5.24997Z" fill="#008AC6" data-v-bc9fe831></path></svg><p class="text-xs text-black" data-v-bc9fe831>Cancel up to 24 hours in advance for a full refund </p></div></div><hr class="my-2 border-sky-400" data-v-bc9fe831><div class="flex justify-between items-center self-stretch" data-v-bc9fe831><h1 class="font-bold text-md" data-v-bc9fe831>Total price</h1><div data-v-bc9fe831><p class="line-through text-xs text-end" data-v-bc9fe831>IDR ${ssrInterpolate(calculateTotalPrice(selectedTicket.value))}</p><p class="text-blue font-bold text-lg" data-v-bc9fe831>IDR ${ssrInterpolate(calculateDiscountedPrice(selectedTicket.value))}</p></div></div><form data-v-bc9fe831><input type="hidden" name="id"${ssrRenderAttr("value", selectedTicket.value.id)} data-v-bc9fe831><input type="hidden" name="name"${ssrRenderAttr("value", selectedTicket.value.name)} data-v-bc9fe831><input type="hidden" name="slug"${ssrRenderAttr("value", selectedTicket.value.slug)} data-v-bc9fe831><input type="hidden" name="adults"${ssrRenderAttr("value", unref(adultsCount))} data-v-bc9fe831><input type="hidden" name="children"${ssrRenderAttr("value", unref(childrenCount))} data-v-bc9fe831><input type="hidden" name="infants"${ssrRenderAttr("value", unref(infantsCount))} data-v-bc9fe831><input type="hidden" name="date"${ssrRenderAttr("value", date.value)} data-v-bc9fe831><input type="hidden" name="price"${ssrRenderAttr("value", calculateDiscountedPrice(selectedTicket.value))} data-v-bc9fe831><button type="submit" class="text-white w-full mt-5 p-2.5 text-sm rounded-lg bg-blue font-bold text-center" data-v-bc9fe831>Book Ticket</button></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ticket-detail/[vendorSlug]/[productSlug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _productSlug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bc9fe831"]]);
export {
  _productSlug_ as default
};
//# sourceMappingURL=_productSlug_-52cms5QJ.js.map
