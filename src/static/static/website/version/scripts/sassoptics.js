window.addEventListener('load', function() {
    /*Logo slider*/
    var slickScript = document.createElement("script");
    slickScript.type = "text/javascript"; 
    var slickCodeSnippet = document.createTextNode( 
        `$('.customer-logos__one').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: false,
            speed: 2000,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }]
        });`
    );

    slickScript.appendChild(slickCodeSnippet);
    function testSlick() {
        if (typeof $.fn.slick == 'function') {
            $("body").append(slickScript);
            window.clearInterval(slickInterval)
        }
    }
    var slickInterval = window.setInterval(testSlick, 300);
    /*Logo slider*/

    /*G2 slider*/
    $('[data-sBanner]').slick({
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false 
                }
            },
        ]
    });
    /*G2 slider*/


    /*Testimonial Slider*/ 
    $('.so-testimonial').slick({  
        autoplay:true, 
        draggable: true,
        accessibility: false, 
        slidesToShow: 1,
        arrows: false,
        dots: true,
        swipeToSlide: true,
        infinite: false
    });  


    /*Smooth Scrolling*/  
    $('.down-scroll').click(function($e) {  
        $e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.so-advantage').offset().top
        }, 1000);
    });  
    /*Smooth Scrolling*/


    //     /*HS Form*/ 
    //         var scriptTag = document.createElement("script");
    //         scriptTag.type = "text/javascript";
    //         var hsScript = document.createTextNode('hbspt.forms.create({portalId: "3732359",formId: "81a00189-8fbc-48c4-8fb5-74bbbc4d5cd5"});');
    //         scriptTag.appendChild(hsScript);

    //         var frForm = document.getElementsByClassName('fr-form')[0];
    //         frForm.appendChild(scriptTag);
    //         function hsFormLoaded() { 
    //             if ($('.fr-form form:not(.fr-hs-form)').length) { 
    //                 var defaultEmail = $('.fr-form form:not(.fr-hs-form) input[type="email"]').val()
    //                 $('.fr-hs-form input[type="email"]').val(defaultEmail)
    //                 $( '.fr-hs-form').on('submit', function() {
    //                     document.body.scrollTop = 0;
    //                     document.documentElement.scrollTop = 0;
    //                     var thisFormEmail = $(this).find('input[type="email"]').val();
    //                     $('.fr-form form:not(.fr-hs-form) input[type="email"]').val(thisFormEmail).change();
    //                     $('.fr-form form:not(.fr-hs-form) input[type="submit"]').trigger('click');
    //                     return false;
    //                 });
    //                 clearInterval(checkIsHsFormLoaded);
    //             }

    //         }
    //         var checkIsHsFormLoaded = setInterval(hsFormLoaded, 1000);
    //  /*HS Form*/
})

//Active navigation on scroll  
window.addEventListener('scroll', event => {
    let navigationLinks = document.querySelectorAll('.so-tab__ul li a');  
    let fromTop = window.scrollY - 50;
    
    navigationLinks.forEach(link => {
        let section = document.querySelector(link.hash);
    
        if (
        section.offsetTop <= fromTop + 55 &&
        section.offsetTop + section.offsetHeight > fromTop + 55
        ) {
        link.classList.add('active');
        } else {
        link.classList.remove('active');
        }
    });
}); 
//Active navigation on scroll