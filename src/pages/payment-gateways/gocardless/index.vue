<template>
    <div>
        <app-meta 
            :cb-title="'Subscriptions with SEPA & Direct Debit payments, now simplified - Chargebee'" 
            :cb-desc="'Chargebee with GoCardless - the simplest way to accept direct debit payment for your subscription business'" 
            :cb-url="'/payment-gateways/gocardless-direct-debit/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/new.css,/static/website/version/styles/stripe.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="true" />
        <div class="cb-body">
            <!-- ===============================================================
                                    Start Banner Part  
            ===============================================================-->
            <section class="strp-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-6">
                            <h1 class="ff-acuminpro">Go Global with GoCardless: Your Gateway to Direct Debit Payments across the World</h1>
                            <div class="strp-action">
                                <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-outline__primary">GET STARTED FOR FREE!</a>
                            </div>
                            <div>It’s really free, for your first $50K!</div>
                            <div class="strp-fback__content">
                                Chargebee with GoCardless - the simplest way to accept direct debit for your subscription business
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ================= End Banner part =================  -->

            <!-- ================= Selling to Europe Section =================  -->
            <section class="strp-feature m-y-3l m-y-6s-xs">
                <div class="container">
                    <div class="row strp-cols">
                        <div class="strp-col">
                            <figure class="strp-feature__img dashboard-img">
                                <div class="feature__img-dashboard">                
                                    <img src="/static/website/version/images/payment-gateways/gocardless/all-the-way-to-the-us.png" class="img-responsive" alt="">
                                </div>
                            </figure>
                        </div>
                        <div class="strp-col"> 
                            <div class="strp-feature__content strp-feature__content-right" style="max-width: 360px;text-align: left;">
                                <header>
                                    <h2 class="feature__content-label">GO GLOBAL, DAY 1</h2>
                                    <div class="feature__content-title ff-acuminpro">Sell in Europe, S'il Vous Plaît</div>
                                </header>
                                
                                <section class="feature__content-text f-dashboard__content-space feature__content-text-para" style="margin-left: inherit;">
                                        <ul>
                                        <li>Accept direct debit payments from the UK via BACS, the EU via SEPA, and Sweden via Autogiro</li>
                                        <br>
                                        <li>Support multi-currency payments and localise the subscription experience in multiple languages. Make your customers feel at home! </li>
                                        <br>
                                        <li>Bid Adieu to tax woes with automated EU-VAT compliance</li>
                                        </ul>
                                </section>
                            </div>
                        </div> 
                        <div class="strp-col">
                            <div class="strp-feature__content strp-feature__content-right" style="max-width: 360px;text-align: left;">
                                <header>
                                    <h2 class="feature__content-label">NEW</h2>
                                    <div class="feature__content-title ff-acuminpro">Expand to American shores</div>
                                </header>
                                
                                <section class="feature__content-text f-dashboard__content-space feature__content-text-para" style="margin-left: inherit;">
                                        <ul>
                                        <li>Accept direct debit payments from customers in the USA and Canada, with support for ACH and PAD</li>
                                        <br>
                                        <li>Automatically calculate Sales Tax for customers in the US and Canada using the Chargebee-TaxJar integration</li>
                                        <br>
                                        <li>Set up additional payment gateways on Chargebee -  grow your customer base in North America by accepting card payments</li>
                                        </ul>
                                </section>
                            </div>
                        </div>
                        <div class="strp-col">
                            <div class="strp-feature__content strp-feature__content-right" style="max-width: 360px;text-align: left;">
                                <header>
                                    <h2 class="feature__content-label">NEW</h2>
                                    <div class="feature__content-title ff-acuminpro">Grow your business across ANZ</div>
                                </header>
                                
                                <section class="feature__content-text f-dashboard__content-space feature__content-text-para" style="margin-left: inherit;">
                                        <ul>
                                        <li>Accept direct debit payments from customers in Australia and New Zealand via BECS (AUS BECS and BECS NZ)</li>
                                        <br>
                                        <li>Automatically calculate and apply Australian GST and New Zealand GST using the Chargebee-Avalara integration</li>
                                        <br>
                                        <li>Win more customers by supporting multiple payment methods - cards, digital wallets and offline payments</li>
                                        </ul> 
                                </section>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>


            <!-- ================= Invoice Section =================  -->
            <section class="strp-feature m-y-3l m-t-2l m-y-6s-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 col-md-8  hidden-xs">
                            <figure class="strp-feature__img invoice-img">
                                <div class="feature__img-invoice">
                                    <img src="/static/website/version/images/payment-gateways/cb-invoice.svg" width="613"  class="img-responsive" alt="">
                                </div>
                            </figure>
                        </div>
                        <div class="col-sm-5 col-md-4">
                            <div class="strp-feature__content">
                                <header>
                                    <h2 class="feature__content-label">Comprehensive Billing & Invoicing</h2>
                                    <div class="feature__content-title ff-acuminpro">Inspire your customers' trust</div>
                                </header>
                                <figure class="strp-feature__img invoice-img visible-xs">
                                    <div class="feature__img-invoice">
                                        <img src="/static/website/version/images/payment-gateways/cb-invoice.svg" width="613"  class="img-responsive" alt="">
                                    </div>
                                </figure>
                                <section class="feature__content-text f-invoice__content-space">
                                    <h3 class="ff-acuminpro">All the nitty gritties to handle your accounting</h3>
                                    <ul>
                                        <li>Revenue Recognition, Finance & Tax reporting with Quickbooks, Xero </li>
                                        <li>Manage everything in your invoices - right from generating VAT invoices, tracking unpaid invoices, recording partial/excess payments and export invoices via API</li>
                                        <li>Create credit notes for invoices, with no complications whatsoever</li>
                                        
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <!-- ================= Dunning Section =================  -->
            <section class="strp-feature m-y-3l m-y-6s-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 col-md-7  hidden-xs">
                            <figure class="strp-feature__img dunning-img">
                                <div class="feature__img-dunning">
                                    <img src="/static/website/version/images/home/stripe/dunning@2x.png" width="580"  class="img-responsive" alt="">
                                </div>
                            </figure>
                        </div>
                        <div class="col-sm-5 col-md-5">
                            <div class="strp-feature__content">
                                <header>
                                    <h2 class="feature__content-label">SMART DUNNING MANAGEMENT</h2>
                                    <div class="feature__content-title ff-acuminpro">Rescue lost revenue</div>
                                </header>
                                <figure class="strp-feature__img dunning-img visible-xs">
                                    <div class="feature__img-dunning">
                                        <img src="/static/website/version/images/home/stripe/dunning@2x.png" width="580"  class="img-responsive" alt="">
                                    </div>
                                </figure>
                                <section class="feature__content-text f-dunning__content-space">
                                    <h3 class="ff-acuminpro">Make involuntary churn a thing of the past with our  flexible retry logic</h3>
                                    <ul>
                                        <li>Configure retry attempts for card payments, ACH, SEPA, Amazon Payments, and more </li>
                                        <li>Set up automatic reminders for payments receivable by cash/check </li>
                                        <li>Automate requests for new payment information, before your customer’s card expires</li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- ================= email Section =================  -->
            <section class="strp-feature m-y-3l m-y-6s-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 col-md-6  hidden-xs">
                            <figure class="strp-feature__img email-img">
                                <div class="feature__img-email">                
                                    <img src="/static/website/version/images/home/stripe/mail@2x.png" width="320"  class="img-responsive" alt="">
                                </div>
                            </figure>
                        </div>
                        <div class="col-sm-5 col-md-6">
                            <div class="strp-feature__content">
                                <header>
                                    <h2 class="feature__content-label">TRANSACTIONAL EMAIL NOTIFICATIONS</h2>
                                    <div class="feature__content-title ff-acuminpro">Automate the <br class="hidden-xs">mundane</div>
                                </header>
                                <figure class="strp-feature__img email-img visible-xs">
                                    <div class="feature__img-email">                
                                        <img src="/static/website/version/images/home/stripe/mail@2x.png" width="392"  class="img-responsive" alt="">
                                    </div>
                                </figure>
                                <section class="feature__content-text f-email__content-space">
                                    <h3 class="ff-acuminpro">Keep your customers in the loop for almost every event under the subscription sun, with</h3>
                                    <ul>
                                        <li>Pre-designed email templates</li>
                                        <li>MergeVar support for complete customization</li>
                                        <li>TEXT & HTML templates for each event</li>
                                        <li>SMTP support (Sendgrid/Mailgun/Gmail)</li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- ================= dashboard Section =================  -->
            <section class="strp-feature m-y-3l m-y-6s-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-push-4 col-md-8 col-md-push-4 hidden-xs">
                            <figure class="strp-feature__img dashboard-img">
                                <div class="feature__img-dashboard">                
                                    <img src="/static/website/version/images/home/stripe/dashboard@2x.png" width="808"  class="img-responsive" alt="">
                                </div>
                            </figure>
                        </div>
                        <div class="col-sm-4 col-sm-pull-8 col-md-4 col-md-pull-8">
                            <div class="strp-feature__content strp-feature__content-right">
                                <header>
                                    <h2 class="feature__content-label">SAAS METRICS AND REPORTS</h2>
                                    <div class="feature__content-title ff-acuminpro">Stay on top of your  <br class="hidden-xs">numbers</div>
                                </header>
                                <figure class="strp-feature__img dashboard-img visible-xs">
                                    <div class="feature__img-dashboard">                
                                        <img src="/static/website/version/images/home/stripe/dashboard@2x.png" width="808"  class="img-responsive" alt="">
                                    </div>
                                </figure>
                                <section class="feature__content-text f-dashboard__content-space feature__content-text-para">
                                        <ul>
                                        <li>All the important SaaS metrics including MRR & CMRR, Refunds, ARPU on demand. </li>
                                        <li>Lost Opportunities from all your different payment channels like credit card, wire transfers, cheques, Paypal and more - all in one place</li>
                                        <li>Make intelligent business decisions using Chargebee's integration with ChartMogul.</li>
                                        </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <!-- ================= Billing experience Section =================  -->
            <section class="bg-dark-tertiary strp-feature__dark-bg p-y-1l p-y-7l">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <header>
                                <h2 class="feature__content-label">ROBUST APIs AND SDKs</h2>
                                <div class="feature__content-title ff-acuminpro">Tailor amazing billing experiences</div>
                            </header>
                            <section class="feature__content-text">
                                With intelligent RESTful APIs from Chargebee & GoCardless, you can get your subscription business up and running while forgetting to worry about us. Because we will keep doing our job. And very well at that. 
                            </section>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-7 col-md-8">
                            <div class="strp-feature__tab hidden-xs hidden-sm">
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#curl" aria-controls="net" role="tab" data-toggle="tab">CURL</a></li>
                                <li role="presentation"><a href="#php" aria-controls="php" role="tab" data-toggle="tab">PHP</a></li>
                                <li role="presentation"><a href="#ruby" aria-controls="ruby" role="tab" data-toggle="tab">RUBY</a></li>
                                <li role="presentation"><a href="#python" aria-controls="python" role="tab" data-toggle="tab">PYTHON</a></li>
                                <li role="presentation"><a href="#java" aria-controls="java" role="tab" data-toggle="tab">JAVA</a></li>
                                <li role="presentation"><a href="#net" aria-controls="net" role="tab" data-toggle="tab">.NET</a></li>
                                <li role="presentation"><a href="#node" aria-controls="node" role="tab" data-toggle="tab">NODE</a></li>
                            </ul>

                            <!-- Tab panes -->
                    <div class="tab-content">

