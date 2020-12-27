<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta 
            :cb-title="'Subscriber Lifecycle Automation for High Growth Businesses | Chargebee'" 
            :cb-desc="'Chargebee\'s subscription lifecycle automation software lets you manage your order to revenue flow without any manual intervention or operational hiccups. 3000+ successful SaaS companies use Chargebee for subscription management.'"
            :cb-url="'/subscriber-lifecycle-automation/'"   
            :cb-image="''"
            :cb-style="'/static/website/version/styles/product.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/rellax/1.7.1/rellax.min.js,/static/website/version/scripts/product.js'"
            :cb-has-noindex="false"/>
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- Start Main Body Content -->
        <!--<div class="flexrow mobile-menu--expanded">
            <div class="mobile-menu__close" id="close-mobile-menu">
                <img src="/static/website/version/images/product/icon/mobile-menu-close.svg" />
            </div>
            <a pjax class="menu-items" href="/subscription-management/">
                Subscription <br /> Management
            </a>
            <a pjax class="menu-items" href="/recurring-billing-invoicing/">
                Billing and <br /> Invoicing
            </a>
            <a pjax class="menu-items" href="/recurring-payments/">
                Recurring <br /> Payments
            </a>
            <a pjax class="menu-items" href="/saas-accounting-and-taxes/">
                Accounting <br /> and Taxes
            </a>
            <a pjax class="menu-items" href="/saas-reporting/">
                Reporting <br /> and Analytics
            </a>
        </div>--> 
        <!-- ===================================================================
        Start: Website Hero
        ==================================================================== -->
        <div class="gaussian">
        <div id="cp-hero">
        <section class="cp-hero cp-hero--sm">
            <!-- ------------------------------------------------------------
            Shape Animation
            ------------------------------------------------------------- -->
            <div class="cp-shape hidden-xs">
                <div class="cp-circle cp-circle--1 rellax"  data-rellax-speed="-2"></div>
                <div class="cp-circle cp-circle--2 rellax"  data-rellax-speed="-4"></div>
                <div class="cp-circle cp-circle--3 rellax"  data-rellax-speed="-5"></div>
                <div class="cp-circle cp-circle--4 rellax"  data-rellax-speed="-7"></div>
                <div class="cp-circle cp-circle--5 rellax"  data-rellax-speed="3"></div>

                <div class="cp-dot cp-dot--1 rellax"  data-rellax-speed="3"></div>

                <div class="cp-wavys">
                    <div class="cp-wavy cp-wavy--1 rellax"  data-rellax-speed="1">
                        <svg enable-background="new 0 0 188.3 9.1" version="1.1" viewBox="0 0 188.3 9.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                            <style type="text/css">
                                .st0{fill:#98b0dd;}
                            </style>
                            <path class="st0" d="m144.2 9.1c-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1-0.9-2.2-1.4-3.5-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-2.5 2.5-0.7-0.7 2.5-2.5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c1.1-1.1 2.6-1.7 4.1-1.7s3 0.6 4.1 1.7l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c1.1-1.1 2.5-1.7 4.1-1.7s3 0.6 4.1 1.7l2.5 2.5-0.7 0.7-2.5-2.5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-0.8-0.9-2-1.4-3.3-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.6 1.7-4.1 1.7z"/>
                        </svg>
                    </div>
                    <div class="cp-wavy cp-wavy--1 rellax"  data-rellax-speed="1">
                        <svg enable-background="new 0 0 188.3 9.1" version="1.1" viewBox="0 0 188.3 9.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                            <style type="text/css">
                                .st0{fill:#98b0dd;}
                            </style>
                            <path class="st0" d="m144.2 9.1c-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1-0.9-2.2-1.4-3.5-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-2.5 2.5-0.7-0.7 2.5-2.5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c1.1-1.1 2.6-1.7 4.1-1.7s3 0.6 4.1 1.7l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c1.1-1.1 2.5-1.7 4.1-1.7s3 0.6 4.1 1.7l2.5 2.5-0.7 0.7-2.5-2.5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-0.8-0.9-2-1.4-3.3-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.6 1.7-4.1 1.7z"/>
                        </svg>
                    </div>
                    <div class="cp-wavy cp-wavy--1 rellax"  data-rellax-speed="1">
                        <svg enable-background="new 0 0 188.3 9.1" version="1.1" viewBox="0 0 188.3 9.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                            <style type="text/css">
                                .st0{fill:#98b0dd;}
                            </style>
                            <path class="st0" d="m144.2 9.1c-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1-0.9-2.2-1.4-3.5-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-2.5 2.5-0.7-0.7 2.5-2.5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c1.1-1.1 2.6-1.7 4.1-1.7s3 0.6 4.1 1.7l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c1.1-1.1 2.5-1.7 4.1-1.7s3 0.6 4.1 1.7l2.5 2.5-0.7 0.7-2.5-2.5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-0.8-0.9-2-1.4-3.3-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.6 1.7-4.1 1.7z"/>
                        </svg>
                    </div>
                </div>

                <div class="cp-triangle cp-triangle--1"></div>
                <div class="cp-triangle cp-triangle--2 hidden-xs"></div>
            </div>
            <!-- ------------------------------------------------------------
            Shape Animation
            ------------------------------------------------------------- -->
            <div class="cp-hero__container">
                <div class="cp-hero__body">
                    <div class="cp-hero__header">
                        <h1 class="cp-hero__title">
                            Improve your Subscription Workflow <span class="cp-hero__highlight">Efficiency by 5x</span>
                        </h1>
                        <p class="cp-hero__desc">
                            Automate your subscription lifecycle management from lead to ledger with complete flexibility.  
                        </p>
                    </div>
                    <div class="cp-hero__actions">
                        
                        <div class="cp-hero__action">
                            <a href="/schedule-a-demo/" class="cp-btn">Schedule a demo</a>
                        </div>
                        <div class="cp-hero__action">
                            <a href="/trial-signup/" class="cp-btn cp-btn--ghost">Sign up for free</a>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
        </div>
        <!-- ====================================================================
        End: Website Hero
        ===================================================================== --> 
        <!-- ====================================================================
        Start: Website Body
        ===================================================================== -->
        <section class="cp-navs"> 
        </section>
        <div id="main-content">
        <!-- -------------------------------------------------------------------
        Start: media
        -------------------------------------------------------------------  -->
        <section class="cp-media">
            <div class="container">
                <div class="cp-media__container">
                    <div class="cp-media__aside">
                        <div class="cp-media__aside--img">
                            <img src="/static/website/version/images/product/common/creation.svg" width="39" />
                        </div>
                        Automate<br> Order-to-Revenue<br> workflow 
                    </div>
                    <div class="cp-media__main">
                        <div class="cp-media__list">
                            <div class="cp-media__item">
                                <strong>Manage Taxes Automatically</strong>  in your subscriptions and stay up-to-date with compliance rules.
                            </div>
                            <div class="cp-media__item">
                                <strong>Automate Quote-to-Cash</strong> and send proforma invoices with options to edit, extend, accept, and pay.
                            </div>
                            <div class="cp-media__item">
                                <strong>Accept Recurring Payments</strong> online and offline, via any payment method from anywhere in the world.
                            </div>
                            <div class="cp-media__item">
                                <strong>Go Global and Local</strong> by accepting payments in 100+ local currencies and enabling multiple languages at Checkout.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Media
        -------------------------------------------------------------------  -->


        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">
                        <div class="cp-article__body">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">  
                                    Trial Management 
                                </h2>
                                <h3 class="cp-article__title">Convert More with a Smooth<br class="visible-lg">Trial-to-Paid Workflow</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-sm-offset-2 col-md-11 col-md-offset-1">
                        <div class="row">
                            <div class="col-md-7 col-md-push-5">
                                <div class="cp-article__figure"> 
                                    <img src="/static/website/version/images/vb-pages/subscription-trial-management.png" alt="subscription trial management" class="img-responsive">
                                </div>
                            </div>
                            <div class="col-md-5 col-md-pull-7">
                                <div class="cp-article__content">
                                    <p class="cp-article__desc">
                                        Add friction early in the cycle or widen your top-funnel acquisition with free and paid trials. Drive conversions by engaging users throughout their trial period, with the option to extend it. When they’re ready to convert, allow them to go live on any of your existing plans for a low-touch process, or have your sales executive talk to them and create a plan and pricing strategy that suits their needs best. 
                                    </p>
                                </div>
                                <div class="cp-article__actions" style="display: block;">
                                    <div class="cp-article__action">
                                        <a href="/subscription-management/saas-trial-management/" class="cp-link cp-link--icon">Find the right trial strategy</a>
                                    </div>
                                    <div class="cp-article__action">
                                        <a href="/for-self-service-subscription-business/?ref=navbar/" class="cp-link cp-link--icon">Chargebee for self-serve workflows</a>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->


        <!-- -------------------------------------------------------------------
        Start: Parallax
        -------------------------------------------------------------------  -->
        <section class="cp-parallax cp-parallax--acloudguru"> 
            <div class="container">
                <div class="col-sm-7 col-sm-offset-5 col-md-6 col-md-offset-6"> 
                    <div class="cp-parallax__body">
                        <div class="cp-parallax__header"> 
                            <img src="/static/website/version/images/case-study/cloudguru/logo.svg" alt="A Cloud Guru" class="img-responsive" width="180" style="filter: brightness(0) invert(1);">
                        </div>
                        <div class="cp-parallax__content">
                            The ease of use was important. Even if a customer didn't talk to a salesperson, they could go online, buy a subscription, and get started. We had automated a big part of the process. So there was an easy transition between the Chargebee platform and A Cloud Guru, to handle subscription management and easily onboard users.
                        </div>
                        <div class="cp-parallax__footer">
                            <div class="cp-parallax__author">
                                - George K. Tsigounis, (Former) Product Manager, A Cloud Guru
                            </div> 
                            <a href="/customers/acloudguru/" class="cp-parallax__action cp-link cp-link__white--icon cp-link__white">
                                Read Case Study 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        Start: Parallax
        -------------------------------------------------------------------  -->
        
        <!-- -------------------------------------------------------------------
        Start: Paper
        -------------------------------------------------------------------  -->
        <section class="cp-paper">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <div class="cp-article__figure cp-article__figure--alt" style="bottom: 0;margin-bottom: 0;padding: 0 50px;">
                            <img src="/static/website/version/images/vb-pages/recurring-payments-management.png" alt="recurring payments management" class="img-responsive">
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="cp-article cp-article--alt" style="margin-bottom: 0;">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">
                                    Recurring Payments
                                </h2>
                                <h3 class="cp-article__title">
                                    Deliver a Slick Payment Experience 
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    Don’t lose that customer because their wallet is in the other room. Allow customers to pay via any payment method from cards to direct debit, online or offline, without worrying about security and compliance. Chargebee’s smart routing helps you pick payment gateways based on customer’s location and currency. Easily set up backup payment options and plug leakage from payment failures and gateway-related fees.
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/recurring-payments/" class="cp-link cp-link--icon">Manage Recurring Payments</a>
                                </div>
                                <div class="cp-article__action">
                                    <a href="https://www.chargebee.com/docs/gateway_settings.html" class="cp-link cp-link--icon">Learn more about Smart Routing</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Paper
        -------------------------------------------------------------------  -->

        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article cp-article--alt">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-1">
                        <div class="cp-article__body">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">
                                    Customizable Billing Logic
                                </h2>
                                <h3 class="cp-article__title">
                                    Flexible Recurring Billing for Every <br class="visible-lg">Possible Scenario
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    Bill your customers fortnightly, every blue moon, or on your favorite day of the week. You set the billing rules and Chargebee automatically handles everything else - from invoicing to collections. Set expectations with proforma invoices in case of subscriptions with contract terms, or show “upcoming billing details” at the time of checkout. Set cancellation rules and automatically charge termination fees in case of premature termination.
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/recurring-billing-invoicing/" class="cp-link cp-link--icon">Chargebee’s Recurring Billing Engine</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-1">
                        <div class="cp-article__body cp-article__body--xs">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">
                                    Subscription Order Management 
                                </h2>
                                <h3 class="cp-article__title">
                                    Manage Subscriptions Gracefully <br class="visible-lg"> as You Scale
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    Sign up customers with a secure zero-code checkout that's designed to convert. Give your customers the power to manage their subscriptions using self-serve portals. When a customer upgrades or downgrades their subscription, Chargebee automatically handles proration in future invoices. When someone cancels their subscription, issue credit notes to process refunds or charge a termination fee automatically.
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/subscription-management/" class="cp-link cp-link--icon">
                                        Subscription Management with Chargebee  
                                    </a>
                                </div>
                                 <div class="cp-article__action">
                                    <a href="/subscription-management/handle-prorations/" class="cp-link cp-link--icon"> 
                                        Handle prorations automatically
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->

         <!-- -------------------------------------------------------------------
        Start: Parallax
        -------------------------------------------------------------------  -->
        <section class="cp-parallax cp-parallax--trail"> 
            <div class="container">
                <div class="col-sm-7 col-sm-offset-5 col-md-5 col-md-offset-7">
                    <div class="cp-parallax__body">
                        <div class="cp-parallax__header"> 
                            <img src="/static/website/version/images/case-study/trail/trail-logo-white.svg" alt="Trail" class="img-responsive" width="80" style="filter: brightness(0) invert(1);">
                        </div>
                        <div class="cp-parallax__content">
                            Flexibility around subscription types is probably the biggest win — being able to view all our subscriptions in one place and learning absolutely everything in the subscription trail. Chargebee cut-down time spent managing subscriptions by about 80% compared to our previous process.
                        </div>
                        <div class="cp-parallax__footer">
                            <div class="cp-parallax__author">
                                - Nick Allen, Product Manager, Trail
                            </div>    
                            <a href="/customers/trail/" class="cp-parallax__action cp-link cp-link__white--icon cp-link__white">
                                Read Case Study 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        Start: Parallax
        -------------------------------------------------------------------  -->


        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
       <!--<section class="cp-article">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 col-md-5 col-md-offset-1">
                        <div class="cp-article__body">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">
                                    Subscription Lifecycle Management
                                </h2>
                                <h3 class="cp-article__title">Get Visibility into Every Subscriber’s Lifecycle</h3>
                            </div>
                            <div class="cp-article__content">
                                 <div class="cp-article__figure hidden-md hidden-lg">
                                    <img src="/static/website/version/images/product/subscription-management/subscription-mgmt-lifecycle.svg" alt="" class="img-responsive">
                                </div>
                                <p class="cp-article__desc">
                                    Automate the boring-yet-essential chunk of subscription lifecycle management like nudging trial users to the paid plan, collecting payment information, managing upgrade or downgrade billing adjustments, and subscription renewals. And save the human touch for things that matter.
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/recurring-billing-invoicing/new-email-notifications/" class="cp-link cp-link--icon">
                                        Communicate better with email notifications
                                    </a>
                                </div>
                                 <div class="cp-article__action">
                                    <a href="/subscription-management/handle-prorations/" class="cp-link cp-link--icon">
                                        Simplify billing adjustments with proration
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-6">
                         <div class="cp-article__figure visible-md visible-lg mTopLg">
                            <img src="/static/website/version/images/product/subscription-management/subscription-mgmt-lifecycle.svg" alt="" class="img-responsive">
                        </div>
                    </div>
                </div>
            </div>
        </section>--> 
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->


        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article cp-article--center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                        <div class="cp-article__body">
                            <div class="cp-article__figure">
                                <img src="/static/website/version/images/product/logos.svg" alt="" class="img-responsive" width="640">
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    No matter how you handle subscriptions today, Chargebee can fit in with your existing tech stack and exemplify operational efficiency
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/integrations/salesforce/" class="cp-link cp-link--icon">Salesforce</a>
                                </div>
                                <div class="cp-article__action">
                                    <a href="/integrations/xero-recurring-billing/" class="cp-link cp-link--icon">Xero</a>
                                </div>
                                <div class="cp-article__action">
                                    <a href="/integrations/" class="cp-link cp-link--icon">View all integrations</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->
        <!-- ===================================================================
        End: Website Body
        ==================================================================== -->

        <!-- -------------------------------------------------------------------
        Start: Footer
        -------------------------------------------------------------------  -->
        <section class="cp-footer container hidden-xs">
            <div class="col-sm-8 col-sm-offset-2">
                <div class="cp-footer__container">
                    <div class="cp-footer__title">
                        Scale your subscription management <br class="visible-lg" />in style with Chargebee.
                    </div>
                    <div class="cp-footer__actions">
                        <div class="cp-footer__action">
                            <a href="/trial-signup/" class="cp-btn cp-btn--primary">Sign up for free</a>
                        </div>
                        <div class="cp-footer__action">
                            <a href="/schedule-a-demo/" class="cp-btn cp-btn--ghost cp-btn--ghost-primary">Schedule a demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Footer
        -------------------------------------------------------------------  -->
        </div>        
        <!-- ===================================================================
        Start: Website Footer
        ==================================================================== -->
        <app-footer />
        <!-- ===================================================================
        End: Website Footer
        ==================================================================== -->
        </div>
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
    import AppHeader from '~/components/AppHeader.vue';
    import AppFooter from '~/components/AppFooter.vue';
    
    export default {
        data () {
            return {
                structuredData: { 
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "mainEntity": [
                        {
                            "@type": "SoftwareApplication",
                            "name": "Chargebee - Subscription Management Software",
                            "applicationCategory": "https://schema.org/BusinessApplication",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.7",
                                "ratingCount": "314"
                            }
                        }
                    ]
                }
            }
        },
        head () {
            return {
                script: [
                    { type: 'application/ld+json', innerHTML: JSON.stringify(this.structuredData) }
                ]
            }
        },
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter
        },

        mounted() {
            $(window).on('load', function(){
                setTimeout(function(){
                    $('.cp-hero__highlight').addClass('cp-hero__highlight--active')
                }, 750)

                //For rellax js parallax
                var rellax = new Rellax('.rellax');
            })
        }
    }
</script>
<!-- ===========================================================================
End: Scripts
============================================================================ -->
<!-- ===========================================================================
Start: Style
============================================================================ -->
<style type="text/css">
    #ch-js-header-cloned{
        display: none;
    }
    .cp-navs { 
        margin-bottom: 120px; 
    }
    @media only screen and (max-width: 991px) {
        .cp-navs {margin-bottom: 60px;}
    }
    @media only screen and (max-width: 767px) {
        .cb-footer{
           padding-top: 0; 
        }
        .l-footer { 
          padding-top: 0px;
        }
         .cp-hero__container{
           padding-bottom: 60px; 
        }
        .cp-media__aside br {
            display: none;
        } 
        .cp-article__figure.cp-article__figure--alt{
            padding: 0 !important;
        } 
     }
</style>
<!-- ===========================================================================
End: Style
============================================================================ -->