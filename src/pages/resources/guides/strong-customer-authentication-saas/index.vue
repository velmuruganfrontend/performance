<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'European PSD2 and SCA Regulation: What it means for Subscription Businesses'"
            :cb-desc="'PSD2 and SCA Explained: From the basics to the implications of PSD2, 3DS and SCA, for businesses that handle online recurring payments.'"
            :cb-url="'/resources/guides/strong-customer-authentication-saas/'"
            :cb-image="''"
            :cb-style="'/static/website/version/styles/guidev2.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false"/>
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Hero
        ==================================================================== -->
        <section class="cg-hero cg-hero--psd">
            <div class="cg-hero__container">
                <div class="cg-hero__content">
                    <h1 class="cg-hero__title">
                        PSD2 & Strong Customer Authentication<br class="visible-lg visible-md"> - How to Be Ready and Beat The Deadline
                    </h1>
                </div>
                <div class="cg-hero__actions hidden-xs">
                    <div class="cg-hero__action"></div>
                    <div class="cg-hero__actiona">
                        Click to Read
                    </div>
                    <div class="cg-hero__action"></div>
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Website Hero
        ==================================================================== -->
        <!-- ===================================================================
        Start: Article
        ==================================================================== -->
        <section class="cg-article">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                        <p class="cg-article__desc">
                            The Second Payment Services Directive, a.k.a PSD2, is set to bring major changes that will impact online payments in Europe. With all the noise around PSD2 in the payments and finance industry, there’s a whirlwind of questions blowing in the SaaS industry on how this would impact them.
                        </p>
                        <p class="cg-article__desc">
                            <span class="cg-tooltip" data-toggle="tooltip" title="Payment Services Directive was introduced by the European Union to unify and create a single market for European payments.">PSD2</span> will bring in increased security for online card payments through <br class="visible-md visible-lg"><span class="cg-tooltip" data-toggle="tooltip" title="Strong Customer Authentication is a requirement of the PSD2 law to make online payments more secure and reduce payment fraud.">Strong Customer Authentication (SCA)</span>. As we get closer to PSD2 going live, here’s a guide that will walk you through the why, the what, and the how of PSD2, and what this means to your SaaS business.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Article
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Affix
        ==================================================================== -->
        <div id='before-affix'></div><!-- leave this empty -->
        <!-- ===================================================================
        Start: Affix
        ==================================================================== -->
        <section class="cg-affixs">
            <div class="container">
                <div class="row">
                <!-- ===================================================================
                Start: Affix Left
                ==================================================================== -->
                <div class="col-md-5 hidden-xs hidden-sm">
                    <div class="cg-affix" data-affix-after='#before-affix' id="ca-nav-affix">
                        <div class="cg-affix-label">
                            <a href="/trial-signup/" class="cg-btn" style="line-height: 36px; height: 36px; font-size: 14px; font-weight: bold; background: #3a008c">Sign up for free</a>
                        </div>
                        <div class="cg-affix__header">
                            <div class="cg-affix__title">
                                Table of Contents
                            </div>
                        </div>
                        <ul class="cg-affix__list nav">
                            <li class="cg-affix__item">
                                <a href="#the-need-for-a-second-edition-of-psd">
                                    The Need for a Second Edition of PSD
                                </a>
                                <ul class="cg-affix__sublist">
                                    <li class="cg-affix__subitem">
                                        <a href="#what-is-psd-2-and-when-does-it-go-live">
                                            What Is PSD2 and When Does It Go Live?
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#what-psd-2-means-for-saas-businesses">
                                    What PSD2 Means for SaaS Businesses
                                </a>
                                <ul class="cg-affix__sublist">
                                    <li class="cg-affix__subitem">
                                        <a href="#how-does-psd-2-impact-saas">
                                            How Does PSD2 Impact SaaS?
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#strong-customer-authentication-sca-exemptions">
                                            Strong Customer Authentication (SCA) Exemptions
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#impacted-areas-for-saas-recurring-billing-businesses">
                                            Impacted Areas for SaaS Recurring Billing Businesses
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#how-can-your-recurring-billing-system-be-sca-ready">
                                            How Can Your Recurring Billing System Be SCA Ready?
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#recommendations-for-an-easier-psd-2-journey-for-saas-businesses">
                                            Recommendations for an Easier PSD2 Journey for SaaS Businesses
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#diving-into-strong-customer-authentication-sca">
                                    Diving into Strong Customer Authentication (SCA)
                                </a>
                                <ul class="cg-affix__sublist">
                                    <li class="cg-affix__subitem">
                                        <a href="#when-and-where-sca-has-to-be-applied">
                                            When and Where SCA Has to Be Applied
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#zooming-into-the-sca-authentication-workflow">
                                            Zooming into the SCA Authentication Workflow
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#gearing-up-for-psd-2-and-sca-with-chargebee">
                                    Gearing up for PSD2 & SCA with Chargebee
                                </a>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#jargon-buster-aka-glossary">
                                    Jargon-buster AKA Glossary
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- ===================================================================
                End: Affix Left
                ==================================================================== -->
                <!-- ===================================================================
                Start: Affix Right
                ==================================================================== -->
                <div class="col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-0">
                    <div class="cg-affix__body">
                        <!-- <figure class="cg-article__figure" style="margin-top: 0; margin-bottom: 0;">
                            <img src="/static/website/version/images/resources/guides/psd-2-sca-for-saas/3.png" alt="" class="img-responsive" />
                        </figure> -->
                        <!-- ===================================================================
                        Start: Content 1
                        ==================================================================== -->
                        <div class="cg-affix__content" id="the-need-for-a-second-edition-of-psd">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                        The Need for a Second Edition of PSD
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 1
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 2
                        ==================================================================== -->
                        <div class="cg-affix__content" id="what-is-psd-2-and-when-does-it-go-live" style="padding-top: 0;">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__heading"> 
                                        What Is PSD2 and When Does It Go Live?
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        Before the <a href="https://en.wikipedia.org/wiki/Payment_Services_Directive#Revised_Directive_on_Payment_Services_(PSD2)" class="cg-link" target="_blank">Payment Services Directive</a> was rolled out, payments across the <span class="cg-tooltip" data-toggle="tooltip" title="The European Union which consists of 28 member states.">European Union (EU)</span> were treated as cross-border payments — multiple regulations and varying fees did not really foster the spirit of healthy competition and participation in the fintech industry across the EU. 
                                    </p>
                                    <p class="cg-article__desc">
                                        PSD1 pushed the pedal on creating a <span class="cg-tooltip" data-toggle="tooltip" title="Single Euro Payments Area regulation was set down by the European banking authority, which consists of standards and technical rules for payment services and infrastructure in Europe.">Single Euro Payments Area (SEPA)</span> and establishing non-bank third parties, like Payment Service Providers (PSPs) a.k.a payment gateways in the EU, that could carry out financial transactions. This helped consumers and merchants get paid faster and quicker. 
                                    </p>
                                    <p class="cg-article__desc">
                                        Despite this, banks continued to have monopoly over customer accounts. (The PSPs) wanted access to the banks’ customer data, which called for deeper security measures and the ability for customers to control who can access their data. 
                                    </p>
                                    <p class="cg-article__desc">
                                        With <a href="https://ec.europa.eu/info/law/payment-services-psd-2-directive-eu-2015-2366_en" target="_blank" class="cg-link">PSD2</a>, the aim is to accelerate further innovation in the fintech space by opening up access to customer accounts for 3rd parties - think P2P payments, a single place for customers to manage all their accounts. This will require banks to open up their APIs to third parties. Which in turn necessitates stronger security measures.
                                    </p>
                                    <p class="cg-article__desc">
                                        To serve this purpose, the revised edition of the Payment Services Directive (PSD) will come into effect on September 14th, 2019.
                                    </p>
                                    <figure class="cg-article__figure" style="margin-top: 0; margin-bottom: 16px;">
                                        <img src="/static/website/version/images/resources/guides/psd-2-sca-for-saas/1.gif" alt="" class="img-responsive" />
                                    </figure>
                                    <a href="https://medium.com/@JanisGraubins/psd2-explained-in-3-simple-gifs-59e07d896746" class="cg-link" target="_blank"><i>Image Source</i></a>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 2
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 3
                        ==================================================================== -->
                        <div class="cg-affix__content" id="what-psd-2-means-for-saas-businesses">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title"> 
                                        What PSD2 Means for SaaS Businesses
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        A lot of SaaS businesses may feel PSD2 is scary. But here is something - you needn’t have the entire world of PSD2 at your fingertips. Payment gateways will be primarily accountable for meeting the PSD2 requirements. 
                                    </p>
                                    <p class="cg-article__desc">
                                        But as part of PSD2, there is one new factor that will come into play - Strong Customer Authentication (SCA). And this is something that should pique your interest.
                                    </p>
                                    <p class="cg-article__desc">
                                        SCA, also known as two-factor authentication, will add an additional layer of security needed at the time of a transaction.
                                    </p>
                                    <p class="cg-article__desc">
                                        Which brings us to the second piece that you will need to care about.  <br class="visible-md visible-lg"><span class="cg-tooltip" data-toggle="tooltip" title="Three-Domain Secure is used as a method of authentication for online transactions and verify the identity of the person trying to make the online payment.">3D Secure 2</span> —an authentication standard supported by the vast majority of European cards. The problem with 3DS1 was that customers were redirected to another window for verification, which created friction in the checkout process and in turn, led to an increase in drop-offs at the checkout page. 
                                    </p>
                                    <p class="cg-article__desc">
                                        Along with SCA, a newer version of the authentication protocol is being rolled out - 3DS2. And, that’s a silver lining for subscription businesses — it’s going to make online transactions safer, with the promise of a mobile-friendly experience, benefiting merchants and customers alike. 
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong><i>Then what’s all the panic about?</i></strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        SaaS businesses need to be aware of how they will go about having provisions in place and implementing them to be PSD2 ready. If your billing system isn’t PSD2 ready by December 31st, 2020, then it will be raining payment failures impacting your recurring revenue.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 3
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 4
                        ==================================================================== -->
                        <div class="cg-affix__content" id="how-does-psd-2-impact-saas">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__heading"> 
                                        How Does PSD2 Impact SaaS?
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        Any business that conducts online transactions in the EU may be impacted by PSD2. PSD2 will mostly be applicable when both the business and the customer are based in the EU. Meaning, businesses that have a merchant account in the EU, with customers who make online payments with cards issued by EU banks. 
                                    </p>
                                    <p class="cg-article__desc">
                                        There’s still a possibility of a small percentage of international transactions that take place in the EU, to require SCA. If you’re a SaaS business in Europe and have customers in the US, or your business is in the US and you cater to European customers, then you need to be armed enough to meet the SCA requirements. 
                                    </p>
                                    <p class="cg-article__desc">
                                        Subscription businesses will have to bring in changes at various touch points (refer <a href="#impacted-areas-for-saas-recurring-billing-businesses" class="cg-link">impact areas section</a>) so that they don’t lose out on their revenue or customers.  
                                    </p>
                                    <h4 class="cg-article__desc">
                                        <strong>Merchant Initiated Transactions (MIT) </strong>
                                    </h4>
                                    <p class="cg-article__desc">
                                        A merchant initiated transaction, is a transaction made with a customer’s saved card when the cardholder isn't present. Even though a merchant-initiated transaction is exempted from PSD2, the first transaction will require 3DS2 verification and we’d recommend you have it enabled for all transactions so that payments don’t fail. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 4
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 5
                        ==================================================================== -->
                        <div class="cg-affix__content" id="strong-customer-authentication-sca-exemptions">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__heading"> 
                                        SCA Exemptions 
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        There are some exemptions where PSD2 will not be needed. And recurring payments have made it to the list! Apart from recurring payments, here are some more exemptions that you can use whenever possible: 
                                    </p>
                                    <ul class="cg-article__list">
                                        <li class="cg-article__item">
                                            <strong>Low value and low risk transaction:</strong> If a transaction is under 30 EUR, or marked as “low risk”, SCA doesn’t have to be applied. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>Whitelisted merchants:</strong> Customers who shop regularly from specific merchants can mark them as “trusted beneficiaries”, so that 3DS will not have to be applied for those transactions. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>Mail and telephone orders (MOTO):</strong> Purchases made via mail or telephone are not considered to be electronic payments and SCA doesn’t apply to them. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>Corporate cards:</strong> Payments made via corporate processes, between two B2B corporations, using payment methods specific to these types of payments, such as virtual or corporate cards, are also exempted from SCA (these payment methods would not be available to end customers). 
                                        </li>
                                    </ul>
                                    <p class="cg-article__desc">
                                        But hold up. There’s a plot twist: some of the customers' banks may not take this exemption into consideration, in which case, 3DS2 authentication will be required. 
                                    </p>
                                    <p class="cg-article__desc">
                                        With all the exemptions under PSD2 that you can apply for your online transactions, in the end, it’s up to the customer’s bank to accept it. If verification is required, a pop-up window will appear on the same page, asking the customer to verify their identity. For MIT transactions, since the customer isn’t present for the transaction, 3DS verification will fail and the payment won’t go through. 
                                    </p>
                                    <p class="cg-article__desc">
                                        Though subscription businesses can apply this exemption for processing their recurring payments, it’s a safer bet to have a provision in place to enable SCA for transactions that might require it in the future. An even safer bet, use a recurring billing system which is better prepared to maneuver through these changes, than you having to constantly create new patchworks of code that get messier over time. 
                                    </p>

                                    <div class="cg-article__panel">
                                        <div class="cg-panel cg-panel--alt">
                                            <div class="cg-panel__header">
                                                Tip
                                            </div>
                                            <div class="cg-panel__content">
                                                Though these type of transactions are exempted under PSD2, the customer’s bank has the final say on whether or not they will accept these transactions. It’s better to be prepared for SCA in the event the exemption is rejected. 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 5
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 6
                        ==================================================================== -->
                        <div class="cg-affix__content" id="impacted-areas-for-saas-recurring-billing-businesses">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__heading"> 
                                        Impacted Areas for SaaS Recurring Billing Businesses
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                    <h4 class="cg-article__desc" style="font-size: 24px">
                                        <strong>Subscriptions</strong>
                                    </h4>
                                    <p class="cg-article__desc">
                                        <strong>Existing Subscriptions </strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Customers whose cards are stored before December 31st, 2020, will be eligible for SCA exemptions and the approval rates for their transactions will be better if at least one transaction is carried out before December 31st, 2020.
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>New Subscriptions </strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        For new subscriptions created post December 31st, 2020, customers can be asked for additional verification on your checkout page. If your checkout is not capable of handling the SCA flow, then the payment will fail.
                                    </p>
                                    <p class="cg-article__desc">
                                        When new customers are signing up for a subscription plan and paying with their cards, they will need to complete a 3DS verification at the checkout page. Once the first payment goes through 3DS, future recurring payments (if the plan amount is fixed) can be exempted from SCA. 
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>Subscription Changes</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        For existing customers, if they decide to upgrade to a higher plan or buy any add-ons, they may be asked for a 3DS verification. 
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>Subscription Renewals</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        In the case of subscription renewals, the payments take place without the customers being online. Even though subscription renewals are exempted, there is a chance that some recurring payments may still require SCA to complete a purchase. 
                                    </p>
                                    <p class="cg-article__desc">
                                        Another common scenario for an MIT is when your customer asks to resume or reactivate their subscription. For a subscription being resumed or reactivated after December 31st, 2020, customers can be asked to complete 3DS for their subscriptions to be activated. 
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>Future and Trial Subscriptions</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        It will be a similar situation for future and trial subscriptions. If you have existing customers with a future or a trial subscription that’s set to be activated any time after September 14th, gateways should ideally apply exemptions for these subscriptions. Since the approval rate for cards stored in the vault with at least one successful transaction is <a class="cg-link" target="_blank" href="https://developers.braintreepayments.com/guides/3d-secure/migration/javascript/v3">expected to be higher</a>, you can perform a $1.00 authorization to make the approval rate better. 
                                    </p>
                                    <p class="cg-article__desc">
                                        Another good practice you can follow after September 14th, is to have your new customers complete 3DS for at least one transaction, so their other transactions have a better approval rate. This goes for billing future renewals or changing next renewals as well. 
                                    </p>
                                    <p class="cg-article__desc">
                                        Complying with PSD2 can get challenging even for subscription businesses that bill their customers based on usage, as the amount would vary over time.
                                    </p>

                                    <div class="cg-article__panel">
                                        <div class="cg-panel cg-panel--alt">
                                            <div class="cg-panel__header">
                                                Tip
                                            </div>
                                            <div class="cg-panel__content">
                                                A good way to tackle these use cases is to get all your customers to provide 3DS verification for their first or upcoming transaction so it does not turn into a problem later on. 
                                            </div>
                                        </div>
                                    </div>
                                    <p class="cg-article__desc" style="font-size: 24px">
                                        <strong>Checkout and Invoicing</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Merchants with subscription businesses will have to apply 3DS to their checkout flows once the PSD2 regulation goes live. Your checkout needs to be able to handle all the SCA flows so that 3DS 1 and 3DS2 can be applied for transactions that require it. This means your checkout page will need additional authentication built in. 
                                    </p>
                                    <p class="cg-article__desc">
                                        Along with this, you will need to check if your checkout page has all the required fields to capture the necessary information. 
                                    </p>

                                    <div class="cg-article__panel">
                                        <div class="cg-panel cg-panel--alt">
                                            <div class="cg-panel__header">
                                                Tip
                                            </div>
                                            <div class="cg-panel__content">
                                                When a payment fails at checkout, we recommend that you generate an unpaid invoice so you can keep track of transactions that fail and accordingly decide the necessary actions for those subscriptions. 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 6
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 7
                        ==================================================================== -->
                        <div class="cg-affix__content" id="how-can-your-recurring-billing-system-be-sca-ready">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__heading"> 
                                        How Can Your Recurring Billing System Be PSD2 Ready?
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        <strong><i>If you have an internal recurring billing system in place</i></strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Handling PSD2 compliance with an in-house billing solution can get from complex to very frustrating very soon. If you have built your own recurring billing solution on top of a payment gateway, you will need to dedicate a lot of developer hands plus time, to enable SCA authentication flows. God forbid, if you decide to migrate to a different gateway, then you'll have to go through the entire process of connecting the gateway’s APIs once again, to comply with SCA standards. 
                                    </p>
                                    <p class="cg-article__desc">
                                        There is still a lot of uncertainty concerning how payment gateways are handling their PSD2 compliance. Some gateways are rolling out changes for SCA in batches, whereas some aren’t too clear about how and when they’ll be PSD2 compliant. In other words, waiting to get updates from your payment gateway(s) and then making changes to your internal billing system might not be the most efficient approach. 
                                    </p>
                                    <p class="cg-article__desc">
                                        For the benefit of many others like you, we have identified (and broken our heads over) some of the impact areas you will have to take care of, to become PSD2 compliant, if/when you’re building your billing solution on top of a payment gateway. 
                                    </p>
                                    <p class="cg-article__desc">
                                        The details as to how payment gateways are tackling PSD2 may vary. So while you’re thinking of a plan to meet SCA requirements, here are some things to keep in mind:
                                    </p>
                                    <ul class="cg-article__list">
                                        <li class="cg-article__item">
                                            Integrate 3DS into your checkout and payment flow.
                                        </li>
                                        <li class="cg-article__item">
                                            Handle payments that've failed because SCA requirements were not met.
                                        </li>
                                        <li class="cg-article__item">
                                            Set up dedicated email notifications to inform and collect SCA from customers.
                                        </li>
                                        <li class="cg-article__item">
                                            Align your recurring billing logic to be SCA ready.
                                        </li>
                                    </ul>
                                    <p class="cg-article__desc">
                                        <strong><i>If you have a recurring billing provider</i></strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Ideally, your subscription management solution should have done all the groundwork for you to be PSD2 compliant. But it will still require certain actions from your end. It will also depend on the checkout solution and the payment gateway you are working with. Reach out to your provider to understand how they are tackling this.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 7
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 8
                        ==================================================================== -->
                        <div class="cg-affix__content" id="recommendations-for-an-easier-psd-2-journey-for-saas-businesses">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__heading"> 
                                        Recommendations for an Easier PSD2 Journey for SaaS Businesses
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                    <ul class="cg-article__list">
                                        <li class="cg-article__item">
                                            If you’re a B2C subscription business, give your customers a heads-up about PSD2 and what they need to do to verify their transaction via 3DS2.
                                        </li>
                                        <li class="cg-article__item">
                                            Apply for exemptions whenever possible. It can help you decrease friction and increase conversion rates.
                                        </li>
                                        <li class="cg-article__item">
                                            Set up reminder emails for customers who haven’t completed the authentication. Decouple them from payment failure emails for smoother workflows.
                                        </li>
                                        <li class="cg-article__item">
                                            If you are a B2B business, you can reach out to your customers asking them to check with their banks if the ‘whitelisting merchants’ feature is supported by the bank, so that they can skip the authentication and have smoother transactions. Most of the banks in the EU will have this feature ready by the end of this year. 
                                        </li>
                                        <li class="cg-article__item">
                                            If you are processing usage-based billing or variable amount recurring billing (which come under merchant-initiated transactions), and 3DS verification was done for the first transaction, then those subscriptions can be applied for exemption. However the customer’s bank will still have the final say if that subscription still requires SCA. This might be an added friction. You can choose to skip this by accepting payments via direct debit which falls under Customer Initiated Transactions.
                                        </li>
                                        <li class="cg-article__item">
                                            You will need to think of a dunning flow for payments failing because of 3DS failure. For such situations, you can raise an unpaid invoice (makes it so much easier to track) for the customer, and send the unpaid invoice via an email with a link to complete 3DS for the failed transaction.
                                        </li>
                                    </ul>
                                    <div class="cg-article__panel">
                                        <div class="cg-panel cg-panel--alt">
                                            <div class="cg-panel__header">
                                                Tip
                                            </div>
                                            <div class="cg-panel__content">
                                                If 3DS verification is needed and your customer isn’t present to authenticate a transaction, then the payment fails. In such cases, it’s essential you communicate this with your customer by sending them 3DS email reminders asking them to complete the verification needed. 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 8
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 9
                        ==================================================================== -->
                        <div class="cg-affix__content" id="diving-into-strong-customer-authentication-sca">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title"> 
                                        Diving into Strong Customer Authentication (SCA)
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        SCA, also known as two-factor authentication, is a part of the PSD2 law that will bring an additional layer of security needed at the time of a transaction. Initially, customers used a time-bound one-time password to verify a transaction via 3D Secure (3DS). 
                                    </p>
                                    <p class="cg-article__desc">
                                        Even though there’s a lot of skepticism and confusion around PSD2, it comes with the promise of making online transactions more secure and reducing fraud rates in the EU. SCA requires more than just entering a password or a code. Verifying a transaction needs two of the following authentication methods: 
                                    </p>
                                    <figure class="cg-article__figure" style="margin-top: 0; margin-bottom: 0;">
                                        <img src="/static/website/version/images/resources/guides/psd-2-sca-for-saas/2.png" alt="" class="img-responsive" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 9
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 10
                        ==================================================================== -->
                        <div class="cg-affix__content" id="when-and-where-sca-has-to-be-applied">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__heading"> 
                                        When and Where SCA Has to Be Applied
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        SCA applies to online card transactions since alternate payment methods like wallets and Direct Debit have their own authentication processes. 3D Secure 2.0 brings in a new way to authenticate transactions that are compliant with SCA. 
                                    </p>
                                    <p class="cg-article__desc">
                                        With 3DS2 coming into the picture, it’s set to improve the payment experience by:
                                    </p>
                                    <ul class="cg-article__list">
                                        <li class="cg-article__item">
                                            offering a mobile-friendly design.
                                        </li>
                                        <li class="cg-article__item">
                                            making the authentication process more flexible and secure.
                                        </li>
                                        <li class="cg-article__item">
                                            using biometric authentication for online transactions.
                                        </li>
                                        <li class="cg-article__item">
                                            bringing transparency by using a wider range of data.
                                        </li>
                                        <li class="cg-article__item">
                                            providing customer data assets to businesses dealing with payments and technology.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 10
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 11
                        ==================================================================== -->
                        <div class="cg-affix__content" id="zooming-into-the-sca-authentication-workflow">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__heading"> 
                                        Zooming into the SCA Authentication Workflow
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                    <figure class="cg-article__figure" style="margin-top: 0; margin-bottom: 60px;">
                                        <img src="/static/website/version/images/resources/guides/psd-2-sca-for-saas/3.png" alt="" class="img-responsive" />
                                    </figure>
                                    <p class="cg-article__desc">
                                        For an online transaction to be verified, the way the merchant’s and the customer’s banks communicate with the <span class="cg-tooltip" data-toggle="tooltip" title="Access Control Server is the customer’s bank that has issued the card they use to make an online payment.">Access Control Server (ACS)</span> strong customer authentication can go through one of these flows:
                                    </p>
                                    <ul class="cg-article__list">
                                        <li class="cg-article__item">
                                            <strong>Frictionless Flow</strong><br>
                                            When the card-issuing bank a.k.a the customer’s bank has enough information (collected in the background) to authenticate an online transaction, the payment goes through easily without the need for further verification. For a frictionless SCA flow to take place, the customer’s IP address or device ID can suffice to verify a transaction. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>Challenge Flow</strong><br>
                                            When the customer’s bank wants more proof to verify their identity, the bank can request additional information from the customer like a password, on their payments page. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>Redirect Flow</strong><br>
                                            There will be some banks in the EU that may not have the 3DS2 flow implemented by the September deadline. In such cases, when an online transaction goes through the authentication process, the customers will be redirected to a new window to verify their identity via 3DS 1. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>Fallback Flow</strong><br>
                                            A fallback flow comes into play for recurring payments, like when a subscription renewal takes place in the customer's absence. When a transaction requires 3DS verification and fails, the payment will not go through. The customer needs to know about the payment failure and they need to complete the 3DS verification for the payment to go through. 
                                        </li>
                                    </ul>
                                    <div class="cg-article__panel">
                                        <div class="cg-panel cg-panel--alt">
                                            <div class="cg-panel__header">
                                                Tip
                                            </div>
                                            <div class="cg-panel__content">
                                                Support both the versions of 3DS so you don’t lose out on customers whose banks support only 3DS 1.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 11
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 12
                        ==================================================================== -->
                        <div class="cg-affix__content" id="gearing-up-for-psd-2-and-sca-with-chargebee">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title"> 
                                        Gearing up for PSD2 with Chargebee
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        We are working with payment gateways to upgrade our gateway integrations and APIs to support 3DS2. When you integrate with a subscription billing solution like Chargebee on top of your payment gateway, your PSD2 compliance part will be taken care of, so you don’t have to lose out on your time and developer resources for this. 
                                    </p>
                                    <p class="cg-article__desc">
                                        For merchants who have or are going to implement a custom checkout, you will need to keep changing your APIs based on your gateway rolling out APIs. Add to that all the SCA flows (refer <a href="/resources/guides/psd-2-sca-for-saas/#zooming-into-the-sca-authentication-workflow" class="cg-link" target="_blank">SCA authentication workflow</a> section) you’ll have to add into your checkout flow. If you decide to change payment gateways because your payment gateway decides it won’t support 3DS, then you’ll have to restart the entire process of integrating APIs and updating them constantly. Using your the gateway js. is a better option. An even better option — use Chargebee js. and all you need to do is enable 3DS, and we will take care of getting your payment flow ready for PSD2 (even if you decide to switch gateways). 
                                    </p>
                                    <p class="cg-article__desc">
                                        <a class="cg-link cg-link--icon" target="_blank" href="/blog/strong-customer-authentication-recurring-payments/">Read how Chargebee can help you get SCA ready</a>
                                    </p>
                                    <div class="cg-article__panel">
                                        <div class="cg-panel cg-panel--alt">
                                            <div class="cg-panel__header">
                                                Tip
                                            </div>
                                            <div class="cg-panel__content">
                                                We’d highly recommend testing the 3DS2 flow for your website before it goes live, which will give you time to find and fix potential problems you might face once the changes go live. 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 12
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 13
                        ==================================================================== -->
                        <div class="cg-affix__content" id="jargon-buster-aka-glossary">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title"> 
                                        Jargon-buster AKA Glossary
                                    </h2>
                                    <p class="cg-article__desc">
                                       <small>(to get acquainted with the PSD2 ecosystem)</small>
                                    </p>
                                </div>
                                <div class="cg-article__content">
                                    <ul class="cg-article__list">
                                        <li class="cg-article__item">
                                            <strong>PSD</strong> — Payment Services Directive was introduced by the European Union to unify and create a single market for European payments. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>SCA</strong> — Strong Customer Authentication is a requirement of the PSD2 law to make online payments more secure and reduce payment fraud. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>3DS</strong> — Three-Domain Secure is used as a method of authentication for online transactions and verify the identity of the person trying to make the online payment. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>EU</strong> — The European Union which consists of 28 member states. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>SEPA</strong> — Single Euro Payments Area regulation was set down by the European banking authority, which consists of standards and technical rules for payment services and infrastructure in Europe. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>MIT</strong> — Merchant Initiated Transaction is where the merchant tries to collect the payment on the customer’s behalf in their absence. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>AISP</strong> — Account Information Service Providers provide customers with information on their bank account(s).  
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>PISP</strong> — Payment Initiation Service Providers can access customers’ account data and initiate online payments on behalf of the customers. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>TPP</strong> — Third-party Providers are online service providers which can be AISPs or PISPs introduced under the PSD2 law. 
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>ACS</strong> — Access Control Server is the customer’s bank that has issued the card they use to make an online payment.
                                        </li>
                                    </ul>
                                </div>


                                <div class="cg-panel" style="padding-top: 32px; margin-top: 54px;">
                                    <strong>Selling subscriptions in Europe?</strong><br>  Watch our <a href="https://webinars.chargebee.com/essentials-subscription-business-europe" class="cg-link" target="_blank">webinar</a> to learn how to scale across Europe easily.
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 13
                        ==================================================================== -->
                    </div>
                </div>
                <!-- ===================================================================
                Start: Affix Right
                ==================================================================== -->
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Affix
        ==================================================================== -->
        <section class="cg-footer hidden-xs" style="margin-bottom: 50px; margin-top: 120px;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 text-center">
                        <div class="cg-article__header">
                            <h3 class="cg-article__title">
                                Unlock faster growth and handle subscription complexities with Chargebee.
                            </h3>
                        </div>
                        <div class="cg-article__content" style="margin-top: 15px;">
                            <a href="/schedule-a-demo/" class="cg-btn">
                                Schedule a Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <app-footer />
        <!-- ===================================================================
        End: Website Footer
        ==================================================================== -->
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

            // For Affix
            // Scrollspy
            $('body').scrollspy({ target: '#ca-nav-affix'});

            // Affix onclick to show the section
            $("#ca-nav-affix .cg-affix__item a[href^='#']").on('click', function(e) {
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

            //Affix scroll
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
                        top: prev.offset().top + prev.outerHeight(true) + 110,
                        bottom: function () {
                            return (this.bottom = $('#cb-affix-footer').outerHeight(true) + $('.cg-footer').outerHeight(true) + 120)
                        }
                    }
                  });
                };

                resizeFn();
                    $(window).resize(resizeFn);
            });

            $('.cg-hero__actiona').on('click', function(){
                $('html, body').animate({
                    scrollTop: $(".cg-article").offset().top - 150
                }, 500);
            })

            $('[data-toggle="tooltip"]').tooltip({
                'placement': 'bottom'
            });

            $('[data-colpse-action]').click(function() {
                $('[data-colpse]').addClass('cg-collapse__content-active');
                $('[data-colpse-action]').hide();
            });
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

    .affix { top: 70px; }
    .affix-bottom { position: absolute; }
    .cg-affix__item{
        padding-left: 24px;
        margin-bottom: 12px;
        white-space: normal;
    }
    .cg-affix__item:before{
        position: absolute;
        top: 10px;
        left: 0;
    }
    .cg-affix__item > a{
        line-height: 22px;
        padding-top: 0 !important;
    }
    .cg-hero__actions{
        justify-content: center;
    }
    .cg-affix__subitem {
        margin-bottom: 12px;
    }
    .cg-affix-label{
        position: absolute; 
        top: -20px; 
        right: 100px;
    }
    .affix .cg-affix-label{
        right: 17px;
    }
    @media (min-width: 992px){
        .cg-hero__container {
            min-height: 480px;
            padding-bottom: 60px;
        }
        .cg-hero__actions {
            display: none;
        }
        .cg-hero__title {
            margin-top: 0;
        }
        .cg-hero {
            background-position: center;
        }
    }
</style>
<!-- ===========================================================================
End: Style
============================================================================== -->
