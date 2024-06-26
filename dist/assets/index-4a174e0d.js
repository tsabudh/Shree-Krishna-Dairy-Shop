var _0 = Object.defineProperty;
var b0 = (t, e, n) =>
    e in t
        ? _0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n);
var O = (t, e, n) => (b0(t, typeof e != 'symbol' ? e + '' : e, n), n);
(function () {
    const e = document.createElement('link').relList;
    if (e && e.supports && e.supports('modulepreload')) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        i(s);
    new MutationObserver((s) => {
        for (const r of s)
            if (r.type === 'childList')
                for (const o of r.addedNodes)
                    o.tagName === 'LINK' && o.rel === 'modulepreload' && i(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(s) {
        const r = {};
        return (
            s.integrity && (r.integrity = s.integrity),
            s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
            s.crossOrigin === 'use-credentials'
                ? (r.credentials = 'include')
                : s.crossOrigin === 'anonymous'
                ? (r.credentials = 'omit')
                : (r.credentials = 'same-origin'),
            r
        );
    }
    function i(s) {
        if (s.ep) return;
        s.ep = !0;
        const r = n(s);
        fetch(s.href, r);
    }
})();
function Yf(t) {
    return t &&
        t.__esModule &&
        Object.prototype.hasOwnProperty.call(t, 'default')
        ? t.default
        : t;
}
var Xf = { exports: {} },
    aa = {},
    Kf = { exports: {} },
    W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hr = Symbol.for('react.element'),
    w0 = Symbol.for('react.portal'),
    S0 = Symbol.for('react.fragment'),
    k0 = Symbol.for('react.strict_mode'),
    C0 = Symbol.for('react.profiler'),
    M0 = Symbol.for('react.provider'),
    P0 = Symbol.for('react.context'),
    E0 = Symbol.for('react.forward_ref'),
    T0 = Symbol.for('react.suspense'),
    j0 = Symbol.for('react.memo'),
    O0 = Symbol.for('react.lazy'),
    Gu = Symbol.iterator;
function N0(t) {
    return t === null || typeof t != 'object'
        ? null
        : ((t = (Gu && t[Gu]) || t['@@iterator']),
          typeof t == 'function' ? t : null);
}
var qf = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Gf = Object.assign,
    Jf = {};
function Xi(t, e, n) {
    (this.props = t),
        (this.context = e),
        (this.refs = Jf),
        (this.updater = n || qf);
}
Xi.prototype.isReactComponent = {};
Xi.prototype.setState = function (t, e) {
    if (typeof t != 'object' && typeof t != 'function' && t != null)
        throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
    this.updater.enqueueSetState(this, t, e, 'setState');
};
Xi.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
};
function Zf() {}
Zf.prototype = Xi.prototype;
function Rc(t, e, n) {
    (this.props = t),
        (this.context = e),
        (this.refs = Jf),
        (this.updater = n || qf);
}
var Ac = (Rc.prototype = new Zf());
Ac.constructor = Rc;
Gf(Ac, Xi.prototype);
Ac.isPureReactComponent = !0;
var Ju = Array.isArray,
    ep = Object.prototype.hasOwnProperty,
    Ic = { current: null },
    tp = { key: !0, ref: !0, __self: !0, __source: !0 };
function np(t, e, n) {
    var i,
        s = {},
        r = null,
        o = null;
    if (e != null)
        for (i in (e.ref !== void 0 && (o = e.ref),
        e.key !== void 0 && (r = '' + e.key),
        e))
            ep.call(e, i) && !tp.hasOwnProperty(i) && (s[i] = e[i]);
    var a = arguments.length - 2;
    if (a === 1) s.children = n;
    else if (1 < a) {
        for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
        s.children = l;
    }
    if (t && t.defaultProps)
        for (i in ((a = t.defaultProps), a)) s[i] === void 0 && (s[i] = a[i]);
    return {
        $$typeof: hr,
        type: t,
        key: r,
        ref: o,
        props: s,
        _owner: Ic.current,
    };
}
function D0(t, e) {
    return {
        $$typeof: hr,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner,
    };
}
function Fc(t) {
    return typeof t == 'object' && t !== null && t.$$typeof === hr;
}
function L0(t) {
    var e = { '=': '=0', ':': '=2' };
    return (
        '$' +
        t.replace(/[=:]/g, function (n) {
            return e[n];
        })
    );
}
var Zu = /\/+/g;
function Da(t, e) {
    return typeof t == 'object' && t !== null && t.key != null
        ? L0('' + t.key)
        : e.toString(36);
}
function io(t, e, n, i, s) {
    var r = typeof t;
    (r === 'undefined' || r === 'boolean') && (t = null);
    var o = !1;
    if (t === null) o = !0;
    else
        switch (r) {
            case 'string':
            case 'number':
                o = !0;
                break;
            case 'object':
                switch (t.$$typeof) {
                    case hr:
                    case w0:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = t),
            (s = s(o)),
            (t = i === '' ? '.' + Da(o, 0) : i),
            Ju(s)
                ? ((n = ''),
                  t != null && (n = t.replace(Zu, '$&/') + '/'),
                  io(s, e, n, '', function (c) {
                      return c;
                  }))
                : s != null &&
                  (Fc(s) &&
                      (s = D0(
                          s,
                          n +
                              (!s.key || (o && o.key === s.key)
                                  ? ''
                                  : ('' + s.key).replace(Zu, '$&/') + '/') +
                              t
                      )),
                  e.push(s)),
            1
        );
    if (((o = 0), (i = i === '' ? '.' : i + ':'), Ju(t)))
        for (var a = 0; a < t.length; a++) {
            r = t[a];
            var l = i + Da(r, a);
            o += io(r, e, n, l, s);
        }
    else if (((l = N0(t)), typeof l == 'function'))
        for (t = l.call(t), a = 0; !(r = t.next()).done; )
            (r = r.value), (l = i + Da(r, a++)), (o += io(r, e, n, l, s));
    else if (r === 'object')
        throw (
            ((e = String(t)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    (e === '[object Object]'
                        ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                        : e) +
                    '). If you meant to render a collection of children, use an array instead.'
            ))
        );
    return o;
}
function br(t, e, n) {
    if (t == null) return t;
    var i = [],
        s = 0;
    return (
        io(t, i, '', '', function (r) {
            return e.call(n, r, s++);
        }),
        i
    );
}
function R0(t) {
    if (t._status === -1) {
        var e = t._result;
        (e = e()),
            e.then(
                function (n) {
                    (t._status === 0 || t._status === -1) &&
                        ((t._status = 1), (t._result = n));
                },
                function (n) {
                    (t._status === 0 || t._status === -1) &&
                        ((t._status = 2), (t._result = n));
                }
            ),
            t._status === -1 && ((t._status = 0), (t._result = e));
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
}
var We = { current: null },
    so = { transition: null },
    A0 = {
        ReactCurrentDispatcher: We,
        ReactCurrentBatchConfig: so,
        ReactCurrentOwner: Ic,
    };
W.Children = {
    map: br,
    forEach: function (t, e, n) {
        br(
            t,
            function () {
                e.apply(this, arguments);
            },
            n
        );
    },
    count: function (t) {
        var e = 0;
        return (
            br(t, function () {
                e++;
            }),
            e
        );
    },
    toArray: function (t) {
        return (
            br(t, function (e) {
                return e;
            }) || []
        );
    },
    only: function (t) {
        if (!Fc(t))
            throw Error(
                'React.Children.only expected to receive a single React element child.'
            );
        return t;
    },
};
W.Component = Xi;
W.Fragment = S0;
W.Profiler = C0;
W.PureComponent = Rc;
W.StrictMode = k0;
W.Suspense = T0;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A0;
W.cloneElement = function (t, e, n) {
    if (t == null)
        throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
                t +
                '.'
        );
    var i = Gf({}, t.props),
        s = t.key,
        r = t.ref,
        o = t._owner;
    if (e != null) {
        if (
            (e.ref !== void 0 && ((r = e.ref), (o = Ic.current)),
            e.key !== void 0 && (s = '' + e.key),
            t.type && t.type.defaultProps)
        )
            var a = t.type.defaultProps;
        for (l in e)
            ep.call(e, l) &&
                !tp.hasOwnProperty(l) &&
                (i[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
        i.children = a;
    }
    return { $$typeof: hr, type: t.type, key: s, ref: r, props: i, _owner: o };
};
W.createContext = function (t) {
    return (
        (t = {
            $$typeof: P0,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (t.Provider = { $$typeof: M0, _context: t }),
        (t.Consumer = t)
    );
};
W.createElement = np;
W.createFactory = function (t) {
    var e = np.bind(null, t);
    return (e.type = t), e;
};
W.createRef = function () {
    return { current: null };
};
W.forwardRef = function (t) {
    return { $$typeof: E0, render: t };
};
W.isValidElement = Fc;
W.lazy = function (t) {
    return { $$typeof: O0, _payload: { _status: -1, _result: t }, _init: R0 };
};
W.memo = function (t, e) {
    return { $$typeof: j0, type: t, compare: e === void 0 ? null : e };
};
W.startTransition = function (t) {
    var e = so.transition;
    so.transition = {};
    try {
        t();
    } finally {
        so.transition = e;
    }
};
W.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.');
};
W.useCallback = function (t, e) {
    return We.current.useCallback(t, e);
};
W.useContext = function (t) {
    return We.current.useContext(t);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (t) {
    return We.current.useDeferredValue(t);
};
W.useEffect = function (t, e) {
    return We.current.useEffect(t, e);
};
W.useId = function () {
    return We.current.useId();
};
W.useImperativeHandle = function (t, e, n) {
    return We.current.useImperativeHandle(t, e, n);
};
W.useInsertionEffect = function (t, e) {
    return We.current.useInsertionEffect(t, e);
};
W.useLayoutEffect = function (t, e) {
    return We.current.useLayoutEffect(t, e);
};
W.useMemo = function (t, e) {
    return We.current.useMemo(t, e);
};
W.useReducer = function (t, e, n) {
    return We.current.useReducer(t, e, n);
};
W.useRef = function (t) {
    return We.current.useRef(t);
};
W.useState = function (t) {
    return We.current.useState(t);
};
W.useSyncExternalStore = function (t, e, n) {
    return We.current.useSyncExternalStore(t, e, n);
};
W.useTransition = function () {
    return We.current.useTransition();
};
W.version = '18.2.0';
Kf.exports = W;
var C = Kf.exports;
const Q = Yf(C);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var I0 = C,
    F0 = Symbol.for('react.element'),
    z0 = Symbol.for('react.fragment'),
    B0 = Object.prototype.hasOwnProperty,
    V0 =
        I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    $0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function ip(t, e, n) {
    var i,
        s = {},
        r = null,
        o = null;
    n !== void 0 && (r = '' + n),
        e.key !== void 0 && (r = '' + e.key),
        e.ref !== void 0 && (o = e.ref);
    for (i in e) B0.call(e, i) && !$0.hasOwnProperty(i) && (s[i] = e[i]);
    if (t && t.defaultProps)
        for (i in ((e = t.defaultProps), e)) s[i] === void 0 && (s[i] = e[i]);
    return {
        $$typeof: F0,
        type: t,
        key: r,
        ref: o,
        props: s,
        _owner: V0.current,
    };
}
aa.Fragment = z0;
aa.jsx = ip;
aa.jsxs = ip;
Xf.exports = aa;
var f = Xf.exports,
    bl = {},
    sp = { exports: {} },
    lt = {},
    rp = { exports: {} },
    op = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
    function e(E, L) {
        var z = E.length;
        E.push(L);
        e: for (; 0 < z; ) {
            var ee = (z - 1) >>> 1,
                se = E[ee];
            if (0 < s(se, L)) (E[ee] = L), (E[z] = se), (z = ee);
            else break e;
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0];
    }
    function i(E) {
        if (E.length === 0) return null;
        var L = E[0],
            z = E.pop();
        if (z !== L) {
            E[0] = z;
            e: for (var ee = 0, se = E.length, Ot = se >>> 1; ee < Ot; ) {
                var Be = 2 * (ee + 1) - 1,
                    Bt = E[Be],
                    Ve = Be + 1,
                    _r = E[Ve];
                if (0 > s(Bt, z))
                    Ve < se && 0 > s(_r, Bt)
                        ? ((E[ee] = _r), (E[Ve] = z), (ee = Ve))
                        : ((E[ee] = Bt), (E[Be] = z), (ee = Be));
                else if (Ve < se && 0 > s(_r, z))
                    (E[ee] = _r), (E[Ve] = z), (ee = Ve);
                else break e;
            }
        }
        return L;
    }
    function s(E, L) {
        var z = E.sortIndex - L.sortIndex;
        return z !== 0 ? z : E.id - L.id;
    }
    if (
        typeof performance == 'object' &&
        typeof performance.now == 'function'
    ) {
        var r = performance;
        t.unstable_now = function () {
            return r.now();
        };
    } else {
        var o = Date,
            a = o.now();
        t.unstable_now = function () {
            return o.now() - a;
        };
    }
    var l = [],
        c = [],
        u = 1,
        d = null,
        h = 3,
        p = !1,
        v = !1,
        y = !1,
        _ = typeof setTimeout == 'function' ? setTimeout : null,
        m = typeof clearTimeout == 'function' ? clearTimeout : null,
        g = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(E) {
        for (var L = n(c); L !== null; ) {
            if (L.callback === null) i(c);
            else if (L.startTime <= E)
                i(c), (L.sortIndex = L.expirationTime), e(l, L);
            else break;
            L = n(c);
        }
    }
    function b(E) {
        if (((y = !1), x(E), !v))
            if (n(l) !== null) (v = !0), D(w);
            else {
                var L = n(c);
                L !== null && B(b, L.startTime - E);
            }
    }
    function w(E, L) {
        (v = !1), y && ((y = !1), m(M), (M = -1)), (p = !0);
        var z = h;
        try {
            for (
                x(L), d = n(l);
                d !== null && (!(d.expirationTime > L) || (E && !R()));

            ) {
                var ee = d.callback;
                if (typeof ee == 'function') {
                    (d.callback = null), (h = d.priorityLevel);
                    var se = ee(d.expirationTime <= L);
                    (L = t.unstable_now()),
                        typeof se == 'function'
                            ? (d.callback = se)
                            : d === n(l) && i(l),
                        x(L);
                } else i(l);
                d = n(l);
            }
            if (d !== null) var Ot = !0;
            else {
                var Be = n(c);
                Be !== null && B(b, Be.startTime - L), (Ot = !1);
            }
            return Ot;
        } finally {
            (d = null), (h = z), (p = !1);
        }
    }
    var k = !1,
        S = null,
        M = -1,
        T = 5,
        j = -1;
    function R() {
        return !(t.unstable_now() - j < T);
    }
    function I() {
        if (S !== null) {
            var E = t.unstable_now();
            j = E;
            var L = !0;
            try {
                L = S(!0, E);
            } finally {
                L ? U() : ((k = !1), (S = null));
            }
        } else k = !1;
    }
    var U;
    if (typeof g == 'function')
        U = function () {
            g(I);
        };
    else if (typeof MessageChannel < 'u') {
        var F = new MessageChannel(),
            A = F.port2;
        (F.port1.onmessage = I),
            (U = function () {
                A.postMessage(null);
            });
    } else
        U = function () {
            _(I, 0);
        };
    function D(E) {
        (S = E), k || ((k = !0), U());
    }
    function B(E, L) {
        M = _(function () {
            E(t.unstable_now());
        }, L);
    }
    (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (E) {
            E.callback = null;
        }),
        (t.unstable_continueExecution = function () {
            v || p || ((v = !0), D(w));
        }),
        (t.unstable_forceFrameRate = function (E) {
            0 > E || 125 < E
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (T = 0 < E ? Math.floor(1e3 / E) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
            return h;
        }),
        (t.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (t.unstable_next = function (E) {
            switch (h) {
                case 1:
                case 2:
                case 3:
                    var L = 3;
                    break;
                default:
                    L = h;
            }
            var z = h;
            h = L;
            try {
                return E();
            } finally {
                h = z;
            }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (E, L) {
            switch (E) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    E = 3;
            }
            var z = h;
            h = E;
            try {
                return L();
            } finally {
                h = z;
            }
        }),
        (t.unstable_scheduleCallback = function (E, L, z) {
            var ee = t.unstable_now();
            switch (
                (typeof z == 'object' && z !== null
                    ? ((z = z.delay),
                      (z = typeof z == 'number' && 0 < z ? ee + z : ee))
                    : (z = ee),
                E)
            ) {
                case 1:
                    var se = -1;
                    break;
                case 2:
                    se = 250;
                    break;
                case 5:
                    se = 1073741823;
                    break;
                case 4:
                    se = 1e4;
                    break;
                default:
                    se = 5e3;
            }
            return (
                (se = z + se),
                (E = {
                    id: u++,
                    callback: L,
                    priorityLevel: E,
                    startTime: z,
                    expirationTime: se,
                    sortIndex: -1,
                }),
                z > ee
                    ? ((E.sortIndex = z),
                      e(c, E),
                      n(l) === null &&
                          E === n(c) &&
                          (y ? (m(M), (M = -1)) : (y = !0), B(b, z - ee)))
                    : ((E.sortIndex = se), e(l, E), v || p || ((v = !0), D(w))),
                E
            );
        }),
        (t.unstable_shouldYield = R),
        (t.unstable_wrapCallback = function (E) {
            var L = h;
            return function () {
                var z = h;
                h = L;
                try {
                    return E.apply(this, arguments);
                } finally {
                    h = z;
                }
            };
        });
})(op);
rp.exports = op;
var H0 = rp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap = C,
    at = H0;
function P(t) {
    for (
        var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
            n = 1;
        n < arguments.length;
        n++
    )
        e += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
        'Minified React error #' +
        t +
        '; visit ' +
        e +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
var lp = new Set(),
    zs = {};
function hi(t, e) {
    Fi(t, e), Fi(t + 'Capture', e);
}
function Fi(t, e) {
    for (zs[t] = e, t = 0; t < e.length; t++) lp.add(e[t]);
}
var en = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
    ),
    wl = Object.prototype.hasOwnProperty,
    W0 =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ed = {},
    td = {};
function U0(t) {
    return wl.call(td, t)
        ? !0
        : wl.call(ed, t)
        ? !1
        : W0.test(t)
        ? (td[t] = !0)
        : ((ed[t] = !0), !1);
}
function Q0(t, e, n, i) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof e) {
        case 'function':
        case 'symbol':
            return !0;
        case 'boolean':
            return i
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((t = t.toLowerCase().slice(0, 5)),
                  t !== 'data-' && t !== 'aria-');
        default:
            return !1;
    }
}
function Y0(t, e, n, i) {
    if (e === null || typeof e > 'u' || Q0(t, e, n, i)) return !0;
    if (i) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !e;
            case 4:
                return e === !1;
            case 5:
                return isNaN(e);
            case 6:
                return isNaN(e) || 1 > e;
        }
    return !1;
}
function Ue(t, e, n, i, s, r, o) {
    (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
        (this.attributeName = i),
        (this.attributeNamespace = s),
        (this.mustUseProperty = n),
        (this.propertyName = t),
        (this.type = e),
        (this.sanitizeURL = r),
        (this.removeEmptyString = o);
}
var Ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (t) {
        Ne[t] = new Ue(t, 0, !1, t, null, !1, !1);
    });
[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
].forEach(function (t) {
    var e = t[0];
    Ne[e] = new Ue(e, 1, !1, t[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
    Ne[t] = new Ue(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
].forEach(function (t) {
    Ne[t] = new Ue(t, 2, !1, t, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (t) {
        Ne[t] = new Ue(t, 3, !1, t.toLowerCase(), null, !1, !1);
    });
['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
    Ne[t] = new Ue(t, 3, !0, t, null, !1, !1);
});
['capture', 'download'].forEach(function (t) {
    Ne[t] = new Ue(t, 4, !1, t, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (t) {
    Ne[t] = new Ue(t, 6, !1, t, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (t) {
    Ne[t] = new Ue(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var zc = /[\-:]([a-z])/g;
function Bc(t) {
    return t[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (t) {
        var e = t.replace(zc, Bc);
        Ne[e] = new Ue(e, 1, !1, t, null, !1, !1);
    });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (t) {
        var e = t.replace(zc, Bc);
        Ne[e] = new Ue(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
    });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
    var e = t.replace(zc, Bc);
    Ne[e] = new Ue(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (t) {
    Ne[t] = new Ue(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Ue(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
);
['src', 'href', 'action', 'formAction'].forEach(function (t) {
    Ne[t] = new Ue(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Vc(t, e, n, i) {
    var s = Ne.hasOwnProperty(e) ? Ne[e] : null;
    (s !== null
        ? s.type !== 0
        : i ||
          !(2 < e.length) ||
          (e[0] !== 'o' && e[0] !== 'O') ||
          (e[1] !== 'n' && e[1] !== 'N')) &&
        (Y0(e, n, s, i) && (n = null),
        i || s === null
            ? U0(e) &&
              (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
            : s.mustUseProperty
            ? (t[s.propertyName] = n === null ? (s.type === 3 ? !1 : '') : n)
            : ((e = s.attributeName),
              (i = s.attributeNamespace),
              n === null
                  ? t.removeAttribute(e)
                  : ((s = s.type),
                    (n = s === 3 || (s === 4 && n === !0) ? '' : '' + n),
                    i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
}
var rn = ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    wr = Symbol.for('react.element'),
    vi = Symbol.for('react.portal'),
    xi = Symbol.for('react.fragment'),
    $c = Symbol.for('react.strict_mode'),
    Sl = Symbol.for('react.profiler'),
    cp = Symbol.for('react.provider'),
    up = Symbol.for('react.context'),
    Hc = Symbol.for('react.forward_ref'),
    kl = Symbol.for('react.suspense'),
    Cl = Symbol.for('react.suspense_list'),
    Wc = Symbol.for('react.memo'),
    cn = Symbol.for('react.lazy'),
    dp = Symbol.for('react.offscreen'),
    nd = Symbol.iterator;
function Zi(t) {
    return t === null || typeof t != 'object'
        ? null
        : ((t = (nd && t[nd]) || t['@@iterator']),
          typeof t == 'function' ? t : null);
}
var fe = Object.assign,
    La;
function hs(t) {
    if (La === void 0)
        try {
            throw Error();
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            La = (e && e[1]) || '';
        }
    return (
        `
` +
        La +
        t
    );
}
var Ra = !1;
function Aa(t, e) {
    if (!t || Ra) return '';
    Ra = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (
                ((e = function () {
                    throw Error();
                }),
                Object.defineProperty(e.prototype, 'props', {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == 'object' && Reflect.construct)
            ) {
                try {
                    Reflect.construct(e, []);
                } catch (c) {
                    var i = c;
                }
                Reflect.construct(t, [], e);
            } else {
                try {
                    e.call();
                } catch (c) {
                    i = c;
                }
                t.call(e.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                i = c;
            }
            t();
        }
    } catch (c) {
        if (c && i && typeof c.stack == 'string') {
            for (
                var s = c.stack.split(`
`),
                    r = i.stack.split(`
`),
                    o = s.length - 1,
                    a = r.length - 1;
                1 <= o && 0 <= a && s[o] !== r[a];

            )
                a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (s[o] !== r[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if ((o--, a--, 0 > a || s[o] !== r[a])) {
                                var l =
                                    `
` + s[o].replace(' at new ', ' at ');
                                return (
                                    t.displayName &&
                                        l.includes('<anonymous>') &&
                                        (l = l.replace(
                                            '<anonymous>',
                                            t.displayName
                                        )),
                                    l
                                );
                            }
                        while (1 <= o && 0 <= a);
                    break;
                }
        }
    } finally {
        (Ra = !1), (Error.prepareStackTrace = n);
    }
    return (t = t ? t.displayName || t.name : '') ? hs(t) : '';
}
function X0(t) {
    switch (t.tag) {
        case 5:
            return hs(t.type);
        case 16:
            return hs('Lazy');
        case 13:
            return hs('Suspense');
        case 19:
            return hs('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (t = Aa(t.type, !1)), t;
        case 11:
            return (t = Aa(t.type.render, !1)), t;
        case 1:
            return (t = Aa(t.type, !0)), t;
        default:
            return '';
    }
}
function Ml(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
        case xi:
            return 'Fragment';
        case vi:
            return 'Portal';
        case Sl:
            return 'Profiler';
        case $c:
            return 'StrictMode';
        case kl:
            return 'Suspense';
        case Cl:
            return 'SuspenseList';
    }
    if (typeof t == 'object')
        switch (t.$$typeof) {
            case up:
                return (t.displayName || 'Context') + '.Consumer';
            case cp:
                return (t._context.displayName || 'Context') + '.Provider';
            case Hc:
                var e = t.render;
                return (
                    (t = t.displayName),
                    t ||
                        ((t = e.displayName || e.name || ''),
                        (t =
                            t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
                    t
                );
            case Wc:
                return (
                    (e = t.displayName || null),
                    e !== null ? e : Ml(t.type) || 'Memo'
                );
            case cn:
                (e = t._payload), (t = t._init);
                try {
                    return Ml(t(e));
                } catch {}
        }
    return null;
}
function K0(t) {
    var e = t.type;
    switch (t.tag) {
        case 24:
            return 'Cache';
        case 9:
            return (e.displayName || 'Context') + '.Consumer';
        case 10:
            return (e._context.displayName || 'Context') + '.Provider';
        case 18:
            return 'DehydratedFragment';
        case 11:
            return (
                (t = e.render),
                (t = t.displayName || t.name || ''),
                e.displayName ||
                    (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
            );
        case 7:
            return 'Fragment';
        case 5:
            return e;
        case 4:
            return 'Portal';
        case 3:
            return 'Root';
        case 6:
            return 'Text';
        case 16:
            return Ml(e);
        case 8:
            return e === $c ? 'StrictMode' : 'Mode';
        case 22:
            return 'Offscreen';
        case 12:
            return 'Profiler';
        case 21:
            return 'Scope';
        case 13:
            return 'Suspense';
        case 19:
            return 'SuspenseList';
        case 25:
            return 'TracingMarker';
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof e == 'function') return e.displayName || e.name || null;
            if (typeof e == 'string') return e;
    }
    return null;
}
function On(t) {
    switch (typeof t) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return t;
        case 'object':
            return t;
        default:
            return '';
    }
}
function hp(t) {
    var e = t.type;
    return (
        (t = t.nodeName) &&
        t.toLowerCase() === 'input' &&
        (e === 'checkbox' || e === 'radio')
    );
}
function q0(t) {
    var e = hp(t) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        i = '' + t[e];
    if (
        !t.hasOwnProperty(e) &&
        typeof n < 'u' &&
        typeof n.get == 'function' &&
        typeof n.set == 'function'
    ) {
        var s = n.get,
            r = n.set;
        return (
            Object.defineProperty(t, e, {
                configurable: !0,
                get: function () {
                    return s.call(this);
                },
                set: function (o) {
                    (i = '' + o), r.call(this, o);
                },
            }),
            Object.defineProperty(t, e, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return i;
                },
                setValue: function (o) {
                    i = '' + o;
                },
                stopTracking: function () {
                    (t._valueTracker = null), delete t[e];
                },
            }
        );
    }
}
function Sr(t) {
    t._valueTracker || (t._valueTracker = q0(t));
}
function fp(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
        i = '';
    return (
        t && (i = hp(t) ? (t.checked ? 'true' : 'false') : t.value),
        (t = i),
        t !== n ? (e.setValue(t), !0) : !1
    );
}
function Po(t) {
    if (
        ((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')
    )
        return null;
    try {
        return t.activeElement || t.body;
    } catch {
        return t.body;
    }
}
function Pl(t, e) {
    var n = e.checked;
    return fe({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked,
    });
}
function id(t, e) {
    var n = e.defaultValue == null ? '' : e.defaultValue,
        i = e.checked != null ? e.checked : e.defaultChecked;
    (n = On(e.value != null ? e.value : n)),
        (t._wrapperState = {
            initialChecked: i,
            initialValue: n,
            controlled:
                e.type === 'checkbox' || e.type === 'radio'
                    ? e.checked != null
                    : e.value != null,
        });
}
function pp(t, e) {
    (e = e.checked), e != null && Vc(t, 'checked', e, !1);
}
function El(t, e) {
    pp(t, e);
    var n = On(e.value),
        i = e.type;
    if (n != null)
        i === 'number'
            ? ((n === 0 && t.value === '') || t.value != n) &&
              (t.value = '' + n)
            : t.value !== '' + n && (t.value = '' + n);
    else if (i === 'submit' || i === 'reset') {
        t.removeAttribute('value');
        return;
    }
    e.hasOwnProperty('value')
        ? Tl(t, e.type, n)
        : e.hasOwnProperty('defaultValue') && Tl(t, e.type, On(e.defaultValue)),
        e.checked == null &&
            e.defaultChecked != null &&
            (t.defaultChecked = !!e.defaultChecked);
}
function sd(t, e, n) {
    if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
        var i = e.type;
        if (
            !(
                (i !== 'submit' && i !== 'reset') ||
                (e.value !== void 0 && e.value !== null)
            )
        )
            return;
        (e = '' + t._wrapperState.initialValue),
            n || e === t.value || (t.value = e),
            (t.defaultValue = e);
    }
    (n = t.name),
        n !== '' && (t.name = ''),
        (t.defaultChecked = !!t._wrapperState.initialChecked),
        n !== '' && (t.name = n);
}
function Tl(t, e, n) {
    (e !== 'number' || Po(t.ownerDocument) !== t) &&
        (n == null
            ? (t.defaultValue = '' + t._wrapperState.initialValue)
            : t.defaultValue !== '' + n && (t.defaultValue = '' + n));
}
var fs = Array.isArray;
function ji(t, e, n, i) {
    if (((t = t.options), e)) {
        e = {};
        for (var s = 0; s < n.length; s++) e['$' + n[s]] = !0;
        for (n = 0; n < t.length; n++)
            (s = e.hasOwnProperty('$' + t[n].value)),
                t[n].selected !== s && (t[n].selected = s),
                s && i && (t[n].defaultSelected = !0);
    } else {
        for (n = '' + On(n), e = null, s = 0; s < t.length; s++) {
            if (t[s].value === n) {
                (t[s].selected = !0), i && (t[s].defaultSelected = !0);
                return;
            }
            e !== null || t[s].disabled || (e = t[s]);
        }
        e !== null && (e.selected = !0);
    }
}
function jl(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(P(91));
    return fe({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: '' + t._wrapperState.initialValue,
    });
}
function rd(t, e) {
    var n = e.value;
    if (n == null) {
        if (((n = e.children), (e = e.defaultValue), n != null)) {
            if (e != null) throw Error(P(92));
            if (fs(n)) {
                if (1 < n.length) throw Error(P(93));
                n = n[0];
            }
            e = n;
        }
        e == null && (e = ''), (n = e);
    }
    t._wrapperState = { initialValue: On(n) };
}
function mp(t, e) {
    var n = On(e.value),
        i = On(e.defaultValue);
    n != null &&
        ((n = '' + n),
        n !== t.value && (t.value = n),
        e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
        i != null && (t.defaultValue = '' + i);
}
function od(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue &&
        e !== '' &&
        e !== null &&
        (t.value = e);
}
function gp(t) {
    switch (t) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function Ol(t, e) {
    return t == null || t === 'http://www.w3.org/1999/xhtml'
        ? gp(e)
        : t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : t;
}
var kr,
    yp = (function (t) {
        return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
            ? function (e, n, i, s) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return t(e, n, i, s);
                  });
              }
            : t;
    })(function (t, e) {
        if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t)
            t.innerHTML = e;
        else {
            for (
                kr = kr || document.createElement('div'),
                    kr.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
                    e = kr.firstChild;
                t.firstChild;

            )
                t.removeChild(t.firstChild);
            for (; e.firstChild; ) t.appendChild(e.firstChild);
        }
    });
function Bs(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return;
        }
    }
    t.textContent = e;
}
var Ss = {
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
    G0 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ss).forEach(function (t) {
    G0.forEach(function (e) {
        (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ss[e] = Ss[t]);
    });
});
function vp(t, e, n) {
    return e == null || typeof e == 'boolean' || e === ''
        ? ''
        : n ||
          typeof e != 'number' ||
          e === 0 ||
          (Ss.hasOwnProperty(t) && Ss[t])
        ? ('' + e).trim()
        : e + 'px';
}
function xp(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var i = n.indexOf('--') === 0,
                s = vp(n, e[n], i);
            n === 'float' && (n = 'cssFloat'),
                i ? t.setProperty(n, s) : (t[n] = s);
        }
}
var J0 = fe(
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
function Nl(t, e) {
    if (e) {
        if (J0[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(P(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(P(60));
            if (
                typeof e.dangerouslySetInnerHTML != 'object' ||
                !('__html' in e.dangerouslySetInnerHTML)
            )
                throw Error(P(61));
        }
        if (e.style != null && typeof e.style != 'object') throw Error(P(62));
    }
}
function Dl(t, e) {
    if (t.indexOf('-') === -1) return typeof e.is == 'string';
    switch (t) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1;
        default:
            return !0;
    }
}
var Ll = null;
function Uc(t) {
    return (
        (t = t.target || t.srcElement || window),
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    );
}
var Rl = null,
    Oi = null,
    Ni = null;
function ad(t) {
    if ((t = mr(t))) {
        if (typeof Rl != 'function') throw Error(P(280));
        var e = t.stateNode;
        e && ((e = ha(e)), Rl(t.stateNode, t.type, e));
    }
}
function _p(t) {
    Oi ? (Ni ? Ni.push(t) : (Ni = [t])) : (Oi = t);
}
function bp() {
    if (Oi) {
        var t = Oi,
            e = Ni;
        if (((Ni = Oi = null), ad(t), e))
            for (t = 0; t < e.length; t++) ad(e[t]);
    }
}
function wp(t, e) {
    return t(e);
}
function Sp() {}
var Ia = !1;
function kp(t, e, n) {
    if (Ia) return t(e, n);
    Ia = !0;
    try {
        return wp(t, e, n);
    } finally {
        (Ia = !1), (Oi !== null || Ni !== null) && (Sp(), bp());
    }
}
function Vs(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = ha(n);
    if (i === null) return null;
    n = i[e];
    e: switch (e) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            (i = !i.disabled) ||
                ((t = t.type),
                (i = !(
                    t === 'button' ||
                    t === 'input' ||
                    t === 'select' ||
                    t === 'textarea'
                ))),
                (t = !i);
            break e;
        default:
            t = !1;
    }
    if (t) return null;
    if (n && typeof n != 'function') throw Error(P(231, e, typeof n));
    return n;
}
var Al = !1;
if (en)
    try {
        var es = {};
        Object.defineProperty(es, 'passive', {
            get: function () {
                Al = !0;
            },
        }),
            window.addEventListener('test', es, es),
            window.removeEventListener('test', es, es);
    } catch {
        Al = !1;
    }
function Z0(t, e, n, i, s, r, o, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, c);
    } catch (u) {
        this.onError(u);
    }
}
var ks = !1,
    Eo = null,
    To = !1,
    Il = null,
    ey = {
        onError: function (t) {
            (ks = !0), (Eo = t);
        },
    };
function ty(t, e, n, i, s, r, o, a, l) {
    (ks = !1), (Eo = null), Z0.apply(ey, arguments);
}
function ny(t, e, n, i, s, r, o, a, l) {
    if ((ty.apply(this, arguments), ks)) {
        if (ks) {
            var c = Eo;
            (ks = !1), (Eo = null);
        } else throw Error(P(198));
        To || ((To = !0), (Il = c));
    }
}
function fi(t) {
    var e = t,
        n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
        t = e;
        do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
        while (t);
    }
    return e.tag === 3 ? n : null;
}
function Cp(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (
            (e === null &&
                ((t = t.alternate), t !== null && (e = t.memoizedState)),
            e !== null)
        )
            return e.dehydrated;
    }
    return null;
}
function ld(t) {
    if (fi(t) !== t) throw Error(P(188));
}
function iy(t) {
    var e = t.alternate;
    if (!e) {
        if (((e = fi(t)), e === null)) throw Error(P(188));
        return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
        var s = n.return;
        if (s === null) break;
        var r = s.alternate;
        if (r === null) {
            if (((i = s.return), i !== null)) {
                n = i;
                continue;
            }
            break;
        }
        if (s.child === r.child) {
            for (r = s.child; r; ) {
                if (r === n) return ld(s), t;
                if (r === i) return ld(s), e;
                r = r.sibling;
            }
            throw Error(P(188));
        }
        if (n.return !== i.return) (n = s), (i = r);
        else {
            for (var o = !1, a = s.child; a; ) {
                if (a === n) {
                    (o = !0), (n = s), (i = r);
                    break;
                }
                if (a === i) {
                    (o = !0), (i = s), (n = r);
                    break;
                }
                a = a.sibling;
            }
            if (!o) {
                for (a = r.child; a; ) {
                    if (a === n) {
                        (o = !0), (n = r), (i = s);
                        break;
                    }
                    if (a === i) {
                        (o = !0), (i = r), (n = s);
                        break;
                    }
                    a = a.sibling;
                }
                if (!o) throw Error(P(189));
            }
        }
        if (n.alternate !== i) throw Error(P(190));
    }
    if (n.tag !== 3) throw Error(P(188));
    return n.stateNode.current === n ? t : e;
}
function Mp(t) {
    return (t = iy(t)), t !== null ? Pp(t) : null;
}
function Pp(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
        var e = Pp(t);
        if (e !== null) return e;
        t = t.sibling;
    }
    return null;
}
var Ep = at.unstable_scheduleCallback,
    cd = at.unstable_cancelCallback,
    sy = at.unstable_shouldYield,
    ry = at.unstable_requestPaint,
    ve = at.unstable_now,
    oy = at.unstable_getCurrentPriorityLevel,
    Qc = at.unstable_ImmediatePriority,
    Tp = at.unstable_UserBlockingPriority,
    jo = at.unstable_NormalPriority,
    ay = at.unstable_LowPriority,
    jp = at.unstable_IdlePriority,
    la = null,
    It = null;
function ly(t) {
    if (It && typeof It.onCommitFiberRoot == 'function')
        try {
            It.onCommitFiberRoot(
                la,
                t,
                void 0,
                (t.current.flags & 128) === 128
            );
        } catch {}
}
var kt = Math.clz32 ? Math.clz32 : dy,
    cy = Math.log,
    uy = Math.LN2;
function dy(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((cy(t) / uy) | 0)) | 0;
}
var Cr = 64,
    Mr = 4194304;
function ps(t) {
    switch (t & -t) {
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
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t;
    }
}
function Oo(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
        s = t.suspendedLanes,
        r = t.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? (i = ps(a)) : ((r &= o), r !== 0 && (i = ps(r)));
    } else (o = n & ~s), o !== 0 ? (i = ps(o)) : r !== 0 && (i = ps(r));
    if (i === 0) return 0;
    if (
        e !== 0 &&
        e !== i &&
        !(e & s) &&
        ((s = i & -i),
        (r = e & -e),
        s >= r || (s === 16 && (r & 4194240) !== 0))
    )
        return e;
    if ((i & 4 && (i |= n & 16), (e = t.entangledLanes), e !== 0))
        for (t = t.entanglements, e &= i; 0 < e; )
            (n = 31 - kt(e)), (s = 1 << n), (i |= t[n]), (e &= ~s);
    return i;
}
function hy(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250;
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
            return e + 5e3;
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
function fy(t, e) {
    for (
        var n = t.suspendedLanes,
            i = t.pingedLanes,
            s = t.expirationTimes,
            r = t.pendingLanes;
        0 < r;

    ) {
        var o = 31 - kt(r),
            a = 1 << o,
            l = s[o];
        l === -1
            ? (!(a & n) || a & i) && (s[o] = hy(a, e))
            : l <= e && (t.expiredLanes |= a),
            (r &= ~a);
    }
}
function Fl(t) {
    return (
        (t = t.pendingLanes & -1073741825),
        t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    );
}
function Op() {
    var t = Cr;
    return (Cr <<= 1), !(Cr & 4194240) && (Cr = 64), t;
}
function Fa(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
}
function fr(t, e, n) {
    (t.pendingLanes |= e),
        e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
        (t = t.eventTimes),
        (e = 31 - kt(e)),
        (t[e] = n);
}
function py(t, e) {
    var n = t.pendingLanes & ~e;
    (t.pendingLanes = e),
        (t.suspendedLanes = 0),
        (t.pingedLanes = 0),
        (t.expiredLanes &= e),
        (t.mutableReadLanes &= e),
        (t.entangledLanes &= e),
        (e = t.entanglements);
    var i = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
        var s = 31 - kt(n),
            r = 1 << s;
        (e[s] = 0), (i[s] = -1), (t[s] = -1), (n &= ~r);
    }
}
function Yc(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
        var i = 31 - kt(n),
            s = 1 << i;
        (s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s);
    }
}
var Z = 0;
function Np(t) {
    return (
        (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Dp,
    Xc,
    Lp,
    Rp,
    Ap,
    zl = !1,
    Pr = [],
    bn = null,
    wn = null,
    Sn = null,
    $s = new Map(),
    Hs = new Map(),
    dn = [],
    my =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
        );
function ud(t, e) {
    switch (t) {
        case 'focusin':
        case 'focusout':
            bn = null;
            break;
        case 'dragenter':
        case 'dragleave':
            wn = null;
            break;
        case 'mouseover':
        case 'mouseout':
            Sn = null;
            break;
        case 'pointerover':
        case 'pointerout':
            $s.delete(e.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            Hs.delete(e.pointerId);
    }
}
function ts(t, e, n, i, s, r) {
    return t === null || t.nativeEvent !== r
        ? ((t = {
              blockedOn: e,
              domEventName: n,
              eventSystemFlags: i,
              nativeEvent: r,
              targetContainers: [s],
          }),
          e !== null && ((e = mr(e)), e !== null && Xc(e)),
          t)
        : ((t.eventSystemFlags |= i),
          (e = t.targetContainers),
          s !== null && e.indexOf(s) === -1 && e.push(s),
          t);
}
function gy(t, e, n, i, s) {
    switch (e) {
        case 'focusin':
            return (bn = ts(bn, t, e, n, i, s)), !0;
        case 'dragenter':
            return (wn = ts(wn, t, e, n, i, s)), !0;
        case 'mouseover':
            return (Sn = ts(Sn, t, e, n, i, s)), !0;
        case 'pointerover':
            var r = s.pointerId;
            return $s.set(r, ts($s.get(r) || null, t, e, n, i, s)), !0;
        case 'gotpointercapture':
            return (
                (r = s.pointerId),
                Hs.set(r, ts(Hs.get(r) || null, t, e, n, i, s)),
                !0
            );
    }
    return !1;
}
function Ip(t) {
    var e = Kn(t.target);
    if (e !== null) {
        var n = fi(e);
        if (n !== null) {
            if (((e = n.tag), e === 13)) {
                if (((e = Cp(n)), e !== null)) {
                    (t.blockedOn = e),
                        Ap(t.priority, function () {
                            Lp(n);
                        });
                    return;
                }
            } else if (
                e === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    t.blockedOn = null;
}
function ro(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = Bl(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var i = new n.constructor(n.type, n);
            (Ll = i), n.target.dispatchEvent(i), (Ll = null);
        } else return (e = mr(n)), e !== null && Xc(e), (t.blockedOn = n), !1;
        e.shift();
    }
    return !0;
}
function dd(t, e, n) {
    ro(t) && n.delete(e);
}
function yy() {
    (zl = !1),
        bn !== null && ro(bn) && (bn = null),
        wn !== null && ro(wn) && (wn = null),
        Sn !== null && ro(Sn) && (Sn = null),
        $s.forEach(dd),
        Hs.forEach(dd);
}
function ns(t, e) {
    t.blockedOn === e &&
        ((t.blockedOn = null),
        zl ||
            ((zl = !0),
            at.unstable_scheduleCallback(at.unstable_NormalPriority, yy)));
}
function Ws(t) {
    function e(s) {
        return ns(s, t);
    }
    if (0 < Pr.length) {
        ns(Pr[0], t);
        for (var n = 1; n < Pr.length; n++) {
            var i = Pr[n];
            i.blockedOn === t && (i.blockedOn = null);
        }
    }
    for (
        bn !== null && ns(bn, t),
            wn !== null && ns(wn, t),
            Sn !== null && ns(Sn, t),
            $s.forEach(e),
            Hs.forEach(e),
            n = 0;
        n < dn.length;
        n++
    )
        (i = dn[n]), i.blockedOn === t && (i.blockedOn = null);
    for (; 0 < dn.length && ((n = dn[0]), n.blockedOn === null); )
        Ip(n), n.blockedOn === null && dn.shift();
}
var Di = rn.ReactCurrentBatchConfig,
    No = !0;
function vy(t, e, n, i) {
    var s = Z,
        r = Di.transition;
    Di.transition = null;
    try {
        (Z = 1), Kc(t, e, n, i);
    } finally {
        (Z = s), (Di.transition = r);
    }
}
function xy(t, e, n, i) {
    var s = Z,
        r = Di.transition;
    Di.transition = null;
    try {
        (Z = 4), Kc(t, e, n, i);
    } finally {
        (Z = s), (Di.transition = r);
    }
}
function Kc(t, e, n, i) {
    if (No) {
        var s = Bl(t, e, n, i);
        if (s === null) Xa(t, e, i, Do, n), ud(t, i);
        else if (gy(s, t, e, n, i)) i.stopPropagation();
        else if ((ud(t, i), e & 4 && -1 < my.indexOf(t))) {
            for (; s !== null; ) {
                var r = mr(s);
                if (
                    (r !== null && Dp(r),
                    (r = Bl(t, e, n, i)),
                    r === null && Xa(t, e, i, Do, n),
                    r === s)
                )
                    break;
                s = r;
            }
            s !== null && i.stopPropagation();
        } else Xa(t, e, i, null, n);
    }
}
var Do = null;
function Bl(t, e, n, i) {
    if (((Do = null), (t = Uc(i)), (t = Kn(t)), t !== null))
        if (((e = fi(t)), e === null)) t = null;
        else if (((n = e.tag), n === 13)) {
            if (((t = Cp(e)), t !== null)) return t;
            t = null;
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
        } else e !== t && (t = null);
    return (Do = t), null;
}
function Fp(t) {
    switch (t) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 1;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 4;
        case 'message':
            switch (oy()) {
                case Qc:
                    return 1;
                case Tp:
                    return 4;
                case jo:
                case ay:
                    return 16;
                case jp:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var fn = null,
    qc = null,
    oo = null;
function zp() {
    if (oo) return oo;
    var t,
        e = qc,
        n = e.length,
        i,
        s = 'value' in fn ? fn.value : fn.textContent,
        r = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var o = n - t;
    for (i = 1; i <= o && e[n - i] === s[r - i]; i++);
    return (oo = s.slice(t, 1 < i ? 1 - i : void 0));
}
function ao(t) {
    var e = t.keyCode;
    return (
        'charCode' in t
            ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
            : (t = e),
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    );
}
function Er() {
    return !0;
}
function hd() {
    return !1;
}
function ct(t) {
    function e(n, i, s, r, o) {
        (this._reactName = n),
            (this._targetInst = s),
            (this.type = i),
            (this.nativeEvent = r),
            (this.target = o),
            (this.currentTarget = null);
        for (var a in t)
            t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(r) : r[a]));
        return (
            (this.isDefaultPrevented = (
                r.defaultPrevented != null
                    ? r.defaultPrevented
                    : r.returnValue === !1
            )
                ? Er
                : hd),
            (this.isPropagationStopped = hd),
            this
        );
    }
    return (
        fe(e.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != 'unknown' &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = Er));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != 'unknown' &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = Er));
            },
            persist: function () {},
            isPersistent: Er,
        }),
        e
    );
}
var Ki = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (t) {
            return t.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Gc = ct(Ki),
    pr = fe({}, Ki, { view: 0, detail: 0 }),
    _y = ct(pr),
    za,
    Ba,
    is,
    ca = fe({}, pr, {
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
        getModifierState: Jc,
        button: 0,
        buttons: 0,
        relatedTarget: function (t) {
            return t.relatedTarget === void 0
                ? t.fromElement === t.srcElement
                    ? t.toElement
                    : t.fromElement
                : t.relatedTarget;
        },
        movementX: function (t) {
            return 'movementX' in t
                ? t.movementX
                : (t !== is &&
                      (is && t.type === 'mousemove'
                          ? ((za = t.screenX - is.screenX),
                            (Ba = t.screenY - is.screenY))
                          : (Ba = za = 0),
                      (is = t)),
                  za);
        },
        movementY: function (t) {
            return 'movementY' in t ? t.movementY : Ba;
        },
    }),
    fd = ct(ca),
    by = fe({}, ca, { dataTransfer: 0 }),
    wy = ct(by),
    Sy = fe({}, pr, { relatedTarget: 0 }),
    Va = ct(Sy),
    ky = fe({}, Ki, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cy = ct(ky),
    My = fe({}, Ki, {
        clipboardData: function (t) {
            return 'clipboardData' in t
                ? t.clipboardData
                : window.clipboardData;
        },
    }),
    Py = ct(My),
    Ey = fe({}, Ki, { data: 0 }),
    pd = ct(Ey),
    Ty = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    jy = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    Oy = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
    };
function Ny(t) {
    var e = this.nativeEvent;
    return e.getModifierState
        ? e.getModifierState(t)
        : (t = Oy[t])
        ? !!e[t]
        : !1;
}
function Jc() {
    return Ny;
}
var Dy = fe({}, pr, {
        key: function (t) {
            if (t.key) {
                var e = Ty[t.key] || t.key;
                if (e !== 'Unidentified') return e;
            }
            return t.type === 'keypress'
                ? ((t = ao(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
                : t.type === 'keydown' || t.type === 'keyup'
                ? jy[t.keyCode] || 'Unidentified'
                : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Jc,
        charCode: function (t) {
            return t.type === 'keypress' ? ao(t) : 0;
        },
        keyCode: function (t) {
            return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
        },
        which: function (t) {
            return t.type === 'keypress'
                ? ao(t)
                : t.type === 'keydown' || t.type === 'keyup'
                ? t.keyCode
                : 0;
        },
    }),
    Ly = ct(Dy),
    Ry = fe({}, ca, {
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
    md = ct(Ry),
    Ay = fe({}, pr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Jc,
    }),
    Iy = ct(Ay),
    Fy = fe({}, Ki, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zy = ct(Fy),
    By = fe({}, ca, {
        deltaX: function (t) {
            return 'deltaX' in t
                ? t.deltaX
                : 'wheelDeltaX' in t
                ? -t.wheelDeltaX
                : 0;
        },
        deltaY: function (t) {
            return 'deltaY' in t
                ? t.deltaY
                : 'wheelDeltaY' in t
                ? -t.wheelDeltaY
                : 'wheelDelta' in t
                ? -t.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Vy = ct(By),
    $y = [9, 13, 27, 32],
    Zc = en && 'CompositionEvent' in window,
    Cs = null;
en && 'documentMode' in document && (Cs = document.documentMode);
var Hy = en && 'TextEvent' in window && !Cs,
    Bp = en && (!Zc || (Cs && 8 < Cs && 11 >= Cs)),
    gd = String.fromCharCode(32),
    yd = !1;
function Vp(t, e) {
    switch (t) {
        case 'keyup':
            return $y.indexOf(e.keyCode) !== -1;
        case 'keydown':
            return e.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0;
        default:
            return !1;
    }
}
function $p(t) {
    return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
}
var _i = !1;
function Wy(t, e) {
    switch (t) {
        case 'compositionend':
            return $p(e);
        case 'keypress':
            return e.which !== 32 ? null : ((yd = !0), gd);
        case 'textInput':
            return (t = e.data), t === gd && yd ? null : t;
        default:
            return null;
    }
}
function Uy(t, e) {
    if (_i)
        return t === 'compositionend' || (!Zc && Vp(t, e))
            ? ((t = zp()), (oo = qc = fn = null), (_i = !1), t)
            : null;
    switch (t) {
        case 'paste':
            return null;
        case 'keypress':
            if (
                !(e.ctrlKey || e.altKey || e.metaKey) ||
                (e.ctrlKey && e.altKey)
            ) {
                if (e.char && 1 < e.char.length) return e.char;
                if (e.which) return String.fromCharCode(e.which);
            }
            return null;
        case 'compositionend':
            return Bp && e.locale !== 'ko' ? null : e.data;
        default:
            return null;
    }
}
var Qy = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
function vd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!Qy[t.type] : e === 'textarea';
}
function Hp(t, e, n, i) {
    _p(i),
        (e = Lo(e, 'onChange')),
        0 < e.length &&
            ((n = new Gc('onChange', 'change', null, n, i)),
            t.push({ event: n, listeners: e }));
}
var Ms = null,
    Us = null;
function Yy(t) {
    em(t, 0);
}
function ua(t) {
    var e = Si(t);
    if (fp(e)) return t;
}
function Xy(t, e) {
    if (t === 'change') return e;
}
var Wp = !1;
if (en) {
    var $a;
    if (en) {
        var Ha = 'oninput' in document;
        if (!Ha) {
            var xd = document.createElement('div');
            xd.setAttribute('oninput', 'return;'),
                (Ha = typeof xd.oninput == 'function');
        }
        $a = Ha;
    } else $a = !1;
    Wp = $a && (!document.documentMode || 9 < document.documentMode);
}
function _d() {
    Ms && (Ms.detachEvent('onpropertychange', Up), (Us = Ms = null));
}
function Up(t) {
    if (t.propertyName === 'value' && ua(Us)) {
        var e = [];
        Hp(e, Us, t, Uc(t)), kp(Yy, e);
    }
}
function Ky(t, e, n) {
    t === 'focusin'
        ? (_d(), (Ms = e), (Us = n), Ms.attachEvent('onpropertychange', Up))
        : t === 'focusout' && _d();
}
function qy(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
        return ua(Us);
}
function Gy(t, e) {
    if (t === 'click') return ua(e);
}
function Jy(t, e) {
    if (t === 'input' || t === 'change') return ua(e);
}
function Zy(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Pt = typeof Object.is == 'function' ? Object.is : Zy;
function Qs(t, e) {
    if (Pt(t, e)) return !0;
    if (
        typeof t != 'object' ||
        t === null ||
        typeof e != 'object' ||
        e === null
    )
        return !1;
    var n = Object.keys(t),
        i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
        var s = n[i];
        if (!wl.call(e, s) || !Pt(t[s], e[s])) return !1;
    }
    return !0;
}
function bd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
}
function wd(t, e) {
    var n = bd(t);
    t = 0;
    for (var i; n; ) {
        if (n.nodeType === 3) {
            if (((i = t + n.textContent.length), t <= e && i >= e))
                return { node: n, offset: e - t };
            t = i;
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
        n = bd(n);
    }
}
function Qp(t, e) {
    return t && e
        ? t === e
            ? !0
            : t && t.nodeType === 3
            ? !1
            : e && e.nodeType === 3
            ? Qp(t, e.parentNode)
            : 'contains' in t
            ? t.contains(e)
            : t.compareDocumentPosition
            ? !!(t.compareDocumentPosition(e) & 16)
            : !1
        : !1;
}
function Yp() {
    for (var t = window, e = Po(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == 'string';
        } catch {
            n = !1;
        }
        if (n) t = e.contentWindow;
        else break;
        e = Po(t.document);
    }
    return e;
}
function eu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
        e &&
        ((e === 'input' &&
            (t.type === 'text' ||
                t.type === 'search' ||
                t.type === 'tel' ||
                t.type === 'url' ||
                t.type === 'password')) ||
            e === 'textarea' ||
            t.contentEditable === 'true')
    );
}
function ev(t) {
    var e = Yp(),
        n = t.focusedElem,
        i = t.selectionRange;
    if (
        e !== n &&
        n &&
        n.ownerDocument &&
        Qp(n.ownerDocument.documentElement, n)
    ) {
        if (i !== null && eu(n)) {
            if (
                ((e = i.start),
                (t = i.end),
                t === void 0 && (t = e),
                'selectionStart' in n)
            )
                (n.selectionStart = e),
                    (n.selectionEnd = Math.min(t, n.value.length));
            else if (
                ((t =
                    ((e = n.ownerDocument || document) && e.defaultView) ||
                    window),
                t.getSelection)
            ) {
                t = t.getSelection();
                var s = n.textContent.length,
                    r = Math.min(i.start, s);
                (i = i.end === void 0 ? r : Math.min(i.end, s)),
                    !t.extend && r > i && ((s = i), (i = r), (r = s)),
                    (s = wd(n, r));
                var o = wd(n, i);
                s &&
                    o &&
                    (t.rangeCount !== 1 ||
                        t.anchorNode !== s.node ||
                        t.anchorOffset !== s.offset ||
                        t.focusNode !== o.node ||
                        t.focusOffset !== o.offset) &&
                    ((e = e.createRange()),
                    e.setStart(s.node, s.offset),
                    t.removeAllRanges(),
                    r > i
                        ? (t.addRange(e), t.extend(o.node, o.offset))
                        : (e.setEnd(o.node, o.offset), t.addRange(e)));
            }
        }
        for (e = [], t = n; (t = t.parentNode); )
            t.nodeType === 1 &&
                e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
        for (
            typeof n.focus == 'function' && n.focus(), n = 0;
            n < e.length;
            n++
        )
            (t = e[n]),
                (t.element.scrollLeft = t.left),
                (t.element.scrollTop = t.top);
    }
}
var tv = en && 'documentMode' in document && 11 >= document.documentMode,
    bi = null,
    Vl = null,
    Ps = null,
    $l = !1;
function Sd(t, e, n) {
    var i =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    $l ||
        bi == null ||
        bi !== Po(i) ||
        ((i = bi),
        'selectionStart' in i && eu(i)
            ? (i = { start: i.selectionStart, end: i.selectionEnd })
            : ((i = (
                  (i.ownerDocument && i.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (i = {
                  anchorNode: i.anchorNode,
                  anchorOffset: i.anchorOffset,
                  focusNode: i.focusNode,
                  focusOffset: i.focusOffset,
              })),
        (Ps && Qs(Ps, i)) ||
            ((Ps = i),
            (i = Lo(Vl, 'onSelect')),
            0 < i.length &&
                ((e = new Gc('onSelect', 'select', null, e, n)),
                t.push({ event: e, listeners: i }),
                (e.target = bi))));
}
function Tr(t, e) {
    var n = {};
    return (
        (n[t.toLowerCase()] = e.toLowerCase()),
        (n['Webkit' + t] = 'webkit' + e),
        (n['Moz' + t] = 'moz' + e),
        n
    );
}
var wi = {
        animationend: Tr('Animation', 'AnimationEnd'),
        animationiteration: Tr('Animation', 'AnimationIteration'),
        animationstart: Tr('Animation', 'AnimationStart'),
        transitionend: Tr('Transition', 'TransitionEnd'),
    },
    Wa = {},
    Xp = {};
en &&
    ((Xp = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete wi.animationend.animation,
        delete wi.animationiteration.animation,
        delete wi.animationstart.animation),
    'TransitionEvent' in window || delete wi.transitionend.transition);
function da(t) {
    if (Wa[t]) return Wa[t];
    if (!wi[t]) return t;
    var e = wi[t],
        n;
    for (n in e) if (e.hasOwnProperty(n) && n in Xp) return (Wa[t] = e[n]);
    return t;
}
var Kp = da('animationend'),
    qp = da('animationiteration'),
    Gp = da('animationstart'),
    Jp = da('transitionend'),
    Zp = new Map(),
    kd =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' '
        );
function Rn(t, e) {
    Zp.set(t, e), hi(e, [t]);
}
for (var Ua = 0; Ua < kd.length; Ua++) {
    var Qa = kd[Ua],
        nv = Qa.toLowerCase(),
        iv = Qa[0].toUpperCase() + Qa.slice(1);
    Rn(nv, 'on' + iv);
}
Rn(Kp, 'onAnimationEnd');
Rn(qp, 'onAnimationIteration');
Rn(Gp, 'onAnimationStart');
Rn('dblclick', 'onDoubleClick');
Rn('focusin', 'onFocus');
Rn('focusout', 'onBlur');
Rn(Jp, 'onTransitionEnd');
Fi('onMouseEnter', ['mouseout', 'mouseover']);
Fi('onMouseLeave', ['mouseout', 'mouseover']);
Fi('onPointerEnter', ['pointerout', 'pointerover']);
Fi('onPointerLeave', ['pointerout', 'pointerover']);
hi(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
    )
);
hi(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
    )
);
hi('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
hi(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
hi(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
hi(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var ms =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
        ),
    sv = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(ms)
    );
function Cd(t, e, n) {
    var i = t.type || 'unknown-event';
    (t.currentTarget = n), ny(i, e, void 0, t), (t.currentTarget = null);
}
function em(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var i = t[n],
            s = i.event;
        i = i.listeners;
        e: {
            var r = void 0;
            if (e)
                for (var o = i.length - 1; 0 <= o; o--) {
                    var a = i[o],
                        l = a.instance,
                        c = a.currentTarget;
                    if (((a = a.listener), l !== r && s.isPropagationStopped()))
                        break e;
                    Cd(s, a, c), (r = l);
                }
            else
                for (o = 0; o < i.length; o++) {
                    if (
                        ((a = i[o]),
                        (l = a.instance),
                        (c = a.currentTarget),
                        (a = a.listener),
                        l !== r && s.isPropagationStopped())
                    )
                        break e;
                    Cd(s, a, c), (r = l);
                }
        }
    }
    if (To) throw ((t = Il), (To = !1), (Il = null), t);
}
function re(t, e) {
    var n = e[Yl];
    n === void 0 && (n = e[Yl] = new Set());
    var i = t + '__bubble';
    n.has(i) || (tm(e, t, 2, !1), n.add(i));
}
function Ya(t, e, n) {
    var i = 0;
    e && (i |= 4), tm(n, t, i, e);
}
var jr = '_reactListening' + Math.random().toString(36).slice(2);
function Ys(t) {
    if (!t[jr]) {
        (t[jr] = !0),
            lp.forEach(function (n) {
                n !== 'selectionchange' &&
                    (sv.has(n) || Ya(n, !1, t), Ya(n, !0, t));
            });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[jr] || ((e[jr] = !0), Ya('selectionchange', !1, e));
    }
}
function tm(t, e, n, i) {
    switch (Fp(e)) {
        case 1:
            var s = vy;
            break;
        case 4:
            s = xy;
            break;
        default:
            s = Kc;
    }
    (n = s.bind(null, e, n, t)),
        (s = void 0),
        !Al ||
            (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
            (s = !0),
        i
            ? s !== void 0
                ? t.addEventListener(e, n, { capture: !0, passive: s })
                : t.addEventListener(e, n, !0)
            : s !== void 0
            ? t.addEventListener(e, n, { passive: s })
            : t.addEventListener(e, n, !1);
}
function Xa(t, e, n, i, s) {
    var r = i;
    if (!(e & 1) && !(e & 2) && i !== null)
        e: for (;;) {
            if (i === null) return;
            var o = i.tag;
            if (o === 3 || o === 4) {
                var a = i.stateNode.containerInfo;
                if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
                if (o === 4)
                    for (o = i.return; o !== null; ) {
                        var l = o.tag;
                        if (
                            (l === 3 || l === 4) &&
                            ((l = o.stateNode.containerInfo),
                            l === s || (l.nodeType === 8 && l.parentNode === s))
                        )
                            return;
                        o = o.return;
                    }
                for (; a !== null; ) {
                    if (((o = Kn(a)), o === null)) return;
                    if (((l = o.tag), l === 5 || l === 6)) {
                        i = r = o;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            i = i.return;
        }
    kp(function () {
        var c = r,
            u = Uc(n),
            d = [];
        e: {
            var h = Zp.get(t);
            if (h !== void 0) {
                var p = Gc,
                    v = t;
                switch (t) {
                    case 'keypress':
                        if (ao(n) === 0) break e;
                    case 'keydown':
                    case 'keyup':
                        p = Ly;
                        break;
                    case 'focusin':
                        (v = 'focus'), (p = Va);
                        break;
                    case 'focusout':
                        (v = 'blur'), (p = Va);
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        p = Va;
                        break;
                    case 'click':
                        if (n.button === 2) break e;
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        p = fd;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        p = wy;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        p = Iy;
                        break;
                    case Kp:
                    case qp:
                    case Gp:
                        p = Cy;
                        break;
                    case Jp:
                        p = zy;
                        break;
                    case 'scroll':
                        p = _y;
                        break;
                    case 'wheel':
                        p = Vy;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        p = Py;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        p = md;
                }
                var y = (e & 4) !== 0,
                    _ = !y && t === 'scroll',
                    m = y ? (h !== null ? h + 'Capture' : null) : h;
                y = [];
                for (var g = c, x; g !== null; ) {
                    x = g;
                    var b = x.stateNode;
                    if (
                        (x.tag === 5 &&
                            b !== null &&
                            ((x = b),
                            m !== null &&
                                ((b = Vs(g, m)),
                                b != null && y.push(Xs(g, b, x)))),
                        _)
                    )
                        break;
                    g = g.return;
                }
                0 < y.length &&
                    ((h = new p(h, v, null, n, u)),
                    d.push({ event: h, listeners: y }));
            }
        }
        if (!(e & 7)) {
            e: {
                if (
                    ((h = t === 'mouseover' || t === 'pointerover'),
                    (p = t === 'mouseout' || t === 'pointerout'),
                    h &&
                        n !== Ll &&
                        (v = n.relatedTarget || n.fromElement) &&
                        (Kn(v) || v[tn]))
                )
                    break e;
                if (
                    (p || h) &&
                    ((h =
                        u.window === u
                            ? u
                            : (h = u.ownerDocument)
                            ? h.defaultView || h.parentWindow
                            : window),
                    p
                        ? ((v = n.relatedTarget || n.toElement),
                          (p = c),
                          (v = v ? Kn(v) : null),
                          v !== null &&
                              ((_ = fi(v)),
                              v !== _ || (v.tag !== 5 && v.tag !== 6)) &&
                              (v = null))
                        : ((p = null), (v = c)),
                    p !== v)
                ) {
                    if (
                        ((y = fd),
                        (b = 'onMouseLeave'),
                        (m = 'onMouseEnter'),
                        (g = 'mouse'),
                        (t === 'pointerout' || t === 'pointerover') &&
                            ((y = md),
                            (b = 'onPointerLeave'),
                            (m = 'onPointerEnter'),
                            (g = 'pointer')),
                        (_ = p == null ? h : Si(p)),
                        (x = v == null ? h : Si(v)),
                        (h = new y(b, g + 'leave', p, n, u)),
                        (h.target = _),
                        (h.relatedTarget = x),
                        (b = null),
                        Kn(u) === c &&
                            ((y = new y(m, g + 'enter', v, n, u)),
                            (y.target = x),
                            (y.relatedTarget = _),
                            (b = y)),
                        (_ = b),
                        p && v)
                    )
                        t: {
                            for (y = p, m = v, g = 0, x = y; x; x = mi(x)) g++;
                            for (x = 0, b = m; b; b = mi(b)) x++;
                            for (; 0 < g - x; ) (y = mi(y)), g--;
                            for (; 0 < x - g; ) (m = mi(m)), x--;
                            for (; g--; ) {
                                if (
                                    y === m ||
                                    (m !== null && y === m.alternate)
                                )
                                    break t;
                                (y = mi(y)), (m = mi(m));
                            }
                            y = null;
                        }
                    else y = null;
                    p !== null && Md(d, h, p, y, !1),
                        v !== null && _ !== null && Md(d, _, v, y, !0);
                }
            }
            e: {
                if (
                    ((h = c ? Si(c) : window),
                    (p = h.nodeName && h.nodeName.toLowerCase()),
                    p === 'select' || (p === 'input' && h.type === 'file'))
                )
                    var w = Xy;
                else if (vd(h))
                    if (Wp) w = Jy;
                    else {
                        w = qy;
                        var k = Ky;
                    }
                else
                    (p = h.nodeName) &&
                        p.toLowerCase() === 'input' &&
                        (h.type === 'checkbox' || h.type === 'radio') &&
                        (w = Gy);
                if (w && (w = w(t, c))) {
                    Hp(d, w, n, u);
                    break e;
                }
                k && k(t, h, c),
                    t === 'focusout' &&
                        (k = h._wrapperState) &&
                        k.controlled &&
                        h.type === 'number' &&
                        Tl(h, 'number', h.value);
            }
            switch (((k = c ? Si(c) : window), t)) {
                case 'focusin':
                    (vd(k) || k.contentEditable === 'true') &&
                        ((bi = k), (Vl = c), (Ps = null));
                    break;
                case 'focusout':
                    Ps = Vl = bi = null;
                    break;
                case 'mousedown':
                    $l = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ($l = !1), Sd(d, n, u);
                    break;
                case 'selectionchange':
                    if (tv) break;
                case 'keydown':
                case 'keyup':
                    Sd(d, n, u);
            }
            var S;
            if (Zc)
                e: {
                    switch (t) {
                        case 'compositionstart':
                            var M = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            M = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            M = 'onCompositionUpdate';
                            break e;
                    }
                    M = void 0;
                }
            else
                _i
                    ? Vp(t, n) && (M = 'onCompositionEnd')
                    : t === 'keydown' &&
                      n.keyCode === 229 &&
                      (M = 'onCompositionStart');
            M &&
                (Bp &&
                    n.locale !== 'ko' &&
                    (_i || M !== 'onCompositionStart'
                        ? M === 'onCompositionEnd' && _i && (S = zp())
                        : ((fn = u),
                          (qc = 'value' in fn ? fn.value : fn.textContent),
                          (_i = !0))),
                (k = Lo(c, M)),
                0 < k.length &&
                    ((M = new pd(M, t, null, n, u)),
                    d.push({ event: M, listeners: k }),
                    S
                        ? (M.data = S)
                        : ((S = $p(n)), S !== null && (M.data = S)))),
                (S = Hy ? Wy(t, n) : Uy(t, n)) &&
                    ((c = Lo(c, 'onBeforeInput')),
                    0 < c.length &&
                        ((u = new pd(
                            'onBeforeInput',
                            'beforeinput',
                            null,
                            n,
                            u
                        )),
                        d.push({ event: u, listeners: c }),
                        (u.data = S)));
        }
        em(d, e);
    });
}
function Xs(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
}
function Lo(t, e) {
    for (var n = e + 'Capture', i = []; t !== null; ) {
        var s = t,
            r = s.stateNode;
        s.tag === 5 &&
            r !== null &&
            ((s = r),
            (r = Vs(t, n)),
            r != null && i.unshift(Xs(t, r, s)),
            (r = Vs(t, e)),
            r != null && i.push(Xs(t, r, s))),
            (t = t.return);
    }
    return i;
}
function mi(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5);
    return t || null;
}
function Md(t, e, n, i, s) {
    for (var r = e._reactName, o = []; n !== null && n !== i; ) {
        var a = n,
            l = a.alternate,
            c = a.stateNode;
        if (l !== null && l === i) break;
        a.tag === 5 &&
            c !== null &&
            ((a = c),
            s
                ? ((l = Vs(n, r)), l != null && o.unshift(Xs(n, l, a)))
                : s || ((l = Vs(n, r)), l != null && o.push(Xs(n, l, a)))),
            (n = n.return);
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
}
var rv = /\r\n?/g,
    ov = /\u0000|\uFFFD/g;
function Pd(t) {
    return (typeof t == 'string' ? t : '' + t)
        .replace(
            rv,
            `
`
        )
        .replace(ov, '');
}
function Or(t, e, n) {
    if (((e = Pd(e)), Pd(t) !== e && n)) throw Error(P(425));
}
function Ro() {}
var Hl = null,
    Wl = null;
function Ul(t, e) {
    return (
        t === 'textarea' ||
        t === 'noscript' ||
        typeof e.children == 'string' ||
        typeof e.children == 'number' ||
        (typeof e.dangerouslySetInnerHTML == 'object' &&
            e.dangerouslySetInnerHTML !== null &&
            e.dangerouslySetInnerHTML.__html != null)
    );
}
var Ql = typeof setTimeout == 'function' ? setTimeout : void 0,
    av = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Ed = typeof Promise == 'function' ? Promise : void 0,
    lv =
        typeof queueMicrotask == 'function'
            ? queueMicrotask
            : typeof Ed < 'u'
            ? function (t) {
                  return Ed.resolve(null).then(t).catch(cv);
              }
            : Ql;
function cv(t) {
    setTimeout(function () {
        throw t;
    });
}
function Ka(t, e) {
    var n = e,
        i = 0;
    do {
        var s = n.nextSibling;
        if ((t.removeChild(n), s && s.nodeType === 8))
            if (((n = s.data), n === '/$')) {
                if (i === 0) {
                    t.removeChild(s), Ws(e);
                    return;
                }
                i--;
            } else (n !== '$' && n !== '$?' && n !== '$!') || i++;
        n = s;
    } while (n);
    Ws(e);
}
function kn(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
            if (((e = t.data), e === '$' || e === '$!' || e === '$?')) break;
            if (e === '/$') return null;
        }
    }
    return t;
}
function Td(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === '$' || n === '$!' || n === '$?') {
                if (e === 0) return t;
                e--;
            } else n === '/$' && e++;
        }
        t = t.previousSibling;
    }
    return null;
}
var qi = Math.random().toString(36).slice(2),
    At = '__reactFiber$' + qi,
    Ks = '__reactProps$' + qi,
    tn = '__reactContainer$' + qi,
    Yl = '__reactEvents$' + qi,
    uv = '__reactListeners$' + qi,
    dv = '__reactHandles$' + qi;
function Kn(t) {
    var e = t[At];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
        if ((e = n[tn] || n[At])) {
            if (
                ((n = e.alternate),
                e.child !== null || (n !== null && n.child !== null))
            )
                for (t = Td(t); t !== null; ) {
                    if ((n = t[At])) return n;
                    t = Td(t);
                }
            return e;
        }
        (t = n), (n = t.parentNode);
    }
    return null;
}
function mr(t) {
    return (
        (t = t[At] || t[tn]),
        !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3)
            ? null
            : t
    );
}
function Si(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(P(33));
}
function ha(t) {
    return t[Ks] || null;
}
var Xl = [],
    ki = -1;
function An(t) {
    return { current: t };
}
function ae(t) {
    0 > ki || ((t.current = Xl[ki]), (Xl[ki] = null), ki--);
}
function ie(t, e) {
    ki++, (Xl[ki] = t.current), (t.current = e);
}
var Nn = {},
    Fe = An(Nn),
    Ge = An(!1),
    si = Nn;
function zi(t, e) {
    var n = t.type.contextTypes;
    if (!n) return Nn;
    var i = t.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
        return i.__reactInternalMemoizedMaskedChildContext;
    var s = {},
        r;
    for (r in n) s[r] = e[r];
    return (
        i &&
            ((t = t.stateNode),
            (t.__reactInternalMemoizedUnmaskedChildContext = e),
            (t.__reactInternalMemoizedMaskedChildContext = s)),
        s
    );
}
function Je(t) {
    return (t = t.childContextTypes), t != null;
}
function Ao() {
    ae(Ge), ae(Fe);
}
function jd(t, e, n) {
    if (Fe.current !== Nn) throw Error(P(168));
    ie(Fe, e), ie(Ge, n);
}
function nm(t, e, n) {
    var i = t.stateNode;
    if (((e = e.childContextTypes), typeof i.getChildContext != 'function'))
        return n;
    i = i.getChildContext();
    for (var s in i) if (!(s in e)) throw Error(P(108, K0(t) || 'Unknown', s));
    return fe({}, n, i);
}
function Io(t) {
    return (
        (t =
            ((t = t.stateNode) &&
                t.__reactInternalMemoizedMergedChildContext) ||
            Nn),
        (si = Fe.current),
        ie(Fe, t),
        ie(Ge, Ge.current),
        !0
    );
}
function Od(t, e, n) {
    var i = t.stateNode;
    if (!i) throw Error(P(169));
    n
        ? ((t = nm(t, e, si)),
          (i.__reactInternalMemoizedMergedChildContext = t),
          ae(Ge),
          ae(Fe),
          ie(Fe, t))
        : ae(Ge),
        ie(Ge, n);
}
var Ut = null,
    fa = !1,
    qa = !1;
function im(t) {
    Ut === null ? (Ut = [t]) : Ut.push(t);
}
function hv(t) {
    (fa = !0), im(t);
}
function In() {
    if (!qa && Ut !== null) {
        qa = !0;
        var t = 0,
            e = Z;
        try {
            var n = Ut;
            for (Z = 1; t < n.length; t++) {
                var i = n[t];
                do i = i(!0);
                while (i !== null);
            }
            (Ut = null), (fa = !1);
        } catch (s) {
            throw (Ut !== null && (Ut = Ut.slice(t + 1)), Ep(Qc, In), s);
        } finally {
            (Z = e), (qa = !1);
        }
    }
    return null;
}
var Ci = [],
    Mi = 0,
    Fo = null,
    zo = 0,
    ht = [],
    ft = 0,
    ri = null,
    Xt = 1,
    Kt = '';
function Wn(t, e) {
    (Ci[Mi++] = zo), (Ci[Mi++] = Fo), (Fo = t), (zo = e);
}
function sm(t, e, n) {
    (ht[ft++] = Xt), (ht[ft++] = Kt), (ht[ft++] = ri), (ri = t);
    var i = Xt;
    t = Kt;
    var s = 32 - kt(i) - 1;
    (i &= ~(1 << s)), (n += 1);
    var r = 32 - kt(e) + s;
    if (30 < r) {
        var o = s - (s % 5);
        (r = (i & ((1 << o) - 1)).toString(32)),
            (i >>= o),
            (s -= o),
            (Xt = (1 << (32 - kt(e) + s)) | (n << s) | i),
            (Kt = r + t);
    } else (Xt = (1 << r) | (n << s) | i), (Kt = t);
}
function tu(t) {
    t.return !== null && (Wn(t, 1), sm(t, 1, 0));
}
function nu(t) {
    for (; t === Fo; )
        (Fo = Ci[--Mi]), (Ci[Mi] = null), (zo = Ci[--Mi]), (Ci[Mi] = null);
    for (; t === ri; )
        (ri = ht[--ft]),
            (ht[ft] = null),
            (Kt = ht[--ft]),
            (ht[ft] = null),
            (Xt = ht[--ft]),
            (ht[ft] = null);
}
var ot = null,
    rt = null,
    ue = !1,
    wt = null;
function rm(t, e) {
    var n = pt(5, null, null, 0);
    (n.elementType = 'DELETED'),
        (n.stateNode = e),
        (n.return = t),
        (e = t.deletions),
        e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Nd(t, e) {
    switch (t.tag) {
        case 5:
            var n = t.type;
            return (
                (e =
                    e.nodeType !== 1 ||
                    n.toLowerCase() !== e.nodeName.toLowerCase()
                        ? null
                        : e),
                e !== null
                    ? ((t.stateNode = e), (ot = t), (rt = kn(e.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
                e !== null ? ((t.stateNode = e), (ot = t), (rt = null), !0) : !1
            );
        case 13:
            return (
                (e = e.nodeType !== 8 ? null : e),
                e !== null
                    ? ((n = ri !== null ? { id: Xt, overflow: Kt } : null),
                      (t.memoizedState = {
                          dehydrated: e,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = pt(18, null, null, 0)),
                      (n.stateNode = e),
                      (n.return = t),
                      (t.child = n),
                      (ot = t),
                      (rt = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Kl(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function ql(t) {
    if (ue) {
        var e = rt;
        if (e) {
            var n = e;
            if (!Nd(t, e)) {
                if (Kl(t)) throw Error(P(418));
                e = kn(n.nextSibling);
                var i = ot;
                e && Nd(t, e)
                    ? rm(i, n)
                    : ((t.flags = (t.flags & -4097) | 2), (ue = !1), (ot = t));
            }
        } else {
            if (Kl(t)) throw Error(P(418));
            (t.flags = (t.flags & -4097) | 2), (ue = !1), (ot = t);
        }
    }
}
function Dd(t) {
    for (
        t = t.return;
        t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;

    )
        t = t.return;
    ot = t;
}
function Nr(t) {
    if (t !== ot) return !1;
    if (!ue) return Dd(t), (ue = !0), !1;
    var e;
    if (
        ((e = t.tag !== 3) &&
            !(e = t.tag !== 5) &&
            ((e = t.type),
            (e = e !== 'head' && e !== 'body' && !Ul(t.type, t.memoizedProps))),
        e && (e = rt))
    ) {
        if (Kl(t)) throw (om(), Error(P(418)));
        for (; e; ) rm(t, e), (e = kn(e.nextSibling));
    }
    if ((Dd(t), t.tag === 13)) {
        if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
            throw Error(P(317));
        e: {
            for (t = t.nextSibling, e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === '/$') {
                        if (e === 0) {
                            rt = kn(t.nextSibling);
                            break e;
                        }
                        e--;
                    } else (n !== '$' && n !== '$!' && n !== '$?') || e++;
                }
                t = t.nextSibling;
            }
            rt = null;
        }
    } else rt = ot ? kn(t.stateNode.nextSibling) : null;
    return !0;
}
function om() {
    for (var t = rt; t; ) t = kn(t.nextSibling);
}
function Bi() {
    (rt = ot = null), (ue = !1);
}
function iu(t) {
    wt === null ? (wt = [t]) : wt.push(t);
}
var fv = rn.ReactCurrentBatchConfig;
function _t(t, e) {
    if (t && t.defaultProps) {
        (e = fe({}, e)), (t = t.defaultProps);
        for (var n in t) e[n] === void 0 && (e[n] = t[n]);
        return e;
    }
    return e;
}
var Bo = An(null),
    Vo = null,
    Pi = null,
    su = null;
function ru() {
    su = Pi = Vo = null;
}
function ou(t) {
    var e = Bo.current;
    ae(Bo), (t._currentValue = e);
}
function Gl(t, e, n) {
    for (; t !== null; ) {
        var i = t.alternate;
        if (
            ((t.childLanes & e) !== e
                ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
                : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
            t === n)
        )
            break;
        t = t.return;
    }
}
function Li(t, e) {
    (Vo = t),
        (su = Pi = null),
        (t = t.dependencies),
        t !== null &&
            t.firstContext !== null &&
            (t.lanes & e && (Ke = !0), (t.firstContext = null));
}
function gt(t) {
    var e = t._currentValue;
    if (su !== t)
        if (((t = { context: t, memoizedValue: e, next: null }), Pi === null)) {
            if (Vo === null) throw Error(P(308));
            (Pi = t), (Vo.dependencies = { lanes: 0, firstContext: t });
        } else Pi = Pi.next = t;
    return e;
}
var qn = null;
function au(t) {
    qn === null ? (qn = [t]) : qn.push(t);
}
function am(t, e, n, i) {
    var s = e.interleaved;
    return (
        s === null ? ((n.next = n), au(e)) : ((n.next = s.next), (s.next = n)),
        (e.interleaved = n),
        nn(t, i)
    );
}
function nn(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
        (t.childLanes |= e),
            (n = t.alternate),
            n !== null && (n.childLanes |= e),
            (n = t),
            (t = t.return);
    return n.tag === 3 ? n.stateNode : null;
}
var un = !1;
function lu(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function lm(t, e) {
    (t = t.updateQueue),
        e.updateQueue === t &&
            (e.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                effects: t.effects,
            });
}
function Zt(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function Cn(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), Y & 2)) {
        var s = i.pending;
        return (
            s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
            (i.pending = e),
            nn(t, n)
        );
    }
    return (
        (s = i.interleaved),
        s === null ? ((e.next = e), au(i)) : ((e.next = s.next), (s.next = e)),
        (i.interleaved = e),
        nn(t, n)
    );
}
function lo(t, e, n) {
    if (
        ((e = e.updateQueue),
        e !== null && ((e = e.shared), (n & 4194240) !== 0))
    ) {
        var i = e.lanes;
        (i &= t.pendingLanes), (n |= i), (e.lanes = n), Yc(t, n);
    }
}
function Ld(t, e) {
    var n = t.updateQueue,
        i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
        var s = null,
            r = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                r === null ? (s = r = o) : (r = r.next = o), (n = n.next);
            } while (n !== null);
            r === null ? (s = r = e) : (r = r.next = e);
        } else s = r = e;
        (n = {
            baseState: i.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: r,
            shared: i.shared,
            effects: i.effects,
        }),
            (t.updateQueue = n);
        return;
    }
    (t = n.lastBaseUpdate),
        t === null ? (n.firstBaseUpdate = e) : (t.next = e),
        (n.lastBaseUpdate = e);
}
function $o(t, e, n, i) {
    var s = t.updateQueue;
    un = !1;
    var r = s.firstBaseUpdate,
        o = s.lastBaseUpdate,
        a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a,
            c = l.next;
        (l.next = null), o === null ? (r = c) : (o.next = c), (o = l);
        var u = t.alternate;
        u !== null &&
            ((u = u.updateQueue),
            (a = u.lastBaseUpdate),
            a !== o &&
                (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
                (u.lastBaseUpdate = l)));
    }
    if (r !== null) {
        var d = s.baseState;
        (o = 0), (u = c = l = null), (a = r);
        do {
            var h = a.lane,
                p = a.eventTime;
            if ((i & h) === h) {
                u !== null &&
                    (u = u.next =
                        {
                            eventTime: p,
                            lane: 0,
                            tag: a.tag,
                            payload: a.payload,
                            callback: a.callback,
                            next: null,
                        });
                e: {
                    var v = t,
                        y = a;
                    switch (((h = e), (p = n), y.tag)) {
                        case 1:
                            if (((v = y.payload), typeof v == 'function')) {
                                d = v.call(p, d, h);
                                break e;
                            }
                            d = v;
                            break e;
                        case 3:
                            v.flags = (v.flags & -65537) | 128;
                        case 0:
                            if (
                                ((v = y.payload),
                                (h =
                                    typeof v == 'function'
                                        ? v.call(p, d, h)
                                        : v),
                                h == null)
                            )
                                break e;
                            d = fe({}, d, h);
                            break e;
                        case 2:
                            un = !0;
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((t.flags |= 64),
                    (h = s.effects),
                    h === null ? (s.effects = [a]) : h.push(a));
            } else
                (p = {
                    eventTime: p,
                    lane: h,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null,
                }),
                    u === null ? ((c = u = p), (l = d)) : (u = u.next = p),
                    (o |= h);
            if (((a = a.next), a === null)) {
                if (((a = s.shared.pending), a === null)) break;
                (h = a),
                    (a = h.next),
                    (h.next = null),
                    (s.lastBaseUpdate = h),
                    (s.shared.pending = null);
            }
        } while (1);
        if (
            (u === null && (l = d),
            (s.baseState = l),
            (s.firstBaseUpdate = c),
            (s.lastBaseUpdate = u),
            (e = s.shared.interleaved),
            e !== null)
        ) {
            s = e;
            do (o |= s.lane), (s = s.next);
            while (s !== e);
        } else r === null && (s.shared.lanes = 0);
        (ai |= o), (t.lanes = o), (t.memoizedState = d);
    }
}
function Rd(t, e, n) {
    if (((t = e.effects), (e.effects = null), t !== null))
        for (e = 0; e < t.length; e++) {
            var i = t[e],
                s = i.callback;
            if (s !== null) {
                if (((i.callback = null), (i = n), typeof s != 'function'))
                    throw Error(P(191, s));
                s.call(i);
            }
        }
}
var cm = new ap.Component().refs;
function Jl(t, e, n, i) {
    (e = t.memoizedState),
        (n = n(i, e)),
        (n = n == null ? e : fe({}, e, n)),
        (t.memoizedState = n),
        t.lanes === 0 && (t.updateQueue.baseState = n);
}
var pa = {
    isMounted: function (t) {
        return (t = t._reactInternals) ? fi(t) === t : !1;
    },
    enqueueSetState: function (t, e, n) {
        t = t._reactInternals;
        var i = He(),
            s = Pn(t),
            r = Zt(i, s);
        (r.payload = e),
            n != null && (r.callback = n),
            (e = Cn(t, r, s)),
            e !== null && (Ct(e, t, s, i), lo(e, t, s));
    },
    enqueueReplaceState: function (t, e, n) {
        t = t._reactInternals;
        var i = He(),
            s = Pn(t),
            r = Zt(i, s);
        (r.tag = 1),
            (r.payload = e),
            n != null && (r.callback = n),
            (e = Cn(t, r, s)),
            e !== null && (Ct(e, t, s, i), lo(e, t, s));
    },
    enqueueForceUpdate: function (t, e) {
        t = t._reactInternals;
        var n = He(),
            i = Pn(t),
            s = Zt(n, i);
        (s.tag = 2),
            e != null && (s.callback = e),
            (e = Cn(t, s, i)),
            e !== null && (Ct(e, t, i, n), lo(e, t, i));
    },
};
function Ad(t, e, n, i, s, r, o) {
    return (
        (t = t.stateNode),
        typeof t.shouldComponentUpdate == 'function'
            ? t.shouldComponentUpdate(i, r, o)
            : e.prototype && e.prototype.isPureReactComponent
            ? !Qs(n, i) || !Qs(s, r)
            : !0
    );
}
function um(t, e, n) {
    var i = !1,
        s = Nn,
        r = e.contextType;
    return (
        typeof r == 'object' && r !== null
            ? (r = gt(r))
            : ((s = Je(e) ? si : Fe.current),
              (i = e.contextTypes),
              (r = (i = i != null) ? zi(t, s) : Nn)),
        (e = new e(n, r)),
        (t.memoizedState =
            e.state !== null && e.state !== void 0 ? e.state : null),
        (e.updater = pa),
        (t.stateNode = e),
        (e._reactInternals = t),
        i &&
            ((t = t.stateNode),
            (t.__reactInternalMemoizedUnmaskedChildContext = s),
            (t.__reactInternalMemoizedMaskedChildContext = r)),
        e
    );
}
function Id(t, e, n, i) {
    (t = e.state),
        typeof e.componentWillReceiveProps == 'function' &&
            e.componentWillReceiveProps(n, i),
        typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
            e.UNSAFE_componentWillReceiveProps(n, i),
        e.state !== t && pa.enqueueReplaceState(e, e.state, null);
}
function Zl(t, e, n, i) {
    var s = t.stateNode;
    (s.props = n), (s.state = t.memoizedState), (s.refs = cm), lu(t);
    var r = e.contextType;
    typeof r == 'object' && r !== null
        ? (s.context = gt(r))
        : ((r = Je(e) ? si : Fe.current), (s.context = zi(t, r))),
        (s.state = t.memoizedState),
        (r = e.getDerivedStateFromProps),
        typeof r == 'function' && (Jl(t, e, r, n), (s.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == 'function' ||
            typeof s.getSnapshotBeforeUpdate == 'function' ||
            (typeof s.UNSAFE_componentWillMount != 'function' &&
                typeof s.componentWillMount != 'function') ||
            ((e = s.state),
            typeof s.componentWillMount == 'function' && s.componentWillMount(),
            typeof s.UNSAFE_componentWillMount == 'function' &&
                s.UNSAFE_componentWillMount(),
            e !== s.state && pa.enqueueReplaceState(s, s.state, null),
            $o(t, n, s, i),
            (s.state = t.memoizedState)),
        typeof s.componentDidMount == 'function' && (t.flags |= 4194308);
}
function ss(t, e, n) {
    if (
        ((t = n.ref),
        t !== null && typeof t != 'function' && typeof t != 'object')
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(P(309));
                var i = n.stateNode;
            }
            if (!i) throw Error(P(147, t));
            var s = i,
                r = '' + t;
            return e !== null &&
                e.ref !== null &&
                typeof e.ref == 'function' &&
                e.ref._stringRef === r
                ? e.ref
                : ((e = function (o) {
                      var a = s.refs;
                      a === cm && (a = s.refs = {}),
                          o === null ? delete a[r] : (a[r] = o);
                  }),
                  (e._stringRef = r),
                  e);
        }
        if (typeof t != 'string') throw Error(P(284));
        if (!n._owner) throw Error(P(290, t));
    }
    return t;
}
function Dr(t, e) {
    throw (
        ((t = Object.prototype.toString.call(e)),
        Error(
            P(
                31,
                t === '[object Object]'
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t
            )
        ))
    );
}
function Fd(t) {
    var e = t._init;
    return e(t._payload);
}
function dm(t) {
    function e(m, g) {
        if (t) {
            var x = m.deletions;
            x === null ? ((m.deletions = [g]), (m.flags |= 16)) : x.push(g);
        }
    }
    function n(m, g) {
        if (!t) return null;
        for (; g !== null; ) e(m, g), (g = g.sibling);
        return null;
    }
    function i(m, g) {
        for (m = new Map(); g !== null; )
            g.key !== null ? m.set(g.key, g) : m.set(g.index, g),
                (g = g.sibling);
        return m;
    }
    function s(m, g) {
        return (m = En(m, g)), (m.index = 0), (m.sibling = null), m;
    }
    function r(m, g, x) {
        return (
            (m.index = x),
            t
                ? ((x = m.alternate),
                  x !== null
                      ? ((x = x.index), x < g ? ((m.flags |= 2), g) : x)
                      : ((m.flags |= 2), g))
                : ((m.flags |= 1048576), g)
        );
    }
    function o(m) {
        return t && m.alternate === null && (m.flags |= 2), m;
    }
    function a(m, g, x, b) {
        return g === null || g.tag !== 6
            ? ((g = il(x, m.mode, b)), (g.return = m), g)
            : ((g = s(g, x)), (g.return = m), g);
    }
    function l(m, g, x, b) {
        var w = x.type;
        return w === xi
            ? u(m, g, x.props.children, b, x.key)
            : g !== null &&
              (g.elementType === w ||
                  (typeof w == 'object' &&
                      w !== null &&
                      w.$$typeof === cn &&
                      Fd(w) === g.type))
            ? ((b = s(g, x.props)), (b.ref = ss(m, g, x)), (b.return = m), b)
            : ((b = mo(x.type, x.key, x.props, null, m.mode, b)),
              (b.ref = ss(m, g, x)),
              (b.return = m),
              b);
    }
    function c(m, g, x, b) {
        return g === null ||
            g.tag !== 4 ||
            g.stateNode.containerInfo !== x.containerInfo ||
            g.stateNode.implementation !== x.implementation
            ? ((g = sl(x, m.mode, b)), (g.return = m), g)
            : ((g = s(g, x.children || [])), (g.return = m), g);
    }
    function u(m, g, x, b, w) {
        return g === null || g.tag !== 7
            ? ((g = ei(x, m.mode, b, w)), (g.return = m), g)
            : ((g = s(g, x)), (g.return = m), g);
    }
    function d(m, g, x) {
        if ((typeof g == 'string' && g !== '') || typeof g == 'number')
            return (g = il('' + g, m.mode, x)), (g.return = m), g;
        if (typeof g == 'object' && g !== null) {
            switch (g.$$typeof) {
                case wr:
                    return (
                        (x = mo(g.type, g.key, g.props, null, m.mode, x)),
                        (x.ref = ss(m, null, g)),
                        (x.return = m),
                        x
                    );
                case vi:
                    return (g = sl(g, m.mode, x)), (g.return = m), g;
                case cn:
                    var b = g._init;
                    return d(m, b(g._payload), x);
            }
            if (fs(g) || Zi(g))
                return (g = ei(g, m.mode, x, null)), (g.return = m), g;
            Dr(m, g);
        }
        return null;
    }
    function h(m, g, x, b) {
        var w = g !== null ? g.key : null;
        if ((typeof x == 'string' && x !== '') || typeof x == 'number')
            return w !== null ? null : a(m, g, '' + x, b);
        if (typeof x == 'object' && x !== null) {
            switch (x.$$typeof) {
                case wr:
                    return x.key === w ? l(m, g, x, b) : null;
                case vi:
                    return x.key === w ? c(m, g, x, b) : null;
                case cn:
                    return (w = x._init), h(m, g, w(x._payload), b);
            }
            if (fs(x) || Zi(x)) return w !== null ? null : u(m, g, x, b, null);
            Dr(m, x);
        }
        return null;
    }
    function p(m, g, x, b, w) {
        if ((typeof b == 'string' && b !== '') || typeof b == 'number')
            return (m = m.get(x) || null), a(g, m, '' + b, w);
        if (typeof b == 'object' && b !== null) {
            switch (b.$$typeof) {
                case wr:
                    return (
                        (m = m.get(b.key === null ? x : b.key) || null),
                        l(g, m, b, w)
                    );
                case vi:
                    return (
                        (m = m.get(b.key === null ? x : b.key) || null),
                        c(g, m, b, w)
                    );
                case cn:
                    var k = b._init;
                    return p(m, g, x, k(b._payload), w);
            }
            if (fs(b) || Zi(b))
                return (m = m.get(x) || null), u(g, m, b, w, null);
            Dr(g, b);
        }
        return null;
    }
    function v(m, g, x, b) {
        for (
            var w = null, k = null, S = g, M = (g = 0), T = null;
            S !== null && M < x.length;
            M++
        ) {
            S.index > M ? ((T = S), (S = null)) : (T = S.sibling);
            var j = h(m, S, x[M], b);
            if (j === null) {
                S === null && (S = T);
                break;
            }
            t && S && j.alternate === null && e(m, S),
                (g = r(j, g, M)),
                k === null ? (w = j) : (k.sibling = j),
                (k = j),
                (S = T);
        }
        if (M === x.length) return n(m, S), ue && Wn(m, M), w;
        if (S === null) {
            for (; M < x.length; M++)
                (S = d(m, x[M], b)),
                    S !== null &&
                        ((g = r(S, g, M)),
                        k === null ? (w = S) : (k.sibling = S),
                        (k = S));
            return ue && Wn(m, M), w;
        }
        for (S = i(m, S); M < x.length; M++)
            (T = p(S, m, M, x[M], b)),
                T !== null &&
                    (t &&
                        T.alternate !== null &&
                        S.delete(T.key === null ? M : T.key),
                    (g = r(T, g, M)),
                    k === null ? (w = T) : (k.sibling = T),
                    (k = T));
        return (
            t &&
                S.forEach(function (R) {
                    return e(m, R);
                }),
            ue && Wn(m, M),
            w
        );
    }
    function y(m, g, x, b) {
        var w = Zi(x);
        if (typeof w != 'function') throw Error(P(150));
        if (((x = w.call(x)), x == null)) throw Error(P(151));
        for (
            var k = (w = null), S = g, M = (g = 0), T = null, j = x.next();
            S !== null && !j.done;
            M++, j = x.next()
        ) {
            S.index > M ? ((T = S), (S = null)) : (T = S.sibling);
            var R = h(m, S, j.value, b);
            if (R === null) {
                S === null && (S = T);
                break;
            }
            t && S && R.alternate === null && e(m, S),
                (g = r(R, g, M)),
                k === null ? (w = R) : (k.sibling = R),
                (k = R),
                (S = T);
        }
        if (j.done) return n(m, S), ue && Wn(m, M), w;
        if (S === null) {
            for (; !j.done; M++, j = x.next())
                (j = d(m, j.value, b)),
                    j !== null &&
                        ((g = r(j, g, M)),
                        k === null ? (w = j) : (k.sibling = j),
                        (k = j));
            return ue && Wn(m, M), w;
        }
        for (S = i(m, S); !j.done; M++, j = x.next())
            (j = p(S, m, M, j.value, b)),
                j !== null &&
                    (t &&
                        j.alternate !== null &&
                        S.delete(j.key === null ? M : j.key),
                    (g = r(j, g, M)),
                    k === null ? (w = j) : (k.sibling = j),
                    (k = j));
        return (
            t &&
                S.forEach(function (I) {
                    return e(m, I);
                }),
            ue && Wn(m, M),
            w
        );
    }
    function _(m, g, x, b) {
        if (
            (typeof x == 'object' &&
                x !== null &&
                x.type === xi &&
                x.key === null &&
                (x = x.props.children),
            typeof x == 'object' && x !== null)
        ) {
            switch (x.$$typeof) {
                case wr:
                    e: {
                        for (var w = x.key, k = g; k !== null; ) {
                            if (k.key === w) {
                                if (((w = x.type), w === xi)) {
                                    if (k.tag === 7) {
                                        n(m, k.sibling),
                                            (g = s(k, x.props.children)),
                                            (g.return = m),
                                            (m = g);
                                        break e;
                                    }
                                } else if (
                                    k.elementType === w ||
                                    (typeof w == 'object' &&
                                        w !== null &&
                                        w.$$typeof === cn &&
                                        Fd(w) === k.type)
                                ) {
                                    n(m, k.sibling),
                                        (g = s(k, x.props)),
                                        (g.ref = ss(m, k, x)),
                                        (g.return = m),
                                        (m = g);
                                    break e;
                                }
                                n(m, k);
                                break;
                            } else e(m, k);
                            k = k.sibling;
                        }
                        x.type === xi
                            ? ((g = ei(x.props.children, m.mode, b, x.key)),
                              (g.return = m),
                              (m = g))
                            : ((b = mo(
                                  x.type,
                                  x.key,
                                  x.props,
                                  null,
                                  m.mode,
                                  b
                              )),
                              (b.ref = ss(m, g, x)),
                              (b.return = m),
                              (m = b));
                    }
                    return o(m);
                case vi:
                    e: {
                        for (k = x.key; g !== null; ) {
                            if (g.key === k)
                                if (
                                    g.tag === 4 &&
                                    g.stateNode.containerInfo ===
                                        x.containerInfo &&
                                    g.stateNode.implementation ===
                                        x.implementation
                                ) {
                                    n(m, g.sibling),
                                        (g = s(g, x.children || [])),
                                        (g.return = m),
                                        (m = g);
                                    break e;
                                } else {
                                    n(m, g);
                                    break;
                                }
                            else e(m, g);
                            g = g.sibling;
                        }
                        (g = sl(x, m.mode, b)), (g.return = m), (m = g);
                    }
                    return o(m);
                case cn:
                    return (k = x._init), _(m, g, k(x._payload), b);
            }
            if (fs(x)) return v(m, g, x, b);
            if (Zi(x)) return y(m, g, x, b);
            Dr(m, x);
        }
        return (typeof x == 'string' && x !== '') || typeof x == 'number'
            ? ((x = '' + x),
              g !== null && g.tag === 6
                  ? (n(m, g.sibling), (g = s(g, x)), (g.return = m), (m = g))
                  : (n(m, g), (g = il(x, m.mode, b)), (g.return = m), (m = g)),
              o(m))
            : n(m, g);
    }
    return _;
}
var Vi = dm(!0),
    hm = dm(!1),
    gr = {},
    Ft = An(gr),
    qs = An(gr),
    Gs = An(gr);
function Gn(t) {
    if (t === gr) throw Error(P(174));
    return t;
}
function cu(t, e) {
    switch ((ie(Gs, e), ie(qs, t), ie(Ft, gr), (t = e.nodeType), t)) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : Ol(null, '');
            break;
        default:
            (t = t === 8 ? e.parentNode : e),
                (e = t.namespaceURI || null),
                (t = t.tagName),
                (e = Ol(e, t));
    }
    ae(Ft), ie(Ft, e);
}
function $i() {
    ae(Ft), ae(qs), ae(Gs);
}
function fm(t) {
    Gn(Gs.current);
    var e = Gn(Ft.current),
        n = Ol(e, t.type);
    e !== n && (ie(qs, t), ie(Ft, n));
}
function uu(t) {
    qs.current === t && (ae(Ft), ae(qs));
}
var de = An(0);
function Ho(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === '$?' || n.data === '$!')
            )
                return e;
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e;
        } else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return null;
            e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
}
var Ga = [];
function du() {
    for (var t = 0; t < Ga.length; t++)
        Ga[t]._workInProgressVersionPrimary = null;
    Ga.length = 0;
}
var co = rn.ReactCurrentDispatcher,
    Ja = rn.ReactCurrentBatchConfig,
    oi = 0,
    he = null,
    be = null,
    Me = null,
    Wo = !1,
    Es = !1,
    Js = 0,
    pv = 0;
function De() {
    throw Error(P(321));
}
function hu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!Pt(t[n], e[n])) return !1;
    return !0;
}
function fu(t, e, n, i, s, r) {
    if (
        ((oi = r),
        (he = e),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.lanes = 0),
        (co.current = t === null || t.memoizedState === null ? vv : xv),
        (t = n(i, s)),
        Es)
    ) {
        r = 0;
        do {
            if (((Es = !1), (Js = 0), 25 <= r)) throw Error(P(301));
            (r += 1),
                (Me = be = null),
                (e.updateQueue = null),
                (co.current = _v),
                (t = n(i, s));
        } while (Es);
    }
    if (
        ((co.current = Uo),
        (e = be !== null && be.next !== null),
        (oi = 0),
        (Me = be = he = null),
        (Wo = !1),
        e)
    )
        throw Error(P(300));
    return t;
}
function pu() {
    var t = Js !== 0;
    return (Js = 0), t;
}
function Lt() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return Me === null ? (he.memoizedState = Me = t) : (Me = Me.next = t), Me;
}
function yt() {
    if (be === null) {
        var t = he.alternate;
        t = t !== null ? t.memoizedState : null;
    } else t = be.next;
    var e = Me === null ? he.memoizedState : Me.next;
    if (e !== null) (Me = e), (be = t);
    else {
        if (t === null) throw Error(P(310));
        (be = t),
            (t = {
                memoizedState: be.memoizedState,
                baseState: be.baseState,
                baseQueue: be.baseQueue,
                queue: be.queue,
                next: null,
            }),
            Me === null ? (he.memoizedState = Me = t) : (Me = Me.next = t);
    }
    return Me;
}
function Zs(t, e) {
    return typeof e == 'function' ? e(t) : e;
}
function Za(t) {
    var e = yt(),
        n = e.queue;
    if (n === null) throw Error(P(311));
    n.lastRenderedReducer = t;
    var i = be,
        s = i.baseQueue,
        r = n.pending;
    if (r !== null) {
        if (s !== null) {
            var o = s.next;
            (s.next = r.next), (r.next = o);
        }
        (i.baseQueue = s = r), (n.pending = null);
    }
    if (s !== null) {
        (r = s.next), (i = i.baseState);
        var a = (o = null),
            l = null,
            c = r;
        do {
            var u = c.lane;
            if ((oi & u) === u)
                l !== null &&
                    (l = l.next =
                        {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                    (i = c.hasEagerState ? c.eagerState : t(i, c.action));
            else {
                var d = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                };
                l === null ? ((a = l = d), (o = i)) : (l = l.next = d),
                    (he.lanes |= u),
                    (ai |= u);
            }
            c = c.next;
        } while (c !== null && c !== r);
        l === null ? (o = i) : (l.next = a),
            Pt(i, e.memoizedState) || (Ke = !0),
            (e.memoizedState = i),
            (e.baseState = o),
            (e.baseQueue = l),
            (n.lastRenderedState = i);
    }
    if (((t = n.interleaved), t !== null)) {
        s = t;
        do (r = s.lane), (he.lanes |= r), (ai |= r), (s = s.next);
        while (s !== t);
    } else s === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch];
}
function el(t) {
    var e = yt(),
        n = e.queue;
    if (n === null) throw Error(P(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
        s = n.pending,
        r = e.memoizedState;
    if (s !== null) {
        n.pending = null;
        var o = (s = s.next);
        do (r = t(r, o.action)), (o = o.next);
        while (o !== s);
        Pt(r, e.memoizedState) || (Ke = !0),
            (e.memoizedState = r),
            e.baseQueue === null && (e.baseState = r),
            (n.lastRenderedState = r);
    }
    return [r, i];
}
function pm() {}
function mm(t, e) {
    var n = he,
        i = yt(),
        s = e(),
        r = !Pt(i.memoizedState, s);
    if (
        (r && ((i.memoizedState = s), (Ke = !0)),
        (i = i.queue),
        mu(vm.bind(null, n, i, t), [t]),
        i.getSnapshot !== e || r || (Me !== null && Me.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            er(9, ym.bind(null, n, i, s, e), void 0, null),
            Ee === null)
        )
            throw Error(P(349));
        oi & 30 || gm(n, e, s);
    }
    return s;
}
function gm(t, e, n) {
    (t.flags |= 16384),
        (t = { getSnapshot: e, value: n }),
        (e = he.updateQueue),
        e === null
            ? ((e = { lastEffect: null, stores: null }),
              (he.updateQueue = e),
              (e.stores = [t]))
            : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function ym(t, e, n, i) {
    (e.value = n), (e.getSnapshot = i), xm(e) && _m(t);
}
function vm(t, e, n) {
    return n(function () {
        xm(e) && _m(t);
    });
}
function xm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !Pt(t, n);
    } catch {
        return !0;
    }
}
function _m(t) {
    var e = nn(t, 1);
    e !== null && Ct(e, t, 1, -1);
}
function zd(t) {
    var e = Lt();
    return (
        typeof t == 'function' && (t = t()),
        (e.memoizedState = e.baseState = t),
        (t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Zs,
            lastRenderedState: t,
        }),
        (e.queue = t),
        (t = t.dispatch = yv.bind(null, he, t)),
        [e.memoizedState, t]
    );
}
function er(t, e, n, i) {
    return (
        (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
        (e = he.updateQueue),
        e === null
            ? ((e = { lastEffect: null, stores: null }),
              (he.updateQueue = e),
              (e.lastEffect = t.next = t))
            : ((n = e.lastEffect),
              n === null
                  ? (e.lastEffect = t.next = t)
                  : ((i = n.next),
                    (n.next = t),
                    (t.next = i),
                    (e.lastEffect = t))),
        t
    );
}
function bm() {
    return yt().memoizedState;
}
function uo(t, e, n, i) {
    var s = Lt();
    (he.flags |= t),
        (s.memoizedState = er(1 | e, n, void 0, i === void 0 ? null : i));
}
function ma(t, e, n, i) {
    var s = yt();
    i = i === void 0 ? null : i;
    var r = void 0;
    if (be !== null) {
        var o = be.memoizedState;
        if (((r = o.destroy), i !== null && hu(i, o.deps))) {
            s.memoizedState = er(e, n, r, i);
            return;
        }
    }
    (he.flags |= t), (s.memoizedState = er(1 | e, n, r, i));
}
function Bd(t, e) {
    return uo(8390656, 8, t, e);
}
function mu(t, e) {
    return ma(2048, 8, t, e);
}
function wm(t, e) {
    return ma(4, 2, t, e);
}
function Sm(t, e) {
    return ma(4, 4, t, e);
}
function km(t, e) {
    if (typeof e == 'function')
        return (
            (t = t()),
            e(t),
            function () {
                e(null);
            }
        );
    if (e != null)
        return (
            (t = t()),
            (e.current = t),
            function () {
                e.current = null;
            }
        );
}
function Cm(t, e, n) {
    return (
        (n = n != null ? n.concat([t]) : null), ma(4, 4, km.bind(null, e, t), n)
    );
}
function gu() {}
function Mm(t, e) {
    var n = yt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && hu(e, i[1])
        ? i[0]
        : ((n.memoizedState = [t, e]), t);
}
function Pm(t, e) {
    var n = yt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && hu(e, i[1])
        ? i[0]
        : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Em(t, e, n) {
    return oi & 21
        ? (Pt(n, e) ||
              ((n = Op()), (he.lanes |= n), (ai |= n), (t.baseState = !0)),
          e)
        : (t.baseState && ((t.baseState = !1), (Ke = !0)),
          (t.memoizedState = n));
}
function mv(t, e) {
    var n = Z;
    (Z = n !== 0 && 4 > n ? n : 4), t(!0);
    var i = Ja.transition;
    Ja.transition = {};
    try {
        t(!1), e();
    } finally {
        (Z = n), (Ja.transition = i);
    }
}
function Tm() {
    return yt().memoizedState;
}
function gv(t, e, n) {
    var i = Pn(t);
    if (
        ((n = {
            lane: i,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        jm(t))
    )
        Om(e, n);
    else if (((n = am(t, e, n, i)), n !== null)) {
        var s = He();
        Ct(n, t, i, s), Nm(n, e, i);
    }
}
function yv(t, e, n) {
    var i = Pn(t),
        s = {
            lane: i,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (jm(t)) Om(e, s);
    else {
        var r = t.alternate;
        if (
            t.lanes === 0 &&
            (r === null || r.lanes === 0) &&
            ((r = e.lastRenderedReducer), r !== null)
        )
            try {
                var o = e.lastRenderedState,
                    a = r(o, n);
                if (((s.hasEagerState = !0), (s.eagerState = a), Pt(a, o))) {
                    var l = e.interleaved;
                    l === null
                        ? ((s.next = s), au(e))
                        : ((s.next = l.next), (l.next = s)),
                        (e.interleaved = s);
                    return;
                }
            } catch {
            } finally {
            }
        (n = am(t, e, s, i)),
            n !== null && ((s = He()), Ct(n, t, i, s), Nm(n, e, i));
    }
}
function jm(t) {
    var e = t.alternate;
    return t === he || (e !== null && e === he);
}
function Om(t, e) {
    Es = Wo = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (t.pending = e);
}
function Nm(t, e, n) {
    if (n & 4194240) {
        var i = e.lanes;
        (i &= t.pendingLanes), (n |= i), (e.lanes = n), Yc(t, n);
    }
}
var Uo = {
        readContext: gt,
        useCallback: De,
        useContext: De,
        useEffect: De,
        useImperativeHandle: De,
        useInsertionEffect: De,
        useLayoutEffect: De,
        useMemo: De,
        useReducer: De,
        useRef: De,
        useState: De,
        useDebugValue: De,
        useDeferredValue: De,
        useTransition: De,
        useMutableSource: De,
        useSyncExternalStore: De,
        useId: De,
        unstable_isNewReconciler: !1,
    },
    vv = {
        readContext: gt,
        useCallback: function (t, e) {
            return (Lt().memoizedState = [t, e === void 0 ? null : e]), t;
        },
        useContext: gt,
        useEffect: Bd,
        useImperativeHandle: function (t, e, n) {
            return (
                (n = n != null ? n.concat([t]) : null),
                uo(4194308, 4, km.bind(null, e, t), n)
            );
        },
        useLayoutEffect: function (t, e) {
            return uo(4194308, 4, t, e);
        },
        useInsertionEffect: function (t, e) {
            return uo(4, 2, t, e);
        },
        useMemo: function (t, e) {
            var n = Lt();
            return (
                (e = e === void 0 ? null : e),
                (t = t()),
                (n.memoizedState = [t, e]),
                t
            );
        },
        useReducer: function (t, e, n) {
            var i = Lt();
            return (
                (e = n !== void 0 ? n(e) : e),
                (i.memoizedState = i.baseState = e),
                (t = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: e,
                }),
                (i.queue = t),
                (t = t.dispatch = gv.bind(null, he, t)),
                [i.memoizedState, t]
            );
        },
        useRef: function (t) {
            var e = Lt();
            return (t = { current: t }), (e.memoizedState = t);
        },
        useState: zd,
        useDebugValue: gu,
        useDeferredValue: function (t) {
            return (Lt().memoizedState = t);
        },
        useTransition: function () {
            var t = zd(!1),
                e = t[0];
            return (t = mv.bind(null, t[1])), (Lt().memoizedState = t), [e, t];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (t, e, n) {
            var i = he,
                s = Lt();
            if (ue) {
                if (n === void 0) throw Error(P(407));
                n = n();
            } else {
                if (((n = e()), Ee === null)) throw Error(P(349));
                oi & 30 || gm(i, e, n);
            }
            s.memoizedState = n;
            var r = { value: n, getSnapshot: e };
            return (
                (s.queue = r),
                Bd(vm.bind(null, i, r, t), [t]),
                (i.flags |= 2048),
                er(9, ym.bind(null, i, r, n, e), void 0, null),
                n
            );
        },
        useId: function () {
            var t = Lt(),
                e = Ee.identifierPrefix;
            if (ue) {
                var n = Kt,
                    i = Xt;
                (n = (i & ~(1 << (32 - kt(i) - 1))).toString(32) + n),
                    (e = ':' + e + 'R' + n),
                    (n = Js++),
                    0 < n && (e += 'H' + n.toString(32)),
                    (e += ':');
            } else (n = pv++), (e = ':' + e + 'r' + n.toString(32) + ':');
            return (t.memoizedState = e);
        },
        unstable_isNewReconciler: !1,
    },
    xv = {
        readContext: gt,
        useCallback: Mm,
        useContext: gt,
        useEffect: mu,
        useImperativeHandle: Cm,
        useInsertionEffect: wm,
        useLayoutEffect: Sm,
        useMemo: Pm,
        useReducer: Za,
        useRef: bm,
        useState: function () {
            return Za(Zs);
        },
        useDebugValue: gu,
        useDeferredValue: function (t) {
            var e = yt();
            return Em(e, be.memoizedState, t);
        },
        useTransition: function () {
            var t = Za(Zs)[0],
                e = yt().memoizedState;
            return [t, e];
        },
        useMutableSource: pm,
        useSyncExternalStore: mm,
        useId: Tm,
        unstable_isNewReconciler: !1,
    },
    _v = {
        readContext: gt,
        useCallback: Mm,
        useContext: gt,
        useEffect: mu,
        useImperativeHandle: Cm,
        useInsertionEffect: wm,
        useLayoutEffect: Sm,
        useMemo: Pm,
        useReducer: el,
        useRef: bm,
        useState: function () {
            return el(Zs);
        },
        useDebugValue: gu,
        useDeferredValue: function (t) {
            var e = yt();
            return be === null
                ? (e.memoizedState = t)
                : Em(e, be.memoizedState, t);
        },
        useTransition: function () {
            var t = el(Zs)[0],
                e = yt().memoizedState;
            return [t, e];
        },
        useMutableSource: pm,
        useSyncExternalStore: mm,
        useId: Tm,
        unstable_isNewReconciler: !1,
    };
function Hi(t, e) {
    try {
        var n = '',
            i = e;
        do (n += X0(i)), (i = i.return);
        while (i);
        var s = n;
    } catch (r) {
        s =
            `
Error generating stack: ` +
            r.message +
            `
` +
            r.stack;
    }
    return { value: t, source: e, stack: s, digest: null };
}
function tl(t, e, n) {
    return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function ec(t, e) {
    try {
        console.error(e.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var bv = typeof WeakMap == 'function' ? WeakMap : Map;
function Dm(t, e, n) {
    (n = Zt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var i = e.value;
    return (
        (n.callback = function () {
            Yo || ((Yo = !0), (uc = i)), ec(t, e);
        }),
        n
    );
}
function Lm(t, e, n) {
    (n = Zt(-1, n)), (n.tag = 3);
    var i = t.type.getDerivedStateFromError;
    if (typeof i == 'function') {
        var s = e.value;
        (n.payload = function () {
            return i(s);
        }),
            (n.callback = function () {
                ec(t, e);
            });
    }
    var r = t.stateNode;
    return (
        r !== null &&
            typeof r.componentDidCatch == 'function' &&
            (n.callback = function () {
                ec(t, e),
                    typeof i != 'function' &&
                        (Mn === null ? (Mn = new Set([this])) : Mn.add(this));
                var o = e.stack;
                this.componentDidCatch(e.value, {
                    componentStack: o !== null ? o : '',
                });
            }),
        n
    );
}
function Vd(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
        i = t.pingCache = new bv();
        var s = new Set();
        i.set(e, s);
    } else (s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s));
    s.has(n) || (s.add(n), (t = Rv.bind(null, t, e, n)), e.then(t, t));
}
function $d(t) {
    do {
        var e;
        if (
            ((e = t.tag === 13) &&
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated !== null : !0)),
            e)
        )
            return t;
        t = t.return;
    } while (t !== null);
    return null;
}
function Hd(t, e, n, i, s) {
    return t.mode & 1
        ? ((t.flags |= 65536), (t.lanes = s), t)
        : (t === e
              ? (t.flags |= 65536)
              : ((t.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((e = Zt(-1, 1)), (e.tag = 2), Cn(n, e, 1))),
                (n.lanes |= 1)),
          t);
}
var wv = rn.ReactCurrentOwner,
    Ke = !1;
function $e(t, e, n, i) {
    e.child = t === null ? hm(e, null, n, i) : Vi(e, t.child, n, i);
}
function Wd(t, e, n, i, s) {
    n = n.render;
    var r = e.ref;
    return (
        Li(e, s),
        (i = fu(t, e, n, i, r, s)),
        (n = pu()),
        t !== null && !Ke
            ? ((e.updateQueue = t.updateQueue),
              (e.flags &= -2053),
              (t.lanes &= ~s),
              sn(t, e, s))
            : (ue && n && tu(e), (e.flags |= 1), $e(t, e, i, s), e.child)
    );
}
function Ud(t, e, n, i, s) {
    if (t === null) {
        var r = n.type;
        return typeof r == 'function' &&
            !ku(r) &&
            r.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((e.tag = 15), (e.type = r), Rm(t, e, r, i, s))
            : ((t = mo(n.type, null, i, e, e.mode, s)),
              (t.ref = e.ref),
              (t.return = e),
              (e.child = t));
    }
    if (((r = t.child), !(t.lanes & s))) {
        var o = r.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : Qs),
            n(o, i) && t.ref === e.ref)
        )
            return sn(t, e, s);
    }
    return (
        (e.flags |= 1),
        (t = En(r, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t)
    );
}
function Rm(t, e, n, i, s) {
    if (t !== null) {
        var r = t.memoizedProps;
        if (Qs(r, i) && t.ref === e.ref)
            if (((Ke = !1), (e.pendingProps = i = r), (t.lanes & s) !== 0))
                t.flags & 131072 && (Ke = !0);
            else return (e.lanes = t.lanes), sn(t, e, s);
    }
    return tc(t, e, n, i, s);
}
function Am(t, e, n) {
    var i = e.pendingProps,
        s = i.children,
        r = t !== null ? t.memoizedState : null;
    if (i.mode === 'hidden')
        if (!(e.mode & 1))
            (e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                ie(Ti, it),
                (it |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (t = r !== null ? r.baseLanes | n : n),
                    (e.lanes = e.childLanes = 1073741824),
                    (e.memoizedState = {
                        baseLanes: t,
                        cachePool: null,
                        transitions: null,
                    }),
                    (e.updateQueue = null),
                    ie(Ti, it),
                    (it |= t),
                    null
                );
            (e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (i = r !== null ? r.baseLanes : n),
                ie(Ti, it),
                (it |= i);
        }
    else
        r !== null
            ? ((i = r.baseLanes | n), (e.memoizedState = null))
            : (i = n),
            ie(Ti, it),
            (it |= i);
    return $e(t, e, s, n), e.child;
}
function Im(t, e) {
    var n = e.ref;
    ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
        ((e.flags |= 512), (e.flags |= 2097152));
}
function tc(t, e, n, i, s) {
    var r = Je(n) ? si : Fe.current;
    return (
        (r = zi(e, r)),
        Li(e, s),
        (n = fu(t, e, n, i, r, s)),
        (i = pu()),
        t !== null && !Ke
            ? ((e.updateQueue = t.updateQueue),
              (e.flags &= -2053),
              (t.lanes &= ~s),
              sn(t, e, s))
            : (ue && i && tu(e), (e.flags |= 1), $e(t, e, n, s), e.child)
    );
}
function Qd(t, e, n, i, s) {
    if (Je(n)) {
        var r = !0;
        Io(e);
    } else r = !1;
    if ((Li(e, s), e.stateNode === null))
        ho(t, e), um(e, n, i), Zl(e, n, i, s), (i = !0);
    else if (t === null) {
        var o = e.stateNode,
            a = e.memoizedProps;
        o.props = a;
        var l = o.context,
            c = n.contextType;
        typeof c == 'object' && c !== null
            ? (c = gt(c))
            : ((c = Je(n) ? si : Fe.current), (c = zi(e, c)));
        var u = n.getDerivedStateFromProps,
            d =
                typeof u == 'function' ||
                typeof o.getSnapshotBeforeUpdate == 'function';
        d ||
            (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof o.componentWillReceiveProps != 'function') ||
            ((a !== i || l !== c) && Id(e, o, i, c)),
            (un = !1);
        var h = e.memoizedState;
        (o.state = h),
            $o(e, i, o, s),
            (l = e.memoizedState),
            a !== i || h !== l || Ge.current || un
                ? (typeof u == 'function' &&
                      (Jl(e, n, u, i), (l = e.memoizedState)),
                  (a = un || Ad(e, n, a, i, h, l, c))
                      ? (d ||
                            (typeof o.UNSAFE_componentWillMount != 'function' &&
                                typeof o.componentWillMount != 'function') ||
                            (typeof o.componentWillMount == 'function' &&
                                o.componentWillMount(),
                            typeof o.UNSAFE_componentWillMount == 'function' &&
                                o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == 'function' &&
                            (e.flags |= 4194308))
                      : (typeof o.componentDidMount == 'function' &&
                            (e.flags |= 4194308),
                        (e.memoizedProps = i),
                        (e.memoizedState = l)),
                  (o.props = i),
                  (o.state = l),
                  (o.context = c),
                  (i = a))
                : (typeof o.componentDidMount == 'function' &&
                      (e.flags |= 4194308),
                  (i = !1));
    } else {
        (o = e.stateNode),
            lm(t, e),
            (a = e.memoizedProps),
            (c = e.type === e.elementType ? a : _t(e.type, a)),
            (o.props = c),
            (d = e.pendingProps),
            (h = o.context),
            (l = n.contextType),
            typeof l == 'object' && l !== null
                ? (l = gt(l))
                : ((l = Je(n) ? si : Fe.current), (l = zi(e, l)));
        var p = n.getDerivedStateFromProps;
        (u =
            typeof p == 'function' ||
            typeof o.getSnapshotBeforeUpdate == 'function') ||
            (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof o.componentWillReceiveProps != 'function') ||
            ((a !== d || h !== l) && Id(e, o, i, l)),
            (un = !1),
            (h = e.memoizedState),
            (o.state = h),
            $o(e, i, o, s);
        var v = e.memoizedState;
        a !== d || h !== v || Ge.current || un
            ? (typeof p == 'function' &&
                  (Jl(e, n, p, i), (v = e.memoizedState)),
              (c = un || Ad(e, n, c, i, h, v, l) || !1)
                  ? (u ||
                        (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                            typeof o.componentWillUpdate != 'function') ||
                        (typeof o.componentWillUpdate == 'function' &&
                            o.componentWillUpdate(i, v, l),
                        typeof o.UNSAFE_componentWillUpdate == 'function' &&
                            o.UNSAFE_componentWillUpdate(i, v, l)),
                    typeof o.componentDidUpdate == 'function' && (e.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == 'function' &&
                        (e.flags |= 1024))
                  : (typeof o.componentDidUpdate != 'function' ||
                        (a === t.memoizedProps && h === t.memoizedState) ||
                        (e.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != 'function' ||
                        (a === t.memoizedProps && h === t.memoizedState) ||
                        (e.flags |= 1024),
                    (e.memoizedProps = i),
                    (e.memoizedState = v)),
              (o.props = i),
              (o.state = v),
              (o.context = l),
              (i = c))
            : (typeof o.componentDidUpdate != 'function' ||
                  (a === t.memoizedProps && h === t.memoizedState) ||
                  (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                  (a === t.memoizedProps && h === t.memoizedState) ||
                  (e.flags |= 1024),
              (i = !1));
    }
    return nc(t, e, n, i, r, s);
}
function nc(t, e, n, i, s, r) {
    Im(t, e);
    var o = (e.flags & 128) !== 0;
    if (!i && !o) return s && Od(e, n, !1), sn(t, e, r);
    (i = e.stateNode), (wv.current = e);
    var a =
        o && typeof n.getDerivedStateFromError != 'function'
            ? null
            : i.render();
    return (
        (e.flags |= 1),
        t !== null && o
            ? ((e.child = Vi(e, t.child, null, r)),
              (e.child = Vi(e, null, a, r)))
            : $e(t, e, a, r),
        (e.memoizedState = i.state),
        s && Od(e, n, !0),
        e.child
    );
}
function Fm(t) {
    var e = t.stateNode;
    e.pendingContext
        ? jd(t, e.pendingContext, e.pendingContext !== e.context)
        : e.context && jd(t, e.context, !1),
        cu(t, e.containerInfo);
}
function Yd(t, e, n, i, s) {
    return Bi(), iu(s), (e.flags |= 256), $e(t, e, n, i), e.child;
}
var ic = { dehydrated: null, treeContext: null, retryLane: 0 };
function sc(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
}
function zm(t, e, n) {
    var i = e.pendingProps,
        s = de.current,
        r = !1,
        o = (e.flags & 128) !== 0,
        a;
    if (
        ((a = o) ||
            (a = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0),
        a
            ? ((r = !0), (e.flags &= -129))
            : (t === null || t.memoizedState !== null) && (s |= 1),
        ie(de, s & 1),
        t === null)
    )
        return (
            ql(e),
            (t = e.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null)
                ? (e.mode & 1
                      ? t.data === '$!'
                          ? (e.lanes = 8)
                          : (e.lanes = 1073741824)
                      : (e.lanes = 1),
                  null)
                : ((o = i.children),
                  (t = i.fallback),
                  r
                      ? ((i = e.mode),
                        (r = e.child),
                        (o = { mode: 'hidden', children: o }),
                        !(i & 1) && r !== null
                            ? ((r.childLanes = 0), (r.pendingProps = o))
                            : (r = va(o, i, 0, null)),
                        (t = ei(t, i, n, null)),
                        (r.return = e),
                        (t.return = e),
                        (r.sibling = t),
                        (e.child = r),
                        (e.child.memoizedState = sc(n)),
                        (e.memoizedState = ic),
                        t)
                      : yu(e, o))
        );
    if (((s = t.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
        return Sv(t, e, o, i, a, s, n);
    if (r) {
        (r = i.fallback), (o = e.mode), (s = t.child), (a = s.sibling);
        var l = { mode: 'hidden', children: i.children };
        return (
            !(o & 1) && e.child !== s
                ? ((i = e.child),
                  (i.childLanes = 0),
                  (i.pendingProps = l),
                  (e.deletions = null))
                : ((i = En(s, l)),
                  (i.subtreeFlags = s.subtreeFlags & 14680064)),
            a !== null
                ? (r = En(a, r))
                : ((r = ei(r, o, n, null)), (r.flags |= 2)),
            (r.return = e),
            (i.return = e),
            (i.sibling = r),
            (e.child = i),
            (i = r),
            (r = e.child),
            (o = t.child.memoizedState),
            (o =
                o === null
                    ? sc(n)
                    : {
                          baseLanes: o.baseLanes | n,
                          cachePool: null,
                          transitions: o.transitions,
                      }),
            (r.memoizedState = o),
            (r.childLanes = t.childLanes & ~n),
            (e.memoizedState = ic),
            i
        );
    }
    return (
        (r = t.child),
        (t = r.sibling),
        (i = En(r, { mode: 'visible', children: i.children })),
        !(e.mode & 1) && (i.lanes = n),
        (i.return = e),
        (i.sibling = null),
        t !== null &&
            ((n = e.deletions),
            n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
        (e.child = i),
        (e.memoizedState = null),
        i
    );
}
function yu(t, e) {
    return (
        (e = va({ mode: 'visible', children: e }, t.mode, 0, null)),
        (e.return = t),
        (t.child = e)
    );
}
function Lr(t, e, n, i) {
    return (
        i !== null && iu(i),
        Vi(e, t.child, null, n),
        (t = yu(e, e.pendingProps.children)),
        (t.flags |= 2),
        (e.memoizedState = null),
        t
    );
}
function Sv(t, e, n, i, s, r, o) {
    if (n)
        return e.flags & 256
            ? ((e.flags &= -257), (i = tl(Error(P(422)))), Lr(t, e, o, i))
            : e.memoizedState !== null
            ? ((e.child = t.child), (e.flags |= 128), null)
            : ((r = i.fallback),
              (s = e.mode),
              (i = va({ mode: 'visible', children: i.children }, s, 0, null)),
              (r = ei(r, s, o, null)),
              (r.flags |= 2),
              (i.return = e),
              (r.return = e),
              (i.sibling = r),
              (e.child = i),
              e.mode & 1 && Vi(e, t.child, null, o),
              (e.child.memoizedState = sc(o)),
              (e.memoizedState = ic),
              r);
    if (!(e.mode & 1)) return Lr(t, e, o, null);
    if (s.data === '$!') {
        if (((i = s.nextSibling && s.nextSibling.dataset), i)) var a = i.dgst;
        return (
            (i = a), (r = Error(P(419))), (i = tl(r, i, void 0)), Lr(t, e, o, i)
        );
    }
    if (((a = (o & t.childLanes) !== 0), Ke || a)) {
        if (((i = Ee), i !== null)) {
            switch (o & -o) {
                case 4:
                    s = 2;
                    break;
                case 16:
                    s = 8;
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
                    s = 32;
                    break;
                case 536870912:
                    s = 268435456;
                    break;
                default:
                    s = 0;
            }
            (s = s & (i.suspendedLanes | o) ? 0 : s),
                s !== 0 &&
                    s !== r.retryLane &&
                    ((r.retryLane = s), nn(t, s), Ct(i, t, s, -1));
        }
        return Su(), (i = tl(Error(P(421)))), Lr(t, e, o, i);
    }
    return s.data === '$?'
        ? ((e.flags |= 128),
          (e.child = t.child),
          (e = Av.bind(null, t)),
          (s._reactRetry = e),
          null)
        : ((t = r.treeContext),
          (rt = kn(s.nextSibling)),
          (ot = e),
          (ue = !0),
          (wt = null),
          t !== null &&
              ((ht[ft++] = Xt),
              (ht[ft++] = Kt),
              (ht[ft++] = ri),
              (Xt = t.id),
              (Kt = t.overflow),
              (ri = e)),
          (e = yu(e, i.children)),
          (e.flags |= 4096),
          e);
}
function Xd(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), Gl(t.return, e, n);
}
function nl(t, e, n, i, s) {
    var r = t.memoizedState;
    r === null
        ? (t.memoizedState = {
              isBackwards: e,
              rendering: null,
              renderingStartTime: 0,
              last: i,
              tail: n,
              tailMode: s,
          })
        : ((r.isBackwards = e),
          (r.rendering = null),
          (r.renderingStartTime = 0),
          (r.last = i),
          (r.tail = n),
          (r.tailMode = s));
}
function Bm(t, e, n) {
    var i = e.pendingProps,
        s = i.revealOrder,
        r = i.tail;
    if (($e(t, e, i.children, n), (i = de.current), i & 2))
        (i = (i & 1) | 2), (e.flags |= 128);
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13) t.memoizedState !== null && Xd(t, n, e);
                else if (t.tag === 19) Xd(t, n, e);
                else if (t.child !== null) {
                    (t.child.return = t), (t = t.child);
                    continue;
                }
                if (t === e) break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) break e;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
        i &= 1;
    }
    if ((ie(de, i), !(e.mode & 1))) e.memoizedState = null;
    else
        switch (s) {
            case 'forwards':
                for (n = e.child, s = null; n !== null; )
                    (t = n.alternate),
                        t !== null && Ho(t) === null && (s = n),
                        (n = n.sibling);
                (n = s),
                    n === null
                        ? ((s = e.child), (e.child = null))
                        : ((s = n.sibling), (n.sibling = null)),
                    nl(e, !1, s, n, r);
                break;
            case 'backwards':
                for (n = null, s = e.child, e.child = null; s !== null; ) {
                    if (((t = s.alternate), t !== null && Ho(t) === null)) {
                        e.child = s;
                        break;
                    }
                    (t = s.sibling), (s.sibling = n), (n = s), (s = t);
                }
                nl(e, !0, n, null, r);
                break;
            case 'together':
                nl(e, !1, null, null, void 0);
                break;
            default:
                e.memoizedState = null;
        }
    return e.child;
}
function ho(t, e) {
    !(e.mode & 1) &&
        t !== null &&
        ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function sn(t, e, n) {
    if (
        (t !== null && (e.dependencies = t.dependencies),
        (ai |= e.lanes),
        !(n & e.childLanes))
    )
        return null;
    if (t !== null && e.child !== t.child) throw Error(P(153));
    if (e.child !== null) {
        for (
            t = e.child, n = En(t, t.pendingProps), e.child = n, n.return = e;
            t.sibling !== null;

        )
            (t = t.sibling),
                (n = n.sibling = En(t, t.pendingProps)),
                (n.return = e);
        n.sibling = null;
    }
    return e.child;
}
function kv(t, e, n) {
    switch (e.tag) {
        case 3:
            Fm(e), Bi();
            break;
        case 5:
            fm(e);
            break;
        case 1:
            Je(e.type) && Io(e);
            break;
        case 4:
            cu(e, e.stateNode.containerInfo);
            break;
        case 10:
            var i = e.type._context,
                s = e.memoizedProps.value;
            ie(Bo, i._currentValue), (i._currentValue = s);
            break;
        case 13:
            if (((i = e.memoizedState), i !== null))
                return i.dehydrated !== null
                    ? (ie(de, de.current & 1), (e.flags |= 128), null)
                    : n & e.child.childLanes
                    ? zm(t, e, n)
                    : (ie(de, de.current & 1),
                      (t = sn(t, e, n)),
                      t !== null ? t.sibling : null);
            ie(de, de.current & 1);
            break;
        case 19:
            if (((i = (n & e.childLanes) !== 0), t.flags & 128)) {
                if (i) return Bm(t, e, n);
                e.flags |= 128;
            }
            if (
                ((s = e.memoizedState),
                s !== null &&
                    ((s.rendering = null),
                    (s.tail = null),
                    (s.lastEffect = null)),
                ie(de, de.current),
                i)
            )
                break;
            return null;
        case 22:
        case 23:
            return (e.lanes = 0), Am(t, e, n);
    }
    return sn(t, e, n);
}
var Vm, rc, $m, Hm;
Vm = function (t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === e) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
rc = function () {};
$m = function (t, e, n, i) {
    var s = t.memoizedProps;
    if (s !== i) {
        (t = e.stateNode), Gn(Ft.current);
        var r = null;
        switch (n) {
            case 'input':
                (s = Pl(t, s)), (i = Pl(t, i)), (r = []);
                break;
            case 'select':
                (s = fe({}, s, { value: void 0 })),
                    (i = fe({}, i, { value: void 0 })),
                    (r = []);
                break;
            case 'textarea':
                (s = jl(t, s)), (i = jl(t, i)), (r = []);
                break;
            default:
                typeof s.onClick != 'function' &&
                    typeof i.onClick == 'function' &&
                    (t.onclick = Ro);
        }
        Nl(n, i);
        var o;
        n = null;
        for (c in s)
            if (!i.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
                if (c === 'style') {
                    var a = s[c];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
                } else
                    c !== 'dangerouslySetInnerHTML' &&
                        c !== 'children' &&
                        c !== 'suppressContentEditableWarning' &&
                        c !== 'suppressHydrationWarning' &&
                        c !== 'autoFocus' &&
                        (zs.hasOwnProperty(c)
                            ? r || (r = [])
                            : (r = r || []).push(c, null));
        for (c in i) {
            var l = i[c];
            if (
                ((a = s != null ? s[c] : void 0),
                i.hasOwnProperty(c) && l !== a && (l != null || a != null))
            )
                if (c === 'style')
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) ||
                                (l && l.hasOwnProperty(o)) ||
                                (n || (n = {}), (n[o] = ''));
                        for (o in l)
                            l.hasOwnProperty(o) &&
                                a[o] !== l[o] &&
                                (n || (n = {}), (n[o] = l[o]));
                    } else n || (r || (r = []), r.push(c, n)), (n = l);
                else
                    c === 'dangerouslySetInnerHTML'
                        ? ((l = l ? l.__html : void 0),
                          (a = a ? a.__html : void 0),
                          l != null && a !== l && (r = r || []).push(c, l))
                        : c === 'children'
                        ? (typeof l != 'string' && typeof l != 'number') ||
                          (r = r || []).push(c, '' + l)
                        : c !== 'suppressContentEditableWarning' &&
                          c !== 'suppressHydrationWarning' &&
                          (zs.hasOwnProperty(c)
                              ? (l != null &&
                                    c === 'onScroll' &&
                                    re('scroll', t),
                                r || a === l || (r = []))
                              : (r = r || []).push(c, l));
        }
        n && (r = r || []).push('style', n);
        var c = r;
        (e.updateQueue = c) && (e.flags |= 4);
    }
};
Hm = function (t, e, n, i) {
    n !== i && (e.flags |= 4);
};
function rs(t, e) {
    if (!ue)
        switch (t.tailMode) {
            case 'hidden':
                e = t.tail;
                for (var n = null; e !== null; )
                    e.alternate !== null && (n = e), (e = e.sibling);
                n === null ? (t.tail = null) : (n.sibling = null);
                break;
            case 'collapsed':
                n = t.tail;
                for (var i = null; n !== null; )
                    n.alternate !== null && (i = n), (n = n.sibling);
                i === null
                    ? e || t.tail === null
                        ? (t.tail = null)
                        : (t.tail.sibling = null)
                    : (i.sibling = null);
        }
}
function Le(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
        n = 0,
        i = 0;
    if (e)
        for (var s = t.child; s !== null; )
            (n |= s.lanes | s.childLanes),
                (i |= s.subtreeFlags & 14680064),
                (i |= s.flags & 14680064),
                (s.return = t),
                (s = s.sibling);
    else
        for (s = t.child; s !== null; )
            (n |= s.lanes | s.childLanes),
                (i |= s.subtreeFlags),
                (i |= s.flags),
                (s.return = t),
                (s = s.sibling);
    return (t.subtreeFlags |= i), (t.childLanes = n), e;
}
function Cv(t, e, n) {
    var i = e.pendingProps;
    switch ((nu(e), e.tag)) {
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
            return Le(e), null;
        case 1:
            return Je(e.type) && Ao(), Le(e), null;
        case 3:
            return (
                (i = e.stateNode),
                $i(),
                ae(Ge),
                ae(Fe),
                du(),
                i.pendingContext &&
                    ((i.context = i.pendingContext), (i.pendingContext = null)),
                (t === null || t.child === null) &&
                    (Nr(e)
                        ? (e.flags |= 4)
                        : t === null ||
                          (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
                          ((e.flags |= 1024),
                          wt !== null && (fc(wt), (wt = null)))),
                rc(t, e),
                Le(e),
                null
            );
        case 5:
            uu(e);
            var s = Gn(Gs.current);
            if (((n = e.type), t !== null && e.stateNode != null))
                $m(t, e, n, i, s),
                    t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
            else {
                if (!i) {
                    if (e.stateNode === null) throw Error(P(166));
                    return Le(e), null;
                }
                if (((t = Gn(Ft.current)), Nr(e))) {
                    (i = e.stateNode), (n = e.type);
                    var r = e.memoizedProps;
                    switch (
                        ((i[At] = e), (i[Ks] = r), (t = (e.mode & 1) !== 0), n)
                    ) {
                        case 'dialog':
                            re('cancel', i), re('close', i);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            re('load', i);
                            break;
                        case 'video':
                        case 'audio':
                            for (s = 0; s < ms.length; s++) re(ms[s], i);
                            break;
                        case 'source':
                            re('error', i);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            re('error', i), re('load', i);
                            break;
                        case 'details':
                            re('toggle', i);
                            break;
                        case 'input':
                            id(i, r), re('invalid', i);
                            break;
                        case 'select':
                            (i._wrapperState = { wasMultiple: !!r.multiple }),
                                re('invalid', i);
                            break;
                        case 'textarea':
                            rd(i, r), re('invalid', i);
                    }
                    Nl(n, r), (s = null);
                    for (var o in r)
                        if (r.hasOwnProperty(o)) {
                            var a = r[o];
                            o === 'children'
                                ? typeof a == 'string'
                                    ? i.textContent !== a &&
                                      (r.suppressHydrationWarning !== !0 &&
                                          Or(i.textContent, a, t),
                                      (s = ['children', a]))
                                    : typeof a == 'number' &&
                                      i.textContent !== '' + a &&
                                      (r.suppressHydrationWarning !== !0 &&
                                          Or(i.textContent, a, t),
                                      (s = ['children', '' + a]))
                                : zs.hasOwnProperty(o) &&
                                  a != null &&
                                  o === 'onScroll' &&
                                  re('scroll', i);
                        }
                    switch (n) {
                        case 'input':
                            Sr(i), sd(i, r, !0);
                            break;
                        case 'textarea':
                            Sr(i), od(i);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            typeof r.onClick == 'function' && (i.onclick = Ro);
                    }
                    (i = s), (e.updateQueue = i), i !== null && (e.flags |= 4);
                } else {
                    (o = s.nodeType === 9 ? s : s.ownerDocument),
                        t === 'http://www.w3.org/1999/xhtml' && (t = gp(n)),
                        t === 'http://www.w3.org/1999/xhtml'
                            ? n === 'script'
                                ? ((t = o.createElement('div')),
                                  (t.innerHTML = '<script></script>'),
                                  (t = t.removeChild(t.firstChild)))
                                : typeof i.is == 'string'
                                ? (t = o.createElement(n, { is: i.is }))
                                : ((t = o.createElement(n)),
                                  n === 'select' &&
                                      ((o = t),
                                      i.multiple
                                          ? (o.multiple = !0)
                                          : i.size && (o.size = i.size)))
                            : (t = o.createElementNS(t, n)),
                        (t[At] = e),
                        (t[Ks] = i),
                        Vm(t, e, !1, !1),
                        (e.stateNode = t);
                    e: {
                        switch (((o = Dl(n, i)), n)) {
                            case 'dialog':
                                re('cancel', t), re('close', t), (s = i);
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                re('load', t), (s = i);
                                break;
                            case 'video':
                            case 'audio':
                                for (s = 0; s < ms.length; s++) re(ms[s], t);
                                s = i;
                                break;
                            case 'source':
                                re('error', t), (s = i);
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                re('error', t), re('load', t), (s = i);
                                break;
                            case 'details':
                                re('toggle', t), (s = i);
                                break;
                            case 'input':
                                id(t, i), (s = Pl(t, i)), re('invalid', t);
                                break;
                            case 'option':
                                s = i;
                                break;
                            case 'select':
                                (t._wrapperState = {
                                    wasMultiple: !!i.multiple,
                                }),
                                    (s = fe({}, i, { value: void 0 })),
                                    re('invalid', t);
                                break;
                            case 'textarea':
                                rd(t, i), (s = jl(t, i)), re('invalid', t);
                                break;
                            default:
                                s = i;
                        }
                        Nl(n, s), (a = s);
                        for (r in a)
                            if (a.hasOwnProperty(r)) {
                                var l = a[r];
                                r === 'style'
                                    ? xp(t, l)
                                    : r === 'dangerouslySetInnerHTML'
                                    ? ((l = l ? l.__html : void 0),
                                      l != null && yp(t, l))
                                    : r === 'children'
                                    ? typeof l == 'string'
                                        ? (n !== 'textarea' || l !== '') &&
                                          Bs(t, l)
                                        : typeof l == 'number' && Bs(t, '' + l)
                                    : r !== 'suppressContentEditableWarning' &&
                                      r !== 'suppressHydrationWarning' &&
                                      r !== 'autoFocus' &&
                                      (zs.hasOwnProperty(r)
                                          ? l != null &&
                                            r === 'onScroll' &&
                                            re('scroll', t)
                                          : l != null && Vc(t, r, l, o));
                            }
                        switch (n) {
                            case 'input':
                                Sr(t), sd(t, i, !1);
                                break;
                            case 'textarea':
                                Sr(t), od(t);
                                break;
                            case 'option':
                                i.value != null &&
                                    t.setAttribute('value', '' + On(i.value));
                                break;
                            case 'select':
                                (t.multiple = !!i.multiple),
                                    (r = i.value),
                                    r != null
                                        ? ji(t, !!i.multiple, r, !1)
                                        : i.defaultValue != null &&
                                          ji(
                                              t,
                                              !!i.multiple,
                                              i.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof s.onClick == 'function' &&
                                    (t.onclick = Ro);
                        }
                        switch (n) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                i = !!i.autoFocus;
                                break e;
                            case 'img':
                                i = !0;
                                break e;
                            default:
                                i = !1;
                        }
                    }
                    i && (e.flags |= 4);
                }
                e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
            }
            return Le(e), null;
        case 6:
            if (t && e.stateNode != null) Hm(t, e, t.memoizedProps, i);
            else {
                if (typeof i != 'string' && e.stateNode === null)
                    throw Error(P(166));
                if (((n = Gn(Gs.current)), Gn(Ft.current), Nr(e))) {
                    if (
                        ((i = e.stateNode),
                        (n = e.memoizedProps),
                        (i[At] = e),
                        (r = i.nodeValue !== n) && ((t = ot), t !== null))
                    )
                        switch (t.tag) {
                            case 3:
                                Or(i.nodeValue, n, (t.mode & 1) !== 0);
                                break;
                            case 5:
                                t.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Or(i.nodeValue, n, (t.mode & 1) !== 0);
                        }
                    r && (e.flags |= 4);
                } else
                    (i = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(i)),
                        (i[At] = e),
                        (e.stateNode = i);
            }
            return Le(e), null;
        case 13:
            if (
                (ae(de),
                (i = e.memoizedState),
                t === null ||
                    (t.memoizedState !== null &&
                        t.memoizedState.dehydrated !== null))
            ) {
                if (ue && rt !== null && e.mode & 1 && !(e.flags & 128))
                    om(), Bi(), (e.flags |= 98560), (r = !1);
                else if (((r = Nr(e)), i !== null && i.dehydrated !== null)) {
                    if (t === null) {
                        if (!r) throw Error(P(318));
                        if (
                            ((r = e.memoizedState),
                            (r = r !== null ? r.dehydrated : null),
                            !r)
                        )
                            throw Error(P(317));
                        r[At] = e;
                    } else
                        Bi(),
                            !(e.flags & 128) && (e.memoizedState = null),
                            (e.flags |= 4);
                    Le(e), (r = !1);
                } else wt !== null && (fc(wt), (wt = null)), (r = !0);
                if (!r) return e.flags & 65536 ? e : null;
            }
            return e.flags & 128
                ? ((e.lanes = n), e)
                : ((i = i !== null),
                  i !== (t !== null && t.memoizedState !== null) &&
                      i &&
                      ((e.child.flags |= 8192),
                      e.mode & 1 &&
                          (t === null || de.current & 1
                              ? we === 0 && (we = 3)
                              : Su())),
                  e.updateQueue !== null && (e.flags |= 4),
                  Le(e),
                  null);
        case 4:
            return (
                $i(),
                rc(t, e),
                t === null && Ys(e.stateNode.containerInfo),
                Le(e),
                null
            );
        case 10:
            return ou(e.type._context), Le(e), null;
        case 17:
            return Je(e.type) && Ao(), Le(e), null;
        case 19:
            if ((ae(de), (r = e.memoizedState), r === null)) return Le(e), null;
            if (((i = (e.flags & 128) !== 0), (o = r.rendering), o === null))
                if (i) rs(r, !1);
                else {
                    if (we !== 0 || (t !== null && t.flags & 128))
                        for (t = e.child; t !== null; ) {
                            if (((o = Ho(t)), o !== null)) {
                                for (
                                    e.flags |= 128,
                                        rs(r, !1),
                                        i = o.updateQueue,
                                        i !== null &&
                                            ((e.updateQueue = i),
                                            (e.flags |= 4)),
                                        e.subtreeFlags = 0,
                                        i = n,
                                        n = e.child;
                                    n !== null;

                                )
                                    (r = n),
                                        (t = i),
                                        (r.flags &= 14680066),
                                        (o = r.alternate),
                                        o === null
                                            ? ((r.childLanes = 0),
                                              (r.lanes = t),
                                              (r.child = null),
                                              (r.subtreeFlags = 0),
                                              (r.memoizedProps = null),
                                              (r.memoizedState = null),
                                              (r.updateQueue = null),
                                              (r.dependencies = null),
                                              (r.stateNode = null))
                                            : ((r.childLanes = o.childLanes),
                                              (r.lanes = o.lanes),
                                              (r.child = o.child),
                                              (r.subtreeFlags = 0),
                                              (r.deletions = null),
                                              (r.memoizedProps =
                                                  o.memoizedProps),
                                              (r.memoizedState =
                                                  o.memoizedState),
                                              (r.updateQueue = o.updateQueue),
                                              (r.type = o.type),
                                              (t = o.dependencies),
                                              (r.dependencies =
                                                  t === null
                                                      ? null
                                                      : {
                                                            lanes: t.lanes,
                                                            firstContext:
                                                                t.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return ie(de, (de.current & 1) | 2), e.child;
                            }
                            t = t.sibling;
                        }
                    r.tail !== null &&
                        ve() > Wi &&
                        ((e.flags |= 128),
                        (i = !0),
                        rs(r, !1),
                        (e.lanes = 4194304));
                }
            else {
                if (!i)
                    if (((t = Ho(o)), t !== null)) {
                        if (
                            ((e.flags |= 128),
                            (i = !0),
                            (n = t.updateQueue),
                            n !== null && ((e.updateQueue = n), (e.flags |= 4)),
                            rs(r, !0),
                            r.tail === null &&
                                r.tailMode === 'hidden' &&
                                !o.alternate &&
                                !ue)
                        )
                            return Le(e), null;
                    } else
                        2 * ve() - r.renderingStartTime > Wi &&
                            n !== 1073741824 &&
                            ((e.flags |= 128),
                            (i = !0),
                            rs(r, !1),
                            (e.lanes = 4194304));
                r.isBackwards
                    ? ((o.sibling = e.child), (e.child = o))
                    : ((n = r.last),
                      n !== null ? (n.sibling = o) : (e.child = o),
                      (r.last = o));
            }
            return r.tail !== null
                ? ((e = r.tail),
                  (r.rendering = e),
                  (r.tail = e.sibling),
                  (r.renderingStartTime = ve()),
                  (e.sibling = null),
                  (n = de.current),
                  ie(de, i ? (n & 1) | 2 : n & 1),
                  e)
                : (Le(e), null);
        case 22:
        case 23:
            return (
                wu(),
                (i = e.memoizedState !== null),
                t !== null &&
                    (t.memoizedState !== null) !== i &&
                    (e.flags |= 8192),
                i && e.mode & 1
                    ? it & 1073741824 &&
                      (Le(e), e.subtreeFlags & 6 && (e.flags |= 8192))
                    : Le(e),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(P(156, e.tag));
}
function Mv(t, e) {
    switch ((nu(e), e.tag)) {
        case 1:
            return (
                Je(e.type) && Ao(),
                (t = e.flags),
                t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
            );
        case 3:
            return (
                $i(),
                ae(Ge),
                ae(Fe),
                du(),
                (t = e.flags),
                t & 65536 && !(t & 128)
                    ? ((e.flags = (t & -65537) | 128), e)
                    : null
            );
        case 5:
            return uu(e), null;
        case 13:
            if (
                (ae(de),
                (t = e.memoizedState),
                t !== null && t.dehydrated !== null)
            ) {
                if (e.alternate === null) throw Error(P(340));
                Bi();
            }
            return (
                (t = e.flags),
                t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
            );
        case 19:
            return ae(de), null;
        case 4:
            return $i(), null;
        case 10:
            return ou(e.type._context), null;
        case 22:
        case 23:
            return wu(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Rr = !1,
    Ae = !1,
    Pv = typeof WeakSet == 'function' ? WeakSet : Set,
    N = null;
function Ei(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == 'function')
            try {
                n(null);
            } catch (i) {
                pe(t, e, i);
            }
        else n.current = null;
}
function oc(t, e, n) {
    try {
        n();
    } catch (i) {
        pe(t, e, i);
    }
}
var Kd = !1;
function Ev(t, e) {
    if (((Hl = No), (t = Yp()), eu(t))) {
        if ('selectionStart' in t)
            var n = { start: t.selectionStart, end: t.selectionEnd };
        else
            e: {
                n = ((n = t.ownerDocument) && n.defaultView) || window;
                var i = n.getSelection && n.getSelection();
                if (i && i.rangeCount !== 0) {
                    n = i.anchorNode;
                    var s = i.anchorOffset,
                        r = i.focusNode;
                    i = i.focusOffset;
                    try {
                        n.nodeType, r.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var o = 0,
                        a = -1,
                        l = -1,
                        c = 0,
                        u = 0,
                        d = t,
                        h = null;
                    t: for (;;) {
                        for (
                            var p;
                            d !== n ||
                                (s !== 0 && d.nodeType !== 3) ||
                                (a = o + s),
                                d !== r ||
                                    (i !== 0 && d.nodeType !== 3) ||
                                    (l = o + i),
                                d.nodeType === 3 && (o += d.nodeValue.length),
                                (p = d.firstChild) !== null;

                        )
                            (h = d), (d = p);
                        for (;;) {
                            if (d === t) break t;
                            if (
                                (h === n && ++c === s && (a = o),
                                h === r && ++u === i && (l = o),
                                (p = d.nextSibling) !== null)
                            )
                                break;
                            (d = h), (h = d.parentNode);
                        }
                        d = p;
                    }
                    n = a === -1 || l === -1 ? null : { start: a, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        Wl = { focusedElem: t, selectionRange: n }, No = !1, N = e;
        N !== null;

    )
        if (
            ((e = N),
            (t = e.child),
            (e.subtreeFlags & 1028) !== 0 && t !== null)
        )
            (t.return = e), (N = t);
        else
            for (; N !== null; ) {
                e = N;
                try {
                    var v = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (v !== null) {
                                    var y = v.memoizedProps,
                                        _ = v.memoizedState,
                                        m = e.stateNode,
                                        g = m.getSnapshotBeforeUpdate(
                                            e.elementType === e.type
                                                ? y
                                                : _t(e.type, y),
                                            _
                                        );
                                    m.__reactInternalSnapshotBeforeUpdate = g;
                                }
                                break;
                            case 3:
                                var x = e.stateNode.containerInfo;
                                x.nodeType === 1
                                    ? (x.textContent = '')
                                    : x.nodeType === 9 &&
                                      x.documentElement &&
                                      x.removeChild(x.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(P(163));
                        }
                } catch (b) {
                    pe(e, e.return, b);
                }
                if (((t = e.sibling), t !== null)) {
                    (t.return = e.return), (N = t);
                    break;
                }
                N = e.return;
            }
    return (v = Kd), (Kd = !1), v;
}
function Ts(t, e, n) {
    var i = e.updateQueue;
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
        var s = (i = i.next);
        do {
            if ((s.tag & t) === t) {
                var r = s.destroy;
                (s.destroy = void 0), r !== void 0 && oc(e, n, r);
            }
            s = s.next;
        } while (s !== i);
    }
}
function ga(t, e) {
    if (
        ((e = e.updateQueue),
        (e = e !== null ? e.lastEffect : null),
        e !== null)
    ) {
        var n = (e = e.next);
        do {
            if ((n.tag & t) === t) {
                var i = n.create;
                n.destroy = i();
            }
            n = n.next;
        } while (n !== e);
    }
}
function ac(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
            case 5:
                t = n;
                break;
            default:
                t = n;
        }
        typeof e == 'function' ? e(t) : (e.current = t);
    }
}
function Wm(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Wm(e)),
        (t.child = null),
        (t.deletions = null),
        (t.sibling = null),
        t.tag === 5 &&
            ((e = t.stateNode),
            e !== null &&
                (delete e[At],
                delete e[Ks],
                delete e[Yl],
                delete e[uv],
                delete e[dv])),
        (t.stateNode = null),
        (t.return = null),
        (t.dependencies = null),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.pendingProps = null),
        (t.stateNode = null),
        (t.updateQueue = null);
}
function Um(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function qd(t) {
    e: for (;;) {
        for (; t.sibling === null; ) {
            if (t.return === null || Um(t.return)) return null;
            t = t.return;
        }
        for (
            t.sibling.return = t.return, t = t.sibling;
            t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

        ) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
            (t.child.return = t), (t = t.child);
        }
        if (!(t.flags & 2)) return t.stateNode;
    }
}
function lc(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
        (t = t.stateNode),
            e
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(t, e)
                    : n.insertBefore(t, e)
                : (n.nodeType === 8
                      ? ((e = n.parentNode), e.insertBefore(t, n))
                      : ((e = n), e.appendChild(t)),
                  (n = n._reactRootContainer),
                  n != null || e.onclick !== null || (e.onclick = Ro));
    else if (i !== 4 && ((t = t.child), t !== null))
        for (lc(t, e, n), t = t.sibling; t !== null; )
            lc(t, e, n), (t = t.sibling);
}
function cc(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
        (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && ((t = t.child), t !== null))
        for (cc(t, e, n), t = t.sibling; t !== null; )
            cc(t, e, n), (t = t.sibling);
}
var je = null,
    bt = !1;
function an(t, e, n) {
    for (n = n.child; n !== null; ) Qm(t, e, n), (n = n.sibling);
}
function Qm(t, e, n) {
    if (It && typeof It.onCommitFiberUnmount == 'function')
        try {
            It.onCommitFiberUnmount(la, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Ae || Ei(n, e);
        case 6:
            var i = je,
                s = bt;
            (je = null),
                an(t, e, n),
                (je = i),
                (bt = s),
                je !== null &&
                    (bt
                        ? ((t = je),
                          (n = n.stateNode),
                          t.nodeType === 8
                              ? t.parentNode.removeChild(n)
                              : t.removeChild(n))
                        : je.removeChild(n.stateNode));
            break;
        case 18:
            je !== null &&
                (bt
                    ? ((t = je),
                      (n = n.stateNode),
                      t.nodeType === 8
                          ? Ka(t.parentNode, n)
                          : t.nodeType === 1 && Ka(t, n),
                      Ws(t))
                    : Ka(je, n.stateNode));
            break;
        case 4:
            (i = je),
                (s = bt),
                (je = n.stateNode.containerInfo),
                (bt = !0),
                an(t, e, n),
                (je = i),
                (bt = s);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !Ae &&
                ((i = n.updateQueue),
                i !== null && ((i = i.lastEffect), i !== null))
            ) {
                s = i = i.next;
                do {
                    var r = s,
                        o = r.destroy;
                    (r = r.tag),
                        o !== void 0 && (r & 2 || r & 4) && oc(n, e, o),
                        (s = s.next);
                } while (s !== i);
            }
            an(t, e, n);
            break;
        case 1:
            if (
                !Ae &&
                (Ei(n, e),
                (i = n.stateNode),
                typeof i.componentWillUnmount == 'function')
            )
                try {
                    (i.props = n.memoizedProps),
                        (i.state = n.memoizedState),
                        i.componentWillUnmount();
                } catch (a) {
                    pe(n, e, a);
                }
            an(t, e, n);
            break;
        case 21:
            an(t, e, n);
            break;
        case 22:
            n.mode & 1
                ? ((Ae = (i = Ae) || n.memoizedState !== null),
                  an(t, e, n),
                  (Ae = i))
                : an(t, e, n);
            break;
        default:
            an(t, e, n);
    }
}
function Gd(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new Pv()),
            e.forEach(function (i) {
                var s = Iv.bind(null, t, i);
                n.has(i) || (n.add(i), i.then(s, s));
            });
    }
}
function vt(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var i = 0; i < n.length; i++) {
            var s = n[i];
            try {
                var r = t,
                    o = e,
                    a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (je = a.stateNode), (bt = !1);
                            break e;
                        case 3:
                            (je = a.stateNode.containerInfo), (bt = !0);
                            break e;
                        case 4:
                            (je = a.stateNode.containerInfo), (bt = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (je === null) throw Error(P(160));
                Qm(r, o, s), (je = null), (bt = !1);
                var l = s.alternate;
                l !== null && (l.return = null), (s.return = null);
            } catch (c) {
                pe(s, e, c);
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; ) Ym(e, t), (e = e.sibling);
}
function Ym(t, e) {
    var n = t.alternate,
        i = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((vt(e, t), Nt(t), i & 4)) {
                try {
                    Ts(3, t, t.return), ga(3, t);
                } catch (y) {
                    pe(t, t.return, y);
                }
                try {
                    Ts(5, t, t.return);
                } catch (y) {
                    pe(t, t.return, y);
                }
            }
            break;
        case 1:
            vt(e, t), Nt(t), i & 512 && n !== null && Ei(n, n.return);
            break;
        case 5:
            if (
                (vt(e, t),
                Nt(t),
                i & 512 && n !== null && Ei(n, n.return),
                t.flags & 32)
            ) {
                var s = t.stateNode;
                try {
                    Bs(s, '');
                } catch (y) {
                    pe(t, t.return, y);
                }
            }
            if (i & 4 && ((s = t.stateNode), s != null)) {
                var r = t.memoizedProps,
                    o = n !== null ? n.memoizedProps : r,
                    a = t.type,
                    l = t.updateQueue;
                if (((t.updateQueue = null), l !== null))
                    try {
                        a === 'input' &&
                            r.type === 'radio' &&
                            r.name != null &&
                            pp(s, r),
                            Dl(a, o);
                        var c = Dl(a, r);
                        for (o = 0; o < l.length; o += 2) {
                            var u = l[o],
                                d = l[o + 1];
                            u === 'style'
                                ? xp(s, d)
                                : u === 'dangerouslySetInnerHTML'
                                ? yp(s, d)
                                : u === 'children'
                                ? Bs(s, d)
                                : Vc(s, u, d, c);
                        }
                        switch (a) {
                            case 'input':
                                El(s, r);
                                break;
                            case 'textarea':
                                mp(s, r);
                                break;
                            case 'select':
                                var h = s._wrapperState.wasMultiple;
                                s._wrapperState.wasMultiple = !!r.multiple;
                                var p = r.value;
                                p != null
                                    ? ji(s, !!r.multiple, p, !1)
                                    : h !== !!r.multiple &&
                                      (r.defaultValue != null
                                          ? ji(
                                                s,
                                                !!r.multiple,
                                                r.defaultValue,
                                                !0
                                            )
                                          : ji(
                                                s,
                                                !!r.multiple,
                                                r.multiple ? [] : '',
                                                !1
                                            ));
                        }
                        s[Ks] = r;
                    } catch (y) {
                        pe(t, t.return, y);
                    }
            }
            break;
        case 6:
            if ((vt(e, t), Nt(t), i & 4)) {
                if (t.stateNode === null) throw Error(P(162));
                (s = t.stateNode), (r = t.memoizedProps);
                try {
                    s.nodeValue = r;
                } catch (y) {
                    pe(t, t.return, y);
                }
            }
            break;
        case 3:
            if (
                (vt(e, t),
                Nt(t),
                i & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Ws(e.containerInfo);
                } catch (y) {
                    pe(t, t.return, y);
                }
            break;
        case 4:
            vt(e, t), Nt(t);
            break;
        case 13:
            vt(e, t),
                Nt(t),
                (s = t.child),
                s.flags & 8192 &&
                    ((r = s.memoizedState !== null),
                    (s.stateNode.isHidden = r),
                    !r ||
                        (s.alternate !== null &&
                            s.alternate.memoizedState !== null) ||
                        (_u = ve())),
                i & 4 && Gd(t);
            break;
        case 22:
            if (
                ((u = n !== null && n.memoizedState !== null),
                t.mode & 1
                    ? ((Ae = (c = Ae) || u), vt(e, t), (Ae = c))
                    : vt(e, t),
                Nt(t),
                i & 8192)
            ) {
                if (
                    ((c = t.memoizedState !== null),
                    (t.stateNode.isHidden = c) && !u && t.mode & 1)
                )
                    for (N = t, u = t.child; u !== null; ) {
                        for (d = N = u; N !== null; ) {
                            switch (((h = N), (p = h.child), h.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ts(4, h, h.return);
                                    break;
                                case 1:
                                    Ei(h, h.return);
                                    var v = h.stateNode;
                                    if (
                                        typeof v.componentWillUnmount ==
                                        'function'
                                    ) {
                                        (i = h), (n = h.return);
                                        try {
                                            (e = i),
                                                (v.props = e.memoizedProps),
                                                (v.state = e.memoizedState),
                                                v.componentWillUnmount();
                                        } catch (y) {
                                            pe(i, n, y);
                                        }
                                    }
                                    break;
                                case 5:
                                    Ei(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Zd(d);
                                        continue;
                                    }
                            }
                            p !== null ? ((p.return = h), (N = p)) : Zd(d);
                        }
                        u = u.sibling;
                    }
                e: for (u = null, d = t; ; ) {
                    if (d.tag === 5) {
                        if (u === null) {
                            u = d;
                            try {
                                (s = d.stateNode),
                                    c
                                        ? ((r = s.style),
                                          typeof r.setProperty == 'function'
                                              ? r.setProperty(
                                                    'display',
                                                    'none',
                                                    'important'
                                                )
                                              : (r.display = 'none'))
                                        : ((a = d.stateNode),
                                          (l = d.memoizedProps.style),
                                          (o =
                                              l != null &&
                                              l.hasOwnProperty('display')
                                                  ? l.display
                                                  : null),
                                          (a.style.display = vp('display', o)));
                            } catch (y) {
                                pe(t, t.return, y);
                            }
                        }
                    } else if (d.tag === 6) {
                        if (u === null)
                            try {
                                d.stateNode.nodeValue = c
                                    ? ''
                                    : d.memoizedProps;
                            } catch (y) {
                                pe(t, t.return, y);
                            }
                    } else if (
                        ((d.tag !== 22 && d.tag !== 23) ||
                            d.memoizedState === null ||
                            d === t) &&
                        d.child !== null
                    ) {
                        (d.child.return = d), (d = d.child);
                        continue;
                    }
                    if (d === t) break e;
                    for (; d.sibling === null; ) {
                        if (d.return === null || d.return === t) break e;
                        u === d && (u = null), (d = d.return);
                    }
                    u === d && (u = null),
                        (d.sibling.return = d.return),
                        (d = d.sibling);
                }
            }
            break;
        case 19:
            vt(e, t), Nt(t), i & 4 && Gd(t);
            break;
        case 21:
            break;
        default:
            vt(e, t), Nt(t);
    }
}
function Nt(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (Um(n)) {
                        var i = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(P(160));
            }
            switch (i.tag) {
                case 5:
                    var s = i.stateNode;
                    i.flags & 32 && (Bs(s, ''), (i.flags &= -33));
                    var r = qd(t);
                    cc(t, r, s);
                    break;
                case 3:
                case 4:
                    var o = i.stateNode.containerInfo,
                        a = qd(t);
                    lc(t, a, o);
                    break;
                default:
                    throw Error(P(161));
            }
        } catch (l) {
            pe(t, t.return, l);
        }
        t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
}
function Tv(t, e, n) {
    (N = t), Xm(t);
}
function Xm(t, e, n) {
    for (var i = (t.mode & 1) !== 0; N !== null; ) {
        var s = N,
            r = s.child;
        if (s.tag === 22 && i) {
            var o = s.memoizedState !== null || Rr;
            if (!o) {
                var a = s.alternate,
                    l = (a !== null && a.memoizedState !== null) || Ae;
                a = Rr;
                var c = Ae;
                if (((Rr = o), (Ae = l) && !c))
                    for (N = s; N !== null; )
                        (o = N),
                            (l = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? eh(s)
                                : l !== null
                                ? ((l.return = o), (N = l))
                                : eh(s);
                for (; r !== null; ) (N = r), Xm(r), (r = r.sibling);
                (N = s), (Rr = a), (Ae = c);
            }
            Jd(t);
        } else
            s.subtreeFlags & 8772 && r !== null
                ? ((r.return = s), (N = r))
                : Jd(t);
    }
}
function Jd(t) {
    for (; N !== null; ) {
        var e = N;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ae || ga(5, e);
                            break;
                        case 1:
                            var i = e.stateNode;
                            if (e.flags & 4 && !Ae)
                                if (n === null) i.componentDidMount();
                                else {
                                    var s =
                                        e.elementType === e.type
                                            ? n.memoizedProps
                                            : _t(e.type, n.memoizedProps);
                                    i.componentDidUpdate(
                                        s,
                                        n.memoizedState,
                                        i.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var r = e.updateQueue;
                            r !== null && Rd(e, r, i);
                            break;
                        case 3:
                            var o = e.updateQueue;
                            if (o !== null) {
                                if (((n = null), e.child !== null))
                                    switch (e.child.tag) {
                                        case 5:
                                            n = e.child.stateNode;
                                            break;
                                        case 1:
                                            n = e.child.stateNode;
                                    }
                                Rd(e, o, n);
                            }
                            break;
                        case 5:
                            var a = e.stateNode;
                            if (n === null && e.flags & 4) {
                                n = a;
                                var l = e.memoizedProps;
                                switch (e.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        l.autoFocus && n.focus();
                                        break;
                                    case 'img':
                                        l.src && (n.src = l.src);
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
                            if (e.memoizedState === null) {
                                var c = e.alternate;
                                if (c !== null) {
                                    var u = c.memoizedState;
                                    if (u !== null) {
                                        var d = u.dehydrated;
                                        d !== null && Ws(d);
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
                            throw Error(P(163));
                    }
                Ae || (e.flags & 512 && ac(e));
            } catch (h) {
                pe(e, e.return, h);
            }
        }
        if (e === t) {
            N = null;
            break;
        }
        if (((n = e.sibling), n !== null)) {
            (n.return = e.return), (N = n);
            break;
        }
        N = e.return;
    }
}
function Zd(t) {
    for (; N !== null; ) {
        var e = N;
        if (e === t) {
            N = null;
            break;
        }
        var n = e.sibling;
        if (n !== null) {
            (n.return = e.return), (N = n);
            break;
        }
        N = e.return;
    }
}
function eh(t) {
    for (; N !== null; ) {
        var e = N;
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var n = e.return;
                    try {
                        ga(4, e);
                    } catch (l) {
                        pe(e, n, l);
                    }
                    break;
                case 1:
                    var i = e.stateNode;
                    if (typeof i.componentDidMount == 'function') {
                        var s = e.return;
                        try {
                            i.componentDidMount();
                        } catch (l) {
                            pe(e, s, l);
                        }
                    }
                    var r = e.return;
                    try {
                        ac(e);
                    } catch (l) {
                        pe(e, r, l);
                    }
                    break;
                case 5:
                    var o = e.return;
                    try {
                        ac(e);
                    } catch (l) {
                        pe(e, o, l);
                    }
            }
        } catch (l) {
            pe(e, e.return, l);
        }
        if (e === t) {
            N = null;
            break;
        }
        var a = e.sibling;
        if (a !== null) {
            (a.return = e.return), (N = a);
            break;
        }
        N = e.return;
    }
}
var jv = Math.ceil,
    Qo = rn.ReactCurrentDispatcher,
    vu = rn.ReactCurrentOwner,
    mt = rn.ReactCurrentBatchConfig,
    Y = 0,
    Ee = null,
    _e = null,
    Oe = 0,
    it = 0,
    Ti = An(0),
    we = 0,
    tr = null,
    ai = 0,
    ya = 0,
    xu = 0,
    js = null,
    Ye = null,
    _u = 0,
    Wi = 1 / 0,
    Wt = null,
    Yo = !1,
    uc = null,
    Mn = null,
    Ar = !1,
    pn = null,
    Xo = 0,
    Os = 0,
    dc = null,
    fo = -1,
    po = 0;
function He() {
    return Y & 6 ? ve() : fo !== -1 ? fo : (fo = ve());
}
function Pn(t) {
    return t.mode & 1
        ? Y & 2 && Oe !== 0
            ? Oe & -Oe
            : fv.transition !== null
            ? (po === 0 && (po = Op()), po)
            : ((t = Z),
              t !== 0 ||
                  ((t = window.event), (t = t === void 0 ? 16 : Fp(t.type))),
              t)
        : 1;
}
function Ct(t, e, n, i) {
    if (50 < Os) throw ((Os = 0), (dc = null), Error(P(185)));
    fr(t, n, i),
        (!(Y & 2) || t !== Ee) &&
            (t === Ee && (!(Y & 2) && (ya |= n), we === 4 && hn(t, Oe)),
            Ze(t, i),
            n === 1 &&
                Y === 0 &&
                !(e.mode & 1) &&
                ((Wi = ve() + 500), fa && In()));
}
function Ze(t, e) {
    var n = t.callbackNode;
    fy(t, e);
    var i = Oo(t, t === Ee ? Oe : 0);
    if (i === 0)
        n !== null && cd(n), (t.callbackNode = null), (t.callbackPriority = 0);
    else if (((e = i & -i), t.callbackPriority !== e)) {
        if ((n != null && cd(n), e === 1))
            t.tag === 0 ? hv(th.bind(null, t)) : im(th.bind(null, t)),
                lv(function () {
                    !(Y & 6) && In();
                }),
                (n = null);
        else {
            switch (Np(i)) {
                case 1:
                    n = Qc;
                    break;
                case 4:
                    n = Tp;
                    break;
                case 16:
                    n = jo;
                    break;
                case 536870912:
                    n = jp;
                    break;
                default:
                    n = jo;
            }
            n = ng(n, Km.bind(null, t));
        }
        (t.callbackPriority = e), (t.callbackNode = n);
    }
}
function Km(t, e) {
    if (((fo = -1), (po = 0), Y & 6)) throw Error(P(327));
    var n = t.callbackNode;
    if (Ri() && t.callbackNode !== n) return null;
    var i = Oo(t, t === Ee ? Oe : 0);
    if (i === 0) return null;
    if (i & 30 || i & t.expiredLanes || e) e = Ko(t, i);
    else {
        e = i;
        var s = Y;
        Y |= 2;
        var r = Gm();
        (Ee !== t || Oe !== e) && ((Wt = null), (Wi = ve() + 500), Zn(t, e));
        do
            try {
                Dv();
                break;
            } catch (a) {
                qm(t, a);
            }
        while (1);
        ru(),
            (Qo.current = r),
            (Y = s),
            _e !== null ? (e = 0) : ((Ee = null), (Oe = 0), (e = we));
    }
    if (e !== 0) {
        if (
            (e === 2 && ((s = Fl(t)), s !== 0 && ((i = s), (e = hc(t, s)))),
            e === 1)
        )
            throw ((n = tr), Zn(t, 0), hn(t, i), Ze(t, ve()), n);
        if (e === 6) hn(t, i);
        else {
            if (
                ((s = t.current.alternate),
                !(i & 30) &&
                    !Ov(s) &&
                    ((e = Ko(t, i)),
                    e === 2 &&
                        ((r = Fl(t)), r !== 0 && ((i = r), (e = hc(t, r)))),
                    e === 1))
            )
                throw ((n = tr), Zn(t, 0), hn(t, i), Ze(t, ve()), n);
            switch (((t.finishedWork = s), (t.finishedLanes = i), e)) {
                case 0:
                case 1:
                    throw Error(P(345));
                case 2:
                    Un(t, Ye, Wt);
                    break;
                case 3:
                    if (
                        (hn(t, i),
                        (i & 130023424) === i &&
                            ((e = _u + 500 - ve()), 10 < e))
                    ) {
                        if (Oo(t, 0) !== 0) break;
                        if (((s = t.suspendedLanes), (s & i) !== i)) {
                            He(), (t.pingedLanes |= t.suspendedLanes & s);
                            break;
                        }
                        t.timeoutHandle = Ql(Un.bind(null, t, Ye, Wt), e);
                        break;
                    }
                    Un(t, Ye, Wt);
                    break;
                case 4:
                    if ((hn(t, i), (i & 4194240) === i)) break;
                    for (e = t.eventTimes, s = -1; 0 < i; ) {
                        var o = 31 - kt(i);
                        (r = 1 << o), (o = e[o]), o > s && (s = o), (i &= ~r);
                    }
                    if (
                        ((i = s),
                        (i = ve() - i),
                        (i =
                            (120 > i
                                ? 120
                                : 480 > i
                                ? 480
                                : 1080 > i
                                ? 1080
                                : 1920 > i
                                ? 1920
                                : 3e3 > i
                                ? 3e3
                                : 4320 > i
                                ? 4320
                                : 1960 * jv(i / 1960)) - i),
                        10 < i)
                    ) {
                        t.timeoutHandle = Ql(Un.bind(null, t, Ye, Wt), i);
                        break;
                    }
                    Un(t, Ye, Wt);
                    break;
                case 5:
                    Un(t, Ye, Wt);
                    break;
                default:
                    throw Error(P(329));
            }
        }
    }
    return Ze(t, ve()), t.callbackNode === n ? Km.bind(null, t) : null;
}
function hc(t, e) {
    var n = js;
    return (
        t.current.memoizedState.isDehydrated && (Zn(t, e).flags |= 256),
        (t = Ko(t, e)),
        t !== 2 && ((e = Ye), (Ye = n), e !== null && fc(e)),
        t
    );
}
function fc(t) {
    Ye === null ? (Ye = t) : Ye.push.apply(Ye, t);
}
function Ov(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var i = 0; i < n.length; i++) {
                    var s = n[i],
                        r = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Pt(r(), s)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
            (n.return = e), (e = n);
        else {
            if (e === t) break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) return !0;
                e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
        }
    }
    return !0;
}
function hn(t, e) {
    for (
        e &= ~xu,
            e &= ~ya,
            t.suspendedLanes |= e,
            t.pingedLanes &= ~e,
            t = t.expirationTimes;
        0 < e;

    ) {
        var n = 31 - kt(e),
            i = 1 << n;
        (t[n] = -1), (e &= ~i);
    }
}
function th(t) {
    if (Y & 6) throw Error(P(327));
    Ri();
    var e = Oo(t, 0);
    if (!(e & 1)) return Ze(t, ve()), null;
    var n = Ko(t, e);
    if (t.tag !== 0 && n === 2) {
        var i = Fl(t);
        i !== 0 && ((e = i), (n = hc(t, i)));
    }
    if (n === 1) throw ((n = tr), Zn(t, 0), hn(t, e), Ze(t, ve()), n);
    if (n === 6) throw Error(P(345));
    return (
        (t.finishedWork = t.current.alternate),
        (t.finishedLanes = e),
        Un(t, Ye, Wt),
        Ze(t, ve()),
        null
    );
}
function bu(t, e) {
    var n = Y;
    Y |= 1;
    try {
        return t(e);
    } finally {
        (Y = n), Y === 0 && ((Wi = ve() + 500), fa && In());
    }
}
function li(t) {
    pn !== null && pn.tag === 0 && !(Y & 6) && Ri();
    var e = Y;
    Y |= 1;
    var n = mt.transition,
        i = Z;
    try {
        if (((mt.transition = null), (Z = 1), t)) return t();
    } finally {
        (Z = i), (mt.transition = n), (Y = e), !(Y & 6) && In();
    }
}
function wu() {
    (it = Ti.current), ae(Ti);
}
function Zn(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var n = t.timeoutHandle;
    if ((n !== -1 && ((t.timeoutHandle = -1), av(n)), _e !== null))
        for (n = _e.return; n !== null; ) {
            var i = n;
            switch ((nu(i), i.tag)) {
                case 1:
                    (i = i.type.childContextTypes), i != null && Ao();
                    break;
                case 3:
                    $i(), ae(Ge), ae(Fe), du();
                    break;
                case 5:
                    uu(i);
                    break;
                case 4:
                    $i();
                    break;
                case 13:
                    ae(de);
                    break;
                case 19:
                    ae(de);
                    break;
                case 10:
                    ou(i.type._context);
                    break;
                case 22:
                case 23:
                    wu();
            }
            n = n.return;
        }
    if (
        ((Ee = t),
        (_e = t = En(t.current, null)),
        (Oe = it = e),
        (we = 0),
        (tr = null),
        (xu = ya = ai = 0),
        (Ye = js = null),
        qn !== null)
    ) {
        for (e = 0; e < qn.length; e++)
            if (((n = qn[e]), (i = n.interleaved), i !== null)) {
                n.interleaved = null;
                var s = i.next,
                    r = n.pending;
                if (r !== null) {
                    var o = r.next;
                    (r.next = s), (i.next = o);
                }
                n.pending = i;
            }
        qn = null;
    }
    return t;
}
function qm(t, e) {
    do {
        var n = _e;
        try {
            if ((ru(), (co.current = Uo), Wo)) {
                for (var i = he.memoizedState; i !== null; ) {
                    var s = i.queue;
                    s !== null && (s.pending = null), (i = i.next);
                }
                Wo = !1;
            }
            if (
                ((oi = 0),
                (Me = be = he = null),
                (Es = !1),
                (Js = 0),
                (vu.current = null),
                n === null || n.return === null)
            ) {
                (we = 1), (tr = e), (_e = null);
                break;
            }
            e: {
                var r = t,
                    o = n.return,
                    a = n,
                    l = e;
                if (
                    ((e = Oe),
                    (a.flags |= 32768),
                    l !== null &&
                        typeof l == 'object' &&
                        typeof l.then == 'function')
                ) {
                    var c = l,
                        u = a,
                        d = u.tag;
                    if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var h = u.alternate;
                        h
                            ? ((u.updateQueue = h.updateQueue),
                              (u.memoizedState = h.memoizedState),
                              (u.lanes = h.lanes))
                            : ((u.updateQueue = null),
                              (u.memoizedState = null));
                    }
                    var p = $d(o);
                    if (p !== null) {
                        (p.flags &= -257),
                            Hd(p, o, a, r, e),
                            p.mode & 1 && Vd(r, c, e),
                            (e = p),
                            (l = c);
                        var v = e.updateQueue;
                        if (v === null) {
                            var y = new Set();
                            y.add(l), (e.updateQueue = y);
                        } else v.add(l);
                        break e;
                    } else {
                        if (!(e & 1)) {
                            Vd(r, c, e), Su();
                            break e;
                        }
                        l = Error(P(426));
                    }
                } else if (ue && a.mode & 1) {
                    var _ = $d(o);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256),
                            Hd(_, o, a, r, e),
                            iu(Hi(l, a));
                        break e;
                    }
                }
                (r = l = Hi(l, a)),
                    we !== 4 && (we = 2),
                    js === null ? (js = [r]) : js.push(r),
                    (r = o);
                do {
                    switch (r.tag) {
                        case 3:
                            (r.flags |= 65536), (e &= -e), (r.lanes |= e);
                            var m = Dm(r, l, e);
                            Ld(r, m);
                            break e;
                        case 1:
                            a = l;
                            var g = r.type,
                                x = r.stateNode;
                            if (
                                !(r.flags & 128) &&
                                (typeof g.getDerivedStateFromError ==
                                    'function' ||
                                    (x !== null &&
                                        typeof x.componentDidCatch ==
                                            'function' &&
                                        (Mn === null || !Mn.has(x))))
                            ) {
                                (r.flags |= 65536), (e &= -e), (r.lanes |= e);
                                var b = Lm(r, a, e);
                                Ld(r, b);
                                break e;
                            }
                    }
                    r = r.return;
                } while (r !== null);
            }
            Zm(n);
        } catch (w) {
            (e = w), _e === n && n !== null && (_e = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function Gm() {
    var t = Qo.current;
    return (Qo.current = Uo), t === null ? Uo : t;
}
function Su() {
    (we === 0 || we === 3 || we === 2) && (we = 4),
        Ee === null || (!(ai & 268435455) && !(ya & 268435455)) || hn(Ee, Oe);
}
function Ko(t, e) {
    var n = Y;
    Y |= 2;
    var i = Gm();
    (Ee !== t || Oe !== e) && ((Wt = null), Zn(t, e));
    do
        try {
            Nv();
            break;
        } catch (s) {
            qm(t, s);
        }
    while (1);
    if ((ru(), (Y = n), (Qo.current = i), _e !== null)) throw Error(P(261));
    return (Ee = null), (Oe = 0), we;
}
function Nv() {
    for (; _e !== null; ) Jm(_e);
}
function Dv() {
    for (; _e !== null && !sy(); ) Jm(_e);
}
function Jm(t) {
    var e = tg(t.alternate, t, it);
    (t.memoizedProps = t.pendingProps),
        e === null ? Zm(t) : (_e = e),
        (vu.current = null);
}
function Zm(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (((t = e.return), e.flags & 32768)) {
            if (((n = Mv(n, e)), n !== null)) {
                (n.flags &= 32767), (_e = n);
                return;
            }
            if (t !== null)
                (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
            else {
                (we = 6), (_e = null);
                return;
            }
        } else if (((n = Cv(n, e, it)), n !== null)) {
            _e = n;
            return;
        }
        if (((e = e.sibling), e !== null)) {
            _e = e;
            return;
        }
        _e = e = t;
    } while (e !== null);
    we === 0 && (we = 5);
}
function Un(t, e, n) {
    var i = Z,
        s = mt.transition;
    try {
        (mt.transition = null), (Z = 1), Lv(t, e, n, i);
    } finally {
        (mt.transition = s), (Z = i);
    }
    return null;
}
function Lv(t, e, n, i) {
    do Ri();
    while (pn !== null);
    if (Y & 6) throw Error(P(327));
    n = t.finishedWork;
    var s = t.finishedLanes;
    if (n === null) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
        throw Error(P(177));
    (t.callbackNode = null), (t.callbackPriority = 0);
    var r = n.lanes | n.childLanes;
    if (
        (py(t, r),
        t === Ee && ((_e = Ee = null), (Oe = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Ar ||
            ((Ar = !0),
            ng(jo, function () {
                return Ri(), null;
            })),
        (r = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || r)
    ) {
        (r = mt.transition), (mt.transition = null);
        var o = Z;
        Z = 1;
        var a = Y;
        (Y |= 4),
            (vu.current = null),
            Ev(t, n),
            Ym(n, t),
            ev(Wl),
            (No = !!Hl),
            (Wl = Hl = null),
            (t.current = n),
            Tv(n),
            ry(),
            (Y = a),
            (Z = o),
            (mt.transition = r);
    } else t.current = n;
    if (
        (Ar && ((Ar = !1), (pn = t), (Xo = s)),
        (r = t.pendingLanes),
        r === 0 && (Mn = null),
        ly(n.stateNode),
        Ze(t, ve()),
        e !== null)
    )
        for (i = t.onRecoverableError, n = 0; n < e.length; n++)
            (s = e[n]),
                i(s.value, { componentStack: s.stack, digest: s.digest });
    if (Yo) throw ((Yo = !1), (t = uc), (uc = null), t);
    return (
        Xo & 1 && t.tag !== 0 && Ri(),
        (r = t.pendingLanes),
        r & 1 ? (t === dc ? Os++ : ((Os = 0), (dc = t))) : (Os = 0),
        In(),
        null
    );
}
function Ri() {
    if (pn !== null) {
        var t = Np(Xo),
            e = mt.transition,
            n = Z;
        try {
            if (((mt.transition = null), (Z = 16 > t ? 16 : t), pn === null))
                var i = !1;
            else {
                if (((t = pn), (pn = null), (Xo = 0), Y & 6))
                    throw Error(P(331));
                var s = Y;
                for (Y |= 4, N = t.current; N !== null; ) {
                    var r = N,
                        o = r.child;
                    if (N.flags & 16) {
                        var a = r.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for (N = c; N !== null; ) {
                                    var u = N;
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ts(8, u, r);
                                    }
                                    var d = u.child;
                                    if (d !== null) (d.return = u), (N = d);
                                    else
                                        for (; N !== null; ) {
                                            u = N;
                                            var h = u.sibling,
                                                p = u.return;
                                            if ((Wm(u), u === c)) {
                                                N = null;
                                                break;
                                            }
                                            if (h !== null) {
                                                (h.return = p), (N = h);
                                                break;
                                            }
                                            N = p;
                                        }
                                }
                            }
                            var v = r.alternate;
                            if (v !== null) {
                                var y = v.child;
                                if (y !== null) {
                                    v.child = null;
                                    do {
                                        var _ = y.sibling;
                                        (y.sibling = null), (y = _);
                                    } while (y !== null);
                                }
                            }
                            N = r;
                        }
                    }
                    if (r.subtreeFlags & 2064 && o !== null)
                        (o.return = r), (N = o);
                    else
                        e: for (; N !== null; ) {
                            if (((r = N), r.flags & 2048))
                                switch (r.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ts(9, r, r.return);
                                }
                            var m = r.sibling;
                            if (m !== null) {
                                (m.return = r.return), (N = m);
                                break e;
                            }
                            N = r.return;
                        }
                }
                var g = t.current;
                for (N = g; N !== null; ) {
                    o = N;
                    var x = o.child;
                    if (o.subtreeFlags & 2064 && x !== null)
                        (x.return = o), (N = x);
                    else
                        e: for (o = g; N !== null; ) {
                            if (((a = N), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ga(9, a);
                                    }
                                } catch (w) {
                                    pe(a, a.return, w);
                                }
                            if (a === o) {
                                N = null;
                                break e;
                            }
                            var b = a.sibling;
                            if (b !== null) {
                                (b.return = a.return), (N = b);
                                break e;
                            }
                            N = a.return;
                        }
                }
                if (
                    ((Y = s),
                    In(),
                    It && typeof It.onPostCommitFiberRoot == 'function')
                )
                    try {
                        It.onPostCommitFiberRoot(la, t);
                    } catch {}
                i = !0;
            }
            return i;
        } finally {
            (Z = n), (mt.transition = e);
        }
    }
    return !1;
}
function nh(t, e, n) {
    (e = Hi(n, e)),
        (e = Dm(t, e, 1)),
        (t = Cn(t, e, 1)),
        (e = He()),
        t !== null && (fr(t, 1, e), Ze(t, e));
}
function pe(t, e, n) {
    if (t.tag === 3) nh(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                nh(e, t, n);
                break;
            } else if (e.tag === 1) {
                var i = e.stateNode;
                if (
                    typeof e.type.getDerivedStateFromError == 'function' ||
                    (typeof i.componentDidCatch == 'function' &&
                        (Mn === null || !Mn.has(i)))
                ) {
                    (t = Hi(n, t)),
                        (t = Lm(e, t, 1)),
                        (e = Cn(e, t, 1)),
                        (t = He()),
                        e !== null && (fr(e, 1, t), Ze(e, t));
                    break;
                }
            }
            e = e.return;
        }
}
function Rv(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e),
        (e = He()),
        (t.pingedLanes |= t.suspendedLanes & n),
        Ee === t &&
            (Oe & n) === n &&
            (we === 4 ||
            (we === 3 && (Oe & 130023424) === Oe && 500 > ve() - _u)
                ? Zn(t, 0)
                : (xu |= n)),
        Ze(t, e);
}
function eg(t, e) {
    e === 0 &&
        (t.mode & 1
            ? ((e = Mr), (Mr <<= 1), !(Mr & 130023424) && (Mr = 4194304))
            : (e = 1));
    var n = He();
    (t = nn(t, e)), t !== null && (fr(t, e, n), Ze(t, n));
}
function Av(t) {
    var e = t.memoizedState,
        n = 0;
    e !== null && (n = e.retryLane), eg(t, n);
}
function Iv(t, e) {
    var n = 0;
    switch (t.tag) {
        case 13:
            var i = t.stateNode,
                s = t.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            i = t.stateNode;
            break;
        default:
            throw Error(P(314));
    }
    i !== null && i.delete(e), eg(t, n);
}
var tg;
tg = function (t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || Ge.current) Ke = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return (Ke = !1), kv(t, e, n);
            Ke = !!(t.flags & 131072);
        }
    else (Ke = !1), ue && e.flags & 1048576 && sm(e, zo, e.index);
    switch (((e.lanes = 0), e.tag)) {
        case 2:
            var i = e.type;
            ho(t, e), (t = e.pendingProps);
            var s = zi(e, Fe.current);
            Li(e, n), (s = fu(null, e, i, t, s, n));
            var r = pu();
            return (
                (e.flags |= 1),
                typeof s == 'object' &&
                s !== null &&
                typeof s.render == 'function' &&
                s.$$typeof === void 0
                    ? ((e.tag = 1),
                      (e.memoizedState = null),
                      (e.updateQueue = null),
                      Je(i) ? ((r = !0), Io(e)) : (r = !1),
                      (e.memoizedState =
                          s.state !== null && s.state !== void 0
                              ? s.state
                              : null),
                      lu(e),
                      (s.updater = pa),
                      (e.stateNode = s),
                      (s._reactInternals = e),
                      Zl(e, i, t, n),
                      (e = nc(null, e, i, !0, r, n)))
                    : ((e.tag = 0),
                      ue && r && tu(e),
                      $e(null, e, s, n),
                      (e = e.child)),
                e
            );
        case 16:
            i = e.elementType;
            e: {
                switch (
                    (ho(t, e),
                    (t = e.pendingProps),
                    (s = i._init),
                    (i = s(i._payload)),
                    (e.type = i),
                    (s = e.tag = zv(i)),
                    (t = _t(i, t)),
                    s)
                ) {
                    case 0:
                        e = tc(null, e, i, t, n);
                        break e;
                    case 1:
                        e = Qd(null, e, i, t, n);
                        break e;
                    case 11:
                        e = Wd(null, e, i, t, n);
                        break e;
                    case 14:
                        e = Ud(null, e, i, _t(i.type, t), n);
                        break e;
                }
                throw Error(P(306, i, ''));
            }
            return e;
        case 0:
            return (
                (i = e.type),
                (s = e.pendingProps),
                (s = e.elementType === i ? s : _t(i, s)),
                tc(t, e, i, s, n)
            );
        case 1:
            return (
                (i = e.type),
                (s = e.pendingProps),
                (s = e.elementType === i ? s : _t(i, s)),
                Qd(t, e, i, s, n)
            );
        case 3:
            e: {
                if ((Fm(e), t === null)) throw Error(P(387));
                (i = e.pendingProps),
                    (r = e.memoizedState),
                    (s = r.element),
                    lm(t, e),
                    $o(e, i, null, n);
                var o = e.memoizedState;
                if (((i = o.element), r.isDehydrated))
                    if (
                        ((r = {
                            element: i,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries:
                                o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (e.updateQueue.baseState = r),
                        (e.memoizedState = r),
                        e.flags & 256)
                    ) {
                        (s = Hi(Error(P(423)), e)), (e = Yd(t, e, i, n, s));
                        break e;
                    } else if (i !== s) {
                        (s = Hi(Error(P(424)), e)), (e = Yd(t, e, i, n, s));
                        break e;
                    } else
                        for (
                            rt = kn(e.stateNode.containerInfo.firstChild),
                                ot = e,
                                ue = !0,
                                wt = null,
                                n = hm(e, null, i, n),
                                e.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Bi(), i === s)) {
                        e = sn(t, e, n);
                        break e;
                    }
                    $e(t, e, i, n);
                }
                e = e.child;
            }
            return e;
        case 5:
            return (
                fm(e),
                t === null && ql(e),
                (i = e.type),
                (s = e.pendingProps),
                (r = t !== null ? t.memoizedProps : null),
                (o = s.children),
                Ul(i, s)
                    ? (o = null)
                    : r !== null && Ul(i, r) && (e.flags |= 32),
                Im(t, e),
                $e(t, e, o, n),
                e.child
            );
        case 6:
            return t === null && ql(e), null;
        case 13:
            return zm(t, e, n);
        case 4:
            return (
                cu(e, e.stateNode.containerInfo),
                (i = e.pendingProps),
                t === null ? (e.child = Vi(e, null, i, n)) : $e(t, e, i, n),
                e.child
            );
        case 11:
            return (
                (i = e.type),
                (s = e.pendingProps),
                (s = e.elementType === i ? s : _t(i, s)),
                Wd(t, e, i, s, n)
            );
        case 7:
            return $e(t, e, e.pendingProps, n), e.child;
        case 8:
            return $e(t, e, e.pendingProps.children, n), e.child;
        case 12:
            return $e(t, e, e.pendingProps.children, n), e.child;
        case 10:
            e: {
                if (
                    ((i = e.type._context),
                    (s = e.pendingProps),
                    (r = e.memoizedProps),
                    (o = s.value),
                    ie(Bo, i._currentValue),
                    (i._currentValue = o),
                    r !== null)
                )
                    if (Pt(r.value, o)) {
                        if (r.children === s.children && !Ge.current) {
                            e = sn(t, e, n);
                            break e;
                        }
                    } else
                        for (
                            r = e.child, r !== null && (r.return = e);
                            r !== null;

                        ) {
                            var a = r.dependencies;
                            if (a !== null) {
                                o = r.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === i) {
                                        if (r.tag === 1) {
                                            (l = Zt(-1, n & -n)), (l.tag = 2);
                                            var c = r.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var u = c.pending;
                                                u === null
                                                    ? (l.next = l)
                                                    : ((l.next = u.next),
                                                      (u.next = l)),
                                                    (c.pending = l);
                                            }
                                        }
                                        (r.lanes |= n),
                                            (l = r.alternate),
                                            l !== null && (l.lanes |= n),
                                            Gl(r.return, n, e),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (r.tag === 10)
                                o = r.type === e.type ? null : r.child;
                            else if (r.tag === 18) {
                                if (((o = r.return), o === null))
                                    throw Error(P(341));
                                (o.lanes |= n),
                                    (a = o.alternate),
                                    a !== null && (a.lanes |= n),
                                    Gl(o, n, e),
                                    (o = r.sibling);
                            } else o = r.child;
                            if (o !== null) o.return = r;
                            else
                                for (o = r; o !== null; ) {
                                    if (o === e) {
                                        o = null;
                                        break;
                                    }
                                    if (((r = o.sibling), r !== null)) {
                                        (r.return = o.return), (o = r);
                                        break;
                                    }
                                    o = o.return;
                                }
                            r = o;
                        }
                $e(t, e, s.children, n), (e = e.child);
            }
            return e;
        case 9:
            return (
                (s = e.type),
                (i = e.pendingProps.children),
                Li(e, n),
                (s = gt(s)),
                (i = i(s)),
                (e.flags |= 1),
                $e(t, e, i, n),
                e.child
            );
        case 14:
            return (
                (i = e.type),
                (s = _t(i, e.pendingProps)),
                (s = _t(i.type, s)),
                Ud(t, e, i, s, n)
            );
        case 15:
            return Rm(t, e, e.type, e.pendingProps, n);
        case 17:
            return (
                (i = e.type),
                (s = e.pendingProps),
                (s = e.elementType === i ? s : _t(i, s)),
                ho(t, e),
                (e.tag = 1),
                Je(i) ? ((t = !0), Io(e)) : (t = !1),
                Li(e, n),
                um(e, i, s),
                Zl(e, i, s, n),
                nc(null, e, i, !0, t, n)
            );
        case 19:
            return Bm(t, e, n);
        case 22:
            return Am(t, e, n);
    }
    throw Error(P(156, e.tag));
};
function ng(t, e) {
    return Ep(t, e);
}
function Fv(t, e, n, i) {
    (this.tag = t),
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
        (this.pendingProps = e),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = i),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function pt(t, e, n, i) {
    return new Fv(t, e, n, i);
}
function ku(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
}
function zv(t) {
    if (typeof t == 'function') return ku(t) ? 1 : 0;
    if (t != null) {
        if (((t = t.$$typeof), t === Hc)) return 11;
        if (t === Wc) return 14;
    }
    return 2;
}
function En(t, e) {
    var n = t.alternate;
    return (
        n === null
            ? ((n = pt(t.tag, e, t.key, t.mode)),
              (n.elementType = t.elementType),
              (n.type = t.type),
              (n.stateNode = t.stateNode),
              (n.alternate = t),
              (t.alternate = n))
            : ((n.pendingProps = e),
              (n.type = t.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = t.flags & 14680064),
        (n.childLanes = t.childLanes),
        (n.lanes = t.lanes),
        (n.child = t.child),
        (n.memoizedProps = t.memoizedProps),
        (n.memoizedState = t.memoizedState),
        (n.updateQueue = t.updateQueue),
        (e = t.dependencies),
        (n.dependencies =
            e === null
                ? null
                : { lanes: e.lanes, firstContext: e.firstContext }),
        (n.sibling = t.sibling),
        (n.index = t.index),
        (n.ref = t.ref),
        n
    );
}
function mo(t, e, n, i, s, r) {
    var o = 2;
    if (((i = t), typeof t == 'function')) ku(t) && (o = 1);
    else if (typeof t == 'string') o = 5;
    else
        e: switch (t) {
            case xi:
                return ei(n.children, s, r, e);
            case $c:
                (o = 8), (s |= 8);
                break;
            case Sl:
                return (
                    (t = pt(12, n, e, s | 2)),
                    (t.elementType = Sl),
                    (t.lanes = r),
                    t
                );
            case kl:
                return (
                    (t = pt(13, n, e, s)),
                    (t.elementType = kl),
                    (t.lanes = r),
                    t
                );
            case Cl:
                return (
                    (t = pt(19, n, e, s)),
                    (t.elementType = Cl),
                    (t.lanes = r),
                    t
                );
            case dp:
                return va(n, s, r, e);
            default:
                if (typeof t == 'object' && t !== null)
                    switch (t.$$typeof) {
                        case cp:
                            o = 10;
                            break e;
                        case up:
                            o = 9;
                            break e;
                        case Hc:
                            o = 11;
                            break e;
                        case Wc:
                            o = 14;
                            break e;
                        case cn:
                            (o = 16), (i = null);
                            break e;
                    }
                throw Error(P(130, t == null ? t : typeof t, ''));
        }
    return (
        (e = pt(o, n, e, s)),
        (e.elementType = t),
        (e.type = i),
        (e.lanes = r),
        e
    );
}
function ei(t, e, n, i) {
    return (t = pt(7, t, i, e)), (t.lanes = n), t;
}
function va(t, e, n, i) {
    return (
        (t = pt(22, t, i, e)),
        (t.elementType = dp),
        (t.lanes = n),
        (t.stateNode = { isHidden: !1 }),
        t
    );
}
function il(t, e, n) {
    return (t = pt(6, t, null, e)), (t.lanes = n), t;
}
function sl(t, e, n) {
    return (
        (e = pt(4, t.children !== null ? t.children : [], t.key, e)),
        (e.lanes = n),
        (e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation,
        }),
        e
    );
}
function Bv(t, e, n, i, s) {
    (this.tag = e),
        (this.containerInfo = t),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Fa(0)),
        (this.expirationTimes = Fa(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Fa(0)),
        (this.identifierPrefix = i),
        (this.onRecoverableError = s),
        (this.mutableSourceEagerHydrationData = null);
}
function Cu(t, e, n, i, s, r, o, a, l) {
    return (
        (t = new Bv(t, e, n, a, l)),
        e === 1 ? ((e = 1), r === !0 && (e |= 8)) : (e = 0),
        (r = pt(3, null, null, e)),
        (t.current = r),
        (r.stateNode = t),
        (r.memoizedState = {
            element: i,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        lu(r),
        t
    );
}
function Vv(t, e, n) {
    var i =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: vi,
        key: i == null ? null : '' + i,
        children: t,
        containerInfo: e,
        implementation: n,
    };
}
function ig(t) {
    if (!t) return Nn;
    t = t._reactInternals;
    e: {
        if (fi(t) !== t || t.tag !== 1) throw Error(P(170));
        var e = t;
        do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context;
                    break e;
                case 1:
                    if (Je(e.type)) {
                        e =
                            e.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            e = e.return;
        } while (e !== null);
        throw Error(P(171));
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Je(n)) return nm(t, n, e);
    }
    return e;
}
function sg(t, e, n, i, s, r, o, a, l) {
    return (
        (t = Cu(n, i, !0, t, s, r, o, a, l)),
        (t.context = ig(null)),
        (n = t.current),
        (i = He()),
        (s = Pn(n)),
        (r = Zt(i, s)),
        (r.callback = e ?? null),
        Cn(n, r, s),
        (t.current.lanes = s),
        fr(t, s, i),
        Ze(t, i),
        t
    );
}
function xa(t, e, n, i) {
    var s = e.current,
        r = He(),
        o = Pn(s);
    return (
        (n = ig(n)),
        e.context === null ? (e.context = n) : (e.pendingContext = n),
        (e = Zt(r, o)),
        (e.payload = { element: t }),
        (i = i === void 0 ? null : i),
        i !== null && (e.callback = i),
        (t = Cn(s, e, o)),
        t !== null && (Ct(t, s, o, r), lo(t, s, o)),
        o
    );
}
function qo(t) {
    if (((t = t.current), !t.child)) return null;
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode;
    }
}
function ih(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e;
    }
}
function Mu(t, e) {
    ih(t, e), (t = t.alternate) && ih(t, e);
}
function $v() {
    return null;
}
var rg =
    typeof reportError == 'function'
        ? reportError
        : function (t) {
              console.error(t);
          };
function Pu(t) {
    this._internalRoot = t;
}
_a.prototype.render = Pu.prototype.render = function (t) {
    var e = this._internalRoot;
    if (e === null) throw Error(P(409));
    xa(t, e, null, null);
};
_a.prototype.unmount = Pu.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        li(function () {
            xa(null, t, null, null);
        }),
            (e[tn] = null);
    }
};
function _a(t) {
    this._internalRoot = t;
}
_a.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
        var e = Rp();
        t = { blockedOn: null, target: t, priority: e };
        for (var n = 0; n < dn.length && e !== 0 && e < dn[n].priority; n++);
        dn.splice(n, 0, t), n === 0 && Ip(t);
    }
};
function Eu(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function ba(t) {
    return !(
        !t ||
        (t.nodeType !== 1 &&
            t.nodeType !== 9 &&
            t.nodeType !== 11 &&
            (t.nodeType !== 8 ||
                t.nodeValue !== ' react-mount-point-unstable '))
    );
}
function sh() {}
function Hv(t, e, n, i, s) {
    if (s) {
        if (typeof i == 'function') {
            var r = i;
            i = function () {
                var c = qo(o);
                r.call(c);
            };
        }
        var o = sg(e, i, t, 0, null, !1, !1, '', sh);
        return (
            (t._reactRootContainer = o),
            (t[tn] = o.current),
            Ys(t.nodeType === 8 ? t.parentNode : t),
            li(),
            o
        );
    }
    for (; (s = t.lastChild); ) t.removeChild(s);
    if (typeof i == 'function') {
        var a = i;
        i = function () {
            var c = qo(l);
            a.call(c);
        };
    }
    var l = Cu(t, 0, !1, null, null, !1, !1, '', sh);
    return (
        (t._reactRootContainer = l),
        (t[tn] = l.current),
        Ys(t.nodeType === 8 ? t.parentNode : t),
        li(function () {
            xa(e, l, n, i);
        }),
        l
    );
}
function wa(t, e, n, i, s) {
    var r = n._reactRootContainer;
    if (r) {
        var o = r;
        if (typeof s == 'function') {
            var a = s;
            s = function () {
                var l = qo(o);
                a.call(l);
            };
        }
        xa(e, o, t, s);
    } else o = Hv(n, e, t, s, i);
    return qo(o);
}
Dp = function (t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
                var n = ps(e.pendingLanes);
                n !== 0 &&
                    (Yc(e, n | 1),
                    Ze(e, ve()),
                    !(Y & 6) && ((Wi = ve() + 500), In()));
            }
            break;
        case 13:
            li(function () {
                var i = nn(t, 1);
                if (i !== null) {
                    var s = He();
                    Ct(i, t, 1, s);
                }
            }),
                Mu(t, 1);
    }
};
Xc = function (t) {
    if (t.tag === 13) {
        var e = nn(t, 134217728);
        if (e !== null) {
            var n = He();
            Ct(e, t, 134217728, n);
        }
        Mu(t, 134217728);
    }
};
Lp = function (t) {
    if (t.tag === 13) {
        var e = Pn(t),
            n = nn(t, e);
        if (n !== null) {
            var i = He();
            Ct(n, t, e, i);
        }
        Mu(t, e);
    }
};
Rp = function () {
    return Z;
};
Ap = function (t, e) {
    var n = Z;
    try {
        return (Z = t), e();
    } finally {
        Z = n;
    }
};
Rl = function (t, e, n) {
    switch (e) {
        case 'input':
            if ((El(t, n), (e = n.name), n.type === 'radio' && e != null)) {
                for (n = t; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        'input[name=' +
                            JSON.stringify('' + e) +
                            '][type="radio"]'
                    ),
                        e = 0;
                    e < n.length;
                    e++
                ) {
                    var i = n[e];
                    if (i !== t && i.form === t.form) {
                        var s = ha(i);
                        if (!s) throw Error(P(90));
                        fp(i), El(i, s);
                    }
                }
            }
            break;
        case 'textarea':
            mp(t, n);
            break;
        case 'select':
            (e = n.value), e != null && ji(t, !!n.multiple, e, !1);
    }
};
wp = bu;
Sp = li;
var Wv = { usingClientEntryPoint: !1, Events: [mr, Si, ha, _p, bp, bu] },
    os = {
        findFiberByHostInstance: Kn,
        bundleType: 0,
        version: '18.2.0',
        rendererPackageName: 'react-dom',
    },
    Uv = {
        bundleType: os.bundleType,
        version: os.version,
        rendererPackageName: os.rendererPackageName,
        rendererConfig: os.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: rn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (t) {
            return (t = Mp(t)), t === null ? null : t.stateNode;
        },
        findFiberByHostInstance: os.findFiberByHostInstance || $v,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ir.isDisabled && Ir.supportsFiber)
        try {
            (la = Ir.inject(Uv)), (It = Ir);
        } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wv;
lt.createPortal = function (t, e) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Eu(e)) throw Error(P(200));
    return Vv(t, e, null, n);
};
lt.createRoot = function (t, e) {
    if (!Eu(t)) throw Error(P(299));
    var n = !1,
        i = '',
        s = rg;
    return (
        e != null &&
            (e.unstable_strictMode === !0 && (n = !0),
            e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
            e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
        (e = Cu(t, 1, !1, null, null, n, !1, i, s)),
        (t[tn] = e.current),
        Ys(t.nodeType === 8 ? t.parentNode : t),
        new Pu(e)
    );
};
lt.findDOMNode = function (t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == 'function'
            ? Error(P(188))
            : ((t = Object.keys(t).join(',')), Error(P(268, t)));
    return (t = Mp(e)), (t = t === null ? null : t.stateNode), t;
};
lt.flushSync = function (t) {
    return li(t);
};
lt.hydrate = function (t, e, n) {
    if (!ba(e)) throw Error(P(200));
    return wa(null, t, e, !0, n);
};
lt.hydrateRoot = function (t, e, n) {
    if (!Eu(t)) throw Error(P(405));
    var i = (n != null && n.hydratedSources) || null,
        s = !1,
        r = '',
        o = rg;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (s = !0),
            n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (e = sg(e, null, t, 1, n ?? null, s, !1, r, o)),
        (t[tn] = e.current),
        Ys(t),
        i)
    )
        for (t = 0; t < i.length; t++)
            (n = i[t]),
                (s = n._getVersion),
                (s = s(n._source)),
                e.mutableSourceEagerHydrationData == null
                    ? (e.mutableSourceEagerHydrationData = [n, s])
                    : e.mutableSourceEagerHydrationData.push(n, s);
    return new _a(e);
};
lt.render = function (t, e, n) {
    if (!ba(e)) throw Error(P(200));
    return wa(null, t, e, !1, n);
};
lt.unmountComponentAtNode = function (t) {
    if (!ba(t)) throw Error(P(40));
    return t._reactRootContainer
        ? (li(function () {
              wa(null, null, t, !1, function () {
                  (t._reactRootContainer = null), (t[tn] = null);
              });
          }),
          !0)
        : !1;
};
lt.unstable_batchedUpdates = bu;
lt.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
    if (!ba(n)) throw Error(P(200));
    if (t == null || t._reactInternals === void 0) throw Error(P(38));
    return wa(t, e, n, !1, i);
};
lt.version = '18.2.0-next-9e3b772b8-20220608';
function og() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(og);
        } catch (t) {
            console.error(t);
        }
}
og(), (sp.exports = lt);
var Qv = sp.exports,
    rh = Qv;
(bl.createRoot = rh.createRoot), (bl.hydrateRoot = rh.hydrateRoot);
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
    return (
        (nr = Object.assign
            ? Object.assign.bind()
            : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var i in n)
                          Object.prototype.hasOwnProperty.call(n, i) &&
                              (t[i] = n[i]);
                  }
                  return t;
              }),
        nr.apply(this, arguments)
    );
}
var mn;
(function (t) {
    (t.Pop = 'POP'), (t.Push = 'PUSH'), (t.Replace = 'REPLACE');
})(mn || (mn = {}));
const oh = 'popstate';
function Yv(t) {
    t === void 0 && (t = {});
    function e(i, s) {
        let { pathname: r, search: o, hash: a } = i.location;
        return pc(
            '',
            { pathname: r, search: o, hash: a },
            (s.state && s.state.usr) || null,
            (s.state && s.state.key) || 'default'
        );
    }
    function n(i, s) {
        return typeof s == 'string' ? s : ag(s);
    }
    return Kv(e, n, null, t);
}
function ke(t, e) {
    if (t === !1 || t === null || typeof t > 'u') throw new Error(e);
}
function Tu(t, e) {
    if (!t) {
        typeof console < 'u' && console.warn(e);
        try {
            throw new Error(e);
        } catch {}
    }
}
function Xv() {
    return Math.random().toString(36).substr(2, 8);
}
function ah(t, e) {
    return { usr: t.state, key: t.key, idx: e };
}
function pc(t, e, n, i) {
    return (
        n === void 0 && (n = null),
        nr(
            {
                pathname: typeof t == 'string' ? t : t.pathname,
                search: '',
                hash: '',
            },
            typeof e == 'string' ? Gi(e) : e,
            { state: n, key: (e && e.key) || i || Xv() }
        )
    );
}
function ag(t) {
    let { pathname: e = '/', search: n = '', hash: i = '' } = t;
    return (
        n && n !== '?' && (e += n.charAt(0) === '?' ? n : '?' + n),
        i && i !== '#' && (e += i.charAt(0) === '#' ? i : '#' + i),
        e
    );
}
function Gi(t) {
    let e = {};
    if (t) {
        let n = t.indexOf('#');
        n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
        let i = t.indexOf('?');
        i >= 0 && ((e.search = t.substr(i)), (t = t.substr(0, i))),
            t && (e.pathname = t);
    }
    return e;
}
function Kv(t, e, n, i) {
    i === void 0 && (i = {});
    let { window: s = document.defaultView, v5Compat: r = !1 } = i,
        o = s.history,
        a = mn.Pop,
        l = null,
        c = u();
    c == null && ((c = 0), o.replaceState(nr({}, o.state, { idx: c }), ''));
    function u() {
        return (o.state || { idx: null }).idx;
    }
    function d() {
        a = mn.Pop;
        let _ = u(),
            m = _ == null ? null : _ - c;
        (c = _), l && l({ action: a, location: y.location, delta: m });
    }
    function h(_, m) {
        a = mn.Push;
        let g = pc(y.location, _, m);
        n && n(g, _), (c = u() + 1);
        let x = ah(g, c),
            b = y.createHref(g);
        try {
            o.pushState(x, '', b);
        } catch {
            s.location.assign(b);
        }
        r && l && l({ action: a, location: y.location, delta: 1 });
    }
    function p(_, m) {
        a = mn.Replace;
        let g = pc(y.location, _, m);
        n && n(g, _), (c = u());
        let x = ah(g, c),
            b = y.createHref(g);
        o.replaceState(x, '', b),
            r && l && l({ action: a, location: y.location, delta: 0 });
    }
    function v(_) {
        let m =
                s.location.origin !== 'null'
                    ? s.location.origin
                    : s.location.href,
            g = typeof _ == 'string' ? _ : ag(_);
        return (
            ke(
                m,
                'No window.location.(origin|href) available to create URL for href: ' +
                    g
            ),
            new URL(g, m)
        );
    }
    let y = {
        get action() {
            return a;
        },
        get location() {
            return t(s, o);
        },
        listen(_) {
            if (l)
                throw new Error('A history only accepts one active listener');
            return (
                s.addEventListener(oh, d),
                (l = _),
                () => {
                    s.removeEventListener(oh, d), (l = null);
                }
            );
        },
        createHref(_) {
            return e(s, _);
        },
        createURL: v,
        encodeLocation(_) {
            let m = v(_);
            return { pathname: m.pathname, search: m.search, hash: m.hash };
        },
        push: h,
        replace: p,
        go(_) {
            return o.go(_);
        },
    };
    return y;
}
var lh;
(function (t) {
    (t.data = 'data'),
        (t.deferred = 'deferred'),
        (t.redirect = 'redirect'),
        (t.error = 'error');
})(lh || (lh = {}));
function qv(t, e, n) {
    n === void 0 && (n = '/');
    let i = typeof e == 'string' ? Gi(e) : e,
        s = ug(i.pathname || '/', n);
    if (s == null) return null;
    let r = lg(t);
    Gv(r);
    let o = null;
    for (let a = 0; o == null && a < r.length; ++a) o = o1(r[a], c1(s));
    return o;
}
function lg(t, e, n, i) {
    e === void 0 && (e = []),
        n === void 0 && (n = []),
        i === void 0 && (i = '');
    let s = (r, o, a) => {
        let l = {
            relativePath: a === void 0 ? r.path || '' : a,
            caseSensitive: r.caseSensitive === !0,
            childrenIndex: o,
            route: r,
        };
        l.relativePath.startsWith('/') &&
            (ke(
                l.relativePath.startsWith(i),
                'Absolute route path "' +
                    l.relativePath +
                    '" nested under path ' +
                    ('"' +
                        i +
                        '" is not valid. An absolute child route path ') +
                    'must start with the combined path of all its parent routes.'
            ),
            (l.relativePath = l.relativePath.slice(i.length)));
        let c = ti([i, l.relativePath]),
            u = n.concat(l);
        r.children &&
            r.children.length > 0 &&
            (ke(
                r.index !== !0,
                'Index routes must not have child routes. Please remove ' +
                    ('all child routes from route path "' + c + '".')
            ),
            lg(r.children, e, u, c)),
            !(r.path == null && !r.index) &&
                e.push({ path: c, score: s1(c, r.index), routesMeta: u });
    };
    return (
        t.forEach((r, o) => {
            var a;
            if (r.path === '' || !((a = r.path) != null && a.includes('?')))
                s(r, o);
            else for (let l of cg(r.path)) s(r, o, l);
        }),
        e
    );
}
function cg(t) {
    let e = t.split('/');
    if (e.length === 0) return [];
    let [n, ...i] = e,
        s = n.endsWith('?'),
        r = n.replace(/\?$/, '');
    if (i.length === 0) return s ? [r, ''] : [r];
    let o = cg(i.join('/')),
        a = [];
    return (
        a.push(...o.map((l) => (l === '' ? r : [r, l].join('/')))),
        s && a.push(...o),
        a.map((l) => (t.startsWith('/') && l === '' ? '/' : l))
    );
}
function Gv(t) {
    t.sort((e, n) =>
        e.score !== n.score
            ? n.score - e.score
            : r1(
                  e.routesMeta.map((i) => i.childrenIndex),
                  n.routesMeta.map((i) => i.childrenIndex)
              )
    );
}
const Jv = /^:\w+$/,
    Zv = 3,
    e1 = 2,
    t1 = 1,
    n1 = 10,
    i1 = -2,
    ch = (t) => t === '*';
function s1(t, e) {
    let n = t.split('/'),
        i = n.length;
    return (
        n.some(ch) && (i += i1),
        e && (i += e1),
        n
            .filter((s) => !ch(s))
            .reduce((s, r) => s + (Jv.test(r) ? Zv : r === '' ? t1 : n1), i)
    );
}
function r1(t, e) {
    return t.length === e.length && t.slice(0, -1).every((i, s) => i === e[s])
        ? t[t.length - 1] - e[e.length - 1]
        : 0;
}
function o1(t, e) {
    let { routesMeta: n } = t,
        i = {},
        s = '/',
        r = [];
    for (let o = 0; o < n.length; ++o) {
        let a = n[o],
            l = o === n.length - 1,
            c = s === '/' ? e : e.slice(s.length) || '/',
            u = a1(
                {
                    path: a.relativePath,
                    caseSensitive: a.caseSensitive,
                    end: l,
                },
                c
            );
        if (!u) return null;
        Object.assign(i, u.params);
        let d = a.route;
        r.push({
            params: i,
            pathname: ti([s, u.pathname]),
            pathnameBase: m1(ti([s, u.pathnameBase])),
            route: d,
        }),
            u.pathnameBase !== '/' && (s = ti([s, u.pathnameBase]));
    }
    return r;
}
function a1(t, e) {
    typeof t == 'string' && (t = { path: t, caseSensitive: !1, end: !0 });
    let [n, i] = l1(t.path, t.caseSensitive, t.end),
        s = e.match(n);
    if (!s) return null;
    let r = s[0],
        o = r.replace(/(.)\/+$/, '$1'),
        a = s.slice(1);
    return {
        params: i.reduce((c, u, d) => {
            if (u === '*') {
                let h = a[d] || '';
                o = r.slice(0, r.length - h.length).replace(/(.)\/+$/, '$1');
            }
            return (c[u] = u1(a[d] || '', u)), c;
        }, {}),
        pathname: r,
        pathnameBase: o,
        pattern: t,
    };
}
function l1(t, e, n) {
    e === void 0 && (e = !1),
        n === void 0 && (n = !0),
        Tu(
            t === '*' || !t.endsWith('*') || t.endsWith('/*'),
            'Route path "' +
                t +
                '" will be treated as if it were ' +
                ('"' +
                    t.replace(/\*$/, '/*') +
                    '" because the `*` character must ') +
                'always follow a `/` in the pattern. To get rid of this warning, ' +
                ('please change the route path to "' +
                    t.replace(/\*$/, '/*') +
                    '".')
        );
    let i = [],
        s =
            '^' +
            t
                .replace(/\/*\*?$/, '')
                .replace(/^\/*/, '/')
                .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
                .replace(/\/:(\w+)/g, (o, a) => (i.push(a), '/([^\\/]+)'));
    return (
        t.endsWith('*')
            ? (i.push('*'),
              (s += t === '*' || t === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
            : n
            ? (s += '\\/*$')
            : t !== '' && t !== '/' && (s += '(?:(?=\\/|$))'),
        [new RegExp(s, e ? void 0 : 'i'), i]
    );
}
function c1(t) {
    try {
        return decodeURI(t);
    } catch (e) {
        return (
            Tu(
                !1,
                'The URL path "' +
                    t +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ('encoding (' + e + ').')
            ),
            t
        );
    }
}
function u1(t, e) {
    try {
        return decodeURIComponent(t);
    } catch (n) {
        return (
            Tu(
                !1,
                'The value for the URL param "' +
                    e +
                    '" will not be decoded because' +
                    (' the string "' +
                        t +
                        '" is a malformed URL segment. This is probably') +
                    (' due to a bad percent encoding (' + n + ').')
            ),
            t
        );
    }
}
function ug(t, e) {
    if (e === '/') return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let n = e.endsWith('/') ? e.length - 1 : e.length,
        i = t.charAt(n);
    return i && i !== '/' ? null : t.slice(n) || '/';
}
function d1(t, e) {
    e === void 0 && (e = '/');
    let {
        pathname: n,
        search: i = '',
        hash: s = '',
    } = typeof t == 'string' ? Gi(t) : t;
    return {
        pathname: n ? (n.startsWith('/') ? n : h1(n, e)) : e,
        search: g1(i),
        hash: y1(s),
    };
}
function h1(t, e) {
    let n = e.replace(/\/+$/, '').split('/');
    return (
        t.split('/').forEach((s) => {
            s === '..' ? n.length > 1 && n.pop() : s !== '.' && n.push(s);
        }),
        n.length > 1 ? n.join('/') : '/'
    );
}
function rl(t, e, n, i) {
    return (
        "Cannot include a '" +
        t +
        "' character in a manually specified " +
        ('`to.' +
            e +
            '` field [' +
            JSON.stringify(i) +
            '].  Please separate it out to the ') +
        ('`to.' +
            n +
            '` field. Alternatively you may provide the full path as ') +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function f1(t) {
    return t.filter(
        (e, n) => n === 0 || (e.route.path && e.route.path.length > 0)
    );
}
function p1(t, e, n, i) {
    i === void 0 && (i = !1);
    let s;
    typeof t == 'string'
        ? (s = Gi(t))
        : ((s = nr({}, t)),
          ke(
              !s.pathname || !s.pathname.includes('?'),
              rl('?', 'pathname', 'search', s)
          ),
          ke(
              !s.pathname || !s.pathname.includes('#'),
              rl('#', 'pathname', 'hash', s)
          ),
          ke(
              !s.search || !s.search.includes('#'),
              rl('#', 'search', 'hash', s)
          ));
    let r = t === '' || s.pathname === '',
        o = r ? '/' : s.pathname,
        a;
    if (i || o == null) a = n;
    else {
        let d = e.length - 1;
        if (o.startsWith('..')) {
            let h = o.split('/');
            for (; h[0] === '..'; ) h.shift(), (d -= 1);
            s.pathname = h.join('/');
        }
        a = d >= 0 ? e[d] : '/';
    }
    let l = d1(s, a),
        c = o && o !== '/' && o.endsWith('/'),
        u = (r || o === '.') && n.endsWith('/');
    return !l.pathname.endsWith('/') && (c || u) && (l.pathname += '/'), l;
}
const ti = (t) => t.join('/').replace(/\/\/+/g, '/'),
    m1 = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/'),
    g1 = (t) => (!t || t === '?' ? '' : t.startsWith('?') ? t : '?' + t),
    y1 = (t) => (!t || t === '#' ? '' : t.startsWith('#') ? t : '#' + t);
function v1(t) {
    return (
        t != null &&
        typeof t.status == 'number' &&
        typeof t.statusText == 'string' &&
        typeof t.internal == 'boolean' &&
        'data' in t
    );
}
const dg = ['post', 'put', 'patch', 'delete'];
new Set(dg);
const x1 = ['get', ...dg];
new Set(x1);
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Go() {
    return (
        (Go = Object.assign
            ? Object.assign.bind()
            : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var i in n)
                          Object.prototype.hasOwnProperty.call(n, i) &&
                              (t[i] = n[i]);
                  }
                  return t;
              }),
        Go.apply(this, arguments)
    );
}
const ju = C.createContext(null),
    _1 = C.createContext(null),
    Sa = C.createContext(null),
    ka = C.createContext(null),
    Fn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    hg = C.createContext(null);
function Ca() {
    return C.useContext(ka) != null;
}
function fg() {
    return Ca() || ke(!1), C.useContext(ka).location;
}
function pg(t) {
    C.useContext(Sa).static || C.useLayoutEffect(t);
}
function Ji() {
    let { isDataRoute: t } = C.useContext(Fn);
    return t ? A1() : b1();
}
function b1() {
    Ca() || ke(!1);
    let t = C.useContext(ju),
        { basename: e, navigator: n } = C.useContext(Sa),
        { matches: i } = C.useContext(Fn),
        { pathname: s } = fg(),
        r = JSON.stringify(f1(i).map((l) => l.pathnameBase)),
        o = C.useRef(!1);
    return (
        pg(() => {
            o.current = !0;
        }),
        C.useCallback(
            function (l, c) {
                if ((c === void 0 && (c = {}), !o.current)) return;
                if (typeof l == 'number') {
                    n.go(l);
                    return;
                }
                let u = p1(l, JSON.parse(r), s, c.relative === 'path');
                t == null &&
                    e !== '/' &&
                    (u.pathname = u.pathname === '/' ? e : ti([e, u.pathname])),
                    (c.replace ? n.replace : n.push)(u, c.state, c);
            },
            [e, n, r, s, t]
        )
    );
}
const w1 = C.createContext(null);
function S1(t) {
    let e = C.useContext(Fn).outlet;
    return e && C.createElement(w1.Provider, { value: t }, e);
}
function k1() {
    let { matches: t } = C.useContext(Fn),
        e = t[t.length - 1];
    return e ? e.params : {};
}
function C1(t, e) {
    return M1(t, e);
}
function M1(t, e, n) {
    Ca() || ke(!1);
    let { navigator: i } = C.useContext(Sa),
        { matches: s } = C.useContext(Fn),
        r = s[s.length - 1],
        o = r ? r.params : {};
    r && r.pathname;
    let a = r ? r.pathnameBase : '/';
    r && r.route;
    let l = fg(),
        c;
    if (e) {
        var u;
        let y = typeof e == 'string' ? Gi(e) : e;
        a === '/' || ((u = y.pathname) != null && u.startsWith(a)) || ke(!1),
            (c = y);
    } else c = l;
    let d = c.pathname || '/',
        h = a === '/' ? d : d.slice(a.length) || '/',
        p = qv(t, { pathname: h }),
        v = O1(
            p &&
                p.map((y) =>
                    Object.assign({}, y, {
                        params: Object.assign({}, o, y.params),
                        pathname: ti([
                            a,
                            i.encodeLocation
                                ? i.encodeLocation(y.pathname).pathname
                                : y.pathname,
                        ]),
                        pathnameBase:
                            y.pathnameBase === '/'
                                ? a
                                : ti([
                                      a,
                                      i.encodeLocation
                                          ? i.encodeLocation(y.pathnameBase)
                                                .pathname
                                          : y.pathnameBase,
                                  ]),
                    })
                ),
            s,
            n
        );
    return e && v
        ? C.createElement(
              ka.Provider,
              {
                  value: {
                      location: Go(
                          {
                              pathname: '/',
                              search: '',
                              hash: '',
                              state: null,
                              key: 'default',
                          },
                          c
                      ),
                      navigationType: mn.Pop,
                  },
              },
              v
          )
        : v;
}
function P1() {
    let t = R1(),
        e = v1(t)
            ? t.status + ' ' + t.statusText
            : t instanceof Error
            ? t.message
            : JSON.stringify(t),
        n = t instanceof Error ? t.stack : null,
        s = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
        r = null;
    return C.createElement(
        C.Fragment,
        null,
        C.createElement('h2', null, 'Unexpected Application Error!'),
        C.createElement('h3', { style: { fontStyle: 'italic' } }, e),
        n ? C.createElement('pre', { style: s }, n) : null,
        r
    );
}
const E1 = C.createElement(P1, null);
class T1 extends C.Component {
    constructor(e) {
        super(e),
            (this.state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error,
            });
    }
    static getDerivedStateFromError(e) {
        return { error: e };
    }
    static getDerivedStateFromProps(e, n) {
        return n.location !== e.location ||
            (n.revalidation !== 'idle' && e.revalidation === 'idle')
            ? {
                  error: e.error,
                  location: e.location,
                  revalidation: e.revalidation,
              }
            : {
                  error: e.error || n.error,
                  location: n.location,
                  revalidation: e.revalidation || n.revalidation,
              };
    }
    componentDidCatch(e, n) {
        console.error(
            'React Router caught the following error during render',
            e,
            n
        );
    }
    render() {
        return this.state.error
            ? C.createElement(
                  Fn.Provider,
                  { value: this.props.routeContext },
                  C.createElement(hg.Provider, {
                      value: this.state.error,
                      children: this.props.component,
                  })
              )
            : this.props.children;
    }
}
function j1(t) {
    let { routeContext: e, match: n, children: i } = t,
        s = C.useContext(ju);
    return (
        s &&
            s.static &&
            s.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (s.staticContext._deepestRenderedBoundaryId = n.route.id),
        C.createElement(Fn.Provider, { value: e }, i)
    );
}
function O1(t, e, n) {
    var i;
    if ((e === void 0 && (e = []), n === void 0 && (n = null), t == null)) {
        var s;
        if ((s = n) != null && s.errors) t = n.matches;
        else return null;
    }
    let r = t,
        o = (i = n) == null ? void 0 : i.errors;
    if (o != null) {
        let a = r.findIndex(
            (l) => l.route.id && (o == null ? void 0 : o[l.route.id])
        );
        a >= 0 || ke(!1), (r = r.slice(0, Math.min(r.length, a + 1)));
    }
    return r.reduceRight((a, l, c) => {
        let u = l.route.id ? (o == null ? void 0 : o[l.route.id]) : null,
            d = null;
        n && (d = l.route.errorElement || E1);
        let h = e.concat(r.slice(0, c + 1)),
            p = () => {
                let v;
                return (
                    u
                        ? (v = d)
                        : l.route.Component
                        ? (v = C.createElement(l.route.Component, null))
                        : l.route.element
                        ? (v = l.route.element)
                        : (v = a),
                    C.createElement(j1, {
                        match: l,
                        routeContext: {
                            outlet: a,
                            matches: h,
                            isDataRoute: n != null,
                        },
                        children: v,
                    })
                );
            };
        return n && (l.route.ErrorBoundary || l.route.errorElement || c === 0)
            ? C.createElement(T1, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: d,
                  error: u,
                  children: p(),
                  routeContext: { outlet: null, matches: h, isDataRoute: !0 },
              })
            : p();
    }, null);
}
var mc;
(function (t) {
    (t.UseBlocker = 'useBlocker'),
        (t.UseRevalidator = 'useRevalidator'),
        (t.UseNavigateStable = 'useNavigate');
})(mc || (mc = {}));
var ir;
(function (t) {
    (t.UseBlocker = 'useBlocker'),
        (t.UseLoaderData = 'useLoaderData'),
        (t.UseActionData = 'useActionData'),
        (t.UseRouteError = 'useRouteError'),
        (t.UseNavigation = 'useNavigation'),
        (t.UseRouteLoaderData = 'useRouteLoaderData'),
        (t.UseMatches = 'useMatches'),
        (t.UseRevalidator = 'useRevalidator'),
        (t.UseNavigateStable = 'useNavigate'),
        (t.UseRouteId = 'useRouteId');
})(ir || (ir = {}));
function N1(t) {
    let e = C.useContext(ju);
    return e || ke(!1), e;
}
function D1(t) {
    let e = C.useContext(_1);
    return e || ke(!1), e;
}
function L1(t) {
    let e = C.useContext(Fn);
    return e || ke(!1), e;
}
function mg(t) {
    let e = L1(),
        n = e.matches[e.matches.length - 1];
    return n.route.id || ke(!1), n.route.id;
}
function R1() {
    var t;
    let e = C.useContext(hg),
        n = D1(ir.UseRouteError),
        i = mg(ir.UseRouteError);
    return e || ((t = n.errors) == null ? void 0 : t[i]);
}
function A1() {
    let { router: t } = N1(mc.UseNavigateStable),
        e = mg(ir.UseNavigateStable),
        n = C.useRef(!1);
    return (
        pg(() => {
            n.current = !0;
        }),
        C.useCallback(
            function (s, r) {
                r === void 0 && (r = {}),
                    n.current &&
                        (typeof s == 'number'
                            ? t.navigate(s)
                            : t.navigate(s, Go({ fromRouteId: e }, r)));
            },
            [t, e]
        )
    );
}
function I1(t) {
    return S1(t.context);
}
function tt(t) {
    ke(!1);
}
function F1(t) {
    let {
        basename: e = '/',
        children: n = null,
        location: i,
        navigationType: s = mn.Pop,
        navigator: r,
        static: o = !1,
    } = t;
    Ca() && ke(!1);
    let a = e.replace(/^\/*/, '/'),
        l = C.useMemo(
            () => ({ basename: a, navigator: r, static: o }),
            [a, r, o]
        );
    typeof i == 'string' && (i = Gi(i));
    let {
            pathname: c = '/',
            search: u = '',
            hash: d = '',
            state: h = null,
            key: p = 'default',
        } = i,
        v = C.useMemo(() => {
            let y = ug(c, a);
            return y == null
                ? null
                : {
                      location: {
                          pathname: y,
                          search: u,
                          hash: d,
                          state: h,
                          key: p,
                      },
                      navigationType: s,
                  };
        }, [a, c, u, d, h, p, s]);
    return v == null
        ? null
        : C.createElement(
              Sa.Provider,
              { value: l },
              C.createElement(ka.Provider, { children: n, value: v })
          );
}
function z1(t) {
    let { children: e, location: n } = t;
    return C1(gc(e), n);
}
var uh;
(function (t) {
    (t[(t.pending = 0)] = 'pending'),
        (t[(t.success = 1)] = 'success'),
        (t[(t.error = 2)] = 'error');
})(uh || (uh = {}));
new Promise(() => {});
function gc(t, e) {
    e === void 0 && (e = []);
    let n = [];
    return (
        C.Children.forEach(t, (i, s) => {
            if (!C.isValidElement(i)) return;
            let r = [...e, s];
            if (i.type === C.Fragment) {
                n.push.apply(n, gc(i.props.children, r));
                return;
            }
            i.type !== tt && ke(!1),
                !i.props.index || !i.props.children || ke(!1);
            let o = {
                id: i.props.id || r.join('-'),
                caseSensitive: i.props.caseSensitive,
                element: i.props.element,
                Component: i.props.Component,
                index: i.props.index,
                path: i.props.path,
                loader: i.props.loader,
                action: i.props.action,
                errorElement: i.props.errorElement,
                ErrorBoundary: i.props.ErrorBoundary,
                hasErrorBoundary:
                    i.props.ErrorBoundary != null ||
                    i.props.errorElement != null,
                shouldRevalidate: i.props.shouldRevalidate,
                handle: i.props.handle,
                lazy: i.props.lazy,
            };
            i.props.children && (o.children = gc(i.props.children, r)),
                n.push(o);
        }),
        n
    );
}
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function B1(t) {
    let { basename: e, children: n, window: i } = t,
        s = C.useRef();
    s.current == null && (s.current = Yv({ window: i, v5Compat: !0 }));
    let r = s.current,
        [o, a] = C.useState({ action: r.action, location: r.location });
    return (
        C.useLayoutEffect(() => r.listen(a), [r]),
        C.createElement(F1, {
            basename: e,
            children: n,
            location: o.location,
            navigationType: o.action,
            navigator: r,
        })
    );
}
var dh;
(function (t) {
    (t.UseScrollRestoration = 'useScrollRestoration'),
        (t.UseSubmitImpl = 'useSubmitImpl'),
        (t.UseFetcher = 'useFetcher');
})(dh || (dh = {}));
var hh;
(function (t) {
    (t.UseFetchers = 'useFetchers'),
        (t.UseScrollRestoration = 'useScrollRestoration');
})(hh || (hh = {}));
const V1 = '_sidebar_gyd1z_1',
    $1 = '_logo_gyd1z_25',
    fh = { sidebar: V1, logo: $1 },
    H1 = '_open_16wcn_47',
    W1 = '_plain_16wcn_58',
    U1 = '_plainhover_16wcn_64',
    ln = {
        'sidebar-item': '_sidebar-item_16wcn_1',
        'sidebar-title': '_sidebar-title_16wcn_26',
        'toggle-btn': '_toggle-btn_16wcn_41',
        open: H1,
        'sidebar-content': '_sidebar-content_16wcn_50',
        plain: W1,
        plainhover: U1,
    };
var gg = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
    },
    ph = Q.createContext && Q.createContext(gg),
    Tn =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Tn =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var s in e)
                                Object.prototype.hasOwnProperty.call(e, s) &&
                                    (t[s] = e[s]);
                        }
                        return t;
                    }),
                Tn.apply(this, arguments)
            );
        },
    Q1 =
        (globalThis && globalThis.__rest) ||
        function (t, e) {
            var n = {};
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) &&
                    e.indexOf(i) < 0 &&
                    (n[i] = t[i]);
            if (t != null && typeof Object.getOwnPropertySymbols == 'function')
                for (
                    var s = 0, i = Object.getOwnPropertySymbols(t);
                    s < i.length;
                    s++
                )
                    e.indexOf(i[s]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(t, i[s]) &&
                        (n[i[s]] = t[i[s]]);
            return n;
        };
function yg(t) {
    return (
        t &&
        t.map(function (e, n) {
            return Q.createElement(e.tag, Tn({ key: n }, e.attr), yg(e.child));
        })
    );
}
function on(t) {
    return function (e) {
        return Q.createElement(
            Y1,
            Tn({ attr: Tn({}, t.attr) }, e),
            yg(t.child)
        );
    };
}
function Y1(t) {
    var e = function (n) {
        var i = t.attr,
            s = t.size,
            r = t.title,
            o = Q1(t, ['attr', 'size', 'title']),
            a = s || n.size || '1em',
            l;
        return (
            n.className && (l = n.className),
            t.className && (l = (l ? l + ' ' : '') + t.className),
            Q.createElement(
                'svg',
                Tn(
                    {
                        stroke: 'currentColor',
                        fill: 'currentColor',
                        strokeWidth: '0',
                    },
                    n.attr,
                    i,
                    o,
                    {
                        className: l,
                        style: Tn(
                            Tn({ color: t.color || n.color }, n.style),
                            t.style
                        ),
                        height: a,
                        width: a,
                        xmlns: 'http://www.w3.org/2000/svg',
                    }
                ),
                r && Q.createElement('title', null, r),
                t.children
            )
        );
    };
    return ph !== void 0
        ? Q.createElement(ph.Consumer, null, function (n) {
              return e(n);
          })
        : e(gg);
}
function X1(t) {
    return on({
        tag: 'svg',
        attr: { viewBox: '0 0 1024 1024' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M8.2 275.4c0-8.6 3.4-17.401 10-24.001 13.2-13.2 34.8-13.2 48 0l451.8 451.8 445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z',
                },
            },
        ],
    })(t);
}
function vg({ item: t }) {
    const e = Ji(),
        [n, i] = C.useState(!1);
    return t.children
        ? f.jsxs('div', {
              className: `${ln['sidebar-item']} ${n ? ln.open : ''}`,
              children: [
                  f.jsxs('div', {
                      className: ln['sidebar-title'],
                      onClick: () => i(!n),
                      children: [
                          f.jsx('span', { children: t.title }),
                          f.jsx('button', {
                              className: ln['toggle-btn'],
                              children: f.jsx(X1, {}),
                          }),
                      ],
                  }),
                  f.jsx('div', {
                      className: ln['sidebar-content'],
                      children: t.children.map((s, r) =>
                          f.jsx(vg, { item: s }, r)
                      ),
                  }),
              ],
          })
        : f.jsxs('div', {
              onClick: () => e(t.path),
              className: `${ln['sidebar-item']} `,
              children: [
                  t.icon && f.jsx('i', { className: t.icon }),
                  f.jsx('div', {
                      className: `${
                          t.identity === 'menu' ? ln['sidebar-title'] : ln.plain
                      }`,
                      children: f.jsx('span', { children: t.title }),
                  }),
              ],
          });
}
const K1 = [
    { title: 'Overview', icon: 'bi-gear-fill', identity: 'menu', path: '/' },
    {
        title: 'Transactions',
        icon: 'bi-gear-fill',
        identity: 'menu',
        children: [
            { title: 'Home', path: '/transactions', identity: 'sub-menu' },
            { title: 'Statements', path: '/statements', identity: 'sub-menu' },
        ],
    },
    {
        title: 'Customers',
        icon: 'bi-person-fill',
        identity: 'menu',
        children: [
            { title: 'Home', path: '/customers', identity: 'sub-menu' },
            {
                title: 'Account',
                path: '/customers/account',
                identity: 'sub-menu',
            },
        ],
    },
    {
        title: 'Products',
        icon: 'bi-person-fill',
        identity: 'menu',
        children: [
            { title: 'Home', path: '/products', identity: 'sub-menu' },
            {
                title: 'Account',
                path: '/products/account',
                identity: 'sub-menu',
            },
        ],
    },
    {
        title: 'Invoice',
        icon: 'bi-view-list',
        identity: 'menu',
        children: [
            { title: 'Home', path: '/invoice', identity: 'sub-menu' },
            {
                title: 'Billing',
                path: '/invoice/billing',
                identity: 'sub-menu',
            },
        ],
    },
    {
        title: 'Account',
        icon: 'bi-info-circle-fill',
        identity: 'menu',
        children: [
            { title: 'Login', path: '/login', identity: 'sub-menu' },
            { title: 'Register', path: '/register', identity: 'sub-menu' },
            {
                title: 'Forgot Password',
                path: '/forgot-password',
                identity: 'sub-menu',
            },
            {
                title: 'Reset Password',
                path: '/reset-password',
                identity: 'sub-menu',
            },
        ],
    },
];
function q1(t) {
    return (
        !t.sidebarHidden &&
        f.jsxs('div', {
            className: fh.sidebar,
            children: [
                f.jsx('figure', {
                    className: fh.logo,
                    children: f.jsx('img', {
                        src: '/img/shree-krishna-dairy-trans.png',
                        alt: 'Shree Krishna Dairy Logo',
                    }),
                }),
                K1.map((e, n) => f.jsx(vg, { item: e }, n)),
            ],
        })
    );
}
const jt = C.createContext({
        jwtToken: localStorage.getItem('jwtToken'),
        setJwtToken: () => {},
    }),
    G1 = '_dashboard_12ocg_1',
    J1 = '_window_12ocg_5',
    Z1 = '_logo_12ocg_20',
    mh = {
        dashboard: G1,
        window: J1,
        'navigation-bar': '_navigation-bar_12ocg_11',
        'go-back': '_go-back_12ocg_17',
        logo: Z1,
    },
    ex = '_primary01_o0sa2_6',
    tx = '_primary02_o0sa2_13',
    nx = '_primary03_o0sa2_20',
    ix = '_stylish01_o0sa2_27',
    sx = '_loading_o0sa2_32',
    rx = '_stylish02_o0sa2_40',
    ox = '_stylish03_o0sa2_50',
    ax = '_stylish04_o0sa2_59',
    lx = '_stylish05_o0sa2_68',
    cx = '_action01_o0sa2_78',
    ux = '_wait_o0sa2_84',
    dx = '_stop_o0sa2_87',
    hx = '_go_o0sa2_90',
    fx = '_sharp01_o0sa2_97',
    px = '_stylish06_o0sa2_104',
    mx = {
        primary01: ex,
        primary02: tx,
        primary03: nx,
        stylish01: ix,
        loading: sx,
        stylish02: rx,
        stylish03: ox,
        stylish04: ax,
        'large-text': '_large-text_o0sa2_65',
        stylish05: lx,
        action01: cx,
        wait: ux,
        stop: dx,
        go: hx,
        sharp01: fx,
        stylish06: px,
    },
    me = (t) => {
        let e, n;
        return (
            t.className &&
                ((e = t.className.split(' ')),
                (n = e.map((i) => mx[i]).join(' '))),
            f.jsx('button', {
                className: n,
                onClick: t.onClick,
                disabled: t.disabled,
                children: t.children,
            })
        );
    },
    gx = '_details_1r5gj_10',
    yx = '_name_1r5gj_20',
    Fr = {
        'navigation-bar': '_navigation-bar_1r5gj_1',
        'go-back': '_go-back_1r5gj_7',
        details: gx,
        name: yx,
    },
    Et = 'http://127.0.0.1:3000',
    vx = (t) =>
        new Promise((e, n) => {
            try {
                let i = new XMLHttpRequest(),
                    s;
                (i.onreadystatechange = () => {
                    if (i.readyState == 4) {
                        let r = JSON.parse(i.responseText);
                        e(r);
                    }
                }),
                    (s = `${Et}/api/v1/admins/getMyDetails`),
                    i.open('GET', s),
                    i.setRequestHeader('Authorization', `Bearer ${t}`),
                    i.send();
            } catch (i) {
                console.log(i.message);
            }
        });
function xx(t) {
    const [e, n] = C.useState({}),
        { jwtToken: i, setJwtToken: s } = C.useContext(jt),
        r = Ji();
    C.useEffect(() => {
        async function a() {
            let l = await vx(i);
            n(Object.assign({}, l.data)), console.log(l);
        }
        a();
    }, []);
    const o = (a) => {
        s(null), localStorage.removeItem('jwtToken'), n({});
    };
    return f.jsxs('div', {
        className: Fr['navigation-bar'],
        children: [
            location.pathname != '/' &&
                f.jsx('div', {
                    className: Fr['go-back'],
                    children: f.jsx(me, {
                        className: 'stylish06',
                        onClick: () => r(-1),
                        children: 'Go back',
                    }),
                }),
            f.jsxs('div', {
                className: Fr.details,
                children: [
                    f.jsx('div', { className: Fr.name, children: e && e.name }),
                    f.jsx(me, {
                        className: 'stylish02',
                        onClick: o,
                        children: 'Logout',
                    }),
                ],
            }),
        ],
    });
}
const _x = (t) => {
        const [e, n] = C.useState(!1),
            i = Ji(),
            { jwtToken: s, setJwtToken: r } = C.useContext(jt);
        return (
            C.useEffect(() => {
                s || (console.log('jwtToken not available'), i('/login'));
            }, [s]),
            f.jsxs('div', {
                className: mh.dashboard,
                children: [
                    f.jsx(q1, { sidebarHidden: e, setSidebarHidden: n }),
                    f.jsxs('div', {
                        className: mh.window,
                        children: [f.jsx(xx, {}), f.jsx(I1, {})],
                    }),
                ],
            })
        );
    },
    bx = '_product_6rcxn_1',
    go = {
        'product-list': '_product-list_6rcxn_1',
        'sales-table': '_sales-table_6rcxn_18',
        product: bx,
    },
    wx = (t) =>
        f.jsxs('tr', {
            children: [
                f.jsx('td', { children: t.serialNumber }),
                f.jsx('td', { className: go.product, children: t.product }),
                f.jsx('td', { children: t.priceThen }),
                f.jsx('td', { children: t.quantity }),
                f.jsx('td', { children: t.totalPrice }),
            ],
        }),
    Sx = (t) => {
        let e = t.isExpanded;
        const n = t.items;
        return f.jsxs(Q.Fragment, {
            children: [
                !e &&
                    f.jsx('ul', {
                        className: go['product-list'],
                        children: n.map((i) =>
                            f.jsx(
                                'li',
                                {
                                    children: f.jsx('a', {
                                        className: go.product,
                                        children: i.productName,
                                    }),
                                },
                                i._id
                            )
                        ),
                    }),
                e &&
                    f.jsxs('table', {
                        className: go['sales-table'],
                        children: [
                            f.jsx('thead', {
                                children: f.jsxs('tr', {
                                    children: [
                                        f.jsx('th', { children: 'S.N' }),
                                        f.jsx('th', { children: 'Product' }),
                                        f.jsx('th', { children: 'Price' }),
                                        f.jsx('th', { children: 'Quantity' }),
                                        f.jsx('th', { children: 'Amount' }),
                                    ],
                                }),
                            }),
                            f.jsxs('tbody', {
                                children: [
                                    n.map((i, s) =>
                                        f.jsx(
                                            wx,
                                            {
                                                serialNumber: s + 1,
                                                product: i.productName,
                                                priceThen: i.priceThen,
                                                quantity: i.quantity,
                                                totalPrice:
                                                    i.priceThen * i.quantity,
                                            },
                                            i._id
                                        )
                                    ),
                                    f.jsxs('tr', {
                                        children: [
                                            f.jsx('td', {}),
                                            f.jsx('td', {}),
                                            f.jsx('td', { children: 'Total' }),
                                            f.jsx('td', { children: n.length }),
                                            f.jsx('td', {
                                                children: t.purchaseAmount,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
            ],
        });
    },
    kx = '_ticket_txv2m_1',
    Cx = '_payment_txv2m_12',
    Mx = '_time_txv2m_19',
    Px = '_period_txv2m_23',
    Ex = '_customer_txv2m_35',
    Tx = '_cost_txv2m_40',
    jx = '_paid_txv2m_44',
    Ox = '_unpaid_txv2m_47',
    et = {
        ticket: kx,
        payment: Cx,
        'date-and-time': '_date-and-time_txv2m_15',
        time: Mx,
        period: Px,
        'transaction-details': '_transaction-details_txv2m_27',
        customer: Ex,
        cost: Tx,
        paid: jx,
        unpaid: Ox,
    },
    Nx = (t) => {
        const [e, n] = C.useState(!1),
            i = () => {
                n(!e);
            };
        let s = t.customer[0],
            r = new Date(t.timeStamp).toLocaleTimeString(void 0, {
                hour: 'numeric',
                minute: 'numeric',
            }),
            o = new Date(t.timeStamp).toLocaleDateString(void 0, {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            });
        return f.jsxs('div', {
            className: `${et.ticket} ${t.type == 'payment' ? et.payment : ''}`,
            onClick: i,
            children: [
                f.jsxs('div', {
                    className: et['date-and-time'],
                    children: [
                        f.jsxs('div', {
                            className: et.time,
                            children: [
                                r.split(' ')[0],
                                ' ',
                                f.jsx('span', {
                                    className: et.period,
                                    children: r.slice(-2),
                                }),
                            ],
                        }),
                        f.jsx('div', { className: et.date, children: o }),
                    ],
                }),
                f.jsxs('div', {
                    className: et['transaction-details'],
                    children: [
                        f.jsx('div', {
                            className: et.customer,
                            children: s.name,
                        }),
                        f.jsx(Sx, {
                            items: t.items,
                            isExpanded: e,
                            purchaseAmount: t.purchaseAmount,
                        }),
                    ],
                }),
                !t.paidInFull &&
                    t.paidAmount != 0 &&
                    f.jsxs('div', {
                        className: `${et.cost} ${et.paid}`,
                        children: [
                            'Rs. ',
                            t.paidAmount,
                            !e && t.type == 'purchase' && ' |',
                        ],
                    }),
                e
                    ? null
                    : t.type == 'purchase' &&
                      f.jsxs('div', {
                          className: `${et.cost} ${
                              t.paidInFull ? et.paid : et.unpaid
                          }`,
                          children: ['Rs. ', t.purchaseAmount],
                      }),
            ],
        });
    },
    Ou = (t, e) =>
        new Promise(async function (n, i) {
            let s = new XMLHttpRequest();
            s.onreadystatechange = async () => {
                if (s.readyState === XMLHttpRequest.DONE) {
                    let a = await JSON.parse(s.responseText);
                    console.log('Fetching transactions....'), n(a.data);
                }
            };
            const r = JSON.stringify(t),
                o = btoa(r);
            s.open('GET', `${Et}/api/v1/transactions/?filter=${o}`),
                s.setRequestHeader('Authorization', `Bearer ${e}`),
                s.send();
        }),
    Nu = (t) => {
        const { filterObject: e } = t,
            { jwtToken: n } = C.useContext(jt),
            [i, s] = C.useState([]);
        let r = async () => {
            try {
                console.log('Fetching Transactions...');
                let o = await Ou(e, n);
                s(o);
            } catch (o) {
                console.log(o);
            }
        };
        return (
            C.useEffect(() => {
                r();
            }, [e]),
            f.jsx('div', {
                children: i.map((o, a, l) => {
                    let c = [o.customer];
                    return f.jsx(
                        Nx,
                        {
                            serialNumber: a,
                            items: o.items,
                            timeStamp: o.issuedTime,
                            customer: c,
                            purchaseAmount: o.purchaseAmount,
                            paidAmount: o.paid,
                            type: o.type,
                            paidInFull: o.paidInFull,
                        },
                        o._id
                    );
                }),
            })
        );
    };
function Dx(t) {
    return on({
        tag: 'svg',
        attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
        child: [
            {
                tag: 'path',
                attr: {
                    fillRule: 'evenodd',
                    d: 'M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z',
                },
            },
            {
                tag: 'path',
                attr: {
                    d: 'M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z',
                },
            },
        ],
    })(t);
}
function Lx(t) {
    return on({
        tag: 'svg',
        attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z',
                },
            },
            {
                tag: 'path',
                attr: {
                    fillRule: 'evenodd',
                    d: 'M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z',
                },
            },
            {
                tag: 'path',
                attr: {
                    d: 'M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z',
                },
            },
        ],
    })(t);
}
function gh(t) {
    return on({
        tag: 'svg',
        attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z',
                },
            },
            {
                tag: 'path',
                attr: {
                    fillRule: 'evenodd',
                    d: 'M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z',
                },
            },
            {
                tag: 'path',
                attr: {
                    d: 'M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z',
                },
            },
        ],
    })(t);
}
function yh(t) {
    return on({
        tag: 'svg',
        attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
        child: [
            {
                tag: 'path',
                attr: {
                    fillRule: 'evenodd',
                    d: 'M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z',
                },
            },
            {
                tag: 'path',
                attr: {
                    d: 'M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z',
                },
            },
        ],
    })(t);
}
function Rx(t) {
    return on({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M19 3L23 8H20V20H18V8H15L19 3ZM14 18V20H3V18H14ZM14 11V13H3V11H14ZM12 4V6H3V4H12Z',
                },
            },
        ],
    })(t);
}
function Ax(t) {
    return on({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z',
                },
            },
        ],
    })(t);
}
const Ix = '_sort_4h2o7_1',
    Fx = '_filter_4h2o7_16',
    zx = '_selected_4h2o7_32',
    K = {
        'sort-and-filter': '_sort-and-filter_4h2o7_1',
        'sort-filter-tab': '_sort-filter-tab_4h2o7_4',
        sort: Ix,
        filter: Fx,
        selected: zx,
        'filter-btn': '_filter-btn_4h2o7_35',
        'sort-item': '_sort-item_4h2o7_42',
        'is-sorted': '_is-sorted_4h2o7_56',
        'added-filters': '_added-filters_4h2o7_67',
        'filter-bar': '_filter-bar_4h2o7_70',
    },
    Bx = '_tag_fssss_1',
    Vx = '_primary01_fssss_17',
    $x = '_secondary01_fssss_20',
    Hx = '_green01_fssss_23',
    Wx = '_orange01_fssss_26',
    vh = {
        tag: Bx,
        'inherit-text': '_inherit-text_fssss_14',
        primary01: Vx,
        secondary01: $x,
        green01: Hx,
        orange01: Wx,
    },
    Ai = (t) => {
        let e, n;
        return (
            t.className
                ? ((e = t.className.split(' ')),
                  e.push('tag'),
                  (n = e.map((i) => vh[i]).join(' ')))
                : (n = vh.tag),
            f.jsx('div', {
                title: t.title,
                className: n,
                onClick: t.onClick,
                children: t.children,
            })
        );
    },
    Ux = {
        issuedTime: {
            isOpened: !1,
            from: '',
            to: Date.now(),
            isSorted: !0,
            order: -1,
        },
        products: { isOpened: !1, set: new Set(), isSorted: !1, order: void 0 },
        customers: {
            isOpened: !1,
            set: new Set(),
            isSorted: !1,
            order: void 0,
        },
        totalQuantity: {
            isOpened: !1,
            from: 1,
            to: 10,
            isSorted: !1,
            order: void 0,
        },
        itemsVariety: {
            isOpened: !1,
            from: 0,
            to: 10,
            isSorted: !1,
            order: void 0,
        },
    },
    Qx = (t, e) => {
        const n = Object.assign({}, t);
        if (e.type === 'sortBy')
            return (
                e.update === 'issuedTimeState'
                    ? (n.issuedTime.isSorted = e.state)
                    : e.update === 'issuedTime'
                    ? ((n.issuedTime.isSorted = !0),
                      (n.issuedTime.order = parseInt(e.order)))
                    : e.update === 'customersState'
                    ? (n.customers.isSorted = e.state)
                    : e.update === 'customers'
                    ? ((n.customers.isSorted = !0),
                      (n.customers.order = parseInt(e.order)))
                    : e.update === 'productsState'
                    ? (n.products.isSorted = e.state)
                    : e.update === 'products'
                    ? ((n.products.isSorted = !0),
                      (n.products.order = parseInt(e.order)))
                    : e.update === 'totalQuantityState'
                    ? (n.totalQuantity.isSorted = e.state)
                    : e.update === 'totalQuantity'
                    ? ((n.totalQuantity.isSorted = !0),
                      (n.totalQuantity.order = parseInt(e.order)))
                    : e.update === 'itemsVarietyState'
                    ? (n.itemsVariety.isSorted = e.state)
                    : e.update === 'itemsVariety' &&
                      ((n.itemsVariety.isSorted = !0),
                      (n.itemsVariety.order = parseInt(e.order))),
                n
            );
        if (e.type === 'issuedTime')
            return (
                (n.issuedTime.isOpened = !0),
                e.update === 'issuedTimeFrom'
                    ? (n.issuedTime.from = e.from)
                    : e.update === 'issuedTimeTo'
                    ? (n.issuedTime.to = e.to)
                    : e.update === 'remove' && (n.issuedTime.isOpened = !1),
                n
            );
        if (e.type === 'products')
            return (
                (n.products.isOpened = !0),
                e.update === 'productSet'
                    ? e.newProduct && n.products.set.add(e.newProduct)
                    : e.update === 'removeProduct'
                    ? n.products.set.delete(e.selected)
                    : e.update === 'remove' && (n.products.isOpened = !1),
                n
            );
        if (e.type === 'customers')
            return (
                (n.customers.isOpened = !0),
                e.update == 'customerSet'
                    ? e.newCustomer && n.customers.set.add(e.newCustomer)
                    : e.update === 'removeCustomer'
                    ? e.selected && n.customers.set.delete(e.selected)
                    : e.update === 'remove' && (n.customers.isOpened = !1),
                n
            );
        if (e.type === 'totalQuantity')
            return (
                (n.totalQuantity.isOpened = !0),
                e.update === 'totalQuantityRangeFrom' &&
                    (n.totalQuantity.from = e.from),
                e.update === 'totalQuantityRangeTo' &&
                    (n.totalQuantity.to = e.to),
                e.update === 'remove' && (n.totalQuantity.isOpened = !1),
                n
            );
        if (e.type === 'itemsVariety')
            return (
                (n.itemsVariety.isOpened = !0),
                e.update === 'itemsVarietyRangeFrom' &&
                    (n.itemsVariety.from = e.from),
                e.update === 'itemsVarietyRangeTo' &&
                    (n.itemsVariety.to = e.to),
                e.update === 'remove' && (n.itemsVariety.isOpened = !1),
                n
            );
    },
    xg = (t) => {
        const { setFilterObject: e, customerId: n } = t,
            [i, s] = C.useReducer(Qx, Ux),
            r = (d, h) => {
                d == 'issuedTime'
                    ? s({
                          type: 'sortBy',
                          update: 'issuedTime',
                          order: h.target.value,
                      })
                    : d === 'issuedTimeState'
                    ? s({
                          type: 'sortBy',
                          update: 'issuedTimeState',
                          state: h.target.checked,
                      })
                    : d == 'customers'
                    ? s({
                          type: 'sortBy',
                          update: 'customers',
                          order: h.target.value,
                      })
                    : d === 'customersState'
                    ? s({
                          type: 'sortBy',
                          update: 'customersState',
                          state: h.target.checked,
                      })
                    : d == 'products'
                    ? s({
                          type: 'sortBy',
                          update: 'products',
                          order: h.target.value,
                      })
                    : d === 'productsState'
                    ? s({
                          type: 'sortBy',
                          update: 'productsState',
                          state: h.target.checked,
                      })
                    : d == 'totalQuantity'
                    ? s({
                          type: 'sortBy',
                          update: 'totalQuantity',
                          order: h.target.value,
                      })
                    : d === 'totalQuantityState'
                    ? s({
                          type: 'sortBy',
                          update: 'totalQuantityState',
                          state: h.target.checked,
                      })
                    : d == 'itemsVariety'
                    ? s({
                          type: 'sortBy',
                          update: 'itemsVariety',
                          order: h.target.value,
                      })
                    : d === 'itemsVarietyState' &&
                      s({
                          type: 'sortBy',
                          update: 'itemsVarietyState',
                          state: h.target.checked,
                      });
            },
            o = (d, h) => {
                d == 'issuedTimeFrom'
                    ? s({
                          type: 'issuedTime',
                          update: 'issuedTimeFrom',
                          from: h.target.value,
                      })
                    : s(
                          d === 'issuedTimeTo'
                              ? {
                                    type: 'issuedTime',
                                    update: 'issuedTimeTo',
                                    to: h.target.value,
                                }
                              : d === 'remove'
                              ? { type: 'issuedTime', update: 'remove' }
                              : { type: 'issuedTime', isOpened: !0 }
                      );
            },
            a = (d, h) => {
                d == 'products'
                    ? s({
                          type: 'products',
                          update: 'productSet',
                          newProduct: h,
                      })
                    : s(
                          d === 'removeProduct'
                              ? {
                                    type: 'products',
                                    update: 'removeProduct',
                                    selected: h,
                                }
                              : d === 'remove'
                              ? { type: 'products', update: 'remove' }
                              : { type: 'products', isOpened: !0 }
                      );
            },
            l = (d, h) => {
                d == 'customers'
                    ? s({
                          type: 'customers',
                          update: 'customerSet',
                          newCustomer: h,
                      })
                    : s(
                          d === 'removeCustomer'
                              ? {
                                    type: 'customers',
                                    update: 'removeCustomer',
                                    selected: h,
                                }
                              : d === 'remove'
                              ? { type: 'customers', update: 'remove' }
                              : { type: 'customers' }
                      );
            },
            c = (d, h) => {
                d == 'totalQuantityRangeFrom'
                    ? s({
                          type: 'totalQuantity',
                          update: 'totalQuantityRangeFrom',
                          from: h.target.value,
                      })
                    : d == 'totalQuantityRangeTo'
                    ? s({
                          type: 'totalQuantity',
                          update: 'totalQuantityRangeTo',
                          to: h.target.value,
                      })
                    : s(
                          d === 'remove'
                              ? { type: 'totalQuantity', update: 'remove' }
                              : { type: 'totalQuantity' }
                      );
            },
            u = (d, h) => {
                s(
                    d === 'itemsVarietyRangeFrom'
                        ? {
                              type: 'itemsVariety',
                              update: 'itemsVarietyRangeFrom',
                              from: h.target.value,
                          }
                        : d === 'itemsVarietyRangeTo'
                        ? {
                              type: 'itemsVariety',
                              update: 'itemsVarietyRangeTo',
                              to: h.target.value,
                          }
                        : d === 'remove'
                        ? { type: 'itemsVariety', update: 'remove' }
                        : { type: 'itemsVariety' }
                );
            };
        return f.jsxs('div', {
            className: K['sort-and-filter'],
            children: [
                f.jsxs('div', {
                    className: K['sort-filter-tab'],
                    children: [
                        f.jsxs('div', {
                            className: 'wrapper',
                            children: [
                                f.jsx('p', { children: 'Sort:' }),
                                f.jsxs('div', {
                                    className: K.sort,
                                    children: [
                                        f.jsxs('div', {
                                            className: K['sort-item'],
                                            children: [
                                                f.jsx('input', {
                                                    type: 'checkbox',
                                                    checked:
                                                        i.issuedTime.isSorted,
                                                    id: 'issuedTimeSort',
                                                    onChange: (d) =>
                                                        r('issuedTimeState', d),
                                                }),
                                                f.jsx('label', {
                                                    htmlFor: 'issuedTimeSort',
                                                    className: i.issuedTime
                                                        .isSorted
                                                        ? K['is-sorted']
                                                        : '',
                                                    children: 'Date',
                                                }),
                                                f.jsxs('ul', {
                                                    children: [
                                                        f.jsxs('li', {
                                                            children: [
                                                                f.jsx('input', {
                                                                    type: 'radio',
                                                                    id: 'issuedTimeSortAsc',
                                                                    name: 'issuedTime',
                                                                    value: '1',
                                                                    onChange: (
                                                                        d
                                                                    ) =>
                                                                        r(
                                                                            'issuedTime',
                                                                            d
                                                                        ),
                                                                }),
                                                                f.jsx('label', {
                                                                    htmlFor:
                                                                        'issuedTimeSortAsc',
                                                                    className:
                                                                        i
                                                                            .issuedTime
                                                                            .isSorted &&
                                                                        i
                                                                            .issuedTime
                                                                            .order ==
                                                                            '1'
                                                                            ? K.selected
                                                                            : '',
                                                                    children:
                                                                        f.jsx(
                                                                            Ax,
                                                                            {}
                                                                        ),
                                                                }),
                                                            ],
                                                        }),
                                                        f.jsxs('li', {
                                                            children: [
                                                                f.jsx('input', {
                                                                    type: 'radio',
                                                                    id: 'issuedTimeSortDesc',
                                                                    value: '-1',
                                                                    name: 'issuedTime',
                                                                    onChange: (
                                                                        d
                                                                    ) =>
                                                                        r(
                                                                            'issuedTime',
                                                                            d
                                                                        ),
                                                                }),
                                                                f.jsx('label', {
                                                                    htmlFor:
                                                                        'issuedTimeSortDesc',
                                                                    className:
                                                                        i
                                                                            .issuedTime
                                                                            .isSorted &&
                                                                        i
                                                                            .issuedTime
                                                                            .order ==
                                                                            '-1'
                                                                            ? K.selected
                                                                            : '',
                                                                    children:
                                                                        f.jsx(
                                                                            Rx,
                                                                            {}
                                                                        ),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        !n &&
                                            f.jsxs('div', {
                                                className: K['sort-item'],
                                                children: [
                                                    f.jsx('input', {
                                                        type: 'checkbox',
                                                        id: 'customerSort',
                                                        checked:
                                                            i.customers
                                                                .isSorted,
                                                        onChange: (d) =>
                                                            r(
                                                                'customersState',
                                                                d
                                                            ),
                                                    }),
                                                    f.jsx('label', {
                                                        htmlFor: 'customerSort',
                                                        className: i.customers
                                                            .isSorted
                                                            ? K['is-sorted']
                                                            : '',
                                                        children: 'Customer',
                                                    }),
                                                    f.jsxs('ul', {
                                                        children: [
                                                            f.jsxs('li', {
                                                                children: [
                                                                    f.jsx(
                                                                        'input',
                                                                        {
                                                                            type: 'radio',
                                                                            id: 'customerSortAsc',
                                                                            name: 'customers',
                                                                            value: '1',
                                                                            onChange:
                                                                                (
                                                                                    d
                                                                                ) =>
                                                                                    r(
                                                                                        'customers',
                                                                                        d
                                                                                    ),
                                                                        }
                                                                    ),
                                                                    f.jsx(
                                                                        'label',
                                                                        {
                                                                            htmlFor:
                                                                                'customerSortAsc',
                                                                            className:
                                                                                i
                                                                                    .customers
                                                                                    .isSorted &&
                                                                                i
                                                                                    .customers
                                                                                    .order ==
                                                                                    '1'
                                                                                    ? K.selected
                                                                                    : '',
                                                                            children:
                                                                                f.jsx(
                                                                                    Dx,
                                                                                    {}
                                                                                ),
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                            f.jsxs('li', {
                                                                children: [
                                                                    f.jsx(
                                                                        'input',
                                                                        {
                                                                            type: 'radio',
                                                                            id: 'customerSortDesc',
                                                                            name: 'customers',
                                                                            value: '-1',
                                                                            onChange:
                                                                                (
                                                                                    d
                                                                                ) =>
                                                                                    r(
                                                                                        'customers',
                                                                                        d
                                                                                    ),
                                                                        }
                                                                    ),
                                                                    f.jsx(
                                                                        'label',
                                                                        {
                                                                            htmlFor:
                                                                                'customerSortDesc',
                                                                            className:
                                                                                i
                                                                                    .customers
                                                                                    .isSorted &&
                                                                                i
                                                                                    .customers
                                                                                    .order ==
                                                                                    '-1'
                                                                                    ? K.selected
                                                                                    : '',
                                                                            children:
                                                                                f.jsx(
                                                                                    Lx,
                                                                                    {}
                                                                                ),
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        f.jsxs('div', {
                                            className: K['sort-item'],
                                            children: [
                                                f.jsx('input', {
                                                    type: 'checkbox',
                                                    id: 'itemsVarietySort',
                                                    checked:
                                                        i.itemsVariety.isSorted,
                                                    onChange: (d) =>
                                                        r(
                                                            'itemsVarietyState',
                                                            d
                                                        ),
                                                }),
                                                f.jsx('label', {
                                                    htmlFor: 'itemsVarietySort',
                                                    className: i.itemsVariety
                                                        .isSorted
                                                        ? K['is-sorted']
                                                        : '',
                                                    children: 'Variety',
                                                }),
                                                f.jsxs('ul', {
                                                    children: [
                                                        f.jsxs('li', {
                                                            children: [
                                                                f.jsx('input', {
                                                                    type: 'radio',
                                                                    id: 'itemsVarietySortAsc',
                                                                    name: 'itemsVariety',
                                                                    value: '1',
                                                                    onChange: (
                                                                        d
                                                                    ) =>
                                                                        r(
                                                                            'itemsVariety',
                                                                            d
                                                                        ),
                                                                }),
                                                                f.jsx('label', {
                                                                    htmlFor:
                                                                        'itemsVarietySortAsc',
                                                                    className:
                                                                        i
                                                                            .itemsVariety
                                                                            .isSorted &&
                                                                        i
                                                                            .itemsVariety
                                                                            .order ==
                                                                            '1'
                                                                            ? K.selected
                                                                            : '',
                                                                    children:
                                                                        f.jsx(
                                                                            gh,
                                                                            {}
                                                                        ),
                                                                }),
                                                            ],
                                                        }),
                                                        f.jsxs('li', {
                                                            children: [
                                                                f.jsx('input', {
                                                                    type: 'radio',
                                                                    id: 'itemsVarietySortDesc',
                                                                    name: 'itemsVariety',
                                                                    value: '-1',
                                                                    onChange: (
                                                                        d
                                                                    ) =>
                                                                        r(
                                                                            'itemsVariety',
                                                                            d
                                                                        ),
                                                                }),
                                                                f.jsx('label', {
                                                                    htmlFor:
                                                                        'itemsVarietySortDesc',
                                                                    className:
                                                                        i
                                                                            .itemsVariety
                                                                            .isSorted &&
                                                                        i
                                                                            .itemsVariety
                                                                            .order ==
                                                                            '-1'
                                                                            ? K.selected
                                                                            : '',
                                                                    children:
                                                                        f.jsx(
                                                                            yh,
                                                                            {}
                                                                        ),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        f.jsxs('div', {
                                            className: K['sort-item'],
                                            children: [
                                                f.jsx('input', {
                                                    type: 'checkbox',
                                                    id: 'totalQuantitySort',
                                                    checked:
                                                        i.totalQuantity
                                                            .isSorted,
                                                    onChange: (d) =>
                                                        r(
                                                            'totalQuantityState',
                                                            d
                                                        ),
                                                }),
                                                f.jsx('label', {
                                                    htmlFor:
                                                        'totalQuantitySort',
                                                    className: i.totalQuantity
                                                        .isSorted
                                                        ? K['is-sorted']
                                                        : '',
                                                    children: 'Quantity',
                                                }),
                                                f.jsxs('ul', {
                                                    children: [
                                                        f.jsxs('li', {
                                                            children: [
                                                                f.jsx('input', {
                                                                    type: 'radio',
                                                                    id: 'totalQuantitySortAsc',
                                                                    name: 'totalQuantity',
                                                                    value: '1',
                                                                    onChange: (
                                                                        d
                                                                    ) =>
                                                                        r(
                                                                            'totalQuantity',
                                                                            d
                                                                        ),
                                                                }),
                                                                f.jsx('label', {
                                                                    htmlFor:
                                                                        'totalQuantitySortAsc',
                                                                    className:
                                                                        i
                                                                            .totalQuantity
                                                                            .isSorted &&
                                                                        i
                                                                            .totalQuantity
                                                                            .order ==
                                                                            '1'
                                                                            ? K.selected
                                                                            : '',
                                                                    children:
                                                                        f.jsx(
                                                                            gh,
                                                                            {}
                                                                        ),
                                                                }),
                                                            ],
                                                        }),
                                                        f.jsxs('li', {
                                                            children: [
                                                                f.jsx('input', {
                                                                    type: 'radio',
                                                                    id: 'totalQuantitySortDesc',
                                                                    name: 'totalQuantity',
                                                                    value: '-1',
                                                                    onChange: (
                                                                        d
                                                                    ) =>
                                                                        r(
                                                                            'totalQuantity',
                                                                            d
                                                                        ),
                                                                }),
                                                                f.jsx('label', {
                                                                    htmlFor:
                                                                        'totalQuantitySortDesc',
                                                                    className:
                                                                        i
                                                                            .totalQuantity
                                                                            .isSorted &&
                                                                        i
                                                                            .totalQuantity
                                                                            .order ==
                                                                            '-1'
                                                                            ? K.selected
                                                                            : '',
                                                                    children:
                                                                        f.jsx(
                                                                            yh,
                                                                            {}
                                                                        ),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        f.jsxs('div', {
                            className: K.filter,
                            children: [
                                'Filters:',
                                f.jsxs('ul', {
                                    children: [
                                        f.jsx('li', {
                                            children: f.jsx('button', {
                                                onClick: o,
                                                className: K['filter-btn'],
                                                children: 'Date',
                                            }),
                                        }),
                                        f.jsx('li', {
                                            children: f.jsx('button', {
                                                onClick: a,
                                                className: K['filter-btn'],
                                                children: 'Products',
                                            }),
                                        }),
                                        !n &&
                                            f.jsx('li', {
                                                children: f.jsx('button', {
                                                    onClick: l,
                                                    className: K['filter-btn'],
                                                    children: 'Customers',
                                                }),
                                            }),
                                        f.jsx('li', {
                                            children: f.jsx('button', {
                                                onClick: c,
                                                className: K['filter-btn'],
                                                children: 'Quantity',
                                            }),
                                        }),
                                        f.jsx('li', {
                                            children: f.jsx('button', {
                                                onClick: u,
                                                className: K['filter-btn'],
                                                children: 'Items Variety',
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                f.jsxs('div', {
                    className: K['added-filters'],
                    children: [
                        i.issuedTime.isOpened &&
                            f.jsxs('div', {
                                className: K['filter-bar'],
                                children: [
                                    f.jsx('span', { children: 'Date:' }),
                                    f.jsxs('div', {
                                        className: '',
                                        children: [
                                            f.jsx('label', {
                                                htmlFor: 'issuedTimeFrom',
                                                children: 'From:',
                                            }),
                                            f.jsx('input', {
                                                type: 'datetime-local',
                                                id: 'issuedTimeFrom',
                                                value: i.issuedTime.from,
                                                onChange: (d) =>
                                                    o('issuedTimeFrom', d),
                                            }),
                                        ],
                                    }),
                                    f.jsxs('div', {
                                        className: '',
                                        children: [
                                            f.jsx('label', {
                                                htmlFor: 'issuedTimeTo',
                                                children: 'To:',
                                            }),
                                            f.jsx('input', {
                                                type: 'datetime-local',
                                                id: 'issuedTimeTo',
                                                value: i.issuedTime.to,
                                                onChange: (d) =>
                                                    o('issuedTimeTo', d),
                                            }),
                                        ],
                                    }),
                                    f.jsx(me, {
                                        className: 'primary01',
                                        onClick: () => o('remove'),
                                        children: 'Remove',
                                    }),
                                ],
                            }),
                        i.products.isOpened &&
                            f.jsxs('div', {
                                className: K['filter-bar'],
                                children: [
                                    f.jsx('span', { children: 'Products:' }),
                                    f.jsx('div', {
                                        children: Array.from(
                                            i.products.set
                                        ).map((d, h) =>
                                            f.jsx(
                                                Ai,
                                                {
                                                    onClick: () =>
                                                        a('removeProduct', d),
                                                    children: d,
                                                },
                                                h
                                            )
                                        ),
                                    }),
                                    f.jsxs('div', {
                                        className: '',
                                        children: [
                                            f.jsx('label', {
                                                htmlFor: 'newProductFilter',
                                                children:
                                                    'Enter to add product:',
                                            }),
                                            f.jsx('input', {
                                                type: 'text',
                                                id: 'newProductFilter',
                                            }),
                                        ],
                                    }),
                                    f.jsx(me, {
                                        className: 'primary02',
                                        onClick: () =>
                                            a(
                                                'products',
                                                document
                                                    .getElementById(
                                                        'newProductFilter'
                                                    )
                                                    .value.toLocaleLowerCase()
                                            ),
                                        children: 'Add',
                                    }),
                                    f.jsx(me, {
                                        className: 'primary01',
                                        onClick: () => a('remove'),
                                        children: 'Remove',
                                    }),
                                ],
                            }),
                        i.customers.isOpened &&
                            f.jsxs('div', {
                                className: K['filter-bar'],
                                children: [
                                    f.jsx('span', { children: 'Customers:' }),
                                    f.jsx('div', {
                                        children: Array.from(
                                            i.customers.set
                                        ).map((d, h) =>
                                            f.jsx(
                                                Ai,
                                                {
                                                    onClick: () =>
                                                        l('removeCustomer', d),
                                                    children: d,
                                                },
                                                h
                                            )
                                        ),
                                    }),
                                    f.jsxs('div', {
                                        className: '',
                                        children: [
                                            f.jsx('label', {
                                                htmlFor: 'newCustomerFilter',
                                                children:
                                                    'Enter to add customer:',
                                            }),
                                            f.jsx('input', {
                                                type: 'text',
                                                id: 'newCustomerFilter',
                                            }),
                                        ],
                                    }),
                                    f.jsx(me, {
                                        className: 'primary02',
                                        onClick: () =>
                                            l(
                                                'customers',
                                                document
                                                    .getElementById(
                                                        'newCustomerFilter'
                                                    )
                                                    .value.toLocaleLowerCase()
                                            ),
                                        children: 'Add',
                                    }),
                                    f.jsx(me, {
                                        className: 'primary01',
                                        onClick: () => l('remove'),
                                        children: 'Remove',
                                    }),
                                ],
                            }),
                        i.totalQuantity.isOpened &&
                            f.jsxs('div', {
                                className: K['filter-bar'],
                                children: [
                                    f.jsx('span', { children: 'Quantity:' }),
                                    f.jsxs('div', {
                                        className: '',
                                        children: [
                                            f.jsx('label', {
                                                htmlFor: 'quantityRangeFrom',
                                                children: 'From:',
                                            }),
                                            f.jsx('input', {
                                                type: 'number',
                                                id: 'quantityRangeFrom',
                                                defaultValue: 1,
                                                onChange: (d) =>
                                                    c(
                                                        'totalQuantityRangeFrom',
                                                        d
                                                    ),
                                            }),
                                            f.jsx('label', {
                                                htmlFor: 'quantityRangeTo',
                                                children: 'To:',
                                            }),
                                            f.jsx('input', {
                                                type: 'number',
                                                id: 'quantityRangeTo',
                                                defaultValue: 10,
                                                onChange: (d) =>
                                                    c(
                                                        'totalQuantityRangeTo',
                                                        d
                                                    ),
                                            }),
                                        ],
                                    }),
                                    f.jsx(me, {
                                        className: 'primary01',
                                        onClick: () => c('remove'),
                                        children: 'Remove',
                                    }),
                                ],
                            }),
                        i.itemsVariety.isOpened &&
                            f.jsxs('div', {
                                className: K['filter-bar'],
                                children: [
                                    f.jsx('span', {
                                        children: 'Items Variety:',
                                    }),
                                    f.jsxs('div', {
                                        className: '',
                                        children: [
                                            f.jsx('label', {
                                                htmlFor:
                                                    'itemsVarietyRangeFrom',
                                                children: 'From:',
                                            }),
                                            f.jsx('input', {
                                                type: 'number',
                                                id: 'itemsVarietyRangeFrom',
                                                defaultValue: 1,
                                                onChange: (d) =>
                                                    u(
                                                        'itemsVarietyRangeFrom',
                                                        d
                                                    ),
                                            }),
                                            f.jsx('label', {
                                                htmlFor: 'itemsVarietyRangeTo',
                                                children: 'To:',
                                            }),
                                            f.jsx('input', {
                                                type: 'number',
                                                id: 'itemsVarietyRangeTo',
                                                defaultValue: 10,
                                                onChange: (d) =>
                                                    u('itemsVarietyRangeTo', d),
                                            }),
                                        ],
                                    }),
                                    f.jsx(me, {
                                        className: 'primary01',
                                        onClick: () => u('remove'),
                                        children: 'Remove',
                                    }),
                                ],
                            }),
                        f.jsx('div', {
                            className: K['submit-div'],
                            children: f.jsx(me, {
                                className: 'primary03',
                                onClick: () => Yx(i, e, n),
                                children: 'APPLY FILTER',
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    Yx = (t, e, n) => {
        let i = {};
        (i.sortBy = {
            issuedTime: void 0,
            customer: void 0,
            itemsVariety: void 0,
            totalQuantity: void 0,
        }),
            t.issuedTime.isOpened &&
                t.issuedTime.from &&
                ((i.issuedTime = {}),
                (i.issuedTime.from = new Date(t.issuedTime.from)),
                (i.issuedTime.to = new Date(t.issuedTime.to)),
                i.issuedTime.to == 'Invalid Date' &&
                    (i.issuedTime.to = new Date())),
            t.products.isOpened &&
                t.products.set.size != 0 &&
                (i.productArray = Array.from(t.products.set)),
            n
                ? (i.customerId = n)
                : t.customers.isOpened &&
                  t.customers.set.size != 0 &&
                  (i.customerArray = Array.from(t.customers.set)),
            t.totalQuantity.isOpened &&
                (i.totalQuantity = {
                    from: parseInt(t.totalQuantity.from),
                    to: parseInt(t.totalQuantity.to),
                }),
            t.itemsVariety.isOpened &&
                (i.itemsVariety = {
                    from: parseInt(t.itemsVariety.from),
                    to: parseInt(t.itemsVariety.to),
                }),
            t.issuedTime.isSorted && (i.sortBy.issuedTime = t.issuedTime.order),
            n ||
                (t.customers.isSorted &&
                    (i.sortBy.customer = t.customers.order)),
            t.totalQuantity.isSorted &&
                (i.sortBy.totalQuantity = t.totalQuantity.order),
            t.itemsVariety.isSorted &&
                (i.sortBy.itemsVariety = t.itemsVariety.order),
            e(i);
    },
    Xx = () => {
        const [t, e] = C.useState({ sortBy: { issuedTime: -1 } });
        return f.jsxs('div', {
            className: '',
            children: [
                f.jsx(xg, { setFilterObject: e }),
                f.jsx(Nu, { filterObject: t }),
            ],
        });
    };
const Kx = { 'picker-container': '_picker-container_zpq4t_1' },
    qx = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    Gx = (t) => {
        let { navigateMonth: e, dateState: n } = t;
        return f.jsxs('div', {
            className: Kx['picker-container'],
            children: [
                f.jsx(me, {
                    onClick: () => e('navigate', -1),
                    className: 'primary01',
                    children: 'Previous',
                }),
                f.jsx('select', {
                    className: 'form-select',
                    id: 'month',
                    name: 'month',
                    onChange: (i) => e('selectMonth', i),
                    value: n.month,
                    children: qx.map((i, s) =>
                        f.jsx(
                            'option',
                            { value: s, name: 'calenderMonth', children: i },
                            s
                        )
                    ),
                }),
                n.year,
                f.jsx(me, {
                    onClick: () => e('navigate', 1),
                    className: 'primary01',
                    children: 'Next',
                }),
            ],
        });
    },
    Jx = { 'card-container': '_card-container_nce1u_1' },
    Zx = '_card_1bj2e_1',
    e_ = '_name_1bj2e_43',
    t_ = '_tab_1bj2e_51',
    n_ = '_paid_1bj2e_61',
    i_ = '_purchase_1bj2e_64',
    s_ = '_due_1bj2e_67',
    r_ = '_phone_1bj2e_70',
    o_ = '_address_1bj2e_74',
    xt = {
        card: Zx,
        'card-left': '_card-left_1bj2e_12',
        'card-left-picture': '_card-left-picture_1bj2e_20',
        'card-right': '_card-right_1bj2e_37',
        name: e_,
        tab: t_,
        paid: n_,
        purchase: i_,
        due: s_,
        phone: r_,
        address: o_,
    },
    a_ = ({ customer: t }) => {
        const e = Ji();
        return f.jsxs('div', {
            className: `${xt.card}`,
            onClick: () => e(`${t._id}`, { relative: 'path' }),
            children: [
                f.jsx('div', {
                    className: `${xt['card-left']}`,
                    children: f.jsx('div', {
                        className: `${xt['card-left-picture']}`,
                        children: f.jsx('figure', {
                            children: f.jsx('img', {
                                src: '/img/profile-picture.jpg',
                                alt: 'Customer',
                            }),
                        }),
                    }),
                }),
                f.jsxs('div', {
                    className: `${xt['card-right']}`,
                    children: [
                        f.jsx('div', { className: xt.name, children: t.name }),
                        f.jsxs('div', {
                            className: xt.tab,
                            children: [
                                f.jsxs('div', {
                                    className: xt.purchase,
                                    children: [
                                        f.jsx('p', { children: 'Purchase' }),
                                        t.tab.purchase,
                                    ],
                                }),
                                f.jsxs('div', {
                                    className: xt.paid,
                                    children: [
                                        f.jsx('p', { children: 'Paid' }),
                                        t.tab.paid,
                                    ],
                                }),
                                f.jsxs('div', {
                                    className: xt.due,
                                    children: [
                                        f.jsx('p', { children: 'Due' }),
                                        t.tab.due,
                                    ],
                                }),
                            ],
                        }),
                        f.jsx('div', {
                            className: xt.phone,
                            children: t.phone.map((n) =>
                                f.jsx(Ai, { children: n }, n)
                            ),
                        }),
                        f.jsx('div', {
                            className: xt.address,
                            children: t.address,
                        }),
                    ],
                }),
            ],
        });
    },
    Du = (t, e) =>
        new Promise((n, i) => {
            try {
                let s = new XMLHttpRequest(),
                    r;
                (s.onreadystatechange = () => {
                    if (s.readyState == 4) {
                        let o = JSON.parse(s.responseText);
                        n(o.data);
                    }
                }),
                    t
                        ? (r = `${Et}/api/v1/customers/${t.toString()}`)
                        : (r = `${Et}/api/v1/customers/`),
                    s.open('GET', r),
                    s.setRequestHeader('Authorization', `Bearer ${e}`),
                    s.send();
            } catch (s) {
                console.log(s.message);
            }
        }),
    l_ = () => {
        const [t, e] = C.useState([]),
            { jwtToken: n } = C.useContext(jt);
        return (
            C.useEffect(() => {
                (async function () {
                    let s = await Du(null, n);
                    s && e(s);
                })();
            }, []),
            f.jsx(f.Fragment, {
                children: f.jsx('div', {
                    className: `${Jx['card-container']}`,
                    children: t.map((i, s, r) =>
                        f.jsx(a_, { customer: i }, i._id)
                    ),
                }),
            })
        );
    },
    xh = { 'statement-container': '_statement-container_hnx4v_1' },
    c_ = (t) => {
        let {
            numberOfCustomers: e,
            totalAmount: n,
            numberOfTransactions: i,
            monthlyTransactions: s,
        } = t;
        const [r, o] = C.useState([{}]);
        C.useEffect(() => {
            if (s) {
                let c = [{}];
                s.map((u, d) => {
                    (c[d] = {}),
                        d != 0
                            ? ((c[d].amount =
                                  c[d - 1].amount + u.purchaseAmount),
                              (c[d].paid =
                                  c[d - 1].paid +
                                  ((u == null ? void 0 : u.paid) ?? 0)),
                              (c[d].balance = c[d].amount - c[d].paid))
                            : ((c[0].amount = u.purchaseAmount),
                              (c[0].paid = (u == null ? void 0 : u.paid) ?? 0),
                              (c[0].balance = c[0].amount - c[0].paid));
                }),
                    o(c);
            }
        }, [s]);
        let a = 0,
            l = n - a;
        return f.jsxs('div', {
            className: xh['statement-container'],
            children: [
                f.jsx('p', { children: 'Monthly Overview' }),
                f.jsxs('table', {
                    className: xh.summary,
                    children: [
                        f.jsx('thead', {
                            children: f.jsxs('tr', {
                                children: [
                                    f.jsx('th', { children: 'Transactions' }),
                                    f.jsx('th', { children: 'Customers ' }),
                                    f.jsx('th', { children: 'Paid' }),
                                    f.jsx('th', { children: 'Amount' }),
                                    f.jsx('th', { children: 'Balance' }),
                                ],
                            }),
                        }),
                        f.jsx('tbody', {
                            children: f.jsxs('tr', {
                                children: [
                                    f.jsx('th', { children: i }),
                                    f.jsxs('th', {
                                        children: [
                                            e.registered,
                                            '/',
                                            e.unregistered,
                                        ],
                                    }),
                                    f.jsx('th', { children: a }),
                                    f.jsx('th', { children: n }),
                                    f.jsx('th', { children: l }),
                                ],
                            }),
                        }),
                    ],
                }),
                f.jsx('p', { children: 'Balance sheet' }),
                f.jsxs('table', {
                    children: [
                        f.jsx('thead', {
                            children: f.jsxs('tr', {
                                children: [
                                    f.jsx('th', { children: 'Date' }),
                                    f.jsx('th', { children: 'Customer' }),
                                    f.jsx('th', { children: 'Amount' }),
                                    f.jsx('th', { children: 'Paid' }),
                                    f.jsx('th', { children: 'Balance' }),
                                    f.jsx('th', { children: 'C. Amount' }),
                                    f.jsx('th', { children: 'C. Paid' }),
                                    f.jsx('th', { children: 'C. Balance' }),
                                ],
                            }),
                        }),
                        f.jsx('tbody', {
                            children:
                                s &&
                                s.map((c, u) => {
                                    var d, h, p;
                                    return f.jsxs(
                                        'tr',
                                        {
                                            children: [
                                                f.jsx('td', {
                                                    children: new Date(
                                                        c.issuedTime
                                                    ).toDateString(),
                                                }),
                                                f.jsx('td', {
                                                    children: c.customer.name,
                                                }),
                                                f.jsx('td', {
                                                    children: c.purchaseAmount,
                                                }),
                                                f.jsx('td', {
                                                    children:
                                                        (c == null
                                                            ? void 0
                                                            : c.paid) ?? 0,
                                                }),
                                                f.jsx('td', {
                                                    children:
                                                        c.purchaseAmount -
                                                        ((c == null
                                                            ? void 0
                                                            : c.paid) ?? 0),
                                                }),
                                                f.jsx('td', {
                                                    children:
                                                        (d = r[u]) == null
                                                            ? void 0
                                                            : d.amount,
                                                }),
                                                f.jsx('td', {
                                                    children:
                                                        (h = r[u]) == null
                                                            ? void 0
                                                            : h.paid,
                                                }),
                                                f.jsx('td', {
                                                    children:
                                                        (p = r[u]) == null
                                                            ? void 0
                                                            : p.balance,
                                                }),
                                            ],
                                        },
                                        c._id
                                    );
                                }),
                        }),
                    ],
                }),
            ],
        });
    },
    u_ = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    d_ = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
let h_ = {
    set dateObject(t) {
        (this.dateX = new Date(t)),
            (this.date = this.dateX.getDate()),
            (this.month = this.dateX.getMonth()),
            (this.day = this.dateX.getDay()),
            (this.year = this.dateX.getFullYear()),
            (this.numberOfDays = new Date(
                this.year,
                this.month + 1,
                0
            ).getDate()),
            (this.paddings = new Date(this.year, this.month, 1).getDay());
    },
    get dateObject() {
        return this.dateX;
    },
    get weekday() {
        return u_[this.day];
    },
    get fullMonth() {
        return d_[this.month];
    },
};
const f_ = (t, e) => {
        let n = Object.create(t, Object.getOwnPropertyDescriptors(t));
        switch (e.type) {
            case 'initialize': {
                (n.dateObject = new Date()), console.log('first step');
                break;
            }
            case 'navigate': {
                e.step == -1
                    ? (console.log('navigate step'),
                      (n.dateObject = new Date(t.year, t.month - 1, 1)))
                    : e.step == 1 &&
                      (console.log('navigate step'),
                      (n.dateObject = new Date(t.year, t.month + 1, 1)));
                break;
            }
            case 'selectMonth': {
                console.log('month select'),
                    (n.dateObject = new Date(t.year, e.selected, 1));
                break;
            }
        }
        return n;
    },
    p_ = () => {
        const [t, e] = C.useReducer(f_, h_),
            { jwtToken: n } = C.useContext(jt),
            [i, s] = C.useState(),
            [r, o] = C.useState(),
            [a, l] = C.useState(),
            [c, u] = C.useState(),
            [d, h] = C.useState({});
        C.useEffect(() => {
            e({ type: 'initialize' });
        }, []),
            C.useEffect(() => {
                (async () => {
                    try {
                        if ((console.log('????????????'), t)) {
                            let y = {};
                            (y.issuedTime = {}),
                                (y.issuedTime.from = new Date(
                                    t.year,
                                    t.month,
                                    1
                                )),
                                (y.issuedTime.to = new Date(
                                    t.year,
                                    t.month,
                                    t.numberOfDays
                                )),
                                s(y);
                            let _ = await Ou(y, n);
                            if (_) {
                                o(_), l(_.length);
                                let m = _.reduce(
                                        (b, w, k) => b + w.purchaseAmount,
                                        0
                                    ),
                                    g = 0,
                                    x = _.reduce((b, w, k) => {
                                        var S;
                                        return (
                                            (S = w.customer) != null &&
                                            S.customerId
                                                ? b.add(w.customer.customerId)
                                                : g++,
                                            b
                                        );
                                    }, new Set());
                                u(m),
                                    h({ registered: x.size, unregistered: g });
                            } else
                                throw new Error('Transactions not received.');
                        } else console.log('DATE STATE NOT DEFINED💥💥🤯');
                    } catch (y) {
                        console.log(y.message);
                    }
                })();
            }, [t]);
        const p = (v, y) => {
            switch ((console.log('navigate'), v)) {
                case 'navigate': {
                    e({ type: 'navigate', step: y });
                    break;
                }
                case 'selectMonth': {
                    e({ type: 'selectMonth', selected: y.target.value });
                    break;
                }
            }
        };
        return f.jsxs(f.Fragment, {
            children: [
                f.jsx('h2', { children: 'Monthly Statements' }),
                f.jsx(Gx, { navigateMonth: p, dateState: t }),
                f.jsx(c_, {
                    numberOfTransactions: a,
                    totalAmount: c,
                    numberOfCustomers: d,
                    monthlyTransactions: r,
                }),
            ],
        });
    },
    m_ = () => f.jsx('div', { children: 'InventoryPanel' });
function g_(t) {
    return on({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
            { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' } },
            {
                tag: 'path',
                attr: {
                    d: 'M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z',
                },
            },
        ],
    })(t);
}
const y_ = '_cart_11wec_31',
    v_ = '_status_11wec_102',
    x_ = '_success_11wec_109',
    __ = '_failure_11wec_112',
    b_ = '_error_11wec_115',
    $ = {
        'form-container': '_form-container_11wec_1',
        'form-group': '_form-group_11wec_7',
        cart: y_,
        'cart-item': '_cart-item_11wec_34',
        'cart-item--head': '_cart-item--head_11wec_45',
        'cart-item-piece': '_cart-item-piece_11wec_49',
        'cart-item-piece--head': '_cart-item-piece--head_11wec_53',
        'cart-item-piece--id': '_cart-item-piece--id_11wec_58',
        'cart-item-piece--name': '_cart-item-piece--name_11wec_62',
        'cart-item-piece--price': '_cart-item-piece--price_11wec_66',
        'cart-item-piece--quantity': '_cart-item-piece--quantity_11wec_70',
        'cart-item-piece-label': '_cart-item-piece-label_11wec_74',
        'cart-item-piece-value': '_cart-item-piece-value_11wec_77',
        'cart-item-piece-delete': '_cart-item-piece-delete_11wec_82',
        'form-footer': '_form-footer_11wec_96',
        status: v_,
        success: x_,
        failure: __,
        error: b_,
    },
    yc = (t, e) =>
        new Promise((n, i) => {
            try {
                let s = new XMLHttpRequest(),
                    r;
                (s.onreadystatechange = () => {
                    if (s.readyState == 4) {
                        let o = JSON.parse(s.responseText);
                        n(o);
                    }
                }),
                    t
                        ? (r = `${Et}/api/v1/products/${t.toString()}`)
                        : (r = `${Et}/api/v1/products/`),
                    s.open('GET', r),
                    s.setRequestHeader('Authorization', `Bearer ${e}`),
                    s.send();
            } catch (s) {
                console.log(s.message);
            }
        });
async function w_(t, e) {
    return new Promise(async (n, i) => {
        try {
            let s = new XMLHttpRequest(),
                r = `${Et}/api/v1/transactions/`;
            (s.onreadystatechange = () => {
                if (s.readyState == 4) {
                    console.log('Request COmpleted');
                    let a = JSON.parse(s.responseText);
                    n(a);
                }
                s.readyState == 0 && console.log('Open not called'),
                    s.readyState == 2 && console.log('Headers received'),
                    s.readyState == 3 && console.log('Loading ResponseText');
            }),
                s.open('POST', r, !0),
                s.setRequestHeader('Content-Type', 'application/json'),
                s.setRequestHeader('Authorization', `Bearer ${e}`),
                console.log(JSON.stringify(t));
            let o = JSON.stringify(t);
            s.send(o);
        } catch (s) {
            console.log(s);
        }
    });
}
var _g = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (t) {
    (function () {
        var e = {}.hasOwnProperty;
        function n() {
            for (var r = '', o = 0; o < arguments.length; o++) {
                var a = arguments[o];
                a && (r = s(r, i(a)));
            }
            return r;
        }
        function i(r) {
            if (typeof r == 'string' || typeof r == 'number') return r;
            if (typeof r != 'object') return '';
            if (Array.isArray(r)) return n.apply(null, r);
            if (
                r.toString !== Object.prototype.toString &&
                !r.toString.toString().includes('[native code]')
            )
                return r.toString();
            var o = '';
            for (var a in r) e.call(r, a) && r[a] && (o = s(o, a));
            return o;
        }
        function s(r, o) {
            return o ? (r ? r + ' ' + o : r + o) : r;
        }
        t.exports
            ? ((n.default = n), (t.exports = n))
            : (window.classNames = n);
    })();
})(_g);
var S_ = _g.exports;
const k_ = Yf(S_),
    C_ = (t) => {
        const { jwtToken: e } = C.useContext(jt),
            [n, i] = C.useState(''),
            { customers: s, setCustomers: r, products: o, setProducts: a } = t,
            [l, c] = C.useState(1),
            [u, d] = C.useState([]),
            [h, p] = C.useState(null);
        C.useEffect(() => {
            (async () => {
                let g = await Du(null, e),
                    x = await yc(null, e);
                r(g), a(x.data);
            })();
        }, []);
        const v = function (m) {
                m.preventDefault(), p(null);
                const g = document.getElementById('products'),
                    x = g.options[g.selectedIndex].value;
                let b = o.find((S) => S._id == x);
                b.quantity = l;
                let w = [...u],
                    k = u.findIndex((S) => S._id == x);
                k >= 0
                    ? (w[k].quantity = Number(w[k].quantity) + Number(l))
                    : w.push({ ...b }),
                    d(w);
            },
            y = (m) => {
                m.preventDefault();
                let g = m.target.parentNode,
                    x = [...u],
                    b = x.findIndex((w) => w._id == g.dataset._id);
                x.splice(b, 1), d(x);
            },
            _ = async () => {
                i('sending'), p(null);
                let m = {};
                const g = document.getElementById('customers'),
                    x = g.options[g.selectedIndex].value;
                m.customer = { customerId: x };
                let b = u.map((k) => ({
                    productId: k._id,
                    quantity: k.quantity,
                }));
                m.items = b;
                let w = await w_(m, e);
                if ((console.log(w), w.status == 'success')) {
                    i('success'), p(null);
                    let k = await yc();
                    a(k),
                        t.setFilterObject({
                            sortBy: { issuedTime: -1 },
                            limit: 5,
                        });
                } else i('failure'), p(w.message);
            };
        return f.jsx(f.Fragment, {
            children: f.jsxs('div', {
                className: $['form-container'],
                children: [
                    'Register new transaction',
                    f.jsxs('form', {
                        action: '',
                        children: [
                            f.jsxs('div', {
                                className: $['form-group'],
                                children: [
                                    f.jsx('label', {
                                        htmlFor: 'customers',
                                        children: 'Customer :',
                                    }),
                                    f.jsx('select', {
                                        name: '',
                                        id: 'customers',
                                        children: s.map((m) =>
                                            f.jsx(
                                                'option',
                                                {
                                                    value: m._id,
                                                    children: m.name,
                                                },
                                                m._id
                                            )
                                        ),
                                    }),
                                ],
                            }),
                            f.jsxs('div', {
                                className: $['form-group'],
                                children: [
                                    f.jsx('label', {
                                        htmlFor: '',
                                        children: 'Items:',
                                    }),
                                    f.jsx('select', {
                                        name: 'products',
                                        id: 'products',
                                        children: o.map((m) =>
                                            f.jsx(
                                                'option',
                                                {
                                                    value: m._id,
                                                    children: m.name,
                                                },
                                                m._id
                                            )
                                        ),
                                    }),
                                    f.jsx('input', {
                                        type: 'number',
                                        value: l,
                                        onChange: (m) => c(m.target.value),
                                        min: 1,
                                    }),
                                    f.jsx(me, {
                                        className: 'stylish03',
                                        onClick: v,
                                        children: 'add',
                                    }),
                                ],
                            }),
                            f.jsxs('div', {
                                className: $.cart,
                                children: [
                                    u.length > 0
                                        ? f.jsxs('div', {
                                              className: `${$['cart-item']} ${$['cart-item--head']}`,
                                              children: [
                                                  f.jsx('div', {
                                                      className: `${$['cart-item-piece--head']} ${$['cart-item-piece']} ${$['cart-item-piece--id']}`,
                                                      children: f.jsx('span', {
                                                          className:
                                                              $[
                                                                  'cart-item-piece-label'
                                                              ],
                                                          children: 'PID',
                                                      }),
                                                  }),
                                                  f.jsx('div', {
                                                      className: `${$['cart-item-piece--head']} ${$['cart-item-piece']} ${$['cart-item-piece--name']}`,
                                                      children: f.jsx('span', {
                                                          className:
                                                              $[
                                                                  'cart-item-piece-label'
                                                              ],
                                                          children: 'Item',
                                                      }),
                                                  }),
                                                  f.jsx('div', {
                                                      className: `${$['cart-item-piece--head']} ${$['cart-item-piece']} ${$['cart-item-piece--price']}`,
                                                      children: f.jsx('span', {
                                                          className:
                                                              $[
                                                                  'cart-item-piece-label'
                                                              ],
                                                          children: 'Price',
                                                      }),
                                                  }),
                                                  f.jsx('div', {
                                                      className: `${$['cart-item-piece--head']} ${$['cart-item-piece']} ${$['cart-item-piece--quantity']}`,
                                                      children: f.jsx('span', {
                                                          className:
                                                              $[
                                                                  'cart-item-piece-label'
                                                              ],
                                                          children: 'Quantity',
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : '',
                                    u.map((m) =>
                                        f.jsxs(
                                            'div',
                                            {
                                                className: $['cart-item'],
                                                'data-_id': m._id,
                                                children: [
                                                    f.jsx('div', {
                                                        className: `${$['cart-item-piece']} ${$['cart-item-piece--id']}`,
                                                        children: f.jsx(
                                                            'span',
                                                            {
                                                                className:
                                                                    $[
                                                                        'cart-item-piece-value'
                                                                    ],
                                                                children: m._id,
                                                            }
                                                        ),
                                                    }),
                                                    f.jsx('div', {
                                                        className: `${$['cart-item-piece']} ${$['cart-item-piece--name']}`,
                                                        children: f.jsx(
                                                            'span',
                                                            {
                                                                className:
                                                                    $[
                                                                        'cart-item-piece-value'
                                                                    ],
                                                                children:
                                                                    m.name,
                                                            }
                                                        ),
                                                    }),
                                                    f.jsx('div', {
                                                        className: `${$['cart-item-piece']} ${$['cart-item-piece--price']}`,
                                                        children: f.jsx(
                                                            'span',
                                                            {
                                                                className:
                                                                    $[
                                                                        'cart-item-piece-value'
                                                                    ],
                                                                children:
                                                                    m.price,
                                                            }
                                                        ),
                                                    }),
                                                    f.jsxs('div', {
                                                        className: `${$['cart-item-piece']} ${$['cart-item-piece--quantity']}`,
                                                        children: [
                                                            f.jsx('span', {
                                                                className:
                                                                    $[
                                                                        'cart-item-piece-value'
                                                                    ],
                                                                children:
                                                                    m.quantity,
                                                            }),
                                                            f.jsx('span', {
                                                                className:
                                                                    $[
                                                                        'cart-item-piece-delete'
                                                                    ],
                                                                onClick: (
                                                                    g
                                                                ) => {
                                                                    y(g);
                                                                },
                                                                children: f.jsx(
                                                                    g_,
                                                                    {}
                                                                ),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            },
                                            m._id
                                        )
                                    ),
                                ],
                            }),
                        ],
                    }),
                    f.jsxs('div', {
                        className: $['form-footer'],
                        children: [
                            f.jsx(me, {
                                className: k_('stylish01', {
                                    loading: n == 'sending',
                                }),
                                onClick: _,
                                children: 'ADD TRANSACTION',
                            }),
                            n != ''
                                ? f.jsx('span', {
                                      className: `${$.status} ${$[n]}`,
                                      children:
                                          n == 'success'
                                              ? 'SUCCESS'
                                              : n == 'sending'
                                              ? 'CREATING'
                                              : n == 'failure'
                                              ? 'FAILED'
                                              : '',
                                  })
                                : null,
                            h &&
                                f.jsx('span', {
                                    className: `${$.error}`,
                                    children: h,
                                }),
                        ],
                    }),
                ],
            }),
        });
    },
    M_ = { 'ticket-table-container': '_ticket-table-container_1j26s_1' };
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function yr(t) {
    return (t + 0.5) | 0;
}
const gn = (t, e, n) => Math.max(Math.min(t, n), e);
function gs(t) {
    return gn(yr(t * 2.55), 0, 255);
}
function jn(t) {
    return gn(yr(t * 255), 0, 255);
}
function Qt(t) {
    return gn(yr(t / 2.55) / 100, 0, 1);
}
function _h(t) {
    return gn(yr(t * 100), 0, 100);
}
const ut = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
    },
    vc = [...'0123456789ABCDEF'],
    P_ = (t) => vc[t & 15],
    E_ = (t) => vc[(t & 240) >> 4] + vc[t & 15],
    zr = (t) => (t & 240) >> 4 === (t & 15),
    T_ = (t) => zr(t.r) && zr(t.g) && zr(t.b) && zr(t.a);
function j_(t) {
    var e = t.length,
        n;
    return (
        t[0] === '#' &&
            (e === 4 || e === 5
                ? (n = {
                      r: 255 & (ut[t[1]] * 17),
                      g: 255 & (ut[t[2]] * 17),
                      b: 255 & (ut[t[3]] * 17),
                      a: e === 5 ? ut[t[4]] * 17 : 255,
                  })
                : (e === 7 || e === 9) &&
                  (n = {
                      r: (ut[t[1]] << 4) | ut[t[2]],
                      g: (ut[t[3]] << 4) | ut[t[4]],
                      b: (ut[t[5]] << 4) | ut[t[6]],
                      a: e === 9 ? (ut[t[7]] << 4) | ut[t[8]] : 255,
                  })),
        n
    );
}
const O_ = (t, e) => (t < 255 ? e(t) : '');
function N_(t) {
    var e = T_(t) ? P_ : E_;
    return t ? '#' + e(t.r) + e(t.g) + e(t.b) + O_(t.a, e) : void 0;
}
const D_ =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function bg(t, e, n) {
    const i = e * Math.min(n, 1 - n),
        s = (r, o = (r + t / 30) % 12) =>
            n - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
    return [s(0), s(8), s(4)];
}
function L_(t, e, n) {
    const i = (s, r = (s + t / 60) % 6) =>
        n - n * e * Math.max(Math.min(r, 4 - r, 1), 0);
    return [i(5), i(3), i(1)];
}
function R_(t, e, n) {
    const i = bg(t, 1, 0.5);
    let s;
    for (
        e + n > 1 && ((s = 1 / (e + n)), (e *= s), (n *= s)), s = 0;
        s < 3;
        s++
    )
        (i[s] *= 1 - e - n), (i[s] += e);
    return i;
}
function A_(t, e, n, i, s) {
    return t === s
        ? (e - n) / i + (e < n ? 6 : 0)
        : e === s
        ? (n - t) / i + 2
        : (t - e) / i + 4;
}
function Lu(t) {
    const n = t.r / 255,
        i = t.g / 255,
        s = t.b / 255,
        r = Math.max(n, i, s),
        o = Math.min(n, i, s),
        a = (r + o) / 2;
    let l, c, u;
    return (
        r !== o &&
            ((u = r - o),
            (c = a > 0.5 ? u / (2 - r - o) : u / (r + o)),
            (l = A_(n, i, s, u, r)),
            (l = l * 60 + 0.5)),
        [l | 0, c || 0, a]
    );
}
function Ru(t, e, n, i) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(jn);
}
function Au(t, e, n) {
    return Ru(bg, t, e, n);
}
function I_(t, e, n) {
    return Ru(R_, t, e, n);
}
function F_(t, e, n) {
    return Ru(L_, t, e, n);
}
function wg(t) {
    return ((t % 360) + 360) % 360;
}
function z_(t) {
    const e = D_.exec(t);
    let n = 255,
        i;
    if (!e) return;
    e[5] !== i && (n = e[6] ? gs(+e[5]) : jn(+e[5]));
    const s = wg(+e[2]),
        r = +e[3] / 100,
        o = +e[4] / 100;
    return (
        e[1] === 'hwb'
            ? (i = I_(s, r, o))
            : e[1] === 'hsv'
            ? (i = F_(s, r, o))
            : (i = Au(s, r, o)),
        { r: i[0], g: i[1], b: i[2], a: n }
    );
}
function B_(t, e) {
    var n = Lu(t);
    (n[0] = wg(n[0] + e)),
        (n = Au(n)),
        (t.r = n[0]),
        (t.g = n[1]),
        (t.b = n[2]);
}
function V_(t) {
    if (!t) return;
    const e = Lu(t),
        n = e[0],
        i = _h(e[1]),
        s = _h(e[2]);
    return t.a < 255
        ? `hsla(${n}, ${i}%, ${s}%, ${Qt(t.a)})`
        : `hsl(${n}, ${i}%, ${s}%)`;
}
const bh = {
        x: 'dark',
        Z: 'light',
        Y: 're',
        X: 'blu',
        W: 'gr',
        V: 'medium',
        U: 'slate',
        A: 'ee',
        T: 'ol',
        S: 'or',
        B: 'ra',
        C: 'lateg',
        D: 'ights',
        R: 'in',
        Q: 'turquois',
        E: 'hi',
        P: 'ro',
        O: 'al',
        N: 'le',
        M: 'de',
        L: 'yello',
        F: 'en',
        K: 'ch',
        G: 'arks',
        H: 'ea',
        I: 'ightg',
        J: 'wh',
    },
    wh = {
        OiceXe: 'f0f8ff',
        antiquewEte: 'faebd7',
        aqua: 'ffff',
        aquamarRe: '7fffd4',
        azuY: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '0',
        blanKedOmond: 'ffebcd',
        Xe: 'ff',
        XeviTet: '8a2be2',
        bPwn: 'a52a2a',
        burlywood: 'deb887',
        caMtXe: '5f9ea0',
        KartYuse: '7fff00',
        KocTate: 'd2691e',
        cSO: 'ff7f50',
        cSnflowerXe: '6495ed',
        cSnsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: 'ffff',
        xXe: '8b',
        xcyan: '8b8b',
        xgTMnPd: 'b8860b',
        xWay: 'a9a9a9',
        xgYF: '6400',
        xgYy: 'a9a9a9',
        xkhaki: 'bdb76b',
        xmagFta: '8b008b',
        xTivegYF: '556b2f',
        xSange: 'ff8c00',
        xScEd: '9932cc',
        xYd: '8b0000',
        xsOmon: 'e9967a',
        xsHgYF: '8fbc8f',
        xUXe: '483d8b',
        xUWay: '2f4f4f',
        xUgYy: '2f4f4f',
        xQe: 'ced1',
        xviTet: '9400d3',
        dAppRk: 'ff1493',
        dApskyXe: 'bfff',
        dimWay: '696969',
        dimgYy: '696969',
        dodgerXe: '1e90ff',
        fiYbrick: 'b22222',
        flSOwEte: 'fffaf0',
        foYstWAn: '228b22',
        fuKsia: 'ff00ff',
        gaRsbSo: 'dcdcdc',
        ghostwEte: 'f8f8ff',
        gTd: 'ffd700',
        gTMnPd: 'daa520',
        Way: '808080',
        gYF: '8000',
        gYFLw: 'adff2f',
        gYy: '808080',
        honeyMw: 'f0fff0',
        hotpRk: 'ff69b4',
        RdianYd: 'cd5c5c',
        Rdigo: '4b0082',
        ivSy: 'fffff0',
        khaki: 'f0e68c',
        lavFMr: 'e6e6fa',
        lavFMrXsh: 'fff0f5',
        lawngYF: '7cfc00',
        NmoncEffon: 'fffacd',
        ZXe: 'add8e6',
        ZcSO: 'f08080',
        Zcyan: 'e0ffff',
        ZgTMnPdLw: 'fafad2',
        ZWay: 'd3d3d3',
        ZgYF: '90ee90',
        ZgYy: 'd3d3d3',
        ZpRk: 'ffb6c1',
        ZsOmon: 'ffa07a',
        ZsHgYF: '20b2aa',
        ZskyXe: '87cefa',
        ZUWay: '778899',
        ZUgYy: '778899',
        ZstAlXe: 'b0c4de',
        ZLw: 'ffffe0',
        lime: 'ff00',
        limegYF: '32cd32',
        lRF: 'faf0e6',
        magFta: 'ff00ff',
        maPon: '800000',
        VaquamarRe: '66cdaa',
        VXe: 'cd',
        VScEd: 'ba55d3',
        VpurpN: '9370db',
        VsHgYF: '3cb371',
        VUXe: '7b68ee',
        VsprRggYF: 'fa9a',
        VQe: '48d1cc',
        VviTetYd: 'c71585',
        midnightXe: '191970',
        mRtcYam: 'f5fffa',
        mistyPse: 'ffe4e1',
        moccasR: 'ffe4b5',
        navajowEte: 'ffdead',
        navy: '80',
        Tdlace: 'fdf5e6',
        Tive: '808000',
        TivedBb: '6b8e23',
        Sange: 'ffa500',
        SangeYd: 'ff4500',
        ScEd: 'da70d6',
        pOegTMnPd: 'eee8aa',
        pOegYF: '98fb98',
        pOeQe: 'afeeee',
        pOeviTetYd: 'db7093',
        papayawEp: 'ffefd5',
        pHKpuff: 'ffdab9',
        peru: 'cd853f',
        pRk: 'ffc0cb',
        plum: 'dda0dd',
        powMrXe: 'b0e0e6',
        purpN: '800080',
        YbeccapurpN: '663399',
        Yd: 'ff0000',
        Psybrown: 'bc8f8f',
        PyOXe: '4169e1',
        saddNbPwn: '8b4513',
        sOmon: 'fa8072',
        sandybPwn: 'f4a460',
        sHgYF: '2e8b57',
        sHshell: 'fff5ee',
        siFna: 'a0522d',
        silver: 'c0c0c0',
        skyXe: '87ceeb',
        UXe: '6a5acd',
        UWay: '708090',
        UgYy: '708090',
        snow: 'fffafa',
        sprRggYF: 'ff7f',
        stAlXe: '4682b4',
        tan: 'd2b48c',
        teO: '8080',
        tEstN: 'd8bfd8',
        tomato: 'ff6347',
        Qe: '40e0d0',
        viTet: 'ee82ee',
        JHt: 'f5deb3',
        wEte: 'ffffff',
        wEtesmoke: 'f5f5f5',
        Lw: 'ffff00',
        LwgYF: '9acd32',
    };
function $_() {
    const t = {},
        e = Object.keys(wh),
        n = Object.keys(bh);
    let i, s, r, o, a;
    for (i = 0; i < e.length; i++) {
        for (o = a = e[i], s = 0; s < n.length; s++)
            (r = n[s]), (a = a.replace(r, bh[r]));
        (r = parseInt(wh[o], 16)),
            (t[a] = [(r >> 16) & 255, (r >> 8) & 255, r & 255]);
    }
    return t;
}
let Br;
function H_(t) {
    Br || ((Br = $_()), (Br.transparent = [0, 0, 0, 0]));
    const e = Br[t.toLowerCase()];
    return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
const W_ =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function U_(t) {
    const e = W_.exec(t);
    let n = 255,
        i,
        s,
        r;
    if (e) {
        if (e[7] !== i) {
            const o = +e[7];
            n = e[8] ? gs(o) : gn(o * 255, 0, 255);
        }
        return (
            (i = +e[1]),
            (s = +e[3]),
            (r = +e[5]),
            (i = 255 & (e[2] ? gs(i) : gn(i, 0, 255))),
            (s = 255 & (e[4] ? gs(s) : gn(s, 0, 255))),
            (r = 255 & (e[6] ? gs(r) : gn(r, 0, 255))),
            { r: i, g: s, b: r, a: n }
        );
    }
}
function Q_(t) {
    return (
        t &&
        (t.a < 255
            ? `rgba(${t.r}, ${t.g}, ${t.b}, ${Qt(t.a)})`
            : `rgb(${t.r}, ${t.g}, ${t.b})`)
    );
}
const ol = (t) =>
        t <= 0.0031308 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055,
    gi = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
function Y_(t, e, n) {
    const i = gi(Qt(t.r)),
        s = gi(Qt(t.g)),
        r = gi(Qt(t.b));
    return {
        r: jn(ol(i + n * (gi(Qt(e.r)) - i))),
        g: jn(ol(s + n * (gi(Qt(e.g)) - s))),
        b: jn(ol(r + n * (gi(Qt(e.b)) - r))),
        a: t.a + n * (e.a - t.a),
    };
}
function Vr(t, e, n) {
    if (t) {
        let i = Lu(t);
        (i[e] = Math.max(0, Math.min(i[e] + i[e] * n, e === 0 ? 360 : 1))),
            (i = Au(i)),
            (t.r = i[0]),
            (t.g = i[1]),
            (t.b = i[2]);
    }
}
function Sg(t, e) {
    return t && Object.assign(e || {}, t);
}
function Sh(t) {
    var e = { r: 0, g: 0, b: 0, a: 255 };
    return (
        Array.isArray(t)
            ? t.length >= 3 &&
              ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
              t.length > 3 && (e.a = jn(t[3])))
            : ((e = Sg(t, { r: 0, g: 0, b: 0, a: 1 })), (e.a = jn(e.a))),
        e
    );
}
function X_(t) {
    return t.charAt(0) === 'r' ? U_(t) : z_(t);
}
class sr {
    constructor(e) {
        if (e instanceof sr) return e;
        const n = typeof e;
        let i;
        n === 'object'
            ? (i = Sh(e))
            : n === 'string' && (i = j_(e) || H_(e) || X_(e)),
            (this._rgb = i),
            (this._valid = !!i);
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var e = Sg(this._rgb);
        return e && (e.a = Qt(e.a)), e;
    }
    set rgb(e) {
        this._rgb = Sh(e);
    }
    rgbString() {
        return this._valid ? Q_(this._rgb) : void 0;
    }
    hexString() {
        return this._valid ? N_(this._rgb) : void 0;
    }
    hslString() {
        return this._valid ? V_(this._rgb) : void 0;
    }
    mix(e, n) {
        if (e) {
            const i = this.rgb,
                s = e.rgb;
            let r;
            const o = n === r ? 0.5 : n,
                a = 2 * o - 1,
                l = i.a - s.a,
                c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
            (r = 1 - c),
                (i.r = 255 & (c * i.r + r * s.r + 0.5)),
                (i.g = 255 & (c * i.g + r * s.g + 0.5)),
                (i.b = 255 & (c * i.b + r * s.b + 0.5)),
                (i.a = o * i.a + (1 - o) * s.a),
                (this.rgb = i);
        }
        return this;
    }
    interpolate(e, n) {
        return e && (this._rgb = Y_(this._rgb, e._rgb, n)), this;
    }
    clone() {
        return new sr(this.rgb);
    }
    alpha(e) {
        return (this._rgb.a = jn(e)), this;
    }
    clearer(e) {
        const n = this._rgb;
        return (n.a *= 1 - e), this;
    }
    greyscale() {
        const e = this._rgb,
            n = yr(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
        return (e.r = e.g = e.b = n), this;
    }
    opaquer(e) {
        const n = this._rgb;
        return (n.a *= 1 + e), this;
    }
    negate() {
        const e = this._rgb;
        return (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this;
    }
    lighten(e) {
        return Vr(this._rgb, 2, e), this;
    }
    darken(e) {
        return Vr(this._rgb, 2, -e), this;
    }
    saturate(e) {
        return Vr(this._rgb, 1, e), this;
    }
    desaturate(e) {
        return Vr(this._rgb, 1, -e), this;
    }
    rotate(e) {
        return B_(this._rgb, e), this;
    }
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ function Vt() {}
const K_ = (() => {
    let t = 0;
    return () => t++;
})();
function X(t) {
    return t === null || typeof t > 'u';
}
function oe(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    const e = Object.prototype.toString.call(t);
    return e.slice(0, 7) === '[object' && e.slice(-6) === 'Array]';
}
function H(t) {
    return (
        t !== null && Object.prototype.toString.call(t) === '[object Object]'
    );
}
function ge(t) {
    return (typeof t == 'number' || t instanceof Number) && isFinite(+t);
}
function nt(t, e) {
    return ge(t) ? t : e;
}
function V(t, e) {
    return typeof t > 'u' ? e : t;
}
const q_ = (t, e) =>
        typeof t == 'string' && t.endsWith('%') ? parseFloat(t) / 100 : +t / e,
    kg = (t, e) =>
        typeof t == 'string' && t.endsWith('%')
            ? (parseFloat(t) / 100) * e
            : +t;
function ne(t, e, n) {
    if (t && typeof t.call == 'function') return t.apply(n, e);
}
function J(t, e, n, i) {
    let s, r, o;
    if (oe(t))
        if (((r = t.length), i))
            for (s = r - 1; s >= 0; s--) e.call(n, t[s], s);
        else for (s = 0; s < r; s++) e.call(n, t[s], s);
    else if (H(t))
        for (o = Object.keys(t), r = o.length, s = 0; s < r; s++)
            e.call(n, t[o[s]], o[s]);
}
function Jo(t, e) {
    let n, i, s, r;
    if (!t || !e || t.length !== e.length) return !1;
    for (n = 0, i = t.length; n < i; ++n)
        if (
            ((s = t[n]),
            (r = e[n]),
            s.datasetIndex !== r.datasetIndex || s.index !== r.index)
        )
            return !1;
    return !0;
}
function Zo(t) {
    if (oe(t)) return t.map(Zo);
    if (H(t)) {
        const e = Object.create(null),
            n = Object.keys(t),
            i = n.length;
        let s = 0;
        for (; s < i; ++s) e[n[s]] = Zo(t[n[s]]);
        return e;
    }
    return t;
}
function Cg(t) {
    return ['__proto__', 'prototype', 'constructor'].indexOf(t) === -1;
}
function G_(t, e, n, i) {
    if (!Cg(t)) return;
    const s = e[t],
        r = n[t];
    H(s) && H(r) ? rr(s, r, i) : (e[t] = Zo(r));
}
function rr(t, e, n) {
    const i = oe(e) ? e : [e],
        s = i.length;
    if (!H(t)) return t;
    n = n || {};
    const r = n.merger || G_;
    let o;
    for (let a = 0; a < s; ++a) {
        if (((o = i[a]), !H(o))) continue;
        const l = Object.keys(o);
        for (let c = 0, u = l.length; c < u; ++c) r(l[c], t, o, n);
    }
    return t;
}
function Ns(t, e) {
    return rr(t, e, { merger: J_ });
}
function J_(t, e, n) {
    if (!Cg(t)) return;
    const i = e[t],
        s = n[t];
    H(i) && H(s)
        ? Ns(i, s)
        : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Zo(s));
}
const kh = { '': (t) => t, x: (t) => t.x, y: (t) => t.y };
function Z_(t) {
    const e = t.split('.'),
        n = [];
    let i = '';
    for (const s of e)
        (i += s),
            i.endsWith('\\')
                ? (i = i.slice(0, -1) + '.')
                : (n.push(i), (i = ''));
    return n;
}
function eb(t) {
    const e = Z_(t);
    return (n) => {
        for (const i of e) {
            if (i === '') break;
            n = n && n[i];
        }
        return n;
    };
}
function Dn(t, e) {
    return (kh[e] || (kh[e] = eb(e)))(t);
}
function Iu(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
}
const or = (t) => typeof t < 'u',
    Ln = (t) => typeof t == 'function',
    Ch = (t, e) => {
        if (t.size !== e.size) return !1;
        for (const n of t) if (!e.has(n)) return !1;
        return !0;
    };
function tb(t) {
    return (
        t.type === 'mouseup' || t.type === 'click' || t.type === 'contextmenu'
    );
}
const ce = Math.PI,
    le = 2 * ce,
    nb = le + ce,
    ea = Number.POSITIVE_INFINITY,
    ib = ce / 180,
    xe = ce / 2,
    Bn = ce / 4,
    Mh = (ce * 2) / 3,
    yn = Math.log10,
    zt = Math.sign;
function Ds(t, e, n) {
    return Math.abs(t - e) < n;
}
function Ph(t) {
    const e = Math.round(t);
    t = Ds(t, e, t / 1e3) ? e : t;
    const n = Math.pow(10, Math.floor(yn(t))),
        i = t / n;
    return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function sb(t) {
    const e = [],
        n = Math.sqrt(t);
    let i;
    for (i = 1; i < n; i++) t % i === 0 && (e.push(i), e.push(t / i));
    return n === (n | 0) && e.push(n), e.sort((s, r) => s - r).pop(), e;
}
function Ui(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
}
function rb(t, e) {
    const n = Math.round(t);
    return n - e <= t && n + e >= t;
}
function Mg(t, e, n) {
    let i, s, r;
    for (i = 0, s = t.length; i < s; i++)
        (r = t[i][n]),
            isNaN(r) ||
                ((e.min = Math.min(e.min, r)), (e.max = Math.max(e.max, r)));
}
function St(t) {
    return t * (ce / 180);
}
function Fu(t) {
    return t * (180 / ce);
}
function Eh(t) {
    if (!ge(t)) return;
    let e = 1,
        n = 0;
    for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
    return n;
}
function Pg(t, e) {
    const n = e.x - t.x,
        i = e.y - t.y,
        s = Math.sqrt(n * n + i * i);
    let r = Math.atan2(i, n);
    return r < -0.5 * ce && (r += le), { angle: r, distance: s };
}
function xc(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function ob(t, e) {
    return ((t - e + nb) % le) - ce;
}
function st(t) {
    return ((t % le) + le) % le;
}
function ar(t, e, n, i) {
    const s = st(t),
        r = st(e),
        o = st(n),
        a = st(r - s),
        l = st(o - s),
        c = st(s - r),
        u = st(s - o);
    return s === r || s === o || (i && r === o) || (a > l && c < u);
}
function Pe(t, e, n) {
    return Math.max(e, Math.min(n, t));
}
function ab(t) {
    return Pe(t, -32768, 32767);
}
function qt(t, e, n, i = 1e-6) {
    return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
}
function zu(t, e, n) {
    n = n || ((o) => t[o] < e);
    let i = t.length - 1,
        s = 0,
        r;
    for (; i - s > 1; ) (r = (s + i) >> 1), n(r) ? (s = r) : (i = r);
    return { lo: s, hi: i };
}
const Gt = (t, e, n, i) =>
        zu(
            t,
            n,
            i
                ? (s) => {
                      const r = t[s][e];
                      return r < n || (r === n && t[s + 1][e] === n);
                  }
                : (s) => t[s][e] < n
        ),
    lb = (t, e, n) => zu(t, n, (i) => t[i][e] >= n);
function cb(t, e, n) {
    let i = 0,
        s = t.length;
    for (; i < s && t[i] < e; ) i++;
    for (; s > i && t[s - 1] > n; ) s--;
    return i > 0 || s < t.length ? t.slice(i, s) : t;
}
const Eg = ['push', 'pop', 'shift', 'splice', 'unshift'];
function ub(t, e) {
    if (t._chartjs) {
        t._chartjs.listeners.push(e);
        return;
    }
    Object.defineProperty(t, '_chartjs', {
        configurable: !0,
        enumerable: !1,
        value: { listeners: [e] },
    }),
        Eg.forEach((n) => {
            const i = '_onData' + Iu(n),
                s = t[n];
            Object.defineProperty(t, n, {
                configurable: !0,
                enumerable: !1,
                value(...r) {
                    const o = s.apply(this, r);
                    return (
                        t._chartjs.listeners.forEach((a) => {
                            typeof a[i] == 'function' && a[i](...r);
                        }),
                        o
                    );
                },
            });
        });
}
function Th(t, e) {
    const n = t._chartjs;
    if (!n) return;
    const i = n.listeners,
        s = i.indexOf(e);
    s !== -1 && i.splice(s, 1),
        !(i.length > 0) &&
            (Eg.forEach((r) => {
                delete t[r];
            }),
            delete t._chartjs);
}
function Tg(t) {
    const e = new Set(t);
    return e.size === t.length ? t : Array.from(e);
}
const jg = (function () {
    return typeof window > 'u'
        ? function (t) {
              return t();
          }
        : window.requestAnimationFrame;
})();
function Og(t, e) {
    let n = [],
        i = !1;
    return function (...s) {
        (n = s),
            i ||
                ((i = !0),
                jg.call(window, () => {
                    (i = !1), t.apply(e, n);
                }));
    };
}
function db(t, e) {
    let n;
    return function (...i) {
        return (
            e ? (clearTimeout(n), (n = setTimeout(t, e, i))) : t.apply(this, i),
            e
        );
    };
}
const Bu = (t) => (t === 'start' ? 'left' : t === 'end' ? 'right' : 'center'),
    Re = (t, e, n) => (t === 'start' ? e : t === 'end' ? n : (e + n) / 2),
    hb = (t, e, n, i) =>
        t === (i ? 'left' : 'right') ? n : t === 'center' ? (e + n) / 2 : e;
function Ng(t, e, n) {
    const i = e.length;
    let s = 0,
        r = i;
    if (t._sorted) {
        const { iScale: o, _parsed: a } = t,
            l = o.axis,
            {
                min: c,
                max: u,
                minDefined: d,
                maxDefined: h,
            } = o.getUserBounds();
        d &&
            (s = Pe(
                Math.min(
                    Gt(a, l, c).lo,
                    n ? i : Gt(e, l, o.getPixelForValue(c)).lo
                ),
                0,
                i - 1
            )),
            h
                ? (r =
                      Pe(
                          Math.max(
                              Gt(a, o.axis, u, !0).hi + 1,
                              n ? 0 : Gt(e, l, o.getPixelForValue(u), !0).hi + 1
                          ),
                          s,
                          i
                      ) - s)
                : (r = i - s);
    }
    return { start: s, count: r };
}
function Dg(t) {
    const { xScale: e, yScale: n, _scaleRanges: i } = t,
        s = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
    if (!i) return (t._scaleRanges = s), !0;
    const r =
        i.xmin !== e.min ||
        i.xmax !== e.max ||
        i.ymin !== n.min ||
        i.ymax !== n.max;
    return Object.assign(i, s), r;
}
const $r = (t) => t === 0 || t === 1,
    jh = (t, e, n) =>
        -(Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * le) / n)),
    Oh = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * le) / n) + 1,
    Ls = {
        linear: (t) => t,
        easeInQuad: (t) => t * t,
        easeOutQuad: (t) => -t * (t - 2),
        easeInOutQuad: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
        easeInCubic: (t) => t * t * t,
        easeOutCubic: (t) => (t -= 1) * t * t + 1,
        easeInOutCubic: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
        easeInQuart: (t) => t * t * t * t,
        easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
        easeInOutQuart: (t) =>
            (t /= 0.5) < 1
                ? 0.5 * t * t * t * t
                : -0.5 * ((t -= 2) * t * t * t - 2),
        easeInQuint: (t) => t * t * t * t * t,
        easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
        easeInOutQuint: (t) =>
            (t /= 0.5) < 1
                ? 0.5 * t * t * t * t * t
                : 0.5 * ((t -= 2) * t * t * t * t + 2),
        easeInSine: (t) => -Math.cos(t * xe) + 1,
        easeOutSine: (t) => Math.sin(t * xe),
        easeInOutSine: (t) => -0.5 * (Math.cos(ce * t) - 1),
        easeInExpo: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
        easeOutExpo: (t) => (t === 1 ? 1 : -Math.pow(2, -10 * t) + 1),
        easeInOutExpo: (t) =>
            $r(t)
                ? t
                : t < 0.5
                ? 0.5 * Math.pow(2, 10 * (t * 2 - 1))
                : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
        easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
        easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
        easeInOutCirc: (t) =>
            (t /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
        easeInElastic: (t) => ($r(t) ? t : jh(t, 0.075, 0.3)),
        easeOutElastic: (t) => ($r(t) ? t : Oh(t, 0.075, 0.3)),
        easeInOutElastic(t) {
            return $r(t)
                ? t
                : t < 0.5
                ? 0.5 * jh(t * 2, 0.1125, 0.45)
                : 0.5 + 0.5 * Oh(t * 2 - 1, 0.1125, 0.45);
        },
        easeInBack(t) {
            return t * t * ((1.70158 + 1) * t - 1.70158);
        },
        easeOutBack(t) {
            return (t -= 1) * t * ((1.70158 + 1) * t + 1.70158) + 1;
        },
        easeInOutBack(t) {
            let e = 1.70158;
            return (t /= 0.5) < 1
                ? 0.5 * (t * t * (((e *= 1.525) + 1) * t - e))
                : 0.5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
        },
        easeInBounce: (t) => 1 - Ls.easeOutBounce(1 - t),
        easeOutBounce(t) {
            return t < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        },
        easeInOutBounce: (t) =>
            t < 0.5
                ? Ls.easeInBounce(t * 2) * 0.5
                : Ls.easeOutBounce(t * 2 - 1) * 0.5 + 0.5,
    };
function Vu(t) {
    if (t && typeof t == 'object') {
        const e = t.toString();
        return (
            e === '[object CanvasPattern]' || e === '[object CanvasGradient]'
        );
    }
    return !1;
}
function Nh(t) {
    return Vu(t) ? t : new sr(t);
}
function al(t) {
    return Vu(t) ? t : new sr(t).saturate(0.5).darken(0.1).hexString();
}
const fb = ['x', 'y', 'borderWidth', 'radius', 'tension'],
    pb = ['color', 'borderColor', 'backgroundColor'];
function mb(t) {
    t.set('animation', {
        delay: void 0,
        duration: 1e3,
        easing: 'easeOutQuart',
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
    }),
        t.describe('animation', {
            _fallback: !1,
            _indexable: !1,
            _scriptable: (e) =>
                e !== 'onProgress' && e !== 'onComplete' && e !== 'fn',
        }),
        t.set('animations', {
            colors: { type: 'color', properties: pb },
            numbers: { type: 'number', properties: fb },
        }),
        t.describe('animations', { _fallback: 'animation' }),
        t.set('transitions', {
            active: { animation: { duration: 400 } },
            resize: { animation: { duration: 0 } },
            show: {
                animations: {
                    colors: { from: 'transparent' },
                    visible: { type: 'boolean', duration: 0 },
                },
            },
            hide: {
                animations: {
                    colors: { to: 'transparent' },
                    visible: {
                        type: 'boolean',
                        easing: 'linear',
                        fn: (e) => e | 0,
                    },
                },
            },
        });
}
function gb(t) {
    t.set('layout', {
        autoPadding: !0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
    });
}
const Dh = new Map();
function yb(t, e) {
    e = e || {};
    const n = t + JSON.stringify(e);
    let i = Dh.get(n);
    return i || ((i = new Intl.NumberFormat(t, e)), Dh.set(n, i)), i;
}
function vr(t, e, n) {
    return yb(e, n).format(t);
}
const Lg = {
    values(t) {
        return oe(t) ? t : '' + t;
    },
    numeric(t, e, n) {
        if (t === 0) return '0';
        const i = this.chart.options.locale;
        let s,
            r = t;
        if (n.length > 1) {
            const c = Math.max(
                Math.abs(n[0].value),
                Math.abs(n[n.length - 1].value)
            );
            (c < 1e-4 || c > 1e15) && (s = 'scientific'), (r = vb(t, n));
        }
        const o = yn(Math.abs(r)),
            a = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
            l = {
                notation: s,
                minimumFractionDigits: a,
                maximumFractionDigits: a,
            };
        return Object.assign(l, this.options.ticks.format), vr(t, i, l);
    },
    logarithmic(t, e, n) {
        if (t === 0) return '0';
        const i = n[e].significand || t / Math.pow(10, Math.floor(yn(t)));
        return [1, 2, 3, 5, 10, 15].includes(i) || e > 0.8 * n.length
            ? Lg.numeric.call(this, t, e, n)
            : '';
    },
};
function vb(t, e) {
    let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
    return (
        Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)), n
    );
}
var Ma = { formatters: Lg };
function xb(t) {
    t.set('scale', {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: 'ticks',
        clip: !0,
        grace: 0,
        grid: {
            display: !0,
            lineWidth: 1,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (e, n) => n.lineWidth,
            tickColor: (e, n) => n.color,
            offset: !1,
        },
        border: { display: !0, dash: [], dashOffset: 0, width: 1 },
        title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: '',
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: Ma.formatters.values,
            minor: {},
            major: {},
            align: 'center',
            crossAlign: 'near',
            showLabelBackdrop: !1,
            backdropColor: 'rgba(255, 255, 255, 0.75)',
            backdropPadding: 2,
        },
    }),
        t.route('scale.ticks', 'color', '', 'color'),
        t.route('scale.grid', 'color', '', 'borderColor'),
        t.route('scale.border', 'color', '', 'borderColor'),
        t.route('scale.title', 'color', '', 'color'),
        t.describe('scale', {
            _fallback: !1,
            _scriptable: (e) =>
                !e.startsWith('before') &&
                !e.startsWith('after') &&
                e !== 'callback' &&
                e !== 'parser',
            _indexable: (e) =>
                e !== 'borderDash' && e !== 'tickBorderDash' && e !== 'dash',
        }),
        t.describe('scales', { _fallback: 'scale' }),
        t.describe('scale.ticks', {
            _scriptable: (e) => e !== 'backdropPadding' && e !== 'callback',
            _indexable: (e) => e !== 'backdropPadding',
        });
}
const ci = Object.create(null),
    _c = Object.create(null);
function Rs(t, e) {
    if (!e) return t;
    const n = e.split('.');
    for (let i = 0, s = n.length; i < s; ++i) {
        const r = n[i];
        t = t[r] || (t[r] = Object.create(null));
    }
    return t;
}
function ll(t, e, n) {
    return typeof e == 'string' ? rr(Rs(t, e), n) : rr(Rs(t, ''), e);
}
class _b {
    constructor(e, n) {
        (this.animation = void 0),
            (this.backgroundColor = 'rgba(0,0,0,0.1)'),
            (this.borderColor = 'rgba(0,0,0,0.1)'),
            (this.color = '#666'),
            (this.datasets = {}),
            (this.devicePixelRatio = (i) =>
                i.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
                'mousemove',
                'mouseout',
                'click',
                'touchstart',
                'touchmove',
            ]),
            (this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: 'normal',
                lineHeight: 1.2,
                weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (i, s) => al(s.backgroundColor)),
            (this.hoverBorderColor = (i, s) => al(s.borderColor)),
            (this.hoverColor = (i, s) => al(s.color)),
            (this.indexAxis = 'x'),
            (this.interaction = {
                mode: 'nearest',
                intersect: !0,
                includeInvisible: !1,
            }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(e),
            this.apply(n);
    }
    set(e, n) {
        return ll(this, e, n);
    }
    get(e) {
        return Rs(this, e);
    }
    describe(e, n) {
        return ll(_c, e, n);
    }
    override(e, n) {
        return ll(ci, e, n);
    }
    route(e, n, i, s) {
        const r = Rs(this, e),
            o = Rs(this, i),
            a = '_' + n;
        Object.defineProperties(r, {
            [a]: { value: r[n], writable: !0 },
            [n]: {
                enumerable: !0,
                get() {
                    const l = this[a],
                        c = o[s];
                    return H(l) ? Object.assign({}, c, l) : V(l, c);
                },
                set(l) {
                    this[a] = l;
                },
            },
        });
    }
    apply(e) {
        e.forEach((n) => n(this));
    }
}
var ye = new _b(
    {
        _scriptable: (t) => !t.startsWith('on'),
        _indexable: (t) => t !== 'events',
        hover: { _fallback: 'interaction' },
        interaction: { _scriptable: !1, _indexable: !1 },
    },
    [mb, gb, xb]
);
function bb(t) {
    return !t || X(t.size) || X(t.family)
        ? null
        : (t.style ? t.style + ' ' : '') +
              (t.weight ? t.weight + ' ' : '') +
              t.size +
              'px ' +
              t.family;
}
function ta(t, e, n, i, s) {
    let r = e[s];
    return (
        r || ((r = e[s] = t.measureText(s).width), n.push(s)),
        r > i && (i = r),
        i
    );
}
function wb(t, e, n, i) {
    i = i || {};
    let s = (i.data = i.data || {}),
        r = (i.garbageCollect = i.garbageCollect || []);
    i.font !== e &&
        ((s = i.data = {}), (r = i.garbageCollect = []), (i.font = e)),
        t.save(),
        (t.font = e);
    let o = 0;
    const a = n.length;
    let l, c, u, d, h;
    for (l = 0; l < a; l++)
        if (((d = n[l]), d != null && !oe(d))) o = ta(t, s, r, o, d);
        else if (oe(d))
            for (c = 0, u = d.length; c < u; c++)
                (h = d[c]), h != null && !oe(h) && (o = ta(t, s, r, o, h));
    t.restore();
    const p = r.length / 2;
    if (p > n.length) {
        for (l = 0; l < p; l++) delete s[r[l]];
        r.splice(0, p);
    }
    return o;
}
function Vn(t, e, n) {
    const i = t.currentDevicePixelRatio,
        s = n !== 0 ? Math.max(n / 2, 0.5) : 0;
    return Math.round((e - s) * i) / i + s;
}
function Lh(t, e) {
    (e = e || t.getContext('2d')),
        e.save(),
        e.resetTransform(),
        e.clearRect(0, 0, t.width, t.height),
        e.restore();
}
function bc(t, e, n, i) {
    Rg(t, e, n, i, null);
}
function Rg(t, e, n, i, s) {
    let r, o, a, l, c, u, d, h;
    const p = e.pointStyle,
        v = e.rotation,
        y = e.radius;
    let _ = (v || 0) * ib;
    if (
        p &&
        typeof p == 'object' &&
        ((r = p.toString()),
        r === '[object HTMLImageElement]' || r === '[object HTMLCanvasElement]')
    ) {
        t.save(),
            t.translate(n, i),
            t.rotate(_),
            t.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height),
            t.restore();
        return;
    }
    if (!(isNaN(y) || y <= 0)) {
        switch ((t.beginPath(), p)) {
            default:
                s ? t.ellipse(n, i, s / 2, y, 0, 0, le) : t.arc(n, i, y, 0, le),
                    t.closePath();
                break;
            case 'triangle':
                (u = s ? s / 2 : y),
                    t.moveTo(n + Math.sin(_) * u, i - Math.cos(_) * y),
                    (_ += Mh),
                    t.lineTo(n + Math.sin(_) * u, i - Math.cos(_) * y),
                    (_ += Mh),
                    t.lineTo(n + Math.sin(_) * u, i - Math.cos(_) * y),
                    t.closePath();
                break;
            case 'rectRounded':
                (c = y * 0.516),
                    (l = y - c),
                    (o = Math.cos(_ + Bn) * l),
                    (d = Math.cos(_ + Bn) * (s ? s / 2 - c : l)),
                    (a = Math.sin(_ + Bn) * l),
                    (h = Math.sin(_ + Bn) * (s ? s / 2 - c : l)),
                    t.arc(n - d, i - a, c, _ - ce, _ - xe),
                    t.arc(n + h, i - o, c, _ - xe, _),
                    t.arc(n + d, i + a, c, _, _ + xe),
                    t.arc(n - h, i + o, c, _ + xe, _ + ce),
                    t.closePath();
                break;
            case 'rect':
                if (!v) {
                    (l = Math.SQRT1_2 * y),
                        (u = s ? s / 2 : l),
                        t.rect(n - u, i - l, 2 * u, 2 * l);
                    break;
                }
                _ += Bn;
            case 'rectRot':
                (d = Math.cos(_) * (s ? s / 2 : y)),
                    (o = Math.cos(_) * y),
                    (a = Math.sin(_) * y),
                    (h = Math.sin(_) * (s ? s / 2 : y)),
                    t.moveTo(n - d, i - a),
                    t.lineTo(n + h, i - o),
                    t.lineTo(n + d, i + a),
                    t.lineTo(n - h, i + o),
                    t.closePath();
                break;
            case 'crossRot':
                _ += Bn;
            case 'cross':
                (d = Math.cos(_) * (s ? s / 2 : y)),
                    (o = Math.cos(_) * y),
                    (a = Math.sin(_) * y),
                    (h = Math.sin(_) * (s ? s / 2 : y)),
                    t.moveTo(n - d, i - a),
                    t.lineTo(n + d, i + a),
                    t.moveTo(n + h, i - o),
                    t.lineTo(n - h, i + o);
                break;
            case 'star':
                (d = Math.cos(_) * (s ? s / 2 : y)),
                    (o = Math.cos(_) * y),
                    (a = Math.sin(_) * y),
                    (h = Math.sin(_) * (s ? s / 2 : y)),
                    t.moveTo(n - d, i - a),
                    t.lineTo(n + d, i + a),
                    t.moveTo(n + h, i - o),
                    t.lineTo(n - h, i + o),
                    (_ += Bn),
                    (d = Math.cos(_) * (s ? s / 2 : y)),
                    (o = Math.cos(_) * y),
                    (a = Math.sin(_) * y),
                    (h = Math.sin(_) * (s ? s / 2 : y)),
                    t.moveTo(n - d, i - a),
                    t.lineTo(n + d, i + a),
                    t.moveTo(n + h, i - o),
                    t.lineTo(n - h, i + o);
                break;
            case 'line':
                (o = s ? s / 2 : Math.cos(_) * y),
                    (a = Math.sin(_) * y),
                    t.moveTo(n - o, i - a),
                    t.lineTo(n + o, i + a);
                break;
            case 'dash':
                t.moveTo(n, i),
                    t.lineTo(
                        n + Math.cos(_) * (s ? s / 2 : y),
                        i + Math.sin(_) * y
                    );
                break;
            case !1:
                t.closePath();
                break;
        }
        t.fill(), e.borderWidth > 0 && t.stroke();
    }
}
function Jt(t, e, n) {
    return (
        (n = n || 0.5),
        !e ||
            (t &&
                t.x > e.left - n &&
                t.x < e.right + n &&
                t.y > e.top - n &&
                t.y < e.bottom + n)
    );
}
function Pa(t, e) {
    t.save(),
        t.beginPath(),
        t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
        t.clip();
}
function Ea(t) {
    t.restore();
}
function Sb(t, e, n, i, s) {
    if (!e) return t.lineTo(n.x, n.y);
    if (s === 'middle') {
        const r = (e.x + n.x) / 2;
        t.lineTo(r, e.y), t.lineTo(r, n.y);
    } else (s === 'after') != !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
    t.lineTo(n.x, n.y);
}
function kb(t, e, n, i) {
    if (!e) return t.lineTo(n.x, n.y);
    t.bezierCurveTo(
        i ? e.cp1x : e.cp2x,
        i ? e.cp1y : e.cp2y,
        i ? n.cp2x : n.cp1x,
        i ? n.cp2y : n.cp1y,
        n.x,
        n.y
    );
}
function Cb(t, e) {
    e.translation && t.translate(e.translation[0], e.translation[1]),
        X(e.rotation) || t.rotate(e.rotation),
        e.color && (t.fillStyle = e.color),
        e.textAlign && (t.textAlign = e.textAlign),
        e.textBaseline && (t.textBaseline = e.textBaseline);
}
function Mb(t, e, n, i, s) {
    if (s.strikethrough || s.underline) {
        const r = t.measureText(i),
            o = e - r.actualBoundingBoxLeft,
            a = e + r.actualBoundingBoxRight,
            l = n - r.actualBoundingBoxAscent,
            c = n + r.actualBoundingBoxDescent,
            u = s.strikethrough ? (l + c) / 2 : c;
        (t.strokeStyle = t.fillStyle),
            t.beginPath(),
            (t.lineWidth = s.decorationWidth || 2),
            t.moveTo(o, u),
            t.lineTo(a, u),
            t.stroke();
    }
}
function Pb(t, e) {
    const n = t.fillStyle;
    (t.fillStyle = e.color),
        t.fillRect(e.left, e.top, e.width, e.height),
        (t.fillStyle = n);
}
function ui(t, e, n, i, s, r = {}) {
    const o = oe(e) ? e : [e],
        a = r.strokeWidth > 0 && r.strokeColor !== '';
    let l, c;
    for (t.save(), t.font = s.string, Cb(t, r), l = 0; l < o.length; ++l)
        (c = o[l]),
            r.backdrop && Pb(t, r.backdrop),
            a &&
                (r.strokeColor && (t.strokeStyle = r.strokeColor),
                X(r.strokeWidth) || (t.lineWidth = r.strokeWidth),
                t.strokeText(c, n, i, r.maxWidth)),
            t.fillText(c, n, i, r.maxWidth),
            Mb(t, n, i, c, r),
            (i += Number(s.lineHeight));
    t.restore();
}
function lr(t, e) {
    const { x: n, y: i, w: s, h: r, radius: o } = e;
    t.arc(n + o.topLeft, i + o.topLeft, o.topLeft, 1.5 * ce, ce, !0),
        t.lineTo(n, i + r - o.bottomLeft),
        t.arc(n + o.bottomLeft, i + r - o.bottomLeft, o.bottomLeft, ce, xe, !0),
        t.lineTo(n + s - o.bottomRight, i + r),
        t.arc(
            n + s - o.bottomRight,
            i + r - o.bottomRight,
            o.bottomRight,
            xe,
            0,
            !0
        ),
        t.lineTo(n + s, i + o.topRight),
        t.arc(n + s - o.topRight, i + o.topRight, o.topRight, 0, -xe, !0),
        t.lineTo(n + o.topLeft, i);
}
const Eb = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    Tb =
        /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function jb(t, e) {
    const n = ('' + t).match(Eb);
    if (!n || n[1] === 'normal') return e * 1.2;
    switch (((t = +n[2]), n[3])) {
        case 'px':
            return t;
        case '%':
            t /= 100;
            break;
    }
    return e * t;
}
const Ob = (t) => +t || 0;
function $u(t, e) {
    const n = {},
        i = H(e),
        s = i ? Object.keys(e) : e,
        r = H(t) ? (i ? (o) => V(t[o], t[e[o]]) : (o) => t[o]) : () => t;
    for (const o of s) n[o] = Ob(r(o));
    return n;
}
function Ag(t) {
    return $u(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
}
function ni(t) {
    return $u(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function ze(t) {
    const e = Ag(t);
    return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function Se(t, e) {
    (t = t || {}), (e = e || ye.font);
    let n = V(t.size, e.size);
    typeof n == 'string' && (n = parseInt(n, 10));
    let i = V(t.style, e.style);
    i &&
        !('' + i).match(Tb) &&
        (console.warn('Invalid font style specified: "' + i + '"'),
        (i = void 0));
    const s = {
        family: V(t.family, e.family),
        lineHeight: jb(V(t.lineHeight, e.lineHeight), n),
        size: n,
        style: i,
        weight: V(t.weight, e.weight),
        string: '',
    };
    return (s.string = bb(s)), s;
}
function ys(t, e, n, i) {
    let s = !0,
        r,
        o,
        a;
    for (r = 0, o = t.length; r < o; ++r)
        if (
            ((a = t[r]),
            a !== void 0 &&
                (e !== void 0 &&
                    typeof a == 'function' &&
                    ((a = a(e)), (s = !1)),
                n !== void 0 && oe(a) && ((a = a[n % a.length]), (s = !1)),
                a !== void 0))
        )
            return i && !s && (i.cacheable = !1), a;
}
function Nb(t, e, n) {
    const { min: i, max: s } = t,
        r = kg(e, (s - i) / 2),
        o = (a, l) => (n && a === 0 ? 0 : a + l);
    return { min: o(i, -Math.abs(r)), max: o(s, r) };
}
function zn(t, e) {
    return Object.assign(Object.create(t), e);
}
function Hu(t, e = [''], n, i, s = () => t[0]) {
    const r = n || t;
    typeof i > 'u' && (i = Bg('_fallback', t));
    const o = {
        [Symbol.toStringTag]: 'Object',
        _cacheable: !0,
        _scopes: t,
        _rootScopes: r,
        _fallback: i,
        _getTarget: s,
        override: (a) => Hu([a, ...t], e, r, i),
    };
    return new Proxy(o, {
        deleteProperty(a, l) {
            return delete a[l], delete a._keys, delete t[0][l], !0;
        },
        get(a, l) {
            return Fg(a, l, () => Bb(l, e, t, a));
        },
        getOwnPropertyDescriptor(a, l) {
            return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(t[0]);
        },
        has(a, l) {
            return Ah(a).includes(l);
        },
        ownKeys(a) {
            return Ah(a);
        },
        set(a, l, c) {
            const u = a._storage || (a._storage = s());
            return (a[l] = u[l] = c), delete a._keys, !0;
        },
    });
}
function Qi(t, e, n, i) {
    const s = {
        _cacheable: !1,
        _proxy: t,
        _context: e,
        _subProxy: n,
        _stack: new Set(),
        _descriptors: Ig(t, i),
        setContext: (r) => Qi(t, r, n, i),
        override: (r) => Qi(t.override(r), e, n, i),
    };
    return new Proxy(s, {
        deleteProperty(r, o) {
            return delete r[o], delete t[o], !0;
        },
        get(r, o, a) {
            return Fg(r, o, () => Lb(r, o, a));
        },
        getOwnPropertyDescriptor(r, o) {
            return r._descriptors.allKeys
                ? Reflect.has(t, o)
                    ? { enumerable: !0, configurable: !0 }
                    : void 0
                : Reflect.getOwnPropertyDescriptor(t, o);
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(t);
        },
        has(r, o) {
            return Reflect.has(t, o);
        },
        ownKeys() {
            return Reflect.ownKeys(t);
        },
        set(r, o, a) {
            return (t[o] = a), delete r[o], !0;
        },
    });
}
function Ig(t, e = { scriptable: !0, indexable: !0 }) {
    const {
        _scriptable: n = e.scriptable,
        _indexable: i = e.indexable,
        _allKeys: s = e.allKeys,
    } = t;
    return {
        allKeys: s,
        scriptable: n,
        indexable: i,
        isScriptable: Ln(n) ? n : () => n,
        isIndexable: Ln(i) ? i : () => i,
    };
}
const Db = (t, e) => (t ? t + Iu(e) : e),
    Wu = (t, e) =>
        H(e) &&
        t !== 'adapters' &&
        (Object.getPrototypeOf(e) === null || e.constructor === Object);
function Fg(t, e, n) {
    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
    const i = n();
    return (t[e] = i), i;
}
function Lb(t, e, n) {
    const { _proxy: i, _context: s, _subProxy: r, _descriptors: o } = t;
    let a = i[e];
    return (
        Ln(a) && o.isScriptable(e) && (a = Rb(e, a, t, n)),
        oe(a) && a.length && (a = Ab(e, a, t, o.isIndexable)),
        Wu(e, a) && (a = Qi(a, s, r && r[e], o)),
        a
    );
}
function Rb(t, e, n, i) {
    const { _proxy: s, _context: r, _subProxy: o, _stack: a } = n;
    if (a.has(t))
        throw new Error(
            'Recursion detected: ' + Array.from(a).join('->') + '->' + t
        );
    a.add(t);
    let l = e(r, o || i);
    return a.delete(t), Wu(t, l) && (l = Uu(s._scopes, s, t, l)), l;
}
function Ab(t, e, n, i) {
    const { _proxy: s, _context: r, _subProxy: o, _descriptors: a } = n;
    if (typeof r.index < 'u' && i(t)) return e[r.index % e.length];
    if (H(e[0])) {
        const l = e,
            c = s._scopes.filter((u) => u !== l);
        e = [];
        for (const u of l) {
            const d = Uu(c, s, t, u);
            e.push(Qi(d, r, o && o[t], a));
        }
    }
    return e;
}
function zg(t, e, n) {
    return Ln(t) ? t(e, n) : t;
}
const Ib = (t, e) => (t === !0 ? e : typeof t == 'string' ? Dn(e, t) : void 0);
function Fb(t, e, n, i, s) {
    for (const r of e) {
        const o = Ib(n, r);
        if (o) {
            t.add(o);
            const a = zg(o._fallback, n, s);
            if (typeof a < 'u' && a !== n && a !== i) return a;
        } else if (o === !1 && typeof i < 'u' && n !== i) return null;
    }
    return !1;
}
function Uu(t, e, n, i) {
    const s = e._rootScopes,
        r = zg(e._fallback, n, i),
        o = [...t, ...s],
        a = new Set();
    a.add(i);
    let l = Rh(a, o, n, r || n, i);
    return l === null ||
        (typeof r < 'u' && r !== n && ((l = Rh(a, o, r, l, i)), l === null))
        ? !1
        : Hu(Array.from(a), [''], s, r, () => zb(e, n, i));
}
function Rh(t, e, n, i, s) {
    for (; n; ) n = Fb(t, e, n, i, s);
    return n;
}
function zb(t, e, n) {
    const i = t._getTarget();
    e in i || (i[e] = {});
    const s = i[e];
    return oe(s) && H(n) ? n : s || {};
}
function Bb(t, e, n, i) {
    let s;
    for (const r of e)
        if (((s = Bg(Db(r, t), n)), typeof s < 'u'))
            return Wu(t, s) ? Uu(n, i, t, s) : s;
}
function Bg(t, e) {
    for (const n of e) {
        if (!n) continue;
        const i = n[t];
        if (typeof i < 'u') return i;
    }
}
function Ah(t) {
    let e = t._keys;
    return e || (e = t._keys = Vb(t._scopes)), e;
}
function Vb(t) {
    const e = new Set();
    for (const n of t)
        for (const i of Object.keys(n).filter((s) => !s.startsWith('_')))
            e.add(i);
    return Array.from(e);
}
function Vg(t, e, n, i) {
    const { iScale: s } = t,
        { key: r = 'r' } = this._parsing,
        o = new Array(i);
    let a, l, c, u;
    for (a = 0, l = i; a < l; ++a)
        (c = a + n), (u = e[c]), (o[a] = { r: s.parse(Dn(u, r), c) });
    return o;
}
const $b = Number.EPSILON || 1e-14,
    Yi = (t, e) => e < t.length && !t[e].skip && t[e],
    $g = (t) => (t === 'x' ? 'y' : 'x');
function Hb(t, e, n, i) {
    const s = t.skip ? e : t,
        r = e,
        o = n.skip ? e : n,
        a = xc(r, s),
        l = xc(o, r);
    let c = a / (a + l),
        u = l / (a + l);
    (c = isNaN(c) ? 0 : c), (u = isNaN(u) ? 0 : u);
    const d = i * c,
        h = i * u;
    return {
        previous: { x: r.x - d * (o.x - s.x), y: r.y - d * (o.y - s.y) },
        next: { x: r.x + h * (o.x - s.x), y: r.y + h * (o.y - s.y) },
    };
}
function Wb(t, e, n) {
    const i = t.length;
    let s,
        r,
        o,
        a,
        l,
        c = Yi(t, 0);
    for (let u = 0; u < i - 1; ++u)
        if (((l = c), (c = Yi(t, u + 1)), !(!l || !c))) {
            if (Ds(e[u], 0, $b)) {
                n[u] = n[u + 1] = 0;
                continue;
            }
            (s = n[u] / e[u]),
                (r = n[u + 1] / e[u]),
                (a = Math.pow(s, 2) + Math.pow(r, 2)),
                !(a <= 9) &&
                    ((o = 3 / Math.sqrt(a)),
                    (n[u] = s * o * e[u]),
                    (n[u + 1] = r * o * e[u]));
        }
}
function Ub(t, e, n = 'x') {
    const i = $g(n),
        s = t.length;
    let r,
        o,
        a,
        l = Yi(t, 0);
    for (let c = 0; c < s; ++c) {
        if (((o = a), (a = l), (l = Yi(t, c + 1)), !a)) continue;
        const u = a[n],
            d = a[i];
        o &&
            ((r = (u - o[n]) / 3),
            (a[`cp1${n}`] = u - r),
            (a[`cp1${i}`] = d - r * e[c])),
            l &&
                ((r = (l[n] - u) / 3),
                (a[`cp2${n}`] = u + r),
                (a[`cp2${i}`] = d + r * e[c]));
    }
}
function Qb(t, e = 'x') {
    const n = $g(e),
        i = t.length,
        s = Array(i).fill(0),
        r = Array(i);
    let o,
        a,
        l,
        c = Yi(t, 0);
    for (o = 0; o < i; ++o)
        if (((a = l), (l = c), (c = Yi(t, o + 1)), !!l)) {
            if (c) {
                const u = c[e] - l[e];
                s[o] = u !== 0 ? (c[n] - l[n]) / u : 0;
            }
            r[o] = a
                ? c
                    ? zt(s[o - 1]) !== zt(s[o])
                        ? 0
                        : (s[o - 1] + s[o]) / 2
                    : s[o - 1]
                : s[o];
        }
    Wb(t, s, r), Ub(t, r, e);
}
function Hr(t, e, n) {
    return Math.max(Math.min(t, n), e);
}
function Yb(t, e) {
    let n,
        i,
        s,
        r,
        o,
        a = Jt(t[0], e);
    for (n = 0, i = t.length; n < i; ++n)
        (o = r),
            (r = a),
            (a = n < i - 1 && Jt(t[n + 1], e)),
            r &&
                ((s = t[n]),
                o &&
                    ((s.cp1x = Hr(s.cp1x, e.left, e.right)),
                    (s.cp1y = Hr(s.cp1y, e.top, e.bottom))),
                a &&
                    ((s.cp2x = Hr(s.cp2x, e.left, e.right)),
                    (s.cp2y = Hr(s.cp2y, e.top, e.bottom))));
}
function Xb(t, e, n, i, s) {
    let r, o, a, l;
    if (
        (e.spanGaps && (t = t.filter((c) => !c.skip)),
        e.cubicInterpolationMode === 'monotone')
    )
        Qb(t, s);
    else {
        let c = i ? t[t.length - 1] : t[0];
        for (r = 0, o = t.length; r < o; ++r)
            (a = t[r]),
                (l = Hb(
                    c,
                    a,
                    t[Math.min(r + 1, o - (i ? 0 : 1)) % o],
                    e.tension
                )),
                (a.cp1x = l.previous.x),
                (a.cp1y = l.previous.y),
                (a.cp2x = l.next.x),
                (a.cp2y = l.next.y),
                (c = a);
    }
    e.capBezierPoints && Yb(t, n);
}
function Qu() {
    return typeof window < 'u' && typeof document < 'u';
}
function Yu(t) {
    let e = t.parentNode;
    return e && e.toString() === '[object ShadowRoot]' && (e = e.host), e;
}
function na(t, e, n) {
    let i;
    return (
        typeof t == 'string'
            ? ((i = parseInt(t, 10)),
              t.indexOf('%') !== -1 && (i = (i / 100) * e.parentNode[n]))
            : (i = t),
        i
    );
}
const Ta = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
function Kb(t, e) {
    return Ta(t).getPropertyValue(e);
}
const qb = ['top', 'right', 'bottom', 'left'];
function ii(t, e, n) {
    const i = {};
    n = n ? '-' + n : '';
    for (let s = 0; s < 4; s++) {
        const r = qb[s];
        i[r] = parseFloat(t[e + '-' + r + n]) || 0;
    }
    return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const Gb = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);
function Jb(t, e) {
    const n = t.touches,
        i = n && n.length ? n[0] : t,
        { offsetX: s, offsetY: r } = i;
    let o = !1,
        a,
        l;
    if (Gb(s, r, t.target)) (a = s), (l = r);
    else {
        const c = e.getBoundingClientRect();
        (a = i.clientX - c.left), (l = i.clientY - c.top), (o = !0);
    }
    return { x: a, y: l, box: o };
}
function Qn(t, e) {
    if ('native' in t) return t;
    const { canvas: n, currentDevicePixelRatio: i } = e,
        s = Ta(n),
        r = s.boxSizing === 'border-box',
        o = ii(s, 'padding'),
        a = ii(s, 'border', 'width'),
        { x: l, y: c, box: u } = Jb(t, n),
        d = o.left + (u && a.left),
        h = o.top + (u && a.top);
    let { width: p, height: v } = e;
    return (
        r && ((p -= o.width + a.width), (v -= o.height + a.height)),
        {
            x: Math.round((((l - d) / p) * n.width) / i),
            y: Math.round((((c - h) / v) * n.height) / i),
        }
    );
}
function Zb(t, e, n) {
    let i, s;
    if (e === void 0 || n === void 0) {
        const r = Yu(t);
        if (!r) (e = t.clientWidth), (n = t.clientHeight);
        else {
            const o = r.getBoundingClientRect(),
                a = Ta(r),
                l = ii(a, 'border', 'width'),
                c = ii(a, 'padding');
            (e = o.width - c.width - l.width),
                (n = o.height - c.height - l.height),
                (i = na(a.maxWidth, r, 'clientWidth')),
                (s = na(a.maxHeight, r, 'clientHeight'));
        }
    }
    return { width: e, height: n, maxWidth: i || ea, maxHeight: s || ea };
}
const Wr = (t) => Math.round(t * 10) / 10;
function ew(t, e, n, i) {
    const s = Ta(t),
        r = ii(s, 'margin'),
        o = na(s.maxWidth, t, 'clientWidth') || ea,
        a = na(s.maxHeight, t, 'clientHeight') || ea,
        l = Zb(t, e, n);
    let { width: c, height: u } = l;
    if (s.boxSizing === 'content-box') {
        const h = ii(s, 'border', 'width'),
            p = ii(s, 'padding');
        (c -= p.width + h.width), (u -= p.height + h.height);
    }
    return (
        (c = Math.max(0, c - r.width)),
        (u = Math.max(0, i ? c / i : u - r.height)),
        (c = Wr(Math.min(c, o, l.maxWidth))),
        (u = Wr(Math.min(u, a, l.maxHeight))),
        c && !u && (u = Wr(c / 2)),
        (e !== void 0 || n !== void 0) &&
            i &&
            l.height &&
            u > l.height &&
            ((u = l.height), (c = Wr(Math.floor(u * i)))),
        { width: c, height: u }
    );
}
function Ih(t, e, n) {
    const i = e || 1,
        s = Math.floor(t.height * i),
        r = Math.floor(t.width * i);
    (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
    const o = t.canvas;
    return (
        o.style &&
            (n || (!o.style.height && !o.style.width)) &&
            ((o.style.height = `${t.height}px`),
            (o.style.width = `${t.width}px`)),
        t.currentDevicePixelRatio !== i || o.height !== s || o.width !== r
            ? ((t.currentDevicePixelRatio = i),
              (o.height = s),
              (o.width = r),
              t.ctx.setTransform(i, 0, 0, i, 0, 0),
              !0)
            : !1
    );
}
const tw = (function () {
    let t = !1;
    try {
        const e = {
            get passive() {
                return (t = !0), !1;
            },
        };
        Qu() &&
            (window.addEventListener('test', null, e),
            window.removeEventListener('test', null, e));
    } catch {}
    return t;
})();
function Fh(t, e) {
    const n = Kb(t, e),
        i = n && n.match(/^(\d+)(\.\d+)?px$/);
    return i ? +i[1] : void 0;
}
function Yn(t, e, n, i) {
    return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
}
function nw(t, e, n, i) {
    return {
        x: t.x + n * (e.x - t.x),
        y:
            i === 'middle'
                ? n < 0.5
                    ? t.y
                    : e.y
                : i === 'after'
                ? n < 1
                    ? t.y
                    : e.y
                : n > 0
                ? e.y
                : t.y,
    };
}
function iw(t, e, n, i) {
    const s = { x: t.cp2x, y: t.cp2y },
        r = { x: e.cp1x, y: e.cp1y },
        o = Yn(t, s, n),
        a = Yn(s, r, n),
        l = Yn(r, e, n),
        c = Yn(o, a, n),
        u = Yn(a, l, n);
    return Yn(c, u, n);
}
const sw = function (t, e) {
        return {
            x(n) {
                return t + t + e - n;
            },
            setWidth(n) {
                e = n;
            },
            textAlign(n) {
                return n === 'center' ? n : n === 'right' ? 'left' : 'right';
            },
            xPlus(n, i) {
                return n - i;
            },
            leftForLtr(n, i) {
                return n - i;
            },
        };
    },
    rw = function () {
        return {
            x(t) {
                return t;
            },
            setWidth(t) {},
            textAlign(t) {
                return t;
            },
            xPlus(t, e) {
                return t + e;
            },
            leftForLtr(t, e) {
                return t;
            },
        };
    };
function Ii(t, e, n) {
    return t ? sw(e, n) : rw();
}
function Hg(t, e) {
    let n, i;
    (e === 'ltr' || e === 'rtl') &&
        ((n = t.canvas.style),
        (i = [
            n.getPropertyValue('direction'),
            n.getPropertyPriority('direction'),
        ]),
        n.setProperty('direction', e, 'important'),
        (t.prevTextDirection = i));
}
function Wg(t, e) {
    e !== void 0 &&
        (delete t.prevTextDirection,
        t.canvas.style.setProperty('direction', e[0], e[1]));
}
function Ug(t) {
    return t === 'angle'
        ? { between: ar, compare: ob, normalize: st }
        : { between: qt, compare: (e, n) => e - n, normalize: (e) => e };
}
function zh({ start: t, end: e, count: n, loop: i, style: s }) {
    return {
        start: t % n,
        end: e % n,
        loop: i && (e - t + 1) % n === 0,
        style: s,
    };
}
function ow(t, e, n) {
    const { property: i, start: s, end: r } = n,
        { between: o, normalize: a } = Ug(i),
        l = e.length;
    let { start: c, end: u, loop: d } = t,
        h,
        p;
    if (d) {
        for (
            c += l, u += l, h = 0, p = l;
            h < p && o(a(e[c % l][i]), s, r);
            ++h
        )
            c--, u--;
        (c %= l), (u %= l);
    }
    return u < c && (u += l), { start: c, end: u, loop: d, style: t.style };
}
function Qg(t, e, n) {
    if (!n) return [t];
    const { property: i, start: s, end: r } = n,
        o = e.length,
        { compare: a, between: l, normalize: c } = Ug(i),
        { start: u, end: d, loop: h, style: p } = ow(t, e, n),
        v = [];
    let y = !1,
        _ = null,
        m,
        g,
        x;
    const b = () => l(s, x, m) && a(s, x) !== 0,
        w = () => a(r, m) === 0 || l(r, x, m),
        k = () => y || b(),
        S = () => !y || w();
    for (let M = u, T = u; M <= d; ++M)
        (g = e[M % o]),
            !g.skip &&
                ((m = c(g[i])),
                m !== x &&
                    ((y = l(m, s, r)),
                    _ === null && k() && (_ = a(m, s) === 0 ? M : T),
                    _ !== null &&
                        S() &&
                        (v.push(
                            zh({
                                start: _,
                                end: M,
                                loop: h,
                                count: o,
                                style: p,
                            })
                        ),
                        (_ = null)),
                    (T = M),
                    (x = m)));
    return (
        _ !== null &&
            v.push(zh({ start: _, end: d, loop: h, count: o, style: p })),
        v
    );
}
function Yg(t, e) {
    const n = [],
        i = t.segments;
    for (let s = 0; s < i.length; s++) {
        const r = Qg(i[s], t.points, e);
        r.length && n.push(...r);
    }
    return n;
}
function aw(t, e, n, i) {
    let s = 0,
        r = e - 1;
    if (n && !i) for (; s < e && !t[s].skip; ) s++;
    for (; s < e && t[s].skip; ) s++;
    for (s %= e, n && (r += s); r > s && t[r % e].skip; ) r--;
    return (r %= e), { start: s, end: r };
}
function lw(t, e, n, i) {
    const s = t.length,
        r = [];
    let o = e,
        a = t[e],
        l;
    for (l = e + 1; l <= n; ++l) {
        const c = t[l % s];
        c.skip || c.stop
            ? a.skip ||
              ((i = !1),
              r.push({ start: e % s, end: (l - 1) % s, loop: i }),
              (e = o = c.stop ? l : null))
            : ((o = l), a.skip && (e = l)),
            (a = c);
    }
    return o !== null && r.push({ start: e % s, end: o % s, loop: i }), r;
}
function cw(t, e) {
    const n = t.points,
        i = t.options.spanGaps,
        s = n.length;
    if (!s) return [];
    const r = !!t._loop,
        { start: o, end: a } = aw(n, s, r, i);
    if (i === !0) return Bh(t, [{ start: o, end: a, loop: r }], n, e);
    const l = a < o ? a + s : a,
        c = !!t._fullLoop && o === 0 && a === s - 1;
    return Bh(t, lw(n, o, l, c), n, e);
}
function Bh(t, e, n, i) {
    return !i || !i.setContext || !n ? e : uw(t, e, n, i);
}
function uw(t, e, n, i) {
    const s = t._chart.getContext(),
        r = Vh(t.options),
        {
            _datasetIndex: o,
            options: { spanGaps: a },
        } = t,
        l = n.length,
        c = [];
    let u = r,
        d = e[0].start,
        h = d;
    function p(v, y, _, m) {
        const g = a ? -1 : 1;
        if (v !== y) {
            for (v += l; n[v % l].skip; ) v -= g;
            for (; n[y % l].skip; ) y += g;
            v % l !== y % l &&
                (c.push({ start: v % l, end: y % l, loop: _, style: m }),
                (u = m),
                (d = y % l));
        }
    }
    for (const v of e) {
        d = a ? d : v.start;
        let y = n[d % l],
            _;
        for (h = d + 1; h <= v.end; h++) {
            const m = n[h % l];
            (_ = Vh(
                i.setContext(
                    zn(s, {
                        type: 'segment',
                        p0: y,
                        p1: m,
                        p0DataIndex: (h - 1) % l,
                        p1DataIndex: h % l,
                        datasetIndex: o,
                    })
                )
            )),
                dw(_, u) && p(d, h - 1, v.loop, u),
                (y = m),
                (u = _);
        }
        d < h - 1 && p(d, h - 1, v.loop, u);
    }
    return c;
}
function Vh(t) {
    return {
        backgroundColor: t.backgroundColor,
        borderCapStyle: t.borderCapStyle,
        borderDash: t.borderDash,
        borderDashOffset: t.borderDashOffset,
        borderJoinStyle: t.borderJoinStyle,
        borderWidth: t.borderWidth,
        borderColor: t.borderColor,
    };
}
function dw(t, e) {
    if (!e) return !1;
    const n = [],
        i = function (s, r) {
            return Vu(r) ? (n.includes(r) || n.push(r), n.indexOf(r)) : r;
        };
    return JSON.stringify(t, i) !== JSON.stringify(e, i);
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ class hw {
    constructor() {
        (this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0);
    }
    _notify(e, n, i, s) {
        const r = n.listeners[s],
            o = n.duration;
        r.forEach((a) =>
            a({
                chart: e,
                initial: n.initial,
                numSteps: o,
                currentStep: Math.min(i - n.start, o),
            })
        );
    }
    _refresh() {
        this._request ||
            ((this._running = !0),
            (this._request = jg.call(window, () => {
                this._update(),
                    (this._request = null),
                    this._running && this._refresh();
            })));
    }
    _update(e = Date.now()) {
        let n = 0;
        this._charts.forEach((i, s) => {
            if (!i.running || !i.items.length) return;
            const r = i.items;
            let o = r.length - 1,
                a = !1,
                l;
            for (; o >= 0; --o)
                (l = r[o]),
                    l._active
                        ? (l._total > i.duration && (i.duration = l._total),
                          l.tick(e),
                          (a = !0))
                        : ((r[o] = r[r.length - 1]), r.pop());
            a && (s.draw(), this._notify(s, i, e, 'progress')),
                r.length ||
                    ((i.running = !1),
                    this._notify(s, i, e, 'complete'),
                    (i.initial = !1)),
                (n += r.length);
        }),
            (this._lastDate = e),
            n === 0 && (this._running = !1);
    }
    _getAnims(e) {
        const n = this._charts;
        let i = n.get(e);
        return (
            i ||
                ((i = {
                    running: !1,
                    initial: !0,
                    items: [],
                    listeners: { complete: [], progress: [] },
                }),
                n.set(e, i)),
            i
        );
    }
    listen(e, n, i) {
        this._getAnims(e).listeners[n].push(i);
    }
    add(e, n) {
        !n || !n.length || this._getAnims(e).items.push(...n);
    }
    has(e) {
        return this._getAnims(e).items.length > 0;
    }
    start(e) {
        const n = this._charts.get(e);
        n &&
            ((n.running = !0),
            (n.start = Date.now()),
            (n.duration = n.items.reduce(
                (i, s) => Math.max(i, s._duration),
                0
            )),
            this._refresh());
    }
    running(e) {
        if (!this._running) return !1;
        const n = this._charts.get(e);
        return !(!n || !n.running || !n.items.length);
    }
    stop(e) {
        const n = this._charts.get(e);
        if (!n || !n.items.length) return;
        const i = n.items;
        let s = i.length - 1;
        for (; s >= 0; --s) i[s].cancel();
        (n.items = []), this._notify(e, n, Date.now(), 'complete');
    }
    remove(e) {
        return this._charts.delete(e);
    }
}
var $t = new hw();
const $h = 'transparent',
    fw = {
        boolean(t, e, n) {
            return n > 0.5 ? e : t;
        },
        color(t, e, n) {
            const i = Nh(t || $h),
                s = i.valid && Nh(e || $h);
            return s && s.valid ? s.mix(i, n).hexString() : e;
        },
        number(t, e, n) {
            return t + (e - t) * n;
        },
    };
class pw {
    constructor(e, n, i, s) {
        const r = n[i];
        s = ys([e.to, s, r, e.from]);
        const o = ys([e.from, r, s]);
        (this._active = !0),
            (this._fn = e.fn || fw[e.type || typeof o]),
            (this._easing = Ls[e.easing] || Ls.linear),
            (this._start = Math.floor(Date.now() + (e.delay || 0))),
            (this._duration = this._total = Math.floor(e.duration)),
            (this._loop = !!e.loop),
            (this._target = n),
            (this._prop = i),
            (this._from = o),
            (this._to = s),
            (this._promises = void 0);
    }
    active() {
        return this._active;
    }
    update(e, n, i) {
        if (this._active) {
            this._notify(!1);
            const s = this._target[this._prop],
                r = i - this._start,
                o = this._duration - r;
            (this._start = i),
                (this._duration = Math.floor(Math.max(o, e.duration))),
                (this._total += r),
                (this._loop = !!e.loop),
                (this._to = ys([e.to, n, s, e.from])),
                (this._from = ys([e.from, s, n]));
        }
    }
    cancel() {
        this._active &&
            (this.tick(Date.now()), (this._active = !1), this._notify(!1));
    }
    tick(e) {
        const n = e - this._start,
            i = this._duration,
            s = this._prop,
            r = this._from,
            o = this._loop,
            a = this._to;
        let l;
        if (((this._active = r !== a && (o || n < i)), !this._active)) {
            (this._target[s] = a), this._notify(!0);
            return;
        }
        if (n < 0) {
            this._target[s] = r;
            return;
        }
        (l = (n / i) % 2),
            (l = o && l > 1 ? 2 - l : l),
            (l = this._easing(Math.min(1, Math.max(0, l)))),
            (this._target[s] = this._fn(r, a, l));
    }
    wait() {
        const e = this._promises || (this._promises = []);
        return new Promise((n, i) => {
            e.push({ res: n, rej: i });
        });
    }
    _notify(e) {
        const n = e ? 'res' : 'rej',
            i = this._promises || [];
        for (let s = 0; s < i.length; s++) i[s][n]();
    }
}
class Xg {
    constructor(e, n) {
        (this._chart = e), (this._properties = new Map()), this.configure(n);
    }
    configure(e) {
        if (!H(e)) return;
        const n = Object.keys(ye.animation),
            i = this._properties;
        Object.getOwnPropertyNames(e).forEach((s) => {
            const r = e[s];
            if (!H(r)) return;
            const o = {};
            for (const a of n) o[a] = r[a];
            ((oe(r.properties) && r.properties) || [s]).forEach((a) => {
                (a === s || !i.has(a)) && i.set(a, o);
            });
        });
    }
    _animateOptions(e, n) {
        const i = n.options,
            s = gw(e, i);
        if (!s) return [];
        const r = this._createAnimations(s, i);
        return (
            i.$shared &&
                mw(e.options.$animations, i).then(
                    () => {
                        e.options = i;
                    },
                    () => {}
                ),
            r
        );
    }
    _createAnimations(e, n) {
        const i = this._properties,
            s = [],
            r = e.$animations || (e.$animations = {}),
            o = Object.keys(n),
            a = Date.now();
        let l;
        for (l = o.length - 1; l >= 0; --l) {
            const c = o[l];
            if (c.charAt(0) === '$') continue;
            if (c === 'options') {
                s.push(...this._animateOptions(e, n));
                continue;
            }
            const u = n[c];
            let d = r[c];
            const h = i.get(c);
            if (d)
                if (h && d.active()) {
                    d.update(h, u, a);
                    continue;
                } else d.cancel();
            if (!h || !h.duration) {
                e[c] = u;
                continue;
            }
            (r[c] = d = new pw(h, e, c, u)), s.push(d);
        }
        return s;
    }
    update(e, n) {
        if (this._properties.size === 0) {
            Object.assign(e, n);
            return;
        }
        const i = this._createAnimations(e, n);
        if (i.length) return $t.add(this._chart, i), !0;
    }
}
function mw(t, e) {
    const n = [],
        i = Object.keys(e);
    for (let s = 0; s < i.length; s++) {
        const r = t[i[s]];
        r && r.active() && n.push(r.wait());
    }
    return Promise.all(n);
}
function gw(t, e) {
    if (!e) return;
    let n = t.options;
    if (!n) {
        t.options = e;
        return;
    }
    return (
        n.$shared &&
            (t.options = n =
                Object.assign({}, n, { $shared: !1, $animations: {} })),
        n
    );
}
function Hh(t, e) {
    const n = (t && t.options) || {},
        i = n.reverse,
        s = n.min === void 0 ? e : 0,
        r = n.max === void 0 ? e : 0;
    return { start: i ? r : s, end: i ? s : r };
}
function yw(t, e, n) {
    if (n === !1) return !1;
    const i = Hh(t, n),
        s = Hh(e, n);
    return { top: s.end, right: i.end, bottom: s.start, left: i.start };
}
function vw(t) {
    let e, n, i, s;
    return (
        H(t)
            ? ((e = t.top), (n = t.right), (i = t.bottom), (s = t.left))
            : (e = n = i = s = t),
        { top: e, right: n, bottom: i, left: s, disabled: t === !1 }
    );
}
function Kg(t, e) {
    const n = [],
        i = t._getSortedDatasetMetas(e);
    let s, r;
    for (s = 0, r = i.length; s < r; ++s) n.push(i[s].index);
    return n;
}
function Wh(t, e, n, i = {}) {
    const s = t.keys,
        r = i.mode === 'single';
    let o, a, l, c;
    if (e !== null) {
        for (o = 0, a = s.length; o < a; ++o) {
            if (((l = +s[o]), l === n)) {
                if (i.all) continue;
                break;
            }
            (c = t.values[l]),
                ge(c) && (r || e === 0 || zt(e) === zt(c)) && (e += c);
        }
        return e;
    }
}
function xw(t) {
    const e = Object.keys(t),
        n = new Array(e.length);
    let i, s, r;
    for (i = 0, s = e.length; i < s; ++i)
        (r = e[i]), (n[i] = { x: r, y: t[r] });
    return n;
}
function Uh(t, e) {
    const n = t && t.options.stacked;
    return n || (n === void 0 && e.stack !== void 0);
}
function _w(t, e, n) {
    return `${t.id}.${e.id}.${n.stack || n.type}`;
}
function bw(t) {
    const { min: e, max: n, minDefined: i, maxDefined: s } = t.getUserBounds();
    return {
        min: i ? e : Number.NEGATIVE_INFINITY,
        max: s ? n : Number.POSITIVE_INFINITY,
    };
}
function ww(t, e, n) {
    const i = t[e] || (t[e] = {});
    return i[n] || (i[n] = {});
}
function Qh(t, e, n, i) {
    for (const s of e.getMatchingVisibleMetas(i).reverse()) {
        const r = t[s.index];
        if ((n && r > 0) || (!n && r < 0)) return s.index;
    }
    return null;
}
function Yh(t, e) {
    const { chart: n, _cachedMeta: i } = t,
        s = n._stacks || (n._stacks = {}),
        { iScale: r, vScale: o, index: a } = i,
        l = r.axis,
        c = o.axis,
        u = _w(r, o, i),
        d = e.length;
    let h;
    for (let p = 0; p < d; ++p) {
        const v = e[p],
            { [l]: y, [c]: _ } = v,
            m = v._stacks || (v._stacks = {});
        (h = m[c] = ww(s, u, y)),
            (h[a] = _),
            (h._top = Qh(h, o, !0, i.type)),
            (h._bottom = Qh(h, o, !1, i.type));
        const g = h._visualValues || (h._visualValues = {});
        g[a] = _;
    }
}
function cl(t, e) {
    const n = t.scales;
    return Object.keys(n)
        .filter((i) => n[i].axis === e)
        .shift();
}
function Sw(t, e) {
    return zn(t, {
        active: !1,
        dataset: void 0,
        datasetIndex: e,
        index: e,
        mode: 'default',
        type: 'dataset',
    });
}
function kw(t, e, n) {
    return zn(t, {
        active: !1,
        dataIndex: e,
        parsed: void 0,
        raw: void 0,
        element: n,
        index: e,
        mode: 'default',
        type: 'data',
    });
}
function as(t, e) {
    const n = t.controller.index,
        i = t.vScale && t.vScale.axis;
    if (i) {
        e = e || t._parsed;
        for (const s of e) {
            const r = s._stacks;
            if (!r || r[i] === void 0 || r[i][n] === void 0) return;
            delete r[i][n],
                r[i]._visualValues !== void 0 &&
                    r[i]._visualValues[n] !== void 0 &&
                    delete r[i]._visualValues[n];
        }
    }
}
const ul = (t) => t === 'reset' || t === 'none',
    Xh = (t, e) => (e ? t : Object.assign({}, t)),
    Cw = (t, e, n) =>
        t && !e.hidden && e._stacked && { keys: Kg(n, !0), values: null };
class Mt {
    constructor(e, n) {
        (this.chart = e),
            (this._ctx = e.ctx),
            (this.index = n),
            (this._cachedDataOpts = {}),
            (this._cachedMeta = this.getMeta()),
            (this._type = this._cachedMeta.type),
            (this.options = void 0),
            (this._parsing = !1),
            (this._data = void 0),
            (this._objectData = void 0),
            (this._sharedOptions = void 0),
            (this._drawStart = void 0),
            (this._drawCount = void 0),
            (this.enableOptionSharing = !1),
            (this.supportsDecimation = !1),
            (this.$context = void 0),
            (this._syncList = []),
            (this.datasetElementType = new.target.datasetElementType),
            (this.dataElementType = new.target.dataElementType),
            this.initialize();
    }
    initialize() {
        const e = this._cachedMeta;
        this.configure(),
            this.linkScales(),
            (e._stacked = Uh(e.vScale, e)),
            this.addElements(),
            this.options.fill &&
                !this.chart.isPluginEnabled('filler') &&
                console.warn(
                    "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
                );
    }
    updateIndex(e) {
        this.index !== e && as(this._cachedMeta), (this.index = e);
    }
    linkScales() {
        const e = this.chart,
            n = this._cachedMeta,
            i = this.getDataset(),
            s = (d, h, p, v) => (d === 'x' ? h : d === 'r' ? v : p),
            r = (n.xAxisID = V(i.xAxisID, cl(e, 'x'))),
            o = (n.yAxisID = V(i.yAxisID, cl(e, 'y'))),
            a = (n.rAxisID = V(i.rAxisID, cl(e, 'r'))),
            l = n.indexAxis,
            c = (n.iAxisID = s(l, r, o, a)),
            u = (n.vAxisID = s(l, o, r, a));
        (n.xScale = this.getScaleForId(r)),
            (n.yScale = this.getScaleForId(o)),
            (n.rScale = this.getScaleForId(a)),
            (n.iScale = this.getScaleForId(c)),
            (n.vScale = this.getScaleForId(u));
    }
    getDataset() {
        return this.chart.data.datasets[this.index];
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(e) {
        return this.chart.scales[e];
    }
    _getOtherScale(e) {
        const n = this._cachedMeta;
        return e === n.iScale ? n.vScale : n.iScale;
    }
    reset() {
        this._update('reset');
    }
    _destroy() {
        const e = this._cachedMeta;
        this._data && Th(this._data, this), e._stacked && as(e);
    }
    _dataCheck() {
        const e = this.getDataset(),
            n = e.data || (e.data = []),
            i = this._data;
        if (H(n)) this._data = xw(n);
        else if (i !== n) {
            if (i) {
                Th(i, this);
                const s = this._cachedMeta;
                as(s), (s._parsed = []);
            }
            n && Object.isExtensible(n) && ub(n, this),
                (this._syncList = []),
                (this._data = n);
        }
    }
    addElements() {
        const e = this._cachedMeta;
        this._dataCheck(),
            this.datasetElementType &&
                (e.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(e) {
        const n = this._cachedMeta,
            i = this.getDataset();
        let s = !1;
        this._dataCheck();
        const r = n._stacked;
        (n._stacked = Uh(n.vScale, n)),
            n.stack !== i.stack && ((s = !0), as(n), (n.stack = i.stack)),
            this._resyncElements(e),
            (s || r !== n._stacked) && Yh(this, n._parsed);
    }
    configure() {
        const e = this.chart.config,
            n = e.datasetScopeKeys(this._type),
            i = e.getOptionScopes(this.getDataset(), n, !0);
        (this.options = e.createResolver(i, this.getContext())),
            (this._parsing = this.options.parsing),
            (this._cachedDataOpts = {});
    }
    parse(e, n) {
        const { _cachedMeta: i, _data: s } = this,
            { iScale: r, _stacked: o } = i,
            a = r.axis;
        let l = e === 0 && n === s.length ? !0 : i._sorted,
            c = e > 0 && i._parsed[e - 1],
            u,
            d,
            h;
        if (this._parsing === !1) (i._parsed = s), (i._sorted = !0), (h = s);
        else {
            oe(s[e])
                ? (h = this.parseArrayData(i, s, e, n))
                : H(s[e])
                ? (h = this.parseObjectData(i, s, e, n))
                : (h = this.parsePrimitiveData(i, s, e, n));
            const p = () => d[a] === null || (c && d[a] < c[a]);
            for (u = 0; u < n; ++u)
                (i._parsed[u + e] = d = h[u]), l && (p() && (l = !1), (c = d));
            i._sorted = l;
        }
        o && Yh(this, h);
    }
    parsePrimitiveData(e, n, i, s) {
        const { iScale: r, vScale: o } = e,
            a = r.axis,
            l = o.axis,
            c = r.getLabels(),
            u = r === o,
            d = new Array(s);
        let h, p, v;
        for (h = 0, p = s; h < p; ++h)
            (v = h + i),
                (d[h] = { [a]: u || r.parse(c[v], v), [l]: o.parse(n[v], v) });
        return d;
    }
    parseArrayData(e, n, i, s) {
        const { xScale: r, yScale: o } = e,
            a = new Array(s);
        let l, c, u, d;
        for (l = 0, c = s; l < c; ++l)
            (u = l + i),
                (d = n[u]),
                (a[l] = { x: r.parse(d[0], u), y: o.parse(d[1], u) });
        return a;
    }
    parseObjectData(e, n, i, s) {
        const { xScale: r, yScale: o } = e,
            { xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
            c = new Array(s);
        let u, d, h, p;
        for (u = 0, d = s; u < d; ++u)
            (h = u + i),
                (p = n[h]),
                (c[u] = { x: r.parse(Dn(p, a), h), y: o.parse(Dn(p, l), h) });
        return c;
    }
    getParsed(e) {
        return this._cachedMeta._parsed[e];
    }
    getDataElement(e) {
        return this._cachedMeta.data[e];
    }
    applyStack(e, n, i) {
        const s = this.chart,
            r = this._cachedMeta,
            o = n[e.axis],
            a = { keys: Kg(s, !0), values: n._stacks[e.axis]._visualValues };
        return Wh(a, o, r.index, { mode: i });
    }
    updateRangeFromParsed(e, n, i, s) {
        const r = i[n.axis];
        let o = r === null ? NaN : r;
        const a = s && i._stacks[n.axis];
        s && a && ((s.values = a), (o = Wh(s, r, this._cachedMeta.index))),
            (e.min = Math.min(e.min, o)),
            (e.max = Math.max(e.max, o));
    }
    getMinMax(e, n) {
        const i = this._cachedMeta,
            s = i._parsed,
            r = i._sorted && e === i.iScale,
            o = s.length,
            a = this._getOtherScale(e),
            l = Cw(n, i, this.chart),
            c = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
            },
            { min: u, max: d } = bw(a);
        let h, p;
        function v() {
            p = s[h];
            const y = p[a.axis];
            return !ge(p[e.axis]) || u > y || d < y;
        }
        for (
            h = 0;
            h < o && !(!v() && (this.updateRangeFromParsed(c, e, p, l), r));
            ++h
        );
        if (r) {
            for (h = o - 1; h >= 0; --h)
                if (!v()) {
                    this.updateRangeFromParsed(c, e, p, l);
                    break;
                }
        }
        return c;
    }
    getAllParsedValues(e) {
        const n = this._cachedMeta._parsed,
            i = [];
        let s, r, o;
        for (s = 0, r = n.length; s < r; ++s)
            (o = n[s][e.axis]), ge(o) && i.push(o);
        return i;
    }
    getMaxOverflow() {
        return !1;
    }
    getLabelAndValue(e) {
        const n = this._cachedMeta,
            i = n.iScale,
            s = n.vScale,
            r = this.getParsed(e);
        return {
            label: i ? '' + i.getLabelForValue(r[i.axis]) : '',
            value: s ? '' + s.getLabelForValue(r[s.axis]) : '',
        };
    }
    _update(e) {
        const n = this._cachedMeta;
        this.update(e || 'default'),
            (n._clip = vw(
                V(
                    this.options.clip,
                    yw(n.xScale, n.yScale, this.getMaxOverflow())
                )
            ));
    }
    update(e) {}
    draw() {
        const e = this._ctx,
            n = this.chart,
            i = this._cachedMeta,
            s = i.data || [],
            r = n.chartArea,
            o = [],
            a = this._drawStart || 0,
            l = this._drawCount || s.length - a,
            c = this.options.drawActiveElementsOnTop;
        let u;
        for (i.dataset && i.dataset.draw(e, r, a, l), u = a; u < a + l; ++u) {
            const d = s[u];
            d.hidden || (d.active && c ? o.push(d) : d.draw(e, r));
        }
        for (u = 0; u < o.length; ++u) o[u].draw(e, r);
    }
    getStyle(e, n) {
        const i = n ? 'active' : 'default';
        return e === void 0 && this._cachedMeta.dataset
            ? this.resolveDatasetElementOptions(i)
            : this.resolveDataElementOptions(e || 0, i);
    }
    getContext(e, n, i) {
        const s = this.getDataset();
        let r;
        if (e >= 0 && e < this._cachedMeta.data.length) {
            const o = this._cachedMeta.data[e];
            (r = o.$context || (o.$context = kw(this.getContext(), e, o))),
                (r.parsed = this.getParsed(e)),
                (r.raw = s.data[e]),
                (r.index = r.dataIndex = e);
        } else
            (r =
                this.$context ||
                (this.$context = Sw(this.chart.getContext(), this.index))),
                (r.dataset = s),
                (r.index = r.datasetIndex = this.index);
        return (r.active = !!n), (r.mode = i), r;
    }
    resolveDatasetElementOptions(e) {
        return this._resolveElementOptions(this.datasetElementType.id, e);
    }
    resolveDataElementOptions(e, n) {
        return this._resolveElementOptions(this.dataElementType.id, n, e);
    }
    _resolveElementOptions(e, n = 'default', i) {
        const s = n === 'active',
            r = this._cachedDataOpts,
            o = e + '-' + n,
            a = r[o],
            l = this.enableOptionSharing && or(i);
        if (a) return Xh(a, l);
        const c = this.chart.config,
            u = c.datasetElementScopeKeys(this._type, e),
            d = s ? [`${e}Hover`, 'hover', e, ''] : [e, ''],
            h = c.getOptionScopes(this.getDataset(), u),
            p = Object.keys(ye.elements[e]),
            v = () => this.getContext(i, s, n),
            y = c.resolveNamedOptions(h, p, v, d);
        return (
            y.$shared && ((y.$shared = l), (r[o] = Object.freeze(Xh(y, l)))), y
        );
    }
    _resolveAnimations(e, n, i) {
        const s = this.chart,
            r = this._cachedDataOpts,
            o = `animation-${n}`,
            a = r[o];
        if (a) return a;
        let l;
        if (s.options.animation !== !1) {
            const u = this.chart.config,
                d = u.datasetAnimationScopeKeys(this._type, n),
                h = u.getOptionScopes(this.getDataset(), d);
            l = u.createResolver(h, this.getContext(e, i, n));
        }
        const c = new Xg(s, l && l.animations);
        return l && l._cacheable && (r[o] = Object.freeze(c)), c;
    }
    getSharedOptions(e) {
        if (e.$shared)
            return (
                this._sharedOptions ||
                (this._sharedOptions = Object.assign({}, e))
            );
    }
    includeOptions(e, n) {
        return !n || ul(e) || this.chart._animationsDisabled;
    }
    _getSharedOptions(e, n) {
        const i = this.resolveDataElementOptions(e, n),
            s = this._sharedOptions,
            r = this.getSharedOptions(i),
            o = this.includeOptions(n, r) || r !== s;
        return (
            this.updateSharedOptions(r, n, i),
            { sharedOptions: r, includeOptions: o }
        );
    }
    updateElement(e, n, i, s) {
        ul(s)
            ? Object.assign(e, i)
            : this._resolveAnimations(n, s).update(e, i);
    }
    updateSharedOptions(e, n, i) {
        e && !ul(n) && this._resolveAnimations(void 0, n).update(e, i);
    }
    _setStyle(e, n, i, s) {
        e.active = s;
        const r = this.getStyle(n, s);
        this._resolveAnimations(n, i, s).update(e, {
            options: (!s && this.getSharedOptions(r)) || r,
        });
    }
    removeHoverStyle(e, n, i) {
        this._setStyle(e, i, 'active', !1);
    }
    setHoverStyle(e, n, i) {
        this._setStyle(e, i, 'active', !0);
    }
    _removeDatasetHoverStyle() {
        const e = this._cachedMeta.dataset;
        e && this._setStyle(e, void 0, 'active', !1);
    }
    _setDatasetHoverStyle() {
        const e = this._cachedMeta.dataset;
        e && this._setStyle(e, void 0, 'active', !0);
    }
    _resyncElements(e) {
        const n = this._data,
            i = this._cachedMeta.data;
        for (const [a, l, c] of this._syncList) this[a](l, c);
        this._syncList = [];
        const s = i.length,
            r = n.length,
            o = Math.min(r, s);
        o && this.parse(0, o),
            r > s
                ? this._insertElements(s, r - s, e)
                : r < s && this._removeElements(r, s - r);
    }
    _insertElements(e, n, i = !0) {
        const s = this._cachedMeta,
            r = s.data,
            o = e + n;
        let a;
        const l = (c) => {
            for (c.length += n, a = c.length - 1; a >= o; a--) c[a] = c[a - n];
        };
        for (l(r), a = e; a < o; ++a) r[a] = new this.dataElementType();
        this._parsing && l(s._parsed),
            this.parse(e, n),
            i && this.updateElements(r, e, n, 'reset');
    }
    updateElements(e, n, i, s) {}
    _removeElements(e, n) {
        const i = this._cachedMeta;
        if (this._parsing) {
            const s = i._parsed.splice(e, n);
            i._stacked && as(i, s);
        }
        i.data.splice(e, n);
    }
    _sync(e) {
        if (this._parsing) this._syncList.push(e);
        else {
            const [n, i, s] = e;
            this[n](i, s);
        }
        this.chart._dataChanges.push([this.index, ...e]);
    }
    _onDataPush() {
        const e = arguments.length;
        this._sync(['_insertElements', this.getDataset().data.length - e, e]);
    }
    _onDataPop() {
        this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
        this._sync(['_removeElements', 0, 1]);
    }
    _onDataSplice(e, n) {
        n && this._sync(['_removeElements', e, n]);
        const i = arguments.length - 2;
        i && this._sync(['_insertElements', e, i]);
    }
    _onDataUnshift() {
        this._sync(['_insertElements', 0, arguments.length]);
    }
}
O(Mt, 'defaults', {}),
    O(Mt, 'datasetElementType', null),
    O(Mt, 'dataElementType', null);
function Mw(t, e) {
    if (!t._cache.$bar) {
        const n = t.getMatchingVisibleMetas(e);
        let i = [];
        for (let s = 0, r = n.length; s < r; s++)
            i = i.concat(n[s].controller.getAllParsedValues(t));
        t._cache.$bar = Tg(i.sort((s, r) => s - r));
    }
    return t._cache.$bar;
}
function Pw(t) {
    const e = t.iScale,
        n = Mw(e, t.type);
    let i = e._length,
        s,
        r,
        o,
        a;
    const l = () => {
        o === 32767 ||
            o === -32768 ||
            (or(a) && (i = Math.min(i, Math.abs(o - a) || i)), (a = o));
    };
    for (s = 0, r = n.length; s < r; ++s) (o = e.getPixelForValue(n[s])), l();
    for (a = void 0, s = 0, r = e.ticks.length; s < r; ++s)
        (o = e.getPixelForTick(s)), l();
    return i;
}
function Ew(t, e, n, i) {
    const s = n.barThickness;
    let r, o;
    return (
        X(s)
            ? ((r = e.min * n.categoryPercentage), (o = n.barPercentage))
            : ((r = s * i), (o = 1)),
        { chunk: r / i, ratio: o, start: e.pixels[t] - r / 2 }
    );
}
function Tw(t, e, n, i) {
    const s = e.pixels,
        r = s[t];
    let o = t > 0 ? s[t - 1] : null,
        a = t < s.length - 1 ? s[t + 1] : null;
    const l = n.categoryPercentage;
    o === null && (o = r - (a === null ? e.end - e.start : a - r)),
        a === null && (a = r + r - o);
    const c = r - ((r - Math.min(o, a)) / 2) * l;
    return {
        chunk: ((Math.abs(a - o) / 2) * l) / i,
        ratio: n.barPercentage,
        start: c,
    };
}
function jw(t, e, n, i) {
    const s = n.parse(t[0], i),
        r = n.parse(t[1], i),
        o = Math.min(s, r),
        a = Math.max(s, r);
    let l = o,
        c = a;
    Math.abs(o) > Math.abs(a) && ((l = a), (c = o)),
        (e[n.axis] = c),
        (e._custom = {
            barStart: l,
            barEnd: c,
            start: s,
            end: r,
            min: o,
            max: a,
        });
}
function qg(t, e, n, i) {
    return oe(t) ? jw(t, e, n, i) : (e[n.axis] = n.parse(t, i)), e;
}
function Kh(t, e, n, i) {
    const s = t.iScale,
        r = t.vScale,
        o = s.getLabels(),
        a = s === r,
        l = [];
    let c, u, d, h;
    for (c = n, u = n + i; c < u; ++c)
        (h = e[c]),
            (d = {}),
            (d[s.axis] = a || s.parse(o[c], c)),
            l.push(qg(h, d, r, c));
    return l;
}
function dl(t) {
    return t && t.barStart !== void 0 && t.barEnd !== void 0;
}
function Ow(t, e, n) {
    return t !== 0
        ? zt(t)
        : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1);
}
function Nw(t) {
    let e, n, i, s, r;
    return (
        t.horizontal
            ? ((e = t.base > t.x), (n = 'left'), (i = 'right'))
            : ((e = t.base < t.y), (n = 'bottom'), (i = 'top')),
        e ? ((s = 'end'), (r = 'start')) : ((s = 'start'), (r = 'end')),
        { start: n, end: i, reverse: e, top: s, bottom: r }
    );
}
function Dw(t, e, n, i) {
    let s = e.borderSkipped;
    const r = {};
    if (!s) {
        t.borderSkipped = r;
        return;
    }
    if (s === !0) {
        t.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
        return;
    }
    const { start: o, end: a, reverse: l, top: c, bottom: u } = Nw(t);
    s === 'middle' &&
        n &&
        ((t.enableBorderRadius = !0),
        (n._top || 0) === i
            ? (s = c)
            : (n._bottom || 0) === i
            ? (s = u)
            : ((r[qh(u, o, a, l)] = !0), (s = c))),
        (r[qh(s, o, a, l)] = !0),
        (t.borderSkipped = r);
}
function qh(t, e, n, i) {
    return i ? ((t = Lw(t, e, n)), (t = Gh(t, n, e))) : (t = Gh(t, e, n)), t;
}
function Lw(t, e, n) {
    return t === e ? n : t === n ? e : t;
}
function Gh(t, e, n) {
    return t === 'start' ? e : t === 'end' ? n : t;
}
function Rw(t, { inflateAmount: e }, n) {
    t.inflateAmount = e === 'auto' ? (n === 1 ? 0.33 : 0) : e;
}
class yo extends Mt {
    parsePrimitiveData(e, n, i, s) {
        return Kh(e, n, i, s);
    }
    parseArrayData(e, n, i, s) {
        return Kh(e, n, i, s);
    }
    parseObjectData(e, n, i, s) {
        const { iScale: r, vScale: o } = e,
            { xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
            c = r.axis === 'x' ? a : l,
            u = o.axis === 'x' ? a : l,
            d = [];
        let h, p, v, y;
        for (h = i, p = i + s; h < p; ++h)
            (y = n[h]),
                (v = {}),
                (v[r.axis] = r.parse(Dn(y, c), h)),
                d.push(qg(Dn(y, u), v, o, h));
        return d;
    }
    updateRangeFromParsed(e, n, i, s) {
        super.updateRangeFromParsed(e, n, i, s);
        const r = i._custom;
        r &&
            n === this._cachedMeta.vScale &&
            ((e.min = Math.min(e.min, r.min)),
            (e.max = Math.max(e.max, r.max)));
    }
    getMaxOverflow() {
        return 0;
    }
    getLabelAndValue(e) {
        const n = this._cachedMeta,
            { iScale: i, vScale: s } = n,
            r = this.getParsed(e),
            o = r._custom,
            a = dl(o)
                ? '[' + o.start + ', ' + o.end + ']'
                : '' + s.getLabelForValue(r[s.axis]);
        return { label: '' + i.getLabelForValue(r[i.axis]), value: a };
    }
    initialize() {
        (this.enableOptionSharing = !0), super.initialize();
        const e = this._cachedMeta;
        e.stack = this.getDataset().stack;
    }
    update(e) {
        const n = this._cachedMeta;
        this.updateElements(n.data, 0, n.data.length, e);
    }
    updateElements(e, n, i, s) {
        const r = s === 'reset',
            {
                index: o,
                _cachedMeta: { vScale: a },
            } = this,
            l = a.getBasePixel(),
            c = a.isHorizontal(),
            u = this._getRuler(),
            { sharedOptions: d, includeOptions: h } = this._getSharedOptions(
                n,
                s
            );
        for (let p = n; p < n + i; p++) {
            const v = this.getParsed(p),
                y =
                    r || X(v[a.axis])
                        ? { base: l, head: l }
                        : this._calculateBarValuePixels(p),
                _ = this._calculateBarIndexPixels(p, u),
                m = (v._stacks || {})[a.axis],
                g = {
                    horizontal: c,
                    base: y.base,
                    enableBorderRadius:
                        !m || dl(v._custom) || o === m._top || o === m._bottom,
                    x: c ? y.head : _.center,
                    y: c ? _.center : y.head,
                    height: c ? _.size : Math.abs(y.size),
                    width: c ? Math.abs(y.size) : _.size,
                };
            h &&
                (g.options =
                    d ||
                    this.resolveDataElementOptions(
                        p,
                        e[p].active ? 'active' : s
                    ));
            const x = g.options || e[p].options;
            Dw(g, x, m, o),
                Rw(g, x, u.ratio),
                this.updateElement(e[p], p, g, s);
        }
    }
    _getStacks(e, n) {
        const { iScale: i } = this._cachedMeta,
            s = i
                .getMatchingVisibleMetas(this._type)
                .filter((l) => l.controller.options.grouped),
            r = i.options.stacked,
            o = [],
            a = (l) => {
                const c = l.controller.getParsed(n),
                    u = c && c[l.vScale.axis];
                if (X(u) || isNaN(u)) return !0;
            };
        for (const l of s)
            if (
                !(n !== void 0 && a(l)) &&
                ((r === !1 ||
                    o.indexOf(l.stack) === -1 ||
                    (r === void 0 && l.stack === void 0)) &&
                    o.push(l.stack),
                l.index === e)
            )
                break;
        return o.length || o.push(void 0), o;
    }
    _getStackCount(e) {
        return this._getStacks(void 0, e).length;
    }
    _getStackIndex(e, n, i) {
        const s = this._getStacks(e, i),
            r = n !== void 0 ? s.indexOf(n) : -1;
        return r === -1 ? s.length - 1 : r;
    }
    _getRuler() {
        const e = this.options,
            n = this._cachedMeta,
            i = n.iScale,
            s = [];
        let r, o;
        for (r = 0, o = n.data.length; r < o; ++r)
            s.push(i.getPixelForValue(this.getParsed(r)[i.axis], r));
        const a = e.barThickness;
        return {
            min: a || Pw(n),
            pixels: s,
            start: i._startPixel,
            end: i._endPixel,
            stackCount: this._getStackCount(),
            scale: i,
            grouped: e.grouped,
            ratio: a ? 1 : e.categoryPercentage * e.barPercentage,
        };
    }
    _calculateBarValuePixels(e) {
        const {
                _cachedMeta: { vScale: n, _stacked: i, index: s },
                options: { base: r, minBarLength: o },
            } = this,
            a = r || 0,
            l = this.getParsed(e),
            c = l._custom,
            u = dl(c);
        let d = l[n.axis],
            h = 0,
            p = i ? this.applyStack(n, l, i) : d,
            v,
            y;
        p !== d && ((h = p - d), (p = d)),
            u &&
                ((d = c.barStart),
                (p = c.barEnd - c.barStart),
                d !== 0 && zt(d) !== zt(c.barEnd) && (h = 0),
                (h += d));
        const _ = !X(r) && !u ? r : h;
        let m = n.getPixelForValue(_);
        if (
            (this.chart.getDataVisibility(e)
                ? (v = n.getPixelForValue(h + p))
                : (v = m),
            (y = v - m),
            Math.abs(y) < o)
        ) {
            (y = Ow(y, n, a) * o), d === a && (m -= y / 2);
            const g = n.getPixelForDecimal(0),
                x = n.getPixelForDecimal(1),
                b = Math.min(g, x),
                w = Math.max(g, x);
            (m = Math.max(Math.min(m, w), b)),
                (v = m + y),
                i &&
                    !u &&
                    (l._stacks[n.axis]._visualValues[s] =
                        n.getValueForPixel(v) - n.getValueForPixel(m));
        }
        if (m === n.getPixelForValue(a)) {
            const g = (zt(y) * n.getLineWidthForValue(a)) / 2;
            (m += g), (y -= g);
        }
        return { size: y, base: m, head: v, center: v + y / 2 };
    }
    _calculateBarIndexPixels(e, n) {
        const i = n.scale,
            s = this.options,
            r = s.skipNull,
            o = V(s.maxBarThickness, 1 / 0);
        let a, l;
        if (n.grouped) {
            const c = r ? this._getStackCount(e) : n.stackCount,
                u = s.barThickness === 'flex' ? Tw(e, n, s, c) : Ew(e, n, s, c),
                d = this._getStackIndex(
                    this.index,
                    this._cachedMeta.stack,
                    r ? e : void 0
                );
            (a = u.start + u.chunk * d + u.chunk / 2),
                (l = Math.min(o, u.chunk * u.ratio));
        } else
            (a = i.getPixelForValue(this.getParsed(e)[i.axis], e)),
                (l = Math.min(o, n.min * n.ratio));
        return { base: a - l / 2, head: a + l / 2, center: a, size: l };
    }
    draw() {
        const e = this._cachedMeta,
            n = e.vScale,
            i = e.data,
            s = i.length;
        let r = 0;
        for (; r < s; ++r)
            this.getParsed(r)[n.axis] !== null && i[r].draw(this._ctx);
    }
}
O(yo, 'id', 'bar'),
    O(yo, 'defaults', {
        datasetElementType: !1,
        dataElementType: 'bar',
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: !0,
        animations: {
            numbers: {
                type: 'number',
                properties: ['x', 'y', 'base', 'width', 'height'],
            },
        },
    }),
    O(yo, 'overrides', {
        scales: {
            _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
            _value_: { type: 'linear', beginAtZero: !0 },
        },
    });
class vo extends Mt {
    initialize() {
        (this.enableOptionSharing = !0), super.initialize();
    }
    parsePrimitiveData(e, n, i, s) {
        const r = super.parsePrimitiveData(e, n, i, s);
        for (let o = 0; o < r.length; o++)
            r[o]._custom = this.resolveDataElementOptions(o + i).radius;
        return r;
    }
    parseArrayData(e, n, i, s) {
        const r = super.parseArrayData(e, n, i, s);
        for (let o = 0; o < r.length; o++) {
            const a = n[i + o];
            r[o]._custom = V(
                a[2],
                this.resolveDataElementOptions(o + i).radius
            );
        }
        return r;
    }
    parseObjectData(e, n, i, s) {
        const r = super.parseObjectData(e, n, i, s);
        for (let o = 0; o < r.length; o++) {
            const a = n[i + o];
            r[o]._custom = V(
                a && a.r && +a.r,
                this.resolveDataElementOptions(o + i).radius
            );
        }
        return r;
    }
    getMaxOverflow() {
        const e = this._cachedMeta.data;
        let n = 0;
        for (let i = e.length - 1; i >= 0; --i)
            n = Math.max(n, e[i].size(this.resolveDataElementOptions(i)) / 2);
        return n > 0 && n;
    }
    getLabelAndValue(e) {
        const n = this._cachedMeta,
            i = this.chart.data.labels || [],
            { xScale: s, yScale: r } = n,
            o = this.getParsed(e),
            a = s.getLabelForValue(o.x),
            l = r.getLabelForValue(o.y),
            c = o._custom;
        return {
            label: i[e] || '',
            value: '(' + a + ', ' + l + (c ? ', ' + c : '') + ')',
        };
    }
    update(e) {
        const n = this._cachedMeta.data;
        this.updateElements(n, 0, n.length, e);
    }
    updateElements(e, n, i, s) {
        const r = s === 'reset',
            { iScale: o, vScale: a } = this._cachedMeta,
            { sharedOptions: l, includeOptions: c } = this._getSharedOptions(
                n,
                s
            ),
            u = o.axis,
            d = a.axis;
        for (let h = n; h < n + i; h++) {
            const p = e[h],
                v = !r && this.getParsed(h),
                y = {},
                _ = (y[u] = r
                    ? o.getPixelForDecimal(0.5)
                    : o.getPixelForValue(v[u])),
                m = (y[d] = r ? a.getBasePixel() : a.getPixelForValue(v[d]));
            (y.skip = isNaN(_) || isNaN(m)),
                c &&
                    ((y.options =
                        l ||
                        this.resolveDataElementOptions(
                            h,
                            p.active ? 'active' : s
                        )),
                    r && (y.options.radius = 0)),
                this.updateElement(p, h, y, s);
        }
    }
    resolveDataElementOptions(e, n) {
        const i = this.getParsed(e);
        let s = super.resolveDataElementOptions(e, n);
        s.$shared && (s = Object.assign({}, s, { $shared: !1 }));
        const r = s.radius;
        return (
            n !== 'active' && (s.radius = 0),
            (s.radius += V(i && i._custom, r)),
            s
        );
    }
}
O(vo, 'id', 'bubble'),
    O(vo, 'defaults', {
        datasetElementType: !1,
        dataElementType: 'point',
        animations: {
            numbers: {
                type: 'number',
                properties: ['x', 'y', 'borderWidth', 'radius'],
            },
        },
    }),
    O(vo, 'overrides', {
        scales: { x: { type: 'linear' }, y: { type: 'linear' } },
    });
function Aw(t, e, n) {
    let i = 1,
        s = 1,
        r = 0,
        o = 0;
    if (e < le) {
        const a = t,
            l = a + e,
            c = Math.cos(a),
            u = Math.sin(a),
            d = Math.cos(l),
            h = Math.sin(l),
            p = (x, b, w) =>
                ar(x, a, l, !0) ? 1 : Math.max(b, b * n, w, w * n),
            v = (x, b, w) =>
                ar(x, a, l, !0) ? -1 : Math.min(b, b * n, w, w * n),
            y = p(0, c, d),
            _ = p(xe, u, h),
            m = v(ce, c, d),
            g = v(ce + xe, u, h);
        (i = (y - m) / 2),
            (s = (_ - g) / 2),
            (r = -(y + m) / 2),
            (o = -(_ + g) / 2);
    }
    return { ratioX: i, ratioY: s, offsetX: r, offsetY: o };
}
class Jn extends Mt {
    constructor(e, n) {
        super(e, n),
            (this.enableOptionSharing = !0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.offsetX = void 0),
            (this.offsetY = void 0);
    }
    linkScales() {}
    parse(e, n) {
        const i = this.getDataset().data,
            s = this._cachedMeta;
        if (this._parsing === !1) s._parsed = i;
        else {
            let r = (l) => +i[l];
            if (H(i[e])) {
                const { key: l = 'value' } = this._parsing;
                r = (c) => +Dn(i[c], l);
            }
            let o, a;
            for (o = e, a = e + n; o < a; ++o) s._parsed[o] = r(o);
        }
    }
    _getRotation() {
        return St(this.options.rotation - 90);
    }
    _getCircumference() {
        return St(this.options.circumference);
    }
    _getRotationExtents() {
        let e = le,
            n = -le;
        for (let i = 0; i < this.chart.data.datasets.length; ++i)
            if (
                this.chart.isDatasetVisible(i) &&
                this.chart.getDatasetMeta(i).type === this._type
            ) {
                const s = this.chart.getDatasetMeta(i).controller,
                    r = s._getRotation(),
                    o = s._getCircumference();
                (e = Math.min(e, r)), (n = Math.max(n, r + o));
            }
        return { rotation: e, circumference: n - e };
    }
    update(e) {
        const n = this.chart,
            { chartArea: i } = n,
            s = this._cachedMeta,
            r = s.data,
            o =
                this.getMaxBorderWidth() +
                this.getMaxOffset(r) +
                this.options.spacing,
            a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
            l = Math.min(q_(this.options.cutout, a), 1),
            c = this._getRingWeight(this.index),
            { circumference: u, rotation: d } = this._getRotationExtents(),
            { ratioX: h, ratioY: p, offsetX: v, offsetY: y } = Aw(d, u, l),
            _ = (i.width - o) / h,
            m = (i.height - o) / p,
            g = Math.max(Math.min(_, m) / 2, 0),
            x = kg(this.options.radius, g),
            b = Math.max(x * l, 0),
            w = (x - b) / this._getVisibleDatasetWeightTotal();
        (this.offsetX = v * x),
            (this.offsetY = y * x),
            (s.total = this.calculateTotal()),
            (this.outerRadius = x - w * this._getRingWeightOffset(this.index)),
            (this.innerRadius = Math.max(this.outerRadius - w * c, 0)),
            this.updateElements(r, 0, r.length, e);
    }
    _circumference(e, n) {
        const i = this.options,
            s = this._cachedMeta,
            r = this._getCircumference();
        return (n && i.animation.animateRotate) ||
            !this.chart.getDataVisibility(e) ||
            s._parsed[e] === null ||
            s.data[e].hidden
            ? 0
            : this.calculateCircumference((s._parsed[e] * r) / le);
    }
    updateElements(e, n, i, s) {
        const r = s === 'reset',
            o = this.chart,
            a = o.chartArea,
            c = o.options.animation,
            u = (a.left + a.right) / 2,
            d = (a.top + a.bottom) / 2,
            h = r && c.animateScale,
            p = h ? 0 : this.innerRadius,
            v = h ? 0 : this.outerRadius,
            { sharedOptions: y, includeOptions: _ } = this._getSharedOptions(
                n,
                s
            );
        let m = this._getRotation(),
            g;
        for (g = 0; g < n; ++g) m += this._circumference(g, r);
        for (g = n; g < n + i; ++g) {
            const x = this._circumference(g, r),
                b = e[g],
                w = {
                    x: u + this.offsetX,
                    y: d + this.offsetY,
                    startAngle: m,
                    endAngle: m + x,
                    circumference: x,
                    outerRadius: v,
                    innerRadius: p,
                };
            _ &&
                (w.options =
                    y ||
                    this.resolveDataElementOptions(g, b.active ? 'active' : s)),
                (m += x),
                this.updateElement(b, g, w, s);
        }
    }
    calculateTotal() {
        const e = this._cachedMeta,
            n = e.data;
        let i = 0,
            s;
        for (s = 0; s < n.length; s++) {
            const r = e._parsed[s];
            r !== null &&
                !isNaN(r) &&
                this.chart.getDataVisibility(s) &&
                !n[s].hidden &&
                (i += Math.abs(r));
        }
        return i;
    }
    calculateCircumference(e) {
        const n = this._cachedMeta.total;
        return n > 0 && !isNaN(e) ? le * (Math.abs(e) / n) : 0;
    }
    getLabelAndValue(e) {
        const n = this._cachedMeta,
            i = this.chart,
            s = i.data.labels || [],
            r = vr(n._parsed[e], i.options.locale);
        return { label: s[e] || '', value: r };
    }
    getMaxBorderWidth(e) {
        let n = 0;
        const i = this.chart;
        let s, r, o, a, l;
        if (!e) {
            for (s = 0, r = i.data.datasets.length; s < r; ++s)
                if (i.isDatasetVisible(s)) {
                    (o = i.getDatasetMeta(s)), (e = o.data), (a = o.controller);
                    break;
                }
        }
        if (!e) return 0;
        for (s = 0, r = e.length; s < r; ++s)
            (l = a.resolveDataElementOptions(s)),
                l.borderAlign !== 'inner' &&
                    (n = Math.max(
                        n,
                        l.borderWidth || 0,
                        l.hoverBorderWidth || 0
                    ));
        return n;
    }
    getMaxOffset(e) {
        let n = 0;
        for (let i = 0, s = e.length; i < s; ++i) {
            const r = this.resolveDataElementOptions(i);
            n = Math.max(n, r.offset || 0, r.hoverOffset || 0);
        }
        return n;
    }
    _getRingWeightOffset(e) {
        let n = 0;
        for (let i = 0; i < e; ++i)
            this.chart.isDatasetVisible(i) && (n += this._getRingWeight(i));
        return n;
    }
    _getRingWeight(e) {
        return Math.max(V(this.chart.data.datasets[e].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
}
O(Jn, 'id', 'doughnut'),
    O(Jn, 'defaults', {
        datasetElementType: !1,
        dataElementType: 'arc',
        animation: { animateRotate: !0, animateScale: !1 },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'circumference',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'startAngle',
                    'x',
                    'y',
                    'offset',
                    'borderWidth',
                    'spacing',
                ],
            },
        },
        cutout: '50%',
        rotation: 0,
        circumference: 360,
        radius: '100%',
        spacing: 0,
        indexAxis: 'r',
    }),
    O(Jn, 'descriptors', {
        _scriptable: (e) => e !== 'spacing',
        _indexable: (e) =>
            e !== 'spacing' &&
            !e.startsWith('borderDash') &&
            !e.startsWith('hoverBorderDash'),
    }),
    O(Jn, 'overrides', {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(e) {
                        const n = e.data;
                        if (n.labels.length && n.datasets.length) {
                            const {
                                labels: { pointStyle: i, color: s },
                            } = e.legend.options;
                            return n.labels.map((r, o) => {
                                const l = e
                                    .getDatasetMeta(0)
                                    .controller.getStyle(o);
                                return {
                                    text: r,
                                    fillStyle: l.backgroundColor,
                                    strokeStyle: l.borderColor,
                                    fontColor: s,
                                    lineWidth: l.borderWidth,
                                    pointStyle: i,
                                    hidden: !e.getDataVisibility(o),
                                    index: o,
                                };
                            });
                        }
                        return [];
                    },
                },
                onClick(e, n, i) {
                    i.chart.toggleDataVisibility(n.index), i.chart.update();
                },
            },
        },
    });
class xo extends Mt {
    initialize() {
        (this.enableOptionSharing = !0),
            (this.supportsDecimation = !0),
            super.initialize();
    }
    update(e) {
        const n = this._cachedMeta,
            { dataset: i, data: s = [], _dataset: r } = n,
            o = this.chart._animationsDisabled;
        let { start: a, count: l } = Ng(n, s, o);
        (this._drawStart = a),
            (this._drawCount = l),
            Dg(n) && ((a = 0), (l = s.length)),
            (i._chart = this.chart),
            (i._datasetIndex = this.index),
            (i._decimated = !!r._decimated),
            (i.points = s);
        const c = this.resolveDatasetElementOptions(e);
        this.options.showLine || (c.borderWidth = 0),
            (c.segment = this.options.segment),
            this.updateElement(i, void 0, { animated: !o, options: c }, e),
            this.updateElements(s, a, l, e);
    }
    updateElements(e, n, i, s) {
        const r = s === 'reset',
            {
                iScale: o,
                vScale: a,
                _stacked: l,
                _dataset: c,
            } = this._cachedMeta,
            { sharedOptions: u, includeOptions: d } = this._getSharedOptions(
                n,
                s
            ),
            h = o.axis,
            p = a.axis,
            { spanGaps: v, segment: y } = this.options,
            _ = Ui(v) ? v : Number.POSITIVE_INFINITY,
            m = this.chart._animationsDisabled || r || s === 'none',
            g = n + i,
            x = e.length;
        let b = n > 0 && this.getParsed(n - 1);
        for (let w = 0; w < x; ++w) {
            const k = e[w],
                S = m ? k : {};
            if (w < n || w >= g) {
                S.skip = !0;
                continue;
            }
            const M = this.getParsed(w),
                T = X(M[p]),
                j = (S[h] = o.getPixelForValue(M[h], w)),
                R = (S[p] =
                    r || T
                        ? a.getBasePixel()
                        : a.getPixelForValue(
                              l ? this.applyStack(a, M, l) : M[p],
                              w
                          ));
            (S.skip = isNaN(j) || isNaN(R) || T),
                (S.stop = w > 0 && Math.abs(M[h] - b[h]) > _),
                y && ((S.parsed = M), (S.raw = c.data[w])),
                d &&
                    (S.options =
                        u ||
                        this.resolveDataElementOptions(
                            w,
                            k.active ? 'active' : s
                        )),
                m || this.updateElement(k, w, S, s),
                (b = M);
        }
    }
    getMaxOverflow() {
        const e = this._cachedMeta,
            n = e.dataset,
            i = (n.options && n.options.borderWidth) || 0,
            s = e.data || [];
        if (!s.length) return i;
        const r = s[0].size(this.resolveDataElementOptions(0)),
            o = s[s.length - 1].size(
                this.resolveDataElementOptions(s.length - 1)
            );
        return Math.max(i, r, o) / 2;
    }
    draw() {
        const e = this._cachedMeta;
        e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis),
            super.draw();
    }
}
O(xo, 'id', 'line'),
    O(xo, 'defaults', {
        datasetElementType: 'line',
        dataElementType: 'point',
        showLine: !0,
        spanGaps: !1,
    }),
    O(xo, 'overrides', {
        scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } },
    });
class As extends Mt {
    constructor(e, n) {
        super(e, n), (this.innerRadius = void 0), (this.outerRadius = void 0);
    }
    getLabelAndValue(e) {
        const n = this._cachedMeta,
            i = this.chart,
            s = i.data.labels || [],
            r = vr(n._parsed[e].r, i.options.locale);
        return { label: s[e] || '', value: r };
    }
    parseObjectData(e, n, i, s) {
        return Vg.bind(this)(e, n, i, s);
    }
    update(e) {
        const n = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(n, 0, n.length, e);
    }
    getMinMax() {
        const e = this._cachedMeta,
            n = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
            };
        return (
            e.data.forEach((i, s) => {
                const r = this.getParsed(s).r;
                !isNaN(r) &&
                    this.chart.getDataVisibility(s) &&
                    (r < n.min && (n.min = r), r > n.max && (n.max = r));
            }),
            n
        );
    }
    _updateRadius() {
        const e = this.chart,
            n = e.chartArea,
            i = e.options,
            s = Math.min(n.right - n.left, n.bottom - n.top),
            r = Math.max(s / 2, 0),
            o = Math.max(
                i.cutoutPercentage ? (r / 100) * i.cutoutPercentage : 1,
                0
            ),
            a = (r - o) / e.getVisibleDatasetCount();
        (this.outerRadius = r - a * this.index),
            (this.innerRadius = this.outerRadius - a);
    }
    updateElements(e, n, i, s) {
        const r = s === 'reset',
            o = this.chart,
            l = o.options.animation,
            c = this._cachedMeta.rScale,
            u = c.xCenter,
            d = c.yCenter,
            h = c.getIndexAngle(0) - 0.5 * ce;
        let p = h,
            v;
        const y = 360 / this.countVisibleElements();
        for (v = 0; v < n; ++v) p += this._computeAngle(v, s, y);
        for (v = n; v < n + i; v++) {
            const _ = e[v];
            let m = p,
                g = p + this._computeAngle(v, s, y),
                x = o.getDataVisibility(v)
                    ? c.getDistanceFromCenterForValue(this.getParsed(v).r)
                    : 0;
            (p = g),
                r &&
                    (l.animateScale && (x = 0), l.animateRotate && (m = g = h));
            const b = {
                x: u,
                y: d,
                innerRadius: 0,
                outerRadius: x,
                startAngle: m,
                endAngle: g,
                options: this.resolveDataElementOptions(
                    v,
                    _.active ? 'active' : s
                ),
            };
            this.updateElement(_, v, b, s);
        }
    }
    countVisibleElements() {
        const e = this._cachedMeta;
        let n = 0;
        return (
            e.data.forEach((i, s) => {
                !isNaN(this.getParsed(s).r) &&
                    this.chart.getDataVisibility(s) &&
                    n++;
            }),
            n
        );
    }
    _computeAngle(e, n, i) {
        return this.chart.getDataVisibility(e)
            ? St(this.resolveDataElementOptions(e, n).angle || i)
            : 0;
    }
}
O(As, 'id', 'polarArea'),
    O(As, 'defaults', {
        dataElementType: 'arc',
        animation: { animateRotate: !0, animateScale: !0 },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                ],
            },
        },
        indexAxis: 'r',
        startAngle: 0,
    }),
    O(As, 'overrides', {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(e) {
                        const n = e.data;
                        if (n.labels.length && n.datasets.length) {
                            const {
                                labels: { pointStyle: i, color: s },
                            } = e.legend.options;
                            return n.labels.map((r, o) => {
                                const l = e
                                    .getDatasetMeta(0)
                                    .controller.getStyle(o);
                                return {
                                    text: r,
                                    fillStyle: l.backgroundColor,
                                    strokeStyle: l.borderColor,
                                    fontColor: s,
                                    lineWidth: l.borderWidth,
                                    pointStyle: i,
                                    hidden: !e.getDataVisibility(o),
                                    index: o,
                                };
                            });
                        }
                        return [];
                    },
                },
                onClick(e, n, i) {
                    i.chart.toggleDataVisibility(n.index), i.chart.update();
                },
            },
        },
        scales: {
            r: {
                type: 'radialLinear',
                angleLines: { display: !1 },
                beginAtZero: !0,
                grid: { circular: !0 },
                pointLabels: { display: !1 },
                startAngle: 0,
            },
        },
    });
class wc extends Jn {}
O(wc, 'id', 'pie'),
    O(wc, 'defaults', {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: '100%',
    });
class _o extends Mt {
    getLabelAndValue(e) {
        const n = this._cachedMeta.vScale,
            i = this.getParsed(e);
        return {
            label: n.getLabels()[e],
            value: '' + n.getLabelForValue(i[n.axis]),
        };
    }
    parseObjectData(e, n, i, s) {
        return Vg.bind(this)(e, n, i, s);
    }
    update(e) {
        const n = this._cachedMeta,
            i = n.dataset,
            s = n.data || [],
            r = n.iScale.getLabels();
        if (((i.points = s), e !== 'resize')) {
            const o = this.resolveDatasetElementOptions(e);
            this.options.showLine || (o.borderWidth = 0);
            const a = {
                _loop: !0,
                _fullLoop: r.length === s.length,
                options: o,
            };
            this.updateElement(i, void 0, a, e);
        }
        this.updateElements(s, 0, s.length, e);
    }
    updateElements(e, n, i, s) {
        const r = this._cachedMeta.rScale,
            o = s === 'reset';
        for (let a = n; a < n + i; a++) {
            const l = e[a],
                c = this.resolveDataElementOptions(a, l.active ? 'active' : s),
                u = r.getPointPositionForValue(a, this.getParsed(a).r),
                d = o ? r.xCenter : u.x,
                h = o ? r.yCenter : u.y,
                p = {
                    x: d,
                    y: h,
                    angle: u.angle,
                    skip: isNaN(d) || isNaN(h),
                    options: c,
                };
            this.updateElement(l, a, p, s);
        }
    }
}
O(_o, 'id', 'radar'),
    O(_o, 'defaults', {
        datasetElementType: 'line',
        dataElementType: 'point',
        indexAxis: 'r',
        showLine: !0,
        elements: { line: { fill: 'start' } },
    }),
    O(_o, 'overrides', {
        aspectRatio: 1,
        scales: { r: { type: 'radialLinear' } },
    });
class bo extends Mt {
    getLabelAndValue(e) {
        const n = this._cachedMeta,
            i = this.chart.data.labels || [],
            { xScale: s, yScale: r } = n,
            o = this.getParsed(e),
            a = s.getLabelForValue(o.x),
            l = r.getLabelForValue(o.y);
        return { label: i[e] || '', value: '(' + a + ', ' + l + ')' };
    }
    update(e) {
        const n = this._cachedMeta,
            { data: i = [] } = n,
            s = this.chart._animationsDisabled;
        let { start: r, count: o } = Ng(n, i, s);
        if (
            ((this._drawStart = r),
            (this._drawCount = o),
            Dg(n) && ((r = 0), (o = i.length)),
            this.options.showLine)
        ) {
            this.datasetElementType || this.addElements();
            const { dataset: a, _dataset: l } = n;
            (a._chart = this.chart),
                (a._datasetIndex = this.index),
                (a._decimated = !!l._decimated),
                (a.points = i);
            const c = this.resolveDatasetElementOptions(e);
            (c.segment = this.options.segment),
                this.updateElement(a, void 0, { animated: !s, options: c }, e);
        } else
            this.datasetElementType &&
                (delete n.dataset, (this.datasetElementType = !1));
        this.updateElements(i, r, o, e);
    }
    addElements() {
        const { showLine: e } = this.options;
        !this.datasetElementType &&
            e &&
            (this.datasetElementType = this.chart.registry.getElement('line')),
            super.addElements();
    }
    updateElements(e, n, i, s) {
        const r = s === 'reset',
            {
                iScale: o,
                vScale: a,
                _stacked: l,
                _dataset: c,
            } = this._cachedMeta,
            u = this.resolveDataElementOptions(n, s),
            d = this.getSharedOptions(u),
            h = this.includeOptions(s, d),
            p = o.axis,
            v = a.axis,
            { spanGaps: y, segment: _ } = this.options,
            m = Ui(y) ? y : Number.POSITIVE_INFINITY,
            g = this.chart._animationsDisabled || r || s === 'none';
        let x = n > 0 && this.getParsed(n - 1);
        for (let b = n; b < n + i; ++b) {
            const w = e[b],
                k = this.getParsed(b),
                S = g ? w : {},
                M = X(k[v]),
                T = (S[p] = o.getPixelForValue(k[p], b)),
                j = (S[v] =
                    r || M
                        ? a.getBasePixel()
                        : a.getPixelForValue(
                              l ? this.applyStack(a, k, l) : k[v],
                              b
                          ));
            (S.skip = isNaN(T) || isNaN(j) || M),
                (S.stop = b > 0 && Math.abs(k[p] - x[p]) > m),
                _ && ((S.parsed = k), (S.raw = c.data[b])),
                h &&
                    (S.options =
                        d ||
                        this.resolveDataElementOptions(
                            b,
                            w.active ? 'active' : s
                        )),
                g || this.updateElement(w, b, S, s),
                (x = k);
        }
        this.updateSharedOptions(d, s, u);
    }
    getMaxOverflow() {
        const e = this._cachedMeta,
            n = e.data || [];
        if (!this.options.showLine) {
            let a = 0;
            for (let l = n.length - 1; l >= 0; --l)
                a = Math.max(
                    a,
                    n[l].size(this.resolveDataElementOptions(l)) / 2
                );
            return a > 0 && a;
        }
        const i = e.dataset,
            s = (i.options && i.options.borderWidth) || 0;
        if (!n.length) return s;
        const r = n[0].size(this.resolveDataElementOptions(0)),
            o = n[n.length - 1].size(
                this.resolveDataElementOptions(n.length - 1)
            );
        return Math.max(s, r, o) / 2;
    }
}
O(bo, 'id', 'scatter'),
    O(bo, 'defaults', {
        datasetElementType: !1,
        dataElementType: 'point',
        showLine: !1,
        fill: !1,
    }),
    O(bo, 'overrides', {
        interaction: { mode: 'point' },
        scales: { x: { type: 'linear' }, y: { type: 'linear' } },
    });
var Iw = Object.freeze({
    __proto__: null,
    BarController: yo,
    BubbleController: vo,
    DoughnutController: Jn,
    LineController: xo,
    PieController: wc,
    PolarAreaController: As,
    RadarController: _o,
    ScatterController: bo,
});
function $n() {
    throw new Error(
        'This method is not implemented: Check that a complete date adapter is provided.'
    );
}
class Xu {
    constructor(e) {
        O(this, 'options');
        this.options = e || {};
    }
    static override(e) {
        Object.assign(Xu.prototype, e);
    }
    init() {}
    formats() {
        return $n();
    }
    parse() {
        return $n();
    }
    format() {
        return $n();
    }
    add() {
        return $n();
    }
    diff() {
        return $n();
    }
    startOf() {
        return $n();
    }
    endOf() {
        return $n();
    }
}
var Fw = { _date: Xu };
function zw(t, e, n, i) {
    const { controller: s, data: r, _sorted: o } = t,
        a = s._cachedMeta.iScale;
    if (a && e === a.axis && e !== 'r' && o && r.length) {
        const l = a._reversePixels ? lb : Gt;
        if (i) {
            if (s._sharedOptions) {
                const c = r[0],
                    u = typeof c.getRange == 'function' && c.getRange(e);
                if (u) {
                    const d = l(r, e, n - u),
                        h = l(r, e, n + u);
                    return { lo: d.lo, hi: h.hi };
                }
            }
        } else return l(r, e, n);
    }
    return { lo: 0, hi: r.length - 1 };
}
function xr(t, e, n, i, s) {
    const r = t.getSortedVisibleDatasetMetas(),
        o = n[e];
    for (let a = 0, l = r.length; a < l; ++a) {
        const { index: c, data: u } = r[a],
            { lo: d, hi: h } = zw(r[a], e, o, s);
        for (let p = d; p <= h; ++p) {
            const v = u[p];
            v.skip || i(v, c, p);
        }
    }
}
function Bw(t) {
    const e = t.indexOf('x') !== -1,
        n = t.indexOf('y') !== -1;
    return function (i, s) {
        const r = e ? Math.abs(i.x - s.x) : 0,
            o = n ? Math.abs(i.y - s.y) : 0;
        return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
    };
}
function hl(t, e, n, i, s) {
    const r = [];
    return (
        (!s && !t.isPointInArea(e)) ||
            xr(
                t,
                n,
                e,
                function (a, l, c) {
                    (!s && !Jt(a, t.chartArea, 0)) ||
                        (a.inRange(e.x, e.y, i) &&
                            r.push({ element: a, datasetIndex: l, index: c }));
                },
                !0
            ),
        r
    );
}
function Vw(t, e, n, i) {
    let s = [];
    function r(o, a, l) {
        const { startAngle: c, endAngle: u } = o.getProps(
                ['startAngle', 'endAngle'],
                i
            ),
            { angle: d } = Pg(o, { x: e.x, y: e.y });
        ar(d, c, u) && s.push({ element: o, datasetIndex: a, index: l });
    }
    return xr(t, n, e, r), s;
}
function $w(t, e, n, i, s, r) {
    let o = [];
    const a = Bw(n);
    let l = Number.POSITIVE_INFINITY;
    function c(u, d, h) {
        const p = u.inRange(e.x, e.y, s);
        if (i && !p) return;
        const v = u.getCenterPoint(s);
        if (!(!!r || t.isPointInArea(v)) && !p) return;
        const _ = a(e, v);
        _ < l
            ? ((o = [{ element: u, datasetIndex: d, index: h }]), (l = _))
            : _ === l && o.push({ element: u, datasetIndex: d, index: h });
    }
    return xr(t, n, e, c), o;
}
function fl(t, e, n, i, s, r) {
    return !r && !t.isPointInArea(e)
        ? []
        : n === 'r' && !i
        ? Vw(t, e, n, s)
        : $w(t, e, n, i, s, r);
}
function Jh(t, e, n, i, s) {
    const r = [],
        o = n === 'x' ? 'inXRange' : 'inYRange';
    let a = !1;
    return (
        xr(t, n, e, (l, c, u) => {
            l[o](e[n], s) &&
                (r.push({ element: l, datasetIndex: c, index: u }),
                (a = a || l.inRange(e.x, e.y, s)));
        }),
        i && !a ? [] : r
    );
}
var Hw = {
    evaluateInteractionItems: xr,
    modes: {
        index(t, e, n, i) {
            const s = Qn(e, t),
                r = n.axis || 'x',
                o = n.includeInvisible || !1,
                a = n.intersect ? hl(t, s, r, i, o) : fl(t, s, r, !1, i, o),
                l = [];
            return a.length
                ? (t.getSortedVisibleDatasetMetas().forEach((c) => {
                      const u = a[0].index,
                          d = c.data[u];
                      d &&
                          !d.skip &&
                          l.push({
                              element: d,
                              datasetIndex: c.index,
                              index: u,
                          });
                  }),
                  l)
                : [];
        },
        dataset(t, e, n, i) {
            const s = Qn(e, t),
                r = n.axis || 'xy',
                o = n.includeInvisible || !1;
            let a = n.intersect ? hl(t, s, r, i, o) : fl(t, s, r, !1, i, o);
            if (a.length > 0) {
                const l = a[0].datasetIndex,
                    c = t.getDatasetMeta(l).data;
                a = [];
                for (let u = 0; u < c.length; ++u)
                    a.push({ element: c[u], datasetIndex: l, index: u });
            }
            return a;
        },
        point(t, e, n, i) {
            const s = Qn(e, t),
                r = n.axis || 'xy',
                o = n.includeInvisible || !1;
            return hl(t, s, r, i, o);
        },
        nearest(t, e, n, i) {
            const s = Qn(e, t),
                r = n.axis || 'xy',
                o = n.includeInvisible || !1;
            return fl(t, s, r, n.intersect, i, o);
        },
        x(t, e, n, i) {
            const s = Qn(e, t);
            return Jh(t, s, 'x', n.intersect, i);
        },
        y(t, e, n, i) {
            const s = Qn(e, t);
            return Jh(t, s, 'y', n.intersect, i);
        },
    },
};
const Gg = ['left', 'top', 'right', 'bottom'];
function ls(t, e) {
    return t.filter((n) => n.pos === e);
}
function Zh(t, e) {
    return t.filter((n) => Gg.indexOf(n.pos) === -1 && n.box.axis === e);
}
function cs(t, e) {
    return t.sort((n, i) => {
        const s = e ? i : n,
            r = e ? n : i;
        return s.weight === r.weight ? s.index - r.index : s.weight - r.weight;
    });
}
function Ww(t) {
    const e = [];
    let n, i, s, r, o, a;
    for (n = 0, i = (t || []).length; n < i; ++n)
        (s = t[n]),
            ({
                position: r,
                options: { stack: o, stackWeight: a = 1 },
            } = s),
            e.push({
                index: n,
                box: s,
                pos: r,
                horizontal: s.isHorizontal(),
                weight: s.weight,
                stack: o && r + o,
                stackWeight: a,
            });
    return e;
}
function Uw(t) {
    const e = {};
    for (const n of t) {
        const { stack: i, pos: s, stackWeight: r } = n;
        if (!i || !Gg.includes(s)) continue;
        const o = e[i] || (e[i] = { count: 0, placed: 0, weight: 0, size: 0 });
        o.count++, (o.weight += r);
    }
    return e;
}
function Qw(t, e) {
    const n = Uw(t),
        { vBoxMaxWidth: i, hBoxMaxHeight: s } = e;
    let r, o, a;
    for (r = 0, o = t.length; r < o; ++r) {
        a = t[r];
        const { fullSize: l } = a.box,
            c = n[a.stack],
            u = c && a.stackWeight / c.weight;
        a.horizontal
            ? ((a.width = u ? u * i : l && e.availableWidth), (a.height = s))
            : ((a.width = i), (a.height = u ? u * s : l && e.availableHeight));
    }
    return n;
}
function Yw(t) {
    const e = Ww(t),
        n = cs(
            e.filter((c) => c.box.fullSize),
            !0
        ),
        i = cs(ls(e, 'left'), !0),
        s = cs(ls(e, 'right')),
        r = cs(ls(e, 'top'), !0),
        o = cs(ls(e, 'bottom')),
        a = Zh(e, 'x'),
        l = Zh(e, 'y');
    return {
        fullSize: n,
        leftAndTop: i.concat(r),
        rightAndBottom: s.concat(l).concat(o).concat(a),
        chartArea: ls(e, 'chartArea'),
        vertical: i.concat(s).concat(l),
        horizontal: r.concat(o).concat(a),
    };
}
function ef(t, e, n, i) {
    return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
}
function Jg(t, e) {
    (t.top = Math.max(t.top, e.top)),
        (t.left = Math.max(t.left, e.left)),
        (t.bottom = Math.max(t.bottom, e.bottom)),
        (t.right = Math.max(t.right, e.right));
}
function Xw(t, e, n, i) {
    const { pos: s, box: r } = n,
        o = t.maxPadding;
    if (!H(s)) {
        n.size && (t[s] -= n.size);
        const d = i[n.stack] || { size: 0, count: 1 };
        (d.size = Math.max(d.size, n.horizontal ? r.height : r.width)),
            (n.size = d.size / d.count),
            (t[s] += n.size);
    }
    r.getPadding && Jg(o, r.getPadding());
    const a = Math.max(0, e.outerWidth - ef(o, t, 'left', 'right')),
        l = Math.max(0, e.outerHeight - ef(o, t, 'top', 'bottom')),
        c = a !== t.w,
        u = l !== t.h;
    return (
        (t.w = a),
        (t.h = l),
        n.horizontal ? { same: c, other: u } : { same: u, other: c }
    );
}
function Kw(t) {
    const e = t.maxPadding;
    function n(i) {
        const s = Math.max(e[i] - t[i], 0);
        return (t[i] += s), s;
    }
    (t.y += n('top')), (t.x += n('left')), n('right'), n('bottom');
}
function qw(t, e) {
    const n = e.maxPadding;
    function i(s) {
        const r = { left: 0, top: 0, right: 0, bottom: 0 };
        return (
            s.forEach((o) => {
                r[o] = Math.max(e[o], n[o]);
            }),
            r
        );
    }
    return i(t ? ['left', 'right'] : ['top', 'bottom']);
}
function vs(t, e, n, i) {
    const s = [];
    let r, o, a, l, c, u;
    for (r = 0, o = t.length, c = 0; r < o; ++r) {
        (a = t[r]),
            (l = a.box),
            l.update(a.width || e.w, a.height || e.h, qw(a.horizontal, e));
        const { same: d, other: h } = Xw(e, n, a, i);
        (c |= d && s.length), (u = u || h), l.fullSize || s.push(a);
    }
    return (c && vs(s, e, n, i)) || u;
}
function Ur(t, e, n, i, s) {
    (t.top = n),
        (t.left = e),
        (t.right = e + i),
        (t.bottom = n + s),
        (t.width = i),
        (t.height = s);
}
function tf(t, e, n, i) {
    const s = n.padding;
    let { x: r, y: o } = e;
    for (const a of t) {
        const l = a.box,
            c = i[a.stack] || { count: 1, placed: 0, weight: 1 },
            u = a.stackWeight / c.weight || 1;
        if (a.horizontal) {
            const d = e.w * u,
                h = c.size || l.height;
            or(c.start) && (o = c.start),
                l.fullSize
                    ? Ur(l, s.left, o, n.outerWidth - s.right - s.left, h)
                    : Ur(l, e.left + c.placed, o, d, h),
                (c.start = o),
                (c.placed += d),
                (o = l.bottom);
        } else {
            const d = e.h * u,
                h = c.size || l.width;
            or(c.start) && (r = c.start),
                l.fullSize
                    ? Ur(l, r, s.top, h, n.outerHeight - s.bottom - s.top)
                    : Ur(l, r, e.top + c.placed, h, d),
                (c.start = r),
                (c.placed += d),
                (r = l.right);
        }
    }
    (e.x = r), (e.y = o);
}
var Ie = {
    addBox(t, e) {
        t.boxes || (t.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || 'top'),
            (e.weight = e.weight || 0),
            (e._layers =
                e._layers ||
                function () {
                    return [
                        {
                            z: 0,
                            draw(n) {
                                e.draw(n);
                            },
                        },
                    ];
                }),
            t.boxes.push(e);
    },
    removeBox(t, e) {
        const n = t.boxes ? t.boxes.indexOf(e) : -1;
        n !== -1 && t.boxes.splice(n, 1);
    },
    configure(t, e, n) {
        (e.fullSize = n.fullSize),
            (e.position = n.position),
            (e.weight = n.weight);
    },
    update(t, e, n, i) {
        if (!t) return;
        const s = ze(t.options.layout.padding),
            r = Math.max(e - s.width, 0),
            o = Math.max(n - s.height, 0),
            a = Yw(t.boxes),
            l = a.vertical,
            c = a.horizontal;
        J(t.boxes, (y) => {
            typeof y.beforeLayout == 'function' && y.beforeLayout();
        });
        const u =
                l.reduce(
                    (y, _) =>
                        _.box.options && _.box.options.display === !1
                            ? y
                            : y + 1,
                    0
                ) || 1,
            d = Object.freeze({
                outerWidth: e,
                outerHeight: n,
                padding: s,
                availableWidth: r,
                availableHeight: o,
                vBoxMaxWidth: r / 2 / u,
                hBoxMaxHeight: o / 2,
            }),
            h = Object.assign({}, s);
        Jg(h, ze(i));
        const p = Object.assign(
                { maxPadding: h, w: r, h: o, x: s.left, y: s.top },
                s
            ),
            v = Qw(l.concat(c), d);
        vs(a.fullSize, p, d, v),
            vs(l, p, d, v),
            vs(c, p, d, v) && vs(l, p, d, v),
            Kw(p),
            tf(a.leftAndTop, p, d, v),
            (p.x += p.w),
            (p.y += p.h),
            tf(a.rightAndBottom, p, d, v),
            (t.chartArea = {
                left: p.left,
                top: p.top,
                right: p.left + p.w,
                bottom: p.top + p.h,
                height: p.h,
                width: p.w,
            }),
            J(a.chartArea, (y) => {
                const _ = y.box;
                Object.assign(_, t.chartArea),
                    _.update(p.w, p.h, {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                    });
            });
    },
};
class Zg {
    acquireContext(e, n) {}
    releaseContext(e) {
        return !1;
    }
    addEventListener(e, n, i) {}
    removeEventListener(e, n, i) {}
    getDevicePixelRatio() {
        return 1;
    }
    getMaximumSize(e, n, i, s) {
        return (
            (n = Math.max(0, n || e.width)),
            (i = i || e.height),
            { width: n, height: Math.max(0, s ? Math.floor(n / s) : i) }
        );
    }
    isAttached(e) {
        return !0;
    }
    updateConfig(e) {}
}
class Gw extends Zg {
    acquireContext(e) {
        return (e && e.getContext && e.getContext('2d')) || null;
    }
    updateConfig(e) {
        e.options.animation = !1;
    }
}
const wo = '$chartjs',
    Jw = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup',
        pointerenter: 'mouseenter',
        pointerdown: 'mousedown',
        pointermove: 'mousemove',
        pointerup: 'mouseup',
        pointerleave: 'mouseout',
        pointerout: 'mouseout',
    },
    nf = (t) => t === null || t === '';
function Zw(t, e) {
    const n = t.style,
        i = t.getAttribute('height'),
        s = t.getAttribute('width');
    if (
        ((t[wo] = {
            initial: {
                height: i,
                width: s,
                style: { display: n.display, height: n.height, width: n.width },
            },
        }),
        (n.display = n.display || 'block'),
        (n.boxSizing = n.boxSizing || 'border-box'),
        nf(s))
    ) {
        const r = Fh(t, 'width');
        r !== void 0 && (t.width = r);
    }
    if (nf(i))
        if (t.style.height === '') t.height = t.width / (e || 2);
        else {
            const r = Fh(t, 'height');
            r !== void 0 && (t.height = r);
        }
    return t;
}
const e0 = tw ? { passive: !0 } : !1;
function eS(t, e, n) {
    t.addEventListener(e, n, e0);
}
function tS(t, e, n) {
    t.canvas.removeEventListener(e, n, e0);
}
function nS(t, e) {
    const n = Jw[t.type] || t.type,
        { x: i, y: s } = Qn(t, e);
    return {
        type: n,
        chart: e,
        native: t,
        x: i !== void 0 ? i : null,
        y: s !== void 0 ? s : null,
    };
}
function ia(t, e) {
    for (const n of t) if (n === e || n.contains(e)) return !0;
}
function iS(t, e, n) {
    const i = t.canvas,
        s = new MutationObserver((r) => {
            let o = !1;
            for (const a of r)
                (o = o || ia(a.addedNodes, i)),
                    (o = o && !ia(a.removedNodes, i));
            o && n();
        });
    return s.observe(document, { childList: !0, subtree: !0 }), s;
}
function sS(t, e, n) {
    const i = t.canvas,
        s = new MutationObserver((r) => {
            let o = !1;
            for (const a of r)
                (o = o || ia(a.removedNodes, i)),
                    (o = o && !ia(a.addedNodes, i));
            o && n();
        });
    return s.observe(document, { childList: !0, subtree: !0 }), s;
}
const cr = new Map();
let sf = 0;
function t0() {
    const t = window.devicePixelRatio;
    t !== sf &&
        ((sf = t),
        cr.forEach((e, n) => {
            n.currentDevicePixelRatio !== t && e();
        }));
}
function rS(t, e) {
    cr.size || window.addEventListener('resize', t0), cr.set(t, e);
}
function oS(t) {
    cr.delete(t), cr.size || window.removeEventListener('resize', t0);
}
function aS(t, e, n) {
    const i = t.canvas,
        s = i && Yu(i);
    if (!s) return;
    const r = Og((a, l) => {
            const c = s.clientWidth;
            n(a, l), c < s.clientWidth && n();
        }, window),
        o = new ResizeObserver((a) => {
            const l = a[0],
                c = l.contentRect.width,
                u = l.contentRect.height;
            (c === 0 && u === 0) || r(c, u);
        });
    return o.observe(s), rS(t, r), o;
}
function pl(t, e, n) {
    n && n.disconnect(), e === 'resize' && oS(t);
}
function lS(t, e, n) {
    const i = t.canvas,
        s = Og((r) => {
            t.ctx !== null && n(nS(r, t));
        }, t);
    return eS(i, e, s), s;
}
class cS extends Zg {
    acquireContext(e, n) {
        const i = e && e.getContext && e.getContext('2d');
        return i && i.canvas === e ? (Zw(e, n), i) : null;
    }
    releaseContext(e) {
        const n = e.canvas;
        if (!n[wo]) return !1;
        const i = n[wo].initial;
        ['height', 'width'].forEach((r) => {
            const o = i[r];
            X(o) ? n.removeAttribute(r) : n.setAttribute(r, o);
        });
        const s = i.style || {};
        return (
            Object.keys(s).forEach((r) => {
                n.style[r] = s[r];
            }),
            (n.width = n.width),
            delete n[wo],
            !0
        );
    }
    addEventListener(e, n, i) {
        this.removeEventListener(e, n);
        const s = e.$proxies || (e.$proxies = {}),
            o = { attach: iS, detach: sS, resize: aS }[n] || lS;
        s[n] = o(e, n, i);
    }
    removeEventListener(e, n) {
        const i = e.$proxies || (e.$proxies = {}),
            s = i[n];
        if (!s) return;
        (({ attach: pl, detach: pl, resize: pl })[n] || tS)(e, n, s),
            (i[n] = void 0);
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(e, n, i, s) {
        return ew(e, n, i, s);
    }
    isAttached(e) {
        const n = Yu(e);
        return !!(n && n.isConnected);
    }
}
function uS(t) {
    return !Qu() ||
        (typeof OffscreenCanvas < 'u' && t instanceof OffscreenCanvas)
        ? Gw
        : cS;
}
class Tt {
    constructor() {
        O(this, 'x');
        O(this, 'y');
        O(this, 'active', !1);
        O(this, 'options');
        O(this, '$animations');
    }
    tooltipPosition(e) {
        const { x: n, y: i } = this.getProps(['x', 'y'], e);
        return { x: n, y: i };
    }
    hasValue() {
        return Ui(this.x) && Ui(this.y);
    }
    getProps(e, n) {
        const i = this.$animations;
        if (!n || !i) return this;
        const s = {};
        return (
            e.forEach((r) => {
                s[r] = i[r] && i[r].active() ? i[r]._to : this[r];
            }),
            s
        );
    }
}
O(Tt, 'defaults', {}), O(Tt, 'defaultRoutes');
function dS(t, e) {
    const n = t.options.ticks,
        i = hS(t),
        s = Math.min(n.maxTicksLimit || i, i),
        r = n.major.enabled ? pS(e) : [],
        o = r.length,
        a = r[0],
        l = r[o - 1],
        c = [];
    if (o > s) return mS(e, c, r, o / s), c;
    const u = fS(r, e, s);
    if (o > 0) {
        let d, h;
        const p = o > 1 ? Math.round((l - a) / (o - 1)) : null;
        for (Qr(e, c, u, X(p) ? 0 : a - p, a), d = 0, h = o - 1; d < h; d++)
            Qr(e, c, u, r[d], r[d + 1]);
        return Qr(e, c, u, l, X(p) ? e.length : l + p), c;
    }
    return Qr(e, c, u), c;
}
function hS(t) {
    const e = t.options.offset,
        n = t._tickSize(),
        i = t._length / n + (e ? 0 : 1),
        s = t._maxLength / n;
    return Math.floor(Math.min(i, s));
}
function fS(t, e, n) {
    const i = gS(t),
        s = e.length / n;
    if (!i) return Math.max(s, 1);
    const r = sb(i);
    for (let o = 0, a = r.length - 1; o < a; o++) {
        const l = r[o];
        if (l > s) return l;
    }
    return Math.max(s, 1);
}
function pS(t) {
    const e = [];
    let n, i;
    for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
    return e;
}
function mS(t, e, n, i) {
    let s = 0,
        r = n[0],
        o;
    for (i = Math.ceil(i), o = 0; o < t.length; o++)
        o === r && (e.push(t[o]), s++, (r = n[s * i]));
}
function Qr(t, e, n, i, s) {
    const r = V(i, 0),
        o = Math.min(V(s, t.length), t.length);
    let a = 0,
        l,
        c,
        u;
    for (
        n = Math.ceil(n),
            s && ((l = s - i), (n = l / Math.floor(l / n))),
            u = r;
        u < 0;

    )
        a++, (u = Math.round(r + a * n));
    for (c = Math.max(r, 0); c < o; c++)
        c === u && (e.push(t[c]), a++, (u = Math.round(r + a * n)));
}
function gS(t) {
    const e = t.length;
    let n, i;
    if (e < 2) return !1;
    for (i = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== i) return !1;
    return i;
}
const yS = (t) => (t === 'left' ? 'right' : t === 'right' ? 'left' : t),
    rf = (t, e, n) => (e === 'top' || e === 'left' ? t[e] + n : t[e] - n),
    of = (t, e) => Math.min(e || t, t);
function af(t, e) {
    const n = [],
        i = t.length / e,
        s = t.length;
    let r = 0;
    for (; r < s; r += i) n.push(t[Math.floor(r)]);
    return n;
}
function vS(t, e, n) {
    const i = t.ticks.length,
        s = Math.min(e, i - 1),
        r = t._startPixel,
        o = t._endPixel,
        a = 1e-6;
    let l = t.getPixelForTick(s),
        c;
    if (
        !(
            n &&
            (i === 1
                ? (c = Math.max(l - r, o - l))
                : e === 0
                ? (c = (t.getPixelForTick(1) - l) / 2)
                : (c = (l - t.getPixelForTick(s - 1)) / 2),
            (l += s < e ? c : -c),
            l < r - a || l > o + a)
        )
    )
        return l;
}
function xS(t, e) {
    J(t, (n) => {
        const i = n.gc,
            s = i.length / 2;
        let r;
        if (s > e) {
            for (r = 0; r < s; ++r) delete n.data[i[r]];
            i.splice(0, s);
        }
    });
}
function us(t) {
    return t.drawTicks ? t.tickLength : 0;
}
function lf(t, e) {
    if (!t.display) return 0;
    const n = Se(t.font, e),
        i = ze(t.padding);
    return (oe(t.text) ? t.text.length : 1) * n.lineHeight + i.height;
}
function _S(t, e) {
    return zn(t, { scale: e, type: 'scale' });
}
function bS(t, e, n) {
    return zn(t, { tick: n, index: e, type: 'tick' });
}
function wS(t, e, n) {
    let i = Bu(t);
    return ((n && e !== 'right') || (!n && e === 'right')) && (i = yS(i)), i;
}
function SS(t, e, n, i) {
    const { top: s, left: r, bottom: o, right: a, chart: l } = t,
        { chartArea: c, scales: u } = l;
    let d = 0,
        h,
        p,
        v;
    const y = o - s,
        _ = a - r;
    if (t.isHorizontal()) {
        if (((p = Re(i, r, a)), H(n))) {
            const m = Object.keys(n)[0],
                g = n[m];
            v = u[m].getPixelForValue(g) + y - e;
        } else
            n === 'center'
                ? (v = (c.bottom + c.top) / 2 + y - e)
                : (v = rf(t, n, e));
        h = a - r;
    } else {
        if (H(n)) {
            const m = Object.keys(n)[0],
                g = n[m];
            p = u[m].getPixelForValue(g) - _ + e;
        } else
            n === 'center'
                ? (p = (c.left + c.right) / 2 - _ + e)
                : (p = rf(t, n, e));
        (v = Re(i, o, s)), (d = n === 'left' ? -xe : xe);
    }
    return { titleX: p, titleY: v, maxWidth: h, rotation: d };
}
class pi extends Tt {
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.type = e.type),
            (this.options = void 0),
            (this.ctx = e.ctx),
            (this.chart = e.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0);
    }
    init(e) {
        (this.options = e.setContext(this.getContext())),
            (this.axis = e.axis),
            (this._userMin = this.parse(e.min)),
            (this._userMax = this.parse(e.max)),
            (this._suggestedMin = this.parse(e.suggestedMin)),
            (this._suggestedMax = this.parse(e.suggestedMax));
    }
    parse(e, n) {
        return e;
    }
    getUserBounds() {
        let {
            _userMin: e,
            _userMax: n,
            _suggestedMin: i,
            _suggestedMax: s,
        } = this;
        return (
            (e = nt(e, Number.POSITIVE_INFINITY)),
            (n = nt(n, Number.NEGATIVE_INFINITY)),
            (i = nt(i, Number.POSITIVE_INFINITY)),
            (s = nt(s, Number.NEGATIVE_INFINITY)),
            {
                min: nt(e, i),
                max: nt(n, s),
                minDefined: ge(e),
                maxDefined: ge(n),
            }
        );
    }
    getMinMax(e) {
        let {
                min: n,
                max: i,
                minDefined: s,
                maxDefined: r,
            } = this.getUserBounds(),
            o;
        if (s && r) return { min: n, max: i };
        const a = this.getMatchingVisibleMetas();
        for (let l = 0, c = a.length; l < c; ++l)
            (o = a[l].controller.getMinMax(this, e)),
                s || (n = Math.min(n, o.min)),
                r || (i = Math.max(i, o.max));
        return (
            (n = r && n > i ? i : n),
            (i = s && n > i ? n : i),
            { min: nt(n, nt(i, n)), max: nt(i, nt(n, i)) }
        );
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0,
        };
    }
    getTicks() {
        return this.ticks;
    }
    getLabels() {
        const e = this.chart.data;
        return (
            this.options.labels ||
            (this.isHorizontal() ? e.xLabels : e.yLabels) ||
            e.labels ||
            []
        );
    }
    getLabelItems(e = this.chart.chartArea) {
        return (
            this._labelItems || (this._labelItems = this._computeLabelItems(e))
        );
    }
    beforeLayout() {
        (this._cache = {}), (this._dataLimitsCached = !1);
    }
    beforeUpdate() {
        ne(this.options.beforeUpdate, [this]);
    }
    update(e, n, i) {
        const { beginAtZero: s, grace: r, ticks: o } = this.options,
            a = o.sampleSize;
        this.beforeUpdate(),
            (this.maxWidth = e),
            (this.maxHeight = n),
            (this._margins = i =
                Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
                ? this.width + i.left + i.right
                : this.height + i.top + i.bottom),
            this._dataLimitsCached ||
                (this.beforeDataLimits(),
                this.determineDataLimits(),
                this.afterDataLimits(),
                (this._range = Nb(this, r, s)),
                (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks();
        const l = a < this.ticks.length;
        this._convertTicksToLabels(l ? af(this.ticks, a) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            o.display &&
                (o.autoSkip || o.source === 'auto') &&
                ((this.ticks = dS(this, this.ticks)),
                (this._labelSizes = null),
                this.afterAutoSkip()),
            l && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate();
    }
    configure() {
        let e = this.options.reverse,
            n,
            i;
        this.isHorizontal()
            ? ((n = this.left), (i = this.right))
            : ((n = this.top), (i = this.bottom), (e = !e)),
            (this._startPixel = n),
            (this._endPixel = i),
            (this._reversePixels = e),
            (this._length = i - n),
            (this._alignToPixels = this.options.alignToPixels);
    }
    afterUpdate() {
        ne(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
        ne(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
        this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = 0),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = 0),
              (this.bottom = this.height)),
            (this.paddingLeft = 0),
            (this.paddingTop = 0),
            (this.paddingRight = 0),
            (this.paddingBottom = 0);
    }
    afterSetDimensions() {
        ne(this.options.afterSetDimensions, [this]);
    }
    _callHooks(e) {
        this.chart.notifyPlugins(e, this.getContext()),
            ne(this.options[e], [this]);
    }
    beforeDataLimits() {
        this._callHooks('beforeDataLimits');
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks('afterDataLimits');
    }
    beforeBuildTicks() {
        this._callHooks('beforeBuildTicks');
    }
    buildTicks() {
        return [];
    }
    afterBuildTicks() {
        this._callHooks('afterBuildTicks');
    }
    beforeTickToLabelConversion() {
        ne(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(e) {
        const n = this.options.ticks;
        let i, s, r;
        for (i = 0, s = e.length; i < s; i++)
            (r = e[i]), (r.label = ne(n.callback, [r.value, i, e], this));
    }
    afterTickToLabelConversion() {
        ne(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
        ne(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
        const e = this.options,
            n = e.ticks,
            i = of(this.ticks.length, e.ticks.maxTicksLimit),
            s = n.minRotation || 0,
            r = n.maxRotation;
        let o = s,
            a,
            l,
            c;
        if (
            !this._isVisible() ||
            !n.display ||
            s >= r ||
            i <= 1 ||
            !this.isHorizontal()
        ) {
            this.labelRotation = s;
            return;
        }
        const u = this._getLabelSizes(),
            d = u.widest.width,
            h = u.highest.height,
            p = Pe(this.chart.width - d, 0, this.maxWidth);
        (a = e.offset ? this.maxWidth / i : p / (i - 1)),
            d + 6 > a &&
                ((a = p / (i - (e.offset ? 0.5 : 1))),
                (l =
                    this.maxHeight -
                    us(e.grid) -
                    n.padding -
                    lf(e.title, this.chart.options.font)),
                (c = Math.sqrt(d * d + h * h)),
                (o = Fu(
                    Math.min(
                        Math.asin(Pe((u.highest.height + 6) / a, -1, 1)),
                        Math.asin(Pe(l / c, -1, 1)) -
                            Math.asin(Pe(h / c, -1, 1))
                    )
                )),
                (o = Math.max(s, Math.min(r, o)))),
            (this.labelRotation = o);
    }
    afterCalculateLabelRotation() {
        ne(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
        ne(this.options.beforeFit, [this]);
    }
    fit() {
        const e = { width: 0, height: 0 },
            {
                chart: n,
                options: { ticks: i, title: s, grid: r },
            } = this,
            o = this._isVisible(),
            a = this.isHorizontal();
        if (o) {
            const l = lf(s, n.options.font);
            if (
                (a
                    ? ((e.width = this.maxWidth), (e.height = us(r) + l))
                    : ((e.height = this.maxHeight), (e.width = us(r) + l)),
                i.display && this.ticks.length)
            ) {
                const {
                        first: c,
                        last: u,
                        widest: d,
                        highest: h,
                    } = this._getLabelSizes(),
                    p = i.padding * 2,
                    v = St(this.labelRotation),
                    y = Math.cos(v),
                    _ = Math.sin(v);
                if (a) {
                    const m = i.mirror ? 0 : _ * d.width + y * h.height;
                    e.height = Math.min(this.maxHeight, e.height + m + p);
                } else {
                    const m = i.mirror ? 0 : y * d.width + _ * h.height;
                    e.width = Math.min(this.maxWidth, e.width + m + p);
                }
                this._calculatePadding(c, u, _, y);
            }
        }
        this._handleMargins(),
            a
                ? ((this.width = this._length =
                      n.width - this._margins.left - this._margins.right),
                  (this.height = e.height))
                : ((this.width = e.width),
                  (this.height = this._length =
                      n.height - this._margins.top - this._margins.bottom));
    }
    _calculatePadding(e, n, i, s) {
        const {
                ticks: { align: r, padding: o },
                position: a,
            } = this.options,
            l = this.labelRotation !== 0,
            c = a !== 'top' && this.axis === 'x';
        if (this.isHorizontal()) {
            const u = this.getPixelForTick(0) - this.left,
                d = this.right - this.getPixelForTick(this.ticks.length - 1);
            let h = 0,
                p = 0;
            l
                ? c
                    ? ((h = s * e.width), (p = i * n.height))
                    : ((h = i * e.height), (p = s * n.width))
                : r === 'start'
                ? (p = n.width)
                : r === 'end'
                ? (h = e.width)
                : r !== 'inner' && ((h = e.width / 2), (p = n.width / 2)),
                (this.paddingLeft = Math.max(
                    ((h - u + o) * this.width) / (this.width - u),
                    0
                )),
                (this.paddingRight = Math.max(
                    ((p - d + o) * this.width) / (this.width - d),
                    0
                ));
        } else {
            let u = n.height / 2,
                d = e.height / 2;
            r === 'start'
                ? ((u = 0), (d = e.height))
                : r === 'end' && ((u = n.height), (d = 0)),
                (this.paddingTop = u + o),
                (this.paddingBottom = d + o);
        }
    }
    _handleMargins() {
        this._margins &&
            ((this._margins.left = Math.max(
                this.paddingLeft,
                this._margins.left
            )),
            (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
            (this._margins.right = Math.max(
                this.paddingRight,
                this._margins.right
            )),
            (this._margins.bottom = Math.max(
                this.paddingBottom,
                this._margins.bottom
            )));
    }
    afterFit() {
        ne(this.options.afterFit, [this]);
    }
    isHorizontal() {
        const { axis: e, position: n } = this.options;
        return n === 'top' || n === 'bottom' || e === 'x';
    }
    isFullSize() {
        return this.options.fullSize;
    }
    _convertTicksToLabels(e) {
        this.beforeTickToLabelConversion(), this.generateTickLabels(e);
        let n, i;
        for (n = 0, i = e.length; n < i; n++)
            X(e[n].label) && (e.splice(n, 1), i--, n--);
        this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
        let e = this._labelSizes;
        if (!e) {
            const n = this.options.ticks.sampleSize;
            let i = this.ticks;
            n < i.length && (i = af(i, n)),
                (this._labelSizes = e =
                    this._computeLabelSizes(
                        i,
                        i.length,
                        this.options.ticks.maxTicksLimit
                    ));
        }
        return e;
    }
    _computeLabelSizes(e, n, i) {
        const { ctx: s, _longestTextCache: r } = this,
            o = [],
            a = [],
            l = Math.floor(n / of(n, i));
        let c = 0,
            u = 0,
            d,
            h,
            p,
            v,
            y,
            _,
            m,
            g,
            x,
            b,
            w;
        for (d = 0; d < n; d += l) {
            if (
                ((v = e[d].label),
                (y = this._resolveTickFontOptions(d)),
                (s.font = _ = y.string),
                (m = r[_] = r[_] || { data: {}, gc: [] }),
                (g = y.lineHeight),
                (x = b = 0),
                !X(v) && !oe(v))
            )
                (x = ta(s, m.data, m.gc, x, v)), (b = g);
            else if (oe(v))
                for (h = 0, p = v.length; h < p; ++h)
                    (w = v[h]),
                        !X(w) &&
                            !oe(w) &&
                            ((x = ta(s, m.data, m.gc, x, w)), (b += g));
            o.push(x), a.push(b), (c = Math.max(x, c)), (u = Math.max(b, u));
        }
        xS(r, n);
        const k = o.indexOf(c),
            S = a.indexOf(u),
            M = (T) => ({ width: o[T] || 0, height: a[T] || 0 });
        return {
            first: M(0),
            last: M(n - 1),
            widest: M(k),
            highest: M(S),
            widths: o,
            heights: a,
        };
    }
    getLabelForValue(e) {
        return e;
    }
    getPixelForValue(e, n) {
        return NaN;
    }
    getValueForPixel(e) {}
    getPixelForTick(e) {
        const n = this.ticks;
        return e < 0 || e > n.length - 1
            ? null
            : this.getPixelForValue(n[e].value);
    }
    getPixelForDecimal(e) {
        this._reversePixels && (e = 1 - e);
        const n = this._startPixel + e * this._length;
        return ab(this._alignToPixels ? Vn(this.chart, n, 0) : n);
    }
    getDecimalForPixel(e) {
        const n = (e - this._startPixel) / this._length;
        return this._reversePixels ? 1 - n : n;
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
        const { min: e, max: n } = this;
        return e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0;
    }
    getContext(e) {
        const n = this.ticks || [];
        if (e >= 0 && e < n.length) {
            const i = n[e];
            return i.$context || (i.$context = bS(this.getContext(), e, i));
        }
        return (
            this.$context || (this.$context = _S(this.chart.getContext(), this))
        );
    }
    _tickSize() {
        const e = this.options.ticks,
            n = St(this.labelRotation),
            i = Math.abs(Math.cos(n)),
            s = Math.abs(Math.sin(n)),
            r = this._getLabelSizes(),
            o = e.autoSkipPadding || 0,
            a = r ? r.widest.width + o : 0,
            l = r ? r.highest.height + o : 0;
        return this.isHorizontal()
            ? l * i > a * s
                ? a / i
                : l / s
            : l * s < a * i
            ? l / i
            : a / s;
    }
    _isVisible() {
        const e = this.options.display;
        return e !== 'auto' ? !!e : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(e) {
        const n = this.axis,
            i = this.chart,
            s = this.options,
            { grid: r, position: o, border: a } = s,
            l = r.offset,
            c = this.isHorizontal(),
            d = this.ticks.length + (l ? 1 : 0),
            h = us(r),
            p = [],
            v = a.setContext(this.getContext()),
            y = v.display ? v.width : 0,
            _ = y / 2,
            m = function (D) {
                return Vn(i, D, y);
            };
        let g, x, b, w, k, S, M, T, j, R, I, U;
        if (o === 'top')
            (g = m(this.bottom)),
                (S = this.bottom - h),
                (T = g - _),
                (R = m(e.top) + _),
                (U = e.bottom);
        else if (o === 'bottom')
            (g = m(this.top)),
                (R = e.top),
                (U = m(e.bottom) - _),
                (S = g + _),
                (T = this.top + h);
        else if (o === 'left')
            (g = m(this.right)),
                (k = this.right - h),
                (M = g - _),
                (j = m(e.left) + _),
                (I = e.right);
        else if (o === 'right')
            (g = m(this.left)),
                (j = e.left),
                (I = m(e.right) - _),
                (k = g + _),
                (M = this.left + h);
        else if (n === 'x') {
            if (o === 'center') g = m((e.top + e.bottom) / 2 + 0.5);
            else if (H(o)) {
                const D = Object.keys(o)[0],
                    B = o[D];
                g = m(this.chart.scales[D].getPixelForValue(B));
            }
            (R = e.top), (U = e.bottom), (S = g + _), (T = S + h);
        } else if (n === 'y') {
            if (o === 'center') g = m((e.left + e.right) / 2);
            else if (H(o)) {
                const D = Object.keys(o)[0],
                    B = o[D];
                g = m(this.chart.scales[D].getPixelForValue(B));
            }
            (k = g - _), (M = k - h), (j = e.left), (I = e.right);
        }
        const F = V(s.ticks.maxTicksLimit, d),
            A = Math.max(1, Math.ceil(d / F));
        for (x = 0; x < d; x += A) {
            const D = this.getContext(x),
                B = r.setContext(D),
                E = a.setContext(D),
                L = B.lineWidth,
                z = B.color,
                ee = E.dash || [],
                se = E.dashOffset,
                Ot = B.tickWidth,
                Be = B.tickColor,
                Bt = B.tickBorderDash || [],
                Ve = B.tickBorderDashOffset;
            (b = vS(this, x, l)),
                b !== void 0 &&
                    ((w = Vn(i, b, L)),
                    c ? (k = M = j = I = w) : (S = T = R = U = w),
                    p.push({
                        tx1: k,
                        ty1: S,
                        tx2: M,
                        ty2: T,
                        x1: j,
                        y1: R,
                        x2: I,
                        y2: U,
                        width: L,
                        color: z,
                        borderDash: ee,
                        borderDashOffset: se,
                        tickWidth: Ot,
                        tickColor: Be,
                        tickBorderDash: Bt,
                        tickBorderDashOffset: Ve,
                    }));
        }
        return (this._ticksLength = d), (this._borderValue = g), p;
    }
    _computeLabelItems(e) {
        const n = this.axis,
            i = this.options,
            { position: s, ticks: r } = i,
            o = this.isHorizontal(),
            a = this.ticks,
            { align: l, crossAlign: c, padding: u, mirror: d } = r,
            h = us(i.grid),
            p = h + u,
            v = d ? -u : p,
            y = -St(this.labelRotation),
            _ = [];
        let m,
            g,
            x,
            b,
            w,
            k,
            S,
            M,
            T,
            j,
            R,
            I,
            U = 'middle';
        if (s === 'top')
            (k = this.bottom - v), (S = this._getXAxisLabelAlignment());
        else if (s === 'bottom')
            (k = this.top + v), (S = this._getXAxisLabelAlignment());
        else if (s === 'left') {
            const A = this._getYAxisLabelAlignment(h);
            (S = A.textAlign), (w = A.x);
        } else if (s === 'right') {
            const A = this._getYAxisLabelAlignment(h);
            (S = A.textAlign), (w = A.x);
        } else if (n === 'x') {
            if (s === 'center') k = (e.top + e.bottom) / 2 + p;
            else if (H(s)) {
                const A = Object.keys(s)[0],
                    D = s[A];
                k = this.chart.scales[A].getPixelForValue(D) + p;
            }
            S = this._getXAxisLabelAlignment();
        } else if (n === 'y') {
            if (s === 'center') w = (e.left + e.right) / 2 - p;
            else if (H(s)) {
                const A = Object.keys(s)[0],
                    D = s[A];
                w = this.chart.scales[A].getPixelForValue(D);
            }
            S = this._getYAxisLabelAlignment(h).textAlign;
        }
        n === 'y' &&
            (l === 'start' ? (U = 'top') : l === 'end' && (U = 'bottom'));
        const F = this._getLabelSizes();
        for (m = 0, g = a.length; m < g; ++m) {
            (x = a[m]), (b = x.label);
            const A = r.setContext(this.getContext(m));
            (M = this.getPixelForTick(m) + r.labelOffset),
                (T = this._resolveTickFontOptions(m)),
                (j = T.lineHeight),
                (R = oe(b) ? b.length : 1);
            const D = R / 2,
                B = A.color,
                E = A.textStrokeColor,
                L = A.textStrokeWidth;
            let z = S;
            o
                ? ((w = M),
                  S === 'inner' &&
                      (m === g - 1
                          ? (z = this.options.reverse ? 'left' : 'right')
                          : m === 0
                          ? (z = this.options.reverse ? 'right' : 'left')
                          : (z = 'center')),
                  s === 'top'
                      ? c === 'near' || y !== 0
                          ? (I = -R * j + j / 2)
                          : c === 'center'
                          ? (I = -F.highest.height / 2 - D * j + j)
                          : (I = -F.highest.height + j / 2)
                      : c === 'near' || y !== 0
                      ? (I = j / 2)
                      : c === 'center'
                      ? (I = F.highest.height / 2 - D * j)
                      : (I = F.highest.height - R * j),
                  d && (I *= -1),
                  y !== 0 &&
                      !A.showLabelBackdrop &&
                      (w += (j / 2) * Math.sin(y)))
                : ((k = M), (I = ((1 - R) * j) / 2));
            let ee;
            if (A.showLabelBackdrop) {
                const se = ze(A.backdropPadding),
                    Ot = F.heights[m],
                    Be = F.widths[m];
                let Bt = I - se.top,
                    Ve = 0 - se.left;
                switch (U) {
                    case 'middle':
                        Bt -= Ot / 2;
                        break;
                    case 'bottom':
                        Bt -= Ot;
                        break;
                }
                switch (S) {
                    case 'center':
                        Ve -= Be / 2;
                        break;
                    case 'right':
                        Ve -= Be;
                        break;
                    case 'inner':
                        m === g - 1 ? (Ve -= Be) : m > 0 && (Ve -= Be / 2);
                        break;
                }
                ee = {
                    left: Ve,
                    top: Bt,
                    width: Be + se.width,
                    height: Ot + se.height,
                    color: A.backdropColor,
                };
            }
            _.push({
                label: b,
                font: T,
                textOffset: I,
                options: {
                    rotation: y,
                    color: B,
                    strokeColor: E,
                    strokeWidth: L,
                    textAlign: z,
                    textBaseline: U,
                    translation: [w, k],
                    backdrop: ee,
                },
            });
        }
        return _;
    }
    _getXAxisLabelAlignment() {
        const { position: e, ticks: n } = this.options;
        if (-St(this.labelRotation)) return e === 'top' ? 'left' : 'right';
        let s = 'center';
        return (
            n.align === 'start'
                ? (s = 'left')
                : n.align === 'end'
                ? (s = 'right')
                : n.align === 'inner' && (s = 'inner'),
            s
        );
    }
    _getYAxisLabelAlignment(e) {
        const {
                position: n,
                ticks: { crossAlign: i, mirror: s, padding: r },
            } = this.options,
            o = this._getLabelSizes(),
            a = e + r,
            l = o.widest.width;
        let c, u;
        return (
            n === 'left'
                ? s
                    ? ((u = this.right + r),
                      i === 'near'
                          ? (c = 'left')
                          : i === 'center'
                          ? ((c = 'center'), (u += l / 2))
                          : ((c = 'right'), (u += l)))
                    : ((u = this.right - a),
                      i === 'near'
                          ? (c = 'right')
                          : i === 'center'
                          ? ((c = 'center'), (u -= l / 2))
                          : ((c = 'left'), (u = this.left)))
                : n === 'right'
                ? s
                    ? ((u = this.left + r),
                      i === 'near'
                          ? (c = 'right')
                          : i === 'center'
                          ? ((c = 'center'), (u -= l / 2))
                          : ((c = 'left'), (u -= l)))
                    : ((u = this.left + a),
                      i === 'near'
                          ? (c = 'left')
                          : i === 'center'
                          ? ((c = 'center'), (u += l / 2))
                          : ((c = 'right'), (u = this.right)))
                : (c = 'right'),
            { textAlign: c, x: u }
        );
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const e = this.chart,
            n = this.options.position;
        if (n === 'left' || n === 'right')
            return {
                top: 0,
                left: this.left,
                bottom: e.height,
                right: this.right,
            };
        if (n === 'top' || n === 'bottom')
            return {
                top: this.top,
                left: 0,
                bottom: this.bottom,
                right: e.width,
            };
    }
    drawBackground() {
        const {
            ctx: e,
            options: { backgroundColor: n },
            left: i,
            top: s,
            width: r,
            height: o,
        } = this;
        n && (e.save(), (e.fillStyle = n), e.fillRect(i, s, r, o), e.restore());
    }
    getLineWidthForValue(e) {
        const n = this.options.grid;
        if (!this._isVisible() || !n.display) return 0;
        const s = this.ticks.findIndex((r) => r.value === e);
        return s >= 0 ? n.setContext(this.getContext(s)).lineWidth : 0;
    }
    drawGrid(e) {
        const n = this.options.grid,
            i = this.ctx,
            s =
                this._gridLineItems ||
                (this._gridLineItems = this._computeGridLineItems(e));
        let r, o;
        const a = (l, c, u) => {
            !u.width ||
                !u.color ||
                (i.save(),
                (i.lineWidth = u.width),
                (i.strokeStyle = u.color),
                i.setLineDash(u.borderDash || []),
                (i.lineDashOffset = u.borderDashOffset),
                i.beginPath(),
                i.moveTo(l.x, l.y),
                i.lineTo(c.x, c.y),
                i.stroke(),
                i.restore());
        };
        if (n.display)
            for (r = 0, o = s.length; r < o; ++r) {
                const l = s[r];
                n.drawOnChartArea &&
                    a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
                    n.drawTicks &&
                        a(
                            { x: l.tx1, y: l.ty1 },
                            { x: l.tx2, y: l.ty2 },
                            {
                                color: l.tickColor,
                                width: l.tickWidth,
                                borderDash: l.tickBorderDash,
                                borderDashOffset: l.tickBorderDashOffset,
                            }
                        );
            }
    }
    drawBorder() {
        const {
                chart: e,
                ctx: n,
                options: { border: i, grid: s },
            } = this,
            r = i.setContext(this.getContext()),
            o = i.display ? r.width : 0;
        if (!o) return;
        const a = s.setContext(this.getContext(0)).lineWidth,
            l = this._borderValue;
        let c, u, d, h;
        this.isHorizontal()
            ? ((c = Vn(e, this.left, o) - o / 2),
              (u = Vn(e, this.right, a) + a / 2),
              (d = h = l))
            : ((d = Vn(e, this.top, o) - o / 2),
              (h = Vn(e, this.bottom, a) + a / 2),
              (c = u = l)),
            n.save(),
            (n.lineWidth = r.width),
            (n.strokeStyle = r.color),
            n.beginPath(),
            n.moveTo(c, d),
            n.lineTo(u, h),
            n.stroke(),
            n.restore();
    }
    drawLabels(e) {
        if (!this.options.ticks.display) return;
        const i = this.ctx,
            s = this._computeLabelArea();
        s && Pa(i, s);
        const r = this.getLabelItems(e);
        for (const o of r) {
            const a = o.options,
                l = o.font,
                c = o.label,
                u = o.textOffset;
            ui(i, c, 0, u, l, a);
        }
        s && Ea(i);
    }
    drawTitle() {
        const {
            ctx: e,
            options: { position: n, title: i, reverse: s },
        } = this;
        if (!i.display) return;
        const r = Se(i.font),
            o = ze(i.padding),
            a = i.align;
        let l = r.lineHeight / 2;
        n === 'bottom' || n === 'center' || H(n)
            ? ((l += o.bottom),
              oe(i.text) && (l += r.lineHeight * (i.text.length - 1)))
            : (l += o.top);
        const {
            titleX: c,
            titleY: u,
            maxWidth: d,
            rotation: h,
        } = SS(this, l, n, a);
        ui(e, i.text, 0, 0, r, {
            color: i.color,
            maxWidth: d,
            rotation: h,
            textAlign: wS(a, n, s),
            textBaseline: 'middle',
            translation: [c, u],
        });
    }
    draw(e) {
        this._isVisible() &&
            (this.drawBackground(),
            this.drawGrid(e),
            this.drawBorder(),
            this.drawTitle(),
            this.drawLabels(e));
    }
    _layers() {
        const e = this.options,
            n = (e.ticks && e.ticks.z) || 0,
            i = V(e.grid && e.grid.z, -1),
            s = V(e.border && e.border.z, 0);
        return !this._isVisible() || this.draw !== pi.prototype.draw
            ? [
                  {
                      z: n,
                      draw: (r) => {
                          this.draw(r);
                      },
                  },
              ]
            : [
                  {
                      z: i,
                      draw: (r) => {
                          this.drawBackground(),
                              this.drawGrid(r),
                              this.drawTitle();
                      },
                  },
                  {
                      z: s,
                      draw: () => {
                          this.drawBorder();
                      },
                  },
                  {
                      z: n,
                      draw: (r) => {
                          this.drawLabels(r);
                      },
                  },
              ];
    }
    getMatchingVisibleMetas(e) {
        const n = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + 'AxisID',
            s = [];
        let r, o;
        for (r = 0, o = n.length; r < o; ++r) {
            const a = n[r];
            a[i] === this.id && (!e || a.type === e) && s.push(a);
        }
        return s;
    }
    _resolveTickFontOptions(e) {
        const n = this.options.ticks.setContext(this.getContext(e));
        return Se(n.font);
    }
    _maxDigits() {
        const e = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / e;
    }
}
class Yr {
    constructor(e, n, i) {
        (this.type = e),
            (this.scope = n),
            (this.override = i),
            (this.items = Object.create(null));
    }
    isForType(e) {
        return Object.prototype.isPrototypeOf.call(
            this.type.prototype,
            e.prototype
        );
    }
    register(e) {
        const n = Object.getPrototypeOf(e);
        let i;
        MS(n) && (i = this.register(n));
        const s = this.items,
            r = e.id,
            o = this.scope + '.' + r;
        if (!r) throw new Error('class does not have id: ' + e);
        return (
            r in s ||
                ((s[r] = e),
                kS(e, o, i),
                this.override && ye.override(e.id, e.overrides)),
            o
        );
    }
    get(e) {
        return this.items[e];
    }
    unregister(e) {
        const n = this.items,
            i = e.id,
            s = this.scope;
        i in n && delete n[i],
            s && i in ye[s] && (delete ye[s][i], this.override && delete ci[i]);
    }
}
function kS(t, e, n) {
    const i = rr(Object.create(null), [
        n ? ye.get(n) : {},
        ye.get(e),
        t.defaults,
    ]);
    ye.set(e, i),
        t.defaultRoutes && CS(e, t.defaultRoutes),
        t.descriptors && ye.describe(e, t.descriptors);
}
function CS(t, e) {
    Object.keys(e).forEach((n) => {
        const i = n.split('.'),
            s = i.pop(),
            r = [t].concat(i).join('.'),
            o = e[n].split('.'),
            a = o.pop(),
            l = o.join('.');
        ye.route(r, s, l, a);
    });
}
function MS(t) {
    return 'id' in t && 'defaults' in t;
}
class PS {
    constructor() {
        (this.controllers = new Yr(Mt, 'datasets', !0)),
            (this.elements = new Yr(Tt, 'elements')),
            (this.plugins = new Yr(Object, 'plugins')),
            (this.scales = new Yr(pi, 'scales')),
            (this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements,
            ]);
    }
    add(...e) {
        this._each('register', e);
    }
    remove(...e) {
        this._each('unregister', e);
    }
    addControllers(...e) {
        this._each('register', e, this.controllers);
    }
    addElements(...e) {
        this._each('register', e, this.elements);
    }
    addPlugins(...e) {
        this._each('register', e, this.plugins);
    }
    addScales(...e) {
        this._each('register', e, this.scales);
    }
    getController(e) {
        return this._get(e, this.controllers, 'controller');
    }
    getElement(e) {
        return this._get(e, this.elements, 'element');
    }
    getPlugin(e) {
        return this._get(e, this.plugins, 'plugin');
    }
    getScale(e) {
        return this._get(e, this.scales, 'scale');
    }
    removeControllers(...e) {
        this._each('unregister', e, this.controllers);
    }
    removeElements(...e) {
        this._each('unregister', e, this.elements);
    }
    removePlugins(...e) {
        this._each('unregister', e, this.plugins);
    }
    removeScales(...e) {
        this._each('unregister', e, this.scales);
    }
    _each(e, n, i) {
        [...n].forEach((s) => {
            const r = i || this._getRegistryForType(s);
            i || r.isForType(s) || (r === this.plugins && s.id)
                ? this._exec(e, r, s)
                : J(s, (o) => {
                      const a = i || this._getRegistryForType(o);
                      this._exec(e, a, o);
                  });
        });
    }
    _exec(e, n, i) {
        const s = Iu(e);
        ne(i['before' + s], [], i), n[e](i), ne(i['after' + s], [], i);
    }
    _getRegistryForType(e) {
        for (let n = 0; n < this._typedRegistries.length; n++) {
            const i = this._typedRegistries[n];
            if (i.isForType(e)) return i;
        }
        return this.plugins;
    }
    _get(e, n, i) {
        const s = n.get(e);
        if (s === void 0)
            throw new Error('"' + e + '" is not a registered ' + i + '.');
        return s;
    }
}
var Rt = new PS();
class ES {
    constructor() {
        this._init = [];
    }
    notify(e, n, i, s) {
        n === 'beforeInit' &&
            ((this._init = this._createDescriptors(e, !0)),
            this._notify(this._init, e, 'install'));
        const r = s ? this._descriptors(e).filter(s) : this._descriptors(e),
            o = this._notify(r, e, n, i);
        return (
            n === 'afterDestroy' &&
                (this._notify(r, e, 'stop'),
                this._notify(this._init, e, 'uninstall')),
            o
        );
    }
    _notify(e, n, i, s) {
        s = s || {};
        for (const r of e) {
            const o = r.plugin,
                a = o[i],
                l = [n, s, r.options];
            if (ne(a, l, o) === !1 && s.cancelable) return !1;
        }
        return !0;
    }
    invalidate() {
        X(this._cache) ||
            ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(e) {
        if (this._cache) return this._cache;
        const n = (this._cache = this._createDescriptors(e));
        return this._notifyStateChanges(e), n;
    }
    _createDescriptors(e, n) {
        const i = e && e.config,
            s = V(i.options && i.options.plugins, {}),
            r = TS(i);
        return s === !1 && !n ? [] : OS(e, r, s, n);
    }
    _notifyStateChanges(e) {
        const n = this._oldCache || [],
            i = this._cache,
            s = (r, o) =>
                r.filter((a) => !o.some((l) => a.plugin.id === l.plugin.id));
        this._notify(s(n, i), e, 'stop'), this._notify(s(i, n), e, 'start');
    }
}
function TS(t) {
    const e = {},
        n = [],
        i = Object.keys(Rt.plugins.items);
    for (let r = 0; r < i.length; r++) n.push(Rt.getPlugin(i[r]));
    const s = t.plugins || [];
    for (let r = 0; r < s.length; r++) {
        const o = s[r];
        n.indexOf(o) === -1 && (n.push(o), (e[o.id] = !0));
    }
    return { plugins: n, localIds: e };
}
function jS(t, e) {
    return !e && t === !1 ? null : t === !0 ? {} : t;
}
function OS(t, { plugins: e, localIds: n }, i, s) {
    const r = [],
        o = t.getContext();
    for (const a of e) {
        const l = a.id,
            c = jS(i[l], s);
        c !== null &&
            r.push({
                plugin: a,
                options: NS(t.config, { plugin: a, local: n[l] }, c, o),
            });
    }
    return r;
}
function NS(t, { plugin: e, local: n }, i, s) {
    const r = t.pluginScopeKeys(e),
        o = t.getOptionScopes(i, r);
    return (
        n && e.defaults && o.push(e.defaults),
        t.createResolver(o, s, [''], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0,
        })
    );
}
function Sc(t, e) {
    const n = ye.datasets[t] || {};
    return (
        ((e.datasets || {})[t] || {}).indexAxis ||
        e.indexAxis ||
        n.indexAxis ||
        'x'
    );
}
function DS(t, e) {
    let n = t;
    return (
        t === '_index_'
            ? (n = e)
            : t === '_value_' && (n = e === 'x' ? 'y' : 'x'),
        n
    );
}
function LS(t, e) {
    return t === e ? '_index_' : '_value_';
}
function cf(t) {
    if (t === 'x' || t === 'y' || t === 'r') return t;
}
function RS(t) {
    if (t === 'top' || t === 'bottom') return 'x';
    if (t === 'left' || t === 'right') return 'y';
}
function kc(t, ...e) {
    if (cf(t)) return t;
    for (const n of e) {
        const i =
            n.axis ||
            RS(n.position) ||
            (t.length > 1 && cf(t[0].toLowerCase()));
        if (i) return i;
    }
    throw new Error(
        `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`
    );
}
function uf(t, e, n) {
    if (n[e + 'AxisID'] === t) return { axis: e };
}
function AS(t, e) {
    if (e.data && e.data.datasets) {
        const n = e.data.datasets.filter(
            (i) => i.xAxisID === t || i.yAxisID === t
        );
        if (n.length) return uf(t, 'x', n[0]) || uf(t, 'y', n[0]);
    }
    return {};
}
function IS(t, e) {
    const n = ci[t.type] || { scales: {} },
        i = e.scales || {},
        s = Sc(t.type, e),
        r = Object.create(null);
    return (
        Object.keys(i).forEach((o) => {
            const a = i[o];
            if (!H(a))
                return console.error(
                    `Invalid scale configuration for scale: ${o}`
                );
            if (a._proxy)
                return console.warn(
                    `Ignoring resolver passed as options for scale: ${o}`
                );
            const l = kc(o, a, AS(o, t), ye.scales[a.type]),
                c = LS(l, s),
                u = n.scales || {};
            r[o] = Ns(Object.create(null), [{ axis: l }, a, u[l], u[c]]);
        }),
        t.data.datasets.forEach((o) => {
            const a = o.type || t.type,
                l = o.indexAxis || Sc(a, e),
                u = (ci[a] || {}).scales || {};
            Object.keys(u).forEach((d) => {
                const h = DS(d, l),
                    p = o[h + 'AxisID'] || h;
                (r[p] = r[p] || Object.create(null)),
                    Ns(r[p], [{ axis: h }, i[p], u[d]]);
            });
        }),
        Object.keys(r).forEach((o) => {
            const a = r[o];
            Ns(a, [ye.scales[a.type], ye.scale]);
        }),
        r
    );
}
function n0(t) {
    const e = t.options || (t.options = {});
    (e.plugins = V(e.plugins, {})), (e.scales = IS(t, e));
}
function i0(t) {
    return (
        (t = t || {}),
        (t.datasets = t.datasets || []),
        (t.labels = t.labels || []),
        t
    );
}
function FS(t) {
    return (t = t || {}), (t.data = i0(t.data)), n0(t), t;
}
const df = new Map(),
    s0 = new Set();
function Xr(t, e) {
    let n = df.get(t);
    return n || ((n = e()), df.set(t, n), s0.add(n)), n;
}
const ds = (t, e, n) => {
    const i = Dn(e, n);
    i !== void 0 && t.add(i);
};
class zS {
    constructor(e) {
        (this._config = FS(e)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map());
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(e) {
        this._config.type = e;
    }
    get data() {
        return this._config.data;
    }
    set data(e) {
        this._config.data = i0(e);
    }
    get options() {
        return this._config.options;
    }
    set options(e) {
        this._config.options = e;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const e = this._config;
        this.clearCache(), n0(e);
    }
    clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(e) {
        return Xr(e, () => [[`datasets.${e}`, '']]);
    }
    datasetAnimationScopeKeys(e, n) {
        return Xr(`${e}.transition.${n}`, () => [
            [`datasets.${e}.transitions.${n}`, `transitions.${n}`],
            [`datasets.${e}`, ''],
        ]);
    }
    datasetElementScopeKeys(e, n) {
        return Xr(`${e}-${n}`, () => [
            [
                `datasets.${e}.elements.${n}`,
                `datasets.${e}`,
                `elements.${n}`,
                '',
            ],
        ]);
    }
    pluginScopeKeys(e) {
        const n = e.id,
            i = this.type;
        return Xr(`${i}-plugin-${n}`, () => [
            [`plugins.${n}`, ...(e.additionalOptionScopes || [])],
        ]);
    }
    _cachedScopes(e, n) {
        const i = this._scopeCache;
        let s = i.get(e);
        return (!s || n) && ((s = new Map()), i.set(e, s)), s;
    }
    getOptionScopes(e, n, i) {
        const { options: s, type: r } = this,
            o = this._cachedScopes(e, i),
            a = o.get(n);
        if (a) return a;
        const l = new Set();
        n.forEach((u) => {
            e && (l.add(e), u.forEach((d) => ds(l, e, d))),
                u.forEach((d) => ds(l, s, d)),
                u.forEach((d) => ds(l, ci[r] || {}, d)),
                u.forEach((d) => ds(l, ye, d)),
                u.forEach((d) => ds(l, _c, d));
        });
        const c = Array.from(l);
        return (
            c.length === 0 && c.push(Object.create(null)),
            s0.has(n) && o.set(n, c),
            c
        );
    }
    chartOptionScopes() {
        const { options: e, type: n } = this;
        return [e, ci[n] || {}, ye.datasets[n] || {}, { type: n }, ye, _c];
    }
    resolveNamedOptions(e, n, i, s = ['']) {
        const r = { $shared: !0 },
            { resolver: o, subPrefixes: a } = hf(this._resolverCache, e, s);
        let l = o;
        if (VS(o, n)) {
            (r.$shared = !1), (i = Ln(i) ? i() : i);
            const c = this.createResolver(e, i, a);
            l = Qi(o, i, c);
        }
        for (const c of n) r[c] = l[c];
        return r;
    }
    createResolver(e, n, i = [''], s) {
        const { resolver: r } = hf(this._resolverCache, e, i);
        return H(n) ? Qi(r, n, void 0, s) : r;
    }
}
function hf(t, e, n) {
    let i = t.get(e);
    i || ((i = new Map()), t.set(e, i));
    const s = n.join();
    let r = i.get(s);
    return (
        r ||
            ((r = {
                resolver: Hu(e, n),
                subPrefixes: n.filter(
                    (a) => !a.toLowerCase().includes('hover')
                ),
            }),
            i.set(s, r)),
        r
    );
}
const BS = (t) => H(t) && Object.getOwnPropertyNames(t).some((e) => Ln(t[e]));
function VS(t, e) {
    const { isScriptable: n, isIndexable: i } = Ig(t);
    for (const s of e) {
        const r = n(s),
            o = i(s),
            a = (o || r) && t[s];
        if ((r && (Ln(a) || BS(a))) || (o && oe(a))) return !0;
    }
    return !1;
}
var $S = '4.4.1';
const HS = ['top', 'bottom', 'left', 'right', 'chartArea'];
function ff(t, e) {
    return t === 'top' || t === 'bottom' || (HS.indexOf(t) === -1 && e === 'x');
}
function pf(t, e) {
    return function (n, i) {
        return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
    };
}
function mf(t) {
    const e = t.chart,
        n = e.options.animation;
    e.notifyPlugins('afterRender'), ne(n && n.onComplete, [t], e);
}
function WS(t) {
    const e = t.chart,
        n = e.options.animation;
    ne(n && n.onProgress, [t], e);
}
function r0(t) {
    return (
        Qu() && typeof t == 'string'
            ? (t = document.getElementById(t))
            : t && t.length && (t = t[0]),
        t && t.canvas && (t = t.canvas),
        t
    );
}
const So = {},
    gf = (t) => {
        const e = r0(t);
        return Object.values(So)
            .filter((n) => n.canvas === e)
            .pop();
    };
function US(t, e, n) {
    const i = Object.keys(t);
    for (const s of i) {
        const r = +s;
        if (r >= e) {
            const o = t[s];
            delete t[s], (n > 0 || r > e) && (t[r + n] = o);
        }
    }
}
function QS(t, e, n, i) {
    return !n || t.type === 'mouseout' ? null : i ? e : t;
}
function Kr(t, e, n) {
    return t.options.clip ? t[n] : e[n];
}
function YS(t, e) {
    const { xScale: n, yScale: i } = t;
    return n && i
        ? {
              left: Kr(n, e, 'left'),
              right: Kr(n, e, 'right'),
              top: Kr(i, e, 'top'),
              bottom: Kr(i, e, 'bottom'),
          }
        : e;
}
class Yt {
    static register(...e) {
        Rt.add(...e), yf();
    }
    static unregister(...e) {
        Rt.remove(...e), yf();
    }
    constructor(e, n) {
        const i = (this.config = new zS(n)),
            s = r0(e),
            r = gf(s);
        if (r)
            throw new Error(
                "Canvas is already in use. Chart with ID '" +
                    r.id +
                    "' must be destroyed before the canvas with ID '" +
                    r.canvas.id +
                    "' can be reused."
            );
        const o = i.createResolver(i.chartOptionScopes(), this.getContext());
        (this.platform = new (i.platform || uS(s))()),
            this.platform.updateConfig(i);
        const a = this.platform.acquireContext(s, o.aspectRatio),
            l = a && a.canvas,
            c = l && l.height,
            u = l && l.width;
        if (
            ((this.id = K_()),
            (this.ctx = a),
            (this.canvas = l),
            (this.width = u),
            (this.height = c),
            (this._options = o),
            (this._aspectRatio = this.aspectRatio),
            (this._layers = []),
            (this._metasets = []),
            (this._stacks = void 0),
            (this.boxes = []),
            (this.currentDevicePixelRatio = void 0),
            (this.chartArea = void 0),
            (this._active = []),
            (this._lastEvent = void 0),
            (this._listeners = {}),
            (this._responsiveListeners = void 0),
            (this._sortedMetasets = []),
            (this.scales = {}),
            (this._plugins = new ES()),
            (this.$proxies = {}),
            (this._hiddenIndices = {}),
            (this.attached = !1),
            (this._animationsDisabled = void 0),
            (this.$context = void 0),
            (this._doResize = db((d) => this.update(d), o.resizeDelay || 0)),
            (this._dataChanges = []),
            (So[this.id] = this),
            !a || !l)
        ) {
            console.error(
                "Failed to create chart: can't acquire context from the given item"
            );
            return;
        }
        $t.listen(this, 'complete', mf),
            $t.listen(this, 'progress', WS),
            this._initialize(),
            this.attached && this.update();
    }
    get aspectRatio() {
        const {
            options: { aspectRatio: e, maintainAspectRatio: n },
            width: i,
            height: s,
            _aspectRatio: r,
        } = this;
        return X(e) ? (n && r ? r : s ? i / s : null) : e;
    }
    get data() {
        return this.config.data;
    }
    set data(e) {
        this.config.data = e;
    }
    get options() {
        return this._options;
    }
    set options(e) {
        this.config.options = e;
    }
    get registry() {
        return Rt;
    }
    _initialize() {
        return (
            this.notifyPlugins('beforeInit'),
            this.options.responsive
                ? this.resize()
                : Ih(this, this.options.devicePixelRatio),
            this.bindEvents(),
            this.notifyPlugins('afterInit'),
            this
        );
    }
    clear() {
        return Lh(this.canvas, this.ctx), this;
    }
    stop() {
        return $t.stop(this), this;
    }
    resize(e, n) {
        $t.running(this)
            ? (this._resizeBeforeDraw = { width: e, height: n })
            : this._resize(e, n);
    }
    _resize(e, n) {
        const i = this.options,
            s = this.canvas,
            r = i.maintainAspectRatio && this.aspectRatio,
            o = this.platform.getMaximumSize(s, e, n, r),
            a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
            l = this.width ? 'resize' : 'attach';
        (this.width = o.width),
            (this.height = o.height),
            (this._aspectRatio = this.aspectRatio),
            Ih(this, a, !0) &&
                (this.notifyPlugins('resize', { size: o }),
                ne(i.onResize, [this, o], this),
                this.attached && this._doResize(l) && this.render());
    }
    ensureScalesHaveIDs() {
        const n = this.options.scales || {};
        J(n, (i, s) => {
            i.id = s;
        });
    }
    buildOrUpdateScales() {
        const e = this.options,
            n = e.scales,
            i = this.scales,
            s = Object.keys(i).reduce((o, a) => ((o[a] = !1), o), {});
        let r = [];
        n &&
            (r = r.concat(
                Object.keys(n).map((o) => {
                    const a = n[o],
                        l = kc(o, a),
                        c = l === 'r',
                        u = l === 'x';
                    return {
                        options: a,
                        dposition: c ? 'chartArea' : u ? 'bottom' : 'left',
                        dtype: c ? 'radialLinear' : u ? 'category' : 'linear',
                    };
                })
            )),
            J(r, (o) => {
                const a = o.options,
                    l = a.id,
                    c = kc(l, a),
                    u = V(a.type, o.dtype);
                (a.position === void 0 ||
                    ff(a.position, c) !== ff(o.dposition)) &&
                    (a.position = o.dposition),
                    (s[l] = !0);
                let d = null;
                if (l in i && i[l].type === u) d = i[l];
                else {
                    const h = Rt.getScale(u);
                    (d = new h({ id: l, type: u, ctx: this.ctx, chart: this })),
                        (i[d.id] = d);
                }
                d.init(a, e);
            }),
            J(s, (o, a) => {
                o || delete i[a];
            }),
            J(i, (o) => {
                Ie.configure(this, o, o.options), Ie.addBox(this, o);
            });
    }
    _updateMetasets() {
        const e = this._metasets,
            n = this.data.datasets.length,
            i = e.length;
        if ((e.sort((s, r) => s.index - r.index), i > n)) {
            for (let s = n; s < i; ++s) this._destroyDatasetMeta(s);
            e.splice(n, i - n);
        }
        this._sortedMetasets = e.slice(0).sort(pf('order', 'index'));
    }
    _removeUnreferencedMetasets() {
        const {
            _metasets: e,
            data: { datasets: n },
        } = this;
        e.length > n.length && delete this._stacks,
            e.forEach((i, s) => {
                n.filter((r) => r === i._dataset).length === 0 &&
                    this._destroyDatasetMeta(s);
            });
    }
    buildOrUpdateControllers() {
        const e = [],
            n = this.data.datasets;
        let i, s;
        for (
            this._removeUnreferencedMetasets(), i = 0, s = n.length;
            i < s;
            i++
        ) {
            const r = n[i];
            let o = this.getDatasetMeta(i);
            const a = r.type || this.config.type;
            if (
                (o.type &&
                    o.type !== a &&
                    (this._destroyDatasetMeta(i), (o = this.getDatasetMeta(i))),
                (o.type = a),
                (o.indexAxis = r.indexAxis || Sc(a, this.options)),
                (o.order = r.order || 0),
                (o.index = i),
                (o.label = '' + r.label),
                (o.visible = this.isDatasetVisible(i)),
                o.controller)
            )
                o.controller.updateIndex(i), o.controller.linkScales();
            else {
                const l = Rt.getController(a),
                    { datasetElementType: c, dataElementType: u } =
                        ye.datasets[a];
                Object.assign(l, {
                    dataElementType: Rt.getElement(u),
                    datasetElementType: c && Rt.getElement(c),
                }),
                    (o.controller = new l(this, i)),
                    e.push(o.controller);
            }
        }
        return this._updateMetasets(), e;
    }
    _resetElements() {
        J(
            this.data.datasets,
            (e, n) => {
                this.getDatasetMeta(n).controller.reset();
            },
            this
        );
    }
    reset() {
        this._resetElements(), this.notifyPlugins('reset');
    }
    update(e) {
        const n = this.config;
        n.update();
        const i = (this._options = n.createResolver(
                n.chartOptionScopes(),
                this.getContext()
            )),
            s = (this._animationsDisabled = !i.animation);
        if (
            (this._updateScales(),
            this._checkEventBindings(),
            this._updateHiddenIndices(),
            this._plugins.invalidate(),
            this.notifyPlugins('beforeUpdate', { mode: e, cancelable: !0 }) ===
                !1)
        )
            return;
        const r = this.buildOrUpdateControllers();
        this.notifyPlugins('beforeElementsUpdate');
        let o = 0;
        for (let c = 0, u = this.data.datasets.length; c < u; c++) {
            const { controller: d } = this.getDatasetMeta(c),
                h = !s && r.indexOf(d) === -1;
            d.buildOrUpdateElements(h), (o = Math.max(+d.getMaxOverflow(), o));
        }
        (o = this._minPadding = i.layout.autoPadding ? o : 0),
            this._updateLayout(o),
            s ||
                J(r, (c) => {
                    c.reset();
                }),
            this._updateDatasets(e),
            this.notifyPlugins('afterUpdate', { mode: e }),
            this._layers.sort(pf('z', '_idx'));
        const { _active: a, _lastEvent: l } = this;
        l
            ? this._eventHandler(l, !0)
            : a.length && this._updateHoverStyles(a, a, !0),
            this.render();
    }
    _updateScales() {
        J(this.scales, (e) => {
            Ie.removeBox(this, e);
        }),
            this.ensureScalesHaveIDs(),
            this.buildOrUpdateScales();
    }
    _checkEventBindings() {
        const e = this.options,
            n = new Set(Object.keys(this._listeners)),
            i = new Set(e.events);
        (!Ch(n, i) || !!this._responsiveListeners !== e.responsive) &&
            (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
        const { _hiddenIndices: e } = this,
            n = this._getUniformDataChanges() || [];
        for (const { method: i, start: s, count: r } of n) {
            const o = i === '_removeElements' ? -r : r;
            US(e, s, o);
        }
    }
    _getUniformDataChanges() {
        const e = this._dataChanges;
        if (!e || !e.length) return;
        this._dataChanges = [];
        const n = this.data.datasets.length,
            i = (r) =>
                new Set(
                    e
                        .filter((o) => o[0] === r)
                        .map((o, a) => a + ',' + o.splice(1).join(','))
                ),
            s = i(0);
        for (let r = 1; r < n; r++) if (!Ch(s, i(r))) return;
        return Array.from(s)
            .map((r) => r.split(','))
            .map((r) => ({ method: r[1], start: +r[2], count: +r[3] }));
    }
    _updateLayout(e) {
        if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1)
            return;
        Ie.update(this, this.width, this.height, e);
        const n = this.chartArea,
            i = n.width <= 0 || n.height <= 0;
        (this._layers = []),
            J(
                this.boxes,
                (s) => {
                    (i && s.position === 'chartArea') ||
                        (s.configure && s.configure(),
                        this._layers.push(...s._layers()));
                },
                this
            ),
            this._layers.forEach((s, r) => {
                s._idx = r;
            }),
            this.notifyPlugins('afterLayout');
    }
    _updateDatasets(e) {
        if (
            this.notifyPlugins('beforeDatasetsUpdate', {
                mode: e,
                cancelable: !0,
            }) !== !1
        ) {
            for (let n = 0, i = this.data.datasets.length; n < i; ++n)
                this.getDatasetMeta(n).controller.configure();
            for (let n = 0, i = this.data.datasets.length; n < i; ++n)
                this._updateDataset(n, Ln(e) ? e({ datasetIndex: n }) : e);
            this.notifyPlugins('afterDatasetsUpdate', { mode: e });
        }
    }
    _updateDataset(e, n) {
        const i = this.getDatasetMeta(e),
            s = { meta: i, index: e, mode: n, cancelable: !0 };
        this.notifyPlugins('beforeDatasetUpdate', s) !== !1 &&
            (i.controller._update(n),
            (s.cancelable = !1),
            this.notifyPlugins('afterDatasetUpdate', s));
    }
    render() {
        this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
            ($t.has(this)
                ? this.attached && !$t.running(this) && $t.start(this)
                : (this.draw(), mf({ chart: this })));
    }
    draw() {
        let e;
        if (this._resizeBeforeDraw) {
            const { width: i, height: s } = this._resizeBeforeDraw;
            this._resize(i, s), (this._resizeBeforeDraw = null);
        }
        if (
            (this.clear(),
            this.width <= 0 ||
                this.height <= 0 ||
                this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
        )
            return;
        const n = this._layers;
        for (e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(this.chartArea);
        for (this._drawDatasets(); e < n.length; ++e) n[e].draw(this.chartArea);
        this.notifyPlugins('afterDraw');
    }
    _getSortedDatasetMetas(e) {
        const n = this._sortedMetasets,
            i = [];
        let s, r;
        for (s = 0, r = n.length; s < r; ++s) {
            const o = n[s];
            (!e || o.visible) && i.push(o);
        }
        return i;
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
        if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1)
            return;
        const e = this.getSortedVisibleDatasetMetas();
        for (let n = e.length - 1; n >= 0; --n) this._drawDataset(e[n]);
        this.notifyPlugins('afterDatasetsDraw');
    }
    _drawDataset(e) {
        const n = this.ctx,
            i = e._clip,
            s = !i.disabled,
            r = YS(e, this.chartArea),
            o = { meta: e, index: e.index, cancelable: !0 };
        this.notifyPlugins('beforeDatasetDraw', o) !== !1 &&
            (s &&
                Pa(n, {
                    left: i.left === !1 ? 0 : r.left - i.left,
                    right: i.right === !1 ? this.width : r.right + i.right,
                    top: i.top === !1 ? 0 : r.top - i.top,
                    bottom: i.bottom === !1 ? this.height : r.bottom + i.bottom,
                }),
            e.controller.draw(),
            s && Ea(n),
            (o.cancelable = !1),
            this.notifyPlugins('afterDatasetDraw', o));
    }
    isPointInArea(e) {
        return Jt(e, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, n, i, s) {
        const r = Hw.modes[n];
        return typeof r == 'function' ? r(this, e, i, s) : [];
    }
    getDatasetMeta(e) {
        const n = this.data.datasets[e],
            i = this._metasets;
        let s = i.filter((r) => r && r._dataset === n).pop();
        return (
            s ||
                ((s = {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null,
                    order: (n && n.order) || 0,
                    index: e,
                    _dataset: n,
                    _parsed: [],
                    _sorted: !1,
                }),
                i.push(s)),
            s
        );
    }
    getContext() {
        return (
            this.$context ||
            (this.$context = zn(null, { chart: this, type: 'chart' }))
        );
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(e) {
        const n = this.data.datasets[e];
        if (!n) return !1;
        const i = this.getDatasetMeta(e);
        return typeof i.hidden == 'boolean' ? !i.hidden : !n.hidden;
    }
    setDatasetVisibility(e, n) {
        const i = this.getDatasetMeta(e);
        i.hidden = !n;
    }
    toggleDataVisibility(e) {
        this._hiddenIndices[e] = !this._hiddenIndices[e];
    }
    getDataVisibility(e) {
        return !this._hiddenIndices[e];
    }
    _updateVisibility(e, n, i) {
        const s = i ? 'show' : 'hide',
            r = this.getDatasetMeta(e),
            o = r.controller._resolveAnimations(void 0, s);
        or(n)
            ? ((r.data[n].hidden = !i), this.update())
            : (this.setDatasetVisibility(e, i),
              o.update(r, { visible: i }),
              this.update((a) => (a.datasetIndex === e ? s : void 0)));
    }
    hide(e, n) {
        this._updateVisibility(e, n, !1);
    }
    show(e, n) {
        this._updateVisibility(e, n, !0);
    }
    _destroyDatasetMeta(e) {
        const n = this._metasets[e];
        n && n.controller && n.controller._destroy(), delete this._metasets[e];
    }
    _stop() {
        let e, n;
        for (
            this.stop(), $t.remove(this), e = 0, n = this.data.datasets.length;
            e < n;
            ++e
        )
            this._destroyDatasetMeta(e);
    }
    destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas: e, ctx: n } = this;
        this._stop(),
            this.config.clearCache(),
            e &&
                (this.unbindEvents(),
                Lh(e, n),
                this.platform.releaseContext(n),
                (this.canvas = null),
                (this.ctx = null)),
            delete So[this.id],
            this.notifyPlugins('afterDestroy');
    }
    toBase64Image(...e) {
        return this.canvas.toDataURL(...e);
    }
    bindEvents() {
        this.bindUserEvents(),
            this.options.responsive
                ? this.bindResponsiveEvents()
                : (this.attached = !0);
    }
    bindUserEvents() {
        const e = this._listeners,
            n = this.platform,
            i = (r, o) => {
                n.addEventListener(this, r, o), (e[r] = o);
            },
            s = (r, o, a) => {
                (r.offsetX = o), (r.offsetY = a), this._eventHandler(r);
            };
        J(this.options.events, (r) => i(r, s));
    }
    bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const e = this._responsiveListeners,
            n = this.platform,
            i = (l, c) => {
                n.addEventListener(this, l, c), (e[l] = c);
            },
            s = (l, c) => {
                e[l] && (n.removeEventListener(this, l, c), delete e[l]);
            },
            r = (l, c) => {
                this.canvas && this.resize(l, c);
            };
        let o;
        const a = () => {
            s('attach', a),
                (this.attached = !0),
                this.resize(),
                i('resize', r),
                i('detach', o);
        };
        (o = () => {
            (this.attached = !1),
                s('resize', r),
                this._stop(),
                this._resize(0, 0),
                i('attach', a);
        }),
            n.isAttached(this.canvas) ? a() : o();
    }
    unbindEvents() {
        J(this._listeners, (e, n) => {
            this.platform.removeEventListener(this, n, e);
        }),
            (this._listeners = {}),
            J(this._responsiveListeners, (e, n) => {
                this.platform.removeEventListener(this, n, e);
            }),
            (this._responsiveListeners = void 0);
    }
    updateHoverStyle(e, n, i) {
        const s = i ? 'set' : 'remove';
        let r, o, a, l;
        for (
            n === 'dataset' &&
                ((r = this.getDatasetMeta(e[0].datasetIndex)),
                r.controller['_' + s + 'DatasetHoverStyle']()),
                a = 0,
                l = e.length;
            a < l;
            ++a
        ) {
            o = e[a];
            const c = o && this.getDatasetMeta(o.datasetIndex).controller;
            c && c[s + 'HoverStyle'](o.element, o.datasetIndex, o.index);
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(e) {
        const n = this._active || [],
            i = e.map(({ datasetIndex: r, index: o }) => {
                const a = this.getDatasetMeta(r);
                if (!a) throw new Error('No dataset found at index ' + r);
                return { datasetIndex: r, element: a.data[o], index: o };
            });
        !Jo(i, n) &&
            ((this._active = i),
            (this._lastEvent = null),
            this._updateHoverStyles(i, n));
    }
    notifyPlugins(e, n, i) {
        return this._plugins.notify(this, e, n, i);
    }
    isPluginEnabled(e) {
        return (
            this._plugins._cache.filter((n) => n.plugin.id === e).length === 1
        );
    }
    _updateHoverStyles(e, n, i) {
        const s = this.options.hover,
            r = (l, c) =>
                l.filter(
                    (u) =>
                        !c.some(
                            (d) =>
                                u.datasetIndex === d.datasetIndex &&
                                u.index === d.index
                        )
                ),
            o = r(n, e),
            a = i ? e : r(e, n);
        o.length && this.updateHoverStyle(o, s.mode, !1),
            a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
    }
    _eventHandler(e, n) {
        const i = {
                event: e,
                replay: n,
                cancelable: !0,
                inChartArea: this.isPointInArea(e),
            },
            s = (o) =>
                (o.options.events || this.options.events).includes(
                    e.native.type
                );
        if (this.notifyPlugins('beforeEvent', i, s) === !1) return;
        const r = this._handleEvent(e, n, i.inChartArea);
        return (
            (i.cancelable = !1),
            this.notifyPlugins('afterEvent', i, s),
            (r || i.changed) && this.render(),
            this
        );
    }
    _handleEvent(e, n, i) {
        const { _active: s = [], options: r } = this,
            o = n,
            a = this._getActiveElements(e, s, i, o),
            l = tb(e),
            c = QS(e, this._lastEvent, i, l);
        i &&
            ((this._lastEvent = null),
            ne(r.onHover, [e, a, this], this),
            l && ne(r.onClick, [e, a, this], this));
        const u = !Jo(a, s);
        return (
            (u || n) && ((this._active = a), this._updateHoverStyles(a, s, n)),
            (this._lastEvent = c),
            u
        );
    }
    _getActiveElements(e, n, i, s) {
        if (e.type === 'mouseout') return [];
        if (!i) return n;
        const r = this.options.hover;
        return this.getElementsAtEventForMode(e, r.mode, r, s);
    }
}
O(Yt, 'defaults', ye),
    O(Yt, 'instances', So),
    O(Yt, 'overrides', ci),
    O(Yt, 'registry', Rt),
    O(Yt, 'version', $S),
    O(Yt, 'getChart', gf);
function yf() {
    return J(Yt.instances, (t) => t._plugins.invalidate());
}
function XS(t, e, n) {
    const {
        startAngle: i,
        pixelMargin: s,
        x: r,
        y: o,
        outerRadius: a,
        innerRadius: l,
    } = e;
    let c = s / a;
    t.beginPath(),
        t.arc(r, o, a, i - c, n + c),
        l > s
            ? ((c = s / l), t.arc(r, o, l, n + c, i - c, !0))
            : t.arc(r, o, s, n + xe, i - xe),
        t.closePath(),
        t.clip();
}
function KS(t) {
    return $u(t, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
function qS(t, e, n, i) {
    const s = KS(t.options.borderRadius),
        r = (n - e) / 2,
        o = Math.min(r, (i * e) / 2),
        a = (l) => {
            const c = ((n - Math.min(r, l)) * i) / 2;
            return Pe(l, 0, Math.min(r, c));
        };
    return {
        outerStart: a(s.outerStart),
        outerEnd: a(s.outerEnd),
        innerStart: Pe(s.innerStart, 0, o),
        innerEnd: Pe(s.innerEnd, 0, o),
    };
}
function yi(t, e, n, i) {
    return { x: n + t * Math.cos(e), y: i + t * Math.sin(e) };
}
function sa(t, e, n, i, s, r) {
    const { x: o, y: a, startAngle: l, pixelMargin: c, innerRadius: u } = e,
        d = Math.max(e.outerRadius + i + n - c, 0),
        h = u > 0 ? u + i + n + c : 0;
    let p = 0;
    const v = s - l;
    if (i) {
        const A = u > 0 ? u - i : 0,
            D = d > 0 ? d - i : 0,
            B = (A + D) / 2,
            E = B !== 0 ? (v * B) / (B + i) : v;
        p = (v - E) / 2;
    }
    const y = Math.max(0.001, v * d - n / ce) / d,
        _ = (v - y) / 2,
        m = l + _ + p,
        g = s - _ - p,
        {
            outerStart: x,
            outerEnd: b,
            innerStart: w,
            innerEnd: k,
        } = qS(e, h, d, g - m),
        S = d - x,
        M = d - b,
        T = m + x / S,
        j = g - b / M,
        R = h + w,
        I = h + k,
        U = m + w / R,
        F = g - k / I;
    if ((t.beginPath(), r)) {
        const A = (T + j) / 2;
        if ((t.arc(o, a, d, T, A), t.arc(o, a, d, A, j), b > 0)) {
            const L = yi(M, j, o, a);
            t.arc(L.x, L.y, b, j, g + xe);
        }
        const D = yi(I, g, o, a);
        if ((t.lineTo(D.x, D.y), k > 0)) {
            const L = yi(I, F, o, a);
            t.arc(L.x, L.y, k, g + xe, F + Math.PI);
        }
        const B = (g - k / h + (m + w / h)) / 2;
        if (
            (t.arc(o, a, h, g - k / h, B, !0),
            t.arc(o, a, h, B, m + w / h, !0),
            w > 0)
        ) {
            const L = yi(R, U, o, a);
            t.arc(L.x, L.y, w, U + Math.PI, m - xe);
        }
        const E = yi(S, m, o, a);
        if ((t.lineTo(E.x, E.y), x > 0)) {
            const L = yi(S, T, o, a);
            t.arc(L.x, L.y, x, m - xe, T);
        }
    } else {
        t.moveTo(o, a);
        const A = Math.cos(T) * d + o,
            D = Math.sin(T) * d + a;
        t.lineTo(A, D);
        const B = Math.cos(j) * d + o,
            E = Math.sin(j) * d + a;
        t.lineTo(B, E);
    }
    t.closePath();
}
function GS(t, e, n, i, s) {
    const { fullCircles: r, startAngle: o, circumference: a } = e;
    let l = e.endAngle;
    if (r) {
        sa(t, e, n, i, l, s);
        for (let c = 0; c < r; ++c) t.fill();
        isNaN(a) || (l = o + (a % le || le));
    }
    return sa(t, e, n, i, l, s), t.fill(), l;
}
function JS(t, e, n, i, s) {
    const { fullCircles: r, startAngle: o, circumference: a, options: l } = e,
        {
            borderWidth: c,
            borderJoinStyle: u,
            borderDash: d,
            borderDashOffset: h,
        } = l,
        p = l.borderAlign === 'inner';
    if (!c) return;
    t.setLineDash(d || []),
        (t.lineDashOffset = h),
        p
            ? ((t.lineWidth = c * 2), (t.lineJoin = u || 'round'))
            : ((t.lineWidth = c), (t.lineJoin = u || 'bevel'));
    let v = e.endAngle;
    if (r) {
        sa(t, e, n, i, v, s);
        for (let y = 0; y < r; ++y) t.stroke();
        isNaN(a) || (v = o + (a % le || le));
    }
    p && XS(t, e, v), r || (sa(t, e, n, i, v, s), t.stroke());
}
class xs extends Tt {
    constructor(n) {
        super();
        O(this, 'circumference');
        O(this, 'endAngle');
        O(this, 'fullCircles');
        O(this, 'innerRadius');
        O(this, 'outerRadius');
        O(this, 'pixelMargin');
        O(this, 'startAngle');
        (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            n && Object.assign(this, n);
    }
    inRange(n, i, s) {
        const r = this.getProps(['x', 'y'], s),
            { angle: o, distance: a } = Pg(r, { x: n, y: i }),
            {
                startAngle: l,
                endAngle: c,
                innerRadius: u,
                outerRadius: d,
                circumference: h,
            } = this.getProps(
                [
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'circumference',
                ],
                s
            ),
            p = (this.options.spacing + this.options.borderWidth) / 2,
            y = V(h, c - l) >= le || ar(o, l, c),
            _ = qt(a, u + p, d + p);
        return y && _;
    }
    getCenterPoint(n) {
        const {
                x: i,
                y: s,
                startAngle: r,
                endAngle: o,
                innerRadius: a,
                outerRadius: l,
            } = this.getProps(
                [
                    'x',
                    'y',
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                ],
                n
            ),
            { offset: c, spacing: u } = this.options,
            d = (r + o) / 2,
            h = (a + l + u + c) / 2;
        return { x: i + Math.cos(d) * h, y: s + Math.sin(d) * h };
    }
    tooltipPosition(n) {
        return this.getCenterPoint(n);
    }
    draw(n) {
        const { options: i, circumference: s } = this,
            r = (i.offset || 0) / 4,
            o = (i.spacing || 0) / 2,
            a = i.circular;
        if (
            ((this.pixelMargin = i.borderAlign === 'inner' ? 0.33 : 0),
            (this.fullCircles = s > le ? Math.floor(s / le) : 0),
            s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
        )
            return;
        n.save();
        const l = (this.startAngle + this.endAngle) / 2;
        n.translate(Math.cos(l) * r, Math.sin(l) * r);
        const c = 1 - Math.sin(Math.min(ce, s || 0)),
            u = r * c;
        (n.fillStyle = i.backgroundColor),
            (n.strokeStyle = i.borderColor),
            GS(n, this, u, o, a),
            JS(n, this, u, o, a),
            n.restore();
    }
}
O(xs, 'id', 'arc'),
    O(xs, 'defaults', {
        borderAlign: 'center',
        borderColor: '#fff',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0,
    }),
    O(xs, 'defaultRoutes', { backgroundColor: 'backgroundColor' }),
    O(xs, 'descriptors', {
        _scriptable: !0,
        _indexable: (n) => n !== 'borderDash',
    });
function o0(t, e, n = e) {
    (t.lineCap = V(n.borderCapStyle, e.borderCapStyle)),
        t.setLineDash(V(n.borderDash, e.borderDash)),
        (t.lineDashOffset = V(n.borderDashOffset, e.borderDashOffset)),
        (t.lineJoin = V(n.borderJoinStyle, e.borderJoinStyle)),
        (t.lineWidth = V(n.borderWidth, e.borderWidth)),
        (t.strokeStyle = V(n.borderColor, e.borderColor));
}
function ZS(t, e, n) {
    t.lineTo(n.x, n.y);
}
function ek(t) {
    return t.stepped
        ? Sb
        : t.tension || t.cubicInterpolationMode === 'monotone'
        ? kb
        : ZS;
}
function a0(t, e, n = {}) {
    const i = t.length,
        { start: s = 0, end: r = i - 1 } = n,
        { start: o, end: a } = e,
        l = Math.max(s, o),
        c = Math.min(r, a),
        u = (s < o && r < o) || (s > a && r > a);
    return {
        count: i,
        start: l,
        loop: e.loop,
        ilen: c < l && !u ? i + c - l : c - l,
    };
}
function tk(t, e, n, i) {
    const { points: s, options: r } = e,
        { count: o, start: a, loop: l, ilen: c } = a0(s, n, i),
        u = ek(r);
    let { move: d = !0, reverse: h } = i || {},
        p,
        v,
        y;
    for (p = 0; p <= c; ++p)
        (v = s[(a + (h ? c - p : p)) % o]),
            !v.skip &&
                (d ? (t.moveTo(v.x, v.y), (d = !1)) : u(t, y, v, h, r.stepped),
                (y = v));
    return l && ((v = s[(a + (h ? c : 0)) % o]), u(t, y, v, h, r.stepped)), !!l;
}
function nk(t, e, n, i) {
    const s = e.points,
        { count: r, start: o, ilen: a } = a0(s, n, i),
        { move: l = !0, reverse: c } = i || {};
    let u = 0,
        d = 0,
        h,
        p,
        v,
        y,
        _,
        m;
    const g = (b) => (o + (c ? a - b : b)) % r,
        x = () => {
            y !== _ && (t.lineTo(u, _), t.lineTo(u, y), t.lineTo(u, m));
        };
    for (l && ((p = s[g(0)]), t.moveTo(p.x, p.y)), h = 0; h <= a; ++h) {
        if (((p = s[g(h)]), p.skip)) continue;
        const b = p.x,
            w = p.y,
            k = b | 0;
        k === v
            ? (w < y ? (y = w) : w > _ && (_ = w), (u = (d * u + b) / ++d))
            : (x(), t.lineTo(b, w), (v = k), (d = 0), (y = _ = w)),
            (m = w);
    }
    x();
}
function Cc(t) {
    const e = t.options,
        n = e.borderDash && e.borderDash.length;
    return !t._decimated &&
        !t._loop &&
        !e.tension &&
        e.cubicInterpolationMode !== 'monotone' &&
        !e.stepped &&
        !n
        ? nk
        : tk;
}
function ik(t) {
    return t.stepped
        ? nw
        : t.tension || t.cubicInterpolationMode === 'monotone'
        ? iw
        : Yn;
}
function sk(t, e, n, i) {
    let s = e._path;
    s || ((s = e._path = new Path2D()), e.path(s, n, i) && s.closePath()),
        o0(t, e.options),
        t.stroke(s);
}
function rk(t, e, n, i) {
    const { segments: s, options: r } = e,
        o = Cc(e);
    for (const a of s)
        o0(t, r, a.style),
            t.beginPath(),
            o(t, e, a, { start: n, end: n + i - 1 }) && t.closePath(),
            t.stroke();
}
const ok = typeof Path2D == 'function';
function ak(t, e, n, i) {
    ok && !e.options.segment ? sk(t, e, n, i) : rk(t, e, n, i);
}
class vn extends Tt {
    constructor(e) {
        super(),
            (this.animated = !0),
            (this.options = void 0),
            (this._chart = void 0),
            (this._loop = void 0),
            (this._fullLoop = void 0),
            (this._path = void 0),
            (this._points = void 0),
            (this._segments = void 0),
            (this._decimated = !1),
            (this._pointsUpdated = !1),
            (this._datasetIndex = void 0),
            e && Object.assign(this, e);
    }
    updateControlPoints(e, n) {
        const i = this.options;
        if (
            (i.tension || i.cubicInterpolationMode === 'monotone') &&
            !i.stepped &&
            !this._pointsUpdated
        ) {
            const s = i.spanGaps ? this._loop : this._fullLoop;
            Xb(this._points, i, e, s, n), (this._pointsUpdated = !0);
        }
    }
    set points(e) {
        (this._points = e),
            delete this._segments,
            delete this._path,
            (this._pointsUpdated = !1);
    }
    get points() {
        return this._points;
    }
    get segments() {
        return (
            this._segments || (this._segments = cw(this, this.options.segment))
        );
    }
    first() {
        const e = this.segments,
            n = this.points;
        return e.length && n[e[0].start];
    }
    last() {
        const e = this.segments,
            n = this.points,
            i = e.length;
        return i && n[e[i - 1].end];
    }
    interpolate(e, n) {
        const i = this.options,
            s = e[n],
            r = this.points,
            o = Yg(this, { property: n, start: s, end: s });
        if (!o.length) return;
        const a = [],
            l = ik(i);
        let c, u;
        for (c = 0, u = o.length; c < u; ++c) {
            const { start: d, end: h } = o[c],
                p = r[d],
                v = r[h];
            if (p === v) {
                a.push(p);
                continue;
            }
            const y = Math.abs((s - p[n]) / (v[n] - p[n])),
                _ = l(p, v, y, i.stepped);
            (_[n] = e[n]), a.push(_);
        }
        return a.length === 1 ? a[0] : a;
    }
    pathSegment(e, n, i) {
        return Cc(this)(e, this, n, i);
    }
    path(e, n, i) {
        const s = this.segments,
            r = Cc(this);
        let o = this._loop;
        (n = n || 0), (i = i || this.points.length - n);
        for (const a of s) o &= r(e, this, a, { start: n, end: n + i - 1 });
        return !!o;
    }
    draw(e, n, i, s) {
        const r = this.options || {};
        (this.points || []).length &&
            r.borderWidth &&
            (e.save(), ak(e, this, i, s), e.restore()),
            this.animated &&
                ((this._pointsUpdated = !1), (this._path = void 0));
    }
}
O(vn, 'id', 'line'),
    O(vn, 'defaults', {
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: 'miter',
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: 'default',
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0,
    }),
    O(vn, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor',
    }),
    O(vn, 'descriptors', {
        _scriptable: !0,
        _indexable: (e) => e !== 'borderDash' && e !== 'fill',
    });
function vf(t, e, n, i) {
    const s = t.options,
        { [n]: r } = t.getProps([n], i);
    return Math.abs(e - r) < s.radius + s.hitRadius;
}
class ko extends Tt {
    constructor(n) {
        super();
        O(this, 'parsed');
        O(this, 'skip');
        O(this, 'stop');
        (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            n && Object.assign(this, n);
    }
    inRange(n, i, s) {
        const r = this.options,
            { x: o, y: a } = this.getProps(['x', 'y'], s);
        return (
            Math.pow(n - o, 2) + Math.pow(i - a, 2) <
            Math.pow(r.hitRadius + r.radius, 2)
        );
    }
    inXRange(n, i) {
        return vf(this, n, 'x', i);
    }
    inYRange(n, i) {
        return vf(this, n, 'y', i);
    }
    getCenterPoint(n) {
        const { x: i, y: s } = this.getProps(['x', 'y'], n);
        return { x: i, y: s };
    }
    size(n) {
        n = n || this.options || {};
        let i = n.radius || 0;
        i = Math.max(i, (i && n.hoverRadius) || 0);
        const s = (i && n.borderWidth) || 0;
        return (i + s) * 2;
    }
    draw(n, i) {
        const s = this.options;
        this.skip ||
            s.radius < 0.1 ||
            !Jt(this, i, this.size(s) / 2) ||
            ((n.strokeStyle = s.borderColor),
            (n.lineWidth = s.borderWidth),
            (n.fillStyle = s.backgroundColor),
            bc(n, s, this.x, this.y));
    }
    getRange() {
        const n = this.options || {};
        return n.radius + n.hitRadius;
    }
}
O(ko, 'id', 'point'),
    O(ko, 'defaults', {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: 'circle',
        radius: 3,
        rotation: 0,
    }),
    O(ko, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor',
    });
function l0(t, e) {
    const {
        x: n,
        y: i,
        base: s,
        width: r,
        height: o,
    } = t.getProps(['x', 'y', 'base', 'width', 'height'], e);
    let a, l, c, u, d;
    return (
        t.horizontal
            ? ((d = o / 2),
              (a = Math.min(n, s)),
              (l = Math.max(n, s)),
              (c = i - d),
              (u = i + d))
            : ((d = r / 2),
              (a = n - d),
              (l = n + d),
              (c = Math.min(i, s)),
              (u = Math.max(i, s))),
        { left: a, top: c, right: l, bottom: u }
    );
}
function xn(t, e, n, i) {
    return t ? 0 : Pe(e, n, i);
}
function lk(t, e, n) {
    const i = t.options.borderWidth,
        s = t.borderSkipped,
        r = Ag(i);
    return {
        t: xn(s.top, r.top, 0, n),
        r: xn(s.right, r.right, 0, e),
        b: xn(s.bottom, r.bottom, 0, n),
        l: xn(s.left, r.left, 0, e),
    };
}
function ck(t, e, n) {
    const { enableBorderRadius: i } = t.getProps(['enableBorderRadius']),
        s = t.options.borderRadius,
        r = ni(s),
        o = Math.min(e, n),
        a = t.borderSkipped,
        l = i || H(s);
    return {
        topLeft: xn(!l || a.top || a.left, r.topLeft, 0, o),
        topRight: xn(!l || a.top || a.right, r.topRight, 0, o),
        bottomLeft: xn(!l || a.bottom || a.left, r.bottomLeft, 0, o),
        bottomRight: xn(!l || a.bottom || a.right, r.bottomRight, 0, o),
    };
}
function uk(t) {
    const e = l0(t),
        n = e.right - e.left,
        i = e.bottom - e.top,
        s = lk(t, n / 2, i / 2),
        r = ck(t, n / 2, i / 2);
    return {
        outer: { x: e.left, y: e.top, w: n, h: i, radius: r },
        inner: {
            x: e.left + s.l,
            y: e.top + s.t,
            w: n - s.l - s.r,
            h: i - s.t - s.b,
            radius: {
                topLeft: Math.max(0, r.topLeft - Math.max(s.t, s.l)),
                topRight: Math.max(0, r.topRight - Math.max(s.t, s.r)),
                bottomLeft: Math.max(0, r.bottomLeft - Math.max(s.b, s.l)),
                bottomRight: Math.max(0, r.bottomRight - Math.max(s.b, s.r)),
            },
        },
    };
}
function ml(t, e, n, i) {
    const s = e === null,
        r = n === null,
        a = t && !(s && r) && l0(t, i);
    return a && (s || qt(e, a.left, a.right)) && (r || qt(n, a.top, a.bottom));
}
function dk(t) {
    return t.topLeft || t.topRight || t.bottomLeft || t.bottomRight;
}
function hk(t, e) {
    t.rect(e.x, e.y, e.w, e.h);
}
function gl(t, e, n = {}) {
    const i = t.x !== n.x ? -e : 0,
        s = t.y !== n.y ? -e : 0,
        r = (t.x + t.w !== n.x + n.w ? e : 0) - i,
        o = (t.y + t.h !== n.y + n.h ? e : 0) - s;
    return { x: t.x + i, y: t.y + s, w: t.w + r, h: t.h + o, radius: t.radius };
}
class Co extends Tt {
    constructor(e) {
        super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            e && Object.assign(this, e);
    }
    draw(e) {
        const {
                inflateAmount: n,
                options: { borderColor: i, backgroundColor: s },
            } = this,
            { inner: r, outer: o } = uk(this),
            a = dk(o.radius) ? lr : hk;
        e.save(),
            (o.w !== r.w || o.h !== r.h) &&
                (e.beginPath(),
                a(e, gl(o, n, r)),
                e.clip(),
                a(e, gl(r, -n, o)),
                (e.fillStyle = i),
                e.fill('evenodd')),
            e.beginPath(),
            a(e, gl(r, n)),
            (e.fillStyle = s),
            e.fill(),
            e.restore();
    }
    inRange(e, n, i) {
        return ml(this, e, n, i);
    }
    inXRange(e, n) {
        return ml(this, e, null, n);
    }
    inYRange(e, n) {
        return ml(this, null, e, n);
    }
    getCenterPoint(e) {
        const {
            x: n,
            y: i,
            base: s,
            horizontal: r,
        } = this.getProps(['x', 'y', 'base', 'horizontal'], e);
        return { x: r ? (n + s) / 2 : n, y: r ? i : (i + s) / 2 };
    }
    getRange(e) {
        return e === 'x' ? this.width / 2 : this.height / 2;
    }
}
O(Co, 'id', 'bar'),
    O(Co, 'defaults', {
        borderSkipped: 'start',
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: 'auto',
        pointStyle: void 0,
    }),
    O(Co, 'defaultRoutes', {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor',
    });
var fk = Object.freeze({
    __proto__: null,
    ArcElement: xs,
    BarElement: Co,
    LineElement: vn,
    PointElement: ko,
});
const Mc = [
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
    ],
    xf = Mc.map((t) => t.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
function c0(t) {
    return Mc[t % Mc.length];
}
function u0(t) {
    return xf[t % xf.length];
}
function pk(t, e) {
    return (t.borderColor = c0(e)), (t.backgroundColor = u0(e)), ++e;
}
function mk(t, e) {
    return (t.backgroundColor = t.data.map(() => c0(e++))), e;
}
function gk(t, e) {
    return (t.backgroundColor = t.data.map(() => u0(e++))), e;
}
function yk(t) {
    let e = 0;
    return (n, i) => {
        const s = t.getDatasetMeta(i).controller;
        s instanceof Jn
            ? (e = mk(n, e))
            : s instanceof As
            ? (e = gk(n, e))
            : s && (e = pk(n, e));
    };
}
function _f(t) {
    let e;
    for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
    return !1;
}
function vk(t) {
    return t && (t.borderColor || t.backgroundColor);
}
var xk = {
    id: 'colors',
    defaults: { enabled: !0, forceOverride: !1 },
    beforeLayout(t, e, n) {
        if (!n.enabled) return;
        const {
                data: { datasets: i },
                options: s,
            } = t.config,
            { elements: r } = s;
        if (!n.forceOverride && (_f(i) || vk(s) || (r && _f(r)))) return;
        const o = yk(t);
        i.forEach(o);
    },
};
function _k(t, e, n, i, s) {
    const r = s.samples || i;
    if (r >= n) return t.slice(e, e + n);
    const o = [],
        a = (n - 2) / (r - 2);
    let l = 0;
    const c = e + n - 1;
    let u = e,
        d,
        h,
        p,
        v,
        y;
    for (o[l++] = t[u], d = 0; d < r - 2; d++) {
        let _ = 0,
            m = 0,
            g;
        const x = Math.floor((d + 1) * a) + 1 + e,
            b = Math.min(Math.floor((d + 2) * a) + 1, n) + e,
            w = b - x;
        for (g = x; g < b; g++) (_ += t[g].x), (m += t[g].y);
        (_ /= w), (m /= w);
        const k = Math.floor(d * a) + 1 + e,
            S = Math.min(Math.floor((d + 1) * a) + 1, n) + e,
            { x: M, y: T } = t[u];
        for (p = v = -1, g = k; g < S; g++)
            (v =
                0.5 *
                Math.abs((M - _) * (t[g].y - T) - (M - t[g].x) * (m - T))),
                v > p && ((p = v), (h = t[g]), (y = g));
        (o[l++] = h), (u = y);
    }
    return (o[l++] = t[c]), o;
}
function bk(t, e, n, i) {
    let s = 0,
        r = 0,
        o,
        a,
        l,
        c,
        u,
        d,
        h,
        p,
        v,
        y;
    const _ = [],
        m = e + n - 1,
        g = t[e].x,
        b = t[m].x - g;
    for (o = e; o < e + n; ++o) {
        (a = t[o]), (l = ((a.x - g) / b) * i), (c = a.y);
        const w = l | 0;
        if (w === u)
            c < v ? ((v = c), (d = o)) : c > y && ((y = c), (h = o)),
                (s = (r * s + a.x) / ++r);
        else {
            const k = o - 1;
            if (!X(d) && !X(h)) {
                const S = Math.min(d, h),
                    M = Math.max(d, h);
                S !== p && S !== k && _.push({ ...t[S], x: s }),
                    M !== p && M !== k && _.push({ ...t[M], x: s });
            }
            o > 0 && k !== p && _.push(t[k]),
                _.push(a),
                (u = w),
                (r = 0),
                (v = y = c),
                (d = h = p = o);
        }
    }
    return _;
}
function d0(t) {
    if (t._decimated) {
        const e = t._data;
        delete t._decimated,
            delete t._data,
            Object.defineProperty(t, 'data', {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: e,
            });
    }
}
function bf(t) {
    t.data.datasets.forEach((e) => {
        d0(e);
    });
}
function wk(t, e) {
    const n = e.length;
    let i = 0,
        s;
    const { iScale: r } = t,
        { min: o, max: a, minDefined: l, maxDefined: c } = r.getUserBounds();
    return (
        l && (i = Pe(Gt(e, r.axis, o).lo, 0, n - 1)),
        c ? (s = Pe(Gt(e, r.axis, a).hi + 1, i, n) - i) : (s = n - i),
        { start: i, count: s }
    );
}
var Sk = {
    id: 'decimation',
    defaults: { algorithm: 'min-max', enabled: !1 },
    beforeElementsUpdate: (t, e, n) => {
        if (!n.enabled) {
            bf(t);
            return;
        }
        const i = t.width;
        t.data.datasets.forEach((s, r) => {
            const { _data: o, indexAxis: a } = s,
                l = t.getDatasetMeta(r),
                c = o || s.data;
            if (
                ys([a, t.options.indexAxis]) === 'y' ||
                !l.controller.supportsDecimation
            )
                return;
            const u = t.scales[l.xAxisID];
            if ((u.type !== 'linear' && u.type !== 'time') || t.options.parsing)
                return;
            let { start: d, count: h } = wk(l, c);
            const p = n.threshold || 4 * i;
            if (h <= p) {
                d0(s);
                return;
            }
            X(o) &&
                ((s._data = c),
                delete s.data,
                Object.defineProperty(s, 'data', {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this._decimated;
                    },
                    set: function (y) {
                        this._data = y;
                    },
                }));
            let v;
            switch (n.algorithm) {
                case 'lttb':
                    v = _k(c, d, h, i, n);
                    break;
                case 'min-max':
                    v = bk(c, d, h, i);
                    break;
                default:
                    throw new Error(
                        `Unsupported decimation algorithm '${n.algorithm}'`
                    );
            }
            s._decimated = v;
        });
    },
    destroy(t) {
        bf(t);
    },
};
function kk(t, e, n) {
    const i = t.segments,
        s = t.points,
        r = e.points,
        o = [];
    for (const a of i) {
        let { start: l, end: c } = a;
        c = Ku(l, c, s);
        const u = Pc(n, s[l], s[c], a.loop);
        if (!e.segments) {
            o.push({ source: a, target: u, start: s[l], end: s[c] });
            continue;
        }
        const d = Yg(e, u);
        for (const h of d) {
            const p = Pc(n, r[h.start], r[h.end], h.loop),
                v = Qg(a, s, p);
            for (const y of v)
                o.push({
                    source: y,
                    target: h,
                    start: { [n]: wf(u, p, 'start', Math.max) },
                    end: { [n]: wf(u, p, 'end', Math.min) },
                });
        }
    }
    return o;
}
function Pc(t, e, n, i) {
    if (i) return;
    let s = e[t],
        r = n[t];
    return (
        t === 'angle' && ((s = st(s)), (r = st(r))),
        { property: t, start: s, end: r }
    );
}
function Ck(t, e) {
    const { x: n = null, y: i = null } = t || {},
        s = e.points,
        r = [];
    return (
        e.segments.forEach(({ start: o, end: a }) => {
            a = Ku(o, a, s);
            const l = s[o],
                c = s[a];
            i !== null
                ? (r.push({ x: l.x, y: i }), r.push({ x: c.x, y: i }))
                : n !== null &&
                  (r.push({ x: n, y: l.y }), r.push({ x: n, y: c.y }));
        }),
        r
    );
}
function Ku(t, e, n) {
    for (; e > t; e--) {
        const i = n[e];
        if (!isNaN(i.x) && !isNaN(i.y)) break;
    }
    return e;
}
function wf(t, e, n, i) {
    return t && e ? i(t[n], e[n]) : t ? t[n] : e ? e[n] : 0;
}
function h0(t, e) {
    let n = [],
        i = !1;
    return (
        oe(t) ? ((i = !0), (n = t)) : (n = Ck(t, e)),
        n.length
            ? new vn({
                  points: n,
                  options: { tension: 0 },
                  _loop: i,
                  _fullLoop: i,
              })
            : null
    );
}
function Sf(t) {
    return t && t.fill !== !1;
}
function Mk(t, e, n) {
    let s = t[e].fill;
    const r = [e];
    let o;
    if (!n) return s;
    for (; s !== !1 && r.indexOf(s) === -1; ) {
        if (!ge(s)) return s;
        if (((o = t[s]), !o)) return !1;
        if (o.visible) return s;
        r.push(s), (s = o.fill);
    }
    return !1;
}
function Pk(t, e, n) {
    const i = Ok(t);
    if (H(i)) return isNaN(i.value) ? !1 : i;
    let s = parseFloat(i);
    return ge(s) && Math.floor(s) === s
        ? Ek(i[0], e, s, n)
        : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(i) >= 0 && i;
}
function Ek(t, e, n, i) {
    return (
        (t === '-' || t === '+') && (n = e + n),
        n === e || n < 0 || n >= i ? !1 : n
    );
}
function Tk(t, e) {
    let n = null;
    return (
        t === 'start'
            ? (n = e.bottom)
            : t === 'end'
            ? (n = e.top)
            : H(t)
            ? (n = e.getPixelForValue(t.value))
            : e.getBasePixel && (n = e.getBasePixel()),
        n
    );
}
function jk(t, e, n) {
    let i;
    return (
        t === 'start'
            ? (i = n)
            : t === 'end'
            ? (i = e.options.reverse ? e.min : e.max)
            : H(t)
            ? (i = t.value)
            : (i = e.getBaseValue()),
        i
    );
}
function Ok(t) {
    const e = t.options,
        n = e.fill;
    let i = V(n && n.target, n);
    return (
        i === void 0 && (i = !!e.backgroundColor),
        i === !1 || i === null ? !1 : i === !0 ? 'origin' : i
    );
}
function Nk(t) {
    const { scale: e, index: n, line: i } = t,
        s = [],
        r = i.segments,
        o = i.points,
        a = Dk(e, n);
    a.push(h0({ x: null, y: e.bottom }, i));
    for (let l = 0; l < r.length; l++) {
        const c = r[l];
        for (let u = c.start; u <= c.end; u++) Lk(s, o[u], a);
    }
    return new vn({ points: s, options: {} });
}
function Dk(t, e) {
    const n = [],
        i = t.getMatchingVisibleMetas('line');
    for (let s = 0; s < i.length; s++) {
        const r = i[s];
        if (r.index === e) break;
        r.hidden || n.unshift(r.dataset);
    }
    return n;
}
function Lk(t, e, n) {
    const i = [];
    for (let s = 0; s < n.length; s++) {
        const r = n[s],
            { first: o, last: a, point: l } = Rk(r, e, 'x');
        if (!(!l || (o && a))) {
            if (o) i.unshift(l);
            else if ((t.push(l), !a)) break;
        }
    }
    t.push(...i);
}
function Rk(t, e, n) {
    const i = t.interpolate(e, n);
    if (!i) return {};
    const s = i[n],
        r = t.segments,
        o = t.points;
    let a = !1,
        l = !1;
    for (let c = 0; c < r.length; c++) {
        const u = r[c],
            d = o[u.start][n],
            h = o[u.end][n];
        if (qt(s, d, h)) {
            (a = s === d), (l = s === h);
            break;
        }
    }
    return { first: a, last: l, point: i };
}
class f0 {
    constructor(e) {
        (this.x = e.x), (this.y = e.y), (this.radius = e.radius);
    }
    pathSegment(e, n, i) {
        const { x: s, y: r, radius: o } = this;
        return (
            (n = n || { start: 0, end: le }),
            e.arc(s, r, o, n.end, n.start, !0),
            !i.bounds
        );
    }
    interpolate(e) {
        const { x: n, y: i, radius: s } = this,
            r = e.angle;
        return { x: n + Math.cos(r) * s, y: i + Math.sin(r) * s, angle: r };
    }
}
function Ak(t) {
    const { chart: e, fill: n, line: i } = t;
    if (ge(n)) return Ik(e, n);
    if (n === 'stack') return Nk(t);
    if (n === 'shape') return !0;
    const s = Fk(t);
    return s instanceof f0 ? s : h0(s, i);
}
function Ik(t, e) {
    const n = t.getDatasetMeta(e);
    return n && t.isDatasetVisible(e) ? n.dataset : null;
}
function Fk(t) {
    return (t.scale || {}).getPointPositionForValue ? Bk(t) : zk(t);
}
function zk(t) {
    const { scale: e = {}, fill: n } = t,
        i = Tk(n, e);
    if (ge(i)) {
        const s = e.isHorizontal();
        return { x: s ? i : null, y: s ? null : i };
    }
    return null;
}
function Bk(t) {
    const { scale: e, fill: n } = t,
        i = e.options,
        s = e.getLabels().length,
        r = i.reverse ? e.max : e.min,
        o = jk(n, e, r),
        a = [];
    if (i.grid.circular) {
        const l = e.getPointPositionForValue(0, r);
        return new f0({
            x: l.x,
            y: l.y,
            radius: e.getDistanceFromCenterForValue(o),
        });
    }
    for (let l = 0; l < s; ++l) a.push(e.getPointPositionForValue(l, o));
    return a;
}
function yl(t, e, n) {
    const i = Ak(e),
        { line: s, scale: r, axis: o } = e,
        a = s.options,
        l = a.fill,
        c = a.backgroundColor,
        { above: u = c, below: d = c } = l || {};
    i &&
        s.points.length &&
        (Pa(t, n),
        Vk(t, {
            line: s,
            target: i,
            above: u,
            below: d,
            area: n,
            scale: r,
            axis: o,
        }),
        Ea(t));
}
function Vk(t, e) {
    const { line: n, target: i, above: s, below: r, area: o, scale: a } = e,
        l = n._loop ? 'angle' : e.axis;
    t.save(),
        l === 'x' &&
            r !== s &&
            (kf(t, i, o.top),
            Cf(t, { line: n, target: i, color: s, scale: a, property: l }),
            t.restore(),
            t.save(),
            kf(t, i, o.bottom)),
        Cf(t, { line: n, target: i, color: r, scale: a, property: l }),
        t.restore();
}
function kf(t, e, n) {
    const { segments: i, points: s } = e;
    let r = !0,
        o = !1;
    t.beginPath();
    for (const a of i) {
        const { start: l, end: c } = a,
            u = s[l],
            d = s[Ku(l, c, s)];
        r
            ? (t.moveTo(u.x, u.y), (r = !1))
            : (t.lineTo(u.x, n), t.lineTo(u.x, u.y)),
            (o = !!e.pathSegment(t, a, { move: o })),
            o ? t.closePath() : t.lineTo(d.x, n);
    }
    t.lineTo(e.first().x, n), t.closePath(), t.clip();
}
function Cf(t, e) {
    const { line: n, target: i, property: s, color: r, scale: o } = e,
        a = kk(n, i, s);
    for (const { source: l, target: c, start: u, end: d } of a) {
        const { style: { backgroundColor: h = r } = {} } = l,
            p = i !== !0;
        t.save(), (t.fillStyle = h), $k(t, o, p && Pc(s, u, d)), t.beginPath();
        const v = !!n.pathSegment(t, l);
        let y;
        if (p) {
            v ? t.closePath() : Mf(t, i, d, s);
            const _ = !!i.pathSegment(t, c, { move: v, reverse: !0 });
            (y = v && _), y || Mf(t, i, u, s);
        }
        t.closePath(), t.fill(y ? 'evenodd' : 'nonzero'), t.restore();
    }
}
function $k(t, e, n) {
    const { top: i, bottom: s } = e.chart.chartArea,
        { property: r, start: o, end: a } = n || {};
    r === 'x' && (t.beginPath(), t.rect(o, i, a - o, s - i), t.clip());
}
function Mf(t, e, n, i) {
    const s = e.interpolate(n, i);
    s && t.lineTo(s.x, s.y);
}
var Hk = {
    id: 'filler',
    afterDatasetsUpdate(t, e, n) {
        const i = (t.data.datasets || []).length,
            s = [];
        let r, o, a, l;
        for (o = 0; o < i; ++o)
            (r = t.getDatasetMeta(o)),
                (a = r.dataset),
                (l = null),
                a &&
                    a.options &&
                    a instanceof vn &&
                    (l = {
                        visible: t.isDatasetVisible(o),
                        index: o,
                        fill: Pk(a, o, i),
                        chart: t,
                        axis: r.controller.options.indexAxis,
                        scale: r.vScale,
                        line: a,
                    }),
                (r.$filler = l),
                s.push(l);
        for (o = 0; o < i; ++o)
            (l = s[o]),
                !(!l || l.fill === !1) && (l.fill = Mk(s, o, n.propagate));
    },
    beforeDraw(t, e, n) {
        const i = n.drawTime === 'beforeDraw',
            s = t.getSortedVisibleDatasetMetas(),
            r = t.chartArea;
        for (let o = s.length - 1; o >= 0; --o) {
            const a = s[o].$filler;
            a &&
                (a.line.updateControlPoints(r, a.axis),
                i && a.fill && yl(t.ctx, a, r));
        }
    },
    beforeDatasetsDraw(t, e, n) {
        if (n.drawTime !== 'beforeDatasetsDraw') return;
        const i = t.getSortedVisibleDatasetMetas();
        for (let s = i.length - 1; s >= 0; --s) {
            const r = i[s].$filler;
            Sf(r) && yl(t.ctx, r, t.chartArea);
        }
    },
    beforeDatasetDraw(t, e, n) {
        const i = e.meta.$filler;
        !Sf(i) ||
            n.drawTime !== 'beforeDatasetDraw' ||
            yl(t.ctx, i, t.chartArea);
    },
    defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
};
const Pf = (t, e) => {
        let { boxHeight: n = e, boxWidth: i = e } = t;
        return (
            t.usePointStyle &&
                ((n = Math.min(n, e)),
                (i = t.pointStyleWidth || Math.min(i, e))),
            { boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n) }
        );
    },
    Wk = (t, e) =>
        t !== null &&
        e !== null &&
        t.datasetIndex === e.datasetIndex &&
        t.index === e.index;
class Ef extends Tt {
    constructor(e) {
        super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = e.chart),
            (this.options = e.options),
            (this.ctx = e.ctx),
            (this.legendItems = void 0),
            (this.columnSizes = void 0),
            (this.lineWidths = void 0),
            (this.maxHeight = void 0),
            (this.maxWidth = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this._margins = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
    }
    update(e, n, i) {
        (this.maxWidth = e),
            (this.maxHeight = n),
            (this._margins = i),
            this.setDimensions(),
            this.buildLabels(),
            this.fit();
    }
    setDimensions() {
        this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = this._margins.left),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = this._margins.top),
              (this.bottom = this.height));
    }
    buildLabels() {
        const e = this.options.labels || {};
        let n = ne(e.generateLabels, [this.chart], this) || [];
        e.filter && (n = n.filter((i) => e.filter(i, this.chart.data))),
            e.sort && (n = n.sort((i, s) => e.sort(i, s, this.chart.data))),
            this.options.reverse && n.reverse(),
            (this.legendItems = n);
    }
    fit() {
        const { options: e, ctx: n } = this;
        if (!e.display) {
            this.width = this.height = 0;
            return;
        }
        const i = e.labels,
            s = Se(i.font),
            r = s.size,
            o = this._computeTitleHeight(),
            { boxWidth: a, itemHeight: l } = Pf(i, r);
        let c, u;
        (n.font = s.string),
            this.isHorizontal()
                ? ((c = this.maxWidth), (u = this._fitRows(o, r, a, l) + 10))
                : ((u = this.maxHeight), (c = this._fitCols(o, s, a, l) + 10)),
            (this.width = Math.min(c, e.maxWidth || this.maxWidth)),
            (this.height = Math.min(u, e.maxHeight || this.maxHeight));
    }
    _fitRows(e, n, i, s) {
        const {
                ctx: r,
                maxWidth: o,
                options: {
                    labels: { padding: a },
                },
            } = this,
            l = (this.legendHitBoxes = []),
            c = (this.lineWidths = [0]),
            u = s + a;
        let d = e;
        (r.textAlign = 'left'), (r.textBaseline = 'middle');
        let h = -1,
            p = -u;
        return (
            this.legendItems.forEach((v, y) => {
                const _ = i + n / 2 + r.measureText(v.text).width;
                (y === 0 || c[c.length - 1] + _ + 2 * a > o) &&
                    ((d += u),
                    (c[c.length - (y > 0 ? 0 : 1)] = 0),
                    (p += u),
                    h++),
                    (l[y] = { left: 0, top: p, row: h, width: _, height: s }),
                    (c[c.length - 1] += _ + a);
            }),
            d
        );
    }
    _fitCols(e, n, i, s) {
        const {
                ctx: r,
                maxHeight: o,
                options: {
                    labels: { padding: a },
                },
            } = this,
            l = (this.legendHitBoxes = []),
            c = (this.columnSizes = []),
            u = o - e;
        let d = a,
            h = 0,
            p = 0,
            v = 0,
            y = 0;
        return (
            this.legendItems.forEach((_, m) => {
                const { itemWidth: g, itemHeight: x } = Uk(i, n, r, _, s);
                m > 0 &&
                    p + x + 2 * a > u &&
                    ((d += h + a),
                    c.push({ width: h, height: p }),
                    (v += h + a),
                    y++,
                    (h = p = 0)),
                    (l[m] = { left: v, top: p, col: y, width: g, height: x }),
                    (h = Math.max(h, g)),
                    (p += x + a);
            }),
            (d += h),
            c.push({ width: h, height: p }),
            d
        );
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const e = this._computeTitleHeight(),
            {
                legendHitBoxes: n,
                options: {
                    align: i,
                    labels: { padding: s },
                    rtl: r,
                },
            } = this,
            o = Ii(r, this.left, this.width);
        if (this.isHorizontal()) {
            let a = 0,
                l = Re(i, this.left + s, this.right - this.lineWidths[a]);
            for (const c of n)
                a !== c.row &&
                    ((a = c.row),
                    (l = Re(
                        i,
                        this.left + s,
                        this.right - this.lineWidths[a]
                    ))),
                    (c.top += this.top + e + s),
                    (c.left = o.leftForLtr(o.x(l), c.width)),
                    (l += c.width + s);
        } else {
            let a = 0,
                l = Re(
                    i,
                    this.top + e + s,
                    this.bottom - this.columnSizes[a].height
                );
            for (const c of n)
                c.col !== a &&
                    ((a = c.col),
                    (l = Re(
                        i,
                        this.top + e + s,
                        this.bottom - this.columnSizes[a].height
                    ))),
                    (c.top = l),
                    (c.left += this.left + s),
                    (c.left = o.leftForLtr(o.x(c.left), c.width)),
                    (l += c.height + s);
        }
    }
    isHorizontal() {
        return (
            this.options.position === 'top' ||
            this.options.position === 'bottom'
        );
    }
    draw() {
        if (this.options.display) {
            const e = this.ctx;
            Pa(e, this), this._draw(), Ea(e);
        }
    }
    _draw() {
        const { options: e, columnSizes: n, lineWidths: i, ctx: s } = this,
            { align: r, labels: o } = e,
            a = ye.color,
            l = Ii(e.rtl, this.left, this.width),
            c = Se(o.font),
            { padding: u } = o,
            d = c.size,
            h = d / 2;
        let p;
        this.drawTitle(),
            (s.textAlign = l.textAlign('left')),
            (s.textBaseline = 'middle'),
            (s.lineWidth = 0.5),
            (s.font = c.string);
        const { boxWidth: v, boxHeight: y, itemHeight: _ } = Pf(o, d),
            m = function (k, S, M) {
                if (isNaN(v) || v <= 0 || isNaN(y) || y < 0) return;
                s.save();
                const T = V(M.lineWidth, 1);
                if (
                    ((s.fillStyle = V(M.fillStyle, a)),
                    (s.lineCap = V(M.lineCap, 'butt')),
                    (s.lineDashOffset = V(M.lineDashOffset, 0)),
                    (s.lineJoin = V(M.lineJoin, 'miter')),
                    (s.lineWidth = T),
                    (s.strokeStyle = V(M.strokeStyle, a)),
                    s.setLineDash(V(M.lineDash, [])),
                    o.usePointStyle)
                ) {
                    const j = {
                            radius: (y * Math.SQRT2) / 2,
                            pointStyle: M.pointStyle,
                            rotation: M.rotation,
                            borderWidth: T,
                        },
                        R = l.xPlus(k, v / 2),
                        I = S + h;
                    Rg(s, j, R, I, o.pointStyleWidth && v);
                } else {
                    const j = S + Math.max((d - y) / 2, 0),
                        R = l.leftForLtr(k, v),
                        I = ni(M.borderRadius);
                    s.beginPath(),
                        Object.values(I).some((U) => U !== 0)
                            ? lr(s, { x: R, y: j, w: v, h: y, radius: I })
                            : s.rect(R, j, v, y),
                        s.fill(),
                        T !== 0 && s.stroke();
                }
                s.restore();
            },
            g = function (k, S, M) {
                ui(s, M.text, k, S + _ / 2, c, {
                    strikethrough: M.hidden,
                    textAlign: l.textAlign(M.textAlign),
                });
            },
            x = this.isHorizontal(),
            b = this._computeTitleHeight();
        x
            ? (p = {
                  x: Re(r, this.left + u, this.right - i[0]),
                  y: this.top + u + b,
                  line: 0,
              })
            : (p = {
                  x: this.left + u,
                  y: Re(r, this.top + b + u, this.bottom - n[0].height),
                  line: 0,
              }),
            Hg(this.ctx, e.textDirection);
        const w = _ + u;
        this.legendItems.forEach((k, S) => {
            (s.strokeStyle = k.fontColor), (s.fillStyle = k.fontColor);
            const M = s.measureText(k.text).width,
                T = l.textAlign(k.textAlign || (k.textAlign = o.textAlign)),
                j = v + h + M;
            let R = p.x,
                I = p.y;
            l.setWidth(this.width),
                x
                    ? S > 0 &&
                      R + j + u > this.right &&
                      ((I = p.y += w),
                      p.line++,
                      (R = p.x = Re(r, this.left + u, this.right - i[p.line])))
                    : S > 0 &&
                      I + w > this.bottom &&
                      ((R = p.x = R + n[p.line].width + u),
                      p.line++,
                      (I = p.y =
                          Re(
                              r,
                              this.top + b + u,
                              this.bottom - n[p.line].height
                          )));
            const U = l.x(R);
            if (
                (m(U, I, k),
                (R = hb(T, R + v + h, x ? R + j : this.right, e.rtl)),
                g(l.x(R), I, k),
                x)
            )
                p.x += j + u;
            else if (typeof k.text != 'string') {
                const F = c.lineHeight;
                p.y += p0(k, F) + u;
            } else p.y += w;
        }),
            Wg(this.ctx, e.textDirection);
    }
    drawTitle() {
        const e = this.options,
            n = e.title,
            i = Se(n.font),
            s = ze(n.padding);
        if (!n.display) return;
        const r = Ii(e.rtl, this.left, this.width),
            o = this.ctx,
            a = n.position,
            l = i.size / 2,
            c = s.top + l;
        let u,
            d = this.left,
            h = this.width;
        if (this.isHorizontal())
            (h = Math.max(...this.lineWidths)),
                (u = this.top + c),
                (d = Re(e.align, d, this.right - h));
        else {
            const v = this.columnSizes.reduce(
                (y, _) => Math.max(y, _.height),
                0
            );
            u =
                c +
                Re(
                    e.align,
                    this.top,
                    this.bottom -
                        v -
                        e.labels.padding -
                        this._computeTitleHeight()
                );
        }
        const p = Re(a, d, d + h);
        (o.textAlign = r.textAlign(Bu(a))),
            (o.textBaseline = 'middle'),
            (o.strokeStyle = n.color),
            (o.fillStyle = n.color),
            (o.font = i.string),
            ui(o, n.text, p, u, i);
    }
    _computeTitleHeight() {
        const e = this.options.title,
            n = Se(e.font),
            i = ze(e.padding);
        return e.display ? n.lineHeight + i.height : 0;
    }
    _getLegendItemAt(e, n) {
        let i, s, r;
        if (qt(e, this.left, this.right) && qt(n, this.top, this.bottom)) {
            for (r = this.legendHitBoxes, i = 0; i < r.length; ++i)
                if (
                    ((s = r[i]),
                    qt(e, s.left, s.left + s.width) &&
                        qt(n, s.top, s.top + s.height))
                )
                    return this.legendItems[i];
        }
        return null;
    }
    handleEvent(e) {
        const n = this.options;
        if (!Xk(e.type, n)) return;
        const i = this._getLegendItemAt(e.x, e.y);
        if (e.type === 'mousemove' || e.type === 'mouseout') {
            const s = this._hoveredItem,
                r = Wk(s, i);
            s && !r && ne(n.onLeave, [e, s, this], this),
                (this._hoveredItem = i),
                i && !r && ne(n.onHover, [e, i, this], this);
        } else i && ne(n.onClick, [e, i, this], this);
    }
}
function Uk(t, e, n, i, s) {
    const r = Qk(i, t, e, n),
        o = Yk(s, i, e.lineHeight);
    return { itemWidth: r, itemHeight: o };
}
function Qk(t, e, n, i) {
    let s = t.text;
    return (
        s &&
            typeof s != 'string' &&
            (s = s.reduce((r, o) => (r.length > o.length ? r : o))),
        e + n.size / 2 + i.measureText(s).width
    );
}
function Yk(t, e, n) {
    let i = t;
    return typeof e.text != 'string' && (i = p0(e, n)), i;
}
function p0(t, e) {
    const n = t.text ? t.text.length : 0;
    return e * n;
}
function Xk(t, e) {
    return !!(
        ((t === 'mousemove' || t === 'mouseout') && (e.onHover || e.onLeave)) ||
        (e.onClick && (t === 'click' || t === 'mouseup'))
    );
}
var Kk = {
    id: 'legend',
    _element: Ef,
    start(t, e, n) {
        const i = (t.legend = new Ef({ ctx: t.ctx, options: n, chart: t }));
        Ie.configure(t, i, n), Ie.addBox(t, i);
    },
    stop(t) {
        Ie.removeBox(t, t.legend), delete t.legend;
    },
    beforeUpdate(t, e, n) {
        const i = t.legend;
        Ie.configure(t, i, n), (i.options = n);
    },
    afterUpdate(t) {
        const e = t.legend;
        e.buildLabels(), e.adjustHitBoxes();
    },
    afterEvent(t, e) {
        e.replay || t.legend.handleEvent(e.event);
    },
    defaults: {
        display: !0,
        position: 'top',
        align: 'center',
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick(t, e, n) {
            const i = e.datasetIndex,
                s = n.chart;
            s.isDatasetVisible(i)
                ? (s.hide(i), (e.hidden = !0))
                : (s.show(i), (e.hidden = !1));
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (t) => t.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(t) {
                const e = t.data.datasets,
                    {
                        labels: {
                            usePointStyle: n,
                            pointStyle: i,
                            textAlign: s,
                            color: r,
                            useBorderRadius: o,
                            borderRadius: a,
                        },
                    } = t.legend.options;
                return t._getSortedDatasetMetas().map((l) => {
                    const c = l.controller.getStyle(n ? 0 : void 0),
                        u = ze(c.borderWidth);
                    return {
                        text: e[l.index].label,
                        fillStyle: c.backgroundColor,
                        fontColor: r,
                        hidden: !l.visible,
                        lineCap: c.borderCapStyle,
                        lineDash: c.borderDash,
                        lineDashOffset: c.borderDashOffset,
                        lineJoin: c.borderJoinStyle,
                        lineWidth: (u.width + u.height) / 4,
                        strokeStyle: c.borderColor,
                        pointStyle: i || c.pointStyle,
                        rotation: c.rotation,
                        textAlign: s || c.textAlign,
                        borderRadius: o && (a || c.borderRadius),
                        datasetIndex: l.index,
                    };
                }, this);
            },
        },
        title: {
            color: (t) => t.chart.options.color,
            display: !1,
            position: 'center',
            text: '',
        },
    },
    descriptors: {
        _scriptable: (t) => !t.startsWith('on'),
        labels: {
            _scriptable: (t) =>
                !['generateLabels', 'filter', 'sort'].includes(t),
        },
    },
};
class qu extends Tt {
    constructor(e) {
        super(),
            (this.chart = e.chart),
            (this.options = e.options),
            (this.ctx = e.ctx),
            (this._padding = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
    }
    update(e, n) {
        const i = this.options;
        if (((this.left = 0), (this.top = 0), !i.display)) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        (this.width = this.right = e), (this.height = this.bottom = n);
        const s = oe(i.text) ? i.text.length : 1;
        this._padding = ze(i.padding);
        const r = s * Se(i.font).lineHeight + this._padding.height;
        this.isHorizontal() ? (this.height = r) : (this.width = r);
    }
    isHorizontal() {
        const e = this.options.position;
        return e === 'top' || e === 'bottom';
    }
    _drawArgs(e) {
        const { top: n, left: i, bottom: s, right: r, options: o } = this,
            a = o.align;
        let l = 0,
            c,
            u,
            d;
        return (
            this.isHorizontal()
                ? ((u = Re(a, i, r)), (d = n + e), (c = r - i))
                : (o.position === 'left'
                      ? ((u = i + e), (d = Re(a, s, n)), (l = ce * -0.5))
                      : ((u = r - e), (d = Re(a, n, s)), (l = ce * 0.5)),
                  (c = s - n)),
            { titleX: u, titleY: d, maxWidth: c, rotation: l }
        );
    }
    draw() {
        const e = this.ctx,
            n = this.options;
        if (!n.display) return;
        const i = Se(n.font),
            r = i.lineHeight / 2 + this._padding.top,
            {
                titleX: o,
                titleY: a,
                maxWidth: l,
                rotation: c,
            } = this._drawArgs(r);
        ui(e, n.text, 0, 0, i, {
            color: n.color,
            maxWidth: l,
            rotation: c,
            textAlign: Bu(n.align),
            textBaseline: 'middle',
            translation: [o, a],
        });
    }
}
function qk(t, e) {
    const n = new qu({ ctx: t.ctx, options: e, chart: t });
    Ie.configure(t, n, e), Ie.addBox(t, n), (t.titleBlock = n);
}
var Gk = {
    id: 'title',
    _element: qu,
    start(t, e, n) {
        qk(t, n);
    },
    stop(t) {
        const e = t.titleBlock;
        Ie.removeBox(t, e), delete t.titleBlock;
    },
    beforeUpdate(t, e, n) {
        const i = t.titleBlock;
        Ie.configure(t, i, n), (i.options = n);
    },
    defaults: {
        align: 'center',
        display: !1,
        font: { weight: 'bold' },
        fullSize: !0,
        padding: 10,
        position: 'top',
        text: '',
        weight: 2e3,
    },
    defaultRoutes: { color: 'color' },
    descriptors: { _scriptable: !0, _indexable: !1 },
};
const qr = new WeakMap();
var Jk = {
    id: 'subtitle',
    start(t, e, n) {
        const i = new qu({ ctx: t.ctx, options: n, chart: t });
        Ie.configure(t, i, n), Ie.addBox(t, i), qr.set(t, i);
    },
    stop(t) {
        Ie.removeBox(t, qr.get(t)), qr.delete(t);
    },
    beforeUpdate(t, e, n) {
        const i = qr.get(t);
        Ie.configure(t, i, n), (i.options = n);
    },
    defaults: {
        align: 'center',
        display: !1,
        font: { weight: 'normal' },
        fullSize: !0,
        padding: 0,
        position: 'top',
        text: '',
        weight: 1500,
    },
    defaultRoutes: { color: 'color' },
    descriptors: { _scriptable: !0, _indexable: !1 },
};
const _s = {
    average(t) {
        if (!t.length) return !1;
        let e,
            n,
            i = 0,
            s = 0,
            r = 0;
        for (e = 0, n = t.length; e < n; ++e) {
            const o = t[e].element;
            if (o && o.hasValue()) {
                const a = o.tooltipPosition();
                (i += a.x), (s += a.y), ++r;
            }
        }
        return { x: i / r, y: s / r };
    },
    nearest(t, e) {
        if (!t.length) return !1;
        let n = e.x,
            i = e.y,
            s = Number.POSITIVE_INFINITY,
            r,
            o,
            a;
        for (r = 0, o = t.length; r < o; ++r) {
            const l = t[r].element;
            if (l && l.hasValue()) {
                const c = l.getCenterPoint(),
                    u = xc(e, c);
                u < s && ((s = u), (a = l));
            }
        }
        if (a) {
            const l = a.tooltipPosition();
            (n = l.x), (i = l.y);
        }
        return { x: n, y: i };
    },
};
function Dt(t, e) {
    return e && (oe(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function Ht(t) {
    return (typeof t == 'string' || t instanceof String) &&
        t.indexOf(`
`) > -1
        ? t.split(`
`)
        : t;
}
function Zk(t, e) {
    const { element: n, datasetIndex: i, index: s } = e,
        r = t.getDatasetMeta(i).controller,
        { label: o, value: a } = r.getLabelAndValue(s);
    return {
        chart: t,
        label: o,
        parsed: r.getParsed(s),
        raw: t.data.datasets[i].data[s],
        formattedValue: a,
        dataset: r.getDataset(),
        dataIndex: s,
        datasetIndex: i,
        element: n,
    };
}
function Tf(t, e) {
    const n = t.chart.ctx,
        { body: i, footer: s, title: r } = t,
        { boxWidth: o, boxHeight: a } = e,
        l = Se(e.bodyFont),
        c = Se(e.titleFont),
        u = Se(e.footerFont),
        d = r.length,
        h = s.length,
        p = i.length,
        v = ze(e.padding);
    let y = v.height,
        _ = 0,
        m = i.reduce(
            (b, w) => b + w.before.length + w.lines.length + w.after.length,
            0
        );
    if (
        ((m += t.beforeBody.length + t.afterBody.length),
        d &&
            (y +=
                d * c.lineHeight +
                (d - 1) * e.titleSpacing +
                e.titleMarginBottom),
        m)
    ) {
        const b = e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
        y += p * b + (m - p) * l.lineHeight + (m - 1) * e.bodySpacing;
    }
    h &&
        (y += e.footerMarginTop + h * u.lineHeight + (h - 1) * e.footerSpacing);
    let g = 0;
    const x = function (b) {
        _ = Math.max(_, n.measureText(b).width + g);
    };
    return (
        n.save(),
        (n.font = c.string),
        J(t.title, x),
        (n.font = l.string),
        J(t.beforeBody.concat(t.afterBody), x),
        (g = e.displayColors ? o + 2 + e.boxPadding : 0),
        J(i, (b) => {
            J(b.before, x), J(b.lines, x), J(b.after, x);
        }),
        (g = 0),
        (n.font = u.string),
        J(t.footer, x),
        n.restore(),
        (_ += v.width),
        { width: _, height: y }
    );
}
function e2(t, e) {
    const { y: n, height: i } = e;
    return n < i / 2 ? 'top' : n > t.height - i / 2 ? 'bottom' : 'center';
}
function t2(t, e, n, i) {
    const { x: s, width: r } = i,
        o = n.caretSize + n.caretPadding;
    if (
        (t === 'left' && s + r + o > e.width) ||
        (t === 'right' && s - r - o < 0)
    )
        return !0;
}
function n2(t, e, n, i) {
    const { x: s, width: r } = n,
        {
            width: o,
            chartArea: { left: a, right: l },
        } = t;
    let c = 'center';
    return (
        i === 'center'
            ? (c = s <= (a + l) / 2 ? 'left' : 'right')
            : s <= r / 2
            ? (c = 'left')
            : s >= o - r / 2 && (c = 'right'),
        t2(c, t, e, n) && (c = 'center'),
        c
    );
}
function jf(t, e, n) {
    const i = n.yAlign || e.yAlign || e2(t, n);
    return { xAlign: n.xAlign || e.xAlign || n2(t, e, n, i), yAlign: i };
}
function i2(t, e) {
    let { x: n, width: i } = t;
    return e === 'right' ? (n -= i) : e === 'center' && (n -= i / 2), n;
}
function s2(t, e, n) {
    let { y: i, height: s } = t;
    return (
        e === 'top' ? (i += n) : e === 'bottom' ? (i -= s + n) : (i -= s / 2), i
    );
}
function Of(t, e, n, i) {
    const { caretSize: s, caretPadding: r, cornerRadius: o } = t,
        { xAlign: a, yAlign: l } = n,
        c = s + r,
        { topLeft: u, topRight: d, bottomLeft: h, bottomRight: p } = ni(o);
    let v = i2(e, a);
    const y = s2(e, l, c);
    return (
        l === 'center'
            ? a === 'left'
                ? (v += c)
                : a === 'right' && (v -= c)
            : a === 'left'
            ? (v -= Math.max(u, h) + s)
            : a === 'right' && (v += Math.max(d, p) + s),
        { x: Pe(v, 0, i.width - e.width), y: Pe(y, 0, i.height - e.height) }
    );
}
function Gr(t, e, n) {
    const i = ze(n.padding);
    return e === 'center'
        ? t.x + t.width / 2
        : e === 'right'
        ? t.x + t.width - i.right
        : t.x + i.left;
}
function Nf(t) {
    return Dt([], Ht(t));
}
function r2(t, e, n) {
    return zn(t, { tooltip: e, tooltipItems: n, type: 'tooltip' });
}
function Df(t, e) {
    const n =
        e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return n ? t.override(n) : t;
}
const m0 = {
    beforeTitle: Vt,
    title(t) {
        if (t.length > 0) {
            const e = t[0],
                n = e.chart.data.labels,
                i = n ? n.length : 0;
            if (this && this.options && this.options.mode === 'dataset')
                return e.dataset.label || '';
            if (e.label) return e.label;
            if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
        }
        return '';
    },
    afterTitle: Vt,
    beforeBody: Vt,
    beforeLabel: Vt,
    label(t) {
        if (this && this.options && this.options.mode === 'dataset')
            return t.label + ': ' + t.formattedValue || t.formattedValue;
        let e = t.dataset.label || '';
        e && (e += ': ');
        const n = t.formattedValue;
        return X(n) || (e += n), e;
    },
    labelColor(t) {
        const n = t.chart
            .getDatasetMeta(t.datasetIndex)
            .controller.getStyle(t.dataIndex);
        return {
            borderColor: n.borderColor,
            backgroundColor: n.backgroundColor,
            borderWidth: n.borderWidth,
            borderDash: n.borderDash,
            borderDashOffset: n.borderDashOffset,
            borderRadius: 0,
        };
    },
    labelTextColor() {
        return this.options.bodyColor;
    },
    labelPointStyle(t) {
        const n = t.chart
            .getDatasetMeta(t.datasetIndex)
            .controller.getStyle(t.dataIndex);
        return { pointStyle: n.pointStyle, rotation: n.rotation };
    },
    afterLabel: Vt,
    afterBody: Vt,
    beforeFooter: Vt,
    footer: Vt,
    afterFooter: Vt,
};
function Qe(t, e, n, i) {
    const s = t[e].call(n, i);
    return typeof s > 'u' ? m0[e].call(n, i) : s;
}
class Ec extends Tt {
    constructor(e) {
        super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = e.chart),
            (this.options = e.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0);
    }
    initialize(e) {
        (this.options = e),
            (this._cachedAnimations = void 0),
            (this.$context = void 0);
    }
    _resolveAnimations() {
        const e = this._cachedAnimations;
        if (e) return e;
        const n = this.chart,
            i = this.options.setContext(this.getContext()),
            s = i.enabled && n.options.animation && i.animations,
            r = new Xg(this.chart, s);
        return s._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
    }
    getContext() {
        return (
            this.$context ||
            (this.$context = r2(
                this.chart.getContext(),
                this,
                this._tooltipItems
            ))
        );
    }
    getTitle(e, n) {
        const { callbacks: i } = n,
            s = Qe(i, 'beforeTitle', this, e),
            r = Qe(i, 'title', this, e),
            o = Qe(i, 'afterTitle', this, e);
        let a = [];
        return (a = Dt(a, Ht(s))), (a = Dt(a, Ht(r))), (a = Dt(a, Ht(o))), a;
    }
    getBeforeBody(e, n) {
        return Nf(Qe(n.callbacks, 'beforeBody', this, e));
    }
    getBody(e, n) {
        const { callbacks: i } = n,
            s = [];
        return (
            J(e, (r) => {
                const o = { before: [], lines: [], after: [] },
                    a = Df(i, r);
                Dt(o.before, Ht(Qe(a, 'beforeLabel', this, r))),
                    Dt(o.lines, Qe(a, 'label', this, r)),
                    Dt(o.after, Ht(Qe(a, 'afterLabel', this, r))),
                    s.push(o);
            }),
            s
        );
    }
    getAfterBody(e, n) {
        return Nf(Qe(n.callbacks, 'afterBody', this, e));
    }
    getFooter(e, n) {
        const { callbacks: i } = n,
            s = Qe(i, 'beforeFooter', this, e),
            r = Qe(i, 'footer', this, e),
            o = Qe(i, 'afterFooter', this, e);
        let a = [];
        return (a = Dt(a, Ht(s))), (a = Dt(a, Ht(r))), (a = Dt(a, Ht(o))), a;
    }
    _createItems(e) {
        const n = this._active,
            i = this.chart.data,
            s = [],
            r = [],
            o = [];
        let a = [],
            l,
            c;
        for (l = 0, c = n.length; l < c; ++l) a.push(Zk(this.chart, n[l]));
        return (
            e.filter && (a = a.filter((u, d, h) => e.filter(u, d, h, i))),
            e.itemSort && (a = a.sort((u, d) => e.itemSort(u, d, i))),
            J(a, (u) => {
                const d = Df(e.callbacks, u);
                s.push(Qe(d, 'labelColor', this, u)),
                    r.push(Qe(d, 'labelPointStyle', this, u)),
                    o.push(Qe(d, 'labelTextColor', this, u));
            }),
            (this.labelColors = s),
            (this.labelPointStyles = r),
            (this.labelTextColors = o),
            (this.dataPoints = a),
            a
        );
    }
    update(e, n) {
        const i = this.options.setContext(this.getContext()),
            s = this._active;
        let r,
            o = [];
        if (!s.length) this.opacity !== 0 && (r = { opacity: 0 });
        else {
            const a = _s[i.position].call(this, s, this._eventPosition);
            (o = this._createItems(i)),
                (this.title = this.getTitle(o, i)),
                (this.beforeBody = this.getBeforeBody(o, i)),
                (this.body = this.getBody(o, i)),
                (this.afterBody = this.getAfterBody(o, i)),
                (this.footer = this.getFooter(o, i));
            const l = (this._size = Tf(this, i)),
                c = Object.assign({}, a, l),
                u = jf(this.chart, i, c),
                d = Of(i, c, u, this.chart);
            (this.xAlign = u.xAlign),
                (this.yAlign = u.yAlign),
                (r = {
                    opacity: 1,
                    x: d.x,
                    y: d.y,
                    width: l.width,
                    height: l.height,
                    caretX: a.x,
                    caretY: a.y,
                });
        }
        (this._tooltipItems = o),
            (this.$context = void 0),
            r && this._resolveAnimations().update(this, r),
            e &&
                i.external &&
                i.external.call(this, {
                    chart: this.chart,
                    tooltip: this,
                    replay: n,
                });
    }
    drawCaret(e, n, i, s) {
        const r = this.getCaretPosition(e, i, s);
        n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3);
    }
    getCaretPosition(e, n, i) {
        const { xAlign: s, yAlign: r } = this,
            { caretSize: o, cornerRadius: a } = i,
            { topLeft: l, topRight: c, bottomLeft: u, bottomRight: d } = ni(a),
            { x: h, y: p } = e,
            { width: v, height: y } = n;
        let _, m, g, x, b, w;
        return (
            r === 'center'
                ? ((b = p + y / 2),
                  s === 'left'
                      ? ((_ = h), (m = _ - o), (x = b + o), (w = b - o))
                      : ((_ = h + v), (m = _ + o), (x = b - o), (w = b + o)),
                  (g = _))
                : (s === 'left'
                      ? (m = h + Math.max(l, u) + o)
                      : s === 'right'
                      ? (m = h + v - Math.max(c, d) - o)
                      : (m = this.caretX),
                  r === 'top'
                      ? ((x = p), (b = x - o), (_ = m - o), (g = m + o))
                      : ((x = p + y), (b = x + o), (_ = m + o), (g = m - o)),
                  (w = x)),
            { x1: _, x2: m, x3: g, y1: x, y2: b, y3: w }
        );
    }
    drawTitle(e, n, i) {
        const s = this.title,
            r = s.length;
        let o, a, l;
        if (r) {
            const c = Ii(i.rtl, this.x, this.width);
            for (
                e.x = Gr(this, i.titleAlign, i),
                    n.textAlign = c.textAlign(i.titleAlign),
                    n.textBaseline = 'middle',
                    o = Se(i.titleFont),
                    a = i.titleSpacing,
                    n.fillStyle = i.titleColor,
                    n.font = o.string,
                    l = 0;
                l < r;
                ++l
            )
                n.fillText(s[l], c.x(e.x), e.y + o.lineHeight / 2),
                    (e.y += o.lineHeight + a),
                    l + 1 === r && (e.y += i.titleMarginBottom - a);
        }
    }
    _drawColorBox(e, n, i, s, r) {
        const o = this.labelColors[i],
            a = this.labelPointStyles[i],
            { boxHeight: l, boxWidth: c } = r,
            u = Se(r.bodyFont),
            d = Gr(this, 'left', r),
            h = s.x(d),
            p = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0,
            v = n.y + p;
        if (r.usePointStyle) {
            const y = {
                    radius: Math.min(c, l) / 2,
                    pointStyle: a.pointStyle,
                    rotation: a.rotation,
                    borderWidth: 1,
                },
                _ = s.leftForLtr(h, c) + c / 2,
                m = v + l / 2;
            (e.strokeStyle = r.multiKeyBackground),
                (e.fillStyle = r.multiKeyBackground),
                bc(e, y, _, m),
                (e.strokeStyle = o.borderColor),
                (e.fillStyle = o.backgroundColor),
                bc(e, y, _, m);
        } else {
            (e.lineWidth = H(o.borderWidth)
                ? Math.max(...Object.values(o.borderWidth))
                : o.borderWidth || 1),
                (e.strokeStyle = o.borderColor),
                e.setLineDash(o.borderDash || []),
                (e.lineDashOffset = o.borderDashOffset || 0);
            const y = s.leftForLtr(h, c),
                _ = s.leftForLtr(s.xPlus(h, 1), c - 2),
                m = ni(o.borderRadius);
            Object.values(m).some((g) => g !== 0)
                ? (e.beginPath(),
                  (e.fillStyle = r.multiKeyBackground),
                  lr(e, { x: y, y: v, w: c, h: l, radius: m }),
                  e.fill(),
                  e.stroke(),
                  (e.fillStyle = o.backgroundColor),
                  e.beginPath(),
                  lr(e, { x: _, y: v + 1, w: c - 2, h: l - 2, radius: m }),
                  e.fill())
                : ((e.fillStyle = r.multiKeyBackground),
                  e.fillRect(y, v, c, l),
                  e.strokeRect(y, v, c, l),
                  (e.fillStyle = o.backgroundColor),
                  e.fillRect(_, v + 1, c - 2, l - 2));
        }
        e.fillStyle = this.labelTextColors[i];
    }
    drawBody(e, n, i) {
        const { body: s } = this,
            {
                bodySpacing: r,
                bodyAlign: o,
                displayColors: a,
                boxHeight: l,
                boxWidth: c,
                boxPadding: u,
            } = i,
            d = Se(i.bodyFont);
        let h = d.lineHeight,
            p = 0;
        const v = Ii(i.rtl, this.x, this.width),
            y = function (M) {
                n.fillText(M, v.x(e.x + p), e.y + h / 2), (e.y += h + r);
            },
            _ = v.textAlign(o);
        let m, g, x, b, w, k, S;
        for (
            n.textAlign = o,
                n.textBaseline = 'middle',
                n.font = d.string,
                e.x = Gr(this, _, i),
                n.fillStyle = i.bodyColor,
                J(this.beforeBody, y),
                p =
                    a && _ !== 'right'
                        ? o === 'center'
                            ? c / 2 + u
                            : c + 2 + u
                        : 0,
                b = 0,
                k = s.length;
            b < k;
            ++b
        ) {
            for (
                m = s[b],
                    g = this.labelTextColors[b],
                    n.fillStyle = g,
                    J(m.before, y),
                    x = m.lines,
                    a &&
                        x.length &&
                        (this._drawColorBox(n, e, b, v, i),
                        (h = Math.max(d.lineHeight, l))),
                    w = 0,
                    S = x.length;
                w < S;
                ++w
            )
                y(x[w]), (h = d.lineHeight);
            J(m.after, y);
        }
        (p = 0), (h = d.lineHeight), J(this.afterBody, y), (e.y -= r);
    }
    drawFooter(e, n, i) {
        const s = this.footer,
            r = s.length;
        let o, a;
        if (r) {
            const l = Ii(i.rtl, this.x, this.width);
            for (
                e.x = Gr(this, i.footerAlign, i),
                    e.y += i.footerMarginTop,
                    n.textAlign = l.textAlign(i.footerAlign),
                    n.textBaseline = 'middle',
                    o = Se(i.footerFont),
                    n.fillStyle = i.footerColor,
                    n.font = o.string,
                    a = 0;
                a < r;
                ++a
            )
                n.fillText(s[a], l.x(e.x), e.y + o.lineHeight / 2),
                    (e.y += o.lineHeight + i.footerSpacing);
        }
    }
    drawBackground(e, n, i, s) {
        const { xAlign: r, yAlign: o } = this,
            { x: a, y: l } = e,
            { width: c, height: u } = i,
            {
                topLeft: d,
                topRight: h,
                bottomLeft: p,
                bottomRight: v,
            } = ni(s.cornerRadius);
        (n.fillStyle = s.backgroundColor),
            (n.strokeStyle = s.borderColor),
            (n.lineWidth = s.borderWidth),
            n.beginPath(),
            n.moveTo(a + d, l),
            o === 'top' && this.drawCaret(e, n, i, s),
            n.lineTo(a + c - h, l),
            n.quadraticCurveTo(a + c, l, a + c, l + h),
            o === 'center' && r === 'right' && this.drawCaret(e, n, i, s),
            n.lineTo(a + c, l + u - v),
            n.quadraticCurveTo(a + c, l + u, a + c - v, l + u),
            o === 'bottom' && this.drawCaret(e, n, i, s),
            n.lineTo(a + p, l + u),
            n.quadraticCurveTo(a, l + u, a, l + u - p),
            o === 'center' && r === 'left' && this.drawCaret(e, n, i, s),
            n.lineTo(a, l + d),
            n.quadraticCurveTo(a, l, a + d, l),
            n.closePath(),
            n.fill(),
            s.borderWidth > 0 && n.stroke();
    }
    _updateAnimationTarget(e) {
        const n = this.chart,
            i = this.$animations,
            s = i && i.x,
            r = i && i.y;
        if (s || r) {
            const o = _s[e.position].call(
                this,
                this._active,
                this._eventPosition
            );
            if (!o) return;
            const a = (this._size = Tf(this, e)),
                l = Object.assign({}, o, this._size),
                c = jf(n, e, l),
                u = Of(e, l, c, n);
            (s._to !== u.x || r._to !== u.y) &&
                ((this.xAlign = c.xAlign),
                (this.yAlign = c.yAlign),
                (this.width = a.width),
                (this.height = a.height),
                (this.caretX = o.x),
                (this.caretY = o.y),
                this._resolveAnimations().update(this, u));
        }
    }
    _willRender() {
        return !!this.opacity;
    }
    draw(e) {
        const n = this.options.setContext(this.getContext());
        let i = this.opacity;
        if (!i) return;
        this._updateAnimationTarget(n);
        const s = { width: this.width, height: this.height },
            r = { x: this.x, y: this.y };
        i = Math.abs(i) < 0.001 ? 0 : i;
        const o = ze(n.padding),
            a =
                this.title.length ||
                this.beforeBody.length ||
                this.body.length ||
                this.afterBody.length ||
                this.footer.length;
        n.enabled &&
            a &&
            (e.save(),
            (e.globalAlpha = i),
            this.drawBackground(r, e, s, n),
            Hg(e, n.textDirection),
            (r.y += o.top),
            this.drawTitle(r, e, n),
            this.drawBody(r, e, n),
            this.drawFooter(r, e, n),
            Wg(e, n.textDirection),
            e.restore());
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(e, n) {
        const i = this._active,
            s = e.map(({ datasetIndex: a, index: l }) => {
                const c = this.chart.getDatasetMeta(a);
                if (!c) throw new Error('Cannot find a dataset at index ' + a);
                return { datasetIndex: a, element: c.data[l], index: l };
            }),
            r = !Jo(i, s),
            o = this._positionChanged(s, n);
        (r || o) &&
            ((this._active = s),
            (this._eventPosition = n),
            (this._ignoreReplayEvents = !0),
            this.update(!0));
    }
    handleEvent(e, n, i = !0) {
        if (n && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        const s = this.options,
            r = this._active || [],
            o = this._getActiveElements(e, r, n, i),
            a = this._positionChanged(o, e),
            l = n || !Jo(o, r) || a;
        return (
            l &&
                ((this._active = o),
                (s.enabled || s.external) &&
                    ((this._eventPosition = { x: e.x, y: e.y }),
                    this.update(!0, n))),
            l
        );
    }
    _getActiveElements(e, n, i, s) {
        const r = this.options;
        if (e.type === 'mouseout') return [];
        if (!s)
            return n.filter(
                (a) =>
                    this.chart.data.datasets[a.datasetIndex] &&
                    this.chart
                        .getDatasetMeta(a.datasetIndex)
                        .controller.getParsed(a.index) !== void 0
            );
        const o = this.chart.getElementsAtEventForMode(e, r.mode, r, i);
        return r.reverse && o.reverse(), o;
    }
    _positionChanged(e, n) {
        const { caretX: i, caretY: s, options: r } = this,
            o = _s[r.position].call(this, e, n);
        return o !== !1 && (i !== o.x || s !== o.y);
    }
}
O(Ec, 'positioners', _s);
var o2 = {
        id: 'tooltip',
        _element: Ec,
        positioners: _s,
        afterInit(t, e, n) {
            n && (t.tooltip = new Ec({ chart: t, options: n }));
        },
        beforeUpdate(t, e, n) {
            t.tooltip && t.tooltip.initialize(n);
        },
        reset(t, e, n) {
            t.tooltip && t.tooltip.initialize(n);
        },
        afterDraw(t) {
            const e = t.tooltip;
            if (e && e._willRender()) {
                const n = { tooltip: e };
                if (
                    t.notifyPlugins('beforeTooltipDraw', {
                        ...n,
                        cancelable: !0,
                    }) === !1
                )
                    return;
                e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', n);
            }
        },
        afterEvent(t, e) {
            if (t.tooltip) {
                const n = e.replay;
                t.tooltip.handleEvent(e.event, n, e.inChartArea) &&
                    (e.changed = !0);
            }
        },
        defaults: {
            enabled: !0,
            external: null,
            position: 'average',
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#fff',
            titleFont: { weight: 'bold' },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: 'left',
            bodyColor: '#fff',
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: 'left',
            footerColor: '#fff',
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: { weight: 'bold' },
            footerAlign: 'left',
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (t, e) => e.bodyFont.size,
            boxWidth: (t, e) => e.bodyFont.size,
            multiKeyBackground: '#fff',
            displayColors: !0,
            boxPadding: 0,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            animation: { duration: 400, easing: 'easeOutQuart' },
            animations: {
                numbers: {
                    type: 'number',
                    properties: [
                        'x',
                        'y',
                        'width',
                        'height',
                        'caretX',
                        'caretY',
                    ],
                },
                opacity: { easing: 'linear', duration: 200 },
            },
            callbacks: m0,
        },
        defaultRoutes: {
            bodyFont: 'font',
            footerFont: 'font',
            titleFont: 'font',
        },
        descriptors: {
            _scriptable: (t) =>
                t !== 'filter' && t !== 'itemSort' && t !== 'external',
            _indexable: !1,
            callbacks: { _scriptable: !1, _indexable: !1 },
            animation: { _fallback: !1 },
            animations: { _fallback: 'animation' },
        },
        additionalOptionScopes: ['interaction'],
    },
    a2 = Object.freeze({
        __proto__: null,
        Colors: xk,
        Decimation: Sk,
        Filler: Hk,
        Legend: Kk,
        SubTitle: Jk,
        Title: Gk,
        Tooltip: o2,
    });
const l2 = (t, e, n, i) => (
    typeof e == 'string'
        ? ((n = t.push(e) - 1), i.unshift({ index: n, label: e }))
        : isNaN(e) && (n = null),
    n
);
function c2(t, e, n, i) {
    const s = t.indexOf(e);
    if (s === -1) return l2(t, e, n, i);
    const r = t.lastIndexOf(e);
    return s !== r ? n : s;
}
const u2 = (t, e) => (t === null ? null : Pe(Math.round(t), 0, e));
function Lf(t) {
    const e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
}
class Tc extends pi {
    constructor(e) {
        super(e),
            (this._startValue = void 0),
            (this._valueRange = 0),
            (this._addedLabels = []);
    }
    init(e) {
        const n = this._addedLabels;
        if (n.length) {
            const i = this.getLabels();
            for (const { index: s, label: r } of n)
                i[s] === r && i.splice(s, 1);
            this._addedLabels = [];
        }
        super.init(e);
    }
    parse(e, n) {
        if (X(e)) return null;
        const i = this.getLabels();
        return (
            (n =
                isFinite(n) && i[n] === e
                    ? n
                    : c2(i, e, V(n, e), this._addedLabels)),
            u2(n, i.length - 1)
        );
    }
    determineDataLimits() {
        const { minDefined: e, maxDefined: n } = this.getUserBounds();
        let { min: i, max: s } = this.getMinMax(!0);
        this.options.bounds === 'ticks' &&
            (e || (i = 0), n || (s = this.getLabels().length - 1)),
            (this.min = i),
            (this.max = s);
    }
    buildTicks() {
        const e = this.min,
            n = this.max,
            i = this.options.offset,
            s = [];
        let r = this.getLabels();
        (r = e === 0 && n === r.length - 1 ? r : r.slice(e, n + 1)),
            (this._valueRange = Math.max(r.length - (i ? 0 : 1), 1)),
            (this._startValue = this.min - (i ? 0.5 : 0));
        for (let o = e; o <= n; o++) s.push({ value: o });
        return s;
    }
    getLabelForValue(e) {
        return Lf.call(this, e);
    }
    configure() {
        super.configure(),
            this.isHorizontal() || (this._reversePixels = !this._reversePixels);
    }
    getPixelForValue(e) {
        return (
            typeof e != 'number' && (e = this.parse(e)),
            e === null
                ? NaN
                : this.getPixelForDecimal(
                      (e - this._startValue) / this._valueRange
                  )
        );
    }
    getPixelForTick(e) {
        const n = this.ticks;
        return e < 0 || e > n.length - 1
            ? null
            : this.getPixelForValue(n[e].value);
    }
    getValueForPixel(e) {
        return Math.round(
            this._startValue + this.getDecimalForPixel(e) * this._valueRange
        );
    }
    getBasePixel() {
        return this.bottom;
    }
}
O(Tc, 'id', 'category'), O(Tc, 'defaults', { ticks: { callback: Lf } });
function d2(t, e) {
    const n = [],
        {
            bounds: s,
            step: r,
            min: o,
            max: a,
            precision: l,
            count: c,
            maxTicks: u,
            maxDigits: d,
            includeBounds: h,
        } = t,
        p = r || 1,
        v = u - 1,
        { min: y, max: _ } = e,
        m = !X(o),
        g = !X(a),
        x = !X(c),
        b = (_ - y) / (d + 1);
    let w = Ph((_ - y) / v / p) * p,
        k,
        S,
        M,
        T;
    if (w < 1e-14 && !m && !g) return [{ value: y }, { value: _ }];
    (T = Math.ceil(_ / w) - Math.floor(y / w)),
        T > v && (w = Ph((T * w) / v / p) * p),
        X(l) || ((k = Math.pow(10, l)), (w = Math.ceil(w * k) / k)),
        s === 'ticks'
            ? ((S = Math.floor(y / w) * w), (M = Math.ceil(_ / w) * w))
            : ((S = y), (M = _)),
        m && g && r && rb((a - o) / r, w / 1e3)
            ? ((T = Math.round(Math.min((a - o) / w, u))),
              (w = (a - o) / T),
              (S = o),
              (M = a))
            : x
            ? ((S = m ? o : S), (M = g ? a : M), (T = c - 1), (w = (M - S) / T))
            : ((T = (M - S) / w),
              Ds(T, Math.round(T), w / 1e3)
                  ? (T = Math.round(T))
                  : (T = Math.ceil(T)));
    const j = Math.max(Eh(w), Eh(S));
    (k = Math.pow(10, X(l) ? j : l)),
        (S = Math.round(S * k) / k),
        (M = Math.round(M * k) / k);
    let R = 0;
    for (
        m &&
        (h && S !== o
            ? (n.push({ value: o }),
              S < o && R++,
              Ds(Math.round((S + R * w) * k) / k, o, Rf(o, b, t)) && R++)
            : S < o && R++);
        R < T;
        ++R
    ) {
        const I = Math.round((S + R * w) * k) / k;
        if (g && I > a) break;
        n.push({ value: I });
    }
    return (
        g && h && M !== a
            ? n.length && Ds(n[n.length - 1].value, a, Rf(a, b, t))
                ? (n[n.length - 1].value = a)
                : n.push({ value: a })
            : (!g || M === a) && n.push({ value: M }),
        n
    );
}
function Rf(t, e, { horizontal: n, minRotation: i }) {
    const s = St(i),
        r = (n ? Math.sin(s) : Math.cos(s)) || 0.001,
        o = 0.75 * e * ('' + t).length;
    return Math.min(e / r, o);
}
class ra extends pi {
    constructor(e) {
        super(e),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0);
    }
    parse(e, n) {
        return X(e) ||
            ((typeof e == 'number' || e instanceof Number) && !isFinite(+e))
            ? null
            : +e;
    }
    handleTickRangeOptions() {
        const { beginAtZero: e } = this.options,
            { minDefined: n, maxDefined: i } = this.getUserBounds();
        let { min: s, max: r } = this;
        const o = (l) => (s = n ? s : l),
            a = (l) => (r = i ? r : l);
        if (e) {
            const l = zt(s),
                c = zt(r);
            l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && o(0);
        }
        if (s === r) {
            let l = r === 0 ? 1 : Math.abs(r * 0.05);
            a(r + l), e || o(s - l);
        }
        (this.min = s), (this.max = r);
    }
    getTickLimit() {
        const e = this.options.ticks;
        let { maxTicksLimit: n, stepSize: i } = e,
            s;
        return (
            i
                ? ((s = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
                  s > 1e3 &&
                      (console.warn(
                          `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`
                      ),
                      (s = 1e3)))
                : ((s = this.computeTickLimit()), (n = n || 11)),
            n && (s = Math.min(n, s)),
            s
        );
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
        const e = this.options,
            n = e.ticks;
        let i = this.getTickLimit();
        i = Math.max(2, i);
        const s = {
                maxTicks: i,
                bounds: e.bounds,
                min: e.min,
                max: e.max,
                precision: n.precision,
                step: n.stepSize,
                count: n.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: n.minRotation || 0,
                includeBounds: n.includeBounds !== !1,
            },
            r = this._range || this,
            o = d2(s, r);
        return (
            e.bounds === 'ticks' && Mg(o, this, 'value'),
            e.reverse
                ? (o.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
            o
        );
    }
    configure() {
        const e = this.ticks;
        let n = this.min,
            i = this.max;
        if ((super.configure(), this.options.offset && e.length)) {
            const s = (i - n) / Math.max(e.length - 1, 1) / 2;
            (n -= s), (i += s);
        }
        (this._startValue = n),
            (this._endValue = i),
            (this._valueRange = i - n);
    }
    getLabelForValue(e) {
        return vr(e, this.chart.options.locale, this.options.ticks.format);
    }
}
class jc extends ra {
    determineDataLimits() {
        const { min: e, max: n } = this.getMinMax(!0);
        (this.min = ge(e) ? e : 0),
            (this.max = ge(n) ? n : 1),
            this.handleTickRangeOptions();
    }
    computeTickLimit() {
        const e = this.isHorizontal(),
            n = e ? this.width : this.height,
            i = St(this.options.ticks.minRotation),
            s = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
            r = this._resolveTickFontOptions(0);
        return Math.ceil(n / Math.min(40, r.lineHeight / s));
    }
    getPixelForValue(e) {
        return e === null
            ? NaN
            : this.getPixelForDecimal(
                  (e - this._startValue) / this._valueRange
              );
    }
    getValueForPixel(e) {
        return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
    }
}
O(jc, 'id', 'linear'),
    O(jc, 'defaults', { ticks: { callback: Ma.formatters.numeric } });
const ur = (t) => Math.floor(yn(t)),
    Hn = (t, e) => Math.pow(10, ur(t) + e);
function Af(t) {
    return t / Math.pow(10, ur(t)) === 1;
}
function If(t, e, n) {
    const i = Math.pow(10, n),
        s = Math.floor(t / i);
    return Math.ceil(e / i) - s;
}
function h2(t, e) {
    const n = e - t;
    let i = ur(n);
    for (; If(t, e, i) > 10; ) i++;
    for (; If(t, e, i) < 10; ) i--;
    return Math.min(i, ur(t));
}
function f2(t, { min: e, max: n }) {
    e = nt(t.min, e);
    const i = [],
        s = ur(e);
    let r = h2(e, n),
        o = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
    const a = Math.pow(10, r),
        l = s > r ? Math.pow(10, s) : 0,
        c = Math.round((e - l) * o) / o,
        u = Math.floor((e - l) / a / 10) * a * 10;
    let d = Math.floor((c - u) / Math.pow(10, r)),
        h = nt(t.min, Math.round((l + u + d * Math.pow(10, r)) * o) / o);
    for (; h < n; )
        i.push({ value: h, major: Af(h), significand: d }),
            d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
            d >= 20 && (r++, (d = 2), (o = r >= 0 ? 1 : o)),
            (h = Math.round((l + u + d * Math.pow(10, r)) * o) / o);
    const p = nt(t.max, h);
    return i.push({ value: p, major: Af(p), significand: d }), i;
}
class Oc extends pi {
    constructor(e) {
        super(e),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0);
    }
    parse(e, n) {
        const i = ra.prototype.parse.apply(this, [e, n]);
        if (i === 0) {
            this._zero = !0;
            return;
        }
        return ge(i) && i > 0 ? i : null;
    }
    determineDataLimits() {
        const { min: e, max: n } = this.getMinMax(!0);
        (this.min = ge(e) ? Math.max(0, e) : null),
            (this.max = ge(n) ? Math.max(0, n) : null),
            this.options.beginAtZero && (this._zero = !0),
            this._zero &&
                this.min !== this._suggestedMin &&
                !ge(this._userMin) &&
                (this.min =
                    e === Hn(this.min, 0) ? Hn(this.min, -1) : Hn(this.min, 0)),
            this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        const { minDefined: e, maxDefined: n } = this.getUserBounds();
        let i = this.min,
            s = this.max;
        const r = (a) => (i = e ? i : a),
            o = (a) => (s = n ? s : a);
        i === s && (i <= 0 ? (r(1), o(10)) : (r(Hn(i, -1)), o(Hn(s, 1)))),
            i <= 0 && r(Hn(s, -1)),
            s <= 0 && o(Hn(i, 1)),
            (this.min = i),
            (this.max = s);
    }
    buildTicks() {
        const e = this.options,
            n = { min: this._userMin, max: this._userMax },
            i = f2(n, this);
        return (
            e.bounds === 'ticks' && Mg(i, this, 'value'),
            e.reverse
                ? (i.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
            i
        );
    }
    getLabelForValue(e) {
        return e === void 0
            ? '0'
            : vr(e, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        const e = this.min;
        super.configure(),
            (this._startValue = yn(e)),
            (this._valueRange = yn(this.max) - yn(e));
    }
    getPixelForValue(e) {
        return (
            (e === void 0 || e === 0) && (e = this.min),
            e === null || isNaN(e)
                ? NaN
                : this.getPixelForDecimal(
                      e === this.min
                          ? 0
                          : (yn(e) - this._startValue) / this._valueRange
                  )
        );
    }
    getValueForPixel(e) {
        const n = this.getDecimalForPixel(e);
        return Math.pow(10, this._startValue + n * this._valueRange);
    }
}
O(Oc, 'id', 'logarithmic'),
    O(Oc, 'defaults', {
        ticks: { callback: Ma.formatters.logarithmic, major: { enabled: !0 } },
    });
function Nc(t) {
    const e = t.ticks;
    if (e.display && t.display) {
        const n = ze(e.backdropPadding);
        return V(e.font && e.font.size, ye.font.size) + n.height;
    }
    return 0;
}
function p2(t, e, n) {
    return (
        (n = oe(n) ? n : [n]),
        { w: wb(t, e.string, n), h: n.length * e.lineHeight }
    );
}
function Ff(t, e, n, i, s) {
    return t === i || t === s
        ? { start: e - n / 2, end: e + n / 2 }
        : t < i || t > s
        ? { start: e - n, end: e }
        : { start: e, end: e + n };
}
function m2(t) {
    const e = {
            l: t.left + t._padding.left,
            r: t.right - t._padding.right,
            t: t.top + t._padding.top,
            b: t.bottom - t._padding.bottom,
        },
        n = Object.assign({}, e),
        i = [],
        s = [],
        r = t._pointLabels.length,
        o = t.options.pointLabels,
        a = o.centerPointLabels ? ce / r : 0;
    for (let l = 0; l < r; l++) {
        const c = o.setContext(t.getPointLabelContext(l));
        s[l] = c.padding;
        const u = t.getPointPosition(l, t.drawingArea + s[l], a),
            d = Se(c.font),
            h = p2(t.ctx, d, t._pointLabels[l]);
        i[l] = h;
        const p = st(t.getIndexAngle(l) + a),
            v = Math.round(Fu(p)),
            y = Ff(v, u.x, h.w, 0, 180),
            _ = Ff(v, u.y, h.h, 90, 270);
        g2(n, e, p, y, _);
    }
    t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
        (t._pointLabelItems = x2(t, i, s));
}
function g2(t, e, n, i, s) {
    const r = Math.abs(Math.sin(n)),
        o = Math.abs(Math.cos(n));
    let a = 0,
        l = 0;
    i.start < e.l
        ? ((a = (e.l - i.start) / r), (t.l = Math.min(t.l, e.l - a)))
        : i.end > e.r &&
          ((a = (i.end - e.r) / r), (t.r = Math.max(t.r, e.r + a))),
        s.start < e.t
            ? ((l = (e.t - s.start) / o), (t.t = Math.min(t.t, e.t - l)))
            : s.end > e.b &&
              ((l = (s.end - e.b) / o), (t.b = Math.max(t.b, e.b + l)));
}
function y2(t, e, n) {
    const i = t.drawingArea,
        { extra: s, additionalAngle: r, padding: o, size: a } = n,
        l = t.getPointPosition(e, i + s + o, r),
        c = Math.round(Fu(st(l.angle + xe))),
        u = w2(l.y, a.h, c),
        d = _2(c),
        h = b2(l.x, a.w, d);
    return {
        visible: !0,
        x: l.x,
        y: u,
        textAlign: d,
        left: h,
        top: u,
        right: h + a.w,
        bottom: u + a.h,
    };
}
function v2(t, e) {
    if (!e) return !0;
    const { left: n, top: i, right: s, bottom: r } = t;
    return !(
        Jt({ x: n, y: i }, e) ||
        Jt({ x: n, y: r }, e) ||
        Jt({ x: s, y: i }, e) ||
        Jt({ x: s, y: r }, e)
    );
}
function x2(t, e, n) {
    const i = [],
        s = t._pointLabels.length,
        r = t.options,
        { centerPointLabels: o, display: a } = r.pointLabels,
        l = { extra: Nc(r) / 2, additionalAngle: o ? ce / s : 0 };
    let c;
    for (let u = 0; u < s; u++) {
        (l.padding = n[u]), (l.size = e[u]);
        const d = y2(t, u, l);
        i.push(d),
            a === 'auto' && ((d.visible = v2(d, c)), d.visible && (c = d));
    }
    return i;
}
function _2(t) {
    return t === 0 || t === 180 ? 'center' : t < 180 ? 'left' : 'right';
}
function b2(t, e, n) {
    return n === 'right' ? (t -= e) : n === 'center' && (t -= e / 2), t;
}
function w2(t, e, n) {
    return (
        n === 90 || n === 270 ? (t -= e / 2) : (n > 270 || n < 90) && (t -= e),
        t
    );
}
function S2(t, e, n) {
    const { left: i, top: s, right: r, bottom: o } = n,
        { backdropColor: a } = e;
    if (!X(a)) {
        const l = ni(e.borderRadius),
            c = ze(e.backdropPadding);
        t.fillStyle = a;
        const u = i - c.left,
            d = s - c.top,
            h = r - i + c.width,
            p = o - s + c.height;
        Object.values(l).some((v) => v !== 0)
            ? (t.beginPath(),
              lr(t, { x: u, y: d, w: h, h: p, radius: l }),
              t.fill())
            : t.fillRect(u, d, h, p);
    }
}
function k2(t, e) {
    const {
        ctx: n,
        options: { pointLabels: i },
    } = t;
    for (let s = e - 1; s >= 0; s--) {
        const r = t._pointLabelItems[s];
        if (!r.visible) continue;
        const o = i.setContext(t.getPointLabelContext(s));
        S2(n, o, r);
        const a = Se(o.font),
            { x: l, y: c, textAlign: u } = r;
        ui(n, t._pointLabels[s], l, c + a.lineHeight / 2, a, {
            color: o.color,
            textAlign: u,
            textBaseline: 'middle',
        });
    }
}
function g0(t, e, n, i) {
    const { ctx: s } = t;
    if (n) s.arc(t.xCenter, t.yCenter, e, 0, le);
    else {
        let r = t.getPointPosition(0, e);
        s.moveTo(r.x, r.y);
        for (let o = 1; o < i; o++)
            (r = t.getPointPosition(o, e)), s.lineTo(r.x, r.y);
    }
}
function C2(t, e, n, i, s) {
    const r = t.ctx,
        o = e.circular,
        { color: a, lineWidth: l } = e;
    (!o && !i) ||
        !a ||
        !l ||
        n < 0 ||
        (r.save(),
        (r.strokeStyle = a),
        (r.lineWidth = l),
        r.setLineDash(s.dash),
        (r.lineDashOffset = s.dashOffset),
        r.beginPath(),
        g0(t, n, o, i),
        r.closePath(),
        r.stroke(),
        r.restore());
}
function M2(t, e, n) {
    return zn(t, { label: n, index: e, type: 'pointLabel' });
}
class bs extends ra {
    constructor(e) {
        super(e),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []);
    }
    setDimensions() {
        const e = (this._padding = ze(Nc(this.options) / 2)),
            n = (this.width = this.maxWidth - e.width),
            i = (this.height = this.maxHeight - e.height);
        (this.xCenter = Math.floor(this.left + n / 2 + e.left)),
            (this.yCenter = Math.floor(this.top + i / 2 + e.top)),
            (this.drawingArea = Math.floor(Math.min(n, i) / 2));
    }
    determineDataLimits() {
        const { min: e, max: n } = this.getMinMax(!1);
        (this.min = ge(e) && !isNaN(e) ? e : 0),
            (this.max = ge(n) && !isNaN(n) ? n : 0),
            this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / Nc(this.options));
    }
    generateTickLabels(e) {
        ra.prototype.generateTickLabels.call(this, e),
            (this._pointLabels = this.getLabels()
                .map((n, i) => {
                    const s = ne(
                        this.options.pointLabels.callback,
                        [n, i],
                        this
                    );
                    return s || s === 0 ? s : '';
                })
                .filter((n, i) => this.chart.getDataVisibility(i)));
    }
    fit() {
        const e = this.options;
        e.display && e.pointLabels.display
            ? m2(this)
            : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(e, n, i, s) {
        (this.xCenter += Math.floor((e - n) / 2)),
            (this.yCenter += Math.floor((i - s) / 2)),
            (this.drawingArea -= Math.min(
                this.drawingArea / 2,
                Math.max(e, n, i, s)
            ));
    }
    getIndexAngle(e) {
        const n = le / (this._pointLabels.length || 1),
            i = this.options.startAngle || 0;
        return st(e * n + St(i));
    }
    getDistanceFromCenterForValue(e) {
        if (X(e)) return NaN;
        const n = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - e) * n : (e - this.min) * n;
    }
    getValueForDistanceFromCenter(e) {
        if (X(e)) return NaN;
        const n = e / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - n : this.min + n;
    }
    getPointLabelContext(e) {
        const n = this._pointLabels || [];
        if (e >= 0 && e < n.length) {
            const i = n[e];
            return M2(this.getContext(), e, i);
        }
    }
    getPointPosition(e, n, i = 0) {
        const s = this.getIndexAngle(e) - xe + i;
        return {
            x: Math.cos(s) * n + this.xCenter,
            y: Math.sin(s) * n + this.yCenter,
            angle: s,
        };
    }
    getPointPositionForValue(e, n) {
        return this.getPointPosition(e, this.getDistanceFromCenterForValue(n));
    }
    getBasePosition(e) {
        return this.getPointPositionForValue(e || 0, this.getBaseValue());
    }
    getPointLabelPosition(e) {
        const {
            left: n,
            top: i,
            right: s,
            bottom: r,
        } = this._pointLabelItems[e];
        return { left: n, top: i, right: s, bottom: r };
    }
    drawBackground() {
        const {
            backgroundColor: e,
            grid: { circular: n },
        } = this.options;
        if (e) {
            const i = this.ctx;
            i.save(),
                i.beginPath(),
                g0(
                    this,
                    this.getDistanceFromCenterForValue(this._endValue),
                    n,
                    this._pointLabels.length
                ),
                i.closePath(),
                (i.fillStyle = e),
                i.fill(),
                i.restore();
        }
    }
    drawGrid() {
        const e = this.ctx,
            n = this.options,
            { angleLines: i, grid: s, border: r } = n,
            o = this._pointLabels.length;
        let a, l, c;
        if (
            (n.pointLabels.display && k2(this, o),
            s.display &&
                this.ticks.forEach((u, d) => {
                    if (d !== 0) {
                        l = this.getDistanceFromCenterForValue(u.value);
                        const h = this.getContext(d),
                            p = s.setContext(h),
                            v = r.setContext(h);
                        C2(this, p, l, o, v);
                    }
                }),
            i.display)
        ) {
            for (e.save(), a = o - 1; a >= 0; a--) {
                const u = i.setContext(this.getPointLabelContext(a)),
                    { color: d, lineWidth: h } = u;
                !h ||
                    !d ||
                    ((e.lineWidth = h),
                    (e.strokeStyle = d),
                    e.setLineDash(u.borderDash),
                    (e.lineDashOffset = u.borderDashOffset),
                    (l = this.getDistanceFromCenterForValue(
                        n.ticks.reverse ? this.min : this.max
                    )),
                    (c = this.getPointPosition(a, l)),
                    e.beginPath(),
                    e.moveTo(this.xCenter, this.yCenter),
                    e.lineTo(c.x, c.y),
                    e.stroke());
            }
            e.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        const e = this.ctx,
            n = this.options,
            i = n.ticks;
        if (!i.display) return;
        const s = this.getIndexAngle(0);
        let r, o;
        e.save(),
            e.translate(this.xCenter, this.yCenter),
            e.rotate(s),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            this.ticks.forEach((a, l) => {
                if (l === 0 && !n.reverse) return;
                const c = i.setContext(this.getContext(l)),
                    u = Se(c.font);
                if (
                    ((r = this.getDistanceFromCenterForValue(
                        this.ticks[l].value
                    )),
                    c.showLabelBackdrop)
                ) {
                    (e.font = u.string),
                        (o = e.measureText(a.label).width),
                        (e.fillStyle = c.backdropColor);
                    const d = ze(c.backdropPadding);
                    e.fillRect(
                        -o / 2 - d.left,
                        -r - u.size / 2 - d.top,
                        o + d.width,
                        u.size + d.height
                    );
                }
                ui(e, a.label, 0, -r, u, {
                    color: c.color,
                    strokeColor: c.textStrokeColor,
                    strokeWidth: c.textStrokeWidth,
                });
            }),
            e.restore();
    }
    drawTitle() {}
}
O(bs, 'id', 'radialLinear'),
    O(bs, 'defaults', {
        display: !0,
        animate: !0,
        position: 'chartArea',
        angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
        },
        grid: { circular: !1 },
        startAngle: 0,
        ticks: { showLabelBackdrop: !0, callback: Ma.formatters.numeric },
        pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback(e) {
                return e;
            },
            padding: 5,
            centerPointLabels: !1,
        },
    }),
    O(bs, 'defaultRoutes', {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color',
    }),
    O(bs, 'descriptors', { angleLines: { _fallback: 'grid' } });
const ja = {
        millisecond: { common: !0, size: 1, steps: 1e3 },
        second: { common: !0, size: 1e3, steps: 60 },
        minute: { common: !0, size: 6e4, steps: 60 },
        hour: { common: !0, size: 36e5, steps: 24 },
        day: { common: !0, size: 864e5, steps: 30 },
        week: { common: !1, size: 6048e5, steps: 4 },
        month: { common: !0, size: 2628e6, steps: 12 },
        quarter: { common: !1, size: 7884e6, steps: 4 },
        year: { common: !0, size: 3154e7 },
    },
    Xe = Object.keys(ja);
function zf(t, e) {
    return t - e;
}
function Bf(t, e) {
    if (X(e)) return null;
    const n = t._adapter,
        { parser: i, round: s, isoWeekday: r } = t._parseOpts;
    let o = e;
    return (
        typeof i == 'function' && (o = i(o)),
        ge(o) || (o = typeof i == 'string' ? n.parse(o, i) : n.parse(o)),
        o === null
            ? null
            : (s &&
                  (o =
                      s === 'week' && (Ui(r) || r === !0)
                          ? n.startOf(o, 'isoWeek', r)
                          : n.startOf(o, s)),
              +o)
    );
}
function Vf(t, e, n, i) {
    const s = Xe.length;
    for (let r = Xe.indexOf(t); r < s - 1; ++r) {
        const o = ja[Xe[r]],
            a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
        if (o.common && Math.ceil((n - e) / (a * o.size)) <= i) return Xe[r];
    }
    return Xe[s - 1];
}
function P2(t, e, n, i, s) {
    for (let r = Xe.length - 1; r >= Xe.indexOf(n); r--) {
        const o = Xe[r];
        if (ja[o].common && t._adapter.diff(s, i, o) >= e - 1) return o;
    }
    return Xe[n ? Xe.indexOf(n) : 0];
}
function E2(t) {
    for (let e = Xe.indexOf(t) + 1, n = Xe.length; e < n; ++e)
        if (ja[Xe[e]].common) return Xe[e];
}
function $f(t, e, n) {
    if (!n) t[e] = !0;
    else if (n.length) {
        const { lo: i, hi: s } = zu(n, e),
            r = n[i] >= e ? n[i] : n[s];
        t[r] = !0;
    }
}
function T2(t, e, n, i) {
    const s = t._adapter,
        r = +s.startOf(e[0].value, i),
        o = e[e.length - 1].value;
    let a, l;
    for (a = r; a <= o; a = +s.add(a, 1, i))
        (l = n[a]), l >= 0 && (e[l].major = !0);
    return e;
}
function Hf(t, e, n) {
    const i = [],
        s = {},
        r = e.length;
    let o, a;
    for (o = 0; o < r; ++o)
        (a = e[o]), (s[a] = o), i.push({ value: a, major: !1 });
    return r === 0 || !n ? i : T2(t, i, s, n);
}
class dr extends pi {
    constructor(e) {
        super(e),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = 'day'),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0);
    }
    init(e, n = {}) {
        const i = e.time || (e.time = {}),
            s = (this._adapter = new Fw._date(e.adapters.date));
        s.init(n),
            Ns(i.displayFormats, s.formats()),
            (this._parseOpts = {
                parser: i.parser,
                round: i.round,
                isoWeekday: i.isoWeekday,
            }),
            super.init(e),
            (this._normalized = n.normalized);
    }
    parse(e, n) {
        return e === void 0 ? null : Bf(this, e);
    }
    beforeLayout() {
        super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
    }
    determineDataLimits() {
        const e = this.options,
            n = this._adapter,
            i = e.time.unit || 'day';
        let {
            min: s,
            max: r,
            minDefined: o,
            maxDefined: a,
        } = this.getUserBounds();
        function l(c) {
            !o && !isNaN(c.min) && (s = Math.min(s, c.min)),
                !a && !isNaN(c.max) && (r = Math.max(r, c.max));
        }
        (!o || !a) &&
            (l(this._getLabelBounds()),
            (e.bounds !== 'ticks' || e.ticks.source !== 'labels') &&
                l(this.getMinMax(!1))),
            (s = ge(s) && !isNaN(s) ? s : +n.startOf(Date.now(), i)),
            (r = ge(r) && !isNaN(r) ? r : +n.endOf(Date.now(), i) + 1),
            (this.min = Math.min(s, r - 1)),
            (this.max = Math.max(s + 1, r));
    }
    _getLabelBounds() {
        const e = this.getLabelTimestamps();
        let n = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
        return (
            e.length && ((n = e[0]), (i = e[e.length - 1])), { min: n, max: i }
        );
    }
    buildTicks() {
        const e = this.options,
            n = e.time,
            i = e.ticks,
            s =
                i.source === 'labels'
                    ? this.getLabelTimestamps()
                    : this._generate();
        e.bounds === 'ticks' &&
            s.length &&
            ((this.min = this._userMin || s[0]),
            (this.max = this._userMax || s[s.length - 1]));
        const r = this.min,
            o = this.max,
            a = cb(s, r, o);
        return (
            (this._unit =
                n.unit ||
                (i.autoSkip
                    ? Vf(
                          n.minUnit,
                          this.min,
                          this.max,
                          this._getLabelCapacity(r)
                      )
                    : P2(this, a.length, n.minUnit, this.min, this.max))),
            (this._majorUnit =
                !i.major.enabled || this._unit === 'year'
                    ? void 0
                    : E2(this._unit)),
            this.initOffsets(s),
            e.reverse && a.reverse(),
            Hf(this, a, this._majorUnit)
        );
    }
    afterAutoSkip() {
        this.options.offsetAfterAutoskip &&
            this.initOffsets(this.ticks.map((e) => +e.value));
    }
    initOffsets(e = []) {
        let n = 0,
            i = 0,
            s,
            r;
        this.options.offset &&
            e.length &&
            ((s = this.getDecimalForValue(e[0])),
            e.length === 1
                ? (n = 1 - s)
                : (n = (this.getDecimalForValue(e[1]) - s) / 2),
            (r = this.getDecimalForValue(e[e.length - 1])),
            e.length === 1
                ? (i = r)
                : (i = (r - this.getDecimalForValue(e[e.length - 2])) / 2));
        const o = e.length < 3 ? 0.5 : 0.25;
        (n = Pe(n, 0, o)),
            (i = Pe(i, 0, o)),
            (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) });
    }
    _generate() {
        const e = this._adapter,
            n = this.min,
            i = this.max,
            s = this.options,
            r = s.time,
            o = r.unit || Vf(r.minUnit, n, i, this._getLabelCapacity(n)),
            a = V(s.ticks.stepSize, 1),
            l = o === 'week' ? r.isoWeekday : !1,
            c = Ui(l) || l === !0,
            u = {};
        let d = n,
            h,
            p;
        if (
            (c && (d = +e.startOf(d, 'isoWeek', l)),
            (d = +e.startOf(d, c ? 'day' : o)),
            e.diff(i, n, o) > 1e5 * a)
        )
            throw new Error(
                n +
                    ' and ' +
                    i +
                    ' are too far apart with stepSize of ' +
                    a +
                    ' ' +
                    o
            );
        const v = s.ticks.source === 'data' && this.getDataTimestamps();
        for (h = d, p = 0; h < i; h = +e.add(h, a, o), p++) $f(u, h, v);
        return (
            (h === i || s.bounds === 'ticks' || p === 1) && $f(u, h, v),
            Object.keys(u)
                .sort(zf)
                .map((y) => +y)
        );
    }
    getLabelForValue(e) {
        const n = this._adapter,
            i = this.options.time;
        return i.tooltipFormat
            ? n.format(e, i.tooltipFormat)
            : n.format(e, i.displayFormats.datetime);
    }
    format(e, n) {
        const s = this.options.time.displayFormats,
            r = this._unit,
            o = n || s[r];
        return this._adapter.format(e, o);
    }
    _tickFormatFunction(e, n, i, s) {
        const r = this.options,
            o = r.ticks.callback;
        if (o) return ne(o, [e, n, i], this);
        const a = r.time.displayFormats,
            l = this._unit,
            c = this._majorUnit,
            u = l && a[l],
            d = c && a[c],
            h = i[n],
            p = c && d && h && h.major;
        return this._adapter.format(e, s || (p ? d : u));
    }
    generateTickLabels(e) {
        let n, i, s;
        for (n = 0, i = e.length; n < i; ++n)
            (s = e[n]), (s.label = this._tickFormatFunction(s.value, n, e));
    }
    getDecimalForValue(e) {
        return e === null ? NaN : (e - this.min) / (this.max - this.min);
    }
    getPixelForValue(e) {
        const n = this._offsets,
            i = this.getDecimalForValue(e);
        return this.getPixelForDecimal((n.start + i) * n.factor);
    }
    getValueForPixel(e) {
        const n = this._offsets,
            i = this.getDecimalForPixel(e) / n.factor - n.end;
        return this.min + i * (this.max - this.min);
    }
    _getLabelSize(e) {
        const n = this.options.ticks,
            i = this.ctx.measureText(e).width,
            s = St(this.isHorizontal() ? n.maxRotation : n.minRotation),
            r = Math.cos(s),
            o = Math.sin(s),
            a = this._resolveTickFontOptions(0).size;
        return { w: i * r + a * o, h: i * o + a * r };
    }
    _getLabelCapacity(e) {
        const n = this.options.time,
            i = n.displayFormats,
            s = i[n.unit] || i.millisecond,
            r = this._tickFormatFunction(
                e,
                0,
                Hf(this, [e], this._majorUnit),
                s
            ),
            o = this._getLabelSize(r),
            a =
                Math.floor(
                    this.isHorizontal() ? this.width / o.w : this.height / o.h
                ) - 1;
        return a > 0 ? a : 1;
    }
    getDataTimestamps() {
        let e = this._cache.data || [],
            n,
            i;
        if (e.length) return e;
        const s = this.getMatchingVisibleMetas();
        if (this._normalized && s.length)
            return (this._cache.data =
                s[0].controller.getAllParsedValues(this));
        for (n = 0, i = s.length; n < i; ++n)
            e = e.concat(s[n].controller.getAllParsedValues(this));
        return (this._cache.data = this.normalize(e));
    }
    getLabelTimestamps() {
        const e = this._cache.labels || [];
        let n, i;
        if (e.length) return e;
        const s = this.getLabels();
        for (n = 0, i = s.length; n < i; ++n) e.push(Bf(this, s[n]));
        return (this._cache.labels = this._normalized ? e : this.normalize(e));
    }
    normalize(e) {
        return Tg(e.sort(zf));
    }
}
O(dr, 'id', 'time'),
    O(dr, 'defaults', {
        bounds: 'data',
        adapters: {},
        time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: 'millisecond',
            displayFormats: {},
        },
        ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
    });
function Jr(t, e, n) {
    let i = 0,
        s = t.length - 1,
        r,
        o,
        a,
        l;
    n
        ? (e >= t[i].pos &&
              e <= t[s].pos &&
              ({ lo: i, hi: s } = Gt(t, 'pos', e)),
          ({ pos: r, time: a } = t[i]),
          ({ pos: o, time: l } = t[s]))
        : (e >= t[i].time &&
              e <= t[s].time &&
              ({ lo: i, hi: s } = Gt(t, 'time', e)),
          ({ time: r, pos: a } = t[i]),
          ({ time: o, pos: l } = t[s]));
    const c = o - r;
    return c ? a + ((l - a) * (e - r)) / c : a;
}
class Dc extends dr {
    constructor(e) {
        super(e),
            (this._table = []),
            (this._minPos = void 0),
            (this._tableRange = void 0);
    }
    initOffsets() {
        const e = this._getTimestampsForTable(),
            n = (this._table = this.buildLookupTable(e));
        (this._minPos = Jr(n, this.min)),
            (this._tableRange = Jr(n, this.max) - this._minPos),
            super.initOffsets(e);
    }
    buildLookupTable(e) {
        const { min: n, max: i } = this,
            s = [],
            r = [];
        let o, a, l, c, u;
        for (o = 0, a = e.length; o < a; ++o)
            (c = e[o]), c >= n && c <= i && s.push(c);
        if (s.length < 2)
            return [
                { time: n, pos: 0 },
                { time: i, pos: 1 },
            ];
        for (o = 0, a = s.length; o < a; ++o)
            (u = s[o + 1]),
                (l = s[o - 1]),
                (c = s[o]),
                Math.round((u + l) / 2) !== c &&
                    r.push({ time: c, pos: o / (a - 1) });
        return r;
    }
    _generate() {
        const e = this.min,
            n = this.max;
        let i = super.getDataTimestamps();
        return (
            (!i.includes(e) || !i.length) && i.splice(0, 0, e),
            (!i.includes(n) || i.length === 1) && i.push(n),
            i.sort((s, r) => s - r)
        );
    }
    _getTimestampsForTable() {
        let e = this._cache.all || [];
        if (e.length) return e;
        const n = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
        return (
            n.length && i.length
                ? (e = this.normalize(n.concat(i)))
                : (e = n.length ? n : i),
            (e = this._cache.all = e),
            e
        );
    }
    getDecimalForValue(e) {
        return (Jr(this._table, e) - this._minPos) / this._tableRange;
    }
    getValueForPixel(e) {
        const n = this._offsets,
            i = this.getDecimalForPixel(e) / n.factor - n.end;
        return Jr(this._table, i * this._tableRange + this._minPos, !0);
    }
}
O(Dc, 'id', 'timeseries'), O(Dc, 'defaults', dr.defaults);
var j2 = Object.freeze({
    __proto__: null,
    CategoryScale: Tc,
    LinearScale: jc,
    LogarithmicScale: Oc,
    RadialLinearScale: bs,
    TimeScale: dr,
    TimeSeriesScale: Dc,
});
const O2 = [Iw, fk, a2, j2];
Yt.register(...O2);
const N2 = { 'chart-container': '_chart-container_1a472_1' };
let Zr = {
        labels: [
            'Paneler',
            'Yogurt',
            'Cow Milk',
            'Buffalo Milk',
            'Mixed Milk',
            'Kurauni',
        ],
        datasets: [
            {
                label: 'Sold',
                data: [100, 100, 100, 100, 102, 102],
                borderWidth: 1,
                backgroundColor: 'rgba(54, 235, 211, 0.88)',
                border: null,
            },
            {
                label: 'Stock',
                data: [214, 198, 200, 200, 198, 198],
                backgroundColor: 'rgb(192, 236, 233)',
                border: null,
                borderWidth: 1,
            },
        ],
    },
    D2 = {
        scales: {
            y: {
                suggestedMax: 150,
                beginAtZero: !0,
                border: { color: 'brown' },
                grid: { color: null },
                ticks: { color: 'brown', border: { color: 'brown' } },
            },
            x: {
                stacked: !0,
                border: { color: 'brown' },
                grid: { color: null },
                ticks: { color: 'brown' },
            },
        },
        plugins: {
            legend: { display: !0, labels: { color: 'brown' } },
            tooltip: { enabled: !0 },
        },
    };
function L2(t) {
    const { products: e, setProducts: n } = t;
    return (
        C.useEffect(() => {
            (async function () {
                (Zr.labels = e.map((s) => {
                    let r = s.name.split(' ');
                    return (
                        (r = r.map(
                            (o) => o.charAt(0).toUpperCase() + o.slice(1)
                        )),
                        r.join(' ')
                    );
                })),
                    (Zr.datasets[0].data = e.map((s) =>
                        s.sales ? s.sales : 0
                    )),
                    (Zr.datasets[1].data = e.map((s) =>
                        s.stock ? s.stock : 0
                    ));
            })();
        }, [e]),
        C.useEffect(() => {
            const i = document.getElementById('myChart');
            let s = new Yt(i, { type: 'bar', data: Zr, options: D2 });
            return () => {
                s && s.destroy();
            };
        }),
        f.jsx('div', {
            className: N2['chart-container'],
            children: f.jsx('canvas', { id: 'myChart' }),
        })
    );
}
function R2() {
    const t = { sortBy: { issuedTime: -1 }, limit: 5 },
        [e, n] = C.useState(t),
        [i, s] = C.useState([]),
        [r, o] = C.useState([]);
    return f.jsxs('div', {
        children: [
            f.jsx('h1', { children: 'Overview' }),
            f.jsx(L2, { products: i, setProducts: s }),
            f.jsx(C_, {
                setFilterObject: n,
                products: i,
                setProducts: s,
                customers: r,
                setCustomers: o,
            }),
            f.jsxs('div', {
                className: M_['ticket-table-container'],
                children: [
                    f.jsx('h3', { children: 'Latest Transactions' }),
                    f.jsx(Nu, { filterObject: e }),
                ],
            }),
        ],
    });
}
const A2 = '_container_fudm0_1',
    q = {
        container: A2,
        'form-container': '_form-container_fudm0_1',
        'advanced-group': '_advanced-group_fudm0_8',
        'input-group': '_input-group_fudm0_12',
        'input-group--check': '_input-group--check_fudm0_20',
        'input-group--tab': '_input-group--tab_fudm0_25',
        'input-field': '_input-field_fudm0_28',
        'input-label': '_input-label_fudm0_31',
        'input-label--check': '_input-label--check_fudm0_34',
        'input-field--check': '_input-field--check_fudm0_53',
        'input-field--due': '_input-field--due_fudm0_59',
    },
    I2 = (t, e) =>
        new Promise((n, i) => {
            try {
                const s = new XMLHttpRequest(),
                    r = `${Et}/api/v1/customers/`;
                (s.onreadystatechange = () => {
                    if (s.readyState == 4) {
                        let a = JSON.parse(s.responseText);
                        console.log(a), n(a.data);
                    }
                }),
                    s.open('POST', r),
                    s.setRequestHeader('Content-Type', 'application/json'),
                    s.setRequestHeader('Authorization', `Bearer ${e}`),
                    console.log(JSON.stringify(t));
                let o = JSON.stringify(t);
                s.send(o);
            } catch (s) {
                console.log(s);
                return;
            }
        }),
    F2 = {
        name: !1,
        nameMessage: '',
        address: !1,
        addressMessage: '',
        phone: !0,
        phoneMessage: '',
        tab: !1,
        purchase: !1,
        paid: !1,
    };
function z2() {
    const { jwtToken: t } = C.useContext(jt),
        [e, n] = C.useState(''),
        [i, s] = C.useState(!1),
        [r, o] = C.useState(F2),
        a = (u) => {
            let d = Number(document.getElementById('purchase').value),
                h = Number(document.getElementById('paid').value),
                p = d - h;
            n(p);
        },
        l = () => {
            n(''), s((u) => !u);
        },
        c = async (u) => {
            u.preventDefault();
            let d = document.getElementById('createCustomerForm'),
                h = new FormData(d),
                p = {};
            h.forEach((y, _) => (p[_] = y)),
                JSON.stringify(p),
                console.log(Object.entries(r).find((y) => y[1] == !0));
            for (const [y, _] of Object.entries(r));
            let v = await I2(p, t);
            console.log(v);
        };
    return f.jsx('div', {
        className: q.container,
        children: f.jsxs('div', {
            className: q['form-container'],
            children: [
                f.jsx('h3', { children: 'Add a new customer' }),
                f.jsxs('form', {
                    action: '',
                    id: 'createCustomerForm',
                    children: [
                        f.jsxs('div', {
                            className: q['input-group'],
                            children: [
                                f.jsx('label', {
                                    htmlFor: 'customerName',
                                    className: q['input-label'],
                                    children: 'Name',
                                }),
                                f.jsx('input', {
                                    type: 'text',
                                    id: 'customerName',
                                    name: 'name',
                                    className: q['input-field'],
                                    placeholder: "Customer's Name",
                                }),
                            ],
                        }),
                        f.jsxs('div', {
                            className: q['input-group'],
                            children: [
                                f.jsx('label', {
                                    htmlFor: 'customerAddress',
                                    className: q['input-label'],
                                    children: 'Address',
                                }),
                                f.jsx('input', {
                                    type: 'text',
                                    id: 'customerAddress',
                                    name: 'address',
                                    className: q['input-field'],
                                    placeholder:
                                        'Street, City, District, Province, Country',
                                }),
                            ],
                        }),
                        f.jsxs('div', {
                            className: q['input-group'],
                            children: [
                                f.jsx('label', {
                                    htmlFor: 'customerPhone',
                                    className: q['input-label'],
                                    children: 'Phone',
                                }),
                                f.jsx('input', {
                                    id: 'customerPhone',
                                    type: 'text',
                                    name: 'phone',
                                    className: q['input-field'],
                                    placeholder:
                                        'Phone numbers separated by commas',
                                }),
                            ],
                        }),
                        f.jsxs('div', {
                            className: q['advanced-container'],
                            children: [
                                f.jsxs('div', {
                                    className: `${q['input-group']} ${q['input-group--check']}`,
                                    children: [
                                        f.jsx('label', {
                                            htmlFor: 'customerTab',
                                            className: q['input-label--check'],
                                            children: 'More Options',
                                        }),
                                        f.jsx('input', {
                                            type: 'checkbox',
                                            className: q['input-field--check'],
                                            id: 'customerTab',
                                            name: 'tab',
                                            value: i,
                                            onChange: l,
                                        }),
                                    ],
                                }),
                                i &&
                                    f.jsxs('div', {
                                        className: q['advanced-group'],
                                        children: [
                                            f.jsxs('div', {
                                                className: `${q['input-group']} ${q['input-group--tab']}`,
                                                children: [
                                                    f.jsx('label', {
                                                        htmlFor: 'purchase',
                                                        className:
                                                            q['input-label'],
                                                        children: 'Purchased',
                                                    }),
                                                    f.jsx('input', {
                                                        id: 'purchase',
                                                        name: 'purchase',
                                                        type: 'text',
                                                        className:
                                                            q['input-field'],
                                                        placeholder:
                                                            'Purchased Amount',
                                                        onChange: a,
                                                    }),
                                                ],
                                            }),
                                            f.jsxs('div', {
                                                className: `${q['input-group']} ${q['input-group--tab']}`,
                                                children: [
                                                    f.jsx('label', {
                                                        htmlFor: 'paid',
                                                        className:
                                                            q['input-label'],
                                                        children: 'Paid',
                                                    }),
                                                    f.jsx('input', {
                                                        id: 'paid',
                                                        name: 'paid',
                                                        type: 'text',
                                                        className:
                                                            q['input-field'],
                                                        placeholder:
                                                            'Paid Amount',
                                                        onChange: a,
                                                    }),
                                                ],
                                            }),
                                            f.jsxs('div', {
                                                className: `${q['input-group']} ${q['input-group--tab']}`,
                                                children: [
                                                    f.jsx('label', {
                                                        htmlFor: 'due',
                                                        className:
                                                            q['input-label'],
                                                        children: 'Due',
                                                    }),
                                                    f.jsx('input', {
                                                        id: 'due',
                                                        name: 'due',
                                                        type: 'text',
                                                        value: e,
                                                        className: `${q['input-field']} ${q['input-field--due']}`,
                                                        placeholder:
                                                            'Due Amount',
                                                        readOnly: !0,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        f.jsx(me, {
                            className: 'action01 go',
                            onClick: c,
                            children: 'Add customer',
                        }),
                    ],
                }),
            ],
        }),
    });
}
function y0(t) {
    var e,
        n,
        i = '';
    if (typeof t == 'string' || typeof t == 'number') i += t;
    else if (typeof t == 'object')
        if (Array.isArray(t))
            for (e = 0; e < t.length; e++)
                t[e] && (n = y0(t[e])) && (i && (i += ' '), (i += n));
        else for (e in t) t[e] && (i && (i += ' '), (i += e));
    return i;
}
function _n() {
    for (var t, e, n = 0, i = ''; n < arguments.length; )
        (t = arguments[n++]) && (e = y0(t)) && (i && (i += ' '), (i += e));
    return i;
}
const Is = (t) => typeof t == 'number' && !isNaN(t),
    di = (t) => typeof t == 'string',
    qe = (t) => typeof t == 'function',
    Mo = (t) => (di(t) || qe(t) ? t : null),
    vl = (t) => C.isValidElement(t) || di(t) || qe(t) || Is(t);
function B2(t, e, n) {
    n === void 0 && (n = 300);
    const { scrollHeight: i, style: s } = t;
    requestAnimationFrame(() => {
        (s.minHeight = 'initial'),
            (s.height = i + 'px'),
            (s.transition = `all ${n}ms`),
            requestAnimationFrame(() => {
                (s.height = '0'),
                    (s.padding = '0'),
                    (s.margin = '0'),
                    setTimeout(e, n);
            });
    });
}
function Oa(t) {
    let {
        enter: e,
        exit: n,
        appendPosition: i = !1,
        collapse: s = !0,
        collapseDuration: r = 300,
    } = t;
    return function (o) {
        let {
            children: a,
            position: l,
            preventExitTransition: c,
            done: u,
            nodeRef: d,
            isIn: h,
        } = o;
        const p = i ? `${e}--${l}` : e,
            v = i ? `${n}--${l}` : n,
            y = C.useRef(0);
        return (
            C.useLayoutEffect(() => {
                const _ = d.current,
                    m = p.split(' '),
                    g = (x) => {
                        x.target === d.current &&
                            (_.dispatchEvent(new Event('d')),
                            _.removeEventListener('animationend', g),
                            _.removeEventListener('animationcancel', g),
                            y.current === 0 &&
                                x.type !== 'animationcancel' &&
                                _.classList.remove(...m));
                    };
                _.classList.add(...m),
                    _.addEventListener('animationend', g),
                    _.addEventListener('animationcancel', g);
            }, []),
            C.useEffect(() => {
                const _ = d.current,
                    m = () => {
                        _.removeEventListener('animationend', m),
                            s ? B2(_, u, r) : u();
                    };
                h ||
                    (c
                        ? m()
                        : ((y.current = 1),
                          (_.className += ` ${v}`),
                          _.addEventListener('animationend', m)));
            }, [h]),
            Q.createElement(Q.Fragment, null, a)
        );
    };
}
function Wf(t, e) {
    return t != null
        ? {
              content: t.content,
              containerId: t.props.containerId,
              id: t.props.toastId,
              theme: t.props.theme,
              type: t.props.type,
              data: t.props.data || {},
              isLoading: t.props.isLoading,
              icon: t.props.icon,
              status: e,
          }
        : {};
}
const dt = {
        list: new Map(),
        emitQueue: new Map(),
        on(t, e) {
            return (
                this.list.has(t) || this.list.set(t, []),
                this.list.get(t).push(e),
                this
            );
        },
        off(t, e) {
            if (e) {
                const n = this.list.get(t).filter((i) => i !== e);
                return this.list.set(t, n), this;
            }
            return this.list.delete(t), this;
        },
        cancelEmit(t) {
            const e = this.emitQueue.get(t);
            return (
                e && (e.forEach(clearTimeout), this.emitQueue.delete(t)), this
            );
        },
        emit(t) {
            this.list.has(t) &&
                this.list.get(t).forEach((e) => {
                    const n = setTimeout(() => {
                        e(...[].slice.call(arguments, 1));
                    }, 0);
                    this.emitQueue.has(t) || this.emitQueue.set(t, []),
                        this.emitQueue.get(t).push(n);
                });
        },
    },
    eo = (t) => {
        let { theme: e, type: n, ...i } = t;
        return Q.createElement('svg', {
            viewBox: '0 0 24 24',
            width: '100%',
            height: '100%',
            fill:
                e === 'colored'
                    ? 'currentColor'
                    : `var(--toastify-icon-color-${n})`,
            ...i,
        });
    },
    xl = {
        info: function (t) {
            return Q.createElement(
                eo,
                { ...t },
                Q.createElement('path', {
                    d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z',
                })
            );
        },
        warning: function (t) {
            return Q.createElement(
                eo,
                { ...t },
                Q.createElement('path', {
                    d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z',
                })
            );
        },
        success: function (t) {
            return Q.createElement(
                eo,
                { ...t },
                Q.createElement('path', {
                    d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z',
                })
            );
        },
        error: function (t) {
            return Q.createElement(
                eo,
                { ...t },
                Q.createElement('path', {
                    d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z',
                })
            );
        },
        spinner: function () {
            return Q.createElement('div', { className: 'Toastify__spinner' });
        },
    };
function V2(t) {
    const [, e] = C.useReducer((p) => p + 1, 0),
        [n, i] = C.useState([]),
        s = C.useRef(null),
        r = C.useRef(new Map()).current,
        o = (p) => n.indexOf(p) !== -1,
        a = C.useRef({
            toastKey: 1,
            displayedToast: 0,
            count: 0,
            queue: [],
            props: t,
            containerId: null,
            isToastActive: o,
            getToast: (p) => r.get(p),
        }).current;
    function l(p) {
        let { containerId: v } = p;
        const { limit: y } = a.props;
        !y ||
            (v && a.containerId !== v) ||
            ((a.count -= a.queue.length), (a.queue = []));
    }
    function c(p) {
        i((v) => (p == null ? [] : v.filter((y) => y !== p)));
    }
    function u() {
        const { toastContent: p, toastProps: v, staleId: y } = a.queue.shift();
        h(p, v, y);
    }
    function d(p, v) {
        let { delay: y, staleId: _, ...m } = v;
        if (
            !vl(p) ||
            (function (I) {
                return (
                    !s.current ||
                    (a.props.enableMultiContainer &&
                        I.containerId !== a.props.containerId) ||
                    (r.has(I.toastId) && I.updateId == null)
                );
            })(m)
        )
            return;
        const { toastId: g, updateId: x, data: b } = m,
            { props: w } = a,
            k = () => c(g),
            S = x == null;
        S && a.count++;
        const M = {
            ...w,
            style: w.toastStyle,
            key: a.toastKey++,
            ...Object.fromEntries(
                Object.entries(m).filter((I) => {
                    let [U, F] = I;
                    return F != null;
                })
            ),
            toastId: g,
            updateId: x,
            data: b,
            closeToast: k,
            isIn: !1,
            className: Mo(m.className || w.toastClassName),
            bodyClassName: Mo(m.bodyClassName || w.bodyClassName),
            progressClassName: Mo(m.progressClassName || w.progressClassName),
            autoClose:
                !m.isLoading &&
                ((T = m.autoClose),
                (j = w.autoClose),
                T === !1 || (Is(T) && T > 0) ? T : j),
            deleteToast() {
                const I = Wf(r.get(g), 'removed');
                r.delete(g), dt.emit(4, I);
                const U = a.queue.length;
                if (
                    ((a.count =
                        g == null ? a.count - a.displayedToast : a.count - 1),
                    a.count < 0 && (a.count = 0),
                    U > 0)
                ) {
                    const F = g == null ? a.props.limit : 1;
                    if (U === 1 || F === 1) a.displayedToast++, u();
                    else {
                        const A = F > U ? U : F;
                        a.displayedToast = A;
                        for (let D = 0; D < A; D++) u();
                    }
                } else e();
            },
        };
        var T, j;
        (M.iconOut = (function (I) {
            let { theme: U, type: F, isLoading: A, icon: D } = I,
                B = null;
            const E = { theme: U, type: F };
            return (
                D === !1 ||
                    (qe(D)
                        ? (B = D(E))
                        : C.isValidElement(D)
                        ? (B = C.cloneElement(D, E))
                        : di(D) || Is(D)
                        ? (B = D)
                        : A
                        ? (B = xl.spinner())
                        : ((L) => L in xl)(F) && (B = xl[F](E))),
                B
            );
        })(M)),
            qe(m.onOpen) && (M.onOpen = m.onOpen),
            qe(m.onClose) && (M.onClose = m.onClose),
            (M.closeButton = w.closeButton),
            m.closeButton === !1 || vl(m.closeButton)
                ? (M.closeButton = m.closeButton)
                : m.closeButton === !0 &&
                  (M.closeButton = !vl(w.closeButton) || w.closeButton);
        let R = p;
        C.isValidElement(p) && !di(p.type)
            ? (R = C.cloneElement(p, { closeToast: k, toastProps: M, data: b }))
            : qe(p) && (R = p({ closeToast: k, toastProps: M, data: b })),
            w.limit && w.limit > 0 && a.count > w.limit && S
                ? a.queue.push({ toastContent: R, toastProps: M, staleId: _ })
                : Is(y)
                ? setTimeout(() => {
                      h(R, M, _);
                  }, y)
                : h(R, M, _);
    }
    function h(p, v, y) {
        const { toastId: _ } = v;
        y && r.delete(y);
        const m = { content: p, props: v };
        r.set(_, m),
            i((g) => [...g, _].filter((x) => x !== y)),
            dt.emit(4, Wf(m, m.props.updateId == null ? 'added' : 'updated'));
    }
    return (
        C.useEffect(
            () => (
                (a.containerId = t.containerId),
                dt
                    .cancelEmit(3)
                    .on(0, d)
                    .on(1, (p) => s.current && c(p))
                    .on(5, l)
                    .emit(2, a),
                () => {
                    r.clear(), dt.emit(3, a);
                }
            ),
            []
        ),
        C.useEffect(() => {
            (a.props = t), (a.isToastActive = o), (a.displayedToast = n.length);
        }),
        {
            getToastToRender: function (p) {
                const v = new Map(),
                    y = Array.from(r.values());
                return (
                    t.newestOnTop && y.reverse(),
                    y.forEach((_) => {
                        const { position: m } = _.props;
                        v.has(m) || v.set(m, []), v.get(m).push(_);
                    }),
                    Array.from(v, (_) => p(_[0], _[1]))
                );
            },
            containerRef: s,
            isToastActive: o,
        }
    );
}
function Uf(t) {
    return t.targetTouches && t.targetTouches.length >= 1
        ? t.targetTouches[0].clientX
        : t.clientX;
}
function Qf(t) {
    return t.targetTouches && t.targetTouches.length >= 1
        ? t.targetTouches[0].clientY
        : t.clientY;
}
function $2(t) {
    const [e, n] = C.useState(!1),
        [i, s] = C.useState(!1),
        r = C.useRef(null),
        o = C.useRef({
            start: 0,
            x: 0,
            y: 0,
            delta: 0,
            removalDistance: 0,
            canCloseOnClick: !0,
            canDrag: !1,
            boundingRect: null,
            didMove: !1,
        }).current,
        a = C.useRef(t),
        {
            autoClose: l,
            pauseOnHover: c,
            closeToast: u,
            onClick: d,
            closeOnClick: h,
        } = t;
    function p(b) {
        if (t.draggable) {
            b.nativeEvent.type === 'touchstart' &&
                b.nativeEvent.preventDefault(),
                (o.didMove = !1),
                document.addEventListener('mousemove', m),
                document.addEventListener('mouseup', g),
                document.addEventListener('touchmove', m),
                document.addEventListener('touchend', g);
            const w = r.current;
            (o.canCloseOnClick = !0),
                (o.canDrag = !0),
                (o.boundingRect = w.getBoundingClientRect()),
                (w.style.transition = ''),
                (o.x = Uf(b.nativeEvent)),
                (o.y = Qf(b.nativeEvent)),
                t.draggableDirection === 'x'
                    ? ((o.start = o.x),
                      (o.removalDistance =
                          w.offsetWidth * (t.draggablePercent / 100)))
                    : ((o.start = o.y),
                      (o.removalDistance =
                          w.offsetHeight *
                          (t.draggablePercent === 80
                              ? 1.5 * t.draggablePercent
                              : t.draggablePercent / 100)));
        }
    }
    function v(b) {
        if (o.boundingRect) {
            const { top: w, bottom: k, left: S, right: M } = o.boundingRect;
            b.nativeEvent.type !== 'touchend' &&
            t.pauseOnHover &&
            o.x >= S &&
            o.x <= M &&
            o.y >= w &&
            o.y <= k
                ? _()
                : y();
        }
    }
    function y() {
        n(!0);
    }
    function _() {
        n(!1);
    }
    function m(b) {
        const w = r.current;
        o.canDrag &&
            w &&
            ((o.didMove = !0),
            e && _(),
            (o.x = Uf(b)),
            (o.y = Qf(b)),
            (o.delta =
                t.draggableDirection === 'x' ? o.x - o.start : o.y - o.start),
            o.start !== o.x && (o.canCloseOnClick = !1),
            (w.style.transform = `translate${t.draggableDirection}(${o.delta}px)`),
            (w.style.opacity =
                '' + (1 - Math.abs(o.delta / o.removalDistance))));
    }
    function g() {
        document.removeEventListener('mousemove', m),
            document.removeEventListener('mouseup', g),
            document.removeEventListener('touchmove', m),
            document.removeEventListener('touchend', g);
        const b = r.current;
        if (o.canDrag && o.didMove && b) {
            if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance))
                return s(!0), void t.closeToast();
            (b.style.transition = 'transform 0.2s, opacity 0.2s'),
                (b.style.transform = `translate${t.draggableDirection}(0)`),
                (b.style.opacity = '1');
        }
    }
    C.useEffect(() => {
        a.current = t;
    }),
        C.useEffect(
            () => (
                r.current && r.current.addEventListener('d', y, { once: !0 }),
                qe(t.onOpen) &&
                    t.onOpen(C.isValidElement(t.children) && t.children.props),
                () => {
                    const b = a.current;
                    qe(b.onClose) &&
                        b.onClose(
                            C.isValidElement(b.children) && b.children.props
                        );
                }
            ),
            []
        ),
        C.useEffect(
            () => (
                t.pauseOnFocusLoss &&
                    (document.hasFocus() || _(),
                    window.addEventListener('focus', y),
                    window.addEventListener('blur', _)),
                () => {
                    t.pauseOnFocusLoss &&
                        (window.removeEventListener('focus', y),
                        window.removeEventListener('blur', _));
                }
            ),
            [t.pauseOnFocusLoss]
        );
    const x = { onMouseDown: p, onTouchStart: p, onMouseUp: v, onTouchEnd: v };
    return (
        l && c && ((x.onMouseEnter = _), (x.onMouseLeave = y)),
        h &&
            (x.onClick = (b) => {
                d && d(b), o.canCloseOnClick && u();
            }),
        {
            playToast: y,
            pauseToast: _,
            isRunning: e,
            preventExitTransition: i,
            toastRef: r,
            eventHandlers: x,
        }
    );
}
function v0(t) {
    let { closeToast: e, theme: n, ariaLabel: i = 'close' } = t;
    return Q.createElement(
        'button',
        {
            className: `Toastify__close-button Toastify__close-button--${n}`,
            type: 'button',
            onClick: (s) => {
                s.stopPropagation(), e(s);
            },
            'aria-label': i,
        },
        Q.createElement(
            'svg',
            { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
            Q.createElement('path', {
                fillRule: 'evenodd',
                d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z',
            })
        )
    );
}
function H2(t) {
    let {
        delay: e,
        isRunning: n,
        closeToast: i,
        type: s = 'default',
        hide: r,
        className: o,
        style: a,
        controlledProgress: l,
        progress: c,
        rtl: u,
        isIn: d,
        theme: h,
    } = t;
    const p = r || (l && c === 0),
        v = {
            ...a,
            animationDuration: `${e}ms`,
            animationPlayState: n ? 'running' : 'paused',
            opacity: p ? 0 : 1,
        };
    l && (v.transform = `scaleX(${c})`);
    const y = _n(
            'Toastify__progress-bar',
            l
                ? 'Toastify__progress-bar--controlled'
                : 'Toastify__progress-bar--animated',
            `Toastify__progress-bar-theme--${h}`,
            `Toastify__progress-bar--${s}`,
            { 'Toastify__progress-bar--rtl': u }
        ),
        _ = qe(o) ? o({ rtl: u, type: s, defaultClassName: y }) : _n(y, o);
    return Q.createElement('div', {
        role: 'progressbar',
        'aria-hidden': p ? 'true' : 'false',
        'aria-label': 'notification timer',
        className: _,
        style: v,
        [l && c >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
            l && c < 1
                ? null
                : () => {
                      d && i();
                  },
    });
}
const W2 = (t) => {
        const {
                isRunning: e,
                preventExitTransition: n,
                toastRef: i,
                eventHandlers: s,
            } = $2(t),
            {
                closeButton: r,
                children: o,
                autoClose: a,
                onClick: l,
                type: c,
                hideProgressBar: u,
                closeToast: d,
                transition: h,
                position: p,
                className: v,
                style: y,
                bodyClassName: _,
                bodyStyle: m,
                progressClassName: g,
                progressStyle: x,
                updateId: b,
                role: w,
                progress: k,
                rtl: S,
                toastId: M,
                deleteToast: T,
                isIn: j,
                isLoading: R,
                iconOut: I,
                closeOnClick: U,
                theme: F,
            } = t,
            A = _n(
                'Toastify__toast',
                `Toastify__toast-theme--${F}`,
                `Toastify__toast--${c}`,
                { 'Toastify__toast--rtl': S },
                { 'Toastify__toast--close-on-click': U }
            ),
            D = qe(v)
                ? v({ rtl: S, position: p, type: c, defaultClassName: A })
                : _n(A, v),
            B = !!k || !a,
            E = { closeToast: d, type: c, theme: F };
        let L = null;
        return (
            r === !1 ||
                (L = qe(r)
                    ? r(E)
                    : C.isValidElement(r)
                    ? C.cloneElement(r, E)
                    : v0(E)),
            Q.createElement(
                h,
                {
                    isIn: j,
                    done: T,
                    position: p,
                    preventExitTransition: n,
                    nodeRef: i,
                },
                Q.createElement(
                    'div',
                    { id: M, onClick: l, className: D, ...s, style: y, ref: i },
                    Q.createElement(
                        'div',
                        {
                            ...(j && { role: w }),
                            className: qe(_)
                                ? _({ type: c })
                                : _n('Toastify__toast-body', _),
                            style: m,
                        },
                        I != null &&
                            Q.createElement(
                                'div',
                                {
                                    className: _n('Toastify__toast-icon', {
                                        'Toastify--animate-icon Toastify__zoom-enter':
                                            !R,
                                    }),
                                },
                                I
                            ),
                        Q.createElement('div', null, o)
                    ),
                    L,
                    Q.createElement(H2, {
                        ...(b && !B ? { key: `pb-${b}` } : {}),
                        rtl: S,
                        theme: F,
                        delay: a,
                        isRunning: e,
                        isIn: j,
                        closeToast: d,
                        hide: u,
                        type: c,
                        style: x,
                        className: g,
                        controlledProgress: B,
                        progress: k || 0,
                    })
                )
            )
        );
    },
    Na = function (t, e) {
        return (
            e === void 0 && (e = !1),
            {
                enter: `Toastify--animate Toastify__${t}-enter`,
                exit: `Toastify--animate Toastify__${t}-exit`,
                appendPosition: e,
            }
        );
    },
    U2 = Oa(Na('bounce', !0));
Oa(Na('slide', !0));
const Q2 = Oa(Na('zoom'));
Oa(Na('flip'));
const Lc = C.forwardRef((t, e) => {
    const { getToastToRender: n, containerRef: i, isToastActive: s } = V2(t),
        { className: r, style: o, rtl: a, containerId: l } = t;
    function c(u) {
        const d = _n(
            'Toastify__toast-container',
            `Toastify__toast-container--${u}`,
            { 'Toastify__toast-container--rtl': a }
        );
        return qe(r)
            ? r({ position: u, rtl: a, defaultClassName: d })
            : _n(d, Mo(r));
    }
    return (
        C.useEffect(() => {
            e && (e.current = i.current);
        }, []),
        Q.createElement(
            'div',
            { ref: i, className: 'Toastify', id: l },
            n((u, d) => {
                const h = d.length ? { ...o } : { ...o, pointerEvents: 'none' };
                return Q.createElement(
                    'div',
                    { className: c(u), style: h, key: `container-${u}` },
                    d.map((p, v) => {
                        let { content: y, props: _ } = p;
                        return Q.createElement(
                            W2,
                            {
                                ..._,
                                isIn: s(_.toastId),
                                style: {
                                    ..._.style,
                                    '--nth': v + 1,
                                    '--len': d.length,
                                },
                                key: `toast-${_.key}`,
                            },
                            y
                        );
                    })
                );
            })
        )
    );
});
(Lc.displayName = 'ToastContainer'),
    (Lc.defaultProps = {
        position: 'top-right',
        transition: U2,
        autoClose: 5e3,
        closeButton: v0,
        pauseOnHover: !0,
        pauseOnFocusLoss: !0,
        closeOnClick: !0,
        draggable: !0,
        draggablePercent: 80,
        draggableDirection: 'x',
        role: 'alert',
        theme: 'light',
    });
let _l,
    Xn = new Map(),
    ws = [],
    Y2 = 1;
function x0() {
    return '' + Y2++;
}
function X2(t) {
    return t && (di(t.toastId) || Is(t.toastId)) ? t.toastId : x0();
}
function Fs(t, e) {
    return (
        Xn.size > 0 ? dt.emit(0, t, e) : ws.push({ content: t, options: e }),
        e.toastId
    );
}
function oa(t, e) {
    return { ...e, type: (e && e.type) || t, toastId: X2(e) };
}
function to(t) {
    return (e, n) => Fs(e, oa(t, n));
}
function te(t, e) {
    return Fs(t, oa('default', e));
}
(te.loading = (t, e) =>
    Fs(
        t,
        oa('default', {
            isLoading: !0,
            autoClose: !1,
            closeOnClick: !1,
            closeButton: !1,
            draggable: !1,
            ...e,
        })
    )),
    (te.promise = function (t, e, n) {
        let i,
            { pending: s, error: r, success: o } = e;
        s &&
            (i = di(s)
                ? te.loading(s, n)
                : te.loading(s.render, { ...n, ...s }));
        const a = {
                isLoading: null,
                autoClose: null,
                closeOnClick: null,
                closeButton: null,
                draggable: null,
            },
            l = (u, d, h) => {
                if (d == null) return void te.dismiss(i);
                const p = { type: u, ...a, ...n, data: h },
                    v = di(d) ? { render: d } : d;
                return (
                    i
                        ? te.update(i, { ...p, ...v })
                        : te(v.render, { ...p, ...v }),
                    h
                );
            },
            c = qe(t) ? t() : t;
        return (
            c.then((u) => l('success', o, u)).catch((u) => l('error', r, u)), c
        );
    }),
    (te.success = to('success')),
    (te.info = to('info')),
    (te.error = to('error')),
    (te.warning = to('warning')),
    (te.warn = te.warning),
    (te.dark = (t, e) => Fs(t, oa('default', { theme: 'dark', ...e }))),
    (te.dismiss = (t) => {
        Xn.size > 0
            ? dt.emit(1, t)
            : (ws = ws.filter((e) => t != null && e.options.toastId !== t));
    }),
    (te.clearWaitingQueue = function (t) {
        return t === void 0 && (t = {}), dt.emit(5, t);
    }),
    (te.isActive = (t) => {
        let e = !1;
        return (
            Xn.forEach((n) => {
                n.isToastActive && n.isToastActive(t) && (e = !0);
            }),
            e
        );
    }),
    (te.update = function (t, e) {
        e === void 0 && (e = {}),
            setTimeout(() => {
                const n = (function (i, s) {
                    let { containerId: r } = s;
                    const o = Xn.get(r || _l);
                    return o && o.getToast(i);
                })(t, e);
                if (n) {
                    const { props: i, content: s } = n,
                        r = {
                            delay: 100,
                            ...i,
                            ...e,
                            toastId: e.toastId || t,
                            updateId: x0(),
                        };
                    r.toastId !== t && (r.staleId = t);
                    const o = r.render || s;
                    delete r.render, Fs(o, r);
                }
            }, 0);
    }),
    (te.done = (t) => {
        te.update(t, { progress: 1 });
    }),
    (te.onChange = (t) => (
        dt.on(4, t),
        () => {
            dt.off(4, t);
        }
    )),
    (te.POSITION = {
        TOP_LEFT: 'top-left',
        TOP_RIGHT: 'top-right',
        TOP_CENTER: 'top-center',
        BOTTOM_LEFT: 'bottom-left',
        BOTTOM_RIGHT: 'bottom-right',
        BOTTOM_CENTER: 'bottom-center',
    }),
    (te.TYPE = {
        INFO: 'info',
        SUCCESS: 'success',
        WARNING: 'warning',
        ERROR: 'error',
        DEFAULT: 'default',
    }),
    dt
        .on(2, (t) => {
            (_l = t.containerId || t),
                Xn.set(_l, t),
                ws.forEach((e) => {
                    dt.emit(0, e.content, e.options);
                }),
                (ws = []);
        })
        .on(3, (t) => {
            Xn.delete(t.containerId || t),
                Xn.size === 0 && dt.off(0).off(1).off(5);
        });
function K2(t) {
    return on({
        tag: 'svg',
        attr: { viewBox: '0 0 512 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z',
                },
            },
        ],
    })(t);
}
const q2 = (t, e, n) =>
        new Promise((i, s) => {
            try {
                const r = new XMLHttpRequest(),
                    o = `${Et}/api/v1/customers/${t.toString()}`;
                (r.onreadystatechange = () => {
                    if (r.readyState == 4) {
                        let l = JSON.parse(r.responseText);
                        console.log(l), i(l);
                    }
                }),
                    r.open('PATCH', o),
                    r.setRequestHeader('Content-Type', 'application/json'),
                    r.setRequestHeader('Authorization', `Bearer ${n}`),
                    console.log(JSON.stringify(e));
                let a = JSON.stringify(e);
                r.send(a);
            } catch (r) {
                console.log(r);
                return;
            }
        }),
    G2 = '_container_6x7e4_1',
    J2 = '_profile_6x7e4_20',
    Z2 = '_profile_picture_6x7e4_27',
    eC = '_profile_name_6x7e4_33',
    tC = '_tab_6x7e4_36',
    nC = '_paid_6x7e4_47',
    iC = '_purchase_6x7e4_50',
    sC = '_due_6x7e4_53',
    rC = '_detail_6x7e4_64',
    oC = '_detail_name_6x7e4_75',
    aC = '_detail_value_6x7e4_79',
    lC = '_actions_6x7e4_91',
    cC = '_transactions_6x7e4_98',
    G = {
        container: G2,
        'first-row': '_first-row_6x7e4_5',
        'first-row_left': '_first-row_left_6x7e4_12',
        profile: J2,
        profile_picture: Z2,
        profile_name: eC,
        tab: tC,
        paid: nC,
        purchase: iC,
        due: sC,
        'first-row_right': '_first-row_right_6x7e4_56',
        detail: rC,
        detail_name: oC,
        detail_value: aC,
        actions: lC,
        'second-row': '_second-row_6x7e4_98',
        transactions: cC,
    },
    uC = (t) => {
        navigator.clipboard.writeText(t.target.innerText.substring(0, 500)),
            te('Copied', {
                position: 'top-right',
                theme: 'colored',
                toastId: 'copyId',
            });
    };
function dC() {
    const { id: t } = k1(),
        e = Ji(),
        n = { sortBy: { issuedTime: -1 }, customerId: t },
        { jwtToken: i } = C.useContext(jt),
        [s, r] = C.useState(null),
        [o, a] = C.useState(!1),
        [l, c] = C.useState([]),
        [u, d] = C.useState(n),
        [h, p] = C.useState(null),
        [v, y] = C.useState(null),
        [_, m] = C.useState([]),
        [g, x] = C.useState(''),
        [b, w] = C.useState([]);
    C.useEffect(() => {
        (async () => {
            let A = await Du(t, i),
                D = await Ou(n, i);
            console.log(A), r(A), c(D);
        })();
    }, []),
        C.useEffect(() => {
            s && (y(s.address), m(s.phone), p(s.name));
        }, [s]);
    const k = (F) => {
            p(F.target.value);
        },
        S = (F) => {
            y(F.target.value);
        },
        M = (F) => {
            x(F.target.value);
        },
        T = (F) => {
            if (!o) return;
            let A = [..._],
                D = A.findIndex((B) => B == F.target.innerText.toLowerCase());
            D >= 0 && A.splice(D, 1), m(A);
        },
        j = (F) => {
            if (!o) return;
            let A = [...b],
                D = A.findIndex((B) => B == F.target.innerText.toLowerCase());
            console.log(F.target.innerText),
                console.log(D),
                D >= 0 && A.splice(D, 1),
                w(A),
                console.log(A);
        },
        R = (F) => {
            console.log('trigger');
            let A = [...b],
                D = g.toLowerCase().trim(),
                B = new Set(A);
            D.includes(',') ? D.split(',').forEach((L) => B.add(L)) : B.add(D),
                console.log(B),
                w(Array.from(B)),
                x(''),
                A.push(D);
        },
        I = () => {
            y(s.address), m(s.phone), p(s.name), w([]), a(!1);
        },
        U = async (F) => {
            let A = {};
            (A.name = h), (A.address = v), (A.phone = [...b, ..._]);
            let D = await q2(F, A, i);
            console.log(D),
                D.status == 'success'
                    ? (r(D.data), a(!1), console.log('update successful !! '))
                    : (console.log(D),
                      D.message && te(D.message),
                      D.errors &&
                          te(D.errors[0].msg, { toastId: 'updateCustomer' }));
        };
    return (
        s &&
        f.jsxs('div', {
            className: G.container,
            children: [
                f.jsx(me, {
                    className: 'stylish04 large-text',
                    onClick: () => e(-1),
                    children: f.jsx(K2, {}),
                }),
                f.jsxs('div', {
                    className: G['first-row'],
                    children: [
                        f.jsx('div', {
                            className: G['first-row_left'],
                            children: f.jsxs('div', {
                                className: G.profile,
                                children: [
                                    f.jsx('figure', {
                                        className: G.profile_picture,
                                        children: f.jsx('img', {
                                            src: '/img/profile-picture.jpg',
                                            alt: s.name,
                                        }),
                                    }),
                                    f.jsx('span', {
                                        className: G.profile_name,
                                        children: s.name,
                                    }),
                                    f.jsxs('div', {
                                        className: G.tab,
                                        children: [
                                            f.jsxs('div', {
                                                className: G.purchase,
                                                children: [
                                                    f.jsx('p', {
                                                        children: 'Purchase',
                                                    }),
                                                    s.tab.purchase,
                                                ],
                                            }),
                                            f.jsxs('div', {
                                                className: G.paid,
                                                children: [
                                                    f.jsx('p', {
                                                        children: 'Paid',
                                                    }),
                                                    s.tab.paid,
                                                ],
                                            }),
                                            f.jsxs('div', {
                                                className: G.due,
                                                children: [
                                                    f.jsx('p', {
                                                        children: 'Due',
                                                    }),
                                                    s.tab.due,
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        f.jsxs('div', {
                            className: G['first-row_right'],
                            children: [
                                f.jsxs('div', {
                                    className: G.details,
                                    children: [
                                        f.jsxs('div', {
                                            className: G.detail,
                                            children: [
                                                f.jsx('div', {
                                                    className: G.detail_name,
                                                    children: 'Customer ID',
                                                }),
                                                f.jsx('div', {
                                                    className: G.detail_value,
                                                    children: f.jsx(Ai, {
                                                        className: 'orange01',
                                                        onClick: uC,
                                                        title: 'Copy ID',
                                                        children: s._id,
                                                    }),
                                                }),
                                            ],
                                        }),
                                        f.jsxs('div', {
                                            className: G.detail,
                                            children: [
                                                f.jsx('div', {
                                                    className: G.detail_name,
                                                    children: 'Name',
                                                }),
                                                f.jsxs('div', {
                                                    className: G.detail_value,
                                                    children: [
                                                        s.name,
                                                        o &&
                                                            f.jsx('div', {
                                                                className:
                                                                    G[
                                                                        'input-wrapper'
                                                                    ],
                                                                children: f.jsx(
                                                                    'input',
                                                                    {
                                                                        type: 'text',
                                                                        value: h,
                                                                        onChange:
                                                                            k,
                                                                    }
                                                                ),
                                                            }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        f.jsxs('div', {
                                            className: G.detail,
                                            children: [
                                                f.jsx('div', {
                                                    className: G.detail_name,
                                                    children: 'Phone',
                                                }),
                                                f.jsxs('div', {
                                                    className: G.detail_value,
                                                    children: [
                                                        _.map((F) =>
                                                            f.jsx(
                                                                Ai,
                                                                {
                                                                    className: `${
                                                                        o
                                                                            ? ''
                                                                            : 'inherit-text'
                                                                    }`,
                                                                    onClick: T,
                                                                    children: F,
                                                                },
                                                                F
                                                            )
                                                        ),
                                                        o &&
                                                            b.map((F) =>
                                                                f.jsx(
                                                                    Ai,
                                                                    {
                                                                        className: `${
                                                                            o
                                                                                ? 'green01'
                                                                                : 'inherit-text'
                                                                        }`,
                                                                        onClick:
                                                                            j,
                                                                        children:
                                                                            F,
                                                                    },
                                                                    F
                                                                )
                                                            ),
                                                        o &&
                                                            f.jsxs('div', {
                                                                className:
                                                                    G[
                                                                        'input-wrapper'
                                                                    ],
                                                                children: [
                                                                    f.jsx(
                                                                        'input',
                                                                        {
                                                                            type: 'text',
                                                                            value: g,
                                                                            onChange:
                                                                                M,
                                                                            id: 'phoneToAdd',
                                                                        }
                                                                    ),
                                                                    f.jsx(me, {
                                                                        onClick:
                                                                            R,
                                                                        className:
                                                                            'sharp01',
                                                                        children:
                                                                            'ADD',
                                                                    }),
                                                                ],
                                                            }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        f.jsxs('div', {
                                            className: G.detail,
                                            children: [
                                                f.jsx('div', {
                                                    className: G.detail_name,
                                                    children: 'Address',
                                                }),
                                                f.jsxs('div', {
                                                    className: G.detail_value,
                                                    children: [
                                                        s.address,
                                                        o &&
                                                            f.jsx('div', {
                                                                className:
                                                                    G[
                                                                        'input-wrapper'
                                                                    ],
                                                                children: f.jsx(
                                                                    'input',
                                                                    {
                                                                        type: 'text',
                                                                        value: v,
                                                                        onChange:
                                                                            S,
                                                                    }
                                                                ),
                                                            }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                f.jsxs('div', {
                                    className: G.actions,
                                    children: [
                                        f.jsx(me, {
                                            className: 'action01 wait',
                                            onClick: () => a(!0),
                                            children: 'Edit',
                                        }),
                                        o &&
                                            f.jsx(me, {
                                                className: 'action01 stop',
                                                onClick: () => I(),
                                                children: 'Cancel',
                                            }),
                                        f.jsx(me, {
                                            className: 'action01 go',
                                            onClick: () => U(t),
                                            disabled: !o,
                                            children: 'Save',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                f.jsx('div', {
                    className: G['second-row'],
                    children: f.jsxs('div', {
                        className: G.transactions,
                        children: [
                            f.jsx(xg, {
                                setFilterObject: d,
                                customerId: s._id,
                            }),
                            f.jsx(Nu, { filterObject: u }),
                        ],
                    }),
                }),
            ],
        })
    );
}
const hC = function () {
        return f.jsx(Lc, {
            transition: Q2,
            position: 'top-right',
            autoClose: 1e3,
            limit: 1,
            hideProgressBar: !0,
            newestOnTop: !1,
            closeOnClick: !0,
            rtl: !1,
            pauseOnFocusLoss: !0,
            draggable: !1,
            pauseOnHover: !0,
            theme: 'colored',
        });
    },
    fC = '_action_1xa1r_84',
    Ce = {
        'signup-container': '_signup-container_1xa1r_1',
        'signup-container--sign-in': '_signup-container--sign-in_1xa1r_9',
        'signup-container--sign-up': '_signup-container--sign-up_1xa1r_12',
        'form-container': '_form-container_1xa1r_15',
        'advanced-group': '_advanced-group_1xa1r_26',
        'input-group': '_input-group_1xa1r_30',
        'input-group--check': '_input-group--check_1xa1r_38',
        'input-group--tab': '_input-group--tab_1xa1r_43',
        'input-field': '_input-field_1xa1r_46',
        'input-label': '_input-label_1xa1r_49',
        'input-label--check': '_input-label--check_1xa1r_52',
        'input-field--check': '_input-field--check_1xa1r_71',
        'input-field--due': '_input-field--due_1xa1r_77',
        action: fC,
        'error-message': '_error-message_1xa1r_91',
    };
async function pC(t) {
    return new Promise(async (e, n) => {
        try {
            let i = new XMLHttpRequest(),
                s = `${Et}/api/v1/admins/login`;
            (i.onreadystatechange = () => {
                if (i.readyState == 4) {
                    let o = JSON.parse(i.responseText);
                    e(o);
                }
            }),
                i.open('POST', s),
                i.setRequestHeader('Content-Type', 'application/json');
            let r = JSON.stringify(t);
            i.send(r);
        } catch (i) {
            console.log(i);
        }
    });
}
const mC = (t) =>
    new Promise((e, n) => {
        try {
            const i = new XMLHttpRequest(),
                s = `${Et}/api/v1/admins/signup`;
            (i.onreadystatechange = () => {
                if (i.readyState == 4) {
                    let o = JSON.parse(i.responseText);
                    console.log(o), e(o);
                }
            }),
                i.open('POST', s),
                i.setRequestHeader('Content-Type', 'application/json'),
                console.log(JSON.stringify(t));
            let r = JSON.stringify(t);
            i.send(r);
        } catch (i) {
            console.log(i);
            return;
        }
    });
function gC(t) {
    return f.jsxs('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 200 200',
        fill: 'currentColor',
        stroke: 'currentColor',
        strokeWidth: '15',
        'xmlns:v': 'https://vecta.io/nano',
        width: t.width,
        height: t.height,
        children: [
            f.jsx('circle', {
                r: '15',
                cx: '40',
                cy: '65',
                children: f.jsx('animate', {
                    attributeName: 'cy',
                    calcMode: 'spline',
                    dur: '2',
                    values: '65;135;65;',
                    keySplines: '.5 0 .5 1;.5 0 .5 1',
                    repeatCount: 'indefinite',
                    begin: '-.4',
                }),
            }),
            f.jsx('circle', {
                r: '15',
                cx: '100',
                cy: '65',
                children: f.jsx('animate', {
                    attributeName: 'cy',
                    calcMode: 'spline',
                    dur: '2',
                    values: '65;135;65;',
                    keySplines: '.5 0 .5 1;.5 0 .5 1',
                    repeatCount: 'indefinite',
                    begin: '-.2',
                }),
            }),
            f.jsx('circle', {
                r: '15',
                cx: '160',
                cy: '65',
                children: f.jsx('animate', {
                    attributeName: 'cy',
                    calcMode: 'spline',
                    dur: '2',
                    values: '65;135;65;',
                    keySplines: '.5 0 .5 1;.5 0 .5 1',
                    repeatCount: 'indefinite',
                    begin: '0',
                }),
            }),
        ],
    });
}
const yC = ({ isNewUser: t, toggle: e, setAdmin: n }) => {
        const [i, s] = C.useState(!1),
            [r, o] = C.useState(null),
            [a, l] = C.useState(''),
            [c, u] = C.useState(''),
            [d, h] = C.useState(''),
            [p, v] = C.useState(''),
            y = Ji(),
            { jwtToken: _, setJwtToken: m } = C.useContext(jt);
        C.useEffect(() => {
            _ && y('/');
        });
        async function g(x) {
            x.preventDefault(), o(null);
            let b = document.getElementById('loginForm'),
                w = {};
            if ((new FormData(b).forEach((S, M) => (w[M] = S)), t)) {
                s(!0);
                let S = await mC(w);
                console.log(S),
                    S && s(!1),
                    S.status == 'success'
                        ? (console.log('SUCCESSFULLY SIGNED UP ADMIN'),
                          s(!1),
                          m(S.jwtToken),
                          localStorage.setItem('jwtToken', S.jwtToken),
                          y('/'))
                        : S.status == 'failure'
                        ? S.message
                            ? o(S.message)
                            : S.errors && o(S.errors[0].msg)
                        : o('Something went wrong on our side.😞');
                return;
            } else {
                s(!0);
                let S = await pC(w);
                console.log(S),
                    S && s(!1),
                    S.status == 'success'
                        ? (m(S.jwtToken),
                          localStorage.setItem('jwtToken', S.jwtToken),
                          y('/'))
                        : S.status == 'failure'
                        ? S.message
                            ? o(S.message)
                            : S.errors && o(S.errors[0].msg)
                        : o('Something went wrong on our side.😞');
            }
        }
        return f.jsx('div', {
            className: `${Ce['signup-container']}  ${
                t
                    ? Ce['signup-container--sign-in']
                    : Ce['signup-container--sign-up']
            }`,
            children: f.jsxs('div', {
                className: `${Ce['form-container']}`,
                children: [
                    f.jsxs('form', {
                        id: 'loginForm',
                        className: 'form',
                        children: [
                            f.jsx('h3', { children: t ? 'SignUp' : 'Login' }),
                            t &&
                                f.jsxs('div', {
                                    children: [
                                        f.jsxs('div', {
                                            className: Ce['input-group'],
                                            children: [
                                                f.jsx('label', {
                                                    htmlFor: 'name',
                                                    className:
                                                        Ce['input-label'],
                                                    children: 'Name',
                                                }),
                                                f.jsx('input', {
                                                    className:
                                                        Ce['input-field'],
                                                    id: 'name',
                                                    name: 'name',
                                                    type: 'text',
                                                    value: a,
                                                    onChange: (x) =>
                                                        l(x.target.value),
                                                }),
                                            ],
                                        }),
                                        f.jsxs('div', {
                                            className: Ce['input-group'],
                                            children: [
                                                f.jsx('label', {
                                                    htmlFor: 'phone',
                                                    className:
                                                        Ce['input-label'],
                                                    children: 'Phone',
                                                }),
                                                f.jsx('input', {
                                                    className:
                                                        Ce['input-field'],
                                                    id: 'phone',
                                                    name: 'phone',
                                                    type: 'text',
                                                    value: c,
                                                    onChange: (x) =>
                                                        u(x.target.value),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            f.jsxs('div', {
                                className: Ce['input-group'],
                                children: [
                                    f.jsx('label', {
                                        htmlFor: 'username',
                                        className: Ce['input-label'],
                                        children: 'Username',
                                    }),
                                    f.jsx('input', {
                                        className: Ce['input-field'],
                                        id: 'username',
                                        name: 'username',
                                        type: 'text',
                                        value: d,
                                        onChange: (x) => h(x.target.value),
                                    }),
                                ],
                            }),
                            f.jsxs('div', {
                                className: Ce['input-group'],
                                children: [
                                    f.jsx('label', {
                                        htmlFor: 'password',
                                        className: Ce['input-label'],
                                        children: 'Password',
                                    }),
                                    f.jsx('input', {
                                        className: Ce['input-field'],
                                        id: 'password',
                                        name: 'password',
                                        type: 'password',
                                        value: p,
                                        onChange: (x) => v(x.target.value),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    f.jsxs('div', {
                        className: Ce.action,
                        children: [
                            f.jsx(me, {
                                className: 'stylish01',
                                onClick: g,
                                children: t ? 'Signup' : 'Login',
                            }),
                            i && f.jsx(gC, { height: '3.5rem', width: '5rem' }),
                        ],
                    }),
                    f.jsx('div', {
                        className: Ce['error-message'],
                        children: r,
                    }),
                ],
            }),
        });
    },
    vC = '_overlay_ez82g_1',
    xC = '_headings_ez82g_14',
    no = {
        overlay: vC,
        'overlay--left': '_overlay--left_ez82g_11',
        headings: xC,
    };
function _C({ isNewUser: t, toggle: e }) {
    return f.jsxs('div', {
        className: `${no.overlay} ${
            t ? no['overlay--left'] : no['overlay--right']
        }`,
        children: [
            f.jsxs('div', {
                className: no.headings,
                children: [
                    f.jsx('h2', { children: 'Welcome' }),
                    f.jsx('p', { children: 'to' }),
                    f.jsx('h1', { children: 'Shree Krishna Dairy' }),
                ],
            }),
            t
                ? f.jsx('p', {
                      children: 'If you are a registered user, log in instead.',
                  })
                : f.jsx('p', {
                      children: 'If this is your first time, sign up instead.',
                  }),
            f.jsx(me, {
                className: 'stylish02',
                onClick: () => e(!t),
                children: t ? 'Login' : 'Sign Up',
            }),
        ],
    });
}
const bC = '_container_5bck6_1',
    wC = { container: bC };
function SC(t) {
    const [e, n] = C.useState(!1);
    return f.jsxs('div', {
        className: wC.container,
        children: [
            f.jsx(yC, { toggle: n, isNewUser: e, setAdmin: t.setAdmin }),
            f.jsx(_C, { isNewUser: e, toggle: n }),
        ],
    });
}
const kC = '_container_meybd_1',
    CC = { container: kC },
    MC = '_product_i2wf9_1',
    PC = '_product_title_i2wf9_8',
    EC = '_product_detail_i2wf9_14',
    TC = '_key_i2wf9_19',
    jC = '_value_i2wf9_19',
    Te = {
        product: MC,
        product_title: PC,
        product_detail: EC,
        key: TC,
        value: jC,
    };
function OC(t) {
    const { product: e } = t;
    return f.jsxs('div', {
        className: Te.product,
        children: [
            f.jsx('div', { className: Te.product_title, children: e.name }),
            f.jsxs('div', {
                className: Te.product_detail,
                children: [
                    f.jsx('div', { className: Te.key, children: 'ID' }),
                    f.jsx('div', { className: Te.value, children: e._id }),
                ],
            }),
            f.jsxs('div', {
                className: Te.product_detail,
                children: [
                    f.jsx('div', { className: Te.key, children: 'Price' }),
                    f.jsx('div', { className: Te.value, children: e.price }),
                ],
            }),
            f.jsxs('div', {
                className: Te.product_detail,
                children: [
                    f.jsx('div', { className: Te.key, children: 'Stock' }),
                    f.jsx('div', { className: Te.value, children: e.stock }),
                ],
            }),
            f.jsxs('div', {
                className: Te.product_detail,
                children: [
                    f.jsx('div', { className: Te.key, children: 'Sales' }),
                    f.jsx('div', { className: Te.value, children: e.sales }),
                ],
            }),
            f.jsxs('div', {
                className: Te.product_detail,
                children: [
                    f.jsx('div', { className: Te.key, children: 'Type' }),
                    f.jsx('div', {
                        className: Te.value,
                        children: e.productType,
                    }),
                ],
            }),
        ],
    });
}
function NC() {
    const { jwtToken: t } = C.useContext(jt),
        [e, n] = C.useState([]);
    return (
        C.useEffect(() => {
            (async () => {
                const s = await yc(null, t);
                s.status == 'success' && n(s.data), console.log(s);
            })();
        }, []),
        f.jsx('div', {
            className: CC.container,
            children: e.map((i) => f.jsx(OC, { product: i }, i._id)),
        })
    );
}
function DC() {
    return f.jsx('div', { children: 'pa' });
}
function LC() {
    const [t, e] = C.useState(localStorage.getItem('jwtToken'));
    return (
        C.useEffect(() => {
            async function n() {
                let i = localStorage.getItem('jwtToken');
                i && (e(i), console.log(i));
            }
            n();
        }, []),
        f.jsx(jt.Provider, {
            value: { jwtToken: t, setJwtToken: e },
            children: f.jsxs(B1, {
                children: [
                    f.jsx(hC, {}),
                    f.jsxs(z1, {
                        children: [
                            f.jsx(tt, {
                                path: '/login',
                                element: f.jsx(SC, {}),
                            }),
                            f.jsxs(tt, {
                                path: '/',
                                element: f.jsx(_x, {}),
                                children: [
                                    f.jsx(tt, {
                                        path: '',
                                        element: f.jsx(R2, {}),
                                    }),
                                    f.jsxs(tt, {
                                        path: 'customers',
                                        children: [
                                            f.jsx(tt, {
                                                path: '',
                                                element: f.jsx(l_, {}),
                                            }),
                                            f.jsx(tt, {
                                                path: ':id',
                                                element: f.jsx(dC, {}),
                                            }),
                                            f.jsx(tt, {
                                                path: 'account',
                                                element: f.jsx(z2, {}),
                                            }),
                                        ],
                                    }),
                                    f.jsx(tt, {
                                        path: 'products',
                                        element: f.jsx(NC, {}),
                                        children: f.jsx(tt, {
                                            path: 'account',
                                            element: f.jsx(DC, {}),
                                        }),
                                    }),
                                    f.jsx(tt, {
                                        path: 'transactions',
                                        element: f.jsx(Xx, {}),
                                    }),
                                    f.jsx(tt, {
                                        path: 'statements',
                                        element: f.jsx(p_, {}),
                                    }),
                                    f.jsx(tt, {
                                        path: 'inventory',
                                        element: f.jsx(m_, {}),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
bl.createRoot(document.getElementById('root')).render(
    f.jsx(Q.StrictMode, { children: f.jsx(LC, {}) })
);
