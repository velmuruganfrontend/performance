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
        :cb-title="'Manage Order fulfillment in ShipStation from Chargebee'" 
        :cb-desc="'With Chargebee-ShipStation integration, manage automatic scheduling of orders for fulfillment from Chargebee'" 
        :cb-url="'/integrations/shipstation/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
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
        <!-- =====================================================================================
        Header Part end 
        ====================================================================================== -->
        <!-- Start Main Body Content -->
        <section class="container integration xero ff-acuminpro">
            <nav class="integration__breadcrumb">
                <a href="/integrations/">Integrations</a>
                /
                <span>ShipStation</span>
            </nav>
            <section class="integration__right">
                <h1>
                    Manage Fulfillment of Orders in ShipStation from Chargebee
                </h1>
                <div class="integration__intro">
                    <p>For an eCommerce business handling subscriptions, subscription billing platform is the data center that holds payment information, order details, and shipment details. This data needs to flow into the fulfillment platform on a recurring basis. And that’s where the complexity kicks in. It becomes crucial to constantly keep a track on order updates, payment detail changes, and order statuses for recognizing revenue better.</p>
                    <br>
                    <p>If you are using Chargebee and ShipStation or looking to jump on board with us, this can be achieved seamlessly. The tight integration we have built will be the solution to streamline your operations.</p>
                </div>
                <br>
                <div class="integration__intro">
                    <h2>What will this integration solve?</h2><br>
                    <ul>
                        <li>Automate creation and cancellation of orders in ShipStation.</li>
                        <li>Minimize errors that pop up while dealing with data across multiple spreadsheets by enabling Chargebee-ShipStation interaction. </li>
                        <li>Plan inventory better by syncing SKU(Stock Keeping Unit) from Chargebee to ShipStation.</li>
                    </ul>
                </div> 
                 <br>
                <div class="integration__intro">
                    <h2>How to get started?</h2><br>
                    <p>Follow the steps <a href="https://www.chargebee.com/docs/shipstation.html" target="_blank">here</a> to get started with the integration.</p>
                </div>     
            </section>
            <section class="integration__leftmenu hidden-xs">
                <div class="integration__logo hidden-xs">
                    <div class="integration__logo-box" style="background-color:#fff; border: 1px solid #eee;">
                        <img src="/static/website/version/images/integrations/shipstation/logo.png" alt="ShipStation" style="width: 70%"/>
                    </div>
                </div>
                <section class="integration__desc">
                    <p>
                        ShipStation is a web-based shipping and fulfillment software that helps in automating fulfillment of orders, managing inventory, and printing labels.
                    </p>
                </section>
                <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                <nav class="integration__nav hidden-xs">
                    <a href="/pricing/">Pricing</a>
                    <a href="https://www.chargebee.com/docs/shipstation.html">Documentation</a>
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
                                <a href="#tab1" role="tab" data-toggle="tab">Automatically sync Order details</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab2" role="tab" data-toggle="tab">Accept payment in multiple currencies</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab3" role="tab" data-toggle="tab">Access Orders dashboard in Chargebee</a>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="tab1">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <img src="/static/website/version/images/integrations/shipstation/ss1.gif" class="img-responsive" width="750" />
                                    </div>
                                    <div class="col-sm-4">
                                        <br><h3 class="visible-xs">Automatically sync Order details </h3>
                                        <ul>
                                            <li>Orders generated in Chargebee are automatically scheduled in ShipStation and upon cancelation are canceled in ShipStation</li>
                                            <li>Ensure that the labels generated in ShipStation reflect the change whenever there is an update of payment details in Chargebee</li>
                                            <li>When orders are merged or split in ShipStation, the order status is reflected Chargebee. Have better accountability by keeping track of all the orders against one invoice.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab2">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <img src="/static/website/version/images/integrations/shipstation/ss2.gif" class="img-responsive"  width="650" />
                                    </div>
                                    <div class="col-sm-4">
                                        <br><h3 class="visible-xs">Accept payment in multiple currencies</h3>
                                        <p>Your ShipStation account lets you configure only one currency. Overcome this limitation with Chargebee-ShipStation integration! Chargebee lets you accept payments in multiple currencies, converts them to the currency configured in your ShipStation account and then pushes the order information to ShipStation.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab3">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <img src="/static/website/version/images/integrations/shipstation/ss3.png" class="img-responsive" width="650" />
                                    </div>
                                    <div class="col-sm-4">
                                        <br><h3 class="visible-xs"> Access Orders Dashboard in Chargebee</h3>
                                        <p>Get a consolidated overview of your Order details within Chargebee without having to switch between platforms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
  </style>
  <!-- ===========================================================================
  End: Style Section
  ============================================================================ -->
