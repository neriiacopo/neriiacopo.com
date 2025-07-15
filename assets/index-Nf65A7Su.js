var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function dg(e2, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r) if (o !== "default" && !(o in e2)) {
        const i = Object.getOwnPropertyDescriptor(r, o);
        i && Object.defineProperty(e2, o, i.get ? i : { enumerable: true, get: () => r[o] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o) if (i.type === "childList") for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: true, subtree: true });
  function n(o) {
    const i = {};
    return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function r(o) {
    if (o.ep) return;
    o.ep = true;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function ku(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
function pg(e2) {
  if (e2.__esModule) return e2;
  var t = e2.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: true }), Object.keys(e2).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e2, r);
    Object.defineProperty(n, r, o.get ? o : { enumerable: true, get: function() {
      return e2[r];
    } });
  }), n;
}
var Hd = { exports: {} }, Ml = {}, Kd = { exports: {} }, F = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Go = Symbol.for("react.element"), hg = Symbol.for("react.portal"), mg = Symbol.for("react.fragment"), gg = Symbol.for("react.strict_mode"), yg = Symbol.for("react.profiler"), vg = Symbol.for("react.provider"), Sg = Symbol.for("react.context"), wg = Symbol.for("react.forward_ref"), xg = Symbol.for("react.suspense"), Cg = Symbol.for("react.memo"), kg = Symbol.for("react.lazy"), Jc = Symbol.iterator;
function Eg(e2) {
  return e2 === null || typeof e2 != "object" ? null : (e2 = Jc && e2[Jc] || e2["@@iterator"], typeof e2 == "function" ? e2 : null);
}
var Yd = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Gd = Object.assign, Xd = {};
function Wr(e2, t, n) {
  this.props = e2, this.context = t, this.refs = Xd, this.updater = n || Yd;
}
Wr.prototype.isReactComponent = {};
Wr.prototype.setState = function(e2, t) {
  if (typeof e2 != "object" && typeof e2 != "function" && e2 != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e2, t, "setState");
};
Wr.prototype.forceUpdate = function(e2) {
  this.updater.enqueueForceUpdate(this, e2, "forceUpdate");
};
function Qd() {
}
Qd.prototype = Wr.prototype;
function Eu(e2, t, n) {
  this.props = e2, this.context = t, this.refs = Xd, this.updater = n || Yd;
}
var Tu = Eu.prototype = new Qd();
Tu.constructor = Eu;
Gd(Tu, Wr.prototype);
Tu.isPureReactComponent = true;
var ef = Array.isArray, Zd = Object.prototype.hasOwnProperty, Pu = { current: null }, qd = { key: true, ref: true, __self: true, __source: true };
function Jd(e2, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) Zd.call(t, r) && !qd.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e2 && e2.defaultProps) for (r in s = e2.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Go, type: e2, key: i, ref: l, props: o, _owner: Pu.current };
}
function Tg(e2, t) {
  return { $$typeof: Go, type: e2.type, key: t, ref: e2.ref, props: e2.props, _owner: e2._owner };
}
function _u(e2) {
  return typeof e2 == "object" && e2 !== null && e2.$$typeof === Go;
}
function Pg(e2) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e2.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var tf = /\/+/g;
function Os(e2, t) {
  return typeof e2 == "object" && e2 !== null && e2.key != null ? Pg("" + e2.key) : t.toString(36);
}
function Di(e2, t, n, r, o) {
  var i = typeof e2;
  (i === "undefined" || i === "boolean") && (e2 = null);
  var l = false;
  if (e2 === null) l = true;
  else switch (i) {
    case "string":
    case "number":
      l = true;
      break;
    case "object":
      switch (e2.$$typeof) {
        case Go:
        case hg:
          l = true;
      }
  }
  if (l) return l = e2, o = o(l), e2 = r === "" ? "." + Os(l, 0) : r, ef(o) ? (n = "", e2 != null && (n = e2.replace(tf, "$&/") + "/"), Di(o, t, n, "", function(u) {
    return u;
  })) : o != null && (_u(o) && (o = Tg(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(tf, "$&/") + "/") + e2)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", ef(e2)) for (var s = 0; s < e2.length; s++) {
    i = e2[s];
    var a = r + Os(i, s);
    l += Di(i, t, n, a, o);
  }
  else if (a = Eg(e2), typeof a == "function") for (e2 = a.call(e2), s = 0; !(i = e2.next()).done; ) i = i.value, a = r + Os(i, s++), l += Di(i, t, n, a, o);
  else if (i === "object") throw t = String(e2), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e2).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function fi(e2, t, n) {
  if (e2 == null) return e2;
  var r = [], o = 0;
  return Di(e2, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function _g(e2) {
  if (e2._status === -1) {
    var t = e2._result;
    t = t(), t.then(function(n) {
      (e2._status === 0 || e2._status === -1) && (e2._status = 1, e2._result = n);
    }, function(n) {
      (e2._status === 0 || e2._status === -1) && (e2._status = 2, e2._result = n);
    }), e2._status === -1 && (e2._status = 0, e2._result = t);
  }
  if (e2._status === 1) return e2._result.default;
  throw e2._result;
}
var ze = { current: null }, Ii = { transition: null }, Mg = { ReactCurrentDispatcher: ze, ReactCurrentBatchConfig: Ii, ReactCurrentOwner: Pu };
function ep() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = { map: fi, forEach: function(e2, t, n) {
  fi(e2, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e2) {
  var t = 0;
  return fi(e2, function() {
    t++;
  }), t;
}, toArray: function(e2) {
  return fi(e2, function(t) {
    return t;
  }) || [];
}, only: function(e2) {
  if (!_u(e2)) throw Error("React.Children.only expected to receive a single React element child.");
  return e2;
} };
F.Component = Wr;
F.Fragment = mg;
F.Profiler = yg;
F.PureComponent = Eu;
F.StrictMode = gg;
F.Suspense = xg;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mg;
F.act = ep;
F.cloneElement = function(e2, t, n) {
  if (e2 == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e2 + ".");
  var r = Gd({}, e2.props), o = e2.key, i = e2.ref, l = e2._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Pu.current), t.key !== void 0 && (o = "" + t.key), e2.type && e2.type.defaultProps) var s = e2.type.defaultProps;
    for (a in t) Zd.call(t, a) && !qd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Go, type: e2.type, key: o, ref: i, props: r, _owner: l };
};
F.createContext = function(e2) {
  return e2 = { $$typeof: Sg, _currentValue: e2, _currentValue2: e2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e2.Provider = { $$typeof: vg, _context: e2 }, e2.Consumer = e2;
};
F.createElement = Jd;
F.createFactory = function(e2) {
  var t = Jd.bind(null, e2);
  return t.type = e2, t;
};
F.createRef = function() {
  return { current: null };
};
F.forwardRef = function(e2) {
  return { $$typeof: wg, render: e2 };
};
F.isValidElement = _u;
F.lazy = function(e2) {
  return { $$typeof: kg, _payload: { _status: -1, _result: e2 }, _init: _g };
};
F.memo = function(e2, t) {
  return { $$typeof: Cg, type: e2, compare: t === void 0 ? null : t };
};
F.startTransition = function(e2) {
  var t = Ii.transition;
  Ii.transition = {};
  try {
    e2();
  } finally {
    Ii.transition = t;
  }
};
F.unstable_act = ep;
F.useCallback = function(e2, t) {
  return ze.current.useCallback(e2, t);
};
F.useContext = function(e2) {
  return ze.current.useContext(e2);
};
F.useDebugValue = function() {
};
F.useDeferredValue = function(e2) {
  return ze.current.useDeferredValue(e2);
};
F.useEffect = function(e2, t) {
  return ze.current.useEffect(e2, t);
};
F.useId = function() {
  return ze.current.useId();
};
F.useImperativeHandle = function(e2, t, n) {
  return ze.current.useImperativeHandle(e2, t, n);
};
F.useInsertionEffect = function(e2, t) {
  return ze.current.useInsertionEffect(e2, t);
};
F.useLayoutEffect = function(e2, t) {
  return ze.current.useLayoutEffect(e2, t);
};
F.useMemo = function(e2, t) {
  return ze.current.useMemo(e2, t);
};
F.useReducer = function(e2, t, n) {
  return ze.current.useReducer(e2, t, n);
};
F.useRef = function(e2) {
  return ze.current.useRef(e2);
};
F.useState = function(e2) {
  return ze.current.useState(e2);
};
F.useSyncExternalStore = function(e2, t, n) {
  return ze.current.useSyncExternalStore(e2, t, n);
};
F.useTransition = function() {
  return ze.current.useTransition();
};
F.version = "18.3.1";
Kd.exports = F;
var T = Kd.exports;
const jt = ku(T), pa = dg({ __proto__: null, default: jt }, [T]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var $g = T, Rg = Symbol.for("react.element"), Ng = Symbol.for("react.fragment"), Og = Object.prototype.hasOwnProperty, bg = $g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Dg = { key: true, ref: true, __self: true, __source: true };
function tp(e2, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Og.call(t, r) && !Dg.hasOwnProperty(r) && (o[r] = t[r]);
  if (e2 && e2.defaultProps) for (r in t = e2.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Rg, type: e2, key: i, ref: l, props: o, _owner: bg.current };
}
Ml.Fragment = Ng;
Ml.jsx = tp;
Ml.jsxs = tp;
Hd.exports = Ml;
var $ = Hd.exports;
const Po = { black: "#000", white: "#fff" }, sr = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" }, ar = { 50: "#f3e5f5", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 700: "#7b1fa2" }, ur = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" }, cr = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" }, fr = { 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20" }, Qr = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" }, Ig = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" };
function Gn(e2, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e2}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e2}; visit ${n} for the full message.`;
}
const Ft = "$$material";
function qi() {
  return qi = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e2[r] = n[r]);
    }
    return e2;
  }, qi.apply(null, arguments);
}
function Lg(e2) {
  if (e2.sheet) return e2.sheet;
  for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e2) return document.styleSheets[t];
}
function Ag(e2) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e2.key), e2.nonce !== void 0 && t.setAttribute("nonce", e2.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var zg = function() {
  function e2(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? true : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e2.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ag(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Lg(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e2;
}(), Re = "-ms-", Ji = "-moz-", W = "-webkit-", np = "comm", Mu = "rule", $u = "decl", jg = "@import", rp = "@keyframes", Fg = "@layer", Bg = Math.abs, $l = String.fromCharCode, Ug = Object.assign;
function Vg(e2, t) {
  return Ee(e2, 0) ^ 45 ? (((t << 2 ^ Ee(e2, 0)) << 2 ^ Ee(e2, 1)) << 2 ^ Ee(e2, 2)) << 2 ^ Ee(e2, 3) : 0;
}
function op(e2) {
  return e2.trim();
}
function Wg(e2, t) {
  return (e2 = t.exec(e2)) ? e2[0] : e2;
}
function H(e2, t, n) {
  return e2.replace(t, n);
}
function ha(e2, t) {
  return e2.indexOf(t);
}
function Ee(e2, t) {
  return e2.charCodeAt(t) | 0;
}
function _o(e2, t, n) {
  return e2.slice(t, n);
}
function It(e2) {
  return e2.length;
}
function Ru(e2) {
  return e2.length;
}
function di(e2, t) {
  return t.push(e2), e2;
}
function Hg(e2, t) {
  return e2.map(t).join("");
}
var Rl = 1, Lr = 1, ip = 0, Ke = 0, he = 0, Hr = "";
function Nl(e2, t, n, r, o, i, l) {
  return { value: e2, root: t, parent: n, type: r, props: o, children: i, line: Rl, column: Lr, length: l, return: "" };
}
function Zr(e2, t) {
  return Ug(Nl("", null, null, "", null, null, 0), e2, { length: -e2.length }, t);
}
function Kg() {
  return he;
}
function Yg() {
  return he = Ke > 0 ? Ee(Hr, --Ke) : 0, Lr--, he === 10 && (Lr = 1, Rl--), he;
}
function et() {
  return he = Ke < ip ? Ee(Hr, Ke++) : 0, Lr++, he === 10 && (Lr = 1, Rl++), he;
}
function Bt() {
  return Ee(Hr, Ke);
}
function Li() {
  return Ke;
}
function Xo(e2, t) {
  return _o(Hr, e2, t);
}
function Mo(e2) {
  switch (e2) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function lp(e2) {
  return Rl = Lr = 1, ip = It(Hr = e2), Ke = 0, [];
}
function sp(e2) {
  return Hr = "", e2;
}
function Ai(e2) {
  return op(Xo(Ke - 1, ma(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
}
function Gg(e2) {
  for (; (he = Bt()) && he < 33; ) et();
  return Mo(e2) > 2 || Mo(he) > 3 ? "" : " ";
}
function Xg(e2, t) {
  for (; --t && et() && !(he < 48 || he > 102 || he > 57 && he < 65 || he > 70 && he < 97); ) ;
  return Xo(e2, Li() + (t < 6 && Bt() == 32 && et() == 32));
}
function ma(e2) {
  for (; et(); ) switch (he) {
    case e2:
      return Ke;
    case 34:
    case 39:
      e2 !== 34 && e2 !== 39 && ma(he);
      break;
    case 40:
      e2 === 41 && ma(e2);
      break;
    case 92:
      et();
      break;
  }
  return Ke;
}
function Qg(e2, t) {
  for (; et() && e2 + he !== 57; ) if (e2 + he === 84 && Bt() === 47) break;
  return "/*" + Xo(t, Ke - 1) + "*" + $l(e2 === 47 ? e2 : et());
}
function Zg(e2) {
  for (; !Mo(Bt()); ) et();
  return Xo(e2, Ke);
}
function qg(e2) {
  return sp(zi("", null, null, null, [""], e2 = lp(e2), 0, [0], e2));
}
function zi(e2, t, n, r, o, i, l, s, a) {
  for (var u = 0, h = 0, d = l, m = 0, v = 0, S = 0, w = 1, _ = 1, p = 1, f = 0, g = "", y = o, x = i, C = r, P = g; _; ) switch (S = f, f = et()) {
    case 40:
      if (S != 108 && Ee(P, d - 1) == 58) {
        ha(P += H(Ai(f), "&", "&\f"), "&\f") != -1 && (p = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      P += Ai(f);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      P += Gg(S);
      break;
    case 92:
      P += Xg(Li() - 1, 7);
      continue;
    case 47:
      switch (Bt()) {
        case 42:
        case 47:
          di(Jg(Qg(et(), Li()), t, n), a);
          break;
        default:
          P += "/";
      }
      break;
    case 123 * w:
      s[u++] = It(P) * p;
    case 125 * w:
    case 59:
    case 0:
      switch (f) {
        case 0:
        case 125:
          _ = 0;
        case 59 + h:
          p == -1 && (P = H(P, /\f/g, "")), v > 0 && It(P) - d && di(v > 32 ? rf(P + ";", r, n, d - 1) : rf(H(P, " ", "") + ";", r, n, d - 2), a);
          break;
        case 59:
          P += ";";
        default:
          if (di(C = nf(P, t, n, u, h, o, s, g, y = [], x = [], d), i), f === 123) if (h === 0) zi(P, t, C, C, y, i, d, s, x);
          else switch (m === 99 && Ee(P, 3) === 110 ? 100 : m) {
            case 100:
            case 108:
            case 109:
            case 115:
              zi(e2, C, C, r && di(nf(e2, C, C, 0, 0, o, s, g, o, y = [], d), x), o, x, d, s, r ? y : x);
              break;
            default:
              zi(P, C, C, C, [""], x, 0, s, x);
          }
      }
      u = h = v = 0, w = p = 1, g = P = "", d = l;
      break;
    case 58:
      d = 1 + It(P), v = S;
    default:
      if (w < 1) {
        if (f == 123) --w;
        else if (f == 125 && w++ == 0 && Yg() == 125) continue;
      }
      switch (P += $l(f), f * w) {
        case 38:
          p = h > 0 ? 1 : (P += "\f", -1);
          break;
        case 44:
          s[u++] = (It(P) - 1) * p, p = 1;
          break;
        case 64:
          Bt() === 45 && (P += Ai(et())), m = Bt(), h = d = It(g = P += Zg(Li())), f++;
          break;
        case 45:
          S === 45 && It(P) == 2 && (w = 0);
      }
  }
  return i;
}
function nf(e2, t, n, r, o, i, l, s, a, u, h) {
  for (var d = o - 1, m = o === 0 ? i : [""], v = Ru(m), S = 0, w = 0, _ = 0; S < r; ++S) for (var p = 0, f = _o(e2, d + 1, d = Bg(w = l[S])), g = e2; p < v; ++p) (g = op(w > 0 ? m[p] + " " + f : H(f, /&\f/g, m[p]))) && (a[_++] = g);
  return Nl(e2, t, n, o === 0 ? Mu : s, a, u, h);
}
function Jg(e2, t, n) {
  return Nl(e2, t, n, np, $l(Kg()), _o(e2, 2, -2), 0);
}
function rf(e2, t, n, r) {
  return Nl(e2, t, n, $u, _o(e2, 0, r), _o(e2, r + 1, -1), r);
}
function Mr(e2, t) {
  for (var n = "", r = Ru(e2), o = 0; o < r; o++) n += t(e2[o], o, e2, t) || "";
  return n;
}
function ey(e2, t, n, r) {
  switch (e2.type) {
    case Fg:
      if (e2.children.length) break;
    case jg:
    case $u:
      return e2.return = e2.return || e2.value;
    case np:
      return "";
    case rp:
      return e2.return = e2.value + "{" + Mr(e2.children, r) + "}";
    case Mu:
      e2.value = e2.props.join(",");
  }
  return It(n = Mr(e2.children, r)) ? e2.return = e2.value + "{" + n + "}" : "";
}
function ty(e2) {
  var t = Ru(e2);
  return function(n, r, o, i) {
    for (var l = "", s = 0; s < t; s++) l += e2[s](n, r, o, i) || "";
    return l;
  };
}
function ny(e2) {
  return function(t) {
    t.root || (t = t.return) && e2(t);
  };
}
function ap(e2) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e2(n)), t[n];
  };
}
var ry = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Bt(), o === 38 && i === 12 && (n[r] = 1), !Mo(i); ) et();
  return Xo(t, Ke);
}, oy = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Mo(o)) {
      case 0:
        o === 38 && Bt() === 12 && (n[r] = 1), t[r] += ry(Ke - 1, n, r);
        break;
      case 2:
        t[r] += Ai(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Bt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += $l(o);
    }
  while (o = et());
  return t;
}, iy = function(t, n) {
  return sp(oy(lp(t), n));
}, of = /* @__PURE__ */ new WeakMap(), ly = function(t) {
  if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !of.get(r)) && !o) {
      of.set(t, true);
      for (var i = [], l = iy(n, i), s = r.props, a = 0, u = 0; a < l.length; a++) for (var h = 0; h < s.length; h++, u++) t.props[u] = i[a] ? l[a].replace(/&\f/g, s[h]) : s[h] + " " + l[a];
    }
  }
}, sy = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function up(e2, t) {
  switch (Vg(e2, t)) {
    case 5103:
      return W + "print-" + e2 + e2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return W + e2 + e2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return W + e2 + Ji + e2 + Re + e2 + e2;
    case 6828:
    case 4268:
      return W + e2 + Re + e2 + e2;
    case 6165:
      return W + e2 + Re + "flex-" + e2 + e2;
    case 5187:
      return W + e2 + H(e2, /(\w+).+(:[^]+)/, W + "box-$1$2" + Re + "flex-$1$2") + e2;
    case 5443:
      return W + e2 + Re + "flex-item-" + H(e2, /flex-|-self/, "") + e2;
    case 4675:
      return W + e2 + Re + "flex-line-pack" + H(e2, /align-content|flex-|-self/, "") + e2;
    case 5548:
      return W + e2 + Re + H(e2, "shrink", "negative") + e2;
    case 5292:
      return W + e2 + Re + H(e2, "basis", "preferred-size") + e2;
    case 6060:
      return W + "box-" + H(e2, "-grow", "") + W + e2 + Re + H(e2, "grow", "positive") + e2;
    case 4554:
      return W + H(e2, /([^-])(transform)/g, "$1" + W + "$2") + e2;
    case 6187:
      return H(H(H(e2, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), e2, "") + e2;
    case 5495:
    case 3959:
      return H(e2, /(image-set\([^]*)/, W + "$1$`$1");
    case 4968:
      return H(H(e2, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + Re + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + e2 + e2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return H(e2, /(.+)-inline(.+)/, W + "$1$2") + e2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (It(e2) - 1 - t > 6) switch (Ee(e2, t + 1)) {
        case 109:
          if (Ee(e2, t + 4) !== 45) break;
        case 102:
          return H(e2, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + Ji + (Ee(e2, t + 3) == 108 ? "$3" : "$2-$3")) + e2;
        case 115:
          return ~ha(e2, "stretch") ? up(H(e2, "stretch", "fill-available"), t) + e2 : e2;
      }
      break;
    case 4949:
      if (Ee(e2, t + 1) !== 115) break;
    case 6444:
      switch (Ee(e2, It(e2) - 3 - (~ha(e2, "!important") && 10))) {
        case 107:
          return H(e2, ":", ":" + W) + e2;
        case 101:
          return H(e2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + W + (Ee(e2, 14) === 45 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + Re + "$2box$3") + e2;
      }
      break;
    case 5936:
      switch (Ee(e2, t + 11)) {
        case 114:
          return W + e2 + Re + H(e2, /[svh]\w+-[tblr]{2}/, "tb") + e2;
        case 108:
          return W + e2 + Re + H(e2, /[svh]\w+-[tblr]{2}/, "tb-rl") + e2;
        case 45:
          return W + e2 + Re + H(e2, /[svh]\w+-[tblr]{2}/, "lr") + e2;
      }
      return W + e2 + Re + e2 + e2;
  }
  return e2;
}
var ay = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case $u:
      t.return = up(t.value, t.length);
      break;
    case rp:
      return Mr([Zr(t, { value: H(t.value, "@", "@" + W) })], o);
    case Mu:
      if (t.length) return Hg(t.props, function(i) {
        switch (Wg(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Mr([Zr(t, { props: [H(i, /:(read-\w+)/, ":" + Ji + "$1")] })], o);
          case "::placeholder":
            return Mr([Zr(t, { props: [H(i, /:(plac\w+)/, ":" + W + "input-$1")] }), Zr(t, { props: [H(i, /:(plac\w+)/, ":" + Ji + "$1")] }), Zr(t, { props: [H(i, /:(plac\w+)/, Re + "input-$1")] })], o);
        }
        return "";
      });
  }
}, uy = [ay], cy = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(w) {
      var _ = w.getAttribute("data-emotion");
      _.indexOf(" ") !== -1 && (document.head.appendChild(w), w.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || uy, i = {}, l, s = [];
  l = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(w) {
    for (var _ = w.getAttribute("data-emotion").split(" "), p = 1; p < _.length; p++) i[_[p]] = true;
    s.push(w);
  });
  var a, u = [ly, sy];
  {
    var h, d = [ey, ny(function(w) {
      h.insert(w);
    })], m = ty(u.concat(o, d)), v = function(_) {
      return Mr(qg(_), m);
    };
    a = function(_, p, f, g) {
      h = f, v(_ ? _ + "{" + p.styles + "}" : p.styles), g && (S.inserted[p.name] = true);
    };
  }
  var S = { key: n, sheet: new zg({ key: n, container: l, nonce: t.nonce, speedy: t.speedy, prepend: t.prepend, insertionPoint: t.insertionPoint }), nonce: t.nonce, inserted: i, registered: {}, insert: a };
  return S.sheet.hydrate(s), S;
}, cp = { exports: {} }, G = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ce = typeof Symbol == "function" && Symbol.for, Nu = Ce ? Symbol.for("react.element") : 60103, Ou = Ce ? Symbol.for("react.portal") : 60106, Ol = Ce ? Symbol.for("react.fragment") : 60107, bl = Ce ? Symbol.for("react.strict_mode") : 60108, Dl = Ce ? Symbol.for("react.profiler") : 60114, Il = Ce ? Symbol.for("react.provider") : 60109, Ll = Ce ? Symbol.for("react.context") : 60110, bu = Ce ? Symbol.for("react.async_mode") : 60111, Al = Ce ? Symbol.for("react.concurrent_mode") : 60111, zl = Ce ? Symbol.for("react.forward_ref") : 60112, jl = Ce ? Symbol.for("react.suspense") : 60113, fy = Ce ? Symbol.for("react.suspense_list") : 60120, Fl = Ce ? Symbol.for("react.memo") : 60115, Bl = Ce ? Symbol.for("react.lazy") : 60116, dy = Ce ? Symbol.for("react.block") : 60121, py = Ce ? Symbol.for("react.fundamental") : 60117, hy = Ce ? Symbol.for("react.responder") : 60118, my = Ce ? Symbol.for("react.scope") : 60119;
function it(e2) {
  if (typeof e2 == "object" && e2 !== null) {
    var t = e2.$$typeof;
    switch (t) {
      case Nu:
        switch (e2 = e2.type, e2) {
          case bu:
          case Al:
          case Ol:
          case Dl:
          case bl:
          case jl:
            return e2;
          default:
            switch (e2 = e2 && e2.$$typeof, e2) {
              case Ll:
              case zl:
              case Bl:
              case Fl:
              case Il:
                return e2;
              default:
                return t;
            }
        }
      case Ou:
        return t;
    }
  }
}
function fp(e2) {
  return it(e2) === Al;
}
G.AsyncMode = bu;
G.ConcurrentMode = Al;
G.ContextConsumer = Ll;
G.ContextProvider = Il;
G.Element = Nu;
G.ForwardRef = zl;
G.Fragment = Ol;
G.Lazy = Bl;
G.Memo = Fl;
G.Portal = Ou;
G.Profiler = Dl;
G.StrictMode = bl;
G.Suspense = jl;
G.isAsyncMode = function(e2) {
  return fp(e2) || it(e2) === bu;
};
G.isConcurrentMode = fp;
G.isContextConsumer = function(e2) {
  return it(e2) === Ll;
};
G.isContextProvider = function(e2) {
  return it(e2) === Il;
};
G.isElement = function(e2) {
  return typeof e2 == "object" && e2 !== null && e2.$$typeof === Nu;
};
G.isForwardRef = function(e2) {
  return it(e2) === zl;
};
G.isFragment = function(e2) {
  return it(e2) === Ol;
};
G.isLazy = function(e2) {
  return it(e2) === Bl;
};
G.isMemo = function(e2) {
  return it(e2) === Fl;
};
G.isPortal = function(e2) {
  return it(e2) === Ou;
};
G.isProfiler = function(e2) {
  return it(e2) === Dl;
};
G.isStrictMode = function(e2) {
  return it(e2) === bl;
};
G.isSuspense = function(e2) {
  return it(e2) === jl;
};
G.isValidElementType = function(e2) {
  return typeof e2 == "string" || typeof e2 == "function" || e2 === Ol || e2 === Al || e2 === Dl || e2 === bl || e2 === jl || e2 === fy || typeof e2 == "object" && e2 !== null && (e2.$$typeof === Bl || e2.$$typeof === Fl || e2.$$typeof === Il || e2.$$typeof === Ll || e2.$$typeof === zl || e2.$$typeof === py || e2.$$typeof === hy || e2.$$typeof === my || e2.$$typeof === dy);
};
G.typeOf = it;
cp.exports = G;
var gy = cp.exports, dp = gy, yy = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, vy = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, pp = {};
pp[dp.ForwardRef] = yy;
pp[dp.Memo] = vy;
var Sy = true;
function hp(e2, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e2[o] !== void 0 ? t.push(e2[o] + ";") : o && (r += o + " ");
  }), r;
}
var Du = function(t, n, r) {
  var o = t.key + "-" + n.name;
  (r === false || Sy === false) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Iu = function(t, n, r) {
  Du(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, true), i = i.next;
    while (i !== void 0);
  }
};
function wy(e2) {
  for (var t = 0, n, r = 0, o = e2.length; o >= 4; ++r, o -= 4) n = e2.charCodeAt(r) & 255 | (e2.charCodeAt(++r) & 255) << 8 | (e2.charCodeAt(++r) & 255) << 16 | (e2.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e2.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e2.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e2.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var xy = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, Cy = /[A-Z]|^ms/g, ky = /_EMO_([^_]+?)_([^]*?)_EMO_/g, mp = function(t) {
  return t.charCodeAt(1) === 45;
}, lf = function(t) {
  return t != null && typeof t != "boolean";
}, bs = ap(function(e2) {
  return mp(e2) ? e2 : e2.replace(Cy, "-$&").toLowerCase();
}), sf = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string") return n.replace(ky, function(r, o, i) {
        return Lt = { name: o, styles: i, next: Lt }, o;
      });
  }
  return xy[t] !== 1 && !mp(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function $o(e2, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1) return Lt = { name: o.name, styles: o.styles, next: Lt }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var l = i.next;
        if (l !== void 0) for (; l !== void 0; ) Lt = { name: l.name, styles: l.styles, next: Lt }, l = l.next;
        var s = i.styles + ";";
        return s;
      }
      return Ey(e2, t, n);
    }
    case "function": {
      if (e2 !== void 0) {
        var a = Lt, u = n(e2);
        return Lt = a, $o(e2, t, u);
      }
      break;
    }
  }
  var h = n;
  if (t == null) return h;
  var d = t[h];
  return d !== void 0 ? d : h;
}
function Ey(e2, t, n) {
  var r = "";
  if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += $o(e2, t, n[o]) + ";";
  else for (var i in n) {
    var l = n[i];
    if (typeof l != "object") {
      var s = l;
      t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : lf(s) && (r += bs(i) + ":" + sf(i, s) + ";");
    } else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0)) for (var a = 0; a < l.length; a++) lf(l[a]) && (r += bs(i) + ":" + sf(i, l[a]) + ";");
    else {
      var u = $o(e2, t, l);
      switch (i) {
        case "animation":
        case "animationName": {
          r += bs(i) + ":" + u + ";";
          break;
        }
        default:
          r += i + "{" + u + "}";
      }
    }
  }
  return r;
}
var af = /label:\s*([^\s;{]+)\s*(;|$)/g, Lt;
function Qo(e2, t, n) {
  if (e2.length === 1 && typeof e2[0] == "object" && e2[0] !== null && e2[0].styles !== void 0) return e2[0];
  var r = true, o = "";
  Lt = void 0;
  var i = e2[0];
  if (i == null || i.raw === void 0) r = false, o += $o(n, t, i);
  else {
    var l = i;
    o += l[0];
  }
  for (var s = 1; s < e2.length; s++) if (o += $o(n, t, e2[s]), r) {
    var a = i;
    o += a[s];
  }
  af.lastIndex = 0;
  for (var u = "", h; (h = af.exec(o)) !== null; ) u += "-" + h[1];
  var d = wy(o) + u;
  return { name: d, styles: o, next: Lt };
}
var Ty = function(t) {
  return t();
}, gp = pa.useInsertionEffect ? pa.useInsertionEffect : false, yp = gp || Ty, uf = gp || T.useLayoutEffect, vp = T.createContext(typeof HTMLElement < "u" ? cy({ key: "css" }) : null);
vp.Provider;
var Lu = function(t) {
  return T.forwardRef(function(n, r) {
    var o = T.useContext(vp);
    return t(n, o, r);
  });
}, Zo = T.createContext({}), Au = {}.hasOwnProperty, ga = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Py = function(t, n) {
  var r = {};
  for (var o in n) Au.call(n, o) && (r[o] = n[o]);
  return r[ga] = t, r;
}, _y = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Du(n, r, o), yp(function() {
    return Iu(n, r, o);
  }), null;
}, My = Lu(function(e2, t, n) {
  var r = e2.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e2[ga], i = [r], l = "";
  typeof e2.className == "string" ? l = hp(t.registered, i, e2.className) : e2.className != null && (l = e2.className + " ");
  var s = Qo(i, void 0, T.useContext(Zo));
  l += t.key + "-" + s.name;
  var a = {};
  for (var u in e2) Au.call(e2, u) && u !== "css" && u !== ga && (a[u] = e2[u]);
  return a.className = l, n && (a.ref = n), T.createElement(T.Fragment, null, T.createElement(_y, { cache: t, serialized: s, isStringTag: typeof o == "string" }), T.createElement(o, a));
}), $y = My, cf = function(t, n) {
  var r = arguments;
  if (n == null || !Au.call(n, "css")) return T.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = $y, i[1] = Py(t, n);
  for (var l = 2; l < o; l++) i[l] = r[l];
  return T.createElement.apply(null, i);
};
(function(e2) {
  var t;
  t || (t = e2.JSX || (e2.JSX = {}));
})(cf || (cf = {}));
var Ry = Lu(function(e2, t) {
  var n = e2.styles, r = Qo([n], void 0, T.useContext(Zo)), o = T.useRef();
  return uf(function() {
    var i = t.key + "-global", l = new t.sheet.constructor({ key: i, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }), s = false, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), a !== null && (s = true, a.setAttribute("data-emotion", i), l.hydrate([a])), o.current = [l, s], function() {
      l.flush();
    };
  }, [t]), uf(function() {
    var i = o.current, l = i[0], s = i[1];
    if (s) {
      i[1] = false;
      return;
    }
    if (r.next !== void 0 && Iu(t, r.next, true), l.tags.length) {
      var a = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = a, l.flush();
    }
    t.insert("", r, l, false);
  }, [t, r.name]), null;
});
function zu() {
  for (var e2 = arguments.length, t = new Array(e2), n = 0; n < e2; n++) t[n] = arguments[n];
  return Qo(t);
}
function qo() {
  var e2 = zu.apply(void 0, arguments), t = "animation-" + e2.name;
  return { name: t, styles: "@keyframes " + t + "{" + e2.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var Ny = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Oy = ap(function(e2) {
  return Ny.test(e2) || e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && e2.charCodeAt(2) < 91;
}), by = Oy, Dy = function(t) {
  return t !== "theme";
}, ff = function(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96 ? by : Dy;
}, df = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(l) {
      return t.__emotion_forwardProp(l) && i(l);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Iy = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Du(n, r, o), yp(function() {
    return Iu(n, r, o);
  }), null;
}, Ly = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, l;
  n !== void 0 && (i = n.label, l = n.target);
  var s = df(t, n, r), a = s || ff(o), u = !a("as");
  return function() {
    var h = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), h[0] == null || h[0].raw === void 0) d.push.apply(d, h);
    else {
      var m = h[0];
      d.push(m[0]);
      for (var v = h.length, S = 1; S < v; S++) d.push(h[S], m[S]);
    }
    var w = Lu(function(_, p, f) {
      var g = u && _.as || o, y = "", x = [], C = _;
      if (_.theme == null) {
        C = {};
        for (var P in _) C[P] = _[P];
        C.theme = T.useContext(Zo);
      }
      typeof _.className == "string" ? y = hp(p.registered, x, _.className) : _.className != null && (y = _.className + " ");
      var k = Qo(d.concat(x), p.registered, C);
      y += p.key + "-" + k.name, l !== void 0 && (y += " " + l);
      var R = u && s === void 0 ? ff(g) : a, c = {};
      for (var M in _) u && M === "as" || R(M) && (c[M] = _[M]);
      return c.className = y, f && (c.ref = f), T.createElement(T.Fragment, null, T.createElement(Iy, { cache: p, serialized: k, isStringTag: typeof g == "string" }), T.createElement(g, c));
    });
    return w.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = o, w.__emotion_styles = d, w.__emotion_forwardProp = s, Object.defineProperty(w, "toString", { value: function() {
      return "." + l;
    } }), w.withComponent = function(_, p) {
      var f = e(_, qi({}, n, p, { shouldForwardProp: df(w, p, true) }));
      return f.apply(void 0, d);
    }, w;
  };
}, Ay = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], ya = Ly.bind(null);
Ay.forEach(function(e2) {
  ya[e2] = ya(e2);
});
var Sp = { exports: {} }, zy = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", jy = zy, Fy = jy;
function wp() {
}
function xp() {
}
xp.resetWarningCache = wp;
var By = function() {
  function e2(r, o, i, l, s, a) {
    if (a !== Fy) {
      var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw u.name = "Invariant Violation", u;
    }
  }
  e2.isRequired = e2;
  function t() {
    return e2;
  }
  var n = { array: e2, bigint: e2, bool: e2, func: e2, number: e2, object: e2, string: e2, symbol: e2, any: e2, arrayOf: t, element: e2, elementType: e2, instanceOf: t, node: e2, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: xp, resetWarningCache: wp };
  return n.PropTypes = n, n;
};
Sp.exports = By();
var Cp = Sp.exports;
function Uy(e2) {
  return e2 == null || Object.keys(e2).length === 0;
}
function kp(e2) {
  const { styles: t, defaultTheme: n = {} } = e2, r = typeof t == "function" ? (o) => t(Uy(o) ? n : o) : t;
  return $.jsx(Ry, { styles: r });
}
function Ep(e2, t) {
  return ya(e2, t);
}
function Vy(e2, t) {
  Array.isArray(e2.__emotion_styles) && (e2.__emotion_styles = t(e2.__emotion_styles));
}
const pf = [];
function hf(e2) {
  return pf[0] = e2, Qo(pf);
}
var Tp = { exports: {} }, Z = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ju = Symbol.for("react.transitional.element"), Fu = Symbol.for("react.portal"), Ul = Symbol.for("react.fragment"), Vl = Symbol.for("react.strict_mode"), Wl = Symbol.for("react.profiler"), Hl = Symbol.for("react.consumer"), Kl = Symbol.for("react.context"), Yl = Symbol.for("react.forward_ref"), Gl = Symbol.for("react.suspense"), Xl = Symbol.for("react.suspense_list"), Ql = Symbol.for("react.memo"), Zl = Symbol.for("react.lazy"), Wy = Symbol.for("react.view_transition"), Hy = Symbol.for("react.client.reference");
function wt(e2) {
  if (typeof e2 == "object" && e2 !== null) {
    var t = e2.$$typeof;
    switch (t) {
      case ju:
        switch (e2 = e2.type, e2) {
          case Ul:
          case Wl:
          case Vl:
          case Gl:
          case Xl:
          case Wy:
            return e2;
          default:
            switch (e2 = e2 && e2.$$typeof, e2) {
              case Kl:
              case Yl:
              case Zl:
              case Ql:
                return e2;
              case Hl:
                return e2;
              default:
                return t;
            }
        }
      case Fu:
        return t;
    }
  }
}
Z.ContextConsumer = Hl;
Z.ContextProvider = Kl;
Z.Element = ju;
Z.ForwardRef = Yl;
Z.Fragment = Ul;
Z.Lazy = Zl;
Z.Memo = Ql;
Z.Portal = Fu;
Z.Profiler = Wl;
Z.StrictMode = Vl;
Z.Suspense = Gl;
Z.SuspenseList = Xl;
Z.isContextConsumer = function(e2) {
  return wt(e2) === Hl;
};
Z.isContextProvider = function(e2) {
  return wt(e2) === Kl;
};
Z.isElement = function(e2) {
  return typeof e2 == "object" && e2 !== null && e2.$$typeof === ju;
};
Z.isForwardRef = function(e2) {
  return wt(e2) === Yl;
};
Z.isFragment = function(e2) {
  return wt(e2) === Ul;
};
Z.isLazy = function(e2) {
  return wt(e2) === Zl;
};
Z.isMemo = function(e2) {
  return wt(e2) === Ql;
};
Z.isPortal = function(e2) {
  return wt(e2) === Fu;
};
Z.isProfiler = function(e2) {
  return wt(e2) === Wl;
};
Z.isStrictMode = function(e2) {
  return wt(e2) === Vl;
};
Z.isSuspense = function(e2) {
  return wt(e2) === Gl;
};
Z.isSuspenseList = function(e2) {
  return wt(e2) === Xl;
};
Z.isValidElementType = function(e2) {
  return typeof e2 == "string" || typeof e2 == "function" || e2 === Ul || e2 === Wl || e2 === Vl || e2 === Gl || e2 === Xl || typeof e2 == "object" && e2 !== null && (e2.$$typeof === Zl || e2.$$typeof === Ql || e2.$$typeof === Kl || e2.$$typeof === Hl || e2.$$typeof === Yl || e2.$$typeof === Hy || e2.getModuleId !== void 0);
};
Z.typeOf = wt;
Tp.exports = Z;
var Pp = Tp.exports;
function At(e2) {
  if (typeof e2 != "object" || e2 === null) return false;
  const t = Object.getPrototypeOf(e2);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e2) && !(Symbol.iterator in e2);
}
function _p(e2) {
  if (T.isValidElement(e2) || Pp.isValidElementType(e2) || !At(e2)) return e2;
  const t = {};
  return Object.keys(e2).forEach((n) => {
    t[n] = _p(e2[n]);
  }), t;
}
function tt(e2, t, n = { clone: true }) {
  const r = n.clone ? { ...e2 } : e2;
  return At(e2) && At(t) && Object.keys(t).forEach((o) => {
    T.isValidElement(t[o]) || Pp.isValidElementType(t[o]) ? r[o] = t[o] : At(t[o]) && Object.prototype.hasOwnProperty.call(e2, o) && At(e2[o]) ? r[o] = tt(e2[o], t[o], n) : n.clone ? r[o] = At(t[o]) ? _p(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Ky = (e2) => {
  const t = Object.keys(e2).map((n) => ({ key: n, val: e2[n] })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({ ...n, [r.key]: r.val }), {});
};
function Yy(e2) {
  const { values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: n = "px", step: r = 5, ...o } = e2, i = Ky(t), l = Object.keys(i);
  function s(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function a(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function u(m, v) {
    const S = l.indexOf(v);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(S !== -1 && typeof t[l[S]] == "number" ? t[l[S]] : v) - r / 100}${n})`;
  }
  function h(m) {
    return l.indexOf(m) + 1 < l.length ? u(m, l[l.indexOf(m) + 1]) : s(m);
  }
  function d(m) {
    const v = l.indexOf(m);
    return v === 0 ? s(l[1]) : v === l.length - 1 ? a(l[v]) : u(m, l[l.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return { keys: l, values: i, up: s, down: a, between: u, only: h, not: d, unit: n, ...o };
}
function Gy(e2, t) {
  if (!e2.containerQueries) return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, o) => {
    var _a2, _b;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((_a2 = r.match(i)) == null ? void 0 : _a2[1]) || 0) - +(((_b = o.match(i)) == null ? void 0 : _b[1]) || 0);
  });
  return n.length ? n.reduce((r, o) => {
    const i = t[o];
    return delete r[o], r[o] = i, r;
  }, { ...t }) : t;
}
function Xy(e2, t) {
  return t === "@" || t.startsWith("@") && (e2.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Qy(e2, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e2.containerQueries(o).up(i);
}
function Zy(e2) {
  const t = (i, l) => i.replace("@media", l ? `@container ${l}` : "@container");
  function n(i, l) {
    i.up = (...s) => t(e2.breakpoints.up(...s), l), i.down = (...s) => t(e2.breakpoints.down(...s), l), i.between = (...s) => t(e2.breakpoints.between(...s), l), i.only = (...s) => t(e2.breakpoints.only(...s), l), i.not = (...s) => {
      const a = t(e2.breakpoints.not(...s), l);
      return a.includes("not all and") ? a.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : a;
    };
  }
  const r = {}, o = (i) => (n(r, i), r);
  return n(o), { ...e2, containerQueries: o };
}
const qy = { borderRadius: 4 };
function mo(e2, t) {
  return t ? tt(e2, t, { clone: false }) : e2;
}
const ql = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, mf = { keys: ["xs", "sm", "md", "lg", "xl"], up: (e2) => `@media (min-width:${ql[e2]}px)` }, Jy = { containerQueries: (e2) => ({ up: (t) => {
  let n = typeof t == "number" ? t : ql[t] || t;
  return typeof n == "number" && (n = `${n}px`), e2 ? `@container ${e2} (min-width:${n})` : `@container (min-width:${n})`;
} }) };
function tn(e2, t, n) {
  const r = e2.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || mf;
    return t.reduce((l, s, a) => (l[i.up(i.keys[a])] = n(t[a]), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || mf;
    return Object.keys(t).reduce((l, s) => {
      if (Xy(i.keys, s)) {
        const a = Qy(r.containerQueries ? r : Jy, s);
        a && (l[a] = n(t[s], s));
      } else if (Object.keys(i.values || ql).includes(s)) {
        const a = i.up(s);
        l[a] = n(t[s], s);
      } else {
        const a = s;
        l[a] = t[a];
      }
      return l;
    }, {});
  }
  return n(t);
}
function e0(e2 = {}) {
  var _a2;
  return ((_a2 = e2.keys) == null ? void 0 : _a2.reduce((n, r) => {
    const o = e2.up(r);
    return n[o] = {}, n;
  }, {})) || {};
}
function t0(e2, t) {
  return e2.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function ve(e2) {
  if (typeof e2 != "string") throw new Error(Gn(7));
  return e2.charAt(0).toUpperCase() + e2.slice(1);
}
function Jl(e2, t, n = true) {
  if (!t || typeof t != "string") return null;
  if (e2 && e2.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e2);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e2);
}
function el(e2, t, n, r = n) {
  let o;
  return typeof e2 == "function" ? o = e2(n) : Array.isArray(e2) ? o = e2[n] || r : o = Jl(e2, n) || r, t && (o = t(o, r, e2)), o;
}
function pe(e2) {
  const { prop: t, cssProperty: n = e2.prop, themeKey: r, transform: o } = e2, i = (l) => {
    if (l[t] == null) return null;
    const s = l[t], a = l.theme, u = Jl(a, r) || {};
    return tn(l, s, (d) => {
      let m = el(u, o, d);
      return d === m && typeof d == "string" && (m = el(u, o, `${t}${d === "default" ? "" : ve(d)}`, d)), n === false ? m : { [n]: m };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function n0(e2) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e2(n)), t[n]);
}
const r0 = { m: "margin", p: "padding" }, o0 = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, gf = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, i0 = n0((e2) => {
  if (e2.length > 2) if (gf[e2]) e2 = gf[e2];
  else return [e2];
  const [t, n] = e2.split(""), r = r0[t], o = o0[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Bu = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Uu = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Bu, ...Uu];
function Jo(e2, t, n, r) {
  const o = Jl(e2, t, true) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string") return i;
    const l = Math.abs(i), s = o[l];
    return i >= 0 ? s : typeof s == "number" ? -s : typeof s == "string" && s.startsWith("var(") ? `calc(-1 * ${s})` : `-${s}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Vu(e2) {
  return Jo(e2, "spacing", 8);
}
function ei(e2, t) {
  return typeof t == "string" || t == null ? t : e2(t);
}
function l0(e2, t) {
  return (n) => e2.reduce((r, o) => (r[o] = ei(t, n), r), {});
}
function s0(e2, t, n, r) {
  if (!t.includes(n)) return null;
  const o = i0(n), i = l0(o, r), l = e2[n];
  return tn(e2, l, i);
}
function Mp(e2, t) {
  const n = Vu(e2.theme);
  return Object.keys(e2).map((r) => s0(e2, t, r, n)).reduce(mo, {});
}
function se(e2) {
  return Mp(e2, Bu);
}
se.propTypes = {};
se.filterProps = Bu;
function ae(e2) {
  return Mp(e2, Uu);
}
ae.propTypes = {};
ae.filterProps = Uu;
function $p(e2 = 8, t = Vu({ spacing: e2 })) {
  if (e2.mui) return e2;
  const n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const l = t(i);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" ");
  return n.mui = true, n;
}
function es(...e2) {
  const t = e2.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? mo(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e2.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function pt(e2) {
  return typeof e2 != "number" ? e2 : `${e2}px solid`;
}
function xt(e2, t) {
  return pe({ prop: e2, themeKey: "borders", transform: t });
}
const a0 = xt("border", pt), u0 = xt("borderTop", pt), c0 = xt("borderRight", pt), f0 = xt("borderBottom", pt), d0 = xt("borderLeft", pt), p0 = xt("borderColor"), h0 = xt("borderTopColor"), m0 = xt("borderRightColor"), g0 = xt("borderBottomColor"), y0 = xt("borderLeftColor"), v0 = xt("outline", pt), S0 = xt("outlineColor"), ts = (e2) => {
  if (e2.borderRadius !== void 0 && e2.borderRadius !== null) {
    const t = Jo(e2.theme, "shape.borderRadius", 4), n = (r) => ({ borderRadius: ei(t, r) });
    return tn(e2, e2.borderRadius, n);
  }
  return null;
};
ts.propTypes = {};
ts.filterProps = ["borderRadius"];
es(a0, u0, c0, f0, d0, p0, h0, m0, g0, y0, ts, v0, S0);
const ns = (e2) => {
  if (e2.gap !== void 0 && e2.gap !== null) {
    const t = Jo(e2.theme, "spacing", 8), n = (r) => ({ gap: ei(t, r) });
    return tn(e2, e2.gap, n);
  }
  return null;
};
ns.propTypes = {};
ns.filterProps = ["gap"];
const rs = (e2) => {
  if (e2.columnGap !== void 0 && e2.columnGap !== null) {
    const t = Jo(e2.theme, "spacing", 8), n = (r) => ({ columnGap: ei(t, r) });
    return tn(e2, e2.columnGap, n);
  }
  return null;
};
rs.propTypes = {};
rs.filterProps = ["columnGap"];
const os = (e2) => {
  if (e2.rowGap !== void 0 && e2.rowGap !== null) {
    const t = Jo(e2.theme, "spacing", 8), n = (r) => ({ rowGap: ei(t, r) });
    return tn(e2, e2.rowGap, n);
  }
  return null;
};
os.propTypes = {};
os.filterProps = ["rowGap"];
const w0 = pe({ prop: "gridColumn" }), x0 = pe({ prop: "gridRow" }), C0 = pe({ prop: "gridAutoFlow" }), k0 = pe({ prop: "gridAutoColumns" }), E0 = pe({ prop: "gridAutoRows" }), T0 = pe({ prop: "gridTemplateColumns" }), P0 = pe({ prop: "gridTemplateRows" }), _0 = pe({ prop: "gridTemplateAreas" }), M0 = pe({ prop: "gridArea" });
es(ns, rs, os, w0, x0, C0, k0, E0, T0, P0, _0, M0);
function $r(e2, t) {
  return t === "grey" ? t : e2;
}
const $0 = pe({ prop: "color", themeKey: "palette", transform: $r }), R0 = pe({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: $r }), N0 = pe({ prop: "backgroundColor", themeKey: "palette", transform: $r });
es($0, R0, N0);
function Ze(e2) {
  return e2 <= 1 && e2 !== 0 ? `${e2 * 100}%` : e2;
}
const O0 = pe({ prop: "width", transform: Ze }), Wu = (e2) => {
  if (e2.maxWidth !== void 0 && e2.maxWidth !== null) {
    const t = (n) => {
      var _a2, _b, _c2, _d2, _e2;
      const r = ((_c2 = (_b = (_a2 = e2.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b.values) == null ? void 0 : _c2[n]) || ql[n];
      return r ? ((_e2 = (_d2 = e2.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? { maxWidth: `${r}${e2.theme.breakpoints.unit}` } : { maxWidth: r } : { maxWidth: Ze(n) };
    };
    return tn(e2, e2.maxWidth, t);
  }
  return null;
};
Wu.filterProps = ["maxWidth"];
const b0 = pe({ prop: "minWidth", transform: Ze }), D0 = pe({ prop: "height", transform: Ze }), I0 = pe({ prop: "maxHeight", transform: Ze }), L0 = pe({ prop: "minHeight", transform: Ze });
pe({ prop: "size", cssProperty: "width", transform: Ze });
pe({ prop: "size", cssProperty: "height", transform: Ze });
const A0 = pe({ prop: "boxSizing" });
es(O0, Wu, b0, D0, I0, L0, A0);
const ti = { border: { themeKey: "borders", transform: pt }, borderTop: { themeKey: "borders", transform: pt }, borderRight: { themeKey: "borders", transform: pt }, borderBottom: { themeKey: "borders", transform: pt }, borderLeft: { themeKey: "borders", transform: pt }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: pt }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: ts }, color: { themeKey: "palette", transform: $r }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: $r }, backgroundColor: { themeKey: "palette", transform: $r }, p: { style: ae }, pt: { style: ae }, pr: { style: ae }, pb: { style: ae }, pl: { style: ae }, px: { style: ae }, py: { style: ae }, padding: { style: ae }, paddingTop: { style: ae }, paddingRight: { style: ae }, paddingBottom: { style: ae }, paddingLeft: { style: ae }, paddingX: { style: ae }, paddingY: { style: ae }, paddingInline: { style: ae }, paddingInlineStart: { style: ae }, paddingInlineEnd: { style: ae }, paddingBlock: { style: ae }, paddingBlockStart: { style: ae }, paddingBlockEnd: { style: ae }, m: { style: se }, mt: { style: se }, mr: { style: se }, mb: { style: se }, ml: { style: se }, mx: { style: se }, my: { style: se }, margin: { style: se }, marginTop: { style: se }, marginRight: { style: se }, marginBottom: { style: se }, marginLeft: { style: se }, marginX: { style: se }, marginY: { style: se }, marginInline: { style: se }, marginInlineStart: { style: se }, marginInlineEnd: { style: se }, marginBlock: { style: se }, marginBlockStart: { style: se }, marginBlockEnd: { style: se }, displayPrint: { cssProperty: false, transform: (e2) => ({ "@media print": { display: e2 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: ns }, rowGap: { style: os }, columnGap: { style: rs }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: Ze }, maxWidth: { style: Wu }, minWidth: { transform: Ze }, height: { transform: Ze }, maxHeight: { transform: Ze }, minHeight: { transform: Ze }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function z0(...e2) {
  const t = e2.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e2.every((r) => n.size === Object.keys(r).length);
}
function j0(e2, t) {
  return typeof e2 == "function" ? e2(t) : e2;
}
function F0() {
  function e2(n, r, o, i) {
    const l = { [n]: r, theme: o }, s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: a = n, themeKey: u, transform: h, style: d } = s;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const m = Jl(o, u) || {};
    return d ? d(l) : tn(l, r, (S) => {
      let w = el(m, h, S);
      return S === w && typeof S == "string" && (w = el(m, h, `${n}${S === "default" ? "" : ve(S)}`, S)), a === false ? w : { [a]: w };
    });
  }
  function t(n) {
    const { sx: r, theme: o = {} } = n || {};
    if (!r) return null;
    const i = o.unstable_sxConfig ?? ti;
    function l(s) {
      let a = s;
      if (typeof s == "function") a = s(o);
      else if (typeof s != "object") return s;
      if (!a) return null;
      const u = e0(o.breakpoints), h = Object.keys(u);
      let d = u;
      return Object.keys(a).forEach((m) => {
        const v = j0(a[m], o);
        if (v != null) if (typeof v == "object") if (i[m]) d = mo(d, e2(m, v, o, i));
        else {
          const S = tn({ theme: o }, v, (w) => ({ [m]: w }));
          z0(S, v) ? d[m] = t({ sx: v, theme: o }) : d = mo(d, S);
        }
        else d = mo(d, e2(m, v, o, i));
      }), Gy(o, t0(h, d));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const _n = F0();
_n.filterProps = ["sx"];
function B0(e2, t) {
  var _a2;
  const n = this;
  if (n.vars) {
    if (!((_a2 = n.colorSchemes) == null ? void 0 : _a2[e2]) || typeof n.getColorSchemeSelector != "function") return {};
    let r = n.getColorSchemeSelector(e2);
    return r === "&" ? t : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), { [r]: t });
  }
  return n.palette.mode === e2 ? t : {};
}
function Hu(e2 = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {}, ...l } = e2, s = Yy(n), a = $p(o);
  let u = tt({ breakpoints: s, direction: "ltr", components: {}, palette: { mode: "light", ...r }, spacing: a, shape: { ...qy, ...i } }, l);
  return u = Zy(u), u.applyStyles = B0, u = t.reduce((h, d) => tt(h, d), u), u.unstable_sxConfig = { ...ti, ...l == null ? void 0 : l.unstable_sxConfig }, u.unstable_sx = function(d) {
    return _n({ sx: d, theme: this });
  }, u;
}
function U0(e2) {
  return Object.keys(e2).length === 0;
}
function Rp(e2 = null) {
  const t = T.useContext(Zo);
  return !t || U0(t) ? e2 : t;
}
const V0 = Hu();
function Ku(e2 = V0) {
  return Rp(e2);
}
function W0({ styles: e2, themeId: t, defaultTheme: n = {} }) {
  const r = Ku(n), o = typeof e2 == "function" ? e2(t && r[t] || r) : e2;
  return $.jsx(kp, { styles: o });
}
const H0 = (e2) => {
  var _a2;
  const t = { systemProps: {}, otherProps: {} }, n = ((_a2 = e2 == null ? void 0 : e2.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? ti;
  return Object.keys(e2).forEach((r) => {
    n[r] ? t.systemProps[r] = e2[r] : t.otherProps[r] = e2[r];
  }), t;
};
function Np(e2) {
  const { sx: t, ...n } = e2, { systemProps: r, otherProps: o } = H0(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...l) => {
    const s = t(...l);
    return At(s) ? { ...r, ...s } : r;
  } : i = { ...r, ...t }, { ...o, sx: i };
}
const yf = (e2) => e2, K0 = () => {
  let e2 = yf;
  return { configure(t) {
    e2 = t;
  }, generate(t) {
    return e2(t);
  }, reset() {
    e2 = yf;
  } };
}, Op = K0();
function bp(e2) {
  var t, n, r = "";
  if (typeof e2 == "string" || typeof e2 == "number") r += e2;
  else if (typeof e2 == "object") if (Array.isArray(e2)) {
    var o = e2.length;
    for (t = 0; t < o; t++) e2[t] && (n = bp(e2[t])) && (r && (r += " "), r += n);
  } else for (n in e2) e2[n] && (r && (r += " "), r += n);
  return r;
}
function we() {
  for (var e2, t, n = 0, r = "", o = arguments.length; n < o; n++) (e2 = arguments[n]) && (t = bp(e2)) && (r && (r += " "), r += t);
  return r;
}
const Y0 = Object.freeze(Object.defineProperty({ __proto__: null, clsx: we, default: we }, Symbol.toStringTag, { value: "Module" }));
function G0(e2 = {}) {
  const { themeId: t, defaultTheme: n, defaultClassName: r = "MuiBox-root", generateClassName: o } = e2, i = Ep("div", { shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as" })(_n);
  return T.forwardRef(function(a, u) {
    const h = Ku(n), { className: d, component: m = "div", ...v } = Np(a);
    return $.jsx(i, { as: m, ref: u, className: we(d, o ? o(r) : r), theme: t && h[t] || h, ...v });
  });
}
const X0 = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function tr(e2, t, n = "Mui") {
  const r = X0[t];
  return r ? `${n}-${r}` : `${Op.generate(e2)}-${t}`;
}
function Nn(e2, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = tr(e2, o, n);
  }), r;
}
function Dp(e2) {
  const { variants: t, ...n } = e2, r = { variants: t, style: hf(n), isProcessed: true };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = hf(o.style));
  }), r;
}
const Q0 = Hu();
function Ds(e2) {
  return e2 !== "ownerState" && e2 !== "theme" && e2 !== "sx" && e2 !== "as";
}
function Z0(e2) {
  return e2 ? (t, n) => n[e2] : null;
}
function q0(e2, t, n) {
  e2.theme = tv(e2.theme) ? n : e2.theme[t] || e2.theme;
}
function ji(e2, t) {
  const n = typeof t == "function" ? t(e2) : t;
  if (Array.isArray(n)) return n.flatMap((r) => ji(e2, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r;
    if (n.isProcessed) r = n.style;
    else {
      const { variants: o, ...i } = n;
      r = i;
    }
    return Ip(e2, n.variants, [r]);
  }
  return (n == null ? void 0 : n.isProcessed) ? n.style : n;
}
function Ip(e2, t, n = []) {
  var _a2;
  let r;
  e: for (let o = 0; o < t.length; o += 1) {
    const i = t[o];
    if (typeof i.props == "function") {
      if (r ?? (r = { ...e2, ...e2.ownerState, ownerState: e2.ownerState }), !i.props(r)) continue;
    } else for (const l in i.props) if (e2[l] !== i.props[l] && ((_a2 = e2.ownerState) == null ? void 0 : _a2[l]) !== i.props[l]) continue e;
    typeof i.style == "function" ? (r ?? (r = { ...e2, ...e2.ownerState, ownerState: e2.ownerState }), n.push(i.style(r))) : n.push(i.style);
  }
  return n;
}
function J0(e2 = {}) {
  const { themeId: t, defaultTheme: n = Q0, rootShouldForwardProp: r = Ds, slotShouldForwardProp: o = Ds } = e2;
  function i(s) {
    q0(s, t, n);
  }
  return (s, a = {}) => {
    Vy(s, (x) => x.filter((C) => C !== _n));
    const { name: u, slot: h, skipVariantsResolver: d, skipSx: m, overridesResolver: v = Z0(rv(h)), ...S } = a, w = d !== void 0 ? d : h && h !== "Root" && h !== "root" || false, _ = m || false;
    let p = Ds;
    h === "Root" || h === "root" ? p = r : h ? p = o : nv(s) && (p = void 0);
    const f = Ep(s, { shouldForwardProp: p, label: ev(), ...S }), g = (x) => {
      if (typeof x == "function" && x.__emotion_real !== x) return function(P) {
        return ji(P, x);
      };
      if (At(x)) {
        const C = Dp(x);
        return C.variants ? function(k) {
          return ji(k, C);
        } : C.style;
      }
      return x;
    }, y = (...x) => {
      const C = [], P = x.map(g), k = [];
      if (C.push(i), u && v && k.push(function(I) {
        var _a2, _b;
        const L = (_b = (_a2 = I.theme.components) == null ? void 0 : _a2[u]) == null ? void 0 : _b.styleOverrides;
        if (!L) return null;
        const te = {};
        for (const K in L) te[K] = ji(I, L[K]);
        return v(I, te);
      }), u && !w && k.push(function(I) {
        var _a2, _b, _c2;
        const L = (_c2 = (_b = (_a2 = I.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b[u]) == null ? void 0 : _c2.variants;
        return L ? Ip(I, L) : null;
      }), _ || k.push(_n), Array.isArray(P[0])) {
        const M = P.shift(), I = new Array(C.length).fill(""), z = new Array(k.length).fill("");
        let L;
        L = [...I, ...M, ...z], L.raw = [...I, ...M.raw, ...z], C.unshift(L);
      }
      const R = [...C, ...P, ...k], c = f(...R);
      return s.muiName && (c.muiName = s.muiName), c;
    };
    return f.withConfig && (y.withConfig = f.withConfig), y;
  };
}
function ev(e2, t) {
  return void 0;
}
function tv(e2) {
  for (const t in e2) return false;
  return true;
}
function nv(e2) {
  return typeof e2 == "string" && e2.charCodeAt(0) > 96;
}
function rv(e2) {
  return e2 && e2.charAt(0).toLowerCase() + e2.slice(1);
}
function va(e2, t) {
  const n = { ...t };
  for (const r in e2) if (Object.prototype.hasOwnProperty.call(e2, r)) {
    const o = r;
    if (o === "components" || o === "slots") n[o] = { ...e2[o], ...n[o] };
    else if (o === "componentsProps" || o === "slotProps") {
      const i = e2[o], l = t[o];
      if (!l) n[o] = i || {};
      else if (!i) n[o] = l;
      else {
        n[o] = { ...l };
        for (const s in i) if (Object.prototype.hasOwnProperty.call(i, s)) {
          const a = s;
          n[o][a] = va(i[a], l[a]);
        }
      }
    } else n[o] === void 0 && (n[o] = e2[o]);
  }
  return n;
}
const Lp = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function ov(e2, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e2, n));
}
function Yu(e2, t = 0, n = 1) {
  return ov(e2, t, n);
}
function iv(e2) {
  e2 = e2.slice(1);
  const t = new RegExp(`.{1,${e2.length >= 6 ? 2 : 1}}`, "g");
  let n = e2.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Mn(e2) {
  if (e2.type) return e2;
  if (e2.charAt(0) === "#") return Mn(iv(e2));
  const t = e2.indexOf("("), n = e2.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n)) throw new Error(Gn(9, e2));
  let r = e2.substring(t + 1, e2.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o)) throw new Error(Gn(10, o));
  } else r = r.split(",");
  return r = r.map((i) => parseFloat(i)), { type: n, values: r, colorSpace: o };
}
const lv = (e2) => {
  const t = Mn(e2);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, so = (e2, t) => {
  try {
    return lv(e2);
  } catch {
    return e2;
  }
};
function is(e2) {
  const { type: t, colorSpace: n } = e2;
  let { values: r } = e2;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Ap(e2) {
  e2 = Mn(e2);
  const { values: t } = e2, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), l = (u, h = (u + n / 30) % 12) => o - i * Math.max(Math.min(h - 3, 9 - h, 1), -1);
  let s = "rgb";
  const a = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return e2.type === "hsla" && (s += "a", a.push(t[3])), is({ type: s, values: a });
}
function Sa(e2) {
  e2 = Mn(e2);
  let t = e2.type === "hsl" || e2.type === "hsla" ? Mn(Ap(e2)).values : e2.values;
  return t = t.map((n) => (e2.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function sv(e2, t) {
  const n = Sa(e2), r = Sa(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ro(e2, t) {
  return e2 = Mn(e2), t = Yu(t), (e2.type === "rgb" || e2.type === "hsl") && (e2.type += "a"), e2.type === "color" ? e2.values[3] = `/${t}` : e2.values[3] = t, is(e2);
}
function pi(e2, t, n) {
  try {
    return Ro(e2, t);
  } catch {
    return e2;
  }
}
function Gu(e2, t) {
  if (e2 = Mn(e2), t = Yu(t), e2.type.includes("hsl")) e2.values[2] *= 1 - t;
  else if (e2.type.includes("rgb") || e2.type.includes("color")) for (let n = 0; n < 3; n += 1) e2.values[n] *= 1 - t;
  return is(e2);
}
function X(e2, t, n) {
  try {
    return Gu(e2, t);
  } catch {
    return e2;
  }
}
function Xu(e2, t) {
  if (e2 = Mn(e2), t = Yu(t), e2.type.includes("hsl")) e2.values[2] += (100 - e2.values[2]) * t;
  else if (e2.type.includes("rgb")) for (let n = 0; n < 3; n += 1) e2.values[n] += (255 - e2.values[n]) * t;
  else if (e2.type.includes("color")) for (let n = 0; n < 3; n += 1) e2.values[n] += (1 - e2.values[n]) * t;
  return is(e2);
}
function Q(e2, t, n) {
  try {
    return Xu(e2, t);
  } catch {
    return e2;
  }
}
function av(e2, t = 0.15) {
  return Sa(e2) > 0.5 ? Gu(e2, t) : Xu(e2, t);
}
function hi(e2, t, n) {
  try {
    return av(e2, t);
  } catch {
    return e2;
  }
}
let vf = 0;
function uv(e2) {
  const [t, n] = T.useState(e2), r = e2 || t;
  return T.useEffect(() => {
    t == null && (vf += 1, n(`mui-${vf}`));
  }, [t]), r;
}
const cv = { ...pa }, Sf = cv.useId;
function fv(e2) {
  if (Sf !== void 0) {
    const t = Sf();
    return e2 ?? t;
  }
  return uv(e2);
}
function Fi(e2) {
  const t = T.useRef(e2);
  return Lp(() => {
    t.current = e2;
  }), T.useRef((...n) => (0, t.current)(...n)).current;
}
function wa(...e2) {
  const t = T.useRef(void 0), n = T.useCallback((r) => {
    const o = e2.map((i) => {
      if (i == null) return null;
      if (typeof i == "function") {
        const l = i, s = l(r);
        return typeof s == "function" ? s : () => {
          l(null);
        };
      }
      return i.current = r, () => {
        i.current = null;
      };
    });
    return () => {
      o.forEach((i) => i == null ? void 0 : i());
    };
  }, e2);
  return T.useMemo(() => e2.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e2);
}
const wf = {};
function zp(e2, t) {
  const n = T.useRef(wf);
  return n.current === wf && (n.current = e2(t)), n;
}
const dv = [];
function pv(e2) {
  T.useEffect(e2, dv);
}
class Qu {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    __publicField(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Qu();
  }
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function hv() {
  const e2 = zp(Qu.create).current;
  return pv(e2.disposeEffect), e2;
}
function xf(e2) {
  try {
    return e2.matches(":focus-visible");
  } catch {
  }
  return false;
}
function Kr(e2, t, n = void 0) {
  const r = {};
  for (const o in e2) {
    const i = e2[o];
    let l = "", s = true;
    for (let a = 0; a < i.length; a += 1) {
      const u = i[a];
      u && (l += (s === true ? "" : " ") + t(u), s = false, n && n[u] && (l += " " + n[u]));
    }
    r[o] = l;
  }
  return r;
}
function mv(e2) {
  var _a2;
  return parseInt(T.version, 10) >= 19 ? ((_a2 = e2 == null ? void 0 : e2.props) == null ? void 0 : _a2.ref) || null : (e2 == null ? void 0 : e2.ref) || null;
}
const jp = T.createContext(null);
function Zu() {
  return T.useContext(jp);
}
const gv = typeof Symbol == "function" && Symbol.for, yv = gv ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function vv(e2, t) {
  return typeof t == "function" ? t(e2) : { ...e2, ...t };
}
function Sv(e2) {
  const { children: t, theme: n } = e2, r = Zu(), o = T.useMemo(() => {
    const i = r === null ? { ...n } : vv(r, n);
    return i != null && (i[yv] = r !== null), i;
  }, [n, r]);
  return $.jsx(jp.Provider, { value: o, children: t });
}
const wv = T.createContext();
function xv({ value: e2, ...t }) {
  return $.jsx(wv.Provider, { value: e2 ?? true, ...t });
}
const Fp = T.createContext(void 0);
function Cv({ value: e2, children: t }) {
  return $.jsx(Fp.Provider, { value: e2, children: t });
}
function kv(e2) {
  const { theme: t, name: n, props: r } = e2;
  if (!t || !t.components || !t.components[n]) return r;
  const o = t.components[n];
  return o.defaultProps ? va(o.defaultProps, r) : !o.styleOverrides && !o.variants ? va(o, r) : r;
}
function Ev({ props: e2, name: t }) {
  const n = T.useContext(Fp);
  return kv({ props: e2, name: t, theme: { components: n } });
}
const Cf = {};
function kf(e2, t, n, r = false) {
  return T.useMemo(() => {
    const o = e2 && t[e2] || t;
    if (typeof n == "function") {
      const i = n(o), l = e2 ? { ...t, [e2]: i } : i;
      return r ? () => l : l;
    }
    return e2 ? { ...t, [e2]: n } : { ...t, ...n };
  }, [e2, t, n, r]);
}
function Bp(e2) {
  const { children: t, theme: n, themeId: r } = e2, o = Rp(Cf), i = Zu() || Cf, l = kf(r, o, n), s = kf(r, i, n, true), a = (r ? l[r] : l).direction === "rtl";
  return $.jsx(Sv, { theme: s, children: $.jsx(Zo.Provider, { value: l, children: $.jsx(xv, { value: a, children: $.jsx(Cv, { value: r ? l[r].components : l.components, children: t }) }) }) });
}
const Ef = { theme: void 0 };
function Tv(e2) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Ef.theme = o.theme, i = Dp(e2(Ef)), t = i, n = o.theme), i;
  };
}
const qu = "mode", Ju = "color-scheme", Pv = "data-color-scheme";
function _v(e2) {
  const { defaultMode: t = "system", defaultLightColorScheme: n = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: o = qu, colorSchemeStorageKey: i = Ju, attribute: l = Pv, colorSchemeNode: s = "document.documentElement", nonce: a } = e2 || {};
  let u = "", h = l;
  if (l === "class" && (h = ".%s"), l === "data" && (h = "[data-%s]"), h.startsWith(".")) {
    const m = h.substring(1);
    u += `${s}.classList.remove('${m}'.replace('%s', light), '${m}'.replace('%s', dark));
      ${s}.classList.add('${m}'.replace('%s', colorScheme));`;
  }
  const d = h.match(/\[([^\]]+)\]/);
  if (d) {
    const [m, v] = d[1].split("=");
    v || (u += `${s}.removeAttribute('${m}'.replace('%s', light));
      ${s}.removeAttribute('${m}'.replace('%s', dark));`), u += `
      ${s}.setAttribute('${m}'.replace('%s', colorScheme), ${v ? `${v}.replace('%s', colorScheme)` : '""'});`;
  } else u += `${s}.setAttribute('${h}', colorScheme);`;
  return $.jsx("script", { suppressHydrationWarning: true, nonce: typeof window > "u" ? a : "", dangerouslySetInnerHTML: { __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${r}';
  const light = localStorage.getItem('${i}-light') || '${n}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();` } }, "mui-color-scheme-init");
}
function Mv() {
}
const $v = ({ key: e2, storageWindow: t }) => (!t && typeof window < "u" && (t = window), { get(n) {
  if (typeof window > "u") return;
  if (!t) return n;
  let r;
  try {
    r = t.localStorage.getItem(e2);
  } catch {
  }
  return r || n;
}, set: (n) => {
  if (t) try {
    t.localStorage.setItem(e2, n);
  } catch {
  }
}, subscribe: (n) => {
  if (!t) return Mv;
  const r = (o) => {
    const i = o.newValue;
    o.key === e2 && n(i);
  };
  return t.addEventListener("storage", r), () => {
    t.removeEventListener("storage", r);
  };
} });
function Is() {
}
function Tf(e2) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e2 === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Up(e2, t) {
  if (e2.mode === "light" || e2.mode === "system" && e2.systemMode === "light") return t("light");
  if (e2.mode === "dark" || e2.mode === "system" && e2.systemMode === "dark") return t("dark");
}
function Rv(e2) {
  return Up(e2, (t) => {
    if (t === "light") return e2.lightColorScheme;
    if (t === "dark") return e2.darkColorScheme;
  });
}
function Nv(e2) {
  const { defaultMode: t = "light", defaultLightColorScheme: n, defaultDarkColorScheme: r, supportedColorSchemes: o = [], modeStorageKey: i = qu, colorSchemeStorageKey: l = Ju, storageWindow: s = typeof window > "u" ? void 0 : window, storageManager: a = $v, noSsr: u = false } = e2, h = o.join(","), d = o.length > 1, m = T.useMemo(() => a == null ? void 0 : a({ key: i, storageWindow: s }), [a, i, s]), v = T.useMemo(() => a == null ? void 0 : a({ key: `${l}-light`, storageWindow: s }), [a, l, s]), S = T.useMemo(() => a == null ? void 0 : a({ key: `${l}-dark`, storageWindow: s }), [a, l, s]), [w, _] = T.useState(() => {
    const k = (m == null ? void 0 : m.get(t)) || t, R = (v == null ? void 0 : v.get(n)) || n, c = (S == null ? void 0 : S.get(r)) || r;
    return { mode: k, systemMode: Tf(k), lightColorScheme: R, darkColorScheme: c };
  }), [p, f] = T.useState(u || !d);
  T.useEffect(() => {
    f(true);
  }, []);
  const g = Rv(w), y = T.useCallback((k) => {
    _((R) => {
      if (k === R.mode) return R;
      const c = k ?? t;
      return m == null ? void 0 : m.set(c), { ...R, mode: c, systemMode: Tf(c) };
    });
  }, [m, t]), x = T.useCallback((k) => {
    k ? typeof k == "string" ? k && !h.includes(k) ? console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`) : _((R) => {
      const c = { ...R };
      return Up(R, (M) => {
        M === "light" && (v == null ? void 0 : v.set(k), c.lightColorScheme = k), M === "dark" && (S == null ? void 0 : S.set(k), c.darkColorScheme = k);
      }), c;
    }) : _((R) => {
      const c = { ...R }, M = k.light === null ? n : k.light, I = k.dark === null ? r : k.dark;
      return M && (h.includes(M) ? (c.lightColorScheme = M, v == null ? void 0 : v.set(M)) : console.error(`\`${M}\` does not exist in \`theme.colorSchemes\`.`)), I && (h.includes(I) ? (c.darkColorScheme = I, S == null ? void 0 : S.set(I)) : console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`)), c;
    }) : _((R) => (v == null ? void 0 : v.set(n), S == null ? void 0 : S.set(r), { ...R, lightColorScheme: n, darkColorScheme: r }));
  }, [h, v, S, n, r]), C = T.useCallback((k) => {
    w.mode === "system" && _((R) => {
      const c = (k == null ? void 0 : k.matches) ? "dark" : "light";
      return R.systemMode === c ? R : { ...R, systemMode: c };
    });
  }, [w.mode]), P = T.useRef(C);
  return P.current = C, T.useEffect(() => {
    if (typeof window.matchMedia != "function" || !d) return;
    const k = (...c) => P.current(...c), R = window.matchMedia("(prefers-color-scheme: dark)");
    return R.addListener(k), k(R), () => {
      R.removeListener(k);
    };
  }, [d]), T.useEffect(() => {
    if (d) {
      const k = (m == null ? void 0 : m.subscribe((M) => {
        (!M || ["light", "dark", "system"].includes(M)) && y(M || t);
      })) || Is, R = (v == null ? void 0 : v.subscribe((M) => {
        (!M || h.match(M)) && x({ light: M });
      })) || Is, c = (S == null ? void 0 : S.subscribe((M) => {
        (!M || h.match(M)) && x({ dark: M });
      })) || Is;
      return () => {
        k(), R(), c();
      };
    }
  }, [x, y, h, t, s, d, m, v, S]), { ...w, mode: p ? w.mode : void 0, systemMode: p ? w.systemMode : void 0, colorScheme: p ? g : void 0, setMode: y, setColorScheme: x };
}
const Ov = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function bv(e2) {
  const { themeId: t, theme: n = {}, modeStorageKey: r = qu, colorSchemeStorageKey: o = Ju, disableTransitionOnChange: i = false, defaultColorScheme: l, resolveTheme: s } = e2, a = { allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0 }, u = T.createContext(void 0), h = () => T.useContext(u) || a, d = {}, m = {};
  function v(p) {
    var _a2, _b, _c2, _d2;
    const { children: f, theme: g, modeStorageKey: y = r, colorSchemeStorageKey: x = o, disableTransitionOnChange: C = i, storageManager: P, storageWindow: k = typeof window > "u" ? void 0 : window, documentNode: R = typeof document > "u" ? void 0 : document, colorSchemeNode: c = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: M = false, disableStyleSheetGeneration: I = false, defaultMode: z = "system", forceThemeRerender: L = false, noSsr: te } = p, K = T.useRef(false), Fe = Zu(), O = T.useContext(u), D = !!O && !M, j = T.useMemo(() => g || (typeof n == "function" ? n() : n), [g]), V = j[t], B = V || j, { colorSchemes: be = d, components: at = m, cssVarPrefix: Kt } = B, ut = Object.keys(be).filter((ct) => !!be[ct]).join(","), Ye = T.useMemo(() => ut.split(","), [ut]), li = typeof l == "string" ? l : l.light, si = typeof l == "string" ? l : l.dark, Ms = be[li] && be[si] ? z : ((_b = (_a2 = be[B.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || ((_c2 = B.palette) == null ? void 0 : _c2.mode), { mode: $s, setMode: ai, systemMode: ui, lightColorScheme: lr, darkColorScheme: ci, colorScheme: Rs, setColorScheme: Ln } = Nv({ supportedColorSchemes: Ye, defaultLightColorScheme: li, defaultDarkColorScheme: si, modeStorageKey: y, colorSchemeStorageKey: x, defaultMode: Ms, storageManager: P, storageWindow: k, noSsr: te });
    let Yt = $s, Ge = Rs;
    D && (Yt = O.mode, Ge = O.colorScheme);
    let An = Ge || B.defaultColorScheme;
    B.vars && !L && (An = B.defaultColorScheme);
    const Xr = T.useMemo(() => {
      var _a3;
      const ct = ((_a3 = B.generateThemeVars) == null ? void 0 : _a3.call(B)) || B.vars, fe = { ...B, components: at, colorSchemes: be, cssVarPrefix: Kt, vars: ct };
      if (typeof fe.generateSpacing == "function" && (fe.spacing = fe.generateSpacing()), An) {
        const ft = be[An];
        ft && typeof ft == "object" && Object.keys(ft).forEach((Nt) => {
          ft[Nt] && typeof ft[Nt] == "object" ? fe[Nt] = { ...fe[Nt], ...ft[Nt] } : fe[Nt] = ft[Nt];
        });
      }
      return s ? s(fe) : fe;
    }, [B, An, at, be, Kt]), A = B.colorSchemeSelector;
    Lp(() => {
      if (Ge && c && A && A !== "media") {
        const ct = A;
        let fe = A;
        if (ct === "class" && (fe = ".%s"), ct === "data" && (fe = "[data-%s]"), (ct == null ? void 0 : ct.startsWith("data-")) && !ct.includes("%s") && (fe = `[${ct}="%s"]`), fe.startsWith(".")) c.classList.remove(...Ye.map((ft) => fe.substring(1).replace("%s", ft))), c.classList.add(fe.substring(1).replace("%s", Ge));
        else {
          const ft = fe.replace("%s", Ge).match(/\[([^\]]+)\]/);
          if (ft) {
            const [Nt, Ns] = ft[1].split("=");
            Ns || Ye.forEach((fg) => {
              c.removeAttribute(Nt.replace(Ge, fg));
            }), c.setAttribute(Nt, Ns ? Ns.replace(/"|'/g, "") : "");
          } else c.setAttribute(fe, Ge);
        }
      }
    }, [Ge, A, c, Ye]), T.useEffect(() => {
      let ct;
      if (C && K.current && R) {
        const fe = R.createElement("style");
        fe.appendChild(R.createTextNode(Ov)), R.head.appendChild(fe), window.getComputedStyle(R.body), ct = setTimeout(() => {
          R.head.removeChild(fe);
        }, 1);
      }
      return () => {
        clearTimeout(ct);
      };
    }, [Ge, C, R]), T.useEffect(() => (K.current = true, () => {
      K.current = false;
    }), []);
    const cg = T.useMemo(() => ({ allColorSchemes: Ye, colorScheme: Ge, darkColorScheme: ci, lightColorScheme: lr, mode: Yt, setColorScheme: Ln, setMode: ai, systemMode: ui }), [Ye, Ge, ci, lr, Yt, Ln, ai, ui, Xr.colorSchemeSelector]);
    let Zc = true;
    (I || B.cssVariables === false || D && (Fe == null ? void 0 : Fe.cssVarPrefix) === Kt) && (Zc = false);
    const qc = $.jsxs(T.Fragment, { children: [$.jsx(Bp, { themeId: V ? t : void 0, theme: Xr, children: f }), Zc && $.jsx(kp, { styles: ((_d2 = Xr.generateStyleSheets) == null ? void 0 : _d2.call(Xr)) || [] })] });
    return D ? qc : $.jsx(u.Provider, { value: cg, children: qc });
  }
  const S = typeof l == "string" ? l : l.light, w = typeof l == "string" ? l : l.dark;
  return { CssVarsProvider: v, useColorScheme: h, getInitColorSchemeScript: (p) => _v({ colorSchemeStorageKey: o, defaultLightColorScheme: S, defaultDarkColorScheme: w, modeStorageKey: r, ...p }) };
}
function Dv(e2 = "") {
  function t(...r) {
    if (!r.length) return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e2 ? `${e2}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e2 ? `${e2}-` : ""}${r}${t(...o)})`;
}
const Pf = (e2, t, n, r = []) => {
  let o = e2;
  t.forEach((i, l) => {
    l === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, Iv = (e2, t, n) => {
  function r(o, i = [], l = []) {
    Object.entries(o).forEach(([s, a]) => {
      (!n || n && !n([...i, s])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, s], Array.isArray(a) ? [...l, s] : l) : t([...i, s], a, l));
    });
  }
  r(e2);
}, Lv = (e2, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e2.includes(r)) || e2[e2.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Ls(e2, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {}, o = {}, i = {}, l = {};
  return Iv(e2, (s, a, u) => {
    if ((typeof a == "string" || typeof a == "number") && (!r || !r(s, a))) {
      const h = `--${n ? `${n}-` : ""}${s.join("-")}`, d = Lv(s, a);
      Object.assign(o, { [h]: d }), Pf(i, s, `var(${h})`, u), Pf(l, s, `var(${h}, ${d})`, u);
    }
  }, (s) => s[0] === "vars"), { css: o, vars: i, varsWithDefaults: l };
}
function Av(e2, t = {}) {
  const { getSelector: n = _, disableCssColorScheme: r, colorSchemeSelector: o } = t, { colorSchemes: i = {}, components: l, defaultColorScheme: s = "light", ...a } = e2, { vars: u, css: h, varsWithDefaults: d } = Ls(a, t);
  let m = d;
  const v = {}, { [s]: S, ...w } = i;
  if (Object.entries(w || {}).forEach(([g, y]) => {
    const { vars: x, css: C, varsWithDefaults: P } = Ls(y, t);
    m = tt(m, P), v[g] = { css: C, vars: x };
  }), S) {
    const { css: g, vars: y, varsWithDefaults: x } = Ls(S, t);
    m = tt(m, x), v[s] = { css: g, vars: y };
  }
  function _(g, y) {
    var _a2, _b;
    let x = o;
    if (o === "class" && (x = ".%s"), o === "data" && (x = "[data-%s]"), (o == null ? void 0 : o.startsWith("data-")) && !o.includes("%s") && (x = `[${o}="%s"]`), g) {
      if (x === "media") return e2.defaultColorScheme === g ? ":root" : { [`@media (prefers-color-scheme: ${((_b = (_a2 = i[g]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || g})`]: { ":root": y } };
      if (x) return e2.defaultColorScheme === g ? `:root, ${x.replace("%s", String(g))}` : x.replace("%s", String(g));
    }
    return ":root";
  }
  return { vars: m, generateThemeVars: () => {
    let g = { ...u };
    return Object.entries(v).forEach(([, { vars: y }]) => {
      g = tt(g, y);
    }), g;
  }, generateStyleSheets: () => {
    var _a2, _b;
    const g = [], y = e2.defaultColorScheme || "light";
    function x(k, R) {
      Object.keys(R).length && g.push(typeof k == "string" ? { [k]: { ...R } } : k);
    }
    x(n(void 0, { ...h }), h);
    const { [y]: C, ...P } = v;
    if (C) {
      const { css: k } = C, R = (_b = (_a2 = i[y]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode, c = !r && R ? { colorScheme: R, ...k } : { ...k };
      x(n(y, { ...c }), c);
    }
    return Object.entries(P).forEach(([k, { css: R }]) => {
      var _a3, _b2;
      const c = (_b2 = (_a3 = i[k]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode, M = !r && c ? { colorScheme: c, ...R } : { ...R };
      x(n(k, { ...M }), M);
    }), g;
  } };
}
function zv(e2) {
  return function(n) {
    return e2 === "media" ? `@media (prefers-color-scheme: ${n})` : e2 ? e2.startsWith("data-") && !e2.includes("%s") ? `[${e2}="${n}"] &` : e2 === "class" ? `.${n} &` : e2 === "data" ? `[data-${n}] &` : `${e2.replace("%s", n)} &` : "&";
  };
}
function Vp() {
  return { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: Po.white, default: Po.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: 0.04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: 0.08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: 0.38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.12 } };
}
const jv = Vp();
function Wp() {
  return { text: { primary: Po.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: Po.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: 0.08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: 0.16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: 0.38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.24 } };
}
const _f = Wp();
function Mf(e2, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e2[t] || (e2.hasOwnProperty(n) ? e2[t] = e2[n] : t === "light" ? e2.light = Xu(e2.main, o) : t === "dark" && (e2.dark = Gu(e2.main, i)));
}
function Fv(e2 = "light") {
  return e2 === "dark" ? { main: ur[200], light: ur[50], dark: ur[400] } : { main: ur[700], light: ur[400], dark: ur[800] };
}
function Bv(e2 = "light") {
  return e2 === "dark" ? { main: ar[200], light: ar[50], dark: ar[400] } : { main: ar[500], light: ar[300], dark: ar[700] };
}
function Uv(e2 = "light") {
  return e2 === "dark" ? { main: sr[500], light: sr[300], dark: sr[700] } : { main: sr[700], light: sr[400], dark: sr[800] };
}
function Vv(e2 = "light") {
  return e2 === "dark" ? { main: cr[400], light: cr[300], dark: cr[700] } : { main: cr[700], light: cr[500], dark: cr[900] };
}
function Wv(e2 = "light") {
  return e2 === "dark" ? { main: fr[400], light: fr[300], dark: fr[700] } : { main: fr[800], light: fr[500], dark: fr[900] };
}
function Hv(e2 = "light") {
  return e2 === "dark" ? { main: Qr[400], light: Qr[300], dark: Qr[700] } : { main: "#ed6c02", light: Qr[500], dark: Qr[900] };
}
function ec(e2) {
  const { mode: t = "light", contrastThreshold: n = 3, tonalOffset: r = 0.2, ...o } = e2, i = e2.primary || Fv(t), l = e2.secondary || Bv(t), s = e2.error || Uv(t), a = e2.info || Vv(t), u = e2.success || Wv(t), h = e2.warning || Hv(t);
  function d(w) {
    return sv(w, _f.text.primary) >= n ? _f.text.primary : jv.text.primary;
  }
  const m = ({ color: w, name: _, mainShade: p = 500, lightShade: f = 300, darkShade: g = 700 }) => {
    if (w = { ...w }, !w.main && w[p] && (w.main = w[p]), !w.hasOwnProperty("main")) throw new Error(Gn(11, _ ? ` (${_})` : "", p));
    if (typeof w.main != "string") throw new Error(Gn(12, _ ? ` (${_})` : "", JSON.stringify(w.main)));
    return Mf(w, "light", f, r), Mf(w, "dark", g, r), w.contrastText || (w.contrastText = d(w.main)), w;
  };
  let v;
  return t === "light" ? v = Vp() : t === "dark" && (v = Wp()), tt({ common: { ...Po }, mode: t, primary: m({ color: i, name: "primary" }), secondary: m({ color: l, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: m({ color: s, name: "error" }), warning: m({ color: h, name: "warning" }), info: m({ color: a, name: "info" }), success: m({ color: u, name: "success" }), grey: Ig, contrastThreshold: n, getContrastText: d, augmentColor: m, tonalOffset: r, ...v }, o);
}
function Kv(e2) {
  const t = {};
  return Object.entries(e2).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Yv(e2, t) {
  return { toolbar: { minHeight: 56, [e2.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } }, [e2.up("sm")]: { minHeight: 64 } }, ...t };
}
function Gv(e2) {
  return Math.round(e2 * 1e5) / 1e5;
}
const $f = { textTransform: "uppercase" }, Rf = '"Roboto", "Helvetica", "Arial", sans-serif';
function Hp(e2, t) {
  const { fontFamily: n = Rf, fontSize: r = 14, fontWeightLight: o = 300, fontWeightRegular: i = 400, fontWeightMedium: l = 500, fontWeightBold: s = 700, htmlFontSize: a = 16, allVariants: u, pxToRem: h, ...d } = typeof t == "function" ? t(e2) : t, m = r / 14, v = h || ((_) => `${_ / a * m}rem`), S = (_, p, f, g, y) => ({ fontFamily: n, fontWeight: _, fontSize: v(p), lineHeight: f, ...n === Rf ? { letterSpacing: `${Gv(g / p)}em` } : {}, ...y, ...u }), w = { h1: S(o, 96, 1.167, -1.5), h2: S(o, 60, 1.2, -0.5), h3: S(i, 48, 1.167, 0), h4: S(i, 34, 1.235, 0.25), h5: S(i, 24, 1.334, 0), h6: S(l, 20, 1.6, 0.15), subtitle1: S(i, 16, 1.75, 0.15), subtitle2: S(l, 14, 1.57, 0.1), body1: S(i, 16, 1.5, 0.15), body2: S(i, 14, 1.43, 0.15), button: S(l, 14, 1.75, 0.4, $f), caption: S(i, 12, 1.66, 0.4), overline: S(i, 12, 2.66, 1, $f), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
  return tt({ htmlFontSize: a, pxToRem: v, fontFamily: n, fontSize: r, fontWeightLight: o, fontWeightRegular: i, fontWeightMedium: l, fontWeightBold: s, ...w }, d, { clone: false });
}
const Xv = 0.2, Qv = 0.14, Zv = 0.12;
function ne(...e2) {
  return [`${e2[0]}px ${e2[1]}px ${e2[2]}px ${e2[3]}px rgba(0,0,0,${Xv})`, `${e2[4]}px ${e2[5]}px ${e2[6]}px ${e2[7]}px rgba(0,0,0,${Qv})`, `${e2[8]}px ${e2[9]}px ${e2[10]}px ${e2[11]}px rgba(0,0,0,${Zv})`].join(",");
}
const qv = ["none", ne(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ne(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ne(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ne(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ne(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ne(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ne(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ne(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ne(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ne(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ne(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ne(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ne(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ne(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ne(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ne(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ne(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ne(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ne(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ne(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ne(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ne(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ne(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ne(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Jv = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, e1 = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function Nf(e2) {
  return `${Math.round(e2)}ms`;
}
function t1(e2) {
  if (!e2) return 0;
  const t = e2 / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function n1(e2) {
  const t = { ...Jv, ...e2.easing }, n = { ...e1, ...e2.duration };
  return { getAutoHeightDuration: t1, create: (o = ["all"], i = {}) => {
    const { duration: l = n.standard, easing: s = t.easeInOut, delay: a = 0, ...u } = i;
    return (Array.isArray(o) ? o : [o]).map((h) => `${h} ${typeof l == "string" ? l : Nf(l)} ${s} ${typeof a == "string" ? a : Nf(a)}`).join(",");
  }, ...e2, easing: t, duration: n };
}
const r1 = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
function o1(e2) {
  return At(e2) || typeof e2 > "u" || typeof e2 == "string" || typeof e2 == "boolean" || typeof e2 == "number" || Array.isArray(e2);
}
function Kp(e2 = {}) {
  const t = { ...e2 };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [l, s] = o[i];
      !o1(s) || l.startsWith("unstable_") ? delete r[l] : At(s) && (r[l] = { ...s }, n(r[l]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function xa(e2 = {}, ...t) {
  const { breakpoints: n, mixins: r = {}, spacing: o, palette: i = {}, transitions: l = {}, typography: s = {}, shape: a, ...u } = e2;
  if (e2.vars && e2.generateThemeVars === void 0) throw new Error(Gn(20));
  const h = ec(i), d = Hu(e2);
  let m = tt(d, { mixins: Yv(d.breakpoints, r), palette: h, shadows: qv.slice(), typography: Hp(h, s), transitions: n1(l), zIndex: { ...r1 } });
  return m = tt(m, u), m = t.reduce((v, S) => tt(v, S), m), m.unstable_sxConfig = { ...ti, ...u == null ? void 0 : u.unstable_sxConfig }, m.unstable_sx = function(S) {
    return _n({ sx: S, theme: this });
  }, m.toRuntimeSource = Kp, m;
}
function Ca(e2) {
  let t;
  return e2 < 1 ? t = 5.11916 * e2 ** 2 : t = 4.5 * Math.log(e2 + 1) + 2, Math.round(t * 10) / 1e3;
}
const i1 = [...Array(25)].map((e2, t) => {
  if (t === 0) return "none";
  const n = Ca(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Yp(e2) {
  return { inputPlaceholder: e2 === "dark" ? 0.5 : 0.42, inputUnderline: e2 === "dark" ? 0.7 : 0.42, switchTrackDisabled: e2 === "dark" ? 0.2 : 0.12, switchTrack: e2 === "dark" ? 0.3 : 0.38 };
}
function Gp(e2) {
  return e2 === "dark" ? i1 : [];
}
function l1(e2) {
  const { palette: t = { mode: "light" }, opacity: n, overlays: r, ...o } = e2, i = ec(t);
  return { palette: i, opacity: { ...Yp(i.mode), ...n }, overlays: r || Gp(i.mode), ...o };
}
function s1(e2) {
  var _a2;
  return !!e2[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e2[0].match(/sxConfig$/) || e2[0] === "palette" && !!((_a2 = e2[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
}
const a1 = (e2) => [...[...Array(25)].map((t, n) => `--${e2 ? `${e2}-` : ""}overlays-${n}`), `--${e2 ? `${e2}-` : ""}palette-AppBar-darkBg`, `--${e2 ? `${e2}-` : ""}palette-AppBar-darkColor`], u1 = (e2) => (t, n) => {
  const r = e2.rootSelector || ":root", o = e2.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), (o == null ? void 0 : o.startsWith("data-")) && !o.includes("%s") && (i = `[${o}="%s"]`), e2.defaultColorScheme === t) {
    if (t === "dark") {
      const l = {};
      return a1(e2.cssVarPrefix).forEach((s) => {
        l[s] = n[s], delete n[s];
      }), i === "media" ? { [r]: n, "@media (prefers-color-scheme: dark)": { [r]: l } } : i ? { [i.replace("%s", t)]: l, [`${r}, ${i.replace("%s", t)}`]: n } : { [r]: { ...n, ...l } };
    }
    if (i && i !== "media") return `${r}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media") return { [`@media (prefers-color-scheme: ${String(t)})`]: { [r]: n } };
    if (i) return i.replace("%s", String(t));
  }
  return r;
};
function c1(e2, t) {
  t.forEach((n) => {
    e2[n] || (e2[n] = {});
  });
}
function E(e2, t, n) {
  !e2[t] && n && (e2[t] = n);
}
function ao(e2) {
  return typeof e2 != "string" || !e2.startsWith("hsl") ? e2 : Ap(e2);
}
function Gt(e2, t) {
  `${t}Channel` in e2 || (e2[`${t}Channel`] = so(ao(e2[t])));
}
function f1(e2) {
  return typeof e2 == "number" ? `${e2}px` : typeof e2 == "string" || typeof e2 == "function" || Array.isArray(e2) ? e2 : "8px";
}
const Ot = (e2) => {
  try {
    return e2();
  } catch {
  }
}, d1 = (e2 = "mui") => Dv(e2);
function As(e2, t, n, r) {
  if (!t) return;
  t = t === true ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e2[r] = l1({ ...t, palette: { mode: o, ...t == null ? void 0 : t.palette } });
    return;
  }
  const { palette: i, ...l } = xa({ ...n, palette: { mode: o, ...t == null ? void 0 : t.palette } });
  return e2[r] = { ...t, palette: i, opacity: { ...Yp(o), ...t == null ? void 0 : t.opacity }, overlays: (t == null ? void 0 : t.overlays) || Gp(o) }, l;
}
function p1(e2 = {}, ...t) {
  const { colorSchemes: n = { light: true }, defaultColorScheme: r, disableCssColorScheme: o = false, cssVarPrefix: i = "mui", shouldSkipGeneratingVar: l = s1, colorSchemeSelector: s = n.light && n.dark ? "media" : void 0, rootSelector: a = ":root", ...u } = e2, h = Object.keys(n)[0], d = r || (n.light && h !== "light" ? "light" : h), m = d1(i), { [d]: v, light: S, dark: w, ..._ } = n, p = { ..._ };
  let f = v;
  if ((d === "dark" && !("dark" in n) || d === "light" && !("light" in n)) && (f = true), !f) throw new Error(Gn(21, d));
  const g = As(p, f, u, d);
  S && !p.light && As(p, S, void 0, "light"), w && !p.dark && As(p, w, void 0, "dark");
  let y = { defaultColorScheme: d, ...g, cssVarPrefix: i, colorSchemeSelector: s, rootSelector: a, getCssVar: m, colorSchemes: p, font: { ...Kv(g.typography), ...g.font }, spacing: f1(u.spacing) };
  Object.keys(y.colorSchemes).forEach((R) => {
    const c = y.colorSchemes[R].palette, M = (I) => {
      const z = I.split("-"), L = z[1], te = z[2];
      return m(I, c[L][te]);
    };
    if (c.mode === "light" && (E(c.common, "background", "#fff"), E(c.common, "onBackground", "#000")), c.mode === "dark" && (E(c.common, "background", "#000"), E(c.common, "onBackground", "#fff")), c1(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      E(c.Alert, "errorColor", X(c.error.light, 0.6)), E(c.Alert, "infoColor", X(c.info.light, 0.6)), E(c.Alert, "successColor", X(c.success.light, 0.6)), E(c.Alert, "warningColor", X(c.warning.light, 0.6)), E(c.Alert, "errorFilledBg", M("palette-error-main")), E(c.Alert, "infoFilledBg", M("palette-info-main")), E(c.Alert, "successFilledBg", M("palette-success-main")), E(c.Alert, "warningFilledBg", M("palette-warning-main")), E(c.Alert, "errorFilledColor", Ot(() => c.getContrastText(c.error.main))), E(c.Alert, "infoFilledColor", Ot(() => c.getContrastText(c.info.main))), E(c.Alert, "successFilledColor", Ot(() => c.getContrastText(c.success.main))), E(c.Alert, "warningFilledColor", Ot(() => c.getContrastText(c.warning.main))), E(c.Alert, "errorStandardBg", Q(c.error.light, 0.9)), E(c.Alert, "infoStandardBg", Q(c.info.light, 0.9)), E(c.Alert, "successStandardBg", Q(c.success.light, 0.9)), E(c.Alert, "warningStandardBg", Q(c.warning.light, 0.9)), E(c.Alert, "errorIconColor", M("palette-error-main")), E(c.Alert, "infoIconColor", M("palette-info-main")), E(c.Alert, "successIconColor", M("palette-success-main")), E(c.Alert, "warningIconColor", M("palette-warning-main")), E(c.AppBar, "defaultBg", M("palette-grey-100")), E(c.Avatar, "defaultBg", M("palette-grey-400")), E(c.Button, "inheritContainedBg", M("palette-grey-300")), E(c.Button, "inheritContainedHoverBg", M("palette-grey-A100")), E(c.Chip, "defaultBorder", M("palette-grey-400")), E(c.Chip, "defaultAvatarColor", M("palette-grey-700")), E(c.Chip, "defaultIconColor", M("palette-grey-700")), E(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), E(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), E(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), E(c.LinearProgress, "primaryBg", Q(c.primary.main, 0.62)), E(c.LinearProgress, "secondaryBg", Q(c.secondary.main, 0.62)), E(c.LinearProgress, "errorBg", Q(c.error.main, 0.62)), E(c.LinearProgress, "infoBg", Q(c.info.main, 0.62)), E(c.LinearProgress, "successBg", Q(c.success.main, 0.62)), E(c.LinearProgress, "warningBg", Q(c.warning.main, 0.62)), E(c.Skeleton, "bg", `rgba(${M("palette-text-primaryChannel")} / 0.11)`), E(c.Slider, "primaryTrack", Q(c.primary.main, 0.62)), E(c.Slider, "secondaryTrack", Q(c.secondary.main, 0.62)), E(c.Slider, "errorTrack", Q(c.error.main, 0.62)), E(c.Slider, "infoTrack", Q(c.info.main, 0.62)), E(c.Slider, "successTrack", Q(c.success.main, 0.62)), E(c.Slider, "warningTrack", Q(c.warning.main, 0.62));
      const I = hi(c.background.default, 0.8);
      E(c.SnackbarContent, "bg", I), E(c.SnackbarContent, "color", Ot(() => c.getContrastText(I))), E(c.SpeedDialAction, "fabHoverBg", hi(c.background.paper, 0.15)), E(c.StepConnector, "border", M("palette-grey-400")), E(c.StepContent, "border", M("palette-grey-400")), E(c.Switch, "defaultColor", M("palette-common-white")), E(c.Switch, "defaultDisabledColor", M("palette-grey-100")), E(c.Switch, "primaryDisabledColor", Q(c.primary.main, 0.62)), E(c.Switch, "secondaryDisabledColor", Q(c.secondary.main, 0.62)), E(c.Switch, "errorDisabledColor", Q(c.error.main, 0.62)), E(c.Switch, "infoDisabledColor", Q(c.info.main, 0.62)), E(c.Switch, "successDisabledColor", Q(c.success.main, 0.62)), E(c.Switch, "warningDisabledColor", Q(c.warning.main, 0.62)), E(c.TableCell, "border", Q(pi(c.divider, 1), 0.88)), E(c.Tooltip, "bg", pi(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      E(c.Alert, "errorColor", Q(c.error.light, 0.6)), E(c.Alert, "infoColor", Q(c.info.light, 0.6)), E(c.Alert, "successColor", Q(c.success.light, 0.6)), E(c.Alert, "warningColor", Q(c.warning.light, 0.6)), E(c.Alert, "errorFilledBg", M("palette-error-dark")), E(c.Alert, "infoFilledBg", M("palette-info-dark")), E(c.Alert, "successFilledBg", M("palette-success-dark")), E(c.Alert, "warningFilledBg", M("palette-warning-dark")), E(c.Alert, "errorFilledColor", Ot(() => c.getContrastText(c.error.dark))), E(c.Alert, "infoFilledColor", Ot(() => c.getContrastText(c.info.dark))), E(c.Alert, "successFilledColor", Ot(() => c.getContrastText(c.success.dark))), E(c.Alert, "warningFilledColor", Ot(() => c.getContrastText(c.warning.dark))), E(c.Alert, "errorStandardBg", X(c.error.light, 0.9)), E(c.Alert, "infoStandardBg", X(c.info.light, 0.9)), E(c.Alert, "successStandardBg", X(c.success.light, 0.9)), E(c.Alert, "warningStandardBg", X(c.warning.light, 0.9)), E(c.Alert, "errorIconColor", M("palette-error-main")), E(c.Alert, "infoIconColor", M("palette-info-main")), E(c.Alert, "successIconColor", M("palette-success-main")), E(c.Alert, "warningIconColor", M("palette-warning-main")), E(c.AppBar, "defaultBg", M("palette-grey-900")), E(c.AppBar, "darkBg", M("palette-background-paper")), E(c.AppBar, "darkColor", M("palette-text-primary")), E(c.Avatar, "defaultBg", M("palette-grey-600")), E(c.Button, "inheritContainedBg", M("palette-grey-800")), E(c.Button, "inheritContainedHoverBg", M("palette-grey-700")), E(c.Chip, "defaultBorder", M("palette-grey-700")), E(c.Chip, "defaultAvatarColor", M("palette-grey-300")), E(c.Chip, "defaultIconColor", M("palette-grey-300")), E(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), E(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), E(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), E(c.LinearProgress, "primaryBg", X(c.primary.main, 0.5)), E(c.LinearProgress, "secondaryBg", X(c.secondary.main, 0.5)), E(c.LinearProgress, "errorBg", X(c.error.main, 0.5)), E(c.LinearProgress, "infoBg", X(c.info.main, 0.5)), E(c.LinearProgress, "successBg", X(c.success.main, 0.5)), E(c.LinearProgress, "warningBg", X(c.warning.main, 0.5)), E(c.Skeleton, "bg", `rgba(${M("palette-text-primaryChannel")} / 0.13)`), E(c.Slider, "primaryTrack", X(c.primary.main, 0.5)), E(c.Slider, "secondaryTrack", X(c.secondary.main, 0.5)), E(c.Slider, "errorTrack", X(c.error.main, 0.5)), E(c.Slider, "infoTrack", X(c.info.main, 0.5)), E(c.Slider, "successTrack", X(c.success.main, 0.5)), E(c.Slider, "warningTrack", X(c.warning.main, 0.5));
      const I = hi(c.background.default, 0.98);
      E(c.SnackbarContent, "bg", I), E(c.SnackbarContent, "color", Ot(() => c.getContrastText(I))), E(c.SpeedDialAction, "fabHoverBg", hi(c.background.paper, 0.15)), E(c.StepConnector, "border", M("palette-grey-600")), E(c.StepContent, "border", M("palette-grey-600")), E(c.Switch, "defaultColor", M("palette-grey-300")), E(c.Switch, "defaultDisabledColor", M("palette-grey-600")), E(c.Switch, "primaryDisabledColor", X(c.primary.main, 0.55)), E(c.Switch, "secondaryDisabledColor", X(c.secondary.main, 0.55)), E(c.Switch, "errorDisabledColor", X(c.error.main, 0.55)), E(c.Switch, "infoDisabledColor", X(c.info.main, 0.55)), E(c.Switch, "successDisabledColor", X(c.success.main, 0.55)), E(c.Switch, "warningDisabledColor", X(c.warning.main, 0.55)), E(c.TableCell, "border", X(pi(c.divider, 1), 0.68)), E(c.Tooltip, "bg", pi(c.grey[700], 0.92));
    }
    Gt(c.background, "default"), Gt(c.background, "paper"), Gt(c.common, "background"), Gt(c.common, "onBackground"), Gt(c, "divider"), Object.keys(c).forEach((I) => {
      const z = c[I];
      I !== "tonalOffset" && z && typeof z == "object" && (z.main && E(c[I], "mainChannel", so(ao(z.main))), z.light && E(c[I], "lightChannel", so(ao(z.light))), z.dark && E(c[I], "darkChannel", so(ao(z.dark))), z.contrastText && E(c[I], "contrastTextChannel", so(ao(z.contrastText))), I === "text" && (Gt(c[I], "primary"), Gt(c[I], "secondary")), I === "action" && (z.active && Gt(c[I], "active"), z.selected && Gt(c[I], "selected")));
    });
  }), y = t.reduce((R, c) => tt(R, c), y);
  const x = { prefix: i, disableCssColorScheme: o, shouldSkipGeneratingVar: l, getSelector: u1(y) }, { vars: C, generateThemeVars: P, generateStyleSheets: k } = Av(y, x);
  return y.vars = C, Object.entries(y.colorSchemes[y.defaultColorScheme]).forEach(([R, c]) => {
    y[R] = c;
  }), y.generateThemeVars = P, y.generateStyleSheets = k, y.generateSpacing = function() {
    return $p(u.spacing, Vu(this));
  }, y.getColorSchemeSelector = zv(s), y.spacing = y.generateSpacing(), y.shouldSkipGeneratingVar = l, y.unstable_sxConfig = { ...ti, ...u == null ? void 0 : u.unstable_sxConfig }, y.unstable_sx = function(c) {
    return _n({ sx: c, theme: this });
  }, y.toRuntimeSource = Kp, y;
}
function Of(e2, t, n) {
  e2.colorSchemes && n && (e2.colorSchemes[t] = { ...n !== true && n, palette: ec({ ...n === true ? {} : n.palette, mode: t }) });
}
function ls(e2 = {}, ...t) {
  const { palette: n, cssVariables: r = false, colorSchemes: o = n ? void 0 : { light: true }, defaultColorScheme: i = n == null ? void 0 : n.mode, ...l } = e2, s = i || "light", a = o == null ? void 0 : o[s], u = { ...o, ...n ? { [s]: { ...typeof a != "boolean" && a, palette: n } } : void 0 };
  if (r === false) {
    if (!("colorSchemes" in e2)) return xa(e2, ...t);
    let h = n;
    "palette" in e2 || u[s] && (u[s] !== true ? h = u[s].palette : s === "dark" && (h = { mode: "dark" }));
    const d = xa({ ...e2, palette: h }, ...t);
    return d.defaultColorScheme = s, d.colorSchemes = u, d.palette.mode === "light" && (d.colorSchemes.light = { ...u.light !== true && u.light, palette: d.palette }, Of(d, "dark", u.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = { ...u.dark !== true && u.dark, palette: d.palette }, Of(d, "light", u.light)), d;
  }
  return !n && !("light" in u) && s === "light" && (u.light = true), p1({ ...l, colorSchemes: u, defaultColorScheme: s, ...typeof r != "boolean" && r }, ...t);
}
const tc = ls();
function ss() {
  const e2 = Ku(tc);
  return e2[Ft] || e2;
}
function h1(e2) {
  return e2 !== "ownerState" && e2 !== "theme" && e2 !== "sx" && e2 !== "as";
}
const m1 = (e2) => h1(e2) && e2 !== "classes", Rt = J0({ themeId: Ft, defaultTheme: tc, rootShouldForwardProp: m1 });
function zs({ theme: e2, ...t }) {
  const n = Ft in e2 ? e2[Ft] : void 0;
  return $.jsx(Bp, { ...t, themeId: n ? Ft : void 0, theme: n || e2 });
}
const mi = { colorSchemeStorageKey: "mui-color-scheme", defaultLightColorScheme: "light", defaultDarkColorScheme: "dark", modeStorageKey: "mui-mode" }, { CssVarsProvider: g1 } = bv({ themeId: Ft, theme: () => ls({ cssVariables: true }), colorSchemeStorageKey: mi.colorSchemeStorageKey, modeStorageKey: mi.modeStorageKey, defaultColorScheme: { light: mi.defaultLightColorScheme, dark: mi.defaultDarkColorScheme }, resolveTheme: (e2) => {
  const t = { ...e2, typography: Hp(e2.palette, e2.typography) };
  return t.unstable_sx = function(r) {
    return _n({ sx: r, theme: this });
  }, t;
} }), y1 = g1;
function v1({ theme: e2, ...t }) {
  if (typeof e2 == "function") return $.jsx(zs, { theme: e2, ...t });
  const n = Ft in e2 ? e2[Ft] : e2;
  return "colorSchemes" in n ? $.jsx(y1, { theme: e2, ...t }) : "vars" in n ? $.jsx(zs, { theme: e2, ...t }) : $.jsx(zs, { theme: { ...e2, vars: null }, ...t });
}
function S1(e2) {
  return $.jsx(W0, { ...e2, defaultTheme: tc, themeId: Ft });
}
function Xp(e2) {
  return function(n) {
    return $.jsx(S1, { styles: typeof e2 == "function" ? (r) => e2({ theme: r, ...n }) : e2 });
  };
}
function w1() {
  return Np;
}
const Xn = Tv;
function On(e2) {
  return Ev(e2);
}
function x1(e2) {
  return tr("MuiSvgIcon", e2);
}
Nn("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const C1 = (e2) => {
  const { color: t, fontSize: n, classes: r } = e2, o = { root: ["root", t !== "inherit" && `color${ve(t)}`, `fontSize${ve(n)}`] };
  return Kr(o, x1, r);
}, k1 = Rt("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: (e2, t) => {
  const { ownerState: n } = e2;
  return [t.root, n.color !== "inherit" && t[`color${ve(n.color)}`], t[`fontSize${ve(n.fontSize)}`]];
} })(Xn(({ theme: e2 }) => {
  var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2;
  return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", flexShrink: 0, transition: (_d2 = (_a2 = e2.transitions) == null ? void 0 : _a2.create) == null ? void 0 : _d2.call(_a2, "fill", { duration: (_c2 = (_b = (e2.vars ?? e2).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c2.shorter }), variants: [{ props: (t) => !t.hasSvgAsChild, style: { fill: "currentColor" } }, { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } }, { props: { fontSize: "small" }, style: { fontSize: ((_f2 = (_e2 = e2.typography) == null ? void 0 : _e2.pxToRem) == null ? void 0 : _f2.call(_e2, 20)) || "1.25rem" } }, { props: { fontSize: "medium" }, style: { fontSize: ((_h2 = (_g2 = e2.typography) == null ? void 0 : _g2.pxToRem) == null ? void 0 : _h2.call(_g2, 24)) || "1.5rem" } }, { props: { fontSize: "large" }, style: { fontSize: ((_j = (_i2 = e2.typography) == null ? void 0 : _i2.pxToRem) == null ? void 0 : _j.call(_i2, 35)) || "2.1875rem" } }, ...Object.entries((e2.vars ?? e2).palette).filter(([, t]) => t && t.main).map(([t]) => {
    var _a3, _b2;
    return { props: { color: t }, style: { color: (_b2 = (_a3 = (e2.vars ?? e2).palette) == null ? void 0 : _a3[t]) == null ? void 0 : _b2.main } };
  }), { props: { color: "action" }, style: { color: (_l2 = (_k = (e2.vars ?? e2).palette) == null ? void 0 : _k.action) == null ? void 0 : _l2.active } }, { props: { color: "disabled" }, style: { color: (_n2 = (_m2 = (e2.vars ?? e2).palette) == null ? void 0 : _m2.action) == null ? void 0 : _n2.disabled } }, { props: { color: "inherit" }, style: { color: void 0 } }] };
})), ka = T.forwardRef(function(t, n) {
  const r = On({ props: t, name: "MuiSvgIcon" }), { children: o, className: i, color: l = "inherit", component: s = "svg", fontSize: a = "medium", htmlColor: u, inheritViewBox: h = false, titleAccess: d, viewBox: m = "0 0 24 24", ...v } = r, S = T.isValidElement(o) && o.type === "svg", w = { ...r, color: l, component: s, fontSize: a, instanceFontSize: t.fontSize, inheritViewBox: h, viewBox: m, hasSvgAsChild: S }, _ = {};
  h || (_.viewBox = m);
  const p = C1(w);
  return $.jsxs(k1, { as: s, className: we(p.root, i), focusable: "false", color: u, "aria-hidden": d ? void 0 : true, role: d ? "img" : void 0, ref: n, ..._, ...v, ...S && o.props, ownerState: w, children: [S ? o.props.children : o, d ? $.jsx("title", { children: d }) : null] });
});
ka.muiName = "SvgIcon";
function nr(e2, t) {
  function n(r, o) {
    return $.jsx(ka, { "data-testid": void 0, ref: o, ...r, children: e2 });
  }
  return n.muiName = ka.muiName, T.memo(T.forwardRef(n));
}
function Qp(e2, t) {
  if (e2 == null) return {};
  var n = {};
  for (var r in e2) if ({}.hasOwnProperty.call(e2, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e2[r];
  }
  return n;
}
function Ea(e2, t) {
  return Ea = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ea(e2, t);
}
function Zp(e2, t) {
  e2.prototype = Object.create(t.prototype), e2.prototype.constructor = e2, Ea(e2, t);
}
var qp = { exports: {} }, lt = {}, Jp = { exports: {} }, eh = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e2) {
  function t(O, D) {
    var j = O.length;
    O.push(D);
    e: for (; 0 < j; ) {
      var V = j - 1 >>> 1, B = O[V];
      if (0 < o(B, D)) O[V] = D, O[j] = B, j = V;
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var D = O[0], j = O.pop();
    if (j !== D) {
      O[0] = j;
      e: for (var V = 0, B = O.length, be = B >>> 1; V < be; ) {
        var at = 2 * (V + 1) - 1, Kt = O[at], ut = at + 1, Ye = O[ut];
        if (0 > o(Kt, j)) ut < B && 0 > o(Ye, Kt) ? (O[V] = Ye, O[ut] = j, V = ut) : (O[V] = Kt, O[at] = j, V = at);
        else if (ut < B && 0 > o(Ye, j)) O[V] = Ye, O[ut] = j, V = ut;
        else break e;
      }
    }
    return D;
  }
  function o(O, D) {
    var j = O.sortIndex - D.sortIndex;
    return j !== 0 ? j : O.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e2.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, s = l.now();
    e2.unstable_now = function() {
      return l.now() - s;
    };
  }
  var a = [], u = [], h = 1, d = null, m = 3, v = false, S = false, w = false, _ = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(O) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= O) r(u), D.sortIndex = D.expirationTime, t(a, D);
      else break;
      D = n(u);
    }
  }
  function y(O) {
    if (w = false, g(O), !S) if (n(a) !== null) S = true, K(x);
    else {
      var D = n(u);
      D !== null && Fe(y, D.startTime - O);
    }
  }
  function x(O, D) {
    S = false, w && (w = false, p(k), k = -1), v = true;
    var j = m;
    try {
      for (g(D), d = n(a); d !== null && (!(d.expirationTime > D) || O && !M()); ) {
        var V = d.callback;
        if (typeof V == "function") {
          d.callback = null, m = d.priorityLevel;
          var B = V(d.expirationTime <= D);
          D = e2.unstable_now(), typeof B == "function" ? d.callback = B : d === n(a) && r(a), g(D);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var be = true;
      else {
        var at = n(u);
        at !== null && Fe(y, at.startTime - D), be = false;
      }
      return be;
    } finally {
      d = null, m = j, v = false;
    }
  }
  var C = false, P = null, k = -1, R = 5, c = -1;
  function M() {
    return !(e2.unstable_now() - c < R);
  }
  function I() {
    if (P !== null) {
      var O = e2.unstable_now();
      c = O;
      var D = true;
      try {
        D = P(true, O);
      } finally {
        D ? z() : (C = false, P = null);
      }
    } else C = false;
  }
  var z;
  if (typeof f == "function") z = function() {
    f(I);
  };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(), te = L.port2;
    L.port1.onmessage = I, z = function() {
      te.postMessage(null);
    };
  } else z = function() {
    _(I, 0);
  };
  function K(O) {
    P = O, C || (C = true, z());
  }
  function Fe(O, D) {
    k = _(function() {
      O(e2.unstable_now());
    }, D);
  }
  e2.unstable_IdlePriority = 5, e2.unstable_ImmediatePriority = 1, e2.unstable_LowPriority = 4, e2.unstable_NormalPriority = 3, e2.unstable_Profiling = null, e2.unstable_UserBlockingPriority = 2, e2.unstable_cancelCallback = function(O) {
    O.callback = null;
  }, e2.unstable_continueExecution = function() {
    S || v || (S = true, K(x));
  }, e2.unstable_forceFrameRate = function(O) {
    0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < O ? Math.floor(1e3 / O) : 5;
  }, e2.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e2.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e2.unstable_next = function(O) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = m;
    }
    var j = m;
    m = D;
    try {
      return O();
    } finally {
      m = j;
    }
  }, e2.unstable_pauseExecution = function() {
  }, e2.unstable_requestPaint = function() {
  }, e2.unstable_runWithPriority = function(O, D) {
    switch (O) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        O = 3;
    }
    var j = m;
    m = O;
    try {
      return D();
    } finally {
      m = j;
    }
  }, e2.unstable_scheduleCallback = function(O, D, j) {
    var V = e2.unstable_now();
    switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? V + j : V) : j = V, O) {
      case 1:
        var B = -1;
        break;
      case 2:
        B = 250;
        break;
      case 5:
        B = 1073741823;
        break;
      case 4:
        B = 1e4;
        break;
      default:
        B = 5e3;
    }
    return B = j + B, O = { id: h++, callback: D, priorityLevel: O, startTime: j, expirationTime: B, sortIndex: -1 }, j > V ? (O.sortIndex = j, t(u, O), n(a) === null && O === n(u) && (w ? (p(k), k = -1) : w = true, Fe(y, j - V))) : (O.sortIndex = B, t(a, O), S || v || (S = true, K(x))), O;
  }, e2.unstable_shouldYield = M, e2.unstable_wrapCallback = function(O) {
    var D = m;
    return function() {
      var j = m;
      m = D;
      try {
        return O.apply(this, arguments);
      } finally {
        m = j;
      }
    };
  };
})(eh);
Jp.exports = eh;
var E1 = Jp.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var T1 = T, ot = E1;
function N(e2) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e2, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e2 + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var th = /* @__PURE__ */ new Set(), No = {};
function rr(e2, t) {
  Ar(e2, t), Ar(e2 + "Capture", t);
}
function Ar(e2, t) {
  for (No[e2] = t, e2 = 0; e2 < t.length; e2++) th.add(t[e2]);
}
var nn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ta = Object.prototype.hasOwnProperty, P1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, bf = {}, Df = {};
function _1(e2) {
  return Ta.call(Df, e2) ? true : Ta.call(bf, e2) ? false : P1.test(e2) ? Df[e2] = true : (bf[e2] = true, false);
}
function M1(e2, t, n, r) {
  if (n !== null && n.type === 0) return false;
  switch (typeof t) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      return r ? false : n !== null ? !n.acceptsBooleans : (e2 = e2.toLowerCase().slice(0, 5), e2 !== "data-" && e2 !== "aria-");
    default:
      return false;
  }
}
function $1(e2, t, n, r) {
  if (t === null || typeof t > "u" || M1(e2, t, n, r)) return true;
  if (r) return false;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === false;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return false;
}
function je(e2, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e2, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e2) {
  Pe[e2] = new je(e2, 0, false, e2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e2) {
  var t = e2[0];
  Pe[t] = new je(t, 1, false, e2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e2) {
  Pe[e2] = new je(e2, 2, false, e2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e2) {
  Pe[e2] = new je(e2, 2, false, e2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e2) {
  Pe[e2] = new je(e2, 3, false, e2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(e2) {
  Pe[e2] = new je(e2, 3, true, e2, null, false, false);
});
["capture", "download"].forEach(function(e2) {
  Pe[e2] = new je(e2, 4, false, e2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(e2) {
  Pe[e2] = new je(e2, 6, false, e2, null, false, false);
});
["rowSpan", "start"].forEach(function(e2) {
  Pe[e2] = new je(e2, 5, false, e2.toLowerCase(), null, false, false);
});
var nc = /[\-:]([a-z])/g;
function rc(e2) {
  return e2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e2) {
  var t = e2.replace(nc, rc);
  Pe[t] = new je(t, 1, false, e2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e2) {
  var t = e2.replace(nc, rc);
  Pe[t] = new je(t, 1, false, e2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e2) {
  var t = e2.replace(nc, rc);
  Pe[t] = new je(t, 1, false, e2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(e2) {
  Pe[e2] = new je(e2, 1, false, e2.toLowerCase(), null, false, false);
});
Pe.xlinkHref = new je("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(e2) {
  Pe[e2] = new je(e2, 1, false, e2.toLowerCase(), null, true, true);
});
function oc(e2, t, n, r) {
  var o = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && ($1(t, n, o, r) && (n = null), r || o === null ? _1(t) && (n === null ? e2.removeAttribute(t) : e2.setAttribute(t, "" + n)) : o.mustUseProperty ? e2[o.propertyName] = n === null ? o.type === 3 ? false : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e2.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === true ? "" : "" + n, r ? e2.setAttributeNS(r, t, n) : e2.setAttribute(t, n))));
}
var sn = T1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gi = Symbol.for("react.element"), mr = Symbol.for("react.portal"), gr = Symbol.for("react.fragment"), ic = Symbol.for("react.strict_mode"), Pa = Symbol.for("react.profiler"), nh = Symbol.for("react.provider"), rh = Symbol.for("react.context"), lc = Symbol.for("react.forward_ref"), _a = Symbol.for("react.suspense"), Ma = Symbol.for("react.suspense_list"), sc = Symbol.for("react.memo"), pn = Symbol.for("react.lazy"), oh = Symbol.for("react.offscreen"), If = Symbol.iterator;
function qr(e2) {
  return e2 === null || typeof e2 != "object" ? null : (e2 = If && e2[If] || e2["@@iterator"], typeof e2 == "function" ? e2 : null);
}
var le = Object.assign, js;
function uo(e2) {
  if (js === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    js = t && t[1] || "";
  }
  return `
` + js + e2;
}
var Fs = false;
function Bs(e2, t) {
  if (!e2 || Fs) return "";
  Fs = true;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e2, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e2.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e2();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s]; ) s--;
      for (; 1 <= l && 0 <= s; l--, s--) if (o[l] !== i[s]) {
        if (l !== 1 || s !== 1) do
          if (l--, s--, 0 > s || o[l] !== i[s]) {
            var a = `
` + o[l].replace(" at new ", " at ");
            return e2.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e2.displayName)), a;
          }
        while (1 <= l && 0 <= s);
        break;
      }
    }
  } finally {
    Fs = false, Error.prepareStackTrace = n;
  }
  return (e2 = e2 ? e2.displayName || e2.name : "") ? uo(e2) : "";
}
function R1(e2) {
  switch (e2.tag) {
    case 5:
      return uo(e2.type);
    case 16:
      return uo("Lazy");
    case 13:
      return uo("Suspense");
    case 19:
      return uo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e2 = Bs(e2.type, false), e2;
    case 11:
      return e2 = Bs(e2.type.render, false), e2;
    case 1:
      return e2 = Bs(e2.type, true), e2;
    default:
      return "";
  }
}
function $a(e2) {
  if (e2 == null) return null;
  if (typeof e2 == "function") return e2.displayName || e2.name || null;
  if (typeof e2 == "string") return e2;
  switch (e2) {
    case gr:
      return "Fragment";
    case mr:
      return "Portal";
    case Pa:
      return "Profiler";
    case ic:
      return "StrictMode";
    case _a:
      return "Suspense";
    case Ma:
      return "SuspenseList";
  }
  if (typeof e2 == "object") switch (e2.$$typeof) {
    case rh:
      return (e2.displayName || "Context") + ".Consumer";
    case nh:
      return (e2._context.displayName || "Context") + ".Provider";
    case lc:
      var t = e2.render;
      return e2 = e2.displayName, e2 || (e2 = t.displayName || t.name || "", e2 = e2 !== "" ? "ForwardRef(" + e2 + ")" : "ForwardRef"), e2;
    case sc:
      return t = e2.displayName || null, t !== null ? t : $a(e2.type) || "Memo";
    case pn:
      t = e2._payload, e2 = e2._init;
      try {
        return $a(e2(t));
      } catch {
      }
  }
  return null;
}
function N1(e2) {
  var t = e2.type;
  switch (e2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e2 = t.render, e2 = e2.displayName || e2.name || "", t.displayName || (e2 !== "" ? "ForwardRef(" + e2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return $a(t);
    case 8:
      return t === ic ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $n(e2) {
  switch (typeof e2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e2;
    case "object":
      return e2;
    default:
      return "";
  }
}
function ih(e2) {
  var t = e2.type;
  return (e2 = e2.nodeName) && e2.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function O1(e2) {
  var t = ih(e2) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e2.constructor.prototype, t), r = "" + e2[t];
  if (!e2.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e2, t, { configurable: true, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e2, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e2._valueTracker = null, delete e2[t];
    } };
  }
}
function yi(e2) {
  e2._valueTracker || (e2._valueTracker = O1(e2));
}
function lh(e2) {
  if (!e2) return false;
  var t = e2._valueTracker;
  if (!t) return true;
  var n = t.getValue(), r = "";
  return e2 && (r = ih(e2) ? e2.checked ? "true" : "false" : e2.value), e2 = r, e2 !== n ? (t.setValue(e2), true) : false;
}
function tl(e2) {
  if (e2 = e2 || (typeof document < "u" ? document : void 0), typeof e2 > "u") return null;
  try {
    return e2.activeElement || e2.body;
  } catch {
    return e2.body;
  }
}
function Ra(e2, t) {
  var n = t.checked;
  return le({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e2._wrapperState.initialChecked });
}
function Lf(e2, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = $n(t.value != null ? t.value : n), e2._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function sh(e2, t) {
  t = t.checked, t != null && oc(e2, "checked", t, false);
}
function Na(e2, t) {
  sh(e2, t);
  var n = $n(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e2.value === "" || e2.value != n) && (e2.value = "" + n) : e2.value !== "" + n && (e2.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e2.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Oa(e2, t.type, n) : t.hasOwnProperty("defaultValue") && Oa(e2, t.type, $n(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e2.defaultChecked = !!t.defaultChecked);
}
function Af(e2, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e2._wrapperState.initialValue, n || t === e2.value || (e2.value = t), e2.defaultValue = t;
  }
  n = e2.name, n !== "" && (e2.name = ""), e2.defaultChecked = !!e2._wrapperState.initialChecked, n !== "" && (e2.name = n);
}
function Oa(e2, t, n) {
  (t !== "number" || tl(e2.ownerDocument) !== e2) && (n == null ? e2.defaultValue = "" + e2._wrapperState.initialValue : e2.defaultValue !== "" + n && (e2.defaultValue = "" + n));
}
var co = Array.isArray;
function Rr(e2, t, n, r) {
  if (e2 = e2.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = true;
    for (n = 0; n < e2.length; n++) o = t.hasOwnProperty("$" + e2[n].value), e2[n].selected !== o && (e2[n].selected = o), o && r && (e2[n].defaultSelected = true);
  } else {
    for (n = "" + $n(n), t = null, o = 0; o < e2.length; o++) {
      if (e2[o].value === n) {
        e2[o].selected = true, r && (e2[o].defaultSelected = true);
        return;
      }
      t !== null || e2[o].disabled || (t = e2[o]);
    }
    t !== null && (t.selected = true);
  }
}
function ba(e2, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return le({}, t, { value: void 0, defaultValue: void 0, children: "" + e2._wrapperState.initialValue });
}
function zf(e2, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(N(92));
      if (co(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e2._wrapperState = { initialValue: $n(n) };
}
function ah(e2, t) {
  var n = $n(t.value), r = $n(t.defaultValue);
  n != null && (n = "" + n, n !== e2.value && (e2.value = n), t.defaultValue == null && e2.defaultValue !== n && (e2.defaultValue = n)), r != null && (e2.defaultValue = "" + r);
}
function jf(e2) {
  var t = e2.textContent;
  t === e2._wrapperState.initialValue && t !== "" && t !== null && (e2.value = t);
}
function uh(e2) {
  switch (e2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Da(e2, t) {
  return e2 == null || e2 === "http://www.w3.org/1999/xhtml" ? uh(t) : e2 === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e2;
}
var vi, ch = function(e2) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e2(t, n, r, o);
    });
  } : e2;
}(function(e2, t) {
  if (e2.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e2) e2.innerHTML = t;
  else {
    for (vi = vi || document.createElement("div"), vi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = vi.firstChild; e2.firstChild; ) e2.removeChild(e2.firstChild);
    for (; t.firstChild; ) e2.appendChild(t.firstChild);
  }
});
function Oo(e2, t) {
  if (t) {
    var n = e2.firstChild;
    if (n && n === e2.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e2.textContent = t;
}
var go = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, b1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(go).forEach(function(e2) {
  b1.forEach(function(t) {
    t = t + e2.charAt(0).toUpperCase() + e2.substring(1), go[t] = go[e2];
  });
});
function fh(e2, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || go.hasOwnProperty(e2) && go[e2] ? ("" + t).trim() : t + "px";
}
function dh(e2, t) {
  e2 = e2.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = fh(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e2.setProperty(n, o) : e2[n] = o;
  }
}
var D1 = le({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function Ia(e2, t) {
  if (t) {
    if (D1[e2] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e2));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function La(e2, t) {
  if (e2.indexOf("-") === -1) return typeof t.is == "string";
  switch (e2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var Aa = null;
function ac(e2) {
  return e2 = e2.target || e2.srcElement || window, e2.correspondingUseElement && (e2 = e2.correspondingUseElement), e2.nodeType === 3 ? e2.parentNode : e2;
}
var za = null, Nr = null, Or = null;
function Ff(e2) {
  if (e2 = oi(e2)) {
    if (typeof za != "function") throw Error(N(280));
    var t = e2.stateNode;
    t && (t = ds(t), za(e2.stateNode, e2.type, t));
  }
}
function ph(e2) {
  Nr ? Or ? Or.push(e2) : Or = [e2] : Nr = e2;
}
function hh() {
  if (Nr) {
    var e2 = Nr, t = Or;
    if (Or = Nr = null, Ff(e2), t) for (e2 = 0; e2 < t.length; e2++) Ff(t[e2]);
  }
}
function mh(e2, t) {
  return e2(t);
}
function gh() {
}
var Us = false;
function yh(e2, t, n) {
  if (Us) return e2(t, n);
  Us = true;
  try {
    return mh(e2, t, n);
  } finally {
    Us = false, (Nr !== null || Or !== null) && (gh(), hh());
  }
}
function bo(e2, t) {
  var n = e2.stateNode;
  if (n === null) return null;
  var r = ds(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e2 = e2.type, r = !(e2 === "button" || e2 === "input" || e2 === "select" || e2 === "textarea")), e2 = !r;
      break e;
    default:
      e2 = false;
  }
  if (e2) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var ja = false;
if (nn) try {
  var Jr = {};
  Object.defineProperty(Jr, "passive", { get: function() {
    ja = true;
  } }), window.addEventListener("test", Jr, Jr), window.removeEventListener("test", Jr, Jr);
} catch {
  ja = false;
}
function I1(e2, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var yo = false, nl = null, rl = false, Fa = null, L1 = { onError: function(e2) {
  yo = true, nl = e2;
} };
function A1(e2, t, n, r, o, i, l, s, a) {
  yo = false, nl = null, I1.apply(L1, arguments);
}
function z1(e2, t, n, r, o, i, l, s, a) {
  if (A1.apply(this, arguments), yo) {
    if (yo) {
      var u = nl;
      yo = false, nl = null;
    } else throw Error(N(198));
    rl || (rl = true, Fa = u);
  }
}
function or(e2) {
  var t = e2, n = e2;
  if (e2.alternate) for (; t.return; ) t = t.return;
  else {
    e2 = t;
    do
      t = e2, t.flags & 4098 && (n = t.return), e2 = t.return;
    while (e2);
  }
  return t.tag === 3 ? n : null;
}
function vh(e2) {
  if (e2.tag === 13) {
    var t = e2.memoizedState;
    if (t === null && (e2 = e2.alternate, e2 !== null && (t = e2.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Bf(e2) {
  if (or(e2) !== e2) throw Error(N(188));
}
function j1(e2) {
  var t = e2.alternate;
  if (!t) {
    if (t = or(e2), t === null) throw Error(N(188));
    return t !== e2 ? null : e2;
  }
  for (var n = e2, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Bf(o), e2;
        if (i === r) return Bf(o), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var l = false, s = o.child; s; ) {
        if (s === n) {
          l = true, n = o, r = i;
          break;
        }
        if (s === r) {
          l = true, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            l = true, n = i, r = o;
            break;
          }
          if (s === r) {
            l = true, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e2 : t;
}
function Sh(e2) {
  return e2 = j1(e2), e2 !== null ? wh(e2) : null;
}
function wh(e2) {
  if (e2.tag === 5 || e2.tag === 6) return e2;
  for (e2 = e2.child; e2 !== null; ) {
    var t = wh(e2);
    if (t !== null) return t;
    e2 = e2.sibling;
  }
  return null;
}
var xh = ot.unstable_scheduleCallback, Uf = ot.unstable_cancelCallback, F1 = ot.unstable_shouldYield, B1 = ot.unstable_requestPaint, de = ot.unstable_now, U1 = ot.unstable_getCurrentPriorityLevel, uc = ot.unstable_ImmediatePriority, Ch = ot.unstable_UserBlockingPriority, ol = ot.unstable_NormalPriority, V1 = ot.unstable_LowPriority, kh = ot.unstable_IdlePriority, as = null, Ut = null;
function W1(e2) {
  if (Ut && typeof Ut.onCommitFiberRoot == "function") try {
    Ut.onCommitFiberRoot(as, e2, void 0, (e2.current.flags & 128) === 128);
  } catch {
  }
}
var _t = Math.clz32 ? Math.clz32 : Y1, H1 = Math.log, K1 = Math.LN2;
function Y1(e2) {
  return e2 >>>= 0, e2 === 0 ? 32 : 31 - (H1(e2) / K1 | 0) | 0;
}
var Si = 64, wi = 4194304;
function fo(e2) {
  switch (e2 & -e2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e2;
  }
}
function il(e2, t) {
  var n = e2.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e2.suspendedLanes, i = e2.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = fo(s) : (i &= l, i !== 0 && (r = fo(i)));
  } else l = n & ~o, l !== 0 ? r = fo(l) : i !== 0 && (r = fo(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e2.entangledLanes, t !== 0) for (e2 = e2.entanglements, t &= r; 0 < t; ) n = 31 - _t(t), o = 1 << n, r |= e2[n], t &= ~o;
  return r;
}
function G1(e2, t) {
  switch (e2) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function X1(e2, t) {
  for (var n = e2.suspendedLanes, r = e2.pingedLanes, o = e2.expirationTimes, i = e2.pendingLanes; 0 < i; ) {
    var l = 31 - _t(i), s = 1 << l, a = o[l];
    a === -1 ? (!(s & n) || s & r) && (o[l] = G1(s, t)) : a <= t && (e2.expiredLanes |= s), i &= ~s;
  }
}
function Ba(e2) {
  return e2 = e2.pendingLanes & -1073741825, e2 !== 0 ? e2 : e2 & 1073741824 ? 1073741824 : 0;
}
function Eh() {
  var e2 = Si;
  return Si <<= 1, !(Si & 4194240) && (Si = 64), e2;
}
function Vs(e2) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e2);
  return t;
}
function ni(e2, t, n) {
  e2.pendingLanes |= t, t !== 536870912 && (e2.suspendedLanes = 0, e2.pingedLanes = 0), e2 = e2.eventTimes, t = 31 - _t(t), e2[t] = n;
}
function Q1(e2, t) {
  var n = e2.pendingLanes & ~t;
  e2.pendingLanes = t, e2.suspendedLanes = 0, e2.pingedLanes = 0, e2.expiredLanes &= t, e2.mutableReadLanes &= t, e2.entangledLanes &= t, t = e2.entanglements;
  var r = e2.eventTimes;
  for (e2 = e2.expirationTimes; 0 < n; ) {
    var o = 31 - _t(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e2[o] = -1, n &= ~i;
  }
}
function cc(e2, t) {
  var n = e2.entangledLanes |= t;
  for (e2 = e2.entanglements; n; ) {
    var r = 31 - _t(n), o = 1 << r;
    o & t | e2[r] & t && (e2[r] |= t), n &= ~o;
  }
}
var Y = 0;
function Th(e2) {
  return e2 &= -e2, 1 < e2 ? 4 < e2 ? e2 & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ph, fc, _h, Mh, $h, Ua = false, xi = [], Sn = null, wn = null, xn = null, Do = /* @__PURE__ */ new Map(), Io = /* @__PURE__ */ new Map(), mn = [], Z1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Vf(e2, t) {
  switch (e2) {
    case "focusin":
    case "focusout":
      Sn = null;
      break;
    case "dragenter":
    case "dragleave":
      wn = null;
      break;
    case "mouseover":
    case "mouseout":
      xn = null;
      break;
    case "pointerover":
    case "pointerout":
      Do.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Io.delete(t.pointerId);
  }
}
function eo(e2, t, n, r, o, i) {
  return e2 === null || e2.nativeEvent !== i ? (e2 = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = oi(t), t !== null && fc(t)), e2) : (e2.eventSystemFlags |= r, t = e2.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e2);
}
function q1(e2, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Sn = eo(Sn, e2, t, n, r, o), true;
    case "dragenter":
      return wn = eo(wn, e2, t, n, r, o), true;
    case "mouseover":
      return xn = eo(xn, e2, t, n, r, o), true;
    case "pointerover":
      var i = o.pointerId;
      return Do.set(i, eo(Do.get(i) || null, e2, t, n, r, o)), true;
    case "gotpointercapture":
      return i = o.pointerId, Io.set(i, eo(Io.get(i) || null, e2, t, n, r, o)), true;
  }
  return false;
}
function Rh(e2) {
  var t = Un(e2.target);
  if (t !== null) {
    var n = or(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = vh(n), t !== null) {
          e2.blockedOn = t, $h(e2.priority, function() {
            _h(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e2.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e2.blockedOn = null;
}
function Bi(e2) {
  if (e2.blockedOn !== null) return false;
  for (var t = e2.targetContainers; 0 < t.length; ) {
    var n = Va(e2.domEventName, e2.eventSystemFlags, t[0], e2.nativeEvent);
    if (n === null) {
      n = e2.nativeEvent;
      var r = new n.constructor(n.type, n);
      Aa = r, n.target.dispatchEvent(r), Aa = null;
    } else return t = oi(n), t !== null && fc(t), e2.blockedOn = n, false;
    t.shift();
  }
  return true;
}
function Wf(e2, t, n) {
  Bi(e2) && n.delete(t);
}
function J1() {
  Ua = false, Sn !== null && Bi(Sn) && (Sn = null), wn !== null && Bi(wn) && (wn = null), xn !== null && Bi(xn) && (xn = null), Do.forEach(Wf), Io.forEach(Wf);
}
function to(e2, t) {
  e2.blockedOn === t && (e2.blockedOn = null, Ua || (Ua = true, ot.unstable_scheduleCallback(ot.unstable_NormalPriority, J1)));
}
function Lo(e2) {
  function t(o) {
    return to(o, e2);
  }
  if (0 < xi.length) {
    to(xi[0], e2);
    for (var n = 1; n < xi.length; n++) {
      var r = xi[n];
      r.blockedOn === e2 && (r.blockedOn = null);
    }
  }
  for (Sn !== null && to(Sn, e2), wn !== null && to(wn, e2), xn !== null && to(xn, e2), Do.forEach(t), Io.forEach(t), n = 0; n < mn.length; n++) r = mn[n], r.blockedOn === e2 && (r.blockedOn = null);
  for (; 0 < mn.length && (n = mn[0], n.blockedOn === null); ) Rh(n), n.blockedOn === null && mn.shift();
}
var br = sn.ReactCurrentBatchConfig, ll = true;
function eS(e2, t, n, r) {
  var o = Y, i = br.transition;
  br.transition = null;
  try {
    Y = 1, dc(e2, t, n, r);
  } finally {
    Y = o, br.transition = i;
  }
}
function tS(e2, t, n, r) {
  var o = Y, i = br.transition;
  br.transition = null;
  try {
    Y = 4, dc(e2, t, n, r);
  } finally {
    Y = o, br.transition = i;
  }
}
function dc(e2, t, n, r) {
  if (ll) {
    var o = Va(e2, t, n, r);
    if (o === null) Js(e2, t, r, sl, n), Vf(e2, r);
    else if (q1(o, e2, t, n, r)) r.stopPropagation();
    else if (Vf(e2, r), t & 4 && -1 < Z1.indexOf(e2)) {
      for (; o !== null; ) {
        var i = oi(o);
        if (i !== null && Ph(i), i = Va(e2, t, n, r), i === null && Js(e2, t, r, sl, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Js(e2, t, r, null, n);
  }
}
var sl = null;
function Va(e2, t, n, r) {
  if (sl = null, e2 = ac(r), e2 = Un(e2), e2 !== null) if (t = or(e2), t === null) e2 = null;
  else if (n = t.tag, n === 13) {
    if (e2 = vh(t), e2 !== null) return e2;
    e2 = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e2 = null;
  } else t !== e2 && (e2 = null);
  return sl = e2, null;
}
function Nh(e2) {
  switch (e2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (U1()) {
        case uc:
          return 1;
        case Ch:
          return 4;
        case ol:
        case V1:
          return 16;
        case kh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yn = null, pc = null, Ui = null;
function Oh() {
  if (Ui) return Ui;
  var e2, t = pc, n = t.length, r, o = "value" in yn ? yn.value : yn.textContent, i = o.length;
  for (e2 = 0; e2 < n && t[e2] === o[e2]; e2++) ;
  var l = n - e2;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return Ui = o.slice(e2, 1 < r ? 1 - r : void 0);
}
function Vi(e2) {
  var t = e2.keyCode;
  return "charCode" in e2 ? (e2 = e2.charCode, e2 === 0 && t === 13 && (e2 = 13)) : e2 = t, e2 === 10 && (e2 = 13), 32 <= e2 || e2 === 13 ? e2 : 0;
}
function Ci() {
  return true;
}
function Hf() {
  return false;
}
function st(e2) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e2) e2.hasOwnProperty(s) && (n = e2[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Ci : Hf, this.isPropagationStopped = Hf, this;
  }
  return le(t.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Ci);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Ci);
  }, persist: function() {
  }, isPersistent: Ci }), t;
}
var Yr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e2) {
  return e2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, hc = st(Yr), ri = le({}, Yr, { view: 0, detail: 0 }), nS = st(ri), Ws, Hs, no, us = le({}, ri, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: mc, button: 0, buttons: 0, relatedTarget: function(e2) {
  return e2.relatedTarget === void 0 ? e2.fromElement === e2.srcElement ? e2.toElement : e2.fromElement : e2.relatedTarget;
}, movementX: function(e2) {
  return "movementX" in e2 ? e2.movementX : (e2 !== no && (no && e2.type === "mousemove" ? (Ws = e2.screenX - no.screenX, Hs = e2.screenY - no.screenY) : Hs = Ws = 0, no = e2), Ws);
}, movementY: function(e2) {
  return "movementY" in e2 ? e2.movementY : Hs;
} }), Kf = st(us), rS = le({}, us, { dataTransfer: 0 }), oS = st(rS), iS = le({}, ri, { relatedTarget: 0 }), Ks = st(iS), lS = le({}, Yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sS = st(lS), aS = le({}, Yr, { clipboardData: function(e2) {
  return "clipboardData" in e2 ? e2.clipboardData : window.clipboardData;
} }), uS = st(aS), cS = le({}, Yr, { data: 0 }), Yf = st(cS), fS = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, dS = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, pS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function hS(e2) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e2) : (e2 = pS[e2]) ? !!t[e2] : false;
}
function mc() {
  return hS;
}
var mS = le({}, ri, { key: function(e2) {
  if (e2.key) {
    var t = fS[e2.key] || e2.key;
    if (t !== "Unidentified") return t;
  }
  return e2.type === "keypress" ? (e2 = Vi(e2), e2 === 13 ? "Enter" : String.fromCharCode(e2)) : e2.type === "keydown" || e2.type === "keyup" ? dS[e2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: mc, charCode: function(e2) {
  return e2.type === "keypress" ? Vi(e2) : 0;
}, keyCode: function(e2) {
  return e2.type === "keydown" || e2.type === "keyup" ? e2.keyCode : 0;
}, which: function(e2) {
  return e2.type === "keypress" ? Vi(e2) : e2.type === "keydown" || e2.type === "keyup" ? e2.keyCode : 0;
} }), gS = st(mS), yS = le({}, us, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Gf = st(yS), vS = le({}, ri, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: mc }), SS = st(vS), wS = le({}, Yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), xS = st(wS), CS = le({}, us, { deltaX: function(e2) {
  return "deltaX" in e2 ? e2.deltaX : "wheelDeltaX" in e2 ? -e2.wheelDeltaX : 0;
}, deltaY: function(e2) {
  return "deltaY" in e2 ? e2.deltaY : "wheelDeltaY" in e2 ? -e2.wheelDeltaY : "wheelDelta" in e2 ? -e2.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), kS = st(CS), ES = [9, 13, 27, 32], gc = nn && "CompositionEvent" in window, vo = null;
nn && "documentMode" in document && (vo = document.documentMode);
var TS = nn && "TextEvent" in window && !vo, bh = nn && (!gc || vo && 8 < vo && 11 >= vo), Xf = " ", Qf = false;
function Dh(e2, t) {
  switch (e2) {
    case "keyup":
      return ES.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function Ih(e2) {
  return e2 = e2.detail, typeof e2 == "object" && "data" in e2 ? e2.data : null;
}
var yr = false;
function PS(e2, t) {
  switch (e2) {
    case "compositionend":
      return Ih(t);
    case "keypress":
      return t.which !== 32 ? null : (Qf = true, Xf);
    case "textInput":
      return e2 = t.data, e2 === Xf && Qf ? null : e2;
    default:
      return null;
  }
}
function _S(e2, t) {
  if (yr) return e2 === "compositionend" || !gc && Dh(e2, t) ? (e2 = Oh(), Ui = pc = yn = null, yr = false, e2) : null;
  switch (e2) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var MS = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function Zf(e2) {
  var t = e2 && e2.nodeName && e2.nodeName.toLowerCase();
  return t === "input" ? !!MS[e2.type] : t === "textarea";
}
function Lh(e2, t, n, r) {
  ph(r), t = al(t, "onChange"), 0 < t.length && (n = new hc("onChange", "change", null, n, r), e2.push({ event: n, listeners: t }));
}
var So = null, Ao = null;
function $S(e2) {
  Yh(e2, 0);
}
function cs(e2) {
  var t = wr(e2);
  if (lh(t)) return e2;
}
function RS(e2, t) {
  if (e2 === "change") return t;
}
var Ah = false;
if (nn) {
  var Ys;
  if (nn) {
    var Gs = "oninput" in document;
    if (!Gs) {
      var qf = document.createElement("div");
      qf.setAttribute("oninput", "return;"), Gs = typeof qf.oninput == "function";
    }
    Ys = Gs;
  } else Ys = false;
  Ah = Ys && (!document.documentMode || 9 < document.documentMode);
}
function Jf() {
  So && (So.detachEvent("onpropertychange", zh), Ao = So = null);
}
function zh(e2) {
  if (e2.propertyName === "value" && cs(Ao)) {
    var t = [];
    Lh(t, Ao, e2, ac(e2)), yh($S, t);
  }
}
function NS(e2, t, n) {
  e2 === "focusin" ? (Jf(), So = t, Ao = n, So.attachEvent("onpropertychange", zh)) : e2 === "focusout" && Jf();
}
function OS(e2) {
  if (e2 === "selectionchange" || e2 === "keyup" || e2 === "keydown") return cs(Ao);
}
function bS(e2, t) {
  if (e2 === "click") return cs(t);
}
function DS(e2, t) {
  if (e2 === "input" || e2 === "change") return cs(t);
}
function IS(e2, t) {
  return e2 === t && (e2 !== 0 || 1 / e2 === 1 / t) || e2 !== e2 && t !== t;
}
var $t = typeof Object.is == "function" ? Object.is : IS;
function zo(e2, t) {
  if ($t(e2, t)) return true;
  if (typeof e2 != "object" || e2 === null || typeof t != "object" || t === null) return false;
  var n = Object.keys(e2), r = Object.keys(t);
  if (n.length !== r.length) return false;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ta.call(t, o) || !$t(e2[o], t[o])) return false;
  }
  return true;
}
function ed(e2) {
  for (; e2 && e2.firstChild; ) e2 = e2.firstChild;
  return e2;
}
function td(e2, t) {
  var n = ed(e2);
  e2 = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e2 + n.textContent.length, e2 <= t && r >= t) return { node: n, offset: t - e2 };
      e2 = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ed(n);
  }
}
function jh(e2, t) {
  return e2 && t ? e2 === t ? true : e2 && e2.nodeType === 3 ? false : t && t.nodeType === 3 ? jh(e2, t.parentNode) : "contains" in e2 ? e2.contains(t) : e2.compareDocumentPosition ? !!(e2.compareDocumentPosition(t) & 16) : false : false;
}
function Fh() {
  for (var e2 = window, t = tl(); t instanceof e2.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = false;
    }
    if (n) e2 = t.contentWindow;
    else break;
    t = tl(e2.document);
  }
  return t;
}
function yc(e2) {
  var t = e2 && e2.nodeName && e2.nodeName.toLowerCase();
  return t && (t === "input" && (e2.type === "text" || e2.type === "search" || e2.type === "tel" || e2.type === "url" || e2.type === "password") || t === "textarea" || e2.contentEditable === "true");
}
function LS(e2) {
  var t = Fh(), n = e2.focusedElem, r = e2.selectionRange;
  if (t !== n && n && n.ownerDocument && jh(n.ownerDocument.documentElement, n)) {
    if (r !== null && yc(n)) {
      if (t = r.start, e2 = r.end, e2 === void 0 && (e2 = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e2, n.value.length);
      else if (e2 = (t = n.ownerDocument || document) && t.defaultView || window, e2.getSelection) {
        e2 = e2.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e2.extend && i > r && (o = r, r = i, i = o), o = td(n, i);
        var l = td(n, r);
        o && l && (e2.rangeCount !== 1 || e2.anchorNode !== o.node || e2.anchorOffset !== o.offset || e2.focusNode !== l.node || e2.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e2.removeAllRanges(), i > r ? (e2.addRange(t), e2.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e2.addRange(t)));
      }
    }
    for (t = [], e2 = n; e2 = e2.parentNode; ) e2.nodeType === 1 && t.push({ element: e2, left: e2.scrollLeft, top: e2.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e2 = t[n], e2.element.scrollLeft = e2.left, e2.element.scrollTop = e2.top;
  }
}
var AS = nn && "documentMode" in document && 11 >= document.documentMode, vr = null, Wa = null, wo = null, Ha = false;
function nd(e2, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ha || vr == null || vr !== tl(r) || (r = vr, "selectionStart" in r && yc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), wo && zo(wo, r) || (wo = r, r = al(Wa, "onSelect"), 0 < r.length && (t = new hc("onSelect", "select", null, t, n), e2.push({ event: t, listeners: r }), t.target = vr)));
}
function ki(e2, t) {
  var n = {};
  return n[e2.toLowerCase()] = t.toLowerCase(), n["Webkit" + e2] = "webkit" + t, n["Moz" + e2] = "moz" + t, n;
}
var Sr = { animationend: ki("Animation", "AnimationEnd"), animationiteration: ki("Animation", "AnimationIteration"), animationstart: ki("Animation", "AnimationStart"), transitionend: ki("Transition", "TransitionEnd") }, Xs = {}, Bh = {};
nn && (Bh = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
function fs(e2) {
  if (Xs[e2]) return Xs[e2];
  if (!Sr[e2]) return e2;
  var t = Sr[e2], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bh) return Xs[e2] = t[n];
  return e2;
}
var Uh = fs("animationend"), Vh = fs("animationiteration"), Wh = fs("animationstart"), Hh = fs("transitionend"), Kh = /* @__PURE__ */ new Map(), rd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function bn(e2, t) {
  Kh.set(e2, t), rr(t, [e2]);
}
for (var Qs = 0; Qs < rd.length; Qs++) {
  var Zs = rd[Qs], zS = Zs.toLowerCase(), jS = Zs[0].toUpperCase() + Zs.slice(1);
  bn(zS, "on" + jS);
}
bn(Uh, "onAnimationEnd");
bn(Vh, "onAnimationIteration");
bn(Wh, "onAnimationStart");
bn("dblclick", "onDoubleClick");
bn("focusin", "onFocus");
bn("focusout", "onBlur");
bn(Hh, "onTransitionEnd");
Ar("onMouseEnter", ["mouseout", "mouseover"]);
Ar("onMouseLeave", ["mouseout", "mouseover"]);
Ar("onPointerEnter", ["pointerout", "pointerover"]);
Ar("onPointerLeave", ["pointerout", "pointerover"]);
rr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
rr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
rr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
rr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var po = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), FS = new Set("cancel close invalid load scroll toggle".split(" ").concat(po));
function od(e2, t, n) {
  var r = e2.type || "unknown-event";
  e2.currentTarget = n, z1(r, t, void 0, e2), e2.currentTarget = null;
}
function Yh(e2, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e2.length; n++) {
    var r = e2[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], a = s.instance, u = s.currentTarget;
        if (s = s.listener, a !== i && o.isPropagationStopped()) break e;
        od(o, s, u), i = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped()) break e;
        od(o, s, u), i = a;
      }
    }
  }
  if (rl) throw e2 = Fa, rl = false, Fa = null, e2;
}
function J(e2, t) {
  var n = t[Qa];
  n === void 0 && (n = t[Qa] = /* @__PURE__ */ new Set());
  var r = e2 + "__bubble";
  n.has(r) || (Gh(t, e2, 2, false), n.add(r));
}
function qs(e2, t, n) {
  var r = 0;
  t && (r |= 4), Gh(n, e2, r, t);
}
var Ei = "_reactListening" + Math.random().toString(36).slice(2);
function jo(e2) {
  if (!e2[Ei]) {
    e2[Ei] = true, th.forEach(function(n) {
      n !== "selectionchange" && (FS.has(n) || qs(n, false, e2), qs(n, true, e2));
    });
    var t = e2.nodeType === 9 ? e2 : e2.ownerDocument;
    t === null || t[Ei] || (t[Ei] = true, qs("selectionchange", false, t));
  }
}
function Gh(e2, t, n, r) {
  switch (Nh(t)) {
    case 1:
      var o = eS;
      break;
    case 4:
      o = tS;
      break;
    default:
      o = dc;
  }
  n = o.bind(null, t, n, e2), o = void 0, !ja || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), r ? o !== void 0 ? e2.addEventListener(t, n, { capture: true, passive: o }) : e2.addEventListener(t, n, true) : o !== void 0 ? e2.addEventListener(t, n, { passive: o }) : e2.addEventListener(t, n, false);
}
function Js(e2, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var s = r.stateNode.containerInfo;
      if (s === o || s.nodeType === 8 && s.parentNode === o) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var a = l.tag;
        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
        l = l.return;
      }
      for (; s !== null; ) {
        if (l = Un(s), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = i = l;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  yh(function() {
    var u = i, h = ac(n), d = [];
    e: {
      var m = Kh.get(e2);
      if (m !== void 0) {
        var v = hc, S = e2;
        switch (e2) {
          case "keypress":
            if (Vi(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = gS;
            break;
          case "focusin":
            S = "focus", v = Ks;
            break;
          case "focusout":
            S = "blur", v = Ks;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ks;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Kf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = oS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = SS;
            break;
          case Uh:
          case Vh:
          case Wh:
            v = sS;
            break;
          case Hh:
            v = xS;
            break;
          case "scroll":
            v = nS;
            break;
          case "wheel":
            v = kS;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = uS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Gf;
        }
        var w = (t & 4) !== 0, _ = !w && e2 === "scroll", p = w ? m !== null ? m + "Capture" : null : m;
        w = [];
        for (var f = u, g; f !== null; ) {
          g = f;
          var y = g.stateNode;
          if (g.tag === 5 && y !== null && (g = y, p !== null && (y = bo(f, p), y != null && w.push(Fo(f, y, g)))), _) break;
          f = f.return;
        }
        0 < w.length && (m = new v(m, S, null, n, h), d.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e2 === "mouseover" || e2 === "pointerover", v = e2 === "mouseout" || e2 === "pointerout", m && n !== Aa && (S = n.relatedTarget || n.fromElement) && (Un(S) || S[rn])) break e;
        if ((v || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (S = n.relatedTarget || n.toElement, v = u, S = S ? Un(S) : null, S !== null && (_ = or(S), S !== _ || S.tag !== 5 && S.tag !== 6) && (S = null)) : (v = null, S = u), v !== S)) {
          if (w = Kf, y = "onMouseLeave", p = "onMouseEnter", f = "mouse", (e2 === "pointerout" || e2 === "pointerover") && (w = Gf, y = "onPointerLeave", p = "onPointerEnter", f = "pointer"), _ = v == null ? m : wr(v), g = S == null ? m : wr(S), m = new w(y, f + "leave", v, n, h), m.target = _, m.relatedTarget = g, y = null, Un(h) === u && (w = new w(p, f + "enter", S, n, h), w.target = g, w.relatedTarget = _, y = w), _ = y, v && S) t: {
            for (w = v, p = S, f = 0, g = w; g; g = dr(g)) f++;
            for (g = 0, y = p; y; y = dr(y)) g++;
            for (; 0 < f - g; ) w = dr(w), f--;
            for (; 0 < g - f; ) p = dr(p), g--;
            for (; f--; ) {
              if (w === p || p !== null && w === p.alternate) break t;
              w = dr(w), p = dr(p);
            }
            w = null;
          }
          else w = null;
          v !== null && id(d, m, v, w, false), S !== null && _ !== null && id(d, _, S, w, true);
        }
      }
      e: {
        if (m = u ? wr(u) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file") var x = RS;
        else if (Zf(m)) if (Ah) x = DS;
        else {
          x = OS;
          var C = NS;
        }
        else (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = bS);
        if (x && (x = x(e2, u))) {
          Lh(d, x, n, h);
          break e;
        }
        C && C(e2, m, u), e2 === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && Oa(m, "number", m.value);
      }
      switch (C = u ? wr(u) : window, e2) {
        case "focusin":
          (Zf(C) || C.contentEditable === "true") && (vr = C, Wa = u, wo = null);
          break;
        case "focusout":
          wo = Wa = vr = null;
          break;
        case "mousedown":
          Ha = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ha = false, nd(d, n, h);
          break;
        case "selectionchange":
          if (AS) break;
        case "keydown":
        case "keyup":
          nd(d, n, h);
      }
      var P;
      if (gc) e: {
        switch (e2) {
          case "compositionstart":
            var k = "onCompositionStart";
            break e;
          case "compositionend":
            k = "onCompositionEnd";
            break e;
          case "compositionupdate":
            k = "onCompositionUpdate";
            break e;
        }
        k = void 0;
      }
      else yr ? Dh(e2, n) && (k = "onCompositionEnd") : e2 === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k && (bh && n.locale !== "ko" && (yr || k !== "onCompositionStart" ? k === "onCompositionEnd" && yr && (P = Oh()) : (yn = h, pc = "value" in yn ? yn.value : yn.textContent, yr = true)), C = al(u, k), 0 < C.length && (k = new Yf(k, e2, null, n, h), d.push({ event: k, listeners: C }), P ? k.data = P : (P = Ih(n), P !== null && (k.data = P)))), (P = TS ? PS(e2, n) : _S(e2, n)) && (u = al(u, "onBeforeInput"), 0 < u.length && (h = new Yf("onBeforeInput", "beforeinput", null, n, h), d.push({ event: h, listeners: u }), h.data = P));
    }
    Yh(d, t);
  });
}
function Fo(e2, t, n) {
  return { instance: e2, listener: t, currentTarget: n };
}
function al(e2, t) {
  for (var n = t + "Capture", r = []; e2 !== null; ) {
    var o = e2, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = bo(e2, n), i != null && r.unshift(Fo(e2, i, o)), i = bo(e2, t), i != null && r.push(Fo(e2, i, o))), e2 = e2.return;
  }
  return r;
}
function dr(e2) {
  if (e2 === null) return null;
  do
    e2 = e2.return;
  while (e2 && e2.tag !== 5);
  return e2 || null;
}
function id(e2, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, o ? (a = bo(n, i), a != null && l.unshift(Fo(n, a, s))) : o || (a = bo(n, i), a != null && l.push(Fo(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e2.push({ event: t, listeners: l });
}
var BS = /\r\n?/g, US = /\u0000|\uFFFD/g;
function ld(e2) {
  return (typeof e2 == "string" ? e2 : "" + e2).replace(BS, `
`).replace(US, "");
}
function Ti(e2, t, n) {
  if (t = ld(t), ld(e2) !== t && n) throw Error(N(425));
}
function ul() {
}
var Ka = null, Ya = null;
function Ga(e2, t) {
  return e2 === "textarea" || e2 === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Xa = typeof setTimeout == "function" ? setTimeout : void 0, VS = typeof clearTimeout == "function" ? clearTimeout : void 0, sd = typeof Promise == "function" ? Promise : void 0, WS = typeof queueMicrotask == "function" ? queueMicrotask : typeof sd < "u" ? function(e2) {
  return sd.resolve(null).then(e2).catch(HS);
} : Xa;
function HS(e2) {
  setTimeout(function() {
    throw e2;
  });
}
function ea(e2, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e2.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e2.removeChild(o), Lo(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Lo(t);
}
function Cn(e2) {
  for (; e2 != null; e2 = e2.nextSibling) {
    var t = e2.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e2.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e2;
}
function ad(e2) {
  e2 = e2.previousSibling;
  for (var t = 0; e2; ) {
    if (e2.nodeType === 8) {
      var n = e2.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e2;
        t--;
      } else n === "/$" && t++;
    }
    e2 = e2.previousSibling;
  }
  return null;
}
var Gr = Math.random().toString(36).slice(2), zt = "__reactFiber$" + Gr, Bo = "__reactProps$" + Gr, rn = "__reactContainer$" + Gr, Qa = "__reactEvents$" + Gr, KS = "__reactListeners$" + Gr, YS = "__reactHandles$" + Gr;
function Un(e2) {
  var t = e2[zt];
  if (t) return t;
  for (var n = e2.parentNode; n; ) {
    if (t = n[rn] || n[zt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e2 = ad(e2); e2 !== null; ) {
        if (n = e2[zt]) return n;
        e2 = ad(e2);
      }
      return t;
    }
    e2 = n, n = e2.parentNode;
  }
  return null;
}
function oi(e2) {
  return e2 = e2[zt] || e2[rn], !e2 || e2.tag !== 5 && e2.tag !== 6 && e2.tag !== 13 && e2.tag !== 3 ? null : e2;
}
function wr(e2) {
  if (e2.tag === 5 || e2.tag === 6) return e2.stateNode;
  throw Error(N(33));
}
function ds(e2) {
  return e2[Bo] || null;
}
var Za = [], xr = -1;
function Dn(e2) {
  return { current: e2 };
}
function ee(e2) {
  0 > xr || (e2.current = Za[xr], Za[xr] = null, xr--);
}
function q(e2, t) {
  xr++, Za[xr] = e2.current, e2.current = t;
}
var Rn = {}, Oe = Dn(Rn), Ve = Dn(false), Qn = Rn;
function zr(e2, t) {
  var n = e2.type.contextTypes;
  if (!n) return Rn;
  var r = e2.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e2 = e2.stateNode, e2.__reactInternalMemoizedUnmaskedChildContext = t, e2.__reactInternalMemoizedMaskedChildContext = o), o;
}
function We(e2) {
  return e2 = e2.childContextTypes, e2 != null;
}
function cl() {
  ee(Ve), ee(Oe);
}
function ud(e2, t, n) {
  if (Oe.current !== Rn) throw Error(N(168));
  q(Oe, t), q(Ve, n);
}
function Xh(e2, t, n) {
  var r = e2.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, N1(e2) || "Unknown", o));
  return le({}, n, r);
}
function fl(e2) {
  return e2 = (e2 = e2.stateNode) && e2.__reactInternalMemoizedMergedChildContext || Rn, Qn = Oe.current, q(Oe, e2), q(Ve, Ve.current), true;
}
function cd(e2, t, n) {
  var r = e2.stateNode;
  if (!r) throw Error(N(169));
  n ? (e2 = Xh(e2, t, Qn), r.__reactInternalMemoizedMergedChildContext = e2, ee(Ve), ee(Oe), q(Oe, e2)) : ee(Ve), q(Ve, n);
}
var Zt = null, ps = false, ta = false;
function Qh(e2) {
  Zt === null ? Zt = [e2] : Zt.push(e2);
}
function GS(e2) {
  ps = true, Qh(e2);
}
function In() {
  if (!ta && Zt !== null) {
    ta = true;
    var e2 = 0, t = Y;
    try {
      var n = Zt;
      for (Y = 1; e2 < n.length; e2++) {
        var r = n[e2];
        do
          r = r(true);
        while (r !== null);
      }
      Zt = null, ps = false;
    } catch (o) {
      throw Zt !== null && (Zt = Zt.slice(e2 + 1)), xh(uc, In), o;
    } finally {
      Y = t, ta = false;
    }
  }
  return null;
}
var Cr = [], kr = 0, dl = null, pl = 0, ht = [], mt = 0, Zn = null, qt = 1, Jt = "";
function zn(e2, t) {
  Cr[kr++] = pl, Cr[kr++] = dl, dl = e2, pl = t;
}
function Zh(e2, t, n) {
  ht[mt++] = qt, ht[mt++] = Jt, ht[mt++] = Zn, Zn = e2;
  var r = qt;
  e2 = Jt;
  var o = 32 - _t(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - _t(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, qt = 1 << 32 - _t(t) + o | n << o | r, Jt = i + e2;
  } else qt = 1 << i | n << o | r, Jt = e2;
}
function vc(e2) {
  e2.return !== null && (zn(e2, 1), Zh(e2, 1, 0));
}
function Sc(e2) {
  for (; e2 === dl; ) dl = Cr[--kr], Cr[kr] = null, pl = Cr[--kr], Cr[kr] = null;
  for (; e2 === Zn; ) Zn = ht[--mt], ht[mt] = null, Jt = ht[--mt], ht[mt] = null, qt = ht[--mt], ht[mt] = null;
}
var nt = null, Je = null, re = false, Pt = null;
function qh(e2, t) {
  var n = gt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e2, t = e2.deletions, t === null ? (e2.deletions = [n], e2.flags |= 16) : t.push(n);
}
function fd(e2, t) {
  switch (e2.tag) {
    case 5:
      var n = e2.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e2.stateNode = t, nt = e2, Je = Cn(t.firstChild), true) : false;
    case 6:
      return t = e2.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e2.stateNode = t, nt = e2, Je = null, true) : false;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zn !== null ? { id: qt, overflow: Jt } : null, e2.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = gt(18, null, null, 0), n.stateNode = t, n.return = e2, e2.child = n, nt = e2, Je = null, true) : false;
    default:
      return false;
  }
}
function qa(e2) {
  return (e2.mode & 1) !== 0 && (e2.flags & 128) === 0;
}
function Ja(e2) {
  if (re) {
    var t = Je;
    if (t) {
      var n = t;
      if (!fd(e2, t)) {
        if (qa(e2)) throw Error(N(418));
        t = Cn(n.nextSibling);
        var r = nt;
        t && fd(e2, t) ? qh(r, n) : (e2.flags = e2.flags & -4097 | 2, re = false, nt = e2);
      }
    } else {
      if (qa(e2)) throw Error(N(418));
      e2.flags = e2.flags & -4097 | 2, re = false, nt = e2;
    }
  }
}
function dd(e2) {
  for (e2 = e2.return; e2 !== null && e2.tag !== 5 && e2.tag !== 3 && e2.tag !== 13; ) e2 = e2.return;
  nt = e2;
}
function Pi(e2) {
  if (e2 !== nt) return false;
  if (!re) return dd(e2), re = true, false;
  var t;
  if ((t = e2.tag !== 3) && !(t = e2.tag !== 5) && (t = e2.type, t = t !== "head" && t !== "body" && !Ga(e2.type, e2.memoizedProps)), t && (t = Je)) {
    if (qa(e2)) throw Jh(), Error(N(418));
    for (; t; ) qh(e2, t), t = Cn(t.nextSibling);
  }
  if (dd(e2), e2.tag === 13) {
    if (e2 = e2.memoizedState, e2 = e2 !== null ? e2.dehydrated : null, !e2) throw Error(N(317));
    e: {
      for (e2 = e2.nextSibling, t = 0; e2; ) {
        if (e2.nodeType === 8) {
          var n = e2.data;
          if (n === "/$") {
            if (t === 0) {
              Je = Cn(e2.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e2 = e2.nextSibling;
      }
      Je = null;
    }
  } else Je = nt ? Cn(e2.stateNode.nextSibling) : null;
  return true;
}
function Jh() {
  for (var e2 = Je; e2; ) e2 = Cn(e2.nextSibling);
}
function jr() {
  Je = nt = null, re = false;
}
function wc(e2) {
  Pt === null ? Pt = [e2] : Pt.push(e2);
}
var XS = sn.ReactCurrentBatchConfig;
function ro(e2, t, n) {
  if (e2 = n.ref, e2 !== null && typeof e2 != "function" && typeof e2 != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e2));
      var o = r, i = "" + e2;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e2 != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e2));
  }
  return e2;
}
function _i(e2, t) {
  throw e2 = Object.prototype.toString.call(t), Error(N(31, e2 === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e2));
}
function pd(e2) {
  var t = e2._init;
  return t(e2._payload);
}
function em(e2) {
  function t(p, f) {
    if (e2) {
      var g = p.deletions;
      g === null ? (p.deletions = [f], p.flags |= 16) : g.push(f);
    }
  }
  function n(p, f) {
    if (!e2) return null;
    for (; f !== null; ) t(p, f), f = f.sibling;
    return null;
  }
  function r(p, f) {
    for (p = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? p.set(f.key, f) : p.set(f.index, f), f = f.sibling;
    return p;
  }
  function o(p, f) {
    return p = Pn(p, f), p.index = 0, p.sibling = null, p;
  }
  function i(p, f, g) {
    return p.index = g, e2 ? (g = p.alternate, g !== null ? (g = g.index, g < f ? (p.flags |= 2, f) : g) : (p.flags |= 2, f)) : (p.flags |= 1048576, f);
  }
  function l(p) {
    return e2 && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, f, g, y) {
    return f === null || f.tag !== 6 ? (f = aa(g, p.mode, y), f.return = p, f) : (f = o(f, g), f.return = p, f);
  }
  function a(p, f, g, y) {
    var x = g.type;
    return x === gr ? h(p, f, g.props.children, y, g.key) : f !== null && (f.elementType === x || typeof x == "object" && x !== null && x.$$typeof === pn && pd(x) === f.type) ? (y = o(f, g.props), y.ref = ro(p, f, g), y.return = p, y) : (y = Qi(g.type, g.key, g.props, null, p.mode, y), y.ref = ro(p, f, g), y.return = p, y);
  }
  function u(p, f, g, y) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== g.containerInfo || f.stateNode.implementation !== g.implementation ? (f = ua(g, p.mode, y), f.return = p, f) : (f = o(f, g.children || []), f.return = p, f);
  }
  function h(p, f, g, y, x) {
    return f === null || f.tag !== 7 ? (f = Yn(g, p.mode, y, x), f.return = p, f) : (f = o(f, g), f.return = p, f);
  }
  function d(p, f, g) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = aa("" + f, p.mode, g), f.return = p, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case gi:
          return g = Qi(f.type, f.key, f.props, null, p.mode, g), g.ref = ro(p, null, f), g.return = p, g;
        case mr:
          return f = ua(f, p.mode, g), f.return = p, f;
        case pn:
          var y = f._init;
          return d(p, y(f._payload), g);
      }
      if (co(f) || qr(f)) return f = Yn(f, p.mode, g, null), f.return = p, f;
      _i(p, f);
    }
    return null;
  }
  function m(p, f, g, y) {
    var x = f !== null ? f.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return x !== null ? null : s(p, f, "" + g, y);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case gi:
          return g.key === x ? a(p, f, g, y) : null;
        case mr:
          return g.key === x ? u(p, f, g, y) : null;
        case pn:
          return x = g._init, m(p, f, x(g._payload), y);
      }
      if (co(g) || qr(g)) return x !== null ? null : h(p, f, g, y, null);
      _i(p, g);
    }
    return null;
  }
  function v(p, f, g, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return p = p.get(g) || null, s(f, p, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case gi:
          return p = p.get(y.key === null ? g : y.key) || null, a(f, p, y, x);
        case mr:
          return p = p.get(y.key === null ? g : y.key) || null, u(f, p, y, x);
        case pn:
          var C = y._init;
          return v(p, f, g, C(y._payload), x);
      }
      if (co(y) || qr(y)) return p = p.get(g) || null, h(f, p, y, x, null);
      _i(f, y);
    }
    return null;
  }
  function S(p, f, g, y) {
    for (var x = null, C = null, P = f, k = f = 0, R = null; P !== null && k < g.length; k++) {
      P.index > k ? (R = P, P = null) : R = P.sibling;
      var c = m(p, P, g[k], y);
      if (c === null) {
        P === null && (P = R);
        break;
      }
      e2 && P && c.alternate === null && t(p, P), f = i(c, f, k), C === null ? x = c : C.sibling = c, C = c, P = R;
    }
    if (k === g.length) return n(p, P), re && zn(p, k), x;
    if (P === null) {
      for (; k < g.length; k++) P = d(p, g[k], y), P !== null && (f = i(P, f, k), C === null ? x = P : C.sibling = P, C = P);
      return re && zn(p, k), x;
    }
    for (P = r(p, P); k < g.length; k++) R = v(P, p, k, g[k], y), R !== null && (e2 && R.alternate !== null && P.delete(R.key === null ? k : R.key), f = i(R, f, k), C === null ? x = R : C.sibling = R, C = R);
    return e2 && P.forEach(function(M) {
      return t(p, M);
    }), re && zn(p, k), x;
  }
  function w(p, f, g, y) {
    var x = qr(g);
    if (typeof x != "function") throw Error(N(150));
    if (g = x.call(g), g == null) throw Error(N(151));
    for (var C = x = null, P = f, k = f = 0, R = null, c = g.next(); P !== null && !c.done; k++, c = g.next()) {
      P.index > k ? (R = P, P = null) : R = P.sibling;
      var M = m(p, P, c.value, y);
      if (M === null) {
        P === null && (P = R);
        break;
      }
      e2 && P && M.alternate === null && t(p, P), f = i(M, f, k), C === null ? x = M : C.sibling = M, C = M, P = R;
    }
    if (c.done) return n(p, P), re && zn(p, k), x;
    if (P === null) {
      for (; !c.done; k++, c = g.next()) c = d(p, c.value, y), c !== null && (f = i(c, f, k), C === null ? x = c : C.sibling = c, C = c);
      return re && zn(p, k), x;
    }
    for (P = r(p, P); !c.done; k++, c = g.next()) c = v(P, p, k, c.value, y), c !== null && (e2 && c.alternate !== null && P.delete(c.key === null ? k : c.key), f = i(c, f, k), C === null ? x = c : C.sibling = c, C = c);
    return e2 && P.forEach(function(I) {
      return t(p, I);
    }), re && zn(p, k), x;
  }
  function _(p, f, g, y) {
    if (typeof g == "object" && g !== null && g.type === gr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case gi:
          e: {
            for (var x = g.key, C = f; C !== null; ) {
              if (C.key === x) {
                if (x = g.type, x === gr) {
                  if (C.tag === 7) {
                    n(p, C.sibling), f = o(C, g.props.children), f.return = p, p = f;
                    break e;
                  }
                } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === pn && pd(x) === C.type) {
                  n(p, C.sibling), f = o(C, g.props), f.ref = ro(p, C, g), f.return = p, p = f;
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            g.type === gr ? (f = Yn(g.props.children, p.mode, y, g.key), f.return = p, p = f) : (y = Qi(g.type, g.key, g.props, null, p.mode, y), y.ref = ro(p, f, g), y.return = p, p = y);
          }
          return l(p);
        case mr:
          e: {
            for (C = g.key; f !== null; ) {
              if (f.key === C) if (f.tag === 4 && f.stateNode.containerInfo === g.containerInfo && f.stateNode.implementation === g.implementation) {
                n(p, f.sibling), f = o(f, g.children || []), f.return = p, p = f;
                break e;
              } else {
                n(p, f);
                break;
              }
              else t(p, f);
              f = f.sibling;
            }
            f = ua(g, p.mode, y), f.return = p, p = f;
          }
          return l(p);
        case pn:
          return C = g._init, _(p, f, C(g._payload), y);
      }
      if (co(g)) return S(p, f, g, y);
      if (qr(g)) return w(p, f, g, y);
      _i(p, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, f !== null && f.tag === 6 ? (n(p, f.sibling), f = o(f, g), f.return = p, p = f) : (n(p, f), f = aa(g, p.mode, y), f.return = p, p = f), l(p)) : n(p, f);
  }
  return _;
}
var Fr = em(true), tm = em(false), hl = Dn(null), ml = null, Er = null, xc = null;
function Cc() {
  xc = Er = ml = null;
}
function kc(e2) {
  var t = hl.current;
  ee(hl), e2._currentValue = t;
}
function eu(e2, t, n) {
  for (; e2 !== null; ) {
    var r = e2.alternate;
    if ((e2.childLanes & t) !== t ? (e2.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e2 === n) break;
    e2 = e2.return;
  }
}
function Dr(e2, t) {
  ml = e2, xc = Er = null, e2 = e2.dependencies, e2 !== null && e2.firstContext !== null && (e2.lanes & t && (Ue = true), e2.firstContext = null);
}
function vt(e2) {
  var t = e2._currentValue;
  if (xc !== e2) if (e2 = { context: e2, memoizedValue: t, next: null }, Er === null) {
    if (ml === null) throw Error(N(308));
    Er = e2, ml.dependencies = { lanes: 0, firstContext: e2 };
  } else Er = Er.next = e2;
  return t;
}
var Vn = null;
function Ec(e2) {
  Vn === null ? Vn = [e2] : Vn.push(e2);
}
function nm(e2, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Ec(t)) : (n.next = o.next, o.next = n), t.interleaved = n, on(e2, r);
}
function on(e2, t) {
  e2.lanes |= t;
  var n = e2.alternate;
  for (n !== null && (n.lanes |= t), n = e2, e2 = e2.return; e2 !== null; ) e2.childLanes |= t, n = e2.alternate, n !== null && (n.childLanes |= t), n = e2, e2 = e2.return;
  return n.tag === 3 ? n.stateNode : null;
}
var hn = false;
function Tc(e2) {
  e2.updateQueue = { baseState: e2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function rm(e2, t) {
  e2 = e2.updateQueue, t.updateQueue === e2 && (t.updateQueue = { baseState: e2.baseState, firstBaseUpdate: e2.firstBaseUpdate, lastBaseUpdate: e2.lastBaseUpdate, shared: e2.shared, effects: e2.effects });
}
function en(e2, t) {
  return { eventTime: e2, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function kn(e2, t, n) {
  var r = e2.updateQueue;
  if (r === null) return null;
  if (r = r.shared, U & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, on(e2, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Ec(r)) : (t.next = o.next, o.next = t), r.interleaved = t, on(e2, n);
}
function Wi(e2, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e2.pendingLanes, n |= r, t.lanes = n, cc(e2, n);
  }
}
function hd(e2, t) {
  var n = e2.updateQueue, r = e2.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e2.updateQueue = n;
    return;
  }
  e2 = n.lastBaseUpdate, e2 === null ? n.firstBaseUpdate = t : e2.next = t, n.lastBaseUpdate = t;
}
function gl(e2, t, n, r) {
  var o = e2.updateQueue;
  hn = false;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, l === null ? i = u : l.next = u, l = a;
    var h = e2.alternate;
    h !== null && (h = h.updateQueue, s = h.lastBaseUpdate, s !== l && (s === null ? h.firstBaseUpdate = u : s.next = u, h.lastBaseUpdate = a));
  }
  if (i !== null) {
    var d = o.baseState;
    l = 0, h = u = a = null, s = i;
    do {
      var m = s.lane, v = s.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = { eventTime: v, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
        e: {
          var S = e2, w = s;
          switch (m = t, v = n, w.tag) {
            case 1:
              if (S = w.payload, typeof S == "function") {
                d = S.call(v, d, m);
                break e;
              }
              d = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = w.payload, m = typeof S == "function" ? S.call(v, d, m) : S, m == null) break e;
              d = le({}, d, m);
              break e;
            case 2:
              hn = true;
          }
        }
        s.callback !== null && s.lane !== 0 && (e2.flags |= 64, m = o.effects, m === null ? o.effects = [s] : m.push(s));
      } else v = { eventTime: v, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, h === null ? (u = h = v, a = d) : h = h.next = v, l |= m;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        m = s, s = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (true);
    if (h === null && (a = d), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = h, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Jn |= l, e2.lanes = l, e2.memoizedState = d;
  }
}
function md(e2, t, n) {
  if (e2 = t.effects, t.effects = null, e2 !== null) for (t = 0; t < e2.length; t++) {
    var r = e2[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(N(191, o));
      o.call(r);
    }
  }
}
var ii = {}, Vt = Dn(ii), Uo = Dn(ii), Vo = Dn(ii);
function Wn(e2) {
  if (e2 === ii) throw Error(N(174));
  return e2;
}
function Pc(e2, t) {
  switch (q(Vo, t), q(Uo, e2), q(Vt, ii), e2 = t.nodeType, e2) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Da(null, "");
      break;
    default:
      e2 = e2 === 8 ? t.parentNode : t, t = e2.namespaceURI || null, e2 = e2.tagName, t = Da(t, e2);
  }
  ee(Vt), q(Vt, t);
}
function Br() {
  ee(Vt), ee(Uo), ee(Vo);
}
function om(e2) {
  Wn(Vo.current);
  var t = Wn(Vt.current), n = Da(t, e2.type);
  t !== n && (q(Uo, e2), q(Vt, n));
}
function _c(e2) {
  Uo.current === e2 && (ee(Vt), ee(Uo));
}
var oe = Dn(0);
function yl(e2) {
  for (var t = e2; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e2) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e2) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var na = [];
function Mc() {
  for (var e2 = 0; e2 < na.length; e2++) na[e2]._workInProgressVersionPrimary = null;
  na.length = 0;
}
var Hi = sn.ReactCurrentDispatcher, ra = sn.ReactCurrentBatchConfig, qn = 0, ie = null, ge = null, Se = null, vl = false, xo = false, Wo = 0, QS = 0;
function _e() {
  throw Error(N(321));
}
function $c(e2, t) {
  if (t === null) return false;
  for (var n = 0; n < t.length && n < e2.length; n++) if (!$t(e2[n], t[n])) return false;
  return true;
}
function Rc(e2, t, n, r, o, i) {
  if (qn = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Hi.current = e2 === null || e2.memoizedState === null ? ew : tw, e2 = n(r, o), xo) {
    i = 0;
    do {
      if (xo = false, Wo = 0, 25 <= i) throw Error(N(301));
      i += 1, Se = ge = null, t.updateQueue = null, Hi.current = nw, e2 = n(r, o);
    } while (xo);
  }
  if (Hi.current = Sl, t = ge !== null && ge.next !== null, qn = 0, Se = ge = ie = null, vl = false, t) throw Error(N(300));
  return e2;
}
function Nc() {
  var e2 = Wo !== 0;
  return Wo = 0, e2;
}
function Dt() {
  var e2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Se === null ? ie.memoizedState = Se = e2 : Se = Se.next = e2, Se;
}
function St() {
  if (ge === null) {
    var e2 = ie.alternate;
    e2 = e2 !== null ? e2.memoizedState : null;
  } else e2 = ge.next;
  var t = Se === null ? ie.memoizedState : Se.next;
  if (t !== null) Se = t, ge = e2;
  else {
    if (e2 === null) throw Error(N(310));
    ge = e2, e2 = { memoizedState: ge.memoizedState, baseState: ge.baseState, baseQueue: ge.baseQueue, queue: ge.queue, next: null }, Se === null ? ie.memoizedState = Se = e2 : Se = Se.next = e2;
  }
  return Se;
}
function Ho(e2, t) {
  return typeof t == "function" ? t(e2) : t;
}
function oa(e2) {
  var t = St(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e2;
  var r = ge, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = l = null, a = null, u = i;
    do {
      var h = u.lane;
      if ((qn & h) === h) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e2(r, u.action);
      else {
        var d = { lane: h, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? (s = a = d, l = r) : a = a.next = d, ie.lanes |= h, Jn |= h;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? l = r : a.next = s, $t(r, t.memoizedState) || (Ue = true), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e2 = n.interleaved, e2 !== null) {
    o = e2;
    do
      i = o.lane, ie.lanes |= i, Jn |= i, o = o.next;
    while (o !== e2);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ia(e2) {
  var t = St(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e2;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e2(i, l.action), l = l.next;
    while (l !== o);
    $t(i, t.memoizedState) || (Ue = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function im() {
}
function lm(e2, t) {
  var n = ie, r = St(), o = t(), i = !$t(r.memoizedState, o);
  if (i && (r.memoizedState = o, Ue = true), r = r.queue, Oc(um.bind(null, n, r, e2), [e2]), r.getSnapshot !== t || i || Se !== null && Se.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ko(9, am.bind(null, n, r, o, t), void 0, null), xe === null) throw Error(N(349));
    qn & 30 || sm(n, t, o);
  }
  return o;
}
function sm(e2, t, n) {
  e2.flags |= 16384, e2 = { getSnapshot: t, value: n }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.stores = [e2]) : (n = t.stores, n === null ? t.stores = [e2] : n.push(e2));
}
function am(e2, t, n, r) {
  t.value = n, t.getSnapshot = r, cm(t) && fm(e2);
}
function um(e2, t, n) {
  return n(function() {
    cm(t) && fm(e2);
  });
}
function cm(e2) {
  var t = e2.getSnapshot;
  e2 = e2.value;
  try {
    var n = t();
    return !$t(e2, n);
  } catch {
    return true;
  }
}
function fm(e2) {
  var t = on(e2, 1);
  t !== null && Mt(t, e2, 1, -1);
}
function gd(e2) {
  var t = Dt();
  return typeof e2 == "function" && (e2 = e2()), t.memoizedState = t.baseState = e2, e2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ho, lastRenderedState: e2 }, t.queue = e2, e2 = e2.dispatch = JS.bind(null, ie, e2), [t.memoizedState, e2];
}
function Ko(e2, t, n, r) {
  return e2 = { tag: e2, create: t, destroy: n, deps: r, next: null }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.lastEffect = e2.next = e2) : (n = t.lastEffect, n === null ? t.lastEffect = e2.next = e2 : (r = n.next, n.next = e2, e2.next = r, t.lastEffect = e2)), e2;
}
function dm() {
  return St().memoizedState;
}
function Ki(e2, t, n, r) {
  var o = Dt();
  ie.flags |= e2, o.memoizedState = Ko(1 | t, n, void 0, r === void 0 ? null : r);
}
function hs(e2, t, n, r) {
  var o = St();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ge !== null) {
    var l = ge.memoizedState;
    if (i = l.destroy, r !== null && $c(r, l.deps)) {
      o.memoizedState = Ko(t, n, i, r);
      return;
    }
  }
  ie.flags |= e2, o.memoizedState = Ko(1 | t, n, i, r);
}
function yd(e2, t) {
  return Ki(8390656, 8, e2, t);
}
function Oc(e2, t) {
  return hs(2048, 8, e2, t);
}
function pm(e2, t) {
  return hs(4, 2, e2, t);
}
function hm(e2, t) {
  return hs(4, 4, e2, t);
}
function mm(e2, t) {
  if (typeof t == "function") return e2 = e2(), t(e2), function() {
    t(null);
  };
  if (t != null) return e2 = e2(), t.current = e2, function() {
    t.current = null;
  };
}
function gm(e2, t, n) {
  return n = n != null ? n.concat([e2]) : null, hs(4, 4, mm.bind(null, t, e2), n);
}
function bc() {
}
function ym(e2, t) {
  var n = St();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $c(t, r[1]) ? r[0] : (n.memoizedState = [e2, t], e2);
}
function vm(e2, t) {
  var n = St();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $c(t, r[1]) ? r[0] : (e2 = e2(), n.memoizedState = [e2, t], e2);
}
function Sm(e2, t, n) {
  return qn & 21 ? ($t(n, t) || (n = Eh(), ie.lanes |= n, Jn |= n, e2.baseState = true), t) : (e2.baseState && (e2.baseState = false, Ue = true), e2.memoizedState = n);
}
function ZS(e2, t) {
  var n = Y;
  Y = n !== 0 && 4 > n ? n : 4, e2(true);
  var r = ra.transition;
  ra.transition = {};
  try {
    e2(false), t();
  } finally {
    Y = n, ra.transition = r;
  }
}
function wm() {
  return St().memoizedState;
}
function qS(e2, t, n) {
  var r = Tn(e2);
  if (n = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null }, xm(e2)) Cm(t, n);
  else if (n = nm(e2, t, n, r), n !== null) {
    var o = Ae();
    Mt(n, e2, r, o), km(n, t, r);
  }
}
function JS(e2, t, n) {
  var r = Tn(e2), o = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null };
  if (xm(e2)) Cm(t, o);
  else {
    var i = e2.alternate;
    if (e2.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, s = i(l, n);
      if (o.hasEagerState = true, o.eagerState = s, $t(s, l)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Ec(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = nm(e2, t, o, r), n !== null && (o = Ae(), Mt(n, e2, r, o), km(n, t, r));
  }
}
function xm(e2) {
  var t = e2.alternate;
  return e2 === ie || t !== null && t === ie;
}
function Cm(e2, t) {
  xo = vl = true;
  var n = e2.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e2.pending = t;
}
function km(e2, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e2.pendingLanes, n |= r, t.lanes = n, cc(e2, n);
  }
}
var Sl = { readContext: vt, useCallback: _e, useContext: _e, useEffect: _e, useImperativeHandle: _e, useInsertionEffect: _e, useLayoutEffect: _e, useMemo: _e, useReducer: _e, useRef: _e, useState: _e, useDebugValue: _e, useDeferredValue: _e, useTransition: _e, useMutableSource: _e, useSyncExternalStore: _e, useId: _e, unstable_isNewReconciler: false }, ew = { readContext: vt, useCallback: function(e2, t) {
  return Dt().memoizedState = [e2, t === void 0 ? null : t], e2;
}, useContext: vt, useEffect: yd, useImperativeHandle: function(e2, t, n) {
  return n = n != null ? n.concat([e2]) : null, Ki(4194308, 4, mm.bind(null, t, e2), n);
}, useLayoutEffect: function(e2, t) {
  return Ki(4194308, 4, e2, t);
}, useInsertionEffect: function(e2, t) {
  return Ki(4, 2, e2, t);
}, useMemo: function(e2, t) {
  var n = Dt();
  return t = t === void 0 ? null : t, e2 = e2(), n.memoizedState = [e2, t], e2;
}, useReducer: function(e2, t, n) {
  var r = Dt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e2, lastRenderedState: t }, r.queue = e2, e2 = e2.dispatch = qS.bind(null, ie, e2), [r.memoizedState, e2];
}, useRef: function(e2) {
  var t = Dt();
  return e2 = { current: e2 }, t.memoizedState = e2;
}, useState: gd, useDebugValue: bc, useDeferredValue: function(e2) {
  return Dt().memoizedState = e2;
}, useTransition: function() {
  var e2 = gd(false), t = e2[0];
  return e2 = ZS.bind(null, e2[1]), Dt().memoizedState = e2, [t, e2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e2, t, n) {
  var r = ie, o = Dt();
  if (re) {
    if (n === void 0) throw Error(N(407));
    n = n();
  } else {
    if (n = t(), xe === null) throw Error(N(349));
    qn & 30 || sm(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, yd(um.bind(null, r, i, e2), [e2]), r.flags |= 2048, Ko(9, am.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e2 = Dt(), t = xe.identifierPrefix;
  if (re) {
    var n = Jt, r = qt;
    n = (r & ~(1 << 32 - _t(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Wo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = QS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e2.memoizedState = t;
}, unstable_isNewReconciler: false }, tw = { readContext: vt, useCallback: ym, useContext: vt, useEffect: Oc, useImperativeHandle: gm, useInsertionEffect: pm, useLayoutEffect: hm, useMemo: vm, useReducer: oa, useRef: dm, useState: function() {
  return oa(Ho);
}, useDebugValue: bc, useDeferredValue: function(e2) {
  var t = St();
  return Sm(t, ge.memoizedState, e2);
}, useTransition: function() {
  var e2 = oa(Ho)[0], t = St().memoizedState;
  return [e2, t];
}, useMutableSource: im, useSyncExternalStore: lm, useId: wm, unstable_isNewReconciler: false }, nw = { readContext: vt, useCallback: ym, useContext: vt, useEffect: Oc, useImperativeHandle: gm, useInsertionEffect: pm, useLayoutEffect: hm, useMemo: vm, useReducer: ia, useRef: dm, useState: function() {
  return ia(Ho);
}, useDebugValue: bc, useDeferredValue: function(e2) {
  var t = St();
  return ge === null ? t.memoizedState = e2 : Sm(t, ge.memoizedState, e2);
}, useTransition: function() {
  var e2 = ia(Ho)[0], t = St().memoizedState;
  return [e2, t];
}, useMutableSource: im, useSyncExternalStore: lm, useId: wm, unstable_isNewReconciler: false };
function Et(e2, t) {
  if (e2 && e2.defaultProps) {
    t = le({}, t), e2 = e2.defaultProps;
    for (var n in e2) t[n] === void 0 && (t[n] = e2[n]);
    return t;
  }
  return t;
}
function tu(e2, t, n, r) {
  t = e2.memoizedState, n = n(r, t), n = n == null ? t : le({}, t, n), e2.memoizedState = n, e2.lanes === 0 && (e2.updateQueue.baseState = n);
}
var ms = { isMounted: function(e2) {
  return (e2 = e2._reactInternals) ? or(e2) === e2 : false;
}, enqueueSetState: function(e2, t, n) {
  e2 = e2._reactInternals;
  var r = Ae(), o = Tn(e2), i = en(r, o);
  i.payload = t, n != null && (i.callback = n), t = kn(e2, i, o), t !== null && (Mt(t, e2, o, r), Wi(t, e2, o));
}, enqueueReplaceState: function(e2, t, n) {
  e2 = e2._reactInternals;
  var r = Ae(), o = Tn(e2), i = en(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = kn(e2, i, o), t !== null && (Mt(t, e2, o, r), Wi(t, e2, o));
}, enqueueForceUpdate: function(e2, t) {
  e2 = e2._reactInternals;
  var n = Ae(), r = Tn(e2), o = en(n, r);
  o.tag = 2, t != null && (o.callback = t), t = kn(e2, o, r), t !== null && (Mt(t, e2, r, n), Wi(t, e2, r));
} };
function vd(e2, t, n, r, o, i, l) {
  return e2 = e2.stateNode, typeof e2.shouldComponentUpdate == "function" ? e2.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !zo(n, r) || !zo(o, i) : true;
}
function Em(e2, t, n) {
  var r = false, o = Rn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = vt(i) : (o = We(t) ? Qn : Oe.current, r = t.contextTypes, i = (r = r != null) ? zr(e2, o) : Rn), t = new t(n, i), e2.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ms, e2.stateNode = t, t._reactInternals = e2, r && (e2 = e2.stateNode, e2.__reactInternalMemoizedUnmaskedChildContext = o, e2.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Sd(e2, t, n, r) {
  e2 = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e2 && ms.enqueueReplaceState(t, t.state, null);
}
function nu(e2, t, n, r) {
  var o = e2.stateNode;
  o.props = n, o.state = e2.memoizedState, o.refs = {}, Tc(e2);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = vt(i) : (i = We(t) ? Qn : Oe.current, o.context = zr(e2, i)), o.state = e2.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (tu(e2, t, i, n), o.state = e2.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ms.enqueueReplaceState(o, o.state, null), gl(e2, n, o, r), o.state = e2.memoizedState), typeof o.componentDidMount == "function" && (e2.flags |= 4194308);
}
function Ur(e2, t) {
  try {
    var n = "", r = t;
    do
      n += R1(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e2, source: t, stack: o, digest: null };
}
function la(e2, t, n) {
  return { value: e2, source: null, stack: n ?? null, digest: t ?? null };
}
function ru(e2, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var rw = typeof WeakMap == "function" ? WeakMap : Map;
function Tm(e2, t, n) {
  n = en(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    xl || (xl = true, pu = r), ru(e2, t);
  }, n;
}
function Pm(e2, t, n) {
  n = en(-1, n), n.tag = 3;
  var r = e2.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      ru(e2, t);
    };
  }
  var i = e2.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    ru(e2, t), typeof r != "function" && (En === null ? En = /* @__PURE__ */ new Set([this]) : En.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function wd(e2, t, n) {
  var r = e2.pingCache;
  if (r === null) {
    r = e2.pingCache = new rw();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e2 = yw.bind(null, e2, t, n), t.then(e2, e2));
}
function xd(e2) {
  do {
    var t;
    if ((t = e2.tag === 13) && (t = e2.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e2;
    e2 = e2.return;
  } while (e2 !== null);
  return null;
}
function Cd(e2, t, n, r, o) {
  return e2.mode & 1 ? (e2.flags |= 65536, e2.lanes = o, e2) : (e2 === t ? e2.flags |= 65536 : (e2.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = en(-1, 1), t.tag = 2, kn(n, t, 1))), n.lanes |= 1), e2);
}
var ow = sn.ReactCurrentOwner, Ue = false;
function Le(e2, t, n, r) {
  t.child = e2 === null ? tm(t, null, n, r) : Fr(t, e2.child, n, r);
}
function kd(e2, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Dr(t, o), r = Rc(e2, t, n, r, i, o), n = Nc(), e2 !== null && !Ue ? (t.updateQueue = e2.updateQueue, t.flags &= -2053, e2.lanes &= ~o, ln(e2, t, o)) : (re && n && vc(t), t.flags |= 1, Le(e2, t, r, o), t.child);
}
function Ed(e2, t, n, r, o) {
  if (e2 === null) {
    var i = n.type;
    return typeof i == "function" && !Bc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, _m(e2, t, i, r, o)) : (e2 = Qi(n.type, null, r, t, t.mode, o), e2.ref = t.ref, e2.return = t, t.child = e2);
  }
  if (i = e2.child, !(e2.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : zo, n(l, r) && e2.ref === t.ref) return ln(e2, t, o);
  }
  return t.flags |= 1, e2 = Pn(i, r), e2.ref = t.ref, e2.return = t, t.child = e2;
}
function _m(e2, t, n, r, o) {
  if (e2 !== null) {
    var i = e2.memoizedProps;
    if (zo(i, r) && e2.ref === t.ref) if (Ue = false, t.pendingProps = r = i, (e2.lanes & o) !== 0) e2.flags & 131072 && (Ue = true);
    else return t.lanes = e2.lanes, ln(e2, t, o);
  }
  return ou(e2, t, n, r, o);
}
function Mm(e2, t, n) {
  var r = t.pendingProps, o = r.children, i = e2 !== null ? e2.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, q(Pr, Qe), Qe |= n;
  else {
    if (!(n & 1073741824)) return e2 = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e2, cachePool: null, transitions: null }, t.updateQueue = null, q(Pr, Qe), Qe |= e2, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, q(Pr, Qe), Qe |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, q(Pr, Qe), Qe |= r;
  return Le(e2, t, o, n), t.child;
}
function $m(e2, t) {
  var n = t.ref;
  (e2 === null && n !== null || e2 !== null && e2.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ou(e2, t, n, r, o) {
  var i = We(n) ? Qn : Oe.current;
  return i = zr(t, i), Dr(t, o), n = Rc(e2, t, n, r, i, o), r = Nc(), e2 !== null && !Ue ? (t.updateQueue = e2.updateQueue, t.flags &= -2053, e2.lanes &= ~o, ln(e2, t, o)) : (re && r && vc(t), t.flags |= 1, Le(e2, t, n, o), t.child);
}
function Td(e2, t, n, r, o) {
  if (We(n)) {
    var i = true;
    fl(t);
  } else i = false;
  if (Dr(t, o), t.stateNode === null) Yi(e2, t), Em(t, n, r), nu(t, n, r, o), r = true;
  else if (e2 === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = vt(u) : (u = We(n) ? Qn : Oe.current, u = zr(t, u));
    var h = n.getDerivedStateFromProps, d = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && Sd(t, l, r, u), hn = false;
    var m = t.memoizedState;
    l.state = m, gl(t, r, l, o), a = t.memoizedState, s !== r || m !== a || Ve.current || hn ? (typeof h == "function" && (tu(t, n, h, r), a = t.memoizedState), (s = hn || vd(t, n, s, r, m, a, u)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = false);
  } else {
    l = t.stateNode, rm(e2, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Et(t.type, s), l.props = u, d = t.pendingProps, m = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = vt(a) : (a = We(n) ? Qn : Oe.current, a = zr(t, a));
    var v = n.getDerivedStateFromProps;
    (h = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== d || m !== a) && Sd(t, l, r, a), hn = false, m = t.memoizedState, l.state = m, gl(t, r, l, o);
    var S = t.memoizedState;
    s !== d || m !== S || Ve.current || hn ? (typeof v == "function" && (tu(t, n, v, r), S = t.memoizedState), (u = hn || vd(t, n, u, r, m, S, a) || false) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, S, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, S, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e2.memoizedProps && m === e2.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e2.memoizedProps && m === e2.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), l.props = r, l.state = S, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e2.memoizedProps && m === e2.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e2.memoizedProps && m === e2.memoizedState || (t.flags |= 1024), r = false);
  }
  return iu(e2, t, n, r, i, o);
}
function iu(e2, t, n, r, o, i) {
  $m(e2, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && cd(t, n, false), ln(e2, t, i);
  r = t.stateNode, ow.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e2 !== null && l ? (t.child = Fr(t, e2.child, null, i), t.child = Fr(t, null, s, i)) : Le(e2, t, s, i), t.memoizedState = r.state, o && cd(t, n, true), t.child;
}
function Rm(e2) {
  var t = e2.stateNode;
  t.pendingContext ? ud(e2, t.pendingContext, t.pendingContext !== t.context) : t.context && ud(e2, t.context, false), Pc(e2, t.containerInfo);
}
function Pd(e2, t, n, r, o) {
  return jr(), wc(o), t.flags |= 256, Le(e2, t, n, r), t.child;
}
var lu = { dehydrated: null, treeContext: null, retryLane: 0 };
function su(e2) {
  return { baseLanes: e2, cachePool: null, transitions: null };
}
function Nm(e2, t, n) {
  var r = t.pendingProps, o = oe.current, i = false, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e2 !== null && e2.memoizedState === null ? false : (o & 2) !== 0), s ? (i = true, t.flags &= -129) : (e2 === null || e2.memoizedState !== null) && (o |= 1), q(oe, o & 1), e2 === null) return Ja(t), e2 = t.memoizedState, e2 !== null && (e2 = e2.dehydrated, e2 !== null) ? (t.mode & 1 ? e2.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e2 = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = vs(l, r, 0, null), e2 = Yn(e2, r, n, null), i.return = t, e2.return = t, i.sibling = e2, t.child = i, t.child.memoizedState = su(n), t.memoizedState = lu, e2) : Dc(t, l));
  if (o = e2.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return iw(e2, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e2.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Pn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Pn(s, i) : (i = Yn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e2.child.memoizedState, l = l === null ? su(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e2.childLanes & ~n, t.memoizedState = lu, r;
  }
  return i = e2.child, e2 = i.sibling, r = Pn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e2 !== null && (n = t.deletions, n === null ? (t.deletions = [e2], t.flags |= 16) : n.push(e2)), t.child = r, t.memoizedState = null, r;
}
function Dc(e2, t) {
  return t = vs({ mode: "visible", children: t }, e2.mode, 0, null), t.return = e2, e2.child = t;
}
function Mi(e2, t, n, r) {
  return r !== null && wc(r), Fr(t, e2.child, null, n), e2 = Dc(t, t.pendingProps.children), e2.flags |= 2, t.memoizedState = null, e2;
}
function iw(e2, t, n, r, o, i, l) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = la(Error(N(422))), Mi(e2, t, l, r)) : t.memoizedState !== null ? (t.child = e2.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = vs({ mode: "visible", children: r.children }, o, 0, null), i = Yn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Fr(t, e2.child, null, l), t.child.memoizedState = su(l), t.memoizedState = lu, i);
  if (!(t.mode & 1)) return Mi(e2, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(N(419)), r = la(i, r, void 0), Mi(e2, t, l, r);
  }
  if (s = (l & e2.childLanes) !== 0, Ue || s) {
    if (r = xe, r !== null) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, on(e2, o), Mt(r, e2, o, -1));
    }
    return Fc(), r = la(Error(N(421))), Mi(e2, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e2.child, t = vw.bind(null, e2), o._reactRetry = t, null) : (e2 = i.treeContext, Je = Cn(o.nextSibling), nt = t, re = true, Pt = null, e2 !== null && (ht[mt++] = qt, ht[mt++] = Jt, ht[mt++] = Zn, qt = e2.id, Jt = e2.overflow, Zn = t), t = Dc(t, r.children), t.flags |= 4096, t);
}
function _d(e2, t, n) {
  e2.lanes |= t;
  var r = e2.alternate;
  r !== null && (r.lanes |= t), eu(e2.return, t, n);
}
function sa(e2, t, n, r, o) {
  var i = e2.memoizedState;
  i === null ? e2.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Om(e2, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Le(e2, t, r.children, n), r = oe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e2 !== null && e2.flags & 128) e: for (e2 = t.child; e2 !== null; ) {
      if (e2.tag === 13) e2.memoizedState !== null && _d(e2, n, t);
      else if (e2.tag === 19) _d(e2, n, t);
      else if (e2.child !== null) {
        e2.child.return = e2, e2 = e2.child;
        continue;
      }
      if (e2 === t) break e;
      for (; e2.sibling === null; ) {
        if (e2.return === null || e2.return === t) break e;
        e2 = e2.return;
      }
      e2.sibling.return = e2.return, e2 = e2.sibling;
    }
    r &= 1;
  }
  if (q(oe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e2 = n.alternate, e2 !== null && yl(e2) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), sa(t, false, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e2 = o.alternate, e2 !== null && yl(e2) === null) {
          t.child = o;
          break;
        }
        e2 = o.sibling, o.sibling = n, n = o, o = e2;
      }
      sa(t, true, n, null, i);
      break;
    case "together":
      sa(t, false, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Yi(e2, t) {
  !(t.mode & 1) && e2 !== null && (e2.alternate = null, t.alternate = null, t.flags |= 2);
}
function ln(e2, t, n) {
  if (e2 !== null && (t.dependencies = e2.dependencies), Jn |= t.lanes, !(n & t.childLanes)) return null;
  if (e2 !== null && t.child !== e2.child) throw Error(N(153));
  if (t.child !== null) {
    for (e2 = t.child, n = Pn(e2, e2.pendingProps), t.child = n, n.return = t; e2.sibling !== null; ) e2 = e2.sibling, n = n.sibling = Pn(e2, e2.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function lw(e2, t, n) {
  switch (t.tag) {
    case 3:
      Rm(t), jr();
      break;
    case 5:
      om(t);
      break;
    case 1:
      We(t.type) && fl(t);
      break;
    case 4:
      Pc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      q(hl, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (q(oe, oe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Nm(e2, t, n) : (q(oe, oe.current & 1), e2 = ln(e2, t, n), e2 !== null ? e2.sibling : null);
      q(oe, oe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e2.flags & 128) {
        if (r) return Om(e2, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), q(oe, oe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Mm(e2, t, n);
  }
  return ln(e2, t, n);
}
var bm, au, Dm, Im;
bm = function(e2, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e2.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
au = function() {
};
Dm = function(e2, t, n, r) {
  var o = e2.memoizedProps;
  if (o !== r) {
    e2 = t.stateNode, Wn(Vt.current);
    var i = null;
    switch (n) {
      case "input":
        o = Ra(e2, o), r = Ra(e2, r), i = [];
        break;
      case "select":
        o = le({}, o, { value: void 0 }), r = le({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = ba(e2, o), r = ba(e2, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e2.onclick = ul);
    }
    Ia(n, r);
    var l;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var s = o[u];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (No.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = o == null ? void 0 : o[u], r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
        for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (i || (i = []), i.push(u, n)), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (No.hasOwnProperty(u) ? (a != null && u === "onScroll" && J("scroll", e2), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Im = function(e2, t, n, r) {
  n !== r && (t.flags |= 4);
};
function oo(e2, t) {
  if (!re) switch (e2.tailMode) {
    case "hidden":
      t = e2.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e2.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e2.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e2.tail === null ? e2.tail = null : e2.tail.sibling = null : r.sibling = null;
  }
}
function Me(e2) {
  var t = e2.alternate !== null && e2.alternate.child === e2.child, n = 0, r = 0;
  if (t) for (var o = e2.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e2, o = o.sibling;
  else for (o = e2.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e2, o = o.sibling;
  return e2.subtreeFlags |= r, e2.childLanes = n, t;
}
function sw(e2, t, n) {
  var r = t.pendingProps;
  switch (Sc(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Me(t), null;
    case 1:
      return We(t.type) && cl(), Me(t), null;
    case 3:
      return r = t.stateNode, Br(), ee(Ve), ee(Oe), Mc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e2 === null || e2.child === null) && (Pi(t) ? t.flags |= 4 : e2 === null || e2.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Pt !== null && (gu(Pt), Pt = null))), au(e2, t), Me(t), null;
    case 5:
      _c(t);
      var o = Wn(Vo.current);
      if (n = t.type, e2 !== null && t.stateNode != null) Dm(e2, t, n, r, o), e2.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Me(t), null;
        }
        if (e2 = Wn(Vt.current), Pi(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[zt] = t, r[Bo] = i, e2 = (t.mode & 1) !== 0, n) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < po.length; o++) J(po[o], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              Lf(r, i), J("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, J("invalid", r);
              break;
            case "textarea":
              zf(r, i), J("invalid", r);
          }
          Ia(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== true && Ti(r.textContent, s, e2), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== true && Ti(r.textContent, s, e2), o = ["children", "" + s]) : No.hasOwnProperty(l) && s != null && l === "onScroll" && J("scroll", r);
          }
          switch (n) {
            case "input":
              yi(r), Af(r, i, true);
              break;
            case "textarea":
              yi(r), jf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ul);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e2 === "http://www.w3.org/1999/xhtml" && (e2 = uh(n)), e2 === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e2 = l.createElement("div"), e2.innerHTML = "<script><\/script>", e2 = e2.removeChild(e2.firstChild)) : typeof r.is == "string" ? e2 = l.createElement(n, { is: r.is }) : (e2 = l.createElement(n), n === "select" && (l = e2, r.multiple ? l.multiple = true : r.size && (l.size = r.size))) : e2 = l.createElementNS(e2, n), e2[zt] = t, e2[Bo] = r, bm(e2, t, false, false), t.stateNode = e2;
          e: {
            switch (l = La(n, r), n) {
              case "dialog":
                J("cancel", e2), J("close", e2), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e2), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < po.length; o++) J(po[o], e2);
                o = r;
                break;
              case "source":
                J("error", e2), o = r;
                break;
              case "img":
              case "image":
              case "link":
                J("error", e2), J("load", e2), o = r;
                break;
              case "details":
                J("toggle", e2), o = r;
                break;
              case "input":
                Lf(e2, r), o = Ra(e2, r), J("invalid", e2);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e2._wrapperState = { wasMultiple: !!r.multiple }, o = le({}, r, { value: void 0 }), J("invalid", e2);
                break;
              case "textarea":
                zf(e2, r), o = ba(e2, r), J("invalid", e2);
                break;
              default:
                o = r;
            }
            Ia(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? dh(e2, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && ch(e2, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Oo(e2, a) : typeof a == "number" && Oo(e2, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (No.hasOwnProperty(i) ? a != null && i === "onScroll" && J("scroll", e2) : a != null && oc(e2, i, a, l));
            }
            switch (n) {
              case "input":
                yi(e2), Af(e2, r, false);
                break;
              case "textarea":
                yi(e2), jf(e2);
                break;
              case "option":
                r.value != null && e2.setAttribute("value", "" + $n(r.value));
                break;
              case "select":
                e2.multiple = !!r.multiple, i = r.value, i != null ? Rr(e2, !!r.multiple, i, false) : r.defaultValue != null && Rr(e2, !!r.multiple, r.defaultValue, true);
                break;
              default:
                typeof o.onClick == "function" && (e2.onclick = ul);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = true;
                break e;
              default:
                r = false;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Me(t), null;
    case 6:
      if (e2 && t.stateNode != null) Im(e2, t, e2.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (n = Wn(Vo.current), Wn(Vt.current), Pi(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[zt] = t, (i = r.nodeValue !== n) && (e2 = nt, e2 !== null)) switch (e2.tag) {
            case 3:
              Ti(r.nodeValue, n, (e2.mode & 1) !== 0);
              break;
            case 5:
              e2.memoizedProps.suppressHydrationWarning !== true && Ti(r.nodeValue, n, (e2.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[zt] = t, t.stateNode = r;
      }
      return Me(t), null;
    case 13:
      if (ee(oe), r = t.memoizedState, e2 === null || e2.memoizedState !== null && e2.memoizedState.dehydrated !== null) {
        if (re && Je !== null && t.mode & 1 && !(t.flags & 128)) Jh(), jr(), t.flags |= 98560, i = false;
        else if (i = Pi(t), r !== null && r.dehydrated !== null) {
          if (e2 === null) {
            if (!i) throw Error(N(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(N(317));
            i[zt] = t;
          } else jr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Me(t), i = false;
        } else Pt !== null && (gu(Pt), Pt = null), i = true;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e2 !== null && e2.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e2 === null || oe.current & 1 ? ye === 0 && (ye = 3) : Fc())), t.updateQueue !== null && (t.flags |= 4), Me(t), null);
    case 4:
      return Br(), au(e2, t), e2 === null && jo(t.stateNode.containerInfo), Me(t), null;
    case 10:
      return kc(t.type._context), Me(t), null;
    case 17:
      return We(t.type) && cl(), Me(t), null;
    case 19:
      if (ee(oe), i = t.memoizedState, i === null) return Me(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) oo(i, false);
      else {
        if (ye !== 0 || e2 !== null && e2.flags & 128) for (e2 = t.child; e2 !== null; ) {
          if (l = yl(e2), l !== null) {
            for (t.flags |= 128, oo(i, false), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e2 = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e2, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e2 = l.dependencies, i.dependencies = e2 === null ? null : { lanes: e2.lanes, firstContext: e2.firstContext }), n = n.sibling;
            return q(oe, oe.current & 1 | 2), t.child;
          }
          e2 = e2.sibling;
        }
        i.tail !== null && de() > Vr && (t.flags |= 128, r = true, oo(i, false), t.lanes = 4194304);
      }
      else {
        if (!r) if (e2 = yl(l), e2 !== null) {
          if (t.flags |= 128, r = true, n = e2.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), oo(i, true), i.tail === null && i.tailMode === "hidden" && !l.alternate && !re) return Me(t), null;
        } else 2 * de() - i.renderingStartTime > Vr && n !== 1073741824 && (t.flags |= 128, r = true, oo(i, false), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = de(), t.sibling = null, n = oe.current, q(oe, r ? n & 1 | 2 : n & 1), t) : (Me(t), null);
    case 22:
    case 23:
      return jc(), r = t.memoizedState !== null, e2 !== null && e2.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Qe & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function aw(e2, t) {
  switch (Sc(t), t.tag) {
    case 1:
      return We(t.type) && cl(), e2 = t.flags, e2 & 65536 ? (t.flags = e2 & -65537 | 128, t) : null;
    case 3:
      return Br(), ee(Ve), ee(Oe), Mc(), e2 = t.flags, e2 & 65536 && !(e2 & 128) ? (t.flags = e2 & -65537 | 128, t) : null;
    case 5:
      return _c(t), null;
    case 13:
      if (ee(oe), e2 = t.memoizedState, e2 !== null && e2.dehydrated !== null) {
        if (t.alternate === null) throw Error(N(340));
        jr();
      }
      return e2 = t.flags, e2 & 65536 ? (t.flags = e2 & -65537 | 128, t) : null;
    case 19:
      return ee(oe), null;
    case 4:
      return Br(), null;
    case 10:
      return kc(t.type._context), null;
    case 22:
    case 23:
      return jc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var $i = false, Ne = false, uw = typeof WeakSet == "function" ? WeakSet : Set, b = null;
function Tr(e2, t) {
  var n = e2.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ue(e2, t, r);
  }
  else n.current = null;
}
function uu(e2, t, n) {
  try {
    n();
  } catch (r) {
    ue(e2, t, r);
  }
}
var Md = false;
function cw(e2, t) {
  if (Ka = ll, e2 = Fh(), yc(e2)) {
    if ("selectionStart" in e2) var n = { start: e2.selectionStart, end: e2.selectionEnd };
    else e: {
      n = (n = e2.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, s = -1, a = -1, u = 0, h = 0, d = e2, m = null;
        t: for (; ; ) {
          for (var v; d !== n || o !== 0 && d.nodeType !== 3 || (s = l + o), d !== i || r !== 0 && d.nodeType !== 3 || (a = l + r), d.nodeType === 3 && (l += d.nodeValue.length), (v = d.firstChild) !== null; ) m = d, d = v;
          for (; ; ) {
            if (d === e2) break t;
            if (m === n && ++u === o && (s = l), m === i && ++h === r && (a = l), (v = d.nextSibling) !== null) break;
            d = m, m = d.parentNode;
          }
          d = v;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ya = { focusedElem: e2, selectionRange: n }, ll = false, b = t; b !== null; ) if (t = b, e2 = t.child, (t.subtreeFlags & 1028) !== 0 && e2 !== null) e2.return = t, b = e2;
  else for (; b !== null; ) {
    t = b;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var w = S.memoizedProps, _ = S.memoizedState, p = t.stateNode, f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Et(t.type, w), _);
            p.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        case 3:
          var g = t.stateNode.containerInfo;
          g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(N(163));
      }
    } catch (y) {
      ue(t, t.return, y);
    }
    if (e2 = t.sibling, e2 !== null) {
      e2.return = t.return, b = e2;
      break;
    }
    b = t.return;
  }
  return S = Md, Md = false, S;
}
function Co(e2, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e2) === e2) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && uu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function gs(e2, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e2) === e2) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function cu(e2) {
  var t = e2.ref;
  if (t !== null) {
    var n = e2.stateNode;
    switch (e2.tag) {
      case 5:
        e2 = n;
        break;
      default:
        e2 = n;
    }
    typeof t == "function" ? t(e2) : t.current = e2;
  }
}
function Lm(e2) {
  var t = e2.alternate;
  t !== null && (e2.alternate = null, Lm(t)), e2.child = null, e2.deletions = null, e2.sibling = null, e2.tag === 5 && (t = e2.stateNode, t !== null && (delete t[zt], delete t[Bo], delete t[Qa], delete t[KS], delete t[YS])), e2.stateNode = null, e2.return = null, e2.dependencies = null, e2.memoizedProps = null, e2.memoizedState = null, e2.pendingProps = null, e2.stateNode = null, e2.updateQueue = null;
}
function Am(e2) {
  return e2.tag === 5 || e2.tag === 3 || e2.tag === 4;
}
function $d(e2) {
  e: for (; ; ) {
    for (; e2.sibling === null; ) {
      if (e2.return === null || Am(e2.return)) return null;
      e2 = e2.return;
    }
    for (e2.sibling.return = e2.return, e2 = e2.sibling; e2.tag !== 5 && e2.tag !== 6 && e2.tag !== 18; ) {
      if (e2.flags & 2 || e2.child === null || e2.tag === 4) continue e;
      e2.child.return = e2, e2 = e2.child;
    }
    if (!(e2.flags & 2)) return e2.stateNode;
  }
}
function fu(e2, t, n) {
  var r = e2.tag;
  if (r === 5 || r === 6) e2 = e2.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e2, t) : n.insertBefore(e2, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e2, n)) : (t = n, t.appendChild(e2)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ul));
  else if (r !== 4 && (e2 = e2.child, e2 !== null)) for (fu(e2, t, n), e2 = e2.sibling; e2 !== null; ) fu(e2, t, n), e2 = e2.sibling;
}
function du(e2, t, n) {
  var r = e2.tag;
  if (r === 5 || r === 6) e2 = e2.stateNode, t ? n.insertBefore(e2, t) : n.appendChild(e2);
  else if (r !== 4 && (e2 = e2.child, e2 !== null)) for (du(e2, t, n), e2 = e2.sibling; e2 !== null; ) du(e2, t, n), e2 = e2.sibling;
}
var ke = null, Tt = false;
function un(e2, t, n) {
  for (n = n.child; n !== null; ) zm(e2, t, n), n = n.sibling;
}
function zm(e2, t, n) {
  if (Ut && typeof Ut.onCommitFiberUnmount == "function") try {
    Ut.onCommitFiberUnmount(as, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ne || Tr(n, t);
    case 6:
      var r = ke, o = Tt;
      ke = null, un(e2, t, n), ke = r, Tt = o, ke !== null && (Tt ? (e2 = ke, n = n.stateNode, e2.nodeType === 8 ? e2.parentNode.removeChild(n) : e2.removeChild(n)) : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null && (Tt ? (e2 = ke, n = n.stateNode, e2.nodeType === 8 ? ea(e2.parentNode, n) : e2.nodeType === 1 && ea(e2, n), Lo(e2)) : ea(ke, n.stateNode));
      break;
    case 4:
      r = ke, o = Tt, ke = n.stateNode.containerInfo, Tt = true, un(e2, t, n), ke = r, Tt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ne && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && uu(n, t, l), o = o.next;
        } while (o !== r);
      }
      un(e2, t, n);
      break;
    case 1:
      if (!Ne && (Tr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        ue(n, t, s);
      }
      un(e2, t, n);
      break;
    case 21:
      un(e2, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ne = (r = Ne) || n.memoizedState !== null, un(e2, t, n), Ne = r) : un(e2, t, n);
      break;
    default:
      un(e2, t, n);
  }
}
function Rd(e2) {
  var t = e2.updateQueue;
  if (t !== null) {
    e2.updateQueue = null;
    var n = e2.stateNode;
    n === null && (n = e2.stateNode = new uw()), t.forEach(function(r) {
      var o = Sw.bind(null, e2, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Ct(e2, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e2, l = t, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            ke = s.stateNode, Tt = false;
            break e;
          case 3:
            ke = s.stateNode.containerInfo, Tt = true;
            break e;
          case 4:
            ke = s.stateNode.containerInfo, Tt = true;
            break e;
        }
        s = s.return;
      }
      if (ke === null) throw Error(N(160));
      zm(i, l, o), ke = null, Tt = false;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      ue(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) jm(t, e2), t = t.sibling;
}
function jm(e2, t) {
  var n = e2.alternate, r = e2.flags;
  switch (e2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ct(t, e2), bt(e2), r & 4) {
        try {
          Co(3, e2, e2.return), gs(3, e2);
        } catch (w) {
          ue(e2, e2.return, w);
        }
        try {
          Co(5, e2, e2.return);
        } catch (w) {
          ue(e2, e2.return, w);
        }
      }
      break;
    case 1:
      Ct(t, e2), bt(e2), r & 512 && n !== null && Tr(n, n.return);
      break;
    case 5:
      if (Ct(t, e2), bt(e2), r & 512 && n !== null && Tr(n, n.return), e2.flags & 32) {
        var o = e2.stateNode;
        try {
          Oo(o, "");
        } catch (w) {
          ue(e2, e2.return, w);
        }
      }
      if (r & 4 && (o = e2.stateNode, o != null)) {
        var i = e2.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e2.type, a = e2.updateQueue;
        if (e2.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && sh(o, i), La(s, l);
          var u = La(s, i);
          for (l = 0; l < a.length; l += 2) {
            var h = a[l], d = a[l + 1];
            h === "style" ? dh(o, d) : h === "dangerouslySetInnerHTML" ? ch(o, d) : h === "children" ? Oo(o, d) : oc(o, h, d, u);
          }
          switch (s) {
            case "input":
              Na(o, i);
              break;
            case "textarea":
              ah(o, i);
              break;
            case "select":
              var m = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var v = i.value;
              v != null ? Rr(o, !!i.multiple, v, false) : m !== !!i.multiple && (i.defaultValue != null ? Rr(o, !!i.multiple, i.defaultValue, true) : Rr(o, !!i.multiple, i.multiple ? [] : "", false));
          }
          o[Bo] = i;
        } catch (w) {
          ue(e2, e2.return, w);
        }
      }
      break;
    case 6:
      if (Ct(t, e2), bt(e2), r & 4) {
        if (e2.stateNode === null) throw Error(N(162));
        o = e2.stateNode, i = e2.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (w) {
          ue(e2, e2.return, w);
        }
      }
      break;
    case 3:
      if (Ct(t, e2), bt(e2), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Lo(t.containerInfo);
      } catch (w) {
        ue(e2, e2.return, w);
      }
      break;
    case 4:
      Ct(t, e2), bt(e2);
      break;
    case 13:
      Ct(t, e2), bt(e2), o = e2.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ac = de())), r & 4 && Rd(e2);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e2.mode & 1 ? (Ne = (u = Ne) || h, Ct(t, e2), Ne = u) : Ct(t, e2), bt(e2), r & 8192) {
        if (u = e2.memoizedState !== null, (e2.stateNode.isHidden = u) && !h && e2.mode & 1) for (b = e2, h = e2.child; h !== null; ) {
          for (d = b = h; b !== null; ) {
            switch (m = b, v = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Co(4, m, m.return);
                break;
              case 1:
                Tr(m, m.return);
                var S = m.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (w) {
                    ue(r, n, w);
                  }
                }
                break;
              case 5:
                Tr(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Od(d);
                  continue;
                }
            }
            v !== null ? (v.return = m, b = v) : Od(d);
          }
          h = h.sibling;
        }
        e: for (h = null, d = e2; ; ) {
          if (d.tag === 5) {
            if (h === null) {
              h = d;
              try {
                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, a = d.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = fh("display", l));
              } catch (w) {
                ue(e2, e2.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (h === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (w) {
              ue(e2, e2.return, w);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e2) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e2) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e2) break e;
            h === d && (h = null), d = d.return;
          }
          h === d && (h = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      Ct(t, e2), bt(e2), r & 4 && Rd(e2);
      break;
    case 21:
      break;
    default:
      Ct(t, e2), bt(e2);
  }
}
function bt(e2) {
  var t = e2.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e2.return; n !== null; ) {
          if (Am(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Oo(o, ""), r.flags &= -33);
          var i = $d(e2);
          du(e2, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = $d(e2);
          fu(e2, s, l);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      ue(e2, e2.return, a);
    }
    e2.flags &= -3;
  }
  t & 4096 && (e2.flags &= -4097);
}
function fw(e2, t, n) {
  b = e2, Fm(e2);
}
function Fm(e2, t, n) {
  for (var r = (e2.mode & 1) !== 0; b !== null; ) {
    var o = b, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || $i;
      if (!l) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || Ne;
        s = $i;
        var u = Ne;
        if ($i = l, (Ne = a) && !u) for (b = o; b !== null; ) l = b, a = l.child, l.tag === 22 && l.memoizedState !== null ? bd(o) : a !== null ? (a.return = l, b = a) : bd(o);
        for (; i !== null; ) b = i, Fm(i), i = i.sibling;
        b = o, $i = s, Ne = u;
      }
      Nd(e2);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, b = i) : Nd(e2);
  }
}
function Nd(e2) {
  for (; b !== null; ) {
    var t = b;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ne || gs(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ne) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Et(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && md(t, i, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              md(t, l, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var h = u.memoizedState;
                if (h !== null) {
                  var d = h.dehydrated;
                  d !== null && Lo(d);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(N(163));
        }
        Ne || t.flags & 512 && cu(t);
      } catch (m) {
        ue(t, t.return, m);
      }
    }
    if (t === e2) {
      b = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, b = n;
      break;
    }
    b = t.return;
  }
}
function Od(e2) {
  for (; b !== null; ) {
    var t = b;
    if (t === e2) {
      b = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, b = n;
      break;
    }
    b = t.return;
  }
}
function bd(e2) {
  for (; b !== null; ) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gs(4, t);
          } catch (a) {
            ue(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ue(t, o, a);
            }
          }
          var i = t.return;
          try {
            cu(t);
          } catch (a) {
            ue(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            cu(t);
          } catch (a) {
            ue(t, l, a);
          }
      }
    } catch (a) {
      ue(t, t.return, a);
    }
    if (t === e2) {
      b = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, b = s;
      break;
    }
    b = t.return;
  }
}
var dw = Math.ceil, wl = sn.ReactCurrentDispatcher, Ic = sn.ReactCurrentOwner, yt = sn.ReactCurrentBatchConfig, U = 0, xe = null, me = null, Te = 0, Qe = 0, Pr = Dn(0), ye = 0, Yo = null, Jn = 0, ys = 0, Lc = 0, ko = null, Be = null, Ac = 0, Vr = 1 / 0, Qt = null, xl = false, pu = null, En = null, Ri = false, vn = null, Cl = 0, Eo = 0, hu = null, Gi = -1, Xi = 0;
function Ae() {
  return U & 6 ? de() : Gi !== -1 ? Gi : Gi = de();
}
function Tn(e2) {
  return e2.mode & 1 ? U & 2 && Te !== 0 ? Te & -Te : XS.transition !== null ? (Xi === 0 && (Xi = Eh()), Xi) : (e2 = Y, e2 !== 0 || (e2 = window.event, e2 = e2 === void 0 ? 16 : Nh(e2.type)), e2) : 1;
}
function Mt(e2, t, n, r) {
  if (50 < Eo) throw Eo = 0, hu = null, Error(N(185));
  ni(e2, n, r), (!(U & 2) || e2 !== xe) && (e2 === xe && (!(U & 2) && (ys |= n), ye === 4 && gn(e2, Te)), He(e2, r), n === 1 && U === 0 && !(t.mode & 1) && (Vr = de() + 500, ps && In()));
}
function He(e2, t) {
  var n = e2.callbackNode;
  X1(e2, t);
  var r = il(e2, e2 === xe ? Te : 0);
  if (r === 0) n !== null && Uf(n), e2.callbackNode = null, e2.callbackPriority = 0;
  else if (t = r & -r, e2.callbackPriority !== t) {
    if (n != null && Uf(n), t === 1) e2.tag === 0 ? GS(Dd.bind(null, e2)) : Qh(Dd.bind(null, e2)), WS(function() {
      !(U & 6) && In();
    }), n = null;
    else {
      switch (Th(r)) {
        case 1:
          n = uc;
          break;
        case 4:
          n = Ch;
          break;
        case 16:
          n = ol;
          break;
        case 536870912:
          n = kh;
          break;
        default:
          n = ol;
      }
      n = Gm(n, Bm.bind(null, e2));
    }
    e2.callbackPriority = t, e2.callbackNode = n;
  }
}
function Bm(e2, t) {
  if (Gi = -1, Xi = 0, U & 6) throw Error(N(327));
  var n = e2.callbackNode;
  if (Ir() && e2.callbackNode !== n) return null;
  var r = il(e2, e2 === xe ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e2.expiredLanes || t) t = kl(e2, r);
  else {
    t = r;
    var o = U;
    U |= 2;
    var i = Vm();
    (xe !== e2 || Te !== t) && (Qt = null, Vr = de() + 500, Kn(e2, t));
    do
      try {
        mw();
        break;
      } catch (s) {
        Um(e2, s);
      }
    while (true);
    Cc(), wl.current = i, U = o, me !== null ? t = 0 : (xe = null, Te = 0, t = ye);
  }
  if (t !== 0) {
    if (t === 2 && (o = Ba(e2), o !== 0 && (r = o, t = mu(e2, o))), t === 1) throw n = Yo, Kn(e2, 0), gn(e2, r), He(e2, de()), n;
    if (t === 6) gn(e2, r);
    else {
      if (o = e2.current.alternate, !(r & 30) && !pw(o) && (t = kl(e2, r), t === 2 && (i = Ba(e2), i !== 0 && (r = i, t = mu(e2, i))), t === 1)) throw n = Yo, Kn(e2, 0), gn(e2, r), He(e2, de()), n;
      switch (e2.finishedWork = o, e2.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          jn(e2, Be, Qt);
          break;
        case 3:
          if (gn(e2, r), (r & 130023424) === r && (t = Ac + 500 - de(), 10 < t)) {
            if (il(e2, 0) !== 0) break;
            if (o = e2.suspendedLanes, (o & r) !== r) {
              Ae(), e2.pingedLanes |= e2.suspendedLanes & o;
              break;
            }
            e2.timeoutHandle = Xa(jn.bind(null, e2, Be, Qt), t);
            break;
          }
          jn(e2, Be, Qt);
          break;
        case 4:
          if (gn(e2, r), (r & 4194240) === r) break;
          for (t = e2.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - _t(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = de() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * dw(r / 1960)) - r, 10 < r) {
            e2.timeoutHandle = Xa(jn.bind(null, e2, Be, Qt), r);
            break;
          }
          jn(e2, Be, Qt);
          break;
        case 5:
          jn(e2, Be, Qt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return He(e2, de()), e2.callbackNode === n ? Bm.bind(null, e2) : null;
}
function mu(e2, t) {
  var n = ko;
  return e2.current.memoizedState.isDehydrated && (Kn(e2, t).flags |= 256), e2 = kl(e2, t), e2 !== 2 && (t = Be, Be = n, t !== null && gu(t)), e2;
}
function gu(e2) {
  Be === null ? Be = e2 : Be.push.apply(Be, e2);
}
function pw(e2) {
  for (var t = e2; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!$t(i(), o)) return false;
        } catch {
          return false;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e2) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e2) return true;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return true;
}
function gn(e2, t) {
  for (t &= ~Lc, t &= ~ys, e2.suspendedLanes |= t, e2.pingedLanes &= ~t, e2 = e2.expirationTimes; 0 < t; ) {
    var n = 31 - _t(t), r = 1 << n;
    e2[n] = -1, t &= ~r;
  }
}
function Dd(e2) {
  if (U & 6) throw Error(N(327));
  Ir();
  var t = il(e2, 0);
  if (!(t & 1)) return He(e2, de()), null;
  var n = kl(e2, t);
  if (e2.tag !== 0 && n === 2) {
    var r = Ba(e2);
    r !== 0 && (t = r, n = mu(e2, r));
  }
  if (n === 1) throw n = Yo, Kn(e2, 0), gn(e2, t), He(e2, de()), n;
  if (n === 6) throw Error(N(345));
  return e2.finishedWork = e2.current.alternate, e2.finishedLanes = t, jn(e2, Be, Qt), He(e2, de()), null;
}
function zc(e2, t) {
  var n = U;
  U |= 1;
  try {
    return e2(t);
  } finally {
    U = n, U === 0 && (Vr = de() + 500, ps && In());
  }
}
function er(e2) {
  vn !== null && vn.tag === 0 && !(U & 6) && Ir();
  var t = U;
  U |= 1;
  var n = yt.transition, r = Y;
  try {
    if (yt.transition = null, Y = 1, e2) return e2();
  } finally {
    Y = r, yt.transition = n, U = t, !(U & 6) && In();
  }
}
function jc() {
  Qe = Pr.current, ee(Pr);
}
function Kn(e2, t) {
  e2.finishedWork = null, e2.finishedLanes = 0;
  var n = e2.timeoutHandle;
  if (n !== -1 && (e2.timeoutHandle = -1, VS(n)), me !== null) for (n = me.return; n !== null; ) {
    var r = n;
    switch (Sc(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && cl();
        break;
      case 3:
        Br(), ee(Ve), ee(Oe), Mc();
        break;
      case 5:
        _c(r);
        break;
      case 4:
        Br();
        break;
      case 13:
        ee(oe);
        break;
      case 19:
        ee(oe);
        break;
      case 10:
        kc(r.type._context);
        break;
      case 22:
      case 23:
        jc();
    }
    n = n.return;
  }
  if (xe = e2, me = e2 = Pn(e2.current, null), Te = Qe = t, ye = 0, Yo = null, Lc = ys = Jn = 0, Be = ko = null, Vn !== null) {
    for (t = 0; t < Vn.length; t++) if (n = Vn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    Vn = null;
  }
  return e2;
}
function Um(e2, t) {
  do {
    var n = me;
    try {
      if (Cc(), Hi.current = Sl, vl) {
        for (var r = ie.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        vl = false;
      }
      if (qn = 0, Se = ge = ie = null, xo = false, Wo = 0, Ic.current = null, n === null || n.return === null) {
        ye = 1, Yo = t, me = null;
        break;
      }
      e: {
        var i = e2, l = n.return, s = n, a = t;
        if (t = Te, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, h = s, d = h.tag;
          if (!(h.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var v = xd(l);
          if (v !== null) {
            v.flags &= -257, Cd(v, l, s, i, t), v.mode & 1 && wd(i, u, t), t = v, a = u;
            var S = t.updateQueue;
            if (S === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              wd(i, u, t), Fc();
              break e;
            }
            a = Error(N(426));
          }
        } else if (re && s.mode & 1) {
          var _ = xd(l);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), Cd(_, l, s, i, t), wc(Ur(a, s));
            break e;
          }
        }
        i = a = Ur(a, s), ye !== 4 && (ye = 2), ko === null ? ko = [i] : ko.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = Tm(i, a, t);
              hd(i, p);
              break e;
            case 1:
              s = a;
              var f = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (En === null || !En.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = Pm(i, s, t);
                hd(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Hm(n);
    } catch (x) {
      t = x, me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (true);
}
function Vm() {
  var e2 = wl.current;
  return wl.current = Sl, e2 === null ? Sl : e2;
}
function Fc() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4), xe === null || !(Jn & 268435455) && !(ys & 268435455) || gn(xe, Te);
}
function kl(e2, t) {
  var n = U;
  U |= 2;
  var r = Vm();
  (xe !== e2 || Te !== t) && (Qt = null, Kn(e2, t));
  do
    try {
      hw();
      break;
    } catch (o) {
      Um(e2, o);
    }
  while (true);
  if (Cc(), U = n, wl.current = r, me !== null) throw Error(N(261));
  return xe = null, Te = 0, ye;
}
function hw() {
  for (; me !== null; ) Wm(me);
}
function mw() {
  for (; me !== null && !F1(); ) Wm(me);
}
function Wm(e2) {
  var t = Ym(e2.alternate, e2, Qe);
  e2.memoizedProps = e2.pendingProps, t === null ? Hm(e2) : me = t, Ic.current = null;
}
function Hm(e2) {
  var t = e2;
  do {
    var n = t.alternate;
    if (e2 = t.return, t.flags & 32768) {
      if (n = aw(n, t), n !== null) {
        n.flags &= 32767, me = n;
        return;
      }
      if (e2 !== null) e2.flags |= 32768, e2.subtreeFlags = 0, e2.deletions = null;
      else {
        ye = 6, me = null;
        return;
      }
    } else if (n = sw(n, t, Qe), n !== null) {
      me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      me = t;
      return;
    }
    me = t = e2;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function jn(e2, t, n) {
  var r = Y, o = yt.transition;
  try {
    yt.transition = null, Y = 1, gw(e2, t, n, r);
  } finally {
    yt.transition = o, Y = r;
  }
  return null;
}
function gw(e2, t, n, r) {
  do
    Ir();
  while (vn !== null);
  if (U & 6) throw Error(N(327));
  n = e2.finishedWork;
  var o = e2.finishedLanes;
  if (n === null) return null;
  if (e2.finishedWork = null, e2.finishedLanes = 0, n === e2.current) throw Error(N(177));
  e2.callbackNode = null, e2.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Q1(e2, i), e2 === xe && (me = xe = null, Te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ri || (Ri = true, Gm(ol, function() {
    return Ir(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = yt.transition, yt.transition = null;
    var l = Y;
    Y = 1;
    var s = U;
    U |= 4, Ic.current = null, cw(e2, n), jm(n, e2), LS(Ya), ll = !!Ka, Ya = Ka = null, e2.current = n, fw(n), B1(), U = s, Y = l, yt.transition = i;
  } else e2.current = n;
  if (Ri && (Ri = false, vn = e2, Cl = o), i = e2.pendingLanes, i === 0 && (En = null), W1(n.stateNode), He(e2, de()), t !== null) for (r = e2.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (xl) throw xl = false, e2 = pu, pu = null, e2;
  return Cl & 1 && e2.tag !== 0 && Ir(), i = e2.pendingLanes, i & 1 ? e2 === hu ? Eo++ : (Eo = 0, hu = e2) : Eo = 0, In(), null;
}
function Ir() {
  if (vn !== null) {
    var e2 = Th(Cl), t = yt.transition, n = Y;
    try {
      if (yt.transition = null, Y = 16 > e2 ? 16 : e2, vn === null) var r = false;
      else {
        if (e2 = vn, vn = null, Cl = 0, U & 6) throw Error(N(331));
        var o = U;
        for (U |= 4, b = e2.current; b !== null; ) {
          var i = b, l = i.child;
          if (b.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (b = u; b !== null; ) {
                  var h = b;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Co(8, h, i);
                  }
                  var d = h.child;
                  if (d !== null) d.return = h, b = d;
                  else for (; b !== null; ) {
                    h = b;
                    var m = h.sibling, v = h.return;
                    if (Lm(h), h === u) {
                      b = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = v, b = m;
                      break;
                    }
                    b = v;
                  }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var _ = w.sibling;
                    w.sibling = null, w = _;
                  } while (w !== null);
                }
              }
              b = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, b = l;
          else e: for (; b !== null; ) {
            if (i = b, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Co(9, i, i.return);
            }
            var p = i.sibling;
            if (p !== null) {
              p.return = i.return, b = p;
              break e;
            }
            b = i.return;
          }
        }
        var f = e2.current;
        for (b = f; b !== null; ) {
          l = b;
          var g = l.child;
          if (l.subtreeFlags & 2064 && g !== null) g.return = l, b = g;
          else e: for (l = f; b !== null; ) {
            if (s = b, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  gs(9, s);
              }
            } catch (x) {
              ue(s, s.return, x);
            }
            if (s === l) {
              b = null;
              break e;
            }
            var y = s.sibling;
            if (y !== null) {
              y.return = s.return, b = y;
              break e;
            }
            b = s.return;
          }
        }
        if (U = o, In(), Ut && typeof Ut.onPostCommitFiberRoot == "function") try {
          Ut.onPostCommitFiberRoot(as, e2);
        } catch {
        }
        r = true;
      }
      return r;
    } finally {
      Y = n, yt.transition = t;
    }
  }
  return false;
}
function Id(e2, t, n) {
  t = Ur(n, t), t = Tm(e2, t, 1), e2 = kn(e2, t, 1), t = Ae(), e2 !== null && (ni(e2, 1, t), He(e2, t));
}
function ue(e2, t, n) {
  if (e2.tag === 3) Id(e2, e2, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Id(t, e2, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (En === null || !En.has(r))) {
        e2 = Ur(n, e2), e2 = Pm(t, e2, 1), t = kn(t, e2, 1), e2 = Ae(), t !== null && (ni(t, 1, e2), He(t, e2));
        break;
      }
    }
    t = t.return;
  }
}
function yw(e2, t, n) {
  var r = e2.pingCache;
  r !== null && r.delete(t), t = Ae(), e2.pingedLanes |= e2.suspendedLanes & n, xe === e2 && (Te & n) === n && (ye === 4 || ye === 3 && (Te & 130023424) === Te && 500 > de() - Ac ? Kn(e2, 0) : Lc |= n), He(e2, t);
}
function Km(e2, t) {
  t === 0 && (e2.mode & 1 ? (t = wi, wi <<= 1, !(wi & 130023424) && (wi = 4194304)) : t = 1);
  var n = Ae();
  e2 = on(e2, t), e2 !== null && (ni(e2, t, n), He(e2, n));
}
function vw(e2) {
  var t = e2.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Km(e2, n);
}
function Sw(e2, t) {
  var n = 0;
  switch (e2.tag) {
    case 13:
      var r = e2.stateNode, o = e2.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e2.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Km(e2, n);
}
var Ym;
Ym = function(e2, t, n) {
  if (e2 !== null) if (e2.memoizedProps !== t.pendingProps || Ve.current) Ue = true;
  else {
    if (!(e2.lanes & n) && !(t.flags & 128)) return Ue = false, lw(e2, t, n);
    Ue = !!(e2.flags & 131072);
  }
  else Ue = false, re && t.flags & 1048576 && Zh(t, pl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Yi(e2, t), e2 = t.pendingProps;
      var o = zr(t, Oe.current);
      Dr(t, n), o = Rc(null, t, r, e2, o, n);
      var i = Nc();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, We(r) ? (i = true, fl(t)) : i = false, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Tc(t), o.updater = ms, t.stateNode = o, o._reactInternals = t, nu(t, r, e2, n), t = iu(null, t, r, true, i, n)) : (t.tag = 0, re && i && vc(t), Le(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Yi(e2, t), e2 = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = xw(r), e2 = Et(r, e2), o) {
          case 0:
            t = ou(null, t, r, e2, n);
            break e;
          case 1:
            t = Td(null, t, r, e2, n);
            break e;
          case 11:
            t = kd(null, t, r, e2, n);
            break e;
          case 14:
            t = Ed(null, t, r, Et(r.type, e2), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Et(r, o), ou(e2, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Et(r, o), Td(e2, t, r, o, n);
    case 3:
      e: {
        if (Rm(t), e2 === null) throw Error(N(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, rm(e2, t), gl(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: false, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Ur(Error(N(423)), t), t = Pd(e2, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Ur(Error(N(424)), t), t = Pd(e2, t, r, n, o);
          break e;
        } else for (Je = Cn(t.stateNode.containerInfo.firstChild), nt = t, re = true, Pt = null, n = tm(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (jr(), r === o) {
            t = ln(e2, t, n);
            break e;
          }
          Le(e2, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return om(t), e2 === null && Ja(t), r = t.type, o = t.pendingProps, i = e2 !== null ? e2.memoizedProps : null, l = o.children, Ga(r, o) ? l = null : i !== null && Ga(r, i) && (t.flags |= 32), $m(e2, t), Le(e2, t, l, n), t.child;
    case 6:
      return e2 === null && Ja(t), null;
    case 13:
      return Nm(e2, t, n);
    case 4:
      return Pc(t, t.stateNode.containerInfo), r = t.pendingProps, e2 === null ? t.child = Fr(t, null, r, n) : Le(e2, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Et(r, o), kd(e2, t, r, o, n);
    case 7:
      return Le(e2, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e2, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e2, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, q(hl, r._currentValue), r._currentValue = l, i !== null) if ($t(i.value, l)) {
          if (i.children === o.children && !Ve.current) {
            t = ln(e2, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            l = i.child;
            for (var a = s.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = en(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var h = u.pending;
                    h === null ? a.next = a : (a.next = h.next, h.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), eu(i.return, n, t), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (l = i.return, l === null) throw Error(N(341));
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), eu(l, n, t), l = i.sibling;
          } else l = i.child;
          if (l !== null) l.return = i;
          else for (l = i; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (i = l.sibling, i !== null) {
              i.return = l.return, l = i;
              break;
            }
            l = l.return;
          }
          i = l;
        }
        Le(e2, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Dr(t, n), o = vt(o), r = r(o), t.flags |= 1, Le(e2, t, r, n), t.child;
    case 14:
      return r = t.type, o = Et(r, t.pendingProps), o = Et(r.type, o), Ed(e2, t, r, o, n);
    case 15:
      return _m(e2, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Et(r, o), Yi(e2, t), t.tag = 1, We(r) ? (e2 = true, fl(t)) : e2 = false, Dr(t, n), Em(t, r, o), nu(t, r, o, n), iu(null, t, r, true, e2, n);
    case 19:
      return Om(e2, t, n);
    case 22:
      return Mm(e2, t, n);
  }
  throw Error(N(156, t.tag));
};
function Gm(e2, t) {
  return xh(e2, t);
}
function ww(e2, t, n, r) {
  this.tag = e2, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function gt(e2, t, n, r) {
  return new ww(e2, t, n, r);
}
function Bc(e2) {
  return e2 = e2.prototype, !(!e2 || !e2.isReactComponent);
}
function xw(e2) {
  if (typeof e2 == "function") return Bc(e2) ? 1 : 0;
  if (e2 != null) {
    if (e2 = e2.$$typeof, e2 === lc) return 11;
    if (e2 === sc) return 14;
  }
  return 2;
}
function Pn(e2, t) {
  var n = e2.alternate;
  return n === null ? (n = gt(e2.tag, t, e2.key, e2.mode), n.elementType = e2.elementType, n.type = e2.type, n.stateNode = e2.stateNode, n.alternate = e2, e2.alternate = n) : (n.pendingProps = t, n.type = e2.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e2.flags & 14680064, n.childLanes = e2.childLanes, n.lanes = e2.lanes, n.child = e2.child, n.memoizedProps = e2.memoizedProps, n.memoizedState = e2.memoizedState, n.updateQueue = e2.updateQueue, t = e2.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e2.sibling, n.index = e2.index, n.ref = e2.ref, n;
}
function Qi(e2, t, n, r, o, i) {
  var l = 2;
  if (r = e2, typeof e2 == "function") Bc(e2) && (l = 1);
  else if (typeof e2 == "string") l = 5;
  else e: switch (e2) {
    case gr:
      return Yn(n.children, o, i, t);
    case ic:
      l = 8, o |= 8;
      break;
    case Pa:
      return e2 = gt(12, n, t, o | 2), e2.elementType = Pa, e2.lanes = i, e2;
    case _a:
      return e2 = gt(13, n, t, o), e2.elementType = _a, e2.lanes = i, e2;
    case Ma:
      return e2 = gt(19, n, t, o), e2.elementType = Ma, e2.lanes = i, e2;
    case oh:
      return vs(n, o, i, t);
    default:
      if (typeof e2 == "object" && e2 !== null) switch (e2.$$typeof) {
        case nh:
          l = 10;
          break e;
        case rh:
          l = 9;
          break e;
        case lc:
          l = 11;
          break e;
        case sc:
          l = 14;
          break e;
        case pn:
          l = 16, r = null;
          break e;
      }
      throw Error(N(130, e2 == null ? e2 : typeof e2, ""));
  }
  return t = gt(l, n, t, o), t.elementType = e2, t.type = r, t.lanes = i, t;
}
function Yn(e2, t, n, r) {
  return e2 = gt(7, e2, r, t), e2.lanes = n, e2;
}
function vs(e2, t, n, r) {
  return e2 = gt(22, e2, r, t), e2.elementType = oh, e2.lanes = n, e2.stateNode = { isHidden: false }, e2;
}
function aa(e2, t, n) {
  return e2 = gt(6, e2, null, t), e2.lanes = n, e2;
}
function ua(e2, t, n) {
  return t = gt(4, e2.children !== null ? e2.children : [], e2.key, t), t.lanes = n, t.stateNode = { containerInfo: e2.containerInfo, pendingChildren: null, implementation: e2.implementation }, t;
}
function Cw(e2, t, n, r, o) {
  this.tag = t, this.containerInfo = e2, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vs(0), this.expirationTimes = Vs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vs(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Uc(e2, t, n, r, o, i, l, s, a) {
  return e2 = new Cw(e2, t, n, s, a), t === 1 ? (t = 1, i === true && (t |= 8)) : t = 0, i = gt(3, null, null, t), e2.current = i, i.stateNode = e2, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Tc(i), e2;
}
function kw(e2, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: mr, key: r == null ? null : "" + r, children: e2, containerInfo: t, implementation: n };
}
function Xm(e2) {
  if (!e2) return Rn;
  e2 = e2._reactInternals;
  e: {
    if (or(e2) !== e2 || e2.tag !== 1) throw Error(N(170));
    var t = e2;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e2.tag === 1) {
    var n = e2.type;
    if (We(n)) return Xh(e2, n, t);
  }
  return t;
}
function Qm(e2, t, n, r, o, i, l, s, a) {
  return e2 = Uc(n, r, true, e2, o, i, l, s, a), e2.context = Xm(null), n = e2.current, r = Ae(), o = Tn(n), i = en(r, o), i.callback = t ?? null, kn(n, i, o), e2.current.lanes = o, ni(e2, o, r), He(e2, r), e2;
}
function Ss(e2, t, n, r) {
  var o = t.current, i = Ae(), l = Tn(o);
  return n = Xm(n), t.context === null ? t.context = n : t.pendingContext = n, t = en(i, l), t.payload = { element: e2 }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e2 = kn(o, t, l), e2 !== null && (Mt(e2, o, l, i), Wi(e2, o, l)), l;
}
function El(e2) {
  if (e2 = e2.current, !e2.child) return null;
  switch (e2.child.tag) {
    case 5:
      return e2.child.stateNode;
    default:
      return e2.child.stateNode;
  }
}
function Ld(e2, t) {
  if (e2 = e2.memoizedState, e2 !== null && e2.dehydrated !== null) {
    var n = e2.retryLane;
    e2.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Vc(e2, t) {
  Ld(e2, t), (e2 = e2.alternate) && Ld(e2, t);
}
function Ew() {
  return null;
}
var Zm = typeof reportError == "function" ? reportError : function(e2) {
  console.error(e2);
};
function Wc(e2) {
  this._internalRoot = e2;
}
ws.prototype.render = Wc.prototype.render = function(e2) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Ss(e2, t, null, null);
};
ws.prototype.unmount = Wc.prototype.unmount = function() {
  var e2 = this._internalRoot;
  if (e2 !== null) {
    this._internalRoot = null;
    var t = e2.containerInfo;
    er(function() {
      Ss(null, e2, null, null);
    }), t[rn] = null;
  }
};
function ws(e2) {
  this._internalRoot = e2;
}
ws.prototype.unstable_scheduleHydration = function(e2) {
  if (e2) {
    var t = Mh();
    e2 = { blockedOn: null, target: e2, priority: t };
    for (var n = 0; n < mn.length && t !== 0 && t < mn[n].priority; n++) ;
    mn.splice(n, 0, e2), n === 0 && Rh(e2);
  }
};
function Hc(e2) {
  return !(!e2 || e2.nodeType !== 1 && e2.nodeType !== 9 && e2.nodeType !== 11);
}
function xs(e2) {
  return !(!e2 || e2.nodeType !== 1 && e2.nodeType !== 9 && e2.nodeType !== 11 && (e2.nodeType !== 8 || e2.nodeValue !== " react-mount-point-unstable "));
}
function Ad() {
}
function Tw(e2, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = El(l);
        i.call(u);
      };
    }
    var l = Qm(t, r, e2, 0, null, false, false, "", Ad);
    return e2._reactRootContainer = l, e2[rn] = l.current, jo(e2.nodeType === 8 ? e2.parentNode : e2), er(), l;
  }
  for (; o = e2.lastChild; ) e2.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = El(a);
      s.call(u);
    };
  }
  var a = Uc(e2, 0, false, null, null, false, false, "", Ad);
  return e2._reactRootContainer = a, e2[rn] = a.current, jo(e2.nodeType === 8 ? e2.parentNode : e2), er(function() {
    Ss(t, a, n, r);
  }), a;
}
function Cs(e2, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = El(l);
        s.call(a);
      };
    }
    Ss(t, l, e2, o);
  } else l = Tw(n, t, e2, o, r);
  return El(l);
}
Ph = function(e2) {
  switch (e2.tag) {
    case 3:
      var t = e2.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fo(t.pendingLanes);
        n !== 0 && (cc(t, n | 1), He(t, de()), !(U & 6) && (Vr = de() + 500, In()));
      }
      break;
    case 13:
      er(function() {
        var r = on(e2, 1);
        if (r !== null) {
          var o = Ae();
          Mt(r, e2, 1, o);
        }
      }), Vc(e2, 1);
  }
};
fc = function(e2) {
  if (e2.tag === 13) {
    var t = on(e2, 134217728);
    if (t !== null) {
      var n = Ae();
      Mt(t, e2, 134217728, n);
    }
    Vc(e2, 134217728);
  }
};
_h = function(e2) {
  if (e2.tag === 13) {
    var t = Tn(e2), n = on(e2, t);
    if (n !== null) {
      var r = Ae();
      Mt(n, e2, t, r);
    }
    Vc(e2, t);
  }
};
Mh = function() {
  return Y;
};
$h = function(e2, t) {
  var n = Y;
  try {
    return Y = e2, t();
  } finally {
    Y = n;
  }
};
za = function(e2, t, n) {
  switch (t) {
    case "input":
      if (Na(e2, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e2; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e2 && r.form === e2.form) {
            var o = ds(r);
            if (!o) throw Error(N(90));
            lh(r), Na(r, o);
          }
        }
      }
      break;
    case "textarea":
      ah(e2, n);
      break;
    case "select":
      t = n.value, t != null && Rr(e2, !!n.multiple, t, false);
  }
};
mh = zc;
gh = er;
var Pw = { usingClientEntryPoint: false, Events: [oi, wr, ds, ph, hh, zc] }, io = { findFiberByHostInstance: Un, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _w = { bundleType: io.bundleType, version: io.version, rendererPackageName: io.rendererPackageName, rendererConfig: io.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: sn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e2) {
  return e2 = Sh(e2), e2 === null ? null : e2.stateNode;
}, findFiberByHostInstance: io.findFiberByHostInstance || Ew, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ni.isDisabled && Ni.supportsFiber) try {
    as = Ni.inject(_w), Ut = Ni;
  } catch {
  }
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pw;
lt.createPortal = function(e2, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hc(t)) throw Error(N(200));
  return kw(e2, t, null, n);
};
lt.createRoot = function(e2, t) {
  if (!Hc(e2)) throw Error(N(299));
  var n = false, r = "", o = Zm;
  return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Uc(e2, 1, false, null, null, n, false, r, o), e2[rn] = t.current, jo(e2.nodeType === 8 ? e2.parentNode : e2), new Wc(t);
};
lt.findDOMNode = function(e2) {
  if (e2 == null) return null;
  if (e2.nodeType === 1) return e2;
  var t = e2._reactInternals;
  if (t === void 0) throw typeof e2.render == "function" ? Error(N(188)) : (e2 = Object.keys(e2).join(","), Error(N(268, e2)));
  return e2 = Sh(t), e2 = e2 === null ? null : e2.stateNode, e2;
};
lt.flushSync = function(e2) {
  return er(e2);
};
lt.hydrate = function(e2, t, n) {
  if (!xs(t)) throw Error(N(200));
  return Cs(null, e2, t, true, n);
};
lt.hydrateRoot = function(e2, t, n) {
  if (!Hc(e2)) throw Error(N(405));
  var r = n != null && n.hydratedSources || null, o = false, i = "", l = Zm;
  if (n != null && (n.unstable_strictMode === true && (o = true), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Qm(t, null, e2, 1, n ?? null, o, false, i, l), e2[rn] = t.current, jo(e2), r) for (e2 = 0; e2 < r.length; e2++) n = r[e2], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new ws(t);
};
lt.render = function(e2, t, n) {
  if (!xs(t)) throw Error(N(200));
  return Cs(null, e2, t, false, n);
};
lt.unmountComponentAtNode = function(e2) {
  if (!xs(e2)) throw Error(N(40));
  return e2._reactRootContainer ? (er(function() {
    Cs(null, null, e2, false, function() {
      e2._reactRootContainer = null, e2[rn] = null;
    });
  }), true) : false;
};
lt.unstable_batchedUpdates = zc;
lt.unstable_renderSubtreeIntoContainer = function(e2, t, n, r) {
  if (!xs(n)) throw Error(N(200));
  if (e2 == null || e2._reactInternals === void 0) throw Error(N(38));
  return Cs(e2, t, n, false, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function qm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qm);
  } catch (e2) {
    console.error(e2);
  }
}
qm(), qp.exports = lt;
var ks = qp.exports;
const Oi = ku(ks), zd = { disabled: false }, Tl = jt.createContext(null);
var Mw = function(t) {
  return t.scrollTop;
}, ho = "unmounted", Fn = "exited", Bn = "entering", hr = "entered", yu = "exiting", an = function(e2) {
  Zp(t, e2);
  function t(r, o) {
    var i;
    i = e2.call(this, r, o) || this;
    var l = o, s = l && !l.isMounting ? r.enter : r.appear, a;
    return i.appearStatus = null, r.in ? s ? (a = Fn, i.appearStatus = Bn) : a = hr : r.unmountOnExit || r.mountOnEnter ? a = ho : a = Fn, i.state = { status: a }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var l = o.in;
    return l && i.status === ho ? { status: Fn } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(true, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== Bn && l !== hr && (i = Bn) : (l === Bn || l === hr) && (i = yu);
    }
    this.updateStatus(false, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, l, s;
    return i = l = s = o, o != null && typeof o != "number" && (i = o.exit, l = o.enter, s = o.appear !== void 0 ? o.appear : l), { exit: i, enter: l, appear: s };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = false), i !== null) if (this.cancelNextCallback(), i === Bn) {
      if (this.props.unmountOnExit || this.props.mountOnEnter) {
        var l = this.props.nodeRef ? this.props.nodeRef.current : Oi.findDOMNode(this);
        l && Mw(l);
      }
      this.performEnter(o);
    } else this.performExit();
    else this.props.unmountOnExit && this.state.status === Fn && this.setState({ status: ho });
  }, n.performEnter = function(o) {
    var i = this, l = this.props.enter, s = this.context ? this.context.isMounting : o, a = this.props.nodeRef ? [s] : [Oi.findDOMNode(this), s], u = a[0], h = a[1], d = this.getTimeouts(), m = s ? d.appear : d.enter;
    if (!o && !l || zd.disabled) {
      this.safeSetState({ status: hr }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, h), this.safeSetState({ status: Bn }, function() {
      i.props.onEntering(u, h), i.onTransitionEnd(m, function() {
        i.safeSetState({ status: hr }, function() {
          i.props.onEntered(u, h);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, l = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Oi.findDOMNode(this);
    if (!i || zd.disabled) {
      this.safeSetState({ status: Fn }, function() {
        o.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({ status: yu }, function() {
      o.props.onExiting(s), o.onTransitionEnd(l.exit, function() {
        o.safeSetState({ status: Fn }, function() {
          o.props.onExited(s);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, l = true;
    return this.nextCallback = function(s) {
      l && (l = false, i.nextCallback = null, o(s));
    }, this.nextCallback.cancel = function() {
      l = false;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var l = this.props.nodeRef ? this.props.nodeRef.current : Oi.findDOMNode(this), s = o == null && !this.props.addEndListener;
    if (!l || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var a = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], u = a[0], h = a[1];
      this.props.addEndListener(u, h);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === ho) return null;
    var i = this.props, l = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = Qp(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return jt.createElement(Tl.Provider, { value: null }, typeof l == "function" ? l(o, s) : jt.cloneElement(jt.Children.only(l), s));
  }, t;
}(jt.Component);
an.contextType = Tl;
an.propTypes = {};
function pr() {
}
an.defaultProps = { in: false, mountOnEnter: false, unmountOnExit: false, appear: false, enter: true, exit: true, onEnter: pr, onEntering: pr, onEntered: pr, onExit: pr, onExiting: pr, onExited: pr };
an.UNMOUNTED = ho;
an.EXITED = Fn;
an.ENTERING = Bn;
an.ENTERED = hr;
an.EXITING = yu;
function $w(e2) {
  if (e2 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function Kc(e2, t) {
  var n = function(i) {
    return t && T.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e2 && T.Children.map(e2, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Rw(e2, t) {
  e2 = e2 || {}, t = t || {};
  function n(h) {
    return h in t ? t[h] : e2[h];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e2) i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var l, s = {};
  for (var a in t) {
    if (r[a]) for (l = 0; l < r[a].length; l++) {
      var u = r[a][l];
      s[r[a][l]] = n(u);
    }
    s[a] = n(a);
  }
  for (l = 0; l < o.length; l++) s[o[l]] = n(o[l]);
  return s;
}
function Hn(e2, t, n) {
  return n[t] != null ? n[t] : e2.props[t];
}
function Nw(e2, t) {
  return Kc(e2.children, function(n) {
    return T.cloneElement(n, { onExited: t.bind(null, n), in: true, appear: Hn(n, "appear", e2), enter: Hn(n, "enter", e2), exit: Hn(n, "exit", e2) });
  });
}
function Ow(e2, t, n) {
  var r = Kc(e2.children), o = Rw(t, r);
  return Object.keys(o).forEach(function(i) {
    var l = o[i];
    if (T.isValidElement(l)) {
      var s = i in t, a = i in r, u = t[i], h = T.isValidElement(u) && !u.props.in;
      a && (!s || h) ? o[i] = T.cloneElement(l, { onExited: n.bind(null, l), in: true, exit: Hn(l, "exit", e2), enter: Hn(l, "enter", e2) }) : !a && s && !h ? o[i] = T.cloneElement(l, { in: false }) : a && s && T.isValidElement(u) && (o[i] = T.cloneElement(l, { onExited: n.bind(null, l), in: u.props.in, exit: Hn(l, "exit", e2), enter: Hn(l, "enter", e2) }));
    }
  }), o;
}
var bw = Object.values || function(e2) {
  return Object.keys(e2).map(function(t) {
    return e2[t];
  });
}, Dw = { component: "div", childFactory: function(t) {
  return t;
} }, Yc = function(e2) {
  Zp(t, e2);
  function t(r, o) {
    var i;
    i = e2.call(this, r, o) || this;
    var l = i.handleExited.bind($w(i));
    return i.state = { contextValue: { isMounting: true }, handleExited: l, firstRender: true }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = true, this.setState({ contextValue: { isMounting: false } });
  }, n.componentWillUnmount = function() {
    this.mounted = false;
  }, t.getDerivedStateFromProps = function(o, i) {
    var l = i.children, s = i.handleExited, a = i.firstRender;
    return { children: a ? Nw(o, s) : Ow(o, l, s), firstRender: false };
  }, n.handleExited = function(o, i) {
    var l = Kc(this.props.children);
    o.key in l || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var a = qi({}, s.children);
      return delete a[o.key], { children: a };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, l = o.childFactory, s = Qp(o, ["component", "childFactory"]), a = this.state.contextValue, u = bw(this.state.children).map(l);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? jt.createElement(Tl.Provider, { value: a }, u) : jt.createElement(Tl.Provider, { value: a }, jt.createElement(i, s, u));
  }, t;
}(jt.Component);
Yc.propTypes = {};
Yc.defaultProps = Dw;
const Iw = (e2) => e2.scrollTop;
function jd(e2, t) {
  const { timeout: n, easing: r, style: o = {} } = e2;
  return { duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0), easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r), delay: o.transitionDelay };
}
function Lw(e2) {
  return tr("MuiPaper", e2);
}
Nn("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Aw = (e2) => {
  const { square: t, elevation: n, variant: r, classes: o } = e2, i = { root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`] };
  return Kr(i, Lw, o);
}, zw = Rt("div", { name: "MuiPaper", slot: "Root", overridesResolver: (e2, t) => {
  const { ownerState: n } = e2;
  return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
} })(Xn(({ theme: e2 }) => ({ backgroundColor: (e2.vars || e2).palette.background.paper, color: (e2.vars || e2).palette.text.primary, transition: e2.transitions.create("box-shadow"), variants: [{ props: ({ ownerState: t }) => !t.square, style: { borderRadius: e2.shape.borderRadius } }, { props: { variant: "outlined" }, style: { border: `1px solid ${(e2.vars || e2).palette.divider}` } }, { props: { variant: "elevation" }, style: { boxShadow: "var(--Paper-shadow)", backgroundImage: "var(--Paper-overlay)" } }] }))), jw = T.forwardRef(function(t, n) {
  var _a2;
  const r = On({ props: t, name: "MuiPaper" }), o = ss(), { className: i, component: l = "div", elevation: s = 1, square: a = false, variant: u = "elevation", ...h } = r, d = { ...r, component: l, elevation: s, square: a, variant: u }, m = Aw(d);
  return $.jsx(zw, { as: l, ownerState: d, className: we(m.root, i), ref: n, ...h, style: { ...u === "elevation" && { "--Paper-shadow": (o.vars || o).shadows[s], ...o.vars && { "--Paper-overlay": (_a2 = o.vars.overlays) == null ? void 0 : _a2[s] }, ...!o.vars && o.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${Ro("#fff", Ca(s))}, ${Ro("#fff", Ca(s))})` } }, ...h.style } });
});
class Pl {
  constructor() {
    __publicField(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    });
    this.ref = { current: null }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
  }
  static create() {
    return new Pl();
  }
  static use() {
    const t = zp(Pl.create).current, [n, r] = T.useState(false);
    return t.shouldMount = n, t.setShouldMount = r, T.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Bw(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  start(...t) {
    this.mount().then(() => {
      var _a2;
      return (_a2 = this.ref.current) == null ? void 0 : _a2.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var _a2;
      return (_a2 = this.ref.current) == null ? void 0 : _a2.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var _a2;
      return (_a2 = this.ref.current) == null ? void 0 : _a2.pulsate(...t);
    });
  }
}
function Fw() {
  return Pl.use();
}
function Bw() {
  let e2, t;
  const n = new Promise((r, o) => {
    e2 = r, t = o;
  });
  return n.resolve = e2, n.reject = t, n;
}
function Uw(e2) {
  const { className: t, classes: n, pulsate: r = false, rippleX: o, rippleY: i, rippleSize: l, in: s, onExited: a, timeout: u } = e2, [h, d] = T.useState(false), m = we(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), v = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o }, S = we(n.child, h && n.childLeaving, r && n.childPulsate);
  return !s && !h && d(true), T.useEffect(() => {
    if (!s && a != null) {
      const w = setTimeout(a, u);
      return () => {
        clearTimeout(w);
      };
    }
  }, [a, s, u]), $.jsx("span", { className: m, style: v, children: $.jsx("span", { className: S }) });
}
const dt = Nn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), vu = 550, Vw = 80, Ww = qo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Hw = qo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Kw = qo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Yw = Rt("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), Gw = Rt(Uw, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${dt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ww};
    animation-duration: ${vu}ms;
    animation-timing-function: ${({ theme: e2 }) => e2.transitions.easing.easeInOut};
  }

  &.${dt.ripplePulsate} {
    animation-duration: ${({ theme: e2 }) => e2.transitions.duration.shorter}ms;
  }

  & .${dt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${dt.childLeaving} {
    opacity: 0;
    animation-name: ${Hw};
    animation-duration: ${vu}ms;
    animation-timing-function: ${({ theme: e2 }) => e2.transitions.easing.easeInOut};
  }

  & .${dt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Kw};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e2 }) => e2.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Xw = T.forwardRef(function(t, n) {
  const r = On({ props: t, name: "MuiTouchRipple" }), { center: o = false, classes: i = {}, className: l, ...s } = r, [a, u] = T.useState([]), h = T.useRef(0), d = T.useRef(null);
  T.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [a]);
  const m = T.useRef(false), v = hv(), S = T.useRef(null), w = T.useRef(null), _ = T.useCallback((y) => {
    const { pulsate: x, rippleX: C, rippleY: P, rippleSize: k, cb: R } = y;
    u((c) => [...c, $.jsx(Gw, { classes: { ripple: we(i.ripple, dt.ripple), rippleVisible: we(i.rippleVisible, dt.rippleVisible), ripplePulsate: we(i.ripplePulsate, dt.ripplePulsate), child: we(i.child, dt.child), childLeaving: we(i.childLeaving, dt.childLeaving), childPulsate: we(i.childPulsate, dt.childPulsate) }, timeout: vu, pulsate: x, rippleX: C, rippleY: P, rippleSize: k }, h.current)]), h.current += 1, d.current = R;
  }, [i]), p = T.useCallback((y = {}, x = {}, C = () => {
  }) => {
    const { pulsate: P = false, center: k = o || x.pulsate, fakeElement: R = false } = x;
    if ((y == null ? void 0 : y.type) === "mousedown" && m.current) {
      m.current = false;
      return;
    }
    (y == null ? void 0 : y.type) === "touchstart" && (m.current = true);
    const c = R ? null : w.current, M = c ? c.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    let I, z, L;
    if (k || y === void 0 || y.clientX === 0 && y.clientY === 0 || !y.clientX && !y.touches) I = Math.round(M.width / 2), z = Math.round(M.height / 2);
    else {
      const { clientX: te, clientY: K } = y.touches && y.touches.length > 0 ? y.touches[0] : y;
      I = Math.round(te - M.left), z = Math.round(K - M.top);
    }
    if (k) L = Math.sqrt((2 * M.width ** 2 + M.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const te = Math.max(Math.abs((c ? c.clientWidth : 0) - I), I) * 2 + 2, K = Math.max(Math.abs((c ? c.clientHeight : 0) - z), z) * 2 + 2;
      L = Math.sqrt(te ** 2 + K ** 2);
    }
    (y == null ? void 0 : y.touches) ? S.current === null && (S.current = () => {
      _({ pulsate: P, rippleX: I, rippleY: z, rippleSize: L, cb: C });
    }, v.start(Vw, () => {
      S.current && (S.current(), S.current = null);
    })) : _({ pulsate: P, rippleX: I, rippleY: z, rippleSize: L, cb: C });
  }, [o, _, v]), f = T.useCallback(() => {
    p({}, { pulsate: true });
  }, [p]), g = T.useCallback((y, x) => {
    if (v.clear(), (y == null ? void 0 : y.type) === "touchend" && S.current) {
      S.current(), S.current = null, v.start(0, () => {
        g(y, x);
      });
      return;
    }
    S.current = null, u((C) => C.length > 0 ? C.slice(1) : C), d.current = x;
  }, [v]);
  return T.useImperativeHandle(n, () => ({ pulsate: f, start: p, stop: g }), [f, p, g]), $.jsx(Yw, { className: we(dt.root, i.root, l), ref: w, ...s, children: $.jsx(Yc, { component: null, exit: true, children: a }) });
});
function Qw(e2) {
  return tr("MuiButtonBase", e2);
}
const Zw = Nn("MuiButtonBase", ["root", "disabled", "focusVisible"]), qw = (e2) => {
  const { disabled: t, focusVisible: n, focusVisibleClassName: r, classes: o } = e2, l = Kr({ root: ["root", t && "disabled", n && "focusVisible"] }, Qw, o);
  return n && r && (l.root += ` ${r}`), l;
}, Jw = Rt("button", { name: "MuiButtonBase", slot: "Root", overridesResolver: (e2, t) => t.root })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${Zw.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }), ex = T.forwardRef(function(t, n) {
  const r = On({ props: t, name: "MuiButtonBase" }), { action: o, centerRipple: i = false, children: l, className: s, component: a = "button", disabled: u = false, disableRipple: h = false, disableTouchRipple: d = false, focusRipple: m = false, focusVisibleClassName: v, LinkComponent: S = "a", onBlur: w, onClick: _, onContextMenu: p, onDragLeave: f, onFocus: g, onFocusVisible: y, onKeyDown: x, onKeyUp: C, onMouseDown: P, onMouseLeave: k, onMouseUp: R, onTouchEnd: c, onTouchMove: M, onTouchStart: I, tabIndex: z = 0, TouchRippleProps: L, touchRippleRef: te, type: K, ...Fe } = r, O = T.useRef(null), D = Fw(), j = wa(D.ref, te), [V, B] = T.useState(false);
  u && V && B(false), T.useImperativeHandle(o, () => ({ focusVisible: () => {
    B(true), O.current.focus();
  } }), []);
  const be = D.shouldMount && !h && !u;
  T.useEffect(() => {
    V && m && !h && D.pulsate();
  }, [h, m, V, D]);
  const at = Xt(D, "start", P, d), Kt = Xt(D, "stop", p, d), ut = Xt(D, "stop", f, d), Ye = Xt(D, "stop", R, d), li = Xt(D, "stop", (A) => {
    V && A.preventDefault(), k && k(A);
  }, d), si = Xt(D, "start", I, d), Ms = Xt(D, "stop", c, d), $s = Xt(D, "stop", M, d), ai = Xt(D, "stop", (A) => {
    xf(A.target) || B(false), w && w(A);
  }, false), ui = Fi((A) => {
    O.current || (O.current = A.currentTarget), xf(A.target) && (B(true), y && y(A)), g && g(A);
  }), lr = () => {
    const A = O.current;
    return a && a !== "button" && !(A.tagName === "A" && A.href);
  }, ci = Fi((A) => {
    m && !A.repeat && V && A.key === " " && D.stop(A, () => {
      D.start(A);
    }), A.target === A.currentTarget && lr() && A.key === " " && A.preventDefault(), x && x(A), A.target === A.currentTarget && lr() && A.key === "Enter" && !u && (A.preventDefault(), _ && _(A));
  }), Rs = Fi((A) => {
    m && A.key === " " && V && !A.defaultPrevented && D.stop(A, () => {
      D.pulsate(A);
    }), C && C(A), _ && A.target === A.currentTarget && lr() && A.key === " " && !A.defaultPrevented && _(A);
  });
  let Ln = a;
  Ln === "button" && (Fe.href || Fe.to) && (Ln = S);
  const Yt = {};
  Ln === "button" ? (Yt.type = K === void 0 ? "button" : K, Yt.disabled = u) : (!Fe.href && !Fe.to && (Yt.role = "button"), u && (Yt["aria-disabled"] = u));
  const Ge = wa(n, O), An = { ...r, centerRipple: i, component: a, disabled: u, disableRipple: h, disableTouchRipple: d, focusRipple: m, tabIndex: z, focusVisible: V }, Xr = qw(An);
  return $.jsxs(Jw, { as: Ln, className: we(Xr.root, s), ownerState: An, onBlur: ai, onClick: _, onContextMenu: Kt, onFocus: ui, onKeyDown: ci, onKeyUp: Rs, onMouseDown: at, onMouseLeave: li, onMouseUp: Ye, onDragLeave: ut, onTouchEnd: Ms, onTouchMove: $s, onTouchStart: si, ref: Ge, tabIndex: u ? -1 : z, type: K, ...Yt, ...Fe, children: [l, be ? $.jsx(Xw, { ref: j, center: i, ...L }) : null] });
});
function Xt(e2, t, n, r = false) {
  return Fi((o) => (n && n(o), r || e2[t](o), true));
}
function tx(e2) {
  return typeof e2.main == "string";
}
function nx(e2, t = []) {
  if (!tx(e2)) return false;
  for (const n of t) if (!e2.hasOwnProperty(n) || typeof e2[n] != "string") return false;
  return true;
}
function _l(e2 = []) {
  return ([, t]) => t && nx(t, e2);
}
function rx(e2) {
  return tr("MuiCircularProgress", e2);
}
Nn("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const cn = 44, Su = qo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, wu = qo`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, ox = typeof Su != "string" ? zu`
        animation: ${Su} 1.4s linear infinite;
      ` : null, ix = typeof wu != "string" ? zu`
        animation: ${wu} 1.4s ease-in-out infinite;
      ` : null, lx = (e2) => {
  const { classes: t, variant: n, color: r, disableShrink: o } = e2, i = { root: ["root", n, `color${ve(r)}`], svg: ["svg"], circle: ["circle", `circle${ve(n)}`, o && "circleDisableShrink"] };
  return Kr(i, rx, t);
}, sx = Rt("span", { name: "MuiCircularProgress", slot: "Root", overridesResolver: (e2, t) => {
  const { ownerState: n } = e2;
  return [t.root, t[n.variant], t[`color${ve(n.color)}`]];
} })(Xn(({ theme: e2 }) => ({ display: "inline-block", variants: [{ props: { variant: "determinate" }, style: { transition: e2.transitions.create("transform") } }, { props: { variant: "indeterminate" }, style: ox || { animation: `${Su} 1.4s linear infinite` } }, ...Object.entries(e2.palette).filter(_l()).map(([t]) => ({ props: { color: t }, style: { color: (e2.vars || e2).palette[t].main } }))] }))), ax = Rt("svg", { name: "MuiCircularProgress", slot: "Svg", overridesResolver: (e2, t) => t.svg })({ display: "block" }), ux = Rt("circle", { name: "MuiCircularProgress", slot: "Circle", overridesResolver: (e2, t) => {
  const { ownerState: n } = e2;
  return [t.circle, t[`circle${ve(n.variant)}`], n.disableShrink && t.circleDisableShrink];
} })(Xn(({ theme: e2 }) => ({ stroke: "currentColor", variants: [{ props: { variant: "determinate" }, style: { transition: e2.transitions.create("stroke-dashoffset") } }, { props: { variant: "indeterminate" }, style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 } }, { props: ({ ownerState: t }) => t.variant === "indeterminate" && !t.disableShrink, style: ix || { animation: `${wu} 1.4s ease-in-out infinite` } }] }))), cx = T.forwardRef(function(t, n) {
  const r = On({ props: t, name: "MuiCircularProgress" }), { className: o, color: i = "primary", disableShrink: l = false, size: s = 40, style: a, thickness: u = 3.6, value: h = 0, variant: d = "indeterminate", ...m } = r, v = { ...r, color: i, disableShrink: l, size: s, thickness: u, value: h, variant: d }, S = lx(v), w = {}, _ = {}, p = {};
  if (d === "determinate") {
    const f = 2 * Math.PI * ((cn - u) / 2);
    w.strokeDasharray = f.toFixed(3), p["aria-valuenow"] = Math.round(h), w.strokeDashoffset = `${((100 - h) / 100 * f).toFixed(3)}px`, _.transform = "rotate(-90deg)";
  }
  return $.jsx(sx, { className: we(S.root, o), style: { width: s, height: s, ..._, ...a }, ownerState: v, ref: n, role: "progressbar", ...p, ...m, children: $.jsx(ax, { className: S.svg, ownerState: v, viewBox: `${cn / 2} ${cn / 2} ${cn} ${cn}`, children: $.jsx(ux, { className: S.circle, style: w, ownerState: v, cx: cn, cy: cn, r: (cn - u) / 2, fill: "none", strokeWidth: u }) }) });
});
function fx(e2) {
  return tr("MuiIconButton", e2);
}
const Fd = Nn("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), dx = (e2) => {
  const { classes: t, disabled: n, color: r, edge: o, size: i, loading: l } = e2, s = { root: ["root", l && "loading", n && "disabled", r !== "default" && `color${ve(r)}`, o && `edge${ve(o)}`, `size${ve(i)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] };
  return Kr(s, fx, t);
}, px = Rt(ex, { name: "MuiIconButton", slot: "Root", overridesResolver: (e2, t) => {
  const { ownerState: n } = e2;
  return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${ve(n.color)}`], n.edge && t[`edge${ve(n.edge)}`], t[`size${ve(n.size)}`]];
} })(Xn(({ theme: e2 }) => ({ textAlign: "center", flex: "0 0 auto", fontSize: e2.typography.pxToRem(24), padding: 8, borderRadius: "50%", color: (e2.vars || e2).palette.action.active, transition: e2.transitions.create("background-color", { duration: e2.transitions.duration.shortest }), variants: [{ props: (t) => !t.disableRipple, style: { "--IconButton-hoverBg": e2.vars ? `rgba(${e2.vars.palette.action.activeChannel} / ${e2.vars.palette.action.hoverOpacity})` : Ro(e2.palette.action.active, e2.palette.action.hoverOpacity), "&:hover": { backgroundColor: "var(--IconButton-hoverBg)", "@media (hover: none)": { backgroundColor: "transparent" } } } }, { props: { edge: "start" }, style: { marginLeft: -12 } }, { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: { edge: "end" }, style: { marginRight: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }] })), Xn(({ theme: e2 }) => ({ variants: [{ props: { color: "inherit" }, style: { color: "inherit" } }, ...Object.entries(e2.palette).filter(_l()).map(([t]) => ({ props: { color: t }, style: { color: (e2.vars || e2).palette[t].main } })), ...Object.entries(e2.palette).filter(_l()).map(([t]) => ({ props: { color: t }, style: { "--IconButton-hoverBg": e2.vars ? `rgba(${(e2.vars || e2).palette[t].mainChannel} / ${e2.vars.palette.action.hoverOpacity})` : Ro((e2.vars || e2).palette[t].main, e2.palette.action.hoverOpacity) } })), { props: { size: "small" }, style: { padding: 5, fontSize: e2.typography.pxToRem(18) } }, { props: { size: "large" }, style: { padding: 12, fontSize: e2.typography.pxToRem(28) } }], [`&.${Fd.disabled}`]: { backgroundColor: "transparent", color: (e2.vars || e2).palette.action.disabled }, [`&.${Fd.loading}`]: { color: "transparent" } }))), hx = Rt("span", { name: "MuiIconButton", slot: "LoadingIndicator", overridesResolver: (e2, t) => t.loadingIndicator })(({ theme: e2 }) => ({ display: "none", position: "absolute", visibility: "visible", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: (e2.vars || e2).palette.action.disabled, variants: [{ props: { loading: true }, style: { display: "flex" } }] })), To = T.forwardRef(function(t, n) {
  const r = On({ props: t, name: "MuiIconButton" }), { edge: o = false, children: i, className: l, color: s = "default", disabled: a = false, disableFocusRipple: u = false, size: h = "medium", id: d, loading: m = null, loadingIndicator: v, ...S } = r, w = fv(d), _ = v ?? $.jsx(cx, { "aria-labelledby": w, color: "inherit", size: 16 }), p = { ...r, edge: o, color: s, disabled: a, disableFocusRipple: u, loading: m, loadingIndicator: _, size: h }, f = dx(p);
  return $.jsxs(px, { id: m ? w : d, className: we(f.root, l), centerRipple: true, focusRipple: !u, disabled: a || m, ref: n, ...S, ownerState: p, children: [typeof m == "boolean" && $.jsx("span", { className: f.loadingWrapper, style: { display: "contents" }, children: $.jsx(hx, { className: f.loadingIndicator, ownerState: p, children: m && _ }) }), i] });
});
function mx(e2) {
  return tr("MuiTypography", e2);
}
Nn("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const gx = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, yx = w1(), vx = (e2) => {
  const { align: t, gutterBottom: n, noWrap: r, paragraph: o, variant: i, classes: l } = e2, s = { root: ["root", i, e2.align !== "inherit" && `align${ve(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"] };
  return Kr(s, mx, l);
}, Sx = Rt("span", { name: "MuiTypography", slot: "Root", overridesResolver: (e2, t) => {
  const { ownerState: n } = e2;
  return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ve(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
} })(Xn(({ theme: e2 }) => {
  var _a2;
  return { margin: 0, variants: [{ props: { variant: "inherit" }, style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }, ...Object.entries(e2.typography).filter(([t, n]) => t !== "inherit" && n && typeof n == "object").map(([t, n]) => ({ props: { variant: t }, style: n })), ...Object.entries(e2.palette).filter(_l()).map(([t]) => ({ props: { color: t }, style: { color: (e2.vars || e2).palette[t].main } })), ...Object.entries(((_a2 = e2.palette) == null ? void 0 : _a2.text) || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({ props: { color: `text${ve(t)}` }, style: { color: (e2.vars || e2).palette.text[t] } })), { props: ({ ownerState: t }) => t.align !== "inherit", style: { textAlign: "var(--Typography-textAlign)" } }, { props: ({ ownerState: t }) => t.noWrap, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, { props: ({ ownerState: t }) => t.gutterBottom, style: { marginBottom: "0.35em" } }, { props: ({ ownerState: t }) => t.paragraph, style: { marginBottom: 16 } }] };
})), Bd = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, Jm = T.forwardRef(function(t, n) {
  const { color: r, ...o } = On({ props: t, name: "MuiTypography" }), i = !gx[r], l = yx({ ...o, ...i && { color: r } }), { align: s = "inherit", className: a, component: u, gutterBottom: h = false, noWrap: d = false, paragraph: m = false, variant: v = "body1", variantMapping: S = Bd, ...w } = l, _ = { ...l, align: s, color: r, className: a, component: u, gutterBottom: h, noWrap: d, paragraph: m, variant: v, variantMapping: S }, p = u || (m ? "p" : S[v] || Bd[v]) || "span", f = vx(_);
  return $.jsx(Sx, { as: p, ref: n, className: we(f.root, a), ...w, ownerState: _, style: { ...s !== "inherit" && { "--Typography-textAlign": s }, ...w.style } });
}), wx = { entering: { opacity: 1 }, entered: { opacity: 1 } }, xx = T.forwardRef(function(t, n) {
  const r = ss(), o = { enter: r.transitions.duration.enteringScreen, exit: r.transitions.duration.leavingScreen }, { addEndListener: i, appear: l = true, children: s, easing: a, in: u, onEnter: h, onEntered: d, onEntering: m, onExit: v, onExited: S, onExiting: w, style: _, timeout: p = o, TransitionComponent: f = an, ...g } = t, y = T.useRef(null), x = wa(y, mv(s), n), C = (L) => (te) => {
    if (L) {
      const K = y.current;
      te === void 0 ? L(K) : L(K, te);
    }
  }, P = C(m), k = C((L, te) => {
    Iw(L);
    const K = jd({ style: _, timeout: p, easing: a }, { mode: "enter" });
    L.style.webkitTransition = r.transitions.create("opacity", K), L.style.transition = r.transitions.create("opacity", K), h && h(L, te);
  }), R = C(d), c = C(w), M = C((L) => {
    const te = jd({ style: _, timeout: p, easing: a }, { mode: "exit" });
    L.style.webkitTransition = r.transitions.create("opacity", te), L.style.transition = r.transitions.create("opacity", te), v && v(L);
  }), I = C(S), z = (L) => {
    i && i(y.current, L);
  };
  return $.jsx(f, { appear: l, in: u, nodeRef: y, onEnter: k, onEntered: R, onEntering: P, onExit: M, onExited: I, onExiting: c, addEndListener: z, timeout: p, ...g, children: (L, { ownerState: te, ...K }) => T.cloneElement(s, { style: { opacity: 0, visibility: L === "exited" && !u ? "hidden" : void 0, ...wx[L], ..._, ...s.props.style }, ref: x, ...K }) });
}), Cx = Nn("MuiBox", ["root"]), kx = ls(), qe = G0({ themeId: Ft, defaultTheme: kx, defaultClassName: Cx.root, generateClassName: Op.generate }), xu = typeof Xp({}) == "function", Ex = (e2, t) => ({ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", boxSizing: "border-box", WebkitTextSizeAdjust: "100%", ...t && !e2.vars && { colorScheme: e2.palette.mode } }), Tx = (e2) => ({ color: (e2.vars || e2).palette.text.primary, ...e2.typography.body1, backgroundColor: (e2.vars || e2).palette.background.default, "@media print": { backgroundColor: (e2.vars || e2).palette.common.white } }), eg = (e2, t = false) => {
  var _a2, _b;
  const n = {};
  t && e2.colorSchemes && typeof e2.getColorSchemeSelector == "function" && Object.entries(e2.colorSchemes).forEach(([i, l]) => {
    var _a3, _b2;
    const s = e2.getColorSchemeSelector(i);
    s.startsWith("@") ? n[s] = { ":root": { colorScheme: (_a3 = l.palette) == null ? void 0 : _a3.mode } } : n[s.replace(/\s*&/, "")] = { colorScheme: (_b2 = l.palette) == null ? void 0 : _b2.mode };
  });
  let r = { html: Ex(e2, t), "*, *::before, *::after": { boxSizing: "inherit" }, "strong, b": { fontWeight: e2.typography.fontWeightBold }, body: { margin: 0, ...Tx(e2), "&::backdrop": { backgroundColor: (e2.vars || e2).palette.background.default } }, ...n };
  const o = (_b = (_a2 = e2.components) == null ? void 0 : _a2.MuiCssBaseline) == null ? void 0 : _b.styleOverrides;
  return o && (r = [r, o]), r;
}, Zi = "mui-ecs", Px = (e2) => {
  const t = eg(e2, false), n = Array.isArray(t) ? t[0] : t;
  return !e2.vars && n && (n.html[`:root:has(${Zi})`] = { colorScheme: e2.palette.mode }), e2.colorSchemes && Object.entries(e2.colorSchemes).forEach(([r, o]) => {
    var _a2, _b;
    const i = e2.getColorSchemeSelector(r);
    i.startsWith("@") ? n[i] = { [`:root:not(:has(.${Zi}))`]: { colorScheme: (_a2 = o.palette) == null ? void 0 : _a2.mode } } : n[i.replace(/\s*&/, "")] = { [`&:not(:has(.${Zi}))`]: { colorScheme: (_b = o.palette) == null ? void 0 : _b.mode } };
  }), t;
}, _x = Xp(xu ? ({ theme: e2, enableColorScheme: t }) => eg(e2, t) : ({ theme: e2 }) => Px(e2));
function Mx(e2) {
  const t = On({ props: e2, name: "MuiCssBaseline" }), { children: n, enableColorScheme: r = false } = t;
  return $.jsxs(T.Fragment, { children: [xu && $.jsx(_x, { enableColorScheme: r }), !xu && !r && $.jsx("span", { className: Zi, style: { display: "none" } }), n] });
}
var Cu = {}, Ud = ks;
Cu.createRoot = Ud.createRoot, Cu.hydrateRoot = Ud.hydrateRoot;
var Es = { exports: {} }, tg = {};
const $x = pg(Y0);
var ce = {}, Wt = {};
Object.defineProperty(Wt, "__esModule", { value: true });
Wt.dontSetMe = Dx;
Wt.findInArray = Rx;
Wt.int = bx;
Wt.isFunction = Nx;
Wt.isNum = Ox;
function Rx(e2, t) {
  for (let n = 0, r = e2.length; n < r; n++) if (t.apply(t, [e2[n], n, e2])) return e2[n];
}
function Nx(e2) {
  return typeof e2 == "function" || Object.prototype.toString.call(e2) === "[object Function]";
}
function Ox(e2) {
  return typeof e2 == "number" && !isNaN(e2);
}
function bx(e2) {
  return parseInt(e2, 10);
}
function Dx(e2, t, n) {
  if (e2[t]) return new Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`);
}
var ir = {};
Object.defineProperty(ir, "__esModule", { value: true });
ir.browserPrefixToKey = rg;
ir.browserPrefixToStyle = Ix;
ir.default = void 0;
ir.getPrefix = ng;
const ca = ["Moz", "Webkit", "O", "ms"];
function ng() {
  var _a2, _b;
  let e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u") return "";
  const t = (_b = (_a2 = window.document) == null ? void 0 : _a2.documentElement) == null ? void 0 : _b.style;
  if (!t || e2 in t) return "";
  for (let n = 0; n < ca.length; n++) if (rg(e2, ca[n]) in t) return ca[n];
  return "";
}
function rg(e2, t) {
  return t ? `${t}${Lx(e2)}` : e2;
}
function Ix(e2, t) {
  return t ? `-${t.toLowerCase()}-${e2}` : e2;
}
function Lx(e2) {
  let t = "", n = true;
  for (let r = 0; r < e2.length; r++) n ? (t += e2[r].toUpperCase(), n = false) : e2[r] === "-" ? n = true : t += e2[r];
  return t;
}
ir.default = ng();
Object.defineProperty(ce, "__esModule", { value: true });
ce.addClassName = lg;
ce.addEvent = zx;
ce.addUserSelectStyles = Xx;
ce.createCSSTransform = Hx;
ce.createSVGTransform = Kx;
ce.getTouch = Yx;
ce.getTouchIdentifier = Gx;
ce.getTranslation = Gc;
ce.innerHeight = Ux;
ce.innerWidth = Vx;
ce.matchesSelector = ig;
ce.matchesSelectorAndParentsTo = Ax;
ce.offsetXYFromParent = Wx;
ce.outerHeight = Fx;
ce.outerWidth = Bx;
ce.removeClassName = sg;
ce.removeEvent = jx;
ce.scheduleRemoveUserSelectStyles = Qx;
var rt = Wt, Vd = og(ir);
function og(e2, t) {
  if (typeof WeakMap == "function") var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (og = function(o, i) {
    if (!i && o && o.__esModule) return o;
    var l, s, a = { __proto__: null, default: o };
    if (o === null || typeof o != "object" && typeof o != "function") return a;
    if (l = i ? r : n) {
      if (l.has(o)) return l.get(o);
      l.set(o, a);
    }
    for (const u in o) u !== "default" && {}.hasOwnProperty.call(o, u) && ((s = (l = Object.defineProperty) && Object.getOwnPropertyDescriptor(o, u)) && (s.get || s.set) ? l(a, u, s) : a[u] = o[u]);
    return a;
  })(e2, t);
}
let bi = "";
function ig(e2, t) {
  return bi || (bi = (0, rt.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, rt.isFunction)(e2[n]);
  })), (0, rt.isFunction)(e2[bi]) ? e2[bi](t) : false;
}
function Ax(e2, t, n) {
  let r = e2;
  do {
    if (ig(r, t)) return true;
    if (r === n) return false;
    r = r.parentNode;
  } while (r);
  return false;
}
function zx(e2, t, n, r) {
  if (!e2) return;
  const o = { capture: true, ...r };
  e2.addEventListener ? e2.addEventListener(t, n, o) : e2.attachEvent ? e2.attachEvent("on" + t, n) : e2["on" + t] = n;
}
function jx(e2, t, n, r) {
  if (!e2) return;
  const o = { capture: true, ...r };
  e2.removeEventListener ? e2.removeEventListener(t, n, o) : e2.detachEvent ? e2.detachEvent("on" + t, n) : e2["on" + t] = null;
}
function Fx(e2) {
  let t = e2.clientHeight;
  const n = e2.ownerDocument.defaultView.getComputedStyle(e2);
  return t += (0, rt.int)(n.borderTopWidth), t += (0, rt.int)(n.borderBottomWidth), t;
}
function Bx(e2) {
  let t = e2.clientWidth;
  const n = e2.ownerDocument.defaultView.getComputedStyle(e2);
  return t += (0, rt.int)(n.borderLeftWidth), t += (0, rt.int)(n.borderRightWidth), t;
}
function Ux(e2) {
  let t = e2.clientHeight;
  const n = e2.ownerDocument.defaultView.getComputedStyle(e2);
  return t -= (0, rt.int)(n.paddingTop), t -= (0, rt.int)(n.paddingBottom), t;
}
function Vx(e2) {
  let t = e2.clientWidth;
  const n = e2.ownerDocument.defaultView.getComputedStyle(e2);
  return t -= (0, rt.int)(n.paddingLeft), t -= (0, rt.int)(n.paddingRight), t;
}
function Wx(e2, t, n) {
  const o = t === t.ownerDocument.body ? { left: 0, top: 0 } : t.getBoundingClientRect(), i = (e2.clientX + t.scrollLeft - o.left) / n, l = (e2.clientY + t.scrollTop - o.top) / n;
  return { x: i, y: l };
}
function Hx(e2, t) {
  const n = Gc(e2, t, "px");
  return { [(0, Vd.browserPrefixToKey)("transform", Vd.default)]: n };
}
function Kx(e2, t) {
  return Gc(e2, t, "");
}
function Gc(e2, t, n) {
  let { x: r, y: o } = e2, i = `translate(${r}${n},${o}${n})`;
  if (t) {
    const l = `${typeof t.x == "string" ? t.x : t.x + n}`, s = `${typeof t.y == "string" ? t.y : t.y + n}`;
    i = `translate(${l}, ${s})` + i;
  }
  return i;
}
function Yx(e2, t) {
  return e2.targetTouches && (0, rt.findInArray)(e2.targetTouches, (n) => t === n.identifier) || e2.changedTouches && (0, rt.findInArray)(e2.changedTouches, (n) => t === n.identifier);
}
function Gx(e2) {
  if (e2.targetTouches && e2.targetTouches[0]) return e2.targetTouches[0].identifier;
  if (e2.changedTouches && e2.changedTouches[0]) return e2.changedTouches[0].identifier;
}
function Xx(e2) {
  if (!e2) return;
  let t = e2.getElementById("react-draggable-style-el");
  t || (t = e2.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e2.getElementsByTagName("head")[0].appendChild(t)), e2.body && lg(e2.body, "react-draggable-transparent-selection");
}
function Qx(e2) {
  window.requestAnimationFrame ? window.requestAnimationFrame(() => {
    Wd(e2);
  }) : Wd(e2);
}
function Wd(e2) {
  if (e2) try {
    if (e2.body && sg(e2.body, "react-draggable-transparent-selection"), e2.selection) e2.selection.empty();
    else {
      const t = (e2.defaultView || window).getSelection();
      t && t.type !== "Caret" && t.removeAllRanges();
    }
  } catch {
  }
}
function lg(e2, t) {
  e2.classList ? e2.classList.add(t) : e2.className.match(new RegExp(`(?:^|\\s)${t}(?!\\S)`)) || (e2.className += ` ${t}`);
}
function sg(e2, t) {
  e2.classList ? e2.classList.remove(t) : e2.className = e2.className.replace(new RegExp(`(?:^|\\s)${t}(?!\\S)`, "g"), "");
}
var Ht = {};
Object.defineProperty(Ht, "__esModule", { value: true });
Ht.canDragX = Jx;
Ht.canDragY = eC;
Ht.createCoreData = nC;
Ht.createDraggableData = rC;
Ht.getBoundPosition = Zx;
Ht.getControlPosition = tC;
Ht.snapToGrid = qx;
var Xe = Wt, _r = ce;
function Zx(e2, t, n) {
  if (!e2.props.bounds) return [t, n];
  let { bounds: r } = e2.props;
  r = typeof r == "string" ? r : oC(r);
  const o = Xc(e2);
  if (typeof r == "string") {
    const { ownerDocument: i } = o, l = i.defaultView;
    let s;
    if (r === "parent" ? s = o.parentNode : s = o.getRootNode().querySelector(r), !(s instanceof l.HTMLElement)) throw new Error('Bounds selector "' + r + '" could not find an element.');
    const a = s, u = l.getComputedStyle(o), h = l.getComputedStyle(a);
    r = { left: -o.offsetLeft + (0, Xe.int)(h.paddingLeft) + (0, Xe.int)(u.marginLeft), top: -o.offsetTop + (0, Xe.int)(h.paddingTop) + (0, Xe.int)(u.marginTop), right: (0, _r.innerWidth)(a) - (0, _r.outerWidth)(o) - o.offsetLeft + (0, Xe.int)(h.paddingRight) - (0, Xe.int)(u.marginRight), bottom: (0, _r.innerHeight)(a) - (0, _r.outerHeight)(o) - o.offsetTop + (0, Xe.int)(h.paddingBottom) - (0, Xe.int)(u.marginBottom) };
  }
  return (0, Xe.isNum)(r.right) && (t = Math.min(t, r.right)), (0, Xe.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, Xe.isNum)(r.left) && (t = Math.max(t, r.left)), (0, Xe.isNum)(r.top) && (n = Math.max(n, r.top)), [t, n];
}
function qx(e2, t, n) {
  const r = Math.round(t / e2[0]) * e2[0], o = Math.round(n / e2[1]) * e2[1];
  return [r, o];
}
function Jx(e2) {
  return e2.props.axis === "both" || e2.props.axis === "x";
}
function eC(e2) {
  return e2.props.axis === "both" || e2.props.axis === "y";
}
function tC(e2, t, n) {
  const r = typeof t == "number" ? (0, _r.getTouch)(e2, t) : null;
  if (typeof t == "number" && !r) return null;
  const o = Xc(n), i = n.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, _r.offsetXYFromParent)(r || e2, i, n.props.scale);
}
function nC(e2, t, n) {
  const r = !(0, Xe.isNum)(e2.lastX), o = Xc(e2);
  return r ? { node: o, deltaX: 0, deltaY: 0, lastX: t, lastY: n, x: t, y: n } : { node: o, deltaX: t - e2.lastX, deltaY: n - e2.lastY, lastX: e2.lastX, lastY: e2.lastY, x: t, y: n };
}
function rC(e2, t) {
  const n = e2.props.scale;
  return { node: t.node, x: e2.state.x + t.deltaX / n, y: e2.state.y + t.deltaY / n, deltaX: t.deltaX / n, deltaY: t.deltaY / n, lastX: e2.state.x, lastY: e2.state.y };
}
function oC(e2) {
  return { left: e2.left, top: e2.top, right: e2.right, bottom: e2.bottom };
}
function Xc(e2) {
  const t = e2.findDOMNode();
  if (!t) throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var Ts = {}, Ps = {};
Object.defineProperty(Ps, "__esModule", { value: true });
Ps.default = iC;
function iC() {
}
Object.defineProperty(Ts, "__esModule", { value: true });
Ts.default = void 0;
var fa = ag(T), De = Qc(Cp), lC = Qc(ks), $e = ce, fn = Ht, da = Wt, lo = Qc(Ps);
function Qc(e2) {
  return e2 && e2.__esModule ? e2 : { default: e2 };
}
function ag(e2, t) {
  if (typeof WeakMap == "function") var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (ag = function(o, i) {
    if (!i && o && o.__esModule) return o;
    var l, s, a = { __proto__: null, default: o };
    if (o === null || typeof o != "object" && typeof o != "function") return a;
    if (l = i ? r : n) {
      if (l.has(o)) return l.get(o);
      l.set(o, a);
    }
    for (const u in o) u !== "default" && {}.hasOwnProperty.call(o, u) && ((s = (l = Object.defineProperty) && Object.getOwnPropertyDescriptor(o, u)) && (s.get || s.set) ? l(a, u, s) : a[u] = o[u]);
    return a;
  })(e2, t);
}
function Ie(e2, t, n) {
  return (t = sC(t)) in e2 ? Object.defineProperty(e2, t, { value: n, enumerable: true, configurable: true, writable: true }) : e2[t] = n, e2;
}
function sC(e2) {
  var t = aC(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aC(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var n = e2[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e2, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
const kt = { touch: { start: "touchstart", move: "touchmove", stop: "touchend" }, mouse: { start: "mousedown", move: "mousemove", stop: "mouseup" } };
let dn = kt.mouse, _s = class extends fa.Component {
  constructor() {
    super(...arguments), Ie(this, "dragging", false), Ie(this, "lastX", NaN), Ie(this, "lastY", NaN), Ie(this, "touchIdentifier", null), Ie(this, "mounted", false), Ie(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0) return false;
      const n = this.findDOMNode();
      if (!n || !n.ownerDocument || !n.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
      const { ownerDocument: r } = n;
      if (this.props.disabled || !(t.target instanceof r.defaultView.Node) || this.props.handle && !(0, $e.matchesSelectorAndParentsTo)(t.target, this.props.handle, n) || this.props.cancel && (0, $e.matchesSelectorAndParentsTo)(t.target, this.props.cancel, n)) return;
      t.type === "touchstart" && !this.props.allowMobileScroll && t.preventDefault();
      const o = (0, $e.getTouchIdentifier)(t);
      this.touchIdentifier = o;
      const i = (0, fn.getControlPosition)(t, o, this);
      if (i == null) return;
      const { x: l, y: s } = i, a = (0, fn.createCoreData)(this, l, s);
      (0, lo.default)("DraggableCore: handleDragStart: %j", a), (0, lo.default)("calling", this.props.onStart), !(this.props.onStart(t, a) === false || this.mounted === false) && (this.props.enableUserSelectHack && (0, $e.addUserSelectStyles)(r), this.dragging = true, this.lastX = l, this.lastY = s, (0, $e.addEvent)(r, dn.move, this.handleDrag), (0, $e.addEvent)(r, dn.stop, this.handleDragStop));
    }), Ie(this, "handleDrag", (t) => {
      const n = (0, fn.getControlPosition)(t, this.touchIdentifier, this);
      if (n == null) return;
      let { x: r, y: o } = n;
      if (Array.isArray(this.props.grid)) {
        let s = r - this.lastX, a = o - this.lastY;
        if ([s, a] = (0, fn.snapToGrid)(this.props.grid, s, a), !s && !a) return;
        r = this.lastX + s, o = this.lastY + a;
      }
      const i = (0, fn.createCoreData)(this, r, o);
      if ((0, lo.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(t, i) === false || this.mounted === false) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const a = document.createEvent("MouseEvents");
          a.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), this.handleDragStop(a);
        }
        return;
      }
      this.lastX = r, this.lastY = o;
    }), Ie(this, "handleDragStop", (t) => {
      if (!this.dragging) return;
      const n = (0, fn.getControlPosition)(t, this.touchIdentifier, this);
      if (n == null) return;
      let { x: r, y: o } = n;
      if (Array.isArray(this.props.grid)) {
        let a = r - this.lastX || 0, u = o - this.lastY || 0;
        [a, u] = (0, fn.snapToGrid)(this.props.grid, a, u), r = this.lastX + a, o = this.lastY + u;
      }
      const i = (0, fn.createCoreData)(this, r, o);
      if (this.props.onStop(t, i) === false || this.mounted === false) return false;
      const s = this.findDOMNode();
      s && this.props.enableUserSelectHack && (0, $e.scheduleRemoveUserSelectStyles)(s.ownerDocument), (0, lo.default)("DraggableCore: handleDragStop: %j", i), this.dragging = false, this.lastX = NaN, this.lastY = NaN, s && ((0, lo.default)("DraggableCore: Removing handlers"), (0, $e.removeEvent)(s.ownerDocument, dn.move, this.handleDrag), (0, $e.removeEvent)(s.ownerDocument, dn.stop, this.handleDragStop));
    }), Ie(this, "onMouseDown", (t) => (dn = kt.mouse, this.handleDragStart(t))), Ie(this, "onMouseUp", (t) => (dn = kt.mouse, this.handleDragStop(t))), Ie(this, "onTouchStart", (t) => (dn = kt.touch, this.handleDragStart(t))), Ie(this, "onTouchEnd", (t) => (dn = kt.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = true;
    const t = this.findDOMNode();
    t && (0, $e.addEvent)(t, kt.touch.start, this.onTouchStart, { passive: false });
  }
  componentWillUnmount() {
    this.mounted = false;
    const t = this.findDOMNode();
    if (t) {
      const { ownerDocument: n } = t;
      (0, $e.removeEvent)(n, kt.mouse.move, this.handleDrag), (0, $e.removeEvent)(n, kt.touch.move, this.handleDrag), (0, $e.removeEvent)(n, kt.mouse.stop, this.handleDragStop), (0, $e.removeEvent)(n, kt.touch.stop, this.handleDragStop), (0, $e.removeEvent)(t, kt.touch.start, this.onTouchStart, { passive: false }), this.props.enableUserSelectHack && (0, $e.scheduleRemoveUserSelectStyles)(n);
    }
  }
  findDOMNode() {
    var _a2, _b, _c2;
    return ((_a2 = this.props) == null ? void 0 : _a2.nodeRef) ? (_c2 = (_b = this.props) == null ? void 0 : _b.nodeRef) == null ? void 0 : _c2.current : lC.default.findDOMNode(this);
  }
  render() {
    return fa.cloneElement(fa.Children.only(this.props.children), { onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp, onTouchEnd: this.onTouchEnd });
  }
};
Ts.default = _s;
Ie(_s, "displayName", "DraggableCore");
Ie(_s, "propTypes", { allowAnyClick: De.default.bool, allowMobileScroll: De.default.bool, children: De.default.node.isRequired, disabled: De.default.bool, enableUserSelectHack: De.default.bool, offsetParent: function(e2, t) {
  if (e2[t] && e2[t].nodeType !== 1) throw new Error("Draggable's offsetParent must be a DOM Node.");
}, grid: De.default.arrayOf(De.default.number), handle: De.default.string, cancel: De.default.string, nodeRef: De.default.object, onStart: De.default.func, onDrag: De.default.func, onStop: De.default.func, onMouseDown: De.default.func, scale: De.default.number, className: da.dontSetMe, style: da.dontSetMe, transform: da.dontSetMe });
Ie(_s, "defaultProps", { allowAnyClick: false, allowMobileScroll: false, disabled: false, enableUserSelectHack: true, onStart: function() {
}, onDrag: function() {
}, onStop: function() {
}, onMouseDown: function() {
}, scale: 1 });
(function(e2) {
  Object.defineProperty(e2, "__esModule", { value: true }), Object.defineProperty(e2, "DraggableCore", { enumerable: true, get: function() {
    return a.default;
  } }), e2.default = void 0;
  var t = d(T), n = h(Cp), r = h(ks), o = $x, i = ce, l = Ht, s = Wt, a = h(Ts), u = h(Ps);
  function h(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function d(p, f) {
    if (typeof WeakMap == "function") var g = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap();
    return (d = function(x, C) {
      if (!C && x && x.__esModule) return x;
      var P, k, R = { __proto__: null, default: x };
      if (x === null || typeof x != "object" && typeof x != "function") return R;
      if (P = C ? y : g) {
        if (P.has(x)) return P.get(x);
        P.set(x, R);
      }
      for (const c in x) c !== "default" && {}.hasOwnProperty.call(x, c) && ((k = (P = Object.defineProperty) && Object.getOwnPropertyDescriptor(x, c)) && (k.get || k.set) ? P(R, c, k) : R[c] = x[c]);
      return R;
    })(p, f);
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function(p) {
      for (var f = 1; f < arguments.length; f++) {
        var g = arguments[f];
        for (var y in g) ({}).hasOwnProperty.call(g, y) && (p[y] = g[y]);
      }
      return p;
    }, m.apply(null, arguments);
  }
  function v(p, f, g) {
    return (f = S(f)) in p ? Object.defineProperty(p, f, { value: g, enumerable: true, configurable: true, writable: true }) : p[f] = g, p;
  }
  function S(p) {
    var f = w(p, "string");
    return typeof f == "symbol" ? f : f + "";
  }
  function w(p, f) {
    if (typeof p != "object" || !p) return p;
    var g = p[Symbol.toPrimitive];
    if (g !== void 0) {
      var y = g.call(p, f);
      if (typeof y != "object") return y;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (f === "string" ? String : Number)(p);
  }
  class _ extends t.Component {
    static getDerivedStateFromProps(f, g) {
      let { position: y } = f, { prevPropsPosition: x } = g;
      return y && (!x || y.x !== x.x || y.y !== x.y) ? ((0, u.default)("Draggable: getDerivedStateFromProps %j", { position: y, prevPropsPosition: x }), { x: y.x, y: y.y, prevPropsPosition: { ...y } }) : null;
    }
    constructor(f) {
      super(f), v(this, "onDragStart", (g, y) => {
        if ((0, u.default)("Draggable: onDragStart: %j", y), this.props.onStart(g, (0, l.createDraggableData)(this, y)) === false) return false;
        this.setState({ dragging: true, dragged: true });
      }), v(this, "onDrag", (g, y) => {
        if (!this.state.dragging) return false;
        (0, u.default)("Draggable: onDrag: %j", y);
        const x = (0, l.createDraggableData)(this, y), C = { x: x.x, y: x.y, slackX: 0, slackY: 0 };
        if (this.props.bounds) {
          const { x: k, y: R } = C;
          C.x += this.state.slackX, C.y += this.state.slackY;
          const [c, M] = (0, l.getBoundPosition)(this, C.x, C.y);
          C.x = c, C.y = M, C.slackX = this.state.slackX + (k - C.x), C.slackY = this.state.slackY + (R - C.y), x.x = C.x, x.y = C.y, x.deltaX = C.x - this.state.x, x.deltaY = C.y - this.state.y;
        }
        if (this.props.onDrag(g, x) === false) return false;
        this.setState(C);
      }), v(this, "onDragStop", (g, y) => {
        if (!this.state.dragging || this.props.onStop(g, (0, l.createDraggableData)(this, y)) === false) return false;
        (0, u.default)("Draggable: onDragStop: %j", y);
        const C = { dragging: false, slackX: 0, slackY: 0 };
        if (!!this.props.position) {
          const { x: k, y: R } = this.props.position;
          C.x = k, C.y = R;
        }
        this.setState(C);
      }), this.state = { dragging: false, dragged: false, x: f.position ? f.position.x : f.defaultPosition.x, y: f.position ? f.position.y : f.defaultPosition.y, prevPropsPosition: { ...f.position }, slackX: 0, slackY: 0, isElementSVG: false }, f.position && !(f.onDrag || f.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    componentDidMount() {
      typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({ isElementSVG: true });
    }
    componentWillUnmount() {
      this.state.dragging && this.setState({ dragging: false });
    }
    findDOMNode() {
      var _a2, _b;
      return ((_b = (_a2 = this.props) == null ? void 0 : _a2.nodeRef) == null ? void 0 : _b.current) ?? r.default.findDOMNode(this);
    }
    render() {
      const { axis: f, bounds: g, children: y, defaultPosition: x, defaultClassName: C, defaultClassNameDragging: P, defaultClassNameDragged: k, position: R, positionOffset: c, scale: M, ...I } = this.props;
      let z = {}, L = null;
      const K = !!!R || this.state.dragging, Fe = R || x, O = { x: (0, l.canDragX)(this) && K ? this.state.x : Fe.x, y: (0, l.canDragY)(this) && K ? this.state.y : Fe.y };
      this.state.isElementSVG ? L = (0, i.createSVGTransform)(O, c) : z = (0, i.createCSSTransform)(O, c);
      const D = (0, o.clsx)(y.props.className || "", C, { [P]: this.state.dragging, [k]: this.state.dragged });
      return t.createElement(a.default, m({}, I, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }), t.cloneElement(t.Children.only(y), { className: D, style: { ...y.props.style, ...z }, transform: L }));
    }
  }
  e2.default = _, v(_, "displayName", "Draggable"), v(_, "propTypes", { ...a.default.propTypes, axis: n.default.oneOf(["both", "x", "y", "none"]), bounds: n.default.oneOfType([n.default.shape({ left: n.default.number, right: n.default.number, top: n.default.number, bottom: n.default.number }), n.default.string, n.default.oneOf([false])]), defaultClassName: n.default.string, defaultClassNameDragging: n.default.string, defaultClassNameDragged: n.default.string, defaultPosition: n.default.shape({ x: n.default.number, y: n.default.number }), positionOffset: n.default.shape({ x: n.default.oneOfType([n.default.number, n.default.string]), y: n.default.oneOfType([n.default.number, n.default.string]) }), position: n.default.shape({ x: n.default.number, y: n.default.number }), className: s.dontSetMe, style: s.dontSetMe, transform: s.dontSetMe }), v(_, "defaultProps", { ...a.default.defaultProps, axis: "both", bounds: false, defaultClassName: "react-draggable", defaultClassNameDragging: "react-draggable-dragging", defaultClassNameDragged: "react-draggable-dragged", defaultPosition: { x: 0, y: 0 }, scale: 1 });
})(tg);
const { default: ug, DraggableCore: uC } = tg;
Es.exports = ug;
Es.exports.default = ug;
Es.exports.DraggableCore = uC;
var cC = Es.exports;
const fC = ku(cC), dC = nr($.jsx("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" })), pC = nr($.jsx("path", { d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" })), hC = nr($.jsx("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), mC = nr($.jsx("path", { d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H6V6h12z" })), gC = nr($.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" })), yC = nr($.jsx("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z" })), vC = nr($.jsx("path", { d: "M19 13H5v-2h14z" }));
function SC({ content: e2, colors: t }) {
  const n = { left: [$.jsx(dC, { fontSize: "small" }), $.jsx(pC, { fontSize: "small" }), $.jsx(yC, { fontSize: "small" })], right: [$.jsx(gC, { fontSize: "small" })] };
  return $.jsxs(qe, { sx: { display: "flex", alignItems: "center", px: 1, py: 0.5, borderBottom: `1px solid ${t.brd}` }, children: [n.left.map((r, o) => $.jsx(To, { sx: { color: t.btns }, size: "small", children: r }, o)), $.jsx(qe, { sx: { flexGrow: 1, mx: 1, px: 2, py: 0.5, backgroundColor: "white", borderRadius: 100, border: `1px solid ${t.brd}`, display: "flex", alignItems: "center", overflow: "hidden", pointerEvents: "auto" }, children: $.jsx(Jm, { variant: "body2", color: "text.secondary", noWrap: true, children: e2.pageUrl || "https://example.com" }) }), n.right.map((r, o) => $.jsx(To, { sx: { color: t.btns }, size: "small", children: r }, o))] });
}
function wC({ platform: e2, colors: t }) {
  const n = e2 === "mac";
  return $.jsx(qe, { sx: { display: "flex", justifyContent: n ? "flex-start" : "space-between", alignItems: "center", py: 0.25, cursor: "grab" }, children: $.jsx(xC, { isMac: n, colors: t }) });
}
function xC({ isMac: e2 = false, colors: t }) {
  const n = { width: 12, height: 12, borderRadius: "50%" };
  return $.jsx($.Fragment, { children: e2 ? $.jsxs(qe, { sx: { display: "flex", gap: 1, p: 1.5 }, children: [$.jsx(qe, { sx: { ...n, backgroundColor: "#ff5f56" } }), $.jsx(qe, { sx: { ...n, backgroundColor: "#ffbd2e" } }), $.jsx(qe, { sx: { ...n, backgroundColor: "#27c93f" } })] }) : $.jsxs(qe, { sx: { display: "flex", justifyContent: "flex-end", width: "100%" }, children: [$.jsx(To, { size: "small", sx: { px: 1.5, py: 1, borderRadius: 0, color: t.btns }, children: $.jsx(vC, { fontSize: "inherit" }) }), $.jsx(To, { size: "small", sx: { px: 1.5, py: 1, borderRadius: 0, color: t.btns }, children: $.jsx(mC, { fontSize: "inherit" }) }), $.jsx(To, { size: "small", sx: { px: 1.5, py: 1, borderRadius: 0, color: t.btns }, children: $.jsx(hC, { fontSize: "inherit" }) })] }) });
}
function CC({ content: e2 = { imgUrl: null, pageUrl: null, dims: { width: 800, height: 600 } }, platform: t = "mac", position: n = { top: 0, left: 0 }, mode: r = "light", active: o = false, onClick: i = () => {
}, imgBackground: l = true, zIndex: s = 1 }) {
  const a = ss(), u = a.colors[r] || a.colors.light, [h, d] = T.useState(false), m = 150, v = T.useRef(0), S = { backgroundImage: e2.imgUrl ? `url(${e2.imgUrl})` : "none", backgroundSize: "300%", backgroundPosition: "center" };
  return $.jsx(fC, { handle: ".drag-handle", bounds: "#root", onMouseDown: (w) => {
    w.stopPropagation(), i();
  }, children: $.jsx(xx, { in: h, timeout: 600, children: $.jsxs(jw, { elevation: o ? 10 : 1, sx: { minWidth: "600px", maxWidth: "600px", opacity: h ? 1 : 0, transform: h ? "scale(1)" : "scale(0.9)", transformOrigin: "center", transition: "opacity 0.6s ease, transform 0.6s ease", borderRadius: 2, overflow: "hidden", backgroundColor: u.main, border: `1px solid ${u.brd}`, position: "absolute", zIndex: o ? 1e3 : s, ...n, ...l ? S : {} }, className: "browser", children: [$.jsxs(qe, { sx: { backdropFilter: "blur(50px)" }, className: "drag-handle", children: [$.jsx(wC, { platform: t, colors: u }), $.jsx(SC, { content: e2, colors: u })] }), $.jsx(qe, { sx: { backgroundColor: "#fff", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }, className: "drag-handle", onMouseDown: () => {
    v.current = Date.now();
  }, onMouseUp: () => {
    Date.now() - v.current < m && e2.pageUrl && window.open(e2.pageUrl, "_blank");
  }, children: e2.imgUrl ? $.jsx("img", { src: e2.imgUrl, alt: e2.title, draggable: false, onLoad: () => d(true), style: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" } }) : $.jsx(Jm, { variant: "body2", color: "text.secondary", children: "No image loaded" }) })] }) }) });
}
function kC() {
  if (navigator.userAgentData) return navigator.userAgentData.platform.toLowerCase().includes("mac") ? "mac" : "win";
  const e2 = navigator.userAgent.toLowerCase();
  return e2.includes("macintosh") || e2.includes("mac os x") ? "mac" : e2.includes("windows") ? "win" : "unknown";
}
function EC({ manifest: e2 }) {
  const [t, n] = T.useState("win"), [r, o] = T.useState([]), [i, l] = T.useState(null), [s, a] = T.useState([]);
  T.useEffect(() => {
    n(kC());
  }, []), T.useEffect(() => {
    e2.length > 0 && r.length === 0 && o(e2.map((h, d) => d));
  }, [e2]), T.useEffect(() => {
    a([]), e2.forEach((h, d) => {
      setTimeout(() => {
        a((m) => [...m, d]);
      }, d * 100);
    });
  }, [e2]);
  const u = (h) => {
    l(h), o((d) => {
      const m = d.filter((v) => v !== h);
      return m.push(h), m;
    });
  };
  return $.jsx($.Fragment, { children: e2.length > 0 && e2.map((h, d) => {
    if (!s.includes(d)) return null;
    const m = r.indexOf(d);
    return $.jsx(CC, { content: { imgUrl: h.imgUrl, pageUrl: h.pageUrl, dims: h.dims || { width: 800, height: 600 }, title: h.title || "Mockup Content" }, position: h.position, platform: t, mode: "light", active: i === d, zIndex: m, onClick: () => u(d) }, d);
  }) });
}
function TC() {
  const e2 = ss();
  return e2.colors.dark || e2.colors.light, $.jsxs(qe, { sx: { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", color: "white", backgroundColor: "rgba(0,0,0,1)", zIndex: -1 }, children: [$.jsx(qe, { sx: { position: "fixed", top: 0, left: 0, p: 4, fontSize: "2rem", fontFamily: "Manrope, sans-serif", fontWeight: 800 }, children: "Iacopo Neri" }), $.jsx(qe, { sx: { position: "fixed", bottom: 0, right: 0, p: 4, width: "25vw", textAlign: "justify", fontSize: "0.8rem", fontFamily: "Work-Sans, sans-serif" }, children: "With a research at the intersection of design, computer science, and the humanities, Iacopo Neri has been involved in teaching activities since 2015 in several institutions around Europe. Currently serving as scientific collaborator for the MPG Center for Digital Visual Studies and Computational Lead for IAAC, he is passionate about the implications of machine learning for urban, cultural and social studies." })] });
}
const PC = { light: { main: "transparent", btns: "rgba(100,100,100)", brd: "rgba(192,192,192)", background: "rgba(240,240,240,1)" }, dark: { main: "rgba(31,31,31)", btns: "rgba(150,150,150)", brd: "rgba(63,63,63)", background: "rgba(15,15,15,1)" } };
let _C = ls({ colors: PC });
function MC() {
  const [e2, t] = T.useState([]);
  return T.useEffect(() => {
    fetch("/manifest.json").then((n) => n.json()).then((n) => {
      n.forEach((r) => {
        r.position = {}, r.position.top = `${Math.floor(Math.random() * 50) + 10}%`, r.position.left = `${Math.floor(Math.random() * Math.random() * 80) + 10}%`;
      }), console.log(n), t(n.sort(() => Math.random() - 0.5));
    }).catch((n) => {
      console.error("Error fetching manifest:", n);
    });
  }, []), $.jsx($.Fragment, { children: $.jsxs(v1, { theme: _C, children: [$.jsx(Mx, {}), $.jsx(EC, { manifest: e2 }), $.jsx(TC, {})] }) });
}
const $C = Cu.createRoot(document.getElementById("root"));
$C.render($.jsx(MC, {}));
