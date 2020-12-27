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
        :cb-title="'How Whiteboard reduced Churn by 100% using Chargebee'" 
        :cb-desc="'Whiteboard increased their MRR by 35% with efficient billing operations, while also making the team more effective, more informed, and more empowered to help our customers.'" 
        :cb-url="'/customers/whiteboard/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/whiteboard/whiteboard-banner.jpg);background-position:center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/whiteboard/whiteboard-logo-white.png" width="240" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                A mortgage-CRM that helps Loan Officers and their teams systematize the mortgage process and cultivate relationships with their partners in the real estate space.
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
                                                How Whiteboard reduced <span class="cs-article__title--mark">Churn</span> by 100% using Chargebee
                                            </h1>
                                            <div class="cs-article__desc">
                                                And increased their MRR by 35% with improved billing operations
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
                                                    <td class="cs-table__desc">Braintree, Stripe, QuickBooks</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">Insightly, HubSpot</td>
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
                                                    <td class="cs-table__desc">Intercom</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/whiteboard/whiteboard-logo.png" width="220" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                We decided on Chargebee largely because of the flexibility and support offered where importing existing data was concerned.  It took some time and consultation, but Chargebee made it pretty easy and did a great job of mitigating risk as we migrated.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Ben Laughter, VP, Whiteboard CRM
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
                                        <div class="cs-sidebar" id="nav">
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">Operational Hassles</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Operational nightmare on customer retention and revenue recovery
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Whiteboard couldn’t streamline operations around payment failures with inconsistent policies around deactivations and cancelations.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Unreliable and incorrect SaaS metrics
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Whiteboard was not anchored on the right SaaS success metrics (MRR, ARR, Churn, etc.)
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Better dunning for improved revenue recovery and reduced churn
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Chargebee’s Dunning helped standardize processes around payment failures, improving MRR by 35% and reducing churn by 100%. 
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        RevenueStory for accurate subscription analytics
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        RevenueStory made it pretty easy to put critical measurements in place. MRR, ARR, Churn, Expansion, etc. are all at their fingertips every day. 
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
                                                Having started with PayPal to process payments, Whiteboard had to rely heavily on manual billing, which restricted them from further enhancing their customer onboarding experience.
                                            </div>
                                            <div class="cs-article__desc">
                                                Soon, they moved to Braintree for processing recurring payments and managing their subscriptions. Braintree lacked the solid automation to recover revenue from payment failures and send email communications for follow-ups. With inconsistent policies surrounding deactivation and cancelation, a member of the Whiteboard team had to spend hours chasing customers for payments, every week — not the best use of their time, which would otherwise be used for onboarding customers.
                                            </div>
                                            <div class="cs-article__desc">
                                                Whiteboard also found that they were not anchored to the right SaaS success metrics. In their early days, the acquisition of new customers was a bigger focal point than retention. “Anchoring to traditional, transactional metrics (like new sales) made us short-sighted. We weren't paying enough attention to churn or expansion or recurring revenue,” Ben Laughter, VP, Customer Success and Operations at Whiteboard said. 
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                               One of Whiteboard’s biggest fears, while evaluating a billing solution, was data quality while migrating existing customers into the system. Double billing existing customers and sending them incorrect notifications were some of the reasons that made Whiteboard averse to migration risks.
                                            </div>
                                            <div class="cs-article__desc">
                                                But Chargebee’s implementation and migration specialists ensured that the transition was smooth. While onboarding all new customers via Chargebee instead of Braintree, Whiteboard also spent time building out their preferences, email templates, user profiles, product catalogs, and coupons. 
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Pay-off
                                            </div>
                                            <div class="cs-article__desc">
                                                The automated emails that go out from Chargebee for all manner of events including upcoming and successful renewal, quotes, and subscription changes have helped Whiteboard stay on top of all their customers, resulting in great financial relationships.
                                            </div>
                                            <div class="cs-article__desc">
                                                Chargebee’s Revenue Recovery Suite was another significant contributor to Whiteboard’s growth. The dunning tools helped them standardize and automate the vast majority of their processes when payments fail, reducing churn by almost 100%.
                                            </div>
                                            <div class="cs-article__desc">
                                                Chargebee’s RevenueStory also made it easy to anchor their critical SaaS metrics such as MRR, ARR, Churn, Expansion, etc, because of which, they were able to better understand the need for quality sales and onboarding, and for building stronger customer relationships.
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
                                                <img src="/static/website/version/images/case-study/whiteboard/whiteboard-logo.png" width="240" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                With the adoption of Chargebee as one factor, we’ve grown our MRR by over 35% in the last eight months. We’ve reduced churn by over 100%. We’ve made the team more effective, more informed, and more empowered to help our customers. For Whiteboard, Chargebee has been a pivotal and indispensable tool.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <!-- <img src="/static/website/version/images/case-study/fishburners/ayush_patel.png" class="hidden-xs" width="72" alt="" /> -->
                                                — Ben Laughter, VP of Customer Success and Operations, Whiteboard CRM
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
        // For Affix
        if($(window).width() > 1199){
            $('#nav').affix({
                offset: {     
                    top: $('#nav').offset().top - 40,
                    bottom: ($('#pg-affix-footer').outerHeight(true) + $('footer').outerHeight(true)) + 250
                }
            }).on('affix.bs.affix',function(){
                setAffixContainerSize();
            });

            /*Setting the width of the sidebar (I took 10px of its value which is the margin between cols in my Bootstrap CSS*/
            function setAffixContainerSize(){
                $('#nav').width($('#nav').parent().innerWidth()-112);
            }

            $(window).resize(function(){
                setAffixContainerSize();
            });
        }
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
    .affix-top {
        position: relative;
    }
    .affix {
        position: fixed;
        top: 40px;
    }
    .affix-bottom {
        position: absolute;
    }
  </style>
  <!-- ===========================================================================
  End: Style Section
  ============================================================================ -->
