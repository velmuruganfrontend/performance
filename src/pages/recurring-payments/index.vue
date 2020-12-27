<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta 
            :cb-title="'Recurring Payments Solution for Subscription Businesses | Chargebee'" 
            :cb-desc="'Automate and accept recurring payments, wall-to-wall with Chargebee. Integrated with Stripe, PayPal, and 22 other payment gateways. Support global taxes, multiple payment methods, and smart payment recovery.'" 
            :cb-url="'/recurring-payments/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/product.css,https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.8.0/css/flag-icon.min.css'"
            :cb-head-script="''"
            :cb-body-script="'/static/website/version/scripts/product.js,https://cdnjs.cloudflare.com/ajax/libs/rellax/1.7.1/rellax.min.js'"
            :cb-has-noindex="false"/>
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- Start Main Body Content -->
        <div class="flexrow mobile-menu--expanded">
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
        </div>
        <!-- ===================================================================
        Start: Website Hero
        ==================================================================== -->
        <div class="gaussian">
        <div id="cp-hero">
        <section class="cp-hero cp-hero--rp">
            <!-- ------------------------------------------------------------
            Shape Animation
            ------------------------------------------------------------- -->
            <div class="cp-shape cp-shape--three hidden-xs">
                <div class="cp-circle cp-circle--1 rellax"  data-rellax-speed="5"></div>
                <div class="cp-circle cp-circle--2 rellax"  data-rellax-speed="-4"></div>
                <div class="cp-circle cp-circle--3 hidden-xs rellax"  data-rellax-speed="-5"></div>
                <div class="cp-circle cp-circle--5  rellax"  data-rellax-speed="1"></div>

                <div class="cp-dot cp-dot--1 hidden-xs rellax"  data-rellax-speed="2"></div>

                <div class="cp-wavys">
                    <div class="cp-wavy cp-wavy--1 rellax"  data-rellax-speed="1">
                        <svg enable-background="new 0 0 188.3 9.1" version="1.1" viewBox="0 0 188.3 9.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                            <style type="text/css">
                                .st0{fill:#29d495;}
                            </style>
                            <path class="st0" d="m144.2 9.1c-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1-0.9-2.2-1.4-3.5-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-2.5 2.5-0.7-0.7 2.5-2.5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c1.1-1.1 2.6-1.7 4.1-1.7s3 0.6 4.1 1.7l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c1.1-1.1 2.5-1.7 4.1-1.7s3 0.6 4.1 1.7l2.5 2.5-0.7 0.7-2.5-2.5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-0.8-0.9-2-1.4-3.3-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.6 1.7-4.1 1.7z"/>
                        </svg>
                    </div>
                    <div class="cp-wavy cp-wavy--1 rellax"  data-rellax-speed="1">
                        <svg enable-background="new 0 0 188.3 9.1" version="1.1" viewBox="0 0 188.3 9.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                            <style type="text/css">
                                .st0{fill:#29d495;}
                            </style>
                            <path class="st0" d="m144.2 9.1c-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1-0.9-2.2-1.4-3.5-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-2.5 2.5-0.7-0.7 2.5-2.5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c1.1-1.1 2.6-1.7 4.1-1.7s3 0.6 4.1 1.7l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c1.1-1.1 2.5-1.7 4.1-1.7s3 0.6 4.1 1.7l2.5 2.5-0.7 0.7-2.5-2.5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-0.8-0.9-2-1.4-3.3-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.6 1.7-4.1 1.7z"/>
                        </svg>
                    </div>
                    <div class="cp-wavy cp-wavy--1 rellax"  data-rellax-speed="1">
                        <svg enable-background="new 0 0 188.3 9.1" version="1.1" viewBox="0 0 188.3 9.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                            <style type="text/css">
                                .st0{fill:#29d495;}
                            </style>
                            <path class="st0" d="m144.2 9.1c-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1-0.9-2.2-1.4-3.5-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-2.5 2.5-0.7-0.7 2.5-2.5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c1.1-1.1 2.6-1.7 4.1-1.7s3 0.6 4.1 1.7l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c1.1-1.1 2.5-1.7 4.1-1.7s3 0.6 4.1 1.7l2.5 2.5-0.7 0.7-2.5-2.5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-0.8-0.9-2-1.4-3.3-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.6 1.7-4.1 1.7z"/>
                        </svg>
                    </div>
                </div>

                <div class="cp-triangle cp-triangle--1"></div>
                <div class="cp-triangle cp-triangle--2"></div>
            </div>
            <!-- ------------------------------------------------------------
            Shape Animation
            ------------------------------------------------------------- -->
            <div class="cp-hero__container">
                <!-- ------------------------------------------------------------
                Left Arrow
                ------------------------------------------------------------  -->
                <a pjax href="/recurring-billing-invoicing/" class="cp-hero__arrow cp-hero__arrow--left">
                    <svg width="44px" height="41px" viewBox="0 0 44 41" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
                        <title>→</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Page-4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Subscriptions-version-2" transform="translate(-1286.000000, -329.000000)" fill="#00523E">
                                <g id="Group-10" transform="translate(110.000000, 199.000000)">
                                    <polygon id="→" points="1200.51007 171 1196.37584 166.651515 1208.97539 153.39899 1176 153.39899 1176 147.60101 1208.97539 147.60101 1196.37584 134.348485 1200.51007 130 1220 150.5"></polygon>
                                </g>
                            </g>
                        </g>
                    </svg>
                </a>
                <!-- ------------------------------------------------------------
                Left Arrow
                ---------------------------------------=--------------------  -->
                <div class="cp-hero__body">
                    <div class="cp-hero__header">
                        <h1 class="cp-hero__title">
                            <span class="cp-hero__highlight">Collect, Manage, and Maximize</span>
                            <br class="visible-lg"> Recurring Payments
                        </h1>
                        <p class="cp-hero__desc">
                            Don’t just accept recurring payments. Boost subscription revenue at scale, across 100+ currencies and payment methods.
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
                <!-- ------------------------------------------------------------
                Right Arrow
                ------------------------------------------------------------  -->
                <a pjax href="/saas-accounting-and-taxes/" class="cp-hero__arrow cp-hero__arrow--right">
                    <svg width="44px" height="41px" viewBox="0 0 44 41" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
                        <title>→</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Page-4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Subscriptions-version-2" transform="translate(-1286.000000, -329.000000)" fill="#00523E">
                                <g id="Group-10" transform="translate(110.000000, 199.000000)">
                                    <polygon id="→" points="1200.51007 171 1196.37584 166.651515 1208.97539 153.39899 1176 153.39899 1176 147.60101 1208.97539 147.60101 1196.37584 134.348485 1200.51007 130 1220 150.5"></polygon>
                                </g>
                            </g>
                        </g>
                    </svg>
                </a>
                <!-- ------------------------------------------------------------
                Right Arrow
                ------------------------------------------------------------  -->
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
            <div class="container">
            <!-- ----------------------------------------------------------------
            Start: Navigation For desktop
            ----------------------------------------------------------------  -->
            <div class="p-menu-parent">
                <div class="hidden-sm hidden-xs">
                    <div class="p-menu p-menu--rp animated" id="p-menu-fixed">
                        <div class="p-menu__container">
                            <a href="/" class="p-menu__logo">
                                <img src="/static/resources/brand/chargebee-icon-black.svg" alt="Chargebee Logo" width="30">
                            </a>
                            <div class="p-menu__content">
                                <a pjax href="/subscription-management/" class="p-menu__tab">
                                    Subscription <br /> Management
                                </a>
                                <a pjax href="/recurring-billing-invoicing/" class="p-menu__tab">
                                    Billing and <br /> Invoicing
                                </a>
                                <a pjax href="/recurring-payments/" class="p-menu__tab p-menu__tab--active">
                                    Recurring <br /> Payments
                                </a>
                                <a pjax href="/saas-accounting-and-taxes/" class="p-menu__tab">
                                    Accounting <br /> and Taxes
                                </a>
                                <a pjax href="/saas-reporting/" class="p-menu__tab">
                                    Reporting <br /> and Analytics
                                </a>
                            </div>
                            <div class="p-menu__action">
                                <a cn-mark-signup="true" href="/trial-signup/" class="p-menu__signup">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="visible-xs visible-sm">
                    <div class="p-menu p-menu--mobile">
                        <div class="selected-menu" id="selected-menu">
                            Recurring <br /> Payments
                        </div>
                        <div class="show-menu" id="show-menu">
                            <img src="/static/website/version/images/product/icon/mobile-menu-group.svg" width="28px" height="28px" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- ----------------------------------------------------------------
            End: Navigation For desktop
            ----------------------------------------------------------------  -->
            </div>
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

                        Process Glitch-free<br> Recurring Payments
                    </div>
                    <div class="cp-media__main">
                        <div class="cp-media__list">
                            <div class="cp-media__item">
                                <strong>Deliver a slick payment experience</strong> with a completely customizable PCI-Compliant checkout.
                            </div>
                            <div class="cp-media__item">
                                <strong>De-risk your business</strong> from any single payment provider with plug-and-play integrations with 23+ gateways.
                            </div>
                            <div class="cp-media__item">
                                <strong>Expand your global footprint</strong> by offering pricing options in 100+ local currencies and payment methods.
                            </div>
                            <div class="cp-media__item">
                                <strong>Reduce involuntary churn</strong> with a configurable Smart Dunning for recurring payment failures.
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
                                    Offer Multiple Payment Methods for Recurring Payments
                                </h2>
                                <h3 class="cp-article__title">
                                    Accept Recurring Payments in Any Form, <br class="visible-lg">From Anywhere in the World
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-sm-offset-2 col-md-11 col-md-offset-1">
                        <div class="row">
                            <div class="col-md-7 col-md-push-5">
                                <div class="cp-article__figure" style="margin-left: 30px;">
                                    <img src="/static/website/version/images/product/payment-gateway.png" alt="" class="img-responsive" width="500">
                                </div>
                            </div>
                            <div class="col-md-5 col-md-pull-7">
                                <div class="cp-article__content">
                                    <p class="cp-article__desc">
                                        Start accepting payments within minutes from anywhere in the world with out-of-the-box integrations with 23+ payment gateways and 100+ currencies. Accept payments via credit cards, Direct Debit, and digital wallets like  Google Pay, Worldpay, Amazon Pay, and Apple Pay. And why leave out the big fish? Sip some fine single malt as you collect offline payments through bank transfers and checks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1">
                        <div class="cp-article__actions">
                            <div class="cp-article__action">
                                <a href="/recurring-payments/#payment-gateways" class="cp-link cp-link--icon">
                                    List of payment gateways supported
                                </a>
                            </div>
                            <div class="cp-article__action">
                                <a href="/recurring-payments/multicurrency/" class="cp-link cp-link--icon">
                                    Learn about billing in multiple currencies
                                </a>
                            </div>
                            <div class="cp-article__action">
                                <a href="/recurring-payments/payment-methods/" class="cp-link cp-link--icon">
                                    Explore online and offline payment methods
                                </a>
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
        <section class="cp-parallax cp-parallax--rp">
            <div class="container">
                <div class="col-sm-7 col-sm-offset-5 col-md-5 col-md-offset-7">
                    <div class="cp-parallax__body">
                        <div class="cp-parallax__header">
                            <img src="/static/website/version/images/product/study-com.png" alt="Study" class="img-responsive" width="184">
                        </div>
                        <div class="cp-parallax__content">
                            “We utilize Stripe as our processing solution and Chargebee was able to "sit up on top" with no complications, better access to real-time information pertaining to subscription metrics and ability to accept a more diverse set of payment types.”
                        </div>

                        <div class="cp-parallax__footer">
                            <div class="cp-parallax__author">
                                - Tim Beiser, Director of Finance
                            </div>

                            <a href="/customers/" class="cp-parallax__action cp-link cp-link__white--icon cp-link__white">
                                Read Case Study
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Parallax
        -------------------------------------------------------------------  -->
        <payment-gateway />
        <!-- -------------------------------------------------------------------
        Start: Paper
        -------------------------------------------------------------------  -->
        <section class="cp-paper cp-paper--alt">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-6">
                        <div class="cp-article__figure">
                            <img src="/static/website/version/images/product/codacy-pa.svg" style="margin-left:auto;margin-right:auto;" alt="" class="img-responsive">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <div class="cp-article" style="margin-bottom: 0;">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">
                                    Customizable Checkout Page
                                </h2>
                                <h3 class="cp-article__title">
                                    Zero-code and Completely Customizable Checkout Experience
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc" style="max-width: 400px;">
                                    Depending on your business model, your checkout page may range anywhere from “a form to collect payment details” to “the single most important page on your website”. Turn prospects into subscribers with PCI-Compliant checkout experiences that are as easy to integrate as dropping in a single line of code, and as customizable as you’d need them to be.
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/recurring-payments/checkout-experience/" class="cp-link cp-link--icon">
                                        Get a smoother checkout experience
                                    </a>
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
                                    Smart Routing Across Gateways
                                </h2>
                                <h3 class="cp-article__title">
                                    Reduce Payment Gateway Fees <br class="visible-lg">By Smart Routing Recurring Payments
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    As you scale across geographies, the transaction fees raked up by payment gateways for certain payment methods and foreign currencies just become insane. But you shouldn’t have to leak revenue for that insanity. Chargebee lets you route specific payments and currencies to your preferred gateway with its Smart Routing logic.
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="https://www.chargebee.com/docs/gateway_settings.html" class="cp-link cp-link--icon">
                                        Learn how smart routing works
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-1">
                        <div class="cp-article__body cp-article__body--xs">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">
                                    Recover Failed Payments
                                </h2>
                                <h3 class="cp-article__title" style="max-width: inherit;">
                                    Give Customers a Second Chance to Pay. And Then a 12th.
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    Payment failures don't necessarily mean lost revenue. Set a custom schedule for up to twelve retries for failed payments. Or just enable Smart Dunning and let Chargebee figure out the ideal retry logic across days and times to deliver a higher success rate (and lesser angry frowns from your payment provider). But better still, ensure customers never even get into dunning by setting up backup payment options to tackle failed payment methods.
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/customer-retention/revenue-recovery/" class="cp-link cp-link--icon">
                                        Check out smart dunning
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
        Start: Footer
        -------------------------------------------------------------------  -->
        <section class="cp-footer container">
            <div class="col-sm-8 col-sm-offset-2">
                <div class="cp-footer__container">
                    <div class="cp-footer__title">
                        Experience the smartest way to automate <br class="visible-lg">recurring payments with Chargebee.
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
        <!-- ===================================================================
        End: Website Body
        ==================================================================== -->
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
    import paymentGateway from '~/components/paymentGateway.vue';
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter,
            'payment-gateway': paymentGateway
        },

        mounted() {
            $(window).on('load', function(){
                setTimeout(function(){
                    $('.cp-hero__highlight').addClass('cp-hero__highlight--active')
                }, 750)

                //For rellax js parallax
                var rellax = new Rellax('.rellax');
            })
            // $('html, body').animate({
            //     'scrollTop' : $("#payment-gateways").position().top - 120
            // });
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
    #payment-gateways {
        padding: 120px 0 90px 0 !important;
    }
    @media (max-width: 991px) {
        #payment-gateways {
            padding: 90px 0 60px 0 !important;
        }
    }
    section.cp-parallax.cp-parallax--rp {
        margin-bottom: 20px !important;
    }
</style>
<!-- ===========================================================================
End: Style
============================================================================