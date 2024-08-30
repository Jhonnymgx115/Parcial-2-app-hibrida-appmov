// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j2YDk":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var _localStorageSettings = require("/src/js/modules/Localstorage/LocalStorage_Settings");
var _dashboardSettings = require("/src/js/modules/Dashboard/Dashboard_Settings");
var _navegationSettings = require("/src/js/modules/Navegation/Navegation_Settings");
var _sesionManager = require("/src/js/modules/Session/Sesion_Manager");
// Inicializar la aplicación
function initApp() {
    (0, _localStorageSettings.initializeLocalStorage)();
    (0, _sesionManager.ManageSession)();
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        (0, _navegationSettings.showView)("home");
        (0, _dashboardSettings.updateDashboard)();
    } else (0, _navegationSettings.showView)("login");
    (0, _navegationSettings.updateNavVisibility)();
}
// Ejecutar la inicialización cuando se carga la página
document.addEventListener("DOMContentLoaded", initApp);

},{"/src/js/modules/Localstorage/LocalStorage_Settings":"e1bGT","/src/js/modules/Dashboard/Dashboard_Settings":"edo4x","/src/js/modules/Navegation/Navegation_Settings":"9LWDa","/src/js/modules/Session/Sesion_Manager":"2ygYe"}],"e1bGT":[function(require,module,exports) {
// Datos de usuario predefinidos
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Inicializar localStorage
parcelHelpers.export(exports, "initializeLocalStorage", ()=>initializeLocalStorage);
const predefinedUsers = [
    {
        username: "user1",
        password: "Pass1234!",
        email: "user1@example.com",
        fullName: "Usuario Uno"
    },
    {
        username: "user2",
        password: "Pass5678@",
        email: "user2@example.com",
        fullName: "Usuario Dos"
    },
    {
        username: "user3",
        password: "Pass9012#",
        email: "user3@example.com",
        fullName: "Usuario Tres"
    }
];
// Actividades predefinidas
const predefinedActivities = [
    {
        id: 1,
        name: "Correr 5km",
        completed: false,
        date: null
    },
    {
        id: 2,
        name: "Yoga 30min",
        completed: false,
        date: null
    },
    {
        id: 3,
        name: "Pesas 45min",
        completed: false,
        date: null
    },
    {
        id: 4,
        name: "Nadar 20min",
        completed: false,
        date: null
    },
    {
        id: 5,
        name: "Estiramientos 15min",
        completed: false,
        date: null
    }
];
// Recomendaciones predefinidas
const predefinedRecommendations = [
    "Aumenta tu ingesta de agua diaria",
    "Intenta una nueva rutina de cardio esta semana",
    "Agrega m\xe1s prote\xednas a tu dieta",
    "Realiza estiramientos despu\xe9s de cada entrenamiento",
    "Descansa adecuadamente entre sesiones de entrenamiento"
];
function initializeLocalStorage() {
    if (!localStorage.getItem("users")) localStorage.setItem("users", JSON.stringify(predefinedUsers));
    if (!localStorage.getItem("activities")) localStorage.setItem("activities", JSON.stringify(predefinedActivities));
    if (!localStorage.getItem("recommendations")) localStorage.setItem("recommendations", JSON.stringify(predefinedRecommendations));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"edo4x":[function(require,module,exports) {
// Actualizar dashboard
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateDashboard", ()=>updateDashboard);
function updateDashboard() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        document.getElementById("userName").textContent = currentUser.fullName;
        document.getElementById("userEmail").textContent = currentUser.email;
        updateActivityList();
        updateTodoList();
        updateRecommendations();
        updateWeeklyStats();
    }
}
// Funciones para actualizar las secciones del dashboard
function updateActivityList() {
    const activityList = document.getElementById("activityList");
    activityList.innerHTML = "";
    const activities = JSON.parse(localStorage.getItem("activities"));
    activities.forEach((activity)=>{
        if (activity.completed) {
            const li = document.createElement("li");
            li.textContent = `${activity.name} - Completada el ${new Date(activity.date).toLocaleDateString()}`;
            activityList.appendChild(li);
        }
    });
}
function updateTodoList() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    const activities = JSON.parse(localStorage.getItem("activities"));
    const incompletedActivities = activities.filter((activity)=>!activity.completed);
    if (incompletedActivities.length === 0) showCongratulationsMessage();
    else incompletedActivities.forEach((activity)=>{
        const li = document.createElement("li");
        li.textContent = activity.name;
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Completar";
        completeBtn.onclick = ()=>completeActivity(activity.id);
        li.appendChild(completeBtn);
        todoList.appendChild(li);
    });
}
function completeActivity(activityId) {
    const activities = JSON.parse(localStorage.getItem("activities"));
    const updatedActivities = activities.map((activity)=>activity.id === activityId ? {
            ...activity,
            completed: true,
            date: new Date().toISOString()
        } : activity);
    localStorage.setItem("activities", JSON.stringify(updatedActivities));
    updateActivityList();
    updateTodoList();
    updateWeeklyStats();
}
function updateRecommendations() {
    const recommendationList = document.getElementById("recommendationList");
    recommendationList.innerHTML = "";
    const recommendations = JSON.parse(localStorage.getItem("recommendations"));
    recommendations.forEach((recommendation)=>{
        const li = document.createElement("li");
        li.textContent = recommendation;
        recommendationList.appendChild(li);
    });
}
function updateWeeklyStats() {
    const weeklyStats = document.getElementById("weeklyStats");
    weeklyStats.innerHTML = "";
    const activities = JSON.parse(localStorage.getItem("activities"));
    const today = new Date();
    const oneWeekAgo = new Date(today.getTime() - 604800000);
    for(let i = 6; i >= 0; i--){
        const date = new Date(today.getTime() - i * 86400000);
        const completedToday = activities.filter((activity)=>activity.completed && new Date(activity.date).toDateString() === date.toDateString()).length;
        const li = document.createElement("li");
        li.textContent = `${date.toLocaleDateString()}: ${completedToday} actividades completadas`;
        weeklyStats.appendChild(li);
    }
}
function showCongratulationsMessage() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "<p>\xa1Felicidades! Has completado todas tus actividades.</p>";
    const loadNewActivitiesBtn = document.createElement("button");
    loadNewActivitiesBtn.textContent = "Cargar nuevas actividades";
    loadNewActivitiesBtn.onclick = loadNewActivities;
    todoList.appendChild(loadNewActivitiesBtn);
}
function loadNewActivities() {
    const activities = JSON.parse(localStorage.getItem("activities"));
    const newActivities = activities.map((activity)=>({
            ...activity,
            completed: false,
            date: null
        }));
    localStorage.setItem("activities", JSON.stringify(newActivities));
    updateTodoList();
    updateActivityList();
    updateWeeklyStats();
}
// New function to add an activity
function addActivity() {
    const activityName = prompt("Ingrese el nombre de la nueva actividad:");
    if (activityName) {
        const activities = JSON.parse(localStorage.getItem("activities"));
        const newActivity = {
            id: activities.length + 1,
            name: activityName,
            completed: false,
            date: null
        };
        activities.push(newActivity);
        localStorage.setItem("activities", JSON.stringify(activities));
        updateTodoList();
    }
}
// New function to clear activity history
function clearActivityHistory() {
    if (confirm("\xbfEst\xe1s seguro de que quieres eliminar todo el historial de actividades?")) {
        const activities = JSON.parse(localStorage.getItem("activities"));
        const updatedActivities = activities.filter((activity)=>!activity.completed);
        localStorage.setItem("activities", JSON.stringify(updatedActivities));
        updateActivityList();
        updateWeeklyStats();
    }
}
// Modified updateActivityList function to include delete buttons
function updateActivityList() {
    const activityList = document.getElementById("activityList");
    const fullActivityList = document.getElementById("fullActivityList");
    activityList.innerHTML = "";
    fullActivityList.innerHTML = "";
    const activities = JSON.parse(localStorage.getItem("activities"));
    activities.forEach((activity)=>{
        if (activity.completed) {
            const li = document.createElement("li");
            li.textContent = `${activity.name} - Completada el ${new Date(activity.date).toLocaleDateString()}`;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Eliminar";
            deleteBtn.onclick = ()=>deleteActivity(activity.id);
            li.appendChild(deleteBtn);
            activityList.appendChild(li);
            fullActivityList.appendChild(li.cloneNode(true));
        }
    });
}
// New function to delete a single activity
function deleteActivity(activityId) {
    if (confirm("\xbfEst\xe1s seguro de que quieres eliminar esta actividad?")) {
        const activities = JSON.parse(localStorage.getItem("activities"));
        const updatedActivities = activities.filter((activity)=>activity.id !== activityId);
        localStorage.setItem("activities", JSON.stringify(updatedActivities));
        updateActivityList();
        updateWeeklyStats();
    }
}
// Modified updateDashboard function
function updateDashboard() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        document.getElementById("userName").textContent = currentUser.fullName;
        document.getElementById("userEmail").textContent = currentUser.email;
        updateActivityList();
        updateTodoList();
        updateRecommendations();
        updateWeeklyStats();
        // Add event listeners for new buttons
        document.getElementById("addActivityBtn").addEventListener("click", addActivity);
        document.getElementById("clearHistoryBtn").addEventListener("click", clearActivityHistory);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9LWDa":[function(require,module,exports) {
// Elementos del DOM
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Ocultar/mostrar elementos de navegación basado en el estado de la sesión
parcelHelpers.export(exports, "updateNavVisibility", ()=>updateNavVisibility);
// Función para cambiar entre vistas
parcelHelpers.export(exports, "showView", ()=>showView);
const views = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll(".navbar-menu a");
const showRegisterBtn = document.getElementById("showRegister");
const showLoginBtn = document.getElementById("showLogin");
const navbarMenu = document.getElementById("navbarMenu");
// Navegación
navLinks.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        const viewId = e.target.getAttribute("href").slice(1);
        showView(viewId);
    });
});
// Mostrar formulario de registro
showRegisterBtn.addEventListener("click", ()=>showView("register"));
// Mostrar formulario de login
showLoginBtn.addEventListener("click", ()=>showView("login"));
function updateNavVisibility() {
    const isLoggedIn = localStorage.getItem("currentUser");
    navbarMenu.style.display = isLoggedIn ? "block" : "none";
}
function showView(viewId) {
    views.forEach((view)=>view.style.display = "none");
    document.getElementById(viewId).style.display = "block";
    navLinks.forEach((link)=>link.classList.remove("active"));
    document.querySelector(`a[href="#${viewId}"]`)?.classList.add("active");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ygYe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ManageSession", ()=>ManageSession);
// Validación de contraseña
parcelHelpers.export(exports, "validatePassword", ()=>validatePassword);
var _navegationSettings = require("../Navegation/Navegation_Settings");
var _dashboardSettings = require("../Dashboard/Dashboard_Settings");
// Elementos del DOM
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const logoutBtn = document.getElementById("logoutButton");
function ManageSession() {
    // Manejo de registro
    registerForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const fullName = e.target.elements[0].value;
        const email = e.target.elements[1].value;
        const password = e.target.elements[2].value;
        const confirmPassword = e.target.elements[3].value;
        if (password !== confirmPassword) {
            alert("Las contrase\xf1as no coinciden");
            return;
        }
        if (!validatePassword(password)) {
            alert("La contrase\xf1a debe tener al menos 8 caracteres, incluir may\xfasculas, min\xfasculas, n\xfameros y caracteres especiales.");
            return;
        }
        const users = JSON.parse(localStorage.getItem("users"));
        const newUser = {
            username: email,
            password: password,
            email: email,
            fullName: fullName
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        (0, _navegationSettings.showView)("home");
        (0, _dashboardSettings.updateDashboard)();
        (0, _navegationSettings.updateNavVisibility)();
    });
    // Manejo de Logout
    logoutBtn.addEventListener("click", ()=>{
        localStorage.removeItem("currentUser");
        (0, _navegationSettings.showView)("login");
        (0, _navegationSettings.updateNavVisibility)();
    });
    // Manejo de Login
    loginForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const username = e.target.elements[0].value;
        const password = e.target.elements[1].value;
        const users = JSON.parse(localStorage.getItem("users"));
        const user = users.find((u)=>u.username === username && u.password === password);
        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            (0, _navegationSettings.showView)("home");
            (0, _dashboardSettings.updateDashboard)();
            (0, _navegationSettings.updateNavVisibility)();
        } else alert("Usuario o contrase\xf1a incorrectos");
    });
}
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}

},{"../Navegation/Navegation_Settings":"9LWDa","../Dashboard/Dashboard_Settings":"edo4x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["j2YDk","1SICI"], "1SICI", "parcelRequireeeed")

//# sourceMappingURL=index.18dbc454.js.map
