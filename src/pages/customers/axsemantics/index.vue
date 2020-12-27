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
        :cb-title="'How AX Semantics improved cross-functional performance by tracking Customer LTV on RevenueStory'" 
        :cb-desc="'AX Semantics used RevenueStory for Chargebee to identify and uncover data that enabled them to radically improve their sales team’s performance.'" 
        :cb-url="'/customers/axsemantics/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/ax-semantics/banner.png);background-position:center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/ax-semantics/ax-semantics-logo.png" style="filter: brightness(0) invert(1);" width="120" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                AX Semantics is an automated content generation tool that converts structured data into streamlined content in about 110 languages.
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
                                                How AX Semantics improved<span class="cs-article__title--mark"> cross-functional performance</span> by tracking Customer LTV on RevenueStory
                                            </h1>
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
                                                    <td class="cs-table__desc">Chargebee, Stripe, Datev</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Slack, Zapier, Jira</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">RevenueStory Premium, Chargebee reports</td>
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
                                                <img src="/static/website/version/images/case-study/ax-semantics/ax-semantics-logo.png" width="120" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                RevenueStory gives you insights on everything. You don’t need to do any manual exports/imports or get a separate tool. With the data in Chargebee, RevenueStory is all the business intelligence you need.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Robert Weissgraeber, MD & CTO
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
                                                    <span class="cs-sidebar__title--mark">The pains</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Misalignment
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Lack of a common platform for the 40+ member team to monitor core business metrics
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Poor visibility
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Inability to properly track and measure results of targeted campaigns and experiments
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">The issues</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Manual reporting
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Deterred speed of executing and improving campaigns and experiments.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Scaling operations
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Weekly team catch-ups couldn’t be scaled because of fast-changing operations.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">How RevenueStory helped</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Reliable reporting
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        RevenueStory’s reports come with a high-degree of customizability and the billing data comes straight from Chargebee.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        360° view of the business
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Role-based dashboards to help get an overall view of the business metrics and to stay on the same page.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">The wow-factor</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        The LTV revelation
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Robert and his team are able to identify the actual variables that are truly impacting LTV, and refine the sales and customer success process to maximize the lifetime value.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        <strong>What stories about your subscription revenue will you uncover next with Chargebee RevenueStory?</strong>
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
                                                Alignment is hard when you’re a rapidly growing startup. AX Semantics is a 42-member team with around 300 customers. The headcount is too big for a weekly team catch-up but not big enough to invest in setting up a sophisticated BI tool.
                                            </div>
                                            <div class="cs-article__desc">
                                                The need to get the team aligned towards a single business goal pushed Robert Weissgraeber, Managing Director and CTO of AX-Semantics, to try out multiple analytics platforms and even build something in-house. But this demanded precious developer hours. Even worse, it didn’t allow AX Semantics to run quick experiments across various parts of their customers’ journeys.
                                            </div>
                                            <div class="cs-article__desc">
                                                AX Semantics wanted a system that could let them pull out custom subscription reports and metrics. They also absolutely needed something that could get the entire team aligned to their one true objective - Growth.
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                To get everyone aligned towards moving the right needle, Robert divided the customer journey into Acquisition, Leakage, Churn & Retention.
                                            </div>
                                            <div class="cs-article__desc">
                                                Every month, they picked a single theme, set up corresponding reports in RevenueStory, and directed all their efforts to improve each of these metrics.
                                            </div>
                                            <div class="cs-article__desc">
                                                “Without RevenueStory, all of this would’ve been tough,'' says Robert. RevenueStory’s metrics & reports made it possible for them to get what would have taken days of manual work into a single real-time dashboard for each function in the team. <a href="/saas-reporting/" target="_blank" class="cs-link" style="margin-top: 12px; margin-left: 0">See more about reporting with Chargebee</a>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Pay-off
                                            </div>
                                            <div class="cs-article__desc">
                                                Lifetime Value (LTV) has always been the major driving factor behind AX-Semantics’ growth and therefore one of Robert’s favorite metrics.
                                            </div>
                                            <div class="cs-article__desc">
                                                While analyzing LTV across users, Robert noticed that the value they derived from customer to customer could vary by over 100%. This despite having no significant differences in the inherent customer characteristic.
                                            </div>
                                            <div class="cs-article__desc">
                                                After digging into Segments in RevenueStory, Robert realized that the difference came down to the sales executives and customer success managers who were handling these accounts.
                                            </div>
                                            <div class="cs-article__desc">
                                                This newly-discovered knowledge enabled Robert to identify patterns among the high performing executives and their interactions, and structure the processes to emulate them. <a href="/saas-revenue-operations-software/" target="_blank" class="cs-link" style="margin-top: 12px; margin-left: 0">See how Chargebee drives efficiency into your Revenue Operations</a>
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
                                                <img src="/static/website/version/images/case-study/ax-semantics/ax-semantics-logo.png" width="184" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                RevenueStory for Chargebee enabled us to get deep into our business financials, reducing our reporting effort basically to zero, while adding extensive options for explorative analysis – all that based on the existing information in Chargebee.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <img src="/static/website/version/images/case-study/ax-semantics/robert-weissgraeber.jpg" class="hidden-xs" width="72" alt="" />
                                                — Robert Weissgraeber, MD & CTO
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
        if($(window).width() > 1023){
            $('#nav').affix({
                offset: {     
                    top: $('#nav').offset().top + 340,
                    bottom: ($('#pg-affix-footer').outerHeight(true) + $('footer').outerHeight(true)) + 200
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
        top: -340px;
    }
    .affix-bottom {
        position: absolute;
    }  
    @media screen and (min-width: 768px){
        .cs-hero__content{
            left: 30px;
            right: auto;
        }
        .cs-hero__logo img{
            width: 180px;
        }
        .cs-hero__banner--shadow{
            background: linear-gradient(-135deg, rgba(0, 0, 0, 0) 0%, black 100%)
        }
    }
    @media screen and (max-width: 767px){
        .cs-hero__banner{
            background-position: center !important;
        }
    }
  </style>
  <!-- ===========================================================================
  End: Style Section
  ============================================================================ -->
