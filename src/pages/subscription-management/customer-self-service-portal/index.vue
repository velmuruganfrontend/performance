<template>
    <div class="body">
        <app-meta 
            :cb-title="'Self-service subscription management portal - Chargebee'" 
            :cb-desc="'Set up your very own subscription management portal for your customers in minutes, build upon an open source version, and let your customers manage their subscriptions themselves.'" 
            :cb-url="'/subscription-management/customer-self-service-portal/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
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
                        <div class="cb-banner-img hidden-xs hidden-sm">
                            <img src="/static/website/version/images/subscription-management/selfservice-portal/self-service-subscription.png" class="img-responsive">
                        </div>
                        <h1 class="p-carousel__title">
                            Self-service subscription management portal, for your customers

                        </h1>
                        <p class="p-carousel__desc">
                            Going the extra mile is hard. The first mile, not so much. <br>Let your customers serve themselves with a customizable customer portal.
                        </p>
                        <!-- <a cn-mark-signup="true" href="/trial-signup/" class="p-carousel__signup-button">
                            Sign up for free
                        </a>
                        <span class="p-carousel__signup-subtext">
                        <a href="/schedule-a-demo/" class="btn-flat btn-flat--muted"><strong>Schedule a Demo</strong></a>
                        </span> -->
                        <inline-form :same-page="false" />
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
                                        Pleasant customization
                                    </h2>
                                    <p class="main-content__text">
                                    Petrichor. The smell of the first rain as it rubs against the dry ground. Pleasant. The ability to tinker with CSS and HTML, to customize a portal that your customers would love. Not that bad.
                                    </p>
                                </div>
                                <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                    <img src="/static/website/version/images/product/customer-portal.png" width="490" class="img-responsive">
                                </div>
                            </div>
                        </section>

                        <section class="main-content main-content--no-mob-margin">
                                    <div class="row">
                                        <div class="main-content__l-section col-md-5">
                                    <div class="whitespace visible-xs visible-sm"></div>
                        
                                    <h2 class="main-content__title">
                                        The same magic, in-app
                                    </h2>
                                    <p class="main-content__text">
                                        Updating addresses and card details. Changes to existing plans and add-ons. Upgrades. With Chargebee's API, customers can handle all of these within your app.
                                    </p>
                                </div>
                                
                              <div class="main-content__l-section col-md-5 col-md-push-1">
                                    <div class="whitespace visible-xs"></div>
                                    <div class="whitespace-md visible-sm"></div>
                                    <h2 class="main-content__title">
                                        There's more to it.
                                    </h2>
                                    <p class="main-content__text">
                                        Just in case, the above actions aren’t enough, you can go that extra mile. Build more features like "Pausing or Reactivating a subscription", with an open source customer portal. 
                                    </p>
                                    <a class="main-content__more main-content__more--set-width" href="/open-source-customer-portal/" target="_blank">More on the Open Source Customer Portal</a>
                                </div>
                            </div>
                        </section>
                      
                         <section class="main-content main-content--border">
                            <div class="row">
                                <div class="main-content__l-section col-md-5 col-lg-4">
                                   <h2 class="main-content__title">
                                        Built for Developers
                                    </h2>
                                    <p class="main-content__text">
                                       By providing you a much needed layer of abstraction, and eliminating complexities, Chargebee's API is built to handle all your billing edge cases without messing up your working code. And not to mention the in-depth API documentation, client libraries, and exhaustive webhooks that would just make life simpler! 
                                    </p>
                                    <a class="main-content__more main-content__more--set-width" href="/developers/" target="_blank">More for Developers</a>
                              
                                
                                </div>
                            </div>
                        </section>       

                        <section class="testimonial-box hidden-sm hidden-xs flexrow--margin">
                            <div class="row flexrow flexrow--end">
                                <div class="testimonial-box__img-holder">
                                    <img src="/static/website/version/images/customers/sharetribe/sharetribe.jpg" alt="" class="img-responsive" />
                                </div>
                                <div class="testimonial-box__logo-holder">
                                    <img src="/static/website/version/images/customers/testimonial/sharetribe-logo.svg" width="120" />
                                    <a href="/blog/sharetribe-journey-marketplace-insights/" class="testimonial-box__logo-holder__link" style="margin-bottom: 0;">
                                                See how Chargebee powers Sharetribe in this Casestudy
                                            </a>
                                </div>
                            </div>
                            <div class="blue-msg-box blue-msg-box--st animated">
                                <h2 class="blue-msg-box__msg">
                                            We were able to launch our automated set-up a lot earlier than we could have. If we would have realized that Chargebee exists, a year earlier, we would have started using them at that point!
                                        </h2>
                                <span class="blue-msg-box__author">Juho Makkonen, Co-Founder & CEO</span>
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
    .p-carousel__content{
        position: relative;
    }
    .p-carousel__title,
    .p-carousel__desc{
        max-width: 460px;
    }
    .cb-banner-img{
        display: block;
        position: absolute;
        max-width: 460px;
        right: 0;
        z-index: 0;
        margin-top: 70px;
    }
    @media(max-width: 1200px){
        .cb-banner-img{
            max-width: 400px;
        }
    }
</style>