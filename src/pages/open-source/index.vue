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
      :cb-title="'Open Source projects for subscription management'" 
      :cb-desc="'Manage your subscription and billing requirements using Chargebee\'s open source resources. Open Source Customer Portal | Ruby Gem | Laravel'" 
      :cb-url="'/open-source/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/open-source.css'"
      :cb-head-script="''"
      :cb-body-script="''"
      :cb-has-noindex="false"
      :disable-bootstrap-css="true"
      :disable-header-footer-css="true" />
    <!-- ===================================================================
    End: Meta Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <div class="cb-body">
      <section class="page-header">
        <h1 class="project-name">Open Source Projects<br> For Subscription Management</h1>
      </section>
      <section class="main-content">
        
        
        <!-- <h3><a id="customer-portal" class="anchor" href="#customer-portal" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Customer Portal</h3> -->
        <p><span class="pocket2-title"><a href="https://github.com/chargebee/customer-portal-php" target="_blank">Customer Portal:</a></span> Customize our open source version of the Customer Portal to suit your growing business needs
        </p>

        <!-- <h3><a id="ruby-gem" class="anchor" href="#ruby-gem" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Ruby Gem</h3> -->

        <p><span class="pocket2-title"><a href="https://github.com/spritlesoftware/chargebee-rails-subscriptions" target="_blank">Ruby Gem:</a></span> Integrate Chargebee onto your application faster using the Open Source Ruby Gem developed by Spritle. </p>

        <!-- <h3><a id="laravel-chargebee-package" class="anchor" href="#laravel-chargebee-package" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Laravel Chargebee Package</h3> -->


        <p><span class="pocket2-title"><a href="https://github.com/TijmenWierenga/LaravelChargebee" target="_blank">Laravel Chargebee Package:</a></span> Fast track your subscription implementation using the Laravel Framework and Bundle developed by Tijmen Wierenga.</p>

        <hr>
              <h3>
        <a id="what-does-chargebee-do" class="anchor" href="#what-does-chargebee-do" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>What does Chargebee do?</h3>

        <p>Chargebee is a subscription management system that handles recurring billing, invoicing and life cycle management of your customers. We provide an integration with popular <a href="https://www.chargebee.com/payment-gateways/" target="_blank">payment gateways like Stripe, Braintree, PayPal</a> etc. You can easily connect your gateway account to Chargebee and start processing transactions.</p>

        <h3>
        <a id="how-to-use-chargebee" class="anchor" href="#how-to-use-chargebee" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>How to use Chargebee?</h3>

        <p>As an early stage Company, you may choose to configure the features present in Chargebee and get started immediately. Chargebee has a robust API, a lot of businesses start with the <a href="https://www.chargebee.com/docs/integration-options.html#only-hosted-pages" target="_blank">hosted page integration</a> and transition to a full fledged <a href="https://www.chargebee.com/docs/integration-options.html#complete-api-integration" target="_blank">API integration</a>.</p>

        <h3>
        <a id="so-why-the-open-source-initiative" class="anchor" href="#so-why-the-open-source-initiative" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Why the open source initiative?</h3>

        <p>Our customers are global, diverse (SaaS, eCommerce &amp; Services) and come across interesting use cases faster than us. We constantly incorporate these use cases to improve our product but some features are prioritized over others based on the number of requests, bandwidth etc.</p>

        <p>A fast growing startup has it’s own will. It requires feature enhancements that goes over &amp; beyond standard features. The features should not only address requirements specific to the business but also be executed ASAP (like yesterday!). When implemented, they can play a pivotal role in taking the business to new heights or in simply making things a lot easier. </p>

        <p>We wanted to step out of the way, give you the flexibility to include any feature you like and let you take full control. Additionly, our partners and customers also made contributions and thus came about the open source initiative. </p>
      </section>
    </div>
    <!-- ===================================================================
    End: Body Section
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
  
  export default {
    components: {
      'app-meta': AppMeta
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

