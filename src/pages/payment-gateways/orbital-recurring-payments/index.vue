<template>
    <div>
        <app-meta 
            :cb-title="'Do more with Orbital Recurring Payments - Chargebee'" 
            :cb-desc="'Keep Orbital as a payment option and leverage Chargebee\'s billing engine to take care of all the other scenarios for your recurring revenue business.'" 
            :cb-url="'/payment-gateways/orbital-recurring-payments/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'"
            :cb-has-noindex="true" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <!-- ===============================================================
                            Start Banner Part  
            ===============================================================-->
            <section class="hero hero--invert" style="background-image: none; background-color: #F5F5F5; padding-bottom: 30px;">
                <div class="container">
                    <article>
                        <h1>Do more with Chargebee and Orbital</h1>
                        <p style="max-width: 540px;">Get paid with Orbital (Chase Paymentech), manage subscriptions with Chargebee</p>
                        <div class="mar-t-sm mar-b-xs hidden-xs hidden-sm">
                            <!-- <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-primary btn-primary-sec btn-md btn-suffix" style="color:#fff;" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                Sign up for Free
                            </a> -->
                            <!-- new -->
                            <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-sec btn-primary btn-primary-sec btn-md btn-suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                <img src="/static/resources/brand/chargebee-icon-white.svg" alt="Chargebee Logo Mark" style="width: 30px; margin-top: -7px; margin-right: 10px;"> Sign up for free
                            </a>
                            <br>
                            <a href="/schedule-a-demo/?ref=gateway" style="padding-top: 15px; display: inline-block;"><small>Schedule a Demo</small></a>
                        </div>
                    </article>
                </div>
            </section>
            <!-- ================= End Banner part =================  -->
            <section class="container">

                <!-- ================= Invoice Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                            <img src="/static/website/version/images/payment-gateways/cb-invoice.svg" width="613" class="img-responsive" alt="">
                            <div class="space-top-md visible-sm visible-xs"></div>
                        </div>
                        <div class="col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-1">
                            <div class="tpmain-label">Accurate, Transparent Invoicing</div>
                            <h2 class="tpmain-content__title">Inspire your customers' trust</h2>
                            <p class="tpmain-content__text">
                            Chargebee helps you send invoices with all the nitty-gritties. Handle every complexity with ease.
                            </p>
                            <p class="tpmain-content__text tpmain-content__dash">Generate VAT invoices</p>
                            <p class="tpmain-content__text tpmain-content__dash">Track unpaid invoices</p>
                            <p class="tpmain-content__text tpmain-content__dash">Void/write-off invoices</p>
                            <p class="tpmain-content__text tpmain-content__dash">Record partial/excess payments</p>
                            <p class="tpmain-content__text tpmain-content__dash">Create credit notes for invoices, with no complications whatsoever</p>
                            <p class="tpmain-content__text tpmain-content__dash">Export, download or access invoices via API</p>

                            <a href="/recurring-billing-invoicing/recurring-invoices/">Send beautiful and accurate invoices →</a>
                        </div>
                    </div>
                </article>

                <!-- ================= Coupons and Subscription Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-1">
                            <div class="tpmain-content__col">
                                <div class="tpmain-label">Subscription Management</div>
                                <h2 class="tpmain-content__title">Manage all your subscriptions in one place</h2>
                                <p class="tpmain-content__text">Manage the entire lifecycle of your subscriptions, create plans & products and view all your subscriptions in one place. While you're at it, invite your entire team to simplify your billing operations.</p>
                                <p class="tpmain-content__text tpmain-content__dash">Role based access for subscription management.</p>
                                <p class="tpmain-content__text tpmain-content__dash">Easily manageable Product and Add on catalog</p>
                                <p class="tpmain-content__text tpmain-content__dash">All your subscriptions in one dashboard</p>
                            </div>
                        </div>
                        <div class="col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-2">
                            <div class="tpmain-content__col">
                                <div class="tpmain-label">Proration & Credit Management</div>
                                <h2 class="tpmain-content__title">Handle upgrades and downgrades with intelligent proration</h2>
                                <p class="tpmain-content__text">Adjusting prorated credits for downgrades or calculating charges when a customer upgrades should never be done manually. Chargebee ensures your customers are charged, just the right amount, every time.</p>
                                <p class="tpmain-content__text tpmain-content__dash">Cover changes to billing term, upgrades, or downgrades</p>
                                <p class="tpmain-content__text tpmain-content__dash">Create credits for paid invoices</p>
                                <p class="tpmain-content__text tpmain-content__dash">Communicate the changes to customers</p>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- ================= Dunning Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-5 col-md-offset-1 col-md-push-6 col-lg-5 col-lg-offset-1 col-lg-push-6">
                            <img src="/static/website/version/images/home/stripe/dunning@2x.png" width="580"  class="img-responsive" alt="">
                            <div class="space-top-md visible-sm visible-xs"></div>
                        </div>

                        <div class="col-md-5 col-md-offset-1 col-md-pull-6 col-lg-5 col-lg-offset-1 col-lg-pull-6">
                            <div class="tpmain-label">Smart Dunning Management</div>
                            <h2 class="tpmain-content__title">Rescue lost revenue</h2>
                            <p class="tpmain-content__text">
                            With Chargebee's flexible retry logic, involuntary churn is a thing of the past
                            </p>
                            <p class="tpmain-content__text tpmain-content__dash">Configure retry attempts for card payments, ACH, SEPA, Amazon Payments, and more</p>
                            <p class="tpmain-content__text tpmain-content__dash">Set up automatic reminders for payments receivable by cash/check</p>
                            <p class="tpmain-content__text tpmain-content__dash">Automate requests for new payment information, before your customer’s card expires</p>

                            <a href="/recurring-payments/dunning-management/">Save money with Chargebee's Smart Retry logic →</a>
                        </div>
                        
                    </div>
                </article>


                <!-- ================= Testimonial Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-9 col-md-offset-1 col-lg-8 col-lg-offset-2">
                            
                            <div class="tpmain-testimonial">
                                <div class="tpmain-testimonial__container">
                                    <div class="tpmain-testimonial__figure">
                                        <img src="/static/website/version/images/home/stripe/img-tim.png" class="img-responsive">
                                    </div>
                                    <div class="tpmain-testimonial__content">
                                        <div class="tpmain-testimonial__disp"><span class="tpmain-testimonial__mark">Easy integration. Enhanced reporting capabilities. Excellent customer support</span> - this is huge considering how deficient many players in the space are when it comes to actually servicing the client post integration. </div>
                                        <div class="tpmain-testimonial__author">Tim Bieser</div>
                                        <div class="tpmain-testimonial__role">Managing Director, Study.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>     
                    </div>
                </article>


                <!-- ================= Reporting Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                            <img src="/static/website/version/images/product/reports.png" width="808"  class="img-responsive" alt="">
                            <div class="space-top-md visible-sm visible-xs"></div>
                        </div>
                        <div class="col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-1">
                            <div class="tpmain-label">SaaS Metrics and Reports</div>
                            <h2 class="tpmain-content__title">Stay on top of your numbers</h2>

                            <p class="tpmain-content__text">
                            Chargebee crunches all your metrics from different payment channels into one dashboard for you to track the health of your business. Don't ever miss anything that matters.
                            </p>
                            <p class="tpmain-content__text tpmain-content__dash">MRR & CMRR</p>
                            <p class="tpmain-content__text tpmain-content__dash">Refunds</p>
                            <p class="tpmain-content__text tpmain-content__dash">ARPU</p>
                            <p class="tpmain-content__text tpmain-content__dash">Transaction Trend</p>
                            <p class="tpmain-content__text tpmain-content__dash">Signups & Activations</p>
                            <p class="tpmain-content__text tpmain-content__dash">Churn</p>
                            <a href="/saas-reporting/">Access SaaS Metrics that matter →</a>
                        </div>
                    </div>
                </article>


                <!-- ================= Accounting Section =================  -->
                <!-- <article class="tpmain-content">
                    <div class="row">
                        
                        <div class="col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-1">
                            <div class="tpmain-label">Accounting</div>
                            <h2 class="tpmain-content__title">Accounting integrations and reporting </h2>

                            <p class="tpmain-content__text">
                            Integrations that let finance teams keep the main thing the main thing, and automate the rest. Automatically map everything, close your books with accuracy, and get a grasp of key drivers. 
                            </p>
                            <p class="tpmain-content__text tpmain-content__dash">Full data sync with both Xero and QuickBooks Online.</p>
                            <p class="tpmain-content__text tpmain-content__dash">Finish payment reconciliation in 1/10th of the time. </p>
                            <p class="tpmain-content__text tpmain-content__dash">Get access to reports on: A/R Aging, Tax Liability, and other important areas.</p>
                        </div>
                        <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                            <img src="/static/website/version/images/payment-gateways/beautiful-invoice.svg" width="808"  class="img-responsive" alt="">
                            <div class="space-top-md visible-sm visible-xs"></div>
                        </div>
                    </div>
                </article> -->

                <!-- ================= Taxes Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        
                        <div class="col-md-5 col-md-offset-1 col-lg-8 col-lg-offset-2">
                            <div class="tpmain-label">Taxes</div>
                            <h2 class="tpmain-content__title">Automate tax calculation, and compliance</h2>

                            <p class="tpmain-content__text">
                            Don't keep track of changing tax rules, Chargebee will do it for you. Be rest assured that the accurate tax amount is calculated
                            </p>
                            <p class="tpmain-content__text tpmain-content__dash">Avalara Integration for US and Canadian Taxes</p>
                            <p class="tpmain-content__text tpmain-content__dash">Native support for AU & NZ GST</p>
                            <p class="tpmain-content__text tpmain-content__dash">EU VAT with VAT Number Validation & VAT Invoices</p>
                        </div>
                        
                    </div>
                </article>


                <!-- ================= Email Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-3 col-md-offset-2">
                            <img src="/static/website/version/images/home/stripe/mail@2x.png" width="280"  class="img-responsive" alt="">
                            <div class="space-top-md visible-sm visible-xs"></div>
                        </div>
                        <div class="col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-1">
                            <div class="tpmain-label">Transactional Email Notifications</div>
                            <h2 class="tpmain-content__title">Automate the mundane</h2>

                            <p class="tpmain-content__text">
                            Keep your customers in the loop for almost every event under the subscription sun, with
                            </p>
                            <p class="tpmain-content__text tpmain-content__dash">Pre-designed email templates</p>
                            <p class="tpmain-content__text tpmain-content__dash">MergeVar support for complete customization</p>
                            <p class="tpmain-content__text tpmain-content__dash">TEXT & HTML templates for each event</p>
                            <p class="tpmain-content__text tpmain-content__dash">SMTP support (Sendgrid/Mailgun/Gmail)</p>

                            <a href="/recurring-billing-invoicing/transactional-lifecycle-emails/">Send smarter transaction emails →</a>
                        </div>
                    </div>
                </article>

                <!-- ================= Data Portability Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-1">
                            <div class="tpmain-content__col">
                                <!-- <div class="tpmain-label">Subscription Management</div> -->
                                <h2 class="tpmain-content__title">Data Portability</h2>
                                <p class="tpmain-content__text">Chargebee supports credit card portability. As much as we'd love to work with you, if you ever choose to leave we won't lock your data in, we'll just be heartbroken.</p>
                            </div>
                        </div>
                        <div class="col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-2">
                            <div class="tpmain-content__col">
                                <!-- <div class="tpmain-label">Automatic Subscription Upgrades, Downgrades and Proration.</div> -->
                                <h2 class="tpmain-content__title">Use Orbital with other gateways</h2>
                                <p class="tpmain-content__text">If you would prefer Orbital as just a payment option, keep it. Use it along with other gateways and payment methods as an alternative payment option.</p>
                            </div>
                        </div>
                    </div>
                </article>


                <!-- ================= saas Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        
                        <div class="col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-1">
                            <div class="tpmain-label">Robust APIs and SDKs</div>
                            <h2 class="tpmain-content__title">Tailor amazing billing experiences</h2>

                            <p class="tpmain-content__text">
                                Like Orbital's API? You’ll love Chargebee!<br class="hidden-xs">
                                Intelligent RESTful APIs that change with your users'
                                signup data. And you get to pick your favorite language.
                            </p>
                        </div>
                        <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                            

                    
                            <div class="cn-tab hidden-xs hidden-sm">
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs cn-tab__list" role="tablist">
                                <li role="presentation" class="cn-tab__item active"><a href="#curl" aria-controls="net" role="tab" data-toggle="tab">CURL</a></li>
                                <li role="presentation" class="cn-tab__item"><a href="#php" aria-controls="php" role="tab" data-toggle="tab">PHP</a></li>
                                <li role="presentation" class="cn-tab__item"><a href="#ruby" aria-controls="ruby" role="tab" data-toggle="tab">RUBY</a></li>
                                <li role="presentation" class="cn-tab__item"><a href="#python" aria-controls="python" role="tab" data-toggle="tab">PYTHON</a></li>
                                <li role="presentation" class="cn-tab__item"><a href="#java" aria-controls="java" role="tab" data-toggle="tab">JAVA</a></li>
                                <li role="presentation" class="cn-tab__item"><a href="#net" aria-controls="net" role="tab" data-toggle="tab">.NET</a></li>
                                <li role="presentation" class="cn-tab__item"><a href="#node" aria-controls="node" role="tab" data-toggle="tab">NODE</a></li>
                            </ul>

                            <!-- Tab panes -->
                    <div class="tab-content cn-tab__content">

