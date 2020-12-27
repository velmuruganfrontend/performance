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
        :cb-title="'How LiveSession grew 7x over 6 months, using Chargebee\'s Freemium offering'" 
        :cb-desc="'Poland-based LiveSession benefitted from Chargebee’s Startup offering to grow its business and revenue globally.'" 
        :cb-url="'/customers/livesession/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/livesession/livesession.png);background-position:center;">
                                        <div class="cs-hero__banner--shadow" style="opacity: .8"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/livesession/logo.svg" style="filter: brightness(0) invert(1); max-width: 150px;" width="70" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                LiveSession is a SaaS analytics tool that tracks user behavior on websites to improve your product user experience.
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
                                                How LiveSession grew 7x over 6 months, using Chargebee's Freemium offering
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                LiveSession uses Chargebee’s Freemium Plan in conjunction with Braintree to scale its subscription business.
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
                                                    <td class="cs-table__desc">Braintree, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">HubSpot, GetResponse, Autopilot</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Slack, Google Suite, Trello</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">ChartMogul, Google Analytics, LiveSession</td>
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
                                                <img src="/static/website/version/images/case-study/livesession/logo.svg" width="150" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                For us, as a new business, choosing the right billing and invoicing system was crucial. I thoroughly researched the tools available on the market. After conducting the test, we decided that Chargebee is the best one. We believe it will continue to meet our needs as LiveSession keeps growing.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Kamil Drazkiewicz, CEO & Founder, LiveSession
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
                                                        SaaS Billing that lacked the depth of capabilities:
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        In their search for recurring billing solutions, LiveSession found most of them lacking important integrations, the inability of migrating to another platform in case of issues, and automated tax calculations on a global scale.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee:</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        7x growth in 6 months:
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        With the Launch plan offering where they could use Chargebee for free upto $50K in aggregate revenue, LiveSession benefitted from overall deeper capabilities, custom pricing, tax automation, strong third-party integrations, with which they grew 7x over 6 months.
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
                                                LiveSession was designed to be a subscription business from the get-go. With prior experience in having dealt with subscription management tools such as Recurly, Kamil Drazkiewicz, the Founder of LiveSession, found the limitations of many solutions available on the market. Some of the limitations included the lack of important integrations, the inability of migrating to another platform should the need arise, and tax automation With this in mind, he took some time to research and test different apps. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Their main requirements included:
                                                <br>
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item" style="margin-bottom: 12px;">
                                                        <strong>Braintree integration:</strong> With Braintree as their payment gateway, this was a critical requirement for their integration.
                                                    </li>
                                                    <li class="cs-article__item" style="margin-bottom: 12px;">
                                                        <strong>Easy tax calculation:</strong> The company caters to clients from different countries around the world, including the USA, Poland, India and the UK. Tax regulations vary significantly depending on the region, which is why LiveSession was looking for a solution that automated geo-specific tax calculation.
                                                    </li>
                                                    <li class="cs-article__item" style="margin-bottom: 12px;">
                                                        <strong>Integration with analytics software:</strong> LiveSession is a data-driven startup that delivers a data-driven product. And hence, an integration with ChartMogul was necessary to track their subscription analytics.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                The team at LiveSession believed that it pays off to take the time to choose the best subscription management tool available. Chargebee was their top pick, as it met their requirements mentioned above, as well as:
                                                <br>
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item" style="margin-bottom: 12px;">
                                                        <strong>The use of Go language API library:</strong> This was a huge technical advantage, as LiveSession is using Go on a daily basis. 
                                                    </li>
                                                    <li class="cs-article__item" style="margin-bottom: 12px;">
                                                        <strong>Extensive documentation:</strong> Legal requirements are intricate by nature, which is why integrating with subscription management tools is rather complex. Chargebee’s detailed documentation really helped LiveSession’s founder go through the integration process within a month.
                                                    </li>
                                                    <li class="cs-article__item" style="margin-bottom: 12px;">
                                                        <strong>Customer support:</strong> LiveSession was impressed with Chargebee’s customer support, especially with their speed of responses to standard as well as non-standard queries.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Payoff
                                            </div>
                                            <div class="cs-article__desc">
                                                After working closely with Chargebee, LiveSession witnessed 7x growth in 6 months with the Freemium Offering. They were particularly happy with:
                                                <br>
                                                <ul class="cs-article__list" style="margin-bottom: 24px;">
                                                    <li class="cs-article__item" style="margin-bottom: 12px;">
                                                        The ability to add customized enterprise plans manually
                                                    </li>
                                                    <li class="cs-article__item" style="margin-bottom: 12px;">
                                                        Smooth automation and robust API
                                                    </li>
                                                    <li class="cs-article__item" style="margin-bottom: 12px;">
                                                        Automated tax compliance
                                                    </li>
                                                    <li class="cs-article__item" style="margin-bottom: 12px;">
                                                        Third-party software integrations, such as Slack, ChartMogul, and Profitwell. These solutions make it easier to measure growth and company KPIs without additional hassle. 
                                                    </li>
                                                    <li class="cs-article__item" style="margin-bottom: 12px;">
                                                        The app itself, as they found it really comprehensive yet easy to understand
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
                                                <img src="/static/website/version/images/case-study/livesession/logo.svg" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Once you start using one solution, switching to another one is really hard, overwhelming, and time-consuming and frustrating — both for customers and our business. Sometimes it means that every client would need to enter their payment details once again. We’re lucky to have found Chargebee at the very beginning of our LiveSession journey.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Kamil Drazkiewicz, CEO & Founder, LiveSession
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
