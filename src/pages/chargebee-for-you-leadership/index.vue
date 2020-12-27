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
        :cb-title="'Chargebee for Leadership | Subscription Billing & Management Platform'" 
        :cb-desc="'Chargebee\'s subscription engine is built tailor-made for SaaS & Subscription businesses to make sure that your billing inefficiencies don\'t come in the way of your hyper-growth.'" 
        :cb-url="'/chargebee-for-you-leadership/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/abm-landing.css'"
        :cb-head-script="''"
        :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js'"
        :cb-has-noindex="true" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="true" />
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <section class="l-row">
                <div class="container">
                    <div class="abm-hero">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1">
                                <div class="abm-hero__container">
                                    <h1 class="abm-hero__title">
                                        Grow your business, we'll handle the billing.
                                    </h1>
                                    <div class="abm-hero__desc">
                                        A hassle-free way to automate your entire subscription billing and management.
                                    </div>
                                    <div class="abm-hero__actions">
                                        <div class="abm-hero__action">
                                            <a href="#inlineDemo" class="abm-btn abm-btn--purple">Schedule a Demo</a>
                                        </div>
                                    </div>
                                    <figure class="abm-hero__figure hidden-xs hidden-sm">
                                        <img src="/static/website/version/images/abm-landing/abm-landing-banner.svg" class="img-responsive" alt="" /> 
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row l-row--bg-blue">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="abm-main">
                                <div class="abm-main__label">
                                    A few problems that you, as a top-level executive, might be worried about in your organisation.
                                </div>
                                <div class="abm-cards">
                                    <div class="abm-card">
                                        <div class="abm-card__front">
                                            <div class="abm-card__header">
                                                <img src="/static/website/version/images/abm-landing/leadership/leadership_icon1.svg" class="abm-card__icon" alt="" />
                                                <!-- <div class="abm-card__title abm-card__title--big"><b>1</b></div> -->
                                                <div class="abm-card__label">
                                                    You need an infrastructure for running pricing experiments and time-based discounts.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                PROBLEM
                                            </div>
                                        </div>
                                        <div class="abm-card__back">
                                            <div class="abm-card__header">
                                                <div class="abm-card__title">
                                                   Handle Complex Changes Efficiently
                                                </div>
                                                <div class="abm-card__desc">
                                                    Chargebee is built to support fast & complex iterations in your business plans - alter your pricing, roll out new offers, and see them reflect back in your daily reports without having to turn everything upside-down.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                SOLUTION
                                            </div>
                                        </div>
                                    </div>
                                    <div class="abm-card">
                                        <div class="abm-card__front">
                                            <div class="abm-card__header">
                                                <img src="/static/website/version/images/abm-landing/leadership/leadership_icon2.svg" class="abm-card__icon" alt="" />
                                                <!-- <div class="abm-card__title abm-card__title--big"><b>2</b></div> -->
                                                <div class="abm-card__label">
                                                    You're thinking of a change in the pricing model, but the required development efforts throw you off.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                PROBLEM
                                            </div>
                                        </div>
                                        <div class="abm-card__back">
                                            <div class="abm-card__header">
                                                <div class="abm-card__title">
                                                   Near-Zero Dev Dependency
                                                </div>
                                                <div class="abm-card__desc">
                                                    Create multiple plans (flat-fee, tiered, usage-based, etc.,) inside Chargebee and easily map them using our robust set of APIs, with zero dev efforts. Test them out and identify the best plan for your business.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                SOLUTION
                                            </div>
                                        </div>
                                    </div>
                                    <div class="abm-card">
                                        <div class="abm-card__front">
                                            <div class="abm-card__header">
                                                <img src="/static/website/version/images/abm-landing/leadership/leadership_icon3.svg" class="abm-card__icon" alt="" />
                                                <!-- <div class="abm-card__title abm-card__title--big"><b>3</b></div> -->
                                                <div class="abm-card__label">
                                                    Your subscriptions are inflexible and lead to poor experiences for your customers.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                PROBLEM
                                            </div>
                                        </div>
                                        <div class="abm-card__back">
                                            <div class="abm-card__header">
                                                <div class="abm-card__title">
                                                    Seamless Customer Experience
                                                </div>
                                                <div class="abm-card__desc">
                                                    Chargebee’s Revenue Operations suite ensures that every single touchpoint in your customer’s journey is smooth and frictionless by offering complete flexibility in your billing and subscription operations.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                SOLUTION
                                            </div>
                                        </div>
                                    </div>
                                    <div class="abm-card">
                                        <div class="abm-card__front">
                                            <div class="abm-card__header">
                                               <img src="/static/website/version/images/abm-landing/leadership/leadership_icon4.svg" class="abm-card__icon" alt="" />
                                                <!-- <div class="abm-card__title abm-card__title--big"><b>4</b></div> -->
                                                <div class="abm-card__label">
                                                    You’re not able to look at revenue numbers in real-time, and that’s having a direct impact on business decisions.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                PROBLEM
                                            </div>
                                        </div>
                                        <div class="abm-card__back">
                                            <div class="abm-card__header">
                                                <div class="abm-card__title">
                                                   360° Visibility & Reporting 
                                                </div>
                                                <div class="abm-card__desc">
                                                    Chargebee has tight-knit integrations with your payment infrastructure, your CRM, and also your accounting and analytics platforms. Real-time and accurate reporting works like a charm with Chargebee at its core.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                SOLUTION
                                            </div>
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
                    <div class="col-sm-10 col-sm-offset-1">
                        <div class="abm-main">
                            <div class="abm-main__title">
                                Chargebee:<br> For every stage of<br> your business growth
                            </div>
                            <div class="abm-list">
                                <div class="abm-list__item">
                                    <div class="abm-main__heading">
                                        Recurring Billing Automation
                                    </div>
                                    <div class="abm-main__desc">
                                        Offer end-to-end billing flexibility to your business and your customers with scheduled billing cycles, customized invoicing, and complete quote-to-cash automation.
                                    </div>
                                </div>
                                <div class="abm-list__item">
                                    <div class="abm-main__heading">
                                        Subscription Management at Scale
                                    </div>
                                    <div class="abm-main__desc">
                                        Create trials, plans, and various pricing models. Enable your customers to upgrade/downgrade plans with a self-service portal. Prorate on plan changes, all from within the app.
                                    </div>
                                </div>
                                <div class="abm-list__item">
                                    <div class="abm-main__heading">
                                        Accurate Accounting & Reporting
                                    </div>
                                    <div class="abm-main__desc">
                                        Make tax calculations less taxing, automate revenue recognition, reconcile your payments with the click of a button, and get all essential daily metrics delivered straight to your dashboard.
                                    </div>
                                </div>
                                <div class="abm-list__item">
                                    <div class="abm-main__heading">
                                       Payment Gateways & Methods
                                    </div>
                                    <div class="abm-main__desc">
                                        Connect with Stripe, Braintree, PayPal, GoCardless, and 27 other gateways to collect payments via cards, direct debit, and more. Offer a secure and customizable PCI compliant checkout.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="abm-techstack__heading">
                                Connect seamlessly with your tech-stack
                            </div>
                            <div class="abm-techstack__image"> 
                                <img src="/static/website/version/images/abm/abm-page-integration.svg" alt="" class="img-responsive" />    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row hidden-xs">
                <div class="container">
                    <div class="row">
                        <div class="abm-testimonial">
                            <div class="col-sm-10 col-sm-offset-1 col-md-12 col-md-offset-0">
                                <div class="abm-testimonial__container">
                                    <div class="abm-casestudy">
                                        <a href="/customers/getaccept/" dynamic-url class="abm-casestudy__container">
                                            <div dynamic-bg class="abm-casestudy__header" style="background-image: url('/static/website/version/images/abm-landing/getaccept.png')">
                                                <img dynamic-logo src="/static/website/version/images/case-study/getaccept/ga-logo-white.png" alt="" class="img-responsive abm-casestudy__logo" />
                                            </div>
                                            <div class="abm-casestudy__body">
                                                <div dynamic-title class="abm-casestudy__title">
                                                    GetAccept grew 4x in 12 months  
                                                </div>
                                                <div dynamic-desc class="abm-casestudy__desc">
                                                    As they moved upmarket to sell to more enterprise businesses, Chargebee’s support with pricing iterations, issuing time-based discounts, and custom pricing contributed to GetAccept’s revenue growing 4X.
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="abm-testimonial__slider">
                                        <div class="abm-testimonial__slide">
                                            <div class="abm-testimonial__content" style="background-image: url('/static/website/version/images/abm-landing/doodle.png')" 
                                                data-bg="/static/website/version/images/abm-landing/doodle.png" 
                                                data-logo="/static/website/version/images/home/jan-2019/customers/doodle.png" 
                                                data-title="Doodle scaled globally with various pricing models" 
                                                data-desc="We have a full-fledged integration with our system. The API is mostly well documented and effective. We are especially happy that we can get events of changes in Chargebee through its API, so our systems can remain in-sync."
                                                data-url="/customers/doodle/">
                                                
                                                <div class="abm-testimonial__info">
                                                    <img src="/static/website/version/images/home/jan-2019/customers/doodle.png" alt="" class="img-responsive" />  
                                                    <div class="abm-testimonial__author">
                                                        Cliff des Ligneris, Product Manager
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="abm-testimonial__slide">
                                            <div class="abm-testimonial__content" style="background-image: url('/static/website/version/images/abm-landing/circleloop.png')" 
                                                data-bg="/static/website/version/images/abm-landing/circleloop.png" 
                                                data-logo="/static/website/version/images/case-study/circleloop/logo.svg" 
                                                data-title="CircleLoop streamlined their Revenue Operations" 
                                                data-desc="With Chargebee, CircleLoop was able to bring alignment to its revenue functions — Sales, Marketing, and Success teams along with Finance teams — with Operations to measure and align revenue growth against the expense incurred."
                                                data-url="/customers/circleloop/">
                                                
                                                <div class="abm-testimonial__info">
                                                    <img src="/static/website/version/images/case-study/circleloop/logo.svg" alt="" class="img-responsive" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="abm-testimonial__slide">
                                            <div class="abm-testimonial__content" style="background-image: url('/static/website/version/images/case-study/screencloud/screen-cloud.png')" 
                                                data-bg="/static/website/version/images/case-study/screencloud/screen-cloud.png" 
                                                data-logo="/static/website/version/images/case-study/screencloud/screen-cloud-logo.png" 
                                                data-title="ScreenCloud course-corrected their churn" 
                                                data-desc="It wasn't so much about what numbers we couldn't see or could see. It's about the level of accuracy and confidence that we had with Chargebee’s RevenueStory. That's all done in one single place now."
                                                data-url="/customers/screencloud/">
                                                
                                                <div class="abm-testimonial__info">
                                                    <img src="/static/website/version/images/case-study/screencloud/screen-cloud-logo.png" alt="" class="img-responsive" />
                                                    <div class="abm-testimonial__author">
                                                        Sim Ahmed, Head of Marketing
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="abm-testimonial__slide">
                                            <div class="abm-testimonial__content" style="background-image: url('/static/website/version/images/abm-landing/getaccept.png')" 
                                                data-bg="/static/website/version/images/abm-landing/getaccept.png" 
                                                data-logo="/static/website/version/images/case-study/getaccept/ga-logo-white.png" 
                                                data-title="GetAccept grew 4x in 12 months" 
                                                data-desc="As they moved upmarket to sell to more enterprise businesses, Chargebee’s support with pricing iterations, issuing time-based discounts, and custom pricing contributed to GetAccept’s revenue growing 4X."
                                                data-url="/customers/getaccept/">
                                                
                                                <div class="abm-testimonial__info">
                                                    <img src="/static/website/version/images/case-study/getaccept/ga-logo-white.png" alt="" class="img-responsive" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row" id="inlineDemo">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="abm-testimonial__title">
                                Get started with Chargebee for your business<br class="hidden-xs" /> with a personalised demo
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-5 col-md-offset-0">
                            <div class="abm-customer__review"> 
                                <div class="abm-customer__container">
                                    <div class="abm-customer__header">
                                        <div class="abm-customer__profile">
                                            <img class="abm-customer__img" src="/static/website/version/images/abm-landing/caxaria.png" />
                                            <div class="abm-customer__name">— João Caxaria, CTO, Codacy </div>
                                            <img class="abm-customer__quote" src="/static/website/version/images/abm/quotes.png" />
                                        </div>
                                    </div>
                                    <div class="abm-customer__body">
                                        <p class="abm-customer__desc">
                                            Ever since we started using it, it has been really painless. Chargebee has saved lots of development time and things have been just great for us. We made the right call by switching to Chargebee.
                                        </p>
                                        <p class="abm-customer__logo"> 
                                            <img src="/static/website/version/images/case-study/codacy-logo-black.svg" alt="" class="img-responsive"> 
                                        </p>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-1">
                            <div class="abm-demo">
                                <div class="abm-demo__container">
                                    <div class="abm-demo__form">
                                        <div class="calendly-inline-widget"></div>
                                    </div>
                                    <div class="abm-demo__label">
                                        By clicking on Schedule a Demo, you acknowledge having read our <a href="/privacy/" class="abm-link">Privacy Notice</a>
                                    </div>
                                </div>
                            </div>
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
        
        export default {
            components: {
                'app-meta': AppMeta,
                'app-header': AppHeader,
                'app-footer': AppFooter
            },
            
            methods: {},
            
            mounted() {
                $('.abm-testimonial__slider').slick({
                    centerMode: false,
                    centerPadding: '0',
                    slidesToShow: 1
                });
                $('.abm-testimonial .slick-arrow').on('click', function(event){
                    let parentEle = $(this).parents('.abm-testimonial');
                    let activeEle = parentEle.find('.slick-active');
                    let targetEle = activeEle.prev().find('.abm-testimonial__content')
                    
                    if(parentEle.length){
                        parentEle.find('[dynamic-url]').attr('href',targetEle.attr('data-url'))
                        parentEle.find('[dynamic-bg]').css('background-image', 'url('+targetEle.attr('data-bg')+')')
                        parentEle.find('[dynamic-logo]').attr('src', targetEle.attr('data-logo'))
                        parentEle.find('[dynamic-title]').html(targetEle.attr('data-title'))
                        parentEle.find('[dynamic-desc]').html(targetEle.attr('data-desc'))
                    }
                })
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

</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->