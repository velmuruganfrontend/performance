<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta 
            :cb-title="'Chargeback Management can now be automated with Chargebee'" 
            :cb-desc="'Workflows to handle various stages of chargebacks automatically to help finance teams with faster reconciliations and customers with premium experience even while contesting/resolving disputes.'" 
            :cb-url="'/recurring-payments/chargeback-management/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/fall-release-20.css'"
            :cb-head-script="''"
            :cb-body-script="''"
			:disable-bootstrap-css="true"
            :cb-has-noindex="false"/>
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Hero
        ==================================================================== -->
        <div class="cr-body cr-body--green">
            <!-- ===================================================================================
            Start - SVG Sprite 
            ==================================================================================== -->
            <svg-sprite-for-big-rocks />
            <!-- ===================================================================================
            End - Svg Sprite
            ==================================================================================== -->
            <!-- ===================================================================
            Start: Hero
            ==================================================================== -->
            <div class="cr-row">
                <div class="cr-hero">
                    <div class="cr-hero__shadow">
                        <div class="cr-hero__media hidden-xs hidden-sm">
                            <div></div>
                            <div>
                                <svg width="302" height="255">
                                    <use xlink:href="#big-rocks-banner"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-1 col-lg-offset-0 col-md-7 col-lg-8 animate fadeInUp">
                                <div class="cr-hero__label">
                                    NEW
                                </div>
                                <div class="cr-hero__title">
                                    Don’t Let Chargebacks Suck Your Time and Effort
                                </div>
                                <div class="cr-hero__desc">
                                    Chargebacks are bad news. Make it sufferable with intelligent, automated workflows to dictate how you want to handle disputes in Chargebee.
                                </div>
                                <div class="cr-actions">
                                    <a href="/schedule-a-demo/" class="cr-action">Schedule a demo</a>
                                    <a href="/trial-signup/" class="cr-action cr-action--alt">Sign up for free</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ====================================================================
            End: Website Hero
            ===================================================================== --> 
            <!-- ====================================================================
            Start: Website Body
            ===================================================================== -->
            <!-- -------------------------------------------------------------------
            Start: Component - 3
            -------------------------------------------------------------------  -->
            <section class="cr-article">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-1">
                            <div class="cr-article__body">
                                <div class="cr-article__header cr-article__header--alt">
                                    <h2 class="cr-article__title revealOnScroll" data-animate='fadeInUp'>
                                        Automate Chargeback Management
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-11 col-sm-offset-1" style="border-bottom: 1px solid #242438;padding-bottom: 40px;">
                            <div class="row">
                                <div class="col-sm-6 col-md-5">
                                    <div class="media revealOnScroll" data-animate='fadeInUp'>
                                        <div class="media-left"> 
                                            <svg width="36" height="36">
                                                <use xlink:href="#reduce-the-overhead"></use>
                                            </svg>
                                        </div> 
                                        <div class="media-body">
                                            <p class="cr-article__desc">
                                                <strong>Reduce the overhead</strong> of manually monitoring and recording chargebacks into your system of record
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-5 col-md-offset-1">
                                    <div class="media revealOnScroll" data-animate='fadeInUp'>
                                        <div class="media-left"> 
                                            <svg width="36" height="36">
                                                <use xlink:href="#track-ar-accurately"></use>
                                            </svg>
                                        </div> 
                                        <div class="media-body">
                                            <p class="cr-article__desc">
                                                <strong>Track Account Receivables accurately</strong> through real-time mapping of invoice status to that of the chargeback
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>        
                            <div class="row">
                                <div class="col-sm-6 col-md-5">
                                    <div class="media revealOnScroll" data-animate='fadeInUp'>
                                        <div class="media-left"> 
                                            <svg width="36" height="36">
                                                <use xlink:href="#minimize-future-disputes"></use>
                                            </svg>
                                        </div> 
                                        <div class="media-body">
                                            <p class="cr-article__desc">
                                                <strong>Minimize future disputes</strong> by pausing or canceling subscriptions that seem risky
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-5 col-md-offset-1">
                                    <div class="media revealOnScroll" data-animate='fadeInUp'>
                                        <div class="media-left"> 
                                            <svg width="36" height="36">
                                                <use xlink:href="#deliver-exceptional-customer-experience"></use>
                                            </svg>
                                        </div> 
                                        <div class="media-body">
                                            <p class="cr-article__desc">
                                                <strong>Deliver exceptional customer experience</strong> through timely actions on chargeback requests
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
            Start: Article
            -------------------------------------------------------------------  -->
            <section class="cr-article">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 col-md-5 col-md-offset-1">
                            <div class="cr-article__body">
                                <div class="cr-article__label cr-article__label--yellow">
                                    AUTOMATE CHARGEBACK BOOKKEEPING
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8 col-sm-offset-2 col-md-12 col-md-offset-0">
                            <div class="row">
                                <div class="col-md-6 col-md-push-6 visible-md visible-lg">
                                    <div class="cr-article__figure mTopMd--neg revealOnScroll" data-animate='fadeInUp'>
                                        <img src="/static/website/version/images/fall-release-20/chargeback-management/update-customer-record.svg" alt="Track and Record Chargebacks Effortlessly" class="img-responsive" style="width: 75%;">
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-pull-5">
                                    <div class="cr-article__header revealOnScroll" data-animate='fadeInUp'>
                                        <h3 class="cr-article__title">
                                            Track and Record Chargebacks Effortlessly
                                        </h3>
                                    </div>

                                    <img src="/static/website/version/images/fall-release-20/chargeback-management/update-customer-record.svg" alt="Track and Record Chargebacks Effortlessly" class="img-responsive visible-xs visible-sm">

                                    <div class="cr-article__content revealOnScroll" data-animate='fadeInUp'>
                                        <p class="cr-article__desc">
                                            Growth brings along with it more payment disputes and more time and effort spent in manual tracking. Reclaim your team’s time by adding chargebacks automatically into your customer record. Chargebee listens to your gateway for chargebacks and keeps your billing records up-to-date, real-time.
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
            <section class="cr-article">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-6">
                            <div class="cr-article__body">
                                <div class="cr-article__label cr-article__label--yellow">
                                    CREDIT NOTES & INVOICES
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8 col-sm-offset-2 col-md-12 col-md-offset-0">
                            <div class="row">
                                <div class="col-md-6 visible-md visible-lg">
                                    <div class="cr-article__figure mTopMd--neg revealOnScroll" data-animate='fadeInUp'>
                                        <img src="/static/website/version/images/fall-release-20/chargeback-management/customer-experience.svg" alt="Create an Accurate Picture of your Account Receivables" class="img-responsive">
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="cr-article__header revealOnScroll" data-animate='fadeInUp'>
                                        <h3 class="cr-article__title">
                                            Create an Accurate Picture of Your Account Receivables
                                        </h3>
                                    </div>

                                    <img src="/static/website/version/images/fall-release-20/chargeback-management/customer-experience.svg" alt="Create an Accurate Picture of your Account Receivables" class="img-responsive visible-xs visible-sm">

                                    <div class="cr-article__content revealOnScroll" data-animate='fadeInUp'>
                                        <p class="cr-article__desc">
                                            Would you issue a credit note to acknowledge a dispute or change the invoice status to unpaid while you follow up with the customer to understand what went wrong? Have your pick. Either way, your billing system will accurately reflect Account Receivables helping your finance team reconcile and close books faster. 
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
            <section class="cr-article">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1">
                            <div class="cr-article__body">
                                <div class="cr-article__label cr-article__label--yellow">
                                    MANAGE SUBSCRIPTIONS
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8 col-sm-offset-2 col-md-12 col-md-offset-0">
                            <div class="row">
                                <div class="col-md-6 col-md-push-6 visible-md visible-lg">
                                    <div class="cr-article__figure mTopMd--neg revealOnScroll" data-animate='fadeInUp'>
                                        <img src="/static/website/version/images/fall-release-20/chargeback-management/account-receivables.svg" alt="Deliver a Superior Customer Experience" class="img-responsive">
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-pull-5">
                                    <div class="cr-article__header revealOnScroll" data-animate='fadeInUp'>
                                        <h3 class="cr-article__title">
                                            Deliver a Superior Customer Experience
                                        </h3>
                                    </div>

                                    <img src="/static/website/version/images/fall-release-20/chargeback-management/account-receivables.svg" alt="Deliver a Superior Customer Experience" class="img-responsive visible-xs visible-sm">

                                    <div class="cr-article__content revealOnScroll" data-animate='fadeInUp'>
                                        <p class="cr-article__desc">
                                            The last thing you want to do with a customer who raised a chargeback is to charge their card again. Chargebee lets you take timely actions to keep the customer’s faith while you figure out what led to the dispute. Set up rules to pause or cancel subscriptions immediately or at the end of the billing term while keeping the customer informed of your processes. 
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
            <section class="cr-article">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 col-md-12 col-md-offset-0">
                            <div class="row row-align--center">
                                <div class="col-md-6 visible-md visible-lg">
                                    <div class="cr-article__figure mTopMd--neg revealOnScroll" data-animate='fadeInUp'>
                                        <img src="/static/website/version/images/fall-release-20/chargeback-management/minimise-gateway-risks.svg" width="320" alt="Minimize Gateway Related Risks" class="img-responsive">
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="cr-article__header revealOnScroll" data-animate='fadeInUp'>
                                        <div class="cr-article__label cr-article__label--yellow">
                                            CHARGEBACK RISK MITIGATION
                                        </div>
                                        <h3 class="cr-article__title">
                                            Minimize Gateway Related Risks
                                        </h3>
                                    </div>
                                    
                                    <img src="/static/website/version/images/fall-release-20/chargeback-management/minimise-gateway-risks.svg" width="320" alt="Minimize Gateway Related Risks" class="img-responsive visible-xs visible-sm">
                                    
                                    <div class="cr-article__content revealOnScroll" data-animate='fadeInUp'>
                                        <p class="cr-article__desc">
                                            Without adequate checks and balances, chargebacks can lead to all kinds of risks, including higher processing fees, stifled cash flow, and the worst, having your account closed. Most chargebacks come from customers who have already raised a dispute before. Chargebee enables you to automatically make decisions on chargebacks, thereby allowing you to de-risk your business from future payment disputes. 
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
            <section class="cr-article cr-article--center">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <div class="cr-article__body revealOnScroll" data-animate='fadeInUp'>
                                <div class="cr-article__content">
                                    <p class="cr-footer__title">
                                        Solve your subscription billing problems today, <br class="visible-lg" />and preempt ones that would’ve cropped up a year from now.
                                    </p>
                                </div>
                                <div class="cr-article__actions">
                                    <div class="cr-article__action">
                                        <a href="/recurring-billing-invoicing/" class="cr-link cr-link--icon">Recurring Billing</a>
                                    </div>
                                    <div class="cr-article__action">
                                        <a href="/subscription-management/" class="cr-link cr-link--icon">Subscription Management</a>
                                    </div>
                                    <div class="cr-article__action">
                                        <a href="/features/" class="cr-link cr-link--icon">View all features</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- -------------------------------------------------------------------
            Start: Footer
            -------------------------------------------------------------------  -->
            <!-- <section class="cr-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                            <div class="cr-footer__container">
                                <h2 class="cr-footer__title">
                                    With Chargebee, you get more than just a billing system software - you get a partner who is invested in your growth.
                                </h2>
                                <div class="cr-footer__actions">
                                    <div class="cr-footer__action">
                                        <a href="/trial-signup/" class="cr-btn cr-btn--primary">Sign up for free</a>
                                    </div>
                                    <div class="cr-footer__action">
                                        <a href="/schedule-a-demo/" class="cr-btn cr-btn--ghost cr-btn--ghost-primary">Schedule a demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> -->
            <!-- -------------------------------------------------------------------
            End: Footer
            -------------------------------------------------------------------  -->
            <!-- ===================================================================
            End: Website Body
            ==================================================================== -->
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
    import svgSpriteForBigRocks from '~/components/svgSpriteForBigRocks.vue';
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter,
            'svg-sprite-for-big-rocks': svgSpriteForBigRocks
        }
    }
</script>
<!-- ===========================================================================
End: Scripts
============================================================================ -->
<style>
    @media (max-width: 991px){
        .cr-article img{
            margin-bottom: 24px;
        }
    }

    .fill-theme {
        fill: #154180; 
    }
    .fill-theme--opacity {
        fill: #154180;
        opacity: .2; 
    }
</style>