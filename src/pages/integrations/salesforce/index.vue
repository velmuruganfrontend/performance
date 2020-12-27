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
      :cb-title="'Chargebee + Salesforce | Complete Quote to Cash solution for Subscription Sales Workflows'" 
      :cb-desc="'Chargebee integrates with Salesforce to process subscriptions and manage subscribers directly from the CRM application.'" 
      :cb-url="'/integrations/salesforce/'" 
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
                <span>Salesforce</span>
            </nav>
            <section class="integration__right">
                <h1>
                    Connect Salesforce with Chargebee to drive more subscription revenue 
                </h1>
                <div class="integration__intro">
                    <p>
                         Sales teams start and end their day inside the CRM. And whether you have a completely sales-driven workflow, or a predominantly self-serve onboarding with an inside sales team, chances are you use Salesforce for your sales automation. Which means you’d rather have your team manage their entire sales cycles from quotes, to orders to billing and renewals without leaving the comfort of the world’s most popular CRM.
                        <br><br>The Chargebee + Salesforce integration gives sales teams the ability to manage your subscription sales elegantly. Every subscription sale made with every opportunity can be tracked and recognised in Salesforce.  

                        <br><br>With customer, subscription and invoice information in Chargebee readily available in Salesforce, it’s like having a mini-Chargebee right within Salesforce!
                    </p>
                    <br>
                    <p><strong>Here’s what it means for your sales teams:</strong></p><br>
                    <ol>
                        <li><p>Complete the order-to-cash-to-loyalty cycle from within Salesforce.</p></li>
                        <li><p>Create, view, change and even cancel subscriptions without breaking context.</p></li>
                        <li><p>Have subscription and billing information in-sync with sales - including plans, subscriptions, coupons, addons, complex pricing models, quotes and invoices.</p></li>
                        <li><p>Create subscriptions from closed-won opportunities with minimal user inputs.</p></li> 
                        <li><p>Map subscription customers to accounts rather than contacts, to ensure that the deal is with the company rather than an individual.</p></li>
                        <li><p>Know ‘who pays’ and ‘who subscribes’ in the context of Parent-Child Account to provide a superior transaction experience.</p></li> 
                        <li><p>Identify more upsell and cross-sell opportunities with contextual 360° view of invoices, subscriptions, opportunities and accounts.</p></li>
                        <li><p>Get full visibility into the records synchronized between Chargebee and Salesforce and ensure the integration is running smooth, with the Sync Health Dashboard in Salesforce.</p></li>
                    </ol>

                </div>
                <br><br>
                
            </section>
            <section class="integration__leftmenu hidden-xs">
                <div class="integration__logo hidden-xs">
                    <div class="integration__logo-box" style="background-color:#f8f8f8">
                        <img src="/static/website/version/images/integrations/icon/salesforce.svg" alt="Salesforce" width="150" />
                    </div>
                </div>
                <section class="integration__desc">
                    <p>
                        Salesforce is a cloud-based customer relationship management (CRM) software solution that lets you keep track of the leads generated, deals closed, and new customers acquired by your business.
                    </p>
                </section>
                <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                <nav class="integration__nav hidden-xs">
                    <a href="/pricing/">Pricing</a>
                    <a href="https://www.chargebee.com/docs/salesforce.html">Documentation</a>
                    <a href="/company/terms/">Terms of Service</a>
                    <a href="/privacy/">Privacy Policy</a>
                    <a href="https://support.chargebee.com/">Support</a>
                    <a href="http://status.chargebee.com/">Status</a>
                </nav>
            </section>
            <div class="clearfix"></div>
            <section class="integration--row">
                <div class="cb-useguide__tab cb-useguide__tab-alt">
                    <div>
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#config" aria-controls="ruby" role="tab" data-toggle="tab">Accurate Subscription and CRM Data</a>
                            </li>
                            <li role="presentation">
                                <a href="#auto-sync" aria-controls="python" role="tab" data-toggle="tab">Easy Subscriber Management</a>
                            </li>
                            <li role="presentation">
                                <a href="#twoway-sync" aria-controls="node" role="tab" data-toggle="tab">Built for your Sales Workflow</a>
                            </li>
                            <li role="presentation">
                                <a href="#flex-rules" aria-controls="node" role="tab" data-toggle="tab">Enterprise Class Functions</a>
                            </li>
                             <li role="presentation">
                                <a href="#built-in" aria-controls="node" role="tab" data-toggle="tab">Built-in Sync Health Dashboard</a>
                            </li>
                            <li role="presentation">
                                <a href="#quote-to-cash" aria-controls="node" role="tab" data-toggle="tab">Comprehensive Quote to Cash Functionality</a>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="config">
                                <div class="row">
                                    <div class="col-sm-8 visible-xs">
                                        <h5>Accurate Subscription and CRM Data</h5>
                                    </div>
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/salesforce/accurate-subscription.png" alt="chargebee-salesforce-CRM-data-sync" class="img-responsive" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">    
                                        <p>
                                            Ensure that your subscription data syncs with your CRM data. The integration lets you sync:</p><br>
                                        <ul>
                                            <li><p>
                                                Quotes
                                            </p></li>
                                            <li><p>
                                                Customer records
                                            </p></li>
                                            <li><p>
                                                Plans & Addons
                                            </p></li>
                                            <li><p>
                                                Subscriptions
                                            </p></li>
                                            <li><p>
                                                Coupons
                                            </p></li>
                                            <li><p>
                                                Invoices
                                            </p></li>
                                            <li><p>
                                                Credit notes
                                            </p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="auto-sync">
                                <div class="row">
                                    <div class="col-sm-8 visible-xs">
                                        <h5>Easy Subscriber Management</h5>
                                    </div>
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/salesforce/easy-subscriber-management.png" alt="subscription-lifecycle-management" class="img-responsive"  />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>Controlling the entire subscription lifecycle of your customers has never been easier. Be it sending and getting approvals for quotes, managing their subscriptions or even handling renewals - Chargebee's integration with Salesforce lets you do it all, saving you time and manual effort. </p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="twoway-sync">
                                <div class="row">
                                    <div class="col-sm-8 visible-xs">
                                        <h5>Built for Sales Workflows</h5>
                                    </div>
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/salesforce/Chargebee-Salesforce-built-for-sales-workflows.png" alt="Chargebee Salesforce built for sales workflows.png" class="img-responsive" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>The Chargebee-Salesforce integration is purpose built for various sales flows - here are just a few examples</p>
                                        <ul>
                                            <li><p>Sales driven - Create or update a Chargebee subscription directly from a Salesforce account via a button, saving time for sales teas</p></li>
                                            <li><p>Self Serve - Mark opportunities as ‘won’ when a sales is completed through a checkout page</p></li>
                                            <li><p>Hybrid sales - Powerful matching logic that eliminates duplicate inbound leads in Chargebee and Salesforce</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="flex-rules">
                                <div class="row">
                                    <div class="col-sm-8 visible-xs">
                                        <h5>Enterprise Class Functions</h5>
                                    </div>
                                    <div class="col-sm-8">   
                                        <img src="/static/website/version/images/integrations/salesforce/Account-Heirarchy.gif" width="100%" style="margin: auto" alt="secure-update-payment-information-link" class="img-responsive" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <ul>
                                            <li><p>Parent-Child hierarchy to define who pays and who receives invoices </p></li>
                                            <li><p>Account Mapping to ensure that a subscription is attributed to an account rather than an individual  </p></li>
                                            <li><p>Chargebee’s native quotes function works with your existing approval work flow when you create and send quotes</p></li>
                                            <li><p>Flexibility to build out complex pricing and discounting models to give the best value for your customer</p></li> 
                                            <li><p>Structure your workflow to either automatically create or update subscriptions in Chargebee  from Salesforce opportunities. Or if you wish, allow your teams to manually create subscriptions via user actions.</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                            <div role="tabpanel" class="tab-pane" id="built-in">
                                <div class="row">
                                    <div class="col-sm-8 visible-xs">
                                        <h5>Empower your administrators and ops team to trace, manage and resolve sync errors from within Salesforce.</h5>
                                    </div>
                                    <div class="col-sm-8">   
                                        <img src="/static/website/version/images/integrations/salesforce/salesforce-sync-logs-view.png" width="100%" style="margin: 20px 0" alt="" class="img-responsive" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <div class="tab-pane-wrapper" style="margin-bottom: 40px;">
                                            <p>
                                              Empower your administrators and ops team to trace, manage and resolve sync errors from within Salesforce.
                                            </p>
                                            <h4 class="tab-pane-heading">1. Sync Health Dashboard </h4>
                                            <ul>
                                                <li><p>The Salesforce + Chargebee integration may encounter sync errors which prevent data from syncing.</p></li>
                                                <li><p>The Sync Health Dashboard allows your Salesforce admins to view the status of sync jobs, identify and resolve errors.</p></li>
                                                <li><p>Without letting sync issues pile up, admins can stay informed when subscriptions fail to sync and take corrective actions so that downstream automation out of Salesforce is not impacted.</p></li>
                                            </ul>
                                        </div>  
                                         <div class="tab-pane-wrapper">
                                            <h4 class="tab-pane-heading">2. Sync logs</h4>
                                            <ul>
                                                <li><p><b>Sync Logs</b> tab provides full visibility into what records synced, what failed to sync, the root cause for the failure, leaving a complete audit trail in Salesforce.</p></li>
                                               <li><p><b>Filters</b> allow narrowing down the search based on entity type, synced or not synced, hard or soft failure, date range, and ID.</p></li>
                                            </ul>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="quote-to-cash"> <!--Last Item-->
                                <div class="row">
                                    <div class="col-sm-8 visible-xs">
                                        <h5>Comprehensive Quote to Cash Functionality</h5>
                                    </div>
                                    <div class="col-sm-6">   
                                        <img src="/static/website/version/images/integrations/salesforce/quoting-for-new-subscriptions.gif" width="100%" style="margin: 20px 0;width: 80%;margin: 0 auto;" alt="" class="img-responsive" />
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <div class="tab-pane-wrapper" style="margin-bottom: 40px;">
                                            <h4 class="tab-pane-heading">1. Specify contract terms when quoting for new subscriptions</h4>
                                            <ul class="no-style">
                                                <li><p>Once you’ve <a href="https://www.chargebee.com/docs/contract-terms.html#configuring-contract-terms">enabled contract terms</a> on your Chargebee site, you can specify contract terms at the time of raising a quote from a Salesforce opportunity. Now, when raising a quote for a new subscription, you can define terms such as: setting the subscription to auto-renew when the contract term ends, the cut-off period for cancellation beyond which the subscription will auto-renew, and the number of billing cycles on renewal.</p></li>
                                                
                                            </ul>
                                        </div>  
                                        <div class="tab-pane-wrapper">
                                            <h4 class="tab-pane-heading">2. Quoting for a subscription upgrade</h4>
                                            <ul class="no-style">
                                               <li>
                                                   <p>
                                                       For an existing subscription, you can raise a quote for subscription changes such as bundling a recurring add-on with the current plan. The account manager can either directly convert the quote to an invoice, or email a secure link for the customer to accept the quote. The quote PDF can be sent as an attachment with the email.
                                                   </p>
                                               </li>
                                            </ul>
                                        </div>   
                                        <div class="tab-pane-wrapper"> 
                                            <h4 class="tab-pane-heading">3. Quoting for one-time charges</h4>
                                            <ul class="no-style"> 
                                               <li>
                                                   <p>
                                                       For one-time charges, you can choose the ‘One Time Charge’ option in the Create Quote action workflow. You can specify the charge amount, provide a description of the product/services, and the duration of the service rendered. A quote for one-time charges can be converted into an invoice from Salesforce itself.
                                                   </p>
                                               </li>
                                            </ul>
                                        </div>   
                                    </div>
                                </div>
                            </div> <!--Last Item-->
                        </div>
                    </div>
                </div>
            </section>
            <section class="integration--row  visible-xs">
                <!-- mobile only section -->
                <section class="integration__leftmenu clearfix">
                    <section class="integration__desc">
                        <p>
                            Visit <strong>Salesforce</strong> to learn more about setting up this integration.
                        </p>
                        <p>
                            Salesforce is a cloud-based customer relationship management (CRM) software solution that lets you keep track of the leads generated, deals closed, and new customers acquired by your business.
                        </p>
                    </section>
                    <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                </section>
                <div class="integration--row">
                </div>
            </section>
            <!-- other screens except mobile -->
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
<style type="text/css">
ol{
    list-style-type: disc; 
}
.tab-pane-heading {
    font-size: 16px;
    margin-bottom: 15px;
    margin-left: 20px;
}
.cb-useguide__tab .nav-tabs li a{
    margin-right: 0px; 
}
@media only screen and (max-width: 767px) {
  .col-sm-8 h3{
      margin-bottom: 30px; 
  }
}
.no-style{
    list-style-type: none;
}
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->

