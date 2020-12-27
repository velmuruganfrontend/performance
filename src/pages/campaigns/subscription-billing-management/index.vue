<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta 
            :cb-title="'Simplify and Streamline Your Subscription Billing & Management'" 
            :cb-desc="'Untangle your business from Spaghetti Billing with enterprise-class Subscription Management Software.'" 
            :cb-url="'/campaigns/subscription-billing-management/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/homev2.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js,https://js.hsforms.net/forms/v2.js'"
            :cb-has-noindex="true" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Body
        ==================================================================== -->
        <main class="cj-main">
            <!-- ===============================================================
            Start: Hero
            ================================================================ -->
            <section class="l-row l-row--pad">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <a href="/" class="cj-logo">
                                <img src="/static/resources/brand/chargebee-logo-black.svg" alt="Chargebee Logo" width="140" class="img-responsive">
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1">
                            <div class="cj-hero">
                                <div class="cj-hero__header">
                                    <h1 class="cj-hero__title">
                                        Simplify and Streamline your Subscription Billing and Management
                                    </h1>
                                    <p class="cj-hero__desc">
                                        Untangle your business from Spaghetti Billing with enterprise-class Subscription Management Software.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===============================================================
            End: Hero
            ================================================================ -->
            <!-- ===============================================================
            Start: G2crowd
            ================================================================ -->
            <section class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                        <div class="cj-badge">
                            <div class="cj-badge__figure">
                                <!-- <img src="/static/website/version/images/home/ad-marketing/g2crowd.png" alt="" class="img-responsive"> -->
                                <a title="Chargebee recognized in Subscription Management based on user reviews" href="https://www.g2.com/products/chargebee/reviews?utm_source=rewards-badge">
                                    <img style="width: 150px;" alt="Chargebee recognized in Subscription Management based on user reviews" src="https://images.g2crowd.com/uploads/report_medal/image/452/medal.svg" />
                                </a>
                            </div>
                            <div class="cj-badge__content">
                                Chargebee has been pegged as the Leader in G2Crowd's Momentum Grid for Subscription Management
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===============================================================
            End: G2crowd
            ================================================================ -->

            <div cb-form-affix__container cb-form-affix__show class="col-md-5 col-sm-6 col-sm-offset-3">
                <div cb-form-affix__section>
                    <div cb-form-affix__title>Get Started with Chargebee</div>
                    <div cb-form-affix></div>
                    <div cb-form-affix__devider><span>or</span></div>
                    <a cb-form-affix__action href="/schedule-a-demo/?ref=camp-sbm">Schedule a Demo</a>
                </div>
            </div>
            
            <!-- ===============================================================
            Start: Features
            ================================================================ -->
            <section class="l-row l-row--tsm">
                <div class="container row-container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
                            <div class="cj-article cj-article--center">
                                <div class="cj-article__header">
                                    <h2 class="cj-article__title">
                                        End-to-End Subscription Management <br class="visible-md visible-lg">capabilities that never leave you wanting
                                    </h2>
                                    <p class="cj-article__desc">
                                        Solve your subscription billing problems today, and <br class="visible-lg">preempt ones that would’ve cropped up a year from now.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row row--mobile">
                        <div class="col-sm-6 col-md-6 row--item">
                            <div class="cj-media cj-media--flex revealOnScroll" data-animate='fadeInLeft'>
                                <div class="cj-media__figure">
                                    <img src="/static/website/version/images/home/jan-2019/icon/subscription-management-software-clr.svg" alt="Subscription Management Software" class="img-responsive" width="32">
                                </div>
                                <div class="cj-media__content">
                                    <h3 class="cj-media__title">
                                        Subscription  Management
                                    </h3>
                                    <p class="cj-media__desc">
                                        Scale subscriptions through pricing flexibility, billing logic control, and customer lifecycle visibility.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="col-sm-6 col-md-6 row--item">
                            <div class="cj-media cj-media--flex revealOnScroll" data-animate='fadeInLeft' style="animation-delay: .2s">
                                <div class="cj-media__figure">
                                    <img src="/static/website/version/images/home/jan-2019/icon/chargebee-subscription-billing-clr.svg" alt="Chargebee Subscription Billing" class="img-responsive" width="40">
                                </div>
                                <div class="cj-media__content">
                                    <h3 class="cj-media__title">
                                        Recurring Billing
                                    </h3>
                                    <p class="cj-media__desc">
                                        Automate billing with recurring invoices, payment schedules, customizable billing calendars and smart recovery.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="col-sm-6 col-md-6 row--item">
                            <div class="cj-media cj-media--flex revealOnScroll" data-animate='fadeInLeft' style="animation-delay: .25s">
                                <div class="cj-media__figure">
                                    <img src="/static/website/version/images/home/jan-2019/icon/saas-billing-reporting-chargebee-clr.svg" alt="SaaS Billing Reporting Chargebee" class="img-responsive" width="32" style="min-width: 32px">
                                </div>
                                <div class="cj-media__content">
                                    <h3 class="cj-media__title">
                                        Accounting & Revenue Recognition
                                    </h3>
                                    <p class="cj-media__desc">
                                        Simplify bookkeeping, global tax management, invoices, revenue recognition, and one-touch reconciliation.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="col-sm-6 col-md-6 row--item">
                            <div class="cj-media cj-media--flex revealOnScroll" data-animate='fadeInLeft' style="animation-delay: .3s">
                                <div class="cj-media__figure">
                                    <img src="/static/website/version/images/home/jan-2019/icon/billing-analytics-chargebee-clr.svg" alt="Billing Analytics Chargebee" class="img-responsive" width="32">
                                </div>
                                <div class="cj-media__content">
                                    <h3 class="cj-media__title">
                                        Analytics & Insights
                                    </h3>
                                    <p class="cj-media__desc">
                                        Identify opportunities, flag issues, engage with abandoned carts, and go beyond stats with RevenueStory Analytics.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <!-- ===============================================================
            End: Features
            ================================================================ -->
            <!-- ===============================================================
            Start: Testimonial
            ================================================================ -->
            <section class="l-row">
                <div class="container">
                     <div class="row" style="margin-bottom: 48px;">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="cj-slider cj-slider--customers">
                                <div class="cj-slider__figure">    
                                    <section class="customer-logos customer-logos__one slider">
                                        <div class="slide">
                                            <div class="doodle_bg"></div>
                                        </div>
                                        <div class="slide">
                                            <div class="envoy_bg"></div>
                                        </div>
                                        <div class="slide">
                                            <div class="freshworks_blck_bg"></div>
                                        </div>
                                        <div class="slide">
                                            <div class="zenchef_bg"></div>
                                        </div>
                                        <div class="slide">
                                            <div class="okta_bg"></div>
                                        </div>
                                        <div class="slide">
                                            <div class="calendy_bg"></div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <div class="cj-testimonial revealOnScroll" data-animate='fadeInUp'>
                                <figure class="cj-testimonial__figure">
                                    <img src="/static/website/version/images/home/jan-2019/customers/chargebee-customers-codacy.png" alt="Chargebee Customers Codacy" class="img-responsive" width="170">
                                </figure>
                                <div class="cj-testimonial__content">
                                    Chargebee let us abstract the billing part and keep it separate from our working code base. Ever since we started using it, our subscription operations have been really painless
                                </div>
                                <div class="cj-testimonial__author">
                                    — Joao Caxaria, CTO
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===============================================================
            End: Testimonial
            ================================================================ -->
            <!-- ===============================================================
            Start: Panels
            ================================================================ -->
            <section class="l-row-panels">
            <!-- ===============================================================
            End: Panels
            ================================================================ -->
            <!-- ===============================================================
            Start: Panels
            ================================================================ -->
            <section class="l-row l-row--panel" style="background-color: #FFE8B2;">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-0">
                            <div class="cj-hero">
                                <div class="cj-hero__title" style="color: #881931; max-width: 450px;">
                                    Bill the way your business demands 
                                </div>
                                <p class="cj-hero__desc" style="color: #1D3161;">
                                    From quantity-based pricing to usage-based pricing - Chargebee’s intuitive pricing options will equip you with choices you never knew you had, and give you full control, so your prices reflect your vision. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===============================================================
            End: Panels
            ================================================================ -->
            <!-- ===============================================================
            Start: Panels
            ================================================================ -->
            <section class="l-row l-row--panel" style="background-color: #F6C4D0;">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-0">
                            <div class="cj-hero">
                                <div class="cj-hero__title" style="color: #05614E; max-width: 450px;">
                                    Integrate into your existing workflow seamlessly
                                </div>
                                <p class="cj-hero__desc" style="color: #1D3161">
                                    Be it a free-trial or freemium acquisition model or a full-on sales driven approach, Chargebee fits your existing workflow like a glove. Get all the right tools and processes at each stage of scale, with the flick of a switch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===============================================================
            End: Panels
            ================================================================ -->
            <!-- ===============================================================
            Start: Panels
            ================================================================ -->
            <section class="l-row l-row--panel" style="background-color: #05614E; ">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-0">
                            <div class="cj-hero">
                                <div class="cj-hero__title" style="color: #F6C4D0; max-width: 450px;">
                                    Accept and process payments the way you need 
                                </div>
                                <p class="cj-hero__desc" style="color: #fff; opacity: 0.8">
                                    Chargebee works with 27 payment gateways spread across 53 countries. Give your customers the flexibility to pay using their preferred payment method from credit cards to ACH, in the currency of their choice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===============================================================
            End: Panels
            ================================================================ -->
            <!-- ===============================================================
            Start: Panels
            ================================================================ -->
            <section class="l-row l-row--panel" style="background-color: #1D3161;">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-0">
                            <div class="cj-hero">
                                <div class="cj-hero__title" style="color: #F36F9C; max-width: 450px;">
                                    Migrate with zero hiccups whatsoever
                                </div>
                                <p class="cj-hero__desc" style="color: #fff; opacity: 0.8;">
                                    From signup to your customer’s first subscription cycle, our Chargebee Expedited Onboarding Experts will work with you to ensure you don’t have a single operational crease during migration. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </section>
            <!-- ===============================================================
            End: Panels
            ================================================================ -->


            <!-- ===============================================================
            Start: Footer
            ================================================================ -->
            <footer class="cj-footer" style="background-color: #E2E9F9;">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="cj-flinks">
                                <a href="/features/" class="cj-flink cj-link cj-link--icon">Explore all features</a>
                                <a href="/trial-signup/" class="cj-flink cj-link cj-link--icon">Get Started today</a>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <a href="/" class="cj-flabel">
                                <div class="cj-flabel__figure">
                                    <img src="/static/website/version/images/footer/cb-footer-logo.svg" alt="" class="img-responsive">
                                </div>
                                <div class="cj-flabel__title">
                                    Chargebee
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- ===============================================================
            End: Footer
            ================================================================ -->
        </main>
        <!-- ===================================================================
        End: Website Body
        ==================================================================== -->        
    </div>
