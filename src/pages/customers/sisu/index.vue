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
        :cb-title="'Sisu Built An Efficient Sales Engine, with Chargebee and Salesforce'"  
        :cb-desc="'Sisu tracks sales forecast and sales commission performance using Chargebee’s integration with Salesforce'" 
        :cb-url="'/customers/sisu/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/sisu/sisu-banner.jpg);background-position:top;">
                                        <div class="cs-hero__banner--shadow" style="opacity: .8"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/sisu/logo.png" style="filter: brightness(0) invert(1); max-width: 140px;" width="70" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                Growth automation software for real estate
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
                                                How Sisu Built An Efficient Sales Engine, with Chargebee and Salesforce
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                Sisu tracks sales forecast and sales commission performance using Chargebee’s integration with Salesforce
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
                                                    <td class="cs-table__desc">Chargebee, QuickBooks, Stripe</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">Salesforce, Intercom, Refersion</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Slack, Chargebee, Zapier</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">RevenueStory, Geckoboard</td>
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
                                                <img src="/static/website/version/images/case-study/sisu/logo.png" width="140" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Chargebee does a really good job of identifying leads into the Salesforce system. It automatically converts the lead into an account, the contact for the account, and creates the opportunity as well. The trial account and the product line items from Chargebee, are already a part of the opportunity Because my salespeople use Salesforce, and their commission reporting  is coming out of Salesforce.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Frank Felice, Chief Revenue Officer, Sisu
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
                                                    <span class="cs-sidebar__title--mark">Before Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Stripe, Quickbooks + Docusign, Salesforce Quote-to-Cash, Chargify were not equipped to handle either their onboarding workflow, or Salesforce workflow, or both.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Chargebee and Salesforce integration led to easier sales commissions tracking and sales forecasting.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Comprehensive integrations into their SaaS tech stack resulted in seamless workflows from acquisition to retention. 
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
                                                <strong>Frank’s role as CRO:</strong> Frank Felice joined Sisu as the CRO to streamline revenue for the company. They started selling their app from the app store, deploying it using Apple, and Android's payment processing function. Soon, the team realized that they needed to roll out Sisu as a full-fledged platform to expand their customer acquisition channel. The other reason to launch as a platform was to save up nearly 30% of their revenue that went to Apple or Android as fees. 
                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>Evaluation Criteria:</strong> Part of the decision to launch as a complete platform was to roll out Salesforce, because it was a scalable product that promised growth right from their early stages. Frank’s experience in all his previous organizations in building the sales and marketing functions and setting up processes and workflows in place involved him setting up Salesforce. So, integrating Salesforce to Sisu was a no-brainer that would pave their way to growth. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Apart from the need for a solid Salesforce integration, they needed the ability to offer trials, being a pure SaaS product.
                                            </div>
                                        </div>

                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                Problem with other solutions: 
                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>Stripe:</strong> They began with Stripe. But  they ran into developer dependencies when they tried to set up the sophisticated nuances of subscriptions: price variations, email configurations, let alone a good Salesforce integration. In Frank’s words, <span class="fs-italic">“We certainly didn't have the capacity to build out everything we needed to do strictly with the Stripe building blocks. They call it building blocks, but really you've got to be a developer.”</span>
                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>QuickBooks + Docusign:</strong> Next they tried Quickbooks for recurring billing, in conjunction with Salesforce’s integration with Docusign for contracts. They would send out a PDF to a customer who would sign it, fill in their credit card details in the PDF which would be masked. And that information would be stored in Quickbooks in a secure and compliant manner. Frank expressed his frustration, <span class="fs-italic">“that's just not how a SaaS company really should work.”</span>
                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>Salesforce Quote-to-Cash:</strong> After that, they looked at Salesforce Quote-to-Cash. But this solution was not equipped to handle subscription use cases such as allowing trials. 
                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>Chargify:</strong> Next they went for a third-party billing tool — Chargify that would handle a lot of their subscription use cases. <span class="fs-italic">“But Chargify was not going to meet our business requirements and was really quite limited in, (i) in its functionality, and (ii) in its integration with Salesforce”</span>, Frank observed. 
                                            </div><br>

                                            <div class="cs-article__desc">
                                                    Even though they went live with Chargify, they decided to migrate their subscriptions to Chargebee.
                                            </div>
                                        </div>

                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                What set Chargebee apart from the other solutions out there for Sisu was its

                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        Deep Salesforce integration
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Flexible pricing
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Constantly evolving product roadmap
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Easy setup and configuration
                                                    </li>
                                                    <li class="cs-article__item">
                                                        Positive testimonials about the product and consultative support capabilities
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cs-article__desc">
                                                For Sisu, just like Salesforce, Chargebee was an integral part of their tech stack from day one (even before they launched).
                                            </div>
                                            <div class="cs-article__desc">
                                                Since Sisu’s customer base mainly includes residential real estate teams and real estate brokers, they prefer going through the traditional sales cycle. That involves knowing the pricing upfront before evaluating the product. Sisu gated their pricing- They would capture a few details in a form, offer custom pricing based on the prospect’s details, and then send a link to a 7-day free trial. They would then capture this information in Salesforce and give their prospects a product demo. After the demo, a trial would be set up in Chargebee. 
                                            </div>
                                            <div class="cs-article__desc">
                                                The Salesforce and Chargebee integration was the ultimate deal for Frank. The product line items including the discounts and coupons come from Chargebee, because the sales team at Sisu don’t go into Chargebee to view these details. <span class="fs-italic">“Our sales team uses Salesforce as their system of truth, and their commission reporting comes out of Salesforce. So, the accuracy between the two has to be spot on, because that's where they're getting all their information from,”</span> he adds.
                                            </div>
                                            <div class="cs-article__desc">
                                                In their pursuit to build Sisu with minimal developer-dependency, they decided to have a robust integration ecosystem. Sisu’s comprehensive SaaS tech stack runs a large part of the business and customer experience.
                                            </div>
                                            <div class="cs-article__desc">
                                                And Salesforce was always going to be a foundational part of their product and tech stack. The ability to accurately map and sync information between Chargebee and Salesforce was a game changer for Sisu.
                                            </div>
                                            <div class="cs-article__desc">
                                                Apart from Chargebee’s integration with Salesforce, Sisu also found the overall integration ecosystem very useful —  including Intercom, Zapier, Refersion, Slack. 
                                            </div>
                                        </div>
                                        
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Payoff
                                            </div>
                                            <div class="cs-article__desc">
                                                The biggest impacts Sisu sees with the integration are:
                                            </div>

                                            <div class="cs-article__desc">
                                                <ul class="cs-article__list"> 
                                                    <li class="cs-article__item">
                                                        <strong>Process improvement:</strong> Once the commission system was set in place, the team moved from having to manually enter and manage commissions to the sales team from Google Sheets to Geckboard’s dashboard. Move from Google Sheets to manually enter and manage commissions to the sales teams
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Time-saved:</strong> Automating the commission calculation came down to less than an hour as opposed to half a day.
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Ease of use:</strong> Nobody needs to be a developer. The CFO manages the accounts receivables right from Chargebee, while Frank uses Chargebee to set up payment collections and pricing variations.
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Transparent Sales Reporting:</strong> Sisu uses Geckoboard for data visualization of their sales reports . The data for that comes from Salesforce, which in turn receives the revenue and payment information from Chargebee. Here are some of the ways they use Chargebee + Salesforce + Geckoboard

                                                        <ul class="cs-article__list" style="margin-left: 24px; margin-top: 24px;"> 
                                                            <li class="cs-article__item">
                                                                <strong>Sales Commissions Goals and Tracking:</strong> For the sales team at Sisu, the commission data is calculated using the payment data from Chargebee. This data also includes the discount issued. This data then flows into Salesforce. The sales team gets complete visibility into their commission goals and achievements right from Salesforce. 
                                                            </li>
                                                            <li class="cs-article__item">
                                                                <strong>Sales Plan Forecast and Performance:</strong> The Sales Manager at Sisu gets a 360-degree view into the performance against their sales plan with key metrics and KPIs flowing from Salesforce into Geckoboard. Chargebee sends MRR data into Salesforce such as Average MRR contract size, total MRR per month, how much MRR is still on trial, etc., and this data is subsequently fed into Geckoboard. 
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="cs-article__item">
                                                        <strong>Comprehensive integrations into their tech stack:</strong>

                                                        <ul class="cs-article__list"  style="margin-left: 24px; margin-top: 24px;"> 
                                                            <li class="cs-article__item">
                                                                <strong>Faster Onboarding with Slack Notifications:</strong> Sisu offers a concierge service to enable easy onboarding of customers. So, everytime a prospect signs up for a trial subscription on their website, the team gets notified on Slack and they immediately set up the provisioning for the prospect. 
                                                            </li>
                                                            <li class="cs-article__item">
                                                                <strong>Contextual Conversation with Intercom:</strong> Chargebee’s integration with Intercom gives their sales, support, and success teams the right amount of context while talking to prospects and customers — so they can segment their audience and send specific messages, or escalate issues based on subscription, plan, and payment details.
                                                            </li>
                                                            <li class="cs-article__item">
                                                                <strong>Easy affiliate management with Refersion:</strong> After noticing that a lot of leads were coming in through referrals, the team decided to start an affiliate program. The best part? They were able to set up an affiliate program using Chargebee and Refersion within a day. The integration enables affiliates to distribute and track coupon codes, unique referral links to bring in leads to Sisu.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>RevenueStory vs Geckoboard:</strong> Sisu uses RevenueStory to track everything related to their accounts receivables — payments that need to be reconciled, churn and retention cohorts, revenue metrics, etc. Geckoboard on the other hand is used for data visualization across different teams to track overall performance.
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
                                                <img src="/static/website/version/images/case-study/sisu/logo.png" width="160" alt="" />  
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                If your commission data is not accurate, you're going to get a lot of angry sales people. So when it comes to getting people getting paid, it needs to be very accurate. And that is the testimony to the value of the Salesforce and Chargebee integration — paying my sales team based on Chargebee-driven subscriptions. It's extremely accurate, otherwise I would hear about it.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                —  Frank Felice, Chief Revenue Officer, Sisu
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
         .cs-hero__banner{ min-height: 320px; }    
    }

  </style>
  <!-- ===========================================================================
  End: Style Section
  ============================================================================ -->
