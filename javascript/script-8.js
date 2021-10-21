!(function (t) {
  var a = {
    mode: "horizontal",
    slideSelector: "",
    infiniteLoop: !0,
    hideControlOnEnd: !1,
    speed: 200,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: !1,
    captions: !1,
    ticker: !1,
    tickerHover: !1,
    adaptiveHeight: !1,
    adaptiveHeightSpeed: 500,
    video: !1,
    useCSS: !0,
    preloadImages: "visible",
    responsive: !0,
    slideZIndex: 50,
    wrapperClass: "bx-wrapper",
    touchEnabled: !0,
    swipeThreshold: 50,
    oneToOneTouch: !0,
    preventDefaultSwipeX: !0,
    preventDefaultSwipeY: !1,
    ariaLive: !0,
    ariaHidden: !0,
    keyboardEnabled: !1,
    pager: !0,
    pagerType: "full",
    pagerShortSeparator: " / ",
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,
    controls: !0,
    nextText: "Next",
    prevText: "Prev",
    nextSelector: null,
    prevSelector: null,
    autoControls: !1,
    startText: "Start",
    stopText: "Stop",
    autoControlsCombine: !1,
    autoControlsSelector: null,
    auto: !1,
    pause: 4e3,
    autoStart: !0,
    autoDirection: "next",
    stopAutoOnClick: !1,
    autoHover: !1,
    autoDelay: 0,
    autoSlideForOnePage: !1,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    shrinkItems: !1,
    onSliderLoad: function () {
      return !0;
    },
    onSlideBefore: function () {
      return !0;
    },
    onSlideAfter: function () {
      return !0;
    },
    onSlideNext: function () {
      return !0;
    },
    onSlidePrev: function () {
      return !0;
    },
    onSliderResize: function () {
      return !0;
    },
  };
  t.fn.bxSlider = function (e) {
    if (0 === this.length) return this;
    if (this.length > 1)
      return (
        this.each(function () {
          t(this).bxSlider(e);
        }),
        this
      );
    var s = {},
      m = this,
      l = t(window).width(),
      r = t(window).height();
    if (!t(m).data("bxSlider")) {
      var n = function () {
          t(m).data("bxSlider") ||
            ((s.settings = t.extend({}, a, e)),
            (s.settings.slideWidth = parseInt(s.settings.slideWidth)),
            (s.children = m.children(s.settings.slideSelector)),
            s.children.length < s.settings.minSlides &&
              (s.settings.minSlides = s.children.length),
            s.children.length < s.settings.maxSlides &&
              (s.settings.maxSlides = s.children.length),
            s.settings.randomStart &&
              (s.settings.startSlide = Math.floor(
                Math.random() * s.children.length
              )),
            (s.active = { index: s.settings.startSlide }),
            (s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1),
            s.carousel && (s.settings.preloadImages = "all"),
            (s.minThreshold =
              s.settings.minSlides * s.settings.slideWidth +
              (s.settings.minSlides - 1) * s.settings.slideMargin),
            (s.maxThreshold =
              s.settings.maxSlides * s.settings.slideWidth +
              (s.settings.maxSlides - 1) * s.settings.slideMargin),
            (s.working = !1),
            (s.controls = {}),
            (s.interval = null),
            (s.animProp = "vertical" === s.settings.mode ? "top" : "left"),
            (s.usingCSS =
              s.settings.useCSS &&
              "fade" !== s.settings.mode &&
              (function () {
                for (
                  var i = document.createElement("div"),
                    t = [
                      "WebkitPerspective",
                      "MozPerspective",
                      "OPerspective",
                      "msPerspective",
                    ],
                    a = 0;
                  a < t.length;
                  a++
                )
                  if (void 0 !== i.style[t[a]])
                    return (
                      (s.cssPrefix = t[a]
                        .replace("Perspective", "")
                        .toLowerCase()),
                      (s.animProp = "-" + s.cssPrefix + "-transform"),
                      !0
                    );
                return !1;
              })()),
            "vertical" === s.settings.mode &&
              (s.settings.maxSlides = s.settings.minSlides),
            m.data("origStyle", m.attr("style")),
            m.children(s.settings.slideSelector).each(function () {
              t(this).data("origStyle", t(this).attr("style"));
            }),
            c());
        },
        c = function () {
          var i = s.children.eq(s.settings.startSlide);
          m.wrap(
            '<div class="' +
              s.settings.wrapperClass +
              '"><div class="bx-viewport"></div></div>'
          ),
            (s.viewport = m.parent()),
            s.settings.ariaLive &&
              !s.settings.ticker &&
              s.viewport.attr("aria-live", "polite"),
            (s.loader = t('<div class="bx-loading" />')),
            s.viewport.prepend(s.loader),
            m.css({
              width:
                "horizontal" === s.settings.mode
                  ? 1e3 * s.children.length + 215 + "%"
                  : "auto",
              position: "relative",
            }),
            s.usingCSS && s.settings.easing
              ? m.css(
                  "-" + s.cssPrefix + "-transition-timing-function",
                  s.settings.easing
                )
              : s.settings.easing || (s.settings.easing = "swing"),
            s.viewport.css({
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }),
            s.viewport.parent().css({ maxWidth: p() }),
            s.settings.pager ||
              s.settings.controls ||
              s.viewport.parent().css({ margin: "0 auto 0px" }),
            s.children.css({
              float: "horizontal" === s.settings.mode ? "left" : "none",
              listStyle: "none",
              position: "relative",
            }),
            s.children.css("width", u()),
            "horizontal" === s.settings.mode &&
              s.settings.slideMargin > 0 &&
              s.children.css("marginRight", s.settings.slideMargin),
            "vertical" === s.settings.mode &&
              s.settings.slideMargin > 0 &&
              s.children.css("marginBottom", s.settings.slideMargin),
            "fade" === s.settings.mode &&
              (s.children.css({
                position: "absolute",
                zIndex: 0,
                display: "none",
              }),
              s.children
                .eq(s.settings.startSlide)
                .css({ zIndex: s.settings.slideZIndex, display: "block" })),
            (s.controls.el = t('<div class="bx-controls" />')),
            s.settings.captions && P(),
            (s.active.last = s.settings.startSlide === g() - 1),
            s.settings.video && m.fitVids(),
            ("all" === s.settings.preloadImages || s.settings.ticker) &&
              (i = s.children),
            s.settings.ticker
              ? (s.settings.pager = !1)
              : (s.settings.controls && C(),
                s.settings.auto && s.settings.autoControls && y(),
                s.settings.pager && x(),
                (s.settings.controls ||
                  s.settings.autoControls ||
                  s.settings.pager) &&
                  s.viewport.after(s.controls.el)),
            o(i, h);
        },
        o = function (i, a) {
          var e = i.find('img:not([src=""]), iframe').length,
            s = 0;
          return 0 === e
            ? void a()
            : void i.find('img:not([src=""]), iframe').each(function () {
                t(this)
                  .one("load error", function () {
                    ++s === e && a();
                  })
                  .each(function () {
                    this.complete && t(this).load();
                  });
              });
        },
        h = function () {
          if (
            s.settings.infiniteLoop &&
            "fade" !== s.settings.mode &&
            !s.settings.ticker
          ) {
            var i =
                "vertical" === s.settings.mode
                  ? s.settings.minSlides
                  : s.settings.maxSlides,
              a = s.children.slice(0, i).clone(!0).addClass("bx-clone"),
              e = s.children.slice(-i).clone(!0).addClass("bx-clone");
            s.settings.ariaHidden &&
              (a.attr("aria-hidden", !0), e.attr("aria-hidden", !0)),
              m.append(a).prepend(e);
          }
          s.loader.remove(),
            b(),
            "vertical" === s.settings.mode && (s.settings.adaptiveHeight = !0),
            s.viewport.height(d()),
            m.redrawSlider(),
            s.settings.onSliderLoad.call(m, s.active.index),
            (s.initialized = !0),
            s.settings.responsive && t(window).bind("resize", j),
            s.settings.auto &&
              s.settings.autoStart &&
              (g() > 1 || s.settings.autoSlideForOnePage) &&
              I(),
            s.settings.ticker && H(),
            s.settings.pager && E(s.settings.startSlide),
            s.settings.controls && A(),
            s.settings.touchEnabled && !s.settings.ticker && V(),
            s.settings.keyboardEnabled &&
              !s.settings.ticker &&
              t(document).keydown(R);
        },
        d = function () {
          var a = 0,
            e = t();
          if ("vertical" === s.settings.mode || s.settings.adaptiveHeight)
            if (s.carousel) {
              var m =
                1 === s.settings.moveSlides
                  ? s.active.index
                  : s.active.index * v();
              for (
                e = s.children.eq(m), i = 1;
                i <= s.settings.maxSlides - 1;
                i++
              )
                e =
                  m + i >= s.children.length
                    ? e.add(s.children.eq(i - 1))
                    : e.add(s.children.eq(m + i));
            } else e = s.children.eq(s.active.index);
          else e = s.children;
          return (
            "vertical" === s.settings.mode
              ? (e.each(function (i) {
                  a += t(this).outerHeight();
                }),
                s.settings.slideMargin > 0 &&
                  (a += s.settings.slideMargin * (s.settings.minSlides - 1)))
              : (a = Math.max.apply(
                  Math,
                  e
                    .map(function () {
                      return t(this).outerHeight(!1);
                    })
                    .get()
                )),
            "border-box" === s.viewport.css("box-sizing")
              ? (a +=
                  parseFloat(s.viewport.css("padding-top")) +
                  parseFloat(s.viewport.css("padding-bottom")) +
                  parseFloat(s.viewport.css("border-top-width")) +
                  parseFloat(s.viewport.css("border-bottom-width")))
              : "padding-box" === s.viewport.css("box-sizing") &&
                (a +=
                  parseFloat(s.viewport.css("padding-top")) +
                  parseFloat(s.viewport.css("padding-bottom"))),
            a
          );
        },
        p = function () {
          var i = "100%";
          return (
            s.settings.slideWidth > 0 &&
              (i =
                "horizontal" === s.settings.mode
                  ? s.settings.maxSlides * s.settings.slideWidth +
                    (s.settings.maxSlides - 1) * s.settings.slideMargin
                  : s.settings.slideWidth),
            i
          );
        },
        u = function () {
          var i = s.settings.slideWidth,
            t = s.viewport.width();
          if (
            0 === s.settings.slideWidth ||
            (s.settings.slideWidth > t && !s.carousel) ||
            "vertical" === s.settings.mode
          )
            i = t;
          else if (
            s.settings.maxSlides > 1 &&
            "horizontal" === s.settings.mode
          ) {
            if (t > s.maxThreshold) return i;
            t < s.minThreshold
              ? (i =
                  (t - s.settings.slideMargin * (s.settings.minSlides - 1)) /
                  s.settings.minSlides)
              : s.settings.shrinkItems &&
                (i = Math.floor(
                  (t + s.settings.slideMargin) /
                    Math.ceil(
                      (t + s.settings.slideMargin) /
                        (i + s.settings.slideMargin)
                    ) -
                    s.settings.slideMargin
                ));
          }
          return i;
        },
        f = function () {
          var i = 1,
            t = null;
          return (
            "horizontal" === s.settings.mode && s.settings.slideWidth > 0
              ? s.viewport.width() < s.minThreshold
                ? (i = s.settings.minSlides)
                : s.viewport.width() > s.maxThreshold
                ? (i = s.settings.maxSlides)
                : ((t = s.children.first().width() + s.settings.slideMargin),
                  (i = Math.floor(
                    (s.viewport.width() + s.settings.slideMargin) / t
                  )))
              : "vertical" === s.settings.mode && (i = s.settings.minSlides),
            i
          );
        },
        g = function () {
          var i = 0,
            t = 0,
            a = 0;
          if (s.settings.moveSlides > 0)
            if (s.settings.infiniteLoop) i = Math.ceil(s.children.length / v());
            else
              for (; t < s.children.length; )
                ++i,
                  (t = a + f()),
                  (a +=
                    s.settings.moveSlides <= f() ? s.settings.moveSlides : f());
          else i = Math.ceil(s.children.length / f());
          return i;
        },
        v = function () {
          return s.settings.moveSlides > 0 && s.settings.moveSlides <= f()
            ? s.settings.moveSlides
            : f();
        },
        b = function () {
          var i, t, a;
          s.children.length > s.settings.maxSlides &&
          s.active.last &&
          !s.settings.infiniteLoop
            ? "horizontal" === s.settings.mode
              ? ((t = s.children.last()),
                (i = t.position()),
                S(
                  -(i.left - (s.viewport.width() - t.outerWidth())),
                  "reset",
                  0
                ))
              : "vertical" === s.settings.mode &&
                ((a = s.children.length - s.settings.minSlides),
                (i = s.children.eq(a).position()),
                S(-i.top, "reset", 0))
            : ((i = s.children.eq(s.active.index * v()).position()),
              s.active.index === g() - 1 && (s.active.last = !0),
              void 0 !== i &&
                ("horizontal" === s.settings.mode
                  ? S(-i.left, "reset", 0)
                  : "vertical" === s.settings.mode && S(-i.top, "reset", 0)));
        },
        S = function (i, a, e, l) {
          var r, n;
          s.usingCSS
            ? ((n =
                "vertical" === s.settings.mode
                  ? "translate3d(0, " + i + "px, 0)"
                  : "translate3d(" + i + "px, 0, 0)"),
              m.css("-" + s.cssPrefix + "-transition-duration", e / 1e3 + "s"),
              "slide" === a
                ? (m.css(s.animProp, n),
                  0 !== e
                    ? m.bind(
                        "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                        function (i) {
                          t(i.target).is(m) &&
                            (m.unbind(
                              "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"
                            ),
                            D());
                        }
                      )
                    : D())
                : "reset" === a
                ? m.css(s.animProp, n)
                : "ticker" === a &&
                  (m.css(
                    "-" + s.cssPrefix + "-transition-timing-function",
                    "linear"
                  ),
                  m.css(s.animProp, n),
                  0 !== e
                    ? m.bind(
                        "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                        function (i) {
                          t(i.target).is(m) &&
                            (m.unbind(
                              "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"
                            ),
                            S(l.resetValue, "reset", 0),
                            L());
                        }
                      )
                    : (S(l.resetValue, "reset", 0), L())))
            : ((r = {}),
              (r[s.animProp] = i),
              "slide" === a
                ? m.animate(r, e, s.settings.easing, function () {
                    D();
                  })
                : "reset" === a
                ? m.css(s.animProp, i)
                : "ticker" === a &&
                  m.animate(r, e, "linear", function () {
                    S(l.resetValue, "reset", 0), L();
                  }));
        },
        w = function () {
          for (var i = "", a = "", e = g(), m = 0; e > m; m++)
            (a = ""),
              (s.settings.buildPager && t.isFunction(s.settings.buildPager)) ||
              s.settings.pagerCustom
                ? ((a = s.settings.buildPager(m)),
                  s.pagerEl.addClass("bx-custom-pager"))
                : ((a = m + 1), s.pagerEl.addClass("bx-default-pager")),
              (i +=
                '<div class="bx-pager-item"><a href="" data-slide-index="' +
                m +
                '" class="bx-pager-link">' +
                a +
                "</a></div>");
          s.pagerEl.html(i);
        },
        x = function () {
          s.settings.pagerCustom
            ? (s.pagerEl = t(s.settings.pagerCustom))
            : ((s.pagerEl = t('<div class="bx-pager" />')),
              s.settings.pagerSelector
                ? t(s.settings.pagerSelector).html(s.pagerEl)
                : s.controls.el.addClass("bx-has-pager").append(s.pagerEl),
              w()),
            s.pagerEl.on("click touchend", "a", B);
        },
        C = function () {
          (s.controls.next = t(
            '<a class="bx-next" href="">' + s.settings.nextText + "</a>"
          )),
            (s.controls.prev = t(
              '<a class="bx-prev" href="">' + s.settings.prevText + "</a>"
            )),
            s.controls.next.bind("click touchend", k),
            s.controls.prev.bind("click touchend", M),
            s.settings.nextSelector &&
              t(s.settings.nextSelector).append(s.controls.next),
            s.settings.prevSelector &&
              t(s.settings.prevSelector).append(s.controls.prev),
            s.settings.nextSelector ||
              s.settings.prevSelector ||
              ((s.controls.directionEl = t(
                '<div class="bx-controls-direction" />'
              )),
              s.controls.directionEl
                .append(s.controls.prev)
                .append(s.controls.next),
              s.controls.el
                .addClass("bx-has-controls-direction")
                .append(s.controls.directionEl));
        },
        y = function () {
          (s.controls.start = t(
            '<div class="bx-controls-auto-item"><a class="bx-start" href="">' +
              s.settings.startText +
              "</a></div>"
          )),
            (s.controls.stop = t(
              '<div class="bx-controls-auto-item"><a class="bx-stop" href="">' +
                s.settings.stopText +
                "</a></div>"
            )),
            (s.controls.autoEl = t('<div class="bx-controls-auto" />')),
            s.controls.autoEl.on("click", ".bx-start", T),
            s.controls.autoEl.on("click", ".bx-stop", W),
            s.settings.autoControlsCombine
              ? s.controls.autoEl.append(s.controls.start)
              : s.controls.autoEl
                  .append(s.controls.start)
                  .append(s.controls.stop),
            s.settings.autoControlsSelector
              ? t(s.settings.autoControlsSelector).html(s.controls.autoEl)
              : s.controls.el
                  .addClass("bx-has-controls-auto")
                  .append(s.controls.autoEl),
            F(s.settings.autoStart ? "stop" : "start");
        },
        P = function () {
          s.children.each(function (i) {
            var a = t(this).find("img:first").attr("title");
            void 0 !== a &&
              ("" + a).length &&
              t(this).append(
                '<div class="bx-caption"><span>' + a + "</span></div>"
              );
          });
        },
        k = function (i) {
          i.preventDefault(),
            s.controls.el.hasClass("disabled") ||
              (s.settings.auto && s.settings.stopAutoOnClick && m.stopAuto(),
              m.goToNextSlide());
        },
        M = function (i) {
          i.preventDefault(),
            s.controls.el.hasClass("disabled") ||
              (s.settings.auto && s.settings.stopAutoOnClick && m.stopAuto(),
              m.goToPrevSlide());
        },
        T = function (i) {
          m.startAuto(), i.preventDefault();
        },
        W = function (i) {
          m.stopAuto(), i.preventDefault();
        },
        B = function (i) {
          var a, e;
          i.preventDefault(),
            s.controls.el.hasClass("disabled") ||
              (s.settings.auto && s.settings.stopAutoOnClick && m.stopAuto(),
              void 0 !== (a = t(i.currentTarget)).attr("data-slide-index") &&
                (e = parseInt(a.attr("data-slide-index"))) !== s.active.index &&
                m.goToSlide(e));
        },
        E = function (i) {
          var a = s.children.length;
          return "short" === s.settings.pagerType
            ? (s.settings.maxSlides > 1 &&
                (a = Math.ceil(s.children.length / s.settings.maxSlides)),
              void s.pagerEl.html(i + 1 + s.settings.pagerShortSeparator + a))
            : (s.pagerEl.find("a").removeClass("active"),
              void s.pagerEl.each(function (a, e) {
                t(e).find("a").eq(i).addClass("active");
              }));
        },
        D = function () {
          if (s.settings.infiniteLoop) {
            var i = "";
            0 === s.active.index
              ? (i = s.children.eq(0).position())
              : s.active.index === g() - 1 && s.carousel
              ? (i = s.children.eq((g() - 1) * v()).position())
              : s.active.index === s.children.length - 1 &&
                (i = s.children.eq(s.children.length - 1).position()),
              i &&
                ("horizontal" === s.settings.mode
                  ? S(-i.left, "reset", 0)
                  : "vertical" === s.settings.mode && S(-i.top, "reset", 0));
          }
          (s.working = !1),
            s.settings.onSlideAfter.call(
              m,
              s.children.eq(s.active.index),
              s.oldIndex,
              s.active.index
            );
        },
        F = function (i) {
          s.settings.autoControlsCombine
            ? s.controls.autoEl.html(s.controls[i])
            : (s.controls.autoEl.find("a").removeClass("active"),
              s.controls.autoEl
                .find("a:not(.bx-" + i + ")")
                .addClass("active"));
        },
        A = function () {
          1 === g()
            ? (s.controls.prev.addClass("disabled"),
              s.controls.next.addClass("disabled"))
            : !s.settings.infiniteLoop &&
              s.settings.hideControlOnEnd &&
              (0 === s.active.index
                ? (s.controls.prev.addClass("disabled"),
                  s.controls.next.removeClass("disabled"))
                : s.active.index === g() - 1
                ? (s.controls.next.addClass("disabled"),
                  s.controls.prev.removeClass("disabled"))
                : (s.controls.prev.removeClass("disabled"),
                  s.controls.next.removeClass("disabled")));
        },
        I = function () {
          s.settings.autoDelay > 0
            ? setTimeout(m.startAuto, s.settings.autoDelay)
            : (m.startAuto(),
              t(window)
                .focus(function () {
                  m.startAuto();
                })
                .blur(function () {
                  m.stopAuto();
                })),
            s.settings.autoHover &&
              m.hover(
                function () {
                  s.interval && (m.stopAuto(!0), (s.autoPaused = !0));
                },
                function () {
                  s.autoPaused && (m.startAuto(!0), (s.autoPaused = null));
                }
              );
        },
        H = function () {
          var i,
            a,
            e,
            l,
            r,
            n,
            c,
            o,
            h = 0;
          "next" === s.settings.autoDirection
            ? m.append(s.children.clone().addClass("bx-clone"))
            : (m.prepend(s.children.clone().addClass("bx-clone")),
              (i = s.children.first().position()),
              (h = "horizontal" === s.settings.mode ? -i.left : -i.top)),
            S(h, "reset", 0),
            (s.settings.pager = !1),
            (s.settings.controls = !1),
            (s.settings.autoControls = !1),
            s.settings.tickerHover &&
              (s.usingCSS
                ? ((l = "horizontal" === s.settings.mode ? 4 : 5),
                  s.viewport.hover(
                    function () {
                      (a = m.css("-" + s.cssPrefix + "-transform")),
                        (e = parseFloat(a.split(",")[l])),
                        S(e, "reset", 0);
                    },
                    function () {
                      (o = 0),
                        s.children.each(function (i) {
                          o +=
                            "horizontal" === s.settings.mode
                              ? t(this).outerWidth(!0)
                              : t(this).outerHeight(!0);
                        }),
                        (r = s.settings.speed / o),
                        (n = "horizontal" === s.settings.mode ? "left" : "top"),
                        (c = r * (o - Math.abs(parseInt(e)))),
                        L(c);
                    }
                  ))
                : s.viewport.hover(
                    function () {
                      m.stop();
                    },
                    function () {
                      (o = 0),
                        s.children.each(function (i) {
                          o +=
                            "horizontal" === s.settings.mode
                              ? t(this).outerWidth(!0)
                              : t(this).outerHeight(!0);
                        }),
                        (r = s.settings.speed / o),
                        (n = "horizontal" === s.settings.mode ? "left" : "top"),
                        (c = r * (o - Math.abs(parseInt(m.css(n))))),
                        L(c);
                    }
                  )),
            L();
        },
        L = function (i) {
          var t,
            a,
            e = i || s.settings.speed,
            l = { left: 0, top: 0 },
            r = { left: 0, top: 0 };
          "next" === s.settings.autoDirection
            ? (l = m.find(".bx-clone").first().position())
            : (r = s.children.first().position()),
            (t = "horizontal" === s.settings.mode ? -l.left : -l.top),
            (a = "horizontal" === s.settings.mode ? -r.left : -r.top),
            S(t, "ticker", e, { resetValue: a });
        },
        z = function (i) {
          var a = t(window),
            e = { top: a.scrollTop(), left: a.scrollLeft() },
            s = i.offset();
          return (
            (e.right = e.left + a.width()),
            (e.bottom = e.top + a.height()),
            (s.right = s.left + i.outerWidth()),
            (s.bottom = s.top + i.outerHeight()),
            !(
              e.right < s.left ||
              e.left > s.right ||
              e.bottom < s.top ||
              e.top > s.bottom
            )
          );
        },
        R = function (i) {
          var t = document.activeElement.tagName.toLowerCase();
          if (null == new RegExp(t, ["i"]).exec("input|textarea") && z(m)) {
            if (39 === i.keyCode) return k(i), !1;
            if (37 === i.keyCode) return M(i), !1;
          }
        },
        V = function () {
          (s.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }),
            s.viewport.bind("touchstart MSPointerDown pointerdown", q),
            s.viewport.on("click", ".bxslider a", function (i) {
              s.viewport.hasClass("click-disabled") &&
                (i.preventDefault(), s.viewport.removeClass("click-disabled"));
            });
        },
        q = function (i) {
          if ((s.controls.el.addClass("disabled"), s.working))
            i.preventDefault(), s.controls.el.removeClass("disabled");
          else {
            s.touch.originalPos = m.position();
            var t = i.originalEvent,
              a = void 0 !== t.changedTouches ? t.changedTouches : [t];
            (s.touch.start.x = a[0].pageX),
              (s.touch.start.y = a[0].pageY),
              s.viewport.get(0).setPointerCapture &&
                ((s.pointerId = t.pointerId),
                s.viewport.get(0).setPointerCapture(s.pointerId)),
              s.viewport.bind("touchmove MSPointerMove pointermove", G),
              s.viewport.bind("touchend MSPointerUp pointerup", O),
              s.viewport.bind("MSPointerCancel pointercancel", _);
          }
        },
        _ = function (i) {
          S(s.touch.originalPos.left, "reset", 0),
            s.controls.el.removeClass("disabled"),
            s.viewport.unbind("MSPointerCancel pointercancel", _),
            s.viewport.unbind("touchmove MSPointerMove pointermove", G),
            s.viewport.unbind("touchend MSPointerUp pointerup", O),
            s.viewport.get(0).releasePointerCapture &&
              s.viewport.get(0).releasePointerCapture(s.pointerId);
        },
        G = function (i) {
          var t = i.originalEvent,
            a = void 0 !== t.changedTouches ? t.changedTouches : [t],
            e = Math.abs(a[0].pageX - s.touch.start.x),
            m = Math.abs(a[0].pageY - s.touch.start.y),
            l = 0,
            r = 0;
          3 * e > m && s.settings.preventDefaultSwipeX
            ? i.preventDefault()
            : 3 * m > e &&
              s.settings.preventDefaultSwipeY &&
              i.preventDefault(),
            "fade" !== s.settings.mode &&
              s.settings.oneToOneTouch &&
              ("horizontal" === s.settings.mode
                ? ((r = a[0].pageX - s.touch.start.x),
                  (l = s.touch.originalPos.left + r))
                : ((r = a[0].pageY - s.touch.start.y),
                  (l = s.touch.originalPos.top + r)),
              S(l, "reset", 0));
        },
        O = function (i) {
          s.viewport.unbind("touchmove MSPointerMove pointermove", G),
            s.controls.el.removeClass("disabled");
          var t = i.originalEvent,
            a = void 0 !== t.changedTouches ? t.changedTouches : [t],
            e = 0,
            l = 0;
          (s.touch.end.x = a[0].pageX),
            (s.touch.end.y = a[0].pageY),
            "fade" === s.settings.mode
              ? (l = Math.abs(s.touch.start.x - s.touch.end.x)) >=
                  s.settings.swipeThreshold &&
                (s.touch.start.x > s.touch.end.x
                  ? m.goToNextSlide()
                  : m.goToPrevSlide(),
                m.stopAuto())
              : ("horizontal" === s.settings.mode
                  ? ((l = s.touch.end.x - s.touch.start.x),
                    (e = s.touch.originalPos.left))
                  : ((l = s.touch.end.y - s.touch.start.y),
                    (e = s.touch.originalPos.top)),
                !s.settings.infiniteLoop &&
                ((0 === s.active.index && l > 0) || (s.active.last && 0 > l))
                  ? S(e, "reset", 200)
                  : Math.abs(l) >= s.settings.swipeThreshold
                  ? (0 > l ? m.goToNextSlide() : m.goToPrevSlide(),
                    m.stopAuto())
                  : S(e, "reset", 200)),
            s.viewport.unbind("touchend MSPointerUp pointerup", O),
            s.viewport.get(0).releasePointerCapture &&
              s.viewport.get(0).releasePointerCapture(s.pointerId);
        },
        j = function (i) {
          if (s.initialized)
            if (s.working) window.setTimeout(j, 10);
            else {
              var a = t(window).width(),
                e = t(window).height();
              (l !== a || r !== e) &&
                ((l = a),
                (r = e),
                m.redrawSlider(),
                s.settings.onSliderResize.call(m, s.active.index));
            }
        },
        $ = function (i) {
          var t = f();
          s.settings.ariaHidden &&
            !s.settings.ticker &&
            (s.children.attr("aria-hidden", "true"),
            s.children.slice(i, i + t).attr("aria-hidden", "false"));
        },
        J = function (i) {
          return 0 > i
            ? s.settings.infiniteLoop
              ? g() - 1
              : s.active.index
            : i >= g()
            ? s.settings.infiniteLoop
              ? 0
              : s.active.index
            : i;
        };
      return (
        (m.goToSlide = function (i, a) {
          var e,
            l,
            r,
            n,
            c = !0,
            o = 0,
            h = { left: 0, top: 0 },
            p = null;
          if (
            ((s.oldIndex = s.active.index),
            (s.active.index = J(i)),
            !s.working && s.active.index !== s.oldIndex)
          ) {
            if (
              ((s.working = !0),
              void 0 !==
                (c = s.settings.onSlideBefore.call(
                  m,
                  s.children.eq(s.active.index),
                  s.oldIndex,
                  s.active.index
                )) && !c)
            )
              return (s.active.index = s.oldIndex), void (s.working = !1);
            "next" === a
              ? s.settings.onSlideNext.call(
                  m,
                  s.children.eq(s.active.index),
                  s.oldIndex,
                  s.active.index
                ) || (c = !1)
              : "prev" === a &&
                (s.settings.onSlidePrev.call(
                  m,
                  s.children.eq(s.active.index),
                  s.oldIndex,
                  s.active.index
                ) ||
                  (c = !1)),
              (s.active.last = s.active.index >= g() - 1),
              (s.settings.pager || s.settings.pagerCustom) && E(s.active.index),
              s.settings.controls && A(),
              "fade" === s.settings.mode
                ? (s.settings.adaptiveHeight &&
                    s.viewport.height() !== d() &&
                    s.viewport.animate(
                      { height: d() },
                      s.settings.adaptiveHeightSpeed
                    ),
                  s.children
                    .filter(":visible")
                    .fadeOut(s.settings.speed)
                    .css({ zIndex: 0 }),
                  s.children
                    .eq(s.active.index)
                    .css("zIndex", s.settings.slideZIndex + 1)
                    .fadeIn(s.settings.speed, function () {
                      t(this).css("zIndex", s.settings.slideZIndex), D();
                    }))
                : (s.settings.adaptiveHeight &&
                    s.viewport.height() !== d() &&
                    s.viewport.animate(
                      { height: d() },
                      s.settings.adaptiveHeightSpeed
                    ),
                  !s.settings.infiniteLoop && s.carousel && s.active.last
                    ? "horizontal" === s.settings.mode
                      ? ((p = s.children.eq(s.children.length - 1)),
                        (h = p.position()),
                        (o = s.viewport.width() - p.outerWidth()))
                      : ((e = s.children.length - s.settings.minSlides),
                        (h = s.children.eq(e).position()))
                    : s.carousel && s.active.last && "prev" === a
                    ? ((l =
                        1 === s.settings.moveSlides
                          ? s.settings.maxSlides - v()
                          : (g() - 1) * v() -
                            (s.children.length - s.settings.maxSlides)),
                      (p = m.children(".bx-clone").eq(l)),
                      (h = p.position()))
                    : "next" === a && 0 === s.active.index
                    ? ((h = m
                        .find("> .bx-clone")
                        .eq(s.settings.maxSlides)
                        .position()),
                      (s.active.last = !1))
                    : i >= 0 &&
                      ((n = i * parseInt(v())),
                      (h = s.children.eq(n).position())),
                  void 0 !== h
                    ? ((r =
                        "horizontal" === s.settings.mode
                          ? -(h.left - o)
                          : -h.top),
                      S(r, "slide", s.settings.speed))
                    : (s.working = !1)),
              s.settings.ariaHidden && $(s.active.index * v());
          }
        }),
        (m.goToNextSlide = function () {
          if (s.settings.infiniteLoop || !s.active.last) {
            var i = parseInt(s.active.index) + 1;
            m.goToSlide(i, "next");
          }
        }),
        (m.goToPrevSlide = function () {
          if (s.settings.infiniteLoop || 0 !== s.active.index) {
            var i = parseInt(s.active.index) - 1;
            m.goToSlide(i, "prev");
          }
        }),
        (m.startAuto = function (i) {
          s.interval ||
            ((s.interval = setInterval(function () {
              "next" === s.settings.autoDirection
                ? m.goToNextSlide()
                : m.goToPrevSlide();
            }, s.settings.pause)),
            s.settings.autoControls && !0 !== i && F("stop"));
        }),
        (m.stopAuto = function (i) {
          s.interval &&
            (clearInterval(s.interval),
            (s.interval = null),
            s.settings.autoControls && !0 !== i && F("start"));
        }),
        (m.getCurrentSlide = function () {
          return s.active.index;
        }),
        (m.getCurrentSlideElement = function () {
          return s.children.eq(s.active.index);
        }),
        (m.getSlideElement = function (i) {
          return s.children.eq(i);
        }),
        (m.getSlideCount = function () {
          return s.children.length;
        }),
        (m.isWorking = function () {
          return s.working;
        }),
        (m.redrawSlider = function () {
          s.children.add(m.find(".bx-clone")).outerWidth(u()),
            s.viewport.css("height", d()),
            s.settings.ticker || b(),
            s.active.last && (s.active.index = g() - 1),
            s.active.index >= g() && (s.active.last = !0),
            s.settings.pager &&
              !s.settings.pagerCustom &&
              (w(), E(s.active.index)),
            s.settings.ariaHidden && $(s.active.index * v());
        }),
        (m.destroySlider = function () {
          s.initialized &&
            ((s.initialized = !1),
            t(".bx-clone", this).remove(),
            s.children.each(function () {
              void 0 !== t(this).data("origStyle")
                ? t(this).attr("style", t(this).data("origStyle"))
                : t(this).removeAttr("style");
            }),
            void 0 !== t(this).data("origStyle")
              ? this.attr("style", t(this).data("origStyle"))
              : t(this).removeAttr("style"),
            t(this).unwrap().unwrap(),
            s.controls.el && s.controls.el.remove(),
            s.controls.next && s.controls.next.remove(),
            s.controls.prev && s.controls.prev.remove(),
            s.pagerEl &&
              s.settings.controls &&
              !s.settings.pagerCustom &&
              s.pagerEl.remove(),
            t(".bx-caption", this).remove(),
            s.controls.autoEl && s.controls.autoEl.remove(),
            clearInterval(s.interval),
            s.settings.responsive && t(window).unbind("resize", j),
            s.settings.keyboardEnabled && t(document).unbind("keydown", R),
            t(this).removeData("bxSlider"));
        }),
        (m.reloadSlider = function (i) {
          void 0 !== i && (e = i),
            m.destroySlider(),
            n(),
            t(m).data("bxSlider", this);
        }),
        n(),
        t(m).data("bxSlider", this),
        this
      );
    }
  };
})(jQuery),
  (function (i) {
    i.fn.dcVerticalMegaMenu = function (t) {
      var a = {
          classParent: "dc-mega",
          arrow: !0,
          classArrow: "dc-mega-icon",
          classContainer: "sub-container",
          classSubMenu: "sub",
          classMega: "mega",
          classSubParent: "mega-hdr",
          classSubLink: "mega-hdr",
          classRow: "row",
          rowItems: 4,
          direction: "right",
        },
        t = i.extend(a, t),
        e = this;
      return e.each(function (t) {
        function s() {
          i(this).addClass("mega-hover");
          var t = i("> a", this),
            e = (i(".sub", this), i(".sub-container", this)),
            s = e.width(),
            m = e.outerHeight(!0),
            r = e.height(),
            n = i(this).outerHeight(!0),
            c = t.offset();
          0 > (i(window).scrollTop(), i(window).height()) - c - m - n &&
            e.css("top", "0");
          var o = { right: l };
          "right" == a.direction && (o = { left: l }),
            "fade" == a.effect && e.css(o).fadeIn(a.speed),
            "show" == a.effect && e.css(o).show(),
            "slide" == a.effect &&
              (e.css({ width: 0, height: 0, opacity: 0 }),
              "right" == a.direction
                ? e.show().css({ left: l })
                : e.show().css({ right: l }),
              e.animate({ width: s, height: r, opacity: 1 }, a.speed));
        }
        function m() {
          i(this).removeClass("mega-hover"), i(".sub-container", this).hide();
        }
        ($mega = i(this)),
          "left" == a.direction
            ? $mega.addClass("left")
            : $mega.addClass("right");
        var l = $mega.width();
        i("> li", $mega).each(function () {
          var t = i(this),
            e = i("> ul", t);
          if (e.length > 0) {
            i("> a", t)
              .addClass(a.classParent)
              .append('<span class="' + a.classArrow + '"></span>'),
              e
                .addClass(a.classSubMenu)
                .wrap('<div class="' + a.classContainer + '" />');
            var s = i("." + a.classContainer, t);
            if (i("ul", e).length > 0) {
              t.addClass(a.classParent + "-li"),
                s.addClass(a.classMega),
                i("> li", e).each(function () {
                  i(this).addClass("mega-unit"),
                    i("> ul", this).length
                      ? (i(this).addClass(a.classSubParent),
                        i("> a", this).addClass(a.classSubParent + "-a"))
                      : (i(this).addClass(a.classSubLink),
                        i("> a", this).addClass(a.classSubLink + "-a"));
                });
              var m = i(".mega-unit", t);
              rowSize = parseInt(a.rowItems);
              for (var l = 0; l < m.length; l += rowSize)
                m.slice(l, l + rowSize).wrapAll(
                  '<div class="' + a.classRow + '" />'
                );
              var r =
                i(".mega-unit", e).outerWidth(!0) *
                i(".row:eq(0) .mega-unit", e).length;
              i(".row", this).each(function () {
                i(".mega-unit:last", this).addClass("last");
                var t = void 0;
                i(".mega-unit > a", this).each(function () {
                  var a = parseInt(i(this).height());
                  (void 0 === t || a > t) && (t = a);
                }),
                  i(".mega-unit > a", this).css("height", t + "px"),
                  i(this).css("width", r + "px");
              });
              var n = e.outerWidth(!0);
              s.outerWidth(!0),
                i(".row", e).each(function () {
                  var t = i(this).height();
                  i(this)
                    .parent(".row")
                    .css("height", t + "px");
                }),
                i(".row:last", e).addClass("last"),
                i(".row:first", e).addClass("first");
            } else s.addClass("non-" + a.classMega);
          }
          var c = (s = i("." + a.classContainer, t)).height();
          t.outerHeight(!0),
            s
              .css({
                height: c + "px",
                marginTop: "-20px",
                zIndex: "1000",
                width: n + "px",
              })
              .hide();
        });
        var r = { sensitivity: 2, interval: 5, over: s, timeout: 50, out: m };
        i("li", e).hoverIntent(r);
      });
    };
  })(jQuery),
  (function (i) {
    i.fn.hoverIntent = function (t, a) {
      var e = { sensitivity: 7, interval: 100, timeout: 0 };
      e = i.extend(e, a ? { over: t, out: a } : t);
      var s,
        m,
        l,
        r,
        n = function (i) {
          (s = i.pageX), (m = i.pageY);
        },
        c = function (t, a) {
          if (
            ((a.hoverIntent_t = clearTimeout(a.hoverIntent_t)),
            Math.abs(l - s) + Math.abs(r - m) < e.sensitivity)
          )
            return (
              i(a).unbind("mousemove", n),
              (a.hoverIntent_s = 1),
              e.over.apply(a, [t])
            );
          (l = s),
            (r = m),
            (a.hoverIntent_t = setTimeout(function () {
              c(t, a);
            }, e.interval));
        },
        o = function (i, t) {
          return (
            (t.hoverIntent_t = clearTimeout(t.hoverIntent_t)),
            (t.hoverIntent_s = 0),
            e.out.apply(t, [i])
          );
        },
        h = function (t) {
          for (
            var a =
              ("mouseover" == t.type ? t.fromElement : t.toElement) ||
              t.relatedTarget;
            a && a != this;

          )
            try {
              a = a.parentNode;
            } catch (t) {
              a = this;
            }
          if (a == this) return !1;
          var s = jQuery.extend({}, t),
            m = this;
          m.hoverIntent_t && (m.hoverIntent_t = clearTimeout(m.hoverIntent_t)),
            "mouseover" == t.type
              ? ((l = s.pageX),
                (r = s.pageY),
                i(m).bind("mousemove", n),
                1 != m.hoverIntent_s &&
                  (m.hoverIntent_t = setTimeout(function () {
                    c(s, m);
                  }, e.interval)))
              : (i(m).unbind("mousemove", n),
                1 == m.hoverIntent_s &&
                  (m.hoverIntent_t = setTimeout(function () {
                    o(s, m);
                  }, e.timeout)));
        };
      return this.mouseover(h).mouseout(h);
    };
  })(jQuery);
