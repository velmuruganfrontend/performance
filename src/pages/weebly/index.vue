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
// app-header       =   App header will add header to the page. 
//                  Need a white header in page use :hasInvert="true" attribute
//                  Need a basic header(without menu's) in page use :hasBasicHeader="true" attribute
// app-footer       =   App footer will add footer to the page.
​
If you want to remove header or footer. Remove the "app-header" or "app-footer" tag, script url and components in scripts.
============================================================================ -->
<!-- ===========================================================================
Start: Main Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Meta Section
        ==================================================================== -->
        <app-meta 
        :cb-title="'Weebly and Chargebee: Site building and recurring billing - all at ease!'" 
        :cb-desc="'Let Chargebee manage subscriptions and automate recurring payments that flow from your Weebly site. It’s FREE up to $50K of your revenue. Offer 30+ payment gateways, gift subscriptions, coupons and discounts to your customers at ease.'" 
        :cb-url="'/weebly/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/main.css,/static/website/version/styles/weebly.css'"
        :cb-head-script="''"
        :cb-body-script="'/static/website/version/scripts/rellax.min.js'"
        :cb-has-noindex="false"
        :disable-bootstrap-css="false"
        :disable-header-footer-css="false" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="false" :hasBasicHeader="false" :hasBackToCareers="false" />
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <script src="https://js.chargebee.com/v2/chargebee.js" data-cb-site="craftsybiz-test"></script>
            <!-- =====================================================================================
            Content Part Start 
            ====================================================================================== -->
            <main class="l-main">
                <!-- =====================================================================================
                Start: Section -- A
                ====================================================================================== -->
                <section class="l-main__row we-mB__l">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2">
                                <div class="visible-xs visible-sm we-mT__s"></div>
                                <!-- =======================================================
                                Start: Article    
                                ======================================================== -->
                                <div class="we-heroarticle we-heroarticle--center we-mT__m we-mB__m">
                                    <div class="we-heroarticle__header">
                                        <div class="we-heroarticle__title">Give your Weebly Site a Subscription Jetpack</div>
                                    </div>
        
                                    <div class="we-heroarticle__content">
                                        <div class="wer-heroarticle__desc">If you’re using Weebly to launch your subscription business, Chargebee can help. From checkout to catalog management, here’s how Chargebee powers thousands of subscription businesses (like yours!) every day. </div>
                                    </div>
        
                                    <div class="we-heroarticle__footer">
                                        <div class="we-heroarticle__actions">
                                            <a href="/trial-signup/" class="we-heroarticle__anchor we-btn we-btn--arrow">
                                                <span>Sign up for free</span> </a>
                                        </div>
                                    </div>
                                </div>
                                <!-- =======================================================
                                End: Article    
                                ======================================================== -->
                            </div>                    
                        </div>
        
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1">
                                <!-- =======================================================
                                Start: Customers
                                ======================================================= -->
                                <div class="we-customers">
                                    <div class="we-customers__top">
                                        <div class="we-customers__label">TRUSTED BY 10,000 +  GLOBAL BUSINESSES</div>
                                    </div>
                                    <div class="we-customers__list">
                                        <div class="we-customer">
                                            <div class="we-customer__thumb">
                                                <img class="we-customer__img img-responsive" width="72" src="/static/website/version/images/weebly/customers/goop.png">
                                            </div>
                                        </div>
        
                                        <div class="we-customer">
                                            <div class="we-customer__thumb">
                                                <img class="we-customer__img img-responsive" src="/static/website/version/images/weebly/customers/sharetribe.png">
                                            </div>
                                        </div>
        
                                        <div class="we-customer">
                                            <div class="we-customer__thumb">
                                                <img class="we-customer__img img-responsive" width="64" src="/static/website/version/images/weebly/customers/okta.png">
                                            </div>
                                        </div>
        
                                        <div class="we-customer">
                                            <div class="we-customer__thumb">
                                                <img class="we-customer__img img-responsive" src="/static/website/version/images/weebly/customers/freshworks.png">
                                            </div>
                                        </div>
        
                                        <div class="we-customer">
                                            <div class="we-customer__thumb">
                                                <img class="we-customer__img img-responsive" src="/static/website/version/images/weebly/customers/studycom.png">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- =======================================================
                                End: Customers
                                ======================================================== -->
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Section -- A
                ====================================================================================== -->
                <!-- =====================================================================================
                Start: Section -- B
                ====================================================================================== -->
                <section class="l-main__row">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-5 col-sm-offset-1 col-md-4 col-md-offset-1">
                                <!-- =======================================================
                                Start: Section - Article    
                                ======================================================== -->
                                <div class="we-sectionarticle">
                                    <div class="we-sectionarticle__header">
                                        <div class="we-sectionarticle__title">Checkout Experiences <br class="visible-xs visible-sm">that are Built to ‘Wow’</div>
                                    </div>
        
                                    <div class="we-sectionarticle__content">
                                        <!-- <img class="img-responsive visible-xs" src="/static/website/version/images/weebly/cb-checkout.png" style="margin-bottom: 10px;">
         -->
                                        <div class="we-sectionarticle__desc">Pair Weebly’s powerful marketing capabilities with <a class="we-link" href="/recurring-payments/checkout-experience/"> checkout pages</a> that convert. Chargebee’s checkout pages are elegant, optimized, and integrated. With Chargebee and Weebly, your customers will enjoy paying you. </div>
                                    </div>
        
                                    <div class="we-sectionarticle__footer">
                                        <div class="we-sectionarticle__actions"><span>Watch our webinar on <a href="https://resources.chargebee.com/checkout-experience" class="we-link" style="display: inline;">Convert Better with Frictionless Checkout Experience →</a></span>
                                        </div>
                                    </div>
                                </div>
                                <!-- =======================================================
                                End: Section - Article    
                                ======================================================== -->
                            </div>
        
                            <div class="col-sm-4 col-sm-offset-1 col-md-5">
                                <small class="text-center" style="display: inline-block;">
                                    <img class="img-responsive hidden-xs" width="322" src="/static/website/version/images/weebly/cb-checkout.png">
                                    <a href="javascript:void(0)" data-cb-type="checkout" data-cb-plan-id="advanced-plan---monthly" class="hidden-xs we-link">See it in action →</a>
                                </small>
                            </div>
                        </div>
        
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <a href="/payment-gateways/stripe/" class="we-cta we-cta--as-button we-mT__s">
                                    <div class="we-cta__header">
                                        <div class="we-cta__thumb">
                                            <img class="img-responsive" src="/static/website/version/images/weebly/pg/stripe.png">
                                        </div>
                                    </div>
                                    <div class="we-cta__content">
                                        <div class="we-cta__label">3000+ businesses use Chargebee to <span style="color: #6200EA;">do more with Stripe →</span></div>
                                    </div>
                                </a>
        
                                <div class="we-paygateways we-mB__m">
                                    <div class="we-paygateways__list">
                                        <div class="we-paygateway">
                                            <div class="we-paygateway__thumb">
                                                <img class="we-paygateway__img img-responsive" src="/static/website/version/images/weebly/pg/paypal.png">
                                            </div>
                                        </div>
        
                                        <div class="we-paygateway">
                                            <div class="we-paygateway__thumb">
                                                <img class="we-paygateway__img img-responsive" src="/static/website/version/images/weebly/pg/braintree.png">
                                            </div>
                                        </div>
        
                                        <div class="we-paygateway">
                                            <div class="we-paygateway__thumb">
                                                <img class="we-paygateway__img img-responsive" src="/static/website/version/images/weebly/pg/gocardless.png">
                                            </div>
                                        </div>
        
                                        <div class="we-paygateway">
                                            <div class="we-paygateway__thumb">
                                                <img class="we-paygateway__img img-responsive" src="/static/website/version/images/weebly/pg/worldpay.png">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="we-paygateways__bottom">
                                        <div class="we-paygateways__label">+27 other payment gateways in 53+ countries</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Section -- B
                ====================================================================================== -->
                <!-- =====================================================================================
                Start: Section -- C
                ====================================================================================== -->
                <section class="l-main__row we-mB__m">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-5">
                                <div class="we-features">
                                    <div class="we-features__subheading">Chargebee Works with Hundreds of Subscription Box Businesses. We Know what your Subscriptions Need.</div>
                                </div>
                            </div>
                            <div class="col-sm-5 col-sm-offset-1">
                                <!-- =======================================================
                                Start: Features
                                ======================================================== -->
                                <div class="we-features">
                                    <div class="we-features__list we-features__list--vertical">
                                        <div class="we-feature">
                                            <div class="we-feature__content">
                                                <div class="we-feature__title">Easy Catalog and Subscription Management</div>
                                                <div class="we-feature__desc">Weebly helps you bring customers in. Chargebee will help you keep them. From custom pricing to catalog management and abandoned cart emails. Weebly isn’t built for subscription workflows, Chargebee is.</div>
                                            </div>
                                        </div>
        
                                        <div class="we-feature">
                                            <div class="we-feature__content">
                                                <div class="we-feature__title">Payment options for every single customer</div>
                                                <div class="we-feature__desc">9/10 consumers prefer <a class="we-link" href="/recurring-payments/">multiple payment options</a>, according to a Cardtronics Survey. Payment options open up channels for new revenue and opportunities for better customer relationships. With Chargebee, you can get new payment options set up in minutes. </div>
                                            </div>
                                        </div>
        
                                        <div class="we-feature">
                                            <div class="we-feature__content">
                                                <div class="we-feature__title">Automate your coupons and discounts</div>
                                                <div class="we-feature__desc">Sending coupons out to your customers is easy. Especially if you’re on Weebly. Tracking them, applying them to the right invoices, and syncing up accounts is not. Chargebee automates the <a class="we-link" href="/subscription-management/discount-management-system/">coupon and discount</a> workflow so you can send coupons and forget about it.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- =======================================================
                                End: Features
                                ======================================================== -->
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Section -- C
                ====================================================================================== -->
                <!-- =====================================================================================
                Start: Section -- D
                ====================================================================================== -->
                <section class="l-main__row we-mB__m">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-offset-2 col-sm-7 col-sm-offset-1 col-md-6">
                                <div class="we-quote we-mB__m">
                                    <div class="we-quote__main">
                                        <div class="we-quote__content">Chargebee has easily contributed to a third of our conversions. They've truly helped us open up to the global market.<span class="we-quote__author">- Fred Stutzman, CEO</span></div>
                                    </div>
        
                                    <div class="we-quote__bottom">
                                        <a class="we-quote__link we-link" href="/customers/freedom/">Freedom delivers a stellar billing experience with Chargebee →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <!-- =======================================================
                                Start: Process
                                ======================================================== -->
                                <div class="we-process">
                                    <div class="we-process__header">How it works</div>
                                    <div class="we-process__steps">
                                        <div class="we-process__stage">
                                            <span class="we-process__step"></span>
                                            <div class="we-process__desc">Sign up for<br> Chargebee</div>
                                        </div>
                                        <div class="we-process__stage">
                                            <span class="we-process__step"></span>
                                            <div class="we-process__desc">Grab your Checkout code from Chargebee</div>
                                        </div>
                                        <div class="we-process__stage">
                                            <span class="we-process__step"></span>
                                            <div class="we-process__desc">Paste the code in<br> your Weebly Site</div>
                                        </div>
                                        <div class="we-process__stage">
                                            <span class="we-process__step-label">You’re all Set!</span>
                                            <div class="we-process__desc">Watch your Subscriptions Stream in.</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- =======================================================
                                End: Process
                                ======================================================== -->
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Section -- D
                ====================================================================================== -->
                <!-- =====================================================================================
                Start: Section -- E
                ====================================================================================== -->
                <section class="l-main__row">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-1">
                                <!-- =======================================================
                                Start: Features
                                ======================================================== -->
                                <div class="we-features we-mB__m">
                                    <div class="we-features__heading">
                                        Level up with Chargebee
                                    </div>
                                    <div class="we-features__list">
                                        <div class="we-feature">
                                            <div class="we-feature__content">
                                                <div class="we-feature__title">Test everything. For free.</div>
                                                <div class="we-feature__desc">When you’re rushing to deliver your 1000th box, billing should be the furthest thing on your mind. <a class="we-link" href="/pricing/">Read more →</a></div>
                                            </div>
                                        </div>
        
                                        <div class="we-feature">
                                            <div class="we-feature__content">
                                                <div class="we-feature__title">Talk to a subscriptions expert.</div>
                                                <div class="we-feature__desc">Draw from the learnings of the thousands of subscription businesses that Chargebee serves. <a class="we-link" href="/support/">Read more →</a></div>
                                            </div>
                                        </div>
        
                                        <div class="we-feature">
                                            <div class="we-feature__content">
                                                <div class="we-feature__title">Integrate more than your website.</div>
                                                <div class="we-feature__desc">Simplify your sales and finance workflows by consolidating subscription information in Chargebee. <a class="we-link" href="/integrations/">Read more →</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- =======================================================
                                End: Features
                                ======================================================== -->
                            </div>
                        </div>
        
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2">
                                <div class="we-cta">
                                    <div class="we-cta__header">
                                        <div class="we-cta__title">
                                            Simplify Recurring Billing for your Business. Your First USD 50K is on us.
                                        </div>
                                    </div>
        
                                    <div class="we-cta__footer">
                                        <div class="we-cta__actions">
                                            <a href="/trial-signup/" class="we-cta__anchor we-btn we-btn--arrow"><span>Sign up for free</span> </a>
                                            <a href="/schedule-a-demo/"  class="we-cta__anchor we-link">Schedule a demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Section -- E
                ====================================================================================== -->
            </main>
            <!-- =========================================================================================
            Content Part End 
            ========================================================================================== -->
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
<style type="text/css">
    #ch-js-header-cloned {
      display: none;
    }
    .affix {top: 60px; left: 0;}
    .affix-top {left: 0; position: absolute; visibility: hidden; opacity: 0;}
    .affix-bottom {position: absolute;  visibility: hidden; opacity: 0}
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->