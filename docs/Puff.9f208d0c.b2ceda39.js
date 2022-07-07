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
var i = e.parcelRequire6330;
i.register('9hPJb', function (n, r) {
  var a = i('4rcgi');
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
    var n, r, l;
    (n = e.exports),
      Object.defineProperty(n, '__esModule', { value: !0, configurable: !0 }),
      (r = e.exports),
      (l = function () {
        return o;
      }),
      Object.defineProperty(r, 'default', {
        get: l,
        set: undefined,
        enumerable: !0,
        configurable: !0
      });
    var o = (e) =>
      t(a).createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          'data-icon': 'puff',
          width: '1em',
          height: '1em',
          viewBox: '0 0 44 44',
          stroke: 'currentColor',
          strokeWidth: '5',
          ...e
        },
        t(a).createElement(
          'g',
          { fill: 'none', fillRule: 'evenodd' },
          t(a).createElement(
            'circle',
            { cx: '22', cy: '22', r: '1' },
            t(a).createElement('animate', {
              attributeName: 'r',
              begin: '0s',
              calcMode: 'spline',
              dur: '1.8s',
              keySplines: '0.165, 0.84, 0.44, 1',
              keyTimes: '0; 1',
              repeatCount: 'indefinite',
              values: '1; 20'
            }),
            t(a).createElement('animate', {
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
          t(a).createElement(
            'circle',
            { cx: '22', cy: '22', r: '1' },
            t(a).createElement('animate', {
              attributeName: 'r',
              begin: '-0.9s',
              calcMode: 'spline',
              dur: '1.8s',
              keySplines: '0.165, 0.84, 0.44, 1',
              keyTimes: '0; 1',
              repeatCount: 'indefinite',
              values: '1; 20'
            }),
            t(a).createElement('animate', {
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
  });
});
