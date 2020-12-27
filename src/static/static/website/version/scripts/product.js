$(document).ready(function() {

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


    var pmenu = $("#p-menu-fixed");
    var pmenuOffset = $("#p-menu-fixed").offset();
    if($('.blue-msg-box').length){
        blueBox = $(".blue-msg-box");
        blueBoxOffset = $(".blue-msg-box").offset().top;
        BlueBoxCssTop = parseInt($(".blue-msg-box").css("top"));
    }


    function isElementPartiallyInViewport(el, offset) {
        var ofset = offset || 130;
        if (typeof jQuery !== 'undefined' && el instanceof jQuery) el = el[0];
        var rect = el.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        var vertInView = (rect.top + ofset <= windowHeight) && ((rect.top + rect.height) >= 0);
        var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        return (vertInView && horInView);
    }
    $(document).ready(function() {

        // mobile menu
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


        $("#close-mobile-menu").click(function() {
            hideMobileNav();
        })
        $(".menu-items").click(function() {
            $("#selected-menu").html($(this).html());        
            hideMobileNav();
        })
    });
    
    $(document).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        if($("#p-menu-fixed").length){
            if ($(this).scrollTop() > (pmenuOffset.top + 300) && $(this).scrollTop() < ($('#cb-affix-footer').offset().top - 300)) {
                if (!$(pmenu).hasClass("p-menu--mobile")){
                    $(pmenu).addClass("p-menu--fixed");
                }
            }else{
                if ($(pmenu).hasClass("p-menu--fixed")) {
                    $(pmenu).removeClass("p-menu--fixed");
                }
            }
        }

        if($(".blue-msg-box").length){
            if (isElementPartiallyInViewport($(".blue-msg-box"))) {
                $(blueBox).css({
                    top: BlueBoxCssTop + Math.round((blueBoxOffset - scrollTop) * 0.08) + "px"
                });
            }
        }
    });

    $(document).keydown(function(e){
        if (e.keyCode == 37) {
           $(".p-menu__tab--active").prev().click();
           return false;
        }

        if (e.keyCode == 39) {
            $(".p-menu__tab--active").next().click();
            return false;
        }
    });

    // Payment Gateways Section

    var showCountryBlock = function(val) {            
        if(typeof val !== "undefined" && val !== ""){
            var $countryBlock = $('.'+ val);
            $($countryBlock).toggle();
        }
    }

    $(document).on("change", "#country-selector", function(e) {
        $('.main-content__c-payment-methods,.pg-component__content').hide();
        var val  = e.target.value;                  
        showCountryBlock(val);
    });

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    var country = getParameterByName('country');
    if(typeof country !== "undefined" && country !== ""){
        $('.main-content__c-payment-methods,.pg-component__content').hide();
        var countryid = $('#'+ country);;
        $(countryid).attr("selected","selected")
    }
    showCountryBlock(country); 

});