<div role="tabpanel" class="tab-pane active" id="curl">
    <div class="cn-prettify">
        <pre>
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
<div class="cn-prettify">
    <pre>
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
<div class="cn-prettify">
    <pre>
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
<div class="cn-prettify">
    <pre>
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
    <div class="cn-prettify">
        <pre>
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
    <div class="cn-prettify">
        <pre>
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
    <div class="cn-prettify">
        <pre>
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


                            <div class="hidden-xs hidden-sm" style="font-size: 12px; color: rgba(0, 0, 0, 0.5);">
                                Use this ‘Create Subscription’ API in your terminal and see how it works for you.
                            </div>
                    





                        </div>
                    </div>
                </article>




                <!-- ================= Testimonial Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-9 col-md-offset-1 col-lg-8 col-lg-offset-2">
                            
                            <div class="tpmain-testimonial">
                                <div class="tpmain-testimonial__container">
                                    <div class="tpmain-testimonial__figure">
                                        <img src="/static/website/version/images/home/stripe/img-liadbiton.png" class="img-responsive">
                                    </div>
                                    <div class="tpmain-testimonial__content">
                                        <div class="tpmain-testimonial__disp">...the biggest thing we loved is the API, it was SO EASY to integrate with Chargebee, we love it</div>
                                        <div class="tpmain-testimonial__author">Liad Biton</div>
                                        <div class="tpmain-testimonial__role">CEO, CSS LivePOS</div>
                                    </div>
                                </div>
                            </div>
                        </div>     
                    </div>
                </article>


                <article class="tpmain-content">
                    <div class="tpmain-callto">
                        <div class="row">
                            <div class="col-md-7 col-lg-6 col-lg-offset-1">
                                <div class="tpmain-callto__title">With Chargebee, subscription billing and accounting are effortless, efficient, and everything in between.</div>
                            </div>
                            <div class="col-md-5 col-lg-4 col-lg-offset-1">
                                <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-primary btn-primary-sec btn-md btn-suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                    Sign up for free
                                </a>
                            </div>
                        </div>
                    </div>
                </article>



                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-6">
                            <a class="tpmain-panel" style="min-height: 315px;" href="https://www.chargebee.com/docs/migrating-subscriptions-to-chargebee.html">
                                <h4 class="tpmain-panel__title">Complete Migration Support</h4>
                                <p class="tpmain-panel__text">Migrating your customer data (subscriptions and other details) is simple. Just send us a request, and we’ll assist you through the process.</p>
                                <span class="tpmain-panel__link">Learn more &rarr;</span>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <a class="tpmain-panel" style="min-height: 315px;" href="/subscription-management/">
                                <h4 class="tpmain-panel__title">Take a Product Tour</h4>
                                <p class="tpmain-panel__text">With Chargebee, manage the entire subscription lifecycle. Send recurring invoices with accurate global taxes. Dispatch lifecycle emails in multiple languages. Have enough time to ship delight of all sorts. </p>
                                <span class="tpmain-panel__link">Here's how you can pull it off &rarr;</span>
                            </a>
                        </div>
                    </div>
                </article>


            </section>
            



            
            <div class="space-top hidden-sm hidden-xs"></div> 
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