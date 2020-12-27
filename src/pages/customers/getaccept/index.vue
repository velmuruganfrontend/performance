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
        :cb-title="'How GetAccept Scaled their Revenue 4X, using Chargebee'" 
        :cb-desc="'US-based eSignature & deal management platform used Chargebee to manage their subscriptions since inception and scaled upmarket in 3 years.'" 
        :cb-url="'/customers/getaccept/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/getaccept/getaccept-img.png);background-position:top center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/getaccept/ga-logo-white.png" width="180" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                An AI-based eSignature & deal management platform.
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
                                                How GetAccept grew their <span class="cs-article__title--mark">revenue 4x</span> in 12 months
                                            </h1>
                                            <div class="cs-article__desc">
                                                And how Chargebee continues to be their growth partners as they scale globally
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
                                                    <td class="cs-table__desc">Stripe, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">HubSpot, Chargebee</td>
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
                                                    <td class="cs-table__desc">Intercom, Appcues</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/getaccept/ga-logo-black.png" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Chargebee is a fantastic solution that really meets the needs of any online business from Saas to e-commerce. I have had experience with many platforms both as a leader and as a consultant, and Chargebee is the platform I have liked the most. I think it also balances feature set with usability
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Dailius Wilson, VP Sales and Growth, GetAccept
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
                                                    <span class="cs-sidebar__title--mark">What GetAccept looked for</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Pricing and discount experiments as they moved upmarket to sell to more enterprise businesses.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Support for global payments as they expanded geographies
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        4X revenue growth in 12 months alone, using Chargebee
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Support evolving pricing structure with support for tiered as well as dynamic pricing for enterprise sales <a href="/saas-pricing-models/" target="_blank" class="cs-link" style="margin-top: 12px; margin-left: 0">Learn more about Chargebee's Pricing Models</a>
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
                                                GetAccept adopted a hybrid approach when it came to sales — an outbound sales-driven model as well as a self-serve sign-up model. While payment is the final step of their conversion, their needs diversified as they started selling to enterprise businesses. The demands grew as they pursued different use-cases and required a platform that allowed:
                                            
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        Unique marketing campaigns with time-bound coupons, as well as the ability to add recurring and non-recurring charges
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Pricing experiments with an evolving pricing structure
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Global scale with support for international payments
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Visibility into the total account receivables with a view of unpaid invoices
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                For GetAccept, using a subscription billing solution since their inception was a given. After evaluating solutions such as Zuora, Fusebill, and Recurly, GetAccept chose Chargebee for its flexibility and simplicity. By creating their own self-service centre using the API to enable a seamless <a href="/recurring-payments/checkout-experience/" target="_blank" class="cs-link">checkout experience</a> inside the app, GetAccept connected their app to Chargebee to accommodate and sync any change in either system. Chargebee allows them to —
                                            
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        Support evolving pricing structure with support for tiered as well as dynamic pricing for enterprise sales 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Issue time-based discounts and coupons to enable flash sales. This was connected to their marketing automation, so they could nurture prospects from these campaigns
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Manage their subscriptions and support self-service upsells and cancellations on a pro-rata basis
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                Impact
                                            </div>
                                            <div class="cs-article__desc">
                                                Iterating on pricing, issuing discounts, and custom pricing contributed to GetAccept’s revenue growing 4X, using Chargebee. The team at GetAccept are firm believers that happy customers can be their best evangelists - they issued promotional credits instead of refunds to turn customers into advocates. Visibility into churn reports also gave them a view into changing patterns of their customers’ pricing or consumption such as addition or removal of seats, that enabled them to take corrective measures. 
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
                                                <img src="/static/website/version/images/case-study/getaccept/ga-logo-black.png" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                The (Chargebee) system is robust yet cost-effective enough to really architect a complex solution using simple methods. We wouldn’t change or consider it even as we scale above the 10 million ARR mark.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <!-- <img src="/static/website/version/images/case-study/fishburners/ayush_patel.png" class="hidden-xs" width="72" alt="" /> -->
                                                — Dailius Wilson, VP Sales and Growth, GetAccept
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
