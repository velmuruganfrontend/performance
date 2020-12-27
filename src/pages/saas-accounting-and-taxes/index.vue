<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'SaaS Accounting Simplified With Chargebee'"
            :cb-desc="'Automate SaaS accounting and billing in one window with Chargebee. Integrated with Xero, Quickbooks and more. Handle global/local taxes, revenue recognition, reconciliation and deferred revenue reporting seamlessly'"
            :cb-url="'/saas-accounting-and-taxes/'"
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
        <section class="cp-hero cp-hero--sab">
            <div class="cp-hero__container">
                <!-- ------------------------------------------------------------
                Left Arrow
                ------------------------------------------------------------  -->
                <a pjax href="/recurring-payments/" class="cp-hero__arrow cp-hero__arrow--left">
                    <svg width="44px" height="41px" viewBox="0 0 44 41" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
                        <title>→</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Page-4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Subscriptions-version-2" transform="translate(-1286.000000, -329.000000)" fill="#4C0078">
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
                            <span class="cp-hero__highlight">Simplify</span> SaaS Accounting<br class="visible-lg"> and <span class="cp-hero__highlight">Finance Operations</span>
                        </h1>
                        <p class="cp-hero__desc">
                            Bid goodbye to monthly spreadsheets and manual errors. Setup finance processes<br class="visible-lg"> to accelerate your subscription growth.
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
                <a pjax href="/saas-reporting/" class="cp-hero__arrow cp-hero__arrow--right">
                    <svg width="44px" height="41px" viewBox="0 0 44 41" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
                        <title>→</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Page-4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Subscriptions-version-2" transform="translate(-1286.000000, -329.000000)" fill="#4C0078">
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
                    <div class="p-menu p-menu--sab animated" id="p-menu-fixed">
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
                                <a pjax href="/saas-accounting-and-taxes/" class="p-menu__tab p-menu__tab--active">
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
                            Accounting <br /> and Taxes
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
                        Cushion your <br />Financial Planning
                    </div>
                    <div class="cp-media__main">
                        <div class="cp-media__list">
                            <div class="cp-media__item">
                                <strong>Scale peacefully</strong> knowing you’re always ahead of changing tax rules, compliance requirements, and EU-VAT complications.
                            </div>
                            <div class="cp-media__item">
                                <strong>Automate redundant manual work</strong> by connecting Chargebee with your finance tools that sync and automate grunt work.
                            </div>
                            <div class="cp-media__item">
                                <strong>Comply with GAAP & IFRS</strong> to seamlessly standardize your SaaS Accounting with the changing finance landscape.
                            </div>
                            <div class="cp-media__item">
                                <strong>Forecast with greater predictability</strong> by building accurate financial reports on top of your single source of truth.
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
                                    SaaS Accounting Integrations
                                </h2>
                                <h3 class="cp-article__title">
                                    Bring Enterprise-grade Automations <br class="visible-lg">to Your SaaS Accounting
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-sm-offset-2 col-md-11 col-md-offset-1">
                        <div class="row">
                            <div class="col-md-7 col-md-push-5">
                                <div class="cp-article__figure" style="margin-left: 30px;">
                                    <img src="/static/website/version/images/product/accounting-and-taxes/bring-enterprise-pocket.png" alt="" class="img-responsive" width="300">
                                </div>
                            </div>
                            <div class="col-md-5 col-md-pull-7">
                                <div class="cp-article__content">
                                    <p class="cp-article__desc">
                                        Tie accounting books with the right billing information in Chargebee. Map plans, addons, discounts, payments, refunds, bad debts and even ad-hoc charges right into your accounting solution. And reduce the risk of errors and the hours of grunt work that go with it, with accurate automatic syncs.
                                    </p>
                                </div>
                                <div class="cp-article__actions">
                                    <div class="cp-article__action">
                                        <a href="/saas-accounting-and-taxes/xero-accounting/" class="cp-link cp-link--icon">
                                            Chargebee + Xero
                                        </a>
                                    </div>
                                    <div class="cp-article__action">
                                        <a href="/saas-accounting-and-taxes/quickbooks-accounting/" class="cp-link cp-link--icon">
                                            Chargebee + QuickBooks
                                        </a>
                                    </div>
                                    <div class="cp-article__action">
                                        <a href="/saas-accounting-and-taxes/sage-intacct-integration/" class="cp-link cp-link--icon">
                                            Chargebee + Sage Intacct
                                        </a>
                                    </div>
                                    <div class="cp-article__action">
                                        <a href="/saas-accounting-and-taxes/oracle-netsuite-integration/" class="cp-link cp-link--icon">
                                            Chargebee + Oracle NetSuite
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
        Start: Parallax
        -------------------------------------------------------------------  -->
        <section class="cp-parallax cp-parallax--fishburners">
            <div class="container">
                <div class="col-sm-7 col-sm-offset-5 col-md-5 col-md-offset-7">
                    <div class="cp-parallax__body">
                        <div class="cp-parallax__header">
                            <img src="/static/website/version/images/product/accounting-and-taxes/fishburners_white.png" alt="fishburners_white" class="img-responsive" width="200">
                        </div>
                        <div class="cp-parallax__content">
                            “Our finance team no longer spends long hours on mundane manual work and we now have more time to do financial analysis and make strategic business decisions. The integration saves our finance team 32 hours a month from manual work.”
                        </div>
                        <div class="cp-parallax__footer">
                            <div class="cp-parallax__author">
                                - Aayush Patel, Financial Controller
                            </div>

                            <a href="/customers/fishburners/" class="cp-parallax__action cp-link cp-link__white--icon cp-link__white">
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
                                    Tax Management
                                </h2>
                                <h3 class="cp-article__title">Stay Up-to-date with<br class="visible-lg"> Changing Tax Landscapes</h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    Most of us are neither tax specialists nor from the IRS. Which makes accurately factoring in tax liabilities a pain we shouldn’t have to take. Sell across geographies, and choose if your pricing should be inclusive of destination tax. Factor in US Sales Tax, Australian GST and even the indomitable EU-VAT automatically. And stay up-to-date with changing regulations and tax rules across multiple jurisdictions without having to get a crash course CPA.
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/recurring-billing-invoicing/saas-sales-tax/" class="cp-link cp-link--icon">
                                        Automatically manage taxes for your subscriptions
                                    </a>
                                </div>
                                <div class="cp-article__action">
                                    <a href="/resources/guides/understanding-eu-vat-guide/" class="cp-link cp-link--icon">
                                        Simplify EU-VAT management
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-1">
                        <div class="cp-article__body cp-article__body--xs">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">
                                    Revenue Recognition and Deferred Revenue Accounting
                                </h2>
                                <h3 class="cp-article__title">
                                    Globally Compliant<br class="visible-lg"> Revenue Management
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    Manage and report revenue with GAAP-compliant accounting standards. Define, implement, and manage the way revenue should be recognized, with diverse revenue templates. And relax knowing your revenue recognition will always be accurate even through the most complex billing scenarios.
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/saas-accounting-and-taxes/revenue-recognition-deferred-revenue/" class="cp-link cp-link--icon">
                                        Automate RevRec and Deferred Revenue Reporting
                                    </a>
                                </div>
                                <div class="cp-article__action">
                                    <a href="/integrations/softrax/" class="cp-link cp-link--icon">
                                        ASC 606 & IFRS 15 RevRec with Chargebee + Softrax
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
        <section class="cp-parallax cp-parallax--card">
            <div class="container">
                <div class="col-sm-6 col-md-5">
                    <div class="cp-parallax__body">
                        <div class="cp-parallax__header">
                            <img src="/static/website/version/images/product/accounting-and-taxes/proxyclick-white.png" alt="proxyclick" class="img-responsive" width="170">
                        </div>
                        <div class="cp-parallax__content">
                            “Chargebee’s integration with Avalara has been a game-changer and lifesaver that helped us expand to the US.”
                        </div>
                        <div class="cp-parallax__footer">
                            <div class="cp-parallax__author">
                                — Jean-Thomas Cock, Head of Finance
                            </div>

                            <a href="/customers/proxyclick/" class="cp-parallax__action cp-link cp-link__white--icon cp-link__white">
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
        <!-- -------------------------------------------------------------------
        Start: Card
        -------------------------------------------------------------------  -->
        <div class="container space-temp" >
            <div class="row">
                <div class="col-md-6 col-md-offset-6">
                    <div class="cp-card cp-article cp-article--alt revealOnScroll" data-animate="fadeInUp">
                        <div class="cp-card__body">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">
                                    One-Click Reconciliation
                                </h2>
                                <h3 class="cp-article__title" style="max-width: 480px !important;">
                                    Automatically Reconcile<br class="visible-lg"> Books of Accounts with Your Bank
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    Chargebee’s Chrome Reconciliation plug-in lets you match payment gateway statements on Stripe with your accounting system with just the click of a button.
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/saas-accounting-and-taxes/xero-accounting/payment-reconciliation/" class="cp-link cp-link--icon">
                                        Simplify your payment reconciliation
                                    </a>
                                </div>
                                <div class="cp-article__action">
                                    <a href="https://chrome.google.com/webstore/detail/chargebee-payment-reconci/gpemlmpjblhbjffmhbalomoonjblaolb" class="cp-link cp-link--icon">
                                        Chargebee’s Chrome Reconciliation
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="cp-card__footer">
                            <img src="/static/website/version/images/product/accounting-and-taxes/chrome-badge.svg" alt="Plugin" class="img-responsive">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- -------------------------------------------------------------------
        End: Card
        -------------------------------------------------------------------  -->

        <!-- -------------------------------------------------------------------
        Start: Footer
        -------------------------------------------------------------------  -->
        <section class="cp-footer container">
            <div class="col-sm-10 col-sm-offset-1">
                <div class="cp-footer__container">
                    <div class="cp-footer__title">
                        Drive accuracy to your SaaS accounting.<br class="visible-lg">To the dime, every time.
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


</style>
<!-- ===========================================================================
End: Style
============================================================================ -->
