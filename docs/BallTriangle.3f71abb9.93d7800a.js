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
  n.register('2nkH6', function (a, i) {
    var r = n('45P89'),
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
    ).parcelRequirec9c5.register('d2jWk', function (e, n) {
      var a, i, o;
      (a = e.exports),
        Object.defineProperty(a, '__esModule', { value: !0, configurable: !0 }),
        (i = e.exports),
        (o = function () {
          return c;
        }),
        Object.defineProperty(i, 'default', {
          get: o,
          set: undefined,
          enumerable: !0,
          configurable: !0
        });
      var c = function (e) {
        return t(l).createElement(
          'svg',
          (0, r.default)(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              'data-icon': 'ball-triangle',
              width: '1em',
              height: '1em',
              stroke: 'currentColor',
              viewBox: '0 0 65 65'
            },
            e
          ),
          t(l).createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd', strokeWidth: '5', transform: 'translate(1 1)' },
            t(l).createElement(
              'circle',
              { cx: '7', cy: '50', r: '5' },
              t(l).createElement('animate', {
                attributeName: 'cy',
                begin: '0s',
                calcMode: 'linear',
                dur: '2.2s',
                repeatCount: 'indefinite',
                values: '50;7;50;50'
              }),
              t(l).createElement('animate', {
                attributeName: 'cx',
                begin: '0s',
                calcMode: 'linear',
                dur: '2.2s',
                repeatCount: 'indefinite',
                values: '7;27;49;7'
              })
            ),
            t(l).createElement(
              'circle',
              { cx: '27', cy: '7', r: '5' },
              t(l).createElement('animate', {
                attributeName: 'cy',
                begin: '0s',
                calcMode: 'linear',
                dur: '2.2s',
                from: '7',
                repeatCount: 'indefinite',
                to: '7',
                values: '7;50;50;7'
              }),
              t(l).createElement('animate', {
                attributeName: 'cx',
                begin: '0s',
                calcMode: 'linear',
                dur: '2.2s',
                from: '27',
                repeatCount: 'indefinite',
                to: '27',
                values: '27;49;7;27'
              })
            ),
            t(l).createElement(
              'circle',
              { cx: '49', cy: '50', r: '5' },
              t(l).createElement('animate', {
                attributeName: 'cy',
                begin: '0s',
                calcMode: 'linear',
                dur: '2.2s',
                repeatCount: 'indefinite',
                values: '50;50;7;50'
              }),
              t(l).createElement('animate', {
                attributeName: 'cx',
                begin: '0s',
                calcMode: 'linear',
                dur: '2.2s',
                from: '49',
                repeatCount: 'indefinite',
                to: '49',
                values: '49;7;27;49'
              })
            )
          )
        );
      };
    });
  });
})();
