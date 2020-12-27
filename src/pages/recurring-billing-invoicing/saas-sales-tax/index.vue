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
      :cb-title="'Accurate EU VAT and Sales Tax Calculation for SaaS Companies'" 
      :cb-desc="'Send automated recurring invoices with accurate taxes. Always. Chargebee handles Canadian GST, EU VAT, NZ GST and more for you, so you don\'t have to.'" 
      :cb-url="'/recurring-billing-invoicing/saas-sales-tax/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
      :cb-head-script="''"
      :cb-body-script="'https://js.hsforms.net/forms/v2.js,https://js.chilipiper.com/marketing.js'"
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
                        Tax invoices for SaaS and <br>Subscription Commerce Businesses.
                    </h1>
                    <p class="p-carousel__desc">
                      Tax regulations are evolving globally, with newer changes made effective every passing year. <br>Let Chargebee manage taxes for you, so you can focus on your business instead.
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
                                   Same old taxes. Just way less taxing.
                                </h2>
                                <p class="main-content__text">
                                  Vexed by the messy ways of taxes? With Chargebee at your service, you could do better, and focus on building the recurring revenue business you’ve always wanted.
                                </p>
                            </div>
                            <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                <img src="/static/website/version/images/product/taxes.png" class="img-responsive">
                            </div>
                        </div>
                    </section>

                    <section class="main-content main-content--no-mob-margin">
                        <div class="row">
                            <div class="main-content__l-section col-md-5">
                                <div class="whitespace visible-xs visible-sm"></div>
                        
                                <h2 class="main-content__title">
                                  EU VAT Compliance made easy
                                </h2>
                                <p class="main-content__text">
                                  With 28 member states and tax rates being almost as messy as Brexit, VAT in the EU can be confusing to say the least. Compliant invoices, VAT number validation, VAT amount in local currencies, or even provide exemptions, we have it all covered.
                                </p>
                            </div>
                                
                            <div class="main-content__l-section col-md-5 col-md-push-1">
                                <div class="whitespace visible-xs"></div>
                                <div class="whitespace-md visible-sm"></div>
                                <h2 class="main-content__title">
                                    Tax Management Integrations
                                </h2>
                                <p class="main-content__text">
                                  With multiple jurisdictions, changing rules and varying tax rates, tax based workflows are complex to manage. With tight integrations with Avalara and TaxJar, invoicing, tax filing, reporting and managing taxes has never been this effortless.
                                </p>
                                <a href="/integrations/avalara/" target="_blank" class="main-content__more main-content__more--set-width">
                                                More on Avalara Avatax integration
                                            </a>
                            </div>
                        </div>
                    </section>
                    
                    <section class="main-content main-content--border">
                        <div class="row">
                            <div class="main-content__l-section col-md-5 col-lg-4">
                                <h2 class="main-content__title">
                                  Your accountants deserve better
                                </h2>
                                <p class="main-content__text">
                                  It sounds easy to apply taxes if rules are set, but how about reversing taxes or redistributing the credits? Could be troubling, eh? Nope. With <strong>Credit Notes</strong> to handle all the edge cases, reversals and credits have never been simpler. And accounts teams stay happy for all the manual work that's off their plate.
                                </p>
                            </div>
                            <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                <div class="whitespace-md visible-xs visible-sm"></div>
                                <img src="/static/website/version/images/payment-gateways/beautiful-invoice.svg" width="490" class="img-responsive">
                            </div>
                        </div>
                    </section>
                    <section class="main-content main-content--no-mob-margin">
                        <div class="row">
                            <div class="main-content__l-section col-md-5">
                                <div class="whitespace visible-xs visible-sm"></div>
                        
                                <h2 class="main-content__title">
                                  Custom Taxation rules
                                </h2>
                                <p class="main-content__text">
                                  If your business has multiple tax rates for products along with a region based tax which varies according to the state/province, doing the right math could get downright messy. Worry not. By just uploading CSVs of all your tax rules, all the heavy-lifting can be automated right away.
                                </p>
                            </div>
                            
                            <div class="main-content__l-section col-md-5 col-md-push-1">
                                <div class="whitespace visible-xs"></div>
                                <div class="whitespace-md visible-sm"></div>
                                  <h2 class="main-content__title">
                                    Exempt taxes - Edge cases
                                  </h2>
                              <p class="main-content__text">
                                In some edge cases like charitable or religious organizations where taxes aren't applicable, it might be a tedious task managing taxes. But Chargebee lets you mark specific customers or products as exempt if taxes aren't applicable for them. Another task off your to-do list.
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
    }</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->