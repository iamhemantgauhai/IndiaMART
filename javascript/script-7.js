var blversion = 'enqBl_desktop.min.js?v=29';
var identversion = 'identification_popup-v22.js';

function redirectsearch() {
    var web_push = '';
    web_push = readCookie("notification");
    var ss = $('#search-input').val();
    ss = ss.trim();
    var cq = $('#usercity').html();
    ss = ss.replace(' ', '+');
    cq = cq.replace(' ', '-');
    var str = 'ss=' + ss + '&cq=' + cq;
    if ((ss.length > 0) && ($('#usercity').text() != 'All India')) {
        window.location = 'https://dir.indiamart.com/search.mp?' + str + '&prdsrc=1';
    } else if ((ss.length > 0) && $('#usercity').text() === 'All India') {
        var new_cook = new userDataCookie();
        new_cook.set({
            'city': ""
        }, 'xnHist');
        window.location = 'https://dir.indiamart.com/search.mp?' + 'ss=' + ss + '&prdsrc=1';

    } else {
        alert("Please enter text to search.");
    }

    if (web_push != '' && web_push != 'undefined' && web_push != null) {
        recordOutboundLink("Search Button via web_push", "IndiaMART Homepage", "Search_Widget_Homepage", 0, 0);
    } else {
        recordOutboundLink("Search Button", "IndiaMART Homepage", "Search_Widget_Homepage", 0, 0);
    }
}

function select_city(event, ui) {
    this.value = (ui.item.value != 'undefined') ? ui.item.value : '';
    $('#usercity').html(this.value);
    var u = $('#usercity').text().length
    if (u > 12) {

        $('#usercity').addClass('ain1')
        $('.dropbtn').addClass('ain2')
        $('#searchPlaceInput').addClass('ain3')

    } else {
        $('#usercity').removeClass('ain1')
        $('.dropbtn').removeClass('ain2')
        $('#searchPlaceInput').removeClass('ain3')

    }
    $('.ui-autocomplete').hide();
    document.getElementById("searchPlaces").classList.toggle("show");
}

function getusercity() {
    var city = '';
    var referrer = document.referrer;
    if (referrer == "" || (referrer.match(/.indiamart.com/))) {
        var hd_ct = readCookie('hd_ctval');
        city = (hd_ct) ? getparamVal(hd_ct, 'ctval') : "All India";
    } else {
        city = "All India";
    }
    city = (city == '' || city == "null" || city == null) ? 'All India' : city;
    city = city.replace('-', ' ');
    var splitcity = city.toLowerCase().split(' ');
    for (var i = 0; i < splitcity.length; i++) {
        splitcity[i] = splitcity[i].charAt(0).toUpperCase() + splitcity[i].substring(1);
    }
    city = splitcity.join(' ');

    $('#usercity').html(city);
}
getusercity();

function selecttext(event, ui) {
    this.value = ui.item.value;
    if ($("input[id=src]")) {
        $("input[id=src]").remove();
    }
    if ($("input[id=prdsrc]")) {
        $("input[id=prdsrc]").remove();
    }
    if (typeof (ui.item.data) != 'undefined' && typeof (ui.item.data.catid) != 'undefined' && ui.item.data
        .catid != '') {
        $('#hdr_frm').append("<input type='hidden' name='catid' id='catid' value='" + ui.item.data.catid +
            "' >");
    }
    if (typeof (ui.item.askwdSel) != 'undefined' && ui.item.askwdSel == 1) {
        var source_val = ui.item.trackid;
        $('#hdr_frm').append("<input type='hidden' name='src' id='src' value='" + source_val + "' >");
    }
    if (event.ctrlKey && event.handleObj.origType == "click") {
        $('#hdr_frm').append("<input type='hidden' name='prdsrc' id='prdsrc' value='1' >");
        var $form1 = $("#hdr_frm");
        target = $form1.attr('target');
        $form1.attr('target', '_blank').submit().attr('target', target);
        $form1.removeAttr('target');
        _gaq.push([this.value, 'IM_Homepage', 'ctrl+click']);
    } else if (event.keyCode == 13 || event.handleObj.origType == "click") {
        document.getElementById('btnSearch').click();
    }
}

