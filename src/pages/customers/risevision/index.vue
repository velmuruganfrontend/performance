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
        :cb-title="'RevenueStory helped Rise Vision save 50% time in reporting'"  
        :cb-desc="'Rise Vision’s weekly reporting is done at 20% less time, after moving from third-party subscription analytics to RevenueStory'" 
        :cb-url="'/customers/risevision/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/risevision/risevision.jpg);background-position:center;">
                                        <div class="cs-hero__banner--shadow" style="opacity: .8"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/risevision/logo.png" style="filter: brightness(0) invert(1); max-width: 150px;" width="70" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                A Digital Signage content management system with cloud-based software to design, schedule, and display content.
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
                                                How Rise Vision saved 50% time reconciling numbers with their monthly financials, with RevenueStory
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                Rise Vision’s weekly reporting is done at 20% less time, using RevenueStory instead of their previous third-party subscription analytics tool.
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
                                                    <td class="cs-table__desc">Stripe, Chargebee, Xero, Avalara, RevenueStory</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">HubSpot</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Collaboration</td>
                                                    <td class="cs-table__desc">Slack</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">RevenueStory</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/risevision/logo.png" width="150" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Most of the third-party analytics tools are running off invoicing. So, they're getting their metrics starting about from them, when you invoice a customer as opposed to RevenueStory which runs the majority of stuff from the subscription standpoint.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Debbie Barrafato, Chief Financial Officer, Rise Vision
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
                                                    <span class="cs-sidebar__title--mark">Before RevenueStory</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                       Lack of visibility into user-level data with the third-party analytics tool
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        The previous tool offered visibility only into invoice-level data meant a lot of time spent on reconciling numbers with monthly financials. 
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Inaccurate MRR data
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        MRR from third-party tool was inaccurate as it did not take into account credit notes and promotional credits. 
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After RevenueStory</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Time saved in reporting
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Faster monthly reports with 50% less time spent in reconciling numbers than what it would have taken to do regularly before.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        360-degree view into customer-level metrics
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        More accuracy with a 360-degree view into transaction-level, invoice-level, subscription-level, and customer-level.
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
                                                As a small finance team of 3 at Rise Vision that maintains the books for two separate legal entities, the team’s goal is to keep processes simple, look for means to automate and define controls around the automation. 
                                            </div>
                                            <div class="cs-article__desc">
                                                What ended up happening, however, was that the third-party analytics tool would show visibility only into invoice-level data. So metrics from the tool was always lower than what Chargebee showed — which meant a lot of time spent on reconciling numbers with monthly financials. Since it ran their metrics on invoice information, their MRR was not a true representation of their revenue numbers as it did not take into account information such as promotional credits — something that Rise Vision issued in abundance to push for better product engagement and higher renewal.
                                            </div>
                                            <div class="cs-article__desc">
                                                In Debbie’s words, “The issue was that they're pulling from different data sources. In a perfect world where your invoice represents what the subscription is set up at, you never have to make any changes. For instance, you never have to credit an invoice. Or offer any promotions — and if that’s the case, you could rely on the third-party tool, but nobody ever does. You can never get around a credit being issued. Right? That's the biggest difference in my mind — it is that it's not driven off of what the subscription is saying in the other tool. It's driven off an invoice. And that's not representative of true MRR.” 
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                The need to push for FinOps automation to increase process efficiency stemmed from a necessity to grow and meeting Rise Vision’s EBITDA targets. Keeping it simple to minimize work and risk of error, automation was a key component, along with the need to realize an improved operating profit %.
                                            </div>
                                            <div class="cs-article__desc">
                                                To do that, the finance team at Rise Vision sought a single source of truth, than waste time shuttling between two systems. Debbie explains it best — “I told the team, we should be using Chargebee because it's our billing system. It's what feeds the financials. And I only care about what feeds the financials.” 
                                            </div>
                                            <div class="cs-article__desc">
                                                After understanding the metrics — both in terms of definitions and calculations — in RevenueStory against their previous tool, the finance team pushed for a complete migration to RevenueStory. 
                                            </div>
                                            <div class="cs-article__desc">
                                                With Xero as the G/L system for accounting, Chargebee for managing billing automation of their subscription business, Avalara for sales tax filings and calculation, Stripe for credit card payment processing, their finance tech stack was completed by using RevenueStory for their subscription analytics.
                                            </div>
                                        </div>
                                        
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Payoff
                                            </div>
                                            <div class="cs-article__desc">
                                                Having migrated to RevenueStory has significantly impacted how they report their MRR as well as resulted in terms of overall boost in productivity. 
                                            </div>

                                            <div class="cs-article__desc">
                                                <ul class="cs-article__list"> 
                                                    <li class="cs-article__item">
                                                        <strong>Single source of truth:</strong> RevenueStory gives a 360-degree view into transaction-level, invoice-level, subscription-level, and customer-level, with the ability to view underlying data (VUD).
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Drill-down into Subscription and Customer-level data:</strong>  RevenueStory gives access to a great depth of information with Drill Down, that lets Rise Vision get the complete story — from big picture issues to customer level specifics such as revenue per account, MRR after credit notes and promotional credits, etc.
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>MRR Accuracy:</strong> Since the metrics are based on subscription data, the data is not crunched unlike almost every other BI tool — which means Rise Vision does not lose insights into individual historic data points. This leads to greater MRR accuracy. This is typically not included in third-party analytics tools resulting in lower MRR. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Time saved in reconciling numbers:</strong> The time spent in reconciling numbers between RevenueStory and their monthly financials has been reduced by 50% compared to the time spent between their previous tool and their financials. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Time saved in generating weekly numbers:</strong> The finance team is able to create weekly financial reports in 20% less time than they did before.
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
                                                <img src="/static/website/version/images/case-study/risevision/logo.png" width="150" alt="" />  
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Our weekly reporting is faster — so it saves me 20% for that. And just reconciling MRR on a monthly basis to what's in our financials — all that is done in 50% less time than what it would have taken to do regularly before.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Debbie Barrafato, Chief Financial Officer, Rise Vision
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
    <!-- .cs-hero__banner {
        min-height: 640px;  
    }  -->
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
         .cs-hero__banner{ min-height: 320px; }    
    }

  </style>
  <!-- ===========================================================================
  End: Style Section
  ============================================================================ -->
