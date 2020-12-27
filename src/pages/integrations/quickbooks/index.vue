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
      :cb-title="'Chargebee + Quickbooks Integration: Accounting, Bookkeeping and Subscription Billing in one platform'" 
      :cb-desc="'Bring together accounting and recurring billing on one platform through Chargebee\'s integration with Quickbooks. Let Chargebee automatically sync payments, invoices and more into your Quickbooks account. Manual book-keeping and billing is no more a nightmare with Chargebee\'s comprehensive billing-accounting integration.'" 
      :cb-url="'/integrations/quickbooks/'" 
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
                <span>QuickBooks Online</span>
            </nav>
            <section class="integration__right">
                <h1>
                    Automate your SaaS Accounting with Chargebee & QuickBooks Online
                </h1>
                <!-- <h3 class="ff-acuminpro">
                    <div class="integration__author">
                        <img src="/static/website/version/images/prasanth-kothari.jpg" alt="author" />
                    </div>
                    Written by <a href="#">Prasanth Kothari</a>
                </h3> -->
                <div class="integration__intro">
                    <h2>Hello there Accounts Maverick,</h2>
                    <p>

                        <br>Managing your accounts receivables and taxes across the different systems keeps you up at night? Still manually updating of your invoices into your accounting tool? Falling into the accounting trap for your SaaS business again and again?

                        <br><br>We hear you. 

                        <br><br>What if we say, we can automate your accounting?

                        <br><br>Chargebee integrates with QuickBooks Online.

                        <br><br>We understand that managing accounts for SaaS is a lot different from, say, managing accounts for a restaurant. And we understand SaaS, because we are one. The pain is real, even for us.

                        <br><br>With this 5-minutes integration, you can now easily save yourself from mundane data entry work and handle more important tasks, such as managing your account receivables and integrate your invoice data into your accounting system.</p>
                </div>
                <br><br>
                <div class="w-col w-col-6 w-clearfix cb-pocket-column">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PQ6ExgNCkyI" frameborder="0" allowfullscreen></iframe>
                </div>
                
                
            </section>
            <section class="integration__leftmenu hidden-xs">
                <div class="integration__logo hidden-xs">
                    <div class="integration__logo-box" style="background-color:#f8f8f8">
                        <img src="/static/website/version/images/integrations/quickbooks/quickbooks-logo.png" alt="QuickBooks" style="width: 90%;" />
                    </div>
                </div>
                <section class="integration__desc">
                    <p>
                        QuickBooks Online is an accounting and financial software from Intuit.
                    </p>
                </section>
                <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                <nav class="integration__nav hidden-xs">
                    <a href="/pricing/">Pricing (on the $299 Rise Plan and above)</a>
                    <a href="https://www.chargebee.com/docs/quickbooks.html">Documentation</a>
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
                                <a href="#auto-sync" aria-controls="ruby" role="tab" data-toggle="tab">Streamlined Accounting</a>
                            </li>
                            <li role="presentation">
                                <a href="#account-mapping" aria-controls="python" role="tab" data-toggle="tab">Seamless Sync
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#accurate-reporting" aria-controls="node" role="tab" data-toggle="tab">Configurable Chart of Accounts</a>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="auto-sync">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/quickbooks/streamline.png" class="img-responsive" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>How many CSV and Excel files of financial info and balance sheet does it take to overwhelm you? Improve your productivity, while focussing on what matters.. </p>
                                        <p>Manage your cashflow through sales and purchases, handle deferred revenue with ease, issue invoices and process payments, and reconcile your bank account. </p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="account-mapping">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/quickbooks/integration.png" class="img-responsive"  />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>The direct integration will help sync data from Chargebee to QuickBooks Online without any manual intervention. All you need is a one time setup and the integration will take care of the daily auto-sync. </p> <p>Sync what? </p> <p>Everything. Invoices, Credit Notes, Payments, Refunds, Customers, Taxes, to desired ledger accounts.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="accurate-reporting">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/quickbooks/configuration.png" class="img-responsive" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>All your data will flow into the right chart of account you wish to sync with. This can be a single revenue account for all plans/addons or different accounts for each item. Additionally, separate chart of accounts can be configured for round off, discounts, bad debts and many more.</p>
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
                            Visit <strong>QuickBooks</strong> to learn more about setting up this integration.
                        </p>
                        <p>
                            QuickBooks is an accounting and financial software from Intuit.
                        </p>
                    </section>
                    <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-primary">Sign Up</a>
                </section>
                <div class="integration--row">
                </div>
            </section>
            <!-- other screens except mobile -->
            <div class="hidden-xs">
                <h2 class="integration__faqs__title">FAQs</h2>
                <section class="col-md-6 col-sm-6 nopadding" role="tab-list">
                    <section class="integration__faqs">
                        <ul class="faqlist">
                            <li class="active">
                                <a href="#apilimit" role="tab" data-toggle="tab">
                                    Which version of QuickBooks is supported as part of the integration?
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" role="tab" data-toggle="tab">
                                    I already have an account in QuickBooks, how do I connect?
                                </a>
                            </li>
                            <li>
                                <a href="#xero-sync" role="tab" data-toggle="tab">
                                    On what plan is the QuickBooks and Chargebee integration available?
                                </a>
                            </li>
                            <li>
                                <a href="#integration-test" role="tab" data-toggle="tab">
                                    How do I test my integration with QuickBooks without signing up for a paid account?
                                </a>
                            </li>
                            <li>
                                <a href="#pre-setup" role="tab" data-toggle="tab">
                                    I have already synced some invoices manually to QuickBooks. What should I do now?
                                </a>
                            </li>
                            <li>
                                <a href="#oneway-sync" role="tab" data-toggle="tab">
                                    Some changes I made in QuickBooks are not syncing back to Chargebee - is this going to be a problem?
                                </a>
                            </li>
                            <li>
                                <a href="#multiple-sites" role="tab" data-toggle="tab">
                                    What will be synced to QuickBooks?
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>
                <section class="col-md-6 col-sm-6 integration__usage-limits tab-content">
                    <div id="apilimit" role="tabpanel" class="tab-pane active">
                        <p>Chargebee integrates with QuickBooks Online only. Chargebee does not integrate with other editions or desktop editions of QuickBooks.</p>
                    </div>
                    <div id="pricing" role="tabpanel" class="tab-pane">
                        <p>You can either connect to an existing account in QuickBooks or create a new account. Chargebee will support both.</p>
                    </div>
                    <div id="xero-sync" role="tabpanel" class="tab-pane">
                        <p>The Chargebee-QuickBooks integration is available on the $299 Rise Plan and above.</p>
                    </div>
                    <div id="integration-test" role="tabpanel" class="tab-pane">
                        <p>We recommend you use a demo company to test how QuickBooks works. Additionally, you can create a test organisation and sync your Chargebee data and verify. If it works fine, then you can begin syncing your live data to QuickBooks.</p>
                    </div>
                    <div id="pre-setup" role="tabpanel" class="tab-pane">
                        <p>You can begin invoice sync from a specific date and invoices created from that date will only be updated to QuickBooks.</p>
                    </div>
                    <div id="oneway-sync" role="tabpanel" class="tab-pane">
                        <p>Chargebee will not pull updates from QuickBooks, this is a ONE WAY SYNC from Chargebee into QuickBooks. Any updates, should be made in Chargebee and the updates will be synced to QuickBooks. Two way sync between both the systems is not supported.</p>
                    </div>
                    <div id="multiple-sites" role="tabpanel" class="tab-pane">
                        <p>Invoices, Credit Notes, Payments, Refunds, Customers, Taxes accurately based on QuickBooks editions. </p>
                    </div>
                </section>
            </div>
        </section>
        <!-- End Main Body Content -->
​
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
