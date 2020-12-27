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
        :cb-title="'Refersion - Chargebee Integrations'" 
        :cb-desc="'Chargebee lets you create affiliate programs with Refersion that helps you to easily recruit and track affiliates. You also have the option to pay commissions using PayPal.'" 
        :cb-url="'/integrations/refersion/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/bootstrap.css'"
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
          <div class="pad-top-head-height">
            <!-- InstanceBeginEditable name="Page Content" -->
            <section class="well no-round no-bor no-mar no-pad">
                <div class="block-space-sm container text-center-xs">
                    <div class="row">
                        <div class="col-md-4 col-md-push-6 block-top-space">                    
                            <img src="/static/website/version/images/integrations/refersion/chargebee-refersion.png" class="img-responsive center-block" alt="Refersion Integration - Chargebee" style="max-height: 180px;">
                        </div>
                        <div class="col-md-4 col-md-pull-2">
                            <h1 class="text-32">Affiliate Management for Subscription Businesses</h1>
                            <p class="lead">Create Affiliate Programs. Build Partnerships. Generate More Sales.</p>
                            <p><a class="btn btn-success text-uppercase" cn-mark-signup="true" href="/trial-signup/?ref=integrations_page">Sign Up for Chargebee</a></p>
                            <p><a href="https://www.chargebee.com/docs/refersion.html">Refersion Setup Guide &#10142; </a></p>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="no-mar">    
            <section class="container block-space-sm text-center">
                <h4 class="block-space-xs hr-line ProximaNova-Bold">KEY FEATURES OF REFERSION</h4>
                <div class="block-top-space-sm"></div>
                <div class="row">
                    <div class="col-sm-4">
                        <img src="/static/website/version/images/integrations/refersion/affiliates.png" alt="Recruit Affiliates" width="80" height="80">
                        <h6>Recruit Affiliates</h6>
                        <p>Use a customized Refersion Affiliate Registration page, to sign up new Affiliates into your program</p>
                    </div>
                    <div class="col-sm-4">
                        <img src="/static/website/version/images/integrations/refersion/payout.png" alt="Payout Faster" width="80" height="80">
                        <h6>Payout Faster</h6>
                        <p>Pay commissions to Affiliates easily with PayPal Mass Payments integration</p>
                    </div>
                    <div class="col-sm-4">
                        <img src="/static/website/version/images/integrations/refersion/end-to-end.png" alt="Track End to End" width="80" height="80">
                        <h6>Track End-to-End</h6>
                        <p>Track everything, from which affiliate drove the sale, the specific order and to their total commission</p>
                    </div>
                </div>
            </section>
            <hr class="no-mar">
            <section class="container block-space-sm">
                <div class="text-center">
                    <h4 class="block-space-xs hr-line ProximaNova-Bold">INTEGRATION AT A GLANCE</h4>
                </div>
                <div class="row">                               
                    <div class="col-md-6 col-md-push-6">
                        <div id="shopifyCarousel" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="item">
                                    <img src="/static/website/version/images/integrations/refersion/refersion.png" alt="Reward &amp; Track">
                                </div>
                                <div class="item active">
                                    <img src="/static/website/version/images/integrations/refersion/Customer-portal.png" alt="Hosted Pages">
                                </div>
                                <div class="item">
                                    <img src="/static/website/version/images/integrations/refersion/registration-page.png" alt="Affiliate Registration">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-md-pull-6 shopify-carousel">
                        <div data-target="#shopifyCarousel" data-slide-to="0">
                            <h6>Easy Affiliate Management</h6>
                            <p>Add, modify, and approve Affiliates with only a few clicks. You have complete control and ownership over your Affiliates.</p>
                        </div>
                        <hr class="clearfix">
                        <div data-target="#shopifyCarousel" data-slide-to="1" class="active">
                            <h6>Built into Hosted Pages</h6>
                            <p>Refersion is built into the hosted pages ensuring the fastest method of setting up a an affiliate program. Custom integration is also possible for users leveraging the API.</p>
                        </div>
                        <hr class="clearfix">
                        <div data-target="#shopifyCarousel" data-slide-to="2">
                            <h6>Affiliate Registration Page</h6>    
                            <p>Advertise your Referral Program with a customized Affiliate registration page for your Affiliates can track their progress in real-time through their own Dashboard.</p>   
                        </div>                     
                    </div>
                </div>
            </section>
            <hr class="no-mar">    
            <section class="faq-block list-square">

                <div class="container block-space-sm">
                    <h4 class="text-uppercase text-center block-space-xs"><strong>Frequently Asked Questions</strong></h4>
                    <div class="row">
                    <div class="col-md-6">
                        <ul>
                            <li>
                            <p><strong>What plan should I be on to avail this feature?</strong></p>
                            <p class="clearfix">Refersion integration is available to all the customers in any Active plan in Chargebee.</p>
                        </li>
                
                        <li>
                            <p><strong>When is data from Chargebee pushed to Refersion?</strong></p>
                            <p class="clearfix">Chargebee pushes data automatically to Refersion whenever a subscription is created and on its each renewal.</p>
                        </li>
                        <li>
                            <p><strong>Will Refersion help me track referrals if I do not make use of hosted pages?</strong></p>
                            <p class="clearfix">Yes. Once you have some <a href="https://www.chargebee.com/docs/refersion.html#refersion-for-chargebee-s-api-users">additional setup</a> in place, Chargebee can help you to track signups from your custom payment pages as well.</p>
                        </li>
                        <li>
                            <p><strong>Does Chargebee work with other service providers like ReferralCandy?</strong></p>
                            <p class="clearfix">We do have plans to integrate with other solutions. Write to us at <a href="mailto:support@chargebee.com" title="support@chargebee.com">support@chargebee.com</a> for help setting it up.</p>
                        </li>
                        <li>
                            <p><strong>Can Chargebee help make modifications on my website to integrate?</strong></p>
                            <p class="clearfix">We have development partners who you can choose depending on your budget. The integration is super simple. Depending on the level of customization required they can give you a quote.</p>
                        </li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <ul>
                        <li>
                            <p><strong>Apart from Chargebee, do I also need to work with a payment gateway account as well?</strong></p>
                            <p class="clearfix">Yes. You need your own payment gateway account to help process credit card payments &amp; receive money in your bank account. Configure the gateway credentials in Chargebee and you are all set to receive payments. No separate integration is necessary. We can help you get one if you need any assistance.</p>
                        </li>
                        <li>
                            <p><strong>Does Chargebee automatically send invoices to my customers?</strong></p>
                            <p class="clearfix">Yes. However, you should explicitly enable this under email settings in Chargebee.</p>
                        </li>
                        <li>
                            <p><strong>Is the credit card payment managed securely?</strong></p>
                            <p class="clearfix"><span class="show">Yes. Chargebee is <a href="https://www.chargebee.com/security/">PCI Level 1 certified service provider</a> and all credit card data are handled in a PCI-DSS compliant manner.</span></p>
                        </li>
                        
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
            <!-- InstanceEndEditable --> 
          </div>   ​
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
        $('.shopify-carousel >div').click(function(){
			$('.shopify-carousel >div').removeClass('active');
			$(this).addClass('active');
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