<div role="tabpanel" class="tab-pane active" id="curl">
    <div class="strp-feature-preetify">
        <pre class="cb-dark__prettify">
            <code class="prettyprint lang-sh">
curl  https://supercharge-test.chargebee.com/api/v1/subscriptions \
    -u test_XFZWh2otngDtKBLglQfqknrrTVcuft7Mj: \
    -d customer[email]="john@user.com" \
    -d customer[first_name]="John" \
    -d customer[last_name]="Doe" \
    -d customer[phone]="+1-949-999-9999" \
    -d plan_id="spacebox-spaceplan-10-boxes" \
    -d plan_quantity="5"
            </code>
        </pre>
    </div>
</div>



<div role="tabpanel" class="tab-pane" id="php">
<div class="strp-feature-preetify">
    <pre class="cb-dark__prettify">
        <code class="prettyprint lang-php">
require 'ChargeBee.php';
ChargeBee_Environment::configure("supercharge-test","test_XFZWh2otngDtKBLglQfqknrrTVcuft7Mj");
$result = ChargeBee_Subscription::create(array(
    "customer" => array(
        "email" => "john@user.com",
        "firstName" => "John",
        "lastName" => "Doe",
        "phone" => "+1-949-999-9999"
    ),
    "planId" => "spacebox-spaceplan-10-boxes",
    "planQuantity" => 5
));
$subscription = $result->subscription();
$customer = $result->customer();
            </code>
        </pre>
    </div>
