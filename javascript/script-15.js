var windowopen = !1,
  userType = " ",
  imesh_obj = {},
  v4iilex_obj = {},
  im_iss_obj = {},
  GLIMHeader = "YES",
  bl_log_link = 0,
  flag = 1,
  iso = "",
  cq_src = "",
  allowedlang = ["en", "hi"],
  hddrpdn2_ct = 0,
  hd_popup = 0,
  webAddressLoc = location.hostname;
if (null == gblhrd) var gblhrd = { mcatid: "", catid: "" };
var homeServerName = webAddressLoc.match(/^dev/)
  ? "//dev-utils.imimg.com/"
  : webAddressLoc.match(/^stg/)
  ? "//stg-utils.imimg.com/"
  : "//utils.imimg.com/";
if (
  (setTimeout(function () {
    void 0 !== page.pageType
      ? ("Dirhome" == (cq_src = page.pageType) && (cq_src = "dirhome"),
        "impcat" == cq_src && (cq_src = "mcat"),
        "search" == cq_src &&
          window.location.href.match(/cq=/) &&
          (cq_src = "city-search"))
      : "undefined" != typeof dirPageTyp &&
        ("impcat-gallery" == dirPageTyp && (cq_src = "mcat-gallery"),
        "city-impcat-gallery" == dirPageTyp && (cq_src = "mcat-city-gallery")),
      localStorage.setItem("cq_src_pge", cq_src);
  }, 3e3),
  null !== $("#hd_usercity").html())
) {
  var rec_city = $("#hd_usercity").html(),
    new_cook = new userDataCookie();
  new_cook.set({ ctval: rec_city }, "hd_ctval");
}
function loadCSS() {
  var e = document.createElement("style");
  (e.type = "text/css"),
    (e.innerHTML =
      '.inHbg,.h_ic24:before,.h_ic25:before,.h_ic26:before,.h_ic27:before,.h_ic28:before,.h_ic29:before,.h_ic30:before,.h_ic31:before,.h_ic32:before,.h_ic33:before,.h_ic35:before,.h_ic1:before,.h_ic2:before,.h_ic34:before,.h_ic3:before,.h_ic4:before,.h_ic6:before,.h_ic19:before,.h_ic16:before,.h_ic10:before,.h_ic7:before,.h_ic8:before,.h_ic5:before,.h_ic21:before,.h_ic11:before,.h_ic36:before,.h_ic37:before,.h_ic38:before,.h_ic39:before,.cvTwtIn:before{background-image: url("https://utils.imimg.com/globalhf/home-new-icon8.png");background-repeat: no-repeat;}'),
    document.getElementsByTagName("head")[0].appendChild(e);
}
function hd_select_city(e, a) {
  (hd_cf_value = "undefined" != a.item.value ? a.item.value : ""),
    $("#hd_usercity").html(hd_cf_value);
  new userDataCookie();
  $(".ui-autocomplete").hide(),
    $("#city_hold").hide(),
    $("#blkSrn").hide(),
    $("html").removeClass("hd_Ovr"),
    $(".hd_ctfltr").hide();
}
function supplier_verfied(e, a, i) {
  "" == ver_logo.innerHTML.trim() &&
    (ver_logo.innerHTML =
      '<img alt="im Logo" id="ver_logo" class="mt10" src="https://hm.imimg.com/template-mdc/imLogo1.png">'),
    ver_cert.classList.remove("Hd_dbn"),
    ver_sc.classList.remove("Hd_dbn"),
    (ver_company.innerHTML = a),
    (ver_city.innerHTML = i),
    (document.getElementsByTagName("html")[0].style.overflow = "hidden");
  var t = [];
  for (var r in ((t[3] = ""), e))
    "Director_Proprietor" == r && "" != e[r]
      ? (t[4] =
          '<li><span class="wsnw" >' +
          r.replace("_", " ") +
          ': &nbsp;</span><span class="fwm">' +
          e[r] +
          "</span></li>")
      : "Business_Address" == r && "" != e[r]
      ? (t[5] =
          '<li><span class="wsnw" >' +
          r.replace("_", " ") +
          ': &nbsp;</span><span class="fwm">' +
          e[r] +
          "</span></li>")
      : "GSTIN" == r && "" != e[r]
      ? (t[2] =
          '<li><svg class="svgIcn ts_tik"><use xlink:href = "#tik"/></svg><span class="wsnw" >' +
          r.replace("_", " ") +
          ': &nbsp;</span><span class="fwm">' +
          e[r] +
          "</span></li>")
      : "ver_mob" == r && "" != e[r]
      ? (t[0] =
          '<li><svg class="svgIcn ts_tik"><use xlink:href = "#tik"/></svg><span class="wsnw">Mobile Number &nbsp;</span></li>')
      : "ver_mail" == r &&
        "" != e[r] &&
        (t[1] =
          '<li><svg class="svgIcn ts_tik"><use xlink:href = "#tik"/></svg><span class="wsnw">Email Id &nbsp;</span></li>'),
      ("Director_Proprietor" != r && "Business_Address" != r) ||
        "" == e[r] ||
        (t[3] =
          '<li><p class="fs12 clr2 mt6">User declared information</p></li>'),
      ("GSTIN" != r && "ver_mob" != r && "ver_mail" != r) ||
        "" == e[r] ||
        (console.log("inside"), $("#ver_det").show());
  t = t.join(" ");
  ver_details.insertAdjacentHTML("beforeend", t),
    document.body.addEventListener("keydown", function (e) {
      "Escape" == e.key && close_cert();
    });
}
function close_cert() {
  ver_cert.classList.contains("Hd_dbn") ||
    (ver_cert.classList.add("Hd_dbn"),
    ver_sc.classList.add("Hd_dbn"),
    (document.getElementsByTagName("html")[0].style.overflow = "auto"),
    (ver_details.innerHTML = ""),
    (ver_company.innerHTML = ""),
    (ver_city.innerHTML = ""));
}
if (
  ("complete" !== document.readyState
    ? window.addEventListener
      ? window.addEventListener(
          "load",
          function () {
            loadCSS();
          },
          !1
        )
      : window.attachEvent
      ? window.attachEvent("onload", function () {
          loadCSS();
        })
      : (window.onload = function () {
          loadCSS();
        })
    : loadCSS(),
  "FCP" == glmodid ||
    "PRODDTL" == glmodid ||
    "DIR" == glmodid ||
    "STDPRD" == glmodid)
) {
  var verified_Supplier =
      '<div class="container pr ts_inner_ln"><div class="clos_cert"><span class="clos_btn Hd_db cpo" onclick=close_cert();></span><svg viewBox="0 0 30 30"><path d="M30,1.363,28.637,0,15,13.637,1.363,0,0,1.363,13.637,15,0,28.637,1.363,30,15,16.363,28.637,30,30,28.637,16.363,15Z"></path></svg></div><div class="tac pb30"><div class="certLgo df jcc aic pr"><svg class="svgIcn ts_tik"><use xlink:href="#tik"/></svg></div><hgroup><h1 class="fs20 fwn clr4 ls11" id="ver_company"></h1><h3 class="fs14 fwn clr2 ls75 mt5" id="ver_city"></h3></hgroup><p class="fs14 mt20 clr3">is a member of IndiaMART</p></div><div class="w1 ma df jcc certmain"><p class="fs12 clr2" id="ver_det" style="display:none">Following details of the company have been verified</p><ul class="ts_cmpn_dtl fs14 ver_details"></ul></div><div class="pb30 w1 ma mt20"><div class="fs11 tac clr3 mt20 lh15"><div id="ver_logo" class="ver_logo"></div></div></div><div class="ts_vctr_dsgn"><svg class="ts_dsgn ts_lt_dsgn"><use xlink:href="#florish"/></svg><svg class="ts_dsgn ts_rt_dsgn"><use xlink:href="#florish"/></svg><svg class="ts_dsgn ts_rb_dsgn"><use xlink:href="#florish"/></svg><svg class="ts_dsgn ts_lb_dsgn"><use xlink:href="#florish"/></svg></div></div><svg xmlns="https://www.w3.org/2000/svg" width="0" height="0" class="svgGrp"><symbol id="florish" viewBox="0 0 50 50"><path d="M0,50V43H.018l1.315-1.315L3.34,43.693c3.137,3.136,6.772,4.684,10.5,4.479a14.584,14.584,0,0,0,9.646-4.815,11.456,11.456,0,0,0,3.224-7.726,9.706,9.706,0,0,0-3.024-7.307A7.673,7.673,0,0,0,17.825,26.3a8.935,8.935,0,0,0-5.939,2.851,6.479,6.479,0,0,0-.122,9.162l-1.3,1.367c-3.192-3.008-3.122-8.265.159-11.718a11.066,11.066,0,0,1,7.222-3.468,9.35,9.35,0,0,1,7.142,2.47A11.36,11.36,0,0,1,28.521,35.5a13.412,13.412,0,0,1-3.77,9.048h0c-.119.127-.238.25-.368.375a16.434,16.434,0,0,1-10.59,5.054c-4.234.236-8.309-1.479-11.786-4.955L2,45.017V50Zm33.989-8.023a6.033,6.033,0,0,1-1.767-4.317A6.209,6.209,0,0,1,38.379,31.5a6.034,6.034,0,0,1,6.085,6.085,6.209,6.209,0,0,1-6.158,6.157h-.05A6.038,6.038,0,0,1,33.989,41.978Zm2.687-8.366a4.408,4.408,0,0,0-2.705,4.039,4.289,4.289,0,0,0,1.259,3.089A4.41,4.41,0,0,0,42.712,37.6a4.294,4.294,0,0,0-1.26-3.088,4.408,4.408,0,0,0-4.776-.9Zm-9.715-8.617a9.348,9.348,0,0,1-2.471-7.141,11.066,11.066,0,0,1,3.463-7.22c3.454-3.281,8.711-3.35,11.718-.158l-1.367,1.3a6.477,6.477,0,0,0-9.161.122A8.932,8.932,0,0,0,26.3,17.829,7.672,7.672,0,0,0,28.328,23.7a9.7,9.7,0,0,0,7.3,3.021,11.459,11.459,0,0,0,7.729-3.227,14.585,14.585,0,0,0,4.811-9.645c.208-3.734-1.343-7.367-4.48-10.5L41.684,1.333,43,.015V0h7V2H45.015l.007.007C48.5,5.483,50.212,9.56,49.979,13.8a16.44,16.44,0,0,1-5.053,10.595c-.123.123-.252.243-.375.365a13.417,13.417,0,0,1-9.048,3.77q-.153,0-.305,0A11.359,11.359,0,0,1,26.961,24.995ZM11.217,16.912a10.785,10.785,0,0,1-3.105-8.7A10.785,10.785,0,0,1,19.919,20.018h0a10.781,10.781,0,0,1-8.7-3.105Zm6.86,1.263A8.213,8.213,0,0,0,15.57,12.56h0a8.215,8.215,0,0,0-5.615-2.5A8.6,8.6,0,0,0,18.076,18.175Z"/></symbol><symbol id="tik" viewBox="0 0 14.97 10.75"><path d="M4.536 10.454L.293 6.211a1 1 0 1 1 1.414-1.414l3.529 3.528L13.268.293a1.001 1.001 0 0 1 1.418 1.414l-8.489 8.486a1 1 0 0 1-.115.1 1 1 0 0 1-1.545.162z"/></symbol><symbol id="cnticn" viewBox="0 0 10 9.999"><path d="M134.4,629.149a4.311,4.311,0,0,1-1.475-.314,12.132,12.132,0,0,1-6.217-6.217c-.42-1.108-.416-2.024.009-2.449l.146-.152a2.121,2.121,0,0,1,1.385-.867,1.67,1.67,0,0,1,1.229.752c1.158,1.443.609,1.985.028,2.558l-.108.106c-.038.037-.322.422,1.418,2.163a9.38,9.38,0,0,0,1.4,1.2,1.368,1.368,0,0,0,.634.268.181.181,0,0,0,.134-.047l.107-.106a1.611,1.611,0,0,1,1.123-.655,2.488,2.488,0,0,1,1.435.685,1.669,1.669,0,0,1,.751,1.182,1.971,1.971,0,0,1-.834,1.4l-.185.178A1.348,1.348,0,0,1,134.4,629.149Zm-6.148-9.56c-.377,0-.727.37-1.035.7l-.19.2c-.285.285-.248,1.082.092,1.983a11.707,11.707,0,0,0,5.961,5.962,3.886,3.886,0,0,0,1.325.285.932.932,0,0,0,.661-.194l.187-.181c.339-.321.718-.679.7-1.066a1.294,1.294,0,0,0-.588-.857,2.07,2.07,0,0,0-1.141-.581c-.316,0-.541.228-.826.516l-.11.11a.6.6,0,0,1-.437.175,1.729,1.729,0,0,1-.882-.337,9.879,9.879,0,0,1-1.466-1.257,7.905,7.905,0,0,1-1.411-1.73c-.246-.469-.248-.814,0-1.055l.1-.1c.548-.539.85-.836-.061-1.971a1.309,1.309,0,0,0-.857-.588l-.024-.053Z" transform="translate(-126.398 -619.15)"/> </symbol><symbol id="mlicon" viewBox="0 0 12.005 7.842"><path d="M246.256,628.625h-4.7a1.24,1.24,0,0,1-1.289-1.282V622.11a1.252,1.252,0,0,1,1.3-1.32c.429-.007.859,0,1.289,0h8.061a1.25,1.25,0,0,1,1.293.91,1.7,1.7,0,0,1,.057.437q.006,2.587,0,5.175a1.253,1.253,0,0,1-1.319,1.315Zm-5.011-7.211,5.026,4.11,5.021-4.108C251.057,621.315,241.505,621.311,241.245,621.414Zm0,6.556v.061c.143.014.285.04.428.04h9.214a4.312,4.312,0,0,0,.46-.053l-3.3-3.223-1.773,1.45-1.776-1.45Zm10.445-.4v-5.76l-3.212,2.627Zm-10.84.006,3.218-3.137-3.218-2.631Z" transform="translate(-240.27 -620.787)"/></symbol></svg>',
    ver_cert = document.getElementsByClassName("ver_cert")[0];
  ver_cert.innerHTML = verified_Supplier;
  var adr = document.getElementById("ver_add"),
    ver_sc = document.getElementById("ver_sc"),
    ver_logo = document.getElementById("ver_logo"),
    ver_company = document.getElementById("ver_company"),
    ver_city = document.getElementById("ver_city"),
    ver_details = document.getElementsByClassName("ver_details")[0];
}
if (void 0 === glmodid) var glmodid;
if ("object" != typeof page) var page = {};
var usr_img = "",
  usr_mob = "",
  usr_verified = "",
  prevglid = "",
  curglid = "";
