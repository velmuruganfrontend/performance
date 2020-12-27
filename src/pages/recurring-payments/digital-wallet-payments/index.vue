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
  <div>
    <!-- ===================================================================
    Start: Meta Section
    ==================================================================== -->
    <app-meta 
      :cb-title="'Accept digital wallet payments with Chargebee | Choose popular digital wallets like Apple Pay, Amazon Pay, Alipay and more.'" 
      :cb-desc="'Collect recurring payments through digital wallets instantly. Quick setup. Integrate Apple pay, Alipay, Amazon pay and more payment options.'" 
      :cb-url="'/recurring-payments/digital-wallet-payments/'" 
      :cb-image="''"
      :cb-style="' /static/website/version/styles/digit-wallet.css'"
      :cb-head-script="''"
      :cb-body-script="''"
      :cb-has-noindex="false" />
    <!-- ===================================================================
    End: Meta Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Header Section
    ==================================================================== -->
    <app-header :hasInvert="true" />
    <!-- ===================================================================
    End: Header Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <main class="dw-main">
        <!-- ===============================================================
        Start: Hero
        ================================================================ -->
        <section class="l-row l-row--hero" style="background-color: #00001E;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <div class="dw-hero">
                            <div class="dw-hero__header">
                                <h1 class="dw-hero__title">
                                    Accept Recurring Digital Wallet <br class="visible-lg">Payments Instantly
                                </h1>
                                <p class="dw-hero__desc" style="max-width: 550px;">
                                    Popular worldwide, digital wallets let you accept recurring payments globally within seconds and scale to new markets. Chargebee allows you to handle multiple digital wallet payments and manage subscriptions easily. <br /><strong>Quick checkout. Immediate payment processing.</strong>
                                </p>
                            </div>
                            <div class="dw-hero__actions">
                                <div class="dw-hero__action">
                                    <a href="/trial-signup/?ref=PMheroCTA" class="dw-btn">Try Chargebee for free</a>
                                </div>
                                <div class="dw-hero__action">
                                    <a href="/schedule-a-demo/?ref=PMheroCTA" class="dw-link dw-link--white">Schedule a Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Hero
        ================================================================ -->
        <!-- ===============================================================
        Start: Article
        ================================================================ -->
        <section class="l-row l-row--reduceTop">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3 text-center">
                        <div class="dw-article__title">
                            Setup and Accept Wallet Payments
                        </div>
                        <p class="dw-article__desc">
                            Give your customers a quicker and effortless way to make recurring payments via digital wallets. Reduce friction at your checkout when customers can make instant payments. Using digital wallets, B2C and early-stage B2B businesses can receive payments immediately. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Article
        ================================================================ -->
        <!-- ===============================================================
        Start: Testimonial
        ================================================================ -->
        <section class="l-row">
            <div class="container">
                <div class="row">
                    <div class="col-sm-11 col-sm-offset-1">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="dw-article" style="padding-top: 30px;">
                                    <img src="/static/website/version/images/recurring-payments/digital-wallet/digital-wallets.svg" alt="" class="img-responsive">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="dw-article">
                                    <ul class=dw-article__list>
                                        <li>
                                            <strong>Convenience</strong>
                                            <p>Customers can pay instantly without the hassle of entering card information every time.</p>
                                        </li>
                                        <li>
                                            <strong>Quick Set-up</strong>
                                            <p>Set-up digital wallets in your gateway and start accepting payments within minutes.</p>
                                        </li>
                                        <li>
                                            <strong>Secure Payments</strong>
                                            <p>A more secure payment option than cash or card that gives both customers and merchants peace of mind. </p>

                                            <p style="font-weight: bold; margin-top: 24px; max-width: 420px;">Chargebee’s quick setup lets you process transactions within minutes. </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Testimonial
        ================================================================ -->
        <!-- ===============================================================
        Start: Article
        ================================================================ -->
        <section class="l-row">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-md-10 col-sm-offset-1">
                        <div class="row">
                            <div class="col-sm-8">
                                <div class="dw-article__title">
                                    Use multiple digital wallets and quickly setup and process transactions in minutes with Chargebee. 
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-5">
                                <div class="dw-article__heading mTopSm">
                                    Apple Pay
                                </div>
                                <p class="dw-article__desc">
                                    Provide a frictionless checkout experience for recurring payments with <a href="https://www.chargebee.com/docs/apple-pay.html" target="_blank" class="dw-link">Apple Pay</a> on iOS devices. Collect one-click payments via Apple Pay on the web with Chargebee. 
                                </p>
                            </div>
                            <div class="col-sm-5">
                                <div class="dw-article__heading mTopSm">
                                    Amazon Pay
                                </div>
                                <p class="dw-article__desc">
                                    Allow customers to pay via <a href="https://www.chargebee.com/docs/amazon_payments.html" target="_blank" class="dw-link">Amazon Pay</a> by logging into their Amazon account. Increase conversions with this as an additional payment option. 
                                </p>
                            </div>
                        </div>
                        <div class="row">
                             <div class="col-sm-5">
                                <div class="dw-article__heading mTopSm">
                                    Google Pay
                                </div>
                                <p class="dw-article__desc">
                                    Accept both one-time and recurring payments using Google Pay. It provides an easy and frictionless checkout experience for customers, on all devices and browsers. All the interfaces of Chargebee Checkout—Hosted Pages, Customer Self-serve Portal, and Pay Now Links offer support for Google Pay. 
                                </p>
                            </div>
                            <div class="col-sm-5">
                                <div class="dw-article__heading mTopSm">
                                    PayPal Express Checkout
                                </div>
                                <p class="dw-article__desc">
                                    With PayPal as your gateway, accept recurring payments from customers via <a href="https://www.chargebee.com/docs/payments_with_paypal.html" target="_blank" class="dw-link">PayPal Express Checkout</a>. You can also choose to accept payments via <a href="https://www.chargebee.com/docs/paypal-via-braintree.html" target="_blank" class="dw-link">Braintree</a>, without the need for a merchant account or reference transactions.
                                </p>
                            </div>
                            <div class="col-sm-12">
                                <div class="dw-article__heading mTopSm" style="margin-top: 70px;">
                                    <img src="/static/website/version/images/recurring-payments/payment-methods/digital-wallet.png" alt="" class="img-responsive" width="455">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2">
                                <p class="dw-article__desc dw-article__desc--heighlight" style="margin-top: 60px; text-align: center;">
                                    Handle <a href="/recurring-payments/" class="dw-link">recurring payments</a> seamlessly with the platter of <a href="/recurring-payments/payment-methods/" class="dw-link">payment methods</a> and <a href="/recurring-payments/" class="dw-link">gateways</a> supported by Chargebee. Get started in one go.
                                </p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Article
        ================================================================ -->
        <!-- ===============================================================
        Start: Testimonial
        ================================================================ -->
        <section class="l-row">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="row">
                            <div class="col-sm-5">
                                <div class="dw-article__title">
                                    An easier way to manage subscriptions and recurring payments
                                </div>
                                <p class="dw-article__desc" style="max-width: 450px;">
                                    Supporting over 480+ billing use cases, keep your growth on track and scale your subscription business faster with Chargebee.
                                </p>
                            </div>
                            <div class="col-sm-6 col-sm-offset-1">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="dw-article__heading">
                                            Convert faster
                                        </div>
                                        <ul style="padding: 2px 20px 30px 0">
                                            <li class="dw-article__lista">
                                                Set up multiple payment methods gateways
                                            </li>
                                            <li class="dw-article__lista">
                                                Seamless PCI-compliant checkout  
                                            </li>
                                            <li class="dw-article__lista">
                                                Flexible trial management
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="dw-article__heading">
                                            Engage better
                                        </div>
                                        <ul style="padding: 2px 20px 30px 0">
                                            <li class="dw-article__lista">
                                                Smart dunning for revenue recovery
                                            </li>
                                            <li class="dw-article__lista">
                                                Pause and re-start subscriptions
                                            </li>
                                            <li class="dw-article__lista">
                                                Single-click “Pay Now” option
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="dw-article__heading">
                                            Accelerate Growth
                                        </div>
                                        <ul style="padding: 2px 20px 30px 0">
                                            <li class="dw-article__lista">
                                                Support for 100+currencies and multi-language
                                            </li>
                                            <li class="dw-article__lista">
                                                Tax management: EU VAT, US Sales Tax and more
                                            </li>
                                            <li class="dw-article__lista">
                                                Revenue recognition and deferred revenue reports
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="dw-article__heading">
                                            Simplify Workflows
                                        </div>
                                        <ul style="padding: 2px 20px 30px 0">
                                            <li class="dw-article__lista">
                                                Connect your existing tool stack to align teams across sales, marketing, finance and more
                                            </li>
                                            <li class="dw-article__lista">
                                                Flexible APIs for easy integration
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Testimonial
        ================================================================ -->
        <!-- ===============================================================
        Start: Content 4
        ================================================================ -->
        <section class="l-row">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div class="dw-cta">
                            <div class="dw-cta__header">
                                <div class="dw-cta__title">
                                    Get started within minutes. Create your free account today.
                                </div>
                            </div>
                            <div class="dw-cta__footer">
                                <div class="dw-hero__actions">
                                    <div class="dw-hero__action">
                                        <a href="/trial-signup/" class="dw-btn">Signup for free</a>
                                    </div>
                                    <div class="dw-hero__action">
                                        <a href="/schedule-a-demo/" class="dw-link dw-link--icon">Schedule a Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Content 4
        ================================================================ -->
    </main>
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
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->