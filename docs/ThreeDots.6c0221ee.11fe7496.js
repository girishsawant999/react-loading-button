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
i.register('ezNKw', function (t, n) {
  var r = i('4qUQv');
  i('4rcgi'),
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
      var t, n, a;
      (t = e.exports),
        Object.defineProperty(t, '__esModule', { value: !0, configurable: !0 }),
        (n = e.exports),
        (a = function () {
          return l;
        }),
        Object.defineProperty(n, 'default', {
          get: a,
          set: undefined,
          enumerable: !0,
          configurable: !0
        });
      var l = (e) =>
        r.jsxs('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          'data-icon': 'three-dots',
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          viewBox: '0 0 140 30',
          ...e,
          children: [
            r.jsxs('circle', {
              cx: '30',
              cy: '15',
              r: '20',
              children: [
                r.jsx('animate', {
                  attributeName: 'r',
                  begin: '0s',
                  calcMode: 'linear',
                  dur: '0.8s',
                  from: '20',
                  repeatCount: 'indefinite',
                  to: '20',
                  values: '20;10;20'
                }),
                r.jsx('animate', {
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
            r.jsxs('circle', {
              cx: '70',
              cy: '15',
              r: '10',
              fillOpacity: '0.3',
              children: [
                r.jsx('animate', {
                  attributeName: 'r',
                  begin: '0s',
                  calcMode: 'linear',
                  dur: '0.8s',
                  from: '10',
                  repeatCount: 'indefinite',
                  to: '10',
                  values: '10;20;10'
                }),
                r.jsx('animate', {
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
            r.jsxs('circle', {
              cx: '110',
              cy: '15',
              r: '20',
              children: [
                r.jsx('animate', {
                  attributeName: 'r',
                  begin: '0s',
                  calcMode: 'linear',
                  dur: '0.8s',
                  from: '20',
                  repeatCount: 'indefinite',
                  to: '20',
                  values: '20;10;20'
                }),
                r.jsx('animate', {
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
        });
    });
});
