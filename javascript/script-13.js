function _typeof(e) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    _typeof(e)
  );
}
var SuggestUtils = {
  readCookie: function readCookie(e, t) {
    if (!document.cookie.length) return "";
    e += "=";
    var a = document.cookie.indexOf(e);
    if (-1 == a) return "";
    a += e.length;
    var o = document.cookie.indexOf(";", a);
    -1 == o && (o = document.cookie.length);
    var d = unescape(document.cookie.substring(a, o));
    if (!t) return d;
    d = "|" + d + "|";
    var s = new RegExp(".*?\\|" + t + "=([^|]*).*|.*");
    return d.replace(s, "$1");
  },
};
function browserDetails() {
  var e,
    t,
    a,
    o = navigator.userAgent,
    d = navigator.appName,
    s = "" + parseFloat(navigator.appVersion);
  return (
    -1 == (t = o.indexOf("Opera"))
      ? -1 == (t = o.indexOf("MSIE"))
        ? -1 == (t = o.indexOf("Chrome"))
          ? -1 == (t = o.indexOf("Safari"))
            ? -1 == (t = o.indexOf("Firefox"))
              ? (e = o.lastIndexOf(" ") + 1) < (t = o.lastIndexOf("/")) &&
                ((d = o.substring(e, t)),
                (s = o.substring(t + 1)),
                d.toLowerCase() == d.toUpperCase() && (d = navigator.appName))
              : ((d = "Firefox"), (s = o.substring(t + 8)))
            : ((d = "Safari"),
              (s = o.substring(t + 7)),
              -1 != (t = o.indexOf("Version")) && (s = o.substring(t + 8)))
          : ((d = "Chrome"), (s = o.substring(t + 7)))
        : ((d = "Microsoft Internet Explorer"), (s = o.substring(t + 5)))
      : ((d = "Opera"),
        (s = o.substring(t + 6)),
        -1 != (t = o.indexOf("Version")) && (s = o.substring(t + 8))),
    -1 != (a = s.indexOf(";")) && (s = s.substring(0, a)),
    -1 != (a = s.indexOf(" ")) && (s = s.substring(0, a)),
    [d, s]
  );
}
var brwsr_dtls = browserDetails();
function isMobileTab() {
  var e = !1;
  return (
    (function (t) {
      (/(android|b{2}\d+|me{2}go).+mobile|avantgo|bada\/|blackber{2}y|blazer|compal|elaine|fen{2}ec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|m{2}p|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xi{2}no|android|ipad|playbo{2}k|silk/i.test(
        t
      ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|7{2}0s|802s|a wa|abac|ac(er|o{2}|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|at{2}w|au(di|\-m|r |s )|avan|be(ck|l{2}|nq)|bi(lb|rd)|bla[cz]|br[ev]w|bumb|bw\-[nu]|c5{2}\/|capi|c{2}wa|cdm\-|cel{2}|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|l{2}|ng)|dbte|dc\-s|devi|dica|dmob|do[cp]o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-[mpt]|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|in{2}o|ipaq|iris|ja[tv]a|jbro|jemu|jigs|kd{2}i|keji|kgt( |\/)|klon|kpt |kwc\-|kyo[ck]|le(no|xi)|lg( g|\/[klu]|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|mer[ci]|mi(o8|oa|ts)|m{2}ef|mo(01|02|bi|de|do|t(\-| |o|v)|z{2})|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30[02]|n50[025]|n7(0[01]|10)|ne([cm]\-|on|tf|wf|wg|wt)|nok[6i]|nzph|o2im|op(ti|wv)|oran|owg1|p80{2}|pan[adt]|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r60{2}|raks|rim9|ro(ve|zo)|s5{2}\/|sa(ge|ma|m{2}|ms|ny|va)|sc(01|h\-|o{2}|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(0{2}|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel[im]|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v40{2}|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x70{2}|yas\-|your|zeto|zte\-/i.test(
          t.substr(0, 4)
        )) &&
        (e = !0);
    })(navigator.userAgent || navigator.vendor || window.opera),
    e
  );
}
var chkFrMb = isMobileTab(),
  atocmplt_attr =
    chkFrMb && "Chrome" == brwsr_dtls[0] && 88 <= parseInt(brwsr_dtls[1])
      ? "none"
      : "off";
function eventTrack(o, e, t, s, a) {
  try {
    var l = new Date(),
      d = l.getSeconds();
    return (
      !(0 != d % 30) &&
      ("undefined" != typeof _gaq && _gaq.push(["_trackEvent", o, e, t, s, a]),
      !0)
    );
  } catch (t) {
    return console.trace(t), !1;
  }
}
try {
  if ("undefined" == typeof Suggester) {
    var checkIfAnalyticsLoaded = function () {
        "undefined" == typeof _gaq &&
          setTimeout("checkIfAnalyticsLoaded()", 1e3);
      },
      Suggestions = function (a, e) {
        return (
          (this.DIRECT = 1),
          (this.FILTERED = 2),
          (this.COMPLETE = 3),
          (this._list = null),
          this.list(a, e),
          this
        );
      },
      SuggestionCache = function (t) {
        return (this._cache = {}), (this.match = t.match), this;
      },
      cleanString = function (e, t) {
        return "object" == _typeof(e)
          ? null === e || "undefined" == typeof e.id
            ? null
            : ((e.id = e.id.toString().toLowerCase()),
              "undefined" == typeof t
                ? (e.id = e.id.replace(/\W+/g, ""))
                : ((e.id = e.id.replace(/[^a-zA-Z0-9\&\@ ]+/g, " ")),
                  (e.id = e.id.replace(/^\s+/g, "")),
                  (e.id = e.id.replace(/\s\s+/g, " "))),
              e.id,
              e)
          : "string" == typeof e || "number" == typeof e
          ? ((e = "undefined" == typeof e ? "" : e.toString().toLowerCase()),
            "undefined" == typeof t
              ? (e = e.replace(/\W+/g, ""))
              : ((e = e.replace(/[^a-zA-Z0-9\&\@ ]+/g, " ")),
                (e = e.replace(/^\s+/g, "")),
                (e = e.replace(/\s\s+/g, " "))),
            e)
          : null;
      },
      ucwords = function (e) {
        return e.replace(/\w\S*/g, function (e) {
          return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
        });
      },
      spellCheck = function (a) {
        if (!a || 4 > a.length) return a;
        if (
          3 > a.replace(/[^a-zA-Z]/gi, "").replace(/[aeiou\& ]+/gi, "").length
        )
          return a;
        var e = a.replace(/[^0-9a-zA-Z]/g, "");
        return (
          (e = e.replace(/(.)(?=\1)/gi, "")),
          (e = e.replace(/([^aeiouc])[h]/i, "$1")),
          (e = e.replace(/([^aeiou])[y]/i, "$1")),
          (e = e.replace(/[yh]([^aeiou])/i, "$1")),
          (e = e.replace(/z/gi, "j")),
          (e = e.replace(/ck/gi, "k")),
          (e = e
            .substring(0, 2)
            .concat(e.substring(2).replace(/[aeiou\& ]+/g, ""))),
          !0 === /[aeiou]/.test(e.charAt(1)) &&
            (e =
              !0 === /[aeiou]/.test(e.charAt(0))
                ? e.charAt(0).concat(e.charAt(0)).concat(e.slice(2))
                : e),
          e
        );
      },
      previouskeyCache = function (d, c, t, p, a) {
        (p[t] = []), (p["spck" + t] = []);
        var u = new RegExp("\\b(" + d + ")", "i");
        if ("fuzzy" === a.match && "mcat" != t) {
          d = "domain" == t ? d : cleanString(d);
          var o =
            "city" === a.type || "unit" === a.type || "domain" === a.type
              ? new RegExp("(" + removeVowels(d) + ")", "i")
              : spellCheck(d) === d
              ? ""
              : new RegExp("(" + spellCheck(d) + ")", "i");
        }
        for (var s in c)
          if (c[0] != null && null != c[s].value) {
            var m = c[s].value;
            cleanString(m.trim(), 1).match(u) && p[t].push(c[s]),
              "" !== o &&
                "undefined" != typeof o &&
                ((m = cleanString(
                  ("city" === t || "unit" === t || "domain" === t) &&
                    "fuzzy" === a.match
                    ? removeVowels(m)
                    : spellCheck(m)
                )),
                m.match(o) && p["spck" + t].push(c[s]));
          }
        return p;
      },
      removeVowels = function (t) {
        return !t || 2 > t.length
          ? t
          : ((t = t.replace(/(.)(?=\1)/gi, "")),
            (t = t
              .substring(0, 1)
              .concat(t.substring(1).replace(/[aeiou]+/gi, ""))));
      },
      readGaCookie = function (e) {
        var t = e + "=";
        return 0 < document.cookie.length &&
          ((offset = document.cookie.indexOf(t)), -1 != offset)
          ? ((offset += t.length),
            (end = document.cookie.indexOf(";", offset)),
            -1 == end && (end = document.cookie.length),
            unescape(document.cookie.substring(offset, end)))
          : "";
      },
      addScrollingInDd = function (o) {
        var d = "";
        $(document).keydown(function (t) {
          if ($("#" + o + " dd ul").is(":visible")) {
            if (13 == t.keyCode)
              return $("#" + o + " dd ul li.selected a").click(), !1;
            var s = 0;
            return (
              (40 == t.keyCode || 38 == t.keyCode) &&
                ("" === d
                  ? (d = 0)
                  : d < $("#" + o + " dd ul li").length &&
                    0 <= d &&
                    (40 == t.keyCode && d < $("#" + o + " dd ul li").length - 1
                      ? (d++, s++)
                      : 38 == t.keyCode && 0 < d && (d--, s++))),
              65 <= t.keyCode &&
                90 >= t.keyCode &&
                $.each($("#" + o + " dd ul li"), function (a, e) {
                  return e.textContent.substring(0, 1) ==
                    String.fromCharCode(t.keyCode) && 5 < a
                    ? ((d = a), s++, !1)
                    : void 0;
                }),
              0 < s &&
                ($("#" + o + " dd ul li").removeClass("selected"),
                $("#" + o + " dd ul li:eq(" + d + ")").addClass("selected"),
                $("#" + o + " dd ul").scrollTop(26 * d - 20)),
              !1
            );
          }
        }),
          $("#" + o + " dd ul li").click(function () {
            return (
              (d = $("#" + o + " dd ul li").index(this)),
              $("#" + o + " dd ul li").removeClass("selected"),
              "Show More" === this.textContent
                ? $("#" + o + " dd ul li:eq(0)").addClass("selected")
                : $("#" + o + " dd ul li:eq(" + d + ")").addClass("selected"),
              "Show More" === this.textContent
                ? ((this.innerHTML = "Loading..."),
                  $(this).css({ padding: "3px" }),
                  !1)
                : void $("#" + o + " dd ul").hide()
            );
          });
      },
      activateDropDown = function (a) {
        $("#" + a + " dt a").click(function () {
          document.getElementById(a).getAttribute("disabled") ||
            ($("#" + a + " dd ul").toggle(),
            $("#" + a + " dd ul li:first-child").focus());
        }),
          $(document).bind("click", function (e) {
            var t = $(e.target);
            t.parents().hasClass("dropdown") || $("#" + a + " dd ul").hide();
          }),
          addScrollingInDd(a);
      },
      renderIsd = function (d, e, t, c) {
        if ((null == e.defaultValue && (e.defaultValue = "IN"), "" !== d)) {
          var a = "",
            p = 0,
            u = /function\s([^(]{1,})\(/.exec(e.onSelect.toString()),
            m = jQuery.inArray(
              e.defaultValue.toString().toLowerCase(),
              asgv.data.topCountry
            );
          ("undefined" == typeof e.defaultValue || "" === e.defaultValue) &&
            (e.defaultValue = "IN"),
            -1 < m &&
              asgv.data.topCountry.splice(
                jQuery.inArray(
                  e.defaultValue.toString().toLowerCase(),
                  asgv.data.topCountry
                ),
                1
              ),
            "true" === e.showmore &&
              -1 === m &&
              (d.isd = asgv.data.isd.concat(d.isd)),
            asgv.data.topCountry.unshift(
              e.defaultValue.toString().toLowerCase()
            ),
            0 === $("#" + e.element + " dt a").length &&
              ((a =
                '<dt><a><span></span><div class="as_arrow"></div></a><span class="value" ></span></dt>'),
              (a += '<dd> <ul class="country_list"></ul></dd> '),
              $("#" + e.element).append(a)),
            $.each(d.isd, function (t) {
              "undefined" != typeof e.defaultValue &&
                "undefined" != typeof d.isd[t].data.iso &&
                d.isd[t].data.iso.toString().toLowerCase() ===
                  e.defaultValue.toString().toLowerCase() &&
                (e.onSelect.call(this, c.event, d.isd[t]), (p = 1)),
                (a =
                  '<li class="country_list_item" onclick=\'javascript:' +
                  u[1] +
                  "(event," +
                  JSON.stringify(d.isd[t]).replace(/'/g, "\xE2\u20AC\u2122") +
                  ")'><span style=\"background-position:0px -" +
                  11 * d.isd[t].data.icon_order +
                  'px"></span>'),
                (a += "<a>" + d.isd[t].label + "</a></li>"),
                "true" === e.showmore
                  ? d.isd[t].data.iso.toString().toLowerCase() !=
                      e.defaultValue.toString().toLowerCase() &&
                    -1 < !m &&
                    $("#" + e.element + " ul").append(a)
                  : $("#" + e.element + " ul").append(a),
                "true" === e.showmore &&
                  d.isd[t].data.iso.toString().toLowerCase() ===
                    e.defaultValue.toString().toLowerCase() &&
                  $("#" + e.element + " ul").prepend(a);
            }),
            "true" === e.showmore
              ? (-1 < m &&
                  $("#" + e.element + " ul").append(
                    '<li class="showmore"><a onclick=\'Suggester({"type":"isd","element":"' +
                      e.element +
                      '",fields: "cname,iso,icon_order",displayFields:"cname,value",displaySeparator:"  +","defaultValue":"' +
                      e.defaultValue +
                      '","showmore" : "false","onSelect":' +
                      u[1] +
                      "});return;'>Show More</a></li>"
                  ),
                activateDropDown(e.element))
              : ($(
                  "#" + e.element + " ul li.country_list_item:nth-child(5)"
                ).append("<li style='border-top:1px solid #cccccc;'></li>"),
                $("#" + e.element + " ul li.showmore").remove(),
                addScrollingInDd(e.element));
        }
      },
      IMStore = function () {
        var t = asgv.domain1 + "storage/store-v15.html";
        (this.url = document.URL), (this.childURL = t);
        var e = { modId: "*", key: "*", data: "*", url: this.url };
        try {
          if ("undefined" == typeof _IMStore_initialized) {
            _IMStore_initialized = !0;
            var o = document.createElement("IFRAME");
            o.setAttribute("src", t),
              (o.style.visibility = "hidden"),
              o.setAttribute("id", "storageFrame"),
              o.setAttribute("name", "storageFrame"),
              (o.style.width = "0px"),
              (o.style.height = "0px"),
              document.body.appendChild(o),
              $("#storageFrame").load(function () {
                (IMStore.msgHandler = o.contentWindow),
                  IMStore.msgHandler.postMessage(e, t);
              }),
              0 < $("iframe#storageFrame").length && (storeLoaded = !0),
              $(document).ready(function () {
                storeLoaded ||
                  (document.body.appendChild(o),
                  $("#storageFrame").load(function () {
                    (IMStore.msgHandler = o.contentWindow),
                      IMStore.msgHandler.postMessage(e, t);
                  }));
              });
          }
        } catch (t) {}
      },
      defaultContextData = function (t, e, a) {
        return (
          (con = []),
          $.ajax({
            url: t,
            dataType: "json",
            cache: !0,
            data: {
              tag: "defcon",
              limit: 10,
              type: "product",
              catid: e,
              mcatid: a,
              v: asgv.version || -1,
            },
            success: function success(e) {
              if (
                "undefined" != typeof e &&
                "undefined" != typeof e.product &&
                e.product
              )
                for (i = 0; i < e.product.length; i++)
                  if (
                    "undefined" != typeof e.product[i] &&
                    "undefined" != typeof e.product[i].value
                  ) {
                    var t = e.product[i].value;
                    con.push(t);
                  }
              asgv.context = con;
            },
          }),
          con
        );
      },
      exactMatchResults = function (e, t, a) {
        if ("city-state" == a) return e;
        var o = [],
          d = "";
        if (
          ((t = t.trim().toString().toLowerCase()),
          (t = t.replace(/(e$|es$|y$|ies$|s$)/i, "")),
          "undefined" != typeof e && null != e && 0 != e.length)
        )
          for (var s = 0; s < e.length; s++)
            "undefined" != typeof e[s] &&
              null != e[s] &&
              "undefined" != typeof e[s].value &&
              "" != e[s].value &&
              ((d = e[s].value.toString().toLowerCase()),
              (d = d.replace(/(e$|es$|y$|ies$|s$)/i, "")),
              d === t && o.push(e[s]));
        return o;
      },
      sortingResults = function (e) {
        var t = [];
        if ("undefined" != typeof e && 0 != e.length)
          for (var a = 0; a < e.length; a++)
            "undefined" != typeof e[a] &&
              "undefined" != typeof e[a].value &&
              "" != e[a].value &&
              t.push(e[a]);
        return t;
      },
      getGidVidUserData = function () {
        if (0 == asgv.userData) {
          if (
            "undefined" == typeof asgv.gid &&
            -1 < document.cookie.indexOf(" ImeshVisitor") &&
            -1 < document.cookie.indexOf("glid%3D")
          ) {
            asgv.mode = "identified";
            var e = document.cookie.substring(
              document.cookie.indexOf("glid%3D") + 7
            );
            (asgv.gid = "g" + e.substring(0, e.indexOf("%"))),
              (asgv.p_gid = e.substring(0, e.indexOf("%")));
          }
          var o = readGaCookie("_ga");
          if (((asgv.p_vid = o), "undefined" != typeof o))
            var d = o.split("."),
              s = d[2];
          if (
            ("undefined" == typeof asgv.vid &&
              "undefined" != typeof s &&
              (asgv.vid = "v" + s),
            "" == asgv.reqBoosters &&
              -1 < document.cookie.indexOf(" ImeshVisitor") &&
              -1 < document.cookie.indexOf("ct%3D"))
          ) {
            var e = document.cookie.substring(
              document.cookie.indexOf("ct%3D") + 5
            );
            if ("" != e.substring(0, e.indexOf("%"))) {
              asgv.reqBoosters =
                "prod_city:" +
                e.substring(0, e.indexOf("%7")).toString().toLowerCase();
              var l = asgv.reqBoosters
                .substring(asgv.reqBoosters.indexOf("prod_city:") + 10)
                .toString()
                .toLowerCase()
                .replace(/%20/g, " ")
                .split();
              setTimeout(function () {
                "undefined" != typeof asgv.store.setData &&
                -1 == jQuery.inArray(l[0], asgv.store.getData("ims", "cities"))
                  ? "undefined" == typeof asgv.store.getData("ims", "cities")
                    ? asgv.store.setData("ims", "cities", l)
                    : asgv.store.setData(
                        "ims",
                        "cities",
                        l.concat(asgv.store.getData("ims", "cities"))
                      )
                  : "";
              }, 4e3);
            }
          }
          if (
            0 == asgv.userData &&
            null != asgv.vid &&
            null != asgv.store.getData
          ) {
            asgv.userData = !0;
            var a =
              "undefined" == typeof asgv.store.getData ||
              null == asgv.store.getData("ss", "pdmTime") ||
              3600 <
                new Date().getTime() / 1e3 -
                  asgv.store.getData("ss", "pdmTime");
            if (a) ({ storage: "ims", vid: asgv.vid, gid: asgv.gid });
          }
        }
      },
      storeLoaded = !1,
      Suggester = function (m) {
        var e = Math.ceil;
        try {
          if (!m) return;
          m.maxSuggestLen || (m.maxSuggestLen = 45),
            m.frstcapcase || (m.frstcapcase = 2),
            m.minStringLengthToDisplaySuggestion ||
              (m.minStringLengthToDisplaySuggestion = 1),
            m.defaultSuggChk && (m.minStringLengthToDisplaySuggestion = 0),
            "undefined" == typeof m.recentData && (m.recentData = !0),
            m.minStringLengthToFetchSuggestion ||
              (m.minStringLengthToFetchSuggestion = 0),
            m.suggestionsToFetch || (m.suggestionsToFetch = 40),
            m.classPlaceholder || (m.classPlaceholder = "ui-placeholder-input"),
            m.maxCharForSuggestionRequest ||
              (m.maxCharForSuggestionRequest = 29),
            "undefined" == typeof m.highlight && (m.highlight = "normal"),
            "undefined" == typeof m.defaultBox && (m.defaultBox = !1),
            "undefined" != typeof m.type &&
              "country" === m.type.toString().toLowerCase() &&
              (m.method = "beginString"),
            "undefined" != typeof m.type &&
              "isd" === m.type.toString().toLowerCase() &&
              ((m.minStringLengthToDisplaySuggestion = 0),
              (m.suggestionsToFetch = 999),
              (m.iconHeight = asgv.isd.iconHeight),
              "undefined" == typeof m.showmore && (m.showmore = "true")),
            (("undefined" == typeof m.match && "undefined" == typeof m.type) ||
              "city" === m.type.toString().toLowerCase() ||
              -1 < m.type.toString().toLowerCase().indexOf("product")) &&
              (m.match = "fuzzy"),
            "undefined" == typeof m.match && (m.match = "exact"),
            "undefined" == typeof m.type && (m.type = asgv.type),
            "undefined" != typeof m.type &&
              m.type === asgv.type &&
              0 > window.location.href.indexOf("hellotrade") &&
              (m.fields =
                0 > window.location.href.indexOf("m.indiamart")
                  ? "type_data,sort_order"
                  : ""),
            m.rowsToDisplay ||
              (m.rowsToDisplay =
                m.type === asgv.type &&
                0 > window.location.href.indexOf("m.indiamart")
                  ? 10
                  : 5),
            "undefined" == typeof m.relatedData &&
              "undefined" != typeof m.type &&
              m.type === asgv.type &&
              (m.relatedData = "true"),
            "undefined" != typeof m.type &&
              m.type === asgv.type &&
              (m.highlight = "normal"),
            "undefined" == typeof m.module && (m.module = ""),
            "undefined" != typeof m.module &&
              "" != m.module &&
              (m.module = "-" + m.module),
            "undefined" == typeof m.dispstyle && (m.dispstyle = 1),
            "undefined" == typeof m.pagetyp && (m.pagetyp = "p"),
            "undefined" == typeof m.showloc && (m.showloc = 0),
            "undefined" == typeof m.firstclck && (m.firstclck = 0),
            (this.config = m),
            (asgv.context = []),
            (asgv.relmcatcity = []),
            (asgv.ld = []),
            (this.recent = function (a, d, l) {
              var c = {
                searches: { limit: 50 },
                pdata: { limit: 50 },
                cities: { limit: 10 },
                mcats: { limit: 50 },
                mcatnames: { limit: 50 },
                cats: { limit: 10 },
                groups: { limit: 10 },
                sites: { limit: 25 },
                latLong: { limit: 10 },
                prodId: { limit: 20 },
                blsearches: { limit: 100 },
                location: { limit: 50 },
                prod_data: { limit: 50 },
                mcat_data: { limit: 50 },
                keyw_data: { limit: 100 },
                city_data: { limit: 25 },
                meta_data: { limit: 3 },
              };
              if ("undefined" != typeof d && "string" == typeof a) {
                var t = {};
                (t[a] = d), (a = t);
              }
              if ("object" == _typeof(a)) {
                var o = {};
                $.each(a, function (a, e) {
                  if (-1 == jQuery.inArray(a, perks))
                    "cities" !== a || e.match(/^[a-zA-Z ]+$/) || (e = ""),
                      "location" !== a || e.match(/^[:a-zA-Z ]+$/) || (e = ""),
                      "cats" === a && "" != asgv.cat && (asgv.cat = e),
                      "mcats" === a && "" != asgv.mcat && (asgv.mcat = e),
                      "cats" === a && (asgv.cat = e),
                      "cities" === a && (asgv.reqBoosters = "prod_city:" + e),
                      "" !== e &&
                        ((o[a] = e.toString().toLowerCase()),
                        h.getSetRecent(a, e, l, c));
                  else {
                    var d = { gid: asgv.p_gid, vid: asgv.p_vid },
                      s = [
                        {
                          m_time: new Date().getTime(),
                          p_gid: d.gid,
                          p_vid: d.vid,
                        },
                      ],
                      p = (per_gid = per_vid = ""),
                      u = asgv.store.getData("ims", "meta_data");
                    u
                      ? ((p = u[0].m_time),
                        (per_gid = u[0].p_gid),
                        (per_vid = u[0].p_vid))
                      : asgv.store.setData("ims", "meta_data", s),
                      (p && per_gid && per_vid) ||
                        asgv.store.setData("ims", "meta_data", s);
                    var m = asgv.store.getData("ims", a) || [];
                    -1 != jQuery.inArray(a, perks) &&
                      "" != e &&
                      "undefined" != typeof e &&
                      (void 0 === e[0].type_update &&
                        ((e = e.concat(m)),
                        (e = e.reduce(function (e, t) {
                          var a = e.filter(function (e) {
                            return t.id == e.id;
                          });
                          return 0 == a.length && e.push(t), e;
                        }, [])),
                        (tl = e.length),
                        25 < tl && (e = e.splice(0, 24))),
                      asgv.store.setData("ims", a, e));
                  }
                }),
                  0 < Object.keys(o).length &&
                    ((o.vid = asgv.vid),
                    (o.gid = asgv.gid),
                    (o.type = "recent"),
                    (o.dName = window.location.host)),
                  asgv.cat &&
                    (asgv.context = defaultContextData(
                      asgv.domain + "suggest/suggester.php",
                      asgv.cat,
                      asgv.mcat
                    ));
              } else if (!d) return h.getSetRecent(a, d, l, c);
            }),
            (this.getSetRecent = function (d, l, c, p) {
              var a = navigator.userAgent,
                u = a.match(/MSIE (\d)/);
              if (-1 != jQuery.inArray(d, perks)) {
                var m = asgv.store.getData((c = "ims"), d) || [],
                  g = ["0", "-1", void 0, "undefined", null, "null", "type"];
                if (null == u || 9 <= u[1]) return (m = $(m).not(g).get()), m;
              } else {
                "searches" == d && (d = "keyw_data"),
                  d in p ||
                    "undefined" != typeof c ||
                    ((l = d), (d = "keyw_data")),
                  "undefined" == typeof c && (c = "ims");
                var f = asgv.store.getData(c, d) || [],
                  g = ["0", "-1", void 0, "undefined", null, "null", "type"];
                if (null == u || 9 <= u[1])
                  if (((f = $(f).not(g).get()), "keyw_data" == d))
                    var h = f.map(function (t) {
                      return "undefined" == typeof t.id
                        ? "string" == typeof t
                          ? t.toString().toLowerCase()
                          : null
                        : t.id.toString().toLowerCase();
                    });
                  else
                    var h = f.map(function (t) {
                      return t ? t.toString().toLowerCase() : null;
                    });
                return (
                  (r = Suggester.getArrayCaseInsensitiveMatch(l, f)),
                  1e3 <= JSON.stringify(f).length && f.splice(r, 1),
                  (-1 != r && f.splice(r, 1),
                  "cities" === d
                    ? l
                      ? (l = void asgv.store.setData(
                          c,
                          d,
                          Suggester.getTopN([l].concat(f), p[d].limit)
                        ))
                      : h
                    : l
                    ? ((l = l.toString().toLowerCase()),
                      void asgv.store.setData(
                        c,
                        d,
                        Suggester.getTopN([l].concat(f), p[d].limit)
                      ))
                    : h)
                );
              }
            }),
            (this.setCursor = function (a, e, t) {
              a.setSelectionRange
                ? (a.focus(), a.setSelectionRange(e, t))
                : a.createTextRange &&
                  ((range = a.createTextRange()),
                  range.collapse(!0),
                  range.moveEnd("character", t),
                  range.moveStart("character", e),
                  range.select());
            });
          var p = "#" + m.element,
            t = function i() {
              var t = document.createElement("input");
              return "placeholder" in t;
            };
          (this.placeholderSupport = t()),
            (this.changePlaceholder = function (e) {
              if (($(p).attr("placeholder", e), this.placeholderSupport))
                $(p).attr("placeholder", e);
              else {
                (!$(p).val() || $(p).hasClass(m.classPlaceholder)) &&
                  ($(p)
                    .val($(p).attr("placeholder"))
                    .addClass(m.classPlaceholder),
                  !0 === $(p).is(":focus") &&
                    this.setCursor(
                      document.getElementById($(p).attr("id")),
                      0,
                      0
                    ));
                var t = this;
                $(p).click(function () {
                  $(this).val() == $(p).attr("placeholder") &&
                    t.setCursor(document.getElementById($(p).attr("id")), 0, 0);
                }),
                  $(p).keydown(function () {
                    $(this).val() == $(p).attr("placeholder") &&
                      $(this).val("").removeClass(m.classPlaceholder);
                  }),
                  $(p).on("paste", function () {
                    $(this).val() === $(p).attr("placeholder") &&
                      $(this).val("").removeClass(m.classPlaceholder);
                  }),
                  $(p).focus(function () {
                    ($(p).val() && $(this).val() != $(p).attr("placeholder")) ||
                      t.setCursor(
                        document.getElementById($(p).attr("id")),
                        0,
                        0
                      );
                  }),
                  $(p).blur(function () {
                    "" == $(this).val() &&
                      $(this)
                        .val($(p).attr("placeholder"))
                        .addClass(m.classPlaceholder);
                  });
              }
            }),
            this.changePlaceholder(m.placeholder);
          var h = this,
            a = "";
          (h.keyDownRecorded = !1),
            (h.displayRecorded = !1),
            (h.serverDisplayRecorded = !1),
            (h.preFilledTerm = ""),
            (h.selectionRecorded = !1),
            (h.displayListLength = 0),
            (h.previousTerm = ""),
            (h.pasteFired = !1),
            (this.searchBoxVal = function (a) {
              var e = $(a).val();
              (e =
                "string" == typeof e && "" !== e
                  ? -1 < e.indexOf(" in ") || -1 < e.indexOf(" from ")
                    ? cleanString(e, 1)
                    : e
                  : ""),
                $(a).autocomplete("search", e);
            }),
            (this.autoSearch = function (e) {
              $(e).bind("focus", function () {
                m.type === asgv.type && h.searchBoxVal(e);
              }),
                $(e).bind("click", function () {
                  setTimeout(function () {
                    $(".ui-menu:not(.dsp)").css("display", "none"),
                      0 > e.indexOf("search_string") &&
                        $(".autocomplete-box")
                          .removeClass("dsp")
                          .css("display", "none"),
                      h.searchBoxVal(e);
                  }, 200);
                }),
                $(e).bind("paste", function () {
                  setTimeout(function () {
                    (h.pasteFired = !0), h.searchBoxVal(e);
                  }),
                    setTimeout(function () {
                      h.pasteFired = !1;
                    }, 2e3);
                }),
                $(e).ready(function () {
                  setTimeout(function () {
                    $(e).attr("autocomplete", atocmplt_attr);
                  }, 1500);
                });
            }),
            this.autoSearch(p),
            (this.isDefaultBox = function (t) {
              1 == t &&
                $(document).keydown(function (t) {
                  var e = t.which,
                    o = document.activeElement.name;
                  if (
                    (void 0 === o || "" === o) &&
                    65 <= e &&
                    90 >= e &&
                    !t.ctrlKey
                  ) {
                    var a = $(p).val();
                    $(p).focus(),
                      (a =
                        "string" == typeof a && "" !== a ? $.trim(a) + " " : a),
                      $(p).val(a);
                  }
                });
            }),
            (this.onExplicitChangeSuccess = function (d, e, t, s) {
              var a;
              $.each(d, function (e) {
                return d && void 0 !== d[e]._list
                  ? void (a = { item: d[e]._list[0] })
                  : d && void 0 !== d[e][0]
                  ? void (a = { item: d[e][0] })
                  : void (a = { item: "" });
              }),
                e.onExplicitChange.call(this, s.event, a);
            }),
            (this.onEnd = function () {
              var t = $("#" + m.element)
                  .val()
                  .toString()
                  .toLowerCase(),
                a =
                  -1 < document.cookie.indexOf("xnHist=") &&
                  -1 < document.cookie.indexOf("ss%3D")
                    ? document.cookie.substring(
                        document.cookie.indexOf("xnHist="),
                        document.cookie.indexOf("ss%3D") + 5
                      )
                    : -1 < document.cookie.indexOf("xnHist=")
                    ? document.cookie.substring(
                        document.cookie.indexOf("xnHist="),
                        document.cookie.indexOf(
                          ";",
                          document.cookie.indexOf("xnHist=")
                        )
                      ) + "%3Dss%7C"
                    : "xnHist=ss%3D";
              0 === h.displayListLength
                ? ((a += "notDisplayed"),
                  eventTrack(
                    "Auto-Suggest",
                    m.type +
                      m.module +
                      "-mode-" +
                      asgv.mode +
                      "-suggestion-not-displayed-ms-" +
                      500 *
                        e((new Date().getTime() - h.firstKeyDownTime) / 500) +
                      "-paste-" +
                      h.pasteFired,
                    t,
                    0
                  ))
                : 0 < h.displayListLength && !1 === h.selectionRecorded
                ? ((a += "notSelected"),
                  eventTrack(
                    "Auto-Suggest",
                    m.type +
                      m.module +
                      "-mode-" +
                      asgv.mode +
                      "-suggestion-not-selected-ms-" +
                      500 *
                        e((new Date().getTime() - h.firstKeyDownTime) / 500) +
                      "-paste-" +
                      h.pasteFired,
                    t,
                    0
                  ))
                : (a += "selected");
              var d = new Date();
              d.setTime(d.getTime() + 15552e6),
                (document.cookie =
                  a +
                  ";expires=" +
                  d.toGMTString() +
                  ";domain=.indiamart.com;path=/;");
            }),
            (this.requestData = function (d, e, l, t) {
              var a =
                  "product" == d.type
                    ? "suggest/suggester.php"
                    : "suggest/suggest.php",
                o =
                  ("undefined" == typeof l.type || "mcat" != l.type) &&
                  ("undefined" == typeof d.type || "mcat" != d.type);
              $.ajax({
                url: d.url || asgv.domain + a,
                dataType: "json",
                cache: o,
                data: {
                  q: l.searchTerm.trim() || l.term.trim(),
                  tag: "suggestions",
                  limit: l.limit || d.suggestionsToFetch,
                  type: l.type || d.type,
                  fields: l.fields || d.fields,
                  filters: l.filters || d.filters,
                  method: l.method || d.method,
                  display_fields: l.displayFields || d.displayFields,
                  display_separator: l.displaySeparator || d.displaySeparator,
                  match: l.match || d.match,
                  catid: asgv.cat,
                  mcatid: asgv.mcat,
                  v: asgv.version || -1,
                },
                success: function success(a) {
                  if (
                    (a &&
                      "undefined" != typeof a.product &&
                      null != a.product &&
                      delete a.debugQ,
                    null != l.cache)
                  ) {
                    l.sugg = new Suggestions();
                    var c = l.sugg.DIRECT,
                      p = {};
                    if (
                      ((p.valuesCount = 0),
                      (p.dTypeCount = 0),
                      l.type === asgv.type)
                    ) {
                      var s = a.mcat;
                      delete a.mcat, (a.mcat = s);
                    }
                    a &&
                      null != a.product &&
                      $.each(a, function (e, t) {
                        if (30 < cleanString(l.searchTerm).length)
                          c = l.sugg.COMPLETE;
                        else if (t.length === d.suggestionsToFetch)
                          return (c = l.sugg.FILTERED), !1;
                      }),
                      $.each(a, function (e) {
                        if (
                          l.term === l.searchTerm &&
                          "product" == e &&
                          "undefined" !=
                            typeof l.cache._cache[
                              cleanString(l.term).substr(
                                0,
                                cleanString(l.term).length - 1
                              )
                            ]
                        ) {
                          "fuzzy" == d.match &&
                            (a[e] = Suggester.getTopN(
                              previouskeyCache(
                                cleanString(l.term, 1),
                                l.cache._cache[
                                  cleanString(l.term).substr(
                                    0,
                                    cleanString(l.term).length - 1
                                  )
                                ]._list[e],
                                e,
                                {},
                                d
                              )[e].concat(a[e]),
                              l.rowsToDisplay,
                              l.maxSuggestLen
                            ));
                        }
                      }),
                      l.sugg.list(a, c),
                      "city" == l.type || "domain" == d.type
                        ? l.cache.cache(l.term, d, l.term, l.sugg)
                        : l.cache.cache(
                            cleanString(l.searchTerm),
                            d,
                            cleanString(l.searchTerm),
                            l.sugg
                          );
                  }
                  "function" == typeof l.onSuccess &&
                    l.onSuccess(a, d, e, l, t);
                },
              });
            }),
            (this.renderData = function (t, e, m, a, g) {
              var o = a.term.trim(),
                s = a.searchTerm;
              if (
                o.length >= e.minStringLengthToDisplaySuggestion &&
                ("city" == a.type ||
                  "domain" === e.type ||
                  cleanString(o) == cleanString(s))
              ) {
                "domain" === e.type
                  ? m.changeList(e, a.addBeforCity + "@", t.domain)
                  : "";
                var f = [],
                  h = "",
                  y = e.type ? e.type : "keyword";
                if (("city" != e.type && "city" != a.type) || 1 != e.recentData)
                  e.type == asgv.type &&
                    1 == e.recentData &&
                    ((f =
                      "bl" == e.pagetyp
                        ? Suggester.getTopN(
                            Suggester.match(
                              o.trim(),
                              m.recent("blsearches"),
                              e.method
                            ),
                            e.rowsToDisplay,
                            e.maxSuggestLen
                          )
                        : Suggester.getTopN(
                            Suggester.match(
                              o.trim(),
                              m.recent("keyw_data").map(function (e) {
                                return "undefined" == typeof e.id
                                  ? "undefined" == typeof e.label
                                    ? "string" == typeof e
                                      ? e.replace(" near me", "")
                                      : null
                                    : e.label.replace(" near me", "")
                                  : e.id.replace(" near me", "");
                              }),
                              e.method
                            ),
                            e.rowsToDisplay,
                            e.maxSuggestLen
                          )),
                    (h = "bl" == e.pagetyp ? "blrcnt" : "rcnt"),
                    "undefined" != typeof f &&
                      $.each(f, function (a, e) {
                        f[a] = {
                          label: e.replace(/\w+/g, function (t) {
                            return (
                              t.charAt(0).toUpperCase() +
                              t.substr(1).toString().toLowerCase()
                            );
                          }),
                          value: e.replace(/\w+/g, function (t) {
                            return (
                              t.charAt(0).toUpperCase() +
                              t.substr(1).toString().toLowerCase()
                            );
                          }),
                          cls: h,
                        };
                      }),
                    $.each(
                      Suggester.match(o.trim(), asgv.context, e.method),
                      function (a, e) {
                        f.push({
                          label: e.toString().toLowerCase(),
                          value: e.toString().toLowerCase(),
                          cls: "defaultcon",
                        });
                      }
                    ),
                    $.each(
                      Suggester.match(o.trim(), asgv.topSearches, e.method),
                      function (a, e) {
                        f.push({
                          label: e.toString().toLowerCase(),
                          value: e.toString().toLowerCase(),
                          cls: "topsearches",
                        });
                      }
                    ));
                else {
                  if (
                    ((f = Suggester.match(o, m.recent("cities"), e.method)),
                    (f = f.map(Suggester.toTitleCase)),
                    "city" != e.type)
                  ) {
                    f =
                      1 == e.showloc
                        ? Suggester.match(s, m.recent("location"), e.method)
                        : Suggester.match(s, m.recent("cities"), e.method);
                    var c = e.displaySeparator;
                    -1 < f.indexOf(":") && (f = f.replace(":", c));
                    for (var b = 0; b < f.length; b++)
                      f[b] =
                        o.substring(0, o.length - s.length) +
                        f[b].replace(/(^| )(\w)/g, function (t) {
                          return t.toUpperCase();
                        });
                  }
                  $.each(f, function (a, e) {
                    f[a] = { label: e, value: e, cls: "rcnt" };
                  });
                }
                if (
                  ("undefined" != typeof a.sugg._list.city &&
                    0 < a.sugg._list.city.length &&
                    cleanString(o) != cleanString(s) &&
                    m.changeList(a, a.addBeforCity, a.sugg._list.city),
                  (f = m.createDpList(
                    t,
                    Suggester.getTopN(f, e.rowsToDisplay, e.maxSuggestLen),
                    e.rowsToDisplay,
                    m,
                    a.term,
                    e.element,
                    e.type
                  )),
                  g(
                    Suggester.remDuplicateImg(
                      Suggester.getTopN(
                        f,
                        e.rowsToDisplay,
                        e.maxSuggestLen,
                        e.frstcapcase
                      )
                    )
                  ),
                  (m.displayListLength = f.length),
                  0 < f.length)
                ) {
                  var x = new Date().getTime() - m.firstKeyDownTime;
                  m.displayRecorded ||
                    (eventTrack(
                      "Auto-Suggest",
                      y + e.module + "-mode-" + asgv.mode + "-appearance-speed",
                      "after-ms-" + x + "-after-char-" + o.length,
                      x
                    ),
                    (m.displayRecorded = !0)),
                    m.serverDisplayRecorded ||
                      "undefined" == typeof m.prefix ||
                      m.prefix.term != a.searchTerm ||
                      ((m.prefix.fetchTime =
                        new Date().getTime() - m.prefix.keydownTime),
                      eventTrack(
                        "Auto-Suggest",
                        y +
                          e.module +
                          "-mode-" +
                          asgv.mode +
                          "-appearance-speed-server",
                        "after-ms-" + m.prefix.fetchTime,
                        m.prefix.fetchTime
                      ),
                      (m.serverDisplayRecorded = !0));
                }
                e.type == asgv.type && m.searchBoxVal(p);
              }
            }),
            (this.changeList = function (o, e, t) {
              for (var d = t, a = 0; a < d.length; a++)
                d[a].value = d[a].label =
                  e + d[a].label.toString().toLowerCase();
            }),
            (this.createDpList = function (o, d, s, l, e, a, c) {
              var p = [],
                u = [],
                m = [],
                g = {},
                f = "#".concat(a);
              (exact_data = exactMatchResults(o[c], e, c)),
                (o[c] = exact_data.concat(o[c])),
                $.each(o, function (t, e) {
                  if ("mcat" != t) {
                    if (
                      (null != e[0] &&
                        (g = Suggester.getTopN(
                          e,
                          125,
                          l.config.maxSuggestLen,
                          l.config.frstcapcase
                        )),
                      "product" == t)
                    ) {
                      for (var a = d.length - 1; -1 < a; a--)
                        $.each(g, function (t, e) {
                          return "undefined" != typeof e &&
                            "undefined" != typeof e.data &&
                            "undefined" != typeof d[a].label &&
                            d[a].label.toString().toLowerCase() ==
                              e.label.toString().toLowerCase()
                            ? ((d[a].data = e.data), g.splice(t, 1), !1)
                            : void 0;
                        });
                      d = d.concat(g);
                    }
                    "mcat" !== t &&
                      "product" !== t &&
                      (d = Suggester.getTopN(
                        d.concat(e),
                        s,
                        l.config.maxSuggestLen,
                        l.config.frstcapcase
                      ));
                  } else d = Suggester.getTopN(d.concat(e), s, l.config.maxSuggestLen, l.config.frstcapcase);
                }),
                (exact_data = exactMatchResults(d, e, c)),
                (d = exact_data.concat(d));
              var h = [];
              return (
                $.each(d, function (e, t) {
                  -1 === jQuery.inArray(t, h) && h.push(t);
                }),
                (d = h),
                (u = d.slice(0, 20)),
                (m = d.slice(20, d.length)),
                (p = sortingResults(u, e, exact_data, c)),
                (p = p.concat(m)),
                (d = p),
                d
              );
            }),
            (this.finish = function () {
              this.serverDisplayRecorded =
                this.displayRecorded =
                this.selectionRecorded =
                  !1;
            }),
            (onDocReady = function onDocReady() {
              var y = new SuggestionCache({ match: m.match });
              if ("isd" === m.type) {
                var t =
                    "undefined" == typeof m.element
                      ? ""
                      : m.element.replace(/\W+/g, "_"),
                  d = {};
                (d.term = ""),
                  (d.limit = 500),
                  (d.type = "isd"),
                  (d.callbackstr = "Suggester_callback_" + m.method + t),
                  (d.searchTerm = ""),
                  (d.cache = y),
                  (d.onSuccess = renderIsd),
                  (m.defaultValue =
                    "undefined" != typeof m.defaultValue &&
                    "" === m.defaultValue
                      ? "IN"
                      : m.defaultValue);
                var o = "false";
                return (
                  $.each(asgv.data.isd, function (e, t) {
                    t.data.iso === m.defaultValue && (o = "true");
                  }),
                  void ("undefined" != typeof m.showmore &&
                  "true" === m.showmore &&
                  "true" === o
                    ? renderIsd(asgv.data, m, h, d, "")
                    : h.requestData(m, h, d, ""))
                );
              }
              var l = $(p)
                .autocomplete({
                  delay: 10,
                  source: function source(b, e) {
                    (b.term = b.term.toString().toLowerCase()),
                      (b.cache = y),
                      (a = b.term),
                      (b.callbackstr = "Suggester_callback_"),
                      (b.searchTerm = cleanString(a, 1)),
                      (b.onSuccess = h.renderData);
                    var t = m.type ? m.type : "keyword";
                    h.keyDownRecorded ||
                      (eventTrack(
                        "Auto-Suggest",
                        t + m.module + "-mode-" + asgv.mode + "-keydown",
                        "first-keydown",
                        1
                      ),
                      (h.firstKeyDownTime = new Date().getTime()),
                      (h.preFilledTerm = a),
                      (h.keyDownRecorded = !0)),
                      h.serverDisplayRecorded ||
                        "undefined" != typeof h.prefix ||
                        0 != Math.floor(10 * Math.random()) ||
                        (h.prefix = {
                          keydownTime: new Date().getTime(),
                          term: b.searchTerm,
                        });
                    var o = 3;
                    "city" == m.type && (o = 1),
                      a.length == o && new Date().getTime(),
                      (h.termWords = (a.match(/\s+/g) || []).length);
                    var s = m.source;
                    if (s && a.length >= m.minStringLengthToDisplaySuggestion) {
                      if (m.finder) s = m.finder(s, a);
                      else {
                        (a = cleanString(b.term, { preserveSpaces: !0 })),
                          $.each(s, function (a, e) {
                            "string" == typeof e &&
                              (s[a] = { label: e, value: e });
                          });
                        var x;
                        (x =
                          m.method &&
                          "beginstring" == m.method.toString().toLowerCase()
                            ? new RegExp("^" + a, "i")
                            : new RegExp("\\b" + a, "i")),
                          (s = $.grep(s, function (t) {
                            var e = cleanString(t.label, {
                              preserveSpaces: !0,
                            });
                            return x.test(e);
                          }));
                      }
                      if (
                        ($.each(s, function (a, e) {
                          "string" == typeof e &&
                            (s[a] = { label: e, value: e });
                        }),
                        e(
                          Suggester.getTopN(
                            s,
                            m.rowsToDisplay,
                            m.maxSuggestLen,
                            m.frstcapcase
                          )
                        ),
                        !h.displayRecorded)
                      ) {
                        var v = new Date().getTime() - h.firstKeyDownTime,
                          w =
                            a.length === h.preFilledTerm.length &&
                            a === h.preFilledTerm
                              ? 0
                              : a.length;
                        eventTrack(
                          "Auto-Suggest",
                          t +
                            m.module +
                            "-mode-" +
                            asgv.mode +
                            "-appearance-speed",
                          "after-ms-" + v + "-after-char-" + w,
                          v
                        ),
                          (h.displayRecorded = !0);
                      }
                    } else {
                      "domain" === m.type &&
                        -1 < a.indexOf("@") &&
                        ((b.addBeforCity = a.substr(0, a.indexOf("@"))),
                        (a = b.searchTerm = " ")),
                        (a = cleanString(a, 1));
                      var _,
                        k = m.displaySeparator;
                      (b.addPartialTerm = ""),
                        (_ =
                          "domain" === m.type
                            ? b.cache.cache(b.term, m, b.term)
                            : b.cache.cache(a, m, a)),
                        (inCity =
                          !!(
                            -1 < a.indexOf(" in") || -1 < a.indexOf(" from")
                          ) && a),
                        (a = cleanString(a));
                      var C = [],
                        S = [],
                        T = [],
                        D = "",
                        L = m.element,
                        A = m.type,
                        O = [];
                      if (
                        ((isSolr = !0),
                        m.type == asgv.type && 1 == m.recentData
                          ? ((C =
                              "bl" == m.pagetyp
                                ? Suggester.getTopN(
                                    Suggester.match(
                                      a,
                                      h.recent("blsearches"),
                                      m.method
                                    ),
                                    m.rowsToDisplay,
                                    m.maxSuggestLen,
                                    m.frstcapcase
                                  )
                                : Suggester.getTopN(
                                    Suggester.match(
                                      a,
                                      h
                                        .recent("keyw_data")
                                        .map(function (e) {
                                          return "undefined" == typeof e.id
                                            ? "undefined" == typeof e.label
                                              ? "string" == typeof e
                                                ? e.replace(" near me", "")
                                                : null
                                              : e.label.replace(" near me", "")
                                            : e.id.replace(" near me", "");
                                        })
                                        .concat(
                                          h
                                            .recent("prod_data")
                                            .map(function (e) {
                                              return e.name;
                                            })
                                        )
                                        .concat(
                                          h
                                            .recent("mcat_data")
                                            .map(function (e) {
                                              return e.name;
                                            })
                                        ),
                                      m.method
                                    ),
                                    m.rowsToDisplay,
                                    m.maxSuggestLen,
                                    m.frstcapcase
                                  )),
                            (D = "bl" == m.pagetyp ? "blrcnt" : "rcnt"),
                            $.each(C, function (a, e) {
                              (C[a] = {
                                label: e.toString().toLowerCase(),
                                value: e.toString().toLowerCase(),
                                cls: D,
                              }),
                                isSolr && (S[a] = C[a]);
                            }),
                            $.each(
                              Suggester.match(
                                b.term.trim(),
                                asgv.context,
                                m.method
                              ),
                              function (a, e) {
                                C.push({
                                  label: e.toString().toLowerCase(),
                                  value: e.toString().toLowerCase(),
                                  cls: "defaultcon",
                                }),
                                  isSolr &&
                                    T.push({
                                      label: e.toString().toLowerCase(),
                                      value: e.toString().toLowerCase(),
                                      cls: "defaultcon",
                                    });
                              }
                            ),
                            $.each(
                              Suggester.match(
                                b.term.trim(),
                                asgv.topSearches,
                                m.method
                              ),
                              function (a, e) {
                                C.push({
                                  label: e.toString().toLowerCase(),
                                  value: e.toString().toLowerCase(),
                                  cls: "topsearches",
                                }),
                                  isSolr &&
                                    T.push({
                                      label: e.toString().toLowerCase(),
                                      value: e.toString().toLowerCase(),
                                      cls: "topsearches",
                                    });
                              }
                            ),
                            isSolr &&
                              (C = asgv.context.length ? T : T.concat(S)))
                          : "city" == m.type &&
                            1 == m.recentData &&
                            ((C =
                              1 == m.showloc
                                ? Suggester.match(
                                    a,
                                    h.recent("location"),
                                    m.method
                                  )
                                : Suggester.match(
                                    a,
                                    h.recent("cities"),
                                    m.method
                                  )),
                            $.each(C, function (a, e) {
                              -1 < e.indexOf(":") && (e = e.replace(":", k)),
                                (C[a] = {
                                  label: e.replace(/\w+/g, function (t) {
                                    return (
                                      t.charAt(0).toUpperCase() +
                                      t.substr(1).toString().toLowerCase()
                                    );
                                  }),
                                  value: e.replace(/\w+/g, function (t) {
                                    return (
                                      t.charAt(0).toUpperCase() +
                                      t.substr(1).toString().toLowerCase()
                                    );
                                  }),
                                  cls: "rcnt",
                                });
                            })),
                        (a.length >= m.minStringLengthToDisplaySuggestion ||
                          "domain" == m.type) &&
                          (_ && a.trim() == cleanString(b.searchTerm)
                            ? (C = h.createDpList(
                                _.list(),
                                Suggester.getTopN(
                                  C,
                                  m.rowsToDisplay,
                                  m.maxSuggestLen,
                                  m.frstcapcase
                                ),
                                m.rowsToDisplay,
                                h,
                                b.searchTerm,
                                L,
                                A
                              ))
                            : _ &&
                              _.list()[A].length &&
                              -1 < b.searchTerm.indexOf(" ") &&
                              $.each(_.list(), function (t, e) {
                                $.each(e, function (t, e) {
                                  var o = "",
                                    d = 0;
                                  if (
                                    ("undefined" != typeof e.cls &&
                                      "" != e.cls &&
                                      "rcnt" == e.cls &&
                                      (o = e.cls),
                                    "undefined" != typeof e.last_dis &&
                                      "" != e.last_dis &&
                                      (d = e.last_dis),
                                    b.addPartialTerm
                                      .substring(
                                        b.addPartialTerm.trim().lastIndexOf(" ")
                                      )
                                      .trim() ==
                                      e.value.substring(
                                        0,
                                        e.value.indexOf(" ")
                                      ))
                                  ) {
                                    var s =
                                      b.addPartialTerm.substring(
                                        0,
                                        b.addPartialTerm
                                          .trim()
                                          .lastIndexOf(" ") + 1
                                      ) + e.label;
                                    C.push({
                                      label: s,
                                      value: s,
                                      pos: e.pos,
                                      last_dis: d,
                                      cls: o,
                                    });
                                  } else {
                                    var s = b.addPartialTerm + e.label;
                                    C.push({
                                      label: s,
                                      value: s,
                                      data: e.data,
                                      pos: e.pos,
                                      last_dis: d,
                                      cls: "partial",
                                    });
                                  }
                                });
                              })),
                        (exact_data = exactMatchResults(C, b.searchTerm, A)),
                        (C = exact_data.concat(C).concat()),
                        $.each(C, function (e, t) {
                          -1 === jQuery.inArray(t, O) && O.push(t);
                        }),
                        (C = O),
                        (topRes = C.slice(0, 20)),
                        (botRes = C.slice(20, C.length)),
                        (C = sortingResults(
                          topRes,
                          b.searchTerm,
                          exact_data,
                          A
                        ).concat(botRes)),
                        inCity && m.type == asgv.type && 1 == h.displayRecorded)
                      ) {
                        (containsIn = !0),
                          (b.addBeforCity =
                            -1 < inCity.indexOf(" in")
                              ? inCity.substring(0, inCity.indexOf(" in") + 3)
                              : inCity.substring(
                                  0,
                                  inCity.indexOf(" from") + 5
                                )),
                          (b.searchTermCity =
                            -1 < inCity.indexOf(" in")
                              ? inCity
                                  .substring(inCity.indexOf(" in") + 4)
                                  .trim()
                              : inCity
                                  .substring(inCity.indexOf(" from") + 6)
                                  .trim()),
                          asgv.geoCity ||
                            (asgv.geoCity = SuggestUtils.readCookie(
                              "GeoLoc",
                              "lg_ct"
                            )),
                          asgv.ipCity ||
                            (asgv.ipCity = SuggestUtils.readCookie(
                              "iploc",
                              "gctnm"
                            ));
                        for (
                          var E = Suggester.match(
                              b.searchTermCity,
                              h.recent("cities"),
                              m.method
                            )
                              .slice(0, 3)
                              .concat(
                                Suggester.match(
                                  b.searchTermCity,
                                  [asgv.geoCity, asgv.ipCity],
                                  m.method
                                )
                              ),
                            F = 0;
                          F < E.length;
                          F++
                        )
                          E[F] = E[F].match(/^[A-Za-z ]+$/)
                            ? b.addBeforCity +
                              " " +
                              E[F].toString().toLowerCase()
                            : "";
                        (E = E.filter(Boolean)),
                          $.each(E, function (a, e) {
                            E[a] = {
                              label: e,
                              value: e,
                              data: { type_data: 5, sort_order: 5 },
                            };
                          }),
                          _ &&
                            "undefined" != typeof _.list().city &&
                            0 < _.list().city.length &&
                            (E = E.concat(_.list().city)),
                          (C = C.filter(function (e) {
                            return (
                              "" != e.cls &&
                              "partial" != e.cls &&
                              e.data &&
                              5 != e.data.type_data
                            );
                          })
                            .concat(E)
                            .concat(
                              C.filter(function (e) {
                                return e.data && 5 == e.data.type_data;
                              })
                            ));
                      }
                      if (
                        (e(
                          Suggester.remDuplicateImg(
                            Suggester.getTopN(
                              C,
                              m.rowsToDisplay,
                              m.maxSuggestLen,
                              m.frstcapcase
                            )
                          )
                        ),
                        (h.displayListLength = C.length),
                        !h.displayRecorded && 0 < C.length)
                      ) {
                        var v = new Date().getTime() - h.firstKeyDownTime,
                          w =
                            a.length === h.preFilledTerm.length &&
                            a === h.preFilledTerm
                              ? 0
                              : a.length;
                        eventTrack(
                          "Auto-Suggest",
                          t +
                            m.module +
                            "-mode-" +
                            asgv.mode +
                            "-appearance-speed",
                          "after-ms-" + v + "-after-char-" + w,
                          v
                        ),
                          (h.displayRecorded = !0);
                      }
                      if (_ && (_.type == _.DIRECT || _.type == _.COMPLETE))
                        return;
                      "" !== b.searchTerm &&
                        "undefined" == typeof b.cache._cache[b.searchTerm] &&
                        (!_ || _.type == _.FILTERED) &&
                        b.searchTerm.length <= m.maxCharForSuggestionRequest &&
                        h.previousTerm != b.searchTerm &&
                        ("domain" !== m.type ||
                          ("domain" == m.type &&
                            0 < b.term.indexOf("@") &&
                            b.term.indexOf("@") + 1 === b.term.length)) &&
                        ((h.previousTerm = b.searchTerm.trim()),
                        1 == b.searchTerm.length && (b.limit = 40),
                        b.searchTerm == b.searchTerm.trim() &&
                          h.requestData(m, h, b, e));
                    }
                  },
                  minLength: m.minStringLengthToFetchSuggestion,
                  select: function select(t, d) {
                    var o = m.type ? m.type : "keyword";
                    (typeParam = {
                      1: "context",
                      2: "popular",
                      3: "keyword",
                      4: "company",
                      5: "incity",
                    }),
                      ("keyword" == m.type || "product" == m.type) &&
                        "undefined" != typeof d.item &&
                        (d.item.askwdSel = 1) &&
                        ("undefined" != typeof d.item.data &&
                        "undefined" != typeof d.item.data.type_data
                          ? 1 == d.item.data.type_data
                            ? ("undefined" != typeof a && "" != a
                                ? ((d.item.trackid = "as-context:kwd=" + a),
                                  "undefined" != typeof d.item.last_dis &&
                                    1 == d.item.last_dis &&
                                    (d.item.trackid =
                                      d.item.trackid +
                                      ":ret=" +
                                      d.item.last_dis))
                                : ((d.item.trackid = "as-context"),
                                  "undefined" != typeof d.item.last_dis &&
                                    1 == d.item.last_dis &&
                                    (d.item.trackid =
                                      d.item.trackid +
                                      ":ret=" +
                                      d.item.last_dis)),
                              "undefined" != typeof d.item.addedNear &&
                                "" != d.item.addedNear &&
                                d.item.addedNear &&
                                (d.item.trackid = d.item.trackid + ":near=1"))
                            : 2 == d.item.data.type_data
                            ? ("undefined" != typeof a && "" != a
                                ? ((d.item.trackid = "as-popular:kwd=" + a),
                                  "undefined" != typeof d.item.last_dis &&
                                    1 == d.item.last_dis &&
                                    (d.item.trackid =
                                      d.item.trackid +
                                      ":ret=" +
                                      d.item.last_dis))
                                : ((d.item.trackid = "as-popular"),
                                  "undefined" != typeof d.item.last_dis &&
                                    1 == d.item.last_dis &&
                                    (d.item.trackid =
                                      d.item.trackid +
                                      ":ret=" +
                                      d.item.last_dis)),
                              "undefined" != typeof d.item.addedNear &&
                                "" != d.item.addedNear &&
                                d.item.addedNear &&
                                (d.item.trackid = d.item.trackid + ":near=1"))
                            : 3 == d.item.data.type_data
                            ? ("undefined" != typeof a && "" != a
                                ? ((d.item.trackid = "as-kwd:kwd=" + a),
                                  "undefined" != typeof d.item.last_dis &&
                                    1 == d.item.last_dis &&
                                    (d.item.trackid =
                                      d.item.trackid +
                                      ":ret=" +
                                      d.item.last_dis))
                                : ((d.item.trackid = "as-kwd"),
                                  "undefined" != typeof d.item.last_dis &&
                                    1 == d.item.last_dis &&
                                    (d.item.trackid =
                                      d.item.trackid +
                                      ":ret=" +
                                      d.item.last_dis)),
                              "undefined" != typeof d.item.addedNear &&
                                "" != d.item.addedNear &&
                                d.item.addedNear &&
                                (d.item.trackid = d.item.trackid + ":near=1"))
                            : 4 == d.item.data.type_data
                            ? ("undefined" != typeof a && "" != a
                                ? ((d.item.trackid = "as-comp:kwd=" + a),
                                  "undefined" != typeof d.item.last_dis &&
                                    1 == d.item.last_dis &&
                                    (d.item.trackid =
                                      d.item.trackid +
                                      ":ret=" +
                                      d.item.last_dis))
                                : ((d.item.trackid = "as-comp"),
                                  "undefined" != typeof d.item.last_dis &&
                                    1 == d.item.last_dis &&
                                    (d.item.trackid =
                                      d.item.trackid +
                                      ":ret=" +
                                      d.item.last_dis)),
                              "undefined" != typeof d.item.addedNear &&
                                "" != d.item.addedNear &&
                                d.item.addedNear &&
                                (d.item.trackid = d.item.trackid + ":near=1"))
                            : 5 == d.item.data.type_data &&
                              ((d.item.trackid =
                                "as-" + typeParam[d.item.data.type_data]),
                              (d.item.trackid += a ? ":kwd=" + a : ""),
                              (d.item.trackid += d.item.last_dis
                                ? ":ret=" + d.item.last_dis
                                : ""))
                          : "undefined" != typeof d.item &&
                            "undefined" != typeof d.item.cls &&
                            "defaultcon" == d.item.cls
                          ? ("undefined" != typeof a && "" != a
                              ? ((d.item.trackid = "as-default:kwd=" + a),
                                "undefined" != typeof d.item.last_dis &&
                                  1 == d.item.last_dis &&
                                  (d.item.trackid =
                                    d.item.trackid + ":ret=" + d.item.last_dis))
                              : ((d.item.trackid = "as-default"),
                                "undefined" != typeof d.item.last_dis &&
                                  1 == d.item.last_dis &&
                                  (d.item.trackid =
                                    d.item.trackid +
                                    ":ret=" +
                                    d.item.last_dis)),
                            "undefined" != typeof d.item.addedNear &&
                              "" != d.item.addedNear &&
                              d.item.addedNear &&
                              (d.item.trackid = d.item.trackid + ":near=1"))
                          : "undefined" != typeof d.item &&
                            "undefined" != typeof d.item.cls &&
                            "blrcnt" == d.item.cls
                          ? ("undefined" != typeof a && "" != a
                              ? ((d.item.trackid = "as-blrcnt:kwd=" + a),
                                "undefined" != typeof d.item.last_dis &&
                                  1 == d.item.last_dis &&
                                  (d.item.trackid =
                                    d.item.trackid + ":ret=" + d.item.last_dis))
                              : ((d.item.trackid = "as-blrcnt"),
                                "undefined" != typeof d.item.last_dis &&
                                  1 == d.item.last_dis &&
                                  (d.item.trackid =
                                    d.item.trackid +
                                    ":ret=" +
                                    d.item.last_dis)),
                            "undefined" != typeof d.item.addedNear &&
                              "" != d.item.addedNear &&
                              d.item.addedNear &&
                              (d.item.trackid = d.item.trackid + ":near=1"))
                          : ("undefined" != typeof a && "" != a
                              ? ((d.item.trackid = "as-rcnt:kwd=" + a),
                                "undefined" != typeof d.item.last_dis &&
                                  1 == d.item.last_dis &&
                                  (d.item.trackid =
                                    d.item.trackid + ":ret=" + d.item.last_dis))
                              : ((d.item.trackid = "as-rcnt"),
                                "undefined" != typeof d.item.last_dis &&
                                  1 == d.item.last_dis &&
                                  (d.item.trackid =
                                    d.item.trackid +
                                    ":ret=" +
                                    d.item.last_dis)),
                            "undefined" != typeof d.item.addedNear &&
                              "" != d.item.addedNear &&
                              d.item.addedNear &&
                              (d.item.trackid = d.item.trackid + ":near=1")),
                        (d.item.trackid +=
                          ":pos=" + (d.item.pos ? d.item.pos : "-1")),
                        (d.item.trackid +=
                          ":cat=" + (asgv.cat ? asgv.cat : "-2")),
                        (d.item.trackid +=
                          ":mcat=" + (asgv.mcat ? asgv.mcat : "-2"))),
                      (o +=
                        "undefined" == typeof d.item.cls
                          ? "-other"
                          : "-" + d.item.cls),
                      (typ_data =
                        "undefined" != typeof d.item &&
                        "undefined" != typeof d.item.data &&
                        "undefined" != typeof d.item.data.type_data
                          ? "-type-" + d.item.data.type_data
                          : "");
                    var l =
                      500 *
                      e((new Date().getTime() - h.firstKeyDownTime) / 500);
                    h.selectionRecorded ||
                      eventTrack(
                        "Auto-Suggest",
                        "selected-" +
                          o +
                          typ_data +
                          m.module +
                          "-mode-" +
                          asgv.mode +
                          "-after-char-" +
                          (a.length === h.preFilledTerm.length &&
                          a === h.preFilledTerm
                            ? "0"
                            : a.length) +
                          "-pos-" +
                          ("undefined" == typeof d.item.pos
                            ? "0"
                            : d.item.pos) +
                          ("undefined" != typeof d.item.data &&
                          "undefined" != typeof d.item.data.cat &&
                          "undefined" != typeof d.item.data.catid
                            ? "-cat-" +
                              d.item.data.catid +
                              "-" +
                              d.item.data.cat
                            : ""),
                        a +
                          " - " +
                          d.item.value +
                          "-keydown-to-selection-time-ms-" +
                          l,
                        "undefined" == typeof d.item.pos
                          ? "0"
                          : parseInt(d.item.pos.toString().substr(0, 1))
                      ),
                      (h.selectionRecorded = !0),
                      $(p).val(d.item.value),
                      (this.onSelectFired = !0),
                      m.onSelect && m.onSelect.call(this, t, d);
                  },
                  change: function change(e, t) {
                    var a = $(this).val();
                    if (!t.item && m.onExplicitChange) {
                      var o;
                      if ((o == y.cache(a, m, a), !o && "" != a)) {
                        var d = {};
                        (d.searchTerm = a),
                          (d.match = "exact"),
                          (d.callbackstr = "Suggester_callback_"),
                          (d.event = e),
                          (d.method = "exact"),
                          (d.limit = 1),
                          (d.onSuccess = h.onExplicitChangeSuccess),
                          h.requestData(m, h, d, "");
                      }
                    }
                  },
                  open: m.onOpen,
                  close: m.onClose,
                })
                .data("autocomplete");
              m.autocompleteClass &&
                $(l.menu.element[0]).addClass(m.autocompleteClass),
                (l._renderItem = function (e, t) {
                  var d = cleanString(this.term, 1).trim(),
                    a = d.replace(/ /g, "[^a-zA-Z0-9]+"),
                    c = new RegExp("\\b(" + a + ")", "ig"),
                    o =
                      ("undefined" != typeof t.label &&
                        t.label.replace(/(-)/gi, " ")) ||
                      ("undefined" != typeof t.value &&
                        t.value.replace(/(-)/gi, " ")) ||
                      ("undefined" != typeof t.id &&
                        t.id.replace(/(-)/gi, " ")),
                    p = t && t.cls ? t.cls : "";
                  if (o && 2 == m.dispstyle) {
                    chkFrMb || window.location.host.match("m.indiamart.com")
                      ? e.addClass("mAtsugst")
                      : e.addClass("dAtsugst"),
                      o && "normal" === m.highlight
                        ? (o = "<b>" + o.replace(c, "</b>$1<b>") + "</b>")
                        : "reverse" === m.highlight &&
                          (o = o.replace(c, "<b>$1</b>")),
                      p && (p = ' class="' + p + '"');
                    var u = $("<li" + p + "></li>").addClass("as_D");
                    if (
                      !(
                        chkFrMb || window.location.host.match("m.indiamart.com")
                      )
                    ) {
                      if (
                        ("undefined" != typeof t.cls &&
                          "" != t.cls &&
                          "rcnt" == t.cls) ||
                        ("undefined" != typeof t.cls &&
                          "" != t.cls &&
                          "blrcnt" == t.cls)
                      )
                        var g = '<i class="sIcon rcnt"></i>';
                      else if (
                        "undefined" != typeof t.data &&
                        "undefined" != typeof t.data.type_data &&
                        2 == t.data.type_data
                      )
                        var g = '<i class="sIcon pplr"></i>';
                      else var g = '<i class="sIcon nrml"></i>';
                    } else if (
                      "undefined" != typeof t.cls &&
                      "" != t.cls &&
                      "rcnt" == t.cls
                    )
                      var g =
                        '<i class="rIcon copyIcn"></i><i class="lIcon hstry"></i>';
                    else if (
                      ("undefined" != typeof t.cls &&
                        "" != t.cls &&
                        "topsearches" == t.cls) ||
                      ("undefined" != typeof t.data &&
                        "undefined" != typeof t.data.type_data &&
                        2 == t.data.type_data)
                    )
                      var g =
                        '<i class="rIcon copyIcn"></i><i class="lIcon topSrch"></i>';
                    else
                      var g =
                        '<i class="rIcon copyIcn"></i><i class="lIcon autoSrch"></i>';
                    return (
                      u.data("item.autocomplete", t),
                      ("undefined" == typeof t.data ||
                        ("undefined" == typeof t.data.cat &&
                          "undefined" == typeof t.data.img)) &&
                        u.append(
                          '<a class ="ui-corner-all" id="anchor"> ' +
                            g +
                            o +
                            "</a>"
                        ),
                      u.appendTo(e),
                      0 === e.find("ul").length &&
                        u.wrap('<ul class="ui-autocomplete"></ul>'),
                      "search_string" === m.element &&
                        1 != e.children().first().is("div") &&
                        u
                          .parent()
                          .wrap('<div class="wd50"></div>')
                          .parent()
                          .parent()
                          .addClass("autocomplete-box dsp"),
                      "undefined" != typeof t.last_dis && 1 == t.last_dis
                        ? $(".wd50").addClass("suppl")
                        : $(".wd50").removeClass("suppl"),
                      (1 !== t.pos || 1 != u.parent().is("ul")) &&
                        "search_string" === m.element &&
                        0 == $(".catsug").children().length &&
                        e
                          .children()
                          .first()
                          .children()
                          .append(e.children().last()),
                      1 !== t.pos &&
                        "search_string" !== m.element &&
                        1 == u.parent().children().is("ul") &&
                        e.children().first().append(e.children().last()),
                      e.css("position", "absolute"),
                      0 < window.location.href.indexOf("trade") &&
                        $(".ui-autocomplete li:nth-child(2) .flng-l").css(
                          "visibility",
                          "visible"
                        ),
                      e.addClass("as_ui-widget-content")
                    );
                  }
                  if (o) {
                    o && "normal" === m.highlight
                      ? (o = "<b>" + o.replace(c, "</b>$1<b>") + "</b>")
                      : "reverse" === m.highlight &&
                        (o = o.replace(c, "<b>$1</b>")),
                      p && (p = ' class="' + p + '"');
                    var u = $("<li" + p + "></li>").addClass("as_D");
                    return (
                      u.data("item.autocomplete", t),
                      ("undefined" == typeof t.data ||
                        ("undefined" == typeof t.data.cat &&
                          "undefined" == typeof t.data.img)) &&
                        u.append(
                          '<a class ="ui-corner-all" id="anchor"> ' + o + "</a>"
                        ),
                      m.type == asgv.type &&
                      "undefined" != typeof t.data &&
                      "undefined" != typeof t.data.cat &&
                      "search_string" === m.element
                        ? (u.append(
                            '<a class="ui-corner-all ui-pleft" tabindex="-1"> in<span class="scat">' +
                              t.data[Object.keys(t.data)[0]] +
                              "</span></a>"
                          ),
                          u.appendTo(e))
                        : "",
                      m.type == asgv.type &&
                      "undefined" != typeof t.data &&
                      "undefined" != typeof t.data.img &&
                      "" != t.data.img &&
                      0 > window.location.href.indexOf("m.indiamart")
                        ? (u.append(
                            '<a></span><span class="product-title">' +
                              o +
                              '</span> <div class="product-img">'
                          ),
                          "undefined" != typeof t.data &&
                            "undefined" != typeof t.data.price &&
                            "" != t.data.price &&
                            u.append(
                              '<span class="price">Rs. ' + t.price + "</span>"
                            ),
                          u.append("</span></div></a>"),
                          $(".catsug").append(u.addClass("ui-menu-box")),
                          $(".product-img")
                            .first()
                            .parent()
                            .parent()
                            .addClass(""))
                        : ("undefined" == typeof t.data ||
                            ("undefined" == typeof t.data.cat &&
                              "undefined" == typeof t.data.img)) &&
                          u.appendTo(e),
                      0 === e.find("ul").length &&
                        u.wrap('<ul class="ui-autocomplete"></ul>'),
                      "search_string" === m.element &&
                        1 != e.children().first().is("div") &&
                        u
                          .parent()
                          .wrap('<div class="wd50"></div>')
                          .parent()
                          .parent()
                          .addClass("autocomplete-box dsp"),
                      (1 !== t.pos || 1 != u.parent().is("ul")) &&
                        "search_string" === m.element &&
                        0 == $(".catsug").children().length &&
                        e
                          .children()
                          .first()
                          .children()
                          .append(e.children().last()),
                      1 !== t.pos &&
                        "search_string" !== m.element &&
                        1 == u.parent().children().is("ul") &&
                        e.children().first().append(e.children().last()),
                      "domain" === m.type && e.addClass("domain"),
                      e.css("position", "absolute"),
                      0 < window.location.href.indexOf("trade") &&
                        ($(".ui-autocomplete li:nth-child(2) .flng-l").css(
                          "visibility",
                          "visible"
                        ),
                        $("#search_string").keydown(function () {
                          $(".ui-menu-item:nth-child(2) .flng-l").css(
                            "visibility",
                            ""
                          );
                        }),
                        $("#search_string").mouseover(function () {
                          $(".ui-menu-item:nth-child(2) .flng-l").css(
                            "visibility",
                            ""
                          );
                        })),
                      e.addClass("as_ui-widget-content"),
                      u
                    );
                  }
                });
            }),
            "complete" == document.readyState
              ? onDocReady()
              : $(document).ready(onDocReady);
        } catch (t) {}
      };
    !(function (d, e) {
      function o(e, t) {
        var a = e.nodeName.toString().toLowerCase();
        if ("area" === a) {
          var c,
            p = e.parentNode,
            s = p.name;
          return (
            e.href &&
            s &&
            "map" === p.nodeName.toString().toLowerCase() &&
            ((c = d("img[usemap=#" + s + "]")[0]), !!c && l(c))
          );
        }
        return (
          (/input|select|textarea|button|object/.test(a)
            ? !e.disabled
            : "a" == a
            ? e.href || t
            : t) && l(e)
        );
      }
      function l(e) {
        return !d(e)
          .parents()
          .andSelf()
          .filter(function () {
            return (
              "hidden" === d.curCSS(this, "visibility") ||
              d.expr.filters.hidden(this)
            );
          }).length;
      }
      (d.ui = d.ui || {}),
        d.ui.version ||
          (d.extend(d.ui, {
            version: "1.8.21",
            keyCode: {
              ALT: 18,
              BACKSPACE: 8,
              CAPS_LOCK: 20,
              COMMA: 188,
              COMMAND: 91,
              COMMAND_LEFT: 91,
              COMMAND_RIGHT: 93,
              CONTROL: 17,
              DELETE: 46,
              DOWN: 40,
              END: 35,
              ENTER: 13,
              ESCAPE: 27,
              HOME: 36,
              INSERT: 45,
              LEFT: 37,
              MENU: 93,
              NUMPAD_ADD: 107,
              NUMPAD_DECIMAL: 110,
              NUMPAD_DIVIDE: 111,
              NUMPAD_ENTER: 108,
              NUMPAD_MULTIPLY: 106,
              NUMPAD_SUBTRACT: 109,
              PAGE_DOWN: 34,
              PAGE_UP: 33,
              PERIOD: 190,
              RIGHT: 39,
              SHIFT: 16,
              SPACE: 32,
              TAB: 9,
              UP: 38,
              WINDOWS: 91,
            },
          }),
          d.fn.extend({
            propAttr: d.fn.prop || d.fn.attr,
            _focus: d.fn.focus,
            focus: function focus(e, t) {
              return "number" == typeof e
                ? this.each(function () {
                    var o = this;
                    setTimeout(function () {
                      d(o).focus(), t && t.call(o);
                    }, e);
                  })
                : this._focus.apply(this, arguments);
            },
            scrollParent: function scrollParent() {
              var e;
              return (
                (e =
                  (d.browser.msie &&
                    /(static|relative)/.test(this.css("position"))) ||
                  /absolute/.test(this.css("position"))
                    ? this.parents()
                        .filter(function () {
                          return (
                            /(relative|absolute|fixed)/.test(
                              d.curCSS(this, "position", 1)
                            ) &&
                            /(auto|scroll)/.test(
                              d.curCSS(this, "overflow", 1) +
                                d.curCSS(this, "overflow-y", 1) +
                                d.curCSS(this, "overflow-x", 1)
                            )
                          );
                        })
                        .eq(0)
                    : this.parents()
                        .filter(function () {
                          return /(auto|scroll)/.test(
                            d.curCSS(this, "overflow", 1) +
                              d.curCSS(this, "overflow-y", 1) +
                              d.curCSS(this, "overflow-x", 1)
                          );
                        })
                        .eq(0)),
                /fixed/.test(this.css("position")) || !e.length
                  ? d(document)
                  : e
              );
            },
            zIndex: function zIndex(t) {
              if (t !== e) return this.css("zIndex", t);
              if (this.length)
                for (
                  var s, l, c = d(this[0]);
                  c.length && c[0] !== document;

                ) {
                  if (
                    ((s = c.css("position")),
                    ("absolute" === s || "relative" === s || "fixed" === s) &&
                      ((l = parseInt(c.css("zIndex"), 10)),
                      !isNaN(l) && 0 !== l))
                  )
                    return l;
                  c = c.parent();
                }
              return 0;
            },
            disableSelection: function disableSelection() {
              return this.bind(
                (d.support.selectstart ? "selectstart" : "mousedown") +
                  ".ui-disableSelection",
                function (t) {
                  t.preventDefault();
                }
              );
            },
            enableSelection: function enableSelection() {
              return this.unbind(".ui-disableSelection");
            },
          }),
          d.each(["Width", "Height"], function (t, l) {
            function a(e, t, o, a) {
              return (
                d.each(c, function () {
                  (t -= parseFloat(d.curCSS(e, "padding" + this, !0)) || 0),
                    o &&
                      (t -=
                        parseFloat(
                          d.curCSS(e, "border" + this + "Width", !0)
                        ) || 0),
                    a &&
                      (t -= parseFloat(d.curCSS(e, "margin" + this, !0)) || 0);
                }),
                t
              );
            }
            var c = "Width" === l ? ["Left", "Right"] : ["Top", "Bottom"],
              o = l.toString().toLowerCase(),
              s = {
                innerWidth: d.fn.innerWidth,
                innerHeight: d.fn.innerHeight,
                outerWidth: d.fn.outerWidth,
                outerHeight: d.fn.outerHeight,
              };
            (d.fn["inner" + l] = function (t) {
              return t === e
                ? s["inner" + l].call(this)
                : this.each(function () {
                    d(this).css(o, a(this, t) + "px");
                  });
            }),
              (d.fn["outer" + l] = function (e, t) {
                return "number" == typeof e
                  ? this.each(function () {
                      d(this).css(o, a(this, e, !0, t) + "px");
                    })
                  : s["outer" + l].call(this, e);
              });
          }),
          d.extend(d.expr[":"], {
            data: function data(e, t, o) {
              return !!d.data(e, o[3]);
            },
            focusable: function focusable(e) {
              return o(e, !isNaN(d.attr(e, "tabindex")));
            },
            tabbable: function tabbable(e) {
              var t = d.attr(e, "tabindex"),
                a = isNaN(t);
              return (a || 0 <= t) && o(e, !a);
            },
          }),
          d(function () {
            var e = document.body,
              t = e.appendChild((t = document.createElement("div")));
            t.offsetHeight,
              d.extend(t.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0,
              }),
              (d.support.minHeight = 100 === t.offsetHeight),
              (d.support.selectstart = "onselectstart" in t),
              (e.removeChild(t).style.display = "block");
          }),
          d.extend(d.ui, {
            plugin: {
              add: function add(e, t, s) {
                var a = d.ui[e].prototype;
                for (var l in s)
                  (a.plugins[l] = a.plugins[l] || []),
                    a.plugins[l].push([t, s[l]]);
              },
              call: function call(o, e, t) {
                var d = o.plugins[e];
                if (d && o.element[0].parentNode)
                  for (var a = 0; a < d.length; a++)
                    o.options[d[a][0]] && d[a][1].apply(o.element, t);
              },
            },
            contains: function contains(a, e) {
              return document.compareDocumentPosition
                ? 16 & a.compareDocumentPosition(e)
                : a !== e && a.contains(e);
            },
            hasScroll: function hasScroll(e, t) {
              if ("hidden" === d(e).css("overflow")) return !1;
              var o = t && "left" === t ? "scrollLeft" : "scrollTop",
                a = !1;
              return 0 < e[o] || ((e[o] = 1), (a = 0 < e[o]), (e[o] = 0), a);
            },
            isOverAxis: function isOverAxis(a, e, t) {
              return a > e && e + t > a;
            },
            isOver: function isOver(e, t, l, a, c, o) {
              return d.ui.isOverAxis(e, l, c) && d.ui.isOverAxis(t, a, o);
            },
          }));
    })(jQuery),
      (function (d, e) {
        if (d.cleanData) {
          var o = d.cleanData;
          d.cleanData = function (d) {
            for (var e, s = 0; null != (e = d[s]); s++)
              try {
                n(e).triggerHandler("remove");
              } catch (e) {}
            o(d);
          };
        } else {
          var s = d.fn.remove;
          d.fn.remove = function (e, t) {
            return this.each(function () {
              return (
                t ||
                  ((!e || d.filter(e, [this]).length) &&
                    d("*", this)
                      .add([this])
                      .each(function () {
                        try {
                          d(this).triggerHandler("remove");
                        } catch (t) {}
                      })),
                s.call(d(this), e, t)
              );
            });
          };
        }
        (d.widget = function (e, l, c) {
          var p,
            u = e.split(".")[0];
          (e = e.split(".")[1]),
            (p = u + "-" + e),
            c || ((c = l), (l = d.Widget)),
            (d.expr[":"][p] = function (t) {
              return !!d.data(t, e);
            }),
            (d[u] = d[u] || {}),
            (d[u][e] = function (a, e) {
              arguments.length && this._createWidget(a, e);
            });
          var o = new l();
          (o.options = d.extend(!0, {}, o.options)),
            (d[u][e].prototype = d.extend(
              !0,
              o,
              {
                namespace: u,
                widgetName: e,
                widgetEventPrefix: d[u][e].prototype.widgetEventPrefix || e,
                widgetBaseClass: p,
              },
              c
            )),
            d.widget.bridge(e, d[u][e]);
        }),
          (d.widget.bridge = function (l, o) {
            d.fn[l] = function (c) {
              var t = "string" == typeof c,
                p = Array.prototype.slice.call(arguments, 1),
                s = this;
              return (
                (c =
                  !t && p.length ? d.extend.apply(null, [!0, c].concat(p)) : c),
                t && "_" === c.charAt(0)
                  ? s
                  : (t
                      ? this.each(function () {
                          var t = d.data(this, l),
                            a = t && d.isFunction(t[c]) ? t[c].apply(t, p) : t;
                          return a !== t && a !== e ? ((s = a), !1) : void 0;
                        })
                      : this.each(function () {
                          var e = d.data(this, l);
                          e
                            ? e.option(c || {})._init()
                            : d.data(this, l, new o(c, this));
                        }),
                    s)
              );
            };
          }),
          (d.Widget = function (a, e) {
            arguments.length && this._createWidget(a, e);
          }),
          (d.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            options: { disabled: !1 },
            _createWidget: function _createWidget(e, t) {
              d.data(t, this.widgetName, this),
                (this.element = d(t)),
                (this.options = d.extend(
                  !0,
                  {},
                  this.options,
                  this._getCreateOptions(),
                  e
                ));
              var o = this;
              this.element.bind("remove." + this.widgetName, function () {
                o.destroy();
              }),
                this._create(),
                this._trigger("create"),
                this._init();
            },
            _getCreateOptions: function _getCreateOptions() {
              return (
                d.metadata && d.metadata.get(this.element[0])[this.widgetName]
              );
            },
            _create: function _create() {},
            _init: function _init() {},
            destroy: function destroy() {
              this.element
                .unbind("." + this.widgetName)
                .removeData(this.widgetName),
                this.widget()
                  .unbind("." + this.widgetName)
                  .removeAttr("aria-disabled")
                  .removeClass(
                    this.widgetBaseClass + "-disabled ui-state-disabled"
                  );
            },
            widget: function widget() {
              return this.element;
            },
            option: function option(t, o) {
              var a = t;
              if (0 === arguments.length) return d.extend({}, this.options);
              if ("string" == typeof t) {
                if (o === e) return this.options[t];
                (a = {}), (a[t] = o);
              }
              return this._setOptions(a), this;
            },
            _setOptions: function _setOptions(e) {
              var a = this;
              return (
                d.each(e, function (o, e) {
                  a._setOption(o, e);
                }),
                this
              );
            },
            _setOption: function _setOption(a, e) {
              return (
                (this.options[a] = e),
                "disabled" === a &&
                  this.widget()
                    [e ? "addClass" : "removeClass"](
                      this.widgetBaseClass + "-disabled ui-state-disabled"
                    )
                    .attr("aria-disabled", e),
                this
              );
            },
            enable: function enable() {
              return this._setOption("disabled", !1);
            },
            disable: function disable() {
              return this._setOption("disabled", !0);
            },
            _trigger: function _trigger(e, t, l) {
              var c,
                p,
                u = this.options[e];
              if (
                ((l = l || {}),
                (t = d.Event(t)),
                (t.type = (
                  e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
                )
                  .toString()
                  .toLowerCase()),
                (t.target = this.element[0]),
                (p = t.originalEvent))
              )
                for (c in p) c in t || (t[c] = p[c]);
              return (
                this.element.trigger(t, l),
                !(
                  (d.isFunction(u) && !1 === u.call(this.element[0], t, l)) ||
                  t.isDefaultPrevented()
                )
              );
            },
          });
      })(jQuery),
      (function (y) {
        var e = Math.max;
        y.ui = y.ui || {};
        var d = /left|center|right/,
          l = /top|center|bottom/,
          b = {},
          a = y.fn.position,
          o = y.fn.offset;
        (y.fn.position = function (o) {
          if (!o || !o.of) return a.apply(this, arguments);
          o = y.extend({}, o);
          var e,
            f,
            x,
            s = y(o.of),
            m = s[0],
            u = (o.collision || "flip").split(" "),
            p = o.offset ? o.offset.split(" ") : [0, 0];
          return (
            9 === m.nodeType
              ? ((e = s.width()), (f = s.height()), (x = { top: 0, left: 0 }))
              : m.setTimeout
              ? ((e = s.width()),
                (f = s.height()),
                (x = { top: s.scrollTop(), left: s.scrollLeft() }))
              : m.preventDefault
              ? ((o.at = "left top"),
                (e = f = 0),
                (x = { top: o.of.pageY, left: o.of.pageX }))
              : ((e = s.outerWidth()), (f = s.outerHeight()), (x = s.offset())),
            y.each(["my", "at"], function () {
              var t = (o[this] || "").split(" ");
              1 === t.length &&
                (t = d.test(t[0])
                  ? t.concat(["center"])
                  : l.test(t[0])
                  ? ["center"].concat(t)
                  : ["center", "center"]),
                (t[0] = d.test(t[0]) ? t[0] : "center"),
                (t[1] = l.test(t[1]) ? t[1] : "center"),
                (o[this] = t);
            }),
            1 === u.length && (u[1] = u[0]),
            (p[0] = parseInt(p[0], 10) || 0),
            1 === p.length && (p[1] = p[0]),
            (p[1] = parseInt(p[1], 10) || 0),
            "right" === o.at[0]
              ? (x.left += e)
              : o.at[0] === "center" && (x.left += e / 2),
            "bottom" === o.at[1]
              ? (x.top += f)
              : o.at[1] === "center" && (x.top += f / 2),
            (x.left += p[0]),
            (x.top += p[1]),
            this.each(function () {
              var l,
                t = Math.round,
                c = y(this),
                g = c.outerWidth(),
                s = c.outerHeight(),
                a = parseInt(y.curCSS(this, "marginLeft", !0)) || 0,
                d = parseInt(y.curCSS(this, "marginTop", !0)) || 0,
                w = g + a + (parseInt(y.curCSS(this, "marginRight", !0)) || 0),
                h = s + d + (parseInt(y.curCSS(this, "marginBottom", !0)) || 0),
                m = y.extend({}, x);
              "right" === o.my[0]
                ? (m.left -= g)
                : o.my[0] === "center" && (m.left -= g / 2),
                "bottom" === o.my[1]
                  ? (m.top -= s)
                  : o.my[1] === "center" && (m.top -= s / 2),
                b.fractions || ((m.left = t(m.left)), (m.top = t(m.top))),
                (l = { left: m.left - a, top: m.top - d }),
                (m.top =
                  !0 === $(this).hasClass("autocomplete-box")
                    ? m.top + 4
                    : m.top),
                (m.left =
                  !0 === $(this).hasClass("autocomplete-box")
                    ? m.left - 1
                    : m.left),
                y.each(["left", "top"], function (t, a) {
                  y.ui.position[u[t]] &&
                    y.ui.position[u[t]][a](m, {
                      targetWidth: e,
                      targetHeight: f,
                      elemWidth: g,
                      elemHeight: s,
                      collisionPosition: l,
                      collisionWidth: w,
                      collisionHeight: h,
                      offset: p,
                      my: o.my,
                      at: o.at,
                    });
                }),
                y.fn.bgiframe && c.bgiframe(),
                c.offset(y.extend(m, { using: o.using }));
            })
          );
        }),
          (y.ui.position = {
            fit: {
              left: function left(o, t) {
                var d = y(window),
                  a =
                    t.collisionPosition.left +
                    t.collisionWidth -
                    d.width() -
                    d.scrollLeft();
                o.left =
                  0 < a
                    ? o.left - a
                    : e(o.left - t.collisionPosition.left, o.left);
              },
              top: function top(o, t) {
                var d = y(window),
                  a =
                    t.collisionPosition.top +
                    t.collisionHeight -
                    d.height() -
                    d.scrollTop();
                o.top =
                  0 < a ? o.top - a : e(o.top - t.collisionPosition.top, o.top);
              },
            },
            flip: {
              left: function left(e, t) {
                if (t.at[0] !== "center") {
                  var d = y(window),
                    a =
                      t.collisionPosition.left +
                      t.collisionWidth -
                      d.width() -
                      d.scrollLeft(),
                    o =
                      "left" === t.my[0]
                        ? -t.elemWidth
                        : "right" === t.my[0]
                        ? t.elemWidth
                        : 0,
                    s = "left" === t.at[0] ? t.targetWidth : -t.targetWidth,
                    c = -2 * t.offset[0];
                  e.left +=
                    0 > t.collisionPosition.left
                      ? o + s + c
                      : 0 < a
                      ? o + s + c
                      : 0;
                }
              },
              top: function top(e, t) {
                if (t.at[1] !== "center") {
                  var d = y(window),
                    a =
                      t.collisionPosition.top +
                      t.collisionHeight -
                      d.height() -
                      d.scrollTop(),
                    o =
                      "top" === t.my[1]
                        ? -t.elemHeight
                        : "bottom" === t.my[1]
                        ? t.elemHeight
                        : 0,
                    s = "top" === t.at[1] ? t.targetHeight : -t.targetHeight,
                    c = -2 * t.offset[1];
                  e.top +=
                    0 > t.collisionPosition.top
                      ? o + s + c
                      : 0 < a
                      ? o + s + c
                      : 0;
                }
              },
            },
          }),
          y.offset.setOffset ||
            ((y.offset.setOffset = function (e, t) {
              /static/.test(y.curCSS(e, "position")) &&
                (e.style.position = "relative");
              var d = y(e),
                a = d.offset(),
                l = parseInt(y.curCSS(e, "top", !0), 10) || 0,
                o = parseInt(y.curCSS(e, "left", !0), 10) || 0,
                s = { top: t.top - a.top + l, left: t.left - a.left + o };
              "using" in t ? t.using.call(e, s) : d.css(s);
            }),
            (y.fn.offset = function (e) {
              var t = this[0];
              return t && t.ownerDocument
                ? e
                  ? y.isFunction(e)
                    ? this.each(function (t) {
                        y(this).offset(e.call(this, t, y(this).offset()));
                      })
                    : this.each(function () {
                        y.offset.setOffset(this, e);
                      })
                  : o.call(this)
                : null;
            })),
          (function () {
            var e,
              o,
              d,
              p,
              u,
              m = document.getElementsByTagName("body")[0],
              g = document.createElement("div");
            for (var l in ((e = document.createElement(m ? "div" : "body")),
            (d = {
              visibility: "hidden",
              width: 0,
              height: 0,
              border: 0,
              margin: 0,
              background: "none",
            }),
            m &&
              y.extend(d, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px",
              }),
            d))
              e.style[l] = d[l];
            e.appendChild(g),
              (o = m || document.documentElement),
              o.insertBefore(e, o.firstChild),
              (g.style.cssText =
                "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;"),
              (p = y(g)
                .offset(function (a, e) {
                  return e;
                })
                .offset()),
              (e.innerHTML = ""),
              o.removeChild(e),
              (u = p.top + p.left + (m ? 2e3 : 0)),
              (b.fractions = 21 < u && 22 > u);
          })();
      })(jQuery),
      (function (o) {
        var d = 0;
        o.widget("ui.autocomplete", {
          options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: { my: "left top", at: "left bottom", collision: "none" },
            source: null,
          },
          pending: 0,
          _create: function _create() {
            var d,
              s = this,
              l = this.element[0].ownerDocument;
            (this.isMultiLine = this.element.is("textarea")),
              this.element
                .addClass("ui-autocomplete-input")
                .attr("autocomplete", atocmplt_attr)
                .attr({
                  role: "textbox",
                  "aria-autocomplete": "list",
                  "aria-haspopup": "true",
                })
                .bind("keydown.autocomplete", function (e) {
                  if (!s.options.disabled && !s.element.propAttr("readOnly")) {
                    d = !1;
                    var t = o.ui.keyCode;
                    switch (e.keyCode) {
                      case t.PAGE_UP:
                        s._move("previousPage", e);
                        break;
                      case t.PAGE_DOWN:
                        s._move("nextPage", e);
                        break;
                      case t.UP:
                        s._keyEvent("previous", e);
                        break;
                      case t.DOWN:
                        s._keyEvent("next", e);
                        break;
                      case t.ENTER:
                      case t.NUMPAD_ENTER:
                        s.menu.active && ((d = !0), e.preventDefault());
                      case t.TAB:
                        if (!s.menu.active) return;
                        s.menu.select(e);
                        break;
                      case t.ESCAPE:
                        s.element.val(s.term), s.close(e);
                        break;
                      case t.CONTROL:
                        break;
                      default:
                        clearTimeout(s.searching),
                          (s.searching = setTimeout(function () {
                            s.term != s.element.val() &&
                              ((s.selectedItem = null), s.search(null, e));
                          }, s.options.delay));
                    }
                  }
                })
                .bind("keypress.autocomplete", function (t) {
                  d && ((d = !1), t.preventDefault());
                })
                .bind("focus.autocomplete", function () {
                  s.options.disabled ||
                    ((s.selectedItem = null), (s.previous = s.element.val()));
                })
                .bind("blur.autocomplete", function (t) {
                  s.options.disabled ||
                    (clearTimeout(s.searching),
                    (s.closing = setTimeout(function () {
                      s.close(t), s._change(t);
                    }, 150)));
                }),
              this._initSource(),
              (this.menu = o("<div></div>")
                .addClass("ui-autocomplete")
                .css("position", "absolute !important")
                .appendTo(o(this.options.appendTo || "body", l)[0])
                .mousedown(function (e) {
                  var d = s.menu.element[0];
                  o(e.target).closest(".ui-menu-item").length ||
                    setTimeout(function () {
                      o(document).one("mousedown", function (e) {
                        e.target === s.element[0] ||
                          e.target === d ||
                          o.ui.contains(d, e.target) ||
                          s.close();
                      });
                    }, 1),
                    setTimeout(function () {
                      clearTimeout(s.closing);
                    }, 13);
                })
                .menu({
                  focus: function focus(o, e) {
                    var t = e.item.data("item.autocomplete");
                    !1 !== s._trigger("focus", o, { item: t }) &&
                      /^key/.test(o.originalEvent.type) &&
                      s.element.val(t.value);
                  },
                  selected: function selected(a, e) {
                    var t = e.item.data("item.autocomplete"),
                      d = s.previous;
                    s.element[0] !== l.activeElement &&
                      (s.element.focus(),
                      (s.previous = d),
                      setTimeout(function () {
                        (s.previous = d), (s.selectedItem = t);
                      }, 1)),
                      !1 !== s._trigger("select", a, { item: t }),
                      (s.term = s.element.val()),
                      s.close(a),
                      (s.selectedItem = t);
                  },
                  blur: function blur() {
                    s.menu.element.removeClass("sugdd"),
                      s.menu.element.is(":visible") &&
                        s.element.val() !== s.term &&
                        s.element.val(s.term);
                  },
                })
                .zIndex(this.element.zIndex() + 1)
                .css({ top: 0, left: 0 })
                .hide()
                .data("menu")),
              o.fn.bgiframe && this.menu.element.bgiframe(),
              (s.beforeunloadHandler = function () {
                s.element.removeAttr("autocomplete");
              }),
              o(window).bind("beforeunload", s.beforeunloadHandler);
          },
          destroy: function destroy() {
            this.menu.element.remove(),
              o(window).unbind("beforeunload", this.beforeunloadHandler),
              o.Widget.prototype.destroy.call(this);
          },
          _setOption: function _setOption(e, t) {
            o.Widget.prototype._setOption.apply(this, arguments),
              "source" === e && this._initSource(),
              "appendTo" === e &&
                this.menu.element.appendTo(
                  o(t || "body", this.element[0].ownerDocument)[0]
                ),
              "disabled" === e && t && this.xhr && this.xhr.abort();
          },
          _initSource: function _initSource() {
            var e,
              d,
              s = this;
            o.isArray(this.options.source)
              ? ((e = this.options.source),
                (this.source = function (t, d) {
                  d(o.ui.autocomplete.filter(e, t.term));
                }))
              : "string" == typeof this.options.source
              ? ((d = this.options.source),
                (this.source = function (e, t) {
                  s.xhr && s.xhr.abort(),
                    (s.xhr = o.ajax({
                      url: d,
                      data: e,
                      dataType: "json",
                      success: function success(a) {
                        t(a);
                      },
                      error: function error() {
                        t([]);
                      },
                    }));
                }))
              : (this.source = this.options.source);
          },
          search: function search(a, o) {
            return (
              (a = null == a ? this.element.val() : a),
              (this.term = this.element.val()),
              a.length < this.options.minLength
                ? this.close(o)
                : (clearTimeout(this.closing),
                  !1 === this._trigger("search", o) ? void 0 : this._search(a))
            );
          },
          _search: function _search(t) {
            this.pending++,
              this.element.addClass("ui-autocomplete-loading"),
              this.source({ term: t }, this._response());
          },
          _response: function _response() {
            var o = this,
              e = ++d;
            return function (t) {
              e === d && o.__response(t),
                o.pending--,
                o.pending || o.element.removeClass("ui-autocomplete-loading");
            };
          },
          __response: function __response(t) {
            !this.options.disabled && t && t.length
              ? ((t = this._normalize(t)),
                this._suggest(t),
                this._trigger("open"))
              : this.close();
          },
          close: function close(t) {
            clearTimeout(this.closing),
              this.menu.element.is(":visible") &&
                (this.menu.element.removeClass("as_ui-widget-content"),
                this.menu.element.children().hide(),
                this.menu.deactivate(),
                this._trigger("close", t));
          },
          _change: function _change(t) {
            this.previous !== this.element.val() &&
              this._trigger("change", t, { item: this.selectedItem });
          },
          _normalize: function _normalize(e) {
            return e.length && e[0].label && e[0].value
              ? e
              : o.map(e, function (e) {
                  return "string" == typeof e
                    ? { label: e, value: e }
                    : o.extend(
                        {
                          label: e.label || e.value,
                          value: e.value || e.label,
                        },
                        e
                      );
                });
          },
          _suggest: function _suggest(e) {
            var t = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(t, e),
              this.menu.deactivate(),
              this.menu.refresh(),
              t.show(),
              this._resizeMenu(),
              t.position(o.extend({ of: this.element }, this.options.position)),
              this.options.autoFocus &&
                this.menu.next(new o.Event("mouseover"));
          },
          _resizeMenu: function _resizeMenu() {
            var t = this.menu.element;
            t.outerWidth(
              !0 === t.children().hasClass("wd50") ||
                chkFrMb ||
                window.location.href.match("m.indiamart.com")
                ? this.element.outerWidth() + 2
                : Math.max(
                    t.width("").outerWidth() + 1,
                    this.element.outerWidth() + 2
                  )
            );
          },
          _renderMenu: function _renderMenu(d, e) {
            var t = this;
            o.each(e, function (a, e) {
              t._renderItem(d, e);
            });
          },
          _renderItem: function _renderItem(e, t) {
            return o("<li></li>")
              .data("item.autocomplete", t)
              .append(o("<a></a>").text(t.label))
              .appendTo(e);
          },
          _move: function _move(a, e) {
            return this.menu.element.is(":visible")
              ? (this.menu.first() && /^previous/.test(a)) ||
                (this.menu.last() && /^next/.test(a))
                ? (this.element.val(this.term), void this.menu.deactivate())
                : void this.menu[a](e)
              : void this.search(null, e);
          },
          widget: function widget() {
            return this.menu.element;
          },
          _keyEvent: function _keyEvent(a, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) &&
              (this._move(a, e), e.preventDefault());
          },
        }),
          o.extend(o.ui.autocomplete, {
            escapeRegex: function escapeRegex(t) {
              return "undefined" == typeof t
                ? null
                : t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            },
            filter: function filter(e, t) {
              var d = new RegExp(o.ui.autocomplete.escapeRegex(t), "i");
              return o.grep(e, function (t) {
                return d.test(t.label || t.value || t);
              });
            },
          });
      })(jQuery),
      (function (o) {
        o.widget("ui.menu", {
          _create: function _create() {
            var e = this;
            this.element
              .addClass("ui-menu ui-widget as_ui-widget-content ui-corner-all")
              .attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem",
              })
              .click(function (t) {
                !$(t.delegateTarget).hasClass("dsp") ||
                $(t.target.parentElement).hasClass("rcnt") ||
                $(t.target.parentElement).hasClass("topsearches") ||
                !(
                  0 <
                    $(t.target).filter(".wd50.sugbx, .recp, .rc_s,.wd50")
                      .length || "" == $(t.target).children().html()
                ) ||
                $(t.target.parentElement).hasClass("as_D") ||
                $(t.target.parentElement).parent().hasClass("ui-menu-item")
                  ? o(t.target).closest(".ui-menu-item a").length &&
                    (t.preventDefault(), e.select(t))
                  : t.stopPropagation();
              }),
              this.refresh();
          },
          refresh: function refresh() {
            var e = this,
              t = this.element
                .find("li:not(.ui-menu-item):has(a)")
                .addClass("ui-menu-item")
                .attr("role", "menuitem");
            t.find("a")
              .addClass("ui-corner-all")
              .attr("tabindex", -1)
              .mouseenter(function (t) {
                e.activate(t, o(this).parent());
              })
              .mouseleave(function () {
                e.deactivate();
              });
          },
          activate: function activate(o, e) {
            if ((this.deactivate(), this.hasScroll())) {
              var t = e.offset().top - this.element.offset().top,
                d = this.element.scrollTop(),
                a = this.element.height();
              0 > t
                ? this.element.scrollTop(d + t)
                : t >= a && this.element.scrollTop(d + t - a + e.height());
            }
            (this.active = e
              .eq(0)
              .find("a")
              .addClass("as_ui-state-hover")
              .attr("id", "ui-active-menuitem")
              .end()),
              "mouseenter" !== o.type &&
                !0 === $("a:hover").hasClass("ui-corner-all") &&
                $("a:hover").addClass("wht"),
              this._trigger("focus", o, { item: e });
          },
          deactivate: function deactivate() {
            this.active &&
              (this.active
                .find("a")
                .removeClass("as_ui-state-hover")
                .removeAttr("id"),
              this._trigger("blur"),
              (this.active = null));
          },
          next: function next(t) {
            this.move("next", ".as_D:first", t);
          },
          previous: function previous(t) {
            this.move("prev", ".as_D:last", t);
          },
          first: function first() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
          },
          last: function last() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
          },
          move: function move(o, e, t) {
            if (!this.active)
              return void this.activate(t, this.element.find(e));
            var d = this.active[o + "All"](".ui-menu-item").eq(0);
            d.length
              ? this.activate(t, d)
              : this.activate(t, this.element.find(e));
          },
          nextPage: function nextPage(e) {
            if (this.hasScroll()) {
              if (!this.active || this.last())
                return void this.activate(
                  e,
                  this.element.find(".ui-menu-item:first")
                );
              var d = this.active.offset().top,
                s = this.element.height(),
                t = this.element.find(".ui-menu-item").filter(function () {
                  var e = o(this).offset().top - d - s + o(this).height();
                  return 10 > e && -10 < e;
                });
              t.length || (t = this.element.find(".ui-menu-item:last")),
                this.activate(e, t);
            } else
              this.activate(
                e,
                this.element
                  .find(".ui-menu-item")
                  .filter(!this.active || this.last() ? ":first" : ":last")
              );
          },
          previousPage: function previousPage(e) {
            if (this.hasScroll()) {
              if (!this.active || this.first())
                return void this.activate(
                  e,
                  this.element.find(".ui-menu-item:last")
                );
              var d = this.active.offset().top,
                s = this.element.height(),
                t = this.element.find(".ui-menu-item").filter(function () {
                  var e = o(this).offset().top - d + s - o(this).height();
                  return 10 > e && -10 < e;
                });
              t.length || (t = this.element.find(".ui-menu-item:first")),
                this.activate(e, t);
            } else
              this.activate(
                e,
                this.element
                  .find(".ui-menu-item")
                  .filter(!this.active || this.first() ? ":last" : ":first")
              );
          },
          hasScroll: function hasScroll() {
            return (
              this.element.height() <
              this.element[o.fn.prop ? "prop" : "attr"]("scrollHeight")
            );
          },
          select: function select(t) {
            (eventValue =
              "undefined" == typeof event ? $(t.target) : $(event.target)),
              (this.active =
                this.active || $(eventValue).closest(".ui-menu-item")),
              this._trigger("selected", t, { item: this.active });
          },
        });
      })(jQuery);
    var cimjsv,
      perks = ["prod_data", "mcat_data", "keyw_data", "city_data", "meta_data"];
    if (
      ($(this).bind("mousewheel DOMMouseScroll scroll mousedown", function (t) {
        ("mousedown" == t.type &&
          3 != t.which &&
          $("div:hover").hasClass("dsp")) ||
          $(".autocomplete-box").removeClass("dsp").css("display", "none");
      }),
      $(document).bind("keypress", function (t) {
        (13 === t.keyCode ||
          123 === t.keyCode ||
          0 > t.target.id.indexOf("search_string")) &&
          $(".autocomplete-box").removeClass("dsp").css("display", "none");
      }),
      $("#search_string").on("focus", function () {
        $(".sugg_dim").length ||
          $("header").append('<div class="sugg_dim"></div>');
      }),
      $("#search_string").on("focusout", function () {
        $(".sugg_dim").remove();
      }),
      $("#search_string").on("keyup", function (t) {
        27 === t.keyCode &&
          ($(".sugg_dim").remove(), $("#search_string").blur());
      }),
      $(window).on("wheel", function () {
        $(".sugg_dim").remove(), $("#search_string").blur();
      }),
      "undefined" == typeof cimjsv && (cimjsv = {}),
      (cimjsv["//utils.imimg.com/suggest/js/jq-ac-ui.js"] = 369),
      "undefined" == typeof asgv)
    ) {
      var asgv = {};
      (asgv.version = 369),
        (asgv.geoCity = SuggestUtils.readCookie("GeoLoc", "lg_ct")),
        (asgv.ipCity = SuggestUtils.readCookie("iploc", "gctnm")),
        (asgv.data = {}),
        (asgv.isd = {
          iconHeight: 11,
          iconWidth: 0,
          maxData: 500,
          return_all_allowed: !0,
        }),
        (asgv.data.topCountry = ["in", "us", "ae", "gb", "au"]),
        (asgv.data.isd = [
          {
            value: "91",
            label: "India  +91",
            data: { cname: "India", iso: "IN", icon_order: "154" },
          },
          {
            value: "1",
            label: "United States Of America  +1",
            data: {
              cname: "United States Of America",
              iso: "US",
              icon_order: "4",
            },
          },
          {
            value: "971",
            label: "United Arab Emirates  +971",
            data: {
              cname: "United Arab Emirates",
              iso: "AE",
              icon_order: "202",
            },
          },
          {
            value: "44",
            label: "United Kingdom  +44",
            data: { cname: "United Kingdom", iso: "GB", icon_order: "5" },
          },
          {
            value: "61",
            label: "Australia  +61",
            data: { cname: "Australia", iso: "AU", icon_order: "156" },
          },
        ]),
        (asgv.reqBoosters = ""),
        asgv.gid,
        asgv.vid,
        (asgv.userData = !1),
        (asgv.blJsLoaded = !1),
        (asgv.type = "product"),
        (asgv.mode = "unidentified"),
        (asgv.domain1 =
          -1 < window.location.host.indexOf("stg")
            ? location.protocol + "//stg-utils.imimg.com/"
            : -1 < window.location.host.indexOf("dev")
            ? location.protocol + "//dev-utils.imimg.com/"
            : location.protocol + "//utils.imimg.com/"),
        (asgv.domain =
          -1 < window.location.host.indexOf("stg")
            ? location.protocol + "//stg-suggest.imimg.com/"
            : -1 < window.location.host.indexOf("dev")
            ? location.protocol + "//dev-suggest.imimg.com/"
            : location.protocol + "//suggest.imimg.com/"),
        (asgv.gaAcId = "UA-10312824-1");
    }
    (asgv.topSearches = []),
      checkIfAnalyticsLoaded(),
      (Suggestions.prototype.list = function (a, e) {
        return (
          null != a && ((this._list = a), (this.type = e || this.DIRECT)),
          this._list
        );
      }),
      (SuggestionCache.prototype.cache = function (d, l, t, c) {
        if (
          ((d = "domain" == l.type ? d : cleanString(d)),
          (t = "domain" == l.type ? t : cleanString(t.trim(), 1)),
          null != c && "" != d && (this._cache["" + d] = c),
          d in this._cache && "object" == _typeof(this._cache["" + d]))
        )
          return this._cache["" + d];
        if (0 < d.length) {
          var a = this.cache(d.substr(0, d.length - 1), l, t);
          if (null != a) {
            var p = new Suggestions(),
              o = {},
              s = {},
              u = [];
            return (
              (data = a.list()),
              (t =
                "domain" == l.type && "fuzzy" === l.match
                  ? removeVowels(t)
                  : cleanString(t, 1)),
              $.each(data, function (d, e) {
                if (
                  ((u = previouskeyCache(t, e, d, s, l)[d]),
                  "-IM-HEADER" == l.module ||
                    "IM-HEADER" == l.module ||
                    2 == l.dispstyle)
                ) {
                  if (0 == u.length) {
                    if (0 == u.concat(s["spck" + d]).length) {
                      if (((o[d] = asgv.ld), 3 == a.type))
                        for (var c = 0; c < o[d].length; c++)
                          "undefined" != typeof o[d][c] &&
                            "" != o[d][c] &&
                            (o[d][c].last_dis = 1);
                    } else if (((o[d] = u.concat(s["spck" + d])), 3 == a.type))
                      for (var c = 0; c < o[d].length; c++)
                        "undefined" != typeof o[d][c] &&
                          "" != o[d][c] &&
                          (o[d][c].last_dis = 0);
                  } else if (((o[d] = u), 3 == a.type))
                    for (var c = 0; c < o[d].length; c++)
                      "undefined" != typeof o[d][c] &&
                        "" != o[d][c] &&
                        (o[d][c].last_dis = 0);
                  asgv.ld = o[d];
                } else o[d] = 0 == u.length ? u.concat(s["spck" + d]) : u;
              }),
              a.type == a.COMPLETE
                ? p.list(o, p.COMPLETE)
                : p.list(o, p.FILTERED),
              p
            );
          }
        }
        return null;
      }),
      0 == asgv.userData && ((asgv.store = new IMStore()), getGidVidUserData()),
      (IMStore.localStorage = {}),
      (IMStore.localStorageLoaded = !1),
      (IMStore.localStorageQueue = []),
      (IMStore.prototype.getData = function (a, e) {
        return -1 == jQuery.inArray(e, perks)
          ? (0 == asgv.userData && getGidVidUserData(),
            "undefined" == typeof Storage
              ? null
              : ("string" == typeof IMStore.localStorage &&
                  (IMStore.localStorage = $.parseJSON(IMStore.localStorage)),
                $.parseJSON(
                  IMStore.localStorage[
                    "undefined" == typeof a.id
                      ? a.toString().toLowerCase()
                      : a.id.toString().toLowerCase()
                  ] || "{}"
                )[e.toString().toLowerCase()]))
          : (0 == asgv.userData && getGidVidUserData(),
            "undefined" == typeof Storage
              ? null
              : ("string" == typeof IMStore.localStorage &&
                  (IMStore.localStorage = $.parseJSON(IMStore.localStorage)),
                $.parseJSON(IMStore.localStorage[a] || "{}")[e]));
      }),
      (IMStore.receieveMessage = function (t) {
        if (
          (t.data &&
            t.origin.match(/utils.imimg.com/g) &&
            (IMStore.localStorage = t.data) &&
            (IMStore.localStorageLoaded = !0),
          IMStore.localStorageLoaded)
        )
          for (; IMStore.localStorageQueue.length; ) {
            var e = IMStore.localStorageQueue.shift();
            asgv.store.setData(
              e.modId,
              e.key,
              e.data.concat(asgv.store.getData(e.modId, e.key) || [])
            );
          }
      }),
      (IMStore.prototype.setData = function (o, e, t) {
        if ("undefined" == typeof Storage) return null;
        var d = { modId: o, key: e, data: t, url: this.url };
        "undefined" != typeof IMStore.msgHandler &&
          "0" != t[0] &&
          "undefined" != t[0] &&
          IMStore.localStorageLoaded &&
          IMStore.msgHandler.postMessage(d, this.childURL),
          IMStore.localStorageLoaded || IMStore.localStorageQueue.push(d);
      }),
      (Suggester.match = function (o, d, t) {
        t || (t = "beginword");
        var s;
        return (
          (o =
            "undefined" != typeof o &&
            o.replace(/(\\|\[|\]|\*|\?|\{|\}|\.|\(|\))/g, "")),
          (s =
            "beginstring" == t.toString().toLowerCase()
              ? new RegExp("^" + o, "i")
              : new RegExp("\\b" + o, "i")),
          $.grep(d, function (t) {
            var e = cleanString(t.toString().toLowerCase(), 0);
            return s.test(e);
          })
        );
      }),
      (Suggester.getTopN = function (d, e, t, l) {
        t || (t = 45), l || (l = 2);
        for (var c = [], p = {}, a = 1, u = 0; u < d.length; u++)
          if (null !== d[u]) {
            var m = cleanString(
              "object" == _typeof(d[u])
                ? "undefined" == typeof d[u].label
                  ? "undefined" == typeof d[u].id
                    ? null
                    : d[u].id
                        .toString()
                        .toLowerCase()
                        .replace(/(e$|es$|y$|ies$|s$|ing$)/i, "")
                        .replace(/(s )/gi, " ")
                        .replace(/(-)/gi, " ")
                        .replace(/ /g, "")
                  : d[u].label
                      .toString()
                      .toLowerCase()
                      .replace(/(e$|es$|y$|ies$|s$|ing$)/i, "")
                      .replace(/(s )/gi, " ")
                      .replace(/(-)/gi, " ")
                      .replace(/ /g, "")
                : d[u].toString().toLowerCase()
            );
            if (
              (!p["" + m] &&
                ("undefined" == typeof d[u].label || d[u].label.length < t) &&
                (d[u].label && (d[u].pos = a++),
                (d[u].label = 1 == l ? ucwords(d[u].label) : d[u].label),
                (d[u].value = 1 == l ? ucwords(d[u].value) : d[u].value),
                c.push(d[u])),
              (p["" + m] = 1),
              c.length >= e)
            )
              break;
          }
        return c;
      }),
      (Suggester.toTitleCase = function (e) {
        return e.replace(/(^\w{1})|(\s{1}\w{1})/g, function (e) {
          return e.toUpperCase();
        });
      }),
      (Suggester.remDuplicateImg = function (d) {
        var e = JSON.parse(JSON.stringify(d)),
          t = [],
          c = {},
          a = 0,
          p = 0;
        for (
          $(e).each(function (a, e) {
            "object" == _typeof(e.data) &&
              "undefined" == typeof e.data.img &&
              (e.reldata = JSON.parse(JSON.stringify(e.data)));
          }),
            p = e.length - 1;
          0 <= p;
          p--
        )
          if (
            "object" == _typeof(e[p]) &&
            "object" == _typeof(e[p].data) &&
            "string" == typeof e[p].data.img
          ) {
            var u = e[p].data.img;
            c["" + u] && delete e[p].data.img,
              (u = e[p].data.img),
              (c["" + u] = 1);
          }
        for (p = 0; p < e.length; p++)
          if (
            (p < e.length &&
              ("object" == _typeof(e[p].data) &&
              "string" == typeof e[p].data.img
                ? delete e[p].data.img
                : e[p]),
            "object" == _typeof(e[p]) &&
              "object" == _typeof(e[p].data) &&
              1 <
                $.map(Object.keys(e[p].data), function (t) {
                  return 0 === t.indexOf("cat") ? t : void 0;
                }).length /
                  2 &&
              1 > a)
          ) {
            var m = 1;
            for (
              t.push(e[p]), t[t.length - 1].pos = p + 1, a++, m = 0;
              $.map(Object.keys(e[p].data), function (t) {
                return 0 === t.indexOf("cat") ? t : void 0;
              }).length /
                2 >
                m && 2 != m;
              m++
            )
              if (
                "object" == _typeof(e[p].data) &&
                "string" == typeof Object.keys(e[p].data)[m + m]
              ) {
                var g = { label: e[p].label, value: e[p].value, pos: p + 1 };
                (g.data = {}),
                  (g.reldata = e[p].reldata),
                  (g.data.cat =
                    e[p].data[
                      $.map(Object.keys(e[p].data), function (t) {
                        return 0 === t.indexOf("cat") ? t : void 0;
                      })[m + m]
                    ]),
                  (g.data.catid =
                    e[p].data[
                      $.map(Object.keys(e[p].data), function (t) {
                        return 0 === t.indexOf("cat") ? t : void 0;
                      })[2 * m + 1]
                    ]),
                  t.push(g);
              } else
                "object" == _typeof(e[p].data) && delete t[t.length - m].data;
          } else
            t.push(e[p]),
              (t[t.length - 1].pos = p + 1),
              "object" == _typeof(t[t.length - 1].data) &&
                "string" == typeof t[t.length - 1].data.cat1 &&
                2 <= p &&
                delete t[t.length - 1].data;
        return t;
      }),
      (Suggester.getArrayCaseInsensitiveMatch = function (o, a) {
        var d = -1;
        return (
          "undefined" != typeof o &&
            ((o = cleanString(o)),
            (o =
              "undefined" == typeof o.id
                ? o.toString().toLowerCase()
                : o.id.toString().toLowerCase()),
            $.each(a, function (e, t) {
              return (
                (t = cleanString(
                  "object" == _typeof(t)
                    ? "undefined" == typeof t.name
                      ? "undefined" == typeof t.id
                        ? null
                        : t.id.toString().toLowerCase()
                      : t.name.toString().toLowerCase()
                    : t.toString().toLowerCase()
                )),
                o == t.toString().toLowerCase() ? (d = e) : void 0
              );
            })),
          d
        );
      }),
      window.addEventListener
        ? addEventListener("message", IMStore.receieveMessage, !1)
        : attachEvent("onmessage", IMStore.receieveMessage),
      (as_css =
        chkFrMb || window.location.host.match("m.indiamart.com")
          ? [
              ".cls-city li.ui-menu-item a.ui-state-hover {padding:2px 0}.ui-menu {list-style:none;margin:0;display:block;float:left}.ui-autocomplete{position:absolute!important;width:100%}.ui-menu .ui-menu-item { list-style: none; cursor: pointer; background: #fff; position: relative;font-family:arial; padding: 0px 5px !important;}.flng-l.pro-q { top: 13px; }.ui-menu .ui-menu-item a {text-decoration:none;font-size:16px;list-style:none;cursor:pointer;display:block;text-indent:5px;padding:5px 0;font-family:arial;}.ui-menu .ui-menu-item a:nth-child(1){color: #0C0F71!important;}.ui-menu .ui-menu-item a.ui-state-hover,.ui-menu .ui-menu-item a.ui-state-active {background:none repeat scroll 0 0 #efefef;color:#0C0F71;padding:5px 0}.ui-placeholder-input{color:#8d8d8d}.as_ui-widget-content,.as_ui-widget-content>ul{background:#fff;box-shadow:0px 5px 5px #cccccc;padding:0px !important;border:1px solid #0C0F71 !important; border-top:0;border-left-color:#0C0F71 !important;border-top-color: #FFFFFF !important}div.mAtsugst.as_ui-widget-content>ul{box-shadow:none;border:none !important}.as_ui-widget-content li:hover{background:#efefef}.as_ui-widget-content li a:hover{background:none!important;color:#0C0F71!important}",
              ".flng-l { z-index: 2; margin-right: 3px; font-size: 12px !important; font-weight: bold!important; visibility: hidden; color: #D0392D; position: absolute; right: 5px; top: 0; }.ui-menu .ui-menu-item  .ui-state-hover  .flng-l{visibility:visible;}.ui-menu .ui-menu-item a:nth-child(1).ui-state-hover, .ui-menu .ui-menu-item a:nth-child(1).ui-state-active {background: none repeat scroll 0 0 #efefef !important; color: #0C0F71 !important;}.ui-menu .ui-menu-item a:nth-child(2).ui-state-hover, .ui-menu .ui-menu-item a:nth-child(2).ui-state-active {background: none repeat scroll 0 0 #efefef !important;color: #D0392D !important;padding:3px 0 !important;}.as_ui-widget-content li {padding: 0 !important;}.ui-menu .ui-menu-item a.ui-state-hover.flng-l {visibility:visible;}.ui-menu .ui-menu-item a.ui-state-hover .blink, .ui-menu-item:nth-child(2) .flng-l .blink{ -webkit-animation-duration: 2s; animation-duration: 2s; -webkit-animation-fill-mode: both; animation-fill-mode: both;animation-iteration-count:infinite; -webkit-animation-iteration-count:infinite; -webkit-animation-name: as_shake;animation-name: as_shake;font-size:15px; display:inline-block; } @-webkit-keyframes as_shake { 0%, 100% {-webkit-transform: translateX(0);} 10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-3px);}     20%, 40%, 60%, 80% {-webkit-transform: translateX(3px);} } @keyframes as_shake {  0%, 100% {transform: translateX(0);}  10%, 30%, 50%, 70%, 90% {transform: translateX(-3px);}20%, 40%, 60%, 80% {transform: translateX(3px);} }.img-sep{ border-top: 2px solid #C1141A;}",
              ".dropdown dd,.dropdown dt,.dropdown ul{margin:0px;padding:0px;}.dropdown dd{position:relative;}.dropdown dt a{display:inline-block;width:35px;height:20px;}.dropdown dt a span{cursor:pointer; display:block;}.dropdown dd ul{background:#FFFFFF none repeat scroll 0 0;display:none;list-style:none; padding:5px;position:absolute;left:0px;top:2px;width:auto;height:155px;overflow-y:scroll;border:1px solid #bdc7d8;}.dropdown dd ul li a {color:black;padding:5px;display:block;display:inline-block;cursor:pointer; font-size:14px;font-family: arial;text-decoration: none;}.dropdown dt a  span,.dropdown dd ul li span{width:16px;height:11px;background:url('//utils.imimg.com/imsrchui/imgs/country-v5.png');}.dropdown dt a  span{margin:4px 3px;}.dropdown dd ul li span{display:inline-block;}.value{bottom: 5px;left: 2px;position: relative;font-size:14px;font-family: Arial;}.as_arrow{position: relative; top: 40%;margin-top:-19px;left:24px;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent; border-top: 4px solid #555;}.as_arrow.up{border-top:none;border-bottom:4px solid #555;}.dropdown dd ul li.selected {background:#ddf}.dropdown dd ul li:hover {background: none repeat scroll 0 0 #efefef; color: #FFFFFF;cursor:pointer;}.dropdown dd rll li:nth-child(3){border-bottom: 1px solid #ccc;}.flng-l{float:right;visibility:hidden;  color: #D0392D !important;z-index: 2;  margin-right: 3px;}",
              ".cat{color:#c94105;font:bold 12px Arial;padding-left:5px} .ui-title{border-top: 1px solid #ccc;margin-top: 12px;overflow: visible;height: 5px;padding:5px 5px 12px 10px;} .ui-title.hover-d{background-color: #fff !important;color: #333;} .ui-title .text {color:#585454;font:bold 13px Arial} .product-img {display:table;} .product-img .image{text-align: center;display:table-cell;width:50px;height:40px} .product-img .image img {max-height:40px;max-width:45px;margin:0px 0px -3px;} .product-img .product-title{display:table-cell;vertical-align:middle;color:#0C0F71;font-size:16px;} .product-img .price {color: #b00;display: block;font: bold 12px Arial;margin-top: 5px;} .scat{color:#c94105;font:bold 16px Arial;padding-left:5px}.showmore{text-align: right !important;} li.showmore a{color: #545454 !important;}",
              "div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all{position:absolute!important;top:54px;min-height:100%;left:0!important;height:100%!important;width:100%!important;background-color:#fff!important;padding:10px!important;overflow:auto!important;box-shadow:none;padding:0px!important;}div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all>ul>li>a{font-family:arial!important;font-size:14px!important;color:#333!important;padding:11px 30px!important;border-bottom:1px solid #dddcdd!important;display:block!important;position:relative!important}div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all>ul>li>a:hover,div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all>ul>li>a>.topSrch+span{color:#0C0F71!important}div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all>ul>li>a>i{position:absolute!important;top:0!important;width:30px!important;height:100%!important;background-image:url('https://utils.imimg.com/img/atSgstIcon.svg')!important;background-repeat:no-repeat!important;background-position:-100px 100px!important}div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all>ul>li>a>i.lIcon{left:0!important}div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all>ul>li>a>i.rIcon{right:0!important}div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all>ul>li>a>i.hstry{background-position:0 11px!important}div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all>ul>li>a>i.topSrch{background-position:-40px 11px!important}div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all>ul>li>a>i.autoSrch{background-position:-80px 11px!important}div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all>ul>li>a>i.copyIcn{background-position:-110px 11px!important}.suppl.mAtsugst li a b{font-weight: normal}div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all>ul.ui-autocomplete{position:relative!important;}div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all>ul>li>a{font-size:16px!important;}div.mAtsugst.ui-autocomplete.ui-menu.ui-widget.as_ui-widget-content.ui-corner-all{position:fixed!important;border:none!important}",
            ]
          : [
              ".dropdown dd,.dropdown dt,.dropdown ul{margin:0px;padding:0px;}.dropdown dd{position:relative;}.dropdown dt a{display:inline-block;width:35px;height:20px;}.dropdown dt a span{cursor:pointer; display:block;}.dropdown dd ul{background:#FFFFFF none repeat scroll 0 0;display:none;list-style:none; padding:5px;position:absolute;left:0px;top:2px;width:auto;height:155px;overflow-y:scroll;border:1px solid #bdc7d8;}.dropdown dd ul li a {color:black;padding:5px;display:block;display:inline-block;cursor:pointer; font-size:14px;font-family: arial;text-decoration: none;}.dropdown dt a  span,.dropdown dd ul li span{width:16px;height:11px;background:url('//utils.imimg.com/imsrchui/imgs/country-v5.png');}.dropdown dt a  span{margin:4px 3px;}.dropdown dd ul li span{display:inline-block;}.value{bottom: 5px;left: 2px;position: relative;font-size:14px;font-family: Arial;}.as_arrow{position: relative; top: 40%;margin-top:-19px;left:24px;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent; border-top: 4px solid #555;}.as_arrow.up{border-top:none;border-bottom:4px solid #555;}.dropdown dd ul li.selected {background:#ddf}.dropdown dd ul li:hover {background: none repeat scroll 0 0 #efefef; color: #FFFFFF;cursor:pointer;}.dropdown dd rll li:nth-child(3){border-bottom: 1px solid #ccc;}",
              ".ui-menu .ui-menu-item a.as_ui-state-hover.flng-l {visibility:visible;color:#fff;}.flng-l.pro-q { top: 13px; }.ui-menu .ui-menu-item .as_ui-state-hover .flng-l{visibility:visible;color:#fff !important;}.as_ui-widget-content{background:#fff;padding:0px !important; border-top:0; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px;}.as_ui-widget-content li{padding:0 !important;}.wd50 .ui-autocomplete .ui-menu-item .flng-l {z-index: 2;margin-right: 3px;font-size: 12px !important;visibility: hidden;position: absolute;background: #2e3192;color: #fff !important;right: -2px;top: 2px;font-weight: normal;border-radius: 5px; height: 12px;line-height: 12px;}.blink {font-size:16px !important;font-weight:bold}.-menu-menu-item:hover .flng-l {visibility:visible;background:#2e3192!important;color: #fff!important;}.ui-menu .sug_box {background: #f6f7f9;border-bottom: 1px solid #e2e2e2;padding:5px 6px;color:#888;font-size:16px;font-weight: bold}.ui-pleft {text-indent:15px!important}.ui-sleft {text-indent:5px!important}.img-sep {border-top:2px solid #ccc;}.pro-q {top:13px;}.wd50 {width:100%;position:relative;padding-bottom: 5px;padding-top: 4px;}.autocomplete-box {padding:0px !important;left:680px;overflow: hidden;z-index:3;}.autocomplete-box ul{margin: 0 0 0px}.clear {clear: both}.ui-menu-box{float:left;width:50%;text-align:center;color:#0c0f71 !important;background:#ededed!important;}.recp {display:table;text-align:left;color:#000;font-size:16px;font-weight:bold;font-style:italic;padding:0 5px;width:99%}.sugbx{background:#eee !important;}.sugbx ul {list-style:none;margin:0;padding:0;}.sugbx ul li{padding:5px 0}",
              ".ui-menu .ui-menu-item a.as_ui-state-hover,.ui-menu .ui-menu-item a.as_ui-state-active{background:#ededed !important;padding:6px 0}.ui-menu{list-style:none;}.ui-menu .ui-menu-item{list-style:none;position:relative;font-family:arial;background:#fff}.ui-menu .ui-menu-item a{text-decoration:none;font-size:16px;list-style:none;cursor:pointer;display:block;text-indent:5px;padding:6px 5px !important;font-family:Gotham,'Helvetica Neue',Helvetica,Arial,sans-serif !important;color: #0C0F71 !important}.ui-placeholder-input{color:#8d8d8d}.as_ui-widget-content li:hover{background:#ededed}.as_ui-widget-content li a:hover{background:none;}.cat {color: #c94105;font:bold 16px Arial;padding-left:5px}.ui-title {border-top:1px solid #ccc;margin-top:12px;overflow:visible;height:5px;padding:5px 5px 12px 10px;}.ui-title.hover-d {background-color:#fff !important;color:#333;}.ui-title .text {color:#585454;font:bold 16px Arial}.product-img {display: table;width: 100%}.product-img .pro_img {text-align:center;display:table-cell;width:50px;height:40px}.product-img .pro_img img{max-height:45px;transform:scale(1.3);border:1px solid #ccc;padding:10px;background:#fff;}.product-title{color: #0C0F71;overflow:hidden;font-size:16px;text-align: center;padding-bottom: 10px;display: inline-block;}.scat {color:#c94105;font:bold 16px Arial;padding-left:5px}.showmore {text-align:right !important;}li.showmore a {color:#545454 !important;}.wht{background: #fff !important}.sugbx hr{margin-top:15px;background: -moz-linear-gradient(left, rgba(242,242,242,0.7) 0%, rgba(242,242,242,0.7) 1%, rgba(158,158,158,0.84) 52%, rgba(242,242,242,0.98) 100%);background: -webkit-linear-gradient(left, rgba(242,242,242,0.7) 0%,rgba(242,242,242,0.7) 1%,rgba(158,158,158,0.84) 52%,rgba(242,242,242,0.98) 100%);background: linear-gradient(to right, rgba(242,242,242,0.7) 0%,rgba(242,242,242,0.7) 1%,rgba(158,158,158,0.84) 52%,rgba(242,242,242,0.98) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b3f2f2f2', endColorstr='#faf2f2f2',GradientType=1 );height: 1px;border: none;}.dsp{display: table !important;}.sIcon{background: url(//utils.imimg.com/globalhf/hrd-sp-v19.png);width: 20px;height: 20px;top: 2px;left:2px;position: absolute;padding-top: 4px;}i.sIcon.rcnt{background-position:-341px -136px}i.sIcon.pplr{background-position:-413px -136px}i.sIcon.nrml{background-position:-377px -138px}.ui-menu.dAtsugst .ui-menu-item a{padding: 6px 5px 6px 20px!important;}.suppl.wd50 ul li a b{font-weight: normal}.sugg_dim{background-color: rgba(0,0,0,0.7);z-index: 8;display: block;position: fixed;top: 55px;bottom: 0;left: 0;right: 0;margin: auto;}",
            ]),
      as_css.forEach(function (e) {
        for (var t = -1, o = 0; o < document.styleSheets.length; o++)
          e ===
            (null !== document.styleSheets[o].ownerNode &&
              document.styleSheets[o].ownerNode.innerText) && (t = 1);
        -1 == t && $("<style>" + e + "</style>").appendTo("head");
      });
  } else throw new Error("file already loaded");
} catch (t) {
  "undefined" != typeof glmodid &&
    "" != glmodid &&
    eventTrack(
      "Auto-suggest",
      "mutilple calling of jq-ac file by " + glmodid,
      0,
      0
    ),
    console.trace(t);
}
