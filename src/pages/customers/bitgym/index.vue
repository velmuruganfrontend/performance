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
// app-header 		=	App header will add header to the page. 
//                  Need a white header in page use :hasInvert="true" attribute
//                  Need a basic header(without menu's) in page use :hasBasicHeader="true" attribute
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
        :cb-title="'How BitGym Boosted Productivity by 80%, using Chargebee for Subscription Management'" 
        :cb-desc="' From a Kickstarter campaign to one-time in-app purchases, to a Netflix-inspired subscription business model, BitGym has seen it all.'" 
        :cb-url="'/customers/bitgym/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/casestudy.css'"
        :cb-head-script="''"
        :cb-body-script="''"
        :cb-has-noindex="false"
        :disable-bootstrap-css="false"
        :disable-header-footer-css="false" />
      <!-- ===================================================================
      End: Meta Section
      ==================================================================== -->
      <!-- ===================================================================
      Start: Header Section
      ==================================================================== -->
      <app-header :hasInvert="false" :hasBasicHeader="false" :hasBackToCareers="false" />
      <!-- ===================================================================
      End: Header Section
      ==================================================================== -->
      <!-- ===================================================================
      Start: Body Section
      ==================================================================== -->
        <div class="cb-body">
            <div class="cs-main">
                <div class="cs-row">
                    <div class="cs-hero">
                        <div class="container sm-pad-zero">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/bitgym/bitgym-banner.jpg);background-position:center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/bitgym/bitgym-white.svg" style="filter: brightness(0) invert(1);" width="120" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                Cardio app for Android, iOS, and Kindle, which loads up a video of different beautiful locations around the world that you can run along to.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cs-block">
                        <div class="cs-article-big">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="cs-article" style="max-width: 900px;">
                                            <h1 class="cs-article__title">
                                                How BitGym Grew, with an 80% Boost in Productivity, using Chargebee
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                From one-time in-app purchases to a Kickstarter campaign to a Netflix-inspired subscription business model, BitGym has seen it all. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cs-block">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-sm-offset-3">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/bitgym/bitgym.png" width="150" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                It freed up 40% of my time from dealing with payment-related work and that directly translates to an 80% direct increase in our company productivity just by switching to Chargebee.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Keerthik Omanakuttan, Co-founder
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-11 col-sm-offset-1">
                                <div class="cs-devider"></div>
                            </div>
                        </div>
                    </div>
                    <div class="cs-block">
                        <div class="cs-article-full">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4 col-md-offset-1 col-sm-12 col-md-push-6">
                                        <div class="cs-sidebar" id="nav">
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    Changing demands = pivoting business model
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        App store to Netflix model
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        After the market validation from the Kickstarter campaign, BitGym started exploring the subscription business model, to justify the pricing and the value of the product. 
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Basic Stripe capabilities = spaghetti code
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        At the time they signed up for Stripe subscriptions, BitGym was confined by having to write custom code for supporting coupons. Not allowing for additional payment options added to lost opportunities.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Boost in customers with flexible payments and discounts
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Having allowed for additional payment methods like Amazon Payments and PayPal, along with credit cards as well as automating discounts helped BitGym brought a bump to the volume of customers.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Automated Billing = Renewed focus on core product
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        By automating all of their subscriptions, recurring billing and payments, BitGym saw an 80% improvement to the team’s productivity.
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="/trial-signup/" class="cs-sidebar__action">Signup for free</a>
                                        </div>

                                        
                                    </div>


                                    <div class="col-md-5 col-md-offset-1 col-sm-10 col-sm-offset-1 col-md-pull-5">
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Problem
                                            </div>
                                            <div class="cs-article__desc">
                                                BitGym was launched as a video library under a streaming model under Virtual Active’s branding — a toolkit for exercise games that brought in the experience of Wii Fit and Xbox Kinect to mobile, combined with computer vision tech. The SDK uses the front-facing camera on any mobile device to track a person's exercise and movement and cardio workout.
                                            </div>
                                            <div class="cs-article__desc">
                                                After they launched, BitGym initially used app-store transactions to buy individual videos as in-app purchases. The challenge with that was the longevity of the product — people would download one or two videos and then never come back. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Around the same time, Netflix was gaining popularity and BitGym was inspired to use their subscription model. The backend payment pages from Netflix were, however, homegrown. And building something similar was proving to be complex. With an aim to diversify beyond the app store, BitGym started integrating with Stripe subscriptions. 
                                            </div>
                                            <div class="cs-article__desc">
                                                They ran a Kickstarter campaign for 30,000 dollars as a market validation and raised around 35,000 dollars where they basically pitched the idea of subscription to a large and growing library of beautiful locations around the world that can be used during workouts.
                                            </div>
                                            <div class="cs-article__desc">
                                                But Stripe subscriptions, at that time, proved to be rudimentary, and they ended up building a lot of custom code on their payments page using JavaScript. They also ended up writing custom code to build a customer portal where customers can manage their own subscriptions — including pausing, reactivating, or cancelling their subscriptions, or request a refund, on demand. As the user base grew, the technical debt to maintain their code base which was becoming more spaghetti with each passing day grew exponentially. 
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                Understanding the maturity in the subscription market, BitGym decided to invest in a solution that would abstract the payments for them and free up more of their time from billing-related work while allowing them to provide better support to their customers. They had very specific needs when they started shopping for a solution — all of which Chargebee checked on their list. These included:
                                            
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        The ability to smoothly transition all of BitGym's existing paying customers from Stripe into the new framework. Chargebee allowed a one-time full featured import of BitGym's subscribers &mdash; at that point they had more than 1000 customers. <a href="/subscription-billing-migration-chargebee/" target="_blank" class="cs-link" style="margin-top: 12px;">Read more about Migration with Chargebee </a>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Solid developer documentation and APIs on par with Stripe.
                                                    </li>
                                                    <li class="cs-article__item">
                                                        A richer feature set for automated recurring billing and subscription management. <a href="/recurring-billing-invoicing/" target="_blank" class="cs-link" style="margin-top: 12px;">See how Chargebee does Recurring Billing and Invoicing</a>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        An efficient self-serve dashboard that provided more flexibility on payment and customers’ subscription management. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Flexible and trackable coupons and special discounts and bundles just as they were expanding their marketing options. They also wanted to have the ability to accept annual subscriptions
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Additional options to accept more payment methods beyond just credit cards, including Amazon and PayPal. <a href="/recurring-payments/payment-methods/" target="_blank" class="cs-link" style="margin-top: 12px;">See how Chargebee offers multiple payment methods</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Payoff
                                            </div>
                                            <div class="cs-article__desc">
                                                <ul class="cs-article__list">
                                                    <li class="cs-article__item">
                                                        <strong>Additional payment options = Additional Growth</strong> As BitGym started accepting more customers because of additional payment methods including Credit Card (via Stripe), Amazon payments, and PayPal, this alone increased monthly paying customers by 2x at that time. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Smart customer acquisition using seasonal discounts</strong> With interest from fitness enthusiasts peaking around the bloom season, BitGym wanted to capitalize on this seasonal behaviour and expand their acquisition channels. Chargebee’s coupons and special discounts, with a one-time payment link, helped in bringing in more subscriptions to BitGym. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Automatic billing for increased efficiency</strong> Chargebee’s Checkout and Self-Serve portal allowed BitGym’s customers to manage their own subscriptions and payment details. This directly translated to an 80% direct increase in their productivity just by switching to Chargebee. <a href="/recurring-payments/checkout-experience/" target="_blank" class="cs-link" style="margin-top: 12px; margin-left: 0">See how Chargebee delivers the best Checkout Experience</a>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Straightforward APIs that just work:</strong>  In Keerthik’s own words — “The  Stripe API allowed for a lot more low-level access. And so we ended up just spaghetti-coding our way through, making all of the things we wanted to happen happen. With Chargebee there were many different levels in the APIs. We made a lot of our decisions on how we architected our payment server based on the Chargebee APIs. And that led to it being generally more stable, maintainable and readable. We now use most of the high-level stuff to do things that felt more like the right way and fall back to the low-level only when we really need to do something very specific and complicated.”
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cs-row" id="pg-affix-footer">
                    <div class="cs-block">
                        <div class="cs-testimonial-full">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-10 col-sm-offset-1 col-md-8">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/bitgym/bitgym.png" width="184" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Chargebee's API's are good, not just because they are well documented and relatively straight-forward in using, but also that it's just a good framework to structure all of the backend processes for billing, for all of the custom code that does need to be written for a company.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <img src="/static/website/version/images/case-study/bitgym/keerthik-omanakuttan.jpeg" class="hidden-xs" width="72" alt="" />
                                                — Keerthik Omanakuttan, Co-founder
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <!-- ===================================================================
      End: Body Section
      ==================================================================== -->
      <!-- ===================================================================
      Start: Footer Section
      ==================================================================== -->
      <app-footer />
      <!-- ===================================================================
      End: Footer Section
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
      // jQuery methods/functions should be placed inside the methods
      methods: {},
      // jQuery interaction should be placed inside the mounted method
      mounted() {
        if($(window).width() > 1023){
            $('#nav').affix({
                offset: {     
                    top: $('#nav').offset().top + 340,
                    bottom: ($('#pg-affix-footer').outerHeight(true) + $('footer').outerHeight(true)) + 200
                }
            }).on('affix.bs.affix',function(){
                setAffixContainerSize();
            });

            /*Setting the width of the sidebar (I took 10px of its value which is the margin between cols in my Bootstrap CSS*/
            function setAffixContainerSize(){
                $('#nav').width($('#nav').parent().innerWidth()-112);
            }

            $(window).resize(function(){
                setAffixContainerSize();
            });
        }
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
    #ch-js-header-cloned {
      display: none;
    }
    .affix-top {
        position: relative;
    }
    .affix {
        position: fixed;
        top: -340px;
    }
    .affix-bottom {
        position: absolute;
    }  
    @media screen and (min-width: 768px){
        .cs-hero__content{
            left: 30px;
            right: auto;
        }
        .cs-hero__logo img{
            width: 180px;
        }
        .cs-hero__banner--shadow{
            background: linear-gradient(-135deg, rgba(0, 0, 0, 0) 0%, black 100%)
        }
    }
    @media screen and (max-width: 767px){
        .cs-hero__banner{
            background-position: center !important;
        }
    }
  </style>
  <!-- ===========================================================================
  End: Style Section
  ============================================================================ -->
