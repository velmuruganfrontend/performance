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
        :cb-title="'How Freedom improved conversions by 33% with a stellar billing experience, using Chargebee'" 
        :cb-desc="'Freedom also streamlined their billing and payment operations, using Chargebee'" 
        :cb-url="'/customers/freedom/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/freedom-banner.jpg);background-position:top center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/resources/customers/freedom-logo.png" width="180" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                A platform that blocks websites and apps on your computer, phone, and tablet to avoid distracting websites, to make your business more focused and productive.
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
                                                How Freedom <span class="cs-article__title--mark"> improved conversions by 33%</span> with a stellar billing experience, using Chargebee
                                            </h1>
                                            <div class="cs-article__desc">
                                                <a class="cs-link" href="https://freedom.to" style="font-size: 20px;" target="_blank">Freedom</a> also streamlined their billing and payment operations, using Chargebee. 
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
                                                    <td class="cs-table__desc">Chargebee</td>
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
                                <div class="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/resources/customers/freedom-logo.png" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                We didn't have another choice, we never had to choose between Chargebee and another provider. Chargebee was the clear winner. There were other enterprise solutions which weren't consumer focussed and that was a strict no for us.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Fred Stutzman, CEO, Freedom
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
                                                    <span class="cs-sidebar__title--mark">What Freedom looked for</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Support for global payment methods for tending to customers worldwide
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        A customer portal to let their customers manage their billing and subscriptions
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Need for dashboards and reports to have a better view of their business 
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Offered additional payment options such as PayPal and Amazon to their customers
                                                    </div>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Chargebee’s self-service portal enabled their customers to manage their subscriptions with ease
                                                    </div>
                                                </div>
                                                 <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        RevenueStory delivered reliable reports and numerous metrics to offer meaningful insights
                                                    </div>
                                                </div>
                                                 <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        A discount management system for creating and managing coupons to boost their conversions
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
                                                Freedom is a popular distraction blocker that is used by over 1,000,000 people around the world. But it wasn’t an easy story for them, when the world started spending more time on mobile phones than desktop. With the advent of mobile phones, people were getting more distracted. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Although they had a desktop solution, they decided to launch an integrated, multi-device distraction blocking platform in 2015. Rather than charge by device, they now covered all devices for a low subscription fee.
                                            </div>
                                            <div class="cs-article__desc">
                                                With Stripe as their payment gateway, they built a simple integration which would help them manage their subscriptions. But at their scale, it wasn't long before they ran into problems.   
                                            </div>
                                            <div class="cs-article__desc">
                                                Freedom realised that Stripe wasn't built to handle all that they needed to scale their business and achieve the trajectory they wanted to. Some of their problems included:    
                                            
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Offering multiple payment methods  
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            A self-serve subscription management option for their customers
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Having a better view of their numbers
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cs-article__desc">
                                                They realised they had to build a lot of these features on Stripe, and it was clear that it wasn't the best use of their time.   
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                Freedom began an extensive search for a third party billing solution which would work with Stripe and handle all these for them. They made a matrix of all their feature requirements, to zero down on one solution. They had a light integration using Chargebee's PCI compliant hosted pages. 
                                            </div>
                                            <div class="cs-article__desc">
                                                This was followed soon by a deeper integration into the application. They had multiple thousand subscriptions which were also ported into Chargebee without much hassle. Chargebee was able to:    
                                            
                                                <ul class="cs-article__list" style='margin-top: 24px;'>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Offer multiple payment options like PayPal and Amazon, in addition to credit cards - which was really important for a consumer-focused international business like Freedom.<a href="/recurring-payments/payment-methods/" target="_blank" class="cs-link" style="margin-top: 12px; margin-left: 0;font-size: 18px;">Wondering how Chargebee offers multiple payment options?</a>
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Provide a self-service portal to let customers manage their subscriptions.
                                                        </div>
                                                    </li>
                                                    <li class="cs-article__item">
                                                        <div class="cs-article__desc">
                                                            Create and manage coupons effortlessly to improve Freedom’s conversions, as the ability to give out discounts weren't easy with Stripe.
                                                            <a href="/subscription-management/discount-management-system/" target="_blank" class="cs-link cs-link--icon" style="margin-top: 12px; margin-left: 0;font-size: 18px;">More on Discounts and Coupons</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cs-article__desc">
                                                “Chargebee has easily contributed to a third of our conversions. They've truly helped us open up to the global market, and drastically reduced our development cycles,” says CEO and Founder, Fred Stutzman.
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                Impact
                                            </div>
                                            <div class="cs-article__desc">
                                                Switching to Chargebee improved Freedom’s checkout quality and boosted their conversions. Apart from this, Chargebee also offered numerous metrics and data for Freedom to analyze their business operations through <a href="https://www.revenuestory.io/" target="_blank" class="cs-link" style="margin-top: 12px; margin-left: 0;font-size: 18px;">RevenueStory</a>. Phil Amalong, the Head of Marketing at Freedom loves Chargebee's metrics dashboard and the exports. "If I can't find something that I'm looking for, I just request the Chargebee team and they're quick with the report that I need", says Phil. 
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
                                                <img src="/static/resources/customers/freedom-logo.png" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                You build with Ruby on Rails because you want to take advantage of the beautiful ecosystem that's there, by not having to build things yourself. The same applies to billing. Unless you have expertise in the space and are aware of security risks & infrastructure needs, do not set out to build your own billing. It's not an efficient use of your time. If you want volume, focus on your core competencies. 
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <!-- <img src="/static/website/version/images/case-study/fishburners/ayush_patel.png" class="hidden-xs" width="72" alt="" /> -->
                                                — Fred Stutzman, CEO, Freedom
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
