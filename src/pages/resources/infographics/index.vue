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
  <div>
    <!-- ===================================================================
    Start: Meta Section
    ==================================================================== -->
    <app-meta 
      :cb-title="'Subscription Insights - Benchmark for Subscriptions - Chargebee'" 
      :cb-desc="'Every month, we analyse data from Chargebee’s global customer base across 45 countries, to deliver benchmarks that will quench your curiosity on the subscription business landscape.'" 
      :cb-url="'/resources/infographics/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/burger-menu.css'"
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
            <section class="clearfix ProximaNova block-space">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-6 col-md-offset-3">
                            <h1 class="ProximaNova">Subscription Insights</h1>
                            <p class="text-16">Every month, we analyse data from Chargebee’s global customer base across 45 countries, to deliver benchmarks that will quench your curiosity on the subscription business landscape.</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <div class="cb-divider"></div>
                            <div class="cb-media">
                                <div class="cb-media-left">
                                    <img src="/static/website/version/images/resources/dunning-subscription-benchmarks.png">
                                </div> 
                                <div class="cb-media-body cb-media-middle">
                                    <div>
                                        <p>What are the results you should expect for the dunning process vis-a-vis other subscription startups in your space?</p>
                                    </div>
                                    <div>
                                        <a href="/static/resources/downloads/infographics/dunning-benchmarks-for-subscriptions.pdf" class="btn btn-link" style="font-size:14px;padding:0; margin-top:12px;" target="_blank">Open Dunning for Subscriptions PDF</a>
                                    </div>
                                </div>
                            </div>
                            <div class="cb-divider"></div>
                            <div class="cb-media">
                                <div class="cb-media-left">
                                    <img src="/static/website/version/images/resources/saas-first-100-customers.png">
                                </div> 
                                <div class="cb-media-body cb-media-middle">
                                    <div>
                                        <p>How long does it take for SaaS companies to get their first 100 customers?</p>
                                    </div>
                                    <div>
                                        <a href="/static/resources/downloads/infographics/saas-usinesses-first-100 customers.pdf" class="btn btn-link" style="font-size:14px;padding:0; margin-top:12px;" target="_blank">Open SaaS Customer Benchmarks PDF</a>
                                    </div>
                                </div>
                            </div>
                            <div class="cb-divider"></div>
                            <div class="cb-media">
                                <div class="cb-media-left">
                                    <img src="/static/website/version/images/resources/saas-revenue-insights.png">
                                </div> 
                                <div class="cb-media-body cb-media-middle">
                                    <div>
                                        <p>How long does it take for SaaS companies to reach key revenue and MRR milestones?</p>
                                    </div>
                                    <div>
                                        <a href="/static/resources/downloads/infographics/saas-revenue-benchmarks.pdf" class="btn btn-link" style="font-size:14px;padding:0; margin-top:12px;" target="_blank">Open SaaS Revenue Benchmarks PDF</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
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