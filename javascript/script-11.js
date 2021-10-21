(function (E) {
  var window = this;
  if (window.googletag && googletag.evalScripts) {
    googletag.evalScripts();
  }
  if (window.googletag && googletag._loaded_) return; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    da = function (a) {
      a = [
        "object" == typeof globalThis && globalThis,
        a,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    },
    ea = da(this),
    fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
    n = {},
    ha = {},
    p = function (a, b) {
      var c = ha[b];
      if (null == c) return a[b];
      c = a[c];
      return void 0 !== c ? c : a[b];
    },
    q = function (a, b, c) {
      if (b)
        a: {
          var d = a.split(".");
          a = 1 === d.length;
          var e = d[0],
            f;
          !a && e in n ? (f = n) : (f = ea);
          for (e = 0; e < d.length - 1; e++) {
            var g = d[e];
            if (!(g in f)) break a;
            f = f[g];
          }
          d = d[d.length - 1];
          c = fa && "es6" === c ? f[d] : null;
          b = b(c);
          null != b &&
            (a
              ? ca(n, d, { configurable: !0, writable: !0, value: b })
              : b !== c &&
                (void 0 === ha[d] &&
                  ((a = (1e9 * Math.random()) >>> 0),
                  (ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d)),
                ca(f, ha[d], { configurable: !0, writable: !0, value: b })));
        }
    };
  q(
    "Symbol",
    function (a) {
      if (a) return a;
      var b = function (f, g) {
        this.g = f;
        ca(this, "description", { configurable: !0, writable: !0, value: g });
      };
      b.prototype.toString = function () {
        return this.g;
      };
      var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        d = 0,
        e = function (f) {
          if (this instanceof e)
            throw new TypeError("Symbol is not a constructor");
          return new b(c + (f || "") + "_" + d++, f);
        };
      return e;
    },
    "es6"
  );
  q(
    "Symbol.iterator",
    function (a) {
      if (a) return a;
      a = (0, n.Symbol)("Symbol.iterator");
      for (
        var b =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " "
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = ea[b[c]];
        "function" === typeof d &&
          "function" != typeof d.prototype[a] &&
          ca(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return ia(ba(this));
            },
          });
      }
      return a;
    },
    "es6"
  );
  var ia = function (a) {
      a = { next: a };
      a[p(n.Symbol, "iterator")] = function () {
        return this;
      };
      return a;
    },
    ja = function (a) {
      return (a.raw = a);
    },
    r = function (a) {
      var b =
        "undefined" != typeof n.Symbol &&
        p(n.Symbol, "iterator") &&
        a[p(n.Symbol, "iterator")];
      return b ? b.call(a) : { next: ba(a) };
    },
    ka = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    t = function (a) {
      return a instanceof Array ? a : ka(r(a));
    },
    la =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ma;
  if (fa && "function" == typeof Object.setPrototypeOf)
    ma = Object.setPrototypeOf;
  else {
    var na;
    a: {
      var oa = { a: !0 },
        pa = {};
      try {
        pa.__proto__ = oa;
        na = pa.a;
        break a;
      } catch (a) {}
      na = !1;
    }
    ma = na
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = ma,
    u = function (a, b) {
      a.prototype = la(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Ba = b.prototype;
    },
    v = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    ra =
      fa && "function" == typeof p(Object, "assign")
        ? p(Object, "assign")
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) v(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  q(
    "Object.assign",
    function (a) {
      return a || ra;
    },
    "es6"
  );
  q(
    "WeakMap",
    function (a) {
      function b() {}
      function c(g) {
        var h = typeof g;
        return ("object" === h && null !== g) || "function" === h;
      }
      if (
        (function () {
          if (!a || !Object.seal) return !1;
          try {
            var g = Object.seal({}),
              h = Object.seal({}),
              k = new a([
                [g, 2],
                [h, 3],
              ]);
            if (2 != k.get(g) || 3 != k.get(h)) return !1;
            k.delete(g);
            k.set(h, 4);
            return !k.has(g) && 4 == k.get(h);
          } catch (l) {
            return !1;
          }
        })()
      )
        return a;
      var d = "$jscomp_hidden_" + Math.random(),
        e = 0,
        f = function (g) {
          this.g = (e += Math.random() + 1).toString();
          if (g) {
            g = r(g);
            for (var h; !(h = g.next()).done; )
              (h = h.value), this.set(h[0], h[1]);
          }
        };
      f.prototype.set = function (g, h) {
        if (!c(g)) throw Error("Invalid WeakMap key");
        if (!v(g, d)) {
          var k = new b();
          ca(g, d, { value: k });
        }
        if (!v(g, d)) throw Error("WeakMap key fail: " + g);
        g[d][this.g] = h;
        return this;
      };
      f.prototype.get = function (g) {
        return c(g) && v(g, d) ? g[d][this.g] : void 0;
      };
      f.prototype.has = function (g) {
        return c(g) && v(g, d) && v(g[d], this.g);
      };
      f.prototype.delete = function (g) {
        return c(g) && v(g, d) && v(g[d], this.g) ? delete g[d][this.g] : !1;
      };
      return f;
    },
    "es6"
  );
  q(
    "Map",
    function (a) {
      if (
        (function () {
          if (
            !a ||
            "function" != typeof a ||
            !a.prototype.entries ||
            "function" != typeof Object.seal
          )
            return !1;
          try {
            var h = Object.seal({ x: 4 }),
              k = new a(r([[h, "s"]]));
            if (
              "s" != k.get(h) ||
              1 != k.size ||
              k.get({ x: 4 }) ||
              k.set({ x: 4 }, "t") != k ||
              2 != k.size
            )
              return !1;
            var l = k.entries(),
              m = l.next();
            if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
            m = l.next();
            return m.done ||
              4 != m.value[0].x ||
              "t" != m.value[1] ||
              !l.next().done
              ? !1
              : !0;
          } catch (I) {
            return !1;
          }
        })()
      )
        return a;
      var b = new n.WeakMap(),
        c = function (h) {
          this.h = {};
          this.g = f();
          this.size = 0;
          if (h) {
            h = r(h);
            for (var k; !(k = h.next()).done; )
              (k = k.value), this.set(k[0], k[1]);
          }
        };
      c.prototype.set = function (h, k) {
        h = 0 === h ? 0 : h;
        var l = d(this, h);
        l.list || (l.list = this.h[l.id] = []);
        l.m
          ? (l.m.value = k)
          : ((l.m = {
              next: this.g,
              u: this.g.u,
              head: this.g,
              key: h,
              value: k,
            }),
            l.list.push(l.m),
            (this.g.u.next = l.m),
            (this.g.u = l.m),
            this.size++);
        return this;
      };
      c.prototype.delete = function (h) {
        h = d(this, h);
        return h.m && h.list
          ? (h.list.splice(h.index, 1),
            h.list.length || delete this.h[h.id],
            (h.m.u.next = h.m.next),
            (h.m.next.u = h.m.u),
            (h.m.head = null),
            this.size--,
            !0)
          : !1;
      };
      c.prototype.clear = function () {
        this.h = {};
        this.g = this.g.u = f();
        this.size = 0;
      };
      c.prototype.has = function (h) {
        return !!d(this, h).m;
      };
      c.prototype.get = function (h) {
        return (h = d(this, h).m) && h.value;
      };
      c.prototype.entries = function () {
        return e(this, function (h) {
          return [h.key, h.value];
        });
      };
      c.prototype.keys = function () {
        return e(this, function (h) {
          return h.key;
        });
      };
      c.prototype.values = function () {
        return e(this, function (h) {
          return h.value;
        });
      };
      c.prototype.forEach = function (h, k) {
        for (var l = this.entries(), m; !(m = l.next()).done; )
          (m = m.value), h.call(k, m[1], m[0], this);
      };
      c.prototype[p(n.Symbol, "iterator")] = c.prototype.entries;
      var d = function (h, k) {
          var l = k && typeof k;
          "object" == l || "function" == l
            ? b.has(k)
              ? (l = b.get(k))
              : ((l = "" + ++g), b.set(k, l))
            : (l = "p_" + k);
          var m = h.h[l];
          if (m && v(h.h, l))
            for (h = 0; h < m.length; h++) {
              var I = m[h];
              if ((k !== k && I.key !== I.key) || k === I.key)
                return { id: l, list: m, index: h, m: I };
            }
          return { id: l, list: m, index: -1, m: void 0 };
        },
        e = function (h, k) {
          var l = h.g;
          return ia(function () {
            if (l) {
              for (; l.head != h.g; ) l = l.u;
              for (; l.next != l.head; )
                return (l = l.next), { done: !1, value: k(l) };
              l = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        f = function () {
          var h = {};
          return (h.u = h.next = h.head = h);
        },
        g = 0;
      return c;
    },
    "es6"
  );
  q(
    "Array.prototype.find",
    function (a) {
      return a
        ? a
        : function (b, c) {
            a: {
              var d = this;
              d instanceof String && (d = String(d));
              for (var e = d.length, f = 0; f < e; f++) {
                var g = d[f];
                if (b.call(c, g, f, d)) {
                  b = g;
                  break a;
                }
              }
              b = void 0;
            }
            return b;
          };
    },
    "es6"
  );
  var sa = function (a, b) {
      a instanceof String && (a += "");
      var c = 0,
        d = !1,
        e = {
          next: function () {
            if (!d && c < a.length) {
              var f = c++;
              return { value: b(f, a[f]), done: !1 };
            }
            d = !0;
            return { done: !0, value: void 0 };
          },
        };
      e[p(n.Symbol, "iterator")] = function () {
        return e;
      };
      return e;
    },
    ta = function (a, b, c) {
      if (null == a)
        throw new TypeError(
          "The 'this' value for String.prototype." +
            c +
            " must not be null or undefined"
        );
      if (b instanceof RegExp)
        throw new TypeError(
          "First argument to String.prototype." +
            c +
            " must not be a regular expression"
        );
      return a + "";
    };
  q(
    "Set",
    function (a) {
      if (
        (function () {
          if (
            !a ||
            "function" != typeof a ||
            !a.prototype.entries ||
            "function" != typeof Object.seal
          )
            return !1;
          try {
            var c = Object.seal({ x: 4 }),
              d = new a(r([c]));
            if (
              !d.has(c) ||
              1 != d.size ||
              d.add(c) != d ||
              1 != d.size ||
              d.add({ x: 4 }) != d ||
              2 != d.size
            )
              return !1;
            var e = d.entries(),
              f = e.next();
            if (f.done || f.value[0] != c || f.value[1] != c) return !1;
            f = e.next();
            return f.done ||
              f.value[0] == c ||
              4 != f.value[0].x ||
              f.value[1] != f.value[0]
              ? !1
              : e.next().done;
          } catch (g) {
            return !1;
          }
        })()
      )
        return a;
      var b = function (c) {
        this.g = new n.Map();
        if (c) {
          c = r(c);
          for (var d; !(d = c.next()).done; ) this.add(d.value);
        }
        this.size = this.g.size;
      };
      b.prototype.add = function (c) {
        c = 0 === c ? 0 : c;
        this.g.set(c, c);
        this.size = this.g.size;
        return this;
      };
      b.prototype.delete = function (c) {
        c = this.g.delete(c);
        this.size = this.g.size;
        return c;
      };
      b.prototype.clear = function () {
        this.g.clear();
        this.size = 0;
      };
      b.prototype.has = function (c) {
        return this.g.has(c);
      };
      b.prototype.entries = function () {
        return this.g.entries();
      };
      b.prototype.values = function () {
        return p(this.g, "values").call(this.g);
      };
      b.prototype.keys = p(b.prototype, "values");
      b.prototype[p(n.Symbol, "iterator")] = p(b.prototype, "values");
      b.prototype.forEach = function (c, d) {
        var e = this;
        this.g.forEach(function (f) {
          return c.call(d, f, f, e);
        });
      };
      return b;
    },
    "es6"
  );
  q(
    "String.prototype.startsWith",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = ta(this, b, "startsWith"),
              e = d.length,
              f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
            return g >= f;
          };
    },
    "es6"
  );
  q(
    "String.prototype.repeat",
    function (a) {
      return a
        ? a
        : function (b) {
            var c = ta(this, null, "repeat");
            if (0 > b || 1342177279 < b)
              throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
            return d;
          };
    },
    "es6"
  );
  q(
    "String.prototype.padStart",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = ta(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (
              (0 < b && c
                ? p(c, "repeat")
                    .call(c, Math.ceil(b / c.length))
                    .substring(0, b)
                : "") + d
            );
          };
    },
    "es8"
  );
  q(
    "Array.prototype.keys",
    function (a) {
      return a
        ? a
        : function () {
            return sa(this, function (b) {
              return b;
            });
          };
    },
    "es6"
  );
  q(
    "Array.prototype.values",
    function (a) {
      return a
        ? a
        : function () {
            return sa(this, function (b, c) {
              return c;
            });
          };
    },
    "es8"
  );
  q(
    "Object.is",
    function (a) {
      return a
        ? a
        : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
          };
    },
    "es6"
  );
  q(
    "Array.prototype.includes",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
              var f = d[c];
              if (f === b || p(Object, "is").call(Object, f, b)) return !0;
            }
            return !1;
          };
    },
    "es7"
  );
  q(
    "String.prototype.includes",
    function (a) {
      return a
        ? a
        : function (b, c) {
            return -1 !== ta(this, b, "includes").indexOf(b, c || 0);
          };
    },
    "es6"
  );
  var w = this || self,
    ua = function (a) {
      a = a.split(".");
      for (var b = w, c = 0; c < a.length; c++)
        if (((b = b[a[c]]), null == b)) return null;
      return b;
    },
    xa = function (a) {
      return (
        (Object.prototype.hasOwnProperty.call(a, va) && a[va]) || (a[va] = ++wa)
      );
    },
    va = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    wa = 0,
    ya = function (a, b) {
      a = a.split(".");
      var c = w;
      a[0] in c ||
        "undefined" == typeof c.execScript ||
        c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? c[d] && c[d] !== Object.prototype[d]
            ? (c = c[d])
            : (c = c[d] = {})
          : (c[d] = b);
    };
  var za = function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    },
    Ia = function (a) {
      if (!Aa.test(a)) return a;
      -1 != a.indexOf("&") && (a = a.replace(Ba, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace(Ca, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace(Da, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(Ea, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(Fa, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(Ga, "&#0;"));
      return a;
    },
    Ba = /&/g,
    Ca = /</g,
    Da = />/g,
    Ea = /"/g,
    Fa = /'/g,
    Ga = /\x00/g,
    Aa = /[\x00&<>"']/,
    Ka = function (a, b) {
      var c = 0;
      a = za(String(a)).split(".");
      b = za(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
          g = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if (0 == f[0].length && 0 == g[0].length) break;
          c =
            Ja(
              0 == f[1].length ? 0 : parseInt(f[1], 10),
              0 == g[1].length ? 0 : parseInt(g[1], 10)
            ) ||
            Ja(0 == f[2].length, 0 == g[2].length) ||
            Ja(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (0 == c);
      }
      return c;
    },
    Ja = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var La = function (a, b) {
      Array.prototype.forEach.call(a, b, void 0);
    },
    Ma = function (a, b) {
      return Array.prototype.filter.call(a, b, void 0);
    },
    Na = function (a, b) {
      return Array.prototype.map.call(a, b, void 0);
    };
  function Oa(a, b) {
    a: {
      for (
        var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
        e < c;
        e++
      )
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Pa(a, b) {
    a: {
      for (
        var c = "string" === typeof a ? a.split("") : a, d = a.length - 1;
        0 <= d;
        d--
      )
        if (d in c && b.call(void 0, c[d], d, a)) {
          b = d;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Qa(a, b) {
    return 0 <= Array.prototype.indexOf.call(a, b, void 0);
  }
  var Ra;
  a: {
    var Sa = w.navigator;
    if (Sa) {
      var Ta = Sa.userAgent;
      if (Ta) {
        Ra = Ta;
        break a;
      }
    }
    Ra = "";
  }
  function x(a) {
    return -1 != Ra.indexOf(a);
  }
  function Ua(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  var Va = {},
    Wa = null,
    Ya = function (a) {
      var b = [];
      Xa(a, function (c) {
        b.push(c);
      });
      return b;
    },
    Xa = function (a, b) {
      function c(k) {
        for (; d < a.length; ) {
          var l = a.charAt(d++),
            m = Wa[l];
          if (null != m) return m;
          if (!/^[\s\xa0]*$/.test(l))
            throw Error("Unknown base64 encoding at char: " + l);
        }
        return k;
      }
      Za();
      for (var d = 0; ; ) {
        var e = c(-1),
          f = c(0),
          g = c(64),
          h = c(64);
        if (64 === h && -1 === e) break;
        b((e << 2) | (f >> 4));
        64 != g &&
          (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
      }
    },
    Za = function () {
      if (!Wa) {
        Wa = {};
        for (
          var a =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            b = ["+/=", "+/", "-_=", "-_.", "-_"],
            c = 0;
          5 > c;
          c++
        ) {
          var d = a.concat(b[c].split(""));
          Va[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            void 0 === Wa[f] && (Wa[f] = e);
          }
        }
      }
    };
  var $a = "function" === typeof Uint8Array;
  function ab(a) {
    return (
      null !== a &&
      "object" == typeof a &&
      !Array.isArray(a) &&
      !($a && null != a && a instanceof Uint8Array)
    );
  }
  function bb(a, b) {
    if (null != a) return Array.isArray(a) || ab(a) ? cb(a, b) : b(a);
  }
  function cb(a, b) {
    if (Array.isArray(a)) {
      for (var c = Array(a.length), d = 0; d < a.length; d++)
        c[d] = bb(a[d], b);
      Array.isArray(a) && a.fa && db(c);
      return c;
    }
    c = {};
    for (d in a)
      Object.prototype.hasOwnProperty.call(a, d) && (c[d] = bb(a[d], b));
    return c;
  }
  function eb(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if ($a && null != a && a instanceof Uint8Array) {
          var b;
          void 0 === b && (b = 0);
          Za();
          b = Va[b];
          for (
            var c = Array(Math.floor(a.length / 3)),
              d = b[64] || "",
              e = 0,
              f = 0;
            e < a.length - 2;
            e += 3
          ) {
            var g = a[e],
              h = a[e + 1],
              k = a[e + 2],
              l = b[g >> 2];
            g = b[((g & 3) << 4) | (h >> 4)];
            h = b[((h & 15) << 2) | (k >> 6)];
            k = b[k & 63];
            c[f++] = l + g + h + k;
          }
          l = 0;
          k = d;
          switch (a.length - e) {
            case 2:
              (l = a[e + 1]), (k = b[(l & 15) << 2] || d);
            case 1:
              (a = a[e]),
                (c[f] = b[a >> 2] + b[((a & 3) << 4) | (l >> 4)] + k + d);
          }
          a = c.join("");
        }
        return a;
      default:
        return a;
    }
  }
  var fb = { fa: { value: !0, configurable: !0 } },
    db = function (a) {
      Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, fb);
      return a;
    },
    gb;
  var hb;
  var y = function (a, b, c) {
      var d = hb;
      hb = null;
      a || (a = d);
      d = this.constructor.messageId;
      a || (a = d ? [d] : []);
      this.j = d ? 0 : -1;
      this.g = null;
      this.h = a;
      a: {
        d = this.h.length;
        a = d - 1;
        if (d && ((d = this.h[a]), ab(d))) {
          this.l = a - this.j;
          this.i = d;
          break a;
        }
        void 0 !== b && -1 < b
          ? ((this.l = Math.max(b, a + 1 - this.j)), (this.i = null))
          : (this.l = Number.MAX_VALUE);
      }
      if (c)
        for (b = 0; b < c.length; b++)
          (a = c[b]),
            a < this.l
              ? ((a += this.j), (d = this.h[a]) ? db(d) : (this.h[a] = ib))
              : (jb(this), (d = this.i[a]) ? db(d) : (this.i[a] = ib));
    },
    ib = Object.freeze(db([])),
    jb = function (a) {
      var b = a.l + a.j;
      a.h[b] || (a.i = a.h[b] = {});
    },
    z = function (a, b, c) {
      return -1 === b
        ? null
        : (void 0 === c ? 0 : c) || b >= a.l
        ? a.i
          ? a.i[b]
          : void 0
        : a.h[b + a.j];
    },
    kb = function (a, b) {
      var c = void 0 === c ? !1 : c;
      var d = z(a, b, c);
      null == d && (d = ib);
      d === ib && ((d = db([])), A(a, b, d, c));
      return d;
    },
    B = function (a, b, c) {
      a = z(a, b);
      return null == a ? c : a;
    },
    lb = function (a, b) {
      a = z(a, b);
      a = null == a ? a : !!a;
      return null == a ? !1 : a;
    },
    mb = function (a, b, c) {
      a = z(a, b);
      a = null == a ? a : +a;
      return null == a ? (void 0 === c ? 0 : c) : a;
    },
    A = function (a, b, c, d) {
      (void 0 === d ? 0 : d) || b >= a.l
        ? (jb(a), (a.i[b] = c))
        : (a.h[b + a.j] = c);
      return a;
    };
  function C(a, b, c) {
    0 !== c ? A(a, b, c) : A(a, b, void 0);
    return a;
  }
  var nb = function (a, b, c, d) {
      (c = D(a, c)) &&
        c !== b &&
        null != d &&
        (a.g && c in a.g && (a.g[c] = void 0), A(a, c, void 0));
      return A(a, b, d);
    },
    D = function (a, b) {
      for (var c = 0, d = 0; d < b.length; d++) {
        var e = b[d];
        null != z(a, e) && (0 === c || A(a, c, void 0), (c = e));
      }
      return c;
    },
    F = function (a, b, c) {
      if (-1 === c) return null;
      a.g || (a.g = {});
      if (!a.g[c]) {
        var d = z(a, c, !1);
        d && (a.g[c] = new b(d));
      }
      return a.g[c];
    },
    G = function (a, b, c) {
      a.g || (a.g = {});
      var d = a.g[c];
      if (!d) {
        var e = kb(a, c);
        d = [];
        for (var f = 0; f < e.length; f++) d[f] = new b(e[f]);
        a.g[c] = d;
      }
      return d;
    },
    pb = function (a, b, c) {
      var d = void 0 === d ? !1 : d;
      a.g || (a.g = {});
      var e = c ? ob(c, !1) : c;
      a.g[b] = c;
      return A(a, b, e, d);
    },
    rb = function (a, b, c) {
      var d = qb;
      a.g || (a.g = {});
      var e = c ? ob(c, !1) : c;
      a.g[b] = c;
      return nb(a, b, d, e);
    },
    sb = function (a, b, c) {
      var d = void 0 === d ? !1 : d;
      if (c) {
        var e = db([]);
        for (var f = 0; f < c.length; f++) e[f] = ob(c[f], !1);
        a.g || (a.g = {});
        a.g[b] = c;
      } else a.g && (a.g[b] = void 0), (e = ib);
      return A(a, b, e, d);
    };
  y.prototype.toJSON = function () {
    var a = ob(this, !1);
    return gb ? a : cb(a, eb);
  };
  var ob = function (a, b) {
    if (a.g)
      for (var c in a.g)
        if (Object.prototype.hasOwnProperty.call(a.g, c)) {
          var d = a.g[c];
          if (Array.isArray(d))
            for (var e = 0; e < d.length; e++) d[e] && ob(d[e], b);
          else d && ob(d, b);
        }
    return a.h;
  };
  function tb(a, b) {
    return eb(b);
  }
  var ub = function (a) {
      gb = !0;
      try {
        return JSON.stringify(a.toJSON(), tb);
      } finally {
        gb = !1;
      }
    },
    vb = function (a, b, c) {
      return B(a, b, void 0 === c ? "" : c);
    },
    wb = function (a, b, c) {
      b = D(a, c) === b ? b : -1;
      return B(a, b, 0);
    };
  var zb = function (a, b) {
    this.h = (a === xb && b) || "";
    this.j = yb;
  };
  zb.prototype.A = !0;
  zb.prototype.g = function () {
    return this.h;
  };
  var Ab = function (a) {
      return a instanceof zb && a.constructor === zb && a.j === yb
        ? a.h
        : "type_error:Const";
    },
    Bb = function (a) {
      return new zb(xb, a);
    },
    yb = {},
    xb = {};
  var Cb = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
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
  };
  var H = function (a, b) {
    this.j = b === Db ? a : "";
  };
  H.prototype.A = !0;
  H.prototype.g = function () {
    return this.j.toString();
  };
  H.prototype.i = !0;
  H.prototype.h = function () {
    return 1;
  };
  var Hb = function (a, b) {
    a = Eb.exec(Fb(a).toString());
    var c = a[3] || "";
    return new H(a[1] + Gb("?", a[2] || "", b) + Gb("#", c, void 0), Db);
  };
  H.prototype.toString = function () {
    return this.j + "";
  };
  var Fb = function (a) {
      return a instanceof H && a.constructor === H
        ? a.j
        : "type_error:TrustedResourceUrl";
    },
    Eb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    Ib = function (a) {
      for (var b = "", c = 0; c < a.length; c++) b += Ab(a[c]);
      return new H(b, Db);
    },
    Db = {},
    Gb = function (a, b, c) {
      if (null == c) return b;
      if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
      for (var d in c)
        if (Object.prototype.hasOwnProperty.call(c, d)) {
          var e = c[d];
          e = Array.isArray(e) ? e : [e];
          for (var f = 0; f < e.length; f++) {
            var g = e[f];
            null != g &&
              (b || (b = a),
              (b +=
                (b.length > a.length ? "&" : "") +
                encodeURIComponent(d) +
                "=" +
                encodeURIComponent(String(g))));
          }
        }
      return b;
    };
  var J = function (a, b) {
    this.j = b === Jb ? a : "";
  };
  J.prototype.A = !0;
  J.prototype.g = function () {
    return this.j.toString();
  };
  J.prototype.i = !0;
  J.prototype.h = function () {
    return 1;
  };
  J.prototype.toString = function () {
    return this.j.toString();
  };
  var Kb = RegExp(
      '^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',
      "i"
    ),
    Lb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    Mb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Jb = {},
    Nb = new J("about:invalid#zClosurez", Jb);
  var Ob = {},
    K = function (a, b, c) {
      this.j = c === Ob ? a : "";
      this.l = b;
      this.A = this.i = !0;
    };
  K.prototype.h = function () {
    return this.l;
  };
  K.prototype.g = function () {
    return this.j.toString();
  };
  K.prototype.toString = function () {
    return this.j.toString();
  };
  var Pb = function (a) {
      return a instanceof K && a.constructor === K
        ? a.j
        : "type_error:SafeHtml";
    },
    Qb = function (a) {
      if (a instanceof K) return a;
      var b = "object" == typeof a,
        c = null;
      b && a.i && (c = a.h());
      a = Ia(b && a.A ? a.g() : String(a));
      return new K(a, c, Ob);
    },
    Ub = function (a, b) {
      var c = { src: a },
        d = {};
      a = {};
      for (var e in c)
        Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
      for (var f in d)
        Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f]);
      if (b)
        for (var g in b)
          if (Object.prototype.hasOwnProperty.call(b, g)) {
            e = g.toLowerCase();
            if (e in c) throw Error("");
            e in d && delete a[e];
            a[g] = b[g];
          }
      var h;
      b = null;
      g = "";
      if (a)
        for (k in a)
          if (Object.prototype.hasOwnProperty.call(a, k)) {
            if (!Rb.test(k)) throw Error("");
            d = a[k];
            if (null != d) {
              c = k;
              if (d instanceof zb) d = Ab(d);
              else {
                if ("style" == c.toLowerCase()) throw Error("");
                if (/^on/i.test(c)) throw Error("");
                if (c.toLowerCase() in Sb)
                  if (d instanceof H) d = Fb(d).toString();
                  else if (d instanceof J)
                    d =
                      d instanceof J && d.constructor === J
                        ? d.j
                        : "type_error:SafeUrl";
                  else if ("string" === typeof d)
                    d instanceof J ||
                      ((d = "object" == typeof d && d.A ? d.g() : String(d)),
                      Mb.test(d)
                        ? (d = new J(d, Jb))
                        : ((d = String(d)),
                          (d = d.replace(/(%0A|%0D)/g, "")),
                          (d =
                            (e = d.match(Lb)) && Kb.test(e[1])
                              ? new J(d, Jb)
                              : null))),
                      (d = (d || Nb).g());
                  else throw Error("");
              }
              d.A && (d = d.g());
              c = c + '="' + Ia(String(d)) + '"';
              g += " " + c;
            }
          }
      var k = "<script" + g;
      null == h ? (h = []) : Array.isArray(h) || (h = [h]);
      !0 === Cb.script
        ? (k += ">")
        : ((h = Tb(h)),
          (k += ">" + Pb(h).toString() + "\x3c/script>"),
          (b = h.h()));
      (a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
      return new K(k, b, Ob);
    },
    Wb = function (a) {
      var b = Qb(Vb),
        c = b.h(),
        d = [],
        e = function (f) {
          Array.isArray(f)
            ? f.forEach(e)
            : ((f = Qb(f)),
              d.push(Pb(f).toString()),
              (f = f.h()),
              0 == c ? (c = f) : 0 != f && c != f && (c = null));
        };
      a.forEach(e);
      return new K(d.join(Pb(b).toString()), c, Ob);
    },
    Tb = function (a) {
      return Wb(Array.prototype.slice.call(arguments));
    },
    Rb = /^[a-zA-Z0-9-]+$/,
    Sb = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0,
    },
    Vb = new K((w.trustedTypes && w.trustedTypes.emptyHTML) || "", 0, Ob); /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Xb = {};
  function Yb() {
    var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
    return null !== a && void 0 !== a ? a : null;
  }
  var Zb;
  function $b() {
    var a, b;
    if (void 0 === Zb)
      try {
        Zb =
          null !==
            (b =
              null === (a = Yb()) || void 0 === a
                ? void 0
                : a.createPolicy("google#safe", {
                    createHTML: function (c) {
                      return c;
                    },
                    createScript: function (c) {
                      return c;
                    },
                    createScriptURL: function (c) {
                      return c;
                    },
                  })) && void 0 !== b
            ? b
            : null;
      } catch (c) {
        Zb = null;
      }
    return Zb;
  }
  var ac = function () {},
    bc = function (a) {
      this.g = a;
    };
  u(bc, ac);
  bc.prototype.toString = function () {
    return this.g.toString();
  };
  function cc(a) {
    var b,
      c = null === (b = $b()) || void 0 === b ? void 0 : b.createScriptURL(a);
    return new bc(null !== c && void 0 !== c ? c : a, Xb);
  }
  function dc(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    if (0 === c.length) return cc(a[0]);
    d = [a[0]];
    for (var e = 0; e < c.length; e++)
      d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
    return cc(d.join(""));
  }
  function ec(a) {
    return Pb(a);
  }
  function fc(a) {
    if (a instanceof ac)
      if (a instanceof bc) a = a.g;
      else throw Error("");
    else a = Fb(a);
    return a;
  }
  function gc(a) {
    var b,
      c = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document,
      d =
        null === (b = c.querySelector) || void 0 === b
          ? void 0
          : b.call(c, "script[nonce]");
    (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") &&
      a.setAttribute("nonce", b);
  }
  function hc(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    a.write.apply(a, t(c.map(ec)));
  }
  var ic = function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  };
  var kc = function () {
      a: {
        var a = w.document;
        if (
          a.querySelector &&
          (a = a.querySelector("script[nonce]")) &&
          (a = a.nonce || a.getAttribute("nonce")) &&
          jc.test(a)
        )
          break a;
        a = "";
      }
      return a;
    },
    jc = /^[\w+/_-]+[=]{0,2}$/;
  var lc = function () {
    return x("iPad") || (x("Android") && !x("Mobile")) || x("Silk");
  };
  var mc = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    nc = function (a) {
      return a ? decodeURI(a) : a;
    },
    oc = /#|$/,
    pc = function (a, b) {
      var c = a.search(oc);
      a: {
        var d = 0;
        for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
          var f = a.charCodeAt(d - 1);
          if (38 == f || 63 == f)
            if (
              ((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f)
            )
              break a;
          d += e + 1;
        }
        d = -1;
      }
      if (0 > d) return null;
      e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "));
    };
  var qc = !1,
    uc = function (a, b) {
      if (!rc() && !sc()) {
        var c = Math.random();
        if (c < b) return (c = tc(w)), a[Math.floor(c * a.length)];
      }
      return null;
    },
    tc = function (a) {
      if (!a.crypto) return Math.random();
      try {
        var b = new Uint32Array(1);
        a.crypto.getRandomValues(b);
        return b[0] / 65536 / 65536;
      } catch (c) {
        return Math.random();
      }
    },
    vc = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) &&
            b.call(void 0, a[c], c, a);
    },
    wc = function (a) {
      var b = a.length;
      if (0 == b) return 0;
      for (var c = 305419896, d = 0; d < b; d++)
        c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
      return 0 < c ? c : 4294967296 + c;
    },
    sc = ic(function () {
      return (
        Array.prototype.some.call(
          [
            "Google Web Preview",
            "Mediapartners-Google",
            "Google-Read-Aloud",
            "Google-Adwords",
          ],
          xc,
          void 0
        ) || 1e-4 > Math.random()
      );
    }),
    rc = ic(function () {
      return xc("MSIE");
    }),
    xc = function (a) {
      return -1 != Ra.indexOf(a);
    },
    yc = /^(-?[0-9.]{1,30})$/,
    zc = function (a, b) {
      return yc.test(a) && ((a = Number(a)), !isNaN(a))
        ? a
        : void 0 == b
        ? null
        : b;
    },
    Ac = function (a) {
      return /^true$/.test(a);
    },
    Bc = ic(function () {
      return !lc() &&
        (x("iPod") || x("iPhone") || x("Android") || x("IEMobile"))
        ? 2
        : lc()
        ? 1
        : 0;
    }),
    Cc = function (a, b) {
      a = void 0 === a ? "" : a;
      b = void 0 === b ? window : b;
      return (b = nc(b.location.href.match(mc)[3] || null)) ? wc(b + a) : null;
    },
    Ec = function (a, b) {
      b = void 0 === b ? window.document : b;
      0 != a.length &&
        b.head &&
        a.forEach(function (c) {
          if (c) {
            var d = b;
            d = void 0 === d ? window.document : d;
            if (c && d.head) {
              var e = Dc("META");
              d.head.appendChild(e);
              e.httpEquiv = "origin-trial";
              e.content = c;
            }
          }
        });
    },
    Fc = function (a) {
      if ("number" !== typeof a.goog_pvsid)
        try {
          Object.defineProperty(a, "goog_pvsid", {
            value: Math.floor(Math.random() * Math.pow(2, 52)),
            configurable: !1,
          });
        } catch (b) {}
      return Number(a.goog_pvsid) || -1;
    },
    Dc = function (a, b) {
      b = void 0 === b ? document : b;
      a = String(a);
      var c;
      if (
        qc ||
        "application/xhtml+xml" === (null == (c = b) ? void 0 : c.contentType)
      )
        a = a.toLowerCase();
      return b.createElement(a);
    };
  var Hc = function (a, b) {
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
      vc(a, function (d, e) {
        d && (c += "&" + e + "=" + encodeURIComponent(d));
      });
      Gc(c);
    },
    Gc = function (a) {
      var b = window;
      if (b.fetch)
        b.fetch(a, {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        });
      else {
        b.google_image_requests || (b.google_image_requests = []);
        var c = Dc("IMG", b.document);
        c.src = a;
        b.google_image_requests.push(c);
      }
    };
  var Ic = "a".charCodeAt(),
    Jc = Ua({
      ta: 0,
      sa: 1,
      pa: 2,
      ka: 3,
      qa: 4,
      la: 5,
      ra: 6,
      na: 7,
      oa: 8,
      ja: 9,
      ma: 10,
    }),
    Kc = Ua({ va: 0, wa: 1, ua: 2 });
  var Lc = function (a) {
      if (/[^01]/.test(a))
        throw Error("Input bitstring " + a + " is malformed!");
      this.h = a;
      this.g = 0;
    },
    Oc = function (a) {
      var b = L(a, 16);
      return !0 === !!L(a, 1)
        ? ((a = Mc(a)),
          a.forEach(function (c) {
            if (c > b)
              throw Error("ID " + c + " is past MaxVendorId " + b + "!");
          }),
          a)
        : Nc(a, b);
    },
    Mc = function (a) {
      for (var b = L(a, 12), c = []; b--; ) {
        var d = !0 === !!L(a, 1),
          e = L(a, 16);
        if (d) for (d = L(a, 16); e <= d; e++) c.push(e);
        else c.push(e);
      }
      c.sort(function (f, g) {
        return f - g;
      });
      return c;
    },
    Nc = function (a, b, c) {
      for (var d = [], e = 0; e < b; e++)
        if (L(a, 1)) {
          var f = e + 1;
          if (c && -1 === c.indexOf(f))
            throw Error("ID: " + f + " is outside of allowed values!");
          d.push(f);
        }
      return d;
    },
    L = function (a, b) {
      if (a.g + b > a.h.length)
        throw Error("Requested length " + b + " is past end of string.");
      var c = a.h.substring(a.g, a.g + b);
      a.g += b;
      return parseInt(c, 2);
    };
  var Qc = function (a, b) {
      try {
        var c = Ya(a.split(".")[0])
            .map(function (e) {
              return ((aa = e.toString(2)), p(aa, "padStart")).call(aa, 8, "0");
            })
            .join(""),
          d = new Lc(c);
        c = {};
        c.tcString = a;
        c.gdprApplies = !0;
        d.g += 78;
        c.cmpId = L(d, 12);
        c.cmpVersion = L(d, 12);
        d.g += 30;
        c.tcfPolicyVersion = L(d, 6);
        c.isServiceSpecific = !!L(d, 1);
        c.useNonStandardStacks = !!L(d, 1);
        c.specialFeatureOptins = Pc(Nc(d, 12, Kc), Kc);
        c.purpose = {
          consents: Pc(Nc(d, 24, Jc), Jc),
          legitimateInterests: Pc(Nc(d, 24, Jc), Jc),
        };
        c.purposeOneTreatment = !!L(d, 1);
        c.publisherCC =
          String.fromCharCode(Ic + L(d, 6)) + String.fromCharCode(Ic + L(d, 6));
        c.vendor = {
          consents: Pc(Oc(d), b),
          legitimateInterests: Pc(Oc(d), b),
        };
        return c;
      } catch (e) {
        return null;
      }
    },
    Pc = function (a, b) {
      var c = {};
      if (Array.isArray(b) && 0 !== b.length) {
        b = r(b);
        for (var d = b.next(); !d.done; d = b.next())
          (d = d.value), (c[d] = -1 !== a.indexOf(d));
      } else
        for (a = r(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
      delete c[0];
      return c;
    };
  function Rc(a) {
    return function () {
      return tc(window) <= a;
    };
  }
  function Sc(a) {
    return function (b) {
      for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
      try {
        return a.apply(this, c);
      } catch (e) {}
    };
  }
  function Tc(a) {
    var b = [],
      c = {};
    a = r(a);
    for (var d = a.next(); !d.done; c = { D: c.D }, d = a.next())
      (c.D = d.value),
        Sc(
          (function (e) {
            return function () {
              b.push(e.D());
            };
          })(c)
        )();
    return b;
  }
  var Uc = Sc(function (a) {
    var b = [],
      c = {};
    a = r(a);
    for (var d = a.next(); !d.done; c = { C: c.C }, d = a.next())
      (c.C = d.value),
        Sc(
          (function (e) {
            return function () {
              b.push('[{"' + e.C.ia + '":' + ub(e.C.message) + "}]");
            };
          })(c)
        )();
    return "[[" + b.join(",") + "]]";
  });
  var Vc = function (a, b) {
    if (window.fetch)
      fetch(a, {
        method: "POST",
        body: b,
        keepalive: 65536 > b.length,
        credentials: "omit",
        mode: "no-cors",
        redirect: "follow",
      });
    else {
      var c = new XMLHttpRequest();
      c.open("POST", a, !0);
      c.send(b);
    }
  };
  function Wc(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    a.ha.apply(
      a,
      t(
        c.map(function (e) {
          return function () {
            return { ia: 4, message: e() };
          };
        })
      )
    );
  }
  var Xc = function (a, b) {
    var c = void 0 === c ? Vc : c;
    this.i = a;
    this.l = void 0 === b ? 1e3 : b;
    this.j = c;
    this.h = [];
    this.g = null;
  };
  Xc.prototype.ha = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
    var d = this;
    Sc(function () {
      if (d.i()) {
        d.h.push.apply(d.h, t(Tc(b)));
        var e = Sc(function () {
          var f = Uc(d.h);
          d.j("https://pagead2.googlesyndication.com/pagead/ping?e=1", f);
          d.h = [];
          d.g = null;
        });
        100 <= d.h.length
          ? (null !== d.g && window.clearTimeout(d.g),
            (d.g = window.setTimeout(e, 0)))
          : null === d.g && (d.g = window.setTimeout(e, d.l));
      }
    })();
  };
  var M = function (a, b) {
      this.g = a;
      this.defaultValue = void 0 === b ? !1 : b;
    },
    Yc = function (a, b) {
      this.g = a;
      this.defaultValue = void 0 === b ? 0 : b;
    },
    Zc = function (a, b) {
      b = void 0 === b ? [] : b;
      this.g = a;
      this.defaultValue = b;
    };
  var $c = new Yc(24),
    ad = new Zc(1939),
    bd = new Zc(1934, [
      "A/OOU4XAFfeAV4kM4+W9WBwNAHqq/bvtrRcJ1wpnNyO/i076BSUy1d14l2kBEgVmEuvxojSpD23172C6hBg2AQYAAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
      "AwrB+XVH/KV6HfZNVtSEqlUJi3yUbtCp0/TJRj+38NDIw19/9P1h7ECTtdLdhIzG0Bsl4n/0rVmttJtGUCcewgAAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
      "Ax15QOERqai2A5XWrDY38Eg07xh2T0pkhpDPJuDlxr7D2Ka8wHvklgK7tTPZOnT+8H31lwHto5JpvYV8jRn1WgIAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
    ]),
    cd = new M(203),
    dd = new M(241),
    ed = new Yc(1929, 50),
    fd = new Yc(1905),
    gd = new M(240),
    hd = new M(1928),
    id = new M(1941),
    jd = new M(370946349),
    kd = new M(392736476),
    ld = new M(379841917),
    md = new M(397079674),
    nd = new Zc(1932, [
      "AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",
      "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
      "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
      "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
      "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
    ]),
    od = new M(396382471, !0),
    pd = new M(393546021),
    qd = new M(401243724),
    rd = new Yc(1935),
    sd = new M(398305417);
  var xd = function (a) {
    y.call(this, a, -1, td);
  };
  u(xd, y);
  var td = [6];
  var yd = function (a) {
    y.call(this, a);
  };
  u(yd, y);
  var zd = function (a) {
    y.call(this, a);
  };
  u(zd, y);
  var Ad = function (a) {
    y.call(this, a);
  };
  u(Ad, y);
  var Bd = function (a) {
    this.g = a || { cookie: "" };
  };
  Bd.prototype.set = function (a, b, c) {
    var d = !1;
    if ("object" === typeof c) {
      var e = c.za;
      d = c.Aa || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.ga;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    this.g.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (g ? ";path=" + g : "") +
      (0 > h
        ? ""
        : 0 == h
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + 1e3 * h).toUTCString()) +
      (d ? ";secure" : "") +
      (null != e ? ";samesite=" + e : "");
  };
  Bd.prototype.get = function (a, b) {
    for (
      var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f;
      e < d.length;
      e++
    ) {
      f = za(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
      if (f == a) return "";
    }
    return b;
  };
  Bd.prototype.isEmpty = function () {
    return !this.g.cookie;
  };
  Bd.prototype.clear = function () {
    for (
      var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0;
      f < a.length;
      f++
    )
      (e = za(a[f])),
        (d = e.indexOf("=")),
        -1 == d
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--)
      (c = b[a]),
        this.get(c),
        this.set(c, "", { ga: 0, path: void 0, domain: void 0 });
  };
  function Cd(a) {
    a = new Bd(a).get("FCCDCF", "");
    try {
      if (a) {
        var b = a ? JSON.parse(a) : null;
        hb = b;
        var c = new yd(b);
        hb = null;
        var d = c;
      } else d = null;
      return d;
    } catch (e) {
      return null;
    }
  }
  function Dd(a) {
    return (a = Cd(a)) ? F(a, zd, 4) : null;
  }
  var Ed = function (a) {
      this.g = a;
      this.h = null;
    },
    Gd = function (a) {
      a.__tcfapiPostMessageReady || Fd(new Ed(a));
    },
    Fd = function (a) {
      a.h = function (b) {
        var c = "string" == typeof b.data;
        try {
          var d = c ? JSON.parse(b.data) : b.data;
        } catch (f) {
          return;
        }
        var e = d.__tcfapiCall;
        !e ||
          ("ping" !== e.command &&
            "getTCData" !== e.command &&
            "addEventListener" !== e.command &&
            "removeEventListener" !== e.command) ||
          a.g.__tcfapi(
            e.command,
            e.version,
            function (f, g) {
              var h = {};
              h.__tcfapiReturn =
                "removeEventListener" === e.command
                  ? { success: f, callId: e.callId }
                  : { returnValue: f, success: g, callId: e.callId };
              f = c ? JSON.stringify(h) : h;
              b.source &&
                "function" === typeof b.source.postMessage &&
                b.source.postMessage(f, b.origin);
              return f;
            },
            e.parameter
          );
      };
      a.g.addEventListener("message", a.h);
      a.g.__tcfapiPostMessageReady = !0;
    };
  var Hd = function (a, b) {
    var c = a.document,
      d = function () {
        if (!a.frames[b])
          if (c.body) {
            var e = Dc("IFRAME", c);
            e.style.display = "none";
            e.style.width = "0px";
            e.style.height = "0px";
            e.style.border = "none";
            e.style.zIndex = "-1000";
            e.style.left = "-1000px";
            e.style.top = "-1000px";
            e.name = b;
            c.body.appendChild(e);
          } else a.setTimeout(d, 5);
      };
    d();
  };
  var Id = function (a) {
      this.g = a;
      this.h = a.document;
      this.l = (a = (a = Cd(this.h)) ? F(a, Ad, 5) || null : null)
        ? z(a, 2)
        : null;
      this.i = (a = Dd(this.h)) && null != z(a, 1) ? z(a, 1) : null;
      this.j = (a = Dd(this.h)) && null != z(a, 2) ? z(a, 2) : null;
    },
    Ld = function (a) {
      a.__uspapi || a.frames.__uspapiLocator || ((a = new Id(a)), Jd(a), Kd(a));
    },
    Jd = function (a) {
      !a.l ||
        a.g.__uspapi ||
        a.g.frames.__uspapiLocator ||
        ((a.g.__uspapiManager = "fc"),
        Hd(a.g, "__uspapiLocator"),
        ya("__uspapi", function (b) {
          for (var c = [], d = 0; d < arguments.length; ++d)
            c[d] = arguments[d];
          return a.s.apply(a, t(c));
        }));
    };
  Id.prototype.s = function (a, b, c) {
    "function" === typeof c &&
      "getUSPData" === a &&
      c({ version: 1, uspString: this.l }, !0);
  };
  var Kd = function (a) {
    !a.i ||
      a.g.__tcfapi ||
      a.g.frames.__tcfapiLocator ||
      ((a.g.__tcfapiManager = "fc"),
      Hd(a.g, "__tcfapiLocator"),
      (a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || []),
      ya("__tcfapi", function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        return a.o.apply(a, t(c));
      }),
      Gd(a.g));
  };
  Id.prototype.o = function (a, b, c, d) {
    d = void 0 === d ? null : d;
    if ("function" === typeof c)
      if (b && 2 !== b) c(null, !1);
      else
        switch (((b = this.g.__tcfapiEventListeners), a)) {
          case "getTCData":
            !d ||
            (Array.isArray(d) &&
              d.every(function (e) {
                return "number" === typeof e;
              }))
              ? c(Md(this, d, null), !0)
              : c(null, !1);
            break;
          case "ping":
            c({
              gdprApplies: !0,
              cmpLoaded: !0,
              cmpStatus: "loaded",
              displayStatus: "disabled",
              apiVersion: "2.0",
              cmpVersion: 1,
              cmpId: 300,
            });
            break;
          case "addEventListener":
            a = b.push(c);
            c(Md(this, null, a - 1), !0);
            break;
          case "removeEventListener":
            b[d] ? ((b[d] = null), c(!0)) : c(!1);
            break;
          case "getInAppTCData":
          case "getVendorList":
            c(null, !1);
        }
  };
  var Md = function (a, b, c) {
    if (!a.i) return null;
    b = Qc(a.i, b);
    b.addtlConsent = null != a.j ? a.j : void 0;
    b.cmpStatus = "loaded";
    b.eventStatus = "tcloaded";
    null != c && (b.listenerId = c);
    return b;
  };
  var Od = function (a) {
    y.call(this, a, -1, Nd);
  };
  u(Od, y);
  var Pd = function (a, b) {
      return pb(a, 1, b);
    },
    Qd = function (a, b) {
      return sb(a, 2, b);
    },
    Rd = function (a, b) {
      var c = void 0 === c ? !1 : c;
      return A(a, 4, db(b || []), c);
    },
    Sd = function (a, b) {
      return sb(a, 5, b);
    },
    Td = function (a) {
      y.call(this, a);
    };
  u(Td, y);
  Td.prototype.B = function () {
    return B(this, 1, 0);
  };
  var Ud = function (a, b) {
      return C(a, 1, b);
    },
    Vd = function (a, b) {
      return C(a, 2, b);
    },
    Wd = function (a) {
      y.call(this, a);
    };
  u(Wd, y);
  var Nd = [2, 4, 5],
    Xd = [1, 2];
  var Zd = function (a) {
    y.call(this, a, -1, Yd);
  };
  u(Zd, y);
  var $d = function (a, b) {
      return sb(a, 2, b);
    },
    ae = function (a, b) {
      return sb(a, 3, b);
    },
    be = function (a) {
      y.call(this, a);
    };
  u(be, y);
  var Yd = [2, 3],
    ce = [1, 2, 3, 4];
  var de = function (a) {
    y.call(this, a);
  };
  u(de, y);
  de.prototype.getTagSessionCorrelator = function () {
    return B(this, 2, 0);
  };
  var ee = function (a) {
      var b = Fc(window);
      return C(a, 2, b);
    },
    fe = function (a) {
      var b = new de();
      return rb(b, 4, a);
    },
    ge = function (a) {
      var b = new de();
      return rb(b, 7, a);
    },
    qb = [4, 5, 7];
  var he = function (a, b) {
    var c = void 0 === c ? {} : c;
    this.error = a;
    this.context = b.context;
    this.msg = b.message || "";
    this.id = b.id || "jserror";
    this.meta = c;
  };
  var ie = null,
    je = function () {
      if (null === ie) {
        ie = "";
        try {
          var a = "";
          try {
            a = w.top.location.hash;
          } catch (c) {
            a = w.location.hash;
          }
          if (a) {
            var b = a.match(/\bdeid=([\d,]+)/);
            ie = b ? b[1] : "";
          }
        } catch (c) {}
      }
      return ie;
    };
  var le = function (a) {
    y.call(this, a, -1, ke);
  };
  u(le, y);
  var ke = [2, 8],
    me = [3, 4, 5],
    ne = [6, 7];
  var oe;
  oe = { xa: 0, ca: 3, da: 4, ea: 5 };
  var pe = oe.ca,
    N = oe.da,
    qe = oe.ea,
    re = function (a) {
      return null != a ? !a : a;
    },
    se = function (a, b) {
      for (var c = !1, d = 0; d < a.length; d++) {
        var e = a[d]();
        if (e === b) return e;
        null == e && (c = !0);
      }
      if (!c) return !b;
    },
    ue = function (a, b) {
      var c = G(a, le, 2);
      if (!c.length) return te(a, b);
      a = B(a, 1, 0);
      if (1 === a) return re(ue(c[0], b));
      c = Na(c, function (d) {
        return function () {
          return ue(d, b);
        };
      });
      switch (a) {
        case 2:
          return se(c, !1);
        case 3:
          return se(c, !0);
      }
    },
    te = function (a, b) {
      var c = D(a, me);
      a: {
        switch (c) {
          case pe:
            var d = wb(a, 3, me);
            break a;
          case N:
            d = wb(a, 4, me);
            break a;
          case qe:
            d = wb(a, 5, me);
            break a;
        }
        d = void 0;
      }
      if (d && (b = (b = b[c]) && b[d])) {
        try {
          var e = b.apply(null, t(kb(a, 8)));
        } catch (f) {
          return;
        }
        b = B(a, 1, 0);
        if (4 === b) return !!e;
        d = null != e;
        if (5 === b) return d;
        if (12 === b) a = vb(a, 7 === D(a, ne) ? 7 : -1, void 0);
        else
          a: {
            switch (c) {
              case N:
                a = mb(a, 6 === D(a, ne) ? 6 : -1, void 0);
                break a;
              case qe:
                a = vb(a, 7 === D(a, ne) ? 7 : -1, void 0);
                break a;
            }
            a = void 0;
          }
        if (null != a) {
          if (6 === b) return e === a;
          if (9 === b) return null != e && 0 === Ka(String(e), a);
          if (d)
            switch (b) {
              case 7:
                return e < a;
              case 8:
                return e > a;
              case 12:
                return (
                  "string" === typeof a &&
                  "string" === typeof e &&
                  new RegExp(a).test(e)
                );
              case 10:
                return null != e && -1 === Ka(String(e), a);
              case 11:
                return null != e && 1 === Ka(String(e), a);
            }
        }
      }
    },
    ve = function (a, b) {
      return !a || !(!b || !ue(a, b));
    };
  var xe = function (a) {
    y.call(this, a, -1, we);
  };
  u(xe, y);
  var we = [4];
  var ye = function (a) {
    y.call(this, a);
  };
  u(ye, y);
  var O = function (a) {
    y.call(this, a, -1, ze);
  };
  u(O, y);
  var ze = [5],
    Ae = [1, 2, 3, 6, 7];
  var Be = function (a, b, c) {
      var d = void 0 === d ? new Xc(ic(Rc(0 < a ? 1 / a : 0)), b) : d;
      this.i = a;
      this.j = c;
      this.h = d;
      this.g = [];
    },
    Ce = function (a, b, c, d, e) {
      b = Vd(Ud(new Td(), b), c);
      d = Qd(Pd(Sd(Rd(new Od(), d), e), b), a.g);
      var f = fe(d);
      Wc(a.h, function () {
        var g = ee(C(f, 1, Date.now()));
        return C(g, 6, a.i);
      });
      a.g.push(b);
      100 < a.g.length && a.g.shift();
    },
    De = function (a, b, c, d) {
      if (a.j) {
        b = ae($d(new Zd(), b), c);
        d && C(b, 1, d);
        var e = ge(b);
        Wc(a.h, function () {
          var f = ee(C(e, 1, Date.now()));
          return C(f, 6, a.i);
        });
      }
    };
  var P = function (a) {
    var b = "K";
    if (a.K && a.hasOwnProperty(b)) return a.K;
    b = new a();
    return (a.K = b);
  };
  var Ee = function () {
    var a = {};
    this.g = ((a[pe] = {}), (a[N] = {}), (a[qe] = {}), a);
  };
  var Fe = Ac("false");
  var Ge = Fe,
    He = function (a, b) {
      switch (b) {
        case 1:
          return wb(a, 1, Ae);
        case 2:
          return wb(a, 2, Ae);
        case 3:
          return wb(a, 3, Ae);
        case 6:
          return wb(a, 6, Ae);
        default:
          return null;
      }
    },
    Ie = function (a, b) {
      if (!a) return null;
      switch (b) {
        case 1:
          return lb(a, 1);
        case 7:
          return vb(a, 3);
        case 2:
          return mb(a, 2);
        case 3:
          return vb(a, 3);
        case 6:
          return kb(a, 4);
        default:
          return null;
      }
    },
    Je = ic(function () {
      if (!Ge) return {};
      try {
        var a =
          window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
        if (a) return JSON.parse(a);
      } catch (b) {}
      return {};
    }),
    Me = function (a, b, c, d) {
      var e = (d = void 0 === d ? 0 : d),
        f,
        g;
      P(Q).i[e] =
        null != (g = null == (f = P(Q).i[e]) ? void 0 : f.add(b))
          ? g
          : new n.Set().add(b);
      e = Je();
      if (null != e[b]) return e[b];
      b = Ke(d)[b];
      if (!b) return c;
      b = new O(b);
      b = Le(b);
      a = Ie(b, a);
      return null != a ? a : c;
    },
    Le = function (a) {
      var b = P(Ee).g;
      if (b) {
        var c = Pa(G(a, ye, 5), function (d) {
          return ve(F(d, le, 1), b);
        });
        if (c) return F(c, xe, 2);
      }
      return F(a, xe, 4);
    },
    Q = function () {
      this.g = {};
      this.j = [];
      this.i = {};
      this.h = {};
    },
    Ne = function (a, b, c) {
      return !!Me(1, a, void 0 === b ? !1 : b, c);
    },
    Oe = function (a, b, c) {
      b = void 0 === b ? 0 : b;
      a = Number(Me(2, a, b, c));
      return isNaN(a) ? b : a;
    },
    Pe = function (a, b, c) {
      return Me(3, a, void 0 === b ? "" : b, c);
    },
    Qe = function (a, b, c) {
      b = void 0 === b ? [] : b;
      return Me(6, a, b, c);
    },
    Ke = function (a) {
      return P(Q).g[a] || (P(Q).g[a] = {});
    },
    Re = function (a, b) {
      var c = Ke(b);
      vc(a, function (d, e) {
        return (c[e] = d);
      });
    },
    Se = function (a, b, c, d) {
      var e = [],
        f = [];
      La(b, function (g) {
        var h = Ke(g);
        La(a, function (k) {
          var l = D(k, Ae),
            m = He(k, l);
          if (m) {
            a: {
              var I = new be();
              switch (l) {
                case 1:
                  nb(I, 1, ce, m);
                  break;
                case 2:
                  nb(I, 2, ce, m);
                  break;
                case 3:
                  nb(I, 3, ce, m);
                  break;
                case 6:
                  nb(I, 4, ce, m);
                  break;
                default:
                  l = void 0;
                  break a;
              }
              l = I;
            }
            if ((I = l)) {
              var Ha;
              I = !(null == (Ha = P(Q).i[g]) || !Ha.has(m));
            }
            I && e.push(l);
            if ((Ha = l)) {
              var ud;
              Ha = !(null == (ud = P(Q).h[g]) || !ud.has(m));
            }
            Ha && f.push(l);
            var vd, wd;
            P(Q).h[g] =
              null != (wd = null == (vd = P(Q).h[g]) ? void 0 : vd.add(m))
                ? wd
                : new n.Set().add(m);
            h[m] = k.toJSON();
          }
        });
      });
      (e.length || f.length) && De(c, e, f, null != d ? d : void 0);
    },
    Te = function (a, b) {
      var c = Ke(b);
      La(a, function (d) {
        var e = new O(d),
          f = D(e, Ae);
        (e = He(e, f)) && (c[e] || (c[e] = d));
      });
    },
    Ue = function () {
      return Na(p(Object, "keys").call(Object, P(Q).g), function (a) {
        return Number(a);
      });
    },
    Ve = function (a) {
      Qa(P(Q).j, a) || Re(Ke(4), a);
    };
  var R = function (a) {
      this.methodName = a;
    },
    We = new R(1),
    Xe = new R(16),
    Ye = new R(15),
    Ze = new R(2),
    $e = new R(3),
    af = new R(4),
    bf = new R(5),
    cf = new R(6),
    df = new R(7),
    ef = new R(8),
    ff = new R(9),
    gf = new R(10),
    hf = new R(11),
    jf = new R(12),
    kf = new R(13),
    lf = new R(14),
    S = function (a, b, c) {
      c.hasOwnProperty(a.methodName) ||
        Object.defineProperty(c, String(a.methodName), { value: b });
    },
    T = function (a, b, c) {
      return b[a.methodName] || c || function () {};
    },
    mf = function (a) {
      S(bf, Ne, a);
      S(cf, Oe, a);
      S(df, Pe, a);
      S(ef, Qe, a);
      S(kf, Te, a);
      S(Ye, Ve, a);
    },
    nf = function (a) {
      S(
        af,
        function (b) {
          P(Ee).g = b;
        },
        a
      );
      S(
        ff,
        function (b, c) {
          var d = P(Ee);
          d.g[pe][b] || (d.g[pe][b] = c);
        },
        a
      );
      S(
        gf,
        function (b, c) {
          var d = P(Ee);
          d.g[N][b] || (d.g[N][b] = c);
        },
        a
      );
      S(
        hf,
        function (b, c) {
          var d = P(Ee);
          d.g[qe][b] || (d.g[qe][b] = c);
        },
        a
      );
      S(
        lf,
        function (b) {
          for (
            var c = P(Ee), d = r([pe, N, qe]), e = d.next();
            !e.done;
            e = d.next()
          )
            (e = e.value), p(Object, "assign").call(Object, c.g[e], b[e]);
        },
        a
      );
    },
    of = function (a) {
      a.hasOwnProperty("init-done") ||
        Object.defineProperty(a, "init-done", { value: !0 });
    };
  var pf = function () {
      this.g = function () {};
      this.h = function () {
        return [];
      };
    },
    qf = function (a, b, c) {
      a.g = function (d) {
        T(Ze, b, function () {
          return [];
        })(d, c);
      };
      a.h = function () {
        return T($e, b, function () {
          return [];
        })(c);
      };
    };
  var rf = function (a, b) {
      try {
        var c = a.split(".");
        a = w;
        for (var d = 0, e; null != a && d < c.length; d++)
          (e = a), (a = a[c[d]]), "function" === typeof a && (a = e[c[d]]());
        var f = a;
        if (typeof f === b) return f;
      } catch (g) {}
    },
    sf = function () {
      var a = {};
      this[pe] =
        ((a[8] = function (b) {
          try {
            return null != ua(b);
          } catch (c) {}
        }),
        (a[9] = function (b) {
          try {
            var c = ua(b);
          } catch (d) {
            return;
          }
          if ((b = "function" === typeof c))
            (c = c && c.toString && c.toString()),
              (b = "string" === typeof c && -1 != c.indexOf("[native code]"));
          return b;
        }),
        (a[10] = function () {
          return window == window.top;
        }),
        (a[6] = function (b) {
          return Qa(P(pf).h(), parseInt(b, 10));
        }),
        (a[27] = function (b) {
          b = rf(b, "boolean");
          return void 0 !== b ? b : void 0;
        }),
        (a[60] = function (b) {
          try {
            return !!w.document.querySelector(b);
          } catch (c) {}
        }),
        a);
      a = {};
      this[N] =
        ((a[3] = function () {
          return Bc();
        }),
        (a[6] = function (b) {
          b = rf(b, "number");
          return void 0 !== b ? b : void 0;
        }),
        (a[11] = function (b) {
          b = Cc(void 0 === b ? "" : b, w);
          return null == b ? void 0 : b % 1e3;
        }),
        a);
      a = {};
      this[qe] =
        ((a[2] = function () {
          return window.location.href;
        }),
        (a[3] = function () {
          try {
            return window.top.location.hash;
          } catch (b) {
            return "";
          }
        }),
        (a[4] = function (b) {
          b = rf(b, "string");
          return void 0 !== b ? b : void 0;
        }),
        a);
    };
  var tf = function () {
    var a = void 0 === a ? w : a;
    return a.ggeac || (a.ggeac = {});
  };
  var vf = function (a) {
    y.call(this, a, -1, uf);
  };
  u(vf, y);
  vf.prototype.getId = function () {
    return B(this, 1, 0);
  };
  vf.prototype.B = function () {
    return B(this, 7, 0);
  };
  var uf = [2];
  var xf = function (a) {
    y.call(this, a, -1, wf);
  };
  u(xf, y);
  xf.prototype.B = function () {
    return B(this, 5, 0);
  };
  var wf = [2];
  var zf = function (a) {
    y.call(this, a, -1, yf);
  };
  u(zf, y);
  var Bf = function (a) {
    y.call(this, a, -1, Af);
  };
  u(Bf, y);
  Bf.prototype.B = function () {
    return B(this, 1, 0);
  };
  var Cf = function (a) {
    y.call(this, a);
  };
  u(Cf, y);
  var yf = [1, 4, 2, 3],
    Af = [2];
  var Df = [12, 13, 20],
    Ef = function () {},
    Ff = function (a, b, c, d, e) {
      e = void 0 === e ? {} : e;
      var f = void 0 === e.$ ? !1 : e.$,
        g = void 0 === e.aa ? {} : e.aa;
      e = void 0 === e.ba ? [] : e.ba;
      a.j = b;
      a.o = {};
      a.s = f;
      a.l = g;
      b = {};
      a.g = ((b[c] = []), (b[4] = []), b);
      a.i = {};
      (c = je()) &&
        La(c.split(",") || [], function (h) {
          (h = parseInt(h, 10)) && (a.i[h] = !0);
        });
      La(e, function (h) {
        a.i[h] = !0;
      });
      a.h = d;
      return a;
    },
    Gf = function (a, b, c) {
      if (a.o[b])
        return (
          0.001 >= Math.random() && Hc({ b: c, dp: b }, "tagging_dupdiv"), !0
        );
      a.o[b] = !0;
      return !1;
    },
    Kf = function (a, b, c) {
      var d = [],
        e = Hf(a.j, b);
      if ((9 !== b && Gf(a, b, c)) || !e.length) {
        var f;
        null == (f = a.h) || Ce(f, b, c, d, []);
        return d;
      }
      var g = Qa(Df, b),
        h = [];
      La(e, function (l) {
        var m = new Wd();
        if ((l = If(a, l, c, m)))
          0 !== D(m, Xd) && h.push(m),
            (m = l.getId()),
            d.push(m),
            Jf(a, m, g ? 4 : c),
            (l = G(l, O, 2)) && (g ? Se(l, Ue(), a.h, m) : Se(l, [c], a.h, m));
      });
      var k;
      null == (k = a.h) || Ce(k, b, c, d, h);
      return d;
    },
    Jf = function (a, b, c) {
      a.g[c] || (a.g[c] = []);
      a = a.g[c];
      Qa(a, b)
        ? Hc({ eids: JSON.stringify(a), dup: b }, "gpt_dupeid")
        : a.push(b);
    },
    Lf = function (a, b) {
      a.j.push.apply(
        a.j,
        t(
          Ma(
            Na(b, function (c) {
              return new Bf(c);
            }),
            function (c) {
              return !Qa(Df, c.B());
            }
          )
        )
      );
    },
    If = function (a, b, c, d) {
      var e = P(Ee).g;
      if (!ve(F(b, le, 3), e)) return null;
      var f = G(b, vf, 2),
        g = f.length * B(b, 1, 0),
        h = B(b, 6, 0);
      if (h) {
        nb(d, 1, Xd, h);
        g = e[N];
        switch (c) {
          case 2:
            var k = g[8];
            break;
          case 1:
            k = g[7];
        }
        c = void 0;
        if (k)
          try {
            (c = k(h)), C(d, 3, c);
          } catch (l) {}
        return (b = Mf(b, c)) ? Nf(a, [b], 1) : null;
      }
      if ((h = B(b, 10, 0))) {
        nb(d, 2, Xd, h);
        g = null;
        switch (c) {
          case 1:
            g = e[N][9];
            break;
          case 2:
            g = e[N][10];
            break;
          default:
            return null;
        }
        c = g ? g(String(h)) : void 0;
        if (void 0 === c && 1 === B(b, 11, 0)) return null;
        void 0 !== c && C(d, 3, c);
        return (b = Mf(b, c)) ? Nf(a, [b], 1) : null;
      }
      d = e
        ? Ma(f, function (l) {
            return ve(F(l, le, 3), e);
          })
        : f;
      return d.length
        ? (b = B(b, 4, 0))
          ? Of(a, b, g, d)
          : Nf(a, d, g / 1e3)
        : null;
    },
    Of = function (a, b, c, d) {
      var e = null != a.l[b] ? a.l[b] : 1e3;
      if (0 >= e) return null;
      d = Nf(a, d, c / e);
      a.l[b] = d ? 0 : e - c;
      return d;
    },
    Nf = function (a, b, c) {
      var d = a.i,
        e = Oa(b, function (f) {
          return !!d[f.getId()];
        });
      return e ? e : a.s ? null : uc(b, c);
    },
    Pf = function (a, b) {
      S(
        We,
        function (c) {
          a.i[c] = !0;
        },
        b
      );
      S(
        Ze,
        function (c, d) {
          return Kf(a, c, d);
        },
        b
      );
      S(
        $e,
        function (c) {
          return (a.g[c] || []).concat(a.g[4]);
        },
        b
      );
      S(
        jf,
        function (c) {
          return Lf(a, c);
        },
        b
      );
      S(
        Xe,
        function (c, d) {
          return Jf(a, c, d);
        },
        b
      );
    },
    Hf = function (a, b) {
      return (
        ((a = Oa(a, function (c) {
          return c.B() == b;
        })) &&
          G(a, xf, 2)) ||
        []
      );
    },
    Mf = function (a, b) {
      var c = G(a, vf, 2),
        d = c.length,
        e = B(a, 8, 0);
      a = d * B(a, 1, 0) - 1;
      b = void 0 !== b ? b : Math.floor(1e3 * tc(window));
      d = (b - e) % d;
      if (b < e || b - e - d >= a) return null;
      c = c[d];
      e = P(Ee).g;
      return !c || (e && !ve(F(c, le, 3), e)) ? null : c;
    };
  var Qf = function () {
      var a = {};
      this.h = function (b, c) {
        return null != a[b] ? a[b] : c;
      };
      this.i = function (b, c) {
        return null != a[b] ? a[b] : c;
      };
      this.l = function (b, c) {
        return null != a[b] ? a[b] : c;
      };
      this.g = function (b, c) {
        return null != a[b] ? a[b] : c;
      };
      this.j = function () {};
    },
    U = function (a) {
      return P(Qf).h(a.g, a.defaultValue);
    },
    Rf = function (a) {
      return P(Qf).i(a.g, a.defaultValue);
    };
  var Sf = function () {
      this.g = function () {};
    },
    Tf = function (a) {
      P(Sf).g(a);
    };
  var Uf,
    Vf,
    Wf,
    Xf,
    Yf,
    Zf,
    bg = function (a) {
      var b = P($f),
        c = { $: V()[211], aa: V()[227], ba: V()[226] },
        d = void 0,
        e = 2;
      d = void 0 === d ? tf() : d;
      e = void 0 === e ? 0 : e;
      var f =
        void 0 === f
          ? new Be(
              null != (Xf = null == (Uf = F(a, Cf, 5)) ? void 0 : B(Uf, 2, 0))
                ? Xf
                : 0,
              null != (Yf = null == (Vf = F(a, Cf, 5)) ? void 0 : B(Vf, 4, 0))
                ? Yf
                : 0,
              null != (Zf = null == (Wf = F(a, Cf, 5)) ? void 0 : lb(Wf, 3))
                ? Zf
                : !1
            )
          : f;
      d.hasOwnProperty("init-done")
        ? (T(
            jf,
            d
          )(
            Na(G(a, Bf, 2), function (g) {
              return g.toJSON();
            })
          ),
          T(kf, d)(
            Na(G(a, O, 1), function (g) {
              return g.toJSON();
            }),
            e
          ),
          b && T(lf, d)(b),
          ag(d, e))
        : (Pf(Ff(P(Ef), G(a, Bf, 2), e, f, c), d),
          mf(d),
          nf(d),
          of(d),
          ag(d, e),
          Se(G(a, O, 1), [e], f),
          (Ge = Ge || !(!c || !c.ya)),
          Tf(P(sf)),
          b && Tf(b));
    },
    ag = function (a, b) {
      a = void 0 === a ? tf() : a;
      b = void 0 === b ? 0 : b;
      var c = a,
        d = b;
      d = void 0 === d ? 0 : d;
      qf(P(pf), c, d);
      cg(a, b);
      P(Sf).g = T(lf, a);
      P(Qf).j();
    },
    cg = function (a, b) {
      var c = P(Qf);
      c.h = function (d, e) {
        return T(bf, a, function () {
          return !1;
        })(d, e, b);
      };
      c.i = function (d, e) {
        return T(cf, a, function () {
          return 0;
        })(d, e, b);
      };
      c.l = function (d, e) {
        return T(df, a, function () {
          return "";
        })(d, e, b);
      };
      c.g = function (d, e) {
        return T(ef, a, function () {
          return [];
        })(d, e, b);
      };
      c.j = function () {
        T(Ye, a)(b);
      };
    };
  var dg = P(Qf).g(ad.g, ad.defaultValue);
  function eg(a) {
    a = void 0 === a ? window.document : a;
    Ec(dg, a);
  }
  var fg = function (a) {
    a = void 0 === a ? w : a;
    return (a = a.performance) && a.now ? a.now() : null;
  };
  var gg = w.performance,
    hg = !!(gg && gg.mark && gg.measure && gg.clearMarks),
    ig = ic(function () {
      var a;
      if ((a = hg)) (a = je()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
      return a;
    });
  var jg = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
    kg = function (a, b, c) {
      this.g = void 0 === a ? null : a;
      this.j = void 0 === b ? "jserror" : b;
      this.h = null;
      this.i = void 0 === c ? 0.01 : c;
      this.o = this.l;
      this.s = null;
    },
    lg = function (a, b) {
      a.h = b;
    };
  kg.prototype.l = function (a, b, c, d, e) {
    c = void 0 === c ? this.i : c;
    e = void 0 === e ? this.j : e;
    if (Math.random() > c) return !1;
    (b.error && b.meta && b.id) || (b = new he(b, { context: a, id: e }));
    if (d || this.h) (b.meta = {}), this.h && this.h(b.meta), d && d(b.meta);
    w.google_js_errors = w.google_js_errors || [];
    w.google_js_errors.push(b);
    if (!w.error_rep_loaded) {
      c = dc(jg);
      var f;
      a = w.document;
      b = null != (f = this.s) ? f : new H(fc(c).toString(), Db);
      f = Dc("SCRIPT", a);
      f.src = fc(b);
      gc(f);
      (a = a.getElementsByTagName("script")[0]) &&
        a.parentNode &&
        a.parentNode.insertBefore(f, a);
      w.error_rep_loaded = !0;
    }
    return !1;
  };
  var mg = function (a, b) {
    try {
      var c = a.g && a.g.start("420", 3);
      b();
      a.g && c && a.g.end(c);
    } catch (d) {
      if (
        (a.g &&
          c &&
          (b = c) &&
          gg &&
          ig() &&
          (gg.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
          gg.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
        !a.o(420, d, a.i, void 0, a.j))
      )
        throw d;
    }
  };
  var ng = P(Qf).g(bd.g, bd.defaultValue);
  function og(a) {
    a = void 0 === a ? window.document : a;
    Ec(ng, a);
  }
  var pg = Bb("gpt/pubads_impl_");
  var qg = function (a, b) {
      var c = fg(b);
      c &&
        ((a = { label: a, type: 9, value: c }),
        (b = b.google_js_reporting_queue = b.google_js_reporting_queue || []),
        2048 > b.length && b.push(a));
    },
    rg = function (a, b, c) {
      var d = window;
      return function () {
        var e = fg(),
          f = 3;
        try {
          var g = b.apply(this, arguments);
        } catch (h) {
          f = 13;
          if (c) return c(a, h), g;
          throw h;
        } finally {
          d.google_measure_js_timing &&
            e &&
            ((e = {
              label: a.toString(),
              value: e,
              duration: (fg() || 0) - e,
              type: f,
            }),
            (f = d.google_js_reporting_queue =
              d.google_js_reporting_queue || []),
            2048 > f.length && f.push(e));
        }
        return g;
      };
    },
    sg = function (a, b) {
      return rg(a, b, function (c, d) {
        new kg().l(c, d);
      });
    };
  var tg = function () {
    this.i = this.i;
    this.j = this.j;
  };
  tg.prototype.i = !1;
  tg.prototype.M = function () {
    if (this.j) for (; this.j.length; ) this.j.shift()();
  };
  function W(a, b) {
    return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
  }
  function ug(a, b) {
    return "&" + a + "=" + b.toFixed(3);
  }
  function vg() {
    var a = new n.Set();
    try {
      if ("undefined" === typeof googletag || !googletag.pubads) return a;
      for (
        var b = googletag.pubads(), c = r(b.getSlots()), d = c.next();
        !d.done;
        d = c.next()
      )
        a.add(d.value.getSlotId().getDomId());
    } catch (e) {}
    return a;
  }
  function wg(a) {
    a = a.id;
    return (
      null != a &&
      (vg().has(a) ||
        p(a, "startsWith").call(a, "google_ads_iframe_") ||
        p(a, "startsWith").call(a, "aswift"))
    );
  }
  function xg(a, b, c) {
    if (!a.sources) return !1;
    var d = Rf(ed);
    switch (yg(a)) {
      case 2:
        var e = zg(a);
        if (e)
          return c.some(function (g) {
            return Ag(e, g, d);
          });
      case 1:
        var f = Bg(a);
        if (f)
          return b.some(function (g) {
            return Ag(f, g, d);
          });
    }
    return !1;
  }
  function yg(a) {
    if (!a.sources) return 0;
    a = a.sources.filter(function (b) {
      return b.previousRect && b.currentRect;
    });
    if (1 <= a.length) {
      a = a[0];
      if (a.previousRect.top < a.currentRect.top) return 2;
      if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
  }
  function Bg(a) {
    return Cg(a, function (b) {
      return b.currentRect;
    });
  }
  function zg(a) {
    return Cg(a, function (b) {
      return b.previousRect;
    });
  }
  function Cg(a, b) {
    return a.sources.reduce(function (c, d) {
      d = b(d);
      return c
        ? d && 0 !== d.width * d.height
          ? d.top < c.top
            ? d
            : c
          : c
        : d;
    }, null);
  }
  var Dg = function () {
    tg.call(this);
    this.h = this.g = this.H = this.G = this.L = 0;
    this.W = this.T = Number.NEGATIVE_INFINITY;
    this.O = this.R = this.S = this.U = this.Z = this.o = this.Y = this.J = 0;
    this.P = !1;
    this.I = this.F = this.s = 0;
    var a = document.querySelector("[data-google-query-id]");
    this.X = a ? a.getAttribute("data-google-query-id") : null;
    this.l = null;
    this.V = !1;
    this.N = function () {};
  };
  u(Dg, tg);
  var Gg = function () {
      var a = new Dg();
      if (U(cd) && !window.google_plmetrics && window.PerformanceObserver) {
        window.google_plmetrics = !0;
        for (
          var b = r([
              "layout-shift",
              "largest-contentful-paint",
              "first-input",
              "longtask",
            ]),
            c = b.next();
          !c.done;
          c = b.next()
        )
          (c = c.value), Eg(a).observe({ type: c, buffered: !U(gd) });
        Fg(a);
      }
    },
    Eg = function (a) {
      a.l ||
        (a.l = new PerformanceObserver(
          sg(640, function (b) {
            var c = Hg !== window.scrollX || Ig !== window.scrollY ? [] : Jg,
              d = Kg();
            b = r(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next())
              switch (((e = e.value), e.entryType)) {
                case "layout-shift":
                  var f = a;
                  if (!e.hadRecentInput && (!U(dd) || 0.01 < e.value)) {
                    f.L += Number(e.value);
                    Number(e.value) > f.G && (f.G = Number(e.value));
                    f.H += 1;
                    var g = xg(e, c, d);
                    g && ((f.o += e.value), f.U++);
                    if (5e3 < e.startTime - f.T || 1e3 < e.startTime - f.W)
                      (f.T = e.startTime), (f.g = 0), (f.h = 0);
                    f.W = e.startTime;
                    f.g += e.value;
                    g && (f.h += e.value);
                    f.g > f.J &&
                      ((f.J = f.g),
                      (f.Z = f.h),
                      (f.Y = e.startTime + e.duration));
                  }
                  break;
                case "largest-contentful-paint":
                  a.S = Math.floor(e.renderTime || e.loadTime);
                  a.R = e.size;
                  break;
                case "first-input":
                  a.O = Number((e.processingStart - e.startTime).toFixed(3));
                  a.P = !0;
                  break;
                case "longtask":
                  (e = Math.max(0, e.duration - 50)),
                    (a.s += e),
                    (a.F = Math.max(a.F, e)),
                    (a.I += 1);
              }
          })
        ));
      return a.l;
    },
    Fg = function (a) {
      var b = sg(641, function () {
          var f = document;
          2 ==
            ({ visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
              f.visibilityState ||
                f.webkitVisibilityState ||
                f.mozVisibilityState ||
                ""
            ] || 0) && Lg(a);
        }),
        c = sg(641, function () {
          return void Lg(a);
        });
      document.addEventListener("visibilitychange", b);
      document.addEventListener("unload", c);
      var d = Rf(fd),
        e;
      0 < d && (e = setTimeout(c, 1e3 * d));
      a.N = function () {
        document.removeEventListener("visibilitychange", b);
        document.removeEventListener("unload", c);
        Eg(a).disconnect();
        e && clearTimeout(e);
      };
    };
  Dg.prototype.M = function () {
    tg.prototype.M.call(this);
    this.N();
  };
  var Lg = function (a) {
      if (!a.V) {
        a.V = !0;
        Eg(a).takeRecords();
        var b =
          "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
        window.LayoutShift &&
          ((b += ug("cls", a.L)),
          (b += ug("mls", a.G)),
          (b += W("nls", a.H)),
          window.LayoutShiftAttribution &&
            ((b += ug("cas", a.o)), (b += W("nas", a.U))),
          (b += ug("wls", a.J)),
          (b += ug("tls", a.Y)),
          window.LayoutShiftAttribution && (b += ug("was", a.Z)));
        window.LargestContentfulPaint &&
          ((b += W("lcp", a.S)), (b += W("lcps", a.R)));
        window.PerformanceEventTiming && a.P && (b += W("fid", a.O));
        window.PerformanceLongTaskTiming &&
          ((b += W("cbt", a.s)), (b += W("mbt", a.F)), (b += W("nlt", a.I)));
        for (
          var c = 0,
            d = r(document.getElementsByTagName("iframe")),
            e = d.next();
          !e.done;
          e = d.next()
        )
          wg(e.value) && c++;
        b += W("nif", c);
        c = window.google_unique_id;
        b += W("ifi", "number" === typeof c ? c : 0);
        c = P(pf).h();
        b += "&eid=" + encodeURIComponent(c.join());
        b += "&top=" + (w === w.top ? 1 : 0);
        b += a.X ? "&qqid=" + encodeURIComponent(a.X) : W("pvsid", Fc(w));
        window.googletag && (b += "&gpt=1");
        window.fetch(b, {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        });
        a.i || ((a.i = !0), a.M());
      }
    },
    Ag = function (a, b, c) {
      if (0 === c) return !0;
      var d = Math.min(a.right, b.right) - Math.max(a.left, b.left);
      a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
      return 0 >= d || 0 >= a
        ? !1
        : (100 * d * a) / ((b.right - b.left) * (b.bottom - b.top)) >= c;
    },
    Kg = function () {
      var a = [].concat(t(document.getElementsByTagName("iframe"))).filter(wg),
        b = []
          .concat(t(vg()))
          .map(function (c) {
            return document.getElementById(c);
          })
          .filter(function (c) {
            return null !== c;
          });
      Hg = window.scrollX;
      Ig = window.scrollY;
      return (Jg = [].concat(t(a), t(b)).map(function (c) {
        return c.getBoundingClientRect();
      }));
    },
    Hg = void 0,
    Ig = void 0,
    Jg = [];
  var Mg = function (a) {
      a = void 0 === a ? window : a;
      return !a.PeriodicSyncManager;
    },
    Ng = function () {
      var a = void 0 === a ? window : a;
      if ((!Mg(a) && U(hd)) || (Mg(a) && U(id))) {
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b;
      }
      return !1;
    },
    Og = {
      issuerOrigin: "https://attestation.android.com",
      issuancePath: "/att/i",
      redemptionPath: "/att/r",
      shouldRedeemToken: function () {
        return Ng();
      },
      shouldRequestToken: function () {
        return Ng();
      },
    },
    X = {
      issuerOrigin: "https://pagead2.googlesyndication.com",
      issuancePath: "/dtt/i",
      redemptionPath: "/dtt/r",
      getStatePath: "/dtt/s",
      shouldRedeemToken: function () {
        return !0;
      },
      shouldRequestToken: function () {
        return !0;
      },
    };
  var Pg = P(Qf).g(nd.g, nd.defaultValue),
    Rg = function (a, b) {
      a = void 0 === a ? null : a;
      b = void 0 === b ? !1 : b;
      tg.call(this);
      this.h = b;
      this.g = [];
      U(pd)
        ? (Ng() && this.g.push(Og), U(kd) && this.g.push(X))
        : (this.g = a || [Og]);
      if (
        document.hasTrustToken &&
        !U(jd) &&
        !Array.isArray(window.goog_tt_state)
      ) {
        var c = Qg(this);
        Object.defineProperty(window, "goog_tt_state", {
          configurable: !1,
          get: function () {
            return c.slice();
          },
        });
      }
    };
  u(Rg, tg);
  var Sg = function () {
      var a = void 0 === a ? window.document : a;
      Ec(Pg, a);
    },
    Tg = function (a) {
      var b = V()[221],
        c = V()[150];
      return (
        U(md) ||
        (b && (U(qd) || ".google.de" != c)) ||
        ".google.ch" === c ||
        "function" === typeof a.__tcfapi
      );
    },
    Qg = function (a) {
      return a.g.map(function (b) {
        return { issuerOrigin: b.issuerOrigin, state: U(ld) && !a.h ? 12 : 1 };
      });
    },
    Y = function (a, b, c) {
      var d = p(window.goog_tt_state, "find").call(
        window.goog_tt_state,
        function (e) {
          return e.issuerOrigin === a;
        }
      );
      d && ((d.state = b), U(pd) && void 0 != c && (d.hasRedemptionRecord = c));
    },
    Ug = function () {
      var a = window.goog_tt_state;
      return (
        Array.isArray(a) &&
        a.some(function (b) {
          return 1 != b.state;
        })
      );
    },
    Vg = function (a) {
      var b = a.issuerOrigin + a.redemptionPath,
        c = {
          keepalive: !0,
          trustToken: {
            type: "token-redemption",
            issuer: a.issuerOrigin,
            refreshPolicy: "none",
          },
        };
      Y(a.issuerOrigin, 2);
      return window
        .fetch(b, c)
        .then(function (d) {
          if (!d.ok) throw Error(d.status + ": Network response was not ok!");
          Y(a.issuerOrigin, 6, !0);
        })
        .catch(function (d) {
          d && "NoModificationAllowedError" === d.name
            ? Y(a.issuerOrigin, 6, !0)
            : Y(a.issuerOrigin, 5);
        });
    },
    Wg = function (a, b) {
      var c = a.issuerOrigin + a.issuancePath,
        d = { trustToken: { type: "token-request" } };
      U(od) && (d.keepalive = !0);
      Y(a.issuerOrigin, 8);
      return window
        .fetch(c, d)
        .then(function (e) {
          if (!e.ok) throw Error(e.status + ": Network response was not ok!");
          Y(a.issuerOrigin, 10);
          if (b) return Vg(a);
        })
        .catch(function (e) {
          if (e && "NoModificationAllowedError" === e.name) {
            if ((Y(a.issuerOrigin, 10), b)) return Vg(a);
          } else Y(a.issuerOrigin, 9);
        });
    },
    Xg = function () {
      Y(Og.issuerOrigin, 13);
      return document.hasTrustToken(Og.issuerOrigin).then(function (a) {
        return a ? Vg(Og) : Wg(Og, !0);
      });
    },
    Yg = function () {
      Y(X.issuerOrigin, 13);
      if (window.Promise) {
        var a = document
            .hasTrustToken(X.issuerOrigin)
            .then(function (d) {
              return d;
            })
            .catch(function () {
              return window.Promise.reject(19);
            }),
          b = X.issuerOrigin + X.redemptionPath,
          c = {
            keepalive: !0,
            trustToken: { type: "token-redemption", refreshPolicy: "none" },
          };
        Y(X.issuerOrigin, 16);
        return a
          .then(function (d) {
            return window
              .fetch(b, c)
              .then(function (e) {
                if (!e.ok)
                  throw Error(e.status + ": Network response was not ok!");
                Y(X.issuerOrigin, 18, !0);
              })
              .catch(function (e) {
                if (e && "NoModificationAllowedError" === e.name)
                  Y(X.issuerOrigin, 18, !0);
                else {
                  if (d) return window.Promise.reject(17);
                  Y(X.issuerOrigin, 17);
                }
              });
          })
          .then(function () {
            return document
              .hasTrustToken(X.issuerOrigin)
              .then(function (d) {
                return d;
              })
              .catch(function () {
                return window.Promise.reject(19);
              });
          })
          .then(function (d) {
            var e = X.issuerOrigin + X.getStatePath;
            Y(X.issuerOrigin, 20);
            return window
              .fetch(e + "?ht=" + d, {
                trustToken: {
                  type: "send-redemption-record",
                  issuers: [X.issuerOrigin],
                },
              })
              .then(function (f) {
                if (!f.ok)
                  throw Error(f.status + ": Network response was not ok!");
                Y(X.issuerOrigin, 22);
                return f.text().then(function (g) {
                  return JSON.parse(g);
                });
              })
              .catch(function () {
                return window.Promise.reject(21);
              });
          })
          .then(function (d) {
            var e = X.issuerOrigin + X.issuancePath;
            return d && d.srqt && d.cs
              ? (Y(X.issuerOrigin, 23),
                window
                  .fetch(e + "?cs=" + d.cs, {
                    keepalive: !0,
                    trustToken: { type: "token-request" },
                  })
                  .then(function (f) {
                    if (!f.ok)
                      throw Error(f.status + ": Network response was not ok!");
                    Y(X.issuerOrigin, 25);
                    return d;
                  })
                  .catch(function () {
                    return window.Promise.reject(24);
                  }))
              : d;
          })
          .then(function (d) {
            if (d && d.srdt && d.cs)
              return (
                Y(X.issuerOrigin, 26),
                window
                  .fetch(b + "?cs=" + d.cs, {
                    keepalive: !0,
                    trustToken: {
                      type: "token-redemption",
                      refreshPolicy: "refresh",
                    },
                  })
                  .then(function (e) {
                    if (!e.ok)
                      throw Error(e.status + ": Network response was not ok!");
                    Y(X.issuerOrigin, 28, !0);
                  })
                  .catch(function () {
                    return window.Promise.reject(27);
                  })
              );
          })
          .then(function () {
            Y(X.issuerOrigin, 29);
          })
          .catch(function (d) {
            if (19 == d || 17 == d || 21 == d || 24 == d || 27 == d)
              Y(X.issuerOrigin, d);
            else throw d;
          });
      }
    },
    Zg = function (a) {
      if (document.hasTrustToken && !U(jd) && (!U(ld) || a.h)) {
        if (Ug()) return window.goog_tt_promise;
        var b = [];
        U(pd)
          ? Ng() && b.push(Xg())
          : a.g.forEach(function (c) {
              Y(c.issuerOrigin, 13);
              var d = c.shouldRedeemToken(),
                e = c.shouldRequestToken();
              if (d || e) {
                var f = document
                  .hasTrustToken(c.issuerOrigin)
                  .then(function (g) {
                    if (g) {
                      if (d) return Vg(c);
                    } else {
                      if (e) return Wg(c, d);
                      Y(c.issuerOrigin, 3);
                    }
                  });
                b.push(f);
              } else Y(c.issuerOrigin, 7);
            });
        U(kd) && b.push(Yg());
        if (window.Promise && window.Promise.all)
          return (
            (a = window.Promise.all(b)),
            "object" != typeof window.goog_tt_promise &&
              Object.defineProperty(window, "goog_tt_promise", {
                configurable: !1,
                value: a,
                writable: !1,
              }),
            a
          );
      }
    };
  var $g =
      "platform platformVersion architecture model uaFullVersion bitness".split(
        " "
      ),
    ah = function (a) {
      return a.navigator &&
        a.navigator.userAgentData &&
        "function" === typeof a.navigator.userAgentData.getHighEntropyValues
        ? a.navigator.userAgentData.getHighEntropyValues($g).then(function (b) {
            var c = new xd();
            c = A(c, 1, b.platform);
            c = A(c, 2, b.platformVersion);
            c = A(c, 3, b.architecture);
            c = A(c, 4, b.model);
            c = A(c, 5, b.uaFullVersion);
            return A(c, 9, b.bitness);
          })
        : null;
    };
  var bh = function () {
      return w.googletag || (w.googletag = {});
    },
    ch = function (a, b) {
      var c = bh();
      c.hasOwnProperty(a) || (c[a] = b);
    },
    dh = function (a, b) {
      a.addEventListener
        ? a.addEventListener("load", b, !1)
        : a.attachEvent && a.attachEvent("onload", b);
    };
  var Z = {
    247: "https://securepubads.g.doubleclick.net",
    7: 0.02,
    23: 0.001,
    38: 0.001,
    58: 1,
    150: ".google.co.in",
    211: !1,
    253: !1,
    172: null,
    246: [],
    227: {},
    226: [],
    252: null,
    258: null,
    251: null,
    259: null,
  };
  Z[6] = (function (a, b) {
    b = void 0 === b ? !0 : b;
    try {
      for (var c = null; c != a; c = a, a = a.parent)
        switch (a.location.protocol) {
          case "https:":
            return !0;
          case "file:":
            return b;
          case "http:":
            return !1;
        }
    } catch (d) {}
    return !0;
  })(window);
  Z[36] = Ac("false");
  Z[148] = Fe;
  Z[221] = Ac("");
  Z[204] = zc("{{MOD}}", -1);
  Z[257] = Ac("false");
  Z[260] = void 0;
  Z[262] = Ac("false");
  var eh = function () {
      p(Object, "assign").call(Object, this, Z);
    },
    V = function () {
      return P(eh);
    },
    fh = function (a, b) {
      V()[a] = b;
    },
    gh = bh(),
    hh = V();
  p(Object, "assign").call(Object, hh, gh._vars_);
  gh._vars_ = hh;
  var ih = new n.WeakMap(),
    jh = function (a, b) {
      a = [a];
      for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
      return a.join("\x0B");
    };
  var kh = (function (a, b) {
    b = void 0 === b ? jh : b;
    var c = xa(a),
      d = function (e) {
        e = r(e);
        e.next();
        e = ka(e);
        return b(c, e);
      };
    return function (e) {
      for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
      g = this || w;
      var h = ih.get(g);
      h || ((h = {}), ih.set(g, h));
      g = h;
      h = [this].concat(t(f));
      f = d ? d(h) : h;
      if (Object.prototype.hasOwnProperty.call(g, f)) g = g[f];
      else {
        var k = r(h);
        h = k.next().value;
        k = ka(k);
        h = a.apply(h, k);
        g = g[f] = h;
      }
      return g;
    };
  })(
    function (a) {
      return (null === a || void 0 === a ? 0 : a.src)
        ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|pagead2\.googlesyndication\.com)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(
            a.src
          )
          ? 0
          : 1
        : 2;
    },
    function (a, b) {
      var c;
      return (
        a + "\x0B" + (null === (c = b[0]) || void 0 === c ? void 0 : c.src)
      );
    }
  );
  function lh() {
    return 0 === kh(V()[172]);
  }
  function mh() {
    return zc("1") || 0;
  }
  function nh() {
    var a = Number("2021101201");
    1 > a || Math.floor(a) !== a
      ? (Hc({ v: "2021101201" }, "gpt_inv_ver"), (a = "1"))
      : (a = "2021101201");
    return a;
  }
  var $f = function () {
    var a = {};
    this[pe] =
      ((a[3] = lh),
      (a[2] = V()[36]),
      (a[17] = function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        return p(c, "includes").call(c, String(Cc()));
      }),
      (a[59] = function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        d = p(c, "includes");
        var e = String,
          f;
        var g = void 0 === g ? window : g;
        var h;
        g =
          null !=
          (h =
            null == (f = nc(g.location.href.match(mc)[3] || null))
              ? void 0
              : f.split("."))
            ? h
            : [];
        f =
          2 > g.length
            ? null
            : "uk" === g[g.length - 1]
            ? 3 > g.length
              ? null
              : wc(g.splice(g.length - 3).join("."))
            : wc(g.splice(g.length - 2).join("."));
        return d.call(c, e(f));
      }),
      (a[21] = function () {
        return V()[148];
      }),
      (a[61] = function () {
        return V()[221];
      }),
      (a[50] = function () {
        return 1 === Math.floor(new Date().getTime() / 24 / 60 / 60 / 1e3) % 2;
      }),
      (a[54] = function () {
        return V()[259];
      }),
      a);
    a = {};
    this[N] =
      ((a[1] = function () {
        return V()[204];
      }),
      (a[4] = mh),
      a);
    this[qe] = {};
  };
  function oh(a) {
    var b = new zf(V()[246]);
    a = new zf(a);
    if (!G(b, O, 1).length && G(a, O, 1).length) {
      var c = G(a, O, 1);
      sb(b, 1, c);
    }
    !G(b, Bf, 2).length &&
      G(a, Bf, 2).length &&
      ((c = G(a, Bf, 2)), sb(b, 2, c));
    null == z(b, 5) && null != z(a, 5) && ((a = F(a, Cf, 5)), pb(b, 5, a));
    bg(b);
  }
  var ph = function (a) {
      if ((a = a.scripts))
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          if (-1 < c.src.indexOf("/tag/js/gpt")) return c;
        }
      return null;
    },
    qh,
    rh,
    sh = function (a) {
      a =
        (null != (rh = null == (qh = a) ? void 0 : qh.src) ? rh : "").match(
          mc
        )[3] || null;
      return "pagead2.googlesyndication.com" === nc(a);
    },
    th = function (a) {
      var b = a.currentScript;
      return (
        "complete" === a.readyState ||
        "loaded" === a.readyState ||
        !(null == b || !b.async)
      );
    },
    uh = function (a) {
      a = sh(a)
        ? Bb("https://pagead2.googlesyndication.com/")
        : Bb("https://securepubads.g.doubleclick.net/");
      a = Ib([a, pg, Bb("2021101201"), Bb(".js")]);
      var b = Rf($c);
      return b ? Hb(a, String(b)) : a;
    },
    vh = function () {
      this.i = [];
      this.h = this.g = void 0;
    },
    wh = function (a, b, c) {
      a.g = b;
      a.h = c;
      for (var d = r(a.i), e = d.next(); !e.done; e = d.next())
        (e = e.value), e(b, c);
      a.i.length = 0;
    },
    xh = function (a, b, c) {
      var d = a.location.host,
        e = b && pc(b.src, "domain"),
        f = b && pc(b.src, "network-code");
      if (!d && !e && !f)
        return wh(c, void 0, new a.Error("no provided or inferred data")), null;
      a = sh(b)
        ? Bb("https://pagead2.googlesyndication.com")
        : Bb("https://securepubads.g.doubleclick.net");
      return Hb(Ib([a, Bb("/pagead/ppub_config")]), {
        ippd: d,
        pppd: e,
        pppnc: f,
      });
    },
    yh = function (a, b) {
      var c = new a.XMLHttpRequest(),
        d = new vh();
      b = xh(a, b, d);
      fh(260, function (e) {
        void 0 !== d.g || d.h ? e(d.g, d.h) : d.i.push(e);
      });
      b &&
        (c.open("GET", b.toString(), !0),
        (c.withCredentials = !1),
        (c.onload = function () {
          300 > c.status
            ? (qg("13", a), wh(d, 204 == c.status ? "" : c.responseText))
            : wh(d, void 0, new a.Error("resp:" + c.status));
        }),
        (c.onerror = function () {
          return wh(
            d,
            void 0,
            new a.Error("s:" + c.status + " rs:" + c.readyState)
          );
        }),
        c.send());
    },
    zh = function (a, b, c, d) {
      fh(172, d);
      fh(259, th(a));
      oh(b);
      P(pf).g(12);
      P(pf).g(5);
      U(sd) && (qc = !0);
      Sg();
      (U(ld) && Tg(c)) ||
        ((a = new Rg(null, !0)), 0 < Rf(rd) ? fh(258, Zg(a)) : Zg(a));
      (a = ah(c)) &&
        a.then(function (e) {
          return fh(251, ub(e));
        });
      og(c.document);
      eg(c.document);
    },
    Ah = function (a, b, c) {
      var d = bh();
      a = a || d.fifWin || window;
      b = b || a.document;
      var e = d.fifWin ? window : a;
      ch("_loaded_", !0);
      ch("getVersion", nh);
      ch("cmd", []);
      var f = b.currentScript || ph(b);
      zh(b, c, a, f);
      try {
        Gg();
      } catch (l) {}
      qg("1", a);
      a = uh(f);
      if (!V()[259]) {
        c = "gpt-impl-" + Math.random();
        try {
          hc(b, Ub(a, { id: c, nonce: kc() }));
        } catch (l) {}
        b.getElementById(c) && (d._loadStarted_ = !0);
      }
      if (!d._loadStarted_) {
        c = d.fifWin ? e.document : b;
        var g = Dc("SCRIPT");
        g.src = fc(a);
        gc(g);
        g.async = !0;
        var h = c.head || c.body || c.documentElement;
        "complete" !== e.document.readyState && d.fifWin
          ? dh(e, function () {
              return void h.appendChild(g);
            })
          : h.appendChild(g);
        d._loadStarted_ = !0;
      }
      var k;
      e === e.top &&
        (V()[259] ||
          (!b.currentScript && (null == (k = ph(b)) ? 0 : k.async))) &&
        (Ld(e), yh(e, f));
    };
  var Bh;
  a: {
    try {
      if (Array.isArray(E)) {
        Bh = E;
        break a;
      }
    } catch (a) {}
    Bh = [];
  }
  (function (a, b, c) {
    var d = new kg(null, "gpt_exception", 0.01);
    lg(d, function (e) {
      e.methodId = 420;
    });
    mg(d, function () {
      return Ah(a, b, c);
    });
  })(void 0, void 0, Bh);
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
  [
    [387858322, null, null, [1]],
    [null, 7, null, [null, 0.1]],
    [376190677, null, null, [1]],
    [514, null, null, [1]],
    [361174373, null, null, [1]],
    [
      362946046,
      null,
      null,
      null,
      [
        [
          [
            3,
            [
              [4, null, 15, null, null, null, null, ["49944529"]],
              [4, null, 15, null, null, null, null, ["5441"]],
            ],
          ],
          [1],
        ],
      ],
    ],
    [
      391385505,
      null,
      null,
      null,
      [
        [
          [
            3,
            [
              [4, null, 15, null, null, null, null, ["49944529"]],
              [4, null, 15, null, null, null, null, ["5441"]],
            ],
          ],
          [1],
        ],
      ],
    ],
    [null, 378290974, null, [null, 0.01]],
    [null, 397316938, null, [null, 1000]],
    [null, 385440135, null, [null, 1000]],
    [null, 377289019, null, [null, 10000]],
    [null, 385610149, null, [null, 300]],
    [504, null, null, [1]],
    [null, 529, null, [null, 20]],
    [null, 494, null, [null, 5000]],
    [400220753, null, null, [1]],
    [398567766, null, null, [1]],
    [399684634, null, null, [1]],
    [392185291, null, null, [1]],
    [20, null, null, null, [[[1, [[6, null, null, 3, null, 0]]], [1]]]],
    [
      null,
      388529191,
      null,
      null,
      [
        [
          [4, null, 59, null, null, null, null, ["4276767238"]],
          [null, 86400],
        ],
      ],
    ],
    [null, 492, null, [null, 0.01]],
    [null, 389357230, null, [null, 1000]],
    [401788394, null, null, [1]],
    [null, 398776877, null, [null, 60000]],
    [null, 374201269, null, [null, 60000]],
    [null, 371364213, null, [null, 60000]],
    [null, 373440923, null, [null, 0.0001]],
    [null, 376149757, null, [null, 0.0025]],
    [437, null, null, [1]],
    [null, 396668915, null, [null, 5]],
    [null, 47, null, [null, 1]],
    [null, null, 2, [null, null, "1-0-38"]],
    [474, null, null, [1]],
    [null, 360245595, null, [null, 200]],
    [396442598, null, null, [1]],
    [391906863, null, null, [1]],
    [null, 61, null, [null, 0.001]],
    [392881385, null, null, [1]],
    [1936, null, null, [1]],
    [null, 1921, null, [null, 72]],
    [null, 1920, null, [null, 24]],
    [null, 1922, null, [null, 5]],
    [null, 1917, null, [null, 300]],
    [384816473, null, null, [1]],
    [null, 1916, null, [null, 0.001]],
    [497, null, null, [1]],
    [382136472, null, null, [1]],
    [395496599, null, null, [1]],
    [1931, null, null, [1]],
    [
      null,
      null,
      null,
      [
        null,
        null,
        null,
        [
          "A/OOU4XAFfeAV4kM4+W9WBwNAHqq/bvtrRcJ1wpnNyO/i076BSUy1d14l2kBEgVmEuvxojSpD23172C6hBg2AQYAAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
          "AwrB+XVH/KV6HfZNVtSEqlUJi3yUbtCp0/TJRj+38NDIw19/9P1h7ECTtdLdhIzG0Bsl4n/0rVmttJtGUCcewgAAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
          "Ax15QOERqai2A5XWrDY38Eg07xh2T0pkhpDPJuDlxr7D2Ka8wHvklgK7tTPZOnT+8H31lwHto5JpvYV8jRn1WgIAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
        ],
      ],
      null,
      1934,
    ],
    [377431981, null, null, [1]],
    [1903, null, null, [1]],
    [1953, null, null, [1]],
    [1950, null, null, [1]],
    [1938, null, null, [1]],
    [null, 1929, null, [null, 50]],
    [
      null,
      null,
      null,
      [
        null,
        null,
        null,
        [
          "AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",
          "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
          "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
          "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
          "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
        ],
      ],
      null,
      1932,
    ],
    [396382471, null, null, [1]],
  ],
  [
    [
      20,
      [
        [
          50,
          [[31062930], [31062931, [[380025941, null, null, [1]]]]],
          null,
          null,
          null,
          null,
          null,
          101,
          null,
          102,
        ],
      ],
    ],
    [
      4,
      [
        [
          null,
          [
            [44714449, [[null, 7, null, [null, 1]]]],
            [
              676982961,
              [
                [null, 7, null, [null, 0.4]],
                [212, null, null, [1]],
              ],
            ],
            [676982996, [[null, 7, null, [null, 1]]]],
          ],
        ],
        [
          null,
          [[31063162], [31063163, [[359351145, null, null, [1]]]]],
          [
            3,
            [
              [4, null, 15, null, null, null, null, ["18190176,155953048"]],
              [4, null, 15, null, null, null, null, ["49944529"]],
              [4, null, 15, null, null, null, null, ["1028834"]],
              [4, null, 15, null, null, null, null, ["5441"]],
              [4, null, 15, null, null, null, null, ["6177"]],
              [4, null, 15, null, null, null, null, ["6782"]],
            ],
          ],
          40,
        ],
      ],
    ],
    [
      3,
      [
        [null, [[44732730], [44732731]]],
        [null, [[676982960], [676982994], [676982998]]],
        [null, [[676982975], [676982980]]],
        [
          null,
          [
            [
              1337,
              [
                [77, null, null, [1]],
                [78, null, null, [1]],
                [85, null, null, [1]],
                [80, null, null, [1]],
                [76, null, null, [1]],
                [84, null, null, [1]],
                [188, null, null, [1]],
              ],
            ],
          ],
        ],
        [
          10,
          [
            [21064365],
            [
              21064372,
              [[null, null, null, [null, null, null, ["flash"]], null, 489]],
            ],
          ],
          null,
          15,
        ],
        [50, [[21068030], [21068031, [[437, null, null, []]]]]],
        [
          10,
          [
            [21068110],
            [
              21068111,
              [
                [453, null, null, [1]],
                [454, null, null, [1]],
              ],
            ],
          ],
        ],
        [10, [[21068766], [21068767, [[null, 488, null, [null, 0.1]]]]]],
        [
          null,
          [
            [
              22316437,
              null,
              [
                2,
                [
                  [
                    2,
                    [
                      [8, null, null, 1, null, -1],
                      [7, null, null, 1, null, 5],
                    ],
                  ],
                  [4, null, 3],
                ],
              ],
            ],
            [
              22316438,
              null,
              [
                2,
                [
                  [
                    2,
                    [
                      [8, null, null, 1, null, 4],
                      [7, null, null, 1, null, 10],
                    ],
                  ],
                  [4, null, 3],
                ],
              ],
            ],
          ],
          [4, null, 3],
        ],
        [
          1000,
          [
            [
              31060545,
              [
                [
                  null,
                  null,
                  363931022,
                  [
                    null,
                    null,
                    "Aw00Ehk+vMZjKQ7f1O5mXVo0PB6B86mXGvu8PudA3Wxapsvvb1glRdLB/LzCN6cbrF6U07AYzUwuttPaL2yDqwUAAACBeyJvcmlnaW4iOiJodHRwczovL3NlY3VyZXB1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiU3VicmVzb3VyY2VXZWJCdW5kbGVzIiwiZXhwaXJ5IjoxNjM5NTI2Mzk5LCJpc1RoaXJkUGFydHkiOnRydWV9",
                  ],
                ],
              ],
            ],
          ],
          [
            2,
            [
              [
                12,
                null,
                null,
                null,
                4,
                null,
                "Chrome/(9\\d|\\d{3,})",
                ["navigator.userAgent"],
              ],
              [
                3,
                [
                  [
                    2,
                    [
                      [
                        2,
                        [
                          [8, null, null, 1, null, -1],
                          [7, null, null, 1, null, 10],
                        ],
                      ],
                      [4, null, 3],
                    ],
                  ],
                  [
                    2,
                    [
                      [
                        2,
                        [
                          [8, null, null, 1, null, 29],
                          [7, null, null, 1, null, 40],
                        ],
                      ],
                      [4, null, 3],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [1, [[31061155], [31061156, [[493, null, null, [1]]]]]],
        [
          1000,
          [
            [
              31061424,
              null,
              [4, null, 6, null, null, null, null, ["31061422"]],
            ],
            [
              31061425,
              null,
              [4, null, 6, null, null, null, null, ["31061423"]],
            ],
          ],
          [4, null, 10],
        ],
        [1, [[31062923], [31062924, [[144, null, null, [1]]]]]],
        [10, [[31063256], [31063257]]],
      ],
    ],
    [
      5,
      [
        [
          50,
          [
            [
              21062785,
              [[23, null, null, []]],
              [4, null, 8, null, null, null, null, ["_gmptnl"]],
            ],
            [
              21062786,
              [[23, null, null, [1]]],
              [4, null, 8, null, null, null, null, ["_gmptnl"]],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            2,
            null,
            "today\\.line\\.me/.+/(main|article)",
          ],
        ],
        [
          900,
          [
            [
              21062812,
              [[23, null, null, [1]]],
              [4, null, 8, null, null, null, null, ["_gmptnl"]],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            2,
            null,
            "today\\.line\\.me/.+/(main|article)",
          ],
        ],
        [
          50,
          [
            [
              21063916,
              [[23, null, null, []]],
              [
                4,
                null,
                8,
                null,
                null,
                null,
                null,
                ["webkit.messageHandlers._gmptnl"],
              ],
            ],
            [
              21063917,
              [[23, null, null, [1]]],
              [
                4,
                null,
                8,
                null,
                null,
                null,
                null,
                ["webkit.messageHandlers._gmptnl"],
              ],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            2,
            null,
            "today\\.line\\.me/.+/(main|article)",
          ],
        ],
        [
          900,
          [
            [
              21064113,
              [[23, null, null, [1]]],
              [
                4,
                null,
                8,
                null,
                null,
                null,
                null,
                ["webkit.messageHandlers._gmptnl"],
              ],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            2,
            null,
            "today\\.line\\.me/.+/(main|article)",
          ],
        ],
        [10, [[31060200], [31060201, [[520, null, null, [1]]]]]],
        [
          10,
          [
            [31060437],
            [31060438, [[200, null, null, [1]]]],
            [31060439, [[220, null, null, [1]]]],
          ],
          null,
          24,
        ],
        [
          10,
          [
            [31060837],
            [
              31060838,
              [
                [368279556, null, null, [1]],
                [366809413, null, null, [1]],
              ],
            ],
          ],
        ],
        [10, [[31060978], [31060979, [[369430, null, null, [1]]]]]],
        [50, [[31061422], [31061423, [[365635966, null, null, [1]]]]]],
        [
          150,
          [
            [31061482],
            [
              31061483,
              [
                [
                  null,
                  360245595,
                  null,
                  [null, 200],
                  [
                    [
                      [
                        12,
                        null,
                        null,
                        null,
                        4,
                        null,
                        "Android",
                        ["navigator.userAgent"],
                      ],
                      [null, 500],
                    ],
                  ],
                ],
                [360245597, null, null, [1]],
                [45360254, null, null, [1]],
                [
                  null,
                  494,
                  null,
                  [null, 5000],
                  [
                    [
                      [
                        12,
                        null,
                        null,
                        null,
                        4,
                        null,
                        "Android",
                        ["navigator.userAgent"],
                      ],
                      [null, 5500],
                    ],
                  ],
                ],
                [null, 517, null, [null, 1]],
              ],
            ],
            [
              31063011,
              [
                [null, null, null, [null, null, null, ["scar"]], null, 489],
                [
                  null,
                  360245595,
                  null,
                  [null, 200],
                  [
                    [
                      [
                        12,
                        null,
                        null,
                        null,
                        4,
                        null,
                        "Android",
                        ["navigator.userAgent"],
                      ],
                      [null, 500],
                    ],
                  ],
                ],
                [360245597, null, null, [1]],
                [
                  null,
                  494,
                  null,
                  [null, 5000],
                  [
                    [
                      [
                        12,
                        null,
                        null,
                        null,
                        4,
                        null,
                        "Android",
                        ["navigator.userAgent"],
                      ],
                      [null, 5500],
                    ],
                  ],
                ],
                [null, 517, null, [null, 1]],
              ],
            ],
            [
              31063012,
              [
                [
                  null,
                  360245595,
                  null,
                  [null, 200],
                  [
                    [
                      [
                        12,
                        null,
                        null,
                        null,
                        4,
                        null,
                        "Android",
                        ["navigator.userAgent"],
                      ],
                      [null, 500],
                    ],
                  ],
                ],
                [360245597, null, null, [1]],
                [
                  null,
                  494,
                  null,
                  [null, 5000],
                  [
                    [
                      [
                        12,
                        null,
                        null,
                        null,
                        4,
                        null,
                        "Android",
                        ["navigator.userAgent"],
                      ],
                      [null, 5500],
                    ],
                  ],
                ],
                [null, 517, null, [null, 1]],
              ],
            ],
            [31063071],
          ],
          [
            3,
            [
              [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
              [
                4,
                null,
                8,
                null,
                null,
                null,
                null,
                ["webkit.messageHandlers.getGmaQueryInfo.postMessage"],
              ],
              [
                4,
                null,
                8,
                null,
                null,
                null,
                null,
                ["webkit.messageHandlers.getGmaSig.postMessage"],
              ],
            ],
          ],
        ],
        [
          10,
          [
            [31061814],
            [
              31061815,
              [
                [504, null, null, [1]],
                [384734642, null, null, [1]],
                [null, 529, null, [null, 20]],
              ],
            ],
          ],
        ],
        [50, [[31062392], [31062393, [[391906863, null, null, [1]]]]]],
        [
          1,
          [
            [31063063],
            [
              31063064,
              [
                [392736476, null, null, [1]],
                [393546021, null, null, [1]],
              ],
            ],
          ],
        ],
        [
          1000,
          [
            [
              31063065,
              null,
              [
                2,
                [
                  [
                    2,
                    [
                      [8, null, null, 1, null, 9],
                      [7, null, null, 1, null, 11],
                    ],
                  ],
                  [4, null, 3],
                ],
              ],
            ],
            [
              31063066,
              [
                [392736476, null, null, [1]],
                [393546021, null, null, [1]],
              ],
              [
                2,
                [
                  [
                    2,
                    [
                      [8, null, null, 1, null, 19],
                      [7, null, null, 1, null, 21],
                    ],
                  ],
                  [4, null, 3],
                ],
              ],
            ],
          ],
          [
            2,
            [
              [
                12,
                null,
                null,
                null,
                4,
                null,
                "Chrome/(9[3456789]|\\d{3,})",
                ["navigator.userAgent"],
              ],
              [
                4,
                null,
                9,
                null,
                null,
                null,
                null,
                ["window.PeriodicSyncManager"],
              ],
            ],
          ],
        ],
        [100, [[31063082], [31063083, [[387626692, null, null, [1]]]]]],
        [100, [[31063135], [31063136, [[398280639, null, null, [1]]]]]],
        [100, [[31063194], [31063195, [[401542309, null, null, [1]]]]]],
        [100, [[31063213], [31063214, [[402181801, null, null, [1]]]]]],
        [
          1000,
          [
            [
              31063225,
              [
                [null, 24, null, [null, 31063225]],
                [null, 25, null, [null, 31063225]],
              ],
              [6, null, null, 4, null, 2],
            ],
            [
              31063226,
              [
                [null, 24, null, [null, 31063226]],
                [null, 25, null, [null, 31063226]],
              ],
              [6, null, null, 4, null, 3],
            ],
          ],
          [4, null, 3],
          1,
        ],
        [
          1000,
          [
            [
              31063231,
              [
                [null, 24, null, [null, 31063231]],
                [null, 25, null, [null, 31063231]],
              ],
              [6, null, null, 4, null, 4],
            ],
            [
              31063232,
              [
                [null, 24, null, [null, 31063232]],
                [null, 25, null, [null, 31063232]],
              ],
              [6, null, null, 4, null, 5],
            ],
          ],
          [4, null, 3],
          1,
        ],
        [
          1000,
          [
            [
              31063235,
              [
                [null, 24, null, [null, 31063235]],
                [null, 25, null, [null, 31063235]],
              ],
              [6, null, null, 4, null, 6],
            ],
            [
              31063236,
              [
                [null, 24, null, [null, 31063236]],
                [null, 25, null, [null, 31063236]],
              ],
              [6, null, null, 4, null, 7],
            ],
          ],
          [4, null, 3],
          1,
        ],
        [
          1000,
          [
            [
              31063237,
              [
                [null, 24, null, [null, 31063237]],
                [null, 25, null, [null, 31063237]],
              ],
              [6, null, null, 4, null, 8],
            ],
            [
              31063238,
              [
                [null, 24, null, [null, 31063238]],
                [null, 25, null, [null, 31063238]],
              ],
              [6, null, null, 4, null, 9],
            ],
          ],
          [4, null, 3],
          1,
        ],
        [
          1000,
          [
            [
              31063254,
              [
                [null, 24, null, [null, 31063254]],
                [null, 25, null, [null, 31063254]],
              ],
              [6, null, null, 4, null, 10],
            ],
            [
              31063255,
              [
                [null, 24, null, [null, 31063255]],
                [null, 25, null, [null, 31063255]],
              ],
              [6, null, null, 4, null, 11],
            ],
          ],
          [4, null, 3],
          1,
        ],
        [
          1000,
          [
            [
              31063223,
              null,
              [
                2,
                [
                  [
                    2,
                    [
                      [8, null, null, 1, null, 39],
                      [7, null, null, 1, null, 45],
                    ],
                  ],
                  [4, null, 3],
                ],
              ],
            ],
            [
              31063224,
              [[1954, null, null, [1]]],
              [
                2,
                [
                  [
                    2,
                    [
                      [8, null, null, 1, null, 44],
                      [7, null, null, 1, null, 50],
                    ],
                  ],
                  [4, null, 3],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
    [
      2,
      [
        [
          1000,
          [
            [
              31060202,
              null,
              [4, null, 6, null, null, null, null, ["31060200"]],
            ],
            [
              31060203,
              null,
              [4, null, 6, null, null, null, null, ["31060201"]],
            ],
          ],
          [4, null, 51],
        ],
        [10, [[31060888]]],
        [
          10,
          [[31060889], [31060890]],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          104,
        ],
        [
          1000,
          [
            [
              31061029,
              null,
              [4, null, 6, null, null, null, null, ["31060978"]],
            ],
            [
              31061030,
              null,
              [4, null, 6, null, null, null, null, ["31060979"]],
            ],
          ],
          [4, null, 12],
        ],
        [
          10,
          [
            [31061165],
            [31061166, [[null, 363650251, null, [null, 2]]]],
            [31061167, [[null, 363650251, null, [null, 1]]]],
          ],
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          102,
        ],
        [
          50,
          [
            [31062972],
            [
              31062973,
              [
                [362946046, null, null, []],
                [391385505, null, null, []],
              ],
            ],
          ],
          [
            3,
            [
              [4, null, 15, null, null, null, null, ["49944529"]],
              [4, null, 15, null, null, null, null, ["5441"]],
            ],
          ],
          40,
        ],
        [10, [[44742767], [44742768]]],
        [
          100,
          [[44752580], [44752581, [[392065905, null, null, [1]]]]],
          [
            3,
            [
              [4, null, 15, null, null, null, null, ["49944529"]],
              [4, null, 15, null, null, null, null, ["5441"]],
            ],
          ],
          41,
        ],
        [1, [[44752585], [44752586, [[392065905, null, null, [1]]]]], null, 41],
      ],
    ],
    [
      12,
      [
        [
          1,
          [
            [31061828],
            [
              31061829,
              [
                [
                  null,
                  1032,
                  null,
                  [null, 200],
                  [
                    [
                      [
                        12,
                        null,
                        null,
                        null,
                        4,
                        null,
                        "Android",
                        ["navigator.userAgent"],
                      ],
                      [null, 500],
                    ],
                  ],
                ],
                [
                  null,
                  360245595,
                  null,
                  [null, 200],
                  [
                    [
                      [
                        12,
                        null,
                        null,
                        null,
                        4,
                        null,
                        "Android",
                        ["navigator.userAgent"],
                      ],
                      [null, 500],
                    ],
                  ],
                ],
                [360245597, null, null, [1]],
                [
                  null,
                  494,
                  null,
                  [null, 5000],
                  [
                    [
                      [
                        12,
                        null,
                        null,
                        null,
                        4,
                        null,
                        "Android",
                        ["navigator.userAgent"],
                      ],
                      [null, 5500],
                    ],
                  ],
                ],
                [null, 517, null, [null, 1]],
              ],
            ],
          ],
        ],
        [
          20,
          [[21065724], [21065725, [[203, null, null, [1]]]]],
          [4, null, 9, null, null, null, null, ["LayoutShift"]],
        ],
        [
          50,
          [
            [
              31060006,
              null,
              [
                2,
                [
                  [
                    12,
                    null,
                    null,
                    null,
                    4,
                    null,
                    "Android",
                    ["navigator.userAgent"],
                  ],
                  [
                    12,
                    null,
                    null,
                    null,
                    4,
                    null,
                    "Chrome/(89|9\\d|\\d{3,})",
                    ["navigator.userAgent"],
                  ],
                  [
                    4,
                    null,
                    9,
                    null,
                    null,
                    null,
                    null,
                    ["window.PeriodicSyncManager"],
                  ],
                ],
              ],
            ],
            [
              31060007,
              [[1928, null, null, [1]]],
              [
                2,
                [
                  [
                    12,
                    null,
                    null,
                    null,
                    4,
                    null,
                    "Android",
                    ["navigator.userAgent"],
                  ],
                  [
                    12,
                    null,
                    null,
                    null,
                    4,
                    null,
                    "Chrome/(89|9\\d|\\d{3,})",
                    ["navigator.userAgent"],
                  ],
                  [
                    4,
                    null,
                    9,
                    null,
                    null,
                    null,
                    null,
                    ["window.PeriodicSyncManager"],
                  ],
                ],
              ],
            ],
          ],
        ],
        [10, [[31060032], [31060033, [[1928, null, null, [1]]]]]],
        [
          10,
          [
            [31061690],
            [
              31061691,
              [
                [83, null, null, [1]],
                [84, null, null, [1]],
              ],
            ],
          ],
        ],
        [
          200,
          [
            [31062524],
            [
              31062525,
              [
                [null, 360245595, null, [null, 200]],
                [379841917, null, null, [1]],
                [null, 397907552, null, [null, 200]],
              ],
            ],
            [
              31062526,
              [
                [null, 360245595, null, [null, 500]],
                [379841917, null, null, [1]],
                [null, 397907552, null, [null, 500]],
              ],
            ],
          ],
        ],
        [
          10,
          [
            [31062662],
            [
              31062663,
              [
                [null, 360245595, null, [null, 200]],
                [379841917, null, null, [1]],
                [397079674, null, null, [1]],
                [null, 397907552, null, [null, 200]],
              ],
            ],
            [
              31062664,
              [
                [null, 360245595, null, [null, 500]],
                [379841917, null, null, [1]],
                [397079674, null, null, [1]],
                [null, 397907552, null, [null, 500]],
              ],
            ],
          ],
        ],
        [1, [[31063122]], [4, null, 61]],
        [100, [[31063139], [31063140, [[398305417, null, null, [1]]]]]],
        [1, [[31063166], [31063167, [[393546021, null, null, [1]]]]]],
        [50, [[31063182], [31063183, [[1956, null, null, [1]]]]]],
        [50, [[44748552], [44748553, [[1948, null, null, [1]]]]]],
      ],
    ],
    [
      6,
      [
        [
          1000,
          [
            [
              31062323,
              null,
              [
                2,
                [
                  [
                    2,
                    [
                      [8, null, null, 1, null, -1],
                      [7, null, null, 1, null, 10],
                    ],
                  ],
                  [4, null, 3],
                ],
              ],
            ],
            [
              31062324,
              [[501, null, null, [1]]],
              [
                2,
                [
                  [
                    2,
                    [
                      [8, null, null, 1, null, 29],
                      [7, null, null, 1, null, 40],
                    ],
                  ],
                  [4, null, 3],
                ],
              ],
            ],
          ],
          [
            2,
            [
              [4, null, 53],
              [
                12,
                null,
                null,
                null,
                4,
                null,
                "Chrome/(9[23456789]|\\d{3,})",
                ["navigator.userAgent"],
              ],
              [
                1,
                [
                  [
                    4,
                    null,
                    8,
                    null,
                    null,
                    null,
                    null,
                    ["navigator.serviceWorker.controller"],
                  ],
                ],
              ],
              [
                4,
                null,
                9,
                null,
                null,
                null,
                null,
                ["document.head.appendChild"],
              ],
            ],
          ],
        ],
      ],
    ],
    [
      13,
      [
        [
          1,
          [
            [
              31062554,
              null,
              [
                2,
                [
                  [6, null, null, 3, null, 0],
                  [
                    12,
                    null,
                    null,
                    null,
                    4,
                    null,
                    "Chrome/(9[23456789]|\\d{3,})",
                    ["navigator.userAgent"],
                  ],
                ],
              ],
            ],
            [
              31062555,
              [[395842139, null, null, [1]]],
              [
                2,
                [
                  [6, null, null, 3, null, 0],
                  [
                    12,
                    null,
                    null,
                    null,
                    4,
                    null,
                    "Chrome/(9[23456789]|\\d{3,})",
                    ["navigator.userAgent"],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          10,
          [
            [
              21065726,
              null,
              [4, null, 6, null, null, null, null, ["21065725"]],
            ],
            [
              21065727,
              [[240, null, null, [1]]],
              [4, null, 6, null, null, null, null, ["21065725"]],
            ],
            [
              21065728,
              [[241, null, null, [1]]],
              [4, null, 6, null, null, null, null, ["21065725"]],
            ],
          ],
          [4, null, 9, null, null, null, null, ["LayoutShift"]],
        ],
        [
          100,
          [[21067087], [21067088, [[78, null, null, [1]]]]],
          [2, [[4, null, 6, null, null, null, null, ["31061691"]]]],
        ],
        [
          1000,
          [[21067496]],
          [4, null, 9, null, null, null, null, ["document.hasTrustToken"]],
        ],
        [
          10,
          [
            [
              21067664,
              null,
              [4, null, 6, null, null, null, null, ["21065725"]],
            ],
            [
              21067665,
              [[null, 1905, null, [null, 30]]],
              [4, null, 6, null, null, null, null, ["21065725"]],
            ],
            [
              21067666,
              [[null, 1905, null, [null, 60]]],
              [4, null, 6, null, null, null, null, ["21065725"]],
            ],
            [
              21067667,
              [[null, 1905, null, [null, 120]]],
              [4, null, 6, null, null, null, null, ["21065725"]],
            ],
          ],
          [4, null, 9, null, null, null, null, ["LayoutShift"]],
        ],
        [
          10,
          [
            [
              21069888,
              [[null, 1929, null, [null, 50]]],
              [4, null, 6, null, null, null, null, ["21065725"]],
            ],
            [
              21069889,
              [[null, 1929, null, [null, 25]]],
              [4, null, 6, null, null, null, null, ["21065725"]],
            ],
            [
              21069890,
              [[null, 1929, null, [null, 1]]],
              [4, null, 6, null, null, null, null, ["21065725"]],
            ],
            [
              21069891,
              [[null, 1929, null, [null, 75]]],
              [4, null, 6, null, null, null, null, ["21065725"]],
            ],
            [
              21069892,
              [[null, 1929, null, [null, 100]]],
              [4, null, 6, null, null, null, null, ["21065725"]],
            ],
          ],
          [4, null, 9, null, null, null, null, ["LayoutShift"]],
        ],
        [
          1000,
          [
            [
              31060475,
              null,
              [
                2,
                [
                  [
                    1,
                    [
                      [
                        4,
                        null,
                        9,
                        null,
                        null,
                        null,
                        null,
                        ["window.PeriodicSyncManager"],
                      ],
                    ],
                  ],
                  [
                    12,
                    null,
                    null,
                    null,
                    4,
                    null,
                    "Android",
                    ["navigator.userAgent"],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          500,
          [
            [31061692],
            [
              31061693,
              [
                [77, null, null, [1]],
                [78, null, null, [1]],
                [85, null, null, [1]],
                [80, null, null, [1]],
                [76, null, null, [1]],
              ],
            ],
          ],
          [4, null, 6, null, null, null, null, ["31061691"]],
        ],
        [1, [[31062890], [31062891, [[397841828, null, null, [1]]]]]],
        [
          1,
          [[31062946]],
          [4, null, 27, null, null, null, null, ["document.prerendering"]],
        ],
        [
          1,
          [[31062947]],
          [
            1,
            [[4, null, 27, null, null, null, null, ["document.prerendering"]]],
          ],
        ],
        [
          1000,
          [
            [
              31063168,
              null,
              [4, null, 6, null, null, null, null, ["31063166"]],
            ],
            [
              31063169,
              null,
              [4, null, 6, null, null, null, null, ["31063167"]],
            ],
          ],
          [4, null, 6, null, null, null, null, ["31060007"]],
        ],
      ],
    ],
    [
      9,
      [
        [
          1000,
          [[31063049]],
          [4, null, 13, null, null, null, null, ["cxbbhbxm"]],
        ],
      ],
    ],
  ],
  null,
  null,
  [0.001, 1000, 1, 1000],
]));
