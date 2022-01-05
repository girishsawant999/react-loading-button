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
i.register('bmFVC', function (n, t) {
  var a = i('4qUQv');
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
    ).parcelRequirec9c5.register('d2jWk', function (e, i) {
      var n, t, r;
      (n = e.exports),
        Object.defineProperty(n, '__esModule', { value: !0, configurable: !0 }),
        (t = e.exports),
        (r = function () {
          return l;
        }),
        Object.defineProperty(t, 'default', {
          get: r,
          set: undefined,
          enumerable: !0,
          configurable: !0
        });
      var l = (e) =>
        a.jsx('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          'data-icon': 'ball-triangle',
          width: '1em',
          height: '1em',
          stroke: 'currentColor',
          viewBox: '0 0 65 65',
          ...e,
          children: a.jsxs('g', {
            fill: 'none',
            fillRule: 'evenodd',
            strokeWidth: '5',
            transform: 'translate(1 1)',
            children: [
              a.jsxs('circle', {
                cx: '7',
                cy: '50',
                r: '5',
                children: [
                  a.jsx('animate', {
                    attributeName: 'cy',
                    begin: '0s',
                    calcMode: 'linear',
                    dur: '2.2s',
                    repeatCount: 'indefinite',
                    values: '50;7;50;50'
                  }),
                  a.jsx('animate', {
                    attributeName: 'cx',
                    begin: '0s',
                    calcMode: 'linear',
                    dur: '2.2s',
                    repeatCount: 'indefinite',
                    values: '7;27;49;7'
                  })
                ]
              }),
              a.jsxs('circle', {
                cx: '27',
                cy: '7',
                r: '5',
                children: [
                  a.jsx('animate', {
                    attributeName: 'cy',
                    begin: '0s',
                    calcMode: 'linear',
                    dur: '2.2s',
                    from: '7',
                    repeatCount: 'indefinite',
                    to: '7',
                    values: '7;50;50;7'
                  }),
                  a.jsx('animate', {
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
                    values: '50;50;7;50'
                  }),
                  a.jsx('animate', {
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
        });
    });
});
