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
      :cb-title="'OPEN SOURCE LARAVEL PACKAGE - CHARGEBEE'" 
      :cb-desc="'Use this Open Source Laravel Package to integrate with Chargebee.'" 
      :cb-url="'/open-source-laravel/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/new.css'"
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
        <!-- Start Contant Part -->
        <section>
            <div class="cb-cp-hero">
                <div class="container">
                    <div class="cb-cp-hero-text">
                        <h1>Open Source Laravel Package for Subscriptions</h1>
                        <br>
                        <h4>Sample Implementation to integrate with Chargebee</h4>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                        <div class="cb-cp-contentpart">
                            <p>The open source Laravel package provides an easy way to build subscription and billing modules using Chargebee. The implementation is similar to that of Laravel Cashier, which provides an interface to Stripe’s and Braintree's subscription billing services.</p>
                            <div class="text-center mar-b-md">
                                <a href="https://github.com/TijmenWierenga/LaravelChargebee" class="btn btn-sm btn-success btn-outline-success" target="_blank"><span style="font-size: 18px; margin-right: 6px; margin-top: -2px; display: inline-block;"></span>View source code</a>
                            </div>
                            
                            <div class="cb-cp-list">
                                <h3>What does this package offer?</h3>
                                <p>This package facilitates integration with a subscription management system by providing a Laravel wrapper on top of Chargebee's API.</p>
                            </div>
                            <div class="cb-cp-list">
                                <h3>What does it do?</h3>
                                <p>It helps you fast track your subscription module implementation by handling common use cases. More specifically, it handles use cases such as::</p>
                                <ul>
                                    <li>Subscription creation</li>
                                    <li>Subscription upgrade/downgrade</li>
                                    <li>Subscription cancellation</li>
                                    <li>Proration</li>
                                    <li>Product (plan, addon & coupon) configuration</li>
                                    <li>Payment switch</li>
                                </ul>
                            </div>

                            <br>
                            <p>It is propped with abstraction required for a bunch of things Chargebee does, including invoicing, dunning, taxes & emails. Additionally, it also allows you to create subscriptions with Stripe and Braintree using their javascript libraries.</p>
                            <br><br>
                            <p>The Laravel package is a generous contribution from <a href="https://twitter.com/TijmenWierenga" target="_blank">Tijmen Wierenga</a>. Tijmen provides Laravel customers the option to use Chargebee and the reason for this is best explained in his own kind words. :)</p>

                            <blockquote><p><i>"My name is Tijmen Wierenga and I'm currently employed at Floown. At Floown we are using Chargebee for all our billing services and we love it. This is the main reason I signed up at Chargebee myself. I'm currently working on a open source Chargebee-adapter for the Laravel framework. Laravel provides Stripe and Braintree as payment gateways and I believe everyone using Laravel deserves to be able to use Chargebee right out of the box."</i></p></blockquote>

                            <p>Do try out the package and send us your feedback! You may contact Tijmen at tijmen@floown.com for implementation related queries or reach out to us at support@chargebee.com.</p>

                            <section class="cb-cp-adv mar-y-md">
                                <div class="media">
                                    <div class="media-left">
                                        <img src="/static/website/version/images/open-source/tijmen-laravel.jpg" width="80">
                                    </div>
                                    <div class="media-body media-middle">
                                        <div  style="margin-left:20px;">
                                            <a href="https://twitter.com/TijmenWierenga" target="_blank">Tijmen Wierenga</a>, a passionate developer at <a href="https://floown.com/" target="_blank">Floown</a>, plays an active role in the developer community. Apart from perfecting his coding skills, he loves to play football and enjoys travelling to the nicest places. He is also an ardent admirer of the beach.
                                        </div>
                                    </div>
                                 </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Content Part -->
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