</div>


<div role="tabpanel" class="tab-pane" id="ruby">
<div class="strp-feature-preetify">
    <pre class="cb-dark__prettify">
        <code class="prettyprint lang-ruby">
require 'chargebee'
ChargeBee.configure(:site => "supercharge-test",
:api_key => "test_XFZWh2otngDtKBLglQfqknrrTVcuft7Mj")
result = ChargeBee::Subscription.create({
    :customer => {
        :email => "john@user.com", 
        :first_name => "John", 
        :last_name => "Doe", 
        :phone => "+1-949-999-9999"
    }, 
    :plan_id => "spacebox-spaceplan-10-boxes", 
    :plan_quantity => "5"
})
subscription = result.subscription
customer = result.customer
            </code>
        </pre>
    </div>
</div>



<div role="tabpanel" class="tab-pane" id="python">
<div class="strp-feature-preetify">
    <pre class="cb-dark__prettify">
        <code class="prettyprint lang-py">
chargebee.configure("test_XFZWh2otngDtKBLglQfqknrrTVcuft7Mj",
                    "supercharge-test")
result = chargebee.Subscription.create({
    "plan_id" : "spacebox-spaceplan-10-boxes",
    "plan_quantity" : 5,
    "customer" : {
        "email" : "john@user.com",
        "first_name" : "John",
        "last_name" : "Doe",
        "phone" : "+1-949-999-9999"
    }
})
subscription = result.subscription
customer = result.customer
            </code>
        </pre>
    </div>
