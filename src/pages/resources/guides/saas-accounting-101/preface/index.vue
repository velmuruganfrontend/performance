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
      :cb-title="'SaaS Accounting 101: Preface'" 
      :cb-desc="'SaaS Accounting 101: Preface'" 
      :cb-url="'/resources/guides/saas-accounting-101/preface/'" 
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
        <!-- InstanceBeginEditable name="Page Content" -->
        <section class="block-space banner-block-overlay book-banner" style="background-image:url(/static/website/version/images/resources/saas-accounting-revenue-recognition/preface.jpg);background-size:cover;">
            <div class="container">
                <ol class="breadcrumb">
                    <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
                        <a href="/resources/" itemprop="url">
                            <span itemprop="title">Chargebee Resources</span>
                        </a>
                    </li>
                    <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child">
                        <a href="/resources/guides/saas-accounting-101/" itemprop="url">
                            <span itemprop="title">SaaS Accounting 101</span>
                        </a>
                    </li>
                    <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child" class="active">
                        <a href="/resources/guides/saas-accounting-101/revenue-accounting-saas/" itemprop="url">
                            <span itemprop="title">Preface</span>
                        </a>
                    </li>
                </ol>
                <div class="text-center">
                    
                    <h1>Preface</h1>
                    <h2>Delving deeper into the basics (and not-so-basic) of SaaS Accounting</h2>
                    <a href="/resources/guides/saas-accounting-101/preface/#intro" class="btn">READ MORE</a>
                </div>
            </div>
        </section>
        
        <div id="intro" class="container block-space">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="book-text">
                        <p>Luca Pacioli introduced the idea of bookkeeping with the medieval Venetian accounting in the 15th century. He inadvertently got the merchants of Venice to adapt to the demands of the industrial age. Since then, he is often referred to as the Father of Accounting and Bookkeeping.</p>
                        
                        <p>Accounting and bookkeeping has since been an age old practice for businesses. And over the years, it has moved from offline to online. But the question remains - when should you start worrying about accounting for your business? As an early stage company, or when you grow into an SMB or as an enterprise business, when should accounting become part of your business activities?</p>

                        <p>The answer is, right from the absolute beginning.</p>

                        <p>From a grocery shop owner, to a fashion entrepreneur. From an eCommerce wiz to a vegetable vendor. From a small app-based business, to a large SaaS enterprise. Everyone needs to keep track of the money that is flowing in and out of their businesses. Accounting is essential.</p>


                        <p>So we started the eBook with the idea of writing a simple post on the how-to’s of accounting in the SaaS world, to make the accountant as well as the founder-who-doubles-up-as-an-accountant’s life easier.</p>

                        <p>We thought it was time we delved deeper into the basics (and not-so-basic) of SaaS Accounting for those breaking their heads with bookkeeping nightmares.</p>

                        <p>We have tried to gather all the tacit knowledge from our international finance team, product domain experts and the best practices to put together the basics of SaaS account.<p>

                        <p>Hope you enjoy reading this as much as we did writing it!</p>

                    </div>

                    <div class="book-nav block-space">
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-6">
                                <a href="/resources/guides/saas-accounting-101/revenue-accounting-saas/">
                                    <p>Next Chapter</p>
                                    <h4>REVENUE ACCOUNTING</h4>
                                    <div class="text-muted">When SaaS Meets Accounting</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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