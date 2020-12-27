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
      :cb-title="'Xero Recurring Billing Integration with Chargebee'" 
      :cb-desc="'Chargebee’s Recurring Billing solution integrates beautifully with Xero to sync transactions, payments, and tax components, making Manual Bookkeeping a thing of the past.'" 
      :cb-url="'/integrations/xero-recurring-billing/'" 
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
                <span>Xero</span>
            </nav>
            <section class="integration__right">
                <h1>
                    Simplify and automate Xero Accounting with your favorite Recurring Billing Software 
                </h1>
                <!-- <h3 class="ff-acuminpro">
                    <div class="integration__author">
                        <img src="/static/website/version/images/prasanth-kothari.jpg" alt="author" />
                    </div>
                    Written by <a href="#">Prasanth Kothari</a>
                </h3> -->
                <div class="integration__intro">
                    <h2>What is Xero?</h2>
                    <p>Xero is easy to use online accounting software that’s designed specifically for small businesses.</p>
                    <ul>
                        <li>It's all online, so you can work when and where you want to. Just login with your PC, Mac or mobile.</li>
                        <li>Your bank statements are automatically imported and categorized, letting you see your cashflow in real-time.</li>
                        <li>Invite your team and work together on financials. You can collaborate over your up-to-date numbers.</li>
                        <li>Xero has all you need to run your business – including invoicing, paying bills, sales tax returns, reporting and much more.</li>
                    </ul>
                    <p>Find out more or try <a href="http://www.xero.com/">Xero Accounting Software</a> for free.</p>
                </div>
                 <div class="integration__intro">
                    <h2>What is Chargebee?</h2>
                    <p>Chargebee is a smart and comprehensive recurring billing solution which covers all the nuts & bolts of managing subscriptions and is built for global SaaS businesses. </p>
                    <ul>
                        <li>Chargebee gives you the ability to work across 12 payment gateways including - including Braintree and Stripe, along with offline payments (via ACH and wire transfer) with all accounts receivables in one place.
                        </li>
                        <li>Comprehensive Invoicing, Credit Notes and Global Taxation including EU VAT, smart proration logic, role based access for teams.
                        </li>
                        <li>Chargebee offers SaaS Metrics dashboard along with customised reporting on a need basis.</li>
                        <li>You can benefit from our consultative customer support with 24*7 application support.</li>
                    </ul>
                    <p>Try <a href="http://www.chargebee.com/">Chargebee</a> for free.</p>
                </div>
                 <div class="integration__intro">
                    <h2>Features of the integration</h2>
                </div>
                <section class="integration__right-features">
                    <div class="media">
                        <div class="media-left" style="padding-right: 21px">
                            <img src="/static/website/version/images/integrations/xero/cloud.svg" width="40" alt="cloud" />
                        </div>
                        <div class="media-body">
                            <h3>Cloud Accounting and on the Go!</h3> Accountants and business owners can now access your updated accounting data and stay connected from anywhere, on any device, with any number of authorised users. Keep track of the cash flow through sales and purchases.
                        </div>
                    </div>
                </section>
                <section class="integration__right-features">
                    <div class="media">
                        <div class="media-left" style="padding-right: 21px">
                            <img src="/static/website/version/images/integrations/xero/bank.svg" width="40" alt="bank" />
                        </div>
                        <div class="media-body">
                            <h3>Robust Bank Reconciliation</h3> You can now spend less time and manual effort on finding the right transactions. Connect Xero to your bank account to ensure that transaction statements are imported for easy reconciliation.
                        </div>
                    </div>
                </section>
                <section class="integration__right-features">
                    <div class="media">
                        <div class="media-left" style="padding-right: 21px">
                            <img src="/static/website/version/images/integrations/xero/plug.svg" width="40" alt="plug" />
                        </div>
                        <div class="media-body">
                            <h3>Powerful Reporting & Add-ons</h3> Stay up-to-date with the financials in your business using Xero’s dashboard. Generate P&L Statements, Balance Sheets, and Tax Reports; track your business performance using Xero’s interactive financial reporting and budget in real time. Xero easily integrates with 500 business applications like inventory, invoicing, time tracking, payment gateways, billing, taxation, payroll, timesheets, and expense management.
                        </div>
                    </div>
                </section>
            </section>
            <section class="integration__leftmenu hidden-xs">
                <div class="integration__logo hidden-xs">
                    <div class="integration__logo-box">
                        <img src="/static/website/version/images/integrations/xero/logo.svg" alt="Xero" />
                    </div>
                </div>
                <section class="integration__desc">
                    <p>
                        Xero is a third-party service provider and is governed by separate terms, privacy, and support documentation on their website.
                    </p>
                </section>
                <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                <nav class="integration__nav hidden-xs">
                    <a href="/pricing/">Pricing</a>
                    <a href="/docs/xero.html">Documentation</a>
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
                                <a href="#auto-sync" aria-controls="ruby" role="tab" data-toggle="tab">Auto-sync into Xero</a>
                            </li>
                            <li role="presentation">
                                <a href="#account-mapping" aria-controls="python" role="tab" data-toggle="tab">Flexible Chart of Account Mapping</a>
                            </li>
                            <li role="presentation">
                                <a href="#accurate-reporting" aria-controls="node" role="tab" data-toggle="tab">Accurate Reporting</a>
                            </li>
                            <li role="presentation">
                                <a href="#payment-reconciliation" aria-controls="node" role="tab" data-toggle="tab">Simplified Payment Reconciliation</a>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="auto-sync">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/xero/autosync.png" class="img-responsive" width="740" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>Save the time spent on manual updates, CSV imports, and running data scripts as the integration offers automatic sync of invoices and related data.</p>
                                        <p>This integration will accurately sync invoices, payments, credit notes, refunds, customers, items, and taxes to Xero with great precision. Phew! That’s a big list!</p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="account-mapping">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/xero/account-mapping.png" class="img-responsive" width="620" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>All your data will flow into the right chart of account you wish to sync with. This can be a single account for all items or different revenue accounts for each item. Separate chart of accounts can be configured for rounding off difference and writing off bad debts.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="accurate-reporting">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/xero/accurate-reporting.png" class="img-responsive" width="550" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>
                                            Get access to comprehensive and accurate reporting in Xero with a detailed summary of Accounts Receivables, Sales Transactions, and Sales Tax data fed from Chargebee. You can file taxes (for NZ, Australia, UK EU-VAT, India - GST) from within Xero itself as data has been synchronized efficiently for you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="payment-reconciliation">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/xero/reconciliation.png" class="img-responsive" width="550" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>Do you spend hours manually reconciling payments between Stripe and Xero? Tired of seeing the mismatched numbers between your accounting system and bank statement?</p>
                                        <p>The Payment Reconciliation feature between Stripe and Xero, simplifies your bookkeeping and allows reconciliation of amounts in the bank against the transactions in the book of accounts.</p>
                                        <p>Also available as a Google Chrome extension, so you can reconcile with the click of a button!</p>
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
                            Visit <strong>Xero</strong> to learn more about setting up this integration.
                        </p>
                        <p>
                            Xero is provided by a third-party and is governed by separate terms, privacy, and support documentation.
                        </p>
                    </section>
                    <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                </section>
                <div class="integration--row">
                    <!-- mobile screens only -->
                    <!-- <section class="col-xs-12" role="tab-list">
                        <section class="integration__faqs">
                            <h1 class="integration__faqs">FAQs</h1>
                            <a href="#apilimit">Are bank reconciliation for Chargebee invoices available?</a>
                            <a href="#">Are old statements & transactions synced to Xero?</a>
                            <a href="#">Can I associate different transactions with different sales or revenue accounts in Xero?</a>
                            <a href="#">What are the Xero API rate limits?</a>
                            <a href="#">Are there any recommended usage limits for Xero?</a>
                            <a href="#">I’m having problems redirecting back to my application once a Xero user has authorised my app?</a>
                        </section>
                    </section> -->
                </div>
            </section>
            <!-- other screens except mobile -->
            <div class="hidden-xs">
                <h2 class="integration__faqs__title">FAQs</h2>
                <section class="col-md-6 col-sm-6 nopadding" role="tab-list">
                    <section class="integration__faqs">
                        <ul class="faqlist">
                            <li class="active">
                                <a href="#apilimit" role="tab" data-toggle="tab">I already have an account in Xero, how do I connect?</a>
                            </li>
                            <li>
                                <a href="#pricing" role="tab" data-toggle="tab">On what plan is the Xero and Chargebee integration available?</a>
                            </li>
                            <li>
                                <a href="#xero-sync" role="tab" data-toggle="tab">What will be synced to Xero?</a>
                            </li>
                            <li>
                                <a href="#integration-test" role="tab" data-toggle="tab">How do I test my integration works with Xero without signing up for a paying account?</a>
                            </li>
                            <li>
                                <a href="#pre-setup" role="tab" data-toggle="tab">I have already synced some invoices manually to Xero. What should I do now?</a></li>
                            <li>
                                <a href="#oneway-sync" role="tab" data-toggle="tab">Some changes I made in Xero are not syncing back to Chargebee - is this going to be a problem?</a></li>
                        </ul>
                    </section>
                </section>
                <section class="col-md-6 col-sm-6 integration__usage-limits tab-content">
                    <div id="apilimit" role="tabpanel" class="tab-pane active">
                        <h3>Xero Account</h3>
                        <p>You can either connect to an existing account in Xero or create a new account. Chargebee will support both.</p>
                    </div>
                    <div id="pricing" role="tabpanel" class="tab-pane">
                        <h3>Pricing - Chargebee</h3>
                        <p>The Chargebee - Xero integration is available from Chargebee's Rise Plan and above.</p>
                    </div>
                    <div id="xero-sync" role="tabpanel" class="tab-pane">
                        <h3>Xero Sync</h3>
                        <p>Invoices, payments, refunds, credit notes, customers, items, taxes linked to the invoices will be notified to Xero. If customers do not have invoices, or items are not linked to invoices, then these customers or items will not be updated to Xero.</p>
                    </div>
                    <div id="integration-test" role="tabpanel" class="tab-pane">
                        <h3>Integration Test</h3>
                        <p>We recommend you use a demo company to test how Xero works. Additionally, you can create a test organisation and sync your Chargebee data and verify. If it works fine, then you can begin syncing your live data to Xero.</p>
                    </div>
                    <div id="pre-setup" role="tabpanel" class="tab-pane">
                        <h3>Pre-Setup</h3>
                        <p>You can begin invoice sync from a specific date and invoices created from that date will only be updated to Xero.</p>
                    </div>
                    <div id="oneway-sync" role="tabpanel" class="tab-pane">
                        <h3>One Way Sync</h3>
                        <p>Chargebee will not pull updates from Xero, this is a ONE WAY SYNC from Chargebee -> Xero. Any updates should be made in Chargebee and it will be synced to Xero. Two way sync between both the systems is not supported.</p>
                    </div>
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
