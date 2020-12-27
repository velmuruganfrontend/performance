<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta 
            :cb-title="'Deep Subscription Analytics & SaaS Reporting | Chargebee'" 
            :cb-desc="'Track and report your key subscription metrics the easiest way, gain actionable insights from your churn and revenue metrics through different angles and interpretations.'" 
            :cb-url="'/saas-reporting/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/product.css'"
            :cb-head-script="''"
            :cb-body-script="'/static/website/version/scripts/product.js'"
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
        <section class="cp-hero cp-hero--sr">
            <div class="cp-hero__container">
                <!-- ------------------------------------------------------------
                Left Arrow
                ------------------------------------------------------------  -->
                <a pjax href="/saas-accounting-and-taxes/" class="cp-hero__arrow cp-hero__arrow--left">
                    <svg width="44px" height="41px" viewBox="0 0 44 41" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
                        <title>→</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Page-4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Subscriptions-version-2" transform="translate(-1286.000000, -329.000000)" fill="#73361F">
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
                    <div class="cp-hero__header" style="max-width: inherit;">
                        <h1 class="cp-hero__title">
                            Take <span class="cp-hero__highlight">Decisive Actions</span> with <br class="visible-lg">Comprehensive Subscription Analytics
                        </h1>
                        <p class="cp-hero__desc">
                            Get 360° business visibility with subscription analytics and insight-driven dashboards.<br class="visible-lg"> Drive data-backed decisions that keep your business aligned with growth.
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
                <a pjax href="/subscription-management/" class="cp-hero__arrow cp-hero__arrow--right">
                    <svg width="44px" height="41px" viewBox="0 0 44 41" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
                        <title>→</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Page-4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Subscriptions-version-2" transform="translate(-1286.000000, -329.000000)" fill="#73361F">
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
                    <div class="p-menu p-menu--sr animated" id="p-menu-fixed">
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
                                <a pjax href="/recurring-payments/" class="p-menu__tab">
                                    Recurring <br /> Payments
                                </a>
                                <a pjax href="/saas-accounting-and-taxes/" class="p-menu__tab">
                                    Accounting <br /> and Taxes
                                </a>
                                <a pjax href="/saas-reporting/" class="p-menu__tab p-menu__tab--active">
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
                            Reporting <br /> and Analytics
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
                        Unearth Your<br>Revenue Story
                    </div>
                    <div class="cp-media__main">
                        <div class="cp-media__list">
                            <div class="cp-media__item">
                                <strong>Probe multiple perspectives</strong> for each metric to get a holistic view of the underlying problem.
                            </div>
                            <div class="cp-media__item">
                                <strong>Derive Intelligent Insights</strong> about your subscription business with billing, leakage, and transaction analytics.
                            </div>
                            <div class="cp-media__item">
                                <strong>Build your own reports</strong> without any developer dependency from any data source within Chargebee.                           
                            </div>
                            <div class="cp-media__item">
                                <strong>Customize your MRR calculation</strong> by picking what recurring and non-recurring charges get computed in your MRR.
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
                                    Subscription Overview and Health Reports    
                                </h2>
                                <h3 class="cp-article__title">
                                    A Single View of Your Business <br class="visible-lg" /> Growth and Risk Stats
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-sm-offset-2 col-md-11 col-md-offset-1">
                        <div class="row">
                            <div class="col-md-7 col-md-push-5">
                                <div class="cp-article__figure" style="margin-left: 30px;">
                                    <img src="/static/website/version/images/product/reporting-and-analytics/reporting-first-section.svg" alt="" class="img-responsive" width="460">
                                </div>
                            </div>
                            <div class="col-md-5 col-md-pull-7">
                                <div class="cp-article__content">
                                    <p class="cp-article__desc">
                                        Go beyond the basics of MRR by diving into its sister metrics like Average Revenue Per Subscription, Lifetime Value, etc. And then go even deeper into MRR growth across plans, and analyze retention cohorts month-on-month. Collate your north-star metrics and all the associated reports to get a 360° view of your business into a single consolidated dashboard. If the 150+ readymade reports don’t quench your thirst, our Report Builder housed in the product gives you infinite other reporting possibilities. It’s the same data with multiple lenses to look at it through.
                                    </p>
                                </div>

                                <div class="cp-article__action"> 
                                    <a href="https://www.chargebee.com/docs/revenuestory-reportbuilder.html" class="cp-link cp-link--icon">
                                        Build your own reports 
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
        <section class="cp-panel">
            <div class="container text-center">
                <a href="/trial-signup/?ref=revenuestory" class="cp-panel__container">
                    <div class="cp-panel__icon cp-panel__icon--alt">
                        <img src="/static/resources/revenue-story/logo.svg" alt="" class="img-responsive">
                    </div>
                    <div class="cp-panel__desc">
                        Try RevenueStory - Chargebee’s subscription analytics platform &rarr;
                    </div>
                </a>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->


        <!-- -------------------------------------------------------------------
        Start: Parallax
        -------------------------------------------------------------------  -->
        <section class="cp-parallax cp-parallax--userlanee">  
            <div class="container">
                <div class="col-sm-7 col-sm-offset-5 col-md-5 col-md-offset-7">
                    <div class="cp-parallax__body">
                        <div class="cp-parallax__header">
                            <img src="/static/website/version/images/case-study/userlane/userlane.png" alt="" class="img-responsive" width="170" style="filter: brightness(0) invert(1);">
                        </div>
                        <div class="cp-parallax__content">
                            A lot of accounting systems do not understand the logic of subscriptions. So, they don’t show a large part of MRR. They probably connect to payment gateways and collect payments. But to get the whole reporting in terms of subscriptions, different plans, and billing dates — that is challenging. And that’s why you need a solution like Chargebee that understands this better.
                        </div>
                       <div class="cp-parallax__footer">
                            <div class="cp-parallax__author">
                                - Katharina Baudrex, Head of Finance, Userlane
                            </div>

                            <a href="/customers/userlane/" class="cp-parallax__action cp-link cp-link__white--icon cp-link__white"> 
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
        <section class="cp-article cp-article--alt">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-1">
                        <div class="cp-article__body">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">
                                   Global Expansion Reporting 
                                </h2>
                                <h3 class="cp-article__title">
                                   ‘Know Your Geography’ Checks with Analytics from Across Your Markets 
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    Good that you are scaling across borders. But do you know whether APAC prefers to pay by card, or what your most popular plans in the EU are? Chargebee lets you drill  down into specific regions, customer segments, and gateways for details. Having this information from day one of foraying into a new market would help you uncover hidden opportunities. 
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/recurring-payments/" class="cp-link cp-link--icon">
                                       Expand your global reach with payments & currencies
                                    </a>
                                </div>
                                 <div class="cp-article__action">
                                    <a href="/recurring-payments/dunning-management/" class="cp-link cp-link--icon">
                                       Recover 70%+ of failed payments with Smart Dunning
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-1">
                        <div class="cp-article__body cp-article__body--xs">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">
                                    Finance and Audit Reports
                                </h2>
                                <h3 class="cp-article__title">
                                    Seal Revenue Leakage with Gap-proof Financial Analysis
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    Drill into recurring and non-recurring revenue streams and analyze payments, refunds and credit notes. Investigate leakage by analyzing metrics across coupons, plans and acquisition sources. Map out accounts receivables by invoice status and age. And keep it real by comparing your expected MRR with the actual Realized Revenue in billing reports.
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/for-subscription-finance-operations/" class="cp-link cp-link--icon">
                                        See how Chargebee helps Enterprise Finance teams
                                    </a>
                                </div>
                                 <div class="cp-article__action">
                                    <a href="/saas-reporting/accounts-receivable-leakage-reports/" class="cp-link cp-link--icon">
                                        Revenue Leakage and receivables reporting
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
        Start: Paper
        -------------------------------------------------------------------  -->
        <section class="cp-paper">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-push-6">
                        <div class="cp-article__figure cp-article__figure--rgt">
                            <img src="/static/website/version/images/product/reporting-and-analytics/because-no-breakup-pocket.svg" alt="" class="img-responsive">
                        </div>
                    </div>
                    <div class="col-md-5 col-md-offset-1 col-md-pull-6">
                        <div class="cp-article cp-article--alt" style="margin-bottom: 0; margin-top: 30px;">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">
                                    Churn Reports
                                </h2>
                                <h3 class="cp-article__title">
                                    Because No Break-up<br class="visible-lg">Should Catch You Unaware
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    Nobody likes a break-up. Don’t let your hard earned customers churn away, by proactively monitoring their retention and growth. Identify gaps in engagement by analyzing which customers churn, why and when. And go beyond just “knowing” by diagnosing the root cause of your churn miseries.
                                </p>
                            </div>
                            <div class="cp-article__action"> 
                                <a href="/customer-retention/churn-management/" class="cp-link cp-link--icon"> 
                                    Explore the Churn Management Suite
                                </a> 
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
                                   Growth, Acquisition & Retention 
                                </h2>
                                <h3 class="cp-article__title">
                                    Faster Time to Monitor Spikes and Dips in Your Metrics
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    A dozen revenue initiatives could be worthy of your team's attention. How do you surface it to them? With Chargebee, you can schedule to receive and send snapshots of any dashboard and custom report to anyone in your organization. You can also set an alert to notify you when a certain metric crosses a given limit. 
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="https://www.chargebee.com/blog/revenuestory-alerts-goal-tracking" class="cp-link cp-link--icon" style="margin-bottom: 15px;">
                                     Set alerts and monitor Goals
                                    </a>
                                      <a href="https://www.chargebee.com/docs/chargebee-analytics.html#email-scheduling" class="cp-link cp-link--icon">
                                         Schedule Email with Snapshots of Reports and Dashboards 
                                    </a>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-1">
                        <div class="cp-article__body cp-article__body--xs">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">
                                    Operational Reports
                                </h2>
                                <h3 class="cp-article__title">
                                    Stay on Top of Everyday Metrics Impacting Acquisition and Retention
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    It’s agonizing to see prospects come all the way to your checkout page only to drop off. Track, iterate and minimize drop-offs on what could easily be the most important page on your website, with Cart Abandonment reports. But why stop with the top of your acquisition funnel? See how well you perform in recovering potentially lost revenue with detailed dunning summary reports.
                                </p>
                            </div> 
                            <div class="cp-article__action">
                                <a href="/press/chargebee-cart-abandonment-reporting-feature/" class="cp-link cp-link--icon">
                                    Cart abandonment reports
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
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-panel">
            <div class="container text-center">
                <a href="/subscription-metrics-analysis-tool/" class="cp-panel__container">
                    <div class="cp-panel__icon">
                        <img src="/static/website/version/images/product/reporting-and-analytics/revenue-md-logo.svg" alt="" class="img-responsive">
                    </div>
                    <div class="cp-panel__desc">
                        Unable to pin down the reason for your churn? <span class="cp-link cp-link--icon">Try RevenueMD</span>
                    </div>
                </a>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->

         <!-- -------------------------------------------------------------------
        Start: Footer
        -------------------------------------------------------------------  -->
        <section class="cp-footer container hidden-xs">
            <div class="col-sm-10 col-sm-offset-1">
                <div class="cp-footer__container">
                    <div class="cp-footer__title">
                        Your subscription metrics tell you stories. <br class="visible-lg">Get the power to read them, with Chargebee.
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
    
    export default {
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
     }
</style>
<!-- ===========================================================================
End: Style
============================================================================ -->