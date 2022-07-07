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
      : {};
  function t(e) {
    return e && e.__esModule ? e.default : e;
  }
  var n = e.parcelRequire6330;
  n.register('94sIx', function (i, r) {
    var o = n('45P89'),
      a = n('iYbao');
    ('undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : void 0 !== e
      ? e
      : {}
    ).parcelRequirec9c5.register('38NHs', function (e, n) {
      var i, r, f;
      (i = e.exports),
        Object.defineProperty(i, '__esModule', { value: !0, configurable: !0 }),
        (r = e.exports),
        (f = function () {
          return l;
        }),
        Object.defineProperty(r, 'default', {
          get: f,
          set: undefined,
          enumerable: !0,
          configurable: !0
        });
      var l = function (e) {
        return t(a).createElement(
          'svg',
          (0, o.default)(
            {
              'aria-hidden': 'true',
              focusable: 'false',
              'data-prefix': 'fas',
              'data-icon': 'circle-notch',
              role: 'img',
              xmlns: 'http://www.w3.org/2000/svg',
              width: '1em',
              height: '1em',
              viewBox: '0 0 512 512'
            },
            e
          ),
          t(a).createElement(
            'path',
            {
              fill: 'currentColor',
              d: 'M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z'
            },
            t(a).createElement('animateTransform', {
              attributeType: 'xml',
              attributeName: 'transform',
              type: 'rotate',
              from: '0 256 256',
              to: '360 256 256',
              dur: '1s',
              additive: 'sum',
              repeatCount: 'indefinite'
            })
          )
        );
      };
    });
  });
})();
