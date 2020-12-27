<template>
        <div>
            <app-meta 
                :cb-title="'Use Chargebee with Payal for easy recurring payments'" 
                :cb-desc="'Set up and accept recurring payments through PayPal from Chargebee. Keep PayPal as a payment option and leverage Chargebee\'s billing system to take care of all the other scenarios for your recurring revenue business.'" 
                :cb-url="'/payment-gateways/paypal-recurring-payments/'" 
                :cb-image="''"
                :cb-style="'/static/website/version/styles/new.css,/static/website/version/styles/paypal.css'"
                :cb-head-script="''"
                :cb-body-script="''"
                :cb-has-noindex="false" />
            <app-header :hasInvert="true" />
            <div class="cb-body">
                <!-- ======================================================
                Section -- Start
                ======================================================= -->
                <section class="cw-section cw-section--hero">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1">
                                <div class="cw-hero">
                                    <h1 class="cw-hero__title">Get paid with PayPal, manage subscriptions with Chargebee</h1>
                                    <div class="cw-hero__content">
                                        <div class="cw-hero__text">Do More with Chargebee and PayPal</div>
                                    </div>
                                    <div class="cw-hero__action">
                                        <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-primary-sec btn-success" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">Sign Up for Free</a> <br>
                                        <a href="/schedule-a-demo/?ref=gateway" class="btn-flat" style="padding-top: 15px; font-size: 18px; color: white !important; display: inline-block;"><small>Schedule a Demo</small></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- ======================================================
                Section -- End
                ======================================================= -->

                <!-- ======================================================
                Section -- Start
                ======================================================= -->
                <section class="cw-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9 col-sm-offset-1 col-md-8 col-md-offset-0 col-lg-7">
                                <div class="cw-blk">
                                    <h2 class="cw-blk__subtitle">Why use PayPal with Chargebee for accepting recurring payments ?</h2>
                                    <div class="cw-blk__content">
                                        <div class="cw-blk__desc cw-blk__desc--varB">With the ubiquity of online payments, more than 200 million global users leverage PayPal to accept online payments. </div>

                                        <div class="visible-xs visible-sm col-sm-offset-1">
                                            <!-- Space -- Start -->
                                            <div style="margin: 50px auto 30px;">
                                                <img class="img-responsive" src="/static/website/version/images/payment-gateways/paypal-recurring-payments/paypal-with-chargebee.svg" alt="Paypal with Chargebee">
                                            </div>
                                            <!-- Space -- End -->
                                        </div>
                                        
                                        <div class="col-sm-offset-1">
                                            <p class="cw-blk__text cw-md__Mt--xxs">Holding over 35% of the global payment volume, PayPal seconds as a favorite payment method. Gain real value that offers a solution that scales with you with Chargebee.  Equip users with more freedom of choice, where they can pay with their PayPal, debit or credit card, or bank account. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-lg-offset-1 hidden-xs hidden-sm">
                                <div class="visible-md visible-lg" style="margin-top: 60px;"></div>
                                <img class="img-responsive" src="/static/website/version/images/payment-gateways/paypal-recurring-payments/paypal-with-chargebee.svg" alt="Paypal With Chargebee">
                            </div>
                        </div>
                    </div>
                </section>
                <!-- ======================================================
                Section -- End
                ======================================================= -->

                <!-- ======================================================
                Section -- Start
                ======================================================= -->
                <section class="cw-section cw-md__Mt--l">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-5">
                                <div class="cw-blk">
                                    <h2 class="cw-blk__title">
                                        Accepting Recurring Payments from PayPal
                                    </h2>

                                    <div class="cw-blk__content">
                                        <p class="cw-blk__desc">
                                            PayPal makes sure you get paid instantly while ensuring the payment experience works with every customer, every time. 
                                        </p>

                                        <a href="/recurring-payments/" class="visible-md visible-lg">See how Chargebee handles your recurring payments</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-sm-offset-1">
                                <!-- Space -- Start -->
                                <div style="margin-top: 40px" class="visible-xs"></div>
                                <!-- Space -- End -->
                                <div class="cw-blk">
                                    <div class="cw-blk__content">
                                        <h3 class="cw-blk__heading">PayPal Express Checkout</h3>
                                        
                                        <p class="cw-blk__text"><strong>Broader Customer Base:</strong> Card payments aren’t always favored. With PayPal, reach out to users across 200+ global markets. Setting this as an added payment method on your checkout page translates to access to over 200 million global users. </p> 

                                        <p class="cw-blk__text"><strong>Buyer Protection with Billing Agreement Feature:</strong> Get your customers to pre-authorize your business for their recurring payments with a Billing Agreement. With PayPal’s Instant Payment Notification (IPN) feature, get instantly notified of transaction events in Chargebee.</p>

                                        <p class="cw-blk__text"><strong>Transparent pricing:</strong> No setup, termination or monthly fees. Not only that, PayPal charges a fixed fee for standard transactions based on the currency and if it’s received from the US or outside the US. </p>
                                    </div>
                                    <div class="cw-blk__content">
                                        <h3 class="cw-blk__heading">PayPal via Braintree</h3>
                                        
                                        <p class="cw-blk__text">
                                            <strong>Accept payments via Braintree:</strong> No merchant account or reference transactions? We have PayPal via Braintree. With a Braintree account which acts as your merchant account, you don’t need to enable reference transactions. 
                                        </p>

                                        <p class="cw-blk__text">
                                            <strong>Consolidated transaction details:</strong>  Your Braintree account reflects billing agreements and payment details initiated on PayPal along with Braintree’s card payment details. 
                                        </p>
                                    </div>
                                </div>

                                <div class="cw-note cw-md__Mt--xxs">
                                    <p class="cw-note__desc"><strong>Note:</strong> <em>Chargebee supports One Touch and PayPal Credit, only for PayPal Express Checkout and PayPal via Braintree. </em></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- ======================================================
                Section -- End
                ======================================================= -->

                <!-- ======================================================
                Section -- Start
                ======================================================= -->
                <section class="cw-section cw-md__Mt--l">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-11 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <div class="tpmain-testimonial">
                                    <div class="tpmain-testimonial__container">
                                        <div class="tpmain-testimonial__figure">
                                            <img src="/static/website/version/images/payment-gateways/paypal-recurring-payments/antti-virolainen.png" class="img-responsive">
                                        </div>
                                        <div class="tpmain-testimonial__content">
                                            <div class="tpmain-testimonial__disp">Chargebee makes gathering recurring payments automatic, and does that well. They have been ready for EU-VAT changes since day one minimizing trouble and correcting VAT percentages used for each country automatically.</div>
                                            <div class="tpmain-testimonial__author">Antti Virolainen</div>
                                            <div class="tpmain-testimonial__role">Co Founder | Sharetribe</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- ======================================================
                Section -- End
                ======================================================= -->

                <!-- ======================================================
                Section -- Start
                ======================================================= -->
                <section class="cw-section cw-md__Mt--l">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-5">
                                <div class="cw-blk">
                                    <h2 class="cw-blk__title">
                                        Card payments with PayPal
                                    </h2>
                                    <div class="cw-blk__content">
                                        <p class="cw-blk__desc">
                                            Don’t let lack of payment options limit your global outreach. With PayPal, reduce cart abandonment by supporting online card payments on your website.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-sm-offset-1">
                                <!-- Space -- Start -->
                                <div style="margin-top: 40px" class="visible-xs"></div>
                                <!-- Space -- End -->
                                <div class="cw-blk">
                                    <div class="cw-blk__content">
                                        <h3 class="cw-blk__heading">
                                            PayPal Payflow Pro
                                        </h3>

                                        <p class="cw-blk__text">
                                            <strong>Multi-payment methods:</strong> Process debit and credit cards with PayPal.
                                        </p>

                                        <p class="cw-blk__text">
                                            <strong>Customized checkout experience:</strong> Tailor unique checkout pages right from language preferences to PCI compliance using Chargebee’s API with PayPal integration.
                                        </p>

                                        <p class="cw-blk__text">
                                            <strong>Easy Integration:</strong> Payflow Pro is pre-integrated with many leading shopping carts like Shopify, WooCommerce, Squarespace, etc.
                                        </p>

                                        <p class="cw-blk__text">
                                            <strong>Available in the US, Canada, Australia, and New Zealand.</strong>
                                        </p>
                                    </div>

                                    <div class="cw-blk__content">
                                        <h3 class="cw-blk__heading">
                                            PayPal Payments Pro
                                        </h3>

                                        <p class="cw-blk__text">
                                            <strong>Change payment processors:</strong> Flexibility to change payment processors without having to realign the technical integration.
                                        </p>

                                        <p class="cw-blk__text">
                                            <strong>Maximized Usability:</strong> Use PayPal’s Internet Merchant Account with any payment processors to process credit card transactions.   
                                        </p>

                                        <p class="cw-blk__text">
                                            <strong>Available in the US, UK, and Canada.</strong> 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- ======================================================
                Section -- End
                ======================================================= -->

                <!-- ======================================================
                Section -- Start
                ======================================================= -->
                <section class="cw-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1">
                                <div class="cw-blk">
                                    <h2 class="cw-blk__title text-center">Scale Globally with Chargebee </h2>

                                    <div class="cw-blk__content">
                                        <div class="col-sm-3">
                                            <div class="cw-metric cw-md__Mt--xxs text-center">
                                                <h4 class="cw-metric__title">100+</h4>
                                                <p class="cw-metric__desc">
                                                    Currencies supported by Chargebee
                                                </p>
                                            </div>
                                        </div>

                                        <div class="col-sm-3">
                                            <div class="cw-metric cw-md__Mt--xxs text-center">
                                                <h4 class="cw-metric__title">25</h4>
                                                <p class="cw-metric__desc">
                                                    Currencies supported by Paypal
                                                </p>
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="cw-metric cw-md__Mt--xxs">
                                                <p class="cw-metric__subtitle">
                                                    Manage multiple languages, global tax profiles and multiple payment gateways and methods.<br /><a href="/localized-subscriptions-payments/">Learn more</a>
                                                </p>
                                            </div>
                                        </div>

                                        <img class="img-responsive" src="/static/website/version/images/payment-gateways/paypal-recurring-payments/globe.png" alt="Scale globally with Chargebee" style="margin: auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- ======================================================
                Section -- End
                ======================================================= -->

                <!-- ======================================================
                Section -- Start
                ======================================================= -->
                <section class="cw-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-offset-1 col-sm-5 col-sm-offset-1 col-md-4 col-md-offset-2">
                                <div class="cw-feature">
                                    <div class="cw-feature__thumb">
                                        <img class="img-responsive" src="/static/website/version/images/payment-gateways/paypal-recurring-payments/expand.svg"/>
                                    </div>
                                    <div class="cw-feature__body">
                                        <h4 class="cw-feature__title">Expand your Acquisition Avenues </h4>
                                        <div class="cw-feature__content">
                                            <p class="cw-feature__text">
                                                With Chargebee for your business, customer acquisition is made easier with a <a href="/recurring-payments/checkout-experience/">smooth checkout experience</a>. Experiment with trials and pricing, run coupon campaigns and convert leads to customers in no time.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="cw-feature">
                                    <div class="cw-feature__thumb">
                                        <img class="img-responsive" src="/static/website/version/images/payment-gateways/paypal-recurring-payments/simplify.svg"/>
                                    </div>
                                    <div class="cw-feature__body">
                                        <h4 class="cw-feature__title">Simplify Compliance and Automate Tax Calculations </h4>
                                        <div class="cw-feature__content">
                                            <p class="cw-feature__text">
                                                Changing compliance regulations including GDPR and PCI compliance - Chargebee’s checkout nails all of this. AU GST, EU VAT, US Sales Tax, and everything in between - <a href="https://www.chargebee.com/docs/tax.html">global tax rules</a> are handled with ease.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-offset-1 col-sm-5 col-sm-offset-1 col-md-4 col-md-offset-1">
                                <!-- Space -- Start -->
                                <div style="margin-top: 40px" class="visible-xs"></div>
                                <!-- Space -- End -->
                                <div class="cw-feature">
                                    <div class="cw-feature__thumb">
                                        <img class="img-responsive" src="/static/website/version/images/payment-gateways/paypal-recurring-payments/solve.svg"/>
                                    </div>
                                    <div class="cw-feature__body">
                                        <h4 class="cw-feature__title">Solve recurring billing complexities </h4>
                                        <div class="cw-feature__content">
                                            <p class="cw-feature__text">
                                                Intricate billing complexities begin to seep in as you grow. With Chargebee's deep <a href="/recurring-billing-invoicing/">billing engine</a>, customized invoices and credit notes, GAAP-compliant revenue recognition and accounting integrations, shoot the complexities in the eye.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="cw-feature">
                                    <div class="cw-feature__thumb">
                                        <img class="img-responsive" src="/static/website/version/images/payment-gateways/paypal-recurring-payments/retain.svg"/>
                                    </div>
                                    <div class="cw-feature__body">
                                        <h4 class="cw-feature__title">Retain Customers and Recover Revenue </h4>
                                        <div class="cw-feature__content">
                                            <p class="cw-feature__text">
                                                Involuntary churn and revenue loss are inexcusable. With our smart dunning capabilities, the ability to pay pending invoices in one click, multiple payment preferences, self-serve portal and more, Chargebee <a href="/customer-retention/churn-management/">helps retain what you value the most</a>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- ======================================================
                Section -- End
                ======================================================= -->

                <!-- ======================================================
                Section -- Start
                ======================================================= -->
                <section class="cw-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-3">
                                <div class="cw-cta">
                                    <h2 class="cw-cta__header">
                                        Go live in a heartbeat
                                    </h2>
                                    <div class="cw-cta__content">
                                        <p class="cw-cta__text">Start accepting payments today <br class="visible-lg">with a super quick setup.</p>
                                        <div class="cw-cta__actions">
                                            <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-primary-sec btn-success" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">Sign Up for Free</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- ======================================================
                Section -- End
                ======================================================= -->
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
            mounted() {
                $('.con__question-group ul > li').click(function(){
                    $(this).addClass('active').siblings().removeClass('active');
                });
            },
            methods: {}
        }
    </script>
    <style>
        .cw-hero__action {
            margin-top: 35px;
        }
        @media(min-width: 992px) {
            .cw-cta {
                text-align: center;
            }
        }
    </style>