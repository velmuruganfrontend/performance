<!-- ===========================================================================
// cb-title     =   Page Level Titles (Title, Twitter, OG)
// cb-desc      =   Page Level Descriptions (Description, Twitter, OG)
// cb-image     =   Page Level Images (Twitter, OG)
// cb-style     =   Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script   =   Page Level Head Script. Using this tag to put head level scripts
// cb-body-script   =   Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex   =   Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header       =   App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
// app-footer       =   App footer will add footer to the page.
​
If you want to remove header or footer. Remove the "app-header" or "app-footer" tag, script url and components in scripts.
============================================================================ -->
<!-- ===========================================================================
Start: Main Template
============================================================================ -->
<template>
  <div class="body">
    <!-- ===================================================================
    Start: Meta Section
    ==================================================================== -->
    <app-meta 
      :cb-title="'Create recurring invoices and bill your customers with ease - Chargebee'" 
      :cb-desc="'Recurring invoices are invoices that are sent to your customers on a regular schedule. See how Chargebee can automate your invoicing process and eliminate invoicing errors.'" 
      :cb-url="'/recurring-billing-invoicing/customize-recurring-invoices/'"
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
      :cb-head-script="''"
      :cb-body-script="'https://js.hsforms.net/forms/v2.js,https://js.chilipiper.com/marketing.js'"
      :cb-has-noindex="true" />  
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
        <div id="loading-line" style="display:none;position:fixed;width:100%;z-index: 9999">
            <div class="progress"><div class="indeterminate"></div> </div>
        </div>
        <!-- Start Main Body Content -->
        <div class="flexrow mobile-menu--expanded">
            <div class="mobile-menu__close" id="close-mobile-menu" onclick="hideMobileNav()">
                <img src="/static/website/version/images/product/icon/mobile-menu-close.svg" />
            </div>
            <a class="menu-items" pjax href="/subscription-management/">
                Subscription
                <br />Management
            </a>
            <a class="menu-items" pjax href="/recurring-billing-invoicing/">
                Billing
                <br /> & Invoicing
            </a>
            <a class="menu-items" pjax href="/recurring-payments/">
                Payments
                <br /> & Invoicing
            </a>
            <a class="menu-items" pjax href="/saas-reporting/">
                Reporting
                <br /> & Analytics
            </a>
            <a class="menu-items" pjax href="/recurring-payments/">
                Payment
                <br />Gateways
            </a>
            <a class="menu-items" pjax href="/developers/">
                For
                <br /> developers
            </a>
        </div>
        <section class="pWrap">
            <div class="container">
                <div class="p-carousel__content">
                    <h1 class="p-carousel__title">
                        Clear, crisp and accurate <br>recurring invoices
                    </h1>
                    <p class="p-carousel__desc">
                        All the essentials captured and elegantly rendered on a minimal invoice, <br>delivered straight to your customer's inbox.
                    </p>
                    <!-- <a cn-mark-signup="true" href="/trial-signup/" class="p-carousel__signup-button">
                        Sign up for free
                    </a>
                    <span class="p-carousel__signup-subtext">
                    <a href="/schedule-a-demo/" class="btn-flat btn-flat--muted"><strong>Schedule a Demo</strong></a>
                    </span> -->
                    <inline-form :same-page="true" />
                </div>
            </div>
            <section class="container container--offset">
                <!-- blue navbar -->

                <div class="gaussian-blur"></div>
                <div class="loading-bar">Loading..</div>
                <!-- Main content -->
                <section class="ajax-canvas"></section>
                <section id="main-container">
                    <section class="main-content main-content--border main-content--pt-no">
                        <div class="row">
                            <div class="main-content__l-section col-md-5 col-lg-4">
                                <h2 class="main-content__title">
                                    Send beautiful invoices
                                </h2>
                                <p class="main-content__text">
                                  With all the work that goes into making a great product, you might miss a few tiny details. Like a prim invoice that expresses clarity. And that’s fine. Let us obsess with that. We’ll make sure an invoice is wrapped in an email, and sent out, the moment a charge takes place.
                                </p>
                                <a href="/recurring-billing-invoicing/anatomy-of-an-invoice/" class="main-content__more main-content__more--set-width">
                                    Get an Interactive Tour
                                </a>
                            </div>
                            <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                <img src="/static/website/version/images/product/invoice.png" class="img-responsive">
                            </div>
                        </div>
                    </section>

                    <section class="main-content main-content--no-mob-margin">
                                <div class="row">
                                    <div class="main-content__l-section col-md-5">
                                <div class="whitespace visible-xs visible-sm"></div>
                    
                                <h2 class="main-content__title">
                                    Clear and Accurate Invoices
                                </h2>
                                <p class="main-content__text">
                                    Set up your invoice in minutes in a format that is consistent with your brand identity. Not ready to send an invoice? Use Quotes or Proforma invoices instead, to inspire confidence with all the details of the deal readily available to view.
                                </p>
                            </div>
                            
                          <div class="main-content__l-section col-md-5 col-md-push-1">
                                <div class="whitespace visible-xs"></div>
                                <div class="whitespace-md visible-sm"></div>
                                <h2 class="main-content__title">
                                    P.S. for invoices - Invoice Notes
                                </h2>
                                <p class="main-content__text">
                                    Did a customer request wire transfer instructions in an Invoice? Just include that as a note. Have more to say about a particular line item? Type out all those contextual details as invoice notes, at the customer, subscription, plan, addon, or coupon level.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    <section class="main-content main-content--border">
                        <div class="row">
                            <div class="main-content__l-section col-md-5 col-lg-4">
                                <h2 class="main-content__title">
                                  Brand your Invoice in 2 simple steps
                                </h2>
                                <p class="main-content__text">
                                  Add your logo. Add the standard colors. And setup all the legal entity information including terms, any standard / statutory language all in one place. Did we also tell you that these Invoices are tested to display beautifully all on email clients and devices?
                                </p>
                            </div>
                            <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                <div class="whitespace-md visible-xs visible-sm"></div>
                                <img src="/static/website/version/webflow/images/invoice-address.png" class="img-responsive">
                            </div>
                        </div>
                    </section>
                     <section class="main-content main-content--no-mob-margin">
                            <div class="row">
                                <div class="main-content__l-section col-md-5">
                                <div class="whitespace visible-xs visible-sm"></div>
                                <h2 class="main-content__title">
                                    All the Finance Operations managed in one place
                                </h2>
                                <p class="main-content__text">
                                  Apply credits, create a credit note, apply excess payment, remove payment, record a refund, write off or void an invoice - we can go on and on with the umpteen actions you can perform on an invoice.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2">
                                <a href="/customers/freshdesk/" class="cu-casestudy-sec">
                                    
                                    <div class="cu-casestudy-sec__header">
                                        <img src="/static/website/version/images/case-study/freshdesk/fd-wall.jpg" alt="" class="img-responsive">
                                    </div>
                                    <!-- case study content -->
                                    <div class="cu-casestudy-sec__content"> 
                                        <!-- case study logo -->
                                        <div class="cu-casestudy-sec__logo">
                                            <img src="/static/website/version/images/customers/logos/transparent/freshdesk.png" alt="" width="160" class="img-responsive">
                                        </div>
                                        <!-- case study display -->
                                        <div class="cu-casestudy-sec__disp">
                                            From 500 to 80,000 Customers: <br class="hidden-xs">
                                            How Freshdesk Unlocked Massive Scale
                                        </div>
                                        <!-- case study actions -->
                                        <div class="cu-casestudy-sec__actions">
                                            <div class="cu-casestudy-sec__action cu-animate">Read the story 
                                                <span class="cu-animate__icon">&rarr;</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
                 <div class="whitespace-lg"></div>
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
 import formInline from '~/components/inlineForm.vue';
  
  export default {
    components: {
      'app-meta': AppMeta,
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'inline-form': formInline
    },
    // jQuery methods/functions should be placed inside the methods
    methods: {},
    // jQuery interaction should be placed inside the mounted method
    mounted() {}
  }
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css">
    .cu-casestudy-sec{
        margin: 40px auto auto auto;
    }
    @media (min-width: 768px) {
        .cu-casestudy-sec{
            margin-top: 90px;
        }
    }
    @media (max-width: 767px) {
        .cu-casestudy-sec__content{
            min-width: auto;
            margin-right: 0;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->