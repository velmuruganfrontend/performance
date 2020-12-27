<!-- ===========================================================================
Start: Main Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Meta Section
        ==================================================================== -->
        <app-meta 
        :cb-title="'Simplify SaaS Billing | Chargebee'" 
        :cb-desc="'Streamline the entire Billing Operations for your SaaS with Chargebee.'"
        :cb-url="'/campaigns/saas-subscription-billing/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/saas-subscription-billing.css,https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css,https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css'"
        :cb-head-script="''"
        :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js'"
        :cb-has-noindex="true" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="sb-main">
            <!-- ---------------------------------------------------------------
            Start: Hero
            ---------------------------------------------------------------- -->
            <section class="l-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="sb-hero">
                                <div class="sb-hero__header">
                                    <div class="sb-hero__label">
                                        Go live before the end of the year and get 25% off!
                                    </div>
                                    <div class="sb-hero__content">
                                        <h1 class="sb-hero__title">
                                            Untangle Your Business from <span class="sb-hero__highlight">Spaghetti Billing</span>
                                        </h1>
                                        <p class="sb-hero__desc">
                                            The One Subscription Billing and Management Platform to Simplify Your Workflow.
                                        </p>
                                    </div>
                                    <div class="sb-hero__actions">
                                        <div class="sb-hero__action">
                                            <a href="/trial-signup/" class="sb-btn">Sign up for free</a>
                                        </div>
                                        <div class="sb-hero__action">
                                            <a href="/schedule-a-demo/" class="sb-btn sb-btn--ghost">Schedule a Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="sb-hero__figure hidden-xs">
                                    <img src="/static/website/version/images/campaigns/saas-subscription-billing/saas-subscription-billing.svg" alt="Subscription Billing and Management Platform" class="img-responsive">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ---------------------------------------------------------------
            End: Hero
            ---------------------------------------------------------------- -->
            <!-- ---------------------------------------------------------------
            Start: Article & slider
            ---------------------------------------------------------------- -->
            <section class="l-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-1 col-md-4 col-md-offset-1">
                            <div class="sb-article">
                                <div class="sb-article__header">
                                    <h2 class="sb-article__title">
                                        Solve Your Subscription Billing Problems of Today
                                    </h2>
                                    <p class="sb-article__desc">
                                        And Prevent the Ones That Will<br class="visible-lg"> Turn up Tomorrow.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-sm-offset-1 col-md-7 col-md-offset-0">
                            <div class="sb-article__content">
                                <ul class="sb-article__list">
                                    <li class="sb-article__item">
                                        Automated Recurring Billing
                                    </li>
                                    <li class="sb-article__item">
                                        Subscription Management
                                    </li>
                                    <li class="sb-article__item">
                                        Pricing Models and Plans
                                    </li>
                                    <li class="sb-article__item">
                                        Checkout and Self-service Portal
                                    </li>
                                    <li class="sb-article__item">
                                        SaaS Metrics and Reporting
                                    </li>
                                    <li class="sb-article__item">
                                        Invoicing and Taxes
                                    </li>
                                    <li class="sb-article__item">
                                        Accounting and Finance
                                    </li>
                                    <li class="sb-article__item">
                                        Dunning and Payment Recovery
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="sb-slider" style="margin-top: 42px;">
                                <div class="sb-slider__container">
                                    <div class="sb-slider__content slider" data-sBanner="true">
                                        <div class="sb-slider__slide slide">
                                            <img src="/static/website/version/images/campaigns/saas-subscription-billing/slider/invoice.png" alt="" class="img-responsive">
                                            <div class="sb-slider__caption">Tax Compliant Recurring Invoices</div>
                                        </div>
                                        <div class="sb-slider__slide slide">
                                            <img src="/static/website/version/images/campaigns/saas-subscription-billing/slider/proration.png" alt="" class="img-responsive">
                                            <div class="sb-slider__caption">Custom Billing Rules</div>
                                        </div>
                                        <div class="sb-slider__slide slide">
                                            <img src="/static/website/version/images/campaigns/saas-subscription-billing/slider/selfserve.png" alt="" class="img-responsive">
                                            <div class="sb-slider__caption">Customer "Self-service" Portal</div>
                                        </div>
                                        <div class="sb-slider__slide slide">
                                            <img src="/static/website/version/images/campaigns/saas-subscription-billing/slider/dunning.png" alt="" class="img-responsive">
                                            <div class="sb-slider__caption">Smart Payment Retries</div>
                                        </div>
                                        <div class="sb-slider__slide slide">
                                            <img src="/static/website/version/images/campaigns/saas-subscription-billing/slider/plan.png" alt="" class="img-responsive">
                                            <div class="sb-slider__caption">Plan and Pricing Management</div>
                                        </div>
                                        <div class="sb-slider__slide slide">
                                            <img src="/static/website/version/images/campaigns/saas-subscription-billing/slider/revnue-story.png" alt="" class="img-responsive">
                                            <div class="sb-slider__caption">SaaS Metrics and Analytics</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ---------------------------------------------------------------
            End: Article & slider
            ---------------------------------------------------------------- -->
            <!-- ---------------------------------------------------------------
            Start: Glow
            ---------------------------------------------------------------- -->
            <section class="l-row">
                <div class="container">
                    <div class="row">
                        <a href="/payment-gateways/stripe/" class="sb-glow">
                            <div class="sb-glow__icon">
                                <img src="/static/website/version/images/home/jan-2019/customers/chargebee-stripe-billing-payments.png" alt="Chargebee Stripe Billing Payments" class="img-responsive" width="62">
                            </div>
                            <div class="sb-glow__content">
                                Thousands of businesses use Chargebee to <span class="sb-link sb-link--icon"><br class="visible-sm">do more with Stripe</span>
                            </div>
                        </a>


                        <div class="sb-slider sb-slider--billing">
                            <div class="sb-slider__figure">
                                <section class="customer-logos customer-logos__two slider">
                                    <div class="slide">
                                        <div class="braintree_bg"></div>
                                    </div>
                                    <div class="slide">
                                        <div class="gocardless_bg"></div>
                                    </div>
                                    <div class="slide">
                                        <div class="paypal_bg"></div>
                                    </div>
                                    <div class="slide">
                                        <div class="worldpay_bg"></div>
                                    </div>
                                </section>
                            </div>
                            <div class="sb-slider__content" style="font-size: 14px; color: #242438; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;">
                                24+ Gateways | 100+ Currencies | 40+ Integrations
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <!-- ---------------------------------------------------------------
            End: Glow
            ---------------------------------------------------------------- -->
            <!-- ---------------------------------------------------------------
            Start: Media
            ---------------------------------------------------------------- -->
            <section class="l-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="sb-media__title--big">
                                All the Capabilities You Need to <br class="hidden-xs"> Simplify Subscription Billing and Management
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- ---------------------------------------------------------------
                        Start: Media
                        ---------------------------------------------------------------- -->
                        <div class="col-sm-6 col-lg-5 col-lg-offset-1">
                            <div class="sb-media">
                                <div class="sb-media__container">
                                    <div class="sb-media__icon">
                                        <img src="/static/website/version/images/campaigns/saas-subscription-billing/icon/dev-automation.svg" alt="Reduce Developer Dependency" class="img-responsive">
                                    </div>
                                    <div class="sb-media__content">
                                        <div class="sb-media__title">
                                            Reduce Developer Dependency
                                        </div>
                                        <div class="sb-media__desc">
                                            Custom codes and messy patch works shouldn’t even be a fallback option. Run your entire billing workflow on autopilot with Chargebee and focus more on product opportunities.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ---------------------------------------------------------------
                        Start: Media
                        ---------------------------------------------------------------- -->
                        <div class="col-sm-6  col-lg-5 col-lg-offset-1">
                            <div class="sb-media">
                                <div class="sb-media__container">
                                    <div class="sb-media__icon">
                                        <img src="/static/website/version/images/campaigns/saas-subscription-billing/icon/recurring-billing.svg" alt="Customize Billing Logic" class="img-responsive">
                                    </div>
                                    <div class="sb-media__content">
                                        <div class="sb-media__title">
                                            Customize Billing Logic
                                        </div>
                                        <div class="sb-media__desc">
                                            Schedule billing dates for your customers, bill them based on usage, prorate charges, offer mid-cycle upgrades & downgrades, and automate your invoicing logic without any hassle. 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 visible-sm"></div>
                        <!-- ---------------------------------------------------------------
                        Start: Media
                        ---------------------------------------------------------------- -->
                        <div class="col-sm-6 col-lg-5 col-lg-offset-1">
                            <div class="sb-media">
                                <div class="sb-media__container">
                                    <div class="sb-media__icon">
                                        <img src="/static/website/version/images/campaigns/saas-subscription-billing/icon/subscription-management.svg" alt="Experiment with Plans and Pricing" class="img-responsive">
                                    </div>
                                    <div class="sb-media__content">
                                        <div class="sb-media__title">
                                            Experiment with Plans and Pricing
                                        </div>
                                        <div class="sb-media__desc">
                                            Setup different pricing models, create and manage trials, offer custom pricing, and roll out new subscription plans with a solid infrastructure that brings flexibility to your billing process.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ---------------------------------------------------------------
                        Start: Media
                        ---------------------------------------------------------------- -->
                        <div class="col-sm-6 col-lg-5 col-lg-offset-1">
                            <div class="sb-media">
                                <div class="sb-media__container">
                                    <div class="sb-media__icon">
                                        <img src="/static/website/version/images/campaigns/saas-subscription-billing/icon/billing-analytics.svg" alt="Unearth Your Revenue Story" class="img-responsive">
                                    </div>
                                    <div class="sb-media__content">
                                        <div class="sb-media__title">
                                            Unearth Your Revenue Story
                                        </div>
                                        <div class="sb-media__desc">
                                            With in-built analytics and metrics, track your business health and risk stats. Monitor your business growth on a daily basis, with custom filters and insight-driven dashboards.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ---------------------------------------------------------------
            End: Media
            ---------------------------------------------------------------- -->
            <!-- ---------------------------------------------------------------
            Start: Article with g2
            ---------------------------------------------------------------- -->
            <section class="l-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <div class="sb-article sb-article--center">
                                <div class="sb-article__header">
                                    <div class="sb-article__title">
                                        Chargebee - The Momentum Leader in Subscription Billing and Management
                                    </div>
                                </div>
                                <div class="sb-article__figure">
                                    <img src="/static/website/version/images/campaigns/saas-subscription-billing/g2-crowd.svg" alt="" class="img-responsive" style="margin: 40px auto 0">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ---------------------------------------------------------------
            End: Article with g2
            ---------------------------------------------------------------- -->
            <!-- ---------------------------------------------------------------
            Start: Slider
            ---------------------------------------------------------------- -->
            <section class="l-row" style="background-color: #070017;">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 col-md-5">
                            <div class="sb-panel">
                                <div class="sb-panel__header">
                                    <img src="/static/website/version/images/campaigns/saas-subscription-billing/momentum-leader.svg" alt="" class="img-responsive" style="margin-top: -2px;">
                                </div>
                                <div class="sb-panel__content">
                                    <div class="sb-panel__title">
                                        Thousands of Fast-growing Saas Businesses Trust Chargebee for Managing Their Subscription Billing Operations
                                    </div>
                                </div>
                                <div class="sb-panel__footer">
                                    <img src="/static/website/version/images/campaigns/saas-subscription-billing/customer-logos.svg" alt="" class="img-responsive">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1 col-lg-5 col-lg-offset-2">
                            <div class="sb-testimonials">
                                <div class="sb-testimonials__content slider" data-sTestimonial="true">
                                    <!-- ---------------------------------------------------------------
                                    Start: Testimonial
                                    ---------------------------------------------------------------- -->
                                    <div class="sb-testimonial slide">
                                        <div class="sb-testimonial__header">
                                            <img src="/static/website/version/images/case-study/doodle/doodle-logo.png" alt="" class="img-responsive" width="130">
                                        </div>
                                        <div class="sb-testimonial__content">
                                            We already had a home-built subscription and billing system, so we knew the <span class="sb-testimonial__highlight">pain of developing and maintaining such a system well.</span> Since we are moving from a monolithic application to a microservice-architecture, building a billing service from scratch seemed like a bad idea. It’s not our core business.
                                        </div>
                                        <div class="sb-testimonial__footer">
                                            <div class="sb-testimonial__info">
                                                <div class="sb-testimonial__name">
                                                    Jack Berglund
                                                </div>
                                                <div class="sb-testimonial__desig">
                                                    Chief Product Officer
                                                </div>
                                            </div>
                                            <div class="sb-testimonial__figure">
                                                <img src="/static/website/version/images/case-study/doodle/jack-berglund.jpg" alt="" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ---------------------------------------------------------------
                                    Start: Testimonial
                                    ---------------------------------------------------------------- -->
                                    <div class="sb-testimonial slide">
                                        <div class="sb-testimonial__header">
                                            <img src="/static/website/version/images/case-study/whiteboard/whiteboard-logo.png" alt="" class="img-responsive">
                                        </div>
                                        <div class="sb-testimonial__content">
                                            Automation, automation, automation. From invoicing to dunning to customer notifications, <span class="sb-testimonial__highlight">we set it and forget it on 90% of our processes.</span> Chargebee is laid out in such a way that makes it easy to manage the financial relationships with our customers. It was relatively easy to configure and the Chargebee team has been flexible, professional, and responsive
                                        </div>
                                        <div class="sb-testimonial__footer">
                                            <div class="sb-testimonial__info">
                                                <div class="sb-testimonial__name">
                                                    Ben Laughter
                                                </div>
                                                <div class="sb-testimonial__desig">
                                                    Formerly VP Success and Operations
                                                </div>
                                            </div>
                                            <div class="sb-testimonial__figure">
                                                <img src="/static/website/version/images/case-study/whiteboard/ben-laughter.jpeg" alt="" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ---------------------------------------------------------------
                                    Start: Testimonial
                                    ---------------------------------------------------------------- -->
                                    <div class="sb-testimonial slide">
                                        <div class="sb-testimonial__header">
                                            <img src="/static/website/version/images/case-study/getaccept/ga-logo-black.png" alt="" class="img-responsive">
                                        </div>
                                        <div class="sb-testimonial__content">
                                            The (Chargebee) system is <span class="sb-testimonial__highlight">robust yet cost-effective enough to really architect a complex solution using simple methods.</span> We wouldn’t change or consider it even as we scale above the 10 million ARR mark.
                                        </div>
                                        <div class="sb-testimonial__footer">
                                            <div class="sb-testimonial__info">
                                                <div class="sb-testimonial__name">
                                                    Dailius Wilson
                                                </div>
                                                <div class="sb-testimonial__desig">
                                                    VP Sales and Growth
                                                </div>
                                            </div>
                                            <div class="sb-testimonial__figure">
                                                <img src="/static/website/version/images/case-study/getaccept/dailius-wilson.jpeg" alt="" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ---------------------------------------------------------------
                                    End: Testimonial
                                    ---------------------------------------------------------------- -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ---------------------------------------------------------------
            End: Slider
            ---------------------------------------------------------------- -->
            <!-- ---------------------------------------------------------------
            Start: CRM
            ---------------------------------------------------------------- -->
             <section class="l-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-1">
                            <div class="sb-article sb-article--space">
                                <div class="sb-article__header">
                                    <div class="sb-article__label">
                                        Go live before the end of the year and get 25% off!
                                    </div>
                                    <div class="sb-article__title" style="margin: 12px 0 24px; line-height: 36px;">
                                        From CRMs to Accounting, Helpdesks to Analytics, All the Integrations You Need Are One Step Away.
                                    </div>
                                    <div class="visible-xs" style="margin-bottom: 32px;">
                                        <img src="/static/website/version/images/revenue-operations/saas-integrations.png" alt="" class="img-responsive">
                                    </div>
                                    <div class="sb-article__actions">
                                        <div class="sb-article__action">
                                            <a href="/schedule-a-demo/" class="sb-btn">Schedule a Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 hidden-xs">
                            <div>
                                <img src="/static/website/version/images/revenue-operations/saas-integrations.png" alt="" class="img-responsive">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ---------------------------------------------------------------
            End: CRM
            ---------------------------------------------------------------- -->
            <!-- ===============================================================
            End: Body Section
            ================================================================ -->
        </div>
        <!-- ===================================================================
        Start: Footer Section
        ==================================================================== -->
        <app-footer />
        <!-- ===================================================================
        End: Footer Section
        ==================================================================== -->
  </div>
</template>
<!-- ===========================================================================
End: Main Template
============================================================================ -->
<!-- ===========================================================================
Start: Scripts Section
============================================================================ -->
<script>
    import AppMeta from '~/components/AppMeta.vue';
    import AppHeader from '~/components/AppHeader.vue';
    import AppFooter from '~/components/AppFooter.vue';
    import AppLoader from '~/components/AppLoader.vue';
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter,
            'app-loader': AppLoader
        },

        mounted() {
            $('[data-sBanner]').slick({
                slidesToShow: 1,
                 dots: true
            });
            $('[data-sTestimonial]').slick({
                slidesToShow: 1,
                 dots: true,
                 draggable: false
            });
            $('.customer-logos__two').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                speed: 3000,
                autoplaySpeed: 2000,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                }]
            });
        }
    }
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css">
    #ch-js-header-cloned{
        display: none;
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================