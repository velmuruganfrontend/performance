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
      :cb-title="'What is a Merchant Account and how to get one? - Little Red Book of Payments | Chargebee'" 
      :cb-desc="'Wondering what a merchant account is? Click here to learn everything you need to know about a merchant account and how you can start accepting credit/debit card payments with one.'" 
      :cb-url="'/resources/guides/book-of-payments/merchant-account/'" 
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
        <section class="block-space banner-block-overlay book-banner" style="background-image:url(/static/website/version/images/resources/the-little-red-book-of-payments/merchant-account.jpg);background-position:center bottom;">
            <div class="container">
                <ol class="breadcrumb">
                    <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
                        <a href="/resources/" itemprop="url">
                            <span itemprop="title">Chargebee Resources</span>
                        </a>
                    </li>
                    <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child">
                        <a href="/resources/guides/book-of-payments/" itemprop="url">
                            <span itemprop="title">The Little Red Book of Payments</span></a></li>
                    <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child" class="active">
                        <a href="/resources/guides/book-of-payments/merchant-account/" itemprop="url">
                            <span itemprop="title">2. Merchant Account</span>
                        </a>
                    </li>
                </ol>
                <div class="text-center">
                    <p>CHAPTER 2</p>
                    <h1>Merchant Account</h1>
                    <h2>The what. The how. And the other stuff.</h2>
                    <a href="/resources/guides/book-of-payments/merchant-account/#intro" class="btn"> READ MORE</a>
                </div>
            </div>
        </section>


        <div id="intro" class="container block-space">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="book-text">
                        <h3>What is a merchant account? </h3>
                        <p>A merchant account is special type of bank account that allows merchants to accept payments from credit and debit cards. </p>
                        <p>It’s an account with an acquiring bank, which is in turn connected with card brands like Visa/MasterCard. </p>

                        <h3>How do you get one? </h3>
                        <p>You’ll have to make an application with merchant account/service providers and they are of the following two types - </p>
                        <ol><li><p>Processors - Processors handle the technology required to complete a transaction in its entirety. Beginning with the process of authorization, in which a card is either approved or declined, it’s then followed by settlement, and then the money is moved from the customer’s bank to the merchant account. Most acquiring banks use a third party to get their processing done, others do it themselves. </p></li>
                            <li><p>Resellers - As evident from the name, these are third party sales folks that sell the services of one or more processors. Also known as Independent Sales Organizations(ISOs) and can be further classified into two different categories -  </p>
                                <ul>
                                    <li><p>Banks </p></li>
                                    <li><p>and Non-Banks - Stripe, for instance, acts as an ISO of Wells Fargo Merchant Services</p></li>
                                </ul>
                            </li>
                        </ol>

                        <h3>Is it same as applying for a business bank account? </h3>
                        <p>Nope. It isn’t.</p>
                        <p>Because of the risk involved in the process. </p>
                        <p>Each application gets screened carefully. Each transaction is handled by different organizations at different stages. And more often than not, each business owner is required to sign a personal guarantee. </p>
                        <p>A personal guarantee? </p>
                        <p>Yes.</p>
                        <p>But why? Isn’t a merchant already getting into a contract as a business? </p>
                        <p>Yes, that’s correct. But that’s not enough. </p>
                        <p>Picture this for a moment: </p>
                        <p>Someone registers a business and sets up an online store. Writes a detailed business plan and ends up getting a merchant account. Buys some ads, stacks up some orders over a few days. And then declares bankruptcy. </p>
                        <p>Orders don’t get fulfilled. Buyers get frustrated and do the obvious. </p>
                        <p>They contact their banks and dispute the charge. </p>
                        <p>So, the business doesn’t exist anymore. If the business owner didn’t offer a personal guarantee, the merchant account provider is responsible for paying out refunds to all those customers who file for chargebacks. </p>
                        <p>Ends up bad, doesn’t it? This is just one scenario. </p>
                        <p>Merchant account providers always shoulder an immense amount of risk. </p>
                        <p>Here are a few areas that are assessed thoroughly - </p>

                        <h3>What do you do? (Industry) - </h3>
                        <p>Some business models are more risk averse than others. </p>
                        <p>You won’t get an approval to sell DIY kits for making molotov cocktails, no matter how sophisticated your business plan might be. </p>
                        <p>Though, different providers have different assessment guidelines. You might face rejection somewhere and get an approval elsewhere. </p>
                        <p>In general, Industries are classified as high, moderate and low risk, based on the risk associated with them. </p>
                        <p>If your business falls under the high risk category, you’ll be paying extremely high fees. </p>
                        <p>Here are some examples of high risk accounts - </p>
                        <ul>
                            <li><p>Internet pharmacies</p></li>
                            <li><p>Online gambling</p></li>
                            <li><p>Online auctions</p></li>
                        </ul>

                        <p>Then, there are business models that entail moderate risk - </p>
                        <ul>
                            <li><p>Tour, lodging</p></li>
                            <li><p>Telecommunication services</p></li>
                            <li><p>Utility services</p></li>
                            <li><p>Multi level marketing</p></li>
                        </ul>

                        <p>Further on, there’s the low risk category, most products and services can be categorized as low risk accounts. </p>
                        <p>In this case, getting an approval is easier when compared to medium and high risk accounts. </p>

                        <h3>How well do you do it? (Stability) - </h3>
                        <p>How long have you been in the business? </p>
                        <p>What sort of numbers does your balance sheet reflect? </p>
                        <p>You’ll have to share such figures with the providers, also an amount that you expect to process in the near future. And If that figure is way out of sync when compared to your existing revenue, it might just relinquish your prospects of getting an account. </p>
                        <p>But early stage startups won’t have a strong processing history to back their application, right? </p>
                        <p>Indeed. </p>
                        <p>But that’s alright. As you won’t be processing high volumes to start with, the risk associated with your account would be low as well. </p>
                        <p>But, if you’re expecting exponential growth in the initial phase itself, you can always look for merchant account providers who specialize in such accounts. </p>
                        <p>Here’s a common checklist of what you’ll have to submit - </p>
                        <p><span style="font-weight: bold;  font-size: 20px">&middot;</span> A detailed business plan</p>
                        <p><span style="font-weight: bold;  font-size: 20px">&middot;</span> Terms and conditions</p>
                        <p><span style="font-weight: bold;  font-size: 20px">&middot;</span> Information about business owners, shareholders</p>
                        <p><span style="font-weight: bold;  font-size: 20px">&middot;</span> Detailed description of your product or service</p>
                        <p><span style="font-weight: bold;  font-size: 20px">&middot;</span> Expected turnover</p>
                        <p><span style="font-weight: bold;  font-size: 20px">&middot;</span> Average sale price</p>
                        <p><span style="font-weight: bold;  font-size: 20px">&middot;</span> Business bank account details</p>
                        <p><span style="font-weight: bold;  font-size: 20px">&middot;</span> Processing history (If you’ve been processing transactions)</p>

                        <h3>How does your billing cycle work? - </h3>
                        <p>The way you bill your customers is also an important factor in deciding your application’s fate.  </p>
                        <p>Let’s say you accept payments in advance, for lifetime plans, or even annual plans.</p>
                        <p>It’ll be tremendously troubling for the merchant account provider to learn that your business has been shut down because of an unforeseen financial catastrophe, forcing you to stop the delivery of services. </p>
                        <p>Thus a monthly billing cycle is considered far less riskier when compared with longer ones. </p>

                        <h3>What’s a rolling reserve? </h3>
                        <p>Let’s say, you operate in a low risk industry. You’ve submitted all the paperwork. You’ve also personally vouched for your application. </p>
                        <p>All set? No more risk prevention to face?</p>
                        <p>Nah. </p>
                        <p>There’s yet another measure that’s deployed.</p>
                        <p>It’s called a rolling reserve, a practice of withholding a certain percentage of revenue before the settlement is done. </p>
                        <p>As with processing fees, the higher the risk associated with your business, higher would be the rolling reserve. </p>
                        <p>Apart from the type of industry you’re in, monthly refund and chargeback ratios, large number of transactions with high ticket price, and a not so promising credit history, are other factors that’ll impact the rolling reserve percentage. </p>
                        <p>So it’s entirely normal for a merchant account provider to withhold 10% of revenue for as long as 6 months. </p>

                        <h3>How long does it take? </h3>
                        <p>Depending on your application, the process can take weeks before you get a go ahead. </p>
                        <p>Doesn’t the process seem daunting? </p>
                        <p>Well, It is. </p>
                        <p>It’s clear that the system is broad. Overwhelming. And mired in complications. </p>
                        <p>But there’s hope. There are alternatives. </p>
                        <p>Collectively, their work doesn’t fail to instill a sense of assuaging assurance that the future of handling money online, with a few hiccups here and there, would be simple. </p>

                        <h3>PayPal</h3>
                        <p>PayPal was one of the first few companies that were founded with to simplify the process of accepting payments online. </p>
                        <p>They provide a merchant account bundled with a payment gateway, almost instantly, and use your government identification for basic verification. </p>
                        <p>From the days of <a target="_blank" href="http://money.howstuffworks.com/paypal2.htm">Gausebeck-Levchin test</a> and <a target="_blank" href="http://www.wsj.com/articles/SB992639123888198275">Igor</a>, PayPal’s efforts to keep fraud at bay have become increasingly stringent. </p>
                        <p>Their draconian approach toward keeping the platform secure, stems from nothing other than the fact that they have a limited understanding of a merchant’s business, owing to an instant sign up process. </p>
                        <p>Thus, a merchant’s growing revenue might easily signal suspicion. </p>
                        <p>Making things go as badly awry as a sudden seizure of merchant’s funds for an indefinite period of time. </p>
                        <p>One could argue that they’re a risk assessment company first and a payment processor second. That’s one of the reasons why they didn’t tank like many of their early competitors. </p>

                        <h3>Enter Braintree and Stripe </h3>
                        <p>Braintree has more in common with traditional merchant service providers like authorize.net, apart from their payment gateway service, they also help merchants get their own merchant accounts. </p>
                        <p>From the very beginning -  with a straightforward API, responsive support and clear-cut pricing - their approach has always been driven with an aim to make it easy for developers to get started and grow without hassles. </p>
                        <p>This fresh approach worked. Incumbents paid attention. And Braintree was acquired by PayPal in 2013. </p>
                        <p>Stripe has taken this to another level, by adding a badge of normality to the entire process.</p>
                        <p>Lurking beneath the surface of their simple UI, lies an instant access to the existing global payment processing infrastructure. </p>
                        <p>With Stripe, within a few minutes, using a snippet of code and an API key, you can start accepting payments on your website. </p>
                        <p>Yes. Minutes not weeks. </p>
                        <p>Of course, there’s a downside to this advantage. </p>
                        <p>Like PayPal, Stripe also assumes considerable risk on behalf of their merchants, to counter this pressing concern of security, they keep a rigorous and constant tap on all transactions. </p>
                    </div>

                    <div class="book-nav block-space">
                        <div class="row">
                            <div class="col-sm-6 text-right">
                                <a href="/resources/guides/book-of-payments/tread-the-terms/">
                                    <p>Previous Chapter</p>
                                    <h4>Tread the Terms</h4>
                                    <div class="text-muted">Common terminology. Tackled. Demystified.</div>
                                </a>
                            </div>
                            <div class="col-sm-6">
                                <a href="#ebook-subscribe" class="text-muted">
                                    <p>Next Chapter</p>
                                    <h4>Fees</h4>
                                    <div class="text-muted">Coming Soon</div>
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