</div>




<div role="tabpanel" class="tab-pane" id="java">
    <div class="strp-feature-preetify">
        <pre class="cb-dark__prettify">
            <code class="prettyprint lang-java">
Environment.configure("supercharge-test","test_XFZWh2otngDtKBLglQfqknrrTVcuft7Mj");
Result result = Subscription.create()
    .planId("spacebox-spaceplan-10-boxes")
    .planQuantity(5)
    .customerEmail("john@user.com")
    .customerFirstName("John")
    .customerLastName("Doe")
    .customerPhone("+1-949-999-9999")
    .request();
Subscription subscription = result.subscription();
Customer customer = result.customer();
                </code>
            </pre>
        </div>
</div>



<div role="tabpanel" class="tab-pane" id="net">
    <div class="strp-feature-preetify">
        <pre class="cb-dark__prettify">
            <code class="prettyprint lang-cs">
ApiConfig.Configure("supercharge-test","test_XFZWh2otngDtKBLglQfqknrrTVcuft7Mj");
EntityResult result = Subscription.Create()
    .PlanId("spacebox-spaceplan-10-boxes")
    .PlanQuantity(5)
    .CustomerEmail("john@user.com")
    .CustomerFirstName("John")
    .CustomerLastName("Doe")
    .CustomerPhone("+1-949-999-9999")
    .Request();
Subscription subscription = result.Subscription;
Customer customer = result.Customer;
            </code>
        </pre>
    </div>
</div>




<div role="tabpanel" class="tab-pane" id="node">
    <div class="strp-feature-preetify">
        <pre class="cb-dark__prettify">
            <code class="prettyprint lang-js">
var chargebee = require("chargebee");
chargebee.configure({site : "supercharge-test",  api_key : "test_XFZWh2otngDtKBLglQfqknrrTVcuft7Mj"});
chargebee.subscription.create({
    plan_id : "spacebox-spaceplan-10-boxes",
    plan_quantity : 5,
    customer : {
        email : "john@user.com",
        first_name : "John",
        last_name : "Doe",
        phone : "+1-949-999-9999"
    }
}).request(function(error, result){
    if(error){
        console.log(error);
    } else{
        console.log(result);
        var subscription = result.subscription;
        var customer = result.customer;
        var card = result.card;
        var invoice = result.invoice;
    }
})
            </code>
        </pre>
    </div>
