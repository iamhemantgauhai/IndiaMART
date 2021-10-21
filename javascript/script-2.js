function readCookie(cname) {
    var name = cname + "=";
    try {
        var decodedCookie = decodeURIComponent(document.cookie);
    } catch (err) {
        var decodedCookie = unescape(document.cookie);
    }
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getparamVal(cookieStr, key) {
    if (cookieStr > "") {
        var val = "|" + cookieStr + "|";
        var pattern = new RegExp(".*?\\|" + key + "=([^|]*).*|.*");
        return val.replace(pattern, '$1');
    } else {
        return "";
    }
}

var cookie = readCookie("ImeshVisitor");
if (cookie != "") {
    var namep = getparamVal(decodeURIComponent(cookie), 'fn');
    var forname = '<span class="rmv Hd_dib cpo ico-usr Hd_pr">Hi ' + namep + '</span>';
    document.getElementById("lshead").innerHTML = forname;
} else {
    var sgnhtm =
        '<a class="rmv Hd_dib cpo ico-usr" href="https://my.indiamart.com"><span class="Hd_pr">Sign In</span></a>';
    document.getElementById("lshead").innerHTML = sgnhtm;
}