import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { mkdirSync } from 'node:fs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parentPort, threadId } from 'node:worker_threads';
import { getRequestHeader, splitCookiesString, setResponseStatus, setResponseHeader, send, getRequestHeaders, defineEventHandler, handleCacheHeaders, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatus, setResponseHeaders, createError, getRouterParam, readBody, getQuery as getQuery$1, getResponseStatusText } from 'file://D:/projects/razam-nuxt/node_modules/h3/dist/index.mjs';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file://D:/projects/razam-nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file://D:/projects/razam-nuxt/node_modules/devalue/index.js';
import destr from 'file://D:/projects/razam-nuxt/node_modules/destr/dist/index.mjs';
import { renderToString } from 'file://D:/projects/razam-nuxt/node_modules/vue/server-renderer/index.mjs';
import { propsToString, renderSSRHead } from 'file://D:/projects/razam-nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import { createServerHead as createServerHead$1, CapoPlugin } from 'file://D:/projects/razam-nuxt/node_modules/unhead/dist/index.mjs';
import { klona } from 'file://D:/projects/razam-nuxt/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://D:/projects/razam-nuxt/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file://D:/projects/razam-nuxt/node_modules/scule/dist/index.mjs';
import { createHooks } from 'file://D:/projects/razam-nuxt/node_modules/hookable/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://D:/projects/razam-nuxt/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file://D:/projects/razam-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { consola } from 'file://D:/projects/razam-nuxt/node_modules/consola/dist/index.mjs';
import { getContext } from 'file://D:/projects/razam-nuxt/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://D:/projects/razam-nuxt/node_modules/errx/dist/index.js';
import { isVNode, unref, version } from 'file://D:/projects/razam-nuxt/node_modules/vue/index.mjs';
import { hash } from 'file://D:/projects/razam-nuxt/node_modules/ohash/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/projects/razam-nuxt/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/projects/razam-nuxt/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/projects/razam-nuxt/node_modules/radix3/dist/index.mjs';
import { defineHeadPlugin } from 'file://D:/projects/razam-nuxt/node_modules/@unhead/shared/dist/index.mjs';

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error, isDev) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.unhandled || error.fatal) ? [] : (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.unhandled ? "internal server error" : error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, (error.message || error.toString() || "internal server error") + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _0T8HzMk5dR = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "D:/projects/razam-nuxt";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _N9O0Rvw0iR = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola.wrapConsole();
}

const plugins = [
  _0T8HzMk5dR,
_N9O0Rvw0iR
];

const _lazy_TtIm3z = () => Promise.resolve().then(function () { return blog$4; });
const _lazy_xsPjdZ = () => Promise.resolve().then(function () { return projects$1; });
const _lazy_habChL = () => Promise.resolve().then(function () { return search$1; });
const _lazy_KNTqt7 = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/blog', handler: _lazy_TtIm3z, lazy: true, middleware: false, method: undefined },
  { route: '/api/projects', handler: _lazy_xsPjdZ, lazy: true, middleware: false, method: undefined },
  { route: '/api/search', handler: _lazy_habChL, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_KNTqt7, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_KNTqt7, lazy: true, middleware: false, method: undefined }
];

const serverAssets = [{"baseName":"server","dir":"D:/projects/razam-nuxt/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:/projects/razam-nuxt"}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:/projects/razam-nuxt/server"}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:/projects/razam-nuxt/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:/projects/razam-nuxt/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"D:/projects/razam-nuxt/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[nitro] [cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "i18n": {
      "baseUrl": "http://localhost:3000",
      "defaultLocale": "ru",
      "defaultDirection": "ltr",
      "strategy": "prefix_except_default",
      "lazy": false,
      "rootRedirect": "",
      "routesNameSeparator": "___",
      "defaultLocaleRouteNameSuffix": "default",
      "skipSettingLocaleOnNavigate": false,
      "differentDomains": false,
      "trailingSlash": false,
      "locales": [
        {
          "code": "en",
          "iso": "en-US",
          "name": "En"
        },
        {
          "code": "fr",
          "iso": "fr-FR",
          "name": "Fr"
        },
        {
          "code": "ru",
          "iso": "ru-RU",
          "name": "Ru"
        }
      ],
      "detectBrowserLanguage": {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": "",
        "cookieKey": "i18n_redirected",
        "cookieSecure": false,
        "fallbackLocale": "",
        "redirectOn": "root",
        "useCookie": true
      },
      "experimental": {
        "localeDetector": "",
        "switchLocalePathLinkSSR": false,
        "autoImportTranslationFunctions": false,
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "generatedLocaleFilePathFormat": "absolute",
        "alternateLinkCanonicalQueries": false
      },
      "multiDomainLocales": false
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const r=Object.create(null),i=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),o=new Proxy(r,{get(e,s){return i()[s]??r[s]},has(e,s){const E=i();return s in E||s in r},set(e,s,E){const B=i(true);return B[s]=E,true},deleteProperty(e,s){if(!s)return  false;const E=i(true);return delete E[s],true},ownKeys(){const e=i(true);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",f=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:true}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:true}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:false}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:false}],["VERCEL","VERCEL_ENV",{ci:false}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:false}],["CODESANDBOX","CODESANDBOX_HOST",{ci:false}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:true}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"],["DENO-DEPLOY","DENO_DEPLOYMENT_ID"],["FIREBASE_APP_HOSTING","FIREBASE_APP_HOSTING",{ci:true}]];function b(){if(globalThis.process?.env)for(const e of f){const s=e[1]||e[0];if(globalThis.process?.env[s])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:false}:{name:"",ci:false}}const l=b(),p=l.name;function n(e){return e?e!=="false":false}const I=globalThis.process?.platform||"",T=n(o.CI)||l.ci!==false,a=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(o.DEBUG);const R=t==="test"||n(o.TEST);n(o.MINIMAL)||T||R||!a;const A=/^win/i.test(I);!n(o.NO_COLOR)&&(n(o.FORCE_COLOR)||(a||A)&&o.TERM!=="dumb"||T);const C=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(C?.split(".")[0])||null;const y=globalThis.process||Object.create(null),_={versions:{}};new Proxy(y,{get(e,s){if(s==="env")return o;if(s in e)return e[s];if(s in _)return _[s]}});const c=globalThis.process?.release?.name==="node",O=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,L=!!globalThis.fastly,S=!!globalThis.Netlify,u=!!globalThis.EdgeRuntime,N=globalThis.navigator?.userAgent==="Cloudflare-Workers",F=[[S,"netlify"],[u,"edge-light"],[N,"workerd"],[L,"fastly"],[D,"deno"],[O,"bun"],[c,"node"]];function G(){const e=F.find(s=>s[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (p === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (A) {
    return join(String.raw`\\.\pipe\nitro`, socketName);
  }
  const socketDir = join(tmpdir(), "nitro");
  mkdirSync(socketDir, { recursive: true });
  return join(socketDir, socketName);
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort?.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address?.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort?.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort?.postMessage({ event: "exit" });
  }
});

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + messages.statusCode + " - " + messages.statusMessage + " | " + messages.appName + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}h1,p,pre{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"><div class="fixed left-0 right-0 spotlight"></div><h1 class="font-medium mb-6 sm:text-8xl text-6xl">` + messages.statusCode + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + messages.description + '</p><div class="bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><pre class="font-light leading-tight p-8 text-xl z-10">' + messages.stack + "</pre></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const blog$5 = [
  {
    previewImg: "/images/blog/previews/lights.jpg",
    category: "blog.articles.categories.architecture",
    name: "blog.articles.lights.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "lights",
    tags: [
      "blog.articles.tags.interiorLights",
      "blog.articles.tags.lightDesign",
      "blog.articles.tags.homeAtmosphere",
      "blog.articles.tags.lightZonation",
      "blog.articles.tags.lightStyles",
      "blog.articles.tags.lightIdeas",
      "blog.articles.tags.lightTrands"
    ]
  },
  {
    previewImg: "/images/blog/previews/ideas.jpg",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.ideas.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "ideas"
  },
  {
    previewImg: "/images/blog/previews/trends.jpg",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.trends.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "trends"
  },
  {
    previewImg: "/images/blog/previews/materials.jpg",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.materials.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "materials"
  },
  {
    previewImg: "/images/blog/previews/bedroom.jpg",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.bedroom.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "bedroom"
  },
  {
    previewImg: "/images/blog/previews/minimalism.jpg",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.minimalism.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "minimalism"
  }
];

const blog$3 = defineEventHandler((event) => {
  const query = getQuery$1(event);
  if (query.slug) {
    const article = blog$5.find((article2) => article2.slug === query.slug);
    return article || { error: "Article not found" };
  }
  return blog$5;
});

const blog$4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: blog$3
});

const projects$2 = [
  {
    name: "Chambre d'enfant",
    year: 2022,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/chambre-enfant.jpg"
  },
  {
    name: "Elemental harmony",
    year: 2020,
    category: "portfolio.tabs.categories.architecture",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/chambre-enfant.jpg"
  },
  {
    name: "Modern vista",
    year: 2021,
    category: "portfolio.tabs.categories.commercial",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/chambre-enfant.jpg"
  },
  {
    name: "Natural essence",
    year: 2023,
    category: "portfolio.tabs.categories.landscapeDesign",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/chambre-enfant.jpg"
  },
  {
    name: "Serene lines",
    year: 2022,
    category: "portfolio.tabs.categories.eliteInterios",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/chambre-enfant.jpg"
  },
  {
    name: "Urban grace",
    slug: "urban-grace",
    year: 2024,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/urban-grace.jpg",
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "portfolio.projects.urbanGrace.workingTime",
    client: "portfolio.projects.urbanGrace.client",
    dislocation: "portfolio.projects.urbanGrace.dislocation",
    desc: "portfolio.projects.urbanGrace.desc",
    cost: "12.500",
    images: [
      {
        name: "portfolio.tabs.rooms.kitchen",
        photo: "/images/projects/urban-grace/kitchen.jpg"
      },
      {
        name: "portfolio.tabs.rooms.bedroom",
        photo: "/images/projects/urban-grace/bedroom.jpg"
      },
      {
        name: "portfolio.tabs.rooms.corridor",
        photo: "/images/projects/urban-grace/corridor.jpg"
      },
      {
        name: "portfolio.tabs.rooms.lounge",
        photo: "/images/projects/urban-grace/lounge2.jpg"
      },
      {
        name: "portfolio.tabs.rooms.lounge",
        photo: "/images/projects/urban-grace/lounge.jpg"
      }
    ]
  }
];

const projects = defineEventHandler((event) => {
  const query = getQuery$1(event);
  if (query.slug) {
    const project = projects$2.find((project2) => project2.slug === query.slug);
    return project || { error: "Projects not found" };
  }
  return projects$2;
});

const projects$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: projects
});