</template>
<!-- ===========================================================================
End: Template
============================================================================ -->
<!-- ===========================================================================
Start: Scripts
============================================================================ -->
<script>
  import AppMeta from '~/components/AppMeta.vue';
    
	export default {
		components: {
			'app-meta': AppMeta
        },  
        mounted() {
            $(window).on('load', function(){
                setTimeout(function(){
                    $('.cj-hero__highlight').addClass('cj-hero__highlight--active')
                }, 750)
                if($('[cb-form-affix]').length){
                    $.fn.isOnScreen = function(){
                        var win = $(window);
                        var viewport = {
                            top : win.scrollTop(),
                            left : win.scrollLeft()
                        };
                        viewport.right = viewport.left + win.width();
                        viewport.bottom = viewport.top + win.height();
                        
                        var bounds = this.offset();
                        bounds.right = bounds.left + this.outerWidth();
                        bounds.bottom = bounds.top + this.outerHeight();
                        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom)); 
                    };
                    
                    let affixFormEle = document.createElement('script')
                    var affixFormScript = document.createTextNode('hbspt.forms.create({portalId: "3732359",formId: "4982841d-4271-474c-ba98-3a52268f6b12"});')
                    affixFormEle.appendChild(affixFormScript)
                    $('[cb-form-affix]').html(affixFormEle)
                    
                    $(window).on('scroll resise', function() {
                        if($(window).width() > 991){
                            if($(this).scrollTop() < 200 || $(this).scrollTop() > $('.l-row-panels').offset().top && !$('.cj-footer').isOnScreen()) {
                                $('[cb-form-affix__container]').attr('cb-form-affix__show','').removeAttr('cb-form-affix__hide')
                            }else{
                                $('[cb-form-affix__container]').attr('cb-form-affix__hide','').removeAttr('cb-form-affix__show')
                            }
                        }
                    })
                }
            })
            $('.customer-logos__one').slick({
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
            });
        }
    }
