<template>
    <div class="body">
        <app-meta 
            :cb-title="'Resources | Chargebee'" 
            :cb-desc="'Resources - Chargebee'" 
            :cb-url="'/resources/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/resources-v2.css'"
            :cb-head-script="''"
            :cb-body-script="'https://js.hsforms.net/forms/v2.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="'true'" />
        <div class="cr-body">
            <!-- ===================================================================
            Start: Hero
            ==================================================================== -->
            <section class="cr-hero">
                <div class="cr-hero--bg">
                    <div class="container">
                        <div class="cr-hero__header">
                            <h1 class="cr-hero__title">
                                Chargebee Resources
                            </h1>
                            <div class="cr-hero__desc">
                                A collection of guides, webinars, blogs, and all other things you need to run and scale your subscription business.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="cr-hero__body">
                        <div class="cr-hero__cards">
                            <a href="/resources/guides/" target="_blank" class="cr-hero__card">
                                <div class="cr-hero__card-title">
                                    Guides
                                </div>
                                <div class="cr-hero__card-desc">
                                    Explore and learn everything that falls under the umbrella of subscriptions.
                                </div>
                                <div class="cr-hero__card-icon"></div>
                            </a>
                            <a href="/customers/" target="_blank" class="cr-hero__card">
                                <div class="cr-hero__card-title">
                                    Customer Stories
                                </div>
                                <div class="cr-hero__card-desc">
                                    Our customers love us. Don't take our word for it, take theirs.
                                </div>
                                <div class="cr-hero__card-icon"></div>
                            </a>
                            <a href="/webinars/" target="_blank" class="cr-hero__card">
                                <div class="cr-hero__card-title">
                                    Webinar
                                </div>
                                <div class="cr-hero__card-desc">
                                    Explore the best practices followed by fast-growing subscription businesses.
                                </div>
                                <div class="cr-hero__card-icon"></div>
                            </a>
                            <a href="https://www.chargebee.com/blog/" target="_blank" class="cr-hero__card">
                                <div class="cr-hero__card-title">
                                    Blog
                                </div>
                                <div class="cr-hero__card-desc">
                                    Get the best lessons, observations, and stories on SaaS, delivered to your inbox.
                                </div>
                                <div class="cr-hero__card-icon"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===================================================================
            End: Hero
            ==================================================================== -->
            <!-- ===================================================================
            Start: Guides
            ==================================================================== -->
            <section class="cr-media cr-media--guides">
                <div class="container">
                    <div class="cr-media__header">
                        <h2 class="cr-media__title">
                            Guides
                        </h2>
                        <div class="cr-media__desc">
                            From choosing a subscription billing and management platform to expanding your business' horizons, our guides help you with everything under the umbrella of subscriptions.
                        </div>
                    </div>
                    <div class="cr-media__body">
                        <div class="cr-cards">
                            <a class="cr-card" href="/resources/guides/subscription-billing-and-management-guide/">
                                <div class="cr-card__header">
                                    <div class="cr-card__label cr-card__label--text">
                                        BILLING
                                    </div>
                                </div>
                                <div class="cr-card__body">
                                    <div class="cr-card__title">
                                        Getting Started with Subscription Billing Software
                                    </div>
                                    <div class="cr-card__desc">
                                        A definitive guide on choosing a billing system
                                    </div>
                                </div>
                                <div class="cr-card__footer">
                                    <span class="cr-link cr-link--icon">
                                        Read more
                                    </span>
                                </div>
                            </a>
                            <a class="cr-card" href="/resources/guides/saas-pricing-models-guide/">
                                <div class="cr-card__header">
                                    <div class="cr-card__label cr-card__label--text">
                                        Pricing
                                    </div>
                                </div>
                                <div class="cr-card__body">
                                    <div class="cr-card__title">
                                        SaaS Pricing Models 
                                    </div>
                                    <div class="cr-card__desc">
                                        A descriptive guide on different pricing models
                                    </div>
                                </div>
                                <div class="cr-card__footer">
                                    <span class="cr-link cr-link--icon">
                                        Read more
                                    </span>
                                </div>
                            </a>
                            <a class="cr-card" href="/resources/guides/saas-accounting-101/">
                                <div class="cr-card__header">
                                    <div class="cr-card__label cr-card__label--text">
                                        Accounting
                                    </div>
                                </div>
                                <div class="cr-card__body">
                                    <div class="cr-card__title">
                                        SaaS Accounting 101
                                    </div>
                                    <div class="cr-card__desc">
                                        Demystifying SaaS Accounting for revenue recognition
                                    </div>
                                </div>
                                <div class="cr-card__footer">
                                    <span class="cr-link cr-link--icon">
                                        Read more
                                    </span>
                                </div>
                            </a>
                            <a class="cr-card" href="/resources/guides/understanding-eu-vat-guide/">
                                <div class="cr-card__header">
                                    <div class="cr-card__label cr-card__label--text">
                                        Taxes
                                    </div>
                                </div>
                                <div class="cr-card__body">
                                    <div class="cr-card__title">
                                        A complete guide to EU VAT
                                    </div>
                                    <div class="cr-card__desc">
                                        Step-by-step guide for tackling the EU VAT 
                                    </div>
                                </div>
                                <div class="cr-card__footer">
                                    <span class="cr-link cr-link--icon">
                                        Read more
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="cr-media__footer">
                        <a href="/resources/guides/" class="cr-media__action">
                            Start reading our guides <span class="cr-media__action--icon"></span>
                        </a>
                    </div>
                </div>
            </section>
            <!-- ===================================================================
            End: Guides
            ==================================================================== -->
            <!-- ===================================================================
            Start: Webinars
            ==================================================================== -->
            <section class="cr-media cr-media--webinars">
                <div class="container">
                    <div class="cr-media__header">
                        <h2 class="cr-media__title">
                            Webinars
                        </h2>
                        <div class="cr-media__desc">
                            Explore the best practices followed by fast-growing subscription businesses all around the world.
                        </div>
                    </div>
                    <div class="cr-media__body">
                        <div class="cr-cards">
                            <a class="cr-card" target="_blank" href="https://webinars.chargebee.com/pricing-strategy-scaling-saas/">
                                <div class="cr-card__header">
                                    <div class="cr-card__label cr-card__label--icon"></div>
                                </div>
                                <div class="cr-card__body">
                                    <div class="cr-card__title">
                                        Re-pricing your SaaS: It's never too late
                                    </div>
                                    <div class="cr-card__desc">
                                        Explore the best practices followed by fast-growing subscription businesses all around the world.
                                    </div>
                                </div>
                                <div class="cr-card__footer cr-grid__column--two">
                                    <ul class="cr-card__logos">
                                        <li class="cr-card__logo">
                                            <img src="https://webinars.chargebee.com/hs-fs/hubfs/krish-solo.jpg?width=24" class="img-responsive" alt="" />
                                        </li>
                                        <li class="cr-card__logo">
                                            <img src="https://webinars.chargebee.com/hs-fs/hubfs/Growth%20-%20Launch%20-%20Media/pc-profitwell.jpg?width=24" class="img-responsive" alt="" />
                                        </li>
                                    </ul>
                                    <div class="cr-card__timeline">
                                        67 min
                                    </div>
                                </div>
                            </a>
                            <a class="cr-card" target="_blank" href="https://webinars.chargebee.com/nudge-and-capture-plg-chargebee-appcues">
                                <div class="cr-card__header">
                                    <div class="cr-card__label cr-card__label--icon"></div>
                                </div>
                                <div class="cr-card__body">
                                    <div class="cr-card__title">
                                        Building a Baseline for Predictable Product-Led Growth
                                    </div>
                                    <div class="cr-card__desc">
                                        Explore the best practices followed by fast-growing subscription businesses all around the world.
                                    </div>
                                </div>
                                <div class="cr-card__footer cr-grid__column--two">
                                    <ul class="cr-card__logos">
                                        <li class="cr-card__logo">
                                            <img src="https://webinars.chargebee.com/hs-fs/hubfs/Webinars/Speakers/vikram.png?width=24" class="img-responsive" alt="" />
                                        </li>
                                        <li class="cr-card__logo">
                                            <img src="https://webinars.chargebee.com/hs-fs/hubfs/Eric.jpeg?width=24" class="img-responsive" alt="" />
                                        </li>
                                    </ul>
                                    <div class="cr-card__timeline">
                                        52 min
                                    </div>
                                </div>
                            </a>
                            <a class="cr-card" target="_blank" href="https://webinars.chargebee.com/build-efficient-saas-finance-ops">
                                <div class="cr-card__header">
                                    <div class="cr-card__label cr-card__label--icon"></div>
                                </div>
                                <div class="cr-card__body">
                                    <div class="cr-card__title">
                                        Build an efficient Finance Ops team for your SaaS
                                    </div>
                                    <div class="cr-card__desc">
                                        Explore the best practices followed by fast-growing subscription businesses all around the world.
                                    </div>
                                </div>
                                <div class="cr-card__footer cr-grid__column--two">
                                    <ul class="cr-card__logos">
                                        <li class="cr-card__logo">
                                            <img src="https://webinars.chargebee.com/hs-fs/hubfs/Webinars/Speakers/ks.jpeg?width=24" class="img-responsive" alt="" />
                                        </li>
                                        <li class="cr-card__logo">
                                            <img src="https://webinars.chargebee.com/hs-fs/hubfs/amaan-nathoo-spendesk-1.jpg?width=24" class="img-responsive" alt="" />
                                        </li>
                                    </ul>
                                    <div class="cr-card__timeline">
                                        47 min
                                    </div>
                                </div>
                            </a>
                            <a class="cr-card" target="_blank" href="https://webinars.chargebee.com/essentials-subscription-business-europe">
                                <div class="cr-card__header">
                                    <div class="cr-card__label cr-card__label--icon"></div>
                                </div>
                                <div class="cr-card__body">
                                    <div class="cr-card__title">
                                        Demystifying SaaS Growth in Europe
                                    </div>
                                    <div class="cr-card__desc">
                                        Explore the best practices followed by fast-growing subscription businesses all around the world.
                                    </div>
                                </div>
                                <div class="cr-card__footer cr-grid__column--two">
                                    <ul class="cr-card__logos">
                                        <li class="cr-card__logo">
                                            <img src="https://webinars.chargebee.com/hs-fs/hubfs/Webinars/Speakers/vikram.png?width=24" class="img-responsive" alt="" />
                                        </li>
                                        <li class="cr-card__logo">
                                            <img src="https://webinars.chargebee.com/hs-fs/hubfs/Screen%20Shot%202019-06-06%20at%201.06.28%20AM.png?width=24" class="img-responsive" alt="" />
                                        </li>
                                    </ul>
                                    <div class="cr-card__timeline">
                                        42 min
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="cr-media__footer">
                        <a href="/webinars/" class="cr-media__action">
                            Start watching our webinars <span class="cr-media__action--icon"></span>
                        </a>
                    </div>
                </div>
            </section>
            <!-- ===================================================================
            End: Webinars
            ==================================================================== -->
            <!-- ===================================================================
            Start: Testimonial
            ==================================================================== -->
            <section class="cr-testimonial">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 col-md-6">
                            <div class="cr-testimonial__label">
                                Success Stories
                            </div>
                            <div class="cr-testimonial__title">
                                Thousands of <br class="hidden-xs">Subscription businesses trust us with their subscription billing and revenue operations.
                            </div>
                        </div>
                        <div class="col-sm-5 col-md-6">
                            <div class="cr-customers">
                                <div class="cr-customer">
                                    <img src="/static/website/version/images/compare-competitors/stripe/trial.png" width="57" alt="" class="cr-customer__logo" />
                                    <div class="cr-customer__desc">
                                        <b>80% Reduced time</b> spent on Subscription Management
                                    </div>
                                    <div class="cr-customer__action">
                                        <a href="/customers/trail/" class="cr-link cr-link--icon">
                                            Read Case Study
                                        </a>
                                    </div>
                                </div>
                                <div class="cr-customer">
                                    <img src="/static/website/version/images/compare-competitors/stripe/getaccept.png" width="138" alt="" class="cr-customer__logo" />
                                    <div class="cr-customer__desc">
                                        <b>Achieved a 4x</b> increase in revenue
                                    </div>
                                    <div class="cr-customer__action">
                                        <a href="/customers/getaccept/" class="cr-link cr-link--icon">
                                            Read Case Study
                                        </a>
                                    </div>
                                </div>
                                <div class="cr-customer">
                                    <img src="/static/website/version/images/compare-competitors/stripe/fishburners.png" width="143" alt="" class="cr-customer__logo" />
                                    <div class="cr-customer__desc">
                                        <b>Saved 105 hours/month</b> of manual Accounting
                                    </div>
                                    <div class="cr-customer__action">
                                        <a href="/customers/fishburners/" class="cr-link cr-link--icon">
                                            Read Case Study
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cr-media__footer">
                        <a href="/customers/" class="cr-media__action">
                            Hear what our customers have to say <span class="cr-media__action--icon"></span>
                        </a>
                    </div>
                </div>
            </section>
            <!-- ===================================================================
            End: Testimonial
            ==================================================================== -->
            <!-- ===================================================================
            Start: Blog
            ==================================================================== -->
            <section class="cr-media cr-media--blogs">
                <div class="container">
                    <div class="cr-media__body">
                        <div class="cr-cards">
                            <div class="cr-card cr-card--none">
                                <div class="cr-media__title">
                                    Blogs
                                </div>
                                <div class="cr-media__desc">
                                    Get the best lessons, observations, and stories on SaaS, delivered to your inbox.
                                </div>
                                <div class="cr-media__form">
                                    <hs-form :hs-form-id="'e87655e8-ae38-4eed-8079-876ab857b61d'" /><!-- 87a3a5e4-89b4-4bc7-8fcc-ff176707f4c1 -->
                                </div>
                                <img src="/static/website/version/images/resources/icons/blog-subscribe.svg" style="margin-top: 4px;margin-left: 16px;" class="img-responsive" alt="" />
                            </div>
                            <a class="cr-card" href="https://www.chargebee.com/blog/saas-business-growth-findings/">
                                <div class="cr-card__header">
                                    <img src="/static/website/version/images/resources/blog/scaling-saas-billing.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="cr-card__body">
                                    <div class="cr-card__title">
                                        We Studied 6,452 SaaS Companies. The Findings Will Make You Grow.
                                    </div>
                                    <div class="cr-card__desc">
                                        The beauty of the subscription model is that relationships are built right into the revenue model. You provide consistent value to your customers, and in turn, they continue to pay you for that value. 
                                    </div>
                                </div>
                                <div class="cr-card__footer cr-grid__column--two">
                                    <div class="cr-card__category">
                                        BEST OF, GROWTH, PRICING
                                    </div>
                                    <div class="cr-card__timeline">
                                        12 min read
                                    </div>
                                </div>
                            </a>
                            <a class="cr-card" href="https://www.chargebee.com/blog/revenue-operations-essentials/">
                                <div class="cr-card__header">
                                    <img src="/static/website/version/images/resources/blog/rev-ops.png" class="img-responsive" alt="" />
                                </div>
                                <div class="cr-card__body">
                                    <div class="cr-card__title">
                                        The RevOps Triangle: A Fail-Proof Structure for Your Revenue Operations Team
                                    </div>
                                    <div class="cr-card__desc">
                                        The stage is set. You define a revenue target and let the best of your crew run to achieve it. Your Marketing team is trying to identify new channels and strategies to keep up with the growing lead target.
                                    </div>
                                </div>
                                <div class="cr-card__footer cr-grid__column--two">
                                    <div class="cr-card__category">
                                        BEST OF, BUILDING CHARGEBEE
                                    </div>
                                    <div class="cr-card__timeline">
                                        7 min read
                                    </div>
                                </div>
                            </a>
                            <a class="cr-card" href="https://www.chargebee.com/blog/scaling-saas-billing/">
                                <div class="cr-card__header">
                                    <img src="/static/website/version/images/resources/blog/studying-saas-growth.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="cr-card__body">
                                    <div class="cr-card__title">
                                        Scaling SaaS Billing: How To Plan For The Insanity
                                    </div>
                                    <div class="cr-card__desc">
                                        A billing system is at the heart of the subscription wheel. It holds the spokes of invoicing, accounting, and reporting together so your business can operate in the way that you intend it to.
                                    </div>
                                </div>
                                <div class="cr-card__footer cr-grid__column--two">
                                    <div class="cr-card__category">
                                        BEST OF, BILLING
                                    </div>
                                    <div class="cr-card__timeline">
                                        18 min read
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="cr-media__footer">
                        <a href="https://www.chargebee.com/blog/" class="cr-media__action">
                            Start reading our blogs now <span class="cr-media__action--icon"></span>
                        </a>
                    </div>
                </div>
            </section>
            <!-- ===================================================================
            End: Hero
            ==================================================================== -->
            <!-- ===================================================================
            Start: Tools
            ==================================================================== -->
            <section class="cr-media cr-media--tools">
                <div class="container">
                    <div class="cr-media__body">
                        <div class="cr-cards">
                            <div class="cr-card cr-card--none">
                                <div class="cr-media__title">
                                    Tools
                                </div>
                                <div class="cr-media__desc">
                                    Things that come in handy when you are growing your SaaS!
                                </div>
                            </div>
                            <a class="cr-card" href="/resources/tools/compare-payment-gateway-providers/">
                                <div class="cr-card__body">
                                    <div class="cr-card__title">
                                        Payment Gateway Evaluator
                                    </div>
                                    <div class="cr-card__desc">
                                        Evaluate different Payment Gateways, and choose the best for your Subscription business.
                                    </div>
                                </div>
                                <div class="cr-card__footer">
                                    <div class="cr-card__action">
                                        <span class="cr-link cr-link--icon">
                                            See the tool
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a class="cr-card" href="/subscription-metrics-analysis-tool/">
                                <div class="cr-card__body">
                                    <div class="cr-card__title">
                                        Revenue MD
                                    </div>
                                    <div class="cr-card__desc">
                                        A tool-kit packed with insights to help you identify and solve your revenue growth problems in no time.
                                    </div>
                                </div>
                                <div class="cr-card__footer">
                                    <div class="cr-card__action">
                                        <span class="cr-link cr-link--icon">
                                            See the tool
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===================================================================
            End: Tools
            ==================================================================== -->
        </div>
        <app-footer />
    </div>
</template>
<script>
    import AppMeta from '~/components/AppMeta.vue';
    import AppHeader from '~/components/AppHeader.vue';
    import AppFooter from '~/components/AppFooter.vue';
    import hsForm from '~/components/hsForm.vue';
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter,
            'hs-form': hsForm
        },
        methods: {},
        mounted() {
        }
    }
</script>
<style type="text/css">
</style>
