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
        : {},
    n = e.parcelRequire6330;
  n.register('cRqQ7', function (i, t) {
    var r = n('b5vB1'),
      o = n('hF9j8');
    n('iYbao'),
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
        var i, t, a;
        (i = e.exports),
          Object.defineProperty(i, '__esModule', { value: !0, configurable: !0 }),
          (t = e.exports),
          (a = function () {
            return f;
          }),
          Object.defineProperty(t, 'default', {
            get: a,
            set: undefined,
            enumerable: !0,
            configurable: !0
          });
        var f = function (e) {
          return o.jsx(
            'svg',
            r.objectSpread(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-hidden': 'true',
                className: 'svg-inline--fa fa-spinner fa-w-16',
                'data-icon': 'spinner',
                'data-prefix': 'fas',
                width: '1em',
                height: '1em',
                viewBox: '0 0 512 512'
              },
              e,
              {
                children: o.jsx('path', {
                  fill: 'currentColor',
                  d: 'M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z',
                  children: o.jsx('animateTransform', {
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
              }
            )
          );
        };
      });
  });
})();
