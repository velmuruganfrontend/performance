var TpJsSnippet = (function() {

    var tpJsConfig;
    var debugEnabled = (location.hash === "#tp_snippets_debug");

    var snippetGrps = {
        website: ["grem", "ga", "cac", "driftChat", "trialSignup", "jqcookie", "cookie", "adwordcookie"],
        // docs: ["ga", "cac", "jqcookie", "cookie"],
        tutorials: ["ga", "cac", "jqcookie", "cookie"],
        blog: ["grem", "ga", "cac", "jqcookie", "cookie"]
    };

    var snippetFuncs = {
        driftChatSnippet: function() {
            // Start of Async Drift Code
            function renderDrift(){
                "use strict";
                !function() {
                    var t = window.driftt = window.drift = window.driftt || [];
                    if (!t.init) {
                        if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                        t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
                        t.factory = function(e) {
                            return function() {
                            var n = Array.prototype.slice.call(arguments);
                            return n.unshift(e), t.push(n), t;
                            };
                        }, t.methods.forEach(function(e) {
                            t[e] = t.factory(e);
                        }), t.load = function(t) {
                            var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                            o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                            var i = document.getElementsByTagName("script")[0];
                            i.parentNode.insertBefore(o, i);
                        };
                    }
                }();
                drift.SNIPPET_VERSION = '0.3.1';
                drift.load('fazvgkbu5bbi');
                var gclid = new URL(location.href).searchParams.get('gclid');
                window.drift.on("conversation:playbookFired", function(data) {
                    if(gclid){
                        drift.api.setUserAttributes({gclid:gclid})
                    }
                })
            }
            if(screen.width < 992){
                $(window).one('scroll',function() {
                    renderDrift()
                })
            }else{
                renderDrift()
            }
            // End of Async Drift Code
        },
        gremSnippet: function() {
            window.google_conversion_id = 979719580;
            window.google_custom_params = window.google_tag_params;
            window.google_remarketing_only = true;
        },
        cacSnippet: function() {
            window._gaq = window._gaq || [];
            // DON'T UPDATE THE GA ACCOUNT ID. DUMMY ID
            _gaq.push(['sfga._setAccount', 'UA-XYZABCDEF-1']);
            _gaq.push(['sfga._setDomainName', 'chargebee.com']);
            _gaq.push(['sfga._setAllowLinker', true]);
            _gaq.push(['sfga._trackPageview']);
            _gaq.push(function() {
                get_campaign_info();
            });

            (function() {
                var ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            })();
        },
        gaSnippet: function() {
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-27953252-1', 'chargebee.com');
            ga('require', 'linkid', 'linkid.js');
            ga('send', 'pageview');
        },
        // vwoSnippet: function() {
        //     window._vwo_code = (function() {
        //         var account_id = 21063,
        //                 settings_tolerance = 2000,
        //                 library_tolerance = 2500,
        //                 use_existing_jquery = false,
        //                 // DO NOT EDIT BELOW THIS LINE
        //                 f = false, d = document;
        //         return{use_existing_jquery: function() {
        //                 return use_existing_jquery;
        //             }, library_tolerance: function() {
        //                 return library_tolerance;
        //             }, finish: function() {
        //                 if (!f) {
        //                     f = true;
        //                     var a = d.getElementById('_vis_opt_path_hides');
        //                     if (a)
        //                         a.parentNode.removeChild(a);
        //                 }
        //             }, finished: function() {
        //                 return f;
        //             }, load: function(a) {
        //                 var b = d.createElement('script');
        //                 b.src = a;
        //                 b.type = 'text/javascript';
        //                 b.innerText;
        //                 b.onerror = function() {
        //                     _vwo_code.finish();
        //                 };
        //                 d.getElementsByTagName('head')[0].appendChild(b);
        //             }, init: function() {
        //                 settings_timer = setTimeout('_vwo_code.finish()', settings_tolerance);
        //                 this.load('//dev.visualwebsiteoptimizer.com/j.php?a=' + account_id + '&u=' + encodeURIComponent(d.URL) + '&r=' + Math.random());
        //                 var a = d.createElement('style'), b = 'body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}', h = d.getElementsByTagName('head')[0];
        //                 a.setAttribute('id', '_vis_opt_path_hides');
        //                 a.setAttribute('type', 'text/css');
        //                 if (a.styleSheet)
        //                     a.styleSheet.cssText = b;
        //                 else
        //                     a.appendChild(d.createTextNode(b));
        //                 h.appendChild(a);
        //                 return settings_timer;
        //             }};
        //     }());
        //     window._vwo_settings_timer = window._vwo_code.init();
        // },
        // fdChatSnippet: function() {
        //     var fc_CSS = document.createElement('link');
        //     fc_CSS.setAttribute('rel', 'stylesheet');
        //     var fc_isSecured = (window.location && window.location.protocol == 'https:');
        //     var fc_lang = document.getElementsByTagName('html')[0].getAttribute('lang');
        //     var fc_rtlLanguages = ['ar', 'he'];
        //     var fc_rtlSuffix = (fc_rtlLanguages.indexOf(fc_lang) >= 0) ? '-rtl' : '';
        //     fc_CSS.setAttribute('type', 'text/css');
        //     fc_CSS.setAttribute('href', ((fc_isSecured) ? 'https://d36mpcpuzc4ztk.cloudfront.net' : 'http://assets1.chat.freshdesk.com') + '/css/visitor' + fc_rtlSuffix + '.css');
        //     document.getElementsByTagName('head')[0].appendChild(fc_CSS);
        //     var fc_JS = document.createElement('script');
        //     fc_JS.type = 'text/javascript';
        //     fc_JS.defer = true;
        //     fc_JS.src = ((fc_isSecured) ? 'https://d36mpcpuzc4ztk.cloudfront.net' : 'http://assets.chat.freshdesk.com') + '/js/visitor.js';
        //     (document.body ? document.body : document.getElementsByTagName('head')[0]).appendChild(fc_JS);
        //     window.livechat_setting = 'eyJ3aWRnZXRfc2l0ZV91cmwiOiJjaGFyZ2ViZWUuZnJlc2hkZXNrLmNvbSIsInByb2R1Y3RfaWQiOm51bGwsIm5hbWUiOiJDaGFyZ2VCZWUiLCJ3aWRnZXRfZXh0ZXJuYWxfaWQiOm51bGwsIndpZGdldF9pZCI6IjlhYjU3N2Q5LWJiZWMtNDcwZS04OGFhLTMxNzA5OGVkODBlNiIsInNob3dfb25fcG9ydGFsIjp0cnVlLCJwb3J0YWxfbG9naW5fcmVxdWlyZWQiOmZhbHNlLCJsYW5ndWFnZSI6bnVsbCwidGltZXpvbmUiOm51bGwsImlkIjoxMzIsIm1haW5fd2lkZ2V0IjoxLCJmY19pZCI6IjVmMGFhMTJkMDc5ZTUwOTBiYmJjNDRlZTI1ZjZlOTg4Iiwic2hvdyI6MSwicmVxdWlyZWQiOjIsImhlbHBkZXNrbmFtZSI6IkNoYXJnZWJlZSIsIm5hbWVfbGFiZWwiOiJOYW1lIiwibWVzc2FnZV9sYWJlbCI6Ik1lc3NhZ2UiLCJwaG9uZV9sYWJlbCI6IlBob25lIiwidGV4dGZpZWxkX2xhYmVsIjoiVGV4dGZpZWxkIiwiZHJvcGRvd25fbGFiZWwiOiJEcm9wZG93biIsIndlYnVybCI6ImNoYXJnZWJlZS5mcmVzaGRlc2suY29tIiwibm9kZXVybCI6ImNoYXQuZnJlc2hkZXNrLmNvbSIsImRlYnVnIjoxLCJtZSI6Ik1lIiwiZXhwaXJ5IjowLCJlbnZpcm9ubWVudCI6InByb2R1Y3Rpb24iLCJlbmRfY2hhdF90aGFua19tc2ciOiJUaGFuayB5b3UhISEiLCJlbmRfY2hhdF9lbmRfdGl0bGUiOiJFbmQiLCJlbmRfY2hhdF9jYW5jZWxfdGl0bGUiOiJDYW5jZWwiLCJzaXRlX2lkIjoiNWYwYWExMmQwNzllNTA5MGJiYmM0NGVlMjVmNmU5ODgiLCJhY3RpdmUiOjEsInJvdXRpbmciOnsiY2hvaWNlcyI6eyJTYWxlcyI6WyI0Njc5Il0sIlN1cHBvcnQiOlsiNDY3NyJdLCJkZWZhdWx0IjpbIjQ2NzciXX0sImRyb3Bkb3duX2Jhc2VkIjoidHJ1ZSJ9LCJwcmVjaGF0X2Zvcm0iOjEsImJ1c2luZXNzX2NhbGVuZGFyIjpudWxsLCJwcm9hY3RpdmVfY2hhdCI6MCwicHJvYWN0aXZlX3RpbWUiOjE4MCwic2l0ZV91cmwiOiJjaGFyZ2ViZWUuZnJlc2hkZXNrLmNvbSIsImV4dGVybmFsX2lkIjpudWxsLCJkZWxldGVkIjowLCJtb2JpbGUiOjEsImFjY291bnRfaWQiOm51bGwsImNyZWF0ZWRfYXQiOiIyMDE0LTA5LTExVDA3OjEwOjE5LjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAxNy0wOC0wOVQwNjozOTozOC4wMDBaIiwiY2JEZWZhdWx0TWVzc2FnZXMiOnsiY29icm93c2luZ19zdGFydF9tc2ciOiJZb3VyIHNjcmVlbnNoYXJlIHNlc3Npb24gaGFzIHN0YXJ0ZWQiLCJjb2Jyb3dzaW5nX3N0b3BfbXNnIjoiWW91ciBzY3JlZW5zaGFyaW5nIHNlc3Npb24gaGFzIGVuZGVkIiwiY29icm93c2luZ19kZW55X21zZyI6IllvdXIgcmVxdWVzdCB3YXMgZGVjbGluZWQiLCJjb2Jyb3dzaW5nX2FnZW50X2J1c3kiOiJBZ2VudCBpcyBpbiBzY3JlZW4gc2hhcmUgc2Vzc2lvbiB3aXRoIGN1c3RvbWVyIiwiY29icm93c2luZ192aWV3aW5nX3NjcmVlbiI6IllvdSBhcmUgdmlld2luZyB0aGUgdmlzaXRvcuKAmXMgc2NyZWVuICIsImNvYnJvd3NpbmdfY29udHJvbGxpbmdfc2NyZWVuIjoiWW91IGhhdmUgYWNjZXNzIHRvIHZpc2l0b3LigJlzIHNjcmVlbiAiLCJjb2Jyb3dzaW5nX3JlcXVlc3RfY29udHJvbCI6IlJlcXVlc3QgdmlzaXRvciBmb3Igc2NyZWVuIGFjY2VzcyAiLCJjb2Jyb3dzaW5nX2dpdmVfdmlzaXRvcl9jb250cm9sIjoiR2l2ZSBhY2Nlc3MgYmFjayB0byB2aXNpdG9yICIsImNvYnJvd3Npbmdfc3RvcF9yZXF1ZXN0IjoiRW5kIHlvdXIgc2NyZWVuc2hhcmluZyBzZXNzaW9uIiwiY29icm93c2luZ19yZXF1ZXN0X2NvbnRyb2xfcmVqZWN0ZWQiOiJZb3VyIHJlcXVlc3Qgd2FzIGRlY2xpbmVkIiwiY29icm93c2luZ19jYW5jZWxfdmlzaXRvcl9tc2ciOiJTY3JlZW5zaGFyaW5nIGlzIGN1cnJlbnRseSB1bmF2YWlsYWJsZSIsImNvYnJvd3NpbmdfYWdlbnRfcmVxdWVzdF9jb250cm9sIjoiQWdlbnQgaXMgcmVxdWVzdGluZyBhY2Nlc3MgdG8geW91ciBzY3JlZW4iLCJjYl92aWV3aW5nX3NjcmVlbl92aSI6IkFnZW50IGNhbiB2aWV3IHlvdXIgc2NyZWVuICIsImNiX2NvbnRyb2xsaW5nX3NjcmVlbl92aSI6IkFnZW50IGhhcyBhY2Nlc3MgdG8geW91ciBzY3JlZW4gIiwiY2Jfdmlld19tb2RlX3N1YnRleHQiOiJZb3VyIGFjY2VzcyB0byB0aGUgc2NyZWVuIGhhcyBiZWVuIHdpdGhkcmF3biAiLCJjYl9naXZlX2NvbnRyb2xfdmkiOiJBbGxvdyBhZ2VudCB0byBhY2Nlc3MgeW91ciBzY3JlZW4gIiwiY2JfdmlzaXRvcl9zZXNzaW9uX3JlcXVlc3QiOiJBZ2VudCBzZWVrcyBhY2Nlc3MgdG8geW91ciBzY3JlZW4gIn19';
        // },
        jqcookieSnippet: function(){
		/*!
		 * jQuery Cookie Plugin v1.4.1
		 * https://github.com/carhartl/jquery-cookie
		 *
		 * Copyright 2013 Klaus Hartl
		 * Released under the MIT license
		 */
		(function (factory) {
			if (typeof define === 'function' && define.amd) {
				// AMD
				define(['jquery'], factory);
			} else if (typeof exports === 'object') {
				// CommonJS
				factory(require('jquery'));
			} else {
				// Browser globals
				factory(jQuery);
			}
		}(function ($) {

			var pluses = /\+/g;

			function encode(s) {
				return config.raw ? s : encodeURIComponent(s);
			}

			function decode(s) {
				return config.raw ? s : decodeURIComponent(s);
			}

			function stringifyCookieValue(value) {
				return encode(config.json ? JSON.stringify(value) : String(value));
			}

			function parseCookieValue(s) {
				if (s.indexOf('"') === 0) {
					// This is a quoted cookie as according to RFC2068, unescape...
					s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
				}

				try {
					// Replace server-side written pluses with spaces.
					// If we can't decode the cookie, ignore it, it's unusable.
					// If we can't parse the cookie, ignore it, it's unusable.
					s = decodeURIComponent(s.replace(pluses, ' '));
					return config.json ? JSON.parse(s) : s;
				} catch(e) {}
			}

			function read(s, converter) {
				var value = config.raw ? s : parseCookieValue(s);
				return $.isFunction(converter) ? converter(value) : value;
			}

			var config = $.cookie = function (key, value, options) {

				// Write

				if (value !== undefined && !$.isFunction(value)) {
					options = $.extend({}, config.defaults, options);

					if (typeof options.expires === 'number') {
						var days = options.expires, t = options.expires = new Date();
						t.setTime(+t + days * 864e+5);
					}

					return (document.cookie = [
						encode(key), '=', stringifyCookieValue(value),
						options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
						options.path    ? '; path=' + options.path : '',
						options.domain  ? '; domain=' + options.domain : '',
						options.secure  ? '; secure' : ''
					].join(''));
				}

				// Read

				var result = key ? undefined : {};

				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling $.cookie().
				var cookies = document.cookie ? document.cookie.split('; ') : [];

				for (var i = 0, l = cookies.length; i < l; i++) {
					var parts = cookies[i].split('=');
					var name = decode(parts.shift());
					var cookie = parts.join('=');

					if (key && key === name) {
						// If second argument (value) is a function it's a converter...
						result = read(cookie, value);
						break;
					}

					// Prevent storing a cookie that we couldn't decode.
					if (!key && (cookie = read(cookie)) !== undefined) {
						result[name] = cookie;
					}
				}

				return result;
			};

			config.defaults = {};

			$.removeCookie = function (key, options) {
				if ($.cookie(key) === undefined) {
					return false;
				}

				// Must not alter options, thus extending a fresh object...
				$.cookie(key, '', $.extend({}, options, { expires: -1 }));
				return !$.cookie(key);
			};

		}));

        },
        cookieSnippet: function() {
            $(document).ready(function(){
                var cookieName = '_0';
                if (typeof jQuery.cookie != "undefined" && !jQuery.cookie(cookieName)) {
                    var clientId = (new Date().valueOf()).toString(16) + '-' + Math.floor(Math.random() * Math.pow(2, 32)).toString(16);
                    var date = new Date();
                    var expires = new Date(date.setFullYear(date.getFullYear() + 5));
                    var domain = window.location.hostname;
                        domain = domain.substring(domain.lastIndexOf(".", domain.lastIndexOf(".") - 1) + 1);
                    document.cookie = cookieName + '=' + clientId + '; domain='+domain+'; path=/;expires=' + expires;
                    // Square Pixel
                    var $imgTag = $('<img id="client-id-img" />');
                    $imgTag.attr('src','https://www.chargebee.com/static/resources/square.png');
                    $('body').append($imgTag);
                }
            });
        },
        adwordcookieSnippet: function() {
            $(document).ready(function() {
                function getParameterByName(name) {
                    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                        results = regex.exec(location.search);
                    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                }
                var adcampaignid = getParameterByName('campaignid');
                var adkeyword = getParameterByName('keyword');

                if(adcampaignid && adkeyword) {
                    // add it in cookie
                    $.cookie('keyword', adkeyword, { expires: 365, path: '/' } );
                    $.cookie('campaignid', adcampaignid, { expires: 365, path: '/' });
                }
            });
        },
        trialSignupSnippet: function() {
            $(document).ready(function() {
                $("div.text-danger,div.text-success").remove();
                // $('.chargebee-signup').on('submit', function() {
                //     return doSignUp($(this));
                // });
                $('#user\\\.email-err').text('');
                $('#user\\\.email-success').text('');
                $('[data-users-create-new="true"]').on('submit', function(){
                    return doSignUpNew($(this));
                });
            });
        },
        // reMarketingSnippet: function(){
        //     $(window).one('scroll',function() {
        //         setTimeout(function() {
        //             var rem_JS = document.createElement('script');
        //             rem_JS.type = 'text/javascript';
        //             rem_JS.src = 'https://www.googleadservices.com/pagead/conversion.js';
        //             document.getElementsByTagName('head')[0].appendChild(rem_JS);
        //         }, 1000)
        //     });
        // },
        // fbPixelSnippet: function() {
        //     $(window).one('scroll',function() {
        //         setTimeout(function() {
        //             !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','//connect.facebook.net/en_US/fbevents.js');fbq('init', '484464388394440');fbq('track', "PageView");
        //         }, 1000)
        //     });
        // },
        // bingSnippet: function(){
        //     $(window).one('scroll',function() {
        //         setTimeout(function() {
        //             (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"5222604"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
        //         }, 1000)
        //     });
        // },
        // mixpanelSnippet: function(){
        //     $(window).one('scroll',function() {
        //         setTimeout(function() {
        //             (function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,
        //             0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
        //             for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);
        //             mixpanel.init("4ab4ad687107468d04e8dd80fe9f77ad");
        //         }, 1000)
        //     });
        // }
    };

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // function createCookie(name, value, days) {
    //     if (days) {
    //         var date = new Date();
    //         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    //         var expires = "; expires=" + date.toGMTString();
    //     }
    //     else {
    //         var expires = "";
    //     }
    //     document.cookie = name + "=" + value + expires + "; path=/";
    // }

    function parseUtmz() {
        var utmz = readCookie('__utmz');
        if (utmz == null) {
            return null;
        }
        var pairs = utmz.split('.').slice(4).join('.').split('|');
        var gaParams = {};
        for (var i = 0; i < pairs.length; i++) {
            var temp = pairs[i].split('=');
            gaParams[temp[0]] = temp[1];
        }
        return gaParams;
    }

    // function sendGAInfo() {
    //     var gaParams = parseUtmz();
    //     if (gaParams == null) {
    //         return;
    //     }
    //     var url = "/analytics/info.txt?";
    //     for (var key in gaParams) {
    //         url += encodeURIComponent(key) + "=" + encodeURIComponent(gaParams[key]) + "&";
    //     }
    //     $.ajax({url: url});
    // }

    function doSignUpNew(frm) {
        var emailFieldErr = $(frm).find('#user\\\.email-err');
        var successText = $(frm).find('#user\\\.email-success');
        var emailField = $(frm).find('#user\\\.email');
        var submitBtn = frm.find('#sign-up-submit');
        if (submitBtn.attr("disabled") == "disabled") {
            return false;
        }
        $(emailFieldErr).text('');
        var hasError = false;
        var emailReg = /[a-zA-Z0-9!#$%&'*+//=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+//=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;
        var emailaddressVal = emailField.val();
        if (emailaddressVal == '') {
            $(emailFieldErr).html('Please enter your business email. We don&rsquo;t spam.');
            hasError = true;
        } else if (emailReg.test(emailaddressVal)) {
            if(isFreeEmail(emailaddressVal.toLowerCase())){
                $(emailFieldErr).html("Please enter your business email. Don’t have one?<br><a href=\"/schedule-a-demo/?ref=signup\">Schedule a demo</a> or <a id=\"email_validation\" href=\"javascript:void(0)\">Chat with us now</a>");
                $("#user\\\.email").blur();
                $("#email_validation").on('click', function(){
                    drift.api.startInteraction({ interactionId: 111909 });
                });
                hasError = true;
            }else{
                $(emailFieldErr).text('');
                hasError = false;
            }
        } else {
            $(emailFieldErr).html("Please enter your business email. Don’t have one?<br><a href=\"/schedule-a-demo/?ref=signup\">Schedule a demo</a> or <a id=\"email_validation\" href=\"javascript:void(0)\">Chat with us now</a>");
            $("#user\\\.email").blur();
            $("#email_validation").on('click', function(){
                drift.api.startInteraction({ interactionId: 111909 });
            });
            hasError = true;
        }

        if (hasError == true) {
            return false;
        }
        
        // Disable the submit button
        submitBtn.attr("disabled", "disabled");

        // Show the loading image
        submitBtn.val('Signing up...');

        var successText = $(frm).find('#user\\\.email-success');
        window.setTimeout(function() {
            emailFieldErr.text('');
            successText.text('Takes couple of seconds, as we set up your account.');
        }, 100);

        window.setTimeout(function() {
            emailFieldErr.text('');
            successText.text('Almost there. Setting up your sample data.');
        }, 2100);
        addGaAttribs(frm);
        return true;
    }

    // function doSignUp(frm) {
    //     var formGroup = frm.find(".form-group");
    //     var trialSubmit = frm.find(".trial-submit");
    //     if (trialSubmit.attr("disabled") == "disabled") {
    //         return false;
    //     }
    //     frm.find("div.text-danger").remove();
    //     var hasError = false;
    //     //var emailReg = /[a-z0-9!#$%&'*+//=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+//=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //     var emailReg = /[a-zA-Z0-9!#$%&'*+//=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+//=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;
    //     var trialInput = frm.find(".trial-input");
    //     var emailaddressVal = trialInput.val();
    //     if (emailaddressVal == '') {
    //         formGroup.after('<div class="text-danger"> Please enter a valid email. We don&rsquo;t spam. </div>');
    //         hasError = true;
    //     } else if (!emailReg.test(emailaddressVal)) {
    //         formGroup.after('<div class="text-danger"> Please enter a valid email address.</div>');
    //         hasError = true;
    //     }

    //     if (hasError == true) {
    //         return false;
    //     }

    //     // Disable the submit button

    //     trialSubmit.attr("disabled", "disabled");

    //     // Show the loading image
    //     trialSubmit.val('Signing up...');

    //     window.setTimeout(function() {
    //         frm.find("div.text-danger,div.text-success").remove();
    //         formGroup.after('<div class="text-success">Takes couple of seconds, as we set up your account.</div>')
    //     }, 100);

    //     window.setTimeout(function() {
    //         frm.find("div.text-danger,div.text-success").remove();
    //         formGroup.after('<div class="text-success">Almost there. Setting up your sample data.</div>')
    //     }, 2100);
    //     addGaAttribs(frm);
    //     return true;
    // }

    function addGaAttribs(frm) {
        if (frm.attr("ga_params") == "added") {
            return;
        }
        var gaParams = parseUtmz();
        if (gaParams == null) {
            return;
        }
        for (var key in gaParams) {
            $('<input />').attr('type', 'hidden')
                    .attr('name', "ga_" + key)
                    .attr('value', gaParams[key])
                    .appendTo(frm);
        }
        frm.attr("ga_params", "added");
    }

    // function addVwo() {
    //     var path = location.pathname;
    //     if (dirMatch(path, "/docs")) {
    //         tpJsConfig.snippets.push("vwo");
    //     }
    // }

    // function dirMatch(path, dirPath) {
    //     return (path === dirPath)
    //             || (path === dirPath + "/index.html")
    //             || (path === dirPath + "/");
    // }

    function callSnippet(snippetName) {
        try {
            var func = snippetFuncs[snippetName + "Snippet"];
            if (typeof func === "function") {
                logInfo("calling " + snippetName + "Snippet");
                var start = new Date().getTime();
                func();
                logInfo("Time taken for " + snippetName + " is : " + (new Date().getTime() - start));
            } else {
                logInfo("Snippet " + snippetName + " not present");
            }
        } catch (err) {
            logInfo("Error when invoking the snippet " + snippetName);
            logInfo(err);
        }
    }

    function logInfo(msg) {
        if (!debugEnabled || !window.console) {
            return;
        }
        console.log(msg);
    }

    return {
        init: function(grpName) {
            var snippets = snippetGrps[grpName];
            if (snippets == null) {
                logInfo("Unknown group " + grpName);
                return;
            }
            tpJsConfig = {snippets: snippets};
            // addVwo();
            for (var idx = 0; idx < tpJsConfig.snippets.length; idx++) {
                callSnippet(tpJsConfig.snippets[idx]);
            }
        }
    }

})();
