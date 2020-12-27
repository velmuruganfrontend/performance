<template>
    <div class="body">
        <app-meta 
            :cb-title="'Proration: Upgrade & Downgrade Subscriptions - Chargebee'" 
            :cb-desc="'Chargebee handles proration for subscription upgrades and downgrades, accurately.'" 
            :cb-url="'/subscription-management/handle-prorations/'" 
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
                            Handle prorated subscriptions<br> with ease
                        </h1>
                        <p class="p-carousel__desc">
                            Recurring Revenue relationships revolve around trust. <br>
                            And when it comes to money, it becomes more pronounced.
                        </p>
                        <!-- <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-sec btn-primary btn-primary-sec btn-md btn-suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');" >
                            <img src="/static/resources/brand/chargebee-icon-white.svg" alt="Chargebee Logo Mark" style="width: 30px; margin-top: -7px; margin-right: 10px;"> Sign up for free
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
                                        WYSIWYG - Transparent Itemised Invoices
                                    </h2>
                                    <p class="main-content__text">
                                    The expectation from you as a business is to hold yourself to the highest standard to earn the trust of customer. And it all starts with accurate, unambiguous, transparent Invoicing.
                                    </p>
                                </div>
                                <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                    <img src="/static/website/version/images/product/invoice.png" width="490" class="img-responsive">
                                </div>
                            </div>
                        </section>

                        <section class="main-content main-content--no-mob-margin">
                                    <div class="row">
                                        <div class="main-content__l-section col-md-5">
                                    <div class="whitespace visible-xs visible-sm"></div>
                        
                                    <h2 class="main-content__title">
                                         Estimated charges
                                    </h2>
                                    <p class="main-content__text">
                                        Every time a customer adds or removes a few users in the middle of a billing cycle, they prefer to know how much they will be charged, and you are expected to prorate the charges. Chargebee enables you to estimate the charges, so that you can display how much will be the current prorated charge and the full amount in subsequent billing cycles.

                                    </p>
                                </div>
                                
                              <div class="main-content__l-section col-md-5 col-md-push-1">
                                    <div class="whitespace visible-xs"></div>
                                    <div class="whitespace-md visible-sm"></div>
                                    <h2 class="main-content__title">
                                        Controlling the when and how of Invoicing
                                    </h2>
                                    <p class="main-content__text">
                                        Details matter. Tasks like specifying whether you want to override proration or not, or the ability to charge now or include the charges in subsequent invoice, are simple to handle. These details in both the user interface and the API make it a breeze to automate and manage most scenarios gracefully.
                                    </p>
                                </div>
                            </div>
                        </section>
                      
                         <section class="main-content main-content--border">
                            <div class="row">
                                <div class="main-content__l-section col-md-5 col-lg-5">
                                    <h2 class="main-content__title">
                                          Accurate real-time metrics
                                    </h2>
                                    <p class="main-content__text">
                                          Apart from all the transactional data your daily, monthly metrics are also updated in real time based on upcoming changes, sales reversals etc.,. Chargebee keeps an accurate tap on your MRR data, too. If a customer switches from a monthly $49 per month with 10 users to $29 per month with 50 users, the MRR is immediately updated to reflect the increase of $960 in MRR.
                                    </p>
                                </div>
                                <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-1">
                                    <div class="whitespace-md visible-xs visible-sm"></div>
                                    <img src="/static/website/version/images/product/dashboard.png" width="490" class="img-responsive">
                                </div>
                            </div>
                        </section>
                        <section class="main-content main-content--no-mob-margin">
                                    <div class="row">
                                        <div class="main-content__l-section col-md-5">
                                    <div class="whitespace visible-xs visible-sm"></div>
                                    <h2 class="main-content__title">
                                        Apportioning credits - the subscription challenge
                                    </h2>
                                    <p class="main-content__text">
                                        When an annual customer switches to monthly or from a higher plan to lower plan, you need to factor in the amount of actual cash paid, discount provided and adjust credits accordingly. Some of these could take precious hours of your finance team. Not anymore.
                                    </p>
                                </div>
                                <div class="main-content__l-section col-md-5 col-md-push-1">
                                    <div class="whitespace visible-xs"></div>
                                    <div class="whitespace-md visible-sm"></div>
                                    <h2 class="main-content__title">
                                        Fall in love with the simplicity of abstraction
                                    </h2>
                                    <p class="main-content__text">
                                        Chargebee’s API allows your developers to decouple application logic from billing logic reducing complexity. You can stay nimble when your product, features, and pricing needs to change in the future, which is not uncommon during the early years of every startup.
                                    </p>
                                </div>
                                </div>
                        </section>
                        <section class="main-content">
                            <div class="row">
                                <div class="main-content__l-section col-md-5 col-lg-5">
                                    <h2 class="main-content__title">
                                        Prorate to the day, or down to the millisecond
                                    </h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="main-content__l-section col-md-5 col-lg-5">
                                    <p class="main-content__text">
                                        There are some businesses, like telecom, that need to calculate usage and prorations down to the millisecond. But for most SaaS businesses, calculating prorations down to the day just makes better sense. It shows your fair billing practices to customers, and makes reconciliations and revenue recognition easier for your finance team. The choice really comes down to your business model. Chargebee lets you choose how you’d like to prorate - down to the millisecond, or rounded off to the day. 
                                    </p>
                                </div>
                                <div class="col-md-6 col-md-push-1 col-lg-6 col-lg-push-1">
                                    <div class="whitespace-md visible-xs visible-sm"></div>
                                    <img src="/static/website/version/images/subscription-management/handle-prorations/billing-model.png" width="490" alt="flexible-proration-billing" class="img-responsive">
                                </div>
                            </div>
                        </section>
                        <section class="main-content main-content--border" style="padding-bottom: 30px;">
                            <div class="row">
                                <div class="col-md-6 col-lg-6">
                                    <div class="whitespace-md visible-xs visible-sm"></div>
                                    <img src="/static/website/version/images/subscription-management/handle-prorations/extend-trial.svg" width="490" class="img-responsive">
                                </div>
                                <div class="main-content__l-section col-md-5 col-lg-5 col-md-push-1 col-lg-push-1">
                                    <h2 class="main-content__title">
                                          Deferred billing
                                    </h2>
                                    <p class="main-content__text">
                                          If a customer requests for a future subscription change from next billing cycle to upgrade or downgrade, the support team need not remember the billing cycle of customer to make changes effective. Simply schedule the changes. And the system would automatically make changes at the scheduled time and also initiate appropriate charges accurately.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section class="testimonial-box  hidden-xs hidden-sm flexrow--margin">
                            <div class="row flexrow flexrow--end">
                                <div class="testimonial-box__img-holder">
                                    <img src="/static/website/version/images/customers/testimonial/freshdesk.png" class="img-responsive" />
                                </div>
                                <div class="testimonial-box__logo-holder">
                                    <img src="/static/website/version/images/customers/testimonial/freshdesk-logo.svg" width="120" />
                                    <a href="/customers/freshdesk/" class="testimonial-box__logo-holder__link" style="margin-bottom: 0;" target="_blank">
                                                See how Chargebee powers Freshdesk in this Casestudy
                                            </a>
                                </div>
                            </div>
                            <div class="blue-msg-box blue-msg-box--fd animated">
                                <h2 class="blue-msg-box__msg">
                                            Payment gateways like Braintree are more connected to the bank and less connected to the customers. For a customer driven SaaS business, you need a reliable system like Chargebee that takes care of the latter.
                                        </h2>
                                <span class="blue-msg-box__author">Kiran Darisi, Director of DevOps</span>
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