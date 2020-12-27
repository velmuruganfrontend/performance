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
      :cb-title="'Revenue Recognition made easy with Chargebee'" 
      :cb-desc="'Simplify your revenue recognition and reporting with Chargebee. Address complexities in finance and accounting for businesses of all sizes. Recognize subscription revenue for all billing scenarios.'" 
      :cb-url="'/saas-accounting-and-taxes/revenue-recognition-deferred-revenue/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/revenue.css'"
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
      <!-- ===============================================================
      Start: Hero
      ================================================================ -->
      <section class="l-row l-row--hero">
          <div class="container">
              <div class="row">
                  <div class="col-sm-10 col-sm-offset-1 col-md-12 col-md-offset-0">
                      <div class="cp-hero">
                          <div class="cp-hero__header">
                              <div class="cp-hero__title">
                                  <span class="cp-hero__highlight">Automate Revenue Recognition</span> for <br class="hidden-xs hidden-sm" />your Subscription Business with Chargebee
                              </div>
                              <p class="cp-hero__desc">
                                  With ASC 606-compliant Revenue Recognition and Deferred Revenue Reporting, eliminate complexities that might arise in your accounting and finance.
                              </p>
                          </div>
                          <div class="cp-footer__actions">
                              <div class="cp-footer__action">
                                  <a href="/trial-signup/?ref=heroCTA" class="cp-btn cp-btn--primary">Sign up for free</a>
                              </div>
                              <div class="cp-footer__action">
                                  <a href="/schedule-a-demo/?ref=heroCTA" class="cp-btn cp-btn--ghost cp-btn--ghost-primary">Schedule a demo</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- ===============================================================
      End: Hero
      ================================================================ --><!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article">
            <div class="container">
                <div class="cp-article__container">
                    <div class="row">
                        <div class="col-sm-7 col-sm-offset-1 col-md-10 col-md-offset-1">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="cp-article__content">
                                        <div class="cp-article__header">
                                            <h3 class="cp-article__title">For Every Billing and <br class="visible-lg" />Subscription Scenario</h3>
                                        </div>
                                        <div class="cp-article__body">
                                            <p class="cp-article__desc">
                                                What Chargebee’s ASC-606 compliant RevRec model Accounts for
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <ul class="cp-article__list">
                                        <li class="cp-article__list-item">Prorations, cancellations, upgrades, downgrades</li>
                                        <li class="cp-article__list-item">One-time charges, metered charges, add-ons, set-up fees</li>
                                        <li class="cp-article__list-item">Full/partial refunds</li>
                                        <li class="cp-article__list-item">Write-offs & unrealized revenue</li>
                                        <li class="cp-article__list-item">Multi-currency reporting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->


        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article cp-article--alt" with_in_this_section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 col-lg-10 col-lg-offset-1">
                        <div class="cp-article__container">
                            <div class="row">
                                <div class="col-md-6 col-md-push-6">
                                    <div move_this>
                                        <div class="cp-article__figure">
                                            <img src="/static/website/version/images/revenue/saas-revenue-recognition.png" alt="SaaS Revenue Recognition" class="img-responsive">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-md-pull-6">
                                    <div class="cp-article__content">
                                        <div class="cp-article__header">
                                            <h2 class="cp-article__label">
                                                Accurate Revenue Reporting
                                            </h2>
                                            <h3 class="cp-article__title">Your Billing Platform <br class="visible-lg" />as a Source of Truth</h3>
                                        </div>
                                        <div class="cp-article__body">
                                            <div move_here></div>
                                            <p class="cp-article__desc">
                                                Chargebee uncomplicates revenue recognition by using your billing platform as the source. With Chargebee’s ability to solve multiple complex billing use-cases, you get an accurate, flexible, and comprehensive revenue reporting for your organisation. Also, you get to seamlessly manage recurring payments along with revenue reporting.
                                            </p>
                                        </div>
                                        <div class="cp-article__footer">
                                            <div class="cp-article__actions">
                                                <div class="cp-article__action">
                                                    <a href="/recurring-payments/" class="cp-link cp-link--icon">
                                                        Recurring payments management
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->


        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article" with_in_this_section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
                        <div move_this>
                            <div class="cp-article__figure">
                                <img src="/static/website/version/images/revenue/deferred-revenue-reporting.png" alt="Deferred Revenue Reporting" class="img-responsive">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-sm-offset-1 col-md-6 col-md-offset-0">
                        <div class="cp-article__header">
                            <h2 class="cp-article__label">
                                Deferred Revenue Recognition
                            </h2>
                            <h3 class="cp-article__title">Accurate and Comprehensive Deferred Revenue Recognition</h3>
                        </div>
                        <div class="cp-article__content">
                            <div class="cp-article__body">
                                <div move_here></div>
                                <p class="cp-article__desc">
                                    What if a customer upgrades or cancels mid-period? Chargebee’s Deferred Revenue Recognition module does a day-based revenue calculation. The balance amount to be recognized each month and the deferred revenue is calculated automatically. You get a periodic and comprehensive deferred revenue reporting for all plans, products, and currencies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->


        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article" with_in_this_section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 col-md-5 col-md-offset-0 col-md-push-7">
                        <div move_this>
                            <div class="cp-article__figure">
                                <img src="/static/website/version/images/revenue/asc-606-revenue-reporting.png" alt="ASC 606 Revenue Reporting" class="img-responsive">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-sm-offset-1 col-md-6 col-md-offset-1 col-md-pull-5">
                        <div class="cp-article__content">
                            <div class="cp-article__header">
                                <h2 class="cp-article__label">
                                    Global Compliance
                                </h2>
                                <h3 class="cp-article__title">Revenue Recognition <br class="visible-lg" />that’s GAAP-Compliant</h3>
                            </div>
                            <div class="cp-article__body">
                                <div move_here></div>
                                <p class="cp-article__desc">
                                    Revenue recognition by Chargebee is ASC 606 and IFRS 15 compliant and addresses complexities in accounting and finance for businesses of all shapes and sizes. Chargebee integrates with Softrax, for automated revenue management and accurate revenue allocation, with detailed revenue tracking and reporting customizations.
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/integrations/softrax/" class="cp-link cp-link--icon">
                                        Chargebee + Softrax for ASC 606/IFRS 15 Revenue Management
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->


        <!-- -------------------------------------------------------------------
        Start: Article
        -------------------------------------------------------------------  -->
        <section class="cp-article" with_in_this_section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
                        <div move_this>
                            <div class="cp-article__figure">
                                <img src="/static/website/version/images/revenue/revenue-reporting.png" alt="Revenue Reporting" class="img-responsive">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-sm-offset-1 col-md-6 col-md-offset-0">
                        <div class="cp-article__header">
                            <h2 class="cp-article__label">
                                Account Summary Reports
                            </h2>
                            <h3 class="cp-article__title">Reliable Revenue Reporting</h3>
                        </div>
                        <div class="cp-article__content">
                            <div class="cp-article__body">
                                <div move_here></div>
                                <p class="cp-article__desc">
                                    With Chargebee’s Revenue Recognition, you can generate a report for each currency that your business handles. You also get account summary reports, which is a one-stop-shop for tracking and summarizing everything from your payments to write-offs, and makes accounting easier.
                                </p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Article
        -------------------------------------------------------------------  -->

      <!-- -------------------------------------------------------------------
      Start: Footer
      -------------------------------------------------------------------  -->
      <section class="cp-footer container">
          <div class="col-sm-8 col-sm-offset-2">
              <div class="cp-footer__container">
                  <div class="cp-footer__title">
                      Drive Accuracy to Your Subscription Accounting. <br class="visible-lg">To the Dime, Every Time.
                  </div>
                  <div class="cp-footer__actions">
                      <div class="cp-footer__action">
                          <a href="/trial-signup/" class="cp-btn cp-btn--primary">Sign up for free</a>
                      </div>
                      <div class="cp-footer__action">
                          <a href="/schedule-a-demo/" class="cp-btn cp-btn--ghost cp-btn--ghost-primary">Schedule a demo</a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- -------------------------------------------------------------------
      End: Footer
      -------------------------------------------------------------------  -->
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
      $(window).on('load', function(){
          setTimeout(function(){
              $('.cp-hero__highlight').addClass('cp-hero__highlight--active')
          }, 750)
      })    
    }
  }
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->