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
        :cb-title="'How Screencastify scaled to support millions of users and augmented their revenue on autopilot, using Chargebee'" 
        :cb-desc="'As a long-time customer of Chargebee, Screencastify spent nearly zero hours in billing-related tasks, while Chargebee scaled with Screencastify’s growth'" 
        :cb-url="'/customers/screencastify/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/screencastify/screencastify.jpg);background-position:center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/screencastify/logo.svg" style="filter: brightness(0) invert(1); max-width: 240px;" width="180" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                An easy-to-use screen recording extension for Chrome to capture, edit and share HD screencasts in seconds.
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
                                                How Screencastify scaled to support millions of users and augmented their revenue on autopilot, using Chargebee
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                As a long-time customer of Chargebee, Screencastify spent nearly zero hours in billing-related tasks, while Chargebee scaled with Screencastify’s growth.
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
                                                    <td class="cs-table__desc">Paypal Express Checkout, Stripe, QuickBooks, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">Copper, Sprout Social, Demio</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Slack, Google Suite</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">RevenueStory</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Success</td>
                                                    <td class="cs-table__desc">HelpScout</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/screencastify/icon.svg" width="80" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                The Ah-ha moment for Chargebee, if you will, is when your non-technical leader realizes how incredibly delicate and complex subscription management is, even for something as simple as our model. And as a company with extremely limited technical resources even now, it's 100% critical to get it totally right — handling every single edge case, every bit of complication with taxes and currency, and customer support management. But despite how important it is, it's also the thing you want your product team to spend the least amount of time on.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — James Francis, CEO, Screencastify
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
                                                    Understanding Subscription Complexity
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Screencastify learnt off the bat that in order to build and sustain a successful global business, they shouldn’t focus on things that took their attention away from moving their product forward. This included subscription management and recurring billing. 
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">Using Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Since they signed up with Chargebee in 2016, the team has spent nearly zero hours on billing-related tasks. Chargebee has scaled with Screencastify’s growth and growing demands, while ensuring their revenue generation was on autopilot.
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="/trial-signup/" class="cs-sidebar__action">Signup for free</a>
                                        </div>

                                        
                                    </div>


                                    <div class="col-md-5 col-md-offset-1 col-sm-10 col-sm-offset-1 col-md-pull-5">
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                Discovering subscription complexity
                                            </div>
                                            <div class="cs-article__desc">
                                                James explains it best when speaking about the frustrations of focussing on things that are not designed to push Screencastify forward to their customers, ensuring they get the best out of the product. 
                                            </div>
                                            <div class="cs-article__desc">
                                               <em>In his own words,</em> “I hate working on things that don't ultimately help our customers get more out of Screencastify. And I think originally, the solution of, "Hey, we can kind of build this pretty simply, and it'll charge people once a year. We can handle that." 
                                            </div>
                                            <div class="cs-article__desc">
                                                But very quickly I was humbled learning about what really goes into this. And that's not even mentioning reporting and tracking growth, and there's so much more. But I'm just talking honestly about even getting started, charging people, and handling a global business that intends to really grow quickly. We simply cannot spend too much time on this. We will fall behind if we do.”
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                Using Chargebee
                                            </div>
                                            <div class="cs-article__desc">
                                                Chargebee was always a part of Screencastify’s growth roadmap — it wasn’t so much a choice between building vs buying, once they had all the information that they needed to automate payment collection. While Chargebee played the role of subscription engine to automate recurring billing, Screencastify saw beyond this general use and leveraged Chargebee’s APIs to build a custom license manager which can be assigned to or revoked from Screencastify users. This was designed to handle as many as 20000 licenses and this custom piece of software interacts with Chargebee on a daily basis, making Chargebee an important part of their business. 
                                            </div>
                                        </div>
                                        
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Payoff
                                            </div>
                                            <div class="cs-article__desc">
                                                Primarily, the team at Screencastify has spent minimal time on billing-related tasks since they started using Chargebee in 2016, while getting paid by their customers on auto-pilot, without having to worry about their pending payments. As the product team built new features at Screencastify, they found that Chargebee supported the product growth equally with every use case they could conjure. 
                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>Empowered Support Team</strong> Screencastify’s customer support team continues to offer exceptional support to their customers by helping them manage their subscriptions, handling refunds and credits, or changing the information on an account or an invoice. 

                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>Payment Flexibility with Offline Payments</strong> Offline payments were an added layer of complexity for Screencastify and with Chargebee, they were able to automate a ton of offline payments from schools and districts. 

                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>Singular Subscriptions Audit Trail</strong> For Screencastify, Chargebee worked as a singular dashboard to see their business growth on a daily basis — right from the time they sell licenses to schools, to receiving a purchase order, activating subscriptions, followed by tracking payments. This audit trail gives paints a bigger picture to their sales teams, in terms of setting strategies and tracking product sales to specific segments of customers
                                            </div>
                                            <div class="cs-article__desc">
                                                <strong>RevenueStory for MRR Growth by Segment</strong> Like many businesses, Screencastify’s key growth metric is MRR, particularly MRR by segment. They use RevenueStory to track revenue growth and MRR trends by segment which includes Individuals who are corporate users as well as district schools who do bulk purchases — each treated as individual product lines. 
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
                                                <img src="/static/website/version/images/case-study/screencastify/icon.svg" width="80" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                What's really interesting is that every single person in our company is extremely familiar with Chargebee and how to use it and how to get the most out of it. And there is no other tool besides Slack that that applies to. And I think that just demonstrates how critical subscription billing management is to the leadership, to the product team, to sales, to customer support. It's easy to think of it as just an operational piece of your backend, but it is quite critical. And I would not have guessed that back in 2016. I would say this is a ‘set-it-and-forget-it’ piece of technology
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — James Francis, CEO, Screencastify
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
                    top: $('#nav').offset().top + 100,
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
