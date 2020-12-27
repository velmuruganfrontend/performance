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
        :cb-title="'How Animalz streamlined their Account Receivables at a cost less than 1% of their annual recurring revenue, using Chargebee'" 
        :cb-desc="'Animalz uses Chargebee to automate their FinOps and course-corrected its accrual accounting using Chargebee’s Revenue Recognition Reporting'" 
        :cb-url="'/customers/animalz/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/animalz/animalz.jpg);background-position:top center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/animalz/animalz.png" style="filter: brightness(0) invert(1); max-width: 150px;" width="70" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                New York-based Content Marketing Agency for SaaS businesses. 
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
                                                How Animalz streamlined their Account Receivables at a cost of less than 1% of their annual recurring revenue, using Chargebee
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                Chargebee helped bring accuracy to Animalz’ accrual accounting process with its compliant Revenue Recognition Reporting
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
                                                    <td class="cs-table__desc">Stripe (credit cards & ACH), Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">Airtable, HelloSign, Intercom, ConvertKit</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Slack, Front, Quip</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">Profitwell</td>
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
                                                <img src="/static/website/version/images/case-study/animalz/animalz.png" width="120" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Chargebee has been really valuable in this fundamental thing, which is getting the data layer really good and strong and trustworthy. Because everything else is built on top of that
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Walter Chen, Founder, Animalz
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
                                                    <span class="cs-sidebar__title--mark">Founder’s Finance Woes</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Bill.com + Stripe = Big source of friction between teams
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        With Bill.com for invoicing and Stripe for credit card and ACH payments, manual payment reconciliation, dealing with multiple processes and systems, resulting in important information falling through the cracks, was a massive headache.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Broken Accrual Accounting
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Back-office finance team manually and erroneously reported the revenue based on incorrect accrual accounting, leading to inaccurate revenue reporting.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Accurate Revenue Recognition
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        With Chargebee becoming the single source of all accounts receivables data, their accrual accounting was streamlined and accurate.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Automated Offline Payments Reconciliation
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Nearly 95% of Animalz’ high ARPU customers prefer paying offline. With Chargebee’s ACH Credit Transfer via Stripe, offline payments were reconciled automatically.
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
                                                Having a seamless Finance Operations right from the early stage is not something most Founders focus on. It was no different for the Founder of <a href="https://www.animalz.co/" target="_blank">Animalz</a> — Walter Chen. That was until he saw his financial statements to understand their profitability, and noticed that his revenue data was all messed up. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Having outsourced their finances to a back-office team, Walter realized that the primary reason that the numbers were messed up was that the accrual accounting was done incorrectly.

                                                <div style="margin-top: 24px;">
                                                    <div class="cs-article__desc">As a result, the recognized revenue was also recorded inaccurately.</div>
                                                </div>
                                            </div>
                                            <div class="cs-article__desc">
                                                The basic understanding of how recurring revenue operates was now under question. "A long time ago, I would just look at the bank account and every month and if the bank account was going up, then I could safely assume that we are profitable. But when you introduce stuff like invoicing and prepaid plans, then, the cash-in-cash-out gets a lot lumpier."
                                            </div>
                                            <div class="cs-article__desc">
                                                Accrual accounting solves for this spike-and-trough in showing revenue numbers by helping you match up the revenue and expenses better. They hired an extensive back-office team that did reconciliation and revenue recognition on a spreadsheet — this was erroneous and expensive.  
                                            </div>
                                            <div class="cs-article__desc">
                                                This issue in this fundamental aspect of the business was throwing everything off the rails for Animalz. Walter soon realized that fixing their accrual accounting revenue recognition was the first order of business, and without doing that, every other business decision for all the teams would be for nought.
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                Before Chargebee, Animalz used Stripe for credit cards and direct debit payments via ACH and Bill.com for invoicing, which he recalls was “the single worst piece of software I've ever used”. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Notwithstanding the pain of manual reconciliation process, the Success team would also end up spending hours in setting up payment during onboarding and following up to get paid on time. Managing multiple processes and systems let important details fall through the cracks.
                                            </div>
                                            <div class="cs-article__desc">
                                                They discovered Chargebee through Flightpath Finance that specializes in financial modeling software for SaaS.
                                            </div>
                                            <div class="cs-article__desc">
                                                From a systems point of view, Chargebee was a huge contrast to the existing practice with spreadsheets and manual reconciliation. With all the billing details consolidated in one place, Animalz had a very reliable view and audit trail of their accounts receivables.
                                            </div>
                                        </div>
                                        
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Payoff
                                            </div>
                                            <div class="cs-article__desc">
                                                <ul class="cs-article__list">
                                                    <li class="cs-article__item">
                                                        <strong>Accurate Revenue Recognition:</strong>  According to Walter, “Nothing is going to be good unless we get the accrual accounting revenue recognition done correctly. We started using Chargebee, we back-imported invoices, so that Chargebee could singularly have all the data. That's how we ended up deciding to fix this problem with Chargebee”.
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Accepting payments from high-value ACV customers reliably:</strong> Dealing with high-ACV customers, Animalz is able to allow offline payments and reconcile them easily with Chargebee’s support for Stripe's ACH Credit Transfer.<br><br>

                                                        ACH Credit Transfer via Stripe creates virtual accounts for each customer through Stripe, allowing for easy tracking of payment status for offline payments. Chargebee updates payment due invoices (offline) accurately and eliminates any manual effort required to search and update them. For Animalz, this method accounts for 95% of their payments, making it easier to track and reconcile offline payments. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Consolidated view of AR and Ageing Report:</strong> With Chargebee’s APIs and a simple script, the team at Animalz is able to generate a report on pending and paid invoices, with details on due dates corresponding to specific invoices. “The reason why this is super useful is because it's a place to have some kind of discussion to understand what's happening with the invoices to actually act on them”, adds Walter. <br><br>

                                                        At a cost of investment that is less than 1% of the revenue, Chargebee has proved to offer far more value and accuracy than an outsourced finance team for Animalz. 
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
                                                <img src="/static/website/version/images/case-study/animalz/animalz.png" width="120" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Chargebee saves us a lot of time.  Of course, it facilitates, collaboration and autonomy within the team. A lot of this is about getting higher quality data. We had a back-office team and we paid them around $3,500 a month. And part of their job was to do accounts receivable. And once we had Chargebee, we really didn't need them to mediate the accounts receivable process. We could just pull reports directly and follow up directly and I get it a lot better because it's not done manually.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Walter Chen, Founder, Animalz
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
