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
    i = e.parcelRequire6330;
  i.register('bMzz5', function (n, t) {
    var r = i('b5vB1'),
      s = i('hF9j8');
    i('iYbao'),
      ('undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
        ? window
        : void 0 !== e
        ? e
        : {}
      ).parcelRequirec9c5.register('cb86X', function (e, i) {
        var n, t, l;
        (n = e.exports),
          Object.defineProperty(n, '__esModule', { value: !0, configurable: !0 }),
          (t = e.exports),
          (l = function () {
            return o;
          }),
          Object.defineProperty(t, 'default', {
            get: l,
            set: undefined,
            enumerable: !0,
            configurable: !0
          });
        var o = function (e) {
          return s.jsx(
            'svg',
            r.objectSpread(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                'data-icon': 'puff',
                width: '1em',
                height: '1em',
                viewBox: '0 0 44 44',
                stroke: 'currentColor',
                strokeWidth: '5'
              },
              e,
              {
                children: s.jsxs('g', {
                  fill: 'none',
                  fillRule: 'evenodd',
                  children: [
                    s.jsxs('circle', {
                      cx: '22',
                      cy: '22',
                      r: '1',
                      children: [
                        s.jsx('animate', {
                          attributeName: 'r',
                          begin: '0s',
                          calcMode: 'spline',
                          dur: '1.8s',
                          keySplines: '0.165, 0.84, 0.44, 1',
                          keyTimes: '0; 1',
                          repeatCount: 'indefinite',
                          values: '1; 20'
                        }),
                        s.jsx('animate', {
                          attributeName: 'stroke-opacity',
                          begin: '0s',
                          calcMode: 'spline',
                          dur: '1.8s',
                          keySplines: '0.3, 0.61, 0.355, 1',
                          keyTimes: '0; 1',
                          repeatCount: 'indefinite',
                          values: '1; 0'
                        })
                      ]
                    }),
                    s.jsxs('circle', {
                      cx: '22',
                      cy: '22',
                      r: '1',
                      children: [
                        s.jsx('animate', {
                          attributeName: 'r',
                          begin: '-0.9s',
                          calcMode: 'spline',
                          dur: '1.8s',
                          keySplines: '0.165, 0.84, 0.44, 1',
                          keyTimes: '0; 1',
                          repeatCount: 'indefinite',
                          values: '1; 20'
                        }),
                        s.jsx('animate', {
                          attributeName: 'stroke-opacity',
                          begin: '-0.9s',
                          calcMode: 'spline',
                          dur: '1.8s',
                          keySplines: '0.3, 0.61, 0.355, 1',
                          keyTimes: '0; 1',
                          repeatCount: 'indefinite',
                          values: '1; 0'
                        })
                      ]
                    })
                  ]
                })
              }
            )
          );
        };
      });
  });
})();
