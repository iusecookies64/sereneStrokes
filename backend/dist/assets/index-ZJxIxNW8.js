function Ay(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function np(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var rp = { exports: {} },
  Dl = {},
  op = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ei = Symbol.for("react.element"),
  Py = Symbol.for("react.portal"),
  Iy = Symbol.for("react.fragment"),
  My = Symbol.for("react.strict_mode"),
  by = Symbol.for("react.profiler"),
  Dy = Symbol.for("react.provider"),
  jy = Symbol.for("react.context"),
  Vy = Symbol.for("react.forward_ref"),
  Oy = Symbol.for("react.suspense"),
  Uy = Symbol.for("react.memo"),
  zy = Symbol.for("react.lazy"),
  nf = Symbol.iterator;
function Fy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nf && e[nf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ip = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  lp = Object.assign,
  sp = {};
function Wr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sp),
    (this.updater = n || ip);
}
Wr.prototype.isReactComponent = {};
Wr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ap() {}
ap.prototype = Wr.prototype;
function Lu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sp),
    (this.updater = n || ip);
}
var $u = (Lu.prototype = new ap());
$u.constructor = Lu;
lp($u, Wr.prototype);
$u.isPureReactComponent = !0;
var rf = Array.isArray,
  up = Object.prototype.hasOwnProperty,
  Au = { current: null },
  cp = { key: !0, ref: !0, __self: !0, __source: !0 };
