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
        :cb-title="'How Proxyclick Expanded with Optimized Subscription and Revenue Operations'" 
        :cb-desc="'Proxyclick, a Belgium-based Visitor Management SaaS, used Chargebee to automate subscription billing and overall revenue operations'" 
        :cb-url="'/customers/proxyclick/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/proxyclick/banner.jpg);background-position:center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/proxyclick/logo-white.png" width="120" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                A visitor management solution to help companies manage their visitors in their office better.
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
                                                How Proxyclick Scaled to Newer Territories with Optimized <span class="cs-article__title--mark">Subscription and Revenue</span> Operations
                                            </h1>
                                            <div class="cs-article__desc">
                                                And automated tax management in the US
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
                                                    <td class="cs-table__desc">Stripe, Ingenico ePayments, Avalara, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">HubSpot</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Slack</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">ChartMogul</td>
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
                                                <img src="/static/website/version/images/case-study/proxyclick/logo.svg" width="120" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Chargebee enables to save a lot of time on a monthly basis. With the data export, we were able to build a reliable deferred revenue model which fits our internal needs. We just feed the new data into our model on a monthly basis and the accounting journal entry is populated.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Jean-Thomas Cock, Head of Finance, Proxyclick
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
                                                    <span class="cs-sidebar__title--mark">Growing pain pangs</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Pains of managing variable pricing
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Despite the tiered pricing model on their pricing page, some of the larger deals required custom pricing. Managing the plans for each of these variable pricing cases was becoming a hassle.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Scaling to new geographies compliant to tax rules
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Having scaled to selling in the US, being up-to-date and compliant with the latest tax rules in each state was business-critical. The day-to-day, however, was becoming cumbersome and unmanageable.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Easy Custom Pricing
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Proyxclick now offers custom pricing to their enterprise segment prospects without having to create a “new product” every single time.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Scaled easily to newer territories
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Chargebee’s integration with Avalara helped Proxyclick automate the configuration of sales tax rates for each jurisdiction they were selling in, without manual intervention.
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
                                                Moving to a subscription business model was a natural decision for <a class="cs-link--inner" href="https://www.proxyclick.com/" target="_blank">Proxyclick</a>. Before Chargebee, Proxyclick used Excel spreadsheets to manage their billing. The pain started when their monthly invoice volume increased heavily month over month. The process became tedious and time-consuming given the fact that prospects could sign up directly without any involvement from a finance/billing perspective.
                                            </div>
                                            <div class="cs-article__desc">
                                                Soon issues of scale started creeping in, as with businesses in the growth stage. Their one-member finance team managed everything related to pricing and revenue reporting. And every time they had to offer custom pricing to their prospects, they’d essentially end up creating a new product. This was proving to be a burden as their client base grew rapidly. At the same time, their enterprise plan - which offers custom pricing - starting enticing more customers.
                                            </div>
                                            <div class="cs-article__desc">
                                                Scaling also meant expanding to new geographies. As a Belgian company, expanding to the US proved to be a challenge for Proxyclick. They had to navigate the complexities of changing sales tax rates in each jurisdiction. Especially “taxing”, was the Supreme Court ruling in 2018 that require online businesses to collect sales taxes irrespective of physical presence.
                                            </div>
                                            <div class="cs-testimonial-half">
                                                <div class="cs-testimonial">
                                                    <figure class="cs-testimonial__logo">
                                                        <img src="/static/website/version/images/case-study/proxyclick/logo.svg" width="120" alt="">
                                                    </figure>
                                                    <div class="cs-testimonial__desc">
                                                        Nowadays it would be impossible to maintain our customer base outside of any automated billing tool.
                                                    </div>
                                                    <div class="cs-testimonial__author">
                                                        — Jean-Thomas Cock, Head of Finance, Proxyclick.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                Proxyclick looked for a tool that would enable automatic invoicing upon renewal that they could set and forget. They also wanted to integrate the tool with their product so that prospects could sign up online and have their license activated without manual input.
                                            </div>
                                            <div class="cs-article__desc">
                                                When Proxyclick chose Chargebee, specific needs were identified and fulfilled by key areas including IT, Product, and Finance. Chargebee’s open REST APIs was also a critical component that suited them better, compared to the other billing systems they’d tried.
                                            </div>
                                            <div class="cs-testimonial-half">
                                                <div class="cs-testimonial">
                                                    <figure class="cs-testimonial__logo">
                                                        <img src="/static/website/version/images/case-study/proxyclick/logo.svg" width="120" alt="">
                                                    </figure>
                                                    <div class="cs-testimonial__desc">
                                                        Our Developer is very happy whenever I ask him something related to Chargebee or the data coming from Chargebee.  He’s like, ‘Yeah. You can do anything’. Because the API is so good.
                                                    </div>
                                                    <div class="cs-testimonial__author">
                                                        — Jean-Thomas Cock, Head of Finance, Proxyclick.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Pay-off
                                            </div>
                                            <div class="cs-article__desc">
                                                The biggest benefit was seen by the Finance team, followed by Marketing and Sales. The Finance team in particularly found the system to be efficient, easy to use, and reliable.
                                            </div>
                                            <div class="cs-article__desc">
                                                Chargebee’s Price Override allowed them to offer custom pricing to their enterprise segment prospects without having to reinvent the wheel they negotiated custom ricing.
                                            </div>
                                            <div class="cs-article__desc">
                                                For Proxyclick, “Chargebee’s integration with Avalara has been a game-changer and lifesaver.” It helped them in setting up their finance operations in the US. “I couldn’t have done it without it (Chargebee + Avalara) because I didn’t know enough about sales tax at the local in the States, and we sell in pretty much every state,” said Mr. Cock.
                                            </div>
                                            <div class="cs-article__desc">
                                                As the Head of Finance at Proxyclick, Mr. Cock logs into Chargebee about 10 times a day. He keeps track of non-paying customers, generates invoices and appropriate financial reports, customizes billing rules for some customers, and iterates on pricing when necessary. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Proxyclick has also been able to control churn by pausing or reactivating customer subscriptions in cases where clients want to use the product for a specific event.
                                            </div>
                                            <div class="cs-article__desc">
                                                By building a smart workflow between Intercom, Chargebee, and HubSpot, the Marketing team is able to track the trial status of users and roll out a contextual onboarding campaign based on where the users sit in the customer journey.
                                            </div>
                                            <div class="cs-article__desc">
                                                Smart companies like Proxyclick use Chargebee for a greater subscription experience. Check them out if you’re looking for a <a class="cs-link--inner" href="https://www.proxyclick.com/" target="_blank">fast an intuitive solution to check-in your visitors</a>.
                                            </div>
                                        </div>
                                        <!-- <div class="cs-article">
                                            <div class="cs-article__title">
                                                Inspiration Board from Proxyclick:
                                            </div>
                                            <div class="cs-article__desc">
                                                Basically, Chargebee helps us to split in real-time our database into 2 buckets: who’s a client and who’s not. As soon as a subscription is created in Chargebee, data is pushed through Intercom and Hubspot:
                                            </div>
                                            <ul class="cs-article__list">
                                                <li class="cs-article__item">
                                                    In Intercom, it allows us to remove the user from the ‘onboarding’ campaign specific to our free trial users and enrols him into a ‘customer-specific’ campaign
                                                </li>
                                                <li class="cs-article__item">
                                                    In Hubspot, the subscription changes the contact’s lifecycle stage (if ‘MRR’ is true, then change the stage to ‘customer’). This is critical because that lifecycle stage field is used in many workflows, lists, reporting dashboards etc. 
                                                </li>
                                            </ul>
                                        </div> -->
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
                    top: $('#nav').offset().top + 425,
                    bottom: $('footer').outerHeight(true) + 200
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
        top: -425px;
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
