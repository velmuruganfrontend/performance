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
        :cb-title="'Sales Operations Solution to streamline Sales - Finance process | Chargebee'" 
        :cb-desc="'Losing deals to obsolete sales workflows & manual finance approval processes? Chargebee seamlessly bridges the sales-finance process & modernizes sales ops with automated approvals, custom workflows, manage contract terms, advanced segment reporting & more.'" 
        :cb-url="'/for-sales-operations/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/e-learning.css, /static/website/version/styles/for-sales-operations.css'" 
        :cb-head-script="''" 
        :cb-body-script="''"
        :cb-has-noindex="false" /> 
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <!-- ===================================================================
        Start: Website Hero
        ==================================================================== -->
        <div id="cp-hero">
        <section class="cp-hero cp-hero--sm">
            <div class="cp-hero__container">
                
                <div class="cp-hero__body">
                    <div class="cp-hero__header">
                        <h1 class="cp-hero__title">
                            Operational hiccups shouldn’t hold your sales team back
                        </h1>
                        <p class="cp-hero__desc">
                            Enable faster deal closures with flexible workflows for discounts, contracts, subscriptions, billing cycles, quote approvals, and more. 
                        </p>
                    </div> 
                    <div class="cp-hero__actions">
                        
                        <div class="cp-hero__action">
                            <a href="/schedule-a-demo/" class="cp-btn">Schedule a demo</a>
                        </div>
                        <div class="cp-hero__action">
                            <a href="/trial-signup/" class="cp-btn cp-btn--ghost">Sign up for free</a>
                        </div>
                    </div>
                </div>
    
            </div>
        </section>
        </div>
        <!-- ====================================================================
        End: Website Hero
        ===================================================================== --> 
            <section class="l-row">
                <div class="container">
                    <div class="eln-article">
                        <div class="eln-article__container">
                            <div class="eln-article__aside">
                                <div class="eln-article__title eln-article__title--big">
                                    Automate your Sales Workflow
                                </div>
                            </div>
                            <div class="eln-article__main">
                                <div class="eln-article__list">
                                    <div class="eln-article__item">
                                        <div class="eln-article__icon">
                                            <img src="/static/website/version/images/e-learning/pricing-and-cource.svg" class="img-responsive" width="39">
                                        </div>
                                        <div class="eln-article__desc">
                                            <strong>Maximize win rates</strong> by allowing flexibility in contract terms, discounts, and sales workflows for different revenue segments.
                                        </div>
                                    </div>
                                    <div class="eln-article__item">
                                        <div class="eln-article__icon">
                                            <img src="/static/website/version/images/e-learning/billing-and-tax.svg" class="img-responsive" width="39">
                                        </div>
                                        <div class="eln-article__desc">
                                            <strong>Identify top performers</strong> by segmenting your MRR by geography, sales executive, LTV, and other filters.
                                        </div>
                                    </div>
                                    <div class="eln-article__item">
                                        <div class="eln-article__icon">
                                            <img src="/static/website/version/images/e-learning/sales-process-and-reporting.svg" class="img-responsive" width="39">
                                        </div>
                                        <div class="eln-article__desc">
                                            <strong>Expand the target market</strong> by allowing custom workflows for enterprise prospects and self-serve workflow for smaller prospects.
                                        </div>
                                    </div>
                                    <div class="eln-article__item">
                                        <div class="eln-article__icon">
                                            <img src="/static/website/version/images/e-learning/revenue-intelligence.svg" class="img-responsive" width="39">
                                        </div>
                                        <div class="eln-article__desc">
                                            <strong>Reduce sales cycle </strong> by integrating your CRM with billing, and automating the quote-to-cash workflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
						<div class="col-sm-12">
							<div class="eln-slider">
								<div class="eln-slider__figure">
                                    <img src="/static/website/version/images/customers/logos/sales-ops-logos.svg" alt="" width="940" />
								</div>
							</div>
						</div>
					</div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="eln-article">
                        <div class="row row-align__center">
                            <div class="col-sm-6">
                                <h2 class="eln-article__label eln-article__label--yellow">
                                   QUOTE-TO-CASH AUTOMATION
                                </h2>
                                <div class="eln-article__title">
                                    No More Approval Shuttle-runs for Quotes
                                </div>
                                <img src="/static/website/version/images/sales-ops/quote-to-cash-workflow.svg" alt="quote to cash workflow" class="img-responsive visible-xs" />
                                <div class="eln-article__desc">
                                    There's a dark, scary place where a majority of your deals go to gather dust while your competitors continue to press their case. And it's situated somewhere between your sales desk, finance, and the legal table. With Chargebee and your CRM, your quote-to-cash function is fully automated. 
                                </div>
                                <div class="cp-article__actions">
                                    <div class="cp-article__action">
                                        <a href="/recurring-billing-invoicing/sales-quotes/" class="cp-link cp-link--icon"> 
                                            Automate quote-to-cash workflows
                                        </a>
                                    </div>
                                    <div class="cp-article__action">
                                        <a href="/integrations/salesforce/" class="cp-link cp-link--icon"> 
                                           Chargebee + Salesforce
                                        </a>
                                    </div> 
                                </div>
                            </div>
                            <div class="col-sm-6 hidden-xs">
                                <img src="/static/website/version/images/sales-ops/quote-to-cash-workflow.svg" alt="quote to cash workflow" class="img-responsive" />
                                <div class="hidden-sm">
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="eln-article"> 
                        <div class="row row-align__center">
                            <div class="col-sm-6">
                                <img src="/static/website/version/images/sales-ops/customs-sales-workforce.svg" alt="customs sales workforce" class="img-responsive" />
                                <div class="hidden-sm">
                                </div> 
                            </div>
                            <div class="col-sm-6 hidden-xs">
                                <h2 class="eln-article__label eln-article__label--yellow">
                                   CUSTOM SALES WORKFLOWS
                                </h2>
                                <div class="eln-article__title">
                                    Move upmarket and downmarket across geographies
                                </div>
                                <img src="/static/website/version/images/sales-ops/customs-sales-workforce.svg" alt="customs sales workforce" class="img-responsive visible-xs" />
                                <div class="eln-article__desc">
                                    Different types of customers require different types of sales flows. High touch, low touch, assisted sales, or complex cycles involving sophisticated deal desks. Your sales team should be focussing on closing deals - not managing workflows. Chargebee helps you build the operational plumbing for your sales team to manage the entire process.
                                </div>
                                <div class="cp-article__actions">
                                    <div class="cp-article__action">
                                        <a href="/moments-for-saas/" class="cp-link cp-link--icon"> 
                                            Chargebee Checkout
                                        </a>
                                    </div>
                                    <div class="cp-article__action">
                                        <a href="/recurring-billing-invoicing/subscription-customer-account-hierarchy/" class="cp-link cp-link--icon">
                                          Structure your subscriptions with account hierarchy
                                        </a>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <section class="l-row">
                <div class="container">
                    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div class="eln-testimonial"> 
                            <div class="eln-testimonial__container">
                                <div class="eln-testimonial__header">
                                    <div class="eln-testimonial__profile">
                                        <img class="eln-testimonial__img" src="/static/website/version/images/e-learning/george.jpeg" />
                                        <div class="eln-testimonial__name">Frank Felice<span class="eln-testimonial__position">CRO, Sisu</span></div>
                                    </div>
                                </div>
                                <div class="eln-testimonial__body">
                                    <p class="eln-testimonial__desc">
                                        The ability to run different reports out of Salesforce, based on the Chargebee data has been great, for me, and my CFO, and my marketing and sales staff. For instance, I'm able to accurately manage all my commission reporting for my sales team — the date for this comes from Chargebee's payments and subscription table. So that's a great function that we've really been able to leverage and has been very valuable for our business. <a href="/customers/sisu/" class="eln-link eln-link--icon">Read more</a> 
                                    </p>
                                    <p class="eln-testimonial__logo"> 
                                        <img style="width: 110px" src="/static/website/version/images/case-study/sisu/logo.png" alt="" class="img-responsive"> 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="eln-article">
                        <div class="row row-align__center">
                            <div class="col-sm-6">
                                <h2 class="eln-article__label eln-article__label--pink">
                                   CONTRACT TERMS MANAGEMENT
                                </h2>
                                <div class="eln-article__title">
                                  Give Your Sales Team the Levers to Do More
                                </div>
                                <img src="/static/website/version/images/e-learning/business-analytics.png" alt="" class="img-responsive visible-xs" />
                                <div class="eln-article__desc">
                                    Enable your executives to make the best offers without breaking the bank. With the right contracts, discounts, add-ons for upselling, your sales team can win any deal. Allow your sales team to entertain hardcore pricing negotiations without losing leverage by locking the subscription for any period of time using contract terms. Set rules for renewal on contract expiry, and charge a fee for premature termination without reinventing your workflows.
                                </div>
                                <div class="cp-article__actions">
                                    <div class="cp-article__action">
                                        <a href="/subscription-management/contract-terms-management/" class="cp-link cp-link--icon"> 
                                           Manage subscriptions with contract terms
                                        </a>
                                    </div>
                                    <div class="cp-article__action">
                                        <a href="/integrations/getaccept/" class="cp-link cp-link--icon">
                                          Chargebee + GetAccept
                                        </a>
                                    </div> 
                                </div>
                            </div>
                            <div class="col-sm-6 hidden-xs">
                                 <h2 class="eln-article__label eln-article__label--pink">
                                    UNEARTH YOUR SALES REVENUE STORY
                                </h2>
                                <div class="eln-article__title">
                                    Don’t Just Drive Incentives, Drive Behavior
                                </div>
                                <img src="/static/website/version/images/e-learning/business-analytics.png" alt="" class="img-responsive visible-xs" />
                                <div class="eln-article__desc">
                                    Your job is more than just reporting on deal numbers and MRR. With the right revenue intelligence tool, you can identify what type of customers grow fastest with you, what kind of sales strategy works best for them, and a lot more. Identify and implement successful sales strategies and maximize your win rates across demographies. 
                                </div>
                                <div class="cp-article__actions">
                                    <div class="cp-article__action">
                                        <a href="/customers/axsemantics/" class="cp-link cp-link--icon">   
                                            Read how AXSemantics used Customer LTV to refine their sales processes
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-row">
                <div class="container">
                    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div class="eln-testimonial"> 
                            <div class="eln-testimonial__container">
                                <div class="eln-testimonial__header">
                                    <div class="eln-testimonial__profile">
                                        <img class="eln-testimonial__img" src="/static/website/version/images/e-learning/time.jpeg" />
                                        <div class="eln-testimonial__name">Dylan Walsh  <span class="eln-testimonial__position">Operations Manager, CircleLoop</span></div>
                                    </div>
                                </div>
                                <div class="eln-testimonial__body">
                                    <p class="eln-testimonial__desc">
                                        RevenueStory’s “Sales Watch” functionality plays a vital role in the day to day functions of our Operations Team, to track the top-level picture of the month’s progress. We use it to track key trends such as Net Growth MRR, Cancellation MRR, Upgrade MRR, and New MRR by plan. More importantly, RevenueStory lets us watch these trends on a day-by-day, month-by-month, year-by-year basis. <a href="/customers/circleloop/" class="eln-link eln-link--icon">Read more</a> 
                                    </p>
                                    <p class="eln-testimonial__logo">  
                                        <img style="width: 150px" src="/static/website/version/images/case-study/circleloop/logo.svg" alt="" class="img-responsive"> 
                                    </p> 
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
                'app-footer': AppFooter,
            },
            
            methods: {},
            
            mounted() {
                
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
    .cj-slider__figure {
    position: relative;
    overflow: hidden;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    max-width: 650px;
    margin: 0 auto 16px;
   }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->