var meta$2 = {
	title: "Razam | Главная",
	description: "Экспертный дизайн и ремонт на Лазурном Берегу."
};
var menu$2 = {
	home: "Главная",
	about: "О нас",
	services: "Услуги",
	portfolio: "Портфолио",
	news: "Новости",
	contact: "Контакты",
	blog: "Блог",
	article: "Статья"
};
var common$2 = {
	hide: "Скрыть",
	readMore: "Читать больше"
};
var home$2 = {
	headline: "Дизайн и ремонт на Лазурном Берегу",
	desc: "Экспертный дизайн и ремонт на Лазурном Берегу",
	fullDesc1: "Мы специализируемся на создании уникальных и стильных интерьеров для домов, квартир и коммерческих помещений в Ницце, Каннах и Антибе. Наша команда экспертов разрабатывает проекты, которые сочетают эстетическую изысканность с функциональностью, отражая атмосферу Лазурного Берега и индивидуальность клиентов.",
	fullDesc2: "Предлагаем услуги под ключ — от концепции дизайна до завершения ремонта, гарантируя комфорт и внимание к каждой детали. Мы учитываем все аспекты, включая архитектурные особенности объекта, пожелания клиентов и современные тенденции в дизайне.",
	readMore: "Наш подход включает использование инновационных технологий и тщательное планирование каждого этапа. Мы сотрудничаем с проверенными подрядчиками и поставщиками, чтобы обеспечить высокое качество исполнения и надежность.",
	readMore2: "Независимо от масштаба проекта, будь то уютная квартира, просторный дом или коммерческое помещение, мы стремимся создать пространство, которое станет отражением вашего стиля, подчеркнёт индивидуальность и будет радовать вас долгие годы.",
	readMore3: "Свяжитесь с нами, чтобы начать ваш проект и преобразить ваше пространство.",
	valuesH2: "Наши<br />ценности",
	valuesP1: "Открытость и<br />честность",
	valuesP2: "Точность в<br />сроках",
	valuesP3: "Современные<br />технологии",
	valuesP4: "Практичность и<br />удобство",
	valuesP5: "Индивидуальные<br />решения",
	valuesP6: "Ответственность<br />за результат",
	stats1: "Реализованных проектов",
	stats2: "Клиентов рекомендуют нас",
	stats3: "Кв м² спроектированных интерьеров",
	stats4: "Создать идеальное пространство",
	stats5: "Соблюдение сроков",
	statsGoal: "цель",
	service1: "Дизайн интерьера",
	service2: "Дизайн домов и квартир",
	service3: "Дизайн коммерческих помещений",
	service4: "Ремонт домов и квартир",
	service5: "Ремонт коммерческих помещений",
	servicesH2: "Наши услуги",
	projectsH2: "Наши проекты",
	project1: "Элегантный частный дом, где минимализм сочетается с уютом. Просторные комнаты и панорамные окна создают комфорт на Лазурном Берегу.",
	project2: "Роскошные апартаменты с видом на море. Интерьер продуман до мелочей, объединяя эстетику и функциональность.",
	project3: "Современный дизайн для бренда. Светлый интерьер с акцентом на удобство и стиль, идеально для деловой среды.",
	project4: "Элегантный частный дом, где минимализм сочетается с уютом. Просторные комнаты и панорамные окна создают комфорт на Лазурном Берегу.",
	reviewsH2P1: "Отзывы наших",
	reviewsH2P2: "клиентов",
	reviews: {
		review1Title: "Безупречный стиль и внимание к каждому нюансу",
		review1Text: "От первого обсуждения до завершения проекта команда проявляла профессионализм и чуткость к нашим пожеланиям...",
		review1Name: "Жюльен, Ницца",
		review2Title: "Действительно качественный подход",
		review2Text: "От первого обсуждения до завершения проекта команда проявляла профессионализм и чуткость к нашим пожеланиям. Нам понравилось, как они воплотили идеи, делая нашу квартиру не только стильной, но и невероятно удобной для жизни. Их внимание к каждой детали и умение добавить уникальные элементы сделали наш интерьер по-настоящему особенным. Искренне рекомендую для тех, кто ищет качественный и креативный подход.",
		review2Name: "Анна, Канны"
	},
	offer: {
		h2P1: "Готовы создать",
		h2P2: "ваш идеальный",
		h2P3: "проект",
		p: "Свяжитесь с нами или оставьте заявку, и мы воплотим ваши идеи в реальность."
	},
	process: {
		h2: "Наш процесс работы",
		title1: "Консультация и обсуждение",
		text1: "Мы начинаем с изучения ваших идей и пожеланий. На встрече мы обсуждаем детали проекта, стиль, бюджет и сроки, чтобы понять ваши ожидания.",
		title2: "Разработка концепции",
		text2: "Создаём эскизы и визуализации, которые отражают уникальность вашего будущего пространства. Всё согласовывается, чтобы результат точно соответствовал вашим запросам.",
		title3: "Подготовка проекта",
		text3: "Готовим полный пакет документации: чертежи, планировки, подбор материалов и мебели. Всё, что нужно для реализации.",
		title4: "Реализация проекта",
		text4: "Наши специалисты берут на себя контроль всех этапов: от закупки материалов до выполнения работ. Мы следим за качеством и соблюдаем сроки.",
		title5: "Завершение и сдача объекта",
		text5: "Мы проверяем каждый элемент, чтобы всё соответствовало проекту. Вы получаете готовое пространство, полностью готовое к жизни или работе."
	},
	FAQ: {
		q1: "Как долго длится разработка дизайн-проекта?",
		a1: "Разработка дизайн-проекта обычно занимает от 2 до 4 недель, в зависимости от сложности и масштаба объекта. Мы стремимся оптимизировать процесс, чтобы учесть все ваши пожелания и создать качественный результат в разумные сроки. Важно, чтобы на каждом этапе вы были уверены в том, что проект движется в правильном направлении.",
		q2: "Какие материалы используются для ремонта?",
		a2: "Мы используем только проверенные и качественные материалы, которые подбираются индивидуально под проект. Наши решения экологичны, долговечны и соответствуют современным стандартам безопасности.",
		q3: "Можно ли заказать только дизайн без ремонта?",
		a3: "Да, вы можете заказать только разработку дизайн-проекта. Мы предоставим всю необходимую документацию и рекомендации для его реализации вашими силами или другими подрядчиками.",
		q4: "Сколько стоит проект под ключ?",
		a4: "Стоимость проекта зависит от площади, сложности работ и используемых материалов. Мы предлагаем прозрачное ценообразование и индивидуальный расчёт для каждого клиента.",
		q5: "Как вы контролируете качество на всех этапах?",
		a5: "Мы контролируем процесс на каждом этапе: от подбора материалов до сдачи объекта. Регулярные проверки и чёткая координация работ гарантируют высокий уровень результата."
	},
	news: {
		H2: "Последние новости",
		category1: "Тренды дизайна",
		title1: "Реализованный проект: офис с видом на море",
		by1: "Admin",
		date1: "2 Ноября 2024",
		category2: "Интерьер и освещение",
		title2: "Как освещение меняет атмосферу интерьера",
		by2: "Admin",
		date2: "2 Ноября 2024",
		category3: "Ремонт и декор",
		title3: "Идеи для стильного ремонта",
		by3: "Admin",
		date3: "2 Ноября 2024",
		category4: "Тренды дизайна",
		title4: "Тренды в дизайне: что актуально",
		by4: "Admin",
		date4: "2 Ноября 2024"
	}
};
var footer$2 = {
	linksH: "Быстрые ссылки",
	documentsH: "Документы",
	policy: "Политика конфиденциальности",
	terms: "Условия и положения",
	contact: "Связаться",
	tel: "Телефон",
	location: "Место расположения",
	france: "Франция"
};
var about$2 = {
	h1P1: "Создаём стильное",
	h1P2: "пространство для вас",
	h4: "О нас",
	design: {
		h2: "Дизайн и ремонт интерьеров на Лазурном Берегу",
		p: "Мы создаём уникальные и функциональные пространства в Ницце, Каннах, Антибе и других городах региона. Наша команда разрабатывает проекты, которые отражают ваш стиль и делают интерьер комфортным. Предлагаем полный спектр услуг — от концепции дизайна до ремонта под ключ, уделяя внимание каждой детали и строго соблюдая сроки."
	},
	why: {
		h2: "Почему выбирают нас?",
		values: {
			question1: "Индивидуальный подход",
			answer1: "Каждый наш проект разрабатывается с учётом вашего стиля, потребностей и пожеланий. Мы стремимся сделать пространство уникальным, отражающим ваш характер, и полностью функциональным для жизни или бизнеса.",
			question2: "Локальный опыт",
			answer2: "Мы создаём проекты, идеально подходящие для жизни и работы на Лазурном Берегу. Знание местных особенностей Ниццы, Канн и Антиба позволяет нам учитывать все детали и воплощать лучшие идеи.",
			question3: "Соблюдение сроков",
			answer3: "Мы ценим ваше время и всегда сдаём проекты точно по графику. Чёткая организация процесса и профессионализм команды исключают любые задержки, сохраняя высокий уровень качества на всех этапах.",
			question4: "Прозрачность процесса",
			answer4: "Мы делаем каждый шаг проекта понятным и доступным для вас. Постоянная обратная связь, отчёты о ходе работ и открытость помогают вам быть уверенными в результате на всех этапах."
		}
	},
	rates: {
		stat1_value: "83+",
		stat1_text: "Реализованных проектов",
		stat2_value: "95%",
		stat2_text: "Клиентов рекомендуют нас",
		stat3_value: "12,500",
		stat3_text: "Кв м² спроектированных интерьеров",
		stat4_value: "1 цель",
		stat4_text: "Создать идеальное пространство",
		stat5_value: "100%",
		stat5_text: "Соблюдение сроков"
	},
	way: {
		title: "Наш подход к работе",
		step1_title: "Понимание клиента",
		step1_text: "Каждый проект начинается с диалога. Мы тщательно изучаем ваши пожелания, стиль жизни или специфику бизнеса, чтобы создать пространство, которое идеально вам подойдёт.",
		step2_title: "Продуманные решения",
		step2_text: "Мы объединяем эстетику и функциональность, чтобы сделать интерьер удобным и визуально привлекательным. Наши проекты адаптированы под вас и атмосферу Лазурного Берега.",
		step3_title: "Команда экспертов",
		step3_text: "В нашем составе архитекторы, дизайнеры и инженеры с опытом работы в Ницце, Каннах и Антибе. Мы гарантируем профессионализм на каждом этапе.",
		step4_title: "Только результат",
		step4_text: "Никаких лишних слов или обещаний. Мы сосредоточены на том, чтобы превратить ваши идеи в реальность, соблюдая сроки и предоставляя высокий уровень качества.",
		step5_title: "Ваш комфорт — наша цель",
		step5_text: "Независимо от масштаба работы, будь то небольшая квартира или крупный коммерческий проект, мы стремимся создать пространство, которое вдохновляет."
	},
	team: {
		title: "Наша команда",
		member1_name: "Жюльен Моро",
		member1_role: "Главный архитектор",
		member2_name: "Камиль Лефевр",
		member2_role: "Дизайнер интерьеров",
		member3_name: "Эмиль Дюпон",
		member3_role: "Руководитель проектов",
		member4_name: "Софи Ларош",
		member4_role: "Менеджер по работе с клиентами",
		member5_name: "Тома Бертран",
		member5_role: "Инженер-конструктор",
		member6_name: "Клара Жиро",
		member6_role: "Специалист по подбору материалов"
	}
};
var contactPlate$2 = {
	h1: "Дизайн&nbsp;и&nbsp;ремонт<br />",
	span1: "созданные",
	span2: "для вас",
	p: "Свяжитесь с нами, и мы создадим для вас уникальное пространство, отражающее ваш стиль и потребности. Оставьте заявку или позвоните, чтобы обсудить детали."
};
var services$2 = {
	main: {
		design: "Дизайн, стиль <br />и комфорт вместе",
		title: "Создайте<br />уникальный<br /><span class='slash' style='color: #E8E3DF'>/</span> интерьер",
		description: "Мы — команда экспертов в области дизайна и ремонта, работающая на Лазурном Берегу, включая Ниццу, Канны и Антиб. Наша миссия — создавать стильные, функциональные и уникальные пространства, которые отражают индивидуальность наших клиентов. Мы предлагаем полный спектр услуг: от разработки концепции и создания дизайн-проекта до ремонта под ключ. Каждый проект разрабатывается с учётом ваших предпочтений, потребностей и особенностей объекта.",
		readMoreText: "Наш опыт работы в Ницце, Каннах и Антибе позволяет нам учитывать специфику местной архитектуры и создавать интерьеры, идеально вписывающиеся в атмосферу Лазурного Берега. Используя современные технологии, качественные материалы и проверенные методы, мы воплощаем ваши идеи в жизнь, создавая комфортные и эстетически привлекательные пространства. Независимо от масштаба проекта — будь то небольшая квартира или роскошная вилла, мы стремимся превзойти ожидания наших клиентов. Свяжитесь с нами, чтобы начать ваш проект уже сегодня и сделать ваш интерьер отражением вашего стиля и характера.",
		razamText: "Создаём проекты для вашего дома"
	}
};
var portfolio$2 = {
	main: {
		titleFirst: "Наши <br />проекты",
		titleSecond: "ваше <br />вдохновение",
		desc: "Работаем с 2010",
		category1: "Архитектура",
		category2: "Интерьеры",
		category3: "Ремонт под ключ"
	},
	tabs: {
		categories: {
			all: "Все проекты",
			livingRooms: "Жилые помещения",
			architecture: "Архитектура",
			commercial: "Коммерческие объекты",
			landscapeDesign: "Ландшафтный дизайн",
			eliteInterios: "Элитные интерьеры"
		},
		types: {
			designAndRepair: "Дизайн и ремонт под ключ"
		},
		rooms: {
			kitchen: "Кухня",
			bedroom: "Спальня",
			corridor: "Коридор",
			lounge: "Гостиная"
		}
	},
	projects: {
		common: {
			square: "Общая площадь",
			livingArea: "Жилая площадь",
			workingTime: "Время работ",
			cost: "Общая стоимость",
			client: "Клиент",
			location: "Местоположение",
			year: "Год"
		},
		urbanGrace: {
			workingTime: "74 дня",
			client: "Луи Шантье",
			dislocation: "Канны, Франция",
			desc: "Проект, который сочетает уют и стиль. Тёплые оттенки, мягкие текстуры и гармоничные детали создают пространство, где хочется расслабиться и наслаждаться каждым моментом.",
			componentData: {
				lounge: {
					h1: "Гостиная комната",
					h2: "сочетание уюта, стиля и современности",
					p: "Диван в центре гостиной привлекает внимание своим минималистичным дизайном и мягкими линиями. Использование натуральных тканей и приглушённых оттенков создаёт атмосферу комфорта. Его модульная конструкция позволяет легко адаптироваться под любые потребности."
				},
				bedroom: {
					h1: "Спальня, где ",
					h2: "начинается гармония дня",
					p: "Спальня выполнена в спокойных зелёных и нейтральных тонах, создавая атмосферу уюта и релаксации. Детали, такие как мягкое изголовье кровати и акцентная скамья, добавляют комнате глубину и изысканность. Утренний свет мягко проникает сквозь плотные шторы, создавая гармоничное начало дня."
				},
				lights: {
					h1: "Свет,",
					h2: "который задает настроение",
					p: "Интерьер освещён разнообразными источниками света, которые подчёркивают его детали. Настенные светильники с мягким свечением добавляют уюта, а подвесные лампы создают акценты на ключевых зонах. Современные световые линии идеально вписываются в общий минималистичный стиль."
				}
			}
		}
	}
};
var blog$2 = {
	articles: {
		categories: {
			architecture: "Архитектура",
			interiorDesign: "Дизайн интерьера",
			construction: "Строительство",
			renovation: "Ремонт",
			landscapeDesign: "Ландшафтный дизайн"
		},
		tags: {
			interiorLights: "Освещение в интерьере",
			lightDesign: "Световой дизайн",
			homeAtmosphere: "Атмосфера дома",
			lightZonation: "Зонирование светом",
			lightStyles: "Типы освещения",
			lightIdeas: "Идеи для освещения",
			lightTrands: "Тренды освещения"
		},
		lights: {
			name: "Как освещение меняет атмосферу интерьера"
		},
		ideas: {
			name: "Идеи для стильного ремонта"
		},
		trends: {
			name: "Тренды в дизайне: что актуально"
		},
		materials: {
			name: "Современные материалы в дизайне интерьера"
		},
		bedroom: {
			name: "Уютная спальня: секреты идеального дизайна"
		},
		minimalism: {
			name: "Минимализм в дизайне: ключ к гармонии"
		}
	}
};
var contact$2 = {
	contactUs: "Свяжитесь с нами",
	form: {
		description: "Мы всегда готовы обсудить ваш проект и ответить на любые вопросы. Независимо от того, хотите ли вы обновить интерьер, разработать дизайн с нуля или узнать больше о наших услугах, свяжитесь с нами удобным для вас способом.",
		title: "Оставьте заявку",
		nameLabel: "Ваше имя",
		emailLabel: "Email",
		phoneLabel: "Номер телефона",
		messageLabel: "Сообщение",
		required: "*",
		submitButton: "Отправить"
	},
	info: {
		titleFirst: "Контактная",
		titleSecond: "информация",
		locationLabel: "Место расположения",
		location: "305 Av. Georges Pompidou, 06220<br />Vallauris, Франция"
	}
};
const ru = {
	meta: meta$2,
	menu: menu$2,
	common: common$2,
	home: home$2,
	footer: footer$2,
	about: about$2,
	contactPlate: contactPlate$2,
	services: services$2,
	portfolio: portfolio$2,
	blog: blog$2,
	contact: contact$2
};

