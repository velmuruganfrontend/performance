<template>
    <div>
        <app-meta
            :cb-title="'How to setup and accept recurring payments for a SaaS business - Chargebee'"
            :cb-desc="'Looking for a simple way to set up and accept recurring payments? Learn about the key evaluation questions to ask, the essential features to look for, and how Chargebee?s robust recurring billing solution can help.'"
            :cb-url="'/setup-and-accept-recurring-payments/'"
            :cb-image="'/static/resources/og/recurring-payments/setup-and-accept-recurring-payments.png'"
            :cb-style="'/static/website/version/styles/main.css,/static/website/version/styles/recurring-payments.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="'true'" />
        <div class="cb-body">
            <!-- =====================================================================================
            Content Part Start
            ====================================================================================== -->
            <main class="l-main">
                <!-- ===================================================================================
                Banner Part Start
                ==================================================================================== -->
                <section class="l-main__banner">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                <div class="cb-hero cb-hero--flex">
                                    <div class="cb-hero__header">
                                        <h1 class="cb-hero__title">
                                            Accept Recurring Payments Effortlessly With Chargebee
                                        </h1>
                                        <p class="cb-hero__desc">
                                            Setting up and accepting recurring payments don’t have to give you a headache. Chargebee covers trial period management, multi-currency pricing plans, recurring billing & subscription management, security and everything in between.
                                        </p>
                                    </div>
                                    <div class="cb-hero__footer">
                                        <div class="cb-hero__actions">
                                            <div class="cb-hero__action">
                                                <a cn-mark-signup="true" href="/trial-signup/?ref=recurring-payment" class="cb-btn cb-btn--lg cb-btn--primary cb-btn--shadow cb-btn--suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');" style="font-size: 18px;">
                                                    <strong>Try Chargebee for free</strong>
                                                </a>
                                            </div>
                                            <div class="cb-hero__action" style="margin-top: 12px;">
                                                <a href="/schedule-a-demo/?ref=recurring-payment" style="color: #fff;">
                                                    Schedule a Demo &rarr;
                                                </a>
                                            </div>

                                            <div class="cb-hero__arrows hidden-xs" id="cb-hero-arrow">
                                                <div class="cb-arrow cb-arrow--first"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =================================================================================
                Banner Part End
                ================================================================================== -->
                <!-- =================================================================================
                Two box Part start
                ================================================================================== -->
                <section class="l-main__banner l-main__banner-xs"  id="l-main--banner">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <div class="cb-hero" style="text-align: center; margin-bottom: 40px;">
                                    <h3 class="cb-hero__subtitle">
                                        What are recurring payments and how do they work?
                                    </h3>
                                    <p class="cb-hero__desc" style="max-width: 480px;">
                                        Recurring payments are payments that are automatically collected from your customers on a specific due date, at regular intervals of time, say, every month.
                                    </p>
                                    <p class="cb-hero__desc" style="max-width: 480px;">
                                        Accepting recurring payments involves two blocks:
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-2">
                                <div class="cb-card revealOnScroll" data-animate='fadeInLeft'>
                                    <div class="cb-card__title">
                                        Billing logic
                                    </div>
                                    <div class="cb-card__desc">
                                        Price calculation for purchases made, taking into account proration, grandfathering, etc and requesting a payment.
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-5 col-lg-4">
                                <div class="cb-card  revealOnScroll" data-animate='fadeInRight'>
                                    <div class="cb-card__title">
                                        Payment processing
                                    </div>
                                    <div class="cb-card__desc">
                                        The actual transaction where your customer’s card is charged and the amount is debited to your merchant account.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =================================================================================
                Two box Part End
                ================================================================================== -->
                <!-- =================================================================================
                Image Part start
                ================================================================================== -->
                <section class="l-main__row" style="margin: 0; position: relative;">

                    <div class="l-main__row-bg">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-md-7">
                                    <!-- <img src="/static/website/version/images/recurring-payments/cb-recurring-payments.svg" alt="Chargebee Billing Logic" class="img-responsive cb-main-img visible-sm visible-xs"> -->

                                    <div class="cw-graphic-anim">
                                        <div class="cw-graphic-text"></div>
                                        <div class="img-wrap">
                                            <img src="/static/website/version/images/recurring-payments/before.svg" class="img-responsive">
                                            <img src="/static/website/version/images/recurring-payments/after.svg" class="img-responsive">
                                        </div>
                                    </div>


                                </div>
                                <div class="col-sm-6 col-md-5"></div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6 col-md-7"></div>
                                <div class="col-sm-6 col-md-5">
                                    <div class="cb-hero cb-hero--invert cb-hero--mt-md">
                                        <div class="cb-hero__desc">
                                            It is possible to accept recurring payments with only a payment processor, as long as you have a self-built billing engine on your end or make use of the basic billing engines provided by popular payment gateways.
                                        </div>
                                        <div class="cb-hero__desc">
                                            It gets progressively harder to get paid as your products, services, customers and pricing scales. Free trials. Extensions. Evolving pricing tiers. Discounts. Credits. Upgrading customer plans. Taxes for multiple countries. Retrying failed payments. Every block you add means that someone (or something) has to do the work to tell the payment processors what payments to take and when.
                                        </div>
                                        <div class="cb-hero__desc">
                                            Recurring billing systems working on top of payment gateways simplify getting paid when you scale your subscription business.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =================================================================================
                Image Part End
                ================================================================================== -->
                <!-- =================================================================================
                Image Part start
                ================================================================================== -->
                <section class="l-main__row l-main__row-myxs">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-7 col-sm-offset-5 col-md-6 col-md-offset-6 col-lg-5 col-lg-offset-6">
                                <div class="cb-hero cb-hero--cta">
                                    <div class="cb-hero__header" style="margin-bottom: 24px;">
                                        <h2 class="cb-hero__heading">
                                            Start accepting<br class="visible-lg visible-md"> recurring payments today
                                        </h2>
                                    </div>
                                    <div  class="cb-hero__footer">
                                        <a cn-mark-signup="true" href="/trial-signup/?ref=recurring-payment" class="cb-btn cb-btn--lg cb-btn--primary cb-btn--shadow cb-btn--suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');" style="font-size: 18px;">
                                            <strong>Sign up for free</strong>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =================================================================================
                Image Part End
                ================================================================================== -->
                <!-- =================================================================================
                Image Part start
                ================================================================================== -->
                <section class="l-main__row">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-1 col-lg-5 col-lg-offset-2">
                                <div class="cb-hero cb-hero--invert revealOnScroll" data-animate='fadeInLeft'>
                                    <div class="cb-hero__header" style="margin-bottom: 0;">
                                        <h2 class="cb-hero__subheading">
                                            Choosing the right <br class="visible-md visible-lg">recurring billing solution
                                        </h2>
                                        <p class="cb-hero__desc" style="margin-top: 15px; margin-left: 0; margin-bottom: 9px">
                                            <strong>It depends on your needs. Will you need to:</strong>
                                        </p>
                                    </div>
                                    <div class="cb-hero__list">
                                        <div class="cb-hero__item">
                                            Support one-time, recurring and/or usage-based charges within a single plan?
                                        </div>
                                        <div class="cb-hero__item">
                                            Extend trial periods for some of your customers?
                                        </div>
                                        <div class="cb-hero__item">
                                            Make sure access control and security are taken care of?
                                        </div>
                                        <div class="cb-hero__item">
                                            Archive or grandfather product pricing plans?
                                        </div>
                                        <div class="cb-hero__item">
                                            Send customized transactional emails?
                                        </div>
                                        <div class="cb-hero__item">
                                            Provide dashboards and out-of-the-box reports to different teams?
                                        </div>
                                        <div class="cb-hero__item">
                                            Have the flexibility to manually manage one-off anomalies in payments?
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4 col-sm-offset-1">
                                <div class="cb-note cb-note--recurring revealOnScroll" data-animate='fadeInRight'>
                                    <a href="/resources/guides/subscription-billing-and-management-guide/" target="_blank">
                                        <div class="cb-note__figure">
                                            <img src="/static/website/version/images/revenue/open-book.png" alt="" width="50" class="img-responsive" >
                                        </div>
                                        <div class="cb-note__desc" style="font-size: 15px;">
                                            For a <strong>full list of considerations</strong>, check out our guide to evaluating enterprise-ready recurring billing and subscription management solutions <span class="cb-note__link">→</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>




                        <div class="row hidden-xs">
                            <div class="col-sm-6 col-sm-offset-3 col-md-5 col-md-offset-3">
                                <div class="cb-hero cb-hero--invert" style="margin-top: 100px;">
                                    <p class="cb-hero__desc" style="font-size: 15px;">
                                        We’ve briefly explored the moving parts of what makes recurring payments run smoothly and the considerations for picking the right recurring billing system for your business. With that understanding, let’s look at a few essentials you’ll need when you begin.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =================================================================================
                Image Part End
                ================================================================================== -->
                <!-- =================================================================================
                Image Part start
                ================================================================================== -->
                <section class="l-main__row l-main__row-lg">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
                                <div class="cb-hero cb-hero--invert revealOnScroll" data-animate='fadeInUp' style="text-align: center">
                                    <div class="cb-hero__header">
                                        <h2 class="cb-hero__title">
                                            The essentials of setting up<br class="visible-lg visible-md"> recurring payments
                                        </h2>
                                        <p class="cb-hero__desc">
                                            So, what should be on your radar as you assess these essentials? While accepting payments is a business necessity, remember that it’s also an opportunity to provide a good payment experience to your customers and build trust.
                                        </p>
                                    </div>
                                </div>


                                <div class="cb-hero cb-hero--invert" style="text-align: center; margin-top: 100px;">
                                    <div class="cb-hero__subheading">
                                        1. Pick a payment gateway for your location:
                                    </div>
                                    <p class="cb-hero__desc">
                                        Payment service providers differ in more ways than just the billing logic they support.  They take different times to transfer funds between your customer’s account and yours. Some of them let your customers complete the checkout on your own website, others redirect them to their own platform. They may need a merchant account or not. And they each support a range of currencies, payment types and shopping cart integrations.
                                    </p>
                                    <p class="cb-hero__desc">
                                        Use Chargebee’s free <a href="/resources/tools/compare-payment-gateway-providers/" target="_blank">payment gateway tool</a> to find and compare payment gateways in your country.
                                    </p>
                                </div>



                                <div class="cb-hero cb-hero--invert" style="text-align: center; margin-top: 100px;">
                                    <div class="cb-hero__subheading">
                                        2. Choose a recurring billing software equipped with these minimum capabilities:
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-12 col-sm-offset-0 col-md-10 col-md-offset-1">
                                <!-- =================================================================================
                                timeline start
                                ================================================================================== -->
                                <ul class="cb-timeline list-unstyled">
                                    <!-- =========================================================================
                                    timeline item start
                                    ========================================================================== -->
                                    <li class="cb-timeline__item">
                                        <div class="cb-timeline__icon">
                                            <img src="/static/website/version/images/recurring-payments/icons/cb-icon-invoice.svg" alt="Invoice" class="img-responsive">
                                        </div>
                                        <div class="cb-timeline__content cb-timeline__content--right revealOnScroll" data-animate="fadeInRight">
                                            <h5 class="cb-timeline__title">
                                                Invoices
                                            </h5>
                                            <p class="cb-timeline__desc">
                                                Clear, well-designed invoices build trust. Automatically send accurate invoices to customers without missing any crucial details.
                                            </p>
                                        </div>
                                    </li>
                                    <!-- =========================================================================
                                    timeline item end
                                    ========================================================================== -->
                                    <!-- =========================================================================
                                    timeline item start
                                    ========================================================================== -->
                                    <li class="cb-timeline__item">
                                        <div class="cb-timeline__icon">
                                            <img src="/static/website/version/images/recurring-payments/icons/cb-icon-integration.svg" alt="Invoice" class="img-responsive">
                                        </div>
                                        <div class="cb-timeline__content revealOnScroll" data-animate="fadeInLeft">
                                            <h5 class="cb-timeline__title">
                                                Accounting Integration
                                            </h5>
                                            <p class="cb-timeline__desc">
                                                A recurring billing system should <a href="/saas-accounting-and-taxes/xero-accounting/">talk to your books.</a> Robust integrations with accounting software will ensure there’s no reconciliation mess and easy global tax support.
                                            </p>
                                        </div>
                                    </li>
                                    <!-- =========================================================================
                                    timeline item end
                                    ========================================================================== -->
                                    <!-- =========================================================================
                                    timeline item start
                                    ========================================================================== -->
                                    <li class="cb-timeline__item">
                                        <div class="cb-timeline__icon">
                                            <img src="/static/website/version/images/recurring-payments/icons/cb-icon-checkout.svg" alt="Invoice" class="img-responsive">
                                        </div>
                                        <div class="cb-timeline__content cb-timeline__content--right revealOnScroll" data-animate="fadeInRight">
                                            <h5 class="cb-timeline__title">
                                                Checkout
                                            </h5>
                                            <p class="cb-timeline__desc">
                                                <a href="/recurring-payments/checkout-experience/">Checkout pages</a> are an important part of a smooth payment experience. A checkout page that can be set up and customized, will drastically reduce time to market.
                                            </p>
                                        </div>
                                    </li>
                                    <!-- =========================================================================
                                    timeline item end
                                    ========================================================================== -->
                                    <!-- =========================================================================
                                    timeline item start
                                    ========================================================================== -->
                                    <li class="cb-timeline__item">
                                        <div class="cb-timeline__icon">
                                            <img src="/static/website/version/images/recurring-payments/icons/cb-icon-portal.svg" alt="Invoice" class="img-responsive">
                                        </div>
                                        <div class="cb-timeline__content revealOnScroll" data-animate="fadeInLeft">
                                            <h5 class="cb-timeline__title">
                                                Customer self-service portal
                                            </h5>
                                            <p class="cb-timeline__desc">
                                                Self-serve portals enable customers to pause a subscription, upgrade or update card details on their own through an easy-to-use interface.
                                            </p>
                                        </div>
                                    </li>
                                    <!-- =========================================================================
                                    timeline item end
                                    ========================================================================== -->
                                    <!-- =========================================================================
                                    timeline item start
                                    ========================================================================== -->
                                    <li class="cb-timeline__item">
                                        <div class="cb-timeline__icon">
                                            <img src="/static/website/version/images/recurring-payments/icons/cb-icon-dashboard.svg" alt="Invoice" class="img-responsive">
                                        </div>
                                        <div class="cb-timeline__content cb-timeline__content--right revealOnScroll" data-animate="fadeInRight">
                                            <h5 class="cb-timeline__title">
                                                Team dashboard
                                            </h5>
                                            <p class="cb-timeline__desc">
                                                Track the health of your business and allow teams to make data-driven decisions with actionable insights from metrics, trends, summaries and reports.
                                            </p>
                                        </div>
                                    </li>
                                    <!-- =========================================================================
                                    timeline item end
                                    ========================================================================== -->
                                    <!-- =========================================================================
                                    timeline item start
                                    ========================================================================== -->
                                    <li class="cb-timeline__item">
                                        <div class="cb-timeline__icon">
                                            <img src="/static/website/version/images/recurring-payments/icons/cb-icon-mail.svg" alt="Invoice" class="img-responsive">
                                        </div>
                                        <div class="cb-timeline__content revealOnScroll" data-animate="fadeInLeft">
                                            <h5 class="cb-timeline__title">
                                                Transactional emails
                                            </h5>
                                            <p class="cb-timeline__desc">
                                                Hit the ground running with billing solutions that offer pre-built transactional emails to onboard your customers and keep them informed about billing life cycle changes.
                                            </p>
                                        </div>
                                    </li>
                                    <!-- =========================================================================
                                    timeline item end
                                    ========================================================================== -->
                                    <!-- =========================================================================
                                    timeline item start
                                    ========================================================================== -->
                                    <li class="cb-timeline__item">
                                        <div class="cb-timeline__icon">
                                            <img src="/static/website/version/images/recurring-payments/icons/cb-icon-pci.svg" alt="Invoice" class="img-responsive">
                                        </div>
                                        <div class="cb-timeline__content cb-timeline__content--right revealOnScroll" data-animate="fadeInRight">
                                            <h5 class="cb-timeline__title">
                                                PCI Compliance
                                            </h5>
                                            <p class="cb-timeline__desc">
                                                When dealing with sensitive customer data, your billing provider must have PCI-DSS Level 1 compliance and other data and network security measures in place.
                                            </p>
                                        </div>
                                    </li>
                                    <!-- =========================================================================
                                    timeline item end
                                    ========================================================================== -->
                                    <!-- =========================================================================
                                    timeline item start
                                    ========================================================================== -->
                                    <li class="cb-timeline__item">
                                        <div class="cb-timeline__icon">
                                            <img src="/static/website/version/images/recurring-payments/icons/cb-icon-developer.svg" alt="Invoice" class="img-responsive">
                                        </div>
                                        <div class="cb-timeline__content revealOnScroll" data-animate="fadeInLeft">
                                            <h5 class="cb-timeline__title">
                                                Developer-friendly APIs
                                            </h5>
                                            <p class="cb-timeline__desc">
                                                Developers are the first to feel the pain of integrating your product with a new system. Make things easy on them with robust APIs and useful documentation.
                                            </p>
                                        </div>
                                    </li>
                                    <!-- =========================================================================
                                    timeline item end
                                    ========================================================================== -->
                                </ul>
                                <!-- =================================================================================
                                timeline end
                                ================================================================================== -->
                            </div>
                        </div>



                        <div class="row">
                            <div class="col-sm-7 col-sm-offset-5 col-md-6 col-md-offset-5">
                                <div class="cb-hero cb-hero--invert">
                                    <p class="cb-hero__desc" style="margin-bottom: 40px; margin-left: 0;">
                                        Chargebee makes it simple for you to sign up and <a href="/recurring-payments/">accept recurring payments</a> for free in no time. As your customer base grows with time and you require more sophisticated options like custom reports or email segmentation with easy customization, you’ll be covered with our more advanced features. We scale with you, at your own pace.
                                    </p>
                                </div>
                                <div class="cb-hero cb-hero--invert cb-hero--cta">
                                    <div class="cb-hero__header" style="margin-bottom: 24px;">
                                        <h2 class="cb-hero__subheading cb-hero__subheading--xs">
                                            Simplify recurring billing for your business.<br class="visible-lg visible-md"> Your first USD 50K is on us.
                                        </h2>
                                    </div>
                                    <div  class="cb-hero__footer">
                                        <a cn-mark-signup="true" href="/trial-signup/?ref=recurring-payment" class="cb-btn cb-btn--lg cb-btn--primary cb-btn--shadow cb-btn--suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');" style="font-size: 18px;">
                                            <strong>Sign up for free</strong>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =================================================================================
                Image Part End
                ================================================================================== -->
                <!-- =================================================================================
                Image Part start
                ================================================================================== -->
                <section class="l-main__row" style="margin: 0; position: relative">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-2">
                                <div class="cb-hero cb-hero--invert cb-hero--mt-sm revealOnScroll" data-animate='fadeInUp'>
                                    <div class="cb-hero__header" style="margin-bottom: 40px;">
                                        <div class="cb-hero__subheading" style="opacity: .6; margin-bottom: 0; font-weight: normal;">
                                            Go live in minutes
                                        </div>
                                        <h2 class="cb-hero__title" style="margin-left: 0; text-align: left">
                                            How to set up recurring payments with Chargebee
                                        </h2>
                                    </div>


                                    <div class="cb-hero__list cb-hero__list--num">
                                        <li class="cb-hero__item">
                                            Configure billing rules and payment methods in the sandbox, our test site that lets you play around with no dire consequences.
                                        </li>
                                        <li class="cb-hero__item">
                                            Make sure you have your SSL certificate, merchant account and payment gateway ready.
                                        </li>
                                        <li class="cb-hero__item">
                                            Choose your preferred mode of integration with Chargebee: hosted pages, hosted pages + API or a complete API integration.
                                        </li>
                                        <li class="cb-hero__item">
                                            Set up taxes, review dunning and retry-payment settings.
                                        </li>
                                        <li class="cb-hero__item">
                                            Customize what’s needed, like invoices. You’re still in the sandbox, so you can play around with sample data.
                                        </li>
                                        <li class="cb-hero__item">
                                            Set up email templates and notifications so your customers get clear transactional communication from the get-go.
                                        </li>
                                        <li class="cb-hero__item">
                                            Go live. Flick a switch to convert your test site into a live site.
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =================================================================================
                Image Part End
                ================================================================================== -->
                <!-- =================================================================================
                Image Part start
                ================================================================================== -->
                <section class="l-main__row" style="margin: 0; position: relative">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-3 col-md-5 col-md-offset-3">
                                <div class="cb-hero cb-hero--invert  cb-hero--mt-sm">
                                    <div class="cb-hero__header" style="margin-bottom: 30px;">
                                        <div class="cb-hero__desc" style="font-size: 16px; margin-left: 0;">
                                            In addition to the above, you also have the option to <strong>configure webhooks</strong>, provide <strong>access control for team</strong> members and a whole lot more. If you need assistance, reach out to our quick-response customer support team who can guide you through the setup in a jiffy.
                                        </div>
                                    </div>
                                    <div class="cb-hero__footer">
                                        <div class="cb-hero__actions">
                                            <div class="cb-hero__action">
                                                <a cn-mark-signup="true" href="/trial-signup/?ref=recurring-payment" class="cb-btn cb-btn--lg cb-btn--primary cb-btn--shadow cb-btn--suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');" style="font-size: 18px;">
                                                    <strong>Set up recurring payments</strong>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =================================================================================
                Image Part End
                ================================================================================== -->
            </main>
            <!-- =========================================================================================
            Content Part End
            ========================================================================================== -->
        </div>
        <app-footer />
    </div>
