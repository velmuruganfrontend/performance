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
        :cb-title="'Thank You - Chargebee'" 
        :cb-desc="'Chargebee - Affordable Subscription Billing & Recurring Billing Solution for online web apps.'" 
        :cb-url="'/thank-you-checkout/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/thankyou-checkout.css'"
        :cb-head-script="''"
        :cb-body-script="''"
        :cb-has-noindex="true"
        :disable-bootstrap-css="false"
        :disable-header-footer-css="false" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <div class="cb-main__wrap">
              <main class="cb-main__content">
                <!-- ============================================================================-->
                <!-- Start: Main Content-->
                <!-- ============================================================================-->
                <section class="cb-section">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-9 col-sm-offset-3">
                        <div class="cw-logo"><img src="/static/resources/brand/chargebee-icon-brand.svg" class="img-responsive"/></div>
                        <p class="cw-status__text">Hold on a moment we're setting up<span class="cw-client__domain">freshworks.chargebee.com...</span></p>
                        <!-- ============================================================================-->
                        <!-- Start: Loader-->
                        <!-- ============================================================================-->
                        <div class="cw-loader__wrap">
                          <div id="myCarousel" class="carousel slide vertical">
                            <div class="carousel-inner cw-loader">
                              <div class="item cw-text__wrap active"><span>Building subscription management components</span></div>
                              <div class="item cw-text__wrap"><span>Setting up product &amp; plan units</span></div>
                              <div class="item cw-text__wrap"><span>Starting customer management components</span></div>
                              <div class="item cw-text__wrap"><span>Initiating billing &amp; invoicing operations</span></div>
                              <div class="item cw-text__wrap"><span>Commencing revenue recovery engine</span></div>
                            </div>
                          </div>
                        </div>
                        <!-- ============================================================================-->
                        <!-- End: Loader-->
                        <!-- ============================================================================-->
                      </div>
                    </div>
                  </div>
                </section>
                <!-- ============================================================================-->
                <!-- End: Main Content-->
                <!-- ============================================================================-->
              </main>
            </div>
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
    mounted() {
        $('.carousel').carousel({
          interval: 1100
        })
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
