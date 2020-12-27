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
      :cb-title="'Handle Direct Debit Payments and Recurring Billing with Chargebee'" 
      :cb-desc="'Accept direct debit payments online. Automate recurring payments, manage your cash flow, and get paid easily. Give your customers the flexibility to pay through Direct Debit.'" 
      :cb-url="'/recurring-payments/direct-debit-payments/'" 
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
                                    Automate Recurring Online  <br class="visible-lg">Direct Debit Payments
                                </h1>
                                <p class="dw-hero__desc" style="max-width: 550px;">
                                    Pricing can’t be governed by credit limits. Collect high-value subscription payments at lower transaction costs with Direct Debit. Have more control over your cash flow when you get paid on time. <br /><strong>Easy setup. Reduced cost.</strong>
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
                        <div>
                            <h2 class="dw-article__title">Accept Large Transactions with Direct Debit</h2>
                        </div>
                        <p class="dw-article__desc">
                            Reach more customers globally by enabling direct debit payments like ACH, PAD, SEPA, BACS, AUS BECS, BECS NZ and Autogiro. Stay in control of the payments cycle with Direct Debit — so you don’t have to chase late payments again.
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
                                <div class="dw-article dw-article--mimage">
                                    <img src="/static/website/version/images/recurring-payments/digital-wallet/map.png" alt="" class="img-responsive">
                                </div>
                                <div class="dw-article" style="margin-top: 24px; margin-bottom: 30px; text-align: center;">
                                    Enable direct debit payments via <a href="https://www.chargebee.com/docs/ach-payments-stripe.html" class="dw-link">Stripe</a>, <a href="https://www.chargebee.com/docs/gocardless.html" class="dw-link">GoCardless</a>, <a href="/payment-gateways/adyen-recurring-payments/" class="dw-link">Adyen</a> and <a href="https://www.chargebee.com/docs/ach-payments-authorize_net.html" class="dw-link">Authorize.net</a>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="dw-article">
                                    <!-- <p style="font-weight: bold; margin-bottom: 24px; max-width: 420px;">Chargebee supports recurring Direct Debit payments in multiple countries</p> -->
                                    <ul class=dw-article__list>
                                        <li style="background:none;"><strong>Chargebee supports recurring Direct Debit payments in multiple countries</strong></li>
                                        <li>
                                            <p>Set up flexible plans in Chargebee and give your customers the ease of making recurring payments.</p>
                                        </li>
                                        <li>
                                            <p>With Chargebee, you never have to miss out on your payment status or payment information updates again. </p>
                                        </li>
                                        <li>
                                            <p>You can also support multiple currencies and languages from a single dashboard within Chargebee. </p>
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
                    <div class="col-sm-8 col-sm-offset-2">
                        <div class="dw-article text-center">
                            <div>
                                <h2 class="dw-article__title">An easier way to manage <br />subscriptions and recurring payments</h2>
                            </div>
                            <div class="dw-article__desc" style="max-width: 580px;margin: auto;">
                                Supporting over 480+ billing use cases, keep your growth on track and scale your subscription business faster with Chargebee. Handle  <a href="/recurring-payments/" class="dw-link">recurring payments</a> seamlessly with the platter of <a href="/recurring-payments/payment-methods/" class="dw-link">payment methods</a> and <a href="/recurring-payments/" class="dw-link">gateways</a> supported by Chargebee. Get started in one go.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-5 col-sm-offset-1">
                        <a href="/localized-subscriptions-payments/" class="dw-card">
                            <div class="dw-card__links">
                                <div>
                                    <h3 class="dw-link dw-link--icon">
                                       Localized Subscriptions
                                    </h3>
                                </div>
                            </div>
                            <div class="dw-card__desc">
                                Improve customer acquisition in new markets by accepting local currencies from customers’ local bank accounts with Chargebee. 
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-5">
                        <a href="/recurring-billing-invoicing/new-email-notifications/" class="dw-card">
                            <div class="dw-card__links">
                                <div>
                                    <h3 class="dw-link dw-link--icon">
                                        Reliable Email Notifications
                                    </h3> 
                                </div>
                            </div>
                            <div class="dw-card__desc">
                                Let your customers know when you create a mandate and before charging their account. Stay informed when you get notified about canceled mandates. 
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Article
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
    .dw-article--mimage{}
    @media(min-width:992px){
        .dw-article--mimage{
            margin-left: -100px;
            margin-right: -100px;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->