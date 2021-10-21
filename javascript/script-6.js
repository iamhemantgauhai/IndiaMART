var css = document.createElement("style");
css.type = "text/css";
css.innerHTML =
    ".cf_wd a{text-decoration:none; outline:none;-webkit-backface-visibility:hidden;}.cf_social,.cf_rht,.cf_ftlk li.last{float:right}.cf_clb, .cf_cryt{clear:both}.cf_wd{width:1001px;margin:0 auto} .cf_footer{background:#f6f6f6;border-top:solid 1px #e6e6e6; font-weight:300;font-size:14px;font-family: arial;}.cf_footer a{text-decoration:none; outline:none; -webkit-backface-visibility: hidden}.cf_footer ul, .cf_footer li{margin:0;padding:0}.cf_ftHd{background:#eeeeee;border-top:solid 1px #fff;border-bottom:solid 1px #e6e6e6;line-height:42px;font-weight:400}.cf_fhd{color:#2e3192;font-size:20px}.cf_social a{ display:inline-block;width:31px;height:42px;margin:0;text-indent:-99999px;transition: all 0.2s ease-out 0s}.cf_fb{background-position:-138px -189px}.cf_fb:hover{background-position:-170px -189px}.tw_ft{background-position:-202px -189px}.tw_ft:hover{background-position:-234px -189px}.cf_lkd_in{background-position:-265px -189px}.cf_lkd_in:hover{background-position:-297px -189px}.cf_gpls{background-position:-262px -189px}.cf_gpls:hover{background-position:-294px -189px}.cf_wndw{background-position:-335px -189px} .cf_wndw:hover{background-position:-355px -189px}.cf_bb{background-position:-392px -183px;width:32px!important}.cf_bb:hover{background-position:-427px -183px}.cf_goMob{margin-right:15px}.cf_goMob a{ display:inline-block;width:24px;height:42px;margin:0;text-indent:-99999px;transition: all 0.2s ease-out 0s}.cf_iOS{background-position:-45px -187px}.cf_iOS:hover{background-position:-68px -187px}.cf_anrd{background-position:0 -187px}.cf_anrd:hover{background-position:-23px -187px}.cf_mSit{background-position:-90px -187px}.cf_mSit:hover{background-position:-113px -187px}.cf_ftlk li{margin:7px 0;display:inline-block;width:190px;float:left;list-style:none;line-height:19px}.cf_ftlk li.last{margin-right:0 !important; width:140px}.cf_ftlk li.cf_wdth{width:240px}.cf_ftlk li a{display:block;padding:1px 0;color:#727272}.cf_ftlk li a:hover, .cf_cryt a:hover{color:#2e3192}.cf_ftlk .cf_lihd{font-size:17px;color:#000;padding:0 0 4px;font-weight:400}.cf_cryt{border-top:solid 1px #e1e1e1;color:#727272;padding:5px;font-size:13px}.cf_cryt a{color:#727272}.cf_ftlk .cf_lihd a{color:#000;}";
document.body.appendChild(css);
var jobs_career = '<a href="https://corporate.indiamart.com/careers-at-im/ ">Jobs &amp; Careers</a>';
if (window.location.href.match(/my/i) == 'my' || glmodid == "IMHOME") {
    var IMhome_invest = '<a href="https://investor.indiamart.com/index.htm ">Investor Section</a>';
    var IMhome_jobs = jobs_career;
} else {
    var IMhome_invest = jobs_career;
    var IMhome_jobs = '';
}
document.getElementById('sag').innerHTML =
    '<ul><li><a href="https://corporate.indiamart.com/about-us/">About Us</a><a href="https://corporate.indiamart.com/partner-with-us/">Join Sales</a><a href="https://corporate.indiamart.com/category/everything-else/indiamart-achievers/">Success Stories</a> <a href="https://corporate.indiamart.com/category/everything-else/press-releases/">Press Section</a> <a href="https://corporate.indiamart.com/advertise-with-indiamart/">Advertise with Us</a>' +
    IMhome_invest +
    '</li><li><a href="https://help.indiamart.com/">Help</a> <a href="https://help.indiamart.com/user-feedback/">Feedback</a> <a href="https://help.indiamart.com/complaint-registration/">Complaints</a> <a href="https://corporate.indiamart.com/customer-care-services/">Customer Care</a>' +
    IMhome_jobs +
    '<a href="https://corporate.indiamart.com/branch-offices/">Contact Us</a></li><li class="cf_wdth"><div class="cf_lihd"><a href="https://seller.indiamart.com" class="ch_supplier_head">Suppliers Tool Kit</a></div><span id="ch_free_web"><a href="https://seller.indiamart.com/" class="ch_free_web">Sell on IndiaMART</a></span> <a href="https://seller.indiamart.com/bltxn/?pref=recent" class="bl_log_link">Latest BuyLead</a> <a href="https://corporate.indiamart.com/quick-learn/">Learning Centre</a> <a href="https://seller.indiamart.com/pwim/invoice/whatispwim/?bannerid=cntrlfooter" id="pypd_footer" style="display:none">Pay With IndiaMART</a></li><li class="cf_wdth"><div class="cf_lihd"><a href="https://my.indiamart.com" class="ch_buyers_head">Buyers Tool Kit</a></div><a href="https://my.indiamart.com/buyertools/postbl" class="ch_post_buy">Post Your Requirement</a> <a href="https://my.indiamart.com/buyertools/myproductbuy" class="mang_pro">Products You Buy</a> <a href="https://www.indiamart.com/search.html">Search Products &amp; Suppliers</a> <a href="https://paywith.indiamart.com?bannerid=cntrlfooter"  id="pay_footer">Pay With IndiaMART</a></li><li class="last"><div class="cf_lihd">Events</div><a href="https://10times.com/tradeshows" target="_blank">Trade Shows</a> <a href="https://10times.com/conferences" target="_blank">Conferences</a> <a href="https://10times.com/events/by-country" target="_blank">Events by Country</a></li></ul>';

