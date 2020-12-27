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
        :cb-title="'How Drawboard scaled to new markets using Chargebee'" 
        :cb-desc="'Drawboard’s subscription product, Bullclip, leverages Chargebee from acquisition to collect recurring revenue and achieving global scale. '" 
        :cb-url="'/customers/drawboard/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/drawboard/drawboard.jpg);background-position:top center;">
                                        <div class="cs-hero__banner--shadow" style="opacity: .8"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/drawboard/logo.svg" style="filter: brightness(0) invert(1); max-width: 150px;" width="70" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                Easier and collaborative PDF markup software for design, construction, and document-heavy industries.
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
                                                How Australia-based Drawboard expanded globally to new markets using Chargebee
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                Drawboard’s subscription product, Bullclip, leverages Chargebee from acquisition to collecting recurring revenue and achieving a global scale.
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
                                                    <td class="cs-table__desc">Pin Payments, Chargebee, Xero</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">Intercom, HubSpot, Vero, Facebook, Google Ads, Adroll, LinkedIn</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Slack, Zapier, Google Apps</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">Segment, Amplitude, Google Analytics, Intercom</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Success</td>
                                                    <td class="cs-table__desc">Zendesk, Uservoice</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/drawboard/logo.svg" width="150" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Chargebee has allowed us to grow from a local Australian firm with a couple of smaller accounts to being in multiple geographic markets. It has allowed us to scale from zero licenses in Bullclip to a hundred enterprises using our products. It's enabled us to actually be a global business, without having to think about billing too hard.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Nathan Field, Head of Marketing, Drawboard
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
                                                        Classic Build vs Buy Dilemma:
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Significant engineering time would have been spent on building a billing architecture.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Engineering expense on building and maintenance:
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        An engineering salary of over 100K to simply maintain a billing component — unjustified ROI. 
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee:</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Focus on product = global scale:
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        With Chargebee, Drawboard scaled from being a local Australian firm to global markets with many enterprise accounts.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Cost-effective billing architecture:
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Spending about AUD 5000 a year on Chargebee as opposed to a 100K engineering salary proved to be a much more effective investment.
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
                                                Drawboard’s suite comprises of two products. Drawboard PDF is based around single-user PDF markup and is a top productivity app on the Microsoft Store. Bullclip, on the other hand, is a central platform for design review, where some of the largest architecture and engineering firms in the world markup, discuss and track changes in real-time.
                                            </div>
                                            <div class="cs-article__desc">
                                                While Drawboard PDF uses Microsoft’s subscription service, it was a classic case of build vs buy for Bullclip. Building the billing architecture was likely to have an impact on Bullclip’s launch — they concluded at the time that a significant portion of their time would be spent on building the billing platform rather than actually building the product. There were clear legacy and tech debt decisions that came into play here. 
                                            </div>
                                            <div class="cs-article__desc">
                                                In Nathan’s words, “For example, we're currently getting to the point where we want to build out our custom internal licensing dashboard internally for our SaaS team as it grows. But until now, we have been able to rely on a third-party platform for this. <i>Simply, our IP is not billing, our IP is not a sales dashboard. Our IP is our value prop in Drawboard products, and so we focus our 16 engineers on that.</i> Not the things that somebody else like Chargebee does better.”
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                After evaluating Chargebee against Recurly, Chargify, and Zoho to handle their billing component for Drawboard, and even considering building it within Salesforce, the team decided to go for Chargebee as the choice of solution for four main reasons: 

                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        Chargebee showed promise in terms of managing licensing because of its well-thought-out <b>API structure</b>. 
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        <b>Every use case</b> that they could come up for the present and future was handled by Chargebee — including billing models, pricing models, and offline payment methods.
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        The <b>freemium plan</b> offered by Chargebee helped them focus on scaling their business across different channels, rather than worry about payments at their early stage. 
                                                    </li>
                                                    <li class="cs-article__item" style='margin-bottom: 12px;'>
                                                        The Chargebee <b>dashboard</b> was an excellent interface for the sales team to manage licenses from.
                                                    </li>
                                                </ul>
                                            </div><br>
                                            <div class="cs-article__desc">
                                                Nathan says it better — “We felt confident in scaling with Chargebee for the foreseeable future. It’s been four years with Chargebee. We're now expanding how we use Chargebee, <i>but I don't see us moving off Chargebee for the next several years just because it's just so well considered in the way that it's been designed for a use case like ours.</i>”
                                            </div>
                                        </div>
                                        
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Payoff
                                            </div>
                                            <div class="cs-article__desc">
                                                <ul class="cs-article__list">
                                                    <li class="cs-article__item">
                                                        <strong>PCI & GDPR Compliance:</strong>  With Chargebee’s PCI compliance, Drawboard opted to use the self-service portal for users to manage their own subscriptions and payment information. Similarly, scaling to Europe meant Drawboard needed to be GDPR-compliant with how they handle their customer data. Having a trusted third-party vendor like Chargebee ease PCI & GDPR compliance was a game-changer according to Drawboard. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Managing changing billing and pricing structures:</strong> With Chargebee’s flat pricing as well as per-user pricing capability, the ability to prorate charges based on when their customer signs up as well as accounting for the prorated amount, Drawboard’s billing complexities was significantly abstracted. It also allowed Drawboard to scale confidently, knowing they can iterate how they bill or price their customers. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Global-scale with global payments:</strong> As a business catering to different geographies, a portion of Drawboard’s customers prefer paying via wire transfer along with card payments. With Chargebee’s multi-currency support, the team was able to have ‘local financial representation’, that allowed for transfers across borders far easier. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Revenue Recovery with Smart Dunning:</strong> Chargebee’s dunning allows easy follow-ups for overdue payments for Drawboard with smart retries in conjunction with relevant follow-up emails. What made this capability better was extending to offline payments as well. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Flexibility and Ease of use:</strong> Chargebee abstracts complexity for Nathan’s team by easing the configurations on the interface and usage of Chargebee across a plethora of use-cases. The clear documentation also helped a great deal in understanding Chargebee as a product, making it easier for Nathan to be a knowledge expert. He justifies this by saying, “I can be the knowledge expert for Chargebee without having an extensive software engineering background. I was totally able to own the process of rolling it out in our company.”
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
                                                <img src="/static/website/version/images/case-study/drawboard/logo.svg" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                It just comes down to numbers. The big thing for a billing platform is not just about building, but also maintaining. If our cloud engineers are going to be building, maintaining, and expanding what our billing architecture looks like internally, then they're not focused on scaling our core value prop. And if they’re not building the product then we need to hire someone else to do that. Or we could pay Chargebee $5,000 a year. It's just a numbers game if that's the way it works out.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Nathan Field, Head of Marketing, Drawboard
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
