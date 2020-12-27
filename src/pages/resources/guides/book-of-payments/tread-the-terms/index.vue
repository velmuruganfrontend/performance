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
      :cb-title="'1. Tread the Terms - The Little Red Book of Payments'" 
      :cb-desc="'What is an acquiring bank? What is a capture? - This chapter focuses on defining the common terms from the payments industry in plain english.'" 
      :cb-url="'/resources/guides/book-of-payments/tread-the-terms/'" 
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
        <section class="block-space banner-block-overlay book-banner" style="background-image:url(/static/website/version/images/resources/the-little-red-book-of-payments/tread-the-terms.jpg);background-position:center bottom;">
            <div class="container">
                <ol class="breadcrumb">
                    <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
                        <a href="/resources/" itemprop="url">
                            <span itemprop="title">Chargebee Resources</span>
                        </a>
                    </li>
                    <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child">
                        <a href="/resources/guides/book-of-payments/" itemprop="url">
                            <span itemprop="title">The Little Red Book of Payments</span>
                        </a>
                    </li>
                    <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child" class="active">
                        <a href="/resources/guides/book-of-payments/tread-the-terms/" itemprop="url">
                            <span itemprop="title">1. Tread the terms</span>
                        </a>
                    </li>
                </ol>
                <div class="text-center">
                    <p>CHAPTER 1 </p>
                    <h1>Tread the Terms</h1>
                    <h2>Common terminology. Tackled. Demystified.</h2>
                    <a href="/resources/guides/book-of-payments/tread-the-terms/#intro" class="btn">READ MORE</a>
                </div>
            </div>
        </section>
        
        <div id="intro" class="container block-space">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="book-text">
                        <p>Before we dive into the nook and cranny of payment processing, let’s understand few important terms that we will encounter along the way. </p>
                        <p>Most definitions available on the internet are riddled with jargon, so this is an effort to shred the terminology down into readily understandable chunks.  </p>
                        <p>Let’s get right down to it. </p>

                        <h3>Merchant </h3>
                        <p>That’s you. </p>
                        <p>If you’re a business owner looking to accept payments that are made using credit and debit cards then you’d be categorized as a merchant. </p>
                        <h3>Acquiring Bank</h3>
                        <p>The bank that acquires(hence acquiring) or accepts credit and debit card payments on your behalf. Essentially the middle-man between card brands like Visa and your business bank account. </p>
                        <h3>Merchant Account </h3>
                        <p>It’s an account with the acquiring bank that enables you to accept card payments and hold processed funds. The way you get one is by entering into an agreement with the bank in question. </p>
                        <h3>Authorization </h3>
                        <p>When a customer buys something using a credit or debit card, a check is done to -</p>

                        <ul>
                            <li>identify whether the customer’s payment card is valid,</li>
                            <li>and that there’s enough money to cover a the charge</li>
                        </ul>

                        <p>Then, the charge amount is deducted from the customer’s bank account.  </p>
                        <p>But, you don’t have access to the funds yet. </p>
                        <p>Wait. What’s happening here? </p>
                        <p>A charge has been made and the money hasn’t even hit your merchant account yet. </p>

                        <h3>Capture </h3>
                        <p>In this step, the money that was deducted and held during the authorization, is moved to the processor that forwards it to your merchant account. </p>

                        <h3>Void </h3>
                        <p>If a transaction has gone through successfully and a refund is requested by a customer, and the funds haven’t been processed yet. </p>
                        <p>Issuing a refund isn’t the only option available. </p>
                        <p>Instead, you can choose to void the payment transaction, which will stop the funds from being transferred from the customer’s account. </p>
                        <p>Similarly, you can void the refund transaction itself. </p>

                        <h3>Issuing Bank </h3>
                        <p>It’s your customer’s bank. The bank that issues(hence issuing) payments to the acquiring bank on behalf of your customers. </p>
                        <h3>Card Association </h3>
                        <p>It’s a network of banks. All major card brands like American Express, Visa, MasterCard e.t.c are card associations. </p>
                        <h3>Payment Processor </h3>
                        <p>A payment processor handles the technology which connects the acquiring bank with the issuing bank. Thus making transactions between you and your customers possible, in a matter of few seconds. </p>
                        <p>There are two types of payment processors - </p>
                        <p>Front-end </p>
                        <p>A Front-end processor verifies the card information with the issuing bank and card associations, then performs additional checks to ensure that the transaction is safeguarded from fraud and identity theft, and finally captures funds as per the charge amount. </p>
                        <p>Back-end </p>
                        <p>Once the payment is authorized and captured by a front-end processor, it’s accepted by a back-end processor which moves the funds from the issuing bank to the acquiring bank.</p>

                        <h3>Payment Gateway </h3>
                        <p>As a service, a payment gateway connects your website with payment processors and your merchant account. </p>
                        <p>First off, it sends out card information to a payment processor. </p>
                        <p>In the next step, based on the result of processing, i.e whether the transaction is either approved or declined, it collects this response from the processor and then delivers it on your website. </p>

                        <h3>Fees </h3>
                        <p>For each transaction that’s approved, declined or refunded, you’ll be paying two types of fees. </p>
                        <p>The first one would be a percentage of each transaction, paid to the acquiring bank, it’s called the ‘Discount Rate’ or ‘Processing Rate’. </p>
                        <p>The second one is a flat fee, known as ‘Transaction Fee’, which is charged whenever your payment gateway sends or receives information to or from the payment processor </p>

                        <h3>Payment Card Industry(PCI) Compliance </h3>
                        <p>If you accept card payments, online or offline, PCI Compliance is mandatory. The compliance - PCI DSS (Data Security Standard) acts as a set of rules aimed at curbing payment card fraud, the compliance requirements vary based on the size of your business. </p>
                        <p>It’s maintained by PCI Security Standards Council, which is an alliance formed by the collaboration of Visa, MasterCard, Discover, JCB, and American Express, a collective effort to reduce global data security breaches.</p>
                        <h3>Recurring Payments</h3>
                        <p>If you sell a product or service on a subscription basis and your customers are required to pay at set intervals, let’s say every month, a pre-determined recurring charge is applied on customers’ cards whenever a subscription is up for renewal, and that’s a recurring payment. </p>

                        <h3>Tokenization </h3>
                        <p>Tokenization is a process in which a surrogate of your customer’s card is used to process payments. </p>
                        <p>Surrogates? Yes. </p>
                        <p>Let’s see how tokenization works, as soon as a customer submits card information to make a payment, the information is sent to a secure vault, and a token is generated, which acts as a substitute for customer’s card information. This token is used to process card payments and thus the actual card information remains safe. </p>
                    </div>

                    <div class="book-nav block-space">
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-6">
                                <a href="/resources/guides/book-of-payments/merchant-account/">
                                    <p>Next Chapter</p>
                                    <h4>Merchant Account</h4>
                                    <div class="text-muted">The what. The how. And the other stuff.</div>
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