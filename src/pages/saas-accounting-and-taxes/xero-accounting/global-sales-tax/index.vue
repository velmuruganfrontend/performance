<template>
    <div>
        <app-meta
            :cb-title="'Xero Sales Tax Filing and Reports for Recurring Revenue Businesses'"
            :cb-desc="'Synchronize sales tax data efficiently with Xero, for multiple currencies. Stay well-informed with real-time sales tax reporting.'"
            :cb-url="'/saas-accounting-and-taxes/xero-accounting/global-sales-tax/'"
            :cb-image="''"
            :cb-style="' /static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="'true'" />
        <div class="cb-body">
            <section class="hero" style="background-image: linear-gradient(-225deg, #414345 0%, #404244 74%, #232526 100%);padding-bottom: 30px;">
                <div class="container">
                    <article>
                        <h1> Support for Global Tax and <br>Sales Tax Reports</h1>
                        <p style="max-width: none;">Synchronize sales tax data efficiently from Chargebee to Xero, for multiple currencies.<br> Stay well-informed with real-time tax reports.</p>
                        <div class="mar-t-sm mar-b-xs hidden-xs hidden-sm">
                            <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-primary btn-primary-sec btn-md  btn-suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                Sign up for free
                            </a>
                        </div>
                    </article>
                </div>
            </section>
            <section class="container">
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-5 col-md-offset-1 col-lg-4">
                            <div class="space-top hidden-sm hidden-xs"></div>
                            <img src="/static/website/version/images/recurring-payments/xero-accounting/xero-chargebee.svg" width="276" class="img-responsive">
                            <div class="space-top-md visible-sm visible-xs"></div>
                        </div>
                        <div class="col-md-5 col-md-offset-1 col-lg-4">
                            <p class="tpmain-content__text">Not up for calculating the sales tax and then adding that to Xero with a manual journal entry? We've got you covered. </p>
                            <p class="tpmain-content__text">All you have to do is <strong class="text-black">set up the appropriate tax rates</strong> in Xero, map them to the right categories, and you're all set! </p>
                            <p class="tpmain-content__text">Now whenever a sale happens, Chargebee will use those tax rates. While invoices get created in Xero. Both, automatically.</p>
                        </div>
                    </div>
                </article>
                <article class="tpmain-content tpmain-content--border">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="/static/website/version/images/recurring-payments/xero-accounting/tax-report.svg" width="600" class="img-responsive">
                            <div class="space-top-md visible-sm visible-xs"></div>
                        </div>
                        <div class="col-md-5 col-md-offset-1">
                            <div class="space-top hidden-sm hidden-xs"></div>
                            <p class="tpmain-content__text tpmain-content__dash">Draw up tax liability reports and file sales tax returns and GST reports with specific tax authorities (UK/NZ/AUS/India) from right within Xero.</p> 
                            <p class="tpmain-content__text tpmain-content__dash">Map default tax rates for New Zealand, Australia, UK, India, South Africa, and Singapore, from <strong class="text-black"> Xero to your specific product categories.</strong></p>
                            <p class="tpmain-content__text tpmain-content__dash">Dealing with multiple currencies? <strong class="text-black">Create tax profiles</strong> for all of them in Chargebee and sync them with Xero in no time</p>
                        </div>
                    </div>
                </article>
                <article class="tpmain-content">
                    <div class="space-top-md hidden-sm hidden-xs"></div>
                    <div class="tpmain-content-title"><span>Do a lot more with Chargebee + Xero</span></div>
                    <div class="row">
                        <div class="col-md-4 col-lg-3 tpmain-content__col">
                            <h2 class="tpmain-content__title">
                                <span class="tpmain-highlight">Automatic Reconciliation</span> for online businesses
                            </h2>
                            <p class="tpmain-content__text">
                                Gain access to Payment Gateway transactional data, right into your favorite accounting software. What's more, automate Gateway Reconciliation with just a click.
                            </p>
                            <a href="/saas-accounting-and-taxes/xero-accounting/payment-reconciliation/">
                                Stripe Reconciliation with Xero &rarr;
                            </a>
                        </div>
                        <div class="col-md-4 col-lg-3 col-lg-offset-1 tpmain-content__col">
                            <h2 class="tpmain-content__title">
                                Effortless Mapping to <span class="tpmain-highlight">Xero's Chart of Accounts</span>
                            </h2>
                            <p class="tpmain-content__text">
                               Auto-sync payments, multi-currency invoices, credit notes, customers, and taxes from Chargebee to Xero.
                           </p>
                            <a href="/saas-accounting-and-taxes/xero-accounting/chart-of-accounts/">
                                Xero chart of accounts mapping &rarr;
                            </a>
                        </div>
                        <div class="col-md-4 col-lg-3 col-lg-offset-1 tpmain-content__col">
                            <h2 class="tpmain-content__title">
                                Painless <span class="tpmain-highlight">Deferred Revenue Reporting</span>
                            </h2>
                            <p class="tpmain-content__text">
                                Recognize your monthly revenue and reconcile your deferred balance in Xero. Over the right period. Automatically.
                            </p>
                            <a href="/saas-accounting-and-taxes/xero-accounting/deferred-revenue-accounting/">
                                Xero deferred revenue reporting &rarr;
                            </a>
                        </div>
                    </div>
                </article>
                <article class="tpmain-content">
                    <div class="tpmain-callto">
                        <div class="row">
                            <div class="col-md-7 col-lg-6 col-lg-offset-1">
                                <div class="tpmain-callto__title">With Chargebee, subscription billing and accounting are effortless, efficient, and everything in between.</div>
                            </div>
                            <div class="col-md-5 col-lg-4 col-lg-offset-1">
                                <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-primary btn-primary-sec btn-md btn-suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                    Sign up for free
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <a class="tpmain-panel tpmain-panel--alt text-center" href="/saas-accounting-and-taxes/xero-accounting/stripe-xero-integration/">
                                <h4 class="tpmain-panel__title">Stripe and Xero, better with Chargebee</h4>
                                <p class="tpmain-panel__text">If you're still syncing your transactions to Xero manually, it's time to simplify that.</p>
                                <span class="tpmain-panel__link">Bridge the gap between Stripe and Xero &rarr;</span>
                            </a>
                        </div>
                    </div>
                </article>
            </section>
            <div class="space-top hidden-sm hidden-xs"></div>
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
