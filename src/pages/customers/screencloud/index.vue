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
        :cb-title="'How ScreenCloud used insights from RevenueStory to mitigate hidden churn'" 
        :cb-desc="'London-based digital signage software used SaaS quick ratio from Chargebee’s RevenueStory to mitigate churn.'" 
        :cb-url="'/customers/screencloud/'" 
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
                                    <div class="cs-hero__banner" style="background-image:url(/static/website/version/images/case-study/screencloud/screen-cloud.png);background-position:top center;">
                                        <div class="cs-hero__banner--shadow"></div>
                                        <div class="cs-hero__content">
                                            <div class="cs-hero__logo">
                                                <img src="/static/website/version/images/case-study/screencloud/screen-cloud-logo.png" width="180" alt="" />
                                            </div>
                                            <div class="cs-hero__desc">
                                                A digital signage software that makes it easy for businesses to display meaningful content on a screen from wherever they are.
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
                                                How ScreenCloud course-corrected their churn with critical <span class="cs-article__title--mark">SaaS Quick Ratio</span>, using RevenueStory
                                            </h1>
                                            <div class="cs-article__desc">
                                                <a class="cs-link" href="https://screen.cloud/" style="font-size: 20px;" target="_blank">ScreenCloud</a> used insights from the RevenueStory to avert invoice churn from annual subscriptions
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
                                                    <td class="cs-table__desc">Chargebee, Xero, GoCardless, Paypal Pro, Paypal Express Checkout, Stripe</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Sales & Marketing</td>
                                                    <td class="cs-table__desc">Close.io, Autopilot, Drift, Instapage</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Operations</td>
                                                    <td class="cs-table__desc">Zapier, Slack, G-Suite, Dropbox</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Analytics</td>
                                                    <td class="cs-table__desc">RevenueStory, Google Analytics</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Success</td>
                                                    <td class="cs-table__desc">Zendesk</td>
                                                </tr>
                                                <tr class="cs-table__row">
                                                    <td class="cs-table__heading">Engineering</td>
                                                    <td class="cs-table__desc">Jira, Atlassian</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-1">
                                    <div class="cs-testimonial-half">
                                        <div class="cs-testimonial">
                                            <figure class="cs-testimonial__logo">
                                                <img src="/static/website/version/images/case-study/screencloud/screen-cloud-logo.png" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                The reason ScreenCloud came to accept that Chargebee (as our solution of choice) is that’s where all the invoices and subscriptions are going through. So it should be our single source of truth, and it's the one that matched the most to our management accounts in Xero.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                — Sim Ahmed, Head of Marketing, ScreenCloud
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
                                                    <span class="cs-sidebar__title--mark">Before RevenueStory</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        Before RevenueStory, ScreenCloud integrated Chargebee with ProfitWell and ChartMogul, both of which left a little to be desired. They were 90 percent accurate, but the 10 percent accounted for far more critical insights
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cs-sidebar__item">
                                                <div class="cs-sidebar__title">
                                                    <span class="cs-sidebar__title--mark">After Chargebee</span>
                                                </div>
                                                <div class="cs-sidebar__content">
                                                    <div class="cs-sidebar__desc">
                                                        With accurate and real-time metrics indicating high new MRR but a deteriorated SaaS quick ratio, ScreenCloud was able to get to the source of potential churn and double down on tackling it ahead of time
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
                                                The team at ScreenCloud use new MRR and expansion MRR to track revenue growth. But these are never viewed in isolation. They view these metrics in conjunction with gross churn and MRR churn. This combination gives them visibility into SaaS Quick Ratio — a critical metric and investors’ darling that measures the efficiency rate between how much money you're bringing in vis-a-vis how much you're losing every month. 
                                            </div>
                                           <div class="cs-article__desc">
                                                [Tip: A highly efficient SaaS would look at a Quick Ratio of &#8805; 4. Anything lesser than that indicates inefficiencies where churn almost always outweighs revenue growth.] 
                                            </div>
                                            <div class="cs-article__desc">
                                                The problem was that, despite significant growth in their new and expansion MRR, their Quick Ratio wasn’t seeing a clear improvement as anticipated. This clearly meant that their efficiency had hit a roadblock. They wanted to understand if they were spending a lot of their money on bringing low-quality leads which led to a spike in the new MRR but are likely to churn the next month. 
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                The Solution
                                            </div>
                                            <div class="cs-article__desc">
                                                ScreenCloud explored Chargebee’s integration with ProfitWell and ChartMogul to get insights into key SaaS metrics. While the integration helped them get to 90 percent of the way in generating the right reports, it left ScreenCloud wanting more.
                                            </div>
                                            <div class="cs-article__desc">
                                                With <a href="https://www.revenuestory.io/" target="_blank" class="cs-link" style="margin-top: 12px; margin-left: 0;font-size: 18px;display:inline;">RevenueStory</a>, ScreenCloud was able to dig deeper into the numbers, only to find that the churn amount was disproportionately affecting their quick ratio. Digging further into the accounts that were attributed to that churn number, they realized that it was because of their invoicing logic for these annual subscriptions and the communication planned around that. 
                                            </div>
                                            <div class="cs-article__desc">
                                                Simply put, the SaaS quick ratio gave insights into the kind of churn that ScreenCloud could anticipate ahead of time, especially from annual subscriptions, where the invoices needed to be reinstated.  
                                            </div>
                                        </div>
                                        <div class="cs-article">
                                            <div class="cs-article__title">
                                                Impact
                                            </div>
                                            <div class="cs-article__desc">
                                                In Sim’s own words, “this has been a really big change for us actually. It's not only a financial change, but it's been a mindset change."
                                            </div>
                                            <div class="cs-article__desc">
                                                He adds, "I think ChartMogul and ProfitWell — they could probably pick out quite a few of the things that we'd look for in Chargebee. In fairness, it's accuracy. So, I don't know what it is about having a third-party connection, but we've never found that the numbers matched up well enough for us to feel confident in a lot of our assessments when we used tools that weren't Chargebee. Now, post-RevenueStory, what's happened is that we just go in there and use that to do 90 percent of querying and interrogating of data because we can understand the relationship between all that and our SaaS quick ratio, which is very important for us to maintain. That's all done in one place now.”
                                            </div>
                                            <div class="cs-article__desc">
                                                RevenueStory’s query engine and the data store is designed for optimization specifically for subscription analytics, by allowing essential queries to throw accurate data in real-time.
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
                                                <img src="/static/website/version/images/case-study/screencloud/screen-cloud-logo.png" width="180" alt="" />
                                            </figure>
                                            <div class="cs-testimonial__desc">
                                                It wasn't so much about what numbers we couldn't see or could see. It's about the level of accuracy and confidence that we had with RevenueStory.
                                            </div>
                                            <div class="cs-testimonial__author">
                                                <!-- <img src="/static/website/version/images/case-study/fishburners/ayush_patel.png" class="hidden-xs" width="72" alt="" /> -->
                                                — Sim Ahmed, Head of Marketing, ScreenCloud
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
    @media screen and (min-width: 768px){
        .cs-hero__content{
            left: 30px;
            right: auto;
            padding-bottom: 0;
            padding-left: 10px;
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
