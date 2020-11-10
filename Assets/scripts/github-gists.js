/* Github Gist.js */
!function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {i: r, l: !1, exports: {}};
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) {
            return t[e]
        }.bind(null, o));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 74)
}([function (t, e, n) {
    var r = n(28)("wks"), o = n(21), i = n(1).Symbol, u = "function" == typeof i;
    (t.exports = function (t) {
        return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
    }).store = r
}, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e, n) {
    var r = n(4), o = n(45), i = n(33), u = Object.defineProperty;
    e.f = n(5) ? Object.defineProperty : function (t, e, n) {
        if (r(t), e = i(e, !0), r(n), o) try {
            return u(t, e, n)
        } catch (t) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    var r = n(2);
    t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e, n) {
    t.exports = !n(6)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e, n) {
    var r = n(1), o = n(18), i = n(8), u = n(14), c = n(23), _ = function (t, e, n) {
        var f, a, l, s, p = t & _.F, y = t & _.G, h = t & _.S, v = t & _.P, d = t & _.B,
            b = y ? r : h ? r[e] || (r[e] = {}) : (r[e] || {}).prototype, E = y ? o : o[e] || (o[e] = {}),
            g = E.prototype || (E.prototype = {});
        for (f in y && (n = e), n) l = ((a = !p && b && void 0 !== b[f]) ? b : n)[f], s = d && a ? c(l, r) : v && "function" == typeof l ? c(Function.call, l) : l, b && u(b, f, l, t & _.U), E[f] != l && i(E, f, s), v && g[f] != l && (g[f] = l)
    };
    r.core = o, _.F = 1, _.G = 2, _.S = 4, _.P = 8, _.B = 16, _.W = 32, _.U = 64, _.R = 128, t.exports = _
}, function (t, e, n) {
    var r = n(3), o = n(22);
    t.exports = n(5) ? function (t, e, n) {
        return r.f(t, e, o(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e, n) {
    "use strict";
    var r = n(59), o = n(60), i = n(26), u = n(19);
    t.exports = n(41)(Array, "Array", function (t, e) {
        this._t = u(t), this._i = 0, this._k = e
    }, function () {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    n(43)("asyncIterator")
}, function (t, e, n) {
    "use strict";
    var r = n(1), o = n(13), i = n(5), u = n(7), c = n(14), _ = n(34).KEY, f = n(6), a = n(28), l = n(29), s = n(21),
        p = n(0), y = n(44), h = n(43), v = n(76), d = n(79), b = n(4), E = n(2), g = n(19), O = n(33), R = n(22),
        m = n(39), L = n(82), S = n(52), I = n(3), w = n(24), x = S.f, j = I.f, A = L.f, T = r.Symbol, G = r.JSON,
        N = G && G.stringify, D = p("_hidden"), $ = p("toPrimitive"), P = {}.propertyIsEnumerable,
        k = a("symbol-registry"), M = a("symbols"), B = a("op-symbols"), W = Object.prototype,
        F = "function" == typeof T, C = r.QObject, U = !C || !C.prototype || !C.prototype.findChild,
        Y = i && f(function () {
            return 7 != m(j({}, "a", {
                get: function () {
                    return j(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (t, e, n) {
            var r = x(W, e);
            r && delete W[e], j(t, e, n), r && t !== W && j(W, e, r)
        } : j, X = function (t) {
            var e = M[t] = m(T.prototype);
            return e._k = t, e
        }, J = F && "symbol" == typeof T.iterator ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            return t instanceof T
        }, q = function (t, e, n) {
            return t === W && q(B, e, n), b(t), e = O(e, !0), b(n), o(M, e) ? (n.enumerable ? (o(t, D) && t[D][e] && (t[D][e] = !1), n = m(n, {enumerable: R(0, !1)})) : (o(t, D) || j(t, D, R(1, {})), t[D][e] = !0), Y(t, e, n)) : j(t, e, n)
        }, H = function (t, e) {
            b(t);
            for (var n, r = v(e = g(e)), o = 0, i = r.length; i > o;) q(t, n = r[o++], e[n]);
            return t
        }, K = function (t) {
            var e = P.call(this, t = O(t, !0));
            return !(this === W && o(M, t) && !o(B, t)) && (!(e || !o(this, t) || !o(M, t) || o(this, D) && this[D][t]) || e)
        }, V = function (t, e) {
            if (t = g(t), e = O(e, !0), t !== W || !o(M, e) || o(B, e)) {
                var n = x(t, e);
                return !n || !o(M, e) || o(t, D) && t[D][e] || (n.enumerable = !0), n
            }
        }, z = function (t) {
            for (var e, n = A(g(t)), r = [], i = 0; n.length > i;) o(M, e = n[i++]) || e == D || e == _ || r.push(e);
            return r
        }, Q = function (t) {
            for (var e, n = t === W, r = A(n ? B : g(t)), i = [], u = 0; r.length > u;) !o(M, e = r[u++]) || n && !o(W, e) || i.push(M[e]);
            return i
        };
    F || (c((T = function () {
        if (this instanceof T) throw TypeError("Symbol is not a constructor!");
        var t = s(arguments.length > 0 ? arguments[0] : void 0), e = function (n) {
            this === W && e.call(B, n), o(this, D) && o(this[D], t) && (this[D][t] = !1), Y(this, t, R(1, n))
        };
        return i && U && Y(W, t, {configurable: !0, set: e}), X(t)
    }).prototype, "toString", function () {
        return this._k
    }), S.f = V, I.f = q, n(51).f = L.f = z, n(38).f = K, n(50).f = Q, i && !n(27) && c(W, "propertyIsEnumerable", K, !0), y.f = function (t) {
        return X(p(t))
    }), u(u.G + u.W + u.F * !F, {Symbol: T});
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) p(Z[tt++]);
    for (var et = w(p.store), nt = 0; et.length > nt;) h(et[nt++]);
    u(u.S + u.F * !F, "Symbol", {
        for: function (t) {
            return o(k, t += "") ? k[t] : k[t] = T(t)
        }, keyFor: function (t) {
            if (!J(t)) throw TypeError(t + " is not a symbol!");
            for (var e in k) if (k[e] === t) return e
        }, useSetter: function () {
            U = !0
        }, useSimple: function () {
            U = !1
        }
    }), u(u.S + u.F * !F, "Object", {
        create: function (t, e) {
            return void 0 === e ? m(t) : H(m(t), e)
        },
        defineProperty: q,
        defineProperties: H,
        getOwnPropertyDescriptor: V,
        getOwnPropertyNames: z,
        getOwnPropertySymbols: Q
    }), G && u(u.S + u.F * (!F || f(function () {
        var t = T();
        return "[null]" != N([t]) || "{}" != N({a: t}) || "{}" != N(Object(t))
    })), "JSON", {
        stringify: function (t) {
            for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
            if (n = e = r[1], (E(e) || void 0 !== t) && !J(t)) return d(e) || (e = function (t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !J(e)) return e
            }), r[1] = e, N.apply(G, r)
        }
    }), T.prototype[$] || n(8)(T.prototype, $, T.prototype.valueOf), l(T, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    var r = n(1), o = n(8), i = n(13), u = n(21)("src"), c = n(75), _ = ("" + c).split("toString");
    n(18).inspectSource = function (t) {
        return c.call(t)
    }, (t.exports = function (t, e, n, c) {
        var f = "function" == typeof n;
        f && (i(n, "name") || o(n, "name", e)), t[e] !== n && (f && (i(n, u) || o(n, u, t[e] ? "" + t[e] : _.join(String(e)))), t === r ? t[e] = n : c ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
    })(Function.prototype, "toString", function () {
        return "function" == typeof this && this[u] || c.call(this)
    })
}, function (t, e, n) {
    var r = n(3).f, o = Function.prototype, i = /^\s*function ([^ (]*)/;
    "name" in o || n(5) && r(o, "name", {
        configurable: !0, get: function () {
            try {
                return ("" + this).match(i)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function (t, e, n) {
    var r = n(40), o = n(24);
    n(53)("keys", function () {
        return function (t) {
            return o(r(t))
        }
    })
}, function (t, e, n) {
    for (var r = n(9), o = n(24), i = n(14), u = n(1), c = n(8), _ = n(26), f = n(0), a = f("iterator"), l = f("toStringTag"), s = _.Array, p = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, y = o(p), h = 0; h < y.length; h++) {
        var v, d = y[h], b = p[d], E = u[d], g = E && E.prototype;
        if (g && (g[a] || c(g, a, s), g[l] || c(g, l, d), _[d] = s, b)) for (v in r) g[v] || i(g, v, r[v], !0)
    }
}, function (t, e) {
    var n = t.exports = {version: "2.6.5"};
    "number" == typeof __e && (__e = n)
}, function (t, e, n) {
    var r = n(77), o = n(25);
    t.exports = function (t) {
        return r(o(t))
    }
}, function (t, e, n) {
    var r = n(2);
    n(53)("isExtensible", function (t) {
        return function (e) {
            return !!r(e) && (!t || t(e))
        }
    })
}, function (t, e) {
    var n = 0, r = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e, n) {
    var r = n(47);
    t.exports = function (t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function (n, r, o) {
                    return t.call(e, n, r, o)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e, n) {
    var r = n(48), o = n(37);
    t.exports = Object.keys || function (t) {
        return r(t, o)
    }
}, function (t, e) {
    t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e) {
    t.exports = !1
}, function (t, e, n) {
    var r = n(18), o = n(1), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: r.version,
        mode: n(27) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (t, e, n) {
    var r = n(3).f, o = n(13), i = n(0)("toStringTag");
    t.exports = function (t, e, n) {
        t && !o(t = n ? t : t.prototype, i) && r(t, i, {configurable: !0, value: e})
    }
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e, n) {
    var r = n(35), o = Math.min;
    t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}, function (t, e, n) {
    "use strict";
    (function (t) {
        n(11), n(12), n(20), n(15), n(9), n(16), n(96), n(17);

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function o(t, e) {
            var n = [];
            return t.split(",").forEach(function (t) {
                var r = t.split("-"), o = parseInt(r[0], 10), i = parseInt(r[1], 10);
                if (2 === r.length) {
                    "-" === t[t.length - 1] && null != e && (i = e);
                    for (var u = o; u <= i; u++) n.push(u)
                } else 1 === r.length && n.push(parseInt(r[0], 10))
            }), n
        }

        function i() {
            try {
                if (t) return t
            } catch (t) {
                try {
                    if (window) return window
                } catch (t) {
                    return this
                }
            }
        }

        e.a = p("getLineNumbers");
        var u, c = null;

        function _() {
            if (null === c) {
                var t = i();
                t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ || (t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0), c = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++
            }
            return c
        }

        function f() {
            var t = i();
            return t.__$$GLOBAL_REWIRE_REGISTRY__ || (t.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)), t.__$$GLOBAL_REWIRE_REGISTRY__
        }

        function a() {
            var t = _(), e = f(), n = e[t];
            return n || (e[t] = Object.create(null), n = e[t]), n
        }

        (u = i()).__rewire_reset_all__ || (u.__rewire_reset_all__ = function () {
            u.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)
        });
        var l = "__INTENTIONAL_UNDEFINED__", s = {};

        function p(t) {
            var e = a();
            if (void 0 === e[t]) return function (t) {
                switch (t) {
                    case"getLineNumbers":
                        return o
                }
                return
            }(t);
            var n = e[t];
            return n === l ? void 0 : n
        }

        function y(t, e) {
            var n = a();
            return "object" === r(t) ? (Object.keys(t).forEach(function (e) {
                n[e] = t[e]
            }), function () {
                Object.keys(t).forEach(function (e) {
                    h(t)
                })
            }) : (n[t] = void 0 === e ? l : e, function () {
                h(t)
            })
        }

        function h(t) {
            var e = a();
            delete e[t], 0 == Object.keys(e).length && delete f()[_]
        }

        function v(t) {
            var e = a(), n = Object.keys(t), r = {};

            function o() {
                n.forEach(function (t) {
                    e[t] = r[t]
                })
            }

            return function (i) {
                n.forEach(function (n) {
                    r[n] = e[n], e[n] = t[n]
                });
                var u = i();
                return u && "function" == typeof u.then ? u.then(o).catch(o) : o(), u
            }
        }

        !function () {
            function t(t, e) {
                Object.defineProperty(s, t, {value: e, enumerable: !1, configurable: !0})
            }

            t("__get__", p), t("__GetDependency__", p), t("__Rewire__", y), t("__set__", y), t("__reset__", h), t("__ResetDependency__", h), t("__with__", v)
        }();
        var d = r(o);

        function b(t, e) {
            Object.defineProperty(o, t, {value: e, enumerable: !1, configurable: !0})
        }

        "object" !== d && "function" !== d || !Object.isExtensible(o) || (b("__get__", p), b("__GetDependency__", p), b("__Rewire__", y), b("__set__", y), b("__reset__", h), b("__ResetDependency__", h), b("__with__", v), b("__RewireAPI__", s))
    }).call(this, n(10))
}, function (t, e, n) {
    var r = n(2);
    t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
        if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
        if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e, n) {
    var r = n(21)("meta"), o = n(2), i = n(13), u = n(3).f, c = 0, _ = Object.isExtensible || function () {
        return !0
    }, f = !n(6)(function () {
        return _(Object.preventExtensions({}))
    }), a = function (t) {
        u(t, r, {value: {i: "O" + ++c, w: {}}})
    }, l = t.exports = {
        KEY: r, NEED: !1, fastKey: function (t, e) {
            if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!i(t, r)) {
                if (!_(t)) return "F";
                if (!e) return "E";
                a(t)
            }
            return t[r].i
        }, getWeak: function (t, e) {
            if (!i(t, r)) {
                if (!_(t)) return !0;
                if (!e) return !1;
                a(t)
            }
            return t[r].w
        }, onFreeze: function (t) {
            return f && l.NEED && _(t) && !i(t, r) && a(t), t
        }
    }
}, function (t, e) {
    var n = Math.ceil, r = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function (t, e, n) {
    var r = n(28)("keys"), o = n(21);
    t.exports = function (t) {
        return r[t] || (r[t] = o(t))
    }
}, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e) {
    e.f = {}.propertyIsEnumerable
}, function (t, e, n) {
    var r = n(4), o = n(80), i = n(37), u = n(36)("IE_PROTO"), c = function () {
    }, _ = function () {
        var t, e = n(46)("iframe"), r = i.length;
        for (e.style.display = "none", n(81).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _ = t.F; r--;) delete _.prototype[i[r]];
        return _()
    };
    t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (c.prototype = r(t), n = new c, c.prototype = null, n[u] = t) : n = _(), void 0 === e ? n : o(n, e)
    }
}, function (t, e, n) {
    var r = n(25);
    t.exports = function (t) {
        return Object(r(t))
    }
}, function (t, e, n) {
    "use strict";
    var r = n(27), o = n(7), i = n(14), u = n(8), c = n(26), _ = n(85), f = n(29), a = n(86), l = n(0)("iterator"),
        s = !([].keys && "next" in [].keys()), p = function () {
            return this
        };
    t.exports = function (t, e, n, y, h, v, d) {
        _(n, e, y);
        var b, E, g, O = function (t) {
                if (!s && t in S) return S[t];
                switch (t) {
                    case"keys":
                    case"values":
                        return function () {
                            return new n(this, t)
                        }
                }
                return function () {
                    return new n(this, t)
                }
            }, R = e + " Iterator", m = "values" == h, L = !1, S = t.prototype, I = S[l] || S["@@iterator"] || h && S[h],
            w = I || O(h), x = h ? m ? O("entries") : w : void 0, j = "Array" == e && S.entries || I;
        if (j && (g = a(j.call(new t))) !== Object.prototype && g.next && (f(g, R, !0), r || "function" == typeof g[l] || u(g, l, p)), m && I && "values" !== I.name && (L = !0, w = function () {
            return I.call(this)
        }), r && !d || !s && !L && S[l] || u(S, l, w), c[e] = w, c[R] = p, h) if (b = {
            values: m ? w : O("values"),
            keys: v ? w : O("keys"),
            entries: x
        }, d) for (E in b) E in S || i(S, E, b[E]); else o(o.P + o.F * (s || L), e, b);
        return b
    }
}, function (t, e, n) {
    "use strict";
    var r, o, i = n(100), u = RegExp.prototype.exec, c = String.prototype.replace, _ = u,
        f = (r = /a/, o = /b*/g, u.call(r, "a"), u.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
        a = void 0 !== /()??/.exec("")[1];
    (f || a) && (_ = function (t) {
        var e, n, r, o, _ = this;
        return a && (n = new RegExp("^" + _.source + "$(?!\\s)", i.call(_))), f && (e = _.lastIndex), r = u.call(_, t), f && r && (_.lastIndex = _.global ? r.index + r[0].length : e), a && r && r.length > 1 && c.call(r[0], n, function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
        }), r
    }), t.exports = _
}, function (t, e, n) {
    var r = n(1), o = n(18), i = n(27), u = n(44), c = n(3).f;
    t.exports = function (t) {
        var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || c(e, t, {value: u.f(t)})
    }
}, function (t, e, n) {
    e.f = n(0)
}, function (t, e, n) {
    t.exports = !n(5) && !n(6)(function () {
        return 7 != Object.defineProperty(n(46)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, n) {
    var r = n(2), o = n(1).document, i = r(o) && r(o.createElement);
    t.exports = function (t) {
        return i ? o.createElement(t) : {}
    }
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e, n) {
    var r = n(13), o = n(19), i = n(49)(!1), u = n(36)("IE_PROTO");
    t.exports = function (t, e) {
        var n, c = o(t), _ = 0, f = [];
        for (n in c) n != u && r(c, n) && f.push(n);
        for (; e.length > _;) r(c, n = e[_++]) && (~i(f, n) || f.push(n));
        return f
    }
}, function (t, e, n) {
    var r = n(19), o = n(31), i = n(78);
    t.exports = function (t) {
        return function (e, n, u) {
            var c, _ = r(e), f = o(_.length), a = i(u, f);
            if (t && n != n) {
                for (; f > a;) if ((c = _[a++]) != c) return !0
            } else for (; f > a; a++) if ((t || a in _) && _[a] === n) return t || a || 0;
            return !t && -1
        }
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e, n) {
    var r = n(48), o = n(37).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
        return r(t, o)
    }
}, function (t, e, n) {
    var r = n(38), o = n(22), i = n(19), u = n(33), c = n(13), _ = n(45), f = Object.getOwnPropertyDescriptor;
    e.f = n(5) ? f : function (t, e) {
        if (t = i(t), e = u(e, !0), _) try {
            return f(t, e)
        } catch (t) {
        }
        if (c(t, e)) return o(!r.f.call(t, e), t[e])
    }
}, function (t, e, n) {
    var r = n(7), o = n(18), i = n(6);
    t.exports = function (t, e) {
        var n = (o.Object || {})[t] || Object[t], u = {};
        u[t] = e(n), r(r.S + r.F * i(function () {
            n(1)
        }), "Object", u)
    }
}, function (t, e, n) {
    var r = n(4);
    t.exports = function (t, e, n, o) {
        try {
            return o ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var i = t.return;
            throw void 0 !== i && r(i.call(t)), e
        }
    }
}, function (t, e, n) {
    var r = n(26), o = n(0)("iterator"), i = Array.prototype;
    t.exports = function (t) {
        return void 0 !== t && (r.Array === t || i[o] === t)
    }
}, function (t, e, n) {
    var r = n(57), o = n(0)("iterator"), i = n(26);
    t.exports = n(18).getIteratorMethod = function (t) {
        if (null != t) return t[o] || t["@@iterator"] || i[r(t)]
    }
}, function (t, e, n) {
    var r = n(30), o = n(0)("toStringTag"), i = "Arguments" == r(function () {
        return arguments
    }());
    t.exports = function (t) {
        var e, n, u;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u
    }
}, function (t, e, n) {
    var r = n(0)("iterator"), o = !1;
    try {
        var i = [7][r]();
        i.return = function () {
            o = !0
        }, Array.from(i, function () {
            throw 2
        })
    } catch (t) {
    }
    t.exports = function (t, e) {
        if (!e && !o) return !1;
        var n = !1;
        try {
            var i = [7], u = i[r]();
            u.next = function () {
                return {done: n = !0}
            }, i[r] = function () {
                return u
            }, t(i)
        } catch (t) {
        }
        return n
    }
}, function (t, e, n) {
    var r = n(0)("unscopables"), o = Array.prototype;
    null == o[r] && n(8)(o, r, {}), t.exports = function (t) {
        o[r][t] = !0
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {value: e, done: !!t}
    }
}, function (t, e, n) {
    var r = n(35), o = n(25);
    t.exports = function (t) {
        return function (e, n) {
            var i, u, c = String(o(e)), _ = r(n), f = c.length;
            return _ < 0 || _ >= f ? t ? "" : void 0 : (i = c.charCodeAt(_)) < 55296 || i > 56319 || _ + 1 === f || (u = c.charCodeAt(_ + 1)) < 56320 || u > 57343 ? t ? c.charAt(_) : i : t ? c.slice(_, _ + 2) : u - 56320 + (i - 55296 << 10) + 65536
        }
    }
}, function (t, e, n) {
    var r = n(14);
    t.exports = function (t, e, n) {
        for (var o in e) r(t, o, e[o], n);
        return t
    }
}, function (t, e) {
    t.exports = function (t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function (t, e, n) {
    var r = n(23), o = n(54), i = n(55), u = n(4), c = n(31), _ = n(56), f = {}, a = {};
    (e = t.exports = function (t, e, n, l, s) {
        var p, y, h, v, d = s ? function () {
            return t
        } : _(t), b = r(n, l, e ? 2 : 1), E = 0;
        if ("function" != typeof d) throw TypeError(t + " is not iterable!");
        if (i(d)) {
            for (p = c(t.length); p > E; E++) if ((v = e ? b(u(y = t[E])[0], y[1]) : b(t[E])) === f || v === a) return v
        } else for (h = d.call(t); !(y = h.next()).done;) if ((v = o(h, b, y.value, e)) === f || v === a) return v
    }).BREAK = f, e.RETURN = a
}, function (t, e, n) {
    var r = n(2);
    t.exports = function (t, e) {
        if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}, function (t, e, n) {
    "use strict";
    var r = n(7), o = n(49)(!0);
    r(r.P, "Array", {
        includes: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(59)("includes")
}, function (t, e, n) {
    "use strict";
    var r = n(7), o = n(94);
    r(r.P + r.F * n(95)("includes"), "String", {
        includes: function (t) {
            return !!~o(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var r = n(2), o = n(30), i = n(0)("match");
    t.exports = function (t) {
        var e;
        return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
    }
}, function (t, e, n) {
    "use strict";
    (function (t) {
        n(11), n(12), n(20), n(15), n(9), n(16), n(17);

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function o(t, e) {
            t.querySelectorAll("table tbody").forEach(function (t) {
                var n = document.createElement("tr"), r = document.createElement("td");
                r.style.padding = "10px !important", r.style.borderBottom = "10px solid white", r.style.backgroundColor = "#f9f9f9", r.style.fontWeight = "bold", r.innerHTML = e;
                var o = document.createElement("td");
                o.style.backgroundColor = "#f9f9f9", o.style.borderBottom = "10px solid white", n.appendChild(o), n.appendChild(r), t.prepend(n)
            })
        }

        function i() {
            try {
                if (t) return t
            } catch (t) {
                try {
                    if (window) return window
                } catch (t) {
                    return this
                }
            }
        }

        e.a = p("caption");
        var u, c = null;

        function _() {
            if (null === c) {
                var t = i();
                t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ || (t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0), c = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++
            }
            return c
        }

        function f() {
            var t = i();
            return t.__$$GLOBAL_REWIRE_REGISTRY__ || (t.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)), t.__$$GLOBAL_REWIRE_REGISTRY__
        }

        function a() {
            var t = _(), e = f(), n = e[t];
            return n || (e[t] = Object.create(null), n = e[t]), n
        }

        (u = i()).__rewire_reset_all__ || (u.__rewire_reset_all__ = function () {
            u.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)
        });
        var l = "__INTENTIONAL_UNDEFINED__", s = {};

        function p(t) {
            var e = a();
            if (void 0 === e[t]) return function (t) {
                switch (t) {
                    case"caption":
                        return o
                }
                return
            }(t);
            var n = e[t];
            return n === l ? void 0 : n
        }

        function y(t, e) {
            var n = a();
            return "object" === r(t) ? (Object.keys(t).forEach(function (e) {
                n[e] = t[e]
            }), function () {
                Object.keys(t).forEach(function (e) {
                    h(t)
                })
            }) : (n[t] = void 0 === e ? l : e, function () {
                h(t)
            })
        }

        function h(t) {
            var e = a();
            delete e[t], 0 == Object.keys(e).length && delete f()[_]
        }

        function v(t) {
            var e = a(), n = Object.keys(t), r = {};

            function o() {
                n.forEach(function (t) {
                    e[t] = r[t]
                })
            }

            return function (i) {
                n.forEach(function (n) {
                    r[n] = e[n], e[n] = t[n]
                });
                var u = i();
                return u && "function" == typeof u.then ? u.then(o).catch(o) : o(), u
            }
        }

        !function () {
            function t(t, e) {
                Object.defineProperty(s, t, {value: e, enumerable: !1, configurable: !0})
            }

            t("__get__", p), t("__GetDependency__", p), t("__Rewire__", y), t("__set__", y), t("__reset__", h), t("__ResetDependency__", h), t("__with__", v)
        }();
        var d = r(o);

        function b(t, e) {
            Object.defineProperty(o, t, {value: e, enumerable: !1, configurable: !0})
        }

        "object" !== d && "function" !== d || !Object.isExtensible(o) || (b("__get__", p), b("__GetDependency__", p), b("__Rewire__", y), b("__set__", y), b("__reset__", h), b("__ResetDependency__", h), b("__with__", v), b("__RewireAPI__", s))
    }).call(this, n(10))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        n(11), n(12), n(20), n(15), n(9), n(16), n(17);

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function o(t) {
            t.querySelectorAll(".gist-meta").forEach(function (t) {
                null != t.parentNode && t.parentNode.removeChild(t)
            }), t.querySelectorAll(".gist-data").forEach(function (t) {
                null != t && (t.style.borderBottom = "0px")
            }), t.querySelectorAll(".gist-file").forEach(function (t) {
                null != t && (t.style.borderBottom = "1px solid #dddddd")
            })
        }

        function i() {
            try {
                if (t) return t
            } catch (t) {
                try {
                    if (window) return window
                } catch (t) {
                    return this
                }
            }
        }

        e.a = p("hideFooter");
        var u, c = null;

        function _() {
            if (null === c) {
                var t = i();
                t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ || (t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0), c = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++
            }
            return c
        }

        function f() {
            var t = i();
            return t.__$$GLOBAL_REWIRE_REGISTRY__ || (t.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)), t.__$$GLOBAL_REWIRE_REGISTRY__
        }

        function a() {
            var t = _(), e = f(), n = e[t];
            return n || (e[t] = Object.create(null), n = e[t]), n
        }

        (u = i()).__rewire_reset_all__ || (u.__rewire_reset_all__ = function () {
            u.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)
        });
        var l = "__INTENTIONAL_UNDEFINED__", s = {};

        function p(t) {
            var e = a();
            if (void 0 === e[t]) return function (t) {
                switch (t) {
                    case"hideFooter":
                        return o
                }
                return
            }(t);
            var n = e[t];
            return n === l ? void 0 : n
        }

        function y(t, e) {
            var n = a();
            return "object" === r(t) ? (Object.keys(t).forEach(function (e) {
                n[e] = t[e]
            }), function () {
                Object.keys(t).forEach(function (e) {
                    h(t)
                })
            }) : (n[t] = void 0 === e ? l : e, function () {
                h(t)
            })
        }

        function h(t) {
            var e = a();
            delete e[t], 0 == Object.keys(e).length && delete f()[_]
        }

        function v(t) {
            var e = a(), n = Object.keys(t), r = {};

            function o() {
                n.forEach(function (t) {
                    e[t] = r[t]
                })
            }

            return function (i) {
                n.forEach(function (n) {
                    r[n] = e[n], e[n] = t[n]
                });
                var u = i();
                return u && "function" == typeof u.then ? u.then(o).catch(o) : o(), u
            }
        }

        !function () {
            function t(t, e) {
                Object.defineProperty(s, t, {value: e, enumerable: !1, configurable: !0})
            }

            t("__get__", p), t("__GetDependency__", p), t("__Rewire__", y), t("__set__", y), t("__reset__", h), t("__ResetDependency__", h), t("__with__", v)
        }();
        var d = r(o);

        function b(t, e) {
            Object.defineProperty(o, t, {value: e, enumerable: !1, configurable: !0})
        }

        "object" !== d && "function" !== d || !Object.isExtensible(o) || (b("__get__", p), b("__GetDependency__", p), b("__Rewire__", y), b("__set__", y), b("__reset__", h), b("__ResetDependency__", h), b("__with__", v), b("__RewireAPI__", s))
    }).call(this, n(10))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        n(11), n(12), n(20), n(15), n(9), n(16), n(17);

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function o(t) {
            t.querySelectorAll(".js-line-number").forEach(function (t) {
                null != t.parentNode && t.parentNode.removeChild(t)
            })
        }

        function i() {
            try {
                if (t) return t
            } catch (t) {
                try {
                    if (window) return window
                } catch (t) {
                    return this
                }
            }
        }

        e.a = p("hideLineNumbers");
        var u, c = null;

        function _() {
            if (null === c) {
                var t = i();
                t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ || (t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0), c = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++
            }
            return c
        }

        function f() {
            var t = i();
            return t.__$$GLOBAL_REWIRE_REGISTRY__ || (t.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)), t.__$$GLOBAL_REWIRE_REGISTRY__
        }

        function a() {
            var t = _(), e = f(), n = e[t];
            return n || (e[t] = Object.create(null), n = e[t]), n
        }

        (u = i()).__rewire_reset_all__ || (u.__rewire_reset_all__ = function () {
            u.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)
        });
        var l = "__INTENTIONAL_UNDEFINED__", s = {};

        function p(t) {
            var e = a();
            if (void 0 === e[t]) return function (t) {
                switch (t) {
                    case"hideLineNumbers":
                        return o
                }
                return
            }(t);
            var n = e[t];
            return n === l ? void 0 : n
        }

        function y(t, e) {
            var n = a();
            return "object" === r(t) ? (Object.keys(t).forEach(function (e) {
                n[e] = t[e]
            }), function () {
                Object.keys(t).forEach(function (e) {
                    h(t)
                })
            }) : (n[t] = void 0 === e ? l : e, function () {
                h(t)
            })
        }

        function h(t) {
            var e = a();
            delete e[t], 0 == Object.keys(e).length && delete f()[_]
        }

        function v(t) {
            var e = a(), n = Object.keys(t), r = {};

            function o() {
                n.forEach(function (t) {
                    e[t] = r[t]
                })
            }

            return function (i) {
                n.forEach(function (n) {
                    r[n] = e[n], e[n] = t[n]
                });
                var u = i();
                return u && "function" == typeof u.then ? u.then(o).catch(o) : o(), u
            }
        }

        !function () {
            function t(t, e) {
                Object.defineProperty(s, t, {value: e, enumerable: !1, configurable: !0})
            }

            t("__get__", p), t("__GetDependency__", p), t("__Rewire__", y), t("__set__", y), t("__reset__", h), t("__ResetDependency__", h), t("__with__", v)
        }();
        var d = r(o);

        function b(t, e) {
            Object.defineProperty(o, t, {value: e, enumerable: !1, configurable: !0})
        }

        "object" !== d && "function" !== d || !Object.isExtensible(o) || (b("__get__", p), b("__GetDependency__", p), b("__Rewire__", y), b("__set__", y), b("__reset__", h), b("__ResetDependency__", h), b("__with__", v), b("__RewireAPI__", s))
    }).call(this, n(10))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        n(11), n(12), n(20), n(15), n(9), n(16), n(66), n(67), n(17);
        var r = n(32);

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function i(t, e) {
            var n = t.querySelectorAll(".js-file-line"), r = y("getLineNumbers")(e, n.length);
            t.querySelectorAll("td.line-data").forEach(function (t) {
                t.style.width = "100%"
            }), n.forEach(function (t, e) {
                r.includes(e + 1) && (t.style.backgroundColor = "rgb(255, 255, 204)")
            })
        }

        function u() {
            try {
                if (t) return t
            } catch (t) {
                try {
                    if (window) return window
                } catch (t) {
                    return this
                }
            }
        }

        e.a = y("highlightLine");
        var c, _ = null;

        function f() {
            if (null === _) {
                var t = u();
                t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ || (t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0), _ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++
            }
            return _
        }

        function a() {
            var t = u();
            return t.__$$GLOBAL_REWIRE_REGISTRY__ || (t.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)), t.__$$GLOBAL_REWIRE_REGISTRY__
        }

        function l() {
            var t = f(), e = a(), n = e[t];
            return n || (e[t] = Object.create(null), n = e[t]), n
        }

        (c = u()).__rewire_reset_all__ || (c.__rewire_reset_all__ = function () {
            c.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)
        });
        var s = "__INTENTIONAL_UNDEFINED__", p = {};

        function y(t) {
            var e = l();
            if (void 0 === e[t]) return function (t) {
                switch (t) {
                    case"getLineNumbers":
                        return r.a;
                    case"highlightLine":
                        return i
                }
                return
            }(t);
            var n = e[t];
            return n === s ? void 0 : n
        }

        function h(t, e) {
            var n = l();
            return "object" === o(t) ? (Object.keys(t).forEach(function (e) {
                n[e] = t[e]
            }), function () {
                Object.keys(t).forEach(function (e) {
                    v(t)
                })
            }) : (n[t] = void 0 === e ? s : e, function () {
                v(t)
            })
        }

        function v(t) {
            var e = l();
            delete e[t], 0 == Object.keys(e).length && delete a()[f]
        }

        function d(t) {
            var e = l(), n = Object.keys(t), r = {};

            function o() {
                n.forEach(function (t) {
                    e[t] = r[t]
                })
            }

            return function (i) {
                n.forEach(function (n) {
                    r[n] = e[n], e[n] = t[n]
                });
                var u = i();
                return u && "function" == typeof u.then ? u.then(o).catch(o) : o(), u
            }
        }

        !function () {
            function t(t, e) {
                Object.defineProperty(p, t, {value: e, enumerable: !1, configurable: !0})
            }

            t("__get__", y), t("__GetDependency__", y), t("__Rewire__", h), t("__set__", h), t("__reset__", v), t("__ResetDependency__", v), t("__with__", d)
        }();
        var b = o(i);

        function E(t, e) {
            Object.defineProperty(i, t, {value: e, enumerable: !1, configurable: !0})
        }

        "object" !== b && "function" !== b || !Object.isExtensible(i) || (E("__get__", y), E("__GetDependency__", y), E("__Rewire__", h), E("__set__", h), E("__reset__", v), E("__ResetDependency__", v), E("__with__", d), E("__RewireAPI__", p))
    }).call(this, n(10))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        n(11), n(12), n(20), n(15), n(9), n(16), n(66), n(67), n(17);
        var r = n(32);

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function i(t, e) {
            var n = t.querySelectorAll(".js-file-line"), r = y("getLineNumbers")(e, n.length);
            n.forEach(function (t, e) {
                r.includes(e + 1) || null == t.parentNode || null == t.parentNode.parentNode || t.parentNode.parentNode.removeChild(t.parentNode)
            })
        }

        function u() {
            try {
                if (t) return t
            } catch (t) {
                try {
                    if (window) return window
                } catch (t) {
                    return this
                }
            }
        }

        e.a = y("line");
        var c, _ = null;

        function f() {
            if (null === _) {
                var t = u();
                t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ || (t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0), _ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++
            }
            return _
        }

        function a() {
            var t = u();
            return t.__$$GLOBAL_REWIRE_REGISTRY__ || (t.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)), t.__$$GLOBAL_REWIRE_REGISTRY__
        }

        function l() {
            var t = f(), e = a(), n = e[t];
            return n || (e[t] = Object.create(null), n = e[t]), n
        }

        (c = u()).__rewire_reset_all__ || (c.__rewire_reset_all__ = function () {
            c.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)
        });
        var s = "__INTENTIONAL_UNDEFINED__", p = {};

        function y(t) {
            var e = l();
            if (void 0 === e[t]) return function (t) {
                switch (t) {
                    case"getLineNumbers":
                        return r.a;
                    case"line":
                        return i
                }
                return
            }(t);
            var n = e[t];
            return n === s ? void 0 : n
        }

        function h(t, e) {
            var n = l();
            return "object" === o(t) ? (Object.keys(t).forEach(function (e) {
                n[e] = t[e]
            }), function () {
                Object.keys(t).forEach(function (e) {
                    v(t)
                })
            }) : (n[t] = void 0 === e ? s : e, function () {
                v(t)
            })
        }

        function v(t) {
            var e = l();
            delete e[t], 0 == Object.keys(e).length && delete a()[f]
        }

        function d(t) {
            var e = l(), n = Object.keys(t), r = {};

            function o() {
                n.forEach(function (t) {
                    e[t] = r[t]
                })
            }

            return function (i) {
                n.forEach(function (n) {
                    r[n] = e[n], e[n] = t[n]
                });
                var u = i();
                return u && "function" == typeof u.then ? u.then(o).catch(o) : o(), u
            }
        }

        !function () {
            function t(t, e) {
                Object.defineProperty(p, t, {value: e, enumerable: !1, configurable: !0})
            }

            t("__get__", y), t("__GetDependency__", y), t("__Rewire__", h), t("__set__", h), t("__reset__", v), t("__ResetDependency__", v), t("__with__", d)
        }();
        var b = o(i);

        function E(t, e) {
            Object.defineProperty(i, t, {value: e, enumerable: !1, configurable: !0})
        }

        "object" !== b && "function" !== b || !Object.isExtensible(i) || (E("__get__", y), E("__GetDependency__", y), E("__Rewire__", h), E("__set__", h), E("__reset__", v), E("__ResetDependency__", v), E("__with__", d), E("__RewireAPI__", p))
    }).call(this, n(10))
}, function (t, e, n) {
    "use strict";
    n.r(e), function (t) {
        n.d(e, "__get__", function () {
            return D
        }), n.d(e, "__GetDependency__", function () {
            return D
        }), n.d(e, "__Rewire__", function () {
            return $
        }), n.d(e, "__set__", function () {
            return $
        }), n.d(e, "__ResetDependency__", function () {
            return P
        }), n.d(e, "__RewireAPI__", function () {
            return N
        });
        n(11), n(12), n(15), n(16), n(83), n(17), n(9), n(87), n(88);
        var r = n(69), o = n(70), i = n(71), u = n(72), c = n(73);

        function _(t) {
            return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        window.GistEmbedSettings = window.GistEmbedSettings || {}, window.GistEmbed = {};
        var f, a = new Set, l = "_gistEmbedJSONP_", s = 0,
            p = window.GistEmbedSettings.baseURL || "https://gist.github.com/", y = "data-gist-id",
            h = "data-gist-file";
        !function (t) {
            t.hideLineNumbersAttribute = "data-gist-hide-line-numbers", t.hideFooterAttribute = "data-gist-hide-footer", t.captionAttribute = "data-gist-caption", t.lineAttribute = "data-gist-line", t.highlightLineAttribute = "data-gist-highlight-line"
        }(f || (f = {}));
        var v = [f.hideLineNumbersAttribute, f.hideFooterAttribute, f.captionAttribute, f.lineAttribute, f.highlightLineAttribute];

        function d() {
            Array.from(D("getAllGistEmbedDOMNodes")()).forEach(D("fetchJSONPForGistEmbedDOMNode"))
        }

        function b() {
            return document.querySelectorAll("[".concat(D("GIST_ID_ATTRIBUTE_NAME"), "]"))
        }

        function E() {
            var t, e, n;
            return t = "++", !0, n = D(e = "_jsonpCallbackIDCounter"), function (t, e) {
                var n = T();
                void 0 === n[t] ? function (t, e) {
                    switch (t) {
                        case"_jsonpCallbackIDCounter":
                            s = e
                    }
                }(t, e) : n[t] = e
            }(e, "++" === t ? n + 1 : n - 1), "".concat(D("JSONP_CALLBACK_PREFIX")).concat(D("_jsonpCallbackIDCounter"))
        }

        function g(t) {
            if (!D("StylesheetURLs").has(t)) {
                D("StylesheetURLs").add(t);
                var e = document.createElement("link");
                e.setAttribute("href", t), e.setAttribute("type", "text/css"), e.setAttribute("rel", "stylesheet"), document.body.appendChild(e)
            }
        }

        function O(t, e, n) {
            var r = D("generateJSONPCallbackPrefix")();
            window[r] = n;
            var o = document.createElement("script"), i = null != e ? "&file=".concat(encodeURIComponent(e)) : "";
            o.setAttribute("src", "".concat(D("GIST_URL_PREFIX")).concat(t, ".json?callback=").concat(r).concat(i)), document.body.appendChild(o)
        }

        function R(t) {
            var e = t.getAttribute(D("GIST_ID_ATTRIBUTE_NAME")), n = t.getAttribute(D("GIST_FILE_ATTRIBUTE_NAME"));
            null != e && "" !== e && D("getJSONP")(e, n, function (e) {
                D("handleGetJSONPResponse")(t, e)
            })
        }

        function m(t, e) {
            null != e && null != e.div && null != e.stylesheet ? D("updateDOMNodeWithGistContent")(t, e.stylesheet, e.div) : t.innerHTML = "Error fetching gist"
        }

        function L(t, e, n) {
            D("appendStylesheet")(e), t.innerHTML = n, t.children.length && t.children[0].removeAttribute("id"), D("modify")(t)
        }

        function S(t) {
            D("MODIFIER_ATTRIBUTE_NAMES").forEach(function (e) {
                var n = t.getAttribute(e);
                if (null != n && "" !== n) switch (e) {
                    case"data-gist-hide-line-numbers":
                        "true" === n && D("hideLineNumbers")(t);
                        break;
                    case"data-gist-hide-footer":
                        "true" === n && D("hideFooter")(t);
                        break;
                    case"data-gist-caption":
                        D("caption")(t, n);
                        break;
                    case"data-gist-line":
                        D("line")(t, n);
                        break;
                    case"data-gist-highlight-line":
                        D("highlightLine")(t, n)
                }
            })
        }

        function I() {
            try {
                if (t) return t
            } catch (t) {
                try {
                    if (window) return window
                } catch (t) {
                    return this
                }
            }
        }

        "complete" === document.readyState ? D("init")() : document.addEventListener("DOMContentLoaded", D("init")), window.GistEmbed.init = D("init");
        var w, x = null;

        function j() {
            if (null === x) {
                var t = I();
                t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ || (t.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0), x = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++
            }
            return x
        }

        function A() {
            var t = I();
            return t.__$$GLOBAL_REWIRE_REGISTRY__ || (t.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)), t.__$$GLOBAL_REWIRE_REGISTRY__
        }

        function T() {
            var t = j(), e = A(), n = e[t];
            return n || (e[t] = Object.create(null), n = e[t]), n
        }

        (w = I()).__rewire_reset_all__ || (w.__rewire_reset_all__ = function () {
            w.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null)
        });
        var G = "__INTENTIONAL_UNDEFINED__", N = {};

        function D(t) {
            var e = T();
            if (void 0 === e[t]) return function (t) {
                switch (t) {
                    case"init":
                        return d;
                    case"getAllGistEmbedDOMNodes":
                        return b;
                    case"fetchJSONPForGistEmbedDOMNode":
                        return R;
                    case"GIST_ID_ATTRIBUTE_NAME":
                        return y;
                    case"_jsonpCallbackIDCounter":
                        return s;
                    case"JSONP_CALLBACK_PREFIX":
                        return l;
                    case"StylesheetURLs":
                        return a;
                    case"generateJSONPCallbackPrefix":
                        return E;
                    case"GIST_URL_PREFIX":
                        return p;
                    case"GIST_FILE_ATTRIBUTE_NAME":
                        return h;
                    case"getJSONP":
                        return O;
                    case"handleGetJSONPResponse":
                        return m;
                    case"updateDOMNodeWithGistContent":
                        return L;
                    case"appendStylesheet":
                        return g;
                    case"modify":
                        return S;
                    case"MODIFIER_ATTRIBUTE_NAMES":
                        return v;
                    case"hideLineNumbers":
                        return i.a;
                    case"hideFooter":
                        return o.a;
                    case"caption":
                        return r.a;
                    case"line":
                        return c.a;
                    case"highlightLine":
                        return u.a
                }
                return
            }(t);
            var n = e[t];
            return n === G ? void 0 : n
        }

        function $(t, e) {
            var n = T();
            return "object" === _(t) ? (Object.keys(t).forEach(function (e) {
                n[e] = t[e]
            }), function () {
                Object.keys(t).forEach(function (e) {
                    P(t)
                })
            }) : (n[t] = void 0 === e ? G : e, function () {
                P(t)
            })
        }

        function P(t) {
            var e = T();
            delete e[t], 0 == Object.keys(e).length && delete A()[j]
        }

        function k(t) {
            var e = T(), n = Object.keys(t), r = {};

            function o() {
                n.forEach(function (t) {
                    e[t] = r[t]
                })
            }

            return function (i) {
                n.forEach(function (n) {
                    r[n] = e[n], e[n] = t[n]
                });
                var u = i();
                return u && "function" == typeof u.then ? u.then(o).catch(o) : o(), u
            }
        }

        !function () {
            function t(t, e) {
                Object.defineProperty(N, t, {value: e, enumerable: !1, configurable: !0})
            }

            t("__get__", D), t("__GetDependency__", D), t("__Rewire__", $), t("__set__", $), t("__reset__", P), t("__ResetDependency__", P), t("__with__", k)
        }(), e.default = N
    }.call(this, n(10))
}, function (t, e, n) {
    t.exports = n(28)("native-function-to-string", Function.toString)
}, function (t, e, n) {
    var r = n(24), o = n(50), i = n(38);
    t.exports = function (t) {
        var e = r(t), n = o.f;
        if (n) for (var u, c = n(t), _ = i.f, f = 0; c.length > f;) _.call(t, u = c[f++]) && e.push(u);
        return e
    }
}, function (t, e, n) {
    var r = n(30);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function (t, e, n) {
    var r = n(35), o = Math.max, i = Math.min;
    t.exports = function (t, e) {
        return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
    }
}, function (t, e, n) {
    var r = n(30);
    t.exports = Array.isArray || function (t) {
        return "Array" == r(t)
    }
}, function (t, e, n) {
    var r = n(3), o = n(4), i = n(24);
    t.exports = n(5) ? Object.defineProperties : function (t, e) {
        o(t);
        for (var n, u = i(e), c = u.length, _ = 0; c > _;) r.f(t, n = u[_++], e[n]);
        return t
    }
}, function (t, e, n) {
    var r = n(1).document;
    t.exports = r && r.documentElement
}, function (t, e, n) {
    var r = n(19), o = n(51).f, i = {}.toString,
        u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (t) {
        return u && "[object Window]" == i.call(t) ? function (t) {
            try {
                return o(t)
            } catch (t) {
                return u.slice()
            }
        }(t) : o(r(t))
    }
}, function (t, e, n) {
    "use strict";
    var r = n(23), o = n(7), i = n(40), u = n(54), c = n(55), _ = n(31), f = n(84), a = n(56);
    o(o.S + o.F * !n(58)(function (t) {
        Array.from(t)
    }), "Array", {
        from: function (t) {
            var e, n, o, l, s = i(t), p = "function" == typeof this ? this : Array, y = arguments.length,
                h = y > 1 ? arguments[1] : void 0, v = void 0 !== h, d = 0, b = a(s);
            if (v && (h = r(h, y > 2 ? arguments[2] : void 0, 2)), null == b || p == Array && c(b)) for (n = new p(e = _(s.length)); e > d; d++) f(n, d, v ? h(s[d], d) : s[d]); else for (l = b.call(s), n = new p; !(o = l.next()).done; d++) f(n, d, v ? u(l, h, [o.value, d], !0) : o.value);
            return n.length = d, n
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(3), o = n(22);
    t.exports = function (t, e, n) {
        e in t ? r.f(t, e, o(0, n)) : t[e] = n
    }
}, function (t, e, n) {
    "use strict";
    var r = n(39), o = n(22), i = n(29), u = {};
    n(8)(u, n(0)("iterator"), function () {
        return this
    }), t.exports = function (t, e, n) {
        t.prototype = r(u, {next: o(1, n)}), i(t, e + " Iterator")
    }
}, function (t, e, n) {
    var r = n(13), o = n(40), i = n(36)("IE_PROTO"), u = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
        return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
    }
}, function (t, e, n) {
    "use strict";
    var r = n(61)(!0);
    n(41)(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {value: void 0, done: !0} : (t = r(e, n), this._i += t.length, {value: t, done: !1})
    })
}, function (t, e, n) {
    "use strict";
    var r = n(89), o = n(65);
    t.exports = n(91)("Set", function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function (t) {
            return r.def(o(this, "Set"), t = 0 === t ? 0 : t, t)
        }
    }, r)
}, function (t, e, n) {
    "use strict";
    var r = n(3).f, o = n(39), i = n(62), u = n(23), c = n(63), _ = n(64), f = n(41), a = n(60), l = n(90), s = n(5),
        p = n(34).fastKey, y = n(65), h = s ? "_s" : "size", v = function (t, e) {
            var n, r = p(e);
            if ("F" !== r) return t._i[r];
            for (n = t._f; n; n = n.n) if (n.k == e) return n
        };
    t.exports = {
        getConstructor: function (t, e, n, f) {
            var a = t(function (t, r) {
                c(t, a, e, "_i"), t._t = e, t._i = o(null), t._f = void 0, t._l = void 0, t[h] = 0, null != r && _(r, n, t[f], t)
            });
            return i(a.prototype, {
                clear: function () {
                    for (var t = y(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                    t._f = t._l = void 0, t[h] = 0
                }, delete: function (t) {
                    var n = y(this, e), r = v(n, t);
                    if (r) {
                        var o = r.n, i = r.p;
                        delete n._i[r.i], r.r = !0, i && (i.n = o), o && (o.p = i), n._f == r && (n._f = o), n._l == r && (n._l = i), n[h]--
                    }
                    return !!r
                }, forEach: function (t) {
                    y(this, e);
                    for (var n, r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;) for (r(n.v, n.k, this); n && n.r;) n = n.p
                }, has: function (t) {
                    return !!v(y(this, e), t)
                }
            }), s && r(a.prototype, "size", {
                get: function () {
                    return y(this, e)[h]
                }
            }), a
        }, def: function (t, e, n) {
            var r, o, i = v(t, e);
            return i ? i.v = n : (t._l = i = {
                i: o = p(e, !0),
                k: e,
                v: n,
                p: r = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = i), r && (r.n = i), t[h]++, "F" !== o && (t._i[o] = i)), t
        }, getEntry: v, setStrong: function (t, e, n) {
            f(t, e, function (t, n) {
                this._t = y(t, e), this._k = n, this._l = void 0
            }, function () {
                for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                return this._t && (this._l = e = e ? e.n : this._t._f) ? a(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, a(1))
            }, n ? "entries" : "values", !n, !0), l(e)
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(1), o = n(3), i = n(5), u = n(0)("species");
    t.exports = function (t) {
        var e = r[t];
        i && e && !e[u] && o.f(e, u, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (t, e, n) {
    "use strict";
    var r = n(1), o = n(7), i = n(14), u = n(62), c = n(34), _ = n(64), f = n(63), a = n(2), l = n(6), s = n(58),
        p = n(29), y = n(92);
    t.exports = function (t, e, n, h, v, d) {
        var b = r[t], E = b, g = v ? "set" : "add", O = E && E.prototype, R = {}, m = function (t) {
            var e = O[t];
            i(O, t, "delete" == t ? function (t) {
                return !(d && !a(t)) && e.call(this, 0 === t ? 0 : t)
            } : "has" == t ? function (t) {
                return !(d && !a(t)) && e.call(this, 0 === t ? 0 : t)
            } : "get" == t ? function (t) {
                return d && !a(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
            } : "add" == t ? function (t) {
                return e.call(this, 0 === t ? 0 : t), this
            } : function (t, n) {
                return e.call(this, 0 === t ? 0 : t, n), this
            })
        };
        if ("function" == typeof E && (d || O.forEach && !l(function () {
            (new E).entries().next()
        }))) {
            var L = new E, S = L[g](d ? {} : -0, 1) != L, I = l(function () {
                L.has(1)
            }), w = s(function (t) {
                new E(t)
            }), x = !d && l(function () {
                for (var t = new E, e = 5; e--;) t[g](e, e);
                return !t.has(-0)
            });
            w || ((E = e(function (e, n) {
                f(e, E, t);
                var r = y(new b, e, E);
                return null != n && _(n, v, r[g], r), r
            })).prototype = O, O.constructor = E), (I || x) && (m("delete"), m("has"), v && m("get")), (x || S) && m(g), d && O.clear && delete O.clear
        } else E = h.getConstructor(e, t, v, g), u(E.prototype, n), c.NEED = !0;
        return p(E, t), R[t] = E, o(o.G + o.W + o.F * (E != b), R), d || h.setStrong(E, t, v), E
    }
}, function (t, e, n) {
    var r = n(2), o = n(93).set;
    t.exports = function (t, e, n) {
        var i, u = e.constructor;
        return u !== n && "function" == typeof u && (i = u.prototype) !== n.prototype && r(i) && o && o(t, i), t
    }
}, function (t, e, n) {
    var r = n(2), o = n(4), i = function (t, e) {
        if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, r) {
            try {
                (r = n(23)(Function.call, n(52).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function (t, n) {
                return i(t, n), e ? t.__proto__ = n : r(t, n), t
            }
        }({}, !1) : void 0), check: i
    }
}, function (t, e, n) {
    var r = n(68), o = n(25);
    t.exports = function (t, e, n) {
        if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(o(t))
    }
}, function (t, e, n) {
    var r = n(0)("match");
    t.exports = function (t) {
        var e = /./;
        try {
            "/./"[t](e)
        } catch (n) {
            try {
                return e[r] = !1, !"/./"[t](e)
            } catch (t) {
            }
        }
        return !0
    }
}, function (t, e, n) {
    "use strict";
    var r = n(68), o = n(4), i = n(97), u = n(98), c = n(31), _ = n(99), f = n(42), a = n(6), l = Math.min, s = [].push,
        p = !a(function () {
            RegExp(4294967295, "y")
        });
    n(101)("split", 2, function (t, e, n, a) {
        var y;
        return y = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, e) {
            var o = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!r(t)) return n.call(o, t, e);
            for (var i, u, c, _ = [], a = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), l = 0, p = void 0 === e ? 4294967295 : e >>> 0, y = new RegExp(t.source, a + "g"); (i = f.call(y, o)) && !((u = y.lastIndex) > l && (_.push(o.slice(l, i.index)), i.length > 1 && i.index < o.length && s.apply(_, i.slice(1)), c = i[0].length, l = u, _.length >= p));) y.lastIndex === i.index && y.lastIndex++;
            return l === o.length ? !c && y.test("") || _.push("") : _.push(o.slice(l)), _.length > p ? _.slice(0, p) : _
        } : "0".split(void 0, 0).length ? function (t, e) {
            return void 0 === t && 0 === e ? [] : n.call(this, t, e)
        } : n, [function (n, r) {
            var o = t(this), i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, o, r) : y.call(String(o), n, r)
        }, function (t, e) {
            var r = a(y, t, this, e, y !== n);
            if (r.done) return r.value;
            var f = o(t), s = String(this), h = i(f, RegExp), v = f.unicode,
                d = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (p ? "y" : "g"),
                b = new h(p ? f : "^(?:" + f.source + ")", d), E = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === E) return [];
            if (0 === s.length) return null === _(b, s) ? [s] : [];
            for (var g = 0, O = 0, R = []; O < s.length;) {
                b.lastIndex = p ? O : 0;
                var m, L = _(b, p ? s : s.slice(O));
                if (null === L || (m = l(c(b.lastIndex + (p ? 0 : O)), s.length)) === g) O = u(s, O, v); else {
                    if (R.push(s.slice(g, O)), R.length === E) return R;
                    for (var S = 1; S <= L.length - 1; S++) if (R.push(L[S]), R.length === E) return R;
                    O = g = m
                }
            }
            return R.push(s.slice(g)), R
        }]
    })
}, function (t, e, n) {
    var r = n(4), o = n(47), i = n(0)("species");
    t.exports = function (t, e) {
        var n, u = r(t).constructor;
        return void 0 === u || null == (n = r(u)[i]) ? e : o(n)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(61)(!0);
    t.exports = function (t, e, n) {
        return e + (n ? r(t, e).length : 1)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(57), o = RegExp.prototype.exec;
    t.exports = function (t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
            var i = n.call(t, e);
            if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return o.call(t, e)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(4);
    t.exports = function () {
        var t = r(this), e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function (t, e, n) {
    "use strict";
    n(102);
    var r = n(14), o = n(8), i = n(6), u = n(25), c = n(0), _ = n(42), f = c("species"), a = !i(function () {
        var t = /./;
        return t.exec = function () {
            var t = [];
            return t.groups = {a: "7"}, t
        }, "7" !== "".replace(t, "$<a>")
    }), l = function () {
        var t = /(?:)/, e = t.exec;
        t.exec = function () {
            return e.apply(this, arguments)
        };
        var n = "ab".split(t);
        return 2 === n.length && "a" === n[0] && "b" === n[1]
    }();
    t.exports = function (t, e, n) {
        var s = c(t), p = !i(function () {
            var e = {};
            return e[s] = function () {
                return 7
            }, 7 != ""[t](e)
        }), y = p ? !i(function () {
            var e = !1, n = /a/;
            return n.exec = function () {
                return e = !0, null
            }, "split" === t && (n.constructor = {}, n.constructor[f] = function () {
                return n
            }), n[s](""), !e
        }) : void 0;
        if (!p || !y || "replace" === t && !a || "split" === t && !l) {
            var h = /./[s], v = n(u, s, ""[t], function (t, e, n, r, o) {
                return e.exec === _ ? p && !o ? {done: !0, value: h.call(e, n, r)} : {
                    done: !0,
                    value: t.call(n, e, r)
                } : {done: !1}
            }), d = v[0], b = v[1];
            r(String.prototype, t, d), o(RegExp.prototype, s, 2 == e ? function (t, e) {
                return b.call(t, this, e)
            } : function (t) {
                return b.call(t, this)
            })
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(42);
    n(7)({target: "RegExp", proto: !0, forced: r !== /./.exec}, {exec: r})
}]);

/*IFRAME LY*/
!function (e) {
    var t = {};

    function r(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }

    r.m = e, r.c = t, r.d = function (e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) r.d(i, n, function (t) {
            return e[t]
        }.bind(null, n));
        return i
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 3)
}([function (e, t) {
    var r = window.iframely = window.iframely || {};
    r.config = r.config || {}, e.exports = r
}, function (e, t, r) {
    var i = r(0), n = r(2);
    i.on("init", function () {
        i.extendOptions(function () {
            for (var e = document.querySelectorAll('script[src*="embed.js"], script[src*="iframely.js"]'), t = 0; t < e.length; t++) {
                var r = e[t].getAttribute("src").replace(/&amp;/gi, "&");
                if (i.SCRIPT_RE.test(r)) {
                    var n = c(r, i.SUPPORTED_QUERY_STRING.concat("cdn")), a = r.match(i.CDN_RE);
                    if ((a || n.cdn) && (i.CDN = n.cdn || a[1]), Object.keys(n).length > 0) return n
                }
            }
            return {}
        }()), function () {
            var e = document.getElementById("iframely-styles");
            if (!e) {
                var t = ".iframely-responsive{top:0;left:0;width:100%;height:0;position:relative;padding-bottom:56.25%;box-sizing:border-box;}.iframely-responsive>*{top:0;left:0;width:100%;height:100%;position:absolute;border:0;box-sizing:border-box;}";
                (e = document.createElement("style")).id = "iframely-styles", e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = t : e.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(e)
            }
        }(), function (e) {
            for (var t = document.querySelectorAll('iframe[src*="' + (e || i.DOMAINS).join('"], iframe[src*="') + '"]'), r = 0; r < t.length; r++) {
                var a = t[r], o = a.src;
                (o.match(/^(https?:)?\/\/[^\/]+\/api\/iframe\?.+/) || o.match(/^(https?:)?\/\/[^\/]+\/\w+(\?.*)?$/)) && n.postMessage({method: "getSize"}, "*", a.contentWindow)
            }
        }(i.DOMAINS.concat(i.CDN.replace(/^https?:\/\//, "")))
    }), i.load = function () {
        var e = Array.prototype.slice.call(arguments);
        e.unshift("load"), i.trigger.apply(this, e)
    };
    var a = t.getIframeWrapper = function (e, t) {
        var r = e.parentNode;
        if (!(!r || "DIV" !== r.nodeName || d(r) > 2 || t && r.getAttribute("class") !== i.ASPECT_WRAPPER_CLASS || !t && "relative" !== r.style.position && r.getAttribute("class") !== i.ASPECT_WRAPPER_CLASS)) {
            var n = r.parentNode;
            if (!(!n || "DIV" !== n.nodeName || d(n) > 1 || t && n.getAttribute("class") !== i.MAXWIDTH_WRAPPER_CLASS || !t && n.getAttribute("class") && !n.getAttribute("class").match(/iframely/i))) return {
                aspectWrapper: r,
                maxWidthWrapper: n
            }
        }
    };
    t.addDefaultWrappers = function (e) {
        var t = e.parentNode, r = document.createElement("div");
        r.className = i.MAXWIDTH_WRAPPER_CLASS;
        var n = document.createElement("div");
        return n.className = i.ASPECT_WRAPPER_CLASS, r.appendChild(n), t.insertBefore(r, e), {
            aspectWrapper: n,
            maxWidthWrapper: r
        }
    }, t.getWidget = function (e) {
        var t = a(e);
        if (t) {
            var r = {iframe: e, aspectWrapper: t.aspectWrapper, maxWidthWrapper: t.maxWidthWrapper};
            if ("A" === e.nodeName && e.hasAttribute("href")) r.url = e.getAttribute("href"); else if (e.hasAttribute("src") && /url=/.test(e.getAttribute("src"))) {
                var i = c(e.getAttribute("src"));
                i.url && (r.url = i.url)
            }
            return r
        }
    }, i.getElementComputedStyle = function (e, t) {
        return window.getComputedStyle && window.getComputedStyle(e).getPropertyValue(t)
    }, t.setStyles = function (e, t) {
        e && Object.keys(t).forEach(function (r) {
            var n = t[r];
            ("number" == typeof n || "string" == typeof n && /^(\d+)?\.?(\d+)$/.test(n)) && (n += "px");
            var a = e.style[r];
            window.getComputedStyle && (i.getElementComputedStyle(e, r) == n || "iframely-responsive" == e.className && "paddingBottom" === r && !a && /^56\.2\d+%$/.test(n) || "max-width" === r && "keep" === n) || (e.style[r] = n || "")
        })
    };
    var o = t.addQueryString = function (e, t) {
        var r = "";
        return Object.keys(t).forEach(function (i) {
            var n = t[i];
            if ("[object Array]" === Object.prototype.toString.call(n)) {
                var a = n.map(function (e) {
                    return i + "=" + encodeURIComponent(e)
                });
                r += "&" + a.join("&")
            } else void 0 !== n && -1 === e.indexOf(i + "=") && (!0 === n && (n = 1), !1 === n && (n = 0), r += "&" + i + "=" + encodeURIComponent(n))
        }), e + ("" !== r ? (e.indexOf("?") > -1 ? "&" : "?") + r.replace(/^&/, "") : "")
    };

    function d(e) {
        for (var t = 0, r = 0; r < e.childNodes.length; r++) {
            var i = e.childNodes[r];
            if (i.nodeType === Node.TEXT_NODE) {
                var n = i.textContent || i.innerText;
                (n = n.replace(/\s|\n/g, "")) && t++
            } else i.nodeType === Node.ELEMENT_NODE && t++
        }
        return t
    }

    function s(e, t) {
        for (var r, i = 0; i < e.length;) {
            if ((r = e[i]) == t) return !0;
            if (r && r.test && r.test(t)) return !0;
            i++
        }
    }

    t.getEndpoint = function (e, t, r) {
        var n = e;
        if (/^(https?:)?\/\//i.test(e) || (n = (t.CDN || i.CDN) + n, delete t.CDN), /^(?:https?:)?\/\//i.test(n) || (n = "//" + n), t && (n = o(n, t)), r && r.length) {
            for (var a = {}, d = Object.keys(i.config), c = 0; c < d.length; c++) {
                var l = d[c];
                s(r, l) && (a[l] = i.config[l])
            }
            n = o(n, a)
        }
        return /^(https?:)?\/\//i.test(n) && !n.match(/^(https?:)?\/\//i)[1] && "file:" === document.location.protocol && (n = "http:" + n), n
    }, i.extendOptions = function (e) {
        e && Object.keys(e).forEach(function (t) {
            var r = 0 !== e[t] && "0" !== e[t] && !1 !== e[t] && "false" !== e[t] && (1 === e[t] || "1" === e[t] || !0 === e[t] || "true" === e[t] || e[t]);
            !1 !== i.config[t] && (i.config[t] = r)
        })
    };
    var c = t.parseQueryString = function (e, t) {
        var r = e.match(/\?(.+)/i);
        if (r) {
            for (var i = (r = r[1]).split("&"), n = {}, a = 0; a < i.length; a++) {
                var o = i[a].split("=");
                t && !s(t, o[0]) || (n[o[0]] = decodeURIComponent(o[1]))
            }
            return n
        }
        return {}
    }
}, function (e, t, r) {
    var i = r(0), n = r(1);

    function a(e, t) {
        for (var r, i = 0; i < e.length && !r; i++) {
            var n = e[i];
            n.contentWindow === t && (r = n)
        }
        return r
    }

    !function (e) {
        function t(t) {
            var r;
            try {
                r = JSON.parse(t.data)
            } catch (e) {
            }
            e(t, r)
        }

        window.postMessage && (window.addEventListener ? window[e ? "addEventListener" : "removeEventListener"]("message", t, !1) : window[e ? "attachEvent" : "detachEvent"]("onmessage", t))
    }(function (e, t) {
        if (t && t.method) {
            var r = function (e) {
                var t;
                return e.src && (t = a(document.querySelectorAll('iframe[src*="' + e.src.replace(/^https?:/, "") + '"]'), e.contentWindow)), t || (t = a(e.domains ? document.querySelectorAll('iframe[src*="' + (e.domains || i.DOMAINS).join('"], iframe[src*="') + '"]') : document.getElementsByTagName("iframe"), e.contentWindow)), t
            }({contentWindow: e.source, src: t.context, domains: i.DOMAINS.concat(i.CDN)});
            if (r) {
                var o = n.getWidget(r);
                o && t.url && (o.url = t.url), i.trigger("message", o, t)
            }
        }
    }), t.postMessage = function (e, t, r) {
        window.postMessage && ("object" == typeof e && (e.context = document.location.href), e = JSON.stringify(e), t = t || "*", (r = r || window.parent).postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, "$1")))
    }
}, function (e, t, r) {
    r(4);
    var i = r(0);
    i._loaded || (i._loaded = !0, r(5), r(6), r(8), r(9), r(10), r(11), r(12), r(13), r(14), r(15), r(16), r(17), i.trigger("init")), t.iframely = i
}, function (e, t, r) {
    var i, n = r(0);
    i = function () {
        n.trigger("load")
    }, "complete" !== document.readyState && "interactive" !== document.readyState || setTimeout(i, 0), document.addEventListener ? document.addEventListener("DOMContentLoaded", i) : window.attachEvent("onload", i)
}, function (e, t, r) {
    var i = r(0);
    i.VERSION = 1, i.ASPECT_WRAPPER_CLASS = "iframely-responsive", i.MAXWIDTH_WRAPPER_CLASS = "iframely-embed", i.LOADER_CLASS = "iframely-loader", i.DOMAINS = ["cdn.iframe.ly", "iframe.ly", "if-cdn.com", "iframely.net"], i.CDN = i.CDN || i.DOMAINS[0], i.BASE_RE = /^(?:https?:)?\/\/[^\/]+/i, i.ID_RE = /^(?:https?:)?\/\/[^\/]+\/(\w+)(?:\?.*)?$/, i.SCRIPT_RE = /^(?:https?:|file:\/)?\/\/[^\/]+(?:.+)?\/(?:embed|iframely)\.js(?:[^\/]+)?$/i, i.CDN_RE = /^(?:https?:)?\/\/([^\/]+)\/(?:embed|iframely)\.js(?:[^\/]+)?$/i, i.SUPPORTED_QUERY_STRING = ["api_key", "key", "iframe", "html5", "playerjs", "align", "language", "media", "maxwidth", "maxheight", "lazy", "import", "parent", "click_to_play", "autoplay", "mute", /^_.+/], i.LAZY_IFRAME_SHOW_TIMEOUT = 3e3, i.LAZY_IFRAME_FADE_TIMEOUT = 200, i.CLEAR_WRAPPER_STYLES_TIMEOUT = 3e3
}, function (e, t, r) {
    (function (e) {
        var t = r(0), i = function (e, t, r, i) {
            for (; !i && r < t.length;) i = e[t[r++] + "equestAnimationFrame"];
            return i && i.bind(e) || e.setImmediate || function (t) {
                e.setTimeout(t, 0)
            }
        }("undefined" != typeof window ? window : e, "r webkitR mozR msR oR".split(" "), 0), n = {};

        function a(e, r, a) {
            (n[e] || []).forEach(function (e) {
                r ? i(function () {
                    e.apply(t, a)
                }) : e.apply(t, a)
            }), "init" === e && (n[e] = [])
        }

        t.on = function (e, t) {
            (n[e] = n[e] || []).push(t)
        }, t.trigger = function (e) {
            a(e, !1, Array.prototype.slice.call(arguments, 1))
        }, t.triggerAsync = function (e) {
            a(e, !0, Array.prototype.slice.call(arguments, 1))
        }
    }).call(this, r(7))
}, function (e, t) {
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function (e, t, r) {
    var i = r(2), n = r(0), a = {}, o = {};
    "IntersectionObserver" in window && "IntersectionObserverEntry" in window && (n.on("init", function () {
        n.extendOptions({intersection: 1})
    }), n.on("message", function (e, t) {
        if ("send-intersections" === t.method && e.iframe) {
            var r = t.options;
            r || (r = {margin: 1e3});
            var n = JSON.stringify(r), d = o[n] = o[n] || [];
            if (d.indexOf(e.iframe) > -1) return;
            d.push(e.iframe), function (e) {
                var t = JSON.stringify(e), r = a[t];
                return r || (r = new IntersectionObserver(function (t) {
                    t.forEach(function (t) {
                        i.postMessage({
                            method: "intersection",
                            entry: {isIntersecting: t.isIntersecting},
                            options: e
                        }, "*", t.target.contentWindow)
                    })
                }, function (e) {
                    var t = {};
                    return e && e.threshold && (t.threshold = e.threshold), e && e.margin && (t.rootMargin = e.margin + "px " + e.margin + "px " + e.margin + "px " + e.margin + "px"), t
                }(e)), a[t] = r), r
            }(r).observe(e.iframe)
        }
    }))
}, function (e, t, r) {
    var i = r(1), n = r(0), a = {};

    function o(e, t, r) {
        var a, o = e.cancel, d = e.shadow, c = e.renderEvent, l = i.getIframeWrapper(t, !0);
        if (o) a = i.getWidget(t), n.cancelWidget(a || {
            maxWidthWrapper: t,
            iframe: t,
            url: t.getAttribute("href")
        }); else {
            var u, p;
            if ((a = document.createElement("div")).innerHTML = e.html, l && !c ? (u = l.aspectWrapper.parentNode, p = l.aspectWrapper, l.maxWidthWrapper.removeAttribute("style")) : (u = t.parentNode, p = t), d) {
                var f = document.createElement("div"), m = f.attachShadow({mode: "open"});
                m.appendChild(a);
                var g = {
                    shadowRoot: m,
                    shadowContainer: f,
                    container: u,
                    context: e.context,
                    stylesIds: e.stylesIds,
                    stylesDict: r.commonShadowStyles
                };
                n.trigger("import-shadow-widget-before-render", g), u.insertBefore(f, p), n.trigger("import-shadow-widget-after-render", g)
            } else u.insertBefore(a, p), function e(t) {
                function r(e) {
                    var r = e.text || e.textContent || e.innerHTML || "", i = document.createElement("script");
                    e.src && (i.src = e.src), i.type = "text/javascript";
                    try {
                        i.appendChild(document.createTextNode(r))
                    } catch (e) {
                        i.text = r
                    }
                    t.appendChild(i)
                }

                var i, n, a, o = [], d = t.childNodes;
                for (a = 0; d[a]; a++) n = d[a], c = "script", !(s = n).nodeName || s.nodeName.toUpperCase() !== c.toUpperCase() || n.type && "text/javascript" !== n.type.toLowerCase() && "application/javascript" !== n.type.toLowerCase() ? e(n) : (o.push(n), t.removeChild(n));
                var s, c;
                for (a = 0; o[a]; a++) (i = o[a]).parentNode && i.parentNode.removeChild(i), r(o[a])
            }(a);
            u.removeChild(p), c && setTimeout(function () {
                s(u)
            }, n.CLEAR_WRAPPER_STYLES_TIMEOUT)
        }
    }

    function d() {
        delete n.import;
        for (var e = document.querySelectorAll("a[data-iframely-url][data-import-uri]"), t = 0; t < e.length; t++) e[t].removeAttribute("data-import-uri"), n.trigger("load", e[t])
    }

    function s(e) {
        for (var t = e, r = 0; t && t.getAttribute("class") !== n.ASPECT_WRAPPER_CLASS;) t = t.parentNode, ++r > 4 && (t = null);
        var i = t && t.parentNode;
        i && i.getAttribute("class") === n.MAXWIDTH_WRAPPER_CLASS && (t.removeAttribute("style"), t.removeAttribute("class"), i.removeAttribute("style"))
    }

    n.on("load", function (e) {
        if (!e && !1 !== n.config.import && document.head.attachShadow && (n.debug || "http:" === document.location.protocol || "https:" === document.location.protocol) && !n.config.playerjs && !n.config.lazy && !n.import) {
            var t = document.querySelectorAll("a[data-iframely-url]:not([data-import-uri])");
            t.length > 1 && function (e) {
                var t = document.createElement("script"), r = [], o = [], s = null;

                function c(e, t) {
                    a[e] || (a[e] = []), a[e].push(t)
                }

                function l(e) {
                    var t = e.getAttribute("data-iframely-url"), a = t.match(n.ID_RE), d = a && a[1],
                        l = i.parseQueryString(t, n.SUPPORTED_QUERY_STRING.concat("url")), u = l.url;
                    delete l.url;
                    var p = "0" === l.import || "false" === l.import || "1" === l.playerjs || "true" === l.playerjs;
                    if (!p) {
                        var f = t.match(n.BASE_RE);
                        l.CDN = f && f[0], s ? JSON.stringify(l, Object.keys(l).sort()) !== JSON.stringify(s, Object.keys(s).sort()) && (p = !0) : s = l
                    }
                    if (p) n.trigger("load", e); else if (d) e.setAttribute("data-import-uri", d), -1 === o.indexOf(d) && o.push(d), c(d, e); else {
                        u || (u = e.getAttribute("href"));
                        var m = s.key || s.api_key || n.config.api_key || n.config.key;
                        m && u ? (e.setAttribute("data-import-uri", u), -1 === r.indexOf(u) && r.push(u), c(u, e)) : n.trigger("load", e)
                    }
                }

                for (var u = 0; u < e.length; u++) {
                    var p = e[u];
                    !p.getAttribute("data-import-uri") && p.hasAttribute("data-iframely-url") && l(p)
                }
                r.length > 0 || o.length > 0 ? ((s = s || {}).touch = n.isTouch(), s.flash = function () {
                    var e = !1;
                    try {
                        var t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                        e = !!t
                    } catch (t) {
                        e = !(!navigator.mimeTypes || null == navigator.mimeTypes["application/x-shockwave-flash"] || !navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)
                    }
                    return e
                }(), s.app = 1, r.length > 0 && (s.uri = r), o.length > 0 && (s.ids = o.join("&")), s.v = n.VERSION, t.src = i.getEndpoint("/api/import/v2", s, n.SUPPORTED_QUERY_STRING), t.onerror = function () {
                    d()
                }, document.head.appendChild(t), n.import = t) : (d(), n.trigger("load"))
            }(t)
        }
    }), n.on("load", function (e, t) {
        if (e && e.uri && (e.html || e.cancel)) {
            var r = a[e.uri];
            if (r) for (var i = 0; i < r.length; i++) o(e, r[i], t);
            delete a[e.uri]
        }
    }), n.buildImportWidgets = function (e) {
        n.trigger("import-loaded", e), e.widgets.forEach(function (t) {
            n.trigger("load", t, e)
        }), d()
    }, n.isTouch = function () {
        return "ontouchstart" in window || navigator.maxTouchPoints
    }, n.on("import-widget-ready", s), n.addEventListener || (n.addEventListener = function (e, t, r) {
        e && (e.addEventListener ? e.addEventListener(t, r, !1) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r)
    })
}, function (e, t, r) {
    var i = r(1), n = r(0);
    n.on("load", function (e, t) {
        if (e && e.nodeName && "string" == typeof t) {
            var r = document.createElement("a");
            r.setAttribute("href", t), e.appendChild(r), n.trigger("load", r)
        }
    }), n.on("load", function (e) {
        if (!e && !n.import) for (var t = document.querySelectorAll("a[data-iframely-url]:not([data-import-uri])"), r = 0; r < t.length; r++) n.trigger("load", t[r])
    }), n.on("load", function (e) {
        e && "A" === e.nodeName && (e.getAttribute("data-iframely-url") || e.getAttribute("href")) && !e.hasAttribute("data-import-uri") && function (e) {
            if (!e.getAttribute("data-iframely-url") && !e.getAttribute("href")) return;
            var t, r = e.getAttribute("data-iframely-url");
            r && /^((?:https?:)?\/\/[^\/]+)\/\w+/i.test(r) ? t = i.getEndpoint(r, {
                v: n.VERSION,
                app: 1
            }) : (n.config.api_key || n.config.key) && n.CDN ? t = i.getEndpoint("/api/iframe", {
                url: e.getAttribute("href"),
                v: n.VERSION,
                app: 1
            }, n.SUPPORTED_QUERY_STRING) : console.warn("Iframely cannot build embeds: api key is required as query-string of embed.js");
            if (t) {
                var a = document.createElement("iframe");
                a.setAttribute("allowfullscreen", ""), a.setAttribute("allow", "autoplay *; encrypted-media *"), e.hasAttribute("data-img") && a.setAttribute("data-img", e.getAttribute("data-img"));
                var o = e.hasAttribute("data-lazy") || e.hasAttribute("data-img") || /&lazy=1/.test(t) || n.config.lazy,
                    d = e.textContent || e.innerText;
                d && "" !== d && (a.textContent = d);
                var s = i.getIframeWrapper(e, !0);
                if (s) for (; s.aspectWrapper.lastChild;) s.aspectWrapper.removeChild(s.aspectWrapper.lastChild); else {
                    s = i.addDefaultWrappers(e);
                    var c = e.parentNode;
                    c.removeChild(e)
                }
                s.aspectWrapper.appendChild(a), o ? (a.setAttribute("data-iframely-url", t), n.trigger("load", a)) : (a.setAttribute("src", t), n.trigger("iframe-ready", a))
            } else e.removeAttribute("data-iframely-url")
        }(e)
    })
}, function (e, t, r) {
    var i = r(1), n = r(0);

    function a(e) {
        var t = e.aspectWrapper && function (e) {
            for (var t = 0, r = 0; r < e.childNodes.length; r++) {
                var i = e.childNodes[r];
                if (i.nodeType === Node.TEXT_NODE) {
                    var n = i.textContent || i.innerText;
                    (n = n.replace(/\s|\n/g, "")) && t++
                } else i.nodeType === Node.ELEMENT_NODE && t++
            }
            return t
        }(e.aspectWrapper) > 1 && function (e, t) {
            for (var r = 0, i = 0; i < t.childNodes.length; i++) {
                var n = t.childNodes[i];
                if (n.nodeType === Node.TEXT_NODE) ; else if (n.nodeType === Node.ELEMENT_NODE) {
                    if (e === r) return n;
                    r++
                }
            }
        }(1, e.aspectWrapper);
        t && "DIV" === t.nodeName && e.aspectWrapper.removeChild(t)
    }

    n.on("load", function (e) {
        if (e && "IFRAME" === e.nodeName && e.hasAttribute("data-iframely-url") && e.hasAttribute("data-img") && !e.getAttribute("src")) {
            e.removeAttribute("data-img");
            var t = i.getWidget(e), r = e.getAttribute("data-iframely-url");
            !function (e, t) {
                var r, a = i.parseQueryString(t), o = {};
                for (var d in a) 0 === d.indexOf("_") && (o[d] = a[d]);
                if (t.match(/\/api\/iframe/)) r = i.getEndpoint(t.match(/^(.+)\/api\/iframe/i)[1] + "/api/thumbnail", Object.assign({
                    url: a.url,
                    api_key: a.api_key,
                    key: a.key
                }, o)); else {
                    if (!t.match(/^(?:https?:)?\/\/[^\/]+\/[a-zA-Z0-9]+(?:\?.*)?$/)) return;
                    r = i.getEndpoint(t.replace(/^((?:https?:)?\/\/[^\/]+\/[a-zA-Z0-9]+)((\?.*)?)$/, "$1/thumbnail"), o)
                }
                var s = document.createElement("div");
                i.setStyles(s, {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('" + r + "')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                });
                var c = document.createElement("div");
                c.setAttribute("class", n.LOADER_CLASS), s.appendChild(c);
                var l = n.getElementComputedStyle(e.aspectWrapper, "padding-top"),
                    u = n.getElementComputedStyle(e.aspectWrapper, "padding-bottom"), p = l.match(/^(\d+)px$/);
                if (p && parseInt(p[1]) && u) {
                    var f = document.createElement("div");
                    i.setStyles(f, {
                        top: "-" + l,
                        width: "100%",
                        height: 0,
                        position: "relative",
                        paddingBottom: u
                    }), f.appendChild(s), e.aspectWrapper.appendChild(f)
                } else e.aspectWrapper.appendChild(s)
            }(t, r), r = i.addQueryString(r, {img: 1}), e.setAttribute("data-iframely-url", r), new c(t), n.trigger("load", e)
        }
    }), n.on("message", function (e, t) {
        var r;
        "widgetRendered" === t.method && (a(e), (r = s(e)) && r.deactivate()), "begin-waiting-widget-render" === t.method && (r = s(e)) && r.clearLoadingTimeout(), "end-waiting-widget-render" === t.method && (r = s(e)) && r.registerLoadingTimeout()
    });
    var o = [];

    function d(e) {
        for (var t = 0; t < o.length && o[t].widget.iframe !== e.iframe;) t++;
        if (t < o.length && o[t].widget.iframe === e.iframe) return t
    }

    function s(e) {
        var t = d(e);
        if (t || 0 === t) return o[t]
    }

    function c(e) {
        this.widget = e, this.loadCount = 0;
        var t = e.iframe, r = this;
        n.addEventListener(t, "load", function () {
            r.iframeOnLoad()
        }), this.registerLoadingTimeout(), o.push(this)
    }

    c.prototype.iframeOnLoad = function () {
        if (this.loadCount++, 2 === this.loadCount) {
            this.deactivate();
            var e = this;
            setTimeout(function () {
                a(e.widget)
            }, n.LAZY_IFRAME_FADE_TIMEOUT)
        }
    }, c.prototype.deactivate = function () {
        var e;
        this.clearLoadingTimeout(), ((e = d(this)) || 0 === e) && o.splice(e, 1)
    }, c.prototype.clearLoadingTimeout = function () {
        this.timeoutId && clearTimeout(this.timeoutId), this.timeoutId = null
    }, c.prototype.registerLoadingTimeout = function () {
        if (!this.timeoutId) {
            var e = this;
            this.timeoutId = setTimeout(function () {
                e.iframeOnLoad()
            }, n.LAZY_IFRAME_SHOW_TIMEOUT)
        }
    }
}, function (e, t, r) {
    var i = r(1), n = r(0);
    n.on("load", function (e) {
        if (!e) for (var t = document.querySelectorAll("iframe[data-iframely-url]"), r = 0; r < t.length; r++) n.trigger("load", t[r])
    }), n.on("load", function (e) {
        e && "IFRAME" === e.nodeName && e.hasAttribute("data-iframely-url") && !e.hasAttribute("data-img") && !e.getAttribute("src") && function (e) {
            var t = i.getWidget(e), r = e.getAttribute("data-iframely-url");
            t && r && (r = i.getEndpoint(r, {lazy: n.config.intersection, v: n.VERSION, app: 1}));
            e.setAttribute("src", r), e.removeAttribute("data-iframely-url"), n.trigger("iframe-ready", e)
        }(e)
    })
}, function (e, t, r) {
    var i = r(0);
    i.on("message", function (e, t) {
        "cancelWidget" === t.method && i.cancelWidget(e)
    }), i.cancelWidget = function (e) {
        if (e) {
            var t = e.maxWidthWrapper && e.maxWidthWrapper.parentNode, r = e.maxWidthWrapper;
            if (i.config && i.config.parent) {
                var n = function (e, t) {
                    for (var r = !1; !r && e.parentNode;) r = (e = e.parentNode).className && e.className.split(" ").indexOf(t) >= 0;
                    return r && e
                }(e.maxWidthWrapper, i.config.parent);
                n && (t = n.parentNode, r = n)
            }
            if (e.url) {
                var a = e.iframe && (e.iframe.textContent || e.iframe.innerText);
                i.triggerAsync("cancel", e.url, t, a, r.nextSibling)
            }
            t.removeChild(r)
        } else console.warn("iframely.cancelWidget called without widget param")
    }
}, function (e, t, r) {
    var i = r(1), n = r(0);
    n.on("message", function (e, t) {
        if ("setIframelyWidgetSize" === t.method || "resize" === t.method || "setIframelyEmbedData" === t.method) {
            var r = null;
            t.data && t.data.media && t.data.media.frame_style ? (t.data.media.frame_style.split(";").forEach(function (e) {
                if ("" !== e.trim() && e.indexOf(":") > -1) {
                    var t = e.split(":");
                    2 === t.length && ((r = r || {})[t[0].trim()] = t[1].trim())
                }
            }), d(e, r)) : "setIframelyEmbedData" === t.method && d(e, null);
            var a = t.data && t.data.media;
            !a && t.height && (a = {height: t.height, "max-width": "keep"}), function (e, t) {
                if (t && Object.keys(t).length > 0 && e) {
                    var r = function (e) {
                            var t = e.iframe && e.iframe.style.border || e.aspectWrapper && e.aspectWrapper.style.border,
                                r = t && t.match(/(\d+)px/) || 0;
                            r && (r = parseInt(r[1]), r *= 2);
                            return r
                        }(e), a = window.getComputedStyle && window.getComputedStyle(e.iframe).getPropertyValue("height"),
                        o = t["max-width"];
                    "number" == typeof o && (o += r), i.setStyles(e.maxWidthWrapper, {
                        "max-width": o,
                        "min-width": t["min-width"] && t["min-width"] + r,
                        width: t.width && t.width + r
                    }), t.scrolling && e.iframe && e.iframe.setAttribute("scrolling", t.scrolling);
                    var d = t["aspect-ratio"];
                    (d || t.height) && i.setStyles(e.aspectWrapper, {
                        paddingBottom: d ? Math.round(1e5 / d) / 1e3 + "%" : 0,
                        paddingTop: d && t["padding-bottom"],
                        height: d ? 0 : t.height && t.height + r
                    });
                    var s = window.getComputedStyle && window.getComputedStyle(e.iframe).getPropertyValue("height");
                    a && a !== s && n.triggerAsync("heightChanged", e.iframe, a, s)
                }
            }(e, a)
        }
    });
    var a = {border: "", "border-radius": "", "box-shadow": "", overflow: ""},
        o = {border: "0", "border-radius": "", "box-shadow": "", overflow: ""};

    function d(e, t) {
        t && e && e.iframe ? t["border-radius"] ? (t.overflow = "hidden", i.setStyles(e.aspectWrapper, t)) : i.setStyles(e.iframe, t) : !t && e && e.iframe && (i.setStyles(e.aspectWrapper, a), i.setStyles(e.iframe, o))
    }
}, function (e, t, r) {
    var i = r(0);
    i.on("message", function (e, t) {
        "open-href" !== t.method && "click" !== t.method || i.trigger(t.method, t.href)
    }), i.on("open-href", function (e) {
        i.triggerAsync("click", e), 0 === e.indexOf(window.location.origin) ? window.location.href = e : window.open(e, "_blank", "noopener")
    })
}, function (e, t, r) {
    var i = r(0);
    i.on("message", function (e, t) {
        "setIframelyEmbedOptions" === t.method && i.trigger("options", e, t.data)
    })
}, function (e, t, r) {
    var i = r(0);
    i.widgets = i.widgets || {}, i.widgets.load = i.load, i.events || (i.events = {}, i.events.on = i.on, i.events.trigger = i.trigger), i.on("cancel", function (e, t, r, i) {
        if (e && t && r && "" !== r) {
            var n = document.createElement("a");
            n.setAttribute("href", e), n.setAttribute("target", "_blank"), n.setAttribute("rel", "noopener"), n.textContent = r, i ? t.insertBefore(n, i) : t.appendChild(n)
        }
    })
}]);

/*Codepen JS*/
!function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }

    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function (t) {
            return e[t]
        }.bind(null, a));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "https://static.codepen.io/assets/packs/", r(r.s = 455)
}({
    455: function (e, t, r) {
        "use strict";
        r.r(t);
        var n = {
            _HTML_TYPES: ["html", "xml", "haml", "markdown", "slim", "pug", "application/x-slim"],
            _CSS_TYPES: ["css", "less", "scss", "sass", "stylus", "postcss", "text/css", "text/x-sass", "text/x-scss", "text/x-less", "text/x-styl"],
            _JS_TYPES: ["js", "javascript", "coffeescript", "livescript", "typescript", "babel", "text/javascript", "text/x-coffeescript", "text/x-livescript", "text/typescript"],
            _CUSTOM_EDITOR_TYPES: {vue: "js", flutter: "js"},
            cmModeToType: function (e) {
                var t = this._getSafeInputMode(e);
                return this._getType(t)
            },
            _getSafeInputMode: function (e) {
                return ("string" == typeof e ? e : e.name).toLowerCase()
            },
            syntaxToType: function (e) {
                return this._getType(e)
            },
            _getType: function (e) {
                return -1 !== this._HTML_TYPES.indexOf(e) ? "html" : -1 !== this._CSS_TYPES.indexOf(e) ? "css" : -1 !== this._JS_TYPES.indexOf(e) ? "js" : this._CUSTOM_EDITOR_TYPES[e] ? this._CUSTOM_EDITOR_TYPES[e] : "unknown"
            }
        }, a = function e(t) {
            "loading" === document.readyState ? setTimeout((function () {
                e(t)
            }), 9) : t()
        }, i = ["title", "description", "tags", "html_classes", "head", "stylesheets", "scripts"], o = function (e) {
            for (var t = {}, r = e.attributes, n = 0, a = r.length; n < a; n++) {
                var i = r[n].name;
                0 === i.indexOf("data-") && (t[i.replace("data-", "")] = r[n].value)
            }
            return t = l(t), u(t) ? (t.user = s(t, e), t) : null
        }, s = function (e, t) {
            if ("string" == typeof e.user) return e.user;
            for (var r = 0, n = t.children.length; r < n; r++) {
                var a = (t.children[r].href || "").match(/codepen\.(io|dev)\/(\w+)\/pen\//i);
                if (a) return a[2]
            }
            return "anon"
        }, u = function (e) {
            return "prefill" in e || e["slug-hash"]
        }, l = function (e) {
            return e.href && (e["slug-hash"] = e.href), e.type && (e["default-tab"] = e.type), e.safe && ("true" === e.safe ? e.animations = "run" : e.animations = "stop-after-5"), e
        }, c = function (e) {
            return e.host ? p(e.host) : "https://codepen.io"
        }, p = function (e) {
            return e.match(/^\/\//) || !e.match(/https?:/) ? document.location.protocol + "//" + e : e
        }, d = function (e) {
            var t = "";
            for (var r in e) "prefill" !== r && ("" !== t && (t += "&"), t += r + "=" + encodeURIComponent(e[r]));
            return t
        }, f = function (e) {
            return e.height ? e.height : 300
        }, m = function (e, t) {
            var r, n = document.createDocumentFragment();
            n.appendChild(v(e)), "prefill" in e && (r = h(e, t), n.appendChild(r)), y(t, n), r && r.submit()
        }, _ = function (e, t) {
            var r = document.createElement(e);
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && r.setAttribute(n, t[n]);
            return r
        }, h = function (e, t) {
            var r = c(e), a = _("form", {
                class: "cp_embed_form",
                style: "display: none;",
                method: "post",
                action: r + "/embed/prefill/",
                target: e.name
            });
            for (var o in e.data = function (e) {
                if (e.hasAttribute("data-prefill")) {
                    var t = {}, r = e.getAttribute("data-prefill");
                    for (var a in r = JSON.parse(decodeURI(r) || "{}")) i.indexOf(a) > -1 && (t[a] = r[a]);
                    for (var o = e.querySelectorAll("[data-lang]"), s = 0; s < o.length; s++) {
                        var u = o[s], l = u.getAttribute("data-lang");
                        u.getAttribute("data-options-autoprefixer") && (t.css_prefix = "autoprefixer");
                        var c = n.syntaxToType(l);
                        t[c] = u.innerText, l !== c && (t[c + "_pre_processor"] = l);
                        var p = u.getAttribute("data-lang-version");
                        p && (t[c + "_version"] = p)
                    }
                    return JSON.stringify(t)
                }
            }(t), e) "prefill" !== o && a.appendChild(_("input", {type: "hidden", name: o, value: e[o]}));
            return a
        }, v = function (e) {
            var t, r = function (e) {
                var t = c(e);
                if ("prefill" in e) return t + "/embed/prefill/";
                var r = d(e);
                return [t, e.user ? e.user : "anon", e.preview && "true" === e.preview ? "embed/preview" : "embed", e["slug-hash"] + "?" + r].join("/").replace(/\/\//g, "//")
            }(e);
            t = e["pen-title"] ? e["pen-title"] : "CodePen Embed";
            var n = {
                name: e.name || "CodePen Embed",
                src: r,
                scrolling: "no",
                frameborder: "0",
                height: f(e),
                allowTransparency: "true",
                allowfullscreen: "true",
                allowpaymentrequest: "true",
                title: t,
                class: "cp_embed_iframe " + (e.class ? e.class : ""),
                style: "width: 100%; overflow:hidden; display:block;",
                loading: "lazy"
            };
            return e["slug-hash"] && (n.id = "cp_embed_" + e["slug-hash"].replace("/", "_")), _("iframe", n)
        }, y = function (e, t) {
            if (e.parentNode) {
                var r = document.createElement("div");
                return r.className = "cp_embed_wrapper", r.appendChild(t), e.parentNode.replaceChild(r, e), r
            }
            return e.appendChild(t), e
        };
        var g = 1;

        function b(e) {
            e = "string" == typeof e ? e : ".codepen";
            for (var t = document.querySelectorAll(e), r = 0, n = t.length; r < n; r++) {
                var a = t[r], i = o(a);
                i && (i.name = "cp_embed_" + g++, m(i, a))
            }
            "function" == typeof __CodePenIFrameAddedToPage && __CodePenIFrameAddedToPage()
        }

        b.readme = "2019-01-18 - added version number back in.", window.__cp_eijs_version = "3.1.0", window.__cp_domReady = a, window.__CPEmbed = b, a(b)
    }
});
