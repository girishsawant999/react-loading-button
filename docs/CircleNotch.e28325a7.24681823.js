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
i.register('ahIWC', function (t, n) {
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
    ).parcelRequirec9c5.register('38NHs', function (e, i) {
      var t, n, o;
      (t = e.exports),
        Object.defineProperty(t, '__esModule', { value: !0, configurable: !0 }),
        (n = e.exports),
        (o = function () {
          return a;
        }),
        Object.defineProperty(n, 'default', {
          get: o,
          set: undefined,
          enumerable: !0,
          configurable: !0
        });
      var a = (e) =>
        r.jsx('svg', {
          'aria-hidden': 'true',
          focusable: 'false',
          'data-prefix': 'fas',
          'data-icon': 'circle-notch',
          role: 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          width: '1em',
          height: '1em',
          viewBox: '0 0 512 512',
          ...e,
          children: r.jsx('path', {
            fill: 'currentColor',
            d: 'M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z',
            children: r.jsx('animateTransform', {
              attributeType: 'xml',
              attributeName: 'transform',
              type: 'rotate',
              from: '0 256 256',
              to: '360 256 256',
              dur: '1s',
              additive: 'sum',
              repeatCount: 'indefinite'
            })
          })
        });
    });
});