function userDataCookie() {
  (this.get = function (e) {
    var a;
    e = e || "ImeshVisitor";
    var i;
    i = document.cookie.split(";");
    for (var t = 0; t < i.length; t++) {
      var r = i[t];
      if (r.replace(/^\s+|\s+$/g, "").split("=")[0] == e) {
        var o = (r = unescape(r)).indexOf(e + "=");
        a = r.substring(o + e.length + 1);
      }
    }
    return a ? strToObj(a) : "";
  }),
    (this.set = function (e, a) {
      if (void 0 !== e) {
        var i, t;
        if ("xnHist" == (a = a || "ImeshVisitor"))
          for (var r in ((i = {
            pv: "1",
            ipv: "1",
            fpv: "1",
            city: "1",
            cvstate: "1",
            popupshown: "1",
            install: "1 ",
            ss: "1",
            mb: "1",
            tm: "1",
            age: "1",
            count: "1",
            time: "1",
            glid: "1",
          }),
          (t = new userDataCookie().get(a)),
          i))
            i[r] && "" != e[r] && 0 != e[r]
              ? (i[r] = e[r] || t[r])
              : (i[r] = e[r]);
        if ("hd_ctval" == a)
          for (var r in ((i = { ctval: "1" }),
          (t = new userDataCookie().get(a)),
          i))
            i[r] && "" != e[r] && 0 != e[r]
              ? (i[r] = e[r] || t[r])
              : (i[r] = e[r]);
        else if ("ImeshVisitor" == a) {
          for (var r in ((i = {
            fn: "1",
            em: "1",
            phcc: "1",
            iso: "1",
            mb1: "1",
            pct: "1",
            ctid: "1",
            glid: "1",
            cd: "1",
            cmid: "1",
            utyp: "1",
            ev: "1",
            uv: "1",
            usts: "1",
            admln: "1",
            admsales: 1,
          }),
          (t = new userDataCookie().get()),
          i))
            "number" == typeof i[r]
              ? (i[r] = e[r])
              : (i[r] = e[r] || t[r] || "");
          var o = new Date().toString();
          i.cd =
            o.substr(8, 2) +
            "/" +
            o.substr(4, 3).toUpperCase() +
            "/" +
            o.substr(11, 4);
        } else if ("v4iilex" == a)
          for (var r in ((i = {
            admln: "1",
            admsales: "1",
            au: "1",
            id: "1",
            vcd: "1",
          }),
          (t = new userDataCookie().get(a)),
          i))
            i[r] && "" != e[r] && 0 != e[r]
              ? (i[r] = e[r] || t[r])
              : (i[r] = e[r]);
        else if ("im_iss" == a)
          for (var r in ((i = { t: "1" }),
          (t = new userDataCookie().get(a)),
          i))
            i[r] && "" != e[r] && 0 != e[r]
              ? (i[r] = e[r] || t[r])
              : (i[r] = e[r]);
        (newCookie = objToStr(i)),
          ("undefined" != typeof newCookie &&
            "" != newCookie &&
            null !== newCookie) ||
            gaTrack(
              "userDataCookie set function of centralized header is empty" +
                newCookie
            ),
          (expires = new Date()),
          "ImeshVisitor" == a
            ? (expires.setTime(expires.getTime() + 63072e6),
              (document.cookie =
                a +
                "=" +
                escape(newCookie) +
                ";expires=" +
                expires.toGMTString() +
                ";domain=.indiamart.com;path =/;"),
              "undefined" != typeof perWidget &&
                "MY" != glmodid &&
                syncDataCheck())
            : "im_iss" == a
            ? (expires.setTime(expires.getTime() + 2592e6),
              (document.cookie =
                a +
                "=" +
                escape(newCookie) +
                ";expires=" +
                expires.toGMTString() +
                ";domain=.indiamart.com;path =/;"))
            : "hd_ctval" == a
            ? (document.cookie =
                a + "=" + escape(newCookie) + ";domain=.indiamart.com;path=/;")
            : "v4iilex" == a
            ? (expires.setTime(expires.getTime() + 2592e6),
              (document.cookie =
                a +
                "=" +
                escape(newCookie) +
                ";expires=" +
                expires.toGMTString() +
                ";domain=.indiamart.com; path =/;"))
            : (expires.setTime(expires.getTime() + 2592e6),
              (document.cookie =
                a +
                "=" +
                escape(newCookie) +
                ";expires=" +
                expires.toGMTString() +
                ";domain=.indiamart.com;path=/;"));
      }
    }),
    (this.remove = function () {
      (document.cookie =
        "ImeshVisitor=;expires=;domain=.indiamart.com;path=/;"),
        (document.cookie = "v4iilex=;expires=;domain=.indiamart.com;path=/;");
    });
}
void 0 === page.notMeQ && (page.notMeQ = []),
  (page.notMe = function () {
    for (var e = 0; e < page.notMeQ.length; e++) page.notMeQ[e].apply();
  });
var webAddress = location.hostname,
  UrlPri = webAddress.match(/^dev/)
    ? "dev-"
    : webAddress.match(/^stg/)
    ? "stg-"
    : "",
  UrlPri2 = webAddress.match(/^dev/)
    ? "dev."
    : webAddress.match(/^stg/)
    ? "stg."
    : "",
  domin = "my.indiamart.com";
(imesh_obj = new userDataCookie()),
  (v4iilex_obj = new userDataCookie()),
  (im_iss_obj = new userDataCookie());
var top_spc = "120",
  cookie = readCookie("ImeshVisitor");
prevglid = getparamVal(decodeURIComponent(cookie), "glid");
var sell_vr =
    "dev-seller.indiamart.com" == window.location.hostname ||
    "stg-seller.indiamart.com" == window.location.hostname ||
    "seller.indiamart.com" == window.location.hostname,
  page_sel = 0 == location.hostname.indexOf(UrlPri + "seller") ? 1 : 0,
  page_trd = 0 == location.hostname.indexOf(UrlPri + "trade") ? 1 : 0,
  page_tend = 0 == location.hostname.indexOf(UrlPri + "tenders") ? 1 : 0,
  page_my = 0 == location.hostname.indexOf(UrlPri + "my") ? 1 : 0,
  page_dir = 0 == location.hostname.indexOf(UrlPri + "dir") ? 1 : 0,
  page_indiamart =
    "" == UrlPri2
      ? 0 == location.hostname.indexOf(UrlPri2 + "www.indiamart")
        ? 1
        : 0
      : 0 == location.hostname.indexOf(UrlPri2 + "indiamart")
      ? 1
      : 0,
  lscheck = headLocalStorage();
function activeHeadOnReady() {
  (cookie = readCookie("ImeshVisitor")),
    (curglid = getparamVal(decodeURIComponent(cookie), "glid")),
    (iso = getparamVal(decodeURIComponent(cookie), "iso")),
    changeselect_search(),
    ch_FormAction(),
    $(".rmv").removeAttr("href"),
    $("#hdr_frm").attr("autocomplete", "off");
}
function ch_FormAction() {
  if ("undefined" != typeof sugg && "" != sugg) {
    var e = $("#hold").html(),
      a =
        ($("#select-search"), getparamVal(decodeURIComponent(cookie), "utyp"));
    void 0 !== sugg.changePlaceholder &&
      "function" == typeof sugg.changePlaceholder &&
      void 0 !== sugg.changePlaceholder &&
      "function" == typeof sugg.changePlaceholder &&
      sugg.changePlaceholder("Enter product / service to search"),
      "Products" == e
        ? ($("#vSrIco").show(),
          $("#hdr_frm").attr(
            "action",
            "https://" + UrlPri + "dir.indiamart.com/search.mp?"
          ),
          $("#pr").addClass("active"),
          $("#bl,#te,#cp").removeClass("active"))
        : "Company" == e &&
          ($("#vSrIco").show(),
          $("#hdr_frm").attr(
            "action",
            "https://" + UrlPri + "dir.indiamart.com/search.mp?"
          ),
          $("#cp").addClass("active"),
          $("#bl,#te,#pr").removeClass("active")),
      "Buy Leads" == e &&
        ($("#vSrIco").hide(),
        sell_vr ||
        ("" != cookie && !page_trd) ||
        ("" != cookie && page_trd && "N" != a)
          ? -1 != location.href.indexOf("seller.indiamart.com/bltxn/pwa")
            ? $("#hdr_frm").attr(
                "action",
                "//" + UrlPri + "seller.indiamart.com/bltxn/pwa/buyersearch/?"
              )
            : $("#hdr_frm").attr(
                "action",
                "//" + UrlPri + "seller.indiamart.com/bltxn/buyersearch/?"
              )
          : $("#hdr_frm").attr(
              "action",
              "//" + UrlPri + "trade.indiamart.com/buyersearch.mp?"
            ),
        $("#bl").addClass("active"),
        $("#pr,#te,#cp").removeClass("active")),
      "Tenders" == e &&
        ($("#vSrIco").hide(),
        page_sel
          ? $("#hdr_frm").attr(
              "action",
              "//" + UrlPri + "seller.indiamart.com/tenders/buyersearch/?"
            )
          : $("#hdr_frm").attr(
              "action",
              "//" + UrlPri + "tenders.indiamart.com/search.cgi?"
            ),
        $("#te").addClass("active"),
        $("#bl,#pr,#cp").removeClass("active")),
      null == e &&
        $("#hdr_frm").attr(
          "action",
          "https://" + UrlPri + "dir.indiamart.com/search.mp?"
        );
  } else
    setTimeout(function () {
      ch_FormAction();
    }, 500);
}
function gaTrack(e) {
  "undefined" != typeof _gaq &&
    ("cta_click_prdname" == e
      ? _gaq.push([
          "_trackEvent",
          "w2_recent_searches",
          e,
          "IM_Header-" + glmodid,
          0,
        ])
      : _gaq.push([
          "_trackEvent",
          "IM Global Header " + userType,
          window.location.host,
          e,
          0,
        ]));
}
function urlDecider() {
  var e = getparamVal(decodeURIComponent(cookie), "utyp"),
    a = getparamVal(decodeURIComponent(cookie), "iso");
  if ("" == cookie || null == cookie) {
    var i = readCookie("iploc"),
      t = getparamVal(decodeURIComponent(i), "gcniso");
    "" != t && "IN" != t
      ? $("#pay_footer").hide()
      : $("#pay_footer").attr(
          "href",
          "https://paywith.indiamart.com/?bannerid=cntrlfooter"
        );
  } else
    "" != a && "IN" != a
      ? $("#pay_footer").hide()
      : "P" == e
      ? ($("#pay_footer").hide(), $("#pypd_footer").show())
      : page_sel
      ? $("#pay_footer").attr(
          "href",
          "https://seller.indiamart.com/pwim/invoice/PaytoSeller/?bannerid=cntrlfooter"
        )
      : $("#pay_footer").attr(
          "href",
          "https://my.indiamart.com/buyertools/payments/?bannerid=cntrlfooter"
        );
  if ("N" != e && "" != e) {
    var r = "seller.indiamart.com";
    "P" == e &&
      ($("#ch_mang_buy_req").attr(
        "href",
        "//" + UrlPri + r + "/blgen/managebl/?modid=" + glmodid
      ),
      $(".mang_pro").attr(
        "href",
        "//" + UrlPri + r + "/companyprofile/myproductbuy/?modid=" + glmodid
      ),
      $(".post_buy_req").attr("href", "//" + UrlPri + r + "/blgen/postbl/"),
      $("#ch_upg_mem").hide(),
      $(".ch_post_buy").attr(
        "href",
        "//" + UrlPri + r + "/blgen/postbl?modid=" + glmodid
      )),
      $(".ch_lst_tend").attr(
        "href",
        "//" + UrlPri + r + "/tenders/tender?modid=" + glmodid
      ),
      $(".ch_dis_pro").attr(
        "href",
        "//" + UrlPri + r + "/product/manageproduct/addnew/"
      ),
      $("#ch_upg_mem").attr(
        "href",
        "//www.indiamart.com/seller/?services=paid"
      ),
      $("#ch_paid_mem").attr("href", "//indiamart.com/seller/?services=paid"),
      $("#ch_mng_pro").attr(
        "href",
        "//" + UrlPri + r + "/cgi/eto-alerts-new.mp?modid=" + glmodid
      ),
      $(".ch_buyers_head").attr(
        "href",
        "//" + UrlPri + r + "/blgen/postbl?modid=" + glmodid
      ),
      (page_sel || page_trd || page_tend) &&
        ($(".post_buy_req").attr("href", "//" + UrlPri + r + "/blgen/postbl/"),
        $(".ch_post_buy").attr(
          "href",
          "//" + UrlPri + r + "/blgen/postbl?modid=" + glmodid
        ),
        $(".recely").attr(
          "href",
          "//" + UrlPri + r + "/companyprofile/myproductbuy/recentproduct/"
        ));
  } else {
    var o = "my.indiamart.com";
    $(".ch_lst_tend").attr(
      "href",
      "//" + UrlPri + "seller.indiamart.com/tenders/tender?modid=" + glmodid
    ),
      $(".ch_dis_pro").attr(
        "href",
        "//" + UrlPri + "seller.indiamart.com/product/manageproduct/addnew/"
      ),
      $("#ch_mang_buy_req").attr(
        "href",
        "//" + UrlPri + o + "/enquiry/messagecentre/"
      ),
      $("#ch_upg_mem").attr(
        "href",
        "//www.indiamart.com/seller/?services=paid"
      ),
      $("#ch_paid_mem").attr(
        "href",
        "//www.indiamart.com/seller/paidmembership/"
      ),
      $(".mang_pro").attr(
        "href",
        "//" +
          UrlPri +
          "my.indiamart.com/buyertools/myproductbuy/?modid=" +
          glmodid
      ),
      $(".ch_post_buy").attr(
        "href",
        "//" + UrlPri + "my.indiamart.com/buyertools/postbl?modid=" + glmodid
      ),
      $("#ch_mng_pro").attr(
        "href",
        "//" + UrlPri + o + "/cgi/eto-alerts-new.mp?modid=" + glmodid
      ),
      $(".ch_buyers_head").attr(
        "href",
        "//" + UrlPri + o + "/buyertools/postbl?modid=" + glmodid
      );
  }
}
function getparamVal(e, a) {
  if (e > "") {
    var i = "|" + e + "|",
      t = new RegExp(".*?\\|" + a + "=([^|]*).*|.*");
    return i.replace(t, "$1");
  }
  return "";
}
function deleteCookie(e) {
  document.cookie =
    "myoption" == e
      ? e + "=;expires=;domain=." + UrlPri + "seller.indiamart.com;path=/;"
      : e + "=;expires=;domain=.indiamart.com;path=/;";
}
function notmep() {
  deleteCookie("ImeshVisitor"),
    deleteCookie("v4iilex"),
    deleteCookie("im_iss"),
    deleteCookie("xnHist"),
    getLoginStringv1(),
    gaTrack("IM_Not Me"),
    deleteCookie("myoption"),
    changeselect_search();
}
"complete" !== document.readyState
  ? $(document).ready(function () {
      activeHeadOnReady();
    })
  : activeHeadOnReady(),
  $(document).on("click", function (e) {
    void 0 !== e &&
      ((classNames = e.target.className),
      (idNames = e.target.id),
      "buyer-protection" == classNames
        ? gaTrack("payment Protection Program")
        : "cpo rmv" == classNames
        ? (user_register(), gaTrack("Join Free"))
        : "seller-protect" == classNames
        ? gaTrack("Pay with indiamart")
        : "help-header-link" == idNames
        ? gaTrack("Help")
        : "sell" == idNames
        ? gaTrack("Sell")
        : "btn-pop" == classNames
        ? gaTrack("banner")
        : "ch_upg_mem" == classNames
        ? gaTrack("View Paid Memberships")
        : "sellTool" == idNames
        ? gaTrack("Seller Tools")
        : "ih-pbr ch_post_buy" == classNames &&
          ($(this).removeAttr("href"),
          display_bl_OverlayForm(),
          $(this).css("cursor", "pointer")));
  }),
  page.notMeQ.push(notmep),
  void 0 === page.IdentifiedQ && (page.IdentifiedQ = []),
  (page.Identified = function () {
    for (var e = 0; e < page.IdentifiedQ.length; e++)
      "function" == typeof page.IdentifiedQ[e] && page.IdentifiedQ[e].apply();
  });
