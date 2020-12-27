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
      :cb-title="'Revenue Recovery with Chargebee: Automate Failed Recurring Payments'" 
      :cb-desc="'Make payment failures, declined transactions, and lost revenue a thing of the past, with Chargebee’s smart payment retry mechanism.'" 
      :cb-url="'/customer-retention/revenue-recovery/'" 
      :cb-image="''"
      :cb-style="' /static/website/version/styles/churn-management.css'"
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
    <main class="cm-main">
        <!-- ===============================================================
        Start: Hero
        ================================================================ -->
        <section class="l-row l-row--hero" style="background-color: #00001E;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <div class="cm-hero">
                            <div class="cm-hero__header">
                                <h1 class="cm-hero__title">
                                    Maximize revenue opportunities with Chargebee's Revenue Recovery Suite
                                </h1>
                                <p class="cm-hero__desc">
                                    Mitigate the impact of failed recurring payments and <br class="hidden-xs" />automate revenue recovery 
                                </p>
                            </div>
                            <div class="cm-hero__actions">
                                <div class="cm-hero__action">
                                    <a href="/trial-signup/?ref=PMheroCTA" class="cm-btn">Try Chargebee for free</a>
                                </div>
                                <div class="cm-hero__action">
                                    <a href="/schedule-a-demo/?ref=PMheroCTA" class="cm-link cm-link--white">Schedule a Demo</a>
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
        <section class="l-row">
            <div class="container">
                <div class="row">
                    <div class="col-sm-7 col-sm-offset-1 col-lg-5 col-lg-offset-1">
                        <div class="cm-article__title">
                            Failed Subscription Payments - Your Source of Involuntary Churn
                        </div>
                        <p class="cm-article__desc">
                            Involuntary churn remains to be one of the avoidable, yet critical problems plaguing SaaS businesses.
                        </p>
                        <p class="cm-artile__desc">
                            Based on Chargebee’s data, on an average, 10% of your customers are at susceptible to involuntary churn. That’s leaving a lot of revenue on the table.
                        </p>
                        <a href="/customer-retention/churn-management/" class="cm-link cm-link--icon">Learn more</a>
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
                                <div class="cm-article cm-article__bg--sixty">
                                    <div class="cm-article__title text-center">
                                        Zenchef <span class="cm-article__title--highlight">recovered</span> 60% of formerly unpaid accounts with Chargebee’s Smart Dunning.
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <a href="/customers/zenchef/" target="_blank" class="cm-testimonial">
                                    <figure class="cm-testimonial__figure">
                                        <img src="/static/website/version/images/recurring-payments/churn-management/zenchef.png" alt="Chargebee Customers Codacy" class="img-responsive" width="96">
                                    </figure>
                                    <div class="cm-testimonial__content">
                                        With Chargebee’s dunning system, we were able to recover 60% of formerly unpaid accounts.
                                    </div>
                                    <div class="cm-testimonial__author">
                                        Julien Balmont, <br class="visible-xs" />Co-Founder & CTO, Zenchef.
                                    </div>
                                </a>
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
                    <div class="col-sm-10 col-md-8 col-sm-offset-1">
                        <div class="row">
                            <div class="col-sm-9">
                                <div class="cm-article__title">
                                    Eliminate payment related involuntary churn and recover lost opportunities with zero effort, with Chargebee.
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="cm-article__heading mTopSm">
                                    Smart Dunning with Chargebee 
                                </div>
                                <p class="cm-article__desc">
                                    Chargebee lets you configure smart retries coupled with reminder emails based on when they are most likely to respond, for every kind of payments, based on your customer’s payment history.
                                </p>
                                <a href="/recurring-payments/dunning-management/" class="cm-link cm-link--icon">Lean more</a>
                            </div>
                            <div class="col-sm-6">
                                <div class="cm-article__heading mTopSm">
                                    Backup Payment Methods
                                </div>
                                <p class="cm-article__desc">
                                    Don’t let payment failures from gateway issues be the cause of churn. Offer alternative payment options as a fallback option, to improve the chances of your revenue assurance. 
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
        Start: Glow
        ================================================================ -->
        <section class="l-row l-row--glow">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2 text-center">
                        <a href="/recurring-payments/dunning-management/" class="cm-glow">
                            <div class="cm-glow__content">
                                Learn how to <span class="cm-link cm-link--icon">Recover revenue with Chargebee’s Smart Dunning Management</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Glow
        ================================================================ -->
        <!-- ===============================================================
        Start: Testimonial
        ================================================================ -->
        <section class="l-row">
            <div class="container">
                <div class="row">
                    <div class="col-sm-11 col-sm-offset-1">
                        <div class="row">
                            <div class="col-sm-5">
                                <div class="cm-article__heading">
                                    Track Checkout drop-offs…
                                </div>
                                <p class="cm-article__desc">
                                    Convert Maybe’s into MRR. Retarget customers with sensible offers via emails and improve your conversion rates, with Chargebee’s Cart Abandonment Tracking and Reporting.
                                </p>
                                <div class="cm-article__heading mTopSm">
                                    Automatic Card Updaters
                                </div>
                                <p class="cm-article__desc">
                                    With Stripe and Braintree’s Automatic Card/Account Updater, Chargebee lets your customers experience a frictionless renewal if a card is about to expire.
                                </p>
                            </div>
                            <div class="col-sm-6 col-sm-offset-1">
                                <a href="javascript: void(0)" class="cm-testimonial cm-testimonial--disabled">
                                    <figure class="cm-testimonial__figure">
                                        <img src="/static/website/version/images/recurring-payments/churn-management/bitgym.png" alt="Chargebee Customers Codacy" class="img-responsive" width="96">
                                    </figure>
                                    <div class="cm-testimonial__content">
                                        Chargebee’s central customer and subscription database muxes multiple payment methods: Credit Card (via Stripe), Amazon Payments, and PayPal. This alone has doubled our monthly paying customer growth.
                                    </div>
                                    <div class="cm-testimonial__author">
                                        -Keerthik O, <br class="visible-xs" />Founder
                                    </div>
                                </a>
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
                        <div class="cm-cta">
                            <div class="cm-cta__header">
                                <div class="cm-cta__title">
                                    Make way for revenue opportunities <br class="visible-lg"> through smart revenue recovery.<br class="visible-lg"> Try Chargebee now. 
                                </div>
                            </div>
                            <div class="cm-cta__footer">
                                <div class="cm-hero__actions">
                                    <div class="cm-hero__action">
                                        <a href="/trial-signup/" class="cm-btn">Signup for free</a>
                                    </div>
                                    <div class="cm-hero__action">
                                        <a href="/schedule-a-demo/" class="cm-link cm-link--icon">Schedule a Demo</a>
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
        <!-- ===============================================================
        Start: Glow
        ================================================================ -->
        <section class="l-row">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2 text-center">
                        <a href="/resources/guides/involuntary-churn-payment-failed/" class="cm-glow">
                            <div class="cm-glow__content">
                                Learn how you can handle churn for your subscription business. <span class="cm-link cm-link--icon">Read Guide</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Glow
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