var meta$1 = {
	title: "Razam | Accueil",
	description: "Expert design and renovation on the French Riviera."
};
var menu$1 = {
	home: "Home",
	about: "About Us",
	services: "Services",
	portfolio: "Portfolio",
	news: "News",
	contact: "Contact",
	blog: "Blog"
};
var common$1 = {
	hide: "Hide",
	readMore: "Read More"
};
var home$1 = {
	headline: "Design and Renovation on the French Riviera",
	desc: "Expert design and renovation on the French Riviera",
	fullDesc1: "We specialize in creating unique and stylish interiors for homes, apartments, and commercial spaces in Nice, Cannes, and Antibes. Our team of experts develops projects that combine aesthetic elegance with functionality, reflecting the atmosphere of the French Riviera and the individuality of our clients.",
	fullDesc2: "We offer turnkey services – from the design concept to the completion of the renovation, ensuring comfort and attention to every detail. We consider all aspects including the architectural features of the property, client wishes, and modern design trends.",
	readMore: "Our approach includes the use of innovative technologies and careful planning at every stage. We work with trusted contractors and suppliers to guarantee high quality and reliability.",
	readMore2: "No matter the scale of the project, whether it is a cozy apartment, a spacious house, or a commercial space, we strive to create an environment that reflects your style, emphasizes your individuality, and delights you for years to come.",
	readMore3: "Contact us to begin your project and transform your space.",
	valuesH2: "Our<br />values",
	valuesP1: "Openness and<br />honesty",
	valuesP2: "Timeliness",
	valuesP3: "Modern<br />technologies",
	valuesP4: "Practicality<br />and comfort",
	valuesP5: "Custom<br />solutions",
	valuesP6: "Commitment<br />to results",
	stats1: "Projects completed",
	stats2: "Clients recommend us",
	stats3: "Sq m of designed interiors",
	stats4: "Create the perfect space",
	stats5: "Deadline adherence",
	statsGoal: "goal",
	service1: "Interior Design",
	service2: "Residential Design",
	service3: "Commercial Interior Design",
	service4: "Home Renovation",
	service5: "Commercial Renovation",
	servicesH2: "Our Services",
	projectsH2: "Our Projects",
	project1: "An elegant private house where minimalism meets coziness. Spacious rooms and panoramic windows create a comfortable environment on the Riviera.",
	project2: "Luxurious apartments with a sea view. Every detail of the interior is carefully thought out, combining aesthetics and functionality.",
	project3: "A modern design for a brand. A bright interior focusing on comfort and style, perfect for a business setting.",
	project4: "An elegant private house blending minimalism with coziness. Spacious rooms and panoramic windows ensure comfort on the Riviera.",
	reviewsH2P1: "Reviews from our",
	reviewsH2P2: "clients",
	reviews: {
		review1Title: "Impeccable style and attention to detail",
		review1Text: "From the first discussion to the project's completion, the team demonstrated professionalism and sensitivity to our wishes...",
		review1Name: "Julien, Nice",
		review2Title: "A truly quality approach",
		review2Text: "From the initial consultation to the final touches, the team showed professionalism and care in addressing our ideas. We loved how they transformed our apartment into a space that is both stylish and incredibly comfortable. Their attention to every detail and the ability to add unique elements made our interior truly special. Highly recommended for those seeking a quality and creative approach.",
		review2Name: "Anna, Cannes"
	},
	offer: {
		h2P1: "Ready to create",
		h2P2: "your perfect",
		h2P3: "project",
		p: "Contact us or send a request, and we will turn your ideas into reality."
	},
	process: {
		h2: "Our Working Process",
		title1: "Consultation and Discussion",
		text1: "We start by understanding your ideas and wishes. In a meeting, we discuss the project details, style, budget, and deadlines to clarify your expectations.",
		title2: "Concept Development",
		text2: "We create sketches and visualizations that capture the uniqueness of your future space. Everything is agreed upon to ensure the result meets your requirements.",
		title3: "Project Preparation",
		text3: "We prepare a complete set of documents: drawings, floor plans, material, and furniture selection. Everything needed for implementation.",
		title4: "Project Implementation",
		text4: "Our specialists manage every phase: from material procurement to execution. We monitor quality and ensure deadlines are met.",
		title5: "Completion and Handover",
		text5: "We inspect every element to ensure it matches the project. You receive a finished space, fully ready for living or working."
	},
	FAQ: {
		q1: "How long does it take to develop a design project?",
		a1: "A design project typically takes 2 to 4 weeks, depending on complexity and scope. We strive to optimize the process so that every stage meets your expectations and delivers a quality outcome. It is important that you feel the project is moving in the right direction at every stage.",
		q2: "What materials are used for renovations?",
		a2: "We use only proven and high-quality materials, selected individually for each project. Our solutions are eco-friendly, durable, and meet modern safety standards.",
		q3: "Is it possible to order design without renovation?",
		a3: "Yes, you can order a design project only. We will provide all the necessary documentation and recommendations for its execution by yourself or other contractors.",
		q4: "How much does a turnkey project cost?",
		a4: "The cost depends on the area, work complexity, and materials used. We offer transparent pricing and a customized estimate for every client.",
		q5: "How do you control quality at all stages?",
		a5: "We monitor the process at every stage: from material selection to project handover. Regular checks and clear coordination guarantee a high-quality result."
	},
	news: {
		H2: "Latest News",
		category1: "Design Trends",
		title1: "Completed Project: Office with a Sea View",
		by1: "Admin",
		date1: "November 2, 2024",
		category2: "Interiors and Lighting",
		title2: "How Lighting Changes the Atmosphere",
		by2: "Admin",
		date2: "November 2, 2024",
		category3: "Renovation and Decor",
		title3: "Ideas for a Stylish Renovation",
		by3: "Admin",
		date3: "November 2, 2024",
		category4: "Design Trends",
		title4: "Trends in Design: What’s In",
		by4: "Admin",
		date4: "November 2, 2024"
	}
};
var footer$1 = {
	linksH: "Quick Links",
	documentsH: "Documents",
	policy: "Privacy Policy",
	terms: "Terms & Conditions",
	contact: "Contact",
	tel: "Phone",
	location: "Location",
	france: "France"
};
var about$1 = {
	h1P1: "Creating a stylish",
	h1P2: "space for you",
	h4: "About Us",
	design: {
		h2: "Interior Design and Renovation on the French Riviera",
		p: "We create unique and functional spaces in Nice, Cannes, Antibes, and other regional cities. Our team develops projects that reflect your style and make your interior comfortable. We offer a complete range of services – from design concept to turnkey renovation, paying attention to every detail and strictly adhering to deadlines."
	},
	why: {
		h2: "Why Choose Us?",
		values: {
			question1: "Personalized Approach",
			answer1: "Every project is designed according to your style, needs, and wishes. We aim to create a unique space that reflects your personality and is fully functional for living or business.",
			question2: "Local Expertise",
			answer2: "We create projects ideally suited for life and work on the Riviera. Our knowledge of the local specifics of Nice, Cannes, and Antibes allows us to consider every detail and implement the best ideas.",
			question3: "On-Time Delivery",
			answer3: "We value your time and always deliver projects on schedule. A well-organized process and professional team prevent delays while maintaining a high quality at every stage.",
			question4: "Transparency",
			answer4: "We make every step of the project clear and accessible to you. Constant feedback, progress reports, and openness ensure that you are confident in the outcome at every stage."
		}
	},
	rates: {
		stat1_value: "83+",
		stat1_text: "Projects completed",
		stat2_value: "95%",
		stat2_text: "Clients recommend us",
		stat3_value: "12,500",
		stat3_text: "Sq m of designed interiors",
		stat4_value: "1 goal",
		stat4_text: "Create the perfect space",
		stat5_value: "100%",
		stat5_text: "Deadline adherence"
	},
	way: {
		title: "Our Approach",
		step1_title: "Understanding the Client",
		step1_text: "Every project begins with dialogue. We thoroughly review your wishes, lifestyle or business specifics to create a space that suits you perfectly.",
		step2_title: "Thoughtful Solutions",
		step2_text: "We combine aesthetics and functionality to make your interior both comfortable and visually appealing. Our projects are tailored to you and the Riviera atmosphere.",
		step3_title: "Team of Experts",
		step3_text: "Our team includes architects, designers, and engineers experienced in Nice, Cannes, and Antibes. We guarantee professionalism at every stage.",
		step4_title: "Results-Focused",
		step4_text: "No unnecessary words or promises. We concentrate on turning your ideas into reality, meeting deadlines, and delivering a high standard.",
		step5_title: "Your Comfort is Our Goal",
		step5_text: "Whether it’s a small apartment or a large commercial project, we aim to create an inspiring space."
	},
	team: {
		title: "Our Team",
		member1_name: "Julien Moreau",
		member1_role: "Chief Architect",
		member2_name: "Camille Lefebvre",
		member2_role: "Interior Designer",
		member3_name: "Emile Dupont",
		member3_role: "Project Manager",
		member4_name: "Sophie Laroche",
		member4_role: "Client Relations Manager",
		member5_name: "Thomas Bertrand",
		member5_role: "Structural Engineer",
		member6_name: "Clara Giro",
		member6_role: "Materials Specialist"
	}
};
var contactPlate$1 = {
	h1: "Design&nbsp;and&nbsp;Renovation<br />",
	span1: "crafted",
	span2: "for you",
	p: "Get in touch with us and we will create a unique space that reflects your style and needs. Leave a request or call to discuss the details."
};
var services$1 = {
	main: {
		design: "Design, style <br />and comfort together",
		title: "Create a<br />unique<br /><span class='slash' style='color: #E8E3DF'>/</span> interior",
		description: "We are a team of design and renovation experts working on the French Riviera, including Nice, Cannes, and Antibes. Our mission is to create stylish, functional, and unique spaces that reflect the individuality of our clients. We offer a complete range of services: from concept development and design projects to turnkey renovations. Every project is tailored to your preferences, needs, and the property’s specifics.",
		readMoreText: "Our experience in Nice, Cannes, and Antibes allows us to appreciate the local architectural specifics and create interiors that perfectly fit the Riviera vibe. Using modern technology, quality materials, and proven methods, we bring your ideas to life, creating comfortable and aesthetically pleasing spaces. Whether it’s a small apartment or a luxurious villa, we strive to exceed our clients' expectations. Contact us to start your project today and make your interior a reflection of your style and personality.",
		razamText: "We create projects for your home"
	}
};
var portfolio$1 = {
	main: {
		titleFirst: "Our <br />projects",
		titleSecond: "your <br />inspiration",
		desc: "Working since 2010",
		category1: "Architecture",
		category2: "Interiors",
		category3: "Turnkey Renovation"
	},
	tabs: {
		categories: {
			all: "All projects",
			livingRooms: "Living Rooms",
			architecture: "Architecture",
			commercial: "Commercial Spaces",
			landscapeDesign: "Landscape Design",
			eliteInterios: "Luxury Interiors"
		},
		types: {
			designAndRepair: "Design & Renovation"
		},
		rooms: {
			kitchen: "Kitchen",
			bedroom: "Bedroom",
			corridor: "Hallway",
			lounge: "Living Room"
		}
	},
	projects: {
		common: {
			square: "Total Area",
			livingArea: "Living Area",
			workingTime: "Project Duration",
			cost: "Total Cost",
			client: "Client",
			location: "Location",
			year: "Year"
		},
		urbanGrace: {
			workingTime: "74 days",
			client: "Louis Chantié",
			dislocation: "Cannes, France",
			desc: "A project that blends coziness with style. Warm tones, soft textures, and harmonious details create a space where you can relax and enjoy every moment.",
			componentData: {
				lounge: {
					h1: "Living Room",
					h2: "A Blend of Comfort, Style, and Modernity",
					p: "The sofa in the center of the living room catches the eye with its minimalist design and soft lines. The use of natural fabrics and muted tones creates a cozy atmosphere. Its modular structure allows for easy adaptation to any needs."
				},
				bedroom: {
					h1: "The Bedroom, Where",
					h2: "The Harmony of the Day Begins",
					p: "The bedroom is designed in calm green and neutral tones, creating an atmosphere of comfort and relaxation. Details such as a soft headboard and an accent bench add depth and elegance to the space. Morning light gently filters through thick curtains, setting a harmonious start to the day."
				},
				lights: {
					h1: "Lighting,",
					h2: "That Sets the Mood",
					p: "The interior is illuminated by various light sources that highlight its details. Wall-mounted lamps with soft glow add warmth, while pendant lights create accents in key areas. Modern light strips perfectly complement the overall minimalist style."
				}
			}
		}
	}
};
var blog$1 = {
	articles: {
		categories: {
			architecture: "Architecture",
			interiorDesign: "Interior Design",
			construction: "Construction",
			renovation: "Renovation",
			landscapeDesign: "Landscape Design"
		},
		tags: {
			interiorLights: "Interior Lighting",
			lightDesign: "Lighting Design",
			homeAtmosphere: "Home Atmosphere",
			lightZonation: "Lighting Zones",
			lightStyles: "Lighting Types",
			lightIdeas: "Lighting Ideas",
			lightTrands: "Lighting Trends"
		},
		lights: {
			name: "How Lighting Changes the Interior Atmosphere"
		},
		ideas: {
			name: "Ideas for a Stylish Renovation"
		},
		trends: {
			name: "Design Trends: What’s In"
		},
		materials: {
			name: "Modern Materials in Interior Design"
		},
		bedroom: {
			name: "Cozy Bedroom: Secrets of Perfect Design"
		},
		minimalism: {
			name: "Minimalism in Design: The Key to Harmony"
		}
	}
};
var contact$1 = {
	contactUs: "Contact Us",
	form: {
		description: "We are always ready to discuss your project and answer any questions. Whether you want to update your interior, design a new space, or learn more about our services, get in touch by your preferred method.",
		title: "Leave a Request",
		nameLabel: "Your Name",
		emailLabel: "Email",
		phoneLabel: "Phone Number",
		messageLabel: "Message",
		required: "*",
		submitButton: "Send"
	},
	info: {
		titleFirst: "Contact",
		titleSecond: "Information",
		locationLabel: "Location",
		location: "305 Av. Georges Pompidou, 06220<br />Vallauris, France"
	}
};
const en = {
	meta: meta$1,
	menu: menu$1,
	common: common$1,
	home: home$1,
	footer: footer$1,
	about: about$1,
	contactPlate: contactPlate$1,
	services: services$1,
	portfolio: portfolio$1,
	blog: blog$1,
	contact: contact$1
};

