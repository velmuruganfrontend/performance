<template>
    <div class="body">
        <app-meta 
            :cb-title="'Multi-currency payments & pricing for your customers | Chargebee'" 
            :cb-desc="'Accept multi-currency payments for your subscription business: Chargebee lets you accept recurring payments in multiple currencies. Enable customers to pay in local currencies.'" 
            :cb-url="'/recurring-payments/multicurrency/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="''" />
        <div class="cb-body">
            <div id="loading-line" style="display:none;position:fixed;width:100%;z-index: 9999">
                <div class="progress"><div class="indeterminate"></div> </div>
            </div>
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
                            Multi-currency Support: Accept Foreign Payments as you Scale
                        </h1>
                        <p class="p-carousel__desc">
                            Don't let the choice of your currency limit your possibilities. <br>Expanding your global reach is a child's play with Chargebee's Multicurrency support.
                        </p>
                        <a cn-mark-signup="true" href="/trial-signup/" class="p-carousel__signup-button">
                            Sign up for free
                        </a>
                        <span class="p-carousel__signup-subtext">
                        <a href="/schedule-a-demo/" class="btn-flat btn-flat--muted"><strong>Schedule a Demo</strong></a>
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
                                        Tailor Prices for a global audience
                                    </h2>
                                    <p class="main-content__text">
                                    With the nature of your business being global, operating sans currency hassles across regions should be easy.
                                    With a multi-currency support, recurring payments through Chargebee are more global than you can think of. Chargebee supports 100+ currencies so you can accept payments from your customers in their preferred currency.
                                    </p>
                                    <a class="main-content__more main-content__more--set-width" href="/docs/supported-currencies.html" target="_blank">Supported Currencies</a>
                                </div>
                                <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                    <img src="/static/website/version/images/product/multi-currency.png" width="490" class="img-responsive">
                                </div>
                            </div>
                        </section>

                        <section class="main-content main-content--no-mob-margin">
                            <div class="row">
                                <div class="main-content__l-section col-md-5">
                                    <div class="whitespace visible-xs visible-sm"></div>
                
                                    <h2 class="main-content__title">
                                        Convert better with multi-currency pricing and payments.
                                    </h2>
                                    <p class="main-content__text">
                                    With your customers hailing from different parts of the planet, letting them pay in just one currency, doesn't quite cut it. So receive payments in local currencies and make their decision easier.                             
                                    </p>
                                </div>
                                
                                <div class="main-content__l-section col-md-5 col-md-push-1">
                                    <div class="whitespace visible-xs"></div>
                                    <div class="whitespace-md visible-sm"></div>
                                    <h2 class="main-content__title">
                                        Don’t be bogged by exchange rates
                                    </h2>
                                    <p class="main-content__text">
                                        Exchange rates fluctuate continuously. Set the currency exchange rates yourself, or let Chargebee fetch real-time rates automatically. It’s really that simple.
                                    </p>
                                </div>
                            </div>
                        </section>
                        
                        <section class="main-content main-content--border">
                            <div class="row">
                                <div class="main-content__l-section col-md-5 col-lg-4">
                                    <h2 class="main-content__title">
                                      Scale Faster
                                    </h2>
                                    <p class="main-content__text">
                                      Stepping into a new country? Be armed with the best competitive advantage while scaling your business. With a hassle-free global currency support Chargebee takes care of your scale, so your growth compass can point north always.
                                    </p>
                                </div>
                                <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                    <div class="whitespace-md visible-xs visible-sm"></div>
                                    <img src="/static/website/version/images/recurring-payments/multicurrency/customer-moves.svg" width="490" class="img-responsive">
                                </div>
                            </div>
                        </section>
                        
                        <section class="main-content main-content--no-mob-margin">
                            <div class="row">
                                <div class="main-content__l-section col-md-5">
                                    <div class="whitespace visible-xs visible-sm"></div>
                                    <h2 class="main-content__title">
                                        Save money with intelligent routing
                                    </h2>
                                    <p class="main-content__text">
                                       Chargebee’s flexible API lets you set up multiple gateways and intelligently route money depending on the currency type. 
                                   </p>
                                   <br>

                                    <p class="main-content__text">Want to know the payment gateways supported by Chargebee? Check ‘em out <a href="/recurring-payments/">here.</a></p>
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
                                                See how Chargebee powers Freshdesk in this Casestudy
                                            </a>
                                </div>
                            </div>
                            <div class="blue-msg-box blue-msg-box--fd animated">
                                <h2 class="blue-msg-box__msg">
                                            Payment gateways like Braintree are more connected to the bank and less connected to the customers. For a customer driven SaaS business, you need a reliable system like Chargebee that takes care of the latter.
                                        </h2>
                                <span class="blue-msg-box__author">Kiran Darisi, Director of DevOps</span>
                            </div>
                        </section>
                        <div class="whitespace-lg"></div>
                    </section>    
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
        methods: {}
    }
</script>