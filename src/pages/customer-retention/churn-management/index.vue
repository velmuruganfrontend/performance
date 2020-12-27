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
      :cb-title="'Handle and Avoid Subscription Churn Proactively | Chargebee'" 
      :cb-desc="'Dig in how you can curb involuntary churn in your SaaS with Chargebee. Take control of revenue churn and customer churn. Retain customers: smart payment retries, dunning, churn metrics that matter.'" 
      :cb-url="'/customer-retention/churn-management/'" 
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
    <app-header :hasInvert="false" />
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
        <section class="l-row l-row--hero pad-bottom-none">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <div class="row">
                            <div class="col-sm-7">
                                <div class="cm-hero">
                                    <div class="cm-hero__header cm-hero__header--black">
                                        <h1 class="cm-hero__title text-left">
                                            Fight Subscription Churn with the Chargebee Churn Management Suite
                                        </h1>
                                        <div class="visible-xs">
                                            <figure class="cm-hero__figure">
                                                <img src="/static/website/version/images/recurring-payments/churn-management/churn.png" alt="Churn" class="img-responsive" width="290">
                                            </figure>
                                        </div>
                                        <p class="cm-hero__desc text-left">
                                            Curb revenue churn and retain your customers better by preempting failed payments
                                        </p>
                                    </div>
                                    <div class="cm-hero__actions text-left diplay-block-md">
                                        <div class="cm-hero__action">
                                            <a href="/trial-signup/?ref=PMheroCTA" class="cm-btn">Try Chargebee for free</a>
                                        </div>
                                        <div class="cm-hero__action">
                                            <a href="/schedule-a-demo/?ref=PMheroCTA" class="cm-link cm-link--icon">Schedule a Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 hidden-xs col-sm-offset-1">
                                <figure class="cm-hero__figure">
                                    <img src="/static/website/version/images/recurring-payments/churn-management/churn.png" alt="Churn" class="img-responsive" width="290">
                                </figure>
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
                    <div class="col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-1">
                        <div class="cm-article__title">
                            There’s some Churn that’s unavoidable. For everything else, there’s Chargebee.
                        </div>
                        <p class="cm-article__desc">
                            Some customers churn because they’re dissatisfied with your service. But Card expiries, gateway issues, lack of payment options and low engagement? You shouldn’t let them get in the way of your customer retention. 
                        </p>
                    </div>
                    <div class="col-sm-5 col-md-6">
                        <div class="cm-article__title cm-article__title--middle">
                            Convert. Retain. Upgrade. Recover. With zero lines of code. 
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
                    <div class="col-sm-11 col-sm-offset-1">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="cm-article cm-article__bg--seventy">
                                    <div class="cm-article__title text-center">
                                        Chargebee has successfully <span class="cm-article__title--highlight">recovered</span> nearly 75% of potentially lost revenue. And it’s only getting better.
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <a href="javascript: void(0)" class="cm-testimonial cm-testimonial--disabled">
                                    <figure class="cm-testimonial__figure">
                                        <img src="/static/website/version/images/recurring-payments/churn-management/whiteboard.png" alt="Chargebee Customers Codacy" class="img-responsive" width="217">
                                    </figure>
                                    <div class="cm-testimonial__content">
                                        From invoicing to dunning to customer notifications, we set it and forget it on 90% of our processes. Chargebee is laid out in such a way that makes it easy to manage the financial relationships with our customers.
                                    </div>
                                    <div class="cm-testimonial__author">
                                        - Ben Laughter, VP, <br class="visible-xs" />Success & Ops
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
        <section class="l-row l-row--reduceBottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-md-8 col-sm-offset-1">
                        <div class="row">
                            <div class="col-sm-9">
                                <div class="cm-article__title">
                                    Optimize Revenue by Retaining Customers with Chargebee’s end-to-end Customer Churn Management Solution
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="cm-article__heading mTopSm">
                                    Eliminate involuntary churn…
                                </div>
                                <p class="cm-article__desc">
                                    Reduce payment related churn with Chargebee’s Dunning Management and Revenue Recovery Suite. 
                                </p>
                                <ul class="cm-article__list">
                                    <li>Intelligent Payment Retries </li>
                                    <li>Contextual email Notifications</li>
                                    <li>Backup Payment Method.</li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <div class="cm-article__heading mTopSm">
                                    Retain better with alternatives to cancellation… 
                                </div>
                                <p class="cm-article__desc">
                                    Allow customers to temporarily pause their subscriptions and reactivate when they’re ready. Proactively drive subscription extensions and reactivations
                                </p>
                                <ul class="cm-article__list">
                                    <li>Pause Subscriptions</li>
                                    <li>Extend Subscriptions</li>
                                    <li>Reactivate Subscriptions</li>
                                </ul>
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
                        <a href="/customer-retention/revenue-recovery/" class="cm-glow">
                            <div class="cm-glow__content">
                                Explore <span class="cm-link cm-link--icon">Chargebee’s Revenue Recovery Suite</span>
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
        <section class="l-row l-row--reduceTop">
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
                                        <img src="/static/website/version/images/recurring-payments/churn-management/zenchef.png" alt="Chargebee Customers Codacy" class="img-responsive" width="94">
                                    </figure>
                                    <div class="cm-testimonial__content">
                                        The invoice dunning works way better, we were <span class="cm-article__title--highlight">able to recover lots of due payments</span>.
                                    </div>
                                    <div class="cm-testimonial__author">
                                        - Julien Balmont <br class="visible-xs" />Co-Founder & CTO
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
                            <div class="col-sm-6">
                                <div class="cm-article__heading mTopSm">
                                    Offer flexible payment options… 
                                </div>
                                <p class="cm-article__desc">
                                    “Never follow up before it’s due. Never forget to follow up when it’s due”. Don’t let late payments, long approval cycles and unpaid invoices come in the way of improving your collections. 
                                </p>
                                <ul class="cm-article__list">
                                    <li>Advance Invoices</li>
                                    <li>Net D Payment Terms</li>
                                    <li>One-click ‘Pay Now’</li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <div class="cm-article__heading mTopSm">
                                    Get 360-degrees visibility into your Churn…  
                                </div>
                                <p class="cm-article__desc">
                                    Chargebee’s homegrown subscription analytics tool - RevenueStory offers a deeper view and breakdown into your subscription churn with 20 KPIs+reports, using the Churn-watch dashboard
                                </p>
                                <ul class="cm-article__list">
                                    <li>Churn Breakdown reports</li>
                                    <li>Retention cohorts</li>
                                    <li>Churn Metrics</li>
                                </ul>
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
        Start: Content 4
        ================================================================ -->
        <section class="l-row">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div class="cm-cta">
                            <div class="cm-cta__header">
                                <div class="cm-cta__title">
                                    Subscriptions at Scale. Globally.<br class="hidden-xs"/> With Chargebee
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
                                Learn how you can handle churn for your subscription business. <br class="visible-xs" /><span class="cm-link cm-link--icon">Read Guide</span>
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