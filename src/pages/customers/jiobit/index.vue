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
        :cb-title="'How Jiobit monetized its IoT Subscriptions using Chargebee'" 
        :cb-desc="'Jiobit married the best of hardware and software subscription management for their GPS Tracker using Chargebee'" 
        :cb-url="'/customers/jiobit/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(https://img.youtube.com/vi/JX8UQKUDSlo/maxresdefault.jpg);background-position:center;">
                                        <div style="position: absolute; width: 100%; height: 100%;top:0;left:0;right:0;bottom:0;">
                                            <iframe frameborder="0" height="100%" width="100%" src="https://www.youtube.com/embed/JX8UQKUDSlo?rel=0&controls=1&autoplay=0&mute=1&showinfo=1&loop=1&playlist=JX8UQKUDSlo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                        <!-- <div class="cs-hero__banner--shadow"></div> -->
                                        <!-- <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/jiobit/jiobit-logo.png" style="filter: brightness(0) invert(1);width: auto;" width="120" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                The world's smallest and longest self-learning location tracking technology.
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
                                        <div class="cs-article" style="max-width: 900px;">
                                            <h1 class="cs-article__title">
                                                How Jiobit scaled and monetized its <span class="cs-article__title--mark">IoT Subscriptions using Chargebee</span>
                                            </h1>
                                            <div class="cs-article__desc">
                                                <a class="cs-link--inner" href="https://www.jiobit.com/" target="_blank">Jiobit</a> married the best of hardware and software subscription management for their hardware-enabled SaaS
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
                                                    <td class="cs-table__desc">Stripe, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">Intercom, Twilio, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Chargebee, Zapier</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">RevenueStory</td>
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
                                                <img src="/static/website/version/images/case-study/jiobit/jiobit-logo.png" width="120" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                As we looked at a lot of competitors in the space, what we loved about Chargebee was there were some hooks-in for businesses like ours that had a physical product with a software component
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — John Renaldi, Founder & CEO, Jiobit
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
                                                    <span class="cs-sidebar__title--mark">Spaghetti in IoT Subscriptions:</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Traditional eCommerce solution providers weren’t enough
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Jiobit realized that traditional eCommerce players like Shopify were not built for IoT subscriptions because their definitions of recurring revenue didn’t suit Jiobit.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        An in-house solution meant heavier investments
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        A lot of development effort was required to build their own solution on top of Stripe, which meant less focus on the product or heavy investment in operations, either of which Jiobit didn’t prefer.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee...</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Chargebee’s robust APIs and Checkout experience
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        Chargebee’s APIs seamlessly automated billing and shipping of hardware and software, and also enabled Jiobit to completely customize their checkout experience to match their product.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__heading">
                                                        Better visibility with Chargebee’s Time Machine
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        <a href="/time-machine/" class="cs-link--inner">Time Machine</a> allowed Jiobit to test and visualize how their plans will evolve in the future, and gave them visibility into many subscription scenarios.
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
                                                As Jiobit launched, they realized the need for a product that allowed for an eCommerce checkout experience, to deliver their physical item — the GPS tracker. For a product with a hardware-enabled-SaaS product, they needed a solution that married the hardware and reoccurring revenue in one platform. What they specifically wanted was a solution that emulated an eCommerce checkout but managed SaaS subscriptions. The options they had were not feasible — they had to pick between
                                            </div>
                                            <ul>
                                                <li>
                                                    <div class="cs-article__desc">
                                                        A plug-in like Shopify for shipping the hardware product — but that did not fit their bill because of their definition of reoccurring revenue tied to physical items like a subscription kit for wine or food, and not a recurring service.
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="cs-article__desc">
                                                        Directly integrating with Stripe to manage Jiobit’s service plans meant a lot more development from their side
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="cs-article__desc">
                                                        Integrating with other pure-play subscription billing platforms, have limited features and didn't support recurring and non-recurring products or poorly documented/supported APIs, both of which were critical for them
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="cs-article__desc">
                                                        Building their own solution, which meant a distraction from focussing on their product
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                The need for a full-fledged subscription management solution was conceptualized right at the onset of the product. The wireless and cloud services that Jiobit provides to their customers is the real value of their product and had a 100% attach rate.
                                            </div>
                                            <div class="cs-article__desc">
                                                Jiobit evaluated several options. Seeing that Shopify, Stripe, and other subscription management services in the market, managed either only the hardware subscriptions, or only the software subscriptions, but never both in conjunction, Jiobit found that their business model more represented a subscription model that Chargebee was going to market with and Chargebee fulfilled most of their needs.
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Impact:
                                            </div>
                                            <div class="cs-article__desc">
                                                In Chargebee, Jiobit saw a deep subscription management solution that handles most of their use cases. They have scaled significantly in the past year, while seamlessly automating billing and shipping of the hardware and the service. Specifically, Jiobit benefited from the following, with Chargebee:
                                            </div>
                                            <ul>
                                                <li>
                                                    <div class="cs-article__desc">
                                                        The ability to customize Chargebee’s Checkout to make it their own, Jiobit was able to create the ideal checkout experience <a href="/recurring-payments/checkout-experience/" target="_blank" class="cs-link" style="margin: 12px 0 15px 0;">See how Chargebee delivers the best Checkout Experience</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="cs-article__desc">
                                                        Build their own hooks in the product with Chargebee’s ‘super robust set of APIs’.
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="cs-article__desc">
                                                        Accurate and flexible billing — charging their customers appropriately depending on when they sign up.
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="cs-article__desc">
                                                        Greater flexibility in their plan management and being able to experiment with free trials and iterate with discounts
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="cs-article__desc">
                                                        Support for multiple payment methods, including credit card payments, prepaid cards, and ACH. <a href="/recurring-payments/payment-methods/" target="_blank" class="cs-link" style="margin-top: 12px; margin-left: 0">See how Chargebee offers Multiple Payment Methods</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="cs-article__desc">
                                                        The ability to test with Chargebee’s <a href="https://www.chargebee.com/time-machine/" class="cs-link--inner">Time Machine</a> helped Jiobit see how their plans will evolve 6 months in the future and the different invoices and discounts that get generated for the plans
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
                <div class="cs-row" id="pg-affix-footer">
                    <div class="cs-block">
                        <div class="cs-testimonial-full">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-10 col-sm-offset-1 col-md-8">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/jiobit/jiobit-logo.png" width="184" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Chargebee’s developer kit that came along with it was just super robust in its documentation, and we felt that we could build what we needed to achieve with the tools that were provided to us by Chargebee. The features in Chargebee made life so much simpler
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <img src="/static/website/version/images/case-study/jiobit/john-renaldi.png" class="hidden-xs" width="72" height="72" alt="" />
                                                —  John Renaldi, Founder & CEO, Jiobit
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
        .cs-hero__content{
            background-color: rgba(0,0,0,0.5);
            padding: 20px 20px;
            right: 30px;
            border-radius: 6px;
        }
    }
  </style>
  <!-- ===========================================================================
  End: Style Section
  ============================================================================ -->
