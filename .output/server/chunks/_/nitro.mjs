import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http from 'node:http';
import https from 'node:https';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promises, existsSync } from 'node:fs';
import { resolve as resolve$1, dirname as dirname$1, join } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$1(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
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
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
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
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
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
function getQuery$1(input) {
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

function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function serialize$2(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encodeURIComponent;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low": {
        str += "; Priority=Low";
        break;
      }
      case "medium": {
        str += "; Priority=Medium";
        break;
      }
      case "high": {
        str += "; Priority=High";
        break;
      }
      default: {
        throw new TypeError("option priority is invalid");
      }
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true: {
        str += "; SameSite=Strict";
        break;
      }
      case "lax": {
        str += "; SameSite=Lax";
        break;
      }
      case "strict": {
        str += "; SameSite=Strict";
        break;
      }
      case "none": {
        str += "; SameSite=None";
        break;
      }
      default: {
        throw new TypeError("option sameSite is invalid");
      }
    }
  }
  if (opt.partitioned) {
    str += "; Partitioned";
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}

function parseSetCookie(setCookieValue, options) {
  const parts = (setCookieValue || "").split(";").filter((str) => typeof str === "string" && !!str.trim());
  const nameValuePairStr = parts.shift() || "";
  const parsed = _parseNameValuePair(nameValuePairStr);
  const name = parsed.name;
  let value = parsed.value;
  try {
    value = options?.decode === false ? value : (options?.decode || decodeURIComponent)(value);
  } catch {
  }
  const cookie = {
    name,
    value
  };
  for (const part of parts) {
    const sides = part.split("=");
    const partKey = (sides.shift() || "").trimStart().toLowerCase();
    const partValue = sides.join("=");
    switch (partKey) {
      case "expires": {
        cookie.expires = new Date(partValue);
        break;
      }
      case "max-age": {
        cookie.maxAge = Number.parseInt(partValue, 10);
        break;
      }
      case "secure": {
        cookie.secure = true;
        break;
      }
      case "httponly": {
        cookie.httpOnly = true;
        break;
      }
      case "samesite": {
        cookie.sameSite = partValue;
        break;
      }
      default: {
        cookie[partKey] = partValue;
      }
    }
  }
  return cookie;
}
function _parseNameValuePair(nameValuePairStr) {
  let name = "";
  let value = "";
  const nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function o(n){throw new Error(`${n} is not implemented yet!`)}let i$1 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o("Readable.asyncIterator")}iterator(e){throw o("Readable.iterator")}map(e,t){throw o("Readable.map")}filter(e,t){throw o("Readable.filter")}forEach(e,t){throw o("Readable.forEach")}reduce(e,t,r){throw o("Readable.reduce")}find(e,t){throw o("Readable.find")}findIndex(e,t){throw o("Readable.findIndex")}some(e,t){throw o("Readable.some")}toArray(e){throw o("Readable.toArray")}every(e,t){throw o("Readable.every")}flatMap(e,t){throw o("Readable.flatMap")}drop(e,t){throw o("Readable.drop")}take(e,t){throw o("Readable.take")}asIndexedPairs(e){throw o("Readable.asIndexedPairs")}};let l$1 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}};const c$1=class c{allowHalfOpen=true;_destroy;constructor(e=new i$1,t=new l$1){Object.assign(this,e),Object.assign(this,t),this._destroy=g(e._destroy,t._destroy);}};function _(){return Object.assign(c$1.prototype,i$1.prototype),Object.assign(c$1.prototype,l$1.prototype),c$1}function g(...n){return function(...e){for(const t of n)t(...e);}}const m=_();class A extends m{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}}class y extends i$1{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$1{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function S(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const C=new Set([101,204,205,304]);async function b(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(C.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function O(n,e,t={}){try{const r=await b(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:S(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== undefined) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== undefined) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== undefined) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, undefined, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(undefined);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== undefined) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function getDistinctCookieKey(name, opts) {
  return [
    name,
    opts.domain || "",
    opts.path || "/",
    Boolean(opts.secure),
    Boolean(opts.httpOnly),
    Boolean(opts.sameSite)
  ].join(";");
}

function parseCookies(event) {
  return parse(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions = {}) {
  if (!serializeOptions.path) {
    serializeOptions = { path: "/", ...serializeOptions };
  }
  const newCookie = serialize$2(name, value, serializeOptions);
  const currentCookies = splitCookiesString(
    event.node.res.getHeader("set-cookie")
  );
  if (currentCookies.length === 0) {
    event.node.res.setHeader("set-cookie", newCookie);
    return;
  }
  const newCookieKey = getDistinctCookieKey(name, serializeOptions);
  event.node.res.removeHeader("set-cookie");
  for (const cookie of currentCookies) {
    const parsed = parseSetCookie(cookie);
    const key = getDistinctCookieKey(parsed.name, parsed);
    if (key === newCookieKey) {
      continue;
    }
    event.node.res.appendHeader("set-cookie", cookie);
  }
  event.node.res.appendHeader("set-cookie", newCookie);
}
function deleteCookie(event, name, serializeOptions) {
  setCookie(event, name, "", {
    ...serializeOptions,
    maxAge: 0
  });
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => undefined);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== undefined) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== undefined) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : undefined;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : undefined;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === undefined ? undefined : await val;
      if (_body !== undefined) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, undefined);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, undefined);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, undefined)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, undefined, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, undefined, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, undefined, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === undefined && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s$1=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController = globalThis.AbortController || i;
createFetch({ fetch, Headers: Headers$1, AbortController });

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function serialize$1(o){return typeof o=="string"?`'${o}'`:new c().serialize(o)}const c=/*@__PURE__*/function(){class o{#t=new Map;compare(t,r){const e=typeof t,n=typeof r;return e==="string"&&n==="string"?t.localeCompare(r):e==="number"&&n==="number"?t-r:String.prototype.localeCompare.call(this.serialize(t,true),this.serialize(r,true))}serialize(t,r){if(t===null)return "null";switch(typeof t){case "string":return r?t:`'${t}'`;case "bigint":return `${t}n`;case "object":return this.$object(t);case "function":return this.$function(t)}return String(t)}serializeObject(t){const r=Object.prototype.toString.call(t);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),t);const e=t.constructor,n=e===Object||e===void 0?"":e.name;if(n!==""&&globalThis[n]===e)return this.serializeBuiltInType(n,t);if(typeof t.toJSON=="function"){const i=t.toJSON();return n+(i!==null&&typeof i=="object"?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(n,Object.entries(t))}serializeBuiltInType(t,r){const e=this["$"+t];if(e)return e.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(t,r.entries());throw new Error(`Cannot serialize ${t}`)}serializeObjectEntries(t,r){const e=Array.from(r).sort((i,a)=>this.compare(i[0],a[0]));let n=`${t}{`;for(let i=0;i<e.length;i++){const[a,l]=e[i];n+=`${this.serialize(a,true)}:${this.serialize(l)}`,i<e.length-1&&(n+=",");}return n+"}"}$object(t){let r=this.#t.get(t);return r===void 0&&(this.#t.set(t,`#${this.#t.size}`),r=this.serializeObject(t),this.#t.set(t,r)),r}$function(t){const r=Function.prototype.toString.call(t);return r.slice(-15)==="[native code] }"?`${t.name||""}()[native]`:`${t.name}(${t.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(t){let r="[";for(let e=0;e<t.length;e++)r+=this.serialize(t[e]),e<t.length-1&&(r+=",");return r+"]"}$Date(t){try{return `Date(${t.toISOString()})`}catch{return "Date(null)"}}$ArrayBuffer(t){return `ArrayBuffer[${new Uint8Array(t).join(",")}]`}$Set(t){return `Set${this.$Array(Array.from(t).sort((r,e)=>this.compare(r,e)))}`}$Map(t){return this.serializeObjectEntries("Map",t.entries())}}for(const s of ["Error","RegExp","URL"])o.prototype["$"+s]=function(t){return `${s}(${t})`};for(const s of ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join(",")}]`};for(const s of ["BigInt64Array","BigUint64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join("n,")}${t.length>0?"n":""}]`};return o}();

function isEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  }
  if (serialize$1(object1) === serialize$1(object2)) {
    return true;
  }
  return false;
}

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r="sha256",s="base64url";function digest(t){if(e)return e(r,t,s);const o=createHash(r).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
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
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
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
            console.error(`[cache] Cache write error.`, error);
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
        console.error(`[cache] SWR handler error.`, error);
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
  return args.length > 0 ? hash(args) : "";
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
      event.waitUntil = incomingEvent.waitUntil;
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

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

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
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "1c84b0a1-6e53-4861-8f13-babbb63a995f",
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
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "i18n": {
      "baseUrl": "http://localhost:3000",
      "defaultLocale": "fr",
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
          "name": "En",
          "files": []
        },
        {
          "code": "fr",
          "iso": "fr-FR",
          "name": "Fr",
          "files": []
        },
        {
          "code": "ru",
          "iso": "ru-RU",
          "name": "Ru",
          "files": []
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
        "alternateLinkCanonicalQueries": false,
        "hmr": true
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
    if (als) {
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
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
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

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
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
        const query = getQuery$1(event.path);
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
        const query = getQuery$1(event.path);
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

function _captureError(error, type) {
  console.error(`[${type}]`, error);
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

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = url.pathname + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await import('./error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const plugins = [
  
];

const assets = {
  "/logo-white.webp": {
    "type": "image/webp",
    "etag": "\"27fa-vGpLgYEm9EDKfawh6gf602Cexe4\"",
    "mtime": "2025-04-09T15:32:42.795Z",
    "size": 10234,
    "path": "../public/logo-white.webp"
  },
  "/logo.webp": {
    "type": "image/webp",
    "etag": "\"2f5c-2cCzjMwsNCKw55jY9YatVUYs4z0\"",
    "mtime": "2025-04-09T15:32:47.984Z",
    "size": 12124,
    "path": "../public/logo.webp"
  },
  "/favicons/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"142d-qcLxdPx1+EYXHMomy8U+93X/BxI\"",
    "mtime": "2025-04-20T09:07:38.000Z",
    "size": 5165,
    "path": "../public/favicons/apple-touch-icon.png"
  },
  "/favicons/favicon-96x96.png": {
    "type": "image/png",
    "etag": "\"a59-MCgyKBfCVdHLIDaGmiRmtlIlEjg\"",
    "mtime": "2025-04-20T09:07:38.000Z",
    "size": 2649,
    "path": "../public/favicons/favicon-96x96.png"
  },
  "/favicons/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3aee-30i/uLBKbcuiqH2cnjb/vVWiy64\"",
    "mtime": "2025-04-20T09:07:38.000Z",
    "size": 15086,
    "path": "../public/favicons/favicon.ico"
  },
  "/favicons/favicon.svg": {
    "type": "image/svg+xml",
    "etag": "\"9bb2-4NmV//ptKWXDZWrRQvNmvqjlPbg\"",
    "mtime": "2025-04-20T09:07:38.000Z",
    "size": 39858,
    "path": "../public/favicons/favicon.svg"
  },
  "/favicons/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": "\"1b4-OSnexUKym08GhwrwpMz8QjrTx8g\"",
    "mtime": "2025-04-20T09:07:38.000Z",
    "size": 436,
    "path": "../public/favicons/site.webmanifest"
  },
  "/favicons/web-app-manifest-192x192.png": {
    "type": "image/png",
    "etag": "\"15fd-v0Gyj9HS3tzZEGnFvIQX2CQQSRQ\"",
    "mtime": "2025-04-20T09:07:38.000Z",
    "size": 5629,
    "path": "../public/favicons/web-app-manifest-192x192.png"
  },
  "/favicons/web-app-manifest-512x512.png": {
    "type": "image/png",
    "etag": "\"475f-fb8HvflJKK0dAwiyayJj4bom3M0\"",
    "mtime": "2025-04-20T09:07:38.000Z",
    "size": 18271,
    "path": "../public/favicons/web-app-manifest-512x512.png"
  },
  "/images/arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"450-mUm0QE28dXK5OPYZ+w0TJy27auo\"",
    "mtime": "2025-01-13T00:00:13.720Z",
    "size": 1104,
    "path": "../public/images/arrow.svg"
  },
  "/images/footer-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"453-uHnzJXQ9mOR5illXfA++vs86YPY\"",
    "mtime": "2025-01-14T01:20:42.098Z",
    "size": 1107,
    "path": "../public/images/footer-arrow.svg"
  },
  "/images/logo.webp": {
    "type": "image/webp",
    "etag": "\"2eec-Qvy8ZkTjCH/L5AykaY/EIyg36Sw\"",
    "mtime": "2025-04-09T15:29:48.807Z",
    "size": 12012,
    "path": "../public/images/logo.webp"
  },
  "/_nuxt/1gallery.n3sT0Igd.webp": {
    "type": "image/webp",
    "etag": "\"284e-4ZntclSP+Nrpw5jhw2/LMI0yf9g\"",
    "mtime": "2025-04-30T00:43:21.033Z",
    "size": 10318,
    "path": "../public/_nuxt/1gallery.n3sT0Igd.webp"
  },
  "/_nuxt/2gallery.BtNliHdW.webp": {
    "type": "image/webp",
    "etag": "\"2b6e-R6bfIYZA9tcqAf/cHniy3H8iM3U\"",
    "mtime": "2025-04-30T00:43:21.034Z",
    "size": 11118,
    "path": "../public/_nuxt/2gallery.BtNliHdW.webp"
  },
  "/_nuxt/3rhZbwJt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"34e2-9w1sX/Mt5PxuUAWiAeo4K2hygYw\"",
    "mtime": "2025-04-30T00:43:21.104Z",
    "size": 13538,
    "path": "../public/_nuxt/3rhZbwJt.js"
  },
  "/_nuxt/about.CUSJXiq0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6064-IkKcpwzSr+3YqYardjOOm3oRPcE\"",
    "mtime": "2025-04-30T00:43:21.074Z",
    "size": 24676,
    "path": "../public/_nuxt/about.CUSJXiq0.css"
  },
  "/_nuxt/AU-xyxxU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5c-x9VF7eC2SxwP50TPJ4ufuaqx6Fs\"",
    "mtime": "2025-04-30T00:43:21.115Z",
    "size": 92,
    "path": "../public/_nuxt/AU-xyxxU.js"
  },
  "/_nuxt/aw9mV07l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5d-szENYo3+g1i8Ab8yb7ByW2r+uUU\"",
    "mtime": "2025-04-30T00:43:21.111Z",
    "size": 93,
    "path": "../public/_nuxt/aw9mV07l.js"
  },
  "/_nuxt/B11guqpk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ecb-LApK4IkwCwYRR0/vxBsZJ5TFhbg\"",
    "mtime": "2025-04-30T00:43:21.092Z",
    "size": 3787,
    "path": "../public/_nuxt/B11guqpk.js"
  },
  "/_nuxt/B2dt-kbX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2af4-ycUohYyEdYyF8aViNadRzhOwnzs\"",
    "mtime": "2025-04-30T00:43:21.116Z",
    "size": 10996,
    "path": "../public/_nuxt/B2dt-kbX.js"
  },
  "/_nuxt/BauFM9Yt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"193bd-atxOUmo+PAvr7NhGqgavK7NEFhw\"",
    "mtime": "2025-04-30T00:43:21.105Z",
    "size": 103357,
    "path": "../public/_nuxt/BauFM9Yt.js"
  },
  "/_nuxt/BJ8Q-El8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"165a-cwGl2P+sMQ/3YX6LB1XQ0apug78\"",
    "mtime": "2025-04-30T00:43:21.116Z",
    "size": 5722,
    "path": "../public/_nuxt/BJ8Q-El8.js"
  },
  "/_nuxt/BJiWI-6A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c4b-0JFr9Ar7U1RmxqaMtmwgBzE7Lo8\"",
    "mtime": "2025-04-30T00:43:21.104Z",
    "size": 3147,
    "path": "../public/_nuxt/BJiWI-6A.js"
  },
  "/_nuxt/BlogCardComponent.DtHQCkP2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d34-V5S/8uhz2EdtBHnU9qHqg+zzRRk\"",
    "mtime": "2025-04-30T00:43:21.075Z",
    "size": 7476,
    "path": "../public/_nuxt/BlogCardComponent.DtHQCkP2.css"
  },
  "/_nuxt/BLxBpPpy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6b-9dYiWKU+rLiBIel05UVNoenUxU0\"",
    "mtime": "2025-04-30T00:43:21.106Z",
    "size": 107,
    "path": "../public/_nuxt/BLxBpPpy.js"
  },
  "/_nuxt/BR39Aq3W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3f920-As83DGhI02n32+0RQ6nRhk01WmA\"",
    "mtime": "2025-04-30T00:43:21.092Z",
    "size": 260384,
    "path": "../public/_nuxt/BR39Aq3W.js"
  },
  "/_nuxt/Breadcrumbs.ChH8vNlz.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b66-ODZN9SD6HUMXOfLSpDJqeKYd3/U\"",
    "mtime": "2025-04-30T00:43:21.091Z",
    "size": 7014,
    "path": "../public/_nuxt/Breadcrumbs.ChH8vNlz.css"
  },
  "/_nuxt/Brh7AdxR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d54-PhSrzx2OsZcsebsFe7Ihe07lihU\"",
    "mtime": "2025-04-30T00:43:21.092Z",
    "size": 3412,
    "path": "../public/_nuxt/Brh7AdxR.js"
  },
  "/_nuxt/BRJFEVq2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"133-4jBxDGhhfSpKEHPSKVqOJNqG/Jo\"",
    "mtime": "2025-04-30T00:43:21.116Z",
    "size": 307,
    "path": "../public/_nuxt/BRJFEVq2.js"
  },
  "/_nuxt/BrQoWxI6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"438-5L+FOf1eO5nm5w/EiS0yrMwgYwE\"",
    "mtime": "2025-04-30T00:43:21.115Z",
    "size": 1080,
    "path": "../public/_nuxt/BrQoWxI6.js"
  },
  "/_nuxt/BSBCrK71.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5f51-vcO92pXsxXfzCJTNpd2X7RUAA3c\"",
    "mtime": "2025-04-30T00:43:21.093Z",
    "size": 24401,
    "path": "../public/_nuxt/BSBCrK71.js"
  },
  "/_nuxt/BsWcKuhG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c6b-oz9s/TuI/PbR5Joy/MATOjsF3lI\"",
    "mtime": "2025-04-30T00:43:21.105Z",
    "size": 3179,
    "path": "../public/_nuxt/BsWcKuhG.js"
  },
  "/_nuxt/BU3UAYJD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f3bc-q4ooQHKeTfKToKJtHV4SPnxxmzQ\"",
    "mtime": "2025-04-30T00:43:21.115Z",
    "size": 127932,
    "path": "../public/_nuxt/BU3UAYJD.js"
  },
  "/_nuxt/commercerenovation.DA3ZQBhd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41c9-eBIm5FJs3CsV5zBXMmojZwmGEcE\"",
    "mtime": "2025-04-30T00:43:21.091Z",
    "size": 16841,
    "path": "../public/_nuxt/commercerenovation.DA3ZQBhd.css"
  },
  "/_nuxt/contact.DAlJmMFE.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2ac3-ZTxyI2DlDnAGNTXq20gNrnYmcrg\"",
    "mtime": "2025-04-30T00:43:21.074Z",
    "size": 10947,
    "path": "../public/_nuxt/contact.DAlJmMFE.css"
  },
  "/_nuxt/CostCalculator.Cb_ANkVD.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4827-Qbl1cjP1VpgLNstE76rvp5dgnp4\"",
    "mtime": "2025-04-30T00:43:21.091Z",
    "size": 18471,
    "path": "../public/_nuxt/CostCalculator.Cb_ANkVD.css"
  },
  "/_nuxt/CQdmqNZl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17e4-0AxWRiJ+C72CMupNyynWtF7CzAQ\"",
    "mtime": "2025-04-30T00:43:21.106Z",
    "size": 6116,
    "path": "../public/_nuxt/CQdmqNZl.js"
  },
  "/_nuxt/CSt9E08P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e39-u/DXlZZ3/zTuZFlo446amBGJJcs\"",
    "mtime": "2025-04-30T00:43:21.110Z",
    "size": 7737,
    "path": "../public/_nuxt/CSt9E08P.js"
  },
  "/_nuxt/CuZ6OBWP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"56a-wdsBYAOQdJgSDe+2l2hgSb/69E0\"",
    "mtime": "2025-04-30T00:43:21.105Z",
    "size": 1386,
    "path": "../public/_nuxt/CuZ6OBWP.js"
  },
  "/_nuxt/CxFs86tY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2de-HFhZ3u+4aAKZLPQiN8+DAB6RVEA\"",
    "mtime": "2025-04-30T00:43:21.105Z",
    "size": 734,
    "path": "../public/_nuxt/CxFs86tY.js"
  },
  "/_nuxt/DDW3wzP8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6e-dlDZWYKV/0mu6iMssf0dohpuuQs\"",
    "mtime": "2025-04-30T00:43:21.106Z",
    "size": 110,
    "path": "../public/_nuxt/DDW3wzP8.js"
  },
  "/_nuxt/default.CgBtdUDn.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"bf3a-NyTt4CeZkUu4f2udEDj7rJNPrTE\"",
    "mtime": "2025-04-30T00:43:21.091Z",
    "size": 48954,
    "path": "../public/_nuxt/default.CgBtdUDn.css"
  },
  "/_nuxt/DhSzuVk9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18dd-ME4L6+UyxqOsrHye1b94i73o4GM\"",
    "mtime": "2025-04-30T00:43:21.103Z",
    "size": 6365,
    "path": "../public/_nuxt/DhSzuVk9.js"
  },
  "/_nuxt/DhwGg-pJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1260-K9mQscX00k9CpvklaxEdWT3rqZA\"",
    "mtime": "2025-04-30T00:43:21.106Z",
    "size": 4704,
    "path": "../public/_nuxt/DhwGg-pJ.js"
  },
  "/_nuxt/DhzOpWoU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f6-Dgyrcl7zpOSxwERlYhRrrFazM2Q\"",
    "mtime": "2025-04-30T00:43:21.102Z",
    "size": 758,
    "path": "../public/_nuxt/DhzOpWoU.js"
  },
  "/_nuxt/DieHkpaM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2bbf-GuOzw+MsVJe6cpQtvQ6UGFTFUVk\"",
    "mtime": "2025-04-30T00:43:21.116Z",
    "size": 11199,
    "path": "../public/_nuxt/DieHkpaM.js"
  },
  "/_nuxt/DNPRkHf_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"57-wCG3TEH+3KhQWWJ24aVwlzkieDQ\"",
    "mtime": "2025-04-30T00:43:21.106Z",
    "size": 87,
    "path": "../public/_nuxt/DNPRkHf_.js"
  },
  "/_nuxt/DnYW8wEj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ac-t6rBVWx0gyAEmnHpAL3OCKSKCC4\"",
    "mtime": "2025-04-30T00:43:21.103Z",
    "size": 172,
    "path": "../public/_nuxt/DnYW8wEj.js"
  },
  "/_nuxt/DRck3iAt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6ff-l/UStnC0UoVjcmxUxK4u/0ktRmI\"",
    "mtime": "2025-04-30T00:43:21.100Z",
    "size": 1791,
    "path": "../public/_nuxt/DRck3iAt.js"
  },
  "/_nuxt/error-404.aNCZ2L4y.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"de4-d5CwDtpWnHUpXaML+72tom/eiuo\"",
    "mtime": "2025-04-30T00:43:21.074Z",
    "size": 3556,
    "path": "../public/_nuxt/error-404.aNCZ2L4y.css"
  },
  "/_nuxt/error-500.JESWioAZ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75c-fV/Kpv7gKQASn2YR5DW+3G4yaD4\"",
    "mtime": "2025-04-30T00:43:21.074Z",
    "size": 1884,
    "path": "../public/_nuxt/error-500.JESWioAZ.css"
  },
  "/_nuxt/fXG2xagO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"184c-uhWMGyH6/Tr71Jf2iVCmo6l3M94\"",
    "mtime": "2025-04-30T00:43:21.099Z",
    "size": 6220,
    "path": "../public/_nuxt/fXG2xagO.js"
  },
  "/_nuxt/Geometria-Bold.CuTOt3To.woff": {
    "type": "font/woff",
    "etag": "\"c490-rXorHfIZKejK/mecvcPj7MpAzpM\"",
    "mtime": "2025-04-30T00:43:21.056Z",
    "size": 50320,
    "path": "../public/_nuxt/Geometria-Bold.CuTOt3To.woff"
  },
  "/_nuxt/Geometria-Bold.D9T_SDY2.woff2": {
    "type": "font/woff2",
    "etag": "\"8920-EOgjyrlyrsCypBJSXzz8H6lMCik\"",
    "mtime": "2025-04-30T00:43:21.035Z",
    "size": 35104,
    "path": "../public/_nuxt/Geometria-Bold.D9T_SDY2.woff2"
  },
  "/_nuxt/Geometria-BoldItalic.D75kKE16.woff2": {
    "type": "font/woff2",
    "etag": "\"9210-oLGKAgPeckyM/us7tBpHv6PnsQo\"",
    "mtime": "2025-04-30T00:43:21.039Z",
    "size": 37392,
    "path": "../public/_nuxt/Geometria-BoldItalic.D75kKE16.woff2"
  },
  "/_nuxt/Geometria-BoldItalic.Nkn22jjp.woff": {
    "type": "font/woff",
    "etag": "\"d1b0-CPSCE2fxurDY8CMzh1uuHk65Pwc\"",
    "mtime": "2025-04-30T00:43:21.068Z",
    "size": 53680,
    "path": "../public/_nuxt/Geometria-BoldItalic.Nkn22jjp.woff"
  },
  "/_nuxt/Geometria-ExtraBold.BjfMB5BW.woff2": {
    "type": "font/woff2",
    "etag": "\"85ac-Jpr6BJrWVCvB0AAVwah/TUYr4II\"",
    "mtime": "2025-04-30T00:43:21.038Z",
    "size": 34220,
    "path": "../public/_nuxt/Geometria-ExtraBold.BjfMB5BW.woff2"
  },
  "/_nuxt/Geometria-ExtraBold.Dpcl46YG.woff": {
    "type": "font/woff",
    "etag": "\"c088-fbP4BBYC0vsLaC7zdVw57fVxmAQ\"",
    "mtime": "2025-04-30T00:43:21.057Z",
    "size": 49288,
    "path": "../public/_nuxt/Geometria-ExtraBold.Dpcl46YG.woff"
  },
  "/_nuxt/Geometria-ExtraBoldItalic.D961-KXw.woff2": {
    "type": "font/woff2",
    "etag": "\"8dfc-qwuJMpXYlvIdx5YqkTUTbWxZ+FE\"",
    "mtime": "2025-04-30T00:43:21.036Z",
    "size": 36348,
    "path": "../public/_nuxt/Geometria-ExtraBoldItalic.D961-KXw.woff2"
  },
  "/_nuxt/Geometria-ExtraBoldItalic.DPJ2076F.woff": {
    "type": "font/woff",
    "etag": "\"ce8c-1G1SuXB2WrIxnXzHQBpjEO+agDc\"",
    "mtime": "2025-04-30T00:43:21.057Z",
    "size": 52876,
    "path": "../public/_nuxt/Geometria-ExtraBoldItalic.DPJ2076F.woff"
  },
  "/_nuxt/Geometria-ExtraLight.BQod7mC7.woff": {
    "type": "font/woff",
    "etag": "\"cadc-6GilwAjBL3TTcrnE6eyM0G3uUrc\"",
    "mtime": "2025-04-30T00:43:21.057Z",
    "size": 51932,
    "path": "../public/_nuxt/Geometria-ExtraLight.BQod7mC7.woff"
  },
  "/_nuxt/Geometria-ExtraLight.DVL1VOX6.woff2": {
    "type": "font/woff2",
    "etag": "\"8e28-JcOqAQnwuccCewxLkiuK7HQ4W4o\"",
    "mtime": "2025-04-30T00:43:21.038Z",
    "size": 36392,
    "path": "../public/_nuxt/Geometria-ExtraLight.DVL1VOX6.woff2"
  },
  "/_nuxt/Geometria-ExtraLightItalic.0HW4MFb7.woff2": {
    "type": "font/woff2",
    "etag": "\"9448-dwQiDF4UPwQ5pGrbOsoYuXZU6ks\"",
    "mtime": "2025-04-30T00:43:21.039Z",
    "size": 37960,
    "path": "../public/_nuxt/Geometria-ExtraLightItalic.0HW4MFb7.woff2"
  },
  "/_nuxt/Geometria-ExtraLightItalic.DhxL2t2W.woff": {
    "type": "font/woff",
    "etag": "\"d5d8-8wI0c98c9dpi1QD2Xbnmo/Phf64\"",
    "mtime": "2025-04-30T00:43:21.069Z",
    "size": 54744,
    "path": "../public/_nuxt/Geometria-ExtraLightItalic.DhxL2t2W.woff"
  },
  "/_nuxt/Geometria-Heavy.Bt_wuKtH.woff2": {
    "type": "font/woff2",
    "etag": "\"8cf8-wncl3+yaX8oxf9mNQliPZCKlXHA\"",
    "mtime": "2025-04-30T00:43:21.039Z",
    "size": 36088,
    "path": "../public/_nuxt/Geometria-Heavy.Bt_wuKtH.woff2"
  },
  "/_nuxt/Geometria-Heavy.YB7v--wQ.woff": {
    "type": "font/woff",
    "etag": "\"c968-jB67BFkzVTBF1sdLwfyJqwWZe0E\"",
    "mtime": "2025-04-30T00:43:21.057Z",
    "size": 51560,
    "path": "../public/_nuxt/Geometria-Heavy.YB7v--wQ.woff"
  },
  "/_nuxt/Geometria-HeavyItalic.B7l9vW_3.woff2": {
    "type": "font/woff2",
    "etag": "\"9378-vmAL/hy083ZA8hUgiVIAbwZSkkU\"",
    "mtime": "2025-04-30T00:43:21.039Z",
    "size": 37752,
    "path": "../public/_nuxt/Geometria-HeavyItalic.B7l9vW_3.woff2"
  },
  "/_nuxt/Geometria-HeavyItalic.qYAlveRY.woff": {
    "type": "font/woff",
    "etag": "\"d468-+BYO3sRfUGE56ApfnTBvyCE6CSg\"",
    "mtime": "2025-04-30T00:43:21.070Z",
    "size": 54376,
    "path": "../public/_nuxt/Geometria-HeavyItalic.qYAlveRY.woff"
  },
  "/_nuxt/Geometria-Italic.DjtyZ4el.woff2": {
    "type": "font/woff2",
    "etag": "\"9324-/5N+JpgBY3Vi7jO/euhsjaY2Fhg\"",
    "mtime": "2025-04-30T00:43:21.039Z",
    "size": 37668,
    "path": "../public/_nuxt/Geometria-Italic.DjtyZ4el.woff2"
  },
  "/_nuxt/Geometria-Italic.wOqA233K.woff": {
    "type": "font/woff",
    "etag": "\"d2e8-PrehUBZEa9efzo+21yaxX7zpGNw\"",
    "mtime": "2025-04-30T00:43:21.072Z",
    "size": 53992,
    "path": "../public/_nuxt/Geometria-Italic.wOqA233K.woff"
  },
  "/_nuxt/Geometria-Light.3qV-3CZd.woff": {
    "type": "font/woff",
    "etag": "\"c3e8-U5el0ieCGAA37/fKiBrn2JBlKQY\"",
    "mtime": "2025-04-30T00:43:21.071Z",
    "size": 50152,
    "path": "../public/_nuxt/Geometria-Light.3qV-3CZd.woff"
  },
  "/_nuxt/Geometria-Light.BLBFzzpK.woff2": {
    "type": "font/woff2",
    "etag": "\"88ac-1NQKrBcNVUF0V0P+wuSHw4G9T9U\"",
    "mtime": "2025-04-30T00:43:21.039Z",
    "size": 34988,
    "path": "../public/_nuxt/Geometria-Light.BLBFzzpK.woff2"
  },
  "/_nuxt/Geometria-LightItalic.BPJ6be0n.woff": {
    "type": "font/woff",
    "etag": "\"d2b8-suoGWUcAlgw5cZUDPUcSeCWFAcE\"",
    "mtime": "2025-04-30T00:43:21.073Z",
    "size": 53944,
    "path": "../public/_nuxt/Geometria-LightItalic.BPJ6be0n.woff"
  },
  "/_nuxt/Geometria-LightItalic.m1AdrxLK.woff2": {
    "type": "font/woff2",
    "etag": "\"92f8-Fhneh+kXYPxhZ2AVrzl9FVjIRtM\"",
    "mtime": "2025-04-30T00:43:21.039Z",
    "size": 37624,
    "path": "../public/_nuxt/Geometria-LightItalic.m1AdrxLK.woff2"
  },
  "/_nuxt/Geometria-Medium.BDH3VfQl.woff2": {
    "type": "font/woff2",
    "etag": "\"8ab0-9RCudVHiiCx0yvKqkd/8/CedvKo\"",
    "mtime": "2025-04-30T00:43:21.039Z",
    "size": 35504,
    "path": "../public/_nuxt/Geometria-Medium.BDH3VfQl.woff2"
  },
  "/_nuxt/Geometria-Medium.C-he5e4s.woff": {
    "type": "font/woff",
    "etag": "\"c66c-h+y18W1x5dQhcCe+a23gDXNfvY8\"",
    "mtime": "2025-04-30T00:43:21.072Z",
    "size": 50796,
    "path": "../public/_nuxt/Geometria-Medium.C-he5e4s.woff"
  },
  "/_nuxt/Geometria-MediumItalic.Btie_m-L.woff": {
    "type": "font/woff",
    "etag": "\"d3d4-lwGB5za1g76/nZOGmna1o6dHJfE\"",
    "mtime": "2025-04-30T00:43:21.070Z",
    "size": 54228,
    "path": "../public/_nuxt/Geometria-MediumItalic.Btie_m-L.woff"
  },
  "/_nuxt/Geometria-MediumItalic.KU1MY5m_.woff2": {
    "type": "font/woff2",
    "etag": "\"942c-5cicdmix2m2fhMLKDT2mxeac1y0\"",
    "mtime": "2025-04-30T00:43:21.039Z",
    "size": 37932,
    "path": "../public/_nuxt/Geometria-MediumItalic.KU1MY5m_.woff2"
  },
  "/_nuxt/Geometria-Thin.D12WcruD.woff": {
    "type": "font/woff",
    "etag": "\"c0ac-l6lGQ1tzha9m2aDx4KIK0TTZ/yU\"",
    "mtime": "2025-04-30T00:43:21.073Z",
    "size": 49324,
    "path": "../public/_nuxt/Geometria-Thin.D12WcruD.woff"
  },
  "/_nuxt/Geometria-Thin.DOEHZ6Ce.woff2": {
    "type": "font/woff2",
    "etag": "\"8498-Zji6o4QQCOv5eJ7K2BcvK0zD/2A\"",
    "mtime": "2025-04-30T00:43:21.039Z",
    "size": 33944,
    "path": "../public/_nuxt/Geometria-Thin.DOEHZ6Ce.woff2"
  },
  "/_nuxt/Geometria-ThinItalic.C38qYZVl.woff": {
    "type": "font/woff",
    "etag": "\"d008-wNUdGmDtPobzOU/Xk66p9zP7hUw\"",
    "mtime": "2025-04-30T00:43:21.072Z",
    "size": 53256,
    "path": "../public/_nuxt/Geometria-ThinItalic.C38qYZVl.woff"
  },
  "/_nuxt/Geometria-ThinItalic.CAVGHMbh.woff2": {
    "type": "font/woff2",
    "etag": "\"8e38-tuWs8kT5NtMpWcUT+/mdLtLtjoM\"",
    "mtime": "2025-04-30T00:43:21.039Z",
    "size": 36408,
    "path": "../public/_nuxt/Geometria-ThinItalic.CAVGHMbh.woff2"
  },
  "/_nuxt/Geometria.CDC6jBKd.woff2": {
    "type": "font/woff2",
    "etag": "\"8c88-E/Z+8SgLiYXYi6OsNhPwZBZvJiw\"",
    "mtime": "2025-04-30T00:43:21.038Z",
    "size": 35976,
    "path": "../public/_nuxt/Geometria.CDC6jBKd.woff2"
  },
  "/_nuxt/Geometria.DGhibgv0.woff": {
    "type": "font/woff",
    "etag": "\"c7e4-ZYP+ISmZQpisQqrHa7kWYY72wD0\"",
    "mtime": "2025-04-30T00:43:21.057Z",
    "size": 51172,
    "path": "../public/_nuxt/Geometria.DGhibgv0.woff"
  },
  "/_nuxt/HomeGallery.eEGvgs1Q.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"76ff-qHyHbdkZTEBexSc2I2T9//erkF8\"",
    "mtime": "2025-04-30T00:43:21.086Z",
    "size": 30463,
    "path": "../public/_nuxt/HomeGallery.eEGvgs1Q.css"
  },
  "/_nuxt/houserenovation.BgTwgLEe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41c6-DLnI5zpKznx8Kcn69y0tBLY91tM\"",
    "mtime": "2025-04-30T00:43:21.091Z",
    "size": 16838,
    "path": "../public/_nuxt/houserenovation.BgTwgLEe.css"
  },
  "/_nuxt/index.CPkbf1SB.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11d8c-gHK+k2H2oXHWgpmaabmGWcRd5Xo\"",
    "mtime": "2025-04-30T00:43:21.074Z",
    "size": 73100,
    "path": "../public/_nuxt/index.CPkbf1SB.css"
  },
  "/_nuxt/index.D5ByUDd0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5618-1N009KkrXvh421JgyU1EM2mWgrs\"",
    "mtime": "2025-04-30T00:43:21.089Z",
    "size": 22040,
    "path": "../public/_nuxt/index.D5ByUDd0.css"
  },
  "/_nuxt/index.SE3Cg9O9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"300f-D3Yg77vHgCo7A+p6jbKS2e6faX0\"",
    "mtime": "2025-04-30T00:43:21.086Z",
    "size": 12303,
    "path": "../public/_nuxt/index.SE3Cg9O9.css"
  },
  "/_nuxt/index.sRG-U5YJ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"20fe-+QaXoRJcsZ+nPgIVfJ6PCoyH1PQ\"",
    "mtime": "2025-04-30T00:43:21.074Z",
    "size": 8446,
    "path": "../public/_nuxt/index.sRG-U5YJ.css"
  },
  "/_nuxt/interiordesign.N3b1s5JR.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"46f0-TTHkmi/LThNd9UvWgtRM8WWgQPQ\"",
    "mtime": "2025-04-30T00:43:21.090Z",
    "size": 18160,
    "path": "../public/_nuxt/interiordesign.N3b1s5JR.css"
  },
  "/_nuxt/m9rpspAq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19d9-Z8ki+1j0IWu2l/SWYu1y6g6bYYk\"",
    "mtime": "2025-04-30T00:43:21.105Z",
    "size": 6617,
    "path": "../public/_nuxt/m9rpspAq.js"
  },
  "/_nuxt/Mont-Black.BsjOAnB1.woff2": {
    "type": "font/woff2",
    "etag": "\"a76c-JU2+WR2N2uo9wGNoS1GZErpWKy8\"",
    "mtime": "2025-04-30T00:43:21.034Z",
    "size": 42860,
    "path": "../public/_nuxt/Mont-Black.BsjOAnB1.woff2"
  },
  "/_nuxt/Mont-Black.DWCNSOb8.woff": {
    "type": "font/woff",
    "etag": "\"f100-79sfKBkeesfuTqyiZieIkMK5VKg\"",
    "mtime": "2025-04-30T00:43:21.040Z",
    "size": 61696,
    "path": "../public/_nuxt/Mont-Black.DWCNSOb8.woff"
  },
  "/_nuxt/Mont-BlackItalic.CwZrEjS8.woff": {
    "type": "font/woff",
    "etag": "\"114e8-WNaCAKwxlchPSI54dJENLM27GAM\"",
    "mtime": "2025-04-30T00:43:21.053Z",
    "size": 70888,
    "path": "../public/_nuxt/Mont-BlackItalic.CwZrEjS8.woff"
  },
  "/_nuxt/Mont-BlackItalic.CyRKjOF3.woff2": {
    "type": "font/woff2",
    "etag": "\"c590-L8MWfFLlxNKuqlESdSy6sfxUbJA\"",
    "mtime": "2025-04-30T00:43:21.034Z",
    "size": 50576,
    "path": "../public/_nuxt/Mont-BlackItalic.CyRKjOF3.woff2"
  },
  "/_nuxt/Mont-Bold.BqFN7tcf.woff2": {
    "type": "font/woff2",
    "etag": "\"b090-bEL53+SklbaMiVMfL9uV19dAH34\"",
    "mtime": "2025-04-30T00:43:21.034Z",
    "size": 45200,
    "path": "../public/_nuxt/Mont-Bold.BqFN7tcf.woff2"
  },
  "/_nuxt/Mont-Bold.n4dASS6D.woff": {
    "type": "font/woff",
    "etag": "\"fc3c-8DUtmmRPrSArYxEqHG5PkMWIDkQ\"",
    "mtime": "2025-04-30T00:43:21.040Z",
    "size": 64572,
    "path": "../public/_nuxt/Mont-Bold.n4dASS6D.woff"
  },
  "/_nuxt/Mont-BoldItalic.B-SOZ7eM.woff2": {
    "type": "font/woff2",
    "etag": "\"beb8-ZT2Lv9xPdLWWFNr7rLJFLIcf40g\"",
    "mtime": "2025-04-30T00:43:21.035Z",
    "size": 48824,
    "path": "../public/_nuxt/Mont-BoldItalic.B-SOZ7eM.woff2"
  },
  "/_nuxt/Mont-BoldItalic.BCNE4LI4.woff": {
    "type": "font/woff",
    "etag": "\"10e60-tXDhk8rSIbjuQSw3BDP871LCKwg\"",
    "mtime": "2025-04-30T00:43:21.055Z",
    "size": 69216,
    "path": "../public/_nuxt/Mont-BoldItalic.BCNE4LI4.woff"
  },
  "/_nuxt/Mont-ExtraLight.BJbAd73P.woff2": {
    "type": "font/woff2",
    "etag": "\"b0bc-QUFEUxsttqfcrJboMegzP+alEiM\"",
    "mtime": "2025-04-30T00:43:21.050Z",
    "size": 45244,
    "path": "../public/_nuxt/Mont-ExtraLight.BJbAd73P.woff2"
  },
  "/_nuxt/Mont-ExtraLight.CmXN1XJh.woff": {
    "type": "font/woff",
    "etag": "\"fbb4-qUpYDvKpMioz+ZBltmRsed8LrTY\"",
    "mtime": "2025-04-30T00:43:21.049Z",
    "size": 64436,
    "path": "../public/_nuxt/Mont-ExtraLight.CmXN1XJh.woff"
  },
  "/_nuxt/Mont-ExtraLightDEMO.DdK10oFL.woff": {
    "type": "font/woff",
    "etag": "\"aa94-Hun8b04yYV1/jxEoXf2CYx3jgzI\"",
    "mtime": "2025-04-30T00:43:21.040Z",
    "size": 43668,
    "path": "../public/_nuxt/Mont-ExtraLightDEMO.DdK10oFL.woff"
  },
  "/_nuxt/Mont-ExtraLightDEMO.e87flT54.woff2": {
    "type": "font/woff2",
    "etag": "\"780c-GOAdVzgKQxQ35FyLJwER2uIQU4c\"",
    "mtime": "2025-04-30T00:43:21.037Z",
    "size": 30732,
    "path": "../public/_nuxt/Mont-ExtraLightDEMO.e87flT54.woff2"
  },
  "/_nuxt/Mont-ExtraLightItalic.CD_47VvG.woff2": {
    "type": "font/woff2",
    "etag": "\"c090-wW+L0DBk7F6LWYxmJXhlS3DYB3w\"",
    "mtime": "2025-04-30T00:43:21.034Z",
    "size": 49296,
    "path": "../public/_nuxt/Mont-ExtraLightItalic.CD_47VvG.woff2"
  },
  "/_nuxt/Mont-ExtraLightItalic.CK2wv9u8.woff": {
    "type": "font/woff",
    "etag": "\"110c0-am7K64oGS7p7iSk7An2nQWGmbrw\"",
    "mtime": "2025-04-30T00:43:21.055Z",
    "size": 69824,
    "path": "../public/_nuxt/Mont-ExtraLightItalic.CK2wv9u8.woff"
  },
  "/_nuxt/Mont-Heavy.BmbB5_t_.woff": {
    "type": "font/woff",
    "etag": "\"102d0-65VqZ6b5Ll1CIVRWCEyuDvVqKBg\"",
    "mtime": "2025-04-30T00:43:21.055Z",
    "size": 66256,
    "path": "../public/_nuxt/Mont-Heavy.BmbB5_t_.woff"
  },
  "/_nuxt/Mont-Heavy.Do6bxG3U.woff2": {
    "type": "font/woff2",
    "etag": "\"b704-BbcxHW71nPsY4ft8S28PiifhC4w\"",
    "mtime": "2025-04-30T00:43:21.034Z",
    "size": 46852,
    "path": "../public/_nuxt/Mont-Heavy.Do6bxG3U.woff2"
  },
  "/_nuxt/Mont-HeavyDEMO.Bbswln-w.woff": {
    "type": "font/woff",
    "etag": "\"b484-YFj5LDY7ZmojDN988hpyRGlFDgI\"",
    "mtime": "2025-04-30T00:43:21.055Z",
    "size": 46212,
    "path": "../public/_nuxt/Mont-HeavyDEMO.Bbswln-w.woff"
  },
  "/_nuxt/Mont-HeavyDEMO.Dg5p29V-.woff2": {
    "type": "font/woff2",
    "etag": "\"7fb8-c4OVXOY2ESS3PKAZiBYLTDGVP38\"",
    "mtime": "2025-04-30T00:43:21.035Z",
    "size": 32696,
    "path": "../public/_nuxt/Mont-HeavyDEMO.Dg5p29V-.woff2"
  },
  "/_nuxt/Mont-HeavyItalic.BcKBLBiS.woff2": {
    "type": "font/woff2",
    "etag": "\"c414-kmwywvy39p0zUtM/UxkRQJFvFzs\"",
    "mtime": "2025-04-30T00:43:21.035Z",
    "size": 50196,
    "path": "../public/_nuxt/Mont-HeavyItalic.BcKBLBiS.woff2"
  },
  "/_nuxt/Mont-HeavyItalic.DWlf6AcV.woff": {
    "type": "font/woff",
    "etag": "\"11410-liV4yB2I2E94nWgX4gDN7NJXfoE\"",
    "mtime": "2025-04-30T00:43:21.056Z",
    "size": 70672,
    "path": "../public/_nuxt/Mont-HeavyItalic.DWlf6AcV.woff"
  },
  "/_nuxt/Mont-Light.CKdk4hLG.woff2": {
    "type": "font/woff2",
    "etag": "\"b3f8-U8WVbElUd3mWbIR6yRiPweYLzNs\"",
    "mtime": "2025-04-30T00:43:21.035Z",
    "size": 46072,
    "path": "../public/_nuxt/Mont-Light.CKdk4hLG.woff2"
  },
  "/_nuxt/Mont-Light.C_G-mQ_Y.woff": {
    "type": "font/woff",
    "etag": "\"ffc4-f8kF1166flgnLN6FfUh6CULTHcs\"",
    "mtime": "2025-04-30T00:43:21.055Z",
    "size": 65476,
    "path": "../public/_nuxt/Mont-Light.C_G-mQ_Y.woff"
  },
  "/_nuxt/Mont-LightItalic.BvJaeIbQ.woff": {
    "type": "font/woff",
    "etag": "\"10e68-UExlnFYKh5f5sDx+SsJuK5PIS7Q\"",
    "mtime": "2025-04-30T00:43:21.056Z",
    "size": 69224,
    "path": "../public/_nuxt/Mont-LightItalic.BvJaeIbQ.woff"
  },
  "/_nuxt/Mont-LightItalic.Cugw370Z.woff2": {
    "type": "font/woff2",
    "etag": "\"be40-Xx0BHqn6w9dH/3wpH8vh8Ij6lfQ\"",
    "mtime": "2025-04-30T00:43:21.035Z",
    "size": 48704,
    "path": "../public/_nuxt/Mont-LightItalic.Cugw370Z.woff2"
  },
  "/_nuxt/Mont-Regular.DLHw5RiZ.woff2": {
    "type": "font/woff2",
    "etag": "\"b2c8-gboRjBH5p/8dWy0/ST8ZmvoqhhY\"",
    "mtime": "2025-04-30T00:43:21.034Z",
    "size": 45768,
    "path": "../public/_nuxt/Mont-Regular.DLHw5RiZ.woff2"
  },
  "/_nuxt/Mont-Regular.PzPxqNIg.woff": {
    "type": "font/woff",
    "etag": "\"fe8c-7QBsR8d/ydCBJSEy8I78e8TjhTk\"",
    "mtime": "2025-04-30T00:43:21.054Z",
    "size": 65164,
    "path": "../public/_nuxt/Mont-Regular.PzPxqNIg.woff"
  },
  "/_nuxt/Mont-RegularItalic.BmuVKizU.woff": {
    "type": "font/woff",
    "etag": "\"11088-X2R00fAjd6zZ41Ee/IjLmIwsLlk\"",
    "mtime": "2025-04-30T00:43:21.056Z",
    "size": 69768,
    "path": "../public/_nuxt/Mont-RegularItalic.BmuVKizU.woff"
  },
  "/_nuxt/Mont-RegularItalic.g3BV6eQv.woff2": {
    "type": "font/woff2",
    "etag": "\"c108-z+YWzLZbeUUTrhWZ5De8MwVofDI\"",
    "mtime": "2025-04-30T00:43:21.035Z",
    "size": 49416,
    "path": "../public/_nuxt/Mont-RegularItalic.g3BV6eQv.woff2"
  },
  "/_nuxt/Mont-SemiBold.4DGp4hNv.woff2": {
    "type": "font/woff2",
    "etag": "\"b340-3t22OsN6jaJmixXeirf2nyl1Xlo\"",
    "mtime": "2025-04-30T00:43:21.022Z",
    "size": 45888,
    "path": "../public/_nuxt/Mont-SemiBold.4DGp4hNv.woff2"
  },
  "/_nuxt/Mont-SemiBold.LG_tilKY.woff": {
    "type": "font/woff",
    "etag": "\"fe2c-9RmbH0UaqE+N/aycjGnTwxzPYU4\"",
    "mtime": "2025-04-30T00:43:21.056Z",
    "size": 65068,
    "path": "../public/_nuxt/Mont-SemiBold.LG_tilKY.woff"
  },
  "/_nuxt/Mont-SemiBoldItalic.B-YI6HQ2.woff2": {
    "type": "font/woff2",
    "etag": "\"c028-/Fv8LinZ9vIVwjY8r1uoXi+BsZs\"",
    "mtime": "2025-04-30T00:43:21.035Z",
    "size": 49192,
    "path": "../public/_nuxt/Mont-SemiBoldItalic.B-YI6HQ2.woff2"
  },
  "/_nuxt/Mont-SemiBoldItalic.DVFhk5x0.woff": {
    "type": "font/woff",
    "etag": "\"10f78-Wv8pbPpFg9pGNtnno0sUi5JogrQ\"",
    "mtime": "2025-04-30T00:43:21.073Z",
    "size": 69496,
    "path": "../public/_nuxt/Mont-SemiBoldItalic.DVFhk5x0.woff"
  },
  "/_nuxt/Mont-Thin.BiiTw2BN.woff2": {
    "type": "font/woff2",
    "etag": "\"b018-oNuvFzrSdjPgWu5LSp5Xi0FQCUk\"",
    "mtime": "2025-04-30T00:43:21.035Z",
    "size": 45080,
    "path": "../public/_nuxt/Mont-Thin.BiiTw2BN.woff2"
  },
  "/_nuxt/Mont-Thin.SnHWQ85P.woff": {
    "type": "font/woff",
    "etag": "\"fae0-V8hvUgkxhVCG1+HfqNXEKKH+43A\"",
    "mtime": "2025-04-30T00:43:21.056Z",
    "size": 64224,
    "path": "../public/_nuxt/Mont-Thin.SnHWQ85P.woff"
  },
  "/_nuxt/Mont-ThinItalic.Baf2FTiU.woff2": {
    "type": "font/woff2",
    "etag": "\"bd88-tUuPhmPDAXSVVvhn1iqPefnfraw\"",
    "mtime": "2025-04-30T00:43:21.019Z",
    "size": 48520,
    "path": "../public/_nuxt/Mont-ThinItalic.Baf2FTiU.woff2"
  },
  "/_nuxt/Mont-ThinItalic.CmKjrnux.woff": {
    "type": "font/woff",
    "etag": "\"10db8-WAam57668aZ3Q/mGqYSknaAQhLY\"",
    "mtime": "2025-04-30T00:43:21.073Z",
    "size": 69048,
    "path": "../public/_nuxt/Mont-ThinItalic.CmKjrnux.woff"
  },
  "/_nuxt/OfferComponent.CRmOlIAp.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ec6-w02vkQ3IgNWVeMixIBbzkWtvquY\"",
    "mtime": "2025-04-30T00:43:21.090Z",
    "size": 7878,
    "path": "../public/_nuxt/OfferComponent.CRmOlIAp.css"
  },
  "/_nuxt/pHbmU86C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6a-h6ivNFXYbHZkkaXFb3QpduXliVA\"",
    "mtime": "2025-04-30T00:43:21.106Z",
    "size": 106,
    "path": "../public/_nuxt/pHbmU86C.js"
  },
  "/_nuxt/QkP5bEFD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1af9-jJJUE71kLY5uRtD2yI708uyqTmg\"",
    "mtime": "2025-04-30T00:43:21.092Z",
    "size": 6905,
    "path": "../public/_nuxt/QkP5bEFD.js"
  },
  "/_nuxt/RNIjkkUT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cb6-S5EDz/FWsU9IHnWCMC7Wc030c3c\"",
    "mtime": "2025-04-30T00:43:21.116Z",
    "size": 3254,
    "path": "../public/_nuxt/RNIjkkUT.js"
  },
  "/_nuxt/search.CWJw5t-5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c8c-g2JXakO0XQvh/i87M8t6A1Ogufc\"",
    "mtime": "2025-04-30T00:43:21.074Z",
    "size": 15500,
    "path": "../public/_nuxt/search.CWJw5t-5.css"
  },
  "/_nuxt/SearchComponent.9oRWQpFC.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f70-3exuXM5za5X1bjYXfvnMTe+S2dQ\"",
    "mtime": "2025-04-30T00:43:21.085Z",
    "size": 8048,
    "path": "../public/_nuxt/SearchComponent.9oRWQpFC.css"
  },
  "/_nuxt/SocialMedias.B0bqHaTZ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c53-KwrWWBL218bbxn6SPtsGlNikMi0\"",
    "mtime": "2025-04-30T00:43:21.092Z",
    "size": 7251,
    "path": "../public/_nuxt/SocialMedias.B0bqHaTZ.css"
  },
  "/_nuxt/UafJ8HZz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"194a-1WUN1CgKQJga9R6ExlylVkqnnX4\"",
    "mtime": "2025-04-30T00:43:21.105Z",
    "size": 6474,
    "path": "../public/_nuxt/UafJ8HZz.js"
  },
  "/_nuxt/UpLLiynI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"51-Kt3Nnnr2yo8yP49S5V/7xVL6O60\"",
    "mtime": "2025-04-30T00:43:21.116Z",
    "size": 81,
    "path": "../public/_nuxt/UpLLiynI.js"
  },
  "/_nuxt/VSjb7x6j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"821-gigzbXh4+tTEXE7oYetcG7utTAs\"",
    "mtime": "2025-04-30T00:43:21.093Z",
    "size": 2081,
    "path": "../public/_nuxt/VSjb7x6j.js"
  },
  "/_nuxt/Zcgu5jBt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12f8-eZ7Kl7BZpGimSWViMEufnz/O++U\"",
    "mtime": "2025-04-30T00:43:21.106Z",
    "size": 4856,
    "path": "../public/_nuxt/Zcgu5jBt.js"
  },
  "/_nuxt/_slug_.DGz11bZx.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4749-fDcU0iXAAMEI3UzTOuzBZTCZjxk\"",
    "mtime": "2025-04-30T00:43:21.083Z",
    "size": 18249,
    "path": "../public/_nuxt/_slug_.DGz11bZx.css"
  },
  "/_nuxt/_slug_.DNYykYUN.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"53e3-NfdlIlRGy/xUuv41lUeP1dnLtUY\"",
    "mtime": "2025-04-30T00:43:21.090Z",
    "size": 21475,
    "path": "../public/_nuxt/_slug_.DNYykYUN.css"
  },
  "/images/blog/left-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"457-XaXPerJeEY42vBYVMVbKUH61Trc\"",
    "mtime": "2025-02-15T14:24:21.909Z",
    "size": 1111,
    "path": "../public/images/blog/left-arrow.svg"
  },
  "/images/blog/loupe.svg": {
    "type": "image/svg+xml",
    "etag": "\"313-oW78EIAlt7VI4GUIFSJ7ulJASeg\"",
    "mtime": "2025-02-19T20:55:19.264Z",
    "size": 787,
    "path": "../public/images/blog/loupe.svg"
  },
  "/images/blog/right-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"45f-pqPwQdclDWjm5sLc449W6PM6srg\"",
    "mtime": "2025-02-15T14:24:32.978Z",
    "size": 1119,
    "path": "../public/images/blog/right-arrow.svg"
  },
  "/images/contact-us/2.webp": {
    "type": "image/webp",
    "etag": "\"12ada-atD54qHrnl1o4KABs0BGkC/gpM8\"",
    "mtime": "2025-04-09T15:29:48.330Z",
    "size": 76506,
    "path": "../public/images/contact-us/2.webp"
  },
  "/images/contact-us/arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"44f-LVMV6EholTm4basmHBWYpo2lDPg\"",
    "mtime": "2025-02-14T22:19:56.161Z",
    "size": 1103,
    "path": "../public/images/contact-us/arrow.svg"
  },
  "/images/contact-us/main.webp": {
    "type": "image/webp",
    "etag": "\"178ba-4v5nQuptXqDa4nr4ZnX6FAMMHhY\"",
    "mtime": "2025-04-09T15:29:48.372Z",
    "size": 96442,
    "path": "../public/images/contact-us/main.webp"
  },
  "/images/contact-us/submit-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"467-0eywCKfFDRpkhwmH7cn1VqWy53A\"",
    "mtime": "2025-02-14T22:56:05.318Z",
    "size": 1127,
    "path": "../public/images/contact-us/submit-arrow.svg"
  },
  "/images/about/1.webp": {
    "type": "image/webp",
    "etag": "\"1408e-l/joXSmUp9r69rTZs7r2yYPBJ1M\"",
    "mtime": "2025-04-09T15:29:47.835Z",
    "size": 82062,
    "path": "../public/images/about/1.webp"
  },
  "/images/about/2.webp": {
    "type": "image/webp",
    "etag": "\"4a02-pAYWeomo6g1N6Q+lOECEBgGYtpQ\"",
    "mtime": "2025-04-09T15:29:47.835Z",
    "size": 18946,
    "path": "../public/images/about/2.webp"
  },
  "/images/about/3.webp": {
    "type": "image/webp",
    "etag": "\"7cae-OlttJY+KOLI5YzbrXVbN5d2yFKA\"",
    "mtime": "2025-04-09T15:29:47.836Z",
    "size": 31918,
    "path": "../public/images/about/3.webp"
  },
  "/images/about/4.webp": {
    "type": "image/webp",
    "etag": "\"2936-Y9O4/J2obHQ/Vo0DDEXHZOOItFk\"",
    "mtime": "2025-04-09T15:29:47.837Z",
    "size": 10550,
    "path": "../public/images/about/4.webp"
  },
  "/images/about/5.webp": {
    "type": "image/webp",
    "etag": "\"7d90-9ssnjYH7l950NSv9hPmviR8XV3E\"",
    "mtime": "2025-04-09T15:29:47.884Z",
    "size": 32144,
    "path": "../public/images/about/5.webp"
  },
  "/images/about/6.webp": {
    "type": "image/webp",
    "etag": "\"4024-6Jc51NERprQCXc+YS5YWgC0JZg8\"",
    "mtime": "2025-04-09T15:29:47.894Z",
    "size": 16420,
    "path": "../public/images/about/6.webp"
  },
  "/images/about/arrow-down.svg": {
    "type": "image/svg+xml",
    "etag": "\"469-pJPm9B7fjpRaSJiwcZ0ZqkHuaLk\"",
    "mtime": "2025-01-20T19:00:04.415Z",
    "size": 1129,
    "path": "../public/images/about/arrow-down.svg"
  },
  "/images/about/arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"453-IUATiPy4O4Rgmg8/G6m1v1Zu0CE\"",
    "mtime": "2025-01-19T22:06:15.191Z",
    "size": 1107,
    "path": "../public/images/about/arrow.svg"
  },
  "/images/about/camile.webp": {
    "type": "image/webp",
    "etag": "\"34bc-qfZs2HYp2NNIeOoVfZpWBSjHw1A\"",
    "mtime": "2025-04-09T15:29:47.957Z",
    "size": 13500,
    "path": "../public/images/about/camile.webp"
  },
  "/images/about/clara.webp": {
    "type": "image/webp",
    "etag": "\"4966-c2X3vzkpdsjhvTFUsxJNFDknOlM\"",
    "mtime": "2025-04-09T15:29:48.005Z",
    "size": 18790,
    "path": "../public/images/about/clara.webp"
  },
  "/images/about/contact-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"450-0Bew7S9JvhoNpgCA3mfZSeC7OBw\"",
    "mtime": "2025-01-22T14:18:56.145Z",
    "size": 1104,
    "path": "../public/images/about/contact-arrow.svg"
  },
  "/images/about/diag-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"456-gkRfrXgaRXBS/J+Z2YCO+ZedkUU\"",
    "mtime": "2025-02-02T02:20:24.713Z",
    "size": 1110,
    "path": "../public/images/about/diag-arrow.svg"
  },
  "/images/about/emil.webp": {
    "type": "image/webp",
    "etag": "\"64a6-fNAhcNxzVxYd/233dFjc94jvrdI\"",
    "mtime": "2025-04-09T15:29:48.012Z",
    "size": 25766,
    "path": "../public/images/about/emil.webp"
  },
  "/images/about/julien.webp": {
    "type": "image/webp",
    "etag": "\"5f0c-299n6b+QQbyhJd8T0FneVr/ta7k\"",
    "mtime": "2025-04-09T15:29:48.044Z",
    "size": 24332,
    "path": "../public/images/about/julien.webp"
  },
  "/images/about/sophie.webp": {
    "type": "image/webp",
    "etag": "\"2b12-29X6Ad0OqCFSKCg8YKMJGNX0IJ8\"",
    "mtime": "2025-04-09T15:29:48.059Z",
    "size": 11026,
    "path": "../public/images/about/sophie.webp"
  },
  "/images/about/tomas.webp": {
    "type": "image/webp",
    "etag": "\"1e96-Ctym1txnGqz0qAA5bNtO4+IsqSU\"",
    "mtime": "2025-04-09T15:29:48.073Z",
    "size": 7830,
    "path": "../public/images/about/tomas.webp"
  },
  "/images/flags/arrow.png": {
    "type": "image/png",
    "etag": "\"121-lHym2qO79ZbJZdowicOwiVhZKFk\"",
    "mtime": "2025-04-27T19:56:12.373Z",
    "size": 289,
    "path": "../public/images/flags/arrow.png"
  },
  "/images/flags/fr.svg": {
    "type": "image/svg+xml",
    "etag": "\"124-4965m4l+hd8iO21dY2KOptnHYsE\"",
    "mtime": "2025-02-16T19:06:49.823Z",
    "size": 292,
    "path": "../public/images/flags/fr.svg"
  },
  "/images/flags/France.png": {
    "type": "image/png",
    "etag": "\"6e-k254ze02ppa9rO4jHVcuI1Hqj3A\"",
    "mtime": "2013-03-08T13:55:29.000Z",
    "size": 110,
    "path": "../public/images/flags/France.png"
  },
  "/images/flags/gb.svg": {
    "type": "image/svg+xml",
    "etag": "\"21a-K1FIoYuQ+TPke/iVwm1hpS0h2dg\"",
    "mtime": "2025-02-16T19:06:56.992Z",
    "size": 538,
    "path": "../public/images/flags/gb.svg"
  },
  "/images/flags/Germany.png": {
    "type": "image/png",
    "etag": "\"6f-ScK/gI1DayZBOSm6zPY1qT9wqj8\"",
    "mtime": "2013-03-08T13:55:31.000Z",
    "size": 111,
    "path": "../public/images/flags/Germany.png"
  },
  "/images/flags/Italy.png": {
    "type": "image/png",
    "etag": "\"6e-g3LqcW69o/PKJrGK3CKcNfjiDX4\"",
    "mtime": "2013-03-08T13:55:41.000Z",
    "size": 110,
    "path": "../public/images/flags/Italy.png"
  },
  "/images/flags/language.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d8-vttAFd9B7n2wGQsnV0+BmagsteU\"",
    "mtime": "2025-02-27T14:48:59.579Z",
    "size": 728,
    "path": "../public/images/flags/language.svg"
  },
  "/images/flags/ru.svg": {
    "type": "image/svg+xml",
    "etag": "\"11e-B3o09A5tFm4GGAwuWr1bMiqN5q8\"",
    "mtime": "2025-02-16T19:07:02.103Z",
    "size": 286,
    "path": "../public/images/flags/ru.svg"
  },
  "/images/flags/Russia.png": {
    "type": "image/png",
    "etag": "\"6c-AnWwbb55tMPitTwlILXesO+ELkk\"",
    "mtime": "2013-03-08T13:56:12.000Z",
    "size": 108,
    "path": "../public/images/flags/Russia.png"
  },
  "/images/flags/Spain.png": {
    "type": "image/png",
    "etag": "\"138-hj7PHeDHKhEfSpwq+nz+p6+LZfo\"",
    "mtime": "2013-03-08T13:56:25.000Z",
    "size": 312,
    "path": "../public/images/flags/Spain.png"
  },
  "/images/flags/Ukraine.png": {
    "type": "image/png",
    "etag": "\"6f-THmKW+DXGXDvgx0VFVAmGSrh9JA\"",
    "mtime": "2013-03-08T13:56:34.000Z",
    "size": 111,
    "path": "../public/images/flags/Ukraine.png"
  },
  "/images/flags/United-Kingdom.png": {
    "type": "image/png",
    "etag": "\"272-UkZw6OOsbvQ3VdziuMD+zyVPH7Y\"",
    "mtime": "2013-03-08T13:56:35.000Z",
    "size": 626,
    "path": "../public/images/flags/United-Kingdom.png"
  },
  "/images/home/2.webp": {
    "type": "image/webp",
    "etag": "\"63aa-Wqpp2DbroHrmD4aplRnmSnWH9GM\"",
    "mtime": "2025-04-09T15:29:48.386Z",
    "size": 25514,
    "path": "../public/images/home/2.webp"
  },
  "/images/home/2darken.webp": {
    "type": "image/webp",
    "etag": "\"5a06-iM6dZQRnUCt73dDruF+9sTMWITc\"",
    "mtime": "2025-04-09T15:29:48.436Z",
    "size": 23046,
    "path": "../public/images/home/2darken.webp"
  },
  "/images/home/3.webp": {
    "type": "image/webp",
    "etag": "\"a932-lEYjK2tIHt9YQYHUWup44Q8UYnA\"",
    "mtime": "2025-04-09T15:29:48.536Z",
    "size": 43314,
    "path": "../public/images/home/3.webp"
  },
  "/images/home/4.webp": {
    "type": "image/webp",
    "etag": "\"ad92-OPFl1XKvO9/RhH/J/y+13bFqZT0\"",
    "mtime": "2025-04-09T15:29:48.539Z",
    "size": 44434,
    "path": "../public/images/home/4.webp"
  },
  "/images/home/arrow-left.webp": {
    "type": "image/webp",
    "etag": "\"b4-ErCkIi7tpGQBes5GHDCDp7U81m8\"",
    "mtime": "2025-04-09T15:29:48.621Z",
    "size": 180,
    "path": "../public/images/home/arrow-left.webp"
  },
  "/images/home/arrow-right.webp": {
    "type": "image/webp",
    "etag": "\"98-pnZGJMOdkjLi+xOA4ya/tjsQo0w\"",
    "mtime": "2025-04-09T15:29:48.626Z",
    "size": 152,
    "path": "../public/images/home/arrow-right.webp"
  },
  "/images/home/diag-arrow.webp": {
    "type": "image/webp",
    "etag": "\"ca-Gyj3+4OKSuqABoUxz44lS+1FG4w\"",
    "mtime": "2025-04-09T15:29:48.631Z",
    "size": 202,
    "path": "../public/images/home/diag-arrow.webp"
  },
  "/images/home/diag-arrow2.webp": {
    "type": "image/webp",
    "etag": "\"158-qE8+b0VUk6N6MOwF/wUBOsOoA3s\"",
    "mtime": "2025-04-09T15:29:48.635Z",
    "size": 344,
    "path": "../public/images/home/diag-arrow2.webp"
  },
  "/images/home/Julien.webp": {
    "type": "image/webp",
    "etag": "\"d86-VQkLzVL8xPpKM+ZonX3tCxL1cRo\"",
    "mtime": "2025-04-09T15:29:48.639Z",
    "size": 3462,
    "path": "../public/images/home/Julien.webp"
  },
  "/images/home/main.webp": {
    "type": "image/webp",
    "etag": "\"50baa-j9HkOy8L7HLqVE8lDWG4d5JYrE8\"",
    "mtime": "2025-04-09T15:29:48.648Z",
    "size": 330666,
    "path": "../public/images/home/main.webp"
  },
  "/images/home/news1.webp": {
    "type": "image/webp",
    "etag": "\"564e-OJZr8IxONEfsf4FCaAowBLmgF0I\"",
    "mtime": "2025-04-09T15:29:48.693Z",
    "size": 22094,
    "path": "../public/images/home/news1.webp"
  },
  "/images/home/offer-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"450-0Bew7S9JvhoNpgCA3mfZSeC7OBw\"",
    "mtime": "2025-01-06T18:52:47.872Z",
    "size": 1104,
    "path": "../public/images/home/offer-arrow.svg"
  },
  "/images/home/projects1.webp": {
    "type": "image/webp",
    "etag": "\"5e3c-Dks40N5jn9yuDLAy0iV1gora1yQ\"",
    "mtime": "2025-04-09T15:29:48.792Z",
    "size": 24124,
    "path": "../public/images/home/projects1.webp"
  },
  "/images/loader/devider.webp": {
    "type": "image/webp",
    "etag": "\"51e-kZt/5reILfg66TTn+qmtgTUojgg\"",
    "mtime": "2025-04-08T15:30:01.735Z",
    "size": 1310,
    "path": "../public/images/loader/devider.webp"
  },
  "/images/loader/logo-white.webp": {
    "type": "image/webp",
    "etag": "\"32c48-xDoLjEeNWeb3DZY6gW+Nhgl8/5U\"",
    "mtime": "2025-04-08T15:26:45.794Z",
    "size": 207944,
    "path": "../public/images/loader/logo-white.webp"
  },
  "/images/news/ideas.webp": {
    "type": "image/webp",
    "etag": "\"660e-2TmT2u5fA1v9PHc8J6DoN0Jst7k\"",
    "mtime": "2025-04-09T15:29:48.856Z",
    "size": 26126,
    "path": "../public/images/news/ideas.webp"
  },
  "/images/news/illumination.webp": {
    "type": "image/webp",
    "etag": "\"564e-OJZr8IxONEfsf4FCaAowBLmgF0I\"",
    "mtime": "2025-04-09T15:29:48.884Z",
    "size": 22094,
    "path": "../public/images/news/illumination.webp"
  },
  "/images/news/office.webp": {
    "type": "image/webp",
    "etag": "\"47aa-HkcIfWx4IlhSIIu8sX0KhlWylSs\"",
    "mtime": "2025-04-09T15:29:48.922Z",
    "size": 18346,
    "path": "../public/images/news/office.webp"
  },
  "/images/news/trends.webp": {
    "type": "image/webp",
    "etag": "\"32d2-XNRX/gDAbSUXm/acFlkaAZVzx/0\"",
    "mtime": "2025-04-09T15:29:48.945Z",
    "size": 13010,
    "path": "../public/images/news/trends.webp"
  },
  "/images/portfolio/1.webp": {
    "type": "image/webp",
    "etag": "\"22a2a-dnhLo6QB3g1+QeYfUmSJlyp/LD4\"",
    "mtime": "2025-04-09T15:29:48.972Z",
    "size": 141866,
    "path": "../public/images/portfolio/1.webp"
  },
  "/images/portfolio/2.webp": {
    "type": "image/webp",
    "etag": "\"363c-YWed6wkS7k0yThiJPAcgdR+Ax7w\"",
    "mtime": "2025-04-09T15:29:48.996Z",
    "size": 13884,
    "path": "../public/images/portfolio/2.webp"
  },
  "/images/portfolio/process-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"453-IUATiPy4O4Rgmg8/G6m1v1Zu0CE\"",
    "mtime": "2025-02-05T17:17:22.476Z",
    "size": 1107,
    "path": "../public/images/portfolio/process-arrow.svg"
  },
  "/images/services/1.webp": {
    "type": "image/webp",
    "etag": "\"d0ec-dvtxsYmRy2vcCpTA1gEH0VFkAts\"",
    "mtime": "2025-04-09T15:29:51.420Z",
    "size": 53484,
    "path": "../public/images/services/1.webp"
  },
  "/images/services/2.webp": {
    "type": "image/webp",
    "etag": "\"3cb8-Etv/I7Fk6ZmHpcAzRhwaOPGgVWY\"",
    "mtime": "2025-04-09T15:29:51.438Z",
    "size": 15544,
    "path": "../public/images/services/2.webp"
  },
  "/images/services/arrow-down.svg": {
    "type": "image/svg+xml",
    "etag": "\"466-bwOVIlm03NSFaaD8E7Wi0LhCuKI\"",
    "mtime": "2025-01-26T11:54:02.406Z",
    "size": 1126,
    "path": "../public/images/services/arrow-down.svg"
  },
  "/images/services/shield.webp": {
    "type": "image/webp",
    "etag": "\"2a9e-SZPMiWupLYc9L6ct8Kbm/NPhBFo\"",
    "mtime": "2025-04-09T15:29:51.734Z",
    "size": 10910,
    "path": "../public/images/services/shield.webp"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-GUp4dE867rVfgfL6NkL0DSjEN4Y\"",
    "mtime": "2025-04-30T00:43:33.587Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/fonts/Geometria/Geometria-Bold.woff": {
    "type": "font/woff",
    "etag": "\"c490-rXorHfIZKejK/mecvcPj7MpAzpM\"",
    "mtime": "2025-04-08T23:58:20.000Z",
    "size": 50320,
    "path": "../public/fonts/Geometria/Geometria-Bold.woff"
  },
  "/fonts/Geometria/Geometria-Bold.woff2": {
    "type": "font/woff2",
    "etag": "\"8920-EOgjyrlyrsCypBJSXzz8H6lMCik\"",
    "mtime": "2025-04-08T23:58:21.000Z",
    "size": 35104,
    "path": "../public/fonts/Geometria/Geometria-Bold.woff2"
  },
  "/fonts/Geometria/Geometria-BoldItalic.woff": {
    "type": "font/woff",
    "etag": "\"d1b0-CPSCE2fxurDY8CMzh1uuHk65Pwc\"",
    "mtime": "2025-04-08T23:58:23.000Z",
    "size": 53680,
    "path": "../public/fonts/Geometria/Geometria-BoldItalic.woff"
  },
  "/fonts/Geometria/Geometria-BoldItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"9210-oLGKAgPeckyM/us7tBpHv6PnsQo\"",
    "mtime": "2025-04-08T23:58:23.000Z",
    "size": 37392,
    "path": "../public/fonts/Geometria/Geometria-BoldItalic.woff2"
  },
  "/fonts/Geometria/Geometria-ExtraBold.woff": {
    "type": "font/woff",
    "etag": "\"c088-fbP4BBYC0vsLaC7zdVw57fVxmAQ\"",
    "mtime": "2025-04-08T23:58:22.000Z",
    "size": 49288,
    "path": "../public/fonts/Geometria/Geometria-ExtraBold.woff"
  },
  "/fonts/Geometria/Geometria-ExtraBold.woff2": {
    "type": "font/woff2",
    "etag": "\"85ac-Jpr6BJrWVCvB0AAVwah/TUYr4II\"",
    "mtime": "2025-04-08T23:58:22.000Z",
    "size": 34220,
    "path": "../public/fonts/Geometria/Geometria-ExtraBold.woff2"
  },
  "/fonts/Geometria/Geometria-ExtraBoldItalic.woff": {
    "type": "font/woff",
    "etag": "\"ce8c-1G1SuXB2WrIxnXzHQBpjEO+agDc\"",
    "mtime": "2025-04-08T23:58:21.000Z",
    "size": 52876,
    "path": "../public/fonts/Geometria/Geometria-ExtraBoldItalic.woff"
  },
  "/fonts/Geometria/Geometria-ExtraBoldItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"8dfc-qwuJMpXYlvIdx5YqkTUTbWxZ+FE\"",
    "mtime": "2025-04-08T23:58:21.000Z",
    "size": 36348,
    "path": "../public/fonts/Geometria/Geometria-ExtraBoldItalic.woff2"
  },
  "/fonts/Geometria/Geometria-ExtraLight.woff": {
    "type": "font/woff",
    "etag": "\"cadc-6GilwAjBL3TTcrnE6eyM0G3uUrc\"",
    "mtime": "2025-04-08T23:58:21.000Z",
    "size": 51932,
    "path": "../public/fonts/Geometria/Geometria-ExtraLight.woff"
  },
  "/fonts/Geometria/Geometria-ExtraLight.woff2": {
    "type": "font/woff2",
    "etag": "\"8e28-JcOqAQnwuccCewxLkiuK7HQ4W4o\"",
    "mtime": "2025-04-08T23:58:22.000Z",
    "size": 36392,
    "path": "../public/fonts/Geometria/Geometria-ExtraLight.woff2"
  },
  "/fonts/Geometria/Geometria-ExtraLightItalic.woff": {
    "type": "font/woff",
    "etag": "\"d5d8-8wI0c98c9dpi1QD2Xbnmo/Phf64\"",
    "mtime": "2025-04-08T23:58:23.000Z",
    "size": 54744,
    "path": "../public/fonts/Geometria/Geometria-ExtraLightItalic.woff"
  },
  "/fonts/Geometria/Geometria-ExtraLightItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"9448-dwQiDF4UPwQ5pGrbOsoYuXZU6ks\"",
    "mtime": "2025-04-08T23:58:24.000Z",
    "size": 37960,
    "path": "../public/fonts/Geometria/Geometria-ExtraLightItalic.woff2"
  },
  "/fonts/Geometria/Geometria-Heavy.woff": {
    "type": "font/woff",
    "etag": "\"c968-jB67BFkzVTBF1sdLwfyJqwWZe0E\"",
    "mtime": "2025-04-08T23:58:22.000Z",
    "size": 51560,
    "path": "../public/fonts/Geometria/Geometria-Heavy.woff"
  },
  "/fonts/Geometria/Geometria-Heavy.woff2": {
    "type": "font/woff2",
    "etag": "\"8cf8-wncl3+yaX8oxf9mNQliPZCKlXHA\"",
    "mtime": "2025-04-08T23:58:23.000Z",
    "size": 36088,
    "path": "../public/fonts/Geometria/Geometria-Heavy.woff2"
  },
  "/fonts/Geometria/Geometria-HeavyItalic.woff": {
    "type": "font/woff",
    "etag": "\"d468-+BYO3sRfUGE56ApfnTBvyCE6CSg\"",
    "mtime": "2025-04-08T23:58:24.000Z",
    "size": 54376,
    "path": "../public/fonts/Geometria/Geometria-HeavyItalic.woff"
  },
  "/fonts/Geometria/Geometria-HeavyItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"9378-vmAL/hy083ZA8hUgiVIAbwZSkkU\"",
    "mtime": "2025-04-08T23:58:24.000Z",
    "size": 37752,
    "path": "../public/fonts/Geometria/Geometria-HeavyItalic.woff2"
  },
  "/fonts/Geometria/Geometria-Italic.woff": {
    "type": "font/woff",
    "etag": "\"d2e8-PrehUBZEa9efzo+21yaxX7zpGNw\"",
    "mtime": "2025-04-08T23:58:25.000Z",
    "size": 53992,
    "path": "../public/fonts/Geometria/Geometria-Italic.woff"
  },
  "/fonts/Geometria/Geometria-Italic.woff2": {
    "type": "font/woff2",
    "etag": "\"9324-/5N+JpgBY3Vi7jO/euhsjaY2Fhg\"",
    "mtime": "2025-04-08T23:58:25.000Z",
    "size": 37668,
    "path": "../public/fonts/Geometria/Geometria-Italic.woff2"
  },
  "/fonts/Geometria/Geometria-Light.woff": {
    "type": "font/woff",
    "etag": "\"c3e8-U5el0ieCGAA37/fKiBrn2JBlKQY\"",
    "mtime": "2025-04-08T23:58:25.000Z",
    "size": 50152,
    "path": "../public/fonts/Geometria/Geometria-Light.woff"
  },
  "/fonts/Geometria/Geometria-Light.woff2": {
    "type": "font/woff2",
    "etag": "\"88ac-1NQKrBcNVUF0V0P+wuSHw4G9T9U\"",
    "mtime": "2025-04-08T23:58:25.000Z",
    "size": 34988,
    "path": "../public/fonts/Geometria/Geometria-Light.woff2"
  },
  "/fonts/Geometria/Geometria-LightItalic.woff": {
    "type": "font/woff",
    "etag": "\"d2b8-suoGWUcAlgw5cZUDPUcSeCWFAcE\"",
    "mtime": "2025-04-08T23:58:26.000Z",
    "size": 53944,
    "path": "../public/fonts/Geometria/Geometria-LightItalic.woff"
  },
  "/fonts/Geometria/Geometria-LightItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"92f8-Fhneh+kXYPxhZ2AVrzl9FVjIRtM\"",
    "mtime": "2025-04-08T23:58:27.000Z",
    "size": 37624,
    "path": "../public/fonts/Geometria/Geometria-LightItalic.woff2"
  },
  "/fonts/Geometria/Geometria-Medium.woff": {
    "type": "font/woff",
    "etag": "\"c66c-h+y18W1x5dQhcCe+a23gDXNfvY8\"",
    "mtime": "2025-04-08T23:58:25.000Z",
    "size": 50796,
    "path": "../public/fonts/Geometria/Geometria-Medium.woff"
  },
  "/fonts/Geometria/Geometria-Medium.woff2": {
    "type": "font/woff2",
    "etag": "\"8ab0-9RCudVHiiCx0yvKqkd/8/CedvKo\"",
    "mtime": "2025-04-08T23:58:26.000Z",
    "size": 35504,
    "path": "../public/fonts/Geometria/Geometria-Medium.woff2"
  },
  "/fonts/Geometria/Geometria-MediumItalic.woff": {
    "type": "font/woff",
    "etag": "\"d3d4-lwGB5za1g76/nZOGmna1o6dHJfE\"",
    "mtime": "2025-04-08T23:58:24.000Z",
    "size": 54228,
    "path": "../public/fonts/Geometria/Geometria-MediumItalic.woff"
  },
  "/fonts/Geometria/Geometria-MediumItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"942c-5cicdmix2m2fhMLKDT2mxeac1y0\"",
    "mtime": "2025-04-08T23:58:24.000Z",
    "size": 37932,
    "path": "../public/fonts/Geometria/Geometria-MediumItalic.woff2"
  },
  "/fonts/Geometria/Geometria-Thin.woff": {
    "type": "font/woff",
    "etag": "\"c0ac-l6lGQ1tzha9m2aDx4KIK0TTZ/yU\"",
    "mtime": "2025-04-08T23:58:27.000Z",
    "size": 49324,
    "path": "../public/fonts/Geometria/Geometria-Thin.woff"
  },
  "/fonts/Geometria/Geometria-Thin.woff2": {
    "type": "font/woff2",
    "etag": "\"8498-Zji6o4QQCOv5eJ7K2BcvK0zD/2A\"",
    "mtime": "2025-04-08T23:58:27.000Z",
    "size": 33944,
    "path": "../public/fonts/Geometria/Geometria-Thin.woff2"
  },
  "/fonts/Geometria/Geometria-ThinItalic.woff": {
    "type": "font/woff",
    "etag": "\"d008-wNUdGmDtPobzOU/Xk66p9zP7hUw\"",
    "mtime": "2025-04-08T23:58:26.000Z",
    "size": 53256,
    "path": "../public/fonts/Geometria/Geometria-ThinItalic.woff"
  },
  "/fonts/Geometria/Geometria-ThinItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"8e38-tuWs8kT5NtMpWcUT+/mdLtLtjoM\"",
    "mtime": "2025-04-08T23:58:26.000Z",
    "size": 36408,
    "path": "../public/fonts/Geometria/Geometria-ThinItalic.woff2"
  },
  "/fonts/Geometria/Geometria.woff": {
    "type": "font/woff",
    "etag": "\"c7e4-ZYP+ISmZQpisQqrHa7kWYY72wD0\"",
    "mtime": "2025-04-08T23:58:22.000Z",
    "size": 51172,
    "path": "../public/fonts/Geometria/Geometria.woff"
  },
  "/fonts/Geometria/Geometria.woff2": {
    "type": "font/woff2",
    "etag": "\"8c88-E/Z+8SgLiYXYi6OsNhPwZBZvJiw\"",
    "mtime": "2025-04-08T23:58:22.000Z",
    "size": 35976,
    "path": "../public/fonts/Geometria/Geometria.woff2"
  },
  "/fonts/Inter/Inter_18pt-Medium.ttf": {
    "type": "font/ttf",
    "etag": "\"53ca0-4tIc3Jcwzk1L3Ms0dkE6W3n+fVI\"",
    "mtime": "2024-09-04T23:11:20.000Z",
    "size": 343200,
    "path": "../public/fonts/Inter/Inter_18pt-Medium.ttf"
  },
  "/fonts/Inter/Inter_18pt-Regular.ttf": {
    "type": "font/ttf",
    "etag": "\"53a98-vRl2wfAZhTq2FD7xJG4lqmb9mQ4\"",
    "mtime": "2024-09-04T23:11:20.000Z",
    "size": 342680,
    "path": "../public/fonts/Inter/Inter_18pt-Regular.ttf"
  },
  "/fonts/Inter/Inter_18pt-SemiBold.ttf": {
    "type": "font/ttf",
    "etag": "\"53f14-8+RKvWZh1bhh5m2yL095psRmzQA\"",
    "mtime": "2024-09-04T23:11:20.000Z",
    "size": 343828,
    "path": "../public/fonts/Inter/Inter_18pt-SemiBold.ttf"
  },
  "/fonts/Inter/Inter_24pt-Medium.ttf": {
    "type": "font/ttf",
    "etag": "\"53b98-O58zYMqBLyB22wv8i+1M/dlR508\"",
    "mtime": "2024-09-04T23:11:20.000Z",
    "size": 342936,
    "path": "../public/fonts/Inter/Inter_24pt-Medium.ttf"
  },
  "/fonts/Inter/Inter_24pt-Regular.ttf": {
    "type": "font/ttf",
    "etag": "\"53acc-uZhAk8CythLaXljk1OG6jCVTU9w\"",
    "mtime": "2024-09-04T23:11:20.000Z",
    "size": 342732,
    "path": "../public/fonts/Inter/Inter_24pt-Regular.ttf"
  },
  "/fonts/Inter/Inter_24pt-SemiBold.ttf": {
    "type": "font/ttf",
    "etag": "\"53e58-7oF1bcloWHcHeq6QJ3CKqEvFYCc\"",
    "mtime": "2024-09-04T23:11:20.000Z",
    "size": 343640,
    "path": "../public/fonts/Inter/Inter_24pt-SemiBold.ttf"
  },
  "/fonts/Inter/Inter_28pt-Medium.ttf": {
    "type": "font/ttf",
    "etag": "\"53b18-0TW6jI17dKiHikpzeU3fpzn6c0g\"",
    "mtime": "2024-09-04T23:11:20.000Z",
    "size": 342808,
    "path": "../public/fonts/Inter/Inter_28pt-Medium.ttf"
  },
  "/fonts/Inter/Inter_28pt-Regular.ttf": {
    "type": "font/ttf",
    "etag": "\"539d4-YXeskcb7ffmwm+2ngC6hVpmohwM\"",
    "mtime": "2024-09-04T23:11:20.000Z",
    "size": 342484,
    "path": "../public/fonts/Inter/Inter_28pt-Regular.ttf"
  },
  "/fonts/Inter/Inter_28pt-SemiBold.ttf": {
    "type": "font/ttf",
    "etag": "\"53ccc-ScSrcfqnEYUgohRSkG4E8TQMhkw\"",
    "mtime": "2024-09-04T23:11:20.000Z",
    "size": 343244,
    "path": "../public/fonts/Inter/Inter_28pt-SemiBold.ttf"
  },
  "/fonts/Mont/Mont-Black.woff": {
    "type": "font/woff",
    "etag": "\"f100-79sfKBkeesfuTqyiZieIkMK5VKg\"",
    "mtime": "2025-04-09T00:14:51.000Z",
    "size": 61696,
    "path": "../public/fonts/Mont/Mont-Black.woff"
  },
  "/fonts/Mont/Mont-Black.woff2": {
    "type": "font/woff2",
    "etag": "\"a76c-JU2+WR2N2uo9wGNoS1GZErpWKy8\"",
    "mtime": "2025-04-09T00:14:51.000Z",
    "size": 42860,
    "path": "../public/fonts/Mont/Mont-Black.woff2"
  },
  "/fonts/Mont/Mont-BlackItalic.woff": {
    "type": "font/woff",
    "etag": "\"114e8-WNaCAKwxlchPSI54dJENLM27GAM\"",
    "mtime": "2025-04-09T00:14:52.000Z",
    "size": 70888,
    "path": "../public/fonts/Mont/Mont-BlackItalic.woff"
  },
  "/fonts/Mont/Mont-BlackItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"c590-L8MWfFLlxNKuqlESdSy6sfxUbJA\"",
    "mtime": "2025-04-09T00:14:52.000Z",
    "size": 50576,
    "path": "../public/fonts/Mont/Mont-BlackItalic.woff2"
  },
  "/fonts/Mont/Mont-Bold.woff": {
    "type": "font/woff",
    "etag": "\"fc3c-8DUtmmRPrSArYxEqHG5PkMWIDkQ\"",
    "mtime": "2025-04-09T00:14:51.000Z",
    "size": 64572,
    "path": "../public/fonts/Mont/Mont-Bold.woff"
  },
  "/fonts/Mont/Mont-Bold.woff2": {
    "type": "font/woff2",
    "etag": "\"b090-bEL53+SklbaMiVMfL9uV19dAH34\"",
    "mtime": "2025-04-09T00:14:51.000Z",
    "size": 45200,
    "path": "../public/fonts/Mont/Mont-Bold.woff2"
  },
  "/fonts/Mont/Mont-BoldItalic.woff": {
    "type": "font/woff",
    "etag": "\"10e60-tXDhk8rSIbjuQSw3BDP871LCKwg\"",
    "mtime": "2025-04-09T00:14:54.000Z",
    "size": 69216,
    "path": "../public/fonts/Mont/Mont-BoldItalic.woff"
  },
  "/fonts/Mont/Mont-BoldItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"beb8-ZT2Lv9xPdLWWFNr7rLJFLIcf40g\"",
    "mtime": "2025-04-09T00:14:54.000Z",
    "size": 48824,
    "path": "../public/fonts/Mont/Mont-BoldItalic.woff2"
  },
  "/fonts/Mont/Mont-ExtraLight.woff": {
    "type": "font/woff",
    "etag": "\"fbb4-qUpYDvKpMioz+ZBltmRsed8LrTY\"",
    "mtime": "2025-04-09T00:14:53.000Z",
    "size": 64436,
    "path": "../public/fonts/Mont/Mont-ExtraLight.woff"
  },
  "/fonts/Mont/Mont-ExtraLight.woff2": {
    "type": "font/woff2",
    "etag": "\"b0bc-QUFEUxsttqfcrJboMegzP+alEiM\"",
    "mtime": "2025-04-09T00:14:54.000Z",
    "size": 45244,
    "path": "../public/fonts/Mont/Mont-ExtraLight.woff2"
  },
  "/fonts/Mont/Mont-ExtraLightDEMO.woff": {
    "type": "font/woff",
    "etag": "\"aa94-Hun8b04yYV1/jxEoXf2CYx3jgzI\"",
    "mtime": "2025-04-09T00:14:53.000Z",
    "size": 43668,
    "path": "../public/fonts/Mont/Mont-ExtraLightDEMO.woff"
  },
  "/fonts/Mont/Mont-ExtraLightDEMO.woff2": {
    "type": "font/woff2",
    "etag": "\"780c-GOAdVzgKQxQ35FyLJwER2uIQU4c\"",
    "mtime": "2025-04-09T00:14:53.000Z",
    "size": 30732,
    "path": "../public/fonts/Mont/Mont-ExtraLightDEMO.woff2"
  },
  "/fonts/Mont/Mont-ExtraLightItalic.woff": {
    "type": "font/woff",
    "etag": "\"110c0-am7K64oGS7p7iSk7An2nQWGmbrw\"",
    "mtime": "2025-04-09T00:14:52.000Z",
    "size": 69824,
    "path": "../public/fonts/Mont/Mont-ExtraLightItalic.woff"
  },
  "/fonts/Mont/Mont-ExtraLightItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"c090-wW+L0DBk7F6LWYxmJXhlS3DYB3w\"",
    "mtime": "2025-04-09T00:14:52.000Z",
    "size": 49296,
    "path": "../public/fonts/Mont/Mont-ExtraLightItalic.woff2"
  },
  "/fonts/Mont/Mont-Heavy.woff": {
    "type": "font/woff",
    "etag": "\"102d0-65VqZ6b5Ll1CIVRWCEyuDvVqKBg\"",
    "mtime": "2025-04-09T00:14:53.000Z",
    "size": 66256,
    "path": "../public/fonts/Mont/Mont-Heavy.woff"
  },
  "/fonts/Mont/Mont-Heavy.woff2": {
    "type": "font/woff2",
    "etag": "\"b704-BbcxHW71nPsY4ft8S28PiifhC4w\"",
    "mtime": "2025-04-09T00:14:53.000Z",
    "size": 46852,
    "path": "../public/fonts/Mont/Mont-Heavy.woff2"
  },
  "/fonts/Mont/Mont-HeavyDEMO.woff": {
    "type": "font/woff",
    "etag": "\"b484-YFj5LDY7ZmojDN988hpyRGlFDgI\"",
    "mtime": "2025-04-09T00:14:57.000Z",
    "size": 46212,
    "path": "../public/fonts/Mont/Mont-HeavyDEMO.woff"
  },
  "/fonts/Mont/Mont-HeavyDEMO.woff2": {
    "type": "font/woff2",
    "etag": "\"7fb8-c4OVXOY2ESS3PKAZiBYLTDGVP38\"",
    "mtime": "2025-04-09T00:14:57.000Z",
    "size": 32696,
    "path": "../public/fonts/Mont/Mont-HeavyDEMO.woff2"
  },
  "/fonts/Mont/Mont-HeavyItalic.woff": {
    "type": "font/woff",
    "etag": "\"11410-liV4yB2I2E94nWgX4gDN7NJXfoE\"",
    "mtime": "2025-04-09T00:14:56.000Z",
    "size": 70672,
    "path": "../public/fonts/Mont/Mont-HeavyItalic.woff"
  },
  "/fonts/Mont/Mont-HeavyItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"c414-kmwywvy39p0zUtM/UxkRQJFvFzs\"",
    "mtime": "2025-04-09T00:14:57.000Z",
    "size": 50196,
    "path": "../public/fonts/Mont/Mont-HeavyItalic.woff2"
  },
  "/fonts/Mont/Mont-Light.woff": {
    "type": "font/woff",
    "etag": "\"ffc4-f8kF1166flgnLN6FfUh6CULTHcs\"",
    "mtime": "2025-04-09T00:14:55.000Z",
    "size": 65476,
    "path": "../public/fonts/Mont/Mont-Light.woff"
  },
  "/fonts/Mont/Mont-Light.woff2": {
    "type": "font/woff2",
    "etag": "\"b3f8-U8WVbElUd3mWbIR6yRiPweYLzNs\"",
    "mtime": "2025-04-09T00:14:56.000Z",
    "size": 46072,
    "path": "../public/fonts/Mont/Mont-Light.woff2"
  },
  "/fonts/Mont/Mont-LightItalic.woff": {
    "type": "font/woff",
    "etag": "\"10e68-UExlnFYKh5f5sDx+SsJuK5PIS7Q\"",
    "mtime": "2025-04-09T00:14:55.000Z",
    "size": 69224,
    "path": "../public/fonts/Mont/Mont-LightItalic.woff"
  },
  "/fonts/Mont/Mont-LightItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"be40-Xx0BHqn6w9dH/3wpH8vh8Ij6lfQ\"",
    "mtime": "2025-04-09T00:14:55.000Z",
    "size": 48704,
    "path": "../public/fonts/Mont/Mont-LightItalic.woff2"
  },
  "/fonts/Mont/Mont-Regular.woff": {
    "type": "font/woff",
    "etag": "\"fe8c-7QBsR8d/ydCBJSEy8I78e8TjhTk\"",
    "mtime": "2025-04-09T00:14:54.000Z",
    "size": 65164,
    "path": "../public/fonts/Mont/Mont-Regular.woff"
  },
  "/fonts/Mont/Mont-Regular.woff2": {
    "type": "font/woff2",
    "etag": "\"b2c8-gboRjBH5p/8dWy0/ST8ZmvoqhhY\"",
    "mtime": "2025-04-09T00:14:55.000Z",
    "size": 45768,
    "path": "../public/fonts/Mont/Mont-Regular.woff2"
  },
  "/fonts/Mont/Mont-RegularItalic.woff": {
    "type": "font/woff",
    "etag": "\"11088-X2R00fAjd6zZ41Ee/IjLmIwsLlk\"",
    "mtime": "2025-04-09T00:14:56.000Z",
    "size": 69768,
    "path": "../public/fonts/Mont/Mont-RegularItalic.woff"
  },
  "/fonts/Mont/Mont-RegularItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"c108-z+YWzLZbeUUTrhWZ5De8MwVofDI\"",
    "mtime": "2025-04-09T00:14:56.000Z",
    "size": 49416,
    "path": "../public/fonts/Mont/Mont-RegularItalic.woff2"
  },
  "/fonts/Mont/Mont-SemiBold.woff": {
    "type": "font/woff",
    "etag": "\"fe2c-9RmbH0UaqE+N/aycjGnTwxzPYU4\"",
    "mtime": "2025-04-09T00:14:58.000Z",
    "size": 65068,
    "path": "../public/fonts/Mont/Mont-SemiBold.woff"
  },
  "/fonts/Mont/Mont-SemiBold.woff2": {
    "type": "font/woff2",
    "etag": "\"b340-3t22OsN6jaJmixXeirf2nyl1Xlo\"",
    "mtime": "2025-04-09T00:14:58.000Z",
    "size": 45888,
    "path": "../public/fonts/Mont/Mont-SemiBold.woff2"
  },
  "/fonts/Mont/Mont-SemiBoldItalic.woff": {
    "type": "font/woff",
    "etag": "\"10f78-Wv8pbPpFg9pGNtnno0sUi5JogrQ\"",
    "mtime": "2025-04-09T00:14:57.000Z",
    "size": 69496,
    "path": "../public/fonts/Mont/Mont-SemiBoldItalic.woff"
  },
  "/fonts/Mont/Mont-SemiBoldItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"c028-/Fv8LinZ9vIVwjY8r1uoXi+BsZs\"",
    "mtime": "2025-04-09T00:14:57.000Z",
    "size": 49192,
    "path": "../public/fonts/Mont/Mont-SemiBoldItalic.woff2"
  },
  "/fonts/Mont/Mont-Thin.woff": {
    "type": "font/woff",
    "etag": "\"fae0-V8hvUgkxhVCG1+HfqNXEKKH+43A\"",
    "mtime": "2025-04-09T00:14:58.000Z",
    "size": 64224,
    "path": "../public/fonts/Mont/Mont-Thin.woff"
  },
  "/fonts/Mont/Mont-Thin.woff2": {
    "type": "font/woff2",
    "etag": "\"b018-oNuvFzrSdjPgWu5LSp5Xi0FQCUk\"",
    "mtime": "2025-04-09T00:14:58.000Z",
    "size": 45080,
    "path": "../public/fonts/Mont/Mont-Thin.woff2"
  },
  "/fonts/Mont/Mont-ThinItalic.woff": {
    "type": "font/woff",
    "etag": "\"10db8-WAam57668aZ3Q/mGqYSknaAQhLY\"",
    "mtime": "2025-04-09T00:14:58.000Z",
    "size": 69048,
    "path": "../public/fonts/Mont/Mont-ThinItalic.woff"
  },
  "/fonts/Mont/Mont-ThinItalic.woff2": {
    "type": "font/woff2",
    "etag": "\"bd88-tUuPhmPDAXSVVvhn1iqPefnfraw\"",
    "mtime": "2025-04-09T00:14:59.000Z",
    "size": 48520,
    "path": "../public/fonts/Mont/Mont-ThinItalic.woff2"
  },
  "/images/blog/lights/1.webp": {
    "type": "image/webp",
    "etag": "\"10caa-UKX43tA0+Um3iurhzG38M/tXYTA\"",
    "mtime": "2025-04-09T15:29:48.103Z",
    "size": 68778,
    "path": "../public/images/blog/lights/1.webp"
  },
  "/images/blog/lights/2.webp": {
    "type": "image/webp",
    "etag": "\"2c26-xz81Kera5d4xKiw/NCdQj6w2I2g\"",
    "mtime": "2025-04-09T15:29:48.107Z",
    "size": 11302,
    "path": "../public/images/blog/lights/2.webp"
  },
  "/images/blog/lights/3.webp": {
    "type": "image/webp",
    "etag": "\"3674-XDYEnPAZSCsTvhharnEduFxQDcM\"",
    "mtime": "2025-04-09T15:29:48.118Z",
    "size": 13940,
    "path": "../public/images/blog/lights/3.webp"
  },
  "/images/blog/lights/4.webp": {
    "type": "image/webp",
    "etag": "\"382c-WPWXZtkRa0dYCiYuNy7iqn32jRg\"",
    "mtime": "2025-04-09T15:29:48.144Z",
    "size": 14380,
    "path": "../public/images/blog/lights/4.webp"
  },
  "/images/blog/lights/quote.svg": {
    "type": "image/svg+xml",
    "etag": "\"140-mJu4eHkGQ8YDtu/LSKO6YNlm8S8\"",
    "mtime": "2025-02-19T21:56:16.966Z",
    "size": 320,
    "path": "../public/images/blog/lights/quote.svg"
  },
  "/images/blog/previews/bedroom.webp": {
    "type": "image/webp",
    "etag": "\"86be-WSxT+f93ZIoAGvgOgi7qC2O32VM\"",
    "mtime": "2025-04-09T15:29:48.158Z",
    "size": 34494,
    "path": "../public/images/blog/previews/bedroom.webp"
  },
  "/images/blog/previews/ideas.webp": {
    "type": "image/webp",
    "etag": "\"638a-cqEshtlvEEs2V73kBI2hgp13qz8\"",
    "mtime": "2025-04-09T15:29:48.180Z",
    "size": 25482,
    "path": "../public/images/blog/previews/ideas.webp"
  },
  "/images/blog/previews/lights.webp": {
    "type": "image/webp",
    "etag": "\"b66a-kJGi0lEIiGOaR9tmKR2ZuNo7yzU\"",
    "mtime": "2025-04-09T15:29:48.248Z",
    "size": 46698,
    "path": "../public/images/blog/previews/lights.webp"
  },
  "/images/blog/previews/materials.webp": {
    "type": "image/webp",
    "etag": "\"8990-uF8Y+zk0HKZkQCKqDcolNZfT9R0\"",
    "mtime": "2025-04-09T15:29:48.259Z",
    "size": 35216,
    "path": "../public/images/blog/previews/materials.webp"
  },
  "/images/blog/previews/minimalism.webp": {
    "type": "image/webp",
    "etag": "\"3da6-82jRtLAI0IIGOHAh/SugEhFHOq4\"",
    "mtime": "2025-04-09T15:29:48.299Z",
    "size": 15782,
    "path": "../public/images/blog/previews/minimalism.webp"
  },
  "/images/blog/previews/trends.webp": {
    "type": "image/webp",
    "etag": "\"707a-38DlQLjNUzTYICl1MMb4jskXInM\"",
    "mtime": "2025-04-09T15:29:48.316Z",
    "size": 28794,
    "path": "../public/images/blog/previews/trends.webp"
  },
  "/images/home/projects/1.webp": {
    "type": "image/webp",
    "etag": "\"7084-Ey/aE+eESH6M1d7vDb1GO/G6HUY\"",
    "mtime": "2025-04-09T15:29:48.713Z",
    "size": 28804,
    "path": "../public/images/home/projects/1.webp"
  },
  "/images/home/projects/2.webp": {
    "type": "image/webp",
    "etag": "\"5e3c-Dks40N5jn9yuDLAy0iV1gora1yQ\"",
    "mtime": "2025-04-09T15:29:48.749Z",
    "size": 24124,
    "path": "../public/images/home/projects/2.webp"
  },
  "/images/projects/chambre-enfant/1.webp": {
    "type": "image/webp",
    "etag": "\"109a6-0IwuW1v53AhP33fC6wqK+Qzq9ZY\"",
    "mtime": "2025-04-09T15:29:49.031Z",
    "size": 68006,
    "path": "../public/images/projects/chambre-enfant/1.webp"
  },
  "/images/projects/chambre-enfant/2.webp": {
    "type": "image/webp",
    "etag": "\"993a-U3TyZjIhf4rbgV3dm+ZLOblxz64\"",
    "mtime": "2025-04-09T15:29:49.190Z",
    "size": 39226,
    "path": "../public/images/projects/chambre-enfant/2.webp"
  },
  "/images/projects/chambre-enfant/3.webp": {
    "type": "image/webp",
    "etag": "\"6bf0-jTElzEQ88GdQ9qKBrWbyoJfOlfM\"",
    "mtime": "2025-04-09T15:29:49.306Z",
    "size": 27632,
    "path": "../public/images/projects/chambre-enfant/3.webp"
  },
  "/images/projects/chambre-enfant/4.webp": {
    "type": "image/webp",
    "etag": "\"5cfc-O7Ahd56LvZg5Z8kjawgXp9KzGzY\"",
    "mtime": "2025-04-09T15:29:49.378Z",
    "size": 23804,
    "path": "../public/images/projects/chambre-enfant/4.webp"
  },
  "/images/projects/chambre-enfant/bedroom.webp": {
    "type": "image/webp",
    "etag": "\"470a-jjDZ/17AC6zevJrVniphjuRfjTY\"",
    "mtime": "2025-04-09T15:29:49.409Z",
    "size": 18186,
    "path": "../public/images/projects/chambre-enfant/bedroom.webp"
  },
  "/images/projects/chambre-enfant/playing-room-2.webp": {
    "type": "image/webp",
    "etag": "\"75de-Vy7kWOV/UkWnOzLOz+hsxLLcE+k\"",
    "mtime": "2025-04-09T15:29:49.433Z",
    "size": 30174,
    "path": "../public/images/projects/chambre-enfant/playing-room-2.webp"
  },
  "/images/projects/chambre-enfant/playing-room.webp": {
    "type": "image/webp",
    "etag": "\"5cd6-mdV5deTsrR1C0m82J/xxrv4nNqQ\"",
    "mtime": "2025-04-09T15:29:49.460Z",
    "size": 23766,
    "path": "../public/images/projects/chambre-enfant/playing-room.webp"
  },
  "/images/projects/chambre-enfant/room.webp": {
    "type": "image/webp",
    "etag": "\"525e-XBVhA9WlqJDgihGWLuwXuAIG3FM\"",
    "mtime": "2025-04-09T15:29:49.530Z",
    "size": 21086,
    "path": "../public/images/projects/chambre-enfant/room.webp"
  },
  "/images/projects/chambre-enfant/room2.webp": {
    "type": "image/webp",
    "etag": "\"150fe-vfYw/kpfI3LBoj1i0pvmjmqgntU\"",
    "mtime": "2025-04-09T15:29:49.542Z",
    "size": 86270,
    "path": "../public/images/projects/chambre-enfant/room2.webp"
  },
  "/images/projects/elemental-harmony/1.webp": {
    "type": "image/webp",
    "etag": "\"ed1c-cj6cmks/0e0DyYvnlbY3Os4/sFg\"",
    "mtime": "2025-04-09T15:29:49.551Z",
    "size": 60700,
    "path": "../public/images/projects/elemental-harmony/1.webp"
  },
  "/images/projects/elemental-harmony/2.webp": {
    "type": "image/webp",
    "etag": "\"71ca-krT285Ku21KRyKGvbiFBxr+9jD4\"",
    "mtime": "2025-04-09T15:29:49.648Z",
    "size": 29130,
    "path": "../public/images/projects/elemental-harmony/2.webp"
  },
  "/images/projects/elemental-harmony/3.webp": {
    "type": "image/webp",
    "etag": "\"7118-X3Vf+Zip3VK5KmGupMPyilwrieo\"",
    "mtime": "2025-04-09T15:29:49.857Z",
    "size": 28952,
    "path": "../public/images/projects/elemental-harmony/3.webp"
  },
  "/images/projects/elemental-harmony/4.webp": {
    "type": "image/webp",
    "etag": "\"3ae6-T+hhNXqUHqLiLD7KlegemEtfI4E\"",
    "mtime": "2025-04-09T15:29:49.878Z",
    "size": 15078,
    "path": "../public/images/projects/elemental-harmony/4.webp"
  },
  "/images/projects/elemental-harmony/bathroom.webp": {
    "type": "image/webp",
    "etag": "\"f180-AkY29V+0dfU9PyN/MwweljJcckk\"",
    "mtime": "2025-04-09T15:29:49.961Z",
    "size": 61824,
    "path": "../public/images/projects/elemental-harmony/bathroom.webp"
  },
  "/images/projects/elemental-harmony/bedroom.webp": {
    "type": "image/webp",
    "etag": "\"6e5c-txuQubPRMoRiGVsR16S19IYC5OA\"",
    "mtime": "2025-04-09T15:29:49.986Z",
    "size": 28252,
    "path": "../public/images/projects/elemental-harmony/bedroom.webp"
  },
  "/images/projects/elemental-harmony/corridor.webp": {
    "type": "image/webp",
    "etag": "\"1322-CP50oaJ3FApnH/1L5YT6m2Zv1BQ\"",
    "mtime": "2025-04-09T15:29:50.002Z",
    "size": 4898,
    "path": "../public/images/projects/elemental-harmony/corridor.webp"
  },
  "/images/projects/elemental-harmony/hall.webp": {
    "type": "image/webp",
    "etag": "\"552c-K47irnBXNGmG8Wu473TyCacEgCI\"",
    "mtime": "2025-04-09T15:29:50.041Z",
    "size": 21804,
    "path": "../public/images/projects/elemental-harmony/hall.webp"
  },
  "/images/projects/elemental-harmony/kitchen.webp": {
    "type": "image/webp",
    "etag": "\"25f8-CX/rUiqDjloCSQsHD/9O3znqf24\"",
    "mtime": "2025-04-09T15:29:50.044Z",
    "size": 9720,
    "path": "../public/images/projects/elemental-harmony/kitchen.webp"
  },
  "/images/projects/modern-vista/1.webp": {
    "type": "image/webp",
    "etag": "\"d690-XenSoS2zObMXcDK7cEqtAL2Pbr0\"",
    "mtime": "2025-04-09T15:29:50.084Z",
    "size": 54928,
    "path": "../public/images/projects/modern-vista/1.webp"
  },
  "/images/projects/modern-vista/2.webp": {
    "type": "image/webp",
    "etag": "\"c8fe-1OX+89FmXysrvI7QQ+Mvy+b9cXg\"",
    "mtime": "2025-04-09T15:29:50.090Z",
    "size": 51454,
    "path": "../public/images/projects/modern-vista/2.webp"
  },
  "/images/projects/modern-vista/3.webp": {
    "type": "image/webp",
    "etag": "\"72f2-FRqSg2dQFahmeyV9aL7mFQteOcs\"",
    "mtime": "2025-04-09T15:29:50.192Z",
    "size": 29426,
    "path": "../public/images/projects/modern-vista/3.webp"
  },
  "/images/projects/modern-vista/4.webp": {
    "type": "image/webp",
    "etag": "\"5204-aAmSb59g7n1oZiVGoU7GMDA5tXY\"",
    "mtime": "2025-04-09T15:29:50.221Z",
    "size": 20996,
    "path": "../public/images/projects/modern-vista/4.webp"
  },
  "/images/projects/modern-vista/bathroom.webp": {
    "type": "image/webp",
    "etag": "\"cb70-eyBi5g1mlFKtnbv8ZKjn0VWYlY4\"",
    "mtime": "2025-04-09T15:29:50.237Z",
    "size": 52080,
    "path": "../public/images/projects/modern-vista/bathroom.webp"
  },
  "/images/projects/modern-vista/bedroom.webp": {
    "type": "image/webp",
    "etag": "\"4808-tHQSNusOTVx52VeYy3kbP4gWFe0\"",
    "mtime": "2025-04-09T15:29:50.260Z",
    "size": 18440,
    "path": "../public/images/projects/modern-vista/bedroom.webp"
  },
  "/images/projects/modern-vista/childbedroom.webp": {
    "type": "image/webp",
    "etag": "\"aa4a-bzMvdJxZQaDxiwgljHqSD4Qkt7Q\"",
    "mtime": "2025-04-09T15:29:50.282Z",
    "size": 43594,
    "path": "../public/images/projects/modern-vista/childbedroom.webp"
  },
  "/images/projects/modern-vista/hall.webp": {
    "type": "image/webp",
    "etag": "\"5cb2-sVOXuXi5/y/L3NlFOrfpBWVjzkk\"",
    "mtime": "2025-04-09T15:29:50.307Z",
    "size": 23730,
    "path": "../public/images/projects/modern-vista/hall.webp"
  },
  "/images/projects/modern-vista/toilet.webp": {
    "type": "image/webp",
    "etag": "\"4e6c-cTxf+W4PdszUmTAZWqEhcSk4U+c\"",
    "mtime": "2025-04-09T15:29:50.331Z",
    "size": 20076,
    "path": "../public/images/projects/modern-vista/toilet.webp"
  },
  "/images/projects/natural-essence/1.webp": {
    "type": "image/webp",
    "etag": "\"9964-8nKYAA8Ks2ia2TXO0SHOp3gsofw\"",
    "mtime": "2025-04-09T15:29:50.343Z",
    "size": 39268,
    "path": "../public/images/projects/natural-essence/1.webp"
  },
  "/images/projects/natural-essence/2.webp": {
    "type": "image/webp",
    "etag": "\"859c-aBjyXU7I3Y8fTF6yGPDV33P+3Nw\"",
    "mtime": "2025-04-09T15:29:50.360Z",
    "size": 34204,
    "path": "../public/images/projects/natural-essence/2.webp"
  },
  "/images/projects/natural-essence/3.webp": {
    "type": "image/webp",
    "etag": "\"30b2-ZtGq8JC2O4vhochEf8Ts8myPE6g\"",
    "mtime": "2025-04-09T15:29:50.386Z",
    "size": 12466,
    "path": "../public/images/projects/natural-essence/3.webp"
  },
  "/images/projects/natural-essence/4.webp": {
    "type": "image/webp",
    "etag": "\"3fe0-MpRX7tLEa6HgYq27K7mrcYUzcOc\"",
    "mtime": "2025-04-09T15:29:50.435Z",
    "size": 16352,
    "path": "../public/images/projects/natural-essence/4.webp"
  },
  "/images/projects/natural-essence/bathroom.webp": {
    "type": "image/webp",
    "etag": "\"e152-ZuzWiZl+7q/yVx33IhiX5S+wWCE\"",
    "mtime": "2025-04-09T15:29:50.460Z",
    "size": 57682,
    "path": "../public/images/projects/natural-essence/bathroom.webp"
  },
  "/images/projects/natural-essence/bedroom.webp": {
    "type": "image/webp",
    "etag": "\"2b78-SHq5893NY1FMIEXATvqZjJ5ea30\"",
    "mtime": "2025-04-09T15:29:50.486Z",
    "size": 11128,
    "path": "../public/images/projects/natural-essence/bedroom.webp"
  },
  "/images/projects/natural-essence/corridor.webp": {
    "type": "image/webp",
    "etag": "\"188c-yehUvR25wdpgRrTVycOADiY/iDw\"",
    "mtime": "2025-04-09T15:29:50.488Z",
    "size": 6284,
    "path": "../public/images/projects/natural-essence/corridor.webp"
  },
  "/images/projects/natural-essence/hall.webp": {
    "type": "image/webp",
    "etag": "\"4f82-8wdZ3pXwTjkq3Cs5FvLIBovLKxE\"",
    "mtime": "2025-04-09T15:29:50.503Z",
    "size": 20354,
    "path": "../public/images/projects/natural-essence/hall.webp"
  },
  "/images/projects/natural-essence/kitchen.webp": {
    "type": "image/webp",
    "etag": "\"42c4-s5G1xH8FYiemCfMo/zuMBMtlTsY\"",
    "mtime": "2025-04-09T15:29:50.526Z",
    "size": 17092,
    "path": "../public/images/projects/natural-essence/kitchen.webp"
  },
  "/images/projects/previews/chambre-enfant.webp": {
    "type": "image/webp",
    "etag": "\"e7ac-mFNd6gQrMofxKTUvy0FVV0O94YY\"",
    "mtime": "2025-04-09T15:29:50.534Z",
    "size": 59308,
    "path": "../public/images/projects/previews/chambre-enfant.webp"
  },
  "/images/projects/previews/elemental-harmony.webp": {
    "type": "image/webp",
    "etag": "\"1b4a2-PL79hVH9FiioybKrrEm6gqDMdNg\"",
    "mtime": "2025-04-09T15:29:50.562Z",
    "size": 111778,
    "path": "../public/images/projects/previews/elemental-harmony.webp"
  },
  "/images/projects/previews/modern-vista.webp": {
    "type": "image/webp",
    "etag": "\"f5c8-UsjDmWeOTtIOxPUs6xzEqSeMF40\"",
    "mtime": "2025-04-09T15:29:50.575Z",
    "size": 62920,
    "path": "../public/images/projects/previews/modern-vista.webp"
  },
  "/images/projects/previews/natural-essence.webp": {
    "type": "image/webp",
    "etag": "\"bce2-EhYunSb9kaBYZNx0EZfuyKqnYL8\"",
    "mtime": "2025-04-09T15:29:50.690Z",
    "size": 48354,
    "path": "../public/images/projects/previews/natural-essence.webp"
  },
  "/images/projects/previews/serene-lines.webp": {
    "type": "image/webp",
    "etag": "\"b022-e4UHoSHBn/BHKcDe10eXqfIW988\"",
    "mtime": "2025-04-09T15:29:50.748Z",
    "size": 45090,
    "path": "../public/images/projects/previews/serene-lines.webp"
  },
  "/images/projects/previews/urban-grace.webp": {
    "type": "image/webp",
    "etag": "\"16f22-MkRgKnGZPZohsPJejjSfT+fzrhs\"",
    "mtime": "2025-04-09T15:29:50.780Z",
    "size": 93986,
    "path": "../public/images/projects/previews/urban-grace.webp"
  },
  "/images/projects/serene-lines/1.webp": {
    "type": "image/webp",
    "etag": "\"184b4-7nkpzKGeJh944N0wnz7ikWG7CLs\"",
    "mtime": "2025-04-09T15:29:50.804Z",
    "size": 99508,
    "path": "../public/images/projects/serene-lines/1.webp"
  },
  "/images/projects/serene-lines/2.webp": {
    "type": "image/webp",
    "etag": "\"aed0-GLJoD/dO9Qmx10LYFZIZiXMWYfM\"",
    "mtime": "2025-04-09T15:29:50.887Z",
    "size": 44752,
    "path": "../public/images/projects/serene-lines/2.webp"
  },
  "/images/projects/serene-lines/3.webp": {
    "type": "image/webp",
    "etag": "\"4572-PSXfCW78SmayZaaOmCb52d42NxU\"",
    "mtime": "2025-04-09T15:29:50.944Z",
    "size": 17778,
    "path": "../public/images/projects/serene-lines/3.webp"
  },
  "/images/projects/serene-lines/4.webp": {
    "type": "image/webp",
    "etag": "\"4c56-Vp8p+VmliXaWwoDvdsBQMAVyYxI\"",
    "mtime": "2025-04-09T15:29:50.997Z",
    "size": 19542,
    "path": "../public/images/projects/serene-lines/4.webp"
  },
  "/images/projects/serene-lines/bathroom.webp": {
    "type": "image/webp",
    "etag": "\"1592c-qtOFli/J+Cdjgo8f5f3EyJBBtMw\"",
    "mtime": "2025-04-09T15:29:51.029Z",
    "size": 88364,
    "path": "../public/images/projects/serene-lines/bathroom.webp"
  },
  "/images/projects/serene-lines/bedroom.webp": {
    "type": "image/webp",
    "etag": "\"435c-Er2R2MAZbZGOWZzqSAOde/4qMXM\"",
    "mtime": "2025-04-09T15:29:51.044Z",
    "size": 17244,
    "path": "../public/images/projects/serene-lines/bedroom.webp"
  },
  "/images/projects/serene-lines/childroom.webp": {
    "type": "image/webp",
    "etag": "\"4d94-dAv6qGD/0q0CHBO74edlwpFQpAM\"",
    "mtime": "2025-04-09T15:29:51.047Z",
    "size": 19860,
    "path": "../public/images/projects/serene-lines/childroom.webp"
  },
  "/images/projects/serene-lines/hall.webp": {
    "type": "image/webp",
    "etag": "\"423a-w4rQzEONfuE5mCFf4c46jp+woAk\"",
    "mtime": "2025-04-09T15:29:51.068Z",
    "size": 16954,
    "path": "../public/images/projects/serene-lines/hall.webp"
  },
  "/images/projects/serene-lines/kitchen.webp": {
    "type": "image/webp",
    "etag": "\"4cc6-yE26DN0cNCDpBw/6/RNgz6WrATw\"",
    "mtime": "2025-04-09T15:29:51.096Z",
    "size": 19654,
    "path": "../public/images/projects/serene-lines/kitchen.webp"
  },
  "/images/projects/urban-grace/1.webp": {
    "type": "image/webp",
    "etag": "\"8712-FvAHuHR9Bzv2EAeS41UMiJ9IUUA\"",
    "mtime": "2025-04-09T15:29:51.099Z",
    "size": 34578,
    "path": "../public/images/projects/urban-grace/1.webp"
  },
  "/images/projects/urban-grace/2.webp": {
    "type": "image/webp",
    "etag": "\"a0e8-JNWaXmitbnM8OktkgHcIY3Z9FqM\"",
    "mtime": "2025-04-09T15:29:51.126Z",
    "size": 41192,
    "path": "../public/images/projects/urban-grace/2.webp"
  },
  "/images/projects/urban-grace/3.webp": {
    "type": "image/webp",
    "etag": "\"58c0-ZwvewEBDK+baBzZJDsRxm/rANPM\"",
    "mtime": "2025-04-09T15:29:51.161Z",
    "size": 22720,
    "path": "../public/images/projects/urban-grace/3.webp"
  },
  "/images/projects/urban-grace/4.webp": {
    "type": "image/webp",
    "etag": "\"424a-pRox2zi0GJfz/i4HzAjYGlUSQOA\"",
    "mtime": "2025-04-09T15:29:51.243Z",
    "size": 16970,
    "path": "../public/images/projects/urban-grace/4.webp"
  },
  "/images/projects/urban-grace/bedroom.webp": {
    "type": "image/webp",
    "etag": "\"42e6-USZ7CejCOoQd6Q23TJmWIAA033I\"",
    "mtime": "2025-04-09T15:29:51.314Z",
    "size": 17126,
    "path": "../public/images/projects/urban-grace/bedroom.webp"
  },
  "/images/projects/urban-grace/corridor.webp": {
    "type": "image/webp",
    "etag": "\"1614-McMLG05BcPxfqs5Sm9L1CPhAZ8Y\"",
    "mtime": "2025-04-09T15:29:51.323Z",
    "size": 5652,
    "path": "../public/images/projects/urban-grace/corridor.webp"
  },
  "/images/projects/urban-grace/kitchen.webp": {
    "type": "image/webp",
    "etag": "\"406a-99ylObQJyx5+67IqHREg7s+iCZE\"",
    "mtime": "2025-04-09T15:29:51.356Z",
    "size": 16490,
    "path": "../public/images/projects/urban-grace/kitchen.webp"
  },
  "/images/projects/urban-grace/lights1.webp": {
    "type": "image/webp",
    "etag": "\"58c0-ZwvewEBDK+baBzZJDsRxm/rANPM\"",
    "mtime": "2025-04-09T15:29:51.363Z",
    "size": 22720,
    "path": "../public/images/projects/urban-grace/lights1.webp"
  },
  "/images/projects/urban-grace/lights2.webp": {
    "type": "image/webp",
    "etag": "\"424a-pRox2zi0GJfz/i4HzAjYGlUSQOA\"",
    "mtime": "2025-04-09T15:29:51.366Z",
    "size": 16970,
    "path": "../public/images/projects/urban-grace/lights2.webp"
  },
  "/images/projects/urban-grace/lounge.webp": {
    "type": "image/webp",
    "etag": "\"a136-uLMk4auWHM3oxYHKL5dSsKxYmPg\"",
    "mtime": "2025-04-09T15:29:51.404Z",
    "size": 41270,
    "path": "../public/images/projects/urban-grace/lounge.webp"
  },
  "/images/projects/urban-grace/lounge2.webp": {
    "type": "image/webp",
    "etag": "\"3a1e-nbA00Z+u7sSJFWzwGNdQoSCsbyQ\"",
    "mtime": "2025-04-09T15:29:51.411Z",
    "size": 14878,
    "path": "../public/images/projects/urban-grace/lounge2.webp"
  },
  "/images/services/commerce-renovation/1.webp": {
    "type": "image/webp",
    "etag": "\"fce-cpTT8TrRc1wBmdHH6dymZDga5/0\"",
    "mtime": "2025-04-09T15:29:51.463Z",
    "size": 4046,
    "path": "../public/images/services/commerce-renovation/1.webp"
  },
  "/images/services/commerce-renovation/2.webp": {
    "type": "image/webp",
    "etag": "\"24ee-aDpmymFLEXaGYLDI3PXbrr9H/9M\"",
    "mtime": "2025-04-09T15:29:51.479Z",
    "size": 9454,
    "path": "../public/images/services/commerce-renovation/2.webp"
  },
  "/images/services/commerce-renovation/3.webp": {
    "type": "image/webp",
    "etag": "\"1bda-qUZWnHunkldrovQ8UPLYbnZi4bw\"",
    "mtime": "2025-04-09T15:29:51.496Z",
    "size": 7130,
    "path": "../public/images/services/commerce-renovation/3.webp"
  },
  "/images/services/commerce-renovation/main.webp": {
    "type": "image/webp",
    "etag": "\"13f8c-TvGIr/nisgFm92Bywcp9iexnci8\"",
    "mtime": "2025-04-09T15:29:51.513Z",
    "size": 81804,
    "path": "../public/images/services/commerce-renovation/main.webp"
  },
  "/images/services/commerce-renovation/shield.webp": {
    "type": "image/webp",
    "etag": "\"8850-QTydYAnCwmwqQjC7ZUzmVP5KEc8\"",
    "mtime": "2025-04-09T15:29:51.529Z",
    "size": 34896,
    "path": "../public/images/services/commerce-renovation/shield.webp"
  },
  "/images/services/house-renovation/1.webp": {
    "type": "image/webp",
    "etag": "\"2638-aQyeIF99arKWGXbxxWnzq0lE8/U\"",
    "mtime": "2025-04-09T15:29:51.585Z",
    "size": 9784,
    "path": "../public/images/services/house-renovation/1.webp"
  },
  "/images/services/house-renovation/2.webp": {
    "type": "image/webp",
    "etag": "\"37f8-WFduivftKmPbj4SGFjz4JLg7eQo\"",
    "mtime": "2025-04-09T15:29:51.597Z",
    "size": 14328,
    "path": "../public/images/services/house-renovation/2.webp"
  },
  "/images/services/house-renovation/3.webp": {
    "type": "image/webp",
    "etag": "\"2e30-tj69H2JZhS7T4oWxAAEIVNefCcc\"",
    "mtime": "2025-04-09T15:29:51.621Z",
    "size": 11824,
    "path": "../public/images/services/house-renovation/3.webp"
  },
  "/images/services/house-renovation/main.webp": {
    "type": "image/webp",
    "etag": "\"61f8-HO8EX/zJkIfM7QPddHrETAUbPM0\"",
    "mtime": "2025-04-09T15:29:51.635Z",
    "size": 25080,
    "path": "../public/images/services/house-renovation/main.webp"
  },
  "/images/services/house-renovation/shield.webp": {
    "type": "image/webp",
    "etag": "\"3e74-jtcdwj5vt6E6aXejyP7GLW3nhY4\"",
    "mtime": "2025-04-09T15:29:51.637Z",
    "size": 15988,
    "path": "../public/images/services/house-renovation/shield.webp"
  },
  "/images/services/interior-design/1.webp": {
    "type": "image/webp",
    "etag": "\"2c26-xz81Kera5d4xKiw/NCdQj6w2I2g\"",
    "mtime": "2025-04-09T15:29:51.662Z",
    "size": 11302,
    "path": "../public/images/services/interior-design/1.webp"
  },
  "/images/services/interior-design/1gallery.webp": {
    "type": "image/webp",
    "etag": "\"284e-4ZntclSP+Nrpw5jhw2/LMI0yf9g\"",
    "mtime": "2025-04-16T00:20:55.880Z",
    "size": 10318,
    "path": "../public/images/services/interior-design/1gallery.webp"
  },
  "/images/services/interior-design/2.webp": {
    "type": "image/webp",
    "etag": "\"3674-XDYEnPAZSCsTvhharnEduFxQDcM\"",
    "mtime": "2025-04-09T15:29:51.690Z",
    "size": 13940,
    "path": "../public/images/services/interior-design/2.webp"
  },
  "/images/services/interior-design/2gallery.webp": {
    "type": "image/webp",
    "etag": "\"2b6e-R6bfIYZA9tcqAf/cHniy3H8iM3U\"",
    "mtime": "2025-04-16T00:22:26.532Z",
    "size": 11118,
    "path": "../public/images/services/interior-design/2gallery.webp"
  },
  "/images/services/interior-design/3.webp": {
    "type": "image/webp",
    "etag": "\"382c-WPWXZtkRa0dYCiYuNy7iqn32jRg\"",
    "mtime": "2025-04-09T15:29:51.697Z",
    "size": 14380,
    "path": "../public/images/services/interior-design/3.webp"
  },
  "/images/services/interior-design/main.webp": {
    "type": "image/webp",
    "etag": "\"dda0-AoI1+CcrkOrGD29uH1KFMc8QKMc\"",
    "mtime": "2025-04-09T15:29:51.728Z",
    "size": 56736,
    "path": "../public/images/services/interior-design/main.webp"
  },
  "/_nuxt/builds/meta/1c84b0a1-6e53-4861-8f13-babbb63a995f.json": {
    "type": "application/json",
    "etag": "\"8b-v7Lar5FxdHHmAyEu+70wbcYkO4o\"",
    "mtime": "2025-04-30T00:43:33.587Z",
    "size": 139,
    "path": "../public/_nuxt/builds/meta/1c84b0a1-6e53-4861-8f13-babbb63a995f.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _5uDFkG = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_vwNeTQ = () => import('../routes/api/blog.mjs');
const _lazy_Q7RjbN = () => import('../routes/api/googleReviews.mjs');
const _lazy_RZaD1u = () => import('../routes/api/projects.mjs');
const _lazy_i4Igm3 = () => import('../routes/api/search.mjs').then(function (n) { return n.s; });
const _lazy_zSAdG3 = () => import('../routes/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _5uDFkG, lazy: false, middleware: true, method: undefined },
  { route: '/api/blog', handler: _lazy_vwNeTQ, lazy: true, middleware: false, method: undefined },
  { route: '/api/googleReviews', handler: _lazy_Q7RjbN, lazy: true, middleware: false, method: undefined },
  { route: '/api/projects', handler: _lazy_RZaD1u, lazy: true, middleware: false, method: undefined },
  { route: '/api/search', handler: _lazy_i4Igm3, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_zSAdG3, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_zSAdG3, lazy: true, middleware: false, method: undefined }
];

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
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
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
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return O(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
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
const nitroApp = createNitroApp();
function useNitroApp() {
  return nitroApp;
}
runNitroPlugins(nitroApp);

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

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

export { toNodeListener as A, trapUnhandledNodeErrors as B, setupGracefulShutdown as C, getResponseStatusText as a, getResponseStatus as b, createError$1 as c, defineEventHandler as d, defineRenderHandler as e, getRouteRules as f, getQuery as g, useNitroApp as h, createHooks as i, joinRelativeURL as j, getContext as k, createRouter$1 as l, defu as m, executeAsync as n, getRequestHeaders as o, getRequestHeader as p, getRequestProtocol as q, destr as r, sanitizeStatusCode as s, toRouteMatcher as t, useRuntimeConfig as u, klona as v, isEqual as w, setCookie as x, getCookie as y, deleteCookie as z };
//# sourceMappingURL=nitro.mjs.map
