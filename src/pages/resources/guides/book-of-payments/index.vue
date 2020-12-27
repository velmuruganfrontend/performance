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
      :cb-title="'The Little Red Book of Payments - Resources - Chargebee'" 
      :cb-desc="'This ebook is a comprehensive guide to tread the jargon ridden waters of online payment processing.'" 
      :cb-url="'/resources/guides/book-of-payments/'" 
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
                        <a href="/resources/guides/book-of-payments/" itemprop="url">
                            <span itemprop="title">The Little Red Book of Payments</span>
                        </a>
                    </li>
                </ol>
                <div class="row">
                    <div class="col-md-4 book-thump">
                        <div style="background-image:url(/static/website/version/images/resources/the-little-red-book-of-payments/the-little-red-book-of-payments@2x.png);width:180px;height:255px;margin-bottom:30px;background-size:cover;"></div>
                        <h1>The Little Red Book of Payments</h1>
                        <p>Everything you need to know about processing payments online.</p>
                        <a href="/resources/guides/book-of-payments/tread-the-terms/" class="btn btn-success">READ ONLINE</a>
                        <a style="display:none" class="btn btn-default">GET THE PDF</a>
                    </div>
                    <div class="block-space-sm visible-xs visible-sm">&nbsp;</div>
                    <div class="col-md-8 book-chapter">
                        <div class="row">
                            <div class="col-sm-5">
                                <a href="/resources/guides/book-of-payments/tread-the-terms/"><p class="text-success text-18 ProximaNova-Bold">Chapter 1</p>
                                <h2 class="text-24">Tread the Terms</h2>
                                <div class="text-muted">Common terminology. Tackled. Demystified.</div></a>
                            </div>
                            <hr class="clearfix visible-xs">
                            <div class="col-sm-5 col-sm-offset-1">
                                <a href="/resources/guides/book-of-payments/merchant-account/"><p class="text-success text-18 ProximaNova-Bold">Chapter 2</p>
                                <h2 class="text-24">Merchant Account</h2>
                                <div class="text-muted">The what. The how. And the other stuff. </div></a>
                            </div>
                        </div>
                        <div class="row">
                            <hr class="clearfix">
                        </div>
                        <div class="row">
                            <div class="col-sm-5">
                                <a href="#ebook-subscribe" class="text-muted">
                                    <p class="text-18 ProximaNova-Bold">Chapter 3</p>
                                    <h2 class="text-muted text-24">Fees</h2>
                                    <div class="text-muted">Your money, goes here.</div>
                                </a>
                            </div>
                            <hr class="clearfix visible-xs">
                            <div class="col-sm-5 col-sm-offset-1">
                                <a href="#ebook-subscribe" class="text-muted">
                                    <p class="text-18 ProximaNova-Bold">Chapter 4</p>
                                    <h2 class="text-muted text-24">PCI</h2>
                                    <div class="text-muted">Security standards and requirement.</div>
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <hr class="clearfix">
                        </div>
                        <!--<div class="alert alert-info"><h6>CONTRIBUTORS</h6> Akash Sharma, Adithya Thoomati, John Green & Barbara Moore</div>-->
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