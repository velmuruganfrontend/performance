<!-- ===========================================================================
// cb-title		=	Page Level Titles (Title, Twitter, OG)
// cb-desc		=	Page Level Descriptions (Description, Twitter, OG)
// cb-image		=	Page Level Images (Twitter, OG)
// cb-style		=	Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script	=	Page Level Head Script. Using this tag to put head level scripts
// cb-body-script	=	Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex	=	Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header 		=	App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
// app-footer 		=	App footer will add footer to the page.
​
If you want to remove header or footer. Remove the "app-header" or "app-footer" tag, script url and components in scripts.
============================================================================ -->
<!-- ===========================================================================
Start: Main Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Meta Section
        ==================================================================== -->
        <app-meta
        :cb-title="'Customer Acquisition, Retention, Scale & Optimize |  Chargebee Value'"
        :cb-desc="'Chargebee delivers a promise of continuous growth with automated subscription lifecycle, easy recurring customer and billing management, and recurring payments.'"
        :cb-url="'/chargebee-subscription-billing-value-2018/'"
        :cb-image="''"
        :cb-style="'/static/website/version/styles/main.css,/static/website/version/styles/yreview.css'"
        :cb-head-script="''"
        :cb-body-script="'/static/website/version/scripts/rellax.min.js'"
        :cb-has-noindex="false" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body" style="background-color: #F7F1E9; overflow-X: hidden;">
            <!-- =====================================================================================
            Content Part Start
            ====================================================================================== -->
            <main class="l-main">
                <!-- =====================================================================================
                Start: Box 1
                ====================================================================================== -->
                <section class="l-main__row">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 col-lg-9 col-lg-offset-3">
                                <div class="yr-paper animate fadeInUp" cb-mob-restrict cb-mob-restrict-height="260">
                                    <div class="yr-paper__container">
                                        <!-- =============================================================
                                        Start: Box 1
                                        ============================================================== -->
                                        <div class="yr-article">
                                            <div class="yr-article__header">
                                                <h1 class="yr-article__title">
                                                    Making the most out of Chargebee
                                                </h1>
                                            </div>

                                            <div class="yr-article__content">
                                                <div class="yr-article__desc">
                                                    <em>
                                                        “I want to acquire more customers…  <br>
                                                        I want to be able to handle the growing business complexities… <br>
                                                        I need better understanding of my business performance and health… ”
                                                    </em>
                                                </div>
                                                <p class="yr-article__desc">
                                                    We come across these evergreen questions time and again. So we built this guide. To enable you to make that subscription lifecycle a seamless experience with your customers, explore new avenues of growth and revenue, and kill operational inefficiencies as they come. You will find that this handy guide is tailored to your needs and questions…
                                                </p>
                                            </div>

                                            <div class="yr-article__footer">
                                                <div class="yr-article__anchor" id="yr-article__anchor">
                                                    Let's dig in!
                                                </div>
                                            </div>
                                        </div>
                                        <!-- =============================================================
                                        End: Box 1
                                        ============================================================== -->
                                    </div>
                                    <div cb-mob-more></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="l-main__animation">
                    <div class="yr-animate__yellow" style="position: absolute; top: 250px; right: -100px; z-index: -1;">

                        <div class="yr-animate__yellow-circle rellax" data-rellax-speed="-5">
                            <img src="/static/website/version/images/recurring-customer/yellow-circle.svg" alt="" class="img-responsive">
                        </div>
                        <div class="yr-animate__yellow-dot rellax" data-rellax-speed="-2" style="margin-top: -150px;  z-index: -1;">
                            <img src="/static/website/version/images/recurring-customer/yellow-dot.svg" alt="" class="img-responsive">
                        </div>
                    </div>

                    <div class="yr-animate__green" style="position: absolute; bottom: 0px; left: -100px; z-index: -1; ">
                        <div class="yr-animate__green-circle rellax" data-rellax-speed="-6">
                            <img src="/static/website/version/images/recurring-customer/green-shape.svg" alt="" class="img-responsive">
                        </div>
                        <div class="yr-animate__green-dot rellax" data-rellax-speed="-1" style="margin-top: -100px;">
                            <img src="/static/website/version/images/recurring-customer/green-dot.svg" alt="" class="img-responsive">
                        </div>
                    </div>
                </div>
                <!-- =====================================================================================
                End: Box 1
                ====================================================================================== -->
                <!-- -------------------------------------------------------------------
                Start: Affix Before div. Dont delete
                -------------------------------------------------------------------- -->
                <div id='before-affix'></div><!-- leave this empty -->
                <!-- -------------------------------------------------------------------
                End: Affix Before div. Dont delete
                -------------------------------------------------------------------- -->
                <!-- =====================================================================================
                Start: Box 2
                ====================================================================================== -->
                <section class="l-main__row cd-affix__content" id="the-chargebee-pov">
                    <div class="container">
                        <div class="row">
                            <!-- ---------------------------------------------------------------
                            Start: Affix Nav
                            ---------------------------------------------------------------- -->
                            <div class="col-sm-1 col-lg-3">
                                <div data-affix-after='#before-affix' id="cd-affix" class="hidden-xs hidden-sm hidden-md">
                                    <div class="cd-affix__container">
                                        <ul class="cd-affix__list nav">
                                            <li class="cd-affix__item">
                                                <a href="#the-chargebee-pov">
                                                    The Chargebee PoV
                                                </a>
                                            </li>
                                            <li class="cd-affix__item">
                                                <a href="#recurring-customer-acquisition">
                                                    Acquire: Lead to Revenue
                                                </a>
                                            </li>
                                            <li class="cd-affix__item">
                                                <a href="#recurring-customer-retention">
                                                    Retain: Day one to Lifetime
                                                </a>
                                            </li>
                                            <li class="cd-affix__item">
                                                <a href="#global-subscription-scale">
                                                    Scale: New waters, new rules
                                                </a>
                                            </li>
                                            <li class="cd-affix__item">
                                                <a href="#recurring-revenue-management">
                                                    Optimize: Revenue Management
                                                </a>
                                            </li>
                                            <li class="cd-affix__item">
                                                <a href="#saas-metrics-subscription-reporting">
                                                    Report: Metrics & KPIs
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- ---------------------------------------------------------------
                            End: Affix Nav
                            ---------------------------------------------------------------- -->
                            <div class="col-sm-10 col-lg-9">
                                <div class="yr-paper" cb-mob-restrict cb-mob-restrict-height="260">
                                    <div class="yr-paper__container">
                                        <!-- =============================================================
                                        Start: Box 1
                                        ============================================================== -->
                                        <div class="yr-article">
                                            <div class="yr-article__header">
                                                <h1 class="yr-article__title">
                                                    Chargebee PoV
                                                </h1>
                                            </div>

                                            <div class="yr-article__content">
                                                <p class="yr-article__desc">
                                                    <em>You grow, we grow!</em>
                                                </p>
                                                <p class="yr-article__desc">
                                                    As your subscription management engine, our growth at Chargebee is directly tied to the growth of our customers. And from the looks of it, businesses on Chargebee seem to have been doing pretty amazing through 2018!
                                                </p>
                                                <p class="yr-article__desc">
                                                    Together we have
                                                </p>
                                                <ul class="yr-article__list yr-article__list--dash">
                                                    <li class="yr-article__item">
                                                        Created more than 10M subscriptions
                                                    </li>
                                                    <li class="yr-article__item">
                                                        Processed more than $1B worth of transactions
                                                    </li>
                                                    <li class="yr-article__item">
                                                        Recovered nearly 75% of potentially lost revenue
                                                    </li>
                                                </ul>
                                                <p class="yr-article__desc  revealOnScroll" data-animate='fadeInUp' style="margin-top: 30px;">
                                                    It’s heartwarming to know how well you’ve scaled. (Go you!)
                                                </p>
                                            </div>
                                        </div>
                                        <!-- =============================================================
                                        End: Box 1
                                        ============================================================== -->
                                    </div>
                                    <div cb-mob-more></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Box 2
                ====================================================================================== -->
                <!-- =====================================================================================
                Start: Box 3
                ====================================================================================== -->
                <section class="l-main__row cd-affix__content" id="recurring-customer-acquisition" style="position: relative;">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-1 col-lg-3"></div>
                            <div class="col-sm-10 col-lg-9">
                                <div class="yr-paper" cb-mob-restrict cb-mob-restrict-height="260">
                                    <div class="yr-paper__container">
                                        <!-- =============================================================
                                        Start: Box 1
                                        ============================================================== -->
                                        <div class="yr-article">
                                            <div class="yr-article__header">
                                                <h1 class="yr-article__title">
                                                    Don’t let another prospect elude you…
                                                </h1>
                                            </div>

                                            <div class="yr-article__content  revealOnScroll" data-animate='fadeInUp'>
                                                <p class="yr-article__desc">
                                                    You work hard to bring in each lead, get them into a conversation, and convert them into customers. You shouldn’t have to lose them due to operational leaks along the way… And that was a big focus area for us at Chargebee this year - getting you to win more subscriptions.
                                                </p>
                                                <p class="yr-article__desc">
                                                    Through 2018, we’ve added more flexibility and removed more friction in how you acquire customers. Whether you want to give customers more options in how they pay you, enable them to gift subscriptions, route to additional payment gateways, or even test out an entirely new pricing model - we’ve got you covered.
                                                </p>


                                                <!-- =============================================================
                                                Start: Block 1
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Self-Serve Sign Up
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        If you allow your users to directly sign-up for your product or offer a trial period before they subscribe to your service, Chargebee lets you streamline your entire lead flow with as little code and as much flexibility as possible.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/recurring-payments/checkout-experience/" class="yr-article__link" target="_blank">Modal-box Checkout</a> -
                                                            Optimize your checkout experience for better conversions with completely customizable interfaces.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/plans.html#pricing-attributes" class="yr-article__link" target="_blank">New pricing models</a> -
                                                            Reflect your pricing in a way your customers derive value from you - through flat, usage-based, volume, and tiered pricing models.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/auto-addons.html" class="yr-article__link" target="_blank">Flexible Addons</a> -
                                                            Recommend addons with a particular plan (eg: integrations). Or nominate specific addons as “mandatory” (eg: installations)
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 1
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 2
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Sales-Driven Acquisition
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        If you have a product with high sales touch, your sales teams will need a 360-degree view into their prospects, deals, and renewals. Chargebee automates your outbound sales workflow while creating an unmatched subscription experience.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/salesforce.html" class="yr-article__link" target="_blank">Salesforce</a> -
                                                            Safe to say, we are building a mini-Chargebee inside Salesforce, by syncing your sales and subscription data.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/price-override.html" class="yr-article__link" target="_blank">Custom Pricing with Price Override</a> -
                                                            Custom pricing is the sweet spot between earning a customer and ensuring their pricing demands are met
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <strong style="font-weight: 500;">[Upcoming] Quotes</strong> - Send a Proforma Invoice for approval to let a potential buyer know how much the product will cost before they commit to the purchase.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 2
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 3
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Acquisition with Flexibility
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        Would you prefer giving longer trials? Or keep iterating on pricing till your customers value your product? As the gatekeeper of data from every sale and every checkout, Chargebee lets you understand what your customers are looking for and help turn their hesitation into revenue. Well, almost.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/trial_periods.html" class="yr-article__link" target="_blank">Trial Management</a> -
                                                            Experiment with free as well as paid trials. Get your customers to fall in love with your product by extending their trials on need basis.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/subscription-management/create-manage-plans/" class="yr-article__link" target="_blank">Pricing Experiments</a> -
                                                            The golden rule of SaaS - keep testing your pricing. Iterate on your pricing while grandfathering existing customers.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/abandoned-carts.html" class="yr-article__link" target="_blank">Abandoned Carts</a> -
                                                            Convert Maybe’s into MRR. Track potential buyers you lost at the last moment, and give them targeted offers via email.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 3
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 4
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Acquisitions via Campaigns
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        Running targeted coupon and discount campaigns open the gates to bringing in more customers.  Close gaps in your sales cycle with targeted coupon campaigns. Tailor them such that your leads move much more efficiently through the purchasing cycle.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/subscription-management/discount-management-system/" class="yr-article__link" target="_blank">Discounts and Coupons</a> -
                                                            Leverage this smartest trick in your arsenal. Create and track one-time, unlimited, or time-defined coupons easily, and drive more revenue.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <strong style="font-weight: 500;">Referral integrations</strong> - Friends. Friends of friends. Build an army of referrals and affiliates. Set up referral programs and reward your subscribers with credits for referrals
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/gift-subscriptions.html" class="yr-article__link" target="_blank">Gift Subscriptions </a> -
                                                            Our customer, Sofar Sounds decided to give their customers the gift of live music. Yes, this feature is that awesome!
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 4
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 5
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Acquisitions in new geographies
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        Additional payment options allow you to experiment with customer segments and geographies. Adyen opens up the gateway to Asia, while most of Europe prefers direct debit instead of credit cards which is used predominantly in North America.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/payment-gateways/" class="yr-article__link" target="_blank">Payment gateways</a> -
                                                            We added several new gateways that open up your avenues to global markets.

                                                            <ul class="yr-article__list yr-article__list--inner">
                                                                <li class="yr-article__item">Adyen</li>
                                                                <li class="yr-article__item">Bambora</li>
                                                                <li class="yr-article__item">Moneris</li>
                                                                <li class="yr-article__item">BlueSnap</li>
                                                                <li class="yr-article__item">CyberSource</li>
                                                            </ul>
                                                        </li>

                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/recurring-payments/payment-methods/" class="yr-article__link" target="_blank">Payment methods</a> -
                                                            Local payment options have an even stronger foothold in their corresponding markets. We added more payment options to cater to a diverse customer base.
                                                            <ul class="yr-article__list yr-article__list--inner">
                                                                <li class="yr-article__item">Amazon Pay </li>
                                                                <li class="yr-article__item">Apple Pay</li>
                                                                <li class="yr-article__item">Stripe SEPA</li>
                                                                <li class="yr-article__item">Stripe ACH Credit Transfer</li>
                                                                <li class="yr-article__item">In-App GoCardless Checkout</li>
                                                                <li class="yr-article__item">WeChat Pay via Adyen</li>
                                                            </ul>
                                                        </li>

                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/recurring-payments/multicurrency/" class="yr-article__link" target="_blank">Multiple currencies </a> -
                                                            Offering localized capabilities such as multi-currency support avenues to newer markets and tapping into a global customer base.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 5
                                                ============================================================== -->
                                            </div>
                                        </div>
                                        <!-- =============================================================
                                        End: Box 1
                                        ============================================================== -->
                                    </div>
                                    <div cb-mob-more></div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="l-main__animation">
                        <div class="yr-animate__brown" style="position: absolute; top: 150px; right: -100px; z-index: -1">
                            <div class="yr-animate__brown-dot rellax" data-rellax-speed="-5.5" >
                                <img src="/static/website/version/images/recurring-customer/brown-dot.svg" alt="" class="img-responsive">
                            </div>
                            <div class="yr-animate__brown-circle rellax" data-rellax-speed="-4.5"  style="margin-top: -100px; position: relative; z-index: -1;">
                                <img src="/static/website/version/images/recurring-customer/brown-shape.svg" alt="" class="img-responsive">
                            </div>
                        </div>
                    </div>

                </section>
                <!-- =====================================================================================
                End: Box 3
                ====================================================================================== -->
                <!-- =====================================================================================
                Start: Box 4
                ====================================================================================== -->
                <section class="l-main__row cd-affix__content" id="recurring-customer-retention">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-1 col-lg-3"></div>
                            <div class="col-sm-10 col-lg-9">
                                <div class="yr-paper" cb-mob-restrict cb-mob-restrict-height="260">
                                    <div class="yr-paper__container">
                                        <!-- =============================================================
                                        Start: Box 1
                                        ============================================================== -->
                                        <div class="yr-article">
                                            <div class="yr-article__header">
                                                <h1 class="yr-article__title  revealOnScroll" data-animate='fadeInUp'>
                                                    Especially since customer retention is less expensive than acquisition…
                                                </h1>
                                            </div>

                                            <div class="yr-article__content">
                                                <p class="yr-article__desc">
                                                    Every customer you earn and every deal you win matters less if they don’t stick around for the long haul. Churn, then, becomes your number one enemy. The key to avoiding churn is ensuring your customer is engaged with your product.
                                                </p>
                                                <p class="yr-article__desc">
                                                    Various points of friction exist that form an impediment to retention - delinquent payments, lack of payment options, and subscription flexibility. At Chargebee, we have been working on ensuring your customers stick through - right from a complete overhaul in the Dunning process and payment collections to changes in how you email your customers.
                                                </p>


                                                <!-- =============================================================
                                                Start: Block 1
                                                ============================================================== -->
                                                <div class="yr-article__blk  revealOnScroll" data-animate='fadeInUp'>
                                                    <h3 class="yr-article__heading">
                                                        Retention through Engagement
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        From onboarding to renewal, your interaction with your customer marks their willingness to continue with your product. Notify and engage with your customers with relevance, and a greater degree of personalization.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/recurring-billing-invoicing/new-email-notifications/" class="yr-article__link" target="_blank">Contextual Notifications</a> -
                                                            Delight and inform your customers with email notifications that has a touch of personality and relevance.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/email-notifications-v2.html" class="yr-article__link" target="_blank">Multi-language emails</a> -
                                                            Send out emails in multiple languages establishing an enhanced personal engagement with customers speaking in their native language.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/email-notifications-v2.html#set-up-segments" class="yr-article__link" target="_blank">Segmentation</a> -
                                                            Reach customers from a specific region, a given plan, or any other segment that makes them, them.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 1
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 2
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Retention through Follow-ups
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        We built an array of recurring payment recovery solutions to treat revenue loss as an entity than as individual problems that need separate solutions on their own.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/recurring-payments/dunning-management/" class="yr-article__link" target="_blank">Smart Dunning</a> -
                                                            Optimize payment recovery based on your customer's historical transactional data. The payment retries and notifications are decoupled.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/email-notifications-v2.html#reminders-and-follow-ups" class="yr-article__link" target="_blank">Relevant follow-ups</a> -
                                                            Send contextual follow-ups to a specific segment, such as re-activating trials or payment reminders optimized for their response times.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/pay-now.html" class="yr-article__link" target="_blank">Pay Now</a> - Follow up on unpaid invoices on your recurring billing and make it easier for your customers to pay with a single click.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 2
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 3
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Retention through Payment Options
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        From configuring rules to automatically pick a gateway based on the payment methods and currencies, to allowing for elaborate recurring invoices approval cycles, we have them all covered
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/payment-method-overview.html#primary-and-backup-payment-methods" class="yr-article__link" target="_blank">Backup Payments</a> -
                                                            With 15% of card payments being declined, offer alternative payment options as fallback options.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/advance-invoices.html" class="yr-article__link" target="_blank">Advance Invoices</a> -
                                                            Make room for advance payments by raising invoices a pre-set number of days in advance of the subscription renewal date.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/net_d.html" class="yr-article__link" target="_blank">Net D</a> -
                                                            Allow customers to review outstanding invoices and arrange for payments. Set a payment term of ‘x’ days before the payment comes through.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 3
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 4
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Retention through Custom Subscription Management
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        A key lesson to retention: keep your customers close to you. To avoid voluntary churn, your business needs to be equipped with the ability to stick around. Help them pause and reactivate subscriptions, rather than cancelling.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/pause-subscription.html" class="yr-article__link" target="_blank">Pause Subscriptions</a> -
                                                            Your customers may want to pause their subscription temporarily instead of cancelling it and resume later. Give them a chance to come back.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/extend-subscription.html" class="yr-article__link" target="_blank">Extend Subscriptions</a> - Is your customer scheduled for renewal? Retain them by automatically nudging them to extend their subscription in a single click.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/reactivation.html#two-kinds-of-reactivation" class="yr-article__link" target="_blank">Reactivate Subscriptions </a> -
                                                            Help customers who cancelled, reactivate subscriptions without having to sign up again.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 4
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 5
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Retention through Personalization
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        Talk to an audience of one - communicate with your customers in your voice and your brand, addressing their needs to ensure that they stay happy and engaged with your product.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/v3-self-serve-portal.html" class="yr-article__link" target="_blank">Self-Serve Subscriber Portal</a> -
                                                            Allow your customers to add, edit, pause, cancel subscriptions, download previous invoices, manage payment methods and more.
                                                        </li>

                                                        <li class="yr-article__item">
                                                            <strong style="font-weight: 500;">Collaboration integrations</strong> -
                                                            Make conversations relevant with a 360-degree view of your customers in your helpdesk and communication tools.
                                                        </li>

                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/branding.html" class="yr-article__link" target="_blank">Brand Styles </a> -
                                                            Upload your logo and customize your brand elements and it will reflect on invoices, emails, checkout pages, and customer portal.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 5
                                                ============================================================== -->
                                            </div>
                                        </div>
                                        <!-- =============================================================
                                        End: Box 1
                                        ============================================================== -->
                                    </div>
                                    <div cb-mob-more></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Box 4
                ====================================================================================== -->
                <!-- =====================================================================================
                Start: Box 5
                ====================================================================================== -->
                <section class="l-main__row cd-affix__content" id="global-subscription-scale" style="position: relative;">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-1 col-lg-3"></div>
                            <div class="col-sm-10 col-lg-9">
                                <div class="yr-paper" cb-mob-restrict cb-mob-restrict-height="260">
                                    <div class="yr-paper__container">
                                        <!-- =============================================================
                                        Start: Box 1
                                        ============================================================== -->
                                        <div class="yr-article">
                                            <div class="yr-article__header  revealOnScroll" data-animate='fadeInUp'>
                                                <h1 class="yr-article__title">
                                                    Expanding to new geographies shouldn’t bog you down…
                                                </h1>
                                            </div>

                                            <div class="yr-article__content">
                                                <p class="yr-article__desc">
                                                    As your subscriptions begin to scale to newer territories, it isn’t only about selling monthly or annual subscriptions anymore. There are a whole lot of other hidden issues and opportunities.
                                                </p>
                                                <p class="yr-article__desc">
                                                    From global tax and data compliances to selling in the native currencies and languages, showcase a deeper level of personalization, create memorable subscription experiences, and earn the trust of your customers. From any corner of the world.
                                                </p>

                                                <!-- =============================================================
                                                Start: Block 1
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Language as an enabler. Not an impediment.
                                                    </h3>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/configure-multiple-languages.html" class="yr-article__link" target="_blank">Multi-language support</a> -
                                                            Don’t let the limits of language limit how far you can sell. With Chargebee’s multi-lingual support, you can make your customers feel at home.

                                                            <ul class="yr-article__list yr-article__list--inner">
                                                                <li class="yr-article__item">Italian</li>
                                                                <li class="yr-article__item">Spanish</li>
                                                                <li class="yr-article__item">German</li>
                                                                <li class="yr-article__item">French</li>
                                                                <li class="yr-article__item">Portuguese</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 1
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 2
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Global Payments = Global Markets
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        How you price your product and how you let them pay impacts your customers’ perceptions, irrespective of where they are. Don’t simply get paid. Build lasting relationships.
                                                    </p>
                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/recurring-payments/multicurrency/" class="yr-article__link" target="_blank">Multicurrency support</a> -
                                                            From Australian Dollar to Euro, from Japanese Yen to Mexican Peso, Chargebee’s lets you get paid in 100+ native currencies.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/payment-gateways/" class="yr-article__link" target="_blank">Multiple gateways</a> -
                                                            Boost your avenues of payment with gateway integrations such as Stripe, Braintree, Authorize.net, GoCardless, PayPal, and more.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/recurring-payments/payment-methods/" class="yr-article__link" target="_blank">Multiple payment methods</a> -
                                                            Don’t let the lack of payment options limit your reach. Allow for more than credit cards including ACH, Direct Debit, SEPA and more.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/gateway_settings.html#smart-routing/" class="yr-article__link" target="_blank">Intelligent routing</a> -
                                                            Facilitate global transactions at scale. Connect multiple accounts of the same payment gateway with the Smart Routing capability.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 2
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 3
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Global Tax Compliance
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        Don’t let global tax rules confuse your business. Put an end to messy tax compliance with Chargebee’s multiple tax profiles.
                                                    </p>
                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="/resources/guides/understanding-eu-vat-guide/" class="yr-article__link">EU VAT</a> -
                                                            Ensure that you and your customers are compliant with EU VAT rules including location and VAT validation, and EU VAT compliant invoices.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/eu-vat.html#consultation-num" class="yr-article__link" target="_blank">VAT VIES Consultation Number</a> -
                                                            Let EU tax authorities know that you have validated your customers' VAT numbers with VAT VIES Consultation Number.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/australian-gst.html" class="yr-article__link" target="_blank">AU & NZ GST</a> -
                                                            If you are selling to Australia or New Zealand, don’t let the tax rules bog you down. Chargebee automates AU GST and NZ GST.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/integrations/avalara/" class="yr-article__link" target="_blank">US/Canada Sales Tax</a> -
                                                            Achieve fast and accurate compliance with sales tax requirements, automated by Chargebee and Avalara.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 3
                                                ============================================================== -->

                                            </div>
                                        </div>
                                        <!-- =============================================================
                                        End: Box 1
                                        ============================================================== -->
                                    </div>
                                    <div cb-mob-more></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="l-main__animation">
                        <div class="yr-animate__yello" style="position: absolute; top: 0px; left: 100px; z-index: -1">
                            <div class="yr-animate__yello-dot rellax" data-rellax-speed="1.8">
                                <img src="/static/website/version/images/recurring-customer/yellow-dot.svg" alt="" class="img-responsive">
                            </div>
                            <div class="yr-animate__yello-circle rellax" data-rellax-speed="2.2" style="margin-top: 0px; position: relative; z-index: -1;">
                                <img src="/static/website/version/images/recurring-customer/yellow-circle.svg" alt="" class="img-responsive">
                            </div>
                        </div>
                    </div>


                </section>
                <!-- =====================================================================================
                End: Box 5
                ====================================================================================== -->
                <!-- =====================================================================================
                Start: Box 6
                ====================================================================================== -->
                <section class="l-main__row cd-affix__content" id="recurring-revenue-management">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-1 col-lg-3"></div>
                            <div class="col-sm-10 col-lg-9">
                                <div class="yr-paper" cb-mob-restrict cb-mob-restrict-height="260">
                                    <div class="yr-paper__container">
                                        <!-- =============================================================
                                        Start: Box 1
                                        ============================================================== -->
                                        <div class="yr-article  revealOnScroll" data-animate='fadeInUp'>
                                            <div class="yr-article__header">
                                                <h1 class="yr-article__title">
                                                    Process Optimization is the new black…
                                                </h1>
                                            </div>

                                            <div class="yr-article__content">
                                                <p class="yr-article__desc">
                                                    As an active user of Chargebee,  if you are obsessing over revenue growth and exploring avenues to optimize for that, you need to have the right infrastructure, processes, and technology to support your strategy.
                                                </p>
                                                <p class="yr-article__desc">
                                                    Chargebee was designed to aid you to run iterative experiments, help acquire more customers and scale internationally. And more importantly, to smooth and compliant workflows that promises accuracy and predictability.
                                                </p>


                                                <!-- =============================================================
                                                Start: Block 1
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Pricing Models and Billing Cycles
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        For a customer-driven subscription business, Chargebee abstracts billing complexities and lets you focus on what truly matters. From signup to cash or quote to cash, upsells, and product packaging, we rolled out various updates that let you automate various pricing models, and customize your invoice.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/plans.html#pricing-attributes" class="yr-article__link" target="_blank">Pricing Models</a> -
                                                            Reflect your pricing in a way your customers derive value from you - through flat, usage-based, volume, and tiered pricing models.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/calendar-billing.html" class="yr-article__link" target="_blank">Calendar Billing</a> -
                                                            Benefit from the ability to offer flexible billing and shipping dates, with accurate proration, and without breaking your calculator. Or your spreadsheet.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/unbilled-charges.html" class="yr-article__link" target="_blank">Unbilled Charges</a> -
                                                            Be it a mid-cycle upgrade or downgrade, or a mid-term addition of a one-time charge or an addon, you don’t have to bombard them with invoices. Just add it to unbilled charges for the next renewal.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 1
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 2
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Invoice customizations
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        A sound and tax-compliant invoicing system is paramount to have a sound accounting and financial operations. We built out a suite of invoice customization capabilities - so you can add the relevant data fields, format, and add a touch of personalization.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/consolidated-invoicing.html" class="yr-article__link" target="_blank">Consolidated Invoicing</a> -
                                                            Send out a single, neat invoice, for multiple subscriptions of the same customer, instead of multiple invoices for each subscription.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/invoice-operations.html#collect-now" class="yr-article__link" target="_blank">Invoice Operations</a> -
                                                            Apply excess payments, issue credits and refunds, create reverse invoices write off/void/delete/regenerate invoices. The options are abundant.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/invoice_notes.html" class="yr-article__link" target="_blank">Invoice Notes</a> -
                                                            Add context and clarity to your invoices, with custom notes. You can add T&C, product guidelines or promotional offers. Or even a thank you note.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 2
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 3
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Additional Payment options
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        How much money are we leaving on the table? How do we plug revenue leakage? How can we solve for growing billing complexities as we scale to newer territories?  Chargebee equips you with the tools to answer these questions.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/payment-gateways/" class="yr-article__link" target="_blank">Multiple gateways</a> -
                                                            Give your customers more ways to pay with Stripe, Braintree, Authorize.net, GoCardless, PayPal, and more.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/recurring-payments/payment-methods/" class="yr-article__link" target="_blank">Multiple payment methods</a> -
                                                            Don’t let the lack of payment options limit your reach. Allow for more than credit cards including ACH, Direct Debit, SEPA and more.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/gateway_settings.html#smart-routing" class="yr-article__link" target="_blank">Intelligent routing</a> -
                                                            Facilitate global transactions at scale. Connect multiple accounts of the same payment gateway with Smart Routing.
                                                        </li>
                                                    </ul>


                                                    <div class="yr-article__tips">
                                                        <strong>Pro Tip:</strong> If you are using Stripe AND collecting offline payments, you could secure these high-value transactions with ACH Credit Transfer via Stripe and automatically reconcile your unpaid invoices in Chargebee. Your customizable invoice is equipped to add your virtual bank account information in a new section. <a href="https://www.chargebee.com/docs/ach-credit-transfer-via-stripe.html" class="yr-article__link" target="_blank">Learn more</a>
                                                    </div>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 3
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 4
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Leads to Subscriptions to Books - CRM & Accounting Integrations
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        Your subscription lifecycle starts the moment a lead lands on your website. And continues until their revenue is accounted for in your books. It's our responsibility to make sure your process flows as seamlessly as possible through this cycle - from Lead to Ledger.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="http://chargebee.com/integrations/salesforce" class="yr-article__link" target="_blank">Chargebee + Salesforce </a> -
                                                            Your sales team can bridge the gap between sales and subscriptions. Provide an unmatched subscription experience to your prospects.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="/saas-accounting-and-taxes/xero-accounting/payment-reconciliation/" class="yr-article__link" target="_blank">Chargebee + QuickBooks/Xero</a> - 
                                                            With Chargebee’s account and tax integrations, your finance team can manage your business finances seamlessly.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 4
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 5
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Revenue Recognition and Deferred Revenue Reporting
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        Revenue reporting is going through an overhaul, across industries, geographies, and markets. ASC 606 dictates that companies must recognize revenue after transfer of service/goods, with an amount proportional to what has been delivered. This is particularly difficult for subscription businesses.
                                                    </p>
                                                    <p class="yr-article__desc">
                                                        Chargebee handles the complexity of revenue recognition and deferred revenue reporting, by automating revenue management and aligning it with your other finance tools.
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/revenue-recognition.html" class="yr-article__link" target="_blank">Revenue Recognition</a> -
                                                            Chargebee’s GAAP-compliant RevRec and Reporting addresses every subscription scenario that could possibly crop up.
                                                        </li>

                                                        <li class="yr-article__item">
                                                            <strong style="font-weight: 500;">ASC 606-compliant RevRec with Chargebee + Softrax </strong> -
                                                            We are rolling out a beta program to roll out support for ASC 606-compliant revenue recognition reporting for your business. Sign up <a href="https://chargebee.typeform.com/to/F5A5ch" target="_blank" class="yr-article__link">here.</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 5
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 6
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Global Compliance and Security
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        Consent and transparency are the cornerstones for securing the personal data of EU citizens. And at Chargebee, we have held data security as a top priority and compliant with the latest laws, given the nature of information we deal with.
                                                    </p>
                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/security/gdpr/" class="yr-article__link" target="_blank">EU GDPR Compliance</a> -
                                                            From how we control your data to how we process it, Chargebee meets every requirement of GDPR rules.
                                                        </li>

                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/consent-management.html" class="yr-article__link" target="_blank">Consent Management </a> -
                                                            Chargebee's Consent Management gives you powerful ways to capture and manage consent information from your customers.
                                                        </li>

                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/personal-data-management.html" class="yr-article__link" target="_blank">Personal Data Management</a> -
                                                            Personal Data Management helps you align Chargebee with your customer data retention policies.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 6
                                                ============================================================== -->
                                            </div>
                                        </div>
                                        <!-- =============================================================
                                        End: Box 1
                                        ============================================================== -->
                                    </div>
                                    <div cb-mob-more></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Box 6
                ====================================================================================== -->
                <!-- =====================================================================================
                Start: Box 7
                ====================================================================================== -->
                <section class="l-main__row cd-affix__content" id="saas-metrics-subscription-reporting">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-1 col-lg-3"></div>
                            <div class="col-sm-10 col-lg-9">
                                <div class="yr-paper" cb-mob-restrict cb-mob-restrict-height="260">
                                    <div class="yr-paper__container">
                                        <!-- =============================================================
                                        Start: Box 1
                                        ============================================================== -->
                                        <div class="yr-article">
                                            <div class="yr-article__header">
                                                <h1 class="yr-article__title">
                                                    Numbers need to tell a meaningful story…
                                                </h1>
                                            </div>

                                            <div class="yr-article__content  revealOnScroll" data-animate='fadeInUp'>
                                                <p class="yr-article__desc">
                                                    Flexing the measurement muscle involves looking hard enough at data you can trust, knowing that the answer you’re seeking is exceedingly likely to arrive in the form of further questions. And a metrics tool that doesn’t aid this continuous digging for answers — across teams — is a failure.
                                                </p>
                                                <p class="yr-article__desc">
                                                    Making this very flexing possible for individuals and functions has been central to the building of RevenueStory. Its aim is to free you from the imprisoning, messy character of excel sheets and the inaccurate, shallow nature of other tools. Because both sit afar from your billing system, both sit afar from the truth. We wanted to change that.
                                                </p>


                                                <!-- =============================================================
                                                Start: Block 1
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        RevenueStory - for your Revenue Story…
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        We launched RevenueStory - the uber-powerful revenue insights built on top of your Chargebee billing platform. The idea was to let you tie your everyday activities to the end goals that matter. <a href="https://www.revenuestory.io/" target="_blank" class="yr-article__link">Learn more.</a>
                                                    </p>

                                                    <ul class="yr-article__list yr-article__list--dash">
                                                        <li class="yr-article__item">
                                                            80+ subscription reports
                                                        </li>
                                                        <li class="yr-article__item">
                                                            Role-based dashboards
                                                        </li>
                                                        <li class="yr-article__item">
                                                            Shareable reports
                                                        </li>
                                                        <li class="yr-article__item">
                                                            Threshold alerts
                                                        </li>
                                                        <li class="yr-article__item">
                                                            Goal tracking
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 1
                                                ============================================================== -->
                                                <!-- =============================================================
                                                Start: Block 2
                                                ============================================================== -->
                                                <div class="yr-article__blk">
                                                    <h3 class="yr-article__heading">
                                                        Chargebee Reporting Dashboard
                                                    </h3>
                                                    <p class="yr-article__desc">
                                                        Chargebee's metric dashboard doubles up as your assistant with all the essentials to track the health of your business, at the tap of a button. <a href="" target="_blank" class="yr-article__link">Learn more.</a>
                                                    </p>

                                                    <ul class="yr-article__list">
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/reporting.html#subscriptions" class="yr-article__link" target="_blank">Subscription Reports</a> -
                                                            Tracks everything from monthly plan and addon revenue to renewal summary and from refund summary to ARPU.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/reporting.html#accounting" class="yr-article__link" target="_blank">Accounting Reports</a> -
                                                            Get all the reports for your accounting purposes - from Revenue Recognition and Deferred Revenue to A/R Aging, Tax summary and more.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/reporting.html#revenue-recovery" class="yr-article__link" target="_blank">Revenue Recovery Reports</a> -
                                                            Generates reports to track the abandoned carts as well as recovered carts to expedite your revenue recovery process.
                                                        </li>
                                                        <li class="yr-article__item">
                                                            <a href="https://www.chargebee.com/docs/reporting.html#transactions" class="yr-article__link" target="_blank">Transactions Reports</a> -
                                                            Track transaction trends and lost opportunities, along with reports of all the transaction types.
                                                        </li>
                                                    </ul>

                                                    <div class="yr-article__tips">
                                                        <strong>Pro Tip:</strong> You can use our nifty <a href="https://www.chargebee.com/integrations/slack-integration/" target="_blank" class="yr-article__link">Slack integration</a> to get your daily dose of just the key metrics on the go, and jump from notification to solution within minutes.
                                                    </div>
                                                </div>
                                                <!-- =============================================================
                                                End: Block 2
                                                ============================================================== -->
                                            </div>
                                        </div>
                                        <!-- =============================================================
                                        End: Box 1
                                        ============================================================== -->
                                    </div>
                                    <div cb-mob-more></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Box 7
                ====================================================================================== -->
            </main>
            <!-- =========================================================================================
            Content Part End
            ========================================================================================== -->
        </div>
        <!-- ===================================================================
        End: Body Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Footer Section
        ==================================================================== -->
        <app-footer />
        <!-- ===================================================================
        End: Footer Section
        ==================================================================== -->
    </div>
