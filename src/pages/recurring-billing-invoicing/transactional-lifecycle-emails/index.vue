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
      :cb-title="'Transactional emails: Automate your lifecycle emails'" 
      :cb-desc="'Send out automatic transactional emails for each event in your subscription lifecycle like invoice due, payment & renewal reminder etc. Customize templates and personalize your emails.'" 
      :cb-url="'/recurring-billing-invoicing/transactional-lifecycle-emails/'" 
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
                        Transactional lifecycle emails<br> just got smarter.
                    </h1>
                    <p class="p-carousel__desc">
                        A relationship is formed over time. Chargebee’s automated lifecycle emails are all about that. <br>Set up customised templates that are contextual and personalised.
                    </p>
                    <a cn-mark-signup="true" href="/trial-signup/" class="p-carousel__signup-button">
                        Sign up for free
                    </a>
                    <span class="p-carousel__signup-subtext">
                    <a href="/launch/" class="btn-flat btn-flat--muted"><strong>Your first $50k is on us</strong></a>
                    </span>
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
                                    Extensive triggers
                                </h2>
                                <p class="main-content__text">
                                  Right from the creation of the subscription to its renewal, Chargebee carefully notifies your customers for each lifecycle event of their subscriptions. Choose from our extensive list of triggers. Not just that, sync up these triggers to send out emails from third party apps like MailChimp too!
                                </p>
                            </div>
                            <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                <img src="/static/website/version/images/product/email-triggers.png" class="img-responsive">
                            </div>
                        </div>
                    </section>

                    <section class="main-content main-content--no-mob-margin">
                                <div class="row">
                                    <div class="main-content__l-section col-md-5">
                                <div class="whitespace visible-xs visible-sm"></div>
                    
                                <h2 class="main-content__title">
                                     All the way to the inbox.
                                </h2>
                                <p class="main-content__text">
                                  Chargebee lets you use your own SMTP server to send out emails. Having a custom SMTP server means that DMARC policies will not affect your email’s delivery. So all your important transactional emails, land exactly where they should - in the customer’s inbox.
                                </p>
                            </div>
                            
                          <div class="main-content__l-section col-md-5 col-md-push-1">
                                <div class="whitespace visible-xs"></div>
                                <div class="whitespace-md visible-sm"></div>
                                <h2 class="main-content__title">
                                    Send powerful, customized emails
                                </h2>
                                <p class="main-content__text">
                                  Who is the email from? How does one identify with your brand? Send emails that personally reflect your brand. Redesign the emails to sound like you, and not a Martian bot.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    <section class="main-content main-content--border">
                        <div class="row">
                            <div class="main-content__l-section col-md-5 col-lg-4">
                                <h2 class="main-content__title">
                                  Make your emails speak personal
                                </h2>
                                <p class="main-content__text">
                                  Who is it for? Me? Great. Personalization works. Chargebee's extensive templates and Mail merge variables take care of the tech that goes into sending contextual and personalized emails. Use your time to pour your heart into the email.
                                </p>
                            </div>
                            <div class="col-md-6 col-md-push-1 col-lg-7 col-lg-push-2">
                                <div class="whitespace-md visible-xs visible-sm"></div>
                                <img src="/static/website/version/images/product/email-notification.png" class="img-responsive">
                            </div>
                        </div>
                    </section>
                     <section class="main-content main-content--no-mob-margin">
                            <div class="row">
                                <div class="main-content__l-section col-md-5">
                                <div class="whitespace visible-xs visible-sm"></div>
                                <h2 class="main-content__title">
                                    Let the world know
                                </h2>
                                <p class="main-content__text">
                                  Have some one-off big news for your customers in the UK? You can send personalized emails to a customer segment that’s filtered based on conditions. Do you want all your customers to update their payment method? Just manually trigger an email.
                                </p>
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
  
  export default {
    components: {
      'app-meta': AppMeta,
      'app-header': AppHeader,
      'app-footer': AppFooter
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
<style type="text/css"></style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->