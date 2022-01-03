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
  i.register('9qHHj', function (t, n) {
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
      ).parcelRequirec9c5.register('5Wg4P', function (e, i) {
        var t, n, o;
        (t = e.exports),
          Object.defineProperty(t, '__esModule', { value: !0, configurable: !0 }),
          (n = e.exports),
          (o = function () {
            return l;
          }),
          Object.defineProperty(n, 'default', {
            get: o,
            set: undefined,
            enumerable: !0,
            configurable: !0
          });
        var l = function (e) {
          return a.jsxs(
            'svg',
            r.objectSpread(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                'data-icon': 'three-dots',
                width: '1em',
                height: '1em',
                fill: 'currentColor',
                viewBox: '0 0 140 30'
              },
              e,
              {
                children: [
                  a.jsxs('circle', {
                    cx: '30',
                    cy: '15',
                    r: '20',
                    children: [
                      a.jsx('animate', {
                        attributeName: 'r',
                        begin: '0s',
                        calcMode: 'linear',
                        dur: '0.8s',
                        from: '20',
                        repeatCount: 'indefinite',
                        to: '20',
                        values: '20;10;20'
                      }),
                      a.jsx('animate', {
                        attributeName: 'fill-opacity',
                        begin: '0s',
                        calcMode: 'linear',
                        dur: '0.8s',
                        from: '1',
                        repeatCount: 'indefinite',
                        to: '1',
                        values: '1;.5;1'
                      })
                    ]
                  }),
                  a.jsxs('circle', {
                    cx: '70',
                    cy: '15',
                    r: '10',
                    fillOpacity: '0.3',
                    children: [
                      a.jsx('animate', {
                        attributeName: 'r',
                        begin: '0s',
                        calcMode: 'linear',
                        dur: '0.8s',
                        from: '10',
                        repeatCount: 'indefinite',
                        to: '10',
                        values: '10;20;10'
                      }),
                      a.jsx('animate', {
                        attributeName: 'fill-opacity',
                        begin: '0s',
                        calcMode: 'linear',
                        dur: '0.8s',
                        from: '0.5',
                        repeatCount: 'indefinite',
                        to: '0.5',
                        values: '.5;1;.5'
                      })
                    ]
                  }),
                  a.jsxs('circle', {
                    cx: '110',
                    cy: '15',
                    r: '20',
                    children: [
                      a.jsx('animate', {
                        attributeName: 'r',
                        begin: '0s',
                        calcMode: 'linear',
                        dur: '0.8s',
                        from: '20',
                        repeatCount: 'indefinite',
                        to: '20',
                        values: '20;10;20'
                      }),
                      a.jsx('animate', {
                        attributeName: 'fill-opacity',
                        begin: '0s',
                        calcMode: 'linear',
                        dur: '0.8s',
                        from: '1',
                        repeatCount: 'indefinite',
                        to: '1',
                        values: '1;.5;1'
                      })
                    ]
                  })
                ]
              }
            )
          );
        };
      });
  });
})();
