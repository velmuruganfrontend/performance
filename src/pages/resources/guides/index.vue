<template>
    <div class="body">
        <app-meta 
            :cb-title="'Guides | Chargebee'" 
            :cb-desc="'Guides - Chargebee'" 
            :cb-url="'/resources/guides/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="''" />
        <div class="cb-body">
            <!-- Start Main Body Content -->
            <section class="container">
                <div class="row">
                    <div class="col-md-9 col-md-offset-1">
                        <div class="resources">
                            <h1 class="resources__title">
                                Resources to keep you ahead in the game
                            </h1>
                            <a href="/resources/guides/subscription-billing-and-management-guide/" class="resources__r-row resources__r-row__full-col">
                                <div class="row">
                                    <div class="col-sm-6 col-md-8">
                                        <div class="left-img" style="background-image:url(/static/website/version/images/resources/thumb/banner.png);"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-4">
                                        <div class="txt">
                                            <span class="r-label">
                                                e-book
                                            </span>
                                            <div>
                                                <p><strong>Getting Started with Subscription Billing — A Definitive Guide</strong></p>
                                                Billing. A process that dates back to about 3000 BC, when the Mesopotamians used the cuneiform script on clay tablets to record transactions. And since then, they have remained an integral (albeit under-appreciated) component of business.
                                            </div>
                                            <span class="readmore">Read full story</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div class="resources__r-row">
                                <a href="/resources/guides/saas-accounting-101/" class="r-col">
                                    <div class="r-card">
                                        <div class="img" style="background-image:url(/static/website/version/images/resources/saas-accounting.png);">
                                        </div>
                                        <div class="txt">
                                            <span class="r-label">
                                                e-book
                                            </span>
                                            <div>
                                                <strong>SaaS Accounting 101</strong>
                                                <br/>
                                                Delving deeper into the basics (and not-so-basic) of SaaS Accounting. Written with the idea of making the accountant as well as the founder-who-doubles-up-as-an-accountant’s life easier, this e-book will give you everything you should know about SaaS Accounting.
                                            </div>
                                            <span class="readmore">Read Book</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="/resources/infographics/merchant-services-payment-gateways/" class="r-col">
                                    <div class="r-card">
                                        <div class="img" style="background-image:url(/static/website/version/images/resources/merchant-services-payment-gateways-thumbnail.png);"></div>
                                        <div class="txt">
                                            <span class="r-label">
                                                infographic
                                            </span>
                                            <div>
                                                <strong style="display: inline-block; line-height: 18px;">Merchant services vs. Payment gateways</strong>
                                                <br /> If you’re thinking of doing business online, you’re probably evaluating a mix of payment gateways and merchant services, wondering which might suit you better. Here is an in-depth comparison with all the answers you’re looking for.
                                            </div>
                                            <span class="readmore">Read More</span>
                                        </div>
                                    </div>
                                </a> 
                                <a href="/resources/infographics/saas-revenue-benchmarks/" class="r-col">
                                    <div class="r-card">
                                        <div class="img" style="background-image:url(/static/website/version/images/resources/first-100-customers-infographic-thumbnail.png);"></div>
                                        <div class="txt">
                                            <span class="r-label">
                                                infographic
                                            </span>
                                            <div>
                                                <strong>Revenue Benchmarks For SaaS Startups</strong>
                                                <br /> How long does it take for early stage SaaS startups to achieve important revenue milestones? We dug into Chargebee’s data from 750 SaaS companies across 45 countries, for benchmarks.
                                            </div>
                                            <span class="readmore">Read More</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="/resources/infographics/dunning-benchmarks-subscription-businesses/" class="r-col">
                                    <div class="r-card">
                                        <div class="img" style="background-image:url(/static/website/version/images/resources/dunning-infographic-thumbnail.png);"></div>
                                        <div class="txt">
                                            <span class="r-label">
                                                infographic
                                            </span>
                                            <div>
                                                <strong>Dunning Insights</strong>
                                                <br /> How can Dunning help prevent involuntary churn, and what are the results a subscription business should expect from it? We studied data from a sample of 5.36 million transactions, for benchmarks.
                                            </div>
                                            <span class="readmore">Read More</span>
                                        </div>
                                    </div>
                                </a>
                                <!-- <a href="/usecase-guides/tiered-pricing/" class="r-col">
                                    <div class="r-card">
                                        <div class="img" style="background-image:url(/static/website/version/images/resources/tiered.png);">
                                        </div>
                                        <div class="txt">
                                            <span class="r-label">
                                                guide
                                            </span>
                                            <div>
                                                <strong>Tiered Pricing</strong>
                                                <br /> Tiered Pricing is a means of providing products or services at different price points. Learn how easy it is to set up a tiered pricing model with Chargebee.
                                            </div>
                                            <span class="readmore">Tiered Pricing</span>
                                        </div>
                                    </div>
                                </a> -->
                                <a href="/guide/trials/" class="r-col">
                                    <div class="r-card">
                                        <div class="img" style="background-image:url(/static/website/version/images/resources/trials-guide.png);">
                                        </div>
                                        <div class="txt">
                                            <span class="r-label">
                                                guide
                                            </span>
                                            <div>
                                                <strong>Experiment with Trials</strong>
                                                <br /> Short, long, paid, free, with a credit card or without a credit card! You just can’t ignore trials. So read on to understand about the different possible types of trial models for a SaaS product and how Chargebee helps you implement all of them!
                                            </div>
                                            <span class="readmore">Read guide</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="/resources/glossaries/saas-metrics/" class="r-col">
                                    <div class="r-card">
                                        <div class="img" style="background-image:url(/static/website/version/images/resources/saas-metrics.png);">
                                        </div>
                                        <div class="txt">
                                            <span class="r-label">
                                                guide
                                            </span>
                                            <div>
                                                <strong>SaaS Metrics 101</strong>
                                                <br/>SaaS Metrics are special tools that help us sight and sense where a business is, and where it's headed. Learn all about them
                                            </div>
                                            <span class="readmore">Read More</span>
                                        </div>
                                    </div>
                                </a>
                                
                                <a href="/payment-gateways/evaluator-tool/" class="r-col">
                                    <div class="r-card">
                                        <div class="img" style="background-image:url(/static/website/version/images/resources/payment-gateway-evaluator.png);">
                                        </div>
                                        <div class="txt">
                                            <span class="r-label">
                                                tool
                                            </span>
                                            <div>
                                                <strong>Payment Gateway Comparison</strong>
                                                <br/>Compare payment gateways based on processing fees and find the best fit for your business.
                                            </div>
                                            <span class="readmore">Compare Payment Gateways</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="/resources/tools/mrr-projections/" class="r-col">
                                    <div class="r-card">
                                        <div class="img" style="background-image:url(/static/website/version/images/resources/MRR.png);">
                                        </div>
                                        <div class="txt">
                                            <span class="r-label">
                                                tool
                                            </span>
                                            <div>
                                                <strong>MRR Projection Calculator</strong>
                                                <br /> Curious to find how long it'll take to reach your MRR goals? Gain revenue foresights of your SaaS buiness with this tool. 
                                            </div>
                                            <span class="readmore">How close am I?</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="/resources/guides/understanding-eu-vat-guide/" class="r-col">
                                    <div class="r-card">
                                        <div class="img" style="background-image:url(/static/website/version/images/resources/eu-vat.png);">
                                        </div>
                                        <div class="txt">
                                            <span class="r-label">
                                                GUIDE
                                            </span>
                                            <div>
                                                <strong>The EU VAT Guide for Subscription Businesses</strong>
                                                <br /> Tackle the ever-evolving complexity of the EU VAT with Chargebee's comprehensive guide.
                                            </div>
                                            <span class="readmore">Read guide</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="/resources/guides/strong-customer-authentication-saas/" class="r-col" style="margin-left: 0;">
                                    <div class="r-card">
                                        <div class="img" style="background-image:url(/static/website/version/images/resources/guides/psd-2-sca-for-saas/psd2.png);">
                                        </div>
                                        <div class="txt">
                                            <span class="r-label">
                                                GUIDE
                                            </span>
                                            <div>
                                                <strong>European PSD2 and SCA Regulation: What it means for Subscription Businesses</strong>
                                                <br /> PSD2 and SCA Explained: From the basics to the implications of PSD2, 3DS and SCA, for businesses that handle online recurring payments.
                                            </div>
                                            <span class="readmore">Read guide</span>
                                        </div>
                                    </div>
                                </a>
                                 <a href="/resources/guides/finops-maturity-framework/" class="r-col mLsm">
                                    <div class="r-card">
                                        <div class="img" style="background-image:url(/static/website/version/images/resources/guides/finops-maturity-framework-whitepaper.png);">
                                        </div>
                                        <div class="txt">
                                            <span class="r-label">
                                                Whitepaper
                                            </span>
                                            <div>
                                                <strong>The FinOps Maturity Framework for High-growth B2B SaaS</strong>
                                                <br />  Identify the maturity level of your SaaS finance ops, preempt potential challenges in the next stage of growth, and prep for it
                                            </div>
                                            <span class="readmore">Read more</span>
                                        </div>
                                    </div>
                                </a>
                                 <a href="/resources/guides/revenue-operations-techstack-download/" class="r-col" >
                                    <div class="r-card">
                                        <div class="img" style="background-image:url(/static/website/version/images/resources/guides/revops-techstack-whitepaper.png);">
                                        </div>
                                        <div class="txt">
                                            <span class="r-label">
                                                Whitepaper
                                            </span>
                                            <div>
                                                <strong> The Ideal RevOps Techstack for B2B SaaS</strong>
                                                <br /> Understand what goes behind a solid RevOps technology stack that enables hyper-growth for SaaS companies.
                                            </div>
                                            <span class="readmore">Read more</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
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
        methods: {},
        mounted() {
            $('.pr-tab__plan-inv').tooltip({
                'show': true,
                'placement': 'bottom'
            });
        }
    }
</script>
<style>
    @media (min-width: 1024px) {
        .resources__r-row:after {
            content: "";
            flex: auto;
        }
        .resources__r-row .r-col:last-child,.resources__r-row .mLsm {
            margin-left:  3.5%;
        }
    }
</style>
