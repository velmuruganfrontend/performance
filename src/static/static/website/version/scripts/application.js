function CCPopUp(SEALURL, cId){
    window.open(""+SEALURL+"index.php?page=showCert&cId="+cId+"", "win",'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=700,height=585');
    self.name = "mainWin";
}
$(document).ready(function() {
    //
    // Get website from tpSnippet js
    //
    TpJsSnippet.init("website");
    
    function initiateHeader(){
        //
        // Update customer count
        //
        var totalCustomer = '7000+';
        if($('.totalCustomer').length){
            $('.totalCustomer').replaceWith(totalCustomer);
        }


        //
        // Header Onhover fade effect
        //
        $('.ch-nav__item').hover(function(){
            $('.ch-nav__item').not(this).addClass('ch-nav__item--hovered');
        },function(){
            $('.ch-nav__item').removeClass('ch-nav__item--hovered');
        });


        //
        // Header On Hover to open navigation
        //
        var lHeaderBg = $('#ch-js-header').find('.l-header__bg');
        var headerHeight = lHeaderBg.height();
        lHeaderBg.css('height',headerHeight+'px');
        $("[data-ch-dd]").hover(function() {
            var hoverEle = $(this);
            var dropdownEle = hoverEle.find('.ch-dropdown');
            var headerEle = hoverEle.parents('header');
            headerEle.addClass('l-header--opened');
            var leftMenuActive = hoverEle.prevAll('.find-animation').length
            var rightMenuActive = hoverEle.nextAll('.find-animation').length

            if(leftMenuActive != 0){
                dropdownEle.addClass('headFadeInRight')
            }else if(rightMenuActive != 0){
                dropdownEle.addClass('headFadeInLeft')
            }else{
                dropdownEle.addClass('headFadeInRight')
            }
            $('[data-ch-dd]').removeClass('find-animation');
            hoverEle.addClass('find-animation');
            var dropdownHeight = dropdownEle[0].offsetHeight + headerHeight +'px';
            headerEle.find('.l-header__bg').css({
                'height': dropdownHeight,
                'background': '#f9f9f9'
            });
            headerEle.find('.l-header__overlay').css({
                'display': 'block',
                'opacity': 1
            });
            hoverEle.addClass('ch-nav__item--active');
        },function(){
            $(this).parents('header').find('.headAnimate').removeClass('headFadeInRight headFadeInLeft');
            $(this).removeClass('ch-nav__item--active');
            $(this).parents('header').find('.l-header__bg').css({
                'height': headerHeight +'px',
                'background': 'transparent'
            })
            $('.l-header__overlay').css({
                'display': 'none',
                'opacity': 0
            });
            $(this).parents('header').removeClass("l-header--opened");
        });

        function refreshHeader(){
            if($('.ch-nav__item--active').length){
                $('header').find('.headAnimate').removeClass('headFadeInRight headFadeInLeft');
                $('[data-ch-dd]').removeClass('ch-nav__item--active');
                $('.l-header__bg').removeAttr("style");
                $('.l-header__overlay').css({
                    'display': 'none',
                    'opacity': 0
                });
                $('header').removeClass("l-header--opened");
                $('.ch-nav__item--hovered').removeClass('ch-nav__item--hovered');
            }
        }
        //
        // Mobile Menu
        //
        $('#ch-js-burger').on('click', function(){
            $('.ch-header__overlay--mobile').css('display','block');
            $('.ch-header__modal').css({
                'opacity': '1',
                'transform': 'scale(1)',
                'pointer-events': 'initial'
            });
            $('.ch-header__sticky').css({
                'opacity': '1',
                'margin-bottom': '0'
            });
            $(window).scrollTop(1);
            $('body').addClass('hideChatbot')
        })
        $('#ch-js-close,.ch-header__overlay--mobile,a[href="#request-callback"]').on('click', function(){
            $('.ch-header__overlay--mobile').css('display','none');
            $('.ch-header__modal').css({
                'transform': 'scale(0.9)',
                'opacity': '0',
                'pointer-events': 'none'
            });
            $('.ch-header__sticky').css({
                'opacity': '0.5',
                'margin-bottom': '-100%'
            });
            $('body').removeClass('hideChatbot')
        })
        //
        // Onscroll Hide Header & Hovered Effect
        //
        lastScroll = 0;
        $(window).on('scroll',function() {
            refreshHeader()
            // I don't know why this?
            var scroll = $(window).scrollTop();
            if(lastScroll > scroll && scroll > 250) {
                $(".header-fixed").addClass("headsup");
            } else {
                $(".header-fixed").removeClass("headsup");
                $(".header-fixed .dropdown").removeClass("open");
            }
            lastScroll = scroll;
        });
        $(window).on('orientationchange, resize', function(){
            refreshHeader()
        })

        //
        // On scroll fix the header.
        //
        if($('#ch-js-header').length){
            var lastScrolledVal = 0;
            var cloned = $('#ch-js-header').clone(true);
            $(cloned).attr('id', 'ch-js-header-cloned').addClass('l-header--fixed').removeClass('l-header--invert');
            $('body').append(cloned);
            
            var lHeaderFixedBG = $('.l-header--fixed').find('.l-header__bg');
            lHeaderFixedBG.removeAttr("style");

            $(window).on('scroll',function(){
                var scroll = $(window).scrollTop();
                if(scroll < lastScrolledVal){
                    if(scroll > $(window).height()){
                        headerHeight = lHeaderFixedBG.height();
                        lHeaderFixedBG.css('height',headerHeight+'px');
                        $('.l-header--fixed').css('top','0px');
                    }else{
                        $('.l-header--fixed').css('top','-100px');
                        headerHeight = lHeaderBg.height();
                    }
                }else{
                    $('.l-header--fixed').css('top','-100px');
                    headerHeight = lHeaderBg.height();
                }
                lastScrolledVal = scroll;
            });
        }
    }
    $(window).on('load', function(){
        initiateHeader()
        if(window.location.hash) {
            var hashTag = window.location.hash;
            var hashTagText = window.location.hash.substr(1);
            var regexp = /^[a-zA-Z0-9-_]+$/;
            if (hashTagText.search(regexp) == -1)
            {
                //console.log('Invalid has tag..');
            }
            else
            {
                if($(hashTag).length){
                    $('html, body').animate({
                        scrollTop: $(hashTag).offset().top - 50
                    }, 50, 'swing');
                }
            }
        }
    })

    // Autofocus for modal input
    $('.modal').on('shown.bs.modal', function() {
        $(this).find('[autofocus]').focus();
    });

    // Latest Blog Post in the footer
    var recentBlog = "/blog/recent.json";

    $.getJSON(recentBlog, function (json) {
        $('.cf-blog__title').html(json.title);
        $('.cf-blog__figure').attr("src", json.image_thumbnail);

        // Caching the link jquery object
        var $recentBloglink = $('a.cf-blog__container');

        // Set the links properties
        $recentBloglink.prop({
            href: json.url,
            title: 'Click to open in a new tab'
        }).click(function (e) {
            e.preventDefault();
            window.open(this.href, '_blank');
        });
    });

    $( ".sign-in" ).click(function() {
        ga('send', 'event', 'website', 'click', 'app-sign-in');
    });

    $( ".button-signup" ).click(function() {
        ga('send', 'event', 'website', 'signup-intent', 'button-signup');
    });

    $( ".footer-button-signup" ).click(function() {
        ga('send', 'event', 'website', 'signup-intent', 'footer-button-signup');
    });

    $( "#ch-js-product" ).click(function() {
        ga('send', 'event', 'website', 'explore-intent', 'product-dropdown');
    });

    $( ".nav-customers" ).click(function() {
        ga('send', 'event', 'website', 'explore-intent', 'nav-customers');
    });

    $( ".l-footer a" ).click(function() {
        var flink = $(this).attr('href').replace(/\//g,"");
        ga('send', 'event', 'website', 'footer-links', flink);
    });

    $( ".l-header a" ).click(function() {
        var nlink = $(this).attr('href').replace(/\//g,"");
        ga('send', 'event', 'website', 'nav-links', nlink);
    });



    var uri = $(location).attr("pathname");

    if (typeof(Storage) !== "undefined") {
        function checkParams(){
            return /[?&]/g.test(location.search);
        }

        if (checkParams()) {
            function getParameterByName(name) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                    results = regex.exec(location.search);
                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            // Give the URL parameters variable names
            var source = getParameterByName('utm_source');
            var medium = getParameterByName('utm_medium');
            var campaign = getParameterByName('utm_campaign');
            var adgroupid = getParameterByName('adgroupid');
            var utm_term = getParameterByName('utm_term');
            var utm_content = getParameterByName('utm_content');
            var gclid = getParameterByName('gclid');
            if (source) {
                localStorage.setItem('source', source);
            }
            if (medium) {
                localStorage.setItem('medium', medium);
            }
            if (campaign) {
                localStorage.setItem('campaign', campaign);
            }
            if (adgroupid) {
                localStorage.setItem('adgroupid', adgroupid);
            }
            if (utm_term) {
                localStorage.setItem('utm_term', utm_term);
            }
            if (utm_content) {
                localStorage.setItem('utm_content', utm_content);
            }
            if (gclid) {
                localStorage.setItem('gclid', gclid);
            }
        }
    }

    if (uri == '/press/' || uri == '/security/' || uri == '/about/' || uri == '/company/terms/' || uri == '/privacy/' || uri == '/careers/' || uri == '/sitemap/' || uri == '/affiliates/assets/' || uri == '/affiliates/' || uri == '/resources/'){
        function fd_checker(){
            if ( $('#fc_chat_layout, #lc_chat_layout').length == 0) {
                setTimeout(fd_checker, 10);
            }
        else {
                $( "#fc_chat_layout, #lc_chat_layout" ).hide();
            }
        }
        setTimeout(fd_checker, 10);
        $( "#fc_chat_layout, #lc_chat_layout" ).hide();
    }

    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.

        var ip_address = sessionStorage.getItem("ip_add");
        if (!ip_address) {
            $.getJSON("https://api.ipify.org?format=json", function (data) {
                sessionStorage.setItem("ip_add", data.ip);
                ip_address = sessionStorage.getItem("ip_add");
            });
        }

        if (localStorage.getItem('adgroupid', adgroupid)) {
            sessionStorage.setItem('tysource', 'google');
            sessionStorage.setItem('tymedium', 'adwords');
        }

        var tysource = sessionStorage.getItem("tysource");
        var tymedium = sessionStorage.getItem("tymedium");

        if (!tysource && !tymedium) {
            // source & medium doesn't exist
            function parseUtmz() {
                var utmz = $.cookie('__utmz');
                if (!utmz) {
                    // return null;
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
                }
                var pairs = utmz ? utmz.split('.').slice(4).join('.').split('|') : "";

                var gaParams = {};
                for (var i = 0; i < pairs.length; i++) {
                    var temp = pairs[i].split('=');
                    gaParams[temp[0]] = temp[1];
                }
                return gaParams;
            };

            var gaParams = parseUtmz();
            if (gaParams == null) {
                return;
            }

            function gaParamsval(source){
                return gaParams[source];
            }

            var tysourceval = gaParamsval('utmcsr');
            var tymediumval = gaParamsval('utmcmd');

            if (tysourceval && tymediumval) {
                sessionStorage.setItem('tysource', tysourceval);
                sessionStorage.setItem('tymedium', tymediumval);
                tysource = tysourceval;
                tymedium = tymediumval;
            }
        }

        function setFinentUrl(finent){
            var hubspotutk_val = $.cookie('hubspotutk');
            if (ip_address || tysource || tymedium || (hubspotutk_val && hubspotutk_val !='')) {
                finent = finent + '?';
                if(ip_address){
                    finent += 'ip_address=' + ip_address;
                }
                if(tysource && tymedium){
                    finent += '&source=' + tysource + '&medium=' + tymedium ;
                }
                //var campaignId = $.cookie('campaignid');
                var campaignName = localStorage.getItem('campaign');
                var utm_term = localStorage.getItem('utm_term');
                var keyword = $.cookie('keyword');
                if(campaignName && keyword){
                    finent += '&campaign_id=' + campaignName + '&keyword=' + keyword ;
                }
                if(utm_term){
                    finent += '&utm_term=' + utm_term;
                }
                if(hubspotutk_val && hubspotutk_val !=''){
                    finent += '&hs_cookie=' + hubspotutk_val;
                }
                $("div.typeform-widget").attr("data-url", finent);
            }
        }

        function setCalendlyUrl(finent){
            var hubspotutk_val = $.cookie('hubspotutk');
            if (ip_address || tysource || tymedium || (hubspotutk_val && hubspotutk_val !='')) {
                finent = finent + '?';
                if(ip_address){
                    finent += 'utm_content=' + ip_address;
                }
                if(tysource && tymedium){
                    finent += '&utm_source=' + tysource + '&utm_medium=' + tymedium ;
                }
                
                var campaignName = localStorage.getItem('campaign');
                var utm_term = localStorage.getItem('utm_term');
                if(uri == '/signup-thank-you/' || uri == '/signup-thank-you'){
                    utm_term = 'calendly-thankyou';
                    finent = finent.replace('schedule-demo', 'schedule-a-demo');
                    var user_email_val = sessionStorage.getItem("user_email");
                    var user_mobile_val = sessionStorage.getItem("user_mobile");
                    
                    // var revealData_name = sessionStorage.getItem("revealData_name");
                    // var revealData_tags = sessionStorage.getItem("revealData_tags");
                    // var revealData_employeesRange = sessionStorage.getItem("revealData_employeesRange");
                    // var revealData_employees = sessionStorage.getItem("revealData_employees");
                    // var revealData_estimatedAnnualRevenue = sessionStorage.getItem("revealData_estimatedAnnualRevenue");
                    // var revealData_country = sessionStorage.getItem("revealData_country");
                    
                    if(user_email_val){
                        finent += '&email=' + user_email_val;
                        sessionStorage.removeItem("user_email");
                    }
                    if(user_mobile_val){
                        finent += '&phone=' + user_mobile_val;
                        sessionStorage.removeItem("user_mobile");
                    }
                    // if(revealData_name){
                    //     finent += '&clearbit_reveal_company_name=' + revealData_name;
                    //     sessionStorage.removeItem("revealData_name");
                    // }
                    // if(revealData_tags){
                    //     finent += '&clearbit_reveal_company_tags=' + revealData_tags;
                    //     sessionStorage.removeItem("revealData_tags");
                    // }
                    // if(revealData_employeesRange){
                    //     finent += '&clearbit_reveal_company_employee_range=' + revealData_employeesRange;
                    //     sessionStorage.removeItem("revealData_employeesRange");
                    // }
                    // if(revealData_employees){
                    //     finent += '&clearbit_reveal_total_employees=' + revealData_employees;
                    //     sessionStorage.removeItem("revealData_employees");
                    // }
                    // if(revealData_estimatedAnnualRevenue){
                    //     finent += '&clearbit_reveal_company_estimated_annual_revenue=' + revealData_estimatedAnnualRevenue;
                    //     sessionStorage.removeItem("revealData_estimatedAnnualRevenue");
                    // }
                    // if(revealData_country){
                    //     finent += '&clearbit_reveal_company_country=' + revealData_country;
                    //     sessionStorage.removeItem("revealData_country");
                    // }
                }
                if(campaignName){
                    finent += '&utm_campaign=' + campaignName;
                }
                if(utm_term){
                    finent += '&utm_term=' + utm_term;
                }
                if(hubspotutk_val && hubspotutk_val !=''){
                    finent += '&salesforce_uuid=' + hubspotutk_val;
                }
                    
                if($("div.calendly-inline-widget").length){
                    $('<iframe src="'+finent+'" frameborder="0" width="100%" height="100%"></iframe>').appendTo('div.calendly-inline-widget');
                }
            }
        }

        if(uri == '/enterprise/' || uri == '/enterprise'){
            setFinentUrl('https://chargebee.typeform.com/to/wEJipg');
        }
        if($("div.calendly-inline-widget").length){
            var queURL = "https://chargebee.chilipiper.com/book/sdrs-queue-thank-you-page";
            
            // var usaCountryList = ['United States','Canada','Puerto Rico','Mexico','Costa Rica','Panama','Dominian Republic','Trinidad and Tobago','Jamaica','Cuba','Brazil','Colombia','Chile','Peru','Argentina','Venezuela','Bolivia','Paraguay','Uruguay'];
            // var euroCountryList = ['Serbia','France','United Kingdom','Italy','Sweden','Russian Federation','Russia','Greece','Germany','Denmark','Spain','Netherland','Poland','Belgium','Norway','Cyprus','Ukraine','Ireland','Lithuania','Latvia','Malta','Portugal','Romania','Belraus','Bulgaria','Finland','Albania','Switzerland','Slovenia','Austria','Czech Republic','Turkey','Hungary','Georgia','Estonia','Macedonia','Aland Islands','Moldova','Croatia','Slovakia','Bosnia and Herzegovina','Armenia','Andorra'];
            // var apacCountryList = ['India','Singapore','Philipines','Bangaladesh','Pakistan','Japan','Taiwan Province of China','Taiwan','Kuwait','China','Thailand','Malaysia','Hong Kong','Lebanon','Sri Lanka','Indonesia','Vietnam','Cambodia','United Arab Emirates','South Korea','Israel','Palestinian Territories','Palestine','Myanmar','Bahrain','Nepal','Jordan','Saudi Arabia','Australia','New Zealand','Marshall Islands','Nigeria','South Africa','Kenya','Egypt','Rwanda','Ghana','Morocco','Tunisia','Zimbabwe','Algeria','Uganda','Lesotho'];
            
            // var geoCountry = sessionStorage.getItem("geoCountry") ? sessionStorage.getItem("geoCountry") : '';
            
            // if(usaCountryList.indexOf(''+geoCountry+'') > -1){
            //     queURL = "https://chargebee.chilipiper.com/book/usa-queue"
            // }
            
            // if(euroCountryList.indexOf(''+geoCountry+'') > -1){
            //     queURL = "https://chargebee.chilipiper.com/book/eu-queue-sad-sdrs"
            // }
            
            // if(apacCountryList.indexOf(''+geoCountry+'') > -1){
            //     queURL = "https://chargebee.chilipiper.com/book/apac-queue-sad-sdrs"
            // }

            setCalendlyUrl(queURL);
        }
        if (uri == '/nonprofit/' || uri == '/nonprofit') {
            setFinentUrl('https://chargebee.typeform.com/to/Yj7gVP');
        }
        if (uri == '/pricing-enquiry/' || uri == '/pricing-enquiry') {
            setFinentUrl('https://chargebee.typeform.com/to/XCUAEX');
        }
        if (uri == '/schedule-a-call/' || uri == '/schedule-a-call') {
            setFinentUrl('https://chargebee.typeform.com/to/PWNukp');
        }
    }


    //Features Page click to scroll
    $('#cb-feat-learnmore').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });


    var initAfterPjax = function() {
        if($('.blue-msg-box').length){
            blueBox = $(".blue-msg-box");
            blueBoxOffset = $(".blue-msg-box").offset().top;
            BlueBoxCssTop = parseInt($(".blue-msg-box").css("top"));
        }
        var pmenu = $("#p-menu-fixed");
        var pmenuOffset = $("#p-menu-fixed").offset();
        $(document).on('scroll', function() {
            var scrollTop = $(this).scrollTop();
            if ($(this).scrollTop() > (pmenuOffset.top + 300) && $(this).scrollTop() < ($('#cb-affix-footer').offset().top - 300)) {
                if (!$(pmenu).hasClass("p-menu--mobile")){
                    $(pmenu).addClass("p-menu--fixed");
                }
            }else{
                if ($(pmenu).hasClass("p-menu--fixed")) {
                    $(pmenu).removeClass("p-menu--fixed");
                }
            }

            //For rellax js parallax
            // var rellax = new Rellax('.rellax');

            if($(".blue-msg-box").length){
                if (isElementPartiallyInViewport($(".blue-msg-box"))) {
                    $(blueBox).css({
                        top: BlueBoxCssTop + Math.round((blueBoxOffset - scrollTop) * 0.08) + "px"
                    });
                }
            }
        });
        $("#show-menu").click(function() {
            $(".gaussian").addClass("add-blur");
            $(".mobile-menu--expanded").css({
                display: 'flex',
                width: '80%'
            });
            setTimeout(function() {
                $(".mobile-menu--expanded").css({
                    opacity: 1,
                    width: '90%',
                });
            }, 10)
        })
        function hideMobileNav() {
            $(".gaussian").removeClass("add-blur");
            $(".mobile-menu--expanded").css({
                opacity: 0
            });
            setTimeout(function() {
                $(".mobile-menu--expanded").css({
                    display: 'none',
                });
            }, 750)
        }

        $("#close-mobile-menu").click(function() {
            hideMobileNav();
        })
        $(".menu-items").click(function() {
            $("#selected-menu").html($(this).html());
            hideMobileNav();
        })
        if($(".cp-hero__highlight").length){
            setTimeout(function() {
                $(".cp-hero__highlight").addClass("cp-hero__highlight--active")
            }, 750)
        }
        //load ga script based on the page
        ga('send', 'pageview', window.location.pathname);
    }

    var hightLightTabSection = function(index) {
        var tabList = $(".p-menu__tab");
        var selectedTab = $($(".p-menu__tab")[index]);
        $(".p-menu__tab--active").removeClass("p-menu__tab--active");
        $(selectedTab).addClass("p-menu__tab--active");
    }

    var parseContentsAndReplace = function(content) {
        var $html = $($.parseHTML(content));
        var $carousel = $html.find("#cp-hero");
        var $navs = $html.find(".cp-navs");
        var $mainContent = $html.find("#main-content");
        $("#cp-hero").html($carousel.html());
        $(".cp-navs").html($navs.html());
        $("#main-content").html($mainContent.html());
        hightLightTabSection($html.find(".p-menu__tab--active").index());
        $('title').text($html.filter('title').text());
        history.replaceState({tabPjax: true}, $html.filter('title').text(), window.location.href);
        //console.log($('.p-menu--fixed').size())
        if($(window).scrollTop() > $("#p-menu-fixed").offset().top + 300) {
            $('html, body').animate({
                scrollTop: $(".cp-navs").offset().top - 100
            }, 500);
        }
    }

    var loadPjaxPage = function(url) {
        $.get(url, function(content) {
            parseContentsAndReplace(content);
            history.pushState({tabPjax: true}, '', url);
            hideLoader();
            initAfterPjax();
            if(typeof PR != "undefined") {
                PR.prettyPrint();
            }
        });
    }

    var showLoader = function() {
        $("#loading-line").show();
    }

    var hideLoader = function() {
        $("#loading-line").hide();
    }

    $(window).on("popstate", function(e) {
        if (e.originalEvent.state !== null && e.originalEvent.state.tabPjax) {
            showLoader();
            loadPjaxPage(location.href);
        }
    });

    $(document).on("click", "a[pjax]", function() {
        var href = $(this).attr("href");
        if(history.state == null) {
            history.replaceState({tabPjax: true}, document.title , window.location.href);
        }
        if(this.classList.contains(".p-menu__tab")) {
            $(".p-menu__tab--active").removeClass("p-menu__tab--active");
            $(this).addClass("p-menu__tab--active");
        }
        showLoader();
        loadPjaxPage(href);
        return false;
    });


    //
    // Header logo right click to open asset
    //
    //modal popup
    var MODAL_TEMPLATE = {
        popupTemplate:["<div class='ch-modal' id='ch-modal' style='display:none'>",
            "<div class='ch-modal__overlay' id='ch-modal-overlay'></div>",
            "<div class='ch-modal__body' id='ch-modal-body'>",
            "<div class='ch-modal__icon'><svg width='57' height='60'><use xlink:href='#chargebee-icon-download'></use></svg></div>",
            "<div class='ch-modal__content'>",
            "<div class='ch-modal__desc'>Download our logos, Zipped in<br> EPS and PNG formats.</div>",
            "<div class='ch-modal__actions'>",
            "<a href='/static/resources/downloads/Chargebee Logo kit.zip' download class='ch-modal__action'>Download Logos</a>",
            "</div>",
            "</div>",
            "<div class='ch-modal__close' id='ch-modal-close'>&times;</div>",
            "</div>",
            "</div>"
        ]
    }
    var closeModal = function(){
        $(body).css("overflow","visible");
        $("#ch-modal").removeClass("ch-modal--active");
    }
    var modal = MODAL_TEMPLATE.popupTemplate.join(" ");
    var body = document.body;
    body.appendChild($.parseHTML(modal)[0]);
    $('[data-ch-js-asset]').bind('contextmenu', function(e) {
        //ch-nav__logo
        e.preventDefault();
        $("#ch-modal").addClass("ch-modal--active");
        $(body).css("overflow","hidden");
    });
    $("#ch-modal-close").click(function() {
        closeModal();
    });
    $(document).keyup(function(e) {
      if (e.keyCode === 27){
        closeModal();
      }
    });
    $("#ch-modal-overlay").click(function() {
        closeModal();
    });
    if($(window).width() > 991){
        $("img[data-src]:first").attr('src',$("img[data-src]:first").attr('data-src')).addClass('fancy').removeAttr('data-src');
    }
    $(window).one('scroll',function() {
        // console.log(1)
        $("img[data-src]").each(function(){
            $(this).attr('src',$(this).attr('data-src')).addClass('fancy').removeAttr('data-src')
        })
        setTimeout(function() {
            if(document.location.pathname.indexOf("signup-thank-you") === -1 || document.location.pathname.indexOf("thank-you-call-requested") === -1){
                // ==============================================
                //  LinkedIn -- Start
                // ==============================================
                _linkedin_partner_id = "110245";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);

                (function(){var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);})();
                // ==============================================
                //  LinkedIn -- End
                // ==============================================


                // ==============================================
                // G2Crowd -- Start
                // ==============================================
                (function (c, p, d, u, id, i) {
                id = ''; // Optional Custom ID for user in your system
                u = 'https://tracking.g2crowd.com/attribution_tracking/conversions/' + c + '.js?p=' + encodeURI(p) + '&e=' + id;
                i = document.createElement('script');
                i.type = 'application/javascript';
                i.src = u;
                d.getElementsByTagName('head')[0].appendChild(i);
                }("650", document.location.href, document));
                // ==============================================
                // G2Crowd -- End
                // ==============================================


                // ==============================================
                // Quora Pixel -- Start
                // ==============================================
                !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
                qp('init', '2c6faad1e50943c68c9081580a82f288');
                qp('track', 'ViewContent');
                // ==============================================
                // Quora Pixel -- End
                // ==============================================


                // ==============================================
                // Reddit -- Start
                // ==============================================
                !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','t2_23ua4atm');rdt('track', 'PageVisit');
                // ==============================================
                // Reddit -- End
                // ==============================================


                // ==============================================
                // Start : Twitter universal website tag code
                // ==============================================
                !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
                },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
                a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
                // Insert Twitter Pixel ID and Standard Event data below
                twq('init','nyirm');
                twq('track','PageView');
                // ==============================================
                // End : Twitter universal website tag code
                // ==============================================


                // ==============================================
                // Start : Facebook Pixcel Code
                // ==============================================
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '281962545856882');
                fbq('track', 'PageView');
                // ==============================================
                // End : Facebook Pixcel Code
                // ==============================================
            }
        }, 1000)
    });

    // ==============================================
    // Start : Mobile Restrict Content
    // ==============================================
    function restrictMobContent(){
        if($(window).width() < 992){
            $('[cb-mob-more]').show();
            $('[cb-mob-restrict]').each(function(){
                var contentDefaultHeight = $(this).outerHeight();
                var contentRestrictHeight = $(this).attr('cb-mob-restrict-height');
                if(!contentRestrictHeight){
                    contentRestrictHeight = 260;
                }
                //console.log(contentDefaultHeight +"======"+ contentRestrictHeight)
                if(contentDefaultHeight >= contentRestrictHeight){
                    $(this).css({"height": contentRestrictHeight+"px", "overflow": "hidden"});
                }else{
                    $(this).find('[cb-mob-more]').hide();
                    $(this).css({"height": "auto","max-height": "none"});
                }
            })
            $('[cb-mob-more]').on('click', function(){
                $(this).hide().parents('[cb-mob-restrict]').css({"height": "auto","max-height": "none"})
            });
        }else{
            $('[cb-mob-restrict]').each(function(){
                $(this).css({"height": "auto","max-height": "none"});
            })
            $('[cb-mob-more]').hide();
        }
    }
    restrictMobContent()
    function moveFromTo(){
        if($('[move_this]').length){
            //setTimeout(function(){
                if($(window).width() < 992){
                    $('[move_this]').each(function(){
                        if($(this).html() != ''){
                            $(this).parents('[with_in_this_section]').find('[move_here]').html($(this).html())
                            $(this).html('')
                        }
                    })
                }else{
                    $('[move_here]').each(function(){
                        if($(this).html() != ''){
                            $(this).parents('[with_in_this_section]').find('[move_this]').html($(this).html())
                            $(this).html('')
                        }
                    })
                }
            //},500)
        }
    }
    moveFromTo()
    $(window).on('resize', function(){
        restrictMobContent()
        moveFromTo()
    })
    // ==============================================
    // End : Mobile Restrict Content
    // ==============================================
    // ==============================================
    // Start : Tab in homepage
    // ==============================================
    function cbVtab(){
        $('[cb-vtab-content]').hide();
        $('[cb-vtab-content]:first-child').show();
        $('[cb-vtab] [cb-vtab-item-bg]').width($('[cb-vtab-item]:first-child').outerWidth())
        if($(window).width() > 991){
            $('[cb-vtab-selectbox]').hide();
            $('[cb-vtab-items],[cb-vtab-item-bg]').show();

            $('[cb-vtab-item]').removeAttr('cb-vtab-item-selected');
            $('[cb-vtab-item]:first-child').attr('cb-vtab-item-selected','');
            $('[cb-vtab-item-bg]').css("transform", "translateY(0)");

            $('[cb-vtab-item]').on('click', function () {
                $('[cb-vtab] [cb-vtab-item-bg]').width($(this).outerWidth())
                $(this).parents('[cb-vtab]').find('[cb-vtab-item]').removeAttr('cb-vtab-item-selected');
                $(this).attr('cb-vtab-item-selected', '');
                $(this).parents('[cb-vtab]').find('[cb-vtab-contents] [cb-vtab-content]').hide();
                $(this).parents('[cb-vtab]').find('[cb-vtab-contents] [cb-vtab-content="' + $(this).attr('cb-vtab-item') + '"]').show();
                var translateVal = 0;
                $(this).prevAll('[cb-vtab-item]').each(function(){
                    translateVal = translateVal + $(this).outerWidth();
                })
                $(this).parents('[cb-vtab]').find('[cb-vtab-item-bg]').css("transform", "translateX(" + translateVal + "px)")
            })
        }else{
            $('[cb-vtab-selectbox]').show();
            $("[cb-vtab-selectbox]").val($("[cb-vtab-selectbox] option:first-child").val());
            $('[cb-vtab-items],[cb-vtab-item-bg]').hide();

            $('[cb-vtab-selectbox]').on('change', function(){
                $(this).parents('[cb-vtab]').find('[cb-vtab-contents] [cb-vtab-content]').hide();
                $(this).parents('[cb-vtab]').find('[cb-vtab-contents] [cb-vtab-content="' + $(this).val() + '"]').show();
            })
        }
    }
    cbVtab()
    $(window).on('orientationchange, resize', function(){
        cbVtab()
    })
    // ==============================================
    // End : Tab in homepage
    // ==============================================

    // ==============================================
    // Rellax js for Animation
    // ==============================================

    //For animation on scroll
    var $window           = $(window);
    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() * 1.1;
        $(".revealOnScroll:not(.animate)").each(function () {
            var $this     = $(this),
                offsetTop = $this.offset().top;
            if (scrolled + win_height_padded > offsetTop) {
            $this.addClass('animate ' + $this.attr('data-animate'));
            }
        });
    }
    $window.on('scroll', revealOnScroll);
    // ==============================================
    // Start : Reveal Clearbit Code
    // ==============================================
    ga('require', 'Clearbit', {"mapping":{"companyName":"dimension1","companyDomain":"dimension10","companyTags":"dimension3","companySector":"dimension8","companyIndustryGroup":"dimension7","companyIndustry":"dimension6","companySubIndustry":"dimension5","companyType":"dimension9","companyEmployeesRange":"dimension2","companyAlexaRank":"dimension16","companyCity":"dimension17","companyState":"dimension18","companyCountry":"dimension19","companyFunding":"dimension20","companyTech":"dimension4","companyEstimatedAnnualRevenue":"dimension12"}});
    // ==============================================
    // End : Reveal Clearbit Code
    // ==============================================


    // ==============================================
    // Start : Global site tag (gtag.js) - Google Ads: 979719580
    // ==============================================
    var script = document.createElement( 'script' );
    script.type = 'text/javascript';
    script.src = 'https://ga.clearbit.com/v1/ga.js?authorization=pk_df70c67c148371c07dceee61f0c496d8';
    $("body").append( script );
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-979719580');
    // ==============================================
    // End : Global site tag (gtag.js) - Google Ads: 979719580
    // ==============================================
    if(location.pathname == '/signup-thank-you/' || location.pathname == '/signup-thank-you'){
        gtag('event', 'conversion', {'send_to': 'AW-979719580/GMY6CLSasgoQnKuV0wM'});
    }
    $('.takeMeToTheAppLogin').parents('.ch-nav__item').hide();
});
// ==============================================
// Start : Clearbit - Prasanna
// ==============================================
!function(w){var clearbit=w.clearbit=w.clearbit||[];if(!clearbit.initialize)if(clearbit.invoked)w.console&&console.error&&console.error("Clearbit snippet included twice.");else{clearbit.invoked=!0;clearbit.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];clearbit.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);clearbit.push(e);return clearbit}};for(var t=0;t<clearbit.methods.length;t++){var e=clearbit.methods[t];clearbit[e]=clearbit.factory(e)}clearbit.load=function(t){var e=document.createElement("script");e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"x.clearbitjs.com/v1/"+t+"/clearbit.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};clearbit.SNIPPET_VERSION="3.1.0";    clearbit.load("pk_df70c67c148371c07dceee61f0c496d8");    clearbit.page();  }}(window);
// ==============================================
// End : Clearbit - Prasanna
// ==============================================
// ==============================================
// Start : Begin ProofX (Proof - Experiences) - Mithran
// ==============================================
// document.querySelector("html").classList.add("proofx-hidden")
// !function(s,c){var proofx=s.proofx=s.proofx||[];if(!proofx.initialized)if(proofx.invoked)s.console&&console.error&&console.error("ProofX snippet included twice.");else{proofx.invoked=!0;proofx.methods=["identify","reset","track","page","watchInputs","unwatchInputs","init"];proofx.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);proofx.push(e);return proofx}};for(var e=0;e<proofx.methods.length;e++){var t=proofx.methods[e];proofx[t]=proofx.factory(t)}proofx.load=function(e,t){var r=t&&t.timeout?t.timeout:2e3;s.setTimeout(function(){for(var e=c.getElementsByClassName("proofx-hidden");0<e.length;)e[0].className=e[0].className.replace(/\bproofx-hidden\b/g,"")},r);var o="https://cdn.proof-x.com/proofx.js?ver="+Date.now(),n=document.createElement("link");n.href=o;n.rel="preload";n.as="script";document.head.appendChild(n);var a=c.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);var i=c.createElement("script");i.type="text/javascript";i.async=!0;i.src=o;a.parentNode.insertBefore(i,a);proofx.init(e,t)};
//     proofx.load("-LzDIFJPP2bI3ukOK-3r",{ timeout: 2000 });
//     proofx.page();
// }}(window,document);
// ==============================================
// End : Begin ProofX (Proof - Experiences) - Mithran
// ==============================================
// ==============================================
// Start : Salesloft - Avinash
// ==============================================
(function(i,s,o,g,r,a,m){i['SLScoutObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://scout-cdn.salesloft.com/sl.js','slscout');
slscout(["init", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0IjoxMDE5NTl9._im8E-Lqtndh4JrLLveb4i883p8tJ9uG65chuxbXLFQ"]);
// ==============================================
// End : Salesloft - Avinash
// ==============================================
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkIfLoggedInFromCb() {
    if (!document.cookie.match(/^(.*;)?\s*server_timestamp\s*=\s*[^;]+(.*)?$/)) {
        $('.takeMeToTheAppLogin').parents('.ch-nav__item').show();
        $('.takeMeToTheAppLogin').text("Log in ");
        $('.takeMeToTheAppSignup').text("Sign Up ");
        $('.takeMeToTheAppSignup').parent().attr('href','/trial-signup/?ref=navbar');
        console.log("Not Logged In")
        return false;
    }
    // If the relative time of the server timestamp is more than 1 hour and 45
    // minutes, we ask the user to log in again.
    let serverTimestampInMs = parseInt(getCookie('server_timestamp'));
    let timeDiffSeconds = (new Date() - serverTimestampInMs) / 1000;
    let isValidSession = (timeDiffSeconds / 60) <= 105;
    if(isValidSession){
        console.log("Yes, Logged In")
        $('.takeMeToTheAppLogin').parents('.ch-nav__item').show();
        $('.takeMeToTheAppLogin').text("Go to my account ");
        $('.takeMeToTheAppSignup').text("Go to my account ");
        $('.takeMeToTheAppSignup').parent().attr('href','https://app.chargebee.com/login');
        // $('.takeMeToTheAppSignup').prev().remove();
    }else{
        console.log("Yes, Logged In But the Session was Expired")
        $('.takeMeToTheAppLogin').parents('.ch-nav__item').show();
        $('.takeMeToTheAppLogin').text("Log in ");
        $('.takeMeToTheAppSignup').text("Sign Up ");
        $('.takeMeToTheAppSignup').parent().attr('href','/trial-signup/?ref=navbar');
    }
}
window.addEventListener('load', (event) => {
    checkIfLoggedInFromCb()
});