var cat1 =
    '<ul><li id="menu-item-1-1" class="bdr"><h5><a href="https://dir.indiamart.com/indianexporters/led-light-bulbs.html">LED Lights & Bulbs</a></h5><ul><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/led-lights.html">LED Lights</a></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/led-panel-light.html">LED Panel Lights</a></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/led-downlight.html">LED Downlights</a></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/bulb-raw-material.html">Bulb Raw Material</a></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/led-driver.html">LED Drivers</a></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/led-street-light.html">LED Street Lights</a></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/led-lamp.html">LED Lamps</a></li><li class="bottom mcat menu-item-11"><a href="https://dir.indiamart.com/impcat/syska-led-lights.html">Syska LED Lights</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/energy-conservation-products.html">Solar & Renewable Energy<br/>Products</a></h5></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/solar-panels.html">Solar Panels</a></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/solar-power-plants.html">Solar Power Plants</a></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/solar-water-heater.html">Solar Water Heaters</a></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/solar-street-lights.html">Solar Street Lights</a></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/solar-air-conditioner.html">Solar Air Conditioners</a></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/solar-water-pump.html">Solar Water Pumps</a></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/solar-panel-mounting-structure.html">Solar Panel Mounting Structures</a></li><li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/solar-inverter.html">Solar Inverters</a></li>\x3c!--<li class="menu-item-11"><a href="https://dir.indiamart.com/impcat/solar-cell.html">Solar Cells</a></li>--\x3e<li class="menu-item-11 mcat"><a href="https://dir.indiamart.com/impcat/symphony-air-coolers.html">Symphony Air Coolers</a></li> </ul></li><li id="menu-item-1-2" class="bdr"><h5><a href="https://dir.indiamart.com/indianexporters/e_light.html">Cooler & Ventilation<br/>Devices</a></h5> <ul><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/air-coolers.html">Air Coolers</a></li><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/ceiling-fans.html">Ceiling Fans</a></li><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/air-blowers.html">Air Blowers</a></li><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/desert-coolers.html">Desert Coolers</a></li><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/exhaust-fans.html">Exhaust Fans</a></li><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/tower-fan.html">Tower Fans</a></li><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/roof-ventilators.html">Roof Ventilators</a></li> <li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/fan-parts.html"> Fan Parts </a></li><li class="bottom mcat menu-item-12"><a href="https://dir.indiamart.com/impcat/bluestar-water-cooler.html">Blue Star Water Coolers</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/freezer-chillers.html">Freeze, Refrigerators<br/>& Chillers</a></h5></li><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/water-cooler.html">Water Coolers</a></li><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/deep-freezer.html">Deep Freezers</a></li><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/split-air-conditioners.html">Split Air Conditioners</a></li><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/refrigerator-spare-parts.html">Refrigerator Spare Parts</a></li><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/portable-air-conditioners.html">Portable Air Conditioners</a></li>\x3c!--<li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/air-handling-units.html">Air Handling Units</a></li><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/refrigerator.html">Refrigerators</a></li><li class="menu-item-12"><a href="https://dir.indiamart.com/impcat/air-cooling-pad.html"> Air Cooling Pads</a></li>--\x3e<li class="menu-item-12 mcat"><a href="https://dir.indiamart.com/impcat/voltas-air-conditioner.html"> Voltas Air Conditioners</a></li></ul></li><li id="menu-item-1-3"><h5><a href="https://dir.indiamart.com/indianexporters/access-identification-devices.html">Biometric & Access Control<br/>Devices</a></h5> <ul><li class="menu-item-13"><a href="https://dir.indiamart.com/impcat/aadhar-kit.html">Aadhar Kits</a></li><li class="menu-item-13"><a href="https://dir.indiamart.com/impcat/id-card.html">ID Cards</a></li><li class="menu-item-13"><a href="https://dir.indiamart.com/impcat/fingerprint-time-attendance-system.html">Fingerprint time attendance systems</a></li><li class="menu-item-13"><a href="https://dir.indiamart.com/impcat/biometric-access-control-system.html">Biometric access control systems</a></li><li class="menu-item-13 bottom"><a href="https://dir.indiamart.com/impcat/smart-cards.html">Smart Cards</a></li> <li><h5><a href="https://dir.indiamart.com/indianexporters/ho_misce.html">Home Appliances & Machines</a></h5></li><li class="menu-item-13"><a href="https://dir.indiamart.com/impcat/ro-membranes.html">RO Membranes</a></li><li class="menu-item-13"><a href="https://dir.indiamart.com/impcat/kitchen-chimney.html">Kitchens Chimneys</a></li><li class="menu-item-13"><a href="https://dir.indiamart.com/impcat/laundry-washing-machine.html">Laundry Washing Machines</a></li><li class="menu-item-13"><a href="https://dir.indiamart.com/impcat/washing-machine-spare-parts.html">Washing Machine Spare Parts</a></li><li class="menu-item-13"><a href="https://dir.indiamart.com/impcat/reverse-osmosis-water-purifiers.html">Reverse Osmosis Water Purifiers</a></li> <li class="mcat menu-item-13"><a href="https://dir.indiamart.com/impcat/crompton-greaves-ceiling-fans.html"> Crompton Greaves Ceiling Fans </a></li></ul></li><li id="menu-item-1-4" class="bdr-all"> <ul><li id="menu-item-14"><a class="bg-image text-center full" href="https://dir.indiamart.com/impcat/xerox-machines.html"><span class="title">Xerox Machines</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li><li id="menu-item-1-5"><ul><li id="menu-item-15"><a class="bg-image text-center first" href="https://dir.indiamart.com/impcat/electric-control-panel.html"><span class="title">Control Panels</span><span class="fd-suppliers">Find Suppliers</span></a><a class="bg-image text-center second" href="https://dir.indiamart.com/impcat/electrical-switches.html"><span class="title">Electrical Switches</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li></ul>',
  cat2 =
    '<ul><li id="menu-item-2-1"><h5><a href="https://dir.indiamart.com/indianexporters/m_miscel.html">Industrial Machines & Equipments</a></h5><ul><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/paper-plate-making-machine.html">Paper Plate Making Machines</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/spm-machine.html">SPM Machines</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/agarbatti-making-machines.html">Agarbatti Making Machines</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/paper-cup-making-machine.html">Paper Cup Making Machines</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/disposable-glass-making-machine.html">Disposable Glass Making Machines</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/paper-bag-making-machine.html">Paper Bag Making Machines</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/carry-bag-making-machine.html">Carry Bag Making Machines</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/candle-making-machine.html">Candle Making Machines</a></li>\x3c!--<li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/non-woven-bag-making-machine.html">Non-Woven Bag Making Machine</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/feeding-machine.html">Feeding Machines</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/industrial-washing-machine.html">Industrial Washing Machines</a></li><li class="menu-item-21" class="mcat"><a href="https://dir.indiamart.com/impcat/mitsubishi-ac-drives.html">Mitsubishi AC Drives</a></li>--\x3e<li class="bottom mcat menu-item-21"><a href="https://dir.indiamart.com/impcat/siemens-ac-drives.html">Siemens AC Drives</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/m_prmach.html">Printing Machinery & Equipments</a></h5> </li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/offset-printing-machines.html">Offset Printing Machines</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/flex-printers.html">Flex Printers</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/id-card-printer.html">ID Card Printers</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/plastic-card-printers.html">Plastic Card Printers</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/mug-printing-machine.html">Mug Printing Machines</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/barcode-printers.html">Barcode Printers</a></li><li class="menu-item-21"><a href="https://dir.indiamart.com/impcat/3d-printing-machine.html">3D Printing Machines</a></li></ul></li><li id="menu-item-2-2"><h5><a href="https://dir.indiamart.com/indianexporters/e_wpurif.html">Water Treatment & Purifying <br/>Plants</a></h5><ul><li class="menu-item-22"><a href="https://dir.indiamart.com/impcat/waterpurificationplants.html">Water Purification Plants</a></li><li class="menu-item-22"><a href="https://dir.indiamart.com/impcat/mineral-water-plants.html">Mineral Water Plants</a></li><li class="menu-item-22"><a href="https://dir.indiamart.com/impcat/reverse-osmosis-plant.html">Reverse Osmosis Plants</a></li><li class="menu-item-22"><a href="https://dir.indiamart.com/impcat/water-purifiers.html">Water Purifiers</a></li><li class="menu-item-22"><a href="https://dir.indiamart.com/impcat/sewage-treatment-plants.html">Sewage Treatment Plants</a></li><li class="menu-item-22"><a href="https://dir.indiamart.com/impcat/effluent-treatment-plant.html">Effluent Treatment Plants</a></li><li class="menu-item-22 bottom mcat"><a href="https://dir.indiamart.com/impcat/zebra-barcode-printers.html">Zebra Barcode Printers</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/m_promch.html">Plastic Work & Processing <br/>Machines</a></h5></li><li class="menu-item-22"><a href="https://dir.indiamart.com/impcat/plastic-injection-moulding-machine.html">Plastic Injection Moulding Machines</a></li><li class="menu-item-22"><a href="https://dir.indiamart.com/impcat/fully-automatic-dona-making-machine.html">Plastic Dona Making Machines</a></li><li class="menu-item-22"><a href="https://dir.indiamart.com/impcat/plastic-extrusion-machines.html">Plastic Extrusion Machines</a></li><li class="menu-item-22"><a href="https://dir.indiamart.com/impcat/plastic-bag-making-machine.html">Plastic Bag Making Machines</a></li><li class="menu-item-22"><a href="https://dir.indiamart.com/impcat/pvc-pipe-machine.html">PVC Pipe Machines</a></li><li class="menu-item-22"><a href="https://dir.indiamart.com/impcat/plastic-recycling-machine.html">Plastic Recycling Machines</a></li><li class="menu-item-22"><a href="https://dir.indiamart.com/impcat/plastic-bottle-making-machine.html">Plastic Bottle Making Machines</a></li><li class="menu-item-22 mcat"><a href="https://dir.indiamart.com/impcat/brother-thermal-label-printer.html">Brother Thermal Label Printers</a></li></ul></li><li id="menu-item-2-3"><h5><a href="https://dir.indiamart.com/indianexporters/dairy-bakery-machines.html">Bakery & Dairy Machinery</a></h5><ul><li class="menu-item-23"><a href="https://dir.indiamart.com/impcat/milking-machines.html">Milking Machines</a></li><li class="menu-item-23"><a href="https://dir.indiamart.com/impcat/ice-cream-machines.html">Ice Cream Machines</a></li><li class="menu-item-23"><a href="https://dir.indiamart.com/impcat/dairy-equipment.html">Dairy Equipments</a></li><li class="menu-item-23"><a href="https://dir.indiamart.com/impcat/bakery-oven.html">Bakery Ovens</a></li><li class="menu-item-23"><a href="https://dir.indiamart.com/impcat/softy-making-machine.html">Softy Making Machines</a></li><li class="menu-item-23"><a href="https://dir.indiamart.com/impcat/pizza-oven.html">Pizza Ovens</a></li><li class="menu-item-23 bottom mcat"><a href="https://dir.indiamart.com/impcat/epson-industrial-printer.html">Epson Industrial Printers</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/m_fopmc.html">Food Processing Plant <br/>& Machinery</a></h5></li><li class="menu-item-23"><a href="https://dir.indiamart.com/impcat/chapati-maker.html">Chapati Making Machines</a></li><li class="menu-item-23"><a href="https://dir.indiamart.com/impcat/rice-mill-machinery.html">Rice Mill Machinery</a></li><li class="menu-item-23"><a href="https://dir.indiamart.com/impcat/mixer-grinder.html">Mixer Grinders</a></li><li class="menu-item-23"><a href="https://dir.indiamart.com/impcat/papad-making-machine.html">Papad Making Machines</a></li><li class="menu-item-23"><a href="https://dir.indiamart.com/impcat/wet-grinders.html">Wet Grinders</a></li><li class="menu-item-23"><a href="https://dir.indiamart.com/impcat/food-processing-machine.html">Food Processing Machines</a></li><li class="menu-item-23 mcat"><a href="https://dir.indiamart.com/impcat/citizen-barcode-printer.html">Citizen Barcode Printers</a></li></ul></li><li id="menu-item-2-4" class="bdr-all"><ul><li id="menu-item-24"><a class="bg-image text-center full" href="https://dir.indiamart.com/impcat/power-press.html"><span class="title">Power Presses</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li><li id="menu-item-2-5"><ul><li id="menu-item-25"><a class="bg-image text-center first" href="https://dir.indiamart.com/impcat/passenger-lifts.html"><span class="title">Passenger Lifts</span><span class="fd-suppliers">Find Suppliers</span></a><a class="bg-image text-center second" href="https://dir.indiamart.com/impcat/jcb-telehandler.html"><span class="title">JCB Telehandlers</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li></ul>',
  cat3 =
    '<ul><li id="menu-item-3-1"><h5><a href="https://dir.indiamart.com/indianexporters/pl_pvc.html">Plastic, PVC & PP Products</a></h5><ul><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/plastic-scrap.html"> Plastic Scrap </a></li><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/pet-preform.html"> PET Preform </a></li><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/acrylic-sheet.html"> Acrylic Sheets</a></li><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/pvc-strip-curtains.html"> PVC Strip Curtains </a></li><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/plastic-caps.html"> Plastic Caps </a></li><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/plastic-moulded-components.html"> Plastic Moulded Components </a></li><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/pvc-sheets.html"> PVC Sheets </a></li>\x3c!--<li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/self-adhesive-tapes.html">ESAB Welding Wires</a></li>--\x3e<li class="menu-item-31 bottom mcat"><a href="https://dir.indiamart.com/impcat/zebra-industrial-printer.html">Zebra Industrial Printers</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/i_contan.html">Industrial & Shipping Containers</a></h5> </li><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/water-tanks.html"> Water Tanks </a></li><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/hdpe-drums.html"> HDPE Drums </a></li><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/ms-drums.html"> MS Drums </a></li><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/storage-tank.html"> Storage Tanks</a></li><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/liquid-nitrogen-container.html"> Liquid Nitrogen Containers</a></li><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/shipping-containers.html"> Shipping Containers </a></li><li class="menu-item-31"><a href="https://dir.indiamart.com/impcat/frp-tank.html"> FRP Tanks</a></li> \x3c!--<li class="menu-item-31" class="mcat"><a href="https://dir.indiamart.com/impcat/jindal-tmt-bars.html">Jindal TMT Bars</a></li>--\x3e  <li class="menu-item-31 mcat"><a href="https://dir.indiamart.com/impcat/sintex-water-tanks.html">Sintex Water Tanks</a></li></ul></li><li id="menu-item-3-2"><h5><a href="https://dir.indiamart.com/indianexporters/plastic-pipes.html">PVC, FRP, HDPE & Other Plastic Pipes</a></h5><ul><li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/pvc-pipes.html"> PVC Pipes </a></li><li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/hdpe-pipes.html"> HDPE Pipes </a></li><li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/cpvc-pipe.html"> CPVC Pipes</a></li><li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/upvc-pipes.html"> UPVC Pipes </a></li><li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/pvc-hose-pipe.html"> PVC Hose Pipes</a></li><li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/hdpe-double-wall-corrugated-pipe.html"> HDPE Double Wall Corrugated Pipes</a></li>\x3c!--<li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/garden-pipe.html">  Garden Pipes</a></li>--\x3e<li class="bottom mcat menu-item-32"><a href="https://dir.indiamart.com/impcat/finolexpipes.html">Finolex Pipes</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/i_belts.html">Conveyor & Transmission Belts</a></h5></li><li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/conveyor-belt.html"> Conveyor Belts</a></li><li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/v-belts.html"> V Belts </a></li><li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/conveyor-system.html"> Conveyor Systems </a></li><li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/timing-belts.html"> Timing Belts </a></li><li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/conveyor-rollers.html"> Rollers for Conveyors</a></li><li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/roller-chains.html"> Roller Chains </a></li><li class="menu-item-32"><a href="https://dir.indiamart.com/impcat/roller-conveyor.html"> Roller Conveyors </a></li><li class="menu-item-32 mcat"><a href="https://dir.indiamart.com/impcat/skf-transmission-belts.html">SKF Transmission Belts </a></li></ul></li><li id="menu-item-3-3"><h5><a href="https://dir.indiamart.com/indianexporters/o_lubric.html">Oils, Grease & Lubricants</a></h5><ul><li class="menu-item-33"><a href="https://dir.indiamart.com/impcat/lubricating-oil.html"> Lubricating Oil </a></li><li class="menu-item-33"><a href="https://dir.indiamart.com/impcat/engine-oil.html"> Engine Oil </a></li><li class="menu-item-33"><a href="https://dir.indiamart.com/impcat/grease.html"> Grease </a></li><li class="menu-item-33"><a href="https://dir.indiamart.com/impcat/hydraulic-oils.html"> Hydraulic Oil</a></li>\x3c!--<li class="menu-item-33"><a href="https://dir.indiamart.com/impcat/cutting-oils.html"> Cutting Oil</a></li>--\x3e\x3c!--<li class="menu-item-33"><a href="https://dir.indiamart.com/impcat/transformer-oil.html"> Transformer Oil </a></li>--\x3e<li class="menu-item-33"><a href="https://dir.indiamart.com/impcat/gear-oil.html"> Gear Oil </a></li>\x3c!--<li class="menu-item-33"><a href="https://dir.indiamart.com/impcat/valvoline-engine-oil.html"> Valvoline Engine Oil</a></li><li class="menu-item-33" class="mcat"><a href="https://dir.indiamart.com/impcat/servo-engine-oil.html"> Servo Engine Oil</a></li>--\x3e<li class="bottom mcat menu-item-33"><a href="https://dir.indiamart.com/impcat/indian-oil-automotive-lubricants.html">Indian Oil Automotive Lubricants</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/steel-pipes.html">Steel Pipes & Tubes</a></h5></li><li class="menu-item-33"><a href="https://dir.indiamart.com/impcat/ms-pipe.html"> MS Pipes </a></li><li class="menu-item-33"><a href="https://dir.indiamart.com/impcat/ss-pipes.html"> SS Pipes </a></li><li class="menu-item-33"><a href="https://dir.indiamart.com/impcat/stainless-steel-tube.html"> Stainless Steel Tubes</a></li><li class="menu-item-33"><a href="https://dir.indiamart.com/impcat/seamless-pipe.html"> Seamless Pipes</a></li>\x3c!--<li class="menu-item-33"><a href="https://dir.indiamart.com/impcat/ms-square-pipe.html"> MS Square Pipes </a></li>--\x3e<li class="menu-item-33 mcat"><a href="https://dir.indiamart.com/impcat/astral-pvc-pipes.html">Astral PVC Pipes</a></li><li class="menu-item-33"><h5><a href="https://dir.indiamart.com/indianexporters/industrial-safety-clothing.html">Industrial Uniforms & Safety Wear</a></h5> <ul><li class="menu-item-34"><a href="https://dir.indiamart.com/impcat/safety-shoes.html">Safety Shoes</a></li><li class="menu-item-34"><a href="https://dir.indiamart.com/impcat/industrial-uniforms.html">Industrial Uniforms</a></li><li class="menu-item-34"><a href="https://dir.indiamart.com/impcat/safety-gloves.html">Safety Gloves</a></li><li class="menu-item-34"><a href="https://dir.indiamart.com/impcat/industrial-safety-helmets.html">Safety Helmets</a></li>\x3c!--<li class="menu-item-34"><a href="https://dir.indiamart.com/impcat/safety-jacket.html">Safety Jackets</a></li><li class="menu-item-34"><a href="https://dir.indiamart.com/impcat/safety-mask.html">Safety Masks</a></li>--\x3e\x3c!--<li class="menu-item-34" class="bottom mcat"><a href="https://dir.indiamart.com/impcat/supreme-upvc-pipes.html">Supreme UPVC Pipes</a></li>--\x3e</ul></li></ul></li>\t<li id="menu-item-3-4" class="bdr-all"><ul><li class="menu-item-34"><a class="bg-image text-center last" href="https://dir.indiamart.com/impcat/fire-extinguishers.html"><span class="title">Fire Extinguishers</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li><li id="menu-item-3-5"><ul><li class="menu-item-35"><a class="bg-image text-center first" href="https://dir.indiamart.com/impcat/air-compressors.html"><span class="title">Air Compressor</span><span class="fd-suppliers">Find Suppliers</span></a><a class="bg-image text-center second" href="https://dir.indiamart.com/impcat/tmt-bars.html"><span class="title">TMT Bars</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li></ul>',
  cat4 =
    '<ul><li id="menu-item-4-1"><h5><a href="https://dir.indiamart.com/indianexporters/doorframeworks.html">Doors & Windows</a></h5><ul><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/wood-door.html">Wooden Doors</a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/pvc-doors.html"> PVC Doors </a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/upvc-windows.html"> UPVC Windows </a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/flush-doors.html"> Flush Doors </a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/aluminium-window.html"> Aluminium Windows</a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/aluminium-sliding-window.html"> Aluminium Sliding Windows </a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/safety-door.html">  Safety Doors</a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/frp-doors.html"> FRP Doors </a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/fire-doors.html"> Fire Doors </a></li><li class="bottom menu-item-41"><a href="https://dir.indiamart.com/impcat/steel-doors.html"> Steel Doors </a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/masonrysupplies.html">Bricks, Concrete & Building Material</a></h5></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/fly-ash-bricks.html"> Fly Ash Bricks </a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/plaster-of-paris.html"> Plaster Of Paris </a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/concrete-blocks.html"> Concrete Blocks </a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/bricks.html"> Bricks</a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/ready-mixed-concrete.html"> Ready Mixed Concrete </a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/gypsum-plaster.html"> Gypsum Plaster </a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/hollow-blocks.html">  Hollow Blocks  </a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/river-sand.html"> River Sand </a></li><li class="menu-item-41"><a href="https://dir.indiamart.com/impcat/lightweight-brick.html"> Lightweight Bricks </a></li></ul></li><li id="menu-item-4-2"><h5><a href="https://dir.indiamart.com/indianexporters/prefab-building.html">Prefabricated Houses & Structures</a></h5><ul><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/prefabricated-houses.html"> Prefabricated Houses </a></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/polyhouse.html"> Polyhouses</a></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/portable-toilets.html"> Portable Toilets </a></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/greenhouse.html"> Greenhouses</a></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/industrial-sheds.html"> Industrial Sheds </a></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/portable-cabins.html"> Portable Cabins </a></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/prefabricated-structures.html"> Prefabricated Structures </a></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/precast-compound-wall.html"> Precast Compound Walls </a></li><li class="menu-item-42 mcat bottom"><a href="https://dir.indiamart.com/impcat/ambuja-cement.html">Ambuja Cement</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/plywood.html">Ply, Teak & Engineered Wood</a></h5></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/engineeredboards.html"> Engineered Boards </a></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/teak-wood.html"> Teak Wood </a></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/gypsum-board.html"> Gypsum Boards</a></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/mdf-board.html"> MDF Boards</a></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/wpc-board.html"> WPC Boards</a></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/particle-board.html"> Particle Boards  </a></li><li class="menu-item-42"><a href="https://dir.indiamart.com/impcat/plywood-boards.html"> Plywood Boards </a></li><li class="menu-item-42 mcat"><a href="https://dir.indiamart.com/impcat/century-plywood.html"> Century Plywoods</a></li></ul></li><li id="menu-item-4-3"><h5><a href="https://dir.indiamart.com/indianexporters/m_consu.html">Building & Construction Machines</a></h5><ul><li class="menu-item-43"><a href="https://dir.indiamart.com/impcat/fly-ash-brick-making-machine.html"> Fly Ash Brick Making Machines </a></li><li class="menu-item-43"><a href="https://dir.indiamart.com/impcat/concrete-mixers.html"> Concrete Mixers </a></li><li class="menu-item-43"><a href="https://dir.indiamart.com/impcat/brick-making-machines.html"> Brick Making Machines </a></li><li class="menu-item-43"><a href="https://dir.indiamart.com/impcat/concrete-block-making-machine.html"> Concrete Block Making Machines</a></li><li class="menu-item-43"><a href="https://dir.indiamart.com/impcat/needle-vibrator.html"> Needle Vibrators</a></li><li class="menu-item-43"><a href="https://dir.indiamart.com/impcat/concrete-batching-plant.html"> Concrete Batching Plants</a></li><li class="menu-item-43 mcat bottom"><a href="https://dir.indiamart.com/impcat/greenply-plywood.html">Greenply Plywoods</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/roofing-ceiling.html">False Ceiling & Roofing Supplies</a></h5> </li><li class="menu-item-43"><a href="https://dir.indiamart.com/impcat/roofing-sheets.html"> Roofing Sheets </a></li><li class="menu-item-43"><a href="https://dir.indiamart.com/impcat/false-ceiling.html">False Ceilings </a></li><li class="menu-item-43"><a href="https://dir.indiamart.com/impcat/roof-tiles.html">Roofing Tiles</a></li><li class="menu-item-43"><a href="https://dir.indiamart.com/impcat/gi-sheets.html"> GI Sheets </a></li><li class="menu-item-43"><a href="https://dir.indiamart.com/impcat/corrugated-sheet.html">  Corrugated Sheets </a></li><li class="menu-item-43 mcat"><a href="https://dir.indiamart.com/impcat/ultratech-cement.html">Ultratech Cement</a></li></ul></li><li id="menu-item-4-4" class="bdr-all"><ul><li class="menu-item-44"><a class="bg-image text-center full" href="https://dir.indiamart.com/impcat/construction-cement.html"><span class="title">Construction Cement</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li><li id="menu-item-4-5"><ul><li class="menu-item-45"><a class="bg-image text-center first" href="https://dir.indiamart.com/impcat/ceramic-tiles.html"><span class="title">Ceramic Tiles</span><span class="fd-suppliers">Find Suppliers</span></a><a class="bg-image text-center second" href="https://dir.indiamart.com/impcat/bath-fittings.html"><span class="title">Bath Fittings</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li></ul>',
  cat5 =
    '<ul><li id="menu-item-5-1"><h5><a href="https://dir.indiamart.com/indianexporters/mobile-parts-accessories.html ">Mobile Phone & Accessories</a></h5><ul><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/mobile-phones.html "> Mobile Phones </a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/power-bank.html "> Power Banks</a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/mobile-cover.html"> Mobile Covers</a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/mobile-charger.html "> Mobile Chargers</a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/walkie-talkie.html"> Walkie Talkies </a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/memory-cards.html "> Memory Cards </a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/mobile-phone-screen-protector.html "> Mobile Phone Screen Protectors</a></li>\x3c!--<li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/mobile-phone-lcd-screen.html "> Mobile Phone LCD Screens</a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/sim-cards.html"> Sim Cards </a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/tablet-computer.html "> Tablet Computers </a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/telephone-instruments.html "> Telephone Instruments </a></li>--\x3e<li class="bottom mcat menu-item-51"><a href="https://dir.indiamart.com/impcat/sandisk-pen-drive.html ">SanDisk Pen Drives</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/e_teleco.html ">Telecommunication Equipment & Parts</a></h5> </li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/mobile-signal-booster.html "> Mobile Signal Boosters</a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/epabx-system.html "> Epabx Systems</a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/fiber-optic-splicer.html "> Fiber Optic Splicers</a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/public-address-systems.html "> Public Address Systems </a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/tv-set-top-box.html "> TV Set Top Boxes</a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/mobile-phone-jammer.html "> Mobile Phone Jammers</a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/jelly-filled-telephone-cables.html ">  Jelly Filled Telephone Cables </a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/video-conferencing-system.html "> Video Conferencing Systems </a></li>\x3c!--<li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/rfid-tag.html "> RFID Tags </a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/rfid-card.html"> RFID Cards </a></li><li class="menu-item-51"><a href="https://dir.indiamart.com/impcat/rs232-converter.html "> RS232 Converters </a></li>--\x3e<li class="menu-item-51 mcat"><a href="https://dir.indiamart.com/impcat/motorola-walkie-talkie.html">Motorola Walkie Talkies</a></li></ul></li><li id="menu-item-5-2"><h5><a href="https://dir.indiamart.com/indianexporters/antenna-wifi-tower.html ">Antennas, Wifi & Communication Tower</a></h5><ul><li class="menu-item-52"><a href="https://dir.indiamart.com/impcat/telecom-tower.html "> Telecom Towers </a></li><li class="menu-item-52"><a href="https://dir.indiamart.com/impcat/dish-antenna.html "> Dish Antennas </a></li><li class="menu-item-52"><a href="https://dir.indiamart.com/impcat/transmission-line-tower.html "> Transmission Line Towers </a></li><li class="menu-item-52"><a href="https://dir.indiamart.com/impcat/wireless-tower.html"> Wireless Towers </a></li><li class="menu-item-52 bottom mcat"><a href="https://dir.indiamart.com/impcat/hikvision-cctv-camera.html">Hikvision CCTV Cameras</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/transmitters-receivers.html">Transmitters and Receivers</a></h5></li><li class="menu-item-52"><a href="https://dir.indiamart.com/impcat/dj-system.html"> DJ Systems </a></li><li class="menu-item-52"><a href="https://dir.indiamart.com/impcat/electronic-hooter.html "> Electronic Hooters </a></li><li class="menu-item-52"><a href="https://dir.indiamart.com/impcat/karaoke-system.html "> Karaoke Systems </a></li><li class="menu-item-52"><a href="https://dir.indiamart.com/impcat/digital-satellite-receiver.html"> Digital Satellite Receivers</a></li> <li class="menu-item-52"><a href="https://dir.indiamart.com/impcat/video-transmitter.html"> Video Transmitters</a></li><li class="menu-item-52"><a href="https://dir.indiamart.com/impcat/fm-radio.html"> FM Radios </a></li><li class="menu-item-52 mcat"><a href="https://dir.indiamart.com/impcat/cp-plus-cctv-camera.html">CP Plus CCTV Cameras</a></li><li class="mcat menu-item-52"><a href="https://dir.indiamart.com/impcat/samsung-mobile-phones.html ">Samsung Mobile Phones</a></li></ul></li><li id="menu-item-5-3"><h5><a href="https://dir.indiamart.com/indianservices/telecom-bts-communication.html">Telecom Services and  Maintenance</a></h5><ul><li class="menu-item-53"><a href="https://dir.indiamart.com/impcat/payment-gateway-solutions.html">Payment Gateway Solutions</a></li><li class="menu-item-53"><a href="https://dir.indiamart.com/impcat/telecom-infrastructure-solutions.html"> Telecom Infrastructure Solutions</a></li><li class="menu-item-53"><a href="https://dir.indiamart.com/impcat/mobile-value-added-services.html"> Mobile Value Added Services</a></li><li class="menu-item-53"><a href="https://dir.indiamart.com/impcat/prepaid-mobile-recharge-service.html"> Prepaid Mobile Recharge Services</a></li><li class="menu-item-53 bottom mcat"><a href="https://dir.indiamart.com/impcat/mobile-payment-gateway.html">Mobile Payment Gateway</a></li><li><h5><a href="https://dir.indiamart.com/indianservices/tel_services.html">Tele Conferencing & VoIP Services</a></h5></li><li class="menu-item-53"><a href="https://dir.indiamart.com/impcat/video-conferencing-services.html">Video Conferencing Services</a></li><li class="menu-item-53"><a href="https://dir.indiamart.com/impcat/audio-conferencing-solutions.html">Audio Conferencing Services</a></li><li class="menu-item-53"><a href="https://dir.indiamart.com/impcat/voip-services.html">VoIP Services</a></li><li class="menu-item-53"><a href="https://dir.indiamart.com/impcat/tele-servicing.html">Tele Servicing</a></li></ul></li><li id="menu-item-5-4" class="bdr-all"> <ul><li class="menu-item-53"><a class="bg-image text-center full" href="https://dir.indiamart.com/impcat/power-bank.html"><span class="title">Power Banks</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li><li id="menu-item-5-5"><ul><li class="menu-item-54"><a class="bg-image text-center first" href="https://dir.indiamart.com/impcat/dish-antenna.html"><span class="title">Dish Antennas</span><span class="fd-suppliers">Find Suppliers</span></a><a class="bg-image text-center second" href="https://dir.indiamart.com/impcat/tv-set-top-box.html"><span class="title">TV Setup Box</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li></ul>',
  cat6 =
    '<ul><li id="menu-item-6-1"><h5><a href="https://dir.indiamart.com/indianexporters/com_hard.html">Computer Hardware & Peripherals</a></h5><ul><li class="menu-item-61"><a href="https://dir.indiamart.com/impcat/laptop-parts.html"> Laptop Parts </a></li><li class="menu-item-61"><a href="https://dir.indiamart.com/impcat/laptop-motherboard.html"> Laptop Motherboards</a></li><li class="menu-item-61"><a href="https://dir.indiamart.com/impcat/hard-disk-drive.html"> Hard Disk Drives</a></li><li class="menu-item-61"><a href="https://dir.indiamart.com/impcat/computer-peripherals.html"> Computer Peripherals </a></li><li class="menu-item-61"><a href="https://dir.indiamart.com/impcat/computer-parts.html"> Computer Parts </a></li><li class="menu-item-61"><a href="https://dir.indiamart.com/impcat/touch-screen-kiosks.html"> Touch Screen Kiosks </a></li><li class="menu-item-61"><a href="https://dir.indiamart.com/impcat/printer-head.html"> Printer Heads </a></li><li class="menu-item-61"><a href="https://dir.indiamart.com/impcat/computer-accessories.html"> Computer Accessories </a></li><li class="bottom mcat menu-item-61"><a href="https://dir.indiamart.com/impcat/samsung-photocopy-machine.html">Samsung Photocopy Machines</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/com_misc.html">Router, Cables & Networking Devices</a></h5></li> <li class="menu-item-61"><a href="https://dir.indiamart.com/impcat/fiber-optic-cable.html">  Fiber Optic Cables</a></li><li class="menu-item-61"><a href="https://dir.indiamart.com/impcat/cat-6-cable.html"> Cat 6 Cables</a></li><li class="menu-item-61"><a href="https://dir.indiamart.com/impcat/multi-recharge-modem.html"> Multi Recharge Modems</a></li><li class="menu-item-61"><a href="https://dir.indiamart.com/impcat/networking-rack.html"> Networking Racks</a></li><li class="menu-item-61"><a href="https://dir.indiamart.com/impcat/wireless-router.html"> Wireless Routers </a></li><li class="menu-item-61 mcat"><a href="https://dir.indiamart.com/impcat/hp-laser-printer.html">HP Laser Printers</a></li></ul></li><li id="menu-item-6-2"><h5><a href="https://dir.indiamart.com/indianexporters/com_soft.html">Computer and Mobile Softwares & Apps</a></h5><ul><li class="menu-item-62"><a href="https://dir.indiamart.com/impcat/point-of-sale-systems.html"> Point Of Sale Systems </a></li><li class="menu-item-62"><a href="https://dir.indiamart.com/impcat/billing-software.html"> Billing Softwares </a></li><li class="menu-item-62"><a href="https://dir.indiamart.com/impcat/mobile-recharge-software.html"> Mobile Recharge Softwares </a></li><li class="menu-item-62"><a href="https://dir.indiamart.com/impcat/tally-accounting-software.html"> Tally Accounting Softwares</a></li><li class="menu-item-62"><a href="https://dir.indiamart.com/impcat/school-management-software.html">  School Management Softwares</a></li><li class="menu-item-62"><a href="https://dir.indiamart.com/impcat/antivirus-software.html"> Antivirus Softwares </a></li><li class="menu-item-62"><a href="https://dir.indiamart.com/impcat/erp-software-packages.html"> ERP Software Packages </a></li><li class="menu-item-62 mcat bottom"><a href="https://dir.indiamart.com/impcat/canon-multifunction-printer.html">Canon Multifunction Printers</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/com_manu.html">Laptops, PC, Mainframes & Computers</a></h5></li><li class="menu-item-62"><a href="https://dir.indiamart.com/impcat/desktop-computer.html"> Desktop Computers</a></li><li class="menu-item-62"><a href="https://dir.indiamart.com/impcat/laptop-computers.html"> Laptop Computers </a></li><li class="menu-item-62"><a href="https://dir.indiamart.com/impcat/second-hand-computers.html"> Second Hand Computers </a></li><li class="menu-item-62"><a href="https://dir.indiamart.com/impcat/used-laptop.html"> Used Laptops</a></li><li class="menu-item-62 mcat"><a href="https://dir.indiamart.com/impcat/matrix-epabx-system.html">Matrix EPABX Systems</a></li></ul></li><li id="menu-item-6-3"><h5><a href="https://dir.indiamart.com/indianexporters/com-stat.html">Computer Stationery Products</a></h5><ul><li class="menu-item-63"><a href="https://dir.indiamart.com/impcat/computer-mouse.html"> Computer Mouse</a></li><li class="menu-item-63"><a href="https://dir.indiamart.com/impcat/computer-keyboard.html"> Computer Keyboards</a></li><li class="menu-item-63"><a href="https://dir.indiamart.com/impcat/cd-cases.html"> CD Cases</a></li><li class="menu-item-63"><a href="https://dir.indiamart.com/impcat/laptop-skin.html"> Laptop Skins</a></li><li class="menu-item-63"><a href="https://dir.indiamart.com/impcat/mouse-pads.html"> Mouse Pads</a></li><li class="menu-item-63"><a href="https://dir.indiamart.com/impcat/dvd-disk.html"> DVD Disks</a></li><li class="menu-item-63"><a href="https://dir.indiamart.com/impcat/keyboard-protector.html">Keyboard Protectors </a></li><li class="menu-item-63 mcat bottom"><a href="https://dir.indiamart.com/impcat/computer-screen-protector.html">Screen Protectors</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/pci-cards-adapters.html">Computer PCI Cards, Cables & Modules</a></h5></li><li class="menu-item-63"><a href="https://dir.indiamart.com/impcat/motherboards.html">Motherboards</a></li><li class="menu-item-63"><a href="https://dir.indiamart.com/impcat/computer-scanners.html">Computer Scanners</a></li><li class="menu-item-63"><a href="https://dir.indiamart.com/impcat/graphics-card.html">Graphic Cards</a></li><li class="menu-item-63"><a href="https://dir.indiamart.com/impcat/printer-head.html"> Printer Heads</a></li><li class="menu-item-63"><a href="https://dir.indiamart.com/impcat/computer-processor.html"> Computer Processors</a></li><li class="menu-item-63 mcat"><a href="https://dir.indiamart.com/impcat/pci-card.html">PCI Cards</a></li></ul></li><li id="menu-item-6-4" class="bdr-all"><ul><li class="menu-item-64"><a class="bg-image text-center full" href="https://dir.indiamart.com/impcat/hard-disk-drive.html"><span class="title">Hard Disks</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li><li id="menu-item-6-5"><ul><li class="menu-item-65"><a class="bg-image text-center first" href=" https://dir.indiamart.com/impcat/pen-drive.html"><span class="title">Pen Drives</span><span class="fd-suppliers">Find Suppliers</span></a></li><li class="menu-item-65"><a class="bg-image text-center second" href="https://dir.indiamart.com/impcat/wireless-router.html"><span class="title">Wireless Routers</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li></ul>',
  cat7 =
    '<ul><li id="menu-item-7-1"><h5><a href="https://dir.indiamart.com/indianexporters/e_pump.html">Pumps & Pumping Machines</a></h5><ul><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/submersible-pumps.html"> Submersible Pumps</a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/vacuum-pumps.html"> Vacuum Pumps</a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/diesel-engine-pump-sets.html"> Diesel Engine Pump Sets </a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/dosing-pumps.html"> Dosing Pumps</a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/hydraulic-pumps.html"> Hydraulic Pumps</a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/car-washing-pump.html"> Car Washing Pumps </a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/monoblock-pumps.html"> Monoblock Pumps</a></li><li class="menu-item-71 bottom"><a href="https://dir.indiamart.com/impcat/spray-pumps.html"> Spray Pumps</a></li>\x3c!--<li class="menu-item-71 bottom"><a href="https://dir.indiamart.com/impcat/centrifugal-pumps.html"> Centrifugal Pumps </a></li>--\x3e<li><h5><a href="https://dir.indiamart.com/indianexporters/i_valves.html">Industrial Valves & Valve Fittings</a></h5> </li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/ball-valves.html"> Ball Valves</a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/solenoid-valves.html"> Solenoid Valves</a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/butterfly-valves.html"> Butterfly Valves</a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/non-return-valve.html"> Non Return Valves </a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/gate-valves.html"> Gate Valves</a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/pressure-relief-valve.html"> Pressure Relief Valves </a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/float-valves.html"> Float Valves</a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/stainless-steel-ball-valve.html"> Stainless Steel Ball Valves </a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/multiport-valves.html"> Multiport Valves</a></li><li class="menu-item-71 mcat"><a href="https://dir.indiamart.com/impcat/kirloskar-submersible-pumps.html">Kirloskar Submersible Pumps</a></li>\x3c!--<li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/pressure-reducing-valve.html"> Pressure Reducing Valves </a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/safety-valves.html">  Safety Valves</a></li><li class="menu-item-71"><a href="https://dir.indiamart.com/impcat/check-valves.html"> Check Valves</a></li>--\x3e</ul></li><li id="menu-item-7-2"><h5><a href="https://dir.indiamart.com/indianexporters/die-cast-moulds.html">Die Casting Mould & Moulding Tools</a></h5><ul><li class="menu-item-72"><a href="https://dir.indiamart.com/impcat/plastic-molds.html">Plastic Moulds</a></li><li class="menu-item-72"><a href="https://dir.indiamart.com/impcat/plastic-moulding-dies.html">Plastic Moulding Dies</a></li><li class="menu-item-72"><a href="https://dir.indiamart.com/impcat/ci-castings.html"> CI Castings</a></li><li class="menu-item-72"><a href="https://dir.indiamart.com/impcat/die-casting.html"> Die Castings</a></li><li class="menu-item-72"><a href="https://dir.indiamart.com/impcat/steel-castings.html"> Steel Castings</a></li><li class="menu-item-72"><a href="https://dir.indiamart.com/impcat/pressure-die-casting.html"> Pressure Die Castings </a></li><li class="menu-item-72 bottom"><a href="https://dir.indiamart.com/impcat/aluminum-castings.html"> Aluminum Castings</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/nutbolt.html">Nails, Fasteners, Rivets & Shackers</a></h5></li><li class="menu-item-72"><a href="https://dir.indiamart.com/impcat/industrial-fasteners.html"> Industrial Fasteners</a></li><li class="menu-item-72"><a href="https://dir.indiamart.com/impcat/stainless-steel-fasteners.html"> Stainless Steel Fasteners</a></li><li class="menu-item-72"><a href="https://dir.indiamart.com/impcat/anchor-fasteners.html"> Anchor Fasteners</a></li><li class="menu-item-72"><a href="https://dir.indiamart.com/impcat/chemical-anchor.html">Chemical Anchors</a></li><li class="menu-item-72"><a href="https://dir.indiamart.com/impcat/tie-rod.html"> Tie Rods</a></li><li class="menu-item-72"><a href="https://dir.indiamart.com/impcat/threaded-rods.html"> Threaded Rods</a></li><li class="menu-item-72 bottom"><a href="https://dir.indiamart.com/impcat/rivets.html"> Rivets</a></li></ul></li><li id="menu-item-7-3"><h5><a href="https://dir.indiamart.com/indianexporters/gears.html">Gearbox & Gearparts</a></h5><ul><li class="menu-item-73"><a href="https://dir.indiamart.com/impcat/gearbox.html">Gear Boxes</a></li><li class="menu-item-73"><a href="https://dir.indiamart.com/impcat/rack-pinions.html">Rack Pinions</a></li><li class="menu-item-73"><a href="https://dir.indiamart.com/impcat/chain-sprocket.html"> Chain Sprockets </a></li><li class="menu-item-73"><a href="https://dir.indiamart.com/impcat/automotive-gears.html"> Automotive Gears</a></li><li class="menu-item-73"><a href="https://dir.indiamart.com/impcat/ksb-submersible-pumps.html">KSB Submersible Pumps</a></li><li class="menu-item-73"><a href="https://dir.indiamart.com/impcat/worm-gears.html">Worm Gears</a></li><li class="mcat menu-item-73"><a href="https://dir.indiamart.com/impcat/plastic-gears.html">Plastic Gears</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/sheet-metal.html">Sheet Metal & Turned Components</a></h5></li><li class="menu-item-73"><a href="https://dir.indiamart.com/impcat/sheet-metal-parts.html">Sheet Metal Products</a></li><li class="menu-item-73"><a href="https://dir.indiamart.com/impcat/precision-machined-components.html"> Precision Machined Components</a></li><li class="menu-item-73"><a href="https://dir.indiamart.com/impcat/automotive-sheet-metal-components.html"> Automotive Sheet Metal Components</a></li><li class="menu-item-73"><a href="https://dir.indiamart.com/impcat/cr-sheets.html"> Cold Rolled Sheets</a></li><li class="menu-item-73"><a href="https://dir.indiamart.com/impcat/cr-sheets.html"> CR Sheets</a></li></ul></li><li id="menu-item-7-4" class="bdr-all"><ul><li class="menu-item-74" ><a class="bg-image text-center full" href="https://dir.indiamart.com/impcat/plastic-injection-mold.html"><span class="title">Plastic Injection Moulds</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li><li id="menu-item-7-5"><ul><li class="menu-item-75"><a class="bg-image text-center first" href="https://dir.indiamart.com/impcat/ballbearing.html"><span class="title">Ball Bearings</span><span class="fd-suppliers">Find Suppliers</span></a></li><li class="menu-item-75"><a class="bg-image text-center second" href="https://dir.indiamart.com/impcat/hydraulic-cylinders.html"><span class="title">Hydraulic Cylinders</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li></ul>',
  cat8 =
    '<ul><li id="menu-item-8-1"><h5><a href="https://dir.indiamart.com/indianexporters/au_misc.html">Automobile Parts & Components</a></h5><ul><li class="menu-item-81"><a href="https://dir.indiamart.com/impcat/automotive-spare-parts.html"> Automotive Spare Parts </a></li><li class="menu-item-81"><a href="https://dir.indiamart.com/impcat/two-wheeler-parts.html"> Two Wheeler Parts </a></li><li class="menu-item-81"><a href="https://dir.indiamart.com/impcat/three-wheelers-parts.html"> Three Wheeler Parts </a></li><li class="menu-item-81"><a href="https://dir.indiamart.com/impcat/automotive-plastic-components.html"> Automotive Plastic Components </a></li><li class="menu-item-81"><a href="https://dir.indiamart.com/impcat/vehicle-speed-limiting-devices.html"> Vehicle Speed Limiting Devices </a></li><li class="bottom mcat menu-item-81"><a href="https://dir.indiamart.com/impcat/eicher-trucks.html"> Eicher Trucks</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/automble.html">Automobile Interiors & Accessories</a></h5> </li><li class="menu-item-81"><a href="https://dir.indiamart.com/impcat/motorcycle-helmets.html"> Motorcycle Helmets </a></li><li class="menu-item-81"><a href="https://dir.indiamart.com/impcat/car-seat-cover.html"> Car Seat Covers</a></li><li class="menu-item-81"><a href="https://dir.indiamart.com/impcat/two-wheeler-accessories.html"> Two Wheeler Accessories </a></li><li class="menu-item-81"><a href="https://dir.indiamart.com/impcat/rubber-beading.html"> Rubber Beadings </a></li><li class="menu-item-81"><a href="https://dir.indiamart.com/impcat/car-covers.html"> Car Covers </a></li><li class="menu-item-81"><a href="https://dir.indiamart.com/impcat/car-number-plate.html"> Car Number Plates</a></li><li class="menu-item-81 mcat"><a href="https://dir.indiamart.com/impcat/goodyear-tyres.html">Goodyear Tyres</a></li></ul></li><li id="menu-item-8-2"><h5><a href="https://dir.indiamart.com/indianexporters/light_vehicles.html">Carts, Trucks & Commercial Vehicles</a></h5><ul><li class="menu-item-82"><a href="https://dir.indiamart.com/impcat/food-van.html"> Food Vans </a></li><li class="menu-item-82"><a href="https://dir.indiamart.com/impcat/three-wheelers.html"> Three Wheelers </a></li><li class="menu-item-82"><a href="https://dir.indiamart.com/impcat/battery-operated-vehicle.html"> Battery Operated Vehicles </a></li><li class="menu-item-82"><a href="https://dir.indiamart.com/impcat/mini-segway.html"> Mini Segways</a></li><li class="menu-item-82"><a href="https://dir.indiamart.com/impcat/refrigerated-van.html"> Refrigerated Vans </a></li><li class="menu-item-82"><a href="https://dir.indiamart.com/impcat/ambulance.html">  Ambulance </a></li><li class="menu-item-82"><a href="https://dir.indiamart.com/impcat/diesel-luxury-bus.html"> Diesel Luxury Buses</a></li><li class="menu-item-82"><a href="https://dir.indiamart.com/impcat/luxury-van.html"> Luxury Vans</a></li><li class="menu-item-82 mcat bottom"><a href="https://dir.indiamart.com/impcat/suv-tyres.html">SUV Tyres</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/au_servi.html">Automotive Repair Tools & Equipments</a></h5></li><li class="menu-item-82"><a href="https://dir.indiamart.com/impcat/car-wash-equipment.html"> Car Wash Equipments</a></li><li class="menu-item-82"><a href="https://dir.indiamart.com/impcat/3d-wheel-alignment-machine.html"> 3D Wheel Alignment Machines</a></li><li class="menu-item-82"><a href="https://dir.indiamart.com/impcat/car-washing-lift.html"> Car Washing Lifts</a></li><li class="menu-item-82"><a href="https://dir.indiamart.com/impcat/tire-changer-machine.html"> Tire Changer Machines</a></li><li class="menu-item-82"><a href="https://dir.indiamart.com/impcat/two-wheeler-garage-equipment.html"> Two Wheeler Garage Equipments </a></li><li class="menu-item-82 mcat"><a href="https://dir.indiamart.com/impcat/bridgestone-tyres.html">Bridgestone Tyres</a></li></ul></li><li id="menu-item-8-3"><h5><a href="https://dir.indiamart.com/indianexporters/car-motorcycle.html">Motorcycles & Cars</a></h5><ul><li class="menu-item-83"><a href="https://dir.indiamart.com/impcat/self-balancing-scooter.html"> Self Balancing Scooters </a></li><li class="menu-item-83"><a href="https://dir.indiamart.com/impcat/electric-bike.html"> Electric Bikes </a></li><li class="menu-item-83"><a href="https://dir.indiamart.com/impcat/go-kart.html"> Go Karts</a></li><li class="menu-item-83"><a href="https://dir.indiamart.com/impcat/electric-scooter.html"> Electric Scooters </a></li><li class="menu-item-83"><a href="https://dir.indiamart.com/impcat/dirt-bike.html"> Dirt Bikes </a></li><li class="bottom menu-item-83"><a href="https://dir.indiamart.com/impcat/handicapped-scooter.html"> Handicapped Scooters </a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/tractor-parts.html">Tractor Parts & Assemblies</a></h5></li><li class="menu-item-83"><a href="https://dir.indiamart.com/impcat/tractor-rotavator.html"> Tractor Rotavators</a></li><li class="menu-item-83"><a href="https://dir.indiamart.com/impcat/tractor-spare-parts.html"> Tractor Spare Parts </a></li><li class="menu-item-83"><a href="https://dir.indiamart.com/impcat/tractor-trolleys.html"> Tractor Trolleys </a></li></ul></li><li id="menu-item-8-4" class="bdr-all"><ul><li class="menu-item-84"><a class="bg-image text-center full" href="https://dir.indiamart.com/impcat/mini-tractors.html"><span class="title">Mini Tractors</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li><li id="menu-item-8-5"><ul><li class="menu-item-85"><a class="bg-image text-center first" href="https://dir.indiamart.com/impcat/alloy-wheels.html"><span class="title">Alloy Wheels</span><span class="fd-suppliers">Find Suppliers</span></a></li><li class="menu-item-85"><a class="bg-image text-center second" href="https://dir.indiamart.com/impcat/motorcycle-helmets.html"><span class="title">Bike Helmet</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li></ul>',
  cat9 =
    '<ul><li id="menu-item-9-1"><h5><a href="https://dir.indiamart.com/indianexporters/m_grind.html">Milling & Grinding Machines</a></h5><ul><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/stone-crusher.html"> Stone Crushers </a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/grinding-wheels.html"> Grinding Wheels </a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/pulverizers.html"> Pulverizers </a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/surface-grinding-machine.html"> Surface Grinding Machines</a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/spice-grinders.html">  Spice Grinders </a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/jaw-crusher.html"> Jaw Crushers </a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/commercial-wet-grinder.html"> Commercial Wet Grinders</a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/ball-mills.html"> Ball Mills </a></li><li class="bottom menu-item-91"><a href="https://dir.indiamart.com/impcat/milling-machines.html"> Milling Machines </a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/heavy-cutting-machine.html">Cutting Machine & Equipments</a></h5> </li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/paper-cutting-machine.html"> Paper Cutting Machines </a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/sticker-cutting-machine.html"> Sticker Cutting Machines </a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/stone-cutting-machine.html">Stone Cutting Machines</a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/pipe-cutting-machine.html">Pipe Cutting Machines</a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/laser-cutting-machines.html"> Laser Cutting Machines </a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/carbide-cutting-tools.html"> Carbide Cutting Tools </a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/cut-off-wheel.html"> Cut Off Wheels</a></li><li class="menu-item-91"><a href="https://dir.indiamart.com/impcat/cutting-wheels.html"> Cutting Wheels </a></li><li class="menu-item-91 mcat"><a href="https://dir.indiamart.com/impcat/bosch-cutting-machine.html">Bosch Cutting Machines</a></li> </ul></li><li id="menu-item-9-2"><h5><a href="https://dir.indiamart.com/indianexporters/wood-working-tool.html">Woodworking Machine & Tools</a></h5><ul><li class="menu-item-92"><a href="https://dir.indiamart.com/impcat/carpenter-tools.html"> Carpenter Tools </a></li><li class="menu-item-92"><a href="https://dir.indiamart.com/impcat/wood-cutting-machine.html"> Wood Cutting Machines </a></li><li class="menu-item-92"><a href="https://dir.indiamart.com/impcat/cnc-wood-carving-machine.html"> CNC Wood Carving Machines</a></li><li class="menu-item-92"><a href="https://dir.indiamart.com/impcat/cnc-wood-router.html"> CNC Wood Router</a></li><li class="menu-item-92"><a href="https://dir.indiamart.com/impcat/bamboo-stick-making-machine.html">Bamboo Stick Making Machines</a></li><li class="bottom menu-item-92"><a href="https://dir.indiamart.com/impcat/wood-planer.html">Wood Planer</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/screwdrivers-hammers.html">Pliers, Scredrivers & Hammers</a></h5></li><li class="menu-item-92"><a href="https://dir.indiamart.com/impcat/crimping-tools.html"> Crimping Tools </a></li><li class="menu-item-92"><a href="https://dir.indiamart.com/impcat/hand-tool.html"> Hand Tools </a></li><li class="menu-item-92"><a href="https://dir.indiamart.com/impcat/bench-vise.html"> Bench Vise </a></li><li class="menu-item-92"><a href="https://dir.indiamart.com/impcat/metal-punches.html">Metal Punches</a></li><li class="menu-item-92"><a href="https://dir.indiamart.com/impcat/torque-screwdriver.html">Torque Screwdrivers</a></li><li class="menu-item-92"><a href="https://dir.indiamart.com/impcat/sledge-hammer.html">Sledge Hammers</a></li><li class="menu-item-92"><a href="https://dir.indiamart.com/impcat/screw-jacks.html"> Screw Jacks </a></li><li class="menu-item-92 bottom mcat"><a href="https://dir.indiamart.com/impcat/tohnichi-torque-wrench.html">Tohnichi Torque Wrenches</a></li></ul></li><li id="menu-item-9-3"><h5><a href="https://dir.indiamart.com/indianexporters/saw-machines.html">Saw, Chainsaws & Saw Blades</a></h5><ul><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/band-saw-machine.html"> Band Saw Machines</a></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/power-hacksaw-machine.html"> Power Hacksaw Machines </a></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/band-saw-blades.html"> Band Saw Blades </a></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/circular-saw-blades.html">Circular Saw Blades</a></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/chainsaw.html">  Chainsaws </a></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/petrol-chain-saw.html">Petrol Chain Saw</a></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/jigsaw.html">Jigsaw</a></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/panel-saw.html">Panel Saw</a></li><li class="menu-item-93 mcat"><a href="https://dir.indiamart.com/impcat/tool-holders.html">HSK Tool Holders</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/hydraulic-pneumatic-tools.html">Hydraulic & Pneumatic Tools</a></h5></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/power-tools.html"> Power Tools </a></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/spray-guns.html">  Spray Guns</a></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/hot-air-gun.html"> Hot Air Guns</a></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/concrete-breakers.html"> Concrete Breakers </a></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/electric-planer.html">Electric Planer</a></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/pneumatic-nailers.html">Pneumatic Nailers</a></li><li class="menu-item-93"><a href="https://dir.indiamart.com/impcat/electric-screwdrivers.html">Electric Screwdrivers</a></li><li class="menu-item-93 mcat"><a href="https://dir.indiamart.com/impcat/bosch-power-tools.html">Bosch Power Tools</a></li></ul></li><li id="menu-item-9-4" class="bdr-all"><ul><li class="menu-item-94"><a class="bg-image text-center full" href="https://dir.indiamart.com/impcat/laser-cutting-machines.html"><span class="title">Laser Cutting Machines</span><span class="fd-suppliers">Find Suppliers</span></a></li> </ul></li><li id="menu-item-9-5"><ul><li class="menu-item-95"><a class="bg-image text-center first" href="https://dir.indiamart.com/impcat/sand-blasting-machine.html"><span class="title">Sand Blasting Machines</span><span class="fd-suppliers">Find Suppliers</span></a><a class="bg-image text-center second" href="https://dir.indiamart.com/impcat/woodworking-machines.html"><span class="title">Wood Working Machines</span><span class="fd-suppliers">Find Suppliers</span></a></li>  </ul></li></ul>',
  cat10 =
    '<ul><li id="menu-item-10-1"><h5><a href="https://dir.indiamart.com/indianexporters/sares.html">Womens Ethnic Wear</a></h5><ul><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/sarees.html"> Sarees </a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-suits.html"> Suits</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/suit-dupatta.html">Suit Dupattas</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/lehenga-choli.html">Lehenga Cholis</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-kurtis.html">Kurtis</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/blouses.html">Blouses</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-legging.html">Leggings</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/palazzo-pants.html">Palazzos</a></li><li class="bottom menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-salwar.html">Salwars</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/g_garmnt.html">Womens Western Wear</a></h5></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-jeans.html">Jeans</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-tops.html">Tops</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-designer-dress.html">Dresses</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-gown.html">Gowns</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-shirts.html">Shirts</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-t-shirts.html">T-shirts</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-skirts.html">Skirts</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-jacket.html">Jackets</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-pants.html">Pants</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/capri-jeans.html">Capris</a></li><li class="menu-item-101"><a href="https://dir.indiamart.com/impcat/ladies-bra.html">Innerwears</a></li></ul></li><li id="menu-item-10-2"><h5><a href="https://dir.indiamart.com/indianexporters/te_rgarm.html">Mens Wear</a></h5><ul><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/men-shirts.html">Shirts</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/mens-jeans.html">Jeans</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/mens-t-shirts.html">T-shirts</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/mens-suits.html">Formal Suits</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/mens-jackets.html">Jackets</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/mens-blazer.html">Blazers</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/mens-trousers.html">Trousers</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/men-kurtas.html">Kurtas</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/sherwani.html">Sherwanis</a></li><li class="bottom menu-item-102"><a href="https://dir.indiamart.com/impcat/mens-underwear.html">Innerwears</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/g_embrod.html">Kids Wear</a></h5></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/kids-dresses.html">Dresses</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/kids-readymade-garments.html">Readymade Garments</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/kids-frock.html">Frocks</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/kids-lehenga.html">Lehengas</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/kids-t-shirt.html">T-shirts</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/kids-anarkali-suits.html">Anarkali Suits</a></li><li class="menu-item-102"><a href="https://dir.indiamart.com/impcat/baby-clothes.html">Baby Clothes</a></li></ul></li><li id="menu-item-10-3"><h5><a href="https://dir.indiamart.com/indianexporters/te_wool.html">Winter Wear</a></h5><ul><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/cashmereshawls.html">Shawls</a></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/winter-jackets.html">Jackets</a></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/woolen-sweaters.html">Sweaters</a></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/sweatshirts.html">Sweat Shirts</a></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/ladies-cardigan.html">Cardigans</a></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/mens-muffler.html">Mufflers</a></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/long-coat.html">Long Coats</a></li><li class="bottom menu-item-103"><a href="https://dir.indiamart.com/impcat/pullover-sweater.html">Pullovers</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/uniform-dresses.html">Uniforms</a></h5></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/school-uniforms.html">School Uniforms</a></li><li class="menu-item-103 bottom"><a href="https://dir.indiamart.com/impcat/corporate-uniform.html">Corporate Uniforms</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/g_eyelet.html">Sewing Threads, Laces & Accessories</a></h5></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/fancy-laces.html">Fancy Laces</a></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/sewing-threads.html">Sewing Threads</a></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/saree-border.html">Saree Borders</a></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/elastic-tapes.html">Elastic Tapes</a></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/velcro-tape.html">Velcro Tapes</a></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/zari-laces.html">Zari Laces</a></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/lanyards.html">Lanyards</a></li><li class="menu-item-103"><a href="https://dir.indiamart.com/impcat/cords.html">Cords</a></li></ul></li><li id="menu-item-10-4" class="bdr-all"><ul><li class="menu-item-104"><a class="bg-image text-center full" href="https://dir.indiamart.com/impcat/pathani-suit.html"><span class="title">Pathani Suits</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li><li id="menu-item-10-5"> <ul><li class="menu-item-105"><a class="bg-image text-center first" href="https://dir.indiamart.com/impcat/designer-sarees.html"><span class="title">Silk Sarees</span><span class="fd-suppliers">Find Suppliers</span></a><a class="bg-image text-center second" href="https://dir.indiamart.com/impcat/rain-suit.html"><span class="title">Rain Coats</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li></ul>',
  cat11 =
    '<ul><li id="menu-item-11-1"><h5><a href="https://dir.indiamart.com/indianexporters/l_shoes.html">Footwear</a></h5><ul><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/leather-shoes.html">Leather Shoes</a></li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/womens-footwear.html">Womens Footwears</a></li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/gents-shoes.html">Mens Footwears</a></li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/kolhapuri-chappal.html">Kolhapuri Chappals</a></li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/school-shoes.html">School Shoes</a></li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/canvas-shoes.html">Canvas Shoes</a></li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/ladies-slippers.html">Slippers</a></li><li class="bottom mcat menu-item-111"><a href="https://dir.indiamart.com/impcat/woodland-shoes.html">Woodland Shoes</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/w_clock.html">Watches & Clocks</a></h5> </li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/wall-clocks.html">Hanging Clocks</a></li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/table-clock.html">Table Clocks</a></li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/digital-clock.html">Digital Clocks</a></li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/analog-clock.html">Analog Clocks</a></li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/hand-watch.html">Wrist Watches</a></li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/stop-watch.html">Stop Watches</a></li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/pocket-watches.html">Pocket Watches</a></li><li class="menu-item-111"><a href="https://dir.indiamart.com/impcat/sports-watch.html">Sports Watches</a></li></ul></li><li id="menu-item-11-2"><h5><a href="https://dir.indiamart.com/indianexporters/eyewear-manufacturers.html">Eyewear</a></h5><ul><li class="menu-item-112"><a href="https://dir.indiamart.com/impcat/spectacle-frames.html">Spectacles</a></li><li class="menu-item-112"><a href="https://dir.indiamart.com/impcat/safety-goggles.html">Safety Goggles</a></li><li class="menu-item-112"><a href="https://dir.indiamart.com/impcat/sun-glasses.html">Sunglasses</a></li><li class="menu-item-112"><a href="https://dir.indiamart.com/impcat/polarized-sunglasses.html">Polarized Sunglasses</a></li><li class="menu-item-112"><a href="https://dir.indiamart.com/impcat/sports-sunglasses.html">Sports Sunglasses</a></li><li class="menu-item-112 mcat bottom"><a href="https://dir.indiamart.com/impcat/puma-shoes.html">Puma Shoes</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/j_jewel.html">Fashion Jewelry</a></h5></li><li class="menu-item-112"><a href="https://dir.indiamart.com/impcat/imitation-jewelry.html">Imitation Jewelry</a></li><li class="menu-item-112"><a href="https://dir.indiamart.com/impcat/bridal-jewelry-sets.html">Bridal Jewelry</a></li><li class="menu-item-112"><a href="https://dir.indiamart.com/impcat/wrist-bands.html">Wrist Bands</a></li><li class="menu-item-112"><a href="https://dir.indiamart.com/impcat/american-diamond-jewellery.html">Diamond Jewelry</a></li><li class="menu-item-112"><a href="https://dir.indiamart.com/impcat/kundan-jewelry.html">Kundan Jewelry</a></li><li class="menu-item-112"><a href="https://dir.indiamart.com/impcat/terracotta-jewelery.html">Terra Cotta Jewelry</a></li><li class="menu-item-112"><a href="https://dir.indiamart.com/impcat/finger-rings.html">Finger Rings</a></li><li class="menu-item-112 mcat"><a href="https://dir.indiamart.com/impcat/rolex-watches.html">Rolex Watches</a></li></ul></li><li id="menu-item-11-3"><h5><a href="https://dir.indiamart.com/indianexporters/j_gold.html">Gold Jewelry</a></h5><ul><li class="menu-item-113"><a href="https://dir.indiamart.com/impcat/goldjewellery.html">Gold Jewelry</a></li><li class="menu-item-113"><a href="https://dir.indiamart.com/impcat/gold-earrings.html">Earrings</a></li><li class="menu-item-113"><a href="https://dir.indiamart.com/impcat/gold-bangles.html">Bangles</a></li><li class="menu-item-113"><a href="https://dir.indiamart.com/impcat/gold-mangalsutra.html">Mangalsutra</a></li><li class="menu-item-113"><a href="https://dir.indiamart.com/impcat/gold-chains.html">Chains</a></li><li class="bottom menu-item-113"><a href="https://dir.indiamart.com/impcat/gold-necklace.html">Necklaces</a></li><li><h5>Other Accessories</h5></li><li class="menu-item-113"><a href="https://dir.indiamart.com/impcat/silk-scarves.html">Scarves</a></li><li class="menu-item-113"><a href="https://dir.indiamart.com/impcat/stoles.html">Stoles</a></li><li class="menu-item-113"><a href="https://dir.indiamart.com/impcat/cotton-caps.html">Caps</a></li><li class="menu-item-113"><a href="https://dir.indiamart.com/impcat/mens-tie.html">Ties</a></li><li class="menu-item-113"><a href="https://dir.indiamart.com/impcat/cufflinks.html">Cufflinks</a></li></ul></li><li id="menu-item-11-5" class="bdr-all"><ul><li class="menu-item-115"><a class="bg-image text-center last" href="https://dir.indiamart.com/impcat/fashion-wrist-watches.html"><span class="title">Wrist Watch</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li><li id="menu-item-11-4"><ul><li class="menu-item-114"><a class="bg-image text-center first" href="https://dir.indiamart.com/impcat/diamond-jewelry.html"><span class="title">Diamond Jewellery</span><span class="fd-suppliers">Find Suppliers</span></a><a class="bg-image text-center second" href="https://dir.indiamart.com/impcat/gemstone.html"><span class="title">Gemstone</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li></ul>',
  cat12 =
    '<ul><li id="menu-item-12-1"><h5><a href="https://dir.indiamart.com/indianexporters/cosmetics-beauty.html">Cosmetics, Hair & Beauty Products</a></h5><ul><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/human-hair.html"> Human Hair </a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/skin-creams.html"> Skin Creams </a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/hand-sanitizer.html"> Hand Sanitizers</a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/toothpastes.html"> Toothpastes </a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/hair-shampoo.html"> Hair Shampoos </a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/hotel-guest-toiletries.html"> Hotel Guest Toiletries </a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/hair-wig.html"> Hair Wigs </a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/toothbrush.html"> Toothbrushes</a></li>\x3c!--<li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/rubber-band.html"> Rubber Bands </a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/hair-oil.html"> Hair Oils </a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/talcum-powder.html"> Talcum Powders</a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/nail-polish.html"> Nail Polish</a></li>--\x3e<li class="bottom menu-item-121"><a href="https://dir.indiamart.com/impcat/face-wash.html"> Face Wash</a></li><li><h5><a href="https://dir.indiamart.com/indianexporters/soap.html">Soaps, Detergent Powder & Cakes</a></h5> </li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/detergent-powder.html"> Detergent Powders </a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/bath-soaps.html"> Bath Soaps </a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/detergent-cake.html">  Detergent Cakes </a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/liquid-hand-wash.html"> Liquid Hand Wash </a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/dish-washing-soap.html">Dish Washing Soaps</a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/liquid-soaps.html"> Liquid Soaps </a></li><li class="menu-item-121"><a href="https://dir.indiamart.com/impcat/dishwashing-liquids.html"> Dishwashing Liquids </a></li><li class="menu-item-121 mcat"><a href="https://dir.indiamart.com/impcat/lux-soaps.html">Lux Soaps</a></li>\t</ul></li><li id="menu-item-12-2"><h5><a href="https://dir.indiamart.com/indianexporters/salon-spa-equipment.html">Salon, Spa Kits & Equipments</a></h5><ul><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/salon-chair.html"> Salon Chairs </a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/beauty-salon-furniture.html"> Beauty Salon Furniture</a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/beauty-salon-equipment.html"> Beauty Salon Equipments</a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/automatic-thermal-massage-bed.html"> Automatic Thermal Massage Beds</a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/mehndi-cone.html"> Mehendi Cones </a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/massage-bed.html"> Massage Beds</a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/shaving-blade.html"> Shaving Blades</a></li><li class="menu-item-122 bottom"><a href="https://dir.indiamart.com/impcat/hair-trimmers.html"> Hair Trimmers </a></li>\x3c!--<li class="bottom menu-item-122"><a href="https://dir.indiamart.com/impcat/shaving-razors.html"> Shaving Razors </a></li>--\x3e<li><h5><a href="https://dir.indiamart.com/indianexporters/ayurveda-cosmetics.html">Ayurvedic, Herbal Oils and Cosmetics</a></h5></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/herbal-cosmetic-products.html"> Herbal Cosmetic Products </a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/herbal-hair-oil.html"> Herbal Hair Oils </a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/herbal-soaps.html"> Herbal Soaps </a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/herbal-shampoo.html"> Herbal Shampoos </a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/ayurvedic-hair-oil.html"> Ayurvedic Hair Oils </a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/aloe-vera-gel.html"> Aloe Vera Gels </a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/ayurvedic-cosmetics.html"> Ayurvedic Cosmetics </a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/herbal-toothpaste.html"> Herbal Toothpastes </a></li><li class="menu-item-122"><a href="https://dir.indiamart.com/impcat/rose-water.html"> Rose Water </a></li></ul></li><li id="menu-item-12-3"><h5><a href="https://dir.indiamart.com/indianexporters/baby.html">Child and Baby Care Products</a></h5><ul><li class="menu-item-123"><a href="https://dir.indiamart.com/impcat/baby-diapers.html"> Baby Diapers </a></li><li class="menu-item-123"><a href="https://dir.indiamart.com/impcat/baby-cradle.html"> Baby Cradles </a></li><li class="menu-item-123"><a href="https://dir.indiamart.com/impcat/baby-foods.html"> Baby Foods </a></li><li class="menu-item-123"><a href="https://dir.indiamart.com/impcat/baby-swings.html"> Baby Swings </a></li><li class="menu-item-123"><a href="https://dir.indiamart.com/impcat/baby-care-products.html"> Baby Care Products </a></li><li class="menu-item-123"><a href="https://dir.indiamart.com/impcat/baby-stroller.html"> Baby Strollers</a></li><li class="menu-item-123"><a href="https://dir.indiamart.com/impcat/baby-walkers.html">  Baby Walkers </a></li><li class="menu-item-123"><a href="https://dir.indiamart.com/impcat/baby-feeding-bottle.html"> Baby Feeding Bottles </a></li><li class="menu-item-123"><a href="https://dir.indiamart.com/impcat/baby-cot.html"> Baby Cots </a></li><li class="menu-item-123"><a href="https://dir.indiamart.com/impcat/pull-up-diaper.html"> Pull Up Diapers</a></li><li class="menu-item-123 bottom mcat"><a href="https://dir.indiamart.com/impcat/assure-bath-soap.html">Assure Bath Soaps</a></li></ul></li><li id="menu-item-12-5" class="bdr-all"><ul><li class="menu-item-125"><a class="bg-image text-center last" href="https://dir.indiamart.com/impcat/hair-trimmers.html"><span class="title">Hair Trimmers</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li><li id="menu-item-12-4"><ul><li class="menu-item-124"><a class="bg-image text-center first" href="https://dir.indiamart.com/impcat/bath-soaps.html"><span class="title">Soaps</span><span class="fd-suppliers">Find Suppliers</span></a><a class="bg-image text-center second" href="https://dir.indiamart.com/impcat/hand-sanitizer.html"><span class="title">Hand Sanitizers</span><span class="fd-suppliers">Find Suppliers</span></a></li></ul></li></ul>';
$(document).ready(function () {
  $("#menu-item-1").append(cat1),
    $("#menu-item-2").append(cat2),
    $("#menu-item-3").append(cat3),
    $("#menu-item-4").append(cat4),
    $("#menu-item-5").append(cat5),
    $("#menu-item-6").append(cat6),
    $("#menu-item-7").append(cat7),
    $("#menu-item-8").append(cat8),
    $("#menu-item-9").append(cat9),
    $("#menu-item-10").append(cat10),
    $("#menu-item-11").append(cat11),
    $("#menu-item-12").append(cat12);
}),
  $(document).ready(function () {
    $("#menu-bar .menu ul.menu > li").hover(
      function () {
        $(".width80.right").css({ opacity: "0.2" });
      },
      function () {
        $(".width80.right").css({ opacity: "1" });
      }
    ),
      $(
        "#menu-bar .menu ul.menu > li:first-child,#menu-bar .menu ul.menu > li:last-child"
      ).hover(function () {
        $(".width80.right").css({ opacity: "1" });
      });
  });