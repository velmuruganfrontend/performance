<template>
    <section class="rp-blk" id="revenue-operations-menu">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="cb-card">
                        <div name="cb-form" class="cb-form"> 
                            <div class="cb-form-screen__one" v-if="activeScreen === 1">
                                <div class="cb-form__header">
                                    <div class="cb-form__title">
                                        Revenue Operations<br class="visible-xs"> à la carte
                                    </div>
                                    <div class="cb-form__desc">
                                        You are just a few steps away from fixing all the leaks and gaps in your revenue cycle.
                                    </div>
                                </div>
                                <div class="cb-form-medias">
                                    <div class="cb-form-media">
                                        <figure class="cb-form-media__figure">
                                            <img src="/static/website/version/images/revenue-operations/icons/lens-icon.svg" class="img-responsive" />
                                        </figure>
                                        <div class="cb-form-media__title">
                                            Step 1: Take a look at our <br>suite of capabilities
                                        </div>
                                        <!--<div class="cb-form-media__desc">
                                            Step One: Choose from Chargebee’s exhaustive list of features
                                        </div>-->
                                    </div>
                                    <div class="cb-form-media">
                                        <figure class="cb-form-media__figure">
                                            <img src="/static/website/version/images/revenue-operations/icons/pick-icon.svg" class="img-responsive" />
                                        </figure>
                                        <div class="cb-form-media__title">
                                            Step 2: Pick out all the <br>ones you need
                                        </div>
                                        <!--<div class="cb-form-media__desc">
                                            Step 2: Enter your work email, name and phone number.
                                        </div>-->
                                    </div>
                                    <div class="cb-form-media">
                                        <figure class="cb-form-media__figure">
                                            <img src="/static/website/version/images/revenue-operations/icons/call-icon.svg" class="img-responsive" />
                                        </figure>
                                        <div class="cb-form-media__title">
                                            Step 3: Get a personalised consultation within 48hrs 
                                        </div>
                                        <!--<div class="cb-form-media__desc">
                                            Step 3: Our sales executive calls you in less than 24 hours.
                                        </div>-->
                                    </div>
                                </div>
                                <div class="cb-form__title hidden-xs" style="margin-bottom: 40px;font-size: 20px;">
                                    Make the most out of your Revenue Operations
                                </div>
                                <div class="cb-form__actions">
                                    <div class="cb-form__action">
                                        <a href="javascript:void(0)" v-on:click="activeScreen=2" class="cb-form__link">Build your RevOps Suite</a>
                                    </div>
                                </div>
                            </div>  
                            <div class="cb-form-screen__two" v-if="activeScreen === 2">
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingOne">
                                            <h4 class="panel-title">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <span class="more-less glyphicon-chevron-up"></span>
                                                    Billing Automation
                                                    <span class="hidden-xs" v-if="info.billingAutomation.length">{{ info.billingAutomation.length }} Selected item(s) </span>
                                                    <span class="hidden-xs hidden-sm" v-else>Run your entire recurring billing process on auto-pilot</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse in" aria-expanded="true">
                                            <div class="panel-body">
                                                <div class="cb-form__options">
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Integrate with Multiple PGs" v-model="info.billingAutomation" hover="Connect with 23+ payment gateways all around the world, including Stripe, Braintree, Adyen, etc.," />
                                                            <span>
                                                                Integrate with Multiple PGs
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Schedule Billing Dates" v-model="info.billingAutomation" hover="Choose the billing date (weekly, monthly and yearly) for your customers, regardless of the date they sign-up." />
                                                            <span>
                                                                Schedule Billing Dates
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Multiple Payment Methods" v-model="info.billingAutomation" hover="From Credit Cards to Direct Debit, enable multiple online and offline payment methods for your customers" />
                                                            <span>
                                                                Multiple Payment Methods
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Consolidate Invoices" v-model="info.billingAutomation" hover="Combine all individual invoices generated into one single invoice, and send it across to your customers" />
                                                            <span>
                                                                Consolidate Invoices
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Prorate for Plan Changes" v-model="info.billingAutomation" hover="Adjust your customer's bill amount to reflect any plan changes in the middle of the billing cycle" />
                                                            <span>
                                                                Prorate for Plan Changes
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Offer Advance Invoice" v-model="info.billingAutomation" hover="Raise invoices in advance for one or more subscriptions from your customers" />
                                                            <span>
                                                                Offer Advance Invoice
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Support for Multi-currency" v-model="info.billingAutomation" hover="Create plans and accept payments in multiple currencies" />
                                                            <span>
                                                                Support for Multi-currency
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Support for Multiple Taxes" v-model="info.billingAutomation" hover="Apply global taxes like US Sales Tax, EU VAT, GST etc., for all your invoices" />
                                                            <span>
                                                                Support for Multiple Taxes
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Generate Recurring Invoices" v-model="info.billingAutomation" hover="Create and customize invoices, add or remove line items, issue credits, refunds and more." />
                                                            <span>
                                                                Generate Recurring Invoices
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingTwo">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <span class="more-less glyphicon-chevron-down"></span>
                                                    Subscription Management
                                                    <span class="hidden-xs" v-if="info.subscriptionManagement.length">{{ info.subscriptionManagement.length }} Selected item(s)</span>
                                                    <span class="hidden-xs hidden-sm" v-else>Get visibility into the complete lifecycle of your customers</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="cb-form__options">
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Setup and Manage Trials" v-model="info.subscriptionManagement" hover="Extend trials, set up reminders, and let customers easily move from trial to paid plans" />
                                                            <span>
                                                                Setup and Manage Trials
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Setup Pricing Models" v-model="info.subscriptionManagement" hover="Enable custom pricing, grandfathering, bill your customers based on usage and more" />
                                                            <span>
                                                                Setup Pricing Models
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Automate Payment Reconciliation" v-model="info.subscriptionManagement" hover="Reconcile Gateway transactions with bank statements with One Click Automation" />
                                                            <span>
                                                                Automate Payment Reconciliation
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Offer Payment grace period" v-model="info.subscriptionManagement" hover="Use 'Net D' to let customers pay for their outstanding invoices within a specific period of time" />
                                                            <span>
                                                                Offer Payment grace period
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Create Account Hierarchy Structure" v-model="info.subscriptionManagement" hover="Model entire customer org charts into logical parent-child relationships and set billing preferences within them" />
                                                            <span>
                                                                Create Account Hierarchy Structure
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Customize Billing Logic" v-model="info.subscriptionManagement" hover="Choose a customized billing date and frequency for every single customer" />
                                                            <span>
                                                                Customize Billing Logic
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Offer Hosted Checkout" v-model="info.subscriptionManagement" hover="Provide your customers with a smooth and seamless checkout experience" />
                                                            <span>
                                                                Offer Hosted Checkout
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Upsell/Cross-sell with Addons" v-model="info.subscriptionManagement" hover="Add more value to your product & upsell, without having to set up separate plans" />
                                                            <span>
                                                                Upsell/Cross-sell with Addons
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Bill based on Usage" v-model="info.subscriptionManagement" hover="Charge your customers solely based on their usage, charge on top of a base price, and more." />
                                                            <span>
                                                                Bill based on Usage
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Manage Pricing Bundles" v-model="info.subscriptionManagement" hover="Get the ability to define associations between plans and addons with flexible pricing bundles" />
                                                            <span>
                                                                Manage Pricing Bundles
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Create and Manage Plans" v-model="info.subscriptionManagement" hover="Create different plans and pricing models designed to serve different personas" />
                                                            <span>
                                                                Create and Manage Plans
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Offer Discounts & Coupons" v-model="info.subscriptionManagement" hover="Build effective discount and coupon campaigns, track them, and drive more revenue" />
                                                            <span>
                                                                Offer Discounts & Coupons
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Send Contextual Emails" v-model="info.subscriptionManagement" hover="Send powerful, customized, and contextual emails all the way to your customer's inbox" />
                                                            <span>
                                                                Send Contextual Emails
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Customize Checkout Pages" v-model="info.subscriptionManagement" hover="From providing multiple payment methods to minimizing form fields, offer a frictionless checkout experience" />
                                                            <span>
                                                                Customize Checkout Pages
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Customer Self-service Portal" v-model="info.subscriptionManagement" hover="Let customers manage their accounts, upgrade/downgrade, update payment information, download invoices, etc.," />
                                                            <span>
                                                                Customer Self-service Portal
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingThree">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <span class="more-less glyphicon-chevron-down"></span>
                                                    Revenue Operations
                                                    <span class="hidden-xs" v-if="info.revenueOperations.length">{{ info.revenueOperations.length }} Selected item(s) </span>
                                                    <span class="hidden-xs hidden-sm" v-else>Align all your revenue functions while driving efficiency throughout</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="cb-form__options cb-form__options--gap">
                                                    <div class="cb-form__options--group">
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label cb-form__label--title">
                                                                Marketing
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Experiment with Discounts" v-model="info.revenueOperations" hover="Play around with different discount types - customize the duration, value of the discount, etc.," />
                                                                <span>
                                                                    Experiment with Discounts
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Generate Bulk Coupons" v-model="info.revenueOperations" hover="Drill-down to the level of line-items, and decide the products on which coupons need to be applied" />
                                                                <span>
                                                                    Generate Bulk Coupons
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Experiment with Trials" v-model="info.revenueOperations" hover="Offer trials with or without credit card details, experiment with trial duration and more" />
                                                                <span>
                                                                    Experiment with Trials
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Experiment with Pricing" v-model="info.revenueOperations" hover="Tailor your pricing based on your core differentiating features that grow with your customers" />
                                                                <span>
                                                                    Experiment with Pricing
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Track Cart Abandonment" v-model="info.revenueOperations" hover="Improve sales conversions by tracking lost revenue and dropped checkouts" />
                                                                <span>
                                                                    Track Cart Abandonment
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>


                                                    <div class="cb-form__options--group">
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label cb-form__label--title">
                                                                Sales
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Quotes by Chargebee" v-model="info.revenueOperations" hover="Allow your customers to carry out internal purchase approval processes" />
                                                                <span>
                                                                    Quotes by Chargebee
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Salesforce Quote-to-Cash" v-model="info.revenueOperations" hover="Sync your Salesforce account with Chargebee to streamline and automate your quote-to-cash process" />
                                                                <span>
                                                                    Salesforce Quote-to-Cash
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Accommodate Price Overrides" v-model="info.revenueOperations" hover="Utilize Price Override feature to handle customer-specific pricing for your customers" />
                                                                <span>
                                                                    Accommodate Price Overrides
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Enable Contract Flexibility" v-model="info.revenueOperations" hover="Support ad-hoc requests, extend contract duration, billing dates, and more" />
                                                                <span>
                                                                    Enable Contract Flexibility
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>


                                                    <div class="cb-form__options--group">
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label cb-form__label--title">
                                                                Support & Success
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Notifications within your Product" v-model="info.revenueOperations" hover="Alert customers contextually in terms of card expiry, pending payments, etc.," />
                                                                <span>
                                                                    Notifications within your Product
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Enable Expansion Opportunities" v-model="info.revenueOperations" hover="Enable upselling and cross-selling opportunities with upgrade options and add-ons for your customers" />
                                                                <span>
                                                                    Enable Expansion Opportunities
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Contextual In-App Messaging" v-model="info.revenueOperations" hover="Aid your support team to carry out in-app conversations about user subscriptions" />
                                                                <span>
                                                                    Contextual In-App Messaging
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>


                                                    <div class="cb-form__options--group">
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label cb-form__label--title">
                                                                Finance
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Recognize your Revenue" v-model="info.revenueOperations" hover="Address complexities in accounting and finance for your business with ASC 606 and IFRS 15 compliant RevRec" />
                                                                <span>
                                                                    Recognize your Revenue
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Report on Deferred Revenue" v-model="info.revenueOperations" hover="Track the balance amount to be recognized every month with day-based revenue calculation" />
                                                                <span>
                                                                    Report on Deferred Revenue
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Report on Account Summary" v-model="info.revenueOperations" hover="Report on your sales, discounts, bad debts, aging balance, and reversals" />
                                                                <span>
                                                                    Report on Account Summary
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Recover Potential Revenue" v-model="info.revenueOperations" hover="Eliminate payment-related involuntary churn and recover lost opportunities" />
                                                                <span>
                                                                    Recover Potential Revenue
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Smart Dunning Suite" v-model="info.revenueOperations" hover="Recover potentially lost revenue on autopilot - customize retries, emails, and the entire sequence" />
                                                                <span>
                                                                    Smart Dunning Suite
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Intelligent Routing" v-model="info.revenueOperations" hover="Connect multiple accounts of the same payment gateway and configure rules for selecting gateways" />
                                                                <span>
                                                                    Intelligent Routing
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingFour">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    <span class="more-less glyphicon-chevron-down"></span>
                                                    Subscription Analytics
                                                    <span class="hidden-xs" v-if="info.subscriptionAnalytics.length">{{ info.subscriptionAnalytics.length }} Selected item(s) </span>
                                                    <span class="hidden-xs hidden-sm" v-else>Identify growth-levers with a 360° view of your entire business</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="cb-form__options">
                                                    <div class="cb-form__options--group">
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label cb-form__label--title">
                                                                Metrics
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Bookings and Cashflow" v-model="info.subscriptionAnalytics" hover="Track and account all generated invoices over a period of time" />
                                                                <span>
                                                                    Bookings and Cashflow
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Revenue Analytics" v-model="info.subscriptionAnalytics" hover="Estimate your revenue growth with key metrics including MRR, Expansions, Upgrades, Downgrades, etc.," />
                                                                <span>
                                                                    Revenue Analytics
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Churn Analytics" v-model="info.subscriptionAnalytics" hover="Calculate the rate at which customers cancel their subscriptions, with key metrics like Subscription Churn, Customer Churn, and more" />
                                                                <span>
                                                                    Churn Analytics
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="LTV:CAC" v-model="info.subscriptionAnalytics" hover="Compare the value generated from your customers over their lifetime" />
                                                                <span>
                                                                    LTV:CAC
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Signups to Activation" v-model="info.subscriptionAnalytics" hover="Measure the performance of your product right from the moment your customers start using it" />
                                                                <span>
                                                                    Signups to Activation
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Leakage Analytics" v-model="info.subscriptionAnalytics" hover="Get to the root cause of your SaaS finance pains with in-depth leakage and A/R reports" />
                                                                <span>
                                                                    Leakage Analytics
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>


                                                    <div class="cb-form__options--group">
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label cb-form__label--title">
                                                                Reports
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Churn Breakdown Report" v-model="info.subscriptionAnalytics" hover="Retain better with alternatives to cancellation by proactively driving subscription extensions and reactivations" />
                                                                <span>
                                                                    Churn Breakdown Report
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Cohort Analysis" v-model="info.subscriptionAnalytics" hover="Identify your growth and risk stats by analyzing time-bound and funnel-based cohorts" />
                                                                <span>
                                                                    Cohort Analysis
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Custom Reporting" v-model="info.subscriptionAnalytics" hover="Analyze your business growth with custom reports tuned to your requirements" />
                                                                <span>
                                                                    Custom Reporting
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Filters and Dashboards" v-model="info.subscriptionAnalytics" hover="Set up filters and drilled-down dashboards to identify crucial pain points" />
                                                                <span>
                                                                    Filters and Dashboards
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="cb-form__option">
                                                            <label class="cb-form__label">
                                                                <input class="" type="checkbox" value="Segment Based Reports" v-model="info.subscriptionAnalytics" hover="Improve your business health, with reports based on sliced and diced segments" />
                                                                <span>
                                                                    Segment Based Reports
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingFive">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    <span class="more-less glyphicon-chevron-down"></span>
                                                    Integrations
                                                    <span class="hidden-xs" v-if="info.integrations.length">{{ info.integrations.length }} Selected item(s) </span>
                                                    <span class="hidden-xs hidden-sm" v-else>Sync & streamline your data with integrations built for your favorite platforms</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFive" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="cb-form__options">
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="HubSpot" v-model="info.integrations" hover="Get a complete view of the subscription truth of the customer, with 50+ subscription data points like plan information, renewal dates, billing dates, etc.," />
                                                            <span>
                                                                HubSpot
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Baremetrics" v-model="info.integrations" hover="Uncover growth opportunities, get answers to your metrics-related questions and run sophisticated analyses with ease" />
                                                            <span>
                                                                Baremetrics
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Sage Intacct" v-model="info.integrations" hover="Implement the financial controls and processes you need with enterprise-grade accounting easily" />
                                                            <span>
                                                                Sage Intacct
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Oracle NetSuite" v-model="info.integrations" hover="Integrate deep subscription management, billing & invoicing engine and NetSuite’s enterprise-grade, GAAP-compliant accounting and revenue recognition reporting" />
                                                            <span>
                                                                Oracle NetSuite
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Freshdesk" v-model="info.integrations" hover="Have all the subscription details of the particular customer neatly displayed right next to the corresponding support ticket on the Freshdesk app" />
                                                            <span>
                                                                Freshdesk
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="QuickBooks Online" v-model="info.integrations" hover="Manage your account receivables and integrate your invoice data into your accounting system" />
                                                            <span>
                                                                QuickBooks Online
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Salesforce" v-model="info.integrations" hover="Make the customer, subscription and invoice information in Chargebee readily available in Salesforce and handle your subscription sales workflows with elegance" />
                                                            <span>
                                                                Salesforce
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Xero" v-model="info.integrations" hover="Sync and reconciliation seamlessly between your accounting system and subscription management" />
                                                            <span>
                                                                Xero
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Zapier" v-model="info.integrations" hover="Set up automation workflows and logic to help you do tasks based on subscription, customer and payment data" />
                                                            <span>
                                                                Zapier
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Avalara" v-model="info.integrations" hover="Manage tax for recurring invoices effortlessly and save time and manual effort by automating tax calculations" />
                                                            <span>
                                                                Avalara
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Zendesk" v-model="info.integrations" hover="Have all the subscription details of the particular customer neatly displayed right next to the corresponding support ticket on the Zendesk app" />
                                                            <span>
                                                                Zendesk
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="ActiveCampaign" v-model="info.integrations" hover="Sync your customer and subscription information to ActiveCampaign and create specialized email automation workflows and engage with customers in a more personalized way" />
                                                            <span>
                                                                ActiveCampaign
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Stitch" v-model="info.integrations" hover="Populate subscription data from Chargebee to any data warehouse with simple UI actions on the Stitch app" />
                                                            <span>
                                                                Stitch
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="TaxJar" v-model="info.integrations" hover="Manage tax for recurring invoices effortlessly and save time and manual effort by automating tax calculations" />
                                                            <span>
                                                                TaxJar
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Refersion" v-model="info.integrations" hover="Track and report the purchases that are generated by your affiliates, with Refersion and Chargebee" />
                                                            <span>
                                                                Refersion
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Groove" v-model="info.integrations" hover="Have all the subscription details of the particular customer neatly displayed right next to the corresponding support ticket on the Groove" />
                                                            <span>
                                                                Groove
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="MailChimp" v-model="info.integrations" hover="Send customized campaigns to your customers without the need of manually syncing contact information" />
                                                            <span>
                                                                MailChimp
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="ChartMogul" v-model="info.integrations" hover="Automatically sync and visualize your customers' subscriptions, plans, addons, transactions, and other payments-related data" />
                                                            <span>
                                                                ChartMogul
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Google Analytics" v-model="info.integrations" hover="Make use of Google Analytics to gauge the usage of Checkout pages, Self-serve portal and Thank you pages" />
                                                            <span>
                                                                Google Analytics
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="ReferralCandy" v-model="info.integrations" hover="Track referral purchases, apply a discount when a friend purchases and add Account Credits to the Referrer's customer account automatically" />
                                                            <span>
                                                                ReferralCandy
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Friendbuy" v-model="info.integrations" hover="Track referral purchases and add promotional credits to the Referrer's customer account automatically" />
                                                            <span>
                                                                Friendbuy
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Moxtra" v-model="info.integrations" hover="Stay up to date with events that take place in Chargebee and create the notifications as actionable in your Moxtra binder" />
                                                            <span>
                                                                Moxtra
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="LeadDyno" v-model="info.integrations" hover="Send transaction details to LeadDyno along with the affiliate ID and track the affiliate's conversion and commission" />
                                                            <span>
                                                                LeadDyno
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Slack" v-model="info.integrations" hover="Organize your subscription and payment alerts and subsequent follow-ups with Chargebee and Slack integration" />
                                                            <span>
                                                                Slack
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Klaviyo" v-model="info.integrations" hover="Send relevant and personalized emails based on invoice and payment data from your customers" />
                                                            <span>
                                                                Klaviyo
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="ProfitWell" v-model="info.integrations" hover="Quickly set up ProfitWell with Chargebee and get all the subscription financial metrics that you need" />
                                                            <span>
                                                                ProfitWell
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="PieSync" v-model="info.integrations" hover="Sync customer contacts bidirectionally, between Chargebee and your favorite apps in real-time." />
                                                            <span>
                                                                PieSync
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Intercom" v-model="info.integrations" hover="Add subscription, customer, and invoice-related attributes as well as custom fields to existing customer information in Intercom" />
                                                            <span>
                                                                Intercom
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Intercom Inbox" v-model="info.integrations" hover="Hit the pedal on responding to customers, increasing conversion rates, and improving your teams' performance by taking instant subscription actions within a single tab" />
                                                            <span>
                                                                Intercom Inbox
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="FirstPromoter" v-model="info.integrations" hover="Track and generate referral commissions for both recurring sales and one-time charges" />
                                                            <span>
                                                                FirstPromoter
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Shipstation" v-model="info.integrations" hover="Keep a track on order updates, payment detail changes, and order statuses for recognizing revenue better" />
                                                            <span>
                                                                Shipstation
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="cb-form__option">
                                                        <label class="cb-form__label">
                                                            <input class="" type="checkbox" value="Softrax" v-model="info.integrations" hover="Sync subscriptions and related data and automate your ASC 606/IFRS 15-compliant Revenue" />
                                                            <span>
                                                                Softrax
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="cb-form__actions" style="text-align: left;margin-top: 40px;">
                                    <div class="cb-form__action" v-if="info.billingAutomation.length || info.subscriptionManagement.length || info.revenueOperations.length || info.subscriptionAnalytics.length || info.integrations.length">
                                        <a href="javascript:void(0)" v-on:click="activeScreen=3" class="cb-form__link">Get Your Consultation</a>
                                    </div>
                                </div>
                            </div>  
                            <div class="cb-form-screen__three" v-if="activeScreen === 3">
                                <div class="cb-grid">
                                    <div class="cb-grid__item">
                                        <div class="cb-form__header">
                                            <div class="cb-form__heading">
                                                How should we contact you?
                                            </div>
                                        </div>
                                        <div class="hs-form"></div>
                                        <div class="cb-form__footer" style="margin-top: 40px;">
                                            <div class="cb-result__heading">
                                                You are just a click away from getting a personalized consultation.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cb-grid__item">
                                        <div class="cb-form__result">
                                            <div class="cb-form__heading hidden-xs">
                                                What You've Chosen
                                            </div>
                                            <ul class="cb-result__list hidden-xs">
                                                <li class="cb-result__item" v-if="info.billingAutomation.length">
                                                    <div class="cb-result__heading">
                                                        Billing Automation
                                                    </div>
                                                    <p class="cb-result__desc" id="automation"><template v-for="automation in info.billingAutomation">{{ automation }},</template></p>
                                                </li>
                                                <li class="cb-result__item" v-if="info.subscriptionManagement.length">
                                                    <div class="cb-result__heading">
                                                        Subscription Management
                                                    </div>
                                                    <p class="cb-result__desc" id="management"><template v-for="management in info.subscriptionManagement">{{ management }},</template></p>
                                                </li>
                                                <li class="cb-result__item" v-if="info.revenueOperations.length">
                                                    <div class="cb-result__heading">
                                                        Revenue Operations
                                                    </div>
                                                    <p class="cb-result__desc" id="operations"><template v-for="operations in info.revenueOperations">{{ operations }},</template></p>
                                                </li>
                                                <li class="cb-result__item" v-if="info.subscriptionAnalytics.length">
                                                    <div class="cb-result__heading">
                                                        Subscription Analytics
                                                    </div>
                                                    <p class="cb-result__desc" id="analytics"><template v-for="analytics in info.subscriptionAnalytics">{{ analytics }},</template></p>
                                                </li>
                                                <li class="cb-result__item" v-if="info.integrations.length">
                                                    <div class="cb-result__heading">
                                                        Integrations
                                                    </div>
                                                    <p class="cb-result__desc" id="integrations"><template v-for="integration in info.integrations">{{ integration }},</template></p>
                                                </li>
                                            </ul>
                                            <div class="cb-form__actions" style="z-index: 999;">
                                                <div class="cb-form__action">
                                                    <a href="javascript:void(0)" v-on:click="activeScreen=2" class="cb-form__link">Review Features</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            info: {
                billingAutomation: [],
                subscriptionManagement: [],
                revenueOperations: [],
                subscriptionAnalytics: [],
                integrations: []
            },
            activeScreen: 1
        }
    },
    mounted() {
        function toggleIcon(e) {
            $(e.target).prev('.panel-heading').find(".more-less").toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
        }
        $('.panel-group').on('hidden.bs.collapse', toggleIcon);
        $('.panel-group').on('shown.bs.collapse', toggleIcon);
        $('.cb-form__label').hover(function(){
            var hoverContent = $(this).find('input[type="checkbox"]').attr('hover');
            $(this).append('<div class="cb-cart__tooltip">'+hoverContent+'</div>');
        }, function(){
            $('.cb-cart__tooltip').remove();
        })
        $('body').on('hsvalidatedsubmit', '.hs-form', function (e){
            $('.cb-form-screen__three .cb-form__footer .cb-result__heading,.cb-form-screen__three .cb-form__actions').hide()
        });
    },
    watch: {
        activeScreen: function (val) {
            if(this.activeScreen === 2){
                setTimeout(function(){
                    $('.cb-form-screen__two input[type="checkbox"]').each(function(){
                        var hoverContent = $(this).attr('hover');
                        $(this).parent('label').append('<div class="cb-cart__tooltip">'+hoverContent+'</div>');
                    });
                }, 100);
            }
            if(this.activeScreen === 3){
                setTimeout(function(){
                    var scriptTag = document.createElement("script");
                    scriptTag.type = "text/javascript";
                    var hsScript = document.createTextNode('hbspt.forms.create({portalId: "3732359",formId: "784d3557-24f8-4209-845d-d588a30532c9"});');
                    scriptTag.appendChild(hsScript);

                    var frForm = document.getElementsByClassName('hs-form')[0];
                    frForm.appendChild(scriptTag);
                    function hsFormLoaded() { 
                        if ($('.hs-form form').length) { 
                            var revops_cart_items = $('#automation').html();
                            $('.hs-form form input[name="revops_cart_items"]').val(revops_cart_items)

                            var revops_cart_subscription_management = $('#management').html();
                            $('.hs-form form input[name="revops_cart_subscription_management"]').val(revops_cart_subscription_management)

                            var revops_cart_revenue_operations = $('#operations').html();
                            $('.hs-form form input[name="revops_cart_revenue_operations"]').val(revops_cart_revenue_operations)

                            var revops_cart_subscription_analytics = $('#analytics').html();
                            $('.hs-form form input[name="revops_cart_subscription_analytics"]').val(revops_cart_subscription_analytics)

                            var revops_cart_integrations = $('#integrations').html();
                            $('.hs-form form input[name="revops_cart_integrations"]').val(revops_cart_integrations)
                            
                            clearInterval(checkIsHsFormLoaded);
                        }
                    }
                    var checkIsHsFormLoaded = setInterval(hsFormLoaded, 1000);
                }, 100);
            }
        }
    }
}
</script>
<style type="text/css">
    .cb-card{
        border-radius: 6px;
        box-shadow: 0 1px 1px 0 rgba(90, 122, 190, 0.1), 0 10px 20px 0 rgba(90, 122, 190, 0.2);
        border: 1px solid rgba(90, 122, 190, 0.08);
        background-color: #ffffff;
        overflow: hidden;
    }
    @media (max-width: 767px) {
        .cb-card{
            margin: 0 -15px;
            border-radius: 0;
        }
    }
    .cb-form__result .cb-form__heading{
        margin-bottom: 24px;
    }

    .cb-form__link,.cb-form__link:hover,.cb-form__link:focus{
        color: #02931D;
        font-family: var(--ff_primary);
        font-size: 20px;
        line-height: 24px;
        text-decoration: none;
        position: relative;
    }
    .cb-form-screen__one .cb-form__link:after,
    .cb-form-screen__two .cb-form__link:after{
        content: '';
        margin-left: 12px;
        transition: 0.3s ease;
        background: url('/static/website/version/images/icon/arrow/green-arrow.svg') center/contain no-repeat;
        display: inline-block;
        vertical-align: middle;
    }
    .cb-form-screen__three .cb-form__link:before{
        content: '';
        margin-right: 12px;
        transition: 0.3s ease;
        background: url('/static/website/version/images/icon/arrow/green-arrow.svg') center/contain no-repeat;
        transform: rotate(180deg);
        display: inline-block;
        vertical-align: middle;
    }
    @media (max-width: 767px) {
        .cb-form__link{
            background: #effff2;
            padding: 12px 24px;
            border-radius: 54px;
            margin-top: 42px;
            display: block;
            text-align: center;
            font-size: 18px;
            font-weight: 500;
        }
        .cb-form-screen__one .cb-form__link:after,
        .cb-form-screen__two .cb-form__link:after,
        .cb-form-screen__three .cb-form__link:before{
            width: 20px;
            height: 20px;
        }
    }

    @media (min-width: 768px) {
        .cb-form-screen__one .cb-form__link:after,
        .cb-form-screen__two .cb-form__link:after,
        .cb-form-screen__three .cb-form__link:before{
            width: 32px;
            height: 32px;
        }
    }
    @media (min-width: 992px) {
        .cb-form-screen__one .cb-form__link:after,
        .cb-form-screen__two .cb-form__link:after,
        .cb-form-screen__three .cb-form__link:before{
            width: 48px;
            height: 48px;
        }
    }
    /* ------------------------------------------------------------------------
    Start: Screen One 
    ------------------------------------------------------------------------ */
    .cb-form__title,.cb-form__desc,.cb-form-media__title,.cb-form-media__desc{
        color: #00000A;
    }
    .cb-form__title{
        font-family: var(--ff_primary);
        font-size: 24px;
        font-weight: bold;
        line-height: 34px;
        margin-bottom: 8px;
    }
    @media (max-width: 767px){
        .cb-form__title{
            line-height: 28px;
        }
    }
    .cb-form__desc{
        font-family: var(--ff_base);
        font-size: 16px;
        line-height: 24px;
    }
    .cb-form-media__title{
        font-family: var(--ff_primary);
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        margin-bottom: 8px;
    }
    @media (max-width: 767px){
        .cb-form-media__title{
            font-size: 16px;
            line-height: 20px;
        }
    }
    .cb-form-media__desc{
        font-family: var(--ff_base);
        font-size: 14px;
        line-height: 19px;
    }
    .cb-form-media__figure img{
        margin-bottom: 24px;
    }
    .cb-form-screen__one,.cb-form-screen__two {
        padding: 24px 16px;
    }
    @media (max-width: 767px){
        .cb-form-screen__one,.cb-form-screen__two {
            padding: 52px 24px;
        }
    }
    .cb-form-medias {
        display: grid;
        grid-gap: 40px;
        margin-top: 40px;
        grid-template-columns: 1fr;
    }
    @media (max-width: 767px){
        .cb-form-medias {
            grid-gap: 50px 20px;
            margin-top: 54px;
            grid-template-columns: 1fr 1fr 1fr;
            overflow: auto;
        }
        .cb-form-media {
            text-align: center;
            background: #fafaff;
            border-radius: 6px;
            padding: 34px 24px;
            min-width: 280px;
        }
        .cb-form-media__figure{
            max-width: 60px;
            margin: auto;
        }
    }

    @media (min-width: 768px) {
        .cb-form-media__figure img{
            margin: auto;
            margin-bottom: 24px;
        }
        .cb-form-screen__one .cb-form__header{
            max-width: 480px;
            margin: auto;
        } 
        .cb-form__actions{
            text-align: center;
        }
        .cb-form-medias {
            margin: 70px 0;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 50px;
        }
        .cb-form-screen__one,.cb-form-screen__two {
            padding: 44px;
        }
        .cb-form__title,.cb-form__desc,.cb-form-media__title,.cb-form-media__desc{
            text-align: center;
        }
    }
    /* ------------------------------------------------------------------------
    End: Screen One 
    ------------------------------------------------------------------------ */


    /* ------------------------------------------------------------------------
    Start: Screen Two 
    ------------------------------------------------------------------------ */
    .panel-group{
        margin: 0;
        margin-top: 50px;
    }
    .panel-default>.panel-heading,.panel-body{
        padding: 0;
        background-color: transparent;
    }
    .panel-group .panel{
        border: none;
        border-bottom: 1px solid #E6E6F2;
        border-radius: 0;
        box-shadow: none;
    }
    .panel-title > a,.panel-title > a:hover,.panel-title > a:active{
        color: #000FF0;
        font-weight: 500;
        display: block;
        padding: 20px 0;
        text-decoration: none;
        font-family: var(--ff_primary);
        font-size: 20px;
        line-height: 23px;
        position: relative;
    }
    .panel-title > a span{
        color: #00000A;
        font-family: var(--ff_base);
        font-size: 14px;
        float: right;
        font-weight: normal;
        padding-right: 24px;
    }

    .panel-title > a[aria-expanded="true"] {
        color: #00000A;
    }
    .glyphicon-chevron-up:before,.glyphicon-chevron-down:before {
        content: "";
        border-left: 2px solid #000FF0;
        border-bottom: 2px solid #000FF0;
        padding: 4px 4px;
        line-height: 0;
        position: absolute;
        transform: rotate(-45deg);
        top: 25px;
        right: 0;
        transition: .3s all;
    }
    .panel-title > a[aria-expanded="true"] .glyphicon-chevron-up:before,
    .panel-title > a[aria-expanded="true"] .glyphicon-chevron-down:before{
        transform: rotate(135deg);
        top: 30px;
    }
    .panel-group .panel-heading+.panel-collapse>.panel-body {
        border-top: none;
    }
    .panel-group .panel-heading+.panel-collapse>.panel-body .cb-form__option:first-child .cb-form__label{
        margin-top: 0
    }
    .cb-form-screen__two .cb-form__header,.cb-form-screen__three .cb-form__header{
        display: grid;
    }
    .cb-form__heading{
        color: #00000A;
        font-family: var(--ff_primary);
        font-size: 18px;
        font-weight: bold;
        line-height: 21px;
    }
    .cb-form__heading span:not(.more-less){
        font-family: var(--ff_base);
        font-size: 14px;
        line-height: 16px;
        font-weight: normal;
    }
    .cb-form__option:first-child .cb-form__label{
        margin-top: 20px;
    }
    .cb-form__label {
        color: #00000A;
        font-family: var(--ff-base);
        font-size: 14px;
        line-height: 16px;
        font-weight: normal;
        margin-bottom: 0;
        position: relative;
        cursor: pointer;
        padding: 6px 10px 6px 28px;
    }
    .cb-form__label--title{
        padding-left: 0;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 8px;
        cursor: default;
    }
    .cb-form__label input[type="checkbox"]{
        opacity: 0;
        position: absolute;
    }
    input[type=checkbox] + span:before,
    input[type=checkbox]:checked + span:before,
    input[type=checkbox] + span:after,
    input[type=checkbox]:checked + span:after{
        content: '';
        position: absolute;
        padding: 1px;
        left: 0;
        top: 0;
        transition: .3s all;
    }
    input[type=checkbox] + span:before{
        background-color: #88889E;
        height: 12px;
        left: 5px;
        top: 8px;
    }
    input[type=checkbox] + span:after{
        background-color: #88889E;
        width: 12px;
        top: 13px;
    }

    input[type=checkbox]:checked + span:before{
        background-color: #0ba011;
        height: 8px;
        left: 0px;
        top: 13px;
        transform: rotate(-45deg);
    }
    input[type=checkbox]:checked + span:after{
        background-color: #0ba011;
        width: 16px;
        top: 13px;
        transform: rotate(-45deg);
        left: 1px;
    }
    .cb-form__options {
        display: grid;
        width: 100%;
        margin: 16px 0 50px 0;
    }
    @media (min-width: 768px) {
        .cb-form-screen__two .cb-form__header{
            grid-template-columns: 1fr auto;
            align-items: center;
        }
        .cb-form__options {
            grid-template-columns: 1fr 1fr;
        }
        .cb-form__options--gap{
            grid-row-gap: 30px;
        }
    }
    @media (min-width: 992px) {
        .cb-form__options {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media (max-width: 767px) {
        .cb-form__options--group+.cb-form__options--group{
            margin-top: 40px;
        }
        .cb-form-screen__two .cb-form__header{
            grid-gap: 30px;
        }
    }
    input[type="checkbox"], input[type="radio"]{
        margin: 0;
        padding: 0;
    }
    .cb-cart__tooltip {
        position: absolute;
        left: -10px;
        right: -10px;
        top: 0;
        background-color: #6450F0;
        border-radius: 4px;
        box-shadow: 0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025);
        transition-property: transform,opacity;
        transition-duration: .15s;
        transition-timing-function: ease-in-out;
        pointer-events: none;
        opacity: 0;
        transform: translateY(-100%) scale(.75);
        transform: translateY(calc(-100% + 10px)) scale(.75);
        transform-origin: 20px calc(100% + 12px);
        color: #fff;
        padding: 15px 20px;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.5em;
        min-width: 250px;
        max-width: 250px;
    }

    .cb-cart__tooltip:before{
        content: "";
        position: absolute;
        bottom: -6px;
        left: 10px;
        width: 12px;
        height: 12px;
        transform: rotate(45deg);
        border-radius: 0 0 4px 0;
        background-color: inherit;
        box-shadow: 3px 3px 5px rgba(82,95,127,.04);
    }
    .cb-form__label:hover .cb-cart__tooltip{
        opacity: 1;
        transition-timing-function: cubic-bezier(.165,.84,.44,1);
        transform: translateY(calc(-100% - 5px));
    }
    /* ------------------------------------------------------------------------
    End: Screen Two 
    ------------------------------------------------------------------------ */

    /* ------------------------------------------------------------------------
    Start: Screen Three 
    ------------------------------------------------------------------------ */
    .cb-grid {
        display: grid;
        width: 100%;
    }
    .cb-form-screen__three .cb-grid__item{
        padding: 44px;
    }
    .cb-form-screen__three .cb-grid__item:last-child{
        background-color: #F9F9F9;
        position: relative;
    }
    .cb-result__list{
        list-style: none;
        padding: 0;
        margin: 0;
        max-height: 420px;
        overflow-y: auto;
    }
    .cb-result__list:after {
        content: "";
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 200px;
        background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%);
        background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%);
        background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
    }
    .cb-result__list .cb-form__actions{
        position: absolute;
        bottom: 40px;
        left: 0;
        right: 0;
    }
    .cb-result__item{
        margin-bottom: 40px;
    }
    .cb-result__heading{
        color: #00000A;
        font-family: var(--ff_primary);
        font-size: 16px;
        font-weight: bold;
        line-height: 18px;
        margin-bottom: 8px;
    }
    .cb-result__desc{
        color: #00000A;
        font-family: var(--ff_base);
        font-size: 14px;
        line-height: 20px;
        word-break: break-word;
    }
    .hs-form {
        margin-top: 28px;
        font-family: var(--ff_base);
        color: #00000A;
        font-size: 16px;
        line-height: 20px;
        overflow: hidden;
    }
    .hs-form .hs-error-msgs{
        list-style: none;
        padding: 0;
    }
    .hs-form .hs-error-msgs label{
        font-weight: normal;
        color: #ff1100;
        margin-top: 8px;
        max-width: 300px;
    }
    .hs-form .hs-form-field {
        margin-bottom: 24px;
    }
    .hs-form .hs_error_rollup {
        display: none;
    }
    .hs-form form input,.hs-form form select,
    .hs-form form input:hover,.hs-form form select:hover,
    .hs-form form input:focus,.hs-form form select:focus{
        outline: none;
    }
    .hs-form form input[type="email"],.hs-form form input[type="tel"]{
        border-radius: 3px;
        border: 1px solid #dedede;
        font-size: 18px;
        line-height: 36px;
        padding: 4px 8px;
        width: 100%;
    }
    .hs-form form select{
        height: 46px;
        background-color: transparent;
        box-shadow: none;
        border: 1px solid #dedede;
        border-radius: 3px;
        padding: 4px 8px;
    }
    .hs-form form input[type="submit"]{
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        font-size: 18px;
        font-weight: 500;
        border-radius: 3px;
        background-color: #6450F0;
        display: inline-block;
        transition: 0.3s ease;
        position: relative;
        color: #fff;
        padding: 6px 44px 6px 20px;
        line-height: 30px;
        border: 1px solid #6450F0;
    }
    .hs-submit .actions{
        position: relative;
        display: inline-block;
    }
    .hs-submit .actions:after{
        content: '';
        display: inline-block;
        width: 14px;
        height: 12px;
        margin-left: 8px;
        transition: 0.3s ease;
        background: url('/static/website/version/images/home/jan-2019/arrow/button-arrow.svg') center/contain no-repeat;
        position: absolute;
        right: 24px;
        top: 16px;
    }
    .hs-submit .actions:hover:after{
        right: 20px;
    }
    .hs-form .hs-form-field+.hs-form-field {
        margin-bottom: 40px;
    }
    .hs-form-field label{
        margin-bottom: 8px;
    }
    @media (max-width: 767px) {
        .cb-form-screen__three .cb-grid__item{
            padding: 24px 16px;
        }
        .cb-form-screen__one .cb-form__action{
            margin-top: 24px;
        }
    }
    @media (min-width: 992px) {
        .hs-form-field label{
            margin-bottom: 0;
        }
        .hs-form .hs-form-field {
            display: grid;
            grid-template-columns: 160px 1fr;
            align-items: center;
        }
        .hs-form .hs-error-msgs {
            grid-column: 2/-1;
        }
        .hs-form {
            max-width: 500px;
        }
    }
    @media (min-width: 768px) {
        .cb-grid {
            grid-template-columns: 60% 40%;
        }
        .hs-submit{
            text-align: right;
        }
    }
    .cb-form-screen__two .panel-group{
        margin-top: 0;
    }
    /* ------------------------------------------------------------------------
    End: Screen Three 
    ------------------------------------------------------------------------ */
</style>