var for_tracking = "";
function getLoginStringv1() {
  var e,
    a = "";
  e = readCookie("im_iss");
  var i;
  (i = readCookie("adminiil")),
    (cookie = readCookie("ImeshVisitor")),
    (curglid = getparamVal(decodeURIComponent(cookie), "glid")),
    (bl_log_link = 0),
    "" != cookie && null != cookie
      ? ($("#lshead").addClass("hov_eff last"), $("#lshead").addClass("last"))
      : $("#lshead").removeClass("hov_eff last");
  var t = "";
  "" != cookie && null != cookie
    ? ((t =
        "<a class='rmv cpo ico-usr Hd_dib'>Hi <span class='Hd_dib Hd_pr'>" +
        getparamVal(decodeURIComponent(cookie), "fn") +
        "</span></a>"),
      $("#joinf").hide())
    : (t =
        '<a class="rmv cpo Hd_dib ico-usr">Hi <span class="Hd_dib Hd_pr">Guest</span></a>');
  var r = document.URL,
    o = document.referrer,
    s = "";
  r.match("/cgi/") && "FCP" == glmodid
    ? (escape(o), (s = "window.location=document.referrer;"))
    : r.match("/cgi/")
    ? document.URL
    : r.match("signout.html")
    ? document.URL
    : escape(r);
  var n = "",
    c = "";
  ("" != e && null != e) || "" == cookie || null == cookie
    ? ((n = ""), (c = ""))
    : ((n =
        "<a class='rmv cpo ico-usr Hd_dib'>Hi <span class='Hd_dib Hd_pr'>" +
        getparamVal(decodeURIComponent(cookie), "fn") +
        "</span></a>"),
      (t = ""),
      (c =
        "<a onclick=\"gaTrackNotme('Not Me');head_signIn('','','','C');\" rel='nofollow' class='cpo dfusr' >Sign In as Different User</a>"));
  var l = "";
  "" != i && null != i
    ? ((l =
        "<a id='admsout' onclick=\"gaTrackNotme('Sign Out');deleteCookie('v4iilex'); deleteCookie('im_iss'); deleteCookie('adminiil');deleteCookie('myoption');deleteCookie('ImeshVisitor');deleteCookie('xnHist');redirect_SB();\" rel='nofollow' class='dfusr cpo' >Sign Out</a>"),
      (bl_log_link = 1))
    : "" != e && null != e
    ? ((l =
        "<a class='dfusr cpo' id='selsout' onclick=\"gaTrackNotme('Sign Out');deleteCookie('v4iilex'); deleteCookie('im_iss');blocked_user();redirect_SB();\"" +
        s +
        "rel='nofollow'>Sign Out</a>"),
      (bl_log_link = 1))
    : ((l = ""), (bl_log_link = 0));
  var d = "";
  "IN" == new userDataCookie().get().iso &&
    (d =
      "<span class='nmbr'>" +
      getparamVal(decodeURIComponent(cookie), "mb1") +
      "</span><span class='' id='us_vrf'></span>");
  var m =
      "<a class='h_ic21' href='//" +
      UrlPri +
      "my.indiamart.com/buyertools/managebl/' rel='nofollow' onclick=\"gaTrack('My Orders');\">My Orders</a>",
    p =
      "<a class='post_buy_req h_ic2' href='//" +
      UrlPri +
      "my.indiamart.com/buyertools/postbl/' rel='nofollow' onclick=\"gaTrack('Post Your Requirement'+for_tracking);\" >Post Your Requirement </a>",
    h =
      "<a href='https://my.indiamart.com/business-buyer/' id='bus_buy' class='cpo ver_busbuyr h_ic37' onclick=\"gaTrack('vbb_click');\">Verified Business Buyer<span class='in-map Hd_pr'>NEW</span></a>",
    g =
      '<a class="h_ic34" onclick="gaTrack(\'Products_Services Directory\');" href="//dir.indiamart.com/" rel="nofollow">Products/Services Directory</a>',
    u =
      "<a class='h_ic8' href='https://" +
      UrlPri +
      "seller.indiamart.com/product/manageproducts/' rel='nofollow' onclick=\"gaTrack('Manage Products');\">Manage Products</a>",
    f =
      "<a class='h_ic6' href='//" +
      UrlPri +
      "my.indiamart.com/settings/mysettings/' rel='nofollow' onclick=\"gaTrack('Settings');\">Settings</a>",
    _ =
      "<a href='//" +
      UrlPri +
      "seller.indiamart.com/misc/privacysettings/' class='h_ic11' rel='nofollow' onclick=\"gaTrack('Account Settings_seller');\">Settings</a>",
    v =
      "<a href='//" +
      UrlPri +
      "seller.indiamart.com/blgen/postbl/managebl/' onclick=\"gaTrack('My Orders_seller');\" class='h_ic21'>My Orders</a>",
    y =
      "<a href='//" +
      UrlPri +
      "seller.indiamart.com/pwim/invoice/whatispwim/?bannerid=cntrlheader' onclick=\"gaTrack('Collect Payments');\" class='h_ic5'>Collect Payments</a>",
    b =
      "<a href='//" +
      UrlPri +
      "seller.indiamart.com/pwim/invoice/PaytoSeller/?bannerid=cntrlheader' onclick=\"gaTrack('Pay With IndiaMART_seller');\" class='h_ic5'>Pay With IndiaMART</a>",
    w =
      "<a class='recely h_ic4' href='//" +
      UrlPri +
      "my.indiamart.com/feeds/myactivities/' onclick=\"gaTrack('Recent Activity');\" rel='nofollow'>Recent Activity</a>",
    k =
      "<a onclick=\"gaTrack('Pay with Indiamart');\" rel='nofollow' class='cpo hpay' id='pay' href='https://my.indiamart.com/buyertools/payments/?bannerid=cntrlheader' target='_blank'>Pay with IndiaMART<p>Secure & hassle-free payments</p></a><a onclick=\"gaTrack('Download App');\" rel='nofollow' class='hd-dw-apps cpo h_ic16' id='dwnappp'>Download App</a>",
    C =
      "<div class='hpay clFix'><div class='hd-dw-apps butls2 appshd cpo h_ic16 Hd_pr Hd_fl' onclick=\"gaTrack('Download App');\" id ='dwnappp'>Download App</div><a href='//" +
      UrlPri +
      "seller.indiamart.com/misc/privacysettings/' rel='nofollow' onclick=\"gaTrack('Account Settings_seller');\" class ='hdPdn butls2 Hd_fl appshd cpo h_ic11 Hd_pr'>Settings</a></div>",
    S =
      "<div class='hpay clFix'><div class='butls2 Hd_fl Hd_pr'><a onclick=\"gaTrack('Pay with Indiamart');\" rel='nofollow' class='cpo trdAd' id='pay' href='https://my.indiamart.com/buyertools/payments/?bannerid=cntrlheader' target='_blank'>Pay with IndiaMART<p>Secure & hassle-free payments</p></a></div><div class='hd-dw-apps butls2 Hd_fl appshd cpo h_ic16 Hd_pr' onclick=\"gaTrack('Download App');\" id ='dwnappp'>Download App</div></div>",
    T = (def_sugg(100), getparamVal(decodeURIComponent(cookie), "utyp"));
  if ("" == cookie || null == cookie) {
    k =
      "<a onclick=\"gaTrack('Pay with Indiamart');\" rel='nofollow' class='cpo hpay' id='pay' href='https://paywith.indiamart.com/?bannerid=cntrlheader' target='_blank'>Pay with IndiaMART<p>Secure & hassle-free payments</p></a><a onclick=\"gaTrack('Download App');\" rel='nofollow' class='hd-dw-apps cpo h_ic16' id='dwnappp'>Download App</a>";
  } else
    a =
      "P" == T
        ? "//" + UrlPri + "seller.indiamart.com/companyprofile/manageprofile/"
        : "F" == T && (page_sel || page_trd || page_tend)
        ? "//" + UrlPri + "seller.indiamart.com/companyprofile/manageprofile/"
        : "//" + UrlPri + "my.indiamart.com/userprofile/contactprofile/";
  var I = "";
  ("" === getparamVal(decodeURIComponent(cookie), "fn") &&
    "" === getparamVal(decodeURIComponent(cookie), "ln")) ||
    (I =
      "<span class='usrnm Hd_db' id='hd_usrnm'>" +
      getparamVal(decodeURIComponent(cookie), "fn") +
      " " +
      getparamVal(decodeURIComponent(cookie), "ln") +
      "</span>");
  var x =
      "<div class='prf-dtl Hd_db prf-dt2 user cur_pt'>" +
      I +
      d +
      "<a class='edtHo edit Hd_db h_ic19 Hd_pr' href='" +
      a +
      "' rel='nofollow' onclick=\"gaTrack('View Profile'+for_tracking);\">View Profile</a></div>",
    P =
      "<div class='prf-dtl Hd_db prf-dt2 user cur_pt'><span class='usrnm Hd_db'>" +
      getparamVal(decodeURIComponent(cookie), "fn") +
      " " +
      getparamVal(decodeURIComponent(cookie), "ln") +
      "<a class='edtHo h_ic19' href='" +
      a +
      "' rel='nofollow' onclick=\"gaTrack('View Profile'+for_tracking);\" >View Profile</a></span>" +
      d +
      "</div>",
    H =
      "<div class='user cur_pt'><div class='prf-dtl Hd_dib'>" +
      I +
      d +
      "</div><a class='edtM edit Hd_db h_ic19 Hd_pr' href='" +
      a +
      "' rel='nofollow' onclick=\"gaTrack('View Profile'+for_tracking);\">View Profile</a></div>",
    U =
      "<a  onclick=\"gaTrack('Messages');msgwidget();\" class='h_ic12 cpo'>Messages<span class='cntmsg Hd_pa'></span></a>",
    V =
      "<a href='//" +
      UrlPri +
      "my.indiamart.com/' class='ch_my_dash h_ic1' onclick=\"gaTrack('Home');\">Home</a>",
    M =
      '<a href="https://help.indiamart.com/" onclick="gaTrack(\'Help\');" class="h_ic13">Help</a><div class="heldrdwn"><p class="cur_pt">Find answers to your queries</p><a href="https://help.indiamart.com/buyer-help/" onclick="gaTrack(\'Buyer_Help\');" class="help-desk hMb15 wli Hd_fl cpo h_ic28 Hd_pr Hd_db">For <b>Buying</b></a><a href="https://help.indiamart.com/seller-help/" onclick="gaTrack(\'Seller_Help\');" class="help-desk hMb15 wli Hd_fl cpo h_ic29 Hd_pr Hd_db">For <b>Selling</b></a><a href="https://help.indiamart.com/user-feedback/" onclick="gaTrack(\'Feedback\');" class="clear h_ic30 help-desk Hd_pr Hd_db">Share your Feedback</a><a href="https://help.indiamart.com/complaint-registration/" onclick="gaTrack(\'Complaint\');" class="h_ic31 help-desk Hd_pr Hd_db">Raise a Complaint</a><span class="cur_pt wAnch h_ic32 Hd_pr Hd_db">Email us on<b class="Dsp_b Hd_db">customercare@indiamart.com</b></span><span id="cccare" class="cur_pt wAnch h_ic33 Hd_pr Hd_db">Call us at <b>' +
      (5.5 != -new Date().getTimezoneOffset() / 60 ? "+91-" : "0") +
      '96-9696-9696</b></span><span class="wAnch h_ic35 help-desk cpo Hd_pr Hd_db Hd_db" id="chatwithus" onclick="gaTrack(\'Help_chat_with_us\');hd_chtppup();">Chat With us</span></div>';
  if (((iso = getparamVal(decodeURIComponent(cookie), "iso")), "" == cookie)) {
    var O = readCookie("iploc"),
      L = getparamVal(decodeURIComponent(O), "gcniso");
    "" != L &&
      "IN" != L &&
      ((y = ""),
      (b = ""),
      (k = ""),
      (S = ""),
      (h = ""),
      (C =
        "<div class='hpay clFix'><a href='//" +
        UrlPri +
        "seller.indiamart.com/misc/privacysettings/' rel='nofollow' onclick=\"gaTrack('Account Settings_seller');\" class ='stFrn butls2 appshd cpo Hd_fl h_ic11 Hd_pr'>Settings</a></div>"));
  } else
    "" != iso &&
      "IN" != iso &&
      ((y = ""),
      (b = ""),
      (k = ""),
      (S = ""),
      (h = ""),
      (C =
        "<div class='hpay clFix'><a href='//" +
        UrlPri +
        "seller.indiamart.com/misc/privacysettings/' rel='nofollow' onclick=\"gaTrack('Account Settings_seller');\" class ='stFrn butls2 Hd_fl appshd cpo h_ic11 Hd_pr'>Settings</a></div>"));
  var E =
      "</span><div class='sign-hover-dropdn Hd_dbn logd' id='sntid'>" +
      x +
      V +
      p +
      h +
      g +
      m +
      w +
      f +
      k +
      l +
      c +
      "</div>",
    R =
      "<div class='sign-hover-dropdn Hd_dbn wfcp lgn hpre' id='sntid'>" +
      P +
      "<div class='clFix'><div class='butls2 Hd_fl slT Hd_pr'><p class='ttl cur_pt'>SELLER TOOLS</p><a href='//" +
      UrlPri +
      "seller.indiamart.com/messagecentre?h1' onclick=\"gaTrack('My Enquiries');\" class='ch_my_enq h_ic10' rel='nofollow'>Lead Manager</a><a href='//" +
      UrlPri +
      "seller.indiamart.com/bltxn?pref=relevant' onclick=\"gaTrack('Latest Buy Leads for Me');\" class='bl_log_link h_ic7' rel='nofollow'>BuyLeads</a>" +
      u +
      "</div><div class='butls2 Hd_fl blT Hd_pr'><p class='ttl cur_pt'>BUYER TOOLS</p>" +
      p +
      h +
      g +
      v +
      b +
      "</div></div>" +
      C +
      l +
      c +
      "</div>",
    A =
      "<div class='sign-hover-dropdn Hd_dbn wfcp lgn hpre' id='sntid'>" +
      H +
      "<div class='clFix'><div class='butls2 Hd_fl blT Hd_pr'><p class='ttl cur_pt'>BUYER TOOLS</p>" +
      p +
      h +
      g +
      v +
      "</div><div class='butls2 Hd_fl slT Hd_pr'><p class='ttl cur_pt'>SELLER TOOLS</p><a href='//" +
      UrlPri +
      "seller.indiamart.com/messagecentre?h1' onclick=\"gaTrack('My Enquiries');\" class='ch_my_enq h_ic10' rel='nofollow'>Lead Manager</a><a href='//" +
      UrlPri +
      "seller.indiamart.com/bltxn?pref=relevant' onclick=\"gaTrack('Latest Buy Leads for Me');\" class='bl_log_link h_ic7' rel='nofollow'>Latest BuyLeads</a>" +
      u +
      _ +
      "</div></div>" +
      S +
      l +
      c +
      "</div>",
    D =
      "<div class='sign-hover-dropdn Hd_dbn wfcp lgn hpre' id='sntid'>" +
      P +
      "<div class='clFix'><div class='butls2 Hd_fl slT Hd_pr'><p class='ttl cur_pt'>SELLER TOOLS</p><a href='//" +
      UrlPri +
      "seller.indiamart.com/messagecentre?h1' onclick=\"gaTrack('My Enquiries');\" class='ch_my_enq h_ic10' rel='nofollow'>Lead Manager</a><a href='//" +
      UrlPri +
      "seller.indiamart.com/bltxn?pref=relevant' onclick=\"gaTrack('Latest Buy Leads for Me');\" class='bl_log_link h_ic7' rel='nofollow'>BuyLeads </a>" +
      u +
      y +
      "</div><div class='butls2 Hd_fl blT Hd_pr'><p class='ttl cur_pt'>BUYER TOOLS</p>" +
      p +
      g +
      v +
      "</div></div>" +
      C +
      l +
      c +
      "</div>";
  ("P" == T || ("F" == T && (page_sel || page_trd || page_tend))) && (E = ""),
    $("#lshead").show();
  var B = "";
  ("" != e && null != e) || ("" != cookie && null != cookie)
    ? (B = "")
    : ((B =
        "<a onclick=\"user_signIn(); gaTrack('Sign In');\" target='_top' class='rmv cpo ico-usr Hd_dib' id='user_sign_in' rel='nofollow'><span class='Hd_pr'>Sign In</span></a><div class='sign-hover-dropdn Hd_dbn'><div class='u_sigin'><a onclick=\"user_signIn(); gaTrack('Log In');\" class='cont_s cpo Hd_db'>Sign In </a><div class='hover-new-user'>New to IndiaMART?<p class='h_clr bld Hd_dib cpo' onclick=\"user_register();gaTrack('Start Here');return false;\">Join Now</p></div></div>" +
        V +
        p +
        h +
        g +
        m +
        w +
        f +
        k +
        "</div>"),
      (t = ""));
  var N = "";
  (N =
    "F" == T && (page_trd || page_tend)
      ? t + "" + B + n + A
      : ("F" == T && page_sel) || ("N" == T && page_sel)
      ? t + "" + B + n + R
      : "P" == T
      ? t + "" + B + n + D
      : "F" == T
      ? t + "" + B + n + E
      : "" != cookie && null != cookie
      ? t + "" + B + n + E
      : t + "" + B + n),
    $("#lshead").html(N).text(),
    "" != cookie &&
      null != cookie &&
      prevglid != curglid &&
      (prevglid = curglid);
  var F = getparamVal(decodeURIComponent(cookie), "glid"),
    q = getparamVal(decodeURIComponent(cookie), "mb1"),
    j = getparamVal(decodeURIComponent(cookie), "phcc");
  iso = getparamVal(decodeURIComponent(cookie), "iso");
  var G = getparamVal(decodeURIComponent(cookie), "uv");
  getparamVal(decodeURIComponent(cookie), "ev"),
    getparamVal(decodeURIComponent(cookie), "em"),
    getparamVal(decodeURIComponent(cookie), "fn"),
    readCookie("sessim");
  if (
    "" != curglid &&
    "" != getparamVal(decodeURIComponent(cookie), "mb1") &&
    "IN" == getparamVal(decodeURIComponent(cookie), "iso")
  ) {
    var z = "V" == G ? "Verified" : "Verify Now",
      W = "Verified" == z ? "vrfn" : "vrf cpo";
    $("#us_vrf").html(z),
      $("#us_vrf").addClass(W),
      $(".prf-dtl .vrf").click(function () {
        head_send_otp(F, glmodid, q, j, iso);
      });
  }
  "" == T || ("P" != T && "F" != T) || sell_vr
    ? $("#sell-center").html(
        "<a href='https://seller.indiamart.com/' id='ch_sell' class='cpo h_ic14' onclick=\"gaTrack('Sell on IndiaMART');\">Sell</a>"
      )
    : $("#sell-center").html(
        "<a href='//seller.indiamart.com/' class='h_ic14' id='sellTool'>Seller Tools</a>"
      ),
    "" == T ||
      ("P" != T && "F" != T) ||
      $("#ch_free_web").html(
        "<a href='//seller.indiamart.com/' class='ch_free_web'onclick=\"gaTrack('Seller Tools');\"><span class='nme Hd_dib'<i class='h_ic14'></i>Seller Tools</a></span></a>"
      ),
    "" != T &&
      sell_vr &&
      ($("#sell-center").remove(),
      $("#prod_cen").html(
        "<a href='https://seller.indiamart.com/product/manageproducts/' onclick='gaTrack(\"Products\");' class='pdIcn'>Products</a>"
      ),
      $("#prod_cen").show()),
    page_trd
      ? ((document.getElementById("cvdSp").innerHTML =
          '<span class="h_ic23">Covid-19 Supplies</span><div class="cvdSub"><div><span class="cvSbm h_ic38">Oxygen Supplies</span><a href="https://trade.indiamart.com/buyersearch.mp?ss=Oxygen%20Cylinder" rel="nofollow">Oxygen Cylinder</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Portable%20Oxygen%20Cylinders" rel="nofollow">Portable Oxygen Cans</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Empty%20Oxygen%20Cylinder" rel="nofollow">Empty Oxygen Cylinder</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Oxygen%20Concentrator" rel="nofollow">Oxygen Concentrator</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=PSA%20Oxygen%20Gas%20Plant" rel="nofollow">PSA Oxygen Gas Plant</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Oxygen%20Flow%20Meter" rel="nofollow">Oxygen Flow Meter</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Oxygen%20Mask">Oxygen Mask</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Oxygen%20Generator" rel="nofollow">Oxygen Generator</a></div><div><span class="cvSbm h_ic26">Medicines</span><a href="https://trade.indiamart.com/buyersearch.mp?ss=Tocilizumab" rel="nofollow">Tocilizumab</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=FabiFlu" rel="nofollow">FabiFlu </a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Remdesivir" rel="nofollow">Remdesivir</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Dexamethasone%20Tablets" rel="nofollow">Dexamethasone Tablets</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Amphotericin%20B%20Injection" rel="nofollow">Amphotericin B Injection</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Enoxaparin%20Injection" rel="nofollow">Enoxaparin Injection</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Baricitinib%20Tablets" rel="nofollow">Baricitinib Tablets</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Bevacizumab" rel="nofollow">Bevacizumab</a></div><div><span class="cvSbm h_ic24">Safety Essentials</span><a href="https://trade.indiamart.com/buyersearch.mp?ss=Face%20Mask" rel="nofollow">Face Mask</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=PPE%20Kits" rel="nofollow">PPE Kits</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Face%20Shields" rel="nofollow">Face Shield</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Disposable%20Gloves" rel="nofollow">Disposable Gloves</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Sneeze%20Guard" rel="nofollow">Sneeze Guard</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Car%20Partition" rel="nofollow">Car Partition</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Surgical%20Caps" rel="nofollow">Surgical Caps</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Hand+Sanitizer+%26+Disinfectant" rel="nofollow">Hand Sanitizer & Disinfectant</a></div><div><span class="cvSbm h_ic39">Medical Supplies and Equipments</span><a href="https://trade.indiamart.com/buyersearch.mp?ss=Ventilator" rel="nofollow">Ventilator</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Pulse%20Oximeter" rel="nofollow">Pulse Oximeter</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Thermometer" rel="nofollow">Thermometer</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=steam%20vaporizer" rel="nofollow">Steam Vaporizer</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Nebulizer" rel="nofollow">Nebulizer</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Corona%20Test%20Kit" rel="nofollow">Corona Test Kit</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Ct%20scan%20machine" rel="nofollow">CT Scan Machine</a><a href="https://trade.indiamart.com/buyersearch.mp?ss=Rapid%20Test%20Kit" rel="nofollow">Rapid Test Kit</a></div></div></div>'),
        $("#cvdSp").show(),
        $("#message-center").html(U),
        $("#message-center").show(),
        (for_tracking = "_seller"))
      : page_tend
      ? ((document.getElementById("cvdSp").innerHTML =
          '<span class="h_ic23">Covid-19 Supplies</span><div class="cvdSub"><div><span class="cvSbm h_ic38">Oxygen Supplies</span><a href="https://tenders.indiamart.com/search.cgi?ss=Oxygen+Cylinder" rel="nofollow">Oxygen Cylinder</a><a href="https://tenders.indiamart.com/search.cgi?ss=Portable+Oxygen+Cylinders" rel="nofollow">Portable Oxygen Cans</a><a href="https://tenders.indiamart.com/search.cgi?ss=Empty+Oxygen+Cylinder" rel="nofollow">Empty Oxygen Cylinder</a><a href="https://tenders.indiamart.com/search.cgi?ss=Oxygen+Concentrator" rel="nofollow">Oxygen Concentrator</a><a href="https://tenders.indiamart.com/search.cgi?ss=psa+oxygen+gas+plant" rel="nofollow">PSA Oxygen Gas Plant</a><a href="https://tenders.indiamart.com/search.cgi?ss=Oxygen+Flow+Meter" rel="nofollow">Oxygen Flow Meter</a><a href="https://tenders.indiamart.com/search.cgi?ss=Oxygen+Mask">Oxygen Mask</a><a href="https://tenders.indiamart.com/search.cgi?ss=oxygen+generator">Oxygen Generator</a></div><div><span class="cvSbm h_ic26">Medicines</span><a href="https://tenders.indiamart.com/search.cgi?ss=Tocilizumab" rel="nofollow">Tocilizumab</a><a href="https://tenders.indiamart.com/search.cgi?ss=FabiFlu" rel="nofollow">FabiFlu </a><a href="https://tenders.indiamart.com/search.cgi?ss=Remdesivir" rel="nofollow">Remdesivir</a><a href="https://tenders.indiamart.com/search.cgi?ss=Dexamethasone+Tablets" rel="nofollow">Dexamethasone Tablets</a><a href="https://tenders.indiamart.com/search.cgi?ss=amphotericin+b+injection" rel="nofollow">Amphotericin B Injection</a><a href="https://tenders.indiamart.com/search.cgi?ss=enoxaparin+injection" rel="nofollow">Enoxaparin Injection</a><a href="https://tenders.indiamart.com/search.cgi?ss=baricitinib+tablets" rel="nofollow">Baricitinib Tablets</a><a href="https://tenders.indiamart.com/search.cgi?ss=bevacizumab" rel="nofollow">Bevacizumab</a></div><div><span class="cvSbm h_ic24">Safety Essentials</span><a href="https://tenders.indiamart.com/search.cgi?ss=Face+Mask" rel="nofollow">Face Mask</a><a href="https://tenders.indiamart.com/search.cgi?ss=PPE+Kits" rel="nofollow">PPE Kits</a><a href="https://tenders.indiamart.com/search.cgi?ss=Face+Shields" rel="nofollow">Face Shield</a><a href="https://tenders.indiamart.com/search.cgi?ss=Disposable+Gloves" rel="nofollow">Disposable Gloves</a><a href="https://tenders.indiamart.com/search.cgi?ss=Sneeze+Guard" rel="nofollow">Sneeze Guard</a><a href="https://tenders.indiamart.com/search.cgi?ss=Car+Partition" rel="nofollow">Car Partition</a><a href="https://tenders.indiamart.com/search.cgi?ss=Surgical+Caps" rel="nofollow">Surgical Caps</a><a href="https://tenders.indiamart.com/search.cgi?ss=hand+sanitizer+%26+disinfectant" rel="nofollow">Hand Sanitizer & Disinfectant</a></div><div><span class="cvSbm h_ic39">Medical Supplies and Equipments</span><a href="https://tenders.indiamart.com/search.cgi?ss=Ventilator" rel="nofollow">Ventilator</a><a href="https://tenders.indiamart.com/search.cgi?ss=Pulse+Oximeter" rel="nofollow">Pulse Oximeter</a><a href="https://tenders.indiamart.com/search.cgi?ss=Thermometer" rel="nofollow">Thermometer</a><a href="https://tenders.indiamart.com/search.cgi?ss=steam+vaporizer" rel="nofollow">Steam Vaporizer</a><a href="https://tenders.indiamart.com/search.cgi?ss=Nebulizer" rel="nofollow">Nebulizer</a><a href="https://tenders.indiamart.com/search.cgi?ss=Corona+Test+Kit" rel="nofollow">Corona Test Kit</a><a href="https://tenders.indiamart.com/search.cgi?ss=ct+scan+machine" rel="nofollow">CT Scan Machine</a><a href="https://tenders.indiamart.com/search.cgi?ss=rapid+test+kit" rel="nofollow">Rapid Test Kit</a></div></div></div>'),
        $("#cvdSp").show(),
        $("#message-center").html(U),
        $("#message-center").show(),
        (for_tracking = "_seller"))
      : page_sel
      ? "" != (cookie = readCookie("ImeshVisitor"))
        ? ($("#lead_manager").html(
            "<a  onclick=\"gaTrack('Lead Manager');msgwidget();\" class='cpo lmIcn'>Lead Manager<span class='cntmsg lft Hd_pa'></span></a>"
          ),
          $("#lead_manager").show(),
          $("#lead_cen").html(
            "<a  onclick=\"gaTrack('BuyLeads');leadwidget();\" class='cpo bDlIcn'>BuyLeads<span class='hdNot lft Hd_pa'></a>"
          ),
          $("#lead_cen").show(),
          (for_tracking = "_Seller"))
        : $("#sell-center").show()
      : ($("#message-center").html(U),
        $("#message-center").show(),
        (document.getElementById("cvdSp").innerHTML =
          '<a class="h_ic23" href="https://www.indiamart.com/corona-covid-19-supplies.html">Covid-19 Supplies</a><div class="cvdSub"><div> <a href="https://dir.indiamart.com/indianexporters/me_surgl.html" class="cvSbm h_ic38">Oxygen Supplies</a><a href="https://dir.indiamart.com/impcat/oxygen-cylinders.html">Oxygen Cylinder</a><a href="https://dir.indiamart.com/impcat/portable-oxygen-can.html">Portable Oxygen Can</a><a href="https://dir.indiamart.com/impcat/medical-gas-cylinder.html">Empty Oxygen Cylinder</a><a href="https://dir.indiamart.com/impcat/oxygen-concentrator.html">Oxygen Concentrator</a><a href="https://dir.indiamart.com/impcat/psa-oxygen-gas-plants.html">PSA Oxygen Gas Plants</a><a href="https://dir.indiamart.com/impcat/oxygen-flow-meter.html">Oxygen Flow Meter</a><a href="https://dir.indiamart.com/impcat/oxygen-mask.html">Oxygen Mask</a></a><a href="https://dir.indiamart.com/impcat/oxygen-generator.html">Oxygen Generator</a><a href="https://dir.indiamart.com/indianexporters/me_surgl.html" class="coMVwal">View All</a></div><div><a href="https://dir.indiamart.com/indianexporters/infections-drugs.html" class="cvSbm h_ic26">Medicines</a><a href="https://dir.indiamart.com/impcat/tocilizumab.html">Tocilizumab</a><a href="https://dir.indiamart.com/impcat/fabiflu.html">FabiFlu</a><a href="https://dir.indiamart.com/impcat/remdesivir.html">Remdesivir</a><a href="https://dir.indiamart.com/impcat/dexamethasone-tablets.html">Dexamethasone Tablets</a><a href="https://dir.indiamart.com/impcat/amphotericin-b-injection.html">Amphotericin B Injection</a><a href="https://dir.indiamart.com/impcat/enoxaparin-injection.html">Enoxaparin Injection</a><a href="https://dir.indiamart.com/impcat/baricitinib-tablets.html">Baricitinib Tablets</a><a href="https://dir.indiamart.com/impcat/bevacizumab.html">Bevacizumab</a><a href="https://dir.indiamart.com/indianexporters/infections-drugs.html" class="coMVwal">View All</a></div><div><a href="https://www.indiamart.com/medical-supplies.html" class="cvSbm h_ic24">Safety Essentials</a><a href="https://dir.indiamart.com/impcat/face-mask.html">Face Mask</a><a href="https://dir.indiamart.com/impcat/ppe-kit.html">PPE Kits</a><a href="https://dir.indiamart.com/impcat/face-shields.html">Face Shield</a><a href="https://dir.indiamart.com/impcat/disposable-gloves.html">Disposable Gloves</a><a href="https://dir.indiamart.com/impcat/sneeze-guard.html">Sneeze Guard</a><a href="https://dir.indiamart.com/impcat/car-partition.html">Car Partition</a><a href="https://dir.indiamart.com/impcat/surgical-caps.html">Surgical Caps</a><a href="https://dir.indiamart.com/impcat/hand-sanitizer.html">Hand Sanitizer & Disinfectant</a><a href="https://www.indiamart.com/medical-supplies.html" class="coMVwal hmb10">View All</a></div><div><a href="https://www.indiamart.com/medical-equipments.html" class="cvSbm h_ic39">Medical Supplies and Equipments</a><a href="https://dir.indiamart.com/impcat/icu-ventilator.html">Ventilator</a><a href="https://dir.indiamart.com/impcat/pulse-oximeter.html">Pulse Oximeter</a><a href="https://dir.indiamart.com/impcat/thermometer.html">Thermometer</a><a href="https://dir.indiamart.com/impcat/steam-vaporizer.html">Steam Vaporizer</a><a href="https://dir.indiamart.com/impcat/nebulizer-machine.html">Nebulizer</a><a href="https://dir.indiamart.com/impcat/coronavirus-test-kit.html">Corona Test Kit</a><a href="https://dir.indiamart.com/impcat/ct-scan-machine.html">CT Scan Machine</a><a href="https://dir.indiamart.com/impcat/rapid-test-cassette.html">Rapid Test Kit</a><a href="https://www.indiamart.com/medical-equipments.html" class="coMVwal hmb10">View All</a></div><div class="hdCvdTw"><a href="https://m.indiamart.com/covid-19-supplies-search/" target="_blank" class="cvSbm"><i class="cvTwtIn Hd_pr"></i>Covid-19 Medical Supplies Search on Twitter</a></div></div>'),
        $("#cvdSp").show()),
    (document.getElementById("help-center").innerHTML = M),
    $("#help-center").show(),
    $("#sell-center").show(),
    urlDecider(),
    count_unread_messages(),
    $(".hd-dw-apps").click(function () {
      $("#boxes").html(
        '<div style="top:101px;left: 551.5px;display:none" id="dialog" class="window"><p class="closeb cpo Hd_pa">X</p><div class="app-link Hd_pa"><a href="//play.google.com/store/apps/details?id=com.indiamart.m&hl=en "target="_blank" class="Hd_fl">play store</a><a href="//itunes.apple.com/in/app/indiamart-buy-sell-products/id668561641?mt=8 " target="_blank" class="Hd_fl">app store</a></div><form name="app_rgt1" onsubmit="valid();return false;" class="Hd_pa" id="iph61"><input type="number" id="txtmobileno1" name="txtmobileno1" placeholder="e.g. 98XXXXXXXX" class="frm-cntr2" value="" autocomplete="off"><input type="submit" class="btn-pop cpo" id="rgt_snd_lnk1" value="Get App Now"><br><div id="err3" class="err"></div></form><div class="Hd_pa" id="msg_cont1"></div></div><div id="mask1"></div>'
      );
      var e = document.getElementById("txtmobileno1"),
        a = ["-", "+", "e"];
      e.addEventListener("keydown", function (e) {
        a.includes(e.key) && e.preventDefault();
      }),
        gaTrack("App_top");
      var i = readCookie("ImeshVisitor"),
        t = getparamVal(decodeURIComponent(i), "mb1");
      "" != (i = readCookie("ImeshVisitor")) &&
        ((name = getparamVal(decodeURIComponent(i), "fn")),
        (document.app_rgt1.txtmobileno1.value = t)),
        App_Promo();
    });
}
function changeselect_search() {
  var e = getparamVal(readCookie("ImeshVisitor"), "utyp"),
    a =
      '<span id="hold">Products</span> <div class="drp Hd_dbn Hd_pa"><div id="pr" class="active">Products</div><div id="cp">Company</div><div id="bl">Buy Leads</div><div id="te">Tenders</div></div>';
  page_sel || page_trd || page_tend
    ? ($(".select-wrapper").html(a),
      (hddrpdn2_ct = 0),
      $(".select-wrapper").show())
    : "" != e && "P" == e && -1 == window.location.href.indexOf("easybuy")
    ? ($(".select-wrapper").html(a),
      (hddrpdn2_ct = 0),
      $(".select-wrapper").show())
    : (hddrpdn2_ct = 1);
}
function display_bl_OverlayForm() {
  "undefined" != typeof open_bl_overlay_form
    ? open_bl_overlay_form(glmodid)
    : setTimeout(function () {
        display_bl_OverlayForm();
      }, 100);
}
function activeHeadUserData() {
  var e = location.hostname.match(/dev/)
      ? "dev1-login.indiamart.com"
      : location.hostname.match(/stg/)
      ? "stg1-login.indiamart.com"
      : "login.indiamart.com",
    a = new userDataCookie().get();
  if (a) {
    diffDays = (new Date() - new Date(a.cd)) / 864e5;
    var i,
      t = readCookie("ImeshVisitor"),
      r = readCookie("iploc");
    if (
      ((i = getparamVal(decodeURIComponent(t), "glid")),
      diffDays >= 3 || "" == i)
    ) {
      var o = getparamVal(decodeURIComponent(t), "mb1");
      "" == (iso = getparamVal(decodeURIComponent(r), "gcniso")) &&
        (iso = getparamVal(decodeURIComponent(t), "iso"));
      var s = getparamVal(decodeURIComponent(r), "gip"),
        n = getparamVal(decodeURIComponent(r), "gcnnm"),
        c = getparamVal(decodeURIComponent(t), "em"),
        l = (getparamVal(decodeURIComponent(t), "phcc"), readCookie("_ga"), "");
      "" != (l = "IN" == iso ? o : c) &&
        $.ajax({
          url: "//" + e + "/user/identify/",
          data: {
            username: l,
            iso: iso,
            modid: glmodid,
            format: "JSON",
            cu: 1,
            originalreferer: window.location.href,
            IP_COUNTRY: n,
            ip: s,
            screen_name: "centralized Header",
          },
          type: "POST",
          dataType: "json",
          success: function (e) {
            if ("205" == e.code) {
              var a = e.DataCookie,
                i = (e.im_iss, e.LoginCookie);
              "" == a &&
                "" == i &&
                ((document.cookie =
                  "ImeshVisitor=; domain=.indiamart.com; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
                (document.cookie =
                  "v4iilex=; domain=.indiamart.com; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
                (document.cookie =
                  "im_iss=; domain=.indiamart.com; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
                window.location.reload());
            } else imesh_obj.set(e);
          },
        }),
        "2" ==
          getparamVal(decodeURIComponent(readCookie("ImeshVisitor")), "usts") &&
          "" == readCookie("im_iss") &&
          (deleteCookie("ImeshVisitor"), redirect_SB());
    }
  }
  "undefined" == typeof _Login_initial &&
    ((_Login_initial = !0), FreeWebPopup());
  getparamVal(decodeURIComponent(t), "utyp");
  navigator.userAgent.indexOf("Firefox") > 0
    ? 0 == location.hostname.indexOf("seller") &&
      $(".dn-FFExt").css("display", "block")
    : $(".dn-FFExt").css("display", "none"),
    $(".avtar img").click(function () {
      window.location.href = "//my.indiamart.com/userprofile/contactprofile/";
    });
}
function block_softask() {
  $(".moe-main-class").length && $(".moe-main-class").css("display", "none");
}
function user_signIn(e, a, i, t) {
  null == t && (t = ""),
    "undefined" == typeof _Login_initial
      ? ((_Login_initial = !0),
        $.ajaxSetup({ cache: !0 }),
        $.getScript(
          "//" + UrlPri + "utils.imimg.com/header/js/imlogin.js",
          function () {
            head_signIn(e, a, i, t), FreeWebPopup();
          }
        ))
      : head_signIn(e, a, i, t),
    block_softask();
}
function user_register() {
  "undefined" == typeof _Login_initial
    ? ((_Login_initial = !0),
      $.ajaxSetup({ cache: !0 }),
      $.getScript(
        "//" + UrlPri + "utils.imimg.com/header/js/imlogin.js",
        function () {
          head_register(), FreeWebPopup();
        }
      ))
    : head_register();
}
function validator(e) {
  if (0 == e.ss.value.length)
    return alert("Please enter text to search."), e.ss.focus(), !1;
  if (e.ss.value.match(/(Enter\s+.*?Search)/i))
    return (
      (e.ss.value = e.ss.value.replace(/\s+/, " ")),
      alert("Please enter a valid text to search."),
      e.ss.focus(),
      !1
    );
  for (; e.ss.value.indexOf("  ") > 0; )
    e.ss.value = e.ss.value.replace("  ", " ");
  return e.ss.value.replace(/\s/g, "").length < 1
    ? ((e.ss.value = e.ss.value.replace(/\s+/, "")),
      alert("Please enter a valid text to search."),
      e.ss.focus(),
      !1)
    : !(e.ss.value.replace(/\s/g, "").length > 119) ||
        (alert("Enter less than 120 characters for search."), e.ss.focus(), !1);
}
function objToStr(e) {
  var a = [];
  for (var i in e) a.push(i + "=" + e[i]);
  return (a = a.join("|"));
}
function strToObj(e) {
  var a;
  a = e.split("|");
  var t = {};
  for (i = 0; i < a.length; i++) {
    var r = a[i];
    t[r.split("=")[0]] = r.split("=")[1];
  }
  return t;
}
function FreeWebPopup() {
  var e = new userDataCookie(),
    a = e.get("xnHist");
  (pv = a.pv || 0),
    (ipv = a.ipv || 0),
    (fpv = a.fpv || 0),
    (count = a.count || ""),
    (time = a.time || ""),
    (glid = a.glid || "");
  var i = a.city || "";
  (cvstate = a.cvstate || ""),
    (popupshown = a.popupshown || ""),
    readCookie("ImeshVisitor") ? (pv = "0") : pv++,
    readCookie("ImeshVisitor") ? ipv++ : (ipv = "0"),
    readCookie("im_iss") ? fpv++ : (fpv = "0");
  var t = {
    pv: pv,
    city: i,
    ipv: ipv,
    fpv: fpv,
    count: count,
    time: time,
    glid: glid,
  };
  e.set(t, "xnHist");
}
function invalidmsg(e, a, i) {
  (e.style.borderColor = "red"),
    (i.innerHTML = "<div class='arrow-up1'></div>" + a),
    (i.style.display = "block");
}
function valid() {
  return (
    validateForm(document.getElementById("txtmobileno1"), "msg_cont1") &&
      promo_sms_status(document.app_rgt1.txtmobileno1.value),
    !1
  );
}
function validateForm(e, a) {
  var i = document.getElementById(a),
    t = e.value;
  return null == t || "" == t
    ? (invalidmsg(e, "Required", i), !1)
    : RegExp("([6-9]{1})[0-9]{9}").test(t) && 10 == t.length
    ? ((e.style.borderColor = "green"),
      (i.style.display = "none"),
      (i.innerHTML = ""),
      !0)
    : (invalidmsg(
        e,
        "Enter 10 digit valid mobile number starting with 9,8,7 or 6",
        i
      ),
      !1);
}
function App_Promo() {
  var e = "#dialog",
    a = $(window).height(),
    i = $(window).width();
  $(e).css("top", a / 2 - $(e).height() / 2),
    $(e).css("left", i / 2 - $(e).width() / 2),
    $(e).fadeIn(),
    $("#dialog").css({
      background: 'url("//utils.imimg.com/globalhf/app_bnr_11.png") no-repeat',
      "background-size": "cover",
    }),
    $(".window .closeb").click(function (e) {
      e.preventDefault(),
        $("#mask1").hide(),
        $(".window").hide(),
        (document.app_rgt1.txtmobileno1.value = ""),
        $("#msg_cont1").empty(),
        $("#msg_cont1").css("display", "none"),
        $("#err3").css("display", "none");
    }),
    $("#mask1").click(function () {
      $(this).hide(), $(".window").hide(), $("#err3").css("display", "none");
    }),
    $("#txtmobileno1").focus(),
    "block" == $("#dialog").css("display")
      ? $("#mask1").css("display", "block")
      : $("#mask1").css("display", "none");
}
function app_sms_status(e) {
  var a = "";
  (a =
    "SMS Triggered" == e.delivery_status
      ? "<b>App download link is sent to " + e.mobile + "</b>."
      : "SMS not sent due to DND" == e.reason
      ? "Oops! " + e.mobile + " is in <b>DND</b>.<br/>"
      : "Sms Sent Attempted Within 2 Minutes or 5 SMS sent Today" == e.reason
      ? "App Install Link already sent to " + e.mobile + ".<br/>"
      : "Oops! We can't reach you at " + e.mobile + ". <br/>"),
    $("#msg_cont1").html(a),
    $("#msg_cont1").css("display", "block"),
    callToIdentifiedQ();
}
function login_callback(e) {
  FreeWebPopup();
}
function promo_sms_status(e) {
  var a = "",
    i = "",
    t = readCookie("ImeshVisitor");
  "" != t &&
    null != t &&
    ((a = getparamVal(decodeURIComponent(t), "glid")),
    (i = getparamVal(decodeURIComponent(t), "fn"))),
    $.ajax({
      url: "/" + homeServerName + "header/scripts/head_services.php",
      data: {
        type: "sendMsg",
        mobi: e,
        gluser: a,
        glmodid: glmodid,
        receiverName: i,
      },
      type: "GET",
      dataType: "json",
      success: function (e) {
        app_sms_status(e);
      },
      error: function (e, a, i) {
        console.log(e + a + i);
      },
    }),
    ("" != t && null != t) || loginserv(e, "Download App on Top Header");
}
function CookieEMKTG(e, a) {
  if (void 0 !== a && "" != a && a.length > 0) {
    var i = new Date();
    i.setTime(i.getTime() + 18e5);
    var t = "; expires=" + i.toGMTString();
    document.cookie =
      e + "=" + escape(a) + ";expires=" + t + ";domain=.indiamart.com;path=/;";
  }
}
function getAllUrlParams(e) {
  var a = e ? e.split("?")[1] : window.location.search.slice(1),
    i = {};
  if (a)
    for (var t = (a = a.split("#")[0]).split("&"), r = 0; r < t.length; r++) {
      var o = t[r].split("="),
        s = void 0,
        n = o[0].replace(/\[\d*\]/, function (e) {
          return (s = e.slice(1, -1)), "";
        }),
        c = void 0 === o[1] || o[1];
      (n = n.toLowerCase()),
        1 != c && (c = c.toLowerCase()),
        i[n]
          ? ("string" == typeof i[n] && (i[n] = [i[n]]),
            void 0 === s ? i[n].push(c) : (i[n][s] = c))
          : (i[n] = c);
    }
  return i;
}
function activeHeadOnReady1() {
  $("#header_right").show();
  var e = getAllUrlParams().modid;
  void 0 !== e &&
    "" != e &&
    "emktg" == e &&
    CookieEMKTG(
      "emktg",
      "Affliate_id=" + getAllUrlParams().afflid + "|SetTime=" + Date.now()
    );
  var a = getparamVal(decodeURIComponent(cookie), "utyp"),
    i = $("#hold").html();
  if (
    (sell_vr && $(".gl-wrapper").addClass("h71"), void 0 !== i && null != i)
  ) {
    var t = location.href,
      r = t.substring(0, t.indexOf("."));
    $("#hdr_frm").attr(
      "action",
      "https://" + UrlPri + "dir.indiamart.com/search.mp?"
    );
    var o = getAllUrlParams(window.location.href).search_type;
    "p" == o
      ? ($("#vSrIco").show(), $("#hold").html("Products"))
      : "c" == o && ($("#vSrIco").show(), $("#hold").html("Company")),
      -1 != r.indexOf("trade") ||
      -1 != t.indexOf("indiamart.com/bigbuyer/") ||
      (-1 != t.indexOf("seller.indiamart.com") &&
        -1 == t.indexOf("seller.indiamart.com/tenders/")) ||
      -1 != t.indexOf("my.indiamart.com/bltxn/") ||
      -1 != t.indexOf("my.indiamart.com/blproduct/mypurchasedbl/")
        ? ($("#vSrIco").hide(),
          $("#hold").html("Buy Leads"),
          sell_vr ||
          ("" != cookie && !page_trd) ||
          ("" != cookie && page_trd && "N" != a)
            ? -1 != t.indexOf("seller.indiamart.com/bltxn/pwa")
              ? $("#hdr_frm").attr(
                  "action",
                  "//" + UrlPri + "seller.indiamart.com/bltxn/pwa/buyersearch/?"
                )
              : $("#hdr_frm").attr(
                  "action",
                  "//" + UrlPri + "seller.indiamart.com/bltxn/buyersearch/?"
                )
            : $("#hdr_frm").attr(
                "action",
                "//" + UrlPri + "trade.indiamart.com/buyersearch.mp?"
              ))
        : (-1 == r.indexOf("tenders") &&
            -1 == t.indexOf("my.indiamart.com/tenders/") &&
            -1 == t.indexOf("seller.indiamart.com/tenders/")) ||
          ($("#vSrIco").hide(),
          $("#hold").html("Tenders"),
          $("#te").addClass("active"),
          $("#bl,#pr").removeClass("active"),
          $("#hdr_frm").attr(
            "action",
            "//" + UrlPri + "tenders.indiamart.com/search.cgi?"
          ));
  }
  if (
    (getLoginStringv1(lshead),
    seacr_bar_w(),
    $(".select-wrapper").click(function () {
      $(this).toggleClass("active");
    }),
    $(document).click(function (e) {
      "drpn" != e.target.id &&
        "hold" != e.target.id &&
        $(".select-wrapper").removeClass("active");
    }),
    $("#pr").click(function () {
      $(this).addClass("active"),
        $("#bl,#te,#cp").removeClass("active"),
        $("#vSrIco").show(),
        $(".select-wrapper span").html("Products"),
        ch_FormAction();
    }),
    $("#cp").click(function () {
      $(this).addClass("active"),
        $("#bl,#te,#pr").removeClass("active"),
        $("#vSrIco").show(),
        $(".select-wrapper span").html("Company"),
        ch_FormAction();
    }),
    $("#bl").click(function () {
      $(this).addClass("active"),
        $("#pr,#te,#cp").removeClass("active"),
        $("#vSrIco").hide(),
        $(".select-wrapper span").html("Buy Leads"),
        ch_FormAction();
    }),
    $("#te").click(function () {
      $(this).addClass("active"),
        $("#bl,#pr,#cp").removeClass("active"),
        $("#vSrIco").hide(),
        $(".select-wrapper span").html("Tenders"),
        ch_FormAction();
    }),
    ch_FormAction(),
    $("#mob-link").length > 1 &&
      page_sel &&
      $("#mob-link a").attr("href", "https://m.indiamart.com/my/"),
    "webkitSpeechRecognition" in window)
  ) {
    $("#hdr_frm").append(
      '<span class="Tip vSh1 Hd_pa" onclick=\'_gaq.push(["_trackEvent", "Voice-Search" , "Voice-icon-click", 0]);langpopup();\' id="vSrIco"><span class="Tiptext Hd_pa">Search by voice</span></span>'
    ),
      $("#miclag").append(
        '<div class="V_bg Hd_dbn" id="vSrhMain" style="display:none"> <div class="rale-m" id="rale-m"> <div class="rale-1" id="rale-1"> <div class="rale-bx Hd_pr"><div class="lagSec">Select a Language</div> <span class="vSrCrs cpo Hd_pa" id="vCls" onclick=\'_gaq.push(["_trackEvent", "Voice-Search" , "Voice-search-close", 0]);\'>âœ–</span> <div class="rale-2"> <ul class="diul" id="langchoice"></ul> </div> <div class="lsing cpo Hd_pa" id="catch_text">Listening...</div> <div id="retry_new" class="colAf Hd_pa cpo" onclick=\'_gaq.push(["_trackEvent", "Voice-Search" , "Retry-Clicked", 0]);langpopup();document.getElementById("retry_new").style.display = "none"\'>Retry </div> <div class="rale-3 michtml Hd_pa" style="display:none"> </div> <div id="hsing Hd_pa" style="display:none" class="michtml ">  </div> <div id="vLoad" class="Hd_pa"  style="display:none"><div class="Dgrey-cle Hd_pa"></div> <div class="michtml"></div></div> </div> </div> </div> </div>'
      ),
      $("#vSrIco").hide(),
      $(".michtml").html(
        '<div class="pth-6 Hd_pa"> <div class="D-mic Hd_pr"> <div class="part Hd_pr"> <div class="Dble Hd_pa"></div> </div> <div class="part Hd_pr"> <div class="red one"></div> <div class="red two"></div> </div> <div class="part Hd_pr"> <div class="grn Hd_pa"></div> </div> </div> </div>'
      ),
      "Buy Leads" !== $("#hold").html() &&
        "Tenders" !== $("#hold").html() &&
        $("#vSrIco").show();
  }
}
function gaTrackNotme(e) {
  var a = readCookie("ImeshVisitor");
  if ("" != a) var i = getparamVal(decodeURIComponent(a), "glid");
  "undefined" != typeof _gaq &&
    _gaq.push(["_trackEvent", "IM_Header_" + e, glmodid, i, 0]);
}
function setCookieUv() {
  var e = readCookie("ImeshVisitor"),
    a = "";
  if (e.length > 0)
    if (((offset = e.indexOf("uv")), -1 != offset))
      ((a = strToObj(e)).uv = "V"), imesh_obj.set(a);
    else {
      var i = e.charAt(e.length - 1);
      (a = strToObj((e += "|" == i ? "uv=V" : "|uv=V"))), imesh_obj.set(a);
    }
}
function loginserv(e, a) {
  var i = readCookie("iploc");
  iso = getparamVal(decodeURIComponent(i), "gcniso");
  var t = getparamVal(decodeURIComponent(i), "gip"),
    r = getparamVal(decodeURIComponent(i), "gcnnm"),
    o = location.hostname.match(/dev/)
      ? "dev1-login.indiamart.com"
      : location.hostname.match(/stg/)
      ? "stg1-login.indiamart.com"
      : "login.indiamart.com";
  $.ajax({
    url: "//" + o + "/user/identify/",
    data: {
      username: e,
      iso: iso,
      modid: glmodid,
      format: "JSON",
      cu: 1,
      originalreferer: window.location.href,
      IP_COUNTRY: r,
      ip: t,
      screen_name: a,
    },
    type: "POST",
    dataType: "json",
    success: function (e) {
      if (null != e && "200" == e.code) {
        var a = e.DataCookie,
          i = e.LoginCookie;
        null != a && "" != a && imesh_obj.set(a),
          null != i && "" != i && v4iilex_obj.set(i, "v4iilex");
      }
      login_callback(), callToIdentifiedQ();
    },
  });
}
page.IdentifiedQ.push(getLoginStringv1),
  "complete" !== document.readyState
    ? $(window).load(function () {
        activeHeadUserData();
      })
    : activeHeadUserData(),
  $(document).keyup(function (e) {
    27 === e.keyCode &&
      ($("#msg_cont1").empty(),
      $("#dw_app-content,#dialog,#mask1,#msg_cont1").hide(),
      $(".txtmobileno1").length > 0 &&
        (document.app_rgt1.txtmobileno1.value = ""));
  }),
  "complete" !== document.readyState
    ? $(document).ready(function () {
        activeHeadOnReady1();
      })
    : activeHeadOnReady1(),
  $(window).on("resize", function () {
    $("#hdSrh").find("div").hasClass("select-wrapper")
      ? $("#search_string").css(
          "width",
          $("#hdSrh").outerWidth() -
            $("#btnSearch").outerWidth() -
            $(".select-wrapper").outerWidth() -
            50
        )
      : $(".expand-input").css(
          "width",
          $("#hdSrh").outerWidth() - $("#btnSearch").outerWidth() - 50
        );
  });
var lt = "",
  lg = "",
  accu = "",
  city = "",
  cityID = "",
  cid = "",
  o = new Date();
o.setTime(o.getTime() + 864e5),
  "undefined" == typeof ims && (ims = {}),
  (ims.lc_lat = 0),
  (ims.lc_long = 0),
  (ims.lc_time = 0),
  (ims.lc_flag = 0);
var theUnixTime = Math.floor(new Date().getTime() / 1e3);
function initGeolocation() {
  if (navigator && navigator.geolocation)
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
      timeout: 1e4,
    });
  else
    geo_position_js.init()
      ? geo_position_js.getCurrentPosition(successCallback, errorCallback, {
          timeout: 1e4,
        })
      : console.log("GEOLOCATION not supported");
}
function successCallback(e) {
  (lt = (lt = e.coords.latitude).toFixed(5)),
    (lg = (lg = e.coords.longitude).toFixed(5)),
    (accu = (accu = e.coords.accuracy).toFixed(5));
  if (void 0 !== lt && null != lt && void 0 !== lg && null != lg) {
    if (((city = ""), (cid = ""), window.location.href.indexOf("dir") > -1)) {
      var a = location.hostname.match(/dev/)
          ? "dev-mapi.indiamart.com"
          : location.hostname.match(/stg/)
          ? "stg-mapi.indiamart.com"
          : "mapi.indiamart.com",
        t = {
          token: "imartenquiryprovider",
          S_lat: lt,
          S_long: lg,
          GET_CITY: "Y",
          modid: "IMOB",
        },
        r = "//" + a + "/wservce/enquiry/index.php/enquiry/getUserLoc/";
      $.ajax({
        url: r,
        data: t,
        type: "POST",
        dataType: "json",
        success: function (e) {
          void 0 !== e &&
            null != e &&
            (e.cityid, e.countryiso, (city = e.cityname), (cid = e.cityid));
        },
      });
    }
    (i =
      "GeoLoc=lt%3D" +
      lt +
      "%7Clg%3D" +
      lg +
      "%7Caccu%3D" +
      accu +
      "%7Clg_ct%3D" +
      city +
      "%7Clg_ctid%3D" +
      cid),
      (a = new Date()).setTime(a.getTime() + 864e5),
      (document.cookie =
        i + ";expires=" + a.toGMTString() + ";domain=.indiamart.com;path=/;");
  }
  _gaq.push([
    "_trackEvent",
    "IM Global Header " + userType,
    window.location.host,
    "Geolocation Allow",
    0,
    !0,
  ]);
}
function errorCallback(e) {
  console.log("Geolocation Error-" + e.message),
    (window.name = "false"),
    _gaq.push([
      "_trackEvent",
      "IM Global Header " + userType,
      window.location.host,
      "Geolocation Block",
      0,
      !0,
    ]);
}
window.onscroll = function () {
  stickyfunction();
};
var sticky = header.offsetTop;
function stickyfunction() {
  $(".ui-autocomplete").hide(), $(".select-wrapper").removeClass("active");
}
function hasHindiCharacters(e) {
  return (
    e.split("").filter(function (e) {
      var a = e.charCodeAt();
      return a >= 2309 && a <= 2399;
    }).length > 0
  );
}
function seacr_bar_w() {
  $("#hdSrh .select-wrapper").is(":visible")
    ? $("#search_string").css(
        "width",
        $("#hdSrh").outerWidth() -
          $("#btnSearch").outerWidth() -
          $(".select-wrapper").outerWidth() -
          50
      )
    : $(".expand-input").css(
        "width",
        $("#hdSrh").outerWidth() - $("#btnSearch").outerWidth() - 50
      );
}
function setlang() {
  localStorage.setItem(
    "langpref_2",
    JSON.stringify([
      [
        "English",
        "en-IN",
        "English",
        "Tell us what you need!",
        "Retry",
        "Listening...",
      ],
      [
        "Hindi",
        "hi-IN",
        "à¤¹à¤¿à¤‚à¤¦à¥€",
        "à¤¹à¤®à¥‡à¤‚ à¤¬à¤¤à¤¾à¤à¤‚ à¤•à¤¿ à¤†à¤ªà¤•à¥‹ à¤•à¥à¤¯à¤¾ à¤šà¤¾à¤¹à¤¿à¤",
        "à¤ªà¥à¤¨: à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤•à¤°à¥‡à¤‚",
        "à¤¸à¥à¤¨à¤¾ à¤œà¤¾ à¤°à¤¹à¤¾ à¤¹à¥ˆ...",
      ],
      [
        "Marathi",
        "mr-IN",
        "à¤®à¤°à¤¾à¤ à¥€",
        "à¤†à¤ªà¤²à¥à¤¯à¤¾à¤²à¤¾ à¤•à¤¾à¤¯ à¤†à¤µà¤¶à¥à¤¯à¤• à¤†à¤¹à¥‡ à¤¤à¥‡ à¤†à¤®à¥à¤¹à¤¾à¤²à¤¾ à¤¸à¤¾à¤‚à¤—à¤¾",
        "à¤ªà¥à¤¨à¥à¤¹à¤¾ à¤ªà¥à¤°à¤¯à¤¤à¥à¤¨ à¤•à¤°à¤¾",
        "à¤à¤•à¤²à¥‡ à¤œà¤¾à¤¤ à¤†à¤¹à¥‡...",
      ],
      [
        "tamil",
        "ta-IN",
        "à®¤à®®à®¿à®´à¯",
        "à®‰à®™à¯à®•à®³à¯à®•à¯à®•à¯ à®Žà®©à¯à®© à®¤à¯‡à®µà¯ˆ à®Žà®©à¯à®±à¯ à®šà¯Šà®²à¯à®²à¯à®™à¯à®•à®³à¯",
        "à®®à¯€à®£à¯à®Ÿà¯à®®à¯ à®®à¯à®¯à®±à¯à®šà®¿ à®šà¯†à®¯à¯",
        "à®•à¯‡à®Ÿà¯à®Ÿà®¤à¯...",
      ],
      [
        "Kannada",
        "kn-IN",
        "à²•à²¨à³à²¨à²¡",
        "à²¨à²¿à²®à²—à³† à²¬à³‡à²•à²¾à²¦à³à²¦à²¨à³à²¨à³ à²¨à²®à²—à³† à²¤à²¿à²³à²¿à²¸à²¿",
        "à²®à²°à³à²ªà³à²°à²¯à²¤à³à²¨à²¿à²¸à²¿",
        "à²•à³†à³•à²³à³à²µ...",
      ],
      [
        "Gujarati",
        "gu-IN",
        "àª—à«àªœàª°àª¾àª¤à«€",
        "àª¤àª®àª¨à«‡ àª¶à«àª‚ àªœà«‹àªˆàª àª›à«‡ àª¤à«‡ àª…àª®àª¨à«‡ àª•àª¹à«‹",
        "àª«àª°à«€ àªªà«àª°àª¯àª¾àª¸ àª•àª°à«‹",
        "àª¸àª¾àª‚àª­àª³à«€ àª¶àª•àª¾àª¯ àª›à«‡...",
      ],
      [
        "Bangla",
        "bn-IN",
        "à¦¬à¦¾à¦‚à¦²à¦¾",
        "à¦†à¦®à¦¾à¦¦à§‡à¦° à¦¬à¦²à§à¦¨ à¦†à¦ªà¦¨à¦¿ à¦•à¦¿ à¦šà¦¾à¦¨",
        "à¦ªà§à¦¨à¦°à¦¾à¦¯à¦¼ à¦šà§‡à¦·à§à¦Ÿà¦¾ à¦•à¦°à¦¾",
        "à¦¶à§‹à¦¨à¦¾ à¦¹à¦šà§à¦›à§‡...",
      ],
      [
        "Malayalam",
        "ml-IN",
        "à´®à´²à´¯à´¾à´³à´‚",
        "à´¨à´¿à´™àµà´™àµ¾à´•àµà´•àµ à´Žà´¨àµà´¤à´¾à´£àµ à´†à´µà´¶àµà´¯à´®àµ†à´¨àµà´¨àµ à´žà´™àµà´™à´³àµ‹à´Ÿàµ à´ªà´±à´¯àµ‚",
        "à´µàµ€à´£àµà´Ÿàµà´‚ à´¶àµà´°à´®à´¿à´•àµà´•àµà´•",
        "à´•àµ‡àµ¾à´•àµà´•àµà´¨àµà´¨à´¤àµ...",
      ],
      [
        "Telugu",
        "te-IN",
        "à°¤à±†à°²à±à°—à±",
        "à°®à±€à°•à± à°•à°¾à°µà°¾à°²à±à°¸à°¿à°¨à°¦à°¿ à°šà±†à°ªà±à°ªà°‚à°¡à°¿",
        "à°®à°³à±à°³à±€ à°ªà±à°°à°¯à°¤à±à°¨à°¿à°‚à°šà±",
        "à°µà°¿à°¨à°¡à°‚...",
      ],
    ])
  );
}
function getLang(e) {
  if ("webkitSpeechRecognition" in window) {
    localStorage.getItem("langpref_2") || setlang();
    for (
      var a = JSON.parse(localStorage.getItem("langpref_2")), i = 0;
      i < a.length && a[i][1] != e;
      i++
    );
    return (
      localStorage.setItem("lang", JSON.stringify(a[i])),
      (document.getElementById("retry_new").innerHTML = a[i][4]),
      (document.getElementById("catch_text").innerHTML = a[i][5]),
      [a[i], i]
    );
  }
}
function modifylang(e) {
  localStorage.getItem("langpref_2") || setlang();
  JSON.parse(localStorage.getItem("langpref_2"));
  var a = getLang(e),
    i = a[0];
  a[1];
  (document.getElementById("retry_new").innerHTML = i[4]),
    (document.getElementById("catch_text").innerHTML = i[5]);
  var t;
  (t = e.split("-")),
    (document.cookie = "lang=" + t[0] + ";domain=.indiamart.com;path=/;"),
    createSuggesterforLanguage(i),
    voicesearch(i);
}
function createSuggesterforLanguage(e) {
  localStorage.getItem("langpref_2") || setlang();
  for (
    var a = JSON.parse(localStorage.getItem("langpref_2")), i = "", t = 0;
    t < a.length;
    t++
  )
    a[t][1] == e[1]
      ? (i +=
          '<li class="dlli Hd_fl lgactive cpo" onclick="modifylang(\'' +
          a[t][1] +
          "');\">" +
          a[t][2] +
          "</li>")
      : (i +=
          '<li class="dlli Hd_fl cpo" onclick="modifylang(\'' +
          a[t][1] +
          "');\">" +
          a[t][2] +
          "</li>");
  document.getElementById("langchoice").innerHTML = i;
}
function langpopup() {
  if (lscheck)
    if (localStorage.getItem("lang")) {
      var e = JSON.parse(localStorage.getItem("lang"));
      createSuggesterforLanguage(e), modifylang(e[1]);
    } else {
      var a = getAllUrlParams(window.location.href).lang;
      modifylang(void 0 !== a && "" != a ? a + "-IN" : "en-IN");
    }
}
function voicesearch(e) {
  if ("webkitSpeechRecognition" in window) {
    document.getElementById("retry_new").style.display = "none";
    var a = new webkitSpeechRecognition();
    (a.continuous = !1),
      (a.interimResults = !0),
      (a.lang = e[1]),
      (a.maxAlternatives = 1),
      a.start();
    var i = "",
      t = !1;
    (a.onresult = function (e) {
      (i = e.results[0][0].transcript),
        (document.getElementById("catch_text").innerHTML = i),
        $("#vLoad").show(),
        $(".rale-3").hide(),
        $("#hsing").hide();
    }),
      (a.onstart = function (i) {
        _gaq.push(["_trackEvent", "Voice-Search", "Microphone_allowed", 0]),
          (document.getElementById("retry_new").style.display = "none"),
          (document.getElementById("catch_text").innerHTML = e[5]),
          (document.getElementById("catch_text").style.display = "block"),
          $("#vCls").on("click", function () {
            $("body").css({ overflow: "visible" }),
              $("#vSrhMain").css("display", "none"),
              a.stop();
          }),
          $("#vLoad").hide(),
          $(".rale-3").hide(),
          $("#hsing").show(),
          $("body").css({ overflow: "hidden" }),
          $("#vSrhMain").css("display", "block"),
          _gaq.push(["_trackEvent", "Voice-Search", "lang-selected", e[1], 0]),
          setTimeout(function () {
            $(".rale-1").fadeIn();
          }, 300),
          $("#vLoad").hide(),
          $(".rale-3").hide(),
          $("#hsing").show();
      }),
      (a.onend = function (r) {
        if ((a.stop(), i)) {
          $("#vLoad").show(),
            $(".rale-3").hide(),
            $("#hsing").hide(),
            _gaq.push(["_trackEvent", "Voice-Search", "Voice-input", i]);
          var o = $("#hdr_frm").attr("action"),
            s = readCookie("xnHist"),
            n = getparamVal(decodeURIComponent(s), "city");
          (o =
            "" != n && "undefined" != n
              ? o +
                "ss=" +
                i +
                "&src=vs&lang=" +
                e[1].substring(0, 2) +
                "&cq=" +
                n
              : o + "ss=" + i + "&src=vs&lang=" + e[1].substring(0, 2)),
            (window.location.href = o);
        } else
          t ||
            _gaq.push(["_trackEvent", "Voice-Search", "Listening-timeout", 0]),
            $("#vLoad").hide(),
            $(".rale-3").show(),
            $("#hsing").hide(),
            (document.getElementById("retry_new").style.display = "block"),
            (document.getElementById("catch_text").style.display = "none");
      }),
      (a.onerror = function (e) {
        (t = !0),
          "not-allowed" == e.error &&
            _gaq.push(["_trackEvent", "Voice-Search", "Microphone_blocked", 0]),
          "no-speech" == e.error &&
            _gaq.push(["_trackEvent", "Voice-Search", "Listening-timeout", 0]),
          a.stop(),
          (document.getElementById("retry_new").style.display = "block"),
          (document.getElementById("catch_text").style.display = "none");
      });
  }
}
$("#hdr_frm").keydown(function (e) {
  var a = "",
    i = "";
  "" != gblhrd.mcatid && (a = gblhrd.mcatid),
    "" != gblhrd.catid && (i = gblhrd.catid);
  var t = $("#search_string").val();
  if (e.ctrlKey && 13 == e.keyCode && "" != t) {
    var r = $("#hdr_frm"),
      o = $("#hold").html();
    $("input[id=search_type]") && $("input[id=search_type]").remove(),
      "Products" == o
        ? $("#hdr_frm").append(
            "<input type='hidden' name='search_type' id='search_type' value='p' >"
          )
        : "Company" == o &&
          $("#hdr_frm").append(
            "<input type='hidden' name='search_type' id='search_type' value='c' >"
          ),
      (target = r.attr("target")),
      r.attr("target", "_blank").submit().attr("target", target),
      r.removeAttr("target"),
      _gaq.push(["_trackEvent", "Header-Search", "ctrl+enter", 0]),
      "" != a &&
        $("#hdr_frm").append(
          "<input type='hidden' name='mcatid' id='mcatid' value=" + a + " >"
        ),
      "" != i &&
        $("#hdr_frm").append(
          "<input type='hidden' name='catid' id='catid' value=" + i + " >"
        );
  }
});
var f = 0;
function langTranlate(e, a) {
  if (
    lscheck &&
    localStorage.getItem("langdir") != e &&
    allowedlang.indexOf(e) >= 0 &&
    (allowedlang.indexOf(e) >= 0
      ? localStorage.setItem("langdir", e)
      : localStorage.setItem("langdir", "en"),
    null != typeof ims.search_result_language &&
      "undefined" != typeof dirType &&
      "s" == dirType)
  ) {
    document.cookie =
      "lang=" + ims.search_result_language + ";domain=.indiamart.com;";
    var i = window.location.href.replace(
      "&lang=" + getAllUrlParams(window.location.href).lang,
      ""
    );
    (i = i + "&lang=" + e), (window.location.href = i);
  }
}
$("#btnSearch").click(function () {
  var e = "",
    a = "";
  "" != gblhrd.mcatid && (e = gblhrd.mcatid),
    "" != gblhrd.catid && (a = gblhrd.catid);
  var i = getparamVal(readCookie("ImeshVisitor"), "utyp");
  if (
    page_sel ||
    page_trd ||
    page_tend ||
    ("P" == i && -1 == window.location.href.indexOf("easybuy"))
  ) {
    var t = readCookie("xnHist"),
      r = getparamVal(decodeURIComponent(t), "city");
    r = r.replace(/\s/g, "-");
    var o = $("#hold").html();
    "" != r &&
      "undefined" != r &&
      ($("input[id=cq]") && $("input[id=cq]").remove(),
      $("#hdr_frm").append(
        "<input type='hidden' name='cq' id='cq' value=" + r + " >"
      ),
      ("" == cq_src && "undefined" == cq_src) ||
        $("#hdr_frm").append(
          "<input type='hidden' name='cq_src' id='cq_src' value=" +
            cq_src +
            " >"
        )),
      0 == f &&
        (($("input[id=prdsrc]") || $("input[id=language]")) &&
          $("input[id=prdsrc]").remove(),
        $("#hdr_frm").append(
          "<input type='hidden' name='prdsrc' id='prdsrc' value='1' >"
        ),
        (f = 1)),
      $("input[id=search_type]") && $("input[id=search_type]").remove(),
      "Products" == o
        ? $("#hdr_frm").append(
            "<input type='hidden' name='search_type' id='search_type' value='p' >"
          )
        : "Company" == o &&
          $("#hdr_frm").append(
            "<input type='hidden' name='search_type' id='search_type' value='c' >"
          ),
      "" != e &&
        $("#hdr_frm").append(
          "<input type='hidden' name='mcatid' id='mcatid' value=" + e + " >"
        ),
      "" != a &&
        $("#hdr_frm").append(
          "<input type='hidden' name='catid' id='catid' value=" + a + " >"
        ),
      window.location.href.indexOf("&list_vw") > 0 &&
        ($("input[id=list_vw]").remove(),
        $("#hdr_frm").append(
          "<input type='hidden' name='list_vw' id='list_vw' value='1'>"
        ));
  } else {
    var s = new userDataCookie(),
      n = $("#hd_usercity").html();
    0 == f &&
      (($("input[id=prdsrc]") || $("input[id=language]")) &&
        $("input[id=prdsrc]").remove(),
      $("#hdr_frm").append(
        "<input type='hidden' name='prdsrc' id='prdsrc' value='1' >"
      ),
      (f = 1)),
      "All India" == n && (n = ""),
      s.set({ city: n }, "xnHist"),
      "" != e &&
        $("#hdr_frm").append(
          "<input type='hidden' name='mcatid' id='mcatid' value=" + e + " >"
        ),
      "" != a &&
        $("#hdr_frm").append(
          "<input type='hidden' name='catid' id='catid' value=" + a + " >"
        ),
      window.location.href.indexOf("&list_vw") > 0 &&
        ($("input[id=list_vw]").remove(),
        $("#hdr_frm").append(
          "<input type='hidden' name='list_vw' id='list_vw' value='1'>"
        ));
  }
});
var status = 0,
  time = "";
function count_unread_messages() {
  location.hostname.match(/dev/) || location.hostname.match(/stg/);
  var e = readCookie("ImeshVisitor"),
    a = getparamVal(decodeURIComponent(e), "glid");
  if (a && 0 == status) {
    var i = a;
    time = 0;
    var t = new Date(),
      r = readCookie("xnHist"),
      o = getparamVal(decodeURIComponent(r), "count"),
      s = "";
    if ("" != o && "undefined" != o) {
      time = getparamVal(decodeURIComponent(r), "time");
      var n = t.getTime() - new Date(time).getTime();
      (s = Math.floor(n / 1e3 / 60 / 60)),
        (i = getparamVal(decodeURIComponent(r), "glid")),
        o > 99 ? (o = "99+") : 0 == o && (o = ""),
        $(".cntmsg").html(o);
    }
    ((a && (0 == time || s >= 4)) || a != i) &&
      ((status = 1),
      $.ajax({
        url: "/" + homeServerName + "header/scripts/head_services.php",
        data: { type: "unreadMsg", glid: a, modid: glmodid },
        type: "GET",
        dataType: "json",
        success: function (e) {
          null != e && "200" == e.code
            ? (null == e.count && (e.count = 0),
              updateunreadcookie(e.count, t, a))
            : console.log("Unread Message Service Error");
        },
      }));
  }
}
function update_msg_count(e, a) {
  var i = readCookie("xnHist");
  if (i) {
    var t = getparamVal(decodeURIComponent(i), "time");
    t = new Date(t);
    var r = getparamVal(decodeURIComponent(i), "glid");
    if (1 == e) {
      var o = getparamVal(decodeURIComponent(i), "count");
      updateunreadcookie((o -= a), t, r);
    } else 2 == e && updateunreadcookie(a, t, r);
  }
}
function updateunreadcookie(e, a, i) {
  var t = { count: e, time: a, glid: i };
  new userDataCookie().set(t, "xnHist"),
    e > 99 ? (e = "99+") : 0 == e && (e = ""),
    $(".cntmsg").html(e);
}
function msgwidget() {
  var e = readCookie("ImeshVisitor");
  !e ||
  ("DIR" != glmodid &&
    "FCP" != glmodid &&
    "PRODDTL" != glmodid &&
    "STDPRD" != glmodid)
    ? (window.location.href =
        e && page_sel
          ? "//" + UrlPri + "seller.indiamart.com/messagecentre?h1"
          : "//" + UrlPri + "my.indiamart.com/enquiry/messagecentre/")
    : (0 == $("#ms_drop").length &&
        $("#message-center").append(
          '<div id ="ms_drop" style="display:none"></div>'
        ),
      head_dropmsg());
}
function leadwidget() {
  readCookie("ImeshVisitor") &&
    page_sel &&
    (window.location.href =
      "//" + UrlPri + "seller.indiamart.com/bltxn/?pref=relevant");
}
function head_dropmsg() {
  "function" == typeof dropdown_messages
    ? dropdown_messages()
    : setTimeout(function () {
        head_dropmsg();
      }, 1e3);
}
function head_register() {
  "function" == typeof register
    ? register()
    : setTimeout(function () {
        head_register();
      }, 1e3);
}
function head_signIn(e, a, i, t) {
  "function" == typeof signIn
    ? signIn(e, a, i, t)
    : setTimeout(function () {
        head_signIn(e, a, i, t);
      }, 1e3);
}
function head_send_otp(e, a, i, t, r) {
  "function" == typeof showmobverifyScreen
    ? showmobverifyScreen(e, a, i, t, "", r, "2", "4", "HDR")
    : setTimeout(function () {
        head_send_otp(e, a, i, t, r);
      }, 1e3);
}
function lead_count() {
  var e = localStorage.getItem("leadCount_nav"),
    a = (e = JSON.parse(e)).count;
  a > 99 ? (a = "99+") : 0 == a && (a = ""), $(".hdNot").html(a);
}
function headLocalStorage() {
  try {
    return (
      localStorage.setItem("__checklocalstorage", "exists"),
      localStorage.removeItem("__checklocalstorage"),
      !0
    );
  } catch (e) {
    return !1;
  }
}
function def_sugg(e) {
  "undefined" != typeof hd_city_sugg &&
    ("undefined" != typeof Suggester
      ? new Suggester({
          element: "hd_city_sugg",
          onSelect: hd_select_city,
          type: "city",
          placeholder: "Enter city",
          classPlaceholder: ".drop1",
          minStringLengthToDisplaySuggestion: 1,
          autocompleteClass: "cls_city hd_ctfltr",
          onlyCity: "true",
          rowsToDisplay: 10,
          displayFields: "value,=state",
          displaySeparator: ", ",
          fields: "state,id,stateid,flname,alias",
          showloc: 1,
        })
      : setTimeout(function () {
          def_sugg(2 * e);
        }, 100));
}
function AlInd_Op() {
  "" == $("#hd_city_sugg").val()
    ? "All India" !== $("#hd_usercity").html() && $("#all_India").show()
    : $("#all_India").hide();
}
function hd_chtppup() {
  var e = document.getElementById("chat_popup");
  if ("" != e.innerHTML);
  else {
    var a = document.createElement("iframe");
    a.setAttribute("id", "cht_popup"),
      a.setAttribute("frameborder", "0"),
      a.setAttribute("allowfullscreen", ""),
      a.setAttribute("allow", "autoplay"),
      a.setAttribute("allow", "microphone https://help.indiamart.com"),
      a.setAttribute("src", "https://help.indiamart.com/IndiamartHelpIconic/"),
      (e.innerHTML = ""),
      $(e).prepend(a),
      $(e).append('<span id="cht_cross" class="Hd_pa cpo"> &#x2716; </span>');
  }
  (hd_popup = 1),
    (document.body.style.overflow = "hidden"),
    $("#blk_ctpup").show(),
    $("#cht_cross").click(function (e) {
      (hd_popup = 0),
        $("#blk_ctpup").hide(),
        (document.body.style.overflow = "");
    });
}
$("#blkSrn").click(function () {
  $("#city_hold").hide(),
    $("#blkSrn").hide(),
    $("html").removeClass("hd_Ovr"),
    $(".hd_ctfltr").hide();
}),
  $(document).ready(function () {
    var e = $(window).width();
    $("#drpn").click(function (a) {
      1 == hddrpdn2_ct &&
        ($("#city_hold").toggle(),
        $("#hd_city_sugg").focus(),
        $(".gl-wrapper").css("width", e + "px"),
        $(".sec-left").length > 0 && $(".sec-left").css("width", e / 2 + "px"),
        $("#blkSrn").toggle(),
        $("html").toggleClass("hd_Ovr"),
        $("#hd_city_sugg").removeAttr("value"),
        a.stopPropagation(),
        "All India" !== $("#hd_usercity").html() &&
          ($("#all_India").show(),
          $("#all_India").click(function (e) {
            $("#hd_usercity").html("All India"),
              $("#city_hold").hide(),
              $("#blkSrn").hide(),
              $("html").removeClass("hd_Ovr"),
              $("#hd_city_sugg").removeAttr("value"),
              $("#all_India").hide();
          })));
    }),
      $("#city_hold").click(function (e) {
        e.stopPropagation();
      }),
      $(document).click(function () {
        $("#city_hold").hide(),
          $("#blkSrn").hide(),
          $("html").removeClass("hd_Ovr"),
          $("#hd_city_sugg").removeAttr("value");
      }),
      $("#cvdSp > a").click(function (e) {
        (mcat_name = "Covid-19 Supplies"),
          _gaq.push(["_trackEvent", "Covid Trending", "Header", mcat_name, 0]);
      }),
      $(".cvdSub a").click(function (e) {
        (mcat_name = $(this).text()),
          _gaq.push(["_trackEvent", "Covid Trending", "Header", mcat_name, 0]);
      }),
      $("#city_hold label").click(function () {
        $("#hd_city_sugg").focus();
      });
  });
var XMPP = 1;
function load_XMPP() {
  var e = getparamVal(decodeURIComponent(readCookie("ImeshVisitor")), "glid");
  if (
    (page_dir || page_indiamart) &&
    "" != readCookie("im_iss") &&
    (["98013053", "87528254", "59063812", "39174173", "135100990"].includes(
      e
    ) ||
      e % 10 == 1)
  ) {
    var a = document.createElement("script");
    (a.src = "//utils.imimg.com/globalhf/user_XMPP2.js"),
      document.getElementsByTagName("head")[0].appendChild(a);
  }
}
window.addEventListener("load", function () {
  load_XMPP(), (XMPP = 0);
});
let navData = window.performance.getEntriesByType("navigation");
function blocked_user() {
  "2" == getparamVal(decodeURIComponent(readCookie("ImeshVisitor")), "usts") &&
    deleteCookie("ImeshVisitor");
}
navData.length > 0 && navData[0].loadEventEnd > 0 && XMPP && load_XMPP();