var webAddress = location.hostname;
var UrlPri = webAddress.match(/^dev/) ? "dev-" : (webAddress.match(/^stg/)) ? "stg-" : "";
var c_imesh = (typeof (readCookie("ImeshVisitor")) !== "undefined") ? readCookie("ImeshVisitor") : '';
var pv_count = 0;
if (readCookie("xnHist") > "") {
    if (getparamVal(decodeURIComponent(readCookie("xnHist")), "pv") != "") {
        pv_count = getparamVal(decodeURIComponent(readCookie("xnHist")), "pv")
    }
}
var rspv = 0;
var newVal = "";
var o = new Date;
o.setTime(o.getTime() + (30 * 60 * 1000));
if (readCookie("sessid").length > 0) {
    var spv1 = readCookie("sessid").split('=');
    rspv = parseInt(spv1[1]);
    newVal = "spv=" + ++rspv;
} else {
    newVal = "spv=1";
}

function callIdentifyPopup() {
    var match = window.location.href.match(/back=1/);
    if ((c_imesh == '' || c_imesh == null) && (rspv == 2 || rspv == 4 || rspv == 6) && match == null) {
        $.ajaxSetup({
            cache: true
        });
        $.getScript("https://" + UrlPri + "utils.imimg.com/globalhf/identified_popup.js", function () {
            getIdentifiedPopUpHTMLForm1();
            setTimeout(function () {
                identify_Banner()
            }, 3000);
        });
        $('#IdentifiedPopUpHTML').on("click", "#countrySuggesterIdenPop", function () {
            changePopUpInput(identifiedPopName, 1);
        });
        is_form_open = 0;
    }
}

function activeFooterOnReady() {
    if (typeof (jQuery) === 'function') {
        document.cookie = "sessid=" + newVal + ";expires=" + o.toGMTString() + ";domain=.indiamart.com;path=/;"
        //callIdentifyPopup();
        pop_imesh = readCookie("ImeshVisitor");
        pop_xnhist = readCookie("xnHist");
        var ipv = getparamVal(pop_xnhist, "ipv");
        var fpv = getparamVal(pop_xnhist, "fpv");
        var glUserId = getparamVal(pop_imesh, "glid");
        var name = getparamVal(pop_imesh, "mb1");
        var modid = glmodid;
        var email = getparamVal(pop_imesh, "em");
        var city = getparamVal(pop_imesh, "ct");
        var ph_country = getparamVal(pop_imesh, "phcc");
        var cn_iso = getparamVal(pop_imesh, "iso");
        //Mobile Verification Popup for 3rd and 5th Page view
        //  if(((ipv == 2)||(ipv==4))&& (!(window.location.href.indexOf("my") > -1))) {  
        //      var screen = 'VER';
        //      if (name!=''&& getparamVal(pop_imesh, "phcc") == '91' && getparamVal(pop_imesh, "uv") != 'V'){        
        //          $.getScript("https://"+UrlPri+"utils.imimg.com/header/js/imlogin.js", function(){ send_otp(glUserId,modid,name,ph_country,'121',cn_iso,'2','4',screen);
        //          });
        //      }
        // }   
    } else {
        setTimeout(function () {
            activeFooterOnReady()
        }, 50);
    }
}
if (document.readyState !== "complete" && typeof jQuery === 'function') {
    $(document).ready(function () {
        activeFooterOnReady();
    });
} else {
    activeFooterOnReady();
}

function recordInboundLinkS_bounce(category, action, label, value, noninteraction) {
    _gaq.push(['_trackEvent', window.location.href, action, label, value, noninteraction]);
}

function recordOutboundLink3(category, action) {
    _gaq.push(['_trackEvent', category, action, 'trackPageviewParam']);
}

function callConversionCode() {
    /* <![CDATA[ */
    var google_conversion_id = 1067418746;
    var google_custom_params = window.google_tag_params;
    var google_remarketing_only = true; /* ]]> */
    $.getScript("https://www.googleadservices.com/pagead/conversion.js");
    $('.cf_ftlk ul li a').on('click', function () {
        var value = $(this).text();
        _gaq.push(['_trackEvent', 'IM Global Footer ', window.location.host, value, 0]);
    });
}
if (typeof jQuery === 'function' && document.readyState !== "complete") {
    $(window).load(function () {
        callConversionCode();
    });
} else {
    document.addEventListener('jqready', function (e) {
        callConversionCode();
    });
}
