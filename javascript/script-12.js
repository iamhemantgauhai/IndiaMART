var webAddress = location.hostname,
  UrlPri = webAddress.match(/^dev/)
    ? "dev-"
    : webAddress.match(/^stg/)
    ? "stg-"
    : "",
  UrlPri2 = webAddress.match(/^dev/) || webAddress.match(/^stg/) ? "stg1-" : "",
  UrlPri1 = webAddress.match(/^dev/)
    ? "dev-"
    : webAddress.match(/^stg/)
    ? "stg-"
    : "";
$(
  '<link rel="stylesheet" type="text/css" href="//' +
    UrlPri +
    'utils.imimg.com/header/css/imloginv1-v41.css" >'
).appendTo("head"),
  "undefined" == typeof cimjsv && (cimjsv = new Object()),
  (cimjsv["//utils.imimg.com/header/js/imlogin.js"] = 394);
var gaFormIdentify,
  modid = "MY",
  iso_by_ip = "IN",
  updateUsing = "",
  step = 1,
  country_nm = "",
  newUser = "",
  cookieDelete = "",
  country_ip = "",
  iploc_country_name = "",
  textStatus = "",
  errorThrown = "",
  globalVariable = { example_attribute: "" },
  _gaq = _gaq || [],
  dis_ckies = "";
(isWrongCityEntered = 0),
  (redirectURL = document.URL),
  (otpPlusOTPOnCallCount = 0),
  (LoginwithOTPcount = 0),
  (verifytype = 0),
  "undefined" != typeof glmodid && (modid = glmodid);