var meta = {
	title: "Razam | Accueil",
	description: "Design et rénovation experts sur la Côte d'Azur."
};
var menu = {
	home: "Accueil",
	about: "À propos",
	services: "Services",
	portfolio: "Portfolio",
	news: "Actualités",
	contact: "Contact",
	blog: "Blog"
};
var common = {
	hide: "Cacher",
	readMore: "Lire la suite"
};
var home = {
	headline: "Design et rénovation sur la Côte d'Azur",
	desc: "Design et rénovation experts sur la Côte d'Azur",
	fullDesc1: "Nous sommes spécialisés dans la création d'intérieurs uniques et élégants pour maisons, appartements et espaces commerciaux à Nice, Cannes et Antibes. Notre équipe d'experts élabore des projets qui allient raffinement esthétique et fonctionnalité, reflétant l'ambiance de la Côte d'Azur et l'individualité de nos clients.",
	fullDesc2: "Nous proposons des services clés en main – de la conception initiale jusqu'à la finalisation de la rénovation, garantissant confort et souci du détail. Nous prenons en compte tous les aspects, y compris les caractéristiques architecturales du bâtiment, les souhaits du client et les tendances actuelles en design.",
	readMore: "Notre approche intègre l'usage de technologies innovantes et une planification minutieuse à chaque étape. Nous collaborons avec des prestataires et fournisseurs reconnus pour garantir qualité et fiabilité.",
	readMore2: "Quel que soit l'ampleur du projet, qu'il s'agisse d'un appartement cosy, d'une maison spacieuse ou d'un espace commercial, nous nous efforçons de créer un lieu qui reflète votre style, souligne votre singularité et vous ravit pendant des années.",
	readMore3: "Contactez-nous pour démarrer votre projet et transformer votre espace.",
	valuesH2: "Nos<br />valeurs",
	valuesP1: "Ouverture et<br />honnêteté",
	valuesP2: "Respect des délais",
	valuesP3: "Technologies<br />modernes",
	valuesP4: "Praticité<br />et confort",
	valuesP5: "Solutions<br />personnalisées",
	valuesP6: "Engagement<br />pour le résultat",
	stats1: "Projets réalisés",
	stats2: "Clients qui nous recommandent",
	stats3: "M² d'intérieurs conçus",
	stats4: "Créer l'espace parfait",
	stats5: "Respect des délais",
	statsGoal: "objectif",
	service1: "Design d'intérieur",
	service2: "Design résidentiel",
	service3: "Design pour espaces commerciaux",
	service4: "Rénovation de maisons",
	service5: "Rénovation commerciale",
	servicesH2: "Nos Services",
	projectsH2: "Nos Projets",
	project1: "Une maison privée élégante où le minimalisme rencontre la convivialité. Des pièces spacieuses et des baies vitrées offrent un confort sur la Côte d'Azur.",
	project2: "Des appartements luxueux avec vue sur la mer. L'intérieur est pensé jusque dans les moindres détails, alliant esthétique et fonctionnalité.",
	project3: "Un design moderne pour une marque. Un intérieur lumineux axé sur le confort et le style, idéal pour un environnement professionnel.",
	project4: "Une maison privée élégante où le minimalisme se mêle à la chaleur. Des espaces généreux et des vues panoramiques assurent un confort sur la Côte d'Azur.",
	reviewsH2P1: "Avis de nos",
	reviewsH2P2: "clients",
	reviews: {
		review1Title: "Style irréprochable et attention aux détails",
		review1Text: "De la première discussion à la finalisation du projet, l'équipe a fait preuve de professionnalisme et d'écoute...",
		review1Name: "Julien, Nice",
		review2Title: "Une approche véritablement qualitative",
		review2Text: "Dès la première rencontre jusqu'aux finitions, l'équipe a montré un grand professionnalisme et une attention particulière à nos idées. Nous avons apprécié leur capacité à transformer notre appartement en un espace non seulement élégant mais aussi incroyablement confortable. Leur souci du détail et l'ajout d'éléments uniques ont rendu notre intérieur vraiment spécial. Je recommande vivement pour ceux qui recherchent une approche créative et de qualité.",
		review2Name: "Anna, Cannes"
	},
	offer: {
		h2P1: "Prêts à créer",
		h2P2: "votre projet",
		h2P3: "idéal",
		p: "Contactez-nous ou laissez votre demande, et nous réaliserons vos idées."
	},
	process: {
		h2: "Notre Processus",
		title1: "Consultation et échange",
		text1: "Nous commençons par étudier vos idées et vos besoins. Lors d'une rencontre, nous discutons les détails du projet, le style, le budget et les délais pour comprendre vos attentes.",
		title2: "Élaboration du concept",
		text2: "Nous créons des esquisses et des visualisations qui reflètent l'unicité de votre futur espace. Tout est validé pour que le résultat corresponde parfaitement à vos exigences.",
		title3: "Préparation du projet",
		text3: "Nous préparons l'ensemble de la documentation : plans, agencements, choix des matériaux et du mobilier. Tout est réuni pour la réalisation.",
		title4: "Mise en œuvre",
		text4: "Nos spécialistes supervisent chaque étape : de l'achat des matériaux à l'exécution des travaux. Nous assurons le suivi qualité et le respect des délais.",
		title5: "Finalisation et livraison",
		text5: "Nous vérifions chaque élément afin que tout corresponde au projet. Vous recevez un espace terminé, prêt à être utilisé."
	},
	FAQ: {
		q1: "Combien de temps dure l'élaboration d'un projet de design ?",
		a1: "L'élaboration d'un projet de design prend généralement de 2 à 4 semaines, selon la complexité et l'ampleur. Nous optimisons le processus afin que chaque étape réponde à vos attentes et garantisse un résultat de qualité. Il est important que vous soyez rassuré à chaque phase du projet.",
		q2: "Quels matériaux sont utilisés pour la rénovation ?",
		a2: "Nous utilisons uniquement des matériaux éprouvés et de haute qualité, sélectionnés spécialement pour chaque projet. Nos solutions sont écologiques, durables et conformes aux normes modernes de sécurité.",
		q3: "Peut-on commander uniquement le design sans la rénovation ?",
		a3: "Oui, il est possible de commander uniquement la conception du projet. Nous fournirons toute la documentation nécessaire et des recommandations pour sa réalisation par vous-même ou par d'autres prestataires.",
		q4: "Quel est le coût d'un projet clé en main ?",
		a4: "Le coût dépend de la superficie, de la complexité des travaux et des matériaux utilisés. Nous proposons une tarification transparente et une estimation personnalisée pour chaque client.",
		q5: "Comment garantissez-vous la qualité à chaque étape ?",
		a5: "Nous assurons un suivi rigoureux à chaque étape : depuis le choix des matériaux jusqu'à la livraison du projet. Des contrôles réguliers et une coordination claire garantissent un niveau de qualité élevé."
	},
	news: {
		H2: "Actualités",
		category1: "Tendances du design",
		title1: "Projet réalisé : Bureau avec vue sur mer",
		by1: "Admin",
		date1: "2 Novembre 2024",
		category2: "Intérieurs et éclairage",
		title2: "Comment l'éclairage change l'ambiance",
		by2: "Admin",
		date2: "2 Novembre 2024",
		category3: "Rénovation et déco",
		title3: "Idées pour une rénovation élégante",
		by3: "Admin",
		date3: "2 Novembre 2024",
		category4: "Tendances du design",
		title4: "Design : ce qui est tendance",
		by4: "Admin",
		date4: "2 Novembre 2024"
	}
};
var footer = {
	linksH: "Liens rapides",
	documentsH: "Documents",
	policy: "Politique de confidentialité",
	terms: "Conditions d'utilisation",
	contact: "Contact",
	tel: "Téléphone",
	location: "Localisation",
	france: "France"
};
var about = {
	h1P1: "Créons un espace",
	h1P2: "stylé pour vous",
	h4: "À propos",
	design: {
		h2: "Design d'intérieur et rénovation sur la Côte d'Azur",
		p: "Nous créons des espaces uniques et fonctionnels à Nice, Cannes, Antibes et dans d'autres villes de la région. Notre équipe conçoit des projets qui reflètent votre style et rendent votre intérieur agréable. Nous proposons une gamme complète de services – de la conception au projet clé en main, en respectant chaque détail et les délais."
	},
	why: {
		h2: "Pourquoi nous choisir ?",
		values: {
			question1: "Approche personnalisée",
			answer1: "Chaque projet est conçu en tenant compte de votre style, de vos besoins et de vos envies. Nous visons à créer un espace unique qui reflète votre personnalité et reste parfaitement fonctionnel pour votre vie ou votre activité.",
			question2: "Expertise locale",
			answer2: "Nous réalisons des projets parfaitement adaptés à la vie et au travail sur la Côte d'Azur. La connaissance des spécificités de Nice, Cannes et Antibes nous permet d'intégrer chaque détail et d'appliquer les meilleures idées.",
			question3: "Respect des délais",
			answer3: "Nous savons combien votre temps est précieux et nous livrons toujours nos projets dans les temps. Une organisation rigoureuse et une équipe professionnelle éliminent tout retard tout en maintenant une qualité élevée.",
			question4: "Transparence",
			answer4: "Nous rendons chaque étape du projet claire et accessible. Un suivi régulier, des rapports d'avancement et une communication ouverte vous garantissent la confiance dans le résultat final."
		}
	},
	rates: {
		stat1_value: "83+",
		stat1_text: "Projets réalisés",
		stat2_value: "95%",
		stat2_text: "Clients qui nous recommandent",
		stat3_value: "12,500",
		stat3_text: "M² d'intérieurs conçus",
		stat4_value: "1 objectif",
		stat4_text: "Créer l'espace parfait",
		stat5_value: "100%",
		stat5_text: "Respect des délais"
	},
	way: {
		title: "Notre approche",
		step1_title: "Comprendre le client",
		step1_text: "Chaque projet commence par un dialogue. Nous étudions attentivement vos envies, votre mode de vie ou les spécificités de votre activité afin de créer un espace qui vous ressemble.",
		step2_title: "Solutions réfléchies",
		step2_text: "Nous allions esthétique et fonctionnalité pour concevoir un intérieur à la fois confortable et attrayant. Nos projets sont adaptés à vous et à l'ambiance de la Côte d'Azur.",
		step3_title: "Équipe d'experts",
		step3_text: "Notre équipe regroupe architectes, designers et ingénieurs ayant travaillé à Nice, Cannes et Antibes. Nous garantissons le professionnalisme à chaque étape.",
		step4_title: "Orientation résultat",
		step4_text: "Pas de promesses inutiles. Nous nous concentrons sur la réalisation concrète de vos idées, en respectant les délais et en assurant une qualité élevée.",
		step5_title: "Votre confort, notre objectif",
		step5_text: "Qu'il s'agisse d'un petit appartement ou d'un grand projet commercial, nous nous engageons à créer un espace inspirant."
	},
	team: {
		title: "Notre équipe",
		member1_name: "Julien Moreau",
		member1_role: "Architecte en chef",
		member2_name: "Camille Lefebvre",
		member2_role: "Designer d'intérieur",
		member3_name: "Emile Dupont",
		member3_role: "Chef de projet",
		member4_name: "Sophie Laroche",
		member4_role: "Responsable clientèle",
		member5_name: "Thomas Bertrand",
		member5_role: "Ingénieur en structure",
		member6_name: "Clara Giro",
		member6_role: "Spécialiste matériaux"
	}
};
var contactPlate = {
	h1: "Design&nbsp;et&nbsp;rénovation<br />",
	span1: "conçus",
	span2: "pour vous",
	p: "Contactez-nous et nous créerons pour vous un espace unique, reflétant votre style et vos besoins. Laissez votre demande ou appelez-nous pour en discuter."
};
var services = {
	main: {
		design: "Design, style <br />et confort ensemble",
		title: "Créez un<br />intérieur<br /><span class='slash' style='color: #E8E3DF'>/</span> unique",
		description: "Nous sommes une équipe d'experts en design et rénovation opérant sur la Côte d'Azur, y compris à Nice, Cannes et Antibes. Notre mission est de créer des espaces élégants, fonctionnels et uniques, qui reflètent l'individualité de nos clients. Nous offrons une gamme complète de services : de la conception à la rénovation clé en main. Chaque projet est élaboré selon vos préférences, vos besoins et les caractéristiques du lieu.",
		readMoreText: "Notre expérience à Nice, Cannes et Antibes nous permet de prendre en compte les spécificités locales et de créer des intérieurs en harmonie avec l'ambiance de la Côte d'Azur. En utilisant des technologies modernes, des matériaux de qualité et des méthodes éprouvées, nous donnons vie à vos idées en créant des espaces à la fois confortables et esthétiques. Que ce soit pour un petit appartement ou une villa de luxe, nous nous efforçons de dépasser les attentes de nos clients. Contactez-nous dès aujourd'hui pour démarrer votre projet et faire de votre intérieur le reflet de votre personnalité.",
		razamText: "Nous concevons des projets pour votre domicile"
	}
};
var portfolio = {
	main: {
		titleFirst: "Nos <br />projets",
		titleSecond: "votre<br />inspiration",
		desc: "Depuis 2010",
		category1: "Architecture",
		category2: "Intérieurs",
		category3: "Rénovation clé en main"
	},
	tabs: {
		categories: {
			all: "Tous les projets",
			livingRooms: "Espaces de vie",
			architecture: "Architecture",
			commercial: "Espaces commerciaux",
			landscapeDesign: "Paysagisme",
			eliteInterios: "Intérieurs de luxe"
		},
		types: {
			designAndRepair: "Design et rénovation"
		},
		rooms: {
			kitchen: "Cuisine",
			bedroom: "Chambre",
			corridor: "Couloir",
			lounge: "Salon"
		}
	},
	projects: {
		common: {
			square: "Surface totale",
			livingArea: "Surface habitable",
			workingTime: "Durée des travaux",
			cost: "Coût total",
			client: "Client",
			location: "Emplacement",
			year: "Année"
		},
		urbanGrace: {
			workingTime: "74 jours",
			client: "Louis Chantié",
			dislocation: "Cannes, France",
			desc: "Un projet alliant convivialité et style. Des teintes chaudes, des textures douces et des détails harmonieux créent un espace propice à la détente et au bien-être.",
			componentData: {
				lounge: {
					h1: "Salon",
					h2: "Une Alliance de Confort, de Style et de Modernité",
					p: "Le canapé au centre du salon attire l'attention par son design minimaliste et ses lignes douces. L'utilisation de tissus naturels et de tons apaisants crée une ambiance chaleureuse. Sa structure modulaire permet une adaptation facile à tous les besoins."
				},
				bedroom: {
					h1: "La Chambre, Où",
					h2: "Commence l'Harmonie du Jour",
					p: "La chambre est conçue dans des tons verts et neutres apaisants, créant une atmosphère de confort et de relaxation. Des détails comme une tête de lit moelleuse et un banc d'accentuation ajoutent de la profondeur et du raffinement à l'espace. La lumière du matin traverse doucement les rideaux épais, offrant un début de journée harmonieux."
				},
				lights: {
					h1: "Lumière,",
					h2: "Qui Crée l'Ambiance",
					p: "L'intérieur est éclairé par différentes sources lumineuses qui en soulignent les détails. Les appliques murales à lumière douce apportent une touche de chaleur, tandis que les suspensions mettent en valeur les zones clés. Les lignes lumineuses modernes s'intègrent parfaitement au style minimaliste global."
				}
			}
		}
	}
};
var blog = {
	articles: {
		categories: {
			architecture: "Architecture",
			interiorDesign: "Design d'intérieur",
			construction: "Construction",
			renovation: "Rénovation",
			landscapeDesign: "Paysagisme"
		},
		tags: {
			interiorLights: "Éclairage intérieur",
			lightDesign: "Design lumineux",
			homeAtmosphere: "Ambiance de la maison",
			lightZonation: "Zones d'éclairage",
			lightStyles: "Types d'éclairage",
			lightIdeas: "Idées d'éclairage",
			lightTrands: "Tendances en éclairage"
		},
		lights: {
			name: "Comment l'éclairage transforme l'ambiance"
		},
		ideas: {
			name: "Idées pour une rénovation élégante"
		},
		trends: {
			name: "Tendances design : l'essentiel"
		},
		materials: {
			name: "Matériaux modernes en design d'intérieur"
		},
		bedroom: {
			name: "Chambre cosy : les secrets d'un design parfait"
		},
		minimalism: {
			name: "Minimalisme en design : la clé de l'harmonie"
		}
	}
};
var contact = {
	contactUs: "Contactez-nous",
	form: {
		description: "Nous sommes toujours disponibles pour discuter de votre projet et répondre à vos questions. Que vous souhaitiez rénover, concevoir un nouvel intérieur ou en savoir plus sur nos services, contactez-nous par le moyen qui vous convient.",
		title: "Laissez votre demande",
		nameLabel: "Votre nom",
		emailLabel: "Email",
		phoneLabel: "Téléphone",
		messageLabel: "Message",
		required: "*",
		submitButton: "Envoyer"
	},
	info: {
		titleFirst: "Coordonnées",
		titleSecond: "de contact",
		locationLabel: "Localisation",
		location: "305 Av. Georges Pompidou, 06220<br />Vallauris, France"
	}
};
const fr = {
	meta: meta,
	menu: menu,
	common: common,
	home: home,
	footer: footer,
	about: about,
	contactPlate: contactPlate,
	services: services,
	portfolio: portfolio,
	blog: blog,
	contact: contact
};

