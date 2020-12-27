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
        :cb-title="'Fishburners saves 105 hours/month of accounting with Chargebee'"
        :cb-desc="'Australia\’s largest not-for-profit community for startups automates accounting using Chargebee and Xero for its membership management.'"
        :cb-url="'/customers/fishburners/'"
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
                                    <div class="cs-hero__banner" style="background-image:url(https://img.youtube.com/vi/23aUhfTb1OI/maxresdefault.jpg);background-position:center;">
                                        <div style="position: absolute; width: 100%; height: 100%;top:0;left:0;right:0;bottom:0;">
                                            <iframe frameborder="0" height="100%" width="100%" src="https://www.youtube.com/embed/23aUhfTb1OI?rel=0&controls=1&autoplay=0&mute=1&showinfo=1&loop=1&playlist=23aUhfTb1OI" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                        <!-- <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/fishburners/fish_burners_white.png" width="153" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                Australia’s largest coworking community for technology in Sydney, Brisbane, and Shanghai, that hosts over 300+ companies and 700+ members.
                                            </div>
                                        </div> -->
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
                                        <div class="cs-article">
                                            <h1 class="cs-article__title">
                                                How Fishburners saves <sapn class="cs-article__title--mark">105 hours/month</sapn> of manual accounting with Chargebee & Xero
                                            </h1>
                                            <div class="cs-article__desc">
                                                And scaled across three geographies seamlessly
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
                                <div class="col-md-4 col-md-offset-2 col-sm-5">
                                    <div class="cs-article-half">
                                        <div class="cs-article">
                                            <div class="cs-article__logos">
                                                <figure class="cs-article__logo">
                                                    <img src="/static/website/version/images/case-study/fishburners/stripe.svg" width="95" alt="" />
                                                </figure>
                                                <figure class="cs-article__logo">
                                                    <img src="/static/website/version/images/case-study/fishburners/xero.svg" width="90" alt="" />
                                                </figure>
                                            </div>
                                            <div class="cs-article__desc">
                                                Fishburners use Stripe for processing payments and the work behind accounting is done through Xero. Chargebee seamlessly integrates with both of them, thus providing ease of use.
                                            </div>
                                            <div class="cs-links">
                                                <a href="/payment-gateways/stripe/" class="cs-link cs-link--icon">Do more with Stripe</a>
                                                <a href="/saas-accounting-and-taxes/xero-accounting/" class="cs-link cs-link--icon">Xero Integration</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/fishburners/fish_burners.png" width="184" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Chargebee allows us to scale our number of customers, without having to hire more team members to do the increased admin billing work. For example, we increased our total number of customers by 100, without increasing the team, as Chargebee automated the scale of billing.”
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Ayush Patel, Finance Manager
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
                                                    <span class="cs-sidebar__title--mark">Growing pains</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Operations
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Fishburners' operations couldn’t scale at the same pace as that of their business.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Reconciliation
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Mannually reconciling data between gateway and accounting was a full-time job and prone to human errors.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Saves 105 hours/month
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Fishburners could save 105 hours/month of manual accounting.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Focuses on better things
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Finance is now able to dedicate more time in analysis and strategy.
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
                                                Fishburners is a highly collaborative community with world-class founders from different backgrounds and expertise. They have had more than 1000+ founders walk through their doors and in the last 18 months they have tripled their membership and expanded to Brisbane, and Shanghai, China.
                                            </div>
                                            <div class="cs-article__desc">
                                                Fishburners spent almost 25 hours a week on manual accounting work. Managing their fast-growing subscriptions in multiple geographies wasn’t seamless either.
                                            </div>
                                            <div class="cs-article__desc">
                                                The finance team had to manually reconcile the invoices and the payment gateway data, which didn't allow them to focus on financial analysis and other pressing problems.
                                            </div>
                                            <div class="cs-article__desc">
                                                The customer success team used the accounting system to access customers' subscription information, which isn’t built for subscription management in the first place.
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                Chargebee’s integration with Xero retained most of their existing processes without disrupting the workflow and automated their reconciliation with a simple plug-in.
                                            </div>
                                            <div class="cs-article__desc">
                                                The simple and intuitive UI, along with the built-in customer portal gives Fishburners’ customers the freedom of self-service to access, edit, and pause their subscriptions.
                                            </div>
                                            <div class="cs-article__desc">
                                                The role-based access helps the customer service team access subscription information directly from the billing system.
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Pay-off
                                            </div>
                                            <div class="cs-article__desc">
                                                The finance and accounting teams now save up to 105 hours of manual accounting every month.
                                            </div>
                                            <div class="cs-article__desc">
                                                Chargebee’s effortless payment gateway integration, multi-currency support, and tax-supported invoicing enables them to run their finance operations on auto-pilot. Using Chargebee saves a ton of bookkeeper time, merely by automating the mundane tasks. Some of these include:
                                            
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li>
                                                        <div class="cs-article__desc">
                                                            Allowing pro-rata charges on sign up invoice so as to save time spent on manually calculating the pro-rata amount to catch up on billing cycle
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="cs-article__desc">
                                                            Calculating revenue recovered from smart dunning to reduce manual time and effort following up with customers and rescheduling direct debits manually
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="cs-article__desc">
                                                            Automating payment reconciliation saves time from manually reconciling thousands of records each month
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="cs-article__desc">
                                                            Syncing data in real-time with Xero Integration saves time from replicating the above changes from Chargebee into Xero
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="cs-article__desc">
                                                            Customer portal saves customer service time from emails to customers with invoice questions, sending through account statements and updating billing and card details
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cs-article__desc">
                                                In Aayush’s words, here’s how the Finance Team at Fishburners benefits from all the saved time and offer:
                                            </div>
                                            <div class="cs-article__desc">
                                                "With the majority of the admin billing work done automatically and providing us with live customer & revenue figures, the team uses revenue story on a regular basis to —
                                            
                                                <ul class="cs-article__list">
                                                    <li>
                                                        <div class="cs-article__desc">
                                                            Identify areas of growth for revenue (eg ideal customer).
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="cs-article__desc">
                                                            Quickly understand any decline in revenue, to strategise how to combat it early to hit monthly targets.
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="cs-article__desc">
                                                            Review historical performance and metrics (eg retention cohort) to come up with strategies to increase retention and minimize churn."
                                                        </div>
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
                                                <img src="/static/website/version/images/case-study/fishburners/fish_burners.png" width="184" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Our 'accounts team' have gone from doing admin billing work to proactively analysing our revenue figures in Chargebee to create strategies to sustain revenue growth. This used to come from the top-down in the team. However, Chargebee has enabled the whole team from the bottom-up to move to a data-driven decision making.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <img src="/static/website/version/images/case-study/fishburners/ayush_patel.png" class="hidden-xs" width="72" alt="" />
                                                — Ayush Patel, Finance Manager
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
        // For Affix
        if($(window).width() > 1023){
            $('#nav').affix({
                offset: {
                    top: $('#nav').offset().top + 40,
                    bottom: ($('#pg-affix-footer').outerHeight(true) + $('footer').outerHeight(true)) + 250
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
        top: -40px;
    }
    .affix-bottom {
        position: absolute;
    }
    .cs-article-big .cs-article{
        max-width: 991px;
    }
  </style>
  <!-- ===========================================================================
  End: Style Section
  ============================================================================ -->
