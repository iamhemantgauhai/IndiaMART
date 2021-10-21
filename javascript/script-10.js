function readCookie(e) {
  var i = e + "=";
  return document.cookie.length > 0 &&
    ((offset = document.cookie.indexOf(i)), -1 != offset)
    ? ((offset += i.length),
      (end = document.cookie.indexOf(";", offset)),
      -1 == end && (end = document.cookie.length),
      unescape(document.cookie.substring(offset, end)))
    : "v4iilex" == e
    ? readCookie("v4iil")
    : "";
}
function getparamVal(e, i) {
  if (e > "") {
    var t = "|" + e + "|",
      a = new RegExp(".*?\\|" + i + "=([^|]*).*|.*");
    return t.replace(a, "$1");
  }
  return "";
}
var googletag = googletag || {};
function applink() {
  $("#msg").css("display", "none");
  var e = $("#mobi").val();
  if (null == e || "" == e)
    $("#msg").html("Required"), $("#msg").css("display", "block");
  else if (RegExp("([6-9]{1})[0-9]{9}").test(e) && 10 == e.length) {
    var i = readCookie("ImeshVisitor");
    if ("" != i && null != i) {
      var t = getparamVal("fn"),
        a = getparamVal("glid");
      $.ajax({
        url:
          "//mapi.indiamart.com/wservce/apps/sendmsg/mobile/" +
          e +
          "/gluser/" +
          a +
          "/source/ClickLogIn/subsource//modid/IMHOME/v//receiverName/" +
          t +
          "/token/imobile@15061981/",
        type: "POST",
        dataType: "jsonp",
        jsonpCallback: "sms_status",
      });
    } else {
      $.ajax({
        url:
          "//mapi.indiamart.com/wservce/apps/sendmsg/mobile/" +
          e +
          "/gluser/0/source/click/subsource//modid/IMHOME/v//receiverName//token/imobile@15061981/",
        type: "POST",
        dataType: "jsonp",
        jsonpCallback: "sms_status",
      }),
        loginserv(e, "Download App on Top Header");
    }
  } else
    $("#msg").html(
      "Enter 10 digit valid mobile number starting with 9,8,7 or 6"
    ),
      $("#msg").css("display", "block");
}
function dapppop() {
  $(".hd-dw-apps").click();
}
function sms_status(e) {
  var i = "";
  (i =
    "SMS Triggered" == e.delivery_status
      ? "<b>App download link is sent to " + e.mobile + "</b>."
      : "SMS not sent due to DND" == e.reason
      ? "Oops! " +
        e.mobile +
        ' is in <b style="color: #434144;">DND</b>.<br/> Please give a <b>Missed call</b> on <b>1800-200-1848</b> to install the app.'
      : "Sms Sent Attempted Within 30 Minutes" == e.reason
      ? "App Install Link already sent to " +
        e.mobile +
        ".<br/> To get instant link, give a <b>Missed call</b> at <b>1800-200-1848</b>."
      : "Oops! We can't reach you at " +
        e.mobile +
        ". <br/> To install the app, give a <b>Missed call</b> on <b>1800-200-1848</b>."),
    $("#msg").html(i),
    $("#msg").css("display", "block");
}
function prdImgLoad() {
  $(".lazy img").each(function (e) {
    var i = this;
    setTimeout(function () {
      (i.src = $(i).data("original")), $(i).closest("div").removeClass("lazy");
    }, 25 * e);
  });
}
function isOnScreen(e) {
  var i = 0,
    t = 0,
    a = 0,
    o = jQuery(e);
  o.length &&
    ((t = (i = o.offset().top) + o.height()), (a = o.outerHeight() - 20));
  var n = $(window).scrollTop(),
    s = n + $(window).height();
  return t - a + $("#prswdgt .tc:first").height() <= s &&
    i + a - $("#prswdgt .tc:last").height() >= n
    ? 1
    : 0;
}
function pause_video() {
  (ivid = $(".swiper2 .swiper-slide-active .ifvid")[0].id),
    $("#" + ivid)[0].contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
}
function pwdHTML(e, t) {
  var a = readCookie("ImeshVisitor"),
    o = "",
    n = "",
    s = "",
    r = "",
    c = "",
    d = "",
    l = "",
    p = "";
  for (
    1 == t
      ? ((n =
          '<div class="title">Featured Recommendations<a class="va" href="//my.indiamart.com/buyertools/myproductbuy/ " onclick="onclick="getEvent(\'w3_recently_viewed\',\'cta_click_viewall\',\'IMHOME\');""target="_blank">View All <i class="artxt">&gt;</i></a></div>' +
          '<div class="prswdgt">'),
        (s = "" != a ? -59 : -86))
      : ((n =
          '<div class="title">Featured Categories</div>' +
          '<div class="prswdgt">'),
        (s = "" != a ? -120 : -118)),
      i = 0;
    i < e.length;
    i++
  ) {
    if (1 == t) {
      var m = "";
      (l = void 0 !== e[i].name ? e[i].name : "").length > 50 &&
        (l = l.substring(0, 49) + "...");
      var g = void 0 !== e[i].price && "" != e[i].price ? e[i].price : "",
        u = g,
        v =
          void 0 !== e[i].currency && "" != e[i].currency ? e[i].currency : "",
        _ = void 0 !== e[i].unit && "" != e[i].unit ? e[i].unit : "";
      if (
        ("INR" == v && (v = "Rs"),
        void 0 !== e[i].product_url && "" != e[i].product_url)
      )
        d = e[i].product_url;
      else if (void 0 !== e[i].fl_name && "" != e[i].fl_name) {
        d =
          "//" +
          (location.hostname.match(/dev/)
            ? "dev.indiamart.com"
            : location.hostname.match(/stg/)
            ? "stg.indiamart.com"
            : "www.indiamart.com") +
          "/proddetail/" +
          e[i].fl_name +
          ".html";
      } else d = "https://dir.indiamart.com/search.mp?ss=" + l;
      void 0 !== e[i].mcatid && "" != e[i].mcatid
        ? (p = e[i].mcatid)
        : void 0 !== e[i].id && "" != e[i].id && (p = e[i].id),
        void 0 !== e[i].img_125 && "" != e[i].img_125
          ? (r = e[i].img_125.replace(/(^\w+:|^)\/\//, "//"))
          : void 0 !== e[i].img_250 && "" != e[i].img_250
          ? (r = e[i].img_250.replace(/(^\w+:|^)\/\//, "//"))
          : void 0 !== e[i].image && "" != e[i].image
          ? (r = e[i].image.replace(/(^\w+:|^)\/\//, "//"))
          : void 0 !== e[i].image1 &&
            "" != e[i].image1 &&
            (r = e[i].image1.replace(/(^\w+:|^)\/\//, "//")),
        (m =
          void 0 !== e[i].c_url && "" != e[i].c_url
            ? e[i].c_url
            : void 0 !== e[i].website_url && "" != e[i].website_url
            ? e[i].website_url
            : d);
      var f = "",
        w = "";
      void 0 !== e[i].c_name && "" != e[i].c_name
        ? (w = e[i].c_name)
        : void 0 !== e[i].company_name &&
          "" != e[i].company_name &&
          (w = e[i].company_name),
        "" != w && (f = "By: " + w);
      var h = void 0 !== e[i].id ? e[i].id : "",
        b = void 0 !== e[i].s_id ? e[i].s_id : "",
        y = '<span class="pprc">' + g + "</span>";
      if (g) {
        g = parseFloat(u);
        var I = Math.abs(g);
        I >= 1e7
          ? (g = (I / 1e7).toFixed(2) + " Cr")
          : I >= 1e5 && (g = (I / 1e5).toFixed(2) + " Lac"),
          (g = _ ? v + " " + g + " / " + _ : v + " " + g),
          (y =
            '<span class="pprc" onclick="PersBLENQ(\'' +
            l +
            "','" +
            s +
            "','" +
            p +
            "','bottom_" +
            i +
            "','IMHOME',1,'" +
            i +
            "'); getEvent('w3_recently_viewed','cta_click_price','IMHOME');\">" +
            g +
            "</span>");
      }
      "" != r &&
        ((c =
          '<div><a class="pbrt imgl" href="' +
          d +
          "\" target=\"_blank\" onclick=\"getEvent('w3_recently_viewed','cta_click_prdname','IMHOME');\"><img alt=\"" +
          l +
          '" src="' +
          r +
          '" data-original="' +
          r +
          '"></a><a class="pernm" href="' +
          d +
          "\" target=\"_blank\" onclick=\"getEvent('w3_recently_viewed','cta_click_prdname','IMHOME');\" >" +
          l +
          "</a>" +
          y +
          '<a class="percn" href="' +
          m +
          "\" target=\"_blank\" onclick=\"getEvent('w3_recently_viewed','cta_click_cmpnyname','IMHOME');\" >" +
          f +
          '</a><span class="btnb btn" onclick="PersBLENQ(\'' +
          l +
          "','" +
          s +
          "','" +
          p +
          "','bottom_" +
          i +
          "','IMHOME',1,'" +
          i +
          "'); getEvent('w3_recently_viewed','cta_button_getquotes','IMHOME');\">Get Best Price</span>"),
        (c +=
          '<input type="hidden" id="bottom_' +
          i +
          '" value="' +
          r +
          "@" +
          l +
          "@" +
          h +
          "@" +
          b +
          "@" +
          w +
          "@" +
          u +
          "@" +
          g +
          '" style="display:none;"></input></div>'));
    } else
      void 0 !== e[i].detail
        ? ((l = e[i].detail.name),
          (d =
            "https://dir.indiamart.com/impcat/" +
            e[i].detail.fl_name +
            ".html"),
          (p = e[i].detail.id),
          "" != e[i].detail.image
            ? (r = e[i].detail.image.replace(/(^\w+:|^)\/\//, "//"))
            : "" != e[i].detail.img_250 &&
              (r = e[i].detail.img_250.replace(/(^\w+:|^)\/\//, "//")))
        : ((d = "https://dir.indiamart.com/impcat/" + e[i].fl_name + ".html"),
          (l = void 0 !== e[i].name ? e[i].name : ""),
          (p = void 0 !== e[i].id ? e[i].id : ""),
          void 0 !== e[i].img_125 && "" != e[i].img_125
            ? (r = e[i].img_125.replace(/(^\w+:|^)\/\//, "//"))
            : void 0 !== e[i].image && "" != e[i].image
            ? (r = e[i].image.replace(/(^\w+:|^)\/\//, "//"))
            : void 0 !== e[i].img_250 &&
              "" != e[i].img_250 &&
              (r = e[i].img_250.replace(/(^\w+:|^)\/\//, "//"))),
        "" != r &&
          (c =
            '<div class="tc"><a class="pbrt" href="' +
            d +
            "\" target=\"_blank\" onclick=\"getEvent('w3_recently_viewed_mcat','cta_click_prdname_mcat','IMHOME_B');\" ><img alt=\"" +
            l +
            '" src="' +
            r +
            '"></a><a class="pernm" href="' +
            d +
            "\" target=\"_blank\" onclick=\"getEvent('w3_recently_viewed_mcat','cta_click_prdname_mcat','IMHOME_B');\">" +
            l +
            '</a><span class="btnb btn" onclick="PersBLENQ(\'' +
            l +
            "','" +
            s +
            "','" +
            p +
            "','','IMHOME',2,'" +
            i +
            "');getEvent('w3_recently_viewed_mcat','cta_button_getquotes_mcat','IMHOME_B');\">Get Quotes</span></div>");
    if (((o += c), i >= 4)) break;
  }
  "" != o &&
    ((c = n + o),
    (c += "</div>"),
    1 == t
      ? ($("#recent_item_widget").html(c), $("#trending-products1").show())
      : 2 == t && $("#recent_item_widget1").html(c),
    $("#trending-products").show());
}
(googletag.cmd = googletag.cmd || []),
  googletag.cmd.push(function () {
    googletag
      .defineSlot(
        "/3047175/IMHOME_CAT_POSITION1",
        [
          [970, 90],
          [728, 90],
          [980, 90],
        ],
        "div-gpt-ad-1591073476435-0"
      )
      .setTargeting("test", "lazyload")
      .addService(googletag.pubads()),
      googletag.pubads().enableLazyLoad(),
      googletag.pubads().enableSingleRequest(),
      googletag.enableServices(),
      googletag.pubads().collapseEmptyDivs();
  });
var flagpers = 1,
  imhome = 0,
  imhome1 = 0;
function persWdgtBfrLstBL() {
  "function" == typeof getPersData
    ? setTimeout(function () {
        1 == flagpers &&
          ((rcntviewHTML = getPersData({
            flag: 1,
            count: 20,
            modid: "IMHOME",
            displayID: 0,
          })),
          (rcntviewHTML2 = getPersData({
            flag: 2,
            count: 20,
            modid: "IMHOME",
            displayID: 0,
          })),
          flagpers++),
          "" != rcntviewHTML
            ? (pwdHTML(rcntviewHTML, 1),
              jQuery(document).ready(function () {
                window.addEventListener("scroll", function (e) {
                  isOnScreen(jQuery("#recent_item_widget")) &&
                    1 != imhome &&
                    (getEvent(
                      "w3_recently_viewed",
                      "display_impression",
                      "IMHOME"
                    ),
                    (imhome = 1));
                });
              }))
            : $("#trending-products1").hide(),
          "" != rcntviewHTML2 &&
            (pwdHTML(rcntviewHTML2, 2),
            jQuery(document).ready(function () {
              window.addEventListener("scroll", function (e) {
                isOnScreen(jQuery("#recent_item_widget1")) &&
                  1 != imhome1 &&
                  (getEvent(
                    "w3_recently_viewed_mcat",
                    "display_impression",
                    "IMHOME_B"
                  ),
                  (imhome1 = 1));
              });
            }));
      }, 100)
    : "undefined" == typeof getPersData &&
      setTimeout(function () {
        persWdgtBfrLstBL();
      }, 500);
}
function swiperslid() {
  var e = new Swiper(".swiper1", {
      simulateTouch: !1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        slidesPerView: 1,
      },
      autoplay: { delay: 3e3 },
    }),
    i = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: !0,
      watchSlidesVisibility: !0,
      watchSlidesProgress: !0,
    }),
    t = new Swiper(".swiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".gallerynext",
        prevEl: ".galleryprev",
        slidesPerView: 1,
      },
      thumbs: { swiper: i },
    });
  (t.params.control = i),
    (i.params.control = t),
    i.on("tap", function (e) {
      t.slideTo(i.clickedIndex), i.slideTo(i.clickedIndex);
    }),
    $(".swiper1").hover(
      function () {
        e.autoplay.stop();
      },
      function () {
        $(".t0402_prodName").hover(
          function () {
            $(".t0402_prodName").show(), e.autoplay.stop();
          },
          function () {
            $(".t0402_prodName").hide();
          }
        ),
          $(".t0402_prodName").hide(),
          e.autoplay.start();
      }
    );
}
function swiper() {
  "undefined" != typeof Swiper
    ? swiperslid()
    : setTimeout(function () {
        swiper();
      }, 500);
}
var timeoutID,
  web_push = "";
function openinactiveForm() {
  if ("undefined" == typeof isBlEnqLoaded)
    setTimeout(function () {
      openinactiveForm();
    }, 50);
  else {
    var e = {
        catId: "",
        mcatId: "",
        mcatName: "",
        prodServ: "",
        prodName: "",
        pageType: "IM-Homepage",
        pDispId: "",
        modrefType: "product",
        refText: "",
        modId: "IMHOME",
        heading: "",
        tempId: "09",
        instId: "01",
        formType: "BL",
        afflId: "-2",
        displayImage: "",
        zoomImage: "",
        ctaName: "Inactive",
        ctaType: "Product Enquiry",
        section: "Overlay",
        position: "pg-1_0",
        scriptVersion: blversion,
      },
      i =
        "ctaName=Inactive|ctaType=Product Enquiry|PT=IM-Homepage" +
        web_push +
        "|Section=" +
        e.section +
        "|Position=" +
        e.position +
        "|ScriptVer= " +
        e.scriptVersion,
      t = getEventLabel();
    OpenForm(e), reqFormGATrack("Post Buy Leads", "Inactive BL Form", t, i);
  }
}
function openBlForm() {
  if ("undefined" == typeof isBlEnqLoaded)
    setTimeout(function () {
      openBlForm();
    }, 50);
  else {
    var e = {
        catId: "",
        mcatId: "",
        mcatName: "",
        prodServ: "",
        prodName: "",
        pageType: "IM-Homepage",
        pDispId: "",
        modrefType: "product",
        refText: "",
        modId: "IMHOME",
        heading: "",
        tempId: "08",
        instId: "01",
        formType: "CHATBL",
        afflId: "-155",
        displayImage: "",
        zoomImage: "",
        ctaName: "Onclick",
        ctaType: "Product Enquiry",
        section: "Header",
        position: "pg-1_0",
        scriptVersion: blversion,
      },
      i =
        "ctaName=Onclick|ctaType=Product Enquiry|PT=IM-Homepage" +
        web_push +
        "|Section=" +
        e.section +
        "|Position=" +
        e.position +
        "|ScriptVer= " +
        e.scriptVersion,
      t = getEventLabel();
    OpenForm(e), reqFormGATrack("Post Buy Leads", "CTA Clicked", t, i);
  }
}
function reqFormGATrack(e, i, t, a) {
  imgtm.push({
    event: "IMEvent",
    eventCategory: e,
    eventAction: i,
    eventLabel: t,
    CD_Additional_Data: a,
  });
}
function setup() {
  this.addEventListener("mousemove", resetTimer, !1),
    this.addEventListener("mousedown", resetTimer, !1),
    this.addEventListener("keypress", resetTimer, !1),
    this.addEventListener("DOMMouseScroll", resetTimer, !1),
    this.addEventListener("mousewheel", resetTimer, !1),
    this.addEventListener("touchmove", resetTimer, !1),
    this.addEventListener("MSPointerMove", resetTimer, !1),
    startTimer();
}
function startTimer() {
  timeoutID = window.setTimeout(goInactive, 6e4);
}
function resetTimer(e) {
  window.clearTimeout(timeoutID), goActive();
}
function goInactive() {
  bl_enq_overlapping_checks();
}
function goActive() {
  startTimer();
}
function bl_enq_overlapping_checks() {
  if ("undefined" != typeof isBLFormOpen && 1 == typeof isBLFormOpen);
  else if ($("#enquiry").length && "block" == $("#enquiry").css("display"));
  else if ($("#im-pop_s").length && "block" == $("#im-pop_s").css("display"));
  else if (
    $("#t0901_bewrapper").length &&
    "table" == $("#t0901_bewrapper").css("display")
  );
  else if (
    $("#identyfy_usr_ctl").length &&
    "block" == $("#identyfy_usr_ctl").css("display")
  );
  else {
    var e = sessionStorage.getItem("blformopen");
    (void 0 !== e && 1 == e && "" != e && null != e) ||
      "undefined" == typeof isBLFormOpen ||
      1 == isBLFormOpen ||
      "undefined" == typeof hd_popup ||
      0 != hd_popup ||
      (sessionStorage.setItem("blformopen", 1),
      openinactiveForm(),
      (blStop = 1));
  }
}
"" != (web_push = readCookie("notification")) &&
  "undefined" != web_push &&
  null != web_push &&
  (web_push = "_web_push"),
  setup(),
  $(window).bind("load", function () {
    "webkitSpeechRecognition" in window &&
      $("#search-area").append(
        '<div id="im_mic" class="im_mic Tip"><span class="vSh1" onclick="langpopup()" id="vSrIco"></span> <span class="Tiptext" id="tiptext">Search by voice</span></div>'
      ),
      $.getScript("https://hm.imimg.com/imhome_js/swiper.min.js");
    var e = location.hostname.match(/dev/)
      ? "dev-utils.imimg.com"
      : location.hostname.match(/stg/)
      ? "stg-utils.imimg.com"
      : "utils.imimg.com";
    $.getScript("https://" + e + "/globalhf/" + identversion),
      persWdgtBfrLstBL(),
      $("#tl-item").hide(),
      $("#quote-form").show(),
      $(".ih-pbr").click(function (e) {
        return e.preventDefault(), openBlForm(), !1;
      }),
      prdImgLoad(),
      swiper();
    $("head").append(
      '<link rel="stylesheet" href="https://hm.imimg.com/imhome_css/imhomeafpl3.css" type="text/css" />'
    );
    var i = readCookie("ImeshVisitor"),
      t = getparamVal(decodeURIComponent(i), "iso");
    if ("" == i) {
      var a = readCookie("iploc"),
        o = getparamVal(decodeURIComponent(a), "gcniso");
      "" != o && "IN" != o && $("#get-app-wrapper").html("");
    } else "" != t && "IN" != t && $("#get-app-wrapper").html("");
    (page.pageType = "IM-Homepage" + web_push), (page.scriptVer = blversion);
  });