</template>
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
            // Click arrow to scroll to div
            $("#cb-hero-arrow").click(function() {
                $('html, body').animate({
                    scrollTop: $("#l-main--banner").offset().top - 100
                }, 1000);
            });

            //For animation on scroll
            var $window           = $(window),
                win_height_padded = $window.height() * 1.1;
            function revealOnScroll() {
                var scrolled = $window.scrollTop(),
                    win_height_padded = $window.height() * 1.1;
                // Showed...
                $(".revealOnScroll:not(.animate)").each(function () {
                  var $this     = $(this),
                      offsetTop = $this.offset().top;
                  if (scrolled + win_height_padded > offsetTop) {
                    $this.addClass('animate ' + $this.attr('data-animate'));
                  }
                });
            }
            $window.on('scroll', revealOnScroll);
        }
    }
</script>
<style type="text/css">
  #ch-js-header-cloned { display: none; } .cw-graphic-anim { position: relative; top: 30px; }@media (min-width: 992px) and (max-width: 1024px){.cw-graphic-anim{top: -70px;} }@media (min-width: 1440px){.cw-graphic-anim{top: 120px;}} .cw-graphic-anim .img-wrap { position: relative; padding-top: 30px; width: 100%; height: 700px; } .cw-graphic-anim .img-wrap:after {  position: absolute;background-color: #130e24; width: 1000%; height: 160%; transform: rotate(150deg); transform-origin: center; top: -196%; -webkit-transform: skew(-60deg);transform: skew(-60deg); content: ''; left: -290%; width: 490%; height: 570%; top: -25%; left: -794%; z-index: -1;}  .cw-graphic-anim .img-responsive { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } .cw-graphic-anim img:nth-child(1) { z-index: 1; -webkit-animation: frameA-animation 5.04s linear infinite;animation: frameA-animation 5.04s linear infinite; } .cw-graphic-anim img:nth-child(2) { opacity: 0; -webkit-animation: frameB-animation 5.04s linear infinite;animation: frameB-animation 5.04s linear infinite; } .cw-graphic-anim .cw-graphic-text { position: relative; color: white; background: #130f25; padding-bottom: 50px;} .cw-graphic-anim .cw-graphic-text:before, .cw-graphic-anim .cw-graphic-text:after { position: absolute; top: 0; left: 0; width: 100%; background: #130f25;font-size: 30px; font-weight: bold; } .cw-graphic-anim .cw-graphic-text:before { content: 'Billing Schema for New Businesses'; z-index: 2; -webkit-animation: frameA-animation 5.04s linear infinite;animation: frameA-animation 5.04s linear infinite; } .cw-graphic-anim .cw-graphic-text:after { opacity: 0; z-index: 1; content: 'Billing Schema for Growing Businesses'; -webkit-animation: frameB-animation 5.04s linear infinite;animation: frameB-animation 5.04s linear infinite; }
    @-webkit-keyframes frameA-animation {
        0%, 40%, 98%{
            opacity: 1;
        }
        50%, 88% {
            opacity: 0
        }
    }

    @keyframes frameA-animation {
        0%, 40%, 98%{
            opacity: 1;
        }
        50%, 88% {
            opacity: 0
        }
    }

    @-webkit-keyframes frameB-animation {
        50%, 88% {
            opacity: 1
        }
        40%, 98% {
            opacity: 0
        }
    }

    @keyframes frameB-animation {
        50%, 88% {
            opacity: 1
        }
        40%, 98% {
            opacity: 0
        }
    }

    @media (max-width: 767.995px) {
        .cw-graphic-anim .img-wrap:after {
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transform: skew(-60deg);
            transform: skew(-60deg);
            left: -290%;
            width: 100%;
            height: 100%;
            top: -10px;
            left: -80px;
            z-index: -1;
        }

        .cw-graphic-anim .img-wrap:before {
            z-index: -1;
            width: 300%;
            height: 120%;
            background-color: #130e24;
            content: '';
            position: absolute;
            top: -55%;
            left: -140%;
            -webkit-transform: skew(-60deg);
            transform: skew(-60deg);
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        .cw-graphic-anim .img-wrap:after {
             top: -125%;

        }
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        .cw-graphic-anim .img-wrap:after {
             top: -64%;

        }
    }
</style>
