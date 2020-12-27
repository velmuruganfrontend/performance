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
        :cb-title="'How Chargebee Cut Down Livestorm’s Support Time by Half'" 
        :cb-desc="'Livestorm also managed to scale their payment infrastructure by adding additional payment methods and gateway through Chargebee.'" 
        :cb-url="'/customers/livestorm/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/livestorm/livestorm-banner.jpg);background-position:top center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/customers/logos/livestorm.svg" width="180" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                Livestorm is a Europe-based SaaS that helps marketers run their webinar more efficiently with a modern, easy to use webinar software.
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
                                                How Chargebee <span class="cs-article__title--mark"> Cut Down Livestorm’s Support Time by Half</span>
                                            </h1>
                                            <div class="cs-article__desc">
                                                <a class="cs-link" href="https://livestorm.co/" style="font-size: 20px;" target="_blank">Livestorm</a> also managed to scale their payment infrastructure by adding additional payment methods and gateway through Chargebee. 
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
                                                    <td class="cs-table__desc">Stripe, GoCardless, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">RevenueStory</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Success</td>
                                                    <td class="cs-table__desc">Zendesk, Intercom</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/customers/logos/livestorm.svg" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                "We needed a reliable solution to deal with refunds, coupons, finding delinquent payments/users etc. We also had issues with VAT rules - being based out of European Union, proration logic, and credit notes. And payments isn’t our core expertise.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Robin Lambert, Co-founder & CPO, Livestorm
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
                                                    <span class="cs-sidebar__title--mark">Pain Pangs at Scale</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        The inhouse system on top of Stripe was becoming complex to handle with scale 
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Managing discounts and refunds was tricky, which led to a massive productivity loss for the customer support team 
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        50% reduction in customer tickets as managing discounts and coupons were on auto-pilot with Chargebee
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Chargebee helped improve lead-to-customer conversions, with experiments using coupons, upsell emails, etc
                                                    </div>
                                                </div>
                                                 <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Chargebee’s ability to configure multiple payment gateways and payment methods increases avenues for assured paying customer growth
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
                                                The folks at Livestorm stuck to using their in-house billing and invoicing system along with Stripe. 6 months down, they saw their volumes soar.  
                                            </div>
                                            <div class="cs-article__desc">
                                                But it just wasn’t reliable enough to manage billing for all their customers as they scaled.
                                            </div>
                                            <div class="cs-article__desc">
                                                “Before Chargebee we didn’t use a billing software and were doing it all from Stripe and in-house invoice generation and data sends via webhooks. But it has its limits as a payment management system, especially when it comes to managing individual users, and getting specific with actions to take," says Robin Lambert, Co-founder & CPO, Livestorm.   
                                            </div>
                                            <div class="cs-article__desc">
                                                They realized the need for a system that can help with
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Accurate handling of EU-VAT calculation  
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Proration for complex pricing models
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Handling credit notes for refunds and cancellations
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cs-article__desc">
                                                They realised they had to build a lot of these features on Stripe, and it was clear that it wasn't the best use of their time.   
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                Livestorm’s encounter with Chargebee happened soon after they realized the need for a third-party service to manage their billing, as issues like customer queries on delinquent payments, and handling upgrades and downgrades took away time and attention from building their core product. After comparing the feature sets and services of Chargebee against Recurly, Chargify, and Octobat, Livestorm decided Chargebee offered all that they needed and much more. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Chargebee was a one-stop solution for all their payments and subscription billing needs. But as a spill-over of this change, Livestorm was able to boost the productivity of their support team, they had lesser and lesser billing queries to work on and were able to focus on product support.     
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                Impact
                                            </div>
                                            <div class="cs-article__desc">
                                                Livestorm was able to reduce the number of support tickets by 50%. More specifically, Chargebee helped Livestorm with the following: 
                                            
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Handling discounts and coupons became a lot simpler, which would have otherwise been complex with just Stripe  
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Complexities that come along with handling EU-VAT rules are also addressed with Chargebee
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Diversified payment methods by adding more payment gateways and methods brought in additional channels of revenue
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cs-article__desc">
                                                “We have a few customers who can’t pay us through entering a credit card with automated payments and Chargebee can handle such payments and account for them thanks to their integration with GoCardless apart from Stripe. We get so much more out of Chargebee. It aggregates all our payment gateways which ensures we don’t miss any revenue," says Robin Lambert, Co-founder & CPO of Livestorm. 
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
                                                <img src="/static/website/version/images/customers/logos/livestorm.svg" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Using Chargebee is also one less area we have to worry about as we scale. We know that it’ll adapt to most if not any situations that’ll come up in the future. If we add new payment features, onboard new employees, add plans etc. We know Chargebee will adapt and let us evolve and that’s really comforting to know. 
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <!-- <img src="/static/website/version/images/case-study/fishburners/ayush_patel.png" class="hidden-xs" width="72" alt="" /> -->
                                                — Robin Lambert, Co-founder & CPO  Livestorm
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
<style>
.cs-hero__logo{
    -webkit-filter: brightness(0) invert(1);
    filter: brightness(0) invert(1);
}
</style>
