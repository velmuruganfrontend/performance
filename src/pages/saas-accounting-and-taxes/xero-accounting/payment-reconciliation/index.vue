<template>
    <div class="body">
        <app-meta
            :cb-title="'Payment reconciliation in Chargebee using Xero and Quickbooks'"
            :cb-desc="'Easily reconcile payments within your Xero or Quickbooks dashboard using Chargebee. Import invoice details from your payment gateway and automate reconciliation with just a click.'"
            :cb-url="'/saas-accounting-and-taxes/xero-accounting/payment-reconciliation/'" 
            :cb-image="''"
            :cb-style="' /static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.4.2/parallax.min.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="'true'" />
        <div class="cb-body">
            <!-- Start Main Body Content -->
            <section class="hero hero--alt">
                <div class="container">
                    <article>
                        <h1>Simplified Xero/Quickbooks Reconciliation for Subscription Businesses</h1>
                        <p class="title-desc">Gain access to Payment Gateway transactional data, right into your favorite accounting software. What's more, automate Reconciliation with just a click.</p>
                        <div class="space-item valign-top" style="margin: 42px 0">
                            <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-primary btn-md btn-suffix btn-shadow">Signup for free</a>
                            <a href="/schedule-a-demo/" class="btn btn-ghost-white btn-suffix btn-md">Schedule a Demo</a>
                        </div>
                    </article>
                </div>
            </section>
            <section class="container space-ver" style="padding-top: 0;">

                <div class="cb-header-banner">
                    <div class="cb-header-banner__container">
                        <img src="/static/website/version/images/recurring-payments/xero-accounting/stripe-banner.png" alt="" class="img-responsive" width="600">
                    </div>
                </div>


                <article class="space-ver">
                    <div class="client-logos-text">Because we hate working late too</div>
                    <div class="benefits-blk benefits--sm benefits-alt-blk clearfix">
                        <div class="benefits-img-blk benefits-slide-blk">
                            <h4 class="benefits-slide-blk__title">Here’s a fun slide deck that shows you how this works.</h4>
                            <div class="benefits-slide-blk__container">

                                <div class="benefits-slide-blk__iframe" id="cb-benefits-iframe" style="display: none;">
                                    <iframe src="//www.slideshare.net/slideshow/embed_code/key/I8ql4FafeHZl5k" width="440" height="300" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>
                                </div>

                                <div class="benefits-slide-blk__img" id="cb-benefits-img">
                                    <img src="/static/website/version/images/recurring-payments/xero-accounting/reconciliation-banner.png" alt="" class="img-responsive" width="600">
                                </div>
                            </div>
                        </div>
                        <div class="benefits-txt-blk">
                            <p style="margin-bottom: 20px;">If you are managing a business account, it is a real bummer when the invoice information on your accounting software does not match the figures on your bank statement. </p>

                            <p style="margin-bottom: 20px;">As we speak, <strong>accountants are spending hours upon hours of their time reconciling these numbers manually.</strong> This becomes truly difficult to manage if your online business processes thousands of transactions per day via payment gateways.</p>

                            <p style="margin-bottom: 20px;">With Chargebee’s Reconciliation feature, you can <strong>save up to 5 hours every week.</strong> Here’s what you can do with it, in a nutshell.</p>
                        </div>
                    </div>
                </article>

                <article class="space-ver">
                    <div class="benefits-blk benefits--sm benefits-alt-blk benefits--slides clearfix">
                        <figure class="benefits-img-blk hidden-sm hidden-xs">
                            <img src="/static/website/version/images/recurring-payments/xero-accounting/sync-stripe.svg" width="320" class="img-responsive" alt="Stripe-Xero Connect">
                        </figure>
                        <div class="benefits-txt-blk">
                            <header>
                                <div class="benefits-label">Stripe-Xero Connect</div>
                                <h2>Import ready-to-use files from Stripe</h2>
                            </header>
                            <figure class="benefits-img-blk visible-sm visible-xs">
                                <img src="/static/website/version/images/recurring-payments/xero-accounting/sync-stripe.svg" width="320" class="img-responsive" alt="Stripe-Xero Connect">
                            </figure>
                            <p>Use Chargebee to import transactions from Stripe straight into Xero or Quickbooks. What’s more, you don’t need to worry about formatting. The file arrives ready for upload!</p>
                            <a href="/docs/xero-reconciliation.html" target="_blank">Learn more</a>
                        </div>
                    </div>
                </article>
            </section>


            <div class="blk-testimonial" style="padding:0; margin:0;">
                <blockquote>
                    <div class="media">
                        <div class="media-left">
                            <img class="media-object img-circle" src="/static/website/version/images/home/testimonial/jens-hellberg.png" width="100" alt="Jens Hellberg">
                        </div>
                        <div class="media-body">
                            <div class="blk-clientdescription">
                                The new reconciliation feature saves us a lot of time! <span style="color: #6450F0">No more sifting through Stripe</span> to figure out the allocations.
                            </div>
                            <div class="blk-clientname">
                                Jens Hellberg, <div>Managing Director, TruckScience</div>
                            </div>
                        </div>
                    </div>
                </blockquote>
            </div>


            <section class="default-blk">
                <div class="container space-ver">
                    <article class="space-ver">
                        <div class="benefits-blk benefits--sm benefits-alt-blk benefits--slides clearfix">
                            <figure class="benefits-img-blk hidden-sm hidden-xs" style="margin-top: 40px;">
                                <img src="/static/website/version/images/recurring-payments/xero-accounting/xero-stripe.gif" width="400" class="img-responsive" alt="Automate Xero Reconciliation">
                            </figure>
                            <div class="benefits-txt-blk">
                                <header>
                                    <div class="benefits-label">One Click Automation</div>
                                    <h2>Automate Reconciliation with just a click</h2>
                                </header>
                                <figure class="benefits-img-blk visible-sm visible-xs">
                                    <img src="/static/website/version/images/recurring-payments/xero-accounting/xero-stripe.gif" width="400" class="img-responsive" alt="Automate Xero Reconciliation">
                                </figure>
                                <p>Reconcile Gateway Transactions with Bank Statements in seconds using Chargebee’s Google Chrome plugin. You don’t have to manually match transactions anymore. What took you 5 hours every week is now just a click away. Go home early!</p>
                                <a href="https://www.youtube.com/watch?v=cfPxC9ieyuw&ab_channel=ChargebeeSubscriptionManagement%26RecurringBilling" target="_blank">Watch video</a>
                            </div>
                        </div>
                    </article>
                </div>
            </section>


            <div class="blk-testimonial" style="padding:0;margin:0">
                <blockquote>
                    <div class="media">
                        <div class="media-left">
                            <img class="media-object img-circle" src="/static/website/version/images/home/testimonial/will-jennings.png" width="100" alt="Jens Hellberg">
                        </div>
                        <div class="media-body">
                            <div class="blk-clientdescription">
                                Being able to automatically reconcile Stripe payments, transfers and fees is a huge win and as with everything Chargebee does, <span style="color: #6450F0">it's solid and feels like they've thought of everything.</span>
                            </div>
                            <div class="blk-clientname">
                                Will Jennings, <div>Managing Director, Countfire</div>
                            </div>
                        </div>
                    </div>
                </blockquote>
            </div>

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
        mounted() {
            $("#cb-benefits-iframe").hide();
            $("#cb-benefits-img").on("click",function(){
                $("#cb-benefits-iframe").show();
                $("#cb-benefits-img").hide(500);
            });
        }
    }
</script>
