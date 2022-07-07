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
n.register('13i5W', function (i, r) {
  var a = n('4rcgi');
  ('undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof self
    ? self
    : 'undefined' != typeof window
    ? window
    : void 0 !== e
    ? e
    : {}
  ).parcelRequirec9c5.register('jKikX', function (e, n) {
    var i, r, o;
    (i = e.exports),
      Object.defineProperty(i, '__esModule', { value: !0, configurable: !0 }),
      (r = e.exports),
      (o = function () {
        return f;
      }),
      Object.defineProperty(r, 'default', {
        get: o,
        set: undefined,
        enumerable: !0,
        configurable: !0
      });
    var f = (e) =>
      t(a).createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          'aria-hidden': 'true',
          className: 'svg-inline--fa fa-spinner fa-w-16',
          'data-icon': 'spinner',
          'data-prefix': 'fas',
          width: '1em',
          height: '1em',
          viewBox: '0 0 512 512',
          ...e
        },
        t(a).createElement(
          'path',
          {
            fill: 'currentColor',
            d: 'M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z'
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
  });
});
