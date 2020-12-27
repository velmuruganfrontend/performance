<template>
    <!-- =====================================================================================
    Main Header 
    ====================================================================================== -->
    <div>
        <!-- =====================================================================================
        Header Part start 
        ====================================================================================== -->
        <header class="l-header hidden-xs hidden-sm" v-bind:class="[ isInvert ? 'l-header--invert' : '',isBasicHeader ? 'l-header--basic': '' ]" id="ch-js-header">
            <div class="l-header__overlay"></div>
            <div class="l-header__bg">
                <div class="l-header--fluid">
                    <div class="l-header__container">
                        <div class="l-header__row" v-bind:class="isBasicHeader ? 'l-header__row--basic': ''">
                            <!-- ========================================= 
                            Header menu left start
                            ========================================== -->
                            <div class="l-header__col l-header__col--left">
                                <nav class="ch-nav">
                                    <ul class="ch-nav__list">
                                        <li class="ch-nav__item">
                                            <a v-if="isCommunity" href="/" class="ch-nav__logo">
                                                <svg width="125" height="36">
                                                    <use xlink:href="#chargebee-logo-community"></use>
                                                </svg>
                                            </a>
                                            <a v-else href="/" class="ch-nav__logo" v-bind:class="[logoClickDisabled ? 'ch-nav__logo--disabled' : '', isInvert? 'ch-nav__logo--invert': '']">
                                                <svg width="110" height="34">
                                                    <use v-bind:xlink:href="[ isInvert ? '#chargebee-logo-white' : '#chargebee-logo-black' ]"></use>
                                                </svg>
                                            </a>
                                            <a href="/" class="ch-nav__logo ch-nav__logo--invert-hover" v-bind:class="logoClickDisabled ? 'ch-nav__logo--disabled' : ''">
                                                <svg width="110" height="34">
                                                    <use xlink:href="#chargebee-logo-black"></use>
                                                </svg>
                                            </a>

                                            <a href="/" class="ch-nav__logo ch-nav__logo--icon" v-bind:class="logoClickDisabled ? 'ch-nav__logo--disabled' : ''">
                                                <svg width="30" height="34">
                                                    <use xlink:href="#chargebee-icon-brand"></use>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <!-- ========================================= 
                            Header menu left end
                            ========================================== -->
                            <!-- ========================================= 
                            Header menu Middle Start
                            ========================================== -->
                            <div class="l-header__col l-header__col--middle" v-if="!isBasicHeader">
                                <nav class="ch-nav" v-bind:class="removeMiddleMenu ? 'ch-nav--hide' : ''">
                                    <ul class="ch-nav__list ch-nav__list--menu">
                                        <!-- ====================================================================== 
                                        Product menu section start
                                        ======================================================================= -->
                                        <li class="ch-nav__item" data-ch-dd="true" v-if="!removeDropdownMenu" id="ch-js-product">
                                            <div class="ch-nav__dropdown">
                                                Product
                                            </div>

                                            <div class="ch-dropdown headAnimate">
                                                <div class="ch-dropdown__container">
                                                    <div class="ch-dropdown__list">
                                                        <!-- ========================================= 
                                                        Subscription Management start
                                                        ========================================== -->
                                                        <div class="ch-dropdown__item">
                                                            <div class="ch-list">
                                                                <div class="ch-list__header">
                                                                    <div class="ch-list__heading">
                                                                        Subscription Management
                                                                    </div>
                                                                </div>
                                                                <div class="ch-list__content">
                                                                    <div class="ch-list__link">
                                                                        <a href="/subscription-management/?ref=navbar">Overview</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/subscription-management/create-manage-plans/?ref=navbar">Create & Manage Plans</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/saas-pricing-models/?ref=navbar">Pricing Management</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/subscription-management/saas-trial-management/?ref=navbar">Handle Trial Subscriptions</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/subscription-management/customer-self-service-portal/?ref=navbar">Customer Self-service Portal</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/subscription-management/mobile-solutions/?ref=navbar">Mobile Solutions</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- ========================================= 
                                                        Billing & Invoicing start
                                                        ========================================== -->
                                                        <div class="ch-dropdown__item">
                                                            <div class="ch-list">
                                                                <div class="ch-list__header">
                                                                    <div class="ch-list__heading">
                                                                        Billing Automation
                                                                    </div>
                                                                </div>
                                                                <div class="ch-list__content">
                                                                    <div class="ch-list__link">
                                                                        <a href="/recurring-billing-invoicing/?ref=navbar">Overview</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/recurring-billing-invoicing/metered-usage-billing/?ref=navbar">Usage Based Billing</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/recurring-billing-invoicing/customize-recurring-invoices/?ref=navbar">Invoicing Automation</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/recurring-billing-invoicing/sales-quotes/?ref=navbar">Quotes</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/subscription-management/handle-prorations/?ref=navbar">Proration</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- ========================================= 
                                                        Payments & Accounting start
                                                        ========================================== -->
                                                        <div class="ch-dropdown__item">
                                                            <div class="ch-list">
                                                                <div class="ch-list__header">
                                                                    <div class="ch-list__heading">
                                                                        Recurring Payments
                                                                    </div>
                                                                </div>
                                                                <div class="ch-list__content">
                                                                    <div class="ch-list__link">
                                                                        <a href="/recurring-payments/?ref=navbar">Overview</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/recurring-payments/payment-methods/?ref=navbar">Multiple Payment Methods</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/recurring-payments/multiple-payment-gateways/?ref=navbar">Multiple Payment Gateways</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/recurring-payments/dunning-management/?ref=navbar">Smart Dunning</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/recurring-payments/chargeback-management/?ref=navbar">Chargeback Management</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- ========================================= 
                                                        Reporting & Analytics start
                                                        ========================================== -->
                                                        <div class="ch-dropdown__item">
                                                            <div class="ch-list">
                                                                <div class="ch-list__header">
                                                                    <div class="ch-list__heading">
                                                                        Accounting & Taxes
                                                                    </div>
                                                                </div>
                                                                <div class="ch-list__content">
                                                                    <div class="ch-list__link">
                                                                        <a href="/saas-accounting-and-taxes/?ref=navbar">Overview</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/saas-accounting-and-taxes/revenue-recognition-deferred-revenue/?ref=navbar">Revenue Recognition</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/recurring-billing-invoicing/saas-sales-tax/?ref=navbar">Manage Sales Tax</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/saas-accounting-and-taxes/xero-accounting/payment-reconciliation/?ref=navbar">One-Click Reconciliation</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- ========================================= 
                                                        Chargebee updates end
                                                        ========================================== -->
                                                        <!-- ========================================= 
                                                        Reporting & Analytics start
                                                        ========================================== -->
                                                        <div class="ch-dropdown__item">
                                                            <div class="ch-list">
                                                                <div class="ch-list__header">
                                                                    <div class="ch-list__heading">
                                                                        Reporting & Analytics
                                                                    </div>
                                                                </div>
                                                                <div class="ch-list__content">
                                                                    <div class="ch-list__link">
                                                                        <a href="/saas-reporting/?ref=navbar">Overview</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/saas-accounting-and-taxes/xero-accounting/payment-reconciliation/?ref=navbar">Deferred Revenue Reporting</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- ========================================= 
                                                        Chargebee updates end
                                                        ========================================== -->
                                                    </div>

                                                    <div class="ch-dropdown__list ch-dropdown__list--alt">
                                                        <div class="ch-dropdown__temp">
                                                            Supports: <div style="background: #ececec; color: #00000a; padding: 3px 5px; font-size: 10px; line-height: 12px; text-align: left; border-radius: 4px; display: inline-block;">
                                                                Preferred Partners
                                                            </div>
                                                            <a href="/payment-gateways/stripe/?ref=navbar">Stripe</a>, 
                                                            <a href="/payment-gateways/paypal-recurring-payments/?ref=navbar">Paypal</a>,
                                                            <a href="/payment-gateways/braintree/?ref=navbar">Braintree</a>, 
                                                            <a href="/partners/checkout-com/">Checkout.com</a>,
                                                            <a href="/payment-gateways/gocardless/">GoCardless</a>, and
                                                            <a href="/payment-gateways/?ref=navbar">27 other payment gateways</a>.
                                                        </div>
                                                        <div class="ch-dropdown__temp">
                                                            Seamless integration with
                                                            <a href="/integrations/xero-recurring-billing/?ref=navbar">Xero</a>, 
                                                            <a href="/integrations/quickbooks/?ref=navbar">Quickbooks</a>, 
                                                            <a href="/integrations/zendesk-helpdesk/?ref=navbar">Zendesk</a>, 
                                                            <a href="/integrations/salesforce/?ref=navbar">Salesforce</a> +
                                                            <a href="/integrations/?ref=navbar">18 more</a>.
                                                        </div>
                                                        <div class="ch-dropdown__temp">
                                                            <a href="/features/?ref=navbar" class="ch-list__action ch-nav__arrow ch-nav__arrow--link">
                                                                <span>Explore all features </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <!-- ====================================================================== 
                                        Product menu section end
                                        ======================================================================= -->
                                        <li class="ch-nav__item">
                                            <a href="/pricing/?ref=navbar">Pricing</a>
                                        </li>
                                        <!-- ====================================================================== 
                                        Solutions menu section start
                                        ======================================================================= -->
                                        <li class="ch-nav__item" data-ch-dd="true" v-if="!removeDropdownMenu">
                                            <div class="ch-nav__dropdown">
                                                Solutions
                                            </div>

                                            <div class="ch-dropdown headAnimate">
                                                <div class="ch-dropdown__container">
                                                    <div class="ch-dropdown__list flex-space--initial">
                                                        <!-- ========================================= 
                                                        Persona
                                                        ========================================== -->
                                                        <div class="ch-dropdown__item">
                                                            <div class="ch-list">
                                                                <div class="ch-list__header">
                                                                    <div class="ch-list__heading">
                                                                        By Role
                                                                    </div>
                                                                </div>
                                                                <div class="ch-list__content">
                                                                    <div class="ch-list__link">
                                                                        <a href="/for-subscription-finance-operations/?ref=navbar">Finance</a>
                                                                    </div>
                                                                   <div class="ch-list__link">
                                                                        <a href="/for-sales-operations/?ref=navbar">Sales</a>
                                                                    </div> 
                                                                    <div class="ch-list__link">
                                                                        <a href="/revenue-operations/?ref=navbar">RevOps</a> 
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- ========================================= 
                                                       Industry
                                                        ========================================== -->
                                                        <div class="ch-dropdown__item">
                                                            <div class="ch-list">
                                                                <div class="ch-list__header">
                                                                    <div class="ch-list__heading">
                                                                        By Industry 
                                                                    </div>
                                                                </div>
                                                                <div class="ch-list__content">
                                                                    <div class="ch-list__link">
                                                                        <a href="/saas-billing/?ref=navbar">B2B SaaS</a> 
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/subscription-ecommerce/?ref=navbar">Ecommerce</a> 
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/for-education/?ref=navbar">E-learning</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- ========================================= 
                                                        Strategy
                                                        ========================================== -->
                                                        <div class="ch-dropdown__item">
                                                            <div class="ch-list">
                                                                <div class="ch-list__header">
                                                                    <div class="ch-list__heading">
                                                                       By Strategy
                                                                    </div>
                                                                </div>
                                                                <div class="ch-list__content">
                                                                     <div class="ch-list__link">
                                                                        <a href="/solutions/rapidly-iterate-pricing/?ref=navbar">Roll Out New Pricing</a> 
                                                                    </div>
                                                                     <div class="ch-list__link">
                                                                        <a href="/solutions/global-expansion/?ref=navbar">Expand Globally</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/solutions/moving-upmarket/?ref=navbar">Move Upmarket</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/solutions/shift-to-subscription-model/?ref=navbar">Shift to Subscriptions</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- ========================================= 
                                                         Business size
                                                        ========================================== -->
                                                        <div class="ch-dropdown__item">
                                                            <div class="ch-list">
                                                                <div class="ch-list__header">
                                                                    <div class="ch-list__heading">
                                                                        By Business Size
                                                                    </div>
                                                                </div>
                                                                <div class="ch-list__content">
                                                                    <div class="ch-list__link">
                                                                        <a href="/launch/?ref=navbar">Startup</a> 
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/for-high-growth-subscription-businesses/?ref=navbar">ScaleUp</a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/enterprise-subscription-billing/?ref=navbar">Enterprise</a>
                                                                    </div> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- ========================================= 
                                                        Chargebee updates end
                                                        ========================================== -->
                                                        <!-- ========================================= 
                                                         Business model
                                                        ========================================== -->
                                                        <div class="ch-dropdown__item">
                                                            <div class="ch-list"> 
                                                                <div class="ch-list__header">
                                                                    <div class="ch-list__heading">
                                                                      By Business Model
                                                                    </div>
                                                                </div>
                                                                <div class="ch-list__content">
                                                                    <div class="ch-list__link">
                                                                        <a href="/for-self-service-subscription-business/?ref=navbar">Self-serve </a>
                                                                    </div>
                                                                    <div class="ch-list__link">
                                                                        <a href="/for-sales-driven-saas/?ref=navbar">Sales-driven</a> 
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                         <!-- ========================================= 
                                                         Business model
                                                        ========================================== -->
                                                        <div class="ch-dropdown__item">
                                                            <div class="ch-list"> 
                                                                <div class="ch-list__header">
                                                                    <div class="ch-list__heading">
                                                                      By Geography
                                                                    </div>
                                                                </div>
                                                                <div class="ch-list__content">
                                                                    <div class="ch-list__link">
                                                                        <a href="/for-europe/?ref=navbar">Europe</a> 
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- ========================================= 
                                                        Chargebee updates end
                                                        ========================================== -->
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <!-- ====================================================================== 
                                        Solutions menu section end
                                        ======================================================================= -->
                                        <li class="ch-nav__item">
                                            <a href="/customers/?ref=navbar">Customers</a>
                                        </li>
                                       
                                        <!-- ====================================================================== 
                                        Resources menu section start
                                        ======================================================================= -->
                                        <li class="ch-nav__item" data-ch-dd="true" v-if="!removeDropdownMenu">
                                            <div class="ch-nav__dropdown">
                                                Resources
                                            </div>

                                            <div class="ch-dropdown headAnimate padding-0">
                                                <div class="ch-dropdown__container">
                                                    <div class="ch-dropdown__list ch-dropdown__list--sm">
                                                        <!-- ========================================= 
                                                        Subscription Management start
                                                        ========================================== -->
                                                        <div class="ch-dropdown__item">
                                                            <div class="ch-panels">
                                                                <a href="/webinars/?ref=navbar" class="ch-panel">
                                                                    <div class="ch-panel__content">
                                                                        <div class="ch-panel__desc">
                                                                            Explore the best practices of all things SaaS and Subscription Billing.
                                                                        </div>
                                                                        <div class="ch-panel__actions">
                                                                            <span class="ch-panel__action ch-nav__arrow ch-nav__arrow--link">
                                                                                <span>Webinars </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a href="/resources/?ref=navbar" class="ch-panel">
                                                                    <div class="ch-panel__content">
                                                                        <div class="ch-panel__desc">
                                                                            Learn everything that falls under the umbrella of subscriptions.
                                                                        </div>
                                                                        <div class="ch-panel__actions">
                                                                            <span class="ch-panel__action ch-nav__arrow ch-nav__arrow--link">
                                                                                <span>Resources </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a href="/blog/?ref=navbar" class="ch-panel">
                                                                    <div class="ch-panel__content">
                                                                        <div class="ch-panel__desc">
                                                                            Read our ever-growing stories on SaaS, and get all the growth insights you need.
                                                                        </div>
                                                                        <div class="ch-panel__actions">
                                                                            <span class="ch-panel__action ch-nav__arrow ch-nav__arrow--link">
                                                                                <span>Chargebee Blog </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a href="/docs/?ref=navbar" class="ch-panel">
                                                                    <div class="ch-panel__content">
                                                                        <div class="ch-panel__desc">
                                                                            A quick overview of Chargebee to help you understand and implement it.
                                                                        </div>
                                                                        <div class="ch-panel__actions">
                                                                            <span class="ch-panel__action ch-nav__arrow ch-nav__arrow--link">
                                                                                <span>Chargebee Docs </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <a href="/resources/tools/compare-payment-gateway-providers/?ref=navbar" class="ch-panel">
                                                                <div class="ch-panel__content">
                                                                    <div class="ch-panel__desc">
                                                                        A comprehensive tool to help you compare and choose the best payment gateway for your online business, specific to your location.
                                                                    </div>
                                                                    <div class="ch-panel__actions">
                                                                        <span class="ch-panel__action ch-nav__arrow ch-nav__arrow--link">
                                                                            <span>Payment Gateway Evaluator </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <!-- ========================================= 
                                                        Billing & Invoicing start
                                                        ========================================== -->
                                                        <div class="ch-dropdown__item ch-dropdown__item--align">
                                                            <div class="ch-card">
                                                                <a href="/resources/guides/subscription-billing-and-management-guide/?ref=navbar" class="ch-card__container" style="max-width: 400px">
                                                                    <div class="ch-card__figure">
                                                                        <svg height="52" width="52">
                                                                            <use xlink:href="#cb-docs"></use>
                                                                        </svg>
                                                                    </div>
                                                                    <div class="ch-card__header">
                                                                        <div class="ch-card__title">
                                                                            The Essential Guide on Subscription Billing
                                                                        </div>
                                                                        <div class="ch-card__desc">
                                                                            Wondering what you should ask yourself before choosing a Subscription Billing and Management platform?
                                                                        </div>
                                                                    </div>
                                                                    <div class="ch-card__actions">
                                                                        <div class="ch-card__action ch-nav__arrow ch-nav__arrow--link">
                                                                            <span>Read more</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <!-- ========================================= 
                                                        Payments & Accounting start
                                                        ========================================== -->
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <!-- ====================================================================== 
                                        Resources menu section end
                                        ======================================================================= -->
                                    </ul>
                                </nav>
                            </div>
                            <!-- ========================================= 
                            Header menu Middle end
                            ========================================== -->
                            <!-- ========================================= 
                            Header menu right start
                            ========================================== -->
                            <div class="l-header__col l-header__col--right" v-if="!isBasicHeader">
                                <nav class="ch-nav">
                                    <ul class="ch-nav__list">
                                        <li class="ch-nav__item ch-nav__item--default">
                                            <a href="https://app.chargebee.com/login" class="ch-nav__action ch-nav__arrow ch-nav__arrow--black">
                                                <span class="ch-nav__icon">
                                                    <svg height="14" width="12">
                                                        <use xlink:href="#lock-brand"></use>
                                                    </svg>
                                                </span>
                                                <span class="takeMeToTheAppLogin"></span>
                                            </a>
                                        </li>
                                        <li class="ch-nav__item ch-nav__item--onfixed">
                                            <a href="" class="ch-nav__action ch-nav__arrow ch-nav__arrow--black">
                                                <span class="ch-nav__icon">
                                                    <svg height="14" width="12">
                                                        <use xlink:href="#lock-green"></use>
                                                    </svg>
                                                </span>
                                                <span class="takeMeToTheAppSignup"></span>
                                            </a>
                                        </li>
                                        <li class="ch-nav__item ch-nav__item--cta" v-bind:class="removeHeaderCta ? 'ch-nav__item--remove':''">
                                            <a cn-mark-signup="true" href="/schedule-a-demo/?ref=navbar" class="ch-nav__btn ch-nav__arrow ch-nav__arrow--white demoCTA">
                                                <span>Schedule a Demo </span> 
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <!-- ========================================= 
                            Header menu right end
                            ========================================== -->
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- =====================================================================================
        Mobile Header start
        ====================================================================================== -->
        <header class="l-header visible-xs visible-sm">
            <div class="l-header__container">
                <!-- =========================================
                Header Part start
                ========================================== -->
                <div class="l-header__row l-header__row--mobile">
                    <div class="ch-header">
                        <a href="/" class="ch-logo">
                            <svg width="110" height="34">
                                <use xlink:href="#chargebee-logo-black"></use>
                            </svg>
                        </a>
                        
                        <div class="ch-burger" data-ch-mnav="true" id="ch-js-burger">
                            <span  class="ch-burger__icon"></span>
                        </div>
                    </div>
                </div>
                <!-- =========================================
                Header Part end
                ========================================== -->
                <!-- =========================================
                Slider menu Part end
                ========================================== -->
                <div class="l-header__row l-header__row--mobile">
                    <div class="ch-header__overlay--mobile"></div>
                    <div class="ch-header__modal">
                        <div class="ch-header__close--mobile" id="ch-js-close"></div>
                        <div class="ch-header__group">
                            <h4>PRODUCT</h4>
                            <ul class="ch-header__list">
                                <li class="ch-header__item">
                                    <a href="/subscription-management/?ref=navbar" class="">
                                        Subscription Management
                                    </a>
                                </li>
                                <li class="ch-header__item">
                                    <a href="/recurring-billing-invoicing/?ref=navbar" class="">
                                        Billing Automation
                                    </a>
                                </li>
                                <li class="ch-header__item">
                                    <a href="/recurring-payments/?ref=navbar" class="">
                                        Recurring Payments
                                    </a>
                                </li>
                                <li class="ch-header__item">
                                    <a href="/saas-accounting-and-taxes/?ref=navbar" class="">
                                        Accounting & Taxes
                                    </a>
                                </li>
                                <li class="ch-header__item">
                                    <a href="/saas-reporting/?ref=navbar" class="">
                                        Reporting & Analytics
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="ch-header__group">
                            <h4>SOLUTIONS</h4>
                            <div class="ch-header__list ch-header__list--column-2">
                                <ul class="ch-header__list">
                                    <li class="ch-header__item ch-header__item--title">
                                        BY ROLE
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/for-subscription-finance-operations/?ref=navbar">Finance</a>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/for-sales-operations/?ref=navbar">Sales</a>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/revenue-operations/?ref=navbar">RevOps</a>
                                    </li>
                                </ul>
                                <ul class="ch-header__list">
                                    <li class="ch-header__item ch-header__item--title">
                                        <span>
                                            BY INDUSTRY
                                        </span>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/saas-billing/?ref=navbar">B2B SaaS</a>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/subscription-ecommerce/?ref=navbar">Ecommerce</a>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/for-education/?ref=navbar">E-learning</a>
                                    </li>
                                </ul>
                                <ul class="ch-header__list">
                                    <li class="ch-header__item ch-header__item--title">
                                        <span>
                                            BY STRATEGY
                                        </span>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/solutions/rapidly-iterate-pricing/?ref=navbar">Roll Out New Pricing</a>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/solutions/global-expansion/?ref=navbar">Expand Globally</a>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/solutions/moving-upmarket/?ref=navbar">Move Upmarket</a>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/solutions/shift-to-subscription-model/?ref=navbar">Shift to Subscriptions</a>
                                    </li>
                                </ul>
                                <ul class="ch-header__list">
                                    <li class="ch-header__item ch-header__item--title">
                                        <span>
                                            BY BUSINESS SIZE
                                        </span>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/launch/?ref=navbar">Startup</a>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/for-high-growth-subscription-businesses/?ref=navbar">ScaleUp</a>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/enterprise-subscription-billing/?ref=navbar">Enterprise</a>
                                    </li>
                                </ul>
                                <ul class="ch-header__list">
                                    <li class="ch-header__item ch-header__item--title">
                                        <span>
                                            BY BUSINESS MODEL
                                        </span>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/for-self-service-subscription-business/?ref=navbar">Self-serve </a>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/for-sales-driven-saas/?ref=navbar">Sales-driven</a>
                                    </li>
                                </ul>
                                <ul class="ch-header__list">
                                    <li class="ch-header__item ch-header__item--title">
                                        <span>
                                            BY GEOGRAPHY
                                        </span>
                                    </li>
                                    <li class="ch-header__item">
                                        <a href="/for-europe/?ref=navbar">Europe</a> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="ch-header__group">
                            <ul class="ch-header__list ch-header__list--column-2">
                                <li class="ch-header__item">
                                    <a href="/customers/?ref=navbar" style="color: #00000A;">
                                        Customers
                                    </a>
                                </li>
                                <li class="ch-header__item">
                                    <a href="/pricing/?ref=navbar" style="color: #00000A;">
                                        Pricing
                                    </a>
                                </li>
                                <li class="ch-header__item">
                                    <a href="/resources/?ref=navbar" style="color: #00000A;">
                                        Resources
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="ch-header__group ch-header__group--bg hidden-xs">
                            <ul class="ch-header__list">
                                <li class="ch-header__item">
                                    <a href="https://app.chargebee.com/login" class="">
                                        <span>Login</span>
                                    </a>
                                </li>
                                <li class="ch-header__item">
                                    <a href="#request-callback" class="">
                                        <span>Request Callback</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- =========================================
                Slider menu Part end
                ========================================== -->
            </div>
            <div class="ch-header__sticky visible-xs">
                <ul class="ch-header__list">
                    <li class="ch-header__item">
                        <a href="https://app.chargebee.com/login" class="">
                            <span>Login</span>
                        </a>
                    </li>
                    <li class="ch-header__item">
                        <a href="#request-callback" class="">
                            <span>Request Callback</span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
        <!-- =====================================================================================
        Mobile Header end
        ====================================================================================== -->
        <!-- ===================================================================================
        Start - SVG Sprite 
        ==================================================================================== -->
        <svg-sprite />
        <!-- ===================================================================================
        End - Svg Sprite
        ==================================================================================== -->
    </div>
</template>

<script>
import svgSprite from '~/components/svgSpriteForHeader.vue';
export default {
    props: ['has-invert','has-basic-header','has-community','disable-logo-click','hide-middle-menu','hide-header-cta','hide-dropdown-menu'],
    components: {
        'svg-sprite': svgSprite
    },
    data(){
    	return {
            isInvert: this.hasInvert,
            isBasicHeader: this.hasBasicHeader ? this.hasBasicHeader : false,
            isCommunity: this.hasCommunity ? this.hasCommunity : false,
            logoClickDisabled: this.disableLogoClick ? this.disableLogoClick : false,
            removeMiddleMenu: this.hideMiddleMenu ? this.hideMiddleMenu : false,
            removeHeaderCta: this.hideHeaderCta ? this.hideHeaderCta : false,
            removeDropdownMenu: this.hideDropdownMenu ? this.hideDropdownMenu : false
    	}
    }
}
</script>