</template>
<!-- ===========================================================================
End: Main Template
============================================================================ -->
<!-- ===========================================================================
Start: Scripts Section
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
    // jQuery methods/functions should be placed inside the methods
    methods: {},
    // jQuery interaction should be placed inside the mounted method
    mounted() {
        // -------------------------------------------------------------------------
        // Rellax js for Animation
        // -------------------------------------------------------------------------
        var rellax = new Rellax('.rellax');

        $(document).ready(function(){
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
        });

        // -------------------------------------------------------------------------
        // Scrollspy for left nav
        // -------------------------------------------------------------------------
        $('body').scrollspy({ target: '#cd-affix'});

        $("#cd-affix li a[href^='#']").on('click', function(e) {
           // prevent default anchor click behavior
           e.preventDefault();

           // store hash
           var hash = this.hash;

           // animate
           $('html, body').animate({
               scrollTop: $(this.hash).offset().top
             }, 1000, function(){

               // when done, add hash to url
               // (default click behaviour)
               window.location.hash = hash;
             });
        });


        $("#yr-article__anchor").click(function() {
            $('html, body').animate({
                scrollTop: $("#the-chargebee-pov").offset().top
            }, 500);
        });
        // -------------------------------------------------------------------------
        // Affix scroll
        // -------------------------------------------------------------------------
        $('[data-affix-after]').each( function() {
            var elem = $(this);
            var parent_panel = elem.parent();
            var prev = $( elem.data('affix-after') );

            if( prev.length != 1 ) {
            /* Create a new element immediately before. */
            prev = elem.before( '<div></div>' ).prev();
            }

            var resizeFn = function() {
              /* Set the width to it's natural width in the parent. */
              var sideBarNavWidth = parent_panel.width()
                  - parseInt(elem.css('paddingLeft'))
                  - parseInt(elem.css('paddingRight'))
                  - parseInt(elem.css('marginLeft'))
                  - parseInt(elem.css('marginRight'))
                  - parseInt(elem.css('borderLeftWidth'))
                  - parseInt(elem.css('borderRightWidth'));
              elem.css('width', sideBarNavWidth);

              elem.affix({
                offset: {
                    top: prev.offset().top + prev.outerHeight(true) - 30,
                    bottom: function () {
                        return (this.bottom = $('#cb-affix-footer').outerHeight(true) + 150)
                    }
                }
              });
            };

            resizeFn();
                $(window).resize(resizeFn);
        });
    }
}
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css">
    #ch-js-header-cloned {
      display: none;
    }
    .affix {top: 60px; left: 0;}
    .affix-top {left: 0; position: absolute; visibility: hidden; opacity: 0;}
    .affix-bottom {position: absolute;  visibility: hidden; opacity: 0}
    body{
        background-color:#f7f1e9;overflow-X:hidden;
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
