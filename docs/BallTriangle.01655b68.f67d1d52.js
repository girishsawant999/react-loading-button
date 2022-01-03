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
  i.register('3UGrm', function (n, t) {
    var r = i('b5vB1'),
      a = i('hF9j8');
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
          return a.jsx(
            'svg',
            r.objectSpread(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                'data-icon': 'ball-triangle',
                width: '1em',
                height: '1em',
                stroke: 'currentColor',
                viewBox: '0 0 57 57'
              },
              e,
              {
                children: a.jsxs('g', {
                  fill: 'none',
                  fillRule: 'evenodd',
                  strokeWidth: '5',
                  transform: 'translate(1 1)',
                  children: [
                    a.jsxs('circle', {
                      cx: '5',
                      cy: '50',
                      r: '5',
                      children: [
                        a.jsx('animate', {
                          attributeName: 'cy',
                          begin: '0s',
                          calcMode: 'linear',
                          dur: '2.2s',
                          repeatCount: 'indefinite',
                          values: '50;5;50;50'
                        }),
                        a.jsx('animate', {
                          attributeName: 'cx',
                          begin: '0s',
                          calcMode: 'linear',
                          dur: '2.2s',
                          repeatCount: 'indefinite',
                          values: '5;27;49;5'
                        })
                      ]
                    }),
                    a.jsxs('circle', {
                      cx: '27',
                      cy: '5',
                      r: '5',
                      children: [
                        a.jsx('animate', {
                          attributeName: 'cy',
                          begin: '0s',
                          calcMode: 'linear',
                          dur: '2.2s',
                          from: '5',
                          repeatCount: 'indefinite',
                          to: '5',
                          values: '5;50;50;5'
                        }),
                        a.jsx('animate', {
                          attributeName: 'cx',
                          begin: '0s',
                          calcMode: 'linear',
                          dur: '2.2s',
                          from: '27',
                          repeatCount: 'indefinite',
                          to: '27',
                          values: '27;49;5;27'
                        })
                      ]
                    }),
                    a.jsxs('circle', {
                      cx: '49',
                      cy: '50',
                      r: '5',
                      children: [
                        a.jsx('animate', {
                          attributeName: 'cy',
                          begin: '0s',
                          calcMode: 'linear',
                          dur: '2.2s',
                          repeatCount: 'indefinite',
                          values: '50;50;5;50'
                        }),
                        a.jsx('animate', {
                          attributeName: 'cx',
                          begin: '0s',
                          calcMode: 'linear',
                          dur: '2.2s',
                          from: '49',
                          repeatCount: 'indefinite',
                          to: '49',
                          values: '49;5;27;49'
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
