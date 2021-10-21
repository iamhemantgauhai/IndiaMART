var hd_webLoc = location.hostname;
        var hd_UrlPri = hd_webLoc.match(/^dev/) ? "dev-" : (hd_webLoc.match(/^stg/)) ? "stg-" : "";
        var page_sel = location.hostname.indexOf(hd_UrlPri + "seller") == 0 ? 1 : 0;
        var page_trd = location.hostname.indexOf(hd_UrlPri + "trade") == 0 ? 1 : 0;
        var page_tend = location.hostname.indexOf(hd_UrlPri + "tenders") == 0 ? 1 : 0;
        if (typeof ims !== 'undefined' && typeof ims.hcq !== 'undefined' && typeof ims.hcq !== '') {
            changeselect_city(ims.hcq);
        } else {
            var referrer = document.referrer;
            if (referrer == "" || (referrer.match(/.indiamart.com/))) {
                var hd_ct = readCookie('hd_ctval');
                city = (hd_ct) ? getparamVal(hd_ct, 'ctval') : "All India";
                changeselect_city(city);
            } else {
                changeselect_city("All India");
            }
        }

        function hdr_getusercity(city) {
            var city = city || "All India";
            city = (city == '' || city == "null" || city == null) ? 'All India' : city;
            city = city.replace('-', ' ');
            var splitcity = city.toLowerCase().split(' ');
            for (var i = 0; i < splitcity.length; i++) {
                splitcity[i] = splitcity[i].charAt(0).toUpperCase() + splitcity[i].substring(1);
            }
            city = splitcity.join(' ');
            var hddrpdn2 = '<button id="hd_searchPlace" class="hd_cFl cpo"><span id="hd_usercity" class="Hd_db">' +
                city +
                '</span></button><div id="city_hold" class="hd_cSrb Hd_dbn"><label for="hd_city_sugg"></label><input type="text" id="hd_city_sugg" placeholder ="Enter City" value ="Enter City" class="srin ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" onkeyup="AlInd_Op()"><div class="hd_alop Hd_dbn cpo" id="all_India" >All India</div></div>';
            document.getElementsByClassName("select-wrapper")[0].classList.add("hd_cFMn");
            document.getElementsByClassName("select-wrapper")[0].innerHTML = hddrpdn2;
            document.getElementsByClassName("select-wrapper")[0].style.display = "block";
        }

        function changeselect_city(city) {
            var cookie = readCookie('ImeshVisitor');
            var imurldata = getparamVal(cookie, 'utyp');
            if (!(page_sel || page_trd || page_tend) && !((imurldata == "P") && (window.location.href.indexOf(
                    "easybuy") == -1))) {
                hdr_getusercity(city);
            }
        }

        function setHdCountry() {
            var hdIploc = '',
                hdCcode = '';
            var hdSrch = "iploc=";
            if (document.cookie.length > 0) {
                var offset = document.cookie.indexOf(hdSrch);
                if (offset != -1) {
                    offset += hdSrch.length;
                    end = document.cookie.indexOf(";", offset);
                    if (end == -1)
                        end = document.cookie.length;
                    hdIploc = unescape(document.cookie.substring(offset, end));
                }
            }
            if (hdIploc != '' && hdIploc.indexOf('gcniso=') != -1) {

                var hdcon = hdIploc.split('gcniso=');
                if (typeof (hdcon[1]) != "undefined")
                    var hdcarr = hdcon[1].split('|');
                hdCcode = hdcarr[0];
            }
            if (hdCcode == '') {
                var hdDate = new Date();
                var hdgmt = -hdDate.getTimezoneOffset() / 60;
                if (hdgmt != 5.5)
                    hdCcode = 'OTHER';
                else
                    hdCcode = 'IN';
            }
            if (typeof (hdCcode) != "undefined" && hdCcode != '' && hdCcode == 'IN') {
                var hdInpt = document.getElementsByClassName('duet');
                for (var i = 0, len = hdInpt.length; i < len; i++) {
                    var hdMid = hdInpt[i];
                    var hdContent = hdMid.innerHTML;
                    if (hdContent.match(/^\+91/)) {
                        hdContent = hdContent.replace('+91-', '0');
                        hdMid.innerHTML = hdContent;
                    }
                }
            } else if (typeof (hdCcode) != "undefined" && hdCcode != '' && hdCcode != 'IN') {
                var hdInpt = document.getElementsByClassName('duet');
                for (var i = 0, len = hdInpt.length; i < len; i++) {
                    var hdMid = hdInpt[i];
                    var hdContent = hdMid.innerHTML;
                    if (hdContent.match(/^0/)) {
                        hdContent = hdContent.replace('0', '+91-');
                        hdMid.innerHTML = hdContent;
                    }
                }
            }
        }

        if (window.addEventListener)
            window.addEventListener("load", function () {
                setHdCountry();
            }, false);
        else if (window.attachEvent)
            window.attachEvent("onload", function () {
                setHdCountry();
            });
        else
            window.onload = function () {
                setHdCountry();
            };
