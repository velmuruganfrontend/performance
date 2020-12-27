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
      :cb-title="'Tools - Chargebee'" 
      :cb-desc="'Tools - Chargebee'" 
      :cb-url="'/tools/'" 
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
    <div class="cb-body pad-top-head-height">
        <div id="labs">    
            <section class="well no-round no-bor no-mar no-pad">
                <div class="container text-center block-space">
                    <h1 class="ProximaNova-Bold hr-line uppercase">Tools</h1>
                    <!-- <p class="text-28 SourceSans-Light no-mar">#</p> -->
                </div>
            </section>
            <hr class="no-mar">
            <div class="container block-space ">  
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <ul class="list-unstyled">
                            <li>
                                <h5><a href="/resources/tools/mrr-projections/">MRR Projections Tool</a></h5>
                                <p>Enter your current recurring revenue and predict when you will reach your MRR goal.</p><br>
                            </li>
                            <li>
                                <h5><a href="/resources/tools/break-even-analysis/">Break Even Analysis Calculator</a></h5>
                                <p>Use our analysis calculator to identify your business' break-even point or the level of business activity required to achieve your desired financial return.</p><br>
                            </li>
                            <li>
                                <h5><a href="/payment-gateways/evaluator-tool/">Payment Gateway Evaluator</a></h5>
                                <p>Compare payment gateways based on processing fees and find your best fit.</p><br>
                            </li>                                     
                        </ul>
                    </div>
                </div>
            </div>  
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