<!-- ===========================================================================
// cb-title		=	Page Level Titles (Title, Twitter, OG)
// cb-desc		=	Page Level Descriptions (Description, Twitter, OG)
// cb-image		=	Page Level Images (Twitter, OG)
// cb-style		=	Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script	=	Page Level Head Script. Using this tag to put head level scripts
// cb-body-script	=	Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex	=	Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header 		=	App header will add header to the page. 
//                  Need a white header in page use :hasInvert="true" attribute
//                  Need a basic header(without menu's) in page use :hasBasicHeader="true" attribute
// app-footer 		=	App footer will add footer to the page.
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
        :cb-title="'How Chargebee helped Trail Reduce Time Spent on Subscription Management by 80%'" 
        :cb-desc="'Trail automated subscription workflows, optimized billing workflows, and recovered lost revenue with Chargebee.'" 
        :cb-url="'/customers/trail/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/casestudy.css'"
        :cb-head-script="''"
        :cb-body-script="''"
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
            <div class="cs-main">
                <div class="cs-row">
                    <div class="cs-hero">
                        <div class="container sm-pad-zero">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/trail/trail-banner.jpg);background-position:center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/trail/trail-logo-white.svg" width="60" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                Task management for hospitality businesses to run better sites - without paper & email.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cs-block">
                        <div class="cs-article-big">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="cs-article" style="max-width: 900px;">
                                            <h1 class="cs-article__title">
                                                How Chargebee helped Trail Reduce Time Spent on <span class="cs-article__title--mark">Subscription Management</span> by 80%
                                            </h1>
                                            <div class="cs-article__desc">
                                                And also significantly improved revenue collection process.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cs-block">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-5 col-md-offset-1 col-sm-5">
                                    <div class="cs-article-half">
                                        <div class="cs-article">
                                            <table class="cs-table">
                                                <tr class="cs-table__row">
                                                    <td colspan="2" class="cs-table__title">Tech Stack</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Finance</td>
                                                    <td class="cs-table__desc">GoCardless, Stripe, Xero</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">HubSpot</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Zapier, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">RevenueStory</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Success</td>
                                                    <td class="cs-table__desc">Intercom, Slack</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/trail/trail-logo-black.svg" width="60" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                We implemented Chargebee at a point when we were experiencing massive growth and this (growth) wouldn't have been possible without Chargebee.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Nick Allen, Product Manager, Trail
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-11 col-sm-offset-1">
                                <div class="cs-devider"></div>
                            </div>
                        </div>
                    </div>
                    <div class="cs-block">
                        <div class="cs-article-full">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4 col-md-offset-1 col-sm-12 col-md-push-6">
                                        <div class="cs-sidebar">
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">Scaling troubles</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Manual billing
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        In their hypergrowth stage, manually managing ongoing subscriptions for Trail was error-prone. Setting up billing was a manual and messy process and a poor introduction to Trail
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Revenue loss
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Less time on quality onboarding and more time on collections. CS team spent ~20 Hrs/month on just billing.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Reduced time spent on subscriptions by 80%
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Trail cut down time spent managing subscriptions by about 80% using Chargebee
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Success spends time on better onboarding
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        <a href="https://www.trailapp.com/" class="cs-link">Trail</a> now onboard customers faster and with focus on quality, with Chargebee
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="/trial-signup/" class="cs-sidebar__action">Signup for free</a>
                                        </div>

                                        
                                    </div>


                                    <div class="col-md-5 col-md-offset-1 col-sm-10 col-sm-offset-1 col-md-pull-5">
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Problem
                                            </div>
                                            <div class="cs-article__desc">
                                                Trail’s workflow was heavily dependent on an outbound sales-driven model, requiring the customer success team to handle onboarding of customers and collections.  The CS team was spending close to 20 hours/month on just billing operations - primarily on manually chasing customers to collect payment details after onboarding and still losing out on potential revenue.
                                            </div>
                                            <div class="cs-article__desc">
                                                Managing ongoing subscriptions and setting up billing was a completely manual and error-prone process. This led to a confusing experience for customers, leading to a poor introduction to an otherwise fantastic product.
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                After evaluating other players in the space, Trail chose Chargebee as their preferred partner for subscription management and automated billing for:
                                            
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        the ability to automate subscription workflows and recover lost revenue, 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        an optimized billing experience, so more time could be spent on onboarding,
                                                    </li>
                                                    <li class="cs-article__item">
                                                        its support for payment gateways and methods such as GoCardless for direct debit,
                                                    </li>
                                                    <li class="cs-article__item">
                                                        it’s reputation in the market 
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Pay-off
                                            </div>
                                            <div class="cs-article__desc">
                                                While most of Trail’s issues tied back to potentially losing out on a lot of revenue, Trail’s usage of Chargebee resulted in more than simply recovering lost revenue.  They were able to:
                                            
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        Close a sale much faster. The checkout flow integrated the signup process and payment collection to reduce drop-offs
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Get a complete view into different subscription states, with the ability to configure special deals or rates for different customers
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Achieve visibility into accurate real-time business metrics that they care about. Before Chargebee, Trail had to work out the MRR details from their accounting system, which often wasn’t up-to-date. There was a significant difference in the expected revenue and actual revenue. 
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cs-row" id="pg-affix-footer">
                    <div class="cs-block">
                        <div class="cs-testimonial-full">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-10 col-sm-offset-1 col-md-8">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/trail/trail-logo-black.svg" width="80" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Flexibility around subscription types is probably the biggest win — being able to view all our subscriptions in one place and learning the absolutely everything in the subscriptions trail. Chargebee cut down time spent managing subscriptions by about 80% compared to our previous process.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <!-- <img src="/static/website/version/images/case-study/fishburners/ayush_patel.png" class="hidden-xs" width="72" alt="" /> -->
                                                — Nick Allen, Product Manager, Trail
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
