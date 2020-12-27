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
        :cb-title="'How CircleLoop Automated their Revenue Operations, with Chargebee'" 
        :cb-desc="'CircleLoop uses Chargebee to streamline its revenue functions, including Marketing, Sales, Success as well as Finance with Operations to automate their revenue operations.'" 
        :cb-url="'/customers/circleloop/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/circleloop/circleloop.jpg);background-position:center;">
                                        <div class="cs-hero__banner--shadow" style="opacity: .8"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/circleloop/logo.svg" style="filter: brightness(0) invert(1); max-width: 150px;" width="70" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                CircleLoop is a UK-built, next-generation phone system for businesses that runs in powerful desktop and mobile apps.
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
                                        <div class="cs-article" style="max-width: 980px;">
                                            <h1 class="cs-article__title">
                                                How CircleLoop Aligned their Sales and Operations Seamlessly To Automate Revenue Operations, with Chargebee
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                CircleLoop uses Chargebee to streamline its revenue functions, including Marketing, Sales, Success as well as Finance with Operations.
                                            </p>
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
                                                    <td class="cs-table__desc">GoCardless, Stripe, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">HubSpot</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">RevenueStory, Google Analytics, Ruler Analytics</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Success</td>
                                                    <td class="cs-table__desc">Hubspot, Chargebee</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/circleloop/logo.svg" width="150" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Ultimately, Chargebee has a triple use in CircleLoop — it is used by our accounts team from an accountancy point of view but also from our Operations/Marketing Team from a revenue vs spend perspective. The third use is by my Customer Success team who use Chargebee to manage customer Invoices, account queries and to add in non-recurring charges such as porting numbers or bespoke call recording usage.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Dylan Walsh, Operations Manager, CircleLoop
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
                                                    <span class="cs-sidebar__title--mark">Before Chargebee:</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Lack of alignment between Sales and Operations
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        CircleLoop wanted to bring about an alignment between Sales and Operations to grow the revenue and to do that, they wanted to experiment with pricing iterations, flexible billing models, enable global scale, along with access to in-depth and actionable analytics.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee:</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Streamlined Revenue Operations with clear visibility into revenue and growth
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        With Chargebee, CircleLoop was able to bring alignment to its revenue functions — Sales, Marketing, and Success teams along with Finance teams with Operations to measure and align revenue growth against the expense incurred. 
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
                                                CircleLoop was founded in 2017 as a pure-play subscription business. The company was launched to the market with a principle — anything that distracted them from their building their core product was to be purchased if a solution existed in the market, that did the job better. 
                                            </div>
                                            <div class="cs-article__desc">
                                                This principle translated into a need to integrate with a powerful billing and subscription tool that enabled them to focus on building and growing CircleLoop without distractions. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Dylan Walsh is the Operations Manager at CircleLoop. Part of his responsibilities includes identifying revenue opportunities while delivering customer experience, in liaison with the Marketing and Customer Success teams. He was also responsible for reporting the day-to-day commercial growth of the product against the target. 
                                            </div>
                                            <div class="cs-article__desc">
                                                When evaluating billing and subscription management tools, the team at CircleLoop wanted a product that would meet the following requirements —

                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        <strong>Pricing iterations:</strong> Handled various plans and tariffs as the product developed
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        <strong>Flexible billing models:</strong> Had flexible modules for both recurring billing and usage-based billing
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        <strong>Automated Invoicing and Tax Compliance:</strong> Took care of Invoicing and tax considerations
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        <strong>Global Revenue and Customer Scale:</strong> Enable international growth at scale
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        <strong>In-depth and Actionable Analytics:</strong> Gave actionable insights and data into their customer base
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                After having done a thorough market comparison across various products, the team realized Chargebee was by far the best solution that was equipped to handle their needs and more. In Dylan’s words, “We have used Chargebee for nearly 3 years now and have never looked back!”. 
                                            </div>
                                            <div class="cs-article__desc">
                                                As an Operations Manager, Dylan Walsh worked closely with Marketing and revenue functions. Even as CircleLoop caters to thousands of global customers to date, Chargebee enables Dylan to tie their budget and marketing spend back to what they are likely to earn per customer over a lifecycle (CAC:LTV). 
                                            </div>
                                            <div class="cs-article__desc">
                                                Dylan’s use of Chargebee is tied to automating revenue operations with the sales and revenue metrics and is threefold — in that, he liaises with the Finance, Operations, and Customer Success and Marketing Teams. 
                                            </div>
                                        </div>
                                        
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Payoff
                                            </div>
                                            <div class="cs-article__desc">
                                                Tracking MRR by Segment and Acquisition Channel:
                                            </div>
                                            <div class="cs-article__desc">
                                                For CircleLoop, MRR is a vital metric to track their company’s progress. With Chargebee, Dylan is able to track current, expected, and previous MRR. RevenueStory helps CircleLoop drill down the MRR into individual transactions against parameters such as: 
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Payment Success and Failure
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Card Expiring
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Direct Debit MRR
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Transaction Date
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cs-article__desc">
                                                With Chargebee API on their signup link (both paid and trial), CircleLoop is also able to track their New MRR and Addons by acquisition channel, thus giving them a view into their spend on sources such as Adwords, Display, and partnerships seamlessly.
                                            </div>
                                            <div class="cs-article__desc">
                                                Tracking Sales Metrics in RevenueStory:
                                            </div>
                                            <div class="cs-article__desc">
                                                RevenueStory’s “Sales Watch” functionality plays a vital role in the day to day functions of their Operations Team, to track the top-level picture of their month’s progress. It provides the team with key trends on a day-by-day, month-by-month, year-by-year basis, as well as allowing them to track key data including;
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Net Growth MRR
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Cancellation MRR
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Upgrade MRR
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        New MRR by plan
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cs-article__desc">
                                                Tracking Upgrade/Downgrade MRR with Mid-cycle Plan Movement:
                                            </div>
                                            <div class="cs-article__desc">
                                                With thousands of customers on different plans availing different addons, Chargebee gives CircleLoop a clear and in-depth view of each customer’s account and with the ability to manage their subscription. With this view, Dylan is also able to track Upgrade and Downgrade MRR with customers switching between plans on a pro-rata basis. Additionally, the team is also able to send consolidated invoices to customers with clear information on the accrued charges.
                                            </div>
                                            <div class="cs-article__desc">
                                                Pay-as-you-go Pricing Structure and Addons Management
                                            </div>
                                            <div class="cs-article__desc">
                                                Chargebee enables CircleLoop to deliver on its clear pricing structure without the need to produce their own in-house solution to track these changes. With a pricing plan for unlimited outbound calls as well as a pay-as-you-go plan, CircleLoop also offers recurring and non-recurring addons as part of the pricing package. These include;
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Extra Phone Numbers (including International Numbers)
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        SMS Charges
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Calls outside of plans
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
                                                <img src="/static/website/version/images/case-study/circleloop/logo.svg" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Use Chargebee to cut churn on things that are avoidable such as a card expiring. Chargebee provides us with the data that allows us to proactively identify customers who we need to contact for a variety of reasons and seamlessly deliver this to our Customer Success Team to call.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Dylan Walsh, Operations Manager, CircleLoop
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