function fp(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      up.call(t, r) && !cp.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: ei,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Au.current,
  };
}
function By(e, t) {
  return {
    $$typeof: ei,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Pu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ei;
}
function Wy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var of = /\/+/g;
function As(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Wy("" + e.key)
    : t.toString(36);
}
function zi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ei:
          case Py:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + As(l, 0) : r),
      rf(o)
        ? ((n = ""),
          e != null && (n = e.replace(of, "$&/") + "/"),
          zi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Pu(o) &&
            (o = By(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(of, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), rf(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + As(i, s);
      l += zi(i, t, n, a, o);
    }
  else if (((a = Fy(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + As(i, s++)), (l += zi(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function yi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    zi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Hy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ye = { current: null },
  Fi = { transition: null },
  Gy = {
    ReactCurrentDispatcher: Ye,
    ReactCurrentBatchConfig: Fi,
    ReactCurrentOwner: Au,
  };
re.Children = {
  map: yi,
  forEach: function (e, t, n) {
    yi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      yi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Pu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
re.Component = Wr;
re.Fragment = Iy;
re.Profiler = by;
re.PureComponent = Lu;
re.StrictMode = My;
re.Suspense = Oy;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gy;
re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = lp({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Au.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      up.call(t, a) &&
        !cp.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ei, type: e.type, key: o, ref: i, props: r, _owner: l };
};
re.createContext = function (e) {
  return (
    (e = {
      $$typeof: jy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Dy, _context: e }),
    (e.Consumer = e)
  );
};
re.createElement = fp;
re.createFactory = function (e) {
  var t = fp.bind(null, e);
  return (t.type = e), t;
};
re.createRef = function () {
  return { current: null };
};
re.forwardRef = function (e) {
  return { $$typeof: Vy, render: e };
};
re.isValidElement = Pu;
re.lazy = function (e) {
  return { $$typeof: zy, _payload: { _status: -1, _result: e }, _init: Hy };
};
re.memo = function (e, t) {
  return { $$typeof: Uy, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function (e) {
  var t = Fi.transition;
  Fi.transition = {};
  try {
    e();
  } finally {
    Fi.transition = t;
  }
};
re.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
re.useCallback = function (e, t) {
  return Ye.current.useCallback(e, t);
};
re.useContext = function (e) {
  return Ye.current.useContext(e);
};
re.useDebugValue = function () {};
re.useDeferredValue = function (e) {
  return Ye.current.useDeferredValue(e);
};
re.useEffect = function (e, t) {
  return Ye.current.useEffect(e, t);
};
re.useId = function () {
  return Ye.current.useId();
};
re.useImperativeHandle = function (e, t, n) {
  return Ye.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function (e, t) {
  return Ye.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function (e, t) {
  return Ye.current.useLayoutEffect(e, t);
};
re.useMemo = function (e, t) {
  return Ye.current.useMemo(e, t);
};
re.useReducer = function (e, t, n) {
  return Ye.current.useReducer(e, t, n);
};
re.useRef = function (e) {
  return Ye.current.useRef(e);
};
re.useState = function (e) {
  return Ye.current.useState(e);
};
re.useSyncExternalStore = function (e, t, n) {
  return Ye.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function () {
  return Ye.current.useTransition();
};
re.version = "18.2.0";
op.exports = re;
var C = op.exports;
const se = np(C),
  Ky = Ay({ __proto__: null, default: se }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qy = C,
  Yy = Symbol.for("react.element"),
  Xy = Symbol.for("react.fragment"),
  Zy = Object.prototype.hasOwnProperty,
  qy = Qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Jy = { key: !0, ref: !0, __self: !0, __source: !0 };
function dp(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Zy.call(t, r) && !Jy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Yy,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: qy.current,
  };
}
Dl.Fragment = Xy;
Dl.jsx = dp;
Dl.jsxs = dp;
rp.exports = Dl;
var _ = rp.exports,
  va = {},
  pp = { exports: {} },
  pt = {},
  hp = { exports: {} },
  mp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, B) {
    var M = b.length;
    b.push(B);
    e: for (; 0 < M; ) {
      var W = (M - 1) >>> 1,
        w = b[W];
      if (0 < o(w, B)) (b[W] = B), (b[M] = w), (M = W);
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var B = b[0],
      M = b.pop();
    if (M !== B) {
      b[0] = M;
      e: for (var W = 0, w = b.length, A = w >>> 1; W < A; ) {
        var P = 2 * (W + 1) - 1,
          H = b[P],
          D = P + 1,
          Y = b[D];
        if (0 > o(H, M))
          D < w && 0 > o(Y, H)
            ? ((b[W] = Y), (b[D] = M), (W = D))
            : ((b[W] = H), (b[P] = M), (W = P));
        else if (D < w && 0 > o(Y, M)) (b[W] = Y), (b[D] = M), (W = D);
        else break e;
      }
    }
    return B;
  }
  function o(b, B) {
    var M = b.sortIndex - B.sortIndex;
    return M !== 0 ? M : b.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    d = 1,
    f = null,
    m = 3,
    y = !1,
    v = !1,
    g = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(b) {
    for (var B = n(u); B !== null; ) {
      if (B.callback === null) r(u);
      else if (B.startTime <= b)
        r(u), (B.sortIndex = B.expirationTime), t(a, B);
      else break;
      B = n(u);
    }
  }
  function E(b) {
    if (((g = !1), h(b), !v))
      if (n(a) !== null) (v = !0), Me(k);
      else {
        var B = n(u);
        B !== null && Oe(E, B.startTime - b);
      }
  }
  function k(b, B) {
    (v = !1), g && ((g = !1), p(I), (I = -1)), (y = !0);
    var M = m;
    try {
      for (
        h(B), f = n(a);
        f !== null && (!(f.expirationTime > B) || (b && !oe()));

      ) {
        var W = f.callback;
        if (typeof W == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var w = W(f.expirationTime <= B);
          (B = e.unstable_now()),
            typeof w == "function" ? (f.callback = w) : f === n(a) && r(a),
            h(B);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var A = !0;
      else {
        var P = n(u);
        P !== null && Oe(E, P.startTime - B), (A = !1);
      }
      return A;
    } finally {
      (f = null), (m = M), (y = !1);
    }
  }
  var T = !1,
    N = null,
    I = -1,
    X = 5,
    z = -1;
  function oe() {
    return !(e.unstable_now() - z < X);
  }
  function ye() {
    if (N !== null) {
      var b = e.unstable_now();
      z = b;
      var B = !0;
      try {
        B = N(!0, b);
      } finally {
        B ? le() : ((T = !1), (N = null));
      }
    } else T = !1;
  }
  var le;
  if (typeof c == "function")
    le = function () {
      c(ye);
    };
  else if (typeof MessageChannel < "u") {
    var Ie = new MessageChannel(),
      xt = Ie.port2;
    (Ie.port1.onmessage = ye),
      (le = function () {
        xt.postMessage(null);
      });
  } else
    le = function () {
      x(ye, 0);
    };
  function Me(b) {
    (N = b), T || ((T = !0), le());
  }
  function Oe(b, B) {
    I = x(function () {
      b(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), Me(k));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (X = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (b) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = m;
      }
      var M = m;
      m = B;
      try {
        return b();
      } finally {
        m = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, B) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var M = m;
      m = b;
      try {
        return B();
      } finally {
        m = M;
      }
    }),
    (e.unstable_scheduleCallback = function (b, B, M) {
      var W = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? W + M : W))
          : (M = W),
        b)
      ) {
        case 1:
          var w = -1;
          break;
        case 2:
          w = 250;
          break;
        case 5:
          w = 1073741823;
          break;
        case 4:
          w = 1e4;
          break;
        default:
          w = 5e3;
      }
      return (
        (w = M + w),
        (b = {
          id: d++,
          callback: B,
          priorityLevel: b,
          startTime: M,
          expirationTime: w,
          sortIndex: -1,
        }),
        M > W
          ? ((b.sortIndex = M),
            t(u, b),
            n(a) === null &&
              b === n(u) &&
              (g ? (p(I), (I = -1)) : (g = !0), Oe(E, M - W)))
          : ((b.sortIndex = w), t(a, b), v || y || ((v = !0), Me(k))),
        b
      );
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (b) {
      var B = m;
      return function () {
        var M = m;
        m = B;
        try {
          return b.apply(this, arguments);
        } finally {
          m = M;
        }
      };
    });
})(mp);
hp.exports = mp;
var eg = hp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vp = C,
  dt = eg;
function $(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var yp = new Set(),
  Io = {};
function Zn(e, t) {
  kr(e, t), kr(e + "Capture", t);
}
function kr(e, t) {
  for (Io[e] = t, e = 0; e < t.length; e++) yp.add(t[e]);
}
var Zt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ya = Object.prototype.hasOwnProperty,
  tg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  lf = {},
  sf = {};
function ng(e) {
  return ya.call(sf, e)
    ? !0
    : ya.call(lf, e)
    ? !1
    : tg.test(e)
    ? (sf[e] = !0)
    : ((lf[e] = !0), !1);
}
function rg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function og(e, t, n, r) {
  if (t === null || typeof t > "u" || rg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Xe(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new Xe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Fe[t] = new Xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Fe[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Fe[e] = new Xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Fe[e] = new Xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Fe[e] = new Xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Fe[e] = new Xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Fe[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Iu = /[\-:]([a-z])/g;
function Mu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Iu, Mu);
    Fe[t] = new Xe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Iu, Mu);
    Fe[t] = new Xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Iu, Mu);
  Fe[t] = new Xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Fe[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Xe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Fe[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bu(e, t, n, r) {
  var o = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (og(t, n, o, r) && (n = null),
    r || o === null
      ? ng(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tn = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gi = Symbol.for("react.element"),
  lr = Symbol.for("react.portal"),
  sr = Symbol.for("react.fragment"),
  Du = Symbol.for("react.strict_mode"),
  ga = Symbol.for("react.profiler"),
  gp = Symbol.for("react.provider"),
  Sp = Symbol.for("react.context"),
  ju = Symbol.for("react.forward_ref"),
  Sa = Symbol.for("react.suspense"),
  wa = Symbol.for("react.suspense_list"),
  Vu = Symbol.for("react.memo"),
  sn = Symbol.for("react.lazy"),
  wp = Symbol.for("react.offscreen"),
  af = Symbol.iterator;
function eo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (af && e[af]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ne = Object.assign,
  Ps;
function ho(e) {
  if (Ps === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ps = (t && t[1]) || "";
    }
  return (
    `
` +
    Ps +
    e
  );
}
var Is = !1;
function Ms(e, t) {
  if (!e || Is) return "";
  Is = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Is = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ho(e) : "";
}
function ig(e) {
  switch (e.tag) {
    case 5:
      return ho(e.type);
    case 16:
      return ho("Lazy");
    case 13:
      return ho("Suspense");
    case 19:
      return ho("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ms(e.type, !1)), e;
    case 11:
      return (e = Ms(e.type.render, !1)), e;
    case 1:
      return (e = Ms(e.type, !0)), e;
    default:
      return "";
  }
}
function _a(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case sr:
      return "Fragment";
    case lr:
      return "Portal";
    case ga:
      return "Profiler";
    case Du:
      return "StrictMode";
    case Sa:
      return "Suspense";
    case wa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Sp:
        return (e.displayName || "Context") + ".Consumer";
      case gp:
        return (e._context.displayName || "Context") + ".Provider";
      case ju:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Vu:
        return (
          (t = e.displayName || null), t !== null ? t : _a(e.type) || "Memo"
        );
      case sn:
        (t = e._payload), (e = e._init);
        try {
          return _a(e(t));
        } catch {}
    }
  return null;
}
function lg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return _a(t);
    case 8:
      return t === Du ? "StrictMode" : "Mode";
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
function En(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function _p(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function sg(e) {
  var t = _p(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Si(e) {
  e._valueTracker || (e._valueTracker = sg(e));
}
function Rp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = _p(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function il(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ra(e, t) {
  var n = t.checked;
  return Ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function uf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = En(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ep(e, t) {
  (t = t.checked), t != null && bu(e, "checked", t, !1);
}
function Ea(e, t) {
  Ep(e, t);
  var n = En(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? xa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && xa(e, t.type, En(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function cf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function xa(e, t, n) {
  (t !== "number" || il(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var mo = Array.isArray;
function Sr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + En(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Na(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return Ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ff(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error($(92));
      if (mo(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: En(n) };
}
function xp(e, t) {
  var n = En(t.value),
    r = En(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function df(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Np(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ka(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Np(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wi,
  kp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        wi = wi || document.createElement("div"),
          wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Mo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ag = ["Webkit", "ms", "Moz", "O"];
Object.keys(wo).forEach(function (e) {
  ag.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wo[t] = wo[e]);
  });
});
function Cp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (wo.hasOwnProperty(e) && wo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Tp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Cp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var ug = Ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ca(e, t) {
  if (t) {
    if (ug[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error($(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error($(62));
  }
}
function Ta(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var La = null;
function Ou(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $a = null,
  wr = null,
  _r = null;
function pf(e) {
  if ((e = ri(e))) {
    if (typeof $a != "function") throw Error($(280));
    var t = e.stateNode;
    t && ((t = zl(t)), $a(e.stateNode, e.type, t));
  }
}
function Lp(e) {
  wr ? (_r ? _r.push(e) : (_r = [e])) : (wr = e);
}
function $p() {
  if (wr) {
    var e = wr,
      t = _r;
    if (((_r = wr = null), pf(e), t)) for (e = 0; e < t.length; e++) pf(t[e]);
  }
}
function Ap(e, t) {
  return e(t);
}
function Pp() {}
var bs = !1;
function Ip(e, t, n) {
  if (bs) return e(t, n);
  bs = !0;
  try {
    return Ap(e, t, n);
  } finally {
    (bs = !1), (wr !== null || _r !== null) && (Pp(), $p());
  }
}
function bo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = zl(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error($(231, t, typeof n));
  return n;
}
var Aa = !1;
if (Zt)
  try {
    var to = {};
    Object.defineProperty(to, "passive", {
      get: function () {
        Aa = !0;
      },
    }),
      window.addEventListener("test", to, to),
      window.removeEventListener("test", to, to);
  } catch {
    Aa = !1;
  }
function cg(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var _o = !1,
  ll = null,
  sl = !1,
  Pa = null,
  fg = {
    onError: function (e) {
      (_o = !0), (ll = e);
    },
  };
function dg(e, t, n, r, o, i, l, s, a) {
  (_o = !1), (ll = null), cg.apply(fg, arguments);
}
function pg(e, t, n, r, o, i, l, s, a) {
  if ((dg.apply(this, arguments), _o)) {
    if (_o) {
      var u = ll;
      (_o = !1), (ll = null);
    } else throw Error($(198));
    sl || ((sl = !0), (Pa = u));
  }
}
function qn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Mp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function hf(e) {
  if (qn(e) !== e) throw Error($(188));
}
function hg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qn(e)), t === null)) throw Error($(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return hf(o), e;
        if (i === r) return hf(o), t;
        i = i.sibling;
      }
      throw Error($(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function bp(e) {
  return (e = hg(e)), e !== null ? Dp(e) : null;
}
function Dp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Dp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var jp = dt.unstable_scheduleCallback,
  mf = dt.unstable_cancelCallback,
  mg = dt.unstable_shouldYield,
  vg = dt.unstable_requestPaint,
  Ce = dt.unstable_now,
  yg = dt.unstable_getCurrentPriorityLevel,
  Uu = dt.unstable_ImmediatePriority,
  Vp = dt.unstable_UserBlockingPriority,
  al = dt.unstable_NormalPriority,
  gg = dt.unstable_LowPriority,
  Op = dt.unstable_IdlePriority,
  jl = null,
  zt = null;
function Sg(e) {
  if (zt && typeof zt.onCommitFiberRoot == "function")
    try {
      zt.onCommitFiberRoot(jl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var It = Math.clz32 ? Math.clz32 : Rg,
  wg = Math.log,
  _g = Math.LN2;
function Rg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wg(e) / _g) | 0)) | 0;
}
var _i = 64,
  Ri = 4194304;
function vo(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ul(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = vo(s)) : ((i &= l), i !== 0 && (r = vo(i)));
  } else (l = n & ~o), l !== 0 ? (r = vo(l)) : i !== 0 && (r = vo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - It(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Eg(e, t) {
  switch (e) {
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
function xg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - It(i),
      s = 1 << l,
      a = o[l];
    a === -1
      ? (!(s & n) || s & r) && (o[l] = Eg(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Ia(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Up() {
  var e = _i;
  return (_i <<= 1), !(_i & 4194240) && (_i = 64), e;
}
function Ds(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ti(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - It(t)),
    (e[t] = n);
}
function Ng(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - It(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function zu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - It(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ue = 0;
function zp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Fp,
  Fu,
  Bp,
  Wp,
  Hp,
  Ma = !1,
  Ei = [],
  mn = null,
  vn = null,
  yn = null,
  Do = new Map(),
  jo = new Map(),
  cn = [],
  kg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function vf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mn = null;
      break;
    case "dragenter":
    case "dragleave":
      vn = null;
      break;
    case "mouseover":
    case "mouseout":
      yn = null;
      break;
    case "pointerover":
    case "pointerout":
      Do.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jo.delete(t.pointerId);
  }
}
function no(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ri(t)), t !== null && Fu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Cg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (mn = no(mn, e, t, n, r, o)), !0;
    case "dragenter":
      return (vn = no(vn, e, t, n, r, o)), !0;
    case "mouseover":
      return (yn = no(yn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Do.set(i, no(Do.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), jo.set(i, no(jo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Gp(e) {
  var t = bn(e.target);
  if (t !== null) {
    var n = qn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Mp(n)), t !== null)) {
          (e.blockedOn = t),
            Hp(e.priority, function () {
              Bp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Bi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ba(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (La = r), n.target.dispatchEvent(r), (La = null);
    } else return (t = ri(n)), t !== null && Fu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function yf(e, t, n) {
  Bi(e) && n.delete(t);
}
function Tg() {
  (Ma = !1),
    mn !== null && Bi(mn) && (mn = null),
    vn !== null && Bi(vn) && (vn = null),
    yn !== null && Bi(yn) && (yn = null),
    Do.forEach(yf),
    jo.forEach(yf);
}
function ro(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ma ||
      ((Ma = !0),
      dt.unstable_scheduleCallback(dt.unstable_NormalPriority, Tg)));
}
function Vo(e) {
  function t(o) {
    return ro(o, e);
  }
  if (0 < Ei.length) {
    ro(Ei[0], e);
    for (var n = 1; n < Ei.length; n++) {
      var r = Ei[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    mn !== null && ro(mn, e),
      vn !== null && ro(vn, e),
      yn !== null && ro(yn, e),
      Do.forEach(t),
      jo.forEach(t),
      n = 0;
    n < cn.length;
    n++
  )
    (r = cn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < cn.length && ((n = cn[0]), n.blockedOn === null); )
    Gp(n), n.blockedOn === null && cn.shift();
}
var Rr = tn.ReactCurrentBatchConfig,
  cl = !0;
function Lg(e, t, n, r) {
  var o = ue,
    i = Rr.transition;
  Rr.transition = null;
  try {
    (ue = 1), Bu(e, t, n, r);
  } finally {
    (ue = o), (Rr.transition = i);
  }
}
function $g(e, t, n, r) {
  var o = ue,
    i = Rr.transition;
  Rr.transition = null;
  try {
    (ue = 4), Bu(e, t, n, r);
  } finally {
    (ue = o), (Rr.transition = i);
  }
}
function Bu(e, t, n, r) {
  if (cl) {
    var o = ba(e, t, n, r);
    if (o === null) Gs(e, t, r, fl, n), vf(e, r);
    else if (Cg(o, e, t, n, r)) r.stopPropagation();
    else if ((vf(e, r), t & 4 && -1 < kg.indexOf(e))) {
      for (; o !== null; ) {
        var i = ri(o);
        if (
          (i !== null && Fp(i),
          (i = ba(e, t, n, r)),
          i === null && Gs(e, t, r, fl, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Gs(e, t, r, null, n);
  }
}
var fl = null;
function ba(e, t, n, r) {
  if (((fl = null), (e = Ou(r)), (e = bn(e)), e !== null))
    if (((t = qn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Mp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (fl = e), null;
}
function Kp(e) {
  switch (e) {
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
      switch (yg()) {
        case Uu:
          return 1;
        case Vp:
          return 4;
        case al:
        case gg:
          return 16;
        case Op:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dn = null,
  Wu = null,
  Wi = null;
function Qp() {
  if (Wi) return Wi;
  var e,
    t = Wu,
    n = t.length,
    r,
    o = "value" in dn ? dn.value : dn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Wi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Hi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xi() {
  return !0;
}
function gf() {
  return !1;
}
function ht(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? xi
        : gf),
      (this.isPropagationStopped = gf),
      this
    );
  }
  return (
    Ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = xi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = xi));
      },
      persist: function () {},
      isPersistent: xi,
    }),
    t
  );
}
var Hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Hu = ht(Hr),
  ni = Ne({}, Hr, { view: 0, detail: 0 }),
  Ag = ht(ni),
  js,
  Vs,
  oo,
  Vl = Ne({}, ni, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Gu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== oo &&
            (oo && e.type === "mousemove"
              ? ((js = e.screenX - oo.screenX), (Vs = e.screenY - oo.screenY))
              : (Vs = js = 0),
            (oo = e)),
          js);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vs;
    },
  }),
  Sf = ht(Vl),
  Pg = Ne({}, Vl, { dataTransfer: 0 }),
  Ig = ht(Pg),
  Mg = Ne({}, ni, { relatedTarget: 0 }),
  Os = ht(Mg),
  bg = Ne({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dg = ht(bg),
  jg = Ne({}, Hr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Vg = ht(jg),
  Og = Ne({}, Hr, { data: 0 }),
  wf = ht(Og),
  Ug = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Fg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Bg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fg[e]) ? !!t[e] : !1;
}
function Gu() {
  return Bg;
}
var Wg = Ne({}, ni, {
    key: function (e) {
      if (e.key) {
        var t = Ug[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Hi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? zg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Gu,
    charCode: function (e) {
      return e.type === "keypress" ? Hi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Hi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Hg = ht(Wg),
  Gg = Ne({}, Vl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  _f = ht(Gg),
  Kg = Ne({}, ni, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gu,
  }),
  Qg = ht(Kg),
  Yg = Ne({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xg = ht(Yg),
  Zg = Ne({}, Vl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  qg = ht(Zg),
  Jg = [9, 13, 27, 32],
  Ku = Zt && "CompositionEvent" in window,
  Ro = null;
Zt && "documentMode" in document && (Ro = document.documentMode);
var e0 = Zt && "TextEvent" in window && !Ro,
  Yp = Zt && (!Ku || (Ro && 8 < Ro && 11 >= Ro)),
  Rf = " ",
  Ef = !1;
function Xp(e, t) {
  switch (e) {
    case "keyup":
      return Jg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Zp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ar = !1;
function t0(e, t) {
  switch (e) {
    case "compositionend":
      return Zp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ef = !0), Rf);
    case "textInput":
      return (e = t.data), e === Rf && Ef ? null : e;
    default:
      return null;
  }
}
function n0(e, t) {
  if (ar)
    return e === "compositionend" || (!Ku && Xp(e, t))
      ? ((e = Qp()), (Wi = Wu = dn = null), (ar = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Yp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var r0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function xf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!r0[e.type] : t === "textarea";
}
function qp(e, t, n, r) {
  Lp(r),
    (t = dl(t, "onChange")),
    0 < t.length &&
      ((n = new Hu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Eo = null,
  Oo = null;
function o0(e) {
  uh(e, 0);
}
function Ol(e) {
  var t = fr(e);
  if (Rp(t)) return e;
}
function i0(e, t) {
  if (e === "change") return t;
}
var Jp = !1;
if (Zt) {
  var Us;
  if (Zt) {
    var zs = "oninput" in document;
    if (!zs) {
      var Nf = document.createElement("div");
      Nf.setAttribute("oninput", "return;"),
        (zs = typeof Nf.oninput == "function");
    }
    Us = zs;
  } else Us = !1;
  Jp = Us && (!document.documentMode || 9 < document.documentMode);
}
function kf() {
  Eo && (Eo.detachEvent("onpropertychange", eh), (Oo = Eo = null));
}
function eh(e) {
  if (e.propertyName === "value" && Ol(Oo)) {
    var t = [];
    qp(t, Oo, e, Ou(e)), Ip(o0, t);
  }
}
function l0(e, t, n) {
  e === "focusin"
    ? (kf(), (Eo = t), (Oo = n), Eo.attachEvent("onpropertychange", eh))
    : e === "focusout" && kf();
}
function s0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ol(Oo);
}
function a0(e, t) {
  if (e === "click") return Ol(t);
}
function u0(e, t) {
  if (e === "input" || e === "change") return Ol(t);
}
function c0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Dt = typeof Object.is == "function" ? Object.is : c0;
function Uo(e, t) {
  if (Dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ya.call(t, o) || !Dt(e[o], t[o])) return !1;
  }
  return !0;
}
function Cf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tf(e, t) {
  var n = Cf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
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
    n = Cf(n);
  }
}
function th(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? th(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function nh() {
  for (var e = window, t = il(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = il(e.document);
  }
  return t;
}
function Qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function f0(e) {
  var t = nh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    th(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Qu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Tf(n, i));
        var l = Tf(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var d0 = Zt && "documentMode" in document && 11 >= document.documentMode,
  ur = null,
  Da = null,
  xo = null,
  ja = !1;
function Lf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ja ||
    ur == null ||
    ur !== il(r) ||
    ((r = ur),
    "selectionStart" in r && Qu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (xo && Uo(xo, r)) ||
      ((xo = r),
      (r = dl(Da, "onSelect")),
      0 < r.length &&
        ((t = new Hu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ur))));
}
function Ni(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var cr = {
    animationend: Ni("Animation", "AnimationEnd"),
    animationiteration: Ni("Animation", "AnimationIteration"),
    animationstart: Ni("Animation", "AnimationStart"),
    transitionend: Ni("Transition", "TransitionEnd"),
  },
  Fs = {},
  rh = {};
Zt &&
  ((rh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cr.animationend.animation,
    delete cr.animationiteration.animation,
    delete cr.animationstart.animation),
  "TransitionEvent" in window || delete cr.transitionend.transition);
function Ul(e) {
  if (Fs[e]) return Fs[e];
  if (!cr[e]) return e;
  var t = cr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in rh) return (Fs[e] = t[n]);
  return e;
}
var oh = Ul("animationend"),
  ih = Ul("animationiteration"),
  lh = Ul("animationstart"),
  sh = Ul("transitionend"),
  ah = new Map(),
  $f =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Nn(e, t) {
  ah.set(e, t), Zn(t, [e]);
}
for (var Bs = 0; Bs < $f.length; Bs++) {
  var Ws = $f[Bs],
    p0 = Ws.toLowerCase(),
    h0 = Ws[0].toUpperCase() + Ws.slice(1);
  Nn(p0, "on" + h0);
}
Nn(oh, "onAnimationEnd");
Nn(ih, "onAnimationIteration");
Nn(lh, "onAnimationStart");
Nn("dblclick", "onDoubleClick");
Nn("focusin", "onFocus");
Nn("focusout", "onBlur");
Nn(sh, "onTransitionEnd");
kr("onMouseEnter", ["mouseout", "mouseover"]);
kr("onMouseLeave", ["mouseout", "mouseover"]);
kr("onPointerEnter", ["pointerout", "pointerover"]);
kr("onPointerLeave", ["pointerout", "pointerover"]);
Zn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Zn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Zn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Zn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var yo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  m0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));
function Af(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), pg(r, t, void 0, e), (e.currentTarget = null);
}
function uh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          Af(o, s, u), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Af(o, s, u), (i = a);
        }
    }
  }
  if (sl) throw ((e = Pa), (sl = !1), (Pa = null), e);
}
function pe(e, t) {
  var n = t[Fa];
  n === void 0 && (n = t[Fa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ch(t, e, 2, !1), n.add(r));
}
function Hs(e, t, n) {
  var r = 0;
  t && (r |= 4), ch(n, e, r, t);
}
var ki = "_reactListening" + Math.random().toString(36).slice(2);
function zo(e) {
  if (!e[ki]) {
    (e[ki] = !0),
      yp.forEach(function (n) {
        n !== "selectionchange" && (m0.has(n) || Hs(n, !1, e), Hs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ki] || ((t[ki] = !0), Hs("selectionchange", !1, t));
  }
}
function ch(e, t, n, r) {
  switch (Kp(t)) {
    case 1:
      var o = Lg;
      break;
    case 4:
      o = $g;
      break;
    default:
      o = Bu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Aa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Gs(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = bn(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Ip(function () {
    var u = i,
      d = Ou(n),
      f = [];
    e: {
      var m = ah.get(e);
      if (m !== void 0) {
        var y = Hu,
          v = e;
        switch (e) {
          case "keypress":
            if (Hi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Hg;
            break;
          case "focusin":
            (v = "focus"), (y = Os);
            break;
          case "focusout":
            (v = "blur"), (y = Os);
            break;
          case "beforeblur":
          case "afterblur":
            y = Os;
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
            y = Sf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Ig;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Qg;
            break;
          case oh:
          case ih:
          case lh:
            y = Dg;
            break;
          case sh:
            y = Xg;
            break;
          case "scroll":
            y = Ag;
            break;
          case "wheel":
            y = qg;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Vg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = _f;
        }
        var g = (t & 4) !== 0,
          x = !g && e === "scroll",
          p = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var c = u, h; c !== null; ) {
          h = c;
          var E = h.stateNode;
          if (
            (h.tag === 5 &&
              E !== null &&
              ((h = E),
              p !== null && ((E = bo(c, p)), E != null && g.push(Fo(c, E, h)))),
            x)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((m = new y(m, v, null, n, d)), f.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          m &&
            n !== La &&
            (v = n.relatedTarget || n.fromElement) &&
            (bn(v) || v[qt]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? bn(v) : null),
              v !== null &&
                ((x = qn(v)), v !== x || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((g = Sf),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = _f),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (c = "pointer")),
            (x = y == null ? m : fr(y)),
            (h = v == null ? m : fr(v)),
            (m = new g(E, c + "leave", y, n, d)),
            (m.target = x),
            (m.relatedTarget = h),
            (E = null),
            bn(d) === u &&
              ((g = new g(p, c + "enter", v, n, d)),
              (g.target = h),
              (g.relatedTarget = x),
              (E = g)),
            (x = E),
            y && v)
          )
            t: {
              for (g = y, p = v, c = 0, h = g; h; h = rr(h)) c++;
              for (h = 0, E = p; E; E = rr(E)) h++;
              for (; 0 < c - h; ) (g = rr(g)), c--;
              for (; 0 < h - c; ) (p = rr(p)), h--;
              for (; c--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                (g = rr(g)), (p = rr(p));
              }
              g = null;
            }
          else g = null;
          y !== null && Pf(f, m, y, g, !1),
            v !== null && x !== null && Pf(f, x, v, g, !0);
        }
      }
      e: {
        if (
          ((m = u ? fr(u) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var k = i0;
        else if (xf(m))
          if (Jp) k = u0;
          else {
            k = s0;
            var T = l0;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = a0);
        if (k && (k = k(e, u))) {
          qp(f, k, n, d);
          break e;
        }
        T && T(e, m, u),
          e === "focusout" &&
            (T = m._wrapperState) &&
            T.controlled &&
            m.type === "number" &&
            xa(m, "number", m.value);
      }
      switch (((T = u ? fr(u) : window), e)) {
        case "focusin":
          (xf(T) || T.contentEditable === "true") &&
            ((ur = T), (Da = u), (xo = null));
          break;
        case "focusout":
          xo = Da = ur = null;
          break;
        case "mousedown":
          ja = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ja = !1), Lf(f, n, d);
          break;
        case "selectionchange":
          if (d0) break;
        case "keydown":
        case "keyup":
          Lf(f, n, d);
      }
      var N;
      if (Ku)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        ar
          ? Xp(e, n) && (I = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (Yp &&
          n.locale !== "ko" &&
          (ar || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && ar && (N = Qp())
            : ((dn = d),
              (Wu = "value" in dn ? dn.value : dn.textContent),
              (ar = !0))),
        (T = dl(u, I)),
        0 < T.length &&
          ((I = new wf(I, e, null, n, d)),
          f.push({ event: I, listeners: T }),
          N ? (I.data = N) : ((N = Zp(n)), N !== null && (I.data = N)))),
        (N = e0 ? t0(e, n) : n0(e, n)) &&
          ((u = dl(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new wf("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = N)));
    }
    uh(f, t);
  });
}
function Fo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function dl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = bo(e, n)),
      i != null && r.unshift(Fo(e, i, o)),
      (i = bo(e, t)),
      i != null && r.push(Fo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function rr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pf(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = bo(n, i)), a != null && l.unshift(Fo(n, a, s)))
        : o || ((a = bo(n, i)), a != null && l.push(Fo(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var v0 = /\r\n?/g,
  y0 = /\u0000|\uFFFD/g;
function If(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      v0,
      `
`
    )
    .replace(y0, "");
}
function Ci(e, t, n) {
  if (((t = If(t)), If(e) !== t && n)) throw Error($(425));
}
function pl() {}
var Va = null,
  Oa = null;
function Ua(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var za = typeof setTimeout == "function" ? setTimeout : void 0,
  g0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Mf = typeof Promise == "function" ? Promise : void 0,
  S0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Mf < "u"
      ? function (e) {
          return Mf.resolve(null).then(e).catch(w0);
        }
      : za;
function w0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ks(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Vo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Vo(t);
}
function gn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function bf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gr = Math.random().toString(36).slice(2),
  Ut = "__reactFiber$" + Gr,
  Bo = "__reactProps$" + Gr,
  qt = "__reactContainer$" + Gr,
  Fa = "__reactEvents$" + Gr,
  _0 = "__reactListeners$" + Gr,
  R0 = "__reactHandles$" + Gr;
function bn(e) {
  var t = e[Ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qt] || n[Ut])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = bf(e); e !== null; ) {
          if ((n = e[Ut])) return n;
          e = bf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ri(e) {
  return (
    (e = e[Ut] || e[qt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function zl(e) {
  return e[Bo] || null;
}
var Ba = [],
  dr = -1;
function kn(e) {
  return { current: e };
}
function ve(e) {
  0 > dr || ((e.current = Ba[dr]), (Ba[dr] = null), dr--);
}
function de(e, t) {
  dr++, (Ba[dr] = e.current), (e.current = t);
}
var xn = {},
  Ge = kn(xn),
  tt = kn(!1),
  Wn = xn;
function Cr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function nt(e) {
  return (e = e.childContextTypes), e != null;
}
function hl() {
  ve(tt), ve(Ge);
}
function Df(e, t, n) {
  if (Ge.current !== xn) throw Error($(168));
  de(Ge, t), de(tt, n);
}
function fh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error($(108, lg(e) || "Unknown", o));
  return Ne({}, n, r);
}
function ml(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xn),
    (Wn = Ge.current),
    de(Ge, e),
    de(tt, tt.current),
    !0
  );
}
function jf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n
    ? ((e = fh(e, t, Wn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ve(tt),
      ve(Ge),
      de(Ge, e))
    : ve(tt),
    de(tt, n);
}
var Kt = null,
  Fl = !1,
  Qs = !1;
function dh(e) {
  Kt === null ? (Kt = [e]) : Kt.push(e);
}
function E0(e) {
  (Fl = !0), dh(e);
}
function Cn() {
  if (!Qs && Kt !== null) {
    Qs = !0;
    var e = 0,
      t = ue;
    try {
      var n = Kt;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Kt = null), (Fl = !1);
    } catch (o) {
      throw (Kt !== null && (Kt = Kt.slice(e + 1)), jp(Uu, Cn), o);
    } finally {
      (ue = t), (Qs = !1);
    }
  }
  return null;
}
var pr = [],
  hr = 0,
  vl = null,
  yl = 0,
  yt = [],
  gt = 0,
  Hn = null,
  Qt = 1,
  Yt = "";
function Pn(e, t) {
  (pr[hr++] = yl), (pr[hr++] = vl), (vl = e), (yl = t);
}
function ph(e, t, n) {
  (yt[gt++] = Qt), (yt[gt++] = Yt), (yt[gt++] = Hn), (Hn = e);
  var r = Qt;
  e = Yt;
  var o = 32 - It(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - It(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Qt = (1 << (32 - It(t) + o)) | (n << o) | r),
      (Yt = i + e);
  } else (Qt = (1 << i) | (n << o) | r), (Yt = e);
}
function Yu(e) {
  e.return !== null && (Pn(e, 1), ph(e, 1, 0));
}
function Xu(e) {
  for (; e === vl; )
    (vl = pr[--hr]), (pr[hr] = null), (yl = pr[--hr]), (pr[hr] = null);
  for (; e === Hn; )
    (Hn = yt[--gt]),
      (yt[gt] = null),
      (Yt = yt[--gt]),
      (yt[gt] = null),
      (Qt = yt[--gt]),
      (yt[gt] = null);
}
var ft = null,
  ct = null,
  we = !1,
  Pt = null;
function hh(e, t) {
  var n = St(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ft = e), (ct = gn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Hn !== null ? { id: Qt, overflow: Yt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = St(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ft = e),
            (ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ha(e) {
  if (we) {
    var t = ct;
    if (t) {
      var n = t;
      if (!Vf(e, t)) {
        if (Wa(e)) throw Error($(418));
        t = gn(n.nextSibling);
        var r = ft;
        t && Vf(e, t)
          ? hh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (we = !1), (ft = e));
      }
    } else {
      if (Wa(e)) throw Error($(418));
      (e.flags = (e.flags & -4097) | 2), (we = !1), (ft = e);
    }
  }
}
function Of(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ft = e;
}
function Ti(e) {
  if (e !== ft) return !1;
  if (!we) return Of(e), (we = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ua(e.type, e.memoizedProps))),
    t && (t = ct))
  ) {
    if (Wa(e)) throw (mh(), Error($(418)));
    for (; t; ) hh(e, t), (t = gn(t.nextSibling));
  }
  if ((Of(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ct = gn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ct = null;
    }
  } else ct = ft ? gn(e.stateNode.nextSibling) : null;
  return !0;
}
function mh() {
  for (var e = ct; e; ) e = gn(e.nextSibling);
}
function Tr() {
  (ct = ft = null), (we = !1);
}
function Zu(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
var x0 = tn.ReactCurrentBatchConfig;
function $t(e, t) {
  if (e && e.defaultProps) {
    (t = Ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var gl = kn(null),
  Sl = null,
  mr = null,
  qu = null;
function Ju() {
  qu = mr = Sl = null;
}
function ec(e) {
  var t = gl.current;
  ve(gl), (e._currentValue = t);
}
function Ga(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Er(e, t) {
  (Sl = e),
    (qu = mr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Je = !0), (e.firstContext = null));
}
function _t(e) {
  var t = e._currentValue;
  if (qu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), mr === null)) {
      if (Sl === null) throw Error($(308));
      (mr = e), (Sl.dependencies = { lanes: 0, firstContext: e });
    } else mr = mr.next = e;
  return t;
}
var Dn = null;
function tc(e) {
  Dn === null ? (Dn = [e]) : Dn.push(e);
}
function vh(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), tc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Jt(e, r)
  );
}
function Jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var an = !1;
function nc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function yh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ie & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Jt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), tc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Jt(e, n)
  );
}
function Gi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zu(e, n);
  }
}
function Uf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function wl(e, t, n, r) {
  var o = e.updateQueue;
  an = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== l &&
        (s === null ? (d.firstBaseUpdate = u) : (s.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = o.baseState;
    (l = 0), (d = u = a = null), (s = i);
    do {
      var m = s.lane,
        y = s.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            g = s;
          switch (((m = t), (y = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                f = v.call(y, f, m);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (m = typeof v == "function" ? v.call(y, f, m) : v),
                m == null)
              )
                break e;
              f = Ne({}, f, m);
              break e;
            case 2:
              an = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [s]) : m.push(s));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((u = d = y), (a = f)) : (d = d.next = y),
          (l |= m);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Kn |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function zf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error($(191, o));
        o.call(r);
      }
    }
}
var gh = new vp.Component().refs;
function Ka(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      o = _n(e),
      i = Xt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Sn(e, i, o)),
      t !== null && (Mt(t, e, o, r), Gi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      o = _n(e),
      i = Xt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Sn(e, i, o)),
      t !== null && (Mt(t, e, o, r), Gi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Qe(),
      r = _n(e),
      o = Xt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Sn(e, o, r)),
      t !== null && (Mt(t, e, r, n), Gi(t, e, r));
  },
};
function Ff(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Uo(n, r) || !Uo(o, i)
      : !0
  );
}
function Sh(e, t, n) {
  var r = !1,
    o = xn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = _t(i))
      : ((o = nt(t) ? Wn : Ge.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Cr(e, o) : xn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Bl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Bf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
}
function Qa(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = gh), nc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = _t(i))
    : ((i = nt(t) ? Wn : Ge.current), (o.context = Cr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ka(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Bl.enqueueReplaceState(o, o.state, null),
      wl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function io(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === gh && (s = o.refs = {}),
              l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, e));
  }
  return e;
}
function Li(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      $(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Wf(e) {
  var t = e._init;
  return t(e._payload);
}
function wh(e) {
  function t(p, c) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [c]), (p.flags |= 16)) : h.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), (c = c.sibling);
    return null;
  }
  function r(p, c) {
    for (p = new Map(); c !== null; )
      c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling);
    return p;
  }
  function o(p, c) {
    return (p = Rn(p, c)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, c, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((p.flags |= 2), c) : h)
            : ((p.flags |= 2), c))
        : ((p.flags |= 1048576), c)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, c, h, E) {
    return c === null || c.tag !== 6
      ? ((c = ta(h, p.mode, E)), (c.return = p), c)
      : ((c = o(c, h)), (c.return = p), c);
  }
  function a(p, c, h, E) {
    var k = h.type;
    return k === sr
      ? d(p, c, h.props.children, E, h.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === sn &&
            Wf(k) === c.type))
      ? ((E = o(c, h.props)), (E.ref = io(p, c, h)), (E.return = p), E)
      : ((E = qi(h.type, h.key, h.props, null, p.mode, E)),
        (E.ref = io(p, c, h)),
        (E.return = p),
        E);
  }
  function u(p, c, h, E) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = na(h, p.mode, E)), (c.return = p), c)
      : ((c = o(c, h.children || [])), (c.return = p), c);
  }
  function d(p, c, h, E, k) {
    return c === null || c.tag !== 7
      ? ((c = Un(h, p.mode, E, k)), (c.return = p), c)
      : ((c = o(c, h)), (c.return = p), c);
  }
  function f(p, c, h) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ta("" + c, p.mode, h)), (c.return = p), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case gi:
          return (
            (h = qi(c.type, c.key, c.props, null, p.mode, h)),
            (h.ref = io(p, null, c)),
            (h.return = p),
            h
          );
        case lr:
          return (c = na(c, p.mode, h)), (c.return = p), c;
        case sn:
          var E = c._init;
          return f(p, E(c._payload), h);
      }
      if (mo(c) || eo(c))
        return (c = Un(c, p.mode, h, null)), (c.return = p), c;
      Li(p, c);
    }
    return null;
  }
  function m(p, c, h, E) {
    var k = c !== null ? c.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return k !== null ? null : s(p, c, "" + h, E);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case gi:
          return h.key === k ? a(p, c, h, E) : null;
        case lr:
          return h.key === k ? u(p, c, h, E) : null;
        case sn:
          return (k = h._init), m(p, c, k(h._payload), E);
      }
      if (mo(h) || eo(h)) return k !== null ? null : d(p, c, h, E, null);
      Li(p, h);
    }
    return null;
  }
  function y(p, c, h, E, k) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (p = p.get(h) || null), s(c, p, "" + E, k);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case gi:
          return (p = p.get(E.key === null ? h : E.key) || null), a(c, p, E, k);
        case lr:
          return (p = p.get(E.key === null ? h : E.key) || null), u(c, p, E, k);
        case sn:
          var T = E._init;
          return y(p, c, h, T(E._payload), k);
      }
      if (mo(E) || eo(E)) return (p = p.get(h) || null), d(c, p, E, k, null);
      Li(c, E);
    }
    return null;
  }
  function v(p, c, h, E) {
    for (
      var k = null, T = null, N = c, I = (c = 0), X = null;
      N !== null && I < h.length;
      I++
    ) {
      N.index > I ? ((X = N), (N = null)) : (X = N.sibling);
      var z = m(p, N, h[I], E);
      if (z === null) {
        N === null && (N = X);
        break;
      }
      e && N && z.alternate === null && t(p, N),
        (c = i(z, c, I)),
        T === null ? (k = z) : (T.sibling = z),
        (T = z),
        (N = X);
    }
    if (I === h.length) return n(p, N), we && Pn(p, I), k;
    if (N === null) {
      for (; I < h.length; I++)
        (N = f(p, h[I], E)),
          N !== null &&
            ((c = i(N, c, I)), T === null ? (k = N) : (T.sibling = N), (T = N));
      return we && Pn(p, I), k;
    }
    for (N = r(p, N); I < h.length; I++)
      (X = y(N, p, I, h[I], E)),
        X !== null &&
          (e && X.alternate !== null && N.delete(X.key === null ? I : X.key),
          (c = i(X, c, I)),
          T === null ? (k = X) : (T.sibling = X),
          (T = X));
    return (
      e &&
        N.forEach(function (oe) {
          return t(p, oe);
        }),
      we && Pn(p, I),
      k
    );
  }
  function g(p, c, h, E) {
    var k = eo(h);
    if (typeof k != "function") throw Error($(150));
    if (((h = k.call(h)), h == null)) throw Error($(151));
    for (
      var T = (k = null), N = c, I = (c = 0), X = null, z = h.next();
      N !== null && !z.done;
      I++, z = h.next()
    ) {
      N.index > I ? ((X = N), (N = null)) : (X = N.sibling);
      var oe = m(p, N, z.value, E);
      if (oe === null) {
        N === null && (N = X);
        break;
      }
      e && N && oe.alternate === null && t(p, N),
        (c = i(oe, c, I)),
        T === null ? (k = oe) : (T.sibling = oe),
        (T = oe),
        (N = X);
    }
    if (z.done) return n(p, N), we && Pn(p, I), k;
    if (N === null) {
      for (; !z.done; I++, z = h.next())
        (z = f(p, z.value, E)),
          z !== null &&
            ((c = i(z, c, I)), T === null ? (k = z) : (T.sibling = z), (T = z));
      return we && Pn(p, I), k;
    }
    for (N = r(p, N); !z.done; I++, z = h.next())
      (z = y(N, p, I, z.value, E)),
        z !== null &&
          (e && z.alternate !== null && N.delete(z.key === null ? I : z.key),
          (c = i(z, c, I)),
          T === null ? (k = z) : (T.sibling = z),
          (T = z));
    return (
      e &&
        N.forEach(function (ye) {
          return t(p, ye);
        }),
      we && Pn(p, I),
      k
    );
  }
  function x(p, c, h, E) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === sr &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case gi:
          e: {
            for (var k = h.key, T = c; T !== null; ) {
              if (T.key === k) {
                if (((k = h.type), k === sr)) {
                  if (T.tag === 7) {
                    n(p, T.sibling),
                      (c = o(T, h.props.children)),
                      (c.return = p),
                      (p = c);
                    break e;
                  }
                } else if (
                  T.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === sn &&
                    Wf(k) === T.type)
                ) {
                  n(p, T.sibling),
                    (c = o(T, h.props)),
                    (c.ref = io(p, T, h)),
                    (c.return = p),
                    (p = c);
                  break e;
                }
                n(p, T);
                break;
              } else t(p, T);
              T = T.sibling;
            }
            h.type === sr
              ? ((c = Un(h.props.children, p.mode, E, h.key)),
                (c.return = p),
                (p = c))
              : ((E = qi(h.type, h.key, h.props, null, p.mode, E)),
                (E.ref = io(p, c, h)),
                (E.return = p),
                (p = E));
          }
          return l(p);
        case lr:
          e: {
            for (T = h.key; c !== null; ) {
              if (c.key === T)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  n(p, c.sibling),
                    (c = o(c, h.children || [])),
                    (c.return = p),
                    (p = c);
                  break e;
                } else {
                  n(p, c);
                  break;
                }
              else t(p, c);
              c = c.sibling;
            }
            (c = na(h, p.mode, E)), (c.return = p), (p = c);
          }
          return l(p);
        case sn:
          return (T = h._init), x(p, c, T(h._payload), E);
      }
      if (mo(h)) return v(p, c, h, E);
      if (eo(h)) return g(p, c, h, E);
      Li(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        c !== null && c.tag === 6
          ? (n(p, c.sibling), (c = o(c, h)), (c.return = p), (p = c))
          : (n(p, c), (c = ta(h, p.mode, E)), (c.return = p), (p = c)),
        l(p))
      : n(p, c);
  }
  return x;
}
var Lr = wh(!0),
  _h = wh(!1),
  oi = {},
  Ft = kn(oi),
  Wo = kn(oi),
  Ho = kn(oi);
function jn(e) {
  if (e === oi) throw Error($(174));
  return e;
}
function rc(e, t) {
  switch ((de(Ho, t), de(Wo, e), de(Ft, oi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ka(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ka(t, e));
  }
  ve(Ft), de(Ft, t);
}
function $r() {
  ve(Ft), ve(Wo), ve(Ho);
}
function Rh(e) {
  jn(Ho.current);
  var t = jn(Ft.current),
    n = ka(t, e.type);
  t !== n && (de(Wo, e), de(Ft, n));
}
function oc(e) {
  Wo.current === e && (ve(Ft), ve(Wo));
}
var Ee = kn(0);
function _l(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ys = [];
function ic() {
  for (var e = 0; e < Ys.length; e++)
    Ys[e]._workInProgressVersionPrimary = null;
  Ys.length = 0;
}
var Ki = tn.ReactCurrentDispatcher,
  Xs = tn.ReactCurrentBatchConfig,
  Gn = 0,
  xe = null,
  $e = null,
  De = null,
  Rl = !1,
  No = !1,
  Go = 0,
  N0 = 0;
function Be() {
  throw Error($(321));
}
function lc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Dt(e[n], t[n])) return !1;
  return !0;
}
function sc(e, t, n, r, o, i) {
  if (
    ((Gn = i),
    (xe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ki.current = e === null || e.memoizedState === null ? L0 : $0),
    (e = n(r, o)),
    No)
  ) {
    i = 0;
    do {
      if (((No = !1), (Go = 0), 25 <= i)) throw Error($(301));
      (i += 1),
        (De = $e = null),
        (t.updateQueue = null),
        (Ki.current = A0),
        (e = n(r, o));
    } while (No);
  }
  if (
    ((Ki.current = El),
    (t = $e !== null && $e.next !== null),
    (Gn = 0),
    (De = $e = xe = null),
    (Rl = !1),
    t)
  )
    throw Error($(300));
  return e;
}
function ac() {
  var e = Go !== 0;
  return (Go = 0), e;
}
function Vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return De === null ? (xe.memoizedState = De = e) : (De = De.next = e), De;
}
function Rt() {
  if ($e === null) {
    var e = xe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = $e.next;
  var t = De === null ? xe.memoizedState : De.next;
  if (t !== null) (De = t), ($e = e);
  else {
    if (e === null) throw Error($(310));
    ($e = e),
      (e = {
        memoizedState: $e.memoizedState,
        baseState: $e.baseState,
        baseQueue: $e.baseQueue,
        queue: $e.queue,
        next: null,
      }),
      De === null ? (xe.memoizedState = De = e) : (De = De.next = e);
  }
  return De;
}
function Ko(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zs(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = $e,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = i;
    do {
      var d = u.lane;
      if ((Gn & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = f), (l = r)) : (a = a.next = f),
          (xe.lanes |= d),
          (Kn |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = s),
      Dt(r, t.memoizedState) || (Je = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (xe.lanes |= i), (Kn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function qs(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    Dt(i, t.memoizedState) || (Je = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Eh() {}
function xh(e, t) {
  var n = xe,
    r = Rt(),
    o = t(),
    i = !Dt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Je = !0)),
    (r = r.queue),
    uc(Ch.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (De !== null && De.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qo(9, kh.bind(null, n, r, o, t), void 0, null),
      Ve === null)
    )
      throw Error($(349));
    Gn & 30 || Nh(n, t, o);
  }
  return o;
}
function Nh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function kh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Th(t) && Lh(e);
}
function Ch(e, t, n) {
  return n(function () {
    Th(t) && Lh(e);
  });
}
function Th(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Dt(e, n);
  } catch {
    return !0;
  }
}
function Lh(e) {
  var t = Jt(e, 1);
  t !== null && Mt(t, e, 1, -1);
}
function Hf(e) {
  var t = Vt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ko,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = T0.bind(null, xe, e)),
    [t.memoizedState, e]
  );
}
function Qo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $h() {
  return Rt().memoizedState;
}
function Qi(e, t, n, r) {
  var o = Vt();
  (xe.flags |= e),
    (o.memoizedState = Qo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Wl(e, t, n, r) {
  var o = Rt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if ($e !== null) {
    var l = $e.memoizedState;
    if (((i = l.destroy), r !== null && lc(r, l.deps))) {
      o.memoizedState = Qo(t, n, i, r);
      return;
    }
  }
  (xe.flags |= e), (o.memoizedState = Qo(1 | t, n, i, r));
}
function Gf(e, t) {
  return Qi(8390656, 8, e, t);
}
function uc(e, t) {
  return Wl(2048, 8, e, t);
}
function Ah(e, t) {
  return Wl(4, 2, e, t);
}
function Ph(e, t) {
  return Wl(4, 4, e, t);
}
function Ih(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Mh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Wl(4, 4, Ih.bind(null, t, e), n)
  );
}
function cc() {}
function bh(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Dh(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function jh(e, t, n) {
  return Gn & 21
    ? (Dt(n, t) || ((n = Up()), (xe.lanes |= n), (Kn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = n));
}
function k0(e, t) {
  var n = ue;
  (ue = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Xs.transition;
  Xs.transition = {};
  try {
    e(!1), t();
  } finally {
    (ue = n), (Xs.transition = r);
  }
}
function Vh() {
  return Rt().memoizedState;
}
function C0(e, t, n) {
  var r = _n(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Oh(e))
  )
    Uh(t, n);
  else if (((n = vh(e, t, n, r)), n !== null)) {
    var o = Qe();
    Mt(n, e, r, o), zh(n, t, r);
  }
}
function T0(e, t, n) {
  var r = _n(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Oh(e)) Uh(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Dt(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), tc(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = vh(e, t, o, r)),
      n !== null && ((o = Qe()), Mt(n, e, r, o), zh(n, t, r));
  }
}
function Oh(e) {
  var t = e.alternate;
  return e === xe || (t !== null && t === xe);
}
function Uh(e, t) {
  No = Rl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zu(e, n);
  }
}
var El = {
    readContext: _t,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useInsertionEffect: Be,
    useLayoutEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useMutableSource: Be,
    useSyncExternalStore: Be,
    useId: Be,
    unstable_isNewReconciler: !1,
  },
  L0 = {
    readContext: _t,
    useCallback: function (e, t) {
      return (Vt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _t,
    useEffect: Gf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qi(4194308, 4, Ih.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Vt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Vt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = C0.bind(null, xe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Vt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Hf,
    useDebugValue: cc,
    useDeferredValue: function (e) {
      return (Vt().memoizedState = e);
    },
    useTransition: function () {
      var e = Hf(!1),
        t = e[0];
      return (e = k0.bind(null, e[1])), (Vt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = xe,
        o = Vt();
      if (we) {
        if (n === void 0) throw Error($(407));
        n = n();
      } else {
        if (((n = t()), Ve === null)) throw Error($(349));
        Gn & 30 || Nh(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Gf(Ch.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Qo(9, kh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Vt(),
        t = Ve.identifierPrefix;
      if (we) {
        var n = Yt,
          r = Qt;
        (n = (r & ~(1 << (32 - It(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Go++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = N0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  $0 = {
    readContext: _t,
    useCallback: bh,
    useContext: _t,
    useEffect: uc,
    useImperativeHandle: Mh,
    useInsertionEffect: Ah,
    useLayoutEffect: Ph,
    useMemo: Dh,
    useReducer: Zs,
    useRef: $h,
    useState: function () {
      return Zs(Ko);
    },
    useDebugValue: cc,
    useDeferredValue: function (e) {
      var t = Rt();
      return jh(t, $e.memoizedState, e);
    },
    useTransition: function () {
      var e = Zs(Ko)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Eh,
    useSyncExternalStore: xh,
    useId: Vh,
    unstable_isNewReconciler: !1,
  },
  A0 = {
    readContext: _t,
    useCallback: bh,
    useContext: _t,
    useEffect: uc,
    useImperativeHandle: Mh,
    useInsertionEffect: Ah,
    useLayoutEffect: Ph,
    useMemo: Dh,
    useReducer: qs,
    useRef: $h,
    useState: function () {
      return qs(Ko);
    },
    useDebugValue: cc,
    useDeferredValue: function (e) {
      var t = Rt();
      return $e === null ? (t.memoizedState = e) : jh(t, $e.memoizedState, e);
    },
    useTransition: function () {
      var e = qs(Ko)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Eh,
    useSyncExternalStore: xh,
    useId: Vh,
    unstable_isNewReconciler: !1,
  };
function Ar(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ig(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Js(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ya(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var P0 = typeof WeakMap == "function" ? WeakMap : Map;
function Fh(e, t, n) {
  (n = Xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Nl || ((Nl = !0), (iu = r)), Ya(e, t);
    }),
    n
  );
}
function Bh(e, t, n) {
  (n = Xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ya(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ya(e, t),
          typeof r != "function" &&
            (wn === null ? (wn = new Set([this])) : wn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Kf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new P0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = G0.bind(null, e, t, n)), t.then(e, e));
}
function Qf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Yf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Xt(-1, 1)), (t.tag = 2), Sn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var I0 = tn.ReactCurrentOwner,
  Je = !1;
function Ke(e, t, n, r) {
  t.child = e === null ? _h(t, null, n, r) : Lr(t, e.child, n, r);
}
function Xf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Er(t, o),
    (r = sc(e, t, n, r, i, o)),
    (n = ac()),
    e !== null && !Je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        en(e, t, o))
      : (we && n && Yu(t), (t.flags |= 1), Ke(e, t, r, o), t.child)
  );
}
function Zf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !gc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Wh(e, t, i, r, o))
      : ((e = qi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Uo), n(l, r) && e.ref === t.ref)
    )
      return en(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Rn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Wh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Uo(i, r) && e.ref === t.ref)
      if (((Je = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Je = !0);
      else return (t.lanes = e.lanes), en(e, t, o);
  }
  return Xa(e, t, n, r, o);
}
function Hh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        de(yr, at),
        (at |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          de(yr, at),
          (at |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        de(yr, at),
        (at |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      de(yr, at),
      (at |= r);
  return Ke(e, t, o, n), t.child;
}
function Gh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xa(e, t, n, r, o) {
  var i = nt(n) ? Wn : Ge.current;
  return (
    (i = Cr(t, i)),
    Er(t, o),
    (n = sc(e, t, n, r, i, o)),
    (r = ac()),
    e !== null && !Je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        en(e, t, o))
      : (we && r && Yu(t), (t.flags |= 1), Ke(e, t, n, o), t.child)
  );
}
function qf(e, t, n, r, o) {
  if (nt(n)) {
    var i = !0;
    ml(t);
  } else i = !1;
  if ((Er(t, o), t.stateNode === null))
    Yi(e, t), Sh(t, n, r), Qa(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = _t(u))
      : ((u = nt(n) ? Wn : Ge.current), (u = Cr(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Bf(t, l, r, u)),
      (an = !1);
    var m = t.memoizedState;
    (l.state = m),
      wl(t, r, l, o),
      (a = t.memoizedState),
      s !== r || m !== a || tt.current || an
        ? (typeof d == "function" && (Ka(t, n, d, r), (a = t.memoizedState)),
          (s = an || Ff(t, n, s, r, m, a, u))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      yh(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : $t(t.type, s)),
      (l.props = u),
      (f = t.pendingProps),
      (m = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = _t(a))
        : ((a = nt(n) ? Wn : Ge.current), (a = Cr(t, a)));
    var y = n.getDerivedStateFromProps;
    (d =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== f || m !== a) && Bf(t, l, r, a)),
      (an = !1),
      (m = t.memoizedState),
      (l.state = m),
      wl(t, r, l, o);
    var v = t.memoizedState;
    s !== f || m !== v || tt.current || an
      ? (typeof y == "function" && (Ka(t, n, y, r), (v = t.memoizedState)),
        (u = an || Ff(t, n, u, r, m, v, a) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, v, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, v, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Za(e, t, n, r, i, o);
}
function Za(e, t, n, r, o, i) {
  Gh(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && jf(t, n, !1), en(e, t, i);
  (r = t.stateNode), (I0.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Lr(t, e.child, null, i)), (t.child = Lr(t, null, s, i)))
      : Ke(e, t, s, i),
    (t.memoizedState = r.state),
    o && jf(t, n, !0),
    t.child
  );
}
function Kh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Df(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Df(e, t.context, !1),
    rc(e, t.containerInfo);
}
function Jf(e, t, n, r, o) {
  return Tr(), Zu(o), (t.flags |= 256), Ke(e, t, n, r), t.child;
}
var qa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ja(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qh(e, t, n) {
  var r = t.pendingProps,
    o = Ee.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    de(Ee, o & 1),
    e === null)
  )
    return (
      Ha(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Kl(l, r, 0, null)),
              (e = Un(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ja(n)),
              (t.memoizedState = qa),
              e)
            : fc(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return M0(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Rn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Rn(s, i)) : ((i = Un(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ja(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = qa),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Rn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function fc(e, t) {
  return (
    (t = Kl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function $i(e, t, n, r) {
  return (
    r !== null && Zu(r),
    Lr(t, e.child, null, n),
    (e = fc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function M0(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Js(Error($(422)))), $i(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Kl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Un(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Lr(t, e.child, null, l),
        (t.child.memoizedState = Ja(l)),
        (t.memoizedState = qa),
        i);
  if (!(t.mode & 1)) return $i(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error($(419))), (r = Js(i, r, void 0)), $i(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Je || s)) {
    if (((r = Ve), r !== null)) {
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
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Jt(e, o), Mt(r, e, o, -1));
    }
    return yc(), (r = Js(Error($(421)))), $i(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = K0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ct = gn(o.nextSibling)),
      (ft = t),
      (we = !0),
      (Pt = null),
      e !== null &&
        ((yt[gt++] = Qt),
        (yt[gt++] = Yt),
        (yt[gt++] = Hn),
        (Qt = e.id),
        (Yt = e.overflow),
        (Hn = t)),
      (t = fc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ed(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ga(e.return, t, n);
}
function ea(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Yh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ke(e, t, r.children, n), (r = Ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ed(e, n, t);
        else if (e.tag === 19) ed(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((de(Ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && _l(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ea(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && _l(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ea(t, !0, n, null, i);
        break;
      case "together":
        ea(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Yi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function en(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Rn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function b0(e, t, n) {
  switch (t.tag) {
    case 3:
      Kh(t), Tr();
      break;
    case 5:
      Rh(t);
      break;
    case 1:
      nt(t.type) && ml(t);
      break;
    case 4:
      rc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      de(gl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (de(Ee, Ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Qh(e, t, n)
          : (de(Ee, Ee.current & 1),
            (e = en(e, t, n)),
            e !== null ? e.sibling : null);
      de(Ee, Ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Yh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        de(Ee, Ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Hh(e, t, n);
  }
  return en(e, t, n);
}
var Xh, eu, Zh, qh;
Xh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
eu = function () {};
Zh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), jn(Ft.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Ra(e, o)), (r = Ra(e, r)), (i = []);
        break;
      case "select":
        (o = Ne({}, o, { value: void 0 })),
          (r = Ne({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Na(e, o)), (r = Na(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = pl);
    }
    Ca(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Io.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Io.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && pe("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
qh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function lo(e, t) {
  if (!we)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function We(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function D0(e, t, n) {
  var r = t.pendingProps;
  switch ((Xu(t), t.tag)) {
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
      return We(t), null;
    case 1:
      return nt(t.type) && hl(), We(t), null;
    case 3:
      return (
        (r = t.stateNode),
        $r(),
        ve(tt),
        ve(Ge),
        ic(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ti(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Pt !== null && (au(Pt), (Pt = null)))),
        eu(e, t),
        We(t),
        null
      );
    case 5:
      oc(t);
      var o = jn(Ho.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Zh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return We(t), null;
        }
        if (((e = jn(Ft.current)), Ti(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ut] = t), (r[Bo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              pe("cancel", r), pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < yo.length; o++) pe(yo[o], r);
              break;
            case "source":
              pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              pe("error", r), pe("load", r);
              break;
            case "details":
              pe("toggle", r);
              break;
            case "input":
              uf(r, i), pe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                pe("invalid", r);
              break;
            case "textarea":
              ff(r, i), pe("invalid", r);
          }
          Ca(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Io.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  pe("scroll", r);
            }
          switch (n) {
            case "input":
              Si(r), cf(r, i, !0);
              break;
            case "textarea":
              Si(r), df(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = pl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Np(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ut] = t),
            (e[Bo] = r),
            Xh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ta(n, r)), n)) {
              case "dialog":
                pe("cancel", e), pe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < yo.length; o++) pe(yo[o], e);
                o = r;
                break;
              case "source":
                pe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                pe("error", e), pe("load", e), (o = r);
                break;
              case "details":
                pe("toggle", e), (o = r);
                break;
              case "input":
                uf(e, r), (o = Ra(e, r)), pe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ne({}, r, { value: void 0 })),
                  pe("invalid", e);
                break;
              case "textarea":
                ff(e, r), (o = Na(e, r)), pe("invalid", e);
                break;
              default:
                o = r;
            }
            Ca(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? Tp(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && kp(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Mo(e, a)
                    : typeof a == "number" && Mo(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Io.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && pe("scroll", e)
                      : a != null && bu(e, i, a, l));
              }
            switch (n) {
              case "input":
                Si(e), cf(e, r, !1);
                break;
              case "textarea":
                Si(e), df(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + En(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Sr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Sr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = pl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return We(t), null;
    case 6:
      if (e && t.stateNode != null) qh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (((n = jn(Ho.current)), jn(Ft.current), Ti(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ut] = t),
            (i = r.nodeValue !== n) && ((e = ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ci(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ci(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ut] = t),
            (t.stateNode = r);
      }
      return We(t), null;
    case 13:
      if (
        (ve(Ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (we && ct !== null && t.mode & 1 && !(t.flags & 128))
          mh(), Tr(), (t.flags |= 98560), (i = !1);
        else if (((i = Ti(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error($(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error($(317));
            i[Ut] = t;
          } else
            Tr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          We(t), (i = !1);
        } else Pt !== null && (au(Pt), (Pt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ee.current & 1 ? Ae === 0 && (Ae = 3) : yc())),
          t.updateQueue !== null && (t.flags |= 4),
          We(t),
          null);
    case 4:
      return (
        $r(), eu(e, t), e === null && zo(t.stateNode.containerInfo), We(t), null
      );
    case 10:
      return ec(t.type._context), We(t), null;
    case 17:
      return nt(t.type) && hl(), We(t), null;
    case 19:
      if ((ve(Ee), (i = t.memoizedState), i === null)) return We(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) lo(i, !1);
        else {
          if (Ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = _l(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    lo(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return de(Ee, (Ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ce() > Pr &&
            ((t.flags |= 128), (r = !0), lo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = _l(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              lo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !we)
            )
              return We(t), null;
          } else
            2 * Ce() - i.renderingStartTime > Pr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), lo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = Ee.current),
          de(Ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (We(t), null);
    case 22:
    case 23:
      return (
        vc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? at & 1073741824 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : We(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function j0(e, t) {
  switch ((Xu(t), t.tag)) {
    case 1:
      return (
        nt(t.type) && hl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        $r(),
        ve(tt),
        ve(Ge),
        ic(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return oc(t), null;
    case 13:
      if (
        (ve(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error($(340));
        Tr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ve(Ee), null;
    case 4:
      return $r(), null;
    case 10:
      return ec(t.type._context), null;
    case 22:
    case 23:
      return vc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ai = !1,
  He = !1,
  V0 = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function vr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ke(e, t, r);
      }
    else n.current = null;
}
function tu(e, t, n) {
  try {
    n();
  } catch (r) {
    ke(e, t, r);
  }
}
var td = !1;
function O0(e, t) {
  if (((Va = cl), (e = nh()), Qu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            d = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (m = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++u === o && (s = l),
                m === i && ++d === r && (a = l),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = y;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Oa = { focusedElem: e, selectionRange: n }, cl = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    x = v.memoizedState,
                    p = t.stateNode,
                    c = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : $t(t.type, g),
                      x
                    );
                  p.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error($(163));
            }
        } catch (E) {
          ke(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (v = td), (td = !1), v;
}
function ko(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && tu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Hl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function nu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Jh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Jh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ut], delete t[Bo], delete t[Fa], delete t[_0], delete t[R0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function em(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function nd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || em(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ru(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = pl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ru(e, t, n), e = e.sibling; e !== null; ) ru(e, t, n), (e = e.sibling);
}
function ou(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ou(e, t, n), e = e.sibling; e !== null; ) ou(e, t, n), (e = e.sibling);
}
var Ue = null,
  At = !1;
function rn(e, t, n) {
  for (n = n.child; n !== null; ) tm(e, t, n), (n = n.sibling);
}
function tm(e, t, n) {
  if (zt && typeof zt.onCommitFiberUnmount == "function")
    try {
      zt.onCommitFiberUnmount(jl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      He || vr(n, t);
    case 6:
      var r = Ue,
        o = At;
      (Ue = null),
        rn(e, t, n),
        (Ue = r),
        (At = o),
        Ue !== null &&
          (At
            ? ((e = Ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ue.removeChild(n.stateNode));
      break;
    case 18:
      Ue !== null &&
        (At
          ? ((e = Ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ks(e.parentNode, n)
              : e.nodeType === 1 && Ks(e, n),
            Vo(e))
          : Ks(Ue, n.stateNode));
      break;
    case 4:
      (r = Ue),
        (o = At),
        (Ue = n.stateNode.containerInfo),
        (At = !0),
        rn(e, t, n),
        (Ue = r),
        (At = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !He &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && tu(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      rn(e, t, n);
      break;
    case 1:
      if (
        !He &&
        (vr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ke(n, t, s);
        }
      rn(e, t, n);
      break;
    case 21:
      rn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((He = (r = He) || n.memoizedState !== null), rn(e, t, n), (He = r))
        : rn(e, t, n);
      break;
    default:
      rn(e, t, n);
  }
}
function rd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new V0()),
      t.forEach(function (r) {
        var o = Q0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Ue = s.stateNode), (At = !1);
              break e;
            case 3:
              (Ue = s.stateNode.containerInfo), (At = !0);
              break e;
            case 4:
              (Ue = s.stateNode.containerInfo), (At = !0);
              break e;
          }
          s = s.return;
        }
        if (Ue === null) throw Error($(160));
        tm(i, l, o), (Ue = null), (At = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        ke(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) nm(t, e), (t = t.sibling);
}
function nm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ct(t, e), jt(e), r & 4)) {
        try {
          ko(3, e, e.return), Hl(3, e);
        } catch (g) {
          ke(e, e.return, g);
        }
        try {
          ko(5, e, e.return);
        } catch (g) {
          ke(e, e.return, g);
        }
      }
      break;
    case 1:
      Ct(t, e), jt(e), r & 512 && n !== null && vr(n, n.return);
      break;
    case 5:
      if (
        (Ct(t, e),
        jt(e),
        r & 512 && n !== null && vr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Mo(o, "");
        } catch (g) {
          ke(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Ep(o, i),
              Ta(s, l);
            var u = Ta(s, i);
            for (l = 0; l < a.length; l += 2) {
              var d = a[l],
                f = a[l + 1];
              d === "style"
                ? Tp(o, f)
                : d === "dangerouslySetInnerHTML"
                ? kp(o, f)
                : d === "children"
                ? Mo(o, f)
                : bu(o, d, f, u);
            }
            switch (s) {
              case "input":
                Ea(o, i);
                break;
              case "textarea":
                xp(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? Sr(o, !!i.multiple, y, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Sr(o, !!i.multiple, i.defaultValue, !0)
                      : Sr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Bo] = i;
          } catch (g) {
            ke(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Ct(t, e), jt(e), r & 4)) {
        if (e.stateNode === null) throw Error($(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          ke(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Ct(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Vo(t.containerInfo);
        } catch (g) {
          ke(e, e.return, g);
        }
      break;
    case 4:
      Ct(t, e), jt(e);
      break;
    case 13:
      Ct(t, e),
        jt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (hc = Ce())),
        r & 4 && rd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((He = (u = He) || d), Ct(t, e), (He = u)) : Ct(t, e),
        jt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (O = e, d = e.child; d !== null; ) {
            for (f = O = d; O !== null; ) {
              switch (((m = O), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ko(4, m, m.return);
                  break;
                case 1:
                  vr(m, m.return);
                  var v = m.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      ke(r, n, g);
                    }
                  }
                  break;
                case 5:
                  vr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    id(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (O = y)) : id(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = f.stateNode),
                      (a = f.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Cp("display", l)));
              } catch (g) {
                ke(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (g) {
                ke(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ct(t, e), jt(e), r & 4 && rd(e);
      break;
    case 21:
      break;
    default:
      Ct(t, e), jt(e);
  }
}
function jt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (em(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Mo(o, ""), (r.flags &= -33));
          var i = nd(e);
          ou(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = nd(e);
          ru(e, s, l);
          break;
        default:
          throw Error($(161));
      }
    } catch (a) {
      ke(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function U0(e, t, n) {
  (O = e), rm(e);
}
function rm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Ai;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || He;
        s = Ai;
        var u = He;
        if (((Ai = l), (He = a) && !u))
          for (O = o; O !== null; )
            (l = O),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? ld(o)
                : a !== null
                ? ((a.return = l), (O = a))
                : ld(o);
        for (; i !== null; ) (O = i), rm(i), (i = i.sibling);
        (O = o), (Ai = s), (He = u);
      }
      od(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (O = i)) : od(e);
  }
}
function od(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              He || Hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !He)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $t(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && zf(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                zf(t, l, n);
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
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Vo(f);
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
              throw Error($(163));
          }
        He || (t.flags & 512 && nu(t));
      } catch (m) {
        ke(t, t.return, m);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function id(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function ld(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hl(4, t);
          } catch (a) {
            ke(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ke(t, o, a);
            }
          }
          var i = t.return;
          try {
            nu(t);
          } catch (a) {
            ke(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            nu(t);
          } catch (a) {
            ke(t, l, a);
          }
      }
    } catch (a) {
      ke(t, t.return, a);
    }
    if (t === e) {
      O = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (O = s);
      break;
    }
    O = t.return;
  }
}
var z0 = Math.ceil,
  xl = tn.ReactCurrentDispatcher,
  dc = tn.ReactCurrentOwner,
  wt = tn.ReactCurrentBatchConfig,
  ie = 0,
  Ve = null,
  Le = null,
  ze = 0,
  at = 0,
  yr = kn(0),
  Ae = 0,
  Yo = null,
  Kn = 0,
  Gl = 0,
  pc = 0,
  Co = null,
  qe = null,
  hc = 0,
  Pr = 1 / 0,
  Ht = null,
  Nl = !1,
  iu = null,
  wn = null,
  Pi = !1,
  pn = null,
  kl = 0,
  To = 0,
  lu = null,
  Xi = -1,
  Zi = 0;
function Qe() {
  return ie & 6 ? Ce() : Xi !== -1 ? Xi : (Xi = Ce());
}
function _n(e) {
  return e.mode & 1
    ? ie & 2 && ze !== 0
      ? ze & -ze
      : x0.transition !== null
      ? (Zi === 0 && (Zi = Up()), Zi)
      : ((e = ue),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Kp(e.type))),
        e)
    : 1;
}
function Mt(e, t, n, r) {
  if (50 < To) throw ((To = 0), (lu = null), Error($(185)));
  ti(e, n, r),
    (!(ie & 2) || e !== Ve) &&
      (e === Ve && (!(ie & 2) && (Gl |= n), Ae === 4 && fn(e, ze)),
      rt(e, r),
      n === 1 && ie === 0 && !(t.mode & 1) && ((Pr = Ce() + 500), Fl && Cn()));
}
function rt(e, t) {
  var n = e.callbackNode;
  xg(e, t);
  var r = ul(e, e === Ve ? ze : 0);
  if (r === 0)
    n !== null && mf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && mf(n), t === 1))
      e.tag === 0 ? E0(sd.bind(null, e)) : dh(sd.bind(null, e)),
        S0(function () {
          !(ie & 6) && Cn();
        }),
        (n = null);
    else {
      switch (zp(r)) {
        case 1:
          n = Uu;
          break;
        case 4:
          n = Vp;
          break;
        case 16:
          n = al;
          break;
        case 536870912:
          n = Op;
          break;
        default:
          n = al;
      }
      n = fm(n, om.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function om(e, t) {
  if (((Xi = -1), (Zi = 0), ie & 6)) throw Error($(327));
  var n = e.callbackNode;
  if (xr() && e.callbackNode !== n) return null;
  var r = ul(e, e === Ve ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cl(e, r);
  else {
    t = r;
    var o = ie;
    ie |= 2;
    var i = lm();
    (Ve !== e || ze !== t) && ((Ht = null), (Pr = Ce() + 500), On(e, t));
    do
      try {
        W0();
        break;
      } catch (s) {
        im(e, s);
      }
    while (!0);
    Ju(),
      (xl.current = i),
      (ie = o),
      Le !== null ? (t = 0) : ((Ve = null), (ze = 0), (t = Ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ia(e)), o !== 0 && ((r = o), (t = su(e, o)))), t === 1)
    )
      throw ((n = Yo), On(e, 0), fn(e, r), rt(e, Ce()), n);
    if (t === 6) fn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !F0(o) &&
          ((t = Cl(e, r)),
          t === 2 && ((i = Ia(e)), i !== 0 && ((r = i), (t = su(e, i)))),
          t === 1))
      )
        throw ((n = Yo), On(e, 0), fn(e, r), rt(e, Ce()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          In(e, qe, Ht);
          break;
        case 3:
          if (
            (fn(e, r), (r & 130023424) === r && ((t = hc + 500 - Ce()), 10 < t))
          ) {
            if (ul(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Qe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = za(In.bind(null, e, qe, Ht), t);
            break;
          }
          In(e, qe, Ht);
          break;
        case 4:
          if ((fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - It(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * z0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = za(In.bind(null, e, qe, Ht), r);
            break;
          }
          In(e, qe, Ht);
          break;
        case 5:
          In(e, qe, Ht);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return rt(e, Ce()), e.callbackNode === n ? om.bind(null, e) : null;
}
function su(e, t) {
  var n = Co;
  return (
    e.current.memoizedState.isDehydrated && (On(e, t).flags |= 256),
    (e = Cl(e, t)),
    e !== 2 && ((t = qe), (qe = n), t !== null && au(t)),
    e
  );
}
function au(e) {
  qe === null ? (qe = e) : qe.push.apply(qe, e);
}
function F0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Dt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function fn(e, t) {
  for (
    t &= ~pc,
      t &= ~Gl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - It(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function sd(e) {
  if (ie & 6) throw Error($(327));
  xr();
  var t = ul(e, 0);
  if (!(t & 1)) return rt(e, Ce()), null;
  var n = Cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ia(e);
    r !== 0 && ((t = r), (n = su(e, r)));
  }
  if (n === 1) throw ((n = Yo), On(e, 0), fn(e, t), rt(e, Ce()), n);
  if (n === 6) throw Error($(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    In(e, qe, Ht),
    rt(e, Ce()),
    null
  );
}
function mc(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    (ie = n), ie === 0 && ((Pr = Ce() + 500), Fl && Cn());
  }
}
function Qn(e) {
  pn !== null && pn.tag === 0 && !(ie & 6) && xr();
  var t = ie;
  ie |= 1;
  var n = wt.transition,
    r = ue;
  try {
    if (((wt.transition = null), (ue = 1), e)) return e();
  } finally {
    (ue = r), (wt.transition = n), (ie = t), !(ie & 6) && Cn();
  }
}
function vc() {
  (at = yr.current), ve(yr);
}
function On(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), g0(n)), Le !== null))
    for (n = Le.return; n !== null; ) {
      var r = n;
      switch ((Xu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && hl();
          break;
        case 3:
          $r(), ve(tt), ve(Ge), ic();
          break;
        case 5:
          oc(r);
          break;
        case 4:
          $r();
          break;
        case 13:
          ve(Ee);
          break;
        case 19:
          ve(Ee);
          break;
        case 10:
          ec(r.type._context);
          break;
        case 22:
        case 23:
          vc();
      }
      n = n.return;
    }
  if (
    ((Ve = e),
    (Le = e = Rn(e.current, null)),
    (ze = at = t),
    (Ae = 0),
    (Yo = null),
    (pc = Gl = Kn = 0),
    (qe = Co = null),
    Dn !== null)
  ) {
    for (t = 0; t < Dn.length; t++)
      if (((n = Dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    Dn = null;
  }
  return e;
}
function im(e, t) {
  do {
    var n = Le;
    try {
      if ((Ju(), (Ki.current = El), Rl)) {
        for (var r = xe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Rl = !1;
      }
      if (
        ((Gn = 0),
        (De = $e = xe = null),
        (No = !1),
        (Go = 0),
        (dc.current = null),
        n === null || n.return === null)
      ) {
        (Ae = 1), (Yo = t), (Le = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = ze),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = s,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = Qf(l);
          if (y !== null) {
            (y.flags &= -257),
              Yf(y, l, s, i, t),
              y.mode & 1 && Kf(i, u, t),
              (t = y),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Kf(i, u, t), yc();
              break e;
            }
            a = Error($(426));
          }
        } else if (we && s.mode & 1) {
          var x = Qf(l);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Yf(x, l, s, i, t),
              Zu(Ar(a, s));
            break e;
          }
        }
        (i = a = Ar(a, s)),
          Ae !== 4 && (Ae = 2),
          Co === null ? (Co = [i]) : Co.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = Fh(i, a, t);
              Uf(i, p);
              break e;
            case 1:
              s = a;
              var c = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (wn === null || !wn.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = Bh(i, s, t);
                Uf(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      am(n);
    } catch (k) {
      (t = k), Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function lm() {
  var e = xl.current;
  return (xl.current = El), e === null ? El : e;
}
function yc() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
    Ve === null || (!(Kn & 268435455) && !(Gl & 268435455)) || fn(Ve, ze);
}
function Cl(e, t) {
  var n = ie;
  ie |= 2;
  var r = lm();
  (Ve !== e || ze !== t) && ((Ht = null), On(e, t));
  do
    try {
      B0();
      break;
    } catch (o) {
      im(e, o);
    }
  while (!0);
  if ((Ju(), (ie = n), (xl.current = r), Le !== null)) throw Error($(261));
  return (Ve = null), (ze = 0), Ae;
}
function B0() {
  for (; Le !== null; ) sm(Le);
}
function W0() {
  for (; Le !== null && !mg(); ) sm(Le);
}
function sm(e) {
  var t = cm(e.alternate, e, at);
  (e.memoizedProps = e.pendingProps),
    t === null ? am(e) : (Le = t),
    (dc.current = null);
}
function am(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = j0(n, t)), n !== null)) {
        (n.flags &= 32767), (Le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ae = 6), (Le = null);
        return;
      }
    } else if (((n = D0(n, t, at)), n !== null)) {
      Le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function In(e, t, n) {
  var r = ue,
    o = wt.transition;
  try {
    (wt.transition = null), (ue = 1), H0(e, t, n, r);
  } finally {
    (wt.transition = o), (ue = r);
  }
  return null;
}
function H0(e, t, n, r) {
  do xr();
  while (pn !== null);
  if (ie & 6) throw Error($(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error($(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Ng(e, i),
    e === Ve && ((Le = Ve = null), (ze = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pi ||
      ((Pi = !0),
      fm(al, function () {
        return xr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = wt.transition), (wt.transition = null);
    var l = ue;
    ue = 1;
    var s = ie;
    (ie |= 4),
      (dc.current = null),
      O0(e, n),
      nm(n, e),
      f0(Oa),
      (cl = !!Va),
      (Oa = Va = null),
      (e.current = n),
      U0(n),
      vg(),
      (ie = s),
      (ue = l),
      (wt.transition = i);
  } else e.current = n;
  if (
    (Pi && ((Pi = !1), (pn = e), (kl = o)),
    (i = e.pendingLanes),
    i === 0 && (wn = null),
    Sg(n.stateNode),
    rt(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Nl) throw ((Nl = !1), (e = iu), (iu = null), e);
  return (
    kl & 1 && e.tag !== 0 && xr(),
    (i = e.pendingLanes),
    i & 1 ? (e === lu ? To++ : ((To = 0), (lu = e))) : (To = 0),
    Cn(),
    null
  );
}
function xr() {
  if (pn !== null) {
    var e = zp(kl),
      t = wt.transition,
      n = ue;
    try {
      if (((wt.transition = null), (ue = 16 > e ? 16 : e), pn === null))
        var r = !1;
      else {
        if (((e = pn), (pn = null), (kl = 0), ie & 6)) throw Error($(331));
        var o = ie;
        for (ie |= 4, O = e.current; O !== null; ) {
          var i = O,
            l = i.child;
          if (O.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (O = u; O !== null; ) {
                  var d = O;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ko(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (O = f);
                  else
                    for (; O !== null; ) {
                      d = O;
                      var m = d.sibling,
                        y = d.return;
                      if ((Jh(d), d === u)) {
                        O = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (O = m);
                        break;
                      }
                      O = y;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var x = g.sibling;
                    (g.sibling = null), (g = x);
                  } while (g !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (O = l);
          else
            e: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ko(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (O = p);
                break e;
              }
              O = i.return;
            }
        }
        var c = e.current;
        for (O = c; O !== null; ) {
          l = O;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (O = h);
          else
            e: for (l = c; O !== null; ) {
              if (((s = O), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hl(9, s);
                  }
                } catch (k) {
                  ke(s, s.return, k);
                }
              if (s === l) {
                O = null;
                break e;
              }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), (O = E);
                break e;
              }
              O = s.return;
            }
        }
        if (
          ((ie = o), Cn(), zt && typeof zt.onPostCommitFiberRoot == "function")
        )
          try {
            zt.onPostCommitFiberRoot(jl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ue = n), (wt.transition = t);
    }
  }
  return !1;
}
function ad(e, t, n) {
  (t = Ar(n, t)),
    (t = Fh(e, t, 1)),
    (e = Sn(e, t, 1)),
    (t = Qe()),
    e !== null && (ti(e, 1, t), rt(e, t));
}
function ke(e, t, n) {
  if (e.tag === 3) ad(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ad(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (wn === null || !wn.has(r)))
        ) {
          (e = Ar(n, e)),
            (e = Bh(t, e, 1)),
            (t = Sn(t, e, 1)),
            (e = Qe()),
            t !== null && (ti(t, 1, e), rt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function G0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Qe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ve === e &&
      (ze & n) === n &&
      (Ae === 4 || (Ae === 3 && (ze & 130023424) === ze && 500 > Ce() - hc)
        ? On(e, 0)
        : (pc |= n)),
    rt(e, t);
}
function um(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ri), (Ri <<= 1), !(Ri & 130023424) && (Ri = 4194304))
      : (t = 1));
  var n = Qe();
  (e = Jt(e, t)), e !== null && (ti(e, t, n), rt(e, n));
}
function K0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), um(e, n);
}
function Q0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error($(314));
  }
  r !== null && r.delete(t), um(e, n);
}
var cm;
cm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || tt.current) Je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Je = !1), b0(e, t, n);
      Je = !!(e.flags & 131072);
    }
  else (Je = !1), we && t.flags & 1048576 && ph(t, yl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Yi(e, t), (e = t.pendingProps);
      var o = Cr(t, Ge.current);
      Er(t, n), (o = sc(null, t, r, e, o, n));
      var i = ac();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            nt(r) ? ((i = !0), ml(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            nc(t),
            (o.updater = Bl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Qa(t, r, e, n),
            (t = Za(null, t, r, !0, i, n)))
          : ((t.tag = 0), we && i && Yu(t), Ke(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Yi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = X0(r)),
          (e = $t(r, e)),
          o)
        ) {
          case 0:
            t = Xa(null, t, r, e, n);
            break e;
          case 1:
            t = qf(null, t, r, e, n);
            break e;
          case 11:
            t = Xf(null, t, r, e, n);
            break e;
          case 14:
            t = Zf(null, t, r, $t(r.type, e), n);
            break e;
        }
        throw Error($(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $t(r, o)),
        Xa(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $t(r, o)),
        qf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Kh(t), e === null)) throw Error($(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          yh(e, t),
          wl(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Ar(Error($(423)), t)), (t = Jf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Ar(Error($(424)), t)), (t = Jf(e, t, r, n, o));
            break e;
          } else
            for (
              ct = gn(t.stateNode.containerInfo.firstChild),
                ft = t,
                we = !0,
                Pt = null,
                n = _h(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Tr(), r === o)) {
            t = en(e, t, n);
            break e;
          }
          Ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Rh(t),
        e === null && Ha(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Ua(r, o) ? (l = null) : i !== null && Ua(r, i) && (t.flags |= 32),
        Gh(e, t),
        Ke(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ha(t), null;
    case 13:
      return Qh(e, t, n);
    case 4:
      return (
        rc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Lr(t, null, r, n)) : Ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $t(r, o)),
        Xf(e, t, r, o, n)
      );
    case 7:
      return Ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          de(gl, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Dt(i.value, l)) {
            if (i.children === o.children && !tt.current) {
              t = en(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Xt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Ga(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error($(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Ga(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Ke(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Er(t, n),
        (o = _t(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = $t(r, t.pendingProps)),
        (o = $t(r.type, o)),
        Zf(e, t, r, o, n)
      );
    case 15:
      return Wh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $t(r, o)),
        Yi(e, t),
        (t.tag = 1),
        nt(r) ? ((e = !0), ml(t)) : (e = !1),
        Er(t, n),
        Sh(t, r, o),
        Qa(t, r, o, n),
        Za(null, t, r, !0, e, n)
      );
    case 19:
      return Yh(e, t, n);
    case 22:
      return Hh(e, t, n);
  }
  throw Error($(156, t.tag));
};
function fm(e, t) {
  return jp(e, t);
}
function Y0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function St(e, t, n, r) {
  return new Y0(e, t, n, r);
}
function gc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function X0(e) {
  if (typeof e == "function") return gc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ju)) return 11;
    if (e === Vu) return 14;
  }
  return 2;
}
function Rn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = St(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function qi(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) gc(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case sr:
        return Un(n.children, o, i, t);
      case Du:
        (l = 8), (o |= 8);
        break;
      case ga:
        return (
          (e = St(12, n, t, o | 2)), (e.elementType = ga), (e.lanes = i), e
        );
      case Sa:
        return (e = St(13, n, t, o)), (e.elementType = Sa), (e.lanes = i), e;
      case wa:
        return (e = St(19, n, t, o)), (e.elementType = wa), (e.lanes = i), e;
      case wp:
        return Kl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case gp:
              l = 10;
              break e;
            case Sp:
              l = 9;
              break e;
            case ju:
              l = 11;
              break e;
            case Vu:
              l = 14;
              break e;
            case sn:
              (l = 16), (r = null);
              break e;
          }
        throw Error($(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = St(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Un(e, t, n, r) {
  return (e = St(7, e, r, t)), (e.lanes = n), e;
}
function Kl(e, t, n, r) {
  return (
    (e = St(22, e, r, t)),
    (e.elementType = wp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ta(e, t, n) {
  return (e = St(6, e, null, t)), (e.lanes = n), e;
}
function na(e, t, n) {
  return (
    (t = St(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Z0(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ds(0)),
    (this.expirationTimes = Ds(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ds(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Sc(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new Z0(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = St(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    nc(i),
    e
  );
}
function q0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: lr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function dm(e) {
  if (!e) return xn;
  e = e._reactInternals;
  e: {
    if (qn(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (nt(n)) return fh(e, n, t);
  }
  return t;
}
function pm(e, t, n, r, o, i, l, s, a) {
  return (
    (e = Sc(n, r, !0, e, o, i, l, s, a)),
    (e.context = dm(null)),
    (n = e.current),
    (r = Qe()),
    (o = _n(n)),
    (i = Xt(r, o)),
    (i.callback = t ?? null),
    Sn(n, i, o),
    (e.current.lanes = o),
    ti(e, o, r),
    rt(e, r),
    e
  );
}
function Ql(e, t, n, r) {
  var o = t.current,
    i = Qe(),
    l = _n(o);
  return (
    (n = dm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Sn(o, t, l)),
    e !== null && (Mt(e, o, l, i), Gi(e, o, l)),
    l
  );
}
function Tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ud(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function wc(e, t) {
  ud(e, t), (e = e.alternate) && ud(e, t);
}
function J0() {
  return null;
}
var hm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _c(e) {
  this._internalRoot = e;
}
Yl.prototype.render = _c.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  Ql(e, t, null, null);
};
Yl.prototype.unmount = _c.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qn(function () {
      Ql(null, e, null, null);
    }),
      (t[qt] = null);
  }
};
function Yl(e) {
  this._internalRoot = e;
}
Yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Wp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
    cn.splice(n, 0, e), n === 0 && Gp(e);
  }
};
function Rc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function cd() {}
function e1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Tl(l);
        i.call(u);
      };
    }
    var l = pm(t, r, e, 0, null, !1, !1, "", cd);
    return (
      (e._reactRootContainer = l),
      (e[qt] = l.current),
      zo(e.nodeType === 8 ? e.parentNode : e),
      Qn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Tl(a);
      s.call(u);
    };
  }
  var a = Sc(e, 0, !1, null, null, !1, !1, "", cd);
  return (
    (e._reactRootContainer = a),
    (e[qt] = a.current),
    zo(e.nodeType === 8 ? e.parentNode : e),
    Qn(function () {
      Ql(t, a, n, r);
    }),
    a
  );
}
function Zl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = Tl(l);
        s.call(a);
      };
    }
    Ql(t, l, e, o);
  } else l = e1(n, t, e, o, r);
  return Tl(l);
}
Fp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = vo(t.pendingLanes);
        n !== 0 &&
          (zu(t, n | 1), rt(t, Ce()), !(ie & 6) && ((Pr = Ce() + 500), Cn()));
      }
      break;
    case 13:
      Qn(function () {
        var r = Jt(e, 1);
        if (r !== null) {
          var o = Qe();
          Mt(r, e, 1, o);
        }
      }),
        wc(e, 1);
  }
};
Fu = function (e) {
  if (e.tag === 13) {
    var t = Jt(e, 134217728);
    if (t !== null) {
      var n = Qe();
      Mt(t, e, 134217728, n);
    }
    wc(e, 134217728);
  }
};
Bp = function (e) {
  if (e.tag === 13) {
    var t = _n(e),
      n = Jt(e, t);
    if (n !== null) {
      var r = Qe();
      Mt(n, e, t, r);
    }
    wc(e, t);
  }
};
Wp = function () {
  return ue;
};
Hp = function (e, t) {
  var n = ue;
  try {
    return (ue = e), t();
  } finally {
    ue = n;
  }
};
$a = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ea(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = zl(r);
            if (!o) throw Error($(90));
            Rp(r), Ea(r, o);
          }
        }
      }
      break;
    case "textarea":
      xp(e, n);
      break;
    case "select":
      (t = n.value), t != null && Sr(e, !!n.multiple, t, !1);
  }
};
Ap = mc;
Pp = Qn;
var t1 = { usingClientEntryPoint: !1, Events: [ri, fr, zl, Lp, $p, mc] },
  so = {
    findFiberByHostInstance: bn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  n1 = {
    bundleType: so.bundleType,
    version: so.version,
    rendererPackageName: so.rendererPackageName,
    rendererConfig: so.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = bp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: so.findFiberByHostInstance || J0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ii.isDisabled && Ii.supportsFiber)
    try {
      (jl = Ii.inject(n1)), (zt = Ii);
    } catch {}
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t1;
pt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rc(t)) throw Error($(200));
  return q0(e, t, null, n);
};
pt.createRoot = function (e, t) {
  if (!Rc(e)) throw Error($(299));
  var n = !1,
    r = "",
    o = hm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Sc(e, 1, !1, null, null, n, !1, r, o)),
    (e[qt] = t.current),
    zo(e.nodeType === 8 ? e.parentNode : e),
    new _c(t)
  );
};
pt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error($(188))
      : ((e = Object.keys(e).join(",")), Error($(268, e)));
  return (e = bp(t)), (e = e === null ? null : e.stateNode), e;
};
pt.flushSync = function (e) {
  return Qn(e);
};
pt.hydrate = function (e, t, n) {
  if (!Xl(t)) throw Error($(200));
  return Zl(null, e, t, !0, n);
};
pt.hydrateRoot = function (e, t, n) {
  if (!Rc(e)) throw Error($(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = hm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = pm(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[qt] = t.current),
    zo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Yl(t);
};
pt.render = function (e, t, n) {
  if (!Xl(t)) throw Error($(200));
  return Zl(null, e, t, !1, n);
};
pt.unmountComponentAtNode = function (e) {
  if (!Xl(e)) throw Error($(40));
  return e._reactRootContainer
    ? (Qn(function () {
        Zl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qt] = null);
        });
      }),
      !0)
    : !1;
};
pt.unstable_batchedUpdates = mc;
pt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xl(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return Zl(e, t, n, !1, r);
};
pt.version = "18.2.0-next-9e3b772b8-20220608";
function mm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mm);
    } catch (e) {
      console.error(e);
    }
}
mm(), (pp.exports = pt);
var vm = pp.exports;
const r1 = np(vm);
var fd = vm;
(va.createRoot = fd.createRoot), (va.hydrateRoot = fd.hydrateRoot);
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xo() {
  return (
    (Xo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xo.apply(this, arguments)
  );
}
var hn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(hn || (hn = {}));
const dd = "popstate";
function o1(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: s } = r.location;
    return uu(
      "",
      { pathname: i, search: l, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : ym(o);
  }
  return l1(t, n, null, e);
}
function Pe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ec(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function i1() {
  return Math.random().toString(36).substr(2, 8);
}
function pd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function uu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Xo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Kr(t) : t,
      { state: n, key: (t && t.key) || r || i1() }
    )
  );
}
function ym(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Kr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function l1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    s = hn.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), l.replaceState(Xo({}, l.state, { idx: u }), ""));
  function d() {
    return (l.state || { idx: null }).idx;
  }
  function f() {
    s = hn.Pop;
    let x = d(),
      p = x == null ? null : x - u;
    (u = x), a && a({ action: s, location: g.location, delta: p });
  }
  function m(x, p) {
    s = hn.Push;
    let c = uu(g.location, x, p);
    n && n(c, x), (u = d() + 1);
    let h = pd(c, u),
      E = g.createHref(c);
    try {
      l.pushState(h, "", E);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      o.location.assign(E);
    }
    i && a && a({ action: s, location: g.location, delta: 1 });
  }
  function y(x, p) {
    s = hn.Replace;
    let c = uu(g.location, x, p);
    n && n(c, x), (u = d());
    let h = pd(c, u),
      E = g.createHref(c);
    l.replaceState(h, "", E),
      i && a && a({ action: s, location: g.location, delta: 0 });
  }
  function v(x) {
    let p = o.location.origin !== "null" ? o.location.origin : o.location.href,
      c = typeof x == "string" ? x : ym(x);
    return (
      Pe(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, p)
    );
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(o, l);
    },
    listen(x) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(dd, f),
        (a = x),
        () => {
          o.removeEventListener(dd, f), (a = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: v,
    encodeLocation(x) {
      let p = v(x);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: m,
    replace: y,
    go(x) {
      return l.go(x);
    },
  };
  return g;
}
var hd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(hd || (hd = {}));
function s1(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Kr(t) : t,
    o = wm(r.pathname || "/", n);
  if (o == null) return null;
  let i = gm(e);
  a1(i);
  let l = null;
  for (let s = 0; l == null && s < i.length; ++s) l = y1(i[s], w1(o));
  return l;
}
function gm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (Pe(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = zn([r, a.relativePath]),
      d = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (Pe(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      gm(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: m1(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, l) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, l);
      else for (let a of Sm(i.path)) o(i, l, a);
    }),
    t
  );
}
function Sm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = Sm(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function a1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : v1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const u1 = /^:[\w-]+$/,
  c1 = 3,
  f1 = 2,
  d1 = 1,
  p1 = 10,
  h1 = -2,
  md = (e) => e === "*";
function m1(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(md) && (r += h1),
    t && (r += f1),
    n
      .filter((o) => !md(o))
      .reduce((o, i) => o + (u1.test(i) ? c1 : i === "" ? d1 : p1), r)
  );
}
function v1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function y1(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      d = g1(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let f = s.route;
    i.push({
      params: r,
      pathname: zn([o, d.pathname]),
      pathnameBase: C1(zn([o, d.pathnameBase])),
      route: f,
    }),
      d.pathnameBase !== "/" && (o = zn([o, d.pathnameBase]));
  }
  return i;
}
function g1(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = S1(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let { paramName: m, isOptional: y } = d;
      if (m === "*") {
        let g = s[f] || "";
        l = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const v = s[f];
      return y && !v ? (u[m] = void 0) : (u[m] = _1(v || "", m)), u;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function S1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ec(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, a) => (
            r.push({ paramName: s, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function w1(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Ec(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function _1(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Ec(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function wm(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function R1(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Kr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : E1(n, t)) : t,
    search: T1(r),
    hash: L1(o),
  };
}
function E1(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ra(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function x1(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function N1(e, t) {
  let n = x1(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function k1(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Kr(e))
    : ((o = Xo({}, e)),
      Pe(
        !o.pathname || !o.pathname.includes("?"),
        ra("?", "pathname", "search", o)
      ),
      Pe(
        !o.pathname || !o.pathname.includes("#"),
        ra("#", "pathname", "hash", o)
      ),
      Pe(!o.search || !o.search.includes("#"), ra("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    s;
  if (l == null) s = n;
  else {
    let f = t.length - 1;
    if (!r && l.startsWith("..")) {
      let m = l.split("/");
      for (; m[0] === ".."; ) m.shift(), (f -= 1);
      o.pathname = m.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let a = R1(o, s),
    u = l && l !== "/" && l.endsWith("/"),
    d = (i || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a;
}
const zn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  C1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  T1 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  L1 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function $1(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const _m = ["post", "put", "patch", "delete"];
new Set(_m);
const A1 = ["get", ..._m];
new Set(A1);
/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zo() {
  return (
    (Zo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zo.apply(this, arguments)
  );
}
const xc = C.createContext(null),
  P1 = C.createContext(null),
  ql = C.createContext(null),
  Jl = C.createContext(null),
  Tn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Rm = C.createContext(null);
function es() {
  return C.useContext(Jl) != null;
}
function Nc() {
  return es() || Pe(!1), C.useContext(Jl).location;
}
function Em(e) {
  C.useContext(ql).static || C.useLayoutEffect(e);
}
function Qr() {
  let { isDataRoute: e } = C.useContext(Tn);
  return e ? Q1() : I1();
}
function I1() {
  es() || Pe(!1);
  let e = C.useContext(xc),
    { basename: t, future: n, navigator: r } = C.useContext(ql),
    { matches: o } = C.useContext(Tn),
    { pathname: i } = Nc(),
    l = JSON.stringify(N1(o, n.v7_relativeSplatPath)),
    s = C.useRef(!1);
  return (
    Em(() => {
      s.current = !0;
    }),
    C.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !s.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = k1(u, JSON.parse(l), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : zn([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, l, i, e]
    )
  );
}
const M1 = C.createContext(null);
function b1(e) {
  let t = C.useContext(Tn).outlet;
  return t && C.createElement(M1.Provider, { value: e }, t);
}
function D1() {
  let { matches: e } = C.useContext(Tn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function j1(e, t) {
  return V1(e, t);
}
function V1(e, t, n, r) {
  es() || Pe(!1);
  let { navigator: o } = C.useContext(ql),
    { matches: i } = C.useContext(Tn),
    l = i[i.length - 1],
    s = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let u = Nc(),
    d;
  if (t) {
    var f;
    let x = typeof t == "string" ? Kr(t) : t;
    a === "/" || ((f = x.pathname) != null && f.startsWith(a)) || Pe(!1),
      (d = x);
  } else d = u;
  let m = d.pathname || "/",
    y = a === "/" ? m : m.slice(a.length) || "/",
    v = s1(e, { pathname: y }),
    g = B1(
      v &&
        v.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, s, x.params),
            pathname: zn([
              a,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? a
                : zn([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && g
    ? C.createElement(
        Jl.Provider,
        {
          value: {
            location: Zo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: hn.Pop,
          },
        },
        g
      )
    : g;
}
function O1() {
  let e = K1(),
    t = $1(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: o }, n) : null,
    null
  );
}
const U1 = C.createElement(O1, null);
class z1 extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          Tn.Provider,
          { value: this.props.routeContext },
          C.createElement(Rm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function F1(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = C.useContext(xc);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Tn.Provider, { value: t }, r)
  );
}
function B1(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let l = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let d = l.findIndex(
      (f) => f.route.id && (s == null ? void 0 : s[f.route.id])
    );
    d >= 0 || Pe(!1), (l = l.slice(0, Math.min(l.length, d + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < l.length; d++) {
      let f = l[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: m, errors: y } = n,
          v =
            f.route.loader &&
            m[f.route.id] === void 0 &&
            (!y || y[f.route.id] === void 0);
        if (f.route.lazy || v) {
          (a = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((d, f, m) => {
    let y,
      v = !1,
      g = null,
      x = null;
    n &&
      ((y = s && f.route.id ? s[f.route.id] : void 0),
      (g = f.route.errorElement || U1),
      a &&
        (u < 0 && m === 0
          ? (Y1("route-fallback", !1), (v = !0), (x = null))
          : u === m &&
            ((v = !0), (x = f.route.hydrateFallbackElement || null))));
    let p = t.concat(l.slice(0, m + 1)),
      c = () => {
        let h;
        return (
          y
            ? (h = g)
            : v
            ? (h = x)
            : f.route.Component
            ? (h = C.createElement(f.route.Component, null))
            : f.route.element
            ? (h = f.route.element)
            : (h = d),
          C.createElement(F1, {
            match: f,
            routeContext: { outlet: d, matches: p, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
      ? C.createElement(z1, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: y,
          children: c(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var xm = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(xm || {}),
  Ll = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ll || {});
function W1(e) {
  let t = C.useContext(xc);
  return t || Pe(!1), t;
}
function H1(e) {
  let t = C.useContext(P1);
  return t || Pe(!1), t;
}
function G1(e) {
  let t = C.useContext(Tn);
  return t || Pe(!1), t;
}
function Nm(e) {
  let t = G1(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Pe(!1), n.route.id;
}
function K1() {
  var e;
  let t = C.useContext(Rm),
    n = H1(Ll.UseRouteError),
    r = Nm(Ll.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Q1() {
  let { router: e } = W1(xm.UseNavigateStable),
    t = Nm(Ll.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Em(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Zo({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const vd = {};
function Y1(e, t, n) {
  !t && !vd[e] && (vd[e] = !0);
}
function X1(e) {
  return b1(e.context);
}
function on(e) {
  Pe(!1);
}
function Z1(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = hn.Pop,
    navigator: i,
    static: l = !1,
    future: s,
  } = e;
  es() && Pe(!1);
  let a = t.replace(/^\/*/, "/"),
    u = C.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: l,
        future: Zo({ v7_relativeSplatPath: !1 }, s),
      }),
      [a, s, i, l]
    );
  typeof r == "string" && (r = Kr(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: m = "",
      state: y = null,
      key: v = "default",
    } = r,
    g = C.useMemo(() => {
      let x = wm(d, a);
      return x == null
        ? null
        : {
            location: { pathname: x, search: f, hash: m, state: y, key: v },
            navigationType: o,
          };
    }, [a, d, f, m, y, v, o]);
  return g == null
    ? null
    : C.createElement(
        ql.Provider,
        { value: u },
        C.createElement(Jl.Provider, { children: n, value: g })
      );
}
function q1(e) {
  let { children: t, location: n } = e;
  return j1(cu(t), n);
}
new Promise(() => {});
function cu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, o) => {
      if (!C.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === C.Fragment) {
        n.push.apply(n, cu(r.props.children, i));
        return;
      }
      r.type !== on && Pe(!1), !r.props.index || !r.props.children || Pe(!1);
      let l = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = cu(r.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fu(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((o) => [n, o]) : [[n, r]]);
          }, [])
    )
  );
}
function J1(e, t) {
  let n = fu(e);
  return (
    t &&
      t.forEach((r, o) => {
        n.has(o) ||
          t.getAll(o).forEach((i) => {
            n.append(o, i);
          });
      }),
    n
  );
}
const eS = "startTransition",
  yd = Ky[eS];
function tS(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = C.useRef();
  i.current == null && (i.current = o1({ window: o, v5Compat: !0 }));
  let l = i.current,
    [s, a] = C.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    d = C.useCallback(
      (f) => {
        u && yd ? yd(() => a(f)) : a(f);
      },
      [a, u]
    );
  return (
    C.useLayoutEffect(() => l.listen(d), [l, d]),
    C.createElement(Z1, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
      future: r,
    })
  );
}
var gd;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(gd || (gd = {}));
var Sd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Sd || (Sd = {}));
function km(e) {
  let t = C.useRef(fu(e)),
    n = C.useRef(!1),
    r = Nc(),
    o = C.useMemo(() => J1(r.search, n.current ? null : t.current), [r.search]),
    i = Qr(),
    l = C.useCallback(
      (s, a) => {
        const u = fu(typeof s == "function" ? s(o) : s);
        (n.current = !0), i("?" + u, a);
      },
      [i, o]
    );
  return [o, l];
}
var Cm = {};
function nS(e) {
  const t = new Error(e);
  if (t.stack === void 0)
    try {
      throw t;
    } catch {}
  return t;
}
var rS = nS,
  ee = rS;
function oS(e) {
  return !!e && typeof e.then == "function";
}
var me = oS;
function iS(e, t) {
  if (e != null) return e;
  throw ee(t ?? "Got unexpected null or undefined");
}
var _e = iS;
function q(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
class ts {
  getValue() {
    throw ee("BaseLoadable");
  }
  toPromise() {
    throw ee("BaseLoadable");
  }
  valueMaybe() {
    throw ee("BaseLoadable");
  }
  valueOrThrow() {
    throw ee(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw ee("BaseLoadable");
  }
  promiseOrThrow() {
    throw ee(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw ee("BaseLoadable");
  }
  errorOrThrow() {
    throw ee(`Loadable expected error, but in "${this.state}" state`);
  }
  is(t) {
    return t.state === this.state && t.contents === this.contents;
  }
  map(t) {
    throw ee("BaseLoadable");
  }
}
class lS extends ts {
  constructor(t) {
    super(),
      q(this, "state", "hasValue"),
      q(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {}
  errorMaybe() {}
  map(t) {
    try {
      const n = t(this.contents);
      return me(n) ? Yn(n) : Ir(n) ? n : ii(n);
    } catch (n) {
      return me(n) ? Yn(n.next(() => this.map(t))) : ns(n);
    }
  }
}
class sS extends ts {
  constructor(t) {
    super(),
      q(this, "state", "hasError"),
      q(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {}
  promiseMaybe() {}
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(t) {
    return this;
  }
}
class Tm extends ts {
  constructor(t) {
    super(),
      q(this, "state", "loading"),
      q(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {}
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {}
  map(t) {
    return Yn(
      this.contents
        .then((n) => {
          const r = t(n);
          if (Ir(r)) {
            const o = r;
            switch (o.state) {
              case "hasValue":
                return o.contents;
              case "hasError":
                throw o.contents;
              case "loading":
                return o.contents;
            }
          }
          return r;
        })
        .catch((n) => {
          if (me(n)) return n.then(() => this.map(t).contents);
          throw n;
        })
    );
  }
}
function ii(e) {
  return Object.freeze(new lS(e));
}
function ns(e) {
  return Object.freeze(new sS(e));
}
function Yn(e) {
  return Object.freeze(new Tm(e));
}
function Lm() {
  return Object.freeze(new Tm(new Promise(() => {})));
}
function aS(e) {
  return e.every((t) => t.state === "hasValue")
    ? ii(e.map((t) => t.contents))
    : e.some((t) => t.state === "hasError")
    ? ns(
        _e(
          e.find((t) => t.state === "hasError"),
          "Invalid loadable passed to loadableAll"
        ).contents
      )
    : Yn(Promise.all(e.map((t) => t.contents)));
}
function $m(e) {
  const n = (
      Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((o) => e[o])
    ).map((o) => (Ir(o) ? o : me(o) ? Yn(o) : ii(o))),
    r = aS(n);
  return Array.isArray(e)
    ? r
    : r.map((o) =>
        Object.getOwnPropertyNames(e).reduce(
          (i, l, s) => ({ ...i, [l]: o[s] }),
          {}
        )
      );
}
function Ir(e) {
  return e instanceof ts;
}
const uS = {
  of: (e) => (me(e) ? Yn(e) : Ir(e) ? e : ii(e)),
  error: (e) => ns(e),
  loading: () => Lm(),
  all: $m,
  isLoadable: Ir,
};
var Jn = {
    loadableWithValue: ii,
    loadableWithError: ns,
    loadableWithPromise: Yn,
    loadableLoading: Lm,
    loadableAll: $m,
    isLoadable: Ir,
    RecoilLoadable: uS,
  },
  cS = Jn.loadableWithValue,
  fS = Jn.loadableWithError,
  dS = Jn.loadableWithPromise,
  pS = Jn.loadableLoading,
  hS = Jn.loadableAll,
  mS = Jn.isLoadable,
  vS = Jn.RecoilLoadable,
  li = Object.freeze({
    __proto__: null,
    loadableWithValue: cS,
    loadableWithError: fS,
    loadableWithPromise: dS,
    loadableLoading: pS,
    loadableAll: hS,
    isLoadable: mS,
    RecoilLoadable: vS,
  });
const du = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  RECOIL_GKS_ENABLED: new Set([
    "recoil_hamt_2020",
    "recoil_sync_external_store",
    "recoil_suppress_rerender_in_callback",
    "recoil_memory_managament_2020",
  ]),
};
function yS(e, t) {
  var n, r;
  const o =
    (n = Cm[e]) === null ||
    n === void 0 ||
    (r = n.toLowerCase()) === null ||
    r === void 0
      ? void 0
      : r.trim();
  if (o == null || o === "") return;
  if (!["true", "false"].includes(o))
    throw ee(`process.env.${e} value must be 'true', 'false', or empty: ${o}`);
  t(o === "true");
}
function gS(e, t) {
  var n;
  const r = (n = Cm[e]) === null || n === void 0 ? void 0 : n.trim();
  r == null || r === "" || t(r.split(/\s*,\s*|\s+/));
}
function SS() {
  var e;
  typeof process > "u" ||
    (((e = process) === null || e === void 0 ? void 0 : e.env) != null &&
      (yS("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (t) => {
        du.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = t;
      }),
      gS("RECOIL_GKS_ENABLED", (t) => {
        t.forEach((n) => {
          du.RECOIL_GKS_ENABLED.add(n);
        });
      })));
}
SS();
var Yr = du;
function rs(e) {
  return Yr.RECOIL_GKS_ENABLED.has(e);
}
rs.setPass = (e) => {
  Yr.RECOIL_GKS_ENABLED.add(e);
};
rs.setFail = (e) => {
  Yr.RECOIL_GKS_ENABLED.delete(e);
};
rs.clear = () => {
  Yr.RECOIL_GKS_ENABLED.clear();
};
var fe = rs;
function wS(e, t, { error: n } = {}) {
  return null;
}
var _S = wS,
  kc = _S,
  oa,
  ia,
  la;
const RS =
    (oa = se.createMutableSource) !== null && oa !== void 0
      ? oa
      : se.unstable_createMutableSource,
  Am =
    (ia = se.useMutableSource) !== null && ia !== void 0
      ? ia
      : se.unstable_useMutableSource,
  Pm =
    (la = se.useSyncExternalStore) !== null && la !== void 0
      ? la
      : se.unstable_useSyncExternalStore;
function ES() {
  var e;
  const { ReactCurrentDispatcher: t, ReactCurrentOwner: n } =
    se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  return (
    ((e = t == null ? void 0 : t.current) !== null && e !== void 0
      ? e
      : n.currentDispatcher
    ).useSyncExternalStore != null
  );
}
function xS() {
  return fe("recoil_transition_support")
    ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
    : fe("recoil_sync_external_store") && Pm != null
    ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
    : fe("recoil_mutable_source") &&
      Am != null &&
      typeof window < "u" &&
      !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
    ? fe("recoil_suppress_rerender_in_callback")
      ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
      : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
    : fe("recoil_suppress_rerender_in_callback")
    ? { mode: "LEGACY", early: !0, concurrent: !1 }
    : { mode: "LEGACY", early: !1, concurrent: !1 };
}
function NS() {
  return !1;
}
var si = {
  createMutableSource: RS,
  useMutableSource: Am,
  useSyncExternalStore: Pm,
  currentRendererSupportsUseSyncExternalStore: ES,
  reactMode: xS,
  isFastRefreshEnabled: NS,
};
class Cc {
  constructor(t) {
    q(this, "key", void 0), (this.key = t);
  }
  toJSON() {
    return { key: this.key };
  }
}
class Im extends Cc {}
class Mm extends Cc {}
function kS(e) {
  return e instanceof Im || e instanceof Mm;
}
var os = {
    AbstractRecoilValue: Cc,
    RecoilState: Im,
    RecoilValueReadOnly: Mm,
    isRecoilValue: kS,
  },
  CS = os.AbstractRecoilValue,
  TS = os.RecoilState,
  LS = os.RecoilValueReadOnly,
  $S = os.isRecoilValue,
  Mr = Object.freeze({
    __proto__: null,
    AbstractRecoilValue: CS,
    RecoilState: TS,
    RecoilValueReadOnly: LS,
    isRecoilValue: $S,
  });
function AS(e, t) {
  return (function* () {
    let n = 0;
    for (const r of e) yield t(r, n++);
  })();
}
var is = AS;
class bm {}
const PS = new bm(),
  Xn = new Map(),
  Tc = new Map();
function IS(e) {
  return is(e, (t) => _e(Tc.get(t)));
}
function MS(e) {
  if (Xn.has(e)) {
    const t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    console.warn(t);
  }
}
function bS(e) {
  Yr.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && MS(e.key), Xn.set(e.key, e);
  const t =
    e.set == null
      ? new Mr.RecoilValueReadOnly(e.key)
      : new Mr.RecoilState(e.key);
  return Tc.set(e.key, t), t;
}
class Dm extends Error {}
function DS(e) {
  const t = Xn.get(e);
  if (t == null) throw new Dm(`Missing definition for RecoilValue: "${e}""`);
  return t;
}
function jS(e) {
  return Xn.get(e);
}
const $l = new Map();
function VS(e) {
  var t;
  if (!fe("recoil_memory_managament_2020")) return;
  const n = Xn.get(e);
  if (
    n != null &&
    (t = n.shouldDeleteConfigOnRelease) !== null &&
    t !== void 0 &&
    t.call(n)
  ) {
    var r;
    Xn.delete(e), (r = jm(e)) === null || r === void 0 || r(), $l.delete(e);
  }
}
function OS(e, t) {
  fe("recoil_memory_managament_2020") &&
    (t === void 0 ? $l.delete(e) : $l.set(e, t));
}
function jm(e) {
  return $l.get(e);
}
var it = {
  nodes: Xn,
  recoilValues: Tc,
  registerNode: bS,
  getNode: DS,
  getNodeMaybe: jS,
  deleteNodeConfigIfPossible: VS,
  setConfigDeletionHandler: OS,
  getConfigDeletionHandler: jm,
  recoilValuesForKeys: IS,
  NodeMissingError: Dm,
  DefaultValue: bm,
  DEFAULT_VALUE: PS,
};
function US(e, t) {
  t();
}
var zS = { enqueueExecution: US };
function FS(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
var BS = FS(function (e) {
  var t =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (R) {
            return typeof R;
          }
        : function (R) {
            return R &&
              typeof Symbol == "function" &&
              R.constructor === Symbol &&
              R !== Symbol.prototype
              ? "symbol"
              : typeof R;
          },
    n = {},
    r = 5,
    o = Math.pow(2, r),
    i = o - 1,
    l = o / 2,
    s = o / 4,
    a = {},
    u = function (S) {
      return function () {
        return S;
      };
    },
    d = (n.hash = function (R) {
      var S = typeof R > "u" ? "undefined" : t(R);
      if (S === "number") return R;
      S !== "string" && (R += "");
      for (var L = 0, j = 0, V = R.length; j < V; ++j) {
        var U = R.charCodeAt(j);
        L = ((L << 5) - L + U) | 0;
      }
      return L;
    }),
    f = function (S) {
      return (
        (S -= (S >> 1) & 1431655765),
        (S = (S & 858993459) + ((S >> 2) & 858993459)),
        (S = (S + (S >> 4)) & 252645135),
        (S += S >> 8),
        (S += S >> 16),
        S & 127
      );
    },
    m = function (S, L) {
      return (L >>> S) & i;
    },
    y = function (S) {
      return 1 << S;
    },
    v = function (S, L) {
      return f(S & (L - 1));
    },
    g = function (S, L, j, V) {
      var U = V;
      if (!S) {
        var Q = V.length;
        U = new Array(Q);
        for (var G = 0; G < Q; ++G) U[G] = V[G];
      }
      return (U[L] = j), U;
    },
    x = function (S, L, j) {
      var V = j.length - 1,
        U = 0,
        Q = 0,
        G = j;
      if (S) U = Q = L;
      else for (G = new Array(V); U < L; ) G[Q++] = j[U++];
      for (++U; U <= V; ) G[Q++] = j[U++];
      return S && (G.length = V), G;
    },
    p = function (S, L, j, V) {
      var U = V.length;
      if (S) {
        for (var Q = U; Q >= L; ) V[Q--] = V[Q];
        return (V[L] = j), V;
      }
      for (var G = 0, K = 0, te = new Array(U + 1); G < L; ) te[K++] = V[G++];
      for (te[L] = j; G < U; ) te[++K] = V[G++];
      return te;
    },
    c = 1,
    h = 2,
    E = 3,
    k = 4,
    T = { __hamt_isEmpty: !0 },
    N = function (S) {
      return S === T || (S && S.__hamt_isEmpty);
    },
    I = function (S, L, j, V) {
      return { type: c, edit: S, hash: L, key: j, value: V, _modify: b };
    },
    X = function (S, L, j) {
      return { type: h, edit: S, hash: L, children: j, _modify: B };
    },
    z = function (S, L, j) {
      return { type: E, edit: S, mask: L, children: j, _modify: M };
    },
    oe = function (S, L, j) {
      return { type: k, edit: S, size: L, children: j, _modify: W };
    },
    ye = function (S) {
      return S === T || S.type === c || S.type === h;
    },
    le = function (S, L, j, V, U) {
      for (var Q = [], G = V, K = 0, te = 0; G; ++te)
        G & 1 && (Q[te] = U[K++]), (G >>>= 1);
      return (Q[L] = j), oe(S, K + 1, Q);
    },
    Ie = function (S, L, j, V) {
      for (
        var U = new Array(L - 1), Q = 0, G = 0, K = 0, te = V.length;
        K < te;
        ++K
      )
        if (K !== j) {
          var Se = V[K];
          Se && !N(Se) && ((U[Q++] = Se), (G |= 1 << K));
        }
      return z(S, G, U);
    },
    xt = function R(S, L, j, V, U, Q) {
      if (j === U) return X(S, j, [Q, V]);
      var G = m(L, j),
        K = m(L, U);
      return z(
        S,
        y(G) | y(K),
        G === K ? [R(S, L + r, j, V, U, Q)] : G < K ? [V, Q] : [Q, V]
      );
    },
    Me = function (S, L, j, V, U, Q, G, K) {
      for (var te = U.length, Se = 0; Se < te; ++Se) {
        var Ze = U[Se];
        if (j(G, Ze.key)) {
          var be = Ze.value,
            vt = Q(be);
          return vt === be
            ? U
            : vt === a
            ? (--K.value, x(S, Se, U))
            : g(S, Se, I(L, V, G, vt), U);
        }
      }
      var kt = Q();
      return kt === a ? U : (++K.value, g(S, te, I(L, V, G, kt), U));
    },
    Oe = function (S, L) {
      return S === L.edit;
    },
    b = function (S, L, j, V, U, Q, G) {
      if (L(Q, this.key)) {
        var K = V(this.value);
        return K === this.value
          ? this
          : K === a
          ? (--G.value, T)
          : Oe(S, this)
          ? ((this.value = K), this)
          : I(S, U, Q, K);
      }
      var te = V();
      return te === a
        ? this
        : (++G.value, xt(S, j, this.hash, this, U, I(S, U, Q, te)));
    },
    B = function (S, L, j, V, U, Q, G) {
      if (U === this.hash) {
        var K = Oe(S, this),
          te = Me(K, S, L, this.hash, this.children, V, Q, G);
        return te === this.children
          ? this
          : te.length > 1
          ? X(S, this.hash, te)
          : te[0];
      }
      var Se = V();
      return Se === a
        ? this
        : (++G.value, xt(S, j, this.hash, this, U, I(S, U, Q, Se)));
    },
    M = function (S, L, j, V, U, Q, G) {
      var K = this.mask,
        te = this.children,
        Se = m(j, U),
        Ze = y(Se),
        be = v(K, Ze),
        vt = K & Ze,
        kt = vt ? te[be] : T,
        nr = kt._modify(S, L, j + r, V, U, Q, G);
      if (kt === nr) return this;
      var vi = Oe(S, this),
        qr = K,
        Jr = void 0;
      if (vt && N(nr)) {
        if (((qr &= ~Ze), !qr)) return T;
        if (te.length <= 2 && ye(te[be ^ 1])) return te[be ^ 1];
        Jr = x(vi, be, te);
      } else if (!vt && !N(nr)) {
        if (te.length >= l) return le(S, Se, nr, K, te);
        (qr |= Ze), (Jr = p(vi, be, nr, te));
      } else Jr = g(vi, be, nr, te);
      return vi ? ((this.mask = qr), (this.children = Jr), this) : z(S, qr, Jr);
    },
    W = function (S, L, j, V, U, Q, G) {
      var K = this.size,
        te = this.children,
        Se = m(j, U),
        Ze = te[Se],
        be = (Ze || T)._modify(S, L, j + r, V, U, Q, G);
      if (Ze === be) return this;
      var vt = Oe(S, this),
        kt = void 0;
      if (N(Ze) && !N(be)) ++K, (kt = g(vt, Se, be, te));
      else if (!N(Ze) && N(be)) {
        if ((--K, K <= s)) return Ie(S, K, Se, te);
        kt = g(vt, Se, T, te);
      } else kt = g(vt, Se, be, te);
      return vt ? ((this.size = K), (this.children = kt), this) : oe(S, K, kt);
    };
  T._modify = function (R, S, L, j, V, U, Q) {
    var G = j();
    return G === a ? T : (++Q.value, I(R, V, U, G));
  };
  function w(R, S, L, j, V) {
    (this._editable = R),
      (this._edit = S),
      (this._config = L),
      (this._root = j),
      (this._size = V);
  }
  w.prototype.setTree = function (R, S) {
    return this._editable
      ? ((this._root = R), (this._size = S), this)
      : R === this._root
      ? this
      : new w(this._editable, this._edit, this._config, R, S);
  };
  var A = (n.tryGetHash = function (R, S, L, j) {
    for (var V = j._root, U = 0, Q = j._config.keyEq; ; )
      switch (V.type) {
        case c:
          return Q(L, V.key) ? V.value : R;
        case h: {
          if (S === V.hash)
            for (var G = V.children, K = 0, te = G.length; K < te; ++K) {
              var Se = G[K];
              if (Q(L, Se.key)) return Se.value;
            }
          return R;
        }
        case E: {
          var Ze = m(U, S),
            be = y(Ze);
          if (V.mask & be) {
            (V = V.children[v(V.mask, be)]), (U += r);
            break;
          }
          return R;
        }
        case k: {
          if (((V = V.children[m(U, S)]), V)) {
            U += r;
            break;
          }
          return R;
        }
        default:
          return R;
      }
  });
  w.prototype.tryGetHash = function (R, S, L) {
    return A(R, S, L, this);
  };
  var P = (n.tryGet = function (R, S, L) {
    return A(R, L._config.hash(S), S, L);
  });
  w.prototype.tryGet = function (R, S) {
    return P(R, S, this);
  };
  var H = (n.getHash = function (R, S, L) {
    return A(void 0, R, S, L);
  });
  (w.prototype.getHash = function (R, S) {
    return H(R, S, this);
  }),
    (n.get = function (R, S) {
      return A(void 0, S._config.hash(R), R, S);
    }),
    (w.prototype.get = function (R, S) {
      return P(S, R, this);
    });
  var D = (n.has = function (R, S, L) {
    return A(a, R, S, L) !== a;
  });
  w.prototype.hasHash = function (R, S) {
    return D(R, S, this);
  };
  var Y = (n.has = function (R, S) {
    return D(S._config.hash(R), R, S);
  });
  w.prototype.has = function (R) {
    return Y(R, this);
  };
  var Z = function (S, L) {
    return S === L;
  };
  (n.make = function (R) {
    return new w(
      0,
      0,
      { keyEq: (R && R.keyEq) || Z, hash: (R && R.hash) || d },
      T,
      0
    );
  }),
    (n.empty = n.make());
  var F = (n.isEmpty = function (R) {
    return R && !!N(R._root);
  });
  w.prototype.isEmpty = function () {
    return F(this);
  };
  var ce = (n.modifyHash = function (R, S, L, j) {
    var V = { value: j._size },
      U = j._root._modify(
        j._editable ? j._edit : NaN,
        j._config.keyEq,
        0,
        R,
        S,
        L,
        V
      );
    return j.setTree(U, V.value);
  });
  w.prototype.modifyHash = function (R, S, L) {
    return ce(L, R, S, this);
  };
  var ge = (n.modify = function (R, S, L) {
    return ce(R, L._config.hash(S), S, L);
  });
  w.prototype.modify = function (R, S) {
    return ge(S, R, this);
  };
  var ne = (n.setHash = function (R, S, L, j) {
    return ce(u(L), R, S, j);
  });
  w.prototype.setHash = function (R, S, L) {
    return ne(R, S, L, this);
  };
  var Re = (n.set = function (R, S, L) {
    return ne(L._config.hash(R), R, S, L);
  });
  w.prototype.set = function (R, S) {
    return Re(R, S, this);
  };
  var Nt = u(a),
    An = (n.removeHash = function (R, S, L) {
      return ce(Nt, R, S, L);
    });
  w.prototype.removeHash = w.prototype.deleteHash = function (R, S) {
    return An(R, S, this);
  };
  var mt = (n.remove = function (R, S) {
    return An(S._config.hash(R), R, S);
  });
  w.prototype.remove = w.prototype.delete = function (R) {
    return mt(R, this);
  };
  var lt = (n.beginMutation = function (R) {
    return new w(R._editable + 1, R._edit + 1, R._config, R._root, R._size);
  });
  w.prototype.beginMutation = function () {
    return lt(this);
  };
  var qc = (n.endMutation = function (R) {
    return (R._editable = R._editable && R._editable - 1), R;
  });
  w.prototype.endMutation = function () {
    return qc(this);
  };
  var _y = (n.mutate = function (R, S) {
    var L = lt(S);
    return R(L), qc(L);
  });
  w.prototype.mutate = function (R) {
    return _y(R, this);
  };
  var Ts = function (S) {
      return S && Jc(S[0], S[1], S[2], S[3], S[4]);
    },
    Jc = function (S, L, j, V, U) {
      for (; j < S; ) {
        var Q = L[j++];
        if (Q && !N(Q)) return ef(Q, V, [S, L, j, V, U]);
      }
      return Ts(U);
    },
    ef = function (S, L, j) {
      switch (S.type) {
        case c:
          return { value: L(S), rest: j };
        case h:
        case k:
        case E:
          var V = S.children;
          return Jc(V.length, V, 0, L, j);
        default:
          return Ts(j);
      }
    },
    Ry = { done: !0 };
  function Ls(R) {
    this.v = R;
  }
  (Ls.prototype.next = function () {
    if (!this.v) return Ry;
    var R = this.v;
    return (this.v = Ts(R.rest)), R;
  }),
    (Ls.prototype[Symbol.iterator] = function () {
      return this;
    });
  var $s = function (S, L) {
      return new Ls(ef(S._root, L));
    },
    Ey = function (S) {
      return [S.key, S.value];
    },
    xy = (n.entries = function (R) {
      return $s(R, Ey);
    });
  w.prototype.entries = w.prototype[Symbol.iterator] = function () {
    return xy(this);
  };
  var Ny = function (S) {
      return S.key;
    },
    ky = (n.keys = function (R) {
      return $s(R, Ny);
    });
  w.prototype.keys = function () {
    return ky(this);
  };
  var Cy = function (S) {
      return S.value;
    },
    Ty =
      (n.values =
      w.prototype.values =
        function (R) {
          return $s(R, Cy);
        });
  w.prototype.values = function () {
    return Ty(this);
  };
  var tf = (n.fold = function (R, S, L) {
    var j = L._root;
    if (j.type === c) return R(S, j.value, j.key);
    for (var V = [j.children], U = void 0; (U = V.pop()); )
      for (var Q = 0, G = U.length; Q < G; ) {
        var K = U[Q++];
        K &&
          K.type &&
          (K.type === c ? (S = R(S, K.value, K.key)) : V.push(K.children));
      }
    return S;
  });
  w.prototype.fold = function (R, S) {
    return tf(R, S, this);
  };
  var Ly = (n.forEach = function (R, S) {
    return tf(
      function (L, j, V) {
        return R(j, V, S);
      },
      null,
      S
    );
  });
  w.prototype.forEach = function (R) {
    return Ly(R, this);
  };
  var $y = (n.count = function (R) {
    return R._size;
  });
  (w.prototype.count = function () {
    return $y(this);
  }),
    Object.defineProperty(w.prototype, "size", { get: w.prototype.count }),
    e.exports ? (e.exports = n) : ((void 0).hamt = n);
});
class WS {
  constructor(t) {
    q(this, "_map", void 0),
      (this._map = new Map(t == null ? void 0 : t.entries()));
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(t) {
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
  set(t, n) {
    return this._map.set(t, n), this;
  }
  delete(t) {
    return this._map.delete(t), this;
  }
  clone() {
    return $c(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class Lc {
  constructor(t) {
    if ((q(this, "_hamt", BS.empty.beginMutation()), t instanceof Lc)) {
      const n = t._hamt.endMutation();
      (t._hamt = n.beginMutation()), (this._hamt = n.beginMutation());
    } else if (t) for (const [n, r] of t.entries()) this._hamt.set(n, r);
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(t) {
    return this._hamt.get(t);
  }
  has(t) {
    return this._hamt.has(t);
  }
  set(t, n) {
    return this._hamt.set(t, n), this;
  }
  delete(t) {
    return this._hamt.delete(t), this;
  }
  clone() {
    return $c(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function $c(e) {
  return fe("recoil_hamt_2020") ? new Lc(e) : new WS(e);
}
var HS = { persistentMap: $c },
  GS = HS.persistentMap,
  KS = Object.freeze({ __proto__: null, persistentMap: GS });
function QS(e, ...t) {
  const n = new Set();
  e: for (const r of e) {
    for (const o of t) if (o.has(r)) continue e;
    n.add(r);
  }
  return n;
}
var Lo = QS;
function YS(e, t) {
  const n = new Map();
  return (
    e.forEach((r, o) => {
      n.set(o, t(r, o));
    }),
    n
  );
}
var Al = YS;
function XS() {
  return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
}
function ZS(e) {
  return {
    nodeDeps: Al(e.nodeDeps, (t) => new Set(t)),
    nodeToNodeSubscriptions: Al(e.nodeToNodeSubscriptions, (t) => new Set(t)),
  };
}
function sa(e, t, n, r) {
  const { nodeDeps: o, nodeToNodeSubscriptions: i } = n,
    l = o.get(e);
  if (l && r && l !== r.nodeDeps.get(e)) return;
  o.set(e, t);
  const s = l == null ? t : Lo(t, l);
  for (const a of s) i.has(a) || i.set(a, new Set()), _e(i.get(a)).add(e);
  if (l) {
    const a = Lo(l, t);
    for (const u of a) {
      if (!i.has(u)) return;
      const d = _e(i.get(u));
      d.delete(e), d.size === 0 && i.delete(u);
    }
  }
}
function qS(e, t, n, r) {
  var o, i, l, s;
  const a = n.getState();
  r === a.currentTree.version ||
    r === ((o = a.nextTree) === null || o === void 0 ? void 0 : o.version) ||
    (i = a.previousTree) === null ||
    i === void 0 ||
    i.version;
  const u = n.getGraph(r);
  if (
    (sa(e, t, u),
    r === ((l = a.previousTree) === null || l === void 0 ? void 0 : l.version))
  ) {
    const f = n.getGraph(a.currentTree.version);
    sa(e, t, f, u);
  }
  if (
    r ===
      ((s = a.previousTree) === null || s === void 0 ? void 0 : s.version) ||
    r === a.currentTree.version
  ) {
    var d;
    const f = (d = a.nextTree) === null || d === void 0 ? void 0 : d.version;
    if (f !== void 0) {
      const m = n.getGraph(f);
      sa(e, t, m, u);
    }
  }
}
var ai = { cloneGraph: ZS, graph: XS, saveDepsToStore: qS };
let JS = 0;
const ew = () => JS++;
let tw = 0;
const nw = () => tw++;
let rw = 0;
const ow = () => rw++;
var ls = {
  getNextTreeStateVersion: ew,
  getNextStoreID: nw,
  getNextComponentID: ow,
};
const { persistentMap: wd } = KS,
  { graph: iw } = ai,
  { getNextTreeStateVersion: Vm } = ls;
function Om() {
  const e = Vm();
  return {
    version: e,
    stateID: e,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: wd(),
    nonvalidatedAtoms: wd(),
  };
}
function lw() {
  const e = Om();
  return {
    currentTree: e,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: new Set(),
    knownSelectors: new Set(),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(e.version, iw()),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set(),
    },
    nodeCleanupFunctions: new Map(),
  };
}
var Um = {
  makeEmptyTreeState: Om,
  makeEmptyStoreState: lw,
  getNextTreeStateVersion: Vm,
};
class zm {}
function sw() {
  return new zm();
}
var ss = { RetentionZone: zm, retentionZone: sw };
function aw(e, t) {
  const n = new Set(e);
  return n.add(t), n;
}
function uw(e, t) {
  const n = new Set(e);
  return n.delete(t), n;
}
function cw(e, t, n) {
  const r = new Map(e);
  return r.set(t, n), r;
}
function fw(e, t, n) {
  const r = new Map(e);
  return r.set(t, n(r.get(t))), r;
}
function dw(e, t) {
  const n = new Map(e);
  return n.delete(t), n;
}
function pw(e, t) {
  const n = new Map(e);
  return t.forEach((r) => n.delete(r)), n;
}
var Fm = {
  setByAddingToSet: aw,
  setByDeletingFromSet: uw,
  mapBySettingInMap: cw,
  mapByUpdatingInMap: fw,
  mapByDeletingFromMap: dw,
  mapByDeletingMultipleFromMap: pw,
};
function* hw(e, t) {
  let n = 0;
  for (const r of e) t(r, n++) && (yield r);
}
var Ac = hw;
function mw(e, t) {
  return new Proxy(e, {
    get: (r, o) => (!(o in r) && o in t && (r[o] = t[o]()), r[o]),
    ownKeys: (r) => Object.keys(r),
  });
}
var Bm = mw;
const { getNode: ui, getNodeMaybe: vw, recoilValuesForKeys: _d } = it,
  { RetentionZone: Rd } = ss,
  { setByAddingToSet: yw } = Fm,
  gw = Object.freeze(new Set());
class Sw extends Error {}
function ww(e, t, n) {
  if (!fe("recoil_memory_managament_2020")) return () => {};
  const { nodesRetainedByZone: r } = e.getState().retention;
  function o(i) {
    let l = r.get(i);
    l || r.set(i, (l = new Set())), l.add(t);
  }
  if (n instanceof Rd) o(n);
  else if (Array.isArray(n)) for (const i of n) o(i);
  return () => {
    if (!fe("recoil_memory_managament_2020")) return;
    const { retention: i } = e.getState();
    function l(s) {
      const a = i.nodesRetainedByZone.get(s);
      a == null || a.delete(t),
        a && a.size === 0 && i.nodesRetainedByZone.delete(s);
    }
    if (n instanceof Rd) l(n);
    else if (Array.isArray(n)) for (const s of n) l(s);
  };
}
function Pc(e, t, n, r) {
  const o = e.getState();
  if (o.nodeCleanupFunctions.has(n)) return;
  const i = ui(n),
    l = ww(e, n, i.retainedBy),
    s = i.init(e, t, r);
  o.nodeCleanupFunctions.set(n, () => {
    s(), l();
  });
}
function _w(e, t, n) {
  Pc(e, e.getState().currentTree, t, n);
}
function Rw(e, t) {
  var n;
  const r = e.getState();
  (n = r.nodeCleanupFunctions.get(t)) === null || n === void 0 || n(),
    r.nodeCleanupFunctions.delete(t);
}
function Ew(e, t, n) {
  return Pc(e, t, n, "get"), ui(n).get(e, t);
}
function Wm(e, t, n) {
  return ui(n).peek(e, t);
}
function xw(e, t, n) {
  var r;
  const o = vw(t);
  return (
    o == null || (r = o.invalidate) === null || r === void 0 || r.call(o, e),
    {
      ...e,
      atomValues: e.atomValues.clone().delete(t),
      nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
      dirtyAtoms: yw(e.dirtyAtoms, t),
    }
  );
}
function Nw(e, t, n, r) {
  const o = ui(n);
  if (o.set == null) throw new Sw(`Attempt to set read-only RecoilValue: ${n}`);
  const i = o.set;
  return Pc(e, t, n, "set"), i(e, t, r);
}
function kw(e, t, n) {
  const r = e.getState(),
    o = e.getGraph(t.version),
    i = ui(n).nodeType;
  return Bm(
    { type: i },
    {
      loadable: () => Wm(e, t, n),
      isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
      isSet: () => (i === "selector" ? !1 : t.atomValues.has(n)),
      isModified: () => t.dirtyAtoms.has(n),
      deps: () => {
        var l;
        return _d((l = o.nodeDeps.get(n)) !== null && l !== void 0 ? l : []);
      },
      subscribers: () => {
        var l, s;
        return {
          nodes: _d(Ac(Hm(e, t, new Set([n])), (a) => a !== n)),
          components: is(
            (l =
              (s = r.nodeToComponentSubscriptions.get(n)) === null ||
              s === void 0
                ? void 0
                : s.values()) !== null && l !== void 0
              ? l
              : [],
            ([a]) => ({ name: a })
          ),
        };
      },
    }
  );
}
function Hm(e, t, n) {
  const r = new Set(),
    o = Array.from(n),
    i = e.getGraph(t.version);
  for (let s = o.pop(); s; s = o.pop()) {
    var l;
    r.add(s);
    const a =
      (l = i.nodeToNodeSubscriptions.get(s)) !== null && l !== void 0 ? l : gw;
    for (const u of a) r.has(u) || o.push(u);
  }
  return r;
}
var Ln = {
  getNodeLoadable: Ew,
  peekNodeLoadable: Wm,
  setNodeValue: Nw,
  initializeNode: _w,
  cleanUpNode: Rw,
  setUnvalidatedAtomValue_DEPRECATED: xw,
  peekNodeInfo: kw,
  getDownstreamNodes: Hm,
};
let Gm = null;
function Cw(e) {
  Gm = e;
}
function Tw() {
  var e;
  (e = Gm) === null || e === void 0 || e();
}
var Km = { setInvalidateMemoizedSnapshot: Cw, invalidateMemoizedSnapshot: Tw };
const { getDownstreamNodes: Lw, getNodeLoadable: Qm, setNodeValue: $w } = Ln,
  { getNextComponentID: Aw } = ls,
  { getNode: Pw, getNodeMaybe: Ym } = it,
  { DefaultValue: Ic } = it,
  { reactMode: Iw } = si,
  {
    AbstractRecoilValue: Mw,
    RecoilState: bw,
    RecoilValueReadOnly: Dw,
    isRecoilValue: jw,
  } = Mr,
  { invalidateMemoizedSnapshot: Vw } = Km;
function Ow(e, { key: t }, n = e.getState().currentTree) {
  var r, o;
  const i = e.getState();
  n.version === i.currentTree.version ||
    n.version ===
      ((r = i.nextTree) === null || r === void 0 ? void 0 : r.version) ||
    (n.version, (o = i.previousTree) === null || o === void 0 || o.version);
  const l = Qm(e, n, t);
  return l.state === "loading" && l.contents.catch(() => {}), l;
}
function Uw(e, t) {
  const n = e.clone();
  return (
    t.forEach((r, o) => {
      r.state === "hasValue" && r.contents instanceof Ic
        ? n.delete(o)
        : n.set(o, r);
    }),
    n
  );
}
function zw(e, t, { key: n }, r) {
  if (typeof r == "function") {
    const o = Qm(e, t, n);
    if (o.state === "loading") {
      const i = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
      throw ee(i);
    } else if (o.state === "hasError") throw o.contents;
    return r(o.contents);
  } else return r;
}
function Fw(e, t, n) {
  if (n.type === "set") {
    const { recoilValue: o, valueOrUpdater: i } = n,
      l = zw(e, t, o, i),
      s = $w(e, t, o.key, l);
    for (const [a, u] of s.entries()) pu(t, a, u);
  } else if (n.type === "setLoadable") {
    const {
      recoilValue: { key: o },
      loadable: i,
    } = n;
    pu(t, o, i);
  } else if (n.type === "markModified") {
    const {
      recoilValue: { key: o },
    } = n;
    t.dirtyAtoms.add(o);
  } else if (n.type === "setUnvalidated") {
    var r;
    const {
        recoilValue: { key: o },
        unvalidatedValue: i,
      } = n,
      l = Ym(o);
    l == null || (r = l.invalidate) === null || r === void 0 || r.call(l, t),
      t.atomValues.delete(o),
      t.nonvalidatedAtoms.set(o, i),
      t.dirtyAtoms.add(o);
  } else kc(`Unknown action ${n.type}`);
}
function pu(e, t, n) {
  n.state === "hasValue" && n.contents instanceof Ic
    ? e.atomValues.delete(t)
    : e.atomValues.set(t, n),
    e.dirtyAtoms.add(t),
    e.nonvalidatedAtoms.delete(t);
}
function Xm(e, t) {
  e.replaceState((n) => {
    const r = Zm(n);
    for (const o of t) Fw(e, r, o);
    return qm(e, r), Vw(), r;
  });
}
function as(e, t) {
  if ($o.length) {
    const n = $o[$o.length - 1];
    let r = n.get(e);
    r || n.set(e, (r = [])), r.push(t);
  } else Xm(e, [t]);
}
const $o = [];
function Bw() {
  const e = new Map();
  return (
    $o.push(e),
    () => {
      for (const [t, n] of e) Xm(t, n);
      $o.pop();
    }
  );
}
function Zm(e) {
  return {
    ...e,
    atomValues: e.atomValues.clone(),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(e.dirtyAtoms),
  };
}
function qm(e, t) {
  const n = Lw(e, t, t.dirtyAtoms);
  for (const i of n) {
    var r, o;
    (r = Ym(i)) === null ||
      r === void 0 ||
      (o = r.invalidate) === null ||
      o === void 0 ||
      o.call(r, t);
  }
}
function Jm(e, t, n) {
  as(e, { type: "set", recoilValue: t, valueOrUpdater: n });
}
function Ww(e, t, n) {
  if (n instanceof Ic) return Jm(e, t, n);
  as(e, { type: "setLoadable", recoilValue: t, loadable: n });
}
function Hw(e, t) {
  as(e, { type: "markModified", recoilValue: t });
}
function Gw(e, t, n) {
  as(e, { type: "setUnvalidated", recoilValue: t, unvalidatedValue: n });
}
function Kw(e, { key: t }, n, r = null) {
  const o = Aw(),
    i = e.getState();
  i.nodeToComponentSubscriptions.has(t) ||
    i.nodeToComponentSubscriptions.set(t, new Map()),
    _e(i.nodeToComponentSubscriptions.get(t)).set(o, [
      r ?? "<not captured>",
      n,
    ]);
  const l = Iw();
  if (l.early && (l.mode === "LEGACY" || l.mode === "MUTABLE_SOURCE")) {
    const s = e.getState().nextTree;
    s && s.dirtyAtoms.has(t) && n(s);
  }
  return {
    release: () => {
      const s = e.getState(),
        a = s.nodeToComponentSubscriptions.get(t);
      a === void 0 ||
        !a.has(o) ||
        (a.delete(o), a.size === 0 && s.nodeToComponentSubscriptions.delete(t));
    },
  };
}
function Qw(e, t) {
  var n;
  const { currentTree: r } = e.getState(),
    o = Pw(t.key);
  (n = o.clearCache) === null || n === void 0 || n.call(o, e, r);
}
var Bt = {
  RecoilValueReadOnly: Dw,
  AbstractRecoilValue: Mw,
  RecoilState: bw,
  getRecoilValueAsLoadable: Ow,
  setRecoilValue: Jm,
  setRecoilValueLoadable: Ww,
  markRecoilValueModified: Hw,
  setUnvalidatedRecoilValue: Gw,
  subscribeToRecoilValue: Kw,
  isRecoilValue: jw,
  applyAtomValueWrites: Uw,
  batchStart: Bw,
  writeLoadableToTreeState: pu,
  invalidateDownstreams: qm,
  copyTreeState: Zm,
  refreshRecoilValue: Qw,
};
function Yw(e, t, n) {
  const r = e.entries();
  let o = r.next();
  for (; !o.done; ) {
    const i = o.value;
    if (t.call(n, i[1], i[0], e)) return !0;
    o = r.next();
  }
  return !1;
}
var Xw = Yw;
const { cleanUpNode: Zw } = Ln,
  { deleteNodeConfigIfPossible: qw, getNode: ev } = it,
  { RetentionZone: tv } = ss,
  Jw = 12e4,
  nv = new Set();
function rv(e, t) {
  const n = e.getState(),
    r = n.currentTree;
  if (n.nextTree) return;
  const o = new Set();
  for (const l of t)
    if (l instanceof tv) for (const s of r_(n, l)) o.add(s);
    else o.add(l);
  const i = e_(e, o);
  for (const l of i) n_(e, r, l);
}
function e_(e, t) {
  const n = e.getState(),
    r = n.currentTree,
    o = e.getGraph(r.version),
    i = new Set(),
    l = new Set();
  return s(t), i;
  function s(a) {
    const u = new Set(),
      d = t_(e, r, a, i, l);
    for (const v of d) {
      var f;
      if (ev(v).retainedBy === "recoilRoot") {
        l.add(v);
        continue;
      }
      if (
        ((f = n.retention.referenceCounts.get(v)) !== null && f !== void 0
          ? f
          : 0) > 0
      ) {
        l.add(v);
        continue;
      }
      if (ov(v).some((x) => n.retention.referenceCounts.get(x))) {
        l.add(v);
        continue;
      }
      const g = o.nodeToNodeSubscriptions.get(v);
      if (g && Xw(g, (x) => l.has(x))) {
        l.add(v);
        continue;
      }
      i.add(v), u.add(v);
    }
    const m = new Set();
    for (const v of u)
      for (const g of (y = o.nodeDeps.get(v)) !== null && y !== void 0
        ? y
        : nv) {
        var y;
        i.has(g) || m.add(g);
      }
    m.size && s(m);
  }
}
function t_(e, t, n, r, o) {
  const i = e.getGraph(t.version),
    l = [],
    s = new Set();
  for (; n.size > 0; ) a(_e(n.values().next().value));
  return l;
  function a(u) {
    if (r.has(u) || o.has(u)) {
      n.delete(u);
      return;
    }
    if (s.has(u)) return;
    const d = i.nodeToNodeSubscriptions.get(u);
    if (d) for (const f of d) a(f);
    s.add(u), n.delete(u), l.push(u);
  }
}
function n_(e, t, n) {
  if (!fe("recoil_memory_managament_2020")) return;
  Zw(e, n);
  const r = e.getState();
  r.knownAtoms.delete(n),
    r.knownSelectors.delete(n),
    r.nodeTransactionSubscriptions.delete(n),
    r.retention.referenceCounts.delete(n);
  const o = ov(n);
  for (const a of o) {
    var i;
    (i = r.retention.nodesRetainedByZone.get(a)) === null ||
      i === void 0 ||
      i.delete(n);
  }
  t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
  const l = r.graphsByVersion.get(t.version);
  if (l) {
    const a = l.nodeDeps.get(n);
    if (a !== void 0) {
      l.nodeDeps.delete(n);
      for (const u of a) {
        var s;
        (s = l.nodeToNodeSubscriptions.get(u)) === null ||
          s === void 0 ||
          s.delete(n);
      }
    }
    l.nodeToNodeSubscriptions.delete(n);
  }
  qw(n);
}
function r_(e, t) {
  var n;
  return (n = e.retention.nodesRetainedByZone.get(t)) !== null && n !== void 0
    ? n
    : nv;
}
function ov(e) {
  const t = ev(e).retainedBy;
  return t === void 0 || t === "components" || t === "recoilRoot"
    ? []
    : t instanceof tv
    ? [t]
    : t;
}
function o_(e, t) {
  const n = e.getState();
  n.nextTree
    ? n.retention.retainablesToCheckForRelease.add(t)
    : rv(e, new Set([t]));
}
function i_(e, t, n) {
  var r;
  if (!fe("recoil_memory_managament_2020")) return;
  const o = e.getState().retention.referenceCounts,
    i = ((r = o.get(t)) !== null && r !== void 0 ? r : 0) + n;
  i === 0 ? iv(e, t) : o.set(t, i);
}
function iv(e, t) {
  if (!fe("recoil_memory_managament_2020")) return;
  e.getState().retention.referenceCounts.delete(t), o_(e, t);
}
function l_(e) {
  if (!fe("recoil_memory_managament_2020")) return;
  const t = e.getState();
  rv(e, t.retention.retainablesToCheckForRelease),
    t.retention.retainablesToCheckForRelease.clear();
}
function s_(e) {
  return e === void 0 ? "recoilRoot" : e;
}
var er = {
  SUSPENSE_TIMEOUT_MS: Jw,
  updateRetainCount: i_,
  updateRetainCountToZero: iv,
  releaseScheduledRetainablesNow: l_,
  retainedByOptionWithDefault: s_,
};
const { unstable_batchedUpdates: a_ } = r1;
var u_ = { unstable_batchedUpdates: a_ };
const { unstable_batchedUpdates: c_ } = u_;
var f_ = { unstable_batchedUpdates: c_ };
const { batchStart: d_ } = Bt,
  { unstable_batchedUpdates: p_ } = f_;
let Mc = p_ || ((e) => e());
const h_ = (e) => {
    Mc = e;
  },
  m_ = () => Mc,
  v_ = (e) => {
    Mc(() => {
      let t = () => {};
      try {
        (t = d_()), e();
      } finally {
        t();
      }
    });
  };
var us = { getBatcher: m_, setBatcher: h_, batchUpdates: v_ };
function* y_(e) {
  for (const t of e) for (const n of t) yield n;
}
var lv = y_;
const sv = typeof Window > "u" || typeof window > "u",
  g_ = (e) => !sv && (e === window || e instanceof Window),
  S_ = typeof navigator < "u" && navigator.product === "ReactNative";
var cs = { isSSR: sv, isReactNative: S_, isWindow: g_ };
function w_(e, t) {
  let n;
  return (...r) => {
    n || (n = {});
    const o = t(...r);
    return Object.hasOwnProperty.call(n, o) || (n[o] = e(...r)), n[o];
  };
}
function __(e, t) {
  let n, r;
  return (...o) => {
    const i = t(...o);
    return n === i || ((n = i), (r = e(...o))), r;
  };
}
function R_(e, t) {
  let n, r;
  return [
    (...l) => {
      const s = t(...l);
      return n === s || ((n = s), (r = e(...l))), r;
    },
    () => {
      n = null;
    },
  ];
}
var E_ = {
  memoizeWithArgsHash: w_,
  memoizeOneWithArgsHash: __,
  memoizeOneWithArgsHashAndInvalidation: R_,
};
const { batchUpdates: hu } = us,
  { initializeNode: x_, peekNodeInfo: N_ } = Ln,
  { graph: k_ } = ai,
  { getNextStoreID: C_ } = ls,
  { DEFAULT_VALUE: T_, recoilValues: Ed, recoilValuesForKeys: xd } = it,
  {
    AbstractRecoilValue: L_,
    getRecoilValueAsLoadable: $_,
    setRecoilValue: Nd,
    setUnvalidatedRecoilValue: A_,
  } = Bt,
  { updateRetainCount: Ji } = er,
  { setInvalidateMemoizedSnapshot: P_ } = Km,
  { getNextTreeStateVersion: I_, makeEmptyStoreState: M_ } = Um,
  { isSSR: b_ } = cs,
  { memoizeOneWithArgsHashAndInvalidation: D_ } = E_;
class fs {
  constructor(t, n) {
    q(this, "_store", void 0),
      q(this, "_refCount", 1),
      q(
        this,
        "getLoadable",
        (r) => (this.checkRefCount_INTERNAL(), $_(this._store, r))
      ),
      q(
        this,
        "getPromise",
        (r) => (this.checkRefCount_INTERNAL(), this.getLoadable(r).toPromise())
      ),
      q(this, "getNodes_UNSTABLE", (r) => {
        if (
          (this.checkRefCount_INTERNAL(),
          (r == null ? void 0 : r.isModified) === !0)
        ) {
          if ((r == null ? void 0 : r.isInitialized) === !1) return [];
          const l = this._store.getState().currentTree;
          return xd(l.dirtyAtoms);
        }
        const o = this._store.getState().knownAtoms,
          i = this._store.getState().knownSelectors;
        return (r == null ? void 0 : r.isInitialized) == null
          ? Ed.values()
          : r.isInitialized === !0
          ? xd(lv([o, i]))
          : Ac(Ed.values(), ({ key: l }) => !o.has(l) && !i.has(l));
      }),
      q(
        this,
        "getInfo_UNSTABLE",
        ({ key: r }) => (
          this.checkRefCount_INTERNAL(),
          N_(this._store, this._store.getState().currentTree, r)
        )
      ),
      q(this, "map", (r) => {
        this.checkRefCount_INTERNAL();
        const o = new mu(this, hu);
        return r(o), o;
      }),
      q(this, "asyncMap", async (r) => {
        this.checkRefCount_INTERNAL();
        const o = new mu(this, hu);
        return o.retain(), await r(o), o.autoRelease_INTERNAL(), o;
      }),
      (this._store = {
        storeID: C_(),
        parentStoreID: n,
        getState: () => t,
        replaceState: (r) => {
          t.currentTree = r(t.currentTree);
        },
        getGraph: (r) => {
          const o = t.graphsByVersion;
          if (o.has(r)) return _e(o.get(r));
          const i = k_();
          return o.set(r, i), i;
        },
        subscribeToTransactions: () => ({ release: () => {} }),
        addTransactionMetadata: () => {
          throw ee("Cannot subscribe to Snapshots");
        },
      });
    for (const r of this._store.getState().knownAtoms)
      x_(this._store, r, "get"), Ji(this._store, r, 1);
    this.autoRelease_INTERNAL();
  }
  retain() {
    this._refCount <= 0, this._refCount++;
    let t = !1;
    return () => {
      t || ((t = !0), this._release());
    };
  }
  autoRelease_INTERNAL() {
    b_ || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if ((this._refCount--, this._refCount === 0)) {
      if (
        (this._store.getState().nodeCleanupFunctions.forEach((t) => t()),
        this._store.getState().nodeCleanupFunctions.clear(),
        !fe("recoil_memory_managament_2020"))
      )
        return;
    } else this._refCount < 0;
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    fe("recoil_memory_managament_2020") && this._refCount <= 0;
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store;
  }
  getID() {
    return (
      this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID
    );
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID;
  }
}
function av(e, t, n = !1) {
  const r = e.getState(),
    o = n ? I_() : t.version;
  return {
    currentTree: {
      version: n ? o : t.version,
      stateID: n ? o : t.stateID,
      transactionMetadata: { ...t.transactionMetadata },
      dirtyAtoms: new Set(t.dirtyAtoms),
      atomValues: t.atomValues.clone(),
      nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(r.knownAtoms),
    knownSelectors: new Set(r.knownSelectors),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(o, e.getGraph(t.version)),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set(),
    },
    nodeCleanupFunctions: new Map(
      is(r.nodeCleanupFunctions.entries(), ([i]) => [i, () => {}])
    ),
  };
}
function j_(e) {
  const t = new fs(M_());
  return e != null ? t.map(e) : t;
}
const [kd, uv] = D_(
  (e, t) => {
    var n;
    const r = e.getState(),
      o =
        t === "latest"
          ? (n = r.nextTree) !== null && n !== void 0
            ? n
            : r.currentTree
          : _e(r.previousTree);
    return new fs(av(e, o), e.storeID);
  },
  (e, t) => {
    var n, r;
    return (
      String(t) +
      String(e.storeID) +
      String(
        (n = e.getState().nextTree) === null || n === void 0
          ? void 0
          : n.version
      ) +
      String(e.getState().currentTree.version) +
      String(
        (r = e.getState().previousTree) === null || r === void 0
          ? void 0
          : r.version
      )
    );
  }
);
P_(uv);
function V_(e, t = "latest") {
  const n = kd(e, t);
  return n.isRetained() ? n : (uv(), kd(e, t));
}
class mu extends fs {
  constructor(t, n) {
    super(
      av(
        t.getStore_INTERNAL(),
        t.getStore_INTERNAL().getState().currentTree,
        !0
      ),
      t.getStoreID()
    ),
      q(this, "_batch", void 0),
      q(this, "set", (r, o) => {
        this.checkRefCount_INTERNAL();
        const i = this.getStore_INTERNAL();
        this._batch(() => {
          Ji(i, r.key, 1), Nd(this.getStore_INTERNAL(), r, o);
        });
      }),
      q(this, "reset", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        this._batch(() => {
          Ji(o, r.key, 1), Nd(this.getStore_INTERNAL(), r, T_);
        });
      }),
      q(this, "setUnvalidatedAtomValues_DEPRECATED", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        hu(() => {
          for (const [i, l] of r.entries()) Ji(o, i, 1), A_(o, new L_(i), l);
        });
      }),
      (this._batch = n);
  }
}
var ds = {
    Snapshot: fs,
    MutableSnapshot: mu,
    freshSnapshot: j_,
    cloneSnapshot: V_,
  },
  O_ = ds.Snapshot,
  U_ = ds.MutableSnapshot,
  z_ = ds.freshSnapshot,
  F_ = ds.cloneSnapshot,
  ps = Object.freeze({
    __proto__: null,
    Snapshot: O_,
    MutableSnapshot: U_,
    freshSnapshot: z_,
    cloneSnapshot: F_,
  });
function B_(...e) {
  const t = new Set();
  for (const n of e) for (const r of n) t.add(r);
  return t;
}
var W_ = B_;
const { useRef: H_ } = se;
function G_(e) {
  const t = H_(e);
  return t.current === e && typeof e == "function" && (t.current = e()), t;
}
var Cd = G_;
const { getNextTreeStateVersion: K_, makeEmptyStoreState: cv } = Um,
  {
    cleanUpNode: Q_,
    getDownstreamNodes: Y_,
    initializeNode: X_,
    setNodeValue: Z_,
    setUnvalidatedAtomValue_DEPRECATED: q_,
  } = Ln,
  { graph: J_ } = ai,
  { cloneGraph: eR } = ai,
  { getNextStoreID: fv } = ls,
  { createMutableSource: aa, reactMode: dv } = si,
  { applyAtomValueWrites: tR } = Bt,
  { releaseScheduledRetainablesNow: pv } = er,
  { freshSnapshot: nR } = ps,
  {
    useCallback: rR,
    useContext: hv,
    useEffect: vu,
    useMemo: oR,
    useRef: iR,
    useState: lR,
  } = se;
function ao() {
  throw ee("This component must be used inside a <RecoilRoot> component.");
}
const mv = Object.freeze({
  storeID: fv(),
  getState: ao,
  replaceState: ao,
  getGraph: ao,
  subscribeToTransactions: ao,
  addTransactionMetadata: ao,
});
let yu = !1;
function Td(e) {
  if (yu)
    throw ee(
      "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
    );
  const t = e.getState();
  if (t.nextTree === null) {
    fe("recoil_memory_managament_2020") &&
      fe("recoil_release_on_cascading_update_killswitch_2021") &&
      t.commitDepth > 0 &&
      pv(e);
    const n = t.currentTree.version,
      r = K_();
    (t.nextTree = {
      ...t.currentTree,
      version: r,
      stateID: r,
      dirtyAtoms: new Set(),
      transactionMetadata: {},
    }),
      t.graphsByVersion.set(r, eR(_e(t.graphsByVersion.get(n))));
  }
}
const vv = se.createContext({ current: mv }),
  hs = () => hv(vv),
  yv = se.createContext(null);
function sR() {
  return hv(yv);
}
function bc(e, t, n) {
  const r = Y_(e, n, n.dirtyAtoms);
  for (const o of r) {
    const i = t.nodeToComponentSubscriptions.get(o);
    if (i) for (const [l, [s, a]] of i) a(n);
  }
}
function gv(e) {
  const t = e.getState(),
    n = t.currentTree,
    r = n.dirtyAtoms;
  if (r.size) {
    for (const [o, i] of t.nodeTransactionSubscriptions)
      if (r.has(o)) for (const [l, s] of i) s(e);
    for (const [o, i] of t.transactionSubscriptions) i(e);
    (!dv().early || t.suspendedComponentResolvers.size > 0) &&
      (bc(e, t, n),
      t.suspendedComponentResolvers.forEach((o) => o()),
      t.suspendedComponentResolvers.clear());
  }
  t.queuedComponentCallbacks_DEPRECATED.forEach((o) => o(n)),
    t.queuedComponentCallbacks_DEPRECATED.splice(
      0,
      t.queuedComponentCallbacks_DEPRECATED.length
    );
}
function aR(e) {
  const t = e.getState();
  t.commitDepth++;
  try {
    const { nextTree: n } = t;
    if (n == null) return;
    (t.previousTree = t.currentTree),
      (t.currentTree = n),
      (t.nextTree = null),
      gv(e),
      t.previousTree != null
        ? t.graphsByVersion.delete(t.previousTree.version)
        : kc(
            "Ended batch with no previous state, which is unexpected",
            "recoil"
          ),
      (t.previousTree = null),
      fe("recoil_memory_managament_2020") && n == null && pv(e);
  } finally {
    t.commitDepth--;
  }
}
function uR({ setNotifyBatcherOfChange: e }) {
  const t = hs(),
    [, n] = lR([]);
  return (
    e(() => n({})),
    vu(
      () => (
        e(() => n({})),
        () => {
          e(() => {});
        }
      ),
      [e]
    ),
    vu(() => {
      zS.enqueueExecution("Batcher", () => {
        aR(t.current);
      });
    }),
    null
  );
}
function cR(e, t) {
  const n = cv();
  return (
    t({
      set: (r, o) => {
        const i = n.currentTree,
          l = Z_(e, i, r.key, o),
          s = new Set(l.keys()),
          a = i.nonvalidatedAtoms.clone();
        for (const u of s) a.delete(u);
        n.currentTree = {
          ...i,
          dirtyAtoms: W_(i.dirtyAtoms, s),
          atomValues: tR(i.atomValues, l),
          nonvalidatedAtoms: a,
        };
      },
      setUnvalidatedAtomValues: (r) => {
        r.forEach((o, i) => {
          n.currentTree = q_(n.currentTree, i, o);
        });
      },
    }),
    n
  );
}
function fR(e) {
  const t = nR(e),
    n = t.getStore_INTERNAL().getState();
  return (
    t.retain(),
    n.nodeCleanupFunctions.forEach((r) => r()),
    n.nodeCleanupFunctions.clear(),
    n
  );
}
let Ld = 0;
function dR({
  initializeState_DEPRECATED: e,
  initializeState: t,
  store_INTERNAL: n,
  children: r,
}) {
  let o;
  const i = (y) => {
      const v = o.current.graphsByVersion;
      if (v.has(y)) return _e(v.get(y));
      const g = J_();
      return v.set(y, g), g;
    },
    l = (y, v) => {
      if (v == null) {
        const { transactionSubscriptions: g } = f.current.getState(),
          x = Ld++;
        return (
          g.set(x, y),
          {
            release: () => {
              g.delete(x);
            },
          }
        );
      } else {
        const { nodeTransactionSubscriptions: g } = f.current.getState();
        g.has(v) || g.set(v, new Map());
        const x = Ld++;
        return (
          _e(g.get(v)).set(x, y),
          {
            release: () => {
              const p = g.get(v);
              p && (p.delete(x), p.size === 0 && g.delete(v));
            },
          }
        );
      }
    },
    s = (y) => {
      Td(f.current);
      for (const v of Object.keys(y))
        _e(f.current.getState().nextTree).transactionMetadata[v] = y[v];
    },
    a = (y) => {
      Td(f.current);
      const v = _e(o.current.nextTree);
      let g;
      try {
        (yu = !0), (g = y(v));
      } finally {
        yu = !1;
      }
      g !== v &&
        ((o.current.nextTree = g),
        dv().early && bc(f.current, o.current, g),
        _e(u.current)());
    },
    u = iR(null),
    d = rR(
      (y) => {
        u.current = y;
      },
      [u]
    ),
    f = Cd(
      () =>
        n ?? {
          storeID: fv(),
          getState: () => o.current,
          replaceState: a,
          getGraph: i,
          subscribeToTransactions: l,
          addTransactionMetadata: s,
        }
    );
  n != null && (f.current = n),
    (o = Cd(() => (e != null ? cR(f.current, e) : t != null ? fR(t) : cv())));
  const m = oR(
    () => (aa == null ? void 0 : aa(o, () => o.current.currentTree.version)),
    [o]
  );
  return (
    vu(() => {
      const y = f.current;
      for (const v of new Set(y.getState().knownAtoms)) X_(y, v, "get");
      return () => {
        for (const v of y.getState().knownAtoms) Q_(y, v);
      };
    }, [f]),
    se.createElement(
      vv.Provider,
      { value: f },
      se.createElement(
        yv.Provider,
        { value: m },
        se.createElement(uR, { setNotifyBatcherOfChange: d }),
        r
      )
    )
  );
}
function pR(e) {
  const { override: t, ...n } = e,
    r = hs();
  return t === !1 && r.current !== mv ? e.children : se.createElement(dR, n);
}
function hR() {
  return hs().current.storeID;
}
var nn = {
  RecoilRoot: pR,
  useStoreRef: hs,
  useRecoilMutableSource: sR,
  useRecoilStoreID: hR,
  notifyComponents_FOR_TESTING: bc,
  sendEndOfBatchNotifications_FOR_TESTING: gv,
};
function mR(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var vR = mR;
const { useEffect: yR, useRef: gR } = se;
function SR(e) {
  const t = gR();
  return (
    yR(() => {
      t.current = e;
    }),
    t.current
  );
}
var Sv = SR;
const { useStoreRef: wR } = nn,
  { SUSPENSE_TIMEOUT_MS: _R } = er,
  { updateRetainCount: uo } = er,
  { RetentionZone: RR } = ss,
  { useEffect: ER, useRef: xR } = se,
  { isSSR: $d } = cs;
function NR(e) {
  if (fe("recoil_memory_managament_2020")) return kR(e);
}
function kR(e) {
  const n = (Array.isArray(e) ? e : [e]).map((l) =>
      l instanceof RR ? l : l.key
    ),
    r = wR();
  ER(() => {
    if (!fe("recoil_memory_managament_2020")) return;
    const l = r.current;
    if (o.current && !$d) window.clearTimeout(o.current), (o.current = null);
    else for (const s of n) uo(l, s, 1);
    return () => {
      for (const s of n) uo(l, s, -1);
    };
  }, [r, ...n]);
  const o = xR(),
    i = Sv(n);
  if (!$d && (i === void 0 || !vR(i, n))) {
    const l = r.current;
    for (const s of n) uo(l, s, 1);
    if (i) for (const s of i) uo(l, s, -1);
    o.current && window.clearTimeout(o.current),
      (o.current = window.setTimeout(() => {
        o.current = null;
        for (const s of n) uo(l, s, -1);
      }, _R));
  }
}
var Dc = NR;
function CR() {
  return "<component name not available>";
}
var ci = CR;
const { batchUpdates: TR } = us,
  { DEFAULT_VALUE: wv } = it,
  {
    currentRendererSupportsUseSyncExternalStore: LR,
    reactMode: Xr,
    useMutableSource: $R,
    useSyncExternalStore: AR,
  } = si,
  { useRecoilMutableSource: PR, useStoreRef: Wt } = nn,
  {
    AbstractRecoilValue: gu,
    getRecoilValueAsLoadable: fi,
    setRecoilValue: Pl,
    setUnvalidatedRecoilValue: IR,
    subscribeToRecoilValue: br,
  } = Bt,
  {
    useCallback: ot,
    useEffect: Dr,
    useMemo: _v,
    useRef: Ao,
    useState: jc,
  } = se,
  { setByAddingToSet: MR } = Fm,
  { isSSR: bR } = cs;
function Vc(e, t, n) {
  if (e.state === "hasValue") return e.contents;
  throw e.state === "loading"
    ? new Promise((o) => {
        const i = n.current.getState().suspendedComponentResolvers;
        i.add(o),
          bR &&
            me(e.contents) &&
            e.contents.finally(() => {
              i.delete(o);
            });
      })
    : e.state === "hasError"
    ? e.contents
    : ee(`Invalid value of loadable atom "${t.key}"`);
}
function DR() {
  const e = ci(),
    t = Wt(),
    [, n] = jc([]),
    r = Ao(new Set());
  r.current = new Set();
  const o = Ao(new Set()),
    i = Ao(new Map()),
    l = ot(
      (a) => {
        const u = i.current.get(a);
        u && (u.release(), i.current.delete(a));
      },
      [i]
    ),
    s = ot((a, u) => {
      i.current.has(u) && n([]);
    }, []);
  return (
    Dr(() => {
      const a = t.current;
      Lo(r.current, o.current).forEach((u) => {
        if (i.current.has(u)) return;
        const d = br(a, new gu(u), (m) => s(m, u), e);
        i.current.set(u, d),
          a.getState().nextTree
            ? a.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                s(a.getState(), u);
              })
            : s(a.getState(), u);
      }),
        Lo(o.current, r.current).forEach((u) => {
          l(u);
        }),
        (o.current = r.current);
    }),
    Dr(() => {
      const a = i.current;
      return (
        Lo(r.current, new Set(a.keys())).forEach((u) => {
          const d = br(t.current, new gu(u), (f) => s(f, u), e);
          a.set(u, d);
        }),
        () => a.forEach((u, d) => l(d))
      );
    }, [e, t, l, s]),
    _v(() => {
      function a(v) {
        return (g) => {
          Pl(t.current, v, g);
        };
      }
      function u(v) {
        return () => Pl(t.current, v, wv);
      }
      function d(v) {
        var g;
        r.current.has(v.key) || (r.current = MR(r.current, v.key));
        const x = t.current.getState();
        return fi(
          t.current,
          v,
          Xr().early && (g = x.nextTree) !== null && g !== void 0
            ? g
            : x.currentTree
        );
      }
      function f(v) {
        const g = d(v);
        return Vc(g, v, t);
      }
      function m(v) {
        return [f(v), a(v)];
      }
      function y(v) {
        return [d(v), a(v)];
      }
      return {
        getRecoilValue: f,
        getRecoilValueLoadable: d,
        getRecoilState: m,
        getRecoilStateLoadable: y,
        getSetRecoilState: a,
        getResetRecoilState: u,
      };
    }, [r, t])
  );
}
const jR = { current: 0 };
function VR(e) {
  const t = Wt(),
    n = ci(),
    r = ot(() => {
      var s;
      const a = t.current,
        u = a.getState(),
        d =
          Xr().early && (s = u.nextTree) !== null && s !== void 0
            ? s
            : u.currentTree;
      return { loadable: fi(a, e, d), key: e.key };
    }, [t, e]),
    o = ot((s) => {
      let a;
      return () => {
        var u, d;
        const f = s();
        return (u = a) !== null &&
          u !== void 0 &&
          u.loadable.is(f.loadable) &&
          ((d = a) === null || d === void 0 ? void 0 : d.key) === f.key
          ? a
          : ((a = f), f);
      };
    }, []),
    i = _v(() => o(r), [r, o]),
    l = ot(
      (s) => {
        const a = t.current;
        return br(a, e, s, n).release;
      },
      [t, e, n]
    );
  return AR(l, i, i).loadable;
}
function OR(e) {
  const t = Wt(),
    n = ot(() => {
      var u;
      const d = t.current,
        f = d.getState(),
        m =
          Xr().early && (u = f.nextTree) !== null && u !== void 0
            ? u
            : f.currentTree;
      return fi(d, e, m);
    }, [t, e]),
    r = ot(() => n(), [n]),
    o = ci(),
    i = ot(
      (u, d) => {
        const f = t.current;
        return br(
          f,
          e,
          () => {
            if (!fe("recoil_suppress_rerender_in_callback")) return d();
            const y = n();
            a.current.is(y) || d(), (a.current = y);
          },
          o
        ).release;
      },
      [t, e, o, n]
    ),
    l = PR();
  if (l == null)
    throw ee(
      "Recoil hooks must be used in components contained within a <RecoilRoot> component."
    );
  const s = $R(l, r, i),
    a = Ao(s);
  return (
    Dr(() => {
      a.current = s;
    }),
    s
  );
}
function Su(e) {
  const t = Wt(),
    n = ci(),
    r = ot(() => {
      var a;
      const u = t.current,
        d = u.getState(),
        f =
          Xr().early && (a = d.nextTree) !== null && a !== void 0
            ? a
            : d.currentTree;
      return fi(u, e, f);
    }, [t, e]),
    o = ot(() => ({ loadable: r(), key: e.key }), [r, e.key]),
    i = ot(
      (a) => {
        const u = o();
        return a.loadable.is(u.loadable) && a.key === u.key ? a : u;
      },
      [o]
    );
  Dr(() => {
    const a = br(
      t.current,
      e,
      (u) => {
        s(i);
      },
      n
    );
    return s(i), a.release;
  }, [n, e, t, i]);
  const [l, s] = jc(o);
  return l.key !== e.key ? o().loadable : l.loadable;
}
function UR(e) {
  const t = Wt(),
    [, n] = jc([]),
    r = ci(),
    o = ot(() => {
      var s;
      const a = t.current,
        u = a.getState(),
        d =
          Xr().early && (s = u.nextTree) !== null && s !== void 0
            ? s
            : u.currentTree;
      return fi(a, e, d);
    }, [t, e]),
    i = o(),
    l = Ao(i);
  return (
    Dr(() => {
      l.current = i;
    }),
    Dr(() => {
      const s = t.current,
        a = s.getState(),
        u = br(
          s,
          e,
          (f) => {
            var m;
            if (!fe("recoil_suppress_rerender_in_callback")) return n([]);
            const y = o();
            ((m = l.current) !== null && m !== void 0 && m.is(y)) || n(y),
              (l.current = y);
          },
          r
        );
      if (a.nextTree)
        s.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          (l.current = null), n([]);
        });
      else {
        var d;
        if (!fe("recoil_suppress_rerender_in_callback")) return n([]);
        const f = o();
        ((d = l.current) !== null && d !== void 0 && d.is(f)) || n(f),
          (l.current = f);
      }
      return u.release;
    }, [r, o, e, t]),
    i
  );
}
function Oc(e) {
  return (
    fe("recoil_memory_managament_2020") && Dc(e),
    {
      TRANSITION_SUPPORT: Su,
      SYNC_EXTERNAL_STORE: LR() ? VR : Su,
      MUTABLE_SOURCE: OR,
      LEGACY: UR,
    }[Xr().mode](e)
  );
}
function Rv(e) {
  const t = Wt(),
    n = Oc(e);
  return Vc(n, e, t);
}
function ms(e) {
  const t = Wt();
  return ot(
    (n) => {
      Pl(t.current, e, n);
    },
    [t, e]
  );
}
function zR(e) {
  const t = Wt();
  return ot(() => {
    Pl(t.current, e, wv);
  }, [t, e]);
}
function FR(e) {
  return [Rv(e), ms(e)];
}
function BR(e) {
  return [Oc(e), ms(e)];
}
function WR() {
  const e = Wt();
  return (t, n = {}) => {
    TR(() => {
      e.current.addTransactionMetadata(n),
        t.forEach((r, o) => IR(e.current, new gu(o), r));
    });
  };
}
function Ev(e) {
  return fe("recoil_memory_managament_2020") && Dc(e), Su(e);
}
function xv(e) {
  const t = Wt(),
    n = Ev(e);
  return Vc(n, e, t);
}
function HR(e) {
  return [xv(e), ms(e)];
}
var GR = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: jR,
  useRecoilInterface: DR,
  useRecoilState: FR,
  useRecoilStateLoadable: BR,
  useRecoilValue: Rv,
  useRecoilValueLoadable: Oc,
  useResetRecoilState: zR,
  useSetRecoilState: ms,
  useSetUnvalidatedAtomValues: WR,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Ev,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: xv,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: HR,
};
function KR(e, t) {
  const n = new Map();
  for (const [r, o] of e) t(o, r) && n.set(r, o);
  return n;
}
var QR = KR;
function YR(e, t) {
  const n = new Set();
  for (const r of e) t(r) && n.add(r);
  return n;
}
var XR = YR;
function ZR(...e) {
  const t = new Map();
  for (let n = 0; n < e.length; n++) {
    const r = e[n].keys();
    let o;
    for (; !(o = r.next()).done; ) t.set(o.value, e[n].get(o.value));
  }
  return t;
}
var qR = ZR;
const { batchUpdates: JR } = us,
  { DEFAULT_VALUE: eE, getNode: Nv, nodes: tE } = it,
  { useStoreRef: Uc } = nn,
  { AbstractRecoilValue: nE, setRecoilValueLoadable: rE } = Bt,
  { SUSPENSE_TIMEOUT_MS: oE } = er,
  { cloneSnapshot: Il } = ps,
  { useCallback: vs, useEffect: kv, useRef: Ad, useState: iE } = se,
  { isSSR: Pd } = cs;
function ys(e) {
  const t = Uc();
  kv(() => t.current.subscribeToTransactions(e).release, [e, t]);
}
function Id(e) {
  const t = e.atomValues.toMap(),
    n = Al(
      QR(t, (r, o) => {
        const l = Nv(o).persistence_UNSTABLE;
        return l != null && l.type !== "none" && r.state === "hasValue";
      }),
      (r) => r.contents
    );
  return qR(e.nonvalidatedAtoms.toMap(), n);
}
function lE(e) {
  ys(
    vs(
      (t) => {
        let n = t.getState().previousTree;
        const r = t.getState().currentTree;
        n || (n = t.getState().currentTree);
        const o = Id(r),
          i = Id(n),
          l = Al(tE, (a) => {
            var u, d, f, m;
            return {
              persistence_UNSTABLE: {
                type:
                  (u =
                    (d = a.persistence_UNSTABLE) === null || d === void 0
                      ? void 0
                      : d.type) !== null && u !== void 0
                    ? u
                    : "none",
                backButton:
                  (f =
                    (m = a.persistence_UNSTABLE) === null || m === void 0
                      ? void 0
                      : m.backButton) !== null && f !== void 0
                    ? f
                    : !1,
              },
            };
          }),
          s = XR(r.dirtyAtoms, (a) => o.has(a) || i.has(a));
        e({
          atomValues: o,
          previousAtomValues: i,
          atomInfo: l,
          modifiedAtoms: s,
          transactionMetadata: { ...r.transactionMetadata },
        });
      },
      [e]
    )
  );
}
function sE(e) {
  ys(
    vs(
      (t) => {
        const n = Il(t, "latest"),
          r = Il(t, "previous");
        e({ snapshot: n, previousSnapshot: r });
      },
      [e]
    )
  );
}
function aE() {
  const e = Uc(),
    [t, n] = iE(() => Il(e.current)),
    r = Sv(t),
    o = Ad(),
    i = Ad();
  if (
    (ys(vs((s) => n(Il(s)), [])),
    kv(() => {
      const s = t.retain();
      if (o.current && !Pd) {
        var a;
        window.clearTimeout(o.current),
          (o.current = null),
          (a = i.current) === null || a === void 0 || a.call(i),
          (i.current = null);
      }
      return () => {
        window.setTimeout(s, 10);
      };
    }, [t]),
    r !== t && !Pd)
  ) {
    if (o.current) {
      var l;
      window.clearTimeout(o.current),
        (o.current = null),
        (l = i.current) === null || l === void 0 || l.call(i),
        (i.current = null);
    }
    (i.current = t.retain()),
      (o.current = window.setTimeout(() => {
        var s;
        (o.current = null),
          (s = i.current) === null || s === void 0 || s.call(i),
          (i.current = null);
      }, oE));
  }
  return t;
}
function Cv(e, t) {
  var n;
  const r = e.getState(),
    o = (n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree,
    i = t.getStore_INTERNAL().getState().currentTree;
  JR(() => {
    const l = new Set();
    for (const u of [o.atomValues.keys(), i.atomValues.keys()])
      for (const d of u) {
        var s, a;
        ((s = o.atomValues.get(d)) === null || s === void 0
          ? void 0
          : s.contents) !==
          ((a = i.atomValues.get(d)) === null || a === void 0
            ? void 0
            : a.contents) &&
          Nv(d).shouldRestoreFromSnapshots &&
          l.add(d);
      }
    l.forEach((u) => {
      rE(e, new nE(u), i.atomValues.has(u) ? _e(i.atomValues.get(u)) : eE);
    }),
      e.replaceState((u) => ({ ...u, stateID: t.getID() }));
  });
}
function uE() {
  const e = Uc();
  return vs((t) => Cv(e.current, t), [e]);
}
var Tv = {
  useRecoilSnapshot: aE,
  gotoSnapshot: Cv,
  useGotoRecoilSnapshot: uE,
  useRecoilTransactionObserver: sE,
  useTransactionObservation_DEPRECATED: lE,
  useTransactionSubscription_DEPRECATED: ys,
};
const { peekNodeInfo: cE } = Ln,
  { useStoreRef: fE } = nn;
function dE() {
  const e = fE();
  return ({ key: t }) => cE(e.current, e.current.getState().currentTree, t);
}
var pE = dE;
const { reactMode: hE } = si,
  { RecoilRoot: mE, useStoreRef: vE } = nn,
  { useMemo: yE } = se;
function gE() {
  hE().mode === "MUTABLE_SOURCE" &&
    console.warn(
      "Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode."
    );
  const e = vE().current;
  return yE(() => {
    function t({ children: n }) {
      return se.createElement(mE, { store_INTERNAL: e }, n);
    }
    return t;
  }, [e]);
}
var SE = gE;
const { loadableWithValue: wE } = li,
  { initializeNode: _E } = Ln,
  { DEFAULT_VALUE: RE, getNode: EE } = it,
  {
    copyTreeState: xE,
    getRecoilValueAsLoadable: NE,
    invalidateDownstreams: kE,
    writeLoadableToTreeState: CE,
  } = Bt;
function Md(e) {
  return EE(e.key).nodeType === "atom";
}
class TE {
  constructor(t, n) {
    q(this, "_store", void 0),
      q(this, "_treeState", void 0),
      q(this, "_changes", void 0),
      q(this, "get", (r) => {
        if (this._changes.has(r.key)) return this._changes.get(r.key);
        if (!Md(r))
          throw ee("Reading selectors within atomicUpdate is not supported");
        const o = NE(this._store, r, this._treeState);
        if (o.state === "hasValue") return o.contents;
        throw o.state === "hasError"
          ? o.contents
          : ee(
              `Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`
            );
      }),
      q(this, "set", (r, o) => {
        if (!Md(r))
          throw ee("Setting selectors within atomicUpdate is not supported");
        if (typeof o == "function") {
          const i = this.get(r);
          this._changes.set(r.key, o(i));
        } else _E(this._store, r.key, "set"), this._changes.set(r.key, o);
      }),
      q(this, "reset", (r) => {
        this.set(r, RE);
      }),
      (this._store = t),
      (this._treeState = n),
      (this._changes = new Map());
  }
  newTreeState_INTERNAL() {
    if (this._changes.size === 0) return this._treeState;
    const t = xE(this._treeState);
    for (const [n, r] of this._changes) CE(t, n, wE(r));
    return kE(this._store, t), t;
  }
}
function LE(e) {
  return (t) => {
    e.replaceState((n) => {
      const r = new TE(e, n);
      return t(r), r.newTreeState_INTERNAL();
    });
  };
}
var $E = { atomicUpdater: LE },
  AE = $E.atomicUpdater,
  Lv = Object.freeze({ __proto__: null, atomicUpdater: AE });
function PE(e, t) {
  if (!e) throw new Error(t);
}
var IE = PE,
  go = IE;
const { atomicUpdater: ME } = Lv,
  { batchUpdates: bE } = us,
  { DEFAULT_VALUE: DE } = it,
  { useStoreRef: jE } = nn,
  { refreshRecoilValue: VE, setRecoilValue: bd } = Bt,
  { cloneSnapshot: OE } = ps,
  { gotoSnapshot: UE } = Tv,
  { useCallback: zE } = se;
class $v {}
const FE = new $v();
function Av(e, t, n, r) {
  let o = FE,
    i;
  if (
    (bE(() => {
      const s =
        "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
      if (typeof t != "function") throw ee(s);
      const a = Bm(
          {
            ...(r ?? {}),
            set: (d, f) => bd(e, d, f),
            reset: (d) => bd(e, d, DE),
            refresh: (d) => VE(e, d),
            gotoSnapshot: (d) => UE(e, d),
            transact_UNSTABLE: (d) => ME(e)(d),
          },
          {
            snapshot: () => {
              const d = OE(e);
              return (i = d.retain()), d;
            },
          }
        ),
        u = t(a);
      if (typeof u != "function") throw ee(s);
      o = u(...n);
    }),
    o instanceof $v && go(!1),
    me(o))
  )
    o = o.finally(() => {
      var s;
      (s = i) === null || s === void 0 || s();
    });
  else {
    var l;
    (l = i) === null || l === void 0 || l();
  }
  return o;
}
function BE(e, t) {
  const n = jE();
  return zE((...r) => Av(n.current, e, r), t != null ? [...t, n] : void 0);
}
var Pv = { recoilCallback: Av, useRecoilCallback: BE };
const { useStoreRef: WE } = nn,
  { refreshRecoilValue: HE } = Bt,
  { useCallback: GE } = se;
function KE(e) {
  const t = WE();
  return GE(() => {
    const n = t.current;
    HE(n, e);
  }, [e, t]);
}
var QE = KE;
const { atomicUpdater: YE } = Lv,
  { useStoreRef: XE } = nn,
  { useMemo: ZE } = se;
function qE(e, t) {
  const n = XE();
  return ZE(
    () =>
      (...r) => {
        YE(n.current)((i) => {
          e(i)(...r);
        });
      },
    t != null ? [...t, n] : void 0
  );
}
var JE = qE;
class ex {
  constructor(t) {
    q(this, "value", void 0), (this.value = t);
  }
}
var tx = { WrappedValue: ex },
  nx = tx.WrappedValue,
  Iv = Object.freeze({ __proto__: null, WrappedValue: nx });
const { isFastRefreshEnabled: rx } = si;
class Dd extends Error {}
class ox {
  constructor(t) {
    var n, r, o;
    q(this, "_name", void 0),
      q(this, "_numLeafs", void 0),
      q(this, "_root", void 0),
      q(this, "_onHit", void 0),
      q(this, "_onSet", void 0),
      q(this, "_mapNodeValue", void 0),
      (this._name = t == null ? void 0 : t.name),
      (this._numLeafs = 0),
      (this._root = null),
      (this._onHit =
        (n = t == null ? void 0 : t.onHit) !== null && n !== void 0
          ? n
          : () => {}),
      (this._onSet =
        (r = t == null ? void 0 : t.onSet) !== null && r !== void 0
          ? r
          : () => {}),
      (this._mapNodeValue =
        (o = t == null ? void 0 : t.mapNodeValue) !== null && o !== void 0
          ? o
          : (i) => i);
  }
  size() {
    return this._numLeafs;
  }
  root() {
    return this._root;
  }
  get(t, n) {
    var r;
    return (r = this.getLeafNode(t, n)) === null || r === void 0
      ? void 0
      : r.value;
  }
  getLeafNode(t, n) {
    if (this._root == null) return;
    let r = this._root;
    for (; r; ) {
      if ((n == null || n.onNodeVisit(r), r.type === "leaf"))
        return this._onHit(r), r;
      const o = this._mapNodeValue(t(r.nodeKey));
      r = r.branches.get(o);
    }
  }
  set(t, n, r) {
    const o = () => {
      var i, l, s, a;
      let u, d;
      for (const [x, p] of t) {
        var f, m, y;
        const c = this._root;
        if ((c == null ? void 0 : c.type) === "leaf")
          throw this.invalidCacheError();
        const h = u;
        if (
          ((u = h ? h.branches.get(d) : c),
          (u =
            (f = u) !== null && f !== void 0
              ? f
              : {
                  type: "branch",
                  nodeKey: x,
                  parent: h,
                  branches: new Map(),
                  branchKey: d,
                }),
          u.type !== "branch" || u.nodeKey !== x)
        )
          throw this.invalidCacheError();
        h == null || h.branches.set(d, u),
          r == null ||
            (m = r.onNodeVisit) === null ||
            m === void 0 ||
            m.call(r, u),
          (d = this._mapNodeValue(p)),
          (this._root = (y = this._root) !== null && y !== void 0 ? y : u);
      }
      const v = u
        ? (i = u) === null || i === void 0
          ? void 0
          : i.branches.get(d)
        : this._root;
      if (v != null && (v.type !== "leaf" || v.branchKey !== d))
        throw this.invalidCacheError();
      const g = { type: "leaf", value: n, parent: u, branchKey: d };
      (l = u) === null || l === void 0 || l.branches.set(d, g),
        (this._root = (s = this._root) !== null && s !== void 0 ? s : g),
        this._numLeafs++,
        this._onSet(g),
        r == null ||
          (a = r.onNodeVisit) === null ||
          a === void 0 ||
          a.call(r, g);
    };
    try {
      o();
    } catch (i) {
      if (i instanceof Dd) this.clear(), o();
      else throw i;
    }
  }
  delete(t) {
    const n = this.root();
    if (!n) return !1;
    if (t === n) return (this._root = null), (this._numLeafs = 0), !0;
    let r = t.parent,
      o = t.branchKey;
    for (; r; ) {
      var i;
      if ((r.branches.delete(o), r === n))
        return (
          r.branches.size === 0
            ? ((this._root = null), (this._numLeafs = 0))
            : this._numLeafs--,
          !0
        );
      if (r.branches.size > 0) break;
      (o = (i = r) === null || i === void 0 ? void 0 : i.branchKey),
        (r = r.parent);
    }
    for (; r !== n; r = r.parent) if (r == null) return !1;
    return this._numLeafs--, !0;
  }
  clear() {
    (this._numLeafs = 0), (this._root = null);
  }
  invalidCacheError() {
    const t = rx()
      ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
      : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    throw (kc(t + (this._name != null ? ` - ${this._name}` : "")), new Dd());
  }
}
var ix = { TreeCache: ox },
  lx = ix.TreeCache,
  Mv = Object.freeze({ __proto__: null, TreeCache: lx });
class sx {
  constructor(t) {
    var n;
    q(this, "_maxSize", void 0),
      q(this, "_size", void 0),
      q(this, "_head", void 0),
      q(this, "_tail", void 0),
      q(this, "_map", void 0),
      q(this, "_keyMapper", void 0),
      (this._maxSize = t.maxSize),
      (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map()),
      (this._keyMapper =
        (n = t.mapKey) !== null && n !== void 0 ? n : (r) => r);
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    const n = this._keyMapper(t),
      r = this._map.get(n);
    if (r) return this.set(t, r.value), r.value;
  }
  set(t, n) {
    const r = this._keyMapper(t);
    this._map.get(r) && this.delete(t);
    const i = this.head(),
      l = { key: t, right: i, left: null, value: n };
    i ? (i.left = l) : (this._tail = l),
      this._map.set(r, l),
      (this._head = l),
      this._size++,
      this._maybeDeleteLRU();
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru();
  }
  deleteLru() {
    const t = this.tail();
    t && this.delete(t.key);
  }
  delete(t) {
    const n = this._keyMapper(t);
    if (!this._size || !this._map.has(n)) return;
    const r = _e(this._map.get(n)),
      o = r.right,
      i = r.left;
    o && (o.left = r.left),
      i && (i.right = r.right),
      r === this.head() && (this._head = o),
      r === this.tail() && (this._tail = i),
      this._map.delete(n),
      this._size--;
  }
  clear() {
    (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map());
  }
}
var ax = { LRUCache: sx },
  ux = ax.LRUCache,
  bv = Object.freeze({ __proto__: null, LRUCache: ux });
const { LRUCache: cx } = bv,
  { TreeCache: fx } = Mv;
function dx({ name: e, maxSize: t, mapNodeValue: n = (r) => r }) {
  const r = new cx({ maxSize: t }),
    o = new fx({
      name: e,
      mapNodeValue: n,
      onHit: (i) => {
        r.set(i, !0);
      },
      onSet: (i) => {
        const l = r.tail();
        r.set(i, !0), l && o.size() > t && o.delete(l.key);
      },
    });
  return o;
}
var jd = dx;
function Tt(e, t, n) {
  if (typeof e == "string" && !e.includes('"') && !e.includes("\\"))
    return `"${e}"`;
  switch (typeof e) {
    case "undefined":
      return "";
    case "boolean":
      return e ? "true" : "false";
    case "number":
    case "symbol":
      return String(e);
    case "string":
      return JSON.stringify(e);
    case "function":
      if ((t == null ? void 0 : t.allowFunctions) !== !0)
        throw ee("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${e.name})__`;
  }
  if (e === null) return "null";
  if (typeof e != "object") {
    var r;
    return (r = JSON.stringify(e)) !== null && r !== void 0 ? r : "";
  }
  if (me(e)) return "__PROMISE__";
  if (Array.isArray(e)) return `[${e.map((o, i) => Tt(o, t, i.toString()))}]`;
  if (typeof e.toJSON == "function") return Tt(e.toJSON(n), t, n);
  if (e instanceof Map) {
    const o = {};
    for (const [i, l] of e) o[typeof i == "string" ? i : Tt(i, t)] = l;
    return Tt(o, t, n);
  }
  return e instanceof Set
    ? Tt(
        Array.from(e).sort((o, i) => Tt(o, t).localeCompare(Tt(i, t))),
        t,
        n
      )
    : Symbol !== void 0 &&
      e[Symbol.iterator] != null &&
      typeof e[Symbol.iterator] == "function"
    ? Tt(Array.from(e), t, n)
    : `{${Object.keys(e)
        .filter((o) => e[o] !== void 0)
        .sort()
        .map((o) => `${Tt(o, t)}:${Tt(e[o], t, o)}`)
        .join(",")}}`;
}
function px(e, t = { allowFunctions: !1 }) {
  return Tt(e, t);
}
var gs = px;
const { TreeCache: hx } = Mv,
  Mi = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
function mx(
  {
    equality: e = Mi.equality,
    eviction: t = Mi.eviction,
    maxSize: n = Mi.maxSize,
  } = Mi,
  r
) {
  const o = vx(e);
  return yx(t, n, o, r);
}
function vx(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => gs(t);
  }
  throw ee(`Unrecognized equality policy ${e}`);
}
function yx(e, t, n, r) {
  switch (e) {
    case "keep-all":
      return new hx({ name: r, mapNodeValue: n });
    case "lru":
      return jd({ name: r, maxSize: _e(t), mapNodeValue: n });
    case "most-recent":
      return jd({ name: r, maxSize: 1, mapNodeValue: n });
  }
  throw ee(`Unrecognized eviction policy ${e}`);
}
var gx = mx;
function Sx(e) {
  return () => null;
}
var wx = { startPerfBlock: Sx };
const {
    isLoadable: _x,
    loadableWithError: bi,
    loadableWithPromise: Rx,
    loadableWithValue: ua,
  } = li,
  { WrappedValue: Dv } = Iv,
  { getNodeLoadable: Di, peekNodeLoadable: Ex, setNodeValue: xx } = Ln,
  { saveDepsToStore: Nx } = ai,
  {
    DEFAULT_VALUE: kx,
    getConfigDeletionHandler: Cx,
    getNode: Tx,
    registerNode: Vd,
  } = it,
  { isRecoilValue: Lx } = Mr,
  { markRecoilValueModified: Od } = Bt,
  { retainedByOptionWithDefault: $x } = er,
  { recoilCallback: Ax } = Pv,
  { startPerfBlock: Px } = wx;
class jv {}
const co = new jv(),
  fo = [],
  ji = new Map(),
  Ix = (() => {
    let e = 0;
    return () => e++;
  })();
function Vv(e) {
  let t = null;
  const { key: n, get: r, cachePolicy_UNSTABLE: o } = e,
    i = e.set != null ? e.set : void 0,
    l = new Set(),
    s = gx(o ?? { equality: "reference", eviction: "keep-all" }, n),
    a = $x(e.retainedBy_UNSTABLE),
    u = new Map();
  let d = 0;
  function f() {
    return !fe("recoil_memory_managament_2020") || d > 0;
  }
  function m(w) {
    return (
      w.getState().knownSelectors.add(n),
      d++,
      () => {
        d--;
      }
    );
  }
  function y() {
    return Cx(n) !== void 0 && !f();
  }
  function v(w, A, P, H, D) {
    Me(A, H, D), g(w, P);
  }
  function g(w, A) {
    Ie(w, A) && le(w), p(A, !0);
  }
  function x(w, A) {
    Ie(w, A) && (_e(z(w)).stateVersions.clear(), p(A, !1));
  }
  function p(w, A) {
    const P = ji.get(w);
    if (P != null) {
      for (const H of P) Od(H, _e(t));
      A && ji.delete(w);
    }
  }
  function c(w, A) {
    let P = ji.get(A);
    P == null && ji.set(A, (P = new Set())), P.add(w);
  }
  function h(w, A, P, H, D, Y) {
    return A.then((Z) => {
      if (!f()) throw (le(w), co);
      const F = ua(Z);
      return v(w, P, D, F, H), Z;
    }).catch((Z) => {
      if (!f()) throw (le(w), co);
      if (me(Z)) return E(w, Z, P, H, D, Y);
      const F = bi(Z);
      throw (v(w, P, D, F, H), Z);
    });
  }
  function E(w, A, P, H, D, Y) {
    return A.then((Z) => {
      if (!f()) throw (le(w), co);
      Y.loadingDepKey != null && Y.loadingDepPromise === A
        ? P.atomValues.set(Y.loadingDepKey, ua(Z))
        : w.getState().knownSelectors.forEach((ne) => {
            P.atomValues.delete(ne);
          });
      const F = N(w, P);
      if (F && F.state !== "loading") {
        if (((Ie(w, D) || z(w) == null) && g(w, D), F.state === "hasValue"))
          return F.contents;
        throw F.contents;
      }
      if (!Ie(w, D)) {
        const ne = X(w, P);
        if (ne != null) return ne.loadingLoadable.contents;
      }
      const [ce, ge] = T(w, P, D);
      if (
        (ce.state !== "loading" && v(w, P, D, ce, ge), ce.state === "hasError")
      )
        throw ce.contents;
      return ce.contents;
    }).catch((Z) => {
      if (Z instanceof jv) throw co;
      if (!f()) throw (le(w), co);
      const F = bi(Z);
      throw (v(w, P, D, F, H), Z);
    });
  }
  function k(w, A, P, H) {
    var D, Y, Z, F;
    if (
      Ie(w, H) ||
      A.version ===
        ((D = w.getState()) === null ||
        D === void 0 ||
        (Y = D.currentTree) === null ||
        Y === void 0
          ? void 0
          : Y.version) ||
      A.version ===
        ((Z = w.getState()) === null ||
        Z === void 0 ||
        (F = Z.nextTree) === null ||
        F === void 0
          ? void 0
          : F.version)
    ) {
      var ce, ge, ne;
      Nx(
        n,
        P,
        w,
        (ce =
          (ge = w.getState()) === null ||
          ge === void 0 ||
          (ne = ge.nextTree) === null ||
          ne === void 0
            ? void 0
            : ne.version) !== null && ce !== void 0
          ? ce
          : w.getState().currentTree.version
      );
    }
    for (const Re of P) l.add(Re);
  }
  function T(w, A, P) {
    const H = Px(n);
    let D = !0,
      Y = !0;
    const Z = () => {
      H(), (Y = !1);
    };
    let F,
      ce = !1,
      ge;
    const ne = { loadingDepKey: null, loadingDepPromise: null },
      Re = new Map();
    function Nt({ key: mt }) {
      const lt = Di(w, A, mt);
      switch (
        (Re.set(mt, lt),
        D || (k(w, A, new Set(Re.keys()), P), x(w, P)),
        lt.state)
      ) {
        case "hasValue":
          return lt.contents;
        case "hasError":
          throw lt.contents;
        case "loading":
          throw (
            ((ne.loadingDepKey = mt),
            (ne.loadingDepPromise = lt.contents),
            lt.contents)
          );
      }
      throw ee("Invalid Loadable state");
    }
    const An =
      (mt) =>
      (...lt) => {
        if (Y)
          throw ee(
            "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription."
          );
        return t == null && go(!1), Ax(w, mt, lt, { node: t });
      };
    try {
      (F = r({ get: Nt, getCallback: An })),
        (F = Lx(F) ? Nt(F) : F),
        _x(F) && (F.state === "hasError" && (ce = !0), (F = F.contents)),
        me(F) ? (F = h(w, F, A, Re, P, ne).finally(Z)) : Z(),
        (F = F instanceof Dv ? F.value : F);
    } catch (mt) {
      (F = mt),
        me(F) ? (F = E(w, F, A, Re, P, ne).finally(Z)) : ((ce = !0), Z());
    }
    return (
      ce ? (ge = bi(F)) : me(F) ? (ge = Rx(F)) : (ge = ua(F)),
      (D = !1),
      ye(w, P, Re),
      k(w, A, new Set(Re.keys()), P),
      [ge, Re]
    );
  }
  function N(w, A) {
    let P = A.atomValues.get(n);
    if (P != null) return P;
    const H = new Set();
    try {
      P = s.get((Y) => (typeof Y != "string" && go(!1), Di(w, A, Y).contents), {
        onNodeVisit: (Y) => {
          Y.type === "branch" && Y.nodeKey !== n && H.add(Y.nodeKey);
        },
      });
    } catch (Y) {
      throw ee(`Problem with cache lookup for selector "${n}": ${Y.message}`);
    }
    if (P) {
      var D;
      A.atomValues.set(n, P),
        k(
          w,
          A,
          H,
          (D = z(w)) === null || D === void 0 ? void 0 : D.executionID
        );
    }
    return P;
  }
  function I(w, A) {
    const P = N(w, A);
    if (P != null) return le(w), P;
    const H = X(w, A);
    if (H != null) {
      var D;
      return (
        ((D = H.loadingLoadable) === null || D === void 0
          ? void 0
          : D.state) === "loading" && c(w, H.executionID),
        H.loadingLoadable
      );
    }
    const Y = Ix(),
      [Z, F] = T(w, A, Y);
    return (
      Z.state === "loading"
        ? (oe(w, Y, Z, F, A), c(w, Y))
        : (le(w), Me(A, Z, F)),
      Z
    );
  }
  function X(w, A) {
    const P = lv([
      u.has(w) ? [_e(u.get(w))] : [],
      is(
        Ac(u, ([D]) => D !== w),
        ([, D]) => D
      ),
    ]);
    function H(D) {
      for (const [Y, Z] of D) if (!Di(w, A, Y).is(Z)) return !0;
      return !1;
    }
    for (const D of P) {
      if (
        D.stateVersions.get(A.version) ||
        !H(D.depValuesDiscoveredSoFarDuringAsyncWork)
      )
        return D.stateVersions.set(A.version, !0), D;
      D.stateVersions.set(A.version, !1);
    }
  }
  function z(w) {
    return u.get(w);
  }
  function oe(w, A, P, H, D) {
    u.set(w, {
      depValuesDiscoveredSoFarDuringAsyncWork: H,
      executionID: A,
      loadingLoadable: P,
      stateVersions: new Map([[D.version, !0]]),
    });
  }
  function ye(w, A, P) {
    if (Ie(w, A)) {
      const H = z(w);
      H != null && (H.depValuesDiscoveredSoFarDuringAsyncWork = P);
    }
  }
  function le(w) {
    u.delete(w);
  }
  function Ie(w, A) {
    var P;
    return A === ((P = z(w)) === null || P === void 0 ? void 0 : P.executionID);
  }
  function xt(w) {
    return Array.from(w.entries()).map(([A, P]) => [A, P.contents]);
  }
  function Me(w, A, P) {
    w.atomValues.set(n, A);
    try {
      s.set(xt(P), A);
    } catch (H) {
      throw ee(`Problem with setting cache for selector "${n}": ${H.message}`);
    }
  }
  function Oe(w) {
    if (fo.includes(n)) {
      const A = `Recoil selector has circular dependencies: ${fo
        .slice(fo.indexOf(n))
        .join(" → ")}`;
      return bi(ee(A));
    }
    fo.push(n);
    try {
      return w();
    } finally {
      fo.pop();
    }
  }
  function b(w, A) {
    const P = A.atomValues.get(n);
    return (
      P ??
      s.get((H) => {
        var D;
        return (
          typeof H != "string" && go(!1),
          (D = Ex(w, A, H)) === null || D === void 0 ? void 0 : D.contents
        );
      })
    );
  }
  function B(w, A) {
    return Oe(() => I(w, A));
  }
  function M(w) {
    w.atomValues.delete(n);
  }
  function W(w, A) {
    t == null && go(!1);
    for (const H of l) {
      var P;
      const D = Tx(H);
      (P = D.clearCache) === null || P === void 0 || P.call(D, w, A);
    }
    l.clear(), M(A), s.clear(), Od(w, t);
  }
  return i != null
    ? (t = Vd({
        key: n,
        nodeType: "selector",
        peek: b,
        get: B,
        set: (A, P, H) => {
          let D = !1;
          const Y = new Map();
          function Z({ key: ne }) {
            if (D)
              throw ee(
                "Recoil: Async selector sets are not currently supported."
              );
            const Re = Di(A, P, ne);
            if (Re.state === "hasValue") return Re.contents;
            if (Re.state === "loading") {
              const Nt = `Getting value of asynchronous atom or selector "${ne}" in a pending state while setting selector "${n}" is not yet supported.`;
              throw ee(Nt);
            } else throw Re.contents;
          }
          function F(ne, Re) {
            if (D)
              throw ee(
                "Recoil: Async selector sets are not currently supported."
              );
            const Nt = typeof Re == "function" ? Re(Z(ne)) : Re;
            xx(A, P, ne.key, Nt).forEach((mt, lt) => Y.set(lt, mt));
          }
          function ce(ne) {
            F(ne, kx);
          }
          const ge = i({ set: F, get: Z, reset: ce }, H);
          if (ge !== void 0)
            throw me(ge)
              ? ee("Recoil: Async selector sets are not currently supported.")
              : ee("Recoil: selector set should be a void function.");
          return (D = !0), Y;
        },
        init: m,
        invalidate: M,
        clearCache: W,
        shouldDeleteConfigOnRelease: y,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: a,
      }))
    : (t = Vd({
        key: n,
        nodeType: "selector",
        peek: b,
        get: B,
        init: m,
        invalidate: M,
        clearCache: W,
        shouldDeleteConfigOnRelease: y,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: a,
      }));
}
Vv.value = (e) => new Dv(e);
var jr = Vv;
const {
    isLoadable: Mx,
    loadableWithError: ca,
    loadableWithPromise: fa,
    loadableWithValue: or,
  } = li,
  { WrappedValue: Ov } = Iv,
  { peekNodeInfo: bx } = Ln,
  {
    DEFAULT_VALUE: Mn,
    DefaultValue: un,
    getConfigDeletionHandler: Uv,
    registerNode: Dx,
    setConfigDeletionHandler: jx,
  } = it,
  { isRecoilValue: Vx } = Mr,
  {
    getRecoilValueAsLoadable: Ox,
    markRecoilValueModified: Ux,
    setRecoilValue: Ud,
    setRecoilValueLoadable: zx,
  } = Bt,
  { retainedByOptionWithDefault: Fx } = er,
  po = (e) => (e instanceof Ov ? e.value : e);
function Bx(e) {
  const { key: t, persistence_UNSTABLE: n } = e,
    r = Fx(e.retainedBy_UNSTABLE);
  let o = 0;
  function i(c) {
    return fa(
      c
        .then((h) => ((l = or(h)), h))
        .catch((h) => {
          throw ((l = ca(h)), h);
        })
    );
  }
  let l = me(e.default)
    ? i(e.default)
    : Mx(e.default)
    ? e.default.state === "loading"
      ? i(e.default.contents)
      : e.default
    : or(po(e.default));
  l.contents;
  let s;
  const a = new Map();
  function u(c) {
    return c;
  }
  function d(c, h) {
    const E = h
      .then((k) => {
        var T, N;
        return (
          ((N = (
            (T = c.getState().nextTree) !== null && T !== void 0
              ? T
              : c.getState().currentTree
          ).atomValues.get(t)) === null || N === void 0
            ? void 0
            : N.contents) === E && Ud(c, p, k),
          k
        );
      })
      .catch((k) => {
        var T, N;
        throw (
          (((N = (
            (T = c.getState().nextTree) !== null && T !== void 0
              ? T
              : c.getState().currentTree
          ).atomValues.get(t)) === null || N === void 0
            ? void 0
            : N.contents) === E && zx(c, p, ca(k)),
          k)
        );
      });
    return E;
  }
  function f(c, h, E) {
    var k;
    o++;
    const T = () => {
      var z;
      o--,
        (z = a.get(c)) === null || z === void 0 || z.forEach((oe) => oe()),
        a.delete(c);
    };
    if ((c.getState().knownAtoms.add(t), l.state === "loading")) {
      const z = () => {
        var oe;
        ((oe = c.getState().nextTree) !== null && oe !== void 0
          ? oe
          : c.getState().currentTree
        ).atomValues.has(t) || Ux(c, p);
      };
      l.contents.finally(z);
    }
    const N = (k = e.effects) !== null && k !== void 0 ? k : e.effects_UNSTABLE;
    if (N != null) {
      let z = function (M) {
          if (Ie && M.key === t) {
            const W = le;
            return W instanceof un
              ? m(c, h)
              : me(W)
              ? fa(W.then((w) => (w instanceof un ? l.toPromise() : w)))
              : or(W);
          }
          return Ox(c, M);
        },
        oe = function (M) {
          return z(M).toPromise();
        },
        ye = function (M) {
          var W;
          const w = bx(
            c,
            (W = c.getState().nextTree) !== null && W !== void 0
              ? W
              : c.getState().currentTree,
            M.key
          );
          return Ie && M.key === t && !(le instanceof un)
            ? { ...w, isSet: !0, loadable: z(M) }
            : w;
        },
        le = Mn,
        Ie = !0,
        xt = !1,
        Me = null;
      const Oe = (M) => (W) => {
          if (Ie) {
            const w = z(p),
              A = w.state === "hasValue" ? w.contents : Mn;
            (le = typeof W == "function" ? W(A) : W),
              me(le) &&
                (le = le.then((P) => ((Me = { effect: M, value: P }), P)));
          } else {
            if (me(W))
              throw ee("Setting atoms to async values is not implemented.");
            typeof W != "function" && (Me = { effect: M, value: po(W) }),
              Ud(
                c,
                p,
                typeof W == "function"
                  ? (w) => {
                      const A = po(W(w));
                      return (Me = { effect: M, value: A }), A;
                    }
                  : po(W)
              );
          }
        },
        b = (M) => () => Oe(M)(Mn),
        B = (M) => (W) => {
          var w;
          const { release: A } = c.subscribeToTransactions((P) => {
            var H;
            let { currentTree: D, previousTree: Y } = P.getState();
            Y || (Y = D);
            const Z =
              (H = D.atomValues.get(t)) !== null && H !== void 0 ? H : l;
            if (Z.state === "hasValue") {
              var F, ce, ge, ne;
              const Re = Z.contents,
                Nt = (F = Y.atomValues.get(t)) !== null && F !== void 0 ? F : l,
                An = Nt.state === "hasValue" ? Nt.contents : Mn;
              ((ce = Me) === null || ce === void 0 ? void 0 : ce.effect) !==
                M ||
              ((ge = Me) === null || ge === void 0 ? void 0 : ge.value) !== Re
                ? W(Re, An, !D.atomValues.has(t))
                : ((ne = Me) === null || ne === void 0 ? void 0 : ne.effect) ===
                    M && (Me = null);
            }
          }, t);
          a.set(c, [...((w = a.get(c)) !== null && w !== void 0 ? w : []), A]);
        };
      for (const M of N)
        try {
          const W = M({
            node: p,
            storeID: c.storeID,
            parentStoreID_UNSTABLE: c.parentStoreID,
            trigger: E,
            setSelf: Oe(M),
            resetSelf: b(M),
            onSet: B(M),
            getPromise: oe,
            getLoadable: z,
            getInfo_UNSTABLE: ye,
          });
          if (W != null) {
            var I;
            a.set(c, [
              ...((I = a.get(c)) !== null && I !== void 0 ? I : []),
              W,
            ]);
          }
        } catch (W) {
          (le = W), (xt = !0);
        }
      if (((Ie = !1), !(le instanceof un))) {
        var X;
        const M = xt ? ca(le) : me(le) ? fa(d(c, le)) : or(po(le));
        M.contents,
          h.atomValues.set(t, M),
          (X = c.getState().nextTree) === null ||
            X === void 0 ||
            X.atomValues.set(t, M);
      }
    }
    return T;
  }
  function m(c, h) {
    var E, k;
    return (E = (k = h.atomValues.get(t)) !== null && k !== void 0 ? k : s) !==
      null && E !== void 0
      ? E
      : l;
  }
  function y(c, h) {
    if (h.atomValues.has(t)) return _e(h.atomValues.get(t));
    if (h.nonvalidatedAtoms.has(t)) {
      if (s != null) return s;
      if (n == null) return l;
      const E = h.nonvalidatedAtoms.get(t),
        k = n.validator(E, Mn);
      return (s = k instanceof un ? l : or(k)), s;
    } else return l;
  }
  function v() {
    s = void 0;
  }
  function g(c, h, E) {
    if (h.atomValues.has(t)) {
      const k = _e(h.atomValues.get(t));
      if (k.state === "hasValue" && E === k.contents) return new Map();
    } else if (!h.nonvalidatedAtoms.has(t) && E instanceof un) return new Map();
    return (s = void 0), new Map().set(t, or(E));
  }
  function x() {
    return Uv(t) !== void 0 && o <= 0;
  }
  const p = Dx({
    key: t,
    nodeType: "atom",
    peek: m,
    get: y,
    set: g,
    init: f,
    invalidate: v,
    shouldDeleteConfigOnRelease: x,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    persistence_UNSTABLE: e.persistence_UNSTABLE
      ? {
          type: e.persistence_UNSTABLE.type,
          backButton: e.persistence_UNSTABLE.backButton,
        }
      : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: r,
  });
  return p;
}
function zc(e) {
  const { ...t } = e,
    n = "default" in e ? e.default : new Promise(() => {});
  return Vx(n) ? Wx({ ...t, default: n }) : Bx({ ...t, default: n });
}
function Wx(e) {
  const t = zc({
      ...e,
      default: Mn,
      persistence_UNSTABLE:
        e.persistence_UNSTABLE === void 0
          ? void 0
          : {
              ...e.persistence_UNSTABLE,
              validator: (r) =>
                r instanceof un
                  ? r
                  : _e(e.persistence_UNSTABLE).validator(r, Mn),
            },
      effects: e.effects,
      effects_UNSTABLE: e.effects_UNSTABLE,
    }),
    n = jr({
      key: `${e.key}__withFallback`,
      get: ({ get: r }) => {
        const o = r(t);
        return o instanceof un ? e.default : o;
      },
      set: ({ set: r }, o) => r(t, o),
      cachePolicy_UNSTABLE: { eviction: "most-recent" },
      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    });
  return jx(n.key, Uv(e.key)), n;
}
zc.value = (e) => new Ov(e);
var zv = zc;
class Hx {
  constructor(t) {
    var n;
    q(this, "_map", void 0),
      q(this, "_keyMapper", void 0),
      (this._map = new Map()),
      (this._keyMapper =
        (n = t == null ? void 0 : t.mapKey) !== null && n !== void 0
          ? n
          : (r) => r);
  }
  size() {
    return this._map.size;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    return this._map.get(this._keyMapper(t));
  }
  set(t, n) {
    this._map.set(this._keyMapper(t), n);
  }
  delete(t) {
    this._map.delete(this._keyMapper(t));
  }
  clear() {
    this._map.clear();
  }
}
var Gx = { MapCache: Hx },
  Kx = Gx.MapCache,
  Qx = Object.freeze({ __proto__: null, MapCache: Kx });
const { LRUCache: zd } = bv,
  { MapCache: Yx } = Qx,
  Vi = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
function Xx({
  equality: e = Vi.equality,
  eviction: t = Vi.eviction,
  maxSize: n = Vi.maxSize,
} = Vi) {
  const r = Zx(e);
  return qx(t, n, r);
}
function Zx(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => gs(t);
  }
  throw ee(`Unrecognized equality policy ${e}`);
}
function qx(e, t, n) {
  switch (e) {
    case "keep-all":
      return new Yx({ mapKey: n });
    case "lru":
      return new zd({ mapKey: n, maxSize: _e(t) });
    case "most-recent":
      return new zd({ mapKey: n, maxSize: 1 });
  }
  throw ee(`Unrecognized eviction policy ${e}`);
}
var Fv = Xx;
const { setConfigDeletionHandler: Jx } = it;
function eN(e) {
  var t, n;
  const r = Fv({
    equality:
      (t =
        (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0
          ? void 0
          : n.equality) !== null && t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i, l;
    const s = r.get(o);
    if (s != null) return s;
    const { cachePolicyForParams_UNSTABLE: a, ...u } = e,
      d = "default" in e ? e.default : new Promise(() => {}),
      f = zv({
        ...u,
        key: `${e.key}__${(i = gs(o)) !== null && i !== void 0 ? i : "void"}`,
        default: typeof d == "function" ? d(o) : d,
        retainedBy_UNSTABLE:
          typeof e.retainedBy_UNSTABLE == "function"
            ? e.retainedBy_UNSTABLE(o)
            : e.retainedBy_UNSTABLE,
        effects:
          typeof e.effects == "function"
            ? e.effects(o)
            : typeof e.effects_UNSTABLE == "function"
            ? e.effects_UNSTABLE(o)
            : (l = e.effects) !== null && l !== void 0
            ? l
            : e.effects_UNSTABLE,
      });
    return (
      r.set(o, f),
      Jx(f.key, () => {
        r.delete(o);
      }),
      f
    );
  };
}
var tN = eN;
const { setConfigDeletionHandler: nN } = it;
let rN = 0;
function oN(e) {
  var t, n;
  const r = Fv({
    equality:
      (t =
        (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0
          ? void 0
          : n.equality) !== null && t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i;
    let l;
    try {
      l = r.get(o);
    } catch (m) {
      throw ee(`Problem with cache lookup for selector ${e.key}: ${m.message}`);
    }
    if (l != null) return l;
    const s = `${e.key}__selectorFamily/${
        (i = gs(o, { allowFunctions: !0 })) !== null && i !== void 0
          ? i
          : "void"
      }/${rN++}`,
      a = (m) => e.get(o)(m),
      u = e.cachePolicy_UNSTABLE,
      d =
        typeof e.retainedBy_UNSTABLE == "function"
          ? e.retainedBy_UNSTABLE(o)
          : e.retainedBy_UNSTABLE;
    let f;
    if (e.set != null) {
      const m = e.set;
      f = jr({
        key: s,
        get: a,
        set: (v, g) => m(o)(v, g),
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: d,
      });
    } else
      f = jr({
        key: s,
        get: a,
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: d,
      });
    return (
      r.set(o, f),
      nN(f.key, () => {
        r.delete(o);
      }),
      f
    );
  };
}
var $n = oN;
const iN = $n({
  key: "__constant",
  get: (e) => () => e,
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function lN(e) {
  return iN(e);
}
var sN = lN;
const aN = $n({
  key: "__error",
  get: (e) => () => {
    throw ee(e);
  },
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function uN(e) {
  return aN(e);
}
var cN = uN;
function fN(e) {
  return e;
}
var dN = fN;
const {
  loadableWithError: Bv,
  loadableWithPromise: Wv,
  loadableWithValue: Hv,
} = li;
function Ss(e, t) {
  const n = Array(t.length).fill(void 0),
    r = Array(t.length).fill(void 0);
  for (const [o, i] of t.entries())
    try {
      n[o] = e(i);
    } catch (l) {
      r[o] = l;
    }
  return [n, r];
}
function pN(e) {
  return e != null && !me(e);
}
function ws(e) {
  return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
}
function wu(e, t) {
  return Array.isArray(e)
    ? t
    : Object.getOwnPropertyNames(e).reduce(
        (n, r, o) => ({ ...n, [r]: t[o] }),
        {}
      );
}
function Nr(e, t, n) {
  const r = n.map((o, i) => (o == null ? Hv(t[i]) : me(o) ? Wv(o) : Bv(o)));
  return wu(e, r);
}
function hN(e, t) {
  return t.map((n, r) => (n === void 0 ? e[r] : n));
}
const mN = $n({
    key: "__waitForNone",
    get:
      (e) =>
      ({ get: t }) => {
        const n = ws(e),
          [r, o] = Ss(t, n);
        return Nr(e, r, o);
      },
    dangerouslyAllowMutability: !0,
  }),
  vN = $n({
    key: "__waitForAny",
    get:
      (e) =>
      ({ get: t }) => {
        const n = ws(e),
          [r, o] = Ss(t, n);
        return o.some((i) => !me(i))
          ? Nr(e, r, o)
          : new Promise((i) => {
              for (const [l, s] of o.entries())
                me(s) &&
                  s
                    .then((a) => {
                      (r[l] = a), (o[l] = void 0), i(Nr(e, r, o));
                    })
                    .catch((a) => {
                      (o[l] = a), i(Nr(e, r, o));
                    });
            });
      },
    dangerouslyAllowMutability: !0,
  }),
  yN = $n({
    key: "__waitForAll",
    get:
      (e) =>
      ({ get: t }) => {
        const n = ws(e),
          [r, o] = Ss(t, n);
        if (o.every((l) => l == null)) return wu(e, r);
        const i = o.find(pN);
        if (i != null) throw i;
        return Promise.all(o).then((l) => wu(e, hN(r, l)));
      },
    dangerouslyAllowMutability: !0,
  }),
  gN = $n({
    key: "__waitForAllSettled",
    get:
      (e) =>
      ({ get: t }) => {
        const n = ws(e),
          [r, o] = Ss(t, n);
        return o.every((i) => !me(i))
          ? Nr(e, r, o)
          : Promise.all(
              o.map((i, l) =>
                me(i)
                  ? i
                      .then((s) => {
                        (r[l] = s), (o[l] = void 0);
                      })
                      .catch((s) => {
                        (r[l] = void 0), (o[l] = s);
                      })
                  : null
              )
            ).then(() => Nr(e, r, o));
      },
    dangerouslyAllowMutability: !0,
  }),
  SN = $n({
    key: "__noWait",
    get:
      (e) =>
      ({ get: t }) => {
        try {
          return jr.value(Hv(t(e)));
        } catch (n) {
          return jr.value(me(n) ? Wv(n) : Bv(n));
        }
      },
    dangerouslyAllowMutability: !0,
  });
var wN = {
  waitForNone: mN,
  waitForAny: vN,
  waitForAll: yN,
  waitForAllSettled: gN,
  noWait: SN,
};
const { RecoilLoadable: _N } = li,
  { DefaultValue: RN } = it,
  { RecoilRoot: EN, useRecoilStoreID: xN } = nn,
  { isRecoilValue: NN } = Mr,
  { retentionZone: kN } = ss,
  { freshSnapshot: CN } = ps,
  {
    useRecoilState: TN,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: LN,
    useRecoilStateLoadable: $N,
    useRecoilValue: AN,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: PN,
    useRecoilValueLoadable: IN,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: MN,
    useResetRecoilState: bN,
    useSetRecoilState: DN,
  } = GR,
  {
    useGotoRecoilSnapshot: jN,
    useRecoilSnapshot: VN,
    useRecoilTransactionObserver: ON,
  } = Tv,
  { useRecoilCallback: UN } = Pv,
  {
    noWait: zN,
    waitForAll: FN,
    waitForAllSettled: BN,
    waitForAny: WN,
    waitForNone: HN,
  } = wN;
var di = {
    DefaultValue: RN,
    isRecoilValue: NN,
    RecoilLoadable: _N,
    RecoilEnv: Yr,
    RecoilRoot: EN,
    useRecoilStoreID: xN,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: SE,
    atom: zv,
    selector: jr,
    atomFamily: tN,
    selectorFamily: $n,
    constSelector: sN,
    errorSelector: cN,
    readOnlySelector: dN,
    noWait: zN,
    waitForNone: HN,
    waitForAny: WN,
    waitForAll: FN,
    waitForAllSettled: BN,
    useRecoilValue: AN,
    useRecoilValueLoadable: IN,
    useRecoilState: TN,
    useRecoilStateLoadable: $N,
    useSetRecoilState: DN,
    useResetRecoilState: bN,
    useGetRecoilValueInfo_UNSTABLE: pE,
    useRecoilRefresher_UNSTABLE: QE,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: MN,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: PN,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: LN,
    useRecoilCallback: UN,
    useRecoilTransaction_UNSTABLE: JE,
    useGotoRecoilSnapshot: jN,
    useRecoilSnapshot: VN,
    useRecoilTransactionObserver_UNSTABLE: ON,
    snapshot_UNSTABLE: CN,
    useRetain: Dc,
    retentionZone: kN,
  },
  GN = di.RecoilRoot,
  pi = di.atom,
  Vr = di.useRecoilValue,
  hi = di.useRecoilState,
  Fc = di.useSetRecoilState;
const Bc = pi({ key: "productAtom", default: null }),
  Wc = pi({
    key: "variableAtom",
    default: { categories: [], minPrice: 0, maxPrice: 50 },
  }),
  Gv = pi({ key: "modalAtom", default: "" }),
  Kv = pi({ key: "loggedInAtom", default: !1 }),
  _s = pi({
    key: "signupAtom",
    default: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: {
        houseNumber: "",
        lane: "",
        landmark: "",
        state: "",
        country: "",
        pin: "",
      },
      payment: { cardNumber: "", validTo: "", cvv: "" },
    },
  });
function KN(e, t) {
  const [n, r] = C.useState(e);
  return (
    C.useEffect(() => {
      const o = setTimeout(() => {
        r(e);
      }, t);
      return () => clearTimeout(o);
    }, [e]),
    n
  );
}
function QN() {
  const e = Vr(Kv),
    [t, n] = km({ search: "" }),
    r = Qr(),
    [o, i] = C.useState(""),
    l = KN(o, 200),
    s = Vr(Bc),
    [a, u] = C.useState([]),
    d = C.useRef();
  return (
    C.useEffect(() => {
      if (!l) {
        u([]);
        return;
      }
      if (!s) return;
      const f = [];
      s.forEach((m) => {
        m.title.toLowerCase().includes(l.toLowerCase()) && f.push(m);
      }),
        u(f);
    }, [s, l]),
    _.jsxs("div", {
      className:
        "flex relative justify-between px-2 md:px-5 py-2 border-b-[1px] bg-slate-50 items-center z-50",
      children: [
        _.jsx("div", {
          className: "text-xl md:text-2xl font-bold",
          children: "Serene Strokes",
        }),
        _.jsxs("div", {
          className:
            "w-[50%] h-12 hidden md:flex border-2 border-black relative",
          children: [
            _.jsxs("div", {
              className: "h-full w-full relative",
              children: [
                _.jsx("input", {
                  ref: d,
                  className: "h-full w-full outline-none pl-3 ",
                  type: "text",
                  placeholder: "Search For Products...",
                  onChange: (f) => i(f.target.value),
                  onKeyDown: (f) => {
                    f.key == "Enter" && (n({ search: f.target.value }), i(""));
                  },
                }),
                _.jsx("div", {
                  className:
                    "w-full absolute top-[100%] translate-y-1 bg-white border-[1px] max-h-64 overflow-y-auto",
                  children: a.map((f) =>
                    _.jsx(
                      "div",
                      {
                        className:
                          "p-3 relative border-b-[1px] hover:bg-slate-100 cursor-pointer z-50",
                        onClick: () => {
                          n({ search: f.title }), i(""), (d.current.value = "");
                        },
                        children: f.title,
                      },
                      Math.floor(Math.random() * 1e5)
                    )
                  ),
                }),
              ],
            }),
            _.jsx("div", {
              className:
                "h-full w-12 bg-black flex justify-center items-center cursor-pointer text-white text-lg",
              onClick: () => {
                n({ search: d.current.value }), i("");
              },
              children: _.jsx("i", {
                className: "fa-solid fa-magnifying-glass",
              }),
            }),
          ],
        }),
        e
          ? _.jsx("i", {
              className: "fa-solid fa-cart-shopping text-3xl cursor-pointer",
            })
          : _.jsx("button", {
              className:
                "px-3 py-2 text-white bg-black cursor-pointer scale-90 md:scale-1",
              onClick: () => r("/signup/1"),
              children: "Sign Up",
            }),
      ],
    })
  );
}
var et = function () {
  return (
    (et =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    et.apply(this, arguments)
  );
};
function qo(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var he = "-ms-",
  Po = "-moz-",
  ae = "-webkit-",
  Qv = "comm",
  Rs = "rule",
  Hc = "decl",
  YN = "@import",
  Yv = "@keyframes",
  XN = "@layer",
  Xv = Math.abs,
  Gc = String.fromCharCode,
  _u = Object.assign;
function ZN(e, t) {
  return je(e, 0) ^ 45
    ? (((((((t << 2) ^ je(e, 0)) << 2) ^ je(e, 1)) << 2) ^ je(e, 2)) << 2) ^
        je(e, 3)
    : 0;
}
function Zv(e) {
  return e.trim();
}
function Gt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function J(e, t, n) {
  return e.replace(t, n);
}
function el(e, t, n) {
  return e.indexOf(t, n);
}
function je(e, t) {
  return e.charCodeAt(t) | 0;
}
function Or(e, t, n) {
  return e.slice(t, n);
}
function Ot(e) {
  return e.length;
}
function qv(e) {
  return e.length;
}
function So(e, t) {
  return t.push(e), e;
}
function qN(e, t) {
  return e.map(t).join("");
}
function Fd(e, t) {
  return e.filter(function (n) {
    return !Gt(n, t);
  });
}
var Es = 1,
  Ur = 1,
  Jv = 0,
  Et = 0,
  Te = 0,
  Zr = "";
function xs(e, t, n, r, o, i, l, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Es,
    column: Ur,
    length: l,
    return: "",
    siblings: s,
  };
}
function ln(e, t) {
  return _u(
    xs("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function ir(e) {
  for (; e.root; ) e = ln(e.root, { children: [e] });
  So(e, e.siblings);
}
function JN() {
  return Te;
}
function ek() {
  return (
    (Te = Et > 0 ? je(Zr, --Et) : 0), Ur--, Te === 10 && ((Ur = 1), Es--), Te
  );
}
function bt() {
  return (
    (Te = Et < Jv ? je(Zr, Et++) : 0), Ur++, Te === 10 && ((Ur = 1), Es++), Te
  );
}
function Fn() {
  return je(Zr, Et);
}
function tl() {
  return Et;
}
function Ns(e, t) {
  return Or(Zr, e, t);
}
function Ru(e) {
  switch (e) {
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
function tk(e) {
  return (Es = Ur = 1), (Jv = Ot((Zr = e))), (Et = 0), [];
}
function nk(e) {
  return (Zr = ""), e;
}
function da(e) {
  return Zv(Ns(Et - 1, Eu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function rk(e) {
  for (; (Te = Fn()) && Te < 33; ) bt();
  return Ru(e) > 2 || Ru(Te) > 3 ? "" : " ";
}
function ok(e, t) {
  for (
    ;
    --t &&
    bt() &&
    !(Te < 48 || Te > 102 || (Te > 57 && Te < 65) || (Te > 70 && Te < 97));

  );
  return Ns(e, tl() + (t < 6 && Fn() == 32 && bt() == 32));
}
function Eu(e) {
  for (; bt(); )
    switch (Te) {
      case e:
        return Et;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Eu(Te);
        break;
      case 40:
        e === 41 && Eu(e);
        break;
      case 92:
        bt();
        break;
    }
  return Et;
}
function ik(e, t) {
  for (; bt() && e + Te !== 57; ) if (e + Te === 84 && Fn() === 47) break;
  return "/*" + Ns(t, Et - 1) + "*" + Gc(e === 47 ? e : bt());
}
function lk(e) {
  for (; !Ru(Fn()); ) bt();
  return Ns(e, Et);
}
function sk(e) {
  return nk(nl("", null, null, null, [""], (e = tk(e)), 0, [0], e));
}
function nl(e, t, n, r, o, i, l, s, a) {
  for (
    var u = 0,
      d = 0,
      f = l,
      m = 0,
      y = 0,
      v = 0,
      g = 1,
      x = 1,
      p = 1,
      c = 0,
      h = "",
      E = o,
      k = i,
      T = r,
      N = h;
    x;

  )
    switch (((v = c), (c = bt()))) {
      case 40:
        if (v != 108 && je(N, f - 1) == 58) {
          el((N += J(da(c), "&", "&\f")), "&\f", Xv(u ? s[u - 1] : 0)) != -1 &&
            (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        N += da(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        N += rk(v);
        break;
      case 92:
        N += ok(tl() - 1, 7);
        continue;
      case 47:
        switch (Fn()) {
          case 42:
          case 47:
            So(ak(ik(bt(), tl()), t, n, a), a);
            break;
          default:
            N += "/";
        }
        break;
      case 123 * g:
        s[u++] = Ot(N) * p;
      case 125 * g:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            x = 0;
          case 59 + d:
            p == -1 && (N = J(N, /\f/g, "")),
              y > 0 &&
                Ot(N) - f &&
                So(
                  y > 32
                    ? Wd(N + ";", r, n, f - 1, a)
                    : Wd(J(N, " ", "") + ";", r, n, f - 2, a),
                  a
                );
            break;
          case 59:
            N += ";";
          default:
            if (
              (So(
                (T = Bd(N, t, n, u, d, o, s, h, (E = []), (k = []), f, i)),
                i
              ),
              c === 123)
            )
              if (d === 0) nl(N, t, T, T, E, i, f, s, k);
              else
                switch (m === 99 && je(N, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    nl(
                      e,
                      T,
                      T,
                      r && So(Bd(e, T, T, 0, 0, o, s, h, o, (E = []), f, k), k),
                      o,
                      k,
                      f,
                      s,
                      r ? E : k
                    );
                    break;
                  default:
                    nl(N, T, T, T, [""], k, 0, s, k);
                }
        }
        (u = d = y = 0), (g = p = 1), (h = N = ""), (f = l);
        break;
      case 58:
        (f = 1 + Ot(N)), (y = v);
      default:
        if (g < 1) {
          if (c == 123) --g;
          else if (c == 125 && g++ == 0 && ek() == 125) continue;
        }
        switch (((N += Gc(c)), c * g)) {
          case 38:
            p = d > 0 ? 1 : ((N += "\f"), -1);
            break;
          case 44:
            (s[u++] = (Ot(N) - 1) * p), (p = 1);
            break;
          case 64:
            Fn() === 45 && (N += da(bt())),
              (m = Fn()),
              (d = f = Ot((h = N += lk(tl())))),
              c++;
            break;
          case 45:
            v === 45 && Ot(N) == 2 && (g = 0);
        }
    }
  return i;
}
function Bd(e, t, n, r, o, i, l, s, a, u, d, f) {
  for (
    var m = o - 1, y = o === 0 ? i : [""], v = qv(y), g = 0, x = 0, p = 0;
    g < r;
    ++g
  )
    for (var c = 0, h = Or(e, m + 1, (m = Xv((x = l[g])))), E = e; c < v; ++c)
      (E = Zv(x > 0 ? y[c] + " " + h : J(h, /&\f/g, y[c]))) && (a[p++] = E);
  return xs(e, t, n, o === 0 ? Rs : s, a, u, d, f);
}
function ak(e, t, n, r) {
  return xs(e, t, n, Qv, Gc(JN()), Or(e, 2, -2), 0, r);
}
function Wd(e, t, n, r, o) {
  return xs(e, t, n, Hc, Or(e, 0, r), Or(e, r + 1, -1), r, o);
}
function ey(e, t, n) {
  switch (ZN(e, t)) {
    case 5103:
      return ae + "print-" + e + e;
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
      return ae + e + e;
    case 4789:
      return Po + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + e + Po + e + he + e + e;
    case 5936:
      switch (je(e, t + 11)) {
        case 114:
          return ae + e + he + J(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ae + e + he + J(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ae + e + he + J(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ae + e + he + e + e;
    case 6165:
      return ae + e + he + "flex-" + e + e;
    case 5187:
      return (
        ae + e + J(e, /(\w+).+(:[^]+)/, ae + "box-$1$2" + he + "flex-$1$2") + e
      );
    case 5443:
      return (
        ae +
        e +
        he +
        "flex-item-" +
        J(e, /flex-|-self/g, "") +
        (Gt(e, /flex-|baseline/)
          ? ""
          : he + "grid-row-" + J(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        ae +
        e +
        he +
        "flex-line-pack" +
        J(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return ae + e + he + J(e, "shrink", "negative") + e;
    case 5292:
      return ae + e + he + J(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        ae +
        "box-" +
        J(e, "-grow", "") +
        ae +
        e +
        he +
        J(e, "grow", "positive") +
        e
      );
    case 4554:
      return ae + J(e, /([^-])(transform)/g, "$1" + ae + "$2") + e;
    case 6187:
      return (
        J(J(J(e, /(zoom-|grab)/, ae + "$1"), /(image-set)/, ae + "$1"), e, "") +
        e
      );
    case 5495:
    case 3959:
      return J(e, /(image-set\([^]*)/, ae + "$1$`$1");
    case 4968:
      return (
        J(
          J(e, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + he + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ae +
        e +
        e
      );
    case 4200:
      if (!Gt(e, /flex-|baseline/))
        return he + "grid-column-align" + Or(e, t) + e;
      break;
    case 2592:
    case 3360:
      return he + J(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, o) {
          return (t = o), Gt(r.props, /grid-\w+-end/);
        })
        ? ~el(e + (n = n[t].value), "span", 0)
          ? e
          : he +
            J(e, "-start", "") +
            e +
            he +
            "grid-row-span:" +
            (~el(n, "span", 0) ? Gt(n, /\d+/) : +Gt(n, /\d+/) - +Gt(e, /\d+/)) +
            ";"
        : he + J(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Gt(r.props, /grid-\w+-start/);
        })
        ? e
        : he + J(J(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return J(e, /(.+)-inline(.+)/, ae + "$1$2") + e;
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
      if (Ot(e) - 1 - t > 6)
        switch (je(e, t + 1)) {
          case 109:
            if (je(e, t + 4) !== 45) break;
          case 102:
            return (
              J(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ae +
                  "$2-$3$1" +
                  Po +
                  (je(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~el(e, "stretch", 0)
              ? ey(J(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return J(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, o, i, l, s, a, u) {
          return (
            he +
            o +
            ":" +
            i +
            u +
            (l ? he + o + "-span:" + (s ? a : +a - +i) + u : "") +
            e
          );
        }
      );
    case 4949:
      if (je(e, t + 6) === 121) return J(e, ":", ":" + ae) + e;
      break;
    case 6444:
      switch (je(e, je(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            J(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                ae +
                (je(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ae +
                "$2$3$1" +
                he +
                "$2box$3"
            ) + e
          );
        case 100:
          return J(e, ":", ":" + he) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return J(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ml(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function uk(e, t, n, r) {
  switch (e.type) {
    case XN:
      if (e.children.length) break;
    case YN:
    case Hc:
      return (e.return = e.return || e.value);
    case Qv:
      return "";
    case Yv:
      return (e.return = e.value + "{" + Ml(e.children, r) + "}");
    case Rs:
      if (!Ot((e.value = e.props.join(",")))) return "";
  }
  return Ot((n = Ml(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function ck(e) {
  var t = qv(e);
  return function (n, r, o, i) {
    for (var l = "", s = 0; s < t; s++) l += e[s](n, r, o, i) || "";
    return l;
  };
}
function fk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function dk(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Hc:
        e.return = ey(e.value, e.length, n);
        return;
      case Yv:
        return Ml([ln(e, { value: J(e.value, "@", "@" + ae) })], r);
      case Rs:
        if (e.length)
          return qN((n = e.props), function (o) {
            switch (Gt(o, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                ir(ln(e, { props: [J(o, /:(read-\w+)/, ":" + Po + "$1")] })),
                  ir(ln(e, { props: [o] })),
                  _u(e, { props: Fd(n, r) });
                break;
              case "::placeholder":
                ir(
                  ln(e, { props: [J(o, /:(plac\w+)/, ":" + ae + "input-$1")] })
                ),
                  ir(ln(e, { props: [J(o, /:(plac\w+)/, ":" + Po + "$1")] })),
                  ir(ln(e, { props: [J(o, /:(plac\w+)/, he + "input-$1")] })),
                  ir(ln(e, { props: [o] })),
                  _u(e, { props: Fd(n, r) });
                break;
            }
            return "";
          });
    }
}
var pk = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  st = {},
  zr =
    (typeof process < "u" &&
      st !== void 0 &&
      (st.REACT_APP_SC_ATTR || st.SC_ATTR)) ||
    "data-styled",
  ty = "active",
  ny = "data-styled-version",
  ks = "6.1.8",
  Kc = `/*!sc*/
`,
  Qc = typeof window < "u" && "HTMLElement" in window,
  hk = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      st !== void 0 &&
      st.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      st.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? st.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      st.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      st !== void 0 &&
      st.SC_DISABLE_SPEEDY !== void 0 &&
      st.SC_DISABLE_SPEEDY !== "" &&
      st.SC_DISABLE_SPEEDY !== "false" &&
      st.SC_DISABLE_SPEEDY),
  Cs = Object.freeze([]),
  Fr = Object.freeze({});
function mk(e, t, n) {
  return (
    n === void 0 && (n = Fr), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var ry = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  vk = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  yk = /(^-|-$)/g;
function Hd(e) {
  return e.replace(vk, "-").replace(yk, "");
}
var gk = /(a)(d)/gi,
  Oi = 52,
  Gd = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function xu(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > Oi; t = (t / Oi) | 0) n = Gd(t % Oi) + n;
  return (Gd(t % Oi) + n).replace(gk, "$1-$2");
}
var pa,
  oy = 5381,
  gr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  iy = function (e) {
    return gr(oy, e);
  };
function ly(e) {
  return xu(iy(e) >>> 0);
}
function Sk(e) {
  return e.displayName || e.name || "Component";
}
function ha(e) {
  return typeof e == "string" && !0;
}
var sy = typeof Symbol == "function" && Symbol.for,
  ay = sy ? Symbol.for("react.memo") : 60115,
  wk = sy ? Symbol.for("react.forward_ref") : 60112,
  _k = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Rk = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  uy = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Ek =
    (((pa = {})[wk] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (pa[ay] = uy),
    pa);
function Kd(e) {
  return ("type" in (t = e) && t.type.$$typeof) === ay
    ? uy
    : "$$typeof" in e
    ? Ek[e.$$typeof]
    : _k;
  var t;
}
var xk = Object.defineProperty,
  Nk = Object.getOwnPropertyNames,
  Qd = Object.getOwnPropertySymbols,
  kk = Object.getOwnPropertyDescriptor,
  Ck = Object.getPrototypeOf,
  Yd = Object.prototype;
function cy(e, t, n) {
  if (typeof t != "string") {
    if (Yd) {
      var r = Ck(t);
      r && r !== Yd && cy(e, r, n);
    }
    var o = Nk(t);
    Qd && (o = o.concat(Qd(t)));
    for (var i = Kd(e), l = Kd(t), s = 0; s < o.length; ++s) {
      var a = o[s];
      if (!(a in Rk || (n && n[a]) || (l && a in l) || (i && a in i))) {
        var u = kk(t, a);
        try {
          xk(e, a, u);
        } catch {}
      }
    }
  }
  return e;
}
function Br(e) {
  return typeof e == "function";
}
function Yc(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Vn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Nu(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function Jo(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function ku(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Jo(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = ku(e[r], t[r]);
  else if (Jo(t)) for (var r in t) e[r] = ku(e[r], t[r]);
  return e;
}
function Xc(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function mi(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var Tk = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
            if ((i <<= 1) < 0) throw mi(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(r),
            (this.length = i);
          for (var l = o; l < i; l++) this.groupSizes[l] = 0;
        }
        for (
          var s = this.indexOfGroup(t + 1), a = ((l = 0), n.length);
          l < a;
          l++
        )
          this.tag.insertRule(s, n[l]) && (this.groupSizes[t]++, s++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < o; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            o = this.indexOfGroup(t),
            i = o + r,
            l = o;
          l < i;
          l++
        )
          n += "".concat(this.tag.getRule(l)).concat(Kc);
        return n;
      }),
      e
    );
  })(),
  rl = new Map(),
  bl = new Map(),
  ol = 1,
  Ui = function (e) {
    if (rl.has(e)) return rl.get(e);
    for (; bl.has(ol); ) ol++;
    var t = ol++;
    return rl.set(e, t), bl.set(t, e), t;
  },
  Lk = function (e, t) {
    (ol = t + 1), rl.set(e, t), bl.set(t, e);
  },
  $k = "style[".concat(zr, "][").concat(ny, '="').concat(ks, '"]'),
  Ak = new RegExp(
    "^".concat(zr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  Pk = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, l = o.length; i < l; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  Ik = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Kc),
        o = [],
        i = 0,
        l = r.length;
      i < l;
      i++
    ) {
      var s = r[i].trim();
      if (s) {
        var a = s.match(Ak);
        if (a) {
          var u = 0 | parseInt(a[1], 10),
            d = a[2];
          u !== 0 && (Lk(d, u), Pk(e, d, a[3]), e.getTag().insertRules(u, o)),
            (o.length = 0);
        } else o.push(s);
      }
    }
  };
function Mk() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var fy = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (s) {
        var a = Array.from(s.querySelectorAll("style[".concat(zr, "]")));
        return a[a.length - 1];
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(zr, ty), r.setAttribute(ny, ks);
    var l = Mk();
    return l && r.setAttribute("nonce", l), n.insertBefore(r, i), r;
  },
  bk = (function () {
    function e(t) {
      (this.element = fy(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
            var l = r[o];
            if (l.ownerNode === n) return l;
          }
          throw mi(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  Dk = (function () {
    function e(t) {
      (this.element = fy(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  jk = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Xd = Qc,
  Vk = { isServer: !Qc, useCSSOMInjection: !hk },
  dy = (function () {
    function e(t, n, r) {
      t === void 0 && (t = Fr), n === void 0 && (n = {});
      var o = this;
      (this.options = et(et({}, Vk), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Qc &&
          Xd &&
          ((Xd = !1),
          (function (i) {
            for (
              var l = document.querySelectorAll($k), s = 0, a = l.length;
              s < a;
              s++
            ) {
              var u = l[s];
              u &&
                u.getAttribute(zr) !== ty &&
                (Ik(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        Xc(this, function () {
          return (function (i) {
            for (
              var l = i.getTag(),
                s = l.length,
                a = "",
                u = function (f) {
                  var m = (function (p) {
                    return bl.get(p);
                  })(f);
                  if (m === void 0) return "continue";
                  var y = i.names.get(m),
                    v = l.getGroup(f);
                  if (y === void 0 || v.length === 0) return "continue";
                  var g = ""
                      .concat(zr, ".g")
                      .concat(f, '[id="')
                      .concat(m, '"]'),
                    x = "";
                  y !== void 0 &&
                    y.forEach(function (p) {
                      p.length > 0 && (x += "".concat(p, ","));
                    }),
                    (a += ""
                      .concat(v)
                      .concat(g, '{content:"')
                      .concat(x, '"}')
                      .concat(Kc));
                },
                d = 0;
              d < s;
              d++
            )
              u(d);
            return a;
          })(o);
        });
    }
    return (
      (e.registerId = function (t) {
        return Ui(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            et(et({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                o = n.target;
              return n.isServer ? new jk(o) : r ? new bk(o) : new Dk(o);
            })(this.options)),
            new Tk(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Ui(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(Ui(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Ui(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  Ok = /&/g,
  Uk = /^\s*\/\/.*$/gm;
function py(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = py(n.children, t)),
      n
    );
  });
}
function zk(e) {
  var t,
    n,
    r,
    o = e === void 0 ? Fr : e,
    i = o.options,
    l = i === void 0 ? Fr : i,
    s = o.plugins,
    a = s === void 0 ? Cs : s,
    u = function (m, y, v) {
      return v.startsWith(n) && v.endsWith(n) && v.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : m;
    },
    d = a.slice();
  d.push(function (m) {
    m.type === Rs &&
      m.value.includes("&") &&
      (m.props[0] = m.props[0].replace(Ok, n).replace(r, u));
  }),
    l.prefix && d.push(dk),
    d.push(uk);
  var f = function (m, y, v, g) {
    y === void 0 && (y = ""),
      v === void 0 && (v = ""),
      g === void 0 && (g = "&"),
      (t = g),
      (n = y),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var x = m.replace(Uk, ""),
      p = sk(v || y ? "".concat(v, " ").concat(y, " { ").concat(x, " }") : x);
    l.namespace && (p = py(p, l.namespace));
    var c = [];
    return (
      Ml(
        p,
        ck(
          d.concat(
            fk(function (h) {
              return c.push(h);
            })
          )
        )
      ),
      c
    );
  };
  return (
    (f.hash = a.length
      ? a
          .reduce(function (m, y) {
            return y.name || mi(15), gr(m, y.name);
          }, oy)
          .toString()
      : ""),
    f
  );
}
var Fk = new dy(),
  Cu = zk(),
  hy = se.createContext({
    shouldForwardProp: void 0,
    styleSheet: Fk,
    stylis: Cu,
  });
hy.Consumer;
se.createContext(void 0);
function Zd() {
  return C.useContext(hy);
}
var my = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = Cu);
        var l = r.name + i.hash;
        o.hasNameForId(r.id, l) ||
          o.insertRules(r.id, l, i(r.rules, l, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Xc(this, function () {
          throw mi(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Cu), this.name + t.hash;
      }),
      e
    );
  })(),
  Bk = function (e) {
    return e >= "A" && e <= "Z";
  };
function qd(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Bk(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var vy = function (e) {
    return e == null || e === !1 || e === "";
  },
  yy = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var i = e[o];
      e.hasOwnProperty(o) &&
        !vy(i) &&
        ((Array.isArray(i) && i.isCss) || Br(i)
          ? r.push("".concat(qd(o), ":"), i, ";")
          : Jo(i)
          ? r.push.apply(r, qo(qo(["".concat(o, " {")], yy(i), !1), ["}"], !1))
          : r.push(
              ""
                .concat(qd(o), ": ")
                .concat(
                  ((t = o),
                  (n = i) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in pk ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function Bn(e, t, n, r) {
  if (vy(e)) return [];
  if (Yc(e)) return [".".concat(e.styledComponentId)];
  if (Br(e)) {
    if (!Br((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
      return [e];
    var o = e(t);
    return Bn(o, t, n, r);
  }
  var i;
  return e instanceof my
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Jo(e)
    ? yy(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Cs,
        e.map(function (l) {
          return Bn(l, t, n, r);
        })
      )
    : [e.toString()];
}
function Wk(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Br(n) && !Yc(n)) return !1;
  }
  return !0;
}
var Hk = iy(ks),
  Gk = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && Wk(t)),
        (this.componentId = n),
        (this.baseHash = gr(Hk, n)),
        (this.baseStyle = r),
        dy.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            o = Vn(o, this.staticRulesId);
          else {
            var i = Nu(Bn(this.rules, t, n, r)),
              l = xu(gr(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, l)) {
              var s = r(i, ".".concat(l), void 0, this.componentId);
              n.insertRules(this.componentId, l, s);
            }
            (o = Vn(o, l)), (this.staticRulesId = l);
          }
        else {
          for (
            var a = gr(this.baseHash, r.hash), u = "", d = 0;
            d < this.rules.length;
            d++
          ) {
            var f = this.rules[d];
            if (typeof f == "string") u += f;
            else if (f) {
              var m = Nu(Bn(f, t, n, r));
              (a = gr(a, m + d)), (u += m);
            }
          }
          if (u) {
            var y = xu(a >>> 0);
            n.hasNameForId(this.componentId, y) ||
              n.insertRules(
                this.componentId,
                y,
                r(u, ".".concat(y), void 0, this.componentId)
              ),
              (o = Vn(o, y));
          }
        }
        return o;
      }),
      e
    );
  })(),
  gy = se.createContext(void 0);
gy.Consumer;
var ma = {};
function Kk(e, t, n) {
  var r = Yc(e),
    o = e,
    i = !ha(e),
    l = t.attrs,
    s = l === void 0 ? Cs : l,
    a = t.componentId,
    u =
      a === void 0
        ? (function (E, k) {
            var T = typeof E != "string" ? "sc" : Hd(E);
            ma[T] = (ma[T] || 0) + 1;
            var N = "".concat(T, "-").concat(ly(ks + T + ma[T]));
            return k ? "".concat(k, "-").concat(N) : N;
          })(t.displayName, t.parentComponentId)
        : a,
    d = t.displayName,
    f =
      d === void 0
        ? (function (E) {
            return ha(E) ? "styled.".concat(E) : "Styled(".concat(Sk(E), ")");
          })(e)
        : d,
    m =
      t.displayName && t.componentId
        ? "".concat(Hd(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    y = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s,
    v = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var x = t.shouldForwardProp;
      v = function (E, k) {
        return g(E, k) && x(E, k);
      };
    } else v = g;
  }
  var p = new Gk(n, m, r ? o.componentStyle : void 0);
  function c(E, k) {
    return (function (T, N, I) {
      var X = T.attrs,
        z = T.componentStyle,
        oe = T.defaultProps,
        ye = T.foldedComponentIds,
        le = T.styledComponentId,
        Ie = T.target,
        xt = se.useContext(gy),
        Me = Zd(),
        Oe = T.shouldForwardProp || Me.shouldForwardProp,
        b = mk(N, xt, oe) || Fr,
        B = (function (H, D, Y) {
          for (
            var Z, F = et(et({}, D), { className: void 0, theme: Y }), ce = 0;
            ce < H.length;
            ce += 1
          ) {
            var ge = Br((Z = H[ce])) ? Z(F) : Z;
            for (var ne in ge)
              F[ne] =
                ne === "className"
                  ? Vn(F[ne], ge[ne])
                  : ne === "style"
                  ? et(et({}, F[ne]), ge[ne])
                  : ge[ne];
          }
          return D.className && (F.className = Vn(F.className, D.className)), F;
        })(X, N, b),
        M = B.as || Ie,
        W = {};
      for (var w in B)
        B[w] === void 0 ||
          w[0] === "$" ||
          w === "as" ||
          (w === "theme" && B.theme === b) ||
          (w === "forwardedAs"
            ? (W.as = B.forwardedAs)
            : (Oe && !Oe(w, M)) || (W[w] = B[w]));
      var A = (function (H, D) {
          var Y = Zd(),
            Z = H.generateAndInjectStyles(D, Y.styleSheet, Y.stylis);
          return Z;
        })(z, B),
        P = Vn(ye, le);
      return (
        A && (P += " " + A),
        B.className && (P += " " + B.className),
        (W[ha(M) && !ry.has(M) ? "class" : "className"] = P),
        (W.ref = I),
        C.createElement(M, W)
      );
    })(h, E, k);
  }
  c.displayName = f;
  var h = se.forwardRef(c);
  return (
    (h.attrs = y),
    (h.componentStyle = p),
    (h.displayName = f),
    (h.shouldForwardProp = v),
    (h.foldedComponentIds = r
      ? Vn(o.foldedComponentIds, o.styledComponentId)
      : ""),
    (h.styledComponentId = m),
    (h.target = r ? o.target : e),
    Object.defineProperty(h, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (E) {
        this._foldedDefaultProps = r
          ? (function (k) {
              for (var T = [], N = 1; N < arguments.length; N++)
                T[N - 1] = arguments[N];
              for (var I = 0, X = T; I < X.length; I++) ku(k, X[I], !0);
              return k;
            })({}, o.defaultProps, E)
          : E;
      },
    }),
    Xc(h, function () {
      return ".".concat(h.styledComponentId);
    }),
    i &&
      cy(h, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    h
  );
}
function Jd(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var ep = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function Sy(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Br(e) || Jo(e)) return ep(Bn(Jd(Cs, qo([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? Bn(r)
    : ep(Bn(Jd(r, t)));
}
function Tu(e, t, n) {
  if ((n === void 0 && (n = Fr), !t)) throw mi(1, t);
  var r = function (o) {
    for (var i = [], l = 1; l < arguments.length; l++) i[l - 1] = arguments[l];
    return e(t, n, Sy.apply(void 0, qo([o], i, !1)));
  };
  return (
    (r.attrs = function (o) {
      return Tu(
        e,
        t,
        et(et({}, n), {
          attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (o) {
      return Tu(e, t, et(et({}, n), o));
    }),
    r
  );
}
var wy = function (e) {
    return Tu(Kk, e);
  },
  tr = wy;
ry.forEach(function (e) {
  tr[e] = wy(e);
});
function Zc(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = Nu(Sy.apply(void 0, qo([e], t, !1))),
    o = ly(r);
  return new my(o, r);
}
const Qk = "#4fa94d",
  Yk = { "aria-busy": !0, role: "progressbar" },
  Xk = tr.div`
  display: ${(e) => (e.$visible ? "flex" : "none")};
`,
  Zk = "http://www.w3.org/2000/svg",
  Lt = 242.776657104492,
  qk = 1.6,
  Jk = Zc`
12.5% {
  stroke-dasharray: ${Lt * 0.14}px, ${Lt}px;
  stroke-dashoffset: -${Lt * 0.11}px;
}
43.75% {
  stroke-dasharray: ${Lt * 0.35}px, ${Lt}px;
  stroke-dashoffset: -${Lt * 0.35}px;
}
100% {
  stroke-dasharray: ${Lt * 0.01}px, ${Lt}px;
  stroke-dashoffset: -${Lt * 0.99}px;
}
`;
tr.path`
  stroke-dasharray: ${Lt * 0.01}px, ${Lt};
  stroke-dashoffset: 0;
  animation: ${Jk} ${qk}s linear infinite;
`;
const eC = Zc`
to {
   transform: rotate(360deg);
 }
`;
tr.svg`
  animation: ${eC} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;
tr.polyline`
  stroke-width: ${(e) => e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;
const tC = "-3 -4 39 39",
  nC = "16,0 32,32 0,32",
  rC = Zc`
to {
   stroke-dashoffset: 136;
 }
`,
  oC = tr.polygon`
  stroke-dasharray: 17;
  animation: ${rC} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,
  iC = tr.svg`
  transform-origin: 50% 65%;
`,
  lC = ({
    height: e = 80,
    width: t = 80,
    color: n = Qk,
    ariaLabel: r = "triangle-loading",
    wrapperStyle: o,
    wrapperClass: i,
    visible: l = !0,
  }) =>
    _.jsx(Xk, {
      style: o,
      $visible: l,
      className: `${i}`,
      "data-testid": "triangle-loading",
      "aria-label": r,
      ...Yk,
      children: _.jsx(iC, {
        id: "triangle",
        width: t,
        height: e,
        xmlns: Zk,
        viewBox: tC,
        "data-testid": "triangle-svg",
        children: _.jsx(oC, {
          fill: "transparent",
          stroke: n,
          strokeWidth: "1",
          points: nC,
        }),
      }),
    });
function sC({ data: e }) {
  const t = Fc(Gv),
    { url: n, title: r, price: o } = e,
    [i, l] = C.useState(!0),
    s = C.useRef(),
    a = C.useRef();
  return _.jsxs("div", {
    className:
      "flex relative flex-col m-5 justify-center items-center border-[1px] border-slate-50 z-0",
    children: [
      _.jsxs("div", {
        className: "w-64 hidden",
        ref: s,
        children: [
          _.jsxs("div", {
            className:
              "h-[300px] w-100 flex justify-center items-center  hover:cursor-pointer border-[1px] border-slate-50 relative z-0",
            onMouseEnter: () => a.current.classList.remove("hidden"),
            onMouseLeave: () => a.current.classList.add("hidden"),
            children: [
              _.jsx("div", {
                className:
                  "b-4 border-8 border-black p-2 bg-blue-100 flex justify-center items-center shrink",
                children: _.jsx("img", {
                  className: "max-h-[240px] z-0",
                  src: `${n}`,
                  alt: "img",
                  onLoad: () => {
                    l(!1), s.current.classList.remove("hidden");
                  },
                }),
              }),
              _.jsxs("div", {
                ref: a,
                className:
                  "absolute top-0 left-0 h-full w-full bg-slate-600/25 hidden flex flex-col justify-center items-center gap-3 z-0",
                children: [
                  _.jsx("div", {
                    className:
                      "px-3 py-2 w-36 m-2 text-center border-[1px] bg-white border-black cursor-pointer",
                    onClick: () => t(n),
                    children: "Zoom",
                  }),
                  _.jsx("div", {
                    className:
                      "px-3 py-2 w-36 m-2 text-center text-white bg-black cursor-pointer",
                    children: "Add To Card",
                  }),
                ],
              }),
            ],
          }),
          _.jsxs("div", {
            className: "p-4 min-w-100 flex justify-between",
            children: [
              _.jsx("div", { children: r }),
              _.jsxs("div", { className: "font-semibold", children: ["$", o] }),
            ],
          }),
        ],
      }),
      i
        ? _.jsx(lC, {
            visible: !0,
            height: "80",
            width: "80",
            color: "#000000",
            ariaLabel: "triangle-loading",
            wrapperStyle: {},
            wrapperClass: "",
          })
        : null,
    ],
  });
}
function aC({ min: e, max: t, setMin: n, setMax: r }) {
  const [o, i] = C.useState(!1),
    [l, s] = C.useState(!1),
    a = C.useRef(),
    [u, d] = C.useState(12),
    [f, m] = C.useState(12),
    { maxPrice: y } = Vr(Wc);
  function v(g) {
    if (o) {
      const x = a.current.getBoundingClientRect(),
        p = g.clientX - x.left;
      if (p < 12 || p + f >= x.width) return;
      d(p), n(Math.floor(((p - 12) / x.width) * y));
    }
    if (l) {
      const x = a.current.getBoundingClientRect(),
        p = g.clientX - x.left,
        c = x.width - p;
      if (c <= 12 || c + u >= x.width) return;
      m(c), r(Math.ceil(((p + 12) / x.width) * y));
    }
  }
  return (
    C.useEffect(() => {
      function g() {
        i(!1), s(!1);
      }
      return (
        window.addEventListener("mouseup", g),
        () => window.removeEventListener("mouseup", g)
      );
    }, []),
    _.jsxs("div", {
      className: "w-full flex items-center gap-1",
      children: [
        _.jsxs("div", { children: ["$", e < 10 ? `0${e}` : e] }),
        _.jsxs("div", {
          ref: a,
          className:
            "w-full relative h-6 flex items-center overflow-hidden cursor-pointer",
          onMouseMove: v,
          children: [
            _.jsx("div", { className: "w-full h-1 bg-black" }),
            _.jsxs("div", {
              className:
                "w-full h-full absolute top-0 z-10 translate-x-[-100%] flex items-center",
              style: { left: u },
              children: [
                _.jsx("div", { className: "w-full h-1 bg-slate-100" }),
                _.jsx("div", {
                  className:
                    "h-3 w-3 rounded-[50%] border-[1px] border-black bg-white cursor-pointer",
                  onMouseDown: () => i(!0),
                }),
              ],
            }),
            _.jsxs("div", {
              className:
                "w-full h-full absolute top-0 z-10 translate-x-full flex items-center",
              style: { right: f },
              children: [
                _.jsx("div", {
                  className:
                    " h-3 w-3 rounded-[50%] border-[1px] border-black bg-white cursor-pointer",
                  onMouseDown: () => s(!0),
                }),
                _.jsx("div", { className: "w-full h-1 bg-slate-100" }),
              ],
            }),
          ],
        }),
        _.jsxs("div", { children: ["$", t < 10 ? `0${t}` : t] }),
      ],
    })
  );
}
function tp({ setFilteredList: e }) {
  const [t, n] = C.useState([]),
    r = Vr(Bc),
    { categories: o, minPrice: i, maxPrice: l } = Vr(Wc),
    [s, a] = C.useState(i),
    [u, d] = C.useState(l),
    [f, m] = C.useState(0);
  D1(),
    C.useEffect(() => {
      a(i), d(l);
    }, [i, l]);
  function y() {
    const x = [];
    r.forEach((p) => {
      const c = parseFloat(p.price);
      t.length > 0
        ? t.forEach((h) => {
            h == p.category && c >= s && c <= u && x.push(p);
          })
        : c <= u && c >= s && x.push(p);
    }),
      f != 0 &&
        x.sort((p, c) =>
          f == -1
            ? parseFloat(p.price) >= parseFloat(c.price)
            : parseFloat(p.price) <= parseFloat(c.price)
        ),
      e(x);
  }
  function v() {
    n([]), a(i), d(l), m(0), e(r);
  }
  function g(x) {
    const p = t.findIndex((c) => c == x);
    p == -1 ? n([...t, x]) : (t.splice(p, 1), n([...t]));
  }
  return _.jsxs("div", {
    className: "w-full box-border flex flex-col items-start gap-4 p-4",
    children: [
      _.jsx("div", { className: "font-bold md:hidden", children: "Filters" }),
      _.jsxs("div", {
        children: [
          _.jsx("div", { className: "font-bold", children: "Categories" }),
          o.map((x, p) =>
            _.jsxs(
              "div",
              {
                className: "flex items-center gap-4",
                children: [
                  _.jsx("div", {
                    className:
                      "check-box h-[14px] w-[14px] border-[1px] border-black cursor-pointer",
                    onClick: (c) => {
                      c.target.classList.toggle("bg-black"), g(x);
                    },
                  }),
                  x.toUpperCase(),
                ],
              },
              p
            )
          ),
        ],
      }),
      _.jsxs("div", {
        className: "w-full",
        children: [
          _.jsx("div", { className: "font-bold", children: "Price" }),
          _.jsx("div", {
            className: "w-full flex items-center gap-1",
            children: _.jsx(aC, { min: s, setMin: a, max: u, setMax: d }),
          }),
        ],
      }),
      _.jsxs("div", {
        children: [
          _.jsx("div", { className: "font-bold", children: "Sort By" }),
          _.jsx("div", {
            className: `text-sm p-2 border-[1px] border-black cursor-pointer my-2 ${
              f == -1 ? "bg-black text-white" : ""
            }`,
            onClick: () => {
              f == -1 ? m(0) : m(-1);
            },
            children: "Price Low To High",
          }),
          _.jsx("div", {
            className: `text-sm p-2 border-[1px] border-black cursor-pointer my-2 ${
              f == 1 ? "bg-black text-white" : ""
            }`,
            onClick: () => {
              f == 1 ? m(0) : m(1);
            },
            children: "Price High To Low",
          }),
        ],
      }),
      _.jsxs("div", {
        className: "flex w-full justify-start gap-4 items-center",
        children: [
          _.jsx("div", {
            className:
              "h-10 w-16 text-md border-[1px] border-black cursor-pointer flex justify-center items-center",
            onClick: v,
            children: "Reset",
          }),
          _.jsx("div", {
            className:
              "h-10 w-16 text-md border-[1px] border-black cursor-pointer flex justify-center items-center text-white bg-black",
            onClick: y,
            children: "Apply",
          }),
        ],
      }),
    ],
  });
}
function uC() {
  const [e, t] = hi(Gv);
  return _.jsx(_.Fragment, {
    children: e
      ? _.jsxs("div", {
          className:
            "absolute top-0 left-0 h-dvh w-dvw flex justify-center items-center py-6 px-4 z-50",
          children: [
            _.jsx("div", {
              className: "absolute top-0 left-0 h-dvh w-dvw bg-black/25",
              onClick: () => t(""),
            }),
            _.jsx("div", {
              className: "h-full flex justify-center items-center z-50",
              onClick: () => t(""),
              children: _.jsx("div", {
                className: "border-[20px] bg-blue-100 border-black p-4",
                children: _.jsx("img", {
                  className: "max-h-[90dvh] max-w-full",
                  src: e,
                  alt: "",
                }),
              }),
            }),
          ],
        })
      : null,
  });
}
function cC() {
  const [e, t] = km({ search: "" }),
    [n, r] = hi(Bc),
    [o, i] = C.useState(null),
    l = Fc(Wc),
    s = C.useRef();
  C.useEffect(() => {
    fetch("https://shop.iusecookies64.xyz/products/bulk")
      .then((u) => u.json())
      .then((u) => {
        r(u), i(u);
        const d = new Set();
        let f = 100,
          m = 0;
        u.forEach((v) => {
          d.add(v.category),
            (f = Math.min(f, parseFloat(v.price))),
            (m = Math.max(m, parseFloat(v.price)));
        }),
          (f = Math.floor(f)),
          (m = Math.floor(m));
        const y = [];
        d.forEach((v) => y.push(v)),
          l({ categories: y, minPrice: f, maxPrice: m });
      });
  }, []);
  let a = 0;
  return _.jsxs("div", {
    className: "h-dvh w-dvw bg-white overflow-y-auto font-mono select-none",
    children: [
      _.jsx(QN, {}),
      _.jsxs("div", {
        className: "flex md:flex-row flex-col relative",
        children: [
          _.jsx("div", {
            className: "hidden w-1/5 min-w-64 md:block",
            children: _.jsx(tp, { setFilteredList: i }),
          }),
          _.jsxs("div", {
            className: "md:hidden",
            children: [
              _.jsx("div", {
                className:
                  "px-3 py-2 max-w-24 m-2 text-white bg-black cursor-pointer",
                onClick: () =>
                  s.current.classList.remove("translate-x-[-100%]"),
                children: "Filters",
              }),
              _.jsxs("div", {
                ref: s,
                className:
                  "w-full h-dvh absolute top-0 left-0 transition-all duration-300 translate-x-[-100%] bg-white",
                children: [
                  _.jsx("div", {
                    className: "max-w-64",
                    children: _.jsx(tp, { setFilteredList: i }),
                  }),
                  _.jsx("div", {
                    className:
                      "absolute top-0 right-0 m-4 h-6 w-6 flex justify-center items-center font-bold rounded-[50%] bg-black text-white cursor-pointer",
                    onClick: () =>
                      s.current.classList.add("translate-x-[-100%]"),
                    children: "X",
                  }),
                ],
              }),
            ],
          }),
          _.jsxs("div", {
            className:
              "flex p-4 relative w-full justify center items-center z-0",
            children: [
              o &&
                _.jsx("div", {
                  className:
                    "flex relative justify-center md:justify-start flex-wrap z-0",
                  children: o.map((u) =>
                    u.title
                      .toLowerCase()
                      .includes(e.get("search").toLowerCase())
                      ? (a++, _.jsx(sC, { data: u }, u.id))
                      : null
                  ),
                }),
              a ? null : "No Matched Items",
            ],
          }),
        ],
      }),
      _.jsx(uC, {}),
    ],
  });
}
function fC() {
  return _.jsxs("div", {
    className:
      "h-dvh w-dvw flex flex-col gap-4 justify-center items-center text-4xl font-bold",
    children: [
      _.jsx("div", { children: "Why are you here? 👺" }),
      _.jsx("div", { children: "404!" }),
    ],
  });
}
function dC() {
  return _.jsx("div", {
    className:
      "h-dvh w-dvh flex justify-center items-center font-mono select-none",
    children: _.jsxs("div", {
      className:
        "w-full max-w-[400px] p-2 flex flex-col items-center justify-center gap-3",
      children: [
        _.jsx("div", { className: "text-xl font-bold", children: "Sign Up" }),
        _.jsx(X1, {}),
      ],
    }),
  });
}
function ut({
  label: e,
  type: t,
  placeholder: n,
  setInput: r,
  onBlur: o,
  error: i,
  name: l,
  value: s,
}) {
  const [a, u] = C.useState(!1),
    d = C.useRef();
  return _.jsxs("div", {
    className: "w-full",
    children: [
      _.jsx("div", { className: "mb-2", children: e }),
      _.jsxs("div", {
        className: "relative",
        children: [
          _.jsx("input", {
            ref: d,
            className: "p-2 outline-none w-full border-[1px] border-black",
            type: t,
            placeholder: n,
            onChange: (f) => r(f.target.value),
            onBlur: o,
            name: l,
            value: s,
          }),
          t == "password"
            ? _.jsx("div", {
                className:
                  "h-full pr-2 absolute top-0 right-0 flex items-center cursor-pointer text-slate-400",
                onClick: () => {
                  d.current.type == "password"
                    ? (d.current.type = "text")
                    : (d.current.type = "password"),
                    u(!a);
                },
                children: a
                  ? _.jsx("i", { className: "fa-solid fa-eye-slash" })
                  : _.jsx("i", { className: "fa-solid fa-eye" }),
              })
            : null,
        ],
      }),
      i
        ? _.jsx("div", { className: "text-sm text-red-500", children: i })
        : null,
    ],
  });
}
function pC() {
  const [e, t] = C.useState(""),
    [n, r] = C.useState(""),
    [o, i] = C.useState(""),
    [l, s] = C.useState(""),
    [a, u] = C.useState(""),
    [d, f] = C.useState(""),
    [m, y] = C.useState(""),
    [v, g] = C.useState(""),
    x = Qr(),
    [p, c] = hi(_s);
  function h(k) {
    const T = k.target.name;
    T == "firstName"
      ? u(e ? "" : "First Name is Required")
      : T == "lastName"
      ? f(n ? "" : "Last Name is Required")
      : T == "email"
      ? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)
        ? y("")
        : y("Enter a valid email")
      : T == "password" &&
        (/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(l)
          ? g("")
          : g(
              "Password must be alteast 6 characters long and must contain atleast 1 capital letter and number"
            ));
  }
  C.useEffect(() => {
    t(p.firstName), r(p.lastName), i(p.email), s(p.password);
  }, []);
  function E() {
    !e ||
      !n ||
      !o ||
      !l ||
      (c((k) => ({ ...k, firstName: e, lastName: n, email: o, password: l })),
      x("/signup/2"));
  }
  return _.jsxs("div", {
    className:
      "w-full max-w-[400px] p-2 flex flex-col items-center justify-center gap-3",
    children: [
      _.jsx(ut, {
        type: "text",
        placeholder: "John",
        label: "First Name",
        name: "firstName",
        setInput: t,
        onBlur: h,
        error: a,
        value: e,
      }),
      _.jsx(ut, {
        type: "text",
        placeholder: "Doe",
        label: "Last Name",
        name: "lastName",
        setInput: r,
        onBlur: h,
        error: d,
        value: n,
      }),
      _.jsx(ut, {
        type: "text",
        placeholder: "johndoe@sample.com",
        label: "Email",
        name: "email",
        setInput: i,
        onBlur: h,
        error: m,
        value: o,
      }),
      _.jsx(ut, {
        type: "password",
        placeholder: "Password",
        label: "Password",
        name: "password",
        setInput: s,
        onBlur: h,
        error: v,
        value: l,
      }),
      _.jsxs("div", {
        className: "w-full flex justify-between items-center",
        children: [
          _.jsx("div", {
            className:
              "py-2 px-3 font-semibold border-[1px] border-black opacity-0",
            children: "Prev",
          }),
          a || d || m || v
            ? _.jsx("div", {
                className:
                  "py-2 px-3 font-semibold border-[1px] border-slate-700 bg-slate-700 text-white",
                children: "Next",
              })
            : _.jsx("div", {
                className:
                  "py-2 px-3 font-semibold border-[1px] border-black bg-black text-white cursor-pointer",
                onClick: E,
                children: "Next",
              }),
        ],
      }),
    ],
  });
}
function hC() {
  const e = Qr(),
    [t, n] = C.useState(""),
    [r, o] = C.useState(""),
    [i, l] = C.useState(""),
    [s, a] = C.useState(""),
    [u, d] = C.useState(""),
    [f, m] = C.useState(""),
    [y, v] = C.useState(""),
    [g] = C.useState(""),
    [x] = C.useState(""),
    [p, c] = C.useState(""),
    [h, E] = C.useState(""),
    [k, T] = C.useState(""),
    [N, I] = hi(_s);
  function X(oe) {
    const ye = oe.target.name;
    ye == "pin"
      ? oe.target.value.length != 5
        ? T("Enter A Valid Pin")
        : T("")
      : oe.target.value.length <= 3
      ? ye == "houseNumber"
        ? v("Enter Valid House Number")
        : ye == "state"
        ? c("Enter a Valid State")
        : ye == "country" && E("Enter a Valid country")
      : ye == "houseNumber"
      ? v("")
      : ye == "state"
      ? c("")
      : ye == "country" && E("");
  }
  function z(oe, ye = !1) {
    if (
      (I((le) => ({
        ...le,
        address: {
          houseNumber: t,
          lane: r,
          landmark: i,
          state: s,
          country: f,
          pin: u,
        },
      })),
      ye)
    )
      e(`/signup/${oe}`);
    else if (!t || !s || !f || !u) return;
    e(`/signup/${oe}`);
  }
  return (
    C.useEffect(() => {
      n(N.address.houseNumber),
        o(N.address.lane),
        l(N.address.landmark),
        a(N.address.state),
        m(N.address.country),
        d(N.address.pin);
    }, []),
    _.jsxs("div", {
      className:
        "w-full max-w-[400px] p-2 flex flex-col items-center justify-center gap-3",
      children: [
        _.jsx("div", { className: "w-full font-bold", children: "Address" }),
        _.jsx(ut, {
          type: "text",
          placeholder: "Block-7, Flat No-77",
          label: "House Number",
          name: "houseNumber",
          setInput: n,
          onBlur: X,
          error: y,
          value: t,
        }),
        _.jsx(ut, {
          type: "text",
          placeholder: "Lane 7",
          label: "Lane No.",
          name: "lane",
          setInput: o,
          onBlur: X,
          error: g,
          value: r,
        }),
        _.jsx(ut, {
          type: "text",
          placeholder: "Near Bank 77",
          label: "Landmark",
          name: "landmark",
          setInput: l,
          onBlur: X,
          error: x,
          value: i,
        }),
        _.jsx(ut, {
          type: "text",
          placeholder: "State7",
          label: "State",
          name: "state",
          setInput: a,
          onBlur: X,
          error: p,
          value: s,
        }),
        _.jsx(ut, {
          type: "text",
          placeholder: "Country .7",
          label: "Country",
          name: "country",
          setInput: m,
          onBlur: X,
          error: h,
          value: f,
        }),
        _.jsx(ut, {
          type: "text",
          placeholder: "77777",
          label: "Pin",
          name: "pin",
          setInput: d,
          onBlur: X,
          error: k,
          value: u,
        }),
        _.jsxs("div", {
          className: "w-full flex justify-between items-center",
          children: [
            _.jsx("div", {
              className:
                "py-2 px-3 font-semibold border-[1px] border-black cursor-pointer",
              onClick: () => z(1, !0),
              children: "Prev",
            }),
            y || g || x || p || h || k
              ? _.jsx("div", {
                  className:
                    "py-2 px-3 font-semibold border-[1px] border-slate-700 bg-slate-700 text-white",
                  children: "Next",
                })
              : _.jsx("div", {
                  className:
                    "py-2 px-3 font-semibold border-[1px] border-black bg-black text-white cursor-pointer",
                  onClick: () => z(3),
                  children: "Next",
                }),
          ],
        }),
      ],
    })
  );
}
function mC() {
  const e = Qr(),
    [t, n] = C.useState(""),
    [r, o] = C.useState(""),
    [i, l] = C.useState(""),
    [s, a] = C.useState(""),
    [u, d] = C.useState(""),
    [f, m] = C.useState(""),
    [y, v] = hi(_s);
  function g(p) {
    const c = p.target.name;
    c == "cardNumber"
      ? /^\d{16}$/.test(t)
        ? a("")
        : a("Enter a Valid Card Number")
      : c == "validTo"
      ? /^(0[1-9]|1[0-2])\/(2[2-9]|[3-9][0-9])$/.test(r)
        ? d("")
        : d("Invalid Expiry Date")
      : /^\d{3,4}$/.test(i)
      ? m("")
      : m("Enter a Valid CVV");
  }
  function x(p, c) {
    if (
      (v((h) => ({ ...h, payment: { cardNumber: t, validTo: r, cvv: i } })), c)
    ) {
      e(`/signup/${p}`);
      return;
    }
    !t || !r || !i || e("/signup/review");
  }
  return (
    C.useEffect(() => {
      n(y.payment.cardNumber), o(y.payment.validTo), l(y.payment.cvv);
    }, []),
    _.jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        _.jsx("div", {
          className: "font-semibold",
          children: "Payment Details",
        }),
        _.jsx(ut, {
          type: "text",
          placeholder: "XXXX XXXX XXXX XXXX",
          label: "Card Number",
          name: "cardNumber",
          setInput: n,
          onBlur: g,
          error: s,
          value: t,
        }),
        _.jsxs("div", {
          className: "flex gap-2",
          children: [
            _.jsx(ut, {
              type: "text",
              placeholder: "MM/YYYY",
              label: "Valid To",
              name: "validTo",
              setInput: o,
              onBlur: g,
              error: u,
              value: r,
            }),
            _.jsx(ut, {
              type: "text",
              placeholder: "XXX",
              label: "CVV",
              name: "cvv",
              setInput: l,
              onBlur: g,
              error: f,
              value: i,
            }),
          ],
        }),
        _.jsxs("div", {
          className: "w-full flex justify-between items-center",
          children: [
            _.jsx("div", {
              className:
                "py-2 px-3 font-semibold border-[1px] border-black cursor-pointer",
              onClick: () => x(2, !0),
              children: "Prev",
            }),
            s || u || f
              ? _.jsx("div", {
                  className:
                    "py-2 px-3 font-semibold border-[1px] border-slate-700 bg-slate-700 text-white",
                  children: "Next",
                })
              : _.jsx("div", {
                  className:
                    "py-2 px-3 font-semibold border-[1px] border-black bg-black text-white cursor-pointer",
                  onClick: x,
                  children: "Next",
                }),
          ],
        }),
      ],
    })
  );
}
function vC() {
  const e = Qr(),
    t = Fc(Kv),
    n = Vr(_s);
  return _.jsxs("div", {
    className: "flex flex-col gap-2",
    children: [
      _.jsxs("div", {
        children: [
          _.jsx("div", {
            className: "font-semibold",
            children: "Personal Info",
          }),
          _.jsxs("div", { children: ["First Name: ", n.firstName] }),
          _.jsxs("div", { children: ["Last Name: ", n.lastName] }),
          _.jsxs("div", { children: ["Email: ", n.email] }),
        ],
      }),
      _.jsxs("div", {
        children: [
          _.jsx("div", {
            className: "font-semibold",
            children: "Address Info",
          }),
          _.jsxs("div", {
            children: ["House Number: ", n.address.houseNumber, " "],
          }),
          _.jsxs("div", { children: ["Lane: ", n.address.lane, " "] }),
          _.jsxs("div", { children: ["Landmark: ", n.address.landMark, " "] }),
          _.jsxs("div", { children: ["State: ", n.address.state, " "] }),
          _.jsxs("div", { children: ["Country: ", n.address.country, " "] }),
          _.jsxs("div", { children: ["Pin: ", n.address.pin, " "] }),
        ],
      }),
      _.jsxs("div", {
        children: [
          _.jsx("div", {
            className: "font-semibold",
            children: "Payment Info",
          }),
          _.jsxs("div", { children: ["Card Number: ", n.payment.cardNumber] }),
          _.jsxs("div", { children: ["Valid To: ", n.payment.validTo] }),
          _.jsxs("div", { children: ["CVV: ", n.payment.cvv] }),
        ],
      }),
      _.jsxs("div", {
        className: "flex gap-8",
        children: [
          _.jsx("div", {
            className:
              "py-2 px-3 font-semibold border-[1px] border-black cursor-pointer",
            onClick: () => e("/signup/1"),
            children: "Edit",
          }),
          _.jsx("div", {
            className:
              "py-2 px-3 font-semibold border-[1px] border-black bg-black text-white cursor-pointer",
            onClick: () => {
              t(!0), e("/");
            },
            children: "Submit",
          }),
        ],
      }),
    ],
  });
}
function yC() {
  return _.jsxs(q1, {
    children: [
      _.jsx(on, { path: "/", element: _.jsx(cC, {}) }),
      _.jsxs(on, {
        path: "/signup",
        element: _.jsx(dC, {}),
        children: [
          _.jsx(on, { path: "1", element: _.jsx(pC, {}) }),
          _.jsx(on, { path: "2", element: _.jsx(hC, {}) }),
          _.jsx(on, { path: "3", element: _.jsx(mC, {}) }),
          _.jsx(on, { path: "review", element: _.jsx(vC, {}) }),
        ],
      }),
      _.jsx(on, { path: "*", element: _.jsx(fC, {}) }),
    ],
  });
}
va.createRoot(document.getElementById("root")).render(
  _.jsx(se.StrictMode, {
    children: _.jsx(tS, { children: _.jsx(GN, { children: _.jsx(yC, {}) }) }),
  })
);
