
$(window).on('load', function(){
    setTimeout(function(){
        $('.cj-hero__highlight').addClass('cj-hero__highlight--active')
    }, 750)
})
$(document).ready(function(){
    //For animation on scroll
    var $window           = $(window),
        win_height_padded = $window.height() * 1.1;
    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() * 1.1;
        // Showed...
        $(".revealOnScroll:not(.animate)").each(function () {
            var $this     = $(this),
                offsetTop = $this.offset().top;
            if (scrolled + win_height_padded > offsetTop) {
            $this.addClass('animate ' + $this.attr('data-animate'));
            }
        });
    }
    
    $window.on('scroll', revealOnScroll);


    $('[fr-switch]').on('click', function(){
        if(!$(this).hasClass('active')){
            $(this).addClass('active')
            $('[fr-theme]').addClass('fr-switch__slider--red').css('opacity','1')
            setTimeout(function(){
                $('body').addClass('cb-bg-active')
                // $('body').append('');
                $('[fr-theme]').removeClass('fr-switch__slider--red').css('opacity','0')
            },200)
    }else{
            $(this).removeClass('active')
        $('[fr-theme]').removeClass('fr-switch__slider--red').css('opacity','1')
        setTimeout(function(){
                $('body').removeClass('cb-bg-active')
                $('[fr-theme]').css('opacity','0')
        },200)
        }
    })
    $('[fr-switch]').addClass('fr-switch__action--in')
    $(window).scroll(function() {
        wH = $(window).height() / 2,
        wS = $(this).scrollTop();
        if(wH < wS){
                $('[fr-switch]').removeClass('fr-switch__action--in')
        }else{
            $('[fr-switch]').addClass('fr-switch__action--in')
        }
    });

    var distance = $('.fr-speakers__sticky').offset().top - $(window).height() / 2,
    $window = $(window);

    $window.scroll(function() {
        if ( $window.scrollTop() >= distance && !($('.fr-speakers__aside').hasClass('fr-animate'))) {
            $('.fr-speakers__aside').addClass('fr-animate')
        }
    });

    var scriptTag = document.createElement("script");
    scriptTag.type = "text/javascript";
    var hsScript = document.createTextNode('hbspt.forms.create({portalId: "3732359",formId: "81a00189-8fbc-48c4-8fb5-74bbbc4d5cd5"});');
    scriptTag.appendChild(hsScript);

    var frForm = document.getElementsByClassName('fr-form')[0];
    frForm.appendChild(scriptTag);
    function hsFormLoaded() { 
        if ($('.fr-form form:not(.fr-hs-form)').length) { 
            var defaultEmail = $('.fr-form form:not(.fr-hs-form) input[type="email"]').val()
            $('.fr-hs-form input[type="email"]').val(defaultEmail)
            $( '.fr-hs-form').on('submit', function() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                var thisFormEmail = $(this).find('input[type="email"]').val();
                $('.fr-form form:not(.fr-hs-form) input[type="email"]').val(thisFormEmail).change();
                $('.fr-form form:not(.fr-hs-form) input[type="submit"]').trigger('click');
                return false;
            });
            clearInterval(checkIsHsFormLoaded);
        }

    }
    var checkIsHsFormLoaded = setInterval(hsFormLoaded, 1000);
});