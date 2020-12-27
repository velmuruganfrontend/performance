<template>
    <div>
        <app-meta 
            :cb-title="'Cloud Billing software to scale your subscription business - Chargebee'" 
            :cb-desc="'Chargebee\'s cloud billing software enables your business to handle all your billing complexities with ease.'" 
            :cb-url="'/cloud-billing/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="true" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <!-- Start Main Body Content -->
            <div class="flexrow mobile-menu--expanded">
                <div class="mobile-menu__close" id="close-mobile-menu" onclick="hideMobileNav()">
                    <img src="/static/website/version/images/product/icon/mobile-menu-close.svg" />
                </div>
                <a class="menu-items" pjax href="/subscription-management/">
                    Subscription
                    <br />Management
                </a>
                <a class="menu-items" pjax href="/recurring-billing-invoicing/">
                    Billing
                    <br /> & Invoicing
                </a>
                <a class="menu-items" pjax href="/recurring-payments/">
                    Payments
                    <br /> & Invoicing
                </a>
                <a class="menu-items" pjax href="/saas-reporting/">
                    Reporting
                    <br /> & Analytics
                </a>
                <a class="menu-items" pjax href="/recurring-payments/">
                    Payment
                    <br />Gateways
                </a>
                <a class="menu-items" pjax href="/developers/">
                    For
                    <br /> developers
                </a>
            </div>
            <section class="pWrap">
                <div class="container">
                    <div class="p-carousel__content">
                        <h1 class="p-carousel__title">
                            Cloud Billing Software to scale<br class="hidden-xs"> your subscription business.
                        </h1>
                        <p class="p-carousel__desc">
                            Cloud-based billing intelligence built on top of payment gateways,<br> tailored for subscription businesses. 
                        </p>

                        <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-sec btn-primary btn-primary-sec btn-md btn-suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                <img src="/static/resources/brand/chargebee-icon-white.svg" alt="Chargebee Logo Mark" style="width: 30px; margin-top: -7px; margin-right: 10px;"> Sign up for free
                            </a>
                        
                        <span class="p-carousel__signup-subtext">
                        <a href="/launch/" class="btn-flat btn-flat--muted"><strong>Your first $50k is on us</strong></a>
                        </span>
                    </div>
                </div>
                <section class="container container--offset">
                    <!-- blue navbar -->

                    <div class="gaussian-blur"></div>
                    <div class="loading-bar">Loading..</div>
                    <!-- Main content -->
                    <section class="ajax-canvas"></section>
                    <section id="main-container">
                        <section class="main-content main-content--border main-content--pt-no">
                            <div class="row">
                                <div class="main-content__l-section col-md-5 col-lg-4">
                                    <h2 class="main-content__title">
                                        Beautiful and comprehensive Invoices
                                    </h2>
                                    <p class="main-content__text">
                                    Invoices, packed with a plethora of essential information, need to be crystal clear while complying with ever evolving regulations. Chargebee balances elegance with clarity, security & compliance with ease of access. You’ll never have invoice worries again.
                                    </p>
                                    <a href="/recurring-billing-invoicing/anatomy-of-an-invoice/" class="main-content__more main-content__more--set-width">
                                        Get an Interactive Tour
                                    </a>
                                </div>
                                <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                    <img src="/static/website/version/images/product/invoice.png" width="490" class="img-responsive">
                                </div>
                            </div>
                        </section>

                        <section class="main-content main-content--no-mob-margin">
                                    <div class="row">
                                        <div class="main-content__l-section col-md-5">
                                    <div class="whitespace visible-xs visible-sm"></div>
                        
                                    <h2 class="main-content__title">
                                        Experiment with pricing
                                    </h2>
                                    <p class="main-content__text">
                                        As your product evolves, so does its value. And it's important to try a new pricing strategy while still grandfathering in prices for your existing customers. Chargebee lets you set up flexible pricing bundles, so you can experiment effortlessly to determine what suits your business the best. 
                                    </p>
                                    <a href="/subscription-management/create-manage-plans/" class="main-content__more main-content__more--set-width">
                                        Set up flexible price plans
                                    </a>
                                </div>
                                
                            <div class="main-content__l-section col-md-5 col-md-push-1">
                                    <div class="whitespace visible-xs"></div>
                                    <div class="whitespace-md visible-sm"></div>
                                    <h2 class="main-content__title">
                                        Tread global waters with ease
                                    </h2>
                                    <p class="main-content__text">
                                        The nature of your subscription business is truly global. But stepping to a new country would mean worrying about tax, currency and compliance requirements. With Chargebee's array of features (multiple currency support, multilingual and tax profiles) that makes going global simple, expand to a new country in peace.
                                    </p>
                                    <a href="/recurring-payments/multicurrency/" class="main-content__more main-content__more--set-width">
                                        Support for Multiple currencies
                                    </a>
                                </div>
                            </div>
                        </section>
                        
                        <section class="main-content main-content--border">
                            <div class="row">
                                <div class="main-content__l-section col-md-5 col-lg-4">
                                    <h2 class="main-content__title">
                                                Analyse business metrics that matter
                                            </h2>
                                    <p class="main-content__text">
                                            Measuring the health and staying on track with key metrics is essential for a business in any stage. But often, it's all in different places and there's a lot of math to do before you get to what you need. Chargebee crunches all payment information, adds a dose of all other essential data and brings it to you in one stunning dashboard.
                                    </p>
                                    <a class="main-content__more main-content__more--set-width" href="/saas-reporting/" target="_blank">More on Reporting & Metrics</a>
                                </div>
                                <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                    <div class="whitespace-md visible-xs visible-sm"></div>
                                    <img src="/static/website/version/images/reporting/reports-dashboard.png" width="490" class="img-responsive">
                                </div>
                            </div>
                        </section>
                        <section class="main-content main-content--threecols">
                            <div class="row main-content__threecols">
                                <div class="col-md-4 small-col">
                                    <h2 class="main-content__title">
                                        Built-in proration
                                    </h2>
                                    <p class="main-content__text">
                                        If a customer switches plans (from monthly to yearly or freemium to paid) in the middle of the billing period, don't be bogged by the math! Chargebee's built-in prorated billing makes sure your customers are charged, just the right amount. Apportion credits for downgrades automatically, thus saving precious hours for your finance team.
                                    </p>
                                    <a class="main-content__more main-content__more--set-width" href="https://www.chargebee.com/blog/proration/" target="_blank">More on our Proration Logic</a>
                                </div>
                                
                                <div class="col-md-4 small-col">
                                    <h2 class="main-content__title">
                                        Recover lost revenue
                                    </h2>
                                    <p class="main-content__text">
                                        Failed transactions lead to involuntary churn, which is a leaky bucket. Armed with automatic emails and a smart dunning system, Chargebee recovers close to 25% of failed transactions, thus putting more money in your pocket. Send out reminders even to customers paying via wire transfers, checks etc.
                                    </p>
                                    <a class="main-content__more main-content__more--set-width" href="/resources/infographics/dunning-benchmarks-subscription-businesses/" target="_blank">View Dunning Benchmarks</a>
                                </div>
                                <div class="col-md-4 small-col">
                                    <h2 class="main-content__title">
                                        Built for Developers
                                    </h2>
                                    <p class="main-content__text">
                                    By providing you a much needed layer of abstraction, and eliminating complexities, Chargebee's API is built to handle all your billing edge cases without messing up your working code. And not to mention the in-depth API documentation, client libraries, and exhaustive webhooks that would just make life simpler! 
                                    </p>
                                    <a class="main-content__more main-content__more--set-width" href="/developers/" target="_blank">More for Developers</a>
                                </div>
                            </div>
                        </section>
                        <section class="testimonial-box  hidden-xs hidden-sm flexrow--margin">
                            <div class="row flexrow flexrow--end">
                                <div class="testimonial-box__img-holder">
                                    <img src="/static/website/version/images/customers/testimonial/freshdesk.png" class="img-responsive" />
                                </div>
                                <div class="testimonial-box__logo-holder">
                                    <img src="/static/website/version/images/customers/testimonial/freshdesk-logo.svg" width="120" />
                                    <a href="/customers/freshdesk/" class="testimonial-box__logo-holder__link" style="margin-bottom: 0;" target="_blank">
                                                See how Chargebee powers Freshdesk in this Case study
                                            </a>
                                </div>
                            </div>
                            <div class="blue-msg-box blue-msg-box--fd animated">
                                <h2 class="blue-msg-box__msg">
                                            Payment gateways like Braintree are more connected to the bank and less connected to the customers. For a customer driven subscription business, you need a reliable system like Chargebee that takes care of the latter.
                                        </h2>
                                <span class="blue-msg-box__author">Kiran Darisi, Director of DevOps</span>
                            </div>
                        </section>
                    </section>
                    <div class="whitespace-lg"></div>
                </section>    
            </section>

            <!-- End Main Body Content -->
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
        mounted(){
        }
    }
</script>