function selecttext1(event, ui) {
    this.value = ui.item.value;
    var cityval = $('#usercity').text();
    $('#search_string').val(this.value);
    if ($("input[id=src]")) {
        $("input[id=src]").remove();
    }
    if ($("input[id=prdsrc]")) //for ctrl+enter appending src only one time
    {
        $("input[id=prdsrc]").remove(); //to remove prd input tag
    }
    $('#hdr_frm').append("<input type='hidden' name='prdsrc' id='prdsrc' value='1' >");
    if (typeof (ui.item.data) != 'undefined' && typeof (ui.item.data.catid) != 'undefined' && ui.item.data
        .catid != '') {
        $('#hdr_frm').append("<input type='hidden' name='catid' id='catid' value='" + ui.item.data.catid +
            "' >");
    }
    if (typeof (ui.item.askwdSel) != 'undefined' && ui.item.askwdSel == 1) {
        var source_val = ui.item.trackid;
        $('#hdr_frm').append("<input type='hidden' name='src' id='src' value='" + source_val + "' >");
    }
    if (cityval != 'All India')
        $('#hdr_frm').append("<input type='hidden' name='cq' id='cq' value='" + cityval + "' >");
    else {
        var new_cook = new userDataCookie();
        new_cook.set({
            'city': ""
        }, 'xnHist');
    }
    if (event.ctrlKey && event.handleObj.origType == "click") {
        $('#hdr_frm').append("<input type='hidden' name='prdsrc' id='prdsrc' value='1' >");
        var $form1 = $("#hdr_frm");
        target = $form1.attr('target');
        $form1.attr('target', '_blank').submit().attr('target', target);
        $form1.removeAttr('target');
        _gaq.push([this.value, 'IM_Homepage', 'ctrl+click']);
    } else if (event.keyCode == 13 || event.handleObj.origType == "click") {
        $('#hdr_frm').submit();
    }
}
var sugg = new Suggester({
    "element": "search_string",
    "onSelect": selecttext,
    "type": "product",
    "placeholder": "Enter product / service to search",
    "classPlaceholder": "ui-placeholder-input",
    "module": "IM-HEADER",
    "dispstyle": 2,
    "autocompleteClass": "searchstring"
});
var sugg1 = new Suggester({
    "element": "search-input",
    "onSelect": selecttext1,
    "type": "product",
    "placeholder": "Enter product/service name",
    "classPlaceholder": "ui-placeholder-input1",
    "dispstyle": 2,
    "autocompleteClass": "searchinput"
});
var sugg_city = '';
sugg_city = new Suggester({
    "element": "searchPlaceInput",
    "onSelect": select_city,
    "type": "city",
    "placeholder": "Search your city",
    "classPlaceholder": ".drop1",
    "minStringLengthToDisplaySuggestion": 1,
    "autocompleteClass": "cls-city",
    "onlyCity": "true",
    "rowsToDisplay": 10,
    "displayFields": "value,=state",
    "displaySeparator": ", ",
    "fields": "state,id,stateid,flname,alias",
    "showloc": 1
});
var bl_in = 0;

function checkBlloaded() {
    var web_push = '';
    web_push = readCookie("notification");
    if (web_push != '' && web_push != 'undefined' && web_push != null) {
        web_push = '_web_push'
    }
    // Initialize BL forms      

    if (typeof initializeForm == 'undefined') {
        setTimeout(function () {
            checkBlloaded()
        }, 50);
    } else {
        if (bl_in == 0) {
            var blFormObj1 = {
                catId: '',
                mcatId: '',
                mcatName: '',
                prodServ: '',
                pageType: "IM-Homepage" + web_push,
                prodName: '',
                refText: '',
                modId: 'IMHOME',
                modrefType: 'product',
                heading: '',
                tempId: '04',
                instId: '01',
                formType: 'BL',
                afflId: '-102',
                displayImage: '',
                zoomImage: '',
                ctaName: 'Slider-Inline',
                ctaType: 'Product Enquiry',
                section: 'Slider',
                position: 'pg-1_0',
                scriptVersion: blversion,
                disableRd: '',
                BLIntent: "yes"
            };
            var blFormObj2 = {
                catId: '',
                mcatId: '',
                mcatName: '',
                prodServ: '',
                pageType: "IM-Homepage" + web_push,
                prodName: '',
                pDispId: '',
                modrefType: 'product',
                refText: '',
                modId: 'IMHOME',
                heading: '',
                tempId: '04',
                instId: '02',
                formType: 'BL',
                afflId: '-102',
                displayImage: '',
                zoomImage: '',
                ctaName: 'Inline-BL',
                ctaType: 'Product Enquiry',
                section: 'Inline',
                position: 'pg-1_0',
                scriptVersion: blversion,
                disableRd: ''
            };
            initializeForm([blFormObj1, blFormObj2]);
            bl_in = 1;
        }
    }
}
checkBlloaded();

