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
      :cb-title="'ASC 606 & IFRS 15 Revenue Recognition-Chargebee & Softrax'" 
      :cb-desc="'Automate revenue recognition & revenue management compliant to the latest revenue standards in accounting - ASC 606 & IFRS 15 with Chargebee and Softrax'" 
      :cb-url="'/integrations/softrax/'" 
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
                <span>Softrax</span>
            </nav>
            <section class="integration__right">
                <h1>
                    Automate your ASC 606/IFRS 15-compliant Revenue Recognition with Chargebee and Softrax
                </h1>
                <!-- <h3 class="ff-acuminpro">
                    <div class="integration__author">
                        <img src="/static/website/version/images/prasanth-kothari.jpg" alt="author" />
                    </div>
                    Written by <a href="#">Prasanth Kothari</a>
                </h3> -->
                <div class="integration__intro">
                    <p>
                        Recognizing revenue for a subscription business can get quite complex. You need to accommodate for mid-cycle upgrades and downgrades, plan cycle changes, partial refunds and discounts.
                        <br /><br />
                        But not recognizing revenue numbers correctly has far greater consequences than just a messy dashboard in your headquarters. With ASC-606 and IFRS-15, the Revenue Recognition standards currently mandated in the US and Europe, inaccurate financial reporting could have serious implications on valuations.
                        <br /><br />
                        With the combined value of Chargebee’s subscription engine with Softrax‘s diverse revenue templates your Finance team gets to work on ASC 606/IFRS 15-compliant revenue reports. 
                    </p>
                </div>
                <br><br>
                <div class="w-col w-col-6 w-clearfix cb-pocket-column">
                    <img src="/static/website/version/images/integrations/softrax/chargebee-and-softrax.png" class="img-responsive" alt="Softrax" />
                </div>
                
                
            </section>
            <section class="integration__leftmenu hidden-xs">
                <div class="integration__logo hidden-xs">
                    <div class="integration__logo-box" style="background-color:#f8f8f8">
                        <img src="/static/website/version/images/integrations/softrax/softrax-logo.jpg" alt="Softrax" style="width: 90%;" />
                    </div>
                </div>
                <section class="integration__desc">
                    <p>
                        Softrax integrates with Chargebee to automate revenue recognition compliant with ASC 606 & IFRS 15
                    </p>
                </section>
                <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                <nav class="integration__nav hidden-xs">
                    <a href="/pricing/">Pricing</a>
                    <!-- <a href="https://www.chargebee.com/docs/quickbooks.html">Documentation</a> -->
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
                                <a href="#auto-sync" aria-controls="ruby" role="tab" data-toggle="tab">Automated Revenue Management</a>
                            </li>
                            <li role="presentation">
                                <a href="#account-mapping" aria-controls="python" role="tab" data-toggle="tab">Accurate Revenue Allocation</a>
                            </li>
                            <li role="presentation">
                                <a href="#accurate-reporting" aria-controls="node" role="tab" data-toggle="tab">ASC 606/IFRS 15 RevRec and Deferred Revenue Reporting</a>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="auto-sync">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/softrax/automated-revenue-management.png" class="img-responsive" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>The integration between Chargebee and Softrax will sync subscriptions and related data such as invoices and credit notes, products, and transaction prices from Chargebee to Softrax. This lets your revenue operations teams track and group performance obligations within Softrax. You can also define your revenue recognition rules, and choose from a range of revenue templates in Softrax to dictate how you need your revenue to be reported.</p>
                                        <p>The Chargebee - Softrax integration also lets you configure rules for how you want to monetize and recognize revenue - for example collecting it upfront, or on a ratable basis.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="account-mapping">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/softrax/accurate-revenue-allocation.png" class="img-responsive"  />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>The Chargebee - Softrax integration lets you calculate and estimate standalone selling price (SSP) for each performance obligation. You can estimate the transaction price — what you’d expect to receive in exchange for transferring your promised product or service, as well as the SSP — the price at which you would sell a promised product or service separately to a customer.</p>
                                        <p>You may also choose to unbundle your products/services under a single entity and define revenue allocation for all the different products/services. </p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="accurate-reporting">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/softrax/deferred-revenue-reporting.png" class="img-responsive" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>Watch as the subscription data flows from Chargebee into Softrax seamlessly. As your performance obligations are met, revenue is recognized automatically. Sync all subscriptions from Chargebee from a specific date or for a specific time range. Configure multiple accounting books which are compliant with ASC 605 or ASC 606 or even based on regions.</p>
                                        <p>You can also get different dimensions of the Revenue Recognition report - by product, customer, account, region etc, depending on how your General Ledger accounts are configured.</p>
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
                            Visit <strong>Softrax</strong> to learn more about setting up this integration.
                        </p>
                        <p>
                            Softrax integrates with Chargebee to automate revenue recognition compliant with ASC 606 & IFRS 15
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
                                <a href="#apilimit" role="tab" data-toggle="tab">What plan is the integration available in?</a>
                            </li>
                            <li>
                                <a href="#pricing" role="tab" data-toggle="tab">Should we pay extra for Softrax?</a>
                            </li>
                            <li>
                                <a href="#xero-sync" role="tab" data-toggle="tab">Is the sync between Chargebee and Softrax automated?</a>
                            </li>
                            <li>
                                <a href="#integration-test" role="tab" data-toggle="tab">Do you allow contract modifications?</a>
                            </li>
                            <li>
                                <a href="#pre-setup" role="tab" data-toggle="tab">Do you allow variable considerations?</a>
                            </li>
                        </ul>
                    </section>
                </section>
                <section class="col-md-6 col-sm-6 integration__usage-limits tab-content">
                    <div id="apilimit" role="tabpanel" class="tab-pane active">
                        <p>Chargebee’s integration with Softrax is available on all paying plans</p>
                    </div>
                    <div id="pricing" role="tabpanel" class="tab-pane">
                        <p>Yes. Softrax offers two tiers - a basic package and an advanced solution. Their pricing is based on the Total Processing Volume.</p>
                    </div>
                    <div id="xero-sync" role="tabpanel" class="tab-pane">
                        <p>Yes, the one-way sync is automated and happens every 24 hours.</p>
                    </div>
                    <div id="integration-test" role="tabpanel" class="tab-pane">  
                        <p>Yes, we allow contract modifications based on subscription changes in Chargebee</p>
                    </div>
                    <div id="pre-setup" role="tabpanel" class="tab-pane">
                        <p>Not at the moment. Please feel free to write to <a href="mailto:support@chargebee.coms">support@chargebee.com</a> if you’d like this supported.</p>
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
