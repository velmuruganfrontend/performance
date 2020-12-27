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
      :cb-title="'MRR Projections - Forecast your business\'s recurring revenue'" 
      :cb-desc="'Gain revenue foresights of your SaaS buiness through MRR projections.'" 
      :cb-url="'/resources/tools/mrr-projections/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/new-header.css,/static/website/version/styles/resources/tools/mrr-projections/style.css'"
      :cb-head-script="''"
      :cb-body-script="'/static/website/version/scripts/highchart.js,/static/website/version/scripts/mrr-projections.js'"
      :cb-has-noindex="false" />
    <!-- ===================================================================
    End: Meta Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <div class="cb-body">
        <!-- Start Header -->
        <header class="header">
            <div class="container-fluid">
                <div class="tbl-md">
                    <div class="tbl-cell">
                        <a href="/" class="logo">
                            <img src="/static/resources/brand/chargebee-logo-white.svg" alt="Chargebee Logo" width="100">                            
                        </a>
                    </div>
                    <div class="tbl-cell">
                        <nav class="nav-sub">
                            <ul>
                                <li>
                                    <a href="" class="btn-media btn-ghost btn-twitter" onclick="ga('send', 'event', 'website', 'signup-intent', 'nav-signup');">Tweet</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <section class="hero-sec" style="margin-bottom:40px;">
            <div class="container text-center">
                <article>
                    <h1>MRR PROJECTIONS</h1>            
                </article>
            </div>
        </section>
        
        <div class="masterWrap container">
            <div class="form-inline">
                <div class="form-group">
                  <label for="newCustomers">New Customers every month</label>
                  <div><input type="text" class="form-control no-unit" id="newCustomers" value="100"></div>
                </div>
                <div class="form-group">
                  <label for="growth">Growth every month</label>
                  <div class="perc"><input type="text" class="form-control" id="growth" value="3"></div>
                </div>
                <div class="form-group">
                  <label for="arpu">Average Revenue per User</label>
                  <div class="dollar"><input type="text" class="form-control" id="arpu" value="60"></div>
                </div>
                <div class="form-group">
                  <label for="netChurn">Net Churn Rate</label>
                  <div class="perc"><input type="text" class="form-control" id="netChurn" value="4"></div>
                </div>
                <div class="form-group">
                  <label for="mrrNow">MRR Now</label>
                  <div class="dollar"><input type="text" class="form-control" id="mrrNow" value="52000"></div>
                </div>
                <div class="form-group goal">
                  <label for="mrrGoal">MRR Goal</label>
                  <div class="dollar"><input type="text" class="form-control" id="mrrGoal" value="86000"></div>
                </div><!-- 
                <button type="submit" class="btn btn-primary">Submit</button> -->
            </div>
            <div class="container" id="chartWrap"></div>
        </div><!-- /.container -->

        <table class="table expanded">
            <thead class="thead-deafu">
                <tr>
                    <th>#</th>
                    <th>Now</th>
                    <th>1 mo+</th>
                    <th>2 mo+</th>
                    <th>3 mo+</th>
                    <th>4 mo+</th>
                    <th>5 mo+</th>
                    <th>6 mo+</th>
                    <th>7 mo+</th>
                    <th>8 mo+</th>
                    <th>9 mo+</th>
                    <th>10 mo+</th>
                    <th>11 mo+</th>
                    <th>12 mo+</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-begMo">
                    <th scope="row">MRR</th>                    
                </tr>
                <tr class="table-newMRR">
                    <th scope="row">New MRR</th>

                </tr>
                <tr class="table-lostMRR">
                    <th scope="row">Lost MRR</th>
                    
                </tr>                
            </tbody>
        </table>

        <div class="container promotion">
            <h2>The smartest way to setup your subscription billing </h2>
            <a class="btn" href="https://chargebee.com">Learn More</a>
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