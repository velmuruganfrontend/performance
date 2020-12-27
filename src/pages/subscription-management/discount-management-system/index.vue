<template>
    <div class="body">
        <app-meta 
            :cb-title="'Discount Management for Subscription Businesses'" 
            :cb-desc="'Chargebee\'s off-the-shelf discount management system lets you work with different types of coupons. So give away discounts & drive more revenue.'" 
            :cb-url="'/subscription-management/discount-management-system/'" 
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
                            Discount Management tailor made <br>for recurring revenue businesses
                        </h1>
                        <p class="p-carousel__desc">
                            Leverage the smartest trick in your arsenal - Coupons. <br>
                            Create coupons easily, track them and drive more revenue.
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
                                        Experiment with Discount Types
                                    </h2>
                                    <p class="main-content__text">
                                    Play around with different discount types: Make them Fixed amount (ex: 5$ off) or Percentage based (ex: 5% off) according to your choice, and watch those deals close!
                                    </p>
                                </div>
                                <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                    <img src="/static/website/version/images/product/discount-type.png" class="img-responsive">
                                </div>
                            </div>
                        </section>

                        <section class="main-content main-content--no-mob-margin">
                                    <div class="row">
                                        <div class="main-content__l-section col-md-5">
                                    <div class="whitespace visible-xs visible-sm"></div>
                        
                                    <h2 class="main-content__title">
                                         Customize the duration
                                    </h2>
                                    <p class="main-content__text">
                                        Tailor-make your coupons to suit your business. According to your campaign, you can customize coupons to either be one-time, for a stipulated period, or unlimited.
                                    </p>
                                </div>
                                
                              <div class="main-content__l-section col-md-5 col-md-push-1">
                                    <div class="whitespace visible-xs"></div>
                                    <div class="whitespace-md visible-sm"></div>
                                    <h2 class="main-content__title">
                                        Monitor the redemptions
                                    </h2>
                                    <p class="main-content__text">
                                        Decide the validity of coupons and limit the number of redemptions, based on your campaign. Track the number of times a coupon has been redeemed.
                                    </p>
                                </div>
                            </div>
                        </section>
                        
                        <section class="main-content main-content--border">
                            <div class="row">
                                <div class="main-content__l-section col-md-5 col-lg-4">
                                    <h2 class="main-content__title">
                                                Build your own coupons
                                            </h2>
                                    <p class="main-content__text">
                                        Chargebee’s flexible couponing system ensures that you can drill down discounts to the line-item level, depending on your business needs. 
                                        <br><br>So, decide the products on which the coupons should be applied, and standardize those discounts!
                                    </p>
                                </div>
                                <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                    <div class="whitespace-md visible-xs visible-sm"></div>
                                    <img src="/static/website/version/images/product/coupons.svg" class="img-responsive">
                                </div>
                            </div>
                        </section>
                         <section class="main-content main-content--no-mob-margin">
                                <div class="row">
                                    <div class="main-content__l-section col-md-5">
                                    <div class="whitespace visible-xs visible-sm"></div>
                                    <h2 class="main-content__title">
                                        Generate coupon codes for campaigns
                                    </h2>
                                    <p class="main-content__text">
                                       Running a campaign? Just create one coupon and easily generate bulk coupon codes off that, thus making your promotions more effective!
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