<template>
    <div class="body">
        <app-meta 
            :cb-title="'Upselling Just Got Smarter and Simpler with Addons - Chargebee'" 
            :cb-desc="'Experiment with usage based pricing or bundle pricing. Add more value to your product and upsell, with the help of Chargebee\'s flexible add-ons.'" 
            :cb-url="'/subscription-management/plan-addons/'" 
            :cb-image="''"
            :cb-style="' /static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="'https://js.hsforms.net/forms/v2.js,https://js.chilipiper.com/marketing.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div id="loading-line" style="display:none;position:fixed;width:100%;z-index: 9999">
                <div class="progress"><div class="indeterminate"></div> </div>
            </div>
            <!-- Start Main Body Content -->
            <div class="flexrow mobile-menu--expanded">
                <div class="mobile-menu__close" id="close-mobile-menu" onclick="hideMobileNav()">
                    <img src="/static/website/version/images/product/icon/mobile-menu-close.svg" />
                </div>
                <a class="menu-items" pjax href="/subscription-management/">
                    Subscription
                    <br />Management
                </a>
                <a class="menu-items" pjax href="/recurring-billing-invoicing/">
                    Billing
                    <br /> & Invoicing
                </a>
                <a class="menu-items" pjax href="/recurring-payments/">
                    Payments
                    <br /> & Invoicing
                </a>
                <a class="menu-items" pjax href="/saas-reporting/">
                    Reporting
                    <br /> & Analytics
                </a>
                <a class="menu-items" pjax href="/recurring-payments/">
                    Payment
                    <br />Gateways
                </a>
                <a class="menu-items" pjax href="/developers/">
                    For
                    <br /> developers
                </a>
            </div>
            <section class="pWrap">
                <div class="container">
                    <div class="p-carousel__content">
                        <h1 class="p-carousel__title">
                            Upsell with grace, <br>add value and revenue.
                        </h1>
                        <p class="p-carousel__desc">
                            Extra chunky spaghetti sauce. A latte with extra cream. Extras are all around us. <br>Chargebee’s add-ons system lets you manage as many of them as you’d want.
                        </p>
                        <!-- <a cn-mark-signup="true" href="/trial-signup/" class="p-carousel__signup-button">
                            Sign up for free
                        </a>
                        <span class="p-carousel__signup-subtext">
                        <a href="/schedule-a-demo/" class="btn-flat btn-flat--muted"><strong>Schedule a Demo</strong></a>
                        </span> -->
                        <inline-form :same-page="true" />
                    </div>
                </div>
                <section class="container container--offset">
                    <!-- blue navbar -->

                    <div class="gaussian-blur"></div>
                    <div class="loading-bar">Loading..</div>
                    <!-- Main content -->
                    <section class="ajax-canvas"></section>
                    <section id="main-container">
                        <section class="main-content main-content--border main-content--pt-no">
                            <div class="row">
                                <div class="main-content__l-section col-md-5 col-lg-4">
                                    <h2 class="main-content__title">
                                        Create Recurring and Non-recurring Addons
                                    </h2>
                                    <p class="main-content__text">
                                    For a subscription business, some products are recurring, and some aren’t. A pre-defined pricing model for those ones can get you - a better pricing control, the option to apply discounts just on specific products, and accurate revenue reporting. With Chargebee's admin console and API, creating and managing addons is simple.
                                    </p>
                                </div>
                                <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                    <img src="/static/website/version/images/product/addons-inner.png" width="490" class="img-responsive">
                                </div>
                            </div>
                        </section>

                        <section class="main-content main-content--no-mob-margin">
                                    <div class="row">
                                        <div class="main-content__l-section col-md-5">
                                    <div class="whitespace visible-xs visible-sm"></div>
                        
                                    <h2 class="main-content__title">
                                         Usage based pricing made easy
                                    </h2>
                                    <p class="main-content__text">
                                        More than one lever should drive your SaaS pricing, feature-based pricing makes things one-dimensional. It's easy to set up any additional user licenses as your parameter to define pricing as an add-on. Similarly, charge customers based on usage at the end of billing cycle.
                                    </p>
                                </div>
                                
                              <div class="main-content__l-section col-md-5 col-md-push-1">
                                    <div class="whitespace visible-xs"></div>
                                    <div class="whitespace-md visible-sm"></div>
                                    <h2 class="main-content__title">
                                        Flexible Pricing Bundles
                                    </h2>
                                    <p class="main-content__text">
                                        Chargebee gives you the freedom to define associations between plans and addons. No strict rules. No strings attached. Your application’s logic may impose certain rules, as required by business, leaving Chargebee to manage your bundle pricing and charge accurately.
                                    </p>
                                </div>
                            </div>
                        </section>
                        
                        <section class="main-content main-content--border">
                            <div class="row">
                                <div class="main-content__l-section col-md-5 col-lg-4">
                                    <h2 class="main-content__title">
                                                Upsell with confidence
                                            </h2>
                                    <p class="main-content__text">
                                            Great teams always introduce new product offerings that bring value added services to existing customers to expand revenue. Addons are a great way to add more value to your product & upsell, without having to set up separate plans.
                                    </p>
                                </div>
                                <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                    <div class="whitespace-md visible-xs visible-sm"></div>
                                    <img src="/static/website/version/images/product/upsell.svg" width="490" class="img-responsive">
                                </div>
                            </div>
                        </section>
                         <section class="main-content main-content--no-mob-margin">
                                <div class="row">
                                    <div class="main-content__l-section col-md-5">
                                    <div class="whitespace visible-xs visible-sm"></div>
                                    <h2 class="main-content__title">
                                        Tax is contextual and evolving
                                    </h2>
                                    <p class="main-content__text">
                                       Certain products and services may be exempt from taxes. To address all these scenarios, instead of changing your application logic you can handle changes with simple configuration changes and also override business rules to create exceptions.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div class="row">
                                <div class="col-sm-8 col-sm-offset-2">
                                    <a href="/customers/freshdesk/" class="cu-casestudy-sec">
                                        
                                        <div class="cu-casestudy-sec__header">
                                            <img src="/static/website/version/images/case-study/freshdesk/fd-wall.jpg" alt="" class="img-responsive">
                                        </div>
                                        <!-- case study content -->
                                        <div class="cu-casestudy-sec__content"> 
                                            <!-- case study logo -->
                                            <div class="cu-casestudy-sec__logo">
                                                <img src="/static/website/version/images/customers/logos/transparent/freshdesk.png" alt="" width="160" class="img-responsive">
                                            </div>
                                            <!-- case study display -->
                                            <div class="cu-casestudy-sec__disp">
                                                From 500 to 80,000 Customers: <br class="hidden-xs">
                                                How Freshdesk Unlocked Massive Scale
                                            </div>
                                            <!-- case study actions -->
                                            <div class="cu-casestudy-sec__actions">
                                                <div class="cu-casestudy-sec__action cu-animate">Read the story 
                                                    <span class="cu-animate__icon">&rarr;</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </section>
                     <div class="whitespace-lg"></div>
                </section>    
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
    import formInline from '~/components/inlineForm.vue';
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter,
            'inline-form': formInline
        },
        methods: {}
    }
</script>
<style type="text/css">
    .cu-casestudy-sec{
        margin: 40px auto auto auto;
    }
    @media (min-width: 768px) {
        .cu-casestudy-sec{
            margin-top: 90px;
        }
    }
    @media (max-width: 767px) {
        .cu-casestudy-sec__content{
            min-width: auto;
            margin-right: 0;
        }
    }
</style>