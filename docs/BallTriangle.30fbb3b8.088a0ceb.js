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
  i.register('glDhl', function (n, t) {
    var a = i('b5vB1'),
      r = i('hF9j8');
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
      ).parcelRequirec9c5.register('d2jWk', function (e, i) {
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
          return r.jsx(
            'svg',
            a.objectSpread(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                'data-icon': 'ball-triangle',
                width: '1em',
                height: '1em',
                stroke: 'currentColor',
                viewBox: '0 0 65 65'
              },
              e,
              {
                children: r.jsxs('g', {
                  fill: 'none',
                  fillRule: 'evenodd',
                  strokeWidth: '5',
                  transform: 'translate(1 1)',
                  children: [
                    r.jsxs('circle', {
                      cx: '7',
                      cy: '50',
                      r: '5',
                      children: [
                        r.jsx('animate', {
                          attributeName: 'cy',
                          begin: '0s',
                          calcMode: 'linear',
                          dur: '2.2s',
                          repeatCount: 'indefinite',
                          values: '50;7;50;50'
                        }),
                        r.jsx('animate', {
                          attributeName: 'cx',
                          begin: '0s',
                          calcMode: 'linear',
                          dur: '2.2s',
                          repeatCount: 'indefinite',
                          values: '7;27;49;7'
                        })
                      ]
                    }),
                    r.jsxs('circle', {
                      cx: '27',
                      cy: '7',
                      r: '5',
                      children: [
                        r.jsx('animate', {
                          attributeName: 'cy',
                          begin: '0s',
                          calcMode: 'linear',
                          dur: '2.2s',
                          from: '7',
                          repeatCount: 'indefinite',
                          to: '7',
                          values: '7;50;50;7'
                        }),
                        r.jsx('animate', {
                          attributeName: 'cx',
                          begin: '0s',
                          calcMode: 'linear',
                          dur: '2.2s',
                          from: '27',
                          repeatCount: 'indefinite',
                          to: '27',
                          values: '27;49;7;27'
                        })
                      ]
                    }),
                    r.jsxs('circle', {
                      cx: '49',
                      cy: '50',
                      r: '5',
                      children: [
                        r.jsx('animate', {
                          attributeName: 'cy',
                          begin: '0s',
                          calcMode: 'linear',
                          dur: '2.2s',
                          repeatCount: 'indefinite',
                          values: '50;50;7;50'
                        }),
                        r.jsx('animate', {
                          attributeName: 'cx',
                          begin: '0s',
                          calcMode: 'linear',
                          dur: '2.2s',
                          from: '49',
                          repeatCount: 'indefinite',
                          to: '49',
                          values: '49;7;27;49'
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
