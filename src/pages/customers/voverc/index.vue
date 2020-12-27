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
        :cb-title="'Chargebee eased Mandatory E-Invoicing for Italy-based Voverc'"
        :cb-desc="'EU-VAT, GDPR, and now mandatory B2B electronic invoicing. Italy-based Voverc, share their journey of scaling their SaaS successfully into Europe.'"
        :cb-url="'/customers/voverc/'"
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/voverc/voverc-banner.jpg);background-position:center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/voverc/voverc-logo.png" style="filter: brightness(0) invert(1);" width="120" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                A cloud-based business phone system for small businesses that can be installed and activated in less than 59 seconds
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
                                                How Italy-based Voverc Conquered Compliance with Mandatory B2B e-invoicing, using Chargebee
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                EU-VAT, GDPR, and now mandatory B2B electronic invoicing. Italy-based Voverc, share their journey of scaling their SaaS successfully into Europe.
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
                                                    <td class="cs-table__desc">Paypal Express Checkout, Stripe, GoCardless, QuickBooks, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">HubSpot, Typeform, Intercom</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Chargebee, Slack</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">Chargebee’s SaaS Metrics, RevenueStory</td>
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
                                                <img src="/static/website/version/images/case-study/voverc/voverc-logo.png" width="120" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                We've found a great partnership (with Chargebee), as you solved a really big problem for us. If you hadn’t solved for Italian e-invoicing compliance, we would have had to send the invoices manually. You came and helped, and we are really glad to have you as a business partner for our invoicing platform.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Gabriele Proni, Co-Founder and CTO
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
                                                    <span class="cs-sidebar__title--mark">Troubles with EU-compliance</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Compliance Woes During Hypergrowth
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Adhering to Italy’s mandatory B2B Italian e-Invoicing compliance rule threw a spanner in  Voverc’s growth, failing which, they would have incurred a heavy penalty. This was when they were in the midst of a strategic acquisition by Wildix.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Late Payments and EU-VAT
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        With lack of clarity on whether their late-paying customers are going to pay indeed, they would end up paying VAT on invoices that aren’t paid for, yet
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Growth Milestones despite Compliance Challenges
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        In order for Voverc to fully be complied with Italian e-invoicing, they used Chargebee’s integration with Quickbooks Italia for sending out compliant invoices.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Busting Churn
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Chargebee’s Dunning Management Suite helped following up on late payments, and for those who failed to pay still, Chargebee’s credit notes helped save on paying for unnecessary EU-VAT.
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
                                                Subscription business model was an obvious choice for Voverc. “We are a SaaS company and with our solution, we've moved companies from using our CAPEX solution to an OPEX solution”. The challenges stemmed from operationalizing the subscriptions while being attuned to the changing legal and compliance landscape in Italy specifically, and the EU in general.
                                            
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        <strong>Compliance woes:</strong> As of January 1, 2019, eInvoicing was made mandatory for B2B and B2C VAT-registered Italian businesses. The invoices need to be issued in the FatturaPA format and submitted to the Italian Revenue Agency's e-invoicing platform, Sistema di Intercambio (SDI) — a platform used to transmit e-invoices to the Italian Revenue Agency.<br>
                                                        Voverc was processing far too many monthly invoices to ignore the enormity of the compliance. This pain was exacerbated when Voverc was in the midst of a strategic and critical acquisition by Wildix, developers of browser-based unified communications solutions and VoIP products. Compliance was proving to be far more of a growth inhibitor.
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Late payments as a cultural problem:</strong> Italy has continued to have the highest percentage of businesses that are impacted by overdue invoices. Unlike most countries, business users in Italy do not entirely trust payments via credit card that would ideally facilitate faster payments. In a 2018 <a style="margin: 0;" href="https://atradius.se/reports/payment-practices-barometer-italy-2018.html" class="cs-link">survey</a> by Atradius, nearly 40% of the respondents have expressed businesses being hurt by late payments. That led to Voverc suffering from late payments and churn.
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>EU-VAT for payments that aren’t processed:</strong> With customers potentially cancelling or facing payment issues, or forgetting to pay, churn was becoming a problem, and to add to it, the EU VAT levied in each of these invoices that weren’t paid for, proved to be heavier.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                The Launch Plan that allowed Voverc to use Chargebee for free till they hit their first $50K in aggregate revenue, along with Chargebee’s depth of capability and a strong commitment to partnership and collaboration was one of the key deciding factors for Voverc. Chargebee promised growth.
                                            
                                                <ul class="cs-article__list">
                                                    <li class="cs-article__item">
                                                        <strong>Chargebee facilitated compliance with Italian e-invoicing through Quickbooks Italy.</strong> In order for them to fully be complied with Italian e-invoicing, they had to send invoices through Quickbooks to their customers. Vovercapp integrated Chargebee with Quickbooks, with Chargebee being their main source of reference for subscriptions and related details.<br>
                                                        Voverc’s customers appreciate Voverc’s transparency and fair billing practices. Voverc, as a principle, has a very liberal payment policy. If customers are unhappy with the product, they are allowed to cancel within 30 days and will be issued a full refund. <a href="/saas-accounting-and-taxes/quickbooks-accounting/" target="_blank" class="cs-link" style="margin-left: 0">Read about Chargebee + Quickbooks</a>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Chargebee’s Fair Billing and fraud management with GDPR,</strong> enable Voverc to exercise fair billing practices, with a clear breakdown of charges, that encourages their customers to input their card details with far more trust and facilitate better transactions.
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>With Chargebee’s Dunning Management suite,</strong> an issue with a payment failure was automatically handled and churn was significantly addressed. Voverc also used Chargebee’s webhooks to have the customer activate or deactivate a customer depending on their payment status. <a href="/recurring-payments/dunning-management/" target="_blank" class="cs-link" style="margin-top: 12px; margin-left: 0">See how Chargebee manages your dunning process </a>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Chargebee’s compliant Credit Notes</strong> helped saved them from messy tax complexities — Voverc issued them for new customers who have signed up for an annual contract as means of giving credits, so they could benefit from them in the subsequent invoices.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Impact
                                            </div>
                                            <div class="cs-article__desc">
                                                Failing to comply with the latest compliance regulation would have costed Voverc a heavy penalty — one that could have ranged from 90% to 180% of the VAT inaccuracy, along with the invoices being deemed as unissued.
                                            </div>
                                            <div class="cs-article__desc">
                                                Leonardo Coppola, Co-Founder and CEO of Voverc phrases it better when talking about Chargebee’s consultative and committed approach to ensure everything was on track — “We were in the process of an exit and it became important to do the due diligence including for billing and contracts. During that busy period, thanks to you guys, we were able to manage to close the exit without forgetting to be compliant with these new regulations.”
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
                                                <img src="/static/website/version/images/case-study/voverc/voverc-logo.png" width="160" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                The most important thing is that I did not feel like I was left alone. I truly felt that we were on the same page working on the compliance issue and that I had not been treated like just another number.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <img src="/static/website/version/images/case-study/voverc/gabriele-proni.jpeg" class="hidden-xs" width="72" alt="" />
                                                — Gabriele Proni, Co-Founder and CTO
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
