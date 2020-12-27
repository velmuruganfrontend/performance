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
      :cb-title="'Get advanced, accurate subscription financial and growth metrics for free'" 
      :cb-desc="'Connect your Chargebee account to ProfitWell in one-click and automatically track the financial metrics of your subscription payments transaction data.'" 
      :cb-url="'/integrations/profitwell-saas-metrics/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
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
        <!-- Start Main Body Content -->
        <section class="container integration xero ff-acuminpro">
            <nav class="integration__breadcrumb">
                <a href="/integrations/">Integrations</a>
                /
                <span>ProfitWell</span>
            </nav>
            <section class="integration__right">
                <h1>
                    Get advanced, accurate subscription financial and growth metrics for free
                </h1>
                <!-- <h3 class="ff-acuminpro">
                    <div class="integration__author">
                        <img src="/static/website/version/images/divya.jpg" alt="author" />
                    </div>
                    Written by <a href="#">Divya</a>
                </h3> -->
                <div class="integration__intro">
                    <img class="img-responsive" src="/static/website/version/images/integrations/profitwell/profitwell-chargebee.png">
                    <br><br>
                    <p>To succeed in growing a subscription business, you have to know your financial metrics, including your churn, LTV, MRR, and growth. Accessing these metrics is a non-negotiable.</p>
                    <br>
                    <p>Yet, most subscription businesses out there are haphazardly tracking these metrics through a series of spreadsheets or subpart tools, which results in inaccurate and inconsistent data.</p>
                    <br>
                    <p>Chargebee now makes getting these metrics simple through their new integration with ProfitWell, which provides all of your subscription financial metrics for free with a direct integration with Chargebee that takes two minutes to set up.</p>
                </div>    
            </section>
            <section class="integration__leftmenu hidden-xs">
                <div class="integration__logo hidden-xs">
                    <div class="integration__logo-box" style="background-color:#fff; border: 1px solid #eee;">
                        <img src="/static/website/version/images/integrations/profitwell/profitwell.png" alt="ProfitWell" />
                    </div>
                </div>
                <section class="integration__desc">
                    <p>
                        ProfitWell provides real-time subscription financial metrics that are absolutely accurate and 100% free through an integration with Chargebee that takes 2-minutes to hook up.
                    </p>
                </section>
                <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
            </section>
            <div class="clearfix"></div>
            <section class="integration--row">
                <div class="cb-useguide__tab cb-useguide__tab-alt">
                    <div>
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#tab1" role="tab" data-toggle="tab">ProfitWell Metrics</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab2" role="tab" data-toggle="tab">ProfitWell Retain</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab3" role="tab" data-toggle="tab">ProfitWell Recognized</a>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="tab1">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <img src="/static/website/version/images/integrations/profitwell/profitwell-metrics.png" class="img-responsive" width="750" />
                                    </div>
                                    <div class="col-sm-4">
                                        <h6>For Free, Accurate Subscription Metrics</h6>
                                        <br>
                                        <p>ProfitWell provides industry standard subscription financial metrics that power the subscription financial reporting for over six thousand companies, including HubSpot, Teamwork.com, and Meetup. The reporting includes:</p>
                                        <p>- Growth tracking (overall, net-new revenue, expansion revenue)</p>
                                        <p>- Full Revenue reporting (MRR, ARR, Upgrades, Downgrades, etc.)</p>
                                        <p>- All Retention reporting (Churn, Delinquencies, Net retention, etc.)</p>
                                        <p>- Cohorts (revenue cohorts, customer cohorts, etc.)</p>
                                        <p>- Cash Flow reporting</p>
                                        <p>- Customer breakdowns and audits</p>
                                        <p>- 136 other metrics that you can’t live without</p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab2">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <img src="/static/website/version/images/integrations/profitwell/profitwell-retain.png" class="img-responsive"  width="650" />
                                    </div>
                                    <div class="col-sm-4">
                                        <h6>For Automated, Market Leading Churn Reduction</h6>
                                        <br>
                                        <p>ProfitWell Retain is an all-in-one solution to lower your active and delinquent churn automatically by leveraging billions of data points and white labeled customer outreach. </p>
                                        <p>The implementation takes less than 20 minutes, which simply involves hooking up Chargebee and install an asynchronous JS snippet. The ProfitWell team handles all of the continuous optimizations for you. Plus, pricing is completely performance based and they guarantee at least 100% ROI. </p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab3">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <img src="/static/website/version/images/integrations/profitwell/profitwell-recognized.png" class="img-responsive" width="650" />
                                    </div>
                                    <div class="col-sm-4">
                                        <h6>Big Four Tested GAAP/ASC 606 Revenue Recognition.</h6>
                                        <br>
                                        <p>For finance leaders of recurring revenue businesses who value absolutely accurate GAAP compliance, ProfitWell Recognized provides 1-click, Big Four audited revenue recognition that gives you back your time through revenue that’s recognized that’s done in seconds, not days. </p>
                                        <p>ProfitWell Recognized plugs directly into Chargebee through an integration that takes 2-minutes to set up, and their algorithms take it from there. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="integration--row  visible-xs">
                <!-- mobile only section -->
                <section class="integration__leftmenu clearfix">
                    <section class="integration__desc">
                        <p>
                            Visit <strong>ProfitWell</strong> to learn more about setting up this integration.
                        </p>
                        <p>
                            ProfitWell provides real-time subscription financial metrics that are absolutely accurate and 100% free through an integration with Chargebee that takes 2-minutes to hook up.
                        </p>
                    </section>
                    <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                </section>
                
            </section>
            <!-- other screens except mobile -->
            <div class="hidden-xs" style="margin-top: 120px;">
                <h2 class="integration__faqs__title">FAQs</h2>
                <section class="col-md-6 col-sm-6 nopadding" role="tab-list">
                    <section class="integration__faqs">
                        <ul class="faqlist">
                            <li class="active">
                                <a href="#apilimit" role="tab" data-toggle="tab">How much does ProfitWell cost?</a>
                            </li>
                            <li>
                                <a href="#pricing" role="tab" data-toggle="tab">How hard is it to integrate ProfitWell with Chargebee?</a>
                            </li>
                            <!-- <li>
                                <a href="#xero-sync" role="tab" data-toggle="tab">What if we already have an internal dashboard or are using a different tool?</a>
                            </li> -->
                        </ul>
                    </section>
                </section>
                <section class="col-md-6 col-sm-6 integration__usage-limits tab-content">
                    <div id="apilimit" role="tabpanel" class="tab-pane active">
                        <p>ProfitWell Metrics is 100% free (and will be forever). ProfitWell has a number of add-ons that are pay for performance, but you can use the metrics without purchasing any of these for as long as you’d like. </p>
                    </div>
                    <div id="pricing" role="tabpanel" class="tab-pane">
                        <p>Linking Chargebee and ProfitWell couldn’t be easier, and takes 2 minutes. The team at ProfitWell timed it and found that the average user took 1 minute and 46 seconds to integrate the products, so technically the process takes less than 2 minutes. :)</p>
                    </div>
                    <!-- <div id="xero-sync" role="tabpanel" class="tab-pane">
                        <p>ProfitWell is all about accuracy. With their consultative approach on pricing strategies with Price Intelligently, ProfitWell accurately measures SaaS metrics, and their customer base of <span class="totalCustomer"></span>, which includes the likes of HubSpot, Teamwork.com and Meetup stand testimony to that.</p>
                    </div> -->
                </section>
            </div>
        </section>
        <!-- End Main Body Content -->
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
        $('.pr-tab__plan-inv').tooltip({
            'show': true,
            'placement': 'bottom'
        });    
    }
  }
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css"></style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
