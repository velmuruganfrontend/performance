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
      :cb-title="'SaaS Accounting for revenue recognition - Resources - Chargebee'" 
      :cb-desc="'Demystifying SaaS Accounting for revenue recognition.'" 
      :cb-url="'/resources/guides/saas-accounting-101/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/resources.css'"
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
​       <!-- InstanceBeginEditable name="Page Content" -->
        <section class="clearfix ProximaNova block-space book-index text-15">
            <div class="container">
                <ol class="breadcrumb">
                    <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
                        <a href="/resources/" itemprop="url">
                            <span itemprop="title">Chargebee Resources</span>
                        </a>
                    </li>
                    <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child" class="active">
                        <a href="/resources/guides/saas-accounting-101/" itemprop="url">
                            <span itemprop="title">SaaS Accounting 101</span>
                        </a>
                    </li>
                </ol>
                <div class="row">
                    <div class="col-md-4 book-thump">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="/static/website/version/images/resources/saas-accounting-revenue-recognition/saas-accounting.png" class="img-responsive" style="margin-bottom: 10px;">
                            </div>
                        </div>
                        <h1>SaaS Accounting 101</h1>
                        <p>Demystifying SaaS Accounting for revenue recognition.</p>
                        <a href="/resources/guides/saas-accounting-101/preface" class="btn btn-success">READ ONLINE</a>
                        <a style="display:none" class="btn btn-default">GET THE PDF</a>
                    </div>
                    <div class="block-space-sm visible-xs visible-sm">&nbsp;</div>
                    <div class="col-md-8 book-chapter">
                        <div class="row">
                            <div class="col-sm-5">
                                <a href="/resources/guides/saas-accounting-101/preface/"><p class="text-success text-18 ProximaNova-Bold"></p>
                                <h2 class="text-24">Preface</h2>
                                <div class="text-muted">Delving deeper into the basics of SaaS Accounting.</div></a>
                            </div>
                            <hr class="clearfix visible-xs">
                            <div class="col-sm-5 col-sm-offset-1">
                                <a href="/resources/guides/saas-accounting-101/revenue-accounting-saas/"><p class="text-success text-18 ProximaNova-Bold">Chapter 1</p>
                                
                                <h2 class="text-24">Revenue Accounting</h2>
                                <div class="text-muted">Revenue Accounting in the World of SaaS.</div></a>
                            </div>
                        </div>
                        <div class="row">
                            <hr class="clearfix">
                        </div>
                        <div class="row">
                            <div class="col-sm-5">
                                <a href="/resources/guides/saas-accounting-101/difference-between-booking-billing-revenue-and-mrr/"><p class="text-success text-18 ProximaNova-Bold">Chapter 2</p>
                                <h2 class="text-24">Terminology</h2>

                                <div class="text-muted">Difference between Booking, Billing, Revenue and MRR.</div></a>
                            </div>
                            <hr class="clearfix visible-xs">
                            <div class="col-sm-5 col-sm-offset-1">
                                <a href="/resources/guides/saas-accounting-101/best-practices-in-revenue-recognition/"><p class="text-success text-18 ProximaNova-Bold">Chapter 3</p>
                                <h2 class="text-24">Revenue Recognition</h2>
                                <div class="text-muted">Best practices in Revenue Accounting and Recognition.</div></a>
                            </div>
                        </div>
                        <div class="row">
                            <hr class="clearfix">
                        </div>
                        <div class="row">
                            <div class="col-sm-5">
                                <a href="/resources/guides/saas-accounting-101/scenarios/"><p class="text-success text-18 ProximaNova-Bold">Chapter 4</p>
                                <h2 class="text-24">Revenue Recognition Scenarios</h2>
                                <div class="text-muted">Subscription scenarios for revenue recognition and deferred revenue calculation</div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-secondary resource-form-block" id="ebook-subscribe">
            <div class="container text-center whitec block-space">
                <p class="text-24">Subscribe to receive new chapters as soon as they're published</p>
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <form action="//chargebee.us4.list-manage.com/subscribe/post?u=e11a967531022bc3af44ad5ea&amp;id=88bf3b18c6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate form" target="_blank" novalidate>
                            <div class="input-group">
                                <input type="text" name="EMAIL" class="required email form-control" id="mce-EMAIL" placeholder="Enter your email">
                                <span class="input-group-btn">
                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-success">
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- InstanceEndEditable -->  
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
<style type="text/css">.signup-block{display: none;}</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->