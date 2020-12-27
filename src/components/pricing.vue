<template>
    <section class="l-row">

        <!-- =================================================================================
        Fixed pricing header Start 
        ================================================================================== -->
        <section class="l-main__fixed l-main__fixed--brand" id="cb-js-pricing-header">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="cpr-header">
                            <div class="cpr-header__row">
                                <div class="cpr-header__col">
                                    <div class="cpr-header__desc">Can’t decide? Choose a plan later.</div>
                                    <div class="cpr-header__title">
                                        <a cn-mark-signup="true" href="/trial-signup/" class="cpr-header__link">
                                            Try Chargebee for free →
                                        </a>
                                    </div>
                                </div>
                                <div class="cpr-header__col" v-if="pageName === 'Launch'">
                                    <div class="cpr-header__title">Launch</div>
                                    <div class="cpr-header__desc">for Startups</div>
                                </div>
                                <div class="cpr-header__col">
                                    <div class="cpr-header__title">Rise</div>
                                    <div class="cpr-header__desc" v-if="pageName === 'Pricing'">{{currencySymbol}}{{riseAmount}}/mo</div>
                                </div>

                                <div class="cpr-header__col">
                                    <div class="cpr-header__title">Scale</div>
                                    <div class="cpr-header__desc" v-if="pageName === 'Pricing'">{{currencySymbol}}{{scaleAmount}}/mo</div>
                                </div>

                                <div class="cpr-header__col" v-if="pageName === 'Pricing'">
                                    <div class="cpr-header__title">Enterprise</div>
                                    <div class="cpr-header__desc">Contact Sales</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- =================================================================================
        Fixed pricing header End 
        ================================================================================== -->
        <!-- =================================================================================
        Fixed pricing plan header for mobile Start 
        ================================================================================== -->
        <section class="l-main__mfixed l-main__mfixed--brand" id="cb-js-pricing-mheader">
            <div class="cpr-mheader">
                <div class="cpr-mheader__container">
                    <div class="cpr-mheader__title">Currently Viewing</div>
                    <div class="cpr-mheader__action">
                        <select class="cpr-mheader__control" id="cpr-mheader-control">
                            <option class="cpr-mheader__item" v-if="pageName === 'Launch'">Launch</option>
                            <option class="cpr-mheader__item">Rise</option>
                            <option class="cpr-mheader__item">Scale</option>
                            <option class="cpr-mheader__item" v-if="pageName === 'Pricing'">Enterprise</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
        <!-- =================================================================================
        Fixed pricing plan header for mobile End 
        ================================================================================== -->
        <!-- =================================================================================
        Content Part Start 
        ================================================================================== -->
        <section class="l-main__row">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="cpr-dropdown hidden-xs hidden-sm">
                            <div class="cpr-toggle" v-if="pageName === 'Pricing'" v-bind:class="[isYearly ? 'cpr-toggle--year' : 'cpr-toggle--month']">
                                <div class="cpr-toggle__year" @click="isYearly = true,changePrice()">Annual</div>
                                <div class="cpr-toggle__month" @click="isYearly = false,changePrice()">Monthly</div>
                            </div>
                            <div class="cpr-dropdown__container">
                                <select class="cpr-dropdown__select" name="change-country" @change="changeCurrencyCode($event)">
                                    <option value="USD ">USD</option>
                                    <option value="EUR ">EUR</option>
                                    <option value="GBP ">GBP</option>
                                    <option value="AUD ">AUD</option>
                                    <option value="CAD ">CAD</option>
                                </select>
                            </div>
                        </div>
                        <!-- ===================================================================
                        Tab Part Start 
                        ==================================================================== -->
                        <div class="cpr-main" data-pricing-table = "true">
                            <!-- ========================================================
                            Tab Content Part Start 
                            ========================================================== -->
                            <!-- ========================================================
                            Tab Content For desktop start
                            ========================================================= -->
                            <div class="cpr-table hidden-xs hidden-sm">
                                <!-- =============================================
                                Table Head Part Start 
                                ============================================== -->
                                <div class="cpr-table__head" data-pricing-table-header>
                                    <div class="cpr-table__row">
                                        <div class="cpr-table__col">
                                            <div class="cpr-plan" v-if="pageName === 'Pricing'">
                                                <div class="cpr-plan__heading">
                                                    Find a <br>plan that’s <span class="cpr-highlight">right <br>for you</span>
                                                </div>
                                                <div class="cpr-plan__text">
                                                    Not sure about which plan to go for? Talk to our sales expert today.
                                                </div>
                                                <div style="font-size: 16px;">
                                                    <a href="/schedule-a-demo/?ref=pricingPage" class="cpr-link cpr-link--icon">Contact Sales</a>
                                                </div>
                                            </div>
                                            <div class="cpr-plan" v-if="pageName === 'Launch'">
                                                <div class="cl-article__label">
                                                    Launch Plan
                                                </div>
                                                <div class="cpr-plan__heading">
                                                    <span class="cpr-highlight">Get Your First {{currencySymbol}}{{launchRevenue}} in</span><br /> Revenue for Free.
                                                </div>
                                            </div>
                                        </div>
                                        <!-- ======================================
                                        Launch Plan Start 
                                        ======================================= -->
                                        <div class="cpr-table__col" v-if="pageName === 'Launch'">
                                            <div class="cpr-plan">
                                                <!-- ==============================
                                                Go Plan header Start 
                                                ===============================  -->
                                                <div class="cpr-plan__header">
                                                    <div class="cpr-plan__name">Launch <span v-if="pageName === 'Launch'" class="cpr-plan__label">for Startups</span></div>
                                                    <div class="cpr-plan__price">
                                                        <small>{{currencySymbol}}</small>0
                                                    </div>
                                                    <div v-if="isYearly && pageName === 'Pricing'" class="cpr-plan__toggle">billed annually</div>
                                                    <div class="cpr-plan__desc">
                                                        for your first <strong>{{currencySymbol}}{{launchRevenue}}</strong> in revenue
                                                    </div>
                                                    <div class="cpr-plan__desc">
                                                        <span class="cpr-plan__tooltip" data-toggle="tooltip" v-bind:title="launchTooltipContent">What happens when I hit {{currencySymbol}}{{launchRevenue}}?</span>
                                                    </div>
                                                </div>
                                                <!-- =================================
                                                Go Plan header End 
                                                ================================== -->
                                                <!-- =================================
                                                Go Plan Content Start                                           
                                                ================================== -->
                                                <div class="cpr-plan__content">
                                                    <div class="cpr-plan__actions">
                                                        <div class="cpr-plan__action">
                                                            <a cn-mark-signup="true" href="/trial-signup/?plan=Launch" class="cb-btn cb-btn--sm cb-btn--secondary cb-btn--signup cb-btn--suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                                            Sign up for free
                                                        </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- =================================
                                                Go Plan Content End 
                                                ================================== -->
                                                <div class="cpr-plan__footer">
                                                    <div class="cpr-plan__desc">
                                                        <div style="margin-bottom: 36px; margin-right: 12px;opacity: .6;">
                                                            For early-stage startups who have just launched a product or service and need billing automation to start making revenue.
                                                        </div>
                                                        <div class="cpr-plan__highlight" style="min-height: 38px;"></div>
                                                        <ul class="cpr-plan__list">
                                                            <li>Payment Pages</li>
                                                            <li>Full API Checkout</li>
                                                            <li>1 Gateway per Payment Method</li>
                                                            <li>Pricing Models</li>
                                                            <li>Dunning</li>
                                                            <li>Customer Portal</li>
                                                            <li>Single Tax Region</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- =========================================
                                        Launch Plan End 
                                        ========================================== -->
                                        <!-- ======================================
                                        Rise Plan Start 
                                        ======================================= -->
                                        <div class="cpr-table__col">
                                            <div class="cpr-plan">
                                                <!-- ==============================
                                                Go Plan header Start 
                                                ===============================  -->
                                                <div class="cpr-plan__header">
                                                    <div class="cpr-plan__name">Rise</div>
                                                    <div class="cpr-plan__price">
                                                        <small>{{currencySymbol}}</small>{{riseAmount}}
                                                    </div>
                                                    <div v-if="isYearly && pageName === 'Pricing'" class="cpr-plan__toggle">billed annually</div>
                                                    <div class="cpr-plan__desc">
                                                        includes <strong>{{currencySymbol}}{{riseRevenue}}</strong>/<span v-if="isYearly">yr</span><span v-else>mo</span> revenue
                                                    </div>
                                                    <div class="cpr-plan__desc">
                                                        <strong>{{risePercentage}}</strong> of
                                                        <span class="cpr-plan__tooltip" data-toggle="tooltip" v-bind:title="riseTooltipContent">overage revenue</span>
                                                    </div>
                                                </div>
                                                <!-- =================================
                                                Go Plan header End 
                                                ================================== -->
                                                <!-- =================================
                                                Go Plan Content Start                                           
                                                ================================== -->
                                                <div class="cpr-plan__content">
                                                    <div class="cpr-plan__actions">
                                                        <div class="cpr-plan__action">
                                                            <a cn-mark-signup="true" href="/schedule-a-demo/?ref=Rise" class="cb-btn cb-btn--sm cb-btn--secondary cb-btn--signup cb-btn--suffix section1" > 
                                                            Get started now
                                                        </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- =================================
                                                Go Plan Content End 
                                                ================================== -->
                                                <div class="cpr-plan__footer">
                                                    <div class="cpr-plan__desc">
                                                        <div style="margin-bottom: 36px; margin-right: 12px;opacity: .6;">
                                                            For agile businesses beginning to transition from spreadsheets to automation and are preparing for quick growth.
                                                        </div>
                                                        <div class="cpr-plan__highlight" style="min-height: 38px;"></div>
                                                        <ul class="cpr-plan__list">
                                                            <li>10 Users</li>
                                                            <li>Unlimited payment gateways</li>
                                                            <li>Multiple tax regions</li>
                                                            <li>SaaS Metrics</li>
                                                            <li>Xero & QuickBooks</li>
                                                            <li>Salesforce & Avalara</li>
                                                            <li>Chargebee RevenueStory</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- =========================================
                                        Rise Plan End 
                                        ========================================== -->
                                        <!-- =========================================
                                        Scale Plan Start 
                                        ========================================== -->
                                        <div class="cpr-table__col">
                                            <div class="cpr-plan">
                                                <!-- =================================
                                                Go Plan header Start 
                                                ================================== -->
                                                <div class="cpr-plan__header">
                                                    <div class="cpr-plan__name">Scale <span v-if="pageName === 'Pricing'" class="cpr-plan__label">Popular</span></div>
                                                    <div class="cpr-plan__price">
                                                        <small>{{currencySymbol}}</small>{{scaleAmount}}
                                                    </div>
                                                    <div v-if="isYearly && pageName === 'Pricing'" class="cpr-plan__toggle">billed annually</div>
                                                    <div class="cpr-plan__desc">
                                                        includes <strong>{{currencySymbol}}{{scaleRevenue}}</strong>/<span v-if="isYearly">yr</span><span v-else>mo</span> revenue
                                                    </div>
                                                    <div class="cpr-plan__desc">
                                                        <strong>{{scalePercentage}}</strong> of
                                                        <span class="cpr-plan__tooltip" data-toggle="tooltip" v-bind:title="scaleTooltipContent">overage revenue</span>
                                                    </div>
                                                </div>
                                                <!-- =================================
                                                Go Plan header End 
                                                ================================== -->
                                                <!-- =================================
                                                Go Plan Content Start 
                                                ================================== -->
                                                <div class="cpr-plan__content">
                                                    <div class="cpr-plan__actions">
                                                        <div class="cpr-plan__action">  
                                                            <a cn-mark-signup="true" href="/schedule-a-demo/?ref=Scale" class="cb-btn cb-btn--sm cb-btn--secondary cb-btn--suffix section1"> 
                                                            Get started now
                                                        </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- =================================
                                                Go Plan Content End 
                                                ================================== -->
                                                <div class="cpr-plan__footer">
                                                    <div class="cpr-plan__desc">
                                                        <div style="margin-bottom: 36px; margin-right: 12px;opacity: .6;">
                                                            For businesses that want to improve revenue workflow efficiencies with automation, deep integrations and in-depth subscription analytics.
                                                        </div>
                                                        <div class="cpr-plan__highlight">
                                                            Everything in Rise +
                                                        </div>
                                                        <ul class="cpr-plan__list">
                                                            <li>25 users</li>
                                                            <li>Advance Invoices</li>
                                                            <li>Custom User Roles</li>
                                                            <li>Multiple Payment Methods</li>
                                                            <li>Multiple tax profiles</li>
                                                            <li>Priority Phone Support</li>
                                                            <li>NetSuite & Intacct</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- =========================================
                                        Scale Plan End 
                                        ========================================== -->
                                        <!-- =========================================
                                        Enterprise Plan Start 
                                        ========================================== -->
                                        <div class="cpr-table__col" v-if="pageName === 'Pricing'">
                                            <div class="cpr-plan">
                                                <!-- =================================
                                                Go Plan header Start 
                                                ================================== -->
                                                <div class="cpr-plan__header">
                                                    <div class="cpr-plan__name">Enterprise</div>
                                                    <div class="cpr-plan__pname">
                                                        Custom
                                                    </div>
                                                    <div class="cpr-plan__desc" v-bind:class="{ 'cbr-mt-md': isYearly}">
                                                        Talk to our experts and get tailored pricing for your business.
                                                    </div>
                                                </div>
                                                <!-- =================================
                                                Go Plan header End 
                                                ================================== -->
                                                <!-- =================================
                                                Go Plan Content Start 
                                                ================================== -->
                                                <div class="cpr-plan__content">
                                                    <div class="cpr-plan__actions">
                                                        <div class="cpr-plan__action">
                                                            <a cn-mark-signup="true" href="/schedule-a-demo/?ref=Enterprise" class="cb-btn cb-btn--sm cb-btn--gsecondary cb-btn--suffix section1">  
                                                                Talk to sales 
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- =================================
                                                Go Plan Content End 
                                                ================================== -->
                                                <div class="cpr-plan__footer">
                                                    <div class="cpr-plan__desc">
                                                        <div style="margin-bottom: 36px; margin-right: 12px;opacity: .6;">
                                                            Built for businesses with sophisticated revenue operations and advanced compliance requirements.
                                                        </div>
                                                        <div class="cpr-plan__highlight" style="padding-top: 22px;">
                                                            Comprehensive. Secure. Flexible. Unlimited.
                                                        </div>
                                                        <div class="cpr-plan__list">
                                                            Manage complex billing operations for teams with advanced workflows. No limits to number of users. White-glove support right from setup to migration, and beyond.<br /><br />
                                                            <a href="/enterprise-subscription-billing/" class="cpr-link cpr-link--icon">Learn more</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <!-- =========================================
                                        Enterprise Plan End 
                                        ========================================== -->
                                    </div>


                                    <div class="cpr-table__row">
                                        <div class="cpr-table__col" style="padding: 0;"></div>
                                        <div class="cpr-table__col"></div>
                                        <div class="cpr-table__col">
                                            <div showAllFeatures class="cpr-link cpr-link--icon cpr-link--plevel">Compare all features</div>
                                        </div>
                                        <div class="cpr-table__col"></div>
                                    </div>
                                </div>
                                <!-- =================================================
                                Table Head Part End 
                                ================================================== -->
                                <!-- =================================================
                                Table Body Part Start 
                                ================================================== -->
                                <div allFeatures class="cpr-table__body" data-pricing-table-body>
                                    <!-- =============================================
                                    Invoicing and Subscription Management Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Invoicing and Subscription Management
                                            </div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Offline Invoicing
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Calendar Billing
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">Basic</div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Usage-based (Metered) Billing
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Advance Invoices
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Admin console for subscription management
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Customer portal
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Credit Notes
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Coupons and Discounts
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Gift Subscriptions
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Excess & Partial Payments and Unbilled Charges
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Consolidated Invoicing
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Net-D Payment Terms
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Quotes
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Account Hierarchy
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Pricing Models
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Contract terms
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> 
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                            Multi Decimal Support
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> 
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Invoicing and Subscription Management Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Payments and Checkout Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Payments and Checkout
                                            </div>
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Payment Pages - iFrame embedded, Hosted 
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Full API Checkout, Stripe.js and Chargebee Checkout
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Chargebee.js & Tokenization
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Offline Checkout
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Multiple Payment Methods per Customer
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                One click payment method update via secure URL
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Custom domain (White labelling)
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Native Mobile SDKs
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Transactional Error Monitoring across gateways
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Chargeback Automation
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Payments and Checkout Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Alternative Payment Methods Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Alternative Payment Methods
                                            </div>
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                ACH
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                ACH Credit Transfer via Stripe
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                GoCardless - SEPA, BACS, Autogiro
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                PayPal and Amazon
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                SEPA Credit Transfer
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Adyen- SEPA
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Alternative Payment Methods End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Reporting Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Reporting
                                            </div>
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                SaaS Metrics
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">Basic</div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                A/R Aging
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Revenue Recognition Report
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                ASC 606-compliant Revenue Recognition Report (with Softrax)
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Account Summary Report
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Deferred Revenue Report
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Abandoned Cart Tracking (API)
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Abandoned Cart Reports - Abandoned & Recovered carts
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Tax Reports
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Report Builder
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Flexible MRR Calculations
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Reporting Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Fraud Management Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Fraud Management
                                            </div>
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Stripe Radar - Transaction level alerts
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Stripe Radar - Customer level alerts
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                SAML
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Fraud Management Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Dunning Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Dunning
                                            </div>
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Dunning for Online and Offline Payments
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Smart Dunning
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Dunning Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Global Taxes Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Global Taxes
                                            </div>
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Sales Tax (US, EU VAT & Global Taxes)
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Tax Profiles - Multiple
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">Single</div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Inclusive Tax Support
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Tax Region - Multiple
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">Single</div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Global Taxes Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Internationalization  Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Internationalization
                                            </div>
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Multicurrency LIMITS
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">Upto 3 currencies</div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Exchange Rate Controls (Manual/Auto)
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">Manual</div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">Manual</div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">Auto</div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">Auto</div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Multi-language support
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Internationalization  Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Lifecycle Emails Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Lifecycle Emails
                                            </div>
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Email Templates
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Segmentation
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Multiple Reminders/Follow-ups
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                               Email attachments
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> 
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Lifecycle Emails Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    API, DEVOPS & OTHERS Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                API, DevOps & Others
                                            </div>
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Multiple Webhooks, API Filters, and JSON Metadata
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Custom Fields - via UI & API
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                File Attachments
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                User Role Management (BASIC)
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">Upto 3 Users</div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                User Role Management (ADVANCED)
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Saved Filters
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    API, DEVOPS & OTHERS Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Special Assistance  Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Special Assistance 
                                            </div>
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Engineering Consultation
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                PCI Certification Assistance
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Infrastructure Support (Assistance from our Devops team in special situations)
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Migration support
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Billing Data Portability including Payment Methods
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>

                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Dedicated CSM
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Special Assistance  Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Support Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Support
                                            </div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Access to Knowledge Base, Docs & Community Support
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Email Support
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">24*7</div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">24*7</div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">24*7</div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">24*7</div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Live Chat Support
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">24*7</div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">24*7</div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">24*7</div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Phone Support
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">24*5</div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">24*5</div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">24*7</div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Request for Call-back
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">24*5</div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">24*5</div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">24*7</div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Remote assistance
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Technical Account Manager
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Priority Support
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Support Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Accounting Integrations Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Accounting Integrations
                                            </div>
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Xero
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                QuickBooks 
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                NetSuite
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Intacct
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Accounting Integrations Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Tax Integrations Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Tax Integrations
                                            </div>
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                TaxJar
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Avalara AvaTax 
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Avalara Communications Tax
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Tax Integrations Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Sales, Marketing & Service Integrations Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group" data-load-more='true' data-toBeShown="4">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Sales, Marketing & Service Integrations
                                            </div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                CRM : HubSpot, Salesforce, Pipedrive <sup>Beta</sup>  

                                                <div style="background: #f0f0f5; color: #00000a; padding: 6px 8px; font-size: 10px; line-height: 12px; text-align: left; border-radius: 4px;">
                                                    For Salesforce: User licenses are required to be purchased at the rate of USD 99 per 10 seats.
                                                </div>
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Marketing : ActiveCampaign, HubSpot, Klaviyo, Mailchimp
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--text">Mailchimp only</div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Helpdesks : Freshdesk, GrooveHQ, Zendesk
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Messaging : Intercom
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Sales, Marketing & Service Integrations Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Communication & Collaboration Integrations  Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group" data-load-more='true' data-toBeShown="4">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Data & Collaboration Integrations
                                            </div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Zapier
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Google Analytics & Pixel Tracking
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                ShipStation
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Slack
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Stitch
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                PieSync
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Communication & Collaboration Integrations  Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Refferral and Affiliate Marketing Integrations Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Referral and Affiliate Marketing Integrations
                                            </div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                ReferralCandy and Friendbuy
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                Refersion and LeadDyno
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Refferral and Affiliate Marketing Integrations Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Reporting and Analytics Integrations Part Start 
                                    ============================================== -->
                                    <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col"></div>
                                            <div class="cpr-table__col">
                                                Reporting and Analytics Integrations 
                                            </div>
                                            <div class="cpr-table__col"></div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                RevenueStory Integrated Analytics
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--cross"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                        <div class="cpr-table__row">
                                            <div class="cpr-table__col">
                                                ChartMogul
                                            </div>
                                            <div v-if="pageName === 'Launch'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div> <!-- launch -->
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                            <div v-if="pageName === 'Pricing'" class="cpr-table__col">
                                                <div class="cb-icon cb-icon--tick"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Reporting and Analytics Integrations Part End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Dont Delete it's for spacing - Start
                                    ============================================== -->
                                    <!-- <div class="cpr-table__group">
                                        <div class="cpr-table__title">
                                            <div class="cpr-table__col cpr-table__lcol"></div>
                                            <div class="cpr-table__col cpr-table__lcol"></div>
                                            <div class="cpr-table__col cpr-table__lcol"></div>
                                            <div class="cpr-table__col cpr-table__lcol"></div>
                                        </div>
                                    </div> -->
                                    <!-- =============================================
                                    Dont Delete it's for spacing - End
                                    ============================================== -->
                                </div>
                                <!-- =================================================
                                Table Body Part End 
                                ================================================== -->
                            </div>
                            <!-- =================================================
                            Tab Content For desktop end
                            ================================================== -->
                            <!-- =================================================
                            Tab Content For Mobile and ipad start
                            ================================================== -->
                            <div class="cpr-cards visible-xs visible-sm">

                                <div class="cpr-plan">
                                    <div class="cpr-plan__heading">
                                        Find a plan that’s <br class="visible-xs"><span class="cpr-highlight">right for you</span>
                                    </div>
                                    <div class="cpr-plan__text">
                                        Not sure about which plan to go for? <br class="visible-xs">Talk to our sales expert today.
                                    </div>
                                    <div style="font-size: 16px;">
                                        <a href="/schedule-a-demo/?ref=pricingPage" class="cpr-link cpr-link--icon">Contact Sales</a>
                                    </div>
                                </div>
                                <!-- =============================================
                                Rise card start
                                ============================================== -->
                                <div class="cpr-card" data-pricing-card="true" id="launch" v-if="pageName === 'Launch'">
                                    <div class="cpr-card__header">
                                        <div class="cpr-card__fluid">
                                        <div class="cpr-card__heading">
                                            Launch
                                        </div>
                                        <div class="cpr-card__charge"><small>{{currencySymbol}}</small>0</div>
                                        <div v-if="isYearly && pageName === 'Pricing'" class="cpr-plan__toggle">billed annually</div>
                                        </div>
                                        <div class="cpr-card__actions">
                                        <div class="cpr-card__action">          
                                            <a cn-mark-signup="true" href="/trial-signup/?plan=Launch" class="cb-btn cb-btn--mobile cb-btn--secondary">Sign up</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="cpr-card__content">
                                        <div class="cpr-card__desc">includes <strong>{{currencySymbol}}0</strong>/<span v-if="isYearly">yr</span><span v-else>mo</span> revenue</div>
                                        <div class="cpr-card__desc">
                                        <span class="cpr-plan__tooltip" data-toggle="tooltip" v-bind:title="launchTooltipContent">What happens when I hit {{currencySymbol}}{{launchRevenue}}?</span>
                                        </div>
                                    </div>
                                    <div class="cpr-card__footer" data-pricing-card-action="Launch">
                                        <div  class="cpr-card__footer-action">View all features</div>
                                    </div>
                                    <!-- =====================================================
                                    Table view start
                                    ====================================================== -->
                                    <div class="cpr-card__table">
                                        <!-- =================================================
                                        Card Table Body Part Start 
                                        ================================================== -->
                                        <div class="cpr-table__body" data-pricing-table-body>
                                            <!-- =============================================
                                            Invoicing and Subscription Management Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Invoicing and Subscription Management
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Offline Invoicing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Calendar Billing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">Basic</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Usage-based (Metered) Billing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Advance Invoices
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Admin console for subscription management
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Customer portal
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Credit Notes
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Coupons and Discounts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Gift Subscriptions
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Excess & Partial Payments and Unbilled Charges
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Consolidated Invoicing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Net-D Payment Terms
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Quotes
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Account Hierarchy
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Pricing Models
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Contract terms
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multi Decimal Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Invoicing and Subscription Management Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Payments and Checkout Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Payments and Checkout
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Payment Pages - iFrame embedded, Hosted 
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Full API Checkout, Stripe.js and Chargebee Checkout
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Chargebee.js & Tokenization
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Offline Checkout
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multiple Payment Methods per Customer
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        One click payment method update via secure URL
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Custom domain (White labelling)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Native Mobile SDKs
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Transactional Error Monitoring across gateways
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Chargeback Automation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Payments and Checkout Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Alternative Payment Methods Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Alternative Payment Methods
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ACH
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ACH Credit Transfer via Stripe
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        GoCardless - SEPA, BACS, Autogiro
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        PayPal and Amazon
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        SEPA Credit Transfer
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Adyen - SEPA
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Lifecycle Emails Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Reporting Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Reporting
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        SaaS Metrics
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">Basic</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        A/R Aging
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Revenue Recognition Report
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ASC 606-compliant Revenue Recognition Report (with Softrax)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Account Summary Report
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Deferred Revenue Report
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Abandoned Cart Tracking (API)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Abandoned Cart Reports - Abandoned & Recovered carts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Tax Reports
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Report Builder
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Flexible MRR Calculations
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Reporting Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Fraud Management Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Fraud Management
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Stripe Radar - Transaction level alerts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Stripe Radar - Customer level alerts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        SAML
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Fraud Management Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Dunning Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group" data-load-more='true' data-toBeShown="2">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Dunning
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Dunning for Online and Offline Payments
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Smart Dunning
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Dunning Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Global Taxes Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group" data-load-more='true' data-toBeShown="3">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Global Taxes
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Sales Tax (US, EU VAT & Global Taxes)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Tax Profiles - Multiple
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">Single</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Inclusive Tax Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Tax Region - Multiple
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">Single</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Global Taxes Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Internationalization  Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Internationalization 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multicurrency LIMITS
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">Upto 3 currencies</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Exchange Rate Controls (Manual/Auto)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">Manual</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multi-language support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Internationalization  Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Lifecycle Emails Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Lifecycle Emails
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Email Templates
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Segmentation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multiple Reminders/Follow-ups
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Email attachments
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Lifecycle Emails Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            API, DEVOPS & OTHERS Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        API, DEVOPS & OTHERS
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multiple Webhooks, API Filters, and JSON Metadata
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Custom Fields - via UI & API
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        File Attachments
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        User Role Management (BASIC)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">Upto 3 Users</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        User Role Management (ADVANCED)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Saved Filters
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            API, DEVOPS & OTHERS Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Special Assistance  Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Special Assistance 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Engineering Consultation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        PCI Certification Assistance
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Infrastructure Support (Assistance from our Devops team in special situations)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Migration support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Billing Data Portability including Payment Methods
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>

                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Dedicated CSM
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Special Assistance  Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Support Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Support
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Access to Knowledge Base, Docs & Community Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Email Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">24*7</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Live Chat Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Phone Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Request for Call-back
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Remote assistance
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Technical Account Manager
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Priority Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Support Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Accounting Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Accounting Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Xero
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        QuickBooks 
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        NetSuite
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Intacct
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Accounting Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Tax Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Tax Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        TaxJar
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Avalara AvaTax 
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Avalara Communications Tax
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Tax Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Sales, Marketing & Service Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Sales, Marketing & Service Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        CRM : Salesforce, HubSpot, Pipedrive <sup>Beta</sup>
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Marketing : Mailchimp, Klaviyo
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">Mailchimp only</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Helpdesks : Zendesk, Freshdesk, GrooveHQ
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Messaging : Intercom
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Sales, Marketing & Service Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Communication & Collaboration Integrations  Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Data & Collaboration Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Zapier
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Google Analytics & Pixel Tracking
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ShipStation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Slack
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Stitch
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        PieSync
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Communication & Collaboration Integrations  Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Refferral and Affiliate Marketing Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Refferral and Affiliate Marketing Integrations 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ReferralCandy and Friendbuy
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Refersion and LeadDyno
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Refferral and Affiliate Marketing Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Reporting and Analytics Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Reporting and Analytics Integrations 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        RevenueStory Integrated Analytics
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ChartMogul
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Reporting and Analytics Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Dont Delete it's for spacing - Start
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col"></div>
                                                    <div class="cpr-table__col"></div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Dont Delete it's for spacing - End
                                            ============================================== -->
                                        </div>
                                        <!-- =================================================
                                        Card Table Body Part End 
                                        ================================================== -->
                                    </div>
                                    <!-- =====================================================
                                    Table view End
                                    ====================================================== -->
                                </div>
                                <!-- =============================================
                                Launch card end
                                ============================================== -->
                                <!-- =============================================
                                Rise card start
                                ============================================== -->
                                <div class="cpr-card" data-pricing-card="true" id="rise">
                                    <div class="cpr-card__header">
                                        <div class="cpr-card__fluid">
                                        <div class="cpr-card__heading">
                                            Rise
                                        </div>
                                        <div class="cpr-card__charge"><small>{{currencySymbol}}</small>{{riseAmount}}</div>
                                        <div v-if="isYearly && pageName === 'Pricing'" class="cpr-plan__toggle">billed annually</div>
                                        </div>
                                        <div class="cpr-card__actions">
                                        <div class="cpr-card__action">          
                                            <a cn-mark-signup="true" href="/schedule-a-demo/?ref=Rise" class="cb-btn cb-btn--mobile cb-btn--secondary section1">Get started</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="cpr-card__content">
                                        <div class="cpr-card__desc">includes <strong>{{currencySymbol}}{{riseRevenue}}</strong>/<span v-if="isYearly">yr</span><span v-else>mo</span> revenue</div>
                                        <div class="cpr-card__desc">
                                        <strong>{{risePercentage}}</strong> of 
                                        <span class="cpr-plan__tooltip" data-toggle="tooltip" v-bind:title="riseTooltipContent">overage revenue</span>
                                        </div>
                                    </div>
                                    <div class="cpr-card__footer" data-pricing-card-action="Rise">
                                        <div  class="cpr-card__footer-action">View all features</div>
                                    </div>
                                    <!-- =====================================================
                                    Table view start
                                    ====================================================== -->
                                    <div class="cpr-card__table">
                                        <!-- =================================================
                                        Card Table Body Part Start 
                                        ================================================== -->
                                        <div class="cpr-table__body" data-pricing-table-body>
                                            <!-- =============================================
                                            Invoicing and Subscription Management Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Invoicing and Subscription Management
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Offline Invoicing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Calendar Billing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Usage-based (Metered) Billing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Advance Invoices
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Admin console for subscription management
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Customer portal
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Credit Notes
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Coupons and Discounts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Gift Subscriptions
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Excess & Partial Payments and Unbilled Charges
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Consolidated Invoicing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Net-D Payment Terms
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Quotes
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Account Hierarchy
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Pricing Models
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Contract terms
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multi Decimal Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Invoicing and Subscription Management Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Payments and Checkout Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Payments and Checkout
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Payment Pages - iFrame embedded, Hosted 
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Full API Checkout, Stripe.js and Chargebee Checkout
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Chargebee.js & Tokenization
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Offline Checkout
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multiple Payment Methods per Customer
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        One click payment method update via secure URL
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Custom domain (White labelling)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Native Mobile SDKs
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Transactional Error Monitoring across gateways
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Chargeback Automation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Payments and Checkout Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Alternative Payment Methods Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Alternative Payment Methods
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ACH
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                        <div class="cpr-table__col">
                                                            ACH Credit Transfer via Stripe
                                                        </div>
                                                        <div class="cpr-table__col">
                                                            <div class="cb-icon cb-icon--tick"></div>
                                                        </div>
                                                    </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        GoCardless - SEPA, BACS, Autogiro
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        PayPal and Amazon
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        SEPA Credit Transfer
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Adyen- SEPA
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Lifecycle Emails Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Reporting Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Reporting
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        SaaS Metrics
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        A/R Aging
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Revenue Recognition Report
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ASC 606-compliant Revenue Recognition Report (with Softrax)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Account Summary Report
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Deferred Revenue Report
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Abandoned Cart Tracking (API)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Abandoned Cart Reports - Abandoned & Recovered carts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Tax Reports
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Report Builder
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Flexible MRR Calculations
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Reporting Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Fraud Management Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Fraud Management
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Stripe Radar - Transaction level alerts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Stripe Radar - Customer level alerts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        SAML
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Fraud Management Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Dunning Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group" data-load-more='true' data-toBeShown="2">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Dunning
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Dunning for Online and Offline Payments
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Smart Dunning
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Dunning Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Global Taxes Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group" data-load-more='true' data-toBeShown="3">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Global Taxes
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Sales Tax (US, EU VAT & Global Taxes)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Tax Profiles - Multiple
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Inclusive Tax Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Tax Region - Multiple
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Global Taxes Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Internationalization  Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Internationalization 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multicurrency LIMITS
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Exchange Rate Controls (Manual/Auto)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">Manual</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multi-language support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Internationalization  Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Lifecycle Emails Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Lifecycle Emails
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Email Templates
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Segmentation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multiple Reminders/Follow-ups
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Email attachments
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Lifecycle Emails Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            API, DEVOPS & OTHERS Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        API, DEVOPS & OTHERS
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multiple Webhooks, API Filters, and JSON Metadata
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Custom Fields - via UI & API
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        File Attachments
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        User Role Management (BASIC)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        User Role Management (ADVANCED)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Saved Filters
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            API, DEVOPS & OTHERS Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Special Assistance  Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Special Assistance 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Engineering Consultation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        PCI Certification Assistance
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Infrastructure Support (Assistance from our Devops team in special situations)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Migration support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Billing Data Portability including Payment Methods
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>

                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Dedicated CSM
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Special Assistance  Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Support Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Support
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Access to Knowledge Base, Docs & Community Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Email Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">24*7</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Live Chat Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">24*7</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Phone Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">24*5</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Request for Call-back
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">24*5</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Remote assistance
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Technical Account Manager
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Priority Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Support Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Accounting Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Accounting Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Xero
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        QuickBooks 
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        NetSuite
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Intacct
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Accounting Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Tax Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Tax Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        TaxJar
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Avalara AvaTax 
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Avalara Communications Tax
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Tax Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Sales, Marketing & Service Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Sales, Marketing & Service Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        CRM : Salesforce, HubSpot, Pipedrive <sup>Beta</sup>
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Marketing : Mailchimp, Klaviyo
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Helpdesks : Zendesk, Freshdesk, GrooveHQ
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Messaging : Intercom
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Sales, Marketing & Service Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Communication & Collaboration Integrations  Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Data & Collaboration Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Zapier
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Google Analytics & Pixel Tracking
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ShipStation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Slack
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Stitch
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        PieSync
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Communication & Collaboration Integrations  Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Refferral and Affiliate Marketing Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Refferral and Affiliate Marketing Integrations 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ReferralCandy and Friendbuy
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Refersion and LeadDyno
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Refferral and Affiliate Marketing Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Reporting and Analytics Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Reporting and Analytics Integrations 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        RevenueStory Integrated Analytics
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ChartMogul
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Reporting and Analytics Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Dont Delete it's for spacing - Start
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col"></div>
                                                    <div class="cpr-table__col"></div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Dont Delete it's for spacing - End
                                            ============================================== -->
                                        </div>
                                        <!-- =================================================
                                        Card Table Body Part End 
                                        ================================================== -->
                                    </div>
                                    <!-- =====================================================
                                    Table view End
                                    ====================================================== -->
                                </div>
                                <!-- =============================================
                                Rise card end
                                ============================================== -->
                                <!-- =============================================
                                Scale card start
                                ============================================== -->
                                <div class="cpr-card" data-pricing-card="true" id="scale">
                                    <div class="cpr-card__header">
                                        <div class="cpr-card__fluid">
                                        <div class="cpr-card__heading">
                                            Scale
                                        </div>
                                        <div class="cpr-card__charge"><small>{{currencySymbol}}</small>{{scaleAmount}}</div>
                                        <div v-if="isYearly && pageName === 'Pricing'" class="cpr-plan__toggle">billed annually</div>
                                        </div>
                                        <div class="cpr-card__actions">
                                        <div class="cpr-card__action">
                                            <a cn-mark-signup="true" href="/schedule-a-demo/?ref=Scale" class="cb-btn cb-btn--mobile cb-btn--secondary section1">Get started</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="cpr-card__content">
                                        <div class="cpr-card__desc">includes <strong>{{currencySymbol}}{{scaleRevenue}}</strong>/<span v-if="isYearly">yr</span><span v-else>mo</span> revenue</div>
                                        <div class="cpr-card__desc">
                                        <strong>{{scalePercentage}}</strong> of
                                        <span class="cpr-plan__tooltip" data-toggle="tooltip" v-bind:title="scaleTooltipContent">overage revenue</span>
                                        </div>
                                    </div>
                                    <div class="cpr-card__footer" data-pricing-card-action="Scale">
                                        <div  class="cpr-card__footer-action">View all features</div>
                                    </div>
                                    <!-- =====================================================
                                    Table view start
                                    ====================================================== -->
                                    <div class="cpr-card__table">
                                        <!-- =================================================
                                        Card Table Body Part Start 
                                        ================================================== -->
                                        <div class="cpr-table__body" data-pricing-table-body>
                                            <!-- =============================================
                                            Invoicing and Subscription Management Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Invoicing and Subscription Management
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Offline Invoicing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Calendar Billing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Usage-based (Metered) Billing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Advance Invoices
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Admin console for subscription management
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Customer portal
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Credit Notes
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Coupons and Discounts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Gift Subscriptions
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Excess & Partial Payments and Unbilled Charges
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Consolidated Invoicing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Net-D Payment Terms
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Quotes
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Account Hierarchy
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Pricing Models
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Contract terms
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multi Decimal Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Invoicing and Subscription Management Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Payments and Checkout Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Payments and Checkout
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Payment Pages - iFrame embedded, Hosted 
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Full API Checkout, Stripe.js and Chargebee Checkout
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Chargebee.js & Tokenization
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Offline Checkout
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multiple Payment Methods per Customer
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        One click payment method update via secure URL
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Custom domain (White labelling)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Native Mobile SDKs
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Transactional Error Monitoring across gateways
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Chargeback Automation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Payments and Checkout Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Alternative Payment Methods Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Alternative Payment Methods
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ACH
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                        <div class="cpr-table__col">
                                                            ACH Credit Transfer via Stripe
                                                        </div>
                                                        <div class="cpr-table__col">
                                                            <div class="cb-icon cb-icon--tick"></div>
                                                        </div>
                                                    </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        GoCardless - SEPA, BACS, Autogiro
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        PayPal and Amazon
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        SEPA Credit Transfer
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Adyen- SEPA
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Lifecycle Emails Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Reporting Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Reporting
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        SaaS Metrics
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        A/R Aging
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Revenue Recognition Report
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ASC 606-compliant Revenue Recognition Report (with Softrax)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Account Summary Report
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Deferred Revenue Report
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Abandoned Cart Tracking (API)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Abandoned Cart Reports - Abandoned & Recovered carts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Tax Reports
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Report Builder
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Flexible MRR Calculations
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Reporting Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Fraud Management Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Fraud Management
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Stripe Radar - Transaction level alerts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Stripe Radar - Customer level alerts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        SAML
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Fraud Management Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Dunning Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group" data-load-more='true' data-toBeShown="2">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Dunning
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Dunning for Online and Offline Payments
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Smart Dunning
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Dunning Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Global Taxes Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group" data-load-more='true' data-toBeShown="3">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Global Taxes
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Sales Tax (US, EU VAT & Global Taxes)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Tax Profiles - Multiple
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Inclusive Tax Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Tax Region - Multiple
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Global Taxes Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Internationalization  Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Internationalization 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multicurrency LIMITS
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Exchange Rate Controls (Manual/Auto)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">Auto</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multi-language support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Internationalization  Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Lifecycle Emails Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Lifecycle Emails
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Email Templates
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Segmentation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multiple Reminders/Follow-ups
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Email attachments
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Lifecycle Emails Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            API, DEVOPS & OTHERS Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        API, DEVOPS & OTHERS
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multiple Webhooks, API Filters, and JSON Metadata
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Custom Fields - via UI & API
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        File Attachments
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        User Role Management - Basic
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        User Role Management - Advanced
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Saved Filters
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            API, DEVOPS & OTHERS Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Special Assistance  Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Special Assistance 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Engineering Consultation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        PCI Certification Assistance
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Infrastructure Support (Assistance from our Devops team in special situations)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Migration support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Billing Data Portability including Payment Methods
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>

                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Dedicated CSM
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Special Assistance  Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Support Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Support
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Access to Knowledge Base, Docs & Community Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Email Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">24*7</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Live Chat Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">24*7</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Phone Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">24*5</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Request for Call-back
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">24*5</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Remote assistance
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Technical Account Manager
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Priority Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Support Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Accounting Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Accounting Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Xero
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        QuickBooks 
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        NetSuite
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Intacct
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Accounting Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Tax Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Tax Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        TaxJar
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Avalara AvaTax 
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Avalara Communications Tax
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--cross"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Tax Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Sales, Marketing & Service Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Sales, Marketing & Service Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        CRM : Salesforce, HubSpot, Pipedrive <sup>Beta</sup> 
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Marketing : Mailchimp, Klaviyo
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Helpdesks : Zendesk, Freshdesk, GrooveHQ
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Messaging : Intercom
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Sales, Marketing & Service Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Communication & Collaboration Integrations  Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Data & Collaboration Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Zapier
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Google Analytics & Pixel Tracking
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ShipStation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Slack
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Stitch
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        PieSync
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Communication & Collaboration Integrations  Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Refferral and Affiliate Marketing Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Refferral and Affiliate Marketing Integrations 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ReferralCandy and Friendbuy
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Refersion and LeadDyno
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Refferral and Affiliate Marketing Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Reporting and Analytics Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Reporting and Analytics Integrations 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        RevenueStory Integrated Analytics
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ChartMogul
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Reporting and Analytics Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Dont Delete it's for spacing - Start
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col"></div>
                                                    <div class="cpr-table__col"></div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Dont Delete it's for spacing - End
                                            ============================================== -->
                                        </div>
                                        <!-- =================================================
                                        Card Table Body Part End 
                                        ================================================== -->
                                    </div>
                                    <!-- =====================================================
                                    Table view End
                                    ====================================================== -->
                                </div>
                                <!-- =============================================
                                Scale card end
                                ============================================== -->
                                <!-- =============================================
                                Scale card start
                                ============================================== -->
                                <div class="cpr-card cpr-card--small" data-pricing-card="true" id="enterprise" v-if="pageName === 'Pricing'">
                                    <div class="cpr-card__header">
                                        <div class="cpr-card__fluid">
                                    
                                        <div class="cpr-card__charge cpr-card__charge--alt" style="margin-bottom: 12px; font-size: 28px;">Enterprise</div>
                                        </div>
                                        <div class="cpr-card__actions">
                                        <div class="cpr-card__action">
                                            <a cn-mark-signup="true" href="/schedule-a-demo/" class="cb-btn cb-btn--mobile cb-btn--secondary section1">Talk to sales</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="cpr-card__content">
                                        <div class="cpr-card__desc">Talk to our experts and get <br>tailored pricing for your business.</div>
                                    </div>
                                    <div class="cpr-card__footer" data-pricing-card-action="Enterprise">
                                        <div  class="cpr-card__footer-action">View all features</div>
                                    </div>
                                    <!-- =====================================================
                                    Table view start
                                    ====================================================== -->
                                    <div class="cpr-card__table">
                                        <!-- =================================================
                                        Card Table Body Part Start 
                                        ================================================== -->
                                        <div class="cpr-table__body" data-pricing-table-body>
                                            <!-- =============================================
                                            Invoicing and Subscription Management Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Invoicing and Subscription Management
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Offline Invoicing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Calendar Billing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Usage-based (Metered) Billing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Advance Invoices
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Admin console for subscription management
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Customer portal
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Credit Notes
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Coupons and Discounts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Gift Subscriptions
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Excess & Partial Payments and Unbilled Charges
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Consolidated Invoicing
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Net-D Payment Terms
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Quotes
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Account Hierarchy
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Pricing Models
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Contract terms
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multi Decimal Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Invoicing and Subscription Management Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Payments and Checkout Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Payments and Checkout
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Payment Pages - iFrame embedded, Hosted 
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Full API Checkout, Stripe.js and Chargebee Checkout
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Chargebee.js & Tokenization
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Offline Checkout
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multiple Payment Methods per Customer
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        One click payment method update via secure URL
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Custom domain (White labelling)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Native Mobile SDKs
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Transactional Error Monitoring across gateways
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Chargeback Automation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Payments and Checkout Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Alternative Payment Methods Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Alternative Payment Methods
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ACH
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                        <div class="cpr-table__col">
                                                            ACH Credit Transfer via Stripe
                                                        </div>
                                                        <div class="cpr-table__col">
                                                            <div class="cb-icon cb-icon--tick"></div>
                                                        </div>
                                                    </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        GoCardless - SEPA, BACS, Autogiro
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        PayPal and Amazon
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        SEPA Credit Transfer
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Adyen- SEPA
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div> Deal Creations - Create deals from trials
                                            </div>
                                            <!-- =============================================
                                            Lifecycle Emails Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Reporting Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Reporting
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        SaaS Metrics
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        A/R Aging
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Revenue Recognition Report
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ASC 606-compliant Revenue Recognition Report (with Softrax)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Account Summary Report
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Deferred Revenue Report
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Abandoned Cart Tracking (API)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Abandoned Cart Reports - Abandoned & Recovered carts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Tax Reports
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Report Builder
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Flexible MRR Calculations
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Reporting Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Fraud Management Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Fraud Management
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Stripe Radar - Transaction level alerts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Stripe Radar - Customer level alerts
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        SAML
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Fraud Management Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Dunning Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group" data-load-more='true' data-toBeShown="2">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Dunning
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Dunning for Online and Offline Payments
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Smart Dunning
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Dunning Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Global Taxes Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group" data-load-more='true' data-toBeShown="3">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Global Taxes
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Sales Tax (US, EU VAT & Global Taxes)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Tax Profiles - Multiple
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Inclusive Tax Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Tax Region - Multiple
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Global Taxes Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Internationalization  Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Internationalization 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multicurrency LIMITS
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Exchange Rate Controls (Manual/Auto)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">Auto</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multi-language support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Internationalization  Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Lifecycle Emails Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Lifecycle Emails
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Email Templates
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Segmentation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multiple Reminders/Follow-ups
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Email attachments
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Lifecycle Emails Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            API, DEVOPS & OTHERS Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        API, DEVOPS & OTHERS
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Multiple Webhooks, API Filters, and JSON Metadata
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Custom Fields - via UI & API
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        File Attachments
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        User Role Management - Basic
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        User Role Management - Advanced
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Saved Filters
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            API, DEVOPS & OTHERS Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Special Assistance  Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Special Assistance 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Engineering Consultation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        PCI Certification Assistance
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Infrastructure Support (Assistance from our Devops team in special situations)
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Migration support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Billing Data Portability including Payment Methods
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>

                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Dedicated CSM
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Special Assistance  Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Support Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Support
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Access to Knowledge Base, Docs & Community Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Email Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">24*7</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Live Chat Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">24*7</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Phone Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">24*7</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Request for Call-back
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--text">24*7</div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Remote assistance
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Technical Account Manager
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Priority Support
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Support Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Accounting Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Accounting Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Xero
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        QuickBooks 
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        NetSuite
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Intacct
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Accounting Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Tax Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Tax Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        TaxJar
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Avalara AvaTax 
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Avalara Communications Tax
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Tax Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Sales, Marketing & Service Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Sales, Marketing & Service Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        CRM : Salesforce, HubSpot, Pipedrive <sup>Beta</sup>  
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Marketing : Mailchimp, Klaviyo
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Helpdesks : Zendesk, Freshdesk, GrooveHQ
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Messaging : Intercom
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Sales, Marketing & Service Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Communication & Collaboration Integrations  Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Data & Collaboration Integrations
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Zapier
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Google Analytics & Pixel Tracking
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ShipStation
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Slack
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Stitch
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        PieSync
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Communication & Collaboration Integrations  Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Refferral and Affiliate Marketing Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Refferral and Affiliate Marketing Integrations 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ReferralCandy and Friendbuy
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        Refersion and LeadDyno
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Refferral and Affiliate Marketing Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Reporting and Analytics Integrations Part Start 
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__title">
                                                    <div class="cpr-table__col">
                                                        Reporting and Analytics Integrations 
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        RevenueStory Integrated Analytics
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col">
                                                        ChartMogul
                                                    </div>
                                                    <div class="cpr-table__col">
                                                        <div class="cb-icon cb-icon--tick"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Reporting and Analytics Integrations Part End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Dont Delete it's for spacing - Start
                                            ============================================== -->
                                            <div class="cpr-table__group">
                                                <div class="cpr-table__row">
                                                    <div class="cpr-table__col"></div>
                                                    <div class="cpr-table__col"></div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Dont Delete it's for spacing - End
                                            ============================================== -->
                                        </div>
                                        <!-- =================================================
                                        Card Table Body Part End 
                                        ================================================== -->
                                    </div>
                                    <!-- =====================================================
                                    Table view End
                                    ====================================================== -->
                                </div>
                                <!-- =============================================
                                Scale card end
                                ============================================== -->
                                <!--<div class="cpr-card" style="box-shadow: none">
                                    <div class="cpr-message">
                                        <div>High ARPU?</div>
                                        <div class="cpr-message__mute">
                                            For invoice-based pricing 
                                            <a href="/pricing-enquiry/">
                                                Contact us &rarr;
                                            </a>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                            <!-- =================================================
                            Tab Content For Mobile and ipad end
                            ================================================== -->
                            <!-- =========================================================
                            Tab Content Part End 
                            ========================================================== -->
                        </div>
                        <!-- ===================================================================
                        Tab Part End 
                        ==================================================================== -->
                    </div>
                </div>
            </div>
        </section>
        <!-- =================================================================================
        Content Part End 
        ================================================================================== -->

    </section>