$("#mobi").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#sendBtn").click();
    }
});

function recordOutboundLink(link, category, action, value, nonInteractionFlag) {
    var linkHref = '';
    if (typeof (link) == 'string' || typeof (link) == 'number') linkHref = link;
    else linkHref = link.href;
    if (!nonInteractionFlag) nonInteractionFlag = false;
    if (nonInteractionFlag == false) imgtm.push({
        'event': 'IMEvent',
        'eventCategory': category,
        'eventAction': action,
        'eventLabel': linkHref,
        'eventValue': value
    });
    else imgtm.push({
        'event': 'IMEvent-NI',
        'eventCategory': category,
        'eventAction': action,
        'eventLabel': linkHref,
        'eventValue': value
    });
}


function pers_widget(e) {
    "undefined" != typeof perWidget ? ("" != e && PersonalizedWidget({
            widgetID: "W5",
            modID: "IMHOME",
            glusrID: e
        }),
        PersonalizedWidget({
            widgetID: "W3",
            modID: "IMHOME",
            glusrID: e
        })) : setTimeout(function () {
        pers_widget(e)
    }, 50)
}
$('.col-md-2 li').click(function () {
    var txt = $(this).text();
    recordOutboundLink(txt, "IndiaMART Homepage", "Megamenu_Widget", 0, 0);
});
$('.city-link .col').click(function () {
    var txt = $(this).text();
    recordOutboundLink(txt, "IndiaMART Homepage", "Top_Cities_Widget", 0, 0);
});
$('.pbr .col a').click(function () {
    var txt = $(this).attr("href");
    recordOutboundLink(txt, "IndiaMART Homepage", "Premium_Brands_Widget", 0, 0);
});
$('.mf-wrapper a').click(function () {
    var txt = $(this).text();
    recordOutboundLink(txt, "IndiaMART Homepage", "More_For_You_Widget", 0, 0);
});
$('.gallery-thumbs .swiper-slide').click(function () {
    recordOutboundLink("Slider Gallery Thumbnails", "IndiaMART Homepage", "Happy_Customer_Widget", 0,
    0);
});
$('.minht a').click(function () {
    var id = $(this).closest('[id]').attr('id');
    var txt = $(this).text();
    recordOutboundLink(txt, "IndiaMART Homepage", "Industry_Section_Widget_" + id, 0, 0);
});

$(document).ready(function () {
    $('#t0402_enrichform_maindiv').remove();
    $(window).scroll(function () {

        if ($(this).scrollTop() > 140) {

            $('#pstBuy').show();
            $('#hdSrh').show();


        } else {
            $('#pstBuy').hide();
            $('#hdSrh').hide();

        }

    })



    $("#searchPlaceDP").click(function (e) {
        $('#searchPlaceInput').removeAttr('value');
        $("#searchPlaces").toggle();
        recordOutboundLink("City Search", "IndiaMART Homepage", "Search_Widget_Homepage", 0, 0);
        e.stopPropagation();
        if ($('#usercity').html() !== "All India") {
            $("#al_ind").show();
            $("#al_ind").click(function (e) {
                $('#usercity').html("All India");
                $('#searchPlaceInput').removeAttr('value');
                $("#searchPlaces").hide();
                $("#al_ind").hide();
            });
        }
    });

    $("#searchPlaces").click(function (e) {
        e.stopPropagation();
    });

    $(document).click(function () {
        $("#searchPlaces").hide();
        $('#searchPlaceInput').removeAttr('value');
    });
    $('#imblform').append('<div id="t0402_enrichform_maindiv" class="be-frmwrap bedsnone"></div>')
    /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
});

function sugg_op() {
    if ($("#searchPlaceInput").val() == '') {
        if ($('#usercity').html() !== "All India")
            $("#al_ind").show();
    } else {
        $("#al_ind").hide();
    }
}

if (typeof (page.IdentifiedQ) != 'undefined') {

    page.IdentifiedQ.push(trending);
}

function trending() {
    if ((cookie = readCookie("ImeshVisitor")) != "") {
        $('#trending').hide();
    }
}
$("#search-input").keydown(function (event) {
    if (event.keyCode === 13) {
        $("#searchBtn").click();
    }
});