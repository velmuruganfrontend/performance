<template>
    <div>
        <div v-if="showCookieBanner" class="cb-cookie">
            <div class="cb-cookie__desc">
                We use cookies on this site to improve and personalise your website experience.
                <a class="cj-link" href="/privacy/">Learn more.</a>
            </div>
            <div v-on:click="showCookieBanner = false;" class="cb-cookie__btn">Got it</div>
        </div>
    </div>
</template>
<script>
const axios = require('axios');
export default {
    data(){
        return {
            showCookieBanner: false
        }
    },
    methods: {
        renderAddRoll(){
            // ==============================================
            // Start : Rollworks
            // ==============================================
            window.adroll_adv_id = "CQ5ZRG5RDBEXDIYJ6T4FJO";
            window.adroll_pix_id = "TVZKCVCYLVA3PIT3JBRSAU";
            (function () {
                var _onload = function(){
                    if (document.readyState && !/loaded|complete/.test(document.readyState)){setTimeout(_onload, 10);return}
                    if (!window.__adroll_loaded){window.__adroll_loaded=true;setTimeout(_onload, 50);return}
                    var scr = document.createElement("script");
                    var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
                    scr.setAttribute('async', 'true');
                    scr.type = "text/javascript";
                    scr.src = host + "/j/roundtrip.js";
                    ((document.getElementsByTagName('head') || [null])[0] ||
                        document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
                };
                if (window.addEventListener) {window.addEventListener('load', _onload, false);}
                else {window.attachEvent('onload', _onload)}
            }());
            // ==============================================
            // End : Rollworks
            // ==============================================
        },
        trackCalendlyDemoBooked(){
            window.addEventListener('message', function(e) {
            if (e.origin.match(/calendly\.com/)) {
                if (e.data && e.data.event) {
                    if (e.data.event == 'calendly.event_scheduled') {
                        try {
                            __adroll.record_user({"adroll_segments": "729c8f75"});
                            } catch (err) {}
                        }
                    }
                }
            }, false);
        }
    },
    mounted() {
        let banner = this
        axios.get('https://freegeoip.live/json/')
        .then(function (response) {
            let timeZone = response.data.time_zone;
            if(timeZone.indexOf('Europe') != -1){
                banner.showCookieBanner = $.cookie('showCookieBanner') ? false : true;
                if($.cookie('showCookieBanner') == undefined || $.cookie('showCookieBanner') == ''){
                    $.cookie('showCookieBanner', false)
                }else{
                    banner.renderAddRoll()
                    banner.trackCalendlyDemoBooked()
                }
            }else{
                banner.renderAddRoll()
                banner.trackCalendlyDemoBooked()
            }
        })
    }
}
</script>
<style>
.cb-cookie {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 30px;
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    z-index: 999999;
    background-color: #ffffff;
    padding: 8px 12px;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    border: 1px solid #dde2e9;
    max-width: 710px;
    margin: auto;
    border-radius: 4px;
    box-shadow: 0 1px 1px 0 rgba(90, 122, 190, 0.1), 0 8px 16px 0 rgba(90, 122, 190, 0.2)
}
.cb-cookie__desc {
    max-width: 1024px;
}
.cb-cookie__btn {
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    background-color: #3a008c;
    color: #fff;
    border-radius: 3px;
    display: grid;
    height: 100%;
    text-align: center;
    align-items: center;
    width: 100%;
    padding: 4px 8px;
}
@media (max-width: 767px) {
    .cb-cookie{
        border-radius: 0;
        border: none;
        border-top: 1px solid #dde2e9;
        bottom: 0;
    }
    .cb-cookie__btn{
        height: auto;
    }
}
</style>


