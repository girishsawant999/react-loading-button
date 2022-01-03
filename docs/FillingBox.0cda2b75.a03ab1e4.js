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
    t = e.parcelRequire6330;
  t.register('hyysw', function (r, i) {
    var o = t('b5vB1'),
      n = t('hF9j8');
    t('iYbao'),
      ('undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
        ? window
        : void 0 !== e
        ? e
        : {}
      ).parcelRequirec9c5.register('eG6Bj', function (e, t) {
        var r, i, d;
        (r = e.exports),
          Object.defineProperty(r, '__esModule', { value: !0, configurable: !0 }),
          (i = e.exports),
          (d = function () {
            return l;
          }),
          Object.defineProperty(i, 'default', {
            get: d,
            set: undefined,
            enumerable: !0,
            configurable: !0
          });
        var l = function (e) {
          return n.jsxs(
            'svg',
            o.objectSpread(
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
              e,
              {
                children: [
                  n.jsx('path', {
                    fill: 'none',
                    strokeWidth: '4',
                    d: 'M25 25H75V75H25z',
                    children: n.jsx('animateTransform', {
                      id: 'strokeBox',
                      attributeName: 'transform',
                      attributeType: 'XML',
                      begin: 'rectBox.end',
                      dur: '0.5s',
                      from: '0 50 50',
                      to: '180 50 50',
                      type: 'rotate'
                    })
                  }),
                  n.jsx('rect', {
                    width: '50',
                    height: '50',
                    y: '25',
                    x: '25',
                    children: n.jsx('animate', {
                      id: 'rectBox',
                      fill: 'freeze',
                      attributeName: 'height',
                      attributeType: 'XML',
                      begin: '0s;strokeBox.end',
                      dur: '1.3s',
                      from: '50',
                      to: '0'
                    })
                  })
                ]
              }
            )
          );
        };
      });
  });
})();