</script>
<!-- ===========================================================================
End: Scripts
============================================================================ -->
<style>
[cb-form-affix__container] {
    padding: 30px;
    margin-top: 45px;
    margin-bottom: 60px;
}
[cb-form-affix__container] [cb-form-affix__section] {
    max-width: 420px;
}
@media screen and (min-width: 991px){
    [cb-form-affix__container] {
        position: fixed;
        right: 0;
        top: 0;
        padding: 100px;
        background: #fff;
        min-height: 100vh;
        z-index: 99999;
        transition: all 0.25s ease-in-out;
        margin: 0;
    }
    [cb-form-affix__container][cb-form-affix__show]{
        transform: translate(0%);
    }
    [cb-form-affix__container][cb-form-affix__hide]{
        transform: translate(100%);
    }  
}
@media screen and (min-width: 992px) and (max-width: 1199px){
    [cb-form-affix__container]{
        padding: 60px;
    }
}
[cb-form-affix__container] [cb-form-affix__title]{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif;;
    font-weight: 500;
    letter-spacing: -0.4px;
    font-size: 20px;
    line-height: 24px;
    color: #00000A;
    margin-bottom: 36px;
}
[cb-form-affix__container] [cb-form-affix__devider] {
    font-size: 14px;
    text-align: center;
    border-bottom: 1px solid #CCCCD2;
    position: relative;
    height: 1px;
    margin: 36px 0 48px 0;
}
[cb-form-affix__container] [cb-form-affix__devider] span{
    background: #fff;
    padding: 0;
    width: 32px;
    display: block;
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -16px;
    margin-top: -12px;
    line-height: 24px;
    height: 24px;
}
[cb-form-affix__container] [cb-form-affix__action]{
    display: block;
    border: 1px solid #3A008C;
    background-color: #ffffff;
    border-radius: 3px;
    color: #3A008C;
    text-align: center;
    padding: 14px;
    margin-top: 16px;
    transition: all 0.25s ease-in-out;
    font-weight: 500;
}
[cb-form-affix__container] [cb-form-affix__action]:hover,
[cb-form-affix__container] [cb-form-affix__action]:focus{
    background-color: #3A008C;
    color: #ffffff;
    text-decoration: none;
    outline: none;
}
.l-row--pad{
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    padding-top: 40px;
    padding-bottom: 224px;
    background-color: #E2E9F9;
}
@media (max-width: 991px){
    .l-row--pad{
        padding-bottom: 150px;
    }
}
.l-row--panel{
    padding-top: 100px;
    padding-bottom: 100px;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}
