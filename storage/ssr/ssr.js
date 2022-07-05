"use strict";
var vue = require("vue");
var serverRenderer = require("@vue/server-renderer");
var inertiaVue3 = require("@inertiajs/inertia-vue3");
var createServer = require("@inertiajs/server");
var serverRenderer$1 = require("vue/server-renderer");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var createServer__default = /* @__PURE__ */ _interopDefaultLegacy(createServer);
function __variableDynamicImportRuntime0__(path) {
  switch (path) {
    case "./Pages/App.vue":
      return Promise.resolve().then(function() {
        return App;
      });
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
      });
  }
}
createServer__default["default"]((page) => inertiaVue3.createInertiaApp({
  page,
  render: serverRenderer.renderToString,
  resolve: async (name) => {
    return (await __variableDynamicImportRuntime0__(`./Pages/${name}.vue`)).default;
  },
  setup({ app, props, plugin }) {
    return vue.createSSRApp({
      render: () => vue.h(app, props)
    }).use(plugin);
  }
}));
const _sfc_main$2 = {
  __name: "ColorDetector",
  __ssrInlineRender: true,
  emits: ["detected"],
  setup(__props, { emit }) {
    const form = inertiaVue3.useForm({
      image: null
    });
    const colors = vue.ref([]);
    const img = vue.ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer$1.ssrRenderAttrs(vue.mergeProps({ class: "h-48" }, _attrs))}><div><form><input type="file"><button class="px-4 py-2 bg-slate-900 text-white rounded-md font-semibold shadow"> Process </button>`);
      if (vue.unref(form).errors.image) {
        _push(`<span class="text-red-300">${serverRenderer$1.ssrInterpolate(vue.unref(form).errors.image)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div>`);
      if (colors.value.length > 0) {
        _push(`<div class="h-24 w-24"><img${serverRenderer$1.ssrRenderAttr("src", img.value)} class="h-full w-full"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ColorDetector.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ColorPalette",
  __ssrInlineRender: true,
  props: {
    colors: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      if (props.colors) {
        _push(`<div${serverRenderer$1.ssrRenderAttrs(vue.mergeProps({ class: "flex space-x-1 h-32" }, _attrs))}><!--[-->`);
        serverRenderer$1.ssrRenderList(props.colors, (item, index) => {
          _push(`<div class="h-32 w-32 shadow relative group" style="${serverRenderer$1.ssrRenderStyle(`background: #${item}`)}"><span class="absolute -bottom-9 font-bold opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200">#${serverRenderer$1.ssrInterpolate(item)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ColorPalette.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const colors = vue.ref([]);
    function onDetect(cls) {
      colors.value = cls;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer$1.ssrRenderAttrs(vue.mergeProps({ class: "grid h-96 place-items-center grid-row-2 mt-9" }, _attrs))}>`);
      _push(serverRenderer$1.ssrRenderComponent(vue.unref(inertiaVue3.Head), null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Make your pallete</title>`);
          } else {
            return [
              vue.createVNode("title", null, "Make your pallete")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer$1.ssrRenderComponent(_sfc_main$2, { onDetected: onDetect }, null, _parent));
      _push(serverRenderer$1.ssrRenderComponent(_sfc_main$1, { colors: colors.value }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var App = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
