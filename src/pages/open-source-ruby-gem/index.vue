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
      :cb-title="'OPEN SOURCE RUBY GEM FOR SUBSCRIPTIONS - CHARGEBEE'" 
      :cb-desc="'Use this Open Source Ruby Gem implementation, built by Spritle, as a skeleton to handle your SaaS use cases.'" 
      :cb-url="'/open-source-ruby-gem/'" 
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
                        <h1>Open Source Ruby Gem for Subscriptions</h1>
                        <br>
                        <h4>Sample Implementation to integrate with Chargebee</h4>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                        <div class="cb-cp-contentpart">
                            <p>This Ruby Gem implementation can be used as a skeleton to handle your SaaS use cases and build your subscription module.</p>
                            <br>
                            <div class="text-center mar-b-md">
                                <a href="https://github.com/spritlesoftware/chargebee-rails-subscriptions" class="btn btn-sm btn-success btn-outline-success" target="_blank"><span style="font-size: 18px; margin-right: 6px; margin-top: -2px; display: inline-block;"></span>View source code</a>
                            </div>
                            
                            <div class="cb-cp-list">
                                <h3>What’s it for?</h3>
                                    Chargebee has a REST API and a Ruby wrapper built on it and yet, as a developer, in order to integrate a billing platform onto your SaaS application, you would have to:
                                <ul>
                                    <li>Build a basic boilerplate code and write database models for your subscription integration module,</li>
                                    <li>Build a of wrapper APIs for various billing scenarios that would normally occur in your application, and,</li>
                                    <li>Write a password protected webhook handler, to sync the data between Chargebee and your application,</li> 
                                </ul>

                            </div>

                            <div class="cb-cp-list">
                                <p>We understand that you value time and effort in building your product. So, writing a code to integrate subscription billing into your SaaS should be the last of your worries.</p>

                                <h3>Summary</h3>
                                <p>The open source Ruby Gem consists of a boilerplate template that addresses core subscription billing use cases. This should save significant hours of development & testing time. We estimate it to be approximately 20-60 hours depending on your needs.</p>
                                
                                <h3>What can this gem do?</h3>
                                <p>It gives you most of the subscription billing codes relevant to a SaaS business. Apart from basic subscription management, it handles:</p>
                                <ul>
                                    <li>Subscription upgrade & downgrade scenarios.</li>
                                    <li>Estimate API to show the order summary & charges before the customer confirms the subscription changes. This is to show the customer what they would pay after the change.
                                    </li>
                                    <li>Setting up of relevant db models to store subscription data.</li>
                                    <li>Handling webhooks notifications from Chargebee to ensure that the data is in sync with your application.</li>
                                </ul><br>
                                <p>Wait.. there’s more!</p>
                                <p>The gem also offers:</p>
                                <ul>
                                    <li>Built in webhook handling controllers that you can simply inherit and override. </li>
                                    <li>APIs to handle various subscription billing scenarios.</li>
                                    <li>A customizable template to track metered billing usage.</li>
                                </ul>
                            
                                <p>The open source Ruby gem was built by our development partner <a href="https://www.spritle.com/" target="_blank">Spritle</a>, a dev agency that specializes in RAILS. Do give it a spin and email us at chargebee@spritle.com for any queries. If you need an implementation partner, you may contact the nice guys at Spritle. </p>
                            </div>

                            <section  class="cb-cp-adv mar-y-md">
                                <div class="media">
                                    <div class="media-left">
                                        <img src="/static/website/version/images/open-source/spritle-logo.png" width="100">
                                    </div>
                                    <div class="media-body">
                                        <div style="margin-left:20px;">
                                            Spritle is a software company that builds data and UX intensive web applications using Ruby on Rails and Node.js
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

