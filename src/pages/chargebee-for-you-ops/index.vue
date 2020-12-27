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
        :cb-title="'Chargebee for Operations | End-to-end Revenue Operations Platform'" 
        :cb-desc="'Chargebee\'s subscription engine is built tailor-made for SaaS & Subscription businesses to make sure that your billing inefficiencies don\'t come in the way of your hyper-growth.'" 
        :cb-url="'/chargebee-for-you-ops/'" 
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
                                        Streamline your entire subscription workflow.
                                    </h1>
                                    <div class="abm-hero__desc">
                                        Identify subscription pain-points and find revenue growth opportunities with Chargebee.
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
                                    A few problems that you, as an operational leader, might be worried about in your organisation.
                                </div>
                                <div class="abm-cards">
                                    <div class="abm-card">
                                        <div class="abm-card__front">
                                            <div class="abm-card__header">
                                                <img src="/static/website/version/images/abm-landing/operations/operations_icon1.svg" class="abm-card__icon" alt="" />
                                                <!-- <div class="abm-card__title abm-card__title--big"><b>1</b></div> -->
                                                <div class="abm-card__label">
                                                    You need the entire order-to-revenue cycle to be seamless and flexible, for you and your customers.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                PROBLEM
                                            </div>
                                        </div>
                                        <div class="abm-card__back">
                                            <div class="abm-card__header">
                                                <div class="abm-card__title">
                                                   Automate Complex Subscription Workflows
                                                </div>
                                                <div class="abm-card__desc">
                                                    Chargebee ensures that every point of your customer’s journey is frictionless right from collection to recognition. Our Revenue Operations suite offers end-to-end flexibility to your subscription and billing operations.
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
                                                <img src="/static/website/version/images/abm-landing/operations/operations_icon2.svg" class="abm-card__icon" alt="" />
                                                <!-- <div class="abm-card__title abm-card__title--big"><b>2</b></div> -->
                                                <div class="abm-card__label">
                                                    You have the required data to run pricing experiments, but the infrastructure doesn’t cut it!
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                PROBLEM
                                            </div>
                                        </div>
                                        <div class="abm-card__back">
                                            <div class="abm-card__header">
                                                <div class="abm-card__title">
                                                  Run Complex Experiments Easily
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
                                                <img src="/static/website/version/images/abm-landing/operations/operations_icon3.svg" class="abm-card__icon" alt="" />
                                                <!-- <div class="abm-card__title abm-card__title--big"><b>3</b></div> -->
                                                <div class="abm-card__label">
                                                  You have five disconnected systems that don’t tell you the same story throughout the funnel.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                PROBLEM
                                            </div>
                                        </div>
                                        <div class="abm-card__back">
                                            <div class="abm-card__header">
                                                <div class="abm-card__title">
                                                   Map Subscription Data Effectively
                                                </div>
                                                <div class="abm-card__desc">
                                                    Chargebee enables smooth data flow between your payment gateway, CRM, contract management, accounting systems, and your product. Close the gaps across your deal desk from sales to finance to billing, and track your subscriptions accurately.
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
                                               <img src="/static/website/version/images/abm-landing/operations/operations_icon4.svg" class="abm-card__icon" alt="" />
                                                <!-- <div class="abm-card__title abm-card__title--big"><b>4</b></div> -->
                                                <div class="abm-card__label">
                                                    You need visibility into specific cohorts and segments to identify revenue leaks and growth opportunities.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                PROBLEM
                                            </div>
                                        </div>
                                        <div class="abm-card__back">
                                            <div class="abm-card__header">
                                                <div class="abm-card__title">
                                                   360° Visibility & Drilled-down Dashboards
                                                </div>
                                                <div class="abm-card__desc">
                                                    Chargebee’s subscription analytics and reporting engine “RevenueStory” helps you look at the right metrics and dashboards. Mitigate the risks of churn and capture opportunities across each step of your revenue cycle.
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
                                All the integrations you need are a step away
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
                                        <a href="/customers/circleloop/" dynamic-url class="abm-casestudy__container">
                                            <div dynamic-bg class="abm-casestudy__header" style="background-image: url('/static/website/version/images/abm-landing/circleloop.png')">
                                                <img dynamic-logo src="/static/website/version/images/case-study/circleloop/logo.svg" alt="" class="img-responsive abm-casestudy__logo" />
                                            </div>
                                            <div class="abm-casestudy__body">
                                                <div dynamic-title class="abm-casestudy__title">
                                                    CircleLoop streamlined their Revenue Operations  
                                                </div>
                                                <div dynamic-desc class="abm-casestudy__desc">
                                                    With Chargebee, CircleLoop was able to bring alignment to its revenue functions — Sales, Marketing, and Success teams along with Finance teams — with Operations to measure and align revenue growth against the expense incurred.
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="abm-testimonial__slider">
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
                                        <div class="abm-testimonial__slide">
                                            <div class="abm-testimonial__content" style="background-image: url('/static/website/version/images/abm-landing/sisu.png')" 
                                                data-bg="/static/website/version/images/abm-landing/sisu.png" 
                                                data-logo="/static/website/version/images/case-study/sisu/logo.png"   
                                                data-title="Sisu built an efficient Sales engine" 
                                                data-desc="Chargebee does a really good job of identifying leads into the Salesforce system. The value of the Salesforce and Chargebee integration — paying my sales team based on Chargebee-driven subscriptions. It's extremely accurate, otherwise I would hear about it."
                                                data-url="/customers/sisu/">
                                                
                                                <div class="abm-testimonial__info">
                                                    <img src="/static/website/version/images/case-study/sisu/logo.png" alt="" class="img-responsive" />
                                                    <div class="abm-testimonial__author">
                                                        Frank Felice, Chief Revenue Officer
                                                    </div>
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
                                            <img class="abm-customer__img" src="/static/website/version/images/abm-landing/khiroya.jpg" />
                                            <div class="abm-customer__name">— Jay Khiroya, Former Director - Revenue Operations, Doctify </div>
                                            <img class="abm-customer__quote" src="/static/website/version/images/abm/quotes.png" />
                                        </div>
                                    </div>
                                    <div class="abm-customer__body">
                                        <p class="abm-customer__desc">
                                            What has worked well with Chargebee is they were on the same page, and carried out their implementation in phases too. This is to ensure there are no surprises, the software fits well in the organization before it migrates all the data.
                                        </p>
                                        <p class="abm-customer__logo">  
                                            <img style="width: 130px" src="/static/website/version/images/case-study/doctify/logo.png" alt="" class="img-responsive"> 
                                        </p>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div class="col-sm-10 col-sm-offset-1 col-md-5 col-md-offset-1">
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