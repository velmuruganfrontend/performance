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
        :cb-title="'Zenchef migrated subscription billing from Zuora to Chargebee for efficiency'" 
        :cb-desc="'French SaaS Zenchef expanded globally with efficient subscription management and billing after migrating from Zuora to Chargebee'" 
        :cb-url="'/customers/zenchef/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/zenchef/bg1.jpg);background-position:top center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/zenchef/logo.png" width="180" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                Zenchef is a France-based SaaS that enables over 4000 restaurants in France, Spain, the UK, and all over the world, to build and manage their online presence.
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
                                                How Chargebee <span class="cs-article__title--mark"> Untangled Zenchef from Spaghetti Billing</span> and Set Them up for Flexibility at Scale.
                                            </h1>
                                            <div class="cs-article__desc">
                                                <a class="cs-link" href="https://www.zenchef.com/" style="font-size: 20px;" target="_blank">Zenchef</a> moved out of Zuora and migrated their subscriptions to Chargebee for faster scale. 
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
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">Salesforce, HubSpot</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Zapier, Slack</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">RevenueStory</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Success</td>
                                                    <td class="cs-table__desc">Intercom</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/zenchef/logo.png" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                We were able to recover 60% of formerly unpaid accounts thanks to our switch from Zuora to Chargebee.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Julien Balmont, Co-Founder & CTO, Zenchef
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
                                                    <span class="cs-sidebar__title--mark">The Zuora Snag</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        50% of their engineering resources were spent in building internal tools 
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Maintaining Zuora required huge upfront investments in terms of money and time  
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        8797 Subscriptions were seamlessly migrated from Zuora after opting for Chargebee
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        60% of unpaid accounts were recovered using smart dunning capability
                                                    </div>
                                                </div>
                                                 <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Going Global is now easy with multi- language, multi-currency, and global tax support
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
                                                With <strong>50% of their engineering resources</strong> were being used to build and maintain their in-house billing solution, Zenchef decided to switch to Zuora for their billing needs.  
                                            </div>
                                            <div class="cs-article__desc">
                                                Zuora needed substantial development time needed to make it fully functional.
                                            </div>
                                            <div class="cs-article__desc">
                                                Some of the reasons that prompted them to migrate out of Zuora are listed below:   
                                            
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            API was "way too complex"  
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Setup team wasn't familiar with the French accounting rules
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Interface was too hard to comprehend
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Standard subscription actions took way too long to execute 
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Support was unresponsive
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                Chargebee helped Zenchef <strong>seamlessly migrate about 5015 customer accounts, 8881 contacts, and 8797 active subscriptions</strong> from Zuora.  
                                            </div>
                                            <div class="cs-article__desc">
                                                Zenchef picked Chargebee for its 
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Flexible and easy-to-use interface  
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Intuitive API oriented for developers
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Compatibility with French accounting solutions
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Pricing and the monthly subscription model 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Super responsive support
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cs-article__desc">
                                                According to Julien Balmont, Co-Founder & CTO, Zenchef, “Everyone in the company is able to understand what an action means in the interface without formation or reading the documentation."   
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Impact
                                            </div>
                                            <div class="cs-article__desc">
                                                With the help of Chargebee, Zenchef:
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            <strong>Recaptures 60% of formerly unpaid accounts</strong> using the smart dunning system  
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            <strong>Generate credit notes</strong> for specific but diverse credit needs, while strictly adhering to Revenue Recognition and Reporting standards like <strong>GAAP and ASC 606</strong>
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Has more control over their health and growth, with <strong>accurate and real-time reporting and metrics</strong>
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Creates <strong>tailor-made experiences</strong> for its global customers, using Chargebee's <strong>multi-language</strong> (English, French, and Spanish), <strong>multi-currency, and global tax support</strong>
                                                        </div>
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
                                                <img src="/static/website/version/images/case-study/zenchef/logo.png" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                "The top advantage is the time saved with all the quick actions, the intuitive interface, and the reactive customer support." 
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <!-- <img src="/static/website/version/images/case-study/fishburners/ayush_patel.png" class="hidden-xs" width="72" alt="" /> -->
                                                — Julien Balmont, Co Founder and CTO, Zenchef
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
