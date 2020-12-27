<!-- ===========================================================================
// cb-title     =   Page Level Titles (Title, Twitter, OG)
// cb-desc      =   Page Level Descriptions (Description, Twitter, OG)
// cb-image     =   Page Level Images (Twitter, OG)
// cb-style     =   Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script   =   Page Level Head Script. Using this tag to put head level scripts
// cb-body-script   =   Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex   =   Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header       =   App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
// app-footer       =   App footer will add footer to the page.
​
If you want to remove header or footer. Remove the "app-header" or "app-footer" tag, script url and components in scripts.
============================================================================ -->
<!-- ===========================================================================
Start: Main Template
============================================================================ -->
<template>
  <div class="body">
    <!-- ===================================================================
    Start: Meta Section
    ==================================================================== -->
    <app-meta 
      :cb-title="'Integrate Multiple Payment Gateways with Chargebee'" 
      :cb-desc="'Set up multiple payment gateways and handle failed transactions gracefully for a better subscription billing experience'" 
      :cb-url="'/recurring-payments/multiple-payment-gateways/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css,/static/website/version/styles/burger-menu.css'"
      :cb-head-script="''"
      :cb-body-script="''"
      :cb-has-noindex="false" />
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
    <div class="cb-body">
​       <div id="loading-line" style="display:none;position:fixed;width:100%;z-index: 9999">
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
                        One neat API, <br>for multiple payment gateways.
                    </h1>
                    <p class="p-carousel__desc">
                        Accept payments across any gateway, geography or currency without any <br>additional integration effort.

                    </p>
                    <a cn-mark-signup="true" href="/trial-signup/" class="p-carousel__signup-button">
                        Sign up for free
                    </a>
                    <span class="p-carousel__signup-subtext">
                    <a href="/schedule-a-demo/" class="btn-flat btn-flat--muted"><strong>Schedule a Demo</strong></a>
                    </span>
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
                                    Intelligent Routing with multiple gateways
                                </h2>
                                <p class="main-content__text">
                                Chargebee’s API lets you dynamically vault a card with a specific gateway of your choice. Just configure multiple gateways, associate customer card with the gateway and let Chargebee handle the rest!
                                </p>
                                <a class="main-content__more main-content__more--set-width" href="/recurring-payments/" target="_blank">Payment Gateways we support</a>
                            </div>
                            <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                <img src="/static/website/version/images/product/multiple-gateway.png" width="490" class="img-responsive">
                            </div>
                        </div>
                    </section>

                    <section class="main-content main-content--no-mob-margin">
                                <div class="row">
                                    <div class="main-content__l-section col-md-5">
                                <div class="whitespace visible-xs visible-sm"></div>
                    
                                <h2 class="main-content__title">
                                     100+ currencies supported
                                </h2>
                                <p class="main-content__text">
                                    Accept payments in multiple currencies, without much additional development effort. Customers love it when you choose to listen to their preferences and show intent to want to do business in their currency.
                                </p>
                                <a class="main-content__more main-content__more--set-width" href="/docs/supported-currencies.html" target="_blank">Supported Currencies</a>
                            </div>
                            
                          <div class="main-content__l-section col-md-5 col-md-push-1">
                                <div class="whitespace visible-xs"></div>
                                <div class="whitespace-md visible-sm"></div>
                                <h2 class="main-content__title">
                                    More Payment Methods
                                </h2>
                                <p class="main-content__text">
                                    61% of global transactions are non-card based. With Chargebee you can accept cards, ACH, PayPal, Amazon etc., And we are adding more options. Chargebee ensures that the entire experience is seamless across payment methods.
                                </p>
                                <a class="main-content__more main-content__more--set-width" href="/recurring-payments/payment-methods/">Supported payment methods</a>
                            </div>
                        </div>
                    </section>
                    
                    <section class="main-content main-content--border">
                        <div class="row">
                            <div class="main-content__l-section col-md-5 col-lg-4">
                                <h2 class="main-content__title">
                                            De-risk gateway failures
                                        </h2>
                                <p class="main-content__text">
                                        Every lost customer in recurring revenue equals loss of revenue opportunity over their lifetime (LTV). You can set up multiple gateways and switch in seconds to avoid any failures at the time of customer onboarding.
                                </p>
                                <a class="main-content__more main-content__more--set-width" href="/recurring-payments/" target="_blank">Supported Payment Gateways</a>
                            </div>
                            <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                <div class="whitespace-md visible-xs visible-sm"></div>
                                <img src="/static/website/version/images/product/gateway.png" width="490" class="img-responsive">
                            </div>
                        </div>
                    </section>
                     <section class="main-content main-content--no-mob-margin">
                            <div class="row">
                                <div class="main-content__l-section col-md-5">
                                    <div class="whitespace visible-xs visible-sm"></div>
                                    <h2 class="main-content__title">
                                        Built for Developers
                                    </h2>
                                    <p class="main-content__text">
                                       By providing you a much needed layer of abstraction, and eliminating complexities, Chargebee's API is built to handle all your billing edge cases without messing up your working code. And not to mention the in-depth API documentation, client libraries, and exhaustive webhooks that would just make life simpler! 
                                    </p>
                                    <a class="main-content__more main-content__more--set-width" href="/developers/" target="_blank">More for Developers</a>
                                </div>

                                <div class="main-content__l-section col-md-5 col-md-push-1">
                                    <div class="whitespace visible-xs visible-sm"></div>
                                    <h2 class="main-content__title" style="line-height: 1.2">
                                        An easier way to manage subscriptions and recurring payments
                                    </h2>
                                    <p class="main-content__text">
                                       Supporting over 480+ billing use cases, keep your growth on track and scale your subscription business faster with Chargebee. Handle <a href="/recurring-payments/">recurring payments</a> seamlessly with Chargebee. Get started in one go.
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
    <!-- ===================================================================
    End: Body Section
    ==================================================================== -->
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
  
  export default {
    components: {
      'app-meta': AppMeta,
      'app-header': AppHeader,
      'app-footer': AppFooter
    },
    // jQuery methods/functions should be placed inside the methods
    methods: {},
    // jQuery interaction should be placed inside the mounted method
    mounted() {
      
    }
  }
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css"></style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->