const translations = { ru, en, fr };
const getTranslation = (key, lang) => {
  return key.split(".").reduce((obj, part) => obj == null ? void 0 : obj[part], translations[lang]) || key;
};
const search = defineEventHandler((event) => {
  var _a;
  const query = getQuery$1(event);
  const lang = query.lang || "ru";
  const keyword = (_a = query.q) == null ? void 0 : _a.toLowerCase().trim();
  if (!keyword) {
    return { error: "No search query provided" };
  }
  const matchedArticles = blog$5.filter((article) => {
    const translatedName = getTranslation(article.name, lang).toLowerCase();
    const translatedCategory = getTranslation(article.category, lang).toLowerCase();
    return translatedName.includes(keyword) || translatedCategory.includes(keyword);
  }).map((article) => ({
    ...article,
    name: getTranslation(article.name, lang),
    // Переведенное название
    category: getTranslation(article.category, lang)
    // Переведенная категория
  }));
  const matchedProjects = projects$2.filter((project) => {
    const translatedCategory = getTranslation(project.category, lang).toLowerCase();
    const translatedType = getTranslation(project.type, lang).toLowerCase();
    return project.name.toLowerCase().includes(keyword) || // Оригинальное название
    translatedCategory.includes(keyword) || // Переведенная категория
    translatedType.includes(keyword);
  }).map((project) => ({
    ...project,
    category: getTranslation(project.category, lang),
    // Переведенная категория
    type: getTranslation(project.type, lang)
    // Переведенный тип
  }));
  return {
    articles: matchedArticles,
    projects: matchedProjects
  };
});

const search$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: search
});

const Vue3 = version[0] === "3";

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref) {
  if (ref instanceof Promise || ref instanceof Date || ref instanceof RegExp)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = true ? [CapoPlugin({ track: true })] : [];

const renderSSRHeadOptions = {"omitLineBreaks":false};

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://D:/projects/razam-nuxt/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file://D:/projects/razam-nuxt/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      return APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG;
    }
  });
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const PAYLOAD_URL_RE = /\/_payload.json(\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = Number.parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set(),
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest) {
    head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    head.push({ style: inlinedStyles });
  }
  {
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      head.push({ link }, headEntryOptions);
    }
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head, renderSSRHeadOptions);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  if (isRenderingIsland && islandContext) {
    const islandHead = {};
    for (const entry of head.headEntries()) {
      for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
        const currentValue = islandHead[key];
        if (Array.isArray(currentValue)) {
          currentValue.push(...value);
        }
        islandHead[key] = value;
      }
    }
    islandHead.link ||= [];
    islandHead.style ||= [];
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(htmlContext.body),
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}
function getServerComponentHTML(body) {
  const match = body[0].match(ROOT_NODE_REGEX);
  return match?.[1] || body[0];
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=[^;]*;(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, slot] = match;
      if (!slot) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
