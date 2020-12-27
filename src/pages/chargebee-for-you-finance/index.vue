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
// app-header 		=	App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
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
        :cb-title="'Chargebee for Finance Teams | Simplify Invoice Automation to Revenue Recognition'" 
        :cb-desc="'Chargebee\'s subscription engine is built tailor-made for SaaS & Subscription businesses to make sure that your billing inefficiencies don\'t come in the way of your hyper-growth.'" 
        :cb-url="'/chargebee-for-you-finance/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/abm-landing.css'"
        :cb-head-script="''"
        :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js'"
        :cb-has-noindex="true" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="true" />
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <section class="l-row">
                <div class="container">
                    <div class="abm-hero">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1">
                                <div class="abm-hero__container">
                                    <h1 class="abm-hero__title">
                                    Enough with stopgaps, let’s fix your subscription woes.
                                    </h1>
                                    <div class="abm-hero__desc">
                                        Chargebee automates everything from revenue recognition & reporting to reconciliation.
                                    </div>
                                    <div class="abm-hero__actions">
                                        <div class="abm-hero__action">
                                            <a href="#inlineDemo" class="abm-btn abm-btn--purple">Schedule a Demo</a>
                                        </div>
                                    </div>
                                    <figure class="abm-hero__figure hidden-xs hidden-sm">
                                        <img src="/static/website/version/images/abm-landing/abm-landing-banner.svg" class="img-responsive" alt="" /> 
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row l-row--bg-blue">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="abm-main">
                                <div class="abm-main__label">
                                    As a finance person in your <span>organisation</span>, you are likely tackling these problems common to SaaS Finance & Accounting teams.
                                </div>
                                <div class="abm-cards">
                                    <div class="abm-card">
                                        <div class="abm-card__front">
                                            <div class="abm-card__header">
                                                <img src="/static/website/version/images/abm-landing/finance/finance_icon1.svg" class="abm-card__icon" alt="" />
                                                <!-- <div class="abm-card__title abm-card__title--big"><b>1</b></div> -->
                                                <div class="abm-card__label">
                                                    You spend most of your time on manual tasks like reconciliation, credit notes & refunds, proration on plan changes, and following up on payment collections.
                                                </div>
                                            </div>  
                                            <div class="abm-card__footer">
                                                PROBLEM
                                            </div>
                                        </div>
                                        <div class="abm-card__back">
                                            <div class="abm-card__header">
                                                <div class="abm-card__title">
                                                  Automate your FinOps workflow
                                                </div>
                                                <div class="abm-card__desc">
                                                    From Reconciliation to Revenue Recognition and Reporting. Concentrate on making strategic business decisions, while Chargebee automates the necessary grunt work.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                SOLUTION
                                            </div>
                                        </div>
                                    </div>
                                    <div class="abm-card">
                                        <div class="abm-card__front">
                                            <div class="abm-card__header">
                                                <img src="/static/website/version/images/abm-landing/finance/finance_icon2.svg" class="abm-card__icon" alt="" />
                                                <!-- <div class="abm-card__title abm-card__title--big"><b>2</b></div> -->
                                                <div class="abm-card__label">
                                                    You’re dependent on other teams to support different pricing methods & experiments, preventing you from expanding your revenue.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                PROBLEM
                                            </div>
                                        </div>
                                        <div class="abm-card__back">
                                            <div class="abm-card__header">
                                                <div class="abm-card__title">
                                                  Diversify your Payment Options
                                                </div>
                                                <div class="abm-card__desc">
                                                    Increase your revenue by accepting payments in any form from anywhere in the world (viz: online & offline, 100+ currencies, 25+ PGs.) Plug revenue leakages - automate payment recovery and reduce gateway charges all with zero-dev dependency.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                SOLUTION
                                            </div>
                                        </div>
                                    </div>
                                    <div class="abm-card">
                                        <div class="abm-card__front">
                                            <div class="abm-card__header">
                                                <img src="/static/website/version/images/abm-landing/finance/finance_icon3.svg" class="abm-card__icon" alt="" />
                                                <!-- <div class="abm-card__title abm-card__title--big"><b>3</b></div> -->
                                                <div class="abm-card__label">
                                                    You spend hundreds of hours every year playing catch-up with the changing tax and compliance landscape.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                PROBLEM
                                            </div>
                                        </div>
                                        <div class="abm-card__back">
                                            <div class="abm-card__header">
                                                <div class="abm-card__title">
                                                   Stay light-years ahead of Tax & Compliance 
                                                </div>
                                                <div class="abm-card__desc">
                                                    Scale across geographies without worrying about Tax & Compliance - automate GAAP & IFRS compliant accounting, global tax management with custom & region-specific tax rules to accommodate all the edge cases.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                SOLUTION
                                            </div>
                                        </div>
                                    </div>
                                    <div class="abm-card">
                                        <div class="abm-card__front">
                                            <div class="abm-card__header">
                                               <img src="/static/website/version/images/abm-landing/finance/finance_icon4.svg" class="abm-card__icon" alt="" />
                                                <!-- <div class="abm-card__title abm-card__title--big"><b>4</b></div> -->
                                                <div class="abm-card__label">
                                                    You’re not able to look at revenue numbers in real-time, and that’s having a direct impact on business decisions.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                PROBLEM
                                            </div>
                                        </div>
                                        <div class="abm-card__back">
                                            <div class="abm-card__header">
                                                <div class="abm-card__title">
                                                  360° Visibility into Deep Revenue Analytics
                                                </div>
                                                <div class="abm-card__desc">
                                                    Make insight-driven revenue decisions with deep analytics, role-specific/custom dashboards and real-time notifications to meet your business-specific needs.
                                                </div>
                                            </div>
                                            <div class="abm-card__footer">
                                                SOLUTION
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="col-sm-10 col-sm-offset-1">
                        <div class="abm-main">
                            <div class="abm-main__title">
                                Chargebee:<br> For every stage of<br> your business growth
                            </div>
                            <div class="abm-list">
                                <div class="abm-list__item">
                                    <div class="abm-main__heading">
                                        Recurring Billing Automation
                                    </div>
                                    <div class="abm-main__desc">
                                        Offer end-to-end billing flexibility to your business and your customers with scheduled billing cycles, customized invoicing, and complete quote-to-cash automation.
                                    </div>
                                </div>
                                <div class="abm-list__item">
                                    <div class="abm-main__heading">
                                        Subscription Management at Scale
                                    </div>
                                    <div class="abm-main__desc">
                                        Create trials, plans, and various pricing models. Enable your customers to upgrade/downgrade plans with a self-service portal. Prorate on plan changes, all from within the app.
                                    </div>
                                </div>
                                <div class="abm-list__item">
                                    <div class="abm-main__heading">
                                        Accurate Accounting & Reporting
                                    </div>
                                    <div class="abm-main__desc">
                                        Make tax calculations less taxing, automate revenue recognition, reconcile your payments with the click of a button, and get all essential daily metrics delivered straight to your dashboard.
                                    </div>
                                </div>
                                <div class="abm-list__item">
                                    <div class="abm-main__heading">
                                       Payment Gateways & Methods
                                    </div>
                                    <div class="abm-main__desc">
                                        Connect with Stripe, Braintree, PayPal, GoCardless, and 27 other gateways to collect payments via cards, direct debit, and more. Offer a secure and customizable PCI compliant checkout.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="abm-techstack__heading">
                              Get the most out of your existing tech stack
                            </div>
                            <div class="abm-techstack__image"> 
                                <img src="/static/website/version/images/abm/abm-page-integration.svg" alt="" class="img-responsive" />    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row hidden-xs">
                <div class="container">
                    <div class="row">
                        <div class="abm-testimonial">
                            <div class="col-sm-10 col-sm-offset-1 col-md-12 col-md-offset-0">
                                <div class="abm-testimonial__container">
                                    <div class="abm-casestudy">
                                        <a href="/customers/fishburners/" dynamic-url class="abm-casestudy__container">
                                            <div dynamic-bg class="abm-casestudy__header" style="background-image: url('/static/website/version/images/abm-landing/fishburners.png')">
                                                <img dynamic-logo src="/static/website/version/images/case-study/fishburners/fish_burners.png" alt="" class="img-responsive abm-casestudy__logo" />
                                            </div>
                                            <div class="abm-casestudy__body">
                                                <div dynamic-title class="abm-casestudy__title">
                                                    Fishburners saves 105 hours/month of manual accounting
                                                </div>
                                                <div dynamic-desc class="abm-casestudy__desc">
                                                    Before Chargebee, their finance team had to spend about 25hrs/week on manual tasks - reconciliation, accurate proration, payment collection and updating data into their accounting system.
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="abm-testimonial__slider">
                                        <div class="abm-testimonial__slide">
                                            <div class="abm-testimonial__content" style="background-image: url('/static/website/version/images/abm-landing/animals.png')" 
                                                data-bg="/static/website/version/images/abm-landing/animals.png" 
                                                data-logo="/static/website/version/images/case-study/animalz/animalz.png" 
                                                data-title="Animalz streamlined their A/R at a cost of less than 1% ARR" 
                                                data-desc="Incorrect Revenue Recognition had messed up their revenue data so much so that their profitability was under question. Chargebee automated revenue recognition & streamlined their A/R by being the single source of truth from lead to ledger."
                                                data-url="/customers/animalz/">
                                                
                                                <div class="abm-testimonial__info">
                                                    <img src="/static/website/version/images/case-study/animalz/animalz.png" alt="" class="img-responsive" />  
                                                    <div class="abm-testimonial__author">
                                                       Walter Chen, Founder
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="abm-testimonial__slide">
                                            <div class="abm-testimonial__content" style="background-image: url('/static/website/version/images/abm-landing/userlane.png')" 
                                                data-bg="/static/website/version/images/abm-landing/userlane.png" 
                                                data-logo="/static/website/version/images/case-study/userlane/userlane.png"   
                                                data-title="Userlane closed their month-end financials in 80% less time" 
                                                data-desc="Accounting systems do not understand the logic of subscriptions. They miss out reporting in terms of subscriptions, plans, billing dates, and cancellations so don’t show a big part of MRR. And that’s why you need a solution like Chargebee that understands this better. "
                                                data-url="/customers/userlane/">
                                                
                                                <div class="abm-testimonial__info">
                                                    <img src="/static/website/version/images/case-study/userlane/userlane.png" alt="" class="img-responsive" />
                                                    <div class="abm-testimonial__author">
                                                        Katharina Baudrex, Head of Finance
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="abm-testimonial__slide">
                                            <div class="abm-testimonial__content" style="background-image: url('/static/website/version/images/abm-landing/risevision.jpeg')" 
                                                data-bg="/static/website/version/images/abm-landing/risevision.jpeg" 
                                                data-logo="/static/website/version/images/case-study/risevision/logo.png" 
                                                data-title="Rise Vision’s reporting is done at 50% less time" 
                                                data-desc="Most of the third-party analytics tools are running off invoicing data  as opposed to RevenueStory which runs from the subscription standpoint which is more accurate and saves time - Debbie Barrafato, Chief Financial Officer, Rise Vision"
                                                data-url="/customers/risevision/">
                                                
                                                <div class="abm-testimonial__info">
                                                    <img src="/static/website/version/images/case-study/risevision/logo.png" alt="" class="img-responsive" />
                                                    <div class="abm-testimonial__author">
                                                        Debbie Barrafato, Chief Financial Officer
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="abm-testimonial__slide">
                                            <div class="abm-testimonial__content" style="background-image: url('/static/website/version/images/abm-landing/fishburners.png')" 
                                                data-bg="/static/website/version/images/abm-landing/fishburners.png" 
                                                data-logo="/static/website/version/images/case-study/fishburners/fish_burners.png" 
                                                data-title="Fishburners saves 105 hours/month of manual accounting" 
                                                data-desc="Before Chargebee, their finance team had to spend about 25hrs/week on manual tasks - reconciliation, accurate proration, payment collection and updating data into their accounting system."
                                                data-url="/customers/fishburners/">
                                                
                                                <div class="abm-testimonial__info">
                                                    <img src="/static/website/version/images/case-study/fishburners/fish_burners.png" alt="" class="img-responsive" />
                                                    <div class="abm-testimonial__author">
                                                        Ayush Patel, Finance Manager
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
            </section>
            <section class="l-row" id="inlineDemo">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="abm-testimonial__title">
                                Get started with Chargebee for your business<br class="hidden-xs" /> with a personalised demo
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-5 col-md-offset-0">
                            <div class="abm-customer__review"> 
                                <div class="abm-customer__container">
                                    <div class="abm-customer__header">
                                        <div class="abm-customer__profile">
                                            <img class="abm-customer__img" src="/static/website/version/images/abm-landing/thomas.png" />
                                            <div class="abm-customer__name">— Jean-Thomas Cock, VP of Finance, Proxyclick  </div>
                                            <img class="abm-customer__quote" src="/static/website/version/images/abm/quotes.png" />
                                        </div>
                                    </div>
                                    <div class="abm-customer__body">
                                        <p class="abm-customer__desc">
                                            Chargebee enables us to save a lot of time on a monthly basis. We were able to build a reliable revenue workflow which fits our internal needs.
                                        </p>
                                        <p class="abm-customer__logo"> 
                                            <img src="/static/website/version/images/case-study/proxyclick/logo.svg" alt="" class="img-responsive">  
                                        </p>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div class="col-sm-10 col-sm-offset-1 col-md-5 col-md-offset-1">
                            <div class="abm-demo">
                                <div class="abm-demo__container">
                                    <div class="abm-demo__form">
                                        <div class="calendly-inline-widget"></div>
                                    </div>
                                    <div class="abm-demo__label">
                                        By clicking on Schedule a Demo, you acknowledge having read our <a href="/privacy/" class="abm-link">Privacy Notice</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- ===================================================================
        End: Body Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Footer
        ==================================================================== -->
        <app-footer />
        <!-- ===================================================================
        End: Website Footer
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
            
            methods: {},
            
            mounted() {
                $('.abm-testimonial__slider').slick({
                    centerMode: false,
                    centerPadding: '0',
                    slidesToShow: 1
                });
                $('.abm-testimonial .slick-arrow').on('click', function(event){
                    let parentEle = $(this).parents('.abm-testimonial');
                    let activeEle = parentEle.find('.slick-active');
                    let targetEle = activeEle.prev().find('.abm-testimonial__content')
                    
                    if(parentEle.length){
                        parentEle.find('[dynamic-url]').attr('href',targetEle.attr('data-url'))
                        parentEle.find('[dynamic-bg]').css('background-image', 'url('+targetEle.attr('data-bg')+')')
                        parentEle.find('[dynamic-logo]').attr('src', targetEle.attr('data-logo'))
                        parentEle.find('[dynamic-title]').html(targetEle.attr('data-title'))
                        parentEle.find('[dynamic-desc]').html(targetEle.attr('data-desc'))
                    }
                })
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
    @media (min-width: 768px){
        .abm-hero__title {
            max-width: 400px;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->