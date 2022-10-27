/*! For license information please see main.d281384b.js.LICENSE.txt */ ! function () {
  var e = {
      998: function (e, t, n) {
        "use strict";
        var r = n(458),
          o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
          };
        e.exports = function (e, t) {
          var n, a, i, l, u, s, c = !1;
          t || (t = {}), n = t.debug || !1;
          try {
            if (i = r(), l = document.createRange(), u = document.getSelection(), (s = document.createElement("span")).textContent = e, s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", (function (r) {
                if (r.stopPropagation(), t.format)
                  if (r.preventDefault(), "undefined" === typeof r.clipboardData) {
                    n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                    var a = o[t.format] || o.default;
                    window.clipboardData.setData(a, e)
                  } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
                t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
              })), document.body.appendChild(s), l.selectNodeContents(s), u.addRange(l), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            c = !0
          } catch (d) {
            n && console.error("unable to copy using execCommand: ", d), n && console.warn("trying IE specific stuff");
            try {
              window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), c = !0
            } catch (d) {
              n && console.error("unable to copy using clipboardData: ", d), n && console.error("falling back to prompt"), a = function (e) {
                var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
                return e.replace(/#{\s*key\s*}/g, t)
              }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e)
            }
          } finally {
            u && ("function" == typeof u.removeRange ? u.removeRange(l) : u.removeAllRanges()), s && document.body.removeChild(s), i()
          }
          return c
        }
      },
      110: function (e, t, n) {
        "use strict";
        var r = n(309),
          o = {
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
            type: !0
          },
          a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
          },
          i = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
          },
          l = {};

        function u(e) {
          return r.isMemo(e) ? i : l[e.$$typeof] || o
        }
        l[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0
        }, l[r.Memo] = i;
        var s = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          d = Object.getOwnPropertySymbols,
          f = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" !== typeof n) {
            if (h) {
              var o = p(n);
              o && o !== h && e(t, o, r)
            }
            var i = c(n);
            d && (i = i.concat(d(n)));
            for (var l = u(t), m = u(n), v = 0; v < i.length; ++v) {
              var g = i[v];
              if (!a[g] && (!r || !r[g]) && (!m || !m[g]) && (!l || !l[g])) {
                var y = f(n, g);
                try {
                  s(t, g, y)
                } catch (b) {}
              }
            }
          }
          return t
        }
      },
      746: function (e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          o = n ? Symbol.for("react.portal") : 60106,
          a = n ? Symbol.for("react.fragment") : 60107,
          i = n ? Symbol.for("react.strict_mode") : 60108,
          l = n ? Symbol.for("react.profiler") : 60114,
          u = n ? Symbol.for("react.provider") : 60109,
          s = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          d = n ? Symbol.for("react.concurrent_mode") : 60111,
          f = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          m = n ? Symbol.for("react.memo") : 60115,
          v = n ? Symbol.for("react.lazy") : 60116,
          g = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          x = n ? Symbol.for("react.scope") : 60119;

        function w(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch (e = e.type) {
                  case c:
                  case d:
                  case a:
                  case l:
                  case i:
                  case p:
                    return e;
                  default:
                    switch (e = e && e.$$typeof) {
                      case s:
                      case f:
                      case v:
                      case m:
                      case u:
                        return e;
                      default:
                        return t
                    }
                }
                case o:
                  return t
            }
          }
        }

        function k(e) {
          return w(e) === d
        }
        t.AsyncMode = c, t.ConcurrentMode = d, t.ContextConsumer = s, t.ContextProvider = u, t.Element = r, t.ForwardRef = f, t.Fragment = a, t.Lazy = v, t.Memo = m, t.Portal = o, t.Profiler = l, t.StrictMode = i, t.Suspense = p, t.isAsyncMode = function (e) {
          return k(e) || w(e) === c
        }, t.isConcurrentMode = k, t.isContextConsumer = function (e) {
          return w(e) === s
        }, t.isContextProvider = function (e) {
          return w(e) === u
        }, t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === r
        }, t.isForwardRef = function (e) {
          return w(e) === f
        }, t.isFragment = function (e) {
          return w(e) === a
        }, t.isLazy = function (e) {
          return w(e) === v
        }, t.isMemo = function (e) {
          return w(e) === m
        }, t.isPortal = function (e) {
          return w(e) === o
        }, t.isProfiler = function (e) {
          return w(e) === l
        }, t.isStrictMode = function (e) {
          return w(e) === i
        }, t.isSuspense = function (e) {
          return w(e) === p
        }, t.isValidElementType = function (e) {
          return "string" === typeof e || "function" === typeof e || e === a || e === d || e === l || e === i || e === p || e === h || "object" === typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === u || e.$$typeof === s || e.$$typeof === f || e.$$typeof === y || e.$$typeof === b || e.$$typeof === x || e.$$typeof === g)
        }, t.typeOf = w
      },
      309: function (e, t, n) {
        "use strict";
        e.exports = n(746)
      },
      198: function (e, t, n) {
        e = n.nmd(e);
        var r = "__lodash_hash_undefined__",
          o = 9007199254740991,
          a = "[object Arguments]",
          i = "[object Function]",
          l = "[object Object]",
          u = /^\[object .+?Constructor\]$/,
          s = /^(?:0|[1-9]\d*)$/,
          c = {};
        c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c[a] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c[i] = c["[object Map]"] = c["[object Number]"] = c[l] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1;
        var d = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          f = "object" == typeof self && self && self.Object === Object && self,
          p = d || f || Function("return this")(),
          h = t && !t.nodeType && t,
          m = h && e && !e.nodeType && e,
          v = m && m.exports === h,
          g = v && d.process,
          y = function () {
            try {
              var e = m && m.require && m.require("util").types;
              return e || g && g.binding && g.binding("util")
            } catch (t) {}
          }(),
          b = y && y.isTypedArray;

        function x(e, t, n) {
          switch (n.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, n[0]);
            case 2:
              return e.call(t, n[0], n[1]);
            case 3:
              return e.call(t, n[0], n[1], n[2])
          }
          return e.apply(t, n)
        }
        var w, k, S = Array.prototype,
          E = Function.prototype,
          C = Object.prototype,
          _ = p["__core-js_shared__"],
          P = E.toString,
          T = C.hasOwnProperty,
          A = function () {
            var e = /[^.]+$/.exec(_ && _.keys && _.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
          }(),
          R = C.toString,
          z = P.call(Object),
          O = RegExp("^" + P.call(T).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          M = v ? p.Buffer : void 0,
          j = p.Symbol,
          L = p.Uint8Array,
          F = M ? M.allocUnsafe : void 0,
          I = (w = Object.getPrototypeOf, k = Object, function (e) {
            return w(k(e))
          }),
          B = Object.create,
          D = C.propertyIsEnumerable,
          N = S.splice,
          V = j ? j.toStringTag : void 0,
          W = function () {
            try {
              var e = he(Object, "defineProperty");
              return e({}, "", {}), e
            } catch (t) {}
          }(),
          U = M ? M.isBuffer : void 0,
          H = Math.max,
          $ = Date.now,
          q = he(p, "Map"),
          Y = he(Object, "create"),
          X = function () {
            function e() {}
            return function (t) {
              if (!_e(t)) return {};
              if (B) return B(t);
              e.prototype = t;
              var n = new e;
              return e.prototype = void 0, n
            }
          }();

        function Q(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
          }
        }

        function G(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
          }
        }

        function K(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
          }
        }

        function Z(e) {
          var t = this.__data__ = new G(e);
          this.size = t.size
        }

        function J(e, t) {
          var n = we(e),
            r = !n && xe(e),
            o = !n && !r && Se(e),
            a = !n && !r && !o && Te(e),
            i = n || r || o || a,
            l = i ? function (e, t) {
              for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
              return r
            }(e.length, String) : [],
            u = l.length;
          for (var s in e) !t && !T.call(e, s) || i && ("length" == s || o && ("offset" == s || "parent" == s) || a && ("buffer" == s || "byteLength" == s || "byteOffset" == s) || me(s, u)) || l.push(s);
          return l
        }

        function ee(e, t, n) {
          (void 0 !== n && !be(e[t], n) || void 0 === n && !(t in e)) && re(e, t, n)
        }

        function te(e, t, n) {
          var r = e[t];
          T.call(e, t) && be(r, n) && (void 0 !== n || t in e) || re(e, t, n)
        }

        function ne(e, t) {
          for (var n = e.length; n--;)
            if (be(e[n][0], t)) return n;
          return -1
        }

        function re(e, t, n) {
          "__proto__" == t && W ? W(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
          }) : e[t] = n
        }
        Q.prototype.clear = function () {
          this.__data__ = Y ? Y(null) : {}, this.size = 0
        }, Q.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t
        }, Q.prototype.get = function (e) {
          var t = this.__data__;
          if (Y) {
            var n = t[e];
            return n === r ? void 0 : n
          }
          return T.call(t, e) ? t[e] : void 0
        }, Q.prototype.has = function (e) {
          var t = this.__data__;
          return Y ? void 0 !== t[e] : T.call(t, e)
        }, Q.prototype.set = function (e, t) {
          var n = this.__data__;
          return this.size += this.has(e) ? 0 : 1, n[e] = Y && void 0 === t ? r : t, this
        }, G.prototype.clear = function () {
          this.__data__ = [], this.size = 0
        }, G.prototype.delete = function (e) {
          var t = this.__data__,
            n = ne(t, e);
          return !(n < 0) && (n == t.length - 1 ? t.pop() : N.call(t, n, 1), --this.size, !0)
        }, G.prototype.get = function (e) {
          var t = this.__data__,
            n = ne(t, e);
          return n < 0 ? void 0 : t[n][1]
        }, G.prototype.has = function (e) {
          return ne(this.__data__, e) > -1
        }, G.prototype.set = function (e, t) {
          var n = this.__data__,
            r = ne(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
        }, K.prototype.clear = function () {
          this.size = 0, this.__data__ = {
            hash: new Q,
            map: new(q || G),
            string: new Q
          }
        }, K.prototype.delete = function (e) {
          var t = pe(this, e).delete(e);
          return this.size -= t ? 1 : 0, t
        }, K.prototype.get = function (e) {
          return pe(this, e).get(e)
        }, K.prototype.has = function (e) {
          return pe(this, e).has(e)
        }, K.prototype.set = function (e, t) {
          var n = pe(this, e),
            r = n.size;
          return n.set(e, t), this.size += n.size == r ? 0 : 1, this
        }, Z.prototype.clear = function () {
          this.__data__ = new G, this.size = 0
        }, Z.prototype.delete = function (e) {
          var t = this.__data__,
            n = t.delete(e);
          return this.size = t.size, n
        }, Z.prototype.get = function (e) {
          return this.__data__.get(e)
        }, Z.prototype.has = function (e) {
          return this.__data__.has(e)
        }, Z.prototype.set = function (e, t) {
          var n = this.__data__;
          if (n instanceof G) {
            var r = n.__data__;
            if (!q || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new K(r)
          }
          return n.set(e, t), this.size = n.size, this
        };
        var oe, ae = function (e, t, n) {
          for (var r = -1, o = Object(e), a = n(e), i = a.length; i--;) {
            var l = a[oe ? i : ++r];
            if (!1 === t(o[l], l, o)) break
          }
          return e
        };

        function ie(e) {
          return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : V && V in Object(e) ? function (e) {
            var t = T.call(e, V),
              n = e[V];
            try {
              e[V] = void 0;
              var r = !0
            } catch (a) {}
            var o = R.call(e);
            r && (t ? e[V] = n : delete e[V]);
            return o
          }(e) : function (e) {
            return R.call(e)
          }(e)
        }

        function le(e) {
          return Pe(e) && ie(e) == a
        }

        function ue(e) {
          return !(!_e(e) || function (e) {
            return !!A && A in e
          }(e)) && (Ee(e) ? O : u).test(function (e) {
            if (null != e) {
              try {
                return P.call(e)
              } catch (t) {}
              try {
                return e + ""
              } catch (t) {}
            }
            return ""
          }(e))
        }

        function se(e) {
          if (!_e(e)) return function (e) {
            var t = [];
            if (null != e)
              for (var n in Object(e)) t.push(n);
            return t
          }(e);
          var t = ve(e),
            n = [];
          for (var r in e)("constructor" != r || !t && T.call(e, r)) && n.push(r);
          return n
        }

        function ce(e, t, n, r, o) {
          e !== t && ae(t, (function (a, i) {
            if (o || (o = new Z), _e(a)) ! function (e, t, n, r, o, a, i) {
              var u = ge(e, n),
                s = ge(t, n),
                c = i.get(s);
              if (c) return void ee(e, n, c);
              var d = a ? a(u, s, n + "", e, t, i) : void 0,
                f = void 0 === d;
              if (f) {
                var p = we(s),
                  h = !p && Se(s),
                  m = !p && !h && Te(s);
                d = s, p || h || m ? we(u) ? d = u : Pe(v = u) && ke(v) ? d = function (e, t) {
                  var n = -1,
                    r = e.length;
                  t || (t = Array(r));
                  for (; ++n < r;) t[n] = e[n];
                  return t
                }(u) : h ? (f = !1, d = function (e, t) {
                  if (t) return e.slice();
                  var n = e.length,
                    r = F ? F(n) : new e.constructor(n);
                  return e.copy(r), r
                }(s, !0)) : m ? (f = !1, d = function (e, t) {
                  var n = t ? function (e) {
                    var t = new e.constructor(e.byteLength);
                    return new L(t).set(new L(e)), t
                  }(e.buffer) : e.buffer;
                  return new e.constructor(n, e.byteOffset, e.length)
                }(s, !0)) : d = [] : function (e) {
                  if (!Pe(e) || ie(e) != l) return !1;
                  var t = I(e);
                  if (null === t) return !0;
                  var n = T.call(t, "constructor") && t.constructor;
                  return "function" == typeof n && n instanceof n && P.call(n) == z
                }(s) || xe(s) ? (d = u, xe(u) ? d = function (e) {
                  return function (e, t, n, r) {
                    var o = !n;
                    n || (n = {});
                    var a = -1,
                      i = t.length;
                    for (; ++a < i;) {
                      var l = t[a],
                        u = r ? r(n[l], e[l], l, n, e) : void 0;
                      void 0 === u && (u = e[l]), o ? re(n, l, u) : te(n, l, u)
                    }
                    return n
                  }(e, Ae(e))
                }(u) : _e(u) && !Ee(u) || (d = function (e) {
                  return "function" != typeof e.constructor || ve(e) ? {} : X(I(e))
                }(s))) : f = !1
              }
              var v;
              f && (i.set(s, d), o(d, s, r, a, i), i.delete(s));
              ee(e, n, d)
            }(e, t, i, n, ce, r, o);
            else {
              var u = r ? r(ge(e, i), a, i + "", e, t, o) : void 0;
              void 0 === u && (u = a), ee(e, i, u)
            }
          }), Ae)
        }

        function de(e, t) {
          return ye(function (e, t, n) {
            return t = H(void 0 === t ? e.length - 1 : t, 0),
              function () {
                for (var r = arguments, o = -1, a = H(r.length - t, 0), i = Array(a); ++o < a;) i[o] = r[t + o];
                o = -1;
                for (var l = Array(t + 1); ++o < t;) l[o] = r[o];
                return l[t] = n(i), x(e, this, l)
              }
          }(e, t, Oe), e + "")
        }
        var fe = W ? function (e, t) {
          return W(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: (n = t, function () {
              return n
            }),
            writable: !0
          });
          var n
        } : Oe;

        function pe(e, t) {
          var n = e.__data__;
          return function (e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
          }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }

        function he(e, t) {
          var n = function (e, t) {
            return null == e ? void 0 : e[t]
          }(e, t);
          return ue(n) ? n : void 0
        }

        function me(e, t) {
          var n = typeof e;
          return !!(t = null == t ? o : t) && ("number" == n || "symbol" != n && s.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        function ve(e) {
          var t = e && e.constructor;
          return e === ("function" == typeof t && t.prototype || C)
        }

        function ge(e, t) {
          if (("constructor" !== t || "function" !== typeof e[t]) && "__proto__" != t) return e[t]
        }
        var ye = function (e) {
          var t = 0,
            n = 0;
          return function () {
            var r = $(),
              o = 16 - (r - n);
            if (n = r, o > 0) {
              if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
          }
        }(fe);

        function be(e, t) {
          return e === t || e !== e && t !== t
        }
        var xe = le(function () {
            return arguments
          }()) ? le : function (e) {
            return Pe(e) && T.call(e, "callee") && !D.call(e, "callee")
          },
          we = Array.isArray;

        function ke(e) {
          return null != e && Ce(e.length) && !Ee(e)
        }
        var Se = U || function () {
          return !1
        };

        function Ee(e) {
          if (!_e(e)) return !1;
          var t = ie(e);
          return t == i || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        }

        function Ce(e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o
        }

        function _e(e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t)
        }

        function Pe(e) {
          return null != e && "object" == typeof e
        }
        var Te = b ? function (e) {
          return function (t) {
            return e(t)
          }
        }(b) : function (e) {
          return Pe(e) && Ce(e.length) && !!c[ie(e)]
        };

        function Ae(e) {
          return ke(e) ? J(e, !0) : se(e)
        }
        var Re, ze = (Re = function (e, t, n, r) {
          ce(e, t, n, r)
        }, de((function (e, t) {
          var n = -1,
            r = t.length,
            o = r > 1 ? t[r - 1] : void 0,
            a = r > 2 ? t[2] : void 0;
          for (o = Re.length > 3 && "function" == typeof o ? (r--, o) : void 0, a && function (e, t, n) {
              if (!_e(n)) return !1;
              var r = typeof t;
              return !!("number" == r ? ke(n) && me(t, n.length) : "string" == r && t in n) && be(n[t], e)
            }(t[0], t[1], a) && (o = r < 3 ? void 0 : o, r = 1), e = Object(e); ++n < r;) {
            var i = t[n];
            i && Re(e, i, n, o)
          }
          return e
        })));

        function Oe(e) {
          return e
        }
        e.exports = ze
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          o = n(296);

        function a(e) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
          return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        var i = new Set,
          l = {};

        function u(e, t) {
          s(e, t), s(e + "Capture", t)
        }

        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e])
        }
        var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
          d = Object.prototype.hasOwnProperty,
          f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};

        function m(e, t, n, r, o, a, i) {
          this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
          v[e] = new m(e, 0, !1, e, null, !1, !1)
        })), [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"]
        ].forEach((function (e) {
          var t = e[0];
          v[t] = new m(t, 1, !1, e[1], null, !1, !1)
        })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
          v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
        })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
          v[e] = new m(e, 2, !1, e, null, !1, !1)
        })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
          v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
        })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
          v[e] = new m(e, 3, !0, e, null, !1, !1)
        })), ["capture", "download"].forEach((function (e) {
          v[e] = new m(e, 4, !1, e, null, !1, !1)
        })), ["cols", "rows", "size", "span"].forEach((function (e) {
          v[e] = new m(e, 6, !1, e, null, !1, !1)
        })), ["rowSpan", "start"].forEach((function (e) {
          v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
        }));
        var g = /[\-:]([a-z])/g;

        function y(e) {
          return e[1].toUpperCase()
        }

        function b(e, t, n, r) {
          var o = v.hasOwnProperty(t) ? v[t] : null;
          (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) {
            if (null === t || "undefined" === typeof t || function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                  default:
                    return !1
                }
              }(e, t, n, r)) return !0;
            if (r) return !1;
            if (null !== n) switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t
            }
            return !1
          }(t, n, o, r) && (n = null), r || null === o ? function (e) {
            return !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0, !1))
          }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
          var t = e.replace(g, y);
          v[t] = new m(t, 1, !1, e, null, !1, !1)
        })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
          var t = e.replace(g, y);
          v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
        })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
          var t = e.replace(g, y);
          v[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
        })), ["tabIndex", "crossOrigin"].forEach((function (e) {
          v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
        })), v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
          v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
        }));
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          P = Symbol.for("react.context"),
          T = Symbol.for("react.forward_ref"),
          A = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          z = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var M = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
        var j = Symbol.iterator;

        function L(e) {
          return null === e || "object" !== typeof e ? null : "function" === typeof (e = j && e[j] || e["@@iterator"]) ? e : null
        }
        var F, I = Object.assign;

        function B(e) {
          if (void 0 === F) try {
            throw Error()
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            F = t && t[1] || ""
          }
          return "\n" + F + e
        }
        var D = !1;

        function N(e, t) {
          if (!e || D) return "";
          D = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (t = function () {
                  throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error()
                  }
                }), "object" === typeof Reflect && Reflect.construct) {
                try {
                  Reflect.construct(t, [])
                } catch (s) {
                  var r = s
                }
                Reflect.construct(e, [], t)
              } else {
                try {
                  t.call()
                } catch (s) {
                  r = s
                }
                e.call(t.prototype)
              }
            else {
              try {
                throw Error()
              } catch (s) {
                r = s
              }
              e()
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (var o = s.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, l = a.length - 1; 1 <= i && 0 <= l && o[i] !== a[l];) l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if (i--, 0 > --l || o[i] !== a[l]) {
                        var u = "\n" + o[i].replace(" at new ", " at ");
                        return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                      }
                    } while (1 <= i && 0 <= l);
                  break
                }
            }
          } finally {
            D = !1, Error.prepareStackTrace = n
          }
          return (e = e ? e.displayName || e.name : "") ? B(e) : ""
        }

        function V(e) {
          switch (e.tag) {
            case 5:
              return B(e.type);
            case 16:
              return B("Lazy");
            case 13:
              return B("Suspense");
            case 19:
              return B("SuspenseList");
            case 0:
            case 2:
            case 15:
              return e = N(e.type, !1);
            case 11:
              return e = N(e.type.render, !1);
            case 1:
              return e = N(e.type, !0);
            default:
              return ""
          }
        }

        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case A:
              return "Suspense";
            case R:
              return "SuspenseList"
          }
          if ("object" === typeof e) switch (e.$$typeof) {
            case P:
              return (e.displayName || "Context") + ".Consumer";
            case _:
              return (e._context.displayName || "Context") + ".Provider";
            case T:
              var t = e.render;
              return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case z:
              return null !== (t = e.displayName || null) ? t : W(e.type) || "Memo";
            case O:
              t = e._payload, e = e._init;
              try {
                return W(e(t))
              } catch (n) {}
          }
          return null
        }

        function U(e) {
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
              return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
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
              return W(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
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
              if ("function" === typeof t) return t.displayName || t.name || null;
              if ("string" === typeof t) return t
          }
          return null
        }

        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return ""
          }
        }

        function $(e) {
          var t = e.type;
          return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
        }

        function q(e) {
          e._valueTracker || (e._valueTracker = function (e) {
            var t = $(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
              var o = n.get,
                a = n.set;
              return Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return o.call(this)
                },
                set: function (e) {
                  r = "" + e, a.call(this, e)
                }
              }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
              }), {
                getValue: function () {
                  return r
                },
                setValue: function (e) {
                  r = "" + e
                },
                stopTracking: function () {
                  e._valueTracker = null, delete e[t]
                }
              }
            }
          }(e))
        }

        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return e && (r = $(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
        }

        function X(e) {
          if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
          try {
            return e.activeElement || e.body
          } catch (t) {
            return e.body
          }
        }

        function Q(e, t) {
          var n = t.checked;
          return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
          })
        }

        function G(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          n = H(null != t.value ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
          }
        }

        function K(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1)
        }

        function Z(e, t) {
          K(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
          t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, H(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
        }

        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
          }
          "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
        }

        function ee(e, t, n) {
          "number" === t && X(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
        }
        var te = Array.isArray;

        function ne(e, t, n, r) {
          if (e = e.options, t) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
          } else {
            for (n = "" + H(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n) return e[o].selected = !0, void(r && (e[o].defaultSelected = !0));
              null !== t || e[o].disabled || (t = e[o])
            }
            null !== t && (t.selected = !0)
          }
        }

        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
          })
        }

        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0]
              }
              t = n
            }
            null == t && (t = ""), n = t
          }
          e._wrapperState = {
            initialValue: H(n)
          }
        }

        function ae(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
        }

        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
        }

        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml"
          }
        }

        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
        }
        var se, ce, de = (ce = function (e, t) {
          if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
          else {
            for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
          }
        }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
          MSApp.execUnsafeLocalFunction((function () {
            return ce(e, t)
          }))
        } : ce);

        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
          }
          e.textContent = t
        }
        var pe = {
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
            strokeWidth: !0
          },
          he = ["Webkit", "ms", "Moz", "O"];

        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
        }

        function ve(e, t) {
          for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = me(n, t[n], r);
              "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
            }
        }
        Object.keys(pe).forEach((function (e) {
          he.forEach((function (t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
          }))
        }));
        var ge = I({
          menuitem: !0
        }, {
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
          wbr: !0
        });

        function ye(e, t) {
          if (t) {
            if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61))
            }
            if (null != t.style && "object" !== typeof t.style) throw Error(a(62))
          }
        }

        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
              return !0
          }
        }
        var xe = null;

        function we(e) {
          return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
        }
        var ke = null,
          Se = null,
          Ee = null;

        function Ce(e) {
          if (e = xo(e)) {
            if ("function" !== typeof ke) throw Error(a(280));
            var t = e.stateNode;
            t && (t = ko(t), ke(e.stateNode, e.type, t))
          }
        }

        function _e(e) {
          Se ? Ee ? Ee.push(e) : Ee = [e] : Se = e
        }

        function Pe() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (Ee = Se = null, Ce(e), t)
              for (e = 0; e < t.length; e++) Ce(t[e])
          }
        }

        function Te(e, t) {
          return e(t)
        }

        function Ae() {}
        var Re = !1;

        function ze(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return Te(e, t, n)
          } finally {
            Re = !1, (null !== Se || null !== Ee) && (Ae(), Pe())
          }
        }

        function Oe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ko(n);
          if (null === r) return null;
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
              (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
              break e;
            default:
              e = !1
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n
        }
        var Me = !1;
        if (c) try {
          var je = {};
          Object.defineProperty(je, "passive", {
            get: function () {
              Me = !0
            }
          }), window.addEventListener("test", je, je), window.removeEventListener("test", je, je)
        } catch (ce) {
          Me = !1
        }

        function Le(e, t, n, r, o, a, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s)
          } catch (c) {
            this.onError(c)
          }
        }
        var Fe = !1,
          Ie = null,
          Be = !1,
          De = null,
          Ne = {
            onError: function (e) {
              Fe = !0, Ie = e
            }
          };

        function Ve(e, t, n, r, o, a, i, l, u) {
          Fe = !1, Ie = null, Le.apply(Ne, arguments)
        }

        function We(e) {
          var t = e,
            n = e;
          if (e.alternate)
            for (; t.return;) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
            } while (e)
          }
          return 3 === t.tag ? n : null
        }

        function Ue(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
          }
          return null
        }

        function He(e) {
          if (We(e) !== e) throw Error(a(188))
        }

        function $e(e) {
          return null !== (e = function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = We(e))) throw Error(a(188));
              return t !== e ? null : e
            }
            for (var n = e, r = t;;) {
              var o = n.return;
              if (null === o) break;
              var i = o.alternate;
              if (null === i) {
                if (null !== (r = o.return)) {
                  n = r;
                  continue
                }
                break
              }
              if (o.child === i.child) {
                for (i = o.child; i;) {
                  if (i === n) return He(o), e;
                  if (i === r) return He(o), t;
                  i = i.sibling
                }
                throw Error(a(188))
              }
              if (n.return !== r.return) n = o, r = i;
              else {
                for (var l = !1, u = o.child; u;) {
                  if (u === n) {
                    l = !0, n = o, r = i;
                    break
                  }
                  if (u === r) {
                    l = !0, r = o, n = i;
                    break
                  }
                  u = u.sibling
                }
                if (!l) {
                  for (u = i.child; u;) {
                    if (u === n) {
                      l = !0, n = i, r = o;
                      break
                    }
                    if (u === r) {
                      l = !0, r = i, n = o;
                      break
                    }
                    u = u.sibling
                  }
                  if (!l) throw Error(a(189))
                }
              }
              if (n.alternate !== r) throw Error(a(190))
            }
            if (3 !== n.tag) throw Error(a(188));
            return n.stateNode.current === n ? e : t
          }(e)) ? qe(e) : null
        }

        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e;) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling
          }
          return null
        }
        var Ye = o.unstable_scheduleCallback,
          Xe = o.unstable_cancelCallback,
          Qe = o.unstable_shouldYield,
          Ge = o.unstable_requestPaint,
          Ke = o.unstable_now,
          Ze = o.unstable_getCurrentPriorityLevel,
          Je = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32 ? Math.clz32 : function (e) {
            return 0 === (e >>>= 0) ? 32 : 31 - (lt(e) / ut | 0) | 0
          },
          lt = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;

        function dt(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e
          }
        }

        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~o;
            0 !== l ? r = dt(l) : 0 !== (a &= i) && (r = dt(a))
          } else 0 !== (i = n & ~o) ? r = dt(i) : 0 !== a && (r = dt(a));
          if (0 === r) return 0;
          if (0 !== t && t !== r && 0 === (t & o) && ((o = r & -r) >= (a = t & -t) || 16 === o && 0 !== (4194240 & a))) return t;
          if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - it(t)), r |= e[n], t &= ~o;
          return r
        }

        function pt(e, t) {
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
            default:
              return -1
          }
        }

        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
        }

        function mt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e
        }

        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t
        }

        function gt(e, t, n) {
          e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n
        }

        function yt(e, t) {
          var n = e.entangledLanes |= t;
          for (e = e.entanglements; n;) {
            var r = 31 - it(n),
              o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o
          }
        }
        var bt = 0;

        function xt(e) {
          return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
        }
        var wt, kt, St, Et, Ct, _t = !1,
          Pt = [],
          Tt = null,
          At = null,
          Rt = null,
          zt = new Map,
          Ot = new Map,
          Mt = [],
          jt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

        function Lt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Tt = null;
              break;
            case "dragenter":
            case "dragleave":
              At = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              zt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ot.delete(t.pointerId)
          }
        }

        function Ft(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [o]
          }, null !== t && (null !== (t = xo(t)) && kt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
        }

        function It(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ue(n))) return e.blockedOn = t, void Ct(e.priority, (function () {
                  St(n)
                }))
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
          }
          e.blockedOn = null
        }

        function Bt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length;) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = xo(n)) && kt(t), e.blockedOn = n, !1;
            var r = new(n = e.nativeEvent).constructor(n.type, n);
            xe = r, n.target.dispatchEvent(r), xe = null, t.shift()
          }
          return !0
        }

        function Dt(e, t, n) {
          Bt(e) && n.delete(t)
        }

        function Nt() {
          _t = !1, null !== Tt && Bt(Tt) && (Tt = null), null !== At && Bt(At) && (At = null), null !== Rt && Bt(Rt) && (Rt = null), zt.forEach(Dt), Ot.forEach(Dt)
        }

        function Vt(e, t) {
          e.blockedOn === t && (e.blockedOn = null, _t || (_t = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Nt)))
        }

        function Wt(e) {
          function t(t) {
            return Vt(t, e)
          }
          if (0 < Pt.length) {
            Vt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null)
            }
          }
          for (null !== Tt && Vt(Tt, e), null !== At && Vt(At, e), null !== Rt && Vt(Rt, e), zt.forEach(t), Ot.forEach(t), n = 0; n < Mt.length; n++)(r = Mt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn;) It(n), null === n.blockedOn && Mt.shift()
        }
        var Ut = x.ReactCurrentBatchConfig,
          Ht = !0;

        function $t(e, t, n, r) {
          var o = bt,
            a = Ut.transition;
          Ut.transition = null;
          try {
            bt = 1, Yt(e, t, n, r)
          } finally {
            bt = o, Ut.transition = a
          }
        }

        function qt(e, t, n, r) {
          var o = bt,
            a = Ut.transition;
          Ut.transition = null;
          try {
            bt = 4, Yt(e, t, n, r)
          } finally {
            bt = o, Ut.transition = a
          }
        }

        function Yt(e, t, n, r) {
          if (Ht) {
            var o = Qt(e, t, n, r);
            if (null === o) Hr(e, t, r, Xt, n), Lt(e, r);
            else if (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return Tt = Ft(Tt, e, t, n, r, o), !0;
                  case "dragenter":
                    return At = Ft(At, e, t, n, r, o), !0;
                  case "mouseover":
                    return Rt = Ft(Rt, e, t, n, r, o), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return zt.set(a, Ft(zt.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return a = o.pointerId, Ot.set(a, Ft(Ot.get(a) || null, e, t, n, r, o)), !0
                }
                return !1
              }(o, e, t, n, r)) r.stopPropagation();
            else if (Lt(e, r), 4 & t && -1 < jt.indexOf(e)) {
              for (; null !== o;) {
                var a = xo(o);
                if (null !== a && wt(a), null === (a = Qt(e, t, n, r)) && Hr(e, t, r, Xt, n), a === o) break;
                o = a
              }
              null !== o && r.stopPropagation()
            } else Hr(e, t, r, null, n)
          }
        }
        var Xt = null;

        function Qt(e, t, n, r) {
          if (Xt = null, null !== (e = bo(e = we(r))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
            if (null !== (e = Ue(t))) return e;
            e = null
          } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null
          } else t !== e && (e = null);
          return Xt = e, null
        }

        function Gt(e) {
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
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16
              }
              default:
                return 16
          }
        }
        var Kt = null,
          Zt = null,
          Jt = null;

        function en() {
          if (Jt) return Jt;
          var e, t, n = Zt,
            r = n.length,
            o = "value" in Kt ? Kt.value : Kt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return Jt = o.slice(e, 1 < t ? 1 - t : void 0)
        }

        function tn(e) {
          var t = e.keyCode;
          return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
        }

        function nn() {
          return !0
        }

        function rn() {
          return !1
        }

        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
            return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
          }
          return I(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
            },
            persist: function () {},
            isPersistent: nn
          }), t
        }
        var an, ln, un, sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
          },
          cn = on(sn),
          dn = I({}, sn, {
            view: 0,
            detail: 0
          }),
          fn = on(dn),
          pn = I({}, dn, {
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
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function (e) {
              return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (an = e.screenX - un.screenX, ln = e.screenY - un.screenY) : ln = an = 0, un = e), an)
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln
            }
          }),
          hn = on(pn),
          mn = on(I({}, pn, {
            dataTransfer: 0
          })),
          vn = on(I({}, dn, {
            relatedTarget: 0
          })),
          gn = on(I({}, sn, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
          })),
          yn = I({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
          }),
          bn = on(yn),
          xn = on(I({}, sn, {
            data: 0
          })),
          wn = {
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
            MozPrintableKey: "Unidentified"
          },
          kn = {
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
            224: "Meta"
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
          };

        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]
        }

        function Cn() {
          return En
        }
        var _n = I({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t
              }
              return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function (e) {
              return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
          }),
          Pn = on(_n),
          Tn = on(I({}, pn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
          })),
          An = on(I({}, dn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Cn
          })),
          Rn = on(I({}, sn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
          })),
          zn = I({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function (e) {
              return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
          }),
          On = on(zn),
          Mn = [9, 13, 27, 32],
          jn = c && "CompositionEvent" in window,
          Ln = null;
        c && "documentMode" in document && (Ln = document.documentMode);
        var Fn = c && "TextEvent" in window && !Ln,
          In = c && (!jn || Ln && 8 < Ln && 11 >= Ln),
          Bn = String.fromCharCode(32),
          Dn = !1;

        function Nn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Mn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1
          }
        }

        function Vn(e) {
          return "object" === typeof (e = e.detail) && "data" in e ? e.data : null
        }
        var Wn = !1;
        var Un = {
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
          week: !0
        };

        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Un[e.type] : "textarea" === t
        }

        function $n(e, t, n, r) {
          _e(r), 0 < (t = qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
          }))
        }
        var qn = null,
          Yn = null;

        function Xn(e) {
          Br(e, 0)
        }

        function Qn(e) {
          if (Y(wo(e))) return e
        }

        function Gn(e, t) {
          if ("change" === e) return t
        }
        var Kn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"), Jn = "function" === typeof er.oninput
            }
            Zn = Jn
          } else Zn = !1;
          Kn = Zn && (!document.documentMode || 9 < document.documentMode)
        }

        function tr() {
          qn && (qn.detachEvent("onpropertychange", nr), Yn = qn = null)
        }

        function nr(e) {
          if ("value" === e.propertyName && Qn(Yn)) {
            var t = [];
            $n(t, Yn, e, we(e)), ze(Xn, t)
          }
        }

        function rr(e, t, n) {
          "focusin" === e ? (tr(), Yn = n, (qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
        }

        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Qn(Yn)
        }

        function ar(e, t) {
          if ("click" === e) return Qn(t)
        }

        function ir(e, t) {
          if ("input" === e || "change" === e) return Qn(t)
        }
        var lr = "function" === typeof Object.is ? Object.is : function (e, t) {
          return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
        };

        function ur(e, t) {
          if (lr(e, t)) return !0;
          if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!d.call(t, o) || !lr(e[o], t[o])) return !1
          }
          return !0
        }

        function sr(e) {
          for (; e && e.firstChild;) e = e.firstChild;
          return e
        }

        function cr(e, t) {
          var n, r = sr(e);
          for (e = 0; r;) {
            if (3 === r.nodeType) {
              if (n = e + r.textContent.length, e <= t && n >= t) return {
                node: r,
                offset: t - e
              };
              e = n
            }
            e: {
              for (; r;) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e
                }
                r = r.parentNode
              }
              r = void 0
            }
            r = sr(r)
          }
        }

        function dr(e, t) {
          return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
        }

        function fr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement;) {
            try {
              var n = "string" === typeof t.contentWindow.location.href
            } catch (r) {
              n = !1
            }
            if (!n) break;
            t = X((e = t.contentWindow).document)
          }
          return t
        }

        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
        }

        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
              if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
              else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
              e = e.getSelection();
              var o = n.textContent.length,
                a = Math.min(r.start, o);
              r = void 0 === r.end ? a : Math.min(r.end, o), !e.extend && a > r && (o = r, r = a, a = o), o = cr(n, a);
              var i = cr(n, r);
              o && i && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
            for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
              element: e,
              left: e.scrollLeft,
              top: e.scrollTop
            });
            for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;

        function xr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          br || null == vr || vr !== X(r) || ("selectionStart" in (r = vr) && pr(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
          } : r = {
            anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
          }, yr && ur(yr, r) || (yr = r, 0 < (r = qr(gr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
          }), t.target = vr)))
        }

        function wr(e, t) {
          var n = {};
          return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd")
          },
          Sr = {},
          Er = {};

        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t, n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return Sr[e] = n[t];
          return e
        }
        c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
        var _r = Cr("animationend"),
          Pr = Cr("animationiteration"),
          Tr = Cr("animationstart"),
          Ar = Cr("transitionend"),
          Rr = new Map,
          zr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

        function Or(e, t) {
          Rr.set(e, t), u(t, [e])
        }
        for (var Mr = 0; Mr < zr.length; Mr++) {
          var jr = zr[Mr];
          Or(jr.toLowerCase(), "on" + (jr[0].toUpperCase() + jr.slice(1)))
        }
        Or(_r, "onAnimationEnd"), Or(Pr, "onAnimationIteration"), Or(Tr, "onAnimationStart"), Or("dblclick", "onDoubleClick"), Or("focusin", "onFocus"), Or("focusout", "onBlur"), Or(Ar, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
          Fr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));

        function Ir(e, t, n) {
          var r = e.type || "unknown-event";
          e.currentTarget = n,
            function (e, t, n, r, o, i, l, u, s) {
              if (Ve.apply(this, arguments), Fe) {
                if (!Fe) throw Error(a(198));
                var c = Ie;
                Fe = !1, Ie = null, Be || (Be = !0, De = c)
              }
            }(r, t, void 0, e), e.currentTarget = null
        }

        function Br(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    u = l.instance,
                    s = l.currentTarget;
                  if (l = l.listener, u !== a && o.isPropagationStopped()) break e;
                  Ir(o, l, s), a = u
                } else
                  for (i = 0; i < r.length; i++) {
                    if (u = (l = r[i]).instance, s = l.currentTarget, l = l.listener, u !== a && o.isPropagationStopped()) break e;
                    Ir(o, l, s), a = u
                  }
            }
          }
          if (Be) throw e = De, Be = !1, De = null, e
        }

        function Dr(e, t) {
          var n = t[vo];
          void 0 === n && (n = t[vo] = new Set);
          var r = e + "__bubble";
          n.has(r) || (Ur(t, e, 2, !1), n.add(r))
        }

        function Nr(e, t, n) {
          var r = 0;
          t && (r |= 4), Ur(n, e, r, t)
        }
        var Vr = "_reactListening" + Math.random().toString(36).slice(2);

        function Wr(e) {
          if (!e[Vr]) {
            e[Vr] = !0, i.forEach((function (t) {
              "selectionchange" !== t && (Fr.has(t) || Nr(t, !1, e), Nr(t, !0, e))
            }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Vr] || (t[Vr] = !0, Nr("selectionchange", !1, t))
          }
        }

        function Ur(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var o = $t;
              break;
            case 4:
              o = qt;
              break;
            default:
              o = Yt
          }
          n = o.bind(null, t, n, e), o = void 0, !Me || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
          }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
            passive: o
          }) : e.addEventListener(t, n, !1)
        }

        function Hr(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
            if (null === r) return;
            var i = r.tag;
            if (3 === i || 4 === i) {
              var l = r.stateNode.containerInfo;
              if (l === o || 8 === l.nodeType && l.parentNode === o) break;
              if (4 === i)
                for (i = r.return; null !== i;) {
                  var u = i.tag;
                  if ((3 === u || 4 === u) && ((u = i.stateNode.containerInfo) === o || 8 === u.nodeType && u.parentNode === o)) return;
                  i = i.return
                }
              for (; null !== l;) {
                if (null === (i = bo(l))) return;
                if (5 === (u = i.tag) || 6 === u) {
                  r = a = i;
                  continue e
                }
                l = l.parentNode
              }
            }
            r = r.return
          }
          ze((function () {
            var r = a,
              o = we(n),
              i = [];
            e: {
              var l = Rr.get(e);
              if (void 0 !== l) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Pn;
                    break;
                  case "focusin":
                    s = "focus", u = vn;
                    break;
                  case "focusout":
                    s = "blur", u = vn;
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = An;
                    break;
                  case _r:
                  case Pr:
                  case Tr:
                    u = gn;
                    break;
                  case Ar:
                    u = Rn;
                    break;
                  case "scroll":
                    u = fn;
                    break;
                  case "wheel":
                    u = On;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Tn
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? null !== l ? l + "Capture" : null : l;
                c = [];
                for (var p, h = r; null !== h;) {
                  var m = (p = h).stateNode;
                  if (5 === p.tag && null !== m && (p = m, null !== f && (null != (m = Oe(h, f)) && c.push($r(h, m, p)))), d) break;
                  h = h.return
                }
                0 < c.length && (l = new u(l, s, null, n, o), i.push({
                  event: l,
                  listeners: c
                }))
              }
            }
            if (0 === (7 & t)) {
              if (u = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === xe || !(s = n.relatedTarget || n.fromElement) || !bo(s) && !s[mo]) && (u || l) && (l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? bo(s) : null) && (s !== (d = We(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                if (c = hn, m = "onMouseLeave", f = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Tn, m = "onPointerLeave", f = "onPointerEnter", h = "pointer"), d = null == u ? l : wo(u), p = null == s ? l : wo(s), (l = new c(m, h + "leave", u, n, o)).target = d, l.relatedTarget = p, m = null, bo(o) === r && ((c = new c(f, h + "enter", s, n, o)).target = p, c.relatedTarget = d, m = c), d = m, u && s) e: {
                  for (f = s, h = 0, p = c = u; p; p = Yr(p)) h++;
                  for (p = 0, m = f; m; m = Yr(m)) p++;
                  for (; 0 < h - p;) c = Yr(c),
                  h--;
                  for (; 0 < p - h;) f = Yr(f),
                  p--;
                  for (; h--;) {
                    if (c === f || null !== f && c === f.alternate) break e;
                    c = Yr(c), f = Yr(f)
                  }
                  c = null
                }
                else c = null;
                null !== u && Xr(i, l, u, c, !1), null !== s && null !== d && Xr(i, d, s, c, !0)
              }
              if ("select" === (u = (l = r ? wo(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type) var v = Gn;
              else if (Hn(l))
                if (Kn) v = ir;
                else {
                  v = or;
                  var g = rr
                }
              else(u = l.nodeName) && "input" === u.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (v = ar);
              switch (v && (v = v(e, r)) ? $n(i, v, n, o) : (g && g(e, l, r), "focusout" === e && (g = l._wrapperState) && g.controlled && "number" === l.type && ee(l, "number", l.value)), g = r ? wo(r) : window, e) {
                case "focusin":
                  (Hn(g) || "true" === g.contentEditable) && (vr = g, gr = r, yr = null);
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  br = !1, xr(i, n, o);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  xr(i, n, o)
              }
              var y;
              if (jn) e: {
                switch (e) {
                  case "compositionstart":
                    var b = "onCompositionStart";
                    break e;
                  case "compositionend":
                    b = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    b = "onCompositionUpdate";
                    break e
                }
                b = void 0
              }
              else Wn ? Nn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
              b && (In && "ko" !== n.locale && (Wn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Wn && (y = en()) : (Zt = "value" in (Kt = o) ? Kt.value : Kt.textContent, Wn = !0)), 0 < (g = qr(r, b)).length && (b = new xn(b, e, null, n, o), i.push({
                event: b,
                listeners: g
              }), y ? b.data = y : null !== (y = Vn(n)) && (b.data = y))), (y = Fn ? function (e, t) {
                switch (e) {
                  case "compositionend":
                    return Vn(t);
                  case "keypress":
                    return 32 !== t.which ? null : (Dn = !0, Bn);
                  case "textInput":
                    return (e = t.data) === Bn && Dn ? null : e;
                  default:
                    return null
                }
              }(e, n) : function (e, t) {
                if (Wn) return "compositionend" === e || !jn && Nn(e, t) ? (e = en(), Jt = Zt = Kt = null, Wn = !1, e) : null;
                switch (e) {
                  case "paste":
                  default:
                    return null;
                  case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                      if (t.char && 1 < t.char.length) return t.char;
                      if (t.which) return String.fromCharCode(t.which)
                    }
                    return null;
                  case "compositionend":
                    return In && "ko" !== t.locale ? null : t.data
                }
              }(e, n)) && (0 < (r = qr(r, "onBeforeInput")).length && (o = new xn("onBeforeInput", "beforeinput", null, n, o), i.push({
                event: o,
                listeners: r
              }), o.data = y))
            }
            Br(i, t)
          }))
        }

        function $r(e, t, n) {
          return {
            instance: e,
            listener: t,
            currentTarget: n
          }
        }

        function qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e;) {
            var o = e,
              a = o.stateNode;
            5 === o.tag && null !== a && (o = a, null != (a = Oe(e, n)) && r.unshift($r(e, a, o)), null != (a = Oe(e, t)) && r.push($r(e, a, o))), e = e.return
          }
          return r
        }

        function Yr(e) {
          if (null === e) return null;
          do {
            e = e.return
          } while (e && 5 !== e.tag);
          return e || null
        }

        function Xr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r;) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag && null !== s && (l = s, o ? null != (u = Oe(n, a)) && i.unshift($r(n, u, l)) : o || null != (u = Oe(n, a)) && i.push($r(n, u, l))), n = n.return
          }
          0 !== i.length && e.push({
            event: t,
            listeners: i
          })
        }
        var Qr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;

        function Kr(e) {
          return ("string" === typeof e ? e : "" + e).replace(Qr, "\n").replace(Gr, "")
        }

        function Zr(e, t, n) {
          if (t = Kr(t), Kr(e) !== t && n) throw Error(a(425))
        }

        function Jr() {}
        var eo = null,
          to = null;

        function no(e, t) {
          return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
        }
        var ro = "function" === typeof setTimeout ? setTimeout : void 0,
          oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ao = "function" === typeof Promise ? Promise : void 0,
          io = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ao ? function (e) {
            return ao.resolve(null).then(e).catch(lo)
          } : ro;

        function lo(e) {
          setTimeout((function () {
            throw e
          }))
        }

        function uo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if (e.removeChild(n), o && 8 === o.nodeType)
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Wt(t);
                r--
              } else "$" !== n && "$?" !== n && "$!" !== n || r++;
            n = o
          } while (n);
          Wt(t)
        }

        function so(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null
            }
          }
          return e
        }

        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e;) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--
              } else "/$" === n && t++
            }
            e = e.previousSibling
          }
          return null
        }
        var fo = Math.random().toString(36).slice(2),
          po = "__reactFiber$" + fo,
          ho = "__reactProps$" + fo,
          mo = "__reactContainer$" + fo,
          vo = "__reactEvents$" + fo,
          go = "__reactListeners$" + fo,
          yo = "__reactHandles$" + fo;

        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n;) {
            if (t = n[mo] || n[po]) {
              if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                for (e = co(e); null !== e;) {
                  if (n = e[po]) return n;
                  e = co(e)
                }
              return t
            }
            n = (e = n).parentNode
          }
          return null
        }

        function xo(e) {
          return !(e = e[po] || e[mo]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
        }

        function wo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33))
        }

        function ko(e) {
          return e[ho] || null
        }
        var So = [],
          Eo = -1;

        function Co(e) {
          return {
            current: e
          }
        }

        function _o(e) {
          0 > Eo || (e.current = So[Eo], So[Eo] = null, Eo--)
        }

        function Po(e, t) {
          Eo++, So[Eo] = e.current, e.current = t
        }
        var To = {},
          Ao = Co(To),
          Ro = Co(!1),
          zo = To;

        function Oo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return To;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
          var o, a = {};
          for (o in n) a[o] = t[o];
          return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
        }

        function Mo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e
        }

        function jo() {
          _o(Ro), _o(Ao)
        }

        function Lo(e, t, n) {
          if (Ao.current !== To) throw Error(a(168));
          Po(Ao, t), Po(Ro, n)
        }

        function Fo(e, t, n) {
          var r = e.stateNode;
          if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
          for (var o in r = r.getChildContext())
            if (!(o in t)) throw Error(a(108, U(e) || "Unknown", o));
          return I({}, n, r)
        }

        function Io(e) {
          return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || To, zo = Ao.current, Po(Ao, e), Po(Ro, Ro.current), !0
        }

        function Bo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n ? (e = Fo(e, t, zo), r.__reactInternalMemoizedMergedChildContext = e, _o(Ro), _o(Ao), Po(Ao, e)) : _o(Ro), Po(Ro, n)
        }
        var Do = null,
          No = !1,
          Vo = !1;

        function Wo(e) {
          null === Do ? Do = [e] : Do.push(e)
        }

        function Uo() {
          if (!Vo && null !== Do) {
            Vo = !0;
            var e = 0,
              t = bt;
            try {
              var n = Do;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0)
                } while (null !== r)
              }
              Do = null, No = !1
            } catch (o) {
              throw null !== Do && (Do = Do.slice(e + 1)), Ye(Je, Uo), o
            } finally {
              bt = t, Vo = !1
            }
          }
          return null
        }
        var Ho = [],
          $o = 0,
          qo = null,
          Yo = 0,
          Xo = [],
          Qo = 0,
          Go = null,
          Ko = 1,
          Zo = "";

        function Jo(e, t) {
          Ho[$o++] = Yo, Ho[$o++] = qo, qo = e, Yo = t
        }

        function ea(e, t, n) {
          Xo[Qo++] = Ko, Xo[Qo++] = Zo, Xo[Qo++] = Go, Go = e;
          var r = Ko;
          e = Zo;
          var o = 32 - it(r) - 1;
          r &= ~(1 << o), n += 1;
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - o % 5;
            a = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Ko = 1 << 32 - it(t) + o | n << o | r, Zo = a + e
          } else Ko = 1 << a | n << o | r, Zo = e
        }

        function ta(e) {
          null !== e.return && (Jo(e, 1), ea(e, 1, 0))
        }

        function na(e) {
          for (; e === qo;) qo = Ho[--$o], Ho[$o] = null, Yo = Ho[--$o], Ho[$o] = null;
          for (; e === Go;) Go = Xo[--Qo], Xo[Qo] = null, Zo = Xo[--Qo], Xo[Qo] = null, Ko = Xo[--Qo], Xo[Qo] = null
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null;

        function la(e, t) {
          var n = zs(5, null, null, 0);
          n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
        }

        function ua(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ra = e, oa = so(t.firstChild), !0);
            case 6:
              return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ra = e, oa = null, !0);
            case 13:
              return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Go ? {
                id: Ko,
                overflow: Zo
              } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
              }, (n = zs(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ra = e, oa = null, !0);
            default:
              return !1
          }
        }

        function sa(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
        }

        function ca(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var n = t;
              if (!ua(e, t)) {
                if (sa(e)) throw Error(a(418));
                t = so(n.nextSibling);
                var r = ra;
                t && ua(e, t) ? la(r, n) : (e.flags = -4097 & e.flags | 2, aa = !1, ra = e)
              }
            } else {
              if (sa(e)) throw Error(a(418));
              e.flags = -4097 & e.flags | 2, aa = !1, ra = e
            }
          }
        }

        function da(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
          ra = e
        }

        function fa(e) {
          if (e !== ra) return !1;
          if (!aa) return da(e), aa = !0, !1;
          var t;
          if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !no(e.type, e.memoizedProps)), t && (t = oa)) {
            if (sa(e)) throw pa(), Error(a(418));
            for (; t;) la(e, t), t = so(t.nextSibling)
          }
          if (da(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e;) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      oa = so(e.nextSibling);
                      break e
                    }
                    t--
                  } else "$" !== n && "$!" !== n && "$?" !== n || t++
                }
                e = e.nextSibling
              }
              oa = null
            }
          } else oa = ra ? so(e.stateNode.nextSibling) : null;
          return !0
        }

        function pa() {
          for (var e = oa; e;) e = so(e.nextSibling)
        }

        function ha() {
          oa = ra = null, aa = !1
        }

        function ma(e) {
          null === ia ? ia = [e] : ia.push(e)
        }
        var va = x.ReactCurrentBatchConfig;

        function ga(e, t) {
          if (e && e.defaultProps) {
            for (var n in t = I({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
            return t
          }
          return t
        }
        var ya = Co(null),
          ba = null,
          xa = null,
          wa = null;

        function ka() {
          wa = xa = ba = null
        }

        function Sa(e) {
          var t = ya.current;
          _o(ya), e._currentValue = t
        }

        function Ea(e, t, n) {
          for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return
          }
        }

        function Ca(e, t) {
          ba = e, wa = xa = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (xl = !0), e.firstContext = null)
        }

        function _a(e) {
          var t = e._currentValue;
          if (wa !== e)
            if (e = {
                context: e,
                memoizedValue: t,
                next: null
              }, null === xa) {
              if (null === ba) throw Error(a(308));
              xa = e, ba.dependencies = {
                lanes: 0,
                firstContext: e
              }
            } else xa = xa.next = e;
          return t
        }
        var Pa = null;

        function Ta(e) {
          null === Pa ? Pa = [e] : Pa.push(e)
        }

        function Aa(e, t, n, r) {
          var o = t.interleaved;
          return null === o ? (n.next = n, Ta(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ra(e, r)
        }

        function Ra(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
          return 3 === n.tag ? n.stateNode : null
        }
        var za = !1;

        function Oa(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
              pending: null,
              interleaved: null,
              lanes: 0
            },
            effects: null
          }
        }

        function Ma(e, t) {
          e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
          })
        }

        function ja(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
          }
        }

        function La(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (r = r.shared, 0 !== (2 & Tu)) {
            var o = r.pending;
            return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ra(e, n)
          }
          return null === (o = r.interleaved) ? (t.next = t, Ta(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ra(e, n)
        }

        function Fa(e, t, n) {
          if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
          }
        }

        function Ia(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null
                };
                null === a ? o = a = i : a = a.next = i, n = n.next
              } while (null !== n);
              null === a ? o = a = t : a = a.next = t
            } else o = a = t;
            return n = {
              baseState: r.baseState,
              firstBaseUpdate: o,
              lastBaseUpdate: a,
              shared: r.shared,
              effects: r.effects
            }, void(e.updateQueue = n)
          }
          null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
        }

        function Ba(e, t, n, r) {
          var o = e.updateQueue;
          za = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var u = l,
              s = u.next;
            u.next = null, null === i ? a = s : i.next = s, i = u;
            var c = e.alternate;
            null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== i && (null === l ? c.firstBaseUpdate = s : l.next = s, c.lastBaseUpdate = u))
          }
          if (null !== a) {
            var d = o.baseState;
            for (i = 0, c = s = u = null, l = a;;) {
              var f = l.lane,
                p = l.eventTime;
              if ((r & f) === f) {
                null !== c && (c = c.next = {
                  eventTime: p,
                  lane: 0,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null
                });
                e: {
                  var h = e,
                    m = l;
                  switch (f = t, p = n, m.tag) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = -65537 & h.flags | 128;
                    case 0:
                      if (null === (f = "function" === typeof (h = m.payload) ? h.call(p, d, f) : h) || void 0 === f) break e;
                      d = I({}, d, f);
                      break e;
                    case 2:
                      za = !0
                  }
                }
                null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (f = o.effects) ? o.effects = [l] : f.push(l))
              } else p = {
                eventTime: p,
                lane: f,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
              }, null === c ? (s = c = p, u = d) : c = c.next = p, i |= f;
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                l = (f = l).next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null
              }
            }
            if (null === c && (u = d), o.baseState = u, o.firstBaseUpdate = s, o.lastBaseUpdate = c, null !== (t = o.shared.interleaved)) {
              o = t;
              do {
                i |= o.lane, o = o.next
              } while (o !== t)
            } else null === a && (o.shared.lanes = 0);
            Fu |= i, e.lanes = i, e.memoizedState = d
          }
        }

        function Da(e, t, n) {
          if (e = t.effects, t.effects = null, null !== e)
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (r.callback = null, r = n, "function" !== typeof o) throw Error(a(191, o));
                o.call(r)
              }
            }
        }
        var Na = (new r.Component).refs;

        function Va(e, t, n, r) {
          n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : I({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
        }
        var Wa = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              o = ts(e),
              a = ja(r, o);
            a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = La(e, a, o)) && (ns(t, e, o, r), Fa(t, e, o))
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              o = ts(e),
              a = ja(r, o);
            a.tag = 1, a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = La(e, a, o)) && (ns(t, e, o, r), Fa(t, e, o))
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = es(),
              r = ts(e),
              o = ja(n, r);
            o.tag = 2, void 0 !== t && null !== t && (o.callback = t), null !== (t = La(e, o, r)) && (ns(t, e, r, n), Fa(t, e, r))
          }
        };

        function Ua(e, t, n, r, o, a, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || (!ur(n, r) || !ur(o, a))
        }

        function Ha(e, t, n) {
          var r = !1,
            o = To,
            a = t.contextType;
          return "object" === typeof a && null !== a ? a = _a(a) : (o = Mo(t) ? zo : Ao.current, a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Oo(e, o) : To), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Wa, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t
        }

        function $a(e, t, n, r) {
          e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Wa.enqueueReplaceState(t, t.state, null)
        }

        function qa(e, t, n, r) {
          var o = e.stateNode;
          o.props = n, o.state = e.memoizedState, o.refs = Na, Oa(e);
          var a = t.contextType;
          "object" === typeof a && null !== a ? o.context = _a(a) : (a = Mo(t) ? zo : Ao.current, o.context = Oo(e, a)), o.state = e.memoizedState, "function" === typeof (a = t.getDerivedStateFromProps) && (Va(e, t, a, n), o.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof o.getSnapshotBeforeUpdate || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || (t = o.state, "function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && Wa.enqueueReplaceState(o, o.state, null), Ba(e, n, o, r), o.state = e.memoizedState), "function" === typeof o.componentDidMount && (e.flags |= 4194308)
        }

        function Ya(e, t, n) {
          if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
            if (n._owner) {
              if (n = n._owner) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = "" + e;
              return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function (e) {
                var t = o.refs;
                t === Na && (t = o.refs = {}), null === e ? delete t[i] : t[i] = e
              }, t._stringRef = i, t)
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e))
          }
          return e
        }

        function Xa(e, t) {
          throw e = Object.prototype.toString.call(t), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
        }

        function Qa(e) {
          return (0, e._init)(e._payload)
        }

        function Ga(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
            }
          }

          function n(n, r) {
            if (!e) return null;
            for (; null !== r;) t(n, r), r = r.sibling;
            return null
          }

          function r(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
          }

          function o(e, t) {
            return (e = Ms(e, t)).index = 0, e.sibling = null, e
          }

          function i(t, n, r) {
            return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
          }

          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t
          }

          function u(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = Is(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
          }

          function s(e, t, n, r) {
            var a = n.type;
            return a === S ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" === typeof a && null !== a && a.$$typeof === O && Qa(a) === t.type) ? ((r = o(t, n.props)).ref = Ya(e, t, n), r.return = e, r) : ((r = js(n.type, n.key, n.props, null, e.mode, r)).ref = Ya(e, t, n), r.return = e, r)
          }

          function c(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Bs(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
          }

          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag ? ((t = Ls(n, e.mode, r, a)).return = e, t) : ((t = o(t, n)).return = e, t)
          }

          function f(e, t, n) {
            if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Is("" + t, e.mode, n)).return = e, t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (n = js(t.type, t.key, t.props, null, e.mode, n)).ref = Ya(e, null, t), n.return = e, n;
                case k:
                  return (t = Bs(t, e.mode, n)).return = e, t;
                case O:
                  return f(e, (0, t._init)(t._payload), n)
              }
              if (te(t) || L(t)) return (t = Ls(t, e.mode, n, null)).return = e, t;
              Xa(e, t)
            }
            return null
          }

          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== o ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === o ? s(e, t, n, r) : null;
                case k:
                  return n.key === o ? c(e, t, n, r) : null;
                case O:
                  return p(e, t, (o = n._init)(n._payload), r)
              }
              if (te(n) || L(n)) return null !== o ? null : d(e, t, n, r, null);
              Xa(e, n)
            }
            return null
          }

          function h(e, t, n, r, o) {
            if ("string" === typeof r && "" !== r || "number" === typeof r) return u(t, e = e.get(n) || null, "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                case k:
                  return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                case O:
                  return h(e, t, n, (0, r._init)(r._payload), o)
              }
              if (te(r) || L(r)) return d(t, e = e.get(n) || null, r, o, null);
              Xa(t, r)
            }
            return null
          }

          function m(o, a, l, u) {
            for (var s = null, c = null, d = a, m = a = 0, v = null; null !== d && m < l.length; m++) {
              d.index > m ? (v = d, d = null) : v = d.sibling;
              var g = p(o, d, l[m], u);
              if (null === g) {
                null === d && (d = v);
                break
              }
              e && d && null === g.alternate && t(o, d), a = i(g, a, m), null === c ? s = g : c.sibling = g, c = g, d = v
            }
            if (m === l.length) return n(o, d), aa && Jo(o, m), s;
            if (null === d) {
              for (; m < l.length; m++) null !== (d = f(o, l[m], u)) && (a = i(d, a, m), null === c ? s = d : c.sibling = d, c = d);
              return aa && Jo(o, m), s
            }
            for (d = r(o, d); m < l.length; m++) null !== (v = h(d, o, m, l[m], u)) && (e && null !== v.alternate && d.delete(null === v.key ? m : v.key), a = i(v, a, m), null === c ? s = v : c.sibling = v, c = v);
            return e && d.forEach((function (e) {
              return t(o, e)
            })), aa && Jo(o, m), s
          }

          function v(o, l, u, s) {
            var c = L(u);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (u = c.call(u))) throw Error(a(151));
            for (var d = c = null, m = l, v = l = 0, g = null, y = u.next(); null !== m && !y.done; v++, y = u.next()) {
              m.index > v ? (g = m, m = null) : g = m.sibling;
              var b = p(o, m, y.value, s);
              if (null === b) {
                null === m && (m = g);
                break
              }
              e && m && null === b.alternate && t(o, m), l = i(b, l, v), null === d ? c = b : d.sibling = b, d = b, m = g
            }
            if (y.done) return n(o, m), aa && Jo(o, v), c;
            if (null === m) {
              for (; !y.done; v++, y = u.next()) null !== (y = f(o, y.value, s)) && (l = i(y, l, v), null === d ? c = y : d.sibling = y, d = y);
              return aa && Jo(o, v), c
            }
            for (m = r(o, m); !y.done; v++, y = u.next()) null !== (y = h(m, o, v, y.value, s)) && (e && null !== y.alternate && m.delete(null === y.key ? v : y.key), l = i(y, l, v), null === d ? c = y : d.sibling = y, d = y);
            return e && m.forEach((function (e) {
              return t(o, e)
            })), aa && Jo(o, v), c
          }
          return function e(r, a, i, u) {
            if ("object" === typeof i && null !== i && i.type === S && null === i.key && (i = i.props.children), "object" === typeof i && null !== i) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var s = i.key, c = a; null !== c;) {
                      if (c.key === s) {
                        if ((s = i.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling), (a = o(c, i.props.children)).return = r, r = a;
                            break e
                          }
                        } else if (c.elementType === s || "object" === typeof s && null !== s && s.$$typeof === O && Qa(s) === c.type) {
                          n(r, c.sibling), (a = o(c, i.props)).ref = Ya(r, c, i), a.return = r, r = a;
                          break e
                        }
                        n(r, c);
                        break
                      }
                      t(r, c), c = c.sibling
                    }
                    i.type === S ? ((a = Ls(i.props.children, r.mode, u, i.key)).return = r, r = a) : ((u = js(i.type, i.key, i.props, null, r.mode, u)).ref = Ya(r, a, i), u.return = r, r = u)
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = i.key; null !== a;) {
                      if (a.key === c) {
                        if (4 === a.tag && a.stateNode.containerInfo === i.containerInfo && a.stateNode.implementation === i.implementation) {
                          n(r, a.sibling), (a = o(a, i.children || [])).return = r, r = a;
                          break e
                        }
                        n(r, a);
                        break
                      }
                      t(r, a), a = a.sibling
                    }(a = Bs(i, r.mode, u)).return = r,
                    r = a
                  }
                  return l(r);
                case O:
                  return e(r, a, (c = i._init)(i._payload), u)
              }
              if (te(i)) return m(r, a, i, u);
              if (L(i)) return v(r, a, i, u);
              Xa(r, i)
            }
            return "string" === typeof i && "" !== i || "number" === typeof i ? (i = "" + i, null !== a && 6 === a.tag ? (n(r, a.sibling), (a = o(a, i)).return = r, r = a) : (n(r, a), (a = Is(i, r.mode, u)).return = r, r = a), l(r)) : n(r, a)
          }
        }
        var Ka = Ga(!0),
          Za = Ga(!1),
          Ja = {},
          ei = Co(Ja),
          ti = Co(Ja),
          ni = Co(Ja);

        function ri(e) {
          if (e === Ja) throw Error(a(174));
          return e
        }

        function oi(e, t) {
          switch (Po(ni, t), Po(ti, e), Po(ei, Ja), e = t.nodeType) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
          }
          _o(ei), Po(ei, t)
        }

        function ai() {
          _o(ei), _o(ti), _o(ni)
        }

        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = ue(t, e.type);
          t !== n && (Po(ti, e), Po(ei, n))
        }

        function li(e) {
          ti.current === e && (_o(ei), _o(ti))
        }
        var ui = Co(0);

        function si(e) {
          for (var t = e; null !== t;) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t
            } else if (null !== t.child) {
              t.child.return = t, t = t.child;
              continue
            }
            if (t === e) break;
            for (; null === t.sibling;) {
              if (null === t.return || t.return === e) return null;
              t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
          }
          return null
        }
        var ci = [];

        function di() {
          for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0
        }
        var fi = x.ReactCurrentDispatcher,
          pi = x.ReactCurrentBatchConfig,
          hi = 0,
          mi = null,
          vi = null,
          gi = null,
          yi = !1,
          bi = !1,
          xi = 0,
          wi = 0;

        function ki() {
          throw Error(a(321))
        }

        function Si(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0
        }

        function Ei(e, t, n, r, o, i) {
          if (hi = i, mi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fi.current = null === e || null === e.memoizedState ? ll : ul, e = n(r, o), bi) {
            i = 0;
            do {
              if (bi = !1, xi = 0, 25 <= i) throw Error(a(301));
              i += 1, gi = vi = null, t.updateQueue = null, fi.current = sl, e = n(r, o)
            } while (bi)
          }
          if (fi.current = il, t = null !== vi && null !== vi.next, hi = 0, gi = vi = mi = null, yi = !1, t) throw Error(a(300));
          return e
        }

        function Ci() {
          var e = 0 !== xi;
          return xi = 0, e
        }

        function _i() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
          };
          return null === gi ? mi.memoizedState = gi = e : gi = gi.next = e, gi
        }

        function Pi() {
          if (null === vi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null
          } else e = vi.next;
          var t = null === gi ? mi.memoizedState : gi.next;
          if (null !== t) gi = t, vi = e;
          else {
            if (null === e) throw Error(a(310));
            e = {
              memoizedState: (vi = e).memoizedState,
              baseState: vi.baseState,
              baseQueue: vi.baseQueue,
              queue: vi.queue,
              next: null
            }, null === gi ? mi.memoizedState = gi = e : gi = gi.next = e
          }
          return gi
        }

        function Ti(e, t) {
          return "function" === typeof t ? t(e) : t
        }

        function Ai(e) {
          var t = Pi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = vi,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              o.next = i.next, i.next = l
            }
            r.baseQueue = o = i, n.pending = null
          }
          if (null !== o) {
            i = o.next, r = r.baseState;
            var u = l = null,
              s = null,
              c = i;
            do {
              var d = c.lane;
              if ((hi & d) === d) null !== s && (s = s.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
              }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null
                };
                null === s ? (u = s = f, l = r) : s = s.next = f, mi.lanes |= d, Fu |= d
              }
              c = c.next
            } while (null !== c && c !== i);
            null === s ? l = r : s.next = u, lr(r, t.memoizedState) || (xl = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              i = o.lane, mi.lanes |= i, Fu |= i, o = o.next
            } while (o !== e)
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch]
        }

        function Ri(e) {
          var t = Pi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = o = o.next;
            do {
              i = e(i, l.action), l = l.next
            } while (l !== o);
            lr(i, t.memoizedState) || (xl = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
          }
          return [i, r]
        }

        function zi() {}

        function Oi(e, t) {
          var n = mi,
            r = Pi(),
            o = t(),
            i = !lr(r.memoizedState, o);
          if (i && (r.memoizedState = o, xl = !0), r = r.queue, Hi(Li.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== gi && 1 & gi.memoizedState.tag) {
            if (n.flags |= 2048, Di(9, ji.bind(null, n, r, o, t), void 0, null), null === Au) throw Error(a(349));
            0 !== (30 & hi) || Mi(n, t, o)
          }
          return o
        }

        function Mi(e, t, n) {
          e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
          }, null === (t = mi.updateQueue) ? (t = {
            lastEffect: null,
            stores: null
          }, mi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
        }

        function ji(e, t, n, r) {
          t.value = n, t.getSnapshot = r, Fi(t) && Ii(e)
        }

        function Li(e, t, n) {
          return n((function () {
            Fi(t) && Ii(e)
          }))
        }

        function Fi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n)
          } catch (r) {
            return !0
          }
        }

        function Ii(e) {
          var t = Ra(e, 1);
          null !== t && ns(t, e, 1, -1)
        }

        function Bi(e) {
          var t = _i();
          return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ti,
            lastRenderedState: e
          }, t.queue = e, e = e.dispatch = nl.bind(null, mi, e), [t.memoizedState, e]
        }

        function Di(e, t, n, r) {
          return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
          }, null === (t = mi.updateQueue) ? (t = {
            lastEffect: null,
            stores: null
          }, mi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
        }

        function Ni() {
          return Pi().memoizedState
        }

        function Vi(e, t, n, r) {
          var o = _i();
          mi.flags |= e, o.memoizedState = Di(1 | t, n, void 0, void 0 === r ? null : r)
        }

        function Wi(e, t, n, r) {
          var o = Pi();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== vi) {
            var i = vi.memoizedState;
            if (a = i.destroy, null !== r && Si(r, i.deps)) return void(o.memoizedState = Di(t, n, a, r))
          }
          mi.flags |= e, o.memoizedState = Di(1 | t, n, a, r)
        }

        function Ui(e, t) {
          return Vi(8390656, 8, e, t)
        }

        function Hi(e, t) {
          return Wi(2048, 8, e, t)
        }

        function $i(e, t) {
          return Wi(4, 2, e, t)
        }

        function qi(e, t) {
          return Wi(4, 4, e, t)
        }

        function Yi(e, t) {
          return "function" === typeof t ? (e = e(), t(e), function () {
            t(null)
          }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function () {
            t.current = null
          }) : void 0
        }

        function Xi(e, t, n) {
          return n = null !== n && void 0 !== n ? n.concat([e]) : null, Wi(4, 4, Yi.bind(null, t, e), n)
        }

        function Qi() {}

        function Gi(e, t) {
          var n = Pi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
        }

        function Ki(e, t) {
          var n = Pi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
        }

        function Zi(e, t, n) {
          return 0 === (21 & hi) ? (e.baseState && (e.baseState = !1, xl = !0), e.memoizedState = n) : (lr(n, t) || (n = mt(), mi.lanes |= n, Fu |= n, e.baseState = !0), t)
        }

        function Ji(e, t) {
          var n = bt;
          bt = 0 !== n && 4 > n ? n : 4, e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t()
          } finally {
            bt = n, pi.transition = r
          }
        }

        function el() {
          return Pi().memoizedState
        }

        function tl(e, t, n) {
          var r = ts(e);
          if (n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null
            }, rl(e)) ol(t, n);
          else if (null !== (n = Aa(e, t, n, r))) {
            ns(n, e, r, es()), al(n, t, r)
          }
        }

        function nl(e, t, n) {
          var r = ts(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null
            };
          if (rl(e)) ol(t, o);
          else {
            var a = e.alternate;
            if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
              var i = t.lastRenderedState,
                l = a(i, n);
              if (o.hasEagerState = !0, o.eagerState = l, lr(l, i)) {
                var u = t.interleaved;
                return null === u ? (o.next = o, Ta(t)) : (o.next = u.next, u.next = o), void(t.interleaved = o)
              }
            } catch (s) {}
            null !== (n = Aa(e, t, o, r)) && (ns(n, e, r, o = es()), al(n, t, r))
          }
        }

        function rl(e) {
          var t = e.alternate;
          return e === mi || null !== t && t === mi
        }

        function ol(e, t) {
          bi = yi = !0;
          var n = e.pending;
          null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
        }

        function al(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
          }
        }
        var il = {
            readContext: _a,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1
          },
          ll = {
            readContext: _a,
            useCallback: function (e, t) {
              return _i().memoizedState = [e, void 0 === t ? null : t], e
            },
            useContext: _a,
            useEffect: Ui,
            useImperativeHandle: function (e, t, n) {
              return n = null !== n && void 0 !== n ? n.concat([e]) : null, Vi(4194308, 4, Yi.bind(null, t, e), n)
            },
            useLayoutEffect: function (e, t) {
              return Vi(4194308, 4, e, t)
            },
            useInsertionEffect: function (e, t) {
              return Vi(4, 2, e, t)
            },
            useMemo: function (e, t) {
              var n = _i();
              return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function (e, t, n) {
              var r = _i();
              return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
              }, r.queue = e, e = e.dispatch = tl.bind(null, mi, e), [r.memoizedState, e]
            },
            useRef: function (e) {
              return e = {
                current: e
              }, _i().memoizedState = e
            },
            useState: Bi,
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return _i().memoizedState = e
            },
            useTransition: function () {
              var e = Bi(!1),
                t = e[0];
              return e = Ji.bind(null, e[1]), _i().memoizedState = e, [t, e]
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                o = _i();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n()
              } else {
                if (n = t(), null === Au) throw Error(a(349));
                0 !== (30 & hi) || Mi(r, t, n)
              }
              o.memoizedState = n;
              var i = {
                value: n,
                getSnapshot: t
              };
              return o.queue = i, Ui(Li.bind(null, r, i, e), [e]), r.flags |= 2048, Di(9, ji.bind(null, r, i, n, t), void 0, null), n
            },
            useId: function () {
              var e = _i(),
                t = Au.identifierPrefix;
              if (aa) {
                var n = Zo;
                t = ":" + t + "R" + (n = (Ko & ~(1 << 32 - it(Ko) - 1)).toString(32) + n), 0 < (n = xi++) && (t += "H" + n.toString(32)), t += ":"
              } else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
              return e.memoizedState = t
            },
            unstable_isNewReconciler: !1
          },
          ul = {
            readContext: _a,
            useCallback: Gi,
            useContext: _a,
            useEffect: Hi,
            useImperativeHandle: Xi,
            useInsertionEffect: $i,
            useLayoutEffect: qi,
            useMemo: Ki,
            useReducer: Ai,
            useRef: Ni,
            useState: function () {
              return Ai(Ti)
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return Zi(Pi(), vi.memoizedState, e)
            },
            useTransition: function () {
              return [Ai(Ti)[0], Pi().memoizedState]
            },
            useMutableSource: zi,
            useSyncExternalStore: Oi,
            useId: el,
            unstable_isNewReconciler: !1
          },
          sl = {
            readContext: _a,
            useCallback: Gi,
            useContext: _a,
            useEffect: Hi,
            useImperativeHandle: Xi,
            useInsertionEffect: $i,
            useLayoutEffect: qi,
            useMemo: Ki,
            useReducer: Ri,
            useRef: Ni,
            useState: function () {
              return Ri(Ti)
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              var t = Pi();
              return null === vi ? t.memoizedState = e : Zi(t, vi.memoizedState, e)
            },
            useTransition: function () {
              return [Ri(Ti)[0], Pi().memoizedState]
            },
            useMutableSource: zi,
            useSyncExternalStore: Oi,
            useId: el,
            unstable_isNewReconciler: !1
          };

        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              n += V(r), r = r.return
            } while (r);
            var o = n
          } catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack
          }
          return {
            value: e,
            source: t,
            stack: o,
            digest: null
          }
        }

        function dl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null
          }
        }

        function fl(e, t) {
          try {
            console.error(t.value)
          } catch (n) {
            setTimeout((function () {
              throw n
            }))
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;

        function hl(e, t, n) {
          (n = ja(-1, n)).tag = 3, n.payload = {
            element: null
          };
          var r = t.value;
          return n.callback = function () {
            Hu || (Hu = !0, $u = r), fl(0, t)
          }, n
        }

        function ml(e, t, n) {
          (n = ja(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            n.payload = function () {
              return r(o)
            }, n.callback = function () {
              fl(0, t)
            }
          }
          var a = e.stateNode;
          return null !== a && "function" === typeof a.componentDidCatch && (n.callback = function () {
            fl(0, t), "function" !== typeof r && (null === qu ? qu = new Set([this]) : qu.add(this));
            var e = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: null !== e ? e : ""
            })
          }), n
        }

        function vl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl;
            var o = new Set;
            r.set(t, o)
          } else void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o));
          o.has(n) || (o.add(n), e = Cs.bind(null, e, t, n), t.then(e, e))
        }

        function gl(e) {
          do {
            var t;
            if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
            e = e.return
          } while (null !== e);
          return null
        }

        function yl(e, t, n, r, o) {
          return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = ja(-1, 1)).tag = 2, La(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e)
        }
        var bl = x.ReactCurrentOwner,
          xl = !1;

        function wl(e, t, n, r) {
          t.child = null === e ? Za(t, null, n, r) : Ka(t, e.child, n, r)
        }

        function kl(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return Ca(t, o), r = Ei(e, t, n, r, a, o), n = Ci(), null === e || xl ? (aa && n && ta(t), t.flags |= 1, wl(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Hl(e, t, o))
        }

        function Sl(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a || Os(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = js(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, El(e, t, a, r, o))
          }
          if (a = e.child, 0 === (e.lanes & o)) {
            var i = a.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : ur)(i, r) && e.ref === t.ref) return Hl(e, t, o)
          }
          return t.flags |= 1, (e = Ms(a, r)).ref = t.ref, e.return = t, t.child = e
        }

        function El(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (ur(a, r) && e.ref === t.ref) {
              if (xl = !1, t.pendingProps = r = a, 0 === (e.lanes & o)) return t.lanes = e.lanes, Hl(e, t, o);
              0 !== (131072 & e.flags) && (xl = !0)
            }
          }
          return Pl(e, t, n, r, o)
        }

        function Cl(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode)) t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
            }, Po(Mu, Ou), Ou |= n;
            else {
              if (0 === (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
              }, t.updateQueue = null, Po(Mu, Ou), Ou |= e, null;
              t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
              }, r = null !== a ? a.baseLanes : n, Po(Mu, Ou), Ou |= r
            }
          else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Po(Mu, Ou), Ou |= r;
          return wl(e, t, o, n), t.child
        }

        function _l(e, t) {
          var n = t.ref;
          (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
        }

        function Pl(e, t, n, r, o) {
          var a = Mo(n) ? zo : Ao.current;
          return a = Oo(t, a), Ca(t, o), n = Ei(e, t, n, r, a, o), r = Ci(), null === e || xl ? (aa && r && ta(t), t.flags |= 1, wl(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Hl(e, t, o))
        }

        function Tl(e, t, n, r, o) {
          if (Mo(n)) {
            var a = !0;
            Io(t)
          } else a = !1;
          if (Ca(t, o), null === t.stateNode) Ul(e, t), Ha(t, n, r), qa(t, n, r, o), r = !0;
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              s = n.contextType;
            "object" === typeof s && null !== s ? s = _a(s) : s = Oo(t, s = Mo(n) ? zo : Ao.current);
            var c = n.getDerivedStateFromProps,
              d = "function" === typeof c || "function" === typeof i.getSnapshotBeforeUpdate;
            d || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== r || u !== s) && $a(t, i, r, s), za = !1;
            var f = t.memoizedState;
            i.state = f, Ba(t, r, i, o), u = t.memoizedState, l !== r || f !== u || Ro.current || za ? ("function" === typeof c && (Va(t, n, c, r), u = t.memoizedState), (l = za || Ua(t, n, l, r, f, u, s)) ? (d || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = s, r = l) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
          } else {
            i = t.stateNode, Ma(e, t), l = t.memoizedProps, s = t.type === t.elementType ? l : ga(t.type, l), i.props = s, d = t.pendingProps, f = i.context, "object" === typeof (u = n.contextType) && null !== u ? u = _a(u) : u = Oo(t, u = Mo(n) ? zo : Ao.current);
            var p = n.getDerivedStateFromProps;
            (c = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== d || f !== u) && $a(t, i, r, u), za = !1, f = t.memoizedState, i.state = f, Ba(t, r, i, o);
            var h = t.memoizedState;
            l !== d || f !== h || Ro.current || za ? ("function" === typeof p && (Va(t, n, p, r), h = t.memoizedState), (s = za || Ua(t, n, s, r, f, h, u) || !1) ? (c || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, u), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, u)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = u, r = s) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
          }
          return Al(e, t, n, r, a, o)
        }

        function Al(e, t, n, r, o, a) {
          _l(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return o && Bo(t, n, !1), Hl(e, t, a);
          r = t.stateNode, bl.current = t;
          var l = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
          return t.flags |= 1, null !== e && i ? (t.child = Ka(t, e.child, null, a), t.child = Ka(t, null, l, a)) : wl(e, t, l, a), t.memoizedState = r.state, o && Bo(t, n, !0), t.child
        }

        function Rl(e) {
          var t = e.stateNode;
          t.pendingContext ? Lo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Lo(0, t.context, !1), oi(e, t.containerInfo)
        }

        function zl(e, t, n, r, o) {
          return ha(), ma(o), t.flags |= 256, wl(e, t, n, r), t.child
        }
        var Ol, Ml, jl, Ll = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0
        };

        function Fl(e) {
          return {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }
        }

        function Il(e, t, n) {
          var r, o = t.pendingProps,
            i = ui.current,
            l = !1,
            u = 0 !== (128 & t.flags);
          if ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)), r ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Po(ui, 1 & i), null === e) return ca(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = o.children, e = o.fallback, l ? (o = t.mode, l = t.child, u = {
            mode: "hidden",
            children: u
          }, 0 === (1 & o) && null !== l ? (l.childLanes = 0, l.pendingProps = u) : l = Fs(u, o, 0, null), e = Ls(e, o, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Fl(n), t.memoizedState = Ll, e) : Bl(t, u));
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function (e, t, n, r, o, i, l) {
            if (n) return 256 & t.flags ? (t.flags &= -257, Dl(e, t, l, r = dl(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Fs({
              mode: "visible",
              children: r.children
            }, o, 0, null), (i = Ls(i, o, l, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 0 !== (1 & t.mode) && Ka(t, e.child, null, l), t.child.memoizedState = Fl(l), t.memoizedState = Ll, i);
            if (0 === (1 & t.mode)) return Dl(e, t, l, null);
            if ("$!" === o.data) {
              if (r = o.nextSibling && o.nextSibling.dataset) var u = r.dgst;
              return r = u, Dl(e, t, l, r = dl(i = Error(a(419)), r, void 0))
            }
            if (u = 0 !== (l & e.childLanes), xl || u) {
              if (null !== (r = Au)) {
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
                    o = 0
                }
                0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) && o !== i.retryLane && (i.retryLane = o, Ra(e, o), ns(r, e, o, -1))
              }
              return ms(), Dl(e, t, l, r = dl(Error(a(421))))
            }
            return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = Ps.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, oa = so(o.nextSibling), ra = t, aa = !0, ia = null, null !== e && (Xo[Qo++] = Ko, Xo[Qo++] = Zo, Xo[Qo++] = Go, Ko = e.id, Zo = e.overflow, Go = t), (t = Bl(t, r.children)).flags |= 4096, t)
          }(e, t, u, o, r, i, n);
          if (l) {
            l = o.fallback, u = t.mode, r = (i = e.child).sibling;
            var s = {
              mode: "hidden",
              children: o.children
            };
            return 0 === (1 & u) && t.child !== i ? ((o = t.child).childLanes = 0, o.pendingProps = s, t.deletions = null) : (o = Ms(i, s)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? l = Ms(r, l) : (l = Ls(l, u, n, null)).flags |= 2, l.return = t, o.return = t, o.sibling = l, t.child = o, o = l, l = t.child, u = null === (u = e.child.memoizedState) ? Fl(n) : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions
            }, l.memoizedState = u, l.childLanes = e.childLanes & ~n, t.memoizedState = Ll, o
          }
          return e = (l = e.child).sibling, o = Ms(l, {
            mode: "visible",
            children: o.children
          }), 0 === (1 & t.mode) && (o.lanes = n), o.return = t, o.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o
        }

        function Bl(e, t) {
          return (t = Fs({
            mode: "visible",
            children: t
          }, e.mode, 0, null)).return = e, e.child = t
        }

        function Dl(e, t, n, r) {
          return null !== r && ma(r), Ka(t, e.child, null, n), (e = Bl(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
        }

        function Nl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ea(e.return, t, n)
        }

        function Vl(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: o
          } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = o)
        }

        function Wl(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if (wl(e, t, r.children, n), 0 !== (2 & (r = ui.current))) r = 1 & r | 2, t.flags |= 128;
          else {
            if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
              if (13 === e.tag) null !== e.memoizedState && Nl(e, n, t);
              else if (19 === e.tag) Nl(e, n, t);
              else if (null !== e.child) {
                e.child.return = e, e = e.child;
                continue
              }
              if (e === t) break e;
              for (; null === e.sibling;) {
                if (null === e.return || e.return === t) break e;
                e = e.return
              }
              e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
          }
          if (Po(ui, r), 0 === (1 & t.mode)) t.memoizedState = null;
          else switch (o) {
            case "forwards":
              for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === si(e) && (o = n), n = n.sibling;
              null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Vl(t, !1, o, n, a);
              break;
            case "backwards":
              for (n = null, o = t.child, t.child = null; null !== o;) {
                if (null !== (e = o.alternate) && null === si(e)) {
                  t.child = o;
                  break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
              }
              Vl(t, !0, n, null, a);
              break;
            case "together":
              Vl(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null
          }
          return t.child
        }

        function Ul(e, t) {
          0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
        }

        function Hl(e, t, n) {
          if (null !== e && (t.dependencies = e.dependencies), Fu |= t.lanes, 0 === (n & t.childLanes)) return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (n = Ms(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ms(e, e.pendingProps)).return = t;
            n.sibling = null
          }
          return t.child
        }

        function $l(e, t) {
          if (!aa) switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
              null === n ? e.tail = null : n.sibling = null;
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
              null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
          }
        }

        function ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling;
          else
            for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
          return e.subtreeFlags |= r, e.childLanes = n, t
        }

        function Yl(e, t, n) {
          var r = t.pendingProps;
          switch (na(t), t.tag) {
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
              return ql(t), null;
            case 1:
            case 17:
              return Mo(t.type) && jo(), ql(t), null;
            case 3:
              return r = t.stateNode, ai(), _o(Ro), _o(Ao), di(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fa(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== ia && (is(ia), ia = null))), ql(t), null;
            case 5:
              li(t);
              var o = ri(ni.current);
              if (n = t.type, null !== e && null != t.stateNode) Ml(e, t, n, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return ql(t), null
                }
                if (e = ri(ei.current), fa(t)) {
                  r = t.stateNode, n = t.type;
                  var i = t.memoizedProps;
                  switch (r[po] = t, r[ho] = i, e = 0 !== (1 & t.mode), n) {
                    case "dialog":
                      Dr("cancel", r), Dr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Dr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Lr.length; o++) Dr(Lr[o], r);
                      break;
                    case "source":
                      Dr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Dr("error", r), Dr("load", r);
                      break;
                    case "details":
                      Dr("toggle", r);
                      break;
                    case "input":
                      G(r, i), Dr("invalid", r);
                      break;
                    case "select":
                      r._wrapperState = {
                        wasMultiple: !!i.multiple
                      }, Dr("invalid", r);
                      break;
                    case "textarea":
                      oe(r, i), Dr("invalid", r)
                  }
                  for (var u in ye(n, i), o = null, i)
                    if (i.hasOwnProperty(u)) {
                      var s = i[u];
                      "children" === u ? "string" === typeof s ? r.textContent !== s && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, s, e), o = ["children", s]) : "number" === typeof s && r.textContent !== "" + s && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, s, e), o = ["children", "" + s]) : l.hasOwnProperty(u) && null != s && "onScroll" === u && Dr("scroll", r)
                    } switch (n) {
                    case "input":
                      q(r), J(r, i, !0);
                      break;
                    case "textarea":
                      q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Jr)
                  }
                  r = o, t.updateQueue = r, null !== r && (t.flags |= 4)
                } else {
                  u = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = le(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = u.createElement(n, {
                    is: r.is
                  }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[po] = t, e[ho] = r, Ol(e, t), t.stateNode = e;
                  e: {
                    switch (u = be(n, r), n) {
                      case "dialog":
                        Dr("cancel", e), Dr("close", e), o = r;
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Dr("load", e), o = r;
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < Lr.length; o++) Dr(Lr[o], e);
                        o = r;
                        break;
                      case "source":
                        Dr("error", e), o = r;
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Dr("error", e), Dr("load", e), o = r;
                        break;
                      case "details":
                        Dr("toggle", e), o = r;
                        break;
                      case "input":
                        G(e, r), o = Q(e, r), Dr("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        e._wrapperState = {
                          wasMultiple: !!r.multiple
                        }, o = I({}, r, {
                          value: void 0
                        }), Dr("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), o = re(e, r), Dr("invalid", e)
                    }
                    for (i in ye(n, o), s = o)
                      if (s.hasOwnProperty(i)) {
                        var c = s[i];
                        "style" === i ? ve(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === i ? "string" === typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" === typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (l.hasOwnProperty(i) ? null != c && "onScroll" === i && Dr("scroll", e) : null != c && b(e, i, c, u))
                      } switch (n) {
                      case "input":
                        q(e), J(e, r, !1);
                        break;
                      case "textarea":
                        q(e), ie(e);
                        break;
                      case "option":
                        null != r.value && e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        e.multiple = !!r.multiple, null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = Jr)
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
                        r = !1
                    }
                  }
                  r && (t.flags |= 4)
                }
                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
              }
              return ql(t), null;
            case 6:
              if (e && null != t.stateNode) jl(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode) throw Error(a(166));
                if (n = ri(ni.current), ri(ei.current), fa(t)) {
                  if (r = t.stateNode, n = t.memoizedProps, r[po] = t, (i = r.nodeValue !== n) && null !== (e = ra)) switch (e.tag) {
                    case 3:
                      Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                      break;
                    case 5:
                      !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, n, 0 !== (1 & e.mode))
                  }
                  i && (t.flags |= 4)
                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[po] = t, t.stateNode = r
              }
              return ql(t), null;
            case 13:
              if (_o(ui), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                if (aa && null !== oa && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) pa(), ha(), t.flags |= 98560, i = !1;
                else if (i = fa(t), null !== r && null !== r.dehydrated) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(a(317));
                    i[po] = t
                  } else ha(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                  ql(t), i = !1
                } else null !== ia && (is(ia), ia = null), i = !0;
                if (!i) return 65536 & t.flags ? t : null
              }
              return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & ui.current) ? 0 === ju && (ju = 3) : ms())), null !== t.updateQueue && (t.flags |= 4), ql(t), null);
            case 4:
              return ai(), null === e && Wr(t.stateNode.containerInfo), ql(t), null;
            case 10:
              return Sa(t.type._context), ql(t), null;
            case 19:
              if (_o(ui), null === (i = t.memoizedState)) return ql(t), null;
              if (r = 0 !== (128 & t.flags), null === (u = i.rendering))
                if (r) $l(i, !1);
                else {
                  if (0 !== ju || null !== e && 0 !== (128 & e.flags))
                    for (e = t.child; null !== e;) {
                      if (null !== (u = si(e))) {
                        for (t.flags |= 128, $l(i, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (u = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u.childLanes, i.lanes = u.lanes, i.child = u.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, i.type = u.type, e = u.dependencies, i.dependencies = null === e ? null : {
                          lanes: e.lanes,
                          firstContext: e.firstContext
                        }), n = n.sibling;
                        return Po(ui, 1 & ui.current | 2), t.child
                      }
                      e = e.sibling
                    }
                  null !== i.tail && Ke() > Wu && (t.flags |= 128, r = !0, $l(i, !1), t.lanes = 4194304)
                }
              else {
                if (!r)
                  if (null !== (e = si(u))) {
                    if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), $l(i, !0), null === i.tail && "hidden" === i.tailMode && !u.alternate && !aa) return ql(t), null
                  } else 2 * Ke() - i.renderingStartTime > Wu && 1073741824 !== n && (t.flags |= 128, r = !0, $l(i, !1), t.lanes = 4194304);
                i.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = i.last) ? n.sibling = u : t.child = u, i.last = u)
              }
              return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ke(), t.sibling = null, n = ui.current, Po(ui, r ? 1 & n | 2 : 1 & n), t) : (ql(t), null);
            case 22:
            case 23:
              return ds(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Ou) && (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : ql(t), null;
            case 24:
            case 25:
              return null
          }
          throw Error(a(156, t.tag))
        }

        function Xl(e, t) {
          switch (na(t), t.tag) {
            case 1:
              return Mo(t.type) && jo(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 3:
              return ai(), _o(Ro), _o(Ao), di(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
            case 5:
              return li(t), null;
            case 13:
              if (_o(ui), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                if (null === t.alternate) throw Error(a(340));
                ha()
              }
              return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 19:
              return _o(ui), null;
            case 4:
              return ai(), null;
            case 10:
              return Sa(t.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null
          }
        }
        Ol = function (e, t) {
          for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              n.child.return = n, n = n.child;
              continue
            }
            if (n === t) break;
            for (; null === n.sibling;) {
              if (null === n.return || n.return === t) return;
              n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
          }
        }, Ml = function (e, t, n, r) {
          var o = e.memoizedProps;
          if (o !== r) {
            e = t.stateNode, ri(ei.current);
            var a, i = null;
            switch (n) {
              case "input":
                o = Q(e, o), r = Q(e, r), i = [];
                break;
              case "select":
                o = I({}, o, {
                  value: void 0
                }), r = I({}, r, {
                  value: void 0
                }), i = [];
                break;
              case "textarea":
                o = re(e, o), r = re(e, r), i = [];
                break;
              default:
                "function" !== typeof o.onClick && "function" === typeof r.onClick && (e.onclick = Jr)
            }
            for (c in ye(n, r), n = null, o)
              if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                if ("style" === c) {
                  var u = o[c];
                  for (a in u) u.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
                } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
            for (c in r) {
              var s = r[c];
              if (u = null != o ? o[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                if ("style" === c)
                  if (u) {
                    for (a in u) !u.hasOwnProperty(a) || s && s.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                    for (a in s) s.hasOwnProperty(a) && u[a] !== s[a] && (n || (n = {}), n[a] = s[a])
                  } else n || (i || (i = []), i.push(c, n)), n = s;
              else "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (i = i || []).push(c, s)) : "children" === c ? "string" !== typeof s && "number" !== typeof s || (i = i || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != s && "onScroll" === c && Dr("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s))
            }
            n && (i = i || []).push("style", n);
            var c = i;
            (t.updateQueue = c) && (t.flags |= 4)
          }
        }, jl = function (e, t, n, r) {
          n !== r && (t.flags |= 4)
        };
        var Ql = !1,
          Gl = !1,
          Kl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;

        function Jl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n) try {
              n(null)
            } catch (r) {
              Es(e, t, r)
            } else n.current = null
        }

        function eu(e, t, n) {
          try {
            n()
          } catch (r) {
            Es(e, t, r)
          }
        }
        var tu = !1;

        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = r = r.next;
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                o.destroy = void 0, void 0 !== a && eu(t, n, a)
              }
              o = o.next
            } while (o !== r)
          }
        }

        function ru(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
              }
              n = n.next
            } while (n !== t)
          }
        }

        function ou(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
          }
        }

        function au(e) {
          var t = e.alternate;
          null !== t && (e.alternate = null, au(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[po], delete t[ho], delete t[vo], delete t[go], delete t[yo])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
        }

        function iu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag
        }

        function lu(e) {
          e: for (;;) {
            for (; null === e.sibling;) {
              if (null === e.return || iu(e.return)) return null;
              e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              e.child.return = e, e = e.child
            }
            if (!(2 & e.flags)) return e.stateNode
          }
        }

        function uu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e;) uu(e, t, n), e = e.sibling
        }

        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e;) su(e, t, n), e = e.sibling
        }
        var cu = null,
          du = !1;

        function fu(e, t, n) {
          for (n = n.child; null !== n;) pu(e, t, n), n = n.sibling
        }

        function pu(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount) try {
            at.onCommitFiberUnmount(ot, n)
          } catch (l) {}
          switch (n.tag) {
            case 5:
              Gl || Jl(n, t);
            case 6:
              var r = cu,
                o = du;
              cu = null, fu(e, t, n), du = o, null !== (cu = r) && (du ? (e = cu, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cu.removeChild(n.stateNode));
              break;
            case 18:
              null !== cu && (du ? (e = cu, n = n.stateNode, 8 === e.nodeType ? uo(e.parentNode, n) : 1 === e.nodeType && uo(e, n), Wt(e)) : uo(cu, n.stateNode));
              break;
            case 4:
              r = cu, o = du, cu = n.stateNode.containerInfo, du = !0, fu(e, t, n), cu = r, du = o;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Gl && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  a = a.tag, void 0 !== i && (0 !== (2 & a) || 0 !== (4 & a)) && eu(n, t, i), o = o.next
                } while (o !== r)
              }
              fu(e, t, n);
              break;
            case 1:
              if (!Gl && (Jl(n, t), "function" === typeof (r = n.stateNode).componentWillUnmount)) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
              } catch (l) {
                Es(n, t, l)
              }
              fu(e, t, n);
              break;
            case 21:
              fu(e, t, n);
              break;
            case 22:
              1 & n.mode ? (Gl = (r = Gl) || null !== n.memoizedState, fu(e, t, n), Gl = r) : fu(e, t, n);
              break;
            default:
              fu(e, t, n)
          }
        }

        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Kl), t.forEach((function (t) {
              var r = Ts.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r))
            }))
          }
        }

        function mu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  l = t,
                  u = l;
                e: for (; null !== u;) {
                  switch (u.tag) {
                    case 5:
                      cu = u.stateNode, du = !1;
                      break e;
                    case 3:
                    case 4:
                      cu = u.stateNode.containerInfo, du = !0;
                      break e
                  }
                  u = u.return
                }
                if (null === cu) throw Error(a(160));
                pu(i, l, o), cu = null, du = !1;
                var s = o.alternate;
                null !== s && (s.return = null), o.return = null
              } catch (c) {
                Es(o, t, c)
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t;) vu(t, e), t = t.sibling
        }

        function vu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (mu(t, e), gu(e), 4 & r) {
                try {
                  nu(3, e, e.return), ru(3, e)
                } catch (v) {
                  Es(e, e.return, v)
                }
                try {
                  nu(5, e, e.return)
                } catch (v) {
                  Es(e, e.return, v)
                }
              }
              break;
            case 1:
              mu(t, e), gu(e), 512 & r && null !== n && Jl(n, n.return);
              break;
            case 5:
              if (mu(t, e), gu(e), 512 & r && null !== n && Jl(n, n.return), 32 & e.flags) {
                var o = e.stateNode;
                try {
                  fe(o, "")
                } catch (v) {
                  Es(e, e.return, v)
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  u = e.type,
                  s = e.updateQueue;
                if (e.updateQueue = null, null !== s) try {
                  "input" === u && "radio" === i.type && null != i.name && K(o, i), be(u, l);
                  var c = be(u, i);
                  for (l = 0; l < s.length; l += 2) {
                    var d = s[l],
                      f = s[l + 1];
                    "style" === d ? ve(o, f) : "dangerouslySetInnerHTML" === d ? de(o, f) : "children" === d ? fe(o, f) : b(o, d, f, c)
                  }
                  switch (u) {
                    case "input":
                      Z(o, i);
                      break;
                    case "textarea":
                      ae(o, i);
                      break;
                    case "select":
                      var p = o._wrapperState.wasMultiple;
                      o._wrapperState.wasMultiple = !!i.multiple;
                      var h = i.value;
                      null != h ? ne(o, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(o, !!i.multiple, i.defaultValue, !0) : ne(o, !!i.multiple, i.multiple ? [] : "", !1))
                  }
                  o[ho] = i
                } catch (v) {
                  Es(e, e.return, v)
                }
              }
              break;
            case 6:
              if (mu(t, e), gu(e), 4 & r) {
                if (null === e.stateNode) throw Error(a(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                  o.nodeValue = i
                } catch (v) {
                  Es(e, e.return, v)
                }
              }
              break;
            case 3:
              if (mu(t, e), gu(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                Wt(t.containerInfo)
              } catch (v) {
                Es(e, e.return, v)
              }
              break;
            case 4:
            default:
              mu(t, e), gu(e);
              break;
            case 13:
              mu(t, e), gu(e), 8192 & (o = e.child).flags && (i = null !== o.memoizedState, o.stateNode.isHidden = i, !i || null !== o.alternate && null !== o.alternate.memoizedState || (Vu = Ke())), 4 & r && hu(e);
              break;
            case 22:
              if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Gl = (c = Gl) || d, mu(t, e), Gl = c) : mu(t, e), gu(e), 8192 & r) {
                if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                  for (Zl = e, d = e.child; null !== d;) {
                    for (f = Zl = d; null !== Zl;) {
                      switch (h = (p = Zl).child, p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          Jl(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            r = p, n = p.return;
                            try {
                              t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                            } catch (v) {
                              Es(r, n, v)
                            }
                          }
                          break;
                        case 5:
                          Jl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            wu(f);
                            continue
                          }
                      }
                      null !== h ? (h.return = p, Zl = h) : wu(f)
                    }
                    d = d.sibling
                  }
                e: for (d = null, f = e;;) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        o = f.stateNode, c ? "function" === typeof (i = o.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (u = f.stateNode, l = void 0 !== (s = f.memoizedProps.style) && null !== s && s.hasOwnProperty("display") ? s.display : null, u.style.display = me("display", l))
                      } catch (v) {
                        Es(e, e.return, v)
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d) try {
                      f.stateNode.nodeValue = c ? "" : f.memoizedProps
                    } catch (v) {
                      Es(e, e.return, v)
                    }
                  } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                    f.child.return = f, f = f.child;
                    continue
                  }
                  if (f === e) break e;
                  for (; null === f.sibling;) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), f = f.return
                  }
                  d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                }
              }
              break;
            case 19:
              mu(t, e), gu(e), 4 & r && hu(e);
            case 21:
          }
        }

        function gu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n;) {
                  if (iu(n)) {
                    var r = n;
                    break e
                  }
                  n = n.return
                }
                throw Error(a(160))
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (fe(o, ""), r.flags &= -33), su(e, lu(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  uu(e, lu(e), i);
                  break;
                default:
                  throw Error(a(161))
              }
            }
            catch (l) {
              Es(e, e.return, l)
            }
            e.flags &= -3
          }
          4096 & t && (e.flags &= -4097)
        }

        function yu(e, t, n) {
          Zl = e, bu(e, t, n)
        }

        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl;) {
            var o = Zl,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Ql;
              if (!i) {
                var l = o.alternate,
                  u = null !== l && null !== l.memoizedState || Gl;
                l = Ql;
                var s = Gl;
                if (Ql = i, (Gl = u) && !s)
                  for (Zl = o; null !== Zl;) u = (i = Zl).child, 22 === i.tag && null !== i.memoizedState ? ku(o) : null !== u ? (u.return = i, Zl = u) : ku(o);
                for (; null !== a;) Zl = a, bu(a, t, n), a = a.sibling;
                Zl = o, Ql = l, Gl = s
              }
              xu(e)
            } else 0 !== (8772 & o.subtreeFlags) && null !== a ? (a.return = o, Zl = a) : xu(e)
          }
        }

        function xu(e) {
          for (; null !== Zl;) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags)) switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gl || ru(5, t);
                    break;
                  case 1:
                    var r = t.stateNode;
                    if (4 & t.flags && !Gl)
                      if (null === n) r.componentDidMount();
                      else {
                        var o = t.elementType === t.type ? n.memoizedProps : ga(t.type, n.memoizedProps);
                        r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                      } var i = t.updateQueue;
                    null !== i && Da(t, i, r);
                    break;
                  case 3:
                    var l = t.updateQueue;
                    if (null !== l) {
                      if (n = null, null !== t.child) switch (t.child.tag) {
                        case 5:
                        case 1:
                          n = t.child.stateNode
                      }
                      Da(t, l, n)
                    }
                    break;
                  case 5:
                    var u = t.stateNode;
                    if (null === n && 4 & t.flags) {
                      n = u;
                      var s = t.memoizedProps;
                      switch (t.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          s.autoFocus && n.focus();
                          break;
                        case "img":
                          s.src && (n.src = s.src)
                      }
                    }
                    break;
                  case 6:
                  case 4:
                  case 12:
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  case 13:
                    if (null === t.memoizedState) {
                      var c = t.alternate;
                      if (null !== c) {
                        var d = c.memoizedState;
                        if (null !== d) {
                          var f = d.dehydrated;
                          null !== f && Wt(f)
                        }
                      }
                    }
                    break;
                  default:
                    throw Error(a(163))
                }
                Gl || 512 & t.flags && ou(t)
              } catch (p) {
                Es(t, t.return, p)
              }
            }
            if (t === e) {
              Zl = null;
              break
            }
            if (null !== (n = t.sibling)) {
              n.return = t.return, Zl = n;
              break
            }
            Zl = t.return
          }
        }

        function wu(e) {
          for (; null !== Zl;) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break
            }
            var n = t.sibling;
            if (null !== n) {
              n.return = t.return, Zl = n;
              break
            }
            Zl = t.return
          }
        }

        function ku(e) {
          for (; null !== Zl;) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ru(4, t)
                  } catch (u) {
                    Es(t, n, u)
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount()
                    } catch (u) {
                      Es(t, o, u)
                    }
                  }
                  var a = t.return;
                  try {
                    ou(t)
                  } catch (u) {
                    Es(t, a, u)
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ou(t)
                  } catch (u) {
                    Es(t, i, u)
                  }
              }
            } catch (u) {
              Es(t, t.return, u)
            }
            if (t === e) {
              Zl = null;
              break
            }
            var l = t.sibling;
            if (null !== l) {
              l.return = t.return, Zl = l;
              break
            }
            Zl = t.return
          }
        }
        var Su, Eu = Math.ceil,
          Cu = x.ReactCurrentDispatcher,
          _u = x.ReactCurrentOwner,
          Pu = x.ReactCurrentBatchConfig,
          Tu = 0,
          Au = null,
          Ru = null,
          zu = 0,
          Ou = 0,
          Mu = Co(0),
          ju = 0,
          Lu = null,
          Fu = 0,
          Iu = 0,
          Bu = 0,
          Du = null,
          Nu = null,
          Vu = 0,
          Wu = 1 / 0,
          Uu = null,
          Hu = !1,
          $u = null,
          qu = null,
          Yu = !1,
          Xu = null,
          Qu = 0,
          Gu = 0,
          Ku = null,
          Zu = -1,
          Ju = 0;

        function es() {
          return 0 !== (6 & Tu) ? Ke() : -1 !== Zu ? Zu : Zu = Ke()
        }

        function ts(e) {
          return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Tu) && 0 !== zu ? zu & -zu : null !== va.transition ? (0 === Ju && (Ju = mt()), Ju) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Gt(e.type)
        }

        function ns(e, t, n, r) {
          if (50 < Gu) throw Gu = 0, Ku = null, Error(a(185));
          gt(e, n, r), 0 !== (2 & Tu) && e === Au || (e === Au && (0 === (2 & Tu) && (Iu |= n), 4 === ju && ls(e, zu)), rs(e, r), 1 === n && 0 === Tu && 0 === (1 & t.mode) && (Wu = Ke() + 500, No && Uo()))
        }

        function rs(e, t) {
          var n = e.callbackNode;
          ! function (e, t) {
            for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
              var i = 31 - it(a),
                l = 1 << i,
                u = o[i]; - 1 === u ? 0 !== (l & n) && 0 === (l & r) || (o[i] = pt(l, t)) : u <= t && (e.expiredLanes |= l), a &= ~l
            }
          }(e, t);
          var r = ft(e, e === Au ? zu : 0);
          if (0 === r) null !== n && Xe(n), e.callbackNode = null, e.callbackPriority = 0;
          else if (t = r & -r, e.callbackPriority !== t) {
            if (null != n && Xe(n), 1 === t) 0 === e.tag ? function (e) {
              No = !0, Wo(e)
            }(us.bind(null, e)) : Wo(us.bind(null, e)), io((function () {
              0 === (6 & Tu) && Uo()
            })), n = null;
            else {
              switch (xt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt
              }
              n = As(n, os.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = n
          }
        }

        function os(e, t) {
          if (Zu = -1, Ju = 0, 0 !== (6 & Tu)) throw Error(a(327));
          var n = e.callbackNode;
          if (ks() && e.callbackNode !== n) return null;
          var r = ft(e, e === Au ? zu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vs(e, r);
          else {
            t = r;
            var o = Tu;
            Tu |= 2;
            var i = hs();
            for (Au === e && zu === t || (Uu = null, Wu = Ke() + 500, fs(e, t));;) try {
              ys();
              break
            } catch (u) {
              ps(e, u)
            }
            ka(), Cu.current = i, Tu = o, null !== Ru ? t = 0 : (Au = null, zu = 0, t = ju)
          }
          if (0 !== t) {
            if (2 === t && (0 !== (o = ht(e)) && (r = o, t = as(e, o))), 1 === t) throw n = Lu, fs(e, 0), ls(e, r), rs(e, Ke()), n;
            if (6 === t) ls(e, r);
            else {
              if (o = e.current.alternate, 0 === (30 & r) && ! function (e) {
                  for (var t = e;;) {
                    if (16384 & t.flags) {
                      var n = t.updateQueue;
                      if (null !== n && null !== (n = n.stores))
                        for (var r = 0; r < n.length; r++) {
                          var o = n[r],
                            a = o.getSnapshot;
                          o = o.value;
                          try {
                            if (!lr(a(), o)) return !1
                          } catch (l) {
                            return !1
                          }
                        }
                    }
                    if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                    else {
                      if (t === e) break;
                      for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return !0;
                        t = t.return
                      }
                      t.sibling.return = t.return, t = t.sibling
                    }
                  }
                  return !0
                }(o) && (2 === (t = vs(e, r)) && (0 !== (i = ht(e)) && (r = i, t = as(e, i))), 1 === t)) throw n = Lu, fs(e, 0), ls(e, r), rs(e, Ke()), n;
              switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  ws(e, Nu, Uu);
                  break;
                case 3:
                  if (ls(e, r), (130023424 & r) === r && 10 < (t = Vu + 500 - Ke())) {
                    if (0 !== ft(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      es(), e.pingedLanes |= e.suspendedLanes & o;
                      break
                    }
                    e.timeoutHandle = ro(ws.bind(null, e, Nu, Uu), t);
                    break
                  }
                  ws(e, Nu, Uu);
                  break;
                case 4:
                  if (ls(e, r), (4194240 & r) === r) break;
                  for (t = e.eventTimes, o = -1; 0 < r;) {
                    var l = 31 - it(r);
                    i = 1 << l, (l = t[l]) > o && (o = l), r &= ~i
                  }
                  if (r = o, 10 < (r = (120 > (r = Ke() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Eu(r / 1960)) - r)) {
                    e.timeoutHandle = ro(ws.bind(null, e, Nu, Uu), r);
                    break
                  }
                  ws(e, Nu, Uu);
                  break;
                default:
                  throw Error(a(329))
              }
            }
          }
          return rs(e, Ke()), e.callbackNode === n ? os.bind(null, e) : null
        }

        function as(e, t) {
          var n = Du;
          return e.current.memoizedState.isDehydrated && (fs(e, t).flags |= 256), 2 !== (e = vs(e, t)) && (t = Nu, Nu = n, null !== t && is(t)), e
        }

        function is(e) {
          null === Nu ? Nu = e : Nu.push.apply(Nu, e)
        }

        function ls(e, t) {
          for (t &= ~Bu, t &= ~Iu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - it(t),
              r = 1 << n;
            e[n] = -1, t &= ~r
          }
        }

        function us(e) {
          if (0 !== (6 & Tu)) throw Error(a(327));
          ks();
          var t = ft(e, 0);
          if (0 === (1 & t)) return rs(e, Ke()), null;
          var n = vs(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && (t = r, n = as(e, r))
          }
          if (1 === n) throw n = Lu, fs(e, 0), ls(e, t), rs(e, Ke()), n;
          if (6 === n) throw Error(a(345));
          return e.finishedWork = e.current.alternate, e.finishedLanes = t, ws(e, Nu, Uu), rs(e, Ke()), null
        }

        function ss(e, t) {
          var n = Tu;
          Tu |= 1;
          try {
            return e(t)
          } finally {
            0 === (Tu = n) && (Wu = Ke() + 500, No && Uo())
          }
        }

        function cs(e) {
          null !== Xu && 0 === Xu.tag && 0 === (6 & Tu) && ks();
          var t = Tu;
          Tu |= 1;
          var n = Pu.transition,
            r = bt;
          try {
            if (Pu.transition = null, bt = 1, e) return e()
          } finally {
            bt = r, Pu.transition = n, 0 === (6 & (Tu = t)) && Uo()
          }
        }

        function ds() {
          Ou = Mu.current, _o(Mu)
        }

        function fs(e, t) {
          e.finishedWork = null, e.finishedLanes = 0;
          var n = e.timeoutHandle;
          if (-1 !== n && (e.timeoutHandle = -1, oo(n)), null !== Ru)
            for (n = Ru.return; null !== n;) {
              var r = n;
              switch (na(r), r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r && jo();
                  break;
                case 3:
                  ai(), _o(Ro), _o(Ao), di();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  _o(ui);
                  break;
                case 10:
                  Sa(r.type._context);
                  break;
                case 22:
                case 23:
                  ds()
              }
              n = n.return
            }
          if (Au = e, Ru = e = Ms(e.current, null), zu = Ou = t, ju = 0, Lu = null, Bu = Iu = Fu = 0, Nu = Du = null, null !== Pa) {
            for (t = 0; t < Pa.length; t++)
              if (null !== (r = (n = Pa[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  a.next = o, r.next = i
                }
                n.pending = r
              } Pa = null
          }
          return e
        }

        function ps(e, t) {
          for (;;) {
            var n = Ru;
            try {
              if (ka(), fi.current = il, yi) {
                for (var r = mi.memoizedState; null !== r;) {
                  var o = r.queue;
                  null !== o && (o.pending = null), r = r.next
                }
                yi = !1
              }
              if (hi = 0, gi = vi = mi = null, bi = !1, xi = 0, _u.current = null, null === n || null === n.return) {
                ju = 1, Lu = t, Ru = null;
                break
              }
              e: {
                var i = e,
                  l = n.return,
                  u = n,
                  s = t;
                if (t = zu, u.flags |= 32768, null !== s && "object" === typeof s && "function" === typeof s.then) {
                  var c = s,
                    d = u,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
                  }
                  var h = gl(l);
                  if (null !== h) {
                    h.flags &= -257, yl(h, l, u, 0, t), 1 & h.mode && vl(i, c, t), s = c;
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set;
                      v.add(s), t.updateQueue = v
                    } else m.add(s);
                    break e
                  }
                  if (0 === (1 & t)) {
                    vl(i, c, t), ms();
                    break e
                  }
                  s = Error(a(426))
                } else if (aa && 1 & u.mode) {
                  var g = gl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256), yl(g, l, u, 0, t), ma(cl(s, u));
                    break e
                  }
                }
                i = s = cl(s, u),
                4 !== ju && (ju = 2),
                null === Du ? Du = [i] : Du.push(i),
                i = l;do {
                  switch (i.tag) {
                    case 3:
                      i.flags |= 65536, t &= -t, i.lanes |= t, Ia(i, hl(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var y = i.type,
                        b = i.stateNode;
                      if (0 === (128 & i.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === qu || !qu.has(b)))) {
                        i.flags |= 65536, t &= -t, i.lanes |= t, Ia(i, ml(i, u, t));
                        break e
                      }
                  }
                  i = i.return
                } while (null !== i)
              }
              xs(n)
            } catch (x) {
              t = x, Ru === n && null !== n && (Ru = n = n.return);
              continue
            }
            break
          }
        }

        function hs() {
          var e = Cu.current;
          return Cu.current = il, null === e ? il : e
        }

        function ms() {
          0 !== ju && 3 !== ju && 2 !== ju || (ju = 4), null === Au || 0 === (268435455 & Fu) && 0 === (268435455 & Iu) || ls(Au, zu)
        }

        function vs(e, t) {
          var n = Tu;
          Tu |= 2;
          var r = hs();
          for (Au === e && zu === t || (Uu = null, fs(e, t));;) try {
            gs();
            break
          } catch (o) {
            ps(e, o)
          }
          if (ka(), Tu = n, Cu.current = r, null !== Ru) throw Error(a(261));
          return Au = null, zu = 0, ju
        }

        function gs() {
          for (; null !== Ru;) bs(Ru)
        }

        function ys() {
          for (; null !== Ru && !Qe();) bs(Ru)
        }

        function bs(e) {
          var t = Su(e.alternate, e, Ou);
          e.memoizedProps = e.pendingProps, null === t ? xs(e) : Ru = t, _u.current = null
        }

        function xs(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (e = t.return, 0 === (32768 & t.flags)) {
              if (null !== (n = Yl(n, t, Ou))) return void(Ru = n)
            } else {
              if (null !== (n = Xl(n, t))) return n.flags &= 32767, void(Ru = n);
              if (null === e) return ju = 6, void(Ru = null);
              e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
            }
            if (null !== (t = t.sibling)) return void(Ru = t);
            Ru = t = e
          } while (null !== t);
          0 === ju && (ju = 5)
        }

        function ws(e, t, n) {
          var r = bt,
            o = Pu.transition;
          try {
            Pu.transition = null, bt = 1,
              function (e, t, n, r) {
                do {
                  ks()
                } while (null !== Xu);
                if (0 !== (6 & Tu)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
                e.callbackNode = null, e.callbackPriority = 0;
                var i = n.lanes | n.childLanes;
                if (function (e, t) {
                    var n = e.pendingLanes & ~t;
                    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n;) {
                      var o = 31 - it(n),
                        a = 1 << o;
                      t[o] = 0, r[o] = -1, e[o] = -1, n &= ~a
                    }
                  }(e, i), e === Au && (Ru = Au = null, zu = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Yu || (Yu = !0, As(tt, (function () {
                    return ks(), null
                  }))), i = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || i) {
                  i = Pu.transition, Pu.transition = null;
                  var l = bt;
                  bt = 1;
                  var u = Tu;
                  Tu |= 4, _u.current = null,
                    function (e, t) {
                      if (eo = Ht, pr(e = fr())) {
                        if ("selectionStart" in e) var n = {
                          start: e.selectionStart,
                          end: e.selectionEnd
                        };
                        else e: {
                          var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                          if (r && 0 !== r.rangeCount) {
                            n = r.anchorNode;
                            var o = r.anchorOffset,
                              i = r.focusNode;
                            r = r.focusOffset;
                            try {
                              n.nodeType, i.nodeType
                            } catch (w) {
                              n = null;
                              break e
                            }
                            var l = 0,
                              u = -1,
                              s = -1,
                              c = 0,
                              d = 0,
                              f = e,
                              p = null;
                            t: for (;;) {
                              for (var h; f !== n || 0 !== o && 3 !== f.nodeType || (u = l + o), f !== i || 0 !== r && 3 !== f.nodeType || (s = l + r), 3 === f.nodeType && (l += f.nodeValue.length), null !== (h = f.firstChild);) p = f, f = h;
                              for (;;) {
                                if (f === e) break t;
                                if (p === n && ++c === o && (u = l), p === i && ++d === r && (s = l), null !== (h = f.nextSibling)) break;
                                p = (f = p).parentNode
                              }
                              f = h
                            }
                            n = -1 === u || -1 === s ? null : {
                              start: u,
                              end: s
                            }
                          } else n = null
                        }
                        n = n || {
                          start: 0,
                          end: 0
                        }
                      } else n = null;
                      for (to = {
                          focusedElem: e,
                          selectionRange: n
                        }, Ht = !1, Zl = t; null !== Zl;)
                        if (e = (t = Zl).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Zl = e;
                        else
                          for (; null !== Zl;) {
                            t = Zl;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags)) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (null !== m) {
                                    var v = m.memoizedProps,
                                      g = m.memoizedState,
                                      y = t.stateNode,
                                      b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ga(t.type, v), g);
                                    y.__reactInternalSnapshotBeforeUpdate = b
                                  }
                                  break;
                                case 3:
                                  var x = t.stateNode.containerInfo;
                                  1 === x.nodeType ? x.textContent = "" : 9 === x.nodeType && x.documentElement && x.removeChild(x.documentElement);
                                  break;
                                default:
                                  throw Error(a(163))
                              }
                            } catch (w) {
                              Es(t, t.return, w)
                            }
                            if (null !== (e = t.sibling)) {
                              e.return = t.return, Zl = e;
                              break
                            }
                            Zl = t.return
                          }
                      m = tu, tu = !1
                    }(e, n), vu(n, e), hr(to), Ht = !!eo, to = eo = null, e.current = n, yu(n, e, o), Ge(), Tu = u, bt = l, Pu.transition = i
                } else e.current = n;
                if (Yu && (Yu = !1, Xu = e, Qu = o), 0 === (i = e.pendingLanes) && (qu = null), function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot) try {
                      at.onCommitFiberRoot(ot, e, void 0, 128 === (128 & e.current.flags))
                    } catch (t) {}
                  }(n.stateNode), rs(e, Ke()), null !== t)
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((o = t[n]).value, {
                    componentStack: o.stack,
                    digest: o.digest
                  });
                if (Hu) throw Hu = !1, e = $u, $u = null, e;
                0 !== (1 & Qu) && 0 !== e.tag && ks(), 0 !== (1 & (i = e.pendingLanes)) ? e === Ku ? Gu++ : (Gu = 0, Ku = e) : Gu = 0, Uo()
              }(e, t, n, r)
          } finally {
            Pu.transition = o, bt = r
          }
          return null
        }

        function ks() {
          if (null !== Xu) {
            var e = xt(Qu),
              t = Pu.transition,
              n = bt;
            try {
              if (Pu.transition = null, bt = 16 > e ? 16 : e, null === Xu) var r = !1;
              else {
                if (e = Xu, Xu = null, Qu = 0, 0 !== (6 & Tu)) throw Error(a(331));
                var o = Tu;
                for (Tu |= 4, Zl = e.current; null !== Zl;) {
                  var i = Zl,
                    l = i.child;
                  if (0 !== (16 & Zl.flags)) {
                    var u = i.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Zl = c; null !== Zl;) {
                          var d = Zl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, d, i)
                          }
                          var f = d.child;
                          if (null !== f) f.return = d, Zl = f;
                          else
                            for (; null !== Zl;) {
                              var p = (d = Zl).sibling,
                                h = d.return;
                              if (au(d), d === c) {
                                Zl = null;
                                break
                              }
                              if (null !== p) {
                                p.return = h, Zl = p;
                                break
                              }
                              Zl = h
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            v.sibling = null, v = g
                          } while (null !== v)
                        }
                      }
                      Zl = i
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l) l.return = i, Zl = l;
                  else e: for (; null !== Zl;) {
                    if (0 !== (2048 & (i = Zl).flags)) switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        nu(9, i, i.return)
                    }
                    var y = i.sibling;
                    if (null !== y) {
                      y.return = i.return, Zl = y;
                      break e
                    }
                    Zl = i.return
                  }
                }
                var b = e.current;
                for (Zl = b; null !== Zl;) {
                  var x = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x) x.return = l, Zl = x;
                  else e: for (l = b; null !== Zl;) {
                    if (0 !== (2048 & (u = Zl).flags)) try {
                      switch (u.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ru(9, u)
                      }
                    } catch (k) {
                      Es(u, u.return, k)
                    }
                    if (u === l) {
                      Zl = null;
                      break e
                    }
                    var w = u.sibling;
                    if (null !== w) {
                      w.return = u.return, Zl = w;
                      break e
                    }
                    Zl = u.return
                  }
                }
                if (Tu = o, Uo(), at && "function" === typeof at.onPostCommitFiberRoot) try {
                  at.onPostCommitFiberRoot(ot, e)
                } catch (k) {}
                r = !0
              }
              return r
            } finally {
              bt = n, Pu.transition = t
            }
          }
          return !1
        }

        function Ss(e, t, n) {
          e = La(e, t = hl(0, t = cl(n, t), 1), 1), t = es(), null !== e && (gt(e, 1, t), rs(e, t))
        }

        function Es(e, t, n) {
          if (3 === e.tag) Ss(e, e, n);
          else
            for (; null !== t;) {
              if (3 === t.tag) {
                Ss(t, e, n);
                break
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === qu || !qu.has(r))) {
                  t = La(t, e = ml(t, e = cl(n, e), 1), 1), e = es(), null !== t && (gt(t, 1, e), rs(t, e));
                  break
                }
              }
              t = t.return
            }
        }

        function Cs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t), t = es(), e.pingedLanes |= e.suspendedLanes & n, Au === e && (zu & n) === n && (4 === ju || 3 === ju && (130023424 & zu) === zu && 500 > Ke() - Vu ? fs(e, 0) : Bu |= n), rs(e, t)
        }

        function _s(e, t) {
          0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = es();
          null !== (e = Ra(e, t)) && (gt(e, t, n), rs(e, n))
        }

        function Ps(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), _s(e, n)
        }

        function Ts(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314))
          }
          null !== r && r.delete(t), _s(e, n)
        }

        function As(e, t) {
          return Ye(e, t)
        }

        function Rs(e, t, n, r) {
          this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
        }

        function zs(e, t, n, r) {
          return new Rs(e, t, n, r)
        }

        function Os(e) {
          return !(!(e = e.prototype) || !e.isReactComponent)
        }

        function Ms(e, t) {
          var n = e.alternate;
          return null === n ? ((n = zs(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
          }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
        }

        function js(e, t, n, r, o, i) {
          var l = 2;
          if (r = e, "function" === typeof e) Os(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else e: switch (e) {
            case S:
              return Ls(n.children, o, i, t);
            case E:
              l = 8, o |= 8;
              break;
            case C:
              return (e = zs(12, n, t, 2 | o)).elementType = C, e.lanes = i, e;
            case A:
              return (e = zs(13, n, t, o)).elementType = A, e.lanes = i, e;
            case R:
              return (e = zs(19, n, t, o)).elementType = R, e.lanes = i, e;
            case M:
              return Fs(n, o, i, t);
            default:
              if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                case _:
                  l = 10;
                  break e;
                case P:
                  l = 9;
                  break e;
                case T:
                  l = 11;
                  break e;
                case z:
                  l = 14;
                  break e;
                case O:
                  l = 16, r = null;
                  break e
              }
              throw Error(a(130, null == e ? e : typeof e, ""))
          }
          return (t = zs(l, n, t, o)).elementType = e, t.type = r, t.lanes = i, t
        }

        function Ls(e, t, n, r) {
          return (e = zs(7, e, r, t)).lanes = n, e
        }

        function Fs(e, t, n, r) {
          return (e = zs(22, e, r, t)).elementType = M, e.lanes = n, e.stateNode = {
            isHidden: !1
          }, e
        }

        function Is(e, t, n) {
          return (e = zs(6, e, null, t)).lanes = n, e
        }

        function Bs(e, t, n) {
          return (t = zs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
          }, t
        }

        function Ds(e, t, n, r, o) {
          this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
        }

        function Ns(e, t, n, r, o, a, i, l, u) {
          return e = new Ds(e, t, n, l, u), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = zs(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
          }, Oa(a), e
        }

        function Vs(e, t, n) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
          }
        }

        function Ws(e) {
          if (!e) return To;
          e: {
            if (We(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(a(170));
            var t = e;do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Mo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                  }
              }
              t = t.return
            } while (null !== t);
            throw Error(a(171))
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Mo(n)) return Fo(e, n, t)
          }
          return t
        }

        function Us(e, t, n, r, o, a, i, l, u) {
          return (e = Ns(n, r, !0, e, 0, a, 0, l, u)).context = Ws(null), n = e.current, (a = ja(r = es(), o = ts(n))).callback = void 0 !== t && null !== t ? t : null, La(n, a, o), e.current.lanes = o, gt(e, o, r), rs(e, r), e
        }

        function Hs(e, t, n, r) {
          var o = t.current,
            a = es(),
            i = ts(o);
          return n = Ws(n), null === t.context ? t.context = n : t.pendingContext = n, (t = ja(a, i)).payload = {
            element: e
          }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = La(o, t, i)) && (ns(e, o, i, a), Fa(e, o, i)), i
        }

        function $s(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
        }

        function qs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t
          }
        }

        function Ys(e, t) {
          qs(e, t), (e = e.alternate) && qs(e, t)
        }
        Su = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ro.current) xl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return xl = !1,
                function (e, t, n) {
                  switch (t.tag) {
                    case 3:
                      Rl(t), ha();
                      break;
                    case 5:
                      ii(t);
                      break;
                    case 1:
                      Mo(t.type) && Io(t);
                      break;
                    case 4:
                      oi(t, t.stateNode.containerInfo);
                      break;
                    case 10:
                      var r = t.type._context,
                        o = t.memoizedProps.value;
                      Po(ya, r._currentValue), r._currentValue = o;
                      break;
                    case 13:
                      if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Po(ui, 1 & ui.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Il(e, t, n) : (Po(ui, 1 & ui.current), null !== (e = Hl(e, t, n)) ? e.sibling : null);
                      Po(ui, 1 & ui.current);
                      break;
                    case 19:
                      if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                        if (r) return Wl(e, t, n);
                        t.flags |= 128
                      }
                      if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), Po(ui, ui.current), r) break;
                      return null;
                    case 22:
                    case 23:
                      return t.lanes = 0, Cl(e, t, n)
                  }
                  return Hl(e, t, n)
                }(e, t, n);
              xl = 0 !== (131072 & e.flags)
            }
          else xl = !1, aa && 0 !== (1048576 & t.flags) && ea(t, Yo, t.index);
          switch (t.lanes = 0, t.tag) {
            case 2:
              var r = t.type;
              Ul(e, t), e = t.pendingProps;
              var o = Oo(t, Ao.current);
              Ca(t, n), o = Ei(null, t, r, e, o, n);
              var i = Ci();
              return t.flags |= 1, "object" === typeof o && null !== o && "function" === typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Mo(r) ? (i = !0, Io(t)) : i = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, Oa(t), o.updater = Wa, t.stateNode = o, o._reactInternals = t, qa(t, r, e, n), t = Al(null, t, r, !0, i, n)) : (t.tag = 0, aa && i && ta(t), wl(null, t, o, n), t = t.child), t;
            case 16:
              r = t.elementType;
              e: {
                switch (Ul(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = function (e) {
                  if ("function" === typeof e) return Os(e) ? 1 : 0;
                  if (void 0 !== e && null !== e) {
                    if ((e = e.$$typeof) === T) return 11;
                    if (e === z) return 14
                  }
                  return 2
                }(r), e = ga(r, e), o) {
                  case 0:
                    t = Pl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = kl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, ga(r.type, e), n);
                    break e
                }
                throw Error(a(306, r, ""))
              }
              return t;
            case 0:
              return r = t.type, o = t.pendingProps, Pl(e, t, r, o = t.elementType === r ? o : ga(r, o), n);
            case 1:
              return r = t.type, o = t.pendingProps, Tl(e, t, r, o = t.elementType === r ? o : ga(r, o), n);
            case 3:
              e: {
                if (Rl(t), null === e) throw Error(a(387));r = t.pendingProps,
                o = (i = t.memoizedState).element,
                Ma(e, t),
                Ba(t, r, null, n);
                var l = t.memoizedState;
                if (r = l.element, i.isDehydrated) {
                  if (i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions
                    }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                    t = zl(e, t, r, n, o = cl(Error(a(423)), t));
                    break e
                  }
                  if (r !== o) {
                    t = zl(e, t, r, n, o = cl(Error(a(424)), t));
                    break e
                  }
                  for (oa = so(t.stateNode.containerInfo.firstChild), ra = t, aa = !0, ia = null, n = Za(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                } else {
                  if (ha(), r === o) {
                    t = Hl(e, t, n);
                    break e
                  }
                  wl(e, t, r, n)
                }
                t = t.child
              }
              return t;
            case 5:
              return ii(t), null === e && ca(t), r = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, l = o.children, no(r, o) ? l = null : null !== i && no(r, i) && (t.flags |= 32), _l(e, t), wl(e, t, l, n), t.child;
            case 6:
              return null === e && ca(t), null;
            case 13:
              return Il(e, t, n);
            case 4:
              return oi(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ka(t, null, r, n) : wl(e, t, r, n), t.child;
            case 11:
              return r = t.type, o = t.pendingProps, kl(e, t, r, o = t.elementType === r ? o : ga(r, o), n);
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, Po(ya, r._currentValue), r._currentValue = l, null !== i)
                  if (lr(i.value, l)) {
                    if (i.children === o.children && !Ro.current) {
                      t = Hl(e, t, n);
                      break e
                    }
                  } else
                    for (null !== (i = t.child) && (i.return = t); null !== i;) {
                      var u = i.dependencies;
                      if (null !== u) {
                        l = i.child;
                        for (var s = u.firstContext; null !== s;) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              (s = ja(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d ? s.next = s : (s.next = d.next, d.next = s), c.pending = s
                              }
                            }
                            i.lanes |= n, null !== (s = i.alternate) && (s.lanes |= n), Ea(i.return, n, t), u.lanes |= n;
                            break
                          }
                          s = s.next
                        }
                      } else if (10 === i.tag) l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(a(341));
                        l.lanes |= n, null !== (u = l.alternate) && (u.lanes |= n), Ea(l, n, t), l = i.sibling
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l;) {
                          if (l === t) {
                            l = null;
                            break
                          }
                          if (null !== (i = l.sibling)) {
                            i.return = l.return, l = i;
                            break
                          }
                          l = l.return
                        }
                      i = l
                    }
                wl(e, t, o.children, n),
                t = t.child
              }
              return t;
            case 9:
              return o = t.type, r = t.pendingProps.children, Ca(t, n), r = r(o = _a(o)), t.flags |= 1, wl(e, t, r, n), t.child;
            case 14:
              return o = ga(r = t.type, t.pendingProps), Sl(e, t, r, o = ga(r.type, o), n);
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ga(r, o), Ul(e, t), t.tag = 1, Mo(r) ? (e = !0, Io(t)) : e = !1, Ca(t, n), Ha(t, r, o), qa(t, r, o, n), Al(null, t, r, !0, e, n);
            case 19:
              return Wl(e, t, n);
            case 22:
              return Cl(e, t, n)
          }
          throw Error(a(156, t.tag))
        };
        var Xs = "function" === typeof reportError ? reportError : function (e) {
          console.error(e)
        };

        function Qs(e) {
          this._internalRoot = e
        }

        function Gs(e) {
          this._internalRoot = e
        }

        function Ks(e) {
          return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
        }

        function Zs(e) {
          return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
        }

        function Js() {}

        function ec(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ("function" === typeof o) {
              var l = o;
              o = function () {
                var e = $s(i);
                l.call(e)
              }
            }
            Hs(t, i, e, o)
          } else i = function (e, t, n, r, o) {
            if (o) {
              if ("function" === typeof r) {
                var a = r;
                r = function () {
                  var e = $s(i);
                  a.call(e)
                }
              }
              var i = Us(t, r, e, 0, null, !1, 0, "", Js);
              return e._reactRootContainer = i, e[mo] = i.current, Wr(8 === e.nodeType ? e.parentNode : e), cs(), i
            }
            for (; o = e.lastChild;) e.removeChild(o);
            if ("function" === typeof r) {
              var l = r;
              r = function () {
                var e = $s(u);
                l.call(e)
              }
            }
            var u = Ns(e, 0, !1, null, 0, !1, 0, "", Js);
            return e._reactRootContainer = u, e[mo] = u.current, Wr(8 === e.nodeType ? e.parentNode : e), cs((function () {
              Hs(t, u, n, r)
            })), u
          }(n, t, e, o, r);
          return $s(i)
        }
        Gs.prototype.render = Qs.prototype.render = function (e) {
          var t = this._internalRoot;
          if (null === t) throw Error(a(409));
          Hs(e, t, null, null)
        }, Gs.prototype.unmount = Qs.prototype.unmount = function () {
          var e = this._internalRoot;
          if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            cs((function () {
              Hs(null, e, null, null)
            })), t[mo] = null
          }
        }, Gs.prototype.unstable_scheduleHydration = function (e) {
          if (e) {
            var t = Et();
            e = {
              blockedOn: null,
              target: e,
              priority: t
            };
            for (var n = 0; n < Mt.length && 0 !== t && t < Mt[n].priority; n++);
            Mt.splice(n, 0, e), 0 === n && It(e)
          }
        }, wt = function (e) {
          switch (e.tag) {
            case 3:
              var t = e.stateNode;
              if (t.current.memoizedState.isDehydrated) {
                var n = dt(t.pendingLanes);
                0 !== n && (yt(t, 1 | n), rs(t, Ke()), 0 === (6 & Tu) && (Wu = Ke() + 500, Uo()))
              }
              break;
            case 13:
              cs((function () {
                var t = Ra(e, 1);
                if (null !== t) {
                  var n = es();
                  ns(t, e, 1, n)
                }
              })), Ys(e, 1)
          }
        }, kt = function (e) {
          if (13 === e.tag) {
            var t = Ra(e, 134217728);
            if (null !== t) ns(t, e, 134217728, es());
            Ys(e, 134217728)
          }
        }, St = function (e) {
          if (13 === e.tag) {
            var t = ts(e),
              n = Ra(e, t);
            if (null !== n) ns(n, e, t, es());
            Ys(e, t)
          }
        }, Et = function () {
          return bt
        }, Ct = function (e, t) {
          var n = bt;
          try {
            return bt = e, t()
          } finally {
            bt = n
          }
        }, ke = function (e, t, n) {
          switch (t) {
            case "input":
              if (Z(e, n), t = n.name, "radio" === n.type && null != t) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var o = ko(r);
                    if (!o) throw Error(a(90));
                    Y(r), Z(r, o)
                  }
                }
              }
              break;
            case "textarea":
              ae(e, n);
              break;
            case "select":
              null != (t = n.value) && ne(e, !!n.multiple, t, !1)
          }
        }, Te = ss, Ae = cs;
        var tc = {
            usingClientEntryPoint: !1,
            Events: [xo, wo, ko, _e, Pe, ss]
          },
          nc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom"
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode
            },
            findFiberByHostInstance: nc.findFiberByHostInstance || function () {
              return null
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber) try {
            ot = oc.inject(rc), at = oc
          } catch (ce) {}
        }
        t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (!Ks(t)) throw Error(a(200));
          return Vs(e, t, null, n)
        }, t.createRoot = function (e, t) {
          if (!Ks(e)) throw Error(a(299));
          var n = !1,
            r = "",
            o = Xs;
          return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = Ns(e, 1, !1, null, 0, n, 0, r, o), e[mo] = t.current, Wr(8 === e.nodeType ? e.parentNode : e), new Qs(t)
        }, t.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(a(188));
            throw e = Object.keys(e).join(","), Error(a(268, e))
          }
          return e = null === (e = $e(t)) ? null : e.stateNode
        }, t.flushSync = function (e) {
          return cs(e)
        }, t.hydrate = function (e, t, n) {
          if (!Zs(t)) throw Error(a(200));
          return ec(null, e, t, !0, n)
        }, t.hydrateRoot = function (e, t, n) {
          if (!Ks(e)) throw Error(a(405));
          var r = null != n && n.hydratedSources || null,
            o = !1,
            i = "",
            l = Xs;
          if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = Us(t, null, e, 1, null != n ? n : null, o, 0, i, l), e[mo] = t.current, Wr(e), r)
            for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
          return new Gs(t)
        }, t.render = function (e, t, n) {
          if (!Zs(t)) throw Error(a(200));
          return ec(null, e, t, !1, n)
        }, t.unmountComponentAtNode = function (e) {
          if (!Zs(e)) throw Error(a(40));
          return !!e._reactRootContainer && (cs((function () {
            ec(null, null, e, !1, (function () {
              e._reactRootContainer = null, e[mo] = null
            }))
          })), !0)
        }, t.unstable_batchedUpdates = ss, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!Zs(n)) throw Error(a(200));
          if (null == e || void 0 === e._reactInternals) throw Error(a(38));
          return ec(e, t, n, !1, r)
        }, t.version = "18.2.0-next-9e3b772b8-20220608"
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
      },
      164: function (e, t, n) {
        "use strict";
        ! function e() {
          if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
          } catch (t) {
            console.error(t)
          }
        }(), e.exports = n(463)
      },
      77: function (e) {
        var t = "undefined" !== typeof Element,
          n = "function" === typeof Map,
          r = "function" === typeof Set,
          o = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;

        function a(e, i) {
          if (e === i) return !0;
          if (e && i && "object" == typeof e && "object" == typeof i) {
            if (e.constructor !== i.constructor) return !1;
            var l, u, s, c;
            if (Array.isArray(e)) {
              if ((l = e.length) != i.length) return !1;
              for (u = l; 0 !== u--;)
                if (!a(e[u], i[u])) return !1;
              return !0
            }
            if (n && e instanceof Map && i instanceof Map) {
              if (e.size !== i.size) return !1;
              for (c = e.entries(); !(u = c.next()).done;)
                if (!i.has(u.value[0])) return !1;
              for (c = e.entries(); !(u = c.next()).done;)
                if (!a(u.value[1], i.get(u.value[0]))) return !1;
              return !0
            }
            if (r && e instanceof Set && i instanceof Set) {
              if (e.size !== i.size) return !1;
              for (c = e.entries(); !(u = c.next()).done;)
                if (!i.has(u.value[0])) return !1;
              return !0
            }
            if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
              if ((l = e.length) != i.length) return !1;
              for (u = l; 0 !== u--;)
                if (e[u] !== i[u]) return !1;
              return !0
            }
            if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
            if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === i.valueOf();
            if (e.toString !== Object.prototype.toString) return e.toString() === i.toString();
            if ((l = (s = Object.keys(e)).length) !== Object.keys(i).length) return !1;
            for (u = l; 0 !== u--;)
              if (!Object.prototype.hasOwnProperty.call(i, s[u])) return !1;
            if (t && e instanceof Element) return !1;
            for (u = l; 0 !== u--;)
              if (("_owner" !== s[u] && "__v" !== s[u] && "__o" !== s[u] || !e.$$typeof) && !a(e[s[u]], i[s[u]])) return !1;
            return !0
          }
          return e !== e && i !== i
        }
        e.exports = function (e, t) {
          try {
            return a(e, t)
          } catch (n) {
            if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
            throw n
          }
        }
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          o = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          u = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
          };

        function s(e, t, n) {
          var r, a = {},
            s = null,
            c = null;
          for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t) i.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: s,
            ref: c,
            props: a,
            _owner: l.current
          }
        }
        t.jsx = s, t.jsxs = s
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {}
          },
          m = Object.assign,
          v = {};

        function g(e, t, n) {
          this.props = e, this.context = t, this.refs = v, this.updater = n || h
        }

        function y() {}

        function b(e, t, n) {
          this.props = e, this.context = t, this.refs = v, this.updater = n || h
        }
        g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) {
          if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, e, t, "setState")
        }, g.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }, y.prototype = g.prototype;
        var x = b.prototype = new y;
        x.constructor = b, m(x, g.prototype), x.isPureReactComponent = !0;
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = {
            current: null
          },
          E = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
          };

        function C(e, t, r) {
          var o, a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) k.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o]);
          var u = arguments.length - 2;
          if (1 === u) a.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s
          }
          if (e && e.defaultProps)
            for (o in u = e.defaultProps) void 0 === a[o] && (a[o] = u[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: S.current
          }
        }

        function _(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n
        }
        var P = /\/+/g;

        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key ? function (e) {
            var t = {
              "=": "=0",
              ":": "=2"
            };
            return "$" + e.replace(/[=:]/g, (function (e) {
              return t[e]
            }))
          }("" + e.key) : t.toString(36)
        }

        function A(e, t, o, a, i) {
          var l = typeof e;
          "undefined" !== l && "boolean" !== l || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else switch (l) {
            case "string":
            case "number":
              u = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case n:
                case r:
                  u = !0
              }
          }
          if (u) return i = i(u = e), e = "" === a ? "." + T(u, 0) : a, w(i) ? (o = "", null != e && (o = e.replace(P, "$&/") + "/"), A(i, t, o, "", (function (e) {
            return e
          }))) : null != i && (_(i) && (i = function (e, t) {
            return {
              $$typeof: n,
              type: e.type,
              key: t,
              ref: e.ref,
              props: e.props,
              _owner: e._owner
            }
          }(i, o + (!i.key || u && u.key === i.key ? "" : ("" + i.key).replace(P, "$&/") + "/") + e)), t.push(i)), 1;
          if (u = 0, a = "" === a ? "." : a + ":", w(e))
            for (var s = 0; s < e.length; s++) {
              var c = a + T(l = e[s], s);
              u += A(l, t, o, c, i)
            } else if (c = function (e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = p && e[p] || e["@@iterator"]) ? e : null
              }(e), "function" === typeof c)
              for (e = c.call(e), s = 0; !(l = e.next()).done;) u += A(l = l.value, t, o, c = a + T(l, s++), i);
            else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
          return u
        }

        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return A(e, r, "", "", (function (e) {
            return t.call(n, e, o++)
          })), r
        }

        function z(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function (t) {
              0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
            }), (function (t) {
              0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
            })), -1 === e._status && (e._status = 0, e._result = t)
          }
          if (1 === e._status) return e._result.default;
          throw e._result
        }
        var O = {
            current: null
          },
          M = {
            transition: null
          },
          j = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: S
          };
        t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(e, (function () {
              t.apply(this, arguments)
            }), n)
          },
          count: function (e) {
            var t = 0;
            return R(e, (function () {
              t++
            })), t
          },
          toArray: function (e) {
            return R(e, (function (e) {
              return e
            })) || []
          },
          only: function (e) {
            if (!_(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
          }
        }, t.Component = g, t.Fragment = o, t.Profiler = i, t.PureComponent = b, t.StrictMode = a, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, t.cloneElement = function (e, t, r) {
          if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
          var o = m({}, e.props),
            a = e.key,
            i = e.ref,
            l = e._owner;
          if (null != t) {
            if (void 0 !== t.ref && (i = t.ref, l = S.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
            for (s in t) k.call(t, s) && !E.hasOwnProperty(s) && (o[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
          }
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            u = Array(s);
            for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u
          }
          return {
            $$typeof: n,
            type: e.type,
            key: a,
            ref: i,
            props: o,
            _owner: l
          }
        }, t.createContext = function (e) {
          return (e = {
            $$typeof: u,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
          }).Provider = {
            $$typeof: l,
            _context: e
          }, e.Consumer = e
        }, t.createElement = C, t.createFactory = function (e) {
          var t = C.bind(null, e);
          return t.type = e, t
        }, t.createRef = function () {
          return {
            current: null
          }
        }, t.forwardRef = function (e) {
          return {
            $$typeof: s,
            render: e
          }
        }, t.isValidElement = _, t.lazy = function (e) {
          return {
            $$typeof: f,
            _payload: {
              _status: -1,
              _result: e
            },
            _init: z
          }
        }, t.memo = function (e, t) {
          return {
            $$typeof: d,
            type: e,
            compare: void 0 === t ? null : t
          }
        }, t.startTransition = function (e) {
          var t = M.transition;
          M.transition = {};
          try {
            e()
          } finally {
            M.transition = t
          }
        }, t.unstable_act = function () {
          throw Error("act(...) is not supported in production builds of React.")
        }, t.useCallback = function (e, t) {
          return O.current.useCallback(e, t)
        }, t.useContext = function (e) {
          return O.current.useContext(e)
        }, t.useDebugValue = function () {}, t.useDeferredValue = function (e) {
          return O.current.useDeferredValue(e)
        }, t.useEffect = function (e, t) {
          return O.current.useEffect(e, t)
        }, t.useId = function () {
          return O.current.useId()
        }, t.useImperativeHandle = function (e, t, n) {
          return O.current.useImperativeHandle(e, t, n)
        }, t.useInsertionEffect = function (e, t) {
          return O.current.useInsertionEffect(e, t)
        }, t.useLayoutEffect = function (e, t) {
          return O.current.useLayoutEffect(e, t)
        }, t.useMemo = function (e, t) {
          return O.current.useMemo(e, t)
        }, t.useReducer = function (e, t, n) {
          return O.current.useReducer(e, t, n)
        }, t.useRef = function (e) {
          return O.current.useRef(e)
        }, t.useState = function (e) {
          return O.current.useState(e)
        }, t.useSyncExternalStore = function (e, t, n) {
          return O.current.useSyncExternalStore(e, t, n)
        }, t.useTransition = function () {
          return O.current.useTransition()
        }, t.version = "18.2.0"
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117)
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374)
      },
      813: function (e, t) {
        "use strict";

        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n;) {
            var r = n - 1 >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            e[r] = t, e[n] = o, n = r
          }
        }

        function r(e) {
          return 0 === e.length ? null : e[0]
        }

        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i;) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                s = l + 1,
                c = e[s];
              if (0 > a(u, n)) s < o && 0 > a(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[l] = n, r = l);
              else {
                if (!(s < o && 0 > a(c, n))) break e;
                e[r] = c, e[s] = n, r = s
              }
            }
          }
          return t
        }

        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id
        }
        if ("object" === typeof performance && "function" === typeof performance.now) {
          var i = performance;
          t.unstable_now = function () {
            return i.now()
          }
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u
          }
        }
        var s = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;

        function x(e) {
          for (var t = r(c); null !== t;) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), t.sortIndex = t.expirationTime, n(s, t)
            }
            t = r(c)
          }
        }

        function w(e) {
          if (v = !1, x(e), !m)
            if (null !== r(s)) m = !0, M(k);
            else {
              var t = r(c);
              null !== t && j(w, t.startTime - e)
            }
        }

        function k(e, n) {
          m = !1, v && (v = !1, y(_), _ = -1), h = !0;
          var a = p;
          try {
            for (x(n), f = r(s); null !== f && (!(f.expirationTime > n) || e && !A());) {
              var i = f.callback;
              if ("function" === typeof i) {
                f.callback = null, p = f.priorityLevel;
                var l = i(f.expirationTime <= n);
                n = t.unstable_now(), "function" === typeof l ? f.callback = l : f === r(s) && o(s), x(n)
              } else o(s);
              f = r(s)
            }
            if (null !== f) var u = !0;
            else {
              var d = r(c);
              null !== d && j(w, d.startTime - n), u = !1
            }
            return u
          } finally {
            f = null, p = a, h = !1
          }
        }
        "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S, E = !1,
          C = null,
          _ = -1,
          P = 5,
          T = -1;

        function A() {
          return !(t.unstable_now() - T < P)
        }

        function R() {
          if (null !== C) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              n = C(!0, e)
            } finally {
              n ? S() : (E = !1, C = null)
            }
          } else E = !1
        }
        if ("function" === typeof b) S = function () {
          b(R)
        };
        else if ("undefined" !== typeof MessageChannel) {
          var z = new MessageChannel,
            O = z.port2;
          z.port1.onmessage = R, S = function () {
            O.postMessage(null)
          }
        } else S = function () {
          g(R, 0)
        };

        function M(e) {
          C = e, E || (E = !0, S())
        }

        function j(e, n) {
          _ = g((function () {
            e(t.unstable_now())
          }), n)
        }
        t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
          e.callback = null
        }, t.unstable_continueExecution = function () {
          m || h || (m = !0, M(k))
        }, t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5
        }, t.unstable_getCurrentPriorityLevel = function () {
          return p
        }, t.unstable_getFirstCallbackNode = function () {
          return r(s)
        }, t.unstable_next = function (e) {
          switch (p) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = p
          }
          var n = p;
          p = t;
          try {
            return e()
          } finally {
            p = n
          }
        }, t.unstable_pauseExecution = function () {}, t.unstable_requestPaint = function () {}, t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3
          }
          var n = p;
          p = e;
          try {
            return t()
          } finally {
            p = n
          }
        }, t.unstable_scheduleCallback = function (e, o, a) {
          var i = t.unstable_now();
          switch ("object" === typeof a && null !== a ? a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i : a = i, e) {
            case 1:
              var l = -1;
              break;
            case 2:
              l = 250;
              break;
            case 5:
              l = 1073741823;
              break;
            case 4:
              l = 1e4;
              break;
            default:
              l = 5e3
          }
          return e = {
            id: d++,
            callback: o,
            priorityLevel: e,
            startTime: a,
            expirationTime: l = a + l,
            sortIndex: -1
          }, a > i ? (e.sortIndex = a, n(c, e), null === r(s) && e === r(c) && (v ? (y(_), _ = -1) : v = !0, j(w, a - i))) : (e.sortIndex = l, n(s, e), m || h || (m = !0, M(k))), e
        }, t.unstable_shouldYield = A, t.unstable_wrapCallback = function (e) {
          var t = p;
          return function () {
            var n = p;
            p = t;
            try {
              return e.apply(this, arguments)
            } finally {
              p = n
            }
          }
        }
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813)
      },
      458: function (e) {
        e.exports = function () {
          var e = document.getSelection();
          if (!e.rangeCount) return function () {};
          for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
          switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
              t.blur();
              break;
            default:
              t = null
          }
          return e.removeAllRanges(),
            function () {
              "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach((function (t) {
                e.addRange(t)
              })), t && t.focus()
            }
        }
      }
    },
    t = {};

  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = t[r] = {
      id: r,
      loaded: !1,
      exports: {}
    };
    return e[r](a, a.exports, n), a.loaded = !0, a.exports
  }
  n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return n.d(t, {
        a: t
      }), t
    },
    function () {
      var e, t = Object.getPrototypeOf ? function (e) {
        return Object.getPrototypeOf(e)
      } : function (e) {
        return e.__proto__
      };
      n.t = function (r, o) {
        if (1 & o && (r = this(r)), 8 & o) return r;
        if ("object" === typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && "function" === typeof r.then) return r
        }
        var a = Object.create(null);
        n.r(a);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var l = 2 & o && r;
          "object" == typeof l && !~e.indexOf(l); l = t(l)) Object.getOwnPropertyNames(l).forEach((function (e) {
          i[e] = function () {
            return r[e]
          }
        }));
        return i.default = function () {
          return r
        }, n.d(a, i), a
      }
    }(), n.d = function (e, t) {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }, n.g = function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")()
      } catch (e) {
        if ("object" === typeof window) return window
      }
    }(), n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.r = function (e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, n.nmd = function (e) {
      return e.paths = [], e.children || (e.children = []), e
    },
    function () {
      "use strict";
      var e = n(791),
        t = n.t(e, 2),
        r = n(250);

      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
        }
      }

      function i(e) {
        return function (e) {
          if (Array.isArray(e)) return o(e)
        }(e) || function (e) {
          if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || a(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function l(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e
        }(e) || function (e, t) {
          var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
            var r, o, a = [],
              i = !0,
              l = !1;
            try {
              for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
            } catch (u) {
              l = !0, o = u
            } finally {
              try {
                i || null == n.return || n.return()
              } finally {
                if (l) throw o
              }
            }
            return a
          }
        }(e, t) || a(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var u = n(198),
        s = n.n(u),
        c = 1 / 60 * 1e3,
        d = "undefined" !== typeof performance ? function () {
          return performance.now()
        } : function () {
          return Date.now()
        };

      function f(e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0
      }

      function p(e) {
        return "number" === typeof e
      }

      function h(e) {
        return Array.isArray(e)
      }

      function m(e) {
        return "function" === typeof e
      }

      function v(e) {
        var t = typeof e;
        return null != e && ("object" === t || "function" === t) && !h(e)
      }

      function g(e) {
        return v(e) && 0 === Object.keys(e).length
      }

      function y(e) {
        return "[object String]" === Object.prototype.toString.call(e)
      }

      function b(e) {
        return /^var\(--.+\)$/.test(e)
      }
      var x = !1;

      function w(e, t) {
        var n = {};
        return Object.keys(e).forEach((function (r) {
          t.includes(r) || (n[r] = e[r])
        })), n
      }
      var k = function (e) {
        var t = new WeakMap;
        return function (n, r, o, a) {
          if ("undefined" === typeof n) return e(n, r, o);
          t.has(n) || t.set(n, new Map);
          var i = t.get(n);
          if (i.has(r)) return i.get(r);
          var l = e(n, r, o, a);
          return i.set(r, l), l
        }
      }((function (e, t, n, r) {
        var o = "string" === typeof t ? t.split(".") : [t];
        for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
        return void 0 === e ? n : e
      }));

      function S(e, t) {
        var n = {};
        return Object.keys(e).forEach((function (r) {
          var o = e[r];
          t(o, r, e) && (n[r] = o)
        })), n
      }
      var E = function (e) {
          return S(e, (function (e) {
            return null !== e && void 0 !== e
          }))
        },
        C = function (e) {
          return Object.keys(e)
        },
        _ = function (e) {
          return e.reduce((function (e, t) {
            var n = t[0],
              r = t[1];
            return e[n] = r, e
          }), {})
        };

      function P(e) {
        if (null == e) return e;
        var t = function (e) {
          var t = parseFloat(e.toString()),
            n = e.toString().replace(String(t), "");
          return {
            unitless: !n,
            value: t,
            unit: n
          }
        }(e);
        return t.unitless || p(e) ? e + "px" : e
      }
      var T = function (e, t) {
          return parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1
        },
        A = function (e) {
          return _(Object.entries(e).sort(T))
        };

      function R(e) {
        var t = A(e);
        return Object.assign(Object.values(t), t)
      }

      function z(e) {
        var t;
        if (!e) return e;
        var n = (e = null != (t = P(e)) ? t : e).endsWith("px") ? -1 : -.0635;
        return p(e) ? "" + (e + n) : e.replace(/([0-9]+\.?[0-9]*)/, (function (e) {
          return "" + (parseFloat(e) + n)
        }))
      }

      function O(e, t) {
        var n = ["@media screen"];
        return e && n.push("and", "(min-width: " + P(e) + ")"), t && n.push("and", "(max-width: " + P(t) + ")"), n.join(" ")
      }

      function M(e) {
        var t;
        if (!e) return null;
        e.base = null != (t = e.base) ? t : "0px";
        var n = R(e),
          r = Object.entries(e).sort(T).map((function (e, t, n) {
            var r, o = e[0],
              a = e[1],
              i = (null != (r = n[t + 1]) ? r : [])[1];
            return i = parseFloat(i) > 0 ? z(i) : void 0, {
              _minW: z(a),
              breakpoint: o,
              minW: a,
              maxW: i,
              maxWQuery: O(null, i),
              minWQuery: O(a),
              minMaxQuery: O(a, i)
            }
          })),
          o = function (e) {
            var t = Object.keys(A(e));
            return new Set(t)
          }(e),
          a = Array.from(o.values());
        return {
          keys: o,
          normalized: n,
          isResponsive: function (e) {
            var t = Object.keys(e);
            return t.length > 0 && t.every((function (e) {
              return o.has(e)
            }))
          },
          asObject: A(e),
          asArray: R(e),
          details: r,
          media: [null].concat(n.map((function (e) {
            return O(e)
          })).slice(1)),
          toArrayValue: function (e) {
            if (!v(e)) throw new Error("toArrayValue: value must be an object");
            for (var t = a.map((function (t) {
                var n;
                return null != (n = e[t]) ? n : null
              })); null === f(t);) t.pop();
            return t
          },
          toObjectValue: function (e) {
            if (!Array.isArray(e)) throw new Error("toObjectValue: value must be an array");
            return e.reduce((function (e, t, n) {
              var r = a[n];
              return null != r && null != t && (e[r] = t), e
            }), {})
          }
        }
      }
      var j = !("undefined" === typeof window || !window.document || !window.document.createElement),
        L = function (e) {
          return e ? "" : void 0
        },
        F = function (e) {
          return !!e || void 0
        },
        I = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return t.filter(Boolean).join(" ")
        };
      ["input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "embed", "iframe", "object", "a[href]", "area[href]", "button:not([disabled])", "[tabindex]", "audio[controls]", "video[controls]", "*[tabindex]:not([aria-disabled])", "*[contenteditable]"].join();

      function B(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return m(e) ? e.apply(void 0, n) : e
      }

      function D() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function (e) {
          t.some((function (t) {
            return null == t || t(e), null == e ? void 0 : e.defaultPrevented
          }))
        }
      }

      function N(e) {
        var t;
        return function () {
          if (e) {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            t = e.apply(this, r), e = null
          }
          return t
        }
      }
      var V = function () {},
        W = N((function (e) {
          return function () {
            e.condition, e.message
          }
        }));
      N((function (e) {
        return function () {
          e.condition, e.message
        }
      }));

      function U(e, t) {
        return void 0 === t && (t = 1 / 0), (v(e) || Array.isArray(e)) && t ? Object.entries(e).reduce((function (e, n) {
          var r = n[0],
            o = n[1];
          return v(o) || h(o) ? Object.entries(U(o, t - 1)).forEach((function (t) {
            var n = t[0],
              o = t[1];
            e[r + "." + n] = o
          })) : e[r] = o, e
        }), {}) : e
      }
      Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER;
      Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);

      function H(e, t) {
        return h(e) ? e.map((function (e) {
          return null === e ? null : t(e)
        })) : v(e) ? C(e).reduce((function (n, r) {
          return n[r] = t(e[r]), n
        }), {}) : null != e ? t(e) : null
      }
      var $ = j ? e.useLayoutEffect : e.useEffect;

      function q(t, n) {
        void 0 === n && (n = []);
        var r = e.useRef(t);
        return $((function () {
          r.current = t
        })), e.useCallback((function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return null == r.current ? void 0 : r.current.apply(r, t)
        }), n)
      }
      var Y = "chakra-ui-light",
        X = "chakra-ui-dark";
      var Q = "chakra-ui-color-mode";
      var G, K = (G = Q, {
        ssr: !1,
        type: "localStorage",
        get: function (e) {
          if (!j) return e;
          var t;
          try {
            t = localStorage.getItem(G) || e
          } catch (n) {}
          return t || e
        },
        set: function (e) {
          try {
            localStorage.setItem(G, e)
          } catch (t) {}
        }
      });

      function Z(e, t) {
        var n = e.match(new RegExp("(^| )" + t + "=([^;]+)"));
        return null == n ? void 0 : n[2]
      }

      function J(e, t) {
        return {
          ssr: !!t,
          type: "cookie",
          get: function (n) {
            return t ? Z(t, e) : j && Z(document.cookie, e) || n
          },
          set: function (t) {
            document.cookie = e + "=" + t + "; max-age=31536000; path=/"
          }
        }
      }
      J(Q);
      var ee = e.createContext({});

      function te() {
        var t = e.useContext(ee);
        if (void 0 === t) throw new Error("useColorMode must be used within a ColorModeProvider");
        return t
      }

      function ne(e, t) {
        return "cookie" === e.type && e.ssr ? e.get(t) : t
      }

      function re(t) {
        var n = t.value,
          r = t.children,
          o = t.options,
          a = (o = void 0 === o ? {} : o).useSystemColorMode,
          i = o.initialColorMode,
          l = o.disableTransitionOnChange,
          u = t.colorModeManager,
          s = void 0 === u ? K : u,
          c = "dark" === i ? "dark" : "light",
          d = e.useState((function () {
            return ne(s, c)
          })),
          f = d[0],
          p = d[1],
          h = e.useState((function () {
            return ne(s)
          })),
          m = h[0],
          v = h[1],
          g = e.useMemo((function () {
            return function (e) {
              void 0 === e && (e = {});
              var t = e.preventTransition,
                n = void 0 === t || t,
                r = {
                  setDataset: function (e) {
                    var t = n ? r.preventTransition() : void 0;
                    document.documentElement.dataset.theme = e, document.documentElement.style.colorScheme = e, null == t || t()
                  },
                  setClassName: function (e) {
                    document.body.classList.add(e ? X : Y), document.body.classList.remove(e ? Y : X)
                  },
                  query: function () {
                    return window.matchMedia("(prefers-color-scheme: dark)")
                  },
                  getSystemTheme: function (e) {
                    var t;
                    return (null != (t = r.query().matches) ? t : "dark" === e) ? "dark" : "light"
                  },
                  addListener: function (e) {
                    var t = r.query(),
                      n = function (t) {
                        e(t.matches ? "dark" : "light")
                      };
                    return t.addEventListener("change", n),
                      function () {
                        return t.removeEventListener("change", n)
                      }
                  },
                  preventTransition: function () {
                    var e = document.createElement("style");
                    return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e),
                      function () {
                        window.getComputedStyle(document.body), requestAnimationFrame((function () {
                          requestAnimationFrame((function () {
                            document.head.removeChild(e)
                          }))
                        }))
                      }
                  }
                };
              return r
            }({
              preventTransition: l
            })
          }), [l]),
          y = g.getSystemTheme,
          b = g.setClassName,
          x = g.setDataset,
          w = g.addListener,
          k = "system" !== i || f ? f : m,
          S = e.useCallback((function (e) {
            var t = "system" === e ? y() : e;
            p(t), b("dark" === t), x(t), s.set(t)
          }), [s, y, b, x]);
        $((function () {
          "system" === i && v(y())
        }), []), $((function () {
          var e = s.get();
          S(e || ("system" !== i ? c : "system"))
        }), [s, c, i, y]);
        var E = e.useCallback((function () {
          S("dark" === k ? "light" : "dark")
        }), [k, S]);
        e.useEffect((function () {
          if (a) return w(S)
        }), [a, w, S]);
        var C = e.useMemo((function () {
          return {
            colorMode: null != n ? n : k,
            toggleColorMode: n ? V : E,
            setColorMode: n ? V : S
          }
        }), [k, E, S, n]);
        return e.createElement(ee.Provider, {
          value: C
        }, r)
      }
      var oe = new Set(["dark", "light", "system"]);

      function ae(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.initialColorMode,
          r = void 0 === n ? "light" : n,
          o = t.type,
          a = void 0 === o ? "localStorage" : o,
          i = t.storageKey,
          l = void 0 === i ? "chakra-ui-color-mode" : i,
          u = function (e) {
            var t = e;
            return oe.has(t) || (t = "light"), t
          }(r);
        return ("!" + ("cookie" === a ? '(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="' + u + '",r="' + l + '",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();\n  ' : '(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="' + u + '",e="' + l + '",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();\n  ')).trim()
      }

      function ie(t) {
        return void 0 === t && (t = {}), e.createElement("script", {
          id: "chakra-script",
          dangerouslySetInnerHTML: {
            __html: ae(t)
          }
        })
      }

      function le() {
        return le = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, le.apply(this, arguments)
      }
      var ue = function (e) {
          return y(e) ? e.replace(/!(important)?$/, "").trim() : e
        },
        se = function (e, t) {
          return function (n) {
            var r = String(t),
              o = function (e) {
                return /!(important)?$/.test(e)
              }(r),
              a = ue(r),
              i = e ? e + "." + a : a,
              l = v(n.__cssMap) && i in n.__cssMap ? n.__cssMap[i].varRef : t;
            return l = ue(l), o ? l + " !important" : l
          }
        };

      function ce(e) {
        var t = e.scale,
          n = e.transform,
          r = e.compose;
        return function (e, o) {
          var a, i = se(t, e)(o),
            l = null != (a = null == n ? void 0 : n(i, o)) ? a : i;
          return r && (l = r(l, o)), l
        }
      }

      function de(e, t) {
        return function (n) {
          var r = {
            property: n,
            scale: e
          };
          return r.transform = ce({
            scale: e,
            transform: t
          }), r
        }
      }
      var fe, pe, he = function (e) {
        var t = e.rtl,
          n = e.ltr;
        return function (e) {
          return "rtl" === e.direction ? t : n
        }
      };
      var me = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"];
      var ve = {
          "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
          filter: ["var(--chakra-blur)", "var(--chakra-brightness)", "var(--chakra-contrast)", "var(--chakra-grayscale)", "var(--chakra-hue-rotate)", "var(--chakra-invert)", "var(--chakra-saturate)", "var(--chakra-sepia)", "var(--chakra-drop-shadow)"].join(" ")
        },
        ge = {
          backdropFilter: ["var(--chakra-backdrop-blur)", "var(--chakra-backdrop-brightness)", "var(--chakra-backdrop-contrast)", "var(--chakra-backdrop-grayscale)", "var(--chakra-backdrop-hue-rotate)", "var(--chakra-backdrop-invert)", "var(--chakra-backdrop-opacity)", "var(--chakra-backdrop-saturate)", "var(--chakra-backdrop-sepia)"].join(" "),
          "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
        };
      var ye = {
          "row-reverse": {
            space: "--chakra-space-x-reverse",
            divide: "--chakra-divide-x-reverse"
          },
          "column-reverse": {
            space: "--chakra-space-y-reverse",
            divide: "--chakra-divide-y-reverse"
          }
        },
        be = "& > :not(style) ~ :not(style)",
        xe = ((fe = {})[be] = {
          marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
          marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
        }, fe),
        we = ((pe = {})[be] = {
          marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
          marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
        }, pe);

      function ke(e, t) {
        return ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          return e.__proto__ = t, e
        }, ke(e, t)
      }

      function Se(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && ke(e, t)
      }

      function Ee() {
        Ee = function (e, t) {
          return new n(e, void 0, t)
        };
        var e = RegExp.prototype,
          t = new WeakMap;

        function n(e, r, o) {
          var a = new RegExp(e, r);
          return t.set(a, o || t.get(e)), ke(a, n.prototype)
        }

        function r(e, n) {
          var r = t.get(n);
          return Object.keys(r).reduce((function (t, n) {
            return t[n] = e[r[n]], t
          }), Object.create(null))
        }
        return Se(n, RegExp), n.prototype.exec = function (t) {
          var n = e.exec.call(this, t);
          return n && (n.groups = r(n, this)), n
        }, n.prototype[Symbol.replace] = function (n, o) {
          if ("string" == typeof o) {
            var a = t.get(this);
            return e[Symbol.replace].call(this, n, o.replace(/\$<([^>]+)>/g, (function (e, t) {
              return "$" + a[t]
            })))
          }
          if ("function" == typeof o) {
            var i = this;
            return e[Symbol.replace].call(this, n, (function () {
              var e = arguments;
              return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(r(e, i)), o.apply(this, e)
            }))
          }
          return e[Symbol.replace].call(this, n, o)
        }, Ee.apply(this, arguments)
      }
      var Ce = {
          "to-t": "to top",
          "to-tr": "to top right",
          "to-r": "to right",
          "to-br": "to bottom right",
          "to-b": "to bottom",
          "to-bl": "to bottom left",
          "to-l": "to left",
          "to-tl": "to top left"
        },
        _e = new Set(Object.values(Ce)),
        Pe = new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]),
        Te = function (e) {
          return e.trim()
        };
      var Ae = function (e) {
          return y(e) && e.includes("(") && e.includes(")")
        },
        Re = function (e) {
          return function (t) {
            return e + "(" + t + ")"
          }
        },
        ze = {
          filter: function (e) {
            return "auto" !== e ? e : ve
          },
          backdropFilter: function (e) {
            return "auto" !== e ? e : ge
          },
          ring: function (e) {
            return function (e) {
              return {
                "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
                "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
                "--chakra-ring-width": e,
                boxShadow: ["var(--chakra-ring-offset-shadow)", "var(--chakra-ring-shadow)", "var(--chakra-shadow, 0 0 #0000)"].join(", ")
              }
            }(ze.px(e))
          },
          bgClip: function (e) {
            return "text" === e ? {
              color: "transparent",
              backgroundClip: "text"
            } : {
              backgroundClip: e
            }
          },
          transform: function (e) {
            return "auto" === e ? ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))"].concat(me).join(" ") : "auto-gpu" === e ? ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)"].concat(me).join(" ") : e
          },
          px: function (e) {
            if (null == e) return e;
            var t = function (e) {
              var t = parseFloat(e.toString()),
                n = e.toString().replace(String(t), "");
              return {
                unitless: !n,
                value: t,
                unit: n
              }
            }(e);
            return t.unitless || p(e) ? e + "px" : e
          },
          fraction: function (e) {
            return !p(e) || e > 1 ? e : 100 * e + "%"
          },
          float: function (e, t) {
            return "rtl" === t.direction ? {
              left: "right",
              right: "left"
            } [e] : e
          },
          degree: function (e) {
            if (b(e) || null == e) return e;
            var t = y(e) && !e.endsWith("deg");
            return p(e) || t ? e + "deg" : e
          },
          gradient: function (e, t) {
            return function (e, t) {
              var n, r;
              if (null == e || Pe.has(e)) return e;
              var o = null != (n = null == (r = Ee(/(^[a-z-A-Z]+)\(((.*))\)/g, {
                  type: 1,
                  values: 2
                }).exec(e)) ? void 0 : r.groups) ? n : {},
                a = o.type,
                i = o.values;
              if (!a || !i) return e;
              var l = a.includes("-gradient") ? a : a + "-gradient",
                u = i.split(",").map(Te).filter(Boolean),
                s = u[0],
                c = u.slice(1);
              if (0 === (null == c ? void 0 : c.length)) return e;
              var d = s in Ce ? Ce[s] : s;
              c.unshift(d);
              var f = c.map((function (e) {
                if (_e.has(e)) return e;
                var n = e.indexOf(" "),
                  r = -1 !== n ? [e.substr(0, n), e.substr(n + 1)] : [e],
                  o = r[0],
                  a = r[1],
                  i = Ae(a) ? a : a && a.split(" "),
                  l = "colors." + o,
                  u = l in t.__cssMap ? t.__cssMap[l].varRef : o;
                return i ? [u].concat(Array.isArray(i) ? i : [i]).join(" ") : u
              }));
              return l + "(" + f.join(", ") + ")"
            }(e, null != t ? t : {})
          },
          blur: Re("blur"),
          opacity: Re("opacity"),
          brightness: Re("brightness"),
          contrast: Re("contrast"),
          dropShadow: Re("drop-shadow"),
          grayscale: Re("grayscale"),
          hueRotate: Re("hue-rotate"),
          invert: Re("invert"),
          saturate: Re("saturate"),
          sepia: Re("sepia"),
          bgImage: function (e) {
            return null == e || Ae(e) || Pe.has(e) ? e : "url(" + e + ")"
          },
          outline: function (e) {
            var t = "0" === String(e) || "none" === String(e);
            return null !== e && t ? {
              outline: "2px solid transparent",
              outlineOffset: "2px"
            } : {
              outline: e
            }
          },
          flexDirection: function (e) {
            var t, n = null != (t = ye[e]) ? t : {},
              r = n.space,
              o = n.divide,
              a = {
                flexDirection: e
              };
            return r && (a[r] = 1), o && (a[o] = 1), a
          }
        },
        Oe = {
          borderWidths: de("borderWidths"),
          borderStyles: de("borderStyles"),
          colors: de("colors"),
          borders: de("borders"),
          radii: de("radii", ze.px),
          space: de("space", ze.px),
          spaceT: de("space", ze.px),
          degreeT: function (e) {
            return {
              property: e,
              transform: ze.degree
            }
          },
          prop: function (e, t, n) {
            return le({
              property: e,
              scale: t
            }, t && {
              transform: ce({
                scale: t,
                transform: n
              })
            })
          },
          propT: function (e, t) {
            return {
              property: e,
              transform: t
            }
          },
          sizes: de("sizes", ze.px),
          sizesT: de("sizes", ze.fraction),
          shadows: de("shadows"),
          logical: function (e) {
            var t = e.property,
              n = e.scale,
              r = e.transform;
            return {
              scale: n,
              property: he(t),
              transform: n ? ce({
                scale: n,
                compose: r
              }) : r
            }
          },
          blur: de("blur", ze.blur)
        },
        Me = {
          background: Oe.colors("background"),
          backgroundColor: Oe.colors("backgroundColor"),
          backgroundImage: Oe.propT("backgroundImage", ze.bgImage),
          backgroundSize: !0,
          backgroundPosition: !0,
          backgroundRepeat: !0,
          backgroundAttachment: !0,
          backgroundClip: {
            transform: ze.bgClip
          },
          bgSize: Oe.prop("backgroundSize"),
          bgPosition: Oe.prop("backgroundPosition"),
          bg: Oe.colors("background"),
          bgColor: Oe.colors("backgroundColor"),
          bgPos: Oe.prop("backgroundPosition"),
          bgRepeat: Oe.prop("backgroundRepeat"),
          bgAttachment: Oe.prop("backgroundAttachment"),
          bgGradient: Oe.propT("backgroundImage", ze.gradient),
          bgClip: {
            transform: ze.bgClip
          }
        };
      Object.assign(Me, {
        bgImage: Me.backgroundImage,
        bgImg: Me.backgroundImage
      });
      var je = {
        border: Oe.borders("border"),
        borderWidth: Oe.borderWidths("borderWidth"),
        borderStyle: Oe.borderStyles("borderStyle"),
        borderColor: Oe.colors("borderColor"),
        borderRadius: Oe.radii("borderRadius"),
        borderTop: Oe.borders("borderTop"),
        borderBlockStart: Oe.borders("borderBlockStart"),
        borderTopLeftRadius: Oe.radii("borderTopLeftRadius"),
        borderStartStartRadius: Oe.logical({
          scale: "radii",
          property: {
            ltr: "borderTopLeftRadius",
            rtl: "borderTopRightRadius"
          }
        }),
        borderEndStartRadius: Oe.logical({
          scale: "radii",
          property: {
            ltr: "borderBottomLeftRadius",
            rtl: "borderBottomRightRadius"
          }
        }),
        borderTopRightRadius: Oe.radii("borderTopRightRadius"),
        borderStartEndRadius: Oe.logical({
          scale: "radii",
          property: {
            ltr: "borderTopRightRadius",
            rtl: "borderTopLeftRadius"
          }
        }),
        borderEndEndRadius: Oe.logical({
          scale: "radii",
          property: {
            ltr: "borderBottomRightRadius",
            rtl: "borderBottomLeftRadius"
          }
        }),
        borderRight: Oe.borders("borderRight"),
        borderInlineEnd: Oe.borders("borderInlineEnd"),
        borderBottom: Oe.borders("borderBottom"),
        borderBlockEnd: Oe.borders("borderBlockEnd"),
        borderBottomLeftRadius: Oe.radii("borderBottomLeftRadius"),
        borderBottomRightRadius: Oe.radii("borderBottomRightRadius"),
        borderLeft: Oe.borders("borderLeft"),
        borderInlineStart: {
          property: "borderInlineStart",
          scale: "borders"
        },
        borderInlineStartRadius: Oe.logical({
          scale: "radii",
          property: {
            ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
            rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
          }
        }),
        borderInlineEndRadius: Oe.logical({
          scale: "radii",
          property: {
            ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
            rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
          }
        }),
        borderX: Oe.borders(["borderLeft", "borderRight"]),
        borderInline: Oe.borders("borderInline"),
        borderY: Oe.borders(["borderTop", "borderBottom"]),
        borderBlock: Oe.borders("borderBlock"),
        borderTopWidth: Oe.borderWidths("borderTopWidth"),
        borderBlockStartWidth: Oe.borderWidths("borderBlockStartWidth"),
        borderTopColor: Oe.colors("borderTopColor"),
        borderBlockStartColor: Oe.colors("borderBlockStartColor"),
        borderTopStyle: Oe.borderStyles("borderTopStyle"),
        borderBlockStartStyle: Oe.borderStyles("borderBlockStartStyle"),
        borderBottomWidth: Oe.borderWidths("borderBottomWidth"),
        borderBlockEndWidth: Oe.borderWidths("borderBlockEndWidth"),
        borderBottomColor: Oe.colors("borderBottomColor"),
        borderBlockEndColor: Oe.colors("borderBlockEndColor"),
        borderBottomStyle: Oe.borderStyles("borderBottomStyle"),
        borderBlockEndStyle: Oe.borderStyles("borderBlockEndStyle"),
        borderLeftWidth: Oe.borderWidths("borderLeftWidth"),
        borderInlineStartWidth: Oe.borderWidths("borderInlineStartWidth"),
        borderLeftColor: Oe.colors("borderLeftColor"),
        borderInlineStartColor: Oe.colors("borderInlineStartColor"),
        borderLeftStyle: Oe.borderStyles("borderLeftStyle"),
        borderInlineStartStyle: Oe.borderStyles("borderInlineStartStyle"),
        borderRightWidth: Oe.borderWidths("borderRightWidth"),
        borderInlineEndWidth: Oe.borderWidths("borderInlineEndWidth"),
        borderRightColor: Oe.colors("borderRightColor"),
        borderInlineEndColor: Oe.colors("borderInlineEndColor"),
        borderRightStyle: Oe.borderStyles("borderRightStyle"),
        borderInlineEndStyle: Oe.borderStyles("borderInlineEndStyle"),
        borderTopRadius: Oe.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
        borderBottomRadius: Oe.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
        borderLeftRadius: Oe.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
        borderRightRadius: Oe.radii(["borderTopRightRadius", "borderBottomRightRadius"])
      };
      Object.assign(je, {
        rounded: je.borderRadius,
        roundedTop: je.borderTopRadius,
        roundedTopLeft: je.borderTopLeftRadius,
        roundedTopRight: je.borderTopRightRadius,
        roundedTopStart: je.borderStartStartRadius,
        roundedTopEnd: je.borderStartEndRadius,
        roundedBottom: je.borderBottomRadius,
        roundedBottomLeft: je.borderBottomLeftRadius,
        roundedBottomRight: je.borderBottomRightRadius,
        roundedBottomStart: je.borderEndStartRadius,
        roundedBottomEnd: je.borderEndEndRadius,
        roundedLeft: je.borderLeftRadius,
        roundedRight: je.borderRightRadius,
        roundedStart: je.borderInlineStartRadius,
        roundedEnd: je.borderInlineEndRadius,
        borderStart: je.borderInlineStart,
        borderEnd: je.borderInlineEnd,
        borderTopStartRadius: je.borderStartStartRadius,
        borderTopEndRadius: je.borderStartEndRadius,
        borderBottomStartRadius: je.borderEndStartRadius,
        borderBottomEndRadius: je.borderEndEndRadius,
        borderStartRadius: je.borderInlineStartRadius,
        borderEndRadius: je.borderInlineEndRadius,
        borderStartWidth: je.borderInlineStartWidth,
        borderEndWidth: je.borderInlineEndWidth,
        borderStartColor: je.borderInlineStartColor,
        borderEndColor: je.borderInlineEndColor,
        borderStartStyle: je.borderInlineStartStyle,
        borderEndStyle: je.borderInlineEndStyle
      });
      var Le = {
          color: Oe.colors("color"),
          textColor: Oe.colors("color"),
          fill: Oe.colors("fill"),
          stroke: Oe.colors("stroke")
        },
        Fe = {
          boxShadow: Oe.shadows("boxShadow"),
          mixBlendMode: !0,
          blendMode: Oe.prop("mixBlendMode"),
          backgroundBlendMode: !0,
          bgBlendMode: Oe.prop("backgroundBlendMode"),
          opacity: !0
        };
      Object.assign(Fe, {
        shadow: Fe.boxShadow
      });
      var Ie = {
          filter: {
            transform: ze.filter
          },
          blur: Oe.blur("--chakra-blur"),
          brightness: Oe.propT("--chakra-brightness", ze.brightness),
          contrast: Oe.propT("--chakra-contrast", ze.contrast),
          hueRotate: Oe.degreeT("--chakra-hue-rotate"),
          invert: Oe.propT("--chakra-invert", ze.invert),
          saturate: Oe.propT("--chakra-saturate", ze.saturate),
          dropShadow: Oe.propT("--chakra-drop-shadow", ze.dropShadow),
          backdropFilter: {
            transform: ze.backdropFilter
          },
          backdropBlur: Oe.blur("--chakra-backdrop-blur"),
          backdropBrightness: Oe.propT("--chakra-backdrop-brightness", ze.brightness),
          backdropContrast: Oe.propT("--chakra-backdrop-contrast", ze.contrast),
          backdropHueRotate: Oe.degreeT("--chakra-backdrop-hue-rotate"),
          backdropInvert: Oe.propT("--chakra-backdrop-invert", ze.invert),
          backdropSaturate: Oe.propT("--chakra-backdrop-saturate", ze.saturate)
        },
        Be = {
          alignItems: !0,
          alignContent: !0,
          justifyItems: !0,
          justifyContent: !0,
          flexWrap: !0,
          flexDirection: {
            transform: ze.flexDirection
          },
          experimental_spaceX: {
            static: xe,
            transform: ce({
              scale: "space",
              transform: function (e) {
                return null !== e ? {
                  "--chakra-space-x": e
                } : null
              }
            })
          },
          experimental_spaceY: {
            static: we,
            transform: ce({
              scale: "space",
              transform: function (e) {
                return null != e ? {
                  "--chakra-space-y": e
                } : null
              }
            })
          },
          flex: !0,
          flexFlow: !0,
          flexGrow: !0,
          flexShrink: !0,
          flexBasis: Oe.sizes("flexBasis"),
          justifySelf: !0,
          alignSelf: !0,
          order: !0,
          placeItems: !0,
          placeContent: !0,
          placeSelf: !0,
          gap: Oe.space("gap"),
          rowGap: Oe.space("rowGap"),
          columnGap: Oe.space("columnGap")
        };
      Object.assign(Be, {
        flexDir: Be.flexDirection
      });
      var De = {
          gridGap: Oe.space("gridGap"),
          gridColumnGap: Oe.space("gridColumnGap"),
          gridRowGap: Oe.space("gridRowGap"),
          gridColumn: !0,
          gridRow: !0,
          gridAutoFlow: !0,
          gridAutoColumns: !0,
          gridColumnStart: !0,
          gridColumnEnd: !0,
          gridRowStart: !0,
          gridRowEnd: !0,
          gridAutoRows: !0,
          gridTemplate: !0,
          gridTemplateColumns: !0,
          gridTemplateRows: !0,
          gridTemplateAreas: !0,
          gridArea: !0
        },
        Ne = {
          appearance: !0,
          cursor: !0,
          resize: !0,
          userSelect: !0,
          pointerEvents: !0,
          outline: {
            transform: ze.outline
          },
          outlineOffset: !0,
          outlineColor: Oe.colors("outlineColor")
        },
        Ve = {
          width: Oe.sizesT("width"),
          inlineSize: Oe.sizesT("inlineSize"),
          height: Oe.sizes("height"),
          blockSize: Oe.sizes("blockSize"),
          boxSize: Oe.sizes(["width", "height"]),
          minWidth: Oe.sizes("minWidth"),
          minInlineSize: Oe.sizes("minInlineSize"),
          minHeight: Oe.sizes("minHeight"),
          minBlockSize: Oe.sizes("minBlockSize"),
          maxWidth: Oe.sizes("maxWidth"),
          maxInlineSize: Oe.sizes("maxInlineSize"),
          maxHeight: Oe.sizes("maxHeight"),
          maxBlockSize: Oe.sizes("maxBlockSize"),
          overflow: !0,
          overflowX: !0,
          overflowY: !0,
          overscrollBehavior: !0,
          overscrollBehaviorX: !0,
          overscrollBehaviorY: !0,
          display: !0,
          verticalAlign: !0,
          boxSizing: !0,
          boxDecorationBreak: !0,
          float: Oe.propT("float", ze.float),
          objectFit: !0,
          objectPosition: !0,
          visibility: !0,
          isolation: !0
        };
      Object.assign(Ve, {
        w: Ve.width,
        h: Ve.height,
        minW: Ve.minWidth,
        maxW: Ve.maxWidth,
        minH: Ve.minHeight,
        maxH: Ve.maxHeight,
        overscroll: Ve.overscrollBehavior,
        overscrollX: Ve.overscrollBehaviorX,
        overscrollY: Ve.overscrollBehaviorY
      });
      var We = {
          listStyleType: !0,
          listStylePosition: !0,
          listStylePos: Oe.prop("listStylePosition"),
          listStyleImage: !0,
          listStyleImg: Oe.prop("listStyleImage")
        },
        Ue = {
          border: "0px",
          clip: "rect(0, 0, 0, 0)",
          width: "1px",
          height: "1px",
          margin: "-1px",
          padding: "0px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute"
        },
        He = {
          position: "static",
          width: "auto",
          height: "auto",
          clip: "auto",
          padding: "0",
          margin: "0",
          overflow: "visible",
          whiteSpace: "normal"
        },
        $e = function (e, t, n) {
          var r = {},
            o = k(e, t, {});
          for (var a in o) {
            a in n && null != n[a] || (r[a] = o[a])
          }
          return r
        },
        qe = {
          srOnly: {
            transform: function (e) {
              return !0 === e ? Ue : "focusable" === e ? He : {}
            }
          },
          layerStyle: {
            processResult: !0,
            transform: function (e, t, n) {
              return $e(t, "layerStyles." + e, n)
            }
          },
          textStyle: {
            processResult: !0,
            transform: function (e, t, n) {
              return $e(t, "textStyles." + e, n)
            }
          },
          apply: {
            processResult: !0,
            transform: function (e, t, n) {
              return $e(t, e, n)
            }
          }
        },
        Ye = {
          position: !0,
          pos: Oe.prop("position"),
          zIndex: Oe.prop("zIndex", "zIndices"),
          inset: Oe.spaceT("inset"),
          insetX: Oe.spaceT(["left", "right"]),
          insetInline: Oe.spaceT("insetInline"),
          insetY: Oe.spaceT(["top", "bottom"]),
          insetBlock: Oe.spaceT("insetBlock"),
          top: Oe.spaceT("top"),
          insetBlockStart: Oe.spaceT("insetBlockStart"),
          bottom: Oe.spaceT("bottom"),
          insetBlockEnd: Oe.spaceT("insetBlockEnd"),
          left: Oe.spaceT("left"),
          insetInlineStart: Oe.logical({
            scale: "space",
            property: {
              ltr: "left",
              rtl: "right"
            }
          }),
          right: Oe.spaceT("right"),
          insetInlineEnd: Oe.logical({
            scale: "space",
            property: {
              ltr: "right",
              rtl: "left"
            }
          })
        };
      Object.assign(Ye, {
        insetStart: Ye.insetInlineStart,
        insetEnd: Ye.insetInlineEnd
      });
      var Xe = {
          ring: {
            transform: ze.ring
          },
          ringColor: Oe.colors("--chakra-ring-color"),
          ringOffset: Oe.prop("--chakra-ring-offset-width"),
          ringOffsetColor: Oe.colors("--chakra-ring-offset-color"),
          ringInset: Oe.prop("--chakra-ring-inset")
        },
        Qe = {
          margin: Oe.spaceT("margin"),
          marginTop: Oe.spaceT("marginTop"),
          marginBlockStart: Oe.spaceT("marginBlockStart"),
          marginRight: Oe.spaceT("marginRight"),
          marginInlineEnd: Oe.spaceT("marginInlineEnd"),
          marginBottom: Oe.spaceT("marginBottom"),
          marginBlockEnd: Oe.spaceT("marginBlockEnd"),
          marginLeft: Oe.spaceT("marginLeft"),
          marginInlineStart: Oe.spaceT("marginInlineStart"),
          marginX: Oe.spaceT(["marginInlineStart", "marginInlineEnd"]),
          marginInline: Oe.spaceT("marginInline"),
          marginY: Oe.spaceT(["marginTop", "marginBottom"]),
          marginBlock: Oe.spaceT("marginBlock"),
          padding: Oe.space("padding"),
          paddingTop: Oe.space("paddingTop"),
          paddingBlockStart: Oe.space("paddingBlockStart"),
          paddingRight: Oe.space("paddingRight"),
          paddingBottom: Oe.space("paddingBottom"),
          paddingBlockEnd: Oe.space("paddingBlockEnd"),
          paddingLeft: Oe.space("paddingLeft"),
          paddingInlineStart: Oe.space("paddingInlineStart"),
          paddingInlineEnd: Oe.space("paddingInlineEnd"),
          paddingX: Oe.space(["paddingInlineStart", "paddingInlineEnd"]),
          paddingInline: Oe.space("paddingInline"),
          paddingY: Oe.space(["paddingTop", "paddingBottom"]),
          paddingBlock: Oe.space("paddingBlock")
        };
      Object.assign(Qe, {
        m: Qe.margin,
        mt: Qe.marginTop,
        mr: Qe.marginRight,
        me: Qe.marginInlineEnd,
        marginEnd: Qe.marginInlineEnd,
        mb: Qe.marginBottom,
        ml: Qe.marginLeft,
        ms: Qe.marginInlineStart,
        marginStart: Qe.marginInlineStart,
        mx: Qe.marginX,
        my: Qe.marginY,
        p: Qe.padding,
        pt: Qe.paddingTop,
        py: Qe.paddingY,
        px: Qe.paddingX,
        pb: Qe.paddingBottom,
        pl: Qe.paddingLeft,
        ps: Qe.paddingInlineStart,
        paddingStart: Qe.paddingInlineStart,
        pr: Qe.paddingRight,
        pe: Qe.paddingInlineEnd,
        paddingEnd: Qe.paddingInlineEnd
      });
      var Ge = {
          textDecorationColor: Oe.colors("textDecorationColor"),
          textDecoration: !0,
          textDecor: {
            property: "textDecoration"
          },
          textDecorationLine: !0,
          textDecorationStyle: !0,
          textDecorationThickness: !0,
          textUnderlineOffset: !0,
          textShadow: Oe.shadows("textShadow")
        },
        Ke = {
          clipPath: !0,
          transform: Oe.propT("transform", ze.transform),
          transformOrigin: !0,
          translateX: Oe.spaceT("--chakra-translate-x"),
          translateY: Oe.spaceT("--chakra-translate-y"),
          skewX: Oe.degreeT("--chakra-skew-x"),
          skewY: Oe.degreeT("--chakra-skew-y"),
          scaleX: Oe.prop("--chakra-scale-x"),
          scaleY: Oe.prop("--chakra-scale-y"),
          scale: Oe.prop(["--chakra-scale-x", "--chakra-scale-y"]),
          rotate: Oe.degreeT("--chakra-rotate")
        },
        Ze = {
          transition: !0,
          transitionDelay: !0,
          animation: !0,
          willChange: !0,
          transitionDuration: Oe.prop("transitionDuration", "transition.duration"),
          transitionProperty: Oe.prop("transitionProperty", "transition.property"),
          transitionTimingFunction: Oe.prop("transitionTimingFunction", "transition.easing")
        },
        Je = {
          fontFamily: Oe.prop("fontFamily", "fonts"),
          fontSize: Oe.prop("fontSize", "fontSizes", ze.px),
          fontWeight: Oe.prop("fontWeight", "fontWeights"),
          lineHeight: Oe.prop("lineHeight", "lineHeights"),
          letterSpacing: Oe.prop("letterSpacing", "letterSpacings"),
          textAlign: !0,
          fontStyle: !0,
          wordBreak: !0,
          overflowWrap: !0,
          textOverflow: !0,
          textTransform: !0,
          whiteSpace: !0,
          noOfLines: {
            static: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "var(--chakra-line-clamp)"
            },
            property: "--chakra-line-clamp"
          }
        },
        et = {
          scrollBehavior: !0,
          scrollSnapAlign: !0,
          scrollSnapStop: !0,
          scrollSnapType: !0,
          scrollMargin: Oe.spaceT("scrollMargin"),
          scrollMarginTop: Oe.spaceT("scrollMarginTop"),
          scrollMarginBottom: Oe.spaceT("scrollMarginBottom"),
          scrollMarginLeft: Oe.spaceT("scrollMarginLeft"),
          scrollMarginRight: Oe.spaceT("scrollMarginRight"),
          scrollMarginX: Oe.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
          scrollMarginY: Oe.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
          scrollPadding: Oe.spaceT("scrollPadding"),
          scrollPaddingTop: Oe.spaceT("scrollPaddingTop"),
          scrollPaddingBottom: Oe.spaceT("scrollPaddingBottom"),
          scrollPaddingLeft: Oe.spaceT("scrollPaddingLeft"),
          scrollPaddingRight: Oe.spaceT("scrollPaddingRight"),
          scrollPaddingX: Oe.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
          scrollPaddingY: Oe.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
        };

      function tt(e) {
        return v(e) && e.reference ? e.reference : String(e)
      }
      var nt = function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return n.map(tt).join(" " + e + " ").replace(/calc/g, "")
        },
        rt = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return "calc(" + nt.apply(void 0, ["+"].concat(t)) + ")"
        },
        ot = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return "calc(" + nt.apply(void 0, ["-"].concat(t)) + ")"
        },
        at = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return "calc(" + nt.apply(void 0, ["*"].concat(t)) + ")"
        },
        it = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return "calc(" + nt.apply(void 0, ["/"].concat(t)) + ")"
        },
        lt = function (e) {
          var t = tt(e);
          return null == t || Number.isNaN(parseFloat(t)) ? at(t, -1) : String(t).startsWith("-") ? String(t).slice(1) : "-" + t
        },
        ut = Object.assign((function (e) {
          return {
            add: function () {
              for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
              return ut(rt.apply(void 0, [e].concat(n)))
            },
            subtract: function () {
              for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
              return ut(ot.apply(void 0, [e].concat(n)))
            },
            multiply: function () {
              for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
              return ut(at.apply(void 0, [e].concat(n)))
            },
            divide: function () {
              for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
              return ut(it.apply(void 0, [e].concat(n)))
            },
            negate: function () {
              return ut(lt(e))
            },
            toString: function () {
              return e.toString()
            }
          }
        }), {
          add: rt,
          subtract: ot,
          multiply: at,
          divide: it,
          negate: lt
        });

      function st(e) {
        var t = function (e, t) {
          return void 0 === t && (t = "-"), e.replace(/\s+/g, t)
        }(e.toString());
        return t.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? t.replace(".", "\\.") : e
      }

      function ct(e, t) {
        return "var(" + st(e) + (t ? ", " + t : "") + ")"
      }

      function dt(e, t) {
        return void 0 === t && (t = ""), "--" + function (e, t) {
          return void 0 === t && (t = ""), [t, st(e)].filter(Boolean).join("-")
        }(e, t)
      }
      var ft = function (e, t) {
          return e + ":hover " + t + ", " + e + "[data-hover] " + t
        },
        pt = function (e, t) {
          return e + ":focus " + t + ", " + e + "[data-focus] " + t
        },
        ht = function (e, t) {
          return e + ":focus-visible " + t
        },
        mt = function (e, t) {
          return e + ":focus-within " + t
        },
        vt = function (e, t) {
          return e + ":active " + t + ", " + e + "[data-active] " + t
        },
        gt = function (e, t) {
          return e + ":disabled " + t + ", " + e + "[data-disabled] " + t
        },
        yt = function (e, t) {
          return e + ":invalid " + t + ", " + e + "[data-invalid] " + t
        },
        bt = function (e, t) {
          return e + ":checked " + t + ", " + e + "[data-checked] " + t
        },
        xt = function (e, t) {
          return e + ":placeholder-shown " + t
        },
        wt = function (e) {
          return St((function (t) {
            return e(t, "&")
          }), "[role=group]", "[data-group]", ".group")
        },
        kt = function (e) {
          return St((function (t) {
            return e(t, "~ &")
          }), "[data-peer]", ".peer")
        },
        St = function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return n.map(e).join(", ")
        },
        Et = {
          _hover: "&:hover, &[data-hover]",
          _active: "&:active, &[data-active]",
          _focus: "&:focus, &[data-focus]",
          _highlighted: "&[data-highlighted]",
          _focusWithin: "&:focus-within",
          _focusVisible: "&:focus-visible, &[data-focus-visible]",
          _disabled: "&[disabled], &[aria-disabled=true], &[data-disabled]",
          _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
          _before: "&::before",
          _after: "&::after",
          _empty: "&:empty",
          _expanded: "&[aria-expanded=true], &[data-expanded]",
          _checked: "&[aria-checked=true], &[data-checked]",
          _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
          _pressed: "&[aria-pressed=true], &[data-pressed]",
          _invalid: "&[aria-invalid=true], &[data-invalid]",
          _valid: "&[data-valid], &[data-state=valid]",
          _loading: "&[data-loading], &[aria-busy=true]",
          _selected: "&[aria-selected=true], &[data-selected]",
          _hidden: "&[hidden], &[data-hidden]",
          _autofill: "&:-webkit-autofill",
          _even: "&:nth-of-type(even)",
          _odd: "&:nth-of-type(odd)",
          _first: "&:first-of-type",
          _last: "&:last-of-type",
          _notFirst: "&:not(:first-of-type)",
          _notLast: "&:not(:last-of-type)",
          _visited: "&:visited",
          _activeLink: "&[aria-current=page]",
          _activeStep: "&[aria-current=step]",
          _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
          _groupHover: wt(ft),
          _peerHover: kt(ft),
          _groupFocus: wt(pt),
          _peerFocus: kt(pt),
          _groupFocusVisible: wt(ht),
          _peerFocusVisible: kt(ht),
          _groupActive: wt(vt),
          _peerActive: kt(vt),
          _groupDisabled: wt(gt),
          _peerDisabled: kt(gt),
          _groupInvalid: wt(yt),
          _peerInvalid: kt(yt),
          _groupChecked: wt(bt),
          _peerChecked: kt(bt),
          _groupFocusWithin: wt(mt),
          _peerFocusWithin: kt(mt),
          _peerPlaceholderShown: kt(xt),
          _placeholder: "&::placeholder",
          _placeholderShown: "&:placeholder-shown",
          _fullScreen: "&:fullscreen",
          _selection: "&::selection",
          _rtl: "[dir=rtl] &, &[dir=rtl]",
          _ltr: "[dir=ltr] &, &[dir=ltr]",
          _mediaDark: "@media (prefers-color-scheme: dark)",
          _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
          _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
          _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"
        },
        Ct = C(Et);

      function _t(e, t) {
        return function (e, t, n) {
          var r = dt(e, n);
          return {
            variable: r,
            reference: ct(r, t)
          }
        }(String(e).replace(/\./g, "-"), void 0, t)
      }

      function Pt(e, t) {
        for (var n = {}, r = {}, o = function () {
            var o = i[a],
              l = o[0],
              u = o[1],
              c = u.isSemantic,
              d = u.value,
              f = _t(l, null == t ? void 0 : t.cssVarPrefix),
              p = f.variable,
              h = f.reference;
            if (!c) {
              if (l.startsWith("space")) {
                var m = l.split("."),
                  g = m[0] + ".-" + m.slice(1).join("."),
                  y = ut.negate(d),
                  b = ut.negate(h);
                r[g] = {
                  value: y,
                  var: p,
                  varRef: b
                }
              }
              return n[p] = d, r[l] = {
                value: d,
                var: p,
                varRef: h
              }, "continue"
            }
            var x = v(d) ? d : {
              default: d
            };
            n = s()(n, Object.entries(x).reduce((function (n, r) {
              var o, a, i = r[0],
                u = function (n) {
                  var r = [String(l).split(".")[0], n].join(".");
                  return e[r] ? _t(r, null == t ? void 0 : t.cssVarPrefix).reference : n
                }(r[1]);
              return "default" === i ? (n[p] = u, n) : (n[null != (o = null == Et ? void 0 : Et[i]) ? o : i] = ((a = {})[p] = u, a), n)
            }), {})), r[l] = {
              value: h,
              var: p,
              varRef: h
            }
          }, a = 0, i = Object.entries(e); a < i.length; a++) o();
        return {
          cssVars: n,
          cssMap: r
        }
      }
      var Tt = ["__cssMap", "__cssVars", "__breakpoints"],
        At = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur"];

      function Rt(e) {
        return function (e, t) {
          var n = {};
          return t.forEach((function (t) {
            t in e && (n[t] = e[t])
          })), n
        }(e, At)
      }

      function zt(e) {
        e.__cssMap, e.__cssVars, e.__breakpoints;
        var t = function (e, t) {
          if (null == e) return {};
          var n, r, o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o
        }(e, Tt);
        return t
      }

      function Ot(e) {
        var t, n = zt(e),
          r = Rt(n),
          o = function (e) {
            return e.semanticTokens
          }(n),
          a = function (e) {
            var t, n, r = e.tokens,
              o = e.semanticTokens,
              a = Object.entries(null != (t = U(r)) ? t : {}).map((function (e) {
                return [e[0], {
                  isSemantic: !1,
                  value: e[1]
                }]
              })),
              i = Object.entries(null != (n = U(o, 1)) ? n : {}).map((function (e) {
                return [e[0], {
                  isSemantic: !0,
                  value: e[1]
                }]
              }));
            return _([].concat(a, i))
          }({
            tokens: r,
            semanticTokens: o
          }),
          i = Pt(a, {
            cssVarPrefix: null == (t = n.config) ? void 0 : t.cssVarPrefix
          }),
          l = i.cssMap,
          u = i.cssVars;
        return Object.assign(n, {
          __cssVars: le({}, {
            "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-ring-offset-width": "0px",
            "--chakra-ring-offset-color": "#fff",
            "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
            "--chakra-ring-offset-shadow": "0 0 #0000",
            "--chakra-ring-shadow": "0 0 #0000",
            "--chakra-space-x-reverse": "0",
            "--chakra-space-y-reverse": "0"
          }, u),
          __cssMap: l,
          __breakpoints: M(n.breakpoints)
        }), n
      }

      function Mt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function jt(e, t) {
        var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (Array.isArray(e) || (n = function (e, t) {
            if (e) {
              if ("string" === typeof e) return Mt(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Mt(e, t) : void 0
            }
          }(e)) || t && e && "number" === typeof e.length) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[r++]
            }
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Lt = s()({}, Me, je, Le, Be, Ve, Ie, Xe, Ne, De, qe, Ye, Fe, Qe, et, Je, Ge, Ke, We, Ze),
        Ft = Object.assign({}, Qe, Ve, Be, De, Ye),
        It = (C(Ft), [].concat(C(Lt), Ct)),
        Bt = le({}, Lt, Et),
        Dt = function (e) {
          return e in Bt
        },
        Nt = function (e, t) {
          return e.startsWith("--") && y(t) && !b(t)
        },
        Vt = function (e, t) {
          var n, r;
          if (null == t) return t;
          var o = function (t) {
              var n, r;
              return null == (n = e.__cssMap) || null == (r = n[t]) ? void 0 : r.varRef
            },
            a = function (e) {
              var t;
              return null != (t = o(e)) ? t : e
            },
            i = t.split(",").map((function (e) {
              return e.trim()
            })),
            l = i[0],
            u = i[1];
          return t = null != (n = null != (r = o(l)) ? r : a(u)) ? n : a(t)
        };

      function Wt(e) {
        var t = e.configs,
          n = void 0 === t ? {} : t,
          r = e.pseudos,
          o = void 0 === r ? {} : r,
          a = e.theme;
        return function e(t, r) {
          void 0 === r && (r = !1);
          var i = B(t, a),
            l = function (e) {
              return function (t) {
                if (!t.__breakpoints) return e;
                var n = t.__breakpoints,
                  r = n.isResponsive,
                  o = n.toArrayValue,
                  a = n.media,
                  i = {};
                for (var l in e) {
                  var u = B(e[l], t);
                  if (null != u)
                    if (u = v(u) && r(u) ? o(u) : u, Array.isArray(u))
                      for (var s = u.slice(0, a.length).length, c = 0; c < s; c += 1) {
                        var d = null == a ? void 0 : a[c];
                        d ? (i[d] = i[d] || {}, null != u[c] && (i[d][l] = u[c])) : i[l] = u[c]
                      } else i[l] = u
                }
                return i
              }
            }(i)(a),
            u = {};
          for (var c in l) {
            var d, f, p, h, m, g = B(l[c], a);
            c in o && (c = o[c]), Nt(c, g) && (g = Vt(a, g));
            var y = n[c];
            if (!0 === y && (y = {
                property: c
              }), v(g)) {
              var b;
              u[c] = null != (b = u[c]) ? b : {}, u[c] = s()({}, u[c], e(g, !0))
            } else {
              var x = null != (d = null == (f = y) || null == f.transform ? void 0 : f.transform(g, a, i)) ? d : g;
              x = null != (p = y) && p.processResult ? e(x, !0) : x;
              var w = B(null == (h = y) ? void 0 : h.property, a);
              if (!r && null != (m = y) && m.static) {
                var k = B(y.static, a);
                u = s()({}, u, k)
              }
              if (w && Array.isArray(w))
                for (var S, E = jt(w); !(S = E()).done;) {
                  u[S.value] = x
                } else w ? "&" === w && v(x) ? u = s()({}, u, x) : u[w] = x : v(x) ? u = s()({}, u, x) : u[c] = x
            }
          }
          return u
        }
      }
      var Ut = function (e) {
        return function (t) {
          return Wt({
            theme: t,
            pseudos: Et,
            configs: Lt
          })(e)
        }
      };

      function Ht(e) {
        var t = e.__breakpoints;
        return function (e, n, r, o) {
          if (t) {
            var a = {},
              i = function (e, t) {
                return h(e) ? e : v(e) ? t(e) : null != e ? [e] : void 0
              }(r, t.toArrayValue);
            if (!i) return a;
            for (var l = i.length, u = 1 === l, c = !!e.parts, d = function (r) {
                var l, d, f = t.details[r],
                  p = t.details[function (e, t) {
                    for (var n = t + 1; n < e.length; n++)
                      if (null != e[n]) return n;
                    return -1
                  }(i, r)],
                  h = O(f.minW, null == p ? void 0 : p._minW),
                  m = B(null == (l = e[n]) ? void 0 : l[i[r]], o);
                return m ? c ? (null == (d = e.parts) || d.forEach((function (e) {
                  var t, n;
                  s()(a, ((n = {})[e] = u ? m[e] : ((t = {})[h] = m[e], t), n))
                })), "continue") : c ? void(a[h] = m) : (u ? s()(a, m) : a[h] = m, "continue") : "continue"
              }, f = 0; f < l; f++) d(f);
            return a
          }
        }
      }
      var $t = function () {
          function e(e) {
            var t = this;
            this._insertTag = function (e) {
              var n;
              n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
            }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
          }
          var t = e.prototype;
          return t.hydrate = function (e) {
            e.forEach(this._insertTag)
          }, t.insert = function (e) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(function (e) {
              var t = document.createElement("style");
              return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
            }(this));
            var t = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
              var n = function (e) {
                if (e.sheet) return e.sheet;
                for (var t = 0; t < document.styleSheets.length; t++)
                  if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
              }(t);
              try {
                n.insertRule(e, n.cssRules.length)
              } catch (r) {
                0
              }
            } else t.appendChild(document.createTextNode(e));
            this.ctr++
          }, t.flush = function () {
            this.tags.forEach((function (e) {
              return e.parentNode && e.parentNode.removeChild(e)
            })), this.tags = [], this.ctr = 0
          }, e
        }(),
        qt = Math.abs,
        Yt = String.fromCharCode,
        Xt = Object.assign;

      function Qt(e) {
        return e.trim()
      }

      function Gt(e, t, n) {
        return e.replace(t, n)
      }

      function Kt(e, t) {
        return e.indexOf(t)
      }

      function Zt(e, t) {
        return 0 | e.charCodeAt(t)
      }

      function Jt(e, t, n) {
        return e.slice(t, n)
      }

      function en(e) {
        return e.length
      }

      function tn(e) {
        return e.length
      }

      function nn(e, t) {
        return t.push(e), e
      }
      var rn = 1,
        on = 1,
        an = 0,
        ln = 0,
        un = 0,
        sn = "";

      function cn(e, t, n, r, o, a, i) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: o,
          children: a,
          line: rn,
          column: on,
          length: i,
          return: ""
        }
      }

      function dn(e, t) {
        return Xt(cn("", null, null, "", null, null, 0), e, {
          length: -e.length
        }, t)
      }

      function fn() {
        return un = ln > 0 ? Zt(sn, --ln) : 0, on--, 10 === un && (on = 1, rn--), un
      }

      function pn() {
        return un = ln < an ? Zt(sn, ln++) : 0, on++, 10 === un && (on = 1, rn++), un
      }

      function hn() {
        return Zt(sn, ln)
      }

      function mn() {
        return ln
      }

      function vn(e, t) {
        return Jt(sn, e, t)
      }

      function gn(e) {
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
            return 1
        }
        return 0
      }

      function yn(e) {
        return rn = on = 1, an = en(sn = e), ln = 0, []
      }

      function bn(e) {
        return sn = "", e
      }

      function xn(e) {
        return Qt(vn(ln - 1, Sn(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
      }

      function wn(e) {
        for (;
          (un = hn()) && un < 33;) pn();
        return gn(e) > 2 || gn(un) > 3 ? "" : " "
      }

      function kn(e, t) {
        for (; --t && pn() && !(un < 48 || un > 102 || un > 57 && un < 65 || un > 70 && un < 97););
        return vn(e, mn() + (t < 6 && 32 == hn() && 32 == pn()))
      }

      function Sn(e) {
        for (; pn();) switch (un) {
          case e:
            return ln;
          case 34:
          case 39:
            34 !== e && 39 !== e && Sn(un);
            break;
          case 40:
            41 === e && Sn(e);
            break;
          case 92:
            pn()
        }
        return ln
      }

      function En(e, t) {
        for (; pn() && e + un !== 57 && (e + un !== 84 || 47 !== hn()););
        return "/*" + vn(t, ln - 1) + "*" + Yt(47 === e ? e : pn())
      }

      function Cn(e) {
        for (; !gn(hn());) pn();
        return vn(e, ln)
      }
      var _n = "-ms-",
        Pn = "-moz-",
        Tn = "-webkit-",
        An = "comm",
        Rn = "rule",
        zn = "decl",
        On = "@keyframes";

      function Mn(e, t) {
        for (var n = "", r = tn(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
        return n
      }

      function jn(e, t, n, r) {
        switch (e.type) {
          case "@import":
          case zn:
            return e.return = e.return || e.value;
          case An:
            return "";
          case On:
            return e.return = e.value + "{" + Mn(e.children, r) + "}";
          case Rn:
            e.value = e.props.join(",")
        }
        return en(n = Mn(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
      }

      function Ln(e, t) {
        switch (function (e, t) {
          return (((t << 2 ^ Zt(e, 0)) << 2 ^ Zt(e, 1)) << 2 ^ Zt(e, 2)) << 2 ^ Zt(e, 3)
        }(e, t)) {
          case 5103:
            return Tn + "print-" + e + e;
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
            return Tn + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return Tn + e + Pn + e + _n + e + e;
          case 6828:
          case 4268:
            return Tn + e + _n + e + e;
          case 6165:
            return Tn + e + _n + "flex-" + e + e;
          case 5187:
            return Tn + e + Gt(e, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") + e;
          case 5443:
            return Tn + e + _n + "flex-item-" + Gt(e, /flex-|-self/, "") + e;
          case 4675:
            return Tn + e + _n + "flex-line-pack" + Gt(e, /align-content|flex-|-self/, "") + e;
          case 5548:
            return Tn + e + _n + Gt(e, "shrink", "negative") + e;
          case 5292:
            return Tn + e + _n + Gt(e, "basis", "preferred-size") + e;
          case 6060:
            return Tn + "box-" + Gt(e, "-grow", "") + Tn + e + _n + Gt(e, "grow", "positive") + e;
          case 4554:
            return Tn + Gt(e, /([^-])(transform)/g, "$1-webkit-$2") + e;
          case 6187:
            return Gt(Gt(Gt(e, /(zoom-|grab)/, Tn + "$1"), /(image-set)/, Tn + "$1"), e, "") + e;
          case 5495:
          case 3959:
            return Gt(e, /(image-set\([^]*)/, Tn + "$1$`$1");
          case 4968:
            return Gt(Gt(e, /(.+:)(flex-)?(.*)/, "-webkit-box-pack:$3-ms-flex-pack:$3"), /s.+-b[^;]+/, "justify") + Tn + e + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return Gt(e, /(.+)-inline(.+)/, Tn + "$1$2") + e;
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
            if (en(e) - 1 - t > 6) switch (Zt(e, t + 1)) {
              case 109:
                if (45 !== Zt(e, t + 4)) break;
              case 102:
                return Gt(e, /(.+:)(.+)-([^]+)/, "$1-webkit-$2-$3$1" + Pn + (108 == Zt(e, t + 3) ? "$3" : "$2-$3")) + e;
              case 115:
                return ~Kt(e, "stretch") ? Ln(Gt(e, "stretch", "fill-available"), t) + e : e
            }
            break;
          case 4949:
            if (115 !== Zt(e, t + 1)) break;
          case 6444:
            switch (Zt(e, en(e) - 3 - (~Kt(e, "!important") && 10))) {
              case 107:
                return Gt(e, ":", ":" + Tn) + e;
              case 101:
                return Gt(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Tn + (45 === Zt(e, 14) ? "inline-" : "") + "box$3$1" + Tn + "$2$3$1" + _n + "$2box$3") + e
            }
            break;
          case 5936:
            switch (Zt(e, t + 11)) {
              case 114:
                return Tn + e + _n + Gt(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return Tn + e + _n + Gt(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return Tn + e + _n + Gt(e, /[svh]\w+-[tblr]{2}/, "lr") + e
            }
            return Tn + e + _n + e + e
        }
        return e
      }

      function Fn(e) {
        return bn(In("", null, null, null, [""], e = yn(e), 0, [0], e))
      }

      function In(e, t, n, r, o, a, i, l, u) {
        for (var s = 0, c = 0, d = i, f = 0, p = 0, h = 0, m = 1, v = 1, g = 1, y = 0, b = "", x = o, w = a, k = r, S = b; v;) switch (h = y, y = pn()) {
          case 40:
            if (108 != h && 58 == S.charCodeAt(d - 1)) {
              -1 != Kt(S += Gt(xn(y), "&", "&\f"), "&\f") && (g = -1);
              break
            }
            case 34:
            case 39:
            case 91:
              S += xn(y);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              S += wn(h);
              break;
            case 92:
              S += kn(mn() - 1, 7);
              continue;
            case 47:
              switch (hn()) {
                case 42:
                case 47:
                  nn(Dn(En(pn(), mn()), t, n), u);
                  break;
                default:
                  S += "/"
              }
              break;
            case 123 * m:
              l[s++] = en(S) * g;
            case 125 * m:
            case 59:
            case 0:
              switch (y) {
                case 0:
                case 125:
                  v = 0;
                case 59 + c:
                  p > 0 && en(S) - d && nn(p > 32 ? Nn(S + ";", r, n, d - 1) : Nn(Gt(S, " ", "") + ";", r, n, d - 2), u);
                  break;
                case 59:
                  S += ";";
                default:
                  if (nn(k = Bn(S, t, n, s, c, o, l, b, x = [], w = [], d), a), 123 === y)
                    if (0 === c) In(S, t, k, k, x, a, d, l, w);
                    else switch (f) {
                      case 100:
                      case 109:
                      case 115:
                        In(e, k, k, r && nn(Bn(e, k, k, 0, 0, o, l, b, o, x = [], d), w), o, w, d, l, r ? x : w);
                        break;
                      default:
                        In(S, k, k, k, [""], w, 0, l, w)
                    }
              }
              s = c = p = 0, m = g = 1, b = S = "", d = i;
              break;
            case 58:
              d = 1 + en(S), p = h;
            default:
              if (m < 1)
                if (123 == y) --m;
                else if (125 == y && 0 == m++ && 125 == fn()) continue;
              switch (S += Yt(y), y * m) {
                case 38:
                  g = c > 0 ? 1 : (S += "\f", -1);
                  break;
                case 44:
                  l[s++] = (en(S) - 1) * g, g = 1;
                  break;
                case 64:
                  45 === hn() && (S += xn(pn())), f = hn(), c = d = en(b = S += Cn(mn())), y++;
                  break;
                case 45:
                  45 === h && 2 == en(S) && (m = 0)
              }
        }
        return a
      }

      function Bn(e, t, n, r, o, a, i, l, u, s, c) {
        for (var d = o - 1, f = 0 === o ? a : [""], p = tn(f), h = 0, m = 0, v = 0; h < r; ++h)
          for (var g = 0, y = Jt(e, d + 1, d = qt(m = i[h])), b = e; g < p; ++g)(b = Qt(m > 0 ? f[g] + " " + y : Gt(y, /&\f/g, f[g]))) && (u[v++] = b);
        return cn(e, t, n, 0 === o ? Rn : l, u, s, c)
      }

      function Dn(e, t, n) {
        return cn(e, t, n, An, Yt(un), Jt(e, 2, -2), 0)
      }

      function Nn(e, t, n, r) {
        return cn(e, t, n, zn, Jt(e, 0, r), Jt(e, r + 1, -1), r)
      }
      var Vn = function (e, t, n) {
          for (var r = 0, o = 0; r = o, o = hn(), 38 === r && 12 === o && (t[n] = 1), !gn(o);) pn();
          return vn(e, ln)
        },
        Wn = function (e, t) {
          return bn(function (e, t) {
            var n = -1,
              r = 44;
            do {
              switch (gn(r)) {
                case 0:
                  38 === r && 12 === hn() && (t[n] = 1), e[n] += Vn(ln - 1, t, n);
                  break;
                case 2:
                  e[n] += xn(r);
                  break;
                case 4:
                  if (44 === r) {
                    e[++n] = 58 === hn() ? "&\f" : "", t[n] = e[n].length;
                    break
                  }
                  default:
                    e[n] += Yt(r)
              }
            } while (r = pn());
            return e
          }(yn(e), t))
        },
        Un = new WeakMap,
        Hn = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
              "rule" !== n.type;)
              if (!(n = n.parent)) return;
            if ((1 !== e.props.length || 58 === t.charCodeAt(0) || Un.get(n)) && !r) {
              Un.set(e, !0);
              for (var o = [], a = Wn(t, o), i = n.props, l = 0, u = 0; l < a.length; l++)
                for (var s = 0; s < i.length; s++, u++) e.props[u] = o[l] ? a[l].replace(/&\f/g, i[s]) : i[s] + " " + a[l]
            }
          }
        },
        $n = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
          }
        },
        qn = [function (e, t, n, r) {
          if (e.length > -1 && !e.return) switch (e.type) {
            case zn:
              e.return = Ln(e.value, e.length);
              break;
            case On:
              return Mn([dn(e, {
                value: Gt(e.value, "@", "@" + Tn)
              })], r);
            case Rn:
              if (e.length) return function (e, t) {
                return e.map(t).join("")
              }(e.props, (function (t) {
                switch (function (e, t) {
                  return (e = t.exec(e)) ? e[0] : e
                }(t, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return Mn([dn(e, {
                      props: [Gt(t, /:(read-\w+)/, ":-moz-$1")]
                    })], r);
                  case "::placeholder":
                    return Mn([dn(e, {
                      props: [Gt(t, /:(plac\w+)/, ":-webkit-input-$1")]
                    }), dn(e, {
                      props: [Gt(t, /:(plac\w+)/, ":-moz-$1")]
                    }), dn(e, {
                      props: [Gt(t, /:(plac\w+)/, _n + "input-$1")]
                    })], r)
                }
                return ""
              }))
          }
        }],
        Yn = function (e) {
          var t = e.key;
          if ("css" === t) {
            var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(n, (function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
            }))
          }
          var r = e.stylisPlugins || qn;
          var o, a, i = {},
            l = [];
          o = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function (e) {
            for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) i[t[n]] = !0;
            l.push(e)
          }));
          var u, s, c = [jn, (s = function (e) {
              u.insert(e)
            }, function (e) {
              e.root || (e = e.return) && s(e)
            })],
            d = function (e) {
              var t = tn(e);
              return function (n, r, o, a) {
                for (var i = "", l = 0; l < t; l++) i += e[l](n, r, o, a) || "";
                return i
              }
            }([Hn, $n].concat(r, c));
          a = function (e, t, n, r) {
            u = n,
              function (e) {
                Mn(Fn(e), d)
              }(e ? e + "{" + t.styles + "}" : t.styles), r && (f.inserted[t.name] = !0)
          };
          var f = {
            key: t,
            sheet: new $t({
              key: t,
              container: o,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint
            }),
            nonce: e.nonce,
            inserted: i,
            registered: {},
            insert: a
          };
          return f.sheet.hydrate(l), f
        };

      function Xn() {
        return Xn = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Xn.apply(this, arguments)
      }
      var Qn = function (e) {
        var t = new WeakMap;
        return function (n) {
          if (t.has(n)) return t.get(n);
          var r = e(n);
          return t.set(n, r), r
        }
      };
      var Gn = function (e) {
          for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
          switch (o) {
            case 3:
              n ^= (255 & e.charCodeAt(r + 2)) << 16;
            case 2:
              n ^= (255 & e.charCodeAt(r + 1)) << 8;
            case 1:
              n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
          }
          return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
        },
        Kn = {
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
          strokeWidth: 1
        };
      var Zn = function (e) {
          var t = Object.create(null);
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n]
          }
        },
        Jn = /[A-Z]|^ms/g,
        er = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        tr = function (e) {
          return 45 === e.charCodeAt(1)
        },
        nr = function (e) {
          return null != e && "boolean" !== typeof e
        },
        rr = Zn((function (e) {
          return tr(e) ? e : e.replace(Jn, "-$&").toLowerCase()
        })),
        or = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" === typeof t) return t.replace(er, (function (e, t, n) {
                return ir = {
                  name: t,
                  styles: n,
                  next: ir
                }, t
              }))
          }
          return 1 === Kn[e] || tr(e) || "number" !== typeof t || 0 === t ? t : t + "px"
        };

      function ar(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim) return ir = {
              name: n.name,
              styles: n.styles,
              next: ir
            }, n.name;
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r;) ir = {
                  name: r.name,
                  styles: r.styles,
                  next: ir
                }, r = r.next;
              return n.styles + ";"
            }
            return function (e, t, n) {
              var r = "";
              if (Array.isArray(n))
                for (var o = 0; o < n.length; o++) r += ar(e, t, n[o]) + ";";
              else
                for (var a in n) {
                  var i = n[a];
                  if ("object" !== typeof i) null != t && void 0 !== t[i] ? r += a + "{" + t[i] + "}" : nr(i) && (r += rr(a) + ":" + or(a, i) + ";");
                  else if (!Array.isArray(i) || "string" !== typeof i[0] || null != t && void 0 !== t[i[0]]) {
                    var l = ar(e, t, i);
                    switch (a) {
                      case "animation":
                      case "animationName":
                        r += rr(a) + ":" + l + ";";
                        break;
                      default:
                        r += a + "{" + l + "}"
                    }
                  } else
                    for (var u = 0; u < i.length; u++) nr(i[u]) && (r += rr(a) + ":" + or(a, i[u]) + ";")
                }
              return r
            }(e, t, n);
          case "function":
            if (void 0 !== e) {
              var o = ir,
                a = n(e);
              return ir = o, ar(e, t, a)
            }
        }
        if (null == t) return n;
        var i = t[n];
        return void 0 !== i ? i : n
      }
      var ir, lr = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
      var ur = function (e, t, n) {
          if (1 === e.length && "object" === typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
          var r = !0,
            o = "";
          ir = void 0;
          var a = e[0];
          null == a || void 0 === a.raw ? (r = !1, o += ar(n, t, a)) : o += a[0];
          for (var i = 1; i < e.length; i++) o += ar(n, t, e[i]), r && (o += a[i]);
          lr.lastIndex = 0;
          for (var l, u = ""; null !== (l = lr.exec(o));) u += "-" + l[1];
          return {
            name: Gn(o) + u,
            styles: o,
            next: ir
          }
        },
        sr = (0, e.createContext)("undefined" !== typeof HTMLElement ? Yn({
          key: "css"
        }) : null);
      sr.Provider;
      var cr = function (t) {
          return (0, e.forwardRef)((function (n, r) {
            var o = (0, e.useContext)(sr);
            return t(n, o, r)
          }))
        },
        dr = (0, e.createContext)({});
      var fr = Qn((function (e) {
          return Qn((function (t) {
            return function (e, t) {
              return "function" === typeof t ? t(e) : Xn({}, e, t)
            }(e, t)
          }))
        })),
        pr = function (t) {
          var n = (0, e.useContext)(dr);
          return t.theme !== n && (n = fr(n)(t.theme)), (0, e.createElement)(dr.Provider, {
            value: n
          }, t.children)
        };
      t.useInsertionEffect && t.useInsertionEffect;
      n(110);

      function hr(e, t, n) {
        var r = "";
        return n.split(" ").forEach((function (n) {
          void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " "
        })), r
      }
      var mr = function (e, t, n) {
          var r = e.key + "-" + t.name;
          !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles)
        },
        vr = function (e, t, n) {
          mr(e, t, n);
          var r = e.key + "-" + t.name;
          if (void 0 === e.inserted[t.name]) {
            var o = t;
            do {
              e.insert(t === o ? "." + r : "", o, e.sheet, !0);
              o = o.next
            } while (void 0 !== o)
          }
        },
        gr = t.useInsertionEffect ? t.useInsertionEffect : e.useLayoutEffect,
        yr = cr((function (t, n) {
          var r = t.styles,
            o = ur([r], void 0, (0, e.useContext)(dr)),
            a = (0, e.useRef)();
          return gr((function () {
            var e = n.key + "-global",
              t = new n.sheet.constructor({
                key: e,
                nonce: n.sheet.nonce,
                container: n.sheet.container,
                speedy: n.sheet.isSpeedy
              }),
              r = !1,
              i = document.querySelector('style[data-emotion="' + e + " " + o.name + '"]');
            return n.sheet.tags.length && (t.before = n.sheet.tags[0]), null !== i && (r = !0, i.setAttribute("data-emotion", e), t.hydrate([i])), a.current = [t, r],
              function () {
                t.flush()
              }
          }), [n]), gr((function () {
            var e = a.current,
              t = e[0];
            if (e[1]) e[1] = !1;
            else {
              if (void 0 !== o.next && vr(n, o.next, !0), t.tags.length) {
                var r = t.tags[t.tags.length - 1].nextElementSibling;
                t.before = r, t.flush()
              }
              n.insert("", o, t, !1)
            }
          }), [n, o.name]), null
        }));

      function br() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return ur(t)
      }
      var xr = function () {
        var e = br.apply(void 0, arguments),
          t = "animation-" + e.name;
        return {
          name: t,
          styles: "@keyframes " + t + "{" + e.styles + "}",
          anim: 1,
          toString: function () {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
          }
        }
      };
      var wr = n(77),
        kr = n.n(wr);

      function Sr(t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.strict,
          o = void 0 === r || r,
          a = n.errorMessage,
          i = void 0 === a ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider" : a,
          l = n.name,
          u = e.createContext(void 0);
        return u.displayName = l, [u.Provider, function t() {
          var n = e.useContext(u);
          if (!n && o) {
            var r = new Error(i);
            throw r.name = "ContextError", null == Error.captureStackTrace || Error.captureStackTrace(r, t), r
          }
          return n
        }, u]
      }

      function Er(t) {
        return e.Children.toArray(t).filter((function (t) {
          return e.isValidElement(t)
        }))
      }
      var Cr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        _r = Zn((function (e) {
          return Cr.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
        })),
        Pr = function (e) {
          return "theme" !== e
        },
        Tr = function (e) {
          return "string" === typeof e && e.charCodeAt(0) > 96 ? _r : Pr
        },
        Ar = function (e, t, n) {
          var r;
          if (t) {
            var o = t.shouldForwardProp;
            r = e.__emotion_forwardProp && o ? function (t) {
              return e.__emotion_forwardProp(t) && o(t)
            } : o
          }
          return "function" !== typeof r && n && (r = e.__emotion_forwardProp), r
        },
        Rr = t.useInsertionEffect ? t.useInsertionEffect : function (e) {
          e()
        };
      var zr = function (e) {
          var t = e.cache,
            n = e.serialized,
            r = e.isStringTag;
          mr(t, n, r);
          Rr((function () {
            return vr(t, n, r)
          }));
          return null
        },
        Or = function t(n, r) {
          var o, a, i = n.__emotion_real === n,
            l = i && n.__emotion_base || n;
          void 0 !== r && (o = r.label, a = r.target);
          var u = Ar(n, r, i),
            s = u || Tr(l),
            c = !s("as");
          return function () {
            var d = arguments,
              f = i && void 0 !== n.__emotion_styles ? n.__emotion_styles.slice(0) : [];
            if (void 0 !== o && f.push("label:" + o + ";"), null == d[0] || void 0 === d[0].raw) f.push.apply(f, d);
            else {
              0,
              f.push(d[0][0]);
              for (var p = d.length, h = 1; h < p; h++) f.push(d[h], d[0][h])
            }
            var m = cr((function (t, n, r) {
              var o = c && t.as || l,
                i = "",
                d = [],
                p = t;
              if (null == t.theme) {
                for (var h in p = {}, t) p[h] = t[h];
                p.theme = (0, e.useContext)(dr)
              }
              "string" === typeof t.className ? i = hr(n.registered, d, t.className) : null != t.className && (i = t.className + " ");
              var m = ur(f.concat(d), n.registered, p);
              i += n.key + "-" + m.name, void 0 !== a && (i += " " + a);
              var v = c && void 0 === u ? Tr(o) : s,
                g = {};
              for (var y in t) c && "as" === y || v(y) && (g[y] = t[y]);
              return g.className = i, g.ref = r, (0, e.createElement)(e.Fragment, null, (0, e.createElement)(zr, {
                cache: n,
                serialized: m,
                isStringTag: "string" === typeof o
              }), (0, e.createElement)(o, g))
            }));
            return m.displayName = void 0 !== o ? o : "Styled(" + ("string" === typeof l ? l : l.displayName || l.name || "Component") + ")", m.defaultProps = n.defaultProps, m.__emotion_real = m, m.__emotion_base = l, m.__emotion_styles = f, m.__emotion_forwardProp = u, Object.defineProperty(m, "toString", {
              value: function () {
                return "." + a
              }
            }), m.withComponent = function (e, n) {
              return t(e, Xn({}, r, n, {
                shouldForwardProp: Ar(m, n, !0)
              })).apply(void 0, f)
            }, m
          }
        },
        Mr = Or.bind();
      ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach((function (e) {
        Mr[e] = Mr(e)
      }));
      var jr = Mr;

      function Lr() {
        return Lr = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Lr.apply(this, arguments)
      }
      var Fr = function (t) {
          var n = t.cssVarsRoot,
            r = t.theme,
            o = t.children,
            a = e.useMemo((function () {
              return Ot(r)
            }), [r]);
          return e.createElement(pr, {
            theme: a
          }, e.createElement(Ir, {
            root: n
          }), o)
        },
        Ir = function (t) {
          var n = t.root,
            r = [void 0 === n ? ":host, :root" : n, "[data-theme]"].join(",");
          return e.createElement(yr, {
            styles: function (e) {
              var t;
              return (t = {})[r] = e.__cssVars, t
            }
          })
        };

      function Br() {
        var t = e.useContext(dr);
        if (!t) throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
        return t
      }
      var Dr = Sr({
          name: "StylesContext",
          errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
        }),
        Nr = (Dr[0], Dr[1], function (e) {
          return Sr({
            name: e + "StylesContext",
            errorMessage: 'useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<' + e + ' />" '
          })
        }),
        Vr = function () {
          var t = te().colorMode;
          return e.createElement(yr, {
            styles: function (e) {
              var n = B(k(e, "styles.global"), {
                theme: e,
                colorMode: t
              });
              if (n) {
                var r = Ut(n)(e);
                return r
              }
            }
          })
        };

      function Wr(e) {
        return w(e, ["styleConfig", "size", "variant", "colorScheme"])
      }

      function Ur() {
        return Lr({}, te(), {
          theme: Br()
        })
      }

      function Hr(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }
      var $r = new Set([].concat(It, ["textStyle", "layerStyle", "apply", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"])),
        qr = new Set(["htmlWidth", "htmlHeight", "htmlSize"]),
        Yr = function (e) {
          return qr.has(e) || !$r.has(e)
        },
        Xr = ["theme", "css", "__css", "sx"],
        Qr = ["baseStyle"];

      function Gr(e, t) {
        var n = null != t ? t : {},
          r = n.baseStyle,
          o = Hr(n, Qr);
        o.shouldForwardProp || (o.shouldForwardProp = Yr);
        var a = function (e) {
          var t = e.baseStyle;
          return function (e) {
            e.theme;
            var n = e.css,
              r = e.__css,
              o = e.sx,
              a = S(Hr(e, Xr), (function (e, t) {
                return Dt(t)
              })),
              i = B(t, e),
              l = Object.assign({}, r, i, E(a), o),
              u = Ut(l)(e.theme);
            return n ? [u, n] : u
          }
        }({
          baseStyle: r
        });
        return jr(e, o)(a)
      }

      function Kr(t) {
        return e.forwardRef(t)
      }
      var Zr = ["styleConfig"];

      function Jr(t, n) {
        var r;
        void 0 === n && (n = {});
        var o = n,
          a = o.styleConfig,
          i = Hr(o, Zr),
          l = Ur(),
          u = l.theme,
          c = l.colorMode,
          d = k(u, "components." + t),
          f = a || d,
          p = s()({
            theme: u,
            colorMode: c
          }, null != (r = null == f ? void 0 : f.defaultProps) ? r : {}, E(w(i, ["children"]))),
          h = (0, e.useRef)({});
        if (f) {
          var m = function (e) {
              return function (t) {
                var n, r = t.variant,
                  o = t.size,
                  a = Ht(t.theme);
                return s()({}, B(null != (n = e.baseStyle) ? n : {}, t), a(e, "sizes", o, t), a(e, "variants", r, t))
              }
            }(f),
            v = m(p);
          kr()(h.current, v) || (h.current = v)
        }
        return h.current
      }

      function eo(e, t) {
        return void 0 === t && (t = {}), Jr(e, t)
      }

      function to(e, t) {
        return void 0 === t && (t = {}), Jr(e, t)
      }
      var no = function () {
        var e = new Map;
        return new Proxy(Gr, {
          apply: function (e, t, n) {
            return Gr.apply(void 0, n)
          },
          get: function (t, n) {
            return e.has(n) || e.set(n, Gr(n)), e.get(n)
          }
        })
      }();

      function ro() {
        return ro = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, ro.apply(this, arguments)
      }
      var oo = ["as", "viewBox", "color", "focusable", "children", "className", "__css"],
        ao = {
          path: e.createElement("g", {
            stroke: "currentColor",
            strokeWidth: "1.5"
          }, e.createElement("path", {
            strokeLinecap: "round",
            fill: "none",
            d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
          }), e.createElement("path", {
            fill: "currentColor",
            strokeLinecap: "round",
            d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
          }), e.createElement("circle", {
            fill: "none",
            strokeMiterlimit: "10",
            cx: "12",
            cy: "12",
            r: "11.25"
          })),
          viewBox: "0 0 24 24"
        },
        io = Kr((function (t, n) {
          var r = t.as,
            o = t.viewBox,
            a = t.color,
            i = void 0 === a ? "currentColor" : a,
            l = t.focusable,
            u = void 0 !== l && l,
            s = t.children,
            c = t.className,
            d = t.__css,
            f = function (e, t) {
              if (null == e) return {};
              var n, r, o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o
            }(t, oo),
            p = {
              ref: n,
              focusable: u,
              className: I("chakra-icon", c),
              __css: ro({
                w: "1em",
                h: "1em",
                display: "inline-block",
                lineHeight: "1em",
                flexShrink: 0,
                color: i
              }, d)
            },
            h = null != o ? o : ao.viewBox;
          if (r && "string" !== typeof r) return e.createElement(no.svg, ro({
            as: r
          }, p, f));
          var m = null != s ? s : ao.path;
          return e.createElement(no.svg, ro({
            verticalAlign: "middle",
            viewBox: h
          }, p, f), m)
        }));

      function lo() {
        return lo = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, lo.apply(this, arguments)
      }

      function uo(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }
      var so = ["className"],
        co = Kr((function (t, n) {
          var r = eo("Badge", t),
            o = Wr(t);
          o.className;
          var a = uo(o, so);
          return e.createElement(no.span, lo({
            ref: n,
            className: I("chakra-badge", t.className)
          }, a, {
            __css: lo({
              display: "inline-block",
              whiteSpace: "nowrap",
              verticalAlign: "middle"
            }, r)
          }))
        }));
      var fo = no("div");
      no("div", {
        baseStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      });
      var po = ["className"],
        ho = Kr((function (t, n) {
          var r = eo("Heading", t),
            o = Wr(t);
          o.className;
          var a = uo(o, po);
          return e.createElement(no.h2, lo({
            ref: n,
            className: I("chakra-heading", t.className)
          }, a, {
            __css: r
          }))
        }));
      var mo = Nr("List");
      mo[0], mo[1];
      var vo = no("div", {
        baseStyle: {
          flex: 1,
          justifySelf: "stretch",
          alignSelf: "stretch"
        }
      });
      var go = "& > *:not(style) ~ *:not(style)";
      var yo = ["isInline", "direction", "align", "justify", "spacing", "wrap", "children", "divider", "className", "shouldWrapChildren"],
        bo = function (t) {
          return e.createElement(no.div, lo({
            className: "chakra-stack__divider"
          }, t, {
            __css: lo({}, t.__css, {
              borderWidth: 0,
              alignSelf: "stretch",
              borderColor: "inherit",
              width: "auto",
              height: "auto"
            })
          }))
        },
        xo = function (t) {
          return e.createElement(no.div, lo({
            className: "chakra-stack__item"
          }, t, {
            __css: lo({
              display: "inline-block",
              flex: "0 0 auto",
              minWidth: 0
            }, t.__css)
          }))
        },
        wo = Kr((function (t, n) {
          var r, o = t.isInline,
            a = t.direction,
            i = t.align,
            l = t.justify,
            u = t.spacing,
            s = void 0 === u ? "0.5rem" : u,
            c = t.wrap,
            d = t.children,
            f = t.divider,
            p = t.className,
            h = t.shouldWrapChildren,
            m = uo(t, yo),
            v = o ? "row" : null != a ? a : "column",
            g = e.useMemo((function () {
              return function (e) {
                var t, n = e.spacing,
                  r = e.direction,
                  o = {
                    column: {
                      marginTop: n,
                      marginEnd: 0,
                      marginBottom: 0,
                      marginStart: 0
                    },
                    row: {
                      marginTop: 0,
                      marginEnd: 0,
                      marginBottom: 0,
                      marginStart: n
                    },
                    "column-reverse": {
                      marginTop: 0,
                      marginEnd: 0,
                      marginBottom: n,
                      marginStart: 0
                    },
                    "row-reverse": {
                      marginTop: 0,
                      marginEnd: n,
                      marginBottom: 0,
                      marginStart: 0
                    }
                  };
                return (t = {
                  flexDirection: r
                })[go] = H(r, (function (e) {
                  return o[e]
                })), t
              }({
                direction: v,
                spacing: s
              })
            }), [v, s]),
            y = e.useMemo((function () {
              return function (e) {
                var t = e.spacing,
                  n = e.direction,
                  r = {
                    column: {
                      my: t,
                      mx: 0,
                      borderLeftWidth: 0,
                      borderBottomWidth: "1px"
                    },
                    "column-reverse": {
                      my: t,
                      mx: 0,
                      borderLeftWidth: 0,
                      borderBottomWidth: "1px"
                    },
                    row: {
                      mx: t,
                      my: 0,
                      borderLeftWidth: "1px",
                      borderBottomWidth: 0
                    },
                    "row-reverse": {
                      mx: t,
                      my: 0,
                      borderLeftWidth: "1px",
                      borderBottomWidth: 0
                    }
                  };
                return {
                  "&": H(n, (function (e) {
                    return r[e]
                  }))
                }
              }({
                spacing: s,
                direction: v
              })
            }), [s, v]),
            b = !!f,
            x = !h && !b,
            w = Er(d),
            k = x ? w : w.map((function (t, n) {
              var r = "undefined" !== typeof t.key ? t.key : n,
                o = n + 1 === w.length,
                a = h ? e.createElement(xo, {
                  key: r
                }, t) : t;
              if (!b) return a;
              var i = o ? null : e.cloneElement(f, {
                __css: y
              });
              return e.createElement(e.Fragment, {
                key: r
              }, a, i)
            })),
            S = I("chakra-stack", p);
          return e.createElement(no.div, lo({
            ref: n,
            display: "flex",
            alignItems: i,
            justifyContent: l,
            flexDirection: g.flexDirection,
            flexWrap: c,
            className: S,
            __css: b ? {} : (r = {}, r[go] = g[go], r)
          }, m), k)
        }));
      var ko = Kr((function (t, n) {
        return e.createElement(wo, lo({
          align: "center"
        }, t, {
          direction: "row",
          ref: n
        }))
      }));
      var So = Kr((function (t, n) {
        return e.createElement(wo, lo({
          align: "center"
        }, t, {
          direction: "column",
          ref: n
        }))
      }));
      var Eo = ["className", "align", "decoration", "casing"],
        Co = Kr((function (t, n) {
          var r = eo("Text", t),
            o = Wr(t);
          o.className, o.align, o.decoration, o.casing;
          var a = uo(o, Eo),
            i = E({
              textAlign: t.align,
              textDecoration: t.decoration,
              textTransform: t.casing
            });
          return e.createElement(no.p, lo({
            ref: n,
            className: I("chakra-text", t.className)
          }, i, a, {
            __css: r
          }))
        }));
      n(998);
      var _o = function (t, n) {
        var r = e.useRef(!1),
          o = e.useRef(!1);
        e.useEffect((function () {
          if (r.current && o.current) return t();
          o.current = !0
        }), n), e.useEffect((function () {
          return r.current = !0,
            function () {
              r.current = !1
            }
        }), [])
      };

      function Po(t, n) {
        return void 0 === n && (n = []), e.useEffect((function () {
          return function () {
            return t()
          }
        }), n)
      }

      function To() {
        var t = e.useRef(!1),
          n = e.useState(0),
          r = n[0],
          o = n[1];
        return Po((function () {
          t.current = !0
        })), e.useCallback((function () {
          t.current || o(r + 1)
        }), [r])
      }

      function Ao(e, t) {
        if (null != e)
          if ("function" !== typeof e) try {
            e.current = t
          } catch (n) {
            throw new Error("Cannot assign value '" + t + "' to ref '" + e + "'")
          } else e(t)
      }

      function Ro() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return e.useMemo((function () {
          return n.every((function (e) {
            return null == e
          })) ? null : function (e) {
            n.forEach((function (t) {
              t && Ao(t, e)
            }))
          }
        }), n)
      }
      var zo = {
          border: "0px",
          clip: "rect(0px, 0px, 0px, 0px)",
          height: "1px",
          width: "1px",
          margin: "-1px",
          padding: "0px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute"
        },
        Oo = no("span", {
          baseStyle: zo
        });
      no("input", {
        baseStyle: zo
      });

      function Mo() {
        return Mo = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Mo.apply(this, arguments)
      }
      var jo = ["label", "thickness", "speed", "emptyColor", "className"],
        Lo = xr({
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        }),
        Fo = Kr((function (t, n) {
          var r = eo("Spinner", t),
            o = Wr(t),
            a = o.label,
            i = void 0 === a ? "Loading..." : a,
            l = o.thickness,
            u = void 0 === l ? "2px" : l,
            s = o.speed,
            c = void 0 === s ? "0.45s" : s,
            d = o.emptyColor,
            f = void 0 === d ? "transparent" : d,
            p = o.className,
            h = function (e, t) {
              if (null == e) return {};
              var n, r, o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o
            }(o, jo),
            m = I("chakra-spinner", p),
            v = Mo({
              display: "inline-block",
              borderColor: "currentColor",
              borderStyle: "solid",
              borderRadius: "99999px",
              borderWidth: u,
              borderBottomColor: f,
              borderLeftColor: f,
              animation: Lo + " " + c + " linear infinite"
            }, r);
          return e.createElement(no.div, Mo({
            ref: n,
            __css: v,
            className: m
          }, h), i && e.createElement(Oo, null, i))
        }));

      function Io(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }

      function Bo() {
        return Bo = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Bo.apply(this, arguments)
      }
      var Do = Sr({
          strict: !1,
          name: "ButtonGroupContext"
        }),
        No = (Do[0], Do[1]);
      var Vo = ["label", "placement", "spacing", "children", "className", "__css"],
        Wo = function (t) {
          var n = t.label,
            r = t.placement,
            o = t.spacing,
            a = void 0 === o ? "0.5rem" : o,
            i = t.children,
            l = void 0 === i ? e.createElement(Fo, {
              color: "currentColor",
              width: "1em",
              height: "1em"
            }) : i,
            u = t.className,
            s = t.__css,
            c = Io(t, Vo),
            d = I("chakra-button__spinner", u),
            f = "start" === r ? "marginEnd" : "marginStart",
            p = e.useMemo((function () {
              var e;
              return Bo(((e = {
                display: "flex",
                alignItems: "center",
                position: n ? "relative" : "absolute"
              })[f] = n ? a : 0, e.fontSize = "1em", e.lineHeight = "normal", e), s)
            }), [s, n, f, a]);
          return e.createElement(no.div, Bo({
            className: d
          }, c, {
            __css: p
          }), l)
        };
      var Uo = ["children", "className"],
        Ho = function (t) {
          var n = t.children,
            r = t.className,
            o = Io(t, Uo),
            a = e.isValidElement(n) ? e.cloneElement(n, {
              "aria-hidden": !0,
              focusable: !1
            }) : n,
            i = I("chakra-button__icon", r);
          return e.createElement(no.span, Bo({
            display: "inline-flex",
            alignSelf: "center",
            flexShrink: 0
          }, o, {
            className: i
          }), a)
        };
      var $o = ["isDisabled", "isLoading", "isActive", "children", "leftIcon", "rightIcon", "loadingText", "iconSpacing", "type", "spinner", "spinnerPlacement", "className", "as"],
        qo = Kr((function (t, n) {
          var r = No(),
            o = eo("Button", Bo({}, r, t)),
            a = Wr(t),
            i = a.isDisabled,
            l = void 0 === i ? null == r ? void 0 : r.isDisabled : i,
            u = a.isLoading,
            c = a.isActive,
            d = a.children,
            f = a.leftIcon,
            p = a.rightIcon,
            h = a.loadingText,
            m = a.iconSpacing,
            v = void 0 === m ? "0.5rem" : m,
            g = a.type,
            y = a.spinner,
            b = a.spinnerPlacement,
            x = void 0 === b ? "start" : b,
            w = a.className,
            k = a.as,
            S = Io(a, $o),
            E = e.useMemo((function () {
              var e, t = s()({}, null != (e = null == o ? void 0 : o._focus) ? e : {}, {
                zIndex: 1
              });
              return Bo({
                display: "inline-flex",
                appearance: "none",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
                position: "relative",
                whiteSpace: "nowrap",
                verticalAlign: "middle",
                outline: "none"
              }, o, !!r && {
                _focus: t
              })
            }), [o, r]),
            C = function (t) {
              var n = e.useState(!t),
                r = n[0],
                o = n[1],
                a = e.useCallback((function (e) {
                  e && o("BUTTON" === e.tagName)
                }), []);
              return {
                ref: a,
                type: r ? "button" : void 0
              }
            }(k),
            _ = C.ref,
            P = C.type,
            T = {
              rightIcon: p,
              leftIcon: f,
              iconSpacing: v,
              children: d
            };
          return e.createElement(no.button, Bo({
            disabled: l || u,
            ref: Ro(n, _),
            as: k,
            type: null != g ? g : P,
            "data-active": L(c),
            "data-loading": L(u),
            __css: E,
            className: I("chakra-button", w)
          }, S), u && "start" === x && e.createElement(Wo, {
            className: "chakra-button__spinner--start",
            label: h,
            placement: "start",
            spacing: v
          }, y), u ? h || e.createElement(no.span, {
            opacity: 0
          }, e.createElement(Yo, T)) : e.createElement(Yo, T), u && "end" === x && e.createElement(Wo, {
            className: "chakra-button__spinner--end",
            label: h,
            placement: "end",
            spacing: v
          }, y))
        }));

      function Yo(t) {
        var n = t.leftIcon,
          r = t.rightIcon,
          o = t.children,
          a = t.iconSpacing;
        return e.createElement(e.Fragment, null, n && e.createElement(Ho, {
          marginEnd: a
        }, n), o, r && e.createElement(Ho, {
          marginStart: a
        }, r))
      }
      var Xo = ["icon", "children", "isRound", "aria-label"],
        Qo = Kr((function (t, n) {
          var r = t.icon,
            o = t.children,
            a = t.isRound,
            i = t["aria-label"],
            l = Io(t, Xo),
            u = r || o,
            s = e.isValidElement(u) ? e.cloneElement(u, {
              "aria-hidden": !0,
              focusable: !1
            }) : null;
          return e.createElement(qo, Bo({
            padding: "0",
            borderRadius: a ? "full" : void 0,
            ref: n,
            "aria-label": i
          }, l), s)
        }));
      var Go = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0
        },
        Ko = e.createContext && e.createContext(Go),
        Zo = function () {
          return Zo = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
          }, Zo.apply(this, arguments)
        },
        Jo = function (e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
          }
          return n
        };

      function ea(t) {
        return t && t.map((function (t, n) {
          return e.createElement(t.tag, Zo({
            key: n
          }, t.attr), ea(t.child))
        }))
      }

      function ta(t) {
        return function (n) {
          return e.createElement(na, Zo({
            attr: Zo({}, t.attr)
          }, n), ea(t.child))
        }
      }

      function na(t) {
        var n = function (n) {
          var r, o = t.attr,
            a = t.size,
            i = t.title,
            l = Jo(t, ["attr", "size", "title"]),
            u = a || n.size || "1em";
          return n.className && (r = n.className), t.className && (r = (r ? r + " " : "") + t.className), e.createElement("svg", Zo({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
          }, n.attr, o, l, {
            className: r,
            style: Zo(Zo({
              color: t.color || n.color
            }, n.style), t.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg"
          }), i && e.createElement("title", null, i), t.children)
        };
        return void 0 !== Ko ? e.createElement(Ko.Consumer, null, (function (e) {
          return n(e)
        })) : n(Go)
      }

      function ra(e) {
        return ta({
          tag: "svg",
          attr: {
            viewBox: "0 0 512 512"
          },
          child: [{
            tag: "path",
            attr: {
              d: "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
            }
          }]
        })(e)
      }

      function oa(e) {
        return ta({
          tag: "svg",
          attr: {
            viewBox: "0 0 512 512"
          },
          child: [{
            tag: "path",
            attr: {
              d: "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
            }
          }]
        })(e)
      }

      function aa(e) {
        return ta({
          tag: "svg",
          attr: {
            viewBox: "0 0 45.701 45.7"
          },
          child: [{
            tag: "path",
            attr: {
              d: "M20.687,38.332c-2.072,2.072-5.434,2.072-7.505,0L1.554,26.704c-2.072-2.071-2.072-5.433,0-7.504c2.071-2.072,5.433-2.072,7.505,0l6.928,6.927c0.523,0.522,1.372,0.522,1.896,0L36.642,7.368c2.071-2.072,5.433-2.072,7.505,0c0.995,0.995,1.554,2.345,1.554,3.752c0,1.407-0.559,2.757-1.554,3.752L20.687,38.332z"
              // d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L18,3 Z M16.4696699,7.96966991 L10,14.4393398 L7.53033009,11.9696699 C7.23743687,11.6767767 6.76256313,11.6767767 6.46966991,11.9696699 C6.1767767,12.2625631 6.1767767,12.7374369 6.46966991,13.0303301 L9.46966991,16.0303301 C9.76256313,16.3232233 10.2374369,16.3232233 10.5303301,16.0303301 L17.5303301,9.03033009 C17.8232233,8.73743687 17.8232233,8.26256313 17.5303301,7.96966991 C17.2374369,7.6767767 16.7625631,7.6767767 16.4696699,7.96966991 Z"
            }
          }]
        })(e)
      }
      // function aa(e) {
      //   return ta({
      //     tag: "svg",
      //     attr: {
      //       viewBox: "0 0 448 512"
      //     },
      //     child: [{
      //       tag: "path",
      //       attr: {
      //         d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
      //       }
      //     }]
      //   })(e)
      // }
      var ia = n(184),
        la = function (e) {
          var t = e.todos,
            n = e.deleteTodo;
          return t.length ? (0, ia.jsx)(So, {
            divider: (0, ia.jsx)(bo, {}),
            borderWidth: "2px",
            borderColor: "gray.100",
            borderRadius: "lg",
            padding: "4",
            w: "100%",
            maxW: {
              base: "90vw",
              sm: "80vw",
              lg: "50vw",
              xl: "40vw"
            },
            alignItems: "stretch",
            children: t.map((function (e) {
              return (0, ia.jsxs)(ko, {
                children: [(0, ia.jsx)(Co, {
                  children: e.body
                }), (0, ia.jsx)(vo, {}), (0, ia.jsx)(Qo, {
                  icon: (0, ia.jsx)(aa, {}),
                  isRound: "true",
                  onClick: function () {
                    return n(e.id)
                  }
                })]
              }, e.id)
            }))
          }) : (0, ia.jsx)(co, {
            colorScheme: "cyan",
            p: "4",
            borderRadius: "lg",
            children: "\u041f\u0443\u0441\u0442\u043e!"
          })
        };

      function ua() {
        return ua = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, ua.apply(this, arguments)
      }
      var sa = function (t) {
          return e.createElement(io, ua({
            viewBox: "0 0 24 24"
          }, t), e.createElement("path", {
            fill: "currentColor",
            d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
          }))
        },
        ca = ["status"],
        da = Nr("Alert"),
        fa = da[0],
        pa = da[1],
        ha = {
          info: {
            icon: function (t) {
              return e.createElement(io, ua({
                viewBox: "0 0 24 24"
              }, t), e.createElement("path", {
                fill: "currentColor",
                d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
              }))
            },
            colorScheme: "blue"
          },
          warning: {
            icon: sa,
            colorScheme: "orange"
          },
          success: {
            icon: function (t) {
              return e.createElement(io, ua({
                viewBox: "0 0 24 24"
              }, t), e.createElement("path", {
                fill: "currentColor",
                d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              }))
            },
            colorScheme: "green"
          },
          error: {
            icon: sa,
            colorScheme: "red"
          },
          loading: {
            icon: Fo,
            colorScheme: "blue"
          }
        },
        ma = Sr({
          name: "AlertContext",
          errorMessage: "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`"
        }),
        va = ma[0],
        ga = ma[1],
        ya = Kr((function (t, n) {
          var r, o = Wr(t),
            a = o.status,
            i = void 0 === a ? "info" : a,
            l = function (e, t) {
              if (null == e) return {};
              var n, r, o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o
            }(o, ca),
            u = to("Alert", ua({}, t, {
              colorScheme: null != (r = t.colorScheme) ? r : ha[i].colorScheme
            })),
            s = ua({
              width: "100%",
              display: "flex",
              alignItems: "center",
              position: "relative",
              overflow: "hidden"
            }, u.container);
          return e.createElement(va, {
            value: {
              status: i
            }
          }, e.createElement(fa, {
            value: u
          }, e.createElement(no.div, ua({
            role: "alert",
            ref: n
          }, l, {
            className: I("chakra-alert", t.className),
            __css: s
          }))))
        })),
        ba = Kr((function (t, n) {
          var r = pa();
          return e.createElement(no.div, ua({
            ref: n
          }, t, {
            className: I("chakra-alert__title", t.className),
            __css: r.title
          }))
        })),
        xa = Kr((function (t, n) {
          var r = ua({
            display: "inline"
          }, pa().description);
          return e.createElement(no.div, ua({
            ref: n
          }, t, {
            className: I("chakra-alert__desc", t.className),
            __css: r
          }))
        })),
        wa = function (t) {
          var n = ga().status,
            r = ha[n].icon,
            o = pa(),
            a = "loading" === n ? o.spinner : o.icon;
          return e.createElement(no.span, ua({
            display: "inherit"
          }, t, {
            className: I("chakra-alert__icon", t.className),
            __css: a
          }), t.children || e.createElement(r, {
            h: "100%",
            w: "100%"
          }))
        };

      function ka() {
        return ka = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, ka.apply(this, arguments)
      }
      var Sa = ["children", "isDisabled", "__css"],
        Ea = function (t) {
          return e.createElement(io, ka({
            focusable: "false",
            "aria-hidden": !0
          }, t), e.createElement("path", {
            fill: "currentColor",
            d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
          }))
        },
        Ca = Kr((function (t, n) {
          var r = eo("CloseButton", t),
            o = Wr(t),
            a = o.children,
            i = o.isDisabled,
            l = o.__css,
            u = function (e, t) {
              if (null == e) return {};
              var n, r, o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o
            }(o, Sa);
          return e.createElement(no.button, ka({
            type: "button",
            "aria-label": "Close",
            ref: n,
            disabled: i,
            __css: ka({}, {
              outline: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }, r, l)
          }, u), a || e.createElement(Ea, {
            width: "1em",
            height: "1em"
          }))
        }));
      var _a = (0, e.createContext)(null);

      function Pa(t) {
        var n = (0, e.useRef)(null);
        return null === n.current && (n.current = t()), n.current
      }
      var Ta = 0,
        Aa = function () {
          return Ta++
        },
        Ra = function () {
          return Pa(Aa)
        };

      function za() {
        var t = (0, e.useContext)(_a);
        if (null === t) return [!0, null];
        var n = t.isPresent,
          r = t.onExitComplete,
          o = t.register,
          a = Ra();
        (0, e.useEffect)((function () {
          return o(a)
        }), []);
        return !n && r ? [!1, function () {
          return null === r || void 0 === r ? void 0 : r(a)
        }] : [!0]
      }

      function Oa() {
        return null === (t = (0, e.useContext)(_a)) || t.isPresent;
        var t
      }
      var Ma = function (e, t) {
        return Ma = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (e, t) {
          e.__proto__ = t
        } || function (e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, Ma(e, t)
      };

      function ja(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        Ma(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var La = function () {
        return La = Object.assign || function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, La.apply(this, arguments)
      };

      function Fa(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }
      Object.create;

      function Ia(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" === typeof e.length) return {
          next: function () {
            return e && r >= e.length && (e = void 0), {
              value: e && e[r++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function Ba(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, a = n.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = a.next()).done;) i.push(r.value)
        } catch (l) {
          o = {
            error: l
          }
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return i
      }

      function Da(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }
      Object.create;
      var Na = function (e) {
          return {
            isEnabled: function (t) {
              return e.some((function (e) {
                return !!t[e]
              }))
            }
          }
        },
        Va = {
          measureLayout: Na(["layout", "layoutId", "drag"]),
          animation: Na(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: Na(["exit"]),
          drag: Na(["drag", "dragControls"]),
          focus: Na(["whileFocus"]),
          hover: Na(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: Na(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: Na(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: Na(["whileInView", "onViewportEnter", "onViewportLeave"])
        };
      var Wa = (0, e.createContext)({
          strict: !1
        }),
        Ua = Object.keys(Va),
        Ha = Ua.length;
      var $a = (0, e.createContext)({
          transformPagePoint: function (e) {
            return e
          },
          isStatic: !1,
          reducedMotion: "never"
        }),
        qa = (0, e.createContext)({});
      var Ya = "undefined" !== typeof document,
        Xa = Ya ? e.useLayoutEffect : e.useEffect,
        Qa = {
          current: null
        },
        Ga = !1;

      function Ka() {
        return !Ga && function () {
          if (Ga = !0, Ya)
            if (window.matchMedia) {
              var e = window.matchMedia("(prefers-reduced-motion)"),
                t = function () {
                  return Qa.current = e.matches
                };
              e.addListener(t), t()
            } else Qa.current = !1
        }(), Ba((0, e.useState)(Qa.current), 1)[0]
      }

      function Za(t, n, r, o) {
        var a = (0, e.useContext)(Wa),
          i = (0, e.useContext)(qa).visualElement,
          l = (0, e.useContext)(_a),
          u = function () {
            var t = Ka(),
              n = (0, e.useContext)($a).reducedMotion;
            return "never" !== n && ("always" === n || t)
          }(),
          s = (0, e.useRef)(void 0);
        o || (o = a.renderer), !s.current && o && (s.current = o(t, {
          visualState: n,
          parent: i,
          props: r,
          presenceId: null === l || void 0 === l ? void 0 : l.id,
          blockInitialAnimation: !1 === (null === l || void 0 === l ? void 0 : l.initial),
          shouldReduceMotion: u
        }));
        var c = s.current;
        return Xa((function () {
          null === c || void 0 === c || c.syncRender()
        })), (0, e.useEffect)((function () {
          var e;
          null === (e = null === c || void 0 === c ? void 0 : c.animationState) || void 0 === e || e.animateChanges()
        })), Xa((function () {
          return function () {
            return null === c || void 0 === c ? void 0 : c.notifyUnmount()
          }
        }), []), c
      }

      function Ja(e) {
        return "object" === typeof e && Object.prototype.hasOwnProperty.call(e, "current")
      }

      function ei(e) {
        return Array.isArray(e)
      }

      function ti(e) {
        return "string" === typeof e || ei(e)
      }

      function ni(e, t, n, r, o) {
        var a;
        return void 0 === r && (r = {}), void 0 === o && (o = {}), "function" === typeof t && (t = t(null !== n && void 0 !== n ? n : e.custom, r, o)), "string" === typeof t && (t = null === (a = e.variants) || void 0 === a ? void 0 : a[t]), "function" === typeof t && (t = t(null !== n && void 0 !== n ? n : e.custom, r, o)), t
      }

      function ri(e, t, n) {
        var r = e.getProps();
        return ni(r, t, null !== n && void 0 !== n ? n : r.custom, function (e) {
          var t = {};
          return e.forEachValue((function (e, n) {
            return t[n] = e.get()
          })), t
        }(e), function (e) {
          var t = {};
          return e.forEachValue((function (e, n) {
            return t[n] = e.getVelocity()
          })), t
        }(e))
      }

      function oi(e) {
        var t;
        return "function" === typeof (null === (t = e.animate) || void 0 === t ? void 0 : t.start) || ti(e.initial) || ti(e.animate) || ti(e.whileHover) || ti(e.whileDrag) || ti(e.whileTap) || ti(e.whileFocus) || ti(e.exit)
      }

      function ai(e) {
        return Boolean(oi(e) || e.variants)
      }

      function ii(t) {
        var n = function (e, t) {
            if (oi(e)) {
              var n = e.initial,
                r = e.animate;
              return {
                initial: !1 === n || ti(n) ? n : void 0,
                animate: ti(r) ? r : void 0
              }
            }
            return !1 !== e.inherit ? t : {}
          }(t, (0, e.useContext)(qa)),
          r = n.initial,
          o = n.animate;
        return (0, e.useMemo)((function () {
          return {
            initial: r,
            animate: o
          }
        }), [li(r), li(o)])
      }

      function li(e) {
        return Array.isArray(e) ? e.join(" ") : e
      }
      var ui = 1 / 60 * 1e3,
        si = "undefined" !== typeof performance ? function () {
          return performance.now()
        } : function () {
          return Date.now()
        },
        ci = "undefined" !== typeof window ? function (e) {
          return window.requestAnimationFrame(e)
        } : function (e) {
          return setTimeout((function () {
            return e(si())
          }), ui)
        };
      var di = !0,
        fi = !1,
        pi = !1,
        hi = {
          delta: 0,
          timestamp: 0
        },
        mi = ["read", "update", "preRender", "render", "postRender"],
        vi = mi.reduce((function (e, t) {
          return e[t] = function (e) {
            var t = [],
              n = [],
              r = 0,
              o = !1,
              a = !1,
              i = new WeakSet,
              l = {
                schedule: function (e) {
                  var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && o,
                    l = a ? t : n;
                  return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && i.add(e), -1 === l.indexOf(e) && (l.push(e), a && o && (r = t.length)), e
                },
                cancel: function (e) {
                  var t = n.indexOf(e); - 1 !== t && n.splice(t, 1), i.delete(e)
                },
                process: function (u) {
                  if (o) a = !0;
                  else {
                    o = !0;
                    var s = [n, t];
                    if (t = s[0], (n = s[1]).length = 0, r = t.length)
                      for (var c = 0; c < r; c++) {
                        var d = t[c];
                        d(u), i.has(d) && (l.schedule(d), e())
                      }
                    o = !1, a && (a = !1, l.process(u))
                  }
                }
              };
            return l
          }((function () {
            return fi = !0
          })), e
        }), {}),
        gi = mi.reduce((function (e, t) {
          var n = vi[t];
          return e[t] = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return fi || ki(), n.schedule(e, t, r)
          }, e
        }), {}),
        yi = mi.reduce((function (e, t) {
          return e[t] = vi[t].cancel, e
        }), {}),
        bi = mi.reduce((function (e, t) {
          return e[t] = function () {
            return vi[t].process(hi)
          }, e
        }), {}),
        xi = function (e) {
          return vi[e].process(hi)
        },
        wi = function e(t) {
          fi = !1, hi.delta = di ? ui : Math.max(Math.min(t - hi.timestamp, 40), 1), hi.timestamp = t, pi = !0, mi.forEach(xi), pi = !1, fi && (di = !1, ci(e))
        },
        ki = function () {
          fi = !0, di = !0, pi || ci(wi)
        },
        Si = function () {
          return hi
        },
        Ei = gi,
        Ci = function (e, t, n) {
          return -n * e + n * t + e
        };

      function _i(e, t) {
        return t ? e * (1e3 / t) : 0
      }

      function Pi(e, t) {
        -1 === e.indexOf(t) && e.push(t)
      }

      function Ti(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
      }
      var Ai = function () {
          function e() {
            this.subscriptions = []
          }
          return e.prototype.add = function (e) {
            var t = this;
            return Pi(this.subscriptions, e),
              function () {
                return Ti(t.subscriptions, e)
              }
          }, e.prototype.notify = function (e, t, n) {
            var r = this.subscriptions.length;
            if (r)
              if (1 === r) this.subscriptions[0](e, t, n);
              else
                for (var o = 0; o < r; o++) {
                  var a = this.subscriptions[o];
                  a && a(e, t, n)
                }
          }, e.prototype.getSize = function () {
            return this.subscriptions.length
          }, e.prototype.clear = function () {
            this.subscriptions.length = 0
          }, e
        }(),
        Ri = function () {
          function e(e) {
            var t, n = this;
            this.version = "6.3.11", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new Ai, this.velocityUpdateSubscribers = new Ai, this.renderSubscribers = new Ai, this.canTrackVelocity = !1, this.updateAndNotify = function (e, t) {
              void 0 === t && (t = !0), n.prev = n.current, n.current = e;
              var r = Si(),
                o = r.delta,
                a = r.timestamp;
              n.lastUpdated !== a && (n.timeDelta = o, n.lastUpdated = a, Ei.postRender(n.scheduleVelocityCheck)), n.prev !== n.current && n.updateSubscribers.notify(n.current), n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()), t && n.renderSubscribers.notify(n.current)
            }, this.scheduleVelocityCheck = function () {
              return Ei.postRender(n.velocityCheck)
            }, this.velocityCheck = function (e) {
              e.timestamp !== n.lastUpdated && (n.prev = n.current, n.velocityUpdateSubscribers.notify(n.getVelocity()))
            }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = (t = this.current, !isNaN(parseFloat(t)))
          }
          return e.prototype.onChange = function (e) {
            return this.updateSubscribers.add(e)
          }, e.prototype.clearListeners = function () {
            this.updateSubscribers.clear()
          }, e.prototype.onRenderRequest = function (e) {
            return e(this.get()), this.renderSubscribers.add(e)
          }, e.prototype.attach = function (e) {
            this.passiveEffect = e
          }, e.prototype.set = function (e, t) {
            void 0 === t && (t = !0), t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
          }, e.prototype.get = function () {
            return this.current
          }, e.prototype.getPrevious = function () {
            return this.prev
          }, e.prototype.getVelocity = function () {
            return this.canTrackVelocity ? _i(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
          }, e.prototype.start = function (e) {
            var t = this;
            return this.stop(), new Promise((function (n) {
              t.hasAnimated = !0, t.stopAnimation = e(n)
            })).then((function () {
              return t.clearAnimation()
            }))
          }, e.prototype.stop = function () {
            this.stopAnimation && this.stopAnimation(), this.clearAnimation()
          }, e.prototype.isAnimating = function () {
            return !!this.stopAnimation
          }, e.prototype.clearAnimation = function () {
            this.stopAnimation = null
          }, e.prototype.destroy = function () {
            this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
          }, e
        }();

      function zi(e) {
        return new Ri(e)
      }
      var Oi = function (e) {
          return Boolean(null !== e && "object" === typeof e && e.getVelocity)
        },
        Mi = function (e, t, n) {
          return Math.min(Math.max(n, e), t)
        },
        ji = .001;

      function Li(e) {
        var t, n, r = e.duration,
          o = void 0 === r ? 800 : r,
          a = e.bounce,
          i = void 0 === a ? .25 : a,
          l = e.velocity,
          u = void 0 === l ? 0 : l,
          s = e.mass,
          c = void 0 === s ? 1 : s,
          d = 1 - i;
        d = Mi(.05, 1, d), o = Mi(.01, 10, o / 1e3), d < 1 ? (t = function (e) {
          var t = e * d,
            n = t * o,
            r = t - u,
            a = Fi(e, d),
            i = Math.exp(-n);
          return ji - r / a * i
        }, n = function (e) {
          var n = e * d * o,
            r = n * u + u,
            a = Math.pow(d, 2) * Math.pow(e, 2) * o,
            i = Math.exp(-n),
            l = Fi(Math.pow(e, 2), d);
          return (-t(e) + ji > 0 ? -1 : 1) * ((r - a) * i) / l
        }) : (t = function (e) {
          return Math.exp(-e * o) * ((e - u) * o + 1) - .001
        }, n = function (e) {
          return Math.exp(-e * o) * (o * o * (u - e))
        });
        var f = function (e, t, n) {
          for (var r = n, o = 1; o < 12; o++) r -= e(r) / t(r);
          return r
        }(t, n, 5 / o);
        if (o *= 1e3, isNaN(f)) return {
          stiffness: 100,
          damping: 10,
          duration: o
        };
        var p = Math.pow(f, 2) * c;
        return {
          stiffness: p,
          damping: 2 * d * Math.sqrt(c * p),
          duration: o
        }
      }

      function Fi(e, t) {
        return e * Math.sqrt(1 - t * t)
      }
      var Ii = ["duration", "bounce"],
        Bi = ["stiffness", "damping", "mass"];

      function Di(e, t) {
        return t.some((function (t) {
          return void 0 !== e[t]
        }))
      }

      function Ni(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          o = void 0 === r ? 1 : r,
          a = e.restSpeed,
          i = void 0 === a ? 2 : a,
          l = e.restDelta,
          u = Fa(e, ["from", "to", "restSpeed", "restDelta"]),
          s = {
            done: !1,
            value: n
          },
          c = function (e) {
            var t = Object.assign({
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1
            }, e);
            if (!Di(e, Bi) && Di(e, Ii)) {
              var n = Li(e);
              (t = Object.assign(Object.assign(Object.assign({}, t), n), {
                velocity: 0,
                mass: 1
              })).isResolvedFromDuration = !0
            }
            return t
          }(u),
          d = c.stiffness,
          f = c.damping,
          p = c.mass,
          h = c.velocity,
          m = c.duration,
          v = c.isResolvedFromDuration,
          g = Vi,
          y = Vi;

        function b() {
          var e = h ? -h / 1e3 : 0,
            t = o - n,
            r = f / (2 * Math.sqrt(d * p)),
            a = Math.sqrt(d / p) / 1e3;
          if (void 0 === l && (l = Math.min(Math.abs(o - n) / 100, .4)), r < 1) {
            var i = Fi(a, r);
            g = function (n) {
              var l = Math.exp(-r * a * n);
              return o - l * ((e + r * a * t) / i * Math.sin(i * n) + t * Math.cos(i * n))
            }, y = function (n) {
              var o = Math.exp(-r * a * n);
              return r * a * o * (Math.sin(i * n) * (e + r * a * t) / i + t * Math.cos(i * n)) - o * (Math.cos(i * n) * (e + r * a * t) - i * t * Math.sin(i * n))
            }
          } else if (1 === r) g = function (n) {
            return o - Math.exp(-a * n) * (t + (e + a * t) * n)
          };
          else {
            var u = a * Math.sqrt(r * r - 1);
            g = function (n) {
              var i = Math.exp(-r * a * n),
                l = Math.min(u * n, 300);
              return o - i * ((e + r * a * t) * Math.sinh(l) + u * t * Math.cosh(l)) / u
            }
          }
        }
        return b(), {
          next: function (e) {
            var t = g(e);
            if (v) s.done = e >= m;
            else {
              var n = 1e3 * y(e),
                r = Math.abs(n) <= i,
                a = Math.abs(o - t) <= l;
              s.done = r && a
            }
            return s.value = s.done ? o : t, s
          },
          flipTarget: function () {
            h = -h;
            var e = [o, n];
            n = e[0], o = e[1], b()
          }
        }
      }
      Ni.needsInterpolation = function (e, t) {
        return "string" === typeof e || "string" === typeof t
      };
      var Vi = function (e) {
          return 0
        },
        Wi = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r
        },
        Ui = function (e, t) {
          return function (n) {
            return Math.max(Math.min(n, t), e)
          }
        },
        Hi = function (e) {
          return e % 1 ? Number(e.toFixed(5)) : e
        },
        $i = /(-)?([\d]*\.?[\d])+/g,
        qi = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        Yi = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

      function Xi(e) {
        return "string" === typeof e
      }
      var Qi = {
          test: function (e) {
            return "number" === typeof e
          },
          parse: parseFloat,
          transform: function (e) {
            return e
          }
        },
        Gi = Object.assign(Object.assign({}, Qi), {
          transform: Ui(0, 1)
        }),
        Ki = Object.assign(Object.assign({}, Qi), {
          default: 1
        });

      function Zi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var Ji = function (e, t) {
          return function (n) {
            return Boolean(Xi(n) && Yi.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
          }
        },
        el = function (e, t, n) {
          return function (r) {
            var o;
            if (!Xi(r)) return r;
            var a = l(r.match($i), 4),
              i = a[0],
              u = a[1],
              s = a[2],
              c = a[3];
            return Zi(o = {}, e, parseFloat(i)), Zi(o, t, parseFloat(u)), Zi(o, n, parseFloat(s)), Zi(o, "alpha", void 0 !== c ? parseFloat(c) : 1), o
          }
        },
        tl = Ui(0, 255),
        nl = Object.assign(Object.assign({}, Qi), {
          transform: function (e) {
            return Math.round(tl(e))
          }
        }),
        rl = {
          test: Ji("rgb", "red"),
          parse: el("red", "green", "blue"),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              o = e.alpha,
              a = void 0 === o ? 1 : o;
            return "rgba(" + nl.transform(t) + ", " + nl.transform(n) + ", " + nl.transform(r) + ", " + Hi(Gi.transform(a)) + ")"
          }
        };
      var ol = {
          test: Ji("#"),
          parse: function (e) {
            var t = "",
              n = "",
              r = "",
              o = "";
            return e.length > 5 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2), o = e.substr(7, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), o = e.substr(4, 1), t += t, n += n, r += r, o += o), {
              red: parseInt(t, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: o ? parseInt(o, 16) / 255 : 1
            }
          },
          transform: rl.transform
        },
        al = function (e) {
          return {
            test: function (t) {
              return Xi(t) && t.endsWith(e) && 1 === t.split(" ").length
            },
            parse: parseFloat,
            transform: function (t) {
              return "".concat(t).concat(e)
            }
          }
        },
        il = al("deg"),
        ll = al("%"),
        ul = al("px"),
        sl = al("vh"),
        cl = al("vw"),
        dl = Object.assign(Object.assign({}, ll), {
          parse: function (e) {
            return ll.parse(e) / 100
          },
          transform: function (e) {
            return ll.transform(100 * e)
          }
        }),
        fl = {
          test: Ji("hsl", "hue"),
          parse: el("hue", "saturation", "lightness"),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              o = e.alpha,
              a = void 0 === o ? 1 : o;
            return "hsla(" + Math.round(t) + ", " + ll.transform(Hi(n)) + ", " + ll.transform(Hi(r)) + ", " + Hi(Gi.transform(a)) + ")"
          }
        };

      function pl(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function hl(e) {
        var t = e.hue,
          n = e.saturation,
          r = e.lightness,
          o = e.alpha;
        t /= 360, r /= 100;
        var a = 0,
          i = 0,
          l = 0;
        if (n /= 100) {
          var u = r < .5 ? r * (1 + n) : r + n - r * n,
            s = 2 * r - u;
          a = pl(s, u, t + 1 / 3), i = pl(s, u, t), l = pl(s, u, t - 1 / 3)
        } else a = i = l = r;
        return {
          red: Math.round(255 * a),
          green: Math.round(255 * i),
          blue: Math.round(255 * l),
          alpha: o
        }
      }
      var ml = function (e, t, n) {
          var r = e * e,
            o = t * t;
          return Math.sqrt(Math.max(0, n * (o - r) + r))
        },
        vl = [ol, rl, fl],
        gl = function (e) {
          return vl.find((function (t) {
            return t.test(e)
          }))
        },
        yl = function (e) {
          return "'".concat(e, "' is not an animatable color. Use the equivalent color code instead.")
        },
        bl = function (e, t) {
          var n = gl(e),
            r = gl(t);
          yl(e), yl(t);
          var o = n.parse(e),
            a = r.parse(t);
          n === fl && (o = hl(o), n = rl), r === fl && (a = hl(a), r = rl);
          var i = Object.assign({}, o);
          return function (e) {
            for (var t in i) "alpha" !== t && (i[t] = ml(o[t], a[t], e));
            return i.alpha = Ci(o.alpha, a.alpha, e), n.transform(i)
          }
        },
        xl = {
          test: function (e) {
            return rl.test(e) || ol.test(e) || fl.test(e)
          },
          parse: function (e) {
            return rl.test(e) ? rl.parse(e) : fl.test(e) ? fl.parse(e) : ol.parse(e)
          },
          transform: function (e) {
            return Xi(e) ? e : e.hasOwnProperty("red") ? rl.transform(e) : fl.transform(e)
          }
        },
        wl = "${c}",
        kl = "${n}";

      function Sl(e) {
        "number" === typeof e && (e = "".concat(e));
        var t = [],
          n = 0,
          r = e.match(qi);
        r && (n = r.length, e = e.replace(qi, wl), t.push.apply(t, i(r.map(xl.parse))));
        var o = e.match($i);
        return o && (e = e.replace($i, kl), t.push.apply(t, i(o.map(Qi.parse)))), {
          values: t,
          numColors: n,
          tokenised: e
        }
      }

      function El(e) {
        return Sl(e).values
      }

      function Cl(e) {
        var t = Sl(e),
          n = t.values,
          r = t.numColors,
          o = t.tokenised,
          a = n.length;
        return function (e) {
          for (var t = o, n = 0; n < a; n++) t = t.replace(n < r ? wl : kl, n < r ? xl.transform(e[n]) : Hi(e[n]));
          return t
        }
      }
      var _l = function (e) {
        return "number" === typeof e ? 0 : e
      };
      var Pl = {
          test: function (e) {
            var t, n, r, o;
            return isNaN(e) && Xi(e) && (null !== (n = null === (t = e.match($i)) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) + (null !== (o = null === (r = e.match(qi)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0
          },
          parse: El,
          createTransformer: Cl,
          getAnimatableNone: function (e) {
            var t = El(e);
            return Cl(e)(t.map(_l))
          }
        },
        Tl = function (e) {
          return "number" === typeof e
        },
        Al = function (e, t) {
          return function (n) {
            return t(e(n))
          }
        },
        Rl = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return t.reduce(Al)
        };

      function zl(e, t) {
        return Tl(e) ? function (n) {
          return Ci(e, t, n)
        } : xl.test(e) ? bl(e, t) : Ll(e, t)
      }
      var Ol = function (e, t) {
          var n = i(e),
            r = n.length,
            o = e.map((function (e, n) {
              return zl(e, t[n])
            }));
          return function (e) {
            for (var t = 0; t < r; t++) n[t] = o[t](e);
            return n
          }
        },
        Ml = function (e, t) {
          var n = Object.assign(Object.assign({}, e), t),
            r = {};
          for (var o in n) void 0 !== e[o] && void 0 !== t[o] && (r[o] = zl(e[o], t[o]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n
          }
        };

      function jl(e) {
        for (var t = Pl.parse(e), n = t.length, r = 0, o = 0, a = 0, i = 0; i < n; i++) r || "number" === typeof t[i] ? r++ : void 0 !== t[i].hue ? a++ : o++;
        return {
          parsed: t,
          numNumbers: r,
          numRGB: o,
          numHSL: a
        }
      }
      var Ll = function (e, t) {
          var n = Pl.createTransformer(t),
            r = jl(e),
            o = jl(t);
          return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? Rl(Ol(r.parsed, o.parsed), n) : ("Complex values '".concat(e, "' and '").concat(t, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."), function (n) {
            return "".concat(n > 0 ? t : e)
          })
        },
        Fl = function (e, t) {
          return function (n) {
            return Ci(e, t, n)
          }
        };

      function Il(e, t, n) {
        for (var r, o = [], a = n || ("number" === typeof (r = e[0]) ? Fl : "string" === typeof r ? xl.test(r) ? bl : Ll : Array.isArray(r) ? Ol : "object" === typeof r ? Ml : void 0), i = e.length - 1, l = 0; l < i; l++) {
          var u = a(e[l], e[l + 1]);
          if (t) {
            var s = Array.isArray(t) ? t[l] : t;
            u = Rl(s, u)
          }
          o.push(u)
        }
        return o
      }

      function Bl(e, t) {
        var n = l(e, 2),
          r = n[0],
          o = n[1],
          a = l(t, 1)[0];
        return function (e) {
          return a(Wi(r, o, e))
        }
      }

      function Dl(e, t) {
        var n = e.length,
          r = n - 1;
        return function (o) {
          var a = 0,
            i = !1;
          if (o <= e[0] ? i = !0 : o >= e[r] && (a = r - 1, i = !0), !i) {
            for (var l = 1; l < n && !(e[l] > o || l === r); l++);
            a = l - 1
          }
          var u = Wi(e[a], e[a + 1], o);
          return t[a](u)
        }
      }

      function Nl(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          o = void 0 === r || r,
          a = n.ease,
          i = n.mixer,
          l = e.length;
        t.length, !a || !Array.isArray(a) || a.length, e[0] > e[l - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
        var u = Il(t, a, i),
          s = 2 === l ? Bl(e, u) : Dl(e, u);
        return o ? function (t) {
          return s(Mi(e[0], e[l - 1], t))
        } : s
      }
      var Vl, Wl = function (e) {
          return function (t) {
            return 1 - e(1 - t)
          }
        },
        Ul = function (e) {
          return function (t) {
            return t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
          }
        },
        Hl = function (e) {
          return function (t) {
            return t * t * ((e + 1) * t - e)
          }
        },
        $l = function (e) {
          return e
        },
        ql = (Vl = 2, function (e) {
          return Math.pow(e, Vl)
        }),
        Yl = Wl(ql),
        Xl = Ul(ql),
        Ql = function (e) {
          return 1 - Math.sin(Math.acos(e))
        },
        Gl = Wl(Ql),
        Kl = Ul(Gl),
        Zl = Hl(1.525),
        Jl = Wl(Zl),
        eu = Ul(Zl),
        tu = function (e) {
          var t = Hl(e);
          return function (e) {
            return (e *= 2) < 1 ? .5 * t(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
          }
        }(1.525),
        nu = function (e) {
          if (1 === e || 0 === e) return e;
          var t = e * e;
          return e < .36363636363636365 ? 7.5625 * t : e < .7272727272727273 ? 9.075 * t - 9.9 * e + 3.4 : e < .9 ? 12.066481994459833 * t - 19.63545706371191 * e + 8.898060941828255 : 10.8 * e * e - 20.52 * e + 10.72
        },
        ru = Wl(nu);

      function ou(e, t) {
        return e.map((function () {
          return t || Xl
        })).splice(0, e.length - 1)
      }

      function au(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          o = void 0 === r ? 1 : r,
          a = e.ease,
          i = e.offset,
          l = e.duration,
          u = void 0 === l ? 300 : l,
          s = {
            done: !1,
            value: n
          },
          c = Array.isArray(o) ? o : [n, o],
          d = function (e, t) {
            return e.map((function (e) {
              return e * t
            }))
          }(i && i.length === c.length ? i : function (e) {
            var t = e.length;
            return e.map((function (e, n) {
              return 0 !== n ? n / (t - 1) : 0
            }))
          }(c), u);

        function f() {
          return Nl(d, c, {
            ease: Array.isArray(a) ? a : ou(c, a)
          })
        }
        var p = f();
        return {
          next: function (e) {
            return s.value = p(e), s.done = e >= u, s
          },
          flipTarget: function () {
            c.reverse(), p = f()
          }
        }
      }
      var iu = {
        keyframes: au,
        spring: Ni,
        decay: function (e) {
          var t = e.velocity,
            n = void 0 === t ? 0 : t,
            r = e.from,
            o = void 0 === r ? 0 : r,
            a = e.power,
            i = void 0 === a ? .8 : a,
            l = e.timeConstant,
            u = void 0 === l ? 350 : l,
            s = e.restDelta,
            c = void 0 === s ? .5 : s,
            d = e.modifyTarget,
            f = {
              done: !1,
              value: o
            },
            p = i * n,
            h = o + p,
            m = void 0 === d ? h : d(h);
          return m !== h && (p = m - o), {
            next: function (e) {
              var t = -p * Math.exp(-e / u);
              return f.done = !(t > c || t < -c), f.value = f.done ? m : m + t, f
            },
            flipTarget: function () {}
          }
        }
      };
      var lu = 1 / 60 * 1e3,
        uu = "undefined" !== typeof performance ? function () {
          return performance.now()
        } : function () {
          return Date.now()
        },
        su = "undefined" !== typeof window ? function (e) {
          return window.requestAnimationFrame(e)
        } : function (e) {
          return setTimeout((function () {
            return e(uu())
          }), lu)
        };
      var cu = !0,
        du = !1,
        fu = !1,
        pu = {
          delta: 0,
          timestamp: 0
        },
        hu = ["read", "update", "preRender", "render", "postRender"],
        mu = hu.reduce((function (e, t) {
          return e[t] = function (e) {
            var t = [],
              n = [],
              r = 0,
              o = !1,
              a = !1,
              i = new WeakSet,
              l = {
                schedule: function (e) {
                  var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && o,
                    l = a ? t : n;
                  return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && i.add(e), -1 === l.indexOf(e) && (l.push(e), a && o && (r = t.length)), e
                },
                cancel: function (e) {
                  var t = n.indexOf(e); - 1 !== t && n.splice(t, 1), i.delete(e)
                },
                process: function (u) {
                  if (o) a = !0;
                  else {
                    o = !0;
                    var s = [n, t];
                    if (t = s[0], (n = s[1]).length = 0, r = t.length)
                      for (var c = 0; c < r; c++) {
                        var d = t[c];
                        d(u), i.has(d) && (l.schedule(d), e())
                      }
                    o = !1, a && (a = !1, l.process(u))
                  }
                }
              };
            return l
          }((function () {
            return du = !0
          })), e
        }), {}),
        vu = hu.reduce((function (e, t) {
          var n = mu[t];
          return e[t] = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return du || xu(), n.schedule(e, t, r)
          }, e
        }), {}),
        gu = hu.reduce((function (e, t) {
          return e[t] = mu[t].cancel, e
        }), {}),
        yu = (hu.reduce((function (e, t) {
          return e[t] = function () {
            return mu[t].process(pu)
          }, e
        }), {}), function (e) {
          return mu[e].process(pu)
        }),
        bu = function e(t) {
          du = !1, pu.delta = cu ? lu : Math.max(Math.min(t - pu.timestamp, 40), 1), pu.timestamp = t, fu = !0, hu.forEach(yu), fu = !1, du && (cu = !1, su(e))
        },
        xu = function () {
          du = !0, cu = !0, fu || su(bu)
        },
        wu = vu;

      function ku(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return e - t - n
      }
      var Su = function (e) {
        var t = function (t) {
          var n = t.delta;
          return e(n)
        };
        return {
          start: function () {
            return wu.update(t, !0)
          },
          stop: function () {
            return gu.update(t)
          }
        }
      };

      function Eu(e) {
        var t, n, r, o, a, i = e.from,
          l = e.autoplay,
          u = void 0 === l || l,
          s = e.driver,
          c = void 0 === s ? Su : s,
          d = e.elapsed,
          f = void 0 === d ? 0 : d,
          p = e.repeat,
          h = void 0 === p ? 0 : p,
          m = e.repeatType,
          v = void 0 === m ? "loop" : m,
          g = e.repeatDelay,
          y = void 0 === g ? 0 : g,
          b = e.onPlay,
          x = e.onStop,
          w = e.onComplete,
          k = e.onRepeat,
          S = e.onUpdate,
          E = Fa(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]),
          C = E.to,
          _ = 0,
          P = E.duration,
          T = !1,
          A = !0,
          R = function (e) {
            if (Array.isArray(e.to)) return au;
            if (iu[e.type]) return iu[e.type];
            var t = new Set(Object.keys(e));
            return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? au : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Ni : au
          }(E);
        (null === (n = (t = R).needsInterpolation) || void 0 === n ? void 0 : n.call(t, i, C)) && (a = Nl([0, 100], [i, C], {
          clamp: !1
        }), i = 0, C = 100);
        var z = R(Object.assign(Object.assign({}, E), {
          from: i,
          to: C
        }));

        function O() {
          _++, "reverse" === v ? f = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return arguments.length > 3 && void 0 !== arguments[3] && !arguments[3] ? t - (e - t) + n : ku(t + -e, t, n)
          }(f, P, y, A = _ % 2 === 0) : (f = ku(f, P, y), "mirror" === v && z.flipTarget()), T = !1, k && k()
        }

        function M(e) {
          if (A || (e = -e), f += e, !T) {
            var t = z.next(Math.max(0, f));
            o = t.value, a && (o = a(o)), T = A ? t.done : f <= 0
          }
          null === S || void 0 === S || S(o), T && (0 === _ && (null !== P && void 0 !== P || (P = f)), _ < h ? function (e, t, n, r) {
            return r ? e >= t + n : e <= -n
          }(f, P, y, A) && O() : (r.stop(), w && w()))
        }
        return u && (null === b || void 0 === b || b(), (r = c(M)).start()), {
          stop: function () {
            null === x || void 0 === x || x(), r.stop()
          }
        }
      }

      function Cu(e) {
        var t, n = e.from,
          r = void 0 === n ? 0 : n,
          o = e.velocity,
          a = void 0 === o ? 0 : o,
          i = e.min,
          l = e.max,
          u = e.power,
          s = void 0 === u ? .8 : u,
          c = e.timeConstant,
          d = void 0 === c ? 750 : c,
          f = e.bounceStiffness,
          p = void 0 === f ? 500 : f,
          h = e.bounceDamping,
          m = void 0 === h ? 10 : h,
          v = e.restDelta,
          g = void 0 === v ? 1 : v,
          y = e.modifyTarget,
          b = e.driver,
          x = e.onUpdate,
          w = e.onComplete,
          k = e.onStop;

        function S(e) {
          return void 0 !== i && e < i || void 0 !== l && e > l
        }

        function E(e) {
          return void 0 === i ? l : void 0 === l || Math.abs(i - e) < Math.abs(l - e) ? i : l
        }

        function C(e) {
          null === t || void 0 === t || t.stop(), t = Eu(Object.assign(Object.assign({}, e), {
            driver: b,
            onUpdate: function (t) {
              var n;
              null === x || void 0 === x || x(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
            },
            onComplete: w,
            onStop: k
          }))
        }

        function _(e) {
          C(Object.assign({
            type: "spring",
            stiffness: p,
            damping: m,
            restDelta: g
          }, e))
        }
        if (S(r)) _({
          from: r,
          velocity: a,
          to: E(r)
        });
        else {
          var P = s * a + r;
          "undefined" !== typeof y && (P = y(P));
          var T, A, R = E(P),
            z = R === i ? -1 : 1;
          C({
            type: "decay",
            from: r,
            velocity: a,
            timeConstant: d,
            power: s,
            restDelta: g,
            modifyTarget: y,
            onUpdate: S(P) ? function (e) {
              T = A, A = e, a = _i(e - T, pu.delta), (1 === z && e > R || -1 === z && e < R) && _({
                from: e,
                to: R,
                velocity: a
              })
            } : void 0
          })
        }
        return {
          stop: function () {
            return null === t || void 0 === t ? void 0 : t.stop()
          }
        }
      }
      var _u = function (e) {
          return 1e3 * e
        },
        Pu = function (e, t) {
          return 1 - 3 * t + 3 * e
        },
        Tu = function (e, t) {
          return 3 * t - 6 * e
        },
        Au = function (e) {
          return 3 * e
        },
        Ru = function (e, t, n) {
          return ((Pu(t, n) * e + Tu(t, n)) * e + Au(t)) * e
        },
        zu = function (e, t, n) {
          return 3 * Pu(t, n) * e * e + 2 * Tu(t, n) * e + Au(t)
        };
      var Ou = .1;

      function Mu(e, t, n, r) {
        if (e === t && n === r) return $l;
        for (var o = new Float32Array(11), a = 0; a < 11; ++a) o[a] = Ru(a * Ou, e, n);

        function i(t) {
          for (var r = 0, a = 1; 10 !== a && o[a] <= t; ++a) r += Ou;
          --a;
          var i = r + (t - o[a]) / (o[a + 1] - o[a]) * Ou,
            l = zu(i, e, n);
          return l >= .001 ? function (e, t, n, r) {
            for (var o = 0; o < 8; ++o) {
              var a = zu(t, n, r);
              if (0 === a) return t;
              t -= (Ru(t, n, r) - e) / a
            }
            return t
          }(t, i, e, n) : 0 === l ? i : function (e, t, n, r, o) {
            var a, i, l = 0;
            do {
              (a = Ru(i = t + (n - t) / 2, r, o) - e) > 0 ? n = i : t = i
            } while (Math.abs(a) > 1e-7 && ++l < 10);
            return i
          }(t, r, r + Ou, e, n)
        }
        return function (e) {
          return 0 === e || 1 === e ? e : Ru(i(e), t, r)
        }
      }
      var ju = {
          linear: $l,
          easeIn: ql,
          easeInOut: Xl,
          easeOut: Yl,
          circIn: Ql,
          circInOut: Kl,
          circOut: Gl,
          backIn: Zl,
          backInOut: eu,
          backOut: Jl,
          anticipate: tu,
          bounceIn: ru,
          bounceInOut: function (e) {
            return e < .5 ? .5 * (1 - nu(1 - 2 * e)) : .5 * nu(2 * e - 1) + .5
          },
          bounceOut: nu
        },
        Lu = function (e) {
          if (Array.isArray(e)) {
            e.length;
            var t = Ba(e, 4);
            return Mu(t[0], t[1], t[2], t[3])
          }
          return "string" === typeof e ? ("Invalid easing type '".concat(e, "'"), ju[e]) : e
        },
        Fu = function (e, t) {
          return "zIndex" !== e && (!("number" !== typeof t && !Array.isArray(t)) || !("string" !== typeof t || !Pl.test(t) || t.startsWith("url(")))
        },
        Iu = function (e) {
          return Array.isArray(e)
        },
        Bu = function () {
          return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
          }
        },
        Du = function (e) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
          }
        },
        Nu = function () {
          return {
            type: "keyframes",
            ease: "linear",
            duration: .3
          }
        },
        Vu = function (e) {
          return {
            type: "keyframes",
            duration: .8,
            values: e
          }
        },
        Wu = {
          x: Bu,
          y: Bu,
          z: Bu,
          rotate: Bu,
          rotateX: Bu,
          rotateY: Bu,
          rotateZ: Bu,
          scaleX: Du,
          scaleY: Du,
          scale: Du,
          opacity: Nu,
          backgroundColor: Nu,
          color: Nu,
          default: Du
        },
        Uu = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function Hu(e) {
        var t = l(e.slice(0, -1).split("("), 2),
          n = t[0],
          r = t[1];
        if ("drop-shadow" === n) return e;
        var o = l(r.match($i) || [], 1)[0];
        if (!o) return e;
        var a = r.replace(o, ""),
          i = Uu.has(n) ? 1 : 0;
        return o !== r && (i *= 100), n + "(" + i + a + ")"
      }
      var $u = /([a-z-]*)\(.*?\)/g,
        qu = Object.assign(Object.assign({}, Pl), {
          getAnimatableNone: function (e) {
            var t = e.match($u);
            return t ? t.map(Hu).join(" ") : e
          }
        }),
        Yu = La(La({}, Qi), {
          transform: Math.round
        }),
        Xu = {
          borderWidth: ul,
          borderTopWidth: ul,
          borderRightWidth: ul,
          borderBottomWidth: ul,
          borderLeftWidth: ul,
          borderRadius: ul,
          radius: ul,
          borderTopLeftRadius: ul,
          borderTopRightRadius: ul,
          borderBottomRightRadius: ul,
          borderBottomLeftRadius: ul,
          width: ul,
          maxWidth: ul,
          height: ul,
          maxHeight: ul,
          size: ul,
          top: ul,
          right: ul,
          bottom: ul,
          left: ul,
          padding: ul,
          paddingTop: ul,
          paddingRight: ul,
          paddingBottom: ul,
          paddingLeft: ul,
          margin: ul,
          marginTop: ul,
          marginRight: ul,
          marginBottom: ul,
          marginLeft: ul,
          rotate: il,
          rotateX: il,
          rotateY: il,
          rotateZ: il,
          scale: Ki,
          scaleX: Ki,
          scaleY: Ki,
          scaleZ: Ki,
          skew: il,
          skewX: il,
          skewY: il,
          distance: ul,
          translateX: ul,
          translateY: ul,
          translateZ: ul,
          x: ul,
          y: ul,
          z: ul,
          perspective: ul,
          transformPerspective: ul,
          opacity: Gi,
          originX: dl,
          originY: dl,
          originZ: ul,
          zIndex: Yu,
          fillOpacity: Gi,
          strokeOpacity: Gi,
          numOctaves: Yu
        },
        Qu = La(La({}, Xu), {
          color: xl,
          backgroundColor: xl,
          outlineColor: xl,
          fill: xl,
          stroke: xl,
          borderColor: xl,
          borderTopColor: xl,
          borderRightColor: xl,
          borderBottomColor: xl,
          borderLeftColor: xl,
          filter: qu,
          WebkitFilter: qu
        }),
        Gu = function (e) {
          return Qu[e]
        };

      function Ku(e, t) {
        var n, r = Gu(e);
        return r !== qu && (r = Pl), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, t)
      }
      var Zu = !1,
        Ju = function (e) {
          return Iu(e) ? e[e.length - 1] || 0 : e
        };

      function es(e) {
        var t = e.ease,
          n = e.times,
          r = e.yoyo,
          o = e.flip,
          a = e.loop,
          i = Fa(e, ["ease", "times", "yoyo", "flip", "loop"]),
          l = La({}, i);
        return n && (l.offset = n), i.duration && (l.duration = _u(i.duration)), i.repeatDelay && (l.repeatDelay = _u(i.repeatDelay)), t && (l.ease = function (e) {
          return Array.isArray(e) && "number" !== typeof e[0]
        }(t) ? t.map(Lu) : Lu(t)), "tween" === i.type && (l.type = "keyframes"), (r || a || o) && (!0, r ? l.repeatType = "reverse" : a ? l.repeatType = "loop" : o && (l.repeatType = "mirror"), l.repeat = a || r || o || i.repeat), "spring" !== i.type && (l.type = "keyframes"), l
      }

      function ts(e, t, n) {
        var r;
        return Array.isArray(t.to) && (null !== (r = e.duration) && void 0 !== r || (e.duration = .8)),
          function (e) {
            Array.isArray(e.to) && null === e.to[0] && (e.to = Da([], Ba(e.to), !1), e.to[0] = e.from)
          }(t),
          function (e) {
            e.when, e.delay, e.delayChildren, e.staggerChildren, e.staggerDirection, e.repeat, e.repeatType, e.repeatDelay, e.from;
            var t = Fa(e, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
            return !!Object.keys(t).length
          }(e) || (e = La(La({}, e), function (e, t) {
            var n;
            return n = Iu(t) ? Vu : Wu[e] || Wu.default, La({
              to: t
            }, n(t))
          }(n, t.to))), La(La({}, t), es(e))
      }

      function ns(e) {
        return 0 === e || "string" === typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
      }

      function rs(e) {
        return "number" === typeof e ? 0 : Ku("", e)
      }

      function os(e, t) {
        return e[t] || e.default || e
      }

      function as(e, t, n, r) {
        return void 0 === r && (r = {}), Zu && (r = {
          type: !1
        }), t.start((function (o) {
          var a, i, l = function (e, t, n, r, o) {
              var a, i = os(r, e),
                l = null !== (a = i.from) && void 0 !== a ? a : t.get(),
                u = Fu(e, n);
              "none" === l && u && "string" === typeof n ? l = Ku(e, n) : ns(l) && "string" === typeof n ? l = rs(n) : !Array.isArray(n) && ns(n) && "string" === typeof l && (n = rs(l));
              var s = Fu(e, l);
              return "You are trying to animate ".concat(e, ' from "').concat(l, '" to "').concat(n, '". ').concat(l, " is not an animatable value - to enable this animation set ").concat(l, " to a value animatable to ").concat(n, " via the `style` property."), s && u && !1 !== i.type ? function () {
                var r = {
                  from: l,
                  to: n,
                  velocity: t.getVelocity(),
                  onComplete: o,
                  onUpdate: function (e) {
                    return t.set(e)
                  }
                };
                return "inertia" === i.type || "decay" === i.type ? Cu(La(La({}, r), i)) : Eu(La(La({}, ts(i, r, e)), {
                  onUpdate: function (e) {
                    var t;
                    r.onUpdate(e), null === (t = i.onUpdate) || void 0 === t || t.call(i, e)
                  },
                  onComplete: function () {
                    var e;
                    r.onComplete(), null === (e = i.onComplete) || void 0 === e || e.call(i)
                  }
                }))
              } : function () {
                var e, r, a = Ju(n);
                return t.set(a), o(), null === (e = null === i || void 0 === i ? void 0 : i.onUpdate) || void 0 === e || e.call(i, a), null === (r = null === i || void 0 === i ? void 0 : i.onComplete) || void 0 === r || r.call(i), {
                  stop: function () {}
                }
              }
            }(e, t, n, r, o),
            u = function (e, t) {
              var n, r;
              return null !== (r = null !== (n = (os(e, t) || {}).delay) && void 0 !== n ? n : e.delay) && void 0 !== r ? r : 0
            }(r, e),
            s = function () {
              return i = l()
            };
          return u ? a = window.setTimeout(s, _u(u)) : s(),
            function () {
              clearTimeout(a), null === i || void 0 === i || i.stop()
            }
        }))
      }
      var is = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ls = is.length,
        us = function (e) {
          return "string" === typeof e ? parseFloat(e) : e
        },
        ss = function (e) {
          return "number" === typeof e || ul.test(e)
        };

      function cs(e, t) {
        var n;
        return null !== (n = e[t]) && void 0 !== n ? n : e.borderRadius
      }
      var ds = ps(0, .5, Gl),
        fs = ps(.5, .95, $l);

      function ps(e, t, n) {
        return function (r) {
          return r < e ? 0 : r > t ? 1 : n(Wi(e, t, r))
        }
      }

      function hs(e, t) {
        e.min = t.min, e.max = t.max
      }

      function ms(e, t) {
        hs(e.x, t.x), hs(e.y, t.y)
      }

      function vs(e) {
        return void 0 === e || 1 === e
      }

      function gs(e) {
        var t = e.scale,
          n = e.scaleX,
          r = e.scaleY;
        return !vs(t) || !vs(n) || !vs(r)
      }

      function ys(e) {
        return gs(e) || bs(e.x) || bs(e.y) || e.z || e.rotate || e.rotateX || e.rotateY
      }

      function bs(e) {
        return e && "0%" !== e
      }

      function xs(e, t, n) {
        return n + t * (e - n)
      }

      function ws(e, t, n, r, o) {
        return void 0 !== o && (e = xs(e, o, r)), xs(e, n, r) + t
      }

      function ks(e, t, n, r, o) {
        void 0 === t && (t = 0), void 0 === n && (n = 1), e.min = ws(e.min, t, n, r, o), e.max = ws(e.max, t, n, r, o)
      }

      function Ss(e, t) {
        var n = t.x,
          r = t.y;
        ks(e.x, n.translate, n.scale, n.originPoint), ks(e.y, r.translate, r.scale, r.originPoint)
      }

      function Es(e, t) {
        e.min = e.min + t, e.max = e.max + t
      }

      function Cs(e, t, n) {
        var r = Ba(n, 3),
          o = r[0],
          a = r[1],
          i = r[2],
          l = void 0 !== t[i] ? t[i] : .5,
          u = Ci(e.min, e.max, l);
        ks(e, t[o], t[a], u, t.scale)
      }
      var _s = ["x", "scaleX", "originX"],
        Ps = ["y", "scaleY", "originY"];

      function Ts(e, t) {
        Cs(e.x, t, _s), Cs(e.y, t, Ps)
      }
      var As = function (e) {
          return e.hasOwnProperty("x") && e.hasOwnProperty("y")
        },
        Rs = function (e) {
          return As(e) && e.hasOwnProperty("z")
        },
        zs = function (e, t) {
          return Math.abs(e - t)
        };

      function Os(e, t) {
        if (Tl(e) && Tl(t)) return zs(e, t);
        if (As(e) && As(t)) {
          var n = zs(e.x, t.x),
            r = zs(e.y, t.y),
            o = Rs(e) && Rs(t) ? zs(e.z, t.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
        }
      }

      function Ms(e) {
        return e.max - e.min
      }

      function js(e, t, n) {
        return void 0 === t && (t = 0), void 0 === n && (n = .01), Os(e, t) < n
      }

      function Ls(e, t, n, r) {
        void 0 === r && (r = .5), e.origin = r, e.originPoint = Ci(t.min, t.max, e.origin), e.scale = Ms(n) / Ms(t), (js(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Ci(n.min, n.max, e.origin) - e.originPoint, (js(e.translate) || isNaN(e.translate)) && (e.translate = 0)
      }

      function Fs(e, t, n, r) {
        Ls(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX), Ls(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY)
      }

      function Is(e, t, n) {
        e.min = n.min + t.min, e.max = e.min + Ms(t)
      }

      function Bs(e, t, n) {
        e.min = t.min - n.min, e.max = e.min + Ms(t)
      }

      function Ds(e, t, n) {
        Bs(e.x, t.x, n.x), Bs(e.y, t.y, n.y)
      }

      function Ns(e, t, n, r, o) {
        return e = xs(e -= t, 1 / n, r), void 0 !== o && (e = xs(e, 1 / o, r)), e
      }

      function Vs(e, t, n, r, o) {
        var a = Ba(n, 3),
          i = a[0],
          l = a[1],
          u = a[2];
        ! function (e, t, n, r, o, a, i) {
          if (void 0 === t && (t = 0), void 0 === n && (n = 1), void 0 === r && (r = .5), void 0 === a && (a = e), void 0 === i && (i = e), ll.test(t) && (t = parseFloat(t), t = Ci(i.min, i.max, t / 100) - i.min), "number" === typeof t) {
            var l = Ci(a.min, a.max, r);
            e === a && (l -= t), e.min = Ns(e.min, t, n, l, o), e.max = Ns(e.max, t, n, l, o)
          }
        }(e, t[i], t[l], t[u], t.scale, r, o)
      }
      var Ws = ["x", "scaleX", "originX"],
        Us = ["y", "scaleY", "originY"];

      function Hs(e, t, n, r) {
        Vs(e.x, t, Ws, null === n || void 0 === n ? void 0 : n.x, null === r || void 0 === r ? void 0 : r.x), Vs(e.y, t, Us, null === n || void 0 === n ? void 0 : n.y, null === r || void 0 === r ? void 0 : r.y)
      }

      function $s(e) {
        return 0 === e.translate && 1 === e.scale
      }

      function qs(e) {
        return $s(e.x) && $s(e.y)
      }

      function Ys(e, t) {
        return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
      }
      var Xs = function () {
          function e() {
            this.members = []
          }
          return e.prototype.add = function (e) {
            Pi(this.members, e), e.scheduleRender()
          }, e.prototype.remove = function (e) {
            if (Ti(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
              var t = this.members[this.members.length - 1];
              t && this.promote(t)
            }
          }, e.prototype.relegate = function (e) {
            var t, n = this.members.findIndex((function (t) {
              return e === t
            }));
            if (0 === n) return !1;
            for (var r = n; r >= 0; r--) {
              var o = this.members[r];
              if (!1 !== o.isPresent) {
                t = o;
                break
              }
            }
            return !!t && (this.promote(t), !0)
          }, e.prototype.promote = function (e, t) {
            var n, r = this.lead;
            e !== r && (this.prevLead = r, this.lead = e, e.show(), r && (r.instance && r.scheduleRender(), e.scheduleRender(), e.resumeFrom = r, t && (e.resumeFrom.preserveOpacity = !0), r.snapshot && (e.snapshot = r.snapshot, e.snapshot.latestValues = r.animationValues || r.latestValues, e.snapshot.isShared = !0), (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) && (e.isLayoutDirty = !0), !1 === e.options.crossfade && r.hide()))
          }, e.prototype.exitAnimationComplete = function () {
            this.members.forEach((function (e) {
              var t, n, r, o, a;
              null === (n = (t = e.options).onExitComplete) || void 0 === n || n.call(t), null === (a = null === (r = e.resumingFrom) || void 0 === r ? void 0 : (o = r.options).onExitComplete) || void 0 === a || a.call(o)
            }))
          }, e.prototype.scheduleRender = function () {
            this.members.forEach((function (e) {
              e.instance && e.scheduleRender(!1)
            }))
          }, e.prototype.removeLeadSnapshot = function () {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
          }, e
        }(),
        Qs = {};

      function Gs(e, t, n) {
        var r = e.x.translate / t.x,
          o = e.y.translate / t.y,
          a = "translate3d(".concat(r, "px, ").concat(o, "px, 0) ");
        if (a += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") "), n) {
          var i = n.rotate,
            l = n.rotateX,
            u = n.rotateY;
          i && (a += "rotate(".concat(i, "deg) ")), l && (a += "rotateX(".concat(l, "deg) ")), u && (a += "rotateY(".concat(u, "deg) "))
        }
        var s = e.x.scale * t.x,
          c = e.y.scale * t.y;
        return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" === (a += "scale(".concat(s, ", ").concat(c, ")")) ? "none" : a
      }

      function Ks(e) {
        return [e("x"), e("y")]
      }
      var Zs = ["", "X", "Y", "Z"],
        Js = ["transformPerspective", "x", "y", "z"];

      function ec(e, t) {
        return Js.indexOf(e) - Js.indexOf(t)
      } ["translate", "scale", "rotate", "skew"].forEach((function (e) {
        return Zs.forEach((function (t) {
          return Js.push(e + t)
        }))
      }));
      var tc = new Set(Js);

      function nc(e) {
        return tc.has(e)
      }
      var rc = new Set(["originX", "originY", "originZ"]);

      function oc(e) {
        return rc.has(e)
      }
      var ac = function (e, t) {
          return e.depth - t.depth
        },
        ic = function () {
          function e() {
            this.children = [], this.isDirty = !1
          }
          return e.prototype.add = function (e) {
            Pi(this.children, e), this.isDirty = !0
          }, e.prototype.remove = function (e) {
            Ti(this.children, e), this.isDirty = !0
          }, e.prototype.forEach = function (e) {
            this.isDirty && this.children.sort(ac), this.isDirty = !1, this.children.forEach(e)
          }, e
        }();

      function lc(e) {
        var t, n = Oi(e) ? e.get() : e;
        return t = n, Boolean(t && "object" === typeof t && t.mix && t.toValue) ? n.toValue() : n
      }
      var uc = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      };

      function sc(e) {
        var t = e.attachResizeListener,
          n = e.defaultParent,
          r = e.measureScroll,
          o = e.resetTransform;
        return function () {
          function e(e, t, r) {
            var o = this;
            void 0 === t && (t = {}), void 0 === r && (r = null === n || void 0 === n ? void 0 : n()), this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = function () {
              o.isUpdating && (o.isUpdating = !1, o.clearAllSnapshots())
            }, this.updateProjection = function () {
              o.nodes.forEach(vc), o.nodes.forEach(gc)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = e, this.latestValues = t, this.root = r ? r.root || r : this, this.path = r ? Da(Da([], Ba(r.path), !1), [r], !1) : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, e && this.root.registerPotentialNode(e, this);
            for (var a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ic)
          }
          return e.prototype.addEventListener = function (e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new Ai), this.eventHandlers.get(e).add(t)
          }, e.prototype.notifyListeners = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = this.eventHandlers.get(e);
            null === r || void 0 === r || r.notify.apply(r, Da([], Ba(t), !1))
          }, e.prototype.hasListeners = function (e) {
            return this.eventHandlers.has(e)
          }, e.prototype.registerPotentialNode = function (e, t) {
            this.potentialNodes.set(e, t)
          }, e.prototype.mount = function (e, n) {
            var r, o = this;
            if (void 0 === n && (n = !1), !this.instance) {
              this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
              var a = this.options,
                i = a.layoutId,
                l = a.layout,
                u = a.visualElement;
              if (u && !u.getInstance() && u.mount(e), this.root.nodes.add(this), null === (r = this.parent) || void 0 === r || r.children.add(this), this.id && this.root.potentialNodes.delete(this.id), n && (l || i) && (this.isLayoutDirty = !0), t) {
                var s, c = function () {
                  return o.root.updateBlockedByResize = !1
                };
                t(e, (function () {
                  o.root.updateBlockedByResize = !0, clearTimeout(s), s = window.setTimeout(c, 250), uc.hasAnimatedSinceResize && (uc.hasAnimatedSinceResize = !1, o.nodes.forEach(mc))
                }))
              }
              i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && u && (i || l) && this.addEventListener("didUpdate", (function (e) {
                var t, n, r, a, i, l = e.delta,
                  s = e.hasLayoutChanged,
                  c = e.hasRelativeTargetChanged,
                  d = e.layout;
                if (o.isTreeAnimationBlocked()) return o.target = void 0, void(o.relativeTarget = void 0);
                var f = null !== (n = null !== (t = o.options.transition) && void 0 !== t ? t : u.getDefaultTransition()) && void 0 !== n ? n : Sc,
                  p = u.getProps(),
                  h = p.onLayoutAnimationStart,
                  m = p.onLayoutAnimationComplete,
                  v = !o.targetLayout || !Ys(o.targetLayout, d) || c,
                  g = !s && c;
                if ((null === (r = o.resumeFrom) || void 0 === r ? void 0 : r.instance) || g || s && (v || !o.currentAnimation)) {
                  o.resumeFrom && (o.resumingFrom = o.resumeFrom, o.resumingFrom.resumingFrom = void 0), o.setAnimationOrigin(l, g);
                  var y = La(La({}, os(f, "layout")), {
                    onPlay: h,
                    onComplete: m
                  });
                  u.shouldReduceMotion && (y.delay = 0, y.type = !1), o.startAnimation(y)
                } else s || 0 !== o.animationProgress || o.finishAnimation(), o.isLead() && (null === (i = (a = o.options).onExitComplete) || void 0 === i || i.call(a));
                o.targetLayout = d
              }))
            }
          }, e.prototype.unmount = function () {
            var e, t;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (e = this.getStack()) || void 0 === e || e.remove(this), null === (t = this.parent) || void 0 === t || t.children.delete(this), this.instance = void 0, yi.preRender(this.updateProjection)
          }, e.prototype.blockUpdate = function () {
            this.updateManuallyBlocked = !0
          }, e.prototype.unblockUpdate = function () {
            this.updateManuallyBlocked = !1
          }, e.prototype.isUpdateBlocked = function () {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }, e.prototype.isTreeAnimationBlocked = function () {
            var e;
            return this.isAnimationBlocked || (null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimationBlocked()) || !1
          }, e.prototype.startUpdate = function () {
            var e;
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (e = this.nodes) || void 0 === e || e.forEach(yc))
          }, e.prototype.willUpdate = function (e) {
            var t, n, r;
            if (void 0 === e && (e = !0), this.root.isUpdateBlocked()) null === (n = (t = this.options).onExitComplete) || void 0 === n || n.call(t);
            else if (!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty) {
              this.isLayoutDirty = !0;
              for (var o = 0; o < this.path.length; o++) {
                var a = this.path[o];
                a.shouldResetTransform = !0, a.updateScroll()
              }
              var i = this.options,
                l = i.layoutId,
                u = i.layout;
              if (void 0 !== l || u) {
                var s = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                this.prevTransformTemplateValue = null === s || void 0 === s ? void 0 : s(this.latestValues, ""), this.updateSnapshot(), e && this.notifyListeners("willUpdate")
              }
            }
          }, e.prototype.didUpdate = function () {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(pc);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Ec), this.potentialNodes.clear()), this.nodes.forEach(hc), this.nodes.forEach(cc), this.nodes.forEach(dc), this.clearAllSnapshots(), bi.update(), bi.preRender(), bi.render())
          }, e.prototype.clearAllSnapshots = function () {
            this.nodes.forEach(fc), this.sharedNodes.forEach(bc)
          }, e.prototype.scheduleUpdateProjection = function () {
            Ei.preRender(this.updateProjection, !1, !0)
          }, e.prototype.scheduleCheckAfterUnmount = function () {
            var e = this;
            Ei.postRender((function () {
              e.isLayoutDirty ? e.root.didUpdate() : e.root.checkUpdateFailed()
            }))
          }, e.prototype.updateSnapshot = function () {
            if (!this.snapshot && this.instance) {
              var e = this.measure(),
                t = this.removeTransform(this.removeElementScroll(e));
              _c(t), this.snapshot = {
                measured: e,
                layout: t,
                latestValues: {}
              }
            }
          }, e.prototype.updateLayout = function () {
            var e;
            if (this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
              if (this.resumeFrom && !this.resumeFrom.instance)
                for (var t = 0; t < this.path.length; t++) {
                  this.path[t].updateScroll()
                }
              var n = this.measure();
              _c(n);
              var r = this.layout;
              this.layout = {
                measured: n,
                actual: this.removeElementScroll(n)
              }, this.layoutCorrected = {
                x: {
                  min: 0,
                  max: 0
                },
                y: {
                  min: 0,
                  max: 0
                }
              }, this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (e = this.options.visualElement) || void 0 === e || e.notifyLayoutMeasure(this.layout.actual, null === r || void 0 === r ? void 0 : r.actual)
            }
          }, e.prototype.updateScroll = function () {
            this.options.layoutScroll && this.instance && (this.scroll = r(this.instance))
          }, e.prototype.resetTransform = function () {
            var e;
            if (o) {
              var t = this.isLayoutDirty || this.shouldResetTransform,
                n = this.projectionDelta && !qs(this.projectionDelta),
                r = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate,
                a = null === r || void 0 === r ? void 0 : r(this.latestValues, ""),
                i = a !== this.prevTransformTemplateValue;
              t && (n || ys(this.latestValues) || i) && (o(this.instance, a), this.shouldResetTransform = !1, this.scheduleRender())
            }
          }, e.prototype.measure = function () {
            var e = this.options.visualElement;
            if (!e) return {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            };
            var t = e.measureViewportBox(),
              n = this.root.scroll;
            return n && (Es(t.x, n.x), Es(t.y, n.y)), t
          }, e.prototype.removeElementScroll = function (e) {
            var t = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            };
            ms(t, e);
            for (var n = 0; n < this.path.length; n++) {
              var r = this.path[n],
                o = r.scroll,
                a = r.options;
              r !== this.root && o && a.layoutScroll && (Es(t.x, o.x), Es(t.y, o.y))
            }
            return t
          }, e.prototype.applyTransform = function (e, t) {
            void 0 === t && (t = !1);
            var n = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            };
            ms(n, e);
            for (var r = 0; r < this.path.length; r++) {
              var o = this.path[r];
              !t && o.options.layoutScroll && o.scroll && o !== o.root && Ts(n, {
                x: -o.scroll.x,
                y: -o.scroll.y
              }), ys(o.latestValues) && Ts(n, o.latestValues)
            }
            return ys(this.latestValues) && Ts(n, this.latestValues), n
          }, e.prototype.removeTransform = function (e) {
            var t, n = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            };
            ms(n, e);
            for (var r = 0; r < this.path.length; r++) {
              var o = this.path[r];
              if (o.instance && ys(o.latestValues)) {
                gs(o.latestValues) && o.updateSnapshot();
                var a = {
                  x: {
                    min: 0,
                    max: 0
                  },
                  y: {
                    min: 0,
                    max: 0
                  }
                };
                ms(a, o.measure()), Hs(n, o.latestValues, null === (t = o.snapshot) || void 0 === t ? void 0 : t.layout, a)
              }
            }
            return ys(this.latestValues) && Hs(n, this.latestValues), n
          }, e.prototype.setTargetDelta = function (e) {
            this.targetDelta = e, this.root.scheduleUpdateProjection()
          }, e.prototype.setOptions = function (e) {
            var t;
            this.options = La(La(La({}, this.options), e), {
              crossfade: null === (t = e.crossfade) || void 0 === t || t
            })
          }, e.prototype.clearMeasurements = function () {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }, e.prototype.resolveTargetDelta = function () {
            var e, t, n, r, o = this.options,
              a = o.layout,
              i = o.layoutId;
            this.layout && (a || i) && (this.targetDelta || this.relativeTarget || (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            }, this.relativeTargetOrigin = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            }, Ds(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), ms(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            }, this.targetWithTransforms = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            }), this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target) ? (t = this.target, n = this.relativeTarget, r = this.relativeParent.target, Is(t.x, n.x, r.x), Is(t.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : ms(this.target, this.layout.actual), Ss(this.target, this.targetDelta)) : ms(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            }, this.relativeTargetOrigin = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            }, Ds(this.relativeTargetOrigin, this.target, this.relativeParent.target), ms(this.relativeTarget, this.relativeTargetOrigin)))))
          }, e.prototype.getClosestProjectingParent = function () {
            if (this.parent && !ys(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }, e.prototype.calcProjection = function () {
            var e, t = this.options,
              n = t.layout,
              r = t.layoutId;
            if (this.isTreeAnimating = Boolean((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), this.layout && (n || r)) {
              var o = this.getLead();
              ms(this.layoutCorrected, this.layout.actual),
                function (e, t, n, r) {
                  var o, a;
                  void 0 === r && (r = !1);
                  var i = n.length;
                  if (i) {
                    var l, u;
                    t.x = t.y = 1;
                    for (var s = 0; s < i; s++) u = (l = n[s]).projectionDelta, "contents" !== (null === (a = null === (o = l.instance) || void 0 === o ? void 0 : o.style) || void 0 === a ? void 0 : a.display) && (r && l.options.layoutScroll && l.scroll && l !== l.root && Ts(e, {
                      x: -l.scroll.x,
                      y: -l.scroll.y
                    }), u && (t.x *= u.x.scale, t.y *= u.y.scale, Ss(e, u)), r && ys(l.latestValues) && Ts(e, l.latestValues))
                  }
                }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== o);
              var a = o.target;
              if (a) {
                this.projectionDelta || (this.projectionDelta = {
                  x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                  },
                  y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                  }
                }, this.projectionDeltaWithTransform = {
                  x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                  },
                  y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                  }
                });
                var i = this.treeScale.x,
                  l = this.treeScale.y,
                  u = this.projectionTransform;
                Fs(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.projectionTransform = Gs(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === i && this.treeScale.y === l || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a))
              }
            }
          }, e.prototype.hide = function () {
            this.isVisible = !1
          }, e.prototype.show = function () {
            this.isVisible = !0
          }, e.prototype.scheduleRender = function (e) {
            var t, n, r;
            void 0 === e && (e = !0), null === (n = (t = this.options).scheduleRender) || void 0 === n || n.call(t), e && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }, e.prototype.setAnimationOrigin = function (e, t) {
            var n, r = this;
            void 0 === t && (t = !1);
            var o = this.snapshot,
              a = (null === o || void 0 === o ? void 0 : o.latestValues) || {},
              i = La({}, this.latestValues),
              l = {
                x: {
                  translate: 0,
                  scale: 1,
                  origin: 0,
                  originPoint: 0
                },
                y: {
                  translate: 0,
                  scale: 1,
                  origin: 0,
                  originPoint: 0
                }
              };
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !t;
            var u = {
                x: {
                  min: 0,
                  max: 0
                },
                y: {
                  min: 0,
                  max: 0
                }
              },
              s = null === o || void 0 === o ? void 0 : o.isShared,
              c = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1,
              d = Boolean(s && !c && !0 === this.options.crossfade && !this.path.some(kc));
            this.animationProgress = 0, this.mixTargetDelta = function (t) {
              var n, o = t / 1e3;
              xc(l.x, e.x, o), xc(l.y, e.y, o), r.setTargetDelta(l), r.relativeTarget && r.relativeTargetOrigin && r.layout && (null === (n = r.relativeParent) || void 0 === n ? void 0 : n.layout) && (Ds(u, r.layout.actual, r.relativeParent.layout.actual), function (e, t, n, r) {
                wc(e.x, t.x, n.x, r), wc(e.y, t.y, n.y, r)
              }(r.relativeTarget, r.relativeTargetOrigin, u, o)), s && (r.animationValues = i, function (e, t, n, r, o, a) {
                var i, l, u, s;
                o ? (e.opacity = Ci(0, null !== (i = n.opacity) && void 0 !== i ? i : 1, ds(r)), e.opacityExit = Ci(null !== (l = t.opacity) && void 0 !== l ? l : 1, 0, fs(r))) : a && (e.opacity = Ci(null !== (u = t.opacity) && void 0 !== u ? u : 1, null !== (s = n.opacity) && void 0 !== s ? s : 1, r));
                for (var c = 0; c < ls; c++) {
                  var d = "border".concat(is[c], "Radius"),
                    f = cs(t, d),
                    p = cs(n, d);
                  void 0 === f && void 0 === p || (f || (f = 0), p || (p = 0), 0 === f || 0 === p || ss(f) === ss(p) ? (e[d] = Math.max(Ci(us(f), us(p), r), 0), (ll.test(p) || ll.test(f)) && (e[d] += "%")) : e[d] = p)
                }(t.rotate || n.rotate) && (e.rotate = Ci(t.rotate || 0, n.rotate || 0, r))
              }(i, a, r.latestValues, o, d, c)), r.root.scheduleUpdateProjection(), r.scheduleRender(), r.animationProgress = o
            }, this.mixTargetDelta(0)
          }, e.prototype.startAnimation = function (e) {
            var t, n, r = this;
            this.notifyListeners("animationStart"), null === (t = this.currentAnimation) || void 0 === t || t.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (yi.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ei.update((function () {
              uc.hasAnimatedSinceResize = !0, r.currentAnimation = function (e, t, n) {
                void 0 === n && (n = {});
                var r = Oi(e) ? e : zi(e);
                return as("", r, t, n), {
                  stop: function () {
                    return r.stop()
                  },
                  isAnimating: function () {
                    return r.isAnimating()
                  }
                }
              }(0, 1e3, La(La({}, e), {
                onUpdate: function (t) {
                  var n;
                  r.mixTargetDelta(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                },
                onComplete: function () {
                  var t;
                  null === (t = e.onComplete) || void 0 === t || t.call(e), r.completeAnimation()
                }
              })), r.resumingFrom && (r.resumingFrom.currentAnimation = r.currentAnimation), r.pendingAnimation = void 0
            }))
          }, e.prototype.completeAnimation = function () {
            var e;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }, e.prototype.finishAnimation = function () {
            var e;
            this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
          }, e.prototype.applyTransformsToTarget = function () {
            var e = this.getLead(),
              t = e.targetWithTransforms,
              n = e.target,
              r = e.layout,
              o = e.latestValues;
            t && n && r && (ms(t, n), Ts(t, o), Fs(this.projectionDeltaWithTransform, this.layoutCorrected, t, o))
          }, e.prototype.registerSharedNode = function (e, t) {
            var n, r, o;
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new Xs), this.sharedNodes.get(e).add(t), t.promote({
              transition: null === (n = t.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
              preserveFollowOpacity: null === (o = null === (r = t.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(r, t)
            })
          }, e.prototype.isLead = function () {
            var e = this.getStack();
            return !e || e.lead === this
          }, e.prototype.getLead = function () {
            var e;
            return this.options.layoutId && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
          }, e.prototype.getPrevLead = function () {
            var e;
            return this.options.layoutId ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
          }, e.prototype.getStack = function () {
            var e = this.options.layoutId;
            if (e) return this.root.sharedNodes.get(e)
          }, e.prototype.promote = function (e) {
            var t = void 0 === e ? {} : e,
              n = t.needsReset,
              r = t.transition,
              o = t.preserveFollowOpacity,
              a = this.getStack();
            a && a.promote(this, o), n && (this.projectionDelta = void 0, this.needsReset = !0), r && this.setOptions({
              transition: r
            })
          }, e.prototype.relegate = function () {
            var e = this.getStack();
            return !!e && e.relegate(this)
          }, e.prototype.resetRotation = function () {
            var e = this.options.visualElement;
            if (e) {
              for (var t = !1, n = {}, r = 0; r < Zs.length; r++) {
                var o = "rotate" + Zs[r];
                e.getStaticValue(o) && (t = !0, n[o] = e.getStaticValue(o), e.setStaticValue(o, 0))
              }
              if (t) {
                for (var o in null === e || void 0 === e || e.syncRender(), n) e.setStaticValue(o, n[o]);
                e.scheduleRender()
              }
            }
          }, e.prototype.getProjectionStyles = function (e) {
            var t, n, r, o, a, i;
            void 0 === e && (e = {});
            var l = {};
            if (!this.instance || this.isSVG) return l;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            l.visibility = "";
            var u = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, l.opacity = "", l.pointerEvents = lc(e.pointerEvents) || "", l.transform = u ? u(this.latestValues, "") : "none", l;
            var s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              var c = {};
              return this.options.layoutId && (c.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1, c.pointerEvents = lc(e.pointerEvents) || ""), this.hasProjected && !ys(this.latestValues) && (c.transform = u ? u({}, "") : "none", this.hasProjected = !1), c
            }
            var d = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(), l.transform = Gs(this.projectionDeltaWithTransform, this.treeScale, d), u && (l.transform = u(d, l.transform));
            var f = this.projectionDelta,
              p = f.x,
              h = f.y;
            for (var m in l.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * h.origin, "% 0"), s.animationValues ? l.opacity = s === this ? null !== (o = null !== (r = d.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : l.opacity = s === this ? null !== (a = d.opacity) && void 0 !== a ? a : "" : null !== (i = d.opacityExit) && void 0 !== i ? i : 0, Qs)
              if (void 0 !== d[m]) {
                var v = Qs[m],
                  g = v.correct,
                  y = v.applyTo,
                  b = g(d[m], s);
                if (y)
                  for (var x = y.length, w = 0; w < x; w++) l[y[w]] = b;
                else l[m] = b
              } return this.options.layoutId && (l.pointerEvents = s === this ? lc(e.pointerEvents) || "" : "none"), l
          }, e.prototype.clearSnapshot = function () {
            this.resumeFrom = this.snapshot = void 0
          }, e.prototype.resetTree = function () {
            this.root.nodes.forEach((function (e) {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
            })), this.root.nodes.forEach(pc), this.root.sharedNodes.clear()
          }, e
        }()
      }

      function cc(e) {
        e.updateLayout()
      }

      function dc(e) {
        var t, n, r, o, a = null !== (n = null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) && void 0 !== n ? n : e.snapshot;
        if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
          var i = e.layout,
            l = i.actual,
            u = i.measured;
          "size" === e.options.animationType ? Ks((function (e) {
            var t = a.isShared ? a.measured[e] : a.layout[e],
              n = Ms(t);
            t.min = l[e].min, t.max = t.min + n
          })) : "position" === e.options.animationType && Ks((function (e) {
            var t = a.isShared ? a.measured[e] : a.layout[e],
              n = Ms(l[e]);
            t.max = t.min + n
          }));
          var s = {
            x: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0
            },
            y: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0
            }
          };
          Fs(s, l, a.layout);
          var c = {
            x: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0
            },
            y: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0
            }
          };
          a.isShared ? Fs(c, e.applyTransform(u, !0), a.measured) : Fs(c, l, a.layout);
          var d = !qs(s),
            f = !1;
          if (!e.resumeFrom && (e.relativeParent = e.getClosestProjectingParent(), e.relativeParent && !e.relativeParent.resumeFrom)) {
            var p = e.relativeParent,
              h = p.snapshot,
              m = p.layout;
            if (h && m) {
              var v = {
                x: {
                  min: 0,
                  max: 0
                },
                y: {
                  min: 0,
                  max: 0
                }
              };
              Ds(v, a.layout, h.layout);
              var g = {
                x: {
                  min: 0,
                  max: 0
                },
                y: {
                  min: 0,
                  max: 0
                }
              };
              Ds(g, l, m.actual), Ys(v, g) || (f = !0)
            }
          }
          e.notifyListeners("didUpdate", {
            layout: l,
            snapshot: a,
            delta: c,
            layoutDelta: s,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: f
          })
        } else e.isLead() && (null === (o = (r = e.options).onExitComplete) || void 0 === o || o.call(r));
        e.options.transition = void 0
      }

      function fc(e) {
        e.clearSnapshot()
      }

      function pc(e) {
        e.clearMeasurements()
      }

      function hc(e) {
        var t = e.options.visualElement;
        (null === t || void 0 === t ? void 0 : t.getProps().onBeforeLayoutMeasure) && t.notifyBeforeLayoutMeasure(), e.resetTransform()
      }

      function mc(e) {
        e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
      }

      function vc(e) {
        e.resolveTargetDelta()
      }

      function gc(e) {
        e.calcProjection()
      }

      function yc(e) {
        e.resetRotation()
      }

      function bc(e) {
        e.removeLeadSnapshot()
      }

      function xc(e, t, n) {
        e.translate = Ci(t.translate, 0, n), e.scale = Ci(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
      }

      function wc(e, t, n, r) {
        e.min = Ci(t.min, n.min, r), e.max = Ci(t.max, n.max, r)
      }

      function kc(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
      }
      var Sc = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function Ec(e, t) {
        for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
          if (Boolean(e.path[r].instance)) {
            n = e.path[r];
            break
          } var o = (n && n !== e.root ? n.instance : document).querySelector('[data-projection-id="'.concat(t, '"]'));
        o && e.mount(o, !0)
      }

      function Cc(e) {
        e.min = Math.round(e.min), e.max = Math.round(e.max)
      }

      function _c(e) {
        Cc(e.x), Cc(e.y)
      }
      var Pc = 1;
      var Tc = (0, e.createContext)({}),
        Ac = (0, e.createContext)({});
      var Rc = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return ja(t, e), t.prototype.getSnapshotBeforeUpdate = function () {
          return this.updateProps(), null
        }, t.prototype.componentDidUpdate = function () {}, t.prototype.updateProps = function () {
          var e = this.props,
            t = e.visualElement,
            n = e.props;
          t && t.setProps(n)
        }, t.prototype.render = function () {
          return this.props.children
        }, t
      }(e.Component);

      function zc(t) {
        var n = t.preloadedFeatures,
          r = t.createVisualElement,
          o = t.projectionNodeConstructor,
          a = t.useRender,
          i = t.useVisualState,
          l = t.Component;
        return n && function (e) {
          for (var t in e) null !== e[t] && ("projectionNodeConstructor" === t ? Va.projectionNodeConstructor = e[t] : Va[t].Component = e[t])
        }(n), (0, e.forwardRef)((function (t, n) {
          var u = function (t) {
            var n, r = t.layoutId,
              o = null === (n = (0, e.useContext)(Tc)) || void 0 === n ? void 0 : n.id;
            return o && void 0 !== r ? o + "-" + r : r
          }(t);
          t = La(La({}, t), {
            layoutId: u
          });
          var s = (0, e.useContext)($a),
            c = null,
            d = ii(t),
            f = s.isStatic ? void 0 : Pa((function () {
              if (uc.hasEverUpdated) return Pc++
            })),
            p = i(t, s.isStatic);
          return !s.isStatic && Ya && (d.visualElement = Za(l, p, La(La({}, s), t), r), function (t, n, r, o) {
            var a, i = n.layoutId,
              l = n.layout,
              u = n.drag,
              s = n.dragConstraints,
              c = n.layoutScroll,
              d = (0, e.useContext)(Ac);
            o && r && !(null === r || void 0 === r ? void 0 : r.projection) && (r.projection = new o(t, r.getLatestValues(), null === (a = r.parent) || void 0 === a ? void 0 : a.projection), r.projection.setOptions({
              layoutId: i,
              layout: l,
              alwaysMeasureLayout: Boolean(u) || s && Ja(s),
              visualElement: r,
              scheduleRender: function () {
                return r.scheduleRender()
              },
              animationType: "string" === typeof l ? l : "both",
              initialPromotionConfig: d,
              layoutScroll: c
            }))
          }(f, t, d.visualElement, o || Va.projectionNodeConstructor), c = function (t, n, r) {
            var o = [];
            if ((0, e.useContext)(Wa), !n) return null;
            for (var a = 0; a < Ha; a++) {
              var i = Ua[a],
                l = Va[i],
                u = l.isEnabled,
                s = l.Component;
              u(t) && s && o.push(e.createElement(s, La({
                key: i
              }, t, {
                visualElement: n
              })))
            }
            return o
          }(t, d.visualElement)), e.createElement(Rc, {
            visualElement: d.visualElement,
            props: La(La({}, s), t)
          }, c, e.createElement(qa.Provider, {
            value: d
          }, a(l, t, f, function (t, n, r) {
            return (0, e.useCallback)((function (e) {
              var o;
              e && (null === (o = t.mount) || void 0 === o || o.call(t, e)), n && (e ? n.mount(e) : n.unmount()), r && ("function" === typeof r ? r(e) : Ja(r) && (r.current = e))
            }), [n])
          }(p, d.visualElement, n), p, s.isStatic, d.visualElement)))
        }))
      }

      function Oc(e) {
        function t(t, n) {
          return void 0 === n && (n = {}), zc(e(t, n))
        }
        if ("undefined" === typeof Proxy) return t;
        var n = new Map;
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r)
          }
        })
      }
      var Mc = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

      function jc(e) {
        return "string" === typeof e && !e.includes("-") && !!(Mc.indexOf(e) > -1 || /[A-Z]/.test(e))
      }

      function Lc(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return nc(e) || oc(e) || (n || void 0 !== r) && (!!Qs[e] || "opacity" === e)
      }
      var Fc = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
      };

      function Ic(e) {
        return e.startsWith("--")
      }
      var Bc = function (e, t) {
        return t && "number" === typeof e ? t.transform(e) : e
      };

      function Dc(e, t, n, r) {
        var o, a = e.style,
          i = e.vars,
          l = e.transform,
          u = e.transformKeys,
          s = e.transformOrigin;
        u.length = 0;
        var c = !1,
          d = !1,
          f = !0;
        for (var p in t) {
          var h = t[p];
          if (Ic(p)) i[p] = h;
          else {
            var m = Xu[p],
              v = Bc(h, m);
            if (nc(p)) {
              if (c = !0, l[p] = v, u.push(p), !f) continue;
              h !== (null !== (o = m.default) && void 0 !== o ? o : 0) && (f = !1)
            } else oc(p) ? (s[p] = v, d = !0) : a[p] = v
          }
        }
        c ? a.transform = function (e, t, n, r) {
          var o = e.transform,
            a = e.transformKeys,
            i = t.enableHardwareAcceleration,
            l = void 0 === i || i,
            u = t.allowTransformNone,
            s = void 0 === u || u,
            c = "";
          a.sort(ec);
          for (var d = !1, f = a.length, p = 0; p < f; p++) {
            var h = a[p];
            c += "".concat(Fc[h] || h, "(").concat(o[h], ") "), "z" === h && (d = !0)
          }
          return !d && l ? c += "translateZ(0)" : c = c.trim(), r ? c = r(o, n ? "" : c) : s && n && (c = "none"), c
        }(e, n, f, r) : r ? a.transform = r({}, "") : !t.transform && a.transform && (a.transform = "none"), d && (a.transformOrigin = function (e) {
          var t = e.originX,
            n = void 0 === t ? "50%" : t,
            r = e.originY,
            o = void 0 === r ? "50%" : r,
            a = e.originZ,
            i = void 0 === a ? 0 : a;
          return "".concat(n, " ").concat(o, " ").concat(i)
        }(s))
      }
      var Nc = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {}
        }
      };

      function Vc(e, t, n) {
        for (var r in t) Oi(t[r]) || Lc(r, n) || (e[r] = t[r])
      }

      function Wc(t, n, r) {
        var o = {};
        return Vc(o, t.style || {}, t), Object.assign(o, function (t, n, r) {
          var o = t.transformTemplate;
          return (0, e.useMemo)((function () {
            var e = {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {}
            };
            Dc(e, n, {
              enableHardwareAcceleration: !r
            }, o);
            var t = e.style;
            return La(La({}, e.vars), t)
          }), [n])
        }(t, n, r)), t.transformValues && (o = t.transformValues(o)), o
      }

      function Uc(e, t, n) {
        var r = {},
          o = Wc(e, t, n);
        return Boolean(e.drag) && !1 !== e.dragListener && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === e.drag ? "none" : "pan-".concat("x" === e.drag ? "y" : "x")), r.style = o, r
      }
      var Hc = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);

      function $c(e) {
        return Hc.has(e)
      }
      var qc, Yc = function (e) {
        return !$c(e)
      };
      try {
        (qc = require("@emotion/is-prop-valid").default) && (Yc = function (e) {
          return e.startsWith("on") ? !$c(e) : qc(e)
        })
      } catch (hb) {}

      function Xc(e, t, n) {
        return "string" === typeof e ? e : ul.transform(t + n * e)
      }
      var Qc = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        Gc = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function Kc(e, t, n, r) {
        var o = t.attrX,
          a = t.attrY,
          i = t.originX,
          l = t.originY,
          u = t.pathLength,
          s = t.pathSpacing,
          c = void 0 === s ? 1 : s,
          d = t.pathOffset,
          f = void 0 === d ? 0 : d;
        Dc(e, Fa(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, r), e.attrs = e.style, e.style = {};
        var p = e.attrs,
          h = e.style,
          m = e.dimensions;
        p.transform && (m && (h.transform = p.transform), delete p.transform), m && (void 0 !== i || void 0 !== l || h.transform) && (h.transformOrigin = function (e, t, n) {
          var r = Xc(t, e.x, e.width),
            o = Xc(n, e.y, e.height);
          return "".concat(r, " ").concat(o)
        }(m, void 0 !== i ? i : .5, void 0 !== l ? l : .5)), void 0 !== o && (p.x = o), void 0 !== a && (p.y = a), void 0 !== u && function (e, t, n, r, o) {
          void 0 === n && (n = 1), void 0 === r && (r = 0), void 0 === o && (o = !0), e.pathLength = 1;
          var a = o ? Qc : Gc;
          e[a.offset] = ul.transform(-r);
          var i = ul.transform(t),
            l = ul.transform(n);
          e[a.array] = "".concat(i, " ").concat(l)
        }(p, u, c, f, !1)
      }
      var Zc = function () {
        return La(La({}, {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {}
        }), {
          attrs: {}
        })
      };

      function Jc(t, n) {
        var r = (0, e.useMemo)((function () {
          var e = Zc();
          return Kc(e, n, {
            enableHardwareAcceleration: !1
          }, t.transformTemplate), La(La({}, e.attrs), {
            style: La({}, e.style)
          })
        }), [n]);
        if (t.style) {
          var o = {};
          Vc(o, t.style, t), r.style = La(La({}, o), r.style)
        }
        return r
      }

      function ed(t) {
        void 0 === t && (t = !1);
        return function (n, r, o, a, i, l) {
          var u = i.latestValues,
            s = (jc(n) ? Jc : Uc)(r, u, l),
            c = function (e, t, n) {
              var r = {};
              for (var o in e)(Yc(o) || !0 === n && $c(o) || !t && !$c(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
              return r
            }(r, "string" === typeof n, t),
            d = La(La(La({}, c), s), {
              ref: a
            });
          return o && (d["data-projection-id"] = o), (0, e.createElement)(n, d)
        }
      }
      var td = /([a-z])([A-Z])/g,
        nd = function (e) {
          return e.replace(td, "$1-$2").toLowerCase()
        };

      function rd(e, t, n, r) {
        var o = t.style,
          a = t.vars;
        for (var i in Object.assign(e.style, o, r && r.getProjectionStyles(n)), a) e.style.setProperty(i, a[i])
      }
      var od = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

      function ad(e, t, n, r) {
        for (var o in rd(e, t, void 0, r), t.attrs) e.setAttribute(od.has(o) ? o : nd(o), t.attrs[o])
      }

      function id(e) {
        var t = e.style,
          n = {};
        for (var r in t)(Oi(t[r]) || Lc(r, e)) && (n[r] = t[r]);
        return n
      }

      function ld(e) {
        var t = id(e);
        for (var n in e) {
          if (Oi(e[n])) t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n]
        }
        return t
      }

      function ud(e) {
        return "object" === typeof e && "function" === typeof e.start
      }

      function sd(e, t, n, r) {
        var o = e.scrapeMotionValuesFromProps,
          a = e.createRenderState,
          i = e.onMount,
          l = {
            latestValues: dd(t, n, r, o),
            renderState: a()
          };
        return i && (l.mount = function (e) {
          return i(t, e, l)
        }), l
      }
      var cd = function (t) {
        return function (n, r) {
          var o = (0, e.useContext)(qa),
            a = (0, e.useContext)(_a);
          return r ? sd(t, n, o, a) : Pa((function () {
            return sd(t, n, o, a)
          }))
        }
      };

      function dd(e, t, n, r) {
        var o = {},
          a = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          i = r(e);
        for (var l in i) o[l] = lc(i[l]);
        var u = e.initial,
          s = e.animate,
          c = oi(e),
          d = ai(e);
        t && d && !c && !1 !== e.inherit && (null !== u && void 0 !== u || (u = t.initial), null !== s && void 0 !== s || (s = t.animate));
        var f = a || !1 === u,
          p = f ? s : u;
        p && "boolean" !== typeof p && !ud(p) && (Array.isArray(p) ? p : [p]).forEach((function (t) {
          var n = ni(e, t);
          if (n) {
            var r = n.transitionEnd;
            n.transition;
            var a = Fa(n, ["transitionEnd", "transition"]);
            for (var i in a) {
              var l = a[i];
              if (Array.isArray(l)) l = l[f ? l.length - 1 : 0];
              null !== l && (o[i] = l)
            }
            for (var i in r) o[i] = r[i]
          }
        }));
        return o
      }
      var fd, pd = {
          useVisualState: cd({
            scrapeMotionValuesFromProps: ld,
            createRenderState: Zc,
            onMount: function (e, t, n) {
              var r = n.renderState,
                o = n.latestValues;
              try {
                r.dimensions = "function" === typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
              } catch (a) {
                r.dimensions = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                }
              }
              Kc(r, o, {
                enableHardwareAcceleration: !1
              }, e.transformTemplate), ad(t, r)
            }
          })
        },
        hd = {
          useVisualState: cd({
            scrapeMotionValuesFromProps: id,
            createRenderState: Nc
          })
        };

      function md(e, t, n, r) {
        return void 0 === r && (r = {
            passive: !0
          }), e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n)
          }
      }

      function vd(t, n, r, o) {
        (0, e.useEffect)((function () {
          var e = t.current;
          if (r && e) return md(e, n, r, o)
        }), [t, n, r, o])
      }

      function gd(e) {
        return "undefined" !== typeof PointerEvent && e instanceof PointerEvent ? !("mouse" !== e.pointerType) : e instanceof MouseEvent
      }

      function yd(e) {
        return !!e.touches
      }! function (e) {
        e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit"
      }(fd || (fd = {}));
      var bd = {
        pageX: 0,
        pageY: 0
      };

      function xd(e, t) {
        void 0 === t && (t = "page");
        var n = e.touches[0] || e.changedTouches[0] || bd;
        return {
          x: n[t + "X"],
          y: n[t + "Y"]
        }
      }

      function wd(e, t) {
        return void 0 === t && (t = "page"), {
          x: e[t + "X"],
          y: e[t + "Y"]
        }
      }

      function kd(e, t) {
        return void 0 === t && (t = "page"), {
          point: yd(e) ? xd(e, t) : wd(e, t)
        }
      }
      var Sd = function (e, t) {
          void 0 === t && (t = !1);
          var n, r = function (t) {
            return e(t, kd(t))
          };
          return t ? (n = r, function (e) {
            var t = e instanceof MouseEvent;
            (!t || t && 0 === e.button) && n(e)
          }) : r
        },
        Ed = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        Cd = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function _d(e) {
        return Ya && null === window.onpointerdown ? e : Ya && null === window.ontouchstart ? Cd[e] : Ya && null === window.onmousedown ? Ed[e] : e
      }

      function Pd(e, t, n, r) {
        return md(e, _d(t), Sd(n, "pointerdown" === t), r)
      }

      function Td(e, t, n, r) {
        return vd(e, _d(t), n && Sd(n, "pointerdown" === t), r)
      }

      function Ad(e) {
        var t = null;
        return function () {
          return null === t && (t = e, function () {
            t = null
          })
        }
      }
      var Rd = Ad("dragHorizontal"),
        zd = Ad("dragVertical");

      function Od(e) {
        var t = !1;
        if ("y" === e) t = zd();
        else if ("x" === e) t = Rd();
        else {
          var n = Rd(),
            r = zd();
          n && r ? t = function () {
            n(), r()
          } : (n && n(), r && r())
        }
        return t
      }

      function Md() {
        var e = Od(!0);
        return !e || (e(), !1)
      }

      function jd(e, t, n) {
        return function (r, o) {
          var a;
          gd(r) && !Md() && (null === (a = e.animationState) || void 0 === a || a.setActive(fd.Hover, t), null === n || void 0 === n || n(r, o))
        }
      }
      var Ld = function e(t, n) {
        return !!n && (t === n || e(t, n.parentElement))
      };

      function Fd(t) {
        return (0, e.useEffect)((function () {
          return function () {
            return t()
          }
        }), [])
      }
      new Set;
      var Id = new WeakMap,
        Bd = new WeakMap,
        Dd = function (e) {
          var t;
          null === (t = Id.get(e.target)) || void 0 === t || t(e)
        },
        Nd = function (e) {
          e.forEach(Dd)
        };

      function Vd(e, t, n) {
        var r = function (e) {
          var t = e.root,
            n = Fa(e, ["root"]),
            r = t || document;
          Bd.has(r) || Bd.set(r, {});
          var o = Bd.get(r),
            a = JSON.stringify(n);
          return o[a] || (o[a] = new IntersectionObserver(Nd, La({
            root: t
          }, n))), o[a]
        }(t);
        return Id.set(e, n), r.observe(e),
          function () {
            Id.delete(e), r.unobserve(e)
          }
      }
      var Wd = {
        some: 0,
        all: 1
      };

      function Ud(t, n, r, o) {
        var a = o.root,
          i = o.margin,
          l = o.amount,
          u = void 0 === l ? "some" : l,
          s = o.once;
        (0, e.useEffect)((function () {
          if (t) {
            var e = {
              root: null === a || void 0 === a ? void 0 : a.current,
              rootMargin: i,
              threshold: "number" === typeof u ? u : Wd[u]
            };
            return Vd(r.getInstance(), e, (function (e) {
              var t, o = e.isIntersecting;
              if (n.isInView !== o && (n.isInView = o, !s || o || !n.hasEnteredView)) {
                o && (n.hasEnteredView = !0), null === (t = r.animationState) || void 0 === t || t.setActive(fd.InView, o);
                var a = r.getProps(),
                  i = o ? a.onViewportEnter : a.onViewportLeave;
                null === i || void 0 === i || i(e)
              }
            }))
          }
        }), [t, a, i, u])
      }

      function Hd(t, n, r, o) {
        var a = o.fallback,
          i = void 0 === a || a;
        (0, e.useEffect)((function () {
          t && i && requestAnimationFrame((function () {
            var e;
            n.hasEnteredView = !0;
            var t = r.getProps().onViewportEnter;
            null === t || void 0 === t || t(null), null === (e = r.animationState) || void 0 === e || e.setActive(fd.InView, !0)
          }))
        }), [t])
      }
      var $d = function (e) {
          return function (t) {
            return e(t), null
          }
        },
        qd = {
          inView: $d((function (t) {
            var n = t.visualElement,
              r = t.whileInView,
              o = t.onViewportEnter,
              a = t.onViewportLeave,
              i = t.viewport,
              l = void 0 === i ? {} : i,
              u = (0, e.useRef)({
                hasEnteredView: !1,
                isInView: !1
              }),
              s = Boolean(r || o || a);
            l.once && u.current.hasEnteredView && (s = !1), ("undefined" === typeof IntersectionObserver ? Hd : Ud)(s, u.current, n, l)
          })),
          tap: $d((function (t) {
            var n = t.onTap,
              r = t.onTapStart,
              o = t.onTapCancel,
              a = t.whileTap,
              i = t.visualElement,
              l = n || r || o || a,
              u = (0, e.useRef)(!1),
              s = (0, e.useRef)(null),
              c = {
                passive: !(r || n || o || m)
              };

            function d() {
              var e;
              null === (e = s.current) || void 0 === e || e.call(s), s.current = null
            }

            function f() {
              var e;
              return d(), u.current = !1, null === (e = i.animationState) || void 0 === e || e.setActive(fd.Tap, !1), !Md()
            }

            function p(e, t) {
              f() && (Ld(i.getInstance(), e.target) ? null === n || void 0 === n || n(e, t) : null === o || void 0 === o || o(e, t))
            }

            function h(e, t) {
              f() && (null === o || void 0 === o || o(e, t))
            }

            function m(e, t) {
              var n;
              d(), u.current || (u.current = !0, s.current = Rl(Pd(window, "pointerup", p, c), Pd(window, "pointercancel", h, c)), null === (n = i.animationState) || void 0 === n || n.setActive(fd.Tap, !0), null === r || void 0 === r || r(e, t))
            }
            Td(i, "pointerdown", l ? m : void 0, c), Fd(d)
          })),
          focus: $d((function (e) {
            var t = e.whileFocus,
              n = e.visualElement;
            vd(n, "focus", t ? function () {
              var e;
              null === (e = n.animationState) || void 0 === e || e.setActive(fd.Focus, !0)
            } : void 0), vd(n, "blur", t ? function () {
              var e;
              null === (e = n.animationState) || void 0 === e || e.setActive(fd.Focus, !1)
            } : void 0)
          })),
          hover: $d((function (e) {
            var t = e.onHoverStart,
              n = e.onHoverEnd,
              r = e.whileHover,
              o = e.visualElement;
            Td(o, "pointerenter", t || r ? jd(o, !0, t) : void 0, {
              passive: !t
            }), Td(o, "pointerleave", n || r ? jd(o, !1, n) : void 0, {
              passive: !n
            })
          }))
        };

      function Yd(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++)
          if (t[r] !== e[r]) return !1;
        return !0
      }
      var Xd = function (e) {
          return /^0[^.\s]+$/.test(e)
        },
        Qd = function (e) {
          return function (t) {
            return t.test(e)
          }
        },
        Gd = [Qi, ul, ll, il, cl, sl, {
          test: function (e) {
            return "auto" === e
          },
          parse: function (e) {
            return e
          }
        }],
        Kd = function (e) {
          return Gd.find(Qd(e))
        },
        Zd = Da(Da([], Ba(Gd), !1), [xl, Pl], !1),
        Jd = function (e) {
          return Zd.find(Qd(e))
        };

      function ef(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, zi(n))
      }

      function tf(e, t) {
        var n = ri(e, t),
          r = n ? e.makeTargetAnimatable(n, !1) : {},
          o = r.transitionEnd,
          a = void 0 === o ? {} : o;
        r.transition;
        var i = Fa(r, ["transitionEnd", "transition"]);
        for (var l in i = La(La({}, i), a)) {
          ef(e, l, Ju(i[l]))
        }
      }

      function nf(e, t) {
        if (t) return (t[e] || t.default || t).from
      }

      function rf(e, t, n) {
        var r;
        void 0 === n && (n = {});
        var o = ri(e, t, n.custom),
          a = (o || {}).transition,
          i = void 0 === a ? e.getDefaultTransition() || {} : a;
        n.transitionOverride && (i = n.transitionOverride);
        var l = o ? function () {
            return of(e, o, n)
          } : function () {
            return Promise.resolve()
          },
          u = (null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size) ? function (r) {
            void 0 === r && (r = 0);
            var o = i.delayChildren,
              a = void 0 === o ? 0 : o,
              l = i.staggerChildren,
              u = i.staggerDirection;
            return function (e, t, n, r, o, a) {
              void 0 === n && (n = 0);
              void 0 === r && (r = 0);
              void 0 === o && (o = 1);
              var i = [],
                l = (e.variantChildren.size - 1) * r,
                u = 1 === o ? function (e) {
                  return void 0 === e && (e = 0), e * r
                } : function (e) {
                  return void 0 === e && (e = 0), l - e * r
                };
              return Array.from(e.variantChildren).sort(af).forEach((function (e, r) {
                i.push(rf(e, t, La(La({}, a), {
                  delay: n + u(r)
                })).then((function () {
                  return e.notifyAnimationComplete(t)
                })))
              })), Promise.all(i)
            }(e, t, a + r, l, u, n)
          } : function () {
            return Promise.resolve()
          },
          s = i.when;
        if (s) {
          var c = Ba("beforeChildren" === s ? [l, u] : [u, l], 2),
            d = c[0],
            f = c[1];
          return d().then(f)
        }
        return Promise.all([l(), u(n.delay)])
      }

      function of (e, t, n) {
        var r, o = void 0 === n ? {} : n,
          a = o.delay,
          i = void 0 === a ? 0 : a,
          l = o.transitionOverride,
          u = o.type,
          s = e.makeTargetAnimatable(t),
          c = s.transition,
          d = void 0 === c ? e.getDefaultTransition() : c,
          f = s.transitionEnd,
          p = Fa(s, ["transition", "transitionEnd"]);
        l && (d = l);
        var h = [],
          m = u && (null === (r = e.animationState) || void 0 === r ? void 0 : r.getState()[u]);
        for (var v in p) {
          var g = e.getValue(v),
            y = p[v];
          if (!(!g || void 0 === y || m && lf(m, v))) {
            var b = La({
              delay: i
            }, d);
            e.shouldReduceMotion && nc(v) && (b = La(La({}, b), {
              type: !1,
              delay: 0
            }));
            var x = as(v, g, y, b);
            h.push(x)
          }
        }
        return Promise.all(h).then((function () {
          f && tf(e, f)
        }))
      }

      function af(e, t) {
        return e.sortNodePosition(t)
      }

      function lf(e, t) {
        var n = e.protectedKeys,
          r = e.needsAnimating,
          o = n.hasOwnProperty(t) && !0 !== r[t];
        return r[t] = !1, o
      }
      var uf = [fd.Animate, fd.InView, fd.Focus, fd.Hover, fd.Tap, fd.Drag, fd.Exit],
        sf = Da([], Ba(uf), !1).reverse(),
        cf = uf.length;

      function df(e) {
        return function (t) {
          return Promise.all(t.map((function (t) {
            var n = t.animation,
              r = t.options;
            return function (e, t, n) {
              var r;
              if (void 0 === n && (n = {}), e.notifyAnimationStart(t), Array.isArray(t)) {
                var o = t.map((function (t) {
                  return rf(e, t, n)
                }));
                r = Promise.all(o)
              } else if ("string" === typeof t) r = rf(e, t, n);
              else {
                var a = "function" === typeof t ? ri(e, t, n.custom) : t;
                r = of (e, a, n)
              }
              return r.then((function () {
                return e.notifyAnimationComplete(t)
              }))
            }(e, n, r)
          })))
        }
      }

      function ff(e) {
        var t = df(e),
          n = function () {
            var e;
            return (e = {})[fd.Animate] = pf(!0), e[fd.InView] = pf(), e[fd.Hover] = pf(), e[fd.Tap] = pf(), e[fd.Drag] = pf(), e[fd.Focus] = pf(), e[fd.Exit] = pf(), e
          }(),
          r = {},
          o = !0,
          a = function (t, n) {
            var r = ri(e, n);
            if (r) {
              r.transition;
              var o = r.transitionEnd,
                a = Fa(r, ["transition", "transitionEnd"]);
              t = La(La(La({}, t), a), o)
            }
            return t
          };

        function i(i, l) {
          for (var u, s = e.getProps(), c = e.getVariantContext(!0) || {}, d = [], f = new Set, p = {}, h = 1 / 0, m = function (t) {
              var r = sf[t],
                m = n[r],
                v = null !== (u = s[r]) && void 0 !== u ? u : c[r],
                g = ti(v),
                y = r === l ? m.isActive : null;
              !1 === y && (h = t);
              var b = v === c[r] && v !== s[r] && g;
              if (b && o && e.manuallyAnimateOnMount && (b = !1), m.protectedKeys = La({}, p), !m.isActive && null === y || !v && !m.prevProp || ud(v) || "boolean" === typeof v) return "continue";
              var x = function (e, t) {
                  if ("string" === typeof t) return t !== e;
                  if (ei(t)) return !Yd(t, e);
                  return !1
                }(m.prevProp, v),
                w = x || r === l && m.isActive && !b && g || t > h && g,
                k = Array.isArray(v) ? v : [v],
                S = k.reduce(a, {});
              !1 === y && (S = {});
              var E = m.prevResolvedValues,
                C = void 0 === E ? {} : E,
                _ = La(La({}, C), S),
                P = function (e) {
                  w = !0, f.delete(e), m.needsAnimating[e] = !0
                };
              for (var T in _) {
                var A = S[T],
                  R = C[T];
                p.hasOwnProperty(T) || (A !== R ? Iu(A) && Iu(R) ? !Yd(A, R) || x ? P(T) : m.protectedKeys[T] = !0 : void 0 !== A ? P(T) : f.add(T) : void 0 !== A && f.has(T) ? P(T) : m.protectedKeys[T] = !0)
              }
              m.prevProp = v, m.prevResolvedValues = S, m.isActive && (p = La(La({}, p), S)), o && e.blockInitialAnimation && (w = !1), w && !b && d.push.apply(d, Da([], Ba(k.map((function (e) {
                return {
                  animation: e,
                  options: La({
                    type: r
                  }, i)
                }
              }))), !1))
            }, v = 0; v < cf; v++) m(v);
          if (r = La({}, p), f.size) {
            var g = {};
            f.forEach((function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (g[t] = n)
            })), d.push({
              animation: g
            })
          }
          var y = Boolean(d.length);
          return o && !1 === s.initial && !e.manuallyAnimateOnMount && (y = !1), o = !1, y ? t(d) : Promise.resolve()
        }
        return {
          isAnimated: function (e) {
            return void 0 !== r[e]
          },
          animateChanges: i,
          setActive: function (t, r, o) {
            var a;
            if (n[t].isActive === r) return Promise.resolve();
            null === (a = e.variantChildren) || void 0 === a || a.forEach((function (e) {
              var n;
              return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
            })), n[t].isActive = r;
            var l = i(o, t);
            for (var u in n) n[u].protectedKeys = {};
            return l
          },
          setAnimateFunction: function (n) {
            t = n(e)
          },
          getState: function () {
            return n
          }
        }
      }

      function pf(e) {
        return void 0 === e && (e = !1), {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      var hf = {
          animation: $d((function (t) {
            var n = t.visualElement,
              r = t.animate;
            n.animationState || (n.animationState = ff(n)), ud(r) && (0, e.useEffect)((function () {
              return r.subscribe(n)
            }), [r])
          })),
          exit: $d((function (t) {
            var n = t.custom,
              r = t.visualElement,
              o = Ba(za(), 2),
              a = o[0],
              i = o[1],
              l = (0, e.useContext)(_a);
            (0, e.useEffect)((function () {
              var e, t;
              r.isPresent = a;
              var o = null === (e = r.animationState) || void 0 === e ? void 0 : e.setActive(fd.Exit, !a, {
                custom: null !== (t = null === l || void 0 === l ? void 0 : l.custom) && void 0 !== t ? t : n
              });
              !a && (null === o || void 0 === o || o.then(i))
            }), [a])
          }))
        },
        mf = function () {
          function e(e, t, n) {
            var r = this,
              o = (void 0 === n ? {} : n).transformPagePoint;
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function () {
                if (r.lastMoveEvent && r.lastMoveEventInfo) {
                  var e = yf(r.lastMoveEventInfo, r.history),
                    t = null !== r.startEvent,
                    n = Os(e.offset, {
                      x: 0,
                      y: 0
                    }) >= 3;
                  if (t || n) {
                    var o = e.point,
                      a = Si().timestamp;
                    r.history.push(La(La({}, o), {
                      timestamp: a
                    }));
                    var i = r.handlers,
                      l = i.onStart,
                      u = i.onMove;
                    t || (l && l(r.lastMoveEvent, e), r.startEvent = r.lastMoveEvent), u && u(r.lastMoveEvent, e)
                  }
                }
              }, this.handlePointerMove = function (e, t) {
                r.lastMoveEvent = e, r.lastMoveEventInfo = vf(t, r.transformPagePoint), gd(e) && 0 === e.buttons ? r.handlePointerUp(e, t) : Ei.update(r.updatePoint, !0)
              }, this.handlePointerUp = function (e, t) {
                r.end();
                var n = r.handlers,
                  o = n.onEnd,
                  a = n.onSessionEnd,
                  i = yf(vf(t, r.transformPagePoint), r.history);
                r.startEvent && o && o(e, i), a && a(e, i)
              }, !(yd(e) && e.touches.length > 1)) {
              this.handlers = t, this.transformPagePoint = o;
              var a = vf(kd(e), this.transformPagePoint),
                i = a.point,
                l = Si().timestamp;
              this.history = [La(La({}, i), {
                timestamp: l
              })];
              var u = t.onSessionStart;
              u && u(e, yf(a, this.history)), this.removeListeners = Rl(Pd(window, "pointermove", this.handlePointerMove), Pd(window, "pointerup", this.handlePointerUp), Pd(window, "pointercancel", this.handlePointerUp))
            }
          }
          return e.prototype.updateHandlers = function (e) {
            this.handlers = e
          }, e.prototype.end = function () {
            this.removeListeners && this.removeListeners(), yi.update(this.updatePoint)
          }, e
        }();

      function vf(e, t) {
        return t ? {
          point: t(e.point)
        } : e
      }

      function gf(e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y
        }
      }

      function yf(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: gf(n, xf(t)),
          offset: gf(n, bf(t)),
          velocity: wf(t, .1)
        }
      }

      function bf(e) {
        return e[0]
      }

      function xf(e) {
        return e[e.length - 1]
      }

      function wf(e, t) {
        if (e.length < 2) return {
          x: 0,
          y: 0
        };
        for (var n = e.length - 1, r = null, o = xf(e); n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > _u(t)));) n--;
        if (!r) return {
          x: 0,
          y: 0
        };
        var a = (o.timestamp - r.timestamp) / 1e3;
        if (0 === a) return {
          x: 0,
          y: 0
        };
        var i = {
          x: (o.x - r.x) / a,
          y: (o.y - r.y) / a
        };
        return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i
      }

      function kf(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
        }
      }

      function Sf(e, t) {
        var n, r = t.min - e.min,
          o = t.max - e.max;
        return t.max - t.min < e.max - e.min && (r = (n = Ba([o, r], 2))[0], o = n[1]), {
          min: r,
          max: o
        }
      }
      var Ef = .35;

      function Cf(e, t, n) {
        return {
          min: _f(e, t),
          max: _f(e, n)
        }
      }

      function _f(e, t) {
        var n;
        return "number" === typeof e ? e : null !== (n = e[t]) && void 0 !== n ? n : 0
      }

      function Pf(e) {
        var t = e.top;
        return {
          x: {
            min: e.left,
            max: e.right
          },
          y: {
            min: t,
            max: e.bottom
          }
        }
      }

      function Tf(e, t) {
        return Pf(function (e, t) {
          if (!t) return e;
          var n = t({
              x: e.left,
              y: e.top
            }),
            r = t({
              x: e.right,
              y: e.bottom
            });
          return {
            top: n.y,
            left: n.x,
            bottom: r.y,
            right: r.x
          }
        }(e.getBoundingClientRect(), t))
      }
      var Af = new WeakMap,
        Rf = function () {
          function e(e) {
            this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
              x: 0,
              y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            }, this.visualElement = e
          }
          return e.prototype.start = function (e, t) {
            var n = this,
              r = (void 0 === t ? {} : t).snapToCursor,
              o = void 0 !== r && r;
            if (!1 !== this.visualElement.isPresent) {
              this.panSession = new mf(e, {
                onSessionStart: function (e) {
                  n.stopAnimation(), o && n.snapToCursor(kd(e, "page").point)
                },
                onStart: function (e, t) {
                  var r, o = n.getProps(),
                    a = o.drag,
                    i = o.dragPropagation,
                    l = o.onDragStart;
                  (!a || i || (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = Od(a), n.openGlobalLock)) && (n.isDragging = !0, n.currentDirection = null, n.resolveConstraints(), n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0, n.visualElement.projection.target = void 0), Ks((function (e) {
                    var t, r, o = n.getAxisMotionValue(e).get() || 0;
                    if (ll.test(o)) {
                      var a = null === (r = null === (t = n.visualElement.projection) || void 0 === t ? void 0 : t.layout) || void 0 === r ? void 0 : r.actual[e];
                      if (a) o = Ms(a) * (parseFloat(o) / 100)
                    }
                    n.originPoint[e] = o
                  })), null === l || void 0 === l || l(e, t), null === (r = n.visualElement.animationState) || void 0 === r || r.setActive(fd.Drag, !0))
                },
                onMove: function (e, t) {
                  var r = n.getProps(),
                    o = r.dragPropagation,
                    a = r.dragDirectionLock,
                    i = r.onDirectionLock,
                    l = r.onDrag;
                  if (o || n.openGlobalLock) {
                    var u = t.offset;
                    if (a && null === n.currentDirection) return n.currentDirection = function (e, t) {
                      void 0 === t && (t = 10);
                      var n = null;
                      Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x");
                      return n
                    }(u), void(null !== n.currentDirection && (null === i || void 0 === i || i(n.currentDirection)));
                    n.updateAxis("x", t.point, u), n.updateAxis("y", t.point, u), n.visualElement.syncRender(), null === l || void 0 === l || l(e, t)
                  }
                },
                onSessionEnd: function (e, t) {
                  return n.stop(e, t)
                }
              }, {
                transformPagePoint: this.visualElement.getTransformPagePoint()
              })
            }
          }, e.prototype.stop = function (e, t) {
            var n = this.isDragging;
            if (this.cancel(), n) {
              var r = t.velocity;
              this.startAnimation(r);
              var o = this.getProps().onDragEnd;
              null === o || void 0 === o || o(e, t)
            }
          }, e.prototype.cancel = function () {
            var e, t;
            this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (e = this.panSession) || void 0 === e || e.end(), this.panSession = void 0, !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(fd.Drag, !1)
          }, e.prototype.updateAxis = function (e, t, n) {
            var r = this.getProps().drag;
            if (n && zf(e, r, this.currentDirection)) {
              var o = this.getAxisMotionValue(e),
                a = this.originPoint[e] + n[e];
              this.constraints && this.constraints[e] && (a = function (e, t, n) {
                var r = t.min,
                  o = t.max;
                return void 0 !== r && e < r ? e = n ? Ci(r, e, n.min) : Math.max(e, r) : void 0 !== o && e > o && (e = n ? Ci(o, e, n.max) : Math.min(e, o)), e
              }(a, this.constraints[e], this.elastic[e])), o.set(a)
            }
          }, e.prototype.resolveConstraints = function () {
            var e = this,
              t = this.getProps(),
              n = t.dragConstraints,
              r = t.dragElastic,
              o = (this.visualElement.projection || {}).layout,
              a = this.constraints;
            n && Ja(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!n || !o) && function (e, t) {
              var n = t.top,
                r = t.left,
                o = t.bottom,
                a = t.right;
              return {
                x: kf(e.x, r, a),
                y: kf(e.y, n, o)
              }
            }(o.actual, n), this.elastic = function (e) {
              return void 0 === e && (e = Ef), !1 === e ? e = 0 : !0 === e && (e = Ef), {
                x: Cf(e, "left", "right"),
                y: Cf(e, "top", "bottom")
              }
            }(r), a !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Ks((function (t) {
              e.getAxisMotionValue(t) && (e.constraints[t] = function (e, t) {
                var n = {};
                return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n
              }(o.actual[t], e.constraints[t]))
            }))
          }, e.prototype.resolveRefConstraints = function () {
            var e = this.getProps(),
              t = e.dragConstraints,
              n = e.onMeasureDragConstraints;
            if (!t || !Ja(t)) return !1;
            var r = t.current,
              o = this.visualElement.projection;
            if (!o || !o.layout) return !1;
            var a = function (e, t, n) {
                var r = Tf(e, n),
                  o = t.scroll;
                return o && (Es(r.x, o.x), Es(r.y, o.y)), r
              }(r, o.root, this.visualElement.getTransformPagePoint()),
              i = function (e, t) {
                return {
                  x: Sf(e.x, t.x),
                  y: Sf(e.y, t.y)
                }
              }(o.layout.actual, a);
            if (n) {
              var l = n(function (e) {
                var t = e.x,
                  n = e.y;
                return {
                  top: n.min,
                  right: t.max,
                  bottom: n.max,
                  left: t.min
                }
              }(i));
              this.hasMutatedConstraints = !!l, l && (i = Pf(l))
            }
            return i
          }, e.prototype.startAnimation = function (e) {
            var t = this,
              n = this.getProps(),
              r = n.drag,
              o = n.dragMomentum,
              a = n.dragElastic,
              i = n.dragTransition,
              l = n.dragSnapToOrigin,
              u = n.onDragTransitionEnd,
              s = this.constraints || {},
              c = Ks((function (n) {
                var u;
                if (zf(n, r, t.currentDirection)) {
                  var c = null !== (u = null === s || void 0 === s ? void 0 : s[n]) && void 0 !== u ? u : {};
                  l && (c = {
                    min: 0,
                    max: 0
                  });
                  var d = a ? 200 : 1e6,
                    f = a ? 40 : 1e7,
                    p = La(La({
                      type: "inertia",
                      velocity: o ? e[n] : 0,
                      bounceStiffness: d,
                      bounceDamping: f,
                      timeConstant: 750,
                      restDelta: 1,
                      restSpeed: 10
                    }, i), c);
                  return t.startAxisValueAnimation(n, p)
                }
              }));
            return Promise.all(c).then(u)
          }, e.prototype.startAxisValueAnimation = function (e, t) {
            return as(e, this.getAxisMotionValue(e), 0, t)
          }, e.prototype.stopAnimation = function () {
            var e = this;
            Ks((function (t) {
              return e.getAxisMotionValue(t).stop()
            }))
          }, e.prototype.getAxisMotionValue = function (e) {
            var t, n, r = "_drag" + e.toUpperCase(),
              o = this.visualElement.getProps()[r];
            return o || this.visualElement.getValue(e, null !== (n = null === (t = this.visualElement.getProps().initial) || void 0 === t ? void 0 : t[e]) && void 0 !== n ? n : 0)
          }, e.prototype.snapToCursor = function (e) {
            var t = this;
            Ks((function (n) {
              if (zf(n, t.getProps().drag, t.currentDirection)) {
                var r = t.visualElement.projection,
                  o = t.getAxisMotionValue(n);
                if (r && r.layout) {
                  var a = r.layout.actual[n],
                    i = a.min,
                    l = a.max;
                  o.set(e[n] - Ci(i, l, .5))
                }
              }
            }))
          }, e.prototype.scalePositionWithinConstraints = function () {
            var e, t = this,
              n = this.getProps(),
              r = n.drag,
              o = n.dragConstraints,
              a = this.visualElement.projection;
            if (Ja(o) && a && this.constraints) {
              this.stopAnimation();
              var i = {
                x: 0,
                y: 0
              };
              Ks((function (e) {
                var n = t.getAxisMotionValue(e);
                if (n) {
                  var r = n.get();
                  i[e] = function (e, t) {
                    var n = .5,
                      r = Ms(e),
                      o = Ms(t);
                    return o > r ? n = Wi(t.min, t.max - r, e.min) : r > o && (n = Wi(e.min, e.max - o, t.min)), Mi(0, 1, n)
                  }({
                    min: r,
                    max: r
                  }, t.constraints[e])
                }
              }));
              var l = this.visualElement.getProps().transformTemplate;
              this.visualElement.getInstance().style.transform = l ? l({}, "") : "none", null === (e = a.root) || void 0 === e || e.updateScroll(), a.updateLayout(), this.resolveConstraints(), Ks((function (e) {
                if (zf(e, r, null)) {
                  var n = t.getAxisMotionValue(e),
                    o = t.constraints[e],
                    a = o.min,
                    l = o.max;
                  n.set(Ci(a, l, i[e]))
                }
              }))
            }
          }, e.prototype.addListeners = function () {
            var e, t = this;
            Af.set(this.visualElement, this);
            var n = Pd(this.visualElement.getInstance(), "pointerdown", (function (e) {
                var n = t.getProps(),
                  r = n.drag,
                  o = n.dragListener;
                r && (void 0 === o || o) && t.start(e)
              })),
              r = function () {
                Ja(t.getProps().dragConstraints) && (t.constraints = t.resolveRefConstraints())
              },
              o = this.visualElement.projection,
              a = o.addEventListener("measure", r);
            o && !o.layout && (null === (e = o.root) || void 0 === e || e.updateScroll(), o.updateLayout()), r();
            var i = md(window, "resize", (function () {
              return t.scalePositionWithinConstraints()
            }));
            return o.addEventListener("didUpdate", (function (e) {
                var n = e.delta,
                  r = e.hasLayoutChanged;
                t.isDragging && r && (Ks((function (e) {
                  var r = t.getAxisMotionValue(e);
                  r && (t.originPoint[e] += n[e].translate, r.set(r.get() + n[e].translate))
                })), t.visualElement.syncRender())
              })),
              function () {
                i(), n(), a()
              }
          }, e.prototype.getProps = function () {
            var e = this.visualElement.getProps(),
              t = e.drag,
              n = void 0 !== t && t,
              r = e.dragDirectionLock,
              o = void 0 !== r && r,
              a = e.dragPropagation,
              i = void 0 !== a && a,
              l = e.dragConstraints,
              u = void 0 !== l && l,
              s = e.dragElastic,
              c = void 0 === s ? Ef : s,
              d = e.dragMomentum,
              f = void 0 === d || d;
            return La(La({}, e), {
              drag: n,
              dragDirectionLock: o,
              dragPropagation: i,
              dragConstraints: u,
              dragElastic: c,
              dragMomentum: f
            })
          }, e
        }();

      function zf(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e)
      }
      var Of = {
          pan: $d((function (t) {
            var n = t.onPan,
              r = t.onPanStart,
              o = t.onPanEnd,
              a = t.onPanSessionStart,
              i = t.visualElement,
              l = n || r || o || a,
              u = (0, e.useRef)(null),
              s = (0, e.useContext)($a).transformPagePoint,
              c = {
                onSessionStart: a,
                onStart: r,
                onMove: n,
                onEnd: function (e, t) {
                  u.current = null, o && o(e, t)
                }
              };
            (0, e.useEffect)((function () {
              null !== u.current && u.current.updateHandlers(c)
            })), Td(i, "pointerdown", l && function (e) {
              u.current = new mf(e, c, {
                transformPagePoint: s
              })
            }), Fd((function () {
              return u.current && u.current.end()
            }))
          })),
          drag: $d((function (t) {
            var n = t.dragControls,
              r = t.visualElement,
              o = Pa((function () {
                return new Rf(r)
              }));
            (0, e.useEffect)((function () {
              return n && n.subscribe(o)
            }), [o, n]), (0, e.useEffect)((function () {
              return o.addListeners()
            }), [o])
          }))
        },
        Mf = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"];
      var jf = function (e) {
          var t = e.treeType,
            n = void 0 === t ? "" : t,
            r = e.build,
            o = e.getBaseTarget,
            a = e.makeTargetAnimatable,
            i = e.measureViewportBox,
            l = e.render,
            u = e.readValueFromInstance,
            s = e.removeValueFromRenderState,
            c = e.sortNodePosition,
            d = e.scrapeMotionValuesFromProps;
          return function (e, t) {
            var f = e.parent,
              p = e.props,
              h = e.presenceId,
              m = e.blockInitialAnimation,
              v = e.visualState,
              g = e.shouldReduceMotion;
            void 0 === t && (t = {});
            var y, b, x = !1,
              w = v.latestValues,
              k = v.renderState,
              S = function () {
                var e = Mf.map((function () {
                    return new Ai
                  })),
                  t = {},
                  n = {
                    clearAllListeners: function () {
                      return e.forEach((function (e) {
                        return e.clear()
                      }))
                    },
                    updatePropListeners: function (e) {
                      Mf.forEach((function (r) {
                        var o, a = "on" + r,
                          i = e[a];
                        null === (o = t[r]) || void 0 === o || o.call(t), i && (t[r] = n[a](i))
                      }))
                    }
                  };
                return e.forEach((function (e, t) {
                  n["on" + Mf[t]] = function (t) {
                    return e.add(t)
                  }, n["notify" + Mf[t]] = function () {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    return e.notify.apply(e, Da([], Ba(t), !1))
                  }
                })), n
              }(),
              E = new Map,
              C = new Map,
              _ = {},
              P = La({}, w);

            function T() {
              y && x && (A(), l(y, k, p.style, I.projection))
            }

            function A() {
              r(I, k, w, t, p)
            }

            function R() {
              S.notifyUpdate(w)
            }

            function z(e, t) {
              var n = t.onChange((function (t) {
                  w[e] = t, p.onUpdate && Ei.update(R, !1, !0)
                })),
                r = t.onRenderRequest(I.scheduleRender);
              C.set(e, (function () {
                n(), r()
              }))
            }
            var O = d(p);
            for (var M in O) {
              var j = O[M];
              void 0 !== w[M] && Oi(j) && j.set(w[M], !1)
            }
            var L = oi(p),
              F = ai(p),
              I = La(La({
                treeType: n,
                current: null,
                depth: f ? f.depth + 1 : 0,
                parent: f,
                children: new Set,
                presenceId: h,
                shouldReduceMotion: g,
                variantChildren: F ? new Set : void 0,
                isVisible: void 0,
                manuallyAnimateOnMount: Boolean(null === f || void 0 === f ? void 0 : f.isMounted()),
                blockInitialAnimation: m,
                isMounted: function () {
                  return Boolean(y)
                },
                mount: function (e) {
                  x = !0, y = I.current = e, I.projection && I.projection.mount(e), F && f && !L && (b = null === f || void 0 === f ? void 0 : f.addVariantChild(I)), E.forEach((function (e, t) {
                    return z(t, e)
                  })), null === f || void 0 === f || f.children.add(I), I.setProps(p)
                },
                unmount: function () {
                  var e;
                  null === (e = I.projection) || void 0 === e || e.unmount(), yi.update(R), yi.render(T), C.forEach((function (e) {
                    return e()
                  })), null === b || void 0 === b || b(), null === f || void 0 === f || f.children.delete(I), S.clearAllListeners(), y = void 0, x = !1
                },
                addVariantChild: function (e) {
                  var t, n = I.getClosestVariantNode();
                  if (n) return null === (t = n.variantChildren) || void 0 === t || t.add(e),
                    function () {
                      return n.variantChildren.delete(e)
                    }
                },
                sortNodePosition: function (e) {
                  return c && n === e.treeType ? c(I.getInstance(), e.getInstance()) : 0
                },
                getClosestVariantNode: function () {
                  return F ? I : null === f || void 0 === f ? void 0 : f.getClosestVariantNode()
                },
                getLayoutId: function () {
                  return p.layoutId
                },
                getInstance: function () {
                  return y
                },
                getStaticValue: function (e) {
                  return w[e]
                },
                setStaticValue: function (e, t) {
                  return w[e] = t
                },
                getLatestValues: function () {
                  return w
                },
                setVisibility: function (e) {
                  I.isVisible !== e && (I.isVisible = e, I.scheduleRender())
                },
                makeTargetAnimatable: function (e, t) {
                  return void 0 === t && (t = !0), a(I, e, p, t)
                },
                measureViewportBox: function () {
                  return i(y, p)
                },
                addValue: function (e, t) {
                  I.hasValue(e) && I.removeValue(e), E.set(e, t), w[e] = t.get(), z(e, t)
                },
                removeValue: function (e) {
                  var t;
                  E.delete(e), null === (t = C.get(e)) || void 0 === t || t(), C.delete(e), delete w[e], s(e, k)
                },
                hasValue: function (e) {
                  return E.has(e)
                },
                getValue: function (e, t) {
                  var n = E.get(e);
                  return void 0 === n && void 0 !== t && (n = zi(t), I.addValue(e, n)), n
                },
                forEachValue: function (e) {
                  return E.forEach(e)
                },
                readValue: function (e) {
                  var n;
                  return null !== (n = w[e]) && void 0 !== n ? n : u(y, e, t)
                },
                setBaseTarget: function (e, t) {
                  P[e] = t
                },
                getBaseTarget: function (e) {
                  if (o) {
                    var t = o(p, e);
                    if (void 0 !== t && !Oi(t)) return t
                  }
                  return P[e]
                }
              }, S), {
                build: function () {
                  return A(), k
                },
                scheduleRender: function () {
                  Ei.render(T, !1, !0)
                },
                syncRender: T,
                setProps: function (e) {
                  (e.transformTemplate || p.transformTemplate) && I.scheduleRender(), p = e, S.updatePropListeners(e), _ = function (e, t, n) {
                    var r;
                    for (var o in t) {
                      var a = t[o],
                        i = n[o];
                      if (Oi(a)) e.addValue(o, a);
                      else if (Oi(i)) e.addValue(o, zi(a));
                      else if (i !== a)
                        if (e.hasValue(o)) {
                          var l = e.getValue(o);
                          !l.hasAnimated && l.set(a)
                        } else e.addValue(o, zi(null !== (r = e.getStaticValue(o)) && void 0 !== r ? r : a))
                    }
                    for (var o in n) void 0 === t[o] && e.removeValue(o);
                    return t
                  }(I, d(p), _)
                },
                getProps: function () {
                  return p
                },
                getVariant: function (e) {
                  var t;
                  return null === (t = p.variants) || void 0 === t ? void 0 : t[e]
                },
                getDefaultTransition: function () {
                  return p.transition
                },
                getTransformPagePoint: function () {
                  return p.transformPagePoint
                },
                getVariantContext: function (e) {
                  if (void 0 === e && (e = !1), e) return null === f || void 0 === f ? void 0 : f.getVariantContext();
                  if (!L) {
                    var t = (null === f || void 0 === f ? void 0 : f.getVariantContext()) || {};
                    return void 0 !== p.initial && (t.initial = p.initial), t
                  }
                  for (var n = {}, r = 0; r < Ff; r++) {
                    var o = Lf[r],
                      a = p[o];
                    (ti(a) || !1 === a) && (n[o] = a)
                  }
                  return n
                }
              });
            return I
          }
        },
        Lf = Da(["initial"], Ba(uf), !1),
        Ff = Lf.length;

      function If(e) {
        return "string" === typeof e && e.startsWith("var(--")
      }
      var Bf = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function Df(e, t, n) {
        void 0 === n && (n = 1), 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.');
        var r = Ba(function (e) {
            var t = Bf.exec(e);
            if (!t) return [, ];
            var n = Ba(t, 3);
            return [n[1], n[2]]
          }(e), 2),
          o = r[0],
          a = r[1];
        if (o) {
          var i = window.getComputedStyle(t).getPropertyValue(o);
          return i ? i.trim() : If(a) ? Df(a, t, n + 1) : a
        }
      }
      var Nf, Vf = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        Wf = function (e) {
          return Vf.has(e)
        },
        Uf = function (e, t) {
          e.set(t, !1), e.set(t)
        },
        Hf = function (e) {
          return e === Qi || e === ul
        };
      ! function (e) {
        e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom"
      }(Nf || (Nf = {}));
      var $f = function (e, t) {
          return parseFloat(e.split(", ")[t])
        },
        qf = function (e, t) {
          return function (n, r) {
            var o = r.transform;
            if ("none" === o || !o) return 0;
            var a = o.match(/^matrix3d\((.+)\)$/);
            if (a) return $f(a[1], t);
            var i = o.match(/^matrix\((.+)\)$/);
            return i ? $f(i[1], e) : 0
          }
        },
        Yf = new Set(["x", "y", "z"]),
        Xf = Js.filter((function (e) {
          return !Yf.has(e)
        }));
      var Qf = {
          width: function (e, t) {
            var n = e.x,
              r = t.paddingLeft,
              o = void 0 === r ? "0" : r,
              a = t.paddingRight,
              i = void 0 === a ? "0" : a;
            return n.max - n.min - parseFloat(o) - parseFloat(i)
          },
          height: function (e, t) {
            var n = e.y,
              r = t.paddingTop,
              o = void 0 === r ? "0" : r,
              a = t.paddingBottom,
              i = void 0 === a ? "0" : a;
            return n.max - n.min - parseFloat(o) - parseFloat(i)
          },
          top: function (e, t) {
            var n = t.top;
            return parseFloat(n)
          },
          left: function (e, t) {
            var n = t.left;
            return parseFloat(n)
          },
          bottom: function (e, t) {
            var n = e.y,
              r = t.top;
            return parseFloat(r) + (n.max - n.min)
          },
          right: function (e, t) {
            var n = e.x,
              r = t.left;
            return parseFloat(r) + (n.max - n.min)
          },
          x: qf(4, 13),
          y: qf(5, 14)
        },
        Gf = function (e, t, n, r) {
          void 0 === n && (n = {}), void 0 === r && (r = {}), t = La({}, t), r = La({}, r);
          var o = Object.keys(t).filter(Wf),
            a = [],
            i = !1,
            l = [];
          if (o.forEach((function (o) {
              var u = e.getValue(o);
              if (e.hasValue(o)) {
                var s, c = n[o],
                  d = Kd(c),
                  f = t[o];
                if (Iu(f)) {
                  var p = f.length,
                    h = null === f[0] ? 1 : 0;
                  c = f[h], d = Kd(c);
                  for (var m = h; m < p; m++) s ? Kd(f[m]) : (s = Kd(f[m])) === d || Hf(d) && Hf(s)
                } else s = Kd(f);
                if (d !== s)
                  if (Hf(d) && Hf(s)) {
                    var v = u.get();
                    "string" === typeof v && u.set(parseFloat(v)), "string" === typeof f ? t[o] = parseFloat(f) : Array.isArray(f) && s === ul && (t[o] = f.map(parseFloat))
                  } else(null === d || void 0 === d ? void 0 : d.transform) && (null === s || void 0 === s ? void 0 : s.transform) && (0 === c || 0 === f) ? 0 === c ? u.set(s.transform(c)) : t[o] = d.transform(f) : (i || (a = function (e) {
                    var t = [];
                    return Xf.forEach((function (n) {
                      var r = e.getValue(n);
                      void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                    })), t.length && e.syncRender(), t
                  }(e), i = !0), l.push(o), r[o] = void 0 !== r[o] ? r[o] : t[o], Uf(u, f))
              }
            })), l.length) {
            var u = l.indexOf("height") >= 0 ? window.pageYOffset : null,
              s = function (e, t, n) {
                var r = t.measureViewportBox(),
                  o = t.getInstance(),
                  a = getComputedStyle(o),
                  i = a.display,
                  l = {};
                "none" === i && t.setStaticValue("display", e.display || "block"), n.forEach((function (e) {
                  l[e] = Qf[e](r, a)
                })), t.syncRender();
                var u = t.measureViewportBox();
                return n.forEach((function (n) {
                  var r = t.getValue(n);
                  Uf(r, l[n]), e[n] = Qf[n](u, a)
                })), e
              }(t, e, l);
            return a.length && a.forEach((function (t) {
              var n = Ba(t, 2),
                r = n[0],
                o = n[1];
              e.getValue(r).set(o)
            })), e.syncRender(), null !== u && window.scrollTo({
              top: u
            }), {
              target: s,
              transitionEnd: r
            }
          }
          return {
            target: t,
            transitionEnd: r
          }
        };

      function Kf(e, t, n, r) {
        return function (e) {
          return Object.keys(e).some(Wf)
        }(t) ? Gf(e, t, n, r) : {
          target: t,
          transitionEnd: r
        }
      }
      var Zf = function (e, t, n, r) {
        var o = function (e, t, n) {
          var r, o = Fa(t, []),
            a = e.getInstance();
          if (!(a instanceof Element)) return {
            target: o,
            transitionEnd: n
          };
          for (var i in n && (n = La({}, n)), e.forEachValue((function (e) {
              var t = e.get();
              if (If(t)) {
                var n = Df(t, a);
                n && e.set(n)
              }
            })), o) {
            var l = o[i];
            if (If(l)) {
              var u = Df(l, a);
              u && (o[i] = u, n && (null !== (r = n[i]) && void 0 !== r || (n[i] = l)))
            }
          }
          return {
            target: o,
            transitionEnd: n
          }
        }(e, t, r);
        return Kf(e, t = o.target, n, r = o.transitionEnd)
      };
      var Jf = {
          treeType: "dom",
          readValueFromInstance: function (e, t) {
            if (nc(t)) {
              var n = Gu(t);
              return n && n.default || 0
            }
            var r, o = (r = e, window.getComputedStyle(r));
            return (Ic(t) ? o.getPropertyValue(t) : o[t]) || 0
          },
          sortNodePosition: function (e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1
          },
          getBaseTarget: function (e, t) {
            var n;
            return null === (n = e.style) || void 0 === n ? void 0 : n[t]
          },
          measureViewportBox: function (e, t) {
            return Tf(e, t.transformPagePoint)
          },
          resetTransform: function (e, t, n) {
            var r = n.transformTemplate;
            t.style.transform = r ? r({}, "") : "none", e.scheduleRender()
          },
          restoreTransform: function (e, t) {
            e.style.transform = t.style.transform
          },
          removeValueFromRenderState: function (e, t) {
            var n = t.vars,
              r = t.style;
            delete n[e], delete r[e]
          },
          makeTargetAnimatable: function (e, t, n, r) {
            var o = n.transformValues;
            void 0 === r && (r = !0);
            var a = t.transition,
              i = t.transitionEnd,
              l = Fa(t, ["transition", "transitionEnd"]),
              u = function (e, t, n) {
                var r, o, a = {};
                for (var i in e) a[i] = null !== (r = nf(i, t)) && void 0 !== r ? r : null === (o = n.getValue(i)) || void 0 === o ? void 0 : o.get();
                return a
              }(l, a || {}, e);
            if (o && (i && (i = o(i)), l && (l = o(l)), u && (u = o(u))), r) {
              ! function (e, t, n) {
                var r, o, a, i, l = Object.keys(t).filter((function (t) {
                    return !e.hasValue(t)
                  })),
                  u = l.length;
                if (u)
                  for (var s = 0; s < u; s++) {
                    var c = l[s],
                      d = t[c],
                      f = null;
                    Array.isArray(d) && (f = d[0]), null === f && (f = null !== (o = null !== (r = n[c]) && void 0 !== r ? r : e.readValue(c)) && void 0 !== o ? o : t[c]), void 0 !== f && null !== f && ("string" === typeof f && (/^\-?\d*\.?\d+$/.test(f) || Xd(f)) ? f = parseFloat(f) : !Jd(f) && Pl.test(d) && (f = Ku(c, d)), e.addValue(c, zi(f)), null !== (a = (i = n)[c]) && void 0 !== a || (i[c] = f), e.setBaseTarget(c, f))
                  }
              }(e, l, u);
              var s = Zf(e, l, u, i);
              i = s.transitionEnd, l = s.target
            }
            return La({
              transition: a,
              transitionEnd: i
            }, l)
          },
          scrapeMotionValuesFromProps: id,
          build: function (e, t, n, r, o) {
            void 0 !== e.isVisible && (t.style.visibility = e.isVisible ? "visible" : "hidden"), Dc(t, n, r, o.transformTemplate)
          },
          render: rd
        },
        ep = jf(Jf),
        tp = jf(La(La({}, Jf), {
          getBaseTarget: function (e, t) {
            return e[t]
          },
          readValueFromInstance: function (e, t) {
            var n;
            return nc(t) ? (null === (n = Gu(t)) || void 0 === n ? void 0 : n.default) || 0 : (t = od.has(t) ? t : nd(t), e.getAttribute(t))
          },
          scrapeMotionValuesFromProps: ld,
          build: function (e, t, n, r, o) {
            Kc(t, n, r, o.transformTemplate)
          },
          render: ad
        })),
        np = function (e, t) {
          return jc(e) ? tp(t, {
            enableHardwareAcceleration: !1
          }) : ep(t, {
            enableHardwareAcceleration: !0
          })
        };

      function rp(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
      }
      var op = {
          correct: function (e, t) {
            if (!t.target) return e;
            if ("string" === typeof e) {
              if (!ul.test(e)) return e;
              e = parseFloat(e)
            }
            var n = rp(e, t.target.x),
              r = rp(e, t.target.y);
            return "".concat(n, "% ").concat(r, "%")
          }
        },
        ap = "_$css",
        ip = {
          correct: function (e, t) {
            var n = t.treeScale,
              r = t.projectionDelta,
              o = e,
              a = e.includes("var("),
              i = [];
            a && (e = e.replace(Bf, (function (e) {
              return i.push(e), ap
            })));
            var l = Pl.parse(e);
            if (l.length > 5) return o;
            var u = Pl.createTransformer(e),
              s = "number" !== typeof l[0] ? 1 : 0,
              c = r.x.scale * n.x,
              d = r.y.scale * n.y;
            l[0 + s] /= c, l[1 + s] /= d;
            var f = Ci(c, d, .5);
            "number" === typeof l[2 + s] && (l[2 + s] /= f), "number" === typeof l[3 + s] && (l[3 + s] /= f);
            var p = u(l);
            if (a) {
              var h = 0;
              p = p.replace(ap, (function () {
                var e = i[h];
                return h++, e
              }))
            }
            return p
          }
        },
        lp = function (e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this
          }
          return ja(t, e), t.prototype.componentDidMount = function () {
            var e, t = this,
              n = this.props,
              r = n.visualElement,
              o = n.layoutGroup,
              a = n.switchLayoutGroup,
              i = n.layoutId,
              l = r.projection;
            e = up, Object.assign(Qs, e), l && ((null === o || void 0 === o ? void 0 : o.group) && o.group.add(l), (null === a || void 0 === a ? void 0 : a.register) && i && a.register(l), l.root.didUpdate(), l.addEventListener("animationComplete", (function () {
              t.safeToRemove()
            })), l.setOptions(La(La({}, l.options), {
              onExitComplete: function () {
                return t.safeToRemove()
              }
            }))), uc.hasEverUpdated = !0
          }, t.prototype.getSnapshotBeforeUpdate = function (e) {
            var t = this,
              n = this.props,
              r = n.layoutDependency,
              o = n.visualElement,
              a = n.drag,
              i = n.isPresent,
              l = o.projection;
            return l ? (l.isPresent = i, a || e.layoutDependency !== r || void 0 === r ? l.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? l.promote() : l.relegate() || Ei.postRender((function () {
              var e;
              (null === (e = l.getStack()) || void 0 === e ? void 0 : e.members.length) || t.safeToRemove()
            }))), null) : null
          }, t.prototype.componentDidUpdate = function () {
            var e = this.props.visualElement.projection;
            e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
          }, t.prototype.componentWillUnmount = function () {
            var e = this.props,
              t = e.visualElement,
              n = e.layoutGroup,
              r = e.switchLayoutGroup,
              o = t.projection;
            o && (o.scheduleCheckAfterUnmount(), (null === n || void 0 === n ? void 0 : n.group) && n.group.remove(o), (null === r || void 0 === r ? void 0 : r.deregister) && r.deregister(o))
          }, t.prototype.safeToRemove = function () {
            var e = this.props.safeToRemove;
            null === e || void 0 === e || e()
          }, t.prototype.render = function () {
            return null
          }, t
        }(e.Component);
      var up = {
          borderRadius: La(La({}, op), {
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          }),
          borderTopLeftRadius: op,
          borderTopRightRadius: op,
          borderBottomLeftRadius: op,
          borderBottomRightRadius: op,
          boxShadow: ip
        },
        sp = {
          measureLayout: function (t) {
            var n = Ba(za(), 2),
              r = n[0],
              o = n[1],
              a = (0, e.useContext)(Tc);
            return e.createElement(lp, La({}, t, {
              layoutGroup: a,
              switchLayoutGroup: (0, e.useContext)(Ac),
              isPresent: r,
              safeToRemove: o
            }))
          }
        },
        cp = sc({
          attachResizeListener: function (e, t) {
            return md(e, "resize", t)
          },
          measureScroll: function () {
            return {
              x: document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop
            }
          }
        }),
        dp = {
          current: void 0
        },
        fp = sc({
          measureScroll: function (e) {
            return {
              x: e.scrollLeft,
              y: e.scrollTop
            }
          },
          defaultParent: function () {
            if (!dp.current) {
              var e = new cp(0, {});
              e.mount(window), e.setOptions({
                layoutScroll: !0
              }), dp.current = e
            }
            return dp.current
          },
          resetTransform: function (e, t) {
            e.style.transform = null !== t && void 0 !== t ? t : "none"
          }
        }),
        pp = La(La(La(La({}, hf), qd), Of), sp),
        hp = Oc((function (e, t) {
          return function (e, t, n, r, o) {
            var a = t.forwardMotionProps,
              i = void 0 !== a && a,
              l = jc(e) ? pd : hd;
            return La(La({}, l), {
              preloadedFeatures: n,
              useRender: ed(i),
              createVisualElement: r,
              projectionNodeConstructor: o,
              Component: e
            })
          }(e, t, pp, np, fp)
        }));

      function mp() {
        var t = (0, e.useRef)(!1);
        return Xa((function () {
          return t.current = !0,
            function () {
              t.current = !1
            }
        }), []), t
      }
      var vp = function (t) {
        var n = t.children,
          r = t.initial,
          o = t.isPresent,
          a = t.onExitComplete,
          i = t.custom,
          l = t.presenceAffectsLayout,
          u = Pa(gp),
          s = Ra(),
          c = (0, e.useMemo)((function () {
            return {
              id: s,
              initial: r,
              isPresent: o,
              custom: i,
              onExitComplete: function (e) {
                var t, n;
                u.set(e, !0);
                try {
                  for (var r = Ia(u.values()), o = r.next(); !o.done; o = r.next()) {
                    if (!o.value) return
                  }
                } catch (i) {
                  t = {
                    error: i
                  }
                } finally {
                  try {
                    o && !o.done && (n = r.return) && n.call(r)
                  } finally {
                    if (t) throw t.error
                  }
                }
                null === a || void 0 === a || a()
              },
              register: function (e) {
                return u.set(e, !1),
                  function () {
                    return u.delete(e)
                  }
              }
            }
          }), l ? void 0 : [o]);
        return (0, e.useMemo)((function () {
          u.forEach((function (e, t) {
            return u.set(t, !1)
          }))
        }), [o]), e.useEffect((function () {
          !o && !u.size && (null === a || void 0 === a || a())
        }), [o]), e.createElement(_a.Provider, {
          value: c
        }, n)
      };

      function gp() {
        return new Map
      }
      var yp = function (e) {
        return e.key || ""
      };
      var bp = function (t) {
          var n = t.children,
            r = t.custom,
            o = t.initial,
            a = void 0 === o || o,
            i = t.onExitComplete,
            l = t.exitBeforeEnter,
            u = t.presenceAffectsLayout,
            s = void 0 === u || u,
            c = Ba(function () {
              var t = mp(),
                n = Ba((0, e.useState)(0), 2),
                r = n[0],
                o = n[1],
                a = (0, e.useCallback)((function () {
                  t.current && o(r + 1)
                }), [r]);
              return [(0, e.useCallback)((function () {
                return Ei.postRender(a)
              }), [a]), r]
            }(), 1),
            d = c[0],
            f = (0, e.useContext)(Tc).forceRender;
          f && (d = f);
          var p = mp(),
            h = function (t) {
              var n = [];
              return e.Children.forEach(t, (function (t) {
                (0, e.isValidElement)(t) && n.push(t)
              })), n
            }(n),
            m = h,
            v = new Set,
            g = (0, e.useRef)(m),
            y = (0, e.useRef)(new Map).current,
            b = (0, e.useRef)(!0);
          if (Xa((function () {
              b.current = !1,
                function (e, t) {
                  e.forEach((function (e) {
                    var n = yp(e);
                    t.set(n, e)
                  }))
                }(h, y), g.current = m
            })), Fd((function () {
              b.current = !0, y.clear(), v.clear()
            })), b.current) return e.createElement(e.Fragment, null, m.map((function (t) {
            return e.createElement(vp, {
              key: yp(t),
              isPresent: !0,
              initial: !!a && void 0,
              presenceAffectsLayout: s
            }, t)
          })));
          m = Da([], Ba(m), !1);
          for (var x = g.current.map(yp), w = h.map(yp), k = x.length, S = 0; S < k; S++) {
            var E = x[S]; - 1 === w.indexOf(E) && v.add(E)
          }
          return l && v.size && (m = []), v.forEach((function (t) {
            if (-1 === w.indexOf(t)) {
              var n = y.get(t);
              if (n) {
                var o = x.indexOf(t);
                m.splice(o, 0, e.createElement(vp, {
                  key: yp(n),
                  isPresent: !1,
                  onExitComplete: function () {
                    y.delete(t), v.delete(t);
                    var e = g.current.findIndex((function (e) {
                      return e.key === t
                    }));
                    if (g.current.splice(e, 1), !v.size) {
                      if (g.current = h, !1 === p.current) return;
                      d(), i && i()
                    }
                  },
                  custom: r,
                  presenceAffectsLayout: s
                }, n))
              }
            }
          })), m = m.map((function (t) {
            var n = t.key;
            return v.has(n) ? t : e.createElement(vp, {
              key: yp(t),
              isPresent: !0,
              presenceAffectsLayout: s
            }, t)
          })), e.createElement(e.Fragment, null, v.size ? m : m.map((function (t) {
            return (0, e.cloneElement)(t)
          })))
        },
        xp = n(164),
        wp = Sr({
          strict: !1,
          name: "PortalManagerContext"
        }),
        kp = wp[0],
        Sp = wp[1];

      function Ep(t) {
        var n = t.children,
          r = t.zIndex;
        return e.createElement(kp, {
          value: {
            zIndex: r
          }
        }, n)
      }

      function Cp() {
        return Cp = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Cp.apply(this, arguments)
      }
      var _p = ["containerRef"],
        Pp = Sr({
          strict: !1,
          name: "PortalContext"
        }),
        Tp = Pp[0],
        Ap = Pp[1],
        Rp = "chakra-portal",
        zp = function (t) {
          return e.createElement("div", {
            className: "chakra-portal-zIndex",
            style: {
              position: "absolute",
              zIndex: t.zIndex,
              top: 0,
              left: 0,
              right: 0
            }
          }, t.children)
        },
        Op = function (t) {
          var n = t.appendToParentPortal,
            r = t.children,
            o = e.useRef(null),
            a = e.useRef(null),
            i = To(),
            l = Ap(),
            u = Sp();
          $((function () {
            if (o.current) {
              var e = o.current.ownerDocument,
                t = n && null != l ? l : e.body;
              if (t) {
                a.current = e.createElement("div"), a.current.className = Rp, t.appendChild(a.current), i();
                var r = a.current;
                return function () {
                  t.contains(r) && t.removeChild(r)
                }
              }
            }
          }), []);
          var s = null != u && u.zIndex ? e.createElement(zp, {
            zIndex: null == u ? void 0 : u.zIndex
          }, r) : r;
          return a.current ? (0, xp.createPortal)(e.createElement(Tp, {
            value: a.current
          }, s), a.current) : e.createElement("span", {
            ref: o
          })
        },
        Mp = function (t) {
          var n = t.children,
            r = t.containerRef,
            o = t.appendToParentPortal,
            a = r.current,
            i = null != a ? a : j ? document.body : void 0,
            l = e.useMemo((function () {
              var e = null == a ? void 0 : a.ownerDocument.createElement("div");
              return e && (e.className = Rp), e
            }), [a]),
            u = To();
          return $((function () {
            u()
          }), []), $((function () {
            if (l && i) return i.appendChild(l),
              function () {
                i.removeChild(l)
              }
          }), [l, i]), i && l ? (0, xp.createPortal)(e.createElement(Tp, {
            value: o ? l : null
          }, n), l) : null
        };

      function jp(t) {
        var n = t.containerRef,
          r = function (e, t) {
            if (null == e) return {};
            var n, r, o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
          }(t, _p);
        return n ? e.createElement(Mp, Cp({
          containerRef: n
        }, r)) : e.createElement(Op, r)
      }
      jp.defaultProps = {
        appendToParentPortal: !0
      }, jp.className = Rp, jp.selector = ".chakra-portal";
      var Lp = {
        px: "1px",
        .5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem"
      };

      function Fp() {
        return Fp = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Fp.apply(this, arguments)
      }
      var Ip = Fp({}, Lp, {
        max: "max-content",
        min: "min-content",
        full: "100%",
        "3xs": "14rem",
        "2xs": "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "8xl": "90rem"
      }, {
        container: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px"
        }
      });

      function Bp(e, t) {
        (function (e) {
          return "string" === typeof e && -1 !== e.indexOf(".") && 1 === parseFloat(e)
        })(e) && (e = "100%");
        var n = function (e) {
          return "string" === typeof e && -1 !== e.indexOf("%")
        }(e);
        return e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e = 360 === t ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t))
      }

      function Dp(e) {
        return Math.min(1, Math.max(0, e))
      }

      function Np(e) {
        return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
      }

      function Vp(e) {
        return e <= 1 ? "".concat(100 * Number(e), "%") : e
      }

      function Wp(e) {
        return 1 === e.length ? "0" + e : String(e)
      }

      function Up(e, t, n) {
        e = Bp(e, 255), t = Bp(t, 255), n = Bp(n, 255);
        var r = Math.max(e, t, n),
          o = Math.min(e, t, n),
          a = 0,
          i = 0,
          l = (r + o) / 2;
        if (r === o) i = 0, a = 0;
        else {
          var u = r - o;
          switch (i = l > .5 ? u / (2 - r - o) : u / (r + o), r) {
            case e:
              a = (t - n) / u + (t < n ? 6 : 0);
              break;
            case t:
              a = (n - e) / u + 2;
              break;
            case n:
              a = (e - t) / u + 4
          }
          a /= 6
        }
        return {
          h: a,
          s: i,
          l: l
        }
      }

      function Hp(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * n * (t - e) : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function $p(e, t, n) {
        e = Bp(e, 255), t = Bp(t, 255), n = Bp(n, 255);
        var r = Math.max(e, t, n),
          o = Math.min(e, t, n),
          a = 0,
          i = r,
          l = r - o,
          u = 0 === r ? 0 : l / r;
        if (r === o) a = 0;
        else {
          switch (r) {
            case e:
              a = (t - n) / l + (t < n ? 6 : 0);
              break;
            case t:
              a = (n - e) / l + 2;
              break;
            case n:
              a = (e - t) / l + 4
          }
          a /= 6
        }
        return {
          h: a,
          s: u,
          v: i
        }
      }

      function qp(e, t, n, r) {
        var o = [Wp(Math.round(e).toString(16)), Wp(Math.round(t).toString(16)), Wp(Math.round(n).toString(16))];
        return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
      }

      function Yp(e) {
        return Math.round(255 * parseFloat(e)).toString(16)
      }

      function Xp(e) {
        return Qp(e) / 255
      }

      function Qp(e) {
        return parseInt(e, 16)
      }
      var Gp = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        goldenrod: "#daa520",
        gold: "#ffd700",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavenderblush: "#fff0f5",
        lavender: "#e6e6fa",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      };

      function Kp(e) {
        var t = {
            r: 0,
            g: 0,
            b: 0
          },
          n = 1,
          r = null,
          o = null,
          a = null,
          i = !1,
          l = !1;
        return "string" === typeof e && (e = function (e) {
          if (0 === (e = e.trim().toLowerCase()).length) return !1;
          var t = !1;
          if (Gp[e]) e = Gp[e], t = !0;
          else if ("transparent" === e) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
          };
          var n = th.rgb.exec(e);
          if (n) return {
            r: n[1],
            g: n[2],
            b: n[3]
          };
          if (n = th.rgba.exec(e)) return {
            r: n[1],
            g: n[2],
            b: n[3],
            a: n[4]
          };
          if (n = th.hsl.exec(e)) return {
            h: n[1],
            s: n[2],
            l: n[3]
          };
          if (n = th.hsla.exec(e)) return {
            h: n[1],
            s: n[2],
            l: n[3],
            a: n[4]
          };
          if (n = th.hsv.exec(e)) return {
            h: n[1],
            s: n[2],
            v: n[3]
          };
          if (n = th.hsva.exec(e)) return {
            h: n[1],
            s: n[2],
            v: n[3],
            a: n[4]
          };
          if (n = th.hex8.exec(e)) return {
            r: Qp(n[1]),
            g: Qp(n[2]),
            b: Qp(n[3]),
            a: Xp(n[4]),
            format: t ? "name" : "hex8"
          };
          if (n = th.hex6.exec(e)) return {
            r: Qp(n[1]),
            g: Qp(n[2]),
            b: Qp(n[3]),
            format: t ? "name" : "hex"
          };
          if (n = th.hex4.exec(e)) return {
            r: Qp(n[1] + n[1]),
            g: Qp(n[2] + n[2]),
            b: Qp(n[3] + n[3]),
            a: Xp(n[4] + n[4]),
            format: t ? "name" : "hex8"
          };
          if (n = th.hex3.exec(e)) return {
            r: Qp(n[1] + n[1]),
            g: Qp(n[2] + n[2]),
            b: Qp(n[3] + n[3]),
            format: t ? "name" : "hex"
          };
          return !1
        }(e)), "object" === typeof e && (nh(e.r) && nh(e.g) && nh(e.b) ? (t = function (e, t, n) {
          return {
            r: 255 * Bp(e, 255),
            g: 255 * Bp(t, 255),
            b: 255 * Bp(n, 255)
          }
        }(e.r, e.g, e.b), i = !0, l = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : nh(e.h) && nh(e.s) && nh(e.v) ? (r = Vp(e.s), o = Vp(e.v), t = function (e, t, n) {
          e = 6 * Bp(e, 360), t = Bp(t, 100), n = Bp(n, 100);
          var r = Math.floor(e),
            o = e - r,
            a = n * (1 - t),
            i = n * (1 - o * t),
            l = n * (1 - (1 - o) * t),
            u = r % 6;
          return {
            r: 255 * [n, i, a, a, l, n][u],
            g: 255 * [l, n, n, i, a, a][u],
            b: 255 * [a, a, l, n, n, i][u]
          }
        }(e.h, r, o), i = !0, l = "hsv") : nh(e.h) && nh(e.s) && nh(e.l) && (r = Vp(e.s), a = Vp(e.l), t = function (e, t, n) {
          var r, o, a;
          if (e = Bp(e, 360), t = Bp(t, 100), n = Bp(n, 100), 0 === t) o = n, a = n, r = n;
          else {
            var i = n < .5 ? n * (1 + t) : n + t - n * t,
              l = 2 * n - i;
            r = Hp(l, i, e + 1 / 3), o = Hp(l, i, e), a = Hp(l, i, e - 1 / 3)
          }
          return {
            r: 255 * r,
            g: 255 * o,
            b: 255 * a
          }
        }(e.h, r, a), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Np(n), {
          ok: i,
          format: e.format || l,
          r: Math.min(255, Math.max(t.r, 0)),
          g: Math.min(255, Math.max(t.g, 0)),
          b: Math.min(255, Math.max(t.b, 0)),
          a: n
        }
      }
      var Zp = "(?:".concat("[-\\+]?\\d*\\.\\d+%?", ")|(?:").concat("[-\\+]?\\d+%?", ")"),
        Jp = "[\\s|\\(]+(".concat(Zp, ")[,|\\s]+(").concat(Zp, ")[,|\\s]+(").concat(Zp, ")\\s*\\)?"),
        eh = "[\\s|\\(]+(".concat(Zp, ")[,|\\s]+(").concat(Zp, ")[,|\\s]+(").concat(Zp, ")[,|\\s]+(").concat(Zp, ")\\s*\\)?"),
        th = {
          CSS_UNIT: new RegExp(Zp),
          rgb: new RegExp("rgb" + Jp),
          rgba: new RegExp("rgba" + eh),
          hsl: new RegExp("hsl" + Jp),
          hsla: new RegExp("hsla" + eh),
          hsv: new RegExp("hsv" + Jp),
          hsva: new RegExp("hsva" + eh),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };

      function nh(e) {
        return Boolean(th.CSS_UNIT.exec(String(e)))
      }
      var rh = function () {
        function e(t, n) {
          var r;
          if (void 0 === t && (t = ""), void 0 === n && (n = {}), t instanceof e) return t;
          "number" === typeof t && (t = function (e) {
            return {
              r: e >> 16,
              g: (65280 & e) >> 8,
              b: 255 & e
            }
          }(t)), this.originalInput = t;
          var o = Kp(t);
          this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = null !== (r = n.format) && void 0 !== r ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok
        }
        return e.prototype.isDark = function () {
          return this.getBrightness() < 128
        }, e.prototype.isLight = function () {
          return !this.isDark()
        }, e.prototype.getBrightness = function () {
          var e = this.toRgb();
          return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
        }, e.prototype.getLuminance = function () {
          var e = this.toRgb(),
            t = e.r / 255,
            n = e.g / 255,
            r = e.b / 255;
          return .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .7152 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4))
        }, e.prototype.getAlpha = function () {
          return this.a
        }, e.prototype.setAlpha = function (e) {
          return this.a = Np(e), this.roundA = Math.round(100 * this.a) / 100, this
        }, e.prototype.toHsv = function () {
          var e = $p(this.r, this.g, this.b);
          return {
            h: 360 * e.h,
            s: e.s,
            v: e.v,
            a: this.a
          }
        }, e.prototype.toHsvString = function () {
          var e = $p(this.r, this.g, this.b),
            t = Math.round(360 * e.h),
            n = Math.round(100 * e.s),
            r = Math.round(100 * e.v);
          return 1 === this.a ? "hsv(".concat(t, ", ").concat(n, "%, ").concat(r, "%)") : "hsva(".concat(t, ", ").concat(n, "%, ").concat(r, "%, ").concat(this.roundA, ")")
        }, e.prototype.toHsl = function () {
          var e = Up(this.r, this.g, this.b);
          return {
            h: 360 * e.h,
            s: e.s,
            l: e.l,
            a: this.a
          }
        }, e.prototype.toHslString = function () {
          var e = Up(this.r, this.g, this.b),
            t = Math.round(360 * e.h),
            n = Math.round(100 * e.s),
            r = Math.round(100 * e.l);
          return 1 === this.a ? "hsl(".concat(t, ", ").concat(n, "%, ").concat(r, "%)") : "hsla(".concat(t, ", ").concat(n, "%, ").concat(r, "%, ").concat(this.roundA, ")")
        }, e.prototype.toHex = function (e) {
          return void 0 === e && (e = !1), qp(this.r, this.g, this.b, e)
        }, e.prototype.toHexString = function (e) {
          return void 0 === e && (e = !1), "#" + this.toHex(e)
        }, e.prototype.toHex8 = function (e) {
          return void 0 === e && (e = !1),
            function (e, t, n, r, o) {
              var a = [Wp(Math.round(e).toString(16)), Wp(Math.round(t).toString(16)), Wp(Math.round(n).toString(16)), Wp(Yp(r))];
              return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("")
            }(this.r, this.g, this.b, this.a, e)
        }, e.prototype.toHex8String = function (e) {
          return void 0 === e && (e = !1), "#" + this.toHex8(e)
        }, e.prototype.toRgb = function () {
          return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
          }
        }, e.prototype.toRgbString = function () {
          var e = Math.round(this.r),
            t = Math.round(this.g),
            n = Math.round(this.b);
          return 1 === this.a ? "rgb(".concat(e, ", ").concat(t, ", ").concat(n, ")") : "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", ").concat(this.roundA, ")")
        }, e.prototype.toPercentageRgb = function () {
          var e = function (e) {
            return "".concat(Math.round(100 * Bp(e, 255)), "%")
          };
          return {
            r: e(this.r),
            g: e(this.g),
            b: e(this.b),
            a: this.a
          }
        }, e.prototype.toPercentageRgbString = function () {
          var e = function (e) {
            return Math.round(100 * Bp(e, 255))
          };
          return 1 === this.a ? "rgb(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%)") : "rgba(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%, ").concat(this.roundA, ")")
        }, e.prototype.toName = function () {
          if (0 === this.a) return "transparent";
          if (this.a < 1) return !1;
          for (var e = "#" + qp(this.r, this.g, this.b, !1), t = 0, n = Object.entries(Gp); t < n.length; t++) {
            var r = n[t],
              o = r[0];
            if (e === r[1]) return o
          }
          return !1
        }, e.prototype.toString = function (e) {
          var t = Boolean(e);
          e = null !== e && void 0 !== e ? e : this.format;
          var n = !1,
            r = this.a < 1 && this.a >= 0;
          return t || !r || !e.startsWith("hex") && "name" !== e ? ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (n = this.toHexString()), "hex3" === e && (n = this.toHexString(!0)), "hex4" === e && (n = this.toHex8String(!0)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString()) : "name" === e && 0 === this.a ? this.toName() : this.toRgbString()
        }, e.prototype.toNumber = function () {
          return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
        }, e.prototype.clone = function () {
          return new e(this.toString())
        }, e.prototype.lighten = function (t) {
          void 0 === t && (t = 10);
          var n = this.toHsl();
          return n.l += t / 100, n.l = Dp(n.l), new e(n)
        }, e.prototype.brighten = function (t) {
          void 0 === t && (t = 10);
          var n = this.toRgb();
          return n.r = Math.max(0, Math.min(255, n.r - Math.round(-t / 100 * 255))), n.g = Math.max(0, Math.min(255, n.g - Math.round(-t / 100 * 255))), n.b = Math.max(0, Math.min(255, n.b - Math.round(-t / 100 * 255))), new e(n)
        }, e.prototype.darken = function (t) {
          void 0 === t && (t = 10);
          var n = this.toHsl();
          return n.l -= t / 100, n.l = Dp(n.l), new e(n)
        }, e.prototype.tint = function (e) {
          return void 0 === e && (e = 10), this.mix("white", e)
        }, e.prototype.shade = function (e) {
          return void 0 === e && (e = 10), this.mix("black", e)
        }, e.prototype.desaturate = function (t) {
          void 0 === t && (t = 10);
          var n = this.toHsl();
          return n.s -= t / 100, n.s = Dp(n.s), new e(n)
        }, e.prototype.saturate = function (t) {
          void 0 === t && (t = 10);
          var n = this.toHsl();
          return n.s += t / 100, n.s = Dp(n.s), new e(n)
        }, e.prototype.greyscale = function () {
          return this.desaturate(100)
        }, e.prototype.spin = function (t) {
          var n = this.toHsl(),
            r = (n.h + t) % 360;
          return n.h = r < 0 ? 360 + r : r, new e(n)
        }, e.prototype.mix = function (t, n) {
          void 0 === n && (n = 50);
          var r = this.toRgb(),
            o = new e(t).toRgb(),
            a = n / 100;
          return new e({
            r: (o.r - r.r) * a + r.r,
            g: (o.g - r.g) * a + r.g,
            b: (o.b - r.b) * a + r.b,
            a: (o.a - r.a) * a + r.a
          })
        }, e.prototype.analogous = function (t, n) {
          void 0 === t && (t = 6), void 0 === n && (n = 30);
          var r = this.toHsl(),
            o = 360 / n,
            a = [this];
          for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t;) r.h = (r.h + o) % 360, a.push(new e(r));
          return a
        }, e.prototype.complement = function () {
          var t = this.toHsl();
          return t.h = (t.h + 180) % 360, new e(t)
        }, e.prototype.monochromatic = function (t) {
          void 0 === t && (t = 6);
          for (var n = this.toHsv(), r = n.h, o = n.s, a = n.v, i = [], l = 1 / t; t--;) i.push(new e({
            h: r,
            s: o,
            v: a
          })), a = (a + l) % 1;
          return i
        }, e.prototype.splitcomplement = function () {
          var t = this.toHsl(),
            n = t.h;
          return [this, new e({
            h: (n + 72) % 360,
            s: t.s,
            l: t.l
          }), new e({
            h: (n + 216) % 360,
            s: t.s,
            l: t.l
          })]
        }, e.prototype.onBackground = function (t) {
          var n = this.toRgb(),
            r = new e(t).toRgb();
          return new e({
            r: r.r + (n.r - r.r) * n.a,
            g: r.g + (n.g - r.g) * n.a,
            b: r.b + (n.b - r.b) * n.a
          })
        }, e.prototype.triad = function () {
          return this.polyad(3)
        }, e.prototype.tetrad = function () {
          return this.polyad(4)
        }, e.prototype.polyad = function (t) {
          for (var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, i = 1; i < t; i++) o.push(new e({
            h: (r + i * a) % 360,
            s: n.s,
            l: n.l
          }));
          return o
        }, e.prototype.equals = function (t) {
          return this.toRgbString() === new e(t).toRgbString()
        }, e
      }();

      function oh(e) {
        if (void 0 === e && (e = {}), void 0 !== e.count && null !== e.count) {
          var t = e.count,
            n = [];
          for (e.count = void 0; t > n.length;) e.count = null, e.seed && (e.seed += 1), n.push(oh(e));
          return e.count = t, n
        }
        var r = function (e, t) {
            var n = ih(function (e) {
              var t = parseInt(e, 10);
              if (!Number.isNaN(t) && t < 360 && t > 0) return [t, t];
              if ("string" === typeof e) {
                var n = uh.find((function (t) {
                  return t.name === e
                }));
                if (n) {
                  var r = lh(n);
                  if (r.hueRange) return r.hueRange
                }
                var o = new rh(e);
                if (o.isValid) {
                  var a = o.toHsv().h;
                  return [a, a]
                }
              }
              return [0, 360]
            }(e), t);
            n < 0 && (n = 360 + n);
            return n
          }(e.hue, e.seed),
          o = function (e, t) {
            if ("monochrome" === t.hue) return 0;
            if ("random" === t.luminosity) return ih([0, 100], t.seed);
            var n = ah(e).saturationRange,
              r = n[0],
              o = n[1];
            switch (t.luminosity) {
              case "bright":
                r = 55;
                break;
              case "dark":
                r = o - 10;
                break;
              case "light":
                o = 55
            }
            return ih([r, o], t.seed)
          }(r, e),
          a = function (e, t, n) {
            var r = function (e, t) {
                for (var n = ah(e).lowerBounds, r = 0; r < n.length - 1; r++) {
                  var o = n[r][0],
                    a = n[r][1],
                    i = n[r + 1][0],
                    l = n[r + 1][1];
                  if (t >= o && t <= i) {
                    var u = (l - a) / (i - o);
                    return u * t + (a - u * o)
                  }
                }
                return 0
              }(e, t),
              o = 100;
            switch (n.luminosity) {
              case "dark":
                o = r + 20;
                break;
              case "light":
                r = (o + r) / 2;
                break;
              case "random":
                r = 0, o = 100
            }
            return ih([r, o], n.seed)
          }(r, o, e),
          i = {
            h: r,
            s: o,
            v: a
          };
        return void 0 !== e.alpha && (i.a = e.alpha), new rh(i)
      }

      function ah(e) {
        e >= 334 && e <= 360 && (e -= 360);
        for (var t = 0, n = uh; t < n.length; t++) {
          var r = lh(n[t]);
          if (r.hueRange && e >= r.hueRange[0] && e <= r.hueRange[1]) return r
        }
        throw Error("Color not found")
      }

      function ih(e, t) {
        if (void 0 === t) return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]));
        var n = e[1] || 1,
          r = e[0] || 0,
          o = (t = (9301 * t + 49297) % 233280) / 233280;
        return Math.floor(r + o * (n - r))
      }

      function lh(e) {
        var t = e.lowerBounds[0][0],
          n = e.lowerBounds[e.lowerBounds.length - 1][0],
          r = e.lowerBounds[e.lowerBounds.length - 1][1],
          o = e.lowerBounds[0][1];
        return {
          name: e.name,
          hueRange: e.hueRange,
          lowerBounds: e.lowerBounds,
          saturationRange: [t, n],
          brightnessRange: [r, o]
        }
      }
      var uh = [{
          name: "monochrome",
          hueRange: null,
          lowerBounds: [
            [0, 0],
            [100, 0]
          ]
        }, {
          name: "red",
          hueRange: [-26, 18],
          lowerBounds: [
            [20, 100],
            [30, 92],
            [40, 89],
            [50, 85],
            [60, 78],
            [70, 70],
            [80, 60],
            [90, 55],
            [100, 50]
          ]
        }, {
          name: "orange",
          hueRange: [19, 46],
          lowerBounds: [
            [20, 100],
            [30, 93],
            [40, 88],
            [50, 86],
            [60, 85],
            [70, 70],
            [100, 70]
          ]
        }, {
          name: "yellow",
          hueRange: [47, 62],
          lowerBounds: [
            [25, 100],
            [40, 94],
            [50, 89],
            [60, 86],
            [70, 84],
            [80, 82],
            [90, 80],
            [100, 75]
          ]
        }, {
          name: "green",
          hueRange: [63, 178],
          lowerBounds: [
            [30, 100],
            [40, 90],
            [50, 85],
            [60, 81],
            [70, 74],
            [80, 64],
            [90, 50],
            [100, 40]
          ]
        }, {
          name: "blue",
          hueRange: [179, 257],
          lowerBounds: [
            [20, 100],
            [30, 86],
            [40, 80],
            [50, 74],
            [60, 60],
            [70, 52],
            [80, 44],
            [90, 39],
            [100, 35]
          ]
        }, {
          name: "purple",
          hueRange: [258, 282],
          lowerBounds: [
            [20, 100],
            [30, 87],
            [40, 79],
            [50, 70],
            [60, 65],
            [70, 59],
            [80, 52],
            [90, 45],
            [100, 42]
          ]
        }, {
          name: "pink",
          hueRange: [283, 334],
          lowerBounds: [
            [20, 100],
            [30, 90],
            [40, 86],
            [60, 84],
            [80, 80],
            [90, 75],
            [100, 73]
          ]
        }],
        sh = function (e, t, n) {
          var r = k(e, "colors." + t, t);
          return new rh(r).isValid ? r : n
        },
        ch = function (e) {
          return function (t) {
            var n = sh(t, e);
            return new rh(n).isDark() ? "dark" : "light"
          }
        },
        dh = function (e, t) {
          return function (n) {
            var r = sh(n, e);
            return new rh(r).setAlpha(t).toRgbString()
          }
        };

      function fh(e, t) {
        return void 0 === e && (e = "1rem"), void 0 === t && (t = "rgba(255, 255, 255, 0.15)"), {
          backgroundImage: "linear-gradient(\n    45deg,\n    " + t + " 25%,\n    transparent 25%,\n    transparent 50%,\n    " + t + " 50%,\n    " + t + " 75%,\n    transparent 75%,\n    transparent\n  )",
          backgroundSize: e + " " + e
        }
      }

      function ph(e) {
        var t = oh().toHexString();
        return !e || g(e) ? t : e.string && e.colors ? function (e, t) {
          var n = 0;
          if (0 === e.length) return t[0];
          for (var r = 0; r < e.length; r += 1) n = e.charCodeAt(r) + ((n << 5) - n), n &= n;
          return n = (n % t.length + t.length) % t.length, t[n]
        }(e.string, e.colors) : e.string && !e.colors ? function (e) {
          var t = 0;
          if (0 === e.length) return t.toString();
          for (var n = 0; n < e.length; n += 1) t = e.charCodeAt(n) + ((t << 5) - t), t &= t;
          for (var r = "#", o = 0; o < 3; o += 1) {
            r += ("00" + (t >> 8 * o & 255).toString(16)).substr(-2)
          }
          return r
        }(e.string) : e.colors && !e.string ? function (e) {
          return e[Math.floor(Math.random() * e.length)]
        }(e.colors) : t
      }

      function hh(e, t) {
        return function (n) {
          return "dark" === n.colorMode ? t : e
        }
      }

      function mh(e) {
        var t = e.orientation,
          n = e.vertical,
          r = e.horizontal;
        return t ? "vertical" === t ? n : r : {}
      }

      function vh() {
        return vh = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, vh.apply(this, arguments)
      }

      function gh(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      var yh = function () {
        function e(e) {
          var t = this;
          this.map = {}, this.called = !1, this.assert = function () {
            if (t.called) throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");
            t.called = !0
          }, this.parts = function () {
            t.assert();
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            for (var o = 0, a = n; o < a.length; o++) {
              var i = a[o];
              t.map[i] = t.toPart(i)
            }
            return t
          }, this.extend = function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            for (var o = 0, a = n; o < a.length; o++) {
              var i = a[o];
              i in t.map || (t.map[i] = t.toPart(i))
            }
            return t
          }, this.toPart = function (e) {
            var n = "chakra-" + (["container", "root"].includes(null != e ? e : "") ? [t.name] : [t.name, e]).filter(Boolean).join("__");
            return {
              className: n,
              selector: "." + n,
              toString: function () {
                return e
              }
            }
          }, this.__type = {}
        }
        var t, n, r;
        return t = e, (n = [{
          key: "selectors",
          get: function () {
            return _(Object.entries(this.map).map((function (e) {
              return [e[0], e[1].selector]
            })))
          }
        }, {
          key: "classNames",
          get: function () {
            return _(Object.entries(this.map).map((function (e) {
              return [e[0], e[1].className]
            })))
          }
        }, {
          key: "keys",
          get: function () {
            return Object.keys(this.map)
          }
        }]) && gh(t.prototype, n), r && gh(t, r), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e
      }();

      function bh(e) {
        return new yh(e)
      }

      function xh(e) {
        return v(e) && e.reference ? e.reference : String(e)
      }
      var wh = function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return n.map(xh).join(" " + e + " ").replace(/calc/g, "")
        },
        kh = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return "calc(" + wh.apply(void 0, ["+"].concat(t)) + ")"
        },
        Sh = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return "calc(" + wh.apply(void 0, ["-"].concat(t)) + ")"
        },
        Eh = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return "calc(" + wh.apply(void 0, ["*"].concat(t)) + ")"
        },
        Ch = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return "calc(" + wh.apply(void 0, ["/"].concat(t)) + ")"
        },
        _h = function (e) {
          var t = xh(e);
          return null == t || Number.isNaN(parseFloat(t)) ? Eh(t, -1) : String(t).startsWith("-") ? String(t).slice(1) : "-" + t
        },
        Ph = Object.assign((function (e) {
          return {
            add: function () {
              for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
              return Ph(kh.apply(void 0, [e].concat(n)))
            },
            subtract: function () {
              for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
              return Ph(Sh.apply(void 0, [e].concat(n)))
            },
            multiply: function () {
              for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
              return Ph(Eh.apply(void 0, [e].concat(n)))
            },
            divide: function () {
              for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
              return Ph(Ch.apply(void 0, [e].concat(n)))
            },
            negate: function () {
              return Ph(_h(e))
            },
            toString: function () {
              return e.toString()
            }
          }
        }), {
          add: kh,
          subtract: Sh,
          multiply: Eh,
          divide: Ch,
          negate: _h
        });

      function Th(e) {
        var t = function (e, t) {
          return void 0 === t && (t = "-"), e.replace(/\s+/g, t)
        }(e.toString());
        return t.includes("\\.") ? e : function (e) {
          return !Number.isInteger(parseFloat(e.toString()))
        }(e) ? t.replace(".", "\\.") : e
      }

      function Ah(e, t) {
        return "var(" + Th(e) + (t ? ", " + t : "") + ")"
      }

      function Rh(e, t) {
        return void 0 === t && (t = ""), "--" + function (e, t) {
          return void 0 === t && (t = ""), [t, Th(e)].filter(Boolean).join("-")
        }(e, t)
      }

      function zh(e, t) {
        var n = Rh(e, null == t ? void 0 : t.prefix);
        return {
          variable: n,
          reference: Ah(n, Oh(null == t ? void 0 : t.fallback))
        }
      }

      function Oh(e) {
        return "string" === typeof e ? e : null == e ? void 0 : e.reference
      }
      var Mh = bh("accordion").parts("root", "container", "button", "panel").extend("icon"),
        jh = bh("alert").parts("title", "description", "container").extend("icon", "spinner"),
        Lh = bh("avatar").parts("label", "badge", "container").extend("excessLabel", "group"),
        Fh = bh("breadcrumb").parts("link", "item", "container").extend("separator"),
        Ih = (bh("button").parts(), bh("checkbox").parts("control", "icon", "container").extend("label")),
        Bh = (bh("progress").parts("track", "filledTrack").extend("label"), bh("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer")),
        Dh = bh("editable").parts("preview", "input", "textarea"),
        Nh = bh("form").parts("container", "requiredIndicator", "helperText"),
        Vh = bh("formError").parts("text", "icon"),
        Wh = bh("input").parts("addon", "field", "element"),
        Uh = bh("list").parts("container", "item", "icon"),
        Hh = bh("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"),
        $h = bh("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"),
        qh = bh("numberinput").parts("root", "field", "stepperGroup", "stepper"),
        Yh = (bh("pininput").parts("field"), bh("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton")),
        Xh = bh("progress").parts("label", "filledTrack", "track"),
        Qh = bh("radio").parts("container", "control", "label"),
        Gh = bh("select").parts("field", "icon"),
        Kh = bh("slider").parts("container", "track", "thumb", "filledTrack"),
        Zh = bh("stat").parts("container", "label", "helpText", "number", "icon"),
        Jh = bh("switch").parts("container", "track", "thumb"),
        em = bh("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption"),
        tm = bh("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator"),
        nm = bh("tag").parts("container", "label", "closeButton"),
        rm = {
          letterSpacings: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em"
          },
          lineHeights: {
            normal: "normal",
            none: 1,
            shorter: 1.25,
            short: 1.375,
            base: 1.5,
            tall: 1.625,
            taller: "2",
            3: ".75rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem"
          },
          fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
          },
          fonts: {
            heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
          },
          fontSizes: {
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem"
          }
        },
        om = {
          root: {},
          container: {
            borderTopWidth: "1px",
            borderColor: "inherit",
            _last: {
              borderBottomWidth: "1px"
            }
          },
          button: {
            transitionProperty: "common",
            transitionDuration: "normal",
            fontSize: "1rem",
            _focusVisible: {
              boxShadow: "outline"
            },
            _hover: {
              bg: "blackAlpha.50"
            },
            _disabled: {
              opacity: .4,
              cursor: "not-allowed"
            },
            px: 4,
            py: 2
          },
          panel: {
            pt: 2,
            px: 4,
            pb: 5
          },
          icon: {
            fontSize: "1.25em"
          }
        },
        am = {
          parts: Mh.keys,
          baseStyle: om
        };

      function im(e) {
        var t = e.theme,
          n = e.colorScheme;
        return hh(sh(t, n + ".100", n), dh(n + ".200", .16)(t))(e)
      }
      var lm = {
          subtle: function (e) {
            var t = e.colorScheme;
            return {
              container: {
                bg: im(e)
              },
              icon: {
                color: hh(t + ".500", t + ".200")(e)
              },
              spinner: {
                color: hh(t + ".500", t + ".200")(e)
              }
            }
          },
          "left-accent": function (e) {
            var t = e.colorScheme;
            return {
              container: {
                paddingStart: 3,
                borderStartWidth: "4px",
                borderStartColor: hh(t + ".500", t + ".200")(e),
                bg: im(e)
              },
              icon: {
                color: hh(t + ".500", t + ".200")(e)
              },
              spinner: {
                color: hh(t + ".500", t + ".200")(e)
              }
            }
          },
          "top-accent": function (e) {
            var t = e.colorScheme;
            return {
              container: {
                pt: 2,
                borderTopWidth: "4px",
                borderTopColor: hh(t + ".500", t + ".200")(e),
                bg: im(e)
              },
              icon: {
                color: hh(t + ".500", t + ".200")(e)
              },
              spinner: {
                color: hh(t + ".500", t + ".200")(e)
              }
            }
          },
          solid: function (e) {
            var t = e.colorScheme;
            return {
              container: {
                bg: hh(t + ".500", t + ".200")(e),
                color: hh("white", "gray.900")(e)
              }
            }
          }
        },
        um = {
          parts: jh.keys,
          baseStyle: {
            container: {
              px: 4,
              py: 3
            },
            title: {
              fontWeight: "bold",
              lineHeight: 6,
              marginEnd: 2
            },
            description: {
              lineHeight: 6
            },
            icon: {
              flexShrink: 0,
              marginEnd: 3,
              w: 5,
              h: 6
            },
            spinner: {
              flexShrink: 0,
              marginEnd: 3,
              w: 5,
              h: 5
            }
          },
          variants: lm,
          defaultProps: {
            variant: "subtle",
            colorScheme: "blue"
          }
        },
        sm = function (e) {
          return {
            transform: "translate(25%, 25%)",
            borderRadius: "full",
            border: "0.2em solid",
            borderColor: hh("white", "gray.800")(e)
          }
        },
        cm = function (e) {
          return {
            bg: hh("gray.200", "whiteAlpha.400")(e)
          }
        },
        dm = function (e) {
          var t = e.name,
            n = e.theme,
            r = t ? ph({
              string: t
            }) : "gray.400",
            o = function (e) {
              return function (t) {
                return "dark" === ch(e)(t)
              }
            }(r)(n),
            a = "white";
          return o || (a = "gray.800"), {
            bg: r,
            color: a,
            borderColor: hh("white", "gray.800")(e),
            verticalAlign: "top"
          }
        };

      function fm(e) {
        var t = "100%" !== e ? Ip[e] : void 0;
        return {
          container: {
            width: e,
            height: e,
            fontSize: "calc(" + (null != t ? t : e) + " / 2.5)"
          },
          excessLabel: {
            width: e,
            height: e
          },
          label: {
            fontSize: "calc(" + (null != t ? t : e) + " / 2.5)",
            lineHeight: "100%" !== e ? null != t ? t : e : void 0
          }
        }
      }
      var pm, hm, mm, vm = {
          "2xs": fm(4),
          xs: fm(6),
          sm: fm(8),
          md: fm(12),
          lg: fm(16),
          xl: fm(24),
          "2xl": fm(32),
          full: fm("100%")
        },
        gm = {
          parts: Lh.keys,
          baseStyle: function (e) {
            return {
              badge: sm(e),
              excessLabel: cm(e),
              container: dm(e)
            }
          },
          sizes: vm,
          defaultProps: {
            size: "md"
          }
        },
        ym = {
          solid: function (e) {
            var t = e.colorScheme,
              n = e.theme;
            return {
              bg: hh(t + ".500", dh(t + ".500", .6)(n))(e),
              color: hh("white", "whiteAlpha.800")(e)
            }
          },
          subtle: function (e) {
            var t = e.colorScheme,
              n = e.theme;
            return {
              bg: hh(t + ".100", dh(t + ".200", .16)(n))(e),
              color: hh(t + ".800", t + ".200")(e)
            }
          },
          outline: function (e) {
            var t = e.colorScheme,
              n = e.theme,
              r = dh(t + ".200", .8)(n),
              o = hh(sh(n, t + ".500"), r)(e);
            return {
              color: o,
              boxShadow: "inset 0 0 0px 1px " + o
            }
          }
        },
        bm = {
          baseStyle: {
            px: 1,
            textTransform: "uppercase",
            fontSize: "xs",
            borderRadius: "sm",
            fontWeight: "bold"
          },
          variants: ym,
          defaultProps: {
            variant: "subtle",
            colorScheme: "gray"
          }
        },
        xm = {
          link: {
            transitionProperty: "common",
            transitionDuration: "fast",
            transitionTimingFunction: "ease-out",
            cursor: "pointer",
            textDecoration: "none",
            outline: "none",
            color: "inherit",
            _hover: {
              textDecoration: "underline"
            },
            _focusVisible: {
              boxShadow: "outline"
            }
          }
        },
        wm = {
          parts: Fh.keys,
          baseStyle: xm
        },
        km = function (e) {
          var t = e.colorScheme,
            n = e.theme;
          if ("gray" === t) return {
            color: hh("inherit", "whiteAlpha.900")(e),
            _hover: {
              bg: hh("gray.100", "whiteAlpha.200")(e)
            },
            _active: {
              bg: hh("gray.200", "whiteAlpha.300")(e)
            }
          };
          var r = dh(t + ".200", .12)(n),
            o = dh(t + ".200", .24)(n);
          return {
            color: hh(t + ".600", t + ".200")(e),
            bg: "transparent",
            _hover: {
              bg: hh(t + ".50", r)(e)
            },
            _active: {
              bg: hh(t + ".100", o)(e)
            }
          }
        },
        Sm = {
          yellow: {
            bg: "yellow.400",
            color: "black",
            hoverBg: "yellow.500",
            activeBg: "yellow.600"
          },
          cyan: {
            bg: "cyan.400",
            color: "black",
            hoverBg: "cyan.500",
            activeBg: "cyan.600"
          }
        },
        Em = {
          ghost: km,
          outline: function (e) {
            var t = e.colorScheme,
              n = hh("gray.200", "whiteAlpha.300")(e);
            return Fp({
              border: "1px solid",
              borderColor: "gray" === t ? n : "currentColor",
              ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
                marginEnd: "-1px"
              }
            }, km(e))
          },
          solid: function (e) {
            var t, n = e.colorScheme;
            if ("gray" === n) {
              var r = hh("gray.100", "whiteAlpha.200")(e);
              return {
                bg: r,
                _hover: {
                  bg: hh("gray.200", "whiteAlpha.300")(e),
                  _disabled: {
                    bg: r
                  }
                },
                _active: {
                  bg: hh("gray.300", "whiteAlpha.400")(e)
                }
              }
            }
            var o = null != (t = Sm[n]) ? t : {},
              a = o.bg,
              i = void 0 === a ? n + ".500" : a,
              l = o.color,
              u = void 0 === l ? "white" : l,
              s = o.hoverBg,
              c = void 0 === s ? n + ".600" : s,
              d = o.activeBg,
              f = void 0 === d ? n + ".700" : d,
              p = hh(i, n + ".200")(e);
            return {
              bg: p,
              color: hh(u, "gray.800")(e),
              _hover: {
                bg: hh(c, n + ".300")(e),
                _disabled: {
                  bg: p
                }
              },
              _active: {
                bg: hh(f, n + ".400")(e)
              }
            }
          },
          link: function (e) {
            var t = e.colorScheme;
            return {
              padding: 0,
              height: "auto",
              lineHeight: "normal",
              verticalAlign: "baseline",
              color: hh(t + ".500", t + ".200")(e),
              _hover: {
                textDecoration: "underline",
                _disabled: {
                  textDecoration: "none"
                }
              },
              _active: {
                color: hh(t + ".700", t + ".500")(e)
              }
            }
          },
          unstyled: {
            bg: "none",
            color: "inherit",
            display: "inline",
            lineHeight: "inherit",
            m: 0,
            p: 0
          }
        },
        Cm = {
          baseStyle: {
            lineHeight: "1.2",
            borderRadius: "md",
            fontWeight: "semibold",
            transitionProperty: "common",
            transitionDuration: "normal",
            _focusVisible: {
              boxShadow: "outline"
            },
            _disabled: {
              opacity: .4,
              cursor: "not-allowed",
              boxShadow: "none"
            },
            _hover: {
              _disabled: {
                bg: "initial"
              }
            }
          },
          variants: Em,
          sizes: {
            lg: {
              h: 12,
              minW: 12,
              fontSize: "lg",
              px: 6
            },
            md: {
              h: 10,
              minW: 10,
              fontSize: "md",
              px: 4
            },
            sm: {
              h: 8,
              minW: 8,
              fontSize: "sm",
              px: 3
            },
            xs: {
              h: 6,
              minW: 6,
              fontSize: "xs",
              px: 2
            }
          },
          defaultProps: {
            variant: "solid",
            size: "md",
            colorScheme: "gray"
          }
        },
        _m = function (e) {
          var t = e.colorScheme;
          return {
            w: "100%",
            transitionProperty: "box-shadow",
            transitionDuration: "normal",
            border: "2px solid",
            borderRadius: "sm",
            borderColor: "inherit",
            color: "white",
            _checked: {
              bg: hh(t + ".500", t + ".200")(e),
              borderColor: hh(t + ".500", t + ".200")(e),
              color: hh("white", "gray.900")(e),
              _hover: {
                bg: hh(t + ".600", t + ".300")(e),
                borderColor: hh(t + ".600", t + ".300")(e)
              },
              _disabled: {
                borderColor: hh("gray.200", "transparent")(e),
                bg: hh("gray.200", "whiteAlpha.300")(e),
                color: hh("gray.500", "whiteAlpha.500")(e)
              }
            },
            _indeterminate: {
              bg: hh(t + ".500", t + ".200")(e),
              borderColor: hh(t + ".500", t + ".200")(e),
              color: hh("white", "gray.900")(e)
            },
            _disabled: {
              bg: hh("gray.100", "whiteAlpha.100")(e),
              borderColor: hh("gray.100", "transparent")(e)
            },
            _focusVisible: {
              boxShadow: "outline"
            },
            _invalid: {
              borderColor: hh("red.500", "red.300")(e)
            }
          }
        },
        Pm = {
          _disabled: {
            cursor: "not-allowed"
          }
        },
        Tm = {
          userSelect: "none",
          _disabled: {
            opacity: .4
          }
        },
        Am = {
          transitionProperty: "transform",
          transitionDuration: "normal"
        },
        Rm = {
          parts: Ih.keys,
          baseStyle: function (e) {
            return {
              icon: Am,
              container: Pm,
              control: _m(e),
              label: Tm
            }
          },
          sizes: {
            sm: {
              control: {
                h: 3,
                w: 3
              },
              label: {
                fontSize: "sm"
              },
              icon: {
                fontSize: "0.45rem"
              }
            },
            md: {
              control: {
                w: 4,
                h: 4
              },
              label: {
                fontSize: "md"
              },
              icon: {
                fontSize: "0.625rem"
              }
            },
            lg: {
              control: {
                w: 5,
                h: 5
              },
              label: {
                fontSize: "lg"
              },
              icon: {
                fontSize: "0.625rem"
              }
            }
          },
          defaultProps: {
            size: "md",
            colorScheme: "blue"
          }
        },
        zm = zh("close-button-size"),
        Om = {
          baseStyle: function (e) {
            var t = hh("blackAlpha.100", "whiteAlpha.100")(e),
              n = hh("blackAlpha.200", "whiteAlpha.200")(e);
            return {
              w: [zm.reference],
              h: [zm.reference],
              borderRadius: "md",
              transitionProperty: "common",
              transitionDuration: "normal",
              _disabled: {
                opacity: .4,
                cursor: "not-allowed",
                boxShadow: "none"
              },
              _hover: {
                bg: t
              },
              _active: {
                bg: n
              },
              _focusVisible: {
                boxShadow: "outline"
              }
            }
          },
          sizes: {
            lg: (pm = {}, pm[zm.variable] = "40px", pm.fontSize = "16px", pm),
            md: (hm = {}, hm[zm.variable] = "32px", hm.fontSize = "12px", hm),
            sm: (mm = {}, mm[zm.variable] = "24px", mm.fontSize = "10px", mm)
          },
          defaultProps: {
            size: "md"
          }
        },
        Mm = {
          baseStyle: {
            fontFamily: "mono",
            fontSize: "sm",
            px: "0.2em",
            borderRadius: "sm"
          },
          variants: bm.variants,
          defaultProps: bm.defaultProps
        },
        jm = {
          baseStyle: {
            w: "100%",
            mx: "auto",
            maxW: "60ch",
            px: "1rem"
          }
        },
        Lm = {
          baseStyle: {
            opacity: .6,
            borderColor: "inherit"
          },
          variants: {
            solid: {
              borderStyle: "solid"
            },
            dashed: {
              borderStyle: "dashed"
            }
          },
          defaultProps: {
            variant: "solid"
          }
        };

      function Fm(e) {
        return "full" === e ? {
          dialog: {
            maxW: "100vw",
            h: "100vh"
          }
        } : {
          dialog: {
            maxW: e
          }
        }
      }
      var Im = {
          bg: "blackAlpha.600",
          zIndex: "overlay"
        },
        Bm = {
          display: "flex",
          zIndex: "modal",
          justifyContent: "center"
        },
        Dm = function (e) {
          return Fp({}, e.isFullHeight && {
            height: "100vh"
          }, {
            zIndex: "modal",
            maxH: "100vh",
            bg: hh("white", "gray.700")(e),
            color: "inherit",
            boxShadow: hh("lg", "dark-lg")(e)
          })
        },
        Nm = {
          px: 6,
          py: 4,
          fontSize: "xl",
          fontWeight: "semibold"
        },
        Vm = {
          position: "absolute",
          top: 2,
          insetEnd: 3
        },
        Wm = {
          px: 6,
          py: 2,
          flex: 1,
          overflow: "auto"
        },
        Um = {
          px: 6,
          py: 4
        },
        Hm = {
          xs: Fm("xs"),
          sm: Fm("md"),
          md: Fm("lg"),
          lg: Fm("2xl"),
          xl: Fm("4xl"),
          full: Fm("full")
        },
        $m = {
          parts: Bh.keys,
          baseStyle: function (e) {
            return {
              overlay: Im,
              dialogContainer: Bm,
              dialog: Dm(e),
              header: Nm,
              closeButton: Vm,
              body: Wm,
              footer: Um
            }
          },
          sizes: Hm,
          defaultProps: {
            size: "xs"
          }
        },
        qm = {
          preview: {
            borderRadius: "md",
            py: "3px",
            transitionProperty: "common",
            transitionDuration: "normal"
          },
          input: {
            borderRadius: "md",
            py: "3px",
            transitionProperty: "common",
            transitionDuration: "normal",
            width: "full",
            _focusVisible: {
              boxShadow: "outline"
            },
            _placeholder: {
              opacity: .6
            }
          },
          textarea: {
            borderRadius: "md",
            py: "3px",
            transitionProperty: "common",
            transitionDuration: "normal",
            width: "full",
            _focusVisible: {
              boxShadow: "outline"
            },
            _placeholder: {
              opacity: .6
            }
          }
        },
        Ym = {
          parts: Dh.keys,
          baseStyle: qm
        },
        Xm = function (e) {
          return {
            marginStart: 1,
            color: hh("red.500", "red.300")(e)
          }
        },
        Qm = function (e) {
          return {
            mt: 2,
            color: hh("gray.500", "whiteAlpha.600")(e),
            lineHeight: "normal",
            fontSize: "sm"
          }
        },
        Gm = {
          parts: Nh.keys,
          baseStyle: function (e) {
            return {
              container: {
                width: "100%",
                position: "relative"
              },
              requiredIndicator: Xm(e),
              helperText: Qm(e)
            }
          }
        },
        Km = function (e) {
          return {
            color: hh("red.500", "red.300")(e),
            mt: 2,
            fontSize: "sm",
            lineHeight: "normal"
          }
        },
        Zm = function (e) {
          return {
            marginEnd: "0.5em",
            color: hh("red.500", "red.300")(e)
          }
        },
        Jm = {
          parts: Vh.keys,
          baseStyle: function (e) {
            return {
              text: Km(e),
              icon: Zm(e)
            }
          }
        },
        ev = {
          baseStyle: {
            fontSize: "md",
            marginEnd: 3,
            mb: 2,
            fontWeight: "medium",
            transitionProperty: "common",
            transitionDuration: "normal",
            opacity: 1,
            _disabled: {
              opacity: .4
            }
          }
        },
        tv = {
          baseStyle: {
            fontFamily: "heading",
            fontWeight: "bold"
          },
          sizes: {
            "4xl": {
              fontSize: ["6xl", null, "7xl"],
              lineHeight: 1
            },
            "3xl": {
              fontSize: ["5xl", null, "6xl"],
              lineHeight: 1
            },
            "2xl": {
              fontSize: ["4xl", null, "5xl"],
              lineHeight: [1.2, null, 1]
            },
            xl: {
              fontSize: ["3xl", null, "4xl"],
              lineHeight: [1.33, null, 1.2]
            },
            lg: {
              fontSize: ["2xl", null, "3xl"],
              lineHeight: [1.33, null, 1.2]
            },
            md: {
              fontSize: "xl",
              lineHeight: 1.2
            },
            sm: {
              fontSize: "md",
              lineHeight: 1.2
            },
            xs: {
              fontSize: "sm",
              lineHeight: 1.2
            }
          },
          defaultProps: {
            size: "xl"
          }
        },
        nv = {
          lg: {
            fontSize: "lg",
            px: 4,
            h: 12,
            borderRadius: "md"
          },
          md: {
            fontSize: "md",
            px: 4,
            h: 10,
            borderRadius: "md"
          },
          sm: {
            fontSize: "sm",
            px: 3,
            h: 8,
            borderRadius: "sm"
          },
          xs: {
            fontSize: "xs",
            px: 2,
            h: 6,
            borderRadius: "sm"
          }
        },
        rv = {
          lg: {
            field: nv.lg,
            addon: nv.lg
          },
          md: {
            field: nv.md,
            addon: nv.md
          },
          sm: {
            field: nv.sm,
            addon: nv.sm
          },
          xs: {
            field: nv.xs,
            addon: nv.xs
          }
        };

      function ov(e) {
        var t = e.focusBorderColor,
          n = e.errorBorderColor;
        return {
          focusBorderColor: t || hh("blue.500", "blue.300")(e),
          errorBorderColor: n || hh("red.500", "red.300")(e)
        }
      }
      var av = {
          outline: function (e) {
            var t = e.theme,
              n = ov(e),
              r = n.focusBorderColor,
              o = n.errorBorderColor;
            return {
              field: {
                border: "1px solid",
                borderColor: "inherit",
                bg: "inherit",
                _hover: {
                  borderColor: hh("gray.300", "whiteAlpha.400")(e)
                },
                _readOnly: {
                  boxShadow: "none !important",
                  userSelect: "all"
                },
                _disabled: {
                  opacity: .4,
                  cursor: "not-allowed"
                },
                _invalid: {
                  borderColor: sh(t, o),
                  boxShadow: "0 0 0 1px " + sh(t, o)
                },
                _focusVisible: {
                  zIndex: 1,
                  borderColor: sh(t, r),
                  boxShadow: "0 0 0 1px " + sh(t, r)
                }
              },
              addon: {
                border: "1px solid",
                borderColor: hh("inherit", "whiteAlpha.50")(e),
                bg: hh("gray.100", "whiteAlpha.300")(e)
              }
            }
          },
          filled: function (e) {
            var t = e.theme,
              n = ov(e),
              r = n.focusBorderColor,
              o = n.errorBorderColor;
            return {
              field: {
                border: "2px solid",
                borderColor: "transparent",
                bg: hh("gray.100", "whiteAlpha.50")(e),
                _hover: {
                  bg: hh("gray.200", "whiteAlpha.100")(e)
                },
                _readOnly: {
                  boxShadow: "none !important",
                  userSelect: "all"
                },
                _disabled: {
                  opacity: .4,
                  cursor: "not-allowed"
                },
                _invalid: {
                  borderColor: sh(t, o)
                },
                _focusVisible: {
                  bg: "transparent",
                  borderColor: sh(t, r)
                }
              },
              addon: {
                border: "2px solid",
                borderColor: "transparent",
                bg: hh("gray.100", "whiteAlpha.50")(e)
              }
            }
          },
          flushed: function (e) {
            var t = e.theme,
              n = ov(e),
              r = n.focusBorderColor,
              o = n.errorBorderColor;
            return {
              field: {
                borderBottom: "1px solid",
                borderColor: "inherit",
                borderRadius: 0,
                px: 0,
                bg: "transparent",
                _readOnly: {
                  boxShadow: "none !important",
                  userSelect: "all"
                },
                _invalid: {
                  borderColor: sh(t, o),
                  boxShadow: "0px 1px 0px 0px " + sh(t, o)
                },
                _focusVisible: {
                  borderColor: sh(t, r),
                  boxShadow: "0px 1px 0px 0px " + sh(t, r)
                }
              },
              addon: {
                borderBottom: "2px solid",
                borderColor: "inherit",
                borderRadius: 0,
                px: 0,
                bg: "transparent"
              }
            }
          },
          unstyled: {
            field: {
              bg: "transparent",
              px: 0,
              height: "auto"
            },
            addon: {
              bg: "transparent",
              px: 0,
              height: "auto"
            }
          }
        },
        iv = {
          parts: Wh.keys,
          baseStyle: {
            field: {
              width: "100%",
              minWidth: 0,
              outline: 0,
              position: "relative",
              appearance: "none",
              transitionProperty: "common",
              transitionDuration: "normal"
            }
          },
          sizes: rv,
          variants: av,
          defaultProps: {
            size: "md",
            variant: "outline"
          }
        },
        lv = {
          baseStyle: function (e) {
            return {
              bg: hh("gray.100", "whiteAlpha")(e),
              borderRadius: "md",
              borderWidth: "1px",
              borderBottomWidth: "3px",
              fontSize: "0.8em",
              fontWeight: "bold",
              lineHeight: "normal",
              px: "0.4em",
              whiteSpace: "nowrap"
            }
          }
        },
        uv = {
          baseStyle: {
            transitionProperty: "common",
            transitionDuration: "fast",
            transitionTimingFunction: "ease-out",
            cursor: "pointer",
            textDecoration: "none",
            outline: "none",
            color: "inherit",
            _hover: {
              textDecoration: "underline"
            },
            _focusVisible: {
              boxShadow: "outline"
            }
          }
        },
        sv = {
          container: {},
          item: {},
          icon: {
            marginEnd: "0.5rem",
            display: "inline",
            verticalAlign: "text-bottom"
          }
        },
        cv = {
          parts: Uh.keys,
          baseStyle: sv
        },
        dv = function (e) {
          return {
            bg: hh("#fff", "gray.700")(e),
            boxShadow: hh("sm", "dark-lg")(e),
            color: "inherit",
            minW: "3xs",
            py: "2",
            zIndex: 1,
            borderRadius: "md",
            borderWidth: "1px"
          }
        },
        fv = function (e) {
          return {
            py: "0.4rem",
            px: "0.8rem",
            transitionProperty: "background",
            transitionDuration: "ultra-fast",
            transitionTimingFunction: "ease-in",
            _focus: {
              bg: hh("gray.100", "whiteAlpha.100")(e)
            },
            _active: {
              bg: hh("gray.200", "whiteAlpha.200")(e)
            },
            _expanded: {
              bg: hh("gray.100", "whiteAlpha.100")(e)
            },
            _disabled: {
              opacity: .4,
              cursor: "not-allowed"
            }
          }
        },
        pv = {
          mx: 4,
          my: 2,
          fontWeight: "semibold",
          fontSize: "sm"
        },
        hv = {
          opacity: .6
        },
        mv = {
          border: 0,
          borderBottom: "1px solid",
          borderColor: "inherit",
          my: "0.5rem",
          opacity: .6
        },
        vv = {
          transitionProperty: "common",
          transitionDuration: "normal"
        },
        gv = {
          parts: Hh.keys,
          baseStyle: function (e) {
            return {
              button: vv,
              list: dv(e),
              item: fv(e),
              groupTitle: pv,
              command: hv,
              divider: mv
            }
          }
        },
        yv = {
          bg: "blackAlpha.600",
          zIndex: "modal"
        },
        bv = function (e) {
          return {
            display: "flex",
            zIndex: "modal",
            justifyContent: "center",
            alignItems: e.isCentered ? "center" : "flex-start",
            overflow: "inside" === e.scrollBehavior ? "hidden" : "auto"
          }
        },
        xv = function (e) {
          var t = e.scrollBehavior;
          return {
            borderRadius: "md",
            bg: hh("white", "gray.700")(e),
            color: "inherit",
            my: "3.75rem",
            zIndex: "modal",
            maxH: "inside" === t ? "calc(100% - 7.5rem)" : void 0,
            boxShadow: hh("lg", "dark-lg")(e)
          }
        },
        wv = {
          px: 6,
          py: 4,
          fontSize: "xl",
          fontWeight: "semibold"
        },
        kv = {
          position: "absolute",
          top: 2,
          insetEnd: 3
        },
        Sv = function (e) {
          return {
            px: 6,
            py: 2,
            flex: 1,
            overflow: "inside" === e.scrollBehavior ? "auto" : void 0
          }
        },
        Ev = {
          px: 6,
          py: 4
        };

      function Cv(e) {
        return "full" === e ? {
          dialog: {
            maxW: "100vw",
            minH: "100vh",
            "@supports(min-height: -webkit-fill-available)": {
              minH: "-webkit-fill-available"
            },
            my: 0
          }
        } : {
          dialog: {
            maxW: e
          }
        }
      }
      var _v, Pv, Tv, Av = {
          xs: Cv("xs"),
          sm: Cv("sm"),
          md: Cv("md"),
          lg: Cv("lg"),
          xl: Cv("xl"),
          "2xl": Cv("2xl"),
          "3xl": Cv("3xl"),
          "4xl": Cv("4xl"),
          "5xl": Cv("5xl"),
          "6xl": Cv("6xl"),
          full: Cv("full")
        },
        Rv = {
          parts: $h.keys,
          baseStyle: function (e) {
            return {
              overlay: yv,
              dialogContainer: bv(e),
              dialog: xv(e),
              header: wv,
              closeButton: kv,
              body: Sv(e),
              footer: Ev
            }
          },
          sizes: Av,
          defaultProps: {
            size: "md"
          }
        },
        zv = iv.variants,
        Ov = iv.defaultProps,
        Mv = zh("number-input-stepper-width"),
        jv = zh("number-input-input-padding"),
        Lv = Ph(Mv).add("0.5rem").toString(),
        Fv = ((_v = {})[Mv.variable] = "24px", _v[jv.variable] = Lv, _v),
        Iv = null != (Pv = null == (Tv = iv.baseStyle) ? void 0 : Tv.field) ? Pv : {},
        Bv = {
          width: [Mv.reference]
        },
        Dv = function (e) {
          return {
            borderStart: "1px solid",
            borderStartColor: hh("inherit", "whiteAlpha.300")(e),
            color: hh("inherit", "whiteAlpha.800")(e),
            _active: {
              bg: hh("gray.200", "whiteAlpha.300")(e)
            },
            _disabled: {
              opacity: .4,
              cursor: "not-allowed"
            }
          }
        };

      function Nv(e) {
        var t, n, r = iv.sizes[e],
          o = {
            lg: "md",
            md: "md",
            sm: "sm",
            xs: "sm"
          },
          a = null != (t = null == (n = r.field) ? void 0 : n.fontSize) ? t : "md",
          i = rm.fontSizes[a];
        return {
          field: Fp({}, r.field, {
            paddingInlineEnd: jv.reference,
            verticalAlign: "top"
          }),
          stepper: {
            fontSize: Ph(i).multiply(.75).toString(),
            _first: {
              borderTopEndRadius: o[e]
            },
            _last: {
              borderBottomEndRadius: o[e],
              mt: "-1px",
              borderTopWidth: 1
            }
          }
        }
      }
      var Vv, Wv = {
          xs: Nv("xs"),
          sm: Nv("sm"),
          md: Nv("md"),
          lg: Nv("lg")
        },
        Uv = {
          parts: qh.keys,
          baseStyle: function (e) {
            return {
              root: Fv,
              field: Iv,
              stepperGroup: Bv,
              stepper: Dv(e)
            }
          },
          sizes: Wv,
          variants: zv,
          defaultProps: Ov
        },
        Hv = {
          baseStyle: Fp({}, iv.baseStyle.field, {
            textAlign: "center"
          }),
          sizes: {
            lg: {
              fontSize: "lg",
              w: 12,
              h: 12,
              borderRadius: "md"
            },
            md: {
              fontSize: "md",
              w: 10,
              h: 10,
              borderRadius: "md"
            },
            sm: {
              fontSize: "sm",
              w: 8,
              h: 8,
              borderRadius: "sm"
            },
            xs: {
              fontSize: "xs",
              w: 6,
              h: 6,
              borderRadius: "sm"
            }
          },
          variants: {
            outline: function (e) {
              var t;
              return null != (t = iv.variants.outline(e).field) ? t : {}
            },
            flushed: function (e) {
              var t;
              return null != (t = iv.variants.flushed(e).field) ? t : {}
            },
            filled: function (e) {
              var t;
              return null != (t = iv.variants.filled(e).field) ? t : {}
            },
            unstyled: null != (Vv = iv.variants.unstyled.field) ? Vv : {}
          },
          defaultProps: iv.defaultProps
        },
        $v = zh("popper-bg"),
        qv = zh("popper-arrow-bg"),
        Yv = zh("popper-arrow-shadow-color"),
        Xv = {
          zIndex: 10
        },
        Qv = function (e) {
          var t, n = hh("white", "gray.700")(e),
            r = hh("gray.200", "whiteAlpha.300")(e);
          return (t = {})[$v.variable] = "colors." + n, t.bg = $v.reference, t[qv.variable] = $v.reference, t[Yv.variable] = "colors." + r, t.width = "xs", t.border = "1px solid", t.borderColor = "inherit", t.borderRadius = "md", t.boxShadow = "sm", t.zIndex = "inherit", t._focusVisible = {
            outline: 0,
            boxShadow: "outline"
          }, t
        },
        Gv = {
          px: 3,
          py: 2,
          borderBottomWidth: "1px"
        },
        Kv = {
          px: 3,
          py: 2
        },
        Zv = {
          px: 3,
          py: 2,
          borderTopWidth: "1px"
        },
        Jv = {
          position: "absolute",
          borderRadius: "md",
          top: 1,
          insetEnd: 2,
          padding: 2
        },
        eg = {
          parts: Yh.keys,
          baseStyle: function (e) {
            return {
              popper: Xv,
              content: Qv(e),
              header: Gv,
              body: Kv,
              footer: Zv,
              arrow: {},
              closeButton: Jv
            }
          }
        };
      var tg = {
          lineHeight: "1",
          fontSize: "0.25em",
          fontWeight: "bold",
          color: "white"
        },
        ng = function (e) {
          return {
            bg: hh("gray.100", "whiteAlpha.300")(e)
          }
        },
        rg = function (e) {
          return Fp({
            transitionProperty: "common",
            transitionDuration: "slow"
          }, function (e) {
            var t = e.colorScheme,
              n = e.theme,
              r = e.isIndeterminate,
              o = e.hasStripe,
              a = hh(fh(), fh("1rem", "rgba(0,0,0,0.1)"))(e),
              i = hh(t + ".500", t + ".200")(e),
              l = "linear-gradient(\n    to right,\n    transparent 0%,\n    " + sh(n, i) + " 50%,\n    transparent 100%\n  )";
            return Fp({}, !r && o && a, r ? {
              bgImage: l
            } : {
              bgColor: i
            })
          }(e))
        },
        og = {
          parts: Xh.keys,
          sizes: {
            xs: {
              track: {
                h: "0.25rem"
              }
            },
            sm: {
              track: {
                h: "0.5rem"
              }
            },
            md: {
              track: {
                h: "0.75rem"
              }
            },
            lg: {
              track: {
                h: "1rem"
              }
            }
          },
          baseStyle: function (e) {
            return {
              label: tg,
              filledTrack: rg(e),
              track: ng(e)
            }
          },
          defaultProps: {
            size: "md",
            colorScheme: "blue"
          }
        },
        ag = function (e) {
          var t = Rm.baseStyle(e).control,
            n = void 0 === t ? {} : t;
          return Fp({}, n, {
            borderRadius: "full",
            _checked: Fp({}, n._checked, {
              _before: {
                content: '""',
                display: "inline-block",
                pos: "relative",
                w: "50%",
                h: "50%",
                borderRadius: "50%",
                bg: "currentColor"
              }
            })
          })
        },
        ig = {
          parts: Qh.keys,
          baseStyle: function (e) {
            return {
              label: Rm.baseStyle(e).label,
              container: Rm.baseStyle(e).container,
              control: ag(e)
            }
          },
          sizes: {
            md: {
              control: {
                w: 4,
                h: 4
              },
              label: {
                fontSize: "md"
              }
            },
            lg: {
              control: {
                w: 5,
                h: 5
              },
              label: {
                fontSize: "lg"
              }
            },
            sm: {
              control: {
                width: 3,
                height: 3
              },
              label: {
                fontSize: "sm"
              }
            }
          },
          defaultProps: {
            size: "md",
            colorScheme: "blue"
          }
        },
        lg = function (e) {
          return Fp({}, iv.baseStyle.field, {
            bg: hh("white", "gray.700")(e),
            appearance: "none",
            paddingBottom: "1px",
            lineHeight: "normal",
            "> option, > optgroup": {
              bg: hh("white", "gray.700")(e)
            }
          })
        },
        ug = {
          width: "1.5rem",
          height: "100%",
          insetEnd: "0.5rem",
          position: "relative",
          color: "currentColor",
          fontSize: "1.25rem",
          _disabled: {
            opacity: .5
          }
        },
        sg = {
          paddingInlineEnd: "2rem"
        },
        cg = s()({}, iv.sizes, {
          lg: {
            field: sg
          },
          md: {
            field: sg
          },
          sm: {
            field: sg
          },
          xs: {
            field: sg,
            icon: {
              insetEnd: "0.25rem"
            }
          }
        }),
        dg = {
          parts: Gh.keys,
          baseStyle: function (e) {
            return {
              field: lg(e),
              icon: ug
            }
          },
          sizes: cg,
          variants: iv.variants,
          defaultProps: iv.defaultProps
        },
        fg = function (e, t) {
          return xr({
            from: {
              borderColor: e,
              background: e
            },
            to: {
              borderColor: t,
              background: t
            }
          })
        },
        pg = {
          baseStyle: function (e) {
            var t = hh("gray.100", "gray.800")(e),
              n = hh("gray.400", "gray.600")(e),
              r = e.startColor,
              o = void 0 === r ? t : r,
              a = e.endColor,
              i = void 0 === a ? n : a,
              l = e.speed,
              u = e.theme,
              s = sh(u, o),
              c = sh(u, i);
            return {
              opacity: .7,
              borderRadius: "2px",
              borderColor: s,
              background: c,
              animation: l + "s linear infinite alternate " + fg(s, c)
            }
          }
        },
        hg = {
          baseStyle: function (e) {
            return {
              borderRadius: "md",
              fontWeight: "semibold",
              _focusVisible: {
                boxShadow: "outline",
                padding: "1rem",
                position: "fixed",
                top: "1.5rem",
                insetStart: "1.5rem",
                bg: hh("white", "gray.700")(e)
              }
            }
          }
        };
      var mg, vg, gg, yg, bg, xg, wg, kg, Sg, Eg, Cg, _g, Pg, Tg = function (e) {
          return Fp({
            display: "inline-block",
            position: "relative",
            cursor: "pointer",
            _disabled: {
              opacity: .6,
              cursor: "default",
              pointerEvents: "none"
            }
          }, mh({
            orientation: e.orientation,
            vertical: {
              h: "100%"
            },
            horizontal: {
              w: "100%"
            }
          }))
        },
        Ag = function (e) {
          return {
            overflow: "hidden",
            borderRadius: "sm",
            bg: hh("gray.200", "whiteAlpha.200")(e),
            _disabled: {
              bg: hh("gray.300", "whiteAlpha.300")(e)
            }
          }
        },
        Rg = function (e) {
          return Fp({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            outline: 0,
            zIndex: 1,
            borderRadius: "full",
            bg: "white",
            boxShadow: "base",
            border: "1px solid",
            borderColor: "transparent",
            transitionProperty: "transform",
            transitionDuration: "normal",
            _focusVisible: {
              boxShadow: "outline"
            },
            _disabled: {
              bg: "gray.300"
            }
          }, function (e) {
            return mh({
              orientation: e.orientation,
              vertical: {
                left: "50%",
                transform: "translateX(-50%)",
                _active: {
                  transform: "translateX(-50%) scale(1.15)"
                }
              },
              horizontal: {
                top: "50%",
                transform: "translateY(-50%)",
                _active: {
                  transform: "translateY(-50%) scale(1.15)"
                }
              }
            })
          }(e))
        },
        zg = function (e) {
          var t = e.colorScheme;
          return {
            width: "inherit",
            height: "inherit",
            bg: hh(t + ".500", t + ".200")(e)
          }
        },
        Og = {
          lg: function (e) {
            return {
              thumb: {
                w: "16px",
                h: "16px"
              },
              track: mh({
                orientation: e.orientation,
                horizontal: {
                  h: "4px"
                },
                vertical: {
                  w: "4px"
                }
              })
            }
          },
          md: function (e) {
            return {
              thumb: {
                w: "14px",
                h: "14px"
              },
              track: mh({
                orientation: e.orientation,
                horizontal: {
                  h: "4px"
                },
                vertical: {
                  w: "4px"
                }
              })
            }
          },
          sm: function (e) {
            return {
              thumb: {
                w: "10px",
                h: "10px"
              },
              track: mh({
                orientation: e.orientation,
                horizontal: {
                  h: "2px"
                },
                vertical: {
                  w: "2px"
                }
              })
            }
          }
        },
        Mg = {
          parts: Kh.keys,
          sizes: Og,
          baseStyle: function (e) {
            return {
              container: Tg(e),
              track: Ag(e),
              thumb: Rg(e),
              filledTrack: zg(e)
            }
          },
          defaultProps: {
            size: "md",
            colorScheme: "blue"
          }
        },
        jg = zh("spinner-size"),
        Lg = {
          baseStyle: {
            width: [jg.reference],
            height: [jg.reference]
          },
          sizes: {
            xs: (mg = {}, mg[jg.variable] = "0.75rem", mg),
            sm: (vg = {}, vg[jg.variable] = "1rem", vg),
            md: (gg = {}, gg[jg.variable] = "1.5rem", gg),
            lg: (yg = {}, yg[jg.variable] = "2rem", yg),
            xl: (bg = {}, bg[jg.variable] = "3rem", bg)
          },
          defaultProps: {
            size: "md"
          }
        },
        Fg = {
          container: {},
          label: {
            fontWeight: "medium"
          },
          helpText: {
            opacity: .8,
            marginBottom: 2
          },
          number: {
            verticalAlign: "baseline",
            fontWeight: "semibold"
          },
          icon: {
            marginEnd: 1,
            w: "14px",
            h: "14px",
            verticalAlign: "middle"
          }
        },
        Ig = {
          parts: Zh.keys,
          baseStyle: Fg,
          sizes: {
            md: {
              label: {
                fontSize: "sm"
              },
              helpText: {
                fontSize: "sm"
              },
              number: {
                fontSize: "2xl"
              }
            }
          },
          defaultProps: {
            size: "md"
          }
        },
        Bg = zh("switch-track-width"),
        Dg = zh("switch-track-height"),
        Ng = zh("switch-track-diff"),
        Vg = Ph.subtract(Bg, Dg),
        Wg = zh("switch-thumb-x"),
        Ug = function (e) {
          var t = e.colorScheme;
          return {
            borderRadius: "full",
            p: "2px",
            width: [Bg.reference],
            height: [Dg.reference],
            transitionProperty: "common",
            transitionDuration: "fast",
            bg: hh("gray.300", "whiteAlpha.400")(e),
            _focusVisible: {
              boxShadow: "outline"
            },
            _disabled: {
              opacity: .4,
              cursor: "not-allowed"
            },
            _checked: {
              bg: hh(t + ".500", t + ".200")(e)
            }
          }
        },
        Hg = {
          bg: "white",
          transitionProperty: "transform",
          transitionDuration: "normal",
          borderRadius: "inherit",
          width: [Dg.reference],
          height: [Dg.reference],
          _checked: {
            transform: "translateX(" + Wg.reference + ")"
          }
        },
        $g = {
          sm: {
            container: (xg = {}, xg[Bg.variable] = "1.375rem", xg[Dg.variable] = "0.75rem", xg)
          },
          md: {
            container: (wg = {}, wg[Bg.variable] = "1.875rem", wg[Dg.variable] = "1rem", wg)
          },
          lg: {
            container: (kg = {}, kg[Bg.variable] = "2.875rem", kg[Dg.variable] = "1.5rem", kg)
          }
        },
        qg = {
          parts: Jh.keys,
          baseStyle: function (e) {
            var t, n;
            return {
              container: (n = {}, n[Ng.variable] = Vg, n[Wg.variable] = Ng.reference, n._rtl = (t = {}, t[Wg.variable] = Ph(Ng).negate().toString(), t), n),
              track: Ug(e),
              thumb: Hg
            }
          },
          sizes: $g,
          defaultProps: {
            size: "md",
            colorScheme: "blue"
          }
        },
        Yg = {
          "&[data-is-numeric=true]": {
            textAlign: "end"
          }
        },
        Xg = {
          simple: function (e) {
            var t = e.colorScheme;
            return {
              th: Fp({
                color: hh("gray.600", "gray.400")(e),
                borderBottom: "1px",
                borderColor: hh(t + ".100", t + ".700")(e)
              }, Yg),
              td: Fp({
                borderBottom: "1px",
                borderColor: hh(t + ".100", t + ".700")(e)
              }, Yg),
              caption: {
                color: hh("gray.600", "gray.100")(e)
              },
              tfoot: {
                tr: {
                  "&:last-of-type": {
                    th: {
                      borderBottomWidth: 0
                    }
                  }
                }
              }
            }
          },
          striped: function (e) {
            var t = e.colorScheme;
            return {
              th: Fp({
                color: hh("gray.600", "gray.400")(e),
                borderBottom: "1px",
                borderColor: hh(t + ".100", t + ".700")(e)
              }, Yg),
              td: Fp({
                borderBottom: "1px",
                borderColor: hh(t + ".100", t + ".700")(e)
              }, Yg),
              caption: {
                color: hh("gray.600", "gray.100")(e)
              },
              tbody: {
                tr: {
                  "&:nth-of-type(odd)": {
                    "th, td": {
                      borderBottomWidth: "1px",
                      borderColor: hh(t + ".100", t + ".700")(e)
                    },
                    td: {
                      background: hh(t + ".100", t + ".700")(e)
                    }
                  }
                }
              },
              tfoot: {
                tr: {
                  "&:last-of-type": {
                    th: {
                      borderBottomWidth: 0
                    }
                  }
                }
              }
            }
          },
          unstyled: {}
        },
        Qg = {
          parts: em.keys,
          baseStyle: {
            table: {
              fontVariantNumeric: "lining-nums tabular-nums",
              borderCollapse: "collapse",
              width: "full"
            },
            th: {
              fontFamily: "heading",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "wider",
              textAlign: "start"
            },
            td: {
              textAlign: "start"
            },
            caption: {
              mt: 4,
              fontFamily: "heading",
              textAlign: "center",
              fontWeight: "medium"
            }
          },
          variants: Xg,
          sizes: {
            sm: {
              th: {
                px: "4",
                py: "1",
                lineHeight: "4",
                fontSize: "xs"
              },
              td: {
                px: "4",
                py: "2",
                fontSize: "sm",
                lineHeight: "4"
              },
              caption: {
                px: "4",
                py: "2",
                fontSize: "xs"
              }
            },
            md: {
              th: {
                px: "6",
                py: "3",
                lineHeight: "4",
                fontSize: "xs"
              },
              td: {
                px: "6",
                py: "4",
                lineHeight: "5"
              },
              caption: {
                px: "6",
                py: "2",
                fontSize: "sm"
              }
            },
            lg: {
              th: {
                px: "8",
                py: "4",
                lineHeight: "5",
                fontSize: "sm"
              },
              td: {
                px: "8",
                py: "5",
                lineHeight: "6"
              },
              caption: {
                px: "6",
                py: "2",
                fontSize: "md"
              }
            }
          },
          defaultProps: {
            variant: "simple",
            size: "md",
            colorScheme: "gray"
          }
        },
        Gg = function (e) {
          return {
            display: "vertical" === e.orientation ? "flex" : "block"
          }
        },
        Kg = function (e) {
          return {
            flex: e.isFitted ? 1 : void 0,
            transitionProperty: "common",
            transitionDuration: "normal",
            _focusVisible: {
              zIndex: 1,
              boxShadow: "outline"
            },
            _disabled: {
              cursor: "not-allowed",
              opacity: .4
            }
          }
        },
        Zg = function (e) {
          var t = e.align,
            n = void 0 === t ? "start" : t,
            r = e.orientation;
          return {
            justifyContent: {
              end: "flex-end",
              center: "center",
              start: "flex-start"
            } [n],
            flexDirection: "vertical" === r ? "column" : "row"
          }
        },
        Jg = {
          p: 4
        },
        ey = {
          line: function (e) {
            var t, n, r = e.colorScheme,
              o = e.orientation,
              a = "vertical" === o ? "borderStart" : "borderBottom",
              i = "vertical" === o ? "marginStart" : "marginBottom";
            return {
              tablist: (t = {}, t[a] = "2px solid", t.borderColor = "inherit", t),
              tab: (n = {}, n[a] = "2px solid", n.borderColor = "transparent", n[i] = "-2px", n._selected = {
                color: hh(r + ".600", r + ".300")(e),
                borderColor: "currentColor"
              }, n._active = {
                bg: hh("gray.200", "whiteAlpha.300")(e)
              }, n._disabled = {
                _active: {
                  bg: "none"
                }
              }, n)
            }
          },
          enclosed: function (e) {
            var t = e.colorScheme;
            return {
              tab: {
                borderTopRadius: "md",
                border: "1px solid",
                borderColor: "transparent",
                mb: "-1px",
                _selected: {
                  color: hh(t + ".600", t + ".300")(e),
                  borderColor: "inherit",
                  borderBottomColor: hh("white", "gray.800")(e)
                }
              },
              tablist: {
                mb: "-1px",
                borderBottom: "1px solid",
                borderColor: "inherit"
              }
            }
          },
          "enclosed-colored": function (e) {
            var t = e.colorScheme;
            return {
              tab: {
                border: "1px solid",
                borderColor: "inherit",
                bg: hh("gray.50", "whiteAlpha.50")(e),
                mb: "-1px",
                _notLast: {
                  marginEnd: "-1px"
                },
                _selected: {
                  bg: hh("#fff", "gray.800")(e),
                  color: hh(t + ".600", t + ".300")(e),
                  borderColor: "inherit",
                  borderTopColor: "currentColor",
                  borderBottomColor: "transparent"
                }
              },
              tablist: {
                mb: "-1px",
                borderBottom: "1px solid",
                borderColor: "inherit"
              }
            }
          },
          "soft-rounded": function (e) {
            var t = e.colorScheme,
              n = e.theme;
            return {
              tab: {
                borderRadius: "full",
                fontWeight: "semibold",
                color: "gray.600",
                _selected: {
                  color: sh(n, t + ".700"),
                  bg: sh(n, t + ".100")
                }
              }
            }
          },
          "solid-rounded": function (e) {
            var t = e.colorScheme;
            return {
              tab: {
                borderRadius: "full",
                fontWeight: "semibold",
                color: hh("gray.600", "inherit")(e),
                _selected: {
                  color: hh("#fff", "gray.800")(e),
                  bg: hh(t + ".600", t + ".300")(e)
                }
              }
            }
          },
          unstyled: {}
        },
        ty = {
          parts: tm.keys,
          baseStyle: function (e) {
            return {
              root: Gg(e),
              tab: Kg(e),
              tablist: Zg(e),
              tabpanel: Jg
            }
          },
          sizes: {
            sm: {
              tab: {
                py: 1,
                px: 4,
                fontSize: "sm"
              }
            },
            md: {
              tab: {
                fontSize: "md",
                py: 2,
                px: 4
              }
            },
            lg: {
              tab: {
                fontSize: "lg",
                py: 3,
                px: 4
              }
            }
          },
          variants: ey,
          defaultProps: {
            size: "md",
            variant: "line",
            colorScheme: "blue"
          }
        },
        ny = {
          container: {
            fontWeight: "medium",
            lineHeight: 1.2,
            outline: 0,
            borderRadius: "md",
            _focusVisible: {
              boxShadow: "outline"
            }
          },
          label: {
            lineHeight: 1.2,
            overflow: "visible"
          },
          closeButton: {
            fontSize: "18px",
            w: "1.25rem",
            h: "1.25rem",
            transitionProperty: "common",
            transitionDuration: "normal",
            borderRadius: "full",
            marginStart: "0.375rem",
            marginEnd: "-1",
            opacity: .5,
            _disabled: {
              opacity: .4
            },
            _focusVisible: {
              boxShadow: "outline",
              bg: "rgba(0, 0, 0, 0.14)"
            },
            _hover: {
              opacity: .8
            },
            _active: {
              opacity: 1
            }
          }
        },
        ry = {
          subtle: function (e) {
            return {
              container: bm.variants.subtle(e)
            }
          },
          solid: function (e) {
            return {
              container: bm.variants.solid(e)
            }
          },
          outline: function (e) {
            return {
              container: bm.variants.outline(e)
            }
          }
        },
        oy = {
          parts: nm.keys,
          variants: ry,
          baseStyle: ny,
          sizes: {
            sm: {
              container: {
                minH: "1.25rem",
                minW: "1.25rem",
                fontSize: "xs",
                px: 2
              },
              closeButton: {
                marginEnd: "-2px",
                marginStart: "0.35rem"
              }
            },
            md: {
              container: {
                minH: "1.5rem",
                minW: "1.5rem",
                fontSize: "sm",
                px: 2
              }
            },
            lg: {
              container: {
                minH: 8,
                minW: 8,
                fontSize: "md",
                px: 3
              }
            }
          },
          defaultProps: {
            size: "md",
            variant: "subtle",
            colorScheme: "gray"
          }
        },
        ay = Fp({}, iv.baseStyle.field, {
          paddingY: "8px",
          minHeight: "80px",
          lineHeight: "short",
          verticalAlign: "top"
        }),
        iy = {
          outline: function (e) {
            var t;
            return null != (t = iv.variants.outline(e).field) ? t : {}
          },
          flushed: function (e) {
            var t;
            return null != (t = iv.variants.flushed(e).field) ? t : {}
          },
          filled: function (e) {
            var t;
            return null != (t = iv.variants.filled(e).field) ? t : {}
          },
          unstyled: null != (Sg = iv.variants.unstyled.field) ? Sg : {}
        },
        ly = {
          baseStyle: ay,
          sizes: {
            xs: null != (Eg = iv.sizes.xs.field) ? Eg : {},
            sm: null != (Cg = iv.sizes.sm.field) ? Cg : {},
            md: null != (_g = iv.sizes.md.field) ? _g : {},
            lg: null != (Pg = iv.sizes.lg.field) ? Pg : {}
          },
          variants: iy,
          defaultProps: {
            size: "md",
            variant: "outline"
          }
        },
        uy = zh("tooltip-bg"),
        sy = zh("popper-arrow-bg"),
        cy = {
          Accordion: am,
          Alert: um,
          Avatar: gm,
          Badge: bm,
          Breadcrumb: wm,
          Button: Cm,
          Checkbox: Rm,
          CloseButton: Om,
          Code: Mm,
          Container: jm,
          Divider: Lm,
          Drawer: $m,
          Editable: Ym,
          Form: Gm,
          FormError: Jm,
          FormLabel: ev,
          Heading: tv,
          Input: iv,
          Kbd: lv,
          Link: uv,
          List: cv,
          Menu: gv,
          Modal: Rv,
          NumberInput: Uv,
          PinInput: Hv,
          Popover: eg,
          Progress: og,
          Radio: ig,
          Select: dg,
          Skeleton: pg,
          SkipLink: hg,
          Slider: Mg,
          Spinner: Lg,
          Stat: Ig,
          Switch: qg,
          Table: Qg,
          Tabs: ty,
          Tag: oy,
          Textarea: ly,
          Tooltip: {
            baseStyle: function (e) {
              var t, n = hh("gray.700", "gray.300")(e);
              return (t = {})[uy.variable] = "colors." + n, t.px = "8px", t.py = "2px", t.bg = [uy.reference], t[sy.variable] = [uy.reference], t.color = hh("whiteAlpha.900", "gray.900")(e), t.borderRadius = "sm", t.fontWeight = "medium", t.fontSize = "sm", t.boxShadow = "md", t.maxW = "320px", t.zIndex = "tooltip", t
            }
          }
        },
        dy = function (e) {
          return W({
            condition: !0,
            message: ["[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon", "simply pass the breakpoints as an object. Remove the createBreakpoint(..) call"].join("")
          }), vh({
            base: "0em"
          }, e)
        }({
          sm: "30em",
          md: "48em",
          lg: "62em",
          xl: "80em",
          "2xl": "96em"
        }),
        fy = Fp({
          breakpoints: dy,
          zIndices: {
            hide: -1,
            auto: "auto",
            base: 0,
            docked: 10,
            dropdown: 1e3,
            sticky: 1100,
            banner: 1200,
            overlay: 1300,
            modal: 1400,
            popover: 1500,
            skipLink: 1600,
            toast: 1700,
            tooltip: 1800
          },
          radii: {
            none: "0",
            sm: "0.125rem",
            base: "0.25rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            "3xl": "1.5rem",
            full: "9999px"
          },
          blur: {
            none: 0,
            sm: "4px",
            base: "8px",
            md: "12px",
            lg: "16px",
            xl: "24px",
            "2xl": "40px",
            "3xl": "64px"
          },
          colors: {
            transparent: "transparent",
            current: "currentColor",
            black: "#000000",
            white: "#FFFFFF",
            whiteAlpha: {
              50: "rgba(255, 255, 255, 0.04)",
              100: "rgba(255, 255, 255, 0.06)",
              200: "rgba(255, 255, 255, 0.08)",
              300: "rgba(255, 255, 255, 0.16)",
              400: "rgba(255, 255, 255, 0.24)",
              500: "rgba(255, 255, 255, 0.36)",
              600: "rgba(255, 255, 255, 0.48)",
              700: "rgba(255, 255, 255, 0.64)",
              800: "rgba(255, 255, 255, 0.80)",
              900: "rgba(255, 255, 255, 0.92)"
            },
            blackAlpha: {
              50: "rgba(0, 0, 0, 0.04)",
              100: "rgba(0, 0, 0, 0.06)",
              200: "rgba(0, 0, 0, 0.08)",
              300: "rgba(0, 0, 0, 0.16)",
              400: "rgba(0, 0, 0, 0.24)",
              500: "rgba(0, 0, 0, 0.36)",
              600: "rgba(0, 0, 0, 0.48)",
              700: "rgba(0, 0, 0, 0.64)",
              800: "rgba(0, 0, 0, 0.80)",
              900: "rgba(0, 0, 0, 0.92)"
            },
            gray: {
              50: "#F7FAFC",
              100: "#EDF2F7",
              200: "#E2E8F0",
              300: "#CBD5E0",
              400: "#A0AEC0",
              500: "#718096",
              600: "#4A5568",
              700: "#2D3748",
              800: "#1A202C",
              900: "#171923"
            },
            red: {
              50: "#FFF5F5",
              100: "#FED7D7",
              200: "#FEB2B2",
              300: "#FC8181",
              400: "#F56565",
              500: "#E53E3E",
              600: "#C53030",
              700: "#9B2C2C",
              800: "#822727",
              900: "#63171B"
            },
            orange: {
              50: "#FFFAF0",
              100: "#FEEBC8",
              200: "#FBD38D",
              300: "#F6AD55",
              400: "#ED8936",
              500: "#DD6B20",
              600: "#C05621",
              700: "#9C4221",
              800: "#7B341E",
              900: "#652B19"
            },
            yellow: {
              50: "#FFFFF0",
              100: "#FEFCBF",
              200: "#FAF089",
              300: "#F6E05E",
              400: "#ECC94B",
              500: "#D69E2E",
              600: "#B7791F",
              700: "#975A16",
              800: "#744210",
              900: "#5F370E"
            },
            green: {
              50: "#F0FFF4",
              100: "#C6F6D5",
              200: "#9AE6B4",
              300: "#68D391",
              400: "#48BB78",
              500: "#38A169",
              600: "#2F855A",
              700: "#276749",
              800: "#22543D",
              900: "#1C4532"
            },
            teal: {
              50: "#E6FFFA",
              100: "#B2F5EA",
              200: "#81E6D9",
              300: "#4FD1C5",
              400: "#38B2AC",
              500: "#319795",
              600: "#2C7A7B",
              700: "#285E61",
              800: "#234E52",
              900: "#1D4044"
            },
            blue: {
              50: "#ebf8ff",
              100: "#bee3f8",
              200: "#90cdf4",
              300: "#63b3ed",
              400: "#4299e1",
              500: "#3182ce",
              600: "#2b6cb0",
              700: "#2c5282",
              800: "#2a4365",
              900: "#1A365D"
            },
            cyan: {
              50: "#EDFDFD",
              100: "#C4F1F9",
              200: "#9DECF9",
              300: "#76E4F7",
              400: "#0BC5EA",
              500: "#00B5D8",
              600: "#00A3C4",
              700: "#0987A0",
              800: "#086F83",
              900: "#065666"
            },
            purple: {
              50: "#FAF5FF",
              100: "#E9D8FD",
              200: "#D6BCFA",
              300: "#B794F4",
              400: "#9F7AEA",
              500: "#805AD5",
              600: "#6B46C1",
              700: "#553C9A",
              800: "#44337A",
              900: "#322659"
            },
            pink: {
              50: "#FFF5F7",
              100: "#FED7E2",
              200: "#FBB6CE",
              300: "#F687B3",
              400: "#ED64A6",
              500: "#D53F8C",
              600: "#B83280",
              700: "#97266D",
              800: "#702459",
              900: "#521B41"
            },
            linkedin: {
              50: "#E8F4F9",
              100: "#CFEDFB",
              200: "#9BDAF3",
              300: "#68C7EC",
              400: "#34B3E4",
              500: "#00A0DC",
              600: "#008CC9",
              700: "#0077B5",
              800: "#005E93",
              900: "#004471"
            },
            facebook: {
              50: "#E8F4F9",
              100: "#D9DEE9",
              200: "#B7C2DA",
              300: "#6482C0",
              400: "#4267B2",
              500: "#385898",
              600: "#314E89",
              700: "#29487D",
              800: "#223B67",
              900: "#1E355B"
            },
            messenger: {
              50: "#D0E6FF",
              100: "#B9DAFF",
              200: "#A2CDFF",
              300: "#7AB8FF",
              400: "#2E90FF",
              500: "#0078FF",
              600: "#0063D1",
              700: "#0052AC",
              800: "#003C7E",
              900: "#002C5C"
            },
            whatsapp: {
              50: "#dffeec",
              100: "#b9f5d0",
              200: "#90edb3",
              300: "#65e495",
              400: "#3cdd78",
              500: "#22c35e",
              600: "#179848",
              700: "#0c6c33",
              800: "#01421c",
              900: "#001803"
            },
            twitter: {
              50: "#E5F4FD",
              100: "#C8E9FB",
              200: "#A8DCFA",
              300: "#83CDF7",
              400: "#57BBF5",
              500: "#1DA1F2",
              600: "#1A94DA",
              700: "#1681BF",
              800: "#136B9E",
              900: "#0D4D71"
            },
            telegram: {
              50: "#E3F2F9",
              100: "#C5E4F3",
              200: "#A2D4EC",
              300: "#7AC1E4",
              400: "#47A9DA",
              500: "#0088CC",
              600: "#007AB8",
              700: "#006BA1",
              800: "#005885",
              900: "#003F5E"
            }
          }
        }, rm, {
          sizes: Ip,
          shadows: {
            xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
            sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
            inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
            none: "none",
            "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
          },
          space: Lp,
          borders: {
            none: 0,
            "1px": "1px solid",
            "2px": "2px solid",
            "4px": "4px solid",
            "8px": "8px solid"
          },
          transition: {
            property: {
              common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
              colors: "background-color, border-color, color, fill, stroke",
              dimensions: "width, height",
              position: "left, right, top, bottom",
              background: "background-color, background-image, background-position"
            },
            easing: {
              "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
              "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
              "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
            },
            duration: {
              "ultra-fast": "50ms",
              faster: "100ms",
              fast: "150ms",
              normal: "200ms",
              slow: "300ms",
              slower: "400ms",
              "ultra-slow": "500ms"
            }
          }
        });
      var py = Fp({
        semanticTokens: {
          colors: {
            "chakra-body-text": {
              _light: "gray.800",
              _dark: "whiteAlpha.900"
            },
            "chakra-body-bg": {
              _light: "white",
              _dark: "gray.800"
            },
            "chakra-border-color": {
              _light: "gray.200",
              _dark: "whiteAlpha.300"
            },
            "chakra-placeholder-color": {
              _light: "gray.500",
              _dark: "whiteAlpha.400"
            }
          }
        },
        direction: "ltr"
      }, fy, {
        components: cy,
        styles: {
          global: {
            body: {
              fontFamily: "body",
              color: "chakra-body-text",
              bg: "chakra-body-bg",
              transitionProperty: "background-color",
              transitionDuration: "normal",
              lineHeight: "base"
            },
            "*::placeholder": {
              color: "chakra-placeholder-color"
            },
            "*, *::before, &::after": {
              borderColor: "chakra-border-color",
              wordWrap: "break-word"
            }
          }
        },
        config: {
          useSystemColorMode: !1,
          initialColorMode: "light",
          cssVarPrefix: "chakra"
        }
      });

      function hy() {
        return hy = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, hy.apply(this, arguments)
      }

      function my(e, t) {
        var n, r = null != e ? e : "bottom",
          o = {
            "top-start": {
              ltr: "top-left",
              rtl: "top-right"
            },
            "top-end": {
              ltr: "top-right",
              rtl: "top-left"
            },
            "bottom-start": {
              ltr: "bottom-left",
              rtl: "bottom-right"
            },
            "bottom-end": {
              ltr: "bottom-right",
              rtl: "bottom-left"
            }
          } [r];
        return null != (n = null == o ? void 0 : o[t]) ? n : r
      }

      function vy(e, t) {
        var n = gy(e, t);
        return {
          position: n,
          index: n ? e[n].findIndex((function (e) {
            return e.id === t
          })) : -1
        }
      }
      var gy = function (e, t) {
        var n;
        return null == (n = Object.values(e).flat().find((function (e) {
          return e.id === t
        }))) ? void 0 : n.position
      };

      function yy(e) {
        return {
          position: "fixed",
          zIndex: 5500,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          margin: "top" === e || "bottom" === e ? "0 auto" : void 0,
          top: e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
          bottom: e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
          right: e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
          left: e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)"
        }
      }
      var by = function (e) {
        var t = e,
          n = new Set,
          r = function (e) {
            t = e(t), n.forEach((function (e) {
              return e()
            }))
          };
        return {
          getState: function () {
            return t
          },
          subscribe: function (t) {
            return n.add(t),
              function () {
                r((function () {
                  return e
                })), n.delete(t)
              }
          },
          removeToast: function (e, t) {
            r((function (n) {
              var r;
              return hy({}, n, ((r = {})[t] = n[t].filter((function (t) {
                return t.id != e
              })), r))
            }))
          },
          notify: function (e, t) {
            var n = function (e, t) {
                var n, r;
                void 0 === t && (t = {});
                xy += 1;
                var o = null != (n = t.id) ? n : xy,
                  a = null != (r = t.position) ? r : "bottom";
                return {
                  id: o,
                  message: e,
                  position: a,
                  duration: t.duration,
                  onCloseComplete: t.onCloseComplete,
                  onRequestRemove: function () {
                    return by.removeToast(String(o), a)
                  },
                  status: t.status,
                  requestClose: !1,
                  containerStyle: t.containerStyle
                }
              }(e, t),
              o = n.position,
              a = n.id;
            return r((function (e) {
              var t, r, a, i = o.includes("top") ? [n].concat(null != (t = e[o]) ? t : []) : [].concat(null != (r = e[o]) ? r : [], [n]);
              return hy({}, e, ((a = {})[o] = i, a))
            })), a
          },
          update: function (e, t) {
            e && r((function (n) {
              var r = hy({}, n),
                o = vy(r, e),
                a = o.position,
                i = o.index;
              return a && -1 !== i && (r[a][i] = hy({}, r[a][i], t, {
                message: ky(t)
              })), r
            }))
          },
          closeAll: function (e) {
            var t = (void 0 === e ? {} : e).positions;
            r((function (e) {
              return (null != t ? t : ["bottom", "bottom-right", "bottom-left", "top", "top-left", "top-right"]).reduce((function (t, n) {
                return t[n] = e[n].map((function (e) {
                  return hy({}, e, {
                    requestClose: !0
                  })
                })), t
              }), hy({}, e))
            }))
          },
          close: function (e) {
            r((function (t) {
              var n, r = gy(t, e);
              return r ? hy({}, t, ((n = {})[r] = t[r].map((function (t) {
                return t.id == e ? hy({}, t, {
                  requestClose: !0
                }) : t
              })), n)) : t
            }))
          },
          isActive: function (e) {
            return Boolean(vy(by.getState(), e).position)
          }
        }
      }({
        top: [],
        "top-left": [],
        "top-right": [],
        "bottom-left": [],
        bottom: [],
        "bottom-right": []
      });
      var xy = 0;
      var wy = function (t) {
        var n = t.status,
          r = t.variant,
          o = void 0 === r ? "solid" : r,
          a = t.id,
          i = t.title,
          l = t.isClosable,
          u = t.onClose,
          s = t.description,
          c = t.icon,
          d = "undefined" !== typeof a ? "toast-" + a + "-title" : void 0;
        return e.createElement(ya, {
          status: n,
          variant: o,
          id: String(a),
          alignItems: "start",
          borderRadius: "md",
          boxShadow: "lg",
          paddingEnd: 8,
          textAlign: "start",
          width: "auto",
          "aria-labelledby": d
        }, e.createElement(wa, null, c), e.createElement(no.div, {
          flex: "1",
          maxWidth: "100%"
        }, i && e.createElement(ba, {
          id: d
        }, i), s && e.createElement(xa, {
          display: "block"
        }, s)), l && e.createElement(Ca, {
          size: "sm",
          onClick: u,
          position: "absolute",
          insetEnd: 1,
          top: 1
        }))
      };

      function ky(t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.render,
          o = n.toastComponent,
          a = void 0 === o ? wy : o;
        return function (n) {
          return m(r) ? r(n) : e.createElement(a, hy({}, n, t))
        }
      }

      function Sy(e, t) {
        var n = function (n) {
            var r;
            return hy({}, t, n, {
              position: my(null != (r = null == n ? void 0 : n.position) ? r : null == t ? void 0 : t.position, e)
            })
          },
          r = function (e) {
            var t = n(e),
              r = ky(t);
            return by.notify(r, t)
          };
        return r.update = function (e, t) {
          by.update(e, n(t))
        }, r.promise = function (e, t) {
          var n = r(hy({}, t.loading, {
            status: "loading",
            duration: null
          }));
          e.then((function (e) {
            return r.update(n, hy({
              status: "success",
              duration: 5e3
            }, B(t.success, e)))
          })).catch((function (e) {
            return r.update(n, hy({
              status: "error",
              duration: 5e3
            }, B(t.error, e)))
          }))
        }, r.closeAll = by.closeAll, r.close = by.close, r.isActive = by.isActive, r
      }
      var Ey = {
          initial: function (e) {
            var t, n = e.position,
              r = ["top", "bottom"].includes(n) ? "y" : "x",
              o = ["top-right", "bottom-right"].includes(n) ? 1 : -1;
            return "bottom" === n && (o = 1), (t = {
              opacity: 0
            })[r] = 24 * o, t
          },
          animate: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
              duration: .4,
              ease: [.4, 0, .2, 1]
            }
          },
          exit: {
            opacity: 0,
            scale: .85,
            transition: {
              duration: .2,
              ease: [.4, 0, 1, 1]
            }
          }
        },
        Cy = e.memo((function (t) {
          var n = t.id,
            r = t.message,
            o = t.onCloseComplete,
            a = t.onRequestRemove,
            i = t.requestClose,
            l = void 0 !== i && i,
            u = t.position,
            s = void 0 === u ? "bottom" : u,
            c = t.duration,
            d = void 0 === c ? 5e3 : c,
            f = t.containerStyle,
            p = t.motionVariants,
            h = void 0 === p ? Ey : p,
            m = t.toastSpacing,
            v = void 0 === m ? "0.5rem" : m,
            g = e.useState(d),
            y = g[0],
            b = g[1],
            x = Oa();
          _o((function () {
            x || null == o || o()
          }), [x]), _o((function () {
            b(d)
          }), [d]);
          var w = function () {
            x && a()
          };
          e.useEffect((function () {
              x && l && a()
            }), [x, l, a]),
            function (t, n) {
              var r = q(t);
              e.useEffect((function () {
                var e;
                if (null != n) return e = window.setTimeout((function () {
                    r()
                  }), n),
                  function () {
                    e && window.clearTimeout(e)
                  }
              }), [n, r])
            }(w, y);
          var k = e.useMemo((function () {
              return hy({
                pointerEvents: "auto",
                maxWidth: 560,
                minWidth: 300,
                margin: v
              }, f)
            }), [f, v]),
            S = e.useMemo((function () {
              return function (e) {
                var t = "center";
                return e.includes("right") && (t = "flex-end"), e.includes("left") && (t = "flex-start"), {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: t
                }
              }(s)
            }), [s]);
          return e.createElement(hp.li, {
            layout: !0,
            className: "chakra-toast",
            variants: h,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            onHoverStart: function () {
              return b(null)
            },
            onHoverEnd: function () {
              return b(d)
            },
            custom: {
              position: s
            },
            style: S
          }, e.createElement(no.div, {
            role: "status",
            "aria-atomic": "true",
            className: "chakra-toast__inner",
            __css: k
          }, B(r, {
            id: n,
            onClose: w
          })))
        }));
      var _y = function (t) {
        var n = e.useSyncExternalStore(by.subscribe, by.getState, by.getState),
          r = t.children,
          o = t.motionVariants,
          a = t.component,
          i = void 0 === a ? Cy : a,
          l = t.portalProps,
          u = C(n).map((function (t) {
            var r = n[t];
            return e.createElement("ul", {
              role: "region",
              "aria-live": "polite",
              key: t,
              id: "chakra-toast-manager-" + t,
              style: yy(t)
            }, e.createElement(bp, {
              initial: !1
            }, r.map((function (t) {
              return e.createElement(i, hy({
                key: t.id,
                motionVariants: o
              }, t))
            }))))
          }));
        return e.createElement(e.Fragment, null, r, e.createElement(jp, l, u))
      };

      function Py() {
        return Py = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Py.apply(this, arguments)
      }

      function Ty(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }
      var Ay = Nr("FormControl"),
        Ry = (Ay[0], Ay[1], Sr({
          strict: !1,
          name: "FormControlContext"
        })),
        zy = (Ry[0], Ry[1]);
      var Oy = ["isDisabled", "isInvalid", "isReadOnly", "isRequired"],
        My = ["id", "disabled", "readOnly", "required", "isRequired", "isInvalid", "isReadOnly", "isDisabled", "onFocus", "onBlur"];

      function jy(e) {
        var t = function (e) {
            var t, n, r, o = zy(),
              a = e.id,
              i = e.disabled,
              l = e.readOnly,
              u = e.required,
              s = e.isRequired,
              c = e.isInvalid,
              d = e.isReadOnly,
              f = e.isDisabled,
              p = e.onFocus,
              h = e.onBlur,
              m = Ty(e, My),
              v = e["aria-describedby"] ? [e["aria-describedby"]] : [];
            null != o && o.hasFeedbackText && null != o && o.isInvalid && v.push(o.feedbackId);
            null != o && o.hasHelpText && v.push(o.helpTextId);
            return Py({}, m, {
              "aria-describedby": v.join(" ") || void 0,
              id: null != a ? a : null == o ? void 0 : o.id,
              isDisabled: null != (t = null != i ? i : f) ? t : null == o ? void 0 : o.isDisabled,
              isReadOnly: null != (n = null != l ? l : d) ? n : null == o ? void 0 : o.isReadOnly,
              isRequired: null != (r = null != u ? u : s) ? r : null == o ? void 0 : o.isRequired,
              isInvalid: null != c ? c : null == o ? void 0 : o.isInvalid,
              onFocus: D(null == o ? void 0 : o.onFocus, p),
              onBlur: D(null == o ? void 0 : o.onBlur, h)
            })
          }(e),
          n = t.isDisabled,
          r = t.isInvalid,
          o = t.isReadOnly,
          a = t.isRequired;
        return Py({}, Ty(t, Oy), {
          disabled: n,
          readOnly: o,
          required: a,
          "aria-invalid": F(r),
          "aria-required": F(a),
          "aria-readonly": F(o)
        })
      }
      var Ly = Nr("FormError");
      Ly[0], Ly[1];

      function Fy() {
        return Fy = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Fy.apply(this, arguments)
      }

      function Iy(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }
      var By = ["htmlSize"],
        Dy = Kr((function (t, n) {
          var r = t.htmlSize,
            o = Iy(t, By),
            a = to("Input", o),
            i = jy(Wr(o)),
            l = I("chakra-input", t.className);
          return e.createElement(no.input, Fy({
            size: r
          }, i, {
            __css: a.field,
            ref: n,
            className: l
          }))
        }));
      Dy.id = "Input";
      var Ny = Nr("InputGroup"),
        Vy = (Ny[0], Ny[1]);
      var Wy = ["placement"],
        Uy = {
          left: {
            marginEnd: "-1px",
            borderEndRadius: 0,
            borderEndColor: "transparent"
          },
          right: {
            marginStart: "-1px",
            borderStartRadius: 0,
            borderStartColor: "transparent"
          }
        },
        Hy = no("div", {
          baseStyle: {
            flex: "0 0 auto",
            width: "auto",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap"
          }
        }),
        $y = Kr((function (t, n) {
          var r, o = t.placement,
            a = void 0 === o ? "left" : o,
            i = Iy(t, Wy),
            l = null != (r = Uy[a]) ? r : {},
            u = Vy();
          return e.createElement(Hy, Fy({
            ref: n
          }, i, {
            __css: Fy({}, u.addon, l)
          }))
        }));
      var qy = Kr((function (t, n) {
        return e.createElement($y, Fy({
          ref: n,
          placement: "left"
        }, t, {
          className: I("chakra-input__left-addon", t.className)
        }))
      }));
      qy.id = "InputLeftAddon";
      var Yy = Kr((function (t, n) {
        return e.createElement($y, Fy({
          ref: n,
          placement: "right"
        }, t, {
          className: I("chakra-input__right-addon", t.className)
        }))
      }));
      Yy.id = "InputRightAddon";
      var Xy = ["placement"],
        Qy = ["className"],
        Gy = ["className"],
        Ky = no("div", {
          baseStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "0",
            zIndex: 2
          }
        }),
        Zy = Kr((function (t, n) {
          var r, o, a, i = t.placement,
            l = void 0 === i ? "left" : i,
            u = Iy(t, Xy),
            s = Vy(),
            c = s.field,
            d = Fy(((a = {})["left" === l ? "insetStart" : "insetEnd"] = "0", a.width = null != (r = null == c ? void 0 : c.height) ? r : null == c ? void 0 : c.h, a.height = null != (o = null == c ? void 0 : c.height) ? o : null == c ? void 0 : c.h, a.fontSize = null == c ? void 0 : c.fontSize, a), s.element);
          return e.createElement(Ky, Fy({
            ref: n,
            __css: d
          }, u))
        }));
      Zy.id = "InputElement";
      var Jy = Kr((function (t, n) {
        var r = t.className,
          o = Iy(t, Qy),
          a = I("chakra-input__left-element", r);
        return e.createElement(Zy, Fy({
          ref: n,
          placement: "left",
          className: a
        }, o))
      }));
      Jy.id = "InputLeftElement";
      var eb = Kr((function (t, n) {
        var r = t.className,
          o = Iy(t, Gy),
          a = I("chakra-input__right-element", r);
        return e.createElement(Zy, Fy({
          ref: n,
          placement: "right",
          className: a
        }, o))
      }));
      eb.id = "InputRightElement";
      var tb = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          return crypto.getRandomValues(new Uint8Array(e)).reduce((function (e, t) {
            return e += (t &= 63) < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t > 62 ? "-" : "_"
          }), "")
        },
        nb = function (t) {
          var n = t.addTodo,
            r = l((0, e.useState)(""), 2),
            o = r[0],
            a = r[1],
            i = function (t) {
              var n = Ur().theme;
              return e.useMemo((function () {
                return Sy(n.direction, t)
              }), [t, n.direction])
            }();
          return (0, ia.jsx)("form", {
            onSubmit: function (e) {
              if (e.preventDefault(), o) {
                var t = {
                  id: tb(),
                  body: o
                };
                n(t), a("")
              } else i({
                title: "\u041f\u043e\u0441\u0442\u0430\u0440\u0430\u0439\u0441\u044f \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u0442\u044c \u0447\u0435\u043c \u0437\u0430\u043d\u044f\u0442\u044c\u0441\u044f",
                status: "error",
                duration: 2e3,
                isClosable: !0
              })
            },
            children: (0, ia.jsxs)(ko, {
              mt: "8",
              children: [(0, ia.jsx)(Dy, {
                variant: "filled",
                placeholder: "\u041f\u0438\u0441\u0430\u0442\u044c \u0442\u0443\u0442",
                value: o,
                onChange: function (e) {
                  return a(e.target.value)
                }
              }), (0, ia.jsx)(qo, {
                type: "submit",
                colorScheme: "cyan",
                px: "8",
                children: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"
              })]
            })
          })
        };
      var rb = function () {
          var t = l((0, e.useState)((function () {
              return JSON.parse(localStorage.getItem("todos")) || []
            })), 2),
            n = t[0],
            r = t[1];
          (0, e.useEffect)((function () {
            localStorage.setItem("todos", JSON.stringify(n))
          }), [n]);
          var o = te(),
            a = o.colorMode,
            u = o.toggleColorMode;
          return (0, ia.jsxs)(So, {
            p: "4",
            children: [(0, ia.jsx)(Qo, {
              icon: "light" === a ? (0, ia.jsx)(oa, {}) : (0, ia.jsx)(ra, {}),
              isRound: "true",
              size: "lg",
              alignSelf: "flex-end",
              onClick: u
            }), (0, ia.jsx)(fo, {
              children: (0, ia.jsx)(ho, {
                mb: "8",
                fontWeight: "extrabold",
                size: "2xl",
                bgGradient: "linear(to-r, cyan.400, purple.400, pink.400)",
                bgClip: "text",
                children: "87Todo"
              })
            }), (0, ia.jsx)(la, {
              todos: n,
              deleteTodo: function (e) {
                var t = n.filter((function (t) {
                  return t.id !== e
                }));
                r(t)
              }
            }), (0, ia.jsx)(nb, {
              addTodo: function (e) {
                r([].concat(i(n), [e]))
              }
            })]
          })
        },
        ob = function () {
          return e.createElement(yr, {
            styles: '\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        touch-action: manipulation;\n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        font-feature-settings: \'kern\';\n      }\n\n      *,\n      *::before,\n      *::after {\n        border-width: 0;\n        border-style: solid;\n        \n      }\n\n      main {\n        display: block;\n      }\n\n      hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      pre,\n      code,\n      kbd,\n      samp {\n        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      b,\n      strong {\n        font-weight: bold;\n      }\n\n      small {\n        font-size: 80%;\n      }\n\n      sub,\n      sup {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      sub {\n        bottom: -0.25em;\n      }\n\n      sup {\n        top: -0.5em;\n      }\n\n      img {\n        border-style: none;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      button,\n      input {\n        overflow: visible;\n      }\n\n      button,\n      select {\n        text-transform: none;\n      }\n\n      button::-moz-focus-inner,\n      [type="button"]::-moz-focus-inner,\n      [type="reset"]::-moz-focus-inner,\n      [type="submit"]::-moz-focus-inner {\n        border-style: none;\n        padding: 0;\n      }\n\n      fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      progress {\n        vertical-align: baseline;\n      }\n\n      textarea {\n        overflow: auto;\n      }\n\n      [type="checkbox"],\n      [type="radio"] {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      [type="number"]::-webkit-inner-spin-button,\n      [type="number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      input[type="number"] {\n        -moz-appearance: textfield;\n      }\n\n      [type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      [type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      details {\n        display: block;\n      }\n\n      summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      body,\n      blockquote,\n      dl,\n      dd,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      hr,\n      figure,\n      p,\n      pre {\n        margin: 0;\n      }\n\n      button {\n        background: transparent;\n        padding: 0;\n      }\n\n      fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ol,\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      textarea {\n        resize: vertical;\n      }\n\n      button,\n      [role="button"] {\n        cursor: pointer;\n      }\n\n      button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      table {\n        border-collapse: collapse;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      img,\n      svg,\n      video,\n      canvas,\n      audio,\n      iframe,\n      embed,\n      object {\n        display: block;\n      }\n\n      img,\n      video {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      select::-ms-expand {\n        display: none;\n      }\n    '
          })
        },
        ab = {
          body: {
            classList: {
              add: function () {},
              remove: function () {}
            }
          },
          addEventListener: function () {},
          removeEventListener: function () {},
          activeElement: {
            blur: function () {},
            nodeName: ""
          },
          querySelector: function () {
            return null
          },
          querySelectorAll: function () {
            return []
          },
          getElementById: function () {
            return null
          },
          createEvent: function () {
            return {
              initEvent: function () {}
            }
          },
          createElement: function () {
            return {
              children: [],
              childNodes: [],
              style: {},
              setAttribute: function () {},
              getElementsByTagName: function () {
                return []
              }
            }
          }
        },
        ib = function () {},
        lb = {
          document: ab,
          navigator: {
            userAgent: ""
          },
          CustomEvent: function () {
            return this
          },
          addEventListener: ib,
          removeEventListener: ib,
          getComputedStyle: function () {
            return {
              getPropertyValue: function () {
                return ""
              }
            }
          },
          matchMedia: function () {
            return {
              matches: !1,
              addListener: ib,
              removeListener: ib
            }
          },
          requestAnimationFrame: function (e) {
            return "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0)
          },
          cancelAnimationFrame: function (e) {
            "undefined" !== typeof setTimeout && clearTimeout(e)
          },
          setTimeout: function () {
            return 0
          },
          clearTimeout: ib,
          setInterval: function () {
            return 0
          },
          clearInterval: ib
        },
        ub = j ? {
          window: window,
          document: document
        } : {
          window: lb,
          document: ab
        },
        sb = (0, e.createContext)(ub);

      function cb(t) {
        var n = t.children,
          r = t.environment,
          o = (0, e.useState)(null),
          a = o[0],
          i = o[1],
          l = (0, e.useMemo)((function () {
            var e, t = null == a ? void 0 : a.ownerDocument,
              n = null == a ? void 0 : a.ownerDocument.defaultView;
            return null != (e = null != r ? r : t ? {
              document: t,
              window: n
            } : void 0) ? e : ub
          }), [a, r]);
        return e.createElement(sb.Provider, {
          value: l
        }, n, e.createElement("span", {
          hidden: !0,
          className: "chakra-env",
          ref: function (t) {
            (0, e.startTransition)((function () {
              t && i(t)
            }))
          }
        }))
      }
      var db = function (t) {
        var n = t.children,
          r = t.colorModeManager,
          o = t.portalZIndex,
          a = t.resetCSS,
          i = void 0 === a || a,
          l = t.theme,
          u = void 0 === l ? {} : l,
          s = t.environment,
          c = t.cssVarsRoot,
          d = e.createElement(cb, {
            environment: s
          }, n);
        return e.createElement(Fr, {
          theme: u,
          cssVarsRoot: c
        }, e.createElement(re, {
          colorModeManager: r,
          options: u.config
        }, i && e.createElement(ob, null), e.createElement(Vr, null), o ? e.createElement(Ep, {
          zIndex: o
        }, d) : d))
      };
      var fb = ["children", "toastOptions"],
        pb = function (t) {
          var n = t.children,
            r = t.toastOptions,
            o = function (e, t) {
              if (null == e) return {};
              var n, r, o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o
            }(t, fb);
          return e.createElement(db, o, n, e.createElement(_y, r))
        };
      pb.defaultProps = {
        theme: py
      }, r.createRoot(document.getElementById("root")).render((0, ia.jsx)(e.StrictMode, {
        children: (0, ia.jsxs)(pb, {
          children: [(0, ia.jsx)(ie, {
            initialColorMode: "dark"
          }), (0, ia.jsx)(rb, {})]
        })
      }))
    }()
}();
//# sourceMappingURL=main.d281384b.js.map