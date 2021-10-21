var url = window.location.href.split('&');
if (typeof (url[1]) != 'undefined' && url[1] == 'utm_medium=web_push')
    document.cookie = "notification=web_push;domain=.indiamart.com; path=/";
var loginval;
var web_push;
if (readCookie("notification") == 'web_push') {
    web_push = '|web_push';
} else {
    web_push = ''
}
if ((cookie = readCookie("ImeshVisitor")) != "") {
    loginval = 'identified';
} else {
    loginval = 'unidentified';
}
imgtm = [{
    'CD_User-Mode': loginval,
    'PV_Tracking': '',
    'CD_Miscellaneous': 'IM-Homepage' + web_push
}];
(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'imgtm', 'GTM-NR4G');
if (typeof _gaq === 'undefined' || typeof _gaq !== 'object') {
    var _gaq = {};
    _gaq.push = function (array) {
        if (array[0] === '_trackPageview') {
            imgtm.push({
                'event': 'VirtualPageview',
                'virtualPageURL': array[1],
                'virtualPageTitle': (array[2] ? array[2] : "")
            });
        } else if (array[0] === '_trackEvent') {
            var triggerevent = (array[5] == true) ? 'IMEvent-NI' : 'IMEvent';
            imgtm.push({
                'event': triggerevent,
                'eventCategory': array[1],
                'eventAction': array[2],
                'eventLabel': array[3],
                'eventValue': array[4]
            });
        }
    }
}
var glmodid = "IMHOME";