</template>
<script>
const axios = require('axios');
export default {
    props: ['pageName'],
    data() {
        return {
            showAllFeatures: false,
            countryCode: 'US',
            currencySymbol: 'USD ', // All Places
            riseAmount: '249', // Growing business rise amount
            scaleAmount: '549', // Growing business scale amount
            riseRevenue: '600K', // Growing business rise revenue
            scaleRevenue:  '900K', // Growing business scale revenue
            risePercentage: '0.6%', // Growing business rise percentage
            scalePercentage: '0.9%', // Growing business scale percentage
            riseTooltipContent: 'Overages are charged on monthly revenue, once the annual revenue limit is met. For USD 100K processed after exceeding the annual limit of USD 600K, the overage is calculated as 0.6% of USD 100K = USD 600.', // Tooltip Rise
            scaleTooltipContent: 'Overages are charged on monthly revenue, once the annual revenue limit is met. For USD 100K processed after exceeding the annual limit of USD 900K, the overage is calculated as 0.9% of USD 100K = USD 900.', // Tooltip Scale
            isYearly: this.pageName === 'Launch' ? false : true,
            launchRevenue: '50k',
            launchTooltipContent: 'Once you\'ve invoiced a total value of USD 50K, you will be auto-converted to USD 99/mo pricing with a 0.5% overage fee (applicable if your revenue exceeds 25K a month). For example, for USD 35K in monthly revenue, overage is calculated as 0.5% of (USD 35K - USD 25K) + USD 99, which is USD 149.' // Tooltip Launch
        }
    },
    methods: {
        changeCurrencyCode(event) {
            this.currencySymbol = event.target.value
            this.changePrice()
        },
        changePrice(){
            //console.log(this.currencySymbol + "AyyaSamy")
            let self = this;
            if(this.currencySymbol == 'USD '){
                this.currencySymbol = 'USD '
                this.riseAmount = this.isYearly ? '249' : '299'
                this.scaleAmount = this.isYearly ? '549' : '599'
                this.riseRevenue =  this.isYearly ? '600K' : '50K'
                this.scaleRevenue =  this.isYearly ? '900K' : '75K'
                this.risePercentage = '0.6%'
                this.scalePercentage = '0.9%'
                this.riseTooltipContent = this.isYearly ? 'Overages are charged on monthly revenue, once the annual revenue limit is met. For USD 100K processed after exceeding the annual limit of USD 600K, the overage is calculated as 0.6% of USD 100K = USD 600.' : 'For a USD 90k monthly revenue, overage is calculated as 0.6% of (USD 90k minus USD 50k) + USD 299 (base fee), which is USD 539 per month.'
                this.scaleTooltipContent = this.isYearly ? 'Overages are charged on monthly revenue, once the annual revenue limit is met. For USD 100K processed after exceeding the annual limit of USD 900K, the overage is calculated as 0.9% of USD 100K = USD 900.' : 'For a USD 120k monthly revenue, overage is calculated as 0.9% of (USD 120k minus USD 75k) + USD 599 (base fee), which is USD 1004 per month.'
                this.launchRevenue = '50k'
                this.launchTooltipContent = 'Once you\'ve invoiced a total value of USD 50K, you will be auto-converted to USD 99/mo pricing with a 0.5% overage fee (applicable if your revenue exceeds 25K a month). For example, for USD 35K in monthly revenue, overage is calculated as 0.5% of (USD 35K - USD 25K) + USD 99, which is USD 149.'
                $(".cpr-dropdown__select").val(this.currencySymbol);
            }
            if(this.currencySymbol == 'EUR '){
                this.currencySymbol = 'EUR '
                this.riseAmount = this.isYearly ? '249' : '299'
                this.scaleAmount = this.isYearly ? '549' : '599'
                this.riseRevenue =  this.isYearly ? '600K' : '50K'
                this.scaleRevenue =  this.isYearly ? '900K' : '75K'
                this.risePercentage = '0.6%'
                this.scalePercentage = '0.9%'
                this.riseTooltipContent = this.isYearly ? 'Overages are charged on monthly revenue, once the annual revenue limit is met. For EUR 100K processed after exceeding the annual limit of EUR 600K, the overage is calculated as 0.6% of EUR 100K = EUR 600.' : 'For a EUR 90k monthly revenue, overage is calculated as 0.6% of (EUR 90k minus EUR 50k) + EUR 299 (base fee), which is EUR 539 per month.'
                this.scaleTooltipContent = this.isYearly ? 'Overages are charged on monthly revenue, once the annual revenue limit is met. For EUR 100K processed after exceeding the annual limit of EUR 900K, the overage is calculated as 0.9% of EUR 100K = EUR 900.' : 'For a EUR 120k monthly revenue, overage is calculated as 0.9% of (EUR 120k minus EUR 75k) + EUR 599 (base fee), which is EUR 1004 per month.'
                this.launchRevenue = '45k'
                this.launchTooltipContent = 'Once you\'ve invoiced a total value of EUR 45K, you will be auto-converted to EUR 99/mo pricing with a 0.5% overage fee (applicable if your revenue exceeds 25K a month). For example, for EUR 35K in monthly revenue, overage is calculated as 0.5% of (EUR 35K - EUR 25K) + EUR 99, which is EUR 149.'
                $(".cpr-dropdown__select").val(this.currencySymbol);
            }
            if(this.currencySymbol == 'GBP '){
                this.currencySymbol = 'GBP '
                this.riseAmount = this.isYearly ? '199' : '249'
                this.scaleAmount = this.isYearly ? '379' : '449'
                this.riseRevenue =  this.isYearly ? '480K' : '40K'
                this.scaleRevenue =  this.isYearly ? '600K' : '50K'
                this.risePercentage = '0.6%'
                this.scalePercentage = '0.9%'
                this.riseTooltipContent = this.isYearly ? 'Overages are charged on monthly revenue, once the annual revenue limit is met. For GBP 100K processed after exceeding the annual limit of GBP 480K, the overage is calculated as 0.6% of GBP 100K = GBP 600.' : 'For a GBP 90k monthly revenue, overage is calculated as 0.6% of (GBP 90k minus GBP 40k) + GBP 249 (base fee), which is GBP 549 per month.'
                this.scaleTooltipContent = this.isYearly ? 'Overages are charged on monthly revenue, once the annual revenue limit is met. For GBP 100K processed after exceeding the annual limit of GBP 600K, the overage is calculated as 0.9% of GBP 100K = GBP 900.' : 'For a GBP 120k monthly revenue, overage is calculated as 0.9% of (GBP 120k minus GBP 50k) + GBP 449 (base fee), which is GBP 1079 per month.'
                this.launchRevenue = '40k'
                this.launchTooltipContent = 'Once you\'ve invoiced a total value of GBP 40K, you will be auto-converted to GBP 89/mo pricing with a 0.5% overage fee (applicable if your revenue exceeds 20K a month). For example, for GBP 30K in monthly revenue, overage is calculated as 0.5% of (GBP 30K - GBP 20K) + GBP 89, which is GBP 139.'
                $(".cpr-dropdown__select").val(this.currencySymbol);
            }
            if(this.currencySymbol == 'AUD '){
                this.currencySymbol = 'AUD '
                this.riseAmount = this.isYearly ? '359' : '419'
                this.scaleAmount = this.isYearly ? '729' : '799'
                this.riseRevenue =  this.isYearly ? '840K' : '70K'
                this.scaleRevenue =  this.isYearly ? '1.2M' : '100K'
                this.risePercentage = '0.6%'
                this.scalePercentage = '0.9%'
                this.riseTooltipContent = this.isYearly ? 'Overages are charged on monthly revenue, once the annual revenue limit is met. For AUD 100K processed after exceeding the annual limit of AUD 840K, the overage is calculated as 0.6% of AUD 100K = AUD 600.' : 'For a AUD 90k monthly revenue, overage is calculated as 0.6% of (AUD 90k minus AUD 70k) + AUD 419 (base fee), which is AUD 539 per month.'
                this.scaleTooltipContent = this.isYearly ? 'Overages are charged on monthly revenue, once the annual revenue limit is met. For AUD 100K processed after exceeding the annual limit of AUD 1.2M, the overage is calculated as 0.9% of AUD 100K = AUD 900.' : 'For a AUD 120k monthly revenue, overage is calculated as 0.9% of (AUD 120k minus AUD 100k) + AUD 799 (base fee), which is AUD 979 per month.'
                this.launchRevenue = '70k'
                this.launchTooltipContent = 'Once you\'ve invoiced a total value of AUD 70K, you will be auto-converted to AUD 139/mo pricing with a 0.5% overage fee (applicable if your revenue exceeds 35K a month). For example, for AUD 45K in monthly revenue, overage is calculated as 0.5% of (AUD 45K - AUD 35K) + AUD 139 which is AUD 189.'
                $(".cpr-dropdown__select").val(this.currencySymbol);
            }
            if(this.currencySymbol == 'CAD '){
                this.currencySymbol = 'CAD '
                this.riseAmount = this.isYearly ? '329' : '399'
                this.scaleAmount = this.isYearly ? '599' : '699'
                this.riseRevenue =  this.isYearly ? '720K' : '60K'
                this.scaleRevenue =  this.isYearly ? '1.2M' : '100K'
                this.risePercentage = '0.6%'
                this.scalePercentage = '0.9%'
                this.riseTooltipContent = this.isYearly ? 'Overages are charged on monthly revenue, once the annual revenue limit is met. For CAD 100K processed after exceeding the annual limit of CAD 720K, the overage is calculated as 0.6% of CAD 100K = CAD 600.' : 'For a CAD 90k monthly revenue, overage is calculated as 0.6% of (CAD 90k minus CAD 60k) + CAD 399 (base fee), which is CAD 579 per month.'
                this.scaleTooltipContent = this.isYearly ? 'Overages are charged on monthly revenue, once the annual revenue limit is met. For CAD 100K processed after exceeding the annual limit of CAD 1.2M, the overage is calculated as 0.9% of CAD 100K = CAD 900.' : 'For a CAD 120k monthly revenue, overage is calculated as 0.9% of (CAD 120k minus CAD 100k) + CAD 699 (base fee), which is CAD 879 per month.'
                this.launchRevenue = '65k'
                this.launchTooltipContent = 'Once you\'ve invoiced a total value of CAD 65K, you will be auto-converted to CAD 129/mo pricing with a 0.5% overage fee (applicable if your revenue exceeds 30K a month). For example, for CAD 40K in monthly revenue, overage is calculated as 0.5% of (CAD 40K - CAD 30K) + CAD 129 which is CAD 179.'
                $(".cpr-dropdown__select").val(this.currencySymbol);
            }
            setTimeout(function(){
                // console.log("Show All Features "+ self.showAllFeatures + ", Body Active Length " + $('.cpr-table__body--active').length)
                if(self.showAllFeatures && $('.cpr-table__body--active').length == 0){
                    $('[allFeatures]').addClass('cpr-table__body--active');
                }
                $('[data-toggle="tooltip"]').each(function(){
                    if($(this).attr('title')){
                        $(this).attr('data-original-title',$(this).attr('title')).attr('title','')
                    }
                })
            }, 800)
        }
    },
    // jQuery interaction should be placed inside the mounted method
    mounted() {
        this.changePrice()
        let defaultData = this
        axios.get('https://freegeoip.live/json/')
        .then(function (response) {
            defaultData.countryCode = response.data.country_code;
            //console.log(this.countryCode + "AyyaSamy")
            var euroCountryList = ['CY','GR','EE','LV','LT','SJ','MD','BY','FI','AX','UA','MK','HU','BG','AL','PL','RO','XK','RU','PT','GI','ES','MT','FO','DK','IS','CH','SE','NL','AT','BE','DE','LU','IE','MC','FR','AD','LI','JE','IM','GG','SK','CZ','NO','VA','SM','IT','SI','ME','HR','BA','RS']
            if(euroCountryList.indexOf(''+defaultData.countryCode+'') > -1){
                defaultData.currencySymbol = 'EUR ';
            }
            if(defaultData.countryCode == 'US'){
                defaultData.currencySymbol = 'USD ';
            }
            if(defaultData.countryCode == 'GB'){
                defaultData.currencySymbol = 'GBP ';
            }
            if(defaultData.countryCode == 'AU'){
                defaultData.currencySymbol = 'AUD ';
            }
            if(defaultData.countryCode == 'CA'){
                defaultData.currencySymbol = 'CAD ';
            }
            defaultData.changePrice()
            setTimeout(function(){
                $('[data-toggle="tooltip"]').tooltip({
                    'placement': 'bottom'
                });
            }, 500)
        })
        .catch(function (error) {
            console.log(error)
        });

        //For tooltip
        $('[data-toggle="tooltip"]').tooltip({
            'placement': 'bottom'
        });
        //For show all features
        $('[showAllFeatures]').on('click', function(){
            $(this).parents('.cpr-table__row').remove();
            defaultData.showAllFeatures = true
            $('[allFeatures]').addClass('cpr-table__body--active');
        })

        //For mobile show/hide all feature
        $('[data-pricing-card-action]').click(function() {
            $('[data-pricing-card]').removeClass('cpr-card--active');
            $(this).closest('[data-pricing-card]').addClass('cpr-card--active');
            $("#cb-js-pricing-mheader").addClass("l-main__mfixed--active");
            $("#cpr-mheader-control").val($(this).attr('data-pricing-card-action'));
        });
        $("#cpr-mheader-control").change(function() {
            var temp = $("#cpr-mheader-control").val().toLowerCase();
            $('[data-pricing-card]').removeClass('cpr-card--active');
            $("#"+temp).addClass('cpr-card--active');
            $('html, body').animate({scrollTop: $("#"+temp).offset().top - 100}, 200);
        });
        
        /*Smooth Scrolling*/

        var talkToOurConsultants = document.querySelector('.cpr-link.cpr-link--icon');
        talkToOurConsultants.classList.add('section1');

        var mobileContactSales = [... document.querySelectorAll('.cpr-link.cpr-link--icon')];
        var mobileContactTarget = mobileContactSales[3];
        
        mobileContactTarget.classList.add('section1'); 
        $('.section1').click(function($e) {
        $e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.section2').offset().top
        }, 1000);
        });  
        
        /*Smooth Scrolling*/
    }
}
</script>
<style>
    .cb-btn {
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        line-height: 40px;
        height: 42px;
        display: inline-block;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
    }

    @media (min-width: 1025px) {
        .cb-btn {
            padding-left: 40px;
            padding-right: 40px;
        }
    }

    @media (max-width: 1024px) {
        .cb-btn {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    .cb-btn:hover,
    .cb-btn:focus {
        text-decoration: none;
        transform: scale(1.02);
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
        box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.12), 0 14px 24px 0 rgba(0, 0, 0, 0.12);
    }

    .cb-btn--primary {
        background-color: #FC5500;
    }

    .cb-btn--primary:hover,
    .cb-btn--primary:focus {
        color: #fff;
    }

    .cb-btn--secondary {
        background-color: #3A008C;
    }

    .cb-btn--secondary:hover,
    .cb-btn--secondary:focus {
        color: #fff;
    }

    .cb-btn--gsecondary {
        background-color: transparent;
        color: #3A008C;
        box-shadow: 0 0 0 1px #3A008C inset;
        transition: 0.3s ease-out;
    }

    .cb-btn--gsecondary:hover,
    .cb-btn--gsecondary:focus {
        color: #fff;
        background-color: #3A008C;
        transform: scale(1);
    }

    .cb-btn--mobile {
        height: 34px;
        line-height: 33px;
        padding-left: 18px;
        padding-right: 18px;
        min-width: inherit;
    }

    .cb-btn--lg {
        line-height: 50px;
        height: 52px;
        font-size: 16px;
    }

    .cb-btn--suffix {
        -webkit-transition-property: padding-left, padding-right;
        -o-transition-property: padding-left, padding-right;
        transition-property: padding-left, padding-right;
        -webkit-transition-duration: 0.3s, 0.3s;
        -o-transition-duration: 0.3s, 0.3s;
        transition-duration: 0.3s, 0.3s;
    }

    .cb-btn--suffix:after {
        content: '';
        width: 12px;
        height: 10px;
        display: inline-block;
        position: absolute;
        top: 50%;
        right: -20px;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        background: url('/static/website/version/images/icon/arrow/cn-arrow-white.svg') no-repeat;
        background-size: contain !important;
        -webkit-transition: right 0.3s;
        -o-transition: right 0.3s;
        transition: right 0.3s;
    }

    .cb-btn--suffix:hover,
    .cb-btn--suffix:focus {
        padding-left: 34px;
        padding-right: 46px;
    }

    .cb-btn--suffix:hover:after,
    .cb-btn--suffix:focus:after {
        right: 24px;
    }

    .cb-btn--shadow {
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.24);
    }

    .cb-btn--shadow:hover,
    .cb-btn--shadow:focus {
        box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.12), 0 14px 24px 0 rgba(0, 0, 0, 0.12);
    }

    .cb-icon {
        width: 15px;
        height: 15px;
        display: inline-block;
        background-repeat: no-repeat;
        background-size: 32px;
    }

    .cb-icon--tick {
        background-image: url("/static/website/version/images/pricing/icon/icon-status.svg");
        background-position: top right;
    }

    .cb-icon--untick {
        background-image: url("/static/website/version/images/pricing/cb-untick.svg");
    }

    .cb-icon--cross {
        background-image: url("/static/website/version/images/pricing/icon/icon-status.svg");
    }

    .cb-icon--text {
        font-size: 14px;
        line-height: normal;
        width: auto;
    }

    .l-main__fixed {
        position: fixed;
        top: -120px;
        left: 0;
        right: 0;
        padding: 12px 24px;
        z-index: 9999;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s cubic-bezier(0.45, 0.15, 0.6, 0.88);
    }

    .l-main__fixed--brand {
        background: #785EFF;
    }

    .l-main__fixed--active {
        opacity: 1;
        top: 0;
        visibility: visible;
    }
    .cpr-link--plevel{
        font-size: 16px;
        background: #fff;
        cursor: pointer;
        display: inline-block;
        padding: 0 15px;
        position: relative;
        transform: translate(0px, 50%);
    }
     .cpr-link--plevel:after{
        transform: rotate(90deg);
     }
     .cpr-card__charge--alt:before,
     .cpr-card__charge--alt:after{
        display: none;
     }

</style>