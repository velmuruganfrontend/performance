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
      :cb-title="'Failed Payments and Involuntary Churn — A Definitive Guide | Chargebee'" 
      :cb-desc="'Implement these tactics at every stage of the payment failure life cycle to optimize your revenue recovery, recover as many failed payments as possible, and fight involuntary churn.'" 
      :cb-url="'/resources/guides/involuntary-churn-payment-failed/'" 
      :cb-image="'/static/resources/og/resource/guides/failed-payments.png'"
      :cb-style="'/static/website/version/styles/new.css,/static/website/version/styles/starters-guide.css'"
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
​       <section class="gstart-main__header" style="background: none">
            <div class="container">
                <h1 class="gstart-main__header-title ff-freightDisPro">
                    Failed Payments <br>and Involuntary Churn<span>— A Definitive Guide </span>
                </h1>
            </div>
        </section>
        <!-- ========================== start: Chapter  =========================-->
        <article class="gstart-group" data-spy="scroll" data-target="#chapter-group">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <!-- ========================== start: Chapter zero  =========================-->
                        <section class="gstart chapter-zero">
                            <div class="gstart__banner">
                                <div class="gstart__banner-img">
                                    <img src="/static/website/version/images/resources/guides/failed-payments-and-involuntary-churn.jpg" alt="Failed payments and involuntary churn" class="img-responsive center-block">
                                </div>
                                <section class="blk-page__like mar-b-md">
                                    <div class="blk-page__like-logo">

                                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.chargebee.com/resources/guides/involuntary-churn-payment-failed/" class="cb-sociallogo_box facebook" onclick="ga('send', 'event', 'website', 'share-intent', 'fb-button')">
                                            <img src="/static/website/version/images/icon/jan2019/facebook-white.svg" alt="">
                                        </a>

                                        <a target="_blank" href="https://twitter.com/home?status=Failed%20Payments%20and%20Involuntary%20Churn%20%E2%80%94%20A%20Definitive%20Guide%20%40chargebee%20https%3A//www.chargebee.com/resources/guides/involuntary-churn-payment-failed/" class="cb-sociallogo_box twitter" onclick="ga('send', 'event', 'website', 'share-intent', 'twitter-button')">
                                            <img src="/static/website/version/images/icon/jan2019/twitter-white.svg" alt="">
                                        </a>

                                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.chargebee.com/resources/guides/involuntary-churn-payment-failed/&title=Failed%20Payments%20and%20Involuntary%20Churn%20%E2%80%94%20A%20Definitive%20Guide&summary=Implement%20these%20tactics%20at%20every%20stage%20of%20the%20payment%20failure%20life%20cycle%20to%20optimize%20your%20revenue%20recovery,%20recover%20as%20many%20failed%20payments%20as%20possible,%20and%20fight%20involuntary%20churn.&source=" class="cb-sociallogo_box linkedin" onclick="ga('send', 'event', 'website', 'share-intent', 'linkedin-button')" target="_blank">
                                            <img src="/static/website/version/images/icon/jan2019/linkedin.svg" alt="">
                                        </a>
                                    </div>
                                </section>
                                <div class="center-block-sm">
                                    <p>How well you plan for the pitfalls (technical and otherwise) that might assail a payment shortens the chasm between how much money you are owed and how much money you are actually getting.</p>
                                    <p>Closely linked, is the concept of involuntary churn or how many customers you lose despite their wanting to continue subscribing to your service (in this case, because they couldn’t get a payment through to you). </p>
                                    <p>The more efficient your renewal process, the fewer customers that will churn out because of a payment issue.</p>
                                    <p>This is the definitive guide to making concrete plans that, on the one hand, help you recover as many failed payments as you can, and on the other, help you keep your renewals as frictionless as you can so you don’t lose any customers via failed payments. </p>
                                    <p>Our list of 23 tactics is structured around the payment failure life cycle as a whole. This is to avoid talking about a <a href="https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/forbesexecutivefinancecouncil/2016/09/23/six-practical-methods-to-reduce-involuntary-churn-for-saas-businesses/&refURL=&referrer=#24a832a4f00f" target="_blank">tactic</a> or <a href="https://www.chargebee.com/blog/dunning-management-for-saas-business/" target="_blank">stage in the life cycle</a> in isolation of the others that affect (or are affected by) it.  </p>
                                    <p>
                                        It is more effective to see the payment failure life cycle as a whole and implement one solution rather than to see it in parts and implement multiple solutions that might conflict with each other. 
                                    </p>
                                </div>
                                <header class="gstart-header gstart-header--mobile" id="gs-navigation">
                                    <h2 class="ff-freightDisPro">Navigate this post</h2>
                                </header>
                                <div class="center-block-sm">
                                    <div class="gs-toc">
                                        <ul class="gs-list">
                                            <li class="gs-list__item">
                                                <a href="#payment-is-due-planning-before-things-go-wrong">Payment is due - planning before things go wrong</a>

                                                <ul class="gs-sublist">
                                                    <li class="gs-sublist__item">
                                                        <a href="#pre-dunning-emails">Pre-Dunning emails</a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#in-app-notifications">In-app notifications</a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#card-Account-updater">Card/Account updater</a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#card-updater-info-on-your-website">Card/Account updater info on your website</a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#optimize-the-checkout-page-process">Optimize the checkout page/process</a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#mcc-registered-to-accurately-reflect-your-business">MCC (Merchant classification code) registered to accurately reflect your business</a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#alternative-gateways-processor-for-emergencies">Alternative gateways/processor for emergencies </a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#flag-a-payment-as-recurring-in-your-payment-gateway">Flag a payment as recurring in your system/payment gateway</a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#brand-your-customers-bank-statements">Brand your customer’s bank statements </a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#request-that-a-customer-shift-to-ach-sepa">Request that a customer shift to ACH/SEPA</a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#payment-is-due-summary">Payment is due - Summary</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>


                                        <ul class="gs-list">
                                            <li class="gs-list__item">
                                                <a href="#first-try-failed-collateral-damage">First try failed - collateral damage</a>

                                                <ul class="gs-sublist">
                                                    <li class="gs-sublist__item">
                                                        <a href="#bin-blacklist">BIN blacklist </a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#backup-payment-methods">Backup payment methods to immediately fall back on when the first payment method fails</a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#first-try-failed-summary">First try failed - Summary</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>


                                        <ul class="gs-list">
                                            <li class="gs-list__item">
                                                <a href="#retrying-a-payment-method-damage-control">Retrying a payment method - damage control</a>

                                                <ul class="gs-sublist">
                                                    <li class="gs-sublist__item">
                                                        <a href="#specific-retry-cycles-for-declines">Specific retry cycles for soft declines</a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#specific-retry-cycles-for-declines">Specific retry cycles for hard declines </a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#retry-at-particular-times">Retry at particular times </a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#create-dunning-personas">Create dunning personas  </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>


                                        <ul class="gs-list">
                                            <li class="gs-list__item">
                                                <a href="#dunning-emails-communicating-retries">Dunning emails - communicating retries</a>

                                                <ul class="gs-sublist">
                                                    <li class="gs-sublist__item">
                                                        <a href="#set-up-a-dunning-cycle">Set up a dunning cycle that suits your customer </a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#dunning-personas">Let your dunning personas inform your dunning emails </a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#use-dunning-emails-to-build-value">Use dunning emails to build value </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>


                                        <ul class="gs-list">
                                            <li class="gs-list__item">
                                                <a href="#post-dunning-action">Post dunning action - moving forward</a>

                                                <ul class="gs-sublist">
                                                    <li class="gs-sublist__item">
                                                        <a href="#dont-cancel-the-subscription-immediately">Don’t cancel the subscription immediately</a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#revisit-billing-cycles">Revisit billing cycles</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>



                                        <ul class="gs-list">
                                            <li class="gs-list__item">
                                                <a href="#sending-out-an-invoice">Sending out an Invoice - revenue recovery for enterprise customers</a>

                                                <ul class="gs-sublist">
                                                    <li class="gs-sublist__item">
                                                        <a href="#payment-terms">Payment terms (Net D)</a>
                                                    </li>
                                                    <li class="gs-sublist__item">
                                                        <a href="#advance-invoices">Advance invoices (moving your customer to an annual payment plan) </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <ul class="gs-list">
                                            <li class="gs-list__item">
                                                <a href="#tying-it-all-together">Tying it all together</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div style="margin-top: 80px;">
                                    <h1 class="gstart-main__header-title ff-freightDisPro">What is ‘The Payment Failure Life Cycle’?</h1>
                                </div>
                            </div>
                            <div class="gstart-content center-block-sm">
                                <p>
                                    Dealing, as we are, with recurring, online payments, means understanding that every payment goes through a standard set of chapters in its journey from issuing to receiving bank. The goal is to simulate, as closely as possible, a good old fashioned, face to face exchange of service for money. The challenge is to do with payments gateways, payment processors, card networks or direct debit networks or virtual wallets in between. 
                                </p>
                                <p>
                                    Concerned with failed payments, this post will be structured around the stages that a recurring, online payment goes through when it is not successful - what I’m calling the ‘failed payments life cycle’. Like a butterfly life cycle except it’s causing your customers to churn out. 
                                </p>
                                <p>
                                    Depending on whether you’re using invoices or not, the payment failure looks a little different:
                                </p>

                                <div class="gs-table-container">
                                    <table class="gs-table">
                                        <tr>
                                            <th>Invoice based payments</th>
                                            <th>Non-invoice based payments</th>
                                        </tr>
                                        <tr>
                                            <td>Sending out an Invoice</td>
                                            <td>Payment is due</td>
                                        </tr>
                                        <tr>
                                            <td>Payment is due</td>
                                            <td>First try failed</td>
                                        </tr>
                                        <tr>
                                            <td>First try failed</td>
                                            <td>Retrying a payment method</td>
                                        </tr>
                                        <tr>
                                            <td>Retrying a payment method</td>
                                            <td>Dunning emails</td>
                                        </tr>
                                        <tr>
                                            <td>Dunning emails</td>
                                            <td>Post dunning action</td>
                                        </tr>
                                        <tr>
                                            <td>Post dunning action</td>
                                            <td></td>
                                        </tr>
                                    </table>
                                </div>
                                <p>
                                    In both cases, the charge can be immediate or delayed, it can be automated (using a card or a direct debit order with the bank) or manual (using cash or a cheque), and it can be recorded and filed automatically (by a billing system) or manually.
                                </p>
                            </div>
                           
                        </section>
                        <!-- ========================== End: Chapter zero  =========================-->
                        <!-- ========================== start: Chapter one  =========================-->
                        <section class="gstart" >
                            <header class="gstart-header">
                                <h2 class="ff-freightDisPro">Why plan for the payment failure <br class="visible-lg">life cycle as a whole?</h2>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    <p>
                                        Some of the tactics for each stage of the life cycle are easy to implement and others are not (like branding your invoice or customer bank statement vs. setting up backup payment methods). 
                                    </p>
                                    <p>
                                        Some naturally work together (like Tactic for dunning retries and dunning) while others do not (like different dunning cycles for different segments of customers and a generic pre-dunning email). 
                                    </p>
                                    <p>
                                        Some come with hidden caveats (card updaters will not update international cards, and cards from certain carriers). 
                                    </p>
                                    <p>
                                        Some cater to a certain kind of customer exclusively (payment terms). 
                                    </p>
                                    <p>
                                        The only thing that is certain is that a different combination suits every business depending on need, goals, and the kind of customers they are catering to. Seeing the life cycle as a whole (as it relates your business) will help you avoid making the mistake of implementing a tactic that works <em>well</em> within a particular stage of the life cycle but <em>against</em> tactics that you might have implemented in others. 
                                    </p>
                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Chapter one  ===========================-->

                        <!-- ========================== start:  =========================-->
                        <section class="gstart" id="payment-is-due-planning-before-things-go-wrong">
                            <header class="gstart-header">
                                <h1 class="gstart-main__header-title ff-freightDisPro" style="text-align: left">
                                    Payment Due - Planning Before Things Go Wrong
                                </h1>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    <p>
                                        ‘If you fail to plan, you plan to fail’. Benjamin Franklin’s words are particularly relevant to the online businessman. This section details ten tactics you can implement to battle failed payments before you have any.
                                    </p>
                                </div>
                            </article>
                        </section>
                        <!-- ========================== start: Tactic 01  =========================-->
                        <section class="gstart" id="pre-dunning-emails">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 01</div>
                                <h3 class="ff-freightDisPro">Pre-Dunning Emails</h3>
                            </header>
                            <article class="gstart-content">                            
                                <div class="center-block-sm">
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">What is it?</h5>
                                        <p>
                                            An email that goes out to the customer when a payment method is about to expire asking them to update soon or else (the closer the expiry, the stronger the language).
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">How easy is it to implement?</h5>
                                        <p>
                                            It depends on how you would like to use them. 
                                        </p>
                                        <p>
                                            If you would like to send a common email out to all the customers who are using cards for example (whenever expiry is around the corner), it’s not all that difficult to do. 
                                        </p>
                                        <p>
                                            If you would like to use this tactic only with customers who have a history of delayed payments, on the other hand, that means monitoring a subset of expiry dates and writing custom emails. A little harder to get off the ground. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">What are the pros?</h5>
                                        <ul>
                                            <li>Get in front of customers before payment method expiry.</li>
                                            <li>Get the renewal conversation started early. </li>
                                        </ul>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">What are the cons? </h5>
                                        <ul>
                                            <li>These emails <a href="https://churnbuster.io/blog/dunning-to-reduce-payment-churn/" target="_blank">can feel spammy and aggressive.</a></li>
                                            <li>They are quite intrusive. There are less intrusive tactics available (see: card/account updaters and in-app notifications) </li>
                                        </ul>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">All things considered?</h5>
                                        <p>
                                            Use pre-dunning emails only if you don’t have other systems in place to catch credit card updates or ask customers to update their information. They also make sense if you want to specifically talk to certain customers when their payment method is about to expire. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            Are there other tactics on the list that complement this one?
                                        </h5>
                                        <p>
                                            Your pre-dunning emails should (ideally) contain a link to a card update page where your customers can update card information. Consider optimizing this page to make sure they don’t leave without doing so. 
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <!-- =========================== End: Tactic 01  ===========================-->
                        <div class="gstart-divider"><span></span></div>
                        <!-- ========================== start: Tactic 02  =========================-->
                        <section class="gstart" id="in-app-notifications">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 02</div>
                                <h3 class="ff-freightDisPro">In-app/website notifications</h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What is it?
                                        </h5>
                                        <p>
                                            A non-intrusive notification bubble inside your app or website that informs customers that their payment information is about to expire and that they should make an update as soon as possible. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            How easy is it to implement?
                                        </h5>
                                        <p>
                                            Extremely, with tools like <a href="https://www.intercom.com/" target="_blank">Intercom.</a>  
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">What are the pros?</h5>
                                        <ul>
                                            <li>
                                                Get in front of customers before payment method expiry 
                                            </li>
                                            <li>
                                                Non-intrusive
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What are the cons?
                                        </h5>
                                        <p>
                                            You might miss out on the segment of your customers that don’t use your app or website very often. Customers who use your service via API, for example. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            All things considered?
                                        </h5>
                                        <p>
                                            Implement! Although, note that you should use these notifications as an alternative to the pre-dunning email rather than a companion - an update notification can make your pre-dunning email sound all the more aggressive.
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            Are there other tactics on the list that complement this one?
                                        </h5>
                                        <p>
                                             Yes, card/account updaters (which automatically update card information with zero intervention from customers required) go well with both in-app notifications and pre-dunning emails making them a great tactic irrespective of how you’re planning to update expiring cards. 

                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <!-- =========================== End: Tactic 02 ===========================-->
                        <div class="gstart-divider"><span></span></div>
                        <!-- ========================== start: Tactic 03  =========================-->
                        <section class="gstart" id="card-Account-updater">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 03</div>
                                <h3 class="ff-freightDisPro">Card/Account updater</h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What is it? 
                                        </h5>
                                        <p>
                                            Payment gateways like Stripe and Braintree have tied up with card networks like Visa and MasterCard to automatically update the cards in your system without customer intervention.
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            How easy is it to implement?
                                        </h5>
                                        <p>
                                            Extremely (if you’re using Stripe or Braintree)  
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">What are the pros?</h5>
                                        <ul>
                                            <li>
                                                Automatic, with close to no effort required from you or your team 
                                            </li>
                                            <li>
                                                Creates a frictionless renewal experience even if a card is set to expire. (wow) 
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What are the cons?
                                        </h5>
                                        <p>
                                            A few cards can slip through the cracks - international cards, prepaid cards, and cards belonging to unsupported card networks are not updated. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            All things considered?
                                        </h5>
                                        <p>
                                            100% implement this if you can.
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            Are there other tactics on the list that complement this one?
                                        </h5>
                                        <p>
                                            This is a tricky one, because you want to catch the three in ten cards that could possibly fall through the cracks, but you don’t want to send out emails or otherwise disturb the customer with cards that have already been updated. In-app notifications are the way to go - they’re non-intrusive and can be targeted to reach the customers you want. 
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 03  ===========================-->
                        <div class="gstart-divider"><span></span></div>
                        <!-- ========================== start: Tactic 04  =========================-->
                        <section class="gstart" id="card-updater-info-on-your-website">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 04</div>
                                <h3 class="ff-freightDisPro">Display the right card numbers in your website or customer portal if you’re getting cards automatically updated </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What is it?
                                        </h5>
                                        <p>
                                             If you’re getting cards updated without customer intervention make sure that you display up-to-date numbers (the last four digits commonly appear in more than one place on a payment form, especially if it’s pre-filled) in your website or customer portal. You don’t want your customer to believe they have to update their card information when an update isn’t required. 
                                        </p>

                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            How easy is it to implement?
                                        </h5>
                                        <p>
                                            Easy, it’s just a question of pushing information from your card/account updater to your website. 
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 04  ===========================-->
                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 05  ===========================-->
                        <section class="gstart" id="optimize-the-checkout-page-process">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 05</div>
                                <h3 class="ff-freightDisPro">Optimize your ‘card update’ page</h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What is it?
                                        </h5>
                                        <p>
                                            If you’re linking your customers to a page where they’ll be able to update their card information, make sure the page is optimized so they don’t leave without finishing.
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            How easy is it to implement?
                                        </h5>
                                        <p>
                                            Easy. Here’s <a href="https://churnbuster.io/guides/optimize-credit-card-update-page-for-customer-retention/" target="_blank">Churn Buster’s guide to doing it.</a>  
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            Are there other tactics on the list that complement this one?</h5>
                                        <p>
                                             If you’re sending out pre-dunning emails then they should (ideally) contain a link to a page like this. 
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 05 ===========================-->

                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 06  ===========================-->
                        <section class="gstart" id="mcc-registered-to-accurately-reflect-your-business">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 06</div>
                                <h3 class="ff-freightDisPro">MCC (Merchant category code) registered to accurately reflect your business.</h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What is it?
                                        </h5>
                                        <p>
                                            Merchant Category Codes or MCCs are four digit codes assigned to a business when it begins to accept online payments. They are good ways for payment processing companies and banks to identify your business and the category it belongs to. This matters for two reasons: 
                                        </p>

                                        <ul>
                                            <li>
                                                There are transaction limits assigned to certain categories of business (especially high-risk ones).
                                            </li>
                                            <li>
                                                Issuing banks have been known to reject transactions because the description on file against your MCC is vastly different from descriptions of your company (that the bank puts together by itself).
                                            </li>
                                        </ul>

                                        <p>
                                            It’s worth it to figure out if your category code accurately reflects the kind of business you are running. Moz, for example, got its <a href="https://www.forbes.com/sites/forbesexecutivefinancecouncil/2016/09/23/six-practical-methods-to-reduce-involuntary-churn-for-saas-businesses/#4d43cfc3f00f" target="_blank"> code changed from 5734 (computer software store) to 5817 (digital goods)</a> to more accurately reflect the business they were in.
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            How easy is it to implement? 
                                        </h5>
                                        <p>
                                            Difficult. You can petition for your MCC to be changed but the decision ultimately lies with your bank.  
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 06 ===========================-->

                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 07  ===========================-->
                        <section class="gstart" id="alternative-gateways-processor-for-emergencies">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 07</div>
                                <h3 class="ff-freightDisPro">Alternative processors/gateways in case your payment systems are down</h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What is it?
                                        </h5>
                                        <p>
                                            Backup payment processors and backup payment gateways can continue to process payments in the event that the primary processors and gateways have outages or have server downtimes. <a href="https://www.chargebee.com/blog/gateway-emergency-plan-b/" target="_blank">It can happen. </a>
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            How easy is it to implement?
                                        </h5>
                                        <p>
                                            Depends on the gateway/processor. Getting your backup gateway off the ground can take anywhere from a few hours to a few days (depending on what kind of business you have and what kind of merchant account/bank you are using).  
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">What are the pros?</h5>
                                        <ul>
                                            <li>
                                                Technical emergencies or outages won’t get in the way of your customers paying you.
                                            </li>
                                            <li>
                                                If a legitimate payment gets flagged by a gateway and cannot be processed, you can use an alternative. 
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What are the cons?
                                        </h5>
                                        <p>
                                            Gateways can be costly. You’ll have to weigh this cost against the advantage of always being prepared to accept payments. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            All things considered?
                                        </h5>
                                        <p>
                                            Implement. In the event of a gateway outage, a backup system to handle payments will ensure that your customers have a seamless renewal experience. Always. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            Are there other tactics on the list that complement this one? 
                                        </h5>
                                        <p>
                                            Payments can fail at the gateway level for more reasons than an outage. If you are unable to implement MCCs that better suit your business or are unable to tag payments as recurring, it’s possible that legitimate payments are caught up in a gateway’s fraud detection nets and stalled. Backup systems will help you get around issues like these.
                                        </p>
                                    </div>


                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 07 ===========================-->

                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 08  ===========================-->
                        <section class="gstart" id="flag-a-payment-as-recurring-in-your-payment-gateway">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 08</div>
                                <h3 class="ff-freightDisPro">Flag a payment as recurring in your system/payment gateway </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What is it?
                                        </h5>
                                        <p>
                                            Tagging a payment as recurring with your gateway so that multiple charges on the same payment method aren’t tagged as ‘suspicious’.
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            How easy is it to implement?
                                        </h5>
                                        <p>
                                            Extremely. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What are the pros?
                                        </h5>
                                        <p>
                                             Tagging a payment as recurring reduces the possibility that it will be <a href="http://blog.clear.sale/the-beginners-guide-to-fraud-filters" target="_blank">confused for a fraudulent payment by the gateway or processor</a> you are using. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What are the cons?
                                        </h5>
                                        <p>
                                             Available only with certain gateways 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            All things considered?
                                        </h5>
                                        <p>
                                             Implement if your gateway supports it.
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        
                        <!-- =========================== End:Tactic 08 ===========================-->

                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 09  ===========================-->
                        <section class="gstart" id="brand-your-customers-bank-statements">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 09</div>
                                <h3 class="ff-freightDisPro">Branding your customers’ bank statements</h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What is it?
                                        </h5>
                                        <p>
                                            What do your customers see when they look up charges that you’ve made on their cards or bank accounts? If it’s difficult for a customer to associate the charge on a bank statement with your company, it could result in a chargeback.  Here’s Basecamp’s story of how they <a href="https://signalvnoise.com/posts/1545-how-we-reduced-chargebacks-by-30-as-a-percentage-of-sales" target="_blank">reduced chargebacks by 30% by adding an explanatory URL to their customers’ bank statements.</a>
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            How easy is it to implement?
                                        </h5>
                                        <p>
                                            Easy. Configure what you’d like your customers to see when they pull up a charge made in your company's name with your payment gateway. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            All things considered?
                                        </h5>
                                        <p>
                                            People usually don’t check bank statements everyday. This makes it especially important that they can identify the charges you’ve made on their cards or accounts when reviewing their statements. 
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 09 ===========================-->

                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 10  ===========================-->
                        <section class="gstart" id="request-that-a-customer-shift-to-ach-sepa">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 10</div>
                                <h3 class="ff-freightDisPro">
                                    Request that a customer shift to ACH/SEPA 
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What is it?
                                        </h5>
                                        <p>
                                            With an astounding failure rate of only <a href="https://gocardless.com/guides/posts/eliminating-involuntary-churn/" target="_blank">0.5%</a>, Direct Debit payments are by far the most efficient way to collect recurring payments.    
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            How easy is it to implement?
                                        </h5>
                                        <p>
                                            Difficult. Both from the perspective of getting the <a href="https://gocardless.com/guides/intro-to-direct-debit/accessing/" target="_blank">back-end off the ground</a> and from the perspective of pushing your customers to make the shift. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">What are the pros?</h5>
                                        <ul>
                                            <li>
                                                The direct line between the issuing bank and the receiving bank that direct debit transfers afford eliminates a host of problems that might befall a transaction and cause it to fail (bank accounts can’t be lost or stolen, for example).
                                            </li>
                                            <li>
                                                Planning for failures becomes easier because the scope of what could go wrong and what actually does reduces so much. 
                                            </li>
                                            <li>
                                                Direct Debit greatly <a href="https://gocardless.com/guides/intro-to-direct-debit/saas-companies/" target="_blank">reduces admin time</a> because payments are automatically taken and tracked each month. 
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What are the cons?
                                        </h5>
                                        <ul>
                                            <li>
                                                Doesn’t make sense for small businesses as interacting with the ACH and SEPA networks require developer time. 
                                            </li>
                                            <li>
                                                Direct Debit payments typically <a href="https://gocardless.com/direct-debit/timings/" target="_blank">take more time</a> than card/online wallet payments. While card payments land in your merchant account almost immediately, direct debit payments can take between 3 and 10 days, depending on the network.  
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            All things considered?
                                        </h5>
                                        <p>
                                            If your business is growing, you should definitely think about implementing direct debit as a payment method. The delay is worth the tiny rate of failures. 
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 10 ===========================-->

                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 11  ===========================-->
                        <section class="gstart" id="payment-is-due-summary">
                            <header class="gstart-header">
                                <h3 class="ff-freightDisPro">
                                    Payment due - Summary
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <p>
                                            There are certain preparatory measures that you definitely have to implement (if you can) including an accurate MCC, flagging a payment as recurring, and backup payment processors or gateways.
                                        </p>
                                    
                                        <p>
                                            Beyond these tactics, it's up to you to decide what approach you’d like to take with your customers when it comes to updating payment details. You could take the pre-dunning email approach (that goes along with an optimal card update page) or you could use a card/account updater and in-app/website notifications to non-intrusively make sure that expired cards don’t get in the way of your revenue.  
                                        </p>

                                        <p>
                                            Nothing like reducing your payment failure rate to zero, though, and direct debit is the closest that you can get to that. It’s worth it, especially if you’re growing and processing more transactions and bigger ticket amounts, to suggest making the move to direct debit to your customers. 
                                        </p>

                                        <p>
                                            The harsh reality, though, all tactics considered, is that some payments will fail anyway. Despite all the planning.
                                        </p>
                                    </div>


                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 08 ===========================-->

                        <div class="gstart-divider"><span></span></div>

                        <!-- ========================== start:  =========================-->
                        <section class="gstart" id="first-try-failed-collateral-damage">
                            <header class="gstart-header">
                                <h1 class="gstart-main__header-title ff-freightDisPro" style="text-align: left">
                                    Failure on the First Try - Collateral Damage
                                </h1>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    <p>
                                        Planning in place, these tactics will catch any payment failures that make it through your first line of defense. 
                                    </p>
                                </div>
                            </article>
                        </section>
                        <!-- =========================== Start:Tactic 11  ===========================-->
                        <section class="gstart" id="bin-blacklist">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 11</div>
                                <h3 class="ff-freightDisPro">
                                    Implement a BIN blacklist 
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What is it?
                                        </h5>
                                        <p>
                                            <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-prepaid-card-a-credit-card-and-a-debit-card-en-433/" target="_blank">Prepaid cards and gift cards</a> have to be continually recharged, are usually valid for a short period of time, and are not directly linked to a particular bank account - this means they are <a href="http://www.bankrate.com/banking/5-prepaid-debit-card-scams-to-avoid/" target="_blank">constantly flagged by fraud detection systems</a>, and associated with a high failure rate. Blacklist certain cards that you would like to avoid processing and an error message will pop up every time a customer tries it.  
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            How easy is it to implement?
                                        </h5>
                                        <p>
                                            Moderately difficult. The first six digits on a card are its BIN or Bank Identification Number. You can compile a list of BINs that you don’t want to accept and compare the cards that your customers are using against the list to avoid payment failures at sign up and at future renewals. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">What are the pros?</h5>
                                        <p>
                                            Catch high-risk cards before they are used. Forcing your customers to use cards that sit well with gateway fraud detection systems and receiving banks can go a long way towards slashing those payment failure rates.
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What are the cons?
                                        </h5>
                                        <p>
                                            You could potentially miss out on valuable customers by blacklisting prepaid cards.
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            All things considered?
                                        </h5>
                                        <p>
                                            Implementing a BIN blacklist might stop some customers from signing up if they don’t have an alternative means of payment. Weigh this against the advantage of lowering your payment failure rate by accepting only low-risk cards (like credit cards and debit cards). 
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 11 ===========================-->

                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 12  ===========================-->
                        <section class="gstart" id="backup-payment-methods">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 12</div>
                                <h3 class="ff-freightDisPro">
                                    Backup payment methods 
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What is it?
                                        </h5>
                                        <p>
                                            Set up backup payment methods for each of your customers to immediately fall back on when the first payment method fails.
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            How easy is it to implement?
                                        </h5>
                                        <p>
                                            Difficult. This means either collecting two payment methods from each customer on sign up or giving your customers the means to add new payment information months into their subscriptions (which can be a little inconvenient).
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">What are the pros?</h5>
                                        <ul>
                                            <li>
                                                Catch payment failure as it’s happening and avoid the dunning process. 
                                            </li>
                                            <li>
                                                Nearly foolproof tactic to combat payment failure - it’s almost unheard of for two different payment methods to fail at the same time. 
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What are the cons?
                                        </h5>
                                        <ul>
                                            <li>
                                                Requires customer effort 
                                            </li>
                                            <li>
                                                Might be costly to implement 
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            All things considered?
                                        </h5>
                                        <p>
                                            This is a definitely a nice-to-have tactic if you can afford the effort to set it up. 
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 12 ===========================-->
                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 11  ===========================-->
                        <section class="gstart" id="first-try-failed-summary">
                            <header class="gstart-header">
                                <h3 class="ff-freightDisPro">
                                    First try failed - Summary
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <p>
                                            Granted, there are only two tactics you can implement to combat the first charge on a payment method failing - one difficult to implement and the other that could cost you valuable customers. Businesses that can’t afford the resources to implement backup payment methods or want to attract all the customers they can are best served skipping over this section and focusing on the other stages of the life cycle.  
                                        </p>
                                    </div>


                                </div>
                            </article>
                        </section>
                        <!-- =========================== Start:Tactic 11  ===========================-->
                        <div class="gstart-divider"><span></span></div>

                        <!-- ========================== start:  =========================-->
                        <section class="gstart" id="retrying-a-payment-method-damage-control">
                            <header class="gstart-header">
                                <h1 class="gstart-main__header-title ff-freightDisPro" style="text-align: left">
                                    Retrying a Payment Method - Damage Control
                                </h1>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    <p>
                                        Payment failures are caused by either <a href="https://articles.braintreepayments.com/control-panel/transactions/declines" target="_blank">‘soft or hard declines’</a>. Soft declines are declines that result from a temporary problem with a gateway, processor, or network. Hard declines, on the other hand, result from problems that are a little more permanent - no money in the bank, stolen card, problems that are a little less temporary than a glitch in the network or a gateway timeout. 
                                    </p>

                                    <p>
                                        A retry or retries will almost always fix payments that have failed due to a soft or a hard decline (in most cases). The questions are:
                                    </p>
                                    

                                    <ul>
                                        <li>
                                            When should you retry a payment? 
                                        </li>
                                        <li>
                                            How many times should you retry a payment before you mark it as failed permanently?
                                        </li>
                                        <li>
                                            Should your retry rules look different for different segments of customers? 
                                        </li>
                                        <li>
                                            Should you treat your hard decline retries differently from your soft decline retries? 
                                        </li>
                                    </ul>
                                    

                                    <p>
                                        The four questions are intricately connected - hard declines require more time to fix than soft declines (whether the fix needs to happen on your gateway’s side or your customer’s side), businesses need more time update payment information than individual consumers do. When and how your retries happen ought to reflect this connection. 
                                    </p>
                                </div>
                            </article>
                        </section>

                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 13  ===========================-->
                        <section class="gstart" id="specific-retry-cycles-for-declines">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 13 & 14</div>
                                <h3 class="ff-freightDisPro">
                                    Segment your retry cycles by type of decline
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <p>
                                            A good indicator of what kind of decline you’re dealing with is the error message you receive from your gateway when a payment fails. If the error message is vague or generic, the associated error code will tell you (at the very least) whether the problem was with your gateway, the network, the processor, or your customer’s bank so you can set an appropriate retry cycle in place to deal with it. 
                                        </p>
                                        <p>
                                            The hard declines typically need more time to fix. If you can pinpoint a payment failure to a soft decline, on the other hand, data from Adyen suggests that the best tactic is to <a href="https://www.adyen.com/blog/5-payments-insights-for-the-subscription-economy" target="_blank">retry it immediately</a> (even for B2B businesses).
                                        </p>

                                        <p>
                                            If you’re using Stripe, you can set up <a href="http://blog.stunning.co/quick-tip-stripe-attempts-to-pay-invoices-up-to-4-times-not-3/" target="_blank">three retries over two weeks</a> - a good tactic for B2C companies that are dealing with small ticket sizes and customers who can respond to problems quickly. A B2B business, on the other hand, or a business dealing with large ticket sizes might find it valuable to account for internal payment approval cycles and other business-specific processes with a retry cycle that lasts a month, with a retry every five days (avoiding the weekends). 
                                        </p>
                                    </div>

                                    
                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 13 ===========================-->

                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 14  ===========================-->
                        <section class="gstart" id="retry-at-particular-times">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 15</div>
                                <h3 class="ff-freightDisPro">
                                    Retry at particular times
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <p>
                                            Pick up data from your gateway to find out what time during the day might be best for a retry. 
                                        </p>
                                    
                                        <p>
                                            <a href="https://www.adyen.com/blog/5-payments-insights-for-the-subscription-economy" target="_blank">Adyen, for example, has compiled interesting insights around timing your retries.</a> <em>(Navigate to the bottom of Adyen’s post to download the insights)</em>
                                        </p>

                                        <p>
                                            Roelant Prins, from Adyen writes, ‘In the U.S., for example, refusal rates peak toward the end of the month just before people are paid. And we have found that nighttime hours have a lower success rate by 2%, due to issuing banks tightening their risk systems’. 
                                        </p>

                                    </div>

                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 08 ===========================-->

                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 08  ===========================-->
                        <section class="gstart" id="create-dunning-personas">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 16</div>
                                <h3 class="ff-freightDisPro">
                                    Inform your retry cycles with dunning personas
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <p>
                                            Group your customer base into dunning personas based on their ticket sizes, where they’re located (relative to where you are), and what kind of payment process you have in place for them (invoice based payments vs. automated card and online wallet payments). This will give you an idea of the professional vs domestic need you are serving and will allow you to tailor your retry cycles to suit both. 
                                        </p>

                                        <p>
                                            Of course, retries are only one side of the coin after a payment has failed. The other is communicating the failure, communicating the retries, and pushing your customers towards action. 
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 08 ===========================-->
                        <div class="gstart-divider"><span></span></div>

                        <!-- ========================== start:  =========================-->
                        <section class="gstart" id="dunning-emails-communicating-retries">
                            <header class="gstart-header">
                                <h1 class="gstart-main__header-title ff-freightDisPro" style="text-align: left">
                                    Dunning Emails - Communicating Retries
                                </h1>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    <p>
                                        We’ve said a ton about the communication that goes along with retrying a failed payment. From <a href="https://www.chargebee.com/blog/dunning-management-for-saas-business/" target="_blank">the basics</a>, to <a href="https://www.chargebee.com/blog/reduce-churn-with-dunning-management/" target="_blank">how you can get more proactive</a>, to a <a href="https://www.chargebee.com/resources/infographics/dunning-benchmarks-subscription-businesses/" target="_blank">list of insights that everyone who wants to implement dunning can benefit from</a>. Dunning has been covered.
                                    </p>

                                    <p>
                                        That being said, here are a few (far-away-from-the-spotlight) tactics you can implement to supercharge your dunning cycle.
                                    </p>
                                </div>
                            </article>
                        </section>
                        <!-- =========================== Start:Tactic 08  ===========================-->
                        <section class="gstart" id="set-up-a-dunning-cycle">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 17</div>
                                <h3 class="ff-freightDisPro">
                                    Set up a dunning cycle that suits your customer 
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <p>
                                            Don’t let your retry decide when you send a dunning email out. Instead, let knowledge of your customers. 
                                        </p>

                                        <p>
                                            Here’s Andrew Culver, the founder of Churn Buster, <a href="https://www.quora.com/What-are-the-industry-average-rates-for-involuntary-churn-on-credit-card-subscriptions" target="_blank">giving us an example of what this means</a>, ‘don’t email customers at 3 AM in the morning because that’s when the payment processor failed the payment, but email them at 2 PM on a business day because that’s what MailChimp tells you your most successful time of day for reaching customers is’. 
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <div class="gstart-divider"><span></span></div>


                        <section class="gstart" id="dunning-personas">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 18</div>
                                <h3 class="ff-freightDisPro">
                                    Let your dunning personas inform your dunning emails 
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <p>
                                            As an extension, align your dunning communication to the dunning personas you might have set up for your retry cycles. 
                                        </p>

                                        <p>
                                            One of your business customers, for example, with a retry cycle that stretches 28 days will not need as many email reminders as an individual customer with a retry cycle of 14. Retry cycles are not an indicator of how you should structure your dunning communication.  
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <div class="gstart-divider"><span></span></div>

                        <section class="gstart" id="use-dunning-emails-to-build-value">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 19</div>
                                <h3 class="ff-freightDisPro">
                                    Use dunning emails to build value 
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <p>
                                            Turn your dunning email into marketing opportunities to build value around your product. Here is Chris Hexton: <a href="https://unbounce.com/email-marketing/4-ways-to-turn-boring-transactional-emails-into-cash/" target="_blank">‘every single one of these emails is an opportunity to engage your leads’</a>. 
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <div class="gstart-divider"><span></span></div>

                        <section class="gstart">
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    <p>
                                        All you can do is coax out a payment, short of hiring a Vinnie Jones type to bust down a door, which I don’t recommend. And all the coaxing in the world isn’t going to convince a customer who just doesn’t want to pay you, so what do you do when dunning fails? 
                                    </p>
                                </div>
                            </article>
                        </section>

                        <!-- ========================== start:  =========================-->
                        <section class="gstart" id="post-dunning-action">
                            <header class="gstart-header">
                                <h1 class="gstart-main__header-title ff-freightDisPro" style="text-align: left">
                                    Post Dunning Action - Moving Forward
                                </h1>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    <p>
                                        When you reach this stage of the payment failure life cycle, the last remaining questions are
                                    </p>

                                    <ul>
                                        <li>
                                            what to do with the customer’s subscription and 
                                        </li>
                                        <li>
                                            whether you can fine tune your system so that this happens less. 
                                        </li>
                                    </ul>

                                </div>
                            </article>
                        </section>
                    
                        <section class="gstart" id="dont-cancel-the-subscription-immediately">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 20</div>
                                <h3 class="ff-freightDisPro">
                                    Don’t cancel unpaid subscriptions 
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <p>
                                            Reconsider canceling a subscription when your retries are over and you haven’t recovered that failed payment. Canceling a customer’s subscription means putting in the effort to get him back on board again. Not to mention that the delay might actually be an obstinate problem that’s difficult for a customer to get around. It’s always better for you to err on the side of caution where <a href="http://blog.profitwell.com/how-to-calculate-ltv-for-saas-the-right-way" target="_blank">LTV or the lifetime value of the customer in question</a> is concerned.
                                        </p>
                                        <p>
                                            You could put the subscription on hold until he gets back to you or deactivate it instead of canceling. In essence, make it as easy as you can to get this customer back if he wants to.
                                        </p>


                                        <p>
                                            <strong>Pro-tip:</strong> Let the ticket size be your compass here. Keep your big customers on, even if they happen to default on a payment, and cancel smaller subscriptions after your dunning cycle is complete.
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <div class="gstart-divider"><span></span></div>
                        
                        <section class="gstart" id="revisit-billing-cycles">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 21</div>
                                <h3 class="ff-freightDisPro">
                                    Consider an annual billing cycle 
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <p>
                                            Revisit your billing cycles. Price Intelligently shows that SaaS companies can use both <a href="http://www.priceintelligently.com/blog/bid/194370/boosting-mrr-annual-vs-monthly-subscriptions-in-your-saas-pricing-strategy" target="_blank">monthly and annual subscriptions to boost MRR</a> and can guide you through getting a pricing model that works best for you off the ground. Known to considerably reduce chargebacks and churn, here is a list of <a href="http://blog.paylane.com/annual-vs-monthly-billing-saas/" target="_blank">the pros and the cons</a> of the annual billing cycle.    
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <div class="gstart-divider"><span></span></div>

                        <!-- ========================== start:  =========================-->
                        <section class="gstart" id="sending-out-an-invoice">
                            <header class="gstart-header">
                                <h1 class="gstart-main__header-title ff-freightDisPro" style="text-align: left">
                                    Sending out an Invoice - Revenue Recovery for Enterprise Customers
                                </h1>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    <p>
                                        Last, but certainly not least, businesses that operate with invoice-based payments can use them to recover revenue, to make renewals a little more frictionless, and to build value around their products or services. Here are few tactics that you can incorporate into your business via your invoices.
                                    </p>
                                </div>
                            </article>
                        </section>

                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 08  ===========================-->
                        <section class="gstart" id="payment-terms">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 22</div>
                                <h3 class="ff-freightDisPro">
                                    Payment terms on enterprise invoices
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What is it?
                                        </h5>
                                        <p>
                                            Selling to companies means planning for complex payment cycles - from invoice approval chains that go on for days to limits on cash flow for a particular month or quarter. Some businesses require a certain number of days after an invoice is raised to complete a payment.
                                        </p>
                                        <p>
                                            Enter the <a href="https://www.chargebee.com/blog/payment-terms-net-d/" target="_blank">payment term</a>. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            How easy is it to implement?
                                        </h5>
                                        <p>
                                            Moderately difficult, if you’re uncomfortable with delayed payments. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">What are the pros?</h5>
                                        <ul>
                                            <li>
                                                Businesses are very appreciative of payment terms so implementing this will definitely result in a few enterprise smiles.
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What are the cons?
                                        </h5>
                                        <ul>
                                            <li>
                                                Payment terms on an invoice basically grant businesses a little leeway with their payments, changing lost revenue to late revenue. How appealing this tactic sounds is directly proportional to how comfortable you are with that. 
                                            </li>
                                            <li>
                                                You have to configure reminders and follow ups after an invoice is sent out and before it is due so your customer is aware of how many days he has left to complete a payment. 

                                            </li>
                                        </ul>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            All things considered?
                                        </h5>
                                        <p>
                                            Implement only if you have to. 
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 08 ===========================-->
                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 08  ===========================-->
                        <section class="gstart" id="advance-invoices">
                            <header class="gstart-header">
                                <div class="gstart-header__label">Tactic 23</div>
                                <h3 class="ff-freightDisPro">
                                    Advance Invoices and payments upfront
                                </h3>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    
                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What is it?
                                        </h5>
                                        <p>
                                            Collecting payments for a set number of terms before a subscription begins. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            How easy is it to implement?
                                        </h5>
                                        <p>
                                            Depends on your customer. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">What are the pros?</h5>
                                        <ul>
                                            <li>
                                                You reduce the risk of bad debt or failed payments later down the line. 
                                            </li>
                                            <li>
                                                This is a great option for businesses because it allows you to sidestep complex invoice approval cycles later down the line, charging for something when the deal is still hot. 
                                            </li>
                                            <li>
                                                There are a whole bunch of reasons getting a payment up front can be beneficial to a growing saas company, according to <a href="http://www.insightsquared.com/2015/01/saas-billing-why-you-want-upfront-payments/" target="_blank">insights squared</a>, especially considering that you need revenue to be coming in at the critical (early) stages when you’re investing in sales and marketing, laying the groundwork for customers who aren’t there just yet. 
                                            </li>
                                            <li>
                                                You reduce the risk of bad debt or failed payments later down the line. If it’s a make-or-break feature that will seal the sales deal for a customer, invoicing before a subscription term begins is a good way to collect the resources you need to deliver on your promise of getting the feature up and recovering the revenue that you might have lost had the sale fallen through. 
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            What are the cons?
                                        </h5>
                                        <p>
                                            Not all your customers will be sold on the idea of advance invoices. 
                                        </p>
                                    </div>

                                    <div class="gstart-blk">
                                        <h5 class="gstart-blk__title">
                                            All things considered?
                                        </h5>
                                        <p>
                                            If your customers are up for advance invoices, definitely implement them. 
                                        </p>
                                    </div>

                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 08 ===========================-->

                        <div class="gstart-divider"><span></span></div>
                        <!-- =========================== Start:Tactic 08  ===========================-->
                        <section class="gstart" id="tying-it-all-together">
                             <header class="gstart-header">
                                <h1 class="gstart-main__header-title ff-freightDisPro" style="text-align: left">
                                    Tying It All Together
                                </h1>
                            </header>
                            <article class="gstart-content">
                                <div class="center-block-sm">
                                    

                                    <div class="gstart-blk">
                                        <p>
                                            That’s revenue recovery to fight involuntary churn, in a nutshell. Planning so that there’s never (or there’s rarely, at the very least) a situation where someone who wants to pay you can’t. The planning must ideally be proactive (and come before the payment is made) and reactive (because payments are going to fail no matter how proactive you are). 
                                        </p>
                                        <p>
                                            Of the twenty odd tactics here, a different permutation and combination will suit every business. 
                                        </p>
                                        <p>
                                            A B2B business, for example, would do well to implement advance invoices and payment terms, but switch out pre-dunning emails and credit card updaters for direct debit payments via ACH or SEPA.
                                        </p>
                                        <p>
                                            A B2C business that accepts cards and PayPal, for example, with Authorize.Net as their preferred gateway and small ticket sizes, would do better with pre-dunning emails and short retry cycles, completely eliminating the invoice stage and the first try failure stage of the life cycle. 
                                        </p>
                                        <p>
                                            A B2C business with higher ticket sizes, on the other hand, would be best suited to have Stripe or Braintree as a payment gateway so that cards are automatically updated along with in-app notifications to catch customers that the updater doesn’t and custom messages on their bank statements. 

                                        </p>
                                        <p>
                                            The medley is mind-numbing.
                                        </p>
                                        <p>
                                            In every case, however, seeing the life cycle as a whole is <em>integral to implementing tactics that complement each other as a payment moves through every stage.</em> 
                                        </p>
                                        <p>
                                            These tactics should ideally work like a multi-layered sieve, together, with some catching payments that the others failed to. How good your sieve is fundamentally depends on how you structure these tactics together - factoring in the cost of each, the kind of payments each can recover, and the amount of effort you’ll need from your team and your customers to implement them.
                                        </p>
                                        <br>
                                        <p style="text-align: center"><strong>Want to get your payment recovery tactics off <br class="visible-lg">the ground in a matter of minutes?</strong></p>

                                        <div style="text-align: center">
                                            <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-success" style="color: #fff"> Sign up for Chargebee now</a>
                                        </div>

                                    </div>


                                </div>
                            </article>
                        </section>
                        <!-- =========================== End:Tactic 08 ===========================-->
                        <section class="blk-page__like">
                            <div class="blk-page__like-title">Dig the guide? Show it some love!</div>
                            <div class="blk-page__like-logo">
                                
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.chargebee.com/resources/guides/involuntary-churn-payment-failed/" class="cb-sociallogo_box facebook" onclick="ga('send', 'event', 'website', 'share-intent', 'fb-button')">
                                    <img src="/static/website/version/images/icon/jan2019/facebook-white.svg" alt="">
                                </a>

                                <a target="_blank" href="https://twitter.com/home?status=Failed%20Payments%20and%20Involuntary%20Churn%20%E2%80%94%20A%20Definitive%20Guide%20%40chargebee%20https%3A//www.chargebee.com/resources/guides/involuntary-churn-payment-failed/" class="cb-sociallogo_box twitter" onclick="ga('send', 'event', 'website', 'share-intent', 'twitter-button')">
                                    <img src="/static/website/version/images/icon/jan2019/twitter-white.svg" alt="">
                                </a>

                                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.chargebee.com/resources/guides/involuntary-churn-payment-failed/&title=Failed%20Payments%20and%20Involuntary%20Churn%20%E2%80%94%20A%20Definitive%20Guide&summary=Implement%20these%20tactics%20at%20every%20stage%20of%20the%20payment%20failure%20life%20cycle%20to%20optimize%20your%20revenue%20recovery,%20recover%20as%20many%20failed%20payments%20as%20possible,%20and%20fight%20involuntary%20churn.&source=" class="cb-sociallogo_box linkedin" onclick="ga('send', 'event', 'website', 'share-intent', 'linkedin-button')" target="_blank">
                                    <img src="/static/website/version/images/icon/jan2019/linkedin.svg" alt="">
                                </a>

                            </div>
                        </section>




                    </div>
                </div>
            </div>
        </article>

        <div class="gs-float-navigate hidden-xs hidden-sm">
            <a href="#gs-navigation">Back to Navigation</a>
        </div>
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
        (function(d) {
            var config = {
                    kitId: 'kdp4uxr',
                    scriptTimeout: 3000,
                    async: true
                },
                h = d.documentElement,
                t = setTimeout(function() { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout),
                tk = d.createElement("script"),
                f = false,
                s = d.getElementsByTagName("script")[0],
                a;
            h.className += " wf-loading";
            tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
            tk.async = true;
            tk.onload = tk.onreadystatechange = function() { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return;
                f = true;
                clearTimeout(t); try { Typekit.load(config) } catch (e) {} };
            s.parentNode.insertBefore(tk, s)
        })(document);

        $(document).scroll(function() {
          var y = $(this).scrollTop();
          if (y > 3000) {
            $('.gs-float-navigate').fadeIn();
          } else {
            $('.gs-float-navigate').fadeOut();
          }
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
<style type="text/css">
    .gstart-header__label{
        padding: 12px 24px;
        font-size: 14px;
        letter-spacing: 2.2px;
    }
    #ch-js-header-cloned{
        display: none;
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->