</div>
</div>
        </div>


                            <div class="strp-feature__tab-description  hidden-xs hidden-sm">
                                Use this ‘Create Subscription’ API in your terminal and see how it works for you.
                            </div>
                        </div>
                        <div class="col-sm-5 col-md-4">
                            
                            
                        </div>
                    </div>
                </div>
            </section>



            <!-- ================= Coupons Section =================  -->
            <section class="strp-feature m-y-3l m-y-6s-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 col-md-8  hidden-xs">
                            <figure class="strp-feature__img discount-img">
                                <div class="feature__img-discount">
                                    <img src="/static/website/version/images/home/stripe/coupon@2x.png" width="690"  class="img-responsive" alt="">
                                </div>
                            </figure>
                        </div>
                        <div class="col-sm-5 col-md-4">
                            <div class="strp-feature__content">
                                <header>
                                    <h2 class="feature__content-label">COUPONS, DISCOUNTS, PRICING</h2>
                                    <div class="feature__content-title ff-acuminpro">Play around with Plans & Pricing</div>
                                </header>
                                <figure class="strp-feature__img discount-img visible-xs">
                                    <div class="feature__img-discount">
                                        <img src="/static/website/version/images/home/stripe/coupon@2x.png" width="690"  class="img-responsive" alt="">
                                    </div>
                                </figure>
                                <section class="feature__content-text f-discount__content-space">

                                    <h3 class="ff-acuminpro">Experiment with different recipes of plans and pricing for your SaaS or subscription business. </h3>
                                    <ul>
                                        <li>Coupons, discounts, trial extensions, reactivations, upgrades & downgrades</li>
                                        <li>Billing changes, grandfathering prices </li>
                                        <li>Generate coupon codes in bulk, within minutes</li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- ================= Customer help Section =================  -->
            <section class="help-spec bg-ravi p-t-1l p-t-0-xs">
                <div class="container">
                    <div class="row">
                        <div class="visible-xs">
                            <img src="/static/website/version/images/home/stripe/ravi-animation.gif"  width="550" class="img-responsive" alt="">
                        </div>
                        <div class="col-sm-7 col-sm-offset-5 col-md-7 col-md-offset-5">
                            <div class="help-spec__text">
                                <h2 class="help-spec__text-title ff-acuminpro">Hi there! I’m Ravi and I obsess about all things customer success at Chargebee.  </h2>
                                <div class="help-spec__text-subtitle">You can ask me anything about subscription billing, payment gateways, and the poetry of snooker balls. </div>
                                <div class="help-spec__text-desc">
                                    <span>Customers across 51 countries vouch for Chargebee Support.</span> Take a look at the <a href="https://www.g2crowd.com/products/chargebee/reviews" target="_blank">reviews</a> on G2Crowd. Bragging moment: we recently earned ourselves the high performer badge as well!
                                </div>
                            </div>


                            <div class="strp-fback__box">
                                <div class="strp-fback__box-text">
                                    “….They’re like a team of Gandalfs.”
                                </div>
                                <div class="strp-fback__box-footer">
                                    <div class="fback__author">
                                        <div class="fback__author-img">
                                        <img src="/static/website/version/images/home/stripe/img-willattar.png" width="48" alt=""> 
                                        </div>
                                        <div class="fback__author-name">
                                            <div>Will Attar</div>
                                            <div class="fback__author-designation">CEO, <span>Comic Bento</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <!-- ================= Convinced Section =================  -->
            <section class="strp-conclusion">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                            <div class="strp-conclusion__title">
                                <h2 class="ff-acuminpro">Convinced yet?</h2>
                                <div class="strp-conclusion__description">Migrate to Chargebee in no time. Hit the ground running.<br class="hidden-xs">Oh, and did we tell you Chargebee is free till you hit your first $50K in revenue?</div>
                                <div>
                                    <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-sec btn-primary btn-primary-sec btn-md btn-suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                <img src="/static/resources/brand/chargebee-icon-white.svg" alt="Chargebee Logo Mark" style="width: 30px; margin-top: -7px; margin-right: 10px;">Sign up for free</a>
                                </div>   
                            </div>
                        </div>

                        <div class="col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                        </div>
                    </div>           
                </div>
            </section>
        </div>
        <app-footer />
    </div>
</template>

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
        mounted() {
            $('.con__question-group ul > li').click(function(){
                $(this).addClass('active').siblings().removeClass('active');
            });
        },
        methods: {}
    }
</script>
<style>
.strp-cols {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.strp-col {
    flex: 0 0 50%;
    display: flex;
    justify-content: center;
    min-height: 500px;
}
.feature__img-dashboard .img-responsive {
    margin: 0 auto;
} 
@media (max-width: 767px) {
    .strp-cols {
       display: block;
    }
    .strp-col {
       min-height: inherit;
    }
}
.strp-fback__content{
    color: #ffffff;
    margin-top: 40px;
}
.strp-feature{
    margin-top: 90px;
} 
</style>