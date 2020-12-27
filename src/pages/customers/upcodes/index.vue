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
        :cb-title="'YC-backed UpCodes simplified their subscription billing operations with Chargebee'"  
        :cb-desc="'UpCodes benefitted from Y-Combinators and Chargebee’s Startup Accelerator Program to build a smooth subscription experience'" 
        :cb-url="'/customers/upcodes/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/casestudy.css'"
        :cb-head-script="''"
        :cb-body-script="'https://fast.wistia.com/embed/medias/apwk60mqpy.jsonp, https://fast.wistia.com/assets/external/E-v1.js'"
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/upcodes/banner.jpg);background-position:center;">
                                        <!-- <div class="cs-hero__banner--shadow" style="opacity: .8"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/upcodes/logo.png" style="filter: brightness(0) invert(1); max-width: 200px;" width="70" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                Provides an accessible platform for construction codes, and consolidates building regulations into a single searchable database.
                                            </div>
                                        </div> -->
                                        
                                        <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                                            <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                                                <div class="wistia_embed wistia_async_apwk60mqpy videoFoam=true" style="height:100%;position:relative;width:100%">
                                                    <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
                                                        <img src="https://fast.wistia.com/embed/medias/apwk60mqpy/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" />
                                                    </div>
                                                </div>
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
                                                How YC-backed UpCodes simplified their subscription billing operations to scale exponentially, with Chargebee
                                            </h1><br>
                                            <p class="cs-article__desc">
                                                UpCodes benefitted from both Y-Combinator and Chargebee’s Accelerator Programmes, to build a smooth subscription experience — a first-of-its-kind in the construction space. 
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
                                                    <td class="cs-table__desc">Stripe, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">Intercom, Mailchimp</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Success</td>
                                                    <td class="cs-table__desc">Intercom</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">VWO, Amplitude, Google Analytics</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/upcodes/logo.png" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                What set Chargebee aside from the competitors for us was the comprehensiveness of the product offering. It was a very, very robust system and this was a system we needed to trust out of the box. We never once had an issue in billing with Chargebee, which we had heard in testimonials, but we found this to be true with firsthand experience.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Scott Reynolds, Co-Founder & CEO, UpCodes
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
                                                       Chargebee as a Foundational Piece for Launch
                                                    </div>
                                                    <div class="cs-sidebar__desc">
                                                        UpCodes looked at Chargebee as a critical component for their launch — so they could focus on getting laws and regulations around construction to the market
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
                                                        Streamlined billing operations with a slew of capabilities, unique billing models, hybrid pricing models, and more. 
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
                                                Architects and engineers in the construction sector have to navigate hordes of compliance laws with building codes and regulations — the rules for which vary with jurisdiction. And failure to comply with the ever-changing regulations could cost millions. The problem was that a lot of this had to be done by referring to books and other antiquated methods. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Y-Combinator-backed UpCodes set out to make it easier for builders and architects by allowing them to follow regulations transparently. The vertical SaaS makes searching building codes simpler &mdash; it gives architects and engineers the ability to determine code requirements and calculate project parameters while staying compliant. 
                                            </div>
                                            <div class="cs-article__desc">
                                                What started off as a side project for UpCodes snowballed into a full-fledged product as soon as they saw validation from their audience and peers. They also started getting more paying customers in the short term. 
                                            </div>
                                            <div class="cs-article__desc">
                                                And offering a subscription model was the natural next step for UpCodes.
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                For UpCodes, a recurring billing solution like Chargebee was a ‘foundational piece’ to launch and set them apart from their competitors. Reinventing the wheel by building the billing component was only counterproductive.
                                            </div>
                                            <div class="cs-article__desc">
                                                Benefitting from <a href="/entrepreneurs/" class="cs-link">Chargebee’s software perk for Y-Combinator’s startups</a>, UpCodes opted for Chargebee as their subscription billing partner, which allowed them to launch very quickly and effectively. The positive recommendations from their peers about Chargebee only accelerated their decision-making process. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Chargebee let them focus only on what they needed to focus on — which was getting the law and regulations out there, making it easier for the construction companies to build faster while staying compliant. 
                                            </div>
                                            <div class="cs-article__desc">
                                                What set Chargebee aside from the competitors for UpCodes was the depth of the product offerings. According to the team at UpCodes, Chargebee’s system was very trustworthy, robust and covered a large number of edge cases right out of the box. Shortly after signing up for the product, the Upcodes team was pleasantly surprised to find that Chargebee had a slew of features that they never thought of!
                                            </div>
                                        </div>
                                        
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Payoff
                                            </div>
                                            <div class="cs-article__desc">
                                                The team at UpCodes has been able to leverage Chargebee as a growth engine to win more customers and scale their operations seamlessly. They offer a range of offerings that promise to delight their customers. A lot of these offerings are built keeping in mind the non-technical customers — using Chargebee has helped them deliver a billing experience that’s very intuitive and easy to comprehend.
                                            </div>

                                            <div class="cs-article__desc">
                                                <ul class="cs-article__list"> 
                                                    <li class="cs-article__item">
                                                        <strong>Trial Flexibility:</strong> UpCodes offers a 2-weeks free trial for their users to be able to evaluate the value they deliver. The free trial comes with an additional offering of no charge during card trial as well as the ability to cancel anytime — this has helped them improve their customer acquisition. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Optionality in Billing Models with Proration:</strong> UpCodes offers both monthly plans as well as a discounted annual plan that can be billed on a monthly basis. Offering annual plans helps increase the LTV of its customers significantly. Chargebee also lets UpCodes users upgrade to a higher plan or downgrade to the basic plan with accurate proration in place, charging them for exactly what they use. 
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <strong>Complex Hybrid Pricing Models:</strong> With the ability to select from either a fixed pricing plan or a quantity-based pricing model, UpCodes leverages the best of both the models with Chargebee’s pricing model flexibility. They bill their customers exactly for the number of users that they sign up for.
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
                                                <img src="/static/website/version/images/case-study/upcodes/logo.png" width="200" alt="" />  
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                In all the time that we’ve been working with Chargebee, the product has evolved significantly further and faster than we ever thought it would. Chargebee covers a huge amount of edge cases that we never even thought of when we were signing up for the services but ended up being extremely important for us.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Scott Reynolds, Co-Founder & CEO, UpCodes
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
