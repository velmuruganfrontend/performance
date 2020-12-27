<template>
    <div>
        <app-meta
            :cb-title="'Chargebee: Product Features and Capabilities that help you in your Subscription Business viz. SaaS and eCommerce.'"
            :cb-desc="'Explore the extensive features of Chargebee - a comprehensive recurring billing and subscription management software. Lets you manage subscriptions, recurring payments, invoicing. Supports payment gateways and payment methods across the globe. Integrated with tools for CRM, helpdesk, emailing and many more. Sign up for free.'"
            :cb-url="'/features/'"
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/all-feature.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false"
            :cb-region-list="''"
            :cb-region-url="''" />
        <app-header :hasInvert="true" />
        <div class="cb-body">
            <div class="cb-l-main">
                <div class="cb-l-main__row">
                    <!-- ===============================================================
                                        Start Banner Part
                    ================================================================ -->
                    <section class="cb-hero" style="background-image:none;background-color:#00001E;padding-top:150px;padding-bottom:80px">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1 text-center"><!-- Chargebee's Features:  -->
                                    <h1 class="cb-hero__title">All that You Need to Simplify Subscription Billing and Management</h1>
                                    <div class="cb-hero__desc">Explore what Chargebee brings to the table. <br class="visible-lg">Managing recurring billing and payments is no more complicated.</div>
                                    <div class="ca-landing__actions">
                                        <div class="ca-landing__action">
                                            <a href="/trial-signup/" class="cnn-btn">
                                                Sign up for free &rarr;
                                            </a>
                                        </div>
                                        <div class="ca-landing__action" style="margin-top: 21px;">
                                            <a href="/schedule-a-demo/" style="color: #fff">
                                                Schedule a Demo &rarr;
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- ===============================================================
                                        End Banner Part
                    ================================================================ -->
                </div>
                <div class="cb-l-main__row">
                    <section class="cb-affix-container">
                        <div class="container">
                            <div class="row">
                                <!-- ===============================================================
                                Start: Sidebar Navigation
                                ================================================================ -->
                                <div class="hidden-xs hidden-sm">
                                    <div id="affix-nav" class="cb-affix">
                                        <ul class="nav cb-affix__list">
                                            <li class="cb-affix__item">
                                                <a href="#subscription-management">Subscription Management</a>
                                            </li>
                                            <li class="cb-affix__item">
                                                <a href="#recurring-billing">Recurring Billing</a>
                                            </li>
                                            <li class="cb-affix__item">
                                                <a href="#product-and-pricing-models">Product & Pricing Models</a>
                                            </li>
                                            <li class="cb-affix__item">
                                                <a href="#checkout-and-self-serve-portal">Checkout & Self Serve Portal</a>
                                            </li>
                                            <li class="cb-affix__item">
                                                <a href="#security-and-compliance">Security & Compliance</a>
                                            </li>
                                            <li class="cb-affix__item">
                                                <a href="#recurring-payments">Recurring Payments</a>
                                            </li>
                                            <li class="cb-affix__item">
                                                <a href="#revenue-recovery">Revenue Recovery</a>
                                            </li>
                                            <li class="cb-affix__item">
                                                <a href="#globalized-subscriptions">Globalized Subscriptions</a>
                                            </li>
                                            <li class="cb-affix__item">
                                                <a href="#reporting-and-analytics">Reporting and Analytics</a>
                                            </li>
                                            <li class="cb-affix__item">
                                                <a href="#integrations">Integrations</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- ===============================================================
                                End: Sidebar Navigation
                                ================================================================ -->
                                <div class="col-md-11 col-md-offset-1">
                                    <!-- ===============================================================
                                    Start: Subscription Management
                                    ================================================================ -->
                                    <article class="cb-affix-content" id="subscription-management">
                                        <div class="cb-factor">
                                            <h2 class="cb-factor__title">
                                                Subscription Management
                                            </h2>
                                            <div cb-mob-restrict cb-mob-restrict-height>
                                                <div class="row">
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Subscription Lifecycle Management
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Create, manage, pause, cancel, reactivate and extend subscriptions with ease. Handle upgrades and downgrades at any point in the billing cycle. Keep customers engaged with automated emails throughout the journey.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Flexible Product Catalog
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Manage multiple products and plans neatly with Chargebee’s Product Catalog 2.0. Each plan can have multiple currencies, billing frequencies, add-ons, and metered charges attached to it without wrecking your catalog sanity.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/subscription-management/create-manage-plans/" class="cb-link">Learn more →</a>
                                                                </p>

                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Automated addons
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Automatically include addons with a specific plan when there's a plan activation or change. Offer the right upsell at the right time with recommended and mandatory addons.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/subscription-management/plan-addons/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Trial Management
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Manage trials and any unexpected edge case it may throw at you. Customize trial periods, extend trials indefinitely, automate trial ending reminder emails and offer free/paid trials.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/subscription-management/saas-trial-management/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Segmented email notifications
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Using Chargebee’s Email Notifications, emails can be triggered for subscription, recurring payments & invoice, customer retention and self-service related events to specific segments of customers.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/recurring-billing-invoicing/new-email-notifications/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Manage contract terms
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Negotiate custom pricing with a longer contract period, define lock-in periods with flexible terms for renewals/cancelations, and include a termination fee in the subscription that auto-charges the customer.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/subscription-management/contract-terms-management/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p><img class="cb-factor__img img-responsive" src="/static/website/version/images/all-features/subscription management.png" alt="" /></p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Discounts & Coupons
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Create and track one-time, unlimited, or time-defined coupons easily, and drive more revenue. Choose between percentage and flat-fee discounts. Generate bulk coupon codes to run successful campaigns.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/subscription-management/discount-management-system/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Subscription Order Management
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Streamline operations for your eCommerce with Chargebee's Recurring Orders. Automatically generate, schedule and manage subscription orders within Chargebee.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/subscription-ecommerce/subscription-order-management/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Gift Subscriptions
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Up your subscribers with what is an easy and economical customer acquisition tool — gift subscriptions. Allow the gifter to append a personalized message with the gift and schedule it for an occasion. Set up single-step gift claims and one-click extensions, and acquire more recipients.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/subscription-management/gift-subscriptions/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item visible-xs visible-sm">
                                                                <p class="cb-factor__more">
                                                                    More on <a href="/subscription-management/" class="cb-link">Subscription Management →</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cb-mob-more></div>
                                            </div>
                                        </div>
                                    </article>
                                    <!-- ===============================================================
                                    End: Subscription Management
                                    ================================================================ -->
                                    <!-- ===============================================================
                                    Start: Recurring Billing
                                    ================================================================ -->
                                    <article class="cb-affix-content" id="recurring-billing">
                                        <div class="cb-factor">
                                            <h2 class="cb-factor__title">
                                                Recurring Billing
                                            </h2>
                                            <div cb-mob-restrict cb-mob-restrict-height>
                                                <div class="row">
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Customizable Billing cycles
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Customize recurring billing cycles any way you want to. Don't restrict yourself to traditional monthly and yearly cycles.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Recurring Invoices
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Automate your recurring invoicing. Tailor invoices with the right share of clarity, security and compliance.
                                                                </p>

                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Advance Invoices
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    With Chargebee's custom invoices feature, plan and budget better by raising invoices a pre-set number of days in advance of the subscription renewal date.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Net D
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Allow customers to review invoices and arrange for payments. Set a payment term of ‘x’ days before the payment comes through.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Chargeback Management
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Automatically pull up dispute information and use the Chargeback workflows to make changes to subscriptions, the status of invoices, and issue credit notes without any manual effort. 
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/recurring-payments/chargeback-management/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Metered Billing
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Charge customers based on their usage of your app or add overages to a base fee. All you have to do is create a subscription, specify the metered components and billing frequency, and let Chargebee take care of the calculation and your entire workflow automation. 
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/recurring-billing-invoicing/metered-usage-billing/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Multi Decimal Support
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    With multi-decimal pricing enabled, avoid rounding off your per-unit prices or product usage, and improve accuracy to your usage-based or volume-based billing. 
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item hidden-xs hidden-sm">
                                                                <p class="cb-factor__more">
                                                                    More on <a href="/recurring-billing-invoicing/" class="cb-link">Recurring Billing →</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Prorated Payments
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Adjust bill amounts to accomodate mid-cycle upgrades/downgrades. Reflect changes in MRR instantly with accurate real-time metrics.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/subscription-management/handle-prorations/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Quotes
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Send a Proforma Invoice for approval to let a potential buyer carry out their internal purchase approval processes before they commit to the purchase.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/recurring-billing-invoicing/sales-quotes/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Consolidated Invoicing
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Consolidate charges in a single invoice to send to a customer with multiple subscriptions. Or when the payment for all subscriptions within an organization has to go out to the person in charge of payments.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Credit notes
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Offer adjustment and refundable credit notes for recurring invoices when there are chargebacks, writeoffs or a subscription change. Have a clean record for filing tax returns.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Calendar Billing
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Decide which day you want to charge your customer irrespective of when they sign up. Personalize renewal dates for customers based on their requests.
                                                                </p>
                                                            </div>
                                                             <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Unbilled Charges
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Defer the invoicing of any subscription changes in the middle of the subscription billing cycle to the next renewal.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Account Hierarchy
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Model entire customer org charts into logical parent-child relationships and set billing preferences within them.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/recurring-billing-invoicing/subscription-customer-account-hierarchy/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item visible-xs visible-sm">
                                                                <p class="cb-factor__more">
                                                                    More on <a href="/recurring-billing-invoicing/" class="cb-link">Recurring Billing →</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cb-mob-more></div>
                                            </div>
                                        </div>
                                    </article>
                                    <!-- ===============================================================
                                    End: Recurring Billing
                                    ================================================================ -->
                                    <!-- ===============================================================
                                    Start: CTA
                                    ================================================================ -->
                                    <article class="cb-affix-content">
                                        <div class="cb-cta">
                                            <div class="cb-cta__header">
                                                <div class="cb-cta__title">
                                                    Ready to give it a try?
                                                </div>
                                                <div class="cb-cta__desc">
                                                    No credit card required
                                                </div>
                                            </div>
                                            <div class="cb-cta__actions">
                                                <a href="/trial-signup/?ref=featureAct" class="cb-cta__action">
                                                    Get a free test account
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                    <!-- ===============================================================
                                    End: CTA
                                    ================================================================ -->
                                    <!-- ===============================================================
                                    Start: Product & Pricing Models
                                    ================================================================ -->
                                    <article class="cb-affix-content" id="product-and-pricing-models">
                                        <div class="cb-factor">
                                            <h2 class="cb-factor__title">
                                                Product & Pricing Models
                                            </h2>
                                            <div cb-mob-restrict cb-mob-restrict-height>
                                                <div class="row">
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Pricing Models
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Choose between flat fee, per unit, tiered, volume and stairstep. Permute and combine different plans and addons to create complexly hybrid subscription pricing models.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Grandfathering Pricing
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Let your existing customers be unaffected by your pricing changes. Make the changes applicable only to new customers.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Dynamic Pricing
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Experiment with multiple price points to identify your value sweet-spot. You can now test each currency+frequency combination under a plan with different pricing models and event-based charges.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/solutions/rapidly-iterate-pricing/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Custom Pricing
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Let negotiated deals effortlessly translate into subscriptions with Chargebee's price override. Personalize offers that help customers derive utmost value for your service.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item hidden-xs hidden-sm">
                                                                <p class="cb-factor__more">
                                                                    More on <a href="/saas-pricing-models/" class="cb-link">Product & Pricing Models →</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p><img src="/static/website/version/images/all-features/pricing model.png" alt="" width="265" class="cb-factor__img img-responsive"></p>
                                                            </div>
                                                            <div class="cb-factor__item visible-xs visible-sm">
                                                                <p class="cb-factor__more">
                                                                    More on <a href="/saas-pricing-models/" class="cb-link">Product & Pricing Models →</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cb-mob-more></div>
                                            </div>
                                        </div>
                                    </article>
                                    <!-- ===============================================================
                                    End: Product & Pricing Models
                                    ================================================================ -->
                                    <!-- ===============================================================
                                    Start: Checkout & Self Serve Portal
                                    ================================================================ -->
                                    <article class="cb-affix-content" id="checkout-and-self-serve-portal">
                                        <div class="cb-factor">
                                            <h2 class="cb-factor__title">
                                                Checkout & Self Serve Portal
                                            </h2>
                                            <div cb-mob-restrict cb-mob-restrict-height>
                                                <div class="row">
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Seamless Checkout experience
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Chargebee offers a secure and frictionless checkout experience to boost your conversion rates. Go live with Chargebee's PCI compliant hosted checkout page or off-the-shelf checkout and start collecting both online and offline payments in minutes. 
                                                                </p>
                                                                <p class="cb-factor__more"><a href="/recurring-payments/checkout-experience/" class="cb-link">Learn more →</a></p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Self serve portal
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Chargebee's Self-Serve Customer Portal allows your customers to manage their subscription, view previous invoices, update billing or payment information and much more by themselves.
                                                                </p>
                                                                <p class="cb-factor__more"><a href="/docs/v3-self-serve-portal.html" class="cb-link">Learn more →</a></p>

                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Returning user support
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Enable a quick checkout for your returning users by auto-filling information like billing, shipping address, payment methods and much more.
                                                                </p>
                                                                <p class="cb-factor__more"><a href="/docs/checkout-v3.html#existing-returning-users" class="cb-link">Learn more →</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Cart abandonment recovery
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Abandoned cart tracking allows you to measure how many visitors/customers leave the checkout without completing a purchase, leaving items in the cart. The cart abandonment reports are a comprehensive source for tracking lost revenue and dropped checkouts.
                                                                </p>
                                                                <p class="cb-factor__more"><a href="/docs/abandoned-carts.html" class="cb-link">Learn more →</a></p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Guest checkout
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Let your customers checkout without having to sign in every time. Chargebee will identify your existing customers from their email id and lets them skip the sign-in process and checkout instantly.
                                                                </p>
                                                                <p class="cb-factor__more"><a href="/docs/checkout-v3.html#guest-checkout" class="cb-link">Learn more →</a></p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Mobile Checkout Solutions
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Start accepting mobile payments for your subscription business with Chargebee’s mobile subscription billing & management app. Create in-app checkout & subscription experiences on iOS & Android apps.
                                                                </p>
                                                                <p class="cb-factor__more"><a href="/subscription-management/mobile-solutions/" class="cb-link">Learn more →</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-10 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p><img src="/static/website/version/images/all-features/cb-self-serve-desktop.png" width="1022" alt="" class="img-responsive cb-factor__img" /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cb-mob-more></div>
                                            </div>
                                        </div>
                                    </article>
                                    <!-- ===============================================================
                                    End: Checkout & Self Serve Portal
                                    ================================================================ -->
                                    <!-- ===============================================================
                                    Start: Security & Compliance
                                    ================================================================ -->
                                    <article class="cb-affix-content" id="security-and-compliance">
                                        <div class="cb-factor">
                                            <h2 class="cb-factor__title">
                                                Security & Compliance
                                            </h2>
                                            <div cb-mob-restrict cb-mob-restrict-height>
                                                <div class="row">
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    PCI DSS
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Chargebee is PCI-DSS Level 1 certified. Chargebee encrypts and protects your customer's sensitive personal and card data information is encrypted and handled in a safe and secure manner.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Consent Management
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Chargebee's Consent Management gives you powerful ways to capture and manage consent information from your customers.
                                                                </p>

                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Fraud Alerts
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Flag your customers of fraudulent transactions from suspicious IP address. Chargebee's fraud detection system marks a transaction as fraudulent if a charge is not authorized by the card owner.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    From Email Verification
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Verify email addresses that are used to send notifications regarding subscriptions, invoices. and other automated workflows, to prevent spoofing, spams, and syntactical errors.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item hidden-xs hidden-sm">
                                                                <p class="cb-factor__more">
                                                                    More on <a href="/security/" class="cb-link">Security and Compliance →</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    EU-GDPR
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Chargebee's EU-GDPR compliance allows you to work with a very robust and secure system architecture to prevent unauthorized access and processing of personal data.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Personal Data Management
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Modern privacy laws require that personally identifiable information (PII) not be retained in systems longer than is necessary for meeting business needs. Chargebee lets you delete PII when your customer is no longer using your service.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p><img src="/static/website/version/images/all-features/security.png" alt="" width="375" class="cb-factor__img img-responsive"></p>
                                                            </div>
                                                            <div class="cb-factor__item visible-xs visible-sm">
                                                                <p class="cb-factor__more">
                                                                    More on <a href="/security/" class="cb-link">Security and Compliance →</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cb-mob-more></div>
                                            </div>
                                        </div>
                                    </article>
                                    <!-- ===============================================================
                                    End: Security & Compliance
                                    ================================================================ -->
                                    <!-- ===============================================================
                                    Start: CTA
                                    ================================================================ -->
                                    <article class="cb-affix-content">
                                        <div class="cb-cta">
                                            <div class="cb-cta__header">
                                                <div class="cb-cta__title">
                                                    Curious to see what's under the hood?
                                                </div>
                                                <div class="cb-cta__desc">
                                                    Take our personalized product walk-through
                                                </div>
                                            </div>
                                            <div class="cb-cta__actions">
                                                <a href="/schedule-a-demo/?ref=featureAct" class="cb-cta__action">
                                                    Schedule a Demo
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                    <!-- ===============================================================
                                    End: CTA
                                    ================================================================ -->
                                    <!-- ===============================================================
                                    Start: Recurring Payments
                                    ================================================================ -->
                                    <article class="cb-affix-content" id="recurring-payments">
                                        <div class="cb-factor">
                                            <h2 class="cb-factor__title">
                                                Recurring Payments
                                            </h2>
                                            <div cb-mob-restrict cb-mob-restrict-height>
                                                <div class="row">
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__desc">
                                                                    Chargebee integrates with popular payment gateways and methods for your business to securely accept recurring payments, both online and offline. Make it easy for your customers to pay you, so there are no excuses to drop-off.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/recurring-payments/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p><img src="/static/website/version/images/all-features/gateway.png" alt="" width="360" class="cb-factor__img img-responsive visible-xs"></p>
                                                                <p class="cb-factor__heading">
                                                                    Payment Gateways
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Choose from 20+ payment gateways for recurring payment processing. Quickly start accepting payments online while Chargebee takes care of security and customer payment experience.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/recurring-payments/" class="cb-link">Learn more →</a>
                                                                </p>
                                                                <p><img src="/static/website/version/images/all-features/gateway.png" alt="" width="360" class="cb-factor__img img-responsive visible-sm visible-md visible-lg"></p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p><img src="/static/website/version/images/all-features/method.png" alt="" width="275" class="cb-factor__img img-responsive visible-xs"></p>
                                                                <p class="cb-factor__heading">
                                                                    Payment Methods
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Chargebee lets you accept recurring payments from your customers with their choice of payment method. Reach new markets globally, scale your business and increase conversions.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/recurring-payments/payment-methods/" class="cb-link">Learn more →</a>
                                                                </p>
                                                                <p><img src="/static/website/version/images/all-features/method.png" alt="" width="275" class="cb-factor__img img-responsive visible-sm visible-md visible-lg"></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cb-mob-more></div>
                                            </div>
                                        </div>
                                    </article>
                                    <!-- ===============================================================
                                    End: Recurring Payments
                                    ================================================================ -->
                                    <!-- ===============================================================
                                    Start: Revenue Recovery
                                    ================================================================ -->
                                    <article class="cb-affix-content" id="revenue-recovery">
                                        <div class="cb-factor">
                                            <h2 class="cb-factor__title">
                                                Revenue Recovery
                                            </h2>
                                            <div cb-mob-restrict cb-mob-restrict-height>
                                                <div class="row">
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Dunning management
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Monitor credit card declines, reduce churn and recover lost revenue with Chargebee's dunning capabilities. Minimize payment failures with smart payment retries, automatic card updater and custom dunning email notifications.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/recurring-payments/dunning-management/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Backup Payment Method
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Configure multiple payment modes as well as backup payment methods such as PayPal, or Braintree, along with your primary payment method to ensure guaranteed revenue.
                                                                </p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Accept instant payments ‘Pay Now’
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Request payment from customers via emails with Chargebee and get all your unpaid invoices paid instantly.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/docs/pay-now.html" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cb-mob-more></div>
                                            </div>
                                        </div>
                                    </article>
                                    <!-- ===============================================================
                                    End: Revenue Recovery
                                    ================================================================ -->
                                    <!-- ===============================================================
                                    Start: Globalized Subscriptions
                                    ================================================================ -->
                                    <article class="cb-affix-content" id="globalized-subscriptions">
                                        <div class="cb-factor">
                                            <h2 class="cb-factor__title">
                                                Globalized Subscriptions
                                            </h2>
                                            <div cb-mob-restrict cb-mob-restrict-height>
                                                <div class="row">
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Multi-currency, Multi-language
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Facilitate global transactions at scale with a great deal of personalization. Chargebee's multi-language and multicurrency payment support allows your customer to pay in their local currencies and takes you closer to winning the global subscription game.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Intelligent Routing
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Facilitate global transactions at scale. Connect multiple accounts of the same payment gateway with the Smart Routing feature. Configure rules for automatically picking a gateway account based on the payment method that the customer chooses and the currency of the transaction.
                                                                </p>

                                                            </div>
                                                            <div class="cb-factor__item hidden-xs hidden-sm">
                                                                <p class="cb-factor__more">
                                                                    More on <a href="/localized-subscriptions-payments/" class="cb-link">Globalized Subscriptions →</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Global tax profiles
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Global tax rules are constantly evolving. Don't be burdened by messy tax compliance invoicing rules. Let Chargebee automate the tax management depending on where you are selling.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p><img class="cb-factor__img img-responsive" width="280" src="/static/website/version/images/all-features/hello.png" alt="" /></p>
                                                            </div>
                                                            <div class="cb-factor__item visible-xs visible-sm">
                                                                <p class="cb-factor__more">
                                                                    More on <a href="/localized-subscriptions-payments/" class="cb-link">Globalized Subscriptions →</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cb-mob-more></div>
                                            </div>
                                        </div>
                                    </article>
                                    <!-- ===============================================================
                                    End: Globalized Subscriptions
                                    ================================================================ -->
                                    <!-- ===============================================================
                                    Start: Reporting and Analytics
                                    ================================================================ -->
                                    <article class="cb-affix-content" id="reporting-and-analytics">
                                        <div class="cb-factor">
                                            <h2 class="cb-factor__title">
                                                Reporting and Analytics
                                            </h2>
                                            <div cb-mob-restrict cb-mob-restrict-height>
                                                <div class="row">
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    RevenueStory
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    RevenueStory sits on top of Chargebee billing system for an end-to-end subscription analytics and intelligence. Benefit from access to over 80+ custom reports, role-specific dashboards, shareable reports, threshold alerts, and goal tracking, besides a comprehensive subscription billing service.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="http://revenuestory.io/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Finance - Account Summary Report
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Benefit from the monthly reports that can be used for accounting purposes, including sales, discounts, bad debts, and reversals.
                                                                </p>

                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Revenue Recognition and Deferred Revenue reports
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Chargebee's GAAP-compliant Revenue Recognition and Deferred Revenue reporting accurately simplifies complexities in accounting and finance for businesses of all shapes and sizes.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="/saas-accounting-and-taxes/revenue-recognition-deferred-revenue/" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>



                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Schedule Dashboard Digest Emails
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Keep track of the metrics that matter the most without logging in to the app. Receive snapshots of any RevenueStory dashboard or custom reports via email, for any duration. 
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="https://www.chargebee.com/docs/chargebee-analytics.html#email-scheduling" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Flexible MRR calculations
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    If you want specific one-time coupon or addon charges included in your MRR calculations, you can add that from within Chargebee. You can also choose to override settings for specific components.
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="https://www.chargebee.com/docs/reporting.html#dashboards_flexible-mrr-calculation" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Report builder
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Build your own reports using key data sources from Chargebee such as Subscriptions, Customers, Invoices, Payments, Refunds, and so much more using our Report Builder. 
                                                                </p>
                                                                <p class="cb-factor__more">
                                                                    <a href="https://www.chargebee.com/docs/revenuestory-reportbuilder.html" class="cb-link">Learn more →</a>
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Subscription Metrics
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Track how your subscriptions, product catalog, and revenue, impact each other to drive your growth. Dive into the deepest granularity of your subscription metrics to make calculated decisions.
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p><img class="cb-factor__img img-responsive" src="/static/website/version/images/all-features/reports.png" alt="" /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cb-mob-more></div>
                                            </div>
                                        </div>
                                    </article>
                                    <!-- ===============================================================
                                    End: Reporting and Analytics
                                    ================================================================ -->
                                    <!-- ===============================================================
                                    Start: Integrations
                                    ================================================================ -->
                                    <article class="cb-affix-content" id="integrations">
                                        <div class="cb-factor">
                                            <h2 class="cb-factor__title">
                                                Integrations
                                            </h2>
                                            <div cb-mob-restrict cb-mob-restrict-height>
                                                <div class="row">
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Helpdesk
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Empower your support team to offer relevance in their conversations with a 360-degree view of your customers in helpdesk with Chargebee's integration with popular helpdesk providers.
                                                                </p>
                                                                <p class="cb-actions">
                                                                    <a href="/integrations/zendesk-helpdesk/" class="cb-action">Zendesk</a>
                                                                    <a href="/integrations/freshdesk-helpdesk/" class="cb-action">Freshdesk</a>
                                                                    <a href="/integrations/groove-helpdesk/" class="cb-action">Groove</a>
                                                                    <a href="https://support.natero.com/hc/en-us/articles/222641648" target="_blank" class="cb-action">Natero</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Tax Management
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Chargebee weaves tax management and subscription payments in its integration with Avalara. Handle EU VAT and reflect them in the invoicing and accounting segments of your business finance.
                                                                </p>
                                                                <p class="cb-actions">
                                                                    <a href="/integrations/avalara/" class="cb-action">Avalara</a>
                                                                    <a href="/integrations/taxjar/" class="cb-action">TaxJar</a>
                                                                    <a href="/integrations/softrax/" class="cb-action">Softrax</a>
                                                                </p>

                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Email Marketing
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Sync subscribers to your mailing lists, segment them and send targeted marketing emails using Chargebee's integration.
                                                                </p>
                                                                <p class="cb-actions">
                                                                    <a href="/integrations/mailchimp/" class="cb-action">Mailchimp</a>
                                                                    <a href="https://help.klaviyo.com/hc/en-us/articles/115005082247-Integrate-with-Chargebee" target="_blank" class="cb-action">Klaviyo</a>
                                                                    <a href="/integrations/activecampaign/" class="cb-action">ActiveCampaign</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Reporting and Analytics
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Benefit from Chargebee’s reporting, tracking and analytics integrations in real-time, for your subscription business.
                                                                </p>
                                                                <p class="cb-actions">
                                                                    <a href="/integrations/profitwell-saas-metrics/" class="cb-action">ProfitWell</a>
                                                                    <a href="/integrations/firstpromoter/" class="cb-action">FirstPromoter</a>
                                                                    <a href="/integrations/chartmogul/" class="cb-action">ChartMogul</a>
                                                                    <a href="/integrations/google-analytics/" class="cb-action">Google Analytics</a>
                                                                    <a href="/integrations/baremetrics/" class="cb-action">Baremetrics</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Custom Integrations
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Chargebee enables you to build custom integrations with apps that are supported by Zapier and PieSync. Sync with as many apps as you want from the plethora of integration options offered by these platforms.
                                                                </p>
                                                                <p class="cb-actions">
                                                                    <a href="/integrations/zapier/" class="cb-action">Zapier</a>
                                                                    <a href="/integrations/piesync/" class="cb-action">Piesync</a>
                                                                    <a href="/integrations/stitch/" class="cb-action">Stitch</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    CRM
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Empower your sales teams to manage their entire sales cycles from quotes, to orders to billing and renewals without leaving the comfort of their CRMs. 
                                                                </p>
                                                                <p class="cb-actions">
                                                                    <a href="/integrations/salesforce/" class="cb-action">Salesforce</a>
                                                                    <a href="/integrations/hubspot/" class="cb-action">HubSpot</a>
                                                                    <a href="/integrations/pipedrive/" class="cb-action">Pipedrive</a>
                                                                    <a href="/integrations/getaccept/" class="cb-action">GetAccept</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5 col-md-offset-1">
                                                        <div class="cb-factor__list">
                                                            <!-- <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    CRM
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    With Chargebee's CRM integrations, your sales team can bridge the gap between sales and subscriptions. Automate everything from nurturing, onboarding and billing, to having contextual conversations with your customers during renewals.
                                                                </p>
                                                                <p class="cb-actions">
                                                                    <a href="/integrations/salesforce/" class="cb-action">Salesforce</a>
                                                                    <a href="https://marketplace.zoho.com/crm/chargebee" target="_blank" class="cb-action">Zoho CRM</a>
                                                                </p>
                                                            </div> -->
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Accounting
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Accounting recurring payments is seamless with Chargebee's integration with leading accounting solutions. Sync customer details, avoide duplicate records, generate relevant reports, and handle billing, payments, and accounting in one plane.
                                                                </p>
                                                                <p class="cb-actions">
                                                                    <a href="/integrations/xero-recurring-billing/" class="cb-action">Xero</a>
                                                                    <a href="/integrations/quickbooks/" class="cb-action">Quickbooks</a>
                                                                    <a href="/integrations/oracle-netsuite/" class="cb-action">Netsuite</a>
                                                                    <a href="/integrations/sage-intacct/" class="cb-action">Sage Intacct</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Referral & Affiliate Marketing
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Run referral & affiliate marketing campaigns for targeted lists from your subscriber base.
                                                                </p>
                                                                <p class="cb-actions">
                                                                    <a href="/integrations/refersion/" class="cb-action">Refersion</a>
                                                                    <a href="/integrations/leaddyno-affiliate-marketing/" class="cb-action">LeadDyno</a>
                                                                    <a href="/integrations/friendbuy-referral-marketing/" class="cb-action">FriendBuy</a>
                                                                    <a href="/integrations/referralcandy-referral-marketing/" class="cb-action">ReferralCandy</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Communication
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Collaborate with your team and customers, with better context. Get notifications on subscription related events like overdues, renewals etc. and engage with targeted customers for seamless payments and subscription management. Take advantage of Chargebee's integration with internal collaboration tools.
                                                                </p>
                                                                <p class="cb-actions">
                                                                    <a href="/integrations/moxtra/" class="cb-action">Moxtra</a>
                                                                    <a href="/integrations/intercom/" class="cb-action">Intercom</a>
                                                                    <a href="/integrations/slack-integration/" class="cb-action">Slack</a>
                                                                </p>
                                                            </div>
                                                            <div class="cb-factor__item">
                                                                <p class="cb-factor__heading">
                                                                    Fulfillment platforms
                                                                </p>
                                                                <p class="cb-factor__desc">
                                                                    Let Subscription Orders flow from Chargebee to your fulfillment platform without any manual triggers.
                                                                </p>
                                                                <p class="cb-actions">
                                                                    <a href="/integrations/shipstation/" class="cb-action">Shipstation</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cb-mob-more></div>
                                            </div>
                                        </div>
                                    </article>
                                    <!-- ===============================================================
                                    End: Integrations
                                    ================================================================ -->
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div id="cb-affix-footer-new" class="cb-l-main__row">
                    <section class="cb-clients">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                    <div class="cb-clients__container">
                                        <div class="cb-clients__title">
                                            Easily connect your everyday tools with Chargebee <br class="hidden-xs hidden-sm">to grow and optimize your workflow
                                        </div>
                                        <ul class="cb-clients__logos">
                                            <li class="cb-clients__logo"><img src="/static/website/version/images/payment-gateways/adyen/freshdesk.png" alt="" width="155" class="img-responsive" style="margin-top:7px"></li>
                                            <li class="cb-clients__logo hidden-xs"><img src="/static/website/version/images/payment-gateways/adyen/refersion.png" alt="" width="136" class="img-responsive" style="margin-top:-7px"></li>
                                            <li class="cb-clients__logo"><img src="/static/website/version/images/payment-gateways/adyen/mailchimp.png" alt="" width="166" class="img-responsive"></li>
                                            <li class="cb-clients__logo"><img src="/static/website/version/images/payment-gateways/adyen/slack.png" alt="" width="118" class="img-responsive"></li>
                                        </ul>
                                        <a href="/integrations/" class="cb-clients__action">View all integrations →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section class="cb-hero" style="padding-top:150px;">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-8 col-sm-offset-2">
                                    <h1 class="cb-factor__title" style="margin-left: 0">Try your hands on Chargebee's capabilities. Experience Chargebee.</h1>
                                    <div class="ca-landing__actions">
                                        <div class="ca-landing__action">
                                            <a href="/trial-signup/" class="cnn-btn">
                                                Sign up for free &rarr;
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <app-footer />
                </div>
            </div>
        </div>
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
            var setAffix = $('#affix-nav').offset().top;
            $('body').scrollspy({ target: '#affix-nav' })
            $('#affix-nav').affix({
                offset: {
                    top: setAffix - 120,
                    bottom: function () {
                        return (this.bottom = $('#cb-affix-footer-new').outerHeight(true) + 50)
                    }
                }
            })
            $('.cb-readmore').on('click', function(){
                $(this).removeClass('show-full').parents('.cb-factor').find('.cb-factor__item,.cb-factor__desc,.cb-factor__more,.cb-factor__img,.cb-actions').addClass('show-full');
            });
        },
        methods: {}
    }
</script>
<style type="text/css">
    /*Fixed header hide*/
    .affix{
        position: fixed !important;
        padding-top: 100px;
    }
    .affix-bottom{
        padding-top: 100px;
    }
    @media (max-width: 991px){
        .affix{
            position: static !important;
        }
    }
</style>