@media (max-width: 767px){
    .l-row--panel{
        padding-top: 50px;
        padding-bottom: 50px;
    }
}
.cj-logo{
    margin-bottom: 140px;
    display: inline-block;
}
@media (max-width: 991px){
    .cj-logo{
        margin-bottom: 60px;
    }
}
@media (max-width: 767px){
    .cj-logo{
        max-width: 120px;
    }
    .cj-hero,
    .cj-article--center{
        text-align: left;
    }
    .cj-hero__desc{
        margin-left: 0;
    }
}
.cj-hero__title{
    color: #1D0046;
}
.cj-media{
    margin-bottom: 32px;
}
.cj-media,
.cj-testimonial,
.cj-testimonial:hover,
.cj-testimonial:focus{
    box-shadow: 0 1px 1px 0 rgba(90, 122, 190, 0.1), 0 10px 20px 0 rgba(90, 122, 190, 0.2);
}
.cj-media__title{
    margin-bottom: 6px;
    margin-top: 4px;
}
.cj-media__desc{
    font-size: 16px;
    max-width: 360px;
}
@media (max-width: 991px) and (min-width: 768px){
    .cj-media{
        min-height: 220px;
    }
}
@media (max-width: 767px){
    .cj-media{
        display: block;
        min-height: 300px;
    }
    .cj-media__figure{
        margin-left: 0 !important;
        margin-bottom: 20px !important;
    }
    .cj-media__content{
        margin-left: 0 !important;
    }
}
.cj-footer{
    padding-top: 24px;
    padding-bottom: 80px;
}
.cj-flinks{
    margin-top: 14px;
}
.cj-flink{
    display: inline-block;
    white-space: nowrap;
}
.cj-flink + .cj-flink{
    margin-left: 30px;
}
@media (max-width: 991px){
    .cj-flinks{
        text-align: center;
        margin-top: 20px;
        margin-bottom: 35px;
    }
}
@media (max-width: 480px){
    .cj-flink + .cj-flink{
        margin-left: 0;
        margin-top: 15px;
    }
}
.cj-flabel{
    transition: .3s ease-out;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.cj-flabel:hover,
.cj-flabel:focus{
    text-decoration: none;
    opacity: .8;
}
.cj-flabel__figure{
    margin-right: 12px;
    max-width: 54px;
}
.cj-flabel__title{
    color: #00000A;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -0.8px;
    line-height: 28px;
}

@media (max-width: 991px){
    .cj-flabel{
        -webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;
    }
}
.cj-badge{
    margin-top: -95px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
            justify-content: center;
}
.cj-badge__figure{
    max-width: 160px;
    position: relative;
    z-index: 1;
}
.cj-badge__content{
    background: #fff;
    padding: 24px 24px 24px 50px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.06), 0 4px 14px -1px rgba(0,0,0,0.18);
    border-radius: 4px;
    margin-left: -30px;
    max-width: 540px;
    position: relative;
    z-index: 0;
    font-size: 18px;
    margin-top: -10px;
}
@media (max-width: 767px){
    .cj-badge{
        display: block;
    }
    .cj-badge__figure{
        margin: auto;
        text-align: center;
    }
    .cj-badge__figure img{
        width: 100px !important;
    }
    .cj-badge__content{
        font-size: 16px;
        margin: -80px 0 0;
        max-width: inherit;
        padding: 80px 24px 24px;
        text-align: center;
    }
}
</style>
