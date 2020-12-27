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
      :cb-title="'Best Practices in Revenue Recognition'" 
      :cb-desc="'SaaS Accounting 101 - When SaaS meets Accounting… The basics of Billing, Revenue etc in the world of accounting.'" 
      :cb-url="'/resources/guides/saas-accounting-101/best-practices-in-revenue-recognition/'" 
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
        <section class="block-space banner-block-overlay book-banner" style="background-image:url(/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-recognition.jpg);background-position:center bottom;">
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
                        <a href="/resources/guides/saas-accounting-101/best-practices-in-revenue-recognition//" itemprop="url">
                            <span itemprop="title">Revenue Recognition</span>
                        </a>
                    </li>
                </ol>
                <div class="text-center">
                    <p>CHAPTER 3 </p>
                    <h1>Best Practices in Revenue Recognition</h1>
                    <h2>Revenue Accounting and Recognition, demystified.</h2>
                    <a href="/resources/guides/saas-accounting-101/best-practices-in-revenue-recognition/#intro" class="btn">READ MORE</a>
                </div>
            </div>
        </section>
        
        <div id="intro" class="container block-space">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="book-text">
                        <p><b>Revenue Recognition for Subscription Businesses</b></p>

                        <p>Generally Accepted Accounting Principles (GAAP) and International Financial Reporting Standards (IFRS), both dictate that businesses cannot claim a revenue to be theirs, until and unless they render the service for the amount to the customer.</p>

                        <p>For business owners that bill their customers in advance, it can be incredibly tempting to recognize this amount as a revenue and look good to stakeholders and investors, without having the service delivered. However, businesses need to be prudent, in that, they should avoid showing the revenue on paper as being the same as what is in hand.</p>

                        <p>This means that businesses have to track the money that flows in, and how much of it is actually recognized.</p>

                        <p><b>How to use Deferred Revenue Account for better Revenue Recognition</b></p>

                        <p>A classic method to recognize revenue dictates the use of a common account called deferred revenue, which is fundamentally a routing account. So whenever an invoice is raised, you always route through the deferred revenue account.</p>

                        <p>For any accounting entry we pass, we need to take into consideration two accounts - the debit account and the credit account. In the example of the enterprise customer mentioned above, you are billing $12000 in the month of January. In that case, you debit your account receivable of $12000, and you credit that amount into the deferred revenue account. </p>

                        <p>This deferred revenue, thus, becomes the control account. What businesses typically do after billing is, book receivables of $12000 and sales of $12000, with the assumption that a sale of $12000 has happened. However, by end of the month, they realise that their revenue is not $12000 in real, but, say, $1000, for any number of reasons. </p>

                        <p>In such a case, they would reverse the $11000 from the sales account into the deferred revenue account, and keep only $1000 in the sales account. </p>

                        <p>A better approach is one that involves using the deferred revenue as a routing account. Whenever you raise invoice or credit note, the impact should always be on the deferred revenue, and when you want to recognize your revenues, you move $1000 from deferred revenue into the sales account. </p>

                        <p>This is the classic methodology that should be followed for revenue recognition, i.e., always routing it through a control account, so that, at any given point of time, you don’t miss out on overlooking the control account. </p>


                        <p><b>Tax Accounting</b></p>

                        <p>Sales Tax, EU-VAT, GST, Google Tax, Netflix Tax… The list is taxing and endless. When it comes to tax accounting, the tax aspect of any billing is moved into the tax account, which is then remitted to a relevant department of taxes. </p>

                        <p><b>Receivables Accounting</b></p>

                        <p>You recognise that your customer has to pay you money, the minute you have invoiced him. But there could be a situation where a customer ends up not paying beyond the due date. At that time, you may want to take a call whether you want to write off this receivable. And if you do, you move it to an account called bad debts in the expense account. In effect, you have written off the debt that is no longer recoverable and move it into the expense account. </p>

                        <p>But when it is reported, this amount is adjusted against your revenue numbers. How?</p>

                        <p>Say you billed a customer, to the extent of $20000 in February. In March, the customer declares that his company is defunct and does not pay. In that case, you recognise this $20000 to be a bad debt and push it into in your expense account. </p>

                        <p>In your financial statement, you will look like you have a revenue of $20000, along with the other expenses, and the same $20000 will be shown in your bad debt expense too. But if one were to look at the revenues alone, it could look like the revenues have been overstated. </p>

                        <p>Because, when you enter $20000 in revenues, it is in the assumption that you are going to get paid by the customer. But once you realize that the customer is not going to pay, you will enter that amount as your expense. In reality, you have not made that revenue, despite your market positioning showing a positive sign. A matter of perception there. </p>

                        <p>A better way of looking at revenue is, setting the bad debt expense with you revenues., so you get a more realistic and less inflated view of your actual revenues.</p>


                        <p><b>Discount Accounting</b></p>

                        <p>In many cases, companies track discounts separately, but when they report discounts, they show it against revenues. </p>

                        <p>Assume that you have billed $1000 to a customer with a 90% discount. You may assume that this will qualify as an expense. But in this case, this is a price reduction as opposed to being considered as an additional expense in running your business. </p>

                        <p>For prudent practice, it makes sense to set this up against revenues as, otherwise, it could skew your numbers depending on how you want to show your financial reports to the external world. </p>

                        <p><b>Revenue Analysis</b></p>

                        <p>What is also important on the revenue accounting side is to classify the revenue from different plans. You may want to know which plan generates how much revenue. </p>

                        <p>So typically, the revenue as well as deferred revenue analysis can be retrieved in the following ways - </p>

                        <ul>
                            <li>Subscription Revenue</li>
                                <ul>
                                    <li>By Subscription</li>
                                        <ul>
                                            <li>Plan-based / Fixed revenue</li>
                                            <li>Metered Revenue</li>
                                        </ul>
                                    <li>By Customer</li>
                                        <ul>
                                            <li>Plan-based / Fixed revenue</li>
                                            <li>Metered Revenue</li>
                                        </ul>
                                    <li>By Plan</li>
                                        <ul>
                                            <li>Plan-based / Fixed revenue</li>
                                            <li>Metered Revenue</li>
                                        </ul>
                                </ul>
                            <li>Revenue from other sources</li>
                                <ul>
                                    <li>Partnerships in the form of revenue share</li>
                                    <li>Referrals</li>
                                    <li>Other revenues such as interests</li>
                                </ul>
                        </ul>


                    </div>
                    <div class="book-nav block-space">
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-6">
                                <a href="/resources/guides/saas-accounting-101/scenarios/">
                                    <p>Next Chapter</p>
                                    <h4>Revenue Recognition Scenarios</h4>
                                    <div class="text-muted">When SaaS meets Accounting...</div>
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