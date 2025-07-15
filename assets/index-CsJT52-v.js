var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function Em(e3, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r) if (o !== "default" && !(o in e3)) {
        const i = Object.getOwnPropertyDescriptor(r, o);
        i && Object.defineProperty(e3, o, i.get ? i : { enumerable: true, get: () => r[o] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }));
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
function Ua(e3) {
  return e3 && e3.__esModule && Object.prototype.hasOwnProperty.call(e3, "default") ? e3.default : e3;
}
var nd = { exports: {} }, nl = {}, rd = { exports: {} }, j = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Oo = Symbol.for("react.element"), Pm = Symbol.for("react.portal"), Tm = Symbol.for("react.fragment"), _m = Symbol.for("react.strict_mode"), Rm = Symbol.for("react.profiler"), $m = Symbol.for("react.provider"), Nm = Symbol.for("react.context"), Mm = Symbol.for("react.forward_ref"), Om = Symbol.for("react.suspense"), Dm = Symbol.for("react.memo"), zm = Symbol.for("react.lazy"), pc = Symbol.iterator;
function Im(e3) {
  return e3 === null || typeof e3 != "object" ? null : (e3 = pc && e3[pc] || e3["@@iterator"], typeof e3 == "function" ? e3 : null);
}
var od = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, id = Object.assign, ld = {};
function Rr(e3, t, n) {
  this.props = e3, this.context = t, this.refs = ld, this.updater = n || od;
}
Rr.prototype.isReactComponent = {};
Rr.prototype.setState = function(e3, t) {
  if (typeof e3 != "object" && typeof e3 != "function" && e3 != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e3, t, "setState");
};
Rr.prototype.forceUpdate = function(e3) {
  this.updater.enqueueForceUpdate(this, e3, "forceUpdate");
};
function sd() {
}
sd.prototype = Rr.prototype;
function Wa(e3, t, n) {
  this.props = e3, this.context = t, this.refs = ld, this.updater = n || od;
}
var Va = Wa.prototype = new sd();
Va.constructor = Wa;
id(Va, Rr.prototype);
Va.isPureReactComponent = true;
var hc = Array.isArray, ad = Object.prototype.hasOwnProperty, Ha = { current: null }, ud = { key: true, ref: true, __self: true, __source: true };
function cd(e3, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) ad.call(t, r) && !ud.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e3 && e3.defaultProps) for (r in s = e3.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Oo, type: e3, key: i, ref: l, props: o, _owner: Ha.current };
}
function Am(e3, t) {
  return { $$typeof: Oo, type: e3.type, key: t, ref: e3.ref, props: e3.props, _owner: e3._owner };
}
function Ya(e3) {
  return typeof e3 == "object" && e3 !== null && e3.$$typeof === Oo;
}
function Lm(e3) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e3.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var mc = /\/+/g;
function ts(e3, t) {
  return typeof e3 == "object" && e3 !== null && e3.key != null ? Lm("" + e3.key) : t.toString(36);
}
function ci(e3, t, n, r, o) {
  var i = typeof e3;
  (i === "undefined" || i === "boolean") && (e3 = null);
  var l = false;
  if (e3 === null) l = true;
  else switch (i) {
    case "string":
    case "number":
      l = true;
      break;
    case "object":
      switch (e3.$$typeof) {
        case Oo:
        case Pm:
          l = true;
      }
  }
  if (l) return l = e3, o = o(l), e3 = r === "" ? "." + ts(l, 0) : r, hc(o) ? (n = "", e3 != null && (n = e3.replace(mc, "$&/") + "/"), ci(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Ya(o) && (o = Am(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(mc, "$&/") + "/") + e3)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", hc(e3)) for (var s = 0; s < e3.length; s++) {
    i = e3[s];
    var a = r + ts(i, s);
    l += ci(i, t, n, a, o);
  }
  else if (a = Im(e3), typeof a == "function") for (e3 = a.call(e3), s = 0; !(i = e3.next()).done; ) i = i.value, a = r + ts(i, s++), l += ci(i, t, n, a, o);
  else if (i === "object") throw t = String(e3), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e3).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Wo(e3, t, n) {
  if (e3 == null) return e3;
  var r = [], o = 0;
  return ci(e3, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function bm(e3) {
  if (e3._status === -1) {
    var t = e3._result;
    t = t(), t.then(function(n) {
      (e3._status === 0 || e3._status === -1) && (e3._status = 1, e3._result = n);
    }, function(n) {
      (e3._status === 0 || e3._status === -1) && (e3._status = 2, e3._result = n);
    }), e3._status === -1 && (e3._status = 0, e3._result = t);
  }
  if (e3._status === 1) return e3._result.default;
  throw e3._result;
}
var Ie = { current: null }, fi = { transition: null }, jm = { ReactCurrentDispatcher: Ie, ReactCurrentBatchConfig: fi, ReactCurrentOwner: Ha };
function fd() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = { map: Wo, forEach: function(e3, t, n) {
  Wo(e3, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e3) {
  var t = 0;
  return Wo(e3, function() {
    t++;
  }), t;
}, toArray: function(e3) {
  return Wo(e3, function(t) {
    return t;
  }) || [];
}, only: function(e3) {
  if (!Ya(e3)) throw Error("React.Children.only expected to receive a single React element child.");
  return e3;
} };
j.Component = Rr;
j.Fragment = Tm;
j.Profiler = Rm;
j.PureComponent = Wa;
j.StrictMode = _m;
j.Suspense = Om;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jm;
j.act = fd;
j.cloneElement = function(e3, t, n) {
  if (e3 == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e3 + ".");
  var r = id({}, e3.props), o = e3.key, i = e3.ref, l = e3._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Ha.current), t.key !== void 0 && (o = "" + t.key), e3.type && e3.type.defaultProps) var s = e3.type.defaultProps;
    for (a in t) ad.call(t, a) && !ud.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Oo, type: e3.type, key: o, ref: i, props: r, _owner: l };
};
j.createContext = function(e3) {
  return e3 = { $$typeof: Nm, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e3.Provider = { $$typeof: $m, _context: e3 }, e3.Consumer = e3;
};
j.createElement = cd;
j.createFactory = function(e3) {
  var t = cd.bind(null, e3);
  return t.type = e3, t;
};
j.createRef = function() {
  return { current: null };
};
j.forwardRef = function(e3) {
  return { $$typeof: Mm, render: e3 };
};
j.isValidElement = Ya;
j.lazy = function(e3) {
  return { $$typeof: zm, _payload: { _status: -1, _result: e3 }, _init: bm };
};
j.memo = function(e3, t) {
  return { $$typeof: Dm, type: e3, compare: t === void 0 ? null : t };
};
j.startTransition = function(e3) {
  var t = fi.transition;
  fi.transition = {};
  try {
    e3();
  } finally {
    fi.transition = t;
  }
};
j.unstable_act = fd;
j.useCallback = function(e3, t) {
  return Ie.current.useCallback(e3, t);
};
j.useContext = function(e3) {
  return Ie.current.useContext(e3);
};
j.useDebugValue = function() {
};
j.useDeferredValue = function(e3) {
  return Ie.current.useDeferredValue(e3);
};
j.useEffect = function(e3, t) {
  return Ie.current.useEffect(e3, t);
};
j.useId = function() {
  return Ie.current.useId();
};
j.useImperativeHandle = function(e3, t, n) {
  return Ie.current.useImperativeHandle(e3, t, n);
};
j.useInsertionEffect = function(e3, t) {
  return Ie.current.useInsertionEffect(e3, t);
};
j.useLayoutEffect = function(e3, t) {
  return Ie.current.useLayoutEffect(e3, t);
};
j.useMemo = function(e3, t) {
  return Ie.current.useMemo(e3, t);
};
j.useReducer = function(e3, t, n) {
  return Ie.current.useReducer(e3, t, n);
};
j.useRef = function(e3) {
  return Ie.current.useRef(e3);
};
j.useState = function(e3) {
  return Ie.current.useState(e3);
};
j.useSyncExternalStore = function(e3, t, n) {
  return Ie.current.useSyncExternalStore(e3, t, n);
};
j.useTransition = function() {
  return Ie.current.useTransition();
};
j.version = "18.3.1";
rd.exports = j;
var R = rd.exports;
const qn = Ua(R), zs = Em({ __proto__: null, default: qn }, [R]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Fm = R, Bm = Symbol.for("react.element"), Um = Symbol.for("react.fragment"), Wm = Object.prototype.hasOwnProperty, Vm = Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Hm = { key: true, ref: true, __self: true, __source: true };
function dd(e3, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Wm.call(t, r) && !Hm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e3 && e3.defaultProps) for (r in t = e3.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Bm, type: e3, key: i, ref: l, props: o, _owner: Vm.current };
}
nl.Fragment = Um;
nl.jsx = dd;
nl.jsxs = dd;
nd.exports = nl;
var O = nd.exports, Is = {}, pd = { exports: {} }, Je = {}, hd = { exports: {} }, md = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e3) {
  function t(N, z) {
    var A = N.length;
    N.push(z);
    e: for (; 0 < A; ) {
      var W = A - 1 >>> 1, te = N[W];
      if (0 < o(te, z)) N[W] = z, N[A] = te, A = W;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var z = N[0], A = N.pop();
    if (A !== z) {
      N[0] = A;
      e: for (var W = 0, te = N.length, Vn = te >>> 1; W < Vn; ) {
        var It = 2 * (W + 1) - 1, Dr = N[It], At = It + 1, Hn = N[At];
        if (0 > o(Dr, A)) At < te && 0 > o(Hn, Dr) ? (N[W] = Hn, N[At] = A, W = At) : (N[W] = Dr, N[It] = A, W = It);
        else if (At < te && 0 > o(Hn, A)) N[W] = Hn, N[At] = A, W = At;
        else break e;
      }
    }
    return z;
  }
  function o(N, z) {
    var A = N.sortIndex - z.sortIndex;
    return A !== 0 ? A : N.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e3.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, s = l.now();
    e3.unstable_now = function() {
      return l.now() - s;
    };
  }
  var a = [], u = [], m = 1, p = null, h = 3, w = false, v = false, S = false, P = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(N) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= N) r(u), z.sortIndex = z.expirationTime, t(a, z);
      else break;
      z = n(u);
    }
  }
  function y(N) {
    if (S = false, g(N), !v) if (n(a) !== null) v = true, Se(x);
    else {
      var z = n(u);
      z !== null && nt(y, z.startTime - N);
    }
  }
  function x(N, z) {
    v = false, S && (S = false, d(T), T = -1), w = true;
    var A = h;
    try {
      for (g(z), p = n(a); p !== null && (!(p.expirationTime > z) || N && !$()); ) {
        var W = p.callback;
        if (typeof W == "function") {
          p.callback = null, h = p.priorityLevel;
          var te = W(p.expirationTime <= z);
          z = e3.unstable_now(), typeof te == "function" ? p.callback = te : p === n(a) && r(a), g(z);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Vn = true;
      else {
        var It = n(u);
        It !== null && nt(y, It.startTime - z), Vn = false;
      }
      return Vn;
    } finally {
      p = null, h = A, w = false;
    }
  }
  var k = false, E = null, T = -1, D = 5, c = -1;
  function $() {
    return !(e3.unstable_now() - c < D);
  }
  function I() {
    if (E !== null) {
      var N = e3.unstable_now();
      c = N;
      var z = true;
      try {
        z = E(true, N);
      } finally {
        z ? L() : (k = false, E = null);
      }
    } else k = false;
  }
  var L;
  if (typeof f == "function") L = function() {
    f(I);
  };
  else if (typeof MessageChannel < "u") {
    var Y = new MessageChannel(), We = Y.port2;
    Y.port1.onmessage = I, L = function() {
      We.postMessage(null);
    };
  } else L = function() {
    P(I, 0);
  };
  function Se(N) {
    E = N, k || (k = true, L());
  }
  function nt(N, z) {
    T = P(function() {
      N(e3.unstable_now());
    }, z);
  }
  e3.unstable_IdlePriority = 5, e3.unstable_ImmediatePriority = 1, e3.unstable_LowPriority = 4, e3.unstable_NormalPriority = 3, e3.unstable_Profiling = null, e3.unstable_UserBlockingPriority = 2, e3.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e3.unstable_continueExecution = function() {
    v || w || (v = true, Se(x));
  }, e3.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e3.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e3.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e3.unstable_next = function(N) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = h;
    }
    var A = h;
    h = z;
    try {
      return N();
    } finally {
      h = A;
    }
  }, e3.unstable_pauseExecution = function() {
  }, e3.unstable_requestPaint = function() {
  }, e3.unstable_runWithPriority = function(N, z) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var A = h;
    h = N;
    try {
      return z();
    } finally {
      h = A;
    }
  }, e3.unstable_scheduleCallback = function(N, z, A) {
    var W = e3.unstable_now();
    switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? W + A : W) : A = W, N) {
      case 1:
        var te = -1;
        break;
      case 2:
        te = 250;
        break;
      case 5:
        te = 1073741823;
        break;
      case 4:
        te = 1e4;
        break;
      default:
        te = 5e3;
    }
    return te = A + te, N = { id: m++, callback: z, priorityLevel: N, startTime: A, expirationTime: te, sortIndex: -1 }, A > W ? (N.sortIndex = A, t(u, N), n(a) === null && N === n(u) && (S ? (d(T), T = -1) : S = true, nt(y, A - W))) : (N.sortIndex = te, t(a, N), v || w || (v = true, Se(x))), N;
  }, e3.unstable_shouldYield = $, e3.unstable_wrapCallback = function(N) {
    var z = h;
    return function() {
      var A = h;
      h = z;
      try {
        return N.apply(this, arguments);
      } finally {
        h = A;
      }
    };
  };
})(md);
hd.exports = md;
var Ym = hd.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Km = R, qe = Ym;
function _(e3) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e3, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e3 + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var gd = /* @__PURE__ */ new Set(), uo = {};
function bn(e3, t) {
  wr(e3, t), wr(e3 + "Capture", t);
}
function wr(e3, t) {
  for (uo[e3] = t, e3 = 0; e3 < t.length; e3++) gd.add(t[e3]);
}
var Vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), As = Object.prototype.hasOwnProperty, Xm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, gc = {}, yc = {};
function Qm(e3) {
  return As.call(yc, e3) ? true : As.call(gc, e3) ? false : Xm.test(e3) ? yc[e3] = true : (gc[e3] = true, false);
}
function Gm(e3, t, n, r) {
  if (n !== null && n.type === 0) return false;
  switch (typeof t) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      return r ? false : n !== null ? !n.acceptsBooleans : (e3 = e3.toLowerCase().slice(0, 5), e3 !== "data-" && e3 !== "aria-");
    default:
      return false;
  }
}
function Zm(e3, t, n, r) {
  if (t === null || typeof t > "u" || Gm(e3, t, n, r)) return true;
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
function Ae(e3, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e3, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e3) {
  Ce[e3] = new Ae(e3, 0, false, e3, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e3) {
  var t = e3[0];
  Ce[t] = new Ae(t, 1, false, e3[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e3) {
  Ce[e3] = new Ae(e3, 2, false, e3.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e3) {
  Ce[e3] = new Ae(e3, 2, false, e3, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e3) {
  Ce[e3] = new Ae(e3, 3, false, e3.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(e3) {
  Ce[e3] = new Ae(e3, 3, true, e3, null, false, false);
});
["capture", "download"].forEach(function(e3) {
  Ce[e3] = new Ae(e3, 4, false, e3, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(e3) {
  Ce[e3] = new Ae(e3, 6, false, e3, null, false, false);
});
["rowSpan", "start"].forEach(function(e3) {
  Ce[e3] = new Ae(e3, 5, false, e3.toLowerCase(), null, false, false);
});
var Ka = /[\-:]([a-z])/g;
function Xa(e3) {
  return e3[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e3) {
  var t = e3.replace(Ka, Xa);
  Ce[t] = new Ae(t, 1, false, e3, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e3) {
  var t = e3.replace(Ka, Xa);
  Ce[t] = new Ae(t, 1, false, e3, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e3) {
  var t = e3.replace(Ka, Xa);
  Ce[t] = new Ae(t, 1, false, e3, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(e3) {
  Ce[e3] = new Ae(e3, 1, false, e3.toLowerCase(), null, false, false);
});
Ce.xlinkHref = new Ae("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(e3) {
  Ce[e3] = new Ae(e3, 1, false, e3.toLowerCase(), null, true, true);
});
function Qa(e3, t, n, r) {
  var o = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Zm(t, n, o, r) && (n = null), r || o === null ? Qm(t) && (n === null ? e3.removeAttribute(t) : e3.setAttribute(t, "" + n)) : o.mustUseProperty ? e3[o.propertyName] = n === null ? o.type === 3 ? false : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e3.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === true ? "" : "" + n, r ? e3.setAttributeNS(r, t, n) : e3.setAttribute(t, n))));
}
var Qt = Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Vo = Symbol.for("react.element"), Jn = Symbol.for("react.portal"), er = Symbol.for("react.fragment"), Ga = Symbol.for("react.strict_mode"), Ls = Symbol.for("react.profiler"), yd = Symbol.for("react.provider"), vd = Symbol.for("react.context"), Za = Symbol.for("react.forward_ref"), bs = Symbol.for("react.suspense"), js = Symbol.for("react.suspense_list"), qa = Symbol.for("react.memo"), en = Symbol.for("react.lazy"), Sd = Symbol.for("react.offscreen"), vc = Symbol.iterator;
function Ir(e3) {
  return e3 === null || typeof e3 != "object" ? null : (e3 = vc && e3[vc] || e3["@@iterator"], typeof e3 == "function" ? e3 : null);
}
var oe = Object.assign, ns;
function Yr(e3) {
  if (ns === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ns = t && t[1] || "";
  }
  return `
` + ns + e3;
}
var rs = false;
function os(e3, t) {
  if (!e3 || rs) return "";
  rs = true;
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
      Reflect.construct(e3, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e3.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e3();
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
            return e3.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e3.displayName)), a;
          }
        while (1 <= l && 0 <= s);
        break;
      }
    }
  } finally {
    rs = false, Error.prepareStackTrace = n;
  }
  return (e3 = e3 ? e3.displayName || e3.name : "") ? Yr(e3) : "";
}
function qm(e3) {
  switch (e3.tag) {
    case 5:
      return Yr(e3.type);
    case 16:
      return Yr("Lazy");
    case 13:
      return Yr("Suspense");
    case 19:
      return Yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e3 = os(e3.type, false), e3;
    case 11:
      return e3 = os(e3.type.render, false), e3;
    case 1:
      return e3 = os(e3.type, true), e3;
    default:
      return "";
  }
}
function Fs(e3) {
  if (e3 == null) return null;
  if (typeof e3 == "function") return e3.displayName || e3.name || null;
  if (typeof e3 == "string") return e3;
  switch (e3) {
    case er:
      return "Fragment";
    case Jn:
      return "Portal";
    case Ls:
      return "Profiler";
    case Ga:
      return "StrictMode";
    case bs:
      return "Suspense";
    case js:
      return "SuspenseList";
  }
  if (typeof e3 == "object") switch (e3.$$typeof) {
    case vd:
      return (e3.displayName || "Context") + ".Consumer";
    case yd:
      return (e3._context.displayName || "Context") + ".Provider";
    case Za:
      var t = e3.render;
      return e3 = e3.displayName, e3 || (e3 = t.displayName || t.name || "", e3 = e3 !== "" ? "ForwardRef(" + e3 + ")" : "ForwardRef"), e3;
    case qa:
      return t = e3.displayName || null, t !== null ? t : Fs(e3.type) || "Memo";
    case en:
      t = e3._payload, e3 = e3._init;
      try {
        return Fs(e3(t));
      } catch {
      }
  }
  return null;
}
function Jm(e3) {
  var t = e3.type;
  switch (e3.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e3 = t.render, e3 = e3.displayName || e3.name || "", t.displayName || (e3 !== "" ? "ForwardRef(" + e3 + ")" : "ForwardRef");
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
      return Fs(t);
    case 8:
      return t === Ga ? "StrictMode" : "Mode";
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
function mn(e3) {
  switch (typeof e3) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e3;
    case "object":
      return e3;
    default:
      return "";
  }
}
function wd(e3) {
  var t = e3.type;
  return (e3 = e3.nodeName) && e3.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function eg(e3) {
  var t = wd(e3) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e3.constructor.prototype, t), r = "" + e3[t];
  if (!e3.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e3, t, { configurable: true, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e3, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e3._valueTracker = null, delete e3[t];
    } };
  }
}
function Ho(e3) {
  e3._valueTracker || (e3._valueTracker = eg(e3));
}
function xd(e3) {
  if (!e3) return false;
  var t = e3._valueTracker;
  if (!t) return true;
  var n = t.getValue(), r = "";
  return e3 && (r = wd(e3) ? e3.checked ? "true" : "false" : e3.value), e3 = r, e3 !== n ? (t.setValue(e3), true) : false;
}
function _i(e3) {
  if (e3 = e3 || (typeof document < "u" ? document : void 0), typeof e3 > "u") return null;
  try {
    return e3.activeElement || e3.body;
  } catch {
    return e3.body;
  }
}
function Bs(e3, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e3._wrapperState.initialChecked });
}
function Sc(e3, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = mn(t.value != null ? t.value : n), e3._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function kd(e3, t) {
  t = t.checked, t != null && Qa(e3, "checked", t, false);
}
function Us(e3, t) {
  kd(e3, t);
  var n = mn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e3.value === "" || e3.value != n) && (e3.value = "" + n) : e3.value !== "" + n && (e3.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e3.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ws(e3, t.type, n) : t.hasOwnProperty("defaultValue") && Ws(e3, t.type, mn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e3.defaultChecked = !!t.defaultChecked);
}
function wc(e3, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e3._wrapperState.initialValue, n || t === e3.value || (e3.value = t), e3.defaultValue = t;
  }
  n = e3.name, n !== "" && (e3.name = ""), e3.defaultChecked = !!e3._wrapperState.initialChecked, n !== "" && (e3.name = n);
}
function Ws(e3, t, n) {
  (t !== "number" || _i(e3.ownerDocument) !== e3) && (n == null ? e3.defaultValue = "" + e3._wrapperState.initialValue : e3.defaultValue !== "" + n && (e3.defaultValue = "" + n));
}
var Kr = Array.isArray;
function dr(e3, t, n, r) {
  if (e3 = e3.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = true;
    for (n = 0; n < e3.length; n++) o = t.hasOwnProperty("$" + e3[n].value), e3[n].selected !== o && (e3[n].selected = o), o && r && (e3[n].defaultSelected = true);
  } else {
    for (n = "" + mn(n), t = null, o = 0; o < e3.length; o++) {
      if (e3[o].value === n) {
        e3[o].selected = true, r && (e3[o].defaultSelected = true);
        return;
      }
      t !== null || e3[o].disabled || (t = e3[o]);
    }
    t !== null && (t.selected = true);
  }
}
function Vs(e3, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e3._wrapperState.initialValue });
}
function xc(e3, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(_(92));
      if (Kr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e3._wrapperState = { initialValue: mn(n) };
}
function Cd(e3, t) {
  var n = mn(t.value), r = mn(t.defaultValue);
  n != null && (n = "" + n, n !== e3.value && (e3.value = n), t.defaultValue == null && e3.defaultValue !== n && (e3.defaultValue = n)), r != null && (e3.defaultValue = "" + r);
}
function kc(e3) {
  var t = e3.textContent;
  t === e3._wrapperState.initialValue && t !== "" && t !== null && (e3.value = t);
}
function Ed(e3) {
  switch (e3) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hs(e3, t) {
  return e3 == null || e3 === "http://www.w3.org/1999/xhtml" ? Ed(t) : e3 === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e3;
}
var Yo, Pd = function(e3) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e3(t, n, r, o);
    });
  } : e3;
}(function(e3, t) {
  if (e3.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e3) e3.innerHTML = t;
  else {
    for (Yo = Yo || document.createElement("div"), Yo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Yo.firstChild; e3.firstChild; ) e3.removeChild(e3.firstChild);
    for (; t.firstChild; ) e3.appendChild(t.firstChild);
  }
});
function co(e3, t) {
  if (t) {
    var n = e3.firstChild;
    if (n && n === e3.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e3.textContent = t;
}
var qr = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, tg = ["Webkit", "ms", "Moz", "O"];
Object.keys(qr).forEach(function(e3) {
  tg.forEach(function(t) {
    t = t + e3.charAt(0).toUpperCase() + e3.substring(1), qr[t] = qr[e3];
  });
});
function Td(e3, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qr.hasOwnProperty(e3) && qr[e3] ? ("" + t).trim() : t + "px";
}
function _d(e3, t) {
  e3 = e3.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Td(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e3.setProperty(n, o) : e3[n] = o;
  }
}
var ng = oe({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function Ys(e3, t) {
  if (t) {
    if (ng[e3] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e3));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Ks(e3, t) {
  if (e3.indexOf("-") === -1) return typeof t.is == "string";
  switch (e3) {
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
var Xs = null;
function Ja(e3) {
  return e3 = e3.target || e3.srcElement || window, e3.correspondingUseElement && (e3 = e3.correspondingUseElement), e3.nodeType === 3 ? e3.parentNode : e3;
}
var Qs = null, pr = null, hr = null;
function Cc(e3) {
  if (e3 = Io(e3)) {
    if (typeof Qs != "function") throw Error(_(280));
    var t = e3.stateNode;
    t && (t = sl(t), Qs(e3.stateNode, e3.type, t));
  }
}
function Rd(e3) {
  pr ? hr ? hr.push(e3) : hr = [e3] : pr = e3;
}
function $d() {
  if (pr) {
    var e3 = pr, t = hr;
    if (hr = pr = null, Cc(e3), t) for (e3 = 0; e3 < t.length; e3++) Cc(t[e3]);
  }
}
function Nd(e3, t) {
  return e3(t);
}
function Md() {
}
var is = false;
function Od(e3, t, n) {
  if (is) return e3(t, n);
  is = true;
  try {
    return Nd(e3, t, n);
  } finally {
    is = false, (pr !== null || hr !== null) && (Md(), $d());
  }
}
function fo(e3, t) {
  var n = e3.stateNode;
  if (n === null) return null;
  var r = sl(n);
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
      (r = !r.disabled) || (e3 = e3.type, r = !(e3 === "button" || e3 === "input" || e3 === "select" || e3 === "textarea")), e3 = !r;
      break e;
    default:
      e3 = false;
  }
  if (e3) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Gs = false;
if (Vt) try {
  var Ar = {};
  Object.defineProperty(Ar, "passive", { get: function() {
    Gs = true;
  } }), window.addEventListener("test", Ar, Ar), window.removeEventListener("test", Ar, Ar);
} catch {
  Gs = false;
}
function rg(e3, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (m) {
    this.onError(m);
  }
}
var Jr = false, Ri = null, $i = false, Zs = null, og = { onError: function(e3) {
  Jr = true, Ri = e3;
} };
function ig(e3, t, n, r, o, i, l, s, a) {
  Jr = false, Ri = null, rg.apply(og, arguments);
}
function lg(e3, t, n, r, o, i, l, s, a) {
  if (ig.apply(this, arguments), Jr) {
    if (Jr) {
      var u = Ri;
      Jr = false, Ri = null;
    } else throw Error(_(198));
    $i || ($i = true, Zs = u);
  }
}
function jn(e3) {
  var t = e3, n = e3;
  if (e3.alternate) for (; t.return; ) t = t.return;
  else {
    e3 = t;
    do
      t = e3, t.flags & 4098 && (n = t.return), e3 = t.return;
    while (e3);
  }
  return t.tag === 3 ? n : null;
}
function Dd(e3) {
  if (e3.tag === 13) {
    var t = e3.memoizedState;
    if (t === null && (e3 = e3.alternate, e3 !== null && (t = e3.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ec(e3) {
  if (jn(e3) !== e3) throw Error(_(188));
}
function sg(e3) {
  var t = e3.alternate;
  if (!t) {
    if (t = jn(e3), t === null) throw Error(_(188));
    return t !== e3 ? null : e3;
  }
  for (var n = e3, r = t; ; ) {
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
        if (i === n) return Ec(o), e3;
        if (i === r) return Ec(o), t;
        i = i.sibling;
      }
      throw Error(_(188));
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
        if (!l) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e3 : t;
}
function zd(e3) {
  return e3 = sg(e3), e3 !== null ? Id(e3) : null;
}
function Id(e3) {
  if (e3.tag === 5 || e3.tag === 6) return e3;
  for (e3 = e3.child; e3 !== null; ) {
    var t = Id(e3);
    if (t !== null) return t;
    e3 = e3.sibling;
  }
  return null;
}
var Ad = qe.unstable_scheduleCallback, Pc = qe.unstable_cancelCallback, ag = qe.unstable_shouldYield, ug = qe.unstable_requestPaint, ue = qe.unstable_now, cg = qe.unstable_getCurrentPriorityLevel, eu = qe.unstable_ImmediatePriority, Ld = qe.unstable_UserBlockingPriority, Ni = qe.unstable_NormalPriority, fg = qe.unstable_LowPriority, bd = qe.unstable_IdlePriority, rl = null, Nt = null;
function dg(e3) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
    Nt.onCommitFiberRoot(rl, e3, void 0, (e3.current.flags & 128) === 128);
  } catch {
  }
}
var vt = Math.clz32 ? Math.clz32 : mg, pg = Math.log, hg = Math.LN2;
function mg(e3) {
  return e3 >>>= 0, e3 === 0 ? 32 : 31 - (pg(e3) / hg | 0) | 0;
}
var Ko = 64, Xo = 4194304;
function Xr(e3) {
  switch (e3 & -e3) {
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
      return e3 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e3 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e3;
  }
}
function Mi(e3, t) {
  var n = e3.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e3.suspendedLanes, i = e3.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = Xr(s) : (i &= l, i !== 0 && (r = Xr(i)));
  } else l = n & ~o, l !== 0 ? r = Xr(l) : i !== 0 && (r = Xr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e3.entangledLanes, t !== 0) for (e3 = e3.entanglements, t &= r; 0 < t; ) n = 31 - vt(t), o = 1 << n, r |= e3[n], t &= ~o;
  return r;
}
function gg(e3, t) {
  switch (e3) {
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
function yg(e3, t) {
  for (var n = e3.suspendedLanes, r = e3.pingedLanes, o = e3.expirationTimes, i = e3.pendingLanes; 0 < i; ) {
    var l = 31 - vt(i), s = 1 << l, a = o[l];
    a === -1 ? (!(s & n) || s & r) && (o[l] = gg(s, t)) : a <= t && (e3.expiredLanes |= s), i &= ~s;
  }
}
function qs(e3) {
  return e3 = e3.pendingLanes & -1073741825, e3 !== 0 ? e3 : e3 & 1073741824 ? 1073741824 : 0;
}
function jd() {
  var e3 = Ko;
  return Ko <<= 1, !(Ko & 4194240) && (Ko = 64), e3;
}
function ls(e3) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e3);
  return t;
}
function Do(e3, t, n) {
  e3.pendingLanes |= t, t !== 536870912 && (e3.suspendedLanes = 0, e3.pingedLanes = 0), e3 = e3.eventTimes, t = 31 - vt(t), e3[t] = n;
}
function vg(e3, t) {
  var n = e3.pendingLanes & ~t;
  e3.pendingLanes = t, e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.expiredLanes &= t, e3.mutableReadLanes &= t, e3.entangledLanes &= t, t = e3.entanglements;
  var r = e3.eventTimes;
  for (e3 = e3.expirationTimes; 0 < n; ) {
    var o = 31 - vt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e3[o] = -1, n &= ~i;
  }
}
function tu(e3, t) {
  var n = e3.entangledLanes |= t;
  for (e3 = e3.entanglements; n; ) {
    var r = 31 - vt(n), o = 1 << r;
    o & t | e3[r] & t && (e3[r] |= t), n &= ~o;
  }
}
var V = 0;
function Fd(e3) {
  return e3 &= -e3, 1 < e3 ? 4 < e3 ? e3 & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Bd, nu, Ud, Wd, Vd, Js = false, Qo = [], sn = null, an = null, un = null, po = /* @__PURE__ */ new Map(), ho = /* @__PURE__ */ new Map(), nn = [], Sg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Tc(e3, t) {
  switch (e3) {
    case "focusin":
    case "focusout":
      sn = null;
      break;
    case "dragenter":
    case "dragleave":
      an = null;
      break;
    case "mouseover":
    case "mouseout":
      un = null;
      break;
    case "pointerover":
    case "pointerout":
      po.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ho.delete(t.pointerId);
  }
}
function Lr(e3, t, n, r, o, i) {
  return e3 === null || e3.nativeEvent !== i ? (e3 = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Io(t), t !== null && nu(t)), e3) : (e3.eventSystemFlags |= r, t = e3.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e3);
}
function wg(e3, t, n, r, o) {
  switch (t) {
    case "focusin":
      return sn = Lr(sn, e3, t, n, r, o), true;
    case "dragenter":
      return an = Lr(an, e3, t, n, r, o), true;
    case "mouseover":
      return un = Lr(un, e3, t, n, r, o), true;
    case "pointerover":
      var i = o.pointerId;
      return po.set(i, Lr(po.get(i) || null, e3, t, n, r, o)), true;
    case "gotpointercapture":
      return i = o.pointerId, ho.set(i, Lr(ho.get(i) || null, e3, t, n, r, o)), true;
  }
  return false;
}
function Hd(e3) {
  var t = En(e3.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Dd(n), t !== null) {
          e3.blockedOn = t, Vd(e3.priority, function() {
            Ud(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e3.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e3.blockedOn = null;
}
function di(e3) {
  if (e3.blockedOn !== null) return false;
  for (var t = e3.targetContainers; 0 < t.length; ) {
    var n = ea(e3.domEventName, e3.eventSystemFlags, t[0], e3.nativeEvent);
    if (n === null) {
      n = e3.nativeEvent;
      var r = new n.constructor(n.type, n);
      Xs = r, n.target.dispatchEvent(r), Xs = null;
    } else return t = Io(n), t !== null && nu(t), e3.blockedOn = n, false;
    t.shift();
  }
  return true;
}
function _c(e3, t, n) {
  di(e3) && n.delete(t);
}
function xg() {
  Js = false, sn !== null && di(sn) && (sn = null), an !== null && di(an) && (an = null), un !== null && di(un) && (un = null), po.forEach(_c), ho.forEach(_c);
}
function br(e3, t) {
  e3.blockedOn === t && (e3.blockedOn = null, Js || (Js = true, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, xg)));
}
function mo(e3) {
  function t(o) {
    return br(o, e3);
  }
  if (0 < Qo.length) {
    br(Qo[0], e3);
    for (var n = 1; n < Qo.length; n++) {
      var r = Qo[n];
      r.blockedOn === e3 && (r.blockedOn = null);
    }
  }
  for (sn !== null && br(sn, e3), an !== null && br(an, e3), un !== null && br(un, e3), po.forEach(t), ho.forEach(t), n = 0; n < nn.length; n++) r = nn[n], r.blockedOn === e3 && (r.blockedOn = null);
  for (; 0 < nn.length && (n = nn[0], n.blockedOn === null); ) Hd(n), n.blockedOn === null && nn.shift();
}
var mr = Qt.ReactCurrentBatchConfig, Oi = true;
function kg(e3, t, n, r) {
  var o = V, i = mr.transition;
  mr.transition = null;
  try {
    V = 1, ru(e3, t, n, r);
  } finally {
    V = o, mr.transition = i;
  }
}
function Cg(e3, t, n, r) {
  var o = V, i = mr.transition;
  mr.transition = null;
  try {
    V = 4, ru(e3, t, n, r);
  } finally {
    V = o, mr.transition = i;
  }
}
function ru(e3, t, n, r) {
  if (Oi) {
    var o = ea(e3, t, n, r);
    if (o === null) gs(e3, t, r, Di, n), Tc(e3, r);
    else if (wg(o, e3, t, n, r)) r.stopPropagation();
    else if (Tc(e3, r), t & 4 && -1 < Sg.indexOf(e3)) {
      for (; o !== null; ) {
        var i = Io(o);
        if (i !== null && Bd(i), i = ea(e3, t, n, r), i === null && gs(e3, t, r, Di, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else gs(e3, t, r, null, n);
  }
}
var Di = null;
function ea(e3, t, n, r) {
  if (Di = null, e3 = Ja(r), e3 = En(e3), e3 !== null) if (t = jn(e3), t === null) e3 = null;
  else if (n = t.tag, n === 13) {
    if (e3 = Dd(t), e3 !== null) return e3;
    e3 = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e3 = null;
  } else t !== e3 && (e3 = null);
  return Di = e3, null;
}
function Yd(e3) {
  switch (e3) {
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
      switch (cg()) {
        case eu:
          return 1;
        case Ld:
          return 4;
        case Ni:
        case fg:
          return 16;
        case bd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var on = null, ou = null, pi = null;
function Kd() {
  if (pi) return pi;
  var e3, t = ou, n = t.length, r, o = "value" in on ? on.value : on.textContent, i = o.length;
  for (e3 = 0; e3 < n && t[e3] === o[e3]; e3++) ;
  var l = n - e3;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return pi = o.slice(e3, 1 < r ? 1 - r : void 0);
}
function hi(e3) {
  var t = e3.keyCode;
  return "charCode" in e3 ? (e3 = e3.charCode, e3 === 0 && t === 13 && (e3 = 13)) : e3 = t, e3 === 10 && (e3 = 13), 32 <= e3 || e3 === 13 ? e3 : 0;
}
function Go() {
  return true;
}
function Rc() {
  return false;
}
function et(e3) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e3) e3.hasOwnProperty(s) && (n = e3[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Go : Rc, this.isPropagationStopped = Rc, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Go);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Go);
  }, persist: function() {
  }, isPersistent: Go }), t;
}
var $r = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e3) {
  return e3.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, iu = et($r), zo = oe({}, $r, { view: 0, detail: 0 }), Eg = et(zo), ss, as, jr, ol = oe({}, zo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: lu, button: 0, buttons: 0, relatedTarget: function(e3) {
  return e3.relatedTarget === void 0 ? e3.fromElement === e3.srcElement ? e3.toElement : e3.fromElement : e3.relatedTarget;
}, movementX: function(e3) {
  return "movementX" in e3 ? e3.movementX : (e3 !== jr && (jr && e3.type === "mousemove" ? (ss = e3.screenX - jr.screenX, as = e3.screenY - jr.screenY) : as = ss = 0, jr = e3), ss);
}, movementY: function(e3) {
  return "movementY" in e3 ? e3.movementY : as;
} }), $c = et(ol), Pg = oe({}, ol, { dataTransfer: 0 }), Tg = et(Pg), _g = oe({}, zo, { relatedTarget: 0 }), us = et(_g), Rg = oe({}, $r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $g = et(Rg), Ng = oe({}, $r, { clipboardData: function(e3) {
  return "clipboardData" in e3 ? e3.clipboardData : window.clipboardData;
} }), Mg = et(Ng), Og = oe({}, $r, { data: 0 }), Nc = et(Og), Dg = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, zg = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Ig = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ag(e3) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e3) : (e3 = Ig[e3]) ? !!t[e3] : false;
}
function lu() {
  return Ag;
}
var Lg = oe({}, zo, { key: function(e3) {
  if (e3.key) {
    var t = Dg[e3.key] || e3.key;
    if (t !== "Unidentified") return t;
  }
  return e3.type === "keypress" ? (e3 = hi(e3), e3 === 13 ? "Enter" : String.fromCharCode(e3)) : e3.type === "keydown" || e3.type === "keyup" ? zg[e3.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: lu, charCode: function(e3) {
  return e3.type === "keypress" ? hi(e3) : 0;
}, keyCode: function(e3) {
  return e3.type === "keydown" || e3.type === "keyup" ? e3.keyCode : 0;
}, which: function(e3) {
  return e3.type === "keypress" ? hi(e3) : e3.type === "keydown" || e3.type === "keyup" ? e3.keyCode : 0;
} }), bg = et(Lg), jg = oe({}, ol, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Mc = et(jg), Fg = oe({}, zo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: lu }), Bg = et(Fg), Ug = oe({}, $r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wg = et(Ug), Vg = oe({}, ol, { deltaX: function(e3) {
  return "deltaX" in e3 ? e3.deltaX : "wheelDeltaX" in e3 ? -e3.wheelDeltaX : 0;
}, deltaY: function(e3) {
  return "deltaY" in e3 ? e3.deltaY : "wheelDeltaY" in e3 ? -e3.wheelDeltaY : "wheelDelta" in e3 ? -e3.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), Hg = et(Vg), Yg = [9, 13, 27, 32], su = Vt && "CompositionEvent" in window, eo = null;
Vt && "documentMode" in document && (eo = document.documentMode);
var Kg = Vt && "TextEvent" in window && !eo, Xd = Vt && (!su || eo && 8 < eo && 11 >= eo), Oc = " ", Dc = false;
function Qd(e3, t) {
  switch (e3) {
    case "keyup":
      return Yg.indexOf(t.keyCode) !== -1;
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
function Gd(e3) {
  return e3 = e3.detail, typeof e3 == "object" && "data" in e3 ? e3.data : null;
}
var tr = false;
function Xg(e3, t) {
  switch (e3) {
    case "compositionend":
      return Gd(t);
    case "keypress":
      return t.which !== 32 ? null : (Dc = true, Oc);
    case "textInput":
      return e3 = t.data, e3 === Oc && Dc ? null : e3;
    default:
      return null;
  }
}
function Qg(e3, t) {
  if (tr) return e3 === "compositionend" || !su && Qd(e3, t) ? (e3 = Kd(), pi = ou = on = null, tr = false, e3) : null;
  switch (e3) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Xd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gg = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function zc(e3) {
  var t = e3 && e3.nodeName && e3.nodeName.toLowerCase();
  return t === "input" ? !!Gg[e3.type] : t === "textarea";
}
function Zd(e3, t, n, r) {
  Rd(r), t = zi(t, "onChange"), 0 < t.length && (n = new iu("onChange", "change", null, n, r), e3.push({ event: n, listeners: t }));
}
var to = null, go = null;
function Zg(e3) {
  ap(e3, 0);
}
function il(e3) {
  var t = or(e3);
  if (xd(t)) return e3;
}
function qg(e3, t) {
  if (e3 === "change") return t;
}
var qd = false;
if (Vt) {
  var cs;
  if (Vt) {
    var fs = "oninput" in document;
    if (!fs) {
      var Ic = document.createElement("div");
      Ic.setAttribute("oninput", "return;"), fs = typeof Ic.oninput == "function";
    }
    cs = fs;
  } else cs = false;
  qd = cs && (!document.documentMode || 9 < document.documentMode);
}
function Ac() {
  to && (to.detachEvent("onpropertychange", Jd), go = to = null);
}
function Jd(e3) {
  if (e3.propertyName === "value" && il(go)) {
    var t = [];
    Zd(t, go, e3, Ja(e3)), Od(Zg, t);
  }
}
function Jg(e3, t, n) {
  e3 === "focusin" ? (Ac(), to = t, go = n, to.attachEvent("onpropertychange", Jd)) : e3 === "focusout" && Ac();
}
function ey(e3) {
  if (e3 === "selectionchange" || e3 === "keyup" || e3 === "keydown") return il(go);
}
function ty(e3, t) {
  if (e3 === "click") return il(t);
}
function ny(e3, t) {
  if (e3 === "input" || e3 === "change") return il(t);
}
function ry(e3, t) {
  return e3 === t && (e3 !== 0 || 1 / e3 === 1 / t) || e3 !== e3 && t !== t;
}
var wt = typeof Object.is == "function" ? Object.is : ry;
function yo(e3, t) {
  if (wt(e3, t)) return true;
  if (typeof e3 != "object" || e3 === null || typeof t != "object" || t === null) return false;
  var n = Object.keys(e3), r = Object.keys(t);
  if (n.length !== r.length) return false;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!As.call(t, o) || !wt(e3[o], t[o])) return false;
  }
  return true;
}
function Lc(e3) {
  for (; e3 && e3.firstChild; ) e3 = e3.firstChild;
  return e3;
}
function bc(e3, t) {
  var n = Lc(e3);
  e3 = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e3 + n.textContent.length, e3 <= t && r >= t) return { node: n, offset: t - e3 };
      e3 = r;
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
    n = Lc(n);
  }
}
function ep(e3, t) {
  return e3 && t ? e3 === t ? true : e3 && e3.nodeType === 3 ? false : t && t.nodeType === 3 ? ep(e3, t.parentNode) : "contains" in e3 ? e3.contains(t) : e3.compareDocumentPosition ? !!(e3.compareDocumentPosition(t) & 16) : false : false;
}
function tp() {
  for (var e3 = window, t = _i(); t instanceof e3.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = false;
    }
    if (n) e3 = t.contentWindow;
    else break;
    t = _i(e3.document);
  }
  return t;
}
function au(e3) {
  var t = e3 && e3.nodeName && e3.nodeName.toLowerCase();
  return t && (t === "input" && (e3.type === "text" || e3.type === "search" || e3.type === "tel" || e3.type === "url" || e3.type === "password") || t === "textarea" || e3.contentEditable === "true");
}
function oy(e3) {
  var t = tp(), n = e3.focusedElem, r = e3.selectionRange;
  if (t !== n && n && n.ownerDocument && ep(n.ownerDocument.documentElement, n)) {
    if (r !== null && au(n)) {
      if (t = r.start, e3 = r.end, e3 === void 0 && (e3 = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e3, n.value.length);
      else if (e3 = (t = n.ownerDocument || document) && t.defaultView || window, e3.getSelection) {
        e3 = e3.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e3.extend && i > r && (o = r, r = i, i = o), o = bc(n, i);
        var l = bc(n, r);
        o && l && (e3.rangeCount !== 1 || e3.anchorNode !== o.node || e3.anchorOffset !== o.offset || e3.focusNode !== l.node || e3.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e3.removeAllRanges(), i > r ? (e3.addRange(t), e3.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e3.addRange(t)));
      }
    }
    for (t = [], e3 = n; e3 = e3.parentNode; ) e3.nodeType === 1 && t.push({ element: e3, left: e3.scrollLeft, top: e3.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e3 = t[n], e3.element.scrollLeft = e3.left, e3.element.scrollTop = e3.top;
  }
}
var iy = Vt && "documentMode" in document && 11 >= document.documentMode, nr = null, ta = null, no = null, na = false;
function jc(e3, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  na || nr == null || nr !== _i(r) || (r = nr, "selectionStart" in r && au(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), no && yo(no, r) || (no = r, r = zi(ta, "onSelect"), 0 < r.length && (t = new iu("onSelect", "select", null, t, n), e3.push({ event: t, listeners: r }), t.target = nr)));
}
function Zo(e3, t) {
  var n = {};
  return n[e3.toLowerCase()] = t.toLowerCase(), n["Webkit" + e3] = "webkit" + t, n["Moz" + e3] = "moz" + t, n;
}
var rr = { animationend: Zo("Animation", "AnimationEnd"), animationiteration: Zo("Animation", "AnimationIteration"), animationstart: Zo("Animation", "AnimationStart"), transitionend: Zo("Transition", "TransitionEnd") }, ds = {}, np = {};
Vt && (np = document.createElement("div").style, "AnimationEvent" in window || (delete rr.animationend.animation, delete rr.animationiteration.animation, delete rr.animationstart.animation), "TransitionEvent" in window || delete rr.transitionend.transition);
function ll(e3) {
  if (ds[e3]) return ds[e3];
  if (!rr[e3]) return e3;
  var t = rr[e3], n;
  for (n in t) if (t.hasOwnProperty(n) && n in np) return ds[e3] = t[n];
  return e3;
}
var rp = ll("animationend"), op = ll("animationiteration"), ip = ll("animationstart"), lp = ll("transitionend"), sp = /* @__PURE__ */ new Map(), Fc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function vn(e3, t) {
  sp.set(e3, t), bn(t, [e3]);
}
for (var ps = 0; ps < Fc.length; ps++) {
  var hs = Fc[ps], ly = hs.toLowerCase(), sy = hs[0].toUpperCase() + hs.slice(1);
  vn(ly, "on" + sy);
}
vn(rp, "onAnimationEnd");
vn(op, "onAnimationIteration");
vn(ip, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(lp, "onTransitionEnd");
wr("onMouseEnter", ["mouseout", "mouseover"]);
wr("onMouseLeave", ["mouseout", "mouseover"]);
wr("onPointerEnter", ["pointerout", "pointerover"]);
wr("onPointerLeave", ["pointerout", "pointerover"]);
bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
bn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Qr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));
function Bc(e3, t, n) {
  var r = e3.type || "unknown-event";
  e3.currentTarget = n, lg(r, t, void 0, e3), e3.currentTarget = null;
}
function ap(e3, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e3.length; n++) {
    var r = e3[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], a = s.instance, u = s.currentTarget;
        if (s = s.listener, a !== i && o.isPropagationStopped()) break e;
        Bc(o, s, u), i = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped()) break e;
        Bc(o, s, u), i = a;
      }
    }
  }
  if ($i) throw e3 = Zs, $i = false, Zs = null, e3;
}
function Z(e3, t) {
  var n = t[sa];
  n === void 0 && (n = t[sa] = /* @__PURE__ */ new Set());
  var r = e3 + "__bubble";
  n.has(r) || (up(t, e3, 2, false), n.add(r));
}
function ms(e3, t, n) {
  var r = 0;
  t && (r |= 4), up(n, e3, r, t);
}
var qo = "_reactListening" + Math.random().toString(36).slice(2);
function vo(e3) {
  if (!e3[qo]) {
    e3[qo] = true, gd.forEach(function(n) {
      n !== "selectionchange" && (ay.has(n) || ms(n, false, e3), ms(n, true, e3));
    });
    var t = e3.nodeType === 9 ? e3 : e3.ownerDocument;
    t === null || t[qo] || (t[qo] = true, ms("selectionchange", false, t));
  }
}
function up(e3, t, n, r) {
  switch (Yd(t)) {
    case 1:
      var o = kg;
      break;
    case 4:
      o = Cg;
      break;
    default:
      o = ru;
  }
  n = o.bind(null, t, n, e3), o = void 0, !Gs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), r ? o !== void 0 ? e3.addEventListener(t, n, { capture: true, passive: o }) : e3.addEventListener(t, n, true) : o !== void 0 ? e3.addEventListener(t, n, { passive: o }) : e3.addEventListener(t, n, false);
}
function gs(e3, t, n, r, o) {
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
        if (l = En(s), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = i = l;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Od(function() {
    var u = i, m = Ja(n), p = [];
    e: {
      var h = sp.get(e3);
      if (h !== void 0) {
        var w = iu, v = e3;
        switch (e3) {
          case "keypress":
            if (hi(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = bg;
            break;
          case "focusin":
            v = "focus", w = us;
            break;
          case "focusout":
            v = "blur", w = us;
            break;
          case "beforeblur":
          case "afterblur":
            w = us;
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
            w = $c;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Tg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Bg;
            break;
          case rp:
          case op:
          case ip:
            w = $g;
            break;
          case lp:
            w = Wg;
            break;
          case "scroll":
            w = Eg;
            break;
          case "wheel":
            w = Hg;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Mg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Mc;
        }
        var S = (t & 4) !== 0, P = !S && e3 === "scroll", d = S ? h !== null ? h + "Capture" : null : h;
        S = [];
        for (var f = u, g; f !== null; ) {
          g = f;
          var y = g.stateNode;
          if (g.tag === 5 && y !== null && (g = y, d !== null && (y = fo(f, d), y != null && S.push(So(f, y, g)))), P) break;
          f = f.return;
        }
        0 < S.length && (h = new w(h, v, null, n, m), p.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e3 === "mouseover" || e3 === "pointerover", w = e3 === "mouseout" || e3 === "pointerout", h && n !== Xs && (v = n.relatedTarget || n.fromElement) && (En(v) || v[Ht])) break e;
        if ((w || h) && (h = m.window === m ? m : (h = m.ownerDocument) ? h.defaultView || h.parentWindow : window, w ? (v = n.relatedTarget || n.toElement, w = u, v = v ? En(v) : null, v !== null && (P = jn(v), v !== P || v.tag !== 5 && v.tag !== 6) && (v = null)) : (w = null, v = u), w !== v)) {
          if (S = $c, y = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e3 === "pointerout" || e3 === "pointerover") && (S = Mc, y = "onPointerLeave", d = "onPointerEnter", f = "pointer"), P = w == null ? h : or(w), g = v == null ? h : or(v), h = new S(y, f + "leave", w, n, m), h.target = P, h.relatedTarget = g, y = null, En(m) === u && (S = new S(d, f + "enter", v, n, m), S.target = g, S.relatedTarget = P, y = S), P = y, w && v) t: {
            for (S = w, d = v, f = 0, g = S; g; g = Yn(g)) f++;
            for (g = 0, y = d; y; y = Yn(y)) g++;
            for (; 0 < f - g; ) S = Yn(S), f--;
            for (; 0 < g - f; ) d = Yn(d), g--;
            for (; f--; ) {
              if (S === d || d !== null && S === d.alternate) break t;
              S = Yn(S), d = Yn(d);
            }
            S = null;
          }
          else S = null;
          w !== null && Uc(p, h, w, S, false), v !== null && P !== null && Uc(p, P, v, S, true);
        }
      }
      e: {
        if (h = u ? or(u) : window, w = h.nodeName && h.nodeName.toLowerCase(), w === "select" || w === "input" && h.type === "file") var x = qg;
        else if (zc(h)) if (qd) x = ny;
        else {
          x = ey;
          var k = Jg;
        }
        else (w = h.nodeName) && w.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (x = ty);
        if (x && (x = x(e3, u))) {
          Zd(p, x, n, m);
          break e;
        }
        k && k(e3, h, u), e3 === "focusout" && (k = h._wrapperState) && k.controlled && h.type === "number" && Ws(h, "number", h.value);
      }
      switch (k = u ? or(u) : window, e3) {
        case "focusin":
          (zc(k) || k.contentEditable === "true") && (nr = k, ta = u, no = null);
          break;
        case "focusout":
          no = ta = nr = null;
          break;
        case "mousedown":
          na = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          na = false, jc(p, n, m);
          break;
        case "selectionchange":
          if (iy) break;
        case "keydown":
        case "keyup":
          jc(p, n, m);
      }
      var E;
      if (su) e: {
        switch (e3) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else tr ? Qd(e3, n) && (T = "onCompositionEnd") : e3 === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Xd && n.locale !== "ko" && (tr || T !== "onCompositionStart" ? T === "onCompositionEnd" && tr && (E = Kd()) : (on = m, ou = "value" in on ? on.value : on.textContent, tr = true)), k = zi(u, T), 0 < k.length && (T = new Nc(T, e3, null, n, m), p.push({ event: T, listeners: k }), E ? T.data = E : (E = Gd(n), E !== null && (T.data = E)))), (E = Kg ? Xg(e3, n) : Qg(e3, n)) && (u = zi(u, "onBeforeInput"), 0 < u.length && (m = new Nc("onBeforeInput", "beforeinput", null, n, m), p.push({ event: m, listeners: u }), m.data = E));
    }
    ap(p, t);
  });
}
function So(e3, t, n) {
  return { instance: e3, listener: t, currentTarget: n };
}
function zi(e3, t) {
  for (var n = t + "Capture", r = []; e3 !== null; ) {
    var o = e3, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = fo(e3, n), i != null && r.unshift(So(e3, i, o)), i = fo(e3, t), i != null && r.push(So(e3, i, o))), e3 = e3.return;
  }
  return r;
}
function Yn(e3) {
  if (e3 === null) return null;
  do
    e3 = e3.return;
  while (e3 && e3.tag !== 5);
  return e3 || null;
}
function Uc(e3, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, o ? (a = fo(n, i), a != null && l.unshift(So(n, a, s))) : o || (a = fo(n, i), a != null && l.push(So(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e3.push({ event: t, listeners: l });
}
var uy = /\r\n?/g, cy = /\u0000|\uFFFD/g;
function Wc(e3) {
  return (typeof e3 == "string" ? e3 : "" + e3).replace(uy, `
`).replace(cy, "");
}
function Jo(e3, t, n) {
  if (t = Wc(t), Wc(e3) !== t && n) throw Error(_(425));
}
function Ii() {
}
var ra = null, oa = null;
function ia(e3, t) {
  return e3 === "textarea" || e3 === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var la = typeof setTimeout == "function" ? setTimeout : void 0, fy = typeof clearTimeout == "function" ? clearTimeout : void 0, Vc = typeof Promise == "function" ? Promise : void 0, dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vc < "u" ? function(e3) {
  return Vc.resolve(null).then(e3).catch(py);
} : la;
function py(e3) {
  setTimeout(function() {
    throw e3;
  });
}
function ys(e3, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e3.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e3.removeChild(o), mo(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  mo(t);
}
function cn(e3) {
  for (; e3 != null; e3 = e3.nextSibling) {
    var t = e3.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e3.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e3;
}
function Hc(e3) {
  e3 = e3.previousSibling;
  for (var t = 0; e3; ) {
    if (e3.nodeType === 8) {
      var n = e3.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e3;
        t--;
      } else n === "/$" && t++;
    }
    e3 = e3.previousSibling;
  }
  return null;
}
var Nr = Math.random().toString(36).slice(2), _t = "__reactFiber$" + Nr, wo = "__reactProps$" + Nr, Ht = "__reactContainer$" + Nr, sa = "__reactEvents$" + Nr, hy = "__reactListeners$" + Nr, my = "__reactHandles$" + Nr;
function En(e3) {
  var t = e3[_t];
  if (t) return t;
  for (var n = e3.parentNode; n; ) {
    if (t = n[Ht] || n[_t]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e3 = Hc(e3); e3 !== null; ) {
        if (n = e3[_t]) return n;
        e3 = Hc(e3);
      }
      return t;
    }
    e3 = n, n = e3.parentNode;
  }
  return null;
}
function Io(e3) {
  return e3 = e3[_t] || e3[Ht], !e3 || e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 13 && e3.tag !== 3 ? null : e3;
}
function or(e3) {
  if (e3.tag === 5 || e3.tag === 6) return e3.stateNode;
  throw Error(_(33));
}
function sl(e3) {
  return e3[wo] || null;
}
var aa = [], ir = -1;
function Sn(e3) {
  return { current: e3 };
}
function q(e3) {
  0 > ir || (e3.current = aa[ir], aa[ir] = null, ir--);
}
function G(e3, t) {
  ir++, aa[ir] = e3.current, e3.current = t;
}
var gn = {}, Ne = Sn(gn), je = Sn(false), Nn = gn;
function xr(e3, t) {
  var n = e3.type.contextTypes;
  if (!n) return gn;
  var r = e3.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e3 = e3.stateNode, e3.__reactInternalMemoizedUnmaskedChildContext = t, e3.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Fe(e3) {
  return e3 = e3.childContextTypes, e3 != null;
}
function Ai() {
  q(je), q(Ne);
}
function Yc(e3, t, n) {
  if (Ne.current !== gn) throw Error(_(168));
  G(Ne, t), G(je, n);
}
function cp(e3, t, n) {
  var r = e3.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, Jm(e3) || "Unknown", o));
  return oe({}, n, r);
}
function Li(e3) {
  return e3 = (e3 = e3.stateNode) && e3.__reactInternalMemoizedMergedChildContext || gn, Nn = Ne.current, G(Ne, e3), G(je, je.current), true;
}
function Kc(e3, t, n) {
  var r = e3.stateNode;
  if (!r) throw Error(_(169));
  n ? (e3 = cp(e3, t, Nn), r.__reactInternalMemoizedMergedChildContext = e3, q(je), q(Ne), G(Ne, e3)) : q(je), G(je, n);
}
var Ft = null, al = false, vs = false;
function fp(e3) {
  Ft === null ? Ft = [e3] : Ft.push(e3);
}
function gy(e3) {
  al = true, fp(e3);
}
function wn() {
  if (!vs && Ft !== null) {
    vs = true;
    var e3 = 0, t = V;
    try {
      var n = Ft;
      for (V = 1; e3 < n.length; e3++) {
        var r = n[e3];
        do
          r = r(true);
        while (r !== null);
      }
      Ft = null, al = false;
    } catch (o) {
      throw Ft !== null && (Ft = Ft.slice(e3 + 1)), Ad(eu, wn), o;
    } finally {
      V = t, vs = false;
    }
  }
  return null;
}
var lr = [], sr = 0, bi = null, ji = 0, ot = [], it = 0, Mn = null, Bt = 1, Ut = "";
function kn(e3, t) {
  lr[sr++] = ji, lr[sr++] = bi, bi = e3, ji = t;
}
function dp(e3, t, n) {
  ot[it++] = Bt, ot[it++] = Ut, ot[it++] = Mn, Mn = e3;
  var r = Bt;
  e3 = Ut;
  var o = 32 - vt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - vt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Bt = 1 << 32 - vt(t) + o | n << o | r, Ut = i + e3;
  } else Bt = 1 << i | n << o | r, Ut = e3;
}
function uu(e3) {
  e3.return !== null && (kn(e3, 1), dp(e3, 1, 0));
}
function cu(e3) {
  for (; e3 === bi; ) bi = lr[--sr], lr[sr] = null, ji = lr[--sr], lr[sr] = null;
  for (; e3 === Mn; ) Mn = ot[--it], ot[it] = null, Ut = ot[--it], ot[it] = null, Bt = ot[--it], ot[it] = null;
}
var Xe = null, Ke = null, ee = false, yt = null;
function pp(e3, t) {
  var n = st(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e3, t = e3.deletions, t === null ? (e3.deletions = [n], e3.flags |= 16) : t.push(n);
}
function Xc(e3, t) {
  switch (e3.tag) {
    case 5:
      var n = e3.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e3.stateNode = t, Xe = e3, Ke = cn(t.firstChild), true) : false;
    case 6:
      return t = e3.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e3.stateNode = t, Xe = e3, Ke = null, true) : false;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mn !== null ? { id: Bt, overflow: Ut } : null, e3.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = st(18, null, null, 0), n.stateNode = t, n.return = e3, e3.child = n, Xe = e3, Ke = null, true) : false;
    default:
      return false;
  }
}
function ua(e3) {
  return (e3.mode & 1) !== 0 && (e3.flags & 128) === 0;
}
function ca(e3) {
  if (ee) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!Xc(e3, t)) {
        if (ua(e3)) throw Error(_(418));
        t = cn(n.nextSibling);
        var r = Xe;
        t && Xc(e3, t) ? pp(r, n) : (e3.flags = e3.flags & -4097 | 2, ee = false, Xe = e3);
      }
    } else {
      if (ua(e3)) throw Error(_(418));
      e3.flags = e3.flags & -4097 | 2, ee = false, Xe = e3;
    }
  }
}
function Qc(e3) {
  for (e3 = e3.return; e3 !== null && e3.tag !== 5 && e3.tag !== 3 && e3.tag !== 13; ) e3 = e3.return;
  Xe = e3;
}
function ei(e3) {
  if (e3 !== Xe) return false;
  if (!ee) return Qc(e3), ee = true, false;
  var t;
  if ((t = e3.tag !== 3) && !(t = e3.tag !== 5) && (t = e3.type, t = t !== "head" && t !== "body" && !ia(e3.type, e3.memoizedProps)), t && (t = Ke)) {
    if (ua(e3)) throw hp(), Error(_(418));
    for (; t; ) pp(e3, t), t = cn(t.nextSibling);
  }
  if (Qc(e3), e3.tag === 13) {
    if (e3 = e3.memoizedState, e3 = e3 !== null ? e3.dehydrated : null, !e3) throw Error(_(317));
    e: {
      for (e3 = e3.nextSibling, t = 0; e3; ) {
        if (e3.nodeType === 8) {
          var n = e3.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = cn(e3.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e3 = e3.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Xe ? cn(e3.stateNode.nextSibling) : null;
  return true;
}
function hp() {
  for (var e3 = Ke; e3; ) e3 = cn(e3.nextSibling);
}
function kr() {
  Ke = Xe = null, ee = false;
}
function fu(e3) {
  yt === null ? yt = [e3] : yt.push(e3);
}
var yy = Qt.ReactCurrentBatchConfig;
function Fr(e3, t, n) {
  if (e3 = n.ref, e3 !== null && typeof e3 != "function" && typeof e3 != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e3));
      var o = r, i = "" + e3;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e3 != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e3));
  }
  return e3;
}
function ti(e3, t) {
  throw e3 = Object.prototype.toString.call(t), Error(_(31, e3 === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e3));
}
function Gc(e3) {
  var t = e3._init;
  return t(e3._payload);
}
function mp(e3) {
  function t(d, f) {
    if (e3) {
      var g = d.deletions;
      g === null ? (d.deletions = [f], d.flags |= 16) : g.push(f);
    }
  }
  function n(d, f) {
    if (!e3) return null;
    for (; f !== null; ) t(d, f), f = f.sibling;
    return null;
  }
  function r(d, f) {
    for (d = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? d.set(f.key, f) : d.set(f.index, f), f = f.sibling;
    return d;
  }
  function o(d, f) {
    return d = hn(d, f), d.index = 0, d.sibling = null, d;
  }
  function i(d, f, g) {
    return d.index = g, e3 ? (g = d.alternate, g !== null ? (g = g.index, g < f ? (d.flags |= 2, f) : g) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function l(d) {
    return e3 && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, f, g, y) {
    return f === null || f.tag !== 6 ? (f = Ps(g, d.mode, y), f.return = d, f) : (f = o(f, g), f.return = d, f);
  }
  function a(d, f, g, y) {
    var x = g.type;
    return x === er ? m(d, f, g.props.children, y, g.key) : f !== null && (f.elementType === x || typeof x == "object" && x !== null && x.$$typeof === en && Gc(x) === f.type) ? (y = o(f, g.props), y.ref = Fr(d, f, g), y.return = d, y) : (y = xi(g.type, g.key, g.props, null, d.mode, y), y.ref = Fr(d, f, g), y.return = d, y);
  }
  function u(d, f, g, y) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== g.containerInfo || f.stateNode.implementation !== g.implementation ? (f = Ts(g, d.mode, y), f.return = d, f) : (f = o(f, g.children || []), f.return = d, f);
  }
  function m(d, f, g, y, x) {
    return f === null || f.tag !== 7 ? (f = $n(g, d.mode, y, x), f.return = d, f) : (f = o(f, g), f.return = d, f);
  }
  function p(d, f, g) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Ps("" + f, d.mode, g), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Vo:
          return g = xi(f.type, f.key, f.props, null, d.mode, g), g.ref = Fr(d, null, f), g.return = d, g;
        case Jn:
          return f = Ts(f, d.mode, g), f.return = d, f;
        case en:
          var y = f._init;
          return p(d, y(f._payload), g);
      }
      if (Kr(f) || Ir(f)) return f = $n(f, d.mode, g, null), f.return = d, f;
      ti(d, f);
    }
    return null;
  }
  function h(d, f, g, y) {
    var x = f !== null ? f.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return x !== null ? null : s(d, f, "" + g, y);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Vo:
          return g.key === x ? a(d, f, g, y) : null;
        case Jn:
          return g.key === x ? u(d, f, g, y) : null;
        case en:
          return x = g._init, h(d, f, x(g._payload), y);
      }
      if (Kr(g) || Ir(g)) return x !== null ? null : m(d, f, g, y, null);
      ti(d, g);
    }
    return null;
  }
  function w(d, f, g, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return d = d.get(g) || null, s(f, d, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Vo:
          return d = d.get(y.key === null ? g : y.key) || null, a(f, d, y, x);
        case Jn:
          return d = d.get(y.key === null ? g : y.key) || null, u(f, d, y, x);
        case en:
          var k = y._init;
          return w(d, f, g, k(y._payload), x);
      }
      if (Kr(y) || Ir(y)) return d = d.get(g) || null, m(f, d, y, x, null);
      ti(f, y);
    }
    return null;
  }
  function v(d, f, g, y) {
    for (var x = null, k = null, E = f, T = f = 0, D = null; E !== null && T < g.length; T++) {
      E.index > T ? (D = E, E = null) : D = E.sibling;
      var c = h(d, E, g[T], y);
      if (c === null) {
        E === null && (E = D);
        break;
      }
      e3 && E && c.alternate === null && t(d, E), f = i(c, f, T), k === null ? x = c : k.sibling = c, k = c, E = D;
    }
    if (T === g.length) return n(d, E), ee && kn(d, T), x;
    if (E === null) {
      for (; T < g.length; T++) E = p(d, g[T], y), E !== null && (f = i(E, f, T), k === null ? x = E : k.sibling = E, k = E);
      return ee && kn(d, T), x;
    }
    for (E = r(d, E); T < g.length; T++) D = w(E, d, T, g[T], y), D !== null && (e3 && D.alternate !== null && E.delete(D.key === null ? T : D.key), f = i(D, f, T), k === null ? x = D : k.sibling = D, k = D);
    return e3 && E.forEach(function($) {
      return t(d, $);
    }), ee && kn(d, T), x;
  }
  function S(d, f, g, y) {
    var x = Ir(g);
    if (typeof x != "function") throw Error(_(150));
    if (g = x.call(g), g == null) throw Error(_(151));
    for (var k = x = null, E = f, T = f = 0, D = null, c = g.next(); E !== null && !c.done; T++, c = g.next()) {
      E.index > T ? (D = E, E = null) : D = E.sibling;
      var $ = h(d, E, c.value, y);
      if ($ === null) {
        E === null && (E = D);
        break;
      }
      e3 && E && $.alternate === null && t(d, E), f = i($, f, T), k === null ? x = $ : k.sibling = $, k = $, E = D;
    }
    if (c.done) return n(d, E), ee && kn(d, T), x;
    if (E === null) {
      for (; !c.done; T++, c = g.next()) c = p(d, c.value, y), c !== null && (f = i(c, f, T), k === null ? x = c : k.sibling = c, k = c);
      return ee && kn(d, T), x;
    }
    for (E = r(d, E); !c.done; T++, c = g.next()) c = w(E, d, T, c.value, y), c !== null && (e3 && c.alternate !== null && E.delete(c.key === null ? T : c.key), f = i(c, f, T), k === null ? x = c : k.sibling = c, k = c);
    return e3 && E.forEach(function(I) {
      return t(d, I);
    }), ee && kn(d, T), x;
  }
  function P(d, f, g, y) {
    if (typeof g == "object" && g !== null && g.type === er && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Vo:
          e: {
            for (var x = g.key, k = f; k !== null; ) {
              if (k.key === x) {
                if (x = g.type, x === er) {
                  if (k.tag === 7) {
                    n(d, k.sibling), f = o(k, g.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (k.elementType === x || typeof x == "object" && x !== null && x.$$typeof === en && Gc(x) === k.type) {
                  n(d, k.sibling), f = o(k, g.props), f.ref = Fr(d, k, g), f.return = d, d = f;
                  break e;
                }
                n(d, k);
                break;
              } else t(d, k);
              k = k.sibling;
            }
            g.type === er ? (f = $n(g.props.children, d.mode, y, g.key), f.return = d, d = f) : (y = xi(g.type, g.key, g.props, null, d.mode, y), y.ref = Fr(d, f, g), y.return = d, d = y);
          }
          return l(d);
        case Jn:
          e: {
            for (k = g.key; f !== null; ) {
              if (f.key === k) if (f.tag === 4 && f.stateNode.containerInfo === g.containerInfo && f.stateNode.implementation === g.implementation) {
                n(d, f.sibling), f = o(f, g.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = Ts(g, d.mode, y), f.return = d, d = f;
          }
          return l(d);
        case en:
          return k = g._init, P(d, f, k(g._payload), y);
      }
      if (Kr(g)) return v(d, f, g, y);
      if (Ir(g)) return S(d, f, g, y);
      ti(d, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, f !== null && f.tag === 6 ? (n(d, f.sibling), f = o(f, g), f.return = d, d = f) : (n(d, f), f = Ps(g, d.mode, y), f.return = d, d = f), l(d)) : n(d, f);
  }
  return P;
}
var Cr = mp(true), gp = mp(false), Fi = Sn(null), Bi = null, ar = null, du = null;
function pu() {
  du = ar = Bi = null;
}
function hu(e3) {
  var t = Fi.current;
  q(Fi), e3._currentValue = t;
}
function fa(e3, t, n) {
  for (; e3 !== null; ) {
    var r = e3.alternate;
    if ((e3.childLanes & t) !== t ? (e3.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e3 === n) break;
    e3 = e3.return;
  }
}
function gr(e3, t) {
  Bi = e3, du = ar = null, e3 = e3.dependencies, e3 !== null && e3.firstContext !== null && (e3.lanes & t && (be = true), e3.firstContext = null);
}
function ut(e3) {
  var t = e3._currentValue;
  if (du !== e3) if (e3 = { context: e3, memoizedValue: t, next: null }, ar === null) {
    if (Bi === null) throw Error(_(308));
    ar = e3, Bi.dependencies = { lanes: 0, firstContext: e3 };
  } else ar = ar.next = e3;
  return t;
}
var Pn = null;
function mu(e3) {
  Pn === null ? Pn = [e3] : Pn.push(e3);
}
function yp(e3, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, mu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Yt(e3, r);
}
function Yt(e3, t) {
  e3.lanes |= t;
  var n = e3.alternate;
  for (n !== null && (n.lanes |= t), n = e3, e3 = e3.return; e3 !== null; ) e3.childLanes |= t, n = e3.alternate, n !== null && (n.childLanes |= t), n = e3, e3 = e3.return;
  return n.tag === 3 ? n.stateNode : null;
}
var tn = false;
function gu(e3) {
  e3.updateQueue = { baseState: e3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function vp(e3, t) {
  e3 = e3.updateQueue, t.updateQueue === e3 && (t.updateQueue = { baseState: e3.baseState, firstBaseUpdate: e3.firstBaseUpdate, lastBaseUpdate: e3.lastBaseUpdate, shared: e3.shared, effects: e3.effects });
}
function Wt(e3, t) {
  return { eventTime: e3, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function fn(e3, t, n) {
  var r = e3.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Yt(e3, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, mu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Yt(e3, n);
}
function mi(e3, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e3.pendingLanes, n |= r, t.lanes = n, tu(e3, n);
  }
}
function Zc(e3, t) {
  var n = e3.updateQueue, r = e3.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e3.updateQueue = n;
    return;
  }
  e3 = n.lastBaseUpdate, e3 === null ? n.firstBaseUpdate = t : e3.next = t, n.lastBaseUpdate = t;
}
function Ui(e3, t, n, r) {
  var o = e3.updateQueue;
  tn = false;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, l === null ? i = u : l.next = u, l = a;
    var m = e3.alternate;
    m !== null && (m = m.updateQueue, s = m.lastBaseUpdate, s !== l && (s === null ? m.firstBaseUpdate = u : s.next = u, m.lastBaseUpdate = a));
  }
  if (i !== null) {
    var p = o.baseState;
    l = 0, m = u = a = null, s = i;
    do {
      var h = s.lane, w = s.eventTime;
      if ((r & h) === h) {
        m !== null && (m = m.next = { eventTime: w, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
        e: {
          var v = e3, S = s;
          switch (h = t, w = n, S.tag) {
            case 1:
              if (v = S.payload, typeof v == "function") {
                p = v.call(w, p, h);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = S.payload, h = typeof v == "function" ? v.call(w, p, h) : v, h == null) break e;
              p = oe({}, p, h);
              break e;
            case 2:
              tn = true;
          }
        }
        s.callback !== null && s.lane !== 0 && (e3.flags |= 64, h = o.effects, h === null ? o.effects = [s] : h.push(s));
      } else w = { eventTime: w, lane: h, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, m === null ? (u = m = w, a = p) : m = m.next = w, l |= h;
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
    Dn |= l, e3.lanes = l, e3.memoizedState = p;
  }
}
function qc(e3, t, n) {
  if (e3 = t.effects, t.effects = null, e3 !== null) for (t = 0; t < e3.length; t++) {
    var r = e3[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(_(191, o));
      o.call(r);
    }
  }
}
var Ao = {}, Mt = Sn(Ao), xo = Sn(Ao), ko = Sn(Ao);
function Tn(e3) {
  if (e3 === Ao) throw Error(_(174));
  return e3;
}
function yu(e3, t) {
  switch (G(ko, t), G(xo, e3), G(Mt, Ao), e3 = t.nodeType, e3) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hs(null, "");
      break;
    default:
      e3 = e3 === 8 ? t.parentNode : t, t = e3.namespaceURI || null, e3 = e3.tagName, t = Hs(t, e3);
  }
  q(Mt), G(Mt, t);
}
function Er() {
  q(Mt), q(xo), q(ko);
}
function Sp(e3) {
  Tn(ko.current);
  var t = Tn(Mt.current), n = Hs(t, e3.type);
  t !== n && (G(xo, e3), G(Mt, n));
}
function vu(e3) {
  xo.current === e3 && (q(Mt), q(xo));
}
var ne = Sn(0);
function Wi(e3) {
  for (var t = e3; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e3) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e3) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Ss = [];
function Su() {
  for (var e3 = 0; e3 < Ss.length; e3++) Ss[e3]._workInProgressVersionPrimary = null;
  Ss.length = 0;
}
var gi = Qt.ReactCurrentDispatcher, ws = Qt.ReactCurrentBatchConfig, On = 0, re = null, pe = null, ge = null, Vi = false, ro = false, Co = 0, vy = 0;
function Ee() {
  throw Error(_(321));
}
function wu(e3, t) {
  if (t === null) return false;
  for (var n = 0; n < t.length && n < e3.length; n++) if (!wt(e3[n], t[n])) return false;
  return true;
}
function xu(e3, t, n, r, o, i) {
  if (On = i, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, gi.current = e3 === null || e3.memoizedState === null ? ky : Cy, e3 = n(r, o), ro) {
    i = 0;
    do {
      if (ro = false, Co = 0, 25 <= i) throw Error(_(301));
      i += 1, ge = pe = null, t.updateQueue = null, gi.current = Ey, e3 = n(r, o);
    } while (ro);
  }
  if (gi.current = Hi, t = pe !== null && pe.next !== null, On = 0, ge = pe = re = null, Vi = false, t) throw Error(_(300));
  return e3;
}
function ku() {
  var e3 = Co !== 0;
  return Co = 0, e3;
}
function Et() {
  var e3 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ge === null ? re.memoizedState = ge = e3 : ge = ge.next = e3, ge;
}
function ct() {
  if (pe === null) {
    var e3 = re.alternate;
    e3 = e3 !== null ? e3.memoizedState : null;
  } else e3 = pe.next;
  var t = ge === null ? re.memoizedState : ge.next;
  if (t !== null) ge = t, pe = e3;
  else {
    if (e3 === null) throw Error(_(310));
    pe = e3, e3 = { memoizedState: pe.memoizedState, baseState: pe.baseState, baseQueue: pe.baseQueue, queue: pe.queue, next: null }, ge === null ? re.memoizedState = ge = e3 : ge = ge.next = e3;
  }
  return ge;
}
function Eo(e3, t) {
  return typeof t == "function" ? t(e3) : t;
}
function xs(e3) {
  var t = ct(), n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e3;
  var r = pe, o = r.baseQueue, i = n.pending;
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
      if ((On & m) === m) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e3(r, u.action);
      else {
        var p = { lane: m, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? (s = a = p, l = r) : a = a.next = p, re.lanes |= m, Dn |= m;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? l = r : a.next = s, wt(r, t.memoizedState) || (be = true), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e3 = n.interleaved, e3 !== null) {
    o = e3;
    do
      i = o.lane, re.lanes |= i, Dn |= i, o = o.next;
    while (o !== e3);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ks(e3) {
  var t = ct(), n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e3;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e3(i, l.action), l = l.next;
    while (l !== o);
    wt(i, t.memoizedState) || (be = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function wp() {
}
function xp(e3, t) {
  var n = re, r = ct(), o = t(), i = !wt(r.memoizedState, o);
  if (i && (r.memoizedState = o, be = true), r = r.queue, Cu(Ep.bind(null, n, r, e3), [e3]), r.getSnapshot !== t || i || ge !== null && ge.memoizedState.tag & 1) {
    if (n.flags |= 2048, Po(9, Cp.bind(null, n, r, o, t), void 0, null), ye === null) throw Error(_(349));
    On & 30 || kp(n, t, o);
  }
  return o;
}
function kp(e3, t, n) {
  e3.flags |= 16384, e3 = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e3]) : (n = t.stores, n === null ? t.stores = [e3] : n.push(e3));
}
function Cp(e3, t, n, r) {
  t.value = n, t.getSnapshot = r, Pp(t) && Tp(e3);
}
function Ep(e3, t, n) {
  return n(function() {
    Pp(t) && Tp(e3);
  });
}
function Pp(e3) {
  var t = e3.getSnapshot;
  e3 = e3.value;
  try {
    var n = t();
    return !wt(e3, n);
  } catch {
    return true;
  }
}
function Tp(e3) {
  var t = Yt(e3, 1);
  t !== null && St(t, e3, 1, -1);
}
function Jc(e3) {
  var t = Et();
  return typeof e3 == "function" && (e3 = e3()), t.memoizedState = t.baseState = e3, e3 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Eo, lastRenderedState: e3 }, t.queue = e3, e3 = e3.dispatch = xy.bind(null, re, e3), [t.memoizedState, e3];
}
function Po(e3, t, n, r) {
  return e3 = { tag: e3, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e3.next = e3) : (n = t.lastEffect, n === null ? t.lastEffect = e3.next = e3 : (r = n.next, n.next = e3, e3.next = r, t.lastEffect = e3)), e3;
}
function _p() {
  return ct().memoizedState;
}
function yi(e3, t, n, r) {
  var o = Et();
  re.flags |= e3, o.memoizedState = Po(1 | t, n, void 0, r === void 0 ? null : r);
}
function ul(e3, t, n, r) {
  var o = ct();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (pe !== null) {
    var l = pe.memoizedState;
    if (i = l.destroy, r !== null && wu(r, l.deps)) {
      o.memoizedState = Po(t, n, i, r);
      return;
    }
  }
  re.flags |= e3, o.memoizedState = Po(1 | t, n, i, r);
}
function ef(e3, t) {
  return yi(8390656, 8, e3, t);
}
function Cu(e3, t) {
  return ul(2048, 8, e3, t);
}
function Rp(e3, t) {
  return ul(4, 2, e3, t);
}
function $p(e3, t) {
  return ul(4, 4, e3, t);
}
function Np(e3, t) {
  if (typeof t == "function") return e3 = e3(), t(e3), function() {
    t(null);
  };
  if (t != null) return e3 = e3(), t.current = e3, function() {
    t.current = null;
  };
}
function Mp(e3, t, n) {
  return n = n != null ? n.concat([e3]) : null, ul(4, 4, Np.bind(null, t, e3), n);
}
function Eu() {
}
function Op(e3, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wu(t, r[1]) ? r[0] : (n.memoizedState = [e3, t], e3);
}
function Dp(e3, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wu(t, r[1]) ? r[0] : (e3 = e3(), n.memoizedState = [e3, t], e3);
}
function zp(e3, t, n) {
  return On & 21 ? (wt(n, t) || (n = jd(), re.lanes |= n, Dn |= n, e3.baseState = true), t) : (e3.baseState && (e3.baseState = false, be = true), e3.memoizedState = n);
}
function Sy(e3, t) {
  var n = V;
  V = n !== 0 && 4 > n ? n : 4, e3(true);
  var r = ws.transition;
  ws.transition = {};
  try {
    e3(false), t();
  } finally {
    V = n, ws.transition = r;
  }
}
function Ip() {
  return ct().memoizedState;
}
function wy(e3, t, n) {
  var r = pn(e3);
  if (n = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null }, Ap(e3)) Lp(t, n);
  else if (n = yp(e3, t, n, r), n !== null) {
    var o = ze();
    St(n, e3, r, o), bp(n, t, r);
  }
}
function xy(e3, t, n) {
  var r = pn(e3), o = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null };
  if (Ap(e3)) Lp(t, o);
  else {
    var i = e3.alternate;
    if (e3.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, s = i(l, n);
      if (o.hasEagerState = true, o.eagerState = s, wt(s, l)) {
        var a = t.interleaved;
        a === null ? (o.next = o, mu(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = yp(e3, t, o, r), n !== null && (o = ze(), St(n, e3, r, o), bp(n, t, r));
  }
}
function Ap(e3) {
  var t = e3.alternate;
  return e3 === re || t !== null && t === re;
}
function Lp(e3, t) {
  ro = Vi = true;
  var n = e3.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e3.pending = t;
}
function bp(e3, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e3.pendingLanes, n |= r, t.lanes = n, tu(e3, n);
  }
}
var Hi = { readContext: ut, useCallback: Ee, useContext: Ee, useEffect: Ee, useImperativeHandle: Ee, useInsertionEffect: Ee, useLayoutEffect: Ee, useMemo: Ee, useReducer: Ee, useRef: Ee, useState: Ee, useDebugValue: Ee, useDeferredValue: Ee, useTransition: Ee, useMutableSource: Ee, useSyncExternalStore: Ee, useId: Ee, unstable_isNewReconciler: false }, ky = { readContext: ut, useCallback: function(e3, t) {
  return Et().memoizedState = [e3, t === void 0 ? null : t], e3;
}, useContext: ut, useEffect: ef, useImperativeHandle: function(e3, t, n) {
  return n = n != null ? n.concat([e3]) : null, yi(4194308, 4, Np.bind(null, t, e3), n);
}, useLayoutEffect: function(e3, t) {
  return yi(4194308, 4, e3, t);
}, useInsertionEffect: function(e3, t) {
  return yi(4, 2, e3, t);
}, useMemo: function(e3, t) {
  var n = Et();
  return t = t === void 0 ? null : t, e3 = e3(), n.memoizedState = [e3, t], e3;
}, useReducer: function(e3, t, n) {
  var r = Et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e3 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e3, lastRenderedState: t }, r.queue = e3, e3 = e3.dispatch = wy.bind(null, re, e3), [r.memoizedState, e3];
}, useRef: function(e3) {
  var t = Et();
  return e3 = { current: e3 }, t.memoizedState = e3;
}, useState: Jc, useDebugValue: Eu, useDeferredValue: function(e3) {
  return Et().memoizedState = e3;
}, useTransition: function() {
  var e3 = Jc(false), t = e3[0];
  return e3 = Sy.bind(null, e3[1]), Et().memoizedState = e3, [t, e3];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e3, t, n) {
  var r = re, o = Et();
  if (ee) {
    if (n === void 0) throw Error(_(407));
    n = n();
  } else {
    if (n = t(), ye === null) throw Error(_(349));
    On & 30 || kp(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, ef(Ep.bind(null, r, i, e3), [e3]), r.flags |= 2048, Po(9, Cp.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e3 = Et(), t = ye.identifierPrefix;
  if (ee) {
    var n = Ut, r = Bt;
    n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Co++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = vy++, t = ":" + t + "r" + n.toString(32) + ":";
  return e3.memoizedState = t;
}, unstable_isNewReconciler: false }, Cy = { readContext: ut, useCallback: Op, useContext: ut, useEffect: Cu, useImperativeHandle: Mp, useInsertionEffect: Rp, useLayoutEffect: $p, useMemo: Dp, useReducer: xs, useRef: _p, useState: function() {
  return xs(Eo);
}, useDebugValue: Eu, useDeferredValue: function(e3) {
  var t = ct();
  return zp(t, pe.memoizedState, e3);
}, useTransition: function() {
  var e3 = xs(Eo)[0], t = ct().memoizedState;
  return [e3, t];
}, useMutableSource: wp, useSyncExternalStore: xp, useId: Ip, unstable_isNewReconciler: false }, Ey = { readContext: ut, useCallback: Op, useContext: ut, useEffect: Cu, useImperativeHandle: Mp, useInsertionEffect: Rp, useLayoutEffect: $p, useMemo: Dp, useReducer: ks, useRef: _p, useState: function() {
  return ks(Eo);
}, useDebugValue: Eu, useDeferredValue: function(e3) {
  var t = ct();
  return pe === null ? t.memoizedState = e3 : zp(t, pe.memoizedState, e3);
}, useTransition: function() {
  var e3 = ks(Eo)[0], t = ct().memoizedState;
  return [e3, t];
}, useMutableSource: wp, useSyncExternalStore: xp, useId: Ip, unstable_isNewReconciler: false };
function mt(e3, t) {
  if (e3 && e3.defaultProps) {
    t = oe({}, t), e3 = e3.defaultProps;
    for (var n in e3) t[n] === void 0 && (t[n] = e3[n]);
    return t;
  }
  return t;
}
function da(e3, t, n, r) {
  t = e3.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e3.memoizedState = n, e3.lanes === 0 && (e3.updateQueue.baseState = n);
}
var cl = { isMounted: function(e3) {
  return (e3 = e3._reactInternals) ? jn(e3) === e3 : false;
}, enqueueSetState: function(e3, t, n) {
  e3 = e3._reactInternals;
  var r = ze(), o = pn(e3), i = Wt(r, o);
  i.payload = t, n != null && (i.callback = n), t = fn(e3, i, o), t !== null && (St(t, e3, o, r), mi(t, e3, o));
}, enqueueReplaceState: function(e3, t, n) {
  e3 = e3._reactInternals;
  var r = ze(), o = pn(e3), i = Wt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = fn(e3, i, o), t !== null && (St(t, e3, o, r), mi(t, e3, o));
}, enqueueForceUpdate: function(e3, t) {
  e3 = e3._reactInternals;
  var n = ze(), r = pn(e3), o = Wt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = fn(e3, o, r), t !== null && (St(t, e3, r, n), mi(t, e3, r));
} };
function tf(e3, t, n, r, o, i, l) {
  return e3 = e3.stateNode, typeof e3.shouldComponentUpdate == "function" ? e3.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !yo(n, r) || !yo(o, i) : true;
}
function jp(e3, t, n) {
  var r = false, o = gn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ut(i) : (o = Fe(t) ? Nn : Ne.current, r = t.contextTypes, i = (r = r != null) ? xr(e3, o) : gn), t = new t(n, i), e3.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = cl, e3.stateNode = t, t._reactInternals = e3, r && (e3 = e3.stateNode, e3.__reactInternalMemoizedUnmaskedChildContext = o, e3.__reactInternalMemoizedMaskedChildContext = i), t;
}
function nf(e3, t, n, r) {
  e3 = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e3 && cl.enqueueReplaceState(t, t.state, null);
}
function pa(e3, t, n, r) {
  var o = e3.stateNode;
  o.props = n, o.state = e3.memoizedState, o.refs = {}, gu(e3);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = ut(i) : (i = Fe(t) ? Nn : Ne.current, o.context = xr(e3, i)), o.state = e3.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (da(e3, t, i, n), o.state = e3.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && cl.enqueueReplaceState(o, o.state, null), Ui(e3, n, o, r), o.state = e3.memoizedState), typeof o.componentDidMount == "function" && (e3.flags |= 4194308);
}
function Pr(e3, t) {
  try {
    var n = "", r = t;
    do
      n += qm(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e3, source: t, stack: o, digest: null };
}
function Cs(e3, t, n) {
  return { value: e3, source: null, stack: n ?? null, digest: t ?? null };
}
function ha(e3, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Py = typeof WeakMap == "function" ? WeakMap : Map;
function Fp(e3, t, n) {
  n = Wt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ki || (Ki = true, Ea = r), ha(e3, t);
  }, n;
}
function Bp(e3, t, n) {
  n = Wt(-1, n), n.tag = 3;
  var r = e3.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      ha(e3, t);
    };
  }
  var i = e3.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    ha(e3, t), typeof r != "function" && (dn === null ? dn = /* @__PURE__ */ new Set([this]) : dn.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function rf(e3, t, n) {
  var r = e3.pingCache;
  if (r === null) {
    r = e3.pingCache = new Py();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e3 = jy.bind(null, e3, t, n), t.then(e3, e3));
}
function of(e3) {
  do {
    var t;
    if ((t = e3.tag === 13) && (t = e3.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e3;
    e3 = e3.return;
  } while (e3 !== null);
  return null;
}
function lf(e3, t, n, r, o) {
  return e3.mode & 1 ? (e3.flags |= 65536, e3.lanes = o, e3) : (e3 === t ? e3.flags |= 65536 : (e3.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Wt(-1, 1), t.tag = 2, fn(n, t, 1))), n.lanes |= 1), e3);
}
var Ty = Qt.ReactCurrentOwner, be = false;
function De(e3, t, n, r) {
  t.child = e3 === null ? gp(t, null, n, r) : Cr(t, e3.child, n, r);
}
function sf(e3, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return gr(t, o), r = xu(e3, t, n, r, i, o), n = ku(), e3 !== null && !be ? (t.updateQueue = e3.updateQueue, t.flags &= -2053, e3.lanes &= ~o, Kt(e3, t, o)) : (ee && n && uu(t), t.flags |= 1, De(e3, t, r, o), t.child);
}
function af(e3, t, n, r, o) {
  if (e3 === null) {
    var i = n.type;
    return typeof i == "function" && !Ou(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Up(e3, t, i, r, o)) : (e3 = xi(n.type, null, r, t, t.mode, o), e3.ref = t.ref, e3.return = t, t.child = e3);
  }
  if (i = e3.child, !(e3.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : yo, n(l, r) && e3.ref === t.ref) return Kt(e3, t, o);
  }
  return t.flags |= 1, e3 = hn(i, r), e3.ref = t.ref, e3.return = t, t.child = e3;
}
function Up(e3, t, n, r, o) {
  if (e3 !== null) {
    var i = e3.memoizedProps;
    if (yo(i, r) && e3.ref === t.ref) if (be = false, t.pendingProps = r = i, (e3.lanes & o) !== 0) e3.flags & 131072 && (be = true);
    else return t.lanes = e3.lanes, Kt(e3, t, o);
  }
  return ma(e3, t, n, r, o);
}
function Wp(e3, t, n) {
  var r = t.pendingProps, o = r.children, i = e3 !== null ? e3.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(cr, He), He |= n;
  else {
    if (!(n & 1073741824)) return e3 = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e3, cachePool: null, transitions: null }, t.updateQueue = null, G(cr, He), He |= e3, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, G(cr, He), He |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, G(cr, He), He |= r;
  return De(e3, t, o, n), t.child;
}
function Vp(e3, t) {
  var n = t.ref;
  (e3 === null && n !== null || e3 !== null && e3.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ma(e3, t, n, r, o) {
  var i = Fe(n) ? Nn : Ne.current;
  return i = xr(t, i), gr(t, o), n = xu(e3, t, n, r, i, o), r = ku(), e3 !== null && !be ? (t.updateQueue = e3.updateQueue, t.flags &= -2053, e3.lanes &= ~o, Kt(e3, t, o)) : (ee && r && uu(t), t.flags |= 1, De(e3, t, n, o), t.child);
}
function uf(e3, t, n, r, o) {
  if (Fe(n)) {
    var i = true;
    Li(t);
  } else i = false;
  if (gr(t, o), t.stateNode === null) vi(e3, t), jp(t, n, r), pa(t, n, r, o), r = true;
  else if (e3 === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = ut(u) : (u = Fe(n) ? Nn : Ne.current, u = xr(t, u));
    var m = n.getDerivedStateFromProps, p = typeof m == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    p || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && nf(t, l, r, u), tn = false;
    var h = t.memoizedState;
    l.state = h, Ui(t, r, l, o), a = t.memoizedState, s !== r || h !== a || je.current || tn ? (typeof m == "function" && (da(t, n, m, r), a = t.memoizedState), (s = tn || tf(t, n, s, r, h, a, u)) ? (p || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = false);
  } else {
    l = t.stateNode, vp(e3, t), s = t.memoizedProps, u = t.type === t.elementType ? s : mt(t.type, s), l.props = u, p = t.pendingProps, h = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = ut(a) : (a = Fe(n) ? Nn : Ne.current, a = xr(t, a));
    var w = n.getDerivedStateFromProps;
    (m = typeof w == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== p || h !== a) && nf(t, l, r, a), tn = false, h = t.memoizedState, l.state = h, Ui(t, r, l, o);
    var v = t.memoizedState;
    s !== p || h !== v || je.current || tn ? (typeof w == "function" && (da(t, n, w, r), v = t.memoizedState), (u = tn || tf(t, n, u, r, h, v, a) || false) ? (m || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, v, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, v, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e3.memoizedProps && h === e3.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e3.memoizedProps && h === e3.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), l.props = r, l.state = v, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e3.memoizedProps && h === e3.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e3.memoizedProps && h === e3.memoizedState || (t.flags |= 1024), r = false);
  }
  return ga(e3, t, n, r, i, o);
}
function ga(e3, t, n, r, o, i) {
  Vp(e3, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Kc(t, n, false), Kt(e3, t, i);
  r = t.stateNode, Ty.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e3 !== null && l ? (t.child = Cr(t, e3.child, null, i), t.child = Cr(t, null, s, i)) : De(e3, t, s, i), t.memoizedState = r.state, o && Kc(t, n, true), t.child;
}
function Hp(e3) {
  var t = e3.stateNode;
  t.pendingContext ? Yc(e3, t.pendingContext, t.pendingContext !== t.context) : t.context && Yc(e3, t.context, false), yu(e3, t.containerInfo);
}
function cf(e3, t, n, r, o) {
  return kr(), fu(o), t.flags |= 256, De(e3, t, n, r), t.child;
}
var ya = { dehydrated: null, treeContext: null, retryLane: 0 };
function va(e3) {
  return { baseLanes: e3, cachePool: null, transitions: null };
}
function Yp(e3, t, n) {
  var r = t.pendingProps, o = ne.current, i = false, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e3 !== null && e3.memoizedState === null ? false : (o & 2) !== 0), s ? (i = true, t.flags &= -129) : (e3 === null || e3.memoizedState !== null) && (o |= 1), G(ne, o & 1), e3 === null) return ca(t), e3 = t.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null) ? (t.mode & 1 ? e3.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e3 = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = pl(l, r, 0, null), e3 = $n(e3, r, n, null), i.return = t, e3.return = t, i.sibling = e3, t.child = i, t.child.memoizedState = va(n), t.memoizedState = ya, e3) : Pu(t, l));
  if (o = e3.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return _y(e3, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e3.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = hn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = hn(s, i) : (i = $n(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e3.child.memoizedState, l = l === null ? va(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e3.childLanes & ~n, t.memoizedState = ya, r;
  }
  return i = e3.child, e3 = i.sibling, r = hn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e3 !== null && (n = t.deletions, n === null ? (t.deletions = [e3], t.flags |= 16) : n.push(e3)), t.child = r, t.memoizedState = null, r;
}
function Pu(e3, t) {
  return t = pl({ mode: "visible", children: t }, e3.mode, 0, null), t.return = e3, e3.child = t;
}
function ni(e3, t, n, r) {
  return r !== null && fu(r), Cr(t, e3.child, null, n), e3 = Pu(t, t.pendingProps.children), e3.flags |= 2, t.memoizedState = null, e3;
}
function _y(e3, t, n, r, o, i, l) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = Cs(Error(_(422))), ni(e3, t, l, r)) : t.memoizedState !== null ? (t.child = e3.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = pl({ mode: "visible", children: r.children }, o, 0, null), i = $n(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Cr(t, e3.child, null, l), t.child.memoizedState = va(l), t.memoizedState = ya, i);
  if (!(t.mode & 1)) return ni(e3, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(_(419)), r = Cs(i, r, void 0), ni(e3, t, l, r);
  }
  if (s = (l & e3.childLanes) !== 0, be || s) {
    if (r = ye, r !== null) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Yt(e3, o), St(r, e3, o, -1));
    }
    return Mu(), r = Cs(Error(_(421))), ni(e3, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e3.child, t = Fy.bind(null, e3), o._reactRetry = t, null) : (e3 = i.treeContext, Ke = cn(o.nextSibling), Xe = t, ee = true, yt = null, e3 !== null && (ot[it++] = Bt, ot[it++] = Ut, ot[it++] = Mn, Bt = e3.id, Ut = e3.overflow, Mn = t), t = Pu(t, r.children), t.flags |= 4096, t);
}
function ff(e3, t, n) {
  e3.lanes |= t;
  var r = e3.alternate;
  r !== null && (r.lanes |= t), fa(e3.return, t, n);
}
function Es(e3, t, n, r, o) {
  var i = e3.memoizedState;
  i === null ? e3.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Kp(e3, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (De(e3, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e3 !== null && e3.flags & 128) e: for (e3 = t.child; e3 !== null; ) {
      if (e3.tag === 13) e3.memoizedState !== null && ff(e3, n, t);
      else if (e3.tag === 19) ff(e3, n, t);
      else if (e3.child !== null) {
        e3.child.return = e3, e3 = e3.child;
        continue;
      }
      if (e3 === t) break e;
      for (; e3.sibling === null; ) {
        if (e3.return === null || e3.return === t) break e;
        e3 = e3.return;
      }
      e3.sibling.return = e3.return, e3 = e3.sibling;
    }
    r &= 1;
  }
  if (G(ne, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e3 = n.alternate, e3 !== null && Wi(e3) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Es(t, false, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e3 = o.alternate, e3 !== null && Wi(e3) === null) {
          t.child = o;
          break;
        }
        e3 = o.sibling, o.sibling = n, n = o, o = e3;
      }
      Es(t, true, n, null, i);
      break;
    case "together":
      Es(t, false, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function vi(e3, t) {
  !(t.mode & 1) && e3 !== null && (e3.alternate = null, t.alternate = null, t.flags |= 2);
}
function Kt(e3, t, n) {
  if (e3 !== null && (t.dependencies = e3.dependencies), Dn |= t.lanes, !(n & t.childLanes)) return null;
  if (e3 !== null && t.child !== e3.child) throw Error(_(153));
  if (t.child !== null) {
    for (e3 = t.child, n = hn(e3, e3.pendingProps), t.child = n, n.return = t; e3.sibling !== null; ) e3 = e3.sibling, n = n.sibling = hn(e3, e3.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ry(e3, t, n) {
  switch (t.tag) {
    case 3:
      Hp(t), kr();
      break;
    case 5:
      Sp(t);
      break;
    case 1:
      Fe(t.type) && Li(t);
      break;
    case 4:
      yu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      G(Fi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (G(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Yp(e3, t, n) : (G(ne, ne.current & 1), e3 = Kt(e3, t, n), e3 !== null ? e3.sibling : null);
      G(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e3.flags & 128) {
        if (r) return Kp(e3, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), G(ne, ne.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Wp(e3, t, n);
  }
  return Kt(e3, t, n);
}
var Xp, Sa, Qp, Gp;
Xp = function(e3, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e3.appendChild(n.stateNode);
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
Sa = function() {
};
Qp = function(e3, t, n, r) {
  var o = e3.memoizedProps;
  if (o !== r) {
    e3 = t.stateNode, Tn(Mt.current);
    var i = null;
    switch (n) {
      case "input":
        o = Bs(e3, o), r = Bs(e3, r), i = [];
        break;
      case "select":
        o = oe({}, o, { value: void 0 }), r = oe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Vs(e3, o), r = Vs(e3, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e3.onclick = Ii);
    }
    Ys(n, r);
    var l;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var s = o[u];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (uo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = o == null ? void 0 : o[u], r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
        for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (i || (i = []), i.push(u, n)), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (uo.hasOwnProperty(u) ? (a != null && u === "onScroll" && Z("scroll", e3), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Gp = function(e3, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Br(e3, t) {
  if (!ee) switch (e3.tailMode) {
    case "hidden":
      t = e3.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e3.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e3.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e3.tail === null ? e3.tail = null : e3.tail.sibling = null : r.sibling = null;
  }
}
function Pe(e3) {
  var t = e3.alternate !== null && e3.alternate.child === e3.child, n = 0, r = 0;
  if (t) for (var o = e3.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e3, o = o.sibling;
  else for (o = e3.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e3, o = o.sibling;
  return e3.subtreeFlags |= r, e3.childLanes = n, t;
}
function $y(e3, t, n) {
  var r = t.pendingProps;
  switch (cu(t), t.tag) {
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
      return Pe(t), null;
    case 1:
      return Fe(t.type) && Ai(), Pe(t), null;
    case 3:
      return r = t.stateNode, Er(), q(je), q(Ne), Su(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e3 === null || e3.child === null) && (ei(t) ? t.flags |= 4 : e3 === null || e3.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, yt !== null && (_a(yt), yt = null))), Sa(e3, t), Pe(t), null;
    case 5:
      vu(t);
      var o = Tn(ko.current);
      if (n = t.type, e3 !== null && t.stateNode != null) Qp(e3, t, n, r, o), e3.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Pe(t), null;
        }
        if (e3 = Tn(Mt.current), ei(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[_t] = t, r[wo] = i, e3 = (t.mode & 1) !== 0, n) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Qr.length; o++) Z(Qr[o], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z("error", r), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              Sc(r, i), Z("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Z("invalid", r);
              break;
            case "textarea":
              xc(r, i), Z("invalid", r);
          }
          Ys(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== true && Jo(r.textContent, s, e3), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== true && Jo(r.textContent, s, e3), o = ["children", "" + s]) : uo.hasOwnProperty(l) && s != null && l === "onScroll" && Z("scroll", r);
          }
          switch (n) {
            case "input":
              Ho(r), wc(r, i, true);
              break;
            case "textarea":
              Ho(r), kc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ii);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e3 === "http://www.w3.org/1999/xhtml" && (e3 = Ed(n)), e3 === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e3 = l.createElement("div"), e3.innerHTML = "<script><\/script>", e3 = e3.removeChild(e3.firstChild)) : typeof r.is == "string" ? e3 = l.createElement(n, { is: r.is }) : (e3 = l.createElement(n), n === "select" && (l = e3, r.multiple ? l.multiple = true : r.size && (l.size = r.size))) : e3 = l.createElementNS(e3, n), e3[_t] = t, e3[wo] = r, Xp(e3, t, false, false), t.stateNode = e3;
          e: {
            switch (l = Ks(n, r), n) {
              case "dialog":
                Z("cancel", e3), Z("close", e3), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e3), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Qr.length; o++) Z(Qr[o], e3);
                o = r;
                break;
              case "source":
                Z("error", e3), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Z("error", e3), Z("load", e3), o = r;
                break;
              case "details":
                Z("toggle", e3), o = r;
                break;
              case "input":
                Sc(e3, r), o = Bs(e3, r), Z("invalid", e3);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e3._wrapperState = { wasMultiple: !!r.multiple }, o = oe({}, r, { value: void 0 }), Z("invalid", e3);
                break;
              case "textarea":
                xc(e3, r), o = Vs(e3, r), Z("invalid", e3);
                break;
              default:
                o = r;
            }
            Ys(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? _d(e3, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Pd(e3, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && co(e3, a) : typeof a == "number" && co(e3, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (uo.hasOwnProperty(i) ? a != null && i === "onScroll" && Z("scroll", e3) : a != null && Qa(e3, i, a, l));
            }
            switch (n) {
              case "input":
                Ho(e3), wc(e3, r, false);
                break;
              case "textarea":
                Ho(e3), kc(e3);
                break;
              case "option":
                r.value != null && e3.setAttribute("value", "" + mn(r.value));
                break;
              case "select":
                e3.multiple = !!r.multiple, i = r.value, i != null ? dr(e3, !!r.multiple, i, false) : r.defaultValue != null && dr(e3, !!r.multiple, r.defaultValue, true);
                break;
              default:
                typeof o.onClick == "function" && (e3.onclick = Ii);
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
      return Pe(t), null;
    case 6:
      if (e3 && t.stateNode != null) Gp(e3, t, e3.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (n = Tn(ko.current), Tn(Mt.current), ei(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[_t] = t, (i = r.nodeValue !== n) && (e3 = Xe, e3 !== null)) switch (e3.tag) {
            case 3:
              Jo(r.nodeValue, n, (e3.mode & 1) !== 0);
              break;
            case 5:
              e3.memoizedProps.suppressHydrationWarning !== true && Jo(r.nodeValue, n, (e3.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_t] = t, t.stateNode = r;
      }
      return Pe(t), null;
    case 13:
      if (q(ne), r = t.memoizedState, e3 === null || e3.memoizedState !== null && e3.memoizedState.dehydrated !== null) {
        if (ee && Ke !== null && t.mode & 1 && !(t.flags & 128)) hp(), kr(), t.flags |= 98560, i = false;
        else if (i = ei(t), r !== null && r.dehydrated !== null) {
          if (e3 === null) {
            if (!i) throw Error(_(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(_(317));
            i[_t] = t;
          } else kr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Pe(t), i = false;
        } else yt !== null && (_a(yt), yt = null), i = true;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e3 !== null && e3.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e3 === null || ne.current & 1 ? he === 0 && (he = 3) : Mu())), t.updateQueue !== null && (t.flags |= 4), Pe(t), null);
    case 4:
      return Er(), Sa(e3, t), e3 === null && vo(t.stateNode.containerInfo), Pe(t), null;
    case 10:
      return hu(t.type._context), Pe(t), null;
    case 17:
      return Fe(t.type) && Ai(), Pe(t), null;
    case 19:
      if (q(ne), i = t.memoizedState, i === null) return Pe(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) Br(i, false);
      else {
        if (he !== 0 || e3 !== null && e3.flags & 128) for (e3 = t.child; e3 !== null; ) {
          if (l = Wi(e3), l !== null) {
            for (t.flags |= 128, Br(i, false), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e3 = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e3, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e3 = l.dependencies, i.dependencies = e3 === null ? null : { lanes: e3.lanes, firstContext: e3.firstContext }), n = n.sibling;
            return G(ne, ne.current & 1 | 2), t.child;
          }
          e3 = e3.sibling;
        }
        i.tail !== null && ue() > Tr && (t.flags |= 128, r = true, Br(i, false), t.lanes = 4194304);
      }
      else {
        if (!r) if (e3 = Wi(l), e3 !== null) {
          if (t.flags |= 128, r = true, n = e3.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Br(i, true), i.tail === null && i.tailMode === "hidden" && !l.alternate && !ee) return Pe(t), null;
        } else 2 * ue() - i.renderingStartTime > Tr && n !== 1073741824 && (t.flags |= 128, r = true, Br(i, false), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ue(), t.sibling = null, n = ne.current, G(ne, r ? n & 1 | 2 : n & 1), t) : (Pe(t), null);
    case 22:
    case 23:
      return Nu(), r = t.memoizedState !== null, e3 !== null && e3.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? He & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function Ny(e3, t) {
  switch (cu(t), t.tag) {
    case 1:
      return Fe(t.type) && Ai(), e3 = t.flags, e3 & 65536 ? (t.flags = e3 & -65537 | 128, t) : null;
    case 3:
      return Er(), q(je), q(Ne), Su(), e3 = t.flags, e3 & 65536 && !(e3 & 128) ? (t.flags = e3 & -65537 | 128, t) : null;
    case 5:
      return vu(t), null;
    case 13:
      if (q(ne), e3 = t.memoizedState, e3 !== null && e3.dehydrated !== null) {
        if (t.alternate === null) throw Error(_(340));
        kr();
      }
      return e3 = t.flags, e3 & 65536 ? (t.flags = e3 & -65537 | 128, t) : null;
    case 19:
      return q(ne), null;
    case 4:
      return Er(), null;
    case 10:
      return hu(t.type._context), null;
    case 22:
    case 23:
      return Nu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ri = false, $e = false, My = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function ur(e3, t) {
  var n = e3.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    se(e3, t, r);
  }
  else n.current = null;
}
function wa(e3, t, n) {
  try {
    n();
  } catch (r) {
    se(e3, t, r);
  }
}
var df = false;
function Oy(e3, t) {
  if (ra = Oi, e3 = tp(), au(e3)) {
    if ("selectionStart" in e3) var n = { start: e3.selectionStart, end: e3.selectionEnd };
    else e: {
      n = (n = e3.ownerDocument) && n.defaultView || window;
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
        var l = 0, s = -1, a = -1, u = 0, m = 0, p = e3, h = null;
        t: for (; ; ) {
          for (var w; p !== n || o !== 0 && p.nodeType !== 3 || (s = l + o), p !== i || r !== 0 && p.nodeType !== 3 || (a = l + r), p.nodeType === 3 && (l += p.nodeValue.length), (w = p.firstChild) !== null; ) h = p, p = w;
          for (; ; ) {
            if (p === e3) break t;
            if (h === n && ++u === o && (s = l), h === i && ++m === r && (a = l), (w = p.nextSibling) !== null) break;
            p = h, h = p.parentNode;
          }
          p = w;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (oa = { focusedElem: e3, selectionRange: n }, Oi = false, M = t; M !== null; ) if (t = M, e3 = t.child, (t.subtreeFlags & 1028) !== 0 && e3 !== null) e3.return = t, M = e3;
  else for (; M !== null; ) {
    t = M;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var S = v.memoizedProps, P = v.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? S : mt(t.type, S), P);
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
          throw Error(_(163));
      }
    } catch (y) {
      se(t, t.return, y);
    }
    if (e3 = t.sibling, e3 !== null) {
      e3.return = t.return, M = e3;
      break;
    }
    M = t.return;
  }
  return v = df, df = false, v;
}
function oo(e3, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e3) === e3) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && wa(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function fl(e3, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e3) === e3) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xa(e3) {
  var t = e3.ref;
  if (t !== null) {
    var n = e3.stateNode;
    switch (e3.tag) {
      case 5:
        e3 = n;
        break;
      default:
        e3 = n;
    }
    typeof t == "function" ? t(e3) : t.current = e3;
  }
}
function Zp(e3) {
  var t = e3.alternate;
  t !== null && (e3.alternate = null, Zp(t)), e3.child = null, e3.deletions = null, e3.sibling = null, e3.tag === 5 && (t = e3.stateNode, t !== null && (delete t[_t], delete t[wo], delete t[sa], delete t[hy], delete t[my])), e3.stateNode = null, e3.return = null, e3.dependencies = null, e3.memoizedProps = null, e3.memoizedState = null, e3.pendingProps = null, e3.stateNode = null, e3.updateQueue = null;
}
function qp(e3) {
  return e3.tag === 5 || e3.tag === 3 || e3.tag === 4;
}
function pf(e3) {
  e: for (; ; ) {
    for (; e3.sibling === null; ) {
      if (e3.return === null || qp(e3.return)) return null;
      e3 = e3.return;
    }
    for (e3.sibling.return = e3.return, e3 = e3.sibling; e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 18; ) {
      if (e3.flags & 2 || e3.child === null || e3.tag === 4) continue e;
      e3.child.return = e3, e3 = e3.child;
    }
    if (!(e3.flags & 2)) return e3.stateNode;
  }
}
function ka(e3, t, n) {
  var r = e3.tag;
  if (r === 5 || r === 6) e3 = e3.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e3, t) : n.insertBefore(e3, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e3, n)) : (t = n, t.appendChild(e3)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ii));
  else if (r !== 4 && (e3 = e3.child, e3 !== null)) for (ka(e3, t, n), e3 = e3.sibling; e3 !== null; ) ka(e3, t, n), e3 = e3.sibling;
}
function Ca(e3, t, n) {
  var r = e3.tag;
  if (r === 5 || r === 6) e3 = e3.stateNode, t ? n.insertBefore(e3, t) : n.appendChild(e3);
  else if (r !== 4 && (e3 = e3.child, e3 !== null)) for (Ca(e3, t, n), e3 = e3.sibling; e3 !== null; ) Ca(e3, t, n), e3 = e3.sibling;
}
var we = null, gt = false;
function Gt(e3, t, n) {
  for (n = n.child; n !== null; ) Jp(e3, t, n), n = n.sibling;
}
function Jp(e3, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
    Nt.onCommitFiberUnmount(rl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      $e || ur(n, t);
    case 6:
      var r = we, o = gt;
      we = null, Gt(e3, t, n), we = r, gt = o, we !== null && (gt ? (e3 = we, n = n.stateNode, e3.nodeType === 8 ? e3.parentNode.removeChild(n) : e3.removeChild(n)) : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null && (gt ? (e3 = we, n = n.stateNode, e3.nodeType === 8 ? ys(e3.parentNode, n) : e3.nodeType === 1 && ys(e3, n), mo(e3)) : ys(we, n.stateNode));
      break;
    case 4:
      r = we, o = gt, we = n.stateNode.containerInfo, gt = true, Gt(e3, t, n), we = r, gt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!$e && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && wa(n, t, l), o = o.next;
        } while (o !== r);
      }
      Gt(e3, t, n);
      break;
    case 1:
      if (!$e && (ur(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        se(n, t, s);
      }
      Gt(e3, t, n);
      break;
    case 21:
      Gt(e3, t, n);
      break;
    case 22:
      n.mode & 1 ? ($e = (r = $e) || n.memoizedState !== null, Gt(e3, t, n), $e = r) : Gt(e3, t, n);
      break;
    default:
      Gt(e3, t, n);
  }
}
function hf(e3) {
  var t = e3.updateQueue;
  if (t !== null) {
    e3.updateQueue = null;
    var n = e3.stateNode;
    n === null && (n = e3.stateNode = new My()), t.forEach(function(r) {
      var o = By.bind(null, e3, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function pt(e3, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e3, l = t, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            we = s.stateNode, gt = false;
            break e;
          case 3:
            we = s.stateNode.containerInfo, gt = true;
            break e;
          case 4:
            we = s.stateNode.containerInfo, gt = true;
            break e;
        }
        s = s.return;
      }
      if (we === null) throw Error(_(160));
      Jp(i, l, o), we = null, gt = false;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      se(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) eh(t, e3), t = t.sibling;
}
function eh(e3, t) {
  var n = e3.alternate, r = e3.flags;
  switch (e3.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (pt(t, e3), kt(e3), r & 4) {
        try {
          oo(3, e3, e3.return), fl(3, e3);
        } catch (S) {
          se(e3, e3.return, S);
        }
        try {
          oo(5, e3, e3.return);
        } catch (S) {
          se(e3, e3.return, S);
        }
      }
      break;
    case 1:
      pt(t, e3), kt(e3), r & 512 && n !== null && ur(n, n.return);
      break;
    case 5:
      if (pt(t, e3), kt(e3), r & 512 && n !== null && ur(n, n.return), e3.flags & 32) {
        var o = e3.stateNode;
        try {
          co(o, "");
        } catch (S) {
          se(e3, e3.return, S);
        }
      }
      if (r & 4 && (o = e3.stateNode, o != null)) {
        var i = e3.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e3.type, a = e3.updateQueue;
        if (e3.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && kd(o, i), Ks(s, l);
          var u = Ks(s, i);
          for (l = 0; l < a.length; l += 2) {
            var m = a[l], p = a[l + 1];
            m === "style" ? _d(o, p) : m === "dangerouslySetInnerHTML" ? Pd(o, p) : m === "children" ? co(o, p) : Qa(o, m, p, u);
          }
          switch (s) {
            case "input":
              Us(o, i);
              break;
            case "textarea":
              Cd(o, i);
              break;
            case "select":
              var h = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var w = i.value;
              w != null ? dr(o, !!i.multiple, w, false) : h !== !!i.multiple && (i.defaultValue != null ? dr(o, !!i.multiple, i.defaultValue, true) : dr(o, !!i.multiple, i.multiple ? [] : "", false));
          }
          o[wo] = i;
        } catch (S) {
          se(e3, e3.return, S);
        }
      }
      break;
    case 6:
      if (pt(t, e3), kt(e3), r & 4) {
        if (e3.stateNode === null) throw Error(_(162));
        o = e3.stateNode, i = e3.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (S) {
          se(e3, e3.return, S);
        }
      }
      break;
    case 3:
      if (pt(t, e3), kt(e3), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        mo(t.containerInfo);
      } catch (S) {
        se(e3, e3.return, S);
      }
      break;
    case 4:
      pt(t, e3), kt(e3);
      break;
    case 13:
      pt(t, e3), kt(e3), o = e3.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ru = ue())), r & 4 && hf(e3);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e3.mode & 1 ? ($e = (u = $e) || m, pt(t, e3), $e = u) : pt(t, e3), kt(e3), r & 8192) {
        if (u = e3.memoizedState !== null, (e3.stateNode.isHidden = u) && !m && e3.mode & 1) for (M = e3, m = e3.child; m !== null; ) {
          for (p = M = m; M !== null; ) {
            switch (h = M, w = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                oo(4, h, h.return);
                break;
              case 1:
                ur(h, h.return);
                var v = h.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (S) {
                    se(r, n, S);
                  }
                }
                break;
              case 5:
                ur(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  gf(p);
                  continue;
                }
            }
            w !== null ? (w.return = h, M = w) : gf(p);
          }
          m = m.sibling;
        }
        e: for (m = null, p = e3; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                o = p.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = p.stateNode, a = p.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Td("display", l));
              } catch (S) {
                se(e3, e3.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (m === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (S) {
              se(e3, e3.return, S);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e3) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e3) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e3) break e;
            m === p && (m = null), p = p.return;
          }
          m === p && (m = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      pt(t, e3), kt(e3), r & 4 && hf(e3);
      break;
    case 21:
      break;
    default:
      pt(t, e3), kt(e3);
  }
}
function kt(e3) {
  var t = e3.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e3.return; n !== null; ) {
          if (qp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (co(o, ""), r.flags &= -33);
          var i = pf(e3);
          Ca(e3, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = pf(e3);
          ka(e3, s, l);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      se(e3, e3.return, a);
    }
    e3.flags &= -3;
  }
  t & 4096 && (e3.flags &= -4097);
}
function Dy(e3, t, n) {
  M = e3, th(e3);
}
function th(e3, t, n) {
  for (var r = (e3.mode & 1) !== 0; M !== null; ) {
    var o = M, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ri;
      if (!l) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || $e;
        s = ri;
        var u = $e;
        if (ri = l, ($e = a) && !u) for (M = o; M !== null; ) l = M, a = l.child, l.tag === 22 && l.memoizedState !== null ? yf(o) : a !== null ? (a.return = l, M = a) : yf(o);
        for (; i !== null; ) M = i, th(i), i = i.sibling;
        M = o, ri = s, $e = u;
      }
      mf(e3);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, M = i) : mf(e3);
  }
}
function mf(e3) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            $e || fl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !$e) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && qc(t, i, r);
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
              qc(t, l, n);
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
                  p !== null && mo(p);
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
            throw Error(_(163));
        }
        $e || t.flags & 512 && xa(t);
      } catch (h) {
        se(t, t.return, h);
      }
    }
    if (t === e3) {
      M = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function gf(e3) {
  for (; M !== null; ) {
    var t = M;
    if (t === e3) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function yf(e3) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fl(4, t);
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
            xa(t);
          } catch (a) {
            se(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            xa(t);
          } catch (a) {
            se(t, l, a);
          }
      }
    } catch (a) {
      se(t, t.return, a);
    }
    if (t === e3) {
      M = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, M = s;
      break;
    }
    M = t.return;
  }
}
var zy = Math.ceil, Yi = Qt.ReactCurrentDispatcher, Tu = Qt.ReactCurrentOwner, at = Qt.ReactCurrentBatchConfig, F = 0, ye = null, de = null, ke = 0, He = 0, cr = Sn(0), he = 0, To = null, Dn = 0, dl = 0, _u = 0, io = null, Le = null, Ru = 0, Tr = 1 / 0, jt = null, Ki = false, Ea = null, dn = null, oi = false, ln = null, Xi = 0, lo = 0, Pa = null, Si = -1, wi = 0;
function ze() {
  return F & 6 ? ue() : Si !== -1 ? Si : Si = ue();
}
function pn(e3) {
  return e3.mode & 1 ? F & 2 && ke !== 0 ? ke & -ke : yy.transition !== null ? (wi === 0 && (wi = jd()), wi) : (e3 = V, e3 !== 0 || (e3 = window.event, e3 = e3 === void 0 ? 16 : Yd(e3.type)), e3) : 1;
}
function St(e3, t, n, r) {
  if (50 < lo) throw lo = 0, Pa = null, Error(_(185));
  Do(e3, n, r), (!(F & 2) || e3 !== ye) && (e3 === ye && (!(F & 2) && (dl |= n), he === 4 && rn(e3, ke)), Be(e3, r), n === 1 && F === 0 && !(t.mode & 1) && (Tr = ue() + 500, al && wn()));
}
function Be(e3, t) {
  var n = e3.callbackNode;
  yg(e3, t);
  var r = Mi(e3, e3 === ye ? ke : 0);
  if (r === 0) n !== null && Pc(n), e3.callbackNode = null, e3.callbackPriority = 0;
  else if (t = r & -r, e3.callbackPriority !== t) {
    if (n != null && Pc(n), t === 1) e3.tag === 0 ? gy(vf.bind(null, e3)) : fp(vf.bind(null, e3)), dy(function() {
      !(F & 6) && wn();
    }), n = null;
    else {
      switch (Fd(r)) {
        case 1:
          n = eu;
          break;
        case 4:
          n = Ld;
          break;
        case 16:
          n = Ni;
          break;
        case 536870912:
          n = bd;
          break;
        default:
          n = Ni;
      }
      n = uh(n, nh.bind(null, e3));
    }
    e3.callbackPriority = t, e3.callbackNode = n;
  }
}
function nh(e3, t) {
  if (Si = -1, wi = 0, F & 6) throw Error(_(327));
  var n = e3.callbackNode;
  if (yr() && e3.callbackNode !== n) return null;
  var r = Mi(e3, e3 === ye ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e3.expiredLanes || t) t = Qi(e3, r);
  else {
    t = r;
    var o = F;
    F |= 2;
    var i = oh();
    (ye !== e3 || ke !== t) && (jt = null, Tr = ue() + 500, Rn(e3, t));
    do
      try {
        Ly();
        break;
      } catch (s) {
        rh(e3, s);
      }
    while (true);
    pu(), Yi.current = i, F = o, de !== null ? t = 0 : (ye = null, ke = 0, t = he);
  }
  if (t !== 0) {
    if (t === 2 && (o = qs(e3), o !== 0 && (r = o, t = Ta(e3, o))), t === 1) throw n = To, Rn(e3, 0), rn(e3, r), Be(e3, ue()), n;
    if (t === 6) rn(e3, r);
    else {
      if (o = e3.current.alternate, !(r & 30) && !Iy(o) && (t = Qi(e3, r), t === 2 && (i = qs(e3), i !== 0 && (r = i, t = Ta(e3, i))), t === 1)) throw n = To, Rn(e3, 0), rn(e3, r), Be(e3, ue()), n;
      switch (e3.finishedWork = o, e3.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          Cn(e3, Le, jt);
          break;
        case 3:
          if (rn(e3, r), (r & 130023424) === r && (t = Ru + 500 - ue(), 10 < t)) {
            if (Mi(e3, 0) !== 0) break;
            if (o = e3.suspendedLanes, (o & r) !== r) {
              ze(), e3.pingedLanes |= e3.suspendedLanes & o;
              break;
            }
            e3.timeoutHandle = la(Cn.bind(null, e3, Le, jt), t);
            break;
          }
          Cn(e3, Le, jt);
          break;
        case 4:
          if (rn(e3, r), (r & 4194240) === r) break;
          for (t = e3.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - vt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zy(r / 1960)) - r, 10 < r) {
            e3.timeoutHandle = la(Cn.bind(null, e3, Le, jt), r);
            break;
          }
          Cn(e3, Le, jt);
          break;
        case 5:
          Cn(e3, Le, jt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Be(e3, ue()), e3.callbackNode === n ? nh.bind(null, e3) : null;
}
function Ta(e3, t) {
  var n = io;
  return e3.current.memoizedState.isDehydrated && (Rn(e3, t).flags |= 256), e3 = Qi(e3, t), e3 !== 2 && (t = Le, Le = n, t !== null && _a(t)), e3;
}
function _a(e3) {
  Le === null ? Le = e3 : Le.push.apply(Le, e3);
}
function Iy(e3) {
  for (var t = e3; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!wt(i(), o)) return false;
        } catch {
          return false;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e3) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e3) return true;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return true;
}
function rn(e3, t) {
  for (t &= ~_u, t &= ~dl, e3.suspendedLanes |= t, e3.pingedLanes &= ~t, e3 = e3.expirationTimes; 0 < t; ) {
    var n = 31 - vt(t), r = 1 << n;
    e3[n] = -1, t &= ~r;
  }
}
function vf(e3) {
  if (F & 6) throw Error(_(327));
  yr();
  var t = Mi(e3, 0);
  if (!(t & 1)) return Be(e3, ue()), null;
  var n = Qi(e3, t);
  if (e3.tag !== 0 && n === 2) {
    var r = qs(e3);
    r !== 0 && (t = r, n = Ta(e3, r));
  }
  if (n === 1) throw n = To, Rn(e3, 0), rn(e3, t), Be(e3, ue()), n;
  if (n === 6) throw Error(_(345));
  return e3.finishedWork = e3.current.alternate, e3.finishedLanes = t, Cn(e3, Le, jt), Be(e3, ue()), null;
}
function $u(e3, t) {
  var n = F;
  F |= 1;
  try {
    return e3(t);
  } finally {
    F = n, F === 0 && (Tr = ue() + 500, al && wn());
  }
}
function zn(e3) {
  ln !== null && ln.tag === 0 && !(F & 6) && yr();
  var t = F;
  F |= 1;
  var n = at.transition, r = V;
  try {
    if (at.transition = null, V = 1, e3) return e3();
  } finally {
    V = r, at.transition = n, F = t, !(F & 6) && wn();
  }
}
function Nu() {
  He = cr.current, q(cr);
}
function Rn(e3, t) {
  e3.finishedWork = null, e3.finishedLanes = 0;
  var n = e3.timeoutHandle;
  if (n !== -1 && (e3.timeoutHandle = -1, fy(n)), de !== null) for (n = de.return; n !== null; ) {
    var r = n;
    switch (cu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ai();
        break;
      case 3:
        Er(), q(je), q(Ne), Su();
        break;
      case 5:
        vu(r);
        break;
      case 4:
        Er();
        break;
      case 13:
        q(ne);
        break;
      case 19:
        q(ne);
        break;
      case 10:
        hu(r.type._context);
        break;
      case 22:
      case 23:
        Nu();
    }
    n = n.return;
  }
  if (ye = e3, de = e3 = hn(e3.current, null), ke = He = t, he = 0, To = null, _u = dl = Dn = 0, Le = io = null, Pn !== null) {
    for (t = 0; t < Pn.length; t++) if (n = Pn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    Pn = null;
  }
  return e3;
}
function rh(e3, t) {
  do {
    var n = de;
    try {
      if (pu(), gi.current = Hi, Vi) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Vi = false;
      }
      if (On = 0, ge = pe = re = null, ro = false, Co = 0, Tu.current = null, n === null || n.return === null) {
        he = 1, To = t, de = null;
        break;
      }
      e: {
        var i = e3, l = n.return, s = n, a = t;
        if (t = ke, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, m = s, p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = m.alternate;
            h ? (m.updateQueue = h.updateQueue, m.memoizedState = h.memoizedState, m.lanes = h.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var w = of(l);
          if (w !== null) {
            w.flags &= -257, lf(w, l, s, i, t), w.mode & 1 && rf(i, u, t), t = w, a = u;
            var v = t.updateQueue;
            if (v === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(a), t.updateQueue = S;
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              rf(i, u, t), Mu();
              break e;
            }
            a = Error(_(426));
          }
        } else if (ee && s.mode & 1) {
          var P = of(l);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), lf(P, l, s, i, t), fu(Pr(a, s));
            break e;
          }
        }
        i = a = Pr(a, s), he !== 4 && (he = 2), io === null ? io = [i] : io.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Fp(i, a, t);
              Zc(i, d);
              break e;
            case 1:
              s = a;
              var f = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (dn === null || !dn.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = Bp(i, s, t);
                Zc(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      lh(n);
    } catch (x) {
      t = x, de === n && n !== null && (de = n = n.return);
      continue;
    }
    break;
  } while (true);
}
function oh() {
  var e3 = Yi.current;
  return Yi.current = Hi, e3 === null ? Hi : e3;
}
function Mu() {
  (he === 0 || he === 3 || he === 2) && (he = 4), ye === null || !(Dn & 268435455) && !(dl & 268435455) || rn(ye, ke);
}
function Qi(e3, t) {
  var n = F;
  F |= 2;
  var r = oh();
  (ye !== e3 || ke !== t) && (jt = null, Rn(e3, t));
  do
    try {
      Ay();
      break;
    } catch (o) {
      rh(e3, o);
    }
  while (true);
  if (pu(), F = n, Yi.current = r, de !== null) throw Error(_(261));
  return ye = null, ke = 0, he;
}
function Ay() {
  for (; de !== null; ) ih(de);
}
function Ly() {
  for (; de !== null && !ag(); ) ih(de);
}
function ih(e3) {
  var t = ah(e3.alternate, e3, He);
  e3.memoizedProps = e3.pendingProps, t === null ? lh(e3) : de = t, Tu.current = null;
}
function lh(e3) {
  var t = e3;
  do {
    var n = t.alternate;
    if (e3 = t.return, t.flags & 32768) {
      if (n = Ny(n, t), n !== null) {
        n.flags &= 32767, de = n;
        return;
      }
      if (e3 !== null) e3.flags |= 32768, e3.subtreeFlags = 0, e3.deletions = null;
      else {
        he = 6, de = null;
        return;
      }
    } else if (n = $y(n, t, He), n !== null) {
      de = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      de = t;
      return;
    }
    de = t = e3;
  } while (t !== null);
  he === 0 && (he = 5);
}
function Cn(e3, t, n) {
  var r = V, o = at.transition;
  try {
    at.transition = null, V = 1, by(e3, t, n, r);
  } finally {
    at.transition = o, V = r;
  }
  return null;
}
function by(e3, t, n, r) {
  do
    yr();
  while (ln !== null);
  if (F & 6) throw Error(_(327));
  n = e3.finishedWork;
  var o = e3.finishedLanes;
  if (n === null) return null;
  if (e3.finishedWork = null, e3.finishedLanes = 0, n === e3.current) throw Error(_(177));
  e3.callbackNode = null, e3.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (vg(e3, i), e3 === ye && (de = ye = null, ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || oi || (oi = true, uh(Ni, function() {
    return yr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = at.transition, at.transition = null;
    var l = V;
    V = 1;
    var s = F;
    F |= 4, Tu.current = null, Oy(e3, n), eh(n, e3), oy(oa), Oi = !!ra, oa = ra = null, e3.current = n, Dy(n), ug(), F = s, V = l, at.transition = i;
  } else e3.current = n;
  if (oi && (oi = false, ln = e3, Xi = o), i = e3.pendingLanes, i === 0 && (dn = null), dg(n.stateNode), Be(e3, ue()), t !== null) for (r = e3.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ki) throw Ki = false, e3 = Ea, Ea = null, e3;
  return Xi & 1 && e3.tag !== 0 && yr(), i = e3.pendingLanes, i & 1 ? e3 === Pa ? lo++ : (lo = 0, Pa = e3) : lo = 0, wn(), null;
}
function yr() {
  if (ln !== null) {
    var e3 = Fd(Xi), t = at.transition, n = V;
    try {
      if (at.transition = null, V = 16 > e3 ? 16 : e3, ln === null) var r = false;
      else {
        if (e3 = ln, ln = null, Xi = 0, F & 6) throw Error(_(331));
        var o = F;
        for (F |= 4, M = e3.current; M !== null; ) {
          var i = M, l = i.child;
          if (M.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (M = u; M !== null; ) {
                  var m = M;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      oo(8, m, i);
                  }
                  var p = m.child;
                  if (p !== null) p.return = m, M = p;
                  else for (; M !== null; ) {
                    m = M;
                    var h = m.sibling, w = m.return;
                    if (Zp(m), m === u) {
                      M = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = w, M = h;
                      break;
                    }
                    M = w;
                  }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var S = v.child;
                if (S !== null) {
                  v.child = null;
                  do {
                    var P = S.sibling;
                    S.sibling = null, S = P;
                  } while (S !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, M = l;
          else e: for (; M !== null; ) {
            if (i = M, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                oo(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, M = d;
              break e;
            }
            M = i.return;
          }
        }
        var f = e3.current;
        for (M = f; M !== null; ) {
          l = M;
          var g = l.child;
          if (l.subtreeFlags & 2064 && g !== null) g.return = l, M = g;
          else e: for (l = f; M !== null; ) {
            if (s = M, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  fl(9, s);
              }
            } catch (x) {
              se(s, s.return, x);
            }
            if (s === l) {
              M = null;
              break e;
            }
            var y = s.sibling;
            if (y !== null) {
              y.return = s.return, M = y;
              break e;
            }
            M = s.return;
          }
        }
        if (F = o, wn(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
          Nt.onPostCommitFiberRoot(rl, e3);
        } catch {
        }
        r = true;
      }
      return r;
    } finally {
      V = n, at.transition = t;
    }
  }
  return false;
}
function Sf(e3, t, n) {
  t = Pr(n, t), t = Fp(e3, t, 1), e3 = fn(e3, t, 1), t = ze(), e3 !== null && (Do(e3, 1, t), Be(e3, t));
}
function se(e3, t, n) {
  if (e3.tag === 3) Sf(e3, e3, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Sf(t, e3, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dn === null || !dn.has(r))) {
        e3 = Pr(n, e3), e3 = Bp(t, e3, 1), t = fn(t, e3, 1), e3 = ze(), t !== null && (Do(t, 1, e3), Be(t, e3));
        break;
      }
    }
    t = t.return;
  }
}
function jy(e3, t, n) {
  var r = e3.pingCache;
  r !== null && r.delete(t), t = ze(), e3.pingedLanes |= e3.suspendedLanes & n, ye === e3 && (ke & n) === n && (he === 4 || he === 3 && (ke & 130023424) === ke && 500 > ue() - Ru ? Rn(e3, 0) : _u |= n), Be(e3, t);
}
function sh(e3, t) {
  t === 0 && (e3.mode & 1 ? (t = Xo, Xo <<= 1, !(Xo & 130023424) && (Xo = 4194304)) : t = 1);
  var n = ze();
  e3 = Yt(e3, t), e3 !== null && (Do(e3, t, n), Be(e3, n));
}
function Fy(e3) {
  var t = e3.memoizedState, n = 0;
  t !== null && (n = t.retryLane), sh(e3, n);
}
function By(e3, t) {
  var n = 0;
  switch (e3.tag) {
    case 13:
      var r = e3.stateNode, o = e3.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e3.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), sh(e3, n);
}
var ah;
ah = function(e3, t, n) {
  if (e3 !== null) if (e3.memoizedProps !== t.pendingProps || je.current) be = true;
  else {
    if (!(e3.lanes & n) && !(t.flags & 128)) return be = false, Ry(e3, t, n);
    be = !!(e3.flags & 131072);
  }
  else be = false, ee && t.flags & 1048576 && dp(t, ji, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      vi(e3, t), e3 = t.pendingProps;
      var o = xr(t, Ne.current);
      gr(t, n), o = xu(null, t, r, e3, o, n);
      var i = ku();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Fe(r) ? (i = true, Li(t)) : i = false, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, gu(t), o.updater = cl, t.stateNode = o, o._reactInternals = t, pa(t, r, e3, n), t = ga(null, t, r, true, i, n)) : (t.tag = 0, ee && i && uu(t), De(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (vi(e3, t), e3 = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Wy(r), e3 = mt(r, e3), o) {
          case 0:
            t = ma(null, t, r, e3, n);
            break e;
          case 1:
            t = uf(null, t, r, e3, n);
            break e;
          case 11:
            t = sf(null, t, r, e3, n);
            break e;
          case 14:
            t = af(null, t, r, mt(r.type, e3), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), ma(e3, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), uf(e3, t, r, o, n);
    case 3:
      e: {
        if (Hp(t), e3 === null) throw Error(_(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, vp(e3, t), Ui(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: false, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Pr(Error(_(423)), t), t = cf(e3, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Pr(Error(_(424)), t), t = cf(e3, t, r, n, o);
          break e;
        } else for (Ke = cn(t.stateNode.containerInfo.firstChild), Xe = t, ee = true, yt = null, n = gp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (kr(), r === o) {
            t = Kt(e3, t, n);
            break e;
          }
          De(e3, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Sp(t), e3 === null && ca(t), r = t.type, o = t.pendingProps, i = e3 !== null ? e3.memoizedProps : null, l = o.children, ia(r, o) ? l = null : i !== null && ia(r, i) && (t.flags |= 32), Vp(e3, t), De(e3, t, l, n), t.child;
    case 6:
      return e3 === null && ca(t), null;
    case 13:
      return Yp(e3, t, n);
    case 4:
      return yu(t, t.stateNode.containerInfo), r = t.pendingProps, e3 === null ? t.child = Cr(t, null, r, n) : De(e3, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), sf(e3, t, r, o, n);
    case 7:
      return De(e3, t, t.pendingProps, n), t.child;
    case 8:
      return De(e3, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e3, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, G(Fi, r._currentValue), r._currentValue = l, i !== null) if (wt(i.value, l)) {
          if (i.children === o.children && !je.current) {
            t = Kt(e3, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            l = i.child;
            for (var a = s.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Wt(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var m = u.pending;
                    m === null ? a.next = a : (a.next = m.next, m.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), fa(i.return, n, t), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (l = i.return, l === null) throw Error(_(341));
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), fa(l, n, t), l = i.sibling;
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
        De(e3, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, gr(t, n), o = ut(o), r = r(o), t.flags |= 1, De(e3, t, r, n), t.child;
    case 14:
      return r = t.type, o = mt(r, t.pendingProps), o = mt(r.type, o), af(e3, t, r, o, n);
    case 15:
      return Up(e3, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), vi(e3, t), t.tag = 1, Fe(r) ? (e3 = true, Li(t)) : e3 = false, gr(t, n), jp(t, r, o), pa(t, r, o, n), ga(null, t, r, true, e3, n);
    case 19:
      return Kp(e3, t, n);
    case 22:
      return Wp(e3, t, n);
  }
  throw Error(_(156, t.tag));
};
function uh(e3, t) {
  return Ad(e3, t);
}
function Uy(e3, t, n, r) {
  this.tag = e3, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function st(e3, t, n, r) {
  return new Uy(e3, t, n, r);
}
function Ou(e3) {
  return e3 = e3.prototype, !(!e3 || !e3.isReactComponent);
}
function Wy(e3) {
  if (typeof e3 == "function") return Ou(e3) ? 1 : 0;
  if (e3 != null) {
    if (e3 = e3.$$typeof, e3 === Za) return 11;
    if (e3 === qa) return 14;
  }
  return 2;
}
function hn(e3, t) {
  var n = e3.alternate;
  return n === null ? (n = st(e3.tag, t, e3.key, e3.mode), n.elementType = e3.elementType, n.type = e3.type, n.stateNode = e3.stateNode, n.alternate = e3, e3.alternate = n) : (n.pendingProps = t, n.type = e3.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e3.flags & 14680064, n.childLanes = e3.childLanes, n.lanes = e3.lanes, n.child = e3.child, n.memoizedProps = e3.memoizedProps, n.memoizedState = e3.memoizedState, n.updateQueue = e3.updateQueue, t = e3.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e3.sibling, n.index = e3.index, n.ref = e3.ref, n;
}
function xi(e3, t, n, r, o, i) {
  var l = 2;
  if (r = e3, typeof e3 == "function") Ou(e3) && (l = 1);
  else if (typeof e3 == "string") l = 5;
  else e: switch (e3) {
    case er:
      return $n(n.children, o, i, t);
    case Ga:
      l = 8, o |= 8;
      break;
    case Ls:
      return e3 = st(12, n, t, o | 2), e3.elementType = Ls, e3.lanes = i, e3;
    case bs:
      return e3 = st(13, n, t, o), e3.elementType = bs, e3.lanes = i, e3;
    case js:
      return e3 = st(19, n, t, o), e3.elementType = js, e3.lanes = i, e3;
    case Sd:
      return pl(n, o, i, t);
    default:
      if (typeof e3 == "object" && e3 !== null) switch (e3.$$typeof) {
        case yd:
          l = 10;
          break e;
        case vd:
          l = 9;
          break e;
        case Za:
          l = 11;
          break e;
        case qa:
          l = 14;
          break e;
        case en:
          l = 16, r = null;
          break e;
      }
      throw Error(_(130, e3 == null ? e3 : typeof e3, ""));
  }
  return t = st(l, n, t, o), t.elementType = e3, t.type = r, t.lanes = i, t;
}
function $n(e3, t, n, r) {
  return e3 = st(7, e3, r, t), e3.lanes = n, e3;
}
function pl(e3, t, n, r) {
  return e3 = st(22, e3, r, t), e3.elementType = Sd, e3.lanes = n, e3.stateNode = { isHidden: false }, e3;
}
function Ps(e3, t, n) {
  return e3 = st(6, e3, null, t), e3.lanes = n, e3;
}
function Ts(e3, t, n) {
  return t = st(4, e3.children !== null ? e3.children : [], e3.key, t), t.lanes = n, t.stateNode = { containerInfo: e3.containerInfo, pendingChildren: null, implementation: e3.implementation }, t;
}
function Vy(e3, t, n, r, o) {
  this.tag = t, this.containerInfo = e3, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ls(0), this.expirationTimes = ls(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ls(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Du(e3, t, n, r, o, i, l, s, a) {
  return e3 = new Vy(e3, t, n, s, a), t === 1 ? (t = 1, i === true && (t |= 8)) : t = 0, i = st(3, null, null, t), e3.current = i, i.stateNode = e3, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gu(i), e3;
}
function Hy(e3, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jn, key: r == null ? null : "" + r, children: e3, containerInfo: t, implementation: n };
}
function ch(e3) {
  if (!e3) return gn;
  e3 = e3._reactInternals;
  e: {
    if (jn(e3) !== e3 || e3.tag !== 1) throw Error(_(170));
    var t = e3;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e3.tag === 1) {
    var n = e3.type;
    if (Fe(n)) return cp(e3, n, t);
  }
  return t;
}
function fh(e3, t, n, r, o, i, l, s, a) {
  return e3 = Du(n, r, true, e3, o, i, l, s, a), e3.context = ch(null), n = e3.current, r = ze(), o = pn(n), i = Wt(r, o), i.callback = t ?? null, fn(n, i, o), e3.current.lanes = o, Do(e3, o, r), Be(e3, r), e3;
}
function hl(e3, t, n, r) {
  var o = t.current, i = ze(), l = pn(o);
  return n = ch(n), t.context === null ? t.context = n : t.pendingContext = n, t = Wt(i, l), t.payload = { element: e3 }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e3 = fn(o, t, l), e3 !== null && (St(e3, o, l, i), mi(e3, o, l)), l;
}
function Gi(e3) {
  if (e3 = e3.current, !e3.child) return null;
  switch (e3.child.tag) {
    case 5:
      return e3.child.stateNode;
    default:
      return e3.child.stateNode;
  }
}
function wf(e3, t) {
  if (e3 = e3.memoizedState, e3 !== null && e3.dehydrated !== null) {
    var n = e3.retryLane;
    e3.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zu(e3, t) {
  wf(e3, t), (e3 = e3.alternate) && wf(e3, t);
}
function Yy() {
  return null;
}
var dh = typeof reportError == "function" ? reportError : function(e3) {
  console.error(e3);
};
function Iu(e3) {
  this._internalRoot = e3;
}
ml.prototype.render = Iu.prototype.render = function(e3) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  hl(e3, t, null, null);
};
ml.prototype.unmount = Iu.prototype.unmount = function() {
  var e3 = this._internalRoot;
  if (e3 !== null) {
    this._internalRoot = null;
    var t = e3.containerInfo;
    zn(function() {
      hl(null, e3, null, null);
    }), t[Ht] = null;
  }
};
function ml(e3) {
  this._internalRoot = e3;
}
ml.prototype.unstable_scheduleHydration = function(e3) {
  if (e3) {
    var t = Wd();
    e3 = { blockedOn: null, target: e3, priority: t };
    for (var n = 0; n < nn.length && t !== 0 && t < nn[n].priority; n++) ;
    nn.splice(n, 0, e3), n === 0 && Hd(e3);
  }
};
function Au(e3) {
  return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11);
}
function gl(e3) {
  return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11 && (e3.nodeType !== 8 || e3.nodeValue !== " react-mount-point-unstable "));
}
function xf() {
}
function Ky(e3, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Gi(l);
        i.call(u);
      };
    }
    var l = fh(t, r, e3, 0, null, false, false, "", xf);
    return e3._reactRootContainer = l, e3[Ht] = l.current, vo(e3.nodeType === 8 ? e3.parentNode : e3), zn(), l;
  }
  for (; o = e3.lastChild; ) e3.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Gi(a);
      s.call(u);
    };
  }
  var a = Du(e3, 0, false, null, null, false, false, "", xf);
  return e3._reactRootContainer = a, e3[Ht] = a.current, vo(e3.nodeType === 8 ? e3.parentNode : e3), zn(function() {
    hl(t, a, n, r);
  }), a;
}
function yl(e3, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = Gi(l);
        s.call(a);
      };
    }
    hl(t, l, e3, o);
  } else l = Ky(n, t, e3, o, r);
  return Gi(l);
}
Bd = function(e3) {
  switch (e3.tag) {
    case 3:
      var t = e3.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xr(t.pendingLanes);
        n !== 0 && (tu(t, n | 1), Be(t, ue()), !(F & 6) && (Tr = ue() + 500, wn()));
      }
      break;
    case 13:
      zn(function() {
        var r = Yt(e3, 1);
        if (r !== null) {
          var o = ze();
          St(r, e3, 1, o);
        }
      }), zu(e3, 1);
  }
};
nu = function(e3) {
  if (e3.tag === 13) {
    var t = Yt(e3, 134217728);
    if (t !== null) {
      var n = ze();
      St(t, e3, 134217728, n);
    }
    zu(e3, 134217728);
  }
};
Ud = function(e3) {
  if (e3.tag === 13) {
    var t = pn(e3), n = Yt(e3, t);
    if (n !== null) {
      var r = ze();
      St(n, e3, t, r);
    }
    zu(e3, t);
  }
};
Wd = function() {
  return V;
};
Vd = function(e3, t) {
  var n = V;
  try {
    return V = e3, t();
  } finally {
    V = n;
  }
};
Qs = function(e3, t, n) {
  switch (t) {
    case "input":
      if (Us(e3, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e3; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e3 && r.form === e3.form) {
            var o = sl(r);
            if (!o) throw Error(_(90));
            xd(r), Us(r, o);
          }
        }
      }
      break;
    case "textarea":
      Cd(e3, n);
      break;
    case "select":
      t = n.value, t != null && dr(e3, !!n.multiple, t, false);
  }
};
Nd = $u;
Md = zn;
var Xy = { usingClientEntryPoint: false, Events: [Io, or, sl, Rd, $d, $u] }, Ur = { findFiberByHostInstance: En, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Qy = { bundleType: Ur.bundleType, version: Ur.version, rendererPackageName: Ur.rendererPackageName, rendererConfig: Ur.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Qt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e3) {
  return e3 = zd(e3), e3 === null ? null : e3.stateNode;
}, findFiberByHostInstance: Ur.findFiberByHostInstance || Yy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ii.isDisabled && ii.supportsFiber) try {
    rl = ii.inject(Qy), Nt = ii;
  } catch {
  }
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xy;
Je.createPortal = function(e3, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Au(t)) throw Error(_(200));
  return Hy(e3, t, null, n);
};
Je.createRoot = function(e3, t) {
  if (!Au(e3)) throw Error(_(299));
  var n = false, r = "", o = dh;
  return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Du(e3, 1, false, null, null, n, false, r, o), e3[Ht] = t.current, vo(e3.nodeType === 8 ? e3.parentNode : e3), new Iu(t);
};
Je.findDOMNode = function(e3) {
  if (e3 == null) return null;
  if (e3.nodeType === 1) return e3;
  var t = e3._reactInternals;
  if (t === void 0) throw typeof e3.render == "function" ? Error(_(188)) : (e3 = Object.keys(e3).join(","), Error(_(268, e3)));
  return e3 = zd(t), e3 = e3 === null ? null : e3.stateNode, e3;
};
Je.flushSync = function(e3) {
  return zn(e3);
};
Je.hydrate = function(e3, t, n) {
  if (!gl(t)) throw Error(_(200));
  return yl(null, e3, t, true, n);
};
Je.hydrateRoot = function(e3, t, n) {
  if (!Au(e3)) throw Error(_(405));
  var r = n != null && n.hydratedSources || null, o = false, i = "", l = dh;
  if (n != null && (n.unstable_strictMode === true && (o = true), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = fh(t, null, e3, 1, n ?? null, o, false, i, l), e3[Ht] = t.current, vo(e3), r) for (e3 = 0; e3 < r.length; e3++) n = r[e3], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new ml(t);
};
Je.render = function(e3, t, n) {
  if (!gl(t)) throw Error(_(200));
  return yl(null, e3, t, false, n);
};
Je.unmountComponentAtNode = function(e3) {
  if (!gl(e3)) throw Error(_(40));
  return e3._reactRootContainer ? (zn(function() {
    yl(null, null, e3, false, function() {
      e3._reactRootContainer = null, e3[Ht] = null;
    });
  }), true) : false;
};
Je.unstable_batchedUpdates = $u;
Je.unstable_renderSubtreeIntoContainer = function(e3, t, n, r) {
  if (!gl(n)) throw Error(_(200));
  if (e3 == null || e3._reactInternals === void 0) throw Error(_(38));
  return yl(e3, t, n, false, r);
};
Je.version = "18.3.1-next-f1338f8080-20240426";
function ph() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ph);
  } catch (e3) {
    console.error(e3);
  }
}
ph(), pd.exports = Je;
var Lu = pd.exports, kf = Lu;
Is.createRoot = kf.createRoot, Is.hydrateRoot = kf.hydrateRoot;
const _o = { black: "#000", white: "#fff" }, Kn = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" }, Xn = { 50: "#f3e5f5", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 700: "#7b1fa2" }, Qn = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" }, Gn = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" }, Zn = { 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20" }, Wr = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" }, Gy = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" };
function In(e3, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e3}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e3}; visit ${n} for the full message.`;
}
const bu = "$$material";
function Zi() {
  return Zi = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e3[r] = n[r]);
    }
    return e3;
  }, Zi.apply(null, arguments);
}
function Zy(e3) {
  if (e3.sheet) return e3.sheet;
  for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e3) return document.styleSheets[t];
}
function qy(e3) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e3.key), e3.nonce !== void 0 && t.setAttribute("nonce", e3.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Jy = function() {
  function e3(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? true : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e3.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(qy(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Zy(o);
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
  }, e3;
}(), _e = "-ms-", qi = "-moz-", B = "-webkit-", hh = "comm", ju = "rule", Fu = "decl", e0 = "@import", mh = "@keyframes", t0 = "@layer", n0 = Math.abs, vl = String.fromCharCode, r0 = Object.assign;
function o0(e3, t) {
  return xe(e3, 0) ^ 45 ? (((t << 2 ^ xe(e3, 0)) << 2 ^ xe(e3, 1)) << 2 ^ xe(e3, 2)) << 2 ^ xe(e3, 3) : 0;
}
function gh(e3) {
  return e3.trim();
}
function i0(e3, t) {
  return (e3 = t.exec(e3)) ? e3[0] : e3;
}
function U(e3, t, n) {
  return e3.replace(t, n);
}
function Ra(e3, t) {
  return e3.indexOf(t);
}
function xe(e3, t) {
  return e3.charCodeAt(t) | 0;
}
function Ro(e3, t, n) {
  return e3.slice(t, n);
}
function Pt(e3) {
  return e3.length;
}
function Bu(e3) {
  return e3.length;
}
function li(e3, t) {
  return t.push(e3), e3;
}
function l0(e3, t) {
  return e3.map(t).join("");
}
var Sl = 1, _r = 1, yh = 0, Ue = 0, fe = 0, Mr = "";
function wl(e3, t, n, r, o, i, l) {
  return { value: e3, root: t, parent: n, type: r, props: o, children: i, line: Sl, column: _r, length: l, return: "" };
}
function Vr(e3, t) {
  return r0(wl("", null, null, "", null, null, 0), e3, { length: -e3.length }, t);
}
function s0() {
  return fe;
}
function a0() {
  return fe = Ue > 0 ? xe(Mr, --Ue) : 0, _r--, fe === 10 && (_r = 1, Sl--), fe;
}
function Qe() {
  return fe = Ue < yh ? xe(Mr, Ue++) : 0, _r++, fe === 10 && (_r = 1, Sl++), fe;
}
function Ot() {
  return xe(Mr, Ue);
}
function ki() {
  return Ue;
}
function Lo(e3, t) {
  return Ro(Mr, e3, t);
}
function $o(e3) {
  switch (e3) {
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
function vh(e3) {
  return Sl = _r = 1, yh = Pt(Mr = e3), Ue = 0, [];
}
function Sh(e3) {
  return Mr = "", e3;
}
function Ci(e3) {
  return gh(Lo(Ue - 1, $a(e3 === 91 ? e3 + 2 : e3 === 40 ? e3 + 1 : e3)));
}
function u0(e3) {
  for (; (fe = Ot()) && fe < 33; ) Qe();
  return $o(e3) > 2 || $o(fe) > 3 ? "" : " ";
}
function c0(e3, t) {
  for (; --t && Qe() && !(fe < 48 || fe > 102 || fe > 57 && fe < 65 || fe > 70 && fe < 97); ) ;
  return Lo(e3, ki() + (t < 6 && Ot() == 32 && Qe() == 32));
}
function $a(e3) {
  for (; Qe(); ) switch (fe) {
    case e3:
      return Ue;
    case 34:
    case 39:
      e3 !== 34 && e3 !== 39 && $a(fe);
      break;
    case 40:
      e3 === 41 && $a(e3);
      break;
    case 92:
      Qe();
      break;
  }
  return Ue;
}
function f0(e3, t) {
  for (; Qe() && e3 + fe !== 57; ) if (e3 + fe === 84 && Ot() === 47) break;
  return "/*" + Lo(t, Ue - 1) + "*" + vl(e3 === 47 ? e3 : Qe());
}
function d0(e3) {
  for (; !$o(Ot()); ) Qe();
  return Lo(e3, Ue);
}
function p0(e3) {
  return Sh(Ei("", null, null, null, [""], e3 = vh(e3), 0, [0], e3));
}
function Ei(e3, t, n, r, o, i, l, s, a) {
  for (var u = 0, m = 0, p = l, h = 0, w = 0, v = 0, S = 1, P = 1, d = 1, f = 0, g = "", y = o, x = i, k = r, E = g; P; ) switch (v = f, f = Qe()) {
    case 40:
      if (v != 108 && xe(E, p - 1) == 58) {
        Ra(E += U(Ci(f), "&", "&\f"), "&\f") != -1 && (d = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      E += Ci(f);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      E += u0(v);
      break;
    case 92:
      E += c0(ki() - 1, 7);
      continue;
    case 47:
      switch (Ot()) {
        case 42:
        case 47:
          li(h0(f0(Qe(), ki()), t, n), a);
          break;
        default:
          E += "/";
      }
      break;
    case 123 * S:
      s[u++] = Pt(E) * d;
    case 125 * S:
    case 59:
    case 0:
      switch (f) {
        case 0:
        case 125:
          P = 0;
        case 59 + m:
          d == -1 && (E = U(E, /\f/g, "")), w > 0 && Pt(E) - p && li(w > 32 ? Ef(E + ";", r, n, p - 1) : Ef(U(E, " ", "") + ";", r, n, p - 2), a);
          break;
        case 59:
          E += ";";
        default:
          if (li(k = Cf(E, t, n, u, m, o, s, g, y = [], x = [], p), i), f === 123) if (m === 0) Ei(E, t, k, k, y, i, p, s, x);
          else switch (h === 99 && xe(E, 3) === 110 ? 100 : h) {
            case 100:
            case 108:
            case 109:
            case 115:
              Ei(e3, k, k, r && li(Cf(e3, k, k, 0, 0, o, s, g, o, y = [], p), x), o, x, p, s, r ? y : x);
              break;
            default:
              Ei(E, k, k, k, [""], x, 0, s, x);
          }
      }
      u = m = w = 0, S = d = 1, g = E = "", p = l;
      break;
    case 58:
      p = 1 + Pt(E), w = v;
    default:
      if (S < 1) {
        if (f == 123) --S;
        else if (f == 125 && S++ == 0 && a0() == 125) continue;
      }
      switch (E += vl(f), f * S) {
        case 38:
          d = m > 0 ? 1 : (E += "\f", -1);
          break;
        case 44:
          s[u++] = (Pt(E) - 1) * d, d = 1;
          break;
        case 64:
          Ot() === 45 && (E += Ci(Qe())), h = Ot(), m = p = Pt(g = E += d0(ki())), f++;
          break;
        case 45:
          v === 45 && Pt(E) == 2 && (S = 0);
      }
  }
  return i;
}
function Cf(e3, t, n, r, o, i, l, s, a, u, m) {
  for (var p = o - 1, h = o === 0 ? i : [""], w = Bu(h), v = 0, S = 0, P = 0; v < r; ++v) for (var d = 0, f = Ro(e3, p + 1, p = n0(S = l[v])), g = e3; d < w; ++d) (g = gh(S > 0 ? h[d] + " " + f : U(f, /&\f/g, h[d]))) && (a[P++] = g);
  return wl(e3, t, n, o === 0 ? ju : s, a, u, m);
}
function h0(e3, t, n) {
  return wl(e3, t, n, hh, vl(s0()), Ro(e3, 2, -2), 0);
}
function Ef(e3, t, n, r) {
  return wl(e3, t, n, Fu, Ro(e3, 0, r), Ro(e3, r + 1, -1), r);
}
function vr(e3, t) {
  for (var n = "", r = Bu(e3), o = 0; o < r; o++) n += t(e3[o], o, e3, t) || "";
  return n;
}
function m0(e3, t, n, r) {
  switch (e3.type) {
    case t0:
      if (e3.children.length) break;
    case e0:
    case Fu:
      return e3.return = e3.return || e3.value;
    case hh:
      return "";
    case mh:
      return e3.return = e3.value + "{" + vr(e3.children, r) + "}";
    case ju:
      e3.value = e3.props.join(",");
  }
  return Pt(n = vr(e3.children, r)) ? e3.return = e3.value + "{" + n + "}" : "";
}
function g0(e3) {
  var t = Bu(e3);
  return function(n, r, o, i) {
    for (var l = "", s = 0; s < t; s++) l += e3[s](n, r, o, i) || "";
    return l;
  };
}
function y0(e3) {
  return function(t) {
    t.root || (t = t.return) && e3(t);
  };
}
function wh(e3) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e3(n)), t[n];
  };
}
var v0 = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Ot(), o === 38 && i === 12 && (n[r] = 1), !$o(i); ) Qe();
  return Lo(t, Ue);
}, S0 = function(t, n) {
  var r = -1, o = 44;
  do
    switch ($o(o)) {
      case 0:
        o === 38 && Ot() === 12 && (n[r] = 1), t[r] += v0(Ue - 1, n, r);
        break;
      case 2:
        t[r] += Ci(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Ot() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += vl(o);
    }
  while (o = Qe());
  return t;
}, w0 = function(t, n) {
  return Sh(S0(vh(t), n));
}, Pf = /* @__PURE__ */ new WeakMap(), x0 = function(t) {
  if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Pf.get(r)) && !o) {
      Pf.set(t, true);
      for (var i = [], l = w0(n, i), s = r.props, a = 0, u = 0; a < l.length; a++) for (var m = 0; m < s.length; m++, u++) t.props[u] = i[a] ? l[a].replace(/&\f/g, s[m]) : s[m] + " " + l[a];
    }
  }
}, k0 = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function xh(e3, t) {
  switch (o0(e3, t)) {
    case 5103:
      return B + "print-" + e3 + e3;
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
      return B + e3 + e3;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return B + e3 + qi + e3 + _e + e3 + e3;
    case 6828:
    case 4268:
      return B + e3 + _e + e3 + e3;
    case 6165:
      return B + e3 + _e + "flex-" + e3 + e3;
    case 5187:
      return B + e3 + U(e3, /(\w+).+(:[^]+)/, B + "box-$1$2" + _e + "flex-$1$2") + e3;
    case 5443:
      return B + e3 + _e + "flex-item-" + U(e3, /flex-|-self/, "") + e3;
    case 4675:
      return B + e3 + _e + "flex-line-pack" + U(e3, /align-content|flex-|-self/, "") + e3;
    case 5548:
      return B + e3 + _e + U(e3, "shrink", "negative") + e3;
    case 5292:
      return B + e3 + _e + U(e3, "basis", "preferred-size") + e3;
    case 6060:
      return B + "box-" + U(e3, "-grow", "") + B + e3 + _e + U(e3, "grow", "positive") + e3;
    case 4554:
      return B + U(e3, /([^-])(transform)/g, "$1" + B + "$2") + e3;
    case 6187:
      return U(U(U(e3, /(zoom-|grab)/, B + "$1"), /(image-set)/, B + "$1"), e3, "") + e3;
    case 5495:
    case 3959:
      return U(e3, /(image-set\([^]*)/, B + "$1$`$1");
    case 4968:
      return U(U(e3, /(.+:)(flex-)?(.*)/, B + "box-pack:$3" + _e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + B + e3 + e3;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return U(e3, /(.+)-inline(.+)/, B + "$1$2") + e3;
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
      if (Pt(e3) - 1 - t > 6) switch (xe(e3, t + 1)) {
        case 109:
          if (xe(e3, t + 4) !== 45) break;
        case 102:
          return U(e3, /(.+:)(.+)-([^]+)/, "$1" + B + "$2-$3$1" + qi + (xe(e3, t + 3) == 108 ? "$3" : "$2-$3")) + e3;
        case 115:
          return ~Ra(e3, "stretch") ? xh(U(e3, "stretch", "fill-available"), t) + e3 : e3;
      }
      break;
    case 4949:
      if (xe(e3, t + 1) !== 115) break;
    case 6444:
      switch (xe(e3, Pt(e3) - 3 - (~Ra(e3, "!important") && 10))) {
        case 107:
          return U(e3, ":", ":" + B) + e3;
        case 101:
          return U(e3, /(.+:)([^;!]+)(;|!.+)?/, "$1" + B + (xe(e3, 14) === 45 ? "inline-" : "") + "box$3$1" + B + "$2$3$1" + _e + "$2box$3") + e3;
      }
      break;
    case 5936:
      switch (xe(e3, t + 11)) {
        case 114:
          return B + e3 + _e + U(e3, /[svh]\w+-[tblr]{2}/, "tb") + e3;
        case 108:
          return B + e3 + _e + U(e3, /[svh]\w+-[tblr]{2}/, "tb-rl") + e3;
        case 45:
          return B + e3 + _e + U(e3, /[svh]\w+-[tblr]{2}/, "lr") + e3;
      }
      return B + e3 + _e + e3 + e3;
  }
  return e3;
}
var C0 = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Fu:
      t.return = xh(t.value, t.length);
      break;
    case mh:
      return vr([Vr(t, { value: U(t.value, "@", "@" + B) })], o);
    case ju:
      if (t.length) return l0(t.props, function(i) {
        switch (i0(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return vr([Vr(t, { props: [U(i, /:(read-\w+)/, ":" + qi + "$1")] })], o);
          case "::placeholder":
            return vr([Vr(t, { props: [U(i, /:(plac\w+)/, ":" + B + "input-$1")] }), Vr(t, { props: [U(i, /:(plac\w+)/, ":" + qi + "$1")] }), Vr(t, { props: [U(i, /:(plac\w+)/, _e + "input-$1")] })], o);
        }
        return "";
      });
  }
}, E0 = [C0], P0 = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(S) {
      var P = S.getAttribute("data-emotion");
      P.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || E0, i = {}, l, s = [];
  l = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(S) {
    for (var P = S.getAttribute("data-emotion").split(" "), d = 1; d < P.length; d++) i[P[d]] = true;
    s.push(S);
  });
  var a, u = [x0, k0];
  {
    var m, p = [m0, y0(function(S) {
      m.insert(S);
    })], h = g0(u.concat(o, p)), w = function(P) {
      return vr(p0(P), h);
    };
    a = function(P, d, f, g) {
      m = f, w(P ? P + "{" + d.styles + "}" : d.styles), g && (v.inserted[d.name] = true);
    };
  }
  var v = { key: n, sheet: new Jy({ key: n, container: l, nonce: t.nonce, speedy: t.speedy, prepend: t.prepend, insertionPoint: t.insertionPoint }), nonce: t.nonce, inserted: i, registered: {}, insert: a };
  return v.sheet.hydrate(s), v;
}, kh = { exports: {} }, H = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ve = typeof Symbol == "function" && Symbol.for, Uu = ve ? Symbol.for("react.element") : 60103, Wu = ve ? Symbol.for("react.portal") : 60106, xl = ve ? Symbol.for("react.fragment") : 60107, kl = ve ? Symbol.for("react.strict_mode") : 60108, Cl = ve ? Symbol.for("react.profiler") : 60114, El = ve ? Symbol.for("react.provider") : 60109, Pl = ve ? Symbol.for("react.context") : 60110, Vu = ve ? Symbol.for("react.async_mode") : 60111, Tl = ve ? Symbol.for("react.concurrent_mode") : 60111, _l = ve ? Symbol.for("react.forward_ref") : 60112, Rl = ve ? Symbol.for("react.suspense") : 60113, T0 = ve ? Symbol.for("react.suspense_list") : 60120, $l = ve ? Symbol.for("react.memo") : 60115, Nl = ve ? Symbol.for("react.lazy") : 60116, _0 = ve ? Symbol.for("react.block") : 60121, R0 = ve ? Symbol.for("react.fundamental") : 60117, $0 = ve ? Symbol.for("react.responder") : 60118, N0 = ve ? Symbol.for("react.scope") : 60119;
function tt(e3) {
  if (typeof e3 == "object" && e3 !== null) {
    var t = e3.$$typeof;
    switch (t) {
      case Uu:
        switch (e3 = e3.type, e3) {
          case Vu:
          case Tl:
          case xl:
          case Cl:
          case kl:
          case Rl:
            return e3;
          default:
            switch (e3 = e3 && e3.$$typeof, e3) {
              case Pl:
              case _l:
              case Nl:
              case $l:
              case El:
                return e3;
              default:
                return t;
            }
        }
      case Wu:
        return t;
    }
  }
}
function Ch(e3) {
  return tt(e3) === Tl;
}
H.AsyncMode = Vu;
H.ConcurrentMode = Tl;
H.ContextConsumer = Pl;
H.ContextProvider = El;
H.Element = Uu;
H.ForwardRef = _l;
H.Fragment = xl;
H.Lazy = Nl;
H.Memo = $l;
H.Portal = Wu;
H.Profiler = Cl;
H.StrictMode = kl;
H.Suspense = Rl;
H.isAsyncMode = function(e3) {
  return Ch(e3) || tt(e3) === Vu;
};
H.isConcurrentMode = Ch;
H.isContextConsumer = function(e3) {
  return tt(e3) === Pl;
};
H.isContextProvider = function(e3) {
  return tt(e3) === El;
};
H.isElement = function(e3) {
  return typeof e3 == "object" && e3 !== null && e3.$$typeof === Uu;
};
H.isForwardRef = function(e3) {
  return tt(e3) === _l;
};
H.isFragment = function(e3) {
  return tt(e3) === xl;
};
H.isLazy = function(e3) {
  return tt(e3) === Nl;
};
H.isMemo = function(e3) {
  return tt(e3) === $l;
};
H.isPortal = function(e3) {
  return tt(e3) === Wu;
};
H.isProfiler = function(e3) {
  return tt(e3) === Cl;
};
H.isStrictMode = function(e3) {
  return tt(e3) === kl;
};
H.isSuspense = function(e3) {
  return tt(e3) === Rl;
};
H.isValidElementType = function(e3) {
  return typeof e3 == "string" || typeof e3 == "function" || e3 === xl || e3 === Tl || e3 === Cl || e3 === kl || e3 === Rl || e3 === T0 || typeof e3 == "object" && e3 !== null && (e3.$$typeof === Nl || e3.$$typeof === $l || e3.$$typeof === El || e3.$$typeof === Pl || e3.$$typeof === _l || e3.$$typeof === R0 || e3.$$typeof === $0 || e3.$$typeof === N0 || e3.$$typeof === _0);
};
H.typeOf = tt;
kh.exports = H;
var M0 = kh.exports, Eh = M0, O0 = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, D0 = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, Ph = {};
Ph[Eh.ForwardRef] = O0;
Ph[Eh.Memo] = D0;
var z0 = true;
function Th(e3, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e3[o] !== void 0 ? t.push(e3[o] + ";") : o && (r += o + " ");
  }), r;
}
var Hu = function(t, n, r) {
  var o = t.key + "-" + n.name;
  (r === false || z0 === false) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, _h = function(t, n, r) {
  Hu(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, true), i = i.next;
    while (i !== void 0);
  }
};
function I0(e3) {
  for (var t = 0, n, r = 0, o = e3.length; o >= 4; ++r, o -= 4) n = e3.charCodeAt(r) & 255 | (e3.charCodeAt(++r) & 255) << 8 | (e3.charCodeAt(++r) & 255) << 16 | (e3.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e3.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e3.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e3.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var A0 = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, L0 = /[A-Z]|^ms/g, b0 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Rh = function(t) {
  return t.charCodeAt(1) === 45;
}, Tf = function(t) {
  return t != null && typeof t != "boolean";
}, _s = wh(function(e3) {
  return Rh(e3) ? e3 : e3.replace(L0, "-$&").toLowerCase();
}), _f = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string") return n.replace(b0, function(r, o, i) {
        return Tt = { name: o, styles: i, next: Tt }, o;
      });
  }
  return A0[t] !== 1 && !Rh(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function No(e3, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1) return Tt = { name: o.name, styles: o.styles, next: Tt }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var l = i.next;
        if (l !== void 0) for (; l !== void 0; ) Tt = { name: l.name, styles: l.styles, next: Tt }, l = l.next;
        var s = i.styles + ";";
        return s;
      }
      return j0(e3, t, n);
    }
    case "function": {
      if (e3 !== void 0) {
        var a = Tt, u = n(e3);
        return Tt = a, No(e3, t, u);
      }
      break;
    }
  }
  var m = n;
  if (t == null) return m;
  var p = t[m];
  return p !== void 0 ? p : m;
}
function j0(e3, t, n) {
  var r = "";
  if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += No(e3, t, n[o]) + ";";
  else for (var i in n) {
    var l = n[i];
    if (typeof l != "object") {
      var s = l;
      t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : Tf(s) && (r += _s(i) + ":" + _f(i, s) + ";");
    } else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0)) for (var a = 0; a < l.length; a++) Tf(l[a]) && (r += _s(i) + ":" + _f(i, l[a]) + ";");
    else {
      var u = No(e3, t, l);
      switch (i) {
        case "animation":
        case "animationName": {
          r += _s(i) + ":" + u + ";";
          break;
        }
        default:
          r += i + "{" + u + "}";
      }
    }
  }
  return r;
}
var Rf = /label:\s*([^\s;{]+)\s*(;|$)/g, Tt;
function Ml(e3, t, n) {
  if (e3.length === 1 && typeof e3[0] == "object" && e3[0] !== null && e3[0].styles !== void 0) return e3[0];
  var r = true, o = "";
  Tt = void 0;
  var i = e3[0];
  if (i == null || i.raw === void 0) r = false, o += No(n, t, i);
  else {
    var l = i;
    o += l[0];
  }
  for (var s = 1; s < e3.length; s++) if (o += No(n, t, e3[s]), r) {
    var a = i;
    o += a[s];
  }
  Rf.lastIndex = 0;
  for (var u = "", m; (m = Rf.exec(o)) !== null; ) u += "-" + m[1];
  var p = I0(o) + u;
  return { name: p, styles: o, next: Tt };
}
var F0 = function(t) {
  return t();
}, B0 = zs.useInsertionEffect ? zs.useInsertionEffect : false, $h = B0 || F0, Nh = R.createContext(typeof HTMLElement < "u" ? P0({ key: "css" }) : null);
Nh.Provider;
var Mh = function(t) {
  return R.forwardRef(function(n, r) {
    var o = R.useContext(Nh);
    return t(n, o, r);
  });
}, Yu = R.createContext({}), Ku = {}.hasOwnProperty, Na = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", U0 = function(t, n) {
  var r = {};
  for (var o in n) Ku.call(n, o) && (r[o] = n[o]);
  return r[Na] = t, r;
}, W0 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Hu(n, r, o), $h(function() {
    return _h(n, r, o);
  }), null;
}, V0 = Mh(function(e3, t, n) {
  var r = e3.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e3[Na], i = [r], l = "";
  typeof e3.className == "string" ? l = Th(t.registered, i, e3.className) : e3.className != null && (l = e3.className + " ");
  var s = Ml(i, void 0, R.useContext(Yu));
  l += t.key + "-" + s.name;
  var a = {};
  for (var u in e3) Ku.call(e3, u) && u !== "css" && u !== Na && (a[u] = e3[u]);
  return a.className = l, n && (a.ref = n), R.createElement(R.Fragment, null, R.createElement(W0, { cache: t, serialized: s, isStringTag: typeof o == "string" }), R.createElement(o, a));
}), H0 = V0, $f = function(t, n) {
  var r = arguments;
  if (n == null || !Ku.call(n, "css")) return R.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = H0, i[1] = U0(t, n);
  for (var l = 2; l < o; l++) i[l] = r[l];
  return R.createElement.apply(null, i);
};
(function(e3) {
  var t;
  t || (t = e3.JSX || (e3.JSX = {}));
})($f || ($f = {}));
function Xu() {
  for (var e3 = arguments.length, t = new Array(e3), n = 0; n < e3; n++) t[n] = arguments[n];
  return Ml(t);
}
function bo() {
  var e3 = Xu.apply(void 0, arguments), t = "animation-" + e3.name;
  return { name: t, styles: "@keyframes " + t + "{" + e3.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var Y0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, K0 = wh(function(e3) {
  return Y0.test(e3) || e3.charCodeAt(0) === 111 && e3.charCodeAt(1) === 110 && e3.charCodeAt(2) < 91;
}), X0 = K0, Q0 = function(t) {
  return t !== "theme";
}, Nf = function(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96 ? X0 : Q0;
}, Mf = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(l) {
      return t.__emotion_forwardProp(l) && i(l);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, G0 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Hu(n, r, o), $h(function() {
    return _h(n, r, o);
  }), null;
}, Z0 = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, l;
  n !== void 0 && (i = n.label, l = n.target);
  var s = Mf(t, n, r), a = s || Nf(o), u = !a("as");
  return function() {
    var m = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0) p.push.apply(p, m);
    else {
      var h = m[0];
      p.push(h[0]);
      for (var w = m.length, v = 1; v < w; v++) p.push(m[v], h[v]);
    }
    var S = Mh(function(P, d, f) {
      var g = u && P.as || o, y = "", x = [], k = P;
      if (P.theme == null) {
        k = {};
        for (var E in P) k[E] = P[E];
        k.theme = R.useContext(Yu);
      }
      typeof P.className == "string" ? y = Th(d.registered, x, P.className) : P.className != null && (y = P.className + " ");
      var T = Ml(p.concat(x), d.registered, k);
      y += d.key + "-" + T.name, l !== void 0 && (y += " " + l);
      var D = u && s === void 0 ? Nf(g) : a, c = {};
      for (var $ in P) u && $ === "as" || D($) && (c[$] = P[$]);
      return c.className = y, f && (c.ref = f), R.createElement(R.Fragment, null, R.createElement(G0, { cache: d, serialized: T, isStringTag: typeof g == "string" }), R.createElement(g, c));
    });
    return S.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = o, S.__emotion_styles = p, S.__emotion_forwardProp = s, Object.defineProperty(S, "toString", { value: function() {
      return "." + l;
    } }), S.withComponent = function(P, d) {
      var f = e(P, Zi({}, n, d, { shouldForwardProp: Mf(S, d, true) }));
      return f.apply(void 0, p);
    }, S;
  };
}, q0 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], Ma = Z0.bind(null);
q0.forEach(function(e3) {
  Ma[e3] = Ma(e3);
});
var Oh = { exports: {} }, J0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", ev = J0, tv = ev;
function Dh() {
}
function zh() {
}
zh.resetWarningCache = Dh;
var nv = function() {
  function e3(r, o, i, l, s, a) {
    if (a !== tv) {
      var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw u.name = "Invariant Violation", u;
    }
  }
  e3.isRequired = e3;
  function t() {
    return e3;
  }
  var n = { array: e3, bigint: e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t, element: e3, elementType: e3, instanceOf: t, node: e3, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: zh, resetWarningCache: Dh };
  return n.PropTypes = n, n;
};
Oh.exports = nv();
var Ih = Oh.exports;
function Ah(e3, t) {
  return Ma(e3, t);
}
function rv(e3, t) {
  Array.isArray(e3.__emotion_styles) && (e3.__emotion_styles = t(e3.__emotion_styles));
}
const Of = [];
function Df(e3) {
  return Of[0] = e3, Ml(Of);
}
var Lh = { exports: {} }, Q = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Qu = Symbol.for("react.transitional.element"), Gu = Symbol.for("react.portal"), Ol = Symbol.for("react.fragment"), Dl = Symbol.for("react.strict_mode"), zl = Symbol.for("react.profiler"), Il = Symbol.for("react.consumer"), Al = Symbol.for("react.context"), Ll = Symbol.for("react.forward_ref"), bl = Symbol.for("react.suspense"), jl = Symbol.for("react.suspense_list"), Fl = Symbol.for("react.memo"), Bl = Symbol.for("react.lazy"), ov = Symbol.for("react.view_transition"), iv = Symbol.for("react.client.reference");
function ft(e3) {
  if (typeof e3 == "object" && e3 !== null) {
    var t = e3.$$typeof;
    switch (t) {
      case Qu:
        switch (e3 = e3.type, e3) {
          case Ol:
          case zl:
          case Dl:
          case bl:
          case jl:
          case ov:
            return e3;
          default:
            switch (e3 = e3 && e3.$$typeof, e3) {
              case Al:
              case Ll:
              case Bl:
              case Fl:
                return e3;
              case Il:
                return e3;
              default:
                return t;
            }
        }
      case Gu:
        return t;
    }
  }
}
Q.ContextConsumer = Il;
Q.ContextProvider = Al;
Q.Element = Qu;
Q.ForwardRef = Ll;
Q.Fragment = Ol;
Q.Lazy = Bl;
Q.Memo = Fl;
Q.Portal = Gu;
Q.Profiler = zl;
Q.StrictMode = Dl;
Q.Suspense = bl;
Q.SuspenseList = jl;
Q.isContextConsumer = function(e3) {
  return ft(e3) === Il;
};
Q.isContextProvider = function(e3) {
  return ft(e3) === Al;
};
Q.isElement = function(e3) {
  return typeof e3 == "object" && e3 !== null && e3.$$typeof === Qu;
};
Q.isForwardRef = function(e3) {
  return ft(e3) === Ll;
};
Q.isFragment = function(e3) {
  return ft(e3) === Ol;
};
Q.isLazy = function(e3) {
  return ft(e3) === Bl;
};
Q.isMemo = function(e3) {
  return ft(e3) === Fl;
};
Q.isPortal = function(e3) {
  return ft(e3) === Gu;
};
Q.isProfiler = function(e3) {
  return ft(e3) === zl;
};
Q.isStrictMode = function(e3) {
  return ft(e3) === Dl;
};
Q.isSuspense = function(e3) {
  return ft(e3) === bl;
};
Q.isSuspenseList = function(e3) {
  return ft(e3) === jl;
};
Q.isValidElementType = function(e3) {
  return typeof e3 == "string" || typeof e3 == "function" || e3 === Ol || e3 === zl || e3 === Dl || e3 === bl || e3 === jl || typeof e3 == "object" && e3 !== null && (e3.$$typeof === Bl || e3.$$typeof === Fl || e3.$$typeof === Al || e3.$$typeof === Il || e3.$$typeof === Ll || e3.$$typeof === iv || e3.getModuleId !== void 0);
};
Q.typeOf = ft;
Lh.exports = Q;
var bh = Lh.exports;
function Rt(e3) {
  if (typeof e3 != "object" || e3 === null) return false;
  const t = Object.getPrototypeOf(e3);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e3) && !(Symbol.iterator in e3);
}
function jh(e3) {
  if (R.isValidElement(e3) || bh.isValidElementType(e3) || !Rt(e3)) return e3;
  const t = {};
  return Object.keys(e3).forEach((n) => {
    t[n] = jh(e3[n]);
  }), t;
}
function Ge(e3, t, n = { clone: true }) {
  const r = n.clone ? { ...e3 } : e3;
  return Rt(e3) && Rt(t) && Object.keys(t).forEach((o) => {
    R.isValidElement(t[o]) || bh.isValidElementType(t[o]) ? r[o] = t[o] : Rt(t[o]) && Object.prototype.hasOwnProperty.call(e3, o) && Rt(e3[o]) ? r[o] = Ge(e3[o], t[o], n) : n.clone ? r[o] = Rt(t[o]) ? jh(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const lv = (e3) => {
  const t = Object.keys(e3).map((n) => ({ key: n, val: e3[n] })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({ ...n, [r.key]: r.val }), {});
};
function sv(e3) {
  const { values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: n = "px", step: r = 5, ...o } = e3, i = lv(t), l = Object.keys(i);
  function s(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function a(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function u(h, w) {
    const v = l.indexOf(w);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(v !== -1 && typeof t[l[v]] == "number" ? t[l[v]] : w) - r / 100}${n})`;
  }
  function m(h) {
    return l.indexOf(h) + 1 < l.length ? u(h, l[l.indexOf(h) + 1]) : s(h);
  }
  function p(h) {
    const w = l.indexOf(h);
    return w === 0 ? s(l[1]) : w === l.length - 1 ? a(l[w]) : u(h, l[l.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return { keys: l, values: i, up: s, down: a, between: u, only: m, not: p, unit: n, ...o };
}
function av(e3, t) {
  if (!e3.containerQueries) return t;
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
function uv(e3, t) {
  return t === "@" || t.startsWith("@") && (e3.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function cv(e3, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e3.containerQueries(o).up(i);
}
function fv(e3) {
  const t = (i, l) => i.replace("@media", l ? `@container ${l}` : "@container");
  function n(i, l) {
    i.up = (...s) => t(e3.breakpoints.up(...s), l), i.down = (...s) => t(e3.breakpoints.down(...s), l), i.between = (...s) => t(e3.breakpoints.between(...s), l), i.only = (...s) => t(e3.breakpoints.only(...s), l), i.not = (...s) => {
      const a = t(e3.breakpoints.not(...s), l);
      return a.includes("not all and") ? a.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : a;
    };
  }
  const r = {}, o = (i) => (n(r, i), r);
  return n(o), { ...e3, containerQueries: o };
}
const dv = { borderRadius: 4 };
function so(e3, t) {
  return t ? Ge(e3, t, { clone: false }) : e3;
}
const Ul = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, zf = { keys: ["xs", "sm", "md", "lg", "xl"], up: (e3) => `@media (min-width:${Ul[e3]}px)` }, pv = { containerQueries: (e3) => ({ up: (t) => {
  let n = typeof t == "number" ? t : Ul[t] || t;
  return typeof n == "number" && (n = `${n}px`), e3 ? `@container ${e3} (min-width:${n})` : `@container (min-width:${n})`;
} }) };
function Xt(e3, t, n) {
  const r = e3.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || zf;
    return t.reduce((l, s, a) => (l[i.up(i.keys[a])] = n(t[a]), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || zf;
    return Object.keys(t).reduce((l, s) => {
      if (uv(i.keys, s)) {
        const a = cv(r.containerQueries ? r : pv, s);
        a && (l[a] = n(t[s], s));
      } else if (Object.keys(i.values || Ul).includes(s)) {
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
function hv(e3 = {}) {
  var _a2;
  return ((_a2 = e3.keys) == null ? void 0 : _a2.reduce((n, r) => {
    const o = e3.up(r);
    return n[o] = {}, n;
  }, {})) || {};
}
function mv(e3, t) {
  return e3.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function me(e3) {
  if (typeof e3 != "string") throw new Error(In(7));
  return e3.charAt(0).toUpperCase() + e3.slice(1);
}
function Wl(e3, t, n = true) {
  if (!t || typeof t != "string") return null;
  if (e3 && e3.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e3);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e3);
}
function Ji(e3, t, n, r = n) {
  let o;
  return typeof e3 == "function" ? o = e3(n) : Array.isArray(e3) ? o = e3[n] || r : o = Wl(e3, n) || r, t && (o = t(o, r, e3)), o;
}
function ce(e3) {
  const { prop: t, cssProperty: n = e3.prop, themeKey: r, transform: o } = e3, i = (l) => {
    if (l[t] == null) return null;
    const s = l[t], a = l.theme, u = Wl(a, r) || {};
    return Xt(l, s, (p) => {
      let h = Ji(u, o, p);
      return p === h && typeof p == "string" && (h = Ji(u, o, `${t}${p === "default" ? "" : me(p)}`, p)), n === false ? h : { [n]: h };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function gv(e3) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e3(n)), t[n]);
}
const yv = { m: "margin", p: "padding" }, vv = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, If = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, Sv = gv((e3) => {
  if (e3.length > 2) if (If[e3]) e3 = If[e3];
  else return [e3];
  const [t, n] = e3.split(""), r = yv[t], o = vv[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Zu = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], qu = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Zu, ...qu];
function jo(e3, t, n, r) {
  const o = Wl(e3, t, true) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string") return i;
    const l = Math.abs(i), s = o[l];
    return i >= 0 ? s : typeof s == "number" ? -s : typeof s == "string" && s.startsWith("var(") ? `calc(-1 * ${s})` : `-${s}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Ju(e3) {
  return jo(e3, "spacing", 8);
}
function Fo(e3, t) {
  return typeof t == "string" || t == null ? t : e3(t);
}
function wv(e3, t) {
  return (n) => e3.reduce((r, o) => (r[o] = Fo(t, n), r), {});
}
function xv(e3, t, n, r) {
  if (!t.includes(n)) return null;
  const o = Sv(n), i = wv(o, r), l = e3[n];
  return Xt(e3, l, i);
}
function Fh(e3, t) {
  const n = Ju(e3.theme);
  return Object.keys(e3).map((r) => xv(e3, t, r, n)).reduce(so, {});
}
function ie(e3) {
  return Fh(e3, Zu);
}
ie.propTypes = {};
ie.filterProps = Zu;
function le(e3) {
  return Fh(e3, qu);
}
le.propTypes = {};
le.filterProps = qu;
function Bh(e3 = 8, t = Ju({ spacing: e3 })) {
  if (e3.mui) return e3;
  const n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const l = t(i);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" ");
  return n.mui = true, n;
}
function Vl(...e3) {
  const t = e3.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? so(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e3.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function lt(e3) {
  return typeof e3 != "number" ? e3 : `${e3}px solid`;
}
function dt(e3, t) {
  return ce({ prop: e3, themeKey: "borders", transform: t });
}
const kv = dt("border", lt), Cv = dt("borderTop", lt), Ev = dt("borderRight", lt), Pv = dt("borderBottom", lt), Tv = dt("borderLeft", lt), _v = dt("borderColor"), Rv = dt("borderTopColor"), $v = dt("borderRightColor"), Nv = dt("borderBottomColor"), Mv = dt("borderLeftColor"), Ov = dt("outline", lt), Dv = dt("outlineColor"), Hl = (e3) => {
  if (e3.borderRadius !== void 0 && e3.borderRadius !== null) {
    const t = jo(e3.theme, "shape.borderRadius", 4), n = (r) => ({ borderRadius: Fo(t, r) });
    return Xt(e3, e3.borderRadius, n);
  }
  return null;
};
Hl.propTypes = {};
Hl.filterProps = ["borderRadius"];
Vl(kv, Cv, Ev, Pv, Tv, _v, Rv, $v, Nv, Mv, Hl, Ov, Dv);
const Yl = (e3) => {
  if (e3.gap !== void 0 && e3.gap !== null) {
    const t = jo(e3.theme, "spacing", 8), n = (r) => ({ gap: Fo(t, r) });
    return Xt(e3, e3.gap, n);
  }
  return null;
};
Yl.propTypes = {};
Yl.filterProps = ["gap"];
const Kl = (e3) => {
  if (e3.columnGap !== void 0 && e3.columnGap !== null) {
    const t = jo(e3.theme, "spacing", 8), n = (r) => ({ columnGap: Fo(t, r) });
    return Xt(e3, e3.columnGap, n);
  }
  return null;
};
Kl.propTypes = {};
Kl.filterProps = ["columnGap"];
const Xl = (e3) => {
  if (e3.rowGap !== void 0 && e3.rowGap !== null) {
    const t = jo(e3.theme, "spacing", 8), n = (r) => ({ rowGap: Fo(t, r) });
    return Xt(e3, e3.rowGap, n);
  }
  return null;
};
Xl.propTypes = {};
Xl.filterProps = ["rowGap"];
const zv = ce({ prop: "gridColumn" }), Iv = ce({ prop: "gridRow" }), Av = ce({ prop: "gridAutoFlow" }), Lv = ce({ prop: "gridAutoColumns" }), bv = ce({ prop: "gridAutoRows" }), jv = ce({ prop: "gridTemplateColumns" }), Fv = ce({ prop: "gridTemplateRows" }), Bv = ce({ prop: "gridTemplateAreas" }), Uv = ce({ prop: "gridArea" });
Vl(Yl, Kl, Xl, zv, Iv, Av, Lv, bv, jv, Fv, Bv, Uv);
function Sr(e3, t) {
  return t === "grey" ? t : e3;
}
const Wv = ce({ prop: "color", themeKey: "palette", transform: Sr }), Vv = ce({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: Sr }), Hv = ce({ prop: "backgroundColor", themeKey: "palette", transform: Sr });
Vl(Wv, Vv, Hv);
function Ye(e3) {
  return e3 <= 1 && e3 !== 0 ? `${e3 * 100}%` : e3;
}
const Yv = ce({ prop: "width", transform: Ye }), ec = (e3) => {
  if (e3.maxWidth !== void 0 && e3.maxWidth !== null) {
    const t = (n) => {
      var _a2, _b, _c2, _d2, _e2;
      const r = ((_c2 = (_b = (_a2 = e3.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b.values) == null ? void 0 : _c2[n]) || Ul[n];
      return r ? ((_e2 = (_d2 = e3.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? { maxWidth: `${r}${e3.theme.breakpoints.unit}` } : { maxWidth: r } : { maxWidth: Ye(n) };
    };
    return Xt(e3, e3.maxWidth, t);
  }
  return null;
};
ec.filterProps = ["maxWidth"];
const Kv = ce({ prop: "minWidth", transform: Ye }), Xv = ce({ prop: "height", transform: Ye }), Qv = ce({ prop: "maxHeight", transform: Ye }), Gv = ce({ prop: "minHeight", transform: Ye });
ce({ prop: "size", cssProperty: "width", transform: Ye });
ce({ prop: "size", cssProperty: "height", transform: Ye });
const Zv = ce({ prop: "boxSizing" });
Vl(Yv, ec, Kv, Xv, Qv, Gv, Zv);
const Bo = { border: { themeKey: "borders", transform: lt }, borderTop: { themeKey: "borders", transform: lt }, borderRight: { themeKey: "borders", transform: lt }, borderBottom: { themeKey: "borders", transform: lt }, borderLeft: { themeKey: "borders", transform: lt }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: lt }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: Hl }, color: { themeKey: "palette", transform: Sr }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: Sr }, backgroundColor: { themeKey: "palette", transform: Sr }, p: { style: le }, pt: { style: le }, pr: { style: le }, pb: { style: le }, pl: { style: le }, px: { style: le }, py: { style: le }, padding: { style: le }, paddingTop: { style: le }, paddingRight: { style: le }, paddingBottom: { style: le }, paddingLeft: { style: le }, paddingX: { style: le }, paddingY: { style: le }, paddingInline: { style: le }, paddingInlineStart: { style: le }, paddingInlineEnd: { style: le }, paddingBlock: { style: le }, paddingBlockStart: { style: le }, paddingBlockEnd: { style: le }, m: { style: ie }, mt: { style: ie }, mr: { style: ie }, mb: { style: ie }, ml: { style: ie }, mx: { style: ie }, my: { style: ie }, margin: { style: ie }, marginTop: { style: ie }, marginRight: { style: ie }, marginBottom: { style: ie }, marginLeft: { style: ie }, marginX: { style: ie }, marginY: { style: ie }, marginInline: { style: ie }, marginInlineStart: { style: ie }, marginInlineEnd: { style: ie }, marginBlock: { style: ie }, marginBlockStart: { style: ie }, marginBlockEnd: { style: ie }, displayPrint: { cssProperty: false, transform: (e3) => ({ "@media print": { display: e3 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: Yl }, rowGap: { style: Xl }, columnGap: { style: Kl }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: Ye }, maxWidth: { style: ec }, minWidth: { transform: Ye }, height: { transform: Ye }, maxHeight: { transform: Ye }, minHeight: { transform: Ye }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function qv(...e3) {
  const t = e3.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e3.every((r) => n.size === Object.keys(r).length);
}
function Jv(e3, t) {
  return typeof e3 == "function" ? e3(t) : e3;
}
function e1() {
  function e3(n, r, o, i) {
    const l = { [n]: r, theme: o }, s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: a = n, themeKey: u, transform: m, style: p } = s;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const h = Wl(o, u) || {};
    return p ? p(l) : Xt(l, r, (v) => {
      let S = Ji(h, m, v);
      return v === S && typeof v == "string" && (S = Ji(h, m, `${n}${v === "default" ? "" : me(v)}`, v)), a === false ? S : { [a]: S };
    });
  }
  function t(n) {
    const { sx: r, theme: o = {} } = n || {};
    if (!r) return null;
    const i = o.unstable_sxConfig ?? Bo;
    function l(s) {
      let a = s;
      if (typeof s == "function") a = s(o);
      else if (typeof s != "object") return s;
      if (!a) return null;
      const u = hv(o.breakpoints), m = Object.keys(u);
      let p = u;
      return Object.keys(a).forEach((h) => {
        const w = Jv(a[h], o);
        if (w != null) if (typeof w == "object") if (i[h]) p = so(p, e3(h, w, o, i));
        else {
          const v = Xt({ theme: o }, w, (S) => ({ [h]: S }));
          qv(v, w) ? p[h] = t({ sx: w, theme: o }) : p = so(p, v);
        }
        else p = so(p, e3(h, w, o, i));
      }), av(o, mv(m, p));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const An = e1();
An.filterProps = ["sx"];
function t1(e3, t) {
  var _a2;
  const n = this;
  if (n.vars) {
    if (!((_a2 = n.colorSchemes) == null ? void 0 : _a2[e3]) || typeof n.getColorSchemeSelector != "function") return {};
    let r = n.getColorSchemeSelector(e3);
    return r === "&" ? t : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), { [r]: t });
  }
  return n.palette.mode === e3 ? t : {};
}
function tc(e3 = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {}, ...l } = e3, s = sv(n), a = Bh(o);
  let u = Ge({ breakpoints: s, direction: "ltr", components: {}, palette: { mode: "light", ...r }, spacing: a, shape: { ...dv, ...i } }, l);
  return u = fv(u), u.applyStyles = t1, u = t.reduce((m, p) => Ge(m, p), u), u.unstable_sxConfig = { ...Bo, ...l == null ? void 0 : l.unstable_sxConfig }, u.unstable_sx = function(p) {
    return An({ sx: p, theme: this });
  }, u;
}
function n1(e3) {
  return Object.keys(e3).length === 0;
}
function r1(e3 = null) {
  const t = R.useContext(Yu);
  return !t || n1(t) ? e3 : t;
}
const o1 = tc();
function Uh(e3 = o1) {
  return r1(e3);
}
const i1 = (e3) => {
  var _a2;
  const t = { systemProps: {}, otherProps: {} }, n = ((_a2 = e3 == null ? void 0 : e3.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? Bo;
  return Object.keys(e3).forEach((r) => {
    n[r] ? t.systemProps[r] = e3[r] : t.otherProps[r] = e3[r];
  }), t;
};
function Wh(e3) {
  const { sx: t, ...n } = e3, { systemProps: r, otherProps: o } = i1(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...l) => {
    const s = t(...l);
    return Rt(s) ? { ...r, ...s } : r;
  } : i = { ...r, ...t }, { ...o, sx: i };
}
const Af = (e3) => e3, l1 = () => {
  let e3 = Af;
  return { configure(t) {
    e3 = t;
  }, generate(t) {
    return e3(t);
  }, reset() {
    e3 = Af;
  } };
}, Vh = l1();
var Oa = { exports: {} };
function Hh(e3) {
  var t, n, r = "";
  if (typeof e3 == "string" || typeof e3 == "number") r += e3;
  else if (typeof e3 == "object") if (Array.isArray(e3)) {
    var o = e3.length;
    for (t = 0; t < o; t++) e3[t] && (n = Hh(e3[t])) && (r && (r += " "), r += n);
  } else for (n in e3) e3[n] && (r && (r += " "), r += n);
  return r;
}
function Lf() {
  for (var e3, t, n = 0, r = "", o = arguments.length; n < o; n++) (e3 = arguments[n]) && (t = Hh(e3)) && (r && (r += " "), r += t);
  return r;
}
Oa.exports = Lf, Oa.exports.clsx = Lf;
var Yh = Oa.exports;
const Re = Ua(Yh);
function s1(e3 = {}) {
  const { themeId: t, defaultTheme: n, defaultClassName: r = "MuiBox-root", generateClassName: o } = e3, i = Ah("div", { shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as" })(An);
  return R.forwardRef(function(a, u) {
    const m = Uh(n), { className: p, component: h = "div", ...w } = Wh(a);
    return O.jsx(i, { as: h, ref: u, className: Re(p, o ? o(r) : r), theme: t && m[t] || m, ...w });
  });
}
const a1 = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function Fn(e3, t, n = "Mui") {
  const r = a1[t];
  return r ? `${n}-${r}` : `${Vh.generate(e3)}-${t}`;
}
function xn(e3, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Fn(e3, o, n);
  }), r;
}
function Kh(e3) {
  const { variants: t, ...n } = e3, r = { variants: t, style: Df(n), isProcessed: true };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Df(o.style));
  }), r;
}
const u1 = tc();
function Rs(e3) {
  return e3 !== "ownerState" && e3 !== "theme" && e3 !== "sx" && e3 !== "as";
}
function c1(e3) {
  return e3 ? (t, n) => n[e3] : null;
}
function f1(e3, t, n) {
  e3.theme = h1(e3.theme) ? n : e3.theme[t] || e3.theme;
}
function Pi(e3, t) {
  const n = typeof t == "function" ? t(e3) : t;
  if (Array.isArray(n)) return n.flatMap((r) => Pi(e3, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r;
    if (n.isProcessed) r = n.style;
    else {
      const { variants: o, ...i } = n;
      r = i;
    }
    return Xh(e3, n.variants, [r]);
  }
  return (n == null ? void 0 : n.isProcessed) ? n.style : n;
}
function Xh(e3, t, n = []) {
  var _a2;
  let r;
  e: for (let o = 0; o < t.length; o += 1) {
    const i = t[o];
    if (typeof i.props == "function") {
      if (r ?? (r = { ...e3, ...e3.ownerState, ownerState: e3.ownerState }), !i.props(r)) continue;
    } else for (const l in i.props) if (e3[l] !== i.props[l] && ((_a2 = e3.ownerState) == null ? void 0 : _a2[l]) !== i.props[l]) continue e;
    typeof i.style == "function" ? (r ?? (r = { ...e3, ...e3.ownerState, ownerState: e3.ownerState }), n.push(i.style(r))) : n.push(i.style);
  }
  return n;
}
function d1(e3 = {}) {
  const { themeId: t, defaultTheme: n = u1, rootShouldForwardProp: r = Rs, slotShouldForwardProp: o = Rs } = e3;
  function i(s) {
    f1(s, t, n);
  }
  return (s, a = {}) => {
    rv(s, (x) => x.filter((k) => k !== An));
    const { name: u, slot: m, skipVariantsResolver: p, skipSx: h, overridesResolver: w = c1(g1(m)), ...v } = a, S = p !== void 0 ? p : m && m !== "Root" && m !== "root" || false, P = h || false;
    let d = Rs;
    m === "Root" || m === "root" ? d = r : m ? d = o : m1(s) && (d = void 0);
    const f = Ah(s, { shouldForwardProp: d, label: p1(), ...v }), g = (x) => {
      if (typeof x == "function" && x.__emotion_real !== x) return function(E) {
        return Pi(E, x);
      };
      if (Rt(x)) {
        const k = Kh(x);
        return k.variants ? function(T) {
          return Pi(T, k);
        } : k.style;
      }
      return x;
    }, y = (...x) => {
      const k = [], E = x.map(g), T = [];
      if (k.push(i), u && w && T.push(function(I) {
        var _a2, _b;
        const Y = (_b = (_a2 = I.theme.components) == null ? void 0 : _a2[u]) == null ? void 0 : _b.styleOverrides;
        if (!Y) return null;
        const We = {};
        for (const Se in Y) We[Se] = Pi(I, Y[Se]);
        return w(I, We);
      }), u && !S && T.push(function(I) {
        var _a2, _b, _c2;
        const Y = (_c2 = (_b = (_a2 = I.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b[u]) == null ? void 0 : _c2.variants;
        return Y ? Xh(I, Y) : null;
      }), P || T.push(An), Array.isArray(E[0])) {
        const $ = E.shift(), I = new Array(k.length).fill(""), L = new Array(T.length).fill("");
        let Y;
        Y = [...I, ...$, ...L], Y.raw = [...I, ...$.raw, ...L], k.unshift(Y);
      }
      const D = [...k, ...E, ...T], c = f(...D);
      return s.muiName && (c.muiName = s.muiName), c;
    };
    return f.withConfig && (y.withConfig = f.withConfig), y;
  };
}
function p1(e3, t) {
  return void 0;
}
function h1(e3) {
  for (const t in e3) return false;
  return true;
}
function m1(e3) {
  return typeof e3 == "string" && e3.charCodeAt(0) > 96;
}
function g1(e3) {
  return e3 && e3.charAt(0).toLowerCase() + e3.slice(1);
}
function Da(e3, t) {
  const n = { ...t };
  for (const r in e3) if (Object.prototype.hasOwnProperty.call(e3, r)) {
    const o = r;
    if (o === "components" || o === "slots") n[o] = { ...e3[o], ...n[o] };
    else if (o === "componentsProps" || o === "slotProps") {
      const i = e3[o], l = t[o];
      if (!l) n[o] = i || {};
      else if (!i) n[o] = l;
      else {
        n[o] = { ...l };
        for (const s in i) if (Object.prototype.hasOwnProperty.call(i, s)) {
          const a = s;
          n[o][a] = Da(i[a], l[a]);
        }
      }
    } else n[o] === void 0 && (n[o] = e3[o]);
  }
  return n;
}
const y1 = typeof window < "u" ? R.useLayoutEffect : R.useEffect;
function v1(e3, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e3, n));
}
function nc(e3, t = 0, n = 1) {
  return v1(e3, t, n);
}
function S1(e3) {
  e3 = e3.slice(1);
  const t = new RegExp(`.{1,${e3.length >= 6 ? 2 : 1}}`, "g");
  let n = e3.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function yn(e3) {
  if (e3.type) return e3;
  if (e3.charAt(0) === "#") return yn(S1(e3));
  const t = e3.indexOf("("), n = e3.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n)) throw new Error(In(9, e3));
  let r = e3.substring(t + 1, e3.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o)) throw new Error(In(10, o));
  } else r = r.split(",");
  return r = r.map((i) => parseFloat(i)), { type: n, values: r, colorSpace: o };
}
const w1 = (e3) => {
  const t = yn(e3);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, Gr = (e3, t) => {
  try {
    return w1(e3);
  } catch {
    return e3;
  }
};
function Ql(e3) {
  const { type: t, colorSpace: n } = e3;
  let { values: r } = e3;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Qh(e3) {
  e3 = yn(e3);
  const { values: t } = e3, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), l = (u, m = (u + n / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let s = "rgb";
  const a = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return e3.type === "hsla" && (s += "a", a.push(t[3])), Ql({ type: s, values: a });
}
function za(e3) {
  e3 = yn(e3);
  let t = e3.type === "hsl" || e3.type === "hsla" ? yn(Qh(e3)).values : e3.values;
  return t = t.map((n) => (e3.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function x1(e3, t) {
  const n = za(e3), r = za(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Mo(e3, t) {
  return e3 = yn(e3), t = nc(t), (e3.type === "rgb" || e3.type === "hsl") && (e3.type += "a"), e3.type === "color" ? e3.values[3] = `/${t}` : e3.values[3] = t, Ql(e3);
}
function si(e3, t, n) {
  try {
    return Mo(e3, t);
  } catch {
    return e3;
  }
}
function rc(e3, t) {
  if (e3 = yn(e3), t = nc(t), e3.type.includes("hsl")) e3.values[2] *= 1 - t;
  else if (e3.type.includes("rgb") || e3.type.includes("color")) for (let n = 0; n < 3; n += 1) e3.values[n] *= 1 - t;
  return Ql(e3);
}
function K(e3, t, n) {
  try {
    return rc(e3, t);
  } catch {
    return e3;
  }
}
function oc(e3, t) {
  if (e3 = yn(e3), t = nc(t), e3.type.includes("hsl")) e3.values[2] += (100 - e3.values[2]) * t;
  else if (e3.type.includes("rgb")) for (let n = 0; n < 3; n += 1) e3.values[n] += (255 - e3.values[n]) * t;
  else if (e3.type.includes("color")) for (let n = 0; n < 3; n += 1) e3.values[n] += (1 - e3.values[n]) * t;
  return Ql(e3);
}
function X(e3, t, n) {
  try {
    return oc(e3, t);
  } catch {
    return e3;
  }
}
function k1(e3, t = 0.15) {
  return za(e3) > 0.5 ? rc(e3, t) : oc(e3, t);
}
function ai(e3, t, n) {
  try {
    return k1(e3, t);
  } catch {
    return e3;
  }
}
let bf = 0;
function C1(e3) {
  const [t, n] = R.useState(e3), r = e3 || t;
  return R.useEffect(() => {
    t == null && (bf += 1, n(`mui-${bf}`));
  }, [t]), r;
}
const E1 = { ...zs }, jf = E1.useId;
function P1(e3) {
  if (jf !== void 0) {
    const t = jf();
    return e3 ?? t;
  }
  return C1(e3);
}
function Ti(e3) {
  const t = R.useRef(e3);
  return y1(() => {
    t.current = e3;
  }), R.useRef((...n) => (0, t.current)(...n)).current;
}
function Ff(...e3) {
  const t = R.useRef(void 0), n = R.useCallback((r) => {
    const o = e3.map((i) => {
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
  }, e3);
  return R.useMemo(() => e3.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e3);
}
const Bf = {};
function Gh(e3, t) {
  const n = R.useRef(Bf);
  return n.current === Bf && (n.current = e3(t)), n;
}
const T1 = [];
function _1(e3) {
  R.useEffect(e3, T1);
}
class ic {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    __publicField(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new ic();
  }
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function R1() {
  const e3 = Gh(ic.create).current;
  return _1(e3.disposeEffect), e3;
}
function Uf(e3) {
  try {
    return e3.matches(":focus-visible");
  } catch {
  }
  return false;
}
function Or(e3, t, n = void 0) {
  const r = {};
  for (const o in e3) {
    const i = e3[o];
    let l = "", s = true;
    for (let a = 0; a < i.length; a += 1) {
      const u = i[a];
      u && (l += (s === true ? "" : " ") + t(u), s = false, n && n[u] && (l += " " + n[u]));
    }
    r[o] = l;
  }
  return r;
}
const $1 = R.createContext(void 0);
function N1(e3) {
  const { theme: t, name: n, props: r } = e3;
  if (!t || !t.components || !t.components[n]) return r;
  const o = t.components[n];
  return o.defaultProps ? Da(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Da(o, r) : r;
}
function M1({ props: e3, name: t }) {
  const n = R.useContext($1);
  return N1({ props: e3, name: t, theme: { components: n } });
}
const Wf = { theme: void 0 };
function O1(e3) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Wf.theme = o.theme, i = Kh(e3(Wf)), t = i, n = o.theme), i;
  };
}
function D1(e3 = "") {
  function t(...r) {
    if (!r.length) return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e3 ? `${e3}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e3 ? `${e3}-` : ""}${r}${t(...o)})`;
}
const Vf = (e3, t, n, r = []) => {
  let o = e3;
  t.forEach((i, l) => {
    l === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, z1 = (e3, t, n) => {
  function r(o, i = [], l = []) {
    Object.entries(o).forEach(([s, a]) => {
      (!n || n && !n([...i, s])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, s], Array.isArray(a) ? [...l, s] : l) : t([...i, s], a, l));
    });
  }
  r(e3);
}, I1 = (e3, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e3.includes(r)) || e3[e3.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function $s(e3, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {}, o = {}, i = {}, l = {};
  return z1(e3, (s, a, u) => {
    if ((typeof a == "string" || typeof a == "number") && (!r || !r(s, a))) {
      const m = `--${n ? `${n}-` : ""}${s.join("-")}`, p = I1(s, a);
      Object.assign(o, { [m]: p }), Vf(i, s, `var(${m})`, u), Vf(l, s, `var(${m}, ${p})`, u);
    }
  }, (s) => s[0] === "vars"), { css: o, vars: i, varsWithDefaults: l };
}
function A1(e3, t = {}) {
  const { getSelector: n = P, disableCssColorScheme: r, colorSchemeSelector: o } = t, { colorSchemes: i = {}, components: l, defaultColorScheme: s = "light", ...a } = e3, { vars: u, css: m, varsWithDefaults: p } = $s(a, t);
  let h = p;
  const w = {}, { [s]: v, ...S } = i;
  if (Object.entries(S || {}).forEach(([g, y]) => {
    const { vars: x, css: k, varsWithDefaults: E } = $s(y, t);
    h = Ge(h, E), w[g] = { css: k, vars: x };
  }), v) {
    const { css: g, vars: y, varsWithDefaults: x } = $s(v, t);
    h = Ge(h, x), w[s] = { css: g, vars: y };
  }
  function P(g, y) {
    var _a2, _b;
    let x = o;
    if (o === "class" && (x = ".%s"), o === "data" && (x = "[data-%s]"), (o == null ? void 0 : o.startsWith("data-")) && !o.includes("%s") && (x = `[${o}="%s"]`), g) {
      if (x === "media") return e3.defaultColorScheme === g ? ":root" : { [`@media (prefers-color-scheme: ${((_b = (_a2 = i[g]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || g})`]: { ":root": y } };
      if (x) return e3.defaultColorScheme === g ? `:root, ${x.replace("%s", String(g))}` : x.replace("%s", String(g));
    }
    return ":root";
  }
  return { vars: h, generateThemeVars: () => {
    let g = { ...u };
    return Object.entries(w).forEach(([, { vars: y }]) => {
      g = Ge(g, y);
    }), g;
  }, generateStyleSheets: () => {
    var _a2, _b;
    const g = [], y = e3.defaultColorScheme || "light";
    function x(T, D) {
      Object.keys(D).length && g.push(typeof T == "string" ? { [T]: { ...D } } : T);
    }
    x(n(void 0, { ...m }), m);
    const { [y]: k, ...E } = w;
    if (k) {
      const { css: T } = k, D = (_b = (_a2 = i[y]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode, c = !r && D ? { colorScheme: D, ...T } : { ...T };
      x(n(y, { ...c }), c);
    }
    return Object.entries(E).forEach(([T, { css: D }]) => {
      var _a3, _b2;
      const c = (_b2 = (_a3 = i[T]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode, $ = !r && c ? { colorScheme: c, ...D } : { ...D };
      x(n(T, { ...$ }), $);
    }), g;
  } };
}
function L1(e3) {
  return function(n) {
    return e3 === "media" ? `@media (prefers-color-scheme: ${n})` : e3 ? e3.startsWith("data-") && !e3.includes("%s") ? `[${e3}="${n}"] &` : e3 === "class" ? `.${n} &` : e3 === "data" ? `[data-${n}] &` : `${e3.replace("%s", n)} &` : "&";
  };
}
function Zh() {
  return { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: _o.white, default: _o.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: 0.04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: 0.08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: 0.38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.12 } };
}
const b1 = Zh();
function qh() {
  return { text: { primary: _o.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: _o.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: 0.08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: 0.16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: 0.38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.24 } };
}
const Hf = qh();
function Yf(e3, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e3[t] || (e3.hasOwnProperty(n) ? e3[t] = e3[n] : t === "light" ? e3.light = oc(e3.main, o) : t === "dark" && (e3.dark = rc(e3.main, i)));
}
function j1(e3 = "light") {
  return e3 === "dark" ? { main: Qn[200], light: Qn[50], dark: Qn[400] } : { main: Qn[700], light: Qn[400], dark: Qn[800] };
}
function F1(e3 = "light") {
  return e3 === "dark" ? { main: Xn[200], light: Xn[50], dark: Xn[400] } : { main: Xn[500], light: Xn[300], dark: Xn[700] };
}
function B1(e3 = "light") {
  return e3 === "dark" ? { main: Kn[500], light: Kn[300], dark: Kn[700] } : { main: Kn[700], light: Kn[400], dark: Kn[800] };
}
function U1(e3 = "light") {
  return e3 === "dark" ? { main: Gn[400], light: Gn[300], dark: Gn[700] } : { main: Gn[700], light: Gn[500], dark: Gn[900] };
}
function W1(e3 = "light") {
  return e3 === "dark" ? { main: Zn[400], light: Zn[300], dark: Zn[700] } : { main: Zn[800], light: Zn[500], dark: Zn[900] };
}
function V1(e3 = "light") {
  return e3 === "dark" ? { main: Wr[400], light: Wr[300], dark: Wr[700] } : { main: "#ed6c02", light: Wr[500], dark: Wr[900] };
}
function lc(e3) {
  const { mode: t = "light", contrastThreshold: n = 3, tonalOffset: r = 0.2, ...o } = e3, i = e3.primary || j1(t), l = e3.secondary || F1(t), s = e3.error || B1(t), a = e3.info || U1(t), u = e3.success || W1(t), m = e3.warning || V1(t);
  function p(S) {
    return x1(S, Hf.text.primary) >= n ? Hf.text.primary : b1.text.primary;
  }
  const h = ({ color: S, name: P, mainShade: d = 500, lightShade: f = 300, darkShade: g = 700 }) => {
    if (S = { ...S }, !S.main && S[d] && (S.main = S[d]), !S.hasOwnProperty("main")) throw new Error(In(11, P ? ` (${P})` : "", d));
    if (typeof S.main != "string") throw new Error(In(12, P ? ` (${P})` : "", JSON.stringify(S.main)));
    return Yf(S, "light", f, r), Yf(S, "dark", g, r), S.contrastText || (S.contrastText = p(S.main)), S;
  };
  let w;
  return t === "light" ? w = Zh() : t === "dark" && (w = qh()), Ge({ common: { ..._o }, mode: t, primary: h({ color: i, name: "primary" }), secondary: h({ color: l, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: h({ color: s, name: "error" }), warning: h({ color: m, name: "warning" }), info: h({ color: a, name: "info" }), success: h({ color: u, name: "success" }), grey: Gy, contrastThreshold: n, getContrastText: p, augmentColor: h, tonalOffset: r, ...w }, o);
}
function H1(e3) {
  const t = {};
  return Object.entries(e3).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Y1(e3, t) {
  return { toolbar: { minHeight: 56, [e3.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } }, [e3.up("sm")]: { minHeight: 64 } }, ...t };
}
function K1(e3) {
  return Math.round(e3 * 1e5) / 1e5;
}
const Kf = { textTransform: "uppercase" }, Xf = '"Roboto", "Helvetica", "Arial", sans-serif';
function X1(e3, t) {
  const { fontFamily: n = Xf, fontSize: r = 14, fontWeightLight: o = 300, fontWeightRegular: i = 400, fontWeightMedium: l = 500, fontWeightBold: s = 700, htmlFontSize: a = 16, allVariants: u, pxToRem: m, ...p } = typeof t == "function" ? t(e3) : t, h = r / 14, w = m || ((P) => `${P / a * h}rem`), v = (P, d, f, g, y) => ({ fontFamily: n, fontWeight: P, fontSize: w(d), lineHeight: f, ...n === Xf ? { letterSpacing: `${K1(g / d)}em` } : {}, ...y, ...u }), S = { h1: v(o, 96, 1.167, -1.5), h2: v(o, 60, 1.2, -0.5), h3: v(i, 48, 1.167, 0), h4: v(i, 34, 1.235, 0.25), h5: v(i, 24, 1.334, 0), h6: v(l, 20, 1.6, 0.15), subtitle1: v(i, 16, 1.75, 0.15), subtitle2: v(l, 14, 1.57, 0.1), body1: v(i, 16, 1.5, 0.15), body2: v(i, 14, 1.43, 0.15), button: v(l, 14, 1.75, 0.4, Kf), caption: v(i, 12, 1.66, 0.4), overline: v(i, 12, 2.66, 1, Kf), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
  return Ge({ htmlFontSize: a, pxToRem: w, fontFamily: n, fontSize: r, fontWeightLight: o, fontWeightRegular: i, fontWeightMedium: l, fontWeightBold: s, ...S }, p, { clone: false });
}
const Q1 = 0.2, G1 = 0.14, Z1 = 0.12;
function J(...e3) {
  return [`${e3[0]}px ${e3[1]}px ${e3[2]}px ${e3[3]}px rgba(0,0,0,${Q1})`, `${e3[4]}px ${e3[5]}px ${e3[6]}px ${e3[7]}px rgba(0,0,0,${G1})`, `${e3[8]}px ${e3[9]}px ${e3[10]}px ${e3[11]}px rgba(0,0,0,${Z1})`].join(",");
}
const q1 = ["none", J(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), J(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), J(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), J(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), J(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), J(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), J(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), J(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), J(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), J(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), J(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), J(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), J(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), J(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), J(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), J(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), J(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), J(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), J(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), J(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), J(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), J(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), J(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), J(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], J1 = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, eS = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function Qf(e3) {
  return `${Math.round(e3)}ms`;
}
function tS(e3) {
  if (!e3) return 0;
  const t = e3 / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function nS(e3) {
  const t = { ...J1, ...e3.easing }, n = { ...eS, ...e3.duration };
  return { getAutoHeightDuration: tS, create: (o = ["all"], i = {}) => {
    const { duration: l = n.standard, easing: s = t.easeInOut, delay: a = 0, ...u } = i;
    return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof l == "string" ? l : Qf(l)} ${s} ${typeof a == "string" ? a : Qf(a)}`).join(",");
  }, ...e3, easing: t, duration: n };
}
const rS = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
function oS(e3) {
  return Rt(e3) || typeof e3 > "u" || typeof e3 == "string" || typeof e3 == "boolean" || typeof e3 == "number" || Array.isArray(e3);
}
function Jh(e3 = {}) {
  const t = { ...e3 };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [l, s] = o[i];
      !oS(s) || l.startsWith("unstable_") ? delete r[l] : Rt(s) && (r[l] = { ...s }, n(r[l]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Ia(e3 = {}, ...t) {
  const { breakpoints: n, mixins: r = {}, spacing: o, palette: i = {}, transitions: l = {}, typography: s = {}, shape: a, ...u } = e3;
  if (e3.vars && e3.generateThemeVars === void 0) throw new Error(In(20));
  const m = lc(i), p = tc(e3);
  let h = Ge(p, { mixins: Y1(p.breakpoints, r), palette: m, shadows: q1.slice(), typography: X1(m, s), transitions: nS(l), zIndex: { ...rS } });
  return h = Ge(h, u), h = t.reduce((w, v) => Ge(w, v), h), h.unstable_sxConfig = { ...Bo, ...u == null ? void 0 : u.unstable_sxConfig }, h.unstable_sx = function(v) {
    return An({ sx: v, theme: this });
  }, h.toRuntimeSource = Jh, h;
}
function Aa(e3) {
  let t;
  return e3 < 1 ? t = 5.11916 * e3 ** 2 : t = 4.5 * Math.log(e3 + 1) + 2, Math.round(t * 10) / 1e3;
}
const iS = [...Array(25)].map((e3, t) => {
  if (t === 0) return "none";
  const n = Aa(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function em(e3) {
  return { inputPlaceholder: e3 === "dark" ? 0.5 : 0.42, inputUnderline: e3 === "dark" ? 0.7 : 0.42, switchTrackDisabled: e3 === "dark" ? 0.2 : 0.12, switchTrack: e3 === "dark" ? 0.3 : 0.38 };
}
function tm(e3) {
  return e3 === "dark" ? iS : [];
}
function lS(e3) {
  const { palette: t = { mode: "light" }, opacity: n, overlays: r, ...o } = e3, i = lc(t);
  return { palette: i, opacity: { ...em(i.mode), ...n }, overlays: r || tm(i.mode), ...o };
}
function sS(e3) {
  var _a2;
  return !!e3[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e3[0].match(/sxConfig$/) || e3[0] === "palette" && !!((_a2 = e3[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
}
const aS = (e3) => [...[...Array(25)].map((t, n) => `--${e3 ? `${e3}-` : ""}overlays-${n}`), `--${e3 ? `${e3}-` : ""}palette-AppBar-darkBg`, `--${e3 ? `${e3}-` : ""}palette-AppBar-darkColor`], uS = (e3) => (t, n) => {
  const r = e3.rootSelector || ":root", o = e3.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), (o == null ? void 0 : o.startsWith("data-")) && !o.includes("%s") && (i = `[${o}="%s"]`), e3.defaultColorScheme === t) {
    if (t === "dark") {
      const l = {};
      return aS(e3.cssVarPrefix).forEach((s) => {
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
function cS(e3, t) {
  t.forEach((n) => {
    e3[n] || (e3[n] = {});
  });
}
function C(e3, t, n) {
  !e3[t] && n && (e3[t] = n);
}
function Zr(e3) {
  return typeof e3 != "string" || !e3.startsWith("hsl") ? e3 : Qh(e3);
}
function Lt(e3, t) {
  `${t}Channel` in e3 || (e3[`${t}Channel`] = Gr(Zr(e3[t])));
}
function fS(e3) {
  return typeof e3 == "number" ? `${e3}px` : typeof e3 == "string" || typeof e3 == "function" || Array.isArray(e3) ? e3 : "8px";
}
const Ct = (e3) => {
  try {
    return e3();
  } catch {
  }
}, dS = (e3 = "mui") => D1(e3);
function Ns(e3, t, n, r) {
  if (!t) return;
  t = t === true ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e3[r] = lS({ ...t, palette: { mode: o, ...t == null ? void 0 : t.palette } });
    return;
  }
  const { palette: i, ...l } = Ia({ ...n, palette: { mode: o, ...t == null ? void 0 : t.palette } });
  return e3[r] = { ...t, palette: i, opacity: { ...em(o), ...t == null ? void 0 : t.opacity }, overlays: (t == null ? void 0 : t.overlays) || tm(o) }, l;
}
function pS(e3 = {}, ...t) {
  const { colorSchemes: n = { light: true }, defaultColorScheme: r, disableCssColorScheme: o = false, cssVarPrefix: i = "mui", shouldSkipGeneratingVar: l = sS, colorSchemeSelector: s = n.light && n.dark ? "media" : void 0, rootSelector: a = ":root", ...u } = e3, m = Object.keys(n)[0], p = r || (n.light && m !== "light" ? "light" : m), h = dS(i), { [p]: w, light: v, dark: S, ...P } = n, d = { ...P };
  let f = w;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (f = true), !f) throw new Error(In(21, p));
  const g = Ns(d, f, u, p);
  v && !d.light && Ns(d, v, void 0, "light"), S && !d.dark && Ns(d, S, void 0, "dark");
  let y = { defaultColorScheme: p, ...g, cssVarPrefix: i, colorSchemeSelector: s, rootSelector: a, getCssVar: h, colorSchemes: d, font: { ...H1(g.typography), ...g.font }, spacing: fS(u.spacing) };
  Object.keys(y.colorSchemes).forEach((D) => {
    const c = y.colorSchemes[D].palette, $ = (I) => {
      const L = I.split("-"), Y = L[1], We = L[2];
      return h(I, c[Y][We]);
    };
    if (c.mode === "light" && (C(c.common, "background", "#fff"), C(c.common, "onBackground", "#000")), c.mode === "dark" && (C(c.common, "background", "#000"), C(c.common, "onBackground", "#fff")), cS(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      C(c.Alert, "errorColor", K(c.error.light, 0.6)), C(c.Alert, "infoColor", K(c.info.light, 0.6)), C(c.Alert, "successColor", K(c.success.light, 0.6)), C(c.Alert, "warningColor", K(c.warning.light, 0.6)), C(c.Alert, "errorFilledBg", $("palette-error-main")), C(c.Alert, "infoFilledBg", $("palette-info-main")), C(c.Alert, "successFilledBg", $("palette-success-main")), C(c.Alert, "warningFilledBg", $("palette-warning-main")), C(c.Alert, "errorFilledColor", Ct(() => c.getContrastText(c.error.main))), C(c.Alert, "infoFilledColor", Ct(() => c.getContrastText(c.info.main))), C(c.Alert, "successFilledColor", Ct(() => c.getContrastText(c.success.main))), C(c.Alert, "warningFilledColor", Ct(() => c.getContrastText(c.warning.main))), C(c.Alert, "errorStandardBg", X(c.error.light, 0.9)), C(c.Alert, "infoStandardBg", X(c.info.light, 0.9)), C(c.Alert, "successStandardBg", X(c.success.light, 0.9)), C(c.Alert, "warningStandardBg", X(c.warning.light, 0.9)), C(c.Alert, "errorIconColor", $("palette-error-main")), C(c.Alert, "infoIconColor", $("palette-info-main")), C(c.Alert, "successIconColor", $("palette-success-main")), C(c.Alert, "warningIconColor", $("palette-warning-main")), C(c.AppBar, "defaultBg", $("palette-grey-100")), C(c.Avatar, "defaultBg", $("palette-grey-400")), C(c.Button, "inheritContainedBg", $("palette-grey-300")), C(c.Button, "inheritContainedHoverBg", $("palette-grey-A100")), C(c.Chip, "defaultBorder", $("palette-grey-400")), C(c.Chip, "defaultAvatarColor", $("palette-grey-700")), C(c.Chip, "defaultIconColor", $("palette-grey-700")), C(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), C(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), C(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), C(c.LinearProgress, "primaryBg", X(c.primary.main, 0.62)), C(c.LinearProgress, "secondaryBg", X(c.secondary.main, 0.62)), C(c.LinearProgress, "errorBg", X(c.error.main, 0.62)), C(c.LinearProgress, "infoBg", X(c.info.main, 0.62)), C(c.LinearProgress, "successBg", X(c.success.main, 0.62)), C(c.LinearProgress, "warningBg", X(c.warning.main, 0.62)), C(c.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), C(c.Slider, "primaryTrack", X(c.primary.main, 0.62)), C(c.Slider, "secondaryTrack", X(c.secondary.main, 0.62)), C(c.Slider, "errorTrack", X(c.error.main, 0.62)), C(c.Slider, "infoTrack", X(c.info.main, 0.62)), C(c.Slider, "successTrack", X(c.success.main, 0.62)), C(c.Slider, "warningTrack", X(c.warning.main, 0.62));
      const I = ai(c.background.default, 0.8);
      C(c.SnackbarContent, "bg", I), C(c.SnackbarContent, "color", Ct(() => c.getContrastText(I))), C(c.SpeedDialAction, "fabHoverBg", ai(c.background.paper, 0.15)), C(c.StepConnector, "border", $("palette-grey-400")), C(c.StepContent, "border", $("palette-grey-400")), C(c.Switch, "defaultColor", $("palette-common-white")), C(c.Switch, "defaultDisabledColor", $("palette-grey-100")), C(c.Switch, "primaryDisabledColor", X(c.primary.main, 0.62)), C(c.Switch, "secondaryDisabledColor", X(c.secondary.main, 0.62)), C(c.Switch, "errorDisabledColor", X(c.error.main, 0.62)), C(c.Switch, "infoDisabledColor", X(c.info.main, 0.62)), C(c.Switch, "successDisabledColor", X(c.success.main, 0.62)), C(c.Switch, "warningDisabledColor", X(c.warning.main, 0.62)), C(c.TableCell, "border", X(si(c.divider, 1), 0.88)), C(c.Tooltip, "bg", si(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      C(c.Alert, "errorColor", X(c.error.light, 0.6)), C(c.Alert, "infoColor", X(c.info.light, 0.6)), C(c.Alert, "successColor", X(c.success.light, 0.6)), C(c.Alert, "warningColor", X(c.warning.light, 0.6)), C(c.Alert, "errorFilledBg", $("palette-error-dark")), C(c.Alert, "infoFilledBg", $("palette-info-dark")), C(c.Alert, "successFilledBg", $("palette-success-dark")), C(c.Alert, "warningFilledBg", $("palette-warning-dark")), C(c.Alert, "errorFilledColor", Ct(() => c.getContrastText(c.error.dark))), C(c.Alert, "infoFilledColor", Ct(() => c.getContrastText(c.info.dark))), C(c.Alert, "successFilledColor", Ct(() => c.getContrastText(c.success.dark))), C(c.Alert, "warningFilledColor", Ct(() => c.getContrastText(c.warning.dark))), C(c.Alert, "errorStandardBg", K(c.error.light, 0.9)), C(c.Alert, "infoStandardBg", K(c.info.light, 0.9)), C(c.Alert, "successStandardBg", K(c.success.light, 0.9)), C(c.Alert, "warningStandardBg", K(c.warning.light, 0.9)), C(c.Alert, "errorIconColor", $("palette-error-main")), C(c.Alert, "infoIconColor", $("palette-info-main")), C(c.Alert, "successIconColor", $("palette-success-main")), C(c.Alert, "warningIconColor", $("palette-warning-main")), C(c.AppBar, "defaultBg", $("palette-grey-900")), C(c.AppBar, "darkBg", $("palette-background-paper")), C(c.AppBar, "darkColor", $("palette-text-primary")), C(c.Avatar, "defaultBg", $("palette-grey-600")), C(c.Button, "inheritContainedBg", $("palette-grey-800")), C(c.Button, "inheritContainedHoverBg", $("palette-grey-700")), C(c.Chip, "defaultBorder", $("palette-grey-700")), C(c.Chip, "defaultAvatarColor", $("palette-grey-300")), C(c.Chip, "defaultIconColor", $("palette-grey-300")), C(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), C(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), C(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), C(c.LinearProgress, "primaryBg", K(c.primary.main, 0.5)), C(c.LinearProgress, "secondaryBg", K(c.secondary.main, 0.5)), C(c.LinearProgress, "errorBg", K(c.error.main, 0.5)), C(c.LinearProgress, "infoBg", K(c.info.main, 0.5)), C(c.LinearProgress, "successBg", K(c.success.main, 0.5)), C(c.LinearProgress, "warningBg", K(c.warning.main, 0.5)), C(c.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), C(c.Slider, "primaryTrack", K(c.primary.main, 0.5)), C(c.Slider, "secondaryTrack", K(c.secondary.main, 0.5)), C(c.Slider, "errorTrack", K(c.error.main, 0.5)), C(c.Slider, "infoTrack", K(c.info.main, 0.5)), C(c.Slider, "successTrack", K(c.success.main, 0.5)), C(c.Slider, "warningTrack", K(c.warning.main, 0.5));
      const I = ai(c.background.default, 0.98);
      C(c.SnackbarContent, "bg", I), C(c.SnackbarContent, "color", Ct(() => c.getContrastText(I))), C(c.SpeedDialAction, "fabHoverBg", ai(c.background.paper, 0.15)), C(c.StepConnector, "border", $("palette-grey-600")), C(c.StepContent, "border", $("palette-grey-600")), C(c.Switch, "defaultColor", $("palette-grey-300")), C(c.Switch, "defaultDisabledColor", $("palette-grey-600")), C(c.Switch, "primaryDisabledColor", K(c.primary.main, 0.55)), C(c.Switch, "secondaryDisabledColor", K(c.secondary.main, 0.55)), C(c.Switch, "errorDisabledColor", K(c.error.main, 0.55)), C(c.Switch, "infoDisabledColor", K(c.info.main, 0.55)), C(c.Switch, "successDisabledColor", K(c.success.main, 0.55)), C(c.Switch, "warningDisabledColor", K(c.warning.main, 0.55)), C(c.TableCell, "border", K(si(c.divider, 1), 0.68)), C(c.Tooltip, "bg", si(c.grey[700], 0.92));
    }
    Lt(c.background, "default"), Lt(c.background, "paper"), Lt(c.common, "background"), Lt(c.common, "onBackground"), Lt(c, "divider"), Object.keys(c).forEach((I) => {
      const L = c[I];
      I !== "tonalOffset" && L && typeof L == "object" && (L.main && C(c[I], "mainChannel", Gr(Zr(L.main))), L.light && C(c[I], "lightChannel", Gr(Zr(L.light))), L.dark && C(c[I], "darkChannel", Gr(Zr(L.dark))), L.contrastText && C(c[I], "contrastTextChannel", Gr(Zr(L.contrastText))), I === "text" && (Lt(c[I], "primary"), Lt(c[I], "secondary")), I === "action" && (L.active && Lt(c[I], "active"), L.selected && Lt(c[I], "selected")));
    });
  }), y = t.reduce((D, c) => Ge(D, c), y);
  const x = { prefix: i, disableCssColorScheme: o, shouldSkipGeneratingVar: l, getSelector: uS(y) }, { vars: k, generateThemeVars: E, generateStyleSheets: T } = A1(y, x);
  return y.vars = k, Object.entries(y.colorSchemes[y.defaultColorScheme]).forEach(([D, c]) => {
    y[D] = c;
  }), y.generateThemeVars = E, y.generateStyleSheets = T, y.generateSpacing = function() {
    return Bh(u.spacing, Ju(this));
  }, y.getColorSchemeSelector = L1(s), y.spacing = y.generateSpacing(), y.shouldSkipGeneratingVar = l, y.unstable_sxConfig = { ...Bo, ...u == null ? void 0 : u.unstable_sxConfig }, y.unstable_sx = function(c) {
    return An({ sx: c, theme: this });
  }, y.toRuntimeSource = Jh, y;
}
function Gf(e3, t, n) {
  e3.colorSchemes && n && (e3.colorSchemes[t] = { ...n !== true && n, palette: lc({ ...n === true ? {} : n.palette, mode: t }) });
}
function nm(e3 = {}, ...t) {
  const { palette: n, cssVariables: r = false, colorSchemes: o = n ? void 0 : { light: true }, defaultColorScheme: i = n == null ? void 0 : n.mode, ...l } = e3, s = i || "light", a = o == null ? void 0 : o[s], u = { ...o, ...n ? { [s]: { ...typeof a != "boolean" && a, palette: n } } : void 0 };
  if (r === false) {
    if (!("colorSchemes" in e3)) return Ia(e3, ...t);
    let m = n;
    "palette" in e3 || u[s] && (u[s] !== true ? m = u[s].palette : s === "dark" && (m = { mode: "dark" }));
    const p = Ia({ ...e3, palette: m }, ...t);
    return p.defaultColorScheme = s, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = { ...u.light !== true && u.light, palette: p.palette }, Gf(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = { ...u.dark !== true && u.dark, palette: p.palette }, Gf(p, "light", u.light)), p;
  }
  return !n && !("light" in u) && s === "light" && (u.light = true), pS({ ...l, colorSchemes: u, defaultColorScheme: s, ...typeof r != "boolean" && r }, ...t);
}
const rm = nm();
function hS() {
  const e3 = Uh(rm);
  return e3[bu] || e3;
}
function mS(e3) {
  return e3 !== "ownerState" && e3 !== "theme" && e3 !== "sx" && e3 !== "as";
}
const gS = (e3) => mS(e3) && e3 !== "classes", xt = d1({ themeId: bu, defaultTheme: rm, rootShouldForwardProp: gS });
function yS() {
  return Wh;
}
const Ln = O1;
function Bn(e3) {
  return M1(e3);
}
function vS(e3) {
  return Fn("MuiSvgIcon", e3);
}
xn("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const SS = (e3) => {
  const { color: t, fontSize: n, classes: r } = e3, o = { root: ["root", t !== "inherit" && `color${me(t)}`, `fontSize${me(n)}`] };
  return Or(o, vS, r);
}, wS = xt("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, n.color !== "inherit" && t[`color${me(n.color)}`], t[`fontSize${me(n.fontSize)}`]];
} })(Ln(({ theme: e3 }) => {
  var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2;
  return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", flexShrink: 0, transition: (_d2 = (_a2 = e3.transitions) == null ? void 0 : _a2.create) == null ? void 0 : _d2.call(_a2, "fill", { duration: (_c2 = (_b = (e3.vars ?? e3).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c2.shorter }), variants: [{ props: (t) => !t.hasSvgAsChild, style: { fill: "currentColor" } }, { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } }, { props: { fontSize: "small" }, style: { fontSize: ((_f2 = (_e2 = e3.typography) == null ? void 0 : _e2.pxToRem) == null ? void 0 : _f2.call(_e2, 20)) || "1.25rem" } }, { props: { fontSize: "medium" }, style: { fontSize: ((_h2 = (_g2 = e3.typography) == null ? void 0 : _g2.pxToRem) == null ? void 0 : _h2.call(_g2, 24)) || "1.5rem" } }, { props: { fontSize: "large" }, style: { fontSize: ((_j = (_i2 = e3.typography) == null ? void 0 : _i2.pxToRem) == null ? void 0 : _j.call(_i2, 35)) || "2.1875rem" } }, ...Object.entries((e3.vars ?? e3).palette).filter(([, t]) => t && t.main).map(([t]) => {
    var _a3, _b2;
    return { props: { color: t }, style: { color: (_b2 = (_a3 = (e3.vars ?? e3).palette) == null ? void 0 : _a3[t]) == null ? void 0 : _b2.main } };
  }), { props: { color: "action" }, style: { color: (_l2 = (_k = (e3.vars ?? e3).palette) == null ? void 0 : _k.action) == null ? void 0 : _l2.active } }, { props: { color: "disabled" }, style: { color: (_n2 = (_m2 = (e3.vars ?? e3).palette) == null ? void 0 : _m2.action) == null ? void 0 : _n2.disabled } }, { props: { color: "inherit" }, style: { color: void 0 } }] };
})), La = R.forwardRef(function(t, n) {
  const r = Bn({ props: t, name: "MuiSvgIcon" }), { children: o, className: i, color: l = "inherit", component: s = "svg", fontSize: a = "medium", htmlColor: u, inheritViewBox: m = false, titleAccess: p, viewBox: h = "0 0 24 24", ...w } = r, v = R.isValidElement(o) && o.type === "svg", S = { ...r, color: l, component: s, fontSize: a, instanceFontSize: t.fontSize, inheritViewBox: m, viewBox: h, hasSvgAsChild: v }, P = {};
  m || (P.viewBox = h);
  const d = SS(S);
  return O.jsxs(wS, { as: s, className: Re(d.root, i), focusable: "false", color: u, "aria-hidden": p ? void 0 : true, role: p ? "img" : void 0, ref: n, ...P, ...w, ...v && o.props, ownerState: S, children: [v ? o.props.children : o, p ? O.jsx("title", { children: p }) : null] });
});
La.muiName = "SvgIcon";
function Un(e3, t) {
  function n(r, o) {
    return O.jsx(La, { "data-testid": void 0, ref: o, ...r, children: e3 });
  }
  return n.muiName = La.muiName, R.memo(R.forwardRef(n));
}
function xS(e3, t) {
  if (e3 == null) return {};
  var n = {};
  for (var r in e3) if ({}.hasOwnProperty.call(e3, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e3[r];
  }
  return n;
}
function ba(e3, t) {
  return ba = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, ba(e3, t);
}
function kS(e3, t) {
  e3.prototype = Object.create(t.prototype), e3.prototype.constructor = e3, ba(e3, t);
}
const Zf = qn.createContext(null);
function CS(e3) {
  if (e3 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e3;
}
function sc(e3, t) {
  var n = function(i) {
    return t && R.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e3 && R.Children.map(e3, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function ES(e3, t) {
  e3 = e3 || {}, t = t || {};
  function n(m) {
    return m in t ? t[m] : e3[m];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e3) i in t ? o.length && (r[i] = o, o = []) : o.push(i);
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
function _n(e3, t, n) {
  return n[t] != null ? n[t] : e3.props[t];
}
function PS(e3, t) {
  return sc(e3.children, function(n) {
    return R.cloneElement(n, { onExited: t.bind(null, n), in: true, appear: _n(n, "appear", e3), enter: _n(n, "enter", e3), exit: _n(n, "exit", e3) });
  });
}
function TS(e3, t, n) {
  var r = sc(e3.children), o = ES(t, r);
  return Object.keys(o).forEach(function(i) {
    var l = o[i];
    if (R.isValidElement(l)) {
      var s = i in t, a = i in r, u = t[i], m = R.isValidElement(u) && !u.props.in;
      a && (!s || m) ? o[i] = R.cloneElement(l, { onExited: n.bind(null, l), in: true, exit: _n(l, "exit", e3), enter: _n(l, "enter", e3) }) : !a && s && !m ? o[i] = R.cloneElement(l, { in: false }) : a && s && R.isValidElement(u) && (o[i] = R.cloneElement(l, { onExited: n.bind(null, l), in: u.props.in, exit: _n(l, "exit", e3), enter: _n(l, "enter", e3) }));
    }
  }), o;
}
var _S = Object.values || function(e3) {
  return Object.keys(e3).map(function(t) {
    return e3[t];
  });
}, RS = { component: "div", childFactory: function(t) {
  return t;
} }, ac = function(e3) {
  kS(t, e3);
  function t(r, o) {
    var i;
    i = e3.call(this, r, o) || this;
    var l = i.handleExited.bind(CS(i));
    return i.state = { contextValue: { isMounting: true }, handleExited: l, firstRender: true }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = true, this.setState({ contextValue: { isMounting: false } });
  }, n.componentWillUnmount = function() {
    this.mounted = false;
  }, t.getDerivedStateFromProps = function(o, i) {
    var l = i.children, s = i.handleExited, a = i.firstRender;
    return { children: a ? PS(o, s) : TS(o, l, s), firstRender: false };
  }, n.handleExited = function(o, i) {
    var l = sc(this.props.children);
    o.key in l || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var a = Zi({}, s.children);
      return delete a[o.key], { children: a };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, l = o.childFactory, s = xS(o, ["component", "childFactory"]), a = this.state.contextValue, u = _S(this.state.children).map(l);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? qn.createElement(Zf.Provider, { value: a }, u) : qn.createElement(Zf.Provider, { value: a }, qn.createElement(i, s, u));
  }, t;
}(qn.Component);
ac.propTypes = {};
ac.defaultProps = RS;
function $S(e3) {
  return Fn("MuiPaper", e3);
}
xn("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const NS = (e3) => {
  const { square: t, elevation: n, variant: r, classes: o } = e3, i = { root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`] };
  return Or(i, $S, o);
}, MS = xt("div", { name: "MuiPaper", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
} })(Ln(({ theme: e3 }) => ({ backgroundColor: (e3.vars || e3).palette.background.paper, color: (e3.vars || e3).palette.text.primary, transition: e3.transitions.create("box-shadow"), variants: [{ props: ({ ownerState: t }) => !t.square, style: { borderRadius: e3.shape.borderRadius } }, { props: { variant: "outlined" }, style: { border: `1px solid ${(e3.vars || e3).palette.divider}` } }, { props: { variant: "elevation" }, style: { boxShadow: "var(--Paper-shadow)", backgroundImage: "var(--Paper-overlay)" } }] }))), OS = R.forwardRef(function(t, n) {
  var _a2;
  const r = Bn({ props: t, name: "MuiPaper" }), o = hS(), { className: i, component: l = "div", elevation: s = 1, square: a = false, variant: u = "elevation", ...m } = r, p = { ...r, component: l, elevation: s, square: a, variant: u }, h = NS(p);
  return O.jsx(MS, { as: l, ownerState: p, className: Re(h.root, i), ref: n, ...m, style: { ...u === "elevation" && { "--Paper-shadow": (o.vars || o).shadows[s], ...o.vars && { "--Paper-overlay": (_a2 = o.vars.overlays) == null ? void 0 : _a2[s] }, ...!o.vars && o.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${Mo("#fff", Aa(s))}, ${Mo("#fff", Aa(s))})` } }, ...m.style } });
});
class el {
  constructor() {
    __publicField(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    });
    this.ref = { current: null }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
  }
  static create() {
    return new el();
  }
  static use() {
    const t = Gh(el.create).current, [n, r] = R.useState(false);
    return t.shouldMount = n, t.setShouldMount = r, R.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = zS(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
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
function DS() {
  return el.use();
}
function zS() {
  let e3, t;
  const n = new Promise((r, o) => {
    e3 = r, t = o;
  });
  return n.resolve = e3, n.reject = t, n;
}
function IS(e3) {
  const { className: t, classes: n, pulsate: r = false, rippleX: o, rippleY: i, rippleSize: l, in: s, onExited: a, timeout: u } = e3, [m, p] = R.useState(false), h = Re(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), w = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o }, v = Re(n.child, m && n.childLeaving, r && n.childPulsate);
  return !s && !m && p(true), R.useEffect(() => {
    if (!s && a != null) {
      const S = setTimeout(a, u);
      return () => {
        clearTimeout(S);
      };
    }
  }, [a, s, u]), O.jsx("span", { className: h, style: w, children: O.jsx("span", { className: v }) });
}
const rt = xn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ja = 550, AS = 80, LS = bo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, bS = bo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, jS = bo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, FS = xt("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), BS = xt(IS, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${rt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${LS};
    animation-duration: ${ja}ms;
    animation-timing-function: ${({ theme: e3 }) => e3.transitions.easing.easeInOut};
  }

  &.${rt.ripplePulsate} {
    animation-duration: ${({ theme: e3 }) => e3.transitions.duration.shorter}ms;
  }

  & .${rt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${rt.childLeaving} {
    opacity: 0;
    animation-name: ${bS};
    animation-duration: ${ja}ms;
    animation-timing-function: ${({ theme: e3 }) => e3.transitions.easing.easeInOut};
  }

  & .${rt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${jS};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e3 }) => e3.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, US = R.forwardRef(function(t, n) {
  const r = Bn({ props: t, name: "MuiTouchRipple" }), { center: o = false, classes: i = {}, className: l, ...s } = r, [a, u] = R.useState([]), m = R.useRef(0), p = R.useRef(null);
  R.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [a]);
  const h = R.useRef(false), w = R1(), v = R.useRef(null), S = R.useRef(null), P = R.useCallback((y) => {
    const { pulsate: x, rippleX: k, rippleY: E, rippleSize: T, cb: D } = y;
    u((c) => [...c, O.jsx(BS, { classes: { ripple: Re(i.ripple, rt.ripple), rippleVisible: Re(i.rippleVisible, rt.rippleVisible), ripplePulsate: Re(i.ripplePulsate, rt.ripplePulsate), child: Re(i.child, rt.child), childLeaving: Re(i.childLeaving, rt.childLeaving), childPulsate: Re(i.childPulsate, rt.childPulsate) }, timeout: ja, pulsate: x, rippleX: k, rippleY: E, rippleSize: T }, m.current)]), m.current += 1, p.current = D;
  }, [i]), d = R.useCallback((y = {}, x = {}, k = () => {
  }) => {
    const { pulsate: E = false, center: T = o || x.pulsate, fakeElement: D = false } = x;
    if ((y == null ? void 0 : y.type) === "mousedown" && h.current) {
      h.current = false;
      return;
    }
    (y == null ? void 0 : y.type) === "touchstart" && (h.current = true);
    const c = D ? null : S.current, $ = c ? c.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    let I, L, Y;
    if (T || y === void 0 || y.clientX === 0 && y.clientY === 0 || !y.clientX && !y.touches) I = Math.round($.width / 2), L = Math.round($.height / 2);
    else {
      const { clientX: We, clientY: Se } = y.touches && y.touches.length > 0 ? y.touches[0] : y;
      I = Math.round(We - $.left), L = Math.round(Se - $.top);
    }
    if (T) Y = Math.sqrt((2 * $.width ** 2 + $.height ** 2) / 3), Y % 2 === 0 && (Y += 1);
    else {
      const We = Math.max(Math.abs((c ? c.clientWidth : 0) - I), I) * 2 + 2, Se = Math.max(Math.abs((c ? c.clientHeight : 0) - L), L) * 2 + 2;
      Y = Math.sqrt(We ** 2 + Se ** 2);
    }
    (y == null ? void 0 : y.touches) ? v.current === null && (v.current = () => {
      P({ pulsate: E, rippleX: I, rippleY: L, rippleSize: Y, cb: k });
    }, w.start(AS, () => {
      v.current && (v.current(), v.current = null);
    })) : P({ pulsate: E, rippleX: I, rippleY: L, rippleSize: Y, cb: k });
  }, [o, P, w]), f = R.useCallback(() => {
    d({}, { pulsate: true });
  }, [d]), g = R.useCallback((y, x) => {
    if (w.clear(), (y == null ? void 0 : y.type) === "touchend" && v.current) {
      v.current(), v.current = null, w.start(0, () => {
        g(y, x);
      });
      return;
    }
    v.current = null, u((k) => k.length > 0 ? k.slice(1) : k), p.current = x;
  }, [w]);
  return R.useImperativeHandle(n, () => ({ pulsate: f, start: d, stop: g }), [f, d, g]), O.jsx(FS, { className: Re(rt.root, i.root, l), ref: S, ...s, children: O.jsx(ac, { component: null, exit: true, children: a }) });
});
function WS(e3) {
  return Fn("MuiButtonBase", e3);
}
const VS = xn("MuiButtonBase", ["root", "disabled", "focusVisible"]), HS = (e3) => {
  const { disabled: t, focusVisible: n, focusVisibleClassName: r, classes: o } = e3, l = Or({ root: ["root", t && "disabled", n && "focusVisible"] }, WS, o);
  return n && r && (l.root += ` ${r}`), l;
}, YS = xt("button", { name: "MuiButtonBase", slot: "Root", overridesResolver: (e3, t) => t.root })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${VS.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }), KS = R.forwardRef(function(t, n) {
  const r = Bn({ props: t, name: "MuiButtonBase" }), { action: o, centerRipple: i = false, children: l, className: s, component: a = "button", disabled: u = false, disableRipple: m = false, disableTouchRipple: p = false, focusRipple: h = false, focusVisibleClassName: w, LinkComponent: v = "a", onBlur: S, onClick: P, onContextMenu: d, onDragLeave: f, onFocus: g, onFocusVisible: y, onKeyDown: x, onKeyUp: k, onMouseDown: E, onMouseLeave: T, onMouseUp: D, onTouchEnd: c, onTouchMove: $, onTouchStart: I, tabIndex: L = 0, TouchRippleProps: Y, touchRippleRef: We, type: Se, ...nt } = r, N = R.useRef(null), z = DS(), A = Ff(z.ref, We), [W, te] = R.useState(false);
  u && W && te(false), R.useImperativeHandle(o, () => ({ focusVisible: () => {
    te(true), N.current.focus();
  } }), []);
  const Vn = z.shouldMount && !m && !u;
  R.useEffect(() => {
    W && h && !m && z.pulsate();
  }, [m, h, W, z]);
  const It = bt(z, "start", E, p), Dr = bt(z, "stop", d, p), At = bt(z, "stop", f, p), Hn = bt(z, "stop", D, p), hm = bt(z, "stop", (b) => {
    W && b.preventDefault(), T && T(b);
  }, p), mm = bt(z, "start", I, p), gm = bt(z, "stop", c, p), ym = bt(z, "stop", $, p), vm = bt(z, "stop", (b) => {
    Uf(b.target) || te(false), S && S(b);
  }, false), Sm = Ti((b) => {
    N.current || (N.current = b.currentTarget), Uf(b.target) && (te(true), y && y(b)), g && g(b);
  }), es = () => {
    const b = N.current;
    return a && a !== "button" && !(b.tagName === "A" && b.href);
  }, wm = Ti((b) => {
    h && !b.repeat && W && b.key === " " && z.stop(b, () => {
      z.start(b);
    }), b.target === b.currentTarget && es() && b.key === " " && b.preventDefault(), x && x(b), b.target === b.currentTarget && es() && b.key === "Enter" && !u && (b.preventDefault(), P && P(b));
  }), xm = Ti((b) => {
    h && b.key === " " && W && !b.defaultPrevented && z.stop(b, () => {
      z.pulsate(b);
    }), k && k(b), P && b.target === b.currentTarget && es() && b.key === " " && !b.defaultPrevented && P(b);
  });
  let Uo = a;
  Uo === "button" && (nt.href || nt.to) && (Uo = v);
  const zr = {};
  Uo === "button" ? (zr.type = Se === void 0 ? "button" : Se, zr.disabled = u) : (!nt.href && !nt.to && (zr.role = "button"), u && (zr["aria-disabled"] = u));
  const km = Ff(n, N), dc = { ...r, centerRipple: i, component: a, disabled: u, disableRipple: m, disableTouchRipple: p, focusRipple: h, tabIndex: L, focusVisible: W }, Cm = HS(dc);
  return O.jsxs(YS, { as: Uo, className: Re(Cm.root, s), ownerState: dc, onBlur: vm, onClick: P, onContextMenu: Dr, onFocus: Sm, onKeyDown: wm, onKeyUp: xm, onMouseDown: It, onMouseLeave: hm, onMouseUp: Hn, onDragLeave: At, onTouchEnd: gm, onTouchMove: ym, onTouchStart: mm, ref: km, tabIndex: u ? -1 : L, type: Se, ...zr, ...nt, children: [l, Vn ? O.jsx(US, { ref: A, center: i, ...Y }) : null] });
});
function bt(e3, t, n, r = false) {
  return Ti((o) => (n && n(o), r || e3[t](o), true));
}
function XS(e3) {
  return typeof e3.main == "string";
}
function QS(e3, t = []) {
  if (!XS(e3)) return false;
  for (const n of t) if (!e3.hasOwnProperty(n) || typeof e3[n] != "string") return false;
  return true;
}
function tl(e3 = []) {
  return ([, t]) => t && QS(t, e3);
}
function GS(e3) {
  return Fn("MuiCircularProgress", e3);
}
xn("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Zt = 44, Fa = bo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Ba = bo`
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
`, ZS = typeof Fa != "string" ? Xu`
        animation: ${Fa} 1.4s linear infinite;
      ` : null, qS = typeof Ba != "string" ? Xu`
        animation: ${Ba} 1.4s ease-in-out infinite;
      ` : null, JS = (e3) => {
  const { classes: t, variant: n, color: r, disableShrink: o } = e3, i = { root: ["root", n, `color${me(r)}`], svg: ["svg"], circle: ["circle", `circle${me(n)}`, o && "circleDisableShrink"] };
  return Or(i, GS, t);
}, ew = xt("span", { name: "MuiCircularProgress", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, t[n.variant], t[`color${me(n.color)}`]];
} })(Ln(({ theme: e3 }) => ({ display: "inline-block", variants: [{ props: { variant: "determinate" }, style: { transition: e3.transitions.create("transform") } }, { props: { variant: "indeterminate" }, style: ZS || { animation: `${Fa} 1.4s linear infinite` } }, ...Object.entries(e3.palette).filter(tl()).map(([t]) => ({ props: { color: t }, style: { color: (e3.vars || e3).palette[t].main } }))] }))), tw = xt("svg", { name: "MuiCircularProgress", slot: "Svg", overridesResolver: (e3, t) => t.svg })({ display: "block" }), nw = xt("circle", { name: "MuiCircularProgress", slot: "Circle", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.circle, t[`circle${me(n.variant)}`], n.disableShrink && t.circleDisableShrink];
} })(Ln(({ theme: e3 }) => ({ stroke: "currentColor", variants: [{ props: { variant: "determinate" }, style: { transition: e3.transitions.create("stroke-dashoffset") } }, { props: { variant: "indeterminate" }, style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 } }, { props: ({ ownerState: t }) => t.variant === "indeterminate" && !t.disableShrink, style: qS || { animation: `${Ba} 1.4s ease-in-out infinite` } }] }))), rw = R.forwardRef(function(t, n) {
  const r = Bn({ props: t, name: "MuiCircularProgress" }), { className: o, color: i = "primary", disableShrink: l = false, size: s = 40, style: a, thickness: u = 3.6, value: m = 0, variant: p = "indeterminate", ...h } = r, w = { ...r, color: i, disableShrink: l, size: s, thickness: u, value: m, variant: p }, v = JS(w), S = {}, P = {}, d = {};
  if (p === "determinate") {
    const f = 2 * Math.PI * ((Zt - u) / 2);
    S.strokeDasharray = f.toFixed(3), d["aria-valuenow"] = Math.round(m), S.strokeDashoffset = `${((100 - m) / 100 * f).toFixed(3)}px`, P.transform = "rotate(-90deg)";
  }
  return O.jsx(ew, { className: Re(v.root, o), style: { width: s, height: s, ...P, ...a }, ownerState: w, ref: n, role: "progressbar", ...d, ...h, children: O.jsx(tw, { className: v.svg, ownerState: w, viewBox: `${Zt / 2} ${Zt / 2} ${Zt} ${Zt}`, children: O.jsx(nw, { className: v.circle, style: S, ownerState: w, cx: Zt, cy: Zt, r: (Zt - u) / 2, fill: "none", strokeWidth: u }) }) });
});
function ow(e3) {
  return Fn("MuiIconButton", e3);
}
const qf = xn("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), iw = (e3) => {
  const { classes: t, disabled: n, color: r, edge: o, size: i, loading: l } = e3, s = { root: ["root", l && "loading", n && "disabled", r !== "default" && `color${me(r)}`, o && `edge${me(o)}`, `size${me(i)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] };
  return Or(s, ow, t);
}, lw = xt(KS, { name: "MuiIconButton", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${me(n.color)}`], n.edge && t[`edge${me(n.edge)}`], t[`size${me(n.size)}`]];
} })(Ln(({ theme: e3 }) => ({ textAlign: "center", flex: "0 0 auto", fontSize: e3.typography.pxToRem(24), padding: 8, borderRadius: "50%", color: (e3.vars || e3).palette.action.active, transition: e3.transitions.create("background-color", { duration: e3.transitions.duration.shortest }), variants: [{ props: (t) => !t.disableRipple, style: { "--IconButton-hoverBg": e3.vars ? `rgba(${e3.vars.palette.action.activeChannel} / ${e3.vars.palette.action.hoverOpacity})` : Mo(e3.palette.action.active, e3.palette.action.hoverOpacity), "&:hover": { backgroundColor: "var(--IconButton-hoverBg)", "@media (hover: none)": { backgroundColor: "transparent" } } } }, { props: { edge: "start" }, style: { marginLeft: -12 } }, { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: { edge: "end" }, style: { marginRight: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }] })), Ln(({ theme: e3 }) => ({ variants: [{ props: { color: "inherit" }, style: { color: "inherit" } }, ...Object.entries(e3.palette).filter(tl()).map(([t]) => ({ props: { color: t }, style: { color: (e3.vars || e3).palette[t].main } })), ...Object.entries(e3.palette).filter(tl()).map(([t]) => ({ props: { color: t }, style: { "--IconButton-hoverBg": e3.vars ? `rgba(${(e3.vars || e3).palette[t].mainChannel} / ${e3.vars.palette.action.hoverOpacity})` : Mo((e3.vars || e3).palette[t].main, e3.palette.action.hoverOpacity) } })), { props: { size: "small" }, style: { padding: 5, fontSize: e3.typography.pxToRem(18) } }, { props: { size: "large" }, style: { padding: 12, fontSize: e3.typography.pxToRem(28) } }], [`&.${qf.disabled}`]: { backgroundColor: "transparent", color: (e3.vars || e3).palette.action.disabled }, [`&.${qf.loading}`]: { color: "transparent" } }))), sw = xt("span", { name: "MuiIconButton", slot: "LoadingIndicator", overridesResolver: (e3, t) => t.loadingIndicator })(({ theme: e3 }) => ({ display: "none", position: "absolute", visibility: "visible", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: (e3.vars || e3).palette.action.disabled, variants: [{ props: { loading: true }, style: { display: "flex" } }] })), ao = R.forwardRef(function(t, n) {
  const r = Bn({ props: t, name: "MuiIconButton" }), { edge: o = false, children: i, className: l, color: s = "default", disabled: a = false, disableFocusRipple: u = false, size: m = "medium", id: p, loading: h = null, loadingIndicator: w, ...v } = r, S = P1(p), P = w ?? O.jsx(rw, { "aria-labelledby": S, color: "inherit", size: 16 }), d = { ...r, edge: o, color: s, disabled: a, disableFocusRipple: u, loading: h, loadingIndicator: P, size: m }, f = iw(d);
  return O.jsxs(lw, { id: h ? S : p, className: Re(f.root, l), centerRipple: true, focusRipple: !u, disabled: a || h, ref: n, ...v, ownerState: d, children: [typeof h == "boolean" && O.jsx("span", { className: f.loadingWrapper, style: { display: "contents" }, children: O.jsx(sw, { className: f.loadingIndicator, ownerState: d, children: h && P }) }), i] });
});
function aw(e3) {
  return Fn("MuiTypography", e3);
}
xn("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const uw = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, cw = yS(), fw = (e3) => {
  const { align: t, gutterBottom: n, noWrap: r, paragraph: o, variant: i, classes: l } = e3, s = { root: ["root", i, e3.align !== "inherit" && `align${me(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"] };
  return Or(s, aw, l);
}, dw = xt("span", { name: "MuiTypography", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${me(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
} })(Ln(({ theme: e3 }) => {
  var _a2;
  return { margin: 0, variants: [{ props: { variant: "inherit" }, style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }, ...Object.entries(e3.typography).filter(([t, n]) => t !== "inherit" && n && typeof n == "object").map(([t, n]) => ({ props: { variant: t }, style: n })), ...Object.entries(e3.palette).filter(tl()).map(([t]) => ({ props: { color: t }, style: { color: (e3.vars || e3).palette[t].main } })), ...Object.entries(((_a2 = e3.palette) == null ? void 0 : _a2.text) || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({ props: { color: `text${me(t)}` }, style: { color: (e3.vars || e3).palette.text[t] } })), { props: ({ ownerState: t }) => t.align !== "inherit", style: { textAlign: "var(--Typography-textAlign)" } }, { props: ({ ownerState: t }) => t.noWrap, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, { props: ({ ownerState: t }) => t.gutterBottom, style: { marginBottom: "0.35em" } }, { props: ({ ownerState: t }) => t.paragraph, style: { marginBottom: 16 } }] };
})), Jf = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, om = R.forwardRef(function(t, n) {
  const { color: r, ...o } = Bn({ props: t, name: "MuiTypography" }), i = !uw[r], l = cw({ ...o, ...i && { color: r } }), { align: s = "inherit", className: a, component: u, gutterBottom: m = false, noWrap: p = false, paragraph: h = false, variant: w = "body1", variantMapping: v = Jf, ...S } = l, P = { ...l, align: s, color: r, className: a, component: u, gutterBottom: m, noWrap: p, paragraph: h, variant: w, variantMapping: v }, d = u || (h ? "p" : v[w] || Jf[w]) || "span", f = fw(P);
  return O.jsx(dw, { as: d, ref: n, className: Re(f.root, a), ...S, ownerState: P, style: { ...s !== "inherit" && { "--Typography-textAlign": s }, ...S.style } });
}), pw = xn("MuiBox", ["root"]), hw = nm(), $t = s1({ themeId: bu, defaultTheme: hw, defaultClassName: pw.root, generateClassName: Vh.generate });
var Gl = { exports: {} }, im = {}, ae = {}, Dt = {};
Object.defineProperty(Dt, "__esModule", { value: true });
Dt.dontSetMe = Sw;
Dt.findInArray = mw;
Dt.int = vw;
Dt.isFunction = gw;
Dt.isNum = yw;
function mw(e3, t) {
  for (let n = 0, r = e3.length; n < r; n++) if (t.apply(t, [e3[n], n, e3])) return e3[n];
}
function gw(e3) {
  return typeof e3 == "function" || Object.prototype.toString.call(e3) === "[object Function]";
}
function yw(e3) {
  return typeof e3 == "number" && !isNaN(e3);
}
function vw(e3) {
  return parseInt(e3, 10);
}
function Sw(e3, t, n) {
  if (e3[t]) return new Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`);
}
var Wn = {};
Object.defineProperty(Wn, "__esModule", { value: true });
Wn.browserPrefixToKey = sm;
Wn.browserPrefixToStyle = ww;
Wn.default = void 0;
Wn.getPrefix = lm;
const Ms = ["Moz", "Webkit", "O", "ms"];
function lm() {
  var _a2, _b;
  let e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u") return "";
  const t = (_b = (_a2 = window.document) == null ? void 0 : _a2.documentElement) == null ? void 0 : _b.style;
  if (!t || e3 in t) return "";
  for (let n = 0; n < Ms.length; n++) if (sm(e3, Ms[n]) in t) return Ms[n];
  return "";
}
function sm(e3, t) {
  return t ? `${t}${xw(e3)}` : e3;
}
function ww(e3, t) {
  return t ? `-${t.toLowerCase()}-${e3}` : e3;
}
function xw(e3) {
  let t = "", n = true;
  for (let r = 0; r < e3.length; r++) n ? (t += e3[r].toUpperCase(), n = false) : e3[r] === "-" ? n = true : t += e3[r];
  return t;
}
Wn.default = lm();
Object.defineProperty(ae, "__esModule", { value: true });
ae.addClassName = cm;
ae.addEvent = Cw;
ae.addUserSelectStyles = zw;
ae.createCSSTransform = Nw;
ae.createSVGTransform = Mw;
ae.getTouch = Ow;
ae.getTouchIdentifier = Dw;
ae.getTranslation = uc;
ae.innerHeight = _w;
ae.innerWidth = Rw;
ae.matchesSelector = um;
ae.matchesSelectorAndParentsTo = kw;
ae.offsetXYFromParent = $w;
ae.outerHeight = Pw;
ae.outerWidth = Tw;
ae.removeClassName = fm;
ae.removeEvent = Ew;
ae.scheduleRemoveUserSelectStyles = Iw;
var Ze = Dt, ed = am(Wn);
function am(e3, t) {
  if (typeof WeakMap == "function") var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (am = function(o, i) {
    if (!i && o && o.__esModule) return o;
    var l, s, a = { __proto__: null, default: o };
    if (o === null || typeof o != "object" && typeof o != "function") return a;
    if (l = i ? r : n) {
      if (l.has(o)) return l.get(o);
      l.set(o, a);
    }
    for (const u in o) u !== "default" && {}.hasOwnProperty.call(o, u) && ((s = (l = Object.defineProperty) && Object.getOwnPropertyDescriptor(o, u)) && (s.get || s.set) ? l(a, u, s) : a[u] = o[u]);
    return a;
  })(e3, t);
}
let ui = "";
function um(e3, t) {
  return ui || (ui = (0, Ze.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, Ze.isFunction)(e3[n]);
  })), (0, Ze.isFunction)(e3[ui]) ? e3[ui](t) : false;
}
function kw(e3, t, n) {
  let r = e3;
  do {
    if (um(r, t)) return true;
    if (r === n) return false;
    r = r.parentNode;
  } while (r);
  return false;
}
function Cw(e3, t, n, r) {
  if (!e3) return;
  const o = { capture: true, ...r };
  e3.addEventListener ? e3.addEventListener(t, n, o) : e3.attachEvent ? e3.attachEvent("on" + t, n) : e3["on" + t] = n;
}
function Ew(e3, t, n, r) {
  if (!e3) return;
  const o = { capture: true, ...r };
  e3.removeEventListener ? e3.removeEventListener(t, n, o) : e3.detachEvent ? e3.detachEvent("on" + t, n) : e3["on" + t] = null;
}
function Pw(e3) {
  let t = e3.clientHeight;
  const n = e3.ownerDocument.defaultView.getComputedStyle(e3);
  return t += (0, Ze.int)(n.borderTopWidth), t += (0, Ze.int)(n.borderBottomWidth), t;
}
function Tw(e3) {
  let t = e3.clientWidth;
  const n = e3.ownerDocument.defaultView.getComputedStyle(e3);
  return t += (0, Ze.int)(n.borderLeftWidth), t += (0, Ze.int)(n.borderRightWidth), t;
}
function _w(e3) {
  let t = e3.clientHeight;
  const n = e3.ownerDocument.defaultView.getComputedStyle(e3);
  return t -= (0, Ze.int)(n.paddingTop), t -= (0, Ze.int)(n.paddingBottom), t;
}
function Rw(e3) {
  let t = e3.clientWidth;
  const n = e3.ownerDocument.defaultView.getComputedStyle(e3);
  return t -= (0, Ze.int)(n.paddingLeft), t -= (0, Ze.int)(n.paddingRight), t;
}
function $w(e3, t, n) {
  const o = t === t.ownerDocument.body ? { left: 0, top: 0 } : t.getBoundingClientRect(), i = (e3.clientX + t.scrollLeft - o.left) / n, l = (e3.clientY + t.scrollTop - o.top) / n;
  return { x: i, y: l };
}
function Nw(e3, t) {
  const n = uc(e3, t, "px");
  return { [(0, ed.browserPrefixToKey)("transform", ed.default)]: n };
}
function Mw(e3, t) {
  return uc(e3, t, "");
}
function uc(e3, t, n) {
  let { x: r, y: o } = e3, i = `translate(${r}${n},${o}${n})`;
  if (t) {
    const l = `${typeof t.x == "string" ? t.x : t.x + n}`, s = `${typeof t.y == "string" ? t.y : t.y + n}`;
    i = `translate(${l}, ${s})` + i;
  }
  return i;
}
function Ow(e3, t) {
  return e3.targetTouches && (0, Ze.findInArray)(e3.targetTouches, (n) => t === n.identifier) || e3.changedTouches && (0, Ze.findInArray)(e3.changedTouches, (n) => t === n.identifier);
}
function Dw(e3) {
  if (e3.targetTouches && e3.targetTouches[0]) return e3.targetTouches[0].identifier;
  if (e3.changedTouches && e3.changedTouches[0]) return e3.changedTouches[0].identifier;
}
function zw(e3) {
  if (!e3) return;
  let t = e3.getElementById("react-draggable-style-el");
  t || (t = e3.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e3.getElementsByTagName("head")[0].appendChild(t)), e3.body && cm(e3.body, "react-draggable-transparent-selection");
}
function Iw(e3) {
  window.requestAnimationFrame ? window.requestAnimationFrame(() => {
    td(e3);
  }) : td(e3);
}
function td(e3) {
  if (e3) try {
    if (e3.body && fm(e3.body, "react-draggable-transparent-selection"), e3.selection) e3.selection.empty();
    else {
      const t = (e3.defaultView || window).getSelection();
      t && t.type !== "Caret" && t.removeAllRanges();
    }
  } catch {
  }
}
function cm(e3, t) {
  e3.classList ? e3.classList.add(t) : e3.className.match(new RegExp(`(?:^|\\s)${t}(?!\\S)`)) || (e3.className += ` ${t}`);
}
function fm(e3, t) {
  e3.classList ? e3.classList.remove(t) : e3.className = e3.className.replace(new RegExp(`(?:^|\\s)${t}(?!\\S)`, "g"), "");
}
var zt = {};
Object.defineProperty(zt, "__esModule", { value: true });
zt.canDragX = bw;
zt.canDragY = jw;
zt.createCoreData = Bw;
zt.createDraggableData = Uw;
zt.getBoundPosition = Aw;
zt.getControlPosition = Fw;
zt.snapToGrid = Lw;
var Ve = Dt, fr = ae;
function Aw(e3, t, n) {
  if (!e3.props.bounds) return [t, n];
  let { bounds: r } = e3.props;
  r = typeof r == "string" ? r : Ww(r);
  const o = cc(e3);
  if (typeof r == "string") {
    const { ownerDocument: i } = o, l = i.defaultView;
    let s;
    if (r === "parent" ? s = o.parentNode : s = o.getRootNode().querySelector(r), !(s instanceof l.HTMLElement)) throw new Error('Bounds selector "' + r + '" could not find an element.');
    const a = s, u = l.getComputedStyle(o), m = l.getComputedStyle(a);
    r = { left: -o.offsetLeft + (0, Ve.int)(m.paddingLeft) + (0, Ve.int)(u.marginLeft), top: -o.offsetTop + (0, Ve.int)(m.paddingTop) + (0, Ve.int)(u.marginTop), right: (0, fr.innerWidth)(a) - (0, fr.outerWidth)(o) - o.offsetLeft + (0, Ve.int)(m.paddingRight) - (0, Ve.int)(u.marginRight), bottom: (0, fr.innerHeight)(a) - (0, fr.outerHeight)(o) - o.offsetTop + (0, Ve.int)(m.paddingBottom) - (0, Ve.int)(u.marginBottom) };
  }
  return (0, Ve.isNum)(r.right) && (t = Math.min(t, r.right)), (0, Ve.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, Ve.isNum)(r.left) && (t = Math.max(t, r.left)), (0, Ve.isNum)(r.top) && (n = Math.max(n, r.top)), [t, n];
}
function Lw(e3, t, n) {
  const r = Math.round(t / e3[0]) * e3[0], o = Math.round(n / e3[1]) * e3[1];
  return [r, o];
}
function bw(e3) {
  return e3.props.axis === "both" || e3.props.axis === "x";
}
function jw(e3) {
  return e3.props.axis === "both" || e3.props.axis === "y";
}
function Fw(e3, t, n) {
  const r = typeof t == "number" ? (0, fr.getTouch)(e3, t) : null;
  if (typeof t == "number" && !r) return null;
  const o = cc(n), i = n.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, fr.offsetXYFromParent)(r || e3, i, n.props.scale);
}
function Bw(e3, t, n) {
  const r = !(0, Ve.isNum)(e3.lastX), o = cc(e3);
  return r ? { node: o, deltaX: 0, deltaY: 0, lastX: t, lastY: n, x: t, y: n } : { node: o, deltaX: t - e3.lastX, deltaY: n - e3.lastY, lastX: e3.lastX, lastY: e3.lastY, x: t, y: n };
}
function Uw(e3, t) {
  const n = e3.props.scale;
  return { node: t.node, x: e3.state.x + t.deltaX / n, y: e3.state.y + t.deltaY / n, deltaX: t.deltaX / n, deltaY: t.deltaY / n, lastX: e3.state.x, lastY: e3.state.y };
}
function Ww(e3) {
  return { left: e3.left, top: e3.top, right: e3.right, bottom: e3.bottom };
}
function cc(e3) {
  const t = e3.findDOMNode();
  if (!t) throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var Zl = {}, ql = {};
Object.defineProperty(ql, "__esModule", { value: true });
ql.default = Vw;
function Vw() {
}
Object.defineProperty(Zl, "__esModule", { value: true });
Zl.default = void 0;
var Os = dm(R), Me = fc(Ih), Hw = fc(Lu), Te = ae, qt = zt, Ds = Dt, Hr = fc(ql);
function fc(e3) {
  return e3 && e3.__esModule ? e3 : { default: e3 };
}
function dm(e3, t) {
  if (typeof WeakMap == "function") var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (dm = function(o, i) {
    if (!i && o && o.__esModule) return o;
    var l, s, a = { __proto__: null, default: o };
    if (o === null || typeof o != "object" && typeof o != "function") return a;
    if (l = i ? r : n) {
      if (l.has(o)) return l.get(o);
      l.set(o, a);
    }
    for (const u in o) u !== "default" && {}.hasOwnProperty.call(o, u) && ((s = (l = Object.defineProperty) && Object.getOwnPropertyDescriptor(o, u)) && (s.get || s.set) ? l(a, u, s) : a[u] = o[u]);
    return a;
  })(e3, t);
}
function Oe(e3, t, n) {
  return (t = Yw(t)) in e3 ? Object.defineProperty(e3, t, { value: n, enumerable: true, configurable: true, writable: true }) : e3[t] = n, e3;
}
function Yw(e3) {
  var t = Kw(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Kw(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var n = e3[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e3, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
const ht = { touch: { start: "touchstart", move: "touchmove", stop: "touchend" }, mouse: { start: "mousedown", move: "mousemove", stop: "mouseup" } };
let Jt = ht.mouse, Jl = class extends Os.Component {
  constructor() {
    super(...arguments), Oe(this, "dragging", false), Oe(this, "lastX", NaN), Oe(this, "lastY", NaN), Oe(this, "touchIdentifier", null), Oe(this, "mounted", false), Oe(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0) return false;
      const n = this.findDOMNode();
      if (!n || !n.ownerDocument || !n.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
      const { ownerDocument: r } = n;
      if (this.props.disabled || !(t.target instanceof r.defaultView.Node) || this.props.handle && !(0, Te.matchesSelectorAndParentsTo)(t.target, this.props.handle, n) || this.props.cancel && (0, Te.matchesSelectorAndParentsTo)(t.target, this.props.cancel, n)) return;
      t.type === "touchstart" && !this.props.allowMobileScroll && t.preventDefault();
      const o = (0, Te.getTouchIdentifier)(t);
      this.touchIdentifier = o;
      const i = (0, qt.getControlPosition)(t, o, this);
      if (i == null) return;
      const { x: l, y: s } = i, a = (0, qt.createCoreData)(this, l, s);
      (0, Hr.default)("DraggableCore: handleDragStart: %j", a), (0, Hr.default)("calling", this.props.onStart), !(this.props.onStart(t, a) === false || this.mounted === false) && (this.props.enableUserSelectHack && (0, Te.addUserSelectStyles)(r), this.dragging = true, this.lastX = l, this.lastY = s, (0, Te.addEvent)(r, Jt.move, this.handleDrag), (0, Te.addEvent)(r, Jt.stop, this.handleDragStop));
    }), Oe(this, "handleDrag", (t) => {
      const n = (0, qt.getControlPosition)(t, this.touchIdentifier, this);
      if (n == null) return;
      let { x: r, y: o } = n;
      if (Array.isArray(this.props.grid)) {
        let s = r - this.lastX, a = o - this.lastY;
        if ([s, a] = (0, qt.snapToGrid)(this.props.grid, s, a), !s && !a) return;
        r = this.lastX + s, o = this.lastY + a;
      }
      const i = (0, qt.createCoreData)(this, r, o);
      if ((0, Hr.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(t, i) === false || this.mounted === false) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const a = document.createEvent("MouseEvents");
          a.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), this.handleDragStop(a);
        }
        return;
      }
      this.lastX = r, this.lastY = o;
    }), Oe(this, "handleDragStop", (t) => {
      if (!this.dragging) return;
      const n = (0, qt.getControlPosition)(t, this.touchIdentifier, this);
      if (n == null) return;
      let { x: r, y: o } = n;
      if (Array.isArray(this.props.grid)) {
        let a = r - this.lastX || 0, u = o - this.lastY || 0;
        [a, u] = (0, qt.snapToGrid)(this.props.grid, a, u), r = this.lastX + a, o = this.lastY + u;
      }
      const i = (0, qt.createCoreData)(this, r, o);
      if (this.props.onStop(t, i) === false || this.mounted === false) return false;
      const s = this.findDOMNode();
      s && this.props.enableUserSelectHack && (0, Te.scheduleRemoveUserSelectStyles)(s.ownerDocument), (0, Hr.default)("DraggableCore: handleDragStop: %j", i), this.dragging = false, this.lastX = NaN, this.lastY = NaN, s && ((0, Hr.default)("DraggableCore: Removing handlers"), (0, Te.removeEvent)(s.ownerDocument, Jt.move, this.handleDrag), (0, Te.removeEvent)(s.ownerDocument, Jt.stop, this.handleDragStop));
    }), Oe(this, "onMouseDown", (t) => (Jt = ht.mouse, this.handleDragStart(t))), Oe(this, "onMouseUp", (t) => (Jt = ht.mouse, this.handleDragStop(t))), Oe(this, "onTouchStart", (t) => (Jt = ht.touch, this.handleDragStart(t))), Oe(this, "onTouchEnd", (t) => (Jt = ht.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = true;
    const t = this.findDOMNode();
    t && (0, Te.addEvent)(t, ht.touch.start, this.onTouchStart, { passive: false });
  }
  componentWillUnmount() {
    this.mounted = false;
    const t = this.findDOMNode();
    if (t) {
      const { ownerDocument: n } = t;
      (0, Te.removeEvent)(n, ht.mouse.move, this.handleDrag), (0, Te.removeEvent)(n, ht.touch.move, this.handleDrag), (0, Te.removeEvent)(n, ht.mouse.stop, this.handleDragStop), (0, Te.removeEvent)(n, ht.touch.stop, this.handleDragStop), (0, Te.removeEvent)(t, ht.touch.start, this.onTouchStart, { passive: false }), this.props.enableUserSelectHack && (0, Te.scheduleRemoveUserSelectStyles)(n);
    }
  }
  findDOMNode() {
    var _a2, _b, _c2;
    return ((_a2 = this.props) == null ? void 0 : _a2.nodeRef) ? (_c2 = (_b = this.props) == null ? void 0 : _b.nodeRef) == null ? void 0 : _c2.current : Hw.default.findDOMNode(this);
  }
  render() {
    return Os.cloneElement(Os.Children.only(this.props.children), { onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp, onTouchEnd: this.onTouchEnd });
  }
};
Zl.default = Jl;
Oe(Jl, "displayName", "DraggableCore");
Oe(Jl, "propTypes", { allowAnyClick: Me.default.bool, allowMobileScroll: Me.default.bool, children: Me.default.node.isRequired, disabled: Me.default.bool, enableUserSelectHack: Me.default.bool, offsetParent: function(e3, t) {
  if (e3[t] && e3[t].nodeType !== 1) throw new Error("Draggable's offsetParent must be a DOM Node.");
}, grid: Me.default.arrayOf(Me.default.number), handle: Me.default.string, cancel: Me.default.string, nodeRef: Me.default.object, onStart: Me.default.func, onDrag: Me.default.func, onStop: Me.default.func, onMouseDown: Me.default.func, scale: Me.default.number, className: Ds.dontSetMe, style: Ds.dontSetMe, transform: Ds.dontSetMe });
Oe(Jl, "defaultProps", { allowAnyClick: false, allowMobileScroll: false, disabled: false, enableUserSelectHack: true, onStart: function() {
}, onDrag: function() {
}, onStop: function() {
}, onMouseDown: function() {
}, scale: 1 });
(function(e3) {
  Object.defineProperty(e3, "__esModule", { value: true }), Object.defineProperty(e3, "DraggableCore", { enumerable: true, get: function() {
    return a.default;
  } }), e3.default = void 0;
  var t = p(R), n = m(Ih), r = m(Lu), o = Yh, i = ae, l = zt, s = Dt, a = m(Zl), u = m(ql);
  function m(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function p(d, f) {
    if (typeof WeakMap == "function") var g = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap();
    return (p = function(x, k) {
      if (!k && x && x.__esModule) return x;
      var E, T, D = { __proto__: null, default: x };
      if (x === null || typeof x != "object" && typeof x != "function") return D;
      if (E = k ? y : g) {
        if (E.has(x)) return E.get(x);
        E.set(x, D);
      }
      for (const c in x) c !== "default" && {}.hasOwnProperty.call(x, c) && ((T = (E = Object.defineProperty) && Object.getOwnPropertyDescriptor(x, c)) && (T.get || T.set) ? E(D, c, T) : D[c] = x[c]);
      return D;
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
  function w(d, f, g) {
    return (f = v(f)) in d ? Object.defineProperty(d, f, { value: g, enumerable: true, configurable: true, writable: true }) : d[f] = g, d;
  }
  function v(d) {
    var f = S(d, "string");
    return typeof f == "symbol" ? f : f + "";
  }
  function S(d, f) {
    if (typeof d != "object" || !d) return d;
    var g = d[Symbol.toPrimitive];
    if (g !== void 0) {
      var y = g.call(d, f);
      if (typeof y != "object") return y;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (f === "string" ? String : Number)(d);
  }
  class P extends t.Component {
    static getDerivedStateFromProps(f, g) {
      let { position: y } = f, { prevPropsPosition: x } = g;
      return y && (!x || y.x !== x.x || y.y !== x.y) ? ((0, u.default)("Draggable: getDerivedStateFromProps %j", { position: y, prevPropsPosition: x }), { x: y.x, y: y.y, prevPropsPosition: { ...y } }) : null;
    }
    constructor(f) {
      super(f), w(this, "onDragStart", (g, y) => {
        if ((0, u.default)("Draggable: onDragStart: %j", y), this.props.onStart(g, (0, l.createDraggableData)(this, y)) === false) return false;
        this.setState({ dragging: true, dragged: true });
      }), w(this, "onDrag", (g, y) => {
        if (!this.state.dragging) return false;
        (0, u.default)("Draggable: onDrag: %j", y);
        const x = (0, l.createDraggableData)(this, y), k = { x: x.x, y: x.y, slackX: 0, slackY: 0 };
        if (this.props.bounds) {
          const { x: T, y: D } = k;
          k.x += this.state.slackX, k.y += this.state.slackY;
          const [c, $] = (0, l.getBoundPosition)(this, k.x, k.y);
          k.x = c, k.y = $, k.slackX = this.state.slackX + (T - k.x), k.slackY = this.state.slackY + (D - k.y), x.x = k.x, x.y = k.y, x.deltaX = k.x - this.state.x, x.deltaY = k.y - this.state.y;
        }
        if (this.props.onDrag(g, x) === false) return false;
        this.setState(k);
      }), w(this, "onDragStop", (g, y) => {
        if (!this.state.dragging || this.props.onStop(g, (0, l.createDraggableData)(this, y)) === false) return false;
        (0, u.default)("Draggable: onDragStop: %j", y);
        const k = { dragging: false, slackX: 0, slackY: 0 };
        if (!!this.props.position) {
          const { x: T, y: D } = this.props.position;
          k.x = T, k.y = D;
        }
        this.setState(k);
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
      const { axis: f, bounds: g, children: y, defaultPosition: x, defaultClassName: k, defaultClassNameDragging: E, defaultClassNameDragged: T, position: D, positionOffset: c, scale: $, ...I } = this.props;
      let L = {}, Y = null;
      const Se = !!!D || this.state.dragging, nt = D || x, N = { x: (0, l.canDragX)(this) && Se ? this.state.x : nt.x, y: (0, l.canDragY)(this) && Se ? this.state.y : nt.y };
      this.state.isElementSVG ? Y = (0, i.createSVGTransform)(N, c) : L = (0, i.createCSSTransform)(N, c);
      const z = (0, o.clsx)(y.props.className || "", k, { [E]: this.state.dragging, [T]: this.state.dragged });
      return t.createElement(a.default, h({}, I, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }), t.cloneElement(t.Children.only(y), { className: z, style: { ...y.props.style, ...L }, transform: Y }));
    }
  }
  e3.default = P, w(P, "displayName", "Draggable"), w(P, "propTypes", { ...a.default.propTypes, axis: n.default.oneOf(["both", "x", "y", "none"]), bounds: n.default.oneOfType([n.default.shape({ left: n.default.number, right: n.default.number, top: n.default.number, bottom: n.default.number }), n.default.string, n.default.oneOf([false])]), defaultClassName: n.default.string, defaultClassNameDragging: n.default.string, defaultClassNameDragged: n.default.string, defaultPosition: n.default.shape({ x: n.default.number, y: n.default.number }), positionOffset: n.default.shape({ x: n.default.oneOfType([n.default.number, n.default.string]), y: n.default.oneOfType([n.default.number, n.default.string]) }), position: n.default.shape({ x: n.default.number, y: n.default.number }), className: s.dontSetMe, style: s.dontSetMe, transform: s.dontSetMe }), w(P, "defaultProps", { ...a.default.defaultProps, axis: "both", bounds: false, defaultClassName: "react-draggable", defaultClassNameDragging: "react-draggable-dragging", defaultClassNameDragged: "react-draggable-dragged", defaultPosition: { x: 0, y: 0 }, scale: 1 });
})(im);
const { default: pm, DraggableCore: Xw } = im;
Gl.exports = pm;
Gl.exports.default = pm;
Gl.exports.DraggableCore = Xw;
var Qw = Gl.exports;
const Gw = Ua(Qw), Zw = Un(O.jsx("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" })), qw = Un(O.jsx("path", { d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" })), Jw = Un(O.jsx("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), e2 = Un(O.jsx("path", { d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H6V6h12z" })), t2 = Un(O.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" })), n2 = Un(O.jsx("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z" })), r2 = Un(O.jsx("path", { d: "M19 13H5v-2h14z" }));
function o2({ content: e3, colors: t }) {
  const n = { left: [O.jsx(Zw, { fontSize: "small" }), O.jsx(qw, { fontSize: "small" }), O.jsx(n2, { fontSize: "small" })], right: [O.jsx(t2, { fontSize: "small" })] };
  return O.jsxs($t, { sx: { display: "flex", alignItems: "center", px: 1, py: 0.5, borderBottom: `1px solid ${t.brd}` }, children: [n.left.map((r, o) => O.jsx(ao, { sx: { color: t.btns }, size: "small", children: r }, o)), O.jsx($t, { sx: { flexGrow: 1, mx: 1, px: 2, py: 0.5, backgroundColor: "white", borderRadius: 100, border: `1px solid ${t.brd}`, display: "flex", alignItems: "center", overflow: "hidden" }, children: O.jsx(om, { variant: "body2", color: "text.secondary", noWrap: true, children: e3.pageUrl || "https://example.com" }) }), n.right.map((r, o) => O.jsx(ao, { sx: { color: t.btns }, size: "small", children: r }, o))] });
}
function i2({ platform: e3, colors: t }) {
  const n = e3 === "mac";
  return O.jsx($t, { sx: { display: "flex", justifyContent: n ? "flex-start" : "space-between", alignItems: "center", py: 0.25, cursor: "grab" }, children: O.jsx(l2, { isMac: n, colors: t }) });
}
function l2({ isMac: e3 = false, colors: t }) {
  const n = { width: 12, height: 12, borderRadius: "50%" };
  return O.jsx(O.Fragment, { children: e3 ? O.jsxs($t, { sx: { display: "flex", gap: 1, p: 1.5 }, children: [O.jsx($t, { sx: { ...n, backgroundColor: "#ff5f56" } }), O.jsx($t, { sx: { ...n, backgroundColor: "#ffbd2e" } }), O.jsx($t, { sx: { ...n, backgroundColor: "#27c93f" } })] }) : O.jsxs($t, { sx: { display: "flex", justifyContent: "flex-end", width: "100%" }, children: [O.jsx(ao, { size: "small", sx: { px: 1.5, py: 1, borderRadius: 0, color: t.btns }, children: O.jsx(r2, { fontSize: "inherit" }) }), O.jsx(ao, { size: "small", sx: { px: 1.5, py: 1, borderRadius: 0, color: t.btns }, children: O.jsx(e2, { fontSize: "inherit" }) }), O.jsx(ao, { size: "small", sx: { px: 1.5, py: 1, borderRadius: 0, color: t.btns }, children: O.jsx(Jw, { fontSize: "inherit" }) })] }) });
}
function s2({ content: e3 = { imgUrl: null, pageUrl: null, dims: { width: 800, height: 600 } }, platform: t = "mac", position: n = { top: 0, left: 0 }, mode: r = "light", active: o = false, onClick: i = () => {
}, imgBackground: l = true, zIndex: s = 1 }) {
  const a = { light: { main: l ? "transparent" : "rgba(224,224,224)", btns: "rgba(100,100,100)", brd: "rgba(192,192,192)" }, dark: { main: "rgba(31,31,31)", btns: "rgba(150,150,150)", brd: "rgba(63,63,63)" } }, u = { backgroundImage: e3.imgUrl ? `url(${e3.imgUrl})` : "none", backgroundSize: "300%", backgroundPosition: "center" };
  return O.jsx(Gw, { handle: ".drag-handle", bounds: "#root", onMouseDown: (m) => {
    m.stopPropagation(), i();
  }, children: O.jsxs(OS, { elevation: o ? 10 : 1, sx: { minWidth: "600px", maxWidth: "600px", scale: o ? 1 : 0.8, transformOrigin: "center", borderRadius: 2, overflow: "hidden", backgroundColor: a[r].main, border: `1px solid ${a[r].brd}`, position: "absolute", zIndex: o ? 1e3 : s, ...n, ...l ? u : {}, transition: "scale 0.3s ease-in-out" }, className: "browser", children: [O.jsxs($t, { sx: { backdropFilter: "blur(50px)" }, className: "drag-handle", children: [O.jsx(i2, { platform: t, colors: a[r] }), O.jsx(o2, { content: e3, colors: a[r] })] }), O.jsx($t, { sx: { backgroundColor: "#fff", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }, className: o ? "" : "drag-handle", children: e3.imgUrl ? O.jsx("img", { src: e3.imgUrl, alt: e3.title, draggable: false, style: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" } }) : O.jsx(om, { variant: "body2", color: "text.secondary", children: "No image loaded" }) })] }) });
}
function a2() {
  if (navigator.userAgentData) return navigator.userAgentData.platform.toLowerCase().includes("mac") ? "mac" : "win";
  const e3 = navigator.userAgent.toLowerCase();
  return e3.includes("macintosh") || e3.includes("mac os x") ? "mac" : e3.includes("windows") ? "win" : "unknown";
}
function u2({ manifest: e3 }) {
  const [t, n] = R.useState("win"), [r, o] = R.useState([]), [i, l] = R.useState(null);
  R.useEffect(() => {
    n(a2());
  }, []), R.useEffect(() => {
    e3.length > 0 && r.length === 0 && o(e3.map((a, u) => u));
  }, [e3]);
  const s = (a) => {
    l(a), o((u) => {
      const m = u.filter((p) => p !== a);
      return m.push(a), m;
    });
  };
  return O.jsx(O.Fragment, { children: e3.length > 0 && e3.map((a, u) => {
    const m = r.indexOf(u);
    return O.jsx(s2, { content: { imgUrl: a.imgUrl, pageUrl: a.pageUrl, dims: a.dims || { width: 800, height: 600 }, title: a.title || "Mockup Content" }, position: a.position, platform: t, mode: "light", active: i === u, zIndex: m, onClick: () => s(u) }, u);
  }) });
}
function c2() {
  const [e3, t] = R.useState([]);
  return R.useEffect(() => {
    fetch("/manifest.json").then((n) => n.json()).then((n) => {
      n.forEach((r) => {
        r.position = {}, r.position.top = `${Math.floor(Math.random() * 50) + 10}%`, r.position.left = `${Math.floor(Math.random() * Math.random() * 80) + 10}%`;
      }), console.log(n), t(n.sort(() => Math.random() - 0.5));
    }).catch((n) => {
      console.error("Error fetching manifest:", n);
    });
  }, []), O.jsx(O.Fragment, { children: O.jsx(u2, { manifest: e3 }) });
}
const f2 = Is.createRoot(document.getElementById("root"));
f2.render(O.jsx(c2, {}));
