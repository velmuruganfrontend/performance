<!-- ===========================================================================
// cb-title		=	Page Level Titles (Title, Twitter, OG)
// cb-desc		=	Page Level Descriptions (Description, Twitter, OG)
// cb-image		=	Page Level Images (Twitter, OG)
// cb-style		=	Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script	=	Page Level Head Script. Using this tag to put head level scripts
// cb-body-script	=	Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex	=	Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header 		=	App header will add header to the page.
//                  Need a white header in page use :hasInvert="true" attribute
//                  Need a basic header(without menu's) in page use :hasBasicHeader="true" attribute
// app-footer 		=	App footer will add footer to the page.
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
        :cb-title="'Chargebee + Siftery Deal'"
        :cb-desc="'Supercharge your Stripe Subscriptions. Send invoices, manage coupons, accept ACH, access reports that matter and do more with Chargebee\'s subscription suite.'"
        :cb-url="'/payment-gateways/stripe/'"
        :cb-image="''"
        :cb-style="'/static/website/version/styles/new.css'"
        :cb-head-script="''"
        :cb-body-script="'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'"
        :cb-has-noindex="true"
        :disable-bootstrap-css="false"
        :disable-header-footer-css="false" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="true" :hasBasicHeader="false" :hasBackToCareers="false" />
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <!-- ===============================================================
                                Start Banner Part
            ===============================================================-->
            <section class="hero hero--black hero-lalign" style="background-image: none;">
                <div class="container">
                <article class="hero-container">
                    <h1> Automate your Recurring Billing with Chargebee </h1>
                    <p style="max-width: 540px;">35% discount on our Rise and Scale plans, exclusive for Siftery Community. Sign up today and redeem your deal during checkout with this coupon code 'SIFTERY35'.</p>
                    <div class="space-item valign-top" style="margin: 42px 0">
                        <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-primary btn-md btn-suffix btn-shadow" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">Get Started Now</a>
                        <a href="/schedule-a-demo/" class="btn btn-ghost-white btn-suffix btn-md">Request a Demo</a>
                    </div>

                </article>
                </div>
            </section>
            <!-- ================= End Banner part =================  -->
            <section class="container">

            <!-- ================= Invoice Section =================  -->
            <article class="tpmain-content">
                <div class="row">
                    <div class="col-md-7 col-md-offset-0 col-md-push-5 col-lg-6 col-lg-offset-0 col-lg-push-6 cb-invoice-align">
                        <img src="/static/website/version/images/payment-gateways/cb-invoice.svg" width="613" class="img-responsive" alt="">
                        <div class="space-top-md visible-sm visible-xs"></div>
                    </div>

                    <div class="col-md-5 col-md-offset-0 col-md-pull-7 col-lg-5 col-lg-offset-0 col-lg-pull-6">
                        <div class="tpmain-label">Accurate, Transparent Invoicing</div>
                        <h2 class="tpmain-content__title">Inspire your customers' trust</h2>
                        <p class="tpmain-content__text">
                            You care about serving customers better, and as you scale, you will encounter different requests from your customers especially around payments. You should never be forced to say NO because your billing system does not allow you to handle those requests as they come.
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
                    <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-0">
                        <div class="tpmain-content__col">
                            <div class="tpmain-label">Subscription Management</div>
                            <h2 class="tpmain-content__title">Manage all your subscriptions in one place</h2>
                            <p class="tpmain-content__text">Extend trials. Add credits. Offer discounts. Request new payment methods. Filter all non-renewing subscriptions. And do much more, within one simple dashboard. Plus. Empower different teams to act fast with role-based access.</p>
                        </div>
                    </div>
                    <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                        <div class="tpmain-content__col">
                            <div class="tpmain-label">Coupon Management</div>
                            <h2 class="tpmain-content__title">Run smarter campaigns with coupons</h2>
                            <p class="tpmain-content__text">Sales and Marketing teams can work with complex campaigns without dev help. For ex: With a few clicks you can set up a 20% discount for 6 months, applicable only on a given plan, valid only when the coupon is redeemed before Q3 2017, and limit it to 50 subscriptions. Yup.</p>
                        </div>
                    </div>
                </div>
            </article>

            <!-- ================= Dunning Section =================  -->
            <article class="tpmain-content">
                <div class="row">
                    <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                        <img src="/static/website/version/images/home/stripe/dunning@2x.png" width="580"  class="img-responsive" alt="">
                        <div class="space-top-md visible-sm visible-xs"></div>
                    </div>

                    <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                        <div class="tpmain-label">Smart Dunning Management</div>
                        <h2 class="tpmain-content__title">Rescue lost revenue</h2>
                        <p class="tpmain-content__text">
                            With Chargebee's flexible retry logic and Stripe's automatic card update feature, involuntary churn is a thing of the past
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
                    <div class="col-md-5 col-lg-5 ">
                        <div class="cb-testimonial cb-testimonial-t--md">
                            <div class="cb-testimonial__content">
                                <div class="cb-testimonial__desc">
                                    <span class="cb-testimonial__mark">Easy integration. Enhanced reporting capabilities. Excellent customer support</span>- this is huge considering how deficient many players in the space are when it comes to actually servicing the client post integration.
                                </div>
                            </div>
                            <div class="cb-testimonial__footer">
                                <div class="cb-testimonial__container">
                                    <div class="cb-testimonial__figure cb-testimonial__quote"></div>
                                    <div class="cb-testimonial__author">
                                        <div class="cb-testimonial__name">Tim Bieser</div>
                                        <div class="cb-testimonial__role">Managing Director, Study.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                        <div class="tpmain-label">Taxes</div>
                        <h2 class="tpmain-content__title">Automate tax calculation, and compliance</h2>

                        <p class="tpmain-content__text">
                            Collect accurate taxes in the EU, the USA, Canada, Australia, and other countries, along with an Avalara integration. Handle both fringe and everyday use cases.
                        </p>
                        <p class="tpmain-content__text tpmain-content__dash">Set up tax rates for different products </p>
                        <p class="tpmain-content__text tpmain-content__dash">Display inclusive taxes where need be</p>
                        <p class="tpmain-content__text tpmain-content__dash">Manage tax exempt customers </p>
                        <p class="tpmain-content__text tpmain-content__dash">Comply with EU VAT rules with Location Validation, VAT Number Validation, and VAT invoicing. </p>
                    </div>

                </div>
            </article>

            <!-- ================= saas Section =================  -->
            <article class="tpmain-content">
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2 tpmain-figure-b-sm">
                        <img src="/static/website/version/images/home/stripe/dashboard@2x.png" width="690"  class="img-responsive " alt="" style="margin: auto;">
                        <div class="space-top-md visible-sm visible-xs"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-0">
                        <div class="tpmain-content__col">
                            <div class="tpmain-label">SaaS Metrics and Reports</div>
                            <h2 class="tpmain-content__title">Stay on top of your numbers</h2>
                            <p class="tpmain-content__text">
                                Analytics begets insights begets growth. MRR, CMRR, Churn Rate, Signups, Activations, Refunds - you name it; track all of your core SaaS metrics in real-time, right on your dashboard. Want to dig deeper? An exhaustive actionable manual report on the above metrics as well as on ARPU, LTV, Cohorts and more, can be drop-shipped straight to your inbox.
                            </p>
                            <a href="/saas-reporting/">Access SaaS Metrics that matter →</a>
                        </div>
                    </div>
                    <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                        <div class="tpmain-content__col">
                            <div class="tpmain-label">Accounting</div>
                            <h2 class="tpmain-content__title">Accounting integrations and reporting </h2>
                            <p class="tpmain-content__text">
                                Integrations that let finance teams keep the main thing the main thing, and automate the rest. Automatically map everything, close your books with accuracy, and get a grasp of key drivers.
                            </p>
                            <p class="tpmain-content__text tpmain-content__dash">Full data sync with both Xero and QuickBooks Online.</p>
                            <p class="tpmain-content__text tpmain-content__dash">Finish payment reconciliation in 1/10th of the time. </p>
                            <p class="tpmain-content__text tpmain-content__dash">Get access to reports on: A/R Aging, Tax Liability, and other important areas.</p>
                            <a href="/saas-accounting-and-taxes/xero-accounting/stripe-xero-integration/">Sync Stripe and Xero →</a>
                        </div>
                    </div>
                </div>
            </article>

            <!-- ================= Email Section =================  -->
            <article class="tpmain-content">
                <div class="row">
                    <div class="col-md-3 col-md-offset-1 col-md-push-6">
                        <img src="/static/website/version/images/home/stripe/mail@2x.png" width="280"  class="img-responsive" alt="">
                        <div class="space-top-md visible-sm visible-xs"></div>
                    </div>
                    <div class="col-md-4 col-md-offset-2 col-md-pull-4 mar-t-md">
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


            <!-- ================= saas Section =================  -->
            <article class="tpmain-content">
                <div class="row">

                    <div class="col-md-4 col-md-offset-1 col-md-push-6 mar-t-md">
                        <div class="tpmain-label">Robust APIs and SDKs</div>
                        <h2 class="tpmain-content__title">Tailor amazing billing experiences</h2>

                        <p class="tpmain-content__text">
                            Like Stripe’s API? You’ll love Chargebee!<br class="hidden-xs">
                            Intelligent RESTful APIs that change with your users'
                            signup data. And you get to pick your favorite language.
                        </p>
                    </div>
                    <div class="col-md-6 col-md-pull-5">



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
        $('.con__question-group ul > li').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
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
    .cb-testimonial__content:after{
        display: none;
    }
    .cb-testimonial__desc {
        font-size: 16px;
        color: #787882;
        letter-spacing: -0.2px;
        line-height: 24px;
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
