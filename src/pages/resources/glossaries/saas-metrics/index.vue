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
  <div style="background-color: #f2f2f2">
    <!-- ===================================================================
    Start: Meta Section
    ==================================================================== -->
    <app-meta 
      :cb-title="'SaaS Metrics - Chargebee'" 
      :cb-desc="'SaaS Metrics are special tools that help us sight and sense where a business is, and where it\'s headed. Learn all about them.'" 
      :cb-url="'/resources/glossaries/saas-metrics/'" 
      :cb-image="'/static/resources/og/resource/glossaries/saas-metrics/saas-metrics.png'"
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
​       <!-- ===============================================================
                            Start Banner Part  
        ===============================================================-->
        <section class="hero hero--invert" style="background-image: none; ">
         <div class="container">
            <article>
                <h1>SaaS Metrics 101</h1>
                <p>Everything you need to know about the crucial metrics that matter</p>

            </article>
         </div>
        </section>
        <!-- ================= End Banner part =================  -->
        <!-- ===============================================================
                            Start Content Part  
        ===============================================================-->
        <section class="container">
            <div class="row">
                <!-- section 1 -->
                <div class="col-sm-6 col-md-4">
                    <!-- ==================================== 
                    Churn section start
                     ==================================== -->
                     <div class="cb-panel">
                        <div class="cb-panel__header">
                            <div class="cb-panel__title">MRR</div>
                            <div class="cb-panel__desc">Monthly Recurring Revenue</div>
                        </div>
                        <div class="cb-panel__content">
                            <ul class="cb-panel__list">
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/monthly-recurring-revenue#what-is-mrr">What is MRR?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/monthly-recurring-revenue#how-to-calculate-mrr">How to calculate MRR? </a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/monthly-recurring-revenue#measure-mrr-growth">How is MRR growth measured? </a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/monthly-recurring-revenue#segment-mrr">How to look at MRR with segments</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/monthly-recurring-revenue#where-mrr-fails">Where MRR fails</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                    <!-- ==================================== 
                    Churn section end
                     ==================================== -->
                     <!-- ==================================== 
                    Bookings section start
                     ==================================== -->
                    <div class="cb-panel cb-panel--red">
                        <div class="cb-panel__header">
                            <div class="cb-panel__title">Bookings</div>
                        </div>
                        <div class="cb-panel__content">
                            <ul class="cb-panel__list">
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/saas-bookings#understanding-saas-bookings">What is Bookings in the world of SaaS?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/saas-bookings#saas-bookings-revenues">What does Bookings mean for your business?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/saas-bookings#bookings-metric-sales-team">Who should care about Bookings?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/saas-bookings#saas-metrics-bookings-calculation">How do you calculate and optimize Bookings for your SaaS business? </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <!-- ==================================== 
                    Bookings section end
                     ==================================== -->
                </div>
                <!-- ============================================================================================= 
                    section 2
                ============================================================================================== -->
                <div class="col-sm-6 col-md-4">
                     <!-- ==================================== 
                    CAC section start
                     ==================================== -->
                    <div class="cb-panel cb-panel--blue">
                        <div class="cb-panel__header">
                            <div class="cb-panel__title">CAC</div>
                            <div class="cb-panel__desc">Customer Acquisition Cost</div>
                        </div>
                        <div class="cb-panel__content">
                            <ul class="cb-panel__list">
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/customer-acquisition-cost/#what-is-cac">What is CAC?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/customer-acquisition-cost/#how-to-calculate-cac">How is it calculated?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/customer-acquisition-cost/#how-to-look-at-cac">How do you look at CAC?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/customer-acquisition-cost/#cac-ltv-ratio">Lifetime Value and CAC/LTV Ratio</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/customer-acquisition-cost/#reduce-cac">How to optimize for CAC?</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==================================== 
                    CAC section end
                     ==================================== -->
                     <!-- ==================================== 
                    MRR section start
                     ==================================== -->
                     <div class="cb-panel cb-panel--pink">
                        <div class="cb-panel__header">
                            <div class="cb-panel__title">ARPU</div>
                            <div class="cb-panel__desc">Average Revenue Per User</div>
                        </div>
                        <div class="cb-panel__content">
                            <ul class="cb-panel__list">
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/arpu/#metric-revenue">Why are metrics revenue-focussed?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/arpu/#what-is-arpu">What is ARPU?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/arpu/#calculating-arpu">How do you calculate ARPU?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/arpu/#optimize-arpu">How do you optimize for ARPU?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/arpu/#why-is-arpu-important">Why is ARPU important?</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- ==================================== 
                    MRR section end
                     ==================================== -->
                </div>
                <!-- ============================================================================================= 
                    section 3
                ============================================================================================== -->
                <div class="col-sm-6 col-md-4">
                     <!-- ==================================== 
                    CAC section start
                     ==================================== -->
                    <div class="cb-panel cb-panel--green">
                        <div class="cb-panel__header">
                            <div class="cb-panel__title">Churn</div>
                        </div>
                        <div class="cb-panel__content">
                            <ul class="cb-panel__list">
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/churn#what-is-churn-rate">What is churn rate and why you should care</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/churn#customer-churn-rate-formula">The fantastic churn rates and how to calculate them</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/churn#churn-analysis-best-practices">Wisdom nuggets for the churn nerds</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a href="/resources/glossaries/saas-metrics/churn#customer-retention-engagement">Churn is just the aftermath </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==================================== 
                    CAC section end
                     ==================================== -->
                     <!-- ==================================== 
                    MRR section start
                     ==================================== -->
                    <div class="cb-panel cb-panel--orange">
                        <div class="cb-panel__header">
                            <div class="cb-panel__title">LTV <span class="cb-panel__soon">Coming soon</span></div>
                            <div class="cb-panel__desc">Lifetime Value</div>
                        </div>
                        <div class="cb-panel__content">
                            <ul class="cb-panel__list">
                                <li class="cb-panel__item">
                                    <a>What is LTV?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a>Why is it important?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a>How to calculate LTV?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a>How to optimize for LTV?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a>How to look at it?</a>
                                </li>
                                <li class="cb-panel__item">
                                    <a>Why is it important?</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- ==================================== 
                    MRR section end
                     ==================================== -->
                </div>
            </div>
        </section>
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
        $('.con__question-group ul > li').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
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