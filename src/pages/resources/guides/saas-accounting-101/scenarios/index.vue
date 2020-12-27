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
      :cb-title="'Revenue Recognition Scenarios - Chargebee'" 
      :cb-desc="'Learn where revenue recognition should be prorated and recalibrated based on specific conditions based on the listed scenarios'" 
      :cb-url="'/resources/guides/saas-accounting-101/scenarios/'" 
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
        <section class="block-space banner-block-overlay book-banner" style="background-image:(/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-accounting.jpg);background-position:center bottom;">
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
                        <a href="/resources/guides/saas-accounting-101/scenarios/" itemprop="url">
                            <span itemprop="title">Revenue Recognition Scenarios</span>
                        </a>
                    </li>
                </ol>
                <div class="text-center">
                    <p>CHAPTER 4 </p>
                    <h1>Revenue Recognition Scenarios</h1>
                    <h2>When SaaS meets Accounting...</h2>
                    <a href="#intro" class="btn"> READ MORE</a>
                </div>
            </div>
        </section>
        
        <div id="intro" class="container block-space">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="book-text">
                        <p>Revenue Recognition for Subscription businesses can be quite tiresome. GAAP standards define the general rules but it takes effort to determine the applicability of these rules for each of the various scenarios that could apply to a subscription business. </p>
                        
                        <p>For an annual plan, recognizing revenues seems pretty simple and straightforward. But what if a customer decides to cancel the subscription mid-way? What if a customer decides to upgrade from a monthly plan to an annual plan in the middle of the year? What if a customer becomes unable to pay for the services rendered? Revenue recognition doesn&rsquo;t look easy any more. </p>
                        
                        <p>We have enlisted a few scenarios where revenue recognition should be prorated and recalibrated based on specific conditions. These include revenue recognition for - </p>
                        
                        <ol>
                            <li>Annual Plan</li>
                            <li>Plan-based Upgrades</li>
                            <li>Quantity-based Upgrades</li>
                            <li>Plan-based Downgrades</li>
                            <li>Quantity-based Downgrades</li>
                            <li>Cancellation with Refund</li>
                            <li>Cancellation without Refund</li>
                            <li>Shift in Monthly to Annual Plan Cycle</li>
                            <li>Shift in Annual to Monthly Plan Cycle</li>
                            <li>Addons and Metered Billing</li>
                            <li>Bad Debts and Write-Offs</li>
                        </ol>

                        
                        <h2 style="font-family: 'Merriweather', serif; font-size: 18px; line-height: 32px;">1. Revenue Recognition for Annual Plan</h2>
                        <p>Let&rsquo;s assume that John is a customer who has signed up with Help!. John opted for the annual Pro Plan priced at $12000 per annum starting from the beginning of January. The revenue recognition in this case is fairly straightforward.</p>
                        
                        <p>John gets billed with an invoice of $12000 upfront at the beginning of January. Of this, $1000 gets recognized in January whereas the remaining $11000 is placed in a Liability Account, based on the Deferred Revenue Accounting best practices. For simplicity, we will call this the Deferred Revenue Account. </p>
                        
                        <p>The subsequent month, in the end of February, another $1000 gets recognized for the services rendered by Help!, while the Deferred Revenue Account holds $10000. This goes on, till December, when Help! recognises all of the $12000 paid by John and the Deferred Revenue Account holds nil balance.</p>
                        
                        <ul>
                            <li>The invoice raised in January will be for $12000</li>
                            <li>Revenue Recognized in January: $1000</li>
                            <li>Deferred Revenue in January: $11000 </li>
                            <li>Revenue Recognized in December: $12000</li>
                            <li>Deferred Revenue in December: $0 </li>
                        </ul>

                        <img src="/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-recognition-annual-plan.jpeg" class="img-responsive">
                            
                        <h2 style="font-family: 'Merriweather', serif; font-size: 18px; line-height: 32px;">2. Revenue Recognition for Plan-based Upgrades</h2>
                        <p>John decides to upgrade from Pro to Enterprise plan i.e. from $12000 to $24000, on the 15th of April. So, the MRR report for April would show that the MRR for Enterprise plan is $2000, taking into consideration, the fact that John has moved from $1000 to $2000. </p>
                        
                        <p>From a revenue recognition perspective, which is dependent on the billing and the services rendered, the sequence of events leading to revenue recognized for April will be as below:</p>
                        
                        <ul>
                            <li>An invoice is raised in January for $12000</li>
                            <li>Total revenue recognized from January to March will be $3000 at $1000 per month.</li>
                            <li>From April 1st to April 30th, the revenue to be recognized will be $1000. However, on April 15th, customer is upgraded to the Enterprise plan of $2000</li>
                            <li>The revenue recognized in the month of April, till April 15th will $500 because the service has been rendered only to the extent of $500 for 15 days. </li>
                            <li>A credit note will be issued for $8500, as the revenue recognized from Jan 1st to April 15th will be $3500. So a credit note for the remaining months till December 31st will be $8500. </li>
                            <li>Meanwhile, the deferred revenue account holds $9000. Subsequently, a new prorated invoice will be generated for $17000 for the remaining months till December.</li>
                            <li>So, the revenue from April 15th to April 30th will be $1000, because the service has been rendered to the extent of $1000 for the remaining 15 days. And the revenue for the subsequent months will be $2000</li>
                            <li>Simultaneously, the deferred revenue account will be adjusted to prorate the $24000 across the 12 months, and then calculated for the remaining 8.5 months from April 15th to December 31st. </li>
                            <li>Total deferred revenue in April will include the deferred revenue from the plan upgrade as well as from that of the previous plan along with the prorated refundable credit, minus the recognized revenue. </li>
                        </ul>
                        

                        <ul>
                            <li>Invoice raised in January: $12000</li>
                            <li>Revenue Recognized from January to March: $3000</li>
                            <li>Revenue recognized in April: $1500</li>
                            <li>Credit Note raised = $3500, New Prorated Invoice raised: $17000 </li>
                            <li>Revenue recognized in subsequent months (May to December): $2000/mo</li>
                            <li>Deferred Revenue in April: $16000</li>
                        </ul>

                        <img src="/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-recognition-for-plan-based-upgrades.jpeg" class="img-responsive">
                        


                        <h2 style="font-family: 'Merriweather', serif; font-size: 18px; line-height: 32px;">3. Revenue Recognition for Quantity-based Upgrades</h2>
                        
                        <p>If John decides to accommodate 10 additional agents on May 1st, at the price of $10 per agent, over the 100 agents offered under the Enterprise Plan for the subsequent months, then this qualifies as a quantity-based upgrade.</p>
                        
                        <p>In this case, no Credit Note will be created and an invoice will be generated for the additional 10 agents.</p>
                        
                        <p>In such a scenario, the revenue recognized in May and subsequent months would be $1100 ($1000 + ($10*10 agents)) and the deferred revenue from May will be reduced to $7700 including the recognized revenue along with the price for 10 agents for the subsequent 8 months.</p>
                        
                        <ul>
                            <li>Invoice raised in January: $12000</li>
                            <li>Revenue Recognized from January to April: $4000</li>
                            <li>Quantity upgraded from 100 to 110 agents on May 1st charged at $10 per agent</li>
                            <li>Prorated Invoice will be created in May for $800 </li>
                            <li>Revenue recognized in May and subsequent months: $1100</li>
                            <li>Deferred Revenue in May: $7700</li>
                            <li>Deferred Revenue in June: $6600</li>
                        </ul>
                        
                        <img src="/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-recognition-for-quantity-based-upgrades.jpeg" class="img-responsive">


                        <h2 style="font-family: 'Merriweather', serif; font-size: 18px; line-height: 32px;">4. Revenue Recognition for Plan-based Downgrades</h2>
                        
                        <p>When John downgrades from, say, the Pro Plan of $12000 to the Growth Plan of $6000, on the 15th of April, the revenue recognition for that month will look something like this. </p>
                        
                        <ul>
                            <li>For the period of April 1st to April 15th, revenue recognized from John will be $500</li>
                            <li>John downgrades to another plan priced at $6000 ($500/mo) on April 15th</li>
                            <li>A credit note of $8500 will be issued</li>
                            <li>John utilizes the services under Growth plan from April 15th to April 30th. So, the revenue recognised from April 15th to April 30th will be $250, because the service rendered is to the extent of a prorated amount of $250 for the last 15 days. </li>
                        </ul>
                        

                        <ul>
                            <li>Invoice raised in January: $12000</li>
                            <li>Revenue Recognized from January to March: $3000</li>
                            <li>A credit note will be issued for $8500 </li>
                            <li>A new prorated invoice will be generated for $4250 </li>
                            <li>Revenue recognized in April: $750</li>
                            <li>Revenue recognized in subsequent months (May to December): $500/mo</li>
                            <li>Deferred Revenue in April: $4000 </li>
                            <li>Deferred Revenue in May: $3500</li>
                        </ul>

                        <img src="/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-recognition-for-plan-based-downgrades.jpeg" class="img-responsive">
                        

                        <h2 style="font-family: 'Merriweather', serif; font-size: 18px; line-height: 32px;">5. Revenue Recognition for Quantity-based Downgrades</h2>
                        
                        <p>When John reduces the 10 agents in his Pro plan down to 9 agents, &nbsp;that&rsquo;s a quantity-based downgrade and a credit note is raised accordingly. </p>
                        
                        <p>Here, the revenue recognized in April and subsequent months would be $900 [$1000 - ($10*10 agents)] and the deferred revenue from May will be reduced to $7000 when the $1000 in recognized revenue along with $800 in the decrease in agents is removed from April&rsquo;s deferred revenue.</p>
                        
                        <ul>
                            <li>Invoice raised in January: $12000</li>
                            <li>Revenue Recognized from January to March: $3000</li>
                            <li>Revenue recognized in April: $900</li>
                            <li>A credit note of $900 will be created </li>
                            <li>Revenue recognized in subsequent months (May to December): $900/mo</li>
                            <li>Deferred Revenue in April: $7200 </li>
                            <li>Deferred Revenue in May: $6300</li>
                        </ul>
                        <img src="/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-recognition-for-quantity-based-downgrades.jpeg" class="img-responsive">

                        
                        <h2 style="font-family: 'Merriweather', serif; font-size: 18px; line-height: 32px;">6. Revenue Recognition for Cancellation with Refund</h2>

                        <p>John pays $12000 upfront to Help! following the annual contract of 12 months. However, he decides to request for cancellation in April. There are two possible scenarios that the customer can encounter, &nbsp;depending on how Help! would like to enforce its contractual rights. </p>
                        
                        <p>In the case of cancellation with refund, John cancels the services from Help! in the start of April with refund. Help! recognizes the revenue till March. Help! also creates a credit note for $9000 and refunds the amount to substantiate the cancellation.</p>

                        <img src="/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-recognition-for-cancellation-with-refund.jpeg" class="img-responsive">

                        
                        <h2 style="font-family: 'Merriweather', serif; font-size: 18px; line-height: 32px;">7. Revenue Recognition for Cancellation without Refund</h2>
                        <p>In the case of cancellation without refund, John cancels the services from Help! in the beginning of April, but contractually, is not entitled to a complete or partial refund. <em>Help!</em> can then recognize the balance amount over the subsequent months as deferred revenue. There is no credit note created in this case.</p>

                        <img src="/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-recognition-for-cancellation-without-refund.jpeg" class="img-responsive">
                        
                        
                        <h2 style="font-family: 'Merriweather', serif; font-size: 18px; line-height: 32px;">8. Revenue Recognition for Shift in Monthly to Annual Plan Cycle</h2>
                        
                        <p>John has signed up with Help! on a monthly plan of $1000/month. In such a scenario, the revenue from each month can be recognized in the same month. </p>
                        
                        <p>But if John decides to shift the plan cycle from a monthly plan to annual Pro Plan at $12000/year, at the beginning of April, then the deferred revenue account will need to hold the prorated amount of $8000 starting from April. </p>
                        

                        <ul>
                            <li>Invoice raised in January = $1000</li>
                            <li>Revenue Recognized from January to March = $3000</li>
                            <li>Revenue recognized in April = $1000</li>
                            <li>Prorated Invoice raised for the Pro Plan from April to December, for $9000</li>
                            <li>Deferred Revenue in April = $8000 </li>
                            <li>Deferred Revenue in May = $7000</li>
                        </ul>

                        <img src="/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-recognition-for-shift-from-monthly-to-annual-plan-cycle.jpeg" class="img-responsive">
                        
                        <h2 style="font-family: 'Merriweather', serif; font-size: 18px; line-height: 32px;">9. Revenue Recognition for Shift in Annual to Monthly Plan Cycle</h2>
                        
                        <p>John has signed up with Help! on Pro Plan of $12000. The revenue recognized over the months is same as that of an annual plan, where the revenue recognized per month is $1000. </p>
                        
                        <p>But if John decides to shift the plan cycle from a annual Pro plan to monthly plan at $1000/month, in the beginning of April, then Help! issues a credit note of $8000 for refund in April and thereafter, the revenue is recognized in the respective months. </p>


                        <ul>
                            <li>Invoice is raised in January for $12000</li>
                            <li>Revenue Recognized from January to March = $3000 <em>($1000/mo)</em></li>
                            <li>Deferred Revenue in March = $9000 </li>
                            <li>Revenue recognized in April = $1000</li>
                            <li>Credit note of $8000 issued in April and Deferred Revenue in April is $0 after plan cycle shift</li>
                            <li>Deferred Revenue in May = $0</li>
                        </ul>

                        
                        <img src="/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-recognition-for-shift-from-annual-to-monthly-plan-cycle.jpeg" class="img-responsive">

                        
                        <h2 style="font-family: 'Merriweather', serif; font-size: 18px; line-height: 32px;">10. Revenue Recognition for Addons and Metered Billing</h2>
                        
                        <p>As far as addons and metered billing are concerned, the revenue can be recognized directly, , in the same month. </p>
                        
                        <p>Say, John includes an addon - Setup Fee, for the month of January, priced at $150, along with a metered-billing component of Social Support priced at $300 per month. The revenue for addons as well as metered billing will be recognized in the respective months. </p>
                        
                        <p>It is important to understand that the treatment of addons and metered amount is different. The overages incurred in the metered billing will be recognized in the month in which it is accrued. As for addons, the amount is recognized on the basis of when it is billed. </p>
                        

                        <ul>
                            <li>Invoice raised in January: $12000 with addons and metered billing component</li>
                            <li>Revenue Recognized in January: $1450. The metered amount of $300 will be accrued from December.</li>
                            <li>Deferred Revenue in January: $11000, since revenues are recognized for Addons and metered billings in the same month, the deferred revenues for such components will be zero only.</li>
                        </ul>

                        <img src="/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-recognition-with-addons-and-metered-billing.jpeg" class="img-responsive">
                        
                        <h2 style="font-family: 'Merriweather', serif; font-size: 18px; line-height: 32px;">11. Revenue Recognition for Bad Debts and Write-Offs</h2>
                        <p>According to GAAP, revenues from a sale can be recognized as long as the services are rendered, and there is reasonable assurance that money can be collected, even when the customer may fail to pay immediately. However, if a business fails to collect the payments, the business has to report a bad debt under an Expense Account, to offset the revenue reported during the sale.</p>
                        
                        <p>Subsequently, if the amount is deemed to be uncollectible, the business can partially or completely write off the account. </p>
                        
                        <p>Say, John paid Help! with a cheque of $12000, in the month of January. Help! recognizes a revenue of $1000 every month and the remaining is retained in the deferred revenue account. However, in the month of April, the cheque has bounced off, and Help! fails to recognize the revenue in that month. This becomes a bad debt and would need to be reported immediately. </p>
                        
                        <p>This continues through the duration of the contract from April to December. Then the business can write off the revenues with respect to future services. However, this does not impact the past services. This can be done in two ways: partial write off and full write off, as below.</p>

                        <img src="/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-recognition-for-partial-write-off.jpeg" class="img-responsive">

                        <img src="/static/website/version/images/resources/saas-accounting-revenue-recognition/revenue-recognition-for-full-write-off.png" class="img-responsive">
                    </div>

                    <div class="book-nav block-space">
                        <div class="row">
                            <div class="col-sm-6 text-right">
                                <a href="/resources/guides/saas-accounting-101/best-practices-in-revenue-recognition/">
                                    <p>Previous Chapter</p>
                                    <h4>Revenue Recognition</h4>
                                    <div class="text-muted">Best practices in Revenue Accounting and Recognition.</div>
                                </a>
                            </div>
                            <!-- <div class="col-sm-6">
                                <a href="#" class="text-muted">
                                    <p>Next Chapter</p>
                                    <h4>Fees</h4>
                                    <div class="text-muted">Coming Soon</div>
                                </a>
                            </div> -->
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