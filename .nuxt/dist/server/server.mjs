import { effectScope, reactive, hasInjectionContext, getCurrentInstance, inject, toRef, version, unref, h, shallowRef, shallowReactive, isReadonly, ref, markRaw, toRaw, watch, isRef, isReactive, nextTick, computed, getCurrentScope, onScopeDispose, toRefs, onServerPrefetch, defineComponent, provide, createElementBlock, resolveComponent, isShallow, withAsyncContext, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext, Suspense, Transition, mergeProps, defineAsyncComponent, onErrorCaptured, resolveDynamicComponent, createApp } from "vue";
import { $fetch } from "ofetch";
import { baseURL } from "#internal/nuxt/paths";
import { createHooks } from "hookable";
import { getContext } from "unctx";
import { sanitizeStatusCode, createError as createError$1, getRequestHeader, setCookie, getCookie, deleteCookie } from "h3";
import { getActiveHead } from "unhead";
import { defineHeadPlugin } from "@unhead/shared";
import { START_LOCATION, createMemoryHistory, createRouter as createRouter$1, RouterView } from "vue-router";
import { withQuery, hasProtocol, parseURL, isScriptProtocol, joinURL, isSamePath, parseQuery, withTrailingSlash, withoutTrailingSlash } from "ufo";
import { toRouteMatcher, createRouter } from "radix3";
import { defu } from "defu";
import { klona } from "klona";
import { setupDevtoolsPlugin } from "@vue/devtools-api";
import destr from "destr";
import "devalue";
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import utc from "dayjs/plugin/utc.js";
import { parse } from "cookie-es";
import { isEqual } from "ohash";
import { createPersistedState } from "pinia-plugin-persistedstate";
import { ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderSuspense, ssrRenderVNode } from "vue/server-renderer";
import axios from "axios";
import "flowbite";
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.11.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set(),
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
// @__NO_SIDE_EFFECTS__
function tryUseNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  return nuxtAppInstance || null;
}
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  const nuxtAppInstance = /* @__PURE__ */ tryUseNuxtApp();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error2 = useError();
    if (false)
      ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && process.env.NODE_ENV !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "deep": true };
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
const __nuxt_page_meta$5 = null;
const __nuxt_page_meta$4 = null;
const __nuxt_page_meta$3 = null;
const __nuxt_page_meta$2 = null;
const __nuxt_page_meta$1 = null;
const __nuxt_page_meta = null;
const _routes = [
  {
    name: "confirmation",
    path: "/confirmation",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.redirect,
    component: () => import("./_nuxt/confirmation-pzPP__YG.js").then((m) => m.default || m)
  },
  {
    name: "contact",
    path: "/contact",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.redirect,
    component: () => import("./_nuxt/contact-B_2ADoWl.js").then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect,
    component: () => import("./_nuxt/index-CkTH3nm6.js").then((m) => m.default || m)
  },
  {
    name: "ticket-detail-vendorSlug-productSlug",
    path: "/ticket-detail/:vendorSlug()/:productSlug()",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect,
    component: () => import("./_nuxt/_productSlug_-52cms5QJ.js").then((m) => m.default || m)
  },
  {
    name: "ticket",
    path: "/ticket",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect,
    component: () => import("./_nuxt/ticket-BzC09V_t.js").then((m) => m.default || m)
  },
  {
    name: "vendor-slug",
    path: "/vendor/:slug()",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect,
    component: () => import("./_nuxt/_slug_-BGC5PGJd.js").then((m) => m.default || m)
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const router = createRouter$1({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    useError();
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure) {
        await nuxtApp.callHook("page:loading:end");
      }
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      } else if (to.fullPath !== initialURL && (to.redirectedFrom || !isSamePath(to.fullPath, initialURL))) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
const isVue2 = false;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
const IS_CLIENT = false;
const USE_DEVTOOLS = (process.env.NODE_ENV !== "production" || false) && !(process.env.NODE_ENV === "test") && IS_CLIENT;
const saveAs = () => {
};
function toastMessage(message, type) {
  const piniaMessage = "🍍 " + message;
  if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
    __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
  } else if (type === "error") {
    console.error(piniaMessage);
  } else if (type === "warn") {
    console.warn(piniaMessage);
  } else {
    console.log(piniaMessage);
  }
}
function isPinia(o) {
  return "_a" in o && "install" in o;
}
function checkClipboardAccess() {
  if (!("clipboard" in void 0)) {
    toastMessage(`Your browser doesn't support the Clipboard API`, "error");
    return true;
  }
}
function checkNotFocusedError(error) {
  if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
    toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
    return true;
  }
  return false;
}
async function actionGlobalCopyState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    await (void 0).clipboard.writeText(JSON.stringify(pinia.state.value));
    toastMessage("Global state copied to clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalPasteState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    loadStoresState(pinia, JSON.parse(await (void 0).clipboard.readText()));
    toastMessage("Global state pasted from clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalSaveState(pinia) {
  try {
    saveAs(new Blob([JSON.stringify(pinia.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (error) {
    toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
let fileInput;
function getFileOpener() {
  if (!fileInput) {
    fileInput = (void 0).createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
  }
  function openFile() {
    return new Promise((resolve, reject) => {
      fileInput.onchange = async () => {
        const files = fileInput.files;
        if (!files)
          return resolve(null);
        const file = files.item(0);
        if (!file)
          return resolve(null);
        return resolve({ text: await file.text(), file });
      };
      fileInput.oncancel = () => resolve(null);
      fileInput.onerror = reject;
      fileInput.click();
    });
  }
  return openFile;
}
async function actionGlobalOpenStateFile(pinia) {
  try {
    const open2 = getFileOpener();
    const result = await open2();
    if (!result)
      return;
    const { text, file } = result;
    loadStoresState(pinia, JSON.parse(text));
    toastMessage(`Global state imported from "${file.name}".`);
  } catch (error) {
    toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
function loadStoresState(pinia, state) {
  for (const key in state) {
    const storeState = pinia.state.value[key];
    if (storeState) {
      Object.assign(storeState, state[key]);
    } else {
      pinia.state.value[key] = state[key];
    }
  }
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
const PINIA_ROOT_ID = "_root";
function formatStoreForInspectorTree(store) {
  return isPinia(store) ? {
    id: PINIA_ROOT_ID,
    label: PINIA_ROOT_LABEL
  } : {
    id: store.$id,
    label: store.$id
  };
}
function formatStoreForInspectorState(store) {
  if (isPinia(store)) {
    const storeNames = Array.from(store._s.keys());
    const storeMap = store._s;
    const state2 = {
      state: storeNames.map((storeId) => ({
        editable: true,
        key: storeId,
        value: store.state.value[storeId]
      })),
      getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
        const store2 = storeMap.get(id);
        return {
          editable: false,
          key: id,
          value: store2._getters.reduce((getters, key) => {
            getters[key] = store2[key];
            return getters;
          }, {})
        };
      })
    };
    return state2;
  }
  const state = {
    state: Object.keys(store.$state).map((key) => ({
      editable: true,
      key,
      value: store.$state[key]
    }))
  };
  if (store._getters && store._getters.length) {
    state.getters = store._getters.map((getterName) => ({
      editable: false,
      key: getterName,
      value: store[getterName]
    }));
  }
  if (store._customProperties.size) {
    state.customProperties = Array.from(store._customProperties).map((key) => ({
      editable: true,
      key,
      value: store[key]
    }));
  }
  return state;
}
function formatEventData(events) {
  if (!events)
    return {};
  if (Array.isArray(events)) {
    return events.reduce((data, event) => {
      data.keys.push(event.key);
      data.operations.push(event.type);
      data.oldValue[event.key] = event.oldValue;
      data.newValue[event.key] = event.newValue;
      return data;
    }, {
      oldValue: {},
      keys: [],
      operations: [],
      newValue: {}
    });
  } else {
    return {
      operation: formatDisplay(events.type),
      key: formatDisplay(events.key),
      oldValue: events.oldValue,
      newValue: events.newValue
    };
  }
}
function formatMutationType(type) {
  switch (type) {
    case MutationType.direct:
      return "mutation";
    case MutationType.patchFunction:
      return "$patch";
    case MutationType.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let isTimelineActive = true;
const componentStateTypes = [];
const MUTATIONS_LAYER_ID = "pinia:mutations";
const INSPECTOR_ID = "pinia";
const { assign: assign$1 } = Object;
const getStoreType = (id) => "🍍 " + id;
function registerPiniaDevtools(app, pinia) {
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app
  }, (api) => {
    if (typeof api.now !== "function") {
      toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
    }
    api.addTimelineLayer({
      id: MUTATIONS_LAYER_ID,
      label: `Pinia 🍍`,
      color: 15064968
    });
    api.addInspector({
      id: INSPECTOR_ID,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            actionGlobalCopyState(pinia);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await actionGlobalPasteState(pinia);
            api.sendInspectorTree(INSPECTOR_ID);
            api.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            actionGlobalSaveState(pinia);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await actionGlobalOpenStateFile(pinia);
            api.sendInspectorTree(INSPECTOR_ID);
            api.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (nodeId) => {
            const store = pinia._s.get(nodeId);
            if (!store) {
              toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
            } else if (typeof store.$reset !== "function") {
              toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
            } else {
              store.$reset();
              toastMessage(`Store "${nodeId}" reset.`);
            }
          }
        }
      ]
    });
    api.on.inspectComponent((payload, ctx) => {
      const proxy = payload.componentInstance && payload.componentInstance.proxy;
      if (proxy && proxy._pStores) {
        const piniaStores = payload.componentInstance.proxy._pStores;
        Object.values(piniaStores).forEach((store) => {
          payload.instanceData.state.push({
            type: getStoreType(store.$id),
            key: "state",
            editable: true,
            value: store._isOptionsAPI ? {
              _custom: {
                value: toRaw(store.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => store.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(store.$state).reduce((state, key) => {
                state[key] = store.$state[key];
                return state;
              }, {})
            )
          });
          if (store._getters && store._getters.length) {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "getters",
              editable: false,
              value: store._getters.reduce((getters, key) => {
                try {
                  getters[key] = store[key];
                } catch (error) {
                  getters[key] = error;
                }
                return getters;
              }, {})
            });
          }
        });
      }
    });
    api.on.getInspectorTree((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        let stores = [pinia];
        stores = stores.concat(Array.from(pinia._s.values()));
        payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
      }
    });
    api.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return;
        }
        if (inspectedStore) {
          payload.state = formatStoreForInspectorState(inspectedStore);
        }
      }
    });
    api.on.editInspectorState((payload, ctx) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return toastMessage(`store "${payload.nodeId}" not found`, "error");
        }
        const { path } = payload;
        if (!isPinia(inspectedStore)) {
          if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
            path.unshift("$state");
          }
        } else {
          path.unshift("state");
        }
        isTimelineActive = false;
        payload.set(inspectedStore, path, payload.state.value);
        isTimelineActive = true;
      }
    });
    api.on.editComponentState((payload) => {
      if (payload.type.startsWith("🍍")) {
        const storeId = payload.type.replace(/^🍍\s*/, "");
        const store = pinia._s.get(storeId);
        if (!store) {
          return toastMessage(`store "${storeId}" not found`, "error");
        }
        const { path } = payload;
        if (path[0] !== "state") {
          return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
        }
        path[0] = "$state";
        isTimelineActive = false;
        payload.set(store, path, payload.state.value);
        isTimelineActive = true;
      }
    });
  });
}
function addStoreToDevtools(app, store) {
  if (!componentStateTypes.includes(getStoreType(store.$id))) {
    componentStateTypes.push(getStoreType(store.$id));
  }
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: true
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (api) => {
    const now = typeof api.now === "function" ? api.now.bind(api) : Date.now;
    store.$onAction(({ after, onError, name, args }) => {
      const groupId = runningActionId++;
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now(),
          title: "🛫 " + name,
          subtitle: "start",
          data: {
            store: formatDisplay(store.$id),
            action: formatDisplay(name),
            args
          },
          groupId
        }
      });
      after((result) => {
        activeAction = void 0;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now(),
            title: "🛬 " + name,
            subtitle: "end",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args,
              result
            },
            groupId
          }
        });
      });
      onError((error) => {
        activeAction = void 0;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now(),
            logType: "error",
            title: "💥 " + name,
            subtitle: "end",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args,
              error
            },
            groupId
          }
        });
      });
    }, true);
    store._customProperties.forEach((name) => {
      watch(() => unref(store[name]), (newValue, oldValue) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (isTimelineActive) {
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now(),
              title: "Change",
              subtitle: name,
              data: {
                newValue,
                oldValue
              },
              groupId: activeAction
            }
          });
        }
      }, { deep: true });
    });
    store.$subscribe(({ events, type }, state) => {
      api.notifyComponentUpdate();
      api.sendInspectorState(INSPECTOR_ID);
      if (!isTimelineActive)
        return;
      const eventData = {
        time: now(),
        title: formatMutationType(type),
        data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
        groupId: activeAction
      };
      if (type === MutationType.patchFunction) {
        eventData.subtitle = "⤵️";
      } else if (type === MutationType.patchObject) {
        eventData.subtitle = "🧩";
      } else if (events && !Array.isArray(events)) {
        eventData.subtitle = events.type;
      }
      if (events) {
        eventData.data["rawEvent(s)"] = {
          _custom: {
            display: "DebuggerEvent",
            type: "object",
            tooltip: "raw DebuggerEvent[]",
            value: events
          }
        };
      }
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: eventData
      });
    }, { detached: true, flush: "sync" });
    const hotUpdate = store._hotUpdate;
    store._hotUpdate = markRaw((newStore) => {
      hotUpdate(newStore);
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now(),
          title: "🔥 " + store.$id,
          subtitle: "HMR update",
          data: {
            store: formatDisplay(store.$id),
            info: formatDisplay(`HMR update`)
          }
        }
      });
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
    });
    const { $dispose } = store;
    store.$dispose = () => {
      $dispose();
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
    };
    api.notifyComponentUpdate();
    api.sendInspectorTree(INSPECTOR_ID);
    api.sendInspectorState(INSPECTOR_ID);
    api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
  });
}
let runningActionId = 0;
let activeAction;
function patchActionForGrouping(store, actionNames, wrapWithProxy) {
  const actions = actionNames.reduce((storeActions, actionName) => {
    storeActions[actionName] = toRaw(store)[actionName];
    return storeActions;
  }, {});
  for (const actionName in actions) {
    store[actionName] = function() {
      const _actionId = runningActionId;
      const trackedStore = wrapWithProxy ? new Proxy(store, {
        get(...args) {
          activeAction = _actionId;
          return Reflect.get(...args);
        },
        set(...args) {
          activeAction = _actionId;
          return Reflect.set(...args);
        }
      }) : store;
      activeAction = _actionId;
      const retValue = actions[actionName].apply(trackedStore, arguments);
      activeAction = void 0;
      return retValue;
    };
  }
}
function devtoolsPlugin({ app, store, options }) {
  if (store.$id.startsWith("__hot:")) {
    return;
  }
  store._isOptionsAPI = !!options.state;
  patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
  const originalHotUpdate = store._hotUpdate;
  toRaw(store)._hotUpdate = function(newStore) {
    originalHotUpdate.apply(this, arguments);
    patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
  };
  addStoreToDevtools(
    app,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    store
  );
}
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        if (USE_DEVTOOLS) {
          registerPiniaDevtools(app, pinia);
        }
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
    pinia.use(devtoolsPlugin);
  }
  return pinia;
}
function patchObject(newState, oldState) {
  for (const key in oldState) {
    const subPatch = oldState[key];
    if (!(key in newState)) {
      continue;
    }
    const targetValue = newState[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      newState[key] = patchObject(targetValue, subPatch);
    } else {
      {
        newState[key] = subPatch;
      }
    }
  }
  return newState;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!(process.env.NODE_ENV !== "production") || !hot)) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = process.env.NODE_ENV !== "production" && hot ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      toRefs(ref(state ? state() : {}).value)
    ) : toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      if (process.env.NODE_ENV !== "production" && name in localState) {
        console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
      }
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  if (process.env.NODE_ENV !== "production" && !pinia._e.active) {
    throw new Error("Pinia destroyed");
  }
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  if (process.env.NODE_ENV !== "production" && !isVue2) {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event;
      } else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents)) {
          debuggerEvents.push(event);
        } else {
          console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
        }
      }
    };
  }
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!(process.env.NODE_ENV !== "production") || !hot)) {
    {
      pinia.state.value[$id] = {};
    }
  }
  const hotState = ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (process.env.NODE_ENV !== "production") {
      debuggerEvents = [];
    }
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
    } : noop
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  });
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(process.env.NODE_ENV !== "production" || USE_DEVTOOLS ? assign(
    {
      _hmrPayload,
      _customProperties: markRaw(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    partialStore
    // must be added later
    // setupStore
  ) : partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(setup)));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (process.env.NODE_ENV !== "production" && hot) {
        set(hotState.value, key, toRef(setupStore, key));
      } else if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
      if (process.env.NODE_ENV !== "production") {
        _hmrPayload.state.push(key);
      }
    } else if (typeof prop === "function") {
      const actionValue = process.env.NODE_ENV !== "production" && hot ? prop : wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      if (process.env.NODE_ENV !== "production") {
        _hmrPayload.actions[key] = prop;
      }
      optionsForPlugin.actions[key] = prop;
    } else if (process.env.NODE_ENV !== "production") {
      if (isComputed(prop)) {
        _hmrPayload.getters[key] = isOptionsStore ? (
          // @ts-expect-error
          options.getters[key]
        ) : prop;
      }
    }
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => process.env.NODE_ENV !== "production" && hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if (process.env.NODE_ENV !== "production" && hot) {
        throw new Error("cannot set hotState");
      }
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true;
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey];
          const oldStateSource = store.$state[stateKey];
          if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
            patchObject(newStateTarget, oldStateSource);
          } else {
            newStore.$state[stateKey] = oldStateSource;
          }
        }
        set(store, stateKey, toRef(newStore.$state, stateKey));
      });
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state)) {
          del(store, stateKey);
        }
      });
      isListening = false;
      isSyncListening = false;
      pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
      isSyncListening = true;
      nextTick().then(() => {
        isListening = true;
      });
      for (const actionName in newStore._hmrPayload.actions) {
        const action = newStore[actionName];
        set(store, actionName, wrapAction(actionName, action));
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName];
        const getterValue = isOptionsStore ? (
          // special handling of options api
          computed(() => {
            setActivePinia(pinia);
            return getter.call(store, store);
          })
        ) : getter;
        set(store, getterName, getterValue);
      }
      Object.keys(store._hmrPayload.getters).forEach((key) => {
        if (!(key in newStore._hmrPayload.getters)) {
          del(store, key);
        }
      });
      Object.keys(store._hmrPayload.actions).forEach((key) => {
        if (!(key in newStore._hmrPayload.actions)) {
          del(store, key);
        }
      });
      store._hmrPayload = newStore._hmrPayload;
      store._getters = newStore._getters;
      store._hotUpdating = false;
    });
  }
  if (USE_DEVTOOLS) {
    const nonEnumerable = {
      writable: true,
      configurable: true,
      // avoid warning on devtools trying to display this property
      enumerable: false
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
      Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
    });
  }
  pinia._p.forEach((extender) => {
    if (USE_DEVTOOLS) {
      const extensions = scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      }));
      Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
      assign(store, extensions);
    } else {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (process.env.NODE_ENV !== "production" && store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
    console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
  }
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && activePinia && activePinia._testing ? null : pinia) || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    if (process.env.NODE_ENV !== "production" && !activePinia) {
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    }
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
      if (process.env.NODE_ENV !== "production") {
        useStore._pinia = pinia;
      }
    }
    const store = pinia._s.get(id);
    if (process.env.NODE_ENV !== "production" && hot) {
      const hotId = "__hot:" + id;
      const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
      hot._hotUpdate(newStore);
      delete pinia.state.value[hotId];
      pinia._s.delete(hotId);
    }
    if (process.env.NODE_ENV !== "production" && IS_CLIENT) {
      const currentInstance = getCurrentInstance();
      if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
      !hot) {
        const vm = currentInstance.proxy;
        const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache[id] = store;
      }
    }
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a, _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const handler = !import.meta.prerender || !((_a = nuxtApp.ssrContext) == null ? void 0 : _a._sharedPrerenderCache) ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key);
    if (value) {
      return value;
    }
    const promise = nuxtApp.runWithContext(_handler);
    nuxtApp.ssrContext._sharedPrerenderCache.set(key, promise);
    return promise;
  };
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  options.dedupe = options.dedupe ?? "cancel";
  const hasCachedData = () => options.getCachedData(key, nuxtApp) != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_b = nuxtApp.payload._errors)[key] ?? (_b[key] = null);
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(options.getCachedData(key, nuxtApp) ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key, nuxtApp));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = null;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = null;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key].cancelled = true;
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useRequestEvent(nuxtApp = /* @__PURE__ */ useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(to, resolve) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
    return resolvedPath;
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const config = /* @__PURE__ */ useRuntimeConfig();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isAbsoluteUrl = computed(() => typeof to.value === "string" && hasProtocol(to.value, { acceptRelative: true }));
      const hasTarget = computed(() => props.target && props.target !== "_self");
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (hasTarget.value) {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || isAbsoluteUrl.value;
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value && !props.external && !isAbsoluteUrl.value ? resolveTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), router.resolve) : to.value || null;
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          const navigate = () => navigateTo(href, { replace: props.replace, external: props.external });
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const plugin = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
dayjs.extend(utc);
const plugin_8SbxDRbG6Y = /* @__PURE__ */ defineNuxtPlugin(async (nuxtApp) => nuxtApp.provide("dayjs", dayjs));
function usePersistedstateCookies(cookieOptions) {
  return {
    getItem: (key) => {
      return useCookie(key, {
        ...cookieOptions,
        encode: encodeURIComponent,
        decode: decodeURIComponent
      }).value;
    },
    setItem: (key, value) => {
      useCookie(key, {
        ...cookieOptions,
        encode: encodeURIComponent,
        decode: decodeURIComponent
      }).value = value;
    }
  };
}
function usePersistedstateLocalStorage() {
  return {
    getItem: (key) => {
      return !(/* @__PURE__ */ useNuxtApp()).ssrContext ? localStorage.getItem(key) : null;
    },
    setItem: (key, value) => {
      if (!(/* @__PURE__ */ useNuxtApp()).ssrContext)
        localStorage.setItem(key, value);
    }
  };
}
function usePersistedstateSessionStorage() {
  return {
    getItem: (key) => {
      return !(/* @__PURE__ */ useNuxtApp()).ssrContext ? sessionStorage.getItem(key) : null;
    },
    setItem: (key, value) => {
      if (!(/* @__PURE__ */ useNuxtApp()).ssrContext)
        sessionStorage.setItem(key, value);
    }
  };
}
const persistedState = {
  localStorage: usePersistedstateLocalStorage(),
  sessionStorage: usePersistedstateSessionStorage(),
  cookies: usePersistedstateCookies(),
  cookiesWithOptions: usePersistedstateCookies
};
const plugin_1UohGbtF8v = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const {
    cookieOptions,
    debug,
    storage
  } = (/* @__PURE__ */ useRuntimeConfig()).public.persistedState;
  const pinia = nuxtApp.$pinia;
  pinia.use(createPersistedState({
    storage: storage === "cookies" ? persistedState.cookiesWithOptions(cookieOptions) : persistedState[storage],
    debug
  }));
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin$1,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  plugin_8SbxDRbG6Y,
  plugin_1UohGbtF8v
];
const _imports_0 = "" + __buildAssetsURL("logo.DP3bS-H-.png");
const apiUrl = "https://balitiket.mindimedia.com/api/v1";
const getVendors = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-list-vendor`);
    return response.data;
  } catch (error) {
    console.error("Error fetching vendors:", error);
    throw error;
  }
};
const getBaliZooPopular = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-popular-product-2?slug=bali-zoo`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching vendor detail for:`, error);
    throw error;
  }
};
const getBaliBirdPopular = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-popular-product-2?slug=bali-bird-park`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching vendor detail for:`, error);
    throw error;
  }
};
const getBaliFarmPopular = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-popular-product-2?slug=bali-farm-house`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching vendor detail for:`, error);
    throw error;
  }
};
const getBaliSafariPopular = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-popular-product-2?slug=bali-safari`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching vendor detail for:`, error);
    throw error;
  }
};
const getProductBaliSafari = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-product?slug=Bali-Safari`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching popular products for slug ${slug}:`, error);
    throw error;
  }
};
const getProductBaliFarm = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-product?slug=Bali-Farm-House`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching popular products for slug ${slug}:`, error);
    throw error;
  }
};
const getProductDetail = async (vendorSlug, productSlug) => {
  try {
    const response = await axios.get(`${apiUrl}/get-detail-product?vendor=${vendorSlug}&product=${productSlug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product detail for vendor ${vendorSlug} and product ${productSlug}:`, error);
    throw error;
  }
};
const _sfc_main$4 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const vendors = ref([]);
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("vendors", getVendors)), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      vendors.value = data.value;
    }
    const isScrolled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><nav class="${ssrRenderClass([{ "bg-black bg-opacity-45": isScrolled.value }, "px-2 sm:px-4 py-2.5 hidden md:block fixed w-full top-0 left-0 bg-transparent bg-gradient-to-b from-black to-transparent"])}" style="${ssrRenderStyle({ "z-index": "99" })}"><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center space-x-3 rtl:space-x-reverse",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="h-16"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "h-16"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"><button type="button" class="text-white border border-gray-300 boldfont bg-transparentfont-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-white hover:text-black">Enquire</button><button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button></div><div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta"><ul class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block boldfont py-2 px-3 md:p-0 text-white rounded",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-fullblock boldfont py-2 px-3 md:p-0 text-white rounded">Places to go <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button><div id="dropdownNavbar" class="z-10 hidden font-normal bg-white rounded-lg w-52"><ul class="py-2 px-3 text-sm" aria-labelledby="dropdownLargeButton"><!--[-->`);
      ssrRenderList(vendors.value, (vendor) => {
        _push(`<li><a${ssrRenderAttr("href", `/vendor/${vendor.slug}`)} class="block text-sm boldfont text-black">${ssrInterpolate(vendor.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></li><li><a class="block boldfont py-2 px-3 md:p-0 text-white rounded" href="/ticket">Tickets </a></li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block boldfont py-2 px-3 md:p-0 text-white rounded",
        to: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact `);
          } else {
            return [
              createTextVNode("Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></nav><div class="block md:hidden fixed w-100 bottom-0 left-0 right-0 z-[99]"><div class="nav-bottom-bar flex justify-center items-center justify-between py-5 px-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex flex-col items-center"
      }, {
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none"${_scopeId}><path d="M27.1838 13.155L17.1838 3.71748L17.1725 3.70748C16.8512 3.41322 16.4313 3.25 15.9956 3.25C15.56 3.25 15.1401 3.41322 14.8188 3.70748L14.8075 3.71748L4.80752 13.155C4.63064 13.3197 4.48979 13.5192 4.39384 13.741C4.29789 13.9628 4.24892 14.2021 4.25002 14.4437V26C4.25002 26.4641 4.43439 26.9092 4.76258 27.2374C5.09077 27.5656 5.53589 27.75 6.00002 27.75H12C12.4641 27.75 12.9093 27.5656 13.2375 27.2374C13.5656 26.9092 13.75 26.4641 13.75 26V20C13.75 19.9337 13.7764 19.8701 13.8232 19.8232C13.8701 19.7763 13.9337 19.75 14 19.75H18C18.0663 19.75 18.1299 19.7763 18.1768 19.8232C18.2237 19.8701 18.25 19.9337 18.25 20V26C18.25 26.4641 18.4344 26.9092 18.7626 27.2374C19.0908 27.5656 19.5359 27.75 20 27.75H26C26.4641 27.75 26.9093 27.5656 27.2375 27.2374C27.5656 26.9092 27.75 26.4641 27.75 26V14.4437C27.75 14.2014 27.6997 13.9618 27.6022 13.7399C27.5047 13.5181 27.3622 13.3189 27.1838 13.155ZM26.25 26C26.25 26.0663 26.2237 26.1299 26.1768 26.1768C26.1299 26.2236 26.0663 26.25 26 26.25H20C19.9337 26.25 19.8701 26.2236 19.8232 26.1768C19.7764 26.1299 19.75 26.0663 19.75 26V20C19.75 19.5359 19.5656 19.0907 19.2375 18.7625C18.9093 18.4344 18.4641 18.25 18 18.25H14C13.5359 18.25 13.0908 18.4344 12.7626 18.7625C12.4344 19.0907 12.25 19.5359 12.25 20V26C12.25 26.0663 12.2237 26.1299 12.1768 26.1768C12.1299 26.2236 12.0663 26.25 12 26.25H6.00002C5.93371 26.25 5.87013 26.2236 5.82324 26.1768C5.77636 26.1299 5.75002 26.0663 5.75002 26V14.4437C5.74994 14.4089 5.75713 14.3745 5.77112 14.3427C5.78511 14.3108 5.8056 14.2822 5.83127 14.2587L5.84252 14.2487L15.835 4.81373C15.8806 4.77399 15.939 4.7521 15.9994 4.7521C16.0598 4.7521 16.1182 4.77399 16.1638 4.81373L26.1575 14.25L26.1675 14.26C26.1934 14.2834 26.2141 14.3119 26.2283 14.3438C26.2426 14.3756 26.2499 14.4101 26.25 14.445V26Z"${ssrRenderAttr("fill", isActive ? "#FFD600" : "white")}${_scopeId}></path></svg><p class="${ssrRenderClass([isActive ? "text-yellow" : "text-white", "text-center", "text-xs"])}"${_scopeId}>Home</p>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 32 32",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M27.1838 13.155L17.1838 3.71748L17.1725 3.70748C16.8512 3.41322 16.4313 3.25 15.9956 3.25C15.56 3.25 15.1401 3.41322 14.8188 3.70748L14.8075 3.71748L4.80752 13.155C4.63064 13.3197 4.48979 13.5192 4.39384 13.741C4.29789 13.9628 4.24892 14.2021 4.25002 14.4437V26C4.25002 26.4641 4.43439 26.9092 4.76258 27.2374C5.09077 27.5656 5.53589 27.75 6.00002 27.75H12C12.4641 27.75 12.9093 27.5656 13.2375 27.2374C13.5656 26.9092 13.75 26.4641 13.75 26V20C13.75 19.9337 13.7764 19.8701 13.8232 19.8232C13.8701 19.7763 13.9337 19.75 14 19.75H18C18.0663 19.75 18.1299 19.7763 18.1768 19.8232C18.2237 19.8701 18.25 19.9337 18.25 20V26C18.25 26.4641 18.4344 26.9092 18.7626 27.2374C19.0908 27.5656 19.5359 27.75 20 27.75H26C26.4641 27.75 26.9093 27.5656 27.2375 27.2374C27.5656 26.9092 27.75 26.4641 27.75 26V14.4437C27.75 14.2014 27.6997 13.9618 27.6022 13.7399C27.5047 13.5181 27.3622 13.3189 27.1838 13.155ZM26.25 26C26.25 26.0663 26.2237 26.1299 26.1768 26.1768C26.1299 26.2236 26.0663 26.25 26 26.25H20C19.9337 26.25 19.8701 26.2236 19.8232 26.1768C19.7764 26.1299 19.75 26.0663 19.75 26V20C19.75 19.5359 19.5656 19.0907 19.2375 18.7625C18.9093 18.4344 18.4641 18.25 18 18.25H14C13.5359 18.25 13.0908 18.4344 12.7626 18.7625C12.4344 19.0907 12.25 19.5359 12.25 20V26C12.25 26.0663 12.2237 26.1299 12.1768 26.1768C12.1299 26.2236 12.0663 26.25 12 26.25H6.00002C5.93371 26.25 5.87013 26.2236 5.82324 26.1768C5.77636 26.1299 5.75002 26.0663 5.75002 26V14.4437C5.74994 14.4089 5.75713 14.3745 5.77112 14.3427C5.78511 14.3108 5.8056 14.2822 5.83127 14.2587L5.84252 14.2487L15.835 4.81373C15.8806 4.77399 15.939 4.7521 15.9994 4.7521C16.0598 4.7521 16.1182 4.77399 16.1638 4.81373L26.1575 14.25L26.1675 14.26C26.1934 14.2834 26.2141 14.3119 26.2283 14.3438C26.2426 14.3756 26.2499 14.4101 26.25 14.445V26Z",
                  fill: isActive ? "#FFD600" : "white"
                }, null, 8, ["fill"])
              ])),
              createVNode("p", {
                class: [isActive ? "text-yellow" : "text-white", "text-center", "text-xs"]
              }, "Home", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/place-to-go",
        class: "flex flex-col items-center"
      }, {
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none"${_scopeId}><path d="M16 8.25C15.0605 8.25 14.1422 8.52858 13.361 9.05052C12.5799 9.57246 11.9711 10.3143 11.6116 11.1823C11.2521 12.0502 11.158 13.0053 11.3413 13.9267C11.5245 14.8481 11.9769 15.6945 12.6412 16.3588C13.3055 17.0231 14.1519 17.4754 15.0733 17.6587C15.9947 17.842 16.9498 17.7479 17.8177 17.3884C18.6857 17.0289 19.4275 16.4201 19.9495 15.639C20.4714 14.8578 20.75 13.9395 20.75 13C20.75 11.7402 20.2496 10.532 19.3588 9.64124C18.468 8.75045 17.2598 8.25 16 8.25ZM16 16.25C15.3572 16.25 14.7289 16.0594 14.1944 15.7023C13.6599 15.3452 13.2434 14.8376 12.9974 14.2437C12.7514 13.6499 12.687 12.9964 12.8124 12.366C12.9378 11.7355 13.2474 11.1564 13.7019 10.7019C14.1564 10.2474 14.7355 9.93785 15.366 9.81245C15.9964 9.68705 16.6499 9.75141 17.2437 9.99739C17.8376 10.2434 18.3452 10.6599 18.7023 11.1944C19.0594 11.7289 19.25 12.3572 19.25 13C19.25 13.862 18.9076 14.6886 18.2981 15.2981C17.6886 15.9076 16.862 16.25 16 16.25ZM16 2.25C13.1499 2.25331 10.4176 3.38696 8.40226 5.40226C6.38696 7.41756 5.25331 10.1499 5.25 13C5.25 16.8637 7.0425 20.9675 10.4338 24.8675C11.9644 26.6364 13.6871 28.2295 15.57 29.6175C15.696 29.7057 15.8462 29.753 16 29.753C16.1538 29.753 16.304 29.7057 16.43 29.6175C18.3129 28.2295 20.0356 26.6364 21.5662 24.8675C24.9575 20.9675 26.75 16.8675 26.75 13C26.7467 10.1499 25.613 7.41756 23.5977 5.40226C21.5824 3.38696 18.8501 2.25331 16 2.25ZM16 28.0637C14.125 26.6162 6.75 20.4525 6.75 13C6.75 10.5467 7.72455 8.19397 9.45926 6.45926C11.194 4.72455 13.5467 3.75 16 3.75C18.4533 3.75 20.806 4.72455 22.5407 6.45926C24.2754 8.19397 25.25 10.5467 25.25 13C25.25 20.4525 17.875 26.6162 16 28.0637Z"${ssrRenderAttr("fill", isActive ? "#FFD600" : "white")}${_scopeId}></path></svg><p class="${ssrRenderClass([isActive ? "text-yellow" : "text-white", "text-center", "text-xs"])}"${_scopeId}>Place To Go</p>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 32 32",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M16 8.25C15.0605 8.25 14.1422 8.52858 13.361 9.05052C12.5799 9.57246 11.9711 10.3143 11.6116 11.1823C11.2521 12.0502 11.158 13.0053 11.3413 13.9267C11.5245 14.8481 11.9769 15.6945 12.6412 16.3588C13.3055 17.0231 14.1519 17.4754 15.0733 17.6587C15.9947 17.842 16.9498 17.7479 17.8177 17.3884C18.6857 17.0289 19.4275 16.4201 19.9495 15.639C20.4714 14.8578 20.75 13.9395 20.75 13C20.75 11.7402 20.2496 10.532 19.3588 9.64124C18.468 8.75045 17.2598 8.25 16 8.25ZM16 16.25C15.3572 16.25 14.7289 16.0594 14.1944 15.7023C13.6599 15.3452 13.2434 14.8376 12.9974 14.2437C12.7514 13.6499 12.687 12.9964 12.8124 12.366C12.9378 11.7355 13.2474 11.1564 13.7019 10.7019C14.1564 10.2474 14.7355 9.93785 15.366 9.81245C15.9964 9.68705 16.6499 9.75141 17.2437 9.99739C17.8376 10.2434 18.3452 10.6599 18.7023 11.1944C19.0594 11.7289 19.25 12.3572 19.25 13C19.25 13.862 18.9076 14.6886 18.2981 15.2981C17.6886 15.9076 16.862 16.25 16 16.25ZM16 2.25C13.1499 2.25331 10.4176 3.38696 8.40226 5.40226C6.38696 7.41756 5.25331 10.1499 5.25 13C5.25 16.8637 7.0425 20.9675 10.4338 24.8675C11.9644 26.6364 13.6871 28.2295 15.57 29.6175C15.696 29.7057 15.8462 29.753 16 29.753C16.1538 29.753 16.304 29.7057 16.43 29.6175C18.3129 28.2295 20.0356 26.6364 21.5662 24.8675C24.9575 20.9675 26.75 16.8675 26.75 13C26.7467 10.1499 25.613 7.41756 23.5977 5.40226C21.5824 3.38696 18.8501 2.25331 16 2.25ZM16 28.0637C14.125 26.6162 6.75 20.4525 6.75 13C6.75 10.5467 7.72455 8.19397 9.45926 6.45926C11.194 4.72455 13.5467 3.75 16 3.75C18.4533 3.75 20.806 4.72455 22.5407 6.45926C24.2754 8.19397 25.25 10.5467 25.25 13C25.25 20.4525 17.875 26.6162 16 28.0637Z",
                  fill: isActive ? "#FFD600" : "white"
                }, null, 8, ["fill"])
              ])),
              createVNode("p", {
                class: [isActive ? "text-yellow" : "text-white", "text-center", "text-xs"]
              }, "Place To Go", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ticket",
        class: "flex flex-col items-center"
      }, {
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none"${_scopeId}><path d="M28.3487 12.815C28.744 12.7346 29.0994 12.5201 29.3548 12.2078C29.6101 11.8956 29.7497 11.5046 29.75 11.1012V8C29.75 7.53587 29.5656 7.09075 29.2374 6.76256C28.9092 6.43437 28.4641 6.25 28 6.25H4C3.53587 6.25 3.09075 6.43437 2.76256 6.76256C2.43437 7.09075 2.25 7.53587 2.25 8V11.1012C2.25026 11.5046 2.38988 11.8956 2.64522 12.2078C2.90056 12.5201 3.25595 12.7346 3.65125 12.815C4.38865 12.9617 5.05236 13.3596 5.52931 13.9408C6.00626 14.522 6.26694 15.2506 6.26694 16.0025C6.26694 16.7544 6.00626 17.483 5.52931 18.0642C5.05236 18.6454 4.38865 19.0433 3.65125 19.19C3.25679 19.2702 2.90205 19.484 2.6468 19.7952C2.39155 20.1065 2.25141 20.4962 2.25 20.8988V24C2.25 24.4641 2.43437 24.9092 2.76256 25.2374C3.09075 25.5656 3.53587 25.75 4 25.75H28C28.4641 25.75 28.9092 25.5656 29.2374 25.2374C29.5656 24.9092 29.75 24.4641 29.75 24V20.8988C29.7497 20.4954 29.6101 20.1044 29.3548 19.7922C29.0994 19.4799 28.744 19.2654 28.3487 19.185C27.6113 19.0383 26.9476 18.6404 26.4707 18.0592C25.9937 17.478 25.7331 16.7494 25.7331 15.9975C25.7331 15.2456 25.9937 14.517 26.4707 13.9358C26.9476 13.3546 27.6113 12.9567 28.3487 12.81V12.815ZM3.75 24V20.8988C3.75022 20.8415 3.77007 20.7861 3.80624 20.7417C3.84242 20.6973 3.89272 20.6667 3.94875 20.655C5.02252 20.437 5.9879 19.8544 6.68131 19.006C7.37472 18.1577 7.75351 17.0957 7.75351 16C7.75351 14.9043 7.37472 13.8423 6.68131 12.994C5.9879 12.1456 5.02252 11.563 3.94875 11.345C3.89166 11.3331 3.84055 11.3015 3.80425 11.2559C3.76795 11.2102 3.74876 11.1533 3.75 11.095V8C3.75 7.9337 3.77634 7.87011 3.82322 7.82322C3.87011 7.77634 3.9337 7.75 4 7.75H11.25V24.25H4C3.9337 24.25 3.87011 24.2237 3.82322 24.1768C3.77634 24.1299 3.75 24.0663 3.75 24ZM28.0513 20.655C28.1073 20.6667 28.1576 20.6973 28.1938 20.7417C28.2299 20.7861 28.2498 20.8415 28.25 20.8988V24C28.25 24.0663 28.2237 24.1299 28.1768 24.1768C28.1299 24.2237 28.0663 24.25 28 24.25H12.75V7.75H28C28.0663 7.75 28.1299 7.77634 28.1768 7.82322C28.2237 7.87011 28.25 7.9337 28.25 8V11.1012C28.2512 11.1596 28.232 11.2165 28.1957 11.2621C28.1595 11.3078 28.1083 11.3393 28.0513 11.3512C26.9775 11.5693 26.0121 12.1518 25.3187 13.0002C24.6253 13.8486 24.2465 14.9106 24.2465 16.0063C24.2465 17.1019 24.6253 18.1639 25.3187 19.0123C26.0121 19.8607 26.9775 20.4432 28.0513 20.6612V20.655Z"${ssrRenderAttr("fill", isActive ? "#FFD600" : "white")}${_scopeId}></path></svg><p class="${ssrRenderClass([isActive ? "text-yellow" : "text-white", "text-center", "text-xs"])}"${_scopeId}>Tickets</p>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 32 32",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M28.3487 12.815C28.744 12.7346 29.0994 12.5201 29.3548 12.2078C29.6101 11.8956 29.7497 11.5046 29.75 11.1012V8C29.75 7.53587 29.5656 7.09075 29.2374 6.76256C28.9092 6.43437 28.4641 6.25 28 6.25H4C3.53587 6.25 3.09075 6.43437 2.76256 6.76256C2.43437 7.09075 2.25 7.53587 2.25 8V11.1012C2.25026 11.5046 2.38988 11.8956 2.64522 12.2078C2.90056 12.5201 3.25595 12.7346 3.65125 12.815C4.38865 12.9617 5.05236 13.3596 5.52931 13.9408C6.00626 14.522 6.26694 15.2506 6.26694 16.0025C6.26694 16.7544 6.00626 17.483 5.52931 18.0642C5.05236 18.6454 4.38865 19.0433 3.65125 19.19C3.25679 19.2702 2.90205 19.484 2.6468 19.7952C2.39155 20.1065 2.25141 20.4962 2.25 20.8988V24C2.25 24.4641 2.43437 24.9092 2.76256 25.2374C3.09075 25.5656 3.53587 25.75 4 25.75H28C28.4641 25.75 28.9092 25.5656 29.2374 25.2374C29.5656 24.9092 29.75 24.4641 29.75 24V20.8988C29.7497 20.4954 29.6101 20.1044 29.3548 19.7922C29.0994 19.4799 28.744 19.2654 28.3487 19.185C27.6113 19.0383 26.9476 18.6404 26.4707 18.0592C25.9937 17.478 25.7331 16.7494 25.7331 15.9975C25.7331 15.2456 25.9937 14.517 26.4707 13.9358C26.9476 13.3546 27.6113 12.9567 28.3487 12.81V12.815ZM3.75 24V20.8988C3.75022 20.8415 3.77007 20.7861 3.80624 20.7417C3.84242 20.6973 3.89272 20.6667 3.94875 20.655C5.02252 20.437 5.9879 19.8544 6.68131 19.006C7.37472 18.1577 7.75351 17.0957 7.75351 16C7.75351 14.9043 7.37472 13.8423 6.68131 12.994C5.9879 12.1456 5.02252 11.563 3.94875 11.345C3.89166 11.3331 3.84055 11.3015 3.80425 11.2559C3.76795 11.2102 3.74876 11.1533 3.75 11.095V8C3.75 7.9337 3.77634 7.87011 3.82322 7.82322C3.87011 7.77634 3.9337 7.75 4 7.75H11.25V24.25H4C3.9337 24.25 3.87011 24.2237 3.82322 24.1768C3.77634 24.1299 3.75 24.0663 3.75 24ZM28.0513 20.655C28.1073 20.6667 28.1576 20.6973 28.1938 20.7417C28.2299 20.7861 28.2498 20.8415 28.25 20.8988V24C28.25 24.0663 28.2237 24.1299 28.1768 24.1768C28.1299 24.2237 28.0663 24.25 28 24.25H12.75V7.75H28C28.0663 7.75 28.1299 7.77634 28.1768 7.82322C28.2237 7.87011 28.25 7.9337 28.25 8V11.1012C28.2512 11.1596 28.232 11.2165 28.1957 11.2621C28.1595 11.3078 28.1083 11.3393 28.0513 11.3512C26.9775 11.5693 26.0121 12.1518 25.3187 13.0002C24.6253 13.8486 24.2465 14.9106 24.2465 16.0063C24.2465 17.1019 24.6253 18.1639 25.3187 19.0123C26.0121 19.8607 26.9775 20.4432 28.0513 20.6612V20.655Z",
                  fill: isActive ? "#FFD600" : "white"
                }, null, 8, ["fill"])
              ])),
              createVNode("p", {
                class: [isActive ? "text-yellow" : "text-white", "text-center", "text-xs"]
              }, "Tickets", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "flex flex-col items-center"
      }, {
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none"${_scopeId}><path d="M27.6988 20.0376L21.7938 17.3913C21.5262 17.2767 21.2343 17.2306 20.9444 17.2572C20.6546 17.2838 20.3759 17.3824 20.1338 17.5438C20.1092 17.5596 20.0858 17.5771 20.0638 17.5963L16.9775 20.2213C16.9455 20.2388 16.9098 20.2485 16.8734 20.2498C16.837 20.2512 16.8007 20.244 16.7675 20.2288C14.7838 19.2713 12.7288 17.2288 11.7675 15.2726C11.7515 15.2399 11.7432 15.204 11.7432 15.1676C11.7432 15.1312 11.7515 15.0953 11.7675 15.0626L14.4013 11.9376C14.4202 11.9144 14.4377 11.8902 14.4538 11.8651C14.613 11.622 14.7092 11.343 14.7336 11.0534C14.7581 10.7638 14.71 10.4727 14.5938 10.2063L11.9663 4.31132C11.8171 3.96333 11.559 3.67312 11.2308 3.48425C10.9027 3.29538 10.5221 3.21803 10.1463 3.26382C8.5128 3.47857 7.01341 4.28074 5.92829 5.52045C4.84318 6.76015 4.24659 8.35255 4.25001 10.0001C4.25001 19.7876 12.2125 27.7501 22 27.7501C23.6475 27.7532 25.2397 27.1565 26.4794 26.0715C27.719 24.9864 28.5213 23.4872 28.7363 21.8538C28.782 21.4797 28.7057 21.1009 28.5187 20.7736C28.3318 20.4464 28.0442 20.1882 27.6988 20.0376ZM22 26.2501C13.04 26.2501 5.75001 18.9601 5.75001 10.0001C5.74584 8.71748 6.20877 7.47725 7.05232 6.51108C7.89587 5.54492 9.06233 4.91893 10.3338 4.75007H10.3625C10.4129 4.75101 10.4618 4.76715 10.5028 4.79637C10.5439 4.82559 10.5751 4.86653 10.5925 4.91382L13.23 10.8026C13.2451 10.8353 13.2528 10.8709 13.2528 10.9069C13.2528 10.943 13.2451 10.9786 13.23 11.0113L10.5913 14.1438C10.5716 14.1662 10.5536 14.19 10.5375 14.2151C10.3724 14.4671 10.2752 14.7576 10.2552 15.0583C10.2353 15.3589 10.2934 15.6597 10.4238 15.9313C11.5325 18.2013 13.82 20.4713 16.115 21.5801C16.3883 21.7098 16.6905 21.7664 16.9921 21.7445C17.2938 21.7226 17.5846 21.6229 17.8363 21.4551C17.86 21.4388 17.8838 21.4213 17.9063 21.4026L20.9913 18.7776C21.0217 18.7612 21.0554 18.7516 21.0899 18.7494C21.1244 18.7473 21.159 18.7526 21.1913 18.7651L27.0975 21.4113C27.1458 21.4319 27.1863 21.4671 27.2135 21.5119C27.2406 21.5568 27.253 21.6091 27.2488 21.6613C27.0808 22.9333 26.4554 24.1007 25.4894 24.9452C24.5235 25.7897 23.2831 26.2535 22 26.2501Z"${ssrRenderAttr("fill", isActive ? "#FFD600" : "white")}${_scopeId}></path></svg><p class="${ssrRenderClass([isActive ? "text-yellow" : "text-white", "text-center", "text-xs"])}"${_scopeId}>Contact Us</p>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 32 32",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M27.6988 20.0376L21.7938 17.3913C21.5262 17.2767 21.2343 17.2306 20.9444 17.2572C20.6546 17.2838 20.3759 17.3824 20.1338 17.5438C20.1092 17.5596 20.0858 17.5771 20.0638 17.5963L16.9775 20.2213C16.9455 20.2388 16.9098 20.2485 16.8734 20.2498C16.837 20.2512 16.8007 20.244 16.7675 20.2288C14.7838 19.2713 12.7288 17.2288 11.7675 15.2726C11.7515 15.2399 11.7432 15.204 11.7432 15.1676C11.7432 15.1312 11.7515 15.0953 11.7675 15.0626L14.4013 11.9376C14.4202 11.9144 14.4377 11.8902 14.4538 11.8651C14.613 11.622 14.7092 11.343 14.7336 11.0534C14.7581 10.7638 14.71 10.4727 14.5938 10.2063L11.9663 4.31132C11.8171 3.96333 11.559 3.67312 11.2308 3.48425C10.9027 3.29538 10.5221 3.21803 10.1463 3.26382C8.5128 3.47857 7.01341 4.28074 5.92829 5.52045C4.84318 6.76015 4.24659 8.35255 4.25001 10.0001C4.25001 19.7876 12.2125 27.7501 22 27.7501C23.6475 27.7532 25.2397 27.1565 26.4794 26.0715C27.719 24.9864 28.5213 23.4872 28.7363 21.8538C28.782 21.4797 28.7057 21.1009 28.5187 20.7736C28.3318 20.4464 28.0442 20.1882 27.6988 20.0376ZM22 26.2501C13.04 26.2501 5.75001 18.9601 5.75001 10.0001C5.74584 8.71748 6.20877 7.47725 7.05232 6.51108C7.89587 5.54492 9.06233 4.91893 10.3338 4.75007H10.3625C10.4129 4.75101 10.4618 4.76715 10.5028 4.79637C10.5439 4.82559 10.5751 4.86653 10.5925 4.91382L13.23 10.8026C13.2451 10.8353 13.2528 10.8709 13.2528 10.9069C13.2528 10.943 13.2451 10.9786 13.23 11.0113L10.5913 14.1438C10.5716 14.1662 10.5536 14.19 10.5375 14.2151C10.3724 14.4671 10.2752 14.7576 10.2552 15.0583C10.2353 15.3589 10.2934 15.6597 10.4238 15.9313C11.5325 18.2013 13.82 20.4713 16.115 21.5801C16.3883 21.7098 16.6905 21.7664 16.9921 21.7445C17.2938 21.7226 17.5846 21.6229 17.8363 21.4551C17.86 21.4388 17.8838 21.4213 17.9063 21.4026L20.9913 18.7776C21.0217 18.7612 21.0554 18.7516 21.0899 18.7494C21.1244 18.7473 21.159 18.7526 21.1913 18.7651L27.0975 21.4113C27.1458 21.4319 27.1863 21.4671 27.2135 21.5119C27.2406 21.5568 27.253 21.6091 27.2488 21.6613C27.0808 22.9333 26.4554 24.1007 25.4894 24.9452C24.5235 25.7897 23.2831 26.2535 22 26.2501Z",
                  fill: isActive ? "#FFD600" : "white"
                }, null, 8, ["fill"])
              ])),
              createVNode("p", {
                class: [isActive ? "text-yellow" : "text-white", "text-center", "text-xs"]
              }, "Contact Us", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  const start = () => set2(0);
  function set2(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    progress.value = at < 0 ? 0 : at;
    if (throttle && false) {
      setTimeout(() => {
        isLoading.value = true;
      }, throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    start,
    set: set2,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_1 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _imports_1 = "" + __buildAssetsURL("Logos.r0-ipw4Y.png");
const _imports_2 = "" + __buildAssetsURL("Logos2.CrCAwhns.png");
const _imports_3 = "" + __buildAssetsURL("Logos3.Dornu1cQ.png");
const _imports_4 = "" + __buildAssetsURL("Logos4.BZXOeXWJ.png");
const _imports_5 = "" + __buildAssetsURL("trip.BwxzGZy_.png");
const _imports_6 = "" + __buildAssetsURL("iata.CE75WtoN.png");
const _imports_7 = "" + __buildAssetsURL("klook.B9bspmqe.png");
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-cover bg-[url('../assets/image/bgfooter.png')]" }, _attrs))}><div class="container mx-auto px-5 pb-40 lg:pb-0 lg:px-10"><div class="bg-brown rounded-b-[30px] p-4 lg:p-14 mb-10"><div class="grid grid-cols-1 lg:grid-cols-12 gap-4"><div class="lg:col-span-2"><img${ssrRenderAttr("src", _imports_0)} class="h-[80%] mx-auto" alt=""></div><div class="lg:col-span-8"><p class="text-white text-center lg:text-left text-sm lg:text-md w-full lg:w-3/4">We are number 1 Zoo Ticketing Agent in Bali. Trusted by more than 10.000 monthly visitors, we offer you the best deal for your Bali Zoo trip.</p></div><div class="lg:col-span-2"><h1 class="boldfont text-center lg:text-left text-white">Follow Us</h1><div class="flex justify-center lg:justify-start lg:text-left"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48" fill="none"><path d="M24 15C22.22 15 20.4799 15.5278 18.9999 16.5168C17.5198 17.5057 16.3663 18.9113 15.6851 20.5558C15.0039 22.2004 14.8257 24.01 15.1729 25.7558C15.5202 27.5016 16.3774 29.1053 17.636 30.364C18.8947 31.6226 20.4984 32.4798 22.2442 32.8271C23.99 33.1743 25.7996 32.9961 27.4442 32.3149C29.0887 31.6337 30.4943 30.4802 31.4832 29.0001C32.4722 27.5201 33 25.78 33 24C32.9975 21.6138 32.0485 19.3261 30.3612 17.6388C28.6739 15.9515 26.3862 15.0025 24 15ZM24 30C22.8133 30 21.6533 29.6481 20.6666 28.9888C19.6799 28.3295 18.9108 27.3925 18.4567 26.2961C18.0026 25.1997 17.8838 23.9933 18.1153 22.8295C18.3468 21.6656 18.9182 20.5965 19.7574 19.7574C20.5965 18.9182 21.6656 18.3468 22.8295 18.1153C23.9933 17.8838 25.1997 18.0026 26.2961 18.4567C27.3925 18.9108 28.3295 19.6799 28.9888 20.6666C29.6481 21.6533 30 22.8133 30 24C30 25.5913 29.3679 27.1174 28.2426 28.2426C27.1174 29.3679 25.5913 30 24 30ZM33 4.5H15C12.2161 4.50298 9.54715 5.61018 7.57867 7.57867C5.61018 9.54715 4.50298 12.2161 4.5 15V33C4.50298 35.7839 5.61018 38.4528 7.57867 40.4213C9.54715 42.3898 12.2161 43.497 15 43.5H33C35.7839 43.497 38.4528 42.3898 40.4213 40.4213C42.3898 38.4528 43.497 35.7839 43.5 33V15C43.497 12.2161 42.3898 9.54715 40.4213 7.57867C38.4528 5.61018 35.7839 4.50298 33 4.5ZM40.5 33C40.5 34.9891 39.7098 36.8968 38.3033 38.3033C36.8968 39.7098 34.9891 40.5 33 40.5H15C13.0109 40.5 11.1032 39.7098 9.6967 38.3033C8.29018 36.8968 7.5 34.9891 7.5 33V15C7.5 13.0109 8.29018 11.1032 9.6967 9.6967C11.1032 8.29018 13.0109 7.5 15 7.5H33C34.9891 7.5 36.8968 8.29018 38.3033 9.6967C39.7098 11.1032 40.5 13.0109 40.5 15V33ZM36 14.25C36 14.695 35.868 15.13 35.6208 15.5C35.3736 15.87 35.0222 16.1584 34.611 16.3287C34.1999 16.499 33.7475 16.5436 33.311 16.4568C32.8746 16.37 32.4737 16.1557 32.159 15.841C31.8443 15.5263 31.63 15.1254 31.5432 14.689C31.4564 14.2525 31.501 13.8001 31.6713 13.389C31.8416 12.9778 32.13 12.6264 32.5 12.3792C32.87 12.132 33.305 12 33.75 12C34.3467 12 34.919 12.2371 35.341 12.659C35.7629 13.081 36 13.6533 36 14.25Z" fill="white"></path></svg></a><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48" fill="none"><path d="M24 4.5C20.1433 4.5 16.3731 5.64366 13.1664 7.78634C9.95963 9.92903 7.46027 12.9745 5.98436 16.5377C4.50845 20.1008 4.12228 24.0216 4.8747 27.8043C5.62711 31.5869 7.4843 35.0615 10.2114 37.7886C12.9386 40.5157 16.4131 42.3729 20.1957 43.1253C23.9784 43.8777 27.8992 43.4916 31.4623 42.0156C35.0255 40.5397 38.071 38.0404 40.2137 34.8336C42.3564 31.6269 43.5 27.8567 43.5 24C43.4945 18.83 41.4383 13.8732 37.7826 10.2174C34.1268 6.56167 29.1701 4.50546 24 4.5ZM25.5 40.4306V28.5H30C30.3978 28.5 30.7794 28.342 31.0607 28.0607C31.342 27.7794 31.5 27.3978 31.5 27C31.5 26.6022 31.342 26.2206 31.0607 25.9393C30.7794 25.658 30.3978 25.5 30 25.5H25.5V21C25.5 20.2044 25.8161 19.4413 26.3787 18.8787C26.9413 18.3161 27.7044 18 28.5 18H31.5C31.8978 18 32.2794 17.842 32.5607 17.5607C32.842 17.2794 33 16.8978 33 16.5C33 16.1022 32.842 15.7206 32.5607 15.4393C32.2794 15.158 31.8978 15 31.5 15H28.5C26.9087 15 25.3826 15.6321 24.2574 16.7574C23.1322 17.8826 22.5 19.4087 22.5 21V25.5H18C17.6022 25.5 17.2207 25.658 16.9393 25.9393C16.658 26.2206 16.5 26.6022 16.5 27C16.5 27.3978 16.658 27.7794 16.9393 28.0607C17.2207 28.342 17.6022 28.5 18 28.5H22.5V40.4306C18.2715 40.0446 14.3546 38.0433 11.564 34.8431C8.77334 31.6428 7.32389 27.4899 7.5171 23.2482C7.7103 19.0065 9.53129 15.0025 12.6013 12.0692C15.6713 9.13586 19.7539 7.49895 24 7.49895C28.2461 7.49895 32.3288 9.13586 35.3987 12.0692C38.4687 15.0025 40.2897 19.0065 40.4829 23.2482C40.6761 27.4899 39.2267 31.6428 36.4361 34.8431C33.6455 38.0433 29.7285 40.0446 25.5 40.4306Z" fill="white"></path></svg></a></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-4"><div class="lg:col-span-3 gap-4"><ul class="text-center lg:text-start"><li class="mb-2">`);
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/",
    class: "text-brown boldfont text-md lg:text-xl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-2"><div href="https://tailwindcss.com/" class="text-brown boldfont text-md lg:text-xl"> Places to Go</div><ul><li>`);
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/",
    class: "text-brown"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Bali Zoo`);
      } else {
        return [
          createTextVNode("Bali Zoo")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/",
    class: "text-brown"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Bali Bird Park`);
      } else {
        return [
          createTextVNode("Bali Bird Park")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/",
    class: "text-brown"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Bali Farm House`);
      } else {
        return [
          createTextVNode("Bali Farm House")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/",
    class: "text-brown"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Bali Safari`);
      } else {
        return [
          createTextVNode("Bali Safari")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="mb-2">`);
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/ticket",
    class: "text-brown boldfont text-md lg:text-xl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tickets`);
      } else {
        return [
          createTextVNode("Tickets")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-2">`);
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/contact",
    class: "text-brown boldfont text-md lg:text-xl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Us`);
      } else {
        return [
          createTextVNode("Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="lg:col-span-4 gap-4"><h1 class="text-md lg:text-xl text-center lg:text-start boldfont text-brown">Our Office</h1><div class="flex items-center justify-center lg:justify-start gap-4 my-4"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 16.8094 11.25 22.1409 11.5697 22.3641C11.6958 22.4524 11.846 22.4998 12 22.4998C12.154 22.4998 12.3042 22.4524 12.4303 22.3641C12.75 22.1409 20.25 16.8094 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM12 6.75C12.5933 6.75 13.1734 6.92595 13.6667 7.25559C14.1601 7.58524 14.5446 8.05377 14.7716 8.60195C14.9987 9.15013 15.0581 9.75333 14.9424 10.3353C14.8266 10.9172 14.5409 11.4518 14.1213 11.8713C13.7018 12.2909 13.1672 12.5766 12.5853 12.6924C12.0033 12.8081 11.4001 12.7487 10.8519 12.5216C10.3038 12.2946 9.83524 11.9101 9.50559 11.4167C9.17595 10.9234 9 10.3433 9 9.75C9 8.95435 9.31607 8.19129 9.87868 7.62868C10.4413 7.06607 11.2044 6.75 12 6.75Z" fill="#824D0F"></path></svg></div><div><p class="text-sm text-center lg:text-start text-brown"> Regus Benoa Square, Jl. Bypass Ngurah Rai No. 21A, Badung Regency, Bali </p></div></div><div class="flex items-center justify-center lg:justify-start gap-4 mb-4"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM20.25 18H3.75V6.95531L11.4928 14.0531C11.6312 14.1801 11.8122 14.2506 12 14.2506C12.1878 14.2506 12.3688 14.1801 12.5072 14.0531L20.25 6.95531V18Z" fill="#824D0F"></path></svg></div><div><p class="text-sm text-center lg:text-start text-brown"> baliticketservice@gmail.com </p></div></div><div class="flex items-center justify-center lg:justify-start gap-4 mb-4"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.7388 16.4137C21.5716 17.6841 20.9477 18.8501 19.9837 19.6941C19.0196 20.5381 17.7813 21.0023 16.5 21C9.05626 21 3.00001 14.9438 3.00001 7.5C2.99771 6.21871 3.4619 4.9804 4.30588 4.01634C5.14986 3.05228 6.31592 2.42841 7.58626 2.26125C7.9075 2.22203 8.2328 2.28775 8.51362 2.4486C8.79444 2.60945 9.0157 2.85681 9.14438 3.15375L11.1244 7.57406V7.58531C11.2229 7.81261 11.2636 8.06078 11.2428 8.30763C11.222 8.55449 11.1404 8.79236 11.0053 9C10.9884 9.02531 10.9706 9.04875 10.9519 9.07219L9.00001 11.3859C9.7022 12.8128 11.1947 14.2922 12.6403 14.9963L14.9222 13.0547C14.9446 13.0359 14.9681 13.0183 14.9925 13.0022C15.2 12.8638 15.4387 12.7794 15.687 12.7564C15.9353 12.7335 16.1854 12.7729 16.4147 12.8709L16.4269 12.8766L20.8434 14.8556C21.1409 14.9838 21.3889 15.2049 21.5503 15.4858C21.7116 15.7666 21.7778 16.0922 21.7388 16.4137Z" fill="#824D0F"></path></svg></div><div><p class="text-sm text-center lg:text-start text-brown"> (+62) 0888 8888 8888 </p></div></div></div><div class="lg:col-span-4 gap-4"><h1 class="text-center lg:text-start text-md lg:text-xl boldfont text-brown">Official Partner Of </h1><div class="hidden lg:grid grid-cols-4 gap-4 items-end"><img${ssrRenderAttr("src", _imports_1)} alt=""><img${ssrRenderAttr("src", _imports_2)} alt=""><img${ssrRenderAttr("src", _imports_3)} alt=""><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="block lg:hidden"><div class="marquee container"><div class="marquee-content items-end"><div class="marquee-item"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="marquee-item"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="marquee-item"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="marquee-item"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="marquee-item"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="marquee-item"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="marquee-item"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="marquee-item"><img${ssrRenderAttr("src", _imports_4)} alt=""></div></div></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-10"><div class="col-span-6 gap-4"><div class="grid grid-cols-3 gap-4"><div class="text-center"><p class="text-brown">Trusted By</p><img class="object-contain mx-auto h-20"${ssrRenderAttr("src", _imports_5)} alt=""><p class="text-xs lg:text-md text-brown">As Bali’s no. 1 Zoo Ticket Agent</p></div><div class="text-center"><p class="text-brown">Trusted By</p><img class="object-contain mx-auto h-20"${ssrRenderAttr("src", _imports_6)} alt=""><p class="text-xs lg:text-md text-brown">License No. 126.KEP.223/BDG/2011</p></div><div class="text-center"><p class="text-brown">Trusted By</p><img class="object-contain mx-auto h-20"${ssrRenderAttr("src", _imports_7)} alt=""><p class="text-xs lg:text-md text-brown">As Safari Ticket Agent Partner</p></div></div></div><div class="col-span-6 gap-4"><h1 class="text-md lg:text-xl text-center boldfont text-brown">AVAILABLE PAYMENT</h1></div></div><div class="mt-10 text-center text-brown"><hr class="bg-brown border-0 h-[1px]"><p class="py-5">Copyright © MindiMedia 2024 | Powered by Escape Link &amp; Guires Solutions</p></div></div></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$4;
      const _component_NuxtLoadingIndicator = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_Footer = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLoadingIndicator, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import("./_nuxt/error-404-BZzXRN9d.js").then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import("./_nuxt/error-500-3I9hwMKy.js").then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);
export {
  _export_sfc as _,
  __nuxt_component_0 as a,
  useAsyncData as b,
  getBaliZooPopular as c,
  getBaliBirdPopular as d,
  entry$1 as default,
  getBaliFarmPopular as e,
  getBaliSafariPopular as f,
  getVendors as g,
  getProductDetail as h,
  injectHead as i,
  defineStore as j,
  getProductBaliSafari as k,
  getProductBaliFarm as l,
  resolveUnrefHeadInput as r,
  useRouter as u
};
//# sourceMappingURL=server.mjs.map
