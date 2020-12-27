<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta 
            :cb-title="'Flexible SaaS Billing for Growing Businesses - Chargebee'" 
            :cb-desc="'SaaS Billing doesn’t have to be hard. Chargebee’s subscription billing intelligence built on top of payment gateways, tailored for SaaS businesses.'" 
            :cb-url="'/saas-billing/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/product.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js,https://js.hsforms.net/forms/v2.js,https://js.chilipiper.com/marketing.js'"
            :cb-has-noindex="false"/>
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Hero
        ==================================================================== -->

        <div class="gaussian">
        <div id="cp-hero">
        <section class="cp-hero cp-hero--rbi cp-hero--temp">
            <div class="cp-hero__container">
                <div class="cp-hero__body">
                    <div class="cp-hero__header" style="max-width: inherit;">
                        <h1 class="cp-hero__title">
                            SaaS Billing doesn’t have to be hard
                        </h1>
                        <p class="cp-hero__desc">
                            Your subscription business needs a smart SaaS billing solution that integrates seamlessly with<br class="visible-lg"> your existing systems. No dependencies, no workarounds, no revenue leakage.
                        </p>
                    </div>
                    <!-- <div class="cp-hero__actions">
                        <div class="cp-hero__action">
                            <a href="/trial-signup/" class="cp-btn">Sign up for free</a>
                        </div>
                        <div class="cp-hero__action">
                            <a href="/schedule-a-demo/" class="cp-btn cp-btn--ghost">Schedule a demo</a>
                        </div>
                    </div> -->
                    <inline-form :same-page="true" />
                </div>
            </div>
        </section>
        </div>
        <!-- ====================================================================
        End: Website Hero
        ===================================================================== --> 
        <!-- ====================================================================
        Start: Website Body
        ===================================================================== -->
        <div id="main-content">


        <!-- -------------------------------------------------------------------
        Start: Component - 6
        -------------------------------------------------------------------  -->
        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 col-md-5 col-md-offset-1">
                        <div class="cp-article__body">
                            <div class="cp-article__header">
                                <h2 class="cp-article__title">
                                    Why do you need a SaaS Billing solution?
                                </h2>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    You need a SaaS Billing solution because scaling from $5M to $50M is almost impossible without one.
                                </p>
                                <p class="cp-article__desc">
                                    Billing needs are different for different customers, and different for you at each stage of growth. An in-house system may feel like a win when you’re able to generate invoices automatically, but the bubble bursts soon after. 
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-6">
                        <img src="/static/website/version/images/icon/sprint/saas-billing/saas-billing-comic.svg" alt="" class="img-responsive">
                    </div>

                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->
        <!-- -------------------------------------------------------------------
        End: Component - 6
        -------------------------------------------------------------------  -->


        <!-- -------------------------------------------------------------------
        Start: Component - 2
        -------------------------------------------------------------------  -->
        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1">
                        <div class="cp-article__body">
                            <div class="cp-article__header">
                                <h2 class="cp-article__title">
                                    How can Chargebee solve your SaaS Billing woes?
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->
        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article cp-article--alt" with_in_this_section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 col-md-offset-0 col-md-6">
                        <div move_this>
                            <div class="cp-article__figure">
                                <img src="/static/website/version/images/icon/sprint/saas-billing/payments-module.png" alt="Payments module" class="img-responsive" width="600">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-sm-offset-2 col-md-offset-0 col-md-6">
                        <div class="cp-article__body">
                            <div class="cp-article__header">
                                <h3 class="cp-article__title">Payments module</h3>
                            </div>
                            <div class="cp-article__content">
                                <div move_here></div>
                                <p class="cp-article__desc">
                                    When you sell enterprise-grade subscriptions you need to be able to accommodate the longer sales cycles, negotiate on pricing, and understand the org structure of each account that come with it. Chargebee is designed to automate the entire Quote-to-Cash workflow of your sales engine, so they can just focus on acquiring and closing. Allow for complex sales workflows with hierarchical accounts, quote approvals, and tailored pricing plans. Ensure that your ability to manage subscribers and subscriptions syncs with your sales and tech stack, without missing a beat. And access your business and revenue health in realtime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->
        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article cp-article--alt">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1">
                        <div class="cp-article__body">
                            <div class="cp-article__header">
                                <h3 class="cp-article__title">
                                    Subscription Management
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-sm-offset-2 col-md-11 col-md-offset-1">
                        <div class="row">
                            <div class="col-md-7 col-md-push-5">
                                <div class="cp-article__figure mTopMd--neg" style="margin-left: 30px;">
                                    <img src="/static/website/version/images/icon/sprint/saas-billing/subscription-mgmnt.png" alt="Subscription Management" class="img-responsive" width="600">
                                </div>
                            </div>
                            <div class="col-md-5 col-md-pull-7">
                                <div class="cp-article__content">
                                    <p class="cp-article__desc">
                                        Get visibility across the entire customer lifecycle. You can offer a payment grace period, upsell, or cross-sell with add-ons, and solve 473 billing scenarios with Chargebee. What’s more is Chargebee supports multiple pricing models so you can easily run plan and pricing experiments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->
        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article cp-article--alt" with_in_this_section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 col-md-offset-0 col-md-6">
                        <div move_this>
                            <div class="cp-article__figure">
                                <img src="/static/website/version/images/icon/sprint/saas-billing/billing-automation.png" alt="Billing Automation" class="img-responsive">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-sm-offset-2 col-md-offset-0 col-md-6">
                        <div class="cp-article__body">
                            <div class="cp-article__header">
                                <h3 class="cp-article__title">Billing Automation</h3>
                            </div>
                            <div class="cp-article__content">
                                <div move_here></div>
                                <p class="cp-article__desc">
                                    Run your entire recurring billing process on auto-pilot with Chargebee. All you have to do is schedule calendar billing dates and we handle the rest - proration, taxation, invoice consolidation, and so much more. You can even set Net D terms for your invoice and handle refunds seamlessly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->
        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article cp-article--alt">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1">
                        <div class="cp-article__body">
                            <div class="cp-article__header">
                                <h3 class="cp-article__title">
                                    Revenue Operations
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-sm-offset-2 col-md-11 col-md-offset-1">
                        <div class="row">
                            <div class="col-md-7 col-md-push-5">
                                <div class="cp-article__figure mTopMd--neg" style="margin-left: 30px;">
                                    <img src="/static/website/version/images/icon/sprint/saas-billing/revenue-ops.png" alt="Revenue Operations" class="img-responsive" width="400">
                                </div>
                            </div>
                            <div class="col-md-5 col-md-pull-7">
                                <div class="cp-article__content">
                                    <p class="cp-article__desc">
                                        Align your revenue functions to growth with Chargebee. The RevOps infrastructure layer seamlessly integrates with the toolstack of sales, marketing, customer success, and finance and helps decision-making in the back with 360° subscription analytics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->
        <!-- -------------------------------------------------------------------
        End: Component - 2
        -------------------------------------------------------------------  -->

        
        <!-- -------------------------------------------------------------------
        Start: Component - 4
        -------------------------------------------------------------------  -->
        <section class="cp-article">
            <div class="container">
                <div class="row">
                    <div class="col-sm-7 col-sm-offset-1 col-md-6">
                        <div class="cp-ttestimonial revealOnScroll" data-animate='fadeInUp'>
                            <div class="cp-ttestimonial__content" style="padding-top: 42px;">
                                It just comes down to numbers. If we have two cloud engineers currently, the big thing is maintaining, right? If he's going to be building, maintaining, and expanding what our billing architecture looks like internally, then he's not building the product. And if he's not building the product then we need to hire someone to do that, or we could pay Chargebee. It's just a numbers game if that's the way it works out.
                            </div>
                            <div class="cp-ttestimonial__author">
                                — Drawboard
                            </div>
                        </div>
                    </div>


                    <div class="col-sm-5 col-md-5">
                        <div class="cp-article__body" style="margin-top: 54px; text-align: center">
                            <div class="cp-article__icon">
                                <img src="/static/website/version/images/icon/sprint/icons/build-or-buy.svg" alt="" width="40" class="img-responsive" style="margin: 0 auto 24px">
                            </div>
                            <div class="cp-article__header">
                                <h3 class="cp-article__title">
                                    To build or buy?
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <a href="/static/resources/downloads/guides/Build-vs-Buy-Chargebee.pdf" target="_blank" class="cp-btn cp-btn--ghost cp-btn--ghost-primary" style="margin: auto;">
                                    Download Guide
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        Start: Component - 4
        -------------------------------------------------------------------  -->



        <!-- -------------------------------------------------------------------
        Start: Component - 3
        -------------------------------------------------------------------  -->
        <section class="cp-article">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-0">
                        <div class="cp-article__body" style="margin-bottom: 52px;">
                            <div class="cp-article__header">
                                <h2 class="cp-article__title">
                                    Why Chargebee?
                                </h2>
                            </div>


                            <div class="cp-article__figure">
                                <img src="/static/website/version/images/icon/sprint/saas-billing/why-chargebee.svg" alt="Why Chargebee?" class="img-responsive">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="media">
                                    <div class="media-body"> 
                                        <h3 class="cp-article__title">Compliance</h3> 
                                        <p class="cp-article__desc">
                                            Tackle the existing compliance laws around EU-VAT, GDPR, PSD2, ASC-606, and the ones that are yet to come without getting lost in endless paperwork and checklists.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="media">
                                    <div class="media-body"> 
                                        <h3 class="cp-article__title">Competence</h3> 
                                        <p class="cp-article__desc">
                                            Chargebee has the competence to handle multiple interdependent activities like subscription management, collections, revenue recognition etc. in the best way possible. 
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="media"> 
                                    <div class="media-body"> 
                                        <h3 class="cp-article__title">Continuity</h3> 
                                        <p class="cp-article__desc">
                                            Switch between tools as you scale without breaking your revenue workflow. Chargebee integrates with your business functions’ toolkit, from CRM to accounting.
                                        </p>
                                    </div>
                                </div>
                            </div>
                       </div>
                        

                        <div class="row">
                            <div class="col-sm-4">
                                <div class="media">
                                    <div class="media-body"> 
                                        <h3 class="cp-article__title">Commitment</h3> 
                                        <p class="cp-article__desc">
                                            We go beyond being just a product and offer exceptional solutions and support. Don’t sacrifice 3/4 th of your mindshare and developers to keep your revenue workflow running. 
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="media">
                                    <div class="media-body"> 
                                        <h3 class="cp-article__title">Complexity</h3> 
                                        <p class="cp-article__desc">
                                            Rich with game-changing tweaks and features for 500+ edge-cases, we help you handle complex scenarios without complicating them. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>  

                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Component - 3
        -------------------------------------------------------------------  -->

        



        <!-- -------------------------------------------------------------------
        Start: Component - 4
        -------------------------------------------------------------------  -->
        <section class="cp-article">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <a href="/customers/whiteboard/" target="_blank" class="cp-ttestimonial revealOnScroll" data-animate='fadeInUp'>
                            <figure class="cp-ttestimonial__figure">
                                <img src="/static/website/version/images/case-study/whiteboard/whiteboard-logo.png" alt="Chargebee Customers" class="img-responsive" width="220">
                            </figure>
                            <div class="cp-ttestimonial__content">
                                We decided on Chargebee largely because of the flexibility and support offered where importing existing data was concerned. It took some time and consultation, but Chargebee made it pretty easy and did a great job of mitigating risk as we migrated.
                            </div>
                            <div class="cp-ttestimonial__author">
                                — Ben Laughter, VP
                            </div>
                        </a>
                    </div>


                    <div class="col-sm-10 col-sm-offset-1">
                        <div class="cp-tslider">
                            <div class="cp-tslider__figure">
                                <section class="customer-logos customer-logos__one slider">
                                    <div class="slide">
                                        <div class="doodle_bg"></div>
                                    </div>
                                    <div class="slide">
                                        <div class="envoy_bg"></div>
                                    </div>
                                    <div class="slide">
                                        <div class="freedom_bg"></div>
                                    </div>
                                    <div class="slide">
                                        <div class="freshworks_blck_bg"></div>
                                    </div>
                                    <div class="slide">
                                        <div class="knewton_logo_bg"></div>
                                    </div>
                                    <div class="slide">
                                        <div class="okta_bg"></div>
                                    </div>
                                    <div class="slide">
                                        <div class="percona_bg"></div>
                                    </div>
                                    <div class="slide">
                                        <div class="study_bg"></div>
                                    </div>
                                </section>
                            </div>
                            <div class="cp-tslider__content">
                                <a href="/customers/" class="cp-link">See all customers</a> who’ve untangled their subscription billing operations with Chargebee
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        Start: Component - 4
        -------------------------------------------------------------------  -->




        <!-- -------------------------------------------------------------------
        Start: Component - 7
        -------------------------------------------------------------------  -->
        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article">
            <div class="container">
            <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                        <div class="cp-tpanels">
                            <h2 class="cp-tpanels__title">
                                SaaS Billing FAQs
                            </h2>
                            <div class="cp-tpanels__container">
                                <!-- =============================================
                                Panel Start 
                                ============================================== -->
                                <div class="cp-tpanel" data-panel="true">
                                    <div class="cp-tpanel__bg"></div>
                                    <div class="cp-tpanel__title">
                                        Is it best to build a SaaS billing solution or buy one?
                                    </div>
                                    <div class="cp-tpanel__desc" data-panel-desc="true">
                                        Buy > Build. It’s wise to buy than to build if SaaS billing is not going to be the core of your product. Building a recurring billing software is a painstakingly long process and billing needs keep changing as your SaaS business evolves.
                                    </div>
                                </div>
                                <!-- =============================================
                                Panel End 
                                ============================================== -->
                                <!-- =============================================
                                Panel Start 
                                ============================================== -->
                                <div class="cp-tpanel" data-panel="true">
                                    <div class="cp-tpanel__bg"></div>
                                    <div class="cp-tpanel__title">
                                        How is Chargebee priced?
                                    </div>
                                    <div class="cp-tpanel__desc" data-panel-desc="true">
                                        Chargebee works on top of your TPV (total processing volume). You pay us when you process. Plans start at $299. 
                                    </div>
                                </div>
                                <!-- =============================================
                                Panel End 
                                ============================================== -->
                                <!-- =============================================
                                Panel Start 
                                ============================================== -->
                                <div class="cp-tpanel" data-panel="true">
                                    <div class="cp-tpanel__bg"></div>
                                    <div class="cp-tpanel__title">
                                        What payment methods are supported?
                                    </div>
                                    <div class="cp-tpanel__desc" data-panel-desc="true">
                                        Chargebee supports Cards, PayPal, Amazon Payments, Direct debit Payments, Offline Payments, Alipay and UnionPay, Apple Pay. You can read more about it <a href="https://www.chargebee.com/docs/payment-method-overview.html" class="cp-link">here</a>.
                                    </div>
                                </div>
                                <!-- =============================================
                                Panel End 
                                ============================================== -->
                                <!-- =============================================
                                Panel Start 
                                ============================================== -->
                                <div class="cp-tpanel" data-panel="true">
                                    <div class="cp-tpanel__bg"></div>
                                    <div class="cp-tpanel__title">
                                        How do I migrate my customer data to Chargebee?
                                    </div>
                                    <div class="cp-tpanel__desc" data-panel-desc="true">
                                        You can DIY by using the <a href="https://www.chargebee.com/docs/bulk-operations.html" class="cp-link">bulk operations</a> feature. If the amount of data is overwhelming, we have an in-house migration team to migrate your customer data for free the first time. Read more about our migration <a href="https://www.chargebee.com/docs/migration-faqs.html" class="cp-link">here</a>.
                                    </div>
                                </div>
                                <!-- =============================================
                                Panel End 
                                ============================================== -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->
        <!-- -------------------------------------------------------------------
        End: Component - 7
        -------------------------------------------------------------------  -->



        <!-- -------------------------------------------------------------------
        Start: Footer
        -------------------------------------------------------------------  -->
        <section class="cp-footer container" style="margin-bottom: 120px;">
            <div class="col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">
                <div class="cp-footer__container">
                    <div class="cp-footer__title">
                        Further Information
                    </div>
                    <ol class="cp-footer__actions cp-footer__actions--temp">
                        <li class="cp-footer__action">
                            <a href="/resources/guides/self-service-saas-revenue-growth/" class="cp-link">
                                Self Service SaaS Guide
                            </a>
                        </li>
                        <li class="cp-footer__action">
                            <a href="/resources/guides/subscription-pricing-trial-strategy/" class="cp-link">
                                Pricing and Trial Playbook
                            </a>
                        </li>
                        <li class="cp-footer__action">
                            <a href="/resources/guides/involuntary-churn-payment-failed/" class="cp-link">
                                A Definitive Guide to Involuntary Churn and Failed Payments
                            </a>
                        </li>
                        <li class="cp-footer__action">
                            <a href="/resources/guides/subscription-billing-and-management-guide/" class="cp-link">
                                Getting Started with a Subscription Billing Software - A Definitive Guide
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Footer
        -------------------------------------------------------------------  -->

        <!-- -------------------------------------------------------------------
        Start: Footer
        -------------------------------------------------------------------  -->
        <section class="cp-footer container">
            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <div class="cp-footer__container">
                    <h2 class="cp-footer__title text-center">
                        Streamline your SaaS billing with Chargebee
                    </h2>
                    <div class="cp-footer__actions">
                        <div class="cp-footer__action">
                            <a href="/trial-signup/" class="cp-btn cp-btn--primary">Sign up for free</a>
                        </div>
                        <div class="cp-footer__action">
                            <a href="/schedule-a-demo/" class="cp-btn cp-btn--ghost cp-btn--ghost-primary">Schedule a demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Footer
        -------------------------------------------------------------------  -->
        <!-- ===================================================================
        End: Website Body
        ==================================================================== -->
        </div>        
        <!-- ===================================================================
        Start: Website Footer
        ==================================================================== -->
        <app-footer />
        <!-- ===================================================================
        End: Website Footer
        ==================================================================== -->
        </div>
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
    import formInline from '~/components/inlineForm.vue';
    
    export default {
        data () {
            return {
                structuredData: { 
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Is it best to build a SaaS billing solution or buy one?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Buy > Build. It's wise to buy than to build if SaaS billing is not going to be the core of your product. Building a recurring billing software is a painstakingly long process and billing needs keep changing as your SaaS business evolves."
                            }
                        },               
                        {
                            "@type": "Question",
                            "name": "How is Chargebee priced?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Chargebee works on top of your TPV (total processing volume). You pay us when you process. Plans start at $299."
                            }
                        },               
                        {
                            "@type": "Question",
                            "name": "What payment methods are supported?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Chargebee supports Cards, PayPal, Amazon Payments, Direct debit Payments, Offline Payments, Alipay and UnionPay, Apple Pay. You can read more about it here."
                            }
                        },				
                        {
                            "@type": "Question",
                            "name": "How do I migrate my customer data to Chargebee?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can DIY by using the bulk operations feature. If the amount of data is overwhelming, we have an in-house migration team to migrate your customer data for free the first time. Read more about our migration here."
                            }
                        }
                    ]
                }
            }
        },
        head () {
            return {
                script: [
                    { type: 'application/ld+json', innerHTML: JSON.stringify(this.structuredData) }
                ]
            }
        },
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter,
            'inline-form': formInline
        },

        mounted() {
            $(window).on('load', function(){
                setTimeout(function(){
                    $('.cp-hero__highlight').addClass('cp-hero__highlight--active')
                }, 750)

                //For rellax js parallax
                // var rellax = new Rellax('.rellax');
            })



            $('.customer-logos__one').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                dots: false,
                speed: 2000,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 2
                    }
                }]
            });


            //For Panel = FAQ list click
            $('[data-panel]').click(function() {
                $(this).toggleClass('cp-tpanel--active').siblings().removeClass('cp-tpanel--active');
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
    .cp-hero{
        overflow: initial;
    }
    @media (min-width: 768px) {
        .cp-hero--rbi{
            background: #fff7e6 url('/static/website/version/images/product/billing-and-invoices/billing-and-invoicing-bg.svg') bottom/contain no-repeat;
        }
    }
    @media (min-width: 1600px) {
        .cp-hero--rbi{
            background-size: cover;
        }
    }
    #ch-js-header-cloned{
        display: none;
    }
    @media (min-width: 992px){
       .cp-paper{
            max-height: 500px;
            overflow: hidden;
        } 
        .cp-hero__container {
            padding-bottom: 90px;
        }
    }
   /* @media (min-height: 700px) and (min-width: 992px){
        .cp-hero {
            min-height: 540px;
        }
    }*/





    .cp-hero--temp{
        margin-bottom: 120px;
    }
    .media{
        max-width: 480px;
        margin-bottom: 50px;
    }
    .media .cp-article__title{
        margin-bottom: 16px;
        font-size: 18px;
        font-weight: 700;
        line-height: 21px;
        margin-bottom: 8px;
    }
    .media .cp-article__desc{
        max-width: 380px;
    }
    .media-left img {
        max-width: 32px;
    }
    .media-left, .media>.pull-left{
        margin-right: 24px;
    }
    .cp-footer{
        text-align: left;
    }
    .cp-footer__actions--temp{
        display: block;
        padding: 0;
    }
    @media (min-width: 992px){
        .cp-footer__action{
            font-size: 24px;
            margin-bottom: 12px;
        }
        .cp-footer__action .cp-link{
            line-height: 32px;
            color: #000;
        }
        .cp-footer__action .cp-link:hover,
        .cp-footer__action .cp-link:focus{
            color: #000FF0;
        }
    }
    .formContainer{
        margin: auto;
    }
</style>
<!-- ===========================================================================
End: Style
============================================================================ -->