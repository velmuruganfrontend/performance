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
        :cb-title="'How Doctify streamlined their RevOps to increase efficiency, with Chargebee'" 
        :cb-desc="'Doctify seamlessly migrated into Chargebee with an efficient onboarding system in place'" 
        :cb-url="'/customers/doctify/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/doctify/doctify.jpg);background-position:top center;">
                                        <div class="cs-hero__banner--shadow" style="opacity: .8"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/doctify/logo.png" style="filter: brightness(0) invert(1); max-width: 150px;" width="70" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                Platform for millions of patients who want to search, compare and book health services over the internet.
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
                                                How Doctify streamlined their Revenue Operations to increase efficiency, with Chargebee
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                Doctify seamlessly migrated into Chargebee with their efficient onboarding
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
                                                    <td class="cs-table__desc">Stripe, GoCardless, Chargebee, Xero</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">Salesforce</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
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
                                                <img src="/static/website/version/images/case-study/doctify/logo.png" width="150" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                We all have budgets and constraints on expenditure. But if there is a technology that is useful, can immediately demonstrate results and impact, can help achieve company objectives and save your employees time, as well as enhancing your customer experience, it’s worth the investment! What surprised me very quickly about Chargebee was the incredible onboarding and customer support service Chargebee provided. It’s probably been the best onboarding experience I have experienced so far.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Jay Khiroya, Director - Revenue Operations, Doctify
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
                                                        Manual processes around Sales + complex discounts
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        With a heavily sales-led process, Doctify used Docusign and once the contract is signed, their finance team would call the customer to get the payment details followed by manually creating a Stripe profile. This with an occasional discount would make the whole process an onerous task.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee:</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Streamlined Revenue Operations
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Significant improvement in process efficiencies for the billing team with streamlined and automated processes
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
                                                With over 2,000 customers and a continuous trend of new signs ups, Doctify ended up dealing with too many processes and ad-hoc tasks involved with too few people to tend to them. Doctify had experienced professionals spending over 30% - 40% of their time on the entire billing process. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Being a sales-driven product, Doctify wasn’t in a position to have ‘self-sign up’ online. Instead, the team at Doctify relied heavily on offering one-on-one demos and services to their customers, via phone, screen-share, emails, or in person.
                                            </div>
                                            <div class="cs-article__desc">
                                                The challenges were… 

                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Finding a solution that was ‘flexible’ with its out of the box functionality so that Doctify could leverage the software into the current signing up process. 
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Ability to integrate with their financial software stack at that point (Stripe and Xero) as well as Salesforce
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Finding details of the subscription plans of each customer and their next billing information
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Building a seamless, smart and PCI-compliant checkout process.
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Providing metrics and data on their CMRR / MRR.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                Jay Khiroya, who was the Director of Revenue Operations was responsible for (i) implementing and enhancing new and existing processes to increase efficiency and productivity, (ii) creating an exceptional user experience and (iii) enabling Doctify to scale at the push of a button. 
                                            </div>
                                            <div class="cs-article__desc">
                                                As part of those responsibilities, he was also looking at ways to automate their process of getting signed contracts and then their finance teams calling up customers to set up subscription profiles on Stripe.
                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>They were also dealing with a constantly changing environment where Doctify:</strong>

                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Dealt with a very manual-heavy process to onboard customers, manage subscriptions and renew customers from a payment and billing perspective. 
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Needed to issue various types of discounts and extended periods to customers
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Created special offers and promotions during events and webinars
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Needed a way to accept, manage and stay on top of payment methods by Finance teams
                                                    </li>
                                                </ul>
                                            </div><br>
                                            <div class="cs-article__desc">
                                                On looking out and speaking with peers in their network, Chargebee turned out to be best suited to address all their needs in one place for Doctify.
                                            </div>
                                            <div class="cs-article__desc">
                                                For Doctify, the implementation of Chargebee impacted more than one team. When choosing Chargebee and working on the implementation of this magnitude, here’s what the team thought of: 
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        The available integrations that can align with their existing tech stack  
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Being able to increase the power of the existing tech stack, leverage and use additional features because of the integration and being able to improve the process and the exchange of information 
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Being able to measure the implications of integrating with Chargebee and its risk and impact on the existing stack
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Result
                                            </div>
                                            <div class="cs-article__desc">
                                                Two of the key outcomes from Doctify’s integration with Chargebee is the seamless migration and onboarding support from the Chargebee team. 
                                            </div>
                                            <div class="cs-article__desc">
                                                With Chargebee, Doctify was able to handle multiple currencies with GoCardless, ‘self online sign up’ as they scaled from a sales-led process, and were able to roll out promotions effortlessly as well as allow their customers to manage their subscriptions with Chargebee’s self-service portal.
                                            </div>
                                            <div class="cs-article__desc">
                                                More importantly, the RevOps team at Doctify was able to implement and enhance processes to increase the overall efficiency and productivity of their billing team.
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
                                                <img src="/static/website/version/images/case-study/doctify/logo.png" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                What has worked well with Chargebee is they were on the same page, and carry out their implementation in phases too.  This is to ensure there are no surprises, the software fits well in the organization before it migrates all the data.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Jay Khiroya, Director - Revenue Operations, Doctify
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
