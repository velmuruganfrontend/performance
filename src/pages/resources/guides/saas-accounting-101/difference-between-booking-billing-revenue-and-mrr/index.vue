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
      :cb-title="'Booking, Billing, Revenue and MRR'" 
      :cb-desc="'SaaS Accounting 101 - When SaaS meets Accounting… The basics of Billing, Revenue etc in the world of accounting.'" 
      :cb-url="'/resources/guides/saas-accounting-101/difference-between-booking-billing-revenue-and-mrr/'" 
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
        <section class="block-space banner-block-overlay book-banner" style="background-image:url(/static/website/version/images/resources/saas-accounting-revenue-recognition/terminology.jpg);background-position:center bottom;">
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
                        <a href="/resources/guides/saas-accounting-101/difference-between-booking-billing-revenue-and-mrr/" itemprop="url">
                            <span itemprop="title">Terminology</span>
                        </a>
                    </li>
                </ol>
                <div class="text-center">
                    <p>CHAPTER 2</p>
                    <h1>Booking, Billing, Revenue and MRR</h1>
                    <h2>Similar Accounting Terms. Different Meanings.</h2>
                    <a href="/resources/guides/saas-accounting-101/difference-between-booking-billing-revenue-and-mrr/#intro" class="btn">READ MORE</a>
                </div>
            </div>
        </section>
        
        <div id="intro" class="container block-space">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="book-text">
                        <p>Let’s take this example. John runs a SaaS business that offers a cloud-based helpdesk tool for his customers called ‘Help!’. Help! was started in the end of 2014, has more than 2000 customers and growing globally. The customers come in all shapes and sizes. Help! is offered in 3 different plans - Startup, Growth and Enterprise, priced at $200, $500 and $1000 respectively. </p>
                        
                        <p>Help! signed up an enterprise customer ‘A’ recently, under the Enterprise plan on 1st January 2016, with a contract in effect for 2 years. </p>

                        <table>
                            <tr>
                                <th>Customer</th>
                                <th>Recurring Fee (per month) of Enterprise Plan</th>
                                <th>Annual Contract Value</th>
                            </tr>
                            <tr>
                                <td align="center">Customer A</td>
                                <td align="center">$1000</td>
                                <td align="center">$24000</td>
                            </tr>
                        </table>
                        <br>
                        <p><b>Bookings:</b> The contract between ‘Help!’ and Customer A, that commits a service from the provider’s end, as well as a payment from the customer’s end during the 24 months of engagement is Booking. So, <b><u>Booking = $24000.</u></b></p>

                        <p><b>Billings:</b> Billing is when ‘Help!’ raises an invoice to customer A. So, if customer A has signed up for the annual plan and the contract agrees that customer A shall be billed in the beginning of the year, then <b><u>Billing = $12000.</u></b></p>


                        <p><b>Revenues:</b> When ‘Help!’ has rendered the service to the extent that there is reasonably certainty as to the collectibility of payments in relation to such service rendered, then that revenue can be recognized. For instance, if the customer had signed up on January 2017 and ‘Help!’ has billed the customer in the beginning of January, then as of January 2017, the <b><u>Revenue = $1000</u></b>. And as on the end of June 2017, the revenue recognized would be $6000, and so on.</p>

                        <p><b>MRR:</b> MRR or Monthly Recurring Revenue is a simple estimate of the predictable monthly revenue based on all the recurring subscriptions. So the normalized monthly recurring revenue for ‘Help!’ from Customer A would be <b><u>MRR = $1000.</u></b></p>

                        <p>It is also important to remember that MRR is very different from Revenues. Suppose Customer A has upgraded from Growth to Enterprise plan i.e. from $500 to $1000, on the 15th of April. So, the MRR report for April would show that the MRR for Enterprise plan is $1000. But actually, it would have taken into consideration, the fact that the Customer A has moved from $500 to $1000. </p>

                        <p>From a revenue recognition perspective, which is dependent on the billing and the services rendered, the revenue that would end up showing for April would be calculated as below:</p>

                        <ul>
                            <li>April 1st - April 30th ⇒ Customer A was billed for $500</li>
                            <li>Customer moves to a higher plan of $1000 on April 15th</li>
                            <li>So the revenue till April 15th = $250 because the service has been rendered only to the extent of $250 for 15 days. </li>
                            <li>A credit note will be issued for $250</li>
                            <li>April 15th - April 30th ⇒ Customer A has moved to $1000 plan</li>
                            <li>So the revenue from April 15th to April 30th = $500, because the service has been rendered to the extent of $500 for the remaining 15 days. </li>
                        </ul>

                        <p>So the revenue recognized will be $750 whereas the MRR shown is $1000. And the net billing amount will be $1250 ($500 + $1000 - $250).</p>

                    </div>

                    <div class="book-nav block-space">
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-6">
                                <a href="/resources/guides/saas-accounting-101/best-practices-in-revenue-recognition/">
                                    <p>Next Chapter</p>
                                    <h4>Best Practices in Revenue Recognition</h4>
                                    <div class="text-muted">Revenue Accounting and Recognition, demystified.</div>
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
<style type="text/css">
    .signup-block{display: none;}
    table, th, td {
       border: 1px solid black;
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->