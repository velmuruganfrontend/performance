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
        :cb-title="'How Harvestr witnessed a growth of 15% on their MRR, with Chargebee'" 
        :cb-desc="'Harvestr grew with Chargebee’s freemium offering for early and growth stage startups to scale globally with automated EU VAT and billing operations'" 
        :cb-url="'/customers/harvestr/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/harvestr/harvestr.jpg);background-position:center;">
                                        <div class="cs-hero__banner--shadow" style="opacity: .8"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/harvestr/logo.png" style="filter: brightness(0) invert(1); max-width: 150px;" width="70" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                Product management platform that helps digital companies leverage customer feedback and data to build amazing products.
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
                                                How Harvestr witnessed a growth of 15% on their MRR, with Chargebee
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                Harvestr grew with Chargebee’s freemium offering for early and growth stage startups to scale globally with automated EU VAT and billing operations.
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
                                                    <td class="cs-table__desc">Chargebee, Stripe</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">HubSpot, Intercom</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Collaboration</td>
                                                    <td class="cs-table__desc">Chargebee, Slack, Trello</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">ProfitWell, Google Analytics, Heap</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Success</td>
                                                    <td class="cs-table__desc">Intercom, Harvestr</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/harvestr/logo.png" width="150" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                One of the important criteria for us was to have a solution that would scale with us in terms of pricing and the fact that Chargebee offered a generous free tier for startups was an important factor for us as well.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Valentin Huang, Co-Founder, Harvestr
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
                                                    <span class="cs-sidebar__title--mark">Pre-Launch Requirements</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Subscription Infrastructure part of launch
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Harvestr designed their official launch of the paying product with Chargebee as part of the roadmap to accelerate the launch process by allowing easy subscription management. 
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        EU VAT Woes
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        VAT Automation was an absolute essential for Harvestr. Evaluated Stripe with Octobat for VAT Automation, but the combination failed to serve as a full-fledged subscription management suite. 
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">Post Launch</span>, increase in efficiency and gross MRR
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Automated subscription operations
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Everything from subscription creation to reactivation of expired subscriptions , to trial-to-paid conversions using Intercom, automating invoices and payment collection, is managed by Chargebee
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        EU VAT Automation and Scale across Europe
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Harvestr seamlessly grew their gross MRR by 15% and scaled across Europe with EU VAT management, multiple payment options and multiple currency support.
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
                                                Harvestr was designed to be a subscription business right at inception, with monthly and annual recurring payments as well as a free trial for prospects to test drive the product. And like most businesses starting out, Harvestr evaluated Stripe as a natural choice to handle their recurring payments. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Soon, they realized that Stripe alone was not equipped to handle the subscription and tax complexities at scale at that time. Stripe as a standalone solution natively did not handle actions such as being able to

                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>Let customers enter their VAT number based on the location</li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>Bill a customer inclusive or exclusive of tax based on the rules</li>
                                                </ul>
                                            </div>
                                            <div class="cs-article__desc">
                                                And both of these requirements were critical for Harvestr to scale their business seamlessly.  They had to use Stripe in conjunction with solutions that they’d either have to build by themselves, or along with OctoBat, so they did not have to go through the stress of handling EU VAT. 
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                After being awarded ‘Product of the Day’ on Product Hunt, the team at Harvestr realized they need a solid payment and subscription management infrastructure to seamlessly manage their customers. 
                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>The lookout for a solution like Chargebee started when Harvestr wanted to </strong>

                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>Automate subscription management and recurring billing</li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>Send contextual lifecycle emails based on subscription and trial states</li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>Email tax-compliant invoices with accurate VAT rates</li>
                                                </ul>
                                            </div><br>
                                            <div class="cs-article__desc">
                                                After evaluating solutions like Stripe with Octobat, Zuora, and Recurly, Harvestr zeroed in on Chargebee, after observing that Zuora isn’t designed for startups whereas Chargebee’s support was consultative and responsive compared to other solutions. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Once Harvestr finalized the business model and all the basics such as plans and lifecycle emails were set up in Chargebee, all they had to do was import their current users into Chargebee and then focus on launching the product successfully. 
                                            </div>
                                        </div>
                                        
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Payoff
                                            </div>
                                            <p class="cs-article__desc">
                                                <ul class="cs-article__list">
                                                    <li class="cs-article__item">
                                                        <strong>Automated Subscription Management:</strong>  For Harvestr, the complete automation of their subscription management process all the way from when their user selects a plan, to sign up, invoice generation, and subsequent recurring payments every month has been a boon. That they have to spend minimal time to worry about any aspect of their subscription management has helped them focus on what’s central to growing their business. Being able to extend trials and reactivating subscriptions whose trials expired helps them engage and nudge trial users in activation.
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Lifecycle emails for Trial to Activation via Intercom:</strong> Harvestr harvests the power of Intercom with Chargebee to nudge their trial users into activating their trial account by configuring a series of rule-based onboarding emails.
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Multiple Payment Methods and Multi-currency options:</strong> For a global SaaS like Harvestr that’s based out of Europe, accepting payments in Euros and Dollars is critical. As they move upmarket, accepting offline and direct debit payments along with card payments becomes important. With Chargebee’s ability to accept multiple payment methods, Harvestr is able to scale across different segments and geographies seamlessly. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Automated tax compliance with EU VAT:</strong> Being based out of France and selling within and outside Europe, EU-VAT compliance is a must and Harvestr was certain that this component should be automated. Chargebee also eased data extraction from Chargebee in HGST format for Declaration of Services in Europe that would justify the VAT charged per country and per customer. 
                                                    </li>
                                                </ul>
                                            </p>
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
                                                <img src="/static/website/version/images/case-study/harvestr/logo.png" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                What we really appreciate about Chargebee is that, as soon as we have another need, such as accepting direct debit payments and the ability to track it, the feature already exists in Chargebee and can be implemented easily, without any extra code. That makes us confident that we can really scale with Chargebee.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Valentin Huang, Co-Founder, Harvestr
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
