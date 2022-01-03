!(function () {
  var e =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : {},
    t = e.parcelRequire6330;
  t.register('9yIYD', function (r, n) {
    var i = t('b5vB1'),
      o = t('hF9j8');
    t('iYbao'),
      ('undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
        ? window
        : void 0 !== e
        ? e
        : {}
      ).parcelRequirec9c5.register('9VQLt', function (e, t) {
        var r, n, a;
        (r = e.exports),
          Object.defineProperty(r, '__esModule', { value: !0, configurable: !0 }),
          (n = e.exports),
          (a = function () {
            return f;
          }),
          Object.defineProperty(n, 'default', {
            get: a,
            set: undefined,
            enumerable: !0,
            configurable: !0
          });
        var f = function (e) {
          return o.jsxs(
            'svg',
            i.objectSpread(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                'data-icon': 'half-circles',
                width: '1em',
                height: '1em',
                fill: 'currentColor',
                viewBox: '0 0 100 100'
              },
              e,
              {
                children: [
                  o.jsx('path', {
                    d: 'M31.6 3.5C5.9 13.6-6.6 42.7 3.5 68.4c10.1 25.7 39.2 38.3 64.9 28.1l-3.1-7.9C44 97 19.9 86.6 11.5 65.3c-8.4-21.3 2-45.4 23.3-53.8l-3.2-8z',
                    children: o.jsx('animateTransform', {
                      attributeName: 'transform',
                      attributeType: 'XML',
                      dur: '2s',
                      from: '0 50 50',
                      repeatCount: 'indefinite',
                      to: '360 50 50',
                      type: 'rotate'
                    })
                  }),
                  o.jsx('path', {
                    d: 'M42.3 39.6c5.7-4.3 13.9-3.1 18.1 2.7 4.3 5.7 3.1 13.9-2.7 18.1l4.1 5.5c8.8-6.5 10.6-19 4.1-27.7-6.5-8.8-19-10.6-27.7-4.1l4.1 5.5z',
                    children: o.jsx('animateTransform', {
                      attributeName: 'transform',
                      attributeType: 'XML',
                      dur: '1s',
                      from: '0 50 50',
                      repeatCount: 'indefinite',
                      to: '-360 50 50',
                      type: 'rotate'
                    })
                  }),
                  o.jsx('path', {
                    d: 'M82 35.7C74.1 18 53.4 10.1 35.7 18S10.1 46.6 18 64.3l7.6-3.4c-6-13.5 0-29.3 13.5-35.3s29.3 0 35.3 13.5l7.6-3.4z',
                    children: o.jsx('animateTransform', {
                      attributeName: 'transform',
                      attributeType: 'XML',
                      dur: '2s',
                      from: '0 50 50',
                      repeatCount: 'indefinite',
                      to: '360 50 50',
                      type: 'rotate'
                    })
                  })
                ]
              }
            )
          );
        };
      });
  });
})();
