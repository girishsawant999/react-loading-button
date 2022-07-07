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
  var r = e.parcelRequire6330;
  r.register('dhcZk', function (n, o) {
    var i = r('45P89'),
      l = r('iYbao');
    ('undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : void 0 !== e
      ? e
      : {}
    ).parcelRequirec9c5.register('eG6Bj', function (e, r) {
      var n, o, a;
      (n = e.exports),
        Object.defineProperty(n, '__esModule', { value: !0, configurable: !0 }),
        (o = e.exports),
        (a = function () {
          return f;
        }),
        Object.defineProperty(o, 'default', {
          get: a,
          set: undefined,
          enumerable: !0,
          configurable: !0
        });
      var f = function (e) {
        return t(l).createElement(
          'svg',
          (0, i.default)(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              'data-icon': 'filling-box',
              width: '1em',
              height: '1em',
              viewBox: '0 0 100 100',
              xmlSpace: 'preserve',
              fill: 'currentColor',
              stroke: 'currentColor'
            },
            e
          ),
          t(l).createElement(
            'path',
            { fill: 'none', strokeWidth: '4', d: 'M25 25H75V75H25z' },
            t(l).createElement('animateTransform', {
              id: 'strokeBox',
              attributeName: 'transform',
              attributeType: 'XML',
              begin: 'rectBox.end',
              dur: '0.5s',
              from: '0 50 50',
              to: '180 50 50',
              type: 'rotate'
            })
          ),
          t(l).createElement(
            'rect',
            { width: '50', height: '50', y: '25', x: '25' },
            t(l).createElement('animate', {
              id: 'rectBox',
              fill: 'freeze',
              attributeName: 'height',
              attributeType: 'XML',
              begin: '0s;strokeBox.end',
              dur: '1.3s',
              from: '50',
              to: '0'
            })
          )
        );
      };
    });
  });
})();
