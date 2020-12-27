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
        :cb-title="'How Codacy saved tons of development hours, with Chargebee'" 
        :cb-desc="'Codacy were also able to iterate with their product much easier and faster than before, using Chargebee'" 
        :cb-url="'/customers/codacy/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/codacy-banner.jpg);background-position:top center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/codacy-logo-black.svg" width="180" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                A platform that automates code reviews and monitors code quality over time, by automatically applying static analysis code patterns to your project and grading it.
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
                                                How Codacy saved <span class="cs-article__title--mark">tons of development hours</span>, with Chargebee.
                                            </h1>
                                            <div class="cs-article__desc">
                                                <a class="cs-link" href="https://www.codacy.com/" style="font-size: 20px;" target="_blank">Codacy</a> were also able to iterate with their product much easier and faster than before, using Chargebee.
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
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Zapier, Chargebee</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">ChartMogul</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Success</td>
                                                    <td class="cs-table__desc">Zendesk, Intercom</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/codacy-logo-black.svg" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                Ever since we started using it, it has been really painless. Chargebee has saved lots of development time and things have been just great for us. We made the right call by switching to Chargebee.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — João Caxaria, CTO, Codacy
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
                                        <div class="cs-sidebar">
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">What Codacy looked for</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Comprehensive billing system that would save them from the countless hours spent on developing an in-house solution.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Support with invoicing, taxes, and reporting - all in one place. 
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Iterated with their product easily, with Chargebee’s hosted pages method of integration.
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Allow customers to manage their subscriptions with Chargebee’s customer portal. <a href="/recurring-payments/checkout-experience/" target="_blank" class="cs-link" style="margin-top: 12px; margin-left: 0">See how Chargebee offers a frictionless checkout experience.</a>
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
                                                Codacy started with a very simple solution that they built on top of Stripe to manage their subscriptions. The solution was able to bill customers on a recurring basis by collecting payments. For operations such as invoices, reporting and taxes they resorted to third party services. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Although it worked just fine, whenever there was a small issue they had to keep going back to the code base to make fixes and this almost always ate into development time. And the code base began to grow more complex.  
                                            </div>
                                            <div class="cs-article__desc">
                                                Being a lean team, the technical debt started affecting them.   
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                All it took for Codacy was three days to integrate into Chargebee and get things rolling. They picked the hosted pages method of integration. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Their development team were able to focus on making their product better, rather than reinventing the wheel. Whenever there was an issue with the billing, the support team found it easy to check the subscriptions by logging into Chargebee and just debugging the problem. For the sales team, creating custom plans and managing discounts became effortless.
                                            </div>
                                            <div class="cs-article__desc">
                                                “We were evaluating other products but Chargebee had the complete set of features that we were looking for. It really helped that with Chargebee we were able to abstract the billing part and keep it separate from our working code base” says João Caxaria, CTO of Codacy.   
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                Impact
                                            </div>
                                            <div class="cs-article__desc">
                                                Saving their dev team from technical debt was not the only challenge Codacy conquered using Chargebee. They were also able to: 
                                            
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Send out clear invoices with all the essentials via Chargebee. 
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Let customers see their own billing and manage their subscriptions with <a href="/subscription-management/customer-self-service-portal/" target="_blank" class="cs-link" style="margin-top: 12px; margin-left: 0;font-size: 18px;">Chargebee’s customer portal</a>.
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Use Chargebee’s hosted checkout pages that took care of PCI Compliance and security.
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
                                                <img src="/static/website/version/images/case-study/codacy-logo-black.svg" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                We understood that if we tried to do it all, we were going to fail. We'd much rather integrate with a solution like Chargebee than having to build it all by ourselves. Whatever works without you having to write code, is probably the best solution for you.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <!-- <img src="/static/website/version/images/case-study/fishburners/ayush_patel.png" class="hidden-xs" width="72" alt="" /> -->
                                                — João Caxaria, CTO, Codacy
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
      }
    }
  </script>
  <!-- ===========================================================================
  End: Script Section
  ============================================================================ -->
<style>
.cs-hero__logo{
    -webkit-filter: brightness(0) invert(1);
    filter: brightness(0) invert(1);
}
</style>
