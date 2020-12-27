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
        :cb-title="'Userlane spent 80% less time in closing their month-end financials, with Chargebee'"  
        :cb-desc="'Userlane uses Chargebee to streamline its FinOps and improve billing process efficiency'" 
        :cb-url="'/customers/userlane/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/userlane/userlane-banner.jpg);background-position:top;">
                                        <div class="cs-hero__banner--shadow" style="opacity: .8"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/userlane/userlane.png" style="filter: brightness(0) invert(1); max-width: 200px;" width="70" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                Navigation System for Software that Allows Anybody to Use Any Application Instantly
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
                                                How Userlane closed their month-end financials in 80% less time, with Chargebee
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                Userlane uses Chargebee to streamline its FinOps and improve billing process efficiency
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
                                                    <td class="cs-table__desc">Stripe, Chargebee, GoCardless</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">Salesforce</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Collaboration</td>
                                                    <td class="cs-table__desc">Slack</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">Chargebee SaaS Metrics</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/userlane/userlane.png" width="200" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Now we have a very efficient month-end process. Since everything in my billing is automated, I am able to do a month-end closing in one day or so. And without Chargebee, we would have spent at least five days for checking and processing money. Having an efficient billing process with Chargebee is definitely useful.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Katharina Baudrex, Head of Finance, Userlane
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
                                                    <div class="cs-sidebar__heading">
                                                       Inefficient Billing Process
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        With customers signing up on different dates, Userlane could not align the subscription start date to the preferred first date of every month, leading to a lot of manual effort. 
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Inefficiency in closing monthly financials accurately
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Userlane could not get a holistic view of the customers in terms of subscriptions, plans, and billing dates, leading to the team spending 5-6 days closing their monthly financials.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Streamlined Billing Process
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        With flexible billing schedules and the ability to add unbilled charges, the finance team at Userlane was able to spend time on more strategic tasks.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Accurate Cashflow Forecast
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        With 360-degree visibility into customers and subscriptions, Userlane is able to forecast their cashflow by tracking pending and paid invoices, as well as upcoming invoices, on Chargebee.
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
                                                As a hyper-growth SaaS business with a rapidly expanding user base that preferred to pay online as well as offline, Userlane’s billing process efficiency started taking a hit
                                            </div>
                                            <div class="cs-article__desc">
                                                While there are accounting tools that connect with payment gateways and automate recurring billing, the finance team at Userlane realized that they’re not equipped to handle the logic of recurring subscriptions or calculating the exact MRR numbers.
                                            </div>
                                            <div class="cs-article__desc">
                                                The bigger problem lay in achieving accuracy in revenue reporting and getting a holistic view of the customers with respect to subscriptions, plans, and billing dates.
                                            </div>
                                            <div class="cs-article__desc">
                                                This meant the finance team at Userlane would spend nearly 5-6 days in closing their monthly financials, after collecting information from multiple sources and then hashing it out in spreadsheets.
                                            </div>
                                            <div class="cs-article__desc">
                                                Without a dedicated billing system, Userlane couldn’t bill their customers flexibly either — with customers who signed up on a specific date, they wanted to align their subscription start date to the first of the month, and bill them on the date that the customer would set up payment details.
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                For Userlane, billing operations are not necessarily strategic. It’s more tactical that needs to be addressed at regular time intervals — every day or every month, depending on their customer. Thus efficiency in the billing process became a critical metric when choosing a solution.
                                            </div>
                                            <div class="cs-article__desc">
                                                Userlane found Chargebee most suited to handle their unique billing needs, to smoothly onboard customers, and to offer different payment methods — both online and offline. Zeroing in on Chargebee also helped them manage subscriptions with different start dates.
                                            </div>
                                        </div>
                                        
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Payoff
                                            </div>
                                            <div class="cs-article__desc">
                                                With Chargebee the finance team at Userlane is able to:
                                            </div>

                                            <div class="cs-article__desc">
                                                <ul class="cs-article__list"> 
                                                    <li class="cs-article__item">
                                                        <strong>Forecast cashflow:</strong> Chargebee became the Finance team’s primary source of truth to forecast their cashflow. Once they won a customer, Chargebee took charge of everything else — right from payments or issuing refunds, measuring how many invoices were sent last month, how many were paid, how many are due to be sent next month, how many customers paid monthly vis-a-vis annually, how many renewals are due and so on. All this wouldn’t have been possible had they used an accounting tool to automate their billing.
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Automate billing schedules and flexible payments:</strong> For Userlane, accommodating different subscription start dates became a necessity as they scaled. From being able to set a subscription start date to two months after they’ve actually won a customer, to scheduling renewal dates, they automate different billing schedules for different customers. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Defer invoicing for unbilled charges:</strong> Rather than invoice the customer immediately when the subscription is created, they now add the amount to unbilled charges. This was done to ensure that invoices are paid for on time, and more importantly to create a great customer experience.
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Save 80% of the time spent on monthly financial reconciliation:</strong> The time saved from automating billing is spent on more critical tasks, like calculating revenue projections. What would have otherwise taken them 4-5 days per month in manual billing and reconciling the payments with their banks, now takes just one day in a month, saving them 80% time in reconciling their monthly financials.
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
                                                <img src="/static/website/version/images/case-study/userlane/userlane.png" width="220" alt="" />  
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                A lot of accounting systems do not understand the logic of subscriptions. And so, they are not showing a big part of MRR. That has been the biggest challenge for me. They probably connect to payment gateways and collect payments. But I think the whole reporting and customer view in terms of subscriptions, different plans, and billing dates, and subscription start dates and cancellations — that has been challenging. And that’s why you need a solution like Chargebee that understands this better.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Katharina Baudrex, Head of Finance, Userlane
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
