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
        :cb-title="'How Riddle improved their Subscription Efficiency & Renewals by 63%, using Chargebee'" 
        :cb-desc="'Germany-based marketing and lead-gen tool to create quizzes automated subscription billing along with EU VAT and GDPR compliance using Chargebee.'" 
        :cb-url="'/customers/riddle/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/riddle/banner.png);background-position:center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/riddle/logo-white.png" width="120" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                A marketing and lead-gen platform for brands or publisher to create quizzes, personality tests, polls and other interactive formats to engage their audience and acquire more customers.
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
                                                How Riddle improved their <span class="cs-article__title--mark">Subscription Efficiency & Renewals</span> by 63%, using Chargebee 
                                            </h1>
                                            <div class="cs-article__desc">
                                                <a class="cs-link--inner" href="https://www.riddle.com/" target="_blank">Riddle</a> also navigated the EU’s VAT and GDPR complexities to scale seamlessly with Chargebee
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
                                                    <td class="cs-table__desc">Braintree, Paypal Express Checkout, Stripe, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Slack</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">Chargebee’s SaaS Metrics, Google Analytics</td>
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
                                                <img src="/static/website/version/images/case-study/riddle/logo.png" width="120" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                As a lean, fast-growing quiz maker, Riddle supports some of the largest publishers and sports organizations on the planet. We appreciate how Chargebee lets us spend our time and energy on actually growing the business - knowing that the back-end finance and revenue collection is well in hand.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Mike Hawkins, Head of Marketing, Riddle
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
                                                    <span class="cs-sidebar__title--mark">Issues at scale...</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Expensive customer acquisition with lower RoI
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Riddle was being swamped with users on the free plan being responsible for a large portion of their expenses but never had any intention to ever upgrade.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Flexibility and efficiency at scale
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Being a SaaS company from the EU, they had to navigate the complexities around EU-VAT and GDPR compliance.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee...</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Improved customer acquisition
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        With Chargebee’s discount management as well as the ability to allow customers to checkout without entering their card details, they saw a 34% increase in new sales.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Automatic billing for increased efficiency
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Chargebee’s deeper billing automation, EU-VAT and GDPR-compliance enabled Riddle to focus more on growing their business, with a 63% decrease in manual renewals and cancellations.
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
                                                Founded in 2014, Riddle had opted to go the subscriptions route right from the start. This was based on the realization that brands and businesses that relied on content, such as publishers and media companies, needed to keep coming up with new ways to create content in the form of quizzes, surveys, polls and tests. Their first issue was the ability to accept payments from different sources.
                                            </div>
                                            <div class="cs-article__desc">
                                                This pain was aggravated when they realized that their users on the free plan were using Riddle far more than their paying customers - all without the intention to upgrade, adding a burden on their expenses.
                                            </div>
                                            <div class="cs-article__desc">
                                                Compliance to EU rules exacerbated their issues as they tried to scale. Their team had also deep experience with the friction of trying to collect VAT appropriately across 27 countries, in addition to the rest of the world. This experience made them realize that as an EU-based SaaS business, it was critical to accurately and automatically collect VAT for each country. The recent requirement to GDPR compliance added an extra layer of complexity to rapidly growing the business.
                                            </div>
                                            <div class="cs-article__desc">
                                                They wanted to find a better way of acquiring quality customers, and scale operations without being bogged down by operational and compliance hassles.
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                Riddle’s search for a subscription billing platform started right in the early stages of development — “We wanted a tool that supported a wide array of payment methods, was flexible with how plans are set up and most importantly supports EU VAT regulations”, according to Boris Pfeiffer, Founder, Riddle. “Building that out ourselves would have taken precious time away from building our core product”, he adds. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Chargebee soon became their choice of a SaaS billing platform that offered all the features that they were looking for. This including hosted payment pages, which solved their billing needs and took away all the pain of securing payment data from Riddle.
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Pay-off
                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>Improved acquisitions of quality customers: </strong> Riddle has been able to run several discount campaigns that brought in more users to the product — close to 34% of new user subscriptions via discount codes. Additionally, they went ahead and removed the free plan on their pricing. Instead, they started offering a no-obligation, free trial for 2 weeks without entering any credit card details. As a result, they saw a huge increase in the volume and quality of their subscription sales.
                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>Automatic billing for increased efficiency: </strong> Riddle was able to automate processes around subscription management, including recording a customer, accepting payments with Chargebee’s hosted checkout pages, and following up on failed payments with Chargebee’s dunning and email reminders. They saw a spike in their efficiency with a 63% decrease in the manual effort involved in renewals and cancellations.
                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>Better retention with Intercom integration: </strong> With Chargebee sending relevant subscription information to Intercom, it provides a complete picture of that customer’s plan and account history which makes quality customer support easier. Riddle views each opportunity to message a user as a chance to highlight tips, ideas, and features and better assist each customer. 
                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>Automated EU-VAT & GDPR compliance: </strong> More importantly, Riddle was able to navigate the EU’s tax and compliance laws. When they started in 2014, Chargebee was the only provider that automated EU-VAT tax management accurately; this made it easier for them to collect taxes based on their customer’s destination. Riddle is also 100% GDPR-compliant, having transitioned from being incorporated in the US to a German AG with all their servers located in the EU. 
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
                                                <img src="/static/website/version/images/case-study/riddle/logo.png" width="184" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                We really appreciate how proactive Chargebee has been with their own process - unlike some of our other providers, we had complete confidence that your tools would allow us to be compliant in this area before the deadline.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <img src="/static/website/version/images/case-study/riddle/boris_pfeiffer.jpeg" class="hidden-xs" width="72" alt="" />
                                                — Boris Pfeiffer, Co-Founder, Riddle.
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
        .cs-hero__logo img{
            width: 180px;
        }
    }
  </style>
  <!-- ===========================================================================
  End: Style Section
  ============================================================================ -->
