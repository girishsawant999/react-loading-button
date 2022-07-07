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
i.register('lG7j4', function (n, a) {
  var r = i('4rcgi');
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
    var n, a, l;
    (n = e.exports),
      Object.defineProperty(n, '__esModule', { value: !0, configurable: !0 }),
      (a = e.exports),
      (l = function () {
        return o;
      }),
      Object.defineProperty(a, 'default', {
        get: l,
        set: undefined,
        enumerable: !0,
        configurable: !0
      });
    var o = (e) =>
      t(r).createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          'data-icon': 'three-dots',
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          viewBox: '0 0 140 30',
          ...e
        },
        t(r).createElement(
          'circle',
          { cx: '30', cy: '15', r: '20' },
          t(r).createElement('animate', {
            attributeName: 'r',
            begin: '0s',
            calcMode: 'linear',
            dur: '0.8s',
            from: '20',
            repeatCount: 'indefinite',
            to: '20',
            values: '20;10;20'
          }),
          t(r).createElement('animate', {
            attributeName: 'fill-opacity',
            begin: '0s',
            calcMode: 'linear',
            dur: '0.8s',
            from: '1',
            repeatCount: 'indefinite',
            to: '1',
            values: '1;.5;1'
          })
        ),
        t(r).createElement(
          'circle',
          { cx: '70', cy: '15', r: '10', fillOpacity: '0.3' },
          t(r).createElement('animate', {
            attributeName: 'r',
            begin: '0s',
            calcMode: 'linear',
            dur: '0.8s',
            from: '10',
            repeatCount: 'indefinite',
            to: '10',
            values: '10;20;10'
          }),
          t(r).createElement('animate', {
            attributeName: 'fill-opacity',
            begin: '0s',
            calcMode: 'linear',
            dur: '0.8s',
            from: '0.5',
            repeatCount: 'indefinite',
            to: '0.5',
            values: '.5;1;.5'
          })
        ),
        t(r).createElement(
          'circle',
          { cx: '110', cy: '15', r: '20' },
          t(r).createElement('animate', {
            attributeName: 'r',
            begin: '0s',
            calcMode: 'linear',
            dur: '0.8s',
            from: '20',
            repeatCount: 'indefinite',
            to: '20',
            values: '20;10;20'
          }),
          t(r).createElement('animate', {
            attributeName: 'fill-opacity',
            begin: '0s',
            calcMode: 'linear',
            dur: '0.8s',
            from: '1',
            repeatCount: 'indefinite',
            to: '1',
            values: '1;.5;1'
          })
        )
      );
  });
});
