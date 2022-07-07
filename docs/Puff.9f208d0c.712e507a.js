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
  n.register('hqqTK', function (i, r) {
    var a = n('45P89'),
      l = n('iYbao');
    ('undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : void 0 !== e
      ? e
      : {}
    ).parcelRequirec9c5.register('cb86X', function (e, n) {
      var i, r, o;
      (i = e.exports),
        Object.defineProperty(i, '__esModule', { value: !0, configurable: !0 }),
        (r = e.exports),
        (o = function () {
          return u;
        }),
        Object.defineProperty(r, 'default', {
          get: o,
          set: undefined,
          enumerable: !0,
          configurable: !0
        });
      var u = function (e) {
        return t(l).createElement(
          'svg',
          (0, a.default)(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              'data-icon': 'puff',
              width: '1em',
              height: '1em',
              viewBox: '0 0 44 44',
              stroke: 'currentColor',
              strokeWidth: '5'
            },
            e
          ),
          t(l).createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t(l).createElement(
              'circle',
              { cx: '22', cy: '22', r: '1' },
              t(l).createElement('animate', {
                attributeName: 'r',
                begin: '0s',
                calcMode: 'spline',
                dur: '1.8s',
                keySplines: '0.165, 0.84, 0.44, 1',
                keyTimes: '0; 1',
                repeatCount: 'indefinite',
                values: '1; 20'
              }),
              t(l).createElement('animate', {
                attributeName: 'stroke-opacity',
                begin: '0s',
                calcMode: 'spline',
                dur: '1.8s',
                keySplines: '0.3, 0.61, 0.355, 1',
                keyTimes: '0; 1',
                repeatCount: 'indefinite',
                values: '1; 0'
              })
            ),
            t(l).createElement(
              'circle',
              { cx: '22', cy: '22', r: '1' },
              t(l).createElement('animate', {
                attributeName: 'r',
                begin: '-0.9s',
                calcMode: 'spline',
                dur: '1.8s',
                keySplines: '0.165, 0.84, 0.44, 1',
                keyTimes: '0; 1',
                repeatCount: 'indefinite',
                values: '1; 20'
              }),
              t(l).createElement('animate', {
                attributeName: 'stroke-opacity',
                begin: '-0.9s',
                calcMode: 'spline',
                dur: '1.8s',
                keySplines: '0.3, 0.61, 0.355, 1',
                keyTimes: '0; 1',
                repeatCount: 'indefinite',
                values: '1; 0'
              })
            )
          )
        );
      };
    });
  });
})();
