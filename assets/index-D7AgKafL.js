var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function og(e2, t) {
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
function zd(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
function ig(e2) {
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
var Id = { exports: {} }, Cl = {}, Ld = { exports: {} }, L = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Wo = Symbol.for("react.element"), lg = Symbol.for("react.portal"), sg = Symbol.for("react.fragment"), ag = Symbol.for("react.strict_mode"), ug = Symbol.for("react.profiler"), cg = Symbol.for("react.provider"), fg = Symbol.for("react.context"), dg = Symbol.for("react.forward_ref"), pg = Symbol.for("react.suspense"), hg = Symbol.for("react.memo"), mg = Symbol.for("react.lazy"), Hc = Symbol.iterator;
function gg(e2) {
  return e2 === null || typeof e2 != "object" ? null : (e2 = Hc && e2[Hc] || e2["@@iterator"], typeof e2 == "function" ? e2 : null);
}
var Fd = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Bd = Object.assign, Ud = {};
function Br(e2, t, n) {
  this.props = e2, this.context = t, this.refs = Ud, this.updater = n || Fd;
}
Br.prototype.isReactComponent = {};
Br.prototype.setState = function(e2, t) {
  if (typeof e2 != "object" && typeof e2 != "function" && e2 != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e2, t, "setState");
};
Br.prototype.forceUpdate = function(e2) {
  this.updater.enqueueForceUpdate(this, e2, "forceUpdate");
};
function Wd() {
}
Wd.prototype = Br.prototype;
function yu(e2, t, n) {
  this.props = e2, this.context = t, this.refs = Ud, this.updater = n || Fd;
}
var vu = yu.prototype = new Wd();
vu.constructor = yu;
Bd(vu, Br.prototype);
vu.isPureReactComponent = true;
var Kc = Array.isArray, Vd = Object.prototype.hasOwnProperty, Su = { current: null }, Hd = { key: true, ref: true, __self: true, __source: true };
function Kd(e2, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) Vd.call(t, r) && !Hd.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e2 && e2.defaultProps) for (r in s = e2.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Wo, type: e2, key: i, ref: l, props: o, _owner: Su.current };
}
function yg(e2, t) {
  return { $$typeof: Wo, type: e2.type, key: t, ref: e2.ref, props: e2.props, _owner: e2._owner };
}
function wu(e2) {
  return typeof e2 == "object" && e2 !== null && e2.$$typeof === Wo;
}
function vg(e2) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e2.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Yc = /\/+/g;
function $s(e2, t) {
  return typeof e2 == "object" && e2 !== null && e2.key != null ? vg("" + e2.key) : t.toString(36);
}
function _i(e2, t, n, r, o) {
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
        case Wo:
        case lg:
          l = true;
      }
  }
  if (l) return l = e2, o = o(l), e2 = r === "" ? "." + $s(l, 0) : r, Kc(o) ? (n = "", e2 != null && (n = e2.replace(Yc, "$&/") + "/"), _i(o, t, n, "", function(u) {
    return u;
  })) : o != null && (wu(o) && (o = yg(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Yc, "$&/") + "/") + e2)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Kc(e2)) for (var s = 0; s < e2.length; s++) {
    i = e2[s];
    var a = r + $s(i, s);
    l += _i(i, t, n, a, o);
  }
  else if (a = gg(e2), typeof a == "function") for (e2 = a.call(e2), s = 0; !(i = e2.next()).done; ) i = i.value, a = r + $s(i, s++), l += _i(i, t, n, a, o);
  else if (i === "object") throw t = String(e2), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e2).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function ii(e2, t, n) {
  if (e2 == null) return e2;
  var r = [], o = 0;
  return _i(e2, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Sg(e2) {
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
var Le = { current: null }, $i = { transition: null }, wg = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: $i, ReactCurrentOwner: Su };
function Yd() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: ii, forEach: function(e2, t, n) {
  ii(e2, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e2) {
  var t = 0;
  return ii(e2, function() {
    t++;
  }), t;
}, toArray: function(e2) {
  return ii(e2, function(t) {
    return t;
  }) || [];
}, only: function(e2) {
  if (!wu(e2)) throw Error("React.Children.only expected to receive a single React element child.");
  return e2;
} };
L.Component = Br;
L.Fragment = sg;
L.Profiler = ug;
L.PureComponent = yu;
L.StrictMode = ag;
L.Suspense = pg;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wg;
L.act = Yd;
L.cloneElement = function(e2, t, n) {
  if (e2 == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e2 + ".");
  var r = Bd({}, e2.props), o = e2.key, i = e2.ref, l = e2._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Su.current), t.key !== void 0 && (o = "" + t.key), e2.type && e2.type.defaultProps) var s = e2.type.defaultProps;
    for (a in t) Vd.call(t, a) && !Hd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Wo, type: e2.type, key: o, ref: i, props: r, _owner: l };
};
L.createContext = function(e2) {
  return e2 = { $$typeof: fg, _currentValue: e2, _currentValue2: e2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e2.Provider = { $$typeof: cg, _context: e2 }, e2.Consumer = e2;
};
L.createElement = Kd;
L.createFactory = function(e2) {
  var t = Kd.bind(null, e2);
  return t.type = e2, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e2) {
  return { $$typeof: dg, render: e2 };
};
L.isValidElement = wu;
L.lazy = function(e2) {
  return { $$typeof: mg, _payload: { _status: -1, _result: e2 }, _init: Sg };
};
L.memo = function(e2, t) {
  return { $$typeof: hg, type: e2, compare: t === void 0 ? null : t };
};
L.startTransition = function(e2) {
  var t = $i.transition;
  $i.transition = {};
  try {
    e2();
  } finally {
    $i.transition = t;
  }
};
L.unstable_act = Yd;
L.useCallback = function(e2, t) {
  return Le.current.useCallback(e2, t);
};
L.useContext = function(e2) {
  return Le.current.useContext(e2);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e2) {
  return Le.current.useDeferredValue(e2);
};
L.useEffect = function(e2, t) {
  return Le.current.useEffect(e2, t);
};
L.useId = function() {
  return Le.current.useId();
};
L.useImperativeHandle = function(e2, t, n) {
  return Le.current.useImperativeHandle(e2, t, n);
};
L.useInsertionEffect = function(e2, t) {
  return Le.current.useInsertionEffect(e2, t);
};
L.useLayoutEffect = function(e2, t) {
  return Le.current.useLayoutEffect(e2, t);
};
L.useMemo = function(e2, t) {
  return Le.current.useMemo(e2, t);
};
L.useReducer = function(e2, t, n) {
  return Le.current.useReducer(e2, t, n);
};
L.useRef = function(e2) {
  return Le.current.useRef(e2);
};
L.useState = function(e2) {
  return Le.current.useState(e2);
};
L.useSyncExternalStore = function(e2, t, n) {
  return Le.current.useSyncExternalStore(e2, t, n);
};
L.useTransition = function() {
  return Le.current.useTransition();
};
L.version = "18.3.1";
Ld.exports = L;
var P = Ld.exports;
const fr = zd(P), ca = og({ __proto__: null, default: fr }, [P]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var xg = P, Cg = Symbol.for("react.element"), kg = Symbol.for("react.fragment"), Eg = Object.prototype.hasOwnProperty, Pg = xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Tg = { key: true, ref: true, __self: true, __source: true };
function Gd(e2, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Eg.call(t, r) && !Tg.hasOwnProperty(r) && (o[r] = t[r]);
  if (e2 && e2.defaultProps) for (r in t = e2.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Cg, type: e2, key: i, ref: l, props: o, _owner: Pg.current };
}
Cl.Fragment = kg;
Cl.jsx = Gd;
Cl.jsxs = Gd;
Id.exports = Cl;
var M = Id.exports;
const xo = { black: "#000", white: "#fff" }, ir = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" }, lr = { 50: "#f3e5f5", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 700: "#7b1fa2" }, sr = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" }, ar = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" }, ur = { 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20" }, Kr = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" }, _g = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" };
function Hn(e2, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e2}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e2}; visit ${n} for the full message.`;
}
const Ft = "$$material";
function Hi() {
  return Hi = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e2[r] = n[r]);
    }
    return e2;
  }, Hi.apply(null, arguments);
}
function $g(e2) {
  if (e2.sheet) return e2.sheet;
  for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e2) return document.styleSheets[t];
}
function Mg(e2) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e2.key), e2.nonce !== void 0 && t.setAttribute("nonce", e2.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Rg = function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Mg(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = $g(o);
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
}(), Me = "-ms-", Ki = "-moz-", W = "-webkit-", Xd = "comm", xu = "rule", Cu = "decl", Ng = "@import", Qd = "@keyframes", Og = "@layer", bg = Math.abs, kl = String.fromCharCode, Dg = Object.assign;
function Ag(e2, t) {
  return ke(e2, 0) ^ 45 ? (((t << 2 ^ ke(e2, 0)) << 2 ^ ke(e2, 1)) << 2 ^ ke(e2, 2)) << 2 ^ ke(e2, 3) : 0;
}
function Zd(e2) {
  return e2.trim();
}
function jg(e2, t) {
  return (e2 = t.exec(e2)) ? e2[0] : e2;
}
function V(e2, t, n) {
  return e2.replace(t, n);
}
function fa(e2, t) {
  return e2.indexOf(t);
}
function ke(e2, t) {
  return e2.charCodeAt(t) | 0;
}
function Co(e2, t, n) {
  return e2.slice(t, n);
}
function jt(e2) {
  return e2.length;
}
function ku(e2) {
  return e2.length;
}
function li(e2, t) {
  return t.push(e2), e2;
}
function zg(e2, t) {
  return e2.map(t).join("");
}
var El = 1, br = 1, qd = 0, Ge = 0, pe = 0, Ur = "";
function Pl(e2, t, n, r, o, i, l) {
  return { value: e2, root: t, parent: n, type: r, props: o, children: i, line: El, column: br, length: l, return: "" };
}
function Yr(e2, t) {
  return Dg(Pl("", null, null, "", null, null, 0), e2, { length: -e2.length }, t);
}
function Ig() {
  return pe;
}
function Lg() {
  return pe = Ge > 0 ? ke(Ur, --Ge) : 0, br--, pe === 10 && (br = 1, El--), pe;
}
function tt() {
  return pe = Ge < qd ? ke(Ur, Ge++) : 0, br++, pe === 10 && (br = 1, El++), pe;
}
function Bt() {
  return ke(Ur, Ge);
}
function Mi() {
  return Ge;
}
function Vo(e2, t) {
  return Co(Ur, e2, t);
}
function ko(e2) {
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
function Jd(e2) {
  return El = br = 1, qd = jt(Ur = e2), Ge = 0, [];
}
function ep(e2) {
  return Ur = "", e2;
}
function Ri(e2) {
  return Zd(Vo(Ge - 1, da(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
}
function Fg(e2) {
  for (; (pe = Bt()) && pe < 33; ) tt();
  return ko(e2) > 2 || ko(pe) > 3 ? "" : " ";
}
function Bg(e2, t) {
  for (; --t && tt() && !(pe < 48 || pe > 102 || pe > 57 && pe < 65 || pe > 70 && pe < 97); ) ;
  return Vo(e2, Mi() + (t < 6 && Bt() == 32 && tt() == 32));
}
function da(e2) {
  for (; tt(); ) switch (pe) {
    case e2:
      return Ge;
    case 34:
    case 39:
      e2 !== 34 && e2 !== 39 && da(pe);
      break;
    case 40:
      e2 === 41 && da(e2);
      break;
    case 92:
      tt();
      break;
  }
  return Ge;
}
function Ug(e2, t) {
  for (; tt() && e2 + pe !== 57; ) if (e2 + pe === 84 && Bt() === 47) break;
  return "/*" + Vo(t, Ge - 1) + "*" + kl(e2 === 47 ? e2 : tt());
}
function Wg(e2) {
  for (; !ko(Bt()); ) tt();
  return Vo(e2, Ge);
}
function Vg(e2) {
  return ep(Ni("", null, null, null, [""], e2 = Jd(e2), 0, [0], e2));
}
function Ni(e2, t, n, r, o, i, l, s, a) {
  for (var u = 0, m = 0, p = l, h = 0, S = 0, v = 0, w = 1, _ = 1, d = 1, f = 0, g = "", y = o, x = i, C = r, T = g; _; ) switch (v = f, f = tt()) {
    case 40:
      if (v != 108 && ke(T, p - 1) == 58) {
        fa(T += V(Ri(f), "&", "&\f"), "&\f") != -1 && (d = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      T += Ri(f);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      T += Fg(v);
      break;
    case 92:
      T += Bg(Mi() - 1, 7);
      continue;
    case 47:
      switch (Bt()) {
        case 42:
        case 47:
          li(Hg(Ug(tt(), Mi()), t, n), a);
          break;
        default:
          T += "/";
      }
      break;
    case 123 * w:
      s[u++] = jt(T) * d;
    case 125 * w:
    case 59:
    case 0:
      switch (f) {
        case 0:
        case 125:
          _ = 0;
        case 59 + m:
          d == -1 && (T = V(T, /\f/g, "")), S > 0 && jt(T) - p && li(S > 32 ? Xc(T + ";", r, n, p - 1) : Xc(V(T, " ", "") + ";", r, n, p - 2), a);
          break;
        case 59:
          T += ";";
        default:
          if (li(C = Gc(T, t, n, u, m, o, s, g, y = [], x = [], p), i), f === 123) if (m === 0) Ni(T, t, C, C, y, i, p, s, x);
          else switch (h === 99 && ke(T, 3) === 110 ? 100 : h) {
            case 100:
            case 108:
            case 109:
            case 115:
              Ni(e2, C, C, r && li(Gc(e2, C, C, 0, 0, o, s, g, o, y = [], p), x), o, x, p, s, r ? y : x);
              break;
            default:
              Ni(T, C, C, C, [""], x, 0, s, x);
          }
      }
      u = m = S = 0, w = d = 1, g = T = "", p = l;
      break;
    case 58:
      p = 1 + jt(T), S = v;
    default:
      if (w < 1) {
        if (f == 123) --w;
        else if (f == 125 && w++ == 0 && Lg() == 125) continue;
      }
      switch (T += kl(f), f * w) {
        case 38:
          d = m > 0 ? 1 : (T += "\f", -1);
          break;
        case 44:
          s[u++] = (jt(T) - 1) * d, d = 1;
          break;
        case 64:
          Bt() === 45 && (T += Ri(tt())), h = Bt(), m = p = jt(g = T += Wg(Mi())), f++;
          break;
        case 45:
          v === 45 && jt(T) == 2 && (w = 0);
      }
  }
  return i;
}
function Gc(e2, t, n, r, o, i, l, s, a, u, m) {
  for (var p = o - 1, h = o === 0 ? i : [""], S = ku(h), v = 0, w = 0, _ = 0; v < r; ++v) for (var d = 0, f = Co(e2, p + 1, p = bg(w = l[v])), g = e2; d < S; ++d) (g = Zd(w > 0 ? h[d] + " " + f : V(f, /&\f/g, h[d]))) && (a[_++] = g);
  return Pl(e2, t, n, o === 0 ? xu : s, a, u, m);
}
function Hg(e2, t, n) {
  return Pl(e2, t, n, Xd, kl(Ig()), Co(e2, 2, -2), 0);
}
function Xc(e2, t, n, r) {
  return Pl(e2, t, n, Cu, Co(e2, 0, r), Co(e2, r + 1, -1), r);
}
function Pr(e2, t) {
  for (var n = "", r = ku(e2), o = 0; o < r; o++) n += t(e2[o], o, e2, t) || "";
  return n;
}
function Kg(e2, t, n, r) {
  switch (e2.type) {
    case Og:
      if (e2.children.length) break;
    case Ng:
    case Cu:
      return e2.return = e2.return || e2.value;
    case Xd:
      return "";
    case Qd:
      return e2.return = e2.value + "{" + Pr(e2.children, r) + "}";
    case xu:
      e2.value = e2.props.join(",");
  }
  return jt(n = Pr(e2.children, r)) ? e2.return = e2.value + "{" + n + "}" : "";
}
function Yg(e2) {
  var t = ku(e2);
  return function(n, r, o, i) {
    for (var l = "", s = 0; s < t; s++) l += e2[s](n, r, o, i) || "";
    return l;
  };
}
function Gg(e2) {
  return function(t) {
    t.root || (t = t.return) && e2(t);
  };
}
function tp(e2) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e2(n)), t[n];
  };
}
var Xg = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Bt(), o === 38 && i === 12 && (n[r] = 1), !ko(i); ) tt();
  return Vo(t, Ge);
}, Qg = function(t, n) {
  var r = -1, o = 44;
  do
    switch (ko(o)) {
      case 0:
        o === 38 && Bt() === 12 && (n[r] = 1), t[r] += Xg(Ge - 1, n, r);
        break;
      case 2:
        t[r] += Ri(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Bt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += kl(o);
    }
  while (o = tt());
  return t;
}, Zg = function(t, n) {
  return ep(Qg(Jd(t), n));
}, Qc = /* @__PURE__ */ new WeakMap(), qg = function(t) {
  if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Qc.get(r)) && !o) {
      Qc.set(t, true);
      for (var i = [], l = Zg(n, i), s = r.props, a = 0, u = 0; a < l.length; a++) for (var m = 0; m < s.length; m++, u++) t.props[u] = i[a] ? l[a].replace(/&\f/g, s[m]) : s[m] + " " + l[a];
    }
  }
}, Jg = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function np(e2, t) {
  switch (Ag(e2, t)) {
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
      return W + e2 + Ki + e2 + Me + e2 + e2;
    case 6828:
    case 4268:
      return W + e2 + Me + e2 + e2;
    case 6165:
      return W + e2 + Me + "flex-" + e2 + e2;
    case 5187:
      return W + e2 + V(e2, /(\w+).+(:[^]+)/, W + "box-$1$2" + Me + "flex-$1$2") + e2;
    case 5443:
      return W + e2 + Me + "flex-item-" + V(e2, /flex-|-self/, "") + e2;
    case 4675:
      return W + e2 + Me + "flex-line-pack" + V(e2, /align-content|flex-|-self/, "") + e2;
    case 5548:
      return W + e2 + Me + V(e2, "shrink", "negative") + e2;
    case 5292:
      return W + e2 + Me + V(e2, "basis", "preferred-size") + e2;
    case 6060:
      return W + "box-" + V(e2, "-grow", "") + W + e2 + Me + V(e2, "grow", "positive") + e2;
    case 4554:
      return W + V(e2, /([^-])(transform)/g, "$1" + W + "$2") + e2;
    case 6187:
      return V(V(V(e2, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), e2, "") + e2;
    case 5495:
    case 3959:
      return V(e2, /(image-set\([^]*)/, W + "$1$`$1");
    case 4968:
      return V(V(e2, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + Me + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + e2 + e2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return V(e2, /(.+)-inline(.+)/, W + "$1$2") + e2;
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
      if (jt(e2) - 1 - t > 6) switch (ke(e2, t + 1)) {
        case 109:
          if (ke(e2, t + 4) !== 45) break;
        case 102:
          return V(e2, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + Ki + (ke(e2, t + 3) == 108 ? "$3" : "$2-$3")) + e2;
        case 115:
          return ~fa(e2, "stretch") ? np(V(e2, "stretch", "fill-available"), t) + e2 : e2;
      }
      break;
    case 4949:
      if (ke(e2, t + 1) !== 115) break;
    case 6444:
      switch (ke(e2, jt(e2) - 3 - (~fa(e2, "!important") && 10))) {
        case 107:
          return V(e2, ":", ":" + W) + e2;
        case 101:
          return V(e2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + W + (ke(e2, 14) === 45 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + Me + "$2box$3") + e2;
      }
      break;
    case 5936:
      switch (ke(e2, t + 11)) {
        case 114:
          return W + e2 + Me + V(e2, /[svh]\w+-[tblr]{2}/, "tb") + e2;
        case 108:
          return W + e2 + Me + V(e2, /[svh]\w+-[tblr]{2}/, "tb-rl") + e2;
        case 45:
          return W + e2 + Me + V(e2, /[svh]\w+-[tblr]{2}/, "lr") + e2;
      }
      return W + e2 + Me + e2 + e2;
  }
  return e2;
}
var ey = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Cu:
      t.return = np(t.value, t.length);
      break;
    case Qd:
      return Pr([Yr(t, { value: V(t.value, "@", "@" + W) })], o);
    case xu:
      if (t.length) return zg(t.props, function(i) {
        switch (jg(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Pr([Yr(t, { props: [V(i, /:(read-\w+)/, ":" + Ki + "$1")] })], o);
          case "::placeholder":
            return Pr([Yr(t, { props: [V(i, /:(plac\w+)/, ":" + W + "input-$1")] }), Yr(t, { props: [V(i, /:(plac\w+)/, ":" + Ki + "$1")] }), Yr(t, { props: [V(i, /:(plac\w+)/, Me + "input-$1")] })], o);
        }
        return "";
      });
  }
}, ty = [ey], ny = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(w) {
      var _ = w.getAttribute("data-emotion");
      _.indexOf(" ") !== -1 && (document.head.appendChild(w), w.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || ty, i = {}, l, s = [];
  l = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(w) {
    for (var _ = w.getAttribute("data-emotion").split(" "), d = 1; d < _.length; d++) i[_[d]] = true;
    s.push(w);
  });
  var a, u = [qg, Jg];
  {
    var m, p = [Kg, Gg(function(w) {
      m.insert(w);
    })], h = Yg(u.concat(o, p)), S = function(_) {
      return Pr(Vg(_), h);
    };
    a = function(_, d, f, g) {
      m = f, S(_ ? _ + "{" + d.styles + "}" : d.styles), g && (v.inserted[d.name] = true);
    };
  }
  var v = { key: n, sheet: new Rg({ key: n, container: l, nonce: t.nonce, speedy: t.speedy, prepend: t.prepend, insertionPoint: t.insertionPoint }), nonce: t.nonce, inserted: i, registered: {}, insert: a };
  return v.sheet.hydrate(s), v;
}, rp = { exports: {} }, Y = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var xe = typeof Symbol == "function" && Symbol.for, Eu = xe ? Symbol.for("react.element") : 60103, Pu = xe ? Symbol.for("react.portal") : 60106, Tl = xe ? Symbol.for("react.fragment") : 60107, _l = xe ? Symbol.for("react.strict_mode") : 60108, $l = xe ? Symbol.for("react.profiler") : 60114, Ml = xe ? Symbol.for("react.provider") : 60109, Rl = xe ? Symbol.for("react.context") : 60110, Tu = xe ? Symbol.for("react.async_mode") : 60111, Nl = xe ? Symbol.for("react.concurrent_mode") : 60111, Ol = xe ? Symbol.for("react.forward_ref") : 60112, bl = xe ? Symbol.for("react.suspense") : 60113, ry = xe ? Symbol.for("react.suspense_list") : 60120, Dl = xe ? Symbol.for("react.memo") : 60115, Al = xe ? Symbol.for("react.lazy") : 60116, oy = xe ? Symbol.for("react.block") : 60121, iy = xe ? Symbol.for("react.fundamental") : 60117, ly = xe ? Symbol.for("react.responder") : 60118, sy = xe ? Symbol.for("react.scope") : 60119;
function it(e2) {
  if (typeof e2 == "object" && e2 !== null) {
    var t = e2.$$typeof;
    switch (t) {
      case Eu:
        switch (e2 = e2.type, e2) {
          case Tu:
          case Nl:
          case Tl:
          case $l:
          case _l:
          case bl:
            return e2;
          default:
            switch (e2 = e2 && e2.$$typeof, e2) {
              case Rl:
              case Ol:
              case Al:
              case Dl:
              case Ml:
                return e2;
              default:
                return t;
            }
        }
      case Pu:
        return t;
    }
  }
}
function op(e2) {
  return it(e2) === Nl;
}
Y.AsyncMode = Tu;
Y.ConcurrentMode = Nl;
Y.ContextConsumer = Rl;
Y.ContextProvider = Ml;
Y.Element = Eu;
Y.ForwardRef = Ol;
Y.Fragment = Tl;
Y.Lazy = Al;
Y.Memo = Dl;
Y.Portal = Pu;
Y.Profiler = $l;
Y.StrictMode = _l;
Y.Suspense = bl;
Y.isAsyncMode = function(e2) {
  return op(e2) || it(e2) === Tu;
};
Y.isConcurrentMode = op;
Y.isContextConsumer = function(e2) {
  return it(e2) === Rl;
};
Y.isContextProvider = function(e2) {
  return it(e2) === Ml;
};
Y.isElement = function(e2) {
  return typeof e2 == "object" && e2 !== null && e2.$$typeof === Eu;
};
Y.isForwardRef = function(e2) {
  return it(e2) === Ol;
};
Y.isFragment = function(e2) {
  return it(e2) === Tl;
};
Y.isLazy = function(e2) {
  return it(e2) === Al;
};
Y.isMemo = function(e2) {
  return it(e2) === Dl;
};
Y.isPortal = function(e2) {
  return it(e2) === Pu;
};
Y.isProfiler = function(e2) {
  return it(e2) === $l;
};
Y.isStrictMode = function(e2) {
  return it(e2) === _l;
};
Y.isSuspense = function(e2) {
  return it(e2) === bl;
};
Y.isValidElementType = function(e2) {
  return typeof e2 == "string" || typeof e2 == "function" || e2 === Tl || e2 === Nl || e2 === $l || e2 === _l || e2 === bl || e2 === ry || typeof e2 == "object" && e2 !== null && (e2.$$typeof === Al || e2.$$typeof === Dl || e2.$$typeof === Ml || e2.$$typeof === Rl || e2.$$typeof === Ol || e2.$$typeof === iy || e2.$$typeof === ly || e2.$$typeof === sy || e2.$$typeof === oy);
};
Y.typeOf = it;
rp.exports = Y;
var ay = rp.exports, ip = ay, uy = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, cy = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, lp = {};
lp[ip.ForwardRef] = uy;
lp[ip.Memo] = cy;
var fy = true;
function sp(e2, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e2[o] !== void 0 ? t.push(e2[o] + ";") : o && (r += o + " ");
  }), r;
}
var _u = function(t, n, r) {
  var o = t.key + "-" + n.name;
  (r === false || fy === false) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, $u = function(t, n, r) {
  _u(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, true), i = i.next;
    while (i !== void 0);
  }
};
function dy(e2) {
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
var py = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, hy = /[A-Z]|^ms/g, my = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ap = function(t) {
  return t.charCodeAt(1) === 45;
}, Zc = function(t) {
  return t != null && typeof t != "boolean";
}, Ms = tp(function(e2) {
  return ap(e2) ? e2 : e2.replace(hy, "-$&").toLowerCase();
}), qc = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string") return n.replace(my, function(r, o, i) {
        return zt = { name: o, styles: i, next: zt }, o;
      });
  }
  return py[t] !== 1 && !ap(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Eo(e2, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1) return zt = { name: o.name, styles: o.styles, next: zt }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var l = i.next;
        if (l !== void 0) for (; l !== void 0; ) zt = { name: l.name, styles: l.styles, next: zt }, l = l.next;
        var s = i.styles + ";";
        return s;
      }
      return gy(e2, t, n);
    }
    case "function": {
      if (e2 !== void 0) {
        var a = zt, u = n(e2);
        return zt = a, Eo(e2, t, u);
      }
      break;
    }
  }
  var m = n;
  if (t == null) return m;
  var p = t[m];
  return p !== void 0 ? p : m;
}
function gy(e2, t, n) {
  var r = "";
  if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += Eo(e2, t, n[o]) + ";";
  else for (var i in n) {
    var l = n[i];
    if (typeof l != "object") {
      var s = l;
      t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : Zc(s) && (r += Ms(i) + ":" + qc(i, s) + ";");
    } else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0)) for (var a = 0; a < l.length; a++) Zc(l[a]) && (r += Ms(i) + ":" + qc(i, l[a]) + ";");
    else {
      var u = Eo(e2, t, l);
      switch (i) {
        case "animation":
        case "animationName": {
          r += Ms(i) + ":" + u + ";";
          break;
        }
        default:
          r += i + "{" + u + "}";
      }
    }
  }
  return r;
}
var Jc = /label:\s*([^\s;{]+)\s*(;|$)/g, zt;
function Ho(e2, t, n) {
  if (e2.length === 1 && typeof e2[0] == "object" && e2[0] !== null && e2[0].styles !== void 0) return e2[0];
  var r = true, o = "";
  zt = void 0;
  var i = e2[0];
  if (i == null || i.raw === void 0) r = false, o += Eo(n, t, i);
  else {
    var l = i;
    o += l[0];
  }
  for (var s = 1; s < e2.length; s++) if (o += Eo(n, t, e2[s]), r) {
    var a = i;
    o += a[s];
  }
  Jc.lastIndex = 0;
  for (var u = "", m; (m = Jc.exec(o)) !== null; ) u += "-" + m[1];
  var p = dy(o) + u;
  return { name: p, styles: o, next: zt };
}
var yy = function(t) {
  return t();
}, up = ca.useInsertionEffect ? ca.useInsertionEffect : false, cp = up || yy, ef = up || P.useLayoutEffect, fp = P.createContext(typeof HTMLElement < "u" ? ny({ key: "css" }) : null);
fp.Provider;
var Mu = function(t) {
  return P.forwardRef(function(n, r) {
    var o = P.useContext(fp);
    return t(n, o, r);
  });
}, Ko = P.createContext({}), Ru = {}.hasOwnProperty, pa = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", vy = function(t, n) {
  var r = {};
  for (var o in n) Ru.call(n, o) && (r[o] = n[o]);
  return r[pa] = t, r;
}, Sy = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return _u(n, r, o), cp(function() {
    return $u(n, r, o);
  }), null;
}, wy = Mu(function(e2, t, n) {
  var r = e2.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e2[pa], i = [r], l = "";
  typeof e2.className == "string" ? l = sp(t.registered, i, e2.className) : e2.className != null && (l = e2.className + " ");
  var s = Ho(i, void 0, P.useContext(Ko));
  l += t.key + "-" + s.name;
  var a = {};
  for (var u in e2) Ru.call(e2, u) && u !== "css" && u !== pa && (a[u] = e2[u]);
  return a.className = l, n && (a.ref = n), P.createElement(P.Fragment, null, P.createElement(Sy, { cache: t, serialized: s, isStringTag: typeof o == "string" }), P.createElement(o, a));
}), xy = wy, tf = function(t, n) {
  var r = arguments;
  if (n == null || !Ru.call(n, "css")) return P.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = xy, i[1] = vy(t, n);
  for (var l = 2; l < o; l++) i[l] = r[l];
  return P.createElement.apply(null, i);
};
(function(e2) {
  var t;
  t || (t = e2.JSX || (e2.JSX = {}));
})(tf || (tf = {}));
var Cy = Mu(function(e2, t) {
  var n = e2.styles, r = Ho([n], void 0, P.useContext(Ko)), o = P.useRef();
  return ef(function() {
    var i = t.key + "-global", l = new t.sheet.constructor({ key: i, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }), s = false, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), a !== null && (s = true, a.setAttribute("data-emotion", i), l.hydrate([a])), o.current = [l, s], function() {
      l.flush();
    };
  }, [t]), ef(function() {
    var i = o.current, l = i[0], s = i[1];
    if (s) {
      i[1] = false;
      return;
    }
    if (r.next !== void 0 && $u(t, r.next, true), l.tags.length) {
      var a = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = a, l.flush();
    }
    t.insert("", r, l, false);
  }, [t, r.name]), null;
});
function Nu() {
  for (var e2 = arguments.length, t = new Array(e2), n = 0; n < e2; n++) t[n] = arguments[n];
  return Ho(t);
}
function Yo() {
  var e2 = Nu.apply(void 0, arguments), t = "animation-" + e2.name;
  return { name: t, styles: "@keyframes " + t + "{" + e2.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var ky = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ey = tp(function(e2) {
  return ky.test(e2) || e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && e2.charCodeAt(2) < 91;
}), Py = Ey, Ty = function(t) {
  return t !== "theme";
}, nf = function(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96 ? Py : Ty;
}, rf = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(l) {
      return t.__emotion_forwardProp(l) && i(l);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, _y = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return _u(n, r, o), cp(function() {
    return $u(n, r, o);
  }), null;
}, $y = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, l;
  n !== void 0 && (i = n.label, l = n.target);
  var s = rf(t, n, r), a = s || nf(o), u = !a("as");
  return function() {
    var m = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0) p.push.apply(p, m);
    else {
      var h = m[0];
      p.push(h[0]);
      for (var S = m.length, v = 1; v < S; v++) p.push(m[v], h[v]);
    }
    var w = Mu(function(_, d, f) {
      var g = u && _.as || o, y = "", x = [], C = _;
      if (_.theme == null) {
        C = {};
        for (var T in _) C[T] = _[T];
        C.theme = P.useContext(Ko);
      }
      typeof _.className == "string" ? y = sp(d.registered, x, _.className) : _.className != null && (y = _.className + " ");
      var E = Ho(p.concat(x), d.registered, C);
      y += d.key + "-" + E.name, l !== void 0 && (y += " " + l);
      var N = u && s === void 0 ? nf(g) : a, c = {};
      for (var $ in _) u && $ === "as" || N($) && (c[$] = _[$]);
      return c.className = y, f && (c.ref = f), P.createElement(P.Fragment, null, P.createElement(_y, { cache: d, serialized: E, isStringTag: typeof g == "string" }), P.createElement(g, c));
    });
    return w.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = o, w.__emotion_styles = p, w.__emotion_forwardProp = s, Object.defineProperty(w, "toString", { value: function() {
      return "." + l;
    } }), w.withComponent = function(_, d) {
      var f = e(_, Hi({}, n, d, { shouldForwardProp: rf(w, d, true) }));
      return f.apply(void 0, p);
    }, w;
  };
}, My = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], ha = $y.bind(null);
My.forEach(function(e2) {
  ha[e2] = ha(e2);
});
var dp = { exports: {} }, Ry = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Ny = Ry, Oy = Ny;
function pp() {
}
function hp() {
}
hp.resetWarningCache = pp;
var by = function() {
  function e2(r, o, i, l, s, a) {
    if (a !== Oy) {
      var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw u.name = "Invariant Violation", u;
    }
  }
  e2.isRequired = e2;
  function t() {
    return e2;
  }
  var n = { array: e2, bigint: e2, bool: e2, func: e2, number: e2, object: e2, string: e2, symbol: e2, any: e2, arrayOf: t, element: e2, elementType: e2, instanceOf: t, node: e2, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: hp, resetWarningCache: pp };
  return n.PropTypes = n, n;
};
dp.exports = by();
var mp = dp.exports;
function Dy(e2) {
  return e2 == null || Object.keys(e2).length === 0;
}
function gp(e2) {
  const { styles: t, defaultTheme: n = {} } = e2, r = typeof t == "function" ? (o) => t(Dy(o) ? n : o) : t;
  return M.jsx(Cy, { styles: r });
}
function yp(e2, t) {
  return ha(e2, t);
}
function Ay(e2, t) {
  Array.isArray(e2.__emotion_styles) && (e2.__emotion_styles = t(e2.__emotion_styles));
}
const of = [];
function lf(e2) {
  return of[0] = e2, Ho(of);
}
var vp = { exports: {} }, Q = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ou = Symbol.for("react.transitional.element"), bu = Symbol.for("react.portal"), jl = Symbol.for("react.fragment"), zl = Symbol.for("react.strict_mode"), Il = Symbol.for("react.profiler"), Ll = Symbol.for("react.consumer"), Fl = Symbol.for("react.context"), Bl = Symbol.for("react.forward_ref"), Ul = Symbol.for("react.suspense"), Wl = Symbol.for("react.suspense_list"), Vl = Symbol.for("react.memo"), Hl = Symbol.for("react.lazy"), jy = Symbol.for("react.view_transition"), zy = Symbol.for("react.client.reference");
function wt(e2) {
  if (typeof e2 == "object" && e2 !== null) {
    var t = e2.$$typeof;
    switch (t) {
      case Ou:
        switch (e2 = e2.type, e2) {
          case jl:
          case Il:
          case zl:
          case Ul:
          case Wl:
          case jy:
            return e2;
          default:
            switch (e2 = e2 && e2.$$typeof, e2) {
              case Fl:
              case Bl:
              case Hl:
              case Vl:
                return e2;
              case Ll:
                return e2;
              default:
                return t;
            }
        }
      case bu:
        return t;
    }
  }
}
Q.ContextConsumer = Ll;
Q.ContextProvider = Fl;
Q.Element = Ou;
Q.ForwardRef = Bl;
Q.Fragment = jl;
Q.Lazy = Hl;
Q.Memo = Vl;
Q.Portal = bu;
Q.Profiler = Il;
Q.StrictMode = zl;
Q.Suspense = Ul;
Q.SuspenseList = Wl;
Q.isContextConsumer = function(e2) {
  return wt(e2) === Ll;
};
Q.isContextProvider = function(e2) {
  return wt(e2) === Fl;
};
Q.isElement = function(e2) {
  return typeof e2 == "object" && e2 !== null && e2.$$typeof === Ou;
};
Q.isForwardRef = function(e2) {
  return wt(e2) === Bl;
};
Q.isFragment = function(e2) {
  return wt(e2) === jl;
};
Q.isLazy = function(e2) {
  return wt(e2) === Hl;
};
Q.isMemo = function(e2) {
  return wt(e2) === Vl;
};
Q.isPortal = function(e2) {
  return wt(e2) === bu;
};
Q.isProfiler = function(e2) {
  return wt(e2) === Il;
};
Q.isStrictMode = function(e2) {
  return wt(e2) === zl;
};
Q.isSuspense = function(e2) {
  return wt(e2) === Ul;
};
Q.isSuspenseList = function(e2) {
  return wt(e2) === Wl;
};
Q.isValidElementType = function(e2) {
  return typeof e2 == "string" || typeof e2 == "function" || e2 === jl || e2 === Il || e2 === zl || e2 === Ul || e2 === Wl || typeof e2 == "object" && e2 !== null && (e2.$$typeof === Hl || e2.$$typeof === Vl || e2.$$typeof === Fl || e2.$$typeof === Ll || e2.$$typeof === Bl || e2.$$typeof === zy || e2.getModuleId !== void 0);
};
Q.typeOf = wt;
vp.exports = Q;
var Sp = vp.exports;
function It(e2) {
  if (typeof e2 != "object" || e2 === null) return false;
  const t = Object.getPrototypeOf(e2);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e2) && !(Symbol.iterator in e2);
}
function wp(e2) {
  if (P.isValidElement(e2) || Sp.isValidElementType(e2) || !It(e2)) return e2;
  const t = {};
  return Object.keys(e2).forEach((n) => {
    t[n] = wp(e2[n]);
  }), t;
}
function ze(e2, t, n = { clone: true }) {
  const r = n.clone ? { ...e2 } : e2;
  return It(e2) && It(t) && Object.keys(t).forEach((o) => {
    P.isValidElement(t[o]) || Sp.isValidElementType(t[o]) ? r[o] = t[o] : It(t[o]) && Object.prototype.hasOwnProperty.call(e2, o) && It(e2[o]) ? r[o] = ze(e2[o], t[o], n) : n.clone ? r[o] = It(t[o]) ? wp(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Iy = (e2) => {
  const t = Object.keys(e2).map((n) => ({ key: n, val: e2[n] })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({ ...n, [r.key]: r.val }), {});
};
function Ly(e2) {
  const { values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: n = "px", step: r = 5, ...o } = e2, i = Iy(t), l = Object.keys(i);
  function s(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function a(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function u(h, S) {
    const v = l.indexOf(S);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(v !== -1 && typeof t[l[v]] == "number" ? t[l[v]] : S) - r / 100}${n})`;
  }
  function m(h) {
    return l.indexOf(h) + 1 < l.length ? u(h, l[l.indexOf(h) + 1]) : s(h);
  }
  function p(h) {
    const S = l.indexOf(h);
    return S === 0 ? s(l[1]) : S === l.length - 1 ? a(l[S]) : u(h, l[l.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return { keys: l, values: i, up: s, down: a, between: u, only: m, not: p, unit: n, ...o };
}
function Fy(e2, t) {
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
function By(e2, t) {
  return t === "@" || t.startsWith("@") && (e2.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Uy(e2, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e2.containerQueries(o).up(i);
}
function Wy(e2) {
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
const Vy = { borderRadius: 4 };
function uo(e2, t) {
  return t ? ze(e2, t, { clone: false }) : e2;
}
const Kl = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, sf = { keys: ["xs", "sm", "md", "lg", "xl"], up: (e2) => `@media (min-width:${Kl[e2]}px)` }, Hy = { containerQueries: (e2) => ({ up: (t) => {
  let n = typeof t == "number" ? t : Kl[t] || t;
  return typeof n == "number" && (n = `${n}px`), e2 ? `@container ${e2} (min-width:${n})` : `@container (min-width:${n})`;
} }) };
function Rt(e2, t, n) {
  const r = e2.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || sf;
    return t.reduce((l, s, a) => (l[i.up(i.keys[a])] = n(t[a]), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || sf;
    return Object.keys(t).reduce((l, s) => {
      if (By(i.keys, s)) {
        const a = Uy(r.containerQueries ? r : Hy, s);
        a && (l[a] = n(t[s], s));
      } else if (Object.keys(i.values || Kl).includes(s)) {
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
function xp(e2 = {}) {
  var _a2;
  return ((_a2 = e2.keys) == null ? void 0 : _a2.reduce((n, r) => {
    const o = e2.up(r);
    return n[o] = {}, n;
  }, {})) || {};
}
function Cp(e2, t) {
  return e2.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Ky(e2, ...t) {
  const n = xp(e2), r = [n, ...t].reduce((o, i) => ze(o, i), {});
  return Cp(Object.keys(n), r);
}
function Yy(e2, t) {
  if (typeof e2 != "object") return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e2) ? r.forEach((o, i) => {
    i < e2.length && (n[o] = true);
  }) : r.forEach((o) => {
    e2[o] != null && (n[o] = true);
  }), n;
}
function Rs({ values: e2, breakpoints: t, base: n }) {
  const r = n || Yy(e2, t), o = Object.keys(r);
  if (o.length === 0) return e2;
  let i;
  return o.reduce((l, s, a) => (Array.isArray(e2) ? (l[s] = e2[a] != null ? e2[a] : e2[i], i = a) : typeof e2 == "object" ? (l[s] = e2[s] != null ? e2[s] : e2[i], i = s) : l[s] = e2, l), {});
}
function ve(e2) {
  if (typeof e2 != "string") throw new Error(Hn(7));
  return e2.charAt(0).toUpperCase() + e2.slice(1);
}
function Yl(e2, t, n = true) {
  if (!t || typeof t != "string") return null;
  if (e2 && e2.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e2);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e2);
}
function Yi(e2, t, n, r = n) {
  let o;
  return typeof e2 == "function" ? o = e2(n) : Array.isArray(e2) ? o = e2[n] || r : o = Yl(e2, n) || r, t && (o = t(o, r, e2)), o;
}
function de(e2) {
  const { prop: t, cssProperty: n = e2.prop, themeKey: r, transform: o } = e2, i = (l) => {
    if (l[t] == null) return null;
    const s = l[t], a = l.theme, u = Yl(a, r) || {};
    return Rt(l, s, (p) => {
      let h = Yi(u, o, p);
      return p === h && typeof p == "string" && (h = Yi(u, o, `${t}${p === "default" ? "" : ve(p)}`, p)), n === false ? h : { [n]: h };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Gy(e2) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e2(n)), t[n]);
}
const Xy = { m: "margin", p: "padding" }, Qy = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, af = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, Zy = Gy((e2) => {
  if (e2.length > 2) if (af[e2]) e2 = af[e2];
  else return [e2];
  const [t, n] = e2.split(""), r = Xy[t], o = Qy[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Du = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Au = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Du, ...Au];
function Go(e2, t, n, r) {
  const o = Yl(e2, t, true) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string") return i;
    const l = Math.abs(i), s = o[l];
    return i >= 0 ? s : typeof s == "number" ? -s : typeof s == "string" && s.startsWith("var(") ? `calc(-1 * ${s})` : `-${s}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Gl(e2) {
  return Go(e2, "spacing", 8);
}
function Kn(e2, t) {
  return typeof t == "string" || t == null ? t : e2(t);
}
function qy(e2, t) {
  return (n) => e2.reduce((r, o) => (r[o] = Kn(t, n), r), {});
}
function Jy(e2, t, n, r) {
  if (!t.includes(n)) return null;
  const o = Zy(n), i = qy(o, r), l = e2[n];
  return Rt(e2, l, i);
}
function kp(e2, t) {
  const n = Gl(e2.theme);
  return Object.keys(e2).map((r) => Jy(e2, t, r, n)).reduce(uo, {});
}
function ie(e2) {
  return kp(e2, Du);
}
ie.propTypes = {};
ie.filterProps = Du;
function le(e2) {
  return kp(e2, Au);
}
le.propTypes = {};
le.filterProps = Au;
function Ep(e2 = 8, t = Gl({ spacing: e2 })) {
  if (e2.mui) return e2;
  const n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const l = t(i);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" ");
  return n.mui = true, n;
}
function Xl(...e2) {
  const t = e2.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? uo(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e2.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function pt(e2) {
  return typeof e2 != "number" ? e2 : `${e2}px solid`;
}
function xt(e2, t) {
  return de({ prop: e2, themeKey: "borders", transform: t });
}
const e0 = xt("border", pt), t0 = xt("borderTop", pt), n0 = xt("borderRight", pt), r0 = xt("borderBottom", pt), o0 = xt("borderLeft", pt), i0 = xt("borderColor"), l0 = xt("borderTopColor"), s0 = xt("borderRightColor"), a0 = xt("borderBottomColor"), u0 = xt("borderLeftColor"), c0 = xt("outline", pt), f0 = xt("outlineColor"), Ql = (e2) => {
  if (e2.borderRadius !== void 0 && e2.borderRadius !== null) {
    const t = Go(e2.theme, "shape.borderRadius", 4), n = (r) => ({ borderRadius: Kn(t, r) });
    return Rt(e2, e2.borderRadius, n);
  }
  return null;
};
Ql.propTypes = {};
Ql.filterProps = ["borderRadius"];
Xl(e0, t0, n0, r0, o0, i0, l0, s0, a0, u0, Ql, c0, f0);
const Zl = (e2) => {
  if (e2.gap !== void 0 && e2.gap !== null) {
    const t = Go(e2.theme, "spacing", 8), n = (r) => ({ gap: Kn(t, r) });
    return Rt(e2, e2.gap, n);
  }
  return null;
};
Zl.propTypes = {};
Zl.filterProps = ["gap"];
const ql = (e2) => {
  if (e2.columnGap !== void 0 && e2.columnGap !== null) {
    const t = Go(e2.theme, "spacing", 8), n = (r) => ({ columnGap: Kn(t, r) });
    return Rt(e2, e2.columnGap, n);
  }
  return null;
};
ql.propTypes = {};
ql.filterProps = ["columnGap"];
const Jl = (e2) => {
  if (e2.rowGap !== void 0 && e2.rowGap !== null) {
    const t = Go(e2.theme, "spacing", 8), n = (r) => ({ rowGap: Kn(t, r) });
    return Rt(e2, e2.rowGap, n);
  }
  return null;
};
Jl.propTypes = {};
Jl.filterProps = ["rowGap"];
const d0 = de({ prop: "gridColumn" }), p0 = de({ prop: "gridRow" }), h0 = de({ prop: "gridAutoFlow" }), m0 = de({ prop: "gridAutoColumns" }), g0 = de({ prop: "gridAutoRows" }), y0 = de({ prop: "gridTemplateColumns" }), v0 = de({ prop: "gridTemplateRows" }), S0 = de({ prop: "gridTemplateAreas" }), w0 = de({ prop: "gridArea" });
Xl(Zl, ql, Jl, d0, p0, h0, m0, g0, y0, v0, S0, w0);
function Tr(e2, t) {
  return t === "grey" ? t : e2;
}
const x0 = de({ prop: "color", themeKey: "palette", transform: Tr }), C0 = de({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: Tr }), k0 = de({ prop: "backgroundColor", themeKey: "palette", transform: Tr });
Xl(x0, C0, k0);
function Je(e2) {
  return e2 <= 1 && e2 !== 0 ? `${e2 * 100}%` : e2;
}
const E0 = de({ prop: "width", transform: Je }), ju = (e2) => {
  if (e2.maxWidth !== void 0 && e2.maxWidth !== null) {
    const t = (n) => {
      var _a2, _b, _c2, _d2, _e2;
      const r = ((_c2 = (_b = (_a2 = e2.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b.values) == null ? void 0 : _c2[n]) || Kl[n];
      return r ? ((_e2 = (_d2 = e2.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? { maxWidth: `${r}${e2.theme.breakpoints.unit}` } : { maxWidth: r } : { maxWidth: Je(n) };
    };
    return Rt(e2, e2.maxWidth, t);
  }
  return null;
};
ju.filterProps = ["maxWidth"];
const P0 = de({ prop: "minWidth", transform: Je }), T0 = de({ prop: "height", transform: Je }), _0 = de({ prop: "maxHeight", transform: Je }), $0 = de({ prop: "minHeight", transform: Je });
de({ prop: "size", cssProperty: "width", transform: Je });
de({ prop: "size", cssProperty: "height", transform: Je });
const M0 = de({ prop: "boxSizing" });
Xl(E0, ju, P0, T0, _0, $0, M0);
const Xo = { border: { themeKey: "borders", transform: pt }, borderTop: { themeKey: "borders", transform: pt }, borderRight: { themeKey: "borders", transform: pt }, borderBottom: { themeKey: "borders", transform: pt }, borderLeft: { themeKey: "borders", transform: pt }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: pt }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: Ql }, color: { themeKey: "palette", transform: Tr }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: Tr }, backgroundColor: { themeKey: "palette", transform: Tr }, p: { style: le }, pt: { style: le }, pr: { style: le }, pb: { style: le }, pl: { style: le }, px: { style: le }, py: { style: le }, padding: { style: le }, paddingTop: { style: le }, paddingRight: { style: le }, paddingBottom: { style: le }, paddingLeft: { style: le }, paddingX: { style: le }, paddingY: { style: le }, paddingInline: { style: le }, paddingInlineStart: { style: le }, paddingInlineEnd: { style: le }, paddingBlock: { style: le }, paddingBlockStart: { style: le }, paddingBlockEnd: { style: le }, m: { style: ie }, mt: { style: ie }, mr: { style: ie }, mb: { style: ie }, ml: { style: ie }, mx: { style: ie }, my: { style: ie }, margin: { style: ie }, marginTop: { style: ie }, marginRight: { style: ie }, marginBottom: { style: ie }, marginLeft: { style: ie }, marginX: { style: ie }, marginY: { style: ie }, marginInline: { style: ie }, marginInlineStart: { style: ie }, marginInlineEnd: { style: ie }, marginBlock: { style: ie }, marginBlockStart: { style: ie }, marginBlockEnd: { style: ie }, displayPrint: { cssProperty: false, transform: (e2) => ({ "@media print": { display: e2 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: Zl }, rowGap: { style: Jl }, columnGap: { style: ql }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: Je }, maxWidth: { style: ju }, minWidth: { transform: Je }, height: { transform: Je }, maxHeight: { transform: Je }, minHeight: { transform: Je }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function R0(...e2) {
  const t = e2.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e2.every((r) => n.size === Object.keys(r).length);
}
function N0(e2, t) {
  return typeof e2 == "function" ? e2(t) : e2;
}
function O0() {
  function e2(n, r, o, i) {
    const l = { [n]: r, theme: o }, s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: a = n, themeKey: u, transform: m, style: p } = s;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const h = Yl(o, u) || {};
    return p ? p(l) : Rt(l, r, (v) => {
      let w = Yi(h, m, v);
      return v === w && typeof v == "string" && (w = Yi(h, m, `${n}${v === "default" ? "" : ve(v)}`, v)), a === false ? w : { [a]: w };
    });
  }
  function t(n) {
    const { sx: r, theme: o = {} } = n || {};
    if (!r) return null;
    const i = o.unstable_sxConfig ?? Xo;
    function l(s) {
      let a = s;
      if (typeof s == "function") a = s(o);
      else if (typeof s != "object") return s;
      if (!a) return null;
      const u = xp(o.breakpoints), m = Object.keys(u);
      let p = u;
      return Object.keys(a).forEach((h) => {
        const S = N0(a[h], o);
        if (S != null) if (typeof S == "object") if (i[h]) p = uo(p, e2(h, S, o, i));
        else {
          const v = Rt({ theme: o }, S, (w) => ({ [h]: w }));
          R0(v, S) ? p[h] = t({ sx: S, theme: o }) : p = uo(p, v);
        }
        else p = uo(p, e2(h, S, o, i));
      }), Fy(o, Cp(m, p));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const Tn = O0();
Tn.filterProps = ["sx"];
function b0(e2, t) {
  var _a2;
  const n = this;
  if (n.vars) {
    if (!((_a2 = n.colorSchemes) == null ? void 0 : _a2[e2]) || typeof n.getColorSchemeSelector != "function") return {};
    let r = n.getColorSchemeSelector(e2);
    return r === "&" ? t : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), { [r]: t });
  }
  return n.palette.mode === e2 ? t : {};
}
function es(e2 = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {}, ...l } = e2, s = Ly(n), a = Ep(o);
  let u = ze({ breakpoints: s, direction: "ltr", components: {}, palette: { mode: "light", ...r }, spacing: a, shape: { ...Vy, ...i } }, l);
  return u = Wy(u), u.applyStyles = b0, u = t.reduce((m, p) => ze(m, p), u), u.unstable_sxConfig = { ...Xo, ...l == null ? void 0 : l.unstable_sxConfig }, u.unstable_sx = function(p) {
    return Tn({ sx: p, theme: this });
  }, u;
}
function D0(e2) {
  return Object.keys(e2).length === 0;
}
function Pp(e2 = null) {
  const t = P.useContext(Ko);
  return !t || D0(t) ? e2 : t;
}
const A0 = es();
function ts(e2 = A0) {
  return Pp(e2);
}
function j0({ styles: e2, themeId: t, defaultTheme: n = {} }) {
  const r = ts(n), o = typeof e2 == "function" ? e2(t && r[t] || r) : e2;
  return M.jsx(gp, { styles: o });
}
const z0 = (e2) => {
  var _a2;
  const t = { systemProps: {}, otherProps: {} }, n = ((_a2 = e2 == null ? void 0 : e2.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? Xo;
  return Object.keys(e2).forEach((r) => {
    n[r] ? t.systemProps[r] = e2[r] : t.otherProps[r] = e2[r];
  }), t;
};
function zu(e2) {
  const { sx: t, ...n } = e2, { systemProps: r, otherProps: o } = z0(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...l) => {
    const s = t(...l);
    return It(s) ? { ...r, ...s } : r;
  } : i = { ...r, ...t }, { ...o, sx: i };
}
const uf = (e2) => e2, I0 = () => {
  let e2 = uf;
  return { configure(t) {
    e2 = t;
  }, generate(t) {
    return e2(t);
  }, reset() {
    e2 = uf;
  } };
}, Tp = I0();
function _p(e2) {
  var t, n, r = "";
  if (typeof e2 == "string" || typeof e2 == "number") r += e2;
  else if (typeof e2 == "object") if (Array.isArray(e2)) {
    var o = e2.length;
    for (t = 0; t < o; t++) e2[t] && (n = _p(e2[t])) && (r && (r += " "), r += n);
  } else for (n in e2) e2[n] && (r && (r += " "), r += n);
  return r;
}
function ge() {
  for (var e2, t, n = 0, r = "", o = arguments.length; n < o; n++) (e2 = arguments[n]) && (t = _p(e2)) && (r && (r += " "), r += t);
  return r;
}
const L0 = Object.freeze(Object.defineProperty({ __proto__: null, clsx: ge, default: ge }, Symbol.toStringTag, { value: "Module" }));
function F0(e2 = {}) {
  const { themeId: t, defaultTheme: n, defaultClassName: r = "MuiBox-root", generateClassName: o } = e2, i = yp("div", { shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as" })(Tn);
  return P.forwardRef(function(a, u) {
    const m = ts(n), { className: p, component: h = "div", ...S } = zu(a);
    return M.jsx(i, { as: h, ref: u, className: ge(p, o ? o(r) : r), theme: t && m[t] || m, ...S });
  });
}
const B0 = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function Rn(e2, t, n = "Mui") {
  const r = B0[t];
  return r ? `${n}-${r}` : `${Tp.generate(e2)}-${t}`;
}
function Nn(e2, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Rn(e2, o, n);
  }), r;
}
function $p(e2) {
  const { variants: t, ...n } = e2, r = { variants: t, style: lf(n), isProcessed: true };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = lf(o.style));
  }), r;
}
const U0 = es();
function Ns(e2) {
  return e2 !== "ownerState" && e2 !== "theme" && e2 !== "sx" && e2 !== "as";
}
function W0(e2) {
  return e2 ? (t, n) => n[e2] : null;
}
function V0(e2, t, n) {
  e2.theme = K0(e2.theme) ? n : e2.theme[t] || e2.theme;
}
function Oi(e2, t) {
  const n = typeof t == "function" ? t(e2) : t;
  if (Array.isArray(n)) return n.flatMap((r) => Oi(e2, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r;
    if (n.isProcessed) r = n.style;
    else {
      const { variants: o, ...i } = n;
      r = i;
    }
    return Mp(e2, n.variants, [r]);
  }
  return (n == null ? void 0 : n.isProcessed) ? n.style : n;
}
function Mp(e2, t, n = []) {
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
function Rp(e2 = {}) {
  const { themeId: t, defaultTheme: n = U0, rootShouldForwardProp: r = Ns, slotShouldForwardProp: o = Ns } = e2;
  function i(s) {
    V0(s, t, n);
  }
  return (s, a = {}) => {
    Ay(s, (x) => x.filter((C) => C !== Tn));
    const { name: u, slot: m, skipVariantsResolver: p, skipSx: h, overridesResolver: S = W0(G0(m)), ...v } = a, w = p !== void 0 ? p : m && m !== "Root" && m !== "root" || false, _ = h || false;
    let d = Ns;
    m === "Root" || m === "root" ? d = r : m ? d = o : Y0(s) && (d = void 0);
    const f = yp(s, { shouldForwardProp: d, label: H0(), ...v }), g = (x) => {
      if (typeof x == "function" && x.__emotion_real !== x) return function(T) {
        return Oi(T, x);
      };
      if (It(x)) {
        const C = $p(x);
        return C.variants ? function(E) {
          return Oi(E, C);
        } : C.style;
      }
      return x;
    }, y = (...x) => {
      const C = [], T = x.map(g), E = [];
      if (C.push(i), u && S && E.push(function(A) {
        var _a2, _b;
        const H = (_b = (_a2 = A.theme.components) == null ? void 0 : _a2[u]) == null ? void 0 : _b.styleOverrides;
        if (!H) return null;
        const Oe = {};
        for (const ue in H) Oe[ue] = Oi(A, H[ue]);
        return S(A, Oe);
      }), u && !w && E.push(function(A) {
        var _a2, _b, _c2;
        const H = (_c2 = (_b = (_a2 = A.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b[u]) == null ? void 0 : _c2.variants;
        return H ? Mp(A, H) : null;
      }), _ || E.push(Tn), Array.isArray(T[0])) {
        const $ = T.shift(), A = new Array(C.length).fill(""), I = new Array(E.length).fill("");
        let H;
        H = [...A, ...$, ...I], H.raw = [...A, ...$.raw, ...I], C.unshift(H);
      }
      const N = [...C, ...T, ...E], c = f(...N);
      return s.muiName && (c.muiName = s.muiName), c;
    };
    return f.withConfig && (y.withConfig = f.withConfig), y;
  };
}
function H0(e2, t) {
  return void 0;
}
function K0(e2) {
  for (const t in e2) return false;
  return true;
}
function Y0(e2) {
  return typeof e2 == "string" && e2.charCodeAt(0) > 96;
}
function G0(e2) {
  return e2 && e2.charAt(0).toLowerCase() + e2.slice(1);
}
const X0 = Rp();
function Gi(e2, t) {
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
          n[o][a] = Gi(i[a], l[a]);
        }
      }
    } else n[o] === void 0 && (n[o] = e2[o]);
  }
  return n;
}
function Q0(e2) {
  const { theme: t, name: n, props: r } = e2;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Gi(t.components[n].defaultProps, r);
}
function Z0({ props: e2, name: t, defaultTheme: n, themeId: r }) {
  let o = ts(n);
  return r && (o = o[r] || o), Q0({ theme: o, name: t, props: e2 });
}
const Np = typeof window < "u" ? P.useLayoutEffect : P.useEffect;
function q0(e2, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e2, n));
}
function Iu(e2, t = 0, n = 1) {
  return q0(e2, t, n);
}
function J0(e2) {
  e2 = e2.slice(1);
  const t = new RegExp(`.{1,${e2.length >= 6 ? 2 : 1}}`, "g");
  let n = e2.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function _n(e2) {
  if (e2.type) return e2;
  if (e2.charAt(0) === "#") return _n(J0(e2));
  const t = e2.indexOf("("), n = e2.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n)) throw new Error(Hn(9, e2));
  let r = e2.substring(t + 1, e2.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o)) throw new Error(Hn(10, o));
  } else r = r.split(",");
  return r = r.map((i) => parseFloat(i)), { type: n, values: r, colorSpace: o };
}
const ev = (e2) => {
  const t = _n(e2);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ro = (e2, t) => {
  try {
    return ev(e2);
  } catch {
    return e2;
  }
};
function ns(e2) {
  const { type: t, colorSpace: n } = e2;
  let { values: r } = e2;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Op(e2) {
  e2 = _n(e2);
  const { values: t } = e2, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), l = (u, m = (u + n / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let s = "rgb";
  const a = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return e2.type === "hsla" && (s += "a", a.push(t[3])), ns({ type: s, values: a });
}
function ma(e2) {
  e2 = _n(e2);
  let t = e2.type === "hsl" || e2.type === "hsla" ? _n(Op(e2)).values : e2.values;
  return t = t.map((n) => (e2.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function tv(e2, t) {
  const n = ma(e2), r = ma(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Po(e2, t) {
  return e2 = _n(e2), t = Iu(t), (e2.type === "rgb" || e2.type === "hsl") && (e2.type += "a"), e2.type === "color" ? e2.values[3] = `/${t}` : e2.values[3] = t, ns(e2);
}
function si(e2, t, n) {
  try {
    return Po(e2, t);
  } catch {
    return e2;
  }
}
function Lu(e2, t) {
  if (e2 = _n(e2), t = Iu(t), e2.type.includes("hsl")) e2.values[2] *= 1 - t;
  else if (e2.type.includes("rgb") || e2.type.includes("color")) for (let n = 0; n < 3; n += 1) e2.values[n] *= 1 - t;
  return ns(e2);
}
function G(e2, t, n) {
  try {
    return Lu(e2, t);
  } catch {
    return e2;
  }
}
function Fu(e2, t) {
  if (e2 = _n(e2), t = Iu(t), e2.type.includes("hsl")) e2.values[2] += (100 - e2.values[2]) * t;
  else if (e2.type.includes("rgb")) for (let n = 0; n < 3; n += 1) e2.values[n] += (255 - e2.values[n]) * t;
  else if (e2.type.includes("color")) for (let n = 0; n < 3; n += 1) e2.values[n] += (1 - e2.values[n]) * t;
  return ns(e2);
}
function X(e2, t, n) {
  try {
    return Fu(e2, t);
  } catch {
    return e2;
  }
}
function nv(e2, t = 0.15) {
  return ma(e2) > 0.5 ? Lu(e2, t) : Fu(e2, t);
}
function ai(e2, t, n) {
  try {
    return nv(e2, t);
  } catch {
    return e2;
  }
}
let cf = 0;
function rv(e2) {
  const [t, n] = P.useState(e2), r = e2 || t;
  return P.useEffect(() => {
    t == null && (cf += 1, n(`mui-${cf}`));
  }, [t]), r;
}
const ov = { ...ca }, ff = ov.useId;
function iv(e2) {
  if (ff !== void 0) {
    const t = ff();
    return e2 ?? t;
  }
  return rv(e2);
}
function bi(e2) {
  const t = P.useRef(e2);
  return Np(() => {
    t.current = e2;
  }), P.useRef((...n) => (0, t.current)(...n)).current;
}
function df(...e2) {
  const t = P.useRef(void 0), n = P.useCallback((r) => {
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
  return P.useMemo(() => e2.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e2);
}
const pf = {};
function bp(e2, t) {
  const n = P.useRef(pf);
  return n.current === pf && (n.current = e2(t)), n;
}
const lv = [];
function sv(e2) {
  P.useEffect(e2, lv);
}
class Bu {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    __publicField(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Bu();
  }
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function av() {
  const e2 = bp(Bu.create).current;
  return sv(e2.disposeEffect), e2;
}
function hf(e2) {
  try {
    return e2.matches(":focus-visible");
  } catch {
  }
  return false;
}
function Jn(e2, t, n = void 0) {
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
const Dp = P.createContext(null);
function Uu() {
  return P.useContext(Dp);
}
const uv = typeof Symbol == "function" && Symbol.for, cv = uv ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function fv(e2, t) {
  return typeof t == "function" ? t(e2) : { ...e2, ...t };
}
function dv(e2) {
  const { children: t, theme: n } = e2, r = Uu(), o = P.useMemo(() => {
    const i = r === null ? { ...n } : fv(r, n);
    return i != null && (i[cv] = r !== null), i;
  }, [n, r]);
  return M.jsx(Dp.Provider, { value: o, children: t });
}
const pv = P.createContext();
function hv({ value: e2, ...t }) {
  return M.jsx(pv.Provider, { value: e2 ?? true, ...t });
}
const Ap = P.createContext(void 0);
function mv({ value: e2, children: t }) {
  return M.jsx(Ap.Provider, { value: e2, children: t });
}
function gv(e2) {
  const { theme: t, name: n, props: r } = e2;
  if (!t || !t.components || !t.components[n]) return r;
  const o = t.components[n];
  return o.defaultProps ? Gi(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Gi(o, r) : r;
}
function yv({ props: e2, name: t }) {
  const n = P.useContext(Ap);
  return gv({ props: e2, name: t, theme: { components: n } });
}
const mf = {};
function gf(e2, t, n, r = false) {
  return P.useMemo(() => {
    const o = e2 && t[e2] || t;
    if (typeof n == "function") {
      const i = n(o), l = e2 ? { ...t, [e2]: i } : i;
      return r ? () => l : l;
    }
    return e2 ? { ...t, [e2]: n } : { ...t, ...n };
  }, [e2, t, n, r]);
}
function jp(e2) {
  const { children: t, theme: n, themeId: r } = e2, o = Pp(mf), i = Uu() || mf, l = gf(r, o, n), s = gf(r, i, n, true), a = (r ? l[r] : l).direction === "rtl";
  return M.jsx(dv, { theme: s, children: M.jsx(Ko.Provider, { value: l, children: M.jsx(hv, { value: a, children: M.jsx(mv, { value: r ? l[r].components : l.components, children: t }) }) }) });
}
const yf = { theme: void 0 };
function vv(e2) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (yf.theme = o.theme, i = $p(e2(yf)), t = i, n = o.theme), i;
  };
}
const Wu = "mode", Vu = "color-scheme", Sv = "data-color-scheme";
function wv(e2) {
  const { defaultMode: t = "system", defaultLightColorScheme: n = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: o = Wu, colorSchemeStorageKey: i = Vu, attribute: l = Sv, colorSchemeNode: s = "document.documentElement", nonce: a } = e2 || {};
  let u = "", m = l;
  if (l === "class" && (m = ".%s"), l === "data" && (m = "[data-%s]"), m.startsWith(".")) {
    const h = m.substring(1);
    u += `${s}.classList.remove('${h}'.replace('%s', light), '${h}'.replace('%s', dark));
      ${s}.classList.add('${h}'.replace('%s', colorScheme));`;
  }
  const p = m.match(/\[([^\]]+)\]/);
  if (p) {
    const [h, S] = p[1].split("=");
    S || (u += `${s}.removeAttribute('${h}'.replace('%s', light));
      ${s}.removeAttribute('${h}'.replace('%s', dark));`), u += `
      ${s}.setAttribute('${h}'.replace('%s', colorScheme), ${S ? `${S}.replace('%s', colorScheme)` : '""'});`;
  } else u += `${s}.setAttribute('${m}', colorScheme);`;
  return M.jsx("script", { suppressHydrationWarning: true, nonce: typeof window > "u" ? a : "", dangerouslySetInnerHTML: { __html: `(function() {
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
function xv() {
}
const Cv = ({ key: e2, storageWindow: t }) => (!t && typeof window < "u" && (t = window), { get(n) {
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
  if (!t) return xv;
  const r = (o) => {
    const i = o.newValue;
    o.key === e2 && n(i);
  };
  return t.addEventListener("storage", r), () => {
    t.removeEventListener("storage", r);
  };
} });
function Os() {
}
function vf(e2) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e2 === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function zp(e2, t) {
  if (e2.mode === "light" || e2.mode === "system" && e2.systemMode === "light") return t("light");
  if (e2.mode === "dark" || e2.mode === "system" && e2.systemMode === "dark") return t("dark");
}
function kv(e2) {
  return zp(e2, (t) => {
    if (t === "light") return e2.lightColorScheme;
    if (t === "dark") return e2.darkColorScheme;
  });
}
function Ev(e2) {
  const { defaultMode: t = "light", defaultLightColorScheme: n, defaultDarkColorScheme: r, supportedColorSchemes: o = [], modeStorageKey: i = Wu, colorSchemeStorageKey: l = Vu, storageWindow: s = typeof window > "u" ? void 0 : window, storageManager: a = Cv, noSsr: u = false } = e2, m = o.join(","), p = o.length > 1, h = P.useMemo(() => a == null ? void 0 : a({ key: i, storageWindow: s }), [a, i, s]), S = P.useMemo(() => a == null ? void 0 : a({ key: `${l}-light`, storageWindow: s }), [a, l, s]), v = P.useMemo(() => a == null ? void 0 : a({ key: `${l}-dark`, storageWindow: s }), [a, l, s]), [w, _] = P.useState(() => {
    const E = (h == null ? void 0 : h.get(t)) || t, N = (S == null ? void 0 : S.get(n)) || n, c = (v == null ? void 0 : v.get(r)) || r;
    return { mode: E, systemMode: vf(E), lightColorScheme: N, darkColorScheme: c };
  }), [d, f] = P.useState(u || !p);
  P.useEffect(() => {
    f(true);
  }, []);
  const g = kv(w), y = P.useCallback((E) => {
    _((N) => {
      if (E === N.mode) return N;
      const c = E ?? t;
      return h == null ? void 0 : h.set(c), { ...N, mode: c, systemMode: vf(c) };
    });
  }, [h, t]), x = P.useCallback((E) => {
    E ? typeof E == "string" ? E && !m.includes(E) ? console.error(`\`${E}\` does not exist in \`theme.colorSchemes\`.`) : _((N) => {
      const c = { ...N };
      return zp(N, ($) => {
        $ === "light" && (S == null ? void 0 : S.set(E), c.lightColorScheme = E), $ === "dark" && (v == null ? void 0 : v.set(E), c.darkColorScheme = E);
      }), c;
    }) : _((N) => {
      const c = { ...N }, $ = E.light === null ? n : E.light, A = E.dark === null ? r : E.dark;
      return $ && (m.includes($) ? (c.lightColorScheme = $, S == null ? void 0 : S.set($)) : console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`)), A && (m.includes(A) ? (c.darkColorScheme = A, v == null ? void 0 : v.set(A)) : console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`)), c;
    }) : _((N) => (S == null ? void 0 : S.set(n), v == null ? void 0 : v.set(r), { ...N, lightColorScheme: n, darkColorScheme: r }));
  }, [m, S, v, n, r]), C = P.useCallback((E) => {
    w.mode === "system" && _((N) => {
      const c = (E == null ? void 0 : E.matches) ? "dark" : "light";
      return N.systemMode === c ? N : { ...N, systemMode: c };
    });
  }, [w.mode]), T = P.useRef(C);
  return T.current = C, P.useEffect(() => {
    if (typeof window.matchMedia != "function" || !p) return;
    const E = (...c) => T.current(...c), N = window.matchMedia("(prefers-color-scheme: dark)");
    return N.addListener(E), E(N), () => {
      N.removeListener(E);
    };
  }, [p]), P.useEffect(() => {
    if (p) {
      const E = (h == null ? void 0 : h.subscribe(($) => {
        (!$ || ["light", "dark", "system"].includes($)) && y($ || t);
      })) || Os, N = (S == null ? void 0 : S.subscribe(($) => {
        (!$ || m.match($)) && x({ light: $ });
      })) || Os, c = (v == null ? void 0 : v.subscribe(($) => {
        (!$ || m.match($)) && x({ dark: $ });
      })) || Os;
      return () => {
        E(), N(), c();
      };
    }
  }, [x, y, m, t, s, p, h, S, v]), { ...w, mode: d ? w.mode : void 0, systemMode: d ? w.systemMode : void 0, colorScheme: d ? g : void 0, setMode: y, setColorScheme: x };
}
const Pv = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Tv(e2) {
  const { themeId: t, theme: n = {}, modeStorageKey: r = Wu, colorSchemeStorageKey: o = Vu, disableTransitionOnChange: i = false, defaultColorScheme: l, resolveTheme: s } = e2, a = { allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0 }, u = P.createContext(void 0), m = () => P.useContext(u) || a, p = {}, h = {};
  function S(d) {
    var _a2, _b, _c2, _d2;
    const { children: f, theme: g, modeStorageKey: y = r, colorSchemeStorageKey: x = o, disableTransitionOnChange: C = i, storageManager: T, storageWindow: E = typeof window > "u" ? void 0 : window, documentNode: N = typeof document > "u" ? void 0 : document, colorSchemeNode: c = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: $ = false, disableStyleSheetGeneration: A = false, defaultMode: I = "system", forceThemeRerender: H = false, noSsr: Oe } = d, ue = P.useRef(false), Be = Uu(), O = P.useContext(u), D = !!O && !$, z = P.useMemo(() => g || (typeof n == "function" ? n() : n), [g]), U = z[t], F = U || z, { colorSchemes: be = p, components: at = h, cssVarPrefix: Kt } = F, ut = Object.keys(be).filter((ct) => !!be[ct]).join(","), Xe = P.useMemo(() => ut.split(","), [ut]), ei = typeof l == "string" ? l : l.light, ti = typeof l == "string" ? l : l.dark, Es = be[ei] && be[ti] ? I : ((_b = (_a2 = be[F.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || ((_c2 = F.palette) == null ? void 0 : _c2.mode), { mode: Ps, setMode: ni, systemMode: ri, lightColorScheme: or, darkColorScheme: oi, colorScheme: Ts, setColorScheme: An } = Ev({ supportedColorSchemes: Xe, defaultLightColorScheme: ei, defaultDarkColorScheme: ti, modeStorageKey: y, colorSchemeStorageKey: x, defaultMode: Es, storageManager: T, storageWindow: E, noSsr: Oe });
    let Yt = Ps, Qe = Ts;
    D && (Yt = O.mode, Qe = O.colorScheme);
    let jn = Qe || F.defaultColorScheme;
    F.vars && !H && (jn = F.defaultColorScheme);
    const Hr = P.useMemo(() => {
      var _a3;
      const ct = ((_a3 = F.generateThemeVars) == null ? void 0 : _a3.call(F)) || F.vars, ce = { ...F, components: at, colorSchemes: be, cssVarPrefix: Kt, vars: ct };
      if (typeof ce.generateSpacing == "function" && (ce.spacing = ce.generateSpacing()), jn) {
        const ft = be[jn];
        ft && typeof ft == "object" && Object.keys(ft).forEach((Ot) => {
          ft[Ot] && typeof ft[Ot] == "object" ? ce[Ot] = { ...ce[Ot], ...ft[Ot] } : ce[Ot] = ft[Ot];
        });
      }
      return s ? s(ce) : ce;
    }, [F, jn, at, be, Kt]), j = F.colorSchemeSelector;
    Np(() => {
      if (Qe && c && j && j !== "media") {
        const ct = j;
        let ce = j;
        if (ct === "class" && (ce = ".%s"), ct === "data" && (ce = "[data-%s]"), (ct == null ? void 0 : ct.startsWith("data-")) && !ct.includes("%s") && (ce = `[${ct}="%s"]`), ce.startsWith(".")) c.classList.remove(...Xe.map((ft) => ce.substring(1).replace("%s", ft))), c.classList.add(ce.substring(1).replace("%s", Qe));
        else {
          const ft = ce.replace("%s", Qe).match(/\[([^\]]+)\]/);
          if (ft) {
            const [Ot, _s] = ft[1].split("=");
            _s || Xe.forEach((rg) => {
              c.removeAttribute(Ot.replace(Qe, rg));
            }), c.setAttribute(Ot, _s ? _s.replace(/"|'/g, "") : "");
          } else c.setAttribute(ce, Qe);
        }
      }
    }, [Qe, j, c, Xe]), P.useEffect(() => {
      let ct;
      if (C && ue.current && N) {
        const ce = N.createElement("style");
        ce.appendChild(N.createTextNode(Pv)), N.head.appendChild(ce), window.getComputedStyle(N.body), ct = setTimeout(() => {
          N.head.removeChild(ce);
        }, 1);
      }
      return () => {
        clearTimeout(ct);
      };
    }, [Qe, C, N]), P.useEffect(() => (ue.current = true, () => {
      ue.current = false;
    }), []);
    const ng = P.useMemo(() => ({ allColorSchemes: Xe, colorScheme: Qe, darkColorScheme: oi, lightColorScheme: or, mode: Yt, setColorScheme: An, setMode: ni, systemMode: ri }), [Xe, Qe, oi, or, Yt, An, ni, ri, Hr.colorSchemeSelector]);
    let Wc = true;
    (A || F.cssVariables === false || D && (Be == null ? void 0 : Be.cssVarPrefix) === Kt) && (Wc = false);
    const Vc = M.jsxs(P.Fragment, { children: [M.jsx(jp, { themeId: U ? t : void 0, theme: Hr, children: f }), Wc && M.jsx(gp, { styles: ((_d2 = Hr.generateStyleSheets) == null ? void 0 : _d2.call(Hr)) || [] })] });
    return D ? Vc : M.jsx(u.Provider, { value: ng, children: Vc });
  }
  const v = typeof l == "string" ? l : l.light, w = typeof l == "string" ? l : l.dark;
  return { CssVarsProvider: S, useColorScheme: m, getInitColorSchemeScript: (d) => wv({ colorSchemeStorageKey: o, defaultLightColorScheme: v, defaultDarkColorScheme: w, modeStorageKey: r, ...d }) };
}
function _v(e2 = "") {
  function t(...r) {
    if (!r.length) return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e2 ? `${e2}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e2 ? `${e2}-` : ""}${r}${t(...o)})`;
}
const Sf = (e2, t, n, r = []) => {
  let o = e2;
  t.forEach((i, l) => {
    l === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, $v = (e2, t, n) => {
  function r(o, i = [], l = []) {
    Object.entries(o).forEach(([s, a]) => {
      (!n || n && !n([...i, s])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, s], Array.isArray(a) ? [...l, s] : l) : t([...i, s], a, l));
    });
  }
  r(e2);
}, Mv = (e2, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e2.includes(r)) || e2[e2.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function bs(e2, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {}, o = {}, i = {}, l = {};
  return $v(e2, (s, a, u) => {
    if ((typeof a == "string" || typeof a == "number") && (!r || !r(s, a))) {
      const m = `--${n ? `${n}-` : ""}${s.join("-")}`, p = Mv(s, a);
      Object.assign(o, { [m]: p }), Sf(i, s, `var(${m})`, u), Sf(l, s, `var(${m}, ${p})`, u);
    }
  }, (s) => s[0] === "vars"), { css: o, vars: i, varsWithDefaults: l };
}
function Rv(e2, t = {}) {
  const { getSelector: n = _, disableCssColorScheme: r, colorSchemeSelector: o } = t, { colorSchemes: i = {}, components: l, defaultColorScheme: s = "light", ...a } = e2, { vars: u, css: m, varsWithDefaults: p } = bs(a, t);
  let h = p;
  const S = {}, { [s]: v, ...w } = i;
  if (Object.entries(w || {}).forEach(([g, y]) => {
    const { vars: x, css: C, varsWithDefaults: T } = bs(y, t);
    h = ze(h, T), S[g] = { css: C, vars: x };
  }), v) {
    const { css: g, vars: y, varsWithDefaults: x } = bs(v, t);
    h = ze(h, x), S[s] = { css: g, vars: y };
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
  return { vars: h, generateThemeVars: () => {
    let g = { ...u };
    return Object.entries(S).forEach(([, { vars: y }]) => {
      g = ze(g, y);
    }), g;
  }, generateStyleSheets: () => {
    var _a2, _b;
    const g = [], y = e2.defaultColorScheme || "light";
    function x(E, N) {
      Object.keys(N).length && g.push(typeof E == "string" ? { [E]: { ...N } } : E);
    }
    x(n(void 0, { ...m }), m);
    const { [y]: C, ...T } = S;
    if (C) {
      const { css: E } = C, N = (_b = (_a2 = i[y]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode, c = !r && N ? { colorScheme: N, ...E } : { ...E };
      x(n(y, { ...c }), c);
    }
    return Object.entries(T).forEach(([E, { css: N }]) => {
      var _a3, _b2;
      const c = (_b2 = (_a3 = i[E]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode, $ = !r && c ? { colorScheme: c, ...N } : { ...N };
      x(n(E, { ...$ }), $);
    }), g;
  } };
}
function Nv(e2) {
  return function(n) {
    return e2 === "media" ? `@media (prefers-color-scheme: ${n})` : e2 ? e2.startsWith("data-") && !e2.includes("%s") ? `[${e2}="${n}"] &` : e2 === "class" ? `.${n} &` : e2 === "data" ? `[data-${n}] &` : `${e2.replace("%s", n)} &` : "&";
  };
}
const Ov = es(), bv = X0("div", { name: "MuiStack", slot: "Root", overridesResolver: (e2, t) => t.root });
function Dv(e2) {
  return Z0({ props: e2, name: "MuiStack", defaultTheme: Ov });
}
function Av(e2, t) {
  const n = P.Children.toArray(e2).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(P.cloneElement(t, { key: `separator-${i}` })), r), []);
}
const jv = (e2) => ({ row: "Left", "row-reverse": "Right", column: "Top", "column-reverse": "Bottom" })[e2], zv = ({ ownerState: e2, theme: t }) => {
  let n = { display: "flex", flexDirection: "column", ...Rt({ theme: t }, Rs({ values: e2.direction, breakpoints: t.breakpoints.values }), (r) => ({ flexDirection: r })) };
  if (e2.spacing) {
    const r = Gl(t), o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e2.spacing == "object" && e2.spacing[u] != null || typeof e2.direction == "object" && e2.direction[u] != null) && (a[u] = true), a), {}), i = Rs({ values: e2.direction, base: o }), l = Rs({ values: e2.spacing, base: o });
    typeof i == "object" && Object.keys(i).forEach((a, u, m) => {
      if (!i[a]) {
        const h = u > 0 ? i[m[u - 1]] : "column";
        i[a] = h;
      }
    }), n = ze(n, Rt({ theme: t }, l, (a, u) => e2.useFlexGap ? { gap: Kn(r, a) } : { "& > :not(style):not(style)": { margin: 0 }, "& > :not(style) ~ :not(style)": { [`margin${jv(u ? i[u] : e2.direction)}`]: Kn(r, a) } }));
  }
  return n = Ky(t.breakpoints, n), n;
};
function Iv(e2 = {}) {
  const { createStyledComponent: t = bv, useThemeProps: n = Dv, componentName: r = "MuiStack" } = e2, o = () => Jn({ root: ["root"] }, (a) => Rn(r, a), {}), i = t(zv);
  return P.forwardRef(function(a, u) {
    const m = n(a), p = zu(m), { component: h = "div", direction: S = "column", spacing: v = 0, divider: w, children: _, className: d, useFlexGap: f = false, ...g } = p, y = { direction: S, spacing: v, useFlexGap: f }, x = o();
    return M.jsx(i, { as: h, ownerState: y, ref: u, className: ge(x.root, d), ...g, children: w ? Av(_, w) : _ });
  });
}
function Ip() {
  return { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: xo.white, default: xo.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: 0.04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: 0.08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: 0.38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.12 } };
}
const Lv = Ip();
function Lp() {
  return { text: { primary: xo.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: xo.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: 0.08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: 0.16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: 0.38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.24 } };
}
const wf = Lp();
function xf(e2, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e2[t] || (e2.hasOwnProperty(n) ? e2[t] = e2[n] : t === "light" ? e2.light = Fu(e2.main, o) : t === "dark" && (e2.dark = Lu(e2.main, i)));
}
function Fv(e2 = "light") {
  return e2 === "dark" ? { main: sr[200], light: sr[50], dark: sr[400] } : { main: sr[700], light: sr[400], dark: sr[800] };
}
function Bv(e2 = "light") {
  return e2 === "dark" ? { main: lr[200], light: lr[50], dark: lr[400] } : { main: lr[500], light: lr[300], dark: lr[700] };
}
function Uv(e2 = "light") {
  return e2 === "dark" ? { main: ir[500], light: ir[300], dark: ir[700] } : { main: ir[700], light: ir[400], dark: ir[800] };
}
function Wv(e2 = "light") {
  return e2 === "dark" ? { main: ar[400], light: ar[300], dark: ar[700] } : { main: ar[700], light: ar[500], dark: ar[900] };
}
function Vv(e2 = "light") {
  return e2 === "dark" ? { main: ur[400], light: ur[300], dark: ur[700] } : { main: ur[800], light: ur[500], dark: ur[900] };
}
function Hv(e2 = "light") {
  return e2 === "dark" ? { main: Kr[400], light: Kr[300], dark: Kr[700] } : { main: "#ed6c02", light: Kr[500], dark: Kr[900] };
}
function Hu(e2) {
  const { mode: t = "light", contrastThreshold: n = 3, tonalOffset: r = 0.2, ...o } = e2, i = e2.primary || Fv(t), l = e2.secondary || Bv(t), s = e2.error || Uv(t), a = e2.info || Wv(t), u = e2.success || Vv(t), m = e2.warning || Hv(t);
  function p(w) {
    return tv(w, wf.text.primary) >= n ? wf.text.primary : Lv.text.primary;
  }
  const h = ({ color: w, name: _, mainShade: d = 500, lightShade: f = 300, darkShade: g = 700 }) => {
    if (w = { ...w }, !w.main && w[d] && (w.main = w[d]), !w.hasOwnProperty("main")) throw new Error(Hn(11, _ ? ` (${_})` : "", d));
    if (typeof w.main != "string") throw new Error(Hn(12, _ ? ` (${_})` : "", JSON.stringify(w.main)));
    return xf(w, "light", f, r), xf(w, "dark", g, r), w.contrastText || (w.contrastText = p(w.main)), w;
  };
  let S;
  return t === "light" ? S = Ip() : t === "dark" && (S = Lp()), ze({ common: { ...xo }, mode: t, primary: h({ color: i, name: "primary" }), secondary: h({ color: l, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: h({ color: s, name: "error" }), warning: h({ color: m, name: "warning" }), info: h({ color: a, name: "info" }), success: h({ color: u, name: "success" }), grey: _g, contrastThreshold: n, getContrastText: p, augmentColor: h, tonalOffset: r, ...S }, o);
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
const Cf = { textTransform: "uppercase" }, kf = '"Roboto", "Helvetica", "Arial", sans-serif';
function Fp(e2, t) {
  const { fontFamily: n = kf, fontSize: r = 14, fontWeightLight: o = 300, fontWeightRegular: i = 400, fontWeightMedium: l = 500, fontWeightBold: s = 700, htmlFontSize: a = 16, allVariants: u, pxToRem: m, ...p } = typeof t == "function" ? t(e2) : t, h = r / 14, S = m || ((_) => `${_ / a * h}rem`), v = (_, d, f, g, y) => ({ fontFamily: n, fontWeight: _, fontSize: S(d), lineHeight: f, ...n === kf ? { letterSpacing: `${Gv(g / d)}em` } : {}, ...y, ...u }), w = { h1: v(o, 96, 1.167, -1.5), h2: v(o, 60, 1.2, -0.5), h3: v(i, 48, 1.167, 0), h4: v(i, 34, 1.235, 0.25), h5: v(i, 24, 1.334, 0), h6: v(l, 20, 1.6, 0.15), subtitle1: v(i, 16, 1.75, 0.15), subtitle2: v(l, 14, 1.57, 0.1), body1: v(i, 16, 1.5, 0.15), body2: v(i, 14, 1.43, 0.15), button: v(l, 14, 1.75, 0.4, Cf), caption: v(i, 12, 1.66, 0.4), overline: v(i, 12, 2.66, 1, Cf), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
  return ze({ htmlFontSize: a, pxToRem: S, fontFamily: n, fontSize: r, fontWeightLight: o, fontWeightRegular: i, fontWeightMedium: l, fontWeightBold: s, ...w }, p, { clone: false });
}
const Xv = 0.2, Qv = 0.14, Zv = 0.12;
function ee(...e2) {
  return [`${e2[0]}px ${e2[1]}px ${e2[2]}px ${e2[3]}px rgba(0,0,0,${Xv})`, `${e2[4]}px ${e2[5]}px ${e2[6]}px ${e2[7]}px rgba(0,0,0,${Qv})`, `${e2[8]}px ${e2[9]}px ${e2[10]}px ${e2[11]}px rgba(0,0,0,${Zv})`].join(",");
}
const qv = ["none", ee(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ee(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ee(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ee(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ee(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ee(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ee(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ee(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ee(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ee(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ee(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ee(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ee(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ee(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ee(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ee(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ee(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ee(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ee(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ee(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ee(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ee(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ee(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ee(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Jv = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, e1 = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function Ef(e2) {
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
    return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof l == "string" ? l : Ef(l)} ${s} ${typeof a == "string" ? a : Ef(a)}`).join(",");
  }, ...e2, easing: t, duration: n };
}
const r1 = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
function o1(e2) {
  return It(e2) || typeof e2 > "u" || typeof e2 == "string" || typeof e2 == "boolean" || typeof e2 == "number" || Array.isArray(e2);
}
function Bp(e2 = {}) {
  const t = { ...e2 };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [l, s] = o[i];
      !o1(s) || l.startsWith("unstable_") ? delete r[l] : It(s) && (r[l] = { ...s }, n(r[l]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function ga(e2 = {}, ...t) {
  const { breakpoints: n, mixins: r = {}, spacing: o, palette: i = {}, transitions: l = {}, typography: s = {}, shape: a, ...u } = e2;
  if (e2.vars && e2.generateThemeVars === void 0) throw new Error(Hn(20));
  const m = Hu(i), p = es(e2);
  let h = ze(p, { mixins: Yv(p.breakpoints, r), palette: m, shadows: qv.slice(), typography: Fp(m, s), transitions: n1(l), zIndex: { ...r1 } });
  return h = ze(h, u), h = t.reduce((S, v) => ze(S, v), h), h.unstable_sxConfig = { ...Xo, ...u == null ? void 0 : u.unstable_sxConfig }, h.unstable_sx = function(v) {
    return Tn({ sx: v, theme: this });
  }, h.toRuntimeSource = Bp, h;
}
function ya(e2) {
  let t;
  return e2 < 1 ? t = 5.11916 * e2 ** 2 : t = 4.5 * Math.log(e2 + 1) + 2, Math.round(t * 10) / 1e3;
}
const i1 = [...Array(25)].map((e2, t) => {
  if (t === 0) return "none";
  const n = ya(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Up(e2) {
  return { inputPlaceholder: e2 === "dark" ? 0.5 : 0.42, inputUnderline: e2 === "dark" ? 0.7 : 0.42, switchTrackDisabled: e2 === "dark" ? 0.2 : 0.12, switchTrack: e2 === "dark" ? 0.3 : 0.38 };
}
function Wp(e2) {
  return e2 === "dark" ? i1 : [];
}
function l1(e2) {
  const { palette: t = { mode: "light" }, opacity: n, overlays: r, ...o } = e2, i = Hu(t);
  return { palette: i, opacity: { ...Up(i.mode), ...n }, overlays: r || Wp(i.mode), ...o };
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
function k(e2, t, n) {
  !e2[t] && n && (e2[t] = n);
}
function oo(e2) {
  return typeof e2 != "string" || !e2.startsWith("hsl") ? e2 : Op(e2);
}
function Gt(e2, t) {
  `${t}Channel` in e2 || (e2[`${t}Channel`] = ro(oo(e2[t])));
}
function f1(e2) {
  return typeof e2 == "number" ? `${e2}px` : typeof e2 == "string" || typeof e2 == "function" || Array.isArray(e2) ? e2 : "8px";
}
const bt = (e2) => {
  try {
    return e2();
  } catch {
  }
}, d1 = (e2 = "mui") => _v(e2);
function Ds(e2, t, n, r) {
  if (!t) return;
  t = t === true ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e2[r] = l1({ ...t, palette: { mode: o, ...t == null ? void 0 : t.palette } });
    return;
  }
  const { palette: i, ...l } = ga({ ...n, palette: { mode: o, ...t == null ? void 0 : t.palette } });
  return e2[r] = { ...t, palette: i, opacity: { ...Up(o), ...t == null ? void 0 : t.opacity }, overlays: (t == null ? void 0 : t.overlays) || Wp(o) }, l;
}
function p1(e2 = {}, ...t) {
  const { colorSchemes: n = { light: true }, defaultColorScheme: r, disableCssColorScheme: o = false, cssVarPrefix: i = "mui", shouldSkipGeneratingVar: l = s1, colorSchemeSelector: s = n.light && n.dark ? "media" : void 0, rootSelector: a = ":root", ...u } = e2, m = Object.keys(n)[0], p = r || (n.light && m !== "light" ? "light" : m), h = d1(i), { [p]: S, light: v, dark: w, ..._ } = n, d = { ..._ };
  let f = S;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (f = true), !f) throw new Error(Hn(21, p));
  const g = Ds(d, f, u, p);
  v && !d.light && Ds(d, v, void 0, "light"), w && !d.dark && Ds(d, w, void 0, "dark");
  let y = { defaultColorScheme: p, ...g, cssVarPrefix: i, colorSchemeSelector: s, rootSelector: a, getCssVar: h, colorSchemes: d, font: { ...Kv(g.typography), ...g.font }, spacing: f1(u.spacing) };
  Object.keys(y.colorSchemes).forEach((N) => {
    const c = y.colorSchemes[N].palette, $ = (A) => {
      const I = A.split("-"), H = I[1], Oe = I[2];
      return h(A, c[H][Oe]);
    };
    if (c.mode === "light" && (k(c.common, "background", "#fff"), k(c.common, "onBackground", "#000")), c.mode === "dark" && (k(c.common, "background", "#000"), k(c.common, "onBackground", "#fff")), c1(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      k(c.Alert, "errorColor", G(c.error.light, 0.6)), k(c.Alert, "infoColor", G(c.info.light, 0.6)), k(c.Alert, "successColor", G(c.success.light, 0.6)), k(c.Alert, "warningColor", G(c.warning.light, 0.6)), k(c.Alert, "errorFilledBg", $("palette-error-main")), k(c.Alert, "infoFilledBg", $("palette-info-main")), k(c.Alert, "successFilledBg", $("palette-success-main")), k(c.Alert, "warningFilledBg", $("palette-warning-main")), k(c.Alert, "errorFilledColor", bt(() => c.getContrastText(c.error.main))), k(c.Alert, "infoFilledColor", bt(() => c.getContrastText(c.info.main))), k(c.Alert, "successFilledColor", bt(() => c.getContrastText(c.success.main))), k(c.Alert, "warningFilledColor", bt(() => c.getContrastText(c.warning.main))), k(c.Alert, "errorStandardBg", X(c.error.light, 0.9)), k(c.Alert, "infoStandardBg", X(c.info.light, 0.9)), k(c.Alert, "successStandardBg", X(c.success.light, 0.9)), k(c.Alert, "warningStandardBg", X(c.warning.light, 0.9)), k(c.Alert, "errorIconColor", $("palette-error-main")), k(c.Alert, "infoIconColor", $("palette-info-main")), k(c.Alert, "successIconColor", $("palette-success-main")), k(c.Alert, "warningIconColor", $("palette-warning-main")), k(c.AppBar, "defaultBg", $("palette-grey-100")), k(c.Avatar, "defaultBg", $("palette-grey-400")), k(c.Button, "inheritContainedBg", $("palette-grey-300")), k(c.Button, "inheritContainedHoverBg", $("palette-grey-A100")), k(c.Chip, "defaultBorder", $("palette-grey-400")), k(c.Chip, "defaultAvatarColor", $("palette-grey-700")), k(c.Chip, "defaultIconColor", $("palette-grey-700")), k(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), k(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), k(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), k(c.LinearProgress, "primaryBg", X(c.primary.main, 0.62)), k(c.LinearProgress, "secondaryBg", X(c.secondary.main, 0.62)), k(c.LinearProgress, "errorBg", X(c.error.main, 0.62)), k(c.LinearProgress, "infoBg", X(c.info.main, 0.62)), k(c.LinearProgress, "successBg", X(c.success.main, 0.62)), k(c.LinearProgress, "warningBg", X(c.warning.main, 0.62)), k(c.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), k(c.Slider, "primaryTrack", X(c.primary.main, 0.62)), k(c.Slider, "secondaryTrack", X(c.secondary.main, 0.62)), k(c.Slider, "errorTrack", X(c.error.main, 0.62)), k(c.Slider, "infoTrack", X(c.info.main, 0.62)), k(c.Slider, "successTrack", X(c.success.main, 0.62)), k(c.Slider, "warningTrack", X(c.warning.main, 0.62));
      const A = ai(c.background.default, 0.8);
      k(c.SnackbarContent, "bg", A), k(c.SnackbarContent, "color", bt(() => c.getContrastText(A))), k(c.SpeedDialAction, "fabHoverBg", ai(c.background.paper, 0.15)), k(c.StepConnector, "border", $("palette-grey-400")), k(c.StepContent, "border", $("palette-grey-400")), k(c.Switch, "defaultColor", $("palette-common-white")), k(c.Switch, "defaultDisabledColor", $("palette-grey-100")), k(c.Switch, "primaryDisabledColor", X(c.primary.main, 0.62)), k(c.Switch, "secondaryDisabledColor", X(c.secondary.main, 0.62)), k(c.Switch, "errorDisabledColor", X(c.error.main, 0.62)), k(c.Switch, "infoDisabledColor", X(c.info.main, 0.62)), k(c.Switch, "successDisabledColor", X(c.success.main, 0.62)), k(c.Switch, "warningDisabledColor", X(c.warning.main, 0.62)), k(c.TableCell, "border", X(si(c.divider, 1), 0.88)), k(c.Tooltip, "bg", si(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      k(c.Alert, "errorColor", X(c.error.light, 0.6)), k(c.Alert, "infoColor", X(c.info.light, 0.6)), k(c.Alert, "successColor", X(c.success.light, 0.6)), k(c.Alert, "warningColor", X(c.warning.light, 0.6)), k(c.Alert, "errorFilledBg", $("palette-error-dark")), k(c.Alert, "infoFilledBg", $("palette-info-dark")), k(c.Alert, "successFilledBg", $("palette-success-dark")), k(c.Alert, "warningFilledBg", $("palette-warning-dark")), k(c.Alert, "errorFilledColor", bt(() => c.getContrastText(c.error.dark))), k(c.Alert, "infoFilledColor", bt(() => c.getContrastText(c.info.dark))), k(c.Alert, "successFilledColor", bt(() => c.getContrastText(c.success.dark))), k(c.Alert, "warningFilledColor", bt(() => c.getContrastText(c.warning.dark))), k(c.Alert, "errorStandardBg", G(c.error.light, 0.9)), k(c.Alert, "infoStandardBg", G(c.info.light, 0.9)), k(c.Alert, "successStandardBg", G(c.success.light, 0.9)), k(c.Alert, "warningStandardBg", G(c.warning.light, 0.9)), k(c.Alert, "errorIconColor", $("palette-error-main")), k(c.Alert, "infoIconColor", $("palette-info-main")), k(c.Alert, "successIconColor", $("palette-success-main")), k(c.Alert, "warningIconColor", $("palette-warning-main")), k(c.AppBar, "defaultBg", $("palette-grey-900")), k(c.AppBar, "darkBg", $("palette-background-paper")), k(c.AppBar, "darkColor", $("palette-text-primary")), k(c.Avatar, "defaultBg", $("palette-grey-600")), k(c.Button, "inheritContainedBg", $("palette-grey-800")), k(c.Button, "inheritContainedHoverBg", $("palette-grey-700")), k(c.Chip, "defaultBorder", $("palette-grey-700")), k(c.Chip, "defaultAvatarColor", $("palette-grey-300")), k(c.Chip, "defaultIconColor", $("palette-grey-300")), k(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), k(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), k(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), k(c.LinearProgress, "primaryBg", G(c.primary.main, 0.5)), k(c.LinearProgress, "secondaryBg", G(c.secondary.main, 0.5)), k(c.LinearProgress, "errorBg", G(c.error.main, 0.5)), k(c.LinearProgress, "infoBg", G(c.info.main, 0.5)), k(c.LinearProgress, "successBg", G(c.success.main, 0.5)), k(c.LinearProgress, "warningBg", G(c.warning.main, 0.5)), k(c.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), k(c.Slider, "primaryTrack", G(c.primary.main, 0.5)), k(c.Slider, "secondaryTrack", G(c.secondary.main, 0.5)), k(c.Slider, "errorTrack", G(c.error.main, 0.5)), k(c.Slider, "infoTrack", G(c.info.main, 0.5)), k(c.Slider, "successTrack", G(c.success.main, 0.5)), k(c.Slider, "warningTrack", G(c.warning.main, 0.5));
      const A = ai(c.background.default, 0.98);
      k(c.SnackbarContent, "bg", A), k(c.SnackbarContent, "color", bt(() => c.getContrastText(A))), k(c.SpeedDialAction, "fabHoverBg", ai(c.background.paper, 0.15)), k(c.StepConnector, "border", $("palette-grey-600")), k(c.StepContent, "border", $("palette-grey-600")), k(c.Switch, "defaultColor", $("palette-grey-300")), k(c.Switch, "defaultDisabledColor", $("palette-grey-600")), k(c.Switch, "primaryDisabledColor", G(c.primary.main, 0.55)), k(c.Switch, "secondaryDisabledColor", G(c.secondary.main, 0.55)), k(c.Switch, "errorDisabledColor", G(c.error.main, 0.55)), k(c.Switch, "infoDisabledColor", G(c.info.main, 0.55)), k(c.Switch, "successDisabledColor", G(c.success.main, 0.55)), k(c.Switch, "warningDisabledColor", G(c.warning.main, 0.55)), k(c.TableCell, "border", G(si(c.divider, 1), 0.68)), k(c.Tooltip, "bg", si(c.grey[700], 0.92));
    }
    Gt(c.background, "default"), Gt(c.background, "paper"), Gt(c.common, "background"), Gt(c.common, "onBackground"), Gt(c, "divider"), Object.keys(c).forEach((A) => {
      const I = c[A];
      A !== "tonalOffset" && I && typeof I == "object" && (I.main && k(c[A], "mainChannel", ro(oo(I.main))), I.light && k(c[A], "lightChannel", ro(oo(I.light))), I.dark && k(c[A], "darkChannel", ro(oo(I.dark))), I.contrastText && k(c[A], "contrastTextChannel", ro(oo(I.contrastText))), A === "text" && (Gt(c[A], "primary"), Gt(c[A], "secondary")), A === "action" && (I.active && Gt(c[A], "active"), I.selected && Gt(c[A], "selected")));
    });
  }), y = t.reduce((N, c) => ze(N, c), y);
  const x = { prefix: i, disableCssColorScheme: o, shouldSkipGeneratingVar: l, getSelector: u1(y) }, { vars: C, generateThemeVars: T, generateStyleSheets: E } = Rv(y, x);
  return y.vars = C, Object.entries(y.colorSchemes[y.defaultColorScheme]).forEach(([N, c]) => {
    y[N] = c;
  }), y.generateThemeVars = T, y.generateStyleSheets = E, y.generateSpacing = function() {
    return Ep(u.spacing, Gl(this));
  }, y.getColorSchemeSelector = Nv(s), y.spacing = y.generateSpacing(), y.shouldSkipGeneratingVar = l, y.unstable_sxConfig = { ...Xo, ...u == null ? void 0 : u.unstable_sxConfig }, y.unstable_sx = function(c) {
    return Tn({ sx: c, theme: this });
  }, y.toRuntimeSource = Bp, y;
}
function Pf(e2, t, n) {
  e2.colorSchemes && n && (e2.colorSchemes[t] = { ...n !== true && n, palette: Hu({ ...n === true ? {} : n.palette, mode: t }) });
}
function rs(e2 = {}, ...t) {
  const { palette: n, cssVariables: r = false, colorSchemes: o = n ? void 0 : { light: true }, defaultColorScheme: i = n == null ? void 0 : n.mode, ...l } = e2, s = i || "light", a = o == null ? void 0 : o[s], u = { ...o, ...n ? { [s]: { ...typeof a != "boolean" && a, palette: n } } : void 0 };
  if (r === false) {
    if (!("colorSchemes" in e2)) return ga(e2, ...t);
    let m = n;
    "palette" in e2 || u[s] && (u[s] !== true ? m = u[s].palette : s === "dark" && (m = { mode: "dark" }));
    const p = ga({ ...e2, palette: m }, ...t);
    return p.defaultColorScheme = s, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = { ...u.light !== true && u.light, palette: p.palette }, Pf(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = { ...u.dark !== true && u.dark, palette: p.palette }, Pf(p, "light", u.light)), p;
  }
  return !n && !("light" in u) && s === "light" && (u.light = true), p1({ ...l, colorSchemes: u, defaultColorScheme: s, ...typeof r != "boolean" && r }, ...t);
}
const Ku = rs();
function os() {
  const e2 = ts(Ku);
  return e2[Ft] || e2;
}
function h1(e2) {
  return e2 !== "ownerState" && e2 !== "theme" && e2 !== "sx" && e2 !== "as";
}
const m1 = (e2) => h1(e2) && e2 !== "classes", Ct = Rp({ themeId: Ft, defaultTheme: Ku, rootShouldForwardProp: m1 });
function As({ theme: e2, ...t }) {
  const n = Ft in e2 ? e2[Ft] : void 0;
  return M.jsx(jp, { ...t, themeId: n ? Ft : void 0, theme: n || e2 });
}
const ui = { colorSchemeStorageKey: "mui-color-scheme", defaultLightColorScheme: "light", defaultDarkColorScheme: "dark", modeStorageKey: "mui-mode" }, { CssVarsProvider: g1 } = Tv({ themeId: Ft, theme: () => rs({ cssVariables: true }), colorSchemeStorageKey: ui.colorSchemeStorageKey, modeStorageKey: ui.modeStorageKey, defaultColorScheme: { light: ui.defaultLightColorScheme, dark: ui.defaultDarkColorScheme }, resolveTheme: (e2) => {
  const t = { ...e2, typography: Fp(e2.palette, e2.typography) };
  return t.unstable_sx = function(r) {
    return Tn({ sx: r, theme: this });
  }, t;
} }), y1 = g1;
function v1({ theme: e2, ...t }) {
  if (typeof e2 == "function") return M.jsx(As, { theme: e2, ...t });
  const n = Ft in e2 ? e2[Ft] : e2;
  return "colorSchemes" in n ? M.jsx(y1, { theme: e2, ...t }) : "vars" in n ? M.jsx(As, { theme: e2, ...t }) : M.jsx(As, { theme: { ...e2, vars: null }, ...t });
}
function S1(e2) {
  return M.jsx(j0, { ...e2, defaultTheme: Ku, themeId: Ft });
}
function Vp(e2) {
  return function(n) {
    return M.jsx(S1, { styles: typeof e2 == "function" ? (r) => e2({ theme: r, ...n }) : e2 });
  };
}
function w1() {
  return zu;
}
const Yn = vv;
function ln(e2) {
  return yv(e2);
}
function x1(e2) {
  return Rn("MuiSvgIcon", e2);
}
Nn("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const C1 = (e2) => {
  const { color: t, fontSize: n, classes: r } = e2, o = { root: ["root", t !== "inherit" && `color${ve(t)}`, `fontSize${ve(n)}`] };
  return Jn(o, x1, r);
}, k1 = Ct("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: (e2, t) => {
  const { ownerState: n } = e2;
  return [t.root, n.color !== "inherit" && t[`color${ve(n.color)}`], t[`fontSize${ve(n.fontSize)}`]];
} })(Yn(({ theme: e2 }) => {
  var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2;
  return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", flexShrink: 0, transition: (_d2 = (_a2 = e2.transitions) == null ? void 0 : _a2.create) == null ? void 0 : _d2.call(_a2, "fill", { duration: (_c2 = (_b = (e2.vars ?? e2).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c2.shorter }), variants: [{ props: (t) => !t.hasSvgAsChild, style: { fill: "currentColor" } }, { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } }, { props: { fontSize: "small" }, style: { fontSize: ((_f2 = (_e2 = e2.typography) == null ? void 0 : _e2.pxToRem) == null ? void 0 : _f2.call(_e2, 20)) || "1.25rem" } }, { props: { fontSize: "medium" }, style: { fontSize: ((_h2 = (_g2 = e2.typography) == null ? void 0 : _g2.pxToRem) == null ? void 0 : _h2.call(_g2, 24)) || "1.5rem" } }, { props: { fontSize: "large" }, style: { fontSize: ((_j = (_i2 = e2.typography) == null ? void 0 : _i2.pxToRem) == null ? void 0 : _j.call(_i2, 35)) || "2.1875rem" } }, ...Object.entries((e2.vars ?? e2).palette).filter(([, t]) => t && t.main).map(([t]) => {
    var _a3, _b2;
    return { props: { color: t }, style: { color: (_b2 = (_a3 = (e2.vars ?? e2).palette) == null ? void 0 : _a3[t]) == null ? void 0 : _b2.main } };
  }), { props: { color: "action" }, style: { color: (_l2 = (_k = (e2.vars ?? e2).palette) == null ? void 0 : _k.action) == null ? void 0 : _l2.active } }, { props: { color: "disabled" }, style: { color: (_n2 = (_m2 = (e2.vars ?? e2).palette) == null ? void 0 : _m2.action) == null ? void 0 : _n2.disabled } }, { props: { color: "inherit" }, style: { color: void 0 } }] };
})), va = P.forwardRef(function(t, n) {
  const r = ln({ props: t, name: "MuiSvgIcon" }), { children: o, className: i, color: l = "inherit", component: s = "svg", fontSize: a = "medium", htmlColor: u, inheritViewBox: m = false, titleAccess: p, viewBox: h = "0 0 24 24", ...S } = r, v = P.isValidElement(o) && o.type === "svg", w = { ...r, color: l, component: s, fontSize: a, instanceFontSize: t.fontSize, inheritViewBox: m, viewBox: h, hasSvgAsChild: v }, _ = {};
  m || (_.viewBox = h);
  const d = C1(w);
  return M.jsxs(k1, { as: s, className: ge(d.root, i), focusable: "false", color: u, "aria-hidden": p ? void 0 : true, role: p ? "img" : void 0, ref: n, ..._, ...S, ...v && o.props, ownerState: w, children: [v ? o.props.children : o, p ? M.jsx("title", { children: p }) : null] });
});
va.muiName = "SvgIcon";
function er(e2, t) {
  function n(r, o) {
    return M.jsx(va, { "data-testid": void 0, ref: o, ...r, children: e2 });
  }
  return n.muiName = va.muiName, P.memo(P.forwardRef(n));
}
function E1(e2, t) {
  if (e2 == null) return {};
  var n = {};
  for (var r in e2) if ({}.hasOwnProperty.call(e2, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e2[r];
  }
  return n;
}
function Sa(e2, t) {
  return Sa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Sa(e2, t);
}
function P1(e2, t) {
  e2.prototype = Object.create(t.prototype), e2.prototype.constructor = e2, Sa(e2, t);
}
var Hp = { exports: {} }, lt = {}, Kp = { exports: {} }, Yp = {};
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
    var z = O.length;
    O.push(D);
    e: for (; 0 < z; ) {
      var U = z - 1 >>> 1, F = O[U];
      if (0 < o(F, D)) O[U] = D, O[z] = F, z = U;
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var D = O[0], z = O.pop();
    if (z !== D) {
      O[0] = z;
      e: for (var U = 0, F = O.length, be = F >>> 1; U < be; ) {
        var at = 2 * (U + 1) - 1, Kt = O[at], ut = at + 1, Xe = O[ut];
        if (0 > o(Kt, z)) ut < F && 0 > o(Xe, Kt) ? (O[U] = Xe, O[ut] = z, U = ut) : (O[U] = Kt, O[at] = z, U = at);
        else if (ut < F && 0 > o(Xe, z)) O[U] = Xe, O[ut] = z, U = ut;
        else break e;
      }
    }
    return D;
  }
  function o(O, D) {
    var z = O.sortIndex - D.sortIndex;
    return z !== 0 ? z : O.id - D.id;
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
  var a = [], u = [], m = 1, p = null, h = 3, S = false, v = false, w = false, _ = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
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
    if (w = false, g(O), !v) if (n(a) !== null) v = true, ue(x);
    else {
      var D = n(u);
      D !== null && Be(y, D.startTime - O);
    }
  }
  function x(O, D) {
    v = false, w && (w = false, d(E), E = -1), S = true;
    var z = h;
    try {
      for (g(D), p = n(a); p !== null && (!(p.expirationTime > D) || O && !$()); ) {
        var U = p.callback;
        if (typeof U == "function") {
          p.callback = null, h = p.priorityLevel;
          var F = U(p.expirationTime <= D);
          D = e2.unstable_now(), typeof F == "function" ? p.callback = F : p === n(a) && r(a), g(D);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var be = true;
      else {
        var at = n(u);
        at !== null && Be(y, at.startTime - D), be = false;
      }
      return be;
    } finally {
      p = null, h = z, S = false;
    }
  }
  var C = false, T = null, E = -1, N = 5, c = -1;
  function $() {
    return !(e2.unstable_now() - c < N);
  }
  function A() {
    if (T !== null) {
      var O = e2.unstable_now();
      c = O;
      var D = true;
      try {
        D = T(true, O);
      } finally {
        D ? I() : (C = false, T = null);
      }
    } else C = false;
  }
  var I;
  if (typeof f == "function") I = function() {
    f(A);
  };
  else if (typeof MessageChannel < "u") {
    var H = new MessageChannel(), Oe = H.port2;
    H.port1.onmessage = A, I = function() {
      Oe.postMessage(null);
    };
  } else I = function() {
    _(A, 0);
  };
  function ue(O) {
    T = O, C || (C = true, I());
  }
  function Be(O, D) {
    E = _(function() {
      O(e2.unstable_now());
    }, D);
  }
  e2.unstable_IdlePriority = 5, e2.unstable_ImmediatePriority = 1, e2.unstable_LowPriority = 4, e2.unstable_NormalPriority = 3, e2.unstable_Profiling = null, e2.unstable_UserBlockingPriority = 2, e2.unstable_cancelCallback = function(O) {
    O.callback = null;
  }, e2.unstable_continueExecution = function() {
    v || S || (v = true, ue(x));
  }, e2.unstable_forceFrameRate = function(O) {
    0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < O ? Math.floor(1e3 / O) : 5;
  }, e2.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e2.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e2.unstable_next = function(O) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = h;
    }
    var z = h;
    h = D;
    try {
      return O();
    } finally {
      h = z;
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
    var z = h;
    h = O;
    try {
      return D();
    } finally {
      h = z;
    }
  }, e2.unstable_scheduleCallback = function(O, D, z) {
    var U = e2.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? U + z : U) : z = U, O) {
      case 1:
        var F = -1;
        break;
      case 2:
        F = 250;
        break;
      case 5:
        F = 1073741823;
        break;
      case 4:
        F = 1e4;
        break;
      default:
        F = 5e3;
    }
    return F = z + F, O = { id: m++, callback: D, priorityLevel: O, startTime: z, expirationTime: F, sortIndex: -1 }, z > U ? (O.sortIndex = z, t(u, O), n(a) === null && O === n(u) && (w ? (d(E), E = -1) : w = true, Be(y, z - U))) : (O.sortIndex = F, t(a, O), v || S || (v = true, ue(x))), O;
  }, e2.unstable_shouldYield = $, e2.unstable_wrapCallback = function(O) {
    var D = h;
    return function() {
      var z = h;
      h = D;
      try {
        return O.apply(this, arguments);
      } finally {
        h = z;
      }
    };
  };
})(Yp);
Kp.exports = Yp;
var T1 = Kp.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var _1 = P, ot = T1;
function R(e2) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e2, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e2 + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Gp = /* @__PURE__ */ new Set(), To = {};
function tr(e2, t) {
  Dr(e2, t), Dr(e2 + "Capture", t);
}
function Dr(e2, t) {
  for (To[e2] = t, e2 = 0; e2 < t.length; e2++) Gp.add(t[e2]);
}
var tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wa = Object.prototype.hasOwnProperty, $1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Tf = {}, _f = {};
function M1(e2) {
  return wa.call(_f, e2) ? true : wa.call(Tf, e2) ? false : $1.test(e2) ? _f[e2] = true : (Tf[e2] = true, false);
}
function R1(e2, t, n, r) {
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
function N1(e2, t, n, r) {
  if (t === null || typeof t > "u" || R1(e2, t, n, r)) return true;
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
function Fe(e2, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e2, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e2) {
  Pe[e2] = new Fe(e2, 0, false, e2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e2) {
  var t = e2[0];
  Pe[t] = new Fe(t, 1, false, e2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e2) {
  Pe[e2] = new Fe(e2, 2, false, e2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e2) {
  Pe[e2] = new Fe(e2, 2, false, e2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e2) {
  Pe[e2] = new Fe(e2, 3, false, e2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(e2) {
  Pe[e2] = new Fe(e2, 3, true, e2, null, false, false);
});
["capture", "download"].forEach(function(e2) {
  Pe[e2] = new Fe(e2, 4, false, e2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(e2) {
  Pe[e2] = new Fe(e2, 6, false, e2, null, false, false);
});
["rowSpan", "start"].forEach(function(e2) {
  Pe[e2] = new Fe(e2, 5, false, e2.toLowerCase(), null, false, false);
});
var Yu = /[\-:]([a-z])/g;
function Gu(e2) {
  return e2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e2) {
  var t = e2.replace(Yu, Gu);
  Pe[t] = new Fe(t, 1, false, e2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e2) {
  var t = e2.replace(Yu, Gu);
  Pe[t] = new Fe(t, 1, false, e2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e2) {
  var t = e2.replace(Yu, Gu);
  Pe[t] = new Fe(t, 1, false, e2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(e2) {
  Pe[e2] = new Fe(e2, 1, false, e2.toLowerCase(), null, false, false);
});
Pe.xlinkHref = new Fe("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(e2) {
  Pe[e2] = new Fe(e2, 1, false, e2.toLowerCase(), null, true, true);
});
function Xu(e2, t, n, r) {
  var o = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (N1(t, n, o, r) && (n = null), r || o === null ? M1(t) && (n === null ? e2.removeAttribute(t) : e2.setAttribute(t, "" + n)) : o.mustUseProperty ? e2[o.propertyName] = n === null ? o.type === 3 ? false : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e2.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === true ? "" : "" + n, r ? e2.setAttributeNS(r, t, n) : e2.setAttribute(t, n))));
}
var sn = _1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ci = Symbol.for("react.element"), dr = Symbol.for("react.portal"), pr = Symbol.for("react.fragment"), Qu = Symbol.for("react.strict_mode"), xa = Symbol.for("react.profiler"), Xp = Symbol.for("react.provider"), Qp = Symbol.for("react.context"), Zu = Symbol.for("react.forward_ref"), Ca = Symbol.for("react.suspense"), ka = Symbol.for("react.suspense_list"), qu = Symbol.for("react.memo"), dn = Symbol.for("react.lazy"), Zp = Symbol.for("react.offscreen"), $f = Symbol.iterator;
function Gr(e2) {
  return e2 === null || typeof e2 != "object" ? null : (e2 = $f && e2[$f] || e2["@@iterator"], typeof e2 == "function" ? e2 : null);
}
var oe = Object.assign, js;
function io(e2) {
  if (js === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    js = t && t[1] || "";
  }
  return `
` + js + e2;
}
var zs = false;
function Is(e2, t) {
  if (!e2 || zs) return "";
  zs = true;
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
    zs = false, Error.prepareStackTrace = n;
  }
  return (e2 = e2 ? e2.displayName || e2.name : "") ? io(e2) : "";
}
function O1(e2) {
  switch (e2.tag) {
    case 5:
      return io(e2.type);
    case 16:
      return io("Lazy");
    case 13:
      return io("Suspense");
    case 19:
      return io("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e2 = Is(e2.type, false), e2;
    case 11:
      return e2 = Is(e2.type.render, false), e2;
    case 1:
      return e2 = Is(e2.type, true), e2;
    default:
      return "";
  }
}
function Ea(e2) {
  if (e2 == null) return null;
  if (typeof e2 == "function") return e2.displayName || e2.name || null;
  if (typeof e2 == "string") return e2;
  switch (e2) {
    case pr:
      return "Fragment";
    case dr:
      return "Portal";
    case xa:
      return "Profiler";
    case Qu:
      return "StrictMode";
    case Ca:
      return "Suspense";
    case ka:
      return "SuspenseList";
  }
  if (typeof e2 == "object") switch (e2.$$typeof) {
    case Qp:
      return (e2.displayName || "Context") + ".Consumer";
    case Xp:
      return (e2._context.displayName || "Context") + ".Provider";
    case Zu:
      var t = e2.render;
      return e2 = e2.displayName, e2 || (e2 = t.displayName || t.name || "", e2 = e2 !== "" ? "ForwardRef(" + e2 + ")" : "ForwardRef"), e2;
    case qu:
      return t = e2.displayName || null, t !== null ? t : Ea(e2.type) || "Memo";
    case dn:
      t = e2._payload, e2 = e2._init;
      try {
        return Ea(e2(t));
      } catch {
      }
  }
  return null;
}
function b1(e2) {
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
      return Ea(t);
    case 8:
      return t === Qu ? "StrictMode" : "Mode";
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
function qp(e2) {
  var t = e2.type;
  return (e2 = e2.nodeName) && e2.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function D1(e2) {
  var t = qp(e2) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e2.constructor.prototype, t), r = "" + e2[t];
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
function fi(e2) {
  e2._valueTracker || (e2._valueTracker = D1(e2));
}
function Jp(e2) {
  if (!e2) return false;
  var t = e2._valueTracker;
  if (!t) return true;
  var n = t.getValue(), r = "";
  return e2 && (r = qp(e2) ? e2.checked ? "true" : "false" : e2.value), e2 = r, e2 !== n ? (t.setValue(e2), true) : false;
}
function Xi(e2) {
  if (e2 = e2 || (typeof document < "u" ? document : void 0), typeof e2 > "u") return null;
  try {
    return e2.activeElement || e2.body;
  } catch {
    return e2.body;
  }
}
function Pa(e2, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e2._wrapperState.initialChecked });
}
function Mf(e2, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = $n(t.value != null ? t.value : n), e2._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function eh(e2, t) {
  t = t.checked, t != null && Xu(e2, "checked", t, false);
}
function Ta(e2, t) {
  eh(e2, t);
  var n = $n(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e2.value === "" || e2.value != n) && (e2.value = "" + n) : e2.value !== "" + n && (e2.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e2.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? _a(e2, t.type, n) : t.hasOwnProperty("defaultValue") && _a(e2, t.type, $n(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e2.defaultChecked = !!t.defaultChecked);
}
function Rf(e2, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e2._wrapperState.initialValue, n || t === e2.value || (e2.value = t), e2.defaultValue = t;
  }
  n = e2.name, n !== "" && (e2.name = ""), e2.defaultChecked = !!e2._wrapperState.initialChecked, n !== "" && (e2.name = n);
}
function _a(e2, t, n) {
  (t !== "number" || Xi(e2.ownerDocument) !== e2) && (n == null ? e2.defaultValue = "" + e2._wrapperState.initialValue : e2.defaultValue !== "" + n && (e2.defaultValue = "" + n));
}
var lo = Array.isArray;
function _r(e2, t, n, r) {
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
function $a(e2, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e2._wrapperState.initialValue });
}
function Nf(e2, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(R(92));
      if (lo(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e2._wrapperState = { initialValue: $n(n) };
}
function th(e2, t) {
  var n = $n(t.value), r = $n(t.defaultValue);
  n != null && (n = "" + n, n !== e2.value && (e2.value = n), t.defaultValue == null && e2.defaultValue !== n && (e2.defaultValue = n)), r != null && (e2.defaultValue = "" + r);
}
function Of(e2) {
  var t = e2.textContent;
  t === e2._wrapperState.initialValue && t !== "" && t !== null && (e2.value = t);
}
function nh(e2) {
  switch (e2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ma(e2, t) {
  return e2 == null || e2 === "http://www.w3.org/1999/xhtml" ? nh(t) : e2 === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e2;
}
var di, rh = function(e2) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e2(t, n, r, o);
    });
  } : e2;
}(function(e2, t) {
  if (e2.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e2) e2.innerHTML = t;
  else {
    for (di = di || document.createElement("div"), di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = di.firstChild; e2.firstChild; ) e2.removeChild(e2.firstChild);
    for (; t.firstChild; ) e2.appendChild(t.firstChild);
  }
});
function _o(e2, t) {
  if (t) {
    var n = e2.firstChild;
    if (n && n === e2.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e2.textContent = t;
}
var co = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, A1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(co).forEach(function(e2) {
  A1.forEach(function(t) {
    t = t + e2.charAt(0).toUpperCase() + e2.substring(1), co[t] = co[e2];
  });
});
function oh(e2, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || co.hasOwnProperty(e2) && co[e2] ? ("" + t).trim() : t + "px";
}
function ih(e2, t) {
  e2 = e2.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = oh(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e2.setProperty(n, o) : e2[n] = o;
  }
}
var j1 = oe({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function Ra(e2, t) {
  if (t) {
    if (j1[e2] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e2));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Na(e2, t) {
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
var Oa = null;
function Ju(e2) {
  return e2 = e2.target || e2.srcElement || window, e2.correspondingUseElement && (e2 = e2.correspondingUseElement), e2.nodeType === 3 ? e2.parentNode : e2;
}
var ba = null, $r = null, Mr = null;
function bf(e2) {
  if (e2 = qo(e2)) {
    if (typeof ba != "function") throw Error(R(280));
    var t = e2.stateNode;
    t && (t = us(t), ba(e2.stateNode, e2.type, t));
  }
}
function lh(e2) {
  $r ? Mr ? Mr.push(e2) : Mr = [e2] : $r = e2;
}
function sh() {
  if ($r) {
    var e2 = $r, t = Mr;
    if (Mr = $r = null, bf(e2), t) for (e2 = 0; e2 < t.length; e2++) bf(t[e2]);
  }
}
function ah(e2, t) {
  return e2(t);
}
function uh() {
}
var Ls = false;
function ch(e2, t, n) {
  if (Ls) return e2(t, n);
  Ls = true;
  try {
    return ah(e2, t, n);
  } finally {
    Ls = false, ($r !== null || Mr !== null) && (uh(), sh());
  }
}
function $o(e2, t) {
  var n = e2.stateNode;
  if (n === null) return null;
  var r = us(n);
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
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Da = false;
if (tn) try {
  var Xr = {};
  Object.defineProperty(Xr, "passive", { get: function() {
    Da = true;
  } }), window.addEventListener("test", Xr, Xr), window.removeEventListener("test", Xr, Xr);
} catch {
  Da = false;
}
function z1(e2, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (m) {
    this.onError(m);
  }
}
var fo = false, Qi = null, Zi = false, Aa = null, I1 = { onError: function(e2) {
  fo = true, Qi = e2;
} };
function L1(e2, t, n, r, o, i, l, s, a) {
  fo = false, Qi = null, z1.apply(I1, arguments);
}
function F1(e2, t, n, r, o, i, l, s, a) {
  if (L1.apply(this, arguments), fo) {
    if (fo) {
      var u = Qi;
      fo = false, Qi = null;
    } else throw Error(R(198));
    Zi || (Zi = true, Aa = u);
  }
}
function nr(e2) {
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
function fh(e2) {
  if (e2.tag === 13) {
    var t = e2.memoizedState;
    if (t === null && (e2 = e2.alternate, e2 !== null && (t = e2.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Df(e2) {
  if (nr(e2) !== e2) throw Error(R(188));
}
function B1(e2) {
  var t = e2.alternate;
  if (!t) {
    if (t = nr(e2), t === null) throw Error(R(188));
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
        if (i === n) return Df(o), e2;
        if (i === r) return Df(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
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
        if (!l) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e2 : t;
}
function dh(e2) {
  return e2 = B1(e2), e2 !== null ? ph(e2) : null;
}
function ph(e2) {
  if (e2.tag === 5 || e2.tag === 6) return e2;
  for (e2 = e2.child; e2 !== null; ) {
    var t = ph(e2);
    if (t !== null) return t;
    e2 = e2.sibling;
  }
  return null;
}
var hh = ot.unstable_scheduleCallback, Af = ot.unstable_cancelCallback, U1 = ot.unstable_shouldYield, W1 = ot.unstable_requestPaint, fe = ot.unstable_now, V1 = ot.unstable_getCurrentPriorityLevel, ec = ot.unstable_ImmediatePriority, mh = ot.unstable_UserBlockingPriority, qi = ot.unstable_NormalPriority, H1 = ot.unstable_LowPriority, gh = ot.unstable_IdlePriority, is = null, Ut = null;
function K1(e2) {
  if (Ut && typeof Ut.onCommitFiberRoot == "function") try {
    Ut.onCommitFiberRoot(is, e2, void 0, (e2.current.flags & 128) === 128);
  } catch {
  }
}
var $t = Math.clz32 ? Math.clz32 : X1, Y1 = Math.log, G1 = Math.LN2;
function X1(e2) {
  return e2 >>>= 0, e2 === 0 ? 32 : 31 - (Y1(e2) / G1 | 0) | 0;
}
var pi = 64, hi = 4194304;
function so(e2) {
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
function Ji(e2, t) {
  var n = e2.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e2.suspendedLanes, i = e2.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = so(s) : (i &= l, i !== 0 && (r = so(i)));
  } else l = n & ~o, l !== 0 ? r = so(l) : i !== 0 && (r = so(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e2.entangledLanes, t !== 0) for (e2 = e2.entanglements, t &= r; 0 < t; ) n = 31 - $t(t), o = 1 << n, r |= e2[n], t &= ~o;
  return r;
}
function Q1(e2, t) {
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
function Z1(e2, t) {
  for (var n = e2.suspendedLanes, r = e2.pingedLanes, o = e2.expirationTimes, i = e2.pendingLanes; 0 < i; ) {
    var l = 31 - $t(i), s = 1 << l, a = o[l];
    a === -1 ? (!(s & n) || s & r) && (o[l] = Q1(s, t)) : a <= t && (e2.expiredLanes |= s), i &= ~s;
  }
}
function ja(e2) {
  return e2 = e2.pendingLanes & -1073741825, e2 !== 0 ? e2 : e2 & 1073741824 ? 1073741824 : 0;
}
function yh() {
  var e2 = pi;
  return pi <<= 1, !(pi & 4194240) && (pi = 64), e2;
}
function Fs(e2) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e2);
  return t;
}
function Qo(e2, t, n) {
  e2.pendingLanes |= t, t !== 536870912 && (e2.suspendedLanes = 0, e2.pingedLanes = 0), e2 = e2.eventTimes, t = 31 - $t(t), e2[t] = n;
}
function q1(e2, t) {
  var n = e2.pendingLanes & ~t;
  e2.pendingLanes = t, e2.suspendedLanes = 0, e2.pingedLanes = 0, e2.expiredLanes &= t, e2.mutableReadLanes &= t, e2.entangledLanes &= t, t = e2.entanglements;
  var r = e2.eventTimes;
  for (e2 = e2.expirationTimes; 0 < n; ) {
    var o = 31 - $t(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e2[o] = -1, n &= ~i;
  }
}
function tc(e2, t) {
  var n = e2.entangledLanes |= t;
  for (e2 = e2.entanglements; n; ) {
    var r = 31 - $t(n), o = 1 << r;
    o & t | e2[r] & t && (e2[r] |= t), n &= ~o;
  }
}
var K = 0;
function vh(e2) {
  return e2 &= -e2, 1 < e2 ? 4 < e2 ? e2 & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Sh, nc, wh, xh, Ch, za = false, mi = [], vn = null, Sn = null, wn = null, Mo = /* @__PURE__ */ new Map(), Ro = /* @__PURE__ */ new Map(), hn = [], J1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function jf(e2, t) {
  switch (e2) {
    case "focusin":
    case "focusout":
      vn = null;
      break;
    case "dragenter":
    case "dragleave":
      Sn = null;
      break;
    case "mouseover":
    case "mouseout":
      wn = null;
      break;
    case "pointerover":
    case "pointerout":
      Mo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ro.delete(t.pointerId);
  }
}
function Qr(e2, t, n, r, o, i) {
  return e2 === null || e2.nativeEvent !== i ? (e2 = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = qo(t), t !== null && nc(t)), e2) : (e2.eventSystemFlags |= r, t = e2.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e2);
}
function eS(e2, t, n, r, o) {
  switch (t) {
    case "focusin":
      return vn = Qr(vn, e2, t, n, r, o), true;
    case "dragenter":
      return Sn = Qr(Sn, e2, t, n, r, o), true;
    case "mouseover":
      return wn = Qr(wn, e2, t, n, r, o), true;
    case "pointerover":
      var i = o.pointerId;
      return Mo.set(i, Qr(Mo.get(i) || null, e2, t, n, r, o)), true;
    case "gotpointercapture":
      return i = o.pointerId, Ro.set(i, Qr(Ro.get(i) || null, e2, t, n, r, o)), true;
  }
  return false;
}
function kh(e2) {
  var t = Ln(e2.target);
  if (t !== null) {
    var n = nr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = fh(n), t !== null) {
          e2.blockedOn = t, Ch(e2.priority, function() {
            wh(n);
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
function Di(e2) {
  if (e2.blockedOn !== null) return false;
  for (var t = e2.targetContainers; 0 < t.length; ) {
    var n = Ia(e2.domEventName, e2.eventSystemFlags, t[0], e2.nativeEvent);
    if (n === null) {
      n = e2.nativeEvent;
      var r = new n.constructor(n.type, n);
      Oa = r, n.target.dispatchEvent(r), Oa = null;
    } else return t = qo(n), t !== null && nc(t), e2.blockedOn = n, false;
    t.shift();
  }
  return true;
}
function zf(e2, t, n) {
  Di(e2) && n.delete(t);
}
function tS() {
  za = false, vn !== null && Di(vn) && (vn = null), Sn !== null && Di(Sn) && (Sn = null), wn !== null && Di(wn) && (wn = null), Mo.forEach(zf), Ro.forEach(zf);
}
function Zr(e2, t) {
  e2.blockedOn === t && (e2.blockedOn = null, za || (za = true, ot.unstable_scheduleCallback(ot.unstable_NormalPriority, tS)));
}
function No(e2) {
  function t(o) {
    return Zr(o, e2);
  }
  if (0 < mi.length) {
    Zr(mi[0], e2);
    for (var n = 1; n < mi.length; n++) {
      var r = mi[n];
      r.blockedOn === e2 && (r.blockedOn = null);
    }
  }
  for (vn !== null && Zr(vn, e2), Sn !== null && Zr(Sn, e2), wn !== null && Zr(wn, e2), Mo.forEach(t), Ro.forEach(t), n = 0; n < hn.length; n++) r = hn[n], r.blockedOn === e2 && (r.blockedOn = null);
  for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); ) kh(n), n.blockedOn === null && hn.shift();
}
var Rr = sn.ReactCurrentBatchConfig, el = true;
function nS(e2, t, n, r) {
  var o = K, i = Rr.transition;
  Rr.transition = null;
  try {
    K = 1, rc(e2, t, n, r);
  } finally {
    K = o, Rr.transition = i;
  }
}
function rS(e2, t, n, r) {
  var o = K, i = Rr.transition;
  Rr.transition = null;
  try {
    K = 4, rc(e2, t, n, r);
  } finally {
    K = o, Rr.transition = i;
  }
}
function rc(e2, t, n, r) {
  if (el) {
    var o = Ia(e2, t, n, r);
    if (o === null) Qs(e2, t, r, tl, n), jf(e2, r);
    else if (eS(o, e2, t, n, r)) r.stopPropagation();
    else if (jf(e2, r), t & 4 && -1 < J1.indexOf(e2)) {
      for (; o !== null; ) {
        var i = qo(o);
        if (i !== null && Sh(i), i = Ia(e2, t, n, r), i === null && Qs(e2, t, r, tl, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Qs(e2, t, r, null, n);
  }
}
var tl = null;
function Ia(e2, t, n, r) {
  if (tl = null, e2 = Ju(r), e2 = Ln(e2), e2 !== null) if (t = nr(e2), t === null) e2 = null;
  else if (n = t.tag, n === 13) {
    if (e2 = fh(t), e2 !== null) return e2;
    e2 = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e2 = null;
  } else t !== e2 && (e2 = null);
  return tl = e2, null;
}
function Eh(e2) {
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
      switch (V1()) {
        case ec:
          return 1;
        case mh:
          return 4;
        case qi:
        case H1:
          return 16;
        case gh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gn = null, oc = null, Ai = null;
function Ph() {
  if (Ai) return Ai;
  var e2, t = oc, n = t.length, r, o = "value" in gn ? gn.value : gn.textContent, i = o.length;
  for (e2 = 0; e2 < n && t[e2] === o[e2]; e2++) ;
  var l = n - e2;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return Ai = o.slice(e2, 1 < r ? 1 - r : void 0);
}
function ji(e2) {
  var t = e2.keyCode;
  return "charCode" in e2 ? (e2 = e2.charCode, e2 === 0 && t === 13 && (e2 = 13)) : e2 = t, e2 === 10 && (e2 = 13), 32 <= e2 || e2 === 13 ? e2 : 0;
}
function gi() {
  return true;
}
function If() {
  return false;
}
function st(e2) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e2) e2.hasOwnProperty(s) && (n = e2[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? gi : If, this.isPropagationStopped = If, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = gi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = gi);
  }, persist: function() {
  }, isPersistent: gi }), t;
}
var Wr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e2) {
  return e2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ic = st(Wr), Zo = oe({}, Wr, { view: 0, detail: 0 }), oS = st(Zo), Bs, Us, qr, ls = oe({}, Zo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: lc, button: 0, buttons: 0, relatedTarget: function(e2) {
  return e2.relatedTarget === void 0 ? e2.fromElement === e2.srcElement ? e2.toElement : e2.fromElement : e2.relatedTarget;
}, movementX: function(e2) {
  return "movementX" in e2 ? e2.movementX : (e2 !== qr && (qr && e2.type === "mousemove" ? (Bs = e2.screenX - qr.screenX, Us = e2.screenY - qr.screenY) : Us = Bs = 0, qr = e2), Bs);
}, movementY: function(e2) {
  return "movementY" in e2 ? e2.movementY : Us;
} }), Lf = st(ls), iS = oe({}, ls, { dataTransfer: 0 }), lS = st(iS), sS = oe({}, Zo, { relatedTarget: 0 }), Ws = st(sS), aS = oe({}, Wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uS = st(aS), cS = oe({}, Wr, { clipboardData: function(e2) {
  return "clipboardData" in e2 ? e2.clipboardData : window.clipboardData;
} }), fS = st(cS), dS = oe({}, Wr, { data: 0 }), Ff = st(dS), pS = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, hS = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, mS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function gS(e2) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e2) : (e2 = mS[e2]) ? !!t[e2] : false;
}
function lc() {
  return gS;
}
var yS = oe({}, Zo, { key: function(e2) {
  if (e2.key) {
    var t = pS[e2.key] || e2.key;
    if (t !== "Unidentified") return t;
  }
  return e2.type === "keypress" ? (e2 = ji(e2), e2 === 13 ? "Enter" : String.fromCharCode(e2)) : e2.type === "keydown" || e2.type === "keyup" ? hS[e2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: lc, charCode: function(e2) {
  return e2.type === "keypress" ? ji(e2) : 0;
}, keyCode: function(e2) {
  return e2.type === "keydown" || e2.type === "keyup" ? e2.keyCode : 0;
}, which: function(e2) {
  return e2.type === "keypress" ? ji(e2) : e2.type === "keydown" || e2.type === "keyup" ? e2.keyCode : 0;
} }), vS = st(yS), SS = oe({}, ls, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Bf = st(SS), wS = oe({}, Zo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: lc }), xS = st(wS), CS = oe({}, Wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), kS = st(CS), ES = oe({}, ls, { deltaX: function(e2) {
  return "deltaX" in e2 ? e2.deltaX : "wheelDeltaX" in e2 ? -e2.wheelDeltaX : 0;
}, deltaY: function(e2) {
  return "deltaY" in e2 ? e2.deltaY : "wheelDeltaY" in e2 ? -e2.wheelDeltaY : "wheelDelta" in e2 ? -e2.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), PS = st(ES), TS = [9, 13, 27, 32], sc = tn && "CompositionEvent" in window, po = null;
tn && "documentMode" in document && (po = document.documentMode);
var _S = tn && "TextEvent" in window && !po, Th = tn && (!sc || po && 8 < po && 11 >= po), Uf = " ", Wf = false;
function _h(e2, t) {
  switch (e2) {
    case "keyup":
      return TS.indexOf(t.keyCode) !== -1;
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
function $h(e2) {
  return e2 = e2.detail, typeof e2 == "object" && "data" in e2 ? e2.data : null;
}
var hr = false;
function $S(e2, t) {
  switch (e2) {
    case "compositionend":
      return $h(t);
    case "keypress":
      return t.which !== 32 ? null : (Wf = true, Uf);
    case "textInput":
      return e2 = t.data, e2 === Uf && Wf ? null : e2;
    default:
      return null;
  }
}
function MS(e2, t) {
  if (hr) return e2 === "compositionend" || !sc && _h(e2, t) ? (e2 = Ph(), Ai = oc = gn = null, hr = false, e2) : null;
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
      return Th && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var RS = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function Vf(e2) {
  var t = e2 && e2.nodeName && e2.nodeName.toLowerCase();
  return t === "input" ? !!RS[e2.type] : t === "textarea";
}
function Mh(e2, t, n, r) {
  lh(r), t = nl(t, "onChange"), 0 < t.length && (n = new ic("onChange", "change", null, n, r), e2.push({ event: n, listeners: t }));
}
var ho = null, Oo = null;
function NS(e2) {
  Fh(e2, 0);
}
function ss(e2) {
  var t = yr(e2);
  if (Jp(t)) return e2;
}
function OS(e2, t) {
  if (e2 === "change") return t;
}
var Rh = false;
if (tn) {
  var Vs;
  if (tn) {
    var Hs = "oninput" in document;
    if (!Hs) {
      var Hf = document.createElement("div");
      Hf.setAttribute("oninput", "return;"), Hs = typeof Hf.oninput == "function";
    }
    Vs = Hs;
  } else Vs = false;
  Rh = Vs && (!document.documentMode || 9 < document.documentMode);
}
function Kf() {
  ho && (ho.detachEvent("onpropertychange", Nh), Oo = ho = null);
}
function Nh(e2) {
  if (e2.propertyName === "value" && ss(Oo)) {
    var t = [];
    Mh(t, Oo, e2, Ju(e2)), ch(NS, t);
  }
}
function bS(e2, t, n) {
  e2 === "focusin" ? (Kf(), ho = t, Oo = n, ho.attachEvent("onpropertychange", Nh)) : e2 === "focusout" && Kf();
}
function DS(e2) {
  if (e2 === "selectionchange" || e2 === "keyup" || e2 === "keydown") return ss(Oo);
}
function AS(e2, t) {
  if (e2 === "click") return ss(t);
}
function jS(e2, t) {
  if (e2 === "input" || e2 === "change") return ss(t);
}
function zS(e2, t) {
  return e2 === t && (e2 !== 0 || 1 / e2 === 1 / t) || e2 !== e2 && t !== t;
}
var Nt = typeof Object.is == "function" ? Object.is : zS;
function bo(e2, t) {
  if (Nt(e2, t)) return true;
  if (typeof e2 != "object" || e2 === null || typeof t != "object" || t === null) return false;
  var n = Object.keys(e2), r = Object.keys(t);
  if (n.length !== r.length) return false;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!wa.call(t, o) || !Nt(e2[o], t[o])) return false;
  }
  return true;
}
function Yf(e2) {
  for (; e2 && e2.firstChild; ) e2 = e2.firstChild;
  return e2;
}
function Gf(e2, t) {
  var n = Yf(e2);
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
    n = Yf(n);
  }
}
function Oh(e2, t) {
  return e2 && t ? e2 === t ? true : e2 && e2.nodeType === 3 ? false : t && t.nodeType === 3 ? Oh(e2, t.parentNode) : "contains" in e2 ? e2.contains(t) : e2.compareDocumentPosition ? !!(e2.compareDocumentPosition(t) & 16) : false : false;
}
function bh() {
  for (var e2 = window, t = Xi(); t instanceof e2.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = false;
    }
    if (n) e2 = t.contentWindow;
    else break;
    t = Xi(e2.document);
  }
  return t;
}
function ac(e2) {
  var t = e2 && e2.nodeName && e2.nodeName.toLowerCase();
  return t && (t === "input" && (e2.type === "text" || e2.type === "search" || e2.type === "tel" || e2.type === "url" || e2.type === "password") || t === "textarea" || e2.contentEditable === "true");
}
function IS(e2) {
  var t = bh(), n = e2.focusedElem, r = e2.selectionRange;
  if (t !== n && n && n.ownerDocument && Oh(n.ownerDocument.documentElement, n)) {
    if (r !== null && ac(n)) {
      if (t = r.start, e2 = r.end, e2 === void 0 && (e2 = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e2, n.value.length);
      else if (e2 = (t = n.ownerDocument || document) && t.defaultView || window, e2.getSelection) {
        e2 = e2.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e2.extend && i > r && (o = r, r = i, i = o), o = Gf(n, i);
        var l = Gf(n, r);
        o && l && (e2.rangeCount !== 1 || e2.anchorNode !== o.node || e2.anchorOffset !== o.offset || e2.focusNode !== l.node || e2.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e2.removeAllRanges(), i > r ? (e2.addRange(t), e2.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e2.addRange(t)));
      }
    }
    for (t = [], e2 = n; e2 = e2.parentNode; ) e2.nodeType === 1 && t.push({ element: e2, left: e2.scrollLeft, top: e2.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e2 = t[n], e2.element.scrollLeft = e2.left, e2.element.scrollTop = e2.top;
  }
}
var LS = tn && "documentMode" in document && 11 >= document.documentMode, mr = null, La = null, mo = null, Fa = false;
function Xf(e2, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Fa || mr == null || mr !== Xi(r) || (r = mr, "selectionStart" in r && ac(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), mo && bo(mo, r) || (mo = r, r = nl(La, "onSelect"), 0 < r.length && (t = new ic("onSelect", "select", null, t, n), e2.push({ event: t, listeners: r }), t.target = mr)));
}
function yi(e2, t) {
  var n = {};
  return n[e2.toLowerCase()] = t.toLowerCase(), n["Webkit" + e2] = "webkit" + t, n["Moz" + e2] = "moz" + t, n;
}
var gr = { animationend: yi("Animation", "AnimationEnd"), animationiteration: yi("Animation", "AnimationIteration"), animationstart: yi("Animation", "AnimationStart"), transitionend: yi("Transition", "TransitionEnd") }, Ks = {}, Dh = {};
tn && (Dh = document.createElement("div").style, "AnimationEvent" in window || (delete gr.animationend.animation, delete gr.animationiteration.animation, delete gr.animationstart.animation), "TransitionEvent" in window || delete gr.transitionend.transition);
function as(e2) {
  if (Ks[e2]) return Ks[e2];
  if (!gr[e2]) return e2;
  var t = gr[e2], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Dh) return Ks[e2] = t[n];
  return e2;
}
var Ah = as("animationend"), jh = as("animationiteration"), zh = as("animationstart"), Ih = as("transitionend"), Lh = /* @__PURE__ */ new Map(), Qf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function On(e2, t) {
  Lh.set(e2, t), tr(t, [e2]);
}
for (var Ys = 0; Ys < Qf.length; Ys++) {
  var Gs = Qf[Ys], FS = Gs.toLowerCase(), BS = Gs[0].toUpperCase() + Gs.slice(1);
  On(FS, "on" + BS);
}
On(Ah, "onAnimationEnd");
On(jh, "onAnimationIteration");
On(zh, "onAnimationStart");
On("dblclick", "onDoubleClick");
On("focusin", "onFocus");
On("focusout", "onBlur");
On(Ih, "onTransitionEnd");
Dr("onMouseEnter", ["mouseout", "mouseover"]);
Dr("onMouseLeave", ["mouseout", "mouseover"]);
Dr("onPointerEnter", ["pointerout", "pointerover"]);
Dr("onPointerLeave", ["pointerout", "pointerover"]);
tr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
tr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
tr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
tr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ao = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), US = new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));
function Zf(e2, t, n) {
  var r = e2.type || "unknown-event";
  e2.currentTarget = n, F1(r, t, void 0, e2), e2.currentTarget = null;
}
function Fh(e2, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e2.length; n++) {
    var r = e2[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], a = s.instance, u = s.currentTarget;
        if (s = s.listener, a !== i && o.isPropagationStopped()) break e;
        Zf(o, s, u), i = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped()) break e;
        Zf(o, s, u), i = a;
      }
    }
  }
  if (Zi) throw e2 = Aa, Zi = false, Aa = null, e2;
}
function q(e2, t) {
  var n = t[Ha];
  n === void 0 && (n = t[Ha] = /* @__PURE__ */ new Set());
  var r = e2 + "__bubble";
  n.has(r) || (Bh(t, e2, 2, false), n.add(r));
}
function Xs(e2, t, n) {
  var r = 0;
  t && (r |= 4), Bh(n, e2, r, t);
}
var vi = "_reactListening" + Math.random().toString(36).slice(2);
function Do(e2) {
  if (!e2[vi]) {
    e2[vi] = true, Gp.forEach(function(n) {
      n !== "selectionchange" && (US.has(n) || Xs(n, false, e2), Xs(n, true, e2));
    });
    var t = e2.nodeType === 9 ? e2 : e2.ownerDocument;
    t === null || t[vi] || (t[vi] = true, Xs("selectionchange", false, t));
  }
}
function Bh(e2, t, n, r) {
  switch (Eh(t)) {
    case 1:
      var o = nS;
      break;
    case 4:
      o = rS;
      break;
    default:
      o = rc;
  }
  n = o.bind(null, t, n, e2), o = void 0, !Da || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), r ? o !== void 0 ? e2.addEventListener(t, n, { capture: true, passive: o }) : e2.addEventListener(t, n, true) : o !== void 0 ? e2.addEventListener(t, n, { passive: o }) : e2.addEventListener(t, n, false);
}
function Qs(e2, t, n, r, o) {
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
        if (l = Ln(s), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = i = l;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  ch(function() {
    var u = i, m = Ju(n), p = [];
    e: {
      var h = Lh.get(e2);
      if (h !== void 0) {
        var S = ic, v = e2;
        switch (e2) {
          case "keypress":
            if (ji(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = vS;
            break;
          case "focusin":
            v = "focus", S = Ws;
            break;
          case "focusout":
            v = "blur", S = Ws;
            break;
          case "beforeblur":
          case "afterblur":
            S = Ws;
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
            S = Lf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = lS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = xS;
            break;
          case Ah:
          case jh:
          case zh:
            S = uS;
            break;
          case Ih:
            S = kS;
            break;
          case "scroll":
            S = oS;
            break;
          case "wheel":
            S = PS;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = fS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Bf;
        }
        var w = (t & 4) !== 0, _ = !w && e2 === "scroll", d = w ? h !== null ? h + "Capture" : null : h;
        w = [];
        for (var f = u, g; f !== null; ) {
          g = f;
          var y = g.stateNode;
          if (g.tag === 5 && y !== null && (g = y, d !== null && (y = $o(f, d), y != null && w.push(Ao(f, y, g)))), _) break;
          f = f.return;
        }
        0 < w.length && (h = new S(h, v, null, n, m), p.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e2 === "mouseover" || e2 === "pointerover", S = e2 === "mouseout" || e2 === "pointerout", h && n !== Oa && (v = n.relatedTarget || n.fromElement) && (Ln(v) || v[nn])) break e;
        if ((S || h) && (h = m.window === m ? m : (h = m.ownerDocument) ? h.defaultView || h.parentWindow : window, S ? (v = n.relatedTarget || n.toElement, S = u, v = v ? Ln(v) : null, v !== null && (_ = nr(v), v !== _ || v.tag !== 5 && v.tag !== 6) && (v = null)) : (S = null, v = u), S !== v)) {
          if (w = Lf, y = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e2 === "pointerout" || e2 === "pointerover") && (w = Bf, y = "onPointerLeave", d = "onPointerEnter", f = "pointer"), _ = S == null ? h : yr(S), g = v == null ? h : yr(v), h = new w(y, f + "leave", S, n, m), h.target = _, h.relatedTarget = g, y = null, Ln(m) === u && (w = new w(d, f + "enter", v, n, m), w.target = g, w.relatedTarget = _, y = w), _ = y, S && v) t: {
            for (w = S, d = v, f = 0, g = w; g; g = cr(g)) f++;
            for (g = 0, y = d; y; y = cr(y)) g++;
            for (; 0 < f - g; ) w = cr(w), f--;
            for (; 0 < g - f; ) d = cr(d), g--;
            for (; f--; ) {
              if (w === d || d !== null && w === d.alternate) break t;
              w = cr(w), d = cr(d);
            }
            w = null;
          }
          else w = null;
          S !== null && qf(p, h, S, w, false), v !== null && _ !== null && qf(p, _, v, w, true);
        }
      }
      e: {
        if (h = u ? yr(u) : window, S = h.nodeName && h.nodeName.toLowerCase(), S === "select" || S === "input" && h.type === "file") var x = OS;
        else if (Vf(h)) if (Rh) x = jS;
        else {
          x = DS;
          var C = bS;
        }
        else (S = h.nodeName) && S.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (x = AS);
        if (x && (x = x(e2, u))) {
          Mh(p, x, n, m);
          break e;
        }
        C && C(e2, h, u), e2 === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && _a(h, "number", h.value);
      }
      switch (C = u ? yr(u) : window, e2) {
        case "focusin":
          (Vf(C) || C.contentEditable === "true") && (mr = C, La = u, mo = null);
          break;
        case "focusout":
          mo = La = mr = null;
          break;
        case "mousedown":
          Fa = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Fa = false, Xf(p, n, m);
          break;
        case "selectionchange":
          if (LS) break;
        case "keydown":
        case "keyup":
          Xf(p, n, m);
      }
      var T;
      if (sc) e: {
        switch (e2) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else hr ? _h(e2, n) && (E = "onCompositionEnd") : e2 === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Th && n.locale !== "ko" && (hr || E !== "onCompositionStart" ? E === "onCompositionEnd" && hr && (T = Ph()) : (gn = m, oc = "value" in gn ? gn.value : gn.textContent, hr = true)), C = nl(u, E), 0 < C.length && (E = new Ff(E, e2, null, n, m), p.push({ event: E, listeners: C }), T ? E.data = T : (T = $h(n), T !== null && (E.data = T)))), (T = _S ? $S(e2, n) : MS(e2, n)) && (u = nl(u, "onBeforeInput"), 0 < u.length && (m = new Ff("onBeforeInput", "beforeinput", null, n, m), p.push({ event: m, listeners: u }), m.data = T));
    }
    Fh(p, t);
  });
}
function Ao(e2, t, n) {
  return { instance: e2, listener: t, currentTarget: n };
}
function nl(e2, t) {
  for (var n = t + "Capture", r = []; e2 !== null; ) {
    var o = e2, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = $o(e2, n), i != null && r.unshift(Ao(e2, i, o)), i = $o(e2, t), i != null && r.push(Ao(e2, i, o))), e2 = e2.return;
  }
  return r;
}
function cr(e2) {
  if (e2 === null) return null;
  do
    e2 = e2.return;
  while (e2 && e2.tag !== 5);
  return e2 || null;
}
function qf(e2, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, o ? (a = $o(n, i), a != null && l.unshift(Ao(n, a, s))) : o || (a = $o(n, i), a != null && l.push(Ao(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e2.push({ event: t, listeners: l });
}
var WS = /\r\n?/g, VS = /\u0000|\uFFFD/g;
function Jf(e2) {
  return (typeof e2 == "string" ? e2 : "" + e2).replace(WS, `
`).replace(VS, "");
}
function Si(e2, t, n) {
  if (t = Jf(t), Jf(e2) !== t && n) throw Error(R(425));
}
function rl() {
}
var Ba = null, Ua = null;
function Wa(e2, t) {
  return e2 === "textarea" || e2 === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Va = typeof setTimeout == "function" ? setTimeout : void 0, HS = typeof clearTimeout == "function" ? clearTimeout : void 0, ed = typeof Promise == "function" ? Promise : void 0, KS = typeof queueMicrotask == "function" ? queueMicrotask : typeof ed < "u" ? function(e2) {
  return ed.resolve(null).then(e2).catch(YS);
} : Va;
function YS(e2) {
  setTimeout(function() {
    throw e2;
  });
}
function Zs(e2, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e2.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e2.removeChild(o), No(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  No(t);
}
function xn(e2) {
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
function td(e2) {
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
var Vr = Math.random().toString(36).slice(2), Lt = "__reactFiber$" + Vr, jo = "__reactProps$" + Vr, nn = "__reactContainer$" + Vr, Ha = "__reactEvents$" + Vr, GS = "__reactListeners$" + Vr, XS = "__reactHandles$" + Vr;
function Ln(e2) {
  var t = e2[Lt];
  if (t) return t;
  for (var n = e2.parentNode; n; ) {
    if (t = n[nn] || n[Lt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e2 = td(e2); e2 !== null; ) {
        if (n = e2[Lt]) return n;
        e2 = td(e2);
      }
      return t;
    }
    e2 = n, n = e2.parentNode;
  }
  return null;
}
function qo(e2) {
  return e2 = e2[Lt] || e2[nn], !e2 || e2.tag !== 5 && e2.tag !== 6 && e2.tag !== 13 && e2.tag !== 3 ? null : e2;
}
function yr(e2) {
  if (e2.tag === 5 || e2.tag === 6) return e2.stateNode;
  throw Error(R(33));
}
function us(e2) {
  return e2[jo] || null;
}
var Ka = [], vr = -1;
function bn(e2) {
  return { current: e2 };
}
function J(e2) {
  0 > vr || (e2.current = Ka[vr], Ka[vr] = null, vr--);
}
function Z(e2, t) {
  vr++, Ka[vr] = e2.current, e2.current = t;
}
var Mn = {}, Ne = bn(Mn), He = bn(false), Gn = Mn;
function Ar(e2, t) {
  var n = e2.type.contextTypes;
  if (!n) return Mn;
  var r = e2.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e2 = e2.stateNode, e2.__reactInternalMemoizedUnmaskedChildContext = t, e2.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ke(e2) {
  return e2 = e2.childContextTypes, e2 != null;
}
function ol() {
  J(He), J(Ne);
}
function nd(e2, t, n) {
  if (Ne.current !== Mn) throw Error(R(168));
  Z(Ne, t), Z(He, n);
}
function Uh(e2, t, n) {
  var r = e2.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, b1(e2) || "Unknown", o));
  return oe({}, n, r);
}
function il(e2) {
  return e2 = (e2 = e2.stateNode) && e2.__reactInternalMemoizedMergedChildContext || Mn, Gn = Ne.current, Z(Ne, e2), Z(He, He.current), true;
}
function rd(e2, t, n) {
  var r = e2.stateNode;
  if (!r) throw Error(R(169));
  n ? (e2 = Uh(e2, t, Gn), r.__reactInternalMemoizedMergedChildContext = e2, J(He), J(Ne), Z(Ne, e2)) : J(He), Z(He, n);
}
var Zt = null, cs = false, qs = false;
function Wh(e2) {
  Zt === null ? Zt = [e2] : Zt.push(e2);
}
function QS(e2) {
  cs = true, Wh(e2);
}
function Dn() {
  if (!qs && Zt !== null) {
    qs = true;
    var e2 = 0, t = K;
    try {
      var n = Zt;
      for (K = 1; e2 < n.length; e2++) {
        var r = n[e2];
        do
          r = r(true);
        while (r !== null);
      }
      Zt = null, cs = false;
    } catch (o) {
      throw Zt !== null && (Zt = Zt.slice(e2 + 1)), hh(ec, Dn), o;
    } finally {
      K = t, qs = false;
    }
  }
  return null;
}
var Sr = [], wr = 0, ll = null, sl = 0, ht = [], mt = 0, Xn = null, qt = 1, Jt = "";
function zn(e2, t) {
  Sr[wr++] = sl, Sr[wr++] = ll, ll = e2, sl = t;
}
function Vh(e2, t, n) {
  ht[mt++] = qt, ht[mt++] = Jt, ht[mt++] = Xn, Xn = e2;
  var r = qt;
  e2 = Jt;
  var o = 32 - $t(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - $t(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, qt = 1 << 32 - $t(t) + o | n << o | r, Jt = i + e2;
  } else qt = 1 << i | n << o | r, Jt = e2;
}
function uc(e2) {
  e2.return !== null && (zn(e2, 1), Vh(e2, 1, 0));
}
function cc(e2) {
  for (; e2 === ll; ) ll = Sr[--wr], Sr[wr] = null, sl = Sr[--wr], Sr[wr] = null;
  for (; e2 === Xn; ) Xn = ht[--mt], ht[mt] = null, Jt = ht[--mt], ht[mt] = null, qt = ht[--mt], ht[mt] = null;
}
var nt = null, et = null, te = false, _t = null;
function Hh(e2, t) {
  var n = gt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e2, t = e2.deletions, t === null ? (e2.deletions = [n], e2.flags |= 16) : t.push(n);
}
function od(e2, t) {
  switch (e2.tag) {
    case 5:
      var n = e2.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e2.stateNode = t, nt = e2, et = xn(t.firstChild), true) : false;
    case 6:
      return t = e2.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e2.stateNode = t, nt = e2, et = null, true) : false;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Xn !== null ? { id: qt, overflow: Jt } : null, e2.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = gt(18, null, null, 0), n.stateNode = t, n.return = e2, e2.child = n, nt = e2, et = null, true) : false;
    default:
      return false;
  }
}
function Ya(e2) {
  return (e2.mode & 1) !== 0 && (e2.flags & 128) === 0;
}
function Ga(e2) {
  if (te) {
    var t = et;
    if (t) {
      var n = t;
      if (!od(e2, t)) {
        if (Ya(e2)) throw Error(R(418));
        t = xn(n.nextSibling);
        var r = nt;
        t && od(e2, t) ? Hh(r, n) : (e2.flags = e2.flags & -4097 | 2, te = false, nt = e2);
      }
    } else {
      if (Ya(e2)) throw Error(R(418));
      e2.flags = e2.flags & -4097 | 2, te = false, nt = e2;
    }
  }
}
function id(e2) {
  for (e2 = e2.return; e2 !== null && e2.tag !== 5 && e2.tag !== 3 && e2.tag !== 13; ) e2 = e2.return;
  nt = e2;
}
function wi(e2) {
  if (e2 !== nt) return false;
  if (!te) return id(e2), te = true, false;
  var t;
  if ((t = e2.tag !== 3) && !(t = e2.tag !== 5) && (t = e2.type, t = t !== "head" && t !== "body" && !Wa(e2.type, e2.memoizedProps)), t && (t = et)) {
    if (Ya(e2)) throw Kh(), Error(R(418));
    for (; t; ) Hh(e2, t), t = xn(t.nextSibling);
  }
  if (id(e2), e2.tag === 13) {
    if (e2 = e2.memoizedState, e2 = e2 !== null ? e2.dehydrated : null, !e2) throw Error(R(317));
    e: {
      for (e2 = e2.nextSibling, t = 0; e2; ) {
        if (e2.nodeType === 8) {
          var n = e2.data;
          if (n === "/$") {
            if (t === 0) {
              et = xn(e2.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e2 = e2.nextSibling;
      }
      et = null;
    }
  } else et = nt ? xn(e2.stateNode.nextSibling) : null;
  return true;
}
function Kh() {
  for (var e2 = et; e2; ) e2 = xn(e2.nextSibling);
}
function jr() {
  et = nt = null, te = false;
}
function fc(e2) {
  _t === null ? _t = [e2] : _t.push(e2);
}
var ZS = sn.ReactCurrentBatchConfig;
function Jr(e2, t, n) {
  if (e2 = n.ref, e2 !== null && typeof e2 != "function" && typeof e2 != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e2));
      var o = r, i = "" + e2;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e2 != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e2));
  }
  return e2;
}
function xi(e2, t) {
  throw e2 = Object.prototype.toString.call(t), Error(R(31, e2 === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e2));
}
function ld(e2) {
  var t = e2._init;
  return t(e2._payload);
}
function Yh(e2) {
  function t(d, f) {
    if (e2) {
      var g = d.deletions;
      g === null ? (d.deletions = [f], d.flags |= 16) : g.push(f);
    }
  }
  function n(d, f) {
    if (!e2) return null;
    for (; f !== null; ) t(d, f), f = f.sibling;
    return null;
  }
  function r(d, f) {
    for (d = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? d.set(f.key, f) : d.set(f.index, f), f = f.sibling;
    return d;
  }
  function o(d, f) {
    return d = Pn(d, f), d.index = 0, d.sibling = null, d;
  }
  function i(d, f, g) {
    return d.index = g, e2 ? (g = d.alternate, g !== null ? (g = g.index, g < f ? (d.flags |= 2, f) : g) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function l(d) {
    return e2 && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, f, g, y) {
    return f === null || f.tag !== 6 ? (f = ia(g, d.mode, y), f.return = d, f) : (f = o(f, g), f.return = d, f);
  }
  function a(d, f, g, y) {
    var x = g.type;
    return x === pr ? m(d, f, g.props.children, y, g.key) : f !== null && (f.elementType === x || typeof x == "object" && x !== null && x.$$typeof === dn && ld(x) === f.type) ? (y = o(f, g.props), y.ref = Jr(d, f, g), y.return = d, y) : (y = Wi(g.type, g.key, g.props, null, d.mode, y), y.ref = Jr(d, f, g), y.return = d, y);
  }
  function u(d, f, g, y) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== g.containerInfo || f.stateNode.implementation !== g.implementation ? (f = la(g, d.mode, y), f.return = d, f) : (f = o(f, g.children || []), f.return = d, f);
  }
  function m(d, f, g, y, x) {
    return f === null || f.tag !== 7 ? (f = Vn(g, d.mode, y, x), f.return = d, f) : (f = o(f, g), f.return = d, f);
  }
  function p(d, f, g) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = ia("" + f, d.mode, g), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ci:
          return g = Wi(f.type, f.key, f.props, null, d.mode, g), g.ref = Jr(d, null, f), g.return = d, g;
        case dr:
          return f = la(f, d.mode, g), f.return = d, f;
        case dn:
          var y = f._init;
          return p(d, y(f._payload), g);
      }
      if (lo(f) || Gr(f)) return f = Vn(f, d.mode, g, null), f.return = d, f;
      xi(d, f);
    }
    return null;
  }
  function h(d, f, g, y) {
    var x = f !== null ? f.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return x !== null ? null : s(d, f, "" + g, y);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ci:
          return g.key === x ? a(d, f, g, y) : null;
        case dr:
          return g.key === x ? u(d, f, g, y) : null;
        case dn:
          return x = g._init, h(d, f, x(g._payload), y);
      }
      if (lo(g) || Gr(g)) return x !== null ? null : m(d, f, g, y, null);
      xi(d, g);
    }
    return null;
  }
  function S(d, f, g, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return d = d.get(g) || null, s(f, d, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ci:
          return d = d.get(y.key === null ? g : y.key) || null, a(f, d, y, x);
        case dr:
          return d = d.get(y.key === null ? g : y.key) || null, u(f, d, y, x);
        case dn:
          var C = y._init;
          return S(d, f, g, C(y._payload), x);
      }
      if (lo(y) || Gr(y)) return d = d.get(g) || null, m(f, d, y, x, null);
      xi(f, y);
    }
    return null;
  }
  function v(d, f, g, y) {
    for (var x = null, C = null, T = f, E = f = 0, N = null; T !== null && E < g.length; E++) {
      T.index > E ? (N = T, T = null) : N = T.sibling;
      var c = h(d, T, g[E], y);
      if (c === null) {
        T === null && (T = N);
        break;
      }
      e2 && T && c.alternate === null && t(d, T), f = i(c, f, E), C === null ? x = c : C.sibling = c, C = c, T = N;
    }
    if (E === g.length) return n(d, T), te && zn(d, E), x;
    if (T === null) {
      for (; E < g.length; E++) T = p(d, g[E], y), T !== null && (f = i(T, f, E), C === null ? x = T : C.sibling = T, C = T);
      return te && zn(d, E), x;
    }
    for (T = r(d, T); E < g.length; E++) N = S(T, d, E, g[E], y), N !== null && (e2 && N.alternate !== null && T.delete(N.key === null ? E : N.key), f = i(N, f, E), C === null ? x = N : C.sibling = N, C = N);
    return e2 && T.forEach(function($) {
      return t(d, $);
    }), te && zn(d, E), x;
  }
  function w(d, f, g, y) {
    var x = Gr(g);
    if (typeof x != "function") throw Error(R(150));
    if (g = x.call(g), g == null) throw Error(R(151));
    for (var C = x = null, T = f, E = f = 0, N = null, c = g.next(); T !== null && !c.done; E++, c = g.next()) {
      T.index > E ? (N = T, T = null) : N = T.sibling;
      var $ = h(d, T, c.value, y);
      if ($ === null) {
        T === null && (T = N);
        break;
      }
      e2 && T && $.alternate === null && t(d, T), f = i($, f, E), C === null ? x = $ : C.sibling = $, C = $, T = N;
    }
    if (c.done) return n(d, T), te && zn(d, E), x;
    if (T === null) {
      for (; !c.done; E++, c = g.next()) c = p(d, c.value, y), c !== null && (f = i(c, f, E), C === null ? x = c : C.sibling = c, C = c);
      return te && zn(d, E), x;
    }
    for (T = r(d, T); !c.done; E++, c = g.next()) c = S(T, d, E, c.value, y), c !== null && (e2 && c.alternate !== null && T.delete(c.key === null ? E : c.key), f = i(c, f, E), C === null ? x = c : C.sibling = c, C = c);
    return e2 && T.forEach(function(A) {
      return t(d, A);
    }), te && zn(d, E), x;
  }
  function _(d, f, g, y) {
    if (typeof g == "object" && g !== null && g.type === pr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ci:
          e: {
            for (var x = g.key, C = f; C !== null; ) {
              if (C.key === x) {
                if (x = g.type, x === pr) {
                  if (C.tag === 7) {
                    n(d, C.sibling), f = o(C, g.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === dn && ld(x) === C.type) {
                  n(d, C.sibling), f = o(C, g.props), f.ref = Jr(d, C, g), f.return = d, d = f;
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            g.type === pr ? (f = Vn(g.props.children, d.mode, y, g.key), f.return = d, d = f) : (y = Wi(g.type, g.key, g.props, null, d.mode, y), y.ref = Jr(d, f, g), y.return = d, d = y);
          }
          return l(d);
        case dr:
          e: {
            for (C = g.key; f !== null; ) {
              if (f.key === C) if (f.tag === 4 && f.stateNode.containerInfo === g.containerInfo && f.stateNode.implementation === g.implementation) {
                n(d, f.sibling), f = o(f, g.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = la(g, d.mode, y), f.return = d, d = f;
          }
          return l(d);
        case dn:
          return C = g._init, _(d, f, C(g._payload), y);
      }
      if (lo(g)) return v(d, f, g, y);
      if (Gr(g)) return w(d, f, g, y);
      xi(d, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, f !== null && f.tag === 6 ? (n(d, f.sibling), f = o(f, g), f.return = d, d = f) : (n(d, f), f = ia(g, d.mode, y), f.return = d, d = f), l(d)) : n(d, f);
  }
  return _;
}
var zr = Yh(true), Gh = Yh(false), al = bn(null), ul = null, xr = null, dc = null;
function pc() {
  dc = xr = ul = null;
}
function hc(e2) {
  var t = al.current;
  J(al), e2._currentValue = t;
}
function Xa(e2, t, n) {
  for (; e2 !== null; ) {
    var r = e2.alternate;
    if ((e2.childLanes & t) !== t ? (e2.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e2 === n) break;
    e2 = e2.return;
  }
}
function Nr(e2, t) {
  ul = e2, dc = xr = null, e2 = e2.dependencies, e2 !== null && e2.firstContext !== null && (e2.lanes & t && (Ve = true), e2.firstContext = null);
}
function vt(e2) {
  var t = e2._currentValue;
  if (dc !== e2) if (e2 = { context: e2, memoizedValue: t, next: null }, xr === null) {
    if (ul === null) throw Error(R(308));
    xr = e2, ul.dependencies = { lanes: 0, firstContext: e2 };
  } else xr = xr.next = e2;
  return t;
}
var Fn = null;
function mc(e2) {
  Fn === null ? Fn = [e2] : Fn.push(e2);
}
function Xh(e2, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, mc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, rn(e2, r);
}
function rn(e2, t) {
  e2.lanes |= t;
  var n = e2.alternate;
  for (n !== null && (n.lanes |= t), n = e2, e2 = e2.return; e2 !== null; ) e2.childLanes |= t, n = e2.alternate, n !== null && (n.childLanes |= t), n = e2, e2 = e2.return;
  return n.tag === 3 ? n.stateNode : null;
}
var pn = false;
function gc(e2) {
  e2.updateQueue = { baseState: e2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Qh(e2, t) {
  e2 = e2.updateQueue, t.updateQueue === e2 && (t.updateQueue = { baseState: e2.baseState, firstBaseUpdate: e2.firstBaseUpdate, lastBaseUpdate: e2.lastBaseUpdate, shared: e2.shared, effects: e2.effects });
}
function en(e2, t) {
  return { eventTime: e2, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Cn(e2, t, n) {
  var r = e2.updateQueue;
  if (r === null) return null;
  if (r = r.shared, B & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, rn(e2, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, mc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, rn(e2, n);
}
function zi(e2, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e2.pendingLanes, n |= r, t.lanes = n, tc(e2, n);
  }
}
function sd(e2, t) {
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
function cl(e2, t, n, r) {
  var o = e2.updateQueue;
  pn = false;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, l === null ? i = u : l.next = u, l = a;
    var m = e2.alternate;
    m !== null && (m = m.updateQueue, s = m.lastBaseUpdate, s !== l && (s === null ? m.firstBaseUpdate = u : s.next = u, m.lastBaseUpdate = a));
  }
  if (i !== null) {
    var p = o.baseState;
    l = 0, m = u = a = null, s = i;
    do {
      var h = s.lane, S = s.eventTime;
      if ((r & h) === h) {
        m !== null && (m = m.next = { eventTime: S, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
        e: {
          var v = e2, w = s;
          switch (h = t, S = n, w.tag) {
            case 1:
              if (v = w.payload, typeof v == "function") {
                p = v.call(S, p, h);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = w.payload, h = typeof v == "function" ? v.call(S, p, h) : v, h == null) break e;
              p = oe({}, p, h);
              break e;
            case 2:
              pn = true;
          }
        }
        s.callback !== null && s.lane !== 0 && (e2.flags |= 64, h = o.effects, h === null ? o.effects = [s] : h.push(s));
      } else S = { eventTime: S, lane: h, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, m === null ? (u = m = S, a = p) : m = m.next = S, l |= h;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        h = s, s = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
      }
    } while (true);
    if (m === null && (a = p), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = m, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Zn |= l, e2.lanes = l, e2.memoizedState = p;
  }
}
function ad(e2, t, n) {
  if (e2 = t.effects, t.effects = null, e2 !== null) for (t = 0; t < e2.length; t++) {
    var r = e2[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(R(191, o));
      o.call(r);
    }
  }
}
var Jo = {}, Wt = bn(Jo), zo = bn(Jo), Io = bn(Jo);
function Bn(e2) {
  if (e2 === Jo) throw Error(R(174));
  return e2;
}
function yc(e2, t) {
  switch (Z(Io, t), Z(zo, e2), Z(Wt, Jo), e2 = t.nodeType, e2) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ma(null, "");
      break;
    default:
      e2 = e2 === 8 ? t.parentNode : t, t = e2.namespaceURI || null, e2 = e2.tagName, t = Ma(t, e2);
  }
  J(Wt), Z(Wt, t);
}
function Ir() {
  J(Wt), J(zo), J(Io);
}
function Zh(e2) {
  Bn(Io.current);
  var t = Bn(Wt.current), n = Ma(t, e2.type);
  t !== n && (Z(zo, e2), Z(Wt, n));
}
function vc(e2) {
  zo.current === e2 && (J(Wt), J(zo));
}
var ne = bn(0);
function fl(e2) {
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
var Js = [];
function Sc() {
  for (var e2 = 0; e2 < Js.length; e2++) Js[e2]._workInProgressVersionPrimary = null;
  Js.length = 0;
}
var Ii = sn.ReactCurrentDispatcher, ea = sn.ReactCurrentBatchConfig, Qn = 0, re = null, me = null, Se = null, dl = false, go = false, Lo = 0, qS = 0;
function Te() {
  throw Error(R(321));
}
function wc(e2, t) {
  if (t === null) return false;
  for (var n = 0; n < t.length && n < e2.length; n++) if (!Nt(e2[n], t[n])) return false;
  return true;
}
function xc(e2, t, n, r, o, i) {
  if (Qn = i, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ii.current = e2 === null || e2.memoizedState === null ? nw : rw, e2 = n(r, o), go) {
    i = 0;
    do {
      if (go = false, Lo = 0, 25 <= i) throw Error(R(301));
      i += 1, Se = me = null, t.updateQueue = null, Ii.current = ow, e2 = n(r, o);
    } while (go);
  }
  if (Ii.current = pl, t = me !== null && me.next !== null, Qn = 0, Se = me = re = null, dl = false, t) throw Error(R(300));
  return e2;
}
function Cc() {
  var e2 = Lo !== 0;
  return Lo = 0, e2;
}
function At() {
  var e2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Se === null ? re.memoizedState = Se = e2 : Se = Se.next = e2, Se;
}
function St() {
  if (me === null) {
    var e2 = re.alternate;
    e2 = e2 !== null ? e2.memoizedState : null;
  } else e2 = me.next;
  var t = Se === null ? re.memoizedState : Se.next;
  if (t !== null) Se = t, me = e2;
  else {
    if (e2 === null) throw Error(R(310));
    me = e2, e2 = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, Se === null ? re.memoizedState = Se = e2 : Se = Se.next = e2;
  }
  return Se;
}
function Fo(e2, t) {
  return typeof t == "function" ? t(e2) : t;
}
function ta(e2) {
  var t = St(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e2;
  var r = me, o = r.baseQueue, i = n.pending;
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
      var m = u.lane;
      if ((Qn & m) === m) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e2(r, u.action);
      else {
        var p = { lane: m, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? (s = a = p, l = r) : a = a.next = p, re.lanes |= m, Zn |= m;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? l = r : a.next = s, Nt(r, t.memoizedState) || (Ve = true), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e2 = n.interleaved, e2 !== null) {
    o = e2;
    do
      i = o.lane, re.lanes |= i, Zn |= i, o = o.next;
    while (o !== e2);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function na(e2) {
  var t = St(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e2;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e2(i, l.action), l = l.next;
    while (l !== o);
    Nt(i, t.memoizedState) || (Ve = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function qh() {
}
function Jh(e2, t) {
  var n = re, r = St(), o = t(), i = !Nt(r.memoizedState, o);
  if (i && (r.memoizedState = o, Ve = true), r = r.queue, kc(nm.bind(null, n, r, e2), [e2]), r.getSnapshot !== t || i || Se !== null && Se.memoizedState.tag & 1) {
    if (n.flags |= 2048, Bo(9, tm.bind(null, n, r, o, t), void 0, null), we === null) throw Error(R(349));
    Qn & 30 || em(n, t, o);
  }
  return o;
}
function em(e2, t, n) {
  e2.flags |= 16384, e2 = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e2]) : (n = t.stores, n === null ? t.stores = [e2] : n.push(e2));
}
function tm(e2, t, n, r) {
  t.value = n, t.getSnapshot = r, rm(t) && om(e2);
}
function nm(e2, t, n) {
  return n(function() {
    rm(t) && om(e2);
  });
}
function rm(e2) {
  var t = e2.getSnapshot;
  e2 = e2.value;
  try {
    var n = t();
    return !Nt(e2, n);
  } catch {
    return true;
  }
}
function om(e2) {
  var t = rn(e2, 1);
  t !== null && Mt(t, e2, 1, -1);
}
function ud(e2) {
  var t = At();
  return typeof e2 == "function" && (e2 = e2()), t.memoizedState = t.baseState = e2, e2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Fo, lastRenderedState: e2 }, t.queue = e2, e2 = e2.dispatch = tw.bind(null, re, e2), [t.memoizedState, e2];
}
function Bo(e2, t, n, r) {
  return e2 = { tag: e2, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e2.next = e2) : (n = t.lastEffect, n === null ? t.lastEffect = e2.next = e2 : (r = n.next, n.next = e2, e2.next = r, t.lastEffect = e2)), e2;
}
function im() {
  return St().memoizedState;
}
function Li(e2, t, n, r) {
  var o = At();
  re.flags |= e2, o.memoizedState = Bo(1 | t, n, void 0, r === void 0 ? null : r);
}
function fs(e2, t, n, r) {
  var o = St();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (me !== null) {
    var l = me.memoizedState;
    if (i = l.destroy, r !== null && wc(r, l.deps)) {
      o.memoizedState = Bo(t, n, i, r);
      return;
    }
  }
  re.flags |= e2, o.memoizedState = Bo(1 | t, n, i, r);
}
function cd(e2, t) {
  return Li(8390656, 8, e2, t);
}
function kc(e2, t) {
  return fs(2048, 8, e2, t);
}
function lm(e2, t) {
  return fs(4, 2, e2, t);
}
function sm(e2, t) {
  return fs(4, 4, e2, t);
}
function am(e2, t) {
  if (typeof t == "function") return e2 = e2(), t(e2), function() {
    t(null);
  };
  if (t != null) return e2 = e2(), t.current = e2, function() {
    t.current = null;
  };
}
function um(e2, t, n) {
  return n = n != null ? n.concat([e2]) : null, fs(4, 4, am.bind(null, t, e2), n);
}
function Ec() {
}
function cm(e2, t) {
  var n = St();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wc(t, r[1]) ? r[0] : (n.memoizedState = [e2, t], e2);
}
function fm(e2, t) {
  var n = St();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wc(t, r[1]) ? r[0] : (e2 = e2(), n.memoizedState = [e2, t], e2);
}
function dm(e2, t, n) {
  return Qn & 21 ? (Nt(n, t) || (n = yh(), re.lanes |= n, Zn |= n, e2.baseState = true), t) : (e2.baseState && (e2.baseState = false, Ve = true), e2.memoizedState = n);
}
function JS(e2, t) {
  var n = K;
  K = n !== 0 && 4 > n ? n : 4, e2(true);
  var r = ea.transition;
  ea.transition = {};
  try {
    e2(false), t();
  } finally {
    K = n, ea.transition = r;
  }
}
function pm() {
  return St().memoizedState;
}
function ew(e2, t, n) {
  var r = En(e2);
  if (n = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null }, hm(e2)) mm(t, n);
  else if (n = Xh(e2, t, n, r), n !== null) {
    var o = Ie();
    Mt(n, e2, r, o), gm(n, t, r);
  }
}
function tw(e2, t, n) {
  var r = En(e2), o = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null };
  if (hm(e2)) mm(t, o);
  else {
    var i = e2.alternate;
    if (e2.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, s = i(l, n);
      if (o.hasEagerState = true, o.eagerState = s, Nt(s, l)) {
        var a = t.interleaved;
        a === null ? (o.next = o, mc(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Xh(e2, t, o, r), n !== null && (o = Ie(), Mt(n, e2, r, o), gm(n, t, r));
  }
}
function hm(e2) {
  var t = e2.alternate;
  return e2 === re || t !== null && t === re;
}
function mm(e2, t) {
  go = dl = true;
  var n = e2.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e2.pending = t;
}
function gm(e2, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e2.pendingLanes, n |= r, t.lanes = n, tc(e2, n);
  }
}
var pl = { readContext: vt, useCallback: Te, useContext: Te, useEffect: Te, useImperativeHandle: Te, useInsertionEffect: Te, useLayoutEffect: Te, useMemo: Te, useReducer: Te, useRef: Te, useState: Te, useDebugValue: Te, useDeferredValue: Te, useTransition: Te, useMutableSource: Te, useSyncExternalStore: Te, useId: Te, unstable_isNewReconciler: false }, nw = { readContext: vt, useCallback: function(e2, t) {
  return At().memoizedState = [e2, t === void 0 ? null : t], e2;
}, useContext: vt, useEffect: cd, useImperativeHandle: function(e2, t, n) {
  return n = n != null ? n.concat([e2]) : null, Li(4194308, 4, am.bind(null, t, e2), n);
}, useLayoutEffect: function(e2, t) {
  return Li(4194308, 4, e2, t);
}, useInsertionEffect: function(e2, t) {
  return Li(4, 2, e2, t);
}, useMemo: function(e2, t) {
  var n = At();
  return t = t === void 0 ? null : t, e2 = e2(), n.memoizedState = [e2, t], e2;
}, useReducer: function(e2, t, n) {
  var r = At();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e2, lastRenderedState: t }, r.queue = e2, e2 = e2.dispatch = ew.bind(null, re, e2), [r.memoizedState, e2];
}, useRef: function(e2) {
  var t = At();
  return e2 = { current: e2 }, t.memoizedState = e2;
}, useState: ud, useDebugValue: Ec, useDeferredValue: function(e2) {
  return At().memoizedState = e2;
}, useTransition: function() {
  var e2 = ud(false), t = e2[0];
  return e2 = JS.bind(null, e2[1]), At().memoizedState = e2, [t, e2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e2, t, n) {
  var r = re, o = At();
  if (te) {
    if (n === void 0) throw Error(R(407));
    n = n();
  } else {
    if (n = t(), we === null) throw Error(R(349));
    Qn & 30 || em(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, cd(nm.bind(null, r, i, e2), [e2]), r.flags |= 2048, Bo(9, tm.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e2 = At(), t = we.identifierPrefix;
  if (te) {
    var n = Jt, r = qt;
    n = (r & ~(1 << 32 - $t(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Lo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = qS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e2.memoizedState = t;
}, unstable_isNewReconciler: false }, rw = { readContext: vt, useCallback: cm, useContext: vt, useEffect: kc, useImperativeHandle: um, useInsertionEffect: lm, useLayoutEffect: sm, useMemo: fm, useReducer: ta, useRef: im, useState: function() {
  return ta(Fo);
}, useDebugValue: Ec, useDeferredValue: function(e2) {
  var t = St();
  return dm(t, me.memoizedState, e2);
}, useTransition: function() {
  var e2 = ta(Fo)[0], t = St().memoizedState;
  return [e2, t];
}, useMutableSource: qh, useSyncExternalStore: Jh, useId: pm, unstable_isNewReconciler: false }, ow = { readContext: vt, useCallback: cm, useContext: vt, useEffect: kc, useImperativeHandle: um, useInsertionEffect: lm, useLayoutEffect: sm, useMemo: fm, useReducer: na, useRef: im, useState: function() {
  return na(Fo);
}, useDebugValue: Ec, useDeferredValue: function(e2) {
  var t = St();
  return me === null ? t.memoizedState = e2 : dm(t, me.memoizedState, e2);
}, useTransition: function() {
  var e2 = na(Fo)[0], t = St().memoizedState;
  return [e2, t];
}, useMutableSource: qh, useSyncExternalStore: Jh, useId: pm, unstable_isNewReconciler: false };
function Pt(e2, t) {
  if (e2 && e2.defaultProps) {
    t = oe({}, t), e2 = e2.defaultProps;
    for (var n in e2) t[n] === void 0 && (t[n] = e2[n]);
    return t;
  }
  return t;
}
function Qa(e2, t, n, r) {
  t = e2.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e2.memoizedState = n, e2.lanes === 0 && (e2.updateQueue.baseState = n);
}
var ds = { isMounted: function(e2) {
  return (e2 = e2._reactInternals) ? nr(e2) === e2 : false;
}, enqueueSetState: function(e2, t, n) {
  e2 = e2._reactInternals;
  var r = Ie(), o = En(e2), i = en(r, o);
  i.payload = t, n != null && (i.callback = n), t = Cn(e2, i, o), t !== null && (Mt(t, e2, o, r), zi(t, e2, o));
}, enqueueReplaceState: function(e2, t, n) {
  e2 = e2._reactInternals;
  var r = Ie(), o = En(e2), i = en(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Cn(e2, i, o), t !== null && (Mt(t, e2, o, r), zi(t, e2, o));
}, enqueueForceUpdate: function(e2, t) {
  e2 = e2._reactInternals;
  var n = Ie(), r = En(e2), o = en(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Cn(e2, o, r), t !== null && (Mt(t, e2, r, n), zi(t, e2, r));
} };
function fd(e2, t, n, r, o, i, l) {
  return e2 = e2.stateNode, typeof e2.shouldComponentUpdate == "function" ? e2.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !bo(n, r) || !bo(o, i) : true;
}
function ym(e2, t, n) {
  var r = false, o = Mn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = vt(i) : (o = Ke(t) ? Gn : Ne.current, r = t.contextTypes, i = (r = r != null) ? Ar(e2, o) : Mn), t = new t(n, i), e2.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ds, e2.stateNode = t, t._reactInternals = e2, r && (e2 = e2.stateNode, e2.__reactInternalMemoizedUnmaskedChildContext = o, e2.__reactInternalMemoizedMaskedChildContext = i), t;
}
function dd(e2, t, n, r) {
  e2 = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e2 && ds.enqueueReplaceState(t, t.state, null);
}
function Za(e2, t, n, r) {
  var o = e2.stateNode;
  o.props = n, o.state = e2.memoizedState, o.refs = {}, gc(e2);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = vt(i) : (i = Ke(t) ? Gn : Ne.current, o.context = Ar(e2, i)), o.state = e2.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Qa(e2, t, i, n), o.state = e2.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ds.enqueueReplaceState(o, o.state, null), cl(e2, n, o, r), o.state = e2.memoizedState), typeof o.componentDidMount == "function" && (e2.flags |= 4194308);
}
function Lr(e2, t) {
  try {
    var n = "", r = t;
    do
      n += O1(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e2, source: t, stack: o, digest: null };
}
function ra(e2, t, n) {
  return { value: e2, source: null, stack: n ?? null, digest: t ?? null };
}
function qa(e2, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var iw = typeof WeakMap == "function" ? WeakMap : Map;
function vm(e2, t, n) {
  n = en(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ml || (ml = true, au = r), qa(e2, t);
  }, n;
}
function Sm(e2, t, n) {
  n = en(-1, n), n.tag = 3;
  var r = e2.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      qa(e2, t);
    };
  }
  var i = e2.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    qa(e2, t), typeof r != "function" && (kn === null ? kn = /* @__PURE__ */ new Set([this]) : kn.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function pd(e2, t, n) {
  var r = e2.pingCache;
  if (r === null) {
    r = e2.pingCache = new iw();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e2 = Sw.bind(null, e2, t, n), t.then(e2, e2));
}
function hd(e2) {
  do {
    var t;
    if ((t = e2.tag === 13) && (t = e2.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e2;
    e2 = e2.return;
  } while (e2 !== null);
  return null;
}
function md(e2, t, n, r, o) {
  return e2.mode & 1 ? (e2.flags |= 65536, e2.lanes = o, e2) : (e2 === t ? e2.flags |= 65536 : (e2.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = en(-1, 1), t.tag = 2, Cn(n, t, 1))), n.lanes |= 1), e2);
}
var lw = sn.ReactCurrentOwner, Ve = false;
function je(e2, t, n, r) {
  t.child = e2 === null ? Gh(t, null, n, r) : zr(t, e2.child, n, r);
}
function gd(e2, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Nr(t, o), r = xc(e2, t, n, r, i, o), n = Cc(), e2 !== null && !Ve ? (t.updateQueue = e2.updateQueue, t.flags &= -2053, e2.lanes &= ~o, on(e2, t, o)) : (te && n && uc(t), t.flags |= 1, je(e2, t, r, o), t.child);
}
function yd(e2, t, n, r, o) {
  if (e2 === null) {
    var i = n.type;
    return typeof i == "function" && !Oc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, wm(e2, t, i, r, o)) : (e2 = Wi(n.type, null, r, t, t.mode, o), e2.ref = t.ref, e2.return = t, t.child = e2);
  }
  if (i = e2.child, !(e2.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : bo, n(l, r) && e2.ref === t.ref) return on(e2, t, o);
  }
  return t.flags |= 1, e2 = Pn(i, r), e2.ref = t.ref, e2.return = t, t.child = e2;
}
function wm(e2, t, n, r, o) {
  if (e2 !== null) {
    var i = e2.memoizedProps;
    if (bo(i, r) && e2.ref === t.ref) if (Ve = false, t.pendingProps = r = i, (e2.lanes & o) !== 0) e2.flags & 131072 && (Ve = true);
    else return t.lanes = e2.lanes, on(e2, t, o);
  }
  return Ja(e2, t, n, r, o);
}
function xm(e2, t, n) {
  var r = t.pendingProps, o = r.children, i = e2 !== null ? e2.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Z(kr, qe), qe |= n;
  else {
    if (!(n & 1073741824)) return e2 = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e2, cachePool: null, transitions: null }, t.updateQueue = null, Z(kr, qe), qe |= e2, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Z(kr, qe), qe |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Z(kr, qe), qe |= r;
  return je(e2, t, o, n), t.child;
}
function Cm(e2, t) {
  var n = t.ref;
  (e2 === null && n !== null || e2 !== null && e2.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ja(e2, t, n, r, o) {
  var i = Ke(n) ? Gn : Ne.current;
  return i = Ar(t, i), Nr(t, o), n = xc(e2, t, n, r, i, o), r = Cc(), e2 !== null && !Ve ? (t.updateQueue = e2.updateQueue, t.flags &= -2053, e2.lanes &= ~o, on(e2, t, o)) : (te && r && uc(t), t.flags |= 1, je(e2, t, n, o), t.child);
}
function vd(e2, t, n, r, o) {
  if (Ke(n)) {
    var i = true;
    il(t);
  } else i = false;
  if (Nr(t, o), t.stateNode === null) Fi(e2, t), ym(t, n, r), Za(t, n, r, o), r = true;
  else if (e2 === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = vt(u) : (u = Ke(n) ? Gn : Ne.current, u = Ar(t, u));
    var m = n.getDerivedStateFromProps, p = typeof m == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    p || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && dd(t, l, r, u), pn = false;
    var h = t.memoizedState;
    l.state = h, cl(t, r, l, o), a = t.memoizedState, s !== r || h !== a || He.current || pn ? (typeof m == "function" && (Qa(t, n, m, r), a = t.memoizedState), (s = pn || fd(t, n, s, r, h, a, u)) ? (p || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = false);
  } else {
    l = t.stateNode, Qh(e2, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Pt(t.type, s), l.props = u, p = t.pendingProps, h = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = vt(a) : (a = Ke(n) ? Gn : Ne.current, a = Ar(t, a));
    var S = n.getDerivedStateFromProps;
    (m = typeof S == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== p || h !== a) && dd(t, l, r, a), pn = false, h = t.memoizedState, l.state = h, cl(t, r, l, o);
    var v = t.memoizedState;
    s !== p || h !== v || He.current || pn ? (typeof S == "function" && (Qa(t, n, S, r), v = t.memoizedState), (u = pn || fd(t, n, u, r, h, v, a) || false) ? (m || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, v, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, v, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e2.memoizedProps && h === e2.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e2.memoizedProps && h === e2.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), l.props = r, l.state = v, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e2.memoizedProps && h === e2.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e2.memoizedProps && h === e2.memoizedState || (t.flags |= 1024), r = false);
  }
  return eu(e2, t, n, r, i, o);
}
function eu(e2, t, n, r, o, i) {
  Cm(e2, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && rd(t, n, false), on(e2, t, i);
  r = t.stateNode, lw.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e2 !== null && l ? (t.child = zr(t, e2.child, null, i), t.child = zr(t, null, s, i)) : je(e2, t, s, i), t.memoizedState = r.state, o && rd(t, n, true), t.child;
}
function km(e2) {
  var t = e2.stateNode;
  t.pendingContext ? nd(e2, t.pendingContext, t.pendingContext !== t.context) : t.context && nd(e2, t.context, false), yc(e2, t.containerInfo);
}
function Sd(e2, t, n, r, o) {
  return jr(), fc(o), t.flags |= 256, je(e2, t, n, r), t.child;
}
var tu = { dehydrated: null, treeContext: null, retryLane: 0 };
function nu(e2) {
  return { baseLanes: e2, cachePool: null, transitions: null };
}
function Em(e2, t, n) {
  var r = t.pendingProps, o = ne.current, i = false, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e2 !== null && e2.memoizedState === null ? false : (o & 2) !== 0), s ? (i = true, t.flags &= -129) : (e2 === null || e2.memoizedState !== null) && (o |= 1), Z(ne, o & 1), e2 === null) return Ga(t), e2 = t.memoizedState, e2 !== null && (e2 = e2.dehydrated, e2 !== null) ? (t.mode & 1 ? e2.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e2 = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = ms(l, r, 0, null), e2 = Vn(e2, r, n, null), i.return = t, e2.return = t, i.sibling = e2, t.child = i, t.child.memoizedState = nu(n), t.memoizedState = tu, e2) : Pc(t, l));
  if (o = e2.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return sw(e2, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e2.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Pn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Pn(s, i) : (i = Vn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e2.child.memoizedState, l = l === null ? nu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e2.childLanes & ~n, t.memoizedState = tu, r;
  }
  return i = e2.child, e2 = i.sibling, r = Pn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e2 !== null && (n = t.deletions, n === null ? (t.deletions = [e2], t.flags |= 16) : n.push(e2)), t.child = r, t.memoizedState = null, r;
}
function Pc(e2, t) {
  return t = ms({ mode: "visible", children: t }, e2.mode, 0, null), t.return = e2, e2.child = t;
}
function Ci(e2, t, n, r) {
  return r !== null && fc(r), zr(t, e2.child, null, n), e2 = Pc(t, t.pendingProps.children), e2.flags |= 2, t.memoizedState = null, e2;
}
function sw(e2, t, n, r, o, i, l) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = ra(Error(R(422))), Ci(e2, t, l, r)) : t.memoizedState !== null ? (t.child = e2.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ms({ mode: "visible", children: r.children }, o, 0, null), i = Vn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && zr(t, e2.child, null, l), t.child.memoizedState = nu(l), t.memoizedState = tu, i);
  if (!(t.mode & 1)) return Ci(e2, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(R(419)), r = ra(i, r, void 0), Ci(e2, t, l, r);
  }
  if (s = (l & e2.childLanes) !== 0, Ve || s) {
    if (r = we, r !== null) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, rn(e2, o), Mt(r, e2, o, -1));
    }
    return Nc(), r = ra(Error(R(421))), Ci(e2, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e2.child, t = ww.bind(null, e2), o._reactRetry = t, null) : (e2 = i.treeContext, et = xn(o.nextSibling), nt = t, te = true, _t = null, e2 !== null && (ht[mt++] = qt, ht[mt++] = Jt, ht[mt++] = Xn, qt = e2.id, Jt = e2.overflow, Xn = t), t = Pc(t, r.children), t.flags |= 4096, t);
}
function wd(e2, t, n) {
  e2.lanes |= t;
  var r = e2.alternate;
  r !== null && (r.lanes |= t), Xa(e2.return, t, n);
}
function oa(e2, t, n, r, o) {
  var i = e2.memoizedState;
  i === null ? e2.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Pm(e2, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (je(e2, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e2 !== null && e2.flags & 128) e: for (e2 = t.child; e2 !== null; ) {
      if (e2.tag === 13) e2.memoizedState !== null && wd(e2, n, t);
      else if (e2.tag === 19) wd(e2, n, t);
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
  if (Z(ne, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e2 = n.alternate, e2 !== null && fl(e2) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), oa(t, false, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e2 = o.alternate, e2 !== null && fl(e2) === null) {
          t.child = o;
          break;
        }
        e2 = o.sibling, o.sibling = n, n = o, o = e2;
      }
      oa(t, true, n, null, i);
      break;
    case "together":
      oa(t, false, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Fi(e2, t) {
  !(t.mode & 1) && e2 !== null && (e2.alternate = null, t.alternate = null, t.flags |= 2);
}
function on(e2, t, n) {
  if (e2 !== null && (t.dependencies = e2.dependencies), Zn |= t.lanes, !(n & t.childLanes)) return null;
  if (e2 !== null && t.child !== e2.child) throw Error(R(153));
  if (t.child !== null) {
    for (e2 = t.child, n = Pn(e2, e2.pendingProps), t.child = n, n.return = t; e2.sibling !== null; ) e2 = e2.sibling, n = n.sibling = Pn(e2, e2.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function aw(e2, t, n) {
  switch (t.tag) {
    case 3:
      km(t), jr();
      break;
    case 5:
      Zh(t);
      break;
    case 1:
      Ke(t.type) && il(t);
      break;
    case 4:
      yc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Z(al, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Z(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Em(e2, t, n) : (Z(ne, ne.current & 1), e2 = on(e2, t, n), e2 !== null ? e2.sibling : null);
      Z(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e2.flags & 128) {
        if (r) return Pm(e2, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Z(ne, ne.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, xm(e2, t, n);
  }
  return on(e2, t, n);
}
var Tm, ru, _m, $m;
Tm = function(e2, t) {
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
ru = function() {
};
_m = function(e2, t, n, r) {
  var o = e2.memoizedProps;
  if (o !== r) {
    e2 = t.stateNode, Bn(Wt.current);
    var i = null;
    switch (n) {
      case "input":
        o = Pa(e2, o), r = Pa(e2, r), i = [];
        break;
      case "select":
        o = oe({}, o, { value: void 0 }), r = oe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = $a(e2, o), r = $a(e2, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e2.onclick = rl);
    }
    Ra(n, r);
    var l;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var s = o[u];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (To.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = o == null ? void 0 : o[u], r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
        for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (i || (i = []), i.push(u, n)), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (To.hasOwnProperty(u) ? (a != null && u === "onScroll" && q("scroll", e2), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
$m = function(e2, t, n, r) {
  n !== r && (t.flags |= 4);
};
function eo(e2, t) {
  if (!te) switch (e2.tailMode) {
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
function _e(e2) {
  var t = e2.alternate !== null && e2.alternate.child === e2.child, n = 0, r = 0;
  if (t) for (var o = e2.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e2, o = o.sibling;
  else for (o = e2.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e2, o = o.sibling;
  return e2.subtreeFlags |= r, e2.childLanes = n, t;
}
function uw(e2, t, n) {
  var r = t.pendingProps;
  switch (cc(t), t.tag) {
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
      return _e(t), null;
    case 1:
      return Ke(t.type) && ol(), _e(t), null;
    case 3:
      return r = t.stateNode, Ir(), J(He), J(Ne), Sc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e2 === null || e2.child === null) && (wi(t) ? t.flags |= 4 : e2 === null || e2.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, _t !== null && (fu(_t), _t = null))), ru(e2, t), _e(t), null;
    case 5:
      vc(t);
      var o = Bn(Io.current);
      if (n = t.type, e2 !== null && t.stateNode != null) _m(e2, t, n, r, o), e2.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return _e(t), null;
        }
        if (e2 = Bn(Wt.current), wi(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Lt] = t, r[jo] = i, e2 = (t.mode & 1) !== 0, n) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ao.length; o++) q(ao[o], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q("error", r), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              Mf(r, i), q("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, q("invalid", r);
              break;
            case "textarea":
              Nf(r, i), q("invalid", r);
          }
          Ra(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== true && Si(r.textContent, s, e2), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== true && Si(r.textContent, s, e2), o = ["children", "" + s]) : To.hasOwnProperty(l) && s != null && l === "onScroll" && q("scroll", r);
          }
          switch (n) {
            case "input":
              fi(r), Rf(r, i, true);
              break;
            case "textarea":
              fi(r), Of(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = rl);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e2 === "http://www.w3.org/1999/xhtml" && (e2 = nh(n)), e2 === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e2 = l.createElement("div"), e2.innerHTML = "<script><\/script>", e2 = e2.removeChild(e2.firstChild)) : typeof r.is == "string" ? e2 = l.createElement(n, { is: r.is }) : (e2 = l.createElement(n), n === "select" && (l = e2, r.multiple ? l.multiple = true : r.size && (l.size = r.size))) : e2 = l.createElementNS(e2, n), e2[Lt] = t, e2[jo] = r, Tm(e2, t, false, false), t.stateNode = e2;
          e: {
            switch (l = Na(n, r), n) {
              case "dialog":
                q("cancel", e2), q("close", e2), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e2), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ao.length; o++) q(ao[o], e2);
                o = r;
                break;
              case "source":
                q("error", e2), o = r;
                break;
              case "img":
              case "image":
              case "link":
                q("error", e2), q("load", e2), o = r;
                break;
              case "details":
                q("toggle", e2), o = r;
                break;
              case "input":
                Mf(e2, r), o = Pa(e2, r), q("invalid", e2);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e2._wrapperState = { wasMultiple: !!r.multiple }, o = oe({}, r, { value: void 0 }), q("invalid", e2);
                break;
              case "textarea":
                Nf(e2, r), o = $a(e2, r), q("invalid", e2);
                break;
              default:
                o = r;
            }
            Ra(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? ih(e2, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && rh(e2, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && _o(e2, a) : typeof a == "number" && _o(e2, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (To.hasOwnProperty(i) ? a != null && i === "onScroll" && q("scroll", e2) : a != null && Xu(e2, i, a, l));
            }
            switch (n) {
              case "input":
                fi(e2), Rf(e2, r, false);
                break;
              case "textarea":
                fi(e2), Of(e2);
                break;
              case "option":
                r.value != null && e2.setAttribute("value", "" + $n(r.value));
                break;
              case "select":
                e2.multiple = !!r.multiple, i = r.value, i != null ? _r(e2, !!r.multiple, i, false) : r.defaultValue != null && _r(e2, !!r.multiple, r.defaultValue, true);
                break;
              default:
                typeof o.onClick == "function" && (e2.onclick = rl);
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
      return _e(t), null;
    case 6:
      if (e2 && t.stateNode != null) $m(e2, t, e2.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (n = Bn(Io.current), Bn(Wt.current), wi(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Lt] = t, (i = r.nodeValue !== n) && (e2 = nt, e2 !== null)) switch (e2.tag) {
            case 3:
              Si(r.nodeValue, n, (e2.mode & 1) !== 0);
              break;
            case 5:
              e2.memoizedProps.suppressHydrationWarning !== true && Si(r.nodeValue, n, (e2.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Lt] = t, t.stateNode = r;
      }
      return _e(t), null;
    case 13:
      if (J(ne), r = t.memoizedState, e2 === null || e2.memoizedState !== null && e2.memoizedState.dehydrated !== null) {
        if (te && et !== null && t.mode & 1 && !(t.flags & 128)) Kh(), jr(), t.flags |= 98560, i = false;
        else if (i = wi(t), r !== null && r.dehydrated !== null) {
          if (e2 === null) {
            if (!i) throw Error(R(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(R(317));
            i[Lt] = t;
          } else jr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          _e(t), i = false;
        } else _t !== null && (fu(_t), _t = null), i = true;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e2 !== null && e2.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e2 === null || ne.current & 1 ? ye === 0 && (ye = 3) : Nc())), t.updateQueue !== null && (t.flags |= 4), _e(t), null);
    case 4:
      return Ir(), ru(e2, t), e2 === null && Do(t.stateNode.containerInfo), _e(t), null;
    case 10:
      return hc(t.type._context), _e(t), null;
    case 17:
      return Ke(t.type) && ol(), _e(t), null;
    case 19:
      if (J(ne), i = t.memoizedState, i === null) return _e(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) eo(i, false);
      else {
        if (ye !== 0 || e2 !== null && e2.flags & 128) for (e2 = t.child; e2 !== null; ) {
          if (l = fl(e2), l !== null) {
            for (t.flags |= 128, eo(i, false), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e2 = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e2, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e2 = l.dependencies, i.dependencies = e2 === null ? null : { lanes: e2.lanes, firstContext: e2.firstContext }), n = n.sibling;
            return Z(ne, ne.current & 1 | 2), t.child;
          }
          e2 = e2.sibling;
        }
        i.tail !== null && fe() > Fr && (t.flags |= 128, r = true, eo(i, false), t.lanes = 4194304);
      }
      else {
        if (!r) if (e2 = fl(l), e2 !== null) {
          if (t.flags |= 128, r = true, n = e2.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), eo(i, true), i.tail === null && i.tailMode === "hidden" && !l.alternate && !te) return _e(t), null;
        } else 2 * fe() - i.renderingStartTime > Fr && n !== 1073741824 && (t.flags |= 128, r = true, eo(i, false), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = fe(), t.sibling = null, n = ne.current, Z(ne, r ? n & 1 | 2 : n & 1), t) : (_e(t), null);
    case 22:
    case 23:
      return Rc(), r = t.memoizedState !== null, e2 !== null && e2.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? qe & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function cw(e2, t) {
  switch (cc(t), t.tag) {
    case 1:
      return Ke(t.type) && ol(), e2 = t.flags, e2 & 65536 ? (t.flags = e2 & -65537 | 128, t) : null;
    case 3:
      return Ir(), J(He), J(Ne), Sc(), e2 = t.flags, e2 & 65536 && !(e2 & 128) ? (t.flags = e2 & -65537 | 128, t) : null;
    case 5:
      return vc(t), null;
    case 13:
      if (J(ne), e2 = t.memoizedState, e2 !== null && e2.dehydrated !== null) {
        if (t.alternate === null) throw Error(R(340));
        jr();
      }
      return e2 = t.flags, e2 & 65536 ? (t.flags = e2 & -65537 | 128, t) : null;
    case 19:
      return J(ne), null;
    case 4:
      return Ir(), null;
    case 10:
      return hc(t.type._context), null;
    case 22:
    case 23:
      return Rc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ki = false, Re = false, fw = typeof WeakSet == "function" ? WeakSet : Set, b = null;
function Cr(e2, t) {
  var n = e2.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    se(e2, t, r);
  }
  else n.current = null;
}
function ou(e2, t, n) {
  try {
    n();
  } catch (r) {
    se(e2, t, r);
  }
}
var xd = false;
function dw(e2, t) {
  if (Ba = el, e2 = bh(), ac(e2)) {
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
        var l = 0, s = -1, a = -1, u = 0, m = 0, p = e2, h = null;
        t: for (; ; ) {
          for (var S; p !== n || o !== 0 && p.nodeType !== 3 || (s = l + o), p !== i || r !== 0 && p.nodeType !== 3 || (a = l + r), p.nodeType === 3 && (l += p.nodeValue.length), (S = p.firstChild) !== null; ) h = p, p = S;
          for (; ; ) {
            if (p === e2) break t;
            if (h === n && ++u === o && (s = l), h === i && ++m === r && (a = l), (S = p.nextSibling) !== null) break;
            p = h, h = p.parentNode;
          }
          p = S;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ua = { focusedElem: e2, selectionRange: n }, el = false, b = t; b !== null; ) if (t = b, e2 = t.child, (t.subtreeFlags & 1028) !== 0 && e2 !== null) e2.return = t, b = e2;
  else for (; b !== null; ) {
    t = b;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var w = v.memoizedProps, _ = v.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Pt(t.type, w), _);
            d.__reactInternalSnapshotBeforeUpdate = f;
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
          throw Error(R(163));
      }
    } catch (y) {
      se(t, t.return, y);
    }
    if (e2 = t.sibling, e2 !== null) {
      e2.return = t.return, b = e2;
      break;
    }
    b = t.return;
  }
  return v = xd, xd = false, v;
}
function yo(e2, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e2) === e2) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && ou(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ps(e2, t) {
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
function iu(e2) {
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
function Mm(e2) {
  var t = e2.alternate;
  t !== null && (e2.alternate = null, Mm(t)), e2.child = null, e2.deletions = null, e2.sibling = null, e2.tag === 5 && (t = e2.stateNode, t !== null && (delete t[Lt], delete t[jo], delete t[Ha], delete t[GS], delete t[XS])), e2.stateNode = null, e2.return = null, e2.dependencies = null, e2.memoizedProps = null, e2.memoizedState = null, e2.pendingProps = null, e2.stateNode = null, e2.updateQueue = null;
}
function Rm(e2) {
  return e2.tag === 5 || e2.tag === 3 || e2.tag === 4;
}
function Cd(e2) {
  e: for (; ; ) {
    for (; e2.sibling === null; ) {
      if (e2.return === null || Rm(e2.return)) return null;
      e2 = e2.return;
    }
    for (e2.sibling.return = e2.return, e2 = e2.sibling; e2.tag !== 5 && e2.tag !== 6 && e2.tag !== 18; ) {
      if (e2.flags & 2 || e2.child === null || e2.tag === 4) continue e;
      e2.child.return = e2, e2 = e2.child;
    }
    if (!(e2.flags & 2)) return e2.stateNode;
  }
}
function lu(e2, t, n) {
  var r = e2.tag;
  if (r === 5 || r === 6) e2 = e2.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e2, t) : n.insertBefore(e2, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e2, n)) : (t = n, t.appendChild(e2)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = rl));
  else if (r !== 4 && (e2 = e2.child, e2 !== null)) for (lu(e2, t, n), e2 = e2.sibling; e2 !== null; ) lu(e2, t, n), e2 = e2.sibling;
}
function su(e2, t, n) {
  var r = e2.tag;
  if (r === 5 || r === 6) e2 = e2.stateNode, t ? n.insertBefore(e2, t) : n.appendChild(e2);
  else if (r !== 4 && (e2 = e2.child, e2 !== null)) for (su(e2, t, n), e2 = e2.sibling; e2 !== null; ) su(e2, t, n), e2 = e2.sibling;
}
var Ce = null, Tt = false;
function an(e2, t, n) {
  for (n = n.child; n !== null; ) Nm(e2, t, n), n = n.sibling;
}
function Nm(e2, t, n) {
  if (Ut && typeof Ut.onCommitFiberUnmount == "function") try {
    Ut.onCommitFiberUnmount(is, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Re || Cr(n, t);
    case 6:
      var r = Ce, o = Tt;
      Ce = null, an(e2, t, n), Ce = r, Tt = o, Ce !== null && (Tt ? (e2 = Ce, n = n.stateNode, e2.nodeType === 8 ? e2.parentNode.removeChild(n) : e2.removeChild(n)) : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null && (Tt ? (e2 = Ce, n = n.stateNode, e2.nodeType === 8 ? Zs(e2.parentNode, n) : e2.nodeType === 1 && Zs(e2, n), No(e2)) : Zs(Ce, n.stateNode));
      break;
    case 4:
      r = Ce, o = Tt, Ce = n.stateNode.containerInfo, Tt = true, an(e2, t, n), Ce = r, Tt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && ou(n, t, l), o = o.next;
        } while (o !== r);
      }
      an(e2, t, n);
      break;
    case 1:
      if (!Re && (Cr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        se(n, t, s);
      }
      an(e2, t, n);
      break;
    case 21:
      an(e2, t, n);
      break;
    case 22:
      n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null, an(e2, t, n), Re = r) : an(e2, t, n);
      break;
    default:
      an(e2, t, n);
  }
}
function kd(e2) {
  var t = e2.updateQueue;
  if (t !== null) {
    e2.updateQueue = null;
    var n = e2.stateNode;
    n === null && (n = e2.stateNode = new fw()), t.forEach(function(r) {
      var o = xw.bind(null, e2, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function kt(e2, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e2, l = t, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            Ce = s.stateNode, Tt = false;
            break e;
          case 3:
            Ce = s.stateNode.containerInfo, Tt = true;
            break e;
          case 4:
            Ce = s.stateNode.containerInfo, Tt = true;
            break e;
        }
        s = s.return;
      }
      if (Ce === null) throw Error(R(160));
      Nm(i, l, o), Ce = null, Tt = false;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      se(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Om(t, e2), t = t.sibling;
}
function Om(e2, t) {
  var n = e2.alternate, r = e2.flags;
  switch (e2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (kt(t, e2), Dt(e2), r & 4) {
        try {
          yo(3, e2, e2.return), ps(3, e2);
        } catch (w) {
          se(e2, e2.return, w);
        }
        try {
          yo(5, e2, e2.return);
        } catch (w) {
          se(e2, e2.return, w);
        }
      }
      break;
    case 1:
      kt(t, e2), Dt(e2), r & 512 && n !== null && Cr(n, n.return);
      break;
    case 5:
      if (kt(t, e2), Dt(e2), r & 512 && n !== null && Cr(n, n.return), e2.flags & 32) {
        var o = e2.stateNode;
        try {
          _o(o, "");
        } catch (w) {
          se(e2, e2.return, w);
        }
      }
      if (r & 4 && (o = e2.stateNode, o != null)) {
        var i = e2.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e2.type, a = e2.updateQueue;
        if (e2.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && eh(o, i), Na(s, l);
          var u = Na(s, i);
          for (l = 0; l < a.length; l += 2) {
            var m = a[l], p = a[l + 1];
            m === "style" ? ih(o, p) : m === "dangerouslySetInnerHTML" ? rh(o, p) : m === "children" ? _o(o, p) : Xu(o, m, p, u);
          }
          switch (s) {
            case "input":
              Ta(o, i);
              break;
            case "textarea":
              th(o, i);
              break;
            case "select":
              var h = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var S = i.value;
              S != null ? _r(o, !!i.multiple, S, false) : h !== !!i.multiple && (i.defaultValue != null ? _r(o, !!i.multiple, i.defaultValue, true) : _r(o, !!i.multiple, i.multiple ? [] : "", false));
          }
          o[jo] = i;
        } catch (w) {
          se(e2, e2.return, w);
        }
      }
      break;
    case 6:
      if (kt(t, e2), Dt(e2), r & 4) {
        if (e2.stateNode === null) throw Error(R(162));
        o = e2.stateNode, i = e2.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (w) {
          se(e2, e2.return, w);
        }
      }
      break;
    case 3:
      if (kt(t, e2), Dt(e2), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        No(t.containerInfo);
      } catch (w) {
        se(e2, e2.return, w);
      }
      break;
    case 4:
      kt(t, e2), Dt(e2);
      break;
    case 13:
      kt(t, e2), Dt(e2), o = e2.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || ($c = fe())), r & 4 && kd(e2);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e2.mode & 1 ? (Re = (u = Re) || m, kt(t, e2), Re = u) : kt(t, e2), Dt(e2), r & 8192) {
        if (u = e2.memoizedState !== null, (e2.stateNode.isHidden = u) && !m && e2.mode & 1) for (b = e2, m = e2.child; m !== null; ) {
          for (p = b = m; b !== null; ) {
            switch (h = b, S = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                yo(4, h, h.return);
                break;
              case 1:
                Cr(h, h.return);
                var v = h.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (w) {
                    se(r, n, w);
                  }
                }
                break;
              case 5:
                Cr(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  Pd(p);
                  continue;
                }
            }
            S !== null ? (S.return = h, b = S) : Pd(p);
          }
          m = m.sibling;
        }
        e: for (m = null, p = e2; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                o = p.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = p.stateNode, a = p.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = oh("display", l));
              } catch (w) {
                se(e2, e2.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (m === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (w) {
              se(e2, e2.return, w);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e2) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e2) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e2) break e;
            m === p && (m = null), p = p.return;
          }
          m === p && (m = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      kt(t, e2), Dt(e2), r & 4 && kd(e2);
      break;
    case 21:
      break;
    default:
      kt(t, e2), Dt(e2);
  }
}
function Dt(e2) {
  var t = e2.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e2.return; n !== null; ) {
          if (Rm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (_o(o, ""), r.flags &= -33);
          var i = Cd(e2);
          su(e2, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = Cd(e2);
          lu(e2, s, l);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      se(e2, e2.return, a);
    }
    e2.flags &= -3;
  }
  t & 4096 && (e2.flags &= -4097);
}
function pw(e2, t, n) {
  b = e2, bm(e2);
}
function bm(e2, t, n) {
  for (var r = (e2.mode & 1) !== 0; b !== null; ) {
    var o = b, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ki;
      if (!l) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || Re;
        s = ki;
        var u = Re;
        if (ki = l, (Re = a) && !u) for (b = o; b !== null; ) l = b, a = l.child, l.tag === 22 && l.memoizedState !== null ? Td(o) : a !== null ? (a.return = l, b = a) : Td(o);
        for (; i !== null; ) b = i, bm(i), i = i.sibling;
        b = o, ki = s, Re = u;
      }
      Ed(e2);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, b = i) : Ed(e2);
  }
}
function Ed(e2) {
  for (; b !== null; ) {
    var t = b;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Re || ps(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Re) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Pt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && ad(t, i, r);
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
              ad(t, l, n);
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
                var m = u.memoizedState;
                if (m !== null) {
                  var p = m.dehydrated;
                  p !== null && No(p);
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
            throw Error(R(163));
        }
        Re || t.flags & 512 && iu(t);
      } catch (h) {
        se(t, t.return, h);
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
function Pd(e2) {
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
function Td(e2) {
  for (; b !== null; ) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ps(4, t);
          } catch (a) {
            se(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              se(t, o, a);
            }
          }
          var i = t.return;
          try {
            iu(t);
          } catch (a) {
            se(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            iu(t);
          } catch (a) {
            se(t, l, a);
          }
      }
    } catch (a) {
      se(t, t.return, a);
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
var hw = Math.ceil, hl = sn.ReactCurrentDispatcher, Tc = sn.ReactCurrentOwner, yt = sn.ReactCurrentBatchConfig, B = 0, we = null, he = null, Ee = 0, qe = 0, kr = bn(0), ye = 0, Uo = null, Zn = 0, hs = 0, _c = 0, vo = null, Ue = null, $c = 0, Fr = 1 / 0, Qt = null, ml = false, au = null, kn = null, Ei = false, yn = null, gl = 0, So = 0, uu = null, Bi = -1, Ui = 0;
function Ie() {
  return B & 6 ? fe() : Bi !== -1 ? Bi : Bi = fe();
}
function En(e2) {
  return e2.mode & 1 ? B & 2 && Ee !== 0 ? Ee & -Ee : ZS.transition !== null ? (Ui === 0 && (Ui = yh()), Ui) : (e2 = K, e2 !== 0 || (e2 = window.event, e2 = e2 === void 0 ? 16 : Eh(e2.type)), e2) : 1;
}
function Mt(e2, t, n, r) {
  if (50 < So) throw So = 0, uu = null, Error(R(185));
  Qo(e2, n, r), (!(B & 2) || e2 !== we) && (e2 === we && (!(B & 2) && (hs |= n), ye === 4 && mn(e2, Ee)), Ye(e2, r), n === 1 && B === 0 && !(t.mode & 1) && (Fr = fe() + 500, cs && Dn()));
}
function Ye(e2, t) {
  var n = e2.callbackNode;
  Z1(e2, t);
  var r = Ji(e2, e2 === we ? Ee : 0);
  if (r === 0) n !== null && Af(n), e2.callbackNode = null, e2.callbackPriority = 0;
  else if (t = r & -r, e2.callbackPriority !== t) {
    if (n != null && Af(n), t === 1) e2.tag === 0 ? QS(_d.bind(null, e2)) : Wh(_d.bind(null, e2)), KS(function() {
      !(B & 6) && Dn();
    }), n = null;
    else {
      switch (vh(r)) {
        case 1:
          n = ec;
          break;
        case 4:
          n = mh;
          break;
        case 16:
          n = qi;
          break;
        case 536870912:
          n = gh;
          break;
        default:
          n = qi;
      }
      n = Bm(n, Dm.bind(null, e2));
    }
    e2.callbackPriority = t, e2.callbackNode = n;
  }
}
function Dm(e2, t) {
  if (Bi = -1, Ui = 0, B & 6) throw Error(R(327));
  var n = e2.callbackNode;
  if (Or() && e2.callbackNode !== n) return null;
  var r = Ji(e2, e2 === we ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e2.expiredLanes || t) t = yl(e2, r);
  else {
    t = r;
    var o = B;
    B |= 2;
    var i = jm();
    (we !== e2 || Ee !== t) && (Qt = null, Fr = fe() + 500, Wn(e2, t));
    do
      try {
        yw();
        break;
      } catch (s) {
        Am(e2, s);
      }
    while (true);
    pc(), hl.current = i, B = o, he !== null ? t = 0 : (we = null, Ee = 0, t = ye);
  }
  if (t !== 0) {
    if (t === 2 && (o = ja(e2), o !== 0 && (r = o, t = cu(e2, o))), t === 1) throw n = Uo, Wn(e2, 0), mn(e2, r), Ye(e2, fe()), n;
    if (t === 6) mn(e2, r);
    else {
      if (o = e2.current.alternate, !(r & 30) && !mw(o) && (t = yl(e2, r), t === 2 && (i = ja(e2), i !== 0 && (r = i, t = cu(e2, i))), t === 1)) throw n = Uo, Wn(e2, 0), mn(e2, r), Ye(e2, fe()), n;
      switch (e2.finishedWork = o, e2.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          In(e2, Ue, Qt);
          break;
        case 3:
          if (mn(e2, r), (r & 130023424) === r && (t = $c + 500 - fe(), 10 < t)) {
            if (Ji(e2, 0) !== 0) break;
            if (o = e2.suspendedLanes, (o & r) !== r) {
              Ie(), e2.pingedLanes |= e2.suspendedLanes & o;
              break;
            }
            e2.timeoutHandle = Va(In.bind(null, e2, Ue, Qt), t);
            break;
          }
          In(e2, Ue, Qt);
          break;
        case 4:
          if (mn(e2, r), (r & 4194240) === r) break;
          for (t = e2.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - $t(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * hw(r / 1960)) - r, 10 < r) {
            e2.timeoutHandle = Va(In.bind(null, e2, Ue, Qt), r);
            break;
          }
          In(e2, Ue, Qt);
          break;
        case 5:
          In(e2, Ue, Qt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Ye(e2, fe()), e2.callbackNode === n ? Dm.bind(null, e2) : null;
}
function cu(e2, t) {
  var n = vo;
  return e2.current.memoizedState.isDehydrated && (Wn(e2, t).flags |= 256), e2 = yl(e2, t), e2 !== 2 && (t = Ue, Ue = n, t !== null && fu(t)), e2;
}
function fu(e2) {
  Ue === null ? Ue = e2 : Ue.push.apply(Ue, e2);
}
function mw(e2) {
  for (var t = e2; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Nt(i(), o)) return false;
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
function mn(e2, t) {
  for (t &= ~_c, t &= ~hs, e2.suspendedLanes |= t, e2.pingedLanes &= ~t, e2 = e2.expirationTimes; 0 < t; ) {
    var n = 31 - $t(t), r = 1 << n;
    e2[n] = -1, t &= ~r;
  }
}
function _d(e2) {
  if (B & 6) throw Error(R(327));
  Or();
  var t = Ji(e2, 0);
  if (!(t & 1)) return Ye(e2, fe()), null;
  var n = yl(e2, t);
  if (e2.tag !== 0 && n === 2) {
    var r = ja(e2);
    r !== 0 && (t = r, n = cu(e2, r));
  }
  if (n === 1) throw n = Uo, Wn(e2, 0), mn(e2, t), Ye(e2, fe()), n;
  if (n === 6) throw Error(R(345));
  return e2.finishedWork = e2.current.alternate, e2.finishedLanes = t, In(e2, Ue, Qt), Ye(e2, fe()), null;
}
function Mc(e2, t) {
  var n = B;
  B |= 1;
  try {
    return e2(t);
  } finally {
    B = n, B === 0 && (Fr = fe() + 500, cs && Dn());
  }
}
function qn(e2) {
  yn !== null && yn.tag === 0 && !(B & 6) && Or();
  var t = B;
  B |= 1;
  var n = yt.transition, r = K;
  try {
    if (yt.transition = null, K = 1, e2) return e2();
  } finally {
    K = r, yt.transition = n, B = t, !(B & 6) && Dn();
  }
}
function Rc() {
  qe = kr.current, J(kr);
}
function Wn(e2, t) {
  e2.finishedWork = null, e2.finishedLanes = 0;
  var n = e2.timeoutHandle;
  if (n !== -1 && (e2.timeoutHandle = -1, HS(n)), he !== null) for (n = he.return; n !== null; ) {
    var r = n;
    switch (cc(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ol();
        break;
      case 3:
        Ir(), J(He), J(Ne), Sc();
        break;
      case 5:
        vc(r);
        break;
      case 4:
        Ir();
        break;
      case 13:
        J(ne);
        break;
      case 19:
        J(ne);
        break;
      case 10:
        hc(r.type._context);
        break;
      case 22:
      case 23:
        Rc();
    }
    n = n.return;
  }
  if (we = e2, he = e2 = Pn(e2.current, null), Ee = qe = t, ye = 0, Uo = null, _c = hs = Zn = 0, Ue = vo = null, Fn !== null) {
    for (t = 0; t < Fn.length; t++) if (n = Fn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    Fn = null;
  }
  return e2;
}
function Am(e2, t) {
  do {
    var n = he;
    try {
      if (pc(), Ii.current = pl, dl) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        dl = false;
      }
      if (Qn = 0, Se = me = re = null, go = false, Lo = 0, Tc.current = null, n === null || n.return === null) {
        ye = 1, Uo = t, he = null;
        break;
      }
      e: {
        var i = e2, l = n.return, s = n, a = t;
        if (t = Ee, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, m = s, p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = m.alternate;
            h ? (m.updateQueue = h.updateQueue, m.memoizedState = h.memoizedState, m.lanes = h.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var S = hd(l);
          if (S !== null) {
            S.flags &= -257, md(S, l, s, i, t), S.mode & 1 && pd(i, u, t), t = S, a = u;
            var v = t.updateQueue;
            if (v === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              pd(i, u, t), Nc();
              break e;
            }
            a = Error(R(426));
          }
        } else if (te && s.mode & 1) {
          var _ = hd(l);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), md(_, l, s, i, t), fc(Lr(a, s));
            break e;
          }
        }
        i = a = Lr(a, s), ye !== 4 && (ye = 2), vo === null ? vo = [i] : vo.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = vm(i, a, t);
              sd(i, d);
              break e;
            case 1:
              s = a;
              var f = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (kn === null || !kn.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = Sm(i, s, t);
                sd(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Im(n);
    } catch (x) {
      t = x, he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (true);
}
function jm() {
  var e2 = hl.current;
  return hl.current = pl, e2 === null ? pl : e2;
}
function Nc() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4), we === null || !(Zn & 268435455) && !(hs & 268435455) || mn(we, Ee);
}
function yl(e2, t) {
  var n = B;
  B |= 2;
  var r = jm();
  (we !== e2 || Ee !== t) && (Qt = null, Wn(e2, t));
  do
    try {
      gw();
      break;
    } catch (o) {
      Am(e2, o);
    }
  while (true);
  if (pc(), B = n, hl.current = r, he !== null) throw Error(R(261));
  return we = null, Ee = 0, ye;
}
function gw() {
  for (; he !== null; ) zm(he);
}
function yw() {
  for (; he !== null && !U1(); ) zm(he);
}
function zm(e2) {
  var t = Fm(e2.alternate, e2, qe);
  e2.memoizedProps = e2.pendingProps, t === null ? Im(e2) : he = t, Tc.current = null;
}
function Im(e2) {
  var t = e2;
  do {
    var n = t.alternate;
    if (e2 = t.return, t.flags & 32768) {
      if (n = cw(n, t), n !== null) {
        n.flags &= 32767, he = n;
        return;
      }
      if (e2 !== null) e2.flags |= 32768, e2.subtreeFlags = 0, e2.deletions = null;
      else {
        ye = 6, he = null;
        return;
      }
    } else if (n = uw(n, t, qe), n !== null) {
      he = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      he = t;
      return;
    }
    he = t = e2;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function In(e2, t, n) {
  var r = K, o = yt.transition;
  try {
    yt.transition = null, K = 1, vw(e2, t, n, r);
  } finally {
    yt.transition = o, K = r;
  }
  return null;
}
function vw(e2, t, n, r) {
  do
    Or();
  while (yn !== null);
  if (B & 6) throw Error(R(327));
  n = e2.finishedWork;
  var o = e2.finishedLanes;
  if (n === null) return null;
  if (e2.finishedWork = null, e2.finishedLanes = 0, n === e2.current) throw Error(R(177));
  e2.callbackNode = null, e2.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (q1(e2, i), e2 === we && (he = we = null, Ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ei || (Ei = true, Bm(qi, function() {
    return Or(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = yt.transition, yt.transition = null;
    var l = K;
    K = 1;
    var s = B;
    B |= 4, Tc.current = null, dw(e2, n), Om(n, e2), IS(Ua), el = !!Ba, Ua = Ba = null, e2.current = n, pw(n), W1(), B = s, K = l, yt.transition = i;
  } else e2.current = n;
  if (Ei && (Ei = false, yn = e2, gl = o), i = e2.pendingLanes, i === 0 && (kn = null), K1(n.stateNode), Ye(e2, fe()), t !== null) for (r = e2.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ml) throw ml = false, e2 = au, au = null, e2;
  return gl & 1 && e2.tag !== 0 && Or(), i = e2.pendingLanes, i & 1 ? e2 === uu ? So++ : (So = 0, uu = e2) : So = 0, Dn(), null;
}
function Or() {
  if (yn !== null) {
    var e2 = vh(gl), t = yt.transition, n = K;
    try {
      if (yt.transition = null, K = 16 > e2 ? 16 : e2, yn === null) var r = false;
      else {
        if (e2 = yn, yn = null, gl = 0, B & 6) throw Error(R(331));
        var o = B;
        for (B |= 4, b = e2.current; b !== null; ) {
          var i = b, l = i.child;
          if (b.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (b = u; b !== null; ) {
                  var m = b;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yo(8, m, i);
                  }
                  var p = m.child;
                  if (p !== null) p.return = m, b = p;
                  else for (; b !== null; ) {
                    m = b;
                    var h = m.sibling, S = m.return;
                    if (Mm(m), m === u) {
                      b = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = S, b = h;
                      break;
                    }
                    b = S;
                  }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
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
                yo(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, b = d;
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
                  ps(9, s);
              }
            } catch (x) {
              se(s, s.return, x);
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
        if (B = o, Dn(), Ut && typeof Ut.onPostCommitFiberRoot == "function") try {
          Ut.onPostCommitFiberRoot(is, e2);
        } catch {
        }
        r = true;
      }
      return r;
    } finally {
      K = n, yt.transition = t;
    }
  }
  return false;
}
function $d(e2, t, n) {
  t = Lr(n, t), t = vm(e2, t, 1), e2 = Cn(e2, t, 1), t = Ie(), e2 !== null && (Qo(e2, 1, t), Ye(e2, t));
}
function se(e2, t, n) {
  if (e2.tag === 3) $d(e2, e2, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      $d(t, e2, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kn === null || !kn.has(r))) {
        e2 = Lr(n, e2), e2 = Sm(t, e2, 1), t = Cn(t, e2, 1), e2 = Ie(), t !== null && (Qo(t, 1, e2), Ye(t, e2));
        break;
      }
    }
    t = t.return;
  }
}
function Sw(e2, t, n) {
  var r = e2.pingCache;
  r !== null && r.delete(t), t = Ie(), e2.pingedLanes |= e2.suspendedLanes & n, we === e2 && (Ee & n) === n && (ye === 4 || ye === 3 && (Ee & 130023424) === Ee && 500 > fe() - $c ? Wn(e2, 0) : _c |= n), Ye(e2, t);
}
function Lm(e2, t) {
  t === 0 && (e2.mode & 1 ? (t = hi, hi <<= 1, !(hi & 130023424) && (hi = 4194304)) : t = 1);
  var n = Ie();
  e2 = rn(e2, t), e2 !== null && (Qo(e2, t, n), Ye(e2, n));
}
function ww(e2) {
  var t = e2.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Lm(e2, n);
}
function xw(e2, t) {
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
      throw Error(R(314));
  }
  r !== null && r.delete(t), Lm(e2, n);
}
var Fm;
Fm = function(e2, t, n) {
  if (e2 !== null) if (e2.memoizedProps !== t.pendingProps || He.current) Ve = true;
  else {
    if (!(e2.lanes & n) && !(t.flags & 128)) return Ve = false, aw(e2, t, n);
    Ve = !!(e2.flags & 131072);
  }
  else Ve = false, te && t.flags & 1048576 && Vh(t, sl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Fi(e2, t), e2 = t.pendingProps;
      var o = Ar(t, Ne.current);
      Nr(t, n), o = xc(null, t, r, e2, o, n);
      var i = Cc();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (i = true, il(t)) : i = false, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, gc(t), o.updater = ds, t.stateNode = o, o._reactInternals = t, Za(t, r, e2, n), t = eu(null, t, r, true, i, n)) : (t.tag = 0, te && i && uc(t), je(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Fi(e2, t), e2 = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = kw(r), e2 = Pt(r, e2), o) {
          case 0:
            t = Ja(null, t, r, e2, n);
            break e;
          case 1:
            t = vd(null, t, r, e2, n);
            break e;
          case 11:
            t = gd(null, t, r, e2, n);
            break e;
          case 14:
            t = yd(null, t, r, Pt(r.type, e2), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Pt(r, o), Ja(e2, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Pt(r, o), vd(e2, t, r, o, n);
    case 3:
      e: {
        if (km(t), e2 === null) throw Error(R(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Qh(e2, t), cl(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: false, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Lr(Error(R(423)), t), t = Sd(e2, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Lr(Error(R(424)), t), t = Sd(e2, t, r, n, o);
          break e;
        } else for (et = xn(t.stateNode.containerInfo.firstChild), nt = t, te = true, _t = null, n = Gh(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (jr(), r === o) {
            t = on(e2, t, n);
            break e;
          }
          je(e2, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Zh(t), e2 === null && Ga(t), r = t.type, o = t.pendingProps, i = e2 !== null ? e2.memoizedProps : null, l = o.children, Wa(r, o) ? l = null : i !== null && Wa(r, i) && (t.flags |= 32), Cm(e2, t), je(e2, t, l, n), t.child;
    case 6:
      return e2 === null && Ga(t), null;
    case 13:
      return Em(e2, t, n);
    case 4:
      return yc(t, t.stateNode.containerInfo), r = t.pendingProps, e2 === null ? t.child = zr(t, null, r, n) : je(e2, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Pt(r, o), gd(e2, t, r, o, n);
    case 7:
      return je(e2, t, t.pendingProps, n), t.child;
    case 8:
      return je(e2, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e2, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, Z(al, r._currentValue), r._currentValue = l, i !== null) if (Nt(i.value, l)) {
          if (i.children === o.children && !He.current) {
            t = on(e2, t, n);
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
                    var m = u.pending;
                    m === null ? a.next = a : (a.next = m.next, m.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Xa(i.return, n, t), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (l = i.return, l === null) throw Error(R(341));
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Xa(l, n, t), l = i.sibling;
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
        je(e2, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Nr(t, n), o = vt(o), r = r(o), t.flags |= 1, je(e2, t, r, n), t.child;
    case 14:
      return r = t.type, o = Pt(r, t.pendingProps), o = Pt(r.type, o), yd(e2, t, r, o, n);
    case 15:
      return wm(e2, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Pt(r, o), Fi(e2, t), t.tag = 1, Ke(r) ? (e2 = true, il(t)) : e2 = false, Nr(t, n), ym(t, r, o), Za(t, r, o, n), eu(null, t, r, true, e2, n);
    case 19:
      return Pm(e2, t, n);
    case 22:
      return xm(e2, t, n);
  }
  throw Error(R(156, t.tag));
};
function Bm(e2, t) {
  return hh(e2, t);
}
function Cw(e2, t, n, r) {
  this.tag = e2, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function gt(e2, t, n, r) {
  return new Cw(e2, t, n, r);
}
function Oc(e2) {
  return e2 = e2.prototype, !(!e2 || !e2.isReactComponent);
}
function kw(e2) {
  if (typeof e2 == "function") return Oc(e2) ? 1 : 0;
  if (e2 != null) {
    if (e2 = e2.$$typeof, e2 === Zu) return 11;
    if (e2 === qu) return 14;
  }
  return 2;
}
function Pn(e2, t) {
  var n = e2.alternate;
  return n === null ? (n = gt(e2.tag, t, e2.key, e2.mode), n.elementType = e2.elementType, n.type = e2.type, n.stateNode = e2.stateNode, n.alternate = e2, e2.alternate = n) : (n.pendingProps = t, n.type = e2.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e2.flags & 14680064, n.childLanes = e2.childLanes, n.lanes = e2.lanes, n.child = e2.child, n.memoizedProps = e2.memoizedProps, n.memoizedState = e2.memoizedState, n.updateQueue = e2.updateQueue, t = e2.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e2.sibling, n.index = e2.index, n.ref = e2.ref, n;
}
function Wi(e2, t, n, r, o, i) {
  var l = 2;
  if (r = e2, typeof e2 == "function") Oc(e2) && (l = 1);
  else if (typeof e2 == "string") l = 5;
  else e: switch (e2) {
    case pr:
      return Vn(n.children, o, i, t);
    case Qu:
      l = 8, o |= 8;
      break;
    case xa:
      return e2 = gt(12, n, t, o | 2), e2.elementType = xa, e2.lanes = i, e2;
    case Ca:
      return e2 = gt(13, n, t, o), e2.elementType = Ca, e2.lanes = i, e2;
    case ka:
      return e2 = gt(19, n, t, o), e2.elementType = ka, e2.lanes = i, e2;
    case Zp:
      return ms(n, o, i, t);
    default:
      if (typeof e2 == "object" && e2 !== null) switch (e2.$$typeof) {
        case Xp:
          l = 10;
          break e;
        case Qp:
          l = 9;
          break e;
        case Zu:
          l = 11;
          break e;
        case qu:
          l = 14;
          break e;
        case dn:
          l = 16, r = null;
          break e;
      }
      throw Error(R(130, e2 == null ? e2 : typeof e2, ""));
  }
  return t = gt(l, n, t, o), t.elementType = e2, t.type = r, t.lanes = i, t;
}
function Vn(e2, t, n, r) {
  return e2 = gt(7, e2, r, t), e2.lanes = n, e2;
}
function ms(e2, t, n, r) {
  return e2 = gt(22, e2, r, t), e2.elementType = Zp, e2.lanes = n, e2.stateNode = { isHidden: false }, e2;
}
function ia(e2, t, n) {
  return e2 = gt(6, e2, null, t), e2.lanes = n, e2;
}
function la(e2, t, n) {
  return t = gt(4, e2.children !== null ? e2.children : [], e2.key, t), t.lanes = n, t.stateNode = { containerInfo: e2.containerInfo, pendingChildren: null, implementation: e2.implementation }, t;
}
function Ew(e2, t, n, r, o) {
  this.tag = t, this.containerInfo = e2, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fs(0), this.expirationTimes = Fs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fs(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function bc(e2, t, n, r, o, i, l, s, a) {
  return e2 = new Ew(e2, t, n, s, a), t === 1 ? (t = 1, i === true && (t |= 8)) : t = 0, i = gt(3, null, null, t), e2.current = i, i.stateNode = e2, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gc(i), e2;
}
function Pw(e2, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: dr, key: r == null ? null : "" + r, children: e2, containerInfo: t, implementation: n };
}
function Um(e2) {
  if (!e2) return Mn;
  e2 = e2._reactInternals;
  e: {
    if (nr(e2) !== e2 || e2.tag !== 1) throw Error(R(170));
    var t = e2;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e2.tag === 1) {
    var n = e2.type;
    if (Ke(n)) return Uh(e2, n, t);
  }
  return t;
}
function Wm(e2, t, n, r, o, i, l, s, a) {
  return e2 = bc(n, r, true, e2, o, i, l, s, a), e2.context = Um(null), n = e2.current, r = Ie(), o = En(n), i = en(r, o), i.callback = t ?? null, Cn(n, i, o), e2.current.lanes = o, Qo(e2, o, r), Ye(e2, r), e2;
}
function gs(e2, t, n, r) {
  var o = t.current, i = Ie(), l = En(o);
  return n = Um(n), t.context === null ? t.context = n : t.pendingContext = n, t = en(i, l), t.payload = { element: e2 }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e2 = Cn(o, t, l), e2 !== null && (Mt(e2, o, l, i), zi(e2, o, l)), l;
}
function vl(e2) {
  if (e2 = e2.current, !e2.child) return null;
  switch (e2.child.tag) {
    case 5:
      return e2.child.stateNode;
    default:
      return e2.child.stateNode;
  }
}
function Md(e2, t) {
  if (e2 = e2.memoizedState, e2 !== null && e2.dehydrated !== null) {
    var n = e2.retryLane;
    e2.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Dc(e2, t) {
  Md(e2, t), (e2 = e2.alternate) && Md(e2, t);
}
function Tw() {
  return null;
}
var Vm = typeof reportError == "function" ? reportError : function(e2) {
  console.error(e2);
};
function Ac(e2) {
  this._internalRoot = e2;
}
ys.prototype.render = Ac.prototype.render = function(e2) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  gs(e2, t, null, null);
};
ys.prototype.unmount = Ac.prototype.unmount = function() {
  var e2 = this._internalRoot;
  if (e2 !== null) {
    this._internalRoot = null;
    var t = e2.containerInfo;
    qn(function() {
      gs(null, e2, null, null);
    }), t[nn] = null;
  }
};
function ys(e2) {
  this._internalRoot = e2;
}
ys.prototype.unstable_scheduleHydration = function(e2) {
  if (e2) {
    var t = xh();
    e2 = { blockedOn: null, target: e2, priority: t };
    for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++) ;
    hn.splice(n, 0, e2), n === 0 && kh(e2);
  }
};
function jc(e2) {
  return !(!e2 || e2.nodeType !== 1 && e2.nodeType !== 9 && e2.nodeType !== 11);
}
function vs(e2) {
  return !(!e2 || e2.nodeType !== 1 && e2.nodeType !== 9 && e2.nodeType !== 11 && (e2.nodeType !== 8 || e2.nodeValue !== " react-mount-point-unstable "));
}
function Rd() {
}
function _w(e2, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = vl(l);
        i.call(u);
      };
    }
    var l = Wm(t, r, e2, 0, null, false, false, "", Rd);
    return e2._reactRootContainer = l, e2[nn] = l.current, Do(e2.nodeType === 8 ? e2.parentNode : e2), qn(), l;
  }
  for (; o = e2.lastChild; ) e2.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = vl(a);
      s.call(u);
    };
  }
  var a = bc(e2, 0, false, null, null, false, false, "", Rd);
  return e2._reactRootContainer = a, e2[nn] = a.current, Do(e2.nodeType === 8 ? e2.parentNode : e2), qn(function() {
    gs(t, a, n, r);
  }), a;
}
function Ss(e2, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = vl(l);
        s.call(a);
      };
    }
    gs(t, l, e2, o);
  } else l = _w(n, t, e2, o, r);
  return vl(l);
}
Sh = function(e2) {
  switch (e2.tag) {
    case 3:
      var t = e2.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = so(t.pendingLanes);
        n !== 0 && (tc(t, n | 1), Ye(t, fe()), !(B & 6) && (Fr = fe() + 500, Dn()));
      }
      break;
    case 13:
      qn(function() {
        var r = rn(e2, 1);
        if (r !== null) {
          var o = Ie();
          Mt(r, e2, 1, o);
        }
      }), Dc(e2, 1);
  }
};
nc = function(e2) {
  if (e2.tag === 13) {
    var t = rn(e2, 134217728);
    if (t !== null) {
      var n = Ie();
      Mt(t, e2, 134217728, n);
    }
    Dc(e2, 134217728);
  }
};
wh = function(e2) {
  if (e2.tag === 13) {
    var t = En(e2), n = rn(e2, t);
    if (n !== null) {
      var r = Ie();
      Mt(n, e2, t, r);
    }
    Dc(e2, t);
  }
};
xh = function() {
  return K;
};
Ch = function(e2, t) {
  var n = K;
  try {
    return K = e2, t();
  } finally {
    K = n;
  }
};
ba = function(e2, t, n) {
  switch (t) {
    case "input":
      if (Ta(e2, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e2; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e2 && r.form === e2.form) {
            var o = us(r);
            if (!o) throw Error(R(90));
            Jp(r), Ta(r, o);
          }
        }
      }
      break;
    case "textarea":
      th(e2, n);
      break;
    case "select":
      t = n.value, t != null && _r(e2, !!n.multiple, t, false);
  }
};
ah = Mc;
uh = qn;
var $w = { usingClientEntryPoint: false, Events: [qo, yr, us, lh, sh, Mc] }, to = { findFiberByHostInstance: Ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Mw = { bundleType: to.bundleType, version: to.version, rendererPackageName: to.rendererPackageName, rendererConfig: to.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: sn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e2) {
  return e2 = dh(e2), e2 === null ? null : e2.stateNode;
}, findFiberByHostInstance: to.findFiberByHostInstance || Tw, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pi.isDisabled && Pi.supportsFiber) try {
    is = Pi.inject(Mw), Ut = Pi;
  } catch {
  }
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $w;
lt.createPortal = function(e2, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!jc(t)) throw Error(R(200));
  return Pw(e2, t, null, n);
};
lt.createRoot = function(e2, t) {
  if (!jc(e2)) throw Error(R(299));
  var n = false, r = "", o = Vm;
  return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = bc(e2, 1, false, null, null, n, false, r, o), e2[nn] = t.current, Do(e2.nodeType === 8 ? e2.parentNode : e2), new Ac(t);
};
lt.findDOMNode = function(e2) {
  if (e2 == null) return null;
  if (e2.nodeType === 1) return e2;
  var t = e2._reactInternals;
  if (t === void 0) throw typeof e2.render == "function" ? Error(R(188)) : (e2 = Object.keys(e2).join(","), Error(R(268, e2)));
  return e2 = dh(t), e2 = e2 === null ? null : e2.stateNode, e2;
};
lt.flushSync = function(e2) {
  return qn(e2);
};
lt.hydrate = function(e2, t, n) {
  if (!vs(t)) throw Error(R(200));
  return Ss(null, e2, t, true, n);
};
lt.hydrateRoot = function(e2, t, n) {
  if (!jc(e2)) throw Error(R(405));
  var r = n != null && n.hydratedSources || null, o = false, i = "", l = Vm;
  if (n != null && (n.unstable_strictMode === true && (o = true), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Wm(t, null, e2, 1, n ?? null, o, false, i, l), e2[nn] = t.current, Do(e2), r) for (e2 = 0; e2 < r.length; e2++) n = r[e2], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new ys(t);
};
lt.render = function(e2, t, n) {
  if (!vs(t)) throw Error(R(200));
  return Ss(null, e2, t, false, n);
};
lt.unmountComponentAtNode = function(e2) {
  if (!vs(e2)) throw Error(R(40));
  return e2._reactRootContainer ? (qn(function() {
    Ss(null, null, e2, false, function() {
      e2._reactRootContainer = null, e2[nn] = null;
    });
  }), true) : false;
};
lt.unstable_batchedUpdates = Mc;
lt.unstable_renderSubtreeIntoContainer = function(e2, t, n, r) {
  if (!vs(n)) throw Error(R(200));
  if (e2 == null || e2._reactInternals === void 0) throw Error(R(38));
  return Ss(e2, t, n, false, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function Hm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hm);
  } catch (e2) {
    console.error(e2);
  }
}
Hm(), Hp.exports = lt;
var zc = Hp.exports;
const Nd = fr.createContext(null);
function Rw(e2) {
  if (e2 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function Ic(e2, t) {
  var n = function(i) {
    return t && P.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e2 && P.Children.map(e2, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Nw(e2, t) {
  e2 = e2 || {}, t = t || {};
  function n(m) {
    return m in t ? t[m] : e2[m];
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
function Un(e2, t, n) {
  return n[t] != null ? n[t] : e2.props[t];
}
function Ow(e2, t) {
  return Ic(e2.children, function(n) {
    return P.cloneElement(n, { onExited: t.bind(null, n), in: true, appear: Un(n, "appear", e2), enter: Un(n, "enter", e2), exit: Un(n, "exit", e2) });
  });
}
function bw(e2, t, n) {
  var r = Ic(e2.children), o = Nw(t, r);
  return Object.keys(o).forEach(function(i) {
    var l = o[i];
    if (P.isValidElement(l)) {
      var s = i in t, a = i in r, u = t[i], m = P.isValidElement(u) && !u.props.in;
      a && (!s || m) ? o[i] = P.cloneElement(l, { onExited: n.bind(null, l), in: true, exit: Un(l, "exit", e2), enter: Un(l, "enter", e2) }) : !a && s && !m ? o[i] = P.cloneElement(l, { in: false }) : a && s && P.isValidElement(u) && (o[i] = P.cloneElement(l, { onExited: n.bind(null, l), in: u.props.in, exit: Un(l, "exit", e2), enter: Un(l, "enter", e2) }));
    }
  }), o;
}
var Dw = Object.values || function(e2) {
  return Object.keys(e2).map(function(t) {
    return e2[t];
  });
}, Aw = { component: "div", childFactory: function(t) {
  return t;
} }, Lc = function(e2) {
  P1(t, e2);
  function t(r, o) {
    var i;
    i = e2.call(this, r, o) || this;
    var l = i.handleExited.bind(Rw(i));
    return i.state = { contextValue: { isMounting: true }, handleExited: l, firstRender: true }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = true, this.setState({ contextValue: { isMounting: false } });
  }, n.componentWillUnmount = function() {
    this.mounted = false;
  }, t.getDerivedStateFromProps = function(o, i) {
    var l = i.children, s = i.handleExited, a = i.firstRender;
    return { children: a ? Ow(o, s) : bw(o, l, s), firstRender: false };
  }, n.handleExited = function(o, i) {
    var l = Ic(this.props.children);
    o.key in l || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var a = Hi({}, s.children);
      return delete a[o.key], { children: a };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, l = o.childFactory, s = E1(o, ["component", "childFactory"]), a = this.state.contextValue, u = Dw(this.state.children).map(l);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? fr.createElement(Nd.Provider, { value: a }, u) : fr.createElement(Nd.Provider, { value: a }, fr.createElement(i, s, u));
  }, t;
}(fr.Component);
Lc.propTypes = {};
Lc.defaultProps = Aw;
function jw(e2) {
  return Rn("MuiPaper", e2);
}
Nn("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const zw = (e2) => {
  const { square: t, elevation: n, variant: r, classes: o } = e2, i = { root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`] };
  return Jn(i, jw, o);
}, Iw = Ct("div", { name: "MuiPaper", slot: "Root", overridesResolver: (e2, t) => {
  const { ownerState: n } = e2;
  return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
} })(Yn(({ theme: e2 }) => ({ backgroundColor: (e2.vars || e2).palette.background.paper, color: (e2.vars || e2).palette.text.primary, transition: e2.transitions.create("box-shadow"), variants: [{ props: ({ ownerState: t }) => !t.square, style: { borderRadius: e2.shape.borderRadius } }, { props: { variant: "outlined" }, style: { border: `1px solid ${(e2.vars || e2).palette.divider}` } }, { props: { variant: "elevation" }, style: { boxShadow: "var(--Paper-shadow)", backgroundImage: "var(--Paper-overlay)" } }] }))), Lw = P.forwardRef(function(t, n) {
  var _a2;
  const r = ln({ props: t, name: "MuiPaper" }), o = os(), { className: i, component: l = "div", elevation: s = 1, square: a = false, variant: u = "elevation", ...m } = r, p = { ...r, component: l, elevation: s, square: a, variant: u }, h = zw(p);
  return M.jsx(Iw, { as: l, ownerState: p, className: ge(h.root, i), ref: n, ...m, style: { ...u === "elevation" && { "--Paper-shadow": (o.vars || o).shadows[s], ...o.vars && { "--Paper-overlay": (_a2 = o.vars.overlays) == null ? void 0 : _a2[s] }, ...!o.vars && o.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${Po("#fff", ya(s))}, ${Po("#fff", ya(s))})` } }, ...m.style } });
});
class Sl {
  constructor() {
    __publicField(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    });
    this.ref = { current: null }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
  }
  static create() {
    return new Sl();
  }
  static use() {
    const t = bp(Sl.create).current, [n, r] = P.useState(false);
    return t.shouldMount = n, t.setShouldMount = r, P.useEffect(t.mountEffect, [n]), t;
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
  return Sl.use();
}
function Bw() {
  let e2, t;
  const n = new Promise((r, o) => {
    e2 = r, t = o;
  });
  return n.resolve = e2, n.reject = t, n;
}
function Uw(e2) {
  const { className: t, classes: n, pulsate: r = false, rippleX: o, rippleY: i, rippleSize: l, in: s, onExited: a, timeout: u } = e2, [m, p] = P.useState(false), h = ge(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), S = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o }, v = ge(n.child, m && n.childLeaving, r && n.childPulsate);
  return !s && !m && p(true), P.useEffect(() => {
    if (!s && a != null) {
      const w = setTimeout(a, u);
      return () => {
        clearTimeout(w);
      };
    }
  }, [a, s, u]), M.jsx("span", { className: h, style: S, children: M.jsx("span", { className: v }) });
}
const dt = Nn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), du = 550, Ww = 80, Vw = Yo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Hw = Yo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Kw = Yo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Yw = Ct("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), Gw = Ct(Uw, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${dt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Vw};
    animation-duration: ${du}ms;
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
    animation-duration: ${du}ms;
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
`, Xw = P.forwardRef(function(t, n) {
  const r = ln({ props: t, name: "MuiTouchRipple" }), { center: o = false, classes: i = {}, className: l, ...s } = r, [a, u] = P.useState([]), m = P.useRef(0), p = P.useRef(null);
  P.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [a]);
  const h = P.useRef(false), S = av(), v = P.useRef(null), w = P.useRef(null), _ = P.useCallback((y) => {
    const { pulsate: x, rippleX: C, rippleY: T, rippleSize: E, cb: N } = y;
    u((c) => [...c, M.jsx(Gw, { classes: { ripple: ge(i.ripple, dt.ripple), rippleVisible: ge(i.rippleVisible, dt.rippleVisible), ripplePulsate: ge(i.ripplePulsate, dt.ripplePulsate), child: ge(i.child, dt.child), childLeaving: ge(i.childLeaving, dt.childLeaving), childPulsate: ge(i.childPulsate, dt.childPulsate) }, timeout: du, pulsate: x, rippleX: C, rippleY: T, rippleSize: E }, m.current)]), m.current += 1, p.current = N;
  }, [i]), d = P.useCallback((y = {}, x = {}, C = () => {
  }) => {
    const { pulsate: T = false, center: E = o || x.pulsate, fakeElement: N = false } = x;
    if ((y == null ? void 0 : y.type) === "mousedown" && h.current) {
      h.current = false;
      return;
    }
    (y == null ? void 0 : y.type) === "touchstart" && (h.current = true);
    const c = N ? null : w.current, $ = c ? c.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    let A, I, H;
    if (E || y === void 0 || y.clientX === 0 && y.clientY === 0 || !y.clientX && !y.touches) A = Math.round($.width / 2), I = Math.round($.height / 2);
    else {
      const { clientX: Oe, clientY: ue } = y.touches && y.touches.length > 0 ? y.touches[0] : y;
      A = Math.round(Oe - $.left), I = Math.round(ue - $.top);
    }
    if (E) H = Math.sqrt((2 * $.width ** 2 + $.height ** 2) / 3), H % 2 === 0 && (H += 1);
    else {
      const Oe = Math.max(Math.abs((c ? c.clientWidth : 0) - A), A) * 2 + 2, ue = Math.max(Math.abs((c ? c.clientHeight : 0) - I), I) * 2 + 2;
      H = Math.sqrt(Oe ** 2 + ue ** 2);
    }
    (y == null ? void 0 : y.touches) ? v.current === null && (v.current = () => {
      _({ pulsate: T, rippleX: A, rippleY: I, rippleSize: H, cb: C });
    }, S.start(Ww, () => {
      v.current && (v.current(), v.current = null);
    })) : _({ pulsate: T, rippleX: A, rippleY: I, rippleSize: H, cb: C });
  }, [o, _, S]), f = P.useCallback(() => {
    d({}, { pulsate: true });
  }, [d]), g = P.useCallback((y, x) => {
    if (S.clear(), (y == null ? void 0 : y.type) === "touchend" && v.current) {
      v.current(), v.current = null, S.start(0, () => {
        g(y, x);
      });
      return;
    }
    v.current = null, u((C) => C.length > 0 ? C.slice(1) : C), p.current = x;
  }, [S]);
  return P.useImperativeHandle(n, () => ({ pulsate: f, start: d, stop: g }), [f, d, g]), M.jsx(Yw, { className: ge(dt.root, i.root, l), ref: w, ...s, children: M.jsx(Lc, { component: null, exit: true, children: a }) });
});
function Qw(e2) {
  return Rn("MuiButtonBase", e2);
}
const Zw = Nn("MuiButtonBase", ["root", "disabled", "focusVisible"]), qw = (e2) => {
  const { disabled: t, focusVisible: n, focusVisibleClassName: r, classes: o } = e2, l = Jn({ root: ["root", t && "disabled", n && "focusVisible"] }, Qw, o);
  return n && r && (l.root += ` ${r}`), l;
}, Jw = Ct("button", { name: "MuiButtonBase", slot: "Root", overridesResolver: (e2, t) => t.root })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${Zw.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }), ex = P.forwardRef(function(t, n) {
  const r = ln({ props: t, name: "MuiButtonBase" }), { action: o, centerRipple: i = false, children: l, className: s, component: a = "button", disabled: u = false, disableRipple: m = false, disableTouchRipple: p = false, focusRipple: h = false, focusVisibleClassName: S, LinkComponent: v = "a", onBlur: w, onClick: _, onContextMenu: d, onDragLeave: f, onFocus: g, onFocusVisible: y, onKeyDown: x, onKeyUp: C, onMouseDown: T, onMouseLeave: E, onMouseUp: N, onTouchEnd: c, onTouchMove: $, onTouchStart: A, tabIndex: I = 0, TouchRippleProps: H, touchRippleRef: Oe, type: ue, ...Be } = r, O = P.useRef(null), D = Fw(), z = df(D.ref, Oe), [U, F] = P.useState(false);
  u && U && F(false), P.useImperativeHandle(o, () => ({ focusVisible: () => {
    F(true), O.current.focus();
  } }), []);
  const be = D.shouldMount && !m && !u;
  P.useEffect(() => {
    U && h && !m && D.pulsate();
  }, [m, h, U, D]);
  const at = Xt(D, "start", T, p), Kt = Xt(D, "stop", d, p), ut = Xt(D, "stop", f, p), Xe = Xt(D, "stop", N, p), ei = Xt(D, "stop", (j) => {
    U && j.preventDefault(), E && E(j);
  }, p), ti = Xt(D, "start", A, p), Es = Xt(D, "stop", c, p), Ps = Xt(D, "stop", $, p), ni = Xt(D, "stop", (j) => {
    hf(j.target) || F(false), w && w(j);
  }, false), ri = bi((j) => {
    O.current || (O.current = j.currentTarget), hf(j.target) && (F(true), y && y(j)), g && g(j);
  }), or = () => {
    const j = O.current;
    return a && a !== "button" && !(j.tagName === "A" && j.href);
  }, oi = bi((j) => {
    h && !j.repeat && U && j.key === " " && D.stop(j, () => {
      D.start(j);
    }), j.target === j.currentTarget && or() && j.key === " " && j.preventDefault(), x && x(j), j.target === j.currentTarget && or() && j.key === "Enter" && !u && (j.preventDefault(), _ && _(j));
  }), Ts = bi((j) => {
    h && j.key === " " && U && !j.defaultPrevented && D.stop(j, () => {
      D.pulsate(j);
    }), C && C(j), _ && j.target === j.currentTarget && or() && j.key === " " && !j.defaultPrevented && _(j);
  });
  let An = a;
  An === "button" && (Be.href || Be.to) && (An = v);
  const Yt = {};
  An === "button" ? (Yt.type = ue === void 0 ? "button" : ue, Yt.disabled = u) : (!Be.href && !Be.to && (Yt.role = "button"), u && (Yt["aria-disabled"] = u));
  const Qe = df(n, O), jn = { ...r, centerRipple: i, component: a, disabled: u, disableRipple: m, disableTouchRipple: p, focusRipple: h, tabIndex: I, focusVisible: U }, Hr = qw(jn);
  return M.jsxs(Jw, { as: An, className: ge(Hr.root, s), ownerState: jn, onBlur: ni, onClick: _, onContextMenu: Kt, onFocus: ri, onKeyDown: oi, onKeyUp: Ts, onMouseDown: at, onMouseLeave: ei, onMouseUp: Xe, onDragLeave: ut, onTouchEnd: Es, onTouchMove: Ps, onTouchStart: ti, ref: Qe, tabIndex: u ? -1 : I, type: ue, ...Yt, ...Be, children: [l, be ? M.jsx(Xw, { ref: z, center: i, ...H }) : null] });
});
function Xt(e2, t, n, r = false) {
  return bi((o) => (n && n(o), r || e2[t](o), true));
}
function tx(e2) {
  return typeof e2.main == "string";
}
function nx(e2, t = []) {
  if (!tx(e2)) return false;
  for (const n of t) if (!e2.hasOwnProperty(n) || typeof e2[n] != "string") return false;
  return true;
}
function wl(e2 = []) {
  return ([, t]) => t && nx(t, e2);
}
function rx(e2) {
  return Rn("MuiCircularProgress", e2);
}
Nn("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const un = 44, pu = Yo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, hu = Yo`
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
`, ox = typeof pu != "string" ? Nu`
        animation: ${pu} 1.4s linear infinite;
      ` : null, ix = typeof hu != "string" ? Nu`
        animation: ${hu} 1.4s ease-in-out infinite;
      ` : null, lx = (e2) => {
  const { classes: t, variant: n, color: r, disableShrink: o } = e2, i = { root: ["root", n, `color${ve(r)}`], svg: ["svg"], circle: ["circle", `circle${ve(n)}`, o && "circleDisableShrink"] };
  return Jn(i, rx, t);
}, sx = Ct("span", { name: "MuiCircularProgress", slot: "Root", overridesResolver: (e2, t) => {
  const { ownerState: n } = e2;
  return [t.root, t[n.variant], t[`color${ve(n.color)}`]];
} })(Yn(({ theme: e2 }) => ({ display: "inline-block", variants: [{ props: { variant: "determinate" }, style: { transition: e2.transitions.create("transform") } }, { props: { variant: "indeterminate" }, style: ox || { animation: `${pu} 1.4s linear infinite` } }, ...Object.entries(e2.palette).filter(wl()).map(([t]) => ({ props: { color: t }, style: { color: (e2.vars || e2).palette[t].main } }))] }))), ax = Ct("svg", { name: "MuiCircularProgress", slot: "Svg", overridesResolver: (e2, t) => t.svg })({ display: "block" }), ux = Ct("circle", { name: "MuiCircularProgress", slot: "Circle", overridesResolver: (e2, t) => {
  const { ownerState: n } = e2;
  return [t.circle, t[`circle${ve(n.variant)}`], n.disableShrink && t.circleDisableShrink];
} })(Yn(({ theme: e2 }) => ({ stroke: "currentColor", variants: [{ props: { variant: "determinate" }, style: { transition: e2.transitions.create("stroke-dashoffset") } }, { props: { variant: "indeterminate" }, style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 } }, { props: ({ ownerState: t }) => t.variant === "indeterminate" && !t.disableShrink, style: ix || { animation: `${hu} 1.4s ease-in-out infinite` } }] }))), cx = P.forwardRef(function(t, n) {
  const r = ln({ props: t, name: "MuiCircularProgress" }), { className: o, color: i = "primary", disableShrink: l = false, size: s = 40, style: a, thickness: u = 3.6, value: m = 0, variant: p = "indeterminate", ...h } = r, S = { ...r, color: i, disableShrink: l, size: s, thickness: u, value: m, variant: p }, v = lx(S), w = {}, _ = {}, d = {};
  if (p === "determinate") {
    const f = 2 * Math.PI * ((un - u) / 2);
    w.strokeDasharray = f.toFixed(3), d["aria-valuenow"] = Math.round(m), w.strokeDashoffset = `${((100 - m) / 100 * f).toFixed(3)}px`, _.transform = "rotate(-90deg)";
  }
  return M.jsx(sx, { className: ge(v.root, o), style: { width: s, height: s, ..._, ...a }, ownerState: S, ref: n, role: "progressbar", ...d, ...h, children: M.jsx(ax, { className: v.svg, ownerState: S, viewBox: `${un / 2} ${un / 2} ${un} ${un}`, children: M.jsx(ux, { className: v.circle, style: w, ownerState: S, cx: un, cy: un, r: (un - u) / 2, fill: "none", strokeWidth: u }) }) });
});
function fx(e2) {
  return Rn("MuiIconButton", e2);
}
const Od = Nn("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), dx = (e2) => {
  const { classes: t, disabled: n, color: r, edge: o, size: i, loading: l } = e2, s = { root: ["root", l && "loading", n && "disabled", r !== "default" && `color${ve(r)}`, o && `edge${ve(o)}`, `size${ve(i)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] };
  return Jn(s, fx, t);
}, px = Ct(ex, { name: "MuiIconButton", slot: "Root", overridesResolver: (e2, t) => {
  const { ownerState: n } = e2;
  return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${ve(n.color)}`], n.edge && t[`edge${ve(n.edge)}`], t[`size${ve(n.size)}`]];
} })(Yn(({ theme: e2 }) => ({ textAlign: "center", flex: "0 0 auto", fontSize: e2.typography.pxToRem(24), padding: 8, borderRadius: "50%", color: (e2.vars || e2).palette.action.active, transition: e2.transitions.create("background-color", { duration: e2.transitions.duration.shortest }), variants: [{ props: (t) => !t.disableRipple, style: { "--IconButton-hoverBg": e2.vars ? `rgba(${e2.vars.palette.action.activeChannel} / ${e2.vars.palette.action.hoverOpacity})` : Po(e2.palette.action.active, e2.palette.action.hoverOpacity), "&:hover": { backgroundColor: "var(--IconButton-hoverBg)", "@media (hover: none)": { backgroundColor: "transparent" } } } }, { props: { edge: "start" }, style: { marginLeft: -12 } }, { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: { edge: "end" }, style: { marginRight: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }] })), Yn(({ theme: e2 }) => ({ variants: [{ props: { color: "inherit" }, style: { color: "inherit" } }, ...Object.entries(e2.palette).filter(wl()).map(([t]) => ({ props: { color: t }, style: { color: (e2.vars || e2).palette[t].main } })), ...Object.entries(e2.palette).filter(wl()).map(([t]) => ({ props: { color: t }, style: { "--IconButton-hoverBg": e2.vars ? `rgba(${(e2.vars || e2).palette[t].mainChannel} / ${e2.vars.palette.action.hoverOpacity})` : Po((e2.vars || e2).palette[t].main, e2.palette.action.hoverOpacity) } })), { props: { size: "small" }, style: { padding: 5, fontSize: e2.typography.pxToRem(18) } }, { props: { size: "large" }, style: { padding: 12, fontSize: e2.typography.pxToRem(28) } }], [`&.${Od.disabled}`]: { backgroundColor: "transparent", color: (e2.vars || e2).palette.action.disabled }, [`&.${Od.loading}`]: { color: "transparent" } }))), hx = Ct("span", { name: "MuiIconButton", slot: "LoadingIndicator", overridesResolver: (e2, t) => t.loadingIndicator })(({ theme: e2 }) => ({ display: "none", position: "absolute", visibility: "visible", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: (e2.vars || e2).palette.action.disabled, variants: [{ props: { loading: true }, style: { display: "flex" } }] })), wo = P.forwardRef(function(t, n) {
  const r = ln({ props: t, name: "MuiIconButton" }), { edge: o = false, children: i, className: l, color: s = "default", disabled: a = false, disableFocusRipple: u = false, size: m = "medium", id: p, loading: h = null, loadingIndicator: S, ...v } = r, w = iv(p), _ = S ?? M.jsx(cx, { "aria-labelledby": w, color: "inherit", size: 16 }), d = { ...r, edge: o, color: s, disabled: a, disableFocusRipple: u, loading: h, loadingIndicator: _, size: m }, f = dx(d);
  return M.jsxs(px, { id: h ? w : p, className: ge(f.root, l), centerRipple: true, focusRipple: !u, disabled: a || h, ref: n, ...v, ownerState: d, children: [typeof h == "boolean" && M.jsx("span", { className: f.loadingWrapper, style: { display: "contents" }, children: M.jsx(hx, { className: f.loadingIndicator, ownerState: d, children: h && _ }) }), i] });
});
function mx(e2) {
  return Rn("MuiTypography", e2);
}
Nn("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const gx = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, yx = w1(), vx = (e2) => {
  const { align: t, gutterBottom: n, noWrap: r, paragraph: o, variant: i, classes: l } = e2, s = { root: ["root", i, e2.align !== "inherit" && `align${ve(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"] };
  return Jn(s, mx, l);
}, Sx = Ct("span", { name: "MuiTypography", slot: "Root", overridesResolver: (e2, t) => {
  const { ownerState: n } = e2;
  return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ve(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
} })(Yn(({ theme: e2 }) => {
  var _a2;
  return { margin: 0, variants: [{ props: { variant: "inherit" }, style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }, ...Object.entries(e2.typography).filter(([t, n]) => t !== "inherit" && n && typeof n == "object").map(([t, n]) => ({ props: { variant: t }, style: n })), ...Object.entries(e2.palette).filter(wl()).map(([t]) => ({ props: { color: t }, style: { color: (e2.vars || e2).palette[t].main } })), ...Object.entries(((_a2 = e2.palette) == null ? void 0 : _a2.text) || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({ props: { color: `text${ve(t)}` }, style: { color: (e2.vars || e2).palette.text[t] } })), { props: ({ ownerState: t }) => t.align !== "inherit", style: { textAlign: "var(--Typography-textAlign)" } }, { props: ({ ownerState: t }) => t.noWrap, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, { props: ({ ownerState: t }) => t.gutterBottom, style: { marginBottom: "0.35em" } }, { props: ({ ownerState: t }) => t.paragraph, style: { marginBottom: 16 } }] };
})), bd = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, xl = P.forwardRef(function(t, n) {
  const { color: r, ...o } = ln({ props: t, name: "MuiTypography" }), i = !gx[r], l = yx({ ...o, ...i && { color: r } }), { align: s = "inherit", className: a, component: u, gutterBottom: m = false, noWrap: p = false, paragraph: h = false, variant: S = "body1", variantMapping: v = bd, ...w } = l, _ = { ...l, align: s, color: r, className: a, component: u, gutterBottom: m, noWrap: p, paragraph: h, variant: S, variantMapping: v }, d = u || (h ? "p" : v[S] || bd[S]) || "span", f = vx(_);
  return M.jsx(Sx, { as: d, ref: n, className: ge(f.root, a), ...w, ownerState: _, style: { ...s !== "inherit" && { "--Typography-textAlign": s }, ...w.style } });
}), wx = Nn("MuiBox", ["root"]), xx = rs(), We = F0({ themeId: Ft, defaultTheme: xx, defaultClassName: wx.root, generateClassName: Tp.generate }), mu = typeof Vp({}) == "function", Cx = (e2, t) => ({ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", boxSizing: "border-box", WebkitTextSizeAdjust: "100%", ...t && !e2.vars && { colorScheme: e2.palette.mode } }), kx = (e2) => ({ color: (e2.vars || e2).palette.text.primary, ...e2.typography.body1, backgroundColor: (e2.vars || e2).palette.background.default, "@media print": { backgroundColor: (e2.vars || e2).palette.common.white } }), Km = (e2, t = false) => {
  var _a2, _b;
  const n = {};
  t && e2.colorSchemes && typeof e2.getColorSchemeSelector == "function" && Object.entries(e2.colorSchemes).forEach(([i, l]) => {
    var _a3, _b2;
    const s = e2.getColorSchemeSelector(i);
    s.startsWith("@") ? n[s] = { ":root": { colorScheme: (_a3 = l.palette) == null ? void 0 : _a3.mode } } : n[s.replace(/\s*&/, "")] = { colorScheme: (_b2 = l.palette) == null ? void 0 : _b2.mode };
  });
  let r = { html: Cx(e2, t), "*, *::before, *::after": { boxSizing: "inherit" }, "strong, b": { fontWeight: e2.typography.fontWeightBold }, body: { margin: 0, ...kx(e2), "&::backdrop": { backgroundColor: (e2.vars || e2).palette.background.default } }, ...n };
  const o = (_b = (_a2 = e2.components) == null ? void 0 : _a2.MuiCssBaseline) == null ? void 0 : _b.styleOverrides;
  return o && (r = [r, o]), r;
}, Vi = "mui-ecs", Ex = (e2) => {
  const t = Km(e2, false), n = Array.isArray(t) ? t[0] : t;
  return !e2.vars && n && (n.html[`:root:has(${Vi})`] = { colorScheme: e2.palette.mode }), e2.colorSchemes && Object.entries(e2.colorSchemes).forEach(([r, o]) => {
    var _a2, _b;
    const i = e2.getColorSchemeSelector(r);
    i.startsWith("@") ? n[i] = { [`:root:not(:has(.${Vi}))`]: { colorScheme: (_a2 = o.palette) == null ? void 0 : _a2.mode } } : n[i.replace(/\s*&/, "")] = { [`&:not(:has(.${Vi}))`]: { colorScheme: (_b = o.palette) == null ? void 0 : _b.mode } };
  }), t;
}, Px = Vp(mu ? ({ theme: e2, enableColorScheme: t }) => Km(e2, t) : ({ theme: e2 }) => Ex(e2));
function Tx(e2) {
  const t = ln({ props: e2, name: "MuiCssBaseline" }), { children: n, enableColorScheme: r = false } = t;
  return M.jsxs(P.Fragment, { children: [mu && M.jsx(Px, { enableColorScheme: r }), !mu && !r && M.jsx("span", { className: Vi, style: { display: "none" } }), n] });
}
const _x = Iv({ createStyledComponent: Ct("div", { name: "MuiStack", slot: "Root", overridesResolver: (e2, t) => t.root }), useThemeProps: (e2) => ln({ props: e2, name: "MuiStack" }) });
var gu = {}, Dd = zc;
gu.createRoot = Dd.createRoot, gu.hydrateRoot = Dd.hydrateRoot;
var ws = { exports: {} }, Ym = {};
const $x = ig(L0);
var ae = {}, Vt = {};
Object.defineProperty(Vt, "__esModule", { value: true });
Vt.dontSetMe = bx;
Vt.findInArray = Mx;
Vt.int = Ox;
Vt.isFunction = Rx;
Vt.isNum = Nx;
function Mx(e2, t) {
  for (let n = 0, r = e2.length; n < r; n++) if (t.apply(t, [e2[n], n, e2])) return e2[n];
}
function Rx(e2) {
  return typeof e2 == "function" || Object.prototype.toString.call(e2) === "[object Function]";
}
function Nx(e2) {
  return typeof e2 == "number" && !isNaN(e2);
}
function Ox(e2) {
  return parseInt(e2, 10);
}
function bx(e2, t, n) {
  if (e2[t]) return new Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`);
}
var rr = {};
Object.defineProperty(rr, "__esModule", { value: true });
rr.browserPrefixToKey = Xm;
rr.browserPrefixToStyle = Dx;
rr.default = void 0;
rr.getPrefix = Gm;
const sa = ["Moz", "Webkit", "O", "ms"];
function Gm() {
  var _a2, _b;
  let e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u") return "";
  const t = (_b = (_a2 = window.document) == null ? void 0 : _a2.documentElement) == null ? void 0 : _b.style;
  if (!t || e2 in t) return "";
  for (let n = 0; n < sa.length; n++) if (Xm(e2, sa[n]) in t) return sa[n];
  return "";
}
function Xm(e2, t) {
  return t ? `${t}${Ax(e2)}` : e2;
}
function Dx(e2, t) {
  return t ? `-${t.toLowerCase()}-${e2}` : e2;
}
function Ax(e2) {
  let t = "", n = true;
  for (let r = 0; r < e2.length; r++) n ? (t += e2[r].toUpperCase(), n = false) : e2[r] === "-" ? n = true : t += e2[r];
  return t;
}
rr.default = Gm();
Object.defineProperty(ae, "__esModule", { value: true });
ae.addClassName = qm;
ae.addEvent = zx;
ae.addUserSelectStyles = Gx;
ae.createCSSTransform = Vx;
ae.createSVGTransform = Hx;
ae.getTouch = Kx;
ae.getTouchIdentifier = Yx;
ae.getTranslation = Fc;
ae.innerHeight = Bx;
ae.innerWidth = Ux;
ae.matchesSelector = Zm;
ae.matchesSelectorAndParentsTo = jx;
ae.offsetXYFromParent = Wx;
ae.outerHeight = Lx;
ae.outerWidth = Fx;
ae.removeClassName = Jm;
ae.removeEvent = Ix;
ae.scheduleRemoveUserSelectStyles = Xx;
var rt = Vt, Ad = Qm(rr);
function Qm(e2, t) {
  if (typeof WeakMap == "function") var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Qm = function(o, i) {
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
let Ti = "";
function Zm(e2, t) {
  return Ti || (Ti = (0, rt.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, rt.isFunction)(e2[n]);
  })), (0, rt.isFunction)(e2[Ti]) ? e2[Ti](t) : false;
}
function jx(e2, t, n) {
  let r = e2;
  do {
    if (Zm(r, t)) return true;
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
function Ix(e2, t, n, r) {
  if (!e2) return;
  const o = { capture: true, ...r };
  e2.removeEventListener ? e2.removeEventListener(t, n, o) : e2.detachEvent ? e2.detachEvent("on" + t, n) : e2["on" + t] = null;
}
function Lx(e2) {
  let t = e2.clientHeight;
  const n = e2.ownerDocument.defaultView.getComputedStyle(e2);
  return t += (0, rt.int)(n.borderTopWidth), t += (0, rt.int)(n.borderBottomWidth), t;
}
function Fx(e2) {
  let t = e2.clientWidth;
  const n = e2.ownerDocument.defaultView.getComputedStyle(e2);
  return t += (0, rt.int)(n.borderLeftWidth), t += (0, rt.int)(n.borderRightWidth), t;
}
function Bx(e2) {
  let t = e2.clientHeight;
  const n = e2.ownerDocument.defaultView.getComputedStyle(e2);
  return t -= (0, rt.int)(n.paddingTop), t -= (0, rt.int)(n.paddingBottom), t;
}
function Ux(e2) {
  let t = e2.clientWidth;
  const n = e2.ownerDocument.defaultView.getComputedStyle(e2);
  return t -= (0, rt.int)(n.paddingLeft), t -= (0, rt.int)(n.paddingRight), t;
}
function Wx(e2, t, n) {
  const o = t === t.ownerDocument.body ? { left: 0, top: 0 } : t.getBoundingClientRect(), i = (e2.clientX + t.scrollLeft - o.left) / n, l = (e2.clientY + t.scrollTop - o.top) / n;
  return { x: i, y: l };
}
function Vx(e2, t) {
  const n = Fc(e2, t, "px");
  return { [(0, Ad.browserPrefixToKey)("transform", Ad.default)]: n };
}
function Hx(e2, t) {
  return Fc(e2, t, "");
}
function Fc(e2, t, n) {
  let { x: r, y: o } = e2, i = `translate(${r}${n},${o}${n})`;
  if (t) {
    const l = `${typeof t.x == "string" ? t.x : t.x + n}`, s = `${typeof t.y == "string" ? t.y : t.y + n}`;
    i = `translate(${l}, ${s})` + i;
  }
  return i;
}
function Kx(e2, t) {
  return e2.targetTouches && (0, rt.findInArray)(e2.targetTouches, (n) => t === n.identifier) || e2.changedTouches && (0, rt.findInArray)(e2.changedTouches, (n) => t === n.identifier);
}
function Yx(e2) {
  if (e2.targetTouches && e2.targetTouches[0]) return e2.targetTouches[0].identifier;
  if (e2.changedTouches && e2.changedTouches[0]) return e2.changedTouches[0].identifier;
}
function Gx(e2) {
  if (!e2) return;
  let t = e2.getElementById("react-draggable-style-el");
  t || (t = e2.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e2.getElementsByTagName("head")[0].appendChild(t)), e2.body && qm(e2.body, "react-draggable-transparent-selection");
}
function Xx(e2) {
  window.requestAnimationFrame ? window.requestAnimationFrame(() => {
    jd(e2);
  }) : jd(e2);
}
function jd(e2) {
  if (e2) try {
    if (e2.body && Jm(e2.body, "react-draggable-transparent-selection"), e2.selection) e2.selection.empty();
    else {
      const t = (e2.defaultView || window).getSelection();
      t && t.type !== "Caret" && t.removeAllRanges();
    }
  } catch {
  }
}
function qm(e2, t) {
  e2.classList ? e2.classList.add(t) : e2.className.match(new RegExp(`(?:^|\\s)${t}(?!\\S)`)) || (e2.className += ` ${t}`);
}
function Jm(e2, t) {
  e2.classList ? e2.classList.remove(t) : e2.className = e2.className.replace(new RegExp(`(?:^|\\s)${t}(?!\\S)`, "g"), "");
}
var Ht = {};
Object.defineProperty(Ht, "__esModule", { value: true });
Ht.canDragX = qx;
Ht.canDragY = Jx;
Ht.createCoreData = tC;
Ht.createDraggableData = nC;
Ht.getBoundPosition = Qx;
Ht.getControlPosition = eC;
Ht.snapToGrid = Zx;
var Ze = Vt, Er = ae;
function Qx(e2, t, n) {
  if (!e2.props.bounds) return [t, n];
  let { bounds: r } = e2.props;
  r = typeof r == "string" ? r : rC(r);
  const o = Bc(e2);
  if (typeof r == "string") {
    const { ownerDocument: i } = o, l = i.defaultView;
    let s;
    if (r === "parent" ? s = o.parentNode : s = o.getRootNode().querySelector(r), !(s instanceof l.HTMLElement)) throw new Error('Bounds selector "' + r + '" could not find an element.');
    const a = s, u = l.getComputedStyle(o), m = l.getComputedStyle(a);
    r = { left: -o.offsetLeft + (0, Ze.int)(m.paddingLeft) + (0, Ze.int)(u.marginLeft), top: -o.offsetTop + (0, Ze.int)(m.paddingTop) + (0, Ze.int)(u.marginTop), right: (0, Er.innerWidth)(a) - (0, Er.outerWidth)(o) - o.offsetLeft + (0, Ze.int)(m.paddingRight) - (0, Ze.int)(u.marginRight), bottom: (0, Er.innerHeight)(a) - (0, Er.outerHeight)(o) - o.offsetTop + (0, Ze.int)(m.paddingBottom) - (0, Ze.int)(u.marginBottom) };
  }
  return (0, Ze.isNum)(r.right) && (t = Math.min(t, r.right)), (0, Ze.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, Ze.isNum)(r.left) && (t = Math.max(t, r.left)), (0, Ze.isNum)(r.top) && (n = Math.max(n, r.top)), [t, n];
}
function Zx(e2, t, n) {
  const r = Math.round(t / e2[0]) * e2[0], o = Math.round(n / e2[1]) * e2[1];
  return [r, o];
}
function qx(e2) {
  return e2.props.axis === "both" || e2.props.axis === "x";
}
function Jx(e2) {
  return e2.props.axis === "both" || e2.props.axis === "y";
}
function eC(e2, t, n) {
  const r = typeof t == "number" ? (0, Er.getTouch)(e2, t) : null;
  if (typeof t == "number" && !r) return null;
  const o = Bc(n), i = n.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Er.offsetXYFromParent)(r || e2, i, n.props.scale);
}
function tC(e2, t, n) {
  const r = !(0, Ze.isNum)(e2.lastX), o = Bc(e2);
  return r ? { node: o, deltaX: 0, deltaY: 0, lastX: t, lastY: n, x: t, y: n } : { node: o, deltaX: t - e2.lastX, deltaY: n - e2.lastY, lastX: e2.lastX, lastY: e2.lastY, x: t, y: n };
}
function nC(e2, t) {
  const n = e2.props.scale;
  return { node: t.node, x: e2.state.x + t.deltaX / n, y: e2.state.y + t.deltaY / n, deltaX: t.deltaX / n, deltaY: t.deltaY / n, lastX: e2.state.x, lastY: e2.state.y };
}
function rC(e2) {
  return { left: e2.left, top: e2.top, right: e2.right, bottom: e2.bottom };
}
function Bc(e2) {
  const t = e2.findDOMNode();
  if (!t) throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var xs = {}, Cs = {};
Object.defineProperty(Cs, "__esModule", { value: true });
Cs.default = oC;
function oC() {
}
Object.defineProperty(xs, "__esModule", { value: true });
xs.default = void 0;
var aa = eg(P), De = Uc(mp), iC = Uc(zc), $e = ae, cn = Ht, ua = Vt, no = Uc(Cs);
function Uc(e2) {
  return e2 && e2.__esModule ? e2 : { default: e2 };
}
function eg(e2, t) {
  if (typeof WeakMap == "function") var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (eg = function(o, i) {
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
function Ae(e2, t, n) {
  return (t = lC(t)) in e2 ? Object.defineProperty(e2, t, { value: n, enumerable: true, configurable: true, writable: true }) : e2[t] = n, e2;
}
function lC(e2) {
  var t = sC(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sC(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var n = e2[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e2, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
const Et = { touch: { start: "touchstart", move: "touchmove", stop: "touchend" }, mouse: { start: "mousedown", move: "mousemove", stop: "mouseup" } };
let fn = Et.mouse, ks = class extends aa.Component {
  constructor() {
    super(...arguments), Ae(this, "dragging", false), Ae(this, "lastX", NaN), Ae(this, "lastY", NaN), Ae(this, "touchIdentifier", null), Ae(this, "mounted", false), Ae(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0) return false;
      const n = this.findDOMNode();
      if (!n || !n.ownerDocument || !n.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
      const { ownerDocument: r } = n;
      if (this.props.disabled || !(t.target instanceof r.defaultView.Node) || this.props.handle && !(0, $e.matchesSelectorAndParentsTo)(t.target, this.props.handle, n) || this.props.cancel && (0, $e.matchesSelectorAndParentsTo)(t.target, this.props.cancel, n)) return;
      t.type === "touchstart" && !this.props.allowMobileScroll && t.preventDefault();
      const o = (0, $e.getTouchIdentifier)(t);
      this.touchIdentifier = o;
      const i = (0, cn.getControlPosition)(t, o, this);
      if (i == null) return;
      const { x: l, y: s } = i, a = (0, cn.createCoreData)(this, l, s);
      (0, no.default)("DraggableCore: handleDragStart: %j", a), (0, no.default)("calling", this.props.onStart), !(this.props.onStart(t, a) === false || this.mounted === false) && (this.props.enableUserSelectHack && (0, $e.addUserSelectStyles)(r), this.dragging = true, this.lastX = l, this.lastY = s, (0, $e.addEvent)(r, fn.move, this.handleDrag), (0, $e.addEvent)(r, fn.stop, this.handleDragStop));
    }), Ae(this, "handleDrag", (t) => {
      const n = (0, cn.getControlPosition)(t, this.touchIdentifier, this);
      if (n == null) return;
      let { x: r, y: o } = n;
      if (Array.isArray(this.props.grid)) {
        let s = r - this.lastX, a = o - this.lastY;
        if ([s, a] = (0, cn.snapToGrid)(this.props.grid, s, a), !s && !a) return;
        r = this.lastX + s, o = this.lastY + a;
      }
      const i = (0, cn.createCoreData)(this, r, o);
      if ((0, no.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(t, i) === false || this.mounted === false) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const a = document.createEvent("MouseEvents");
          a.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), this.handleDragStop(a);
        }
        return;
      }
      this.lastX = r, this.lastY = o;
    }), Ae(this, "handleDragStop", (t) => {
      if (!this.dragging) return;
      const n = (0, cn.getControlPosition)(t, this.touchIdentifier, this);
      if (n == null) return;
      let { x: r, y: o } = n;
      if (Array.isArray(this.props.grid)) {
        let a = r - this.lastX || 0, u = o - this.lastY || 0;
        [a, u] = (0, cn.snapToGrid)(this.props.grid, a, u), r = this.lastX + a, o = this.lastY + u;
      }
      const i = (0, cn.createCoreData)(this, r, o);
      if (this.props.onStop(t, i) === false || this.mounted === false) return false;
      const s = this.findDOMNode();
      s && this.props.enableUserSelectHack && (0, $e.scheduleRemoveUserSelectStyles)(s.ownerDocument), (0, no.default)("DraggableCore: handleDragStop: %j", i), this.dragging = false, this.lastX = NaN, this.lastY = NaN, s && ((0, no.default)("DraggableCore: Removing handlers"), (0, $e.removeEvent)(s.ownerDocument, fn.move, this.handleDrag), (0, $e.removeEvent)(s.ownerDocument, fn.stop, this.handleDragStop));
    }), Ae(this, "onMouseDown", (t) => (fn = Et.mouse, this.handleDragStart(t))), Ae(this, "onMouseUp", (t) => (fn = Et.mouse, this.handleDragStop(t))), Ae(this, "onTouchStart", (t) => (fn = Et.touch, this.handleDragStart(t))), Ae(this, "onTouchEnd", (t) => (fn = Et.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = true;
    const t = this.findDOMNode();
    t && (0, $e.addEvent)(t, Et.touch.start, this.onTouchStart, { passive: false });
  }
  componentWillUnmount() {
    this.mounted = false;
    const t = this.findDOMNode();
    if (t) {
      const { ownerDocument: n } = t;
      (0, $e.removeEvent)(n, Et.mouse.move, this.handleDrag), (0, $e.removeEvent)(n, Et.touch.move, this.handleDrag), (0, $e.removeEvent)(n, Et.mouse.stop, this.handleDragStop), (0, $e.removeEvent)(n, Et.touch.stop, this.handleDragStop), (0, $e.removeEvent)(t, Et.touch.start, this.onTouchStart, { passive: false }), this.props.enableUserSelectHack && (0, $e.scheduleRemoveUserSelectStyles)(n);
    }
  }
  findDOMNode() {
    var _a2, _b, _c2;
    return ((_a2 = this.props) == null ? void 0 : _a2.nodeRef) ? (_c2 = (_b = this.props) == null ? void 0 : _b.nodeRef) == null ? void 0 : _c2.current : iC.default.findDOMNode(this);
  }
  render() {
    return aa.cloneElement(aa.Children.only(this.props.children), { onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp, onTouchEnd: this.onTouchEnd });
  }
};
xs.default = ks;
Ae(ks, "displayName", "DraggableCore");
Ae(ks, "propTypes", { allowAnyClick: De.default.bool, allowMobileScroll: De.default.bool, children: De.default.node.isRequired, disabled: De.default.bool, enableUserSelectHack: De.default.bool, offsetParent: function(e2, t) {
  if (e2[t] && e2[t].nodeType !== 1) throw new Error("Draggable's offsetParent must be a DOM Node.");
}, grid: De.default.arrayOf(De.default.number), handle: De.default.string, cancel: De.default.string, nodeRef: De.default.object, onStart: De.default.func, onDrag: De.default.func, onStop: De.default.func, onMouseDown: De.default.func, scale: De.default.number, className: ua.dontSetMe, style: ua.dontSetMe, transform: ua.dontSetMe });
Ae(ks, "defaultProps", { allowAnyClick: false, allowMobileScroll: false, disabled: false, enableUserSelectHack: true, onStart: function() {
}, onDrag: function() {
}, onStop: function() {
}, onMouseDown: function() {
}, scale: 1 });
(function(e2) {
  Object.defineProperty(e2, "__esModule", { value: true }), Object.defineProperty(e2, "DraggableCore", { enumerable: true, get: function() {
    return a.default;
  } }), e2.default = void 0;
  var t = p(P), n = m(mp), r = m(zc), o = $x, i = ae, l = Ht, s = Vt, a = m(xs), u = m(Cs);
  function m(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function p(d, f) {
    if (typeof WeakMap == "function") var g = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap();
    return (p = function(x, C) {
      if (!C && x && x.__esModule) return x;
      var T, E, N = { __proto__: null, default: x };
      if (x === null || typeof x != "object" && typeof x != "function") return N;
      if (T = C ? y : g) {
        if (T.has(x)) return T.get(x);
        T.set(x, N);
      }
      for (const c in x) c !== "default" && {}.hasOwnProperty.call(x, c) && ((E = (T = Object.defineProperty) && Object.getOwnPropertyDescriptor(x, c)) && (E.get || E.set) ? T(N, c, E) : N[c] = x[c]);
      return N;
    })(d, f);
  }
  function h() {
    return h = Object.assign ? Object.assign.bind() : function(d) {
      for (var f = 1; f < arguments.length; f++) {
        var g = arguments[f];
        for (var y in g) ({}).hasOwnProperty.call(g, y) && (d[y] = g[y]);
      }
      return d;
    }, h.apply(null, arguments);
  }
  function S(d, f, g) {
    return (f = v(f)) in d ? Object.defineProperty(d, f, { value: g, enumerable: true, configurable: true, writable: true }) : d[f] = g, d;
  }
  function v(d) {
    var f = w(d, "string");
    return typeof f == "symbol" ? f : f + "";
  }
  function w(d, f) {
    if (typeof d != "object" || !d) return d;
    var g = d[Symbol.toPrimitive];
    if (g !== void 0) {
      var y = g.call(d, f);
      if (typeof y != "object") return y;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (f === "string" ? String : Number)(d);
  }
  class _ extends t.Component {
    static getDerivedStateFromProps(f, g) {
      let { position: y } = f, { prevPropsPosition: x } = g;
      return y && (!x || y.x !== x.x || y.y !== x.y) ? ((0, u.default)("Draggable: getDerivedStateFromProps %j", { position: y, prevPropsPosition: x }), { x: y.x, y: y.y, prevPropsPosition: { ...y } }) : null;
    }
    constructor(f) {
      super(f), S(this, "onDragStart", (g, y) => {
        if ((0, u.default)("Draggable: onDragStart: %j", y), this.props.onStart(g, (0, l.createDraggableData)(this, y)) === false) return false;
        this.setState({ dragging: true, dragged: true });
      }), S(this, "onDrag", (g, y) => {
        if (!this.state.dragging) return false;
        (0, u.default)("Draggable: onDrag: %j", y);
        const x = (0, l.createDraggableData)(this, y), C = { x: x.x, y: x.y, slackX: 0, slackY: 0 };
        if (this.props.bounds) {
          const { x: E, y: N } = C;
          C.x += this.state.slackX, C.y += this.state.slackY;
          const [c, $] = (0, l.getBoundPosition)(this, C.x, C.y);
          C.x = c, C.y = $, C.slackX = this.state.slackX + (E - C.x), C.slackY = this.state.slackY + (N - C.y), x.x = C.x, x.y = C.y, x.deltaX = C.x - this.state.x, x.deltaY = C.y - this.state.y;
        }
        if (this.props.onDrag(g, x) === false) return false;
        this.setState(C);
      }), S(this, "onDragStop", (g, y) => {
        if (!this.state.dragging || this.props.onStop(g, (0, l.createDraggableData)(this, y)) === false) return false;
        (0, u.default)("Draggable: onDragStop: %j", y);
        const C = { dragging: false, slackX: 0, slackY: 0 };
        if (!!this.props.position) {
          const { x: E, y: N } = this.props.position;
          C.x = E, C.y = N;
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
      const { axis: f, bounds: g, children: y, defaultPosition: x, defaultClassName: C, defaultClassNameDragging: T, defaultClassNameDragged: E, position: N, positionOffset: c, scale: $, ...A } = this.props;
      let I = {}, H = null;
      const ue = !!!N || this.state.dragging, Be = N || x, O = { x: (0, l.canDragX)(this) && ue ? this.state.x : Be.x, y: (0, l.canDragY)(this) && ue ? this.state.y : Be.y };
      this.state.isElementSVG ? H = (0, i.createSVGTransform)(O, c) : I = (0, i.createCSSTransform)(O, c);
      const D = (0, o.clsx)(y.props.className || "", C, { [T]: this.state.dragging, [E]: this.state.dragged });
      return t.createElement(a.default, h({}, A, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }), t.cloneElement(t.Children.only(y), { className: D, style: { ...y.props.style, ...I }, transform: H }));
    }
  }
  e2.default = _, S(_, "displayName", "Draggable"), S(_, "propTypes", { ...a.default.propTypes, axis: n.default.oneOf(["both", "x", "y", "none"]), bounds: n.default.oneOfType([n.default.shape({ left: n.default.number, right: n.default.number, top: n.default.number, bottom: n.default.number }), n.default.string, n.default.oneOf([false])]), defaultClassName: n.default.string, defaultClassNameDragging: n.default.string, defaultClassNameDragged: n.default.string, defaultPosition: n.default.shape({ x: n.default.number, y: n.default.number }), positionOffset: n.default.shape({ x: n.default.oneOfType([n.default.number, n.default.string]), y: n.default.oneOfType([n.default.number, n.default.string]) }), position: n.default.shape({ x: n.default.number, y: n.default.number }), className: s.dontSetMe, style: s.dontSetMe, transform: s.dontSetMe }), S(_, "defaultProps", { ...a.default.defaultProps, axis: "both", bounds: false, defaultClassName: "react-draggable", defaultClassNameDragging: "react-draggable-dragging", defaultClassNameDragged: "react-draggable-dragged", defaultPosition: { x: 0, y: 0 }, scale: 1 });
})(Ym);
const { default: tg, DraggableCore: aC } = Ym;
ws.exports = tg;
ws.exports.default = tg;
ws.exports.DraggableCore = aC;
var uC = ws.exports;
const cC = zd(uC), fC = er(M.jsx("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" })), dC = er(M.jsx("path", { d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" })), pC = er(M.jsx("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), hC = er(M.jsx("path", { d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H6V6h12z" })), mC = er(M.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" })), gC = er(M.jsx("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z" })), yC = er(M.jsx("path", { d: "M19 13H5v-2h14z" }));
function vC({ content: e2, colors: t }) {
  const n = { left: [M.jsx(fC, { fontSize: "small" }), M.jsx(dC, { fontSize: "small" }), M.jsx(gC, { fontSize: "small" })], right: [M.jsx(mC, { fontSize: "small" })] };
  return M.jsxs(We, { sx: { display: "flex", alignItems: "center", px: 1, py: 0.5, borderBottom: `1px solid ${t.brd}` }, children: [n.left.map((r, o) => M.jsx(wo, { sx: { color: t.btns }, size: "small", children: r }, o)), M.jsx(We, { sx: { flexGrow: 1, mx: 1, px: 2, py: 0.5, backgroundColor: "white", borderRadius: 100, border: `1px solid ${t.brd}`, display: "flex", alignItems: "center", overflow: "hidden", pointerEvents: "auto" }, children: M.jsx(xl, { variant: "body2", color: "text.secondary", noWrap: true, children: e2.pageUrl || "https://example.com" }) }), n.right.map((r, o) => M.jsx(wo, { sx: { color: t.btns }, size: "small", children: r }, o))] });
}
function SC({ platform: e2, colors: t }) {
  const n = e2 === "mac";
  return M.jsx(We, { sx: { display: "flex", justifyContent: n ? "flex-start" : "space-between", alignItems: "center", py: 0.25, cursor: "grab" }, children: M.jsx(wC, { isMac: n, colors: t }) });
}
function wC({ isMac: e2 = false, colors: t }) {
  const n = { width: 12, height: 12, borderRadius: "50%" };
  return M.jsx(M.Fragment, { children: e2 ? M.jsxs(We, { sx: { display: "flex", gap: 1, p: 1.5 }, children: [M.jsx(We, { sx: { ...n, backgroundColor: "#ff5f56" } }), M.jsx(We, { sx: { ...n, backgroundColor: "#ffbd2e" } }), M.jsx(We, { sx: { ...n, backgroundColor: "#27c93f" } })] }) : M.jsxs(We, { sx: { display: "flex", justifyContent: "flex-end", width: "100%" }, children: [M.jsx(wo, { size: "small", sx: { px: 1.5, py: 1, borderRadius: 0, color: t.btns }, children: M.jsx(yC, { fontSize: "inherit" }) }), M.jsx(wo, { size: "small", sx: { px: 1.5, py: 1, borderRadius: 0, color: t.btns }, children: M.jsx(hC, { fontSize: "inherit" }) }), M.jsx(wo, { size: "small", sx: { px: 1.5, py: 1, borderRadius: 0, color: t.btns }, children: M.jsx(pC, { fontSize: "inherit" }) })] }) });
}
function xC({ content: e2 = { imgUrl: null, pageUrl: null, dims: { width: 800, height: 600 } }, platform: t = "mac", position: n = { top: 0, left: 0 }, active: r = false, onClick: o = () => {
}, imgBackground: i = true, zIndex: l = 1 }) {
  const a = os().colors, [u, m] = P.useState(false), p = 150, h = P.useRef(0), S = { backgroundImage: e2.imgUrl ? `url(${e2.imgUrl})` : "none", backgroundSize: "300%", backgroundPosition: "center" };
  return M.jsx(cC, { handle: ".drag-handle", bounds: "#root", onMouseDown: (v) => {
    v.stopPropagation(), o();
  }, children: M.jsx(We, { sx: { position: "absolute", top: n.top, left: n.left, zIndex: r ? 1e3 : l, pointerEvents: "none" }, children: M.jsx(We, { sx: { transform: `scale(${r ? 1 : 0.7})`, transformOrigin: "center", transition: "transform 0.3s ease, opacity 1s", opacity: u ? 1 : 0, pointerEvents: "auto" }, children: M.jsxs(Lw, { elevation: r ? 10 : 1, sx: { minWidth: "600px", maxWidth: "600px", borderRadius: 2, overflow: "hidden", backgroundColor: a.main, border: `1px solid ${a.brd}`, ...i ? S : {} }, className: "browser", children: [M.jsxs(We, { sx: { backdropFilter: "blur(50px)" }, className: "drag-handle", children: [M.jsx(SC, { platform: t, colors: a }), M.jsx(vC, { content: e2, colors: a })] }), M.jsx(We, { sx: { backgroundColor: "#fff", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }, className: "drag-handle", onMouseDown: () => {
    h.current = Date.now();
  }, onMouseUp: () => {
    Date.now() - h.current < p && e2.pageUrl && window.open(e2.pageUrl, "_blank");
  }, children: e2.imgUrl ? M.jsx("img", { src: e2.imgUrl, alt: e2.title, draggable: false, onLoad: () => m(true), style: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" } }) : M.jsx(xl, { variant: "body2", color: "text.secondary", children: "No image loaded" }) })] }) }) }) });
}
function CC() {
  if (navigator.userAgentData) return navigator.userAgentData.platform.toLowerCase().includes("mac") ? "mac" : "win";
  const e2 = navigator.userAgent.toLowerCase();
  return e2.includes("macintosh") || e2.includes("mac os x") ? "mac" : e2.includes("windows") ? "win" : "unknown";
}
function kC({ manifest: e2, desktopRef: t }) {
  const [n, r] = P.useState("win"), [o, i] = P.useState([]), [l, s] = P.useState(null), [a, u] = P.useState([]), p = os().colors;
  P.useEffect(() => {
    r(CC());
  }, []), P.useEffect(() => {
    e2.length > 0 && o.length === 0 && i(e2.map((S, v) => v));
  }, [e2]), P.useEffect(() => {
    u([]), e2.forEach((S, v) => {
      setTimeout(() => {
        u((w) => [...w, v]);
      }, v * 100);
    });
  }, [e2]);
  const h = (S) => {
    s(S), i((v) => {
      const w = v.filter((_) => _ !== S);
      return w.push(S), w;
    });
  };
  return M.jsxs(M.Fragment, { children: [e2.length > 0 && e2.map((S, v) => {
    if (!a.includes(v)) return null;
    const w = o.indexOf(v);
    return M.jsx(xC, { content: { imgUrl: S.imgUrl, pageUrl: S.pageUrl, dims: S.dims || { width: 800, height: 600 }, title: S.title || "Mockup Content" }, position: S.position, platform: n, active: l === v, zIndex: w + 10, onClick: () => h(v), desktopRef: t }, v);
  }), M.jsx(We, { sx: { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 100, opacity: l === null ? 0 : 0.5, backgroundColor: p.background, transition: "opacity 1s ease", pointerEvents: l === null ? "none" : "auto" }, onClick: () => s(null) })] });
}
function EC() {
  const t = os().colors;
  return M.jsx(We, { sx: { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", color: "white", backgroundColor: t.background, zIndex: -1, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }, children: M.jsxs(_x, { sx: { position: "fixed", top: 0, left: 0, p: 4, width: "33%" }, children: [M.jsx(xl, { sx: { fontSize: "2rem", fontFamily: "Manrope, sans-serif", fontWeight: 800, pb: 2 }, children: "Iacopo Neri" }), M.jsx(xl, { sx: { fontSize: "0.7rem", fontFamily: "Manrope, sans-serif" }, variant: "body1", children: "With a research at the intersection of design, computer science, and the humanities, Iacopo Neri has been involved in teaching activities since 2015 in several institutions around Europe. Currently serving as scientific collaborator for the MPG Center for Digital Visual Studies and Computational Lead for IAAC, he is passionate about the implications of machine learning for urban, cultural and social studies." })] }) });
}
const PC = "dark", TC = { light: { main: "transparent", btns: "rgba(100,100,100)", brd: "rgba(192,192,192)", background: "rgba(240,240,240,1)", text: "rgba(0,0,0,0.8)", textLight: "rgba(0,0,0,0.5)", textDark: "rgba(0,0,0,0.3)" }, dark: { main: "transparent", btns: "rgba(150,150,150)", brd: "rgba(63,63,63)", background: "rgba(15,15,15,1)", text: "rgba(255,255,255,0.8)", textLight: "rgba(255,255,255,0.5)", textDark: "rgba(255,255,255,0.3)" } }, _C = TC[PC];
let $C = rs({ colors: _C });
function MC() {
  const [e2, t] = P.useState([]);
  return P.useEffect(() => {
    fetch("/manifest.json").then((n) => n.json()).then((n) => {
      n.forEach((r) => {
        r.position = {}, r.position.top = `${Math.floor(Math.random() * 50) + 10}%`, r.position.left = `${Math.floor(Math.random() * Math.random() * 80) + 10}%`;
      }), console.log(n), t(n.sort(() => Math.random() - 0.5));
    }).catch((n) => {
      console.error("Error fetching manifest:", n);
    });
  }, []), M.jsx(M.Fragment, { children: M.jsxs(v1, { theme: $C, children: [M.jsx(Tx, {}), M.jsx(kC, { manifest: e2 }), M.jsx(EC, {})] }) });
}
const RC = gu.createRoot(document.getElementById("root"));
RC.render(M.jsx(MC, {}));
