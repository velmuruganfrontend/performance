<!-- ===========================================================================
// cb-title		=	Page Level Titles (Title, Twitter, OG)
// cb-desc		=	Page Level Descriptions (Description, Twitter, OG)
// cb-image		=	Page Level Images (Twitter, OG)
// cb-style		=	Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script	=	Page Level Head Script. Using this tag to put head level scripts
// cb-body-script	=	Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex	=	Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header 		=	App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
// app-footer 		=	App footer will add footer to the page.
​
If you want to remove header or footer. Remove the "app-header" or "app-footer" tag, script url and components in scripts.
============================================================================ -->
<!-- ===========================================================================
Start: Main Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Meta Section
        ==================================================================== -->
        <app-meta 
        :cb-title="'Prepare Your Startup for Hypergrowth with Chargebee'" 
        :cb-desc="'Chargebee is designed For rapid experimentation to help you manage your billing effortlessly & run revenue operations on autopilot.'" 
        :cb-url="'/cb-for-startups/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/e-learning.css'"
        :cb-head-script="''"
        :cb-body-script="'https://js.chilipiper.com/marketing.js,https://js.hsforms.net/forms/v2.js'"
        :cb-has-noindex="true" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="false" :hasBasicHeader="true"/>
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <section class="l-row">
                <div class="container">
                    <div class="eln-hero">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="eln-hero__container">
                                    <h1 class="eln-hero__title">
                                        Chargebee is your launchpad for all things subscriptions from Checkout to Revenue.
                                    </h1>
                                    <div class="eln-hero__desc">
                                        Manage your billing effortlessly, run revenue operations on autopilot, and prepare your subscription business for Hypergrowth.
                                    </div>
                                    <div class="eln-hero__actions">
                                        <div class="eln-hero__action">
                                            <a href="javascript:void(0)" go-to-demo-section class="eln-btn eln-btn--purple">Schedule a Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="eln-article">
                        <div class="eln-article__container">
                            <div class="eln-article__aside">
                                <div class="eln-article__title eln-article__title--big">
                                    Designed For Rapid Experimentation
                                </div>
                            </div>
                            <div class="eln-article__main">
                                <div class="eln-article__list">
                                    <div class="eln-article__item">
                                        <div class="eln-article__icon">
                                            <img src="/static/website/version/images/e-learning/pricing-and-cource.svg" class="img-responsive" width="39">
                                        </div>
                                        <div class="eln-article__desc">
                                            Find your price-value sweet spot with rapid experiments on plans and pricing.
                                        </div>
                                    </div>
                                    <div class="eln-article__item">
                                        <div class="eln-article__icon">
                                            <img src="/static/website/version/images/e-learning/billing-and-tax.svg" class="img-responsive" width="39">
                                        </div>
                                        <div class="eln-article__desc">
                                            Boost your acquisition rates with multiple payment choices and a no-code checkout.
                                        </div>
                                    </div>
                                    <div class="eln-article__item">
                                        <div class="eln-article__icon">
                                            <img src="/static/website/version/images/e-learning/sales-process-and-reporting.svg" class="img-responsive" width="39">
                                        </div>
                                        <div class="eln-article__desc">
                                            Map all subscription data with your CRM, accounting platform, analytics tool, and more.
                                        </div>
                                    </div>
                                    <div class="eln-article__item">
                                        <div class="eln-article__icon">
                                            <img src="/static/website/version/images/e-learning/revenue-intelligence.svg" class="img-responsive" width="39">
                                        </div>
                                        <div class="eln-article__desc">
                                           Automate payment collection and recover potential revenue with smart dunning.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
					<div class="row">
						<div class="col-sm-10 col-sm-offset-1">
							<div class="eln-slider">
								<div class="eln-slider__figure">
                                    <img src="/static/website/version/images/e-learning/logo-fb-ads.png" alt="" width="940" />
								</div>
							</div>
						</div>
					</div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <div class="eln-article" style="margin-bottom: 40px; text-align: center;" >
                                <div class="eln-article__title eln-article__title--big">
                                    Watch a detailed walkthrough of Chargebee
                                </div>
                            </div>
                        </div>
                    </div>
					<div class="row">
						<div class="col-sm-10 col-sm-offset-1">
							<script src="https://fast.wistia.com/embed/medias/vkq5sx3552.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_vkq5sx3552 videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/vkq5sx3552/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
						</div>
					</div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="eln-article">
                        <div class="row row-align__center">
                            <div class="col-sm-6">
                                <div class="eln-article__label eln-article__label--yellow">
                                    MOVING BEYOND CREDIT CARDS
                                </div>
                                <div class="eln-article__title">
                                    Stripe & Chargebee: The Bread & Butter of Subscriptions
                                </div>
                                <img src="/static/website/version/images/product/payment-gateway.png" alt="" class="img-responsive visible-xs" />
                                <div class="eln-article__desc">
                                    When you’re scaling rapidly, you need to provide more options for customers to pay. Reach the peak of payment flexibility through direct debit, e-wallets, cards, and offline transactions with 25+ payment gateways (including Stripe, GoCardless, and Braintree).
                                </div>
                                
                                <div>
                                    <a href="javascript:void(0)" go-to-demo-section class="eln-btn eln-btn--purple">Schedule a Demo</a>
                                </div>
                            </div>
                            <div class="col-sm-6 hidden-xs">
                                <img src="/static/website/version/images/product/payment-gateway.png" alt="" class="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="eln-article">
                        <div class="row row-align__center">
                            <div class="col-sm-6 hidden-xs">
                                <object type="image/svg+xml" data="/static/website/version/images/e-learning/intellingent-billing.svg">
                                    <img src="/static/website/version/images/e-learning/intellingent-billing.png" />
                                </object>
                            </div>
                            <div class="col-sm-6">
                                <div class="eln-article__label eln-article__label--yellow">
                                    FOR EVERY BILLING SCENARIO
                                </div>
                                <div class="eln-article__title">
                                    We’ve Got Your Entire Subscription Logic Covered!
                                </div>
                                <div class="visible-xs">
                                    <object type="image/svg+xml" data="/static/website/version/images/e-learning/intellingent-billing.svg">
                                        <img src="/static/website/version/images/e-learning/intellingent-billing.png" />
                                    </object>
                                </div>
                                <div class="eln-article__desc">
                                    Product growth shouldn’t result in packaging complexities. Ensure your subscription workflow scales with your Product & GTM. Chargebee handles your entire product catalog including plans, add-ons, and self-service upgrades.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div class="eln-testimonial"> 
                            <div class="eln-testimonial__container">
                                <div class="eln-testimonial__header">
                                    <div class="eln-testimonial__profile">
                                        <img class="eln-testimonial__img" src="/static/website/version/images/case-study/getaccept/dailius-wilson.jpeg" />
                                        <div class="eln-testimonial__name">Dailius Wilson, <span class="eln-testimonial__position">VP Sales & Growth, GetAccept</span></div>
                                    </div>
                                </div>
                                <div class="eln-testimonial__body">
                                    <p class="eln-testimonial__desc">
                                        The (Chargebee) system is robust yet cost-effective enough to really architect a complex solution using simple methods. We wouldn’t change or consider it even as we scale above the 10 million ARR mark. <a href="/customers/getaccept/" class="eln-link eln-link--icon">Read more</a>
                                    </p>
                                    <p class="eln-testimonial__logo">  
                                        <img style="width: 180px" src="/static/website/version/images/case-study/getaccept/ga-logo-black.png" alt="" class="img-responsive"> 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <div class="eln-article" style="margin-bottom: 40px; text-align: center;" >
                                <div class="eln-article__title eln-article__title--big">
                                    Your timeline with Chargebee
                                </div>
                            </div>
                        </div>
                    </div>
					<div class="row">
						<div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
							<img src="/static/website/version/images/e-learning/timeline.png" alt="" class="img-responsive">

                            <div style="margin: 24px auto 0; text-align: center">
                                <a href="javascript:void(0)" go-to-demo-section class="eln-btn eln-btn--purple">Schedule a Demo</a>
                            </div>
						</div>
					</div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="eln-article">
                        <div class="row row-align__center">
                            <div class="col-sm-6 hidden-xs">
                                
                                <img src="/static/website/version/images/entrepreneurs/code.png" alt="" class="img-responsive" />
                            </div>
                            <div class="col-sm-6">
                                <div class="eln-article__label eln-article__label--green">
                                    NEAR-ZERO DEV DEPENDENCY
                                </div>
                                <div class="eln-article__title">
                                    A Code-free Solution For Managing Your Subscriptions.
                                </div>
                                <div class="visible-xs">
                                    <img src="/static/website/version/images/entrepreneurs/code.png" alt="" class="img-responsive" />
                                </div>
                                <div class="eln-article__desc">
                                    Your developer’s time is invaluable. And that’s why we’ve made it easy to use Chargebee without writing a line of code. Our robust, yet intuitive APIs give you the flexibility to build workflows for custom needs. 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div class="eln-testimonial"> 
                            <div class="eln-testimonial__container">
                                <div class="eln-testimonial__header">
                                    <div class="eln-testimonial__profile">
                                        <img class="eln-testimonial__img" src="/static/website/version/images/case-study/upcodes/scott.jpeg" />
                                        <div class="eln-testimonial__name">Scott Reynolds <span class="eln-testimonial__position">Co-Founder & CEO, UpCodes</span></div>
                                    </div>
                                </div>
                                <div class="eln-testimonial__body">
                                    <p class="eln-testimonial__desc">
                                        In all the time that we’ve been working with Chargebee, the product has evolved significantly further and faster than we ever thought it would. Chargebee covers a huge amount of edge cases that we never even thought of when we were signing up for the services but ended up being extremely important for us. <a href="/customers/upcodes/" class="eln-link eln-link--icon">Read more</a>
                                    </p>
                                    <p class="eln-testimonial__logo">  
                                        <img style="width: 180px" src="/static/website/version/images/case-study/upcodes/logo.png" alt="" class="img-responsive"> 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="eln-article">
                        <div class="row row-align__center">
                            <div class="col-sm-6">
                                <div class="eln-article__label eln-article__label--pink">
                                    IN-SYNC SUBSCRIPTION DATA
                                </div>
                                <div class="eln-article__title">
                                    Your Existing Tech Stack Just Got a Whole Lot Closer
                                </div>
                                <img src="/static/website/version/images/compare-competitors/sassoptics/integrations.svg" alt="" class="img-responsive visible-xs" />
                                <div class="eln-article__desc">
                                    Wouldn’t it be great to have a single view of your entire Quote-To-Cash cycle? We thought so too. Chargebee integrates with 30+ platforms you use every day including Salesforce, HubSpot, and Xero. Can’t find your tool? Let’s “Stitch” it or create a custom “Zap”! 
                                </div>
                                <div style="margin-top: 24px">
                                    <a href="javascript:void(0)" go-to-demo-section class="eln-btn eln-btn--purple">Schedule a Demo</a>
                                </div>
                            </div>
                            <div class="col-sm-6 hidden-xs">
                                <img src="/static/website/version/images/compare-competitors/sassoptics/integrations.svg" alt="" class="img-responsive" />
                            </div>

                            
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row" id="demoSection" style="margin-bottom: 120px;">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <div class="eln-article" style="margin-bottom: 40px; text-align: center;" >
                                <div class="eln-article__title eln-article__title--big">
                                    Get your personalized demo of Chargebee
                                </div>
                            </div>
                        </div>
                    </div>
					<div class="row">
						<div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
							<demo-form :page-name="'fb-ads-page'" />
						</div>
					</div>
                </div>
            </section>
        </div>
        <!-- ===================================================================
        End: Body Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Footer
        ==================================================================== -->
        <app-footer />
        <!-- ===================================================================
        End: Website Footer
        ==================================================================== -->
    </div>
  </template>
  <!-- ===========================================================================
  End: Main Template
  ============================================================================ -->
  <!-- ===========================================================================
  Start: Scripts Section
  ============================================================================ -->
    <script>
    import AppMeta from '~/components/AppMeta.vue';
    import AppHeader from '~/components/AppHeader.vue';
    import AppFooter from '~/components/AppFooter.vue';
    import demoForm from '~/components/demoForm.vue';
    import learnExperiment from '~/components/learnExperiment.vue'
        
        export default {
            components: {
                'app-meta': AppMeta,
                'app-header': AppHeader,
                'app-footer': AppFooter,
                'demo-form' : demoForm,
                'learn-experiment': learnExperiment
            },
            
            methods: {},
            
            mounted() {
                $("[go-to-demo-section]").click(function() {
                    $('html,body').animate({
                        scrollTop: $("#demoSection").offset().top},
                        'slow');
                });
                function randomNumber(min, max) {  
                    min = Math.ceil(min); 
                    max = Math.floor(max); 
                    return Math.floor(Math.random() * (max - min + 1)) + min; 
                }
                
                function callAnimation(){
                    var targetEle = randomNumber(1, 9);
                    
                    setTimeout(function(){
                        $('.eln-pin:nth-child('+targetEle+')').addClass('eln-pin--tooltip');
                    }, 400);

                    setTimeout(function(){
                        $('.eln-pin:nth-child('+targetEle+')').removeClass('eln-pin--tooltip');
                    }, 4000);
                }
                callAnimation();
                
                setInterval(function(){
                    callAnimation()
                }, 4500)
            }
        }
    </script> 
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css">
    @media (min-width: 768px){
        .eln-hero__container {
            max-width: 800px;
            margin: auto;
        }
    }
    #ch-js-header-cloned{
        display: none;
    }

    @media (min-width: 992px){
        .eln-hero__desc{
            max-width: 550px;
            margin: 0 auto 40px;
        }
    }
    
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->