!(function () {
  'use strict';
  var e = {
      814: function (e, n, t) {
        var r = t(645),
          o = t.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          'body{background-color:#f5f5f5}div{color:#fff}.red-div{background-color:#00bcd4;display:flex}',
          '',
        ]),
          (n.Z = o);
      },
      645: function (e) {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = e(n);
                return n[2] ? '@media '.concat(n[2], ' {').concat(t, '}') : t;
              }).join('');
            }),
            (n.i = function (e, t, r) {
              'string' == typeof e && (e = [[null, e, '']]);
              var o = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0];
                  null != a && (o[a] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var u = [].concat(e[c]);
                (r && o[u[0]]) ||
                  (t &&
                    (u[2]
                      ? (u[2] = ''.concat(t, ' and ').concat(u[2]))
                      : (u[2] = t)),
                  n.push(u));
              }
            }),
            n
          );
        };
      },
      379: function (e, n, t) {
        var r,
          o = (function () {
            var e = {};
            return function (n) {
              if (void 0 === e[n]) {
                var t = document.querySelector(n);
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head;
                  } catch (e) {
                    t = null;
                  }
                e[n] = t;
              }
              return e[n];
            };
          })(),
          i = [];
        function a(e) {
          for (var n = -1, t = 0; t < i.length; t++)
            if (i[t].identifier === e) {
              n = t;
              break;
            }
          return n;
        }
        function c(e, n) {
          for (var t = {}, r = [], o = 0; o < e.length; o++) {
            var c = e[o],
              u = n.base ? c[0] + n.base : c[0],
              l = t[u] || 0,
              f = ''.concat(u, ' ').concat(l);
            t[u] = l + 1;
            var s = a(f),
              d = { css: c[1], media: c[2], sourceMap: c[3] };
            -1 !== s
              ? (i[s].references++, i[s].updater(d))
              : i.push({ identifier: f, updater: m(d, n), references: 1 }),
              r.push(f);
          }
          return r;
        }
        function u(e) {
          var n = document.createElement('style'),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var i = t.nc;
            i && (r.nonce = i);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              n.setAttribute(e, r[e]);
            }),
            'function' == typeof e.insert)
          )
            e.insert(n);
          else {
            var a = o(e.insert || 'head');
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
              );
            a.appendChild(n);
          }
          return n;
        }
        var l,
          f =
            ((l = []),
            function (e, n) {
              return (l[e] = n), l.filter(Boolean).join('\n');
            });
        function s(e, n, t, r) {
          var o = t
            ? ''
            : r.media
            ? '@media '.concat(r.media, ' {').concat(r.css, '}')
            : r.css;
          if (e.styleSheet) e.styleSheet.cssText = f(n, o);
          else {
            var i = document.createTextNode(o),
              a = e.childNodes;
            a[n] && e.removeChild(a[n]),
              a.length ? e.insertBefore(i, a[n]) : e.appendChild(i);
          }
        }
        function d(e, n, t) {
          var r = t.css,
            o = t.media,
            i = t.sourceMap;
          if (
            (o ? e.setAttribute('media', o) : e.removeAttribute('media'),
            i &&
              'undefined' != typeof btoa &&
              (r +=
                '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                  ' */',
                )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var v = null,
          p = 0;
        function m(e, n) {
          var t, r, o;
          if (n.singleton) {
            var i = p++;
            (t = v || (v = u(n))),
              (r = s.bind(null, t, i, !1)),
              (o = s.bind(null, t, i, !0));
          } else
            (t = u(n)),
              (r = d.bind(null, t, n)),
              (o = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              });
          return (
            r(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap
                )
                  return;
                r((e = n));
              } else o();
            }
          );
        }
        e.exports = function (e, n) {
          (n = n || {}).singleton ||
            'boolean' == typeof n.singleton ||
            (n.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob,
                )),
              r));
          var t = c((e = e || []), n);
          return function (e) {
            if (
              ((e = e || []),
              '[object Array]' === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < t.length; r++) {
                var o = a(t[r]);
                i[o].references--;
              }
              for (var u = c(e, n), l = 0; l < t.length; l++) {
                var f = a(t[l]);
                0 === i[f].references && (i[f].updater(), i.splice(f, 1));
              }
              t = u;
            }
          };
        };
      },
    },
    n = {};
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { id: r, exports: {} });
    return e[r](o, o.exports, t), o.exports;
  }
  (t.n = function (e) {
    var n =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return t.d(n, { a: n }), n;
  }),
    (t.d = function (e, n) {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var r = {};
  !(function () {
    t.r(r),
      t.d(r, {
        default: function () {
          return u;
        },
      });
    var e = require('react'),
      n = t.n(e),
      o = () => n().createElement('div', null, 'Test'),
      i = t(379),
      a = t.n(i),
      c = t(814);
    a()(c.Z, { insert: 'head', singleton: !1 }), c.Z.locals;
    var u = () => (
      console.log('MainComp'),
      n().createElement(
        'div',
        { className: 'red-div' },
        'Hello World',
        n().createElement(o, null),
      )
    );
  })(),
    (module.exports = r);
})();