var dropdownHtml = "";
function callVerOnReady() {
  var e, i, t, o, n, s, a, r;
  "function" == typeof jQuery
    ? ((pop_imesh = readCookie("ImeshVisitor")),
      (pop_xnhist = readCookie("xnHist")),
      (e = getparamVal(pop_xnhist, "ipv")),
      (i = getparamVal(pop_xnhist, "fpv")),
      (t = getparamVal(pop_imesh, "glid")),
      (o = getparamVal(pop_imesh, "mb1")),
      "undefined" != typeof glmodid && (modid = glmodid),
      (n = getparamVal(pop_imesh, "em")),
      getparamVal(pop_imesh, "ct"),
      (s = getparamVal(pop_imesh, "phcc")),
      (a = getparamVal(pop_imesh, "iso")),
      "undefined" != typeof pop_imesh &&
        "" != pop_imesh &&
        ("MY" != modid && "FCP" != modid
          ? ((3 != e && 5 != e) ||
              ("" != o &&
                "91" == getparamVal(pop_imesh, "phcc") &&
                "V" != getparamVal(pop_imesh, "uv") &&
                showmobverifyScreen(t, modid, o, s, "121", a, "2", "4", "VER")),
            ("DIR" != modid && "PRODDTL" != modid) ||
            (void 0 !== (r = readCookie("im_iss")) && "" != r)
              ? (3 != i && 5 != i) ||
                ("" != n &&
                  "V" == getparamVal(pop_imesh, "uv") &&
                  "V" != getparamVal(pop_imesh, "ev") &&
                  send_otp(t, modid, n, s, "109", a, "2", "4", "EMAILVER"))
              : (void 0 !== r && "" != r) ||
                (3 != e && 5 != e) ||
                ("" != n &&
                  "V" == getparamVal(pop_imesh, "uv") &&
                  "V" != getparamVal(pop_imesh, "ev") &&
                  send_otp(t, modid, n, s, "109", a, "2", "4", "EMAILVER")))
          : -1 != redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") &&
            "MY" == modid &&
            "V" != getparamVal(pop_imesh, "uv") &&
            "IN" == a &&
            showmobverifyScreen(t, modid, o, s, "121", a, "2", "4", "VER")))
    : setTimeout(function () {
        callVerOnReady();
      }, 1e3);
}
function decodeURIComponentSafe(e, i) {
  var t,
    o,
    n,
    s = new String(),
    a = 0;
  for (
    void 0 === i && (i = 0), o = (t = e.split(/(%(?:d0|d1)%.{2})/)).length;
    a < o;
    a++
  ) {
    try {
      n = decodeURIComponent(t[a]);
    } catch (e) {
      n = i ? t[a].replace(/%(?!\d+)/g, "%25") : t[a];
    }
    s += n;
  }
  return s;
}
function callImloginv1(e, i) {
  "undefined" != typeof isImloginV1Open && 1 == isImloginV1Open
    ? "R" == e
      ? fullLoginForm("", "", "", "R")
      : fullLoginForm("", "", "", "B")
    : ($.ajaxSetup({ cache: !0 }),
      $.getScript(
        "//" + UrlPri + "utils.imimg.com/header/js/imloginv1-v55.js",
        function () {
          "R" == e
            ? fullLoginForm("", "", "", "R")
            : fullLoginForm("", "", "", "B");
        }
      ));
}
function invalidMsgLogin(e) {
  $("#mobile").css("border-color", "red"),
    $("#mobile_err").html(e),
    $("#mobile_err").css("display", "block");
}
function callidentifiedJ() {
  return (
    $("html").css("overflow", "auto"), $("#IdentifiedPopUpHTML").html(""), !0
  );
}
function closeMe1(e) {
  $(".as_arrow").css("display", "block"), $("#mob_val").remove();
  var i = $("#iso").val(),
    t = $("#g_sub_head").text(),
    o = $("#LWG").val(),
    n = $("#mobile_err").text();
  if (
    "" != n ||
    null == typeof o ||
    1 != o ||
    "IN" == i ||
    null == typeof t ||
    "" == t
  ) {
    (LoginwithOTPcount = 0), getLoginStringv1();
    (o = readCookie("xnHist")), (t = "" != o ? getparamVal(o, "ipv") : "");
    if ("IDEN" == e && 1 == dispflag)
      yandex_impression(
        "Identification_login_popup",
        "Verification_close_" + modid
      ),
        ("DIR" != modid && "PRODDTL" != modid && "IMHOME" != modid) ||
          ("" ==
            ("" != (o = readCookie("ImeshVisitor"))
              ? getparamVal(o, "em")
              : "") &&
            (globalVariable = { example_attribute: "100" })),
        callidentifiedJ();
    else if ("IDEN" == e)
      yandex_impression(
        "Identification_login_popup",
        "Verification_close_" + modid
      ),
        (globalVariable =
          1 != dispflag ||
          ("DIR" != modid && "PRODDTL" != modid && "IMHOME" != modid)
            ? { example_attribute: "1" }
            : { example_attribute: "100" }),
        callidentifiedJ();
    else {
      if (
        "VER" == e &&
        -1 != redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") &&
        "MY" == modid
      )
        return (
          yandex_impression(
            "Verification_popup",
            "Verification_close_buyermy_" + modid
          ),
          $("#IdentifiedPopUpHTML").html(""),
          !0
        );
      if ("VER" == e)
        return (
          yandex_impression(
            "Verification_popup",
            4 == t || 5 == t
              ? "Verification_close_5th_" + modid
              : "Verification_close_3rd_" + modid
          ),
          $("#IdentifiedPopUpHTML").html(""),
          !0
        );
      if ("EMAILVER" == e)
        return (
          yandex_impression(
            "Verification_popup",
            5 == t || 4 == t
              ? "EMAIL_Verification_close_5th_" + modid
              : "EMAIL_Verification_close_3rd_" + modid
          ),
          $("#IdentifiedPopUpHTML").html(""),
          !0
        );
      if ("HDR" == e)
        return (
          yandex_impression("IM_Global_Header", "Verification_close_" + modid),
          window.location.reload(),
          !0
        );
      if ("BUYERMY" == e)
        return (
          yandex_impression(
            "Verification_popup",
            "Verification_popup_Buyermy_Verification_MYcontact_close_" + modid
          ),
          $("#IdentifiedPopUpHTML").html(""),
          !0
        );
      if ("BUYERMY_NAV" == e)
        return (
          yandex_impression(
            "Verification_popup",
            "Verification_popup_Buyermy_Verification_MYNav_close_" + modid
          ),
          $("#IdentifiedPopUpHTML").html(""),
          !0
        );
      if ("SELLER_DASHBOARD" == e)
        return $("#IdentifiedPopUpHTML").html(""), !0;
      if ("HDR_STRP" == e) return $("#IdentifiedPopUpHTML").html(""), !0;
      if ("SCROLLVER" == e || "SCROLLVER1" == e)
        return (
          "SCROLLVER1" == e &&
            yandex_impression(
              "Verification_popup",
              "Verification_popup_Verification_scroll_close_" + modid
            ),
          "SCROLLVER" == e &&
            yandex_impression(
              "Verification_popup",
              "Verification_popup_Verification_scrollver_close_" + modid
            ),
          sessionStorage.setItem("scrollverclosed", "1"),
          $("#IdentifiedPopUpHTML").hide(),
          (scrollverclosed = 1),
          $("#IdentifiedPopUpHTML").html(""),
          !0
        );
      yandex_impression(gaFormIdentify, "VerificationFormClose");
    }
    if ("FCP" == e || "si" == e || "MDC" == e || "PNS" == e)
      return $("#sign_in").html(""), !0;
    e = document.URL;
    (2 != step && 3 != step) ||
    ("MY" != modid &&
      "SELLERMY" != modid &&
      "SELLERS" != modid &&
      "PAYWIM" != modid &&
      "IMHOME" != modid &&
      "https://trade.indiamart.com/" != e)
      ? (-1 != redirectURL.indexOf("autoLoginconflict") &&
          (yandex_impression(
            "SignIn_popup_ConflictCases",
            "Conflict_popup_close_" + modid1
          ),
          (e = redirectURL.indexOf("autologin")),
          (urlWithOutConflictParam = redirectURL.substring(0, e - 1)),
          history.pushState(null, null, urlWithOutConflictParam)),
        $("#sign_in").html(""))
      : window.location.reload();
  } else callForeignSubmit(i);
}
function redirect_SB() {
  var e = webAddress.match(/my/)
    ? "MY"
    : webAddress.match(/seller/)
    ? "SELLER"
    : "";
  "MY" == e
    ? ((window.location = "//" + UrlPri + "my.indiamart.com"),
      yandex_impression("Redirection_on_signout", "Redirection_to_MY_" + modid))
    : "SELLER" == e
    ? ((window.location = "//" + UrlPri + "seller.indiamart.com"),
      yandex_impression(
        "Redirection_on_signout",
        "Redirection_to_SELLER_" + modid
      ))
    : window.location.reload();
}
function readCookie(e) {
  e += "=";
  return 0 < document.cookie.length &&
    ((offset = document.cookie.indexOf(e)), -1 != offset)
    ? ((offset += e.length),
      (end = document.cookie.indexOf(";", offset)),
      -1 == end && (end = document.cookie.length),
      unescape(document.cookie.substring(offset, end)))
    : "";
}
function getparamVal(e, i) {
  if ("" < e) {
    (e = "|" + e + "|"), (i = new RegExp(".*?\\|" + i + "=([^|]*).*|.*"));
    return e.replace(i, "$1");
  }
  return "";
}
function validmsg() {
  $("#mobile").css("border-color", "#999"),
    $("#mobile_err").html(""),
    $("#mobile_err").css("display", "none");
}
function signIn(e, i, t, o, n, s) {
  var a;
  (redirectURL = decodeURIComponentSafe(document.URL, 1)),
    -1 != redirectURL.indexOf("autoLoginconflict")
      ? ((a = redirectURL.indexOf("requestType")),
        ("I" == (a = redirectURL.substring(a + 12, a + 14)) && "B" != o) ||
        ("F" == a && "B" != o)
          ? register("s", o, n, s, e)
          : callImloginv1())
      : "B" == (cookieDelete = o)
      ? callImloginv1()
      : register("s", o, n, s, e);
}
function register(e, i, t, o, n) {
  var s = document.createElement("link");
  (s.href = "https://fonts.googleapis.com/css?family=Roboto"),
    (s.rel = "stylesheet"),
    (s.type = "text/css"),
    document.getElementsByTagName("head")[0].appendChild(s);
  var a = document.createElement("script");
  (a.src = "https://apis.google.com/js/platform.js"),
    document.getElementsByTagName("head")[0].appendChild(a);
  var r,
    d,
    l,
    p,
    c = "Join IndiaMART for Free",
    m = "Already a member:",
    u = "Sign In",
    g = "Create Your Account",
    y = new userDataCookie().get(),
    _ = y.mb1;
  "s" == e
    ? ((gaFormIdentify = "signIn"),
      (updateUsing = "Sign IN Form Desktop"),
      (c = "Sign In"),
      "C" == i
        ? (yandex_impression(gaFormIdentify, "step1_display_notme"),
          void 0 === _ && (_ = ""),
          void 0 === (l = y.fn) && (l = ""),
          void 0 === (d = y.em) && (d = ""),
          (c =
            "" == l && "" == _
              ? "Not " + d + "? Sign In as a different user"
              : "" == l
              ? "Not " + _ + "? Sign In as a different user"
              : "Not " + l + "? Sign In as a different user"))
        : ("si" != t &&
            "FCP" != t &&
            "MDC" != t &&
            "PNS" != t &&
            "PRODDTL" != t) ||
          (yandex_impression(gaFormIdentify, "step1_display_" + t), (c = o)),
      (g = "Submit"),
      (u = m = ""))
    : ((gaFormIdentify = "joinFree"), (updateUsing = "Join Free Form Desktop")),
    (redirectURL = decodeURIComponentSafe(document.URL, 1)),
    -1 != redirectURL.indexOf("autoLoginconflict") &&
      ((r = redirectURL.indexOf("username")),
      (s = redirectURL.indexOf("ISO")),
      (e = redirectURL.indexOf("&fn")),
      (d = redirectURL.indexOf("requestType")),
      (l = redirectURL.indexOf("&screen")),
      (o = redirectURL.substring(d + 12, d + 14)),
      (name1 = redirectURL.substring(e + 4, s - 1)),
      (userNameFromParam = redirectURL.substring(r + 9, e - 1)),
      (screen = redirectURL.substring(l + 8, d - 1)),
      (iso_by_ip =
        ((isoFromParam =
          "I" == o
            ? redirectURL.substring(s + 4, +l)
            : ((p = redirectURL.indexOf("kp")),
              redirectURL.substring(s + 4, p - 1))),
        isoFromParam)),
      (c =
        "" == (p = y.fn)
          ? "Not " + _ + " ? Sign In as " + name1
          : "Not " + p + " ? Sign In as " + name1),
      (modid1 =
        "vc=" +
        screen +
        "||imesh_user=" +
        y.glid +
        "||mail_user=" +
        userNameFromParam)),
    "C" != i &&
      "si" != t &&
      "PNS" != t &&
      "FCP" != t &&
      "MDC" != t &&
      "PRODDTL" != t &&
      yandex_impression(gaFormIdentify, "step1_display"),
    -1 != redirectURL.indexOf("autoLoginconflict") &&
      "IN" == isoFromParam &&
      yandex_impression(
        "SignIn_popup_ConflictCases",
        "Conflict_popup_display(IN)_" + modid1
      ),
    -1 != redirectURL.indexOf("autoLoginconflict") &&
      "IN" != isoFromParam &&
      yandex_impression(
        "SignIn_popup_ConflictCases",
        "Conflict_popup_display(FN)_" + modid1
      );
  cookiesEnabled() ||
    (gATracking("CookiesNotEnabled"),
    (dis_ckies =
      '<div id="cookiesetmsg" style="padding: 8px;border: 1.5px solid #f4c608;border-radius: 5px;margin-bottom: 15px;"><img id="alertImage" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDk3LjQ3MiA0OTcuNDcyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTcuNDcyIDQ5Ny40NzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUgMCAwIC0xLjI1IDAgNDUpIj4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZDQzREOyIgZD0iTTI0LjM3NC0zNTcuODU3Yy0yMC45NTgsMC0zMC4xOTcsMTUuMjIzLTIwLjU0OCwzMy44MjZMMTgxLjQyMSwxNy45MjgNCgkJCQljOS42NDgsMTguNjAzLDI1LjQ2MywxOC42MDMsMzUuMTIzLDBMMzk0LjE0LTMyNC4wMzFjOS42NzEtMTguNjAzLDAuNDIxLTMzLjgyNi0yMC41NDgtMzMuODI2SDI0LjM3NHoiLz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMyMzFGMjA7IiBkPSJNMTczLjYwNS04MC45MjJjMCwxNC44MTQsMTAuOTM0LDIzLjk4NCwyNS4zOTUsMjMuOTg0YzE0LjEyLDAsMjUuNDA3LTkuNTEyLDI1LjQwNy0yMy45ODQNCgkJCQlWLTIxNi43NWMwLTE0LjQ2MS0xMS4yODctMjMuOTg0LTI1LjQwNy0yMy45ODRjLTE0LjQ2MSwwLTI1LjM5NSw5LjE4Mi0yNS4zOTUsMjMuOTg0Vi04MC45MjJ6IE0xNzEuNDg5LTI4OS4wNTYNCgkJCQljMCwxNS4xNjcsMTIuMzQ1LDI3LjUxMSwyNy41MTEsMjcuNTExYzE1LjE2NywwLDI3LjUyMy0xMi4zNDUsMjcuNTIzLTI3LjUxMWMwLTE1LjE3OC0xMi4zNTYtMjcuNTIzLTI3LjUyMy0yNy41MjMNCgkJCQlDMTgzLjgzNC0zMTYuNTc5LDE3MS40ODktMzA0LjIzNCwxNzEuNDg5LTI4OS4wNTYiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" style="width:  28px;height:  28px;margin-right: 7px;    margin-top: -4px;"><span style=" color:  grey;font-weight:  800;">Please Enable Cookies to Continue</span></div>'));
  g =
    '<style>.dropdown dd ul{top:32px!important;}.dropdown dt {height: 20px!important;}</style><div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="im-pop_s"> \x3c!-- Popup div starts here --\x3e<div id="popupContact_s"> \x3c!-- contact us form --\x3e<div id="form_s" ><a href="javascript:" onclick="closeMe1();gATracking(\'step1_close\');"><img src="//' +
    UrlPri +
    'utils.imimg.com/header/gifs/3.png" id="close_s"/></a><div class="one_s"><div class="c3"></div><div id="form_bxx"><div class="step-1"><h2 class="f1_s" id="ghead" style="margin-bottom:10px;">' +
    c +
    '</h2><p style="padding-right:25px;text-align:right;margin-top:3px;" class="f12_s">' +
    m +
    '&nbsp;<a style="font-weight:bold; color:#ffffff;" href="javascript:" onclick="signIn();">' +
    u +
    '</a></p><span id="g_sub_head" style="padding-left:10px;font-size: 15px;font-weight: 600;display:none;">You are just one step away from verified suppliers</span></div><div><div class="frm-1"><div class="frm_right-1 f1_s" id="gsubhead"><form name="userregistration" id="reg-form"><a name="etop"></a><input type="hidden" value="' +
    modid +
    '" name="modid"><input type="hidden" value="' +
    updateUsing +
    '" name="updatedusing" id="updatedusing"><i class="enbgg nvTg" id="gemal_icn" style="display:none;"></i><div class="labeljn_s c3_s" id="gemail" style="margin-bottom: 20px;margin-left: 20px;font-size: 14px;font-weight: bold;display:none;"></div><div class="labeljn_s c3_s" id="g_sub1_head" style="margin-left: 5px;font-size: 14px;font-weight: bold;display:none;margin-top:0px;"></div><div id="g_sub2_head" class="labeljn_s c3_s" style="margin-bottom: 10px;font-size: 14px;display: none;width:390px;line-height:1.8;margin-top:0px;"></div>' +
    dis_ckies +
    '<div class="labeljn_s c3_s" id = "formLabel">Mobile Number</div><div class="f1 cont_drpdown" id=""><dl class="dropdown cont_mob" id="country-dropdown" > </dl></div><div id="frmGglCntryChusr"></div><input type="text" value="" maxlength="60" placeholder="Enter Your Mobile Number" class="fw_fn-1 un2_s" id="mobile" onkeypress="return isNumberKey1(event)" name="mobile" style="background-color:#fff;outline: none;box-sizing: content-box;"><span id="mobile_err" class="em-1" style="display:none"></span><div id ="trm1" style="line-height: 21px;font-size: 14px;"><label><input type="checkbox" id="myCheckbox" style="vertical-align:-2px;" onchange="activateButton1(this)"> I agree to the&nbsp;</label><a href="https://www.indiamart.com/terms-of-use.html" target="_blank">terms </a> and <a href="https://www.indiamart.com/privacy-policy.html" target="_blank" ">privacy policy</a></div><input type="hidden" value="" name="country" id="country"><input type="hidden" value="" name="iso" id="iso"><input type="hidden" value="" id="country_name" name="country_name"><input type="hidden" value="1" id="step" name="step"><input type="hidden" value="" id="ph_country" name="ph_country"><input type="hidden" value="1" id="step1" name="step1"><input type="hidden" value="' +
    t +
    '" id="srch1" name="srch1"><input type="hidden" value="" id="multi_mob_numbers_lwg"><div class="mt10_s"><p><button tabindex="5" style="padding: 8px 0px; width: 260px" onclick="validateForm_userName1(\'' +
    t +
    '\');" type="button" class="continue_s" name="start" id="logintoidentify">' +
    g +
    '</button></p><div id="lwg_wrpr"><p style="margin-top:-10px;font-size:14px;font-weight:600;">OR</p><div id="gSignInWrapper" style="margin: 10px 0px 15px 0px;text-align:center;"> <div id="signinBtn" class="customGPlusSignIn"> <span class="Gicon"> </span> <span class="buttonText"> Continue with Google </span><input type="hidden" value="0" style="display:none;" id="LWG"> </div></div></div><span id="loading_s" style="display:none; text-align:left !important;padding-top:24px;font-size:12px;top:10px;"><img style="text-align:left;" src="//' +
    UrlPri +
    'utils.imimg.com/header/gifs/indicator.gif" alt="loading" height="16" width="16"><b style="color:#000;">&nbsp;Signing In...</b></span></div></form></div></div></div></div></div></div> </div>  \x3c!-- Popup div ends here --\x3e </div><div id="loadingmessage" style="display:none;width: 100%;height: 100%;position:fixed;z-index: 1001;text-align: center;"><img src="//' +
    UrlPri +
    'utils.imimg.com/header/imgs/loader1.gif"/></div>';
  $("#sign_in").html(g),
    -1 != redirectURL.indexOf("autoLoginconflict") && $("#lwg_wrpr").hide(),
    $("#overlay_s").css("display", "block"),
    document.getElementById("mobile").focus(),
    "UK" == iso_by_ip && (iso_by_ip = "GB"),
    "undefined" != typeof Suggester &&
      "" != Suggester &&
      new Suggester({
        type: "isd",
        element: "country-dropdown",
        onSelect: selectCountry,
        fields: "cname,iso,icon_order",
        displayFields: "cname,value",
        autocompleteClass: "isd_class",
        displaySeparator: "  +",
        defaultValue: iso_by_ip,
      }),
    clc_cookies();
  var f = "",
    f =
      "dev-" == UrlPri || "stg-" == UrlPri
        ? "335658149809-o25hpstdu2tdo43j8ppg8l6n6i0dtfl0.apps.googleusercontent.com"
        : "432055510365-4for8jpqviklkgt2lssm41sfhhfo0ovs.apps.googleusercontent.com";
  a.onload = function () {
    gapi.load("auth2", function () {
      (auth2 = gapi.auth2.init({ client_id: f })),
        googleSignin(document.getElementById("signinBtn"));
    });
  };
}
function googleSignin(e) {
  auth2.attachClickHandler(
    e,
    {},
    function (e) {
      var i = e.getAuthResponse().id_token;
      (gusrname = e.getBasicProfile().getName()),
        (gusremail = e.getBasicProfile().getEmail()),
        "" != gusremail && checkEmailExistOrNot(gusremail, i),
        gusrname,
        "" != gusremail &&
          (yandex_impression("Login_With_Google", "Step1_" + modid1),
          $("#formLabel").html(
            'Mobile Number <span style="color:red;">*</span>'
          ),
          "IN" != $("#iso").val() &&
            "1" == $("#step").val() &&
            ($("#mobile").attr("placeholder", "Enter your Mobile Number"),
            $("#formLabel").html(
              'Mobile Number <span style="color:blue;font-size:11px;">(Optional)</span>'
            )),
          $("#lwg_wrpr").hide(),
          $("#logintoidentify").css("margin", "15px 0 0px"),
          $("#LWG").val(1));
    },
    function (e) {}
  );
}
function cookiesEnabled() {
  return !!navigator.cookieEnabled;
}
function verifyEmailViaLWG(i, e) {
  $("#iso").val();
  var t = $("#ph_country").val(),
    o = glmodid;
  (null != typeof o && "" != o) || (o = "DIR");
  t = {
    token: "imobile@15061981",
    format: "JSON",
    glusr_id: e,
    em: i,
    mid: o,
    countIP: country_ip,
    IPcount: t,
    lwg_screen: "Email Verification via login with google - desktop",
  };
  $.ajax({
    url: "//" + UrlPri2 + "login.indiamart.com/user/emailVerification/",
    data: t,
    type: "POST",
    crossDomain: !0,
    success: function (e) {
      setEmailCookieLogin(i, 1);
    },
  });
}
function setEmailCookieLogin(e, i) {
  for (
    var t = readCookie("ImeshVisitor"),
      o = "",
      n = e.indexOf("@"),
      s = "",
      a = 0;
    a <= n;
    a++
  )
    s += "*";
  var r = e.substring(n);
  (e = e.charAt(0) + s + r),
    0 < t.length &&
      -1 != t.indexOf("em") &&
      (((o = strToObj(t)).em = e),
      imesh_obj.set(o),
      (t = readCookie("ImeshVisitor"))),
    1 == i &&
      t.indexOf("ev") &&
      (((o = strToObj(t)).ev = "V"), imesh_obj.set(o));
}
function checkEmailExistOrNot(s, e) {
  var i = $("#iso").val(),
    t = $("#ph_country").val();
  $("#updatedusing").val();
  $("#iso").val() || $("#iso").val(iso_by_ip),
    $("#logintoidentify").css("display", "none"),
    $("#loading_s").css("display", "block");
  var o = "//" + UrlPri2 + "login.indiamart.com/user/loginwithgoogle_first/",
    t = {
      username: s,
      iso: i,
      modid: modid,
      format: "JSON",
      create_user: 1,
      originalreferer: window.location.href,
      GEOIP_COUNTRY_ISO: i,
      ip: country_ip,
      screen_name: updateUsing,
      id_token: e,
      gusername: gusrname,
      guseremail: s,
      ph_country: t,
    };
  $.ajax({
    url: o,
    type: "POST",
    data: t,
    jsonpCallback: "create_callback",
    crossDomain: !0,
    success: function (e) {
      if (200 == (e = $.parseJSON(e)).code) {
        var i = e.access;
        if (null != i && "2" == i)
          return (
            (document.cookie =
              "ImeshVisitor=; domain=.indiamart.com; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
            void window.location.reload()
          );
        var t,
          o,
          n = e.msg;
        e.fn;
        "Unique Email found in Primary Email" == n &&
          ((o = e.GLID),
          $("#gemail").html(s),
          $("#gemal_icn").css({
            display: "inline-block",
            "background-position": "-72px -9px",
          }),
          $("#sign_in").html(""),
          $("#loadingmessage").hide(),
          (t = e.DataCookie),
          verifyEmailViaLWG(s, o),
          (i = e.LoginCookie),
          (o = e.im_iss),
          imesh_obj.set(t, "ImeshVisitor"),
          v4iilex_obj.set(i, "v4iilex"),
          im_iss_obj.set(o, "im_iss"),
          getLoginStringv1(),
          "undefined" != typeof isBLFormOpen && callToIdentifiedQ(),
          "MY" == modid && window.location.reload());
      } else
        "204" == e.code &&
          ((o = e.msg),
          "ISO MisMatch" == e.message
            ? (invalidMsgLogin(o),
              $("#country-dropdown").css("pointer-events", "auto"))
            : e.message.match(/suspicious/g)
            ? ((n = e.message), invalidMsgLogin(o))
            : "We have multiple account linked with this Email ID" == e.message
            ? ((n = e.message),
              $("#gemail").html(s),
              $("#gemal_icn").hide(),
              $("#gemail").hide(),
              $("#ghead").html("Sign in to continue as " + gusrname),
              $("#g_sub_head").text(s),
              $("#g_sub_head").show(),
              $("#g_sub2_head").text(o),
              $("#g_sub1_head").css("display", "inline-block"),
              $("#g_sub2_head").css("display", "inline-block"),
              (n = e.data_num),
              $("#multi_mob_numbers_lwg").val(n),
              $("#country-dropdown").css("pointer-events", "none"))
            : "No Email found in Primary Email" == e.message
            ? ($("#ghead").html("Sign in to continue as " + gusrname),
              $("#g_sub_head").text(s),
              $("#g_sub_head").show(),
              $("#country-dropdown").css("pointer-events", "none"))
            : "Invalid Token ID" == e.message
            ? invalidMsgLogin("Invalid token request")
            : invalidMsgLogin(o)),
          $("#logintoidentify").css("display", "inline-block"),
          $("#loading_s").css("display", "none");
    },
  });
}
function identifyViaLoginWithGoogle(d, l) {
  yandex_impression("Login_With_Google", "Step2_" + modid1);
  var p = $("#iso").val(),
    c = $("#ph_country").val();
  $("#updatedusing").val();
  $("#iso").val() || $("#iso").val(iso_by_ip),
    $("#logintoidentify").css("display", "none"),
    $("#loading_s").css("display", "block");
  var e = "//" + UrlPri2 + "login.indiamart.com/user/loginwithgoogle/",
    i = {
      username: d,
      iso: p,
      modid: modid,
      format: "JSON",
      create_user: 1,
      originalreferer: window.location.href,
      GEOIP_COUNTRY_ISO: p,
      ip: country_ip,
      ph_country: c,
      screen_name: updateUsing,
      gusername: gusrname,
      gemail: gusremail,
    },
    t = $("#mobile").val();
  null != typeof t &&
    "" != t &&
    (("IN" == $("#iso").val() && "1" == $("#step").val()) ||
    ("IN" != $("#iso").val() && "2" == $("#step").val())
      ? (i.username = t)
      : "IN" != $("#iso").val() && ((i.username = d), (i.mobile = t))),
    $.ajax({
      url: e,
      type: "POST",
      data: i,
      jsonpCallback: "create_callback",
      crossDomain: !0,
      success: function (e) {
        if (200 == (e = $.parseJSON(e)).code) {
          var i = e.msg,
            t = e.DataCookie,
            o = e.access,
            n = e.DataCookie.glid;
          if (null != o && "2" == o)
            return (
              (document.cookie =
                "ImeshVisitor=; domain=.indiamart.com; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
              void window.location.reload()
            );
          if (null != t && "" != t) {
            (document.cookie =
              "ImeshVisitor=;expires=;domain=.indiamart.com;path=/;"),
              imesh_obj.set(t, "ImeshVisitor"),
              getLoginStringv1(),
              "undefined" != typeof isBLFormOpen && callToIdentifiedQ();
            var s,
              a = new userDataCookie().get(),
              r = a.glid,
              o = a.fn,
              t = a.em;
            a.ct;
            if (((p = a.iso), (c = a.phcc), 1 == l)) {
              if (
                (verifyEmailViaLWG(gusremail, n),
                (s = "" != o && "" != t ? 4 : 3),
                "91" == c && "V" != a.uv && "IN" == p)
              ) {
                if (
                  ("undefined" != typeof isBLFormOpen && callToIdentifiedQ(),
                  document.URL !=
                    "https://" + UrlPri + "seller.indiamart.com/sbl")
                )
                  return (
                    truecaller_Ver(r, modid, d, c, "121", p, "2", s),
                    $("#loading_s").hide(),
                    getLoginStringv1(),
                    !0
                  );
                fullLoginForm("", "", "", "B");
              }
            } else if ("New User created via User creation service" == i) {
              if (
                (verifyEmailViaLWG(gusremail, n),
                (s = "" != o && "" != t ? 4 : 3),
                "91" == c && "V" != a.uv && "IN" == p)
              ) {
                if (
                  ("undefined" != typeof isBLFormOpen && callToIdentifiedQ(),
                  document.URL !=
                    "https://" + UrlPri + "seller.indiamart.com/sbl")
                )
                  return (
                    truecaller_Ver(r, modid, d, c, "121", p, "2", s),
                    $("#loading_s").hide(),
                    getLoginStringv1(),
                    !0
                  );
                fullLoginForm("", "", "", "B");
              }
            } else if ("Mobile Number found in Primary Mobile" == i)
              if (
                (verifyEmailViaLWG(gusremail, n),
                (s = "" != o && "" != t ? 4 : 3),
                "91" == c && "V" != a.uv && "IN" == p)
              ) {
                if (
                  ("undefined" != typeof isBLFormOpen && callToIdentifiedQ(),
                  document.URL !=
                    "https://" + UrlPri + "seller.indiamart.com/sbl")
                )
                  return (
                    truecaller_Ver(r, modid, d, c, "121", p, "2", s),
                    $("#loading_s").hide(),
                    getLoginStringv1(),
                    !0
                  );
                fullLoginForm("", "", "", "B");
              }
            return (
              $("#loading_s").hide(),
              $("#sign_in").html(""),
              getLoginStringv1(),
              "MY" == modid && window.location.reload(),
              !0
            );
          }
        } else
          "204" == e.code && invalidMsgLogin(e.msg),
            $("#logintoidentify").css("display", "inline-block"),
            $("#loading_s").css("display", "none");
      },
    });
}
function callForeignSubmit(e) {
  "IN" == e ||
    (null != typeof (e = $("#g_sub_head").text()) &&
      "" != e &&
      identifyViaLoginWithGoogle(e));
}
function activateButton1(e) {
  "" == dis_ckies && e.checked
    ? ((document.getElementById("logintoidentify").disabled = !1),
      $("#logintoidentify").css("background-color", "#00a699"),
      $("#mobile_err").html(""),
      $("#mobile_err").css("display", "none"))
    : ((document.getElementById("logintoidentify").disabled = !0),
      $("#logintoidentify").css("background-color", "#b2b2b2"));
}
$(document).ready(function () {
  var e = readCookie("iploc");
  "undefined" != e && "" != e
    ? ((iso_by_ip = getparamVal(e, "gcniso")),
      (country_ip = getparamVal(e, "gip")),
      (country_nm = getparamVal(e, "gcnnm")),
      (iploc_country_name = country_nm),
      "UK" == iso_by_ip && (iso_by_ip = "GB"))
    : ((t = { modid: modid, token: "imobile@15061981" }),
      $.ajax({
        type: "POST",
        dataType: "json",
        data: t,
        url: "https://" + UrlPri + "geoip.imimg.com/api/location.php",
        crossDomain: !0,
        success: function (e) {
          (iso_by_ip = e.Response.Data.geoip_countryiso),
            (country_ip = e.Response.Data.geoip_ipaddress),
            (country_nm = e.Response.Data.geoip_countryname),
            (iploc_country_name = country_nm),
            "UK" == iso_by_ip && (iso_by_ip = "GB");
        },
      }));
  var i = readCookie("ImeshVisitor");
  (redirectURL = decodeURIComponentSafe(document.URL, 1)),
    -1 != redirectURL.indexOf("autoLoginconflict") &&
      "" != i &&
      signIn("", "", "", "", "", "");
  var t,
    o,
    n,
    s,
    a = "undefined" != typeof glmodid ? glmodid : "DIR";
  "undefined" == typeof InstallTrigger &&
    "ETO" != a &&
    "TDR" != a &&
    "MY" != a &&
    void 0 !== window.performance.navigation &&
    Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") <
      0 &&
    ((e = document.referrer),
    (t = webAddress.match(/dev/)
      ? "https://dev.indiamart.com/new/gamma/?back=1"
      : webAddress.match(/stg/)
      ? "https://stg.indiamart.com/new/gamma/?back=1"
      : "https://www.indiamart.com/?back=1"),
    (a = webAddress.match(/dev/)
      ? "https://dev-my.indiamart.com/?back=1"
      : webAddress.match(/stg/)
      ? "https://stg-my.indiamart.com/?back=1"
      : "https://my.indiamart.com/?back=1"),
    (i = "" != i ? getparamVal(i, "utyp") : ""),
    (o = "F" == i || "N" == i ? a : t),
    (i = window.location.href),
    cookiesEnabled() && (n = sessionStorage.getItem("bckurl")),
    i.match(/proddetail/) && e.match(/dir.indiamart.com/) && (o = e),
    ("" != e &&
      "indiamart.com" ==
        e.split("/")[2].slice(e.split("/")[2].indexOf(".") + 1) &&
      1 != history.length &&
      n != i &&
      e != i) ||
      i == a ||
      i == t ||
      (1 == history.length &&
        (sessionStorage.setItem("bckurl", i), sessionStorage.setItem("f", "0")),
      cookiesEnabled() && (s = sessionStorage.getItem("f")),
      (0 != window.performance.navigation.type &&
        255 != window.performance.navigation.type) ||
        (null != s && 1 == s) ||
        -1 != location.href.indexOf("#") ||
        (history.pushState("", "", window.location.href),
        cookiesEnabled() && sessionStorage.setItem("f", "1")),
      (window.onpopstate = function () {
        "" != history.state &&
          -1 == location.href.indexOf("#") &&
          (sessionStorage.setItem("f", "0"),
          sessionStorage.setItem("bckurl", "0"),
          window.location.replace(o));
      })));
}),
  "complete" !== document.readyState && "function" == typeof jQuery
    ? $(document).ready(function () {
        setTimeout(function () {
          callVerOnReady();
        }, 1e3);
      })
    : setTimeout(function () {
        callVerOnReady();
      }, 1e3),
  $(function () {
    $(document)
      .unbind("keypress")
      .bind("keypress", function (e) {
        var i;
        if (
          (27 == e.keyCode &&
            (1 == $("#step1").val()
              ? yandex_impression(gaFormIdentify, "step1_close")
              : 2 == $("#step1").val() &&
                yandex_impression(gaFormIdentify, "VerificationFormClose"),
            closeMe1()),
          13 == e.keyCode &&
            (document.getElementById("logintoidentify") ||
              document.getElementById("check_verify1")))
        )
          return (
            $("#identifiedForm").length
              ? "IN" == $("#countryIso").val()
                ? $("#logintoidentify").click()
                : document.getElementById("myCheckbox") &&
                  (document.getElementById("myCheckbox").checked
                    ? $("#logintoidentify").click()
                    : ((i = document.getElementById("mbl_idn")),
                      (e = document.getElementById("err-msg-mbl-ctl")),
                      invalidmsg_ctl(
                        i,
                        "Please accept the terms and privacy policy.",
                        e
                      )))
              : "IN" == $("#iso").val()
              ? "" == dis_ckies && $("#logintoidentify").click()
              : document.getElementById("myCheckbox") &&
                (document.getElementById("myCheckbox").checked
                  ? "" == dis_ckies && $("#logintoidentify").click()
                  : invalidMsgLogin(
                      "Please accept the terms and privacy policy."
                    )),
            $("#check_verify1").click(),
            !1
          );
      });
  }),
  $(function () {
    window.history &&
      window.history.pushState &&
      $(window).on("popstate", function () {
        void 0 !== window.perWidget && syncDataCheck();
      });
  });
var fieldFlag = 1;
function isNumberKey1(e) {
  if (1 != fieldFlag) return !0;
  var i = e.which;
  return (118 == i && !0 === e.ctrlKey) || !(31 < i && (i < 48 || 57 < i));
}
function selectCountry(e, i) {
  var t = $("#LWG").val();
  $("#mobile").css("border-color", ""),
    $("#trm1").css("display", "none"),
    $("#mobile_err").html(""),
    $("#country-dropdown dt a span").attr(
      "style",
      "background-position:0px -" + 11 * i.data.icon_order + "px"
    ),
    $("#country-dropdown dt span.value").html("+" + i.value),
    $("#country_name").val(i.data.cname),
    $("#iso").val(i.data.iso),
    $("#ph_country").val(i.value),
    ("IN" != $("#iso").val() && "1" == $("#step").val()) ||
    ("IN" == $("#iso").val() && "2" == $("#step").val())
      ? ((fieldFlag = 2),
        $("#iso").val(),
        $("#trm1").css("display", "inline-block"),
        (document.getElementById("logintoidentify").disabled = !0),
        $("#logintoidentify").css("background-color", "#b2b2b2"),
        $("#myCheckbox").attr("checked", !1),
        $("#mobile").attr("maxlength", "100"),
        $("#country-dropdown dt span.value").css("display", "none"),
        $("#country-dropdown dt a").css("margin-top", "10px"),
        null != typeof t && 1 == t
          ? ($("#mobile").attr("placeholder", "Enter your Mobile Number"),
            $("#formLabel").html(
              'Mobile Number <span style="color:blue;font-size:11px;">(Optional)</span>'
            ))
          : ($("#mobile").attr("placeholder", "Enter your Email ID"),
            $("#formLabel").html("Email ID")),
        "2" != $("#step").val() &&
          $("#mobile").css({ "padding-left": "64px", width: "373px" }))
      : ((fieldFlag = 1),
        (document.getElementById("logintoidentify").disabled = !1),
        $("#logintoidentify").css("background-color", "#00a699"),
        $("#trm1").css("display", "none"),
        $("#mobile").attr("maxlength", "10"),
        $("#country-dropdown dt span.value").css("display", "inline-block"),
        $("#formLabel").html("Mobile Number"),
        $("#mobile")
          .css({ "padding-left": "119px", width: "318px" })
          .attr("placeholder", "Enter Your Mobile Number"),
        "2" != $("#step").val() &&
          null != typeof t &&
          1 == t &&
          $("#formLabel").html(
            'Mobile Number <span style="color:red;">*</span>'
          )),
    $("#mobile").val(""),
    clc_cookies();
}
function validateForm_userName1(e) {
  var i,
    t = $("#LWG").val(),
    o = $("#mobile").val();
  return (
    $("#iso").val() || $("#iso").val(iso_by_ip),
    ("IN" == $("#iso").val() && "1" == $("#step").val()) ||
    ("IN" != $("#iso").val() && "2" == $("#step").val())
      ? "" == o || 0 == o.length
        ? (invalidMsgLogin("Please enter mobile number."), !1)
        : (10 <
            (
              (o = (o = o.replace(/\-|\s|\[|\]|\(|\)/gi, "")).replace(
                /\+/g,
                ""
              )).match(/[0-9]/g) || []
            ).length && (o = o.replace(/^((91){0,1}0{0,})/g, "")),
          "IN" != $("#iso").val() && "2" == $("#step").val()
            ? 16 < o.length || o.length < 7
              ? (invalidMsgLogin("Please enter valid number."), !1)
              : (validmsg(), !0)
            : /^[16789]/.test(o)
            ? 10 != o.length
              ? (invalidMsgLogin("Please enter 10 digit mobile number."), !1)
              : (validmsg(),
                null != typeof t && 1 == t
                  ? null != typeof (i = $("#multi_mob_numbers_lwg").val()) &&
                    "" != i
                    ? ((i = i.split(",")),
                      -1 == jQuery.inArray(o, i)
                        ? identifyViaLoginWithGoogle(o, 0)
                        : identifyViaLoginWithGoogle(o, 1))
                    : identifyViaLoginWithGoogle(o)
                  : userDetailsAutoFetchforidentify(o, e),
                !0)
            : (invalidMsgLogin("Mobile Number should start with 6,7,8 or 9"),
              !1))
      : (null != typeof t && 1 == t && (o = $("#g_sub_head").text()),
        "" == (o = o.replace(/^\s+|\s+$/gm, "")) || 0 == o.length
          ? (invalidMsgLogin("Please enter your Email ID"), !1)
          : /^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              o
            )
          ? (validmsg(),
            "2" != $("#step").val() &&
              (null != typeof t && 1 == t
                ? identifyViaLoginWithGoogle(o)
                : userDetailsAutoFetchforidentify(o, e)),
            !0)
          : (invalidMsgLogin(
              "Invalid Email ID. Please enter the correct Email ID."
            ),
            !1))
  );
}
function userDetailsAutoFetchforidentify(r, d) {
  redirectURL = decodeURIComponentSafe(document.URL, 1);
  var l = $("#iso").val(),
    e = readCookie("iploc"),
    i = "" != e ? getparamVal(e, "GeoLoc_lt") : "",
    t = "" != e ? getparamVal(e, "lg") : "";
  "undefined" != e && "" != e
    ? ((iso_by_ip = getparamVal(e, "gcniso")),
      (country_ip = getparamVal(e, "gip")),
      (country_nm = getparamVal(e, "gcnnm")),
      "UK" == iso_by_ip && (iso_by_ip = "GB"))
    : ((o = { modid: modid, token: "imobile@15061981" }),
      $.ajax({
        type: "POST",
        dataType: "json",
        data: o,
        url: "https://" + UrlPri + "geoip.imimg.com/api/location.php",
        crossDomain: !0,
        success: function (e) {
          (iso_by_ip = e.Response.Data.geoip_countryiso),
            (country_ip = e.Response.Data.geoip_ipaddress),
            (country_nm = e.Response.Data.geoip_countryname),
            "UK" == iso_by_ip && (iso_by_ip = "GB");
        },
      }));
  var p = $("#ph_country").val();
  $("#updatedusing").val();
  $("#iso").val() || $("#iso").val(iso_by_ip),
    $("#logintoidentify").css("display", "none"),
    $("#lwg_wrpr").css("display", "none"),
    $("#loading_s").css("display", "block");
  var o = "//" + UrlPri2 + "login.indiamart.com/user/identify/",
    t = {
      username: r,
      iso: l,
      modid: modid,
      format: "JSON",
      create_user: 1,
      originalreferer: window.location.href,
      GEOIP_COUNTRY_ISO: l,
      ip: country_ip,
      screen_name: updateUsing,
      Lat_val: i,
      Long_val: t,
      country: country_nm,
    };
  $.ajax({
    url: o,
    type: "POST",
    data: t,
    jsonpCallback: "create_callback",
    crossDomain: !0,
    success: function (e) {
      e = $.parseJSON(e);
      imeshUserData = e.DataCookie;
      if (
        ((isRestricted = 0),
        imeshUserData &&
          imeshUserData.usts &&
          2 == imeshUserData.usts &&
          (isRestricted = 1),
        null == e || "200" != e.code)
      )
        return (
          "204" == e.code &&
            (isRestricted
              ? ($("#mob_val").remove(),
                $("body").append('<input type="hidden" id="mob_val">'),
                (document.getElementById("mob_val").value = $("#mobile").val()),
                $("body").append('<input type="hidden" id="iso_restricted">'),
                (document.getElementById("iso_restricted").value =
                  $("#iso").val()),
                $("body").append('<input type="hidden" id="phcc_restricted">'),
                (document.getElementById("phcc_restricted").value =
                  $(".value").text()),
                (dropdownHtml = $("#country-dropdown").html()),
                callImloginv1("R"))
              : invalidMsgLogin(e.msg)),
          $("#logintoidentify").css("display", "inline-block"),
          void $("#loading_s").css("display", "none")
        );
      "New User created via User creation service" == e.msg && (newUser = 1);
      var i = e.DataCookie,
        t = e.access;
      if (null != t && "2" == t)
        return (
          (document.cookie =
            "ImeshVisitor=; domain=.indiamart.com; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
          void window.location.reload()
        );
      if (
        (null != i &&
          "" != i &&
          ((document.cookie =
            "ImeshVisitor=;expires=;domain=.indiamart.com;path=/;"),
          imesh_obj.set(i, "ImeshVisitor")),
        "PRODDTL" == modid &&
          parent.document.getElementById("buttonid") &&
          "" != parent.document.getElementById("buttonid").value)
      ) {
        var o = parent.document.getElementById("buttonid").value;
        if (o)
          return (
            $("#" + o).click(),
            $("#sign_in").html(""),
            (parent.document.getElementById("buttonid").value = ""),
            getLoginStringv1(),
            !0
          );
      }
      var n = new userDataCookie().get(),
        s = n.glid,
        a = n.fn,
        t = n.em;
      n.ct;
      if (
        ((l = n.iso),
        (p = n.phcc),
        document.getElementById("myCheckbox").checked &&
          ((o = {
            r: "Newreqform/TermNCondition",
            s_glusrid: s,
            s_user_agent: navigator.userAgent,
            modid: modid,
            format: "JSON",
            s_ip: country_ip,
            s_ip_country: country_nm,
            s_ip_country_iso: iso_by_ip,
            curr_page_url: window.location.href,
            reference_text: "Desktop Signin/Joinfree form",
          }),
          $.ajax({
            url: "//" + UrlPri + "apps.imimg.com/index.php?",
            type: "POST",
            data: o,
            crossDomain: !0,
            success: function (e) {},
          })),
        (t = "" != a && "" != t ? 4 : 3),
        "1" == newUser)
      ) {
        if ("91" == p && "IN" == l) {
          if (
            ("undefined" != typeof isBLFormOpen && callToIdentifiedQ(),
            "PNS" == d || "PRODDTL" == d)
          )
            return $("#sign_in").html(""), !0;
          document.URL == "https://" + UrlPri + "seller.indiamart.com/sbl"
            ? fullLoginForm("", "", "", "B")
            : truecaller_Ver(s, modid, r, p, 121, l, "2", t);
        } else
          "undefined" != typeof isBLFormOpen && callToIdentifiedQ(),
            thankyou_popup(modid, t);
        "C" == cookieDelete &&
          (document.cookie = "imEqGl=;expires=;domain=.indiamart.com;path=/;"),
          "FCP" == d || "MDC" == d || "PNS" == d || "si" == d
            ? yandex_impression(gaFormIdentify, "step1_submit_" + d)
            : -1 != redirectURL.indexOf("autoLoginconflict")
            ? yandex_impression(
                "SignIn_popup_ConflictCases",
                "Conflict_popup_submit_" + modid1
              )
            : yandex_impression(gaFormIdentify, "step1_submit");
      } else {
        if (
          (("" != n && null != n) ||
            ((i = e.DataCookie), imesh_obj.set(i, "ImeshVisitor")),
          "91" == p && "V" != n.uv && "IN" == l)
        )
          "undefined" != typeof isBLFormOpen && callToIdentifiedQ(),
            document.URL == "https://" + UrlPri + "seller.indiamart.com/sbl"
              ? fullLoginForm("", "", "", "B")
              : truecaller_Ver(s, modid, r, p, 121, l, "2", t);
        else {
          "undefined" != typeof isBLFormOpen && callToIdentifiedQ(),
            getLoginStringv1();
          document.URL;
          if (
            ("MY" != modid &&
              "SELLERMY" != modid &&
              "SELLERS" != modid &&
              "PAYWIM" != modid &&
              "IMHOME" != modid &&
              "ETO" != modid) ||
            -1 != redirectURL.indexOf("autoLoginconflict")
          ) {
            if ("DIR" == modid)
              return (
                "undefined" != typeof showCntNumber &&
                  $.isFunction(showCntNumber) &&
                  showCntNumber(),
                closeMe1(),
                yandex_impression(gaFormIdentify, "step1_close"),
                !0
              );
            $("#sign_in").html("");
          } else window.location.reload();
        }
        "C" == cookieDelete &&
          (document.cookie = "imEqGl=;expires=;domain=.indiamart.com;path=/;"),
          yandex_impression(
            gaFormIdentify,
            "FCP" == d ||
              "MDC" == d ||
              "PNS" == d ||
              "PRODDTL" == d ||
              "si" == d
              ? "step1_submit_" + d
              : "step1_submit"
          );
      }
      -1 != redirectURL.indexOf("autoLoginconflict") &&
        ((t = redirectURL.indexOf("autologin")),
        (urlWithOutConflictParam = redirectURL.substring(0, t - 1)),
        history.pushState(null, document.title, urlWithOutConflictParam),
        ("MY" != modid &&
          "SELLERMY" != modid &&
          "SELLERS" != modid &&
          "PAYWIM" != modid &&
          "IMHOME" != modid &&
          "ETO" != modid) ||
          window.location.reload());
    },
    error: function (e) {
      $("#logintoidentify").css("display", "inline-block"),
        $("#loading_s").css("display", "none"),
        invalidMsgLogin("Something went wrong. Please try again in sometime!"),
        _gaq.push(["_trackEvent", "SignIn_Error", r, modid, 0, !0]);
    },
  });
}
function thankyou_popup(e, i, t, o) {
  var n = readCookie("ImeshVisitor"),
    n =
      '<div id="im-pop_s"> \x3c!-- Popup div starts here --\x3e<div id="popupContact_s" style="display: block;">\x3c!-- contact us form --\x3e<div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" style="min-width: 540px;"><div class="step-1" id="bs_hdng1"><a href="javascript:" onclick="closeMe1(\'' +
      o +
      '\');" style="display: block;"><img src="//dev-utils.imimg.com/header/gifs/3.png" id="close_s"></a><h2 class="f1_s otp-pl18">Verification mail sent</h2></div><div><p class="email-message" style="margin: 19px 0px 20px 14px;">We have sent you a mail on <b> ' +
      ("" != n ? getparamVal(n, "em") : "") +
      " </b> with a verification link.Please click on the link to verify that it belongs to you.</p></div></div>\x3c!-- Popup div ends here --\x3e</div>  \x3c!-- Popup div ends here --\x3e </div>";
  "HDR_STRP" != o
    ? ((document.getElementById("popupContact_s").innerHTML = n),
      (document.getElementById("popupContact_s").style.display = "block"))
    : ($("#IdentifiedPopUpHTML").html(n),
      $("#overlay_s").css("display", "block"),
      $("#IdentifiedPopUpHTML").css({
        display: "block",
        position: "fixed",
        top: "200px",
        left: "50%",
        "z-index": "1001",
        "margin-left": "-247px",
      })),
    setTimeout(function () {
      return (
        3 == i || 4 == i
          ? (closeMe1(), "MY" == e && window.location.reload())
          : "FCP" == e || "si" == t || "MDC" == e
          ? ("undefined" != typeof isBLFormOpen && callToIdentifiedQ(),
            $("#sign_in").html(""))
          : (window.location = "//" + UrlPri + "my.indiamart.com"),
        !0
      );
    }, 5e3);
}
function truecaller_Ver(e, i, t, o, n, s, a, r, d) {
  var l = new userDataCookie().get(),
    p = l.phcc,
    l = l.mb1;
  p.concat(l);
  showmobverifyScreen(e, i, t, o, n, s, "2", r, "HDR");
}
var scrollverclosed,
  sendOTPCount = 0;
function send_otp(e, i, n, t, o, s, a, r, d) {
  if (((LoginwithOTPcount = 0), 3 != a)) {
    null !== document.getElementById("otp-message") &&
      (document.getElementById("otp-message").innerHTML =
        "4 digit OTP SMS sent on your mobile <b>+91-" + n + "</b>"),
      1 == dispflag &&
        "IDEN" == d &&
        (document.getElementById("resendMsg").style.display = "block"),
      "SCROLLVER1" == d &&
        yandex_impression(
          "Verification_popup",
          "Verification_scroll_click_" + i
        );
    var l = readCookie("xnHist"),
      p = "" != l ? getparamVal(l, "ipv") : "";
    $("#verify_error1").html(""),
      1 == displayVerificationOptions && $("#mwrp").css("display", "none");
    var c = new userDataCookie().get(),
      m = c.mb1,
      u = c.glid;
    if (
      ("109" != o
        ? (n && m) ||
          ((y = u + "_" + i + "_" + n + "_" + m),
          _gaq.push([
            "_trackEvent",
            gaFormIdentify,
            "mobileTrackingInSend",
            y,
            0,
            !0,
          ]))
        : "" != (_ = readCookie("im_iss")) && getparamVal(_, "t"),
      "91" != t && "IN" != s)
    )
      return !1;
    (username = c.mb1),
      $("#check_verify1").attr("disabled", !0),
      $("#check_verify1").css("background-color", "lightgrey");
    l = "";
    if (
      ((updateUsing =
        1 == r
          ? ((l = "OTP_JoinFreeForm_Desktop"), "Join Free Form Desktop")
          : "BUYERMY" == d || "BUYERMY_NAV" == d
          ? ((l = "OTP_BuyerMYContactProfile_Desktop"),
            "BUYER MY CONTACT PROFILE PAGE")
          : "SELLER_DASHBOARD" == d
          ? ((l = "OTP_SellerMY_Desktop"), "SELLER MY DASHBOARD")
          : ((l = "OTP_SignInForm_Desktop"), "Sign IN Form Desktop")),
      2 < sendOTPCount && 1 != displayVerificationOptions)
    )
      return (
        $("#re_auth1, #resendMsg, #mwrp").css("display", "none"),
        $("#check_verify1").attr("disabled", !1),
        $("#verify_error1").html("Please Wait for the OTP"),
        $("#check_verify1").css("background-color", "#00a699"),
        1 == dispflag &&
          "IDEN" == d &&
          ((document.getElementById("resendA").style.display = "none"),
          (document.getElementById("resendMsg").style.display = "none")),
        !1
      );
    2 == a &&
      -1 == redirectURL.indexOf("autoLoginconflict") &&
      showmobverifyform(e, i, n, t, o, s, r, d, "081-8181-8181"),
      "1" == a &&
        (1 == r
          ? ("IDEN" == d
              ? yandex_impression(
                  "Identification_login_popup",
                  "Verification_resend_" + i
                )
              : yandex_impression(
                  gaFormIdentify,
                  1 == displayVerificationOptions
                    ? "NewUser_ResendOTP_Clicked_" + (sendOTPCount + 1)
                    : "NewUser_ResendOTP"
                ),
            (document.getElementById("resendMsg").style.display = "none"))
          : (3 != r && 4 != r) ||
            ("IDEN" == d
              ? yandex_impression(
                  "Identification_login_popup",
                  "Verification_resend" + i
                )
              : "VER" == d &&
                -1 != redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") &&
                "MY" == i
              ? yandex_impression(
                  "Verification_popup",
                  "Verification_resend_buyermy_" + i
                )
              : "VER" == d
              ? yandex_impression(
                  "Verification_popup",
                  "4" == p || "5" == p
                    ? "Verification_resend_5th_" + i
                    : "Verification_resend_3rd_" + i
                )
              : "EMAILVER" == d
              ? yandex_impression(
                  "Verification_popup",
                  "5" == p || "4" == p
                    ? "Verification_EMAIL_resend_5th_" + i
                    : "Verification_EMAIL_resend_3rd_" + i
                )
              : "SCROLLVER" == d
              ? yandex_impression(
                  "Verification_popup",
                  "Verification_scrollver_resend_" + i
                )
              : "BUYERMY" == d
              ? yandex_impression(
                  "Verification_popup",
                  "Verification_popup_Buyermy_Verification_MYcontact_resend_" +
                    i
                )
              : "HDR" == d
              ? yandex_impression(
                  "IM_Global_Header",
                  "Verification_resend_" + i
                )
              : "HDR_STRP" == d
              ? yandex_impression("IM_Header_Strip", "Verification_resend_" + i)
              : "BUYERMY_NAV" == d
              ? yandex_impression(
                  "Verification_popup",
                  "Verification_popup_Buyermy_Verification_MYNav_resend" + i
                )
              : yandex_impression(
                  gaFormIdentify,
                  1 == displayVerificationOptions
                    ? "ExistingUser_ResendOTP_Clicked_" + (sendOTPCount + 1)
                    : "ExistingUser_ResendOTP"
                ),
            (document.getElementById("resendMsg").style.display = "none")),
        1 != displayVerificationOptions &&
          (document.getElementById("load-send1").style.display =
            "inline-block"),
        $("#re_auth1").css("display", "none"),
        (document.getElementById("verify_error1").innerHTML = ""),
        sendOTPCount++);
    var g,
      y = c.phcc,
      _ = c.iso,
      p = c.em;
    "" == country_ip &&
      ((c = { modid: i, token: "imobile@15061981" }),
      $.ajax({
        type: "POST",
        dataType: "json",
        data: c,
        url: "https://geoip.imimg.com/api/location.php",
        crossDomain: !0,
        success: function (e) {
          (iso_by_ip = e.Response.Data.geoip_countryiso),
            (country_ip = e.Response.Data.geoip_ipaddress),
            (country_nm = e.Response.Data.geoip_countryname),
            "UK" == iso_by_ip && (iso_by_ip = "GB");
        },
      })),
      "" == country_ip && (country_ip = "35.184.248.141"),
      1 == a && "EMAILVER" == d
        ? send_otp_email(
            (g = {
              token: "imobile@15061981",
              glusrid: u,
              modid: i,
              user_mobile_country_code: y,
              flag: "OTPGen",
              user_ip: country_ip,
              user_country: _,
              process: "OTP_EmailVerificationForm_Desktop",
              user_updatedusing: "Verification Form Desktop",
              OTPResend: "1",
              attribute_id: o,
            }),
            a,
            p
          )
        : (g =
            1 == a
              ? {
                  token: "imobile@15061981",
                  mobile_num: m,
                  glusrid: u,
                  modid: i,
                  user_mobile_country_code: y,
                  flag: "OTPGen",
                  user_ip: country_ip,
                  user_country: _,
                  process: l,
                  user_updatedusing: updateUsing,
                  OTPResend: "1",
                }
              : {
                  token: "imobile@15061981",
                  mobile_num: m,
                  glusrid: u,
                  modid: i,
                  user_mobile_country_code: y,
                  flag: "OTPGen",
                  user_ip: country_ip,
                  user_country: _,
                  process: l,
                  user_updatedusing: updateUsing,
                }),
      "EMAILVER" != d
        ? $.ajax({
            type: "POST",
            url: "//" + UrlPri2 + "login.indiamart.com/users/OTPVerification/",
            data: g,
            dataType: "json",
            crossDomain: !0,
            success: function (e) {
              $("#check_verify1").attr("disabled", !1),
                $("#check_verify1").css("background-color", "#00a699");
              var i = e.Response.Status,
                t = e.Response.Message,
                o = e.Response.Code,
                e = e.Response.VENDOR_ERROR_RESPONSE;
              "We have already sent an OTP on your mobile" == t &&
                "Success" == i &&
                ("1" == a &&
                  $(".otp-message").html(
                    "We have already sent an OTP on <b>+91-" + n + "</b>"
                  ),
                1 == dispflag &&
                  "IDEN" == d &&
                  $(".otp-messages .italic").html(
                    "We have sent an One Time Password on your mobile <b>+91-" +
                      n +
                      "</b>"
                  )),
                "1" == a &&
                  ($(".otp-message").html(
                    "We have sent an One Time Password on your mobile <b>+91-" +
                      n +
                      "</b>"
                  ),
                  1 != displayVerificationOptions &&
                    (document.getElementById("load-send1").style.display =
                      "none"),
                  (document.getElementById("resendMsg").style.display =
                    "block"),
                  $("#verify_error1").hide(),
                  $("#re_auth1").css("display", "inline-block"),
                  1 == dispflag &&
                    "IDEN" == d &&
                    (document.getElementById("resendMsg").innerHTML =
                      "OTP SMS has been sent again."),
                  $("#main_div").css("width", "93%")),
                1 == displayVerificationOptions &&
                  "1" == a &&
                  ($("#mwrp").css("display", "none"),
                  null !== document.getElementById("resendMsg") &&
                    ((document.getElementById("resendMsg").innerHTML =
                      "OTP SMS sent"),
                    $("#resendMsg").css("display", "block"))),
                "204" == o &&
                  "Failure" == i &&
                  "" != e &&
                  ((document.getElementById("verify_error1").innerHTML = e),
                  $("#verify_error1").show(),
                  $("#resendMsg").hide(),
                  $("#tmrBL").css("visibility", "hidden"),
                  $("#mwrp").css("display", "block"));
            },
          })
        : (2 == a
            ? "EMAILVER" == d
              ? send_otp_email(
                  (g = {
                    token: "imobile@15061981",
                    glusrid: u,
                    modid: i,
                    user_mobile_country_code: y,
                    flag: "OTPGen",
                    user_ip: country_ip,
                    user_country: _,
                    process: "OTP_EmailVerificationForm_Desktop",
                    user_updatedusing: "Verification Form Desktop",
                    OTPResend: "1",
                    attribute_id: o,
                  }),
                  a,
                  p
                )
              : (g = {
                  token: "imobile@15061981",
                  mobile_num: m,
                  glusrid: u,
                  modid: i,
                  user_mobile_country_code: y,
                  flag: "OTPGen",
                  user_ip: country_ip,
                  user_country: _,
                  process: l,
                  user_updatedusing: updateUsing,
                  OTPResend: "1",
                })
            : (g = {
                token: "imobile@15061981",
                mobile_num: m,
                glusrid: u,
                modid: i,
                user_mobile_country_code: y,
                flag: "OTPGen",
                user_ip: country_ip,
                user_country: _,
                process: l,
                user_updatedusing: updateUsing,
              }),
          "EMAILVER" != d &&
            $.ajax({
              type: "POST",
              url:
                "//" + UrlPri2 + "login.indiamart.com/users/OTPVerification/",
              data: g,
              dataType: "json",
              crossDomain: !0,
              success: function (e) {
                $("#check_verify1").attr("disabled", !1),
                  $("#check_verify1").css("background-color", "#00a699");
                var i = e.Response.Status,
                  t = e.Response.Message,
                  o = e.Response.Code,
                  e = e.Response.VENDOR_ERROR_RESPONSE;
                "We have already sent an OTP on your mobile" == t &&
                  "Success" == i &&
                  ($(".otp-message").html(
                    "We have already sent an OTP on <b>+91-" + n + "</b>"
                  ),
                  1 == dispflag &&
                    "IDEN" == d &&
                    $(".otp-messages .italic").html(
                      "We have sent an One Time Password on your mobile <b>+91-" +
                        n +
                        "</b>"
                    )),
                  "1" == a &&
                    ($(".otp-message").html(
                      "We have sent an One Time Password on your mobile <b>+91-" +
                        n +
                        "</b>"
                    ),
                    1 != displayVerificationOptions &&
                      (document.getElementById("load-send1").style.display =
                        "none"),
                    (document.getElementById("resendMsg").style.display =
                      "block"),
                    $("#verify_error1").hide(),
                    $("#re_auth1").css("display", "inline-block"),
                    1 == dispflag &&
                      "IDEN" == d &&
                      (document.getElementById("resendMsg").innerHTML =
                        "OTP SMS has been sent again."),
                    $("#main_div").css("width", "93%")),
                  1 == displayVerificationOptions &&
                    "1" == a &&
                    ($("#mwrp").css("display", "none"),
                    null !== document.getElementById("resendMsg") &&
                      ((document.getElementById("resendMsg").innerHTML =
                        "OTP SMS sent"),
                      $("#resendMsg").css("display", "block"))),
                  "204" == o &&
                    "Failure" == i &&
                    "" != e &&
                    ((document.getElementById("verify_error1").innerHTML = e),
                    $("#verify_error1").show(),
                    $("#resendMsg").hide(),
                    $("#tmrBL").css("visibility", "hidden"),
                    $("#mwrp").css("display", "block"));
              },
            }));
  } else showmobverifyform(e, i, n, t, o, s, r, "TRUE", "");
}
function send_otp_email(e, t, o) {
  $.ajax({
    type: "POST",
    url: "//" + UrlPri2 + "login.indiamart.com/users/OTPVerification/",
    data: e,
    dataType: "json",
    crossDomain: !0,
    success: function (e) {
      $("#check_verify1").attr("disabled", !1),
        $("#check_verify1").css("background-color", "#00a699");
      var i = e.Response.Status;
      e.Response.Message;
      "Success" == i &&
        "1" == t &&
        ($(".otp-message").html(
          "Please check your email <b>" + o + "</b> for a 4 digit OTP"
        ),
        (document.getElementById("load-send1").style.display = "none"),
        (document.getElementById("resendMsg").style.display = "block"),
        $("#resendMsg").show(),
        $("#re_auth1").css("display", "block")),
        "Success" == i && "2" == t && $("#re_auth1").css("display", "block");
    },
  });
}
function movetoNext1(e, i) {
  e.value.length >= e.maxLength && document.getElementById(i).focus();
}
function movetoNextNewVerPOP(e, i, t, o) {
  (i.value.length >= i.maxLength && "" != t
    ? document.getElementById(t)
    : 8 == o.keyCode && "" != e
    ? document.getElementById(e)
    : i
  ).focus();
}
var missCallHits,
  truecallerHits,
  waitMessage,
  interval,
  seconds_left,
  xread = readCookie("xnHist"),
  ipv_val = "" != xread ? getparamVal(xread, "ipv") : "",
  fpv_val = "" != xread ? getparamVal(xread, "fpv") : "",
  displayVerificationOptions = 0,
  dispflag = 0;
function showmobverifyform(e, i, t, o, n, s, a, r, d) {
  var l,
    p,
    c = $("#srch1").val(),
    m = "",
    u = readCookie("xnHist"),
    g = "" != u ? getparamVal(u, "ipv") : "",
    y = "" != u ? getparamVal(u, "fpv") : "",
    u =
      "HDR_STRP" != r
        ? '<p class = "cm-msg" style = "text-align: center;color:#2e3192;font-size:22px;font-family:Open Sans,arial;margin-top:10px;margin-bottom:10px;">Get Connected to Verified Sellers</p>'
        : "";
  (step = 2),
    "VER" == r ||
    "BUYERMY" == r ||
    "BUYERMY_NAV" == r ||
    "HDR" == r ||
    "SELLER_DASHBOARD" == r ||
    "HDR_STRP" == r
      ? (l =
          "<style>.otp-mb10{margin-bottom:10px;margin-left:61px}.lkotp{color:#2e3192;cursor:pointer;text-decoration:none;margin-left:61px;}.step-1 h2{font-size: 24px!important}.otp-pl18{padding-left:82px!important;padding-top:12px;height: 41px}.otp-message{color:#2a2a2a;margin:20px 22px}.wrper-txt{padding:3px 18px 36px;color:#2a2a2a;text-align:left;font-family:Open Sans,arial}.resendMsg{padding-left:59px}</style>" +
          u +
          '<div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:93%;" id="main_div"><p class="otp-message" style="text-align: center;line-height:25px;width:350px;margin:0 auto;">Enter the 4 digit One Time Password (OTP) sent<br>to your Mobile Number <b>+91-' +
          t +
          '</b> via SMS </p><div class="vfn-code1 fs141 c31"><p class="otp-mb10" id = "testing" style="position:relative;" ><i class="mbl-otp"></i><input type="text" maxlength="4" class="nptotp" id="authKey" onkeypress="return isNumberKey1(event);" autocomplete="off"><input type="button"  id="check_verify1" class="vrfy-otp" alt="" value="Submit" onclick="verify_mobile(\'' +
          e +
          "','" +
          i +
          "','" +
          t +
          "','" +
          o +
          "','" +
          n +
          "','" +
          s +
          "','" +
          a +
          "','" +
          c +
          "','" +
          r +
          '\');"><img id="loadingImage" src="//utils.imimg.com/header/gifs/indicator.gif" width="16" height="16" style="display: none; position: absolute; top: 15px; left: 200px;" margin-left="10"><input type="hidden" value="2" id="step1" name="step1"><span class="verify_doneNew" id="after_verified" style="display:none">Verification done</span><span class="err-otp2" id="verify_error1"></span></p><p class="f11_s"><span id="resendMsg" class="resendMsg" style="display: none;">The SMS has been sent again.</span><span id="resendA">Did not recieve OTP? <span onclick="send_otp(\'' +
          e +
          "','" +
          i +
          "','" +
          t +
          "','" +
          o +
          "','" +
          n +
          "','" +
          s +
          "','1','" +
          a +
          "','" +
          r +
          '\');" class="lkotp" id="re_auth1">Resend</span></span><span id="load-send1" style="display: none;padding-left:60px;">Please wait &nbsp;&nbsp; <img width="10" height="10" border="0" alt="" src="//utils.imimg.com/header/gifs/indicator.gif" style="position:relative;top:-2px"></span></p><div class="ic-btm" style="height:0px;"><div class="im_logoN" style="right:35px;"></div></div></div></div>')
      : "IDEN" == r
      ? ((dispflag = 1),
        (l =
          '<div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:94%;margin-left:auto!important;margin-top:auto!important;" id="main_div"><p class="otp-messages Head"><b>Please enter 4 digit One Time Password</b> </p><p class="otp-messages italic">Sent via SMS on your mobile <b>+91-' +
          t +
          '</b></p><div class="vfn-code1 fs141 c31"><div class="otp-mb10" id="testing" style="position:relative;text-align: center;"><div class="otp-con" style="padding-left: 0px;"><input class="mobbox1 f1 border_black1" type="text" id="first" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'\',this, \'second\',event)" maxlength="1"><input class="mobbox1 f1 border_black1" type="text" id="second" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'first\',this, \'third\',event)" maxlength="1"><input class="mobbox1 f1 border_black1" type="text" id="third" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'second\',this, \'fourth\',event)" maxlength="1"><input class="mobbox1 f1 border_black1" type="text" id="fourth" maxlength="1" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'third\',this,\'\',event)" style="border: 0;" autocomplete="off"><input type="hidden" id="authKey" value=""></div><span class="err-otp2" id="verify_error1" style="text-align:center;"></span><input type="button" id="check_verify1" class="vrfy-otp" alt="" value="Submit" onclick="verify_mobile(\'' +
          e +
          "','" +
          i +
          "','" +
          t +
          "','" +
          o +
          "','" +
          n +
          "','" +
          s +
          "','" +
          a +
          "','" +
          c +
          "','" +
          r +
          '\');" style="background-color: rgb(0, 166, 153);"><img id="loadingImage" src="//utils.imimg.com/header/gifs/indicator.gif" width="16" height="16" style="display: none; position: absolute; bottom: 11px; right: 223px;"><input type="hidden" value="2" id="step1" name="step1"><span class="verify_doneNew" id="after_verified" style="display:none; ">Verification done</span></div><p class="f11_s" style="text-align: center;"><span id="resendMsg" class="resendMsg" style="display: none;">OTP SMS has been sent again.</span><span id="resendA"> Did not receive OTP? <span onclick="send_otp(\'' +
          e +
          "','" +
          i +
          "','" +
          t +
          "','" +
          o +
          "','" +
          n +
          "','" +
          s +
          "','1','" +
          a +
          "','" +
          r +
          '\');" class="lkotp" id="re_auth1">Resend</span></span><span id="load-send1" style="display: none;">Please wait &nbsp;&nbsp; <img width="10" height="10" border="0" alt="" src="//utils.imimg.com/header/gifs/indicator.gif" style="position:relative;top:-2px"></span></p><p class="c3 skip" style="display: none;"></p></div>'),
        $("#first").focus())
      : "EMAILVER" == r
      ? ((l =
          "<style>.otp-mb10{margin-bottom:10px;margin-left:61px}.lkotp{color:#2e3192;cursor:pointer;text-decoration:none;margin-left:61px;}.step-1 h2{font-size: 24px!important}.otp-pl18{padding-left:82px!important;padding-top:12px;height: 41px}.otp-message{color:#2a2a2a;margin:20px 22px}.wrper-txt{padding:3px 18px 36px;color:#2a2a2a;text-align:left;font-family:Open Sans,arial}.resendMsg{padding-left:59px}</style>" +
          u +
          '<div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:100%;padding: 0px 0px 36px;" id="main_div"><p class="otp-message" style="text-align: center;">Check your email <b>' +
          t +
          '</b> for a 4 digit OTP</p><div class="vfn-code1 fs141 c31"><div class="otp-mb10" id = "testing" style="position:relative;display:inline-block;" ><div class="otp-con" style="padding-left: 0px;"><img src="//' +
          UrlPri1 +
          'utils.imimg.com/header/gifs/emailSymbol.png" alt="Email OTP" class="eml-otp" style="padding-top: 3px;float:left;"><input class="mobbox1 f1 " type="text" id="first" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'\',this, \'second\',event)" maxlength="1"><input class="mobbox1 f1 " type="text" id="second" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'first\',this, \'third\',event)" maxlength="1"><input class="mobbox1 f1 " type="text" id="third" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'second\',this, \'fourth\',event)" maxlength="1"><input class="mobbox1 f1 " type="text" id="fourth" maxlength="1" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'third\',this,\'\',event)" style="" autocomplete="off"><input type="hidden" id="authKey" value=""></div></div><input type="button"  id="check_verify1" class="vrfy-otp" alt="" value="Submit" onclick="verify_email(\'' +
          e +
          "','" +
          i +
          "','" +
          t +
          "','" +
          o +
          "','" +
          n +
          "','" +
          s +
          "','" +
          a +
          "','" +
          c +
          "','" +
          r +
          '\');" style="margin-top:6px;"><img id="loadingImage" src="//utils.imimg.com/header/gifs/indicator.gif" width="16" height="16" style="display: none; position: absolute; top: 15px; left: 220px;" margin-left="10"><input type="hidden" value="2" id="step1" name="step1"><span class="verify_doneNew" id="after_verified" style="display:none;margin-left:160px;margin-top:0px;">Verification done</span><span class="err-otp2" id="verify_error1" style="margin-left:160px;"></span></p><p class="f11_s"><span id="resendMsg" class="resendMsg" style="display: none;">The OTP has been sent again.</span><span onclick="send_otp(\'' +
          e +
          "','" +
          i +
          "','" +
          t +
          "','" +
          o +
          "','" +
          n +
          "','" +
          s +
          "','1','" +
          a +
          "','" +
          r +
          '\');" class="lkotp" id="re_auth1" style="width:100px;">Resend OTP</span><span id="load-send1" style="display: none;padding-left:60px;">Please wait &nbsp;&nbsp; <img width="10" height="10" border="0" alt="" src="//utils.imimg.com/header/gifs/indicator.gif" style="position:relative;top:-2px"></span></p><div class="ic-btm" style="height:0px;"><div class="im_logoN" style="right:18px;"></div></div></div></div>'),
        $("#first").focus())
      : "SCROLLVER" == r
      ? (sessionStorage.setItem("clickToVerif", "1"),
        (l =
          "<style>.otp-mb10{margin-bottom:10px;margin-left:61px}.lkotp{color:#2e3192;cursor:pointer;text-decoration:none;margin-left:61px;}.step-1 h2{font-size: 24px!important}.otp-pl18{padding-left:82px!important;padding-top:12px;height: 41px}.otp-message{color:#2a2a2a;margin:20px 22px}.wrper-txt{padding:3px 18px 36px;color:#2a2a2a;text-align:left;font-family:Open Sans,arial}.resendMsg{padding-left:59px}</style>" +
          u +
          '<div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:93%;" id="main_div"><p class="otp-message">Enter the 4 digit One Time Password (OTP) sent<br>to your Mobile Number <b>+91-' +
          t +
          '</b> via SMS </p><div class="vfn-code1 fs141 c31"><p class="otp-mb10" id = "testing" style="position:relative;" ><i class="mbl-otp"></i><input type="text" maxlength="4" onkeypress="return isNumberKey1(event);" class="nptotp" id="authKey"><input type="button"  id="check_verify1" class="vrfy-otp" alt="" value="Submit" onclick="verify_mobile(\'' +
          e +
          "','" +
          i +
          "','" +
          t +
          "','" +
          o +
          "','" +
          n +
          "','" +
          s +
          "','" +
          a +
          "','" +
          c +
          "','" +
          r +
          '\');"><img id="loadingImage" src="//utils.imimg.com/header/gifs/indicator.gif" width="16" height="16" style="display: none; position: absolute; top: 15px; left: 200px;" margin-left="10"><input type="hidden" value="2" id="step1" name="step1"><span class="verify_doneNew" id="after_verified" style="display:none">Verification done</span><span class="err-otp2" id="verify_error1"></span></p><p class="f11_s"><span id="resendMsg" class="resendMsg" style="display: none;">The SMS has been sent again.</span><span id="resendA">Did not recieve OTP? <span onclick="send_otp(\'' +
          e +
          "','" +
          i +
          "','" +
          t +
          "','" +
          o +
          "','" +
          n +
          "','" +
          s +
          "','1','" +
          a +
          "','" +
          r +
          '\');" class="lkotp" id="re_auth1">Resend</span></span><span id="load-send1" style="display: none;padding-left:60px;">Please wait &nbsp;&nbsp; <img width="10" height="10" border="0" alt="" src="//utils.imimg.com/header/gifs/indicator.gif" style="position:relative;top:-2px"></span></p><div class="ic-btm" style="height:0px;"><div class="im_logoN" style="right:35px;"></div></div></div></div>'))
      : "SCROLLVER1" == r
      ? (sessionStorage.setItem("scrolldisplay", "1"),
        (l =
          "<style>.otp-mb10{margin-bottom:10px;margin-left:61px}.lkotp{color:#2e3192;cursor:pointer;text-decoration:none;margin-left:61px;}.step-1 h2{font-size: 24px!important}.otp-pl18{padding-left:82px!important;padding-top:12px;height: 41px}.wrper-txt{padding:3px 18px 36px;color:#2a2a2a;text-align:left;font-family:Open Sans,arial}</style>" +
          u +
          '<div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:97%;" id="main_div"><div class="vfn-code1 fs141 c31"><p class="otp-mb10" id = "testing" style="position:relative;" ><input type="button"  id="check_verify1" class="vrfy-otp" alt="" value="Click here to Verify" onclick="send_otp(\'' +
          e +
          "','" +
          i +
          "','" +
          t +
          "','" +
          o +
          "','" +
          n +
          "','" +
          s +
          "','2','" +
          a +
          '\',\'SCROLLVER\');" style="width:248px;margin-left:36px;" ></p><div class="ic-btm" style="height:0px;"><div class="im_logoN" style="right:35px;"></div></div></div></div>'))
      : ((l =
          '<div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:93%;margin-left:auto!important;margin-top:auto!important;padding-top:15px;" id="main_div"><p class="otp-message" id="otp-message">4 digit One Time Password SMS sent on your mobile <b>+91-' +
          t +
          '</b></p><div class="vfn-code1 fs141 c31"><p class="otp-mb10 tc" style="height:60px;position: relative;margin-bottom:0px;" id = "testing"><span class="icLg"><i class="mbl-otp"></i></span><input type="text" maxlength="4" class="nptotp vttxt" onkeypress="return isNumberKey1(event);" autocomplete="off" id="authKey"><input type="button"  id="check_verify1" class="vrfy-otp" style="padding:10px 0 10px 0" alt="" value="Submit" onclick="verify_mobile(\'' +
          e +
          "','" +
          i +
          "','" +
          t +
          "','" +
          o +
          "','" +
          n +
          "','" +
          s +
          "','" +
          a +
          "','" +
          c +
          "','" +
          r +
          '\');"><span class="tmrBL" id="tmrBL"><b>00:10</b></span><img id="loadingImage" src="//utils.imimg.com/header/gifs/indicator.gif" width="16" height="16" style="display: none;position: absolute;top: 18px;right: 102px;"><input type="hidden" value="2" id="step1" name="step1"><span class="verify_doneNew" id="after_verified" style="display:none">Verification done</span><span class="err-otp2" style="text-align:center;" id="verify_error1"></span></p><p class="f11_s tc"><span id="resendMsg" class="resendMsg" style="display: none;">OTP SMS sent</span></p><div class="mwrp" id="mwrp" style="margin-bottom: -15px;"><p class="mstxt"><span class="smLg" onclick="send_otp(\'' +
          e +
          "','" +
          i +
          "','" +
          t +
          "','" +
          o +
          "','" +
          n +
          "','" +
          s +
          "','1','" +
          a +
          "','" +
          r +
          '\');" class="lkotp" id="re_auth1">Resend SMS</span><span class="smLnum" style="width:260px;line-height:32px;margin-left:12px;">Give a missed call on  <span class="msnbr">' +
          d +
          '</span></span></p><p class="mnxt" id="mnxt1" style="color:#2e3192;"></p></div><p class="c3 skip" style="display: none;"></p></div></div>'),
        (displayVerificationOptions = 1)),
    3 == a || 4 == a
      ? "IDEN" == r
        ? yandex_impression(
            "Identification_login_popup",
            "Verification_display_" + i
          )
        : "VER" == r &&
          -1 != redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") &&
          "MY" == i
        ? yandex_impression(
            "Verification_popup",
            "Verification_display_buyermy_" + i
          )
        : "VER" == r
        ? yandex_impression(
            "Verification_popup",
            "4" == g || "5" == g
              ? "Verification_display_5th_" + i
              : "Verification_display_3rd_" + i
          )
        : "EMAILVER" == r
        ? yandex_impression(
            "Verification_popup",
            "5" == y || "4" == y
              ? "Verification_EMAIL_display_5th_" + i
              : "Verification_EMAIL_display_3rd_" + i
          )
        : "SCROLLVER1" == r
        ? yandex_impression(
            "Verification_popup",
            "Verification_scroll_display_" + i
          )
        : "SCROLLVER" == r
        ? yandex_impression(
            "Verification_popup",
            "Verification_scrollver_display_" + i
          )
        : "BUYERMY" == r
        ? yandex_impression(
            "Verification_popup",
            "Verification_popup_Buyermy_VVerification_MYcontact_display_" + i
          )
        : "BUYERMY_NAV" == r
        ? yandex_impression(
            "Verification_popup",
            "Verification_popup_Buyermy_Verification_MYNav_display_" + i
          )
        : "HDR" == r
        ? yandex_impression("IM_Global_Header", "Verification_display_" + i)
        : "HDR_STRP" == r
        ? yandex_impression("IM_Header_Strip", "Verification_display_" + i)
        : (yandex_impression(gaFormIdentify, "ExistingUser_VerificationForm"),
          (m = document.URL))
      : "IDEN" == r
      ? yandex_impression(
          "Identification_login_popup",
          "Verification_display_" + i
        )
      : (yandex_impression(gaFormIdentify, "NewUser_VerificationForm"),
        (m = "//" + UrlPri + "my.indiamart.com")),
    (m = m.replace(/[#]+$/, "")),
    1 == dispflag && "IDEN" == r
      ? (p =
          '\x3c!-- contact us form --\x3e<div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1 new_vrf"><div class="step-1" id="bs_hdng1"><span class="close_imlogin" id="close_s" onclick="closeMe1(\'' +
          r +
          '\');">X</span><h2 class="f1_s otp-pl18">Verify Your Mobile Number<span>for a better and secure experience</span></h2><span class="mob_icon_login"></span></div><div>' +
          l +
          "</div></div>\x3c!-- Popup div ends here --\x3e")
      : "VER" == r &&
        -1 != redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") &&
        "MY" == i
      ? (p =
          '\x3c!-- contact us form --\x3e<div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\'' +
          r +
          '\');"><img src="//' +
          UrlPri +
          'utils.imimg.com/header/gifs/3.png" id="close_s"/></a><h2 class="f1_s otp-pl18">Verify Your Mobile Number</h2></div><div>' +
          l +
          "</div></div>\x3c!-- Popup div ends here --\x3e")
      : ("VER" == r && "4" == g) || ("VER" == r && "5" == g)
      ? (p =
          '\x3c!-- contact us form --\x3e<div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\'' +
          r +
          '\');" style="display:none;"><img src="//' +
          UrlPri +
          'utils.imimg.com/header/gifs/3.png" id="close_s" style="display:none;"/></a><h2 class="f1_s otp-pl18">Verify Your Mobile Number</h2></div><div>' +
          l +
          "</div></div>\x3c!-- Popup div ends here --\x3e")
      : "EMAILVER" == r
      ? void 0 !== (g = readCookie("im_iss")) && "" != g
        ? 5 == fpv
          ? (p =
              '\x3c!-- contact us form --\x3e<div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\'' +
              r +
              '\');" style="display:none;"><img src="//' +
              UrlPri +
              'utils.imimg.com/header/gifs/3.png" id="close_s" style="display:none;"/></a><h2 class="f1_s" style="padding-top:12px;height: 30px;padding-left:117px;">Verify Your Email ID</h2></div><div>' +
              l +
              "</div></div>\x3c!-- Popup div ends here --\x3e")
          : 3 == fpv &&
            (p =
              '\x3c!-- contact us form --\x3e<div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\'' +
              r +
              '\');" style="display:block;"><img src="//' +
              UrlPri +
              'utils.imimg.com/header/gifs/3.png" id="close_s"/></a><h2 class="f1_s" style="padding-top:12px;height: 30px;padding-left:117px;">Verify Your Email ID</h2></div><div>' +
              l +
              "</div></div>\x3c!-- Popup div ends here --\x3e")
        : (void 0 !== g && "" != g) ||
          (5 == ipv
            ? (p =
                '\x3c!-- contact us form --\x3e<div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\'' +
                r +
                '\');" style="display:none;"><img src="//' +
                UrlPri +
                'utils.imimg.com/header/gifs/3.png" id="close_s" style="display:none;"/></a><h2 class="f1_s" style="padding-top:12px;height: 30px;padding-left:117px;">Verify Your Email ID</h2><div><div>' +
                l +
                "</div></div>\x3c!-- Popup div ends here --\x3e")
            : 3 == ipv &&
              (p =
                '\x3c!-- contact us form --\x3e<div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\'' +
                r +
                '\');" style="display:block;"><img src="//' +
                UrlPri +
                'utils.imimg.com/header/gifs/3.png" id="close_s"/></a><h2 class="f1_s" style="padding-top:12px;height: 30px;padding-left:117px;">Verify Your Email ID</h2></div><div>' +
                l +
                "</div></div>\x3c!-- Popup div ends here --\x3e"))
      : (p =
          '\x3c!-- contact us form --\x3e<div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1"><a href="javascript:" onclick="closeMe1(\'' +
          r +
          '\');"style="display: block;"><img src="//' +
          UrlPri +
          'utils.imimg.com/header/gifs/3.png" id="close_s"/></a><h2 class="f1_s otp-pl18">Verify Your Mobile Number</h2></div><div>' +
          l +
          "</div></div>\x3c!-- Popup div ends here --\x3e"),
    "VER" == r ||
    "BUYERMY" == r ||
    "BUYERMY_NAV" == r ||
    "HDR" == r ||
    "SELLER_DASHBOARD" == r ||
    "HDR_STRP" == r ||
    "EMAILVER" == r ||
    "SCROLLVER" == r ||
    "SCROLLVER1" == r
      ? ($("#IdentifiedPopUpHTML").html(p),
        $("#overlay_s").css("display", "block"),
        $("#IdentifiedPopUpHTML").css({
          display: "block",
          position: "fixed",
          top: "200px",
          left: "50%",
          "z-index": "1001",
          "margin-left": "-247px",
        }))
      : ((document.getElementById("popupContact_s").innerHTML = p),
        (document.getElementById("popupContact_s").style.display = "block")),
    "" == $("#authKey").val() &&
      1 == dispflag &&
      "IDEN" == r &&
      $("#authKey").val(
        $("#first").val() +
          $("#second").val() +
          $("#third").val() +
          $("#fourth").val()
      ),
    $("#authKey").focus();
}
function verify_email(e, o, t, n, s, a, r, d, l) {
  var p = new userDataCookie().get(),
    c = (p.mb1, p.em),
    m = (p.ev, p.uv, readCookie("xnHist")),
    u = "" != m ? getparamVal(m, "fpv") : "";
  (t && c) ||
    ((g = o + "_" + t + "_" + c),
    _gaq.push([
      "_trackEvent",
      gaFormIdentify,
      "emailTrackingInVerify",
      g,
      0,
      !0,
    ])),
    $("#re_auth1").css("display", "none"),
    (document.getElementById("check_verify1").style.visibility = "hidden"),
    (document.getElementById("check_verify1").style.cursor = "wait"),
    (document.getElementById("loadingImage").style.display = "inline-block"),
    $("#verify_error1,#mnxt1").hide(),
    $("#check_verify1").addClass("load_s"),
    $("#resendMsg").css("display", "none");
  (t = ""), (c = "");
  (1 != r && 3 != r && 4 != r) ||
    ("EMAILVER" == l &&
      ((c = "OTP_SignInForm_Desktop"),
      (updateUsing = "Verification Form Desktop"),
      (t =
        5 == u || 4 == u
          ? (yandex_impression(
              "Verification_popup",
              "Verification_Email_click_5th_" + o
            ),
            "EMAIL VERIFICATION VIA DESKTOP ON 5PV")
          : (yandex_impression(
              "Verification_popup",
              "Verification_Email_click_3rd_" + o
            ),
            "EMAIL VERIFICATION VIA DESKTOP ON 3PV"))));
  var g,
    y = document.getElementsByClassName("mobbox1 f1 ");
  for (auth_key = "", auth = new Array(), i = 0; i < y.length; i++)
    (auth[i] = y[i].value), (auth_key += auth[i]);
  return (
    (auth_key = auth_key.replace(/^\s+|\s+$/g, "")),
    /\d{4}/.test(auth_key)
      ? 5 < LoginwithOTPcount
        ? ($("#re_auth1").css("display", "inline-none"),
          $("#verify_error1").html(
            "Oops ! You have reached OTP limit, please try after sometime."
          ),
          otpmsg(),
          void clearTimeout(waitMessage))
        : ((void 0 !== country_ip && "" != country_ip) ||
            ("undefined" != (g = readCookie("iploc")) &&
              "" != g &&
              ((country_ip = getparamVal(g, "gip")),
              (iploc_country_name = getparamVal(g, "gcnnm")))),
          (params = {
            token: "imobile@15061981",
            modid: o,
            user_mobile_country_code: n,
            flag: "OTPVer",
            user_ip: country_ip,
            user_country: p.iso,
            country_name: iploc_country_name,
            auth_key: auth_key,
            glusrid: e,
            verify_process: "Email",
            attribute_id: s,
            verify_screen: t,
            process: c,
          }),
          void $.ajax({
            type: "POST",
            dataType: "json",
            crossDomain: !0,
            url: "//" + UrlPri2 + "login.indiamart.com/users/OTPVerification/",
            data: params,
            success: function (e) {
              var i = e.Response.Status,
                t = e.Response.Message,
                e = e.Response.Error;
              if ("Failure" == i || t.match("OTP not Verified"))
                return (
                  $("#mwrp").css("display", "block"),
                  (document.getElementById("authKey").value = ""),
                  (document.getElementById("check_verify1").style.visibility =
                    "visible"),
                  (document.getElementById("check_verify1").style.cursor =
                    "pointer"),
                  (document.getElementById("loadingImage").style.display =
                    "none"),
                  $("#verify_error1").show(),
                  $("#check_verify1").removeClass("load_s"),
                  $("#resendMsg").css("display", "none"),
                  (2 < sendOTPCount && 1 != displayVerificationOptions) ||
                    $("#re_auth1").css("display", "inline-block"),
                  e.match("Pending OTP record not found")
                    ? $("#verify_error1").html(
                        "Your OTP has expired. Please click on Resend for new OTP."
                      )
                    : $("#verify_error1").html("Please enter correct OTP"),
                  LoginwithOTPcount++,
                  !1
                );
              "" != t &&
                t.match("Email Verified") &&
                ((document.getElementById("check_verify1").style.cursor =
                  "pointer"),
                (document.getElementById("loadingImage").style.display =
                  "none"),
                $("#verify_error1").html(""),
                $("#mnxt1").hide(),
                $("#after_verified").css("display", "inline-block"),
                (3 != r && 4 != r) ||
                  ("EMAILVER" == l &&
                    yandex_impression(
                      "Verification_popup",
                      4 == u || 5 == u
                        ? "Verification_email_success_5th_" + o
                        : "Verification_email_success_3rd_" + o
                    ),
                  "undefined" != typeof isBLFormOpen && callToIdentifiedQ(),
                  setTimeout(function () {
                    closeMe1(l);
                  }, 1e3),
                  (e = ""),
                  (t = readCookie("ImeshVisitor")).indexOf("ev") &&
                    (((e = strToObj(t)).ev = "V"), imesh_obj.set(e))));
            },
            error: function (e, i, t) {
              console.log("Error");
            },
          }))
      : ((document.getElementById("authKey").value = ""),
        $("#check_verify1").removeClass("load_s"),
        (document.getElementById("check_verify1").style.visibility = "visible"),
        (document.getElementById("check_verify1").style.cursor = "pointer"),
        (document.getElementById("loadingImage").style.display = "none"),
        $("#resendMsg").css("display", "none"),
        $("#verify_error1").html("Please enter 4-digit OTP"),
        $("#verify_error1").show(),
        (2 < sendOTPCount && 1 != displayVerificationOptions) ||
          $("#re_auth1").css("display", "block"),
        !1)
  );
}
function verify_mobile(e, n, i, t, o, s, a, r, d) {
  (verifytype = 2),
    (seconds_left = 0),
    null !== document.getElementById("tmrBL") &&
      (document.getElementById("tmrBL").innerHTML = "<b>00:15</b>"),
    $("#tmrBL").css("visibility", "hidden"),
    $("#mwrp").css("display", "none");
  var l = readCookie("xnHist"),
    p = "" != l ? getparamVal(l, "ipv") : "",
    c = new userDataCookie().get(),
    l = c.mb1,
    m = c.em,
    u = c.ev;
  (i && l) ||
    ((g = n + "_" + i + "_" + l),
    _gaq.push([
      "_trackEvent",
      gaFormIdentify,
      "mobileTrackingInVerify",
      g,
      0,
      !0,
    ])),
    $("#re_auth1").css("display", "none"),
    $("#resendA").css("display", "none"),
    (document.getElementById("check_verify1").style.visibility = "hidden"),
    (document.getElementById("check_verify1").style.cursor = "wait"),
    (document.getElementById("loadingImage").style.display = "inline-block"),
    $("#verify_error1,#mnxt1").hide(),
    $("#check_verify1").addClass("load_s"),
    $("#resendMsg").css("display", "none");
  (c = ""), (i = "");
  if (
    ((updateUsing =
      1 == a
        ? ((i = "OTP_JoinFreeForm_Desktop"), "Join Free Form Desktop")
        : "BUYERMY" == d || "BUYERMY_NAV" == d
        ? ((i = "OTP_BuyerMYContactProfile_Desktop"),
          "BUYER MY CONTACT PROFILE PAGE")
        : "SELLER_DASHBOARD" == d
        ? ((i = "OTP_SellerMY_Desktop"), "SELLER MY DASHBOARD")
        : ((i = "OTP_SignInForm_Desktop"), "Sign IN Form Desktop")),
    1 == a
      ? "IDEN" == d
        ? (yandex_impression(
            "Identification_login_popup",
            "Verification_click_" + n
          ),
          (c = "VERIFICATION VIA DESKTOP IDENTIFICATION POPUP"))
        : 1 == displayVerificationOptions
        ? null !== document.getElementById("otp-message") &&
          (document
            .getElementById("otp-message")
            .innerHTML.includes("You will soon receive a call with OTP")
            ? ((c = "VERIFICATION VIA OTP_ON_CALL ON DESKTOP"),
              gATracking("NewUser_VerificationAttempt_Via_OTPOnCall"))
            : ((c = "VERIFICATION FROM JOINFREE DESKTOP POPUP"),
              gATracking("NewUser_VerificationAttempt")))
        : ((c = "VERIFICATION FROM JOINFREE DESKTOP POPUP"),
          gATracking("NewUser_VerificationAttempt"))
      : (3 != a && 4 != a) ||
        ("IDEN" == d
          ? (yandex_impression(
              "Identification_login_popup",
              "Verification_click_" + n
            ),
            (c = "VERIFICATION VIA DESKTOP IDENTIFICATION POPUP"))
          : "BUYERMY" == d || "BUYERMY_NAV" == d
          ? (c = "Buyer ContactDetails Verification Popup")
          : "SELLER_DASHBOARD" == d
          ? (c = "VERIFICATION VIA SELLER DASHBOARD POPUP")
          : "VER" == d &&
            -1 != redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") &&
            "MY" == n
          ? (yandex_impression(
              "Verification_popup",
              "Verification_click_buyermy_" + n
            ),
            (c = "VERIFICATION VIA NEW REGISTRATION MAILER ON BUYER MY"),
            (i = "ONLINE"))
          : "VER" == d
          ? (c =
              4 == p || 5 == p
                ? (yandex_impression(
                    "Verification_popup",
                    "Verification_click_5th_" + n
                  ),
                  "VERIFICATION VIA DESKTOP ON 5PV")
                : (yandex_impression(
                    "Verification_popup",
                    "Verification_click_3rd_" + n
                  ),
                  "VERIFICATION VIA DESKTOP ON 3PV"))
          : "SCROLLVER" == d
          ? (yandex_impression(
              "Verification_popup",
              "Verification_scrollver_click_" + n
            ),
            (c = "VERIFICATION VIA DESKTOP SCROLLBASED"))
          : "HDR" == d
          ? (yandex_impression("IM_Global_Header", "Verification_click_" + n),
            (c = "VERIFICATION FROM SIGNIN DESKTOP POPUP"))
          : "HDR_STRP" == d
          ? (yandex_impression("IM_Header_Strip", "Verification_click_" + n),
            (c = "VERIFICATION FROM IM_HEADER STRIP"))
          : 1 == displayVerificationOptions
          ? null !== document.getElementById("otp-message") &&
            (document
              .getElementById("otp-message")
              .innerHTML.includes("You will soon receive a call with OTP")
              ? (c = "VERIFICATION VIA OTP_ON_CALL ON DESKTOP")
              : ((c = "VERIFICATION FROM SIGNIN DESKTOP POPUP"),
                yandex_impression(
                  gaFormIdentify,
                  "ExistingUser_VerificationAttempt"
                )))
          : ((c = "VERIFICATION FROM SIGNIN DESKTOP POPUP"),
            yandex_impression(
              gaFormIdentify,
              "ExistingUser_VerificationAttempt"
            ))),
    "" == $("#authKey").val() &&
      1 == dispflag &&
      "IDEN" == d &&
      $("#authKey").val(
        $("#first").val() +
          $("#second").val() +
          $("#third").val() +
          $("#fourth").val()
      ),
    !/\d{4}/.test($("#authKey").val()))
  )
    return (
      $("#verify_error1").html("Please enter 4-digit OTP"),
      $("#re_auth1").css("display", "inline-block"),
      $("#resendA").css("display", "inline-block"),
      1 == dispflag &&
        "IDEN" == d &&
        ((document.getElementById("first").value = ""),
        (document.getElementById("second").value = ""),
        (document.getElementById("third").value = ""),
        (document.getElementById("fourth").value = ""),
        $("#first").focus()),
      6 < otpPlusOTPOnCallCount ? $("#mwrp").css("display", "none") : otpmsg(),
      !1
    );
  if (5 < LoginwithOTPcount)
    return (
      $("#re_auth1").css("display", "inline-none"),
      $("#verify_error1").html(
        "Oops ! You have reached OTP limit, please try after sometime."
      ),
      otpmsg(),
      void clearTimeout(waitMessage)
    );
  "" == $("#authKey").val() &&
    1 == dispflag &&
    "IDEN" == d &&
    $("#authKey").val(
      $("#first").val() +
        $("#second").val() +
        $("#third").val() +
        $("#fourth").val()
    );
  var g;
  $("#authKey").val();
  (void 0 !== country_ip && "" != country_ip) ||
    ("undefined" != (g = readCookie("iploc")) &&
      "" != g &&
      ((country_ip = getparamVal(g, "gip")),
      (iploc_country_name = getparamVal(g, "gcnnm"))));
  i = {
    token: "imobile@15061981",
    mobile_num: l,
    modid: n,
    user_mobile_country_code: t,
    flag: "OTPVer",
    user_ip: country_ip,
    country_name: iploc_country_name,
    auth_key: $("#authKey").val(),
    glusrid: e,
    verify_process: "ONLINE",
    verify_screen: c,
    process: i,
  };
  $.ajax({
    type: "POST",
    dataType: "json",
    crossDomain: !0,
    url: "//" + UrlPri2 + "login.indiamart.com/users/OTPVerification/",
    data: i,
    success: function (e) {
      var i = e.Response.Status,
        t = e.Response.Message,
        o = e.Response.Error;
      if (
        ("Failure" == i ||
          t.match("OTP not Verified") ||
          t.match("Mobile Number not Verified")) &&
        1 == dispflag &&
        "IDEN" == d
      )
        $("#re_auth1").css("display", "inline-block"),
          $("#resendA").css("display", "inline-block"),
          o.match("Pending OTP record not found")
            ? $("#verify_error1").html(
                "Your OTP has expired. Please click on Resend for new OTP."
              )
            : $("#verify_error1").html("Please enter correct OTP"),
          1 == dispflag &&
            "IDEN" == d &&
            ((document.getElementById("first").value = ""),
            (document.getElementById("second").value = ""),
            (document.getElementById("third").value = ""),
            (document.getElementById("fourth").value = ""),
            $("#first").focus()),
          LoginwithOTPcount++,
          6 < otpPlusOTPOnCallCount
            ? $("#mwrp").css("display", "none")
            : otpmsg();
      else if (
        "Failure" == i ||
        t.match("OTP not Verified") ||
        t.match("Mobile Number not Verified")
      )
        $("#re_auth1").css("display", "inline-block"),
          $("#resendA").css("display", "inline-block"),
          o.match("Pending OTP record not found")
            ? $("#verify_error1").html(
                "Your OTP has expired. Please click on Resend for new OTP."
              )
            : $("#verify_error1").html("Please enter correct OTP"),
          LoginwithOTPcount++,
          6 < otpPlusOTPOnCallCount
            ? $("#mwrp").css("display", "none")
            : otpmsg();
      else if ("" != t && t.match("Mobile Number Verified")) {
        (o = e.Response.LOGIN_DATA.DataCookie),
          (t = e.Response.LOGIN_DATA.LoginCookie),
          (e = e.Response.LOGIN_DATA.im_iss);
        if (
          (imesh_obj.set(o, "ImeshVisitor"),
          v4iilex_obj.set(t, "v4iilex"),
          im_iss_obj.set(e, "im_iss"),
          (document.getElementById("check_verify1").style.cursor = "pointer"),
          (document.getElementById("loadingImage").style.display = "none"),
          $("#verify_error1").html(""),
          $("#mnxt1").hide(),
          1 == dispflag && "IDEN" == d
            ? $("#after_verified").css("display", "block")
            : $("#after_verified").css("display", "inline-block"),
          "1" == a)
        ) {
          if (
            (setCookieUv1(),
            "undefined" != typeof isBLFormOpen && callToIdentifiedQ(),
            "IDEN" == d && 1 == dispflag)
          )
            yandex_impression(
              "Identification_login_popup",
              "Verification_success_" + n
            ),
              (globalVariable =
                "" == m && ("DIR" == n || "PRODDTL" == n || "IMHOME" == n)
                  ? { example_attribute: "100" }
                  : { example_attribute: "1" }),
              callidentifiedJ();
          else {
            if (
              "VER" == d &&
              -1 != redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") &&
              "MY" == n
            )
              return (
                yandex_impression(
                  "Verification_popup",
                  "Verification_success_buyermy_" + n
                ),
                callidentifiedJ(),
                (window.location = "//my.indiamart.com"),
                !0
              );
            "VER" == d
              ? (yandex_impression(
                  "Verification_popup",
                  4 == p || 5 == p
                    ? "Verification_success_5th_" + n
                    : "Verification_success_3rd_" + n
                ),
                (globalVariable = { example_attribute: "0" }),
                callidentifiedJ())
              : 1 == displayVerificationOptions
              ? null !== document.getElementById("otp-message") &&
                (document
                  .getElementById("otp-message")
                  .innerHTML.includes("You will soon receive a call with OTP")
                  ? yandex_impression(
                      gaFormIdentify,
                      "Verified_From_OTP_On_Call_" + n
                    )
                  : yandex_impression(
                      gaFormIdentify,
                      "Verified_From_OTP_On_SMS_" + n
                    ))
              : yandex_impression(
                  gaFormIdentify,
                  "NewUser_VerificationSuccessful"
                );
          }
          return (
            setTimeout(function () {
              closeMe1(d);
            }, 1e3),
            !0
          );
        }
        if (3 == a || 4 == a) {
          if ("IDEN" == d)
            yandex_impression(
              "Identification_login_popup",
              "Verification_success_" + n
            );
          else {
            if (
              "VER" == d &&
              -1 != redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") &&
              "MY" == n
            )
              return (
                yandex_impression(
                  "Verification_popup",
                  "Verification_success_buyermy_" + n
                ),
                (window.location = "//my.indiamart.com"),
                !0
              );
            "VER" == d
              ? yandex_impression(
                  "Verification_popup",
                  4 == p || 5 == p
                    ? "Verification_success_5th_" + n
                    : "Verification_success_3rd_" + n
                )
              : "SCROLLVER" == d
              ? yandex_impression(
                  "Verification_popup",
                  "Verification_scrollver_success_" + n
                )
              : "HDR" == d
              ? yandex_impression(
                  "IM_Global_Header",
                  "Verification_success" + n
                )
              : "HDR_STRP" == d
              ? yandex_impression("IM_Header_Strip", "Verification_success" + n)
              : "BUYERMY" == d
              ? yandex_impression(
                  "Verification_popup",
                  "Verification_popup_Buyermy_Verification_MYcontact_success_" +
                    n
                )
              : "BUYERMY_NAV" == d
              ? yandex_impression(
                  "Verification_popup",
                  "Verification_popup_Buyermy_Verification_MYNav_success_" + n
                )
              : 1 == displayVerificationOptions
              ? null !== document.getElementById("otp-message") &&
                (document
                  .getElementById("otp-message")
                  .innerHTML.includes("You will soon receive a call with OTP")
                  ? yandex_impression(
                      gaFormIdentify,
                      "Verified_From_OTP_On_Call_" + n
                    )
                  : yandex_impression(
                      gaFormIdentify,
                      "Verified_From_OTP_On_SMS_" + n
                    ))
              : yandex_impression(
                  gaFormIdentify,
                  "ExistingUser_VerificationSuccessful"
                );
          }
          if (
            ("undefined" != typeof isBLFormOpen && callToIdentifiedQ(),
            "IDEN" == d)
          )
            return (
              (globalVariable =
                "" != m
                  ? { example_attribute: "1" }
                  : { example_attribute: "100" }),
              void callidentifiedJ()
            );
          "VER" == d &&
            ((globalVariable = { example_attribute: "0" }), callidentifiedJ()),
            "HDR_STRP" != d || "" == m || "V" == u
              ? "BUYERMY" == d || "BUYERMY_NAV" == d
                ? window.location.reload()
                : setTimeout(function () {
                    closeMe1(d);
                  }, 1e3)
              : thankyou_popup(n, a, r, d);
        }
      }
    },
    error: function (e, i, t) {},
  });
}
function send_email(e, i, t, o, n, s, a) {
  (http_request = !1),
    (cDflag = 3),
    (sfFlag = ""),
    "HDR_STRP" == i &&
      yandex_impression("IM Header Strip", "Email_Verification_Clicked_" + a);
  var r = Math.random(),
    n =
      "//" +
      UrlPri +
      "my.indiamart.com/userprofile/contactprofile/verification/?action=email_verification&type=" +
      e +
      "&sid=" +
      r +
      "&email=" +
      s +
      "&first_name=" +
      t +
      "&glusrId=" +
      o +
      "&mobile=" +
      n;
  if (window.XMLHttpRequest) http_request = new XMLHttpRequest();
  else if (window.ActiveXObject)
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  return (
    http_request.open("GET", n, !0),
    http_request.send(null),
    thankyou_popup(a, cDflag, sfFlag, i),
    http_request.responseText
  );
}
function otpmsg() {
  return (
    $("#mwrp").css("display", "block"),
    (document.getElementById("authKey").value = ""),
    (document.getElementById("check_verify1").style.visibility = "visible"),
    (document.getElementById("check_verify1").style.cursor = "pointer"),
    (document.getElementById("loadingImage").style.display = "none"),
    $("#verify_error1").show(),
    $("#check_verify1").removeClass("load_s"),
    $("#resendMsg").html(""),
    !1
  );
}
function setCookieUv1() {
  var e,
    i = readCookie("ImeshVisitor"),
    t = "";
  0 < i.length &&
    ((offset = i.indexOf("uv")),
    -1 != offset
      ? ((t = strToObj(i)).uv = "V")
      : ((e = i.charAt(i.length - 1)),
        (i += "|" == e ? "uv=V" : "|uv=V"),
        (t = strToObj(i))),
    imesh_obj.set(t));
}
function gATracking(e) {
  _gaq.push(["_trackEvent", gaFormIdentify, e, modid, 0, !0]);
}
function clc_cookies() {
  "" != dis_ckies &&
    ((document.getElementById("logintoidentify").disabled = !0),
    $("#logintoidentify").css("background-color", "#b2b2b2"),
    $("#lwg_wrpr").css("display", "none"));
}
function showmobverifyScreen(e, i, t, o, n, s, a, r, d) {
  yandex_impression(
    "Identification_login_popup",
    "ExistingUser_VerificationSuccessful"
  ),
    (verifyBoxHTML =
      '<div class="overlay_s" id="overlay_s" style="display: block;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1"><a href="javascript:" onclick="closeMe1(\'HDR\');" style="display: block;"><img src="//utils.imimg.com/header/gifs/3.png" id="close_s"></a><h2 class="f1_s otp-pl18">Verify Your Mobile Number</h2></div><div><style>.otp-mb10{margin: 10px 0px; text-align: center;}.lkotp{color:#2e3192;cursor:pointer;text-decoration:none;margin-left:61px;}.step-1 h2{font-size: 24px!important}.otp-pl18{padding-left:82px!important;padding-top:12px;height: 41px}.otp-message{color:#2a2a2a;margin:20px 22px}.wrper-txt{padding:3px 18px 36px;color:#2a2a2a;text-align:left;font-family:Open Sans,arial}.resendMsg{padding-left:59px}</style><p class="cm-msg" style="text-align: center;color:#2e3192;font-size:22px;font-family:Open Sans,arial;margin-top:10px;margin-bottom:10px;">Get Connected to Verified Sellers</p><div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:93%;" id="main_div"><p class="otp-message" style="text-align: center;line-height:25px;width:350px;margin:0 auto;">Click below to get 4 digit One Time Password (OTP)<br>on your Mobile Number <b>+' +
      o +
      "-" +
      t +
      '</b> via SMS</p><div class="vfn-code1 fs141 c31" style="text-align:center"><p class="otp-mb10" id="testing" style="position:relative;/* text-align: center; */"><input type="button" id="check_verify1" class="vrfy-otp" alt="" value="Request OTP" onclick="send_otp(\'' +
      e +
      "','" +
      i +
      "','" +
      t +
      "','" +
      o +
      "','" +
      n +
      "','" +
      s +
      "','2','" +
      r +
      "','" +
      d +
      "');_gaq.push(['_trackEvent', 'Identification_login_popup','SendOTPScreenSubmit',modid, 0, true])\" style=\"background-color: rgb(0, 166, 153);text-align: center;/* visibility: hidden; */cursor: pointer;font-size: 16px;\"><span class=\"err-otp2\" id=\"verify_error1\"></span></p></div></div></div></div>"),
    $("#sign_in").html(""),
    $("#IdentifiedPopUpHTML").html(verifyBoxHTML),
    $("#IdentifiedPopUpHTML").css({
      display: "block",
      position: "fixed",
      top: "200px",
      left: "50%",
      "z-index": "1001",
      "margin-left": "-247px",
    });
}
function yandex_impression(e, i) {
  var t, o, n;
  "function" != typeof ym &&
    ((t = window),
    (n = document),
    (t.ym =
      t.ym ||
      function () {
        (t.ym.a = t.ym.a || []).push(arguments);
      }),
    (t.ym.l = +new Date()),
    (o = n.createElement("script")),
    (n = n.getElementsByTagName("script")[0]),
    (o.async = 1),
    (o.src = "https://mc.yandex.ru/metrika/tag.js"),
    n.parentNode.insertBefore(o, n),
    ym(51115208, "init", {
      id: 51115208,
      clickmap: !0,
      trackLinks: !0,
      accurateTrackBounce: !0,
      webvisor: !0,
    })),
    (window.yaParams =
      "signIn" == e
        ? { SignIN: i }
        : "Verification_popup" == e
        ? { Verification_popup: i }
        : "Identification_login_popup" == e || "Identification_login_popup" == e
        ? { Identification_login_popup: i }
        : "IM_Global_Header" == e
        ? { IM_Global_Header: i }
        : "IM_Header_Strip" == e
        ? { IM_Header_Strip: i }
        : "joinFree" == e
        ? { JoinFree: i }
        : "Redirection_on_signout" == e
        ? { Redirection_on_signout: i }
        : { Imlogin: i }),
    ym(51115208, "params", window.yaParams || {});
}
