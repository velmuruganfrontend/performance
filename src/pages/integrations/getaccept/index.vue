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
      :cb-title="'Chargebee + GetAccept: Manage Contracts & Accelerate your Quote to Subscription process'" 
      :cb-desc="'Chargebee’s integration with GetAccept lets you go from ‘Send Quote’ to ‘Subscription Created’ in one seamless flow. Simplify contract management and automate subscription creation'" 
      :cb-url="'/integrations/getaccept/'"  
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
                <span>getaccept</span>
            </nav>
            <section class="integration__right">
                <h1>
                    Managing Contracts made simple with Chargebee & GetAccept
                </h1>
                <div class="integration__intro">
                    <p> 
                        <img src="/static/website/version/images/integrations/getaccept/getaccept-integration.png" alt="Getaccept + Chargebee" class="img-responsive"> 
                    </p>
                    <p>
                        Your sales team needs to jump through several hoops to incorporate contract terms into a subscription: Raise a quote, send a contract document, follow-up to get the customer to sign the contract, and finally create a subscription as per the contract terms. 
                        <br><br>Chargebee’s integration with GetAccept lets you go from ‘Send Quote’ to ‘Subscription Created’ in one seamless flow. Your sales team can send a Chargebee Quote as a contract document through GetAccept and get the contract e-signed. This integration does away with the manual effort of drafting contract documents, and even creates a new subscription automatically. 
                    </p>
                    <br>

                </div>
                <br><br>
                
            </section>
            <section class="integration__leftmenu hidden-xs">
                <div class="integration__logo hidden-xs">
                    <div class="integration__logo-box" style="background-color: #1E2023;">
                        <img src="/static/website/version/images/case-study/getaccept/ga-logo-white.png" alt="Salesforce" style="width:80%" />  
                    </div>
                </div>
                <section class="integration__desc">
                    <p>
                       GetAccept is an online sales enablement and contract management platform that enhances the capabilities of B2B sales teams
                    </p>
                </section>
                <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                <nav class="integration__nav hidden-xs">
                    <a href="/pricing/">Pricing</a>
                    <a href="https://www.chargebee.com/docs/getaccept.html">Documentation</a>
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
                                <a href="#config" aria-controls="ruby" role="tab" data-toggle="tab">Simplify your Contract Management Workflow</a>
                            </li>
                            <li role="presentation">
                                <a href="#auto-sync" aria-controls="python" role="tab" data-toggle="tab">Set up Automation Rules</a>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="config">
                                <div class="row">
                                    <div class="col-sm-8 visible-xs">
                                        <h5>Accurate Subscription and CRM Data</h5>
                                    </div>
                                    <div class="col-sm-6"> 
                                        <img src="/static/website/version/images/integrations/getaccept/simplify-your-contract-management-workflow.png" alt="chargebee-getaccept-CRM-data-sync" class="img-responsive" style="margin: 30px 0px;"/>
                                    </div>
                                    <div class="col-sm-5">
                                        <p>
                                            Spend less time managing quotes and contracts, and focus on closing more deals:
                                        </p>    
                                        <ul>
                                            <li><p>
                                                Make your sales team more efficient at working with contracts by configuring contract templates in GetAccept
                                            </p></li>
                                            <li><p>
                                                Send Chargebee Quotes as contracts via GetAccept with pre-filled information
                                            </p></li>
                                            <li><p>
                                                Automate email follow-ups through GetAccept to get the customer to e-sign a contract, so your sales team can focus on closing more deals
                                            </p></li>
                                            <li><p>
                                                Manage information about your customers, quotes and contracts from within Chargebee
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
                                    <div class="col-sm-7">
                                        <img src="/static/website/version/images/integrations/getaccept/set-up-automation-rules.png" alt="subscription-lifecycle-management" class="img-responsive" style="margin: 30px 0px" />
                                    </div>
                                    <div class="col-sm-5">
                                        <p>You can create workflows to automate actions in Chargebee, based on the customer’s actions on GetAccept:</p>
                                          <ul>
                                            <li><p>
                                                Change the status of a Quote: When the customer e-signs a contract on GetAccept, the status of the corresponding Quote in Chargebee is automatically updated to ‘Accepted’
                                            </p></li>
                                            <li><p>
                                                Create a subscription:  When the contract is signed, a new subscription configured as per the terms of the contract is automatically created in Chargebee, with auto-collection set to ‘off’.
                                            </p></li>                         
                                        </ul>
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
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->

