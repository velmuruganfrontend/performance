<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta 
            :cb-title="'Billing System Software - Chargebee'" 
            :cb-desc="'Learn how Chargebee’s billing system software powers subscription businesses to bill their customers and accept payments effortlessly.'" 
            :cb-url="'/billing-system-software/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/product.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js,https://js.hsforms.net/forms/v2.js,https://js.chilipiper.com/marketing.js'"
            :cb-has-noindex="false"/>
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Hero
        ==================================================================== -->

        <div class="gaussian">
            <div id="cp-hero">
                <section class="cp-hero cp-hero--rbi cp-hero--temp">
                    <div class="cp-hero__container">
                        <div class="cp-hero__body">
                            <div class="cp-hero__header" style="max-width: inherit;">
                                <h1 class="cp-hero__title">
                                    Get Paid Effortlessly with <br class="visible-lg visible-md">Chargebee’s Billing System Software
                                </h1>
                                <p class="cp-hero__desc">
                                    From calculating billing charges, accepting recurring payments to sending timely invoices automatically, Chargebee is the complete billing system software to streamline your entire subscription billing process.
                                </p>
                            </div>
                            <!-- <div class="cp-hero__actions">
                                <div class="cp-hero__action">
                                    <a href="/trial-signup/" class="cp-btn">Sign up for free</a>
                                </div>
                                <div class="cp-hero__action">
                                    <a href="/schedule-a-demo/" class="cp-btn cp-btn--ghost">Schedule a demo</a>
                                </div>
                            </div> -->
                            <inline-form :same-page="true" />
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
            <div id="main-content">
                <section class="cp-article">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2">
                                <img :src="allImagePath" class="img-responsive cp-momentum__image" alt="Revenue Operations">
                            </div>
                        </div>
                    </div>
                </section>
                <!-- -------------------------------------------------------------------
                Start: Component - 3
                -------------------------------------------------------------------  -->
                <section class="cp-article">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1">
                                <div class="cp-article__body" style="margin-bottom: 52px;">
                                    <div class="cp-article__header">
                                        <h2 class="cp-article__title">
                                            Why automate your Billing Software?
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-11 col-md-offset-1">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <div class="media-left"> 
                                                <img src="/static/website/version/images/icon/sprint/icons/level-up-your-billing-ops-efficiency.svg" alt="Revenue Operations">
                                            </div> 
                                            <div class="media-body"> 
                                                <h3 class="cp-article__title">
                                                    Level up your Billing Ops Efficiency
                                                </h3> 
                                                <p class="cp-article__desc">
                                                    By automating your billing operations, leaving tax calculations to the software, you can eliminate manual errors and generate accurate finance reports. Transform your billing platform into a single source of truth for all things finance.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="media">
                                            <div class="media-left"> 
                                                <img src="/static/website/version/images/icon/sprint/icons/reduce-revenue-leakage.svg" alt="Best Reviewed. Always!">
                                            </div> 
                                            <div class="media-body"> 
                                                <h3 class="cp-article__title">
                                                    Reduce Revenue Leakage
                                                </h3> 
                                                <p class="cp-article__desc">
                                                    With automated invoicing, accepting recurring payments 24/7 through multiple methods like credit cards, ACH, missed or late payments will become a thing of the past.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>        
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <div class="media-left"> 
                                                <img src="/static/website/version/images/icon/sprint/icons/revenue-operations.svg" alt="24x7 Customer Support">
                                            </div> 
                                            <div class="media-body"> 
                                                <h3 class="cp-article__title">
                                                    Keep your Finance Team Sane
                                                </h3> 
                                                <p class="cp-article__desc">
                                                    Bid goodbye to monthly spreadsheets and manual errors. From payments to accounts, consolidate all your finance data under a single roof. Setup smart and modern finance processes to accelerate your subscription growth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="media">
                                            <div class="media-left"> 
                                                <img src="/static/website/version/images/icon/sprint/icons/increase-customer-retention.svg" alt="Security">
                                            </div> 
                                            <div class="media-body"> 
                                                <h3 class="cp-article__title">
                                                    Increase Customer Retention
                                                </h3> 
                                                <p class="cp-article__desc">
                                                    With inbuilt capabilities like coupon management, prorated billing, variable billing cycles, multiple payment methods - customer experience is baked even in your billing process.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>        
                            </div>
                        </div>
                    </div>
                </section>
                <!-- -------------------------------------------------------------------
                End: Component - 3
                -------------------------------------------------------------------  -->
                <!-- -------------------------------------------------------------------
                Start: Component - 3
                -------------------------------------------------------------------  -->
                <section class="cp-article cp-momentum">
                    <div class="container">      
                        <div class="row">
                            <div class="col-sm-6 col-md-4 col-md-offset-1">
                                <img style="margin: 0 auto 20px auto;" src="/static/website/version/images/sprint/momentum-leader-2020.svg" class="img-responsive" alt="Revenue Operations">
                                <div class="cp-momentum__heading">
                                    Chargebee - The Momentum Leader in Subscription Billing and Management
                                </div>
                            </div>

                            <div class="col-sm-6 col-md-6 col-md-offset-1">
                                <div class="cp-momentum__card">
                                    <div class="cp-momentum__icon">
                                        <img src="/static/website/version/images/sprint/build-or-buy-icon.svg" class="img-responsive" alt="Revenue Operations">
                                    </div>
                                    <div class="cp-momentum__content">
                                        <div class="cp-momentum__title">
                                            To Build or Buy?
                                        </div>
                                        <div class="cp-momentum__desc" style="max-width: 250px;">
                                            To build a billing system or buy one? Download this guide to make the right decision.
                                        </div>
                                        <div class="cp-footer__action" style="margin: 0;margin-top: 24px;">
                                            <a href="/static/resources/downloads/guides/Build-vs-Buy-Chargebee.pdf" target="_blank" class="cp-btn cp-btn--primary">
                                                Download Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- -------------------------------------------------------------------
                End: Component - 3
                -------------------------------------------------------------------  -->


                <!-- -------------------------------------------------------------------
                Start: Article
                -------------------------------------------------------------------  -->
                <section class="cp-article cp-article--alt">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1">
                                <div class="cp-article__body">
                                    <div class="cp-article__header">
                                        <h3 class="cp-article__title">
                                            Smart Billing Logic
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-8 col-sm-offset-2 col-md-11 col-md-offset-1">
                                <div class="row">
                                    <div class="col-md-7 col-md-push-5">
                                        <div class="cp-article__figure mTopMd--neg" style="margin-left: 30px;">
                                            <img src="/static/website/version/images/icon/sprint/automated-billing/bill-automatically.png" alt="Bill Automatically" class="img-responsive">
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-md-pull-7">
                                        <div class="cp-article__content">
                                            <p class="cp-article__desc">
                                                Configure the rules to automatically calculate billing charges taking into account plans, add-ons, prorations, discounts, coupons, and taxes.
                                            </p>
                                        </div>

                                        <div class="cp-article__actions">
                                            <div class="cp-article__action">
                                                <a href="/subscription-management/handle-prorations/" class="cp-link cp-link--icon">
                                                    Learn more about Proration Handling 
                                                </a>
                                            </div>
                                            <div class="cp-article__action">
                                                <a href="https://www.chargebee.com/docs/calendar-billing.html" class="cp-link cp-link--icon">
                                                    Learn more about Calendar Billing 
                                                </a>
                                            </div>
                                            <div class="cp-article__action">
                                                <a href="/recurring-billing-invoicing/metered-usage-billing/" class="cp-link cp-link--icon">
                                                    Learn more about Usage Based Billing
                                                </a>
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
                Start: Article
                -------------------------------------------------------------------  -->
                <section class="cp-article cp-article--alt" with_in_this_section>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-md-offset-0 col-md-6">
                                <div move_this>
                                    <div class="cp-article__figure">
                                        <img src="/static/website/version/images/product/billing-and-invoices/automatically-manage-pocket.png" alt="Synchronous Billing Logic" class="img-responsive">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-8 col-sm-offset-2 col-md-offset-0 col-md-6">
                                <div class="cp-article__body">
                                    <div class="cp-article__header">
                                        <h3 class="cp-article__title">
                                            Robust Invoicing System
                                        </h3>
                                    </div>
                                    <div class="cp-article__content">
                                        <div move_here></div>
                                        <p class="cp-article__desc">
                                            Invoice customers - for both offline and online payments - with detailed line items, tax details, and a customized look-and-feel. Customize invoices, check invoice status, and perform invoice operations like adding credits, refund etc. based on customer requests.
                                        </p>
                                        <p class="cp-article__desc">
                                            Give customers the option to consolidate all charges across multiple subscriptions into a single invoice, on a single date with Consolidated Invoices.
                                        </p>
                                    </div>
                                    <div class="cp-article__actions">
                                        <div class="cp-article__action">
                                            <a href="https://www.chargebee.com/docs/consolidated-invoicing.html" class="cp-link cp-link--icon">
                                                Learn more about Consolidated Invoicing 
                                            </a>
                                        </div>
                                        <div class="cp-article__action">
                                            <a href="/recurring-billing-invoicing/recurring-invoices/" class="cp-link cp-link--icon">
                                                Learn more about Recurring invoices 
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
                Start: Article
                -------------------------------------------------------------------  -->
                <section class="cp-article cp-article--alt">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1">
                                <div class="cp-article__body">
                                    <div class="cp-article__header">
                                        <h3 class="cp-article__title">
                                            Checkout and Payments Module
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-8 col-sm-offset-2 col-md-11 col-md-offset-1">
                                <div class="row">
                                    <div class="col-md-7 col-md-push-5">
                                        <div class="cp-article__figure mTopMd--neg" style="margin-left: 30px;">
                                            <img src="/static/website/version/images/recurring-payments/checkout/multiple-payment-methods-checkout.png" alt="Powerful Invoicing System" class="img-responsive">
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-md-pull-7">
                                        <div class="cp-article__content">
                                            <p class="cp-article__desc">
                                                Provide excellent customer checkout and post-payment experience with secure, PCI compliant checkout pages and payment recovery options. Reduce checkout friction by integrating with multiple payment gateways such as Stripe, Braintree for payment processing and supporting diverse payment options such as credit card, direct debit, wallets and more.
                                            </p>
                                        </div>

                                        <div class="cp-article__actions">
                                            <div class="cp-article__action">
                                                <a href="/recurring-payments/checkout-experience/" class="cp-link cp-link--icon">
                                                    Learn more about Self Checkout
                                                </a>
                                            </div>
                                            <div class="cp-article__action">
                                                <a href="/recurring-payments/" class="cp-link cp-link--icon">
                                                    Learn more about Recurring Payments
                                                </a>
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
                Start: Article
                -------------------------------------------------------------------  -->
                <section class="cp-article cp-article--alt" with_in_this_section>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-md-offset-0 col-md-6">
                                <div move_this>
                                    <div class="cp-article__figure">
                                        <img src="/static/website/version/images/recurring-payments/quickbooks-accounting/accounts-mapping-chart.png" alt="Intuitive Reporting" class="img-responsive" width="480">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-8 col-sm-offset-2 col-md-offset-0 col-md-6">
                                <div class="cp-article__body">
                                    <div class="cp-article__header">
                                        <h3 class="cp-article__title">
                                            Modern Accounting and Tax Management System
                                        </h3>
                                    </div>
                                    <div class="cp-article__content">
                                        <div move_here></div>
                                        <p class="cp-article__desc">
                                            Native integrations with your accounting softwares helps automating manual grunt work and eliminating manual errors from your process. Ace tax calculations, recognize revenue intuitively, build intelligent finance dashboards by consolidating numbers under a single hood.
                                        </p>
                                    </div>
                                    <div class="cp-article__actions">
                                        <div class="cp-article__action">
                                            <a href="/saas-accounting-and-taxes/" class="cp-link cp-link--icon">
                                                Learn More about Subscription Accounting
                                            </a>
                                        </div>
                                        <div class="cp-article__action">
                                            <a href="/saas-accounting-and-taxes/revenue-recognition-deferred-revenue/" class="cp-link cp-link--icon">
                                                Learn more about Revenue Recognition Engine
                                            </a>
                                        </div>
                                        <div class="cp-article__action">
                                            <a href="/saas-reporting/" class="cp-link cp-link--icon">
                                                Learn More about Subscription Analytics
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
                End: Component - 2
                -------------------------------------------------------------------  -->




                <!-- -------------------------------------------------------------------
                Start: Component - 3
                -------------------------------------------------------------------  -->
                <section class="cp-article cp-article--bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1">
                                <div class="cp-article__body" style="margin-bottom: 52px;">
                                    <div class="cp-article__header">
                                        <h2 class="cp-article__title">
                                            Why Chargebee? 
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-11 col-md-offset-1">       
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <div class="media-left"> 
                                                <img src="/static/website/version/images/icon/sprint/icons/security.svg" alt="Security">
                                            </div> 
                                            <div class="media-body"> 
                                                <h3 class="cp-article__title">Security</h3> 
                                                <p class="cp-article__desc">
                                                    Being PCI, SOC-1, SOC-2 compliant, Chargebee provides state-of-the-art security for your transactions. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <div class="media-left"> 
                                                <img src="/static/website/version/images/icon/sprint/icons/customer-support.svg" alt="24x7 Customer Support">
                                            </div> 
                                            <div class="media-body"> 
                                                <h3 class="cp-article__title">24x7 Customer Support </h3> 
                                                <p class="cp-article__desc">
                                                    Our customers should do what they do best and not worry about their billing. With our 24x7 customer support - we make sure that none of our customers feel stranded.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <div class="media-left"> 
                                                <img src="/static/website/version/images/icon/sprint/icons/best-reviewed-always.svg" alt="Revenue Operations">
                                            </div> 
                                            <div class="media-body"> 
                                                <h3 class="cp-article__title">Leader of the Pack</h3> 
                                                <p class="cp-article__desc">
                                                    There’s no review that’s more authentic than the one that comes from your paid users. According to G2, users rate Chargebee as the #1 solution for subscription billing.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="media">
                                            <div class="media-left"> 
                                                <img src="/static/website/version/images/icon/sprint/icons/revenue-operations.svg" alt="Best Reviewed. Always!">
                                            </div> 
                                            <div class="media-body"> 
                                                <h3 class="cp-article__title">All-in-One Subscription Revenue Operations Suite</h3> 
                                                <p class="cp-article__desc">
                                                    From lead to ledger - Chargebee’s feature set spans much wider than just Recurring Billing. You also get a dedicated subscription management system, revenue recognition engine and revenue operations suite literally for the same price.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>         
                            </div>
                        </div>
                    </div>
                </section>
                <!-- -------------------------------------------------------------------
                End: Component - 3
                -------------------------------------------------------------------  -->








                <!-- -------------------------------------------------------------------
                Start: Component - 4
                -------------------------------------------------------------------  -->
                <section class="cp-article">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <a href="/customers/trail/" target="_blank" class="cp-ttestimonial revealOnScroll" data-animate='fadeInUp'>
                                    <figure class="cp-ttestimonial__figure">
                                        <img src="/static/website/version/images/case-study/fishburners/fish_burners.png" alt="Chargebee Customers" class="img-responsive" width="180">
                                    </figure>
                                    <div class="cp-ttestimonial__content">
                                        Our finance team no longer spends long hours on mundane manual work and we now have more time to do financial analysis and make strategic business decisions. The Chargebee integration saves our finance team 32 hours a month from manual work.
                                    </div>
                                    <div class="cp-ttestimonial__author">
                                        — Aayush Patel, Financial Controller, Fishburners
                                    </div>
                                </a>
                            </div>


                            <div class="col-sm-10 col-sm-offset-1">
                                <div class="cp-tslider">
                                    <div class="cp-tslider__figure">
                                        <section class="customer-logos customer-logos__one slider">
                                            <div class="slide">
                                                <div class="doodle_bg"></div>
                                            </div>
                                            <div class="slide">
                                                <div class="envoy_bg"></div>
                                            </div>
                                            <div class="slide">
                                                <div class="freedom_bg"></div>
                                            </div>
                                            <div class="slide">
                                                <div class="freshworks_blck_bg"></div>
                                            </div>
                                            <div class="slide">
                                                <div class="knewton_logo_bg"></div>
                                            </div>
                                            <div class="slide">
                                                <div class="okta_bg"></div>
                                            </div>
                                            <div class="slide">
                                                <div class="percona_bg"></div>
                                            </div>
                                            <div class="slide">
                                                <div class="study_bg"></div>
                                            </div>
                                        </section>
                                    </div>
                                    <div class="cp-tslider__content">
                                        <a href="/customers/" class="cp-link">See all customers</a> who’ve untangled their subscription billing operations with Chargebee
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <!-- -------------------------------------------------------------------
                Start: Component - 4
                -------------------------------------------------------------------  -->



                <!-- -------------------------------------------------------------------
                Start: Component - 7
                -------------------------------------------------------------------  -->
                <!-- -------------------------------------------------------------------
                Start: Article
                -------------------------------------------------------------------  -->
                <section class="cp-article">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2">
                                <div class="cp-tpanels">
                                    <h2 class="cp-tpanels__title">
                                        Have more questions about Billing System or Billing Operations?
                                    </h2>
                                    <div class="cp-tpanels__container">
                                        <!-- =============================================
                                        Panel Start 
                                        ============================================== -->
                                        <div class="cp-tpanel" data-panel="true">
                                            <div class="cp-tpanel__bg"></div>
                                            <div class="cp-tpanel__title">
                                                What is automated billing system software?
                                            </div>
                                            <div class="cp-tpanel__desc" data-panel-desc="true">
                                                An automated billing system automates your entire billing process from invoice creation to issuing refunds without manual intervention, thereby eliminating any errors in the process.
                                            </div>
                                        </div>
                                        <!-- =============================================
                                        Panel End 
                                        ============================================== -->
                                        <!-- =============================================
                                        Panel Start 
                                        ============================================== -->
                                        <div class="cp-tpanel" data-panel="true">
                                            <div class="cp-tpanel__bg"></div>
                                            <div class="cp-tpanel__title">
                                                Can I integrate Chargebee with Quickbooks or Xero?
                                            </div>
                                            <div class="cp-tpanel__desc" data-panel-desc="true">
                                                Yes, both Quickbooks and Xero have a native integration with Chargebee that helps to streamline bookkeeping. The Chargebee Chrome plugin also automates reconciliation on your accounting system in just one click. <a href="/saas-accounting-and-taxes/" class="cp-link">Learn more</a>.
                                            </div>
                                        </div>
                                        <!-- =============================================
                                        Panel End 
                                        ============================================== -->
                                        <!-- =============================================
                                        Panel Start 
                                        ============================================== -->
                                        <div class="cp-tpanel" data-panel="true">
                                            <div class="cp-tpanel__bg"></div>
                                            <div class="cp-tpanel__title">
                                                Does a billing solution support multiple payment gateways?
                                            </div>
                                            <div class="cp-tpanel__desc" data-panel-desc="true">
                                                Yes. You can even drive customers to be subscribed via different gateways, by just configuring the gateways. You would set one by default and then can control change of gateway for specific subscriptions. Learn how in detail.
                                            </div>
                                        </div>
                                        <!-- =============================================
                                        Panel End 
                                        ============================================== -->
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
                End: Component - 7
                -------------------------------------------------------------------  -->



                <!-- -------------------------------------------------------------------
                Start: Footer
                -------------------------------------------------------------------  -->
                <section class="cp-footer container">
                    <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                        <div class="cp-footer__container">
                            <h2 class="cp-footer__title">
                                With Chargebee, you get more than just a billing system software - you get a partner who is invested in your growth.
                            </h2>
                            <img :src="allImagePath" style="margin: 0 auto 24px auto;" class="img-responsive" alt="Revenue Operations">
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
    import formInline from '~/components/inlineForm.vue';
    const axios = require('axios');
    export default {
        data () {
            return {
                structuredData:{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is automated billing system software?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "An automated billing system automates your entire billing process from invoice creation to issuing refunds without manual intervention, thereby eliminating any errors in the process."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I integrate Chargebee with Quickbooks or Xero?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, both Quickbooks and Xero have a native integration with Chargebee that helps to streamline bookkeeping. The Chargebee Chrome plugin also automates reconciliation on your accounting system in just one click."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Does a billing solution support multiple payment gateways?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. You can even drive customers to be subscribed via different gateways, by just configuring the gateways. You would set one by default and then can control change of gateway for specific subscriptions. Learn how in detail."
                            }
                        }
                    ]
                },
                allImagePath: '/static/website/version/images/sprint/g2-crowd-badge.svg',
                singleImagePath: '/static/website/version/images/sprint/momentum-leader-2020.svg'
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
            'app-footer': AppFooter,
            'inline-form': formInline
        },
        beforeCreate() {
            let defaultData = this
            axios.get('https://freegeoip.live/json/')
            .then(function (response) {
                var countryCode = response.data.country_code;
                var euroCountryList = ['CY','GR','EE','LV','LT','SJ','MD','BY','FI','AX','UA','MK','HU','BG','AL','PL','RO','XK','RU','PT','GI','ES','MT','FO','DK','IS','CH','SE','NL','AT','BE','DE','LU','IE','MC','FR','AD','LI','JE','IM','GG','SK','CZ','NO','VA','SM','IT','SI','ME','HR','BA','RS']
                if(euroCountryList.indexOf(''+countryCode+'') > -1){
                    defaultData.allImagePath = '/static/website/version/images/sprint/g2-crowd-badge-eu.svg'
                    defaultData.singleImagePath = '/static/website/version/images/sprint/momentum-leader-2020-eu.svg'
                }else{
                    defaultData.allImagePath = '/static/website/version/images/sprint/g2-crowd-badge.svg'
                    defaultData.singleImagePath = '/static/website/version/images/sprint/momentum-leader-2020.svg'
                }
            })
        },
        mounted() {
            $(window).on('load', function(){
                setTimeout(function(){
                    $('.cp-hero__highlight').addClass('cp-hero__highlight--active')
                }, 750)
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


            //For Panel = FAQ list click
            $('[data-panel]').click(function() {
                $(this).toggleClass('cp-tpanel--active').siblings().removeClass('cp-tpanel--active');
            });


            //Trigger Drift
            // $("#email_validation").on('click', function(){
            //     drift.api.startInteraction({ interactionId: 111909 });
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
    .cp-hero{
        overflow: initial;
    }
    @media (min-width: 768px) {
        .cp-hero--rbi{
            background: #fff7e6 url('/static/website/version/images/product/billing-and-invoices/billing-and-invoicing-bg.svg') bottom/contain no-repeat;
        }
    }
    @media (min-width: 1600px) {
        .cp-hero--rbi{
            background-size: cover;
        }
    }
    #ch-js-header-cloned{
        display: none;
    }
    .cp-shape {
        z-index: 0;
    }
    .cp-momentum__card{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 24px;
        border-radius: 8px;
        background-color: #F5F7FF;
        padding: 40px 70px;
    }
    .cp-momentum__heading{
        font-size: 24px;
        line-height: 36px;
        text-align: center;
    }
    .cp-momentum__title{
        font-size: 24px;
        font-weight: bold;
        line-height: 18px;
        margin-bottom: 10px;
    }
    @media (max-width: 767px) {
        .cp-hero__container {
            padding-bottom: 80px;
        }
        .cp-momentum__image{
            margin: auto;
            margin-top: -150px;
        }
        .cp-momentum__card{
            margin-top: 40px
        }
    }
    @media (min-width: 768px) {
        .cp-hero__container {
            padding-bottom: 100px;
        }
        .cp-momentum__image{
            margin: auto;
            margin-top: -160px
        }
    }
    @media (max-width: 991px){
        .cp-momentum__card{
            padding: 30px;
        }
    }
    @media (min-width: 992px){
       .cp-paper{
            max-height: 500px;
            overflow: hidden;
        }
        .cp-hero__container {
            padding-bottom: 160px;
        }
        .cp-momentum__image{
            margin: auto;
            margin-top: -200px
        }
        .cp-article--bg:before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            height: calc(100vh + 40px);
            background-color: #fff7e6;
            margin-top: -80px;
            max-height: 840px;
        }
    }
    /*@media (min-height: 700px) and (min-width: 992px){
        .cp-hero {
            min-height: 540px;
        }
    }*/





    .cp-hero--temp{
        margin-bottom: 120px;
    }
    .media{
        max-width: 480px;
        margin-bottom: 50px;
    }
    .media .cp-article__title{
        margin-bottom: 16px;
        font-size: 18px;
        font-weight: 700;
        line-height: 21px;
        margin-bottom: 8px;
    }
    .media .cp-article__desc{
        max-width: 380px;
    }
    .media-left img {
        max-width: 32px;
    }
    .media-left, .media>.pull-left{
        margin-right: 24px;
    }
    .cp-ttestimonial{
        max-width: none;
    }
    .formContainer{
        margin: auto;
    }
</style>
<!-- ===========================================================================
End: Style
============================================================================ -->