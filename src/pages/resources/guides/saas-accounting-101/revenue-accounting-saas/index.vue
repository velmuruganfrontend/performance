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
      :cb-title="'Revenue Accounting in the World of SaaS'" 
      :cb-desc="'The shift from licensed software to SaaS has resulted in significant SaaS accounting challenges, especially in terms of understanding revenue accounting.'" 
      :cb-url="'/resources/guides/saas-accounting-101/revenue-accounting-saas/'" 
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
        <section class="block-space banner-block-overlay book-banner" style="background-image:url(/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-accounting.jpg);background-position:center bottom;">
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
                            <span itemprop="title">Revenue Accounting in the World of SaaS</span>
                        </a>
                    </li>
                </ol>
                <div class="text-center">
                    <p>CHAPTER 1 </p>
                    <h1>Revenue Accounting in the World of SaaS</h1>
                    <h2>When SaaS meets Accounting...</h2>
                    <a href="/resources/guides/saas-accounting-101/revenue-accounting-saas/#intro" class="btn"> READ MORE</a>
                </div>
            </div>
        </section>
        
        <div id="intro" class="container block-space">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="book-text">
                        <p>There is a significant paradigm shift today, from using perpetual licensed model of software, towards using a hosted software, or software-as-a-service (SaaS). A lot has been written about the benefits of the SaaS model. </p>
                        
                        <p>In software, broadly licenses are recognised on delivery. They are categorised into term-based vs capacity-based or perpetual license. For term-based license, the revenue is accounted over the term of the license. As for the capacity-based or perpetual license, the revenue is recognized upfront, when the license in delivered.</p>

                        <p>Additionally, the line items in the traditional license model is different as opposed to hosted services. Typically, the line items for revenue recognition in  include licence fee which is broken down further to initial license fee or a capacity license fee, implementation and customization fee, Annual maintenance support fee. In a subscription model, all these are bundled into a subscription fee. You may also have a setup fee over the subscription fee. </p>

                        <p>The revenue recognition for each of these components differ. For instance, the revenue for license fees can be immediately recognized, whereas, the implementation and customization fee or the AMC fee will be recognized over a period of time. </p>


                        <p>With the shift in traditional software licensing business models to SaaS model by business owners, the success of the business does not depend anymore on how many softwares are sold, but instead, on how many customers are willing to use your product on a recurring basis. </p>

                        <p>The way we evaluate financial aspects such as capital, profitability etc. changes in SaaS merely because of the nature of service being delivered on a recurring basis. </p>

                        <p>Additionally, the customer ROI becomes a key differentiating factor over the product ROI, where the value of the customer is realized over the duration of the relationship. <p>

                        <p>With the shift to hosted software (single tenant or multi-tenant), the key accounting issue remains in understanding what should be accounted for - the sale of a software or of a service. </p>

                        <p>If you view it as a software, you recognize revenue as soon as the software is delivered. But in case of the service, you keep recognizing revenue over the duration of customer’s relationship with the service provider. </p>

                        <p>The answer to SaaS Accounting is provided by Accounting software such as Quickbooks, Xero, Sage, NetSuite or SAP which are quite exhaustive in functionality to manage all accounts receivables, payables, taxation and many reports around finances. </p>

                        <p>There are accounting software that are trying to solve the problem of automated bookkeeping. There are also fintech companies like <a href="https://www.swayfinance.com/#/" target="_blank">this</a>, that sell Slack bots for accounting management.</p>

                    </div>

                    <div class="book-nav block-space">
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-6">
                                <a href="/resources/guides/saas-accounting-101/difference-between-booking-billing-revenue-and-mrr/">
                                    <p>Next Chapter</p>
                                    <h4>Booking, Billing, Revenue and MRR</h4>
                                    <div class="text-muted">Similar Accounting Terms. Different Meanings.</div>
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