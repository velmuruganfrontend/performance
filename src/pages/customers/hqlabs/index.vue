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
        :cb-title="'HQLabs uses Zapier with Chargebee for Affiliate Management'" 
        :cb-desc="'With Chargebee + Zapier, HQLabs accelerated its affiliate acquisition and reduced effort spent in subscription management and recurring billing by 90%'" 
        :cb-url="'/customers/hqlabs/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/hqlabs/hqlabs-banner.jpg);background-position:center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/hqlabs/logo.png" style="filter: brightness(0) invert(1); max-width: 60px;" width="70" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                An all-in-one business and agency software that automates project management for professional services companies such as creative agencies, consultants and the services business. 
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
                                                How HQLabs built a Zapier Automation for Efficient Affiliate Management, using Chargebee
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                And reduced effort spent in subscription management and recurring billing by 90% 
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
                                                    <td class="cs-table__desc">GoCardless, Stripe, Chargebee, Datev, Sevdesk</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">Pipedrive, Intercom, MailChimp, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Zapier, Slack</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">ChartMogul, Google Analytics</td>
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
                                                <img src="/static/website/version/images/case-study/hqlabs/logo.png" width="60" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Oh, don't even get started building one[in-house billing]. Total waste of time, if that's not your business model. I would always recommend Chargebee because it's really not even close to being worth developing a process yourself... it’s bound to be error-prone as well. We're dealing with a financial process here and nobody can really afford the time to sort out mistakes in that process and so on. So just get one.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Tobias Hagenau, Co-Founder, HQLabs
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
                                                    <span class="cs-sidebar__title--mark">Lack of automation flexibility… </span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Limited acquisition channels
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        HQLabs was limited in terms of avenues for customer acquisition and had to heavily rely on manual outbound channels.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Reactive churn management
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Before the revamped Chargebee + Zapier integration, HQLabs would be notified of cancellation, only after the customer cancels, making it difficult for them to engage with them after. 
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Automated Affiliate management
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        After the revamped Chargebee + Zapier integration, HQLabs got a dozen new affiliates within a week with the new workflow.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Proactive churn management
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        The additional events and triggers in the Chargebee and Zapier integration, they are able to proactively address churn with notifications on scheduled cancellations.
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
                                                HQLabs is a traditional SaaS company with two products made for business applications — one product, HQ, is a complex ERP solution for professional services companies such as creative agencies, consultants and the services business. The other product, awork, is a project management tool that also does time-tracking.
                                            </div>
                                            <div class="cs-article__desc">
                                                For HQ, they had a very manual marketing and sales process which involved traditional, outbound, cold-calling. Booking was done manually by sending out a quote to their customers, following which an invoice would be sent. While that worked for a smaller volume, with higher ARPU, the manual process was becoming error-prone and beginning to bite them at scale. As for awork, being a high-volume, self-service product with a smaller team, automation was a given. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Once they decided to go for an automated sales process, it became pertinent that they also automate the entire billing and subscription management process. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Lack of automation was causing them far more trouble as they started to grow. 
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                Having explored Stripe at the beginning as a standalone solution, it turned out to be expensive and was quickly out of question. That’s when HQ started evaluating Chargebee. In Tobias’s words, “We started testing Chargebee and we found out that it more or less did everything we were looking for at a fair price and it was easy to handle, so the decision was made rather quickly.”
                                            </div>
                                            <div class="cs-article__desc">
                                                In both the cases of HQ and awork, Chargebee was chosen as the subscription billing product, because it catered to both the sales-driven HQ and self-service awork. 
                                            </div>
                                            <div class="cs-article__desc">
                                                While Chargebee was the central tool for customer and subscriptions management, automated recurring invoices, and subscription reporting, Chargebee’s integration with Zapier opened up avenues for HQLabs in terms of efficient workflows that they could build, especially for affiliate management as a source for new leads.
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                Building solid Zapier workflows for affiliate management
                                            </div>
                                             <div class="cs-article__desc">
                                                HQ depends on Zapier to build absolutely any workflow from acquisition to affiliate management and tracking, to automated notifications ahead of churn. 
                                            </div>
                                            <div class="cs-article__desc">
                                                HQLabs created a seamless affiliate management workflow using Chargebee, Typeform, and Zapier, simply by setting up a Typeform on their website. With a zap, an entry is, then created in the affiliate database. Then the team sets up and sends an affiliate coupon code from Chargebee, which also helps calculate payouts to affiliates.
                                            </div>
                                            <div class="cs-article__desc">
                                                <a class="cs-link cs-link--icon" href="/integrations/zapier/">Check out Chargebee’s integration with Zapier</a>
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Payoff
                                            </div>
                                            <p class="cs-article__desc">
                                                <ul class="cs-article__list">
                                                    <li class="cs-article__item">
                                                        For HQLabs, the effort that they now have to invest into subscription and billing management has probably gone down 90%. All they have to do, now, is check for outliers. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        With Zapier integration, the affiliate workflow has been a significant acquisition channel. “Within a couple of days, we’ve gathered about a dozen affiliate partners simply by just having it on the website and having that automation flow running is zero effort in acquiring those,” Tobias validates. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        He goes on to add, “What we plan to do next is scale those up rather quickly so that it just works. I guess the game-changer is that it just works, and that goes for the entire Chargebee process, by the way. We're a subscription business, so subscription management and invoicing are necessary for what we do. It's also simply something that I think any business with our business model simply needs to do. It's something that will give you a huge competitive advantage.”
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
                                                <img src="/static/website/version/images/case-study/hqlabs/logo.png" width="60" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                The new Zapier integration really is a huge help, because the amount of events and triggers that we now have gives us much, much more flexibility in what actually happens in Chargebee and where we sent the data. For example, for us, it's really important to get notified whenever an account schedules their cancellation. Sometimes it's these little things that really make a big difference in the process.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Tobias Hagenau, Co-Founder